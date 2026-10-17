import assert from 'node:assert/strict'
import test, { type TestContext } from 'node:test'
import { once as nodeOnce, type EventEmitter } from 'node:events'
import mqtt, { type IClientOptions, type MqttClient } from 'mqtt'
import { startMqttBroker } from '../src/mqtt/broker.js'
import { ProtoPublisher } from '../src/mqtt/publisher.js'
import { ProtocolCodec } from '../src/protocol.js'
import { parseConfig } from '../src/config.js'

// mqtt.js has a narrower emitter type, but implements Node's event API at runtime.
function once(emitter: MqttClient | EventEmitter, name: string) {
  return nodeOnce(emitter as unknown as EventEmitter, name)
}

async function fixture(context: TestContext, loggedIn = true, delay = 0) {
  const codec = await ProtocolCodec.load()
  const handle = await startMqttBroker(codec, '127.0.0.1', 0,
    { robotId: 3, loggedIn, connackDelayMs: delay })
  const clients: MqttClient[] = []
  context.after(async () => {
    await Promise.all(clients.map((client) => new Promise<void>((resolve) => client.end(true, {}, () => resolve()))))
    await handle.close()
  })
  function connect(id = '3', options: IClientOptions = {}) {
    const client = mqtt.connect(`mqtt://127.0.0.1:${handle.port}`, {
      clientId: id, protocolVersion: 4, reconnectPeriod: 0, connectTimeout: 3000, ...options
    })
    // Keep expected rejected connections from raising unhandled error events.
    client.on('error', () => {})
    clients.push(client)
    return client
  }
  return { handle, codec, connect }
}

async function rejected(client: MqttClient) {
  const [error] = await once(client, 'error')
  assert.equal((error as Error & { code: number }).code, 2)
}

test('official profile delivers protobuf state through its internal MQTT bridge', { timeout: 5000 }, async (context) => {
  const { handle, codec, connect } = await fixture(context)
  const client = connect('3', { username: 'ignored-test-name', password: 'ignored-test-value' })
  await once(client, 'connect')
  await client.subscribeAsync('RobotDynamicStatus')
  const received = once(client, 'message')
  const publisher = new ProtoPublisher(handle.broker, codec, handle.official!.publish)
  await publisher.publish('RobotDynamicStatus', { currentHealth: 300 })
  const [topic, payload] = await received
  assert.equal(topic, 'RobotDynamicStatus')
  assert.equal(codec.decode(topic as string, payload as Buffer).currentHealth, 300)
  assert.ok(handle.official!.events.some((event) => event.event === 'CONNECTED' && event.clientId === 'official_cc_mock'))
})

test('wrong ID, padded ID and empty ID get MQTT 3.1.1 return code 2', { timeout: 5000 }, async (context) => {
  const { handle, connect } = await fixture(context)
  for (const id of ['103', '003', '']) await rejected(connect(id))
  assert.deepEqual(handle.official!.events.filter((e) => e.event === 'REJECT').map((e) => e.reason),
    ['robot_id_mismatch', 'robot_id_mismatch', 'empty_client_id'])
})

test('logged-out fixture rejects external client while internal bridge connects', { timeout: 5000 }, async (context) => {
  const { handle, connect } = await fixture(context, false)
  await rejected(connect())
  assert.ok(handle.official!.events.some((event) => event.reason === 'player_not_logged_in'))
  assert.ok(handle.official!.events.some((event) => event.event === 'CONNECTED' && event.clientId === 'official_cc_mock'))
})

test('duplicate ID is rejected without replacing the original; ID is reusable after close', { timeout: 5000 }, async (context) => {
  const { handle, connect } = await fixture(context)
  const first = connect()
  await once(first, 'connect')
  await rejected(connect())
  assert.equal(first.connected, true)
  const disconnected = once(handle.broker, 'clientDisconnect')
  await first.endAsync(true)
  await disconnected
  const next = connect()
  await once(next, 'connect')
  assert.equal(next.connected, true)
})

test('external CustomControl reaches the internal subscriber without hardware actuation', { timeout: 5000 }, async (context) => {
  const { handle, connect, codec } = await fixture(context)
  const client = connect()
  await once(client, 'connect')
  const delivered = new Promise<void>((resolve) => {
    handle.broker.on('publish', (packet, source) => {
      if (source?.id === '3' && packet.topic === 'CustomControl') resolve()
    })
  })
  await client.publishAsync('CustomControl', codec.encode('CustomControl', { data: [1, 2, 3] }), { qos: 1 })
  await delivered
  // Delivery to a subscriber is asynchronous relative to publisher acknowledgement.
  await new Promise<void>((resolve, reject) => {
    const until = Date.now() + 1000
    const check = () => {
      if (handle.official!.events.some((e) => e.event === 'CONTROL_RECEIVED' && e.topic === 'CustomControl')) resolve()
      else if (Date.now() > until) reject(new Error('Internal bridge did not receive control'))
      else setTimeout(check, 10)
    }
    check()
  })
})

test('logout closes an established external connection on the one-second check', { timeout: 5000 }, async (context) => {
  const { handle, connect } = await fixture(context)
  const client = connect()
  await once(client, 'connect')
  const closed = once(client, 'close')
  handle.official!.setLoggedIn(false)
  await closed
  assert.ok(handle.official!.events.some((e) => e.event === 'LOGOUT_KICK' && e.clientId === '3'))
  await rejected(connect())
})

test('persistent MQTT session survives disconnect and reconnect', { timeout: 5000 }, async (context) => {
  const { handle, connect } = await fixture(context)
  const first = connect('3', { clean: false })
  const [initial] = await once(first, 'connect')
  assert.equal(initial.sessionPresent, false)
  await first.subscribeAsync('GameStatus', { qos: 1 })
  const disconnected = once(handle.broker, 'clientDisconnect')
  await first.endAsync()
  await disconnected
  const second = connect('3', { clean: false })
  const [resumed] = await once(second, 'connect')
  assert.equal(resumed.sessionPresent, true)
})

test('100 ms CONNACK injection keeps a conforming client connected', { timeout: 5000 }, async (context) => {
  const { handle, connect } = await fixture(context, true, 100)
  const started = performance.now()
  const ready = once(handle.broker, 'clientReady')
  const client = connect()
  await once(client, 'connect')
  await ready
  assert.ok(performance.now() - started >= 80)
  assert.equal(client.connected, true)
  const event = handle.official!.events.find((e) => e.event === 'CONNECTED' && e.clientId === '3')!
  assert.ok(event.elapsedMs! >= 80)
})

test('official profile options are explicit and validated', () => {
  assert.equal(parseConfig([]).mqttProfile, 'open')
  const config = parseConfig(['--mqtt-profile', 'official-observed', '--robot-id=103',
    '--official-login-state', 'logged-out', '--connack-delay', '100'])
  assert.equal(config.robotId, 103)
  assert.equal(config.officialLoggedIn, false)
  assert.equal(config.connackDelayMs, 100)
  assert.throws(() => parseConfig(['--connack-delay', '100']))
  assert.throws(() => parseConfig(['--robot-id', '3.5']))
  assert.throws(() => parseConfig(['--official-login-state', 'maybe']))
})

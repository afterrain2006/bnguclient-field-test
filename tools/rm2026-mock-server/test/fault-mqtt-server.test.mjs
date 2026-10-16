import assert from 'node:assert/strict'
import net from 'node:net'
import test from 'node:test'
import { startFaultBroker } from '../scripts/fault-mqtt-server.mjs'

const CONNECT = Buffer.from([
  0x10, 0x0f, 0x00, 0x04, 0x4d, 0x51, 0x54, 0x54,
  0x04, 0x02, 0x00, 0x0a, 0x00, 0x03, 0x61, 0x62, 0x63
])

async function tryHandshake({ mode, delayMs, waitMs }) {
  const broker = await startFaultBroker({ port: 0, mode, delayMs })
  try {
    const received = await new Promise((resolve, reject) => {
      const client = net.createConnection({ host: broker.host, port: broker.port })
      client.setTimeout(waitMs)
      client.on('connect', () => client.write(CONNECT))
      client.once('data', data => { client.destroy(); resolve(data) })
      client.once('timeout', () => { client.destroy(); resolve(null) })
      client.once('error', reject)
      client.once('close', () => {})
    })
    return { received, ...broker.stats }
  } finally {
    await broker.close()
  }
}

test('TCP accepts a connection and MQTT CONNECT but never returns CONNACK', async () => {
  const result = await tryHandshake({ mode: 'silent', waitMs: 150 })
  assert.equal(result.tcpConnections, 1)
  assert.equal(result.mqttConnects, 1)
  assert.equal(result.connacksSent, 0)
  assert.equal(result.received, null)
})

test('slow CONNACK can exceed the client handshake timeout', async () => {
  const result = await tryHandshake({ mode: 'delayed', delayMs: 250, waitMs: 100 })
  assert.equal(result.mqttConnects, 1)
  assert.equal(result.received, null)
})

test('delayed CONNACK is received when the client waits long enough', async () => {
  const result = await tryHandshake({ mode: 'delayed', delayMs: 50, waitMs: 500 })
  assert.deepEqual(result.received, Buffer.from([0x20, 0x02, 0x00, 0x00]))
})

test('connection refusal is distinguishable from silence', async () => {
  const result = await tryHandshake({ mode: 'rejected', waitMs: 500 })
  assert.deepEqual(result.received, Buffer.from([0x20, 0x02, 0x00, 0x02]))
})

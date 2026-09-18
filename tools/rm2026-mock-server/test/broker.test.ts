import assert from 'node:assert/strict'
import test from 'node:test'
import mqtt from 'mqtt'
import { startMqttBroker } from '../src/mqtt/broker.js'
import { ProtoPublisher } from '../src/mqtt/publisher.js'
import { ProtocolCodec } from '../src/protocol.js'

test('broker publishes a protobuf payload on the expected topic', async (context) => {
  const codec = await ProtocolCodec.load()
  const broker = await startMqttBroker(codec, '127.0.0.1', 0)
  const client = mqtt.connect(`mqtt://127.0.0.1:${broker.port}`, {
    clientId: 'mock-server-test',
    reconnectPeriod: 0
  })

  context.after(async () => {
    client.end(true)
    await broker.close()
  })

  await new Promise<void>((resolve, reject) => {
    client.once('connect', () => resolve())
    client.once('error', reject)
  })
  await new Promise<void>((resolve, reject) => {
    client.subscribe('GameStatus', (error) => (error ? reject(error) : resolve()))
  })

  const received = new Promise<Buffer>((resolve) => {
    client.once('message', (topic, payload) => {
      assert.equal(topic, 'GameStatus')
      resolve(payload)
    })
  })
  const publisher = new ProtoPublisher(broker.broker, codec)
  await publisher.publish('GameStatus', {
    currentRound: 1,
    totalRounds: 3,
    redScore: 1,
    blueScore: 0,
    currentStage: 4,
    stageCountdownSec: 160,
    stageElapsedSec: 20,
    isPaused: false
  })

  const payload = await received
  const decoded = codec.decode('GameStatus', payload)
  assert.equal(decoded.currentStage, 4)
  assert.equal(publisher.counts.GameStatus, 1)
})

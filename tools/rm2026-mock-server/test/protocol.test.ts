import assert from 'node:assert/strict'
import test from 'node:test'
import { ProtocolCodec } from '../src/protocol.js'

test('encodes and decodes the repository GameStatus protobuf', async () => {
  const codec = await ProtocolCodec.load()
  const source = {
    currentRound: 1,
    totalRounds: 3,
    redScore: 7,
    blueScore: 5,
    currentStage: 4,
    stageCountdownSec: 123,
    stageElapsedSec: 42,
    isPaused: false
  }
  const payload = codec.encode('GameStatus', source)
  assert.ok(payload.length > 0)
  const decoded = codec.decode('GameStatus', payload)
  assert.equal(decoded.currentRound, 1)
  assert.equal(decoded.currentStage, 4)
  assert.equal(decoded.stageCountdownSec, 123)
})

test('encodes and decodes KeyboardMouseControl', async () => {
  const codec = await ProtocolCodec.load()
  const payload = codec.encode('KeyboardMouseControl', {
    mouseX: -12,
    mouseY: 9,
    mouseZ: 1,
    leftButtonDown: true,
    rightButtonDown: false,
    keyboardValue: 5,
    midButtonDown: false
  })
  const decoded = codec.decode('KeyboardMouseControl', payload)
  assert.equal(decoded.mouseX, -12)
  assert.equal(decoded.leftButtonDown, true)
  assert.equal(decoded.keyboardValue, 5)
})

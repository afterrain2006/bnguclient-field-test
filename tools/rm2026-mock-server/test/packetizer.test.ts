import assert from 'node:assert/strict'
import { randomBytes } from 'node:crypto'
import test from 'node:test'
import { packetizeFrame, parseFragment, reassembleFragments, UDP_HEADER_SIZE } from '../src/video/packetizer.js'

test('packetize and reassemble preserves a random frame', () => {
  const frame = randomBytes(10_123)
  const packets = packetizeFrame(frame, 0x1234, 1200)
  assert.equal(packets.length, 9)

  const first = parseFragment(packets[0])
  const last = parseFragment(packets.at(-1)!)
  assert.equal(first.frameNumber, 0x1234)
  assert.equal(first.fragmentIndex, 0)
  assert.equal(first.totalFrameSize, frame.length)
  assert.equal(packets[0].readUInt16BE(0), 0x1234)
  assert.equal(packets[0].readUInt16BE(2), 0)
  assert.equal(packets[0].readUInt32BE(4), frame.length)
  assert.equal(last.fragmentIndex, 8)
  assert.equal(last.payload.length, 523)
  assert.equal(packets.at(-1)!.length, UDP_HEADER_SIZE + 523)

  const reordered = [...packets].reverse()
  assert.deepEqual(reassembleFragments(reordered), frame)
})

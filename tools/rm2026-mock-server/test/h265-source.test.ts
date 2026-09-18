import assert from 'node:assert/strict'
import test from 'node:test'
import { parseAnnexBNalUnits, parseH265AccessUnits } from '../src/video/h265-source.js'

function nal(type: number, payload: number[], fourByte = false): Buffer {
  const startCode = fourByte ? [0, 0, 0, 1] : [0, 0, 1]
  return Buffer.from([...startCode, type << 1, 1, ...payload])
}

test('parses 3-byte and 4-byte Annex-B NAL start codes', () => {
  const stream = Buffer.concat([nal(35, [0x50], true), nal(19, [0x80, 1, 2]), nal(35, [0x50]), nal(1, [0x80, 3])])
  const nals = parseAnnexBNalUnits(stream)
  assert.deepEqual(nals.map((item) => item.type), [35, 19, 35, 1])
  assert.deepEqual(nals.map((item) => item.startCodeLength), [4, 3, 3, 3])
})

test('splits AUD-delimited stream into access units and finds keyframes', () => {
  const first = Buffer.concat([nal(35, [0x50]), nal(32, [1]), nal(33, [2]), nal(34, [3]), nal(19, [0x80, 4])])
  const second = Buffer.concat([nal(35, [0x50]), nal(1, [0x80, 5])])
  const units = parseH265AccessUnits(Buffer.concat([first, second]))
  assert.equal(units.length, 2)
  assert.equal(units[0].keyframe, true)
  assert.equal(units[1].keyframe, false)
  assert.deepEqual(units[0].nalTypes, [35, 32, 33, 34, 19])
  assert.deepEqual(units[0].data, first)
  assert.deepEqual(units[1].data, second)
})

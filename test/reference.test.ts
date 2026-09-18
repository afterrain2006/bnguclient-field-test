import test from 'node:test'
import assert from 'node:assert/strict'
import { decodeCustomByteBlock, validateByteLayout, type ByteLayout } from '../src/protocol/custom-byte-block.ts'
import { CommandRateLimiter, validateCommand } from '../src/protocol/commands.ts'
import { decodeMqttEventPayload } from '../src/mqtt/mqttPayloadDecoder.ts'
import { ControlPump, NEUTRAL_CONTROL } from '../src/protocol/control-pump.ts'
import { statePatch } from '../src/protocol/state-patch.ts'
import { formatJson } from '../src/protocol/json.ts'
import { ImageAssembler } from '../src/protocol/image-assembly.ts'
import { globalHealthEntries } from '../src/protocol/global-health.ts'

const layout: ByteLayout = { name: 'infantry', version: 1, frameSize: 150, byteOrder: 'little', pure: [{ name: 'energy', type: 'float', offset: 1, size: 4 }, { name: 'mode', type: 'int8_t', offset: 5, size: 1 }], companion: [] }
test('global HP follows own/opponent five-slot order, including blue-side clients', () => {
  const hp = [1,2,3,4,5,6,7,8,9,10]
  assert.deepEqual(globalHealthEntries(hp,103).map(x=>x.robotId),[101,102,103,104,107,1,2,3,4,7])
  assert.equal(globalHealthEntries(hp,3)[4].robotId,7)
  assert.throws(()=>globalHealthEntries([1,2,3],3),/10 entries/)
})
test('image assembly tolerates reordered/duplicate chunks and rejects inconsistent counts', () => {
  const assembler = new ImageAssembler()
  const chunk = (index: number, data: number[]) => ({cmd_type:2,img_id:7,block_idx:index,total_block:2,data_len:data.length,data})
  assert.equal(assembler.accept(chunk(1,[3,4]),0), null)
  assert.equal(assembler.accept(chunk(1,[3,4]),1), null)
  assert.deepEqual(assembler.accept(chunk(0,[1,2]),2), Uint8Array.from([1,2,3,4]))
  assembler.accept(chunk(0,[1]),3)
  assert.throws(()=>assembler.accept({...chunk(1,[2]),total_block:3},4),/changed/)
  assembler.accept(chunk(0,[1]),5)
  assert.equal(assembler.accept(chunk(1,[2]),20000),null)
})
test('optional state fields preserve last values, including explicit zero and false', async () => {
  const state = { currentHealth: 400, currentHeat: 73, canRemoteHeal: true }
  const hp = statePatch(await decodeMqttEventPayload({ topic: 'RobotDynamicStatus', payload: [8, 0] }))
  assert.deepEqual({ ...state, ...hp }, { currentHealth: 0, currentHeat: 73, canRemoteHeal: true })
  const flag = statePatch(await decodeMqttEventPayload({ topic: 'RobotDynamicStatus', payload: [96, 0] }))
  assert.deepEqual(flag, { canRemoteHeal: false })
})
test('transport never silently masks invalid bytes', async () => {
  for (const payload of [[8, -1], [8, 256], [8, '3'], { 0: 8, 2: 1 }]) assert.equal((await decodeMqttEventPayload({ topic: 'RobotDynamicStatus', payload })).parseSuccess, false)
})
test('uint64 exports preserve precision and remain valid JSON', () => {
  assert.equal(JSON.parse(formatJson({ total: 18446744073709551615n })).total, '18446744073709551615')
})
test('official 300-byte capacity is separate from the 150-byte team layout', () => {
  assert.equal(decodeCustomByteBlock(new Uint8Array(300), { ...layout, frameSize: 300 }).byteLength, 300)
  assert.throws(() => decodeCustomByteBlock(new Uint8Array(300), layout), /Expected 150/)
})
test('command schema rejects misspellings, coercion, invalid marker enums and old air-support value', () => {
  assert.throws(() => validateCommand('CommonCommand', { cmdTyp: 1, param: 50 }), /Unknown field/)
  assert.throws(() => validateCommand('DartCommand', { open: 'false' }), /boolean/)
  assert.throws(() => validateCommand('AirSupportCommand', { commandId: 3 }), /integer/)
  validateCommand('AirSupportCommand', { commandId: 0 })
  const marker = { isSendAll: 0, robotId: [3,0,0,0,0,0,0], mode: 3, type: 1, mapX: 1, mapY: 2 }
  validateCommand('MapClickInfoNotify', marker)
  assert.throws(() => validateCommand('MapClickInfoNotify', { ...marker, type: 3 }), /integer/)
})
test('slow control submission keeps a bounded queue and release replaces unsent movement', async () => {
  const sent: Record<string, unknown>[] = []; let unblock: (() => void) | undefined
  const pump = new ControlPump(async frame => { sent.push(frame); if (sent.length === 1) await new Promise<void>(resolve => { unblock = resolve }) })
  pump.enqueue({ ...NEUTRAL_CONTROL, keyboardValue: 1 })
  for (let i = 0; i < 1000; i++) pump.enqueue({ ...NEUTRAL_CONTROL, mouseX: 1, keyboardValue: 8 })
  const release = pump.release(); unblock!(); await release
  assert.equal(sent.length, 2); assert.deepEqual(sent[1], NEUTRAL_CONTROL)
})
test('real HP wire bytes 08 ac 02 decode to health 300', async () => {
  const result = await decodeMqttEventPayload({ topic: 'RobotDynamicStatus', payload: [8, 172, 2] })
  assert.equal(result.parseSuccess, true)
  assert.equal((result.data as any).currentHealth, 300)
  assert.deepEqual(result.presentFields, ['currentHealth'])
})
test('one malformed transport payload does not reject the decoder promise', async () => {
  const results = await Promise.all([decodeMqttEventPayload({ topic: 'RobotDynamicStatus', payload: null }), decodeMqttEventPayload({ topic: 'RobotDynamicStatus', payload: [8, 0] })])
  assert.equal(results[0].parseSuccess, false)
  assert.equal(results[1].parseSuccess, true)
  assert.equal((results[1].data as any).currentHealth, 0)
})
test('oversized transport payload is rejected before protobuf work', async () => {
  assert.equal((await decodeMqttEventPayload({ topic: 'RobotDynamicStatus', payload: new Uint8Array(65537) })).parseSuccess, false)
})
test('custom scalar parsing honors byteOffset, signedness and little endian', () => {
  const storage = new Uint8Array(170); const input = storage.subarray(7, 157)
  const view = new DataView(input.buffer, input.byteOffset, input.byteLength)
  view.setFloat32(1, 12.5, true); view.setInt8(5, -3)
  assert.deepEqual(decodeCustomByteBlock(input, layout).pureDataFields, { energy: 12.5, mode: -3 })
})
test('explicit big endian is supported', () => {
  const input = new Uint8Array(150); new DataView(input.buffer).setFloat32(1, 91.25, false)
  assert.equal(decodeCustomByteBlock(input, { ...layout, byteOrder: 'big' }).pureDataFields?.energy, 91.25)
})
test('truncated and unknown-mode custom frames fail, never fake success', () => {
  assert.throws(() => decodeCustomByteBlock(new Uint8Array(149), layout), /Expected/)
  const unknown = new Uint8Array(150); unknown[0] = 9
  assert.throws(() => decodeCustomByteBlock(unknown, layout), /Unsupported/)
})
test('schema rejects overlaps, poison keys, unknown types and oversized layouts', () => {
  assert.throws(() => validateByteLayout({ ...layout, pure: [...layout.pure, { name: 'overlap', type: 'uint8_t', offset: 4, size: 1 }] }), /Overlapping/)
  assert.throws(() => validateByteLayout({ ...layout, pure: [{ name: '__proto__', type: 'uint8_t', offset: 1, size: 1 }] }), /Invalid/)
  assert.throws(() => validateByteLayout({ ...layout, pure: [{ name: 'bad', type: 'int128_t', offset: 1, size: 16 }] }), /Unsupported/)
  assert.throws(() => validateByteLayout({ ...layout, frameSize: 301 }), /300/)
})
test('NaN custom telemetry is rejected', () => {
  const input = new Uint8Array(150); new DataView(input.buffer).setFloat32(1, NaN, true)
  assert.throws(() => decodeCustomByteBlock(input, layout), /Non-finite/)
})
test('CustomControl honors 30-byte contract and rejects invalid bytes', () => {
  validateCommand('CustomControl', { data: new Uint8Array(30) })
  assert.throws(() => validateCommand('CustomControl', { data: new Uint8Array(31) }), /30/)
  assert.throws(() => validateCommand('CustomControl', { data: [-1] }), /integer/)
})
test('referee commands validate enum and purchase granularity', () => {
  validateCommand('CommonCommand', { cmdType: 1, param: 50 })
  assert.throws(() => validateCommand('CommonCommand', { cmdType: 1, param: 51 }), /multiple/)
  assert.throws(() => validateCommand('CommonCommand', { cmdType: 9, param: 0 }), /integer/)
  assert.throws(() => validateCommand('InventedCommand', {}), /Unsupported/)
})
test('limiter bounds command frequency and permits after interval', () => {
  const limiter = new CommandRateLimiter(); limiter.take('CommonCommand', 0)
  assert.throws(() => limiter.take('CommonCommand', 99), /rate limit/)
  limiter.take('CommonCommand', 100); limiter.reset(); limiter.take('CommonCommand', 101)
})

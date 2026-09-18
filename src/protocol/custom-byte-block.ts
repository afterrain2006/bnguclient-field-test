/** Team payload, NOT an official referee field layout. Firmware must agree on offsets and endian. */
export type ByteOrder = 'little' | 'big'
export interface ByteField { name: string; type: string; offset: number; size: number }
export interface ByteLayout {
  name: string; version: number; frameSize: number; byteOrder: ByteOrder
  pure: ByteField[]; companion: ByteField[]
  image?: { name: string; offset: number; size: number; fields: ByteField[] }
}
export interface ParsedCustomData {
  mode: number; layout: string; version: number; byteOrder: ByteOrder; byteLength: number; rawData: number[]
  pureDataFields?: Record<string, unknown>; companionField?: Record<string, unknown>
  imageBlock?: { fields: Record<string, unknown>; rawData: number[]; name: string }
}
const sizes: Record<string, number> = { bool: 1, int8_t: 1, uint8_t: 1, int16_t: 2, uint16_t: 2, int32_t: 4, uint32_t: 4, float: 4, double: 8, int64_t: 8, uint64_t: 8 }
function checkFields(fields: ByteField[], limit: number, reserveMode = true): void {
  if (!Array.isArray(fields)) throw new Error('Fields must be arrays')
  const occupied = new Set<number>(reserveMode ? [0] : [])
  const names = new Set<string>()
  for (const field of fields) {
    if (!field.name || ['__proto__', 'constructor', 'prototype'].includes(field.name) || names.has(field.name)) throw new Error('Invalid or duplicate field name')
    names.add(field.name)
    if (!Number.isInteger(field.offset) || !Number.isInteger(field.size) || field.offset < 0 || field.size < 1 || field.offset + field.size > limit) throw new Error(`Field ${field.name} exceeds layout`)
    const array = /^uint8_t\[(\d+)\]$/.exec(field.type)
    if ((array ? Number(array[1]) : sizes[field.type]) !== field.size) throw new Error(`Unsupported type/size: ${field.name}`)
    for (let p = field.offset; p < field.offset + field.size; p++) {
      if (occupied.has(p)) throw new Error(`Overlapping field ${field.name}`)
      occupied.add(p)
    }
  }
}
export function validateByteLayout(layout: ByteLayout): ByteLayout {
  if (!layout.name || !Number.isInteger(layout.version) || layout.version < 1) throw new Error('Layout name and positive version required')
  if (!Number.isInteger(layout.frameSize) || layout.frameSize < 1 || layout.frameSize > 300) throw new Error('CustomByteBlock limit is 300 bytes (V1.3.0); bundled team layouts use 150')
  if (!['little', 'big'].includes(layout.byteOrder)) throw new Error('Explicit byteOrder required')
  checkFields(layout.pure, layout.frameSize); checkFields(layout.companion, layout.frameSize)
  if (layout.image) {
    const image = layout.image
    if (!Number.isInteger(image.offset) || image.offset < 1 || image.size !== 128 || image.offset + image.size > layout.frameSize) throw new Error('Invalid ImageBlock range')
    for (const f of layout.companion) if (f.offset < image.offset + image.size && f.offset + f.size > image.offset) throw new Error('ImageBlock overlaps companion')
    checkFields(image.fields, image.size, false)
  }
  return layout
}
export function layoutFromXml(xml: string): ByteLayout {
  const doc = new DOMParser().parseFromString(xml, 'application/xml')
  if (doc.querySelector('parsererror')) throw new Error('Invalid layout XML')
  const text = (el: Element, selector: string) => el.querySelector(selector)?.textContent?.trim() ?? ''
  const offset = (value: string | null) => Number((value ?? '').replace(/^\+/, ''))
  const read = (el: Element): ByteField => ({ name: text(el, 'Name'), type: text(el, 'Type'), offset: offset(el.getAttribute('offset')), size: Number(text(el, 'Size')) })
  const image = doc.querySelector('ImageDataMode ImageBlock')
  return validateByteLayout({
    name: doc.querySelector('Metadata Name')?.textContent?.trim() || 'custom', version: Number(doc.querySelector('Metadata Version')?.textContent ?? 1),
    frameSize: Number(doc.querySelector('FrameSize')?.textContent ?? 150),
    byteOrder: (doc.querySelector('ByteOrder')?.textContent?.trim() || 'little') as ByteOrder,
    pure: Array.from(doc.querySelectorAll('PureDataMode Layout > Field')).map(read),
    companion: Array.from(doc.querySelectorAll('ImageDataMode Layout > CompanionField')).map(read),
    image: image ? { name: text(image, 'Name'), offset: offset(image.getAttribute('offset')), size: Number(image.getAttribute('size')),
      fields: Array.from(image.querySelectorAll('Structure > Field')).map(f => ({ name: f.getAttribute('name') || '', type: f.getAttribute('type') || '', offset: offset(f.getAttribute('offset')), size: Number(f.getAttribute('size')) })) } : undefined
  })
}
function readField(bytes: Uint8Array, field: ByteField, byteOrder: ByteOrder, base = 0): unknown {
  const p = base + field.offset
  if (p + field.size > bytes.byteLength) throw new Error(`Truncated ${field.name}`)
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  const le = byteOrder === 'little'
  switch (field.type) {
    case 'bool': return view.getUint8(p) !== 0
    case 'int8_t': return view.getInt8(p)
    case 'uint8_t': return view.getUint8(p)
    case 'int16_t': return view.getInt16(p, le)
    case 'uint16_t': return view.getUint16(p, le)
    case 'int32_t': return view.getInt32(p, le)
    case 'uint32_t': return view.getUint32(p, le)
    case 'int64_t': return view.getBigInt64(p, le).toString()
    case 'uint64_t': return view.getBigUint64(p, le).toString()
    case 'float': case 'double': {
      const n = field.type === 'float' ? view.getFloat32(p, le) : view.getFloat64(p, le)
      if (!Number.isFinite(n)) throw new Error(`Non-finite ${field.name}`)
      return n
    }
    default: return Array.from(bytes.subarray(p, p + field.size))
  }
}
export function decodeCustomByteBlock(input: Uint8Array, layout: ByteLayout): ParsedCustomData {
  validateByteLayout(layout)
  if (input.byteLength !== layout.frameSize) throw new Error(`Expected ${layout.frameSize} bytes, received ${input.byteLength}`)
  const mode = input[0]
  const result: ParsedCustomData = { mode, layout: layout.name, version: layout.version, byteOrder: layout.byteOrder, byteLength: input.length, rawData: Array.from(input) }
  const read = (fields: ByteField[]) => Object.fromEntries(fields.map(f => [f.name, readField(input, f, layout.byteOrder)]))
  if (mode === 0) result.pureDataFields = read(layout.pure)
  else if (mode === 1 && layout.image) {
    result.companionField = read(layout.companion)
    const fields = Object.fromEntries(layout.image.fields.map(f => [f.name, readField(input, f, layout.byteOrder, layout.image!.offset)]))
    const length = Number(fields.data_len); const raw = fields.data as number[]
    if (!Number.isInteger(length) || length < 0 || length > 120 || !Array.isArray(raw)) throw new Error('Invalid image data length')
    if (![2, 3].includes(Number(fields.cmd_type))) throw new Error('Unknown image command')
    if (Number(fields.cmd_type) === 2 && (Number(fields.total_block) < 1 || Number(fields.total_block) > 4096 || Number(fields.block_idx) >= Number(fields.total_block))) throw new Error('Invalid image block index/count')
    result.imageBlock = { name: layout.image.name, fields: { ...fields, data: raw.slice(0, length) }, rawData: raw.slice(0, length) }
  } else throw new Error(`Unsupported custom mode ${mode}`)
  return result
}

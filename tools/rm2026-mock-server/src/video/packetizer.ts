export const UDP_HEADER_SIZE = 8

export interface ParsedFragment {
  frameNumber: number
  fragmentIndex: number
  totalFrameSize: number
  payload: Buffer
}

export function packetizeFrame(
  frame: Uint8Array,
  frameNumber: number,
  fragmentPayloadSize = 1200
): Buffer[] {
  if (frame.length === 0) throw new Error('frame must not be empty')
  if (fragmentPayloadSize <= 0 || fragmentPayloadSize > 1400) {
    throw new Error('fragmentPayloadSize must be between 1 and 1400')
  }
  if (frame.length > 0xffff_ffff) throw new Error('frame exceeds u32 size')

  const packets: Buffer[] = []
  for (let offset = 0, fragmentIndex = 0; offset < frame.length; offset += fragmentPayloadSize, fragmentIndex += 1) {
    if (fragmentIndex > 0xffff) throw new Error('frame requires more than 65536 fragments')
    const length = Math.min(fragmentPayloadSize, frame.length - offset)
    const packet = Buffer.allocUnsafe(UDP_HEADER_SIZE + length)
    packet.writeUInt16BE(frameNumber & 0xffff, 0)
    packet.writeUInt16BE(fragmentIndex, 2)
    packet.writeUInt32BE(frame.length, 4)
    Buffer.from(frame.buffer, frame.byteOffset + offset, length).copy(packet, UDP_HEADER_SIZE)
    packets.push(packet)
  }
  return packets
}

export function parseFragment(packet: Uint8Array): ParsedFragment {
  if (packet.length < UDP_HEADER_SIZE) throw new Error('packet is shorter than 8-byte header')
  const data = Buffer.from(packet.buffer, packet.byteOffset, packet.byteLength)
  return {
    frameNumber: data.readUInt16BE(0),
    fragmentIndex: data.readUInt16BE(2),
    totalFrameSize: data.readUInt32BE(4),
    payload: data.subarray(UDP_HEADER_SIZE)
  }
}

export function reassembleFragments(packets: Uint8Array[]): Buffer {
  if (packets.length === 0) throw new Error('packets must not be empty')
  const fragments = packets.map(parseFragment).sort((a, b) => a.fragmentIndex - b.fragmentIndex)
  const frameNumber = fragments[0].frameNumber
  const totalSize = fragments[0].totalFrameSize
  for (const fragment of fragments) {
    if (fragment.frameNumber !== frameNumber || fragment.totalFrameSize !== totalSize) {
      throw new Error('fragment metadata mismatch')
    }
  }
  const result = Buffer.concat(fragments.map((fragment) => fragment.payload))
  if (result.length !== totalSize) throw new Error(`reassembled ${result.length} bytes, expected ${totalSize}`)
  return result
}

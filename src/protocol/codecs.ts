import { robomaster } from '../generated/mqtt-static.js'
interface Codec {
  encode(value: any): { finish(): Uint8Array }
  decode(bytes: Uint8Array): any
  fromObject(value: Record<string, unknown>): any
  toObject(value: any, options?: Record<string, unknown>): Record<string, any>
  verify(value: Record<string, unknown>): string | null
}
/** Same message-name lookup as reflection, with build-time generated functions (no eval). */
export function getMessageCodec(name: string): Codec {
  const codec = (robomaster as unknown as Record<string, Codec>)[name]
  if (!codec || typeof codec.decode !== 'function') throw new Error(`Unknown protobuf message: ${name}`)
  return codec
}

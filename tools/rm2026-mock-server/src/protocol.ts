import path from 'node:path'
import protobuf from 'protobufjs'
import { REPO_ROOT } from './config.js'

export const PROTO_PATH = path.join(REPO_ROOT, 'UDP-MQTT Server', 'proto', 'messages.proto')

export function messageNameFromTopic(topic: string): string {
  const slashSegment = topic.split('/').pop()?.trim() || topic
  return slashSegment.split('.').pop()?.trim() || slashSegment
}

export class ProtocolCodec {
  private constructor(private readonly root: protobuf.Root) {}

  static async load(protoPath = PROTO_PATH): Promise<ProtocolCodec> {
    return new ProtocolCodec(await protobuf.load(protoPath))
  }

  hasMessage(topic: string): boolean {
    try {
      this.root.lookupType(messageNameFromTopic(topic))
      return true
    } catch {
      return false
    }
  }

  encode(topic: string, value: Record<string, unknown>): Buffer {
    const type = this.root.lookupType(messageNameFromTopic(topic))
    const error = type.verify(value)
    if (error) throw new Error(`${topic}: ${error}`)
    return Buffer.from(type.encode(type.create(value)).finish())
  }

  decode(topic: string, payload: Uint8Array): Record<string, unknown> {
    const type = this.root.lookupType(messageNameFromTopic(topic))
    return type.toObject(type.decode(payload), {
      longs: String,
      enums: Number,
      bytes: Array,
      defaults: true
    }) as Record<string, unknown>
  }
}

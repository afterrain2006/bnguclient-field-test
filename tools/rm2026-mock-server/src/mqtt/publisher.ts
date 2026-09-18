import type Aedes from 'aedes'
import type { ProtocolCodec } from '../protocol.js'

export type PublishCounts = Record<string, number>

export class ProtoPublisher {
  readonly counts: PublishCounts = {}

  constructor(
    private readonly broker: Aedes,
    private readonly codec: ProtocolCodec
  ) {}

  async publish(topic: string, value: Record<string, unknown>): Promise<number> {
    const payload = this.codec.encode(topic, value)
    await new Promise<void>((resolve, reject) => {
      this.broker.publish(
        {
          cmd: 'publish',
          qos: 0,
          dup: false,
          retain: false,
          topic,
          payload
        },
        (error?: Error) => (error ? reject(error) : resolve())
      )
    })
    this.counts[topic] = (this.counts[topic] ?? 0) + 1
    return payload.length
  }
}

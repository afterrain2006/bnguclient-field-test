import dgram from 'node:dgram'
import { packetizeFrame } from './packetizer.js'
import type { H265AccessUnit } from './h265-source.js'
import { scheduleAtRate, type RateHandle } from '../scheduler.js'

export interface VideoSenderStats {
  framesSent: number
  keyframesSent: number
  packetsSent: number
  payloadBytesSent: number
  simulatedPacketDrops: number
  sendErrors: number
  lastFrameNumber: number
}

export interface UdpSenderOptions {
  host: string
  port: number
  fps: number
  fragmentPayloadSize: number
  packetLoss: number
  jitterMs: number
  reorder: number
}

export class H265UdpSender {
  readonly stats: VideoSenderStats = {
    framesSent: 0,
    keyframesSent: 0,
    packetsSent: 0,
    payloadBytesSent: 0,
    simulatedPacketDrops: 0,
    sendErrors: 0,
    lastFrameNumber: 0
  }

  private readonly socket = dgram.createSocket('udp4')
  private timer: RateHandle | null = null
  private frameIndex = 0
  private frameNumber = 0

  constructor(
    private readonly accessUnits: H265AccessUnit[],
    private readonly options: UdpSenderOptions
  ) {
    if (accessUnits.length === 0) throw new Error('At least one H.265 access unit is required')
  }

  start(): void {
    if (this.timer) return
    const tick = (): void => {
      const unit = this.accessUnits[this.frameIndex]
      this.frameIndex = (this.frameIndex + 1) % this.accessUnits.length
      const frameNumber = this.frameNumber++ & 0xffff
      this.sendAccessUnit(unit, frameNumber)
    }
    this.timer = scheduleAtRate(this.options.fps, tick)
  }

  stop(): void {
    this.timer?.stop()
    this.timer = null
    this.socket.close()
  }

  private sendAccessUnit(unit: H265AccessUnit, frameNumber: number): void {
    const packets = packetizeFrame(unit.data, frameNumber, this.options.fragmentPayloadSize)
    this.stats.framesSent += 1
    this.stats.keyframesSent += unit.keyframe ? 1 : 0
    this.stats.lastFrameNumber = frameNumber

    packets.forEach((packet, packetIndex) => {
      if (Math.random() < this.options.packetLoss) {
        this.stats.simulatedPacketDrops += 1
        return
      }
      let delay = this.options.jitterMs > 0 ? Math.random() * this.options.jitterMs : 0
      if (Math.random() < this.options.reorder) {
        delay += Math.max(2, this.options.jitterMs + 2) * (1 + Math.random())
      }
      const send = (): void => {
        this.socket.send(packet, this.options.port, this.options.host, (error) => {
          if (error) {
            this.stats.sendErrors += 1
            console.error(`[UDP] send failed frame=${frameNumber} fragment=${packetIndex}: ${error.message}`)
            return
          }
          this.stats.packetsSent += 1
          this.stats.payloadBytesSent += packet.length
        })
      }
      if (delay > 0) setTimeout(send, delay)
      else send()
    })
  }
}

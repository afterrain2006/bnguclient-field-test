import fs from 'node:fs'
import path from 'node:path'
import { parseConfig, MOCK_ROOT } from './config.js'
import { ProtocolCodec, PROTO_PATH } from './protocol.js'
import { startMqttBroker } from './mqtt/broker.js'
import { ProtoPublisher } from './mqtt/publisher.js'
import { startInfantryDemo } from './scenarios/infantry-demo.js'
import { loadH265AccessUnits } from './video/h265-source.js'
import { H265UdpSender } from './video/udp-sender.js'

const config = parseConfig()
if (!fs.existsSync(config.videoPath)) {
  throw new Error(`H.265 test asset not found: ${config.videoPath}. Run npm run generate-video.`)
}

const codec = await ProtocolCodec.load()
const mqtt = await startMqttBroker(codec, config.mqttHost, config.mqttPort)
const publisher = new ProtoPublisher(mqtt.broker, codec)
const scenario = startInfantryDemo(publisher)
const accessUnits = loadH265AccessUnits(config.videoPath)
const keyframes = accessUnits.filter((unit) => unit.keyframe).length
const video = new H265UdpSender(accessUnits, {
  host: config.udpHost,
  port: config.udpPort,
  fps: config.videoFps,
  fragmentPayloadSize: config.fragmentPayloadSize,
  packetLoss: config.packetLoss,
  jitterMs: config.jitterMs,
  reorder: config.reorder
})
video.start()

console.log('\nRM2026 Mock Server\n')
console.log(`MQTT:\n${config.mqttHost}:${mqtt.port}\n`)
console.log(`UDP Video:\n${config.udpHost}:${config.udpPort}\n`)
console.log(`Scenario:\n${config.scenario}\n`)
console.log(`Video:\n1280x720 @${config.videoFps}fps HEVC`)
console.log(`Access units: ${accessUnits.length} (${keyframes} keyframes)`)
console.log(`Fragment payload: ${config.fragmentPayloadSize} bytes`)
console.log(`Protocol: ${PROTO_PATH}`)
console.log(`Network simulation: loss=${config.packetLoss}, jitter=${config.jitterMs}ms, reorder=${config.reorder}\n`)

const metricsDir = path.join(MOCK_ROOT, 'metrics')
const metricsPath = path.join(metricsDir, 'runtime.json')
fs.mkdirSync(metricsDir, { recursive: true })
const startedAt = Date.now()
let lastPackets = 0
let lastFrames = 0
let lastBytes = 0
let lastSampleAt = performance.now()

const metricsTimer = setInterval(() => {
  const now = performance.now()
  const sampleDurationSec = Math.max(0.001, (now - lastSampleAt) / 1000)
  const packetsPerSec = (video.stats.packetsSent - lastPackets) / sampleDurationSec
  const framesPerSec = (video.stats.framesSent - lastFrames) / sampleDurationSec
  const bytesPerSec = (video.stats.payloadBytesSent - lastBytes) / sampleDurationSec
  lastPackets = video.stats.packetsSent
  lastFrames = video.stats.framesSent
  lastBytes = video.stats.payloadBytesSent
  lastSampleAt = now
  const snapshot = {
    timestamp: new Date().toISOString(),
    uptimeSec: (Date.now() - startedAt) / 1000,
    mqtt: {
      published: publisher.counts,
      receivedCommands: mqtt.receivedCommands
    },
    video: {
      ...video.stats,
      packetsPerSec,
      framesPerSec,
      bytesPerSec,
      accessUnitCount: accessUnits.length,
      sourceKeyframes: keyframes,
      resolution: '1280x720',
      fps: config.videoFps,
      codec: 'HEVC Annex-B',
      fragmentPayloadSize: config.fragmentPayloadSize,
      packetLoss: config.packetLoss,
      jitterMs: config.jitterMs,
      reorder: config.reorder
    }
  }
  fs.writeFileSync(metricsPath, `${JSON.stringify(snapshot, null, 2)}\n`)
  console.log(`[STATS] MQTT=${JSON.stringify(publisher.counts)} UDP=${framesPerSec.toFixed(1)} fps ${packetsPerSec.toFixed(0)} pkt/s ${(bytesPerSec * 8 / 1_000_000).toFixed(2)} Mbps drops=${video.stats.simulatedPacketDrops}`)
}, 1000)

let stopping = false
async function shutdown(signal: string): Promise<void> {
  if (stopping) return
  stopping = true
  console.log(`\n[STOP] ${signal}`)
  clearInterval(metricsTimer)
  scenario.stop()
  video.stop()
  await mqtt.close()
  process.exit(0)
}

process.on('SIGINT', () => void shutdown('SIGINT'))
process.on('SIGTERM', () => void shutdown('SIGTERM'))

import net, { type AddressInfo } from 'node:net'
import { createRequire } from 'node:module'
import type Aedes from 'aedes'
import type { AedesPublishPacket, Client } from 'aedes'
import type { ProtocolCodec } from '../protocol.js'

const require = createRequire(import.meta.url)
const createAedes = require('aedes') as () => Aedes

export interface ReceivedCommand {
  timestamp: string
  clientId: string
  topic: string
  size: number
  decoded: Record<string, unknown> | null
  decodeError?: string
}

export interface MqttBrokerHandle {
  broker: Aedes
  server: net.Server
  host: string
  port: number
  receivedCommands: ReceivedCommand[]
  close(): Promise<void>
}

const CONTROL_TOPICS = new Set([
  'KeyboardMouseControl',
  'CustomControl',
  'MapClickInfoNotify',
  'AssemblyCommand',
  'RobotPerformanceSelectionCommand',
  'HeroDeployModeEventCommand',
  'RuneActivateCommand',
  'DartCommand',
  'SentryCtrlCommand',
  'AirSupportCommand',
  'CommonCommand'
])

export async function startMqttBroker(
  codec: ProtocolCodec,
  host: string,
  port: number
): Promise<MqttBrokerHandle> {
  const broker = createAedes()
  const server = net.createServer(broker.handle)
  const receivedCommands: ReceivedCommand[] = []

  broker.on('clientReady', (client: Client) => {
    console.log(`[MQTT] Client connected: ${client.id}`)
  })
  broker.on('clientDisconnect', (client: Client) => {
    console.log(`[MQTT] Client disconnected: ${client.id}`)
  })
  broker.on('clientError', (client: Client, error: Error) => {
    console.error(`[MQTT] Client error (${client?.id ?? 'unknown'}): ${error.message}`)
  })
  broker.on('publish', (packet: AedesPublishPacket, client: Client | null) => {
    if (!client || packet.topic.startsWith('$SYS')) return
    const topic = packet.topic
    const payload = Buffer.isBuffer(packet.payload) ? packet.payload : Buffer.from(packet.payload)
    const record: ReceivedCommand = {
      timestamp: new Date().toISOString(),
      clientId: client.id,
      topic,
      size: payload.length,
      decoded: null
    }

    if (codec.hasMessage(topic)) {
      try {
        record.decoded = codec.decode(topic, payload)
      } catch (error) {
        record.decodeError = error instanceof Error ? error.message : String(error)
      }
    } else {
      record.decodeError = 'No matching message in messages.proto'
    }

    receivedCommands.push(record)
    if (receivedCommands.length > 100) receivedCommands.shift()

    const direction = CONTROL_TOPICS.has(topic) ? 'RX CONTROL' : 'RX'
    console.log(`\n[${direction}] ${record.timestamp}`)
    console.log(`topic: ${topic}`)
    console.log(`client: ${client.id}`)
    console.log(`size: ${payload.length} bytes`)
    if (record.decoded) console.log(`decoded:\n${JSON.stringify(record.decoded, null, 2)}`)
    else console.log(`decode error: ${record.decodeError}`)
  })

  await new Promise<void>((resolve, reject) => {
    server.once('error', reject)
    server.listen(port, host, () => {
      server.off('error', reject)
      resolve()
    })
  })

  const actualPort = (server.address() as AddressInfo).port
  console.log(`[MQTT] Broker listening on ${host}:${actualPort}`)

  return {
    broker,
    server,
    host,
    port: actualPort,
    receivedCommands,
    close: async () => {
      await new Promise<void>((resolve) => server.close(() => resolve()))
      await new Promise<void>((resolve) => broker.close(() => resolve()))
    }
  }
}

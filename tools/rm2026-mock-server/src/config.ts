import { fileURLToPath } from 'node:url'
import path from 'node:path'

export const MOCK_ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
export const REPO_ROOT = path.resolve(MOCK_ROOT, '..', '..')

export interface MockConfig {
  mqttHost: string
  mqttPort: number
  udpHost: string
  udpPort: number
  videoPath: string
  videoFps: number
  fragmentPayloadSize: number
  packetLoss: number
  jitterMs: number
  reorder: number
  scenario: 'infantry-demo'
}

function valueAfter(args: string[], option: string): string | undefined {
  const equals = args.find((arg) => arg.startsWith(`${option}=`))
  if (equals) return equals.slice(option.length + 1)
  const index = args.indexOf(option)
  return index >= 0 ? args[index + 1] : undefined
}

function numberOption(args: string[], option: string, fallback: number): number {
  const raw = valueAfter(args, option)
  if (raw === undefined) return fallback
  const value = Number(raw)
  if (!Number.isFinite(value)) throw new Error(`${option} must be a finite number`)
  return value
}

function probabilityOption(args: string[], option: string): number {
  const value = numberOption(args, option, 0)
  if (value < 0 || value > 1) throw new Error(`${option} must be between 0 and 1`)
  return value
}

export function parseConfig(args = process.argv.slice(2)): MockConfig {
  const fragmentPayloadSize = Math.trunc(numberOption(args, '--fragment-size', 1200))
  if (fragmentPayloadSize < 256 || fragmentPayloadSize > 1400) {
    throw new Error('--fragment-size must be between 256 and 1400 bytes')
  }

  const jitterMs = numberOption(args, '--jitter', 0)
  if (jitterMs < 0 || jitterMs > 1000) throw new Error('--jitter must be between 0 and 1000 ms')

  return {
    mqttHost: valueAfter(args, '--mqtt-host') ?? '127.0.0.1',
    mqttPort: Math.trunc(numberOption(args, '--mqtt-port', 3333)),
    udpHost: valueAfter(args, '--udp-host') ?? '127.0.0.1',
    udpPort: Math.trunc(numberOption(args, '--udp-port', 3334)),
    videoPath: path.resolve(valueAfter(args, '--video') ?? path.join(MOCK_ROOT, 'assets', 'test.h265')),
    videoFps: numberOption(args, '--video-fps', 30),
    fragmentPayloadSize,
    packetLoss: probabilityOption(args, '--packet-loss'),
    jitterMs,
    reorder: probabilityOption(args, '--reorder'),
    scenario: 'infantry-demo'
  }
}

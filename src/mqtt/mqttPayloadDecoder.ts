import { getMessageCodec } from '../protocol/codecs'
import { convertProtobufData, parseTopicType } from '../utils/mqtt_protocol'

const MQTT_KEEP_RAW_PAYLOAD = false

export type ParsedMqttEventPayload = {
  topic: string
  messageType: string
  data: unknown
  raw: string
  timestamp: number
  parseSuccess: boolean
  error?: string
  presentFields?: string[]
}


function normalizeBinaryPayload(data: unknown): Uint8Array {
  if (data instanceof Uint8Array) {
    return data
  }

  if (data instanceof ArrayBuffer) {
    return new Uint8Array(data)
  }

  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength)
  }

  if (Array.isArray(data)) {
    if (data.length > 65536 || !data.every(value => typeof value === 'number' && Number.isInteger(value) && value >= 0 && value <= 255)) throw new Error('Invalid byte array')
    return Uint8Array.from(data)
  }

  if (data && typeof data === 'object') {
    const entries = Object.entries(data)
      .filter(([key, value]) => /^\d+$/.test(key) && typeof value === 'number')
      .sort((a, b) => Number(a[0]) - Number(b[0]))

    if (entries.length > 0) {
      if (entries.length > 65536 || entries.some(([key, value], i) => Number(key) !== i || !Number.isInteger(value) || Number(value) < 0 || Number(value) > 255)) throw new Error('Invalid indexed byte object')
      return Uint8Array.from(entries.map(([, value]) => Number(value)))
    }
  }

  throw new Error(`Unsupported MQTT payload: ${Object.prototype.toString.call(data)}`)
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = ''
  const chunkSize = 0x8000

  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize))
  }

  return btoa(binary)
}

function getMqttProtoMessageName(topic: string): string {
  const slashSegment = topic.split('/').pop()?.trim() || topic
  return slashSegment.split('.').pop()?.trim() || slashSegment
}

export async function decodeMqttEventPayload(payload: unknown): Promise<ParsedMqttEventPayload> {
  const topic =
    typeof (payload as { topic?: unknown })?.topic === 'string'
      ? String((payload as { topic: string }).topic)
      : ''
  const timestamp = Date.now()
  let bytes: Uint8Array
  try {
    bytes = normalizeBinaryPayload((payload as { payload?: unknown })?.payload)
    if (bytes.length > 65536) throw new Error('MQTT payload exceeds 64 KiB limit')
  } catch (error) {
    return { topic, messageType: parseTopicType(topic), data: null, raw: '', timestamp, parseSuccess: false, error: String(error) }
  }
  const raw = MQTT_KEEP_RAW_PAYLOAD ? bytesToBase64(bytes) : ''
  const messageType = parseTopicType(topic)

  try {
    const protoMessageType = getMessageCodec(getMqttProtoMessageName(topic))
    const decoded = protoMessageType.decode(bytes)
    const decodedObject = protoMessageType.toObject(decoded, {
      longs: String,
      enums: Number,
      bytes: Array
    })
    const converted = convertProtobufData(messageType, decodedObject)

    return {
      topic,
      messageType,
      data: converted ? { ...decodedObject, ...converted } : decodedObject,
      raw,
      timestamp,
      parseSuccess: true,
      presentFields: Object.keys(decodedObject)
    }
  } catch (error) {
    try {
      const decodedText = new TextDecoder().decode(bytes)
      const parsedJson = JSON.parse(decodedText)

      return {
        topic,
        messageType,
        data: parsedJson,
        raw,
        timestamp,
        parseSuccess: true
      }
    } catch {
      console.warn('[MQTT] Failed to decode payload:', topic, error)

      return {
        topic,
        messageType,
        data: null,
        raw,
        timestamp,
        parseSuccess: false,
        error: String(error)
      }
    }
  }
}

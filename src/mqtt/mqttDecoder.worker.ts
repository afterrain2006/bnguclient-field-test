import { decodeMqttEventPayload, type ParsedMqttEventPayload } from './mqttPayloadDecoder'

type DecodeRequest = {
  id: number
  payloads: unknown[]
}

type DecodeResponse = {
  id: number
  messages: ParsedMqttEventPayload[]
}

self.onmessage = (event: MessageEvent<DecodeRequest>) => {
  const { id, payloads } = event.data

  void (async () => {
    const messages: ParsedMqttEventPayload[] = []

    for (const payload of payloads) {
      try {
        messages.push(await decodeMqttEventPayload(payload))
      } catch (error) {
        messages.push({ topic: '', messageType: 'unknown', data: null, raw: '', timestamp: Date.now(), parseSuccess: false, error: String(error) })
      }
    }

    self.postMessage({
      id,
      messages
    } satisfies DecodeResponse)
  })()
}

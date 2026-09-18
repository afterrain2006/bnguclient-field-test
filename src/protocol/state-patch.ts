import type { ParsedMqttEventPayload } from '../mqtt/mqttPayloadDecoder'
/** Converted defaults are not observations. Keep explicit zero/false, drop absent scalars. */
export function statePatch(message: ParsedMqttEventPayload): Record<string, unknown> {
  const data = message.data as Record<string, unknown>
  if (!message.presentFields) return data
  const present = new Set(message.presentFields)
  const aliases: Record<string, string> = { totalDamageRed: 'totalDamageAlly', totalDamageBlue: 'totalDamageEnemy' }
  return Object.fromEntries(Object.entries(data).filter(([key]) => present.has(key) || present.has(aliases[key]) || present.has(key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`))))
}

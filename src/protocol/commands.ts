import protoJson from '../generated/mqtt-proto.json'
/** RM2026 communication V1.3.0 §2. Map/Air use a conservative local 1 Hz cap. */
export const COMMAND_LIMITS: Record<string, number> = {
  KeyboardMouseControl: 75, CustomControl: 75, MapClickInfoNotify: 1, AssemblyCommand: 10,
  RobotPerformanceSelectionCommand: 10, CommonCommand: 10, HeroDeployModeEventCommand: 10,
  RuneActivateCommand: 10, DartCommand: 10, SentryCtrlCommand: 10, AirSupportCommand: 1
}
export function commandName(topic: string): string { return topic.split('/').pop()?.split('.').pop() ?? '' }
function integer(value: unknown, name: string, min: number, max: number): void {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < min || value > max) throw new Error(`${name} must be an integer in ${min}…${max}`)
}
export function validateCommand(topic: string, data: Record<string, unknown>): void {
  const name = commandName(topic)
  if (!(name in COMMAND_LIMITS)) throw new Error(`Unsupported client command: ${name}`)
  const schema = (protoJson.nested as Record<string, { fields?: Record<string, { type: string }> }>)[name]?.fields
  if (!schema) throw new Error(`Missing protobuf schema: ${name}`)
  for (const [key, value] of Object.entries(data)) {
    const field = schema[key]
    if (!field) throw new Error(`Unknown field ${name}.${key}; use the camelCase schema name`)
    if (field.type === 'bool' && typeof value !== 'boolean') throw new Error(`${key} must be boolean`)
    if (field.type === 'uint32') integer(value, key, 0, 0xffffffff)
    if (field.type === 'int32') integer(value, key, -2147483648, 2147483647)
    if (field.type === 'float' && (typeof value !== 'number' || !Number.isFinite(value))) throw new Error(`${key} must be a finite number`)
    if (field.type === 'bytes') {
      if (!(value instanceof Uint8Array) && !Array.isArray(value)) throw new Error(`${key} must be bytes`)
      for (const byte of value) integer(byte, key, 0, 255)
    }
  }
  for (const [key, value] of Object.entries(data)) if (typeof value === 'number' && !Number.isFinite(value)) throw new Error(`Invalid number ${key}`)
  if (name === 'CustomControl') {
    const bytes = data.data
    if (!(bytes instanceof Uint8Array) && !Array.isArray(bytes)) throw new Error('CustomControl.data must be bytes')
    if (bytes.length > 30) throw new Error('CustomControl is limited to 30 bytes')
    for (const value of bytes) integer(value, 'byte', 0, 255)
  }
  if (name === 'CommonCommand') {
    const kind = data.cmdType ?? data.cmd_type
    integer(kind, 'cmdType', 1, 6); integer(data.param ?? 0, 'param', 0, 0xffffffff)
    if (kind === 1 && (Number(data.param) <= 0 || Number(data.param) % 10 !== 0)) throw new Error('17 mm amount must be a positive multiple of 10')
  }
  if (name === 'HeroDeployModeEventCommand') integer(data.mode, 'mode', 0, 1)
  if (name === 'RuneActivateCommand') integer(data.activate, 'activate', 1, 1)
  if (name === 'AssemblyCommand') { integer(data.operation, 'operation', 0, 2); integer(data.difficulty, 'difficulty', 1, 4) }
  if (name === 'SentryCtrlCommand') integer(data.commandId, 'commandId', 1, 9)
  if (name === 'AirSupportCommand') integer(data.commandId, 'commandId', 0, 2)
  if (name === 'DartCommand' && data.targetId !== undefined) integer(data.targetId, 'targetId', 1, 5)
  if (name === 'RobotPerformanceSelectionCommand') {
    for (const key of ['shooter', 'chassis']) if (data[key] !== undefined) integer(data[key], key, 1, 4)
    if (data.sentryControl !== undefined) integer(data.sentryControl, 'sentryControl', 0, 1)
  }
  if (name === 'MapClickInfoNotify') {
    integer(data.isSendAll, 'isSendAll', 0, 2); integer(data.mode, 'mode (marker kind)', 1, 4); integer(data.type, 'type (map/robot)', 1, 2)
    if (!(data.robotId instanceof Uint8Array) && !Array.isArray(data.robotId)) throw new Error('robotId must be seven bytes')
    if (data.robotId.length !== 7) throw new Error('robotId must be seven bytes')
    if (data.mode === 4 && ![67,68,69,70,71,72,73,74,75,76,78,79,81,82,83,84,85,86,87,88,89,90].includes(Number(data.ascii))) throw new Error('Unsupported custom marker ASCII')
    if (data.type === 1 && (typeof data.mapX !== 'number' || typeof data.mapY !== 'number')) throw new Error('Map marker needs mapX/mapY')
  }
  if (name === 'KeyboardMouseControl') {
    for (const key of ['mouseX', 'mouseY', 'mouseZ']) integer(data[key] ?? 0, key, -2147483648, 2147483647)
    integer(data.keyboardValue ?? 0, 'keyboardValue', 0, 65535)
  }
}
export class CommandRateLimiter {
  private sentAt = new Map<string, number>()
  take(topic: string, now: number): void {
    const name = commandName(topic); const hz = COMMAND_LIMITS[name]
    if (!hz) throw new Error(`Unsupported client command: ${name}`)
    if (now - (this.sentAt.get(name) ?? -Infinity) < 1000 / hz) throw new Error(`${name} rate limit: ${hz} Hz`)
    this.sentAt.set(name, now)
  }
  reset(): void { this.sentAt.clear() }
}

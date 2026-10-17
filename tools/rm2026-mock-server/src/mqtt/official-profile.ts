import type Aedes from 'aedes'
import type { Client, AuthenticateError } from 'aedes'
import mqtt, { type MqttClient } from 'mqtt'
import type { Socket } from 'node:net'

// Observed in official player 12.0.0.213_Student. See docs/MQTT_HANDSHAKE_FIX.md.
export const OFFICIAL_CONTROL_TOPICS = [
  'KeyboardMouseControl', 'CustomControl', 'AssemblyCommand',
  'RobotPerformanceSelectionCommand', 'CommonCommand', 'HeroDeployModeEventCommand',
  'RuneActivateCommand', 'DartCommand', 'SentryCtrlCommand', 'AirSupportCommand', 'MapClickCmd'
] as const

export interface OfficialProfileOptions {
  robotId: number
  loggedIn: boolean
  /** Fault injection; no fixed official CONNACK delay has been established. */
  connackDelayMs?: number
}

export interface OfficialEvent {
  timestamp: string
  event: string
  clientId?: string
  peer?: string
  reason?: string
  returnCode?: number
  elapsedMs?: number
  topic?: string
  size?: number
}

export interface OfficialProfile {
  events: OfficialEvent[]
  counts: Record<string, number>
  setLoggedIn(value: boolean): void
  startBridge(url: string): Promise<void>
  publish(topic: string, payload: Buffer): Promise<void>
  stop(): Promise<void>
}

export function installOfficialProfile(broker: Aedes, options: OfficialProfileOptions): OfficialProfile {
  if (!Number.isInteger(options.robotId) || options.robotId < 1 || options.robotId > 255) {
    throw new Error('official robot ID must be an integer from 1 to 255')
  }
  const delay = options.connackDelayMs ?? 0
  if (!Number.isInteger(delay) || delay < 0 || delay > 30_000) {
    throw new Error('CONNACK fault delay must be an integer from 0 to 30000 ms')
  }
  const events: OfficialEvent[] = []
  const counts: Record<string, number> = {}
  const replied = new WeakSet<Client>()
  const ids = new WeakMap<Client, string>()
  const started = new WeakMap<Client, number>()
  const owners = new Map<string, Client>()
  const timers = new Set<ReturnType<typeof setTimeout>>()
  let loggedIn = options.loggedIn
  let bridge: MqttClient | undefined
  const internal = (id: string): boolean => /^official_cc/i.test(id)
  const log = (value: Omit<OfficialEvent, 'timestamp'>): void => {
    const record = { timestamp: new Date().toISOString(), ...value }
    events.push(record)
    counts[value.event] = (counts[value.event] ?? 0) + 1
    if (events.length > 1000) events.shift()
    console.log(`[OFFICIAL-PROFILE] ${JSON.stringify(record)}`)
  }
  const release = (client: Client): void => {
    const id = ids.get(client) ?? client.id
    if (owners.get(id) === client) owners.delete(id)
  }

  broker.preConnect = (client, packet, done) => {
    // Preserve the raw ID: Aedes otherwise replaces an empty ID with a generated one.
    ids.set(client, packet.clientId)
    started.set(client, performance.now())
    log({ event: 'CONNECT', clientId: packet.clientId, peer: (client.conn as Socket).remoteAddress })
    client.conn.once('close', () => {
      if (!replied.has(client)) log({ event: 'CLOSED_BEFORE_CONNACK', clientId: packet.clientId,
        elapsedMs: Math.round(performance.now() - started.get(client)!) })
      release(client)
    })
    done(null, true)
  }

  broker.authenticate = (client, _username, _password, done) => {
    const id = ids.get(client) ?? client.id
    let reason: string | undefined
    if (!id.trim()) reason = 'empty_client_id'
    else if (!internal(id) && !loggedIn) reason = 'player_not_logged_in'
    else if (!internal(id) && id !== String(options.robotId)) reason = 'robot_id_mismatch'
    else if (owners.get(id) && !owners.get(id)!.closed) reason = 'duplicate_client_id'
    if (!reason) owners.set(id, client)

    const reply = (): void => {
      if (client.closed || broker.closed) { release(client); return }
      replied.add(client)
      if (reason) {
        log({ event: 'REJECT', clientId: id, reason, returnCode: 2 })
        // Official ReasonCode=0x85 maps to MQTT 3.1.1 return code 2.
        done(Object.assign(new Error(reason), { returnCode: 2 }) as AuthenticateError, false)
      } else {
        log({ event: 'ACCEPT', clientId: id, returnCode: 0 })
        done(null, true)
      }
    }
    // The fault models external handshake latency; keep the private bridge available.
    if (delay === 0 || internal(id)) reply()
    else {
      const timer = setTimeout(() => { timers.delete(timer); reply() }, delay)
      timers.add(timer)
      client.conn.once('close', () => { clearTimeout(timer); timers.delete(timer); release(client) })
    }
  }

  broker.on('clientReady', (client) => log({ event: 'CONNECTED', clientId: ids.get(client) ?? client.id,
    elapsedMs: Math.round(performance.now() - (started.get(client) ?? performance.now())) }))
  broker.on('clientDisconnect', (client) => {
    release(client)
    log({ event: 'DISCONNECTED', clientId: ids.get(client) ?? client.id })
  })
  // Official CustomClientThread.OnTimeTick checks login state on a 1000 ms cadence.
  const tick = setInterval(() => {
    if (loggedIn) return
    for (const [id, client] of owners) {
      if (!internal(id) && client.connected && !client.closed) {
        log({ event: 'LOGOUT_KICK', clientId: id })
        client.close()
      }
    }
  }, 1000)
  tick.unref()

  return {
    events,
    counts,
    setLoggedIn(value) { loggedIn = value; log({ event: 'LOGIN_STATE', reason: value ? 'logged_in' : 'logged_out' }) },
    async startBridge(url) {
      bridge = mqtt.connect(url, { clientId: 'official_cc_mock', protocolVersion: 4,
        reconnectPeriod: 0, connectTimeout: 35_000, clean: true })
      const active = bridge
      active.on('error', (error) => log({ event: 'BRIDGE_ERROR', reason: error.message }))
      active.on('message', (topic, payload) => log({ event: 'CONTROL_RECEIVED', topic, size: payload.length }))
      await new Promise<void>((resolve, reject) => {
        const fail = (error: Error): void => { active.off('connect', connected); reject(error) }
        const connected = (): void => {
          active.off('error', fail)
          active.subscribe([...OFFICIAL_CONTROL_TOPICS], { qos: 1 }, (error) => error ? reject(error) : resolve())
        }
        active.once('error', fail)
        active.once('connect', connected)
      })
    },
    async publish(topic, payload) {
      if (!bridge?.connected) throw new Error('Official profile bridge is not connected')
      await new Promise<void>((resolve, reject) => {
        bridge!.publish(topic, payload, { qos: 0 }, (error) => error ? reject(error) : resolve())
      })
    },
    async stop() {
      clearInterval(tick)
      for (const timer of timers) clearTimeout(timer)
      timers.clear()
      if (bridge) await new Promise<void>((resolve) => bridge!.end(true, {}, () => resolve()))
    }
  }
}

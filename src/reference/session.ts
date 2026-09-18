import { computed, ref, shallowRef, watch } from 'vue'
import { defineStore } from 'pinia'
import { getMessageCodec } from '../protocol/codecs'
import mqttProto from '../generated/mqtt-proto.json'
import { useMqttDataStore } from '../store/modules/mqtt_data'
import type { ParsedMqttEventPayload } from '../mqtt/mqttPayloadDecoder'
import { COMMAND_LIMITS, CommandRateLimiter, validateCommand } from '../protocol/commands'
import { desktop, readLocal, writeLocal } from './platform'
import { ControlPump } from '../protocol/control-pump'
import { statePatch } from '../protocol/state-patch'
import { formatJson } from '../protocol/json'

export type SessionMode = 'offline' | 'demo' | 'live'
export interface ConnectionProfile { host: string; port: number; robotId: number; udpPort: number; sourceHost: string; staleMs: number; jpegQuality: number }
export interface JournalEntry { id: number; time: number; level: 'info' | 'warning' | 'error'; text: string }
export interface MetricPoint { at: number; health: number; heat: number; energy: number }
export const downlinkTopics = Object.keys(mqttProto.nested).filter(name => !(name in COMMAND_LIMITS) && !['MapClickInfo', 'RadarSingleRobotInfo'].includes(name))
export function encodeSample(topic: string, payload: Record<string, unknown>): { topic: string; payload: number[] } {
  const message = getMessageCodec(topic)
  return { topic, payload: Array.from(message.encode(message.fromObject(payload)).finish()) }
}
export const useReferenceSession = defineStore('referenceSession', () => {
  const store = useMqttDataStore()
  const profile = ref<ConnectionProfile>(readLocal('connection', { host: '192.168.12.1', port: 3333, robotId: 3, udpPort: 3334, sourceHost: '192.168.12.1', staleMs: 2000, jpegQuality: 85 }))
  const mode = ref<SessionMode>('offline')
  const connection = ref('disconnected')
  const busy = ref(false)
  const now = ref(Date.now())
  const lastReceived = ref(0)
  const received = ref(0)
  const rejected = ref(0)
  const mps = ref(0)
  const latest = shallowRef<Record<string, ParsedMqttEventPayload>>({})
  const journal = shallowRef<JournalEntry[]>([])
  const history = shallowRef<MetricPoint[]>([])
  const captured = ref(false)
  const error = ref('')
  let eventId = 0; let epoch = 0; let tickTimer: ReturnType<typeof setInterval> | undefined
  let demoTimer: ReturnType<typeof setInterval> | undefined; let demoWorker: Worker | null = null
  let cleanups: (() => void)[] = []; let pendingCount = 0
  const limiter = new CommandRateLimiter()
  const robot = computed(() => store.getRobot(store.currentRobotId || profile.value.robotId))
  const dynamicAt = computed(() => latest.value.robot_dynamic_status?.timestamp ?? 0)
  const stale = computed(() => mode.value === 'offline' || !dynamicAt.value || now.value - dynamicAt.value > profile.value.staleMs)
  const commandReady = computed(() => mode.value === 'live' && connection.value === 'connected' && !stale.value && store.currentRobotId === profile.value.robotId)
  const controls = new ControlPump(async frame => {
    if (mode.value !== 'live' || connection.value !== 'connected') return
    const neutral = !frame.keyboardValue && !frame.leftButtonDown && !frame.rightButtonDown && !frame.midButtonDown && !frame.mouseX && !frame.mouseY && !frame.mouseZ
    if (!neutral && (!captured.value || !commandReady.value)) return
    try {
      validateCommand('KeyboardMouseControl', frame)
      const result = await window.api.mqtt.publish({ topic: 'KeyboardMouseControl', messageType: 'KeyboardMouseControl', payload: frame, qos: 0, retain: false })
      if (!result.success) { captured.value = false; log(result.error || '键鼠帧提交失败', 'error') }
    } catch (cause) { captured.value = false; log(String(cause), 'error') }
  })
  watch(captured, (active, previous) => { if (previous && !active) void controls.release() }, { flush: 'sync' })
  function queueControl(frame: Record<string, unknown>): void { if (captured.value && commandReady.value) controls.enqueue(frame) }
  function log(text: string, level: JournalEntry['level'] = 'info'): void {
    journal.value = [{ id: ++eventId, time: Date.now(), level, text }, ...journal.value].slice(0, 150)
  }
  function receive(message: ParsedMqttEventPayload): void {
    if (!message.parseSuccess || !message.data || typeof message.data !== 'object') {
      rejected.value++; if (rejected.value <= 5 || rejected.value % 50 === 0) log(`解码失败 ${message.topic}: ${message.error || '无效消息'}`, 'warning'); return
    }
    if (message.messageType === 'unknown') { rejected.value++; return }
    // Preserve protobuf field presence: omitted optional fields must not zero the last known state.
    const update = statePatch(message)
    if (message.messageType === 'robot_static_status' && Number(update.robotId) > 0 && store.currentRobotId && store.currentRobotId !== Number(update.robotId)) {
      captured.value = false; latest.value = {}; history.value = []; store.clearAll(); store.clearAllRobotData()
      log('服务器机器人身份改变，已清除上一身份的状态', 'warning')
    }
    const previous = latest.value[message.messageType]?.data
    const data = { ...(previous && typeof previous === 'object' ? previous : {}), ...update }
    const resolved = { ...message, data }
    latest.value = { ...latest.value, [message.messageType]: resolved }
    received.value++; pendingCount++; lastReceived.value = Date.now()
    try { store.handleMessage(message.topic, message.messageType as any, data) }
    catch (cause) { rejected.value++; log(`状态更新失败: ${String(cause)}`, 'error') }
    if (['event', 'penalty_info', 'guard_ctrl_result'].includes(message.messageType)) log(`${message.topic}: ${formatJson(data).slice(0, 140)}`, message.messageType === 'penalty_info' ? 'warning' : 'info')
  }
  function startClock(): void {
    if (tickTimer) return
    tickTimer = setInterval(() => {
      now.value = Date.now(); mps.value = pendingCount; pendingCount = 0
      if (robot.value && !stale.value && robot.value.healthUpdatedAt && now.value - robot.value.healthUpdatedAt <= 3000) history.value = [...history.value, { at: now.value, health: robot.value.currentHealth, heat: robot.value.currentHeat, energy: robot.value.currentChassisEnergy }].slice(-120)
      if (stale.value) captured.value = false
    }, 1000)
  }
  function clearSession(): void {
    latest.value = {}; history.value = []; received.value = 0; rejected.value = 0; lastReceived.value = 0; pendingCount = 0; mps.value = 0
    store.clearAll(); store.clearAllRobotData(); limiter.reset()
  }
  async function disconnect(): Promise<void> {
    epoch++; captured.value = false
    if (mode.value === 'live' && connection.value === 'connected') await controls.release()
    controls.cancel()
    if (demoTimer) clearInterval(demoTimer); demoTimer = undefined
    demoWorker?.terminate(); demoWorker = null
    cleanups.splice(0).forEach(cleanup => cleanup())
    if (mode.value === 'live' && desktop) { try { await window.api.mqtt.disconnect() } catch (cause) { log(String(cause), 'warning') } }
    store.setConnectionStatus(false); mode.value = 'offline'; connection.value = 'disconnected'; log('数据源已断开，保留最后状态供检查')
  }
  function validateProfile(): void {
    const p = profile.value
    if (!p.host.trim() || /[\s/]/.test(p.host)) throw new Error('填写主机名或 IP，不要包含 mqtt://')
    for (const port of [p.port, p.udpPort]) if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('端口必须在 1–65535')
    if (![1, 2, 3, 4, 5, 6, 7, 9, 101, 102, 103, 104, 105, 106, 107, 109].includes(p.robotId)) throw new Error('请选择有效机器人 ID')
    if (!Number.isFinite(p.staleMs) || p.staleMs < 500 || p.staleMs > 30000) throw new Error('过期阈值须在 500–30000 ms')
    if (!Number.isInteger(p.jpegQuality) || p.jpegQuality < 50 || p.jpegQuality > 95) throw new Error('JPEG 质量须在 50–95')
    if (/[\s/]/.test(p.sourceHost)) throw new Error('图传来源填写主机名/IP，或留空')
  }
  async function connect(): Promise<void> {
    if (busy.value) return
    busy.value = true; error.value = ''
    try {
      validateProfile(); if (!desktop) throw new Error('真实 MQTT TCP 连接需要桌面版；浏览器可使用本地演示')
      await disconnect(); clearSession(); const generation = epoch; mode.value = 'live'; connection.value = 'connecting'; startClock()
      cleanups.push(window.api.mqtt.onMessage((message: ParsedMqttEventPayload) => { if (generation === epoch) receive(message) }))
      cleanups.push(window.api.mqtt.onStatus((status: { status: string; connected: boolean }) => {
        if (generation !== epoch) return
        connection.value = status.status; store.setConnectionStatus(status.connected)
        if (!status.connected) captured.value = false
      }))
      await window.api.mqtt.connect({ host: profile.value.host, port: profile.value.port, clientId: String(profile.value.robotId), topics: downlinkTopics, subscribeQos: 1, autoReconnect: true, cleanSession: true, keepAliveSecs: 10 })
      if (generation !== epoch) { await window.api.mqtt.disconnect(); return }
      const status = await window.api.mqtt.getStatus()
      if (generation !== epoch) return
      connection.value = status.status; store.setConnectionStatus(status.connected)
      writeLocal('connection', profile.value); log(`MQTT 已连接 ${profile.value.host}:${profile.value.port} · clientID ${profile.value.robotId}`)
    } catch (cause) { error.value = String(cause); log(error.value, 'error'); connection.value = 'error' }
    finally { busy.value = false }
  }
  async function startDemo(): Promise<void> {
    if (busy.value) return
    busy.value = true
    try {
      await disconnect(); clearSession(); mode.value = 'demo'; connection.value = 'demo'; error.value = ''; startClock()
      demoWorker = new Worker(new URL('../mqtt/mqttDecoder.worker.ts', import.meta.url), { type: 'module' })
      const generation = epoch
      demoWorker.onmessage = (event: MessageEvent<{ messages: ParsedMqttEventPayload[] }>) => { if (generation === epoch) event.data.messages.forEach(receive) }
      demoWorker.onerror = (event) => { error.value = event.message; log(event.message, 'error') }
      let sequence = 0; const started = performance.now()
      const publish = () => {
        const t = (performance.now() - started) / 1000; const id = profile.value.robotId
        const packets = [
          encodeSample('RobotDynamicStatus', { currentHealth: 380 - Math.floor(t / 8) % 4 * 20, currentHeat: 58 + 26 * Math.sin(t * .6), currentChassisEnergy: Math.round(72 + 15 * Math.sin(t * .25)), currentBufferEnergy: 42, remainingAmmo: 240 - Math.floor(t) % 80, currentExperience: 38, experienceForUpgrade: 100, canRemoteHeal: true, canRemoteAmmo: true }),
          encodeSample('RobotPosition', { x: 12 + 4 * Math.sin(t * .1), y: 8 + 3 * Math.cos(t * .1), z: 0, yaw: t * 3 % 360 })
        ]
        if (sequence % 10 === 0) {
          packets.unshift(encodeSample('RobotStaticStatus', { robotId: id, robotType: 3, connectionState: 1, fieldState: 1, aliveState: 1, level: 3, maxHealth: 400, maxHeat: 200, maxPower: 80, maxChassisEnergy: 100, maxBufferEnergy: 60, heatCooldownRate: 20 }))
          packets.push(encodeSample('GameStatus', { currentRound: 1, totalRounds: 3, currentStage: 4, stageCountdownSec: Math.max(0, 420 - Math.floor(t) % 420), stageElapsedSec: Math.floor(t) % 420, redScore: 0, blueScore: 0 }))
          packets.push(encodeSample('RobotModuleStatus', { powerManager: 1, rfid: 1, lightStrip: 1, smallShooter: 1, bigShooter: 0, uwb: 1, armor: 1, videoTransmission: 1 }))
          packets.push(encodeSample('GlobalLogisticsStatus', { remainingEconomy: 860 }))
          const custom = new Uint8Array(150); const view = new DataView(custom.buffer); view.setFloat32(1, 12.5 + 2 * Math.sin(t), true); view.setInt8(5, 1)
          packets.push(encodeSample('CustomByteBlock', { data: custom }))
        }
        demoWorker?.postMessage({ id: ++sequence, payloads: packets })
      }
      publish(); demoTimer = setInterval(publish, 100)
      log('本地演示已启动：样例 → Protobuf 编码 → Worker 解码 → 同一个 Pinia Store；不发送任何网络控制')
    } finally { busy.value = false }
  }
  async function send(topic: string, payload: Record<string, unknown>): Promise<boolean> {
    try {
      if (!commandReady.value) throw new Error('控制未就绪：需要真实连接、匹配机器人 ID 和新鲜状态')
      validateCommand(topic, payload); limiter.take(topic, performance.now())
      const result = await window.api.mqtt.publish({ topic, messageType: topic, payload, qos: 1, retain: false })
      if (!result.success) throw new Error(result.error || '提交失败')
      if (topic !== 'KeyboardMouseControl') log(`${topic} 已提交；最终结果以服务器状态回读为准`)
      return true
    } catch (cause) { if (topic !== 'KeyboardMouseControl') log(String(cause), 'error'); return false }
  }
  function saveProfile(): void { validateProfile(); writeLocal('connection', profile.value); log('连接配置已保存') }
  function dispose(): void { void disconnect(); if (tickTimer) clearInterval(tickTimer); tickTimer = undefined }
  function exportSession(): void {
    const data = formatJson({ format: 'shark-session-v1', exportedAt: new Date().toISOString(), mode: mode.value, profile: profile.value, latest: latest.value, journal: journal.value, history: history.value }, null, 2)
    const url = URL.createObjectURL(new Blob([data], { type: 'application/json' }))
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = `shark-session-${Date.now()}.json`; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return { profile, mode, connection, busy, now, lastReceived, received, rejected, mps, latest, journal, history, captured, error, robot, stale, commandReady, connect, disconnect, startDemo, send, queueControl, log, saveProfile, dispose, exportSession }
})

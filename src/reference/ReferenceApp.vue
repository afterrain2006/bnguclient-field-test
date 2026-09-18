<script setup lang="ts">
import { formatJson } from '../protocol/json'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useMqttDataStore } from '../store/modules/mqtt_data'
import { useReferenceSession, downlinkTopics } from './session'
import { desktop, readLocal, writeLocal } from './platform'
import { useReferenceVideo } from './composables/video'
import { getCustomLayouts, resolveCustomLayout, saveCustomLayout } from '../protocol/custom-layouts'
import { decodeCustomByteBlock, type ByteLayout } from '../protocol/custom-byte-block'
import { COMMAND_LIMITS, validateCommand } from '../protocol/commands'
import Icon from './components/Icon.vue'
import ArenaMap from './components/ArenaMap.vue'
import RoboControl from '../components/RoboControl.vue'
import { useFreshnessClock } from '../composables/useFreshnessClock'
import './styles/reference.css'
import './styles/fps.css'

type Page = 'cockpit' | 'telemetry' | 'protocol' | 'interfaces' | 'settings'
const pages: { id: Page; name: string; icon: string; subtitle: string }[] = [
  { id: 'cockpit', name: '指挥台', icon: 'cockpit', subtitle: 'OPERATIONS / 实时态势' },
  { id: 'telemetry', name: '遥测', icon: 'chart', subtitle: 'TELEMETRY / 状态与趋势' },
  { id: 'protocol', name: '协议', icon: 'code', subtitle: 'PROTOCOL / 消息与指令' },
  { id: 'interfaces', name: '接口', icon: 'plug', subtitle: 'INTERFACES / 电控与自定义数据' },
  { id: 'settings', name: '设置', icon: 'settings', subtitle: 'CONFIGURATION / 连接与显示' }
]
const page = ref<Page>('cockpit'); const session = useReferenceSession(); const mqtt = useMqttDataStore(); const video = useReferenceVideo()
const menuOpen = ref(false); const menuDialog = ref<HTMLDialogElement | null>(null)
const focusMode = ref(false); const crosshair = ref(readLocal('crosshair', true)); const compact = ref(readLocal('compact', false))
const confirm = ref<{ title: string; topic: string; payload: Record<string, unknown> } | null>(null)
const amount = ref(50); const commandTopic = ref('CommonCommand'); const commandBody = ref('{\n  "cmdType": 1,\n  "param": 50\n}')
const inspectorFilter = ref(''); const selectedTopic = ref('robot_dynamic_status'); const interfaceName = ref('infantry')
const layoutText = ref(''); const layoutError = ref(''); const packetHex = ref(''); const packetResult = ref('')
const toast = ref(''); let toastTimer: ReturnType<typeof setTimeout> | undefined
const currentPage = computed(() => pages.find(p => p.id === page.value)!)
const robotId = computed(() => mqtt.currentRobotId || session.profile.robotId)
const healthFreshnessNow = useFreshnessClock()
const healthStatus = computed(() => {
  const updatedAt = session.robot?.healthUpdatedAt ?? 0
  if (!updatedAt) return 'missing'
  return healthFreshnessNow.value - updatedAt > 3000 ? 'stale' : 'fresh'
})
const hp = computed(() => healthStatus.value === 'missing' ? null : (session.robot?.currentHealth ?? null))
const hpMax = computed(() => session.robot?.maxHealthUpdatedAt ? session.robot.maxHealth : null)
const hpPercent = computed(() => hp.value !== null && hpMax.value && hpMax.value > 0 ? Math.max(0, Math.min(100, hp.value / hpMax.value * 100)) : 0)
const heatPercent = computed(() => session.robot?.maxHeat ? Math.min(100, session.robot.currentHeat / session.robot.maxHeat * 100) : 0)
const healthColor = computed(() => healthStatus.value !== 'fresh' ? '' : hpPercent.value < 25 ? 'danger' : hpPercent.value < 50 ? 'warning' : '')
const game = computed(() => mqtt.gameStatus)
const gameKnown = computed(() => Boolean(session.latest.game_status))
const clock = computed(() => {
  if (!gameKnown.value) return '--:--'
  const seconds = game.value.stageCountdownSec
  return `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`
})
const lastAge = computed(() => session.lastReceived ? `${Math.max(0, session.now - session.lastReceived)} ms` : '—')
const messages = computed(() => Object.values(session.latest).filter(m => `${m.topic} ${m.messageType}`.toLowerCase().includes(inspectorFilter.value.toLowerCase())))
const inspected = computed(() => session.latest[selectedTopic.value])
const layouts = computed(() => { try { return getCustomLayouts() } catch { return [] } })
const custom = computed(() => mqtt.customData.get(robotId.value))
const samplePoints = (key: 'health' | 'heat' | 'energy', maximum: number) => session.history.map((p, i) => `${i / Math.max(1, session.history.length - 1) * 580},${104 - Math.min(1, Math.max(0, p[key] / Math.max(1, maximum))) * 88}`).join(' ')
const modules = computed(() => Object.entries(session.latest.robot_module_status?.data ?? {}).filter(([, value]) => typeof value === 'number'))
const fieldLabel: Record<string, string> = { powerManager: '电源管理', rfid: 'RFID', lightStrip: '灯条', smallShooter: '17 mm 发射', bigShooter: '42 mm 发射', uwb: '定位模块', armor: '装甲模块', videoTransmission: '图传模块', capacitor: '电容模块' }
function notify(text: string) { toast.value = text; if (toastTimer) clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.value = '', 4000) }
function requestCommand(title: string, topic: string, payload: Record<string, unknown>) {
  try { validateCommand(topic, payload); confirm.value = { title, topic, payload } } catch (cause) { notify(String(cause)) }
}
async function submitCommand() {
  if (!confirm.value) return
  const request = confirm.value; confirm.value = null
  const success = await session.send(request.topic, request.payload)
  notify(success ? '指令已提交，等待服务器状态回读' : '未发送，请检查事件记录')
}
function prepareJsonCommand() {
  try { const payload = JSON.parse(commandBody.value); if (!payload || Array.isArray(payload) || typeof payload !== 'object') throw new Error('指令参数必须是 JSON 对象'); requestCommand(`发送 ${commandTopic.value}`, commandTopic.value, payload) } catch (cause) { notify(String(cause)) }
}
function changeCommand() {
  const examples: Record<string, unknown> = { CommonCommand: { cmdType: 1, param: 50 }, CustomControl: { data: [] }, KeyboardMouseControl: { mouseX: 0, mouseY: 0, mouseZ: 0, keyboardValue: 0, leftButtonDown: false, rightButtonDown: false, midButtonDown: false }, RuneActivateCommand: { activate: 1 }, HeroDeployModeEventCommand: { mode: 1 }, RobotPerformanceSelectionCommand: { shooter: 1, chassis: 1 }, AssemblyCommand: { operation: 1, difficulty: 1 }, DartCommand: { targetId: 1, open: false, launchConfirm: false }, SentryCtrlCommand: { commandId: 1 }, AirSupportCommand: { commandId: 1 }, MapClickInfoNotify: { isSendAll: 0, robotId: [3, 0, 0, 0, 0, 0, 0], mode: 3, enemyId: 0, ascii: 0, type: 1, mapX: 0, mapY: 0 } }
  commandBody.value = formatJson(examples[commandTopic.value] ?? {}, null, 2)
}
function loadLayout() { try { layoutText.value = formatJson(resolveCustomLayout(interfaceName.value), null, 2); layoutError.value = '' } catch (cause) { layoutError.value = String(cause) } }
function saveLayout() {
  try { const layout = JSON.parse(layoutText.value) as ByteLayout; if (layout.name !== interfaceName.value) throw new Error('布局名称必须与当前机器人类型一致'); saveCustomLayout(layout); layoutError.value = ''; notify('字段布局已保存；请同步核对电控端版本与端序') } catch (cause) { layoutError.value = String(cause) }
}
function inspectPacket() {
  try {
    const text = packetHex.value.replace(/\s/g, '')
    if (!/^(?:[0-9a-fA-F]{2})+$/.test(text)) throw new Error('输入完整的十六进制字节，两个字符为一字节')
    const bytes = Uint8Array.from(text.match(/../g)!.map(byte => parseInt(byte, 16)))
    packetResult.value = formatJson(decodeCustomByteBlock(bytes, JSON.parse(layoutText.value)), null, 2); layoutError.value = ''
  } catch (cause) { layoutError.value = String(cause); packetResult.value = '' }
}
async function openWorkspace() { await video.stop(); await session.disconnect(); window.location.search = '?workspace=legacy' }
function controlFrame(frame: Record<string, unknown>) { session.queueControl(frame) }
function captureChange(captured: boolean) { session.captured = captured && !menuOpen.value }
async function openMenu(target: Page = 'cockpit') {
  session.captured = false
  if (document.pointerLockElement) document.exitPointerLock()
  page.value = target
  menuOpen.value = true
  await nextTick()
  if (menuOpen.value && !menuDialog.value?.open) menuDialog.value?.showModal()
}
function closeMenu() {
  confirm.value = null
  menuOpen.value = false
  menuDialog.value?.close()
  // Returning to the view never re-arms robot input.
  session.captured = false
}
function hotkey(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    event.preventDefault(); event.stopPropagation()
    if (event.repeat) return
    if (confirm.value) { confirm.value = null; return }
    if (menuOpen.value) closeMenu(); else void openMenu()
    return
  }
  if (event.key === 'F10' && !event.repeat && !menuOpen.value) { event.preventDefault(); focusMode.value = !focusMode.value }
  if (event.key === 'F11' && desktop && !event.repeat) { event.preventDefault(); void window.api.toggleFullscreen() }
  if (event.ctrlKey && /^[1-5]$/.test(event.key) && !event.repeat) { event.preventDefault(); void openMenu(pages[Number(event.key) - 1].id) }
}
function pointSelected(point: { x: number; y: number }) { page.value = 'protocol'; commandTopic.value = 'MapClickInfoNotify'; changeCommand(); const command = JSON.parse(commandBody.value); command.mapX = point.x; command.mapY = point.y; commandBody.value = formatJson(command, null, 2); notify('坐标已填入指令草稿；尚未发送，先核对地图标定') }
watch(crosshair, value => writeLocal('crosshair', value)); watch(compact, value => writeLocal('compact', value))
watch(page, () => { session.captured = false })
onMounted(async () => { loadLayout(); window.addEventListener('keydown', hotkey, true); await mqtt.loadRobotIdMappings(); if (new URLSearchParams(location.search).get('demo') === '1') await session.startDemo() })
onUnmounted(() => { session.dispose(); window.removeEventListener('keydown', hotkey, true); if (toastTimer) clearTimeout(toastTimer) })
</script>

<template>
  <div class="reference-root fps-root" :class="{ 'focus-mode': focusMode, compact, 'menu-open': menuOpen }">
    <div class="fps-identity"><strong>BNGUCLIENT <span>//</span> {{ String(robotId % 100).padStart(2, '0') }}</strong><div class="source-badge" :class="session.mode"><i/>{{ session.mode === 'demo' ? '本地演示 · 非实机数据' : session.mode === 'live' ? (session.connection !== 'connected' ? '链路中断 · 等待重连' : session.stale ? '已连接 · 状态过期' : (['127.0.0.1', 'localhost', '::1'].includes(session.profile.host) ? '本机测试链路 · 实时' : '裁判系统 · 实时')) : 'OFFLINE · 未连接' }}</div>
        </div>
    <button class="fps-menu-trigger" aria-label="打开菜单" @click="openMenu()"><kbd>ESC</kbd><span>菜单</span></button>
    <div v-if="session.error && !menuOpen" class="fps-error" role="alert">{{ session.error }}</div>
      <main :inert="menuOpen" class="cockpit-layout">
        <section class="ref-panel robot-panel">
          <div class="panel-heading"><span class="eyebrow">CURRENT UNIT</span><span class="tiny-tag">{{ robotId < 100 ? 'RED' : 'BLUE' }}</span></div>
          <div class="unit-title"><div><span class="unit-number">{{ String(robotId % 100).padStart(2, '0') }}</span><h1>{{ [3,4,5].includes(robotId % 100) ? '步兵机器人' : '当前机器人' }}</h1><p>INFANTRY / {{ session.robot ? `LV.${session.robot.level}` : '等待身份同步' }}</p></div><svg class="unit-avatar" viewBox="0 0 100 100"><path d="M25 55l50-7 14 22-17 15-49-5L12 64z" fill="#303b3e" stroke="#7c8b88"/><path d="M26 55l4-22 36-7 14 25-26 13z" fill="#46534f" stroke="#a5b4a4"/><path d="M42 38l41-10 3 6-41 12z" fill="#b7d293"/><path d="M12 64l11 16 8-8-9-15 M72 85l17-15-6-7-17 16" stroke="#101718" stroke-width="9"/><path d="M34 49l14 4 12-6" fill="none" stroke="#c4ec86" stroke-width="3"/></svg></div>
          <div class="data-validity" :class="{ stale: session.stale }"><i/>{{ session.stale ? '等待新鲜状态数据' : session.mode === 'demo' ? '演示状态正常' : '状态同步正常' }}<span>{{ lastAge }}</span></div>
          <div class="health-block" :class="[healthColor, healthStatus]"><div class="metric-label"><span>当前血量</span><span>HP</span></div><div class="health-value">{{ hp ?? '—' }}<small>/ {{ hpMax ?? '—' }}</small></div><div class="meter"><i :style="{ width: hpPercent + '%' }"/></div><div class="health-freshness" v-if="healthStatus !== 'fresh'">{{ healthStatus === 'missing' ? '等待血量数据' : '血量数据已过期' }}</div><div class="scale"><span>0</span><span>{{ Math.round(hpPercent) }}%</span><span>{{ hpMax ?? 'MAX' }}</span></div></div>
          <div class="unit-metrics"><div><span>剩余弹量</span><strong>{{ session.robot?.remainingAmmo ?? '—' }}<small>发</small></strong></div><div><span>底盘能量</span><strong>{{ session.robot?.currentChassisEnergy ?? '—' }}<small>J</small></strong></div></div>
          <div class="heat-block"><div class="metric-label"><span>射击热量</span><strong>{{ session.robot ? Math.round(session.robot.currentHeat) : '—' }} <small>/ {{ session.robot?.maxHeat ?? '—' }}</small></strong></div><div class="meter thin amber"><i :style="{ width: heatPercent + '%' }"/></div></div>
          <div class="section-rule"/><div class="panel-heading"><span class="eyebrow">MODULE STATUS</span><span class="muted">模块状态</span></div>
          <div v-if="modules.length" class="module-grid"><div v-for="[key, value] in modules" :key="key"><i :class="{ good: value === 1, bad: value === 2 }"/><span>{{ fieldLabel[key] || key }}</span><small>{{ value === 1 ? '在线' : value === 2 ? '异常' : '离线' }}</small></div></div><div v-else class="quiet-empty">等待 RobotModuleStatus</div>
          <div class="unit-footer"><Icon name="shield" :size="15"/><span>所有状态以服务器回读为准</span></div>
        </section>

        <section class="center-stack">
          <div class="match-strip"><div class="match-round"><span class="eyebrow">ROUND</span><b>{{ gameKnown ? `${game.currentRound} / ${game.totalRounds}` : '— / —' }}</b></div><div class="team-score red"><span>RED TEAM</span><strong>{{ gameKnown ? game.redScore : '—' }}</strong></div><div class="match-clock"><b>{{ clock }}</b><span>{{ gameKnown ? mqtt.gameStageName : '等待比赛数据' }}<span v-if="game.isPaused"> · 已暂停</span></span></div><div class="team-score blue"><strong>{{ gameKnown ? game.blueScore : '—' }}</strong><span>BLUE TEAM</span></div><span class="tiny-tag match-format">RMUC 2026</span></div>
          <div class="video-stage" :class="{ 'has-video': video.running.value, 'video-stale': video.running.value && video.age.value > 2000 }">
            <img v-if="video.url.value" :src="video.url.value" :style="{ transform: `scale(${video.zoom.value})` }" class="live-video" alt="机器人实时图传"/>
            <div v-else class="video-standby"><div class="horizon-grid"/><div class="standby-center"><div class="standby-reticle"><Icon name="focus" :size="38"/></div><span class="eyebrow">VIDEO CHANNEL / {{ String(robotId % 100).padStart(2,'0') }}</span><h2>等待图传接入</h2><p>UDP H.265 · 接收端口 {{ session.profile.udpPort }}</p><button class="button primary" :disabled="video.busy.value" @click="video.start"><Icon name="play" :size="15"/>启动视频接收</button><small v-if="session.mode === 'demo'">遥测为本地样例，视频区域不模拟实机画面</small></div></div>
            <div class="video-topline"><span><i :class="{ live: video.age.value < 2000 }"/>{{ video.stateLabel.value }}</span><span>{{ video.running.value ? `${video.stats.value.decodedWidth || '—'} × ${video.stats.value.decodedHeight || '—'}` : 'HEVC / BACKEND DECODE' }}</span></div>
            <svg v-if="crosshair && video.running.value" class="crosshair" viewBox="0 0 100 100"><path d="M25 50h16 M59 50h16 M50 25v16 M50 59v16" stroke="currentColor" stroke-width="1"/><circle cx="50" cy="50" r="2" fill="currentColor"/></svg>
            <div v-if="video.running.value && video.age.value > 2000" class="stream-warning">图传数据已过期 · 等待新帧</div>
            <div class="video-bottomline"><span><Icon name="signal" :size="13"/>{{ video.fps.value || '—' }} FPS</span><span>QUEUE {{ video.stats.value.decodeQueueDepth ?? '—' }}</span><span>{{ video.running.value ? `${Number(video.stats.value.decoderCallAvgMs || 0).toFixed(1)} ms DECODE` : 'NO SIGNAL' }}</span><button @click="video.snapshot" :disabled="!video.running.value" title="导出当前画面"><Icon name="camera" :size="15"/></button><select v-model.number="video.zoom.value" aria-label="图传缩放"><option :value="1">1.0×</option><option :value="1.5">1.5×</option><option :value="2">2.0×</option></select></div>
            <RoboControl v-if="session.captured && !menuOpen" :enabled="session.commandReady && !menuOpen" :hud-edit-mode="false" @control-frame="controlFrame" @capture-change="captureChange"/>
          </div>
          <div v-if="video.error.value" class="inline-error">{{ video.error.value }}</div>
          <div class="control-strip"><div><span class="keycap">W A S D</span><span>{{ session.captured ? '控制已启用 · Backspace 释放鼠标' : '键鼠控制未启用' }}</span></div><button class="button" :class="{ primary: session.captured }" :disabled="!session.commandReady" @click="session.captured = !session.captured"><Icon name="focus" :size="15"/>{{ session.captured ? '释放控制' : '启用控制' }}</button></div>

        </section>

        <aside class="right-stack"><section class="ref-panel map-panel"><div class="panel-heading"><div><span class="eyebrow">TACTICAL VIEW</span><h3>场地态势</h3></div><button class="icon-button" title="打开遥测地图" @click="openMenu('telemetry')"><Icon name="focus" :size="16"/></button></div><ArenaMap/><div class="map-coordinates"><span>X <b>{{ session.latest.robot_position ? session.robot?.x?.toFixed(2) ?? '—' : '—' }}</b></span><span>Y <b>{{ session.latest.robot_position ? session.robot?.y?.toFixed(2) ?? '—' : '—' }}</b></span><span>YAW <b>{{ session.latest.robot_position ? session.robot?.yaw?.toFixed(1) ?? '—' : '—' }}°</b></span></div><small class="muted">示意底图 · 真实场地须校准坐标</small></section>


        </aside>
      </main>


    <dialog ref="menuDialog" class="fps-menu" aria-label="操作菜单" @cancel.prevent="closeMenu" @click.self="closeMenu">
      <aside class="ref-rail">
        <span class="shark-mark"><Icon name="shield" :size="32"/></span>
        <nav aria-label="主导航"><button v-for="item in pages" :key="item.id" :class="{ selected: page === item.id }" :aria-current="page === item.id ? 'page' : undefined" @click="page = item.id"><Icon :name="item.icon"/><span>{{ item.name }}</span></button></nav>
        <button class="rail-bottom" title="打开完整 HUD 布局工作台" @click="openWorkspace"><Icon name="edit"/><span>工作台</span></button>
        <span class="rail-version">FIELD / 01</span>
      </aside>
      <div class="ref-main">
      <header class="ref-header">
        <div class="brand"><strong>BNGUCLIENT<span> / </span></strong><div><b>{{ currentPage.name }}</b><small>{{ currentPage.subtitle }}</small></div></div>
        <div class="header-actions"><button class="icon-button" title="导出会话记录" @click="session.exportSession"><Icon name="download"/></button><button class="button" @click="closeMenu">返回视野 <kbd>ESC</kbd></button><button class="connection-button" @click="openMenu('settings')"><span :class="{ active: session.connection === 'connected' }"/>{{ session.mode === 'demo' ? '演示连接' : session.connection === 'connected' ? '链路在线' : '连接设备' }}<Icon name="chevron" :size="14"/></button></div>
      </header>
      <div v-if="session.error" class="error-banner" role="alert">{{ session.error }}<button @click="session.error = ''" aria-label="关闭错误"><Icon name="close" :size="16"/></button></div>


        <main v-if="page === 'cockpit'" class="detail-page menu-home">
          <div class="menu-intro"><span class="eyebrow">OPERATIONS MENU / BNGUCLIENT</span><h1>保持专注。掌握全局。</h1><p>菜单已释放键鼠控制 · 图传与状态接收继续运行</p><button class="button primary" @click="closeMenu">返回操作视野 <kbd>ESC</kbd></button></div>
          <div class="menu-shortcuts"><button v-for="item in pages.slice(1)" :key="item.id" @click="page = item.id"><Icon :name="item.icon"/><b>{{ item.name }}</b><small>{{ item.subtitle }}</small><Icon name="arrow" :size="16"/></button></div>
          <div class="two-column">          <section class="ref-panel command-card"><div class="panel-heading"><div><span class="eyebrow">REFEREE ACTIONS</span><h3>裁判系统交互</h3></div><span class="tiny-tag">手动</span></div><label class="amount-select">17 mm 兑换数量<select v-model.number="amount"><option :value="50">50 发</option><option :value="100">100 发</option><option :value="150">150 发</option></select></label><button class="action-row" :disabled="!session.commandReady" @click="requestCommand('兑换 17 mm 发弹量', 'CommonCommand', { cmdType: 1, param: amount })"><span>兑换允许发弹量<small>等待服务器确认</small></span><Icon name="arrow" :size="17"/></button><button class="action-row" :disabled="!session.commandReady || !session.robot?.canRemoteHeal" @click="requestCommand('远程兑换血量', 'CommonCommand', { cmdType: 6, param: 0 })"><span>远程补血<small>{{ session.robot?.canRemoteHeal ? '服务器允许申请' : '当前不可用' }}</small></span><Icon name="arrow" :size="17"/></button><button class="action-row" :disabled="!session.commandReady" @click="requestCommand('申请激活能量机关', 'RuneActivateCommand', { activate: 1 })"><span>激活能量机关<small>人工触发指令</small></span><Icon name="arrow" :size="17"/></button></section>          <section class="ref-panel event-panel"><div class="panel-heading"><div><span class="eyebrow">EVENT STREAM</span><h3>链路事件</h3></div><button class="text-button" @click="openMenu('protocol')">查看协议 <Icon name="arrow" :size="14"/></button></div><div v-if="!session.journal.length" class="quiet-empty">连接裁判系统或启动本地演示，事件将显示在这里。</div><div v-for="entry in session.journal.slice(0, 4)" :key="entry.id" class="event-row"><time>{{ new Date(entry.time).toLocaleTimeString('zh-CN', { hour12: false }) }}</time><i :class="entry.level"/><span>{{ entry.text }}</span></div></section></div>
          <section class="ref-panel"><div class="panel-heading"><h3>模块状态</h3><span class="tiny-tag">RobotModuleStatus</span></div><div v-if="modules.length" class="module-grid"><div v-for="[key, value] in modules" :key="key"><i :class="{ good: value === 1, bad: value === 2 }"/><span>{{ fieldLabel[key] || key }}</span><small>{{ value === 1 ? '在线' : value === 2 ? '异常' : '离线' }}</small></div></div><p v-else class="quiet-empty">等待模块状态</p></section>
        </main>
      <main v-if="page !== 'cockpit'" class="detail-page">
        <div class="page-intro"><div><span class="eyebrow">{{ currentPage.subtitle }}</span><h1>{{ page === 'telemetry' ? '每一个状态，都有来源。' : page === 'protocol' ? '从字节到状态，完整可查。' : page === 'interfaces' ? '把约定写清楚，再连接设备。' : '准备好，进入下一场。' }}</h1></div><span class="tiny-tag">BNGUCLIENT / 2026</span></div>
        <template v-if="page === 'telemetry'">
          <div class="telemetry-summary"><div class="ref-panel stat-card"><span>消息总数</span><strong>{{ session.received.toLocaleString() }}</strong><small>成功解码的消息</small></div><div class="ref-panel stat-card"><span>接收速率</span><strong>{{ session.mps }}<small>msg/s</small></strong><small>{{ session.mode === 'demo' ? '本地 Worker 样例链路' : 'MQTT 接收链路' }}</small></div><div class="ref-panel stat-card"><span>解析失败</span><strong :class="{ 'text-warning': session.rejected }">{{ session.rejected }}</strong><small>坏包隔离，不阻断后续消息</small></div><div class="ref-panel stat-card"><span>最新数据年龄</span><strong>{{ lastAge }}</strong><small :class="{ 'text-warning': session.stale }">{{ session.stale ? '当前状态已过期或未接入' : '状态新鲜' }}</small></div></div>
          <div class="two-column"><section class="ref-panel trend-panel"><div class="panel-heading"><div><span class="eyebrow">LAST 120 SAMPLES</span><h3>生命值趋势</h3></div><span class="tiny-tag">{{ session.mode === 'demo' ? 'DEMO' : 'TELEMETRY' }}</span></div><svg viewBox="0 0 580 120" class="trend" role="img" aria-label="最近120个血量采样点"><path d="M0 16h580 M0 60h580 M0 104h580" stroke="#334044" stroke-dasharray="3 5"/><polyline :points="samplePoints('health', hpMax || 400)" fill="none" stroke="#c4ec86" stroke-width="2"/></svg><div class="scale"><span>较早</span><span>{{ session.history.length }} 个采样点 · {{ hpMax || '—' }} HP 满量程</span><span>现在</span></div><h3 class="subheading">热量 / 底盘能量</h3><svg viewBox="0 0 580 120" class="trend" role="img" aria-label="热量与底盘能量趋势"><path d="M0 16h580 M0 60h580 M0 104h580" stroke="#334044" stroke-dasharray="3 5"/><polyline :points="samplePoints('heat', session.robot?.maxHeat || 200)" fill="none" stroke="#e6b06c" stroke-width="2"/><polyline :points="samplePoints('energy', session.robot?.maxChassisEnergy || 100)" fill="none" stroke="#83b8cf" stroke-width="2"/></svg><div class="chart-legend"><span class="amber-dot">热量 / 各自满量程</span><span class="blue-dot">底盘能量 / 各自满量程</span></div></section><section class="ref-panel"><div class="panel-heading"><div><span class="eyebrow">POSITION INSPECTOR</span><h3>坐标检查</h3></div></div><ArenaMap large @select="pointSelected"/><p class="muted">点击地图只生成坐标草稿。核对底图与坐标范围后，须在协议页手动确认发送。</p><div class="definition-grid"><span>坐标来源</span><b>RobotPosition</b><span>最近更新时间</span><b>{{ session.latest.robot_position ? new Date(session.latest.robot_position.timestamp).toLocaleTimeString() : '等待数据' }}</b><span>图传解码后端</span><b>{{ video.stats.value.decoderBackend || '未启动' }}</b><span>丢弃的不完整帧</span><b>{{ video.stats.value.droppedIncompleteFrames ?? '—' }}</b></div></section></div>
          <section class="ref-panel"><div class="panel-heading"><h3>会话记录</h3><button class="button" @click="session.exportSession"><Icon name="download" :size="15"/>导出 JSON</button></div><div v-for="entry in session.journal" :key="entry.id" class="event-row"><time>{{ new Date(entry.time).toLocaleTimeString() }}</time><i :class="entry.level"/><span>{{ entry.text }}</span></div><div v-if="!session.journal.length" class="quiet-empty">暂无记录。先连接数据源。</div></section>
        </template>
        <template v-else-if="page === 'protocol'">
          <div class="protocol-grid"><section class="ref-panel topic-panel"><div class="panel-heading"><h3>接收消息</h3><span class="tiny-tag">{{ messages.length }}</span></div><input v-model="inspectorFilter" placeholder="搜索主题或类型" aria-label="搜索消息"/><button v-for="message in messages" :key="message.messageType" class="topic-item" :class="{ active: selectedTopic === message.messageType }" @click="selectedTopic = message.messageType"><span>{{ message.topic }}</span><small>{{ new Date(message.timestamp).toLocaleTimeString() }}</small></button><p v-if="!messages.length" class="quiet-empty">没有匹配消息</p></section><section class="ref-panel payload-panel"><div class="panel-heading"><div><span class="eyebrow">DECODED PAYLOAD</span><h3>{{ inspected?.topic || '选择一条消息' }}</h3></div><span class="tiny-tag">PROTOBUF V3</span></div><div class="pipeline-strip">MQTT <span>→</span> Tauri <span>→</span> Worker <span>→</span> Pinia</div><pre>{{ inspected ? formatJson(inspected, null, 2) : '等待解码结果…' }}</pre></section><section class="ref-panel command-editor"><div class="panel-heading"><div><span class="eyebrow">UPLINK</span><h3>指令工作台</h3></div></div><label>官方指令<select v-model="commandTopic" @change="changeCommand"><option v-for="name in Object.keys(COMMAND_LIMITS)" :key="name">{{ name }}</option></select></label><label>参数 JSON<textarea v-model="commandBody" spellcheck="false" rows="12"/></label><p class="muted">只提交人工确认的指令；发送成功不等同于裁判系统执行成功。当前限流 {{ COMMAND_LIMITS[commandTopic] }} Hz。</p><button class="button primary wide" :disabled="!session.commandReady" @click="prepareJsonCommand">检查并确认发送 <Icon name="arrow" :size="15"/></button></section></div>
        </template>
        <template v-else-if="page === 'interfaces'">
          <div class="interface-cards"><section class="ref-panel"><Icon name="signal"/><h3>裁判系统</h3><span class="tiny-tag">MQTT + PROTOBUF</span><p>标准状态与官方交互指令。协议定义独立于电控自定义字段。</p><b>{{ session.mode === 'live' ? session.connection : '未连接实机' }}</b></section><section class="ref-panel"><Icon name="plug"/><h3>电控遥测</h3><span class="tiny-tag">CUSTOM BYTE BLOCK</span><p>官方下行最多 300 字节；当前队伍布局 150 字节。布局、版本和端序必须与电控端一致。</p><b>{{ custom ? '已收到自定义数据' : '接口就绪 · 等待接入' }}</b></section><section class="ref-panel"><Icon name="code"/><h3>电控控制</h3><span class="tiny-tag">CUSTOM CONTROL</span><p>上行最多 30 字节。协议页支持手动发送；未知电控命令不会自动生成。</p><b>等待双方约定字段</b></section></div>
          <section v-if="mqtt.customImages.get(robotId)" class="ref-panel"><h3>自定义数据图片</h3><img :src="mqtt.customImages.get(robotId)" alt="电控 CustomByteBlock 重组图片" style="max-width:100%;max-height:320px;object-fit:contain"/></section><p v-if="mqtt.customParseErrors.get(robotId)" class="inline-error" role="alert">{{ mqtt.customParseErrors.get(robotId) }}</p><div class="two-column"><section class="ref-panel"><div class="panel-heading"><div><span class="eyebrow">TEAM SCHEMA</span><h3>字段布局编辑器</h3></div><select v-model="interfaceName" @change="loadLayout"><option v-for="layout in layouts" :key="layout.name">{{ layout.name }}</option></select></div><p class="muted">默认从仓库 XML 读取。此参考版明确使用小端序；可修改 byteOrder。它不是裁判系统规定的电控内部协议。</p><textarea class="code-editor" v-model="layoutText" spellcheck="false" rows="19" aria-label="电控布局 JSON"/><div class="button-row"><button class="button primary" @click="saveLayout">验证并保存布局</button><button class="button" @click="loadLayout">重新读取</button></div></section><section class="ref-panel"><div class="panel-heading"><div><span class="eyebrow">BYTE INSPECTOR</span><h3>离线字节检查</h3></div><span class="tiny-tag">不发送</span></div><label>CustomByteBlock.data 十六进制<textarea v-model="packetHex" rows="6" spellcheck="false" placeholder="00 00 00 48 41 01 …（按布局补齐 150 字节）"/></label><button class="button" @click="inspectPacket">按当前布局解析</button><div v-if="layoutError" class="inline-error" role="alert">{{ layoutError }}</div><pre class="byte-result">{{ packetResult || (custom ? formatJson(custom, null, 2) : '等待输入字节，或接收电控数据。') }}</pre></section></div>
        </template>
        <template v-else>
          <div class="settings-grid"><section class="ref-panel"><div class="panel-heading"><div><span class="eyebrow">CONNECTION PROFILE</span><h3>裁判系统连接</h3></div><span class="tiny-tag">{{ desktop ? 'DESKTOP' : 'BROWSER' }}</span></div><div class="form-grid"><label>MQTT 主机<input v-model="session.profile.host" :disabled="session.mode === 'live'" placeholder="192.168.12.1"/></label><label>MQTT 端口<input v-model.number="session.profile.port" :disabled="session.mode === 'live'" type="number" min="1" max="65535"/></label><label>机器人 ID / clientID<select v-model.number="session.profile.robotId" :disabled="session.mode !== 'offline'"><option v-for="id in [1,2,3,4,5,6,7,9,101,102,103,104,105,106,107,109]" :key="id" :value="id">{{ id }} · {{ id < 100 ? '红方' : '蓝方' }}</option></select></label><label>状态过期阈值 / ms<input v-model.number="session.profile.staleMs" type="number" min="500" max="30000"/></label></div><p class="muted">官方默认：192.168.12.1:3333；客户端有线地址 192.168.12.2。clientID 使用机器人编号。Mock Server 可改为 127.0.0.1:1883。</p><div class="button-row"><button class="button primary" :disabled="session.busy || session.mode === 'live'" @click="session.connect"><Icon name="link" :size="16"/>连接裁判系统</button><button class="button" :disabled="session.mode === 'offline'" @click="session.disconnect">断开连接</button><button class="button" @click="() => { try { session.saveProfile(); notify('配置已保存') } catch (e) { notify(String(e)) } }">保存配置</button></div><div class="section-rule"/><h3>UDP 图传</h3><div class="form-grid"><label>发送端 IP 过滤<input v-model="session.profile.sourceHost" placeholder="留空接受任意来源"/></label><label>本地监听端口<input v-model.number="session.profile.udpPort" type="number" min="1" max="65535"/></label><label>后端 JPEG 质量<input v-model.number="session.profile.jpegQuality" type="range" min="50" max="95"/><span>{{ session.profile.jpegQuality }} / 100</span></label></div><div class="button-row"><button class="button" :disabled="video.busy.value || video.running.value" @click="video.start">启动视频</button><button class="button" :disabled="!video.running.value" @click="video.stop">停止视频</button></div><p v-if="video.error.value" class="inline-error">{{ video.error.value }}</p></section>
            <div class="settings-side"><section class="ref-panel demo-card"><span class="eyebrow">LEARNING MODE</span><h3>先看见完整的数据链。</h3><p>本地样例先编码成 Protobuf，再经过真实 Worker 和 Store。演示与实机互斥，演示期间关闭网络控制。</p><button class="button primary wide" :disabled="session.busy" @click="session.startDemo"><Icon name="play" :size="16"/>{{ session.mode === 'demo' ? '重新启动本地演示' : '启动本地演示' }}</button></section><section class="ref-panel"><span class="eyebrow">APPEARANCE</span><h3>显示偏好</h3><label>图传缩放<select v-model.number="video.zoom.value"><option :value="1">1.0×</option><option :value="1.5">1.5×</option><option :value="2">2.0×</option></select></label><button class="button wide" :disabled="!video.running.value" @click="video.snapshot">导出当前图传画面</button><label class="toggle-row">图传准星<input v-model="crosshair" type="checkbox"/></label><label class="toggle-row">紧凑布局<input v-model="compact" type="checkbox"/></label><button class="button wide" @click="openWorkspace"><Icon name="edit" :size="15"/>进入完整 HUD 布局工作台</button></section><section class="ref-panel rule-card"><Icon name="shield"/><h3>比赛配置边界</h3><p>协议基准 V1.3.0 / 2026-03-27。正式比赛需使用符合制作规范的 Linux 等开源操作系统、有线接口，并复核赛前增补。</p><p>本版本不启用客户端间直连。Windows 构建用于学习与本地联调。</p><small>{{ downlinkTopics.length }} 个下行订阅主题 · 未接入设备不显示为在线</small></section></div></div>
        </template>
      </main>

        <footer class="ref-footer"><span>RX {{ session.mps }} msg/s</span><span>DECODE ERR {{ session.rejected }}</span><span class="footer-spacer"/><span>CTRL + 1—5 切换菜单页</span><span>ESC 返回视野</span></footer>
      </div>
    <div v-if="confirm" class="ref-modal-backdrop" @click.self="confirm = null"><section class="ref-modal" role="dialog" aria-modal="true" aria-labelledby="command-confirm-title"><span class="eyebrow">CONFIRM COMMAND</span><h2 id="command-confirm-title">{{ confirm.title }}</h2><p>即将向机器人 {{ robotId }} 对应的裁判链路提交以下指令。</p><pre>{{ confirm.topic }}\n{{ formatJson(confirm.payload, null, 2) }}</pre><p class="muted">提交后等待服务器状态回读，不在本地预先改变血量或弹量。</p><div class="button-row"><button class="button" @click="confirm = null">取消</button><button class="button primary" :disabled="!session.commandReady" @click="submitCommand">确认发送</button></div></section></div>

      <div v-if="toast" class="ref-toast" role="status">{{ toast }}</div>
    </dialog>
    <Transition name="toast"><div v-if="toast && !menuOpen" class="ref-toast" role="status">{{ toast }}</div></Transition>
  </div>
</template>

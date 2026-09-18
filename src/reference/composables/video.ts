import { computed, onUnmounted, ref, shallowRef } from 'vue'
import { desktop } from '../platform'
import { useReferenceSession } from '../session'
export function useReferenceVideo() {
  const session = useReferenceSession()
  const url = ref(''); const running = ref(false); const busy = ref(false); const error = ref('')
  const stats = shallowRef<Record<string, number | string | boolean>>({})
  const fps = ref(0); const age = ref(Infinity); const zoom = ref(1)
  let timer: ReturnType<typeof setInterval> | undefined; let polling = false; let generation = 0; let frames = 0; let sampledAt = 0
  const stateLabel = computed(() => !running.value ? '未连接' : age.value > 2000 ? '等待视频帧' : '图传接收中')
  async function poll() {
    if (polling) return
    polling = true; const epoch = generation
    try {
      const status = await window.api.udpStream.getStatus()
      if (epoch !== generation) return
      stats.value = status.stats ?? {}
      const time = Date.now(); const count = Number(stats.value.decodedFrames ?? 0)
      fps.value = sampledAt ? Math.max(0, Math.round((count - frames) * 1000 / (time - sampledAt))) : 0
      sampledAt = time; frames = count
      age.value = stats.value.lastFrameTime ? time - Number(stats.value.lastFrameTime) : Infinity
      if (!status.running) { running.value = false; url.value = ''; error.value = '视频接收已停止'; if (timer) clearInterval(timer) }
    } catch (cause) { error.value = String(cause) } finally { polling = false }
  }
  async function start() {
    if (busy.value) return
    busy.value = true; error.value = ''
    try {
      if (!desktop) throw new Error('UDP H.265 接收需要桌面版；浏览器仅展示界面和遥测演示')
      await stop(); const p = session.profile
      const result = await window.api.udpStream.start({ host: '0.0.0.0', sourceHost: p.sourceHost, port: p.udpPort, bufferSize: 4194304, codec: 'mjpeg', requestedCodec: 'h265', codecDecisionReason: 'reference-backend-decode', jpegQuality: p.jpegQuality })
      if (!result.success || !result.mjpegStreamUrl) throw new Error(result.error || '后端未返回视频流地址')
      url.value = result.mjpegStreamUrl; running.value = true; sampledAt = 0; frames = 0
      timer = setInterval(() => void poll(), 1000); await poll(); session.log(`UDP ${p.udpPort} 已监听，等待 H.265 码流`)
    } catch (cause) { error.value = String(cause); session.log(error.value, 'error') } finally { busy.value = false }
  }
  async function stop() {
    generation++; if (timer) clearInterval(timer); timer = undefined
    const wasRunning = running.value; running.value = false; url.value = ''; fps.value = 0; age.value = Infinity
    if (desktop && wasRunning) await window.api.udpStream.stop()
  }
  async function snapshot() {
    try {
      if (!running.value || age.value > 2000) throw new Error('没有新鲜视频帧可以保存')
      const frame = await window.api.udpStream.getLatestMjpegFrame()
      if (!frame?.image) throw new Error('后端尚无完整视频帧')
      const anchor = document.createElement('a'); anchor.href = `data:image/jpeg;base64,${frame.image}`; anchor.download = `shark-frame-${Date.now()}.jpg`; anchor.click()
      session.log('当前视频帧已导出')
    } catch (cause) { session.log(String(cause), 'error') }
  }
  onUnmounted(() => { void stop() })
  return { url, running, busy, error, stats, fps, age, zoom, stateLabel, start, stop, snapshot }
}

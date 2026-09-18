import { validateCommand } from './commands'
import { useMqttDataStore } from '../store/modules/mqtt_data'
import { showWarning } from '../store/modules/message_service'

/** Legacy HUD actions share the same official command validation and backend policy. */
export async function submitLegacyCommand(topic: string, payload: Record<string, unknown>): Promise<void> {
  try {
    validateCommand(topic, payload)
    const store = useMqttDataStore()
    if (!(await window.api.mqtt.getStatus()).connected || !store.currentRobotId || Date.now() - store.lastDynamicAt > 2000) throw new Error('需要真实 MQTT 连接和新鲜机器人状态')
    if (!window.confirm(`向机器人 ${store.currentRobotId} 提交 ${topic}？\n${JSON.stringify(payload)}\n执行结果以服务器回读为准。`)) return
    const result = await window.api.mqtt.publish({ topic, messageType: topic, payload, qos: 1, retain: false })
    if (!result.success) throw new Error(result.error || '指令提交失败')
  } catch (cause) { showWarning('指令未提交', String(cause)) }
}

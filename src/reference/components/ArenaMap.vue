<script setup lang="ts">
import { computed } from 'vue'
import { useMqttDataStore } from '../../store/modules/mqtt_data'
import { useReferenceSession } from '../session'
const store = useMqttDataStore(); const session = useReferenceSession()
const props = withDefaults(defineProps<{ large?: boolean }>(), { large: false })
const emit = defineEmits<{ select: [point: { x: number; y: number }] }>()
// Default store coordinates are not position observations.
const units = computed(() => session.latest.robot_position && session.robot && Number.isFinite(session.robot.x) && Number.isFinite(session.robot.y) ? [session.robot] : [])
const positionStale = computed(() => session.mode === 'offline' || session.now - (session.latest.robot_position?.timestamp ?? 0) > session.profile.staleMs)
const x = (value: number) => Math.max(14, Math.min(286, 14 + value / 28 * 272))
const y = (value: number) => Math.max(12, Math.min(168, 168 - value / 15 * 156))
function click(event: MouseEvent) {
  if (!props.large) return
  const rect = (event.currentTarget as SVGElement).getBoundingClientRect()
  emit('select', { x: Math.round(Math.max(0, Math.min(28, ((event.clientX - rect.left) / rect.width * 300 - 14) / 272 * 28)) * 100) / 100, y: Math.round(Math.max(0, Math.min(15, (168 - (event.clientY - rect.top) / rect.height * 180) / 156 * 15)) * 100) / 100 })
}
</script>
<template>
  <svg class="arena-map" viewBox="0 0 300 180" role="img" aria-label="机器人位置示意图，坐标范围需与场地标定核对" @click="click">
    <defs><pattern id="arena-grid" width="15" height="15" patternUnits="userSpaceOnUse"><path d="M15 0H0V15" fill="none" stroke="#303a3c" stroke-width=".5"/></pattern></defs>
    <rect x="1" y="1" width="298" height="178" rx="5" fill="#151d20" stroke="#394349"/>
    <rect x="12" y="12" width="276" height="156" fill="url(#arena-grid)"/>
    <path d="M14 12h58v35H45v35H14z M286 168h-58v-35h27V98h31z" fill="#784b491d" stroke="#895e58"/>
    <path d="M286 12h-58v35h27v35h31z M14 168h58v-35H45V98H14z" fill="#4877801d" stroke="#476e77"/>
    <path d="M94 60l31-24 25 28 25-28 31 24-25 30 25 30-31 24-25-28-25 28-31-24 25-30z" fill="#242f33" stroke="#536063"/>
    <path d="M150 12v156" stroke="#617072" stroke-dasharray="3 6" opacity=".35"/>
    <circle cx="150" cy="90" r="17" fill="#1a2225" stroke="#78887b"/>
    <g v-for="unit in units" :key="unit.robotId" :opacity="positionStale ? .35 : 1">
      <circle v-if="unit.robotId === store.currentRobotId" :cx="x(unit.x)" :cy="y(unit.y)" r="13" fill="none" stroke="#c4ec86" stroke-dasharray="2 3"/>
      <circle :cx="x(unit.x)" :cy="y(unit.y)" r="7" :fill="unit.robotId === store.currentRobotId ? '#c4ec86' : unit.team === 'red' ? '#d37c73' : '#7aaac1'"/>
      <text :x="x(unit.x)" :y="y(unit.y)+3" text-anchor="middle" font-size="8" fill="#10191b" font-weight="700">{{ unit.robotId % 100 }}</text>
    </g>
    <text x="20" y="25" font-size="6" fill="#a0807b">RED</text><text x="259" y="25" font-size="6" fill="#7c9ba5">BLUE</text>
    <text x="150" y="175" text-anchor="middle" font-size="5" fill="#667477">SCHEMATIC · 校准后用于定位</text>
  </svg>
</template>

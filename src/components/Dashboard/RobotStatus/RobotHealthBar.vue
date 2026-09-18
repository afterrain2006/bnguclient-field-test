<template>
  <div
    class="health-bar-wrapper"
    :class="{ stale: status === 'stale', missing: status === 'missing' }"
    :aria-label="healthAriaLabel"
  >
    <!-- 梯形背景容器 -->
    <div class="health-bar-container">
      <!-- 进度条 -->
      <div
        class="health-fill"
        :style="{ width: healthPercent + '%' }"
        :class="{
          critical: status === 'fresh' && healthPercent < 30,
          warning: status === 'fresh' && healthPercent < 50 && healthPercent >= 30
        }"
      ></div>

      <!-- 装饰线 -->
      <div class="health-deco-line"></div>
    </div>

    <!-- 数值显示 (绝对定位，不倾斜) -->
    <div class="health-text">{{ healthText }}</div>
    <div v-if="status !== 'fresh'" class="health-state">
      {{ status === 'missing' ? '等待血量' : '数据已过期' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DataFreshness } from '../../../composables/useFreshnessClock'

interface Props {
  currentHealth: number | null
  maxHealth: number | null
  status?: DataFreshness
}

const props = withDefaults(defineProps<Props>(), {
  status: 'missing'
})

const healthPercent = computed(() => {
  if (props.currentHealth === null || props.maxHealth === null || props.maxHealth <= 0) return 0
  return Math.min(100, Math.max(0, Math.round((props.currentHealth / props.maxHealth) * 100)))
})

const healthText = computed(() => {
  if (props.status === 'missing' || props.currentHealth === null) return '— / —'
  return `${props.currentHealth} / ${props.maxHealth ?? '—'}`
})

const healthAriaLabel = computed(() => {
  if (props.status === 'missing') return '等待血量数据'
  const value = `当前血量 ${props.currentHealth}，最大血量 ${props.maxHealth ?? '未知'}`
  return props.status === 'stale' ? `${value}，数据已过期` : value
})
</script>

<style scoped>
.health-bar-wrapper {
  position: relative;
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
}

.health-bar-wrapper.stale .health-fill {
  filter: grayscale(1);
  opacity: 0.45;
}

.health-bar-wrapper.missing .health-fill {
  width: 0 !important;
}

.health-bar-container {
  width: 100%;
  height: 100%;
  transform: skewX(-15deg);
  background: rgba(0, 0, 0, 0.7);
  /* 无边框设计 */
  overflow: hidden;
  position: relative;
}

/* 顶部高光线 */
.health-bar-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  z-index: 2;
}

.health-fill {
  height: 100%;
  background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: width 0.3s ease-out;
  position: relative;
}

/* 填充条右侧发光边缘 */
.health-fill::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #60a5fa;
  box-shadow:
    0 0 10px #3b82f6,
    0 0 20px #3b82f6;
}

/* 警告色 (黄色) */
.health-fill.warning {
  background: linear-gradient(180deg, #f59e0b 0%, #b45309 100%);
}

.health-fill.warning::after {
  background: #fbbf24;
  box-shadow:
    0 0 10px #f59e0b,
    0 0 20px #f59e0b;
}

/* 危险色 (红色) */
.health-fill.critical {
  background: linear-gradient(180deg, #ef4444 0%, #991b1b 100%);
}

.health-fill.critical::after {
  background: #f87171;
  box-shadow:
    0 0 10px #ef4444,
    0 0 20px #ef4444;
}

.health-deco-line {
  display: none; /* 隐藏装饰线 */
}

.health-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Orbitron', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  letter-spacing: 2px;
  z-index: 10;
  pointer-events: none;
}

.health-state {
  position: absolute;
  right: 7px;
  bottom: 2px;
  z-index: 11;
  color: #cbd5e1;
  font-size: 9px;
  letter-spacing: 0;
  pointer-events: none;
}
</style>

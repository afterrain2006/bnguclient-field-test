import type { ProtoPublisher } from '../mqtt/publisher.js'
import { scheduleAtRate, type RateHandle } from '../scheduler.js'

export const INFANTRY_ROBOT_ID = 3

export interface ScenarioHandle {
  stop(): void
}

type Builder = (elapsedSec: number, sequence: number) => Record<string, unknown>

export function startInfantryDemo(publisher: ProtoPublisher): ScenarioHandle {
  const startedAt = performance.now()
  const timers: RateHandle[] = []

  const schedule = (topic: string, hz: number, build: Builder): void => {
    const publish = (sequence: number): void => {
      const elapsedSec = (performance.now() - startedAt) / 1000
      void publisher.publish(topic, build(elapsedSec, sequence)).catch((error) => {
        console.error(`[MQTT] Failed to publish ${topic}:`, error)
      })
    }
    timers.push(scheduleAtRate(hz, publish))
  }

  schedule('GameStatus', 10, (t) => {
    const cycle = t % 180
    const currentStage = cycle < 10 ? 1 : cycle < 15 ? 3 : 4
    const stageElapsedSec = Math.max(0, Math.floor(cycle - (currentStage === 1 ? 0 : currentStage === 3 ? 10 : 15)))
    const stageCountdownSec = currentStage === 1 ? Math.ceil(10 - cycle) : currentStage === 3 ? Math.ceil(15 - cycle) : Math.max(0, 165 - Math.floor(cycle))
    return {
      currentRound: 1,
      totalRounds: 3,
      redScore: Math.floor(Math.max(0, cycle - 15) / 10),
      blueScore: Math.floor(Math.max(0, cycle - 15) / 14),
      currentStage,
      stageCountdownSec,
      stageElapsedSec,
      isPaused: false
    }
  })

  schedule('RobotStaticStatus', 1, () => ({
    connectionState: 1,
    fieldState: 1,
    aliveState: 1,
    robotId: INFANTRY_ROBOT_ID,
    robotType: 3,
    performanceSystemShooter: 1,
    performanceSystemChassis: 1,
    level: 1,
    maxHealth: 400,
    maxHeat: 200,
    heatCooldownRate: 20,
    maxPower: 80,
    maxBufferEnergy: 60,
    maxChassisEnergy: 100
  }))

  schedule('RobotDynamicStatus', 10, (t) => {
    const healthCycle = t % 24
    const currentHealth = healthCycle < 6 ? 400 : healthCycle < 12 ? 380 : healthCycle < 18 ? 350 : 400
    return {
      currentHealth,
      currentHeat: 35 + 30 * (0.5 + 0.5 * Math.sin(t * 1.4)),
      lastProjectileFireRate: 8 + 3 * Math.sin(t),
      currentChassisEnergy: Math.round(70 + 20 * Math.sin(t * 0.4)),
      currentBufferEnergy: Math.round(35 + 15 * Math.cos(t * 0.7)),
      currentExperience: Math.floor(t) % 100,
      experienceForUpgrade: 100,
      totalProjectilesFired: Math.floor(t * 3),
      remainingAmmo: Math.max(0, 500 - (Math.floor(t * 3) % 120)),
      isOutOfCombat: false,
      outOfCombatCountdown: 0,
      canRemoteHeal: true,
      canRemoteAmmo: true
    }
  })

  schedule('RobotPosition', 20, (t) => ({
    x: 5 * Math.sin(t * 0.22),
    y: 3 * Math.cos(t * 0.22),
    z: 0,
    yaw: (t * 24) % 360,
    robotId: INFANTRY_ROBOT_ID
  }))

  schedule('Buff', 5, (t) => {
    const active = Math.floor(t / 5) % 2 === 0
    return {
      robotId: INFANTRY_ROBOT_ID,
      buffType: active ? 1 : 3,
      buffLevel: active ? 2 : 1,
      buffMaxTime: 10,
      buffLeftTime: 1 + (Math.floor(10 - (t % 10)) % 10)
    }
  })

  schedule('Event', 2, (_t, sequence) => ({
    eventId: sequence % 2 === 0 ? 1 : 16,
    param: JSON.stringify({ source: 'rm2026-mock', sequence, robotId: INFANTRY_ROBOT_ID })
  }))

  return {
    stop: () => timers.splice(0).forEach((timer) => timer.stop())
  }
}

export interface RateHandle {
  stop(): void
}

/**
 * Deadline-based scheduler. setInterval accumulates timer drift on Windows;
 * this scheduler always targets the next absolute deadline and can catch up a
 * small number of overdue ticks without building an unbounded backlog.
 */
export function scheduleAtRate(
  hz: number,
  callback: (sequence: number) => void,
  maxCatchUp = 4
): RateHandle {
  if (!Number.isFinite(hz) || hz <= 0) throw new Error('hz must be positive')
  const intervalMs = 1000 / hz
  const startedAt = performance.now()
  let sequence = 0
  let timer: NodeJS.Timeout | null = null
  let stopped = false

  const pump = (): void => {
    if (stopped) return
    const dueSequence = Math.floor((performance.now() - startedAt) / intervalMs)
    let emitted = 0
    while (sequence <= dueSequence && emitted < maxCatchUp) {
      callback(sequence++)
      emitted += 1
    }

    // If the process was suspended for a long time, skip the stale schedule
    // rather than flooding the receiver. Normal timer drift is caught up.
    if (sequence <= dueSequence) sequence = dueSequence + 1
    const nextDeadline = startedAt + sequence * intervalMs
    timer = setTimeout(pump, Math.max(0, nextDeadline - performance.now()))
  }

  pump()
  return {
    stop: () => {
      stopped = true
      if (timer) clearTimeout(timer)
      timer = null
    }
  }
}

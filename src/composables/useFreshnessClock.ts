import { onScopeDispose, ref } from 'vue'

export type DataFreshness = 'missing' | 'fresh' | 'stale'

/**
 * Reactive wall clock for UI freshness checks.
 * Date.now() alone is not reactive, so a computed value would otherwise stay
 * cached after incoming data stops.
 */
export function useFreshnessClock(intervalMs = 1000) {
  const now = ref(Date.now())
  const timer = window.setInterval(() => {
    now.value = Date.now()
  }, intervalMs)

  onScopeDispose(() => window.clearInterval(timer))

  return now
}

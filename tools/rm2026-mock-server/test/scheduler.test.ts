import assert from 'node:assert/strict'
import test from 'node:test'
import { scheduleAtRate } from '../src/scheduler.js'

test('deadline scheduler stays close to the requested rate', async () => {
  let ticks = 0
  const handle = scheduleAtRate(50, () => { ticks += 1 })
  await new Promise((resolve) => setTimeout(resolve, 510))
  handle.stop()
  assert.ok(ticks >= 24 && ticks <= 28, `expected about 26 ticks, received ${ticks}`)
})

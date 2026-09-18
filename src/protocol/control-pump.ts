export type ControlFrame = Record<string, unknown>
export const NEUTRAL_CONTROL: ControlFrame = { mouseX: 0, mouseY: 0, mouseZ: 0, keyboardValue: 0, leftButtonDown: false, rightButtonDown: false, midButtonDown: false }

/** At most one outstanding submission and one latest frame. Never replay stale motion. */
export class ControlPump {
  private pending: ControlFrame | null = null
  private running = false
  private last = -Infinity
  private generation = 0
  constructor(private publish: (frame: ControlFrame) => Promise<unknown>, private hz = 75) {}
  enqueue(frame: ControlFrame): void {
    const next = { ...frame }
    // Key/button state is replaced; unsent mouse deltas accumulate in this frame only.
    if (this.pending) for (const key of ['mouseX', 'mouseY', 'mouseZ']) next[key] = Math.max(-2147483648, Math.min(2147483647, Number(this.pending[key] ?? 0) + Number(frame[key] ?? 0)))
    this.pending = next
    void this.pump()
  }
  async release(): Promise<void> {
    this.pending = { ...NEUTRAL_CONTROL }
    await this.pump()
    // A running pump owns the neutral frame; callers can await its completion.
    while (this.running) await new Promise(resolve => setTimeout(resolve, 5))
  }
  cancel(): void { this.generation++; this.pending = null }
  private async pump(): Promise<void> {
    if (this.running) return
    this.running = true
    const generation = this.generation
    try {
      while (this.pending && generation === this.generation) {
        const delay = Math.ceil(1000 / this.hz - (performance.now() - this.last))
        if (delay > 0) await new Promise(resolve => setTimeout(resolve, delay))
        if (!this.pending || generation !== this.generation) break
        const frame = this.pending; this.pending = null; this.last = performance.now()
        await this.publish(frame)
      }
    } finally { this.running = false; if (this.pending) void this.pump() }
  }
}

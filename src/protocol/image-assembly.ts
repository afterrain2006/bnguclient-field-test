export interface ImageChunk { cmd_type: number; img_id: number; block_idx: number; total_block: number; data_len: number; data: number[] }
/** Team ImageBlock contract, not an official referee image transport. */
export class ImageAssembler {
  private frames = new Map<number, { total: number; touched: number; chunks: Map<number, Uint8Array> }>()
  accept(block: ImageChunk, now = Date.now()): Uint8Array | null {
    for (const [id, frame] of this.frames) if (now - frame.touched > 10000) this.frames.delete(id)
    if (block.cmd_type === 3) { this.frames.delete(block.img_id); return null }
    if (block.cmd_type !== 2 || !Number.isInteger(block.total_block) || block.total_block < 1 || block.total_block > 4096 || !Number.isInteger(block.block_idx) || block.block_idx < 0 || block.block_idx >= block.total_block || block.data_len !== block.data.length || block.data_len > 120) throw new Error('Invalid image chunk')
    let frame = this.frames.get(block.img_id)
    if (!frame) {
      if (this.frames.size >= 4) this.frames.delete(this.frames.keys().next().value!)
      frame = { total: block.total_block, touched: now, chunks: new Map() }; this.frames.set(block.img_id, frame)
    }
    if (frame.total !== block.total_block) { this.frames.delete(block.img_id); throw new Error('Image chunk count changed mid-frame') }
    frame.touched = now; frame.chunks.set(block.block_idx, Uint8Array.from(block.data))
    if (frame.chunks.size !== frame.total) return null
    const length = Array.from(frame.chunks.values()).reduce((sum, bytes) => sum + bytes.length, 0)
    const result = new Uint8Array(length); let offset = 0
    for (let i = 0; i < frame.total; i++) { const bytes = frame.chunks.get(i)!; result.set(bytes, offset); offset += bytes.length }
    this.frames.delete(block.img_id)
    return result
  }
  clear(): void { this.frames.clear() }
}

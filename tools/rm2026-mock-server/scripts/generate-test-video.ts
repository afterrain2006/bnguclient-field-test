import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { MOCK_ROOT } from '../src/config.js'

const outputPath = path.join(MOCK_ROOT, 'assets', 'test.h265')
const ifMissing = process.argv.includes('--if-missing')
if (ifMissing && fs.existsSync(outputPath) && fs.statSync(outputPath).size > 0) {
  console.log(`[VIDEO] Existing test asset: ${outputPath}`)
  process.exit(0)
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
const ffmpeg = process.env.SHARK_FFMPEG_PATH || 'ffmpeg'
const args = [
  '-hide_banner', '-loglevel', 'warning', '-y',
  '-f', 'lavfi', '-i', 'testsrc2=size=1280x720:rate=30',
  '-t', '10',
  '-an', '-c:v', 'libx265', '-preset', 'ultrafast', '-tune', 'zerolatency',
  '-pix_fmt', 'yuv420p',
  '-x265-params', 'keyint=30:min-keyint=30:scenecut=0:bframes=0:aud=1:repeat-headers=1:pools=4',
  '-f', 'hevc', outputPath
]

console.log(`[VIDEO] Generating copyright-free moving HEVC test pattern: ${outputPath}`)
const child = spawn(ffmpeg, args, { stdio: 'inherit', windowsHide: true })
const exitCode = await new Promise<number>((resolve, reject) => {
  child.once('error', reject)
  child.once('exit', (code) => resolve(code ?? 1))
})
if (exitCode !== 0) throw new Error(`FFmpeg exited with code ${exitCode}`)
console.log(`[VIDEO] Generated ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MiB`)

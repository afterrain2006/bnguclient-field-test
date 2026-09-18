import { decodeCustomByteBlock, layoutFromXml, validateByteLayout, type ByteLayout } from './custom-byte-block'
const files = import.meta.glob('../../resources/CustomByteBlockConfigs/*.xml', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const cache = new Map<string, ByteLayout>()
export function getCustomLayouts(): ByteLayout[] { return Object.keys(files).map(resolveCustomLayout) }
export function resolveCustomLayout(path: string): ByteLayout {
  const name = path.replace(/\\/g, '/').split('/').pop()?.replace(/\.(proto|xml)$/, '') ?? ''
  const override = localStorage.getItem(`shark.reference.layout.${name}`)
  if (override) return validateByteLayout(JSON.parse(override) as ByteLayout)
  if (!cache.has(name)) {
    const file = Object.keys(files).find(key => key.endsWith(`/${name}.xml`))
    if (!file) throw new Error(`No byte layout configured for ${name}`)
    cache.set(name, layoutFromXml(files[file]))
  }
  return cache.get(name)!
}
export function saveCustomLayout(layout: ByteLayout): void {
  validateByteLayout(layout)
  localStorage.setItem(`shark.reference.layout.${layout.name}`, JSON.stringify(layout))
}
export async function parseCustomData(path: string, input: Uint8Array) { return decodeCustomByteBlock(input, resolveCustomLayout(path)) }

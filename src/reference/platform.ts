import { isTauri } from '@tauri-apps/api/core'
import yaml from 'js-yaml'

export const desktop = isTauri()
const resources = import.meta.glob('../../resources/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
export function readLocal<T>(key: string, fallback: T): T {
  try { const value = localStorage.getItem(`shark.reference.${key}`); return value ? JSON.parse(value) as T : fallback } catch { return fallback }
}
export function writeLocal(key: string, value: unknown): void { localStorage.setItem(`shark.reference.${key}`, JSON.stringify(value)) }
function resource(name: string): string {
  const key = Object.keys(resources).find(path => path.endsWith(`/resources/${name}`))
  if (!key) throw new Error(`Bundled resource not found: ${name}`)
  return resources[key]
}
export function installReferencePlatform(): void {
  const api = window.api
  if (!desktop) {
    api.getSetting = async (key: string) => readLocal(`setting.${key}`, null)
    api.saveSetting = async (key: string, value: unknown) => { writeLocal(`setting.${key}`, value); return true }
    api.readYamlConfig = async (name: string) => yaml.load(resource(name))
    api.getRobotConfig = async () => yaml.load(resource('RobotConfig.yaml'))
    api.getRobotTypes = async () => yaml.load(resource('RoboSelect.yaml'))
    api.getRobotConfigByName = async (name: string) => {
      const config = await api.getRobotConfig(); const mapping = config.robotMappings[name]
      return mapping ? { ...mapping, name } : null
    }
  }
  // Previously silent persistence placeholders now use the existing settings API.
  const get = async (key: string, fallback: unknown) => (await api.getSetting(`reference.${key}`)) ?? fallback
  const set = async (key: string, value: unknown) => api.saveSetting(`reference.${key}`, value)
  api.getBoundaryCorners = () => get('boundary', [])
  api.setBoundaryCorners = (corners: unknown) => set('boundary', corners)
  api.getCrosshairPresets = () => get('crosshairs', [])
  api.saveCrosshairPreset = async (preset: { name: string }) => {
    if (!preset?.name) throw new Error('Preset name required')
    const existing = await get('crosshairs', []) as { name: string }[]
    return set('crosshairs', [...existing.filter(p => p.name !== preset.name), preset])
  }
  api.deleteCrosshairPreset = async (name: string) => set('crosshairs', (await get('crosshairs', []) as { name: string }[]).filter(p => p.name !== name))
  api.getCustomDataBlocks = () => get('customDataBlocks', [])
  api.saveCustomDataBlocks = (blocks: unknown) => set('customDataBlocks', blocks)
  api.saveTerrainData = (data: unknown) => set('terrain', data)
  api.loadTerrainData = () => get('terrain', null)
  api.getAppInfo = async () => ({ version: '1.1.0-field-test', name: 'bnguclient', desktop })
  api.sendRobotCommand = async () => { throw new Error('电控适配器未接入；请在设备接口页配置已协商的 CustomControl 布局') }
  api.invokeRobot = api.sendRobotCommand
}

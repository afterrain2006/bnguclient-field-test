/** JSON has no uint64/BigInt primitive; decimal strings preserve all 64 bits. */
export function formatJson(value: unknown, _replacer?: unknown, space?: number): string {
  return JSON.stringify(value, (_key, item) => typeof item === 'bigint' ? item.toString() : item, space)
}

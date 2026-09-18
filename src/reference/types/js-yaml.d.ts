declare module 'js-yaml' {
  const yaml: { load(source: string): unknown; dump(value: unknown): string }
  export default yaml
}

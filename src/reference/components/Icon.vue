<script setup lang="ts">
withDefaults(defineProps<{ name: string; size?: number }>(), { size: 20 })
const paths: Record<string, string> = {
  cockpit: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
  chart: 'M3 3v18h18 M6 14l4-5 4 3 6-8',
  code: 'M8 5l-6 7 6 7 M16 5l6 7-6 7 M14 3l-4 18',
  plug: 'M8 2v5 M16 2v5 M6 7h12v4a6 6 0 0 1-12 0z M12 17v5',
  settings: 'M4 7h16 M4 17h16 M8 4v6 M16 14v6',
  play: 'M7 3l14 9-14 9z', stop: 'M5 5h14v14H5z',
  link: 'M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2 M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  download: 'M12 3v12 M7 10l5 5 5-5 M4 15v6h16v-6',
  focus: 'M8 3H3v5 M16 3h5v5 M3 16v5h5 M21 16v5h-5 M8 12h8 M12 8v8',
  camera: 'M3 7h4l2-3h6l2 3h4v14H3z M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
  chevron: 'M9 5l7 7-7 7', shield: 'M12 2l9 4v6c0 5-9 10-9 10S3 17 3 12V6z M8 12l3 3 5-6',
  edit: 'M4 16l12-12 4 4L8 20H4z M14 6l4 4', close: 'M5 5l14 14 M19 5L5 19',
  signal: 'M3 20v-4 M9 20v-8 M15 20V8 M21 20V3', clock: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M12 6v6l4 2',
  refresh: 'M20 7v5h-5 M4 17v-5h5 M6 6a8 8 0 0 1 14 6 M18 18a8 8 0 0 1-14-6'
}
</script>
<template><svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[name] || paths.cockpit" /></svg></template>

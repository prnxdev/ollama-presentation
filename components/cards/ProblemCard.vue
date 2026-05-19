<template>
  <div class="rounded-xl p-6 backdrop-blur-md border" :class="[colors[color].border, colors[color].bg]">
    <slot />
    <div class="font-bold text-lg">{{ title }}</div>
    <div class="text-gray-400 text-sm mt-2">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
type Color = 'red' | 'yellow' | 'blue'

withDefaults(defineProps<{
  color?: Color
  title: string
  description: string
}>(), { color: 'red' })

const colors: Record<Color, { border: string; bg: string }> = {
  red:    { border: 'border-red-500/40',    bg: 'bg-red-950/30'    },
  yellow: { border: 'border-yellow-500/40', bg: 'bg-yellow-950/30' },
  blue:   { border: 'border-blue-500/40',   bg: 'bg-blue-950/30'   },
}
</script>

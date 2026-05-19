<template>
  <div class="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-colors backdrop-blur-md">
    <slot />
    <span class="text-sm text-gray-300">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()
</script>

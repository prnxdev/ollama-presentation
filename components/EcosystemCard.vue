<template>
  <div
    class="flex gap-4 items-start border rounded-xl p-4 transition-colors backdrop-blur-md"
    :class="[borderClass, bgClass]"
  >
    <slot name="icon" />
    <div class="flex-1">
      <div class="font-bold text-base mb-1 flex items-center gap-2">
        {{ title }}
        <span v-if="badge" class="text-[10px] bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded px-1.5 py-0.5">{{ badge }}</span>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="text-gray-400 text-xs leading-relaxed" v-html="description" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  badge: String,
  borderClass: { type: String, default: 'border-white/10' },
  bgClass:     { type: String, default: 'bg-white/3' },
})
</script>

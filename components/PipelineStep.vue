<template>
  <div class="flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border backdrop-blur-md text-center" :class="cardClass">
    <div class="text-4xl">{{ emoji }}</div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="font-bold text-sm" v-html="title" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="text-[11px] text-gray-400 leading-relaxed" v-html="description" />
    <div class="mt-auto text-[9px] rounded-lg px-2 py-1 w-full" :class="badgeClass">{{ badge }}</div>
  </div>
</template>

<script setup>
defineProps({
  emoji: String,
  title: String,
  description: String,
  badge: String,
  cardClass:  { type: String, default: 'border-white/10 bg-white/3' },
  badgeClass: String,
})
</script>

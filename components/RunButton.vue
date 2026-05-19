<template>
  <button
    @click="$emit('click')"
    :disabled="loading || disabled"
    class="flex items-center gap-2 rounded-xl text-white font-semibold py-2 px-8 cursor-pointer transition-all hover:opacity-85 hover:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed border-none"
    :class="gradient"
  >
    <mdi-loading v-if="loading" class="animate-spin" />
    <mdi-play v-else />
    <slot />
  </button>
</template>

<script setup>
defineProps({
  loading: Boolean,
  disabled: Boolean,
  gradient: { type: String, default: 'bg-gradient-to-br from-violet-600 to-indigo-600 text-sm' },
})
defineEmits(['click'])
</script>

<template>
  <div v-if="message" class="flex items-center gap-2 bg-red-500/8 border border-red-500/30 rounded-lg px-3 py-2 text-[10px] text-red-300 backdrop-blur-md">
    <mdi-alert-circle class="text-red-400 flex-shrink-0" />
    <span>{{ message }}</span>
  </div>
</template>

<script setup>
defineProps({ message: String })
</script>

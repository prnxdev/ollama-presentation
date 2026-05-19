<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-12"
        style="background: rgba(0,0,0,0.85); backdrop-filter: blur(6px);"
        @click.self="$emit('update:modelValue', false)"
      >
        <div class="bg-gray-900 border border-emerald-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
          <div class="flex items-center gap-2 mb-6">
            <slot name="header" />
            <button @click="$emit('update:modelValue', false)" class="ml-auto bg-transparent border-none cursor-pointer text-gray-500 hover:text-white transition-colors p-0">
              <mdi-fullscreen-exit class="text-lg" />
            </button>
          </div>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({ modelValue: Boolean })
defineEmits(['update:modelValue'])
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

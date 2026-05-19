<template>
  <canvas ref="canvas" />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import QRCode from 'qrcode'

const props = defineProps({
  url: { type: String, required: true },
  size: { type: Number, default: 180 },
})

const canvas = ref(null)

async function render() {
  if (!canvas.value) return
  await QRCode.toCanvas(canvas.value, props.url, {
    width: props.size,
    margin: 2,
    color: { dark: '#ffffff', light: '#00000000' },
  })
}

onMounted(render)
watch(() => props.url, render)
</script>

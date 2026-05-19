<template>
  <div class="grid grid-cols-2 gap-4 h-[340px]">

    <!-- Left: controls -->
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-1 text-gray-500 text-[10px]">
        <mdi-medical-bag class="text-red-400" /> Przykładowe pytania
      </div>
      <div class="flex flex-col gap-1">
        <button
          v-for="q in examples"
          :key="q"
          class="bg-white/4 border border-white/10 rounded-md text-gray-300 text-[10px] px-2 py-1 text-left cursor-pointer transition-all hover:bg-red-400/10 hover:border-red-400/40 backdrop-blur-md"
          @click="inputText = q"
        >{{ q }}</button>
      </div>

      <textarea
        v-model="inputText"
        class="bg-white/5 border border-white/10 rounded-lg text-white px-3 py-2 text-xs resize-none outline-none font-sans focus:border-red-400/60 transition-colors backdrop-blur-md"
        placeholder="Zadaj pytanie medyczne..."
        rows="3"
      />

      <button
        @click="ask"
        :disabled="loading || !inputText.trim()"
        class="flex items-center justify-center gap-2 bg-gradient-to-br from-red-600 to-rose-900 border-none rounded-lg text-white text-xs font-semibold py-2 px-4 cursor-pointer transition-all hover:opacity-85 hover:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <mdi-play v-if="!loading" />
        <mdi-loading v-else class="animate-spin" />
        {{ loading ? 'Analizuję...' : 'Zapytaj Medgemma' }}
      </button>

      <div v-if="output" class="bg-emerald-500/8 border border-emerald-500/25 rounded-lg px-3 py-2 overflow-y-auto max-h-[120px] backdrop-blur-md">
        <div class="flex items-center gap-1 text-gray-500 text-[10px] mb-1">
          <mdi-check-circle class="text-green-400" /> Odpowiedź
        </div>
        <div class="markdown-output" v-html="parsedOutput" />
      </div>

      <div v-if="error" class="flex items-center gap-2 bg-red-500/8 border border-red-500/30 rounded-lg px-3 py-2 text-[10px] text-red-300 backdrop-blur-md">
        <mdi-alert-circle class="text-red-400 flex-shrink-0" />
        <span>{{ error }}</span>
      </div>
    </div>

    <!-- Right: code -->
    <div class="bg-black/45 border border-white/8 rounded-xl p-3 overflow-y-auto backdrop-blur-md">
      <div class="flex items-center gap-1 text-gray-500 text-[10px] mb-2">
        <mdi-code-braces class="text-red-400" /> ollama SDK
      </div>
      <pre class="font-mono text-[11px] leading-relaxed m-0 whitespace-pre-wrap break-words"><span class="text-blue-300">import</span> ollama <span class="text-blue-300">from</span> <span class="text-green-300">'ollama'</span>

<span class="text-blue-300">const</span> response = <span class="text-yellow-200">await</span> ollama.<span class="text-sky-300">chat</span>({
  model: <span class="text-green-300">'medgemma'</span>,
  messages: [
    {
      role: <span class="text-green-300">'system'</span>,
      content: <span class="text-green-300">'You are a medical AI assistant.
Answer based on clinical evidence.
Always recommend consulting a doctor.'</span>
    },
    {
      role: <span class="text-green-300">'user'</span>,
      content: <span class="text-green-300">'<span class="text-orange-300">{{ inputText || "Pytanie medyczne..." }}</span>'</span>
    }
  ]
})

<span class="text-gray-500">// response.message.content:</span>
<span class="text-green-300">"<span class="text-orange-300">{{ truncated }}</span>"</span></pre>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { marked } from 'marked'

const inputText = ref('')
const output = ref('')
const error = ref('')
const loading = ref(false)

const examples = [
  'Jakie są objawy cukrzycy typu 2?',
  'Częste skutki uboczne ibuprofenu?',
  'Jaka jest różnica między MRI a tomografią komputerową?',
]

const parsedOutput = computed(() => marked.parse(output.value || ''))

const truncated = computed(() => {
  if (!output.value) return '...'
  return output.value.length > 60 ? output.value.slice(0, 60) + '...' : output.value
})

async function ask() {
  if (!inputText.value.trim()) return
  loading.value = true
  output.value = ''
  error.value = ''

  try {
    const res = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'medgemma',
        stream: false,
        messages: [
          {
            role: 'system',
            content: 'You are a medical AI assistant. Answer based on clinical evidence. Always recommend consulting a doctor.'
          },
          {
            role: 'user',
            content: inputText.value
          }
        ]
      })
    })

    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    output.value = data.message?.content ?? ''
  } catch (e) {
    error.value = e.message.includes('fetch')
      ? 'Nie można połączyć z Ollama. Czy serwer działa na localhost:11434?'
      : e.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.markdown-output {
  font-size: 11px;
  line-height: 1.6;
  color: white;
}
.markdown-output :deep(p) { margin: 0 0 4px; }
.markdown-output :deep(ul), .markdown-output :deep(ol) { margin: 2px 0; padding-left: 16px; }
.markdown-output :deep(li) { margin: 1px 0; }
.markdown-output :deep(strong) { color: #e2e8f0; font-weight: 600; }
.markdown-output :deep(em) { color: #cbd5e1; }
.markdown-output :deep(code) { background: rgba(255,255,255,0.1); border-radius: 3px; padding: 1px 4px; font-size: 10px; }
.markdown-output :deep(h1), .markdown-output :deep(h2), .markdown-output :deep(h3) { font-size: 12px; font-weight: 600; margin: 4px 0 2px; color: #a7f3d0; }
</style>

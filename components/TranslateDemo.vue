<template>
  <div class="grid grid-cols-2 gap-4 h-[340px]">

    <!-- Left: controls -->
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center">
        <select v-model="fromLang" class="flex-1 bg-white/5 border border-white/10 rounded-md text-white px-2 py-1 text-xs outline-none focus:border-purple-400/60 backdrop-blur-md">
          <option value="Polish">Polski</option>
          <option value="English">English</option>
          <option value="German">Deutsch</option>
          <option value="French">Français</option>
        </select>
        <mdi-arrow-right class="text-gray-400 text-base flex-shrink-0" />
        <select v-model="toLang" class="flex-1 bg-white/5 border border-white/10 rounded-md text-white px-2 py-1 text-xs outline-none focus:border-purple-400/60 backdrop-blur-md">
          <option value="English">English</option>
          <option value="Polish">Polski</option>
          <option value="German">Deutsch</option>
          <option value="French">Français</option>
          <option value="Spanish">Español</option>
        </select>
      </div>

      <textarea
        v-model="inputText"
        class="bg-white/5 border border-white/10 rounded-lg text-white px-3 py-2 text-xs resize-none outline-none font-sans focus:border-purple-400/60 transition-colors backdrop-blur-md"
        placeholder="Wpisz tekst do przetłumaczenia..."
        rows="3"
      />

      <button
        @click="translate"
        :disabled="loading || !inputText.trim()"
        class="flex items-center justify-center gap-2 bg-gradient-to-br from-violet-600 to-indigo-600 border-none rounded-lg text-white text-xs font-semibold py-2 px-4 cursor-pointer transition-all hover:opacity-85 hover:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <mdi-play v-if="!loading" />
        <mdi-loading v-else class="animate-spin" />
        {{ loading ? 'Tłumaczę...' : 'Uruchom' }}
      </button>

      <div v-if="output" class="bg-emerald-500/8 border border-emerald-500/25 rounded-lg px-3 py-2 flex-1 overflow-y-auto backdrop-blur-md">
        <div class="flex items-center gap-1 text-gray-500 text-[10px] mb-1">
          <mdi-check-circle class="text-green-400" /> Wynik
        </div>
        <div class="text-white text-xs leading-relaxed">{{ output }}</div>
      </div>

      <div v-if="error" class="flex items-center gap-2 bg-red-500/8 border border-red-500/30 rounded-lg px-3 py-2 text-[10px] text-red-300 backdrop-blur-md">
        <mdi-alert-circle class="text-red-400 flex-shrink-0" />
        <span>{{ error }}</span>
      </div>
    </div>

    <!-- Right: code -->
    <div class="bg-black/45 border border-white/8 rounded-xl p-3 overflow-y-auto backdrop-blur-md">
      <div class="flex items-center gap-1 text-gray-500 text-[10px] mb-2">
        <mdi-code-braces class="text-purple-400" /> ollama SDK
      </div>
      <pre class="font-mono text-[11px] leading-relaxed m-0 whitespace-pre-wrap break-words"><span class="text-blue-300">import</span> ollama <span class="text-blue-300">from</span> <span class="text-green-300">'ollama'</span>

<span class="text-blue-300">const</span> response = <span class="text-yellow-200">await</span> ollama.<span class="text-sky-300">chat</span>({
  model: <span class="text-green-300">'translategemma'</span>,
  messages: [{
    role: <span class="text-green-300">'user'</span>,
    content: <span class="text-green-300">`Translate from <span class="text-orange-300">{{ fromLang }}</span>
to <span class="text-orange-300">{{ toLang }}</span>:

<span class="text-orange-300">{{ inputText || 'Twój tekst tutaj...' }}</span>`</span>
  }]
})

<span class="text-gray-500">// response.message.content:</span>
<span class="text-green-300">"<span class="text-orange-300">{{ output || '...' }}</span>"</span></pre>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const fromLang = ref('Polish')
const toLang = ref('English')
const inputText = ref('')
const output = ref('')
const error = ref('')
const loading = ref(false)

async function translate() {
  if (!inputText.value.trim()) return
  loading.value = true
  output.value = ''
  error.value = ''

  try {
    const res = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'translategemma',
        stream: false,
        messages: [{
          role: 'user',
          content: `Translate from ${fromLang.value} to ${toLang.value}. Return only the translation, no explanations:\n\n${inputText.value}`
        }]
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

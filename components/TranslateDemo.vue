<template>
  <div class="flex flex-col gap-3">

    <!-- Big Polish sentence (editable) -->
    <div class="relative group">
      <textarea
        v-model="sentence"
        rows="2"
        class="w-full text-center text-xl font-bold text-white leading-snug tracking-tight bg-transparent border border-white/10 group-hover:border-purple-400/40 focus:border-purple-400/60 rounded-xl px-4 py-3 resize-none outline-none transition-colors"
        placeholder="Wpisz zdanie po polsku..."
      />
      <div class="flex items-center justify-center gap-1 mt-1 text-gray-500 text-xs">
        <span>🇵🇱</span><span>Polski — kliknij, aby edytować</span>
        <mdi-pencil class="text-gray-600 text-[10px]" />
      </div>
    </div>

    <!-- Run button -->
    <div class="flex justify-center">
      <button
        @click="translateAll"
        :disabled="loading || !sentence.trim()"
        class="flex items-center gap-2 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl text-white text-sm font-semibold py-2 px-8 cursor-pointer transition-all hover:opacity-85 hover:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed border-none"
      >
        <mdi-loading v-if="loading" class="animate-spin" />
        <mdi-play v-else />
        {{ loading ? 'Tłumaczę...' : 'Uruchom' }}
      </button>
    </div>

    <!-- Results grid -->
    <div class="grid grid-cols-5 gap-2">
      <div
        v-for="lang in languages"
        :key="lang.name"
        class="rounded-xl p-2 border transition-all duration-500 backdrop-blur-md min-h-[72px] flex flex-col gap-1"
        :class="lang.result
          ? 'bg-emerald-500/8 border-emerald-500/30'
          : lang.loading
            ? 'bg-white/5 border-purple-400/40'
            : 'bg-white/3 border-white/8'"
      >
        <div class="flex items-center gap-1 text-[10px] text-gray-400">
          <span>{{ lang.flag }}</span>
          <span>{{ lang.name }}</span>
          <mdi-loading v-if="lang.loading" class="animate-spin ml-auto text-purple-400" />
          <mdi-check-circle v-else-if="lang.result" class="ml-auto text-emerald-400" />
        </div>
        <div class="text-white text-[11px] leading-snug flex-1">
          <span v-if="lang.result">{{ lang.result }}</span>
          <span v-else-if="!lang.loading && !started" class="text-gray-600">—</span>
        </div>
      </div>
    </div>

    <div v-if="error" class="flex items-center gap-2 bg-red-500/8 border border-red-500/30 rounded-lg px-3 py-2 text-[10px] text-red-300">
      <mdi-alert-circle class="text-red-400 flex-shrink-0" />
      <span>{{ error }}</span>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const sentence = ref('Zawodnik strzelił gola w 90. minucie, zapewniając drużynie awans do finału mistrzostw.')

const LANGS = [
  { name: 'English',    flag: '🇬🇧', code: 'English' },
  { name: 'German',     flag: '🇩🇪', code: 'German' },
  { name: 'French',     flag: '🇫🇷', code: 'French' },
  { name: 'Spanish',    flag: '🇪🇸', code: 'Spanish' },
  { name: 'Italian',    flag: '🇮🇹', code: 'Italian' },
  { name: 'Portuguese', flag: '🇵🇹', code: 'Portuguese' },
  { name: 'Japanese',   flag: '🇯🇵', code: 'Japanese' },
  { name: 'Chinese',    flag: '🇨🇳', code: 'Chinese' },
  { name: 'Arabic',     flag: '🇸🇦', code: 'Arabic' },
  { name: 'Russian',    flag: '🇷🇺', code: 'Russian' },
]

const languages = reactive(LANGS.map(l => ({ ...l, result: '', loading: false })))
const loading = ref(false)
const started = ref(false)
const error = ref('')

async function translateOne(lang) {
  lang.loading = true
  lang.result = ''
  try {
    const res = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'translategemma',
        stream: false,
        messages: [{
          role: 'user',
          content: `Translate the following Polish text to ${lang.code}. Return only the translation, no explanations:\n\n${sentence.value}`
        }]
      })
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    lang.result = data.message?.content?.trim() ?? ''
  } catch (e) {
    lang.result = '⚠ błąd'
    if (!error.value) {
      error.value = e.message.includes('fetch')
        ? 'Nie można połączyć z Ollama. Czy serwer działa na localhost:11434?'
        : e.message
    }
  } finally {
    lang.loading = false
  }
}

async function translateAll() {
  if (loading.value || !sentence.value.trim()) return
  loading.value = true
  started.value = true
  error.value = ''
  languages.forEach(l => { l.result = ''; l.loading = false })

  await Promise.all(languages.map(lang => translateOne(lang)))

  loading.value = false
}
</script>

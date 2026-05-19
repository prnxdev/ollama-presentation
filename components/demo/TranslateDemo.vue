<template>
  <div class="flex flex-col gap-3">

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

    <div class="flex justify-center">
      <RunButton :loading="loading" :disabled="!sentence.trim()" @click="translateAll">
        {{ loading ? 'Tłumaczę...' : 'Uruchom' }}
      </RunButton>
    </div>

    <div class="grid grid-cols-5 gap-2">
      <div
        v-for="(lang, i) in languages"
        :key="lang.name"
        class="rounded-xl p-2 border backdrop-blur-md min-h-[72px] flex flex-col gap-1 transition-all duration-300"
        :style="{ transitionDelay: lang.result ? `${i * 40}ms` : '0ms' }"
        :class="lang.result ? 'bg-emerald-500/8 border-emerald-500/30' : 'bg-white/3 border-white/8'"
      >
        <div class="flex items-center gap-1 text-[10px] text-gray-400">
          <span>{{ lang.flag }}</span>
          <span>{{ lang.name }}</span>
          <mdi-check-circle v-if="lang.result" class="ml-auto text-emerald-400" />
        </div>
        <div class="text-white text-[11px] leading-snug flex-1">
          <span v-if="lang.result">{{ lang.result }}</span>
          <span v-else class="text-gray-600">—</span>
        </div>
      </div>
    </div>

    <OllamaError :message="error" />

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'
import { ollama, formatError } from '../../composables/useOllama.ts'

const sentence = ref('Zawodnik strzelił gola w 90. minucie, zapewniając drużynie awans do finału mistrzostw.')

const TranslationsSchema = z.object({
  english:    z.string().default(''),
  german:     z.string().default(''),
  french:     z.string().default(''),
  spanish:    z.string().default(''),
  italian:    z.string().default(''),
  portuguese: z.string().default(''),
  japanese:   z.string().default(''),
  chinese:    z.string().default(''),
  arabic:     z.string().default(''),
  russian:    z.string().default(''),
})

const LANGS = [
  { name: 'English',    flag: '🇬🇧', key: 'english' },
  { name: 'German',     flag: '🇩🇪', key: 'german' },
  { name: 'French',     flag: '🇫🇷', key: 'french' },
  { name: 'Spanish',    flag: '🇪🇸', key: 'spanish' },
  { name: 'Italian',    flag: '🇮🇹', key: 'italian' },
  { name: 'Portuguese', flag: '🇵🇹', key: 'portuguese' },
  { name: 'Japanese',   flag: '🇯🇵', key: 'japanese' },
  { name: 'Chinese',    flag: '🇨🇳', key: 'chinese' },
  { name: 'Arabic',     flag: '🇸🇦', key: 'arabic' },
  { name: 'Russian',    flag: '🇷🇺', key: 'russian' },
]

const languages = reactive(LANGS.map(l => ({ ...l, result: '' })))
const loading = ref(false)
const error = ref('')

async function translateAll() {
  if (loading.value || !sentence.value.trim()) return
  loading.value = true
  error.value = ''
  languages.forEach(l => { l.result = '' })

  try {
    const response = await ollama.chat({
      model: 'translategemma',
      format: z.toJSONSchema(TranslationsSchema),
      messages: [{
        role: 'user',
        content: `Translate the following Polish sentence into all ten languages and return them as a JSON object with keys: english, german, french, spanish, italian, portuguese, japanese, chinese, arabic, russian.\n\nPolish: "${sentence.value}"`,
      }],
    })
    const parsed = TranslationsSchema.parse(JSON.parse(response.message.content))
    languages.forEach(lang => { lang.result = parsed[lang.key] ?? '' })
  } catch (e) {
    error.value = formatError(e)
  } finally {
    loading.value = false
  }
}
</script>

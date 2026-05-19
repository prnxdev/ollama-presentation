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

      <!-- Structured output display -->
      <div v-if="output" class="bg-emerald-500/8 border border-emerald-500/25 rounded-lg px-3 py-2 overflow-y-auto max-h-[80px] backdrop-blur-md flex flex-col gap-1">
        <div class="flex items-center gap-1 text-gray-500 text-[10px] mb-1">
          <mdi-check-circle class="text-green-400" /> Odpowiedź
          <button @click="fullscreen = true" class="ml-auto bg-transparent border-none cursor-pointer text-gray-500 hover:text-white transition-colors p-0">
            <mdi-fullscreen class="text-sm" />
          </button>
        </div>
        <p class="text-white text-[11px] leading-snug">{{ output.summary }}</p>
        <ul class="text-gray-200 text-[10px] leading-relaxed pl-3 list-disc flex flex-col gap-0.5">
          <li v-for="point in output.key_points" :key="point">{{ point }}</li>
        </ul>
        <p class="text-gray-500 text-[9px] italic mt-1">{{ output.disclaimer }}</p>
      </div>

      <!-- Fullscreen overlay -->
      <Teleport to="body">
        <Transition name="fade">
          <div
            v-if="fullscreen && output"
            class="fixed inset-0 z-50 flex items-center justify-center p-12"
            style="background: rgba(0,0,0,0.85); backdrop-filter: blur(6px);"
            @click.self="fullscreen = false"
          >
            <div class="bg-gray-900 border border-emerald-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
              <div class="flex items-center gap-2 mb-4">
                <mdi-check-circle class="text-green-400 text-lg" />
                <span class="text-gray-300 text-sm font-semibold">Odpowiedź</span>
                <button @click="fullscreen = false" class="ml-auto bg-transparent border-none cursor-pointer text-gray-500 hover:text-white transition-colors p-0">
                  <mdi-fullscreen-exit class="text-lg" />
                </button>
              </div>
              <p class="text-white text-lg leading-relaxed mb-4">{{ output.summary }}</p>
              <ul class="text-gray-200 text-base leading-relaxed pl-4 list-disc flex flex-col gap-2 mb-4">
                <li v-for="point in output.key_points" :key="point">{{ point }}</li>
              </ul>
              <p class="text-gray-500 text-sm italic">{{ output.disclaimer }}</p>
            </div>
          </div>
        </Transition>
      </Teleport>

      <div v-if="error" class="flex items-center gap-2 bg-red-500/8 border border-red-500/30 rounded-lg px-3 py-2 text-[10px] text-red-300 backdrop-blur-md">
        <mdi-alert-circle class="text-red-400 flex-shrink-0" />
        <span>{{ error }}</span>
      </div>
    </div>

    <!-- Right: code -->
    <div class="bg-black/45 border border-white/8 rounded-xl p-3 overflow-y-auto backdrop-blur-md">
      <div class="flex items-center gap-1 text-gray-500 text-[10px] mb-2">
        <mdi-code-braces class="text-red-400" /> ollama SDK + Zod
      </div>
      <pre class="font-mono text-[11px] leading-relaxed m-0 whitespace-pre-wrap break-words"><span class="text-blue-300">import</span> { Ollama } <span class="text-blue-300">from</span> <span class="text-green-300">'ollama/browser'</span>
<span class="text-blue-300">import</span> { z } <span class="text-blue-300">from</span> <span class="text-green-300">'zod'</span>

<span class="text-blue-300">const</span> Schema = z.<span class="text-sky-300">object</span>({
  summary:    z.<span class="text-sky-300">string</span>(),
  key_points: z.<span class="text-sky-300">array</span>(z.<span class="text-sky-300">string</span>()),
  disclaimer: z.<span class="text-sky-300">string</span>(),
})

<span class="text-blue-300">const</span> ollama = <span class="text-yellow-200">new</span> <span class="text-sky-300">Ollama</span>()
<span class="text-blue-300">const</span> res = <span class="text-yellow-200">await</span> ollama.<span class="text-sky-300">chat</span>({
  model:  <span class="text-green-300">'medgemma'</span>,
  format: z.<span class="text-sky-300">toJSONSchema</span>(Schema),
  messages: [
    { role: <span class="text-green-300">'system'</span>, content: <span class="text-green-300">'...'</span> },
    { role: <span class="text-green-300">'user'</span>,   content: <span class="text-orange-300">question</span> },
  ],
})

<span class="text-blue-300">const</span> data = Schema.<span class="text-sky-300">parse</span>(
  <span class="text-sky-300">JSON</span>.<span class="text-sky-300">parse</span>(res.message.content)
)
<span class="text-gray-500">// data.summary, data.key_points, data.disclaimer</span></pre>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Ollama } from 'ollama/browser'
import { z } from 'zod'

const MedicalResponseSchema = z.object({
  summary:    z.string().default(''),
  key_points: z.array(z.string()).default([]),
  disclaimer: z.string().default(''),
})

const inputText = ref('')
const output = ref(null)
const error = ref('')
const loading = ref(false)
const fullscreen = ref(false)
const ollama = new Ollama()

const examples = [
  'Jakie są objawy cukrzycy typu 2?',
  'Częste skutki uboczne ibuprofenu?',
  'Jaka jest różnica między MRI a tomografią komputerową?',
]

async function ask() {
  if (!inputText.value.trim()) return
  loading.value = true
  output.value = null
  error.value = ''

  try {
    const response = await ollama.chat({
      model: 'medgemma',
      format: z.toJSONSchema(MedicalResponseSchema),
      messages: [
        {
          role: 'system',
          content: 'You are a medical AI assistant. Answer in Polish. Return a JSON with: summary (1-2 sentences), key_points (3-5 bullet facts), disclaimer (one sentence recommending a doctor).',
        },
        {
          role: 'user',
          content: inputText.value,
        },
      ],
    })

    output.value = MedicalResponseSchema.parse(JSON.parse(response.message.content))
    fullscreen.value = true
  } catch (e) {
    error.value = e.message?.includes('fetch')
      ? 'Nie można połączyć z Ollama. Czy serwer działa na localhost:11434?'
      : e.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

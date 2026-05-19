---
theme: seriph
title: "Więcej niż jedno zwierzę? Ollama"
author: Paweł Miczka
colorSchema: dark
highlighter: shiki
transition: slide-left
aspectRatio: 16/9
canvasWidth: 980
fonts:
  sans: "Space Grotesk"
  mono: "JetBrains Mono"
  provider: google

defaults:
  background: /background.jpg
---

# Więcej niż jedno zwierzę? Ollama

**Paweł Miczka**

---
layout: center
background: /background.jpg
---

<div class="flex items-center justify-center gap-4 mb-6">
  <mdi-incognito class="text-5xl text-purple-400 drop-shadow-lg" />
</div>

<h1 class="text-center text-3xl font-bold leading-snug">
  Ile razy wysłałeś coś do ChatGPT,<br/>
  <span class="text-purple-400">co wolałbyś zachować dla siebie?</span>
</h1>

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
  <IconCard v-click label="Dane klientów"><mdi-briefcase class="text-4xl text-blue-300" /></IconCard>
  <IconCard v-click label="Informacje medyczne"><mdi-hospital-box class="text-4xl text-red-300" /></IconCard>
  <IconCard v-click label="Dane finansowe"><mdi-currency-usd class="text-4xl text-yellow-300" /></IconCard>
  <IconCard v-click label="Kod źródłowy"><mdi-source-branch class="text-4xl text-green-300" /></IconCard>
  <IconCard v-click label="Prywatna korespondencja"><mdi-email-lock class="text-4xl text-orange-300" /></IconCard>
  <IconCard v-click label="Coś jeszcze?"><mdi-dots-horizontal class="text-4xl text-gray-400" /></IconCard>
</div>

---
layout: center
background: /background.jpg
---

<div class="text-center text-5xl mb-12 flex items-center justify-center gap-6">
  <mdi-file-document class="text-gray-300" />
  <mdi-email class="text-gray-300" />
  <mdi-code-braces class="text-gray-300" />
  <mdi-arrow-right class="text-gray-500" />
  <carbon-cloud class="text-blue-400" />
  <mdi-arrow-right class="text-gray-500" />
  <carbon-data-center class="text-purple-400" />
</div>

<div class="grid grid-cols-3 gap-8 text-center">
  <ProblemCard v-click color="red"    title="Prywatność"    description="Twoje dane trafiają na serwery zewnętrznych firm"><mdi-lock-open-variant class="text-4xl text-red-400 mb-3" /></ProblemCard>
  <ProblemCard v-click color="yellow" title="Koszt"         description="Miesięczne subskrypcje na każde narzędzie"><mdi-credit-card class="text-4xl text-yellow-400 mb-3" /></ProblemCard>
  <ProblemCard v-click color="blue"   title="Brak internetu" description="Bez połączenia nie ma AI"><mdi-wifi-off class="text-4xl text-blue-400 mb-3" /></ProblemCard>
</div>

---
layout: center
background: /background.jpg
---

# 🎧 Co gdybyś miał AI we własnej kieszeni?

<div class="grid grid-cols-2 gap-10 mt-10 text-center max-w-3xl mx-auto">

<div v-click class="border border-gray-600/40 rounded-xl p-6 bg-gray-900/50 backdrop-blur-md">
  <carbon-cloud-upload class="text-5xl text-gray-400 mb-4 mx-auto" />
  <div class="font-bold text-lg mb-2">Spotify streaming</div>
  <div class="text-gray-400 text-sm">Muzyka gra — ale serwer wie co słuchasz, kiedy i gdzie</div>
</div>

<div v-click class="border border-green-500/40 rounded-xl p-6 bg-green-950/30 backdrop-blur-md">
  <mdi-download-circle class="text-5xl text-green-400 mb-4 mx-auto" />
  <div class="font-bold text-lg mb-2">Spotify offline</div>
  <div class="text-gray-400 text-sm">Ta sama muzyka — lokalnie, bez danych, bez połączenia</div>
</div>

</div>

<div v-click class="mt-10 text-center text-gray-300 text-lg">
  Ollama to <span class="text-green-400 font-bold">Spotify offline</span> dla AI.<br/>
  Ten sam model — tylko żadne dane nie opuszczają Twojego komputera.
</div>

---
layout: center
background: /background.jpg
---

# Czym jest Ollama?

<div class="text-xl text-gray-300 mt-4 mb-10">
  Narzędzie, które pozwala uruchomić modele AI <span class="text-green-400 font-bold">na Twoim komputerze</span> — jedną komendą.
</div>

<div class="flex items-center justify-center gap-6 text-center">

<div v-click class="flex flex-col items-center justify-center border border-purple-500/40 rounded-xl p-6 bg-purple-950/30 backdrop-blur-md w-44 h-36">
  <mdi-download class="text-4xl text-purple-400 mb-3" />
  <div class="font-bold">Pobierz</div>
  <div class="text-gray-400 text-xs mt-1">model jedną komendą</div>
</div>

<mdi-arrow-right v-click class="text-3xl text-gray-500 flex-shrink-0" />

<div v-click class="flex flex-col items-center justify-center border border-blue-500/40 rounded-xl p-6 bg-blue-950/30 backdrop-blur-md w-44 h-36">
  <mdi-play-circle class="text-4xl text-blue-400 mb-3" />
  <div class="font-bold">Uruchom</div>
  <div class="text-gray-400 text-xs mt-1">zero konfiguracji</div>
</div>

<mdi-arrow-right v-click class="text-3xl text-gray-500 flex-shrink-0" />

<div v-click class="flex flex-col items-center justify-center border border-green-500/40 rounded-xl p-6 bg-green-950/30 backdrop-blur-md w-44 h-36">
  <mdi-chat class="text-4xl text-green-400 mb-3" />
  <div class="font-bold">Rozmawiaj</div>
  <div class="text-gray-400 text-xs mt-1">lokalnie, prywatnie</div>
</div>

</div>

---
background: /background.jpg
zoom: 0.85
---

# <mdi-translate class="text-purple-400" /> Ollama w akcji — tłumaczenie

<TranslateDemo class="mt-3" />

---
background: /background.jpg
zoom: 0.9
---

# <mdi-medical-bag class="text-red-400" /> Ollama w akcji — medgemma

<MedicalDemo class="mt-2" />

---
layout: center
background: /background.jpg
---

<div class="text-center text-gray-400 text-sm tracking-widest uppercase mb-2">
  jeszcze jedna demo — ale tym razem...
</div>

<div class="text-center text-4xl font-bold mb-8">
  🎮 Zagrajmy w grę
</div>

<div class="flex items-center justify-center gap-16">

  <div class="text-left max-w-xs">
    <div class="flex items-center gap-2 mb-4">
      <mdi-pokeball class="text-3xl text-yellow-400" />
      <span class="text-2xl font-bold">WalkiePokie</span>
    </div>
    <p class="text-gray-300 text-sm leading-relaxed mb-3">
      Eksploruj prawdziwy świat, odkrywaj i łap <span class="text-yellow-400 font-semibold">stworzenia napędzane przez AI</span> ukryte wokół ciebie.
    </p>
    <div class="flex flex-col gap-2 text-xs text-gray-400">
      <div class="flex items-center gap-2"><mdi-map-marker class="text-green-400" /> Eksploruj nieznane tereny</div>
      <div class="flex items-center gap-2"><mdi-brain class="text-purple-400" /> Stworzenia napędzane przez lokalny AI</div>
      <div class="flex items-center gap-2"><mdi-shield-lock class="text-blue-400" /> 100% prywatne — działa na Ollama</div>
    </div>
  </div>

  <div class="flex flex-col items-center gap-3">
    <QRCode url="https://google.com" :size="160" />
    <div class="text-gray-500 text-xs">Zeskanuj, aby dowiedzieć się więcej</div>
  </div>

</div>

---
background: /background.jpg
---

# <mdi-puzzle class="text-green-400" /> Ollama w ekosystemie

<div class="grid grid-cols-2 gap-4 mt-4">
  <EcosystemCard v-click title="OpenCode" description="Terminalowy asystent kodowania — działa jak Cursor, ale lokalnie. Analizuje kod, naprawia błędy i pisze testy bez wysyłania kodu na zewnątrz." class="hover:border-green-400/30">
    <template #icon><mdi-code-greater-than class="text-3xl text-green-400 flex-shrink-0 mt-1" /></template>
  </EcosystemCard>
  <EcosystemCard v-click title="Hermes" description="Model od Nous Research zoptymalizowany pod agentów i wywoływanie funkcji. Idealny do budowania autonomicznych pipeline'ów AI działających lokalnie." class="hover:border-purple-400/30">
    <template #icon><mdi-robot class="text-3xl text-purple-400 flex-shrink-0 mt-1" /></template>
  </EcosystemCard>
  <EcosystemCard v-click title="OpenClaw" description="Framework do budowania lokalnych agentów AI. Łączy Ollama z narzędziami, bazami danych i API — tworząc w pełni prywatne systemy agentowe." class="hover:border-orange-400/30">
    <template #icon><span class="text-3xl flex-shrink-0 mt-1">🦀</span></template>
  </EcosystemCard>
  <EcosystemCard v-click title="n8n" description="No-code automatyzacja przepływów pracy z wbudowaną obsługą Ollama. Twórz inteligentne pipeline'y bez pisania kodu — lokalnie i za darmo." class="hover:border-blue-400/30">
    <template #icon><mdi-sitemap class="text-3xl text-blue-400 flex-shrink-0 mt-1" /></template>
  </EcosystemCard>
  <EcosystemCard v-click title="Home Assistant — Assist" badge="integracja natywna" description="Wbudowany asystent głosowy i tekstowy Home Assistant. Po dodaniu integracji <span class='text-teal-300 font-medium'>Ollama</span> z HACS i wybraniu go jako <span class='text-white font-medium'>Conversation Agent</span> — steruj inteligentnym domem komendami głosowymi napędzanymi przez lokalny model AI. Żadne dane nie opuszczają sieci domowej." border-class="border-teal-500/30" bg-class="bg-teal-950/20" class="col-span-2 hover:border-teal-400/50">
    <template #icon><mdi-home-assistant class="text-3xl text-teal-400 flex-shrink-0 mt-1" /></template>
  </EcosystemCard>
</div>

---
layout: center
background: /background.jpg
---

## 🗣️ „Hej, włącz światła w salonie" — co się dzieje?

<div class="flex items-stretch gap-2 mt-6 w-full">
  <PipelineStep emoji="🎤" title="Mówisz" description="Twój głos trafia do<br/>lokalnego mikrofonu" badge="Whisper — zamiana głosu na tekst" card-class="border-white/10 bg-white/3" badge-class="text-blue-300/80 bg-blue-950/30" />
  <div class="flex items-center text-gray-600 flex-shrink-0"><mdi-arrow-right class="text-2xl" /></div>
  <PipelineStep emoji="🏠" title="Home Assistant<br/>odbiera tekst" description="Assist Pipeline<br/>kieruje zapytanie do AI" badge="Assist Pipeline — serce systemu" card-class="border-teal-500/25 bg-teal-950/15" badge-class="text-teal-300/80 bg-teal-950/30" />
  <div class="flex items-center text-gray-600 flex-shrink-0"><mdi-arrow-right class="text-2xl" /></div>
  <PipelineStep emoji="🦙" title="Ollama rozumie<br/>i odpowiada" description="Lokalny model AI<br/>analizuje komendę" badge="Ollama — lokalny LLM, zero chmury" card-class="border-orange-500/25 bg-orange-950/15" badge-class="text-orange-300/80 bg-orange-950/30" />
  <div class="flex items-center text-gray-600 flex-shrink-0"><mdi-arrow-right class="text-2xl" /></div>
  <PipelineStep emoji="💡" title="Dom reaguje,<br/>ty słyszysz" description="Światła się włączają<br/>i słyszysz potwierdzenie" badge="Piper — zamiana tekstu na głos" card-class="border-yellow-500/25 bg-yellow-950/15" badge-class="text-violet-300/80 bg-violet-950/30" />
</div>

<div class="mt-5 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
  <mdi-shield-check class="text-green-400 text-base" />
  Całość działa lokalnie — żadne dane nie opuszczają sieci domowej
</div>

---
background: /background.jpg
---

# <mdi-currency-usd class="text-yellow-400" /> Modele jako produkt

<div class="grid grid-cols-3 gap-4 mt-6">

<div v-click class="flex flex-col gap-2 border border-white/10 rounded-xl p-4 bg-white/3 backdrop-blur-md">
  <mdi-tune class="text-3xl text-violet-400" />
  <div class="font-bold">Fine-tuning</div>
  <div class="text-gray-400 text-xs leading-relaxed">Dostosuj istniejący model do swojej domeny — branży, tonu, języka czy specjalistycznej wiedzy. Twój model, Twoje reguły.</div>
</div>

<div v-click class="flex flex-col gap-2 border border-white/10 rounded-xl p-4 bg-white/3 backdrop-blur-md">
  <mdi-file-document-edit class="text-3xl text-blue-400" />
  <div class="font-bold">Modelfile</div>
  <div class="text-gray-400 text-xs leading-relaxed">Spakuj model z własnym system promptem, parametrami i osobowością. Jeden plik — gotowy do uruchomienia wszędzie tam, gdzie działa Ollama.</div>
</div>

<div v-click class="flex flex-col gap-2 border border-white/10 rounded-xl p-4 bg-white/3 backdrop-blur-md">
  <mdi-store class="text-3xl text-green-400" />
  <div class="font-bold">Ollama Registry</div>
  <div class="text-gray-400 text-xs leading-relaxed">Opublikuj swój model w publicznym lub prywatnym rejestrze. Klienci pobierają jedną komendą — jak Docker Hub, ale dla AI.</div>
</div>

</div>

---
layout: center
background: /background.jpg
---

<div class="text-center">

<div class="text-6xl mb-4">🦙</div>

# Dziękuję za uwagę!

<div class="text-gray-300 text-lg mt-3 mb-8">Mam nadzieję, że Ollama zagości na Waszych komputerach.</div>

<div class="flex justify-center gap-12 text-sm text-gray-400 mb-8">
  <div class="flex flex-col items-center gap-2">
    <mdi-github class="text-2xl text-white" />
    <span>ollama/ollama</span>
  </div>
  <div class="flex flex-col items-center gap-2">
    <mdi-web class="text-2xl text-blue-400" />
    <span>ollama.com</span>
  </div>
  <div class="flex flex-col items-center gap-2">
    <mdi-account class="text-2xl text-purple-400" />
    <span>Paweł Miczka</span>
  </div>
</div>

<div class="flex justify-center gap-4 text-xs text-gray-600">
  <div class="flex items-center gap-1"><mdi-check class="text-green-500" /> Lokalnie</div>
  <div class="flex items-center gap-1"><mdi-check class="text-green-500" /> Prywatnie</div>
  <div class="flex items-center gap-1"><mdi-check class="text-green-500" /> Za darmo</div>
  <div class="flex items-center gap-1"><mdi-check class="text-green-500" /> Bez limitu</div>
</div>

<div class="text-gray-500 text-2xl mt-8">Do zobaczenia! 👋</div>

</div>

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

<div v-click class="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-colors backdrop-blur-md">
  <mdi-briefcase class="text-4xl text-blue-300" />
  <span class="text-sm text-gray-300">Dane klientów</span>
</div>

<div v-click class="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-colors backdrop-blur-md">
  <mdi-hospital-box class="text-4xl text-red-300" />
  <span class="text-sm text-gray-300">Informacje medyczne</span>
</div>

<div v-click class="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-colors backdrop-blur-md">
  <mdi-currency-usd class="text-4xl text-yellow-300" />
  <span class="text-sm text-gray-300">Dane finansowe</span>
</div>

<div v-click class="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-colors backdrop-blur-md">
  <mdi-source-branch class="text-4xl text-green-300" />
  <span class="text-sm text-gray-300">Kod źródłowy</span>
</div>

<div v-click class="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-colors backdrop-blur-md">
  <mdi-email-lock class="text-4xl text-orange-300" />
  <span class="text-sm text-gray-300">Prywatna korespondencja</span>
</div>

<div v-click class="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-colors backdrop-blur-md">
  <mdi-dots-horizontal class="text-4xl text-gray-400" />
  <span class="text-sm text-gray-400">Coś jeszcze?</span>
</div>

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

<div v-click class="border border-red-500/40 rounded-xl p-6 bg-red-950/30 backdrop-blur-md">
  <mdi-lock-open-variant class="text-4xl text-red-400 mb-3" />
  <div class="font-bold text-lg">Prywatność</div>
  <div class="text-gray-400 text-sm mt-2">Twoje dane trafiają na serwery zewnętrznych firm</div>
</div>

<div v-click class="border border-yellow-500/40 rounded-xl p-6 bg-yellow-950/30 backdrop-blur-md">
  <mdi-credit-card class="text-4xl text-yellow-400 mb-3" />
  <div class="font-bold text-lg">Koszt</div>
  <div class="text-gray-400 text-sm mt-2">Miesięczne subskrypcje na każde narzędzie</div>
</div>

<div v-click class="border border-blue-500/40 rounded-xl p-6 bg-blue-950/30 backdrop-blur-md">
  <mdi-wifi-off class="text-4xl text-blue-400 mb-3" />
  <div class="font-bold text-lg">Brak internetu</div>
  <div class="text-gray-400 text-sm mt-2">Bez połączenia nie ma AI</div>
</div>

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

<div v-click class="flex gap-4 items-start border border-white/10 rounded-xl p-4 bg-white/3 hover:border-green-400/30 transition-colors backdrop-blur-md">
  <mdi-code-greater-than class="text-3xl text-green-400 flex-shrink-0 mt-1" />
  <div>
    <div class="font-bold text-base mb-1">OpenCode</div>
    <div class="text-gray-400 text-xs leading-relaxed">Terminalowy asystent kodowania — działa jak Cursor, ale lokalnie. Analizuje kod, naprawia błędy i pisze testy bez wysyłania kodu na zewnątrz.</div>
  </div>
</div>

<div v-click class="flex gap-4 items-start border border-white/10 rounded-xl p-4 bg-white/3 hover:border-purple-400/30 transition-colors backdrop-blur-md">
  <mdi-robot class="text-3xl text-purple-400 flex-shrink-0 mt-1" />
  <div>
    <div class="font-bold text-base mb-1">Hermes</div>
    <div class="text-gray-400 text-xs leading-relaxed">Model od Nous Research zoptymalizowany pod agentów i wywoływanie funkcji. Idealny do budowania autonomicznych pipeline'ów AI działających lokalnie.</div>
  </div>
</div>

<div v-click class="flex gap-4 items-start border border-white/10 rounded-xl p-4 bg-white/3 hover:border-orange-400/30 transition-colors backdrop-blur-md">
  <span class="text-3xl flex-shrink-0 mt-1">🦀</span>
  <div>
    <div class="font-bold text-base mb-1">OpenClaw</div>
    <div class="text-gray-400 text-xs leading-relaxed">Framework do budowania lokalnych agentów AI. Łączy Ollama z narzędziami, bazami danych i API — tworząc w pełni prywatne systemy agentowe.</div>
  </div>
</div>

<div v-click class="flex gap-4 items-start border border-white/10 rounded-xl p-4 bg-white/3 hover:border-blue-400/30 transition-colors backdrop-blur-md">
  <mdi-sitemap class="text-3xl text-blue-400 flex-shrink-0 mt-1" />
  <div>
    <div class="font-bold text-base mb-1">n8n</div>
    <div class="text-gray-400 text-xs leading-relaxed">No-code automatyzacja przepływów pracy z wbudowaną obsługą Ollama. Twórz inteligentne pipeline'y bez pisania kodu — lokalnie i za darmo.</div>
  </div>
</div>

<div v-click class="col-span-2 flex gap-4 items-start border border-teal-500/30 rounded-xl p-4 bg-teal-950/20 hover:border-teal-400/50 transition-colors backdrop-blur-md">
  <mdi-home-assistant class="text-3xl text-teal-400 flex-shrink-0 mt-1" />
  <div class="flex-1">
    <div class="flex items-center gap-2 mb-1">
      <div class="font-bold text-base">Home Assistant — Assist</div>
      <span class="text-[10px] bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded px-1.5 py-0.5">integracja natywna</span>
    </div>
    <div class="text-gray-400 text-xs leading-relaxed">Wbudowany asystent głosowy i tekstowy Home Assistant. Po dodaniu integracji <span class="text-teal-300 font-medium">Ollama</span> z HACS i wybraniu go jako <span class="text-white font-medium">Conversation Agent</span> — steruj inteligentnym domem komendami głosowymi napędzanymi przez lokalny model AI. Żadne dane nie opuszczają sieci domowej.</div>
  </div>
</div>

</div>

---
layout: center
background: /background.jpg
---

## 🗣️ „Hej, włącz światła w salonie" — co się dzieje?

<div class="flex items-stretch gap-2 mt-6 w-full">

  <div class="flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md text-center">
    <div class="text-4xl">🎤</div>
    <div class="font-bold text-sm">Mówisz</div>
    <div class="text-[11px] text-gray-400 leading-relaxed">Twój głos trafia do<br/>lokalnego mikrofonu</div>
    <div class="mt-auto text-[9px] text-blue-300/80 bg-blue-950/30 rounded-lg px-2 py-1 w-full">Whisper — zamiana głosu na tekst</div>
  </div>

  <div class="flex items-center text-gray-600 flex-shrink-0">
    <mdi-arrow-right class="text-2xl" />
  </div>

  <div class="flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border border-teal-500/25 bg-teal-950/15 backdrop-blur-md text-center">
    <div class="text-4xl">🏠</div>
    <div class="font-bold text-sm">Home Assistant<br/>odbiera tekst</div>
    <div class="text-[11px] text-gray-400 leading-relaxed">Assist Pipeline<br/>kieruje zapytanie do AI</div>
    <div class="mt-auto text-[9px] text-teal-300/80 bg-teal-950/30 rounded-lg px-2 py-1 w-full">Assist Pipeline — serce systemu</div>
  </div>

  <div class="flex items-center text-gray-600 flex-shrink-0">
    <mdi-arrow-right class="text-2xl" />
  </div>

  <div class="flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border border-orange-500/25 bg-orange-950/15 backdrop-blur-md text-center">
    <div class="text-4xl">🦙</div>
    <div class="font-bold text-sm">Ollama rozumie<br/>i odpowiada</div>
    <div class="text-[11px] text-gray-400 leading-relaxed">Lokalny model AI<br/>analizuje komendę</div>
    <div class="mt-auto text-[9px] text-orange-300/80 bg-orange-950/30 rounded-lg px-2 py-1 w-full">Ollama — lokalny LLM, zero chmury</div>
  </div>

  <div class="flex items-center text-gray-600 flex-shrink-0">
    <mdi-arrow-right class="text-2xl" />
  </div>

  <div class="flex-1 flex flex-col items-center gap-3 p-4 rounded-2xl border border-yellow-500/25 bg-yellow-950/15 backdrop-blur-md text-center">
    <div class="text-4xl">💡</div>
    <div class="font-bold text-sm">Dom reaguje,<br/>ty słyszysz</div>
    <div class="text-[11px] text-gray-400 leading-relaxed">Światła się włączają<br/>i słyszysz potwierdzenie</div>
    <div class="mt-auto text-[9px] text-violet-300/80 bg-violet-950/30 rounded-lg px-2 py-1 w-full">Piper — zamiana tekstu na głos</div>
  </div>

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

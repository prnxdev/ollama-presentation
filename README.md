# 🦙 Więcej niż jedno zwierzę? Ollama

> Prezentacja Slidev o uruchamianiu modeli AI lokalnie — prywatnie, za darmo, bez internetu.

**Autor:** Paweł Miczka

---

## Uruchomienie

```bash
npm install
npm run dev       # http://localhost:3030
```

```bash
npm run build     # statyczna strona → dist/
npm run export    # eksport do PDF (wymaga playwright-chromium)
```

---

## Wymagania dla demo

Slajdy zawierają dwa live demo korzystające z lokalnego Ollama (`localhost:11434`).

```bash
# zainstaluj Ollama → https://ollama.com
ollama pull translategemma   # demo tłumaczenia
ollama pull medgemma         # demo medyczne
```

---

## Struktura slajdów

| # | Slajd | Opis |
|---|-------|------|
| 1 | **Tytuł** | Więcej niż jedno zwierzę? Ollama |
| 2 | **Problem prywatności** | Co wysyłamy do ChatGPT? |
| 3 | **Problem z chmurą** | Prywatność, koszt, brak internetu |
| 4 | **Analogia Spotify** | Streaming vs offline — AI w kieszeni |
| 5 | **Czym jest Ollama?** | Pobierz → Uruchom → Rozmawiaj |
| 6 | **Demo: tłumaczenie** | Jedno zdanie → 10 języków jednocześnie |
| 7 | **Demo: medgemma** | Pytania medyczne ze strukturyzowaną odpowiedzią |
| 8 | **Zagrajmy w grę** | WalkiePokie — lokalne AI w terenie |
| 9 | **Ekosystem** | OpenCode, Hermes, n8n, Home Assistant |
| 10 | **HA Assist** | Architektura: Whisper → Ollama → Piper |
| 11 | **Modele jako produkt** | Fine-tuning, Modelfile, Ollama Registry |
| 12 | **Dziękuję** | Linki, kontakt |

---

## Stack techniczny

| Warstwa | Technologia |
|---------|-------------|
| Slajdy | [Slidev](https://sli.dev) v52 · temat `seriph` (dark) |
| Fonty | Space Grotesk (sans) · JetBrains Mono (mono) |
| AI runtime | [Ollama](https://ollama.com) `localhost:11434` |
| SDK | [`ollama/browser`](https://github.com/ollama/ollama-js) |
| Schematy | [Zod v4](https://zod.dev) · `z.toJSONSchema()` → structured outputs |
| Ikony | `@iconify-json/mdi` · `@iconify-json/carbon` |

---

## Struktura projektu

```
slides.md               # główny plik prezentacji
style.css               # globalne style
components/
  cards/                # karty reużywalne w slajdach
  demo/                 # komponenty live demo (TranslateDemo, MedicalDemo)
  ui/                   # prymitywy UI (RunButton, OllamaError, FullscreenOverlay)
utils/
  ollama.ts             # singleton klienta Ollama + formatError()
public/
  background.jpg        # tło slajdów
```

---

## Demo — jak to działa

### Tłumaczenie (`translategemma`)
Wpisz dowolne zdanie po polsku (domyślnie sportowe), kliknij **Uruchom** — jeden ustrukturyzowany request do Ollama zwraca tłumaczenia na 10 języków jednocześnie.

### Medyczne (`medgemma`)
Wybierz lub wpisz pytanie medyczne, kliknij **Zapytaj Medgemma** — odpowiedź wraca jako `{ summary, key_points[], disclaimer }` i automatycznie otwiera się w trybie pełnoekranowym.

Oba demo używają **Zod structured outputs** (`format: z.toJSONSchema(Schema)`) — model jest ograniczony do zwracania poprawnego JSON.

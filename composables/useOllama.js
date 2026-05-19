import { Ollama } from 'ollama/browser'

export const ollama = new Ollama()

export function formatError(e) {
  return e.message?.includes('fetch')
    ? 'Nie można połączyć z Ollama. Czy serwer działa na localhost:11434?'
    : e.message
}

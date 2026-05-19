import { Ollama } from 'ollama/browser'

export const ollama = new Ollama()

export function formatError(e: unknown): string {
  const msg = (e as Error).message
  return msg?.includes('fetch')
    ? 'Nie można połączyć z Ollama. Czy serwer działa na localhost:11434?'
    : msg
}

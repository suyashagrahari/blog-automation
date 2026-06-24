import type { Provider } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Curated model catalogs per provider. These are the API model IDs (not display
// names). Model IDs drift over time, so each provider also accepts a free-text
// "custom model" entry in the UI — this list is just the convenient default set.
// ─────────────────────────────────────────────────────────────────────────────

export interface ModelOption {
  id: string;
  label: string;
  /** rough hint shown in the UI */
  note?: string;
}

export const PROVIDER_LABELS: Record<Provider, string> = {
  openai: "OpenAI (ChatGPT)",
  gemini: "Google Gemini",
  anthropic: "Anthropic (Claude)",
};

export const MODELS: Record<Provider, ModelOption[]> = {
  openai: [
    { id: "gpt-5", label: "GPT-5", note: "flagship" },
    { id: "gpt-5-mini", label: "GPT-5 mini" },
    { id: "gpt-4.1", label: "GPT-4.1", note: "long-form, recommended" },
    { id: "gpt-4.1-mini", label: "GPT-4.1 mini" },
    { id: "gpt-4.1-nano", label: "GPT-4.1 nano" },
    { id: "gpt-4o", label: "GPT-4o" },
    { id: "gpt-4o-mini", label: "GPT-4o mini", note: "cheap & fast" },
    { id: "o3", label: "o3 (reasoning)" },
    { id: "o4-mini", label: "o4-mini (reasoning)" },
    { id: "gpt-4-turbo", label: "GPT-4 Turbo" },
    { id: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
  ],
  gemini: [
    { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro", note: "best quality" },
    { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash", note: "recommended" },
    { id: "gemini-2.5-flash-lite", label: "Gemini 2.5 Flash-Lite" },
    { id: "gemini-2.0-flash", label: "Gemini 2.0 Flash" },
    { id: "gemini-1.5-pro", label: "Gemini 1.5 Pro" },
    { id: "gemini-1.5-flash", label: "Gemini 1.5 Flash" },
  ],
  anthropic: [
    { id: "claude-opus-4-8", label: "Claude Opus 4.8", note: "highest quality" },
    { id: "claude-sonnet-4-6", label: "Claude Sonnet 4.6", note: "recommended" },
    { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", note: "fast & cheap" },
    { id: "claude-opus-4-1-20250805", label: "Claude Opus 4.1" },
    { id: "claude-3-7-sonnet-latest", label: "Claude 3.7 Sonnet" },
    { id: "claude-3-5-sonnet-latest", label: "Claude 3.5 Sonnet" },
    { id: "claude-3-5-haiku-latest", label: "Claude 3.5 Haiku" },
  ],
};

export const DEFAULT_MODEL: Record<Provider, string> = {
  openai: "gpt-4.1",
  gemini: "gemini-2.5-flash",
  anthropic: "claude-sonnet-4-6",
};

/** Where to get an API key — shown as a hint in the settings panel. */
export const KEY_HELP: Record<Provider, { url: string; placeholder: string }> = {
  openai: { url: "https://platform.openai.com/api-keys", placeholder: "sk-..." },
  gemini: { url: "https://aistudio.google.com/app/apikey", placeholder: "AIza..." },
  anthropic: { url: "https://console.anthropic.com/settings/keys", placeholder: "sk-ant-..." },
};

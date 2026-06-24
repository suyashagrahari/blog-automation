import type { KeywordRow, RowResult, Settings } from "./types";
import { DEFAULT_MODEL } from "./models";

// ─────────────────────────────────────────────────────────────────────────────
// Tiny typed localStorage layer. Everything persists in the browser so the user
// can refresh / come back later and keep their keys, sheet, and progress.
// ─────────────────────────────────────────────────────────────────────────────

const K = {
  settings: "ba:settings",
  rows: "ba:rows",
  results: "ba:results",
  fileName: "ba:fileName",
} as const;

export const DEFAULT_SETTINGS: Settings = {
  keys: { openai: "", gemini: "", anthropic: "" },
  models: { ...DEFAULT_MODEL },
  activeProvider: "openai",
  strapiUrl: "http://localhost:1337",
  strapiToken: "",
  siteUrl: "https://subhsandesh.in",
  blogPathPrefix: "/blog",
  autoPublish: true,
};

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota / private mode — ignore */
  }
}

export const loadSettings = (): Settings => ({
  ...DEFAULT_SETTINGS,
  ...read<Partial<Settings>>(K.settings, {}),
  keys: { ...DEFAULT_SETTINGS.keys, ...read<Partial<Settings>>(K.settings, {}).keys },
  models: { ...DEFAULT_SETTINGS.models, ...read<Partial<Settings>>(K.settings, {}).models },
});
export const saveSettings = (s: Settings) => write(K.settings, s);

export const loadRows = (): KeywordRow[] => read<KeywordRow[]>(K.rows, []);
export const saveRows = (r: KeywordRow[]) => write(K.rows, r);

export const loadResults = (): Record<string, RowResult> =>
  read<Record<string, RowResult>>(K.results, {});
export const saveResults = (r: Record<string, RowResult>) => write(K.results, r);

export const loadFileName = (): string => read<string>(K.fileName, "");
export const saveFileName = (n: string) => write(K.fileName, n);

export function clearSheet() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(K.rows);
  window.localStorage.removeItem(K.results);
  window.localStorage.removeItem(K.fileName);
}

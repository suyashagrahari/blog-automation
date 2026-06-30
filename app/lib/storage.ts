import type { KeywordRow, RowResult, Settings } from "./types";
import { DEFAULT_MODEL } from "./models";

// ─────────────────────────────────────────────────────────────────────────────
// Tiny typed localStorage layer.
//
//  • Global settings (API keys, models, Strapi connection) live under one key.
//  • Each project's keyword sheet (rows + per-row status + file name) is
//    namespaced by project id, so switching projects loads a different sheet.
//
// Everything persists in the browser so the user can refresh / come back later
// and keep their keys, sheets, and progress.
// ─────────────────────────────────────────────────────────────────────────────

const K = {
  settings: "ba:settings",
  activeProject: "ba:activeProject",
} as const;

/** Per-project sheet keys — namespaced so each project keeps its own sheet. */
const projKey = (pid: string, part: "rows" | "results" | "fileName") => `ba:proj:${pid}:${part}`;

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

// ── Global settings ────────────────────────────────────────────────────────────
export const loadSettings = (): Settings => ({
  ...DEFAULT_SETTINGS,
  ...read<Partial<Settings>>(K.settings, {}),
  keys: { ...DEFAULT_SETTINGS.keys, ...read<Partial<Settings>>(K.settings, {}).keys },
  models: { ...DEFAULT_SETTINGS.models, ...read<Partial<Settings>>(K.settings, {}).models },
});
export const saveSettings = (s: Settings) => write(K.settings, s);

// ── Last-opened project (so a refresh reopens it) ───────────────────────────────
export const loadActiveProjectId = (): string | null => read<string | null>(K.activeProject, null);
export const saveActiveProjectId = (id: string | null) => {
  if (id === null) {
    if (typeof window !== "undefined") window.localStorage.removeItem(K.activeProject);
  } else {
    write(K.activeProject, id);
  }
};

// ── Per-project keyword sheet ───────────────────────────────────────────────────
export const loadRows = (pid: string): KeywordRow[] => read<KeywordRow[]>(projKey(pid, "rows"), []);
export const saveRows = (pid: string, r: KeywordRow[]) => write(projKey(pid, "rows"), r);

export const loadResults = (pid: string): Record<string, RowResult> =>
  read<Record<string, RowResult>>(projKey(pid, "results"), {});
export const saveResults = (pid: string, r: Record<string, RowResult>) => write(projKey(pid, "results"), r);

export const loadFileName = (pid: string): string => read<string>(projKey(pid, "fileName"), "");
export const saveFileName = (pid: string, n: string) => write(projKey(pid, "fileName"), n);

/** Drop a project's loaded sheet (rows + results + file name). Blogs are kept. */
export function clearSheet(pid: string) {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(projKey(pid, "rows"));
  window.localStorage.removeItem(projKey(pid, "results"));
  window.localStorage.removeItem(projKey(pid, "fileName"));
}

// ── Legacy (pre-project) sheet, read once during migration ──────────────────────
const LEGACY = { rows: "ba:rows", results: "ba:results", fileName: "ba:fileName" } as const;
export const loadLegacySheet = () => ({
  rows: read<KeywordRow[]>(LEGACY.rows, []),
  results: read<Record<string, RowResult>>(LEGACY.results, {}),
  fileName: read<string>(LEGACY.fileName, ""),
});
export function clearLegacySheet() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(LEGACY.rows);
  window.localStorage.removeItem(LEGACY.results);
  window.localStorage.removeItem(LEGACY.fileName);
}

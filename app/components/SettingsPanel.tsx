"use client";

import { useState } from "react";
import type { Provider, Settings, TaxonomyItem, TemplateItem } from "@/app/lib/types";
import { KEY_HELP, MODELS, PROVIDER_LABELS } from "@/app/lib/models";

const PROVIDERS: Provider[] = ["openai", "gemini", "anthropic"];
const CUSTOM = "__custom__";

export default function SettingsPanel({
  settings,
  onChange,
}: {
  settings: Settings;
  onChange: (s: Settings) => void;
}) {
  const [testState, setTestState] = useState<{ loading: boolean; msg: string; ok?: boolean }>({
    loading: false,
    msg: "",
  });

  const set = (patch: Partial<Settings>) => onChange({ ...settings, ...patch });
  const setKey = (p: Provider, v: string) => set({ keys: { ...settings.keys, [p]: v } });
  const setModel = (p: Provider, v: string) => set({ models: { ...settings.models, [p]: v } });

  async function testStrapi() {
    setTestState({ loading: true, msg: "" });
    try {
      const base = settings.strapiUrl.replace(/\/+$/, "");
      const res = await fetch(`${base}/api/articles?pagination[pageSize]=1`, {
        headers: settings.strapiToken ? { Authorization: `Bearer ${settings.strapiToken}` } : {},
      });
      if (res.ok) setTestState({ loading: false, ok: true, msg: "Connected ✓ Strapi is reachable." });
      else setTestState({ loading: false, ok: false, msg: `Strapi responded ${res.status}. Check URL / token / public read.` });
    } catch {
      setTestState({ loading: false, ok: false, msg: "Could not reach Strapi (CORS or wrong URL). It still works server-side at publish time." });
    }
  }

  return (
    <div className="space-y-6">
      {/* ── AI providers ─────────────────────────────────────────── */}
      <section>
        <h3 className="text-sm font-semibold text-[var(--text)] mb-1">AI Providers & Models</h3>
        <p className="text-xs text-[var(--muted)] mb-4">
          Keys are stored only in your browser (localStorage) and sent to the model provider via this app&apos;s own
          server route. Pick which provider writes your blogs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {PROVIDERS.map((p) => {
            const active = settings.activeProvider === p;
            const list = MODELS[p];
            const current = settings.models[p];
            const isCustom = !list.some((m) => m.id === current);
            return (
              <div
                key={p}
                className={`card p-4 transition-colors ${active ? "ring-1 ring-[var(--accent)]" : ""}`}
                style={active ? { borderColor: "var(--accent)" } : undefined}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold">{PROVIDER_LABELS[p]}</span>
                  <button
                    type="button"
                    onClick={() => set({ activeProvider: p })}
                    className={`pill ${active ? "" : "opacity-70"}`}
                    style={{
                      background: active ? "rgba(108,99,255,0.18)" : "var(--panel-2)",
                      color: active ? "var(--accent-2)" : "var(--muted)",
                    }}
                  >
                    {active ? "● Active" : "Set active"}
                  </button>
                </div>

                <label className="label">API Key</label>
                <input
                  type="password"
                  className="field mb-1"
                  placeholder={KEY_HELP[p].placeholder}
                  value={settings.keys[p]}
                  onChange={(e) => setKey(p, e.target.value)}
                  autoComplete="off"
                />
                <a
                  href={KEY_HELP[p].url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-[var(--blue)] hover:underline"
                >
                  Get a key ↗
                </a>

                <label className="label mt-3">Model</label>
                <select
                  className="field"
                  value={isCustom ? CUSTOM : current}
                  onChange={(e) => {
                    const v = e.target.value;
                    setModel(p, v === CUSTOM ? "" : v);
                  }}
                >
                  {list.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.label}
                      {m.note ? ` — ${m.note}` : ""}
                    </option>
                  ))}
                  <option value={CUSTOM}>✏️ Custom model id…</option>
                </select>
                {isCustom && (
                  <input
                    className="field mt-2 font-mono text-xs"
                    placeholder="e.g. gpt-4.1-2025-04-14"
                    value={current}
                    onChange={(e) => setModel(p, e.target.value)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Strapi ───────────────────────────────────────────────── */}
      <section className="card p-5">
        <h3 className="text-sm font-semibold mb-1">Strapi CMS Connection</h3>
        <p className="text-xs text-[var(--muted)] mb-4">
          Generated articles are pushed here. With auto-publish on, the studio calls the{" "}
          <code className="text-[var(--accent-2)]">/api/articles/automation</code> endpoint so posts publish instantly
          and fire the revalidate webhook.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Strapi URL</label>
            <input
              className="field"
              placeholder="http://localhost:1337"
              value={settings.strapiUrl}
              onChange={(e) => set({ strapiUrl: e.target.value })}
            />
          </div>
          <div>
            <label className="label">API Token (full access)</label>
            <input
              type="password"
              className="field"
              placeholder="Strapi → Settings → API Tokens"
              value={settings.strapiToken}
              onChange={(e) => set({ strapiToken: e.target.value })}
              autoComplete="off"
            />
          </div>
          <div>
            <label className="label">Site URL (for canonical)</label>
            <input
              className="field"
              placeholder="https://subhsandesh.in"
              value={settings.siteUrl}
              onChange={(e) => set({ siteUrl: e.target.value })}
            />
          </div>
          <div>
            <label className="label">Blog path prefix</label>
            <input
              className="field"
              placeholder="/blog"
              value={settings.blogPathPrefix}
              onChange={(e) => set({ blogPathPrefix: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-4">
          <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
            <input
              type="checkbox"
              checked={settings.autoPublish}
              onChange={(e) => set({ autoPublish: e.target.checked })}
              className="accent-[var(--accent)] w-4 h-4"
            />
            Auto-publish after generating
          </label>
          <button type="button" className="btn btn-ghost" onClick={testStrapi} disabled={testState.loading}>
            {testState.loading ? "Testing…" : "Test connection"}
          </button>
          {testState.msg && (
            <span className="text-xs" style={{ color: testState.ok ? "var(--green)" : "var(--amber)" }}>
              {testState.msg}
            </span>
          )}
        </div>

        <p className="text-[11px] text-[var(--muted)] mt-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
          The default Author, Category &amp; linked Templates every article connects to are set <em>per project</em> on
          the Generate tab — so each project can publish to a different author/category.
        </p>
      </section>
    </div>
  );
}

const NONE = "__none__";

export function TaxonomySelect({
  label,
  items,
  valueId,
  onSelect,
  emptyHint,
}: {
  label: string;
  items: TaxonomyItem[];
  valueId?: string;
  onSelect: (item: TaxonomyItem | null) => void;
  emptyHint?: string;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <select
        className="field"
        value={valueId || NONE}
        onChange={(e) => {
          const v = e.target.value;
          onSelect(v === NONE ? null : items.find((i) => i.documentId === v) || null);
        }}
      >
        <option value={NONE}>— None —</option>
        {items.map((i) => (
          <option key={i.documentId} value={i.documentId}>
            {i.name}
          </option>
        ))}
      </select>
      {items.length === 0 && emptyHint && <p className="text-[11px] text-[var(--muted)] mt-1">{emptyHint}</p>}
    </div>
  );
}

/**
 * Multi-select chip list for linking Strapi templates (the manyToMany
 * relatedTemplates relation). Click a chip to toggle it; `onChange` returns both
 * the selected documentIds and the matching items (so callers can store names).
 */
export function TemplateMultiSelect({
  label,
  items,
  selectedIds,
  onChange,
  emptyHint,
}: {
  label: string;
  items: TemplateItem[];
  selectedIds: string[];
  onChange: (ids: string[], items: TemplateItem[]) => void;
  emptyHint?: string;
}) {
  const selected = new Set(selectedIds);
  const emit = (next: Set<string>) => {
    const chosen = items.filter((i) => next.has(i.documentId));
    onChange(chosen.map((i) => i.documentId), chosen);
  };
  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    emit(next);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="label">{label}</label>
        {selectedIds.length > 0 && (
          <button
            type="button"
            className="text-[11px] text-[var(--blue)] hover:underline"
            onClick={() => onChange([], [])}
          >
            Clear ({selectedIds.length})
          </button>
        )}
      </div>
      {items.length === 0 ? (
        emptyHint && <p className="text-[11px] text-[var(--muted)] mt-1">{emptyHint}</p>
      ) : (
        <div
          className="flex flex-wrap gap-2 mt-1 max-h-44 overflow-y-auto rounded-lg p-2"
          style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
        >
          {items.map((i) => {
            const on = selected.has(i.documentId);
            return (
              <button
                key={i.documentId}
                type="button"
                onClick={() => toggle(i.documentId)}
                className="pill transition-colors"
                title={i.url || i.name}
                style={{
                  background: on ? "rgba(108,99,255,0.18)" : "var(--panel-2)",
                  color: on ? "var(--accent-2)" : "var(--muted)",
                  border: on ? "1px solid var(--accent)" : "1px solid var(--border)",
                }}
              >
                {on ? "✓ " : ""}
                {i.emoji ? `${i.emoji} ` : ""}
                {i.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

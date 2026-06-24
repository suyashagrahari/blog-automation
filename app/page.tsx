"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { KeywordRow, RowResult, Settings, StoredBlog, TaxonomyItem } from "./lib/types";
import {
  DEFAULT_SETTINGS,
  clearSheet as clearSheetStorage,
  loadFileName,
  loadResults,
  loadRows,
  loadSettings,
  saveFileName,
  saveResults,
  saveRows,
  saveSettings,
} from "./lib/storage";
import { clearAllBlogs, deleteBlog, getAllBlogs, saveBlog } from "./lib/db";
import { exportToExcel, parseWorkbook } from "./lib/excel";
import { connectArticle, fetchTaxonomy, generateArticle, publishArticle } from "./lib/client";
import { PROVIDER_LABELS } from "./lib/models";
import SettingsPanel, { TaxonomySelect } from "./components/SettingsPanel";
import KeywordTable from "./components/KeywordTable";
import Sidebar, { type View } from "./components/Sidebar";
import BlogLibrary from "./components/BlogLibrary";
import BlogViewer from "./components/BlogViewer";
import Modal from "./components/Modal";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [rows, setRows] = useState<KeywordRow[]>([]);
  const [results, setResults] = useState<Record<string, RowResult>>({});
  const [fileName, setFileName] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const [view, setView] = useState<View>("generate");
  const [blogs, setBlogs] = useState<StoredBlog[]>([]);
  const [viewingId, setViewingId] = useState<string | null>(null);
  const [modalId, setModalId] = useState<string | null>(null);

  const [categories, setCategories] = useState<TaxonomyItem[]>([]);
  const [authors, setAuthors] = useState<TaxonomyItem[]>([]);
  const [taxonomyLoading, setTaxonomyLoading] = useState(false);
  const [taxonomyError, setTaxonomyError] = useState("");

  const [running, setRunning] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [log, setLog] = useState<string[]>([]);
  const stopRef = useRef(false);

  // ── hydrate ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const s = loadSettings();
    setSettings(s);
    const r = loadRows();
    setRows(r);
    setResults(loadResults());
    setFileName(loadFileName());
    setSelected(new Set(r.map((x) => x.id)));
    const hasKey = s.keys.openai || s.keys.gemini || s.keys.anthropic;
    if (!hasKey) setView("settings");
    getAllBlogs().then(setBlogs);
    if (s.strapiUrl) loadTaxonomy(s);
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshBlogs = useCallback(() => getAllBlogs().then(setBlogs), []);

  async function loadTaxonomy(s: Settings) {
    setTaxonomyLoading(true);
    setTaxonomyError("");
    try {
      const { categories: cats, authors: auths } = await fetchTaxonomy(s);
      setCategories(cats);
      setAuthors(auths);
    } catch (e) {
      setTaxonomyError(e instanceof Error ? e.message : "Failed to load categories/authors");
    } finally {
      setTaxonomyLoading(false);
    }
  }

  // ── persist helpers ──────────────────────────────────────────────────────────
  const updateSettings = (s: Settings) => {
    setSettings(s);
    saveSettings(s);
  };
  const updateResults = useCallback((next: Record<string, RowResult>) => {
    setResults(next);
    saveResults(next);
  }, []);

  const addLog = (msg: string) =>
    setLog((l) => [`${new Date().toLocaleTimeString()}  ${msg}`, ...l].slice(0, 200));

  // ── stats ─────────────────────────────────────────────────────────────────
  const stats = useMemo(() => {
    let done = 0,
      error = 0,
      pending = 0;
    for (const r of rows) {
      const st = results[r.id]?.status || "pending";
      if (st === "done") done++;
      else if (st === "error") error++;
      else pending++;
    }
    return { total: rows.length, done, error, pending };
  }, [rows, results]);

  // ── file upload ─────────────────────────────────────────────────────────────
  async function handleFile(file: File) {
    try {
      const buf = await file.arrayBuffer();
      const { rows: parsed } = parseWorkbook(buf);
      if (!parsed.length) {
        addLog("⚠️ No keyword rows found in that sheet.");
        return;
      }
      setRows(parsed);
      saveRows(parsed);
      const fresh: Record<string, RowResult> = {};
      for (const r of parsed) fresh[r.id] = { status: "pending" };
      updateResults(fresh);
      setSelected(new Set(parsed.map((r) => r.id)));
      setFileName(file.name);
      saveFileName(file.name);
      addLog(`📥 Loaded ${parsed.length} keywords from "${file.name}".`);
    } catch (e) {
      addLog(`❌ Failed to parse sheet: ${e instanceof Error ? e.message : "unknown error"}`);
    }
  }

  function clearSheet() {
    if (!confirm("Clear the loaded sheet and all generation progress? (Saved blogs in the Library are kept.)")) return;
    clearSheetStorage();
    setRows([]);
    setResults({});
    setSelected(new Set());
    setFileName("");
    addLog("🗑️ Cleared the sheet.");
  }

  // ── selection ────────────────────────────────────────────────────────────────
  const toggle = (id: string) =>
    setSelected((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  const toggleAll = () =>
    setSelected((s) => (s.size === rows.length ? new Set() : new Set(rows.map((r) => r.id))));

  // ── generation engine ─────────────────────────────────────────────────────────
  const setRowStatus = (resultsRef: Record<string, RowResult>, id: string, patch: Partial<RowResult>) => {
    const next = { ...resultsRef, [id]: { ...resultsRef[id], ...patch } as RowResult };
    updateResults(next);
    return next;
  };

  async function run(ids: string[]) {
    if (running) return;
    const provider = settings.activeProvider;
    if (!settings.keys[provider]) {
      addLog(`❌ Add an API key for ${PROVIDER_LABELS[provider]} first.`);
      setView("settings");
      return;
    }
    if (!ids.length) {
      addLog("⚠️ Nothing selected to generate.");
      return;
    }

    stopRef.current = false;
    setRunning(true);
    addLog(`🚀 Starting batch of ${ids.length} with ${PROVIDER_LABELS[provider]} · ${settings.models[provider]}.`);

    let working = { ...results };
    for (const id of ids) working = setRowStatus(working, id, { status: "queued", error: undefined });

    let okCount = 0;
    for (const id of ids) {
      if (stopRef.current) {
        addLog("⏸️ Stopped by user.");
        break;
      }
      const row = rows.find((r) => r.id === id);
      if (!row) continue;
      setCurrentId(id);

      try {
        working = setRowStatus(working, id, { status: "generating", error: undefined });
        addLog(`✍️ Writing: "${row.keyword}"…`);
        const article = await generateArticle(settings, row);

        working = setRowStatus(working, id, {
          status: settings.autoPublish ? "publishing" : "done",
          slug: article.slug,
          coverImageQuery: article.coverImageQuery,
          metaTitle: article.metaTitle,
        });

        let publishState: "published" | "draft" | undefined;
        let documentId: string | undefined;

        if (settings.autoPublish) {
          addLog(`📤 Publishing "${article.title}" to Strapi…`);
          const pub = await publishArticle(settings, article);
          publishState = pub.publishState;
          documentId = pub.documentId;
          working = setRowStatus(working, id, {
            status: "done",
            publishState: pub.publishState,
            documentId: pub.documentId,
            finishedAt: new Date().toISOString(),
          });
          addLog(
            pub.publishState === "published"
              ? `✅ Published "${article.title}" (${article.faqs.length} FAQs, ${article.structuredData?.length || 0} JSON-LD).`
              : `📝 Saved "${article.title}" as DRAFT (add the CMS endpoint + restart to auto-publish).`
          );
        } else {
          working = setRowStatus(working, id, { status: "done", finishedAt: new Date().toISOString() });
          addLog(`✅ Generated "${article.title}" (not published — auto-publish off).`);
        }

        // Persist the full article to IndexedDB so it shows up in the Library.
        try {
          await saveBlog({
            id,
            keyword: row.keyword,
            article,
            provider,
            model: settings.models[provider],
            publishState,
            documentId,
            categoryId: settings.defaultCategoryId,
            categoryName: settings.defaultCategoryName,
            authorId: settings.defaultAuthorId,
            authorName: settings.defaultAuthorName,
            createdAt: new Date().toISOString(),
          });
          await refreshBlogs();
        } catch (dbErr) {
          addLog(`⚠️ Saved to CMS but couldn't store locally: ${dbErr instanceof Error ? dbErr.message : "IndexedDB error"}`);
        }

        okCount++;
      } catch (e) {
        const msg = e instanceof Error ? e.message : "unknown error";
        working = setRowStatus(working, id, { status: "error", error: msg });
        addLog(`❌ "${row.keyword}" failed: ${msg}`);
      }
    }

    setCurrentId(null);
    setRunning(false);
    addLog(`🏁 Batch finished — ${okCount}/${ids.length} succeeded.`);
  }

  // ── view a generated blog from the keyword table (centered modal) ──────────────
  function openBlogModal(id: string) {
    const blog = blogs.find((b) => b.id === id);
    if (!blog) {
      addLog("ℹ️ No stored content for this row — re-generate it to view the full blog.");
      return;
    }
    setModalId(id);
  }

  // ── library actions ──────────────────────────────────────────────────────────
  async function handleDeleteBlog(id: string) {
    if (!confirm("Delete this blog from your local library?")) return;
    await deleteBlog(id);
    await refreshBlogs();
    if (viewingId === id) setViewingId(null);
    if (modalId === id) setModalId(null);
    addLog("🗑️ Deleted a blog from the library.");
  }
  async function handleClearAllBlogs() {
    await clearAllBlogs();
    await refreshBlogs();
    setViewingId(null);
    addLog("🗑️ Cleared the entire blog library.");
  }

  async function handleConnect(blogId: string, category: TaxonomyItem | null, author: TaxonomyItem | null) {
    const blog = blogs.find((b) => b.id === blogId);
    if (!blog?.documentId) throw new Error("This blog has no Strapi document id yet — publish it first.");
    const result = await connectArticle(settings, blog.documentId, category?.documentId, author?.documentId);
    await saveBlog({
      ...blog,
      categoryId: category?.documentId,
      categoryName: category?.name,
      authorId: author?.documentId,
      authorName: author?.name,
    });
    await refreshBlogs();
    addLog(
      `🔗 Connected "${blog.article.title}" → ${author?.name || "no author"} · ${category?.name || "no category"}` +
        (result.publishState === "draft" ? " (saved as draft — add the CMS update endpoint to publish)." : ".")
    );
  }

  const selectedPendingIds = () =>
    rows.filter((r) => selected.has(r.id) && results[r.id]?.status !== "done").map((r) => r.id);
  const allPendingIds = () => rows.filter((r) => results[r.id]?.status !== "done").map((r) => r.id);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--muted)] text-sm">Loading studio…</div>
    );
  }

  const provider = settings.activeProvider;
  const hasRows = rows.length > 0;
  const allSelected = hasRows && rows.every((r) => selected.has(r.id));
  const viewingBlog = viewingId ? blogs.find((b) => b.id === viewingId) || null : null;
  const modalBlog = modalId ? blogs.find((b) => b.id === modalId) || null : null;

  const TITLES: Record<View, { title: string; sub: string }> = {
    generate: { title: "Generate", sub: "Upload keywords, then write & publish SEO/GEO/AEO blogs one by one." },
    library: { title: "Library", sub: "Every blog you've generated, stored locally in your browser." },
    settings: { title: "Settings", sub: "API keys, model selection per provider, and your Strapi connection." },
  };
  const head = TITLES[view];

  return (
    <div className="min-h-screen">
      <Sidebar
        active={view}
        onNavigate={(v) => {
          setView(v);
          if (v !== "library") setViewingId(null);
        }}
        blogCount={blogs.length}
        doneCount={stats.done}
        totalKeywords={stats.total}
      />

      <div className="ml-60">
        {/* Header */}
        <header
          className="sticky top-0 z-20 backdrop-blur border-b"
          style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}
        >
          <div className="px-7 py-4 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-lg font-semibold leading-tight">{head.title}</h1>
              <p className="text-[11px] text-[var(--muted)]">{head.sub}</p>
            </div>
            {view === "generate" && hasRows && (
              <div className="flex items-center gap-2 flex-wrap">
                <Stat label="Done" value={stats.done} color="var(--green)" />
                <Stat label="Errors" value={stats.error} color="var(--red)" />
                <button
                  className="btn btn-ghost"
                  onClick={() => exportToExcel(rows, results, settings.siteUrl, settings.blogPathPrefix)}
                >
                  ⬇ Export Excel
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="px-7 py-6 w-full">
          {/* ── GENERATE ───────────────────────────────────────────── */}
          {view === "generate" && (
            <div className="space-y-6">
              <UploadZone fileName={fileName} onFile={handleFile} onClear={hasRows ? clearSheet : undefined} />

              {hasRows && (
                <div className="card p-5 space-y-4">
                  {/* Status chips + generate actions */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="w-8 h-8 rounded-lg grid place-items-center text-white shrink-0"
                        style={{ background: "linear-gradient(135deg,var(--accent),#9d5cff)" }}
                      >
                        ✍
                      </span>
                      <span className="text-sm text-[var(--muted)]">Writing with</span>
                      <span className="pill" style={{ background: "var(--panel-2)", color: "var(--text)" }}>
                        {PROVIDER_LABELS[provider]}
                      </span>
                      <span
                        className="pill font-mono"
                        style={{ background: "rgba(108,99,255,0.14)", color: "var(--accent-2)" }}
                      >
                        {settings.models[provider] || "—"}
                      </span>
                      <span
                        className="pill"
                        style={{
                          background: settings.autoPublish ? "rgba(46,204,113,0.14)" : "rgba(245,166,35,0.14)",
                          color: settings.autoPublish ? "var(--green)" : "var(--amber)",
                        }}
                      >
                        ● auto-publish {settings.autoPublish ? "ON" : "OFF"}
                      </span>
                      <span className="pill" style={{ background: "var(--panel-2)", color: "var(--muted)" }}>
                        {selected.size} selected
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {running ? (
                        <button className="btn btn-danger" onClick={() => (stopRef.current = true)}>
                          ■ Stop
                        </button>
                      ) : (
                        <>
                          <button className="btn btn-ghost" disabled={!selected.size} onClick={() => run(selectedPendingIds())}>
                            Generate Selected ({selectedPendingIds().length})
                          </button>
                          <button
                            className="btn btn-primary"
                            disabled={!allSelected || allPendingIds().length === 0}
                            title={!allSelected ? "Select all keywords to generate the whole sheet" : undefined}
                            onClick={() => run(allPendingIds())}
                          >
                            ⚡ Generate All ({allPendingIds().length})
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Author + category applied to EVERY blog in this batch */}
                  <div
                    className="rounded-xl p-4"
                    style={{ background: "var(--panel-2)", border: "1px solid var(--border-soft)" }}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--muted)] flex items-center gap-1.5">
                        🔗 Connect every generated article to
                      </span>
                      <button
                        type="button"
                        className="text-xs text-[var(--blue)] hover:underline disabled:opacity-50"
                        onClick={() => loadTaxonomy(settings)}
                        disabled={taxonomyLoading}
                      >
                        {taxonomyLoading ? "Loading…" : "↻ Reload from Strapi"}
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <TaxonomySelect
                        label="Author"
                        items={authors}
                        valueId={settings.defaultAuthorId}
                        onSelect={(i) =>
                          updateSettings({ ...settings, defaultAuthorId: i?.documentId, defaultAuthorName: i?.name })
                        }
                        emptyHint="No authors — create one in Strapi, then ↻ Reload."
                      />
                      <TaxonomySelect
                        label="Category"
                        items={categories}
                        valueId={settings.defaultCategoryId}
                        onSelect={(i) =>
                          updateSettings({ ...settings, defaultCategoryId: i?.documentId, defaultCategoryName: i?.name })
                        }
                        emptyHint="No categories — create one in Strapi, then ↻ Reload."
                      />
                    </div>
                  </div>
                </div>
              )}

              {hasRows ? (
                <KeywordTable
                  rows={rows}
                  results={results}
                  selected={selected}
                  currentId={currentId}
                  onToggle={toggle}
                  onToggleAll={toggleAll}
                  onView={openBlogModal}
                />
              ) : (
                <EmptyState />
              )}

              {log.length > 0 && (
                <div className="card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold">Activity</h3>
                    <button className="text-xs text-[var(--muted)] hover:text-[var(--text)]" onClick={() => setLog([])}>
                      clear
                    </button>
                  </div>
                  <div className="font-mono text-xs space-y-1 max-h-56 overflow-y-auto text-[var(--muted)]">
                    {log.map((l, i) => (
                      <div key={i}>{l}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── LIBRARY ────────────────────────────────────────────── */}
          {view === "library" &&
            (viewingBlog ? (
              <BlogViewer
                blog={viewingBlog}
                onBack={() => setViewingId(null)}
                onDelete={handleDeleteBlog}
                categories={categories}
                authors={authors}
                onConnect={handleConnect}
              />
            ) : (
              <BlogLibrary
                blogs={blogs}
                onOpen={(id) => setViewingId(id)}
                onDelete={handleDeleteBlog}
                onClearAll={handleClearAllBlogs}
              />
            ))}

          {/* ── SETTINGS ───────────────────────────────────────────── */}
          {view === "settings" && (
            <div className="card p-6">
              <SettingsPanel
                settings={settings}
                onChange={updateSettings}
                categories={categories}
                authors={authors}
                taxonomyLoading={taxonomyLoading}
                taxonomyError={taxonomyError}
                onReloadTaxonomy={() => loadTaxonomy(settings)}
              />
            </div>
          )}
        </main>
      </div>

      {/* Centered modal: full data for a generated (Done) blog */}
      <Modal open={!!modalBlog} onClose={() => setModalId(null)}>
        {modalBlog && (
          <BlogViewer
            blog={modalBlog}
            backLabel="✕ Close"
            onBack={() => setModalId(null)}
            onDelete={handleDeleteBlog}
            categories={categories}
            authors={authors}
            onConnect={handleConnect}
          />
        )}
      </Modal>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: number; color?: string }) {
  return (
    <div className="px-3 py-1.5 rounded-lg bg-[var(--panel-2)] border" style={{ borderColor: "var(--border)" }}>
      <span className="text-xs text-[var(--muted)]">{label} </span>
      <span className="text-sm font-semibold" style={{ color: color || "var(--text)" }}>
        {value}
      </span>
    </div>
  );
}

function UploadZone({
  fileName,
  onFile,
  onClear,
}: {
  fileName: string;
  onFile: (f: File) => void;
  onClear?: () => void;
}) {
  const [drag, setDrag] = useState(false);
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDrag(true);
      }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDrag(false);
        const f = e.dataTransfer.files?.[0];
        if (f) onFile(f);
      }}
      className="card p-4 flex items-center justify-between gap-4 flex-wrap transition-colors"
      style={{ borderColor: drag ? "var(--accent)" : "var(--border)" }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg grid place-items-center bg-[var(--panel-2)]">📊</div>
        <div>
          <p className="text-sm font-medium">{fileName ? fileName : "Upload your keyword sheet"}</p>
          <p className="text-xs text-[var(--muted)]">
            .xlsx / .csv — columns: Keyword, Strategy / Intent Cluster, Search Volume, Ranking Difficulty, Asset Type…
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {onClear && (
          <button className="btn btn-danger" onClick={onClear}>
            Clear
          </button>
        )}
        <label className="btn btn-primary cursor-pointer">
          {fileName ? "Replace sheet" : "Choose file"}
          <input
            type="file"
            accept=".xlsx,.xls,.csv"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFile(f);
              e.currentTarget.value = "";
            }}
          />
        </label>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="card p-16 text-center">
      <div className="text-4xl mb-3">📝</div>
      <h3 className="text-base font-semibold mb-1">No keywords loaded yet</h3>
      <p className="text-sm text-[var(--muted)] max-w-md mx-auto">
        Upload your keyword Excel sheet above. Each row becomes a fully SEO/GEO/AEO-optimized article you can generate
        and publish to Strapi one click at a time — or all at once.
      </p>
    </div>
  );
}

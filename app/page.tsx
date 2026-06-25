"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { KeywordRow, RowResult, Settings, StoredBlog, TaxonomyItem, TemplateItem } from "./lib/types";
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
import { connectArticle, fetchTaxonomy, generateArticle, publishArticle, setArticleCover } from "./lib/client";
import { PROVIDER_LABELS } from "./lib/models";
import SettingsPanel, { TaxonomySelect, TemplateMultiSelect } from "./components/SettingsPanel";
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
  const [templates, setTemplates] = useState<TemplateItem[]>([]);
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
      const { categories: cats, authors: auths, templates: tpls } = await fetchTaxonomy(s);
      setCategories(cats);
      setAuthors(auths);
      setTemplates(tpls);
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

  // How many blogs to generate+publish concurrently per batch.
  const BATCH_SIZE = 5;

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
    const batchCount = Math.ceil(ids.length / BATCH_SIZE);
    addLog(
      `🚀 Starting ${ids.length} blog${ids.length > 1 ? "s" : ""} with ${PROVIDER_LABELS[provider]} · ${settings.models[provider]} ` +
        `— ${batchCount} batch${batchCount > 1 ? "es" : ""} of up to ${BATCH_SIZE} at a time.`
    );

    // Single mutable accumulator so concurrent tasks never clobber each other's
    // status writes. JS is single-threaded, so each patch() runs atomically
    // (no await inside it) — only generate/publish I/O happens in parallel.
    let acc = { ...results };
    const patch = (id: string, p: Partial<RowResult>) => {
      acc = setRowStatus(acc, id, p);
    };

    for (const id of ids) patch(id, { status: "queued", error: undefined });
    setCurrentId(null); // no single "current" row when running in parallel

    let okCount = 0;

    // Generate + (optionally) publish a single blog. Never throws — failures are
    // captured as an "error" status so one bad blog can't reject the whole batch.
    const processOne = async (id: string) => {
      if (stopRef.current) return;
      const row = rows.find((r) => r.id === id);
      if (!row) return;

      try {
        patch(id, { status: "generating", error: undefined });
        addLog(`✍️ Writing: "${row.keyword}"…`);
        const article = await generateArticle(settings, row);

        patch(id, {
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
          patch(id, {
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
          patch(id, { status: "done", finishedAt: new Date().toISOString() });
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
            templateIds: settings.defaultTemplateIds,
            templateNames: settings.defaultTemplateNames,
            createdAt: new Date().toISOString(),
          });
        } catch (dbErr) {
          addLog(`⚠️ Saved to CMS but couldn't store locally: ${dbErr instanceof Error ? dbErr.message : "IndexedDB error"}`);
        }

        okCount++;
      } catch (e) {
        const msg = e instanceof Error ? e.message : "unknown error";
        patch(id, { status: "error", error: msg });
        addLog(`❌ "${row.keyword}" failed: ${msg}`);
      }
    };

    // Process the selection in chunks of BATCH_SIZE. Each chunk runs all its
    // blogs in parallel; we wait for the whole chunk before starting the next.
    for (let i = 0; i < ids.length; i += BATCH_SIZE) {
      if (stopRef.current) {
        addLog("⏸️ Stopped by user.");
        break;
      }
      const chunk = ids.slice(i, i + BATCH_SIZE);
      addLog(`📦 Batch ${i / BATCH_SIZE + 1}/${batchCount} — processing ${chunk.length} in parallel…`);
      await Promise.all(chunk.map(processOne));
      await refreshBlogs(); // reflect this batch's saved blogs in the Library
    }

    setCurrentId(null);
    setRunning(false);
    addLog(`🏁 Finished — ${okCount}/${ids.length} succeeded.`);
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

  async function handleConnect(
    blogId: string,
    category: TaxonomyItem | null,
    author: TaxonomyItem | null,
    linkedTemplates: TemplateItem[]
  ) {
    const blog = blogs.find((b) => b.id === blogId);
    if (!blog?.documentId) throw new Error("This blog has no Strapi document id yet — publish it first.");
    const templateIds = linkedTemplates.map((t) => t.documentId);
    const result = await connectArticle(
      settings,
      blog.documentId,
      category?.documentId,
      author?.documentId,
      // Always send the array (even []) so de-selecting clears the relation.
      templateIds
    );
    await saveBlog({
      ...blog,
      categoryId: category?.documentId,
      categoryName: category?.name,
      authorId: author?.documentId,
      authorName: author?.name,
      templateIds,
      templateNames: linkedTemplates.map((t) => t.name),
    });
    await refreshBlogs();
    const tplLabel = linkedTemplates.length ? `${linkedTemplates.length} template${linkedTemplates.length > 1 ? "s" : ""}` : "no templates";
    addLog(
      `🔗 Connected "${blog.article.title}" → ${author?.name || "no author"} · ${category?.name || "no category"} · ${tplLabel}` +
        (result.publishState === "draft" ? " (saved as draft — add the CMS update endpoint to publish)." : ".")
    );
  }

  async function handleSaveCover(blogId: string, coverImageUrl: string) {
    const blog = blogs.find((b) => b.id === blogId);
    if (!blog?.documentId) throw new Error("This blog has no Strapi document id yet — publish it first.");
    const result = await setArticleCover(settings, blog.documentId, coverImageUrl);
    await saveBlog({
      ...blog,
      coverImageUrl,
      article: { ...blog.article, coverImageUrl },
    });
    await refreshBlogs();
    addLog(
      `🖼 Cover image saved for "${blog.article.title}"` +
        (result.publishState === "draft" ? " (saved as draft — add the CMS update endpoint to publish)." : " — live on the blog.")
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

      {/* lg+: offset by the fixed rail. Below lg: full width + bottom padding so
          content clears the fixed bottom tab bar (plus iOS safe-area inset). */}
      <div className="lg:ml-60 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0">
        {/* Header */}
        <header
          className="sticky top-0 z-30 backdrop-blur-xl border-b"
          style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 92%, transparent)" }}
        >
          <div className="px-4 sm:px-7 py-3 sm:py-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg font-semibold leading-tight truncate">{head.title}</h1>
              <p className="text-[11px] text-[var(--muted)] hidden sm:block">{head.sub}</p>
            </div>
            {view === "generate" && hasRows && (
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <Stat label="Done" value={stats.done} color="var(--green)" />
                <Stat label="Errors" value={stats.error} color="var(--red)" />
                <button
                  className="btn btn-ghost px-2.5 sm:px-4"
                  onClick={() => exportToExcel(rows, results, settings.siteUrl, settings.blogPathPrefix)}
                  title="Export to Excel"
                >
                  ⬇<span className="hidden sm:inline ml-1">Export Excel</span>
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="px-4 sm:px-7 py-5 sm:py-6 w-full">
          {/* ── GENERATE ───────────────────────────────────────────── */}
          {view === "generate" && (
            <div className="space-y-6">
              <UploadZone fileName={fileName} onFile={handleFile} onClear={hasRows ? clearSheet : undefined} />

              {hasRows && (
                <div className="card p-5 space-y-4">
                  {/* Writer header — provider, model & batch status */}
                  <div className="flex items-center gap-3">
                    <span
                      className="w-11 h-11 rounded-2xl grid place-items-center text-white shrink-0 text-xl shadow-lg"
                      style={{ background: "linear-gradient(135deg,var(--accent),#9d5cff)", boxShadow: "0 6px 18px rgba(108,99,255,0.35)" }}
                    >
                      ✍
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[15px] font-semibold leading-none">{PROVIDER_LABELS[provider]}</span>
                        <span
                          className="pill font-mono"
                          style={{ background: "rgba(108,99,255,0.14)", color: "var(--accent-2)" }}
                        >
                          {settings.models[provider] || "—"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5 text-[11px] text-[var(--muted)]">
                        <span className="inline-flex items-center gap-1.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: settings.autoPublish ? "var(--green)" : "var(--amber)" }}
                          />
                          auto-publish {settings.autoPublish ? "ON" : "OFF"}
                        </span>
                        <span className="opacity-40">·</span>
                        <span>
                          <span className="text-[var(--text)] font-medium">{selected.size}</span> selected
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Generate actions */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {running ? (
                      <button className="btn btn-danger w-full" onClick={() => (stopRef.current = true)}>
                        ■ Stop generating
                      </button>
                    ) : (
                      <>
                        <button
                          className="btn btn-ghost flex-1 sm:flex-none"
                          disabled={!selected.size}
                          onClick={() => run(selectedPendingIds())}
                        >
                          Generate Selected ({selectedPendingIds().length})
                        </button>
                        <button
                          className="btn btn-primary flex-1 sm:flex-none"
                          disabled={!allSelected || allPendingIds().length === 0}
                          title={!allSelected ? "Select all keywords to generate the whole sheet" : undefined}
                          onClick={() => run(allPendingIds())}
                        >
                          ⚡ Generate All ({allPendingIds().length})
                        </button>
                      </>
                    )}
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
                    <div className="mt-4">
                      <TemplateMultiSelect
                        label="Linked Templates (Create-a-surprise CTA)"
                        items={templates}
                        selectedIds={settings.defaultTemplateIds || []}
                        onChange={(ids, items) =>
                          updateSettings({
                            ...settings,
                            defaultTemplateIds: ids,
                            defaultTemplateNames: items.map((i) => i.name),
                          })
                        }
                        emptyHint="No templates — create them in Strapi → Content Manager → Template, then ↻ Reload."
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
                templates={templates}
                onConnect={handleConnect}
                onSaveCover={handleSaveCover}
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
                templates={templates}
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
            templates={templates}
            onConnect={handleConnect}
            onSaveCover={handleSaveCover}
          />
        )}
      </Modal>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: number; color?: string }) {
  return (
    <div className="px-2.5 py-1 rounded-lg bg-[var(--panel-2)] border flex items-center gap-1" style={{ borderColor: "var(--border)" }}>
      <span className="text-[11px] text-[var(--muted)]">{label}</span>
      <span className="text-sm font-bold" style={{ color: color || "var(--text)" }}>
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
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div className="w-10 h-10 rounded-lg grid place-items-center bg-[var(--panel-2)] shrink-0">📊</div>
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">{fileName ? fileName : "Upload your keyword sheet"}</p>
          <p className="text-xs text-[var(--muted)] line-clamp-2 sm:line-clamp-none">
            .xlsx / .csv — columns: Keyword, Strategy / Intent Cluster, Search Volume, Ranking Difficulty, Asset Type…
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
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

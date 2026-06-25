"use client";

import { useMemo, useRef, useState } from "react";
import type { StoredBlog, TaxonomyItem, TemplateItem } from "@/app/lib/types";
import { uploadCoverImage } from "@/app/lib/client";
import { TaxonomySelect } from "./SettingsPanel";

type SortKey = "newest" | "oldest";
type StatusFilter = "all" | "published" | "draft";

function fmt(iso: string): string {
  try {
    return new Date(iso).toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

/** Older blogs may predate coverImagePrompt — synthesize a good one on the fly (mirrors BlogViewer). */
function coverPromptFor(b: StoredBlog): string {
  const a = b.article;
  return (
    a.coverImagePrompt ||
    `A high-quality, photorealistic blog cover image depicting ${a.coverImageQuery || a.title}. Warm, inviting mood with soft natural lighting and a modern color palette. Cinematic composition with shallow depth of field and clean negative space for a title overlay, 16:9. No text in the image except a small, subtle "subhsandesh.in" watermark in the bottom-right corner.`
  );
}

/** Tiny copy-to-clipboard button with transient "Copied!" feedback. */
function CopyBtn({
  text,
  label = "Copy",
  copiedLabel = "✓ Copied",
  className,
  style,
}: {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [done, setDone] = useState(false);
  const greenStyle: React.CSSProperties = {
    background: "rgba(46,204,113,0.16)",
    border: "1px solid rgba(46,204,113,0.45)",
    color: "var(--green)",
  };
  return (
    <button
      type="button"
      onClick={async (e) => {
        e.stopPropagation();
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1400);
        } catch {
          /* clipboard blocked — ignore */
        }
      }}
      className={className ?? "btn btn-ghost text-[11px] py-1 px-2"}
      style={done && style ? { ...style, ...greenStyle } : style}
      title={`Copy ${label.toLowerCase()}`}
    >
      {done ? copiedLabel : label}
    </button>
  );
}

/**
 * Dropdown-style multi-select for linked templates — looks like the Author /
 * Category <select> (a closed field showing the summary + chevron), but opens a
 * checkable list so multiple templates can be linked (manyToMany relatedTemplates).
 */
function TemplateDropdown({
  label,
  items,
  selectedIds,
  onChange,
  emptyHint,
}: {
  label: string;
  items: TemplateItem[];
  selectedIds: string[];
  onChange: (ids: string[]) => void;
  emptyHint?: string;
}) {
  const [open, setOpen] = useState(false);
  const selected = new Set(selectedIds);
  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onChange([...next]);
  };
  const summary =
    selectedIds.length === 0
      ? "— None —"
      : items.filter((i) => selected.has(i.documentId)).map((i) => i.name).join(", ");

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="label">{label}</label>
        {selectedIds.length > 0 && (
          <button type="button" className="text-[11px] text-[var(--blue)] hover:underline" onClick={() => onChange([])}>
            Clear ({selectedIds.length})
          </button>
        )}
      </div>
      <div className="relative">
        <button
          type="button"
          className="field flex items-center justify-between gap-2 w-full text-left"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="truncate" style={{ color: selectedIds.length ? "var(--text)" : "var(--muted)" }}>
            {summary}
          </span>
          <span className="shrink-0 text-[var(--muted)] text-xs">{open ? "▲" : "▼"}</span>
        </button>
        {open && (
          <>
            {/* click-away backdrop */}
            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
            <div
              className="absolute left-0 right-0 z-20 mt-1 max-h-56 overflow-y-auto rounded-lg p-1"
              style={{ background: "var(--panel)", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}
            >
              {items.length === 0 ? (
                <p className="text-[11px] text-[var(--muted)] p-2">{emptyHint || "No templates found."}</p>
              ) : (
                items.map((i) => {
                  const on = selected.has(i.documentId);
                  return (
                    <button
                      key={i.documentId}
                      type="button"
                      onClick={() => toggle(i.documentId)}
                      className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-left text-sm transition-colors"
                      style={{ background: on ? "rgba(108,99,255,0.14)" : "transparent", color: on ? "var(--accent-2)" : "var(--text)" }}
                      title={i.url || i.name}
                    >
                      <span
                        className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-bold"
                        style={on ? { background: "var(--accent)", color: "#fff" } : { border: "1.5px solid var(--border)" }}
                      >
                        {on ? "✓" : ""}
                      </span>
                      <span className="truncate">
                        {i.emoji ? `${i.emoji} ` : ""}
                        {i.name}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/**
 * Per-card "Connect" panel — pick author / category / linked templates and save
 * them to Strapi via the same onConnect handler the viewer uses. Local state is
 * seeded from the blog so edits are non-destructive until "Save" is clicked.
 */
function CardConnect({
  blog,
  categories,
  authors,
  templates,
  onConnect,
}: {
  blog: StoredBlog;
  categories: TaxonomyItem[];
  authors: TaxonomyItem[];
  templates: TemplateItem[];
  onConnect: (
    blogId: string,
    category: TaxonomyItem | null,
    author: TaxonomyItem | null,
    templates: TemplateItem[],
  ) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  const [catId, setCatId] = useState<string | undefined>(blog.categoryId);
  const [authId, setAuthId] = useState<string | undefined>(blog.authorId);
  const [tplIds, setTplIds] = useState<string[]>(blog.templateIds || []);
  const [state, setState] = useState<{ loading: boolean; ok?: boolean; msg: string }>({ loading: false, msg: "" });

  async function save() {
    setState({ loading: true, msg: "Saving to CMS…" });
    try {
      const cat = categories.find((c) => c.documentId === catId) || null;
      const auth = authors.find((x) => x.documentId === authId) || null;
      const tpls = templates.filter((t) => tplIds.includes(t.documentId));
      await onConnect(blog.id, cat, auth, tpls);
      setState({ loading: false, ok: true, msg: "Saved ✓ — connected in the CMS." });
    } catch (e) {
      setState({ loading: false, ok: false, msg: e instanceof Error ? e.message : "Save failed" });
    }
  }

  const tplCount = blog.templateIds?.length || 0;

  return (
    <div className="mb-3 rounded-xl" style={{ background: "var(--panel-2)", border: "1px solid var(--border-soft)" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-2 px-3 py-2.5 text-left"
      >
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--muted)]">
          🔗 Connect
        </span>
        <span className="flex items-center gap-1.5 min-w-0">
          <span className="text-[11px] text-[var(--text)] truncate max-w-[150px]">
            {blog.authorName || blog.categoryName || tplCount
              ? [blog.authorName, blog.categoryName, tplCount ? `${tplCount} tpl` : null].filter(Boolean).join(" · ")
              : "not connected"}
          </span>
          <span className="text-[var(--muted)] text-xs shrink-0">{open ? "▲" : "▼"}</span>
        </span>
      </button>
      {open && (
        <div className="px-3 pb-3 space-y-3 border-t" style={{ borderColor: "var(--border-soft)" }}>
          <div className="pt-3 space-y-3">
            <TaxonomySelect
              label="Author"
              items={authors}
              valueId={authId}
              onSelect={(i) => setAuthId(i?.documentId)}
              emptyHint="No authors found — create one in Strapi."
            />
            <TaxonomySelect
              label="Category"
              items={categories}
              valueId={catId}
              onSelect={(i) => setCatId(i?.documentId)}
              emptyHint="No categories found — create one in Strapi."
            />
            <TemplateDropdown
              label="Linked templates"
              items={templates}
              selectedIds={tplIds}
              onChange={(ids) => setTplIds(ids)}
              emptyHint="No templates found — create them in Strapi → Content Manager → Template."
            />
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="btn btn-primary text-xs py-1.5 px-3" disabled={state.loading} onClick={save}>
              {state.loading ? "Saving…" : "Save connection"}
            </button>
            {state.msg && (
              <span className="text-[10px]" style={{ color: state.ok ? "var(--green)" : state.loading ? "var(--muted)" : "var(--red)" }}>
                {state.msg}
              </span>
            )}
          </div>
          {!blog.documentId && (
            <p className="text-[10px] text-[var(--amber)]">Publish this blog first to save connections in Strapi.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function BlogLibrary({
  blogs,
  onOpen,
  onDelete,
  onClearAll,
  onSaveCover,
  categories = [],
  authors = [],
  templates = [],
  onConnect,
}: {
  blogs: StoredBlog[];
  onOpen: (id: string) => void;
  onDelete: (id: string) => void;
  onClearAll: () => void;
  /** Persist an uploaded cover URL (locally + to Strapi if published). */
  onSaveCover?: (blogId: string, coverImageUrl: string) => Promise<void>;
  categories?: TaxonomyItem[];
  authors?: TaxonomyItem[];
  templates?: TemplateItem[];
  /** Connect author / category / templates to a blog in Strapi. */
  onConnect?: (
    blogId: string,
    category: TaxonomyItem | null,
    author: TaxonomyItem | null,
    templates: TemplateItem[],
  ) => Promise<void>;
}) {
  const [sort, setSort] = useState<SortKey>("newest");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  // Per-card upload state, keyed by blog id.
  const [uploads, setUploads] = useState<Record<string, { loading: boolean; ok?: boolean; msg: string }>>({});
  const fileRefs = useRef<Record<string, HTMLInputElement | null>>({});

  async function handleFile(blog: StoredBlog, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow re-selecting the same file
    if (!file) return;
    setUploads((u) => ({ ...u, [blog.id]: { loading: true, msg: "Compressing & uploading…" } }));
    try {
      const url = await uploadCoverImage(file);
      if (onSaveCover) await onSaveCover(blog.id, url);
      setUploads((u) => ({
        ...u,
        [blog.id]: { loading: false, ok: true, msg: blog.documentId ? "Uploaded & live ✓" : "Uploaded ✓" },
      }));
    } catch (err) {
      setUploads((u) => ({
        ...u,
        [blog.id]: { loading: false, ok: false, msg: err instanceof Error ? err.message : "Upload failed" },
      }));
    }
  }

  const visible = useMemo(() => {
    const filtered = blogs.filter((b) => {
      if (statusFilter === "all") return true;
      if (statusFilter === "draft") return b.publishState !== "published";
      return b.publishState === "published";
    });
    // Sort by creation time (createdAt ISO). Fall back to 0 for malformed dates.
    const ts = (b: StoredBlog) => {
      const t = Date.parse(b.createdAt);
      return Number.isNaN(t) ? 0 : t;
    };
    return [...filtered].sort((a, b) => (sort === "newest" ? ts(b) - ts(a) : ts(a) - ts(b)));
  }, [blogs, sort, statusFilter]);

  if (blogs.length === 0) {
    return (
      <div className="card p-16 text-center">
        <div className="text-4xl mb-3">📚</div>
        <h3 className="text-base font-semibold mb-1">No blogs saved yet</h3>
        <p className="text-sm text-[var(--muted)] max-w-md mx-auto">
          Every article you generate is stored locally in your browser (IndexedDB). Generate some from the
          <span className="text-[var(--text)] font-medium"> Generate </span>
          tab and they&apos;ll appear here to read, copy, or delete.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-lg font-semibold">Blog Library</h2>
          <p className="text-xs text-[var(--muted)]">
            {visible.length === blogs.length
              ? `${blogs.length} saved locally in IndexedDB — click any card to read it.`
              : `Showing ${visible.length} of ${blogs.length} saved blogs.`}
          </p>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            if (confirm(`Delete ALL ${blogs.length} saved blogs from IndexedDB? This cannot be undone.`)) onClearAll();
          }}
        >
          🗑 Delete all
        </button>
      </div>

      {/* Sort + filter controls */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-[var(--muted)] uppercase tracking-wide">Sort</span>
          <select
            className="field w-auto py-1.5 text-xs"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-[var(--muted)] uppercase tracking-wide">Show</span>
          <div className="flex items-center gap-1 rounded-lg p-0.5" style={{ background: "var(--panel-2)", border: "1px solid var(--border)" }}>
            {(["all", "published", "draft"] as StatusFilter[]).map((f) => {
              const on = statusFilter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setStatusFilter(f)}
                  className="px-2.5 py-1 rounded-md text-xs font-medium capitalize transition-colors"
                  style={{
                    background: on ? "var(--accent)" : "transparent",
                    color: on ? "#fff" : "var(--muted)",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="card p-10 text-center text-sm text-[var(--muted)]">
          No blogs match this filter.
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {visible.map((b) => {
          const a = b.article;
          const coverUrl = b.coverImageUrl || a.coverImageUrl || "";
          const hasCover = !!coverUrl;
          const up = uploads[b.id];
          const prompt = coverPromptFor(b);
          return (
            <div key={b.id} className="card p-5 flex flex-col group hover:border-[var(--accent)] transition-colors relative">
              {/* Cover indicator (top-right) — read-only checkbox, auto-checked only when a cover exists */}
              <div
                className="absolute top-3 right-3 inline-flex items-center gap-1.5 select-none pointer-events-none"
                title={hasCover ? "Cover image uploaded" : "No cover image yet"}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: hasCover ? "var(--green)" : "var(--muted)" }}>
                  Cover
                </span>
                <span
                  className="inline-flex h-4 w-4 items-center justify-center rounded-md text-[10px] font-bold transition-colors"
                  style={
                    hasCover
                      ? { background: "var(--green)", color: "#08130c", border: "1px solid var(--green)" }
                      : { background: "transparent", color: "transparent", border: "1.5px solid var(--border)" }
                  }
                >
                  {hasCover ? "✓" : ""}
                </span>
              </div>
              <button onClick={() => onOpen(b.id)} className="text-left">
                <div className="flex items-center gap-2 mb-2 flex-wrap pr-20">
                  {b.publishState && (
                    <span
                      className="pill"
                      style={{
                        background: b.publishState === "published" ? "rgba(46,204,113,0.16)" : "rgba(245,166,35,0.16)",
                        color: b.publishState === "published" ? "var(--green)" : "var(--amber)",
                      }}
                    >
                      {b.publishState === "published" ? "Published" : "Draft"}
                    </span>
                  )}
                  <span className="text-[10px] text-[var(--muted)]">{fmt(b.createdAt)}</span>
                </div>
                <h3 className="font-semibold leading-snug mb-1.5 line-clamp-2 group-hover:text-[var(--accent-2)]">{a.title}</h3>
                <p className="text-xs text-[var(--muted)] line-clamp-2 mb-3">{a.excerpt}</p>
              </button>

              {/* ── Image prompt: copy out to your AI image generator (prompt text hidden) ── */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <CopyBtn
                  text={prompt}
                  label="🎨 Copy prompt"
                  copiedLabel="✓ Prompt copied"
                  className="rounded-xl py-2.5 text-xs font-semibold transition-colors"
                  style={{ background: "var(--panel-2)", border: "1px solid var(--border)", color: "var(--text)" }}
                />
                <CopyBtn
                  text={a.coverImageQuery || prompt}
                  label="🔎 Copy query"
                  copiedLabel="✓ Query copied"
                  className="rounded-xl py-2.5 text-xs font-semibold transition-colors"
                  style={{ background: "var(--panel-2)", border: "1px solid var(--border)", color: "var(--text)" }}
                />
              </div>

              {/* ── Cover upload / preview ── */}
              <div className="mb-3">
                <input
                  ref={(el) => {
                    fileRefs.current[b.id] = el;
                  }}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFile(b, e)}
                />
                {hasCover ? (
                  <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={coverUrl} alt="cover" className="h-12 w-12 rounded-lg object-cover shrink-0" style={{ border: "1px solid var(--border)" }} />
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <CopyBtn text={coverUrl} label="Copy URL" />
                      <button
                        type="button"
                        className="btn btn-ghost text-[11px] py-1 px-2"
                        disabled={up?.loading}
                        onClick={() => fileRefs.current[b.id]?.click()}
                      >
                        {up?.loading ? "Uploading…" : "Replace"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-ghost w-full text-xs py-2 border border-dashed"
                    style={{ borderColor: "var(--border)" }}
                    disabled={up?.loading}
                    onClick={() => fileRefs.current[b.id]?.click()}
                  >
                    {up?.loading ? "⏳ Uploading…" : "⬆ Upload cover image"}
                  </button>
                )}
                {up?.msg && (
                  <p className="text-[10px] mt-1.5" style={{ color: up.ok ? "var(--green)" : up.loading ? "var(--muted)" : "var(--red)" }}>
                    {up.msg}
                  </p>
                )}
              </div>

              {/* ── Connect: author / category / linked templates ── */}
              {onConnect && (
                <CardConnect
                  blog={b}
                  categories={categories}
                  authors={authors}
                  templates={templates}
                  onConnect={onConnect}
                />
              )}

              <div className="flex items-center justify-between gap-2 pt-3 border-t mt-auto" style={{ borderColor: "var(--border-soft)" }}>
                <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                  <span>{a.faqs.length} FAQs</span>
                  <span>·</span>
                  <span>{a.structuredData?.length || 0} JSON-LD</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button className="btn btn-ghost text-xs py-1.5 px-2.5" onClick={() => onOpen(b.id)}>
                    Read
                  </button>
                  <button
                    className="text-[var(--muted)] hover:text-[var(--red)] px-1.5"
                    title="Delete"
                    onClick={() => onDelete(b.id)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
}

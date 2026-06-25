"use client";

import { useMemo, useRef, useState } from "react";
import type { StoredBlog } from "@/app/lib/types";
import { uploadCoverImage } from "@/app/lib/client";

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
function CopyBtn({ text, label = "Copy", className }: { text: string; label?: string; className?: string }) {
  const [done, setDone] = useState(false);
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
      title={`Copy ${label.toLowerCase()}`}
    >
      {done ? "✓ Copied" : label}
    </button>
  );
}

export default function BlogLibrary({
  blogs,
  onOpen,
  onDelete,
  onClearAll,
  onSaveCover,
}: {
  blogs: StoredBlog[];
  onOpen: (id: string) => void;
  onDelete: (id: string) => void;
  onClearAll: () => void;
  /** Persist an uploaded cover URL (locally + to Strapi if published). */
  onSaveCover?: (blogId: string, coverImageUrl: string) => Promise<void>;
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
              {/* Cover-uploaded marker (top-right) — green check when a cover exists */}
              <span
                className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                title={hasCover ? "Cover image uploaded" : "No cover image yet"}
                style={
                  hasCover
                    ? { background: "rgba(46,204,113,0.16)", color: "var(--green)", border: "1px solid rgba(46,204,113,0.35)" }
                    : { background: "var(--panel-2)", color: "var(--muted)", border: "1px solid var(--border)" }
                }
              >
                {hasCover ? "✓ Cover" : "No cover"}
              </span>
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

              {/* ── Image prompt: copy it out to your AI image generator ── */}
              <div className="rounded-xl p-3 mb-3" style={{ background: "var(--panel-2)", border: "1px solid var(--border-soft)" }}>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--muted)]">🎨 Image prompt</span>
                  <CopyBtn text={prompt} label="Copy prompt" />
                </div>
                <p className="text-[11px] leading-relaxed text-[var(--muted)] line-clamp-3">{prompt}</p>
                {a.coverImageQuery && (
                  <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t" style={{ borderColor: "var(--border-soft)" }}>
                    <span className="text-[11px] text-[var(--text)] truncate" title={a.coverImageQuery}>
                      🔎 {a.coverImageQuery}
                    </span>
                    <CopyBtn text={a.coverImageQuery} label="Copy query" />
                  </div>
                )}
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

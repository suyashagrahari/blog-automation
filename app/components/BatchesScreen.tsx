"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  BatchBlogFile,
  BatchManifest,
  BatchWithBlogs,
  Settings,
  StoredBlog,
  TaxonomyItem,
  TemplateItem,
} from "@/app/lib/types";
import {
  batchBlogPublishState,
  resolveCategoryId,
  resolveTemplateIds,
  wordCount,
} from "@/app/lib/batches";
import { fetchBatch, fetchBatches, fetchPublishedSlugs, publishArticle } from "@/app/lib/client";
import { getProject, saveBlog, saveProject } from "@/app/lib/db";
import BlogViewer from "./BlogViewer";
import { TaxonomySelect } from "./SettingsPanel";

// ─────────────────────────────────────────────────────────────────────────────
// Batches — review and publish the posts Claude Code wrote into
// content/batches/ and committed to the repo.
//
// The published-lock is the live Strapi slug set, NOT local state: the user
// publishes from Vercel preview URLs that change per branch, so anything stored
// only in this browser would be invisible on the next deploy and the same post
// could go out twice. A slug that already exists in Strapi renders as published
// with its checkbox disabled.
// ─────────────────────────────────────────────────────────────────────────────

type StatusFilter = "all" | "unpublished" | "published";
type RowStatus = "idle" | "publishing" | "done" | "error";
interface RowState {
  status: RowStatus;
  error?: string;
  /** Non-fatal problems (category/template didn't resolve) — published anyway. */
  warning?: string;
}

const AMBER = "#f59e0b";

function fmt(iso: string): string {
  try {
    return new Date(iso).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

/** Compact segmented pill control, matching the Library toolbar. */
function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[11px] text-[var(--muted)] uppercase tracking-wide">{label}</span>
      <div
        className="flex items-center gap-1 rounded-lg p-0.5"
        style={{ background: "var(--panel-2)", border: "1px solid var(--border)" }}
      >
        {options.map((o) => {
          const on = value === o.value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              className="px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap"
              style={{ background: on ? "var(--accent)" : "transparent", color: on ? "#fff" : "var(--muted)" }}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Banner({ tone, children }: { tone: "warn" | "error"; children: React.ReactNode }) {
  const color = tone === "warn" ? AMBER : "var(--red)";
  return (
    <div
      className="rounded-xl px-4 py-3 text-sm"
      style={{ background: `color-mix(in srgb, ${color} 12%, transparent)`, border: `1px solid ${color}`, color }}
    >
      {children}
    </div>
  );
}

export default function BatchesScreen({
  settings,
  categories,
  authors,
  templates,
  onPublished,
}: {
  settings: Settings;
  categories: TaxonomyItem[];
  authors: TaxonomyItem[];
  templates: TemplateItem[];
  onPublished?: () => void;
}) {
  const [batches, setBatches] = useState<BatchManifest[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [batch, setBatch] = useState<BatchWithBlogs | null>(null);
  const [strapiSlugs, setStrapiSlugs] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [authorId, setAuthorId] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [rowState, setRowState] = useState<Record<string, RowState>>({});
  const [viewingSlug, setViewingSlug] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lockError, setLockError] = useState("");
  const [publishing, setPublishing] = useState(false);

  // ── load: batch list + the lock, independently ────────────────────────────
  // Deliberately tolerant of a Strapi failure — the batches still render, with
  // a loud banner saying nothing is locked, rather than a blank screen.
  const loadLock = useCallback(async () => {
    try {
      setStrapiSlugs(await fetchPublishedSlugs(settings));
      setLockError("");
    } catch (err) {
      setStrapiSlugs(new Set());
      setLockError(err instanceof Error ? err.message : "Could not reach Strapi");
    }
  }, [settings]);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    (async () => {
      const [list] = await Promise.allSettled([fetchBatches(), loadLock()]);
      if (!alive) return;
      if (list.status === "fulfilled") {
        setBatches(list.value);
        setError("");
      } else {
        setError(list.reason instanceof Error ? list.reason.message : "Failed to load batches");
      }
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [loadLock]);

  // ── open one batch ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!openId) {
      setBatch(null);
      return;
    }
    let alive = true;
    fetchBatch(openId)
      .then((b) => {
        if (!alive) return;
        setBatch(b);
        setSelected(new Set());
        setRowState({});
        setError("");
      })
      .catch((err) => alive && setError(err instanceof Error ? err.message : "Failed to load batch"));
    return () => {
      alive = false;
    };
  }, [openId]);

  const stateOf = useCallback(
    (slug: string) => batchBlogPublishState(slug, strapiSlugs),
    [strapiSlugs]
  );

  /** Per-blog resolved Strapi links + any warnings, computed once per render. */
  const resolved = useMemo(() => {
    const map = new Map<string, { categoryId?: string; categoryName?: string; templateIds: string[]; missing: string[] }>();
    for (const b of batch?.loaded || []) {
      const categoryId = resolveCategoryId(b.batchMeta.categorySlug, categories);
      const { ids, missing } = resolveTemplateIds(b.batchMeta.templateUrls, templates);
      map.set(b.article.slug, {
        categoryId,
        categoryName: categories.find((c) => c.documentId === categoryId)?.name,
        templateIds: ids,
        missing,
      });
    }
    return map;
  }, [batch, categories, templates]);

  const visible = useMemo(() => {
    const all = batch?.loaded || [];
    if (statusFilter === "all") return all;
    return all.filter((b) =>
      statusFilter === "published" ? stateOf(b.article.slug) === "published" : stateOf(b.article.slug) === "unpublished"
    );
  }, [batch, statusFilter, stateOf]);

  const unpublishedSlugs = useMemo(
    () => (batch?.loaded || []).filter((b) => stateOf(b.article.slug) === "unpublished").map((b) => b.article.slug),
    [batch, stateOf]
  );

  // ── publish ───────────────────────────────────────────────────────────────
  /**
   * Publish blogs one at a time.
   *
   * Sequential on purpose: /api/strapi retries slug collisions by appending
   * -2, -3…, and concurrent publishes would race that. A failure on one blog
   * never aborts the rest.
   */
  const publishBlogs = useCallback(
    async (blogs: BatchBlogFile[]) => {
      if (!batch || !blogs.length) return;
      setPublishing(true);

      for (const blog of blogs) {
        const slug = blog.article.slug;
        if (stateOf(slug) === "published") continue; // already spent

        setRowState((s) => ({ ...s, [slug]: { status: "publishing" } }));
        try {
          const links = resolved.get(slug);
          const warnings: string[] = [];
          if (blog.batchMeta.categorySlug && !links?.categoryId) {
            warnings.push(`category "${blog.batchMeta.categorySlug}" not found in Strapi`);
          }
          if (links?.missing.length) warnings.push(`templates not found: ${links.missing.join(", ")}`);

          const { documentId, publishState } = await publishArticle(settings, blog.article, {
            categoryId: links?.categoryId,
            authorId: authorId || undefined,
            templateIds: links?.templateIds,
          });

          // Mirror into IndexedDB so batch blogs also show up in Library. They
          // are grouped under a synthetic project so every existing
          // project-scoped query keeps working untouched.
          const projectId = `batch:${batch.id}`;
          if (!(await getProject(projectId))) {
            const now = new Date().toISOString();
            await saveProject({
              id: projectId,
              name: batch.name,
              description: `Claude Code batch — ${batch.keywords.length} keyword(s)`,
              type: "batch",
              createdAt: now,
              updatedAt: now,
            });
          }

          await saveBlog({
            id: `${projectId}::${slug}`,
            projectId,
            rowId: slug,
            keyword: blog.batchMeta.keyword,
            article: blog.article,
            provider: "anthropic",
            model: "claude-code",
            publishState,
            documentId,
            categoryId: links?.categoryId,
            categoryName: links?.categoryName,
            authorId: authorId || undefined,
            authorName: authors.find((a) => a.documentId === authorId)?.name,
            templateIds: links?.templateIds,
            templateNames: (links?.templateIds || []).map(
              (id) => templates.find((t) => t.documentId === id)?.name || id
            ),
            createdAt: new Date().toISOString(),
          });

          // Lock it immediately — no reload needed, and a second click is a no-op.
          setStrapiSlugs((prev) => new Set(prev).add(slug));
          setSelected((prev) => {
            const next = new Set(prev);
            next.delete(slug);
            return next;
          });
          setRowState((s) => ({
            ...s,
            [slug]: { status: "done", warning: warnings.length ? warnings.join("; ") : undefined },
          }));
          onPublished?.();
        } catch (err) {
          setRowState((s) => ({
            ...s,
            [slug]: { status: "error", error: err instanceof Error ? err.message : "Publish failed" },
          }));
        }
      }

      setPublishing(false);
    },
    [batch, resolved, settings, authorId, authors, templates, stateOf, onPublished]
  );

  const publishSelected = useCallback(() => {
    const blogs = (batch?.loaded || []).filter((b) => selected.has(b.article.slug));
    return publishBlogs(blogs);
  }, [batch, selected, publishBlogs]);

  // ── viewer ────────────────────────────────────────────────────────────────
  const viewing = useMemo(
    () => (batch?.loaded || []).find((b) => b.article.slug === viewingSlug) || null,
    [batch, viewingSlug]
  );

  /**
   * BlogViewer takes a StoredBlog. A batch blog isn't stored yet, so synthesize
   * the same shape for preview. Nothing here is persisted.
   */
  const viewingAsStored: StoredBlog | null = useMemo(() => {
    if (!viewing || !batch) return null;
    const slug = viewing.article.slug;
    const links = resolved.get(slug);
    return {
      id: `batch:${batch.id}::${slug}`,
      projectId: `batch:${batch.id}`,
      rowId: slug,
      keyword: viewing.batchMeta.keyword,
      article: viewing.article,
      provider: "anthropic",
      model: "claude-code",
      publishState: stateOf(slug) === "published" ? "published" : undefined,
      categoryId: links?.categoryId,
      categoryName: links?.categoryName,
      templateIds: links?.templateIds,
      createdAt: viewing.batchMeta.generatedAt,
    };
  }, [viewing, batch, resolved, stateOf]);

  if (viewing && viewingAsStored) {
    return (
      <BlogViewer
        blog={viewingAsStored}
        batchMeta={viewing.batchMeta}
        backLabel="← Back to batch"
        onBack={() => setViewingSlug(null)}
        categories={categories}
        authors={authors}
        templates={templates}
      />
    );
  }

  // ── batch list ────────────────────────────────────────────────────────────
  if (!openId) {
    return (
      <div className="space-y-4">
        {error && <Banner tone="error">{error}</Banner>}
        {lockError && (
          <Banner tone="warn">
            Couldn&apos;t read published slugs from Strapi ({lockError}). Nothing is locked, so publishing may create
            duplicates — fix the Strapi connection in Settings first.
          </Banner>
        )}

        {loading ? (
          <div className="card p-6 text-sm text-[var(--muted)]">Loading batches…</div>
        ) : batches.length === 0 ? (
          <div className="card p-6 space-y-2">
            <p className="text-sm font-medium">No batches yet</p>
            <p className="text-sm text-[var(--muted)]">
              Hand a few keywords to Claude Code and ask it to run the <code>subhsandesh-blog</code> skill. It writes
              each post to <code>content/batches/&lt;batch-id&gt;/blogs/&lt;slug&gt;.json</code> on a new branch. Once
              that branch is deployed, the batch appears here.
            </p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {batches.map((b) => (
              <button
                key={b.id}
                onClick={() => setOpenId(b.id)}
                className="card p-4 text-left hover:opacity-90 transition-opacity"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-semibold">{b.name}</span>
                  <span className="pill shrink-0" style={{ background: "rgba(108,99,255,0.18)", color: "var(--accent-2)" }}>
                    {b.blogs.length}
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-[var(--muted)]">{fmt(b.createdAt)}</div>
                <div className="mt-2 text-xs text-[var(--muted)] line-clamp-2">
                  {b.keywords.join(" · ") || "—"}
                </div>
                {b.branch && (
                  <div className="mt-2 text-[10px] font-mono text-[var(--muted)] truncate">{b.branch}</div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── batch detail ──────────────────────────────────────────────────────────
  const selectableCount = unpublishedSlugs.length;
  const selectedCount = selected.size;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-wrap">
        <button className="btn btn-ghost text-xs" onClick={() => setOpenId(null)}>
          ← All batches
        </button>
        {batch && (
          <>
            <span className="text-sm font-semibold">{batch.name}</span>
            <span className="text-[11px] text-[var(--muted)]">
              {batch.loaded.length} post{batch.loaded.length === 1 ? "" : "s"} ·{" "}
              {batch.loaded.length - selectableCount} published
            </span>
          </>
        )}
      </div>

      {error && <Banner tone="error">{error}</Banner>}
      {lockError && (
        <Banner tone="warn">
          Couldn&apos;t read published slugs from Strapi ({lockError}). Nothing is locked — fix Settings before
          publishing.
        </Banner>
      )}
      {batch && batch.skipped.length > 0 && (
        <Banner tone="warn">
          {batch.skipped.length} file{batch.skipped.length === 1 ? "" : "s"} skipped:{" "}
          {batch.skipped.map((s) => `${s.file} (${s.why})`).join("; ")}
        </Banner>
      )}

      {!batch ? (
        <div className="card p-6 text-sm text-[var(--muted)]">Loading batch…</div>
      ) : (
        <>
          {/* Toolbar */}
          <div className="card p-4 flex flex-wrap items-end gap-4">
            <div className="min-w-[220px]">
              <TaxonomySelect
                label="Author (applied to every post published from this batch)"
                items={authors}
                valueId={authorId || undefined}
                onSelect={(item) => setAuthorId(item?.documentId || "")}
                emptyHint="No authors found in Strapi."
              />
            </div>

            <Segmented
              label="Show"
              value={statusFilter}
              options={[
                { value: "all", label: "All" },
                { value: "unpublished", label: "Unpublished" },
                { value: "published", label: "Published" },
              ]}
              onChange={setStatusFilter}
            />

            <div className="flex items-center gap-2 ml-auto">
              <button
                className="btn btn-ghost text-xs"
                disabled={publishing || selectableCount === 0}
                onClick={() => setSelected(new Set(unpublishedSlugs))}
              >
                Select all unpublished ({selectableCount})
              </button>
              <button
                className="btn btn-ghost text-xs"
                disabled={publishing || selectedCount === 0}
                onClick={() => setSelected(new Set())}
              >
                Clear
              </button>
              <button
                className="btn text-xs"
                disabled={publishing || selectedCount === 0 || !settings.strapiUrl}
                onClick={publishSelected}
                title={!settings.strapiUrl ? "Set the Strapi URL in Settings first" : undefined}
              >
                {publishing ? "Publishing…" : `Publish selected (${selectedCount})`}
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wide text-[var(--muted)]">
                  <th className="px-3 py-2.5 w-9"></th>
                  <th className="px-3 py-2.5">Title</th>
                  <th className="px-3 py-2.5">Slug</th>
                  <th className="px-3 py-2.5 text-right">Words</th>
                  <th className="px-3 py-2.5 text-right">FAQs</th>
                  <th className="px-3 py-2.5">Category</th>
                  <th className="px-3 py-2.5">Templates</th>
                  <th className="px-3 py-2.5">Audit</th>
                  <th className="px-3 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((b) => {
                  const slug = b.article.slug;
                  const locked = stateOf(slug) === "published";
                  const links = resolved.get(slug);
                  const rs = rowState[slug];
                  const failed = b.batchMeta.auditReport.failed.length;
                  const faqs = b.article.faqs.length;
                  const faqOff = faqs < 8 || faqs > 12;

                  return (
                    <tr key={slug} className="border-t" style={{ borderColor: "var(--border)" }}>
                      <td className="px-3 py-2.5 align-top">
                        <input
                          type="checkbox"
                          disabled={locked || publishing}
                          checked={selected.has(slug)}
                          onChange={(e) =>
                            setSelected((prev) => {
                              const next = new Set(prev);
                              if (e.target.checked) next.add(slug);
                              else next.delete(slug);
                              return next;
                            })
                          }
                          title={locked ? "Already published — cannot be published again" : undefined}
                        />
                      </td>
                      <td className="px-3 py-2.5 align-top max-w-[300px]">
                        <button
                          className="text-left font-medium hover:underline"
                          style={{ color: "var(--accent-2)" }}
                          onClick={() => setViewingSlug(slug)}
                        >
                          {b.article.title}
                        </button>
                        <div className="text-[11px] text-[var(--muted)] truncate">{b.batchMeta.keyword}</div>
                      </td>
                      <td className="px-3 py-2.5 align-top font-mono text-[11px] text-[var(--muted)]">{slug}</td>
                      <td className="px-3 py-2.5 align-top text-right tabular-nums">
                        {wordCount(b.article.contentMarkdown)}
                      </td>
                      <td
                        className="px-3 py-2.5 align-top text-right tabular-nums"
                        style={faqOff ? { color: AMBER } : undefined}
                        title={faqOff ? "Target is 8–12 FAQs" : undefined}
                      >
                        {faqs}
                      </td>
                      <td className="px-3 py-2.5 align-top text-xs">
                        {links?.categoryName ? (
                          links.categoryName
                        ) : b.batchMeta.categorySlug ? (
                          <span style={{ color: AMBER }}>⚠ no match: {b.batchMeta.categorySlug}</span>
                        ) : (
                          <span className="text-[var(--muted)]">—</span>
                        )}
                      </td>
                      <td className="px-3 py-2.5 align-top text-xs">
                        {links?.templateIds.length || 0}
                        {links?.missing.length ? (
                          <span style={{ color: AMBER }}> ⚠ {links.missing.length} missing</span>
                        ) : null}
                      </td>
                      <td className="px-3 py-2.5 align-top text-xs">
                        {failed === 0 ? (
                          <span style={{ color: "var(--green)" }}>✓</span>
                        ) : (
                          <span style={{ color: AMBER }}>⚠ {failed}</span>
                        )}
                      </td>
                      <td className="px-3 py-2.5 align-top text-xs">
                        {rs?.status === "publishing" ? (
                          <span className="text-[var(--muted)]">Publishing…</span>
                        ) : locked ? (
                          <>
                            <span className="pill" style={{ background: "rgba(34,197,94,0.16)", color: "var(--green)" }}>
                              Published
                            </span>
                            {rs?.warning && (
                              <div className="mt-1 text-[11px]" style={{ color: AMBER }}>
                                {rs.warning}
                              </div>
                            )}
                          </>
                        ) : rs?.status === "error" ? (
                          <div className="space-y-1">
                            <div style={{ color: "var(--red)" }}>{rs.error}</div>
                            <button
                              className="btn btn-ghost text-[11px] py-1 px-2"
                              disabled={publishing}
                              onClick={() => publishBlogs([b])}
                            >
                              Retry
                            </button>
                          </div>
                        ) : (
                          <span className="text-[var(--muted)]">Not published</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
                {visible.length === 0 && (
                  <tr>
                    <td colSpan={9} className="px-3 py-6 text-center text-sm text-[var(--muted)]">
                      Nothing matches this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

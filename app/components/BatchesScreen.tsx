"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  BatchBlogEdit,
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
  changedFields,
  mergeBatchBlog,
  resolveCategoryId,
  resolveTemplateIds,
  wordCount,
} from "@/app/lib/batches";
import {
  fetchBatch,
  fetchBatches,
  fetchPublishedIndex,
  publishArticle,
  updateArticle,
} from "@/app/lib/client";
import {
  batchEditKey,
  deleteBatchEdit,
  getBatchEdits,
  getProject,
  saveBatchEdit,
  saveBlog,
  saveProject,
} from "@/app/lib/db";
import BlogViewer from "./BlogViewer";
import BatchBlogEditor, { type EditorDraft } from "./BatchBlogEditor";
import { TaxonomySelect, TemplateMultiSelect } from "./SettingsPanel";

// ─────────────────────────────────────────────────────────────────────────────
// Batches — review and publish the posts Claude Code wrote into
// content/batches/ and committed to the repo.
//
// The published-lock is the live Strapi slug set, NOT local state: the user
// publishes from Vercel preview URLs that change per branch, so anything stored
// only in this browser would be invisible on the next deploy and the same post
// could go out twice.
//
// The lock blocks a duplicate CREATE, not a deliberate UPDATE. A published post
// that has been edited here is selectable again, and pushing it PUTs over the
// existing Strapi document by documentId — which is why the lock is a
// slug → documentId map rather than a set of slugs. A published post with no
// edits stays disabled: there is nothing to push.
// ─────────────────────────────────────────────────────────────────────────────

type StatusFilter = "all" | "unpublished" | "published";
type RowStatus = "idle" | "publishing" | "done" | "error";
interface RowState {
  status: RowStatus;
  error?: string;
  /** Whether the successful push created the article or overwrote an existing one. */
  action?: "created" | "updated";
  /** Non-fatal problems (category/template didn't resolve) — published anyway. */
  warning?: string;
}

/** What one push attempt did, returned so a caller does not have to read state back. */
interface PushOutcome {
  action: "created" | "updated" | "failed";
  slug: string;
  error?: string;
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
  onReloadTaxonomy,
  taxonomyLoading,
  taxonomyError,
}: {
  settings: Settings;
  categories: TaxonomyItem[];
  authors: TaxonomyItem[];
  templates: TemplateItem[];
  onPublished?: () => void;
  /** Re-fetch categories/authors/templates from Strapi without a page reload. */
  onReloadTaxonomy?: () => void;
  taxonomyLoading?: boolean;
  taxonomyError?: string;
}) {
  const [batches, setBatches] = useState<BatchManifest[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  /**
   * The loaded batch, tagged with the id it was loaded for. Derived below rather
   * than cleared in an effect: tagging means a stale batch can never be rendered
   * under a newly-opened id, and it removes a setState-in-effect cascade.
   */
  const [loadedBatch, setLoadedBatch] = useState<{ id: string; data: BatchWithBlogs } | null>(null);
  /** slug → Strapi documentId for every article already in Strapi. */
  const [published, setPublished] = useState<Map<string, string>>(new Map());
  /** originalSlug → the user's saved edit for that blog. */
  const [edits, setEdits] = useState<Map<string, BatchBlogEdit>>(new Map());
  const [selected, setSelected] = useState<Set<string>>(new Set());
  // The three bulk pickers. `authorId` doubles as the batch-wide publish default
  // it already was, so a user who picks an author and pushes without pressing
  // Apply gets the behaviour this toolbar has always had.
  const [authorId, setAuthorId] = useState<string>("");
  const [bulkCategoryId, setBulkCategoryId] = useState<string>("");
  const [bulkTemplateIds, setBulkTemplateIds] = useState<string[]>([]);
  const [applyMsg, setApplyMsg] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [rowState, setRowState] = useState<Record<string, RowState>>({});
  const [viewingSlug, setViewingSlug] = useState<string | null>(null);
  /** Original slug of the blog open in the editor. */
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  const batch = loadedBatch && loadedBatch.id === openId ? loadedBatch.data : null;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lockError, setLockError] = useState("");
  const [publishing, setPublishing] = useState(false);

  // ── load: batch list + the lock, independently ────────────────────────────
  // Deliberately tolerant of a Strapi failure — the batches still render, with
  // a loud banner saying nothing is locked, rather than a blank screen.
  const loadLock = useCallback(async () => {
    try {
      setPublished(await fetchPublishedIndex(settings));
      setLockError("");
    } catch (err) {
      setPublished(new Map());
      setLockError(err instanceof Error ? err.message : "Could not reach Strapi");
    }
  }, [settings]);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
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
    if (!openId) return;
    const id = openId;
    let alive = true;
    Promise.all([fetchBatch(id), getBatchEdits(id)])
      .then(([b, e]) => {
        if (!alive) return;
        setLoadedBatch({ id, data: b });
        setEdits(e);
        setSelected(new Set());
        setRowState({});
        setError("");
      })
      .catch((err) => alive && setError(err instanceof Error ? err.message : "Failed to load batch"));
    return () => {
      alive = false;
    };
  }, [openId]);

  const publishedSlugs = useMemo(() => new Set(published.keys()), [published]);

  const stateOf = useCallback(
    (slug: string) => batchBlogPublishState(slug, publishedSlugs),
    [publishedSlugs]
  );

  /**
   * Every blog as it stands now — committed file with the user's edit laid over
   * it. Everything downstream (table, viewer, publish) reads this, so an edited
   * post is never published from its stale committed version.
   *
   * Keyed by ORIGINAL slug throughout, because the slug itself is editable and a
   * renamed post must still map back to the file it came from.
   */
  const effective = useMemo(
    () => (batch?.loaded || []).map((f) => mergeBatchBlog(f, edits.get(f.article.slug))),
    [batch, edits]
  );

  /** originalSlug → which fields the user changed. Drives the "edited" badge. */
  const changes = useMemo(() => {
    const m = new Map<string, string[]>();
    for (const f of batch?.loaded || []) {
      const c = changedFields(f, edits.get(f.article.slug));
      if (c.length) m.set(f.article.slug, c);
    }
    return m;
  }, [batch, edits]);

  /** The committed file for an original slug (the baseline the editor reverts to). */
  const fileOf = useCallback(
    (originalSlug: string) => (batch?.loaded || []).find((f) => f.article.slug === originalSlug),
    [batch]
  );

  /**
   * The Strapi documentId to update, for a blog identified by its original slug.
   *
   * Checks the edit record first (it remembers what this browser pushed, under
   * whatever slug it used at the time), then the live index by current slug, then
   * by original slug — that last one is what catches a post published before it
   * was renamed here.
   */
  const documentIdFor = useCallback(
    (originalSlug: string, currentSlug: string): string | undefined => {
      const e = edits.get(originalSlug);
      if (e?.documentId) return e.documentId;
      return published.get(currentSlug) || published.get(originalSlug) || undefined;
    },
    [edits, published]
  );

  /**
   * Has anything about this post changed since it was last pushed?
   *
   * `changedFields` only diffs the ARTICLE. A post whose author, category or
   * templates were changed — and nothing else — has plenty to send, and judging
   * it by article fields alone made the studio refuse to push exactly the change
   * the user had just made. So links count too, compared against what was
   * actually pushed (`pushedLinks`) rather than against the batch file, because
   * batchMeta has no author and resolves its own category.
   */
  const hasPendingChange = useCallback(
    (orig: string) => {
      const f = fileOf(orig);
      const e = edits.get(orig);
      if (!f || !e) return false;
      if (changedFields(f, e).length) return true;
      const before = e.pushedLinks;
      if (!before) return true; // links chosen but never pushed
      const sameTpl =
        (before.templateIds || []).length === (e.templateIds || []).length &&
        (before.templateIds || []).every((id, i) => id === (e.templateIds || [])[i]);
      return (
        before.categoryId !== e.categoryId || before.authorId !== e.authorId || !sameTpl
      );
    },
    [fileOf, edits]
  );

  /**
   * Can this blog be pushed? Unpublished always. Published only when something
   * has changed — that is the deliberate-update case, and it PUTs rather than
   * creating. The editor can still force a push past this (see `force`).
   */
  const pushable = useCallback(
    (f: BatchBlogFile) => {
      const orig = f.article.slug;
      const live = edits.get(orig)?.article.slug ?? orig;
      return stateOf(live) === "unpublished" || hasPendingChange(orig);
    },
    [edits, stateOf, hasPendingChange]
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

  /**
   * One row per blog, carrying everything the table and the publish loop need.
   *
   * `orig` is the identity used by every keyed structure in this component
   * (selection, row status, edits) precisely because `live` is editable. Mixing
   * the two is how a renamed post would lose its selection or its error message.
   */
  const rows = useMemo(
    () =>
      (batch?.loaded || []).map((file, i) => {
        const orig = file.article.slug;
        const blog = effective[i];
        const live = blog.article.slug;
        return {
          file,
          blog,
          orig,
          live,
          edited: changes.get(orig) || [],
          isPublished: stateOf(live) === "published",
          canPush: pushable(file),
        };
      }),
    [batch, effective, changes, stateOf, pushable]
  );

  const visible = useMemo(() => {
    if (statusFilter === "all") return rows;
    return rows.filter((r) => (statusFilter === "published" ? r.isPublished : !r.isPublished));
  }, [rows, statusFilter]);

  /** Original slugs of every row that can still be pushed (new, or edited-and-live). */
  const pushableSlugs = useMemo(() => rows.filter((r) => r.canPush).map((r) => r.orig), [rows]);

  // ── publish / update ──────────────────────────────────────────────────────
  /**
   * Push blogs to Strapi one at a time — creating new ones, overwriting ones
   * that are already live.
   *
   * Sequential on purpose: POST /api/strapi retries slug collisions by appending
   * -2, -3…, and concurrent publishes would race that. A failure on one blog
   * never aborts the rest.
   *
   * Takes ORIGINAL slugs rather than blog objects so a caller never has to work
   * out whether it holds the committed version or the edited one — this function
   * always resolves the current state itself.
   *
   * Returns the outcome per original slug. The editor needs to know whether its
   * push created or updated, and reading that back off `rowState` would race
   * React's commit — the returned map is the only synchronous answer.
   */
  const pushBySlug = useCallback(
    async (originalSlugs: string[]): Promise<Map<string, PushOutcome>> => {
      const outcomes = new Map<string, PushOutcome>();
      if (!batch || !originalSlugs.length) return outcomes;
      setPublishing(true);

      for (const orig of originalSlugs) {
        const file = fileOf(orig);
        if (!file) continue;
        const edit = edits.get(orig);
        const blog = mergeBatchBlog(file, edit);
        const slug = blog.article.slug;

        // No skipping. Every route into here is an explicit instruction — a row
        // the user ticked, a Retry they clicked, or the editor's own button — and
        // refusing those is what made the studio decline to push the very edit
        // that had just been made. Re-sending an unchanged post is harmless: it
        // PUTs the same values and revalidates the live page.
        //
        // Bulk safety lives in "Select all pushable" instead, which only preloads
        // rows that are new or actually changed.
        const docId = documentIdFor(orig, slug);
        const isUpdate = Boolean(docId);

        setRowState((s) => ({ ...s, [orig]: { status: "publishing" } }));
        try {
          const links = resolved.get(orig);
          const warnings: string[] = [];
          // An edit's own picks win over whatever batchMeta resolved to.
          const categoryId = edit?.categoryId ?? links?.categoryId;
          const templateIds = edit?.templateIds ?? links?.templateIds;
          const rowAuthorId = edit?.authorId || authorId || undefined;
          if (blog.batchMeta.categorySlug && !categoryId) {
            warnings.push(`category "${blog.batchMeta.categorySlug}" not found in Strapi`);
          }
          if (links?.missing.length) warnings.push(`templates not found: ${links.missing.join(", ")}`);

          const { documentId, publishState } = isUpdate
            ? await updateArticle(settings, docId as string, blog.article, {
                categoryId,
                authorId: rowAuthorId,
                templateIds,
              })
            : await publishArticle(settings, blog.article, {
                categoryId,
                authorId: rowAuthorId,
                templateIds,
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
            id: `${projectId}::${orig}`,
            projectId,
            rowId: orig,
            keyword: blog.batchMeta.keyword,
            article: blog.article,
            provider: "anthropic",
            model: "claude-code",
            publishState,
            documentId,
            categoryId,
            categoryName: categories.find((c) => c.documentId === categoryId)?.name,
            authorId: rowAuthorId,
            authorName: authors.find((a) => a.documentId === rowAuthorId)?.name,
            templateIds,
            templateNames: (templateIds || []).map(
              (id) => templates.find((t) => t.documentId === id)?.name || id
            ),
            createdAt: new Date().toISOString(),
          });

          // Remember the documentId against the edit record, so the NEXT push is
          // an update even after a reload — and even if the slug changes again.
          if (documentId) {
            const now = new Date().toISOString();
            const next: BatchBlogEdit = {
              id: batchEditKey(batch.id, orig),
              batchId: batch.id,
              originalSlug: orig,
              article: blog.article,
              categoryId,
              authorId: rowAuthorId,
              templateIds,
              documentId,
              publishState,
              publishedSlug: slug,
              pushedLinks: { categoryId, authorId: rowAuthorId, templateIds },
              createdAt: edit?.createdAt || now,
              updatedAt: now,
            };
            await saveBatchEdit(next);
            setEdits((prev) => new Map(prev).set(orig, next));
          }

          // Lock it immediately — no reload needed.
          setPublished((prev) => new Map(prev).set(slug, documentId || ""));
          setSelected((prev) => {
            const nextSel = new Set(prev);
            nextSel.delete(orig);
            return nextSel;
          });
          setRowState((s) => ({
            ...s,
            [orig]: {
              status: "done",
              action: isUpdate ? "updated" : "created",
              warning: warnings.length ? warnings.join("; ") : undefined,
            },
          }));
          outcomes.set(orig, { action: isUpdate ? "updated" : "created", slug });
          onPublished?.();
        } catch (err) {
          const message = err instanceof Error ? err.message : "Publish failed";
          setRowState((s) => ({ ...s, [orig]: { status: "error", error: message } }));
          outcomes.set(orig, { action: "failed", slug, error: message });
        }
      }

      setPublishing(false);
      return outcomes;
    },
    [
      batch,
      edits,
      fileOf,
      documentIdFor,
      resolved,
      settings,
      authorId,
      authors,
      categories,
      templates,
      onPublished,
    ]
  );

  const publishSelected = useCallback(
    () => pushBySlug(rows.filter((r) => selected.has(r.orig)).map((r) => r.orig)),
    [rows, selected, pushBySlug]
  );

  // ── editor ────────────────────────────────────────────────────────────────
  /** Persist the editor's draft as this blog's edit record. */
  const saveEdit = useCallback(
    async (orig: string, draft: EditorDraft, extra?: Partial<BatchBlogEdit>) => {
      if (!batch) return;
      const prev = edits.get(orig);
      const now = new Date().toISOString();
      const next: BatchBlogEdit = {
        id: batchEditKey(batch.id, orig),
        batchId: batch.id,
        originalSlug: orig,
        article: draft.article,
        categoryId: draft.categoryId,
        authorId: draft.authorId,
        templateIds: draft.templateIds,
        documentId: prev?.documentId,
        publishState: prev?.publishState,
        publishedSlug: prev?.publishedSlug,
        createdAt: prev?.createdAt || now,
        updatedAt: now,
        ...extra,
      };
      await saveBatchEdit(next);
      setEdits((m) => new Map(m).set(orig, next));
    },
    [batch, edits]
  );

  /**
   * Write the toolbar's author / category / template picks onto every selected
   * post.
   *
   * Only the fields actually chosen are written — an empty picker means "leave
   * this alone", not "clear it". Without that rule, setting a category in bulk
   * would wipe the templates off all ten posts.
   *
   * The article body is carried through untouched: this reuses each post's
   * current state (its edit if it has one, else the committed file), so applying
   * links never reverts someone's prose edits.
   */
  const applyToSelected = useCallback(async () => {
    if (!batch || !selected.size) return;
    const targets = rows.filter((r) => selected.has(r.orig));
    const parts: string[] = [];
    if (authorId) parts.push("author");
    if (bulkCategoryId) parts.push("category");
    if (bulkTemplateIds.length) parts.push(`${bulkTemplateIds.length} template(s)`);
    if (!parts.length) {
      setApplyMsg("Pick an author, a category or at least one template first.");
      return;
    }

    for (const r of targets) {
      await saveEdit(r.orig, {
        article: r.blog.article,
        categoryId: bulkCategoryId || edits.get(r.orig)?.categoryId || resolved.get(r.orig)?.categoryId,
        authorId: authorId || edits.get(r.orig)?.authorId,
        templateIds: bulkTemplateIds.length
          ? bulkTemplateIds
          : edits.get(r.orig)?.templateIds ?? resolved.get(r.orig)?.templateIds ?? [],
      });
    }
    setApplyMsg(
      `Applied ${parts.join(" + ")} to ${targets.length} post${targets.length === 1 ? "" : "s"}. Push them to send it to Strapi.`
    );
  }, [batch, selected, rows, authorId, bulkCategoryId, bulkTemplateIds, edits, resolved, saveEdit]);

  /** Throw the edit away; the committed file becomes the shown version again. */
  const revertEdit = useCallback(
    async (orig: string) => {
      if (!batch) return;
      await deleteBatchEdit(batch.id, orig);
      setEdits((m) => {
        const next = new Map(m);
        next.delete(orig);
        return next;
      });
      setRowState((st) => {
        const next = { ...st };
        delete next[orig];
        return next;
      });
    },
    [batch]
  );

  const editingRow = useMemo(
    () => rows.find((r) => r.orig === editingSlug) || null,
    [rows, editingSlug]
  );

  // ── viewer ────────────────────────────────────────────────────────────────
  const viewingRow = useMemo(
    () => rows.find((r) => r.orig === viewingSlug) || null,
    [rows, viewingSlug]
  );

  /**
   * BlogViewer takes a StoredBlog. A batch blog isn't stored yet, so synthesize
   * the same shape for preview — from the EDITED article, so the preview shows
   * what would actually be published. Nothing here is persisted.
   */
  const viewingAsStored: StoredBlog | null = useMemo(() => {
    if (!viewingRow || !batch) return null;
    const { orig, blog, live } = viewingRow;
    const edit = edits.get(orig);
    const links = resolved.get(orig);
    const categoryId = edit?.categoryId ?? links?.categoryId;
    return {
      id: `batch:${batch.id}::${orig}`,
      projectId: `batch:${batch.id}`,
      rowId: orig,
      keyword: blog.batchMeta.keyword,
      article: blog.article,
      provider: "anthropic",
      model: "claude-code",
      publishState: stateOf(live) === "published" ? "published" : undefined,
      documentId: documentIdFor(orig, live),
      categoryId,
      categoryName: categories.find((c) => c.documentId === categoryId)?.name,
      authorId: edit?.authorId,
      authorName: authors.find((a) => a.documentId === edit?.authorId)?.name,
      templateIds: edit?.templateIds ?? links?.templateIds,
      createdAt: blog.batchMeta.generatedAt,
    };
  }, [viewingRow, batch, edits, resolved, stateOf, documentIdFor, categories, authors]);

  // Both early returns live below every hook: a hook behind a conditional
  // return changes the hook order between renders, which React forbids.
  if (editingRow && batch) {
    const orig = editingRow.orig;
    return (
      <BatchBlogEditor
        file={editingRow.file}
        edit={edits.get(orig)}
        batchId={batch.id}
        siteUrl={settings.siteUrl}
        blogPathPrefix={settings.blogPathPrefix}
        categories={categories}
        authors={authors}
        templates={templates}
        resolvedCategoryId={resolved.get(orig)?.categoryId}
        resolvedTemplateIds={resolved.get(orig)?.templateIds}
        publishedDocumentId={documentIdFor(orig, editingRow.live)}
        onBack={() => setEditingSlug(null)}
        onSave={(draft) => saveEdit(orig, draft)}
        onRevert={() => revertEdit(orig)}
        onPush={async (draft) => {
          await saveEdit(orig, draft);
          const outcome = (await pushBySlug([orig])).get(orig);
          if (!outcome || outcome.action === "failed") {
            throw new Error(outcome?.error || "Publish failed");
          }
          return { action: outcome.action as "created" | "updated", slug: outcome.slug };
        }}
      />
    );
  }

  if (viewingRow && viewingAsStored) {
    return (
      <BlogViewer
        blog={viewingAsStored}
        batchMeta={viewingRow.blog.batchMeta}
        backLabel="← Back to batch"
        onBack={() => setViewingSlug(null)}
        categories={categories}
        authors={authors}
        templates={templates}
        editedFields={viewingRow.edited}
        onEdit={() => {
          setViewingSlug(null);
          setEditingSlug(viewingRow.orig);
        }}
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
  const selectableCount = pushableSlugs.length;
  const selectedCount = selected.size;
  const editedCount = changes.size;
  /** How many of the selected rows are updates rather than fresh publishes. */
  const selectedUpdates = rows.filter((r) => selected.has(r.orig) && r.isPublished).length;

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
              {rows.filter((r) => r.isPublished).length} published
              {editedCount > 0 && (
                <>
                  {" · "}
                  <span style={{ color: AMBER }}>{editedCount} edited locally</span>
                </>
              )}
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
          {/* Bulk Strapi links — the same three controls the Generate tab uses,
              scoped to whichever posts are ticked below. */}
          <div className="card p-4 space-y-4">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div>
                <h3 className="text-sm font-semibold">Strapi links</h3>
                <p className="text-[11px] text-[var(--muted)] mt-0.5">
                  Tick posts below, choose here, then Apply. An empty control is left alone rather than
                  cleared. Author also serves as the default for any post published from this batch
                  without one.
                </p>
              </div>
              {onReloadTaxonomy && (
                <button
                  type="button"
                  className="text-xs text-[var(--blue)] hover:underline disabled:opacity-50"
                  onClick={onReloadTaxonomy}
                  disabled={taxonomyLoading}
                  title="Re-fetch categories, authors and templates from Strapi"
                >
                  {taxonomyLoading ? "Loading…" : "↻ Reload from Strapi"}
                </button>
              )}
            </div>

            {taxonomyError && (
              <p className="text-xs" style={{ color: AMBER }}>
                {taxonomyError}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TaxonomySelect
                label="Author"
                items={authors}
                valueId={authorId || undefined}
                onSelect={(item) => setAuthorId(item?.documentId || "")}
                emptyHint="No authors found — create one in Strapi, then ↻ Reload."
              />
              <TaxonomySelect
                label="Category"
                items={categories}
                valueId={bulkCategoryId || undefined}
                onSelect={(item) => setBulkCategoryId(item?.documentId || "")}
                emptyHint="No categories found — create one in Strapi, then ↻ Reload."
              />
            </div>

            <TemplateMultiSelect
              label="Linked Templates (Create-a-surprise CTA)"
              items={templates}
              selectedIds={bulkTemplateIds}
              onChange={(ids) => setBulkTemplateIds(ids)}
              emptyHint="No templates found — create them in Strapi → Content Manager → Template, then ↻ Reload."
            />

            <div className="flex items-center gap-3 flex-wrap">
              <button
                className="btn btn-primary text-xs"
                disabled={publishing || selectedCount === 0}
                onClick={applyToSelected}
                title={
                  selectedCount === 0
                    ? "Tick at least one post below"
                    : `Write these links onto the ${selectedCount} selected post(s)`
                }
              >
                Apply to selected ({selectedCount})
              </button>
              {(authorId || bulkCategoryId || bulkTemplateIds.length > 0) && (
                <button
                  className="btn btn-ghost text-xs"
                  onClick={() => {
                    setAuthorId("");
                    setBulkCategoryId("");
                    setBulkTemplateIds([]);
                    setApplyMsg("");
                  }}
                >
                  Reset pickers
                </button>
              )}
              {applyMsg && (
                <span className="text-[11px]" style={{ color: "var(--green)" }}>
                  {applyMsg}
                </span>
              )}
            </div>
          </div>

          {/* Selection + publish toolbar */}
          <div className="card p-4 flex flex-wrap items-end gap-4">
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
                onClick={() => setSelected(new Set(pushableSlugs))}
                title="Everything not yet in Strapi, plus anything you have edited since it went live"
              >
                Select all pushable ({selectableCount})
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
                {publishing
                  ? "Pushing…"
                  : selectedUpdates === selectedCount && selectedCount > 0
                    ? `Update selected (${selectedCount})`
                    : selectedUpdates > 0
                      ? `Push selected (${selectedCount}, ${selectedUpdates} update${selectedUpdates === 1 ? "" : "s"})`
                      : `Publish selected (${selectedCount})`}
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
                  <th className="px-3 py-2.5 text-right">Edit</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((r) => {
                  const { orig, live, blog, edited, isPublished, canPush } = r;
                  const links = resolved.get(orig);
                  const edit = edits.get(orig);
                  const rs = rowState[orig];
                  const failed = blog.batchMeta.auditReport.failed.length;
                  const faqs = blog.article.faqs.length;
                  const faqOff = faqs < 8 || faqs > 12;
                  const renamed = live !== orig;
                  // An edit's own picks win over whatever batchMeta resolved to.
                  const catId = edit?.categoryId ?? links?.categoryId;
                  const catName = categories.find((c) => c.documentId === catId)?.name;
                  const tplIds = edit?.templateIds ?? links?.templateIds ?? [];

                  return (
                    <tr key={orig} className="border-t" style={{ borderColor: "var(--border)" }}>
                      <td className="px-3 py-2.5 align-top">
                        <input
                          type="checkbox"
                          disabled={publishing}
                          checked={selected.has(orig)}
                          onChange={(e) =>
                            setSelected((prev) => {
                              const next = new Set(prev);
                              if (e.target.checked) next.add(orig);
                              else next.delete(orig);
                              return next;
                            })
                          }
                          title={
                            isPublished
                              ? canPush
                                ? "Changed since it went live — pushing overwrites the Strapi article"
                                : "Already live. Ticking it re-sends the current version, which is harmless."
                              : undefined
                          }
                        />
                      </td>
                      <td className="px-3 py-2.5 align-top max-w-[300px]">
                        <button
                          className="text-left font-medium hover:underline"
                          style={{ color: "var(--accent-2)" }}
                          onClick={() => setViewingSlug(orig)}
                        >
                          {blog.article.title}
                        </button>
                        <div className="text-[11px] text-[var(--muted)] truncate">{blog.batchMeta.keyword}</div>
                        {edited.length > 0 && (
                          <div className="mt-1 flex items-center gap-1.5">
                            <span
                              className="pill text-[9px] px-1.5 py-0"
                              style={{ background: "rgba(245,158,11,0.16)", color: AMBER }}
                              title={`Edited locally: ${edited.join(", ")}`}
                            >
                              edited · {edited.length}
                            </span>
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2.5 align-top font-mono text-[11px] text-[var(--muted)]">
                        {live}
                        {renamed && (
                          <div className="text-[10px] line-through opacity-60" title="Original slug in the batch file">
                            {orig}
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2.5 align-top text-right tabular-nums">
                        {wordCount(blog.article.contentMarkdown)}
                      </td>
                      <td
                        className="px-3 py-2.5 align-top text-right tabular-nums"
                        style={faqOff ? { color: AMBER } : undefined}
                        title={faqOff ? "Target is 8–12 FAQs" : undefined}
                      >
                        {faqs}
                      </td>
                      <td className="px-3 py-2.5 align-top text-xs">
                        {catName ? (
                          catName
                        ) : blog.batchMeta.categorySlug ? (
                          <span style={{ color: AMBER }}>⚠ no match: {blog.batchMeta.categorySlug}</span>
                        ) : (
                          <span className="text-[var(--muted)]">—</span>
                        )}
                      </td>
                      <td className="px-3 py-2.5 align-top text-xs">
                        {tplIds.length}
                        {/* The warning is a fact about the batch FILE — some of its
                            templateUrls resolve to nothing in Strapi — so it stays
                            visible even once the user has picked templates by hand. */}
                        {links?.missing.length ? (
                          <span
                            style={{ color: AMBER }}
                            title={`Unresolved in the batch file: ${links.missing.join(", ")}`}
                          >
                            {" "}⚠ {links.missing.length} missing
                          </span>
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
                          <span className="text-[var(--muted)]">
                            {isPublished ? "Updating…" : "Publishing…"}
                          </span>
                        ) : rs?.status === "error" ? (
                          <div className="space-y-1">
                            <div style={{ color: "var(--red)" }}>{rs.error}</div>
                            <button
                              className="btn btn-ghost text-[11px] py-1 px-2"
                              disabled={publishing}
                              onClick={() => pushBySlug([orig])}
                            >
                              Retry
                            </button>
                          </div>
                        ) : isPublished ? (
                          <>
                            <span className="pill" style={{ background: "rgba(34,197,94,0.16)", color: "var(--green)" }}>
                              {rs?.action === "updated" ? "Updated" : "Published"}
                            </span>
                            {canPush && (
                              <div className="mt-1 text-[11px]" style={{ color: AMBER }}>
                                edits not pushed yet
                              </div>
                            )}
                            {rs?.warning && (
                              <div className="mt-1 text-[11px]" style={{ color: AMBER }}>
                                {rs.warning}
                              </div>
                            )}
                          </>
                        ) : (
                          <span className="text-[var(--muted)]">Not published</span>
                        )}
                      </td>
                      <td className="px-3 py-2.5 align-top text-right">
                        <button
                          className="btn btn-ghost text-[11px] py-1 px-2 whitespace-nowrap"
                          onClick={() => setEditingSlug(orig)}
                          title="Edit the content, the link, and the Strapi author / category / templates"
                        >
                          ✏️ Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {visible.length === 0 && (
                  <tr>
                    <td colSpan={10} className="px-3 py-6 text-center text-sm text-[var(--muted)]">
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

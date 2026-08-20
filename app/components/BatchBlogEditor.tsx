"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { marked } from "marked";
import type {
  BatchBlogEdit,
  BatchBlogFile,
  GeneratedArticle,
  TaxonomyItem,
  TemplateItem,
} from "@/app/lib/types";
import { changedFields, normaliseSlug, recanonicalise, wordCount } from "@/app/lib/batches";
import { TaxonomySelect, TemplateMultiSelect } from "./SettingsPanel";

// ─────────────────────────────────────────────────────────────────────────────
// Edit one batch blog: its content, its URL, and the Strapi relations it
// publishes into.
//
// The committed file under content/batches/ is the baseline and is never
// mutated — that filesystem is read-only in the deployed studio, and keeping it
// pristine is what makes "revert to original" possible at any point, including
// after publishing. Edits live in IndexedDB (see BatchBlogEdit).
//
// Draft state is local to this component and only leaves it on Save. That is
// deliberate: typing in a 1,800-word textarea should not re-render the batch
// table or write to IndexedDB on every keystroke.
// ─────────────────────────────────────────────────────────────────────────────

const AMBER = "#f59e0b";

/** Everything the editor can change, in one flat object. */
export interface EditorDraft {
  article: GeneratedArticle;
  categoryId?: string;
  authorId?: string;
  templateIds: string[];
}

function Row({
  label,
  changed,
  onRevert,
  note,
  children,
}: {
  label: string;
  changed?: boolean;
  onRevert?: () => void;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-1">
        <label className="label mb-0 flex items-center gap-1.5">
          {label}
          {changed && (
            <span
              className="pill text-[9px] px-1.5 py-0"
              style={{ background: "rgba(245,158,11,0.16)", color: AMBER }}
              title="Differs from the committed file"
            >
              edited
            </span>
          )}
        </label>
        <div className="flex items-center gap-2">
          {note && <span className="text-[10px] text-[var(--muted)]">{note}</span>}
          {changed && onRevert && (
            <button
              type="button"
              className="text-[10px] text-[var(--muted)] hover:text-[var(--text)] underline"
              onClick={onRevert}
            >
              revert
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

/** Comma-separated string ⇄ string[], so tags stay a normal text input. */
const joinList = (xs: string[]) => xs.join(", ");
const splitList = (s: string) =>
  s
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);

export default function BatchBlogEditor({
  file,
  edit,
  batchId,
  siteUrl,
  blogPathPrefix,
  categories,
  authors,
  templates,
  resolvedCategoryId,
  resolvedTemplateIds,
  publishedDocumentId,
  onBack,
  onSave,
  onRevert,
  onPush,
}: {
  /** The committed file — the baseline every "revert" returns to. */
  file: BatchBlogFile;
  /** The saved edit, if one exists. */
  edit?: BatchBlogEdit;
  batchId: string;
  siteUrl: string;
  blogPathPrefix: string;
  categories: TaxonomyItem[];
  authors: TaxonomyItem[];
  templates: TemplateItem[];
  /** Category the batch file's own `categorySlug` resolved to, used as the default. */
  resolvedCategoryId?: string;
  /**
   * Templates the batch file's own `templateUrls` resolved to, used as the
   * default. Must be passed: if this defaulted to [] instead, the first save of
   * ANY edit would write an empty template set and silently unlink the templates
   * the batch had chosen, without the user ever opening the picker.
   */
  resolvedTemplateIds?: string[];
  /** Strapi documentId if this slug is already live — makes the push an update. */
  publishedDocumentId?: string;
  onBack: () => void;
  onSave: (draft: EditorDraft) => Promise<void>;
  onRevert: () => Promise<void>;
  /** Save, then create-or-update in Strapi. Resolves with what happened. */
  onPush: (draft: EditorDraft) => Promise<{ action: "created" | "updated"; slug: string }>;
}) {
  const baseline = file.article;
  const current = edit?.article ?? baseline;

  const [article, setArticle] = useState<GeneratedArticle>(current);
  const [categoryId, setCategoryId] = useState<string | undefined>(
    edit?.categoryId ?? resolvedCategoryId
  );
  const [authorId, setAuthorId] = useState<string | undefined>(edit?.authorId);
  const [templateIds, setTemplateIds] = useState<string[]>(
    edit?.templateIds ?? resolvedTemplateIds ?? []
  );

  const [tagsText, setTagsText] = useState(joinList(current.tags || []));
  const [preview, setPreview] = useState(false);
  const [busy, setBusy] = useState<"" | "saving" | "pushing" | "reverting">("");
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);

  // Reset every field when the editor is pointed at a different blog. Without
  // this, opening a second post would keep the first one's draft in state.
  const key = `${batchId}::${file.article.slug}`;
  const lastKey = useRef(key);
  useEffect(() => {
    if (lastKey.current === key) return;
    lastKey.current = key;
    setArticle(current);
    setCategoryId(edit?.categoryId ?? resolvedCategoryId);
    setAuthorId(edit?.authorId);
    setTemplateIds(edit?.templateIds ?? resolvedTemplateIds ?? []);
    setTagsText(joinList(current.tags || []));
    setMsg(null);
  }, [key, current, edit, resolvedCategoryId, resolvedTemplateIds]);

  const set = <K extends keyof GeneratedArticle>(k: K, v: GeneratedArticle[K]) =>
    setArticle((a) => ({ ...a, [k]: v }));

  /**
   * Editing the slug is editing the article's URL, so the canonical has to
   * follow it. A canonical still pointing at the old path tells Google this post
   * duplicates a URL that no longer exists.
   */
  const setSlug = (raw: string) =>
    setArticle((a) => ({
      ...a,
      slug: raw,
      canonicalURL: recanonicalise(a.canonicalURL, a.slug, raw),
    }));

  const draft: EditorDraft = useMemo(
    () => ({ article: { ...article, tags: splitList(tagsText) }, categoryId, authorId, templateIds }),
    [article, tagsText, categoryId, authorId, templateIds]
  );

  // "Changed" marks are always measured against the committed file, never
  // against the last save — so the badge answers "how does this differ from what
  // Claude Code wrote", which is the question a reviewer actually has.
  const changed = useMemo(
    () =>
      new Set(
        changedFields(file, {
          id: key,
          batchId,
          originalSlug: file.article.slug,
          article: draft.article,
          createdAt: "",
          updatedAt: "",
        })
      ),
    [file, draft.article, key, batchId]
  );

  const slugClean = normaliseSlug(article.slug);
  const slugDirty = slugClean !== article.slug;
  const words = wordCount(article.contentMarkdown || "");
  const plainWords = (article.contentMarkdown || "").trim().split(/\s+/).filter(Boolean).length;

  const html = useMemo(() => {
    try {
      return marked.parse(article.contentMarkdown || "", { gfm: true, breaks: false }) as string;
    } catch {
      return `<pre>${article.contentMarkdown || ""}</pre>`;
    }
  }, [article.contentMarkdown]);

  const liveUrl = `${siteUrl.replace(/\/+$/, "")}${blogPathPrefix}/${slugClean || "…"}`;

  async function run(kind: "saving" | "pushing" | "reverting", fn: () => Promise<string>) {
    setBusy(kind);
    setMsg(null);
    try {
      setMsg({ text: await fn(), ok: true });
    } catch (err) {
      setMsg({ text: err instanceof Error ? err.message : "Failed", ok: false });
    } finally {
      setBusy("");
    }
  }

  /** Normalise the slug before anything is persisted or pushed. */
  const normalisedDraft = (): EditorDraft => ({
    ...draft,
    article: { ...draft.article, slug: slugClean },
  });

  const downloadJson = () => {
    const payload: BatchBlogFile = { ...file, article: normalisedDraft().article };
    const blob = new Blob([JSON.stringify(payload, null, 2) + "\n"], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slugClean || file.article.slug}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const hasEdits = changed.size > 0;
  const willUpdate = Boolean(publishedDocumentId || edit?.documentId);

  return (
    <div className="space-y-5">
      {/* Action bar */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <button className="btn btn-ghost" onClick={onBack} disabled={Boolean(busy)}>
          ← Back to batch
        </button>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <button
            className="btn btn-ghost text-xs"
            onClick={downloadJson}
            title="Download the edited batch file so it can be committed to the repo permanently"
          >
            ⬇ Download JSON
          </button>
          {edit && (
            <button
              className="btn btn-ghost text-xs"
              disabled={Boolean(busy)}
              onClick={() =>
                run("reverting", async () => {
                  await onRevert();
                  setArticle(baseline);
                  setTagsText(joinList(baseline.tags || []));
                  return "Reverted to the committed file.";
                })
              }
            >
              ↺ Revert to original
            </button>
          )}
          <button
            className="btn"
            disabled={Boolean(busy)}
            onClick={() => run("saving", async () => {
              await onSave(normalisedDraft());
              return "Saved.";
            })}
          >
            {busy === "saving" ? "Saving…" : "💾 Save"}
          </button>
          <button
            className="btn btn-primary"
            disabled={Boolean(busy) || !slugClean}
            onClick={() =>
              run("pushing", async () => {
                const r = await onPush(normalisedDraft());
                return r.action === "updated"
                  ? `Updated /${r.slug} in Strapi — the live page revalidates on its own.`
                  : `Published /${r.slug} to Strapi.`;
              })
            }
            title={
              willUpdate
                ? "Overwrites the existing Strapi article — no duplicate is created"
                : "Creates the article in Strapi"
            }
          >
            {busy === "pushing"
              ? willUpdate
                ? "Updating…"
                : "Publishing…"
              : willUpdate
                ? "⟳ Save & update in Strapi"
                : "↑ Save & publish to Strapi"}
          </button>
        </div>
      </div>

      {msg && (
        <div
          className="rounded-xl px-4 py-3 text-sm"
          style={{
            background: `color-mix(in srgb, ${msg.ok ? "var(--green)" : "var(--red)"} 12%, transparent)`,
            border: `1px solid ${msg.ok ? "var(--green)" : "var(--red)"}`,
            color: msg.ok ? "var(--green)" : "var(--red)",
          }}
        >
          {msg.text}
        </div>
      )}

      {/* Where the edit lives — stated plainly, because it is not obvious. */}
      <div className="card p-4 text-xs text-[var(--muted)] space-y-1">
        <p>
          Edits are stored in <strong className="text-[var(--text)]">this browser</strong>, not in the
          committed batch file — the studio&apos;s filesystem is read-only when deployed. Publishing sends
          the edited version to Strapi, so the live post is always what you see here.
        </p>
        <p>
          To make an edit permanent for everyone, use{" "}
          <strong className="text-[var(--text)]">Download JSON</strong> and commit it over{" "}
          <code>content/batches/{batchId}/blogs/{file.article.slug}.json</code>.
        </p>
      </div>

      {/* ── Identity: title, link, excerpt ─────────────────────────────────── */}
      <div className="card p-5 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold">Article</h3>
          <span className="text-[11px] text-[var(--muted)]">
            {hasEdits ? `${changed.size} field${changed.size === 1 ? "" : "s"} edited` : "Unchanged"}
          </span>
        </div>

        <Row
          label="Title"
          changed={changed.has("title")}
          onRevert={() => set("title", baseline.title)}
          note={`${article.title.length} chars`}
        >
          <input className="field" value={article.title} onChange={(e) => set("title", e.target.value)} />
        </Row>

        <Row
          label="Slug (the link)"
          changed={changed.has("slug")}
          onRevert={() => setSlug(baseline.slug)}
        >
          <input
            className="field font-mono text-xs"
            value={article.slug}
            onChange={(e) => setSlug(e.target.value)}
            spellCheck={false}
          />
          <p className="mt-1.5 text-[11px] text-[var(--muted)] break-all">
            → <span style={{ color: "var(--accent-2)" }}>{liveUrl}</span>
          </p>
          {slugDirty && (
            <p className="mt-1 text-[11px]" style={{ color: AMBER }}>
              Will be saved as <code>{slugClean || "(empty)"}</code> — Strapi slugs allow only lowercase
              letters, numbers and hyphens.
            </p>
          )}
          {willUpdate && changed.has("slug") && (
            <p className="mt-1 text-[11px]" style={{ color: AMBER }}>
              This post is already live at <code>{edit?.publishedSlug || baseline.slug}</code>. Updating
              changes its URL — the old one will 404 unless you add a redirect.
            </p>
          )}
        </Row>

        <Row
          label="Canonical URL"
          changed={changed.has("canonicalURL")}
          onRevert={() => set("canonicalURL", baseline.canonicalURL)}
        >
          <input
            className="field font-mono text-xs"
            value={article.canonicalURL || ""}
            onChange={(e) => set("canonicalURL", e.target.value)}
            placeholder={liveUrl}
            spellCheck={false}
          />
        </Row>

        <Row
          label="Excerpt"
          changed={changed.has("excerpt")}
          onRevert={() => set("excerpt", baseline.excerpt)}
          note={`${article.excerpt.length}/300`}
        >
          <textarea
            className="field resize-y"
            rows={3}
            value={article.excerpt}
            onChange={(e) => set("excerpt", e.target.value)}
          />
        </Row>

        <Row label="Tags" changed={changed.has("tags")} onRevert={() => setTagsText(joinList(baseline.tags || []))}>
          <input
            className="field"
            value={tagsText}
            onChange={(e) => setTagsText(e.target.value)}
            placeholder="comma, separated, tags"
          />
        </Row>
      </div>

      {/* ── Body ───────────────────────────────────────────────────────────── */}
      <div className="card p-5 space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h3 className="text-sm font-semibold flex items-center gap-1.5">
            Body (Markdown)
            {changed.has("contentMarkdown") && (
              <span className="pill text-[9px] px-1.5 py-0" style={{ background: "rgba(245,158,11,0.16)", color: AMBER }}>
                edited
              </span>
            )}
          </h3>
          <div className="flex items-center gap-3">
            <span
              className="text-[11px] tabular-nums"
              style={{ color: plainWords < 1500 || plainWords > 1800 ? AMBER : "var(--muted)" }}
              title="First number: the plain whitespace split, which is the measure the skill's 1,500–1,800 band uses, and it turns amber outside that band. Second: the batch table's own count, which strips Markdown punctuation to spaces and so splits hyphenated words into several — it reads higher, and is shown only so the two views reconcile."
            >
              {plainWords.toLocaleString()} words · {words.toLocaleString()} in table
            </span>
            {changed.has("contentMarkdown") && (
              <button
                type="button"
                className="text-[10px] text-[var(--muted)] hover:text-[var(--text)] underline"
                onClick={() => set("contentMarkdown", baseline.contentMarkdown)}
              >
                revert
              </button>
            )}
            <div
              className="flex items-center gap-1 rounded-lg p-0.5"
              style={{ background: "var(--panel-2)", border: "1px solid var(--border)" }}
            >
              {[
                { v: false, l: "Edit" },
                { v: true, l: "Preview" },
              ].map((o) => (
                <button
                  key={o.l}
                  type="button"
                  onClick={() => setPreview(o.v)}
                  className="px-2.5 py-1 rounded-md text-xs font-medium transition-colors"
                  style={{
                    background: preview === o.v ? "var(--accent)" : "transparent",
                    color: preview === o.v ? "#fff" : "var(--muted)",
                  }}
                >
                  {o.l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {preview ? (
          <div className="prose-blog" dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <textarea
            className="field font-mono resize-y"
            style={{ minHeight: "60vh", lineHeight: 1.7, fontSize: "0.8125rem" }}
            value={article.contentMarkdown}
            onChange={(e) => set("contentMarkdown", e.target.value)}
            spellCheck={false}
          />
        )}
        <p className="text-[11px] text-[var(--muted)]">
          FAQs belong in the FAQs section below, never in the body — the live page renders them from the
          separate field, so a copy here would show up twice.
        </p>
      </div>

      {/* ── Key takeaways ──────────────────────────────────────────────────── */}
      <ListEditor
        title="Key Takeaways (GEO TL;DR)"
        items={article.keyTakeaways}
        changed={changed.has("keyTakeaways")}
        onRevert={() => set("keyTakeaways", baseline.keyTakeaways)}
        onChange={(v) => set("keyTakeaways", v)}
        placeholder="One self-contained sentence an answer engine could quote…"
      />

      {/* ── FAQs ───────────────────────────────────────────────────────────── */}
      <div className="card p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold flex items-center gap-1.5">
            FAQs
            <span
              className="pill text-[10px]"
              style={{
                background: "var(--panel-2)",
                color: article.faqs.length < 8 || article.faqs.length > 12 ? AMBER : "var(--muted)",
              }}
              title="The skill targets 8–12"
            >
              {article.faqs.length}
            </span>
            {changed.has("faqs") && (
              <span className="pill text-[9px] px-1.5 py-0" style={{ background: "rgba(245,158,11,0.16)", color: AMBER }}>
                edited
              </span>
            )}
          </h3>
          <div className="flex items-center gap-2">
            {changed.has("faqs") && (
              <button
                type="button"
                className="text-[10px] text-[var(--muted)] hover:text-[var(--text)] underline"
                onClick={() => set("faqs", baseline.faqs)}
              >
                revert
              </button>
            )}
            <button
              type="button"
              className="btn btn-ghost text-xs py-1 px-2"
              onClick={() => set("faqs", [...article.faqs, { question: "", answer: "" }])}
            >
              + Add FAQ
            </button>
          </div>
        </div>

        {article.faqs.length === 0 && (
          <p className="text-xs text-[var(--muted)]">No FAQs — the post loses its FAQPage rich result.</p>
        )}

        {article.faqs.map((f, i) => (
          <div
            key={i}
            className="rounded-lg p-3 space-y-2"
            style={{ background: "var(--panel-2)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[var(--muted)] tabular-nums w-5">{i + 1}.</span>
              <input
                className="field text-xs"
                value={f.question}
                placeholder="Question"
                onChange={(e) =>
                  set(
                    "faqs",
                    article.faqs.map((x, j) => (j === i ? { ...x, question: e.target.value } : x))
                  )
                }
              />
              <button
                type="button"
                className="btn btn-ghost text-xs py-1 px-2 shrink-0"
                title="Remove this FAQ"
                onClick={() => set("faqs", article.faqs.filter((_, j) => j !== i))}
              >
                ✕
              </button>
            </div>
            <textarea
              className="field text-xs resize-y ml-7"
              style={{ width: "calc(100% - 1.75rem)" }}
              rows={2}
              value={f.answer}
              placeholder="Answer"
              onChange={(e) =>
                set(
                  "faqs",
                  article.faqs.map((x, j) => (j === i ? { ...x, answer: e.target.value } : x))
                )
              }
            />
          </div>
        ))}
      </div>

      {/* ── SEO meta ───────────────────────────────────────────────────────── */}
      <div className="card p-5 space-y-4">
        <h3 className="text-sm font-semibold">SEO Meta</h3>
        <Row
          label="Meta Title"
          changed={changed.has("metaTitle")}
          onRevert={() => set("metaTitle", baseline.metaTitle)}
          note={`${article.metaTitle.length}/70`}
        >
          <input className="field" value={article.metaTitle} onChange={(e) => set("metaTitle", e.target.value)} />
        </Row>
        <Row
          label="Meta Description"
          changed={changed.has("metaDescription")}
          onRevert={() => set("metaDescription", baseline.metaDescription)}
          note={`${article.metaDescription.length}/170`}
        >
          <textarea
            className="field resize-y"
            rows={2}
            value={article.metaDescription}
            onChange={(e) => set("metaDescription", e.target.value)}
          />
        </Row>
        <Row
          label="Keywords"
          changed={changed.has("keywords")}
          onRevert={() => set("keywords", baseline.keywords)}
        >
          <input className="field" value={article.keywords} onChange={(e) => set("keywords", e.target.value)} />
        </Row>
        <Row label="OG Type" changed={changed.has("ogType")} onRevert={() => set("ogType", baseline.ogType)}>
          <input
            className="field"
            value={article.ogType || "article"}
            onChange={(e) => set("ogType", e.target.value)}
          />
        </Row>
      </div>

      {/* ── Strapi relations ───────────────────────────────────────────────── */}
      <div className="card p-5 space-y-4">
        <div>
          <h3 className="text-sm font-semibold">Strapi links</h3>
          <p className="text-xs text-[var(--muted)] mt-1">
            Applied when this post is published or updated. The category defaults to whatever this batch
            file&apos;s <code>categorySlug</code> resolved to; anything you pick here wins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TaxonomySelect
            label="Author"
            items={authors}
            valueId={authorId}
            onSelect={(i) => setAuthorId(i?.documentId)}
            emptyHint="No authors found — create one in Strapi."
          />
          <TaxonomySelect
            label="Category"
            items={categories}
            valueId={categoryId}
            onSelect={(i) => setCategoryId(i?.documentId)}
            emptyHint="No categories found — create one in Strapi."
          />
        </div>
        <TemplateMultiSelect
          label="Linked Templates (Create-a-surprise CTA)"
          items={templates}
          selectedIds={templateIds}
          onChange={(ids) => setTemplateIds(ids)}
          emptyHint="No templates found — create them in Strapi → Content Manager → Template."
        />
        <p className="text-[11px] text-[var(--muted)]">
          None = the post shows all templates; one = links straight to it; several = opens a focused picker.
        </p>
      </div>
    </div>
  );
}

/** A reorderable-free list of plain strings (key takeaways). */
function ListEditor({
  title,
  items,
  changed,
  onChange,
  onRevert,
  placeholder,
}: {
  title: string;
  items: string[];
  changed?: boolean;
  onChange: (v: string[]) => void;
  onRevert: () => void;
  placeholder?: string;
}) {
  return (
    <div className="card p-5 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold flex items-center gap-1.5">
          {title}
          <span className="pill text-[10px]" style={{ background: "var(--panel-2)", color: "var(--muted)" }}>
            {items.length}
          </span>
          {changed && (
            <span className="pill text-[9px] px-1.5 py-0" style={{ background: "rgba(245,158,11,0.16)", color: AMBER }}>
              edited
            </span>
          )}
        </h3>
        <div className="flex items-center gap-2">
          {changed && (
            <button
              type="button"
              className="text-[10px] text-[var(--muted)] hover:text-[var(--text)] underline"
              onClick={onRevert}
            >
              revert
            </button>
          )}
          <button
            type="button"
            className="btn btn-ghost text-xs py-1 px-2"
            onClick={() => onChange([...items, ""])}
          >
            + Add
          </button>
        </div>
      </div>
      {items.length === 0 && <p className="text-xs text-[var(--muted)]">None yet.</p>}
      {items.map((v, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="text-[10px] text-[var(--muted)] tabular-nums w-5 pt-2.5">{i + 1}.</span>
          <textarea
            className="field text-xs resize-y"
            rows={2}
            value={v}
            placeholder={placeholder}
            onChange={(e) => onChange(items.map((x, j) => (j === i ? e.target.value : x)))}
          />
          <button
            type="button"
            className="btn btn-ghost text-xs py-1 px-2 shrink-0"
            onClick={() => onChange(items.filter((_, j) => j !== i))}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

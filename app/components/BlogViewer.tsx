"use client";

import { useMemo, useState } from "react";
import { marked } from "marked";
import type { StoredBlog, TaxonomyItem } from "@/app/lib/types";
import { TaxonomySelect } from "./SettingsPanel";

type Tab = "article" | "faqs" | "schema" | "seo";

const TABS: { id: Tab; label: string }[] = [
  { id: "article", label: "Article" },
  { id: "faqs", label: "FAQs" },
  { id: "schema", label: "Structured Data" },
  { id: "seo", label: "SEO Meta" },
];

function CopyBtn({ text, label = "Copy" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="btn btn-ghost text-xs py-1.5 px-2.5"
      onClick={async () => {
        await navigator.clipboard?.writeText(text);
        setDone(true);
        setTimeout(() => setDone(false), 1200);
      }}
    >
      {done ? "✓ Copied" : label}
    </button>
  );
}

export default function BlogViewer({
  blog,
  onBack,
  onDelete,
  backLabel = "← Back to library",
  categories = [],
  authors = [],
  onConnect,
}: {
  blog: StoredBlog;
  onBack: () => void;
  onDelete: (id: string) => void;
  backLabel?: string;
  categories?: TaxonomyItem[];
  authors?: TaxonomyItem[];
  onConnect?: (blogId: string, category: TaxonomyItem | null, author: TaxonomyItem | null) => Promise<void>;
}) {
  const [tab, setTab] = useState<Tab>("article");
  const a = blog.article;

  const [catId, setCatId] = useState<string | undefined>(blog.categoryId);
  const [authId, setAuthId] = useState<string | undefined>(blog.authorId);
  const [connectState, setConnectState] = useState<{ loading: boolean; msg: string; ok?: boolean }>({
    loading: false,
    msg: "",
  });

  async function doConnect() {
    if (!onConnect) return;
    setConnectState({ loading: true, msg: "" });
    try {
      const cat = categories.find((c) => c.documentId === catId) || null;
      const auth = authors.find((x) => x.documentId === authId) || null;
      await onConnect(blog.id, cat, auth);
      setConnectState({ loading: false, ok: true, msg: "Connected ✓ saved to the CMS." });
    } catch (e) {
      setConnectState({ loading: false, ok: false, msg: e instanceof Error ? e.message : "Connect failed" });
    }
  }

  const html = useMemo(() => {
    try {
      return marked.parse(a.contentMarkdown || "", { gfm: true, breaks: false }) as string;
    } catch {
      return `<pre>${a.contentMarkdown || ""}</pre>`;
    }
  }, [a.contentMarkdown]);

  const schemaJson = useMemo(
    () => JSON.stringify(a.structuredData || [], null, 2),
    [a.structuredData]
  );

  // Older blogs may predate coverImagePrompt — synthesize a good one on the fly.
  const coverPrompt =
    a.coverImagePrompt ||
    `A high-quality, photorealistic blog cover image depicting ${a.coverImageQuery || a.title}. Warm, inviting mood with soft natural lighting and a modern color palette. Cinematic composition with shallow depth of field and clean negative space for a title overlay, 16:9. No text in the image.`;

  const words = (a.contentMarkdown || "").trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-5">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <button className="btn btn-ghost" onClick={onBack}>
          {backLabel}
        </button>
        <div className="flex items-center gap-2">
          <CopyBtn text={coverPrompt} label="🖼 Copy Image Prompt" />
          <CopyBtn text={a.contentMarkdown || ""} label="Copy Markdown" />
          <button className="btn btn-danger" onClick={() => onDelete(blog.id)}>
            🗑 Delete
          </button>
        </div>
      </div>

      {/* Header card */}
      <div className="card p-6">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          {blog.publishState && (
            <span
              className="pill"
              style={{
                background: blog.publishState === "published" ? "rgba(46,204,113,0.16)" : "rgba(245,166,35,0.16)",
                color: blog.publishState === "published" ? "var(--green)" : "var(--amber)",
              }}
            >
              {blog.publishState === "published" ? "● Published" : "● Draft"}
            </span>
          )}
          <span className="pill" style={{ background: "var(--panel-2)", color: "var(--muted)" }}>
            {blog.provider} · {blog.model}
          </span>
          <span className="pill" style={{ background: "var(--panel-2)", color: "var(--muted)" }}>
            {words.toLocaleString()} words
          </span>
          <span className="pill" style={{ background: "var(--panel-2)", color: "var(--muted)" }}>
            {a.faqs.length} FAQs
          </span>
          <span className="pill" style={{ background: "var(--panel-2)", color: "var(--muted)" }}>
            {(a.structuredData?.length || 0)} JSON-LD
          </span>
        </div>
        <h1 className="text-2xl font-bold leading-tight mb-2">{a.title}</h1>
        <p className="text-sm text-[var(--muted)] mb-3">{a.excerpt}</p>
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <span className="text-[var(--muted)]">Slug:</span>
          <code className="text-[var(--accent-2)]">{a.slug}</code>
          {a.canonicalURL && (
            <>
              <span className="text-[var(--muted)]">·</span>
              <a href={a.canonicalURL} target="_blank" rel="noreferrer" className="text-[var(--blue)] hover:underline truncate max-w-[320px]">
                {a.canonicalURL}
              </a>
            </>
          )}
        </div>
        {a.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {a.tags.map((t) => (
              <span key={t} className="pill" style={{ background: "var(--panel-2)", color: "var(--muted)" }}>
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Connect to CMS — author + category */}
      {onConnect && (
        <div className="card p-5">
          <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
            <h3 className="text-sm font-semibold">Connect to CMS</h3>
            <div className="text-xs text-[var(--muted)]">
              {blog.categoryName || blog.authorName ? (
                <>
                  Currently:{" "}
                  <span className="text-[var(--text)]">{blog.authorName || "no author"}</span> ·{" "}
                  <span className="text-[var(--text)]">{blog.categoryName || "no category"}</span>
                </>
              ) : (
                "Not connected yet"
              )}
            </div>
          </div>
          <p className="text-xs text-[var(--muted)] mb-4">
            Pick the author and category this article should belong to, then connect — it updates the live post in Strapi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
          <div className="flex items-center gap-3 mt-4">
            <button
              className="btn btn-primary"
              onClick={doConnect}
              disabled={connectState.loading || (!blog.documentId)}
              title={!blog.documentId ? "This blog has no Strapi document — re-generate with auto-publish on." : undefined}
            >
              {connectState.loading ? "Connecting…" : "🔗 Connect & save"}
            </button>
            {!blog.documentId && (
              <span className="text-xs" style={{ color: "var(--amber)" }}>
                No Strapi document id — publish this article first.
              </span>
            )}
            {connectState.msg && (
              <span className="text-xs" style={{ color: connectState.ok ? "var(--green)" : "var(--amber)" }}>
                {connectState.msg}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Key takeaways */}
      {a.keyTakeaways.length > 0 && (
        <div className="card p-5" style={{ borderColor: "var(--accent)" }}>
          <h3 className="text-sm font-semibold mb-2 text-[var(--accent-2)]">Key Takeaways (GEO TL;DR)</h3>
          <ul className="space-y-1.5 text-sm">
            {a.keyTakeaways.map((k, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--accent-2)]">▸</span>
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b" style={{ borderColor: "var(--border)" }}>
        {TABS.map((t) => {
          const on = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors"
              style={{
                borderColor: on ? "var(--accent)" : "transparent",
                color: on ? "var(--text)" : "var(--muted)",
              }}
            >
              {t.label}
              {t.id === "faqs" && ` (${a.faqs.length})`}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {tab === "article" && (
        <div className="card p-7">
          <div className="prose-blog" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      )}

      {tab === "faqs" && (
        <div className="space-y-3">
          {a.faqs.map((f, i) => (
            <div key={i} className="card p-5">
              <p className="font-semibold mb-1.5">{f.question}</p>
              <p className="text-sm text-[var(--muted)]">{f.answer}</p>
            </div>
          ))}
        </div>
      )}

      {tab === "schema" && (
        <div className="card p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-[var(--muted)]">
              JSON-LD injected into Strapi&apos;s <code className="text-[var(--accent-2)]">seo.structuredData</code> — powers Google rich results & AI citations.
            </p>
            <CopyBtn text={schemaJson} label="Copy JSON-LD" />
          </div>
          <pre className="font-mono text-xs overflow-x-auto p-4 rounded-lg" style={{ background: "#0e0f17", border: "1px solid var(--border)" }}>
            {schemaJson}
          </pre>
        </div>
      )}

      {tab === "seo" && (
        <div className="card p-6 space-y-4 text-sm">
          <Field label="Meta Title" value={a.metaTitle} note={`${a.metaTitle.length}/70`} />
          <Field label="Meta Description" value={a.metaDescription} note={`${a.metaDescription.length}/170`} />
          <Field label="Keywords" value={a.keywords} />
          <Field label="Canonical URL" value={a.canonicalURL || "—"} />
          <Field label="OG Type" value={a.ogType || "article"} />
          <Field label="Cover Image Query (stock search)" value={a.coverImageQuery} copyable />
          <Field label="Cover Image Prompt (AI generator)" value={coverPrompt} copyable />
        </div>
      )}
    </div>
  );
}

function Field({ label, value, note, copyable }: { label: string; value: string; note?: string; copyable?: boolean }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="label mb-0">{label}</span>
        <div className="flex items-center gap-2">
          {note && <span className="text-[10px] text-[var(--muted)]">{note}</span>}
          {copyable && value && value !== "—" && <CopyBtn text={value} />}
        </div>
      </div>
      <p className="text-[var(--text)] break-words">{value}</p>
    </div>
  );
}

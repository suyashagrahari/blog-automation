"use client";

import type { StoredBlog } from "@/app/lib/types";

function fmt(iso: string): string {
  try {
    return new Date(iso).toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

export default function BlogLibrary({
  blogs,
  onOpen,
  onDelete,
  onClearAll,
}: {
  blogs: StoredBlog[];
  onOpen: (id: string) => void;
  onDelete: (id: string) => void;
  onClearAll: () => void;
}) {
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
          <p className="text-xs text-[var(--muted)]">{blogs.length} saved locally in IndexedDB — click any card to read it.</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {blogs.map((b) => {
          const a = b.article;
          return (
            <div key={b.id} className="card p-5 flex flex-col group hover:border-[var(--accent)] transition-colors">
              <button onClick={() => onOpen(b.id)} className="text-left flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
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
                <p className="text-xs text-[var(--muted)] line-clamp-3 mb-3">{a.excerpt}</p>
              </button>
              <div className="flex items-center justify-between gap-2 pt-3 border-t" style={{ borderColor: "var(--border-soft)" }}>
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
    </div>
  );
}

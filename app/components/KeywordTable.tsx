"use client";

import type { KeywordRow, RowResult, RowStatus } from "@/app/lib/types";

const STATUS_STYLE: Record<RowStatus, { bg: string; color: string; label: string }> = {
  pending: { bg: "var(--panel-2)", color: "var(--muted)", label: "Pending" },
  queued: { bg: "rgba(74,168,255,0.14)", color: "var(--blue)", label: "Queued" },
  generating: { bg: "rgba(245,166,35,0.16)", color: "var(--amber)", label: "Writing…" },
  publishing: { bg: "rgba(108,99,255,0.18)", color: "var(--accent-2)", label: "Publishing…" },
  done: { bg: "rgba(46,204,113,0.16)", color: "var(--green)", label: "Done" },
  error: { bg: "rgba(255,92,92,0.14)", color: "var(--red)", label: "Error" },
};

function StatusPill({ status, spin }: { status: RowStatus; spin?: boolean }) {
  const s = STATUS_STYLE[status];
  return (
    <span className="pill" style={{ background: s.bg, color: s.color }}>
      {spin && <Spinner />}
      {status === "done" && "✓ "}
      {s.label}
    </span>
  );
}

function Spinner() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="spin">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function Copy({ text }: { text: string }) {
  return (
    <button
      type="button"
      title="Copy"
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard?.writeText(text);
      }}
      className="text-[var(--muted)] hover:text-[var(--accent-2)] shrink-0"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </svg>
    </button>
  );
}

export default function KeywordTable({
  rows,
  results,
  selected,
  currentId,
  onToggle,
  onToggleAll,
  onView,
}: {
  rows: KeywordRow[];
  results: Record<string, RowResult>;
  selected: Set<string>;
  currentId: string | null;
  onToggle: (id: string) => void;
  onToggleAll: () => void;
  onView?: (id: string) => void;
}) {
  const allSelected = rows.length > 0 && rows.every((r) => selected.has(r.id));

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-wide text-[var(--muted)] bg-[var(--panel-2)]">
              <th className="px-3 py-3 w-10">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={onToggleAll}
                  className="accent-[var(--accent)] w-4 h-4 align-middle"
                />
              </th>
              <th className="px-3 py-3 w-10">#</th>
              <th className="px-3 py-3 min-w-[260px]">Keyword</th>
              <th className="px-3 py-3">Intent</th>
              <th className="px-3 py-3">Volume</th>
              <th className="px-3 py-3">Difficulty</th>
              <th className="px-3 py-3">Asset</th>
              <th className="px-3 py-3 w-32">Status</th>
              <th className="px-3 py-3 min-w-[200px]">Slug</th>
              <th className="px-3 py-3 min-w-[220px]">Cover Image Query</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const res = results[r.id] || { status: "pending" as RowStatus };
              const isCurrent = currentId === r.id;
              const status: RowStatus = res.status || "pending";
              const isDone = status === "done";
              const clickable = isDone && !!onView;
              return (
                <tr
                  key={r.id}
                  onClick={clickable ? () => onView!(r.id) : undefined}
                  title={clickable ? "Click to view the full blog" : undefined}
                  className={`border-t transition-colors ${
                    clickable ? "cursor-pointer hover:bg-[var(--panel-2)]/70" : "hover:bg-[var(--panel-2)]/40"
                  }`}
                  style={{
                    borderColor: "var(--border-soft)",
                    background: isCurrent ? "rgba(108,99,255,0.06)" : undefined,
                  }}
                >
                  <td className="px-3 py-3" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={selected.has(r.id)}
                      onChange={() => onToggle(r.id)}
                      className="accent-[var(--accent)] w-4 h-4 align-middle"
                    />
                  </td>
                  <td className="px-3 py-3 text-[var(--muted)]">{i + 1}</td>
                  <td className="px-3 py-3 font-medium text-[var(--text)]">{r.keyword}</td>
                  <td className="px-3 py-3 text-[var(--muted)] whitespace-nowrap">{r.strategy}</td>
                  <td className="px-3 py-3 text-[var(--muted)] whitespace-nowrap">{r.searchVolume}</td>
                  <td className="px-3 py-3 text-[var(--muted)] whitespace-nowrap">{r.difficulty}</td>
                  <td className="px-3 py-3 text-[var(--muted)] whitespace-nowrap">{r.assetType}</td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-1.5">
                      <StatusPill status={status} spin={status === "generating" || status === "publishing"} />
                      {clickable && (
                        <span className="text-[10px] text-[var(--accent-2)] font-medium whitespace-nowrap">View ↗</span>
                      )}
                    </div>
                    {status === "error" && res.error && (
                      <div className="text-[10px] text-[var(--red)] mt-1 max-w-[160px] truncate" title={res.error}>
                        {res.error}
                      </div>
                    )}
                    {status === "done" && res.publishState === "draft" && (
                      <div className="text-[10px] text-[var(--amber)] mt-1">saved as draft</div>
                    )}
                  </td>
                  <td className="px-3 py-3">
                    {res.slug ? (
                      <div className="flex items-center gap-1.5">
                        <code className="text-xs text-[var(--accent-2)] truncate max-w-[180px]">{res.slug}</code>
                        <Copy text={res.slug} />
                      </div>
                    ) : (
                      <span className="text-[var(--muted)]">—</span>
                    )}
                  </td>
                  <td className="px-3 py-3">
                    {res.coverImageQuery ? (
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-[var(--text)] truncate max-w-[200px]">{res.coverImageQuery}</span>
                        <Copy text={res.coverImageQuery} />
                      </div>
                    ) : (
                      <span className="text-[var(--muted)]">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

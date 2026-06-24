"use client";

export type View = "generate" | "library" | "settings";

const NAV: { id: View; label: string; icon: string; hint: string }[] = [
  { id: "generate", label: "Generate", icon: "✦", hint: "Upload keywords & write" },
  { id: "library", label: "Library", icon: "📚", hint: "Read every blog" },
  { id: "settings", label: "Settings", icon: "⚙", hint: "Keys, models & Strapi" },
];

export default function Sidebar({
  active,
  onNavigate,
  blogCount,
  doneCount,
  totalKeywords,
}: {
  active: View;
  onNavigate: (v: View) => void;
  blogCount: number;
  doneCount: number;
  totalKeywords: number;
}) {
  return (
    <>
      {/* ── Desktop: fixed left rail (lg and up) ───────────────────────────── */}
      <aside
        className="hidden lg:flex fixed inset-y-0 left-0 w-60 border-r flex-col z-30"
        style={{ borderColor: "var(--border)", background: "var(--panel)" }}
      >
        {/* Brand */}
        <div className="px-5 py-5 flex items-center gap-3 border-b" style={{ borderColor: "var(--border)" }}>
          <div
            className="w-9 h-9 rounded-xl grid place-items-center text-lg text-white shrink-0"
            style={{ background: "linear-gradient(135deg,var(--accent),#9d5cff)" }}
          >
            ✦
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Blog Studio</div>
            <div className="text-[10px] text-[var(--muted)]">SEO · GEO · AEO</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV.map((item) => {
            const on = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors"
                style={{
                  background: on ? "rgba(108,99,255,0.14)" : "transparent",
                  color: on ? "var(--accent-2)" : "var(--text)",
                }}
              >
                <span className="text-base w-5 text-center">{item.icon}</span>
                <span className="flex-1">
                  <span className="block text-sm font-medium">{item.label}</span>
                  <span className="block text-[10px] text-[var(--muted)]">{item.hint}</span>
                </span>
                {item.id === "library" && blogCount > 0 && (
                  <span className="pill" style={{ background: "rgba(108,99,255,0.18)", color: "var(--accent-2)" }}>
                    {blogCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer stats */}
        <div className="px-5 py-4 border-t text-[11px] text-[var(--muted)] space-y-1" style={{ borderColor: "var(--border)" }}>
          <div className="flex justify-between">
            <span>Keywords</span>
            <span className="text-[var(--text)] font-medium">{totalKeywords}</span>
          </div>
          <div className="flex justify-between">
            <span>Generated</span>
            <span className="font-medium" style={{ color: "var(--green)" }}>{doneCount}</span>
          </div>
          <div className="flex justify-between">
            <span>Saved blogs</span>
            <span className="font-medium" style={{ color: "var(--accent-2)" }}>{blogCount}</span>
          </div>
        </div>
      </aside>

      {/* ── Mobile: bottom tab bar (below lg) ──────────────────────────────── */}
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t backdrop-blur-xl"
        style={{
          borderColor: "var(--border)",
          background: "color-mix(in srgb, var(--panel) 92%, transparent)",
          paddingBottom: "env(safe-area-inset-bottom)",
          boxShadow: "0 -10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <div className="grid grid-cols-3 px-2 pt-1.5 pb-1">
          {NAV.map((item) => {
            const on = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative flex flex-col items-center gap-1 py-1.5 active:scale-95 transition-transform"
              >
                <span
                  className="relative grid place-items-center w-16 h-8 rounded-full transition-colors duration-200"
                  style={{ background: on ? "rgba(108,99,255,0.2)" : "transparent" }}
                >
                  <span
                    className="text-[19px] leading-none transition-transform duration-200"
                    style={{ transform: on ? "scale(1.06)" : "scale(1)" }}
                  >
                    {item.icon}
                  </span>
                  {item.id === "library" && blogCount > 0 && (
                    <span
                      className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 rounded-full text-[9px] font-bold grid place-items-center ring-2"
                      style={{ background: "var(--accent)", color: "#fff", borderColor: "var(--panel)" }}
                    >
                      {blogCount}
                    </span>
                  )}
                </span>
                <span
                  className="text-[11px] font-semibold tracking-tight transition-colors"
                  style={{ color: on ? "var(--accent-2)" : "var(--muted)" }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

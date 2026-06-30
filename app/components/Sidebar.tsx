"use client";

/** Project-scoped views. Settings is global (handled separately, not a View). */
export type View = "generate" | "library";

const PROJECT_NAV: { id: View; label: string; icon: string; hint: string }[] = [
  { id: "generate", label: "Generate", icon: "✦", hint: "Upload keywords & write" },
  { id: "library", label: "Library", icon: "📚", hint: "Read every blog" },
];

export default function Sidebar({
  view,
  onNavigate,
  projectName,
  onBackToProjects,
  settingsActive,
  onOpenSettings,
  blogCount,
  doneCount,
  totalKeywords,
}: {
  view: View;
  onNavigate: (v: View) => void;
  /** Name of the open project, or null when on the Projects list (no project open). */
  projectName: string | null;
  onBackToProjects: () => void;
  /** Global Settings screen is showing (independent of any project). */
  settingsActive: boolean;
  onOpenSettings: () => void;
  blogCount: number;
  doneCount: number;
  totalKeywords: number;
}) {
  const inProject = projectName !== null;
  const projectsActive = !inProject && !settingsActive;

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

        {/* Projects entry + (when open) the active project context */}
        <div className="px-3 pt-3">
          <RailItem
            icon="🗂️"
            title={inProject ? "← All Projects" : "Projects"}
            hint={inProject ? projectName! : "Pick or create a project"}
            active={projectsActive}
            onClick={onBackToProjects}
          />
        </div>

        {/* Project-scoped nav — only meaningful inside a project */}
        {inProject && (
          <nav className="flex-1 px-3 py-3 space-y-1 overflow-y-auto">
            {PROJECT_NAV.map((item) => (
              <RailItem
                key={item.id}
                icon={item.icon}
                title={item.label}
                hint={item.hint}
                active={!settingsActive && view === item.id}
                onClick={() => onNavigate(item.id)}
                badge={item.id === "library" && blogCount > 0 ? blogCount : undefined}
              />
            ))}
          </nav>
        )}

        {!inProject && <div className="flex-1" />}

        {/* Footer: stats (in-project) + the global Settings tab pinned at the bottom */}
        <div className="border-t" style={{ borderColor: "var(--border)" }}>
          {inProject && (
            <div className="px-5 py-3 text-[11px] text-[var(--muted)] space-y-1 border-b" style={{ borderColor: "var(--border)" }}>
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
          )}
          <div className="px-3 py-3">
            <RailItem
              icon="⚙"
              title="Settings"
              hint="Keys, models & Strapi · global"
              active={settingsActive}
              onClick={onOpenSettings}
            />
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
        <div className={`grid ${inProject ? "grid-cols-4" : "grid-cols-2"} px-2 pt-1.5 pb-1`}>
          <MobileTab label="Projects" icon="🗂️" on={projectsActive} onClick={onBackToProjects} />
          {inProject &&
            PROJECT_NAV.map((item) => (
              <MobileTab
                key={item.id}
                label={item.label}
                icon={item.icon}
                on={!settingsActive && view === item.id}
                badge={item.id === "library" ? blogCount : 0}
                onClick={() => onNavigate(item.id)}
              />
            ))}
          <MobileTab label="Settings" icon="⚙" on={settingsActive} onClick={onOpenSettings} />
        </div>
      </nav>
    </>
  );
}

/** A desktop sidebar row (Projects / Generate / Library / Settings). */
function RailItem({
  icon,
  title,
  hint,
  active,
  onClick,
  badge,
}: {
  icon: string;
  title: string;
  hint: string;
  active: boolean;
  onClick: () => void;
  badge?: number;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors"
      style={{
        background: active ? "rgba(108,99,255,0.14)" : "transparent",
        color: active ? "var(--accent-2)" : "var(--text)",
      }}
    >
      <span className="text-base w-5 text-center shrink-0">{icon}</span>
      <span className="flex-1 min-w-0">
        <span className="block text-sm font-medium truncate">{title}</span>
        <span className="block text-[10px] text-[var(--muted)] truncate">{hint}</span>
      </span>
      {badge !== undefined && (
        <span className="pill shrink-0" style={{ background: "rgba(108,99,255,0.18)", color: "var(--accent-2)" }}>
          {badge}
        </span>
      )}
    </button>
  );
}

function MobileTab({
  label,
  icon,
  on,
  badge = 0,
  onClick,
}: {
  label: string;
  icon: string;
  on: boolean;
  badge?: number;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="relative flex flex-col items-center gap-1 py-1.5 active:scale-95 transition-transform">
      <span
        className="relative grid place-items-center w-16 h-8 rounded-full transition-colors duration-200"
        style={{ background: on ? "rgba(108,99,255,0.2)" : "transparent" }}
      >
        <span
          className="text-[19px] leading-none transition-transform duration-200"
          style={{ transform: on ? "scale(1.06)" : "scale(1)" }}
        >
          {icon}
        </span>
        {badge > 0 && (
          <span
            className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 rounded-full text-[9px] font-bold grid place-items-center ring-2"
            style={{ background: "var(--accent)", color: "#fff", borderColor: "var(--panel)" }}
          >
            {badge}
          </span>
        )}
      </span>
      <span
        className="text-[11px] font-semibold tracking-tight transition-colors"
        style={{ color: on ? "var(--accent-2)" : "var(--muted)" }}
      >
        {label}
      </span>
    </button>
  );
}

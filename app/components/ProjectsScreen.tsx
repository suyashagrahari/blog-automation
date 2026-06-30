"use client";

import { useRef, useState } from "react";
import type { Project } from "@/app/lib/types";

function fmt(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}

type FormState = { open: boolean; editing: Project | null; name: string; description: string; type: string };
const EMPTY_FORM: FormState = { open: false, editing: null, name: "", description: "", type: "" };

export default function ProjectsScreen({
  projects,
  counts,
  onOpen,
  onCreate,
  onUpdate,
  onDelete,
  onExport,
  onImport,
}: {
  projects: Project[];
  counts: Record<string, number>;
  onOpen: (id: string) => void;
  onCreate: (input: { name: string; description?: string; type?: string }) => Promise<void>;
  onUpdate: (project: Project, patch: Partial<Project>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onExport: (id: string) => Promise<void>;
  onImport: (file: File) => Promise<void>;
}) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [importMsg, setImportMsg] = useState<{ ok?: boolean; text: string } | null>(null);
  const importRef = useRef<HTMLInputElement>(null);

  const openCreate = () => setForm({ ...EMPTY_FORM, open: true });
  const openEdit = (p: Project) =>
    setForm({ open: true, editing: p, name: p.name, description: p.description || "", type: p.type || "" });
  const close = () => setForm(EMPTY_FORM);

  async function submit() {
    if (!form.name.trim()) return;
    setSaving(true);
    try {
      if (form.editing) {
        await onUpdate(form.editing, {
          name: form.name.trim(),
          description: form.description.trim() || undefined,
          type: form.type.trim() || undefined,
        });
      } else {
        await onCreate({ name: form.name, description: form.description, type: form.type });
      }
      close();
    } finally {
      setSaving(false);
    }
  }

  async function handleExport(id: string) {
    setBusyId(id);
    try {
      await onExport(id);
    } catch (e) {
      alert(e instanceof Error ? e.message : "Export failed.");
    } finally {
      setBusyId(null);
    }
  }

  async function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setImportMsg({ text: "Importing…" });
    try {
      await onImport(file);
      setImportMsg({ ok: true, text: "Project imported ✓" });
      setTimeout(() => setImportMsg(null), 2500);
    } catch (err) {
      setImportMsg({ ok: false, text: err instanceof Error ? err.message : "Import failed." });
    }
  }

  return (
    <div className="space-y-5">
      {/* Header / actions */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-lg font-semibold">Projects</h2>
          <p className="text-xs text-[var(--muted)]">
            Each project keeps its own keyword sheet, generated library, and Strapi links. Pick one to start writing.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input ref={importRef} type="file" accept=".json,application/json" className="hidden" onChange={handleImportFile} />
          <button className="btn btn-ghost" onClick={() => importRef.current?.click()}>
            ⬆ Import project
          </button>
          <button className="btn btn-primary" onClick={openCreate}>
            ＋ New project
          </button>
        </div>
      </div>

      {importMsg && (
        <p
          className="text-xs"
          style={{ color: importMsg.ok ? "var(--green)" : importMsg.text === "Importing…" ? "var(--muted)" : "var(--red)" }}
        >
          {importMsg.text}
        </p>
      )}

      {projects.length === 0 ? (
        <div className="card p-16 text-center">
          <div className="text-4xl mb-3">🗂️</div>
          <h3 className="text-base font-semibold mb-1">No projects yet</h3>
          <p className="text-sm text-[var(--muted)] max-w-md mx-auto mb-5">
            Create your first project to upload a keyword sheet and generate blogs — or import a project you exported
            earlier to restore everything (sheet + library).
          </p>
          <div className="flex items-center justify-center gap-2">
            <button className="btn btn-ghost" onClick={() => importRef.current?.click()}>
              ⬆ Import
            </button>
            <button className="btn btn-primary" onClick={openCreate}>
              ＋ New project
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((p) => {
            const count = counts[p.id] ?? 0;
            const busy = busyId === p.id;
            return (
              <div key={p.id} className="card p-5 flex flex-col group hover:border-[var(--accent)] transition-colors">
                <button onClick={() => onOpen(p.id)} className="text-left flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {p.type && (
                      <span className="pill" style={{ background: "rgba(108,99,255,0.16)", color: "var(--accent-2)" }}>
                        {p.type}
                      </span>
                    )}
                    <span className="text-[10px] text-[var(--muted)]">{fmt(p.createdAt)}</span>
                  </div>
                  <h3 className="font-semibold leading-snug mb-1.5 line-clamp-2 group-hover:text-[var(--accent-2)]">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)] line-clamp-2 min-h-[2rem]">
                    {p.description || "No description."}
                  </p>
                </button>

                <div
                  className="flex items-center justify-between gap-2 pt-3 border-t mt-3"
                  style={{ borderColor: "var(--border-soft)" }}
                >
                  <span className="text-[11px] text-[var(--muted)]">
                    <span className="text-[var(--text)] font-medium">{count}</span> blog{count === 1 ? "" : "s"}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button className="btn btn-ghost text-xs py-1.5 px-2.5" onClick={() => onOpen(p.id)}>
                      Open
                    </button>
                    <button
                      className="text-[var(--muted)] hover:text-[var(--text)] px-1.5"
                      title="Edit project"
                      onClick={() => openEdit(p)}
                    >
                      ✎
                    </button>
                    <button
                      className="text-[var(--muted)] hover:text-[var(--blue)] px-1.5 disabled:opacity-50"
                      title="Export project (JSON)"
                      disabled={busy}
                      onClick={() => handleExport(p.id)}
                    >
                      {busy ? "…" : "⬇"}
                    </button>
                    <button
                      className="text-[var(--muted)] hover:text-[var(--red)] px-1.5"
                      title="Delete project"
                      onClick={() => {
                        if (confirm(`Delete "${p.name}" and all ${count} of its blogs? This cannot be undone.`))
                          onDelete(p.id);
                      }}
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

      {/* Create / edit modal */}
      {form.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(6,7,12,0.72)", backdropFilter: "blur(3px)" }}
          onClick={close}
        >
          <div className="card p-6 w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-base font-semibold mb-4">{form.editing ? "Edit project" : "New project"}</h3>
            <div className="space-y-4">
              <div>
                <label className="label">
                  Name <span style={{ color: "var(--red)" }}>*</span>
                </label>
                <input
                  className="field"
                  placeholder="e.g. Birthday Gifting Blog"
                  value={form.name}
                  autoFocus
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && form.name.trim()) submit();
                  }}
                />
              </div>
              <div>
                <label className="label">Type / tag (optional)</label>
                <input
                  className="field"
                  placeholder="e.g. SEO Blogs"
                  value={form.type}
                  onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                />
              </div>
              <div>
                <label className="label">Description (optional)</label>
                <textarea
                  className="field"
                  rows={3}
                  placeholder="What this project is for…"
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-6">
              <button className="btn btn-ghost" onClick={close} disabled={saving}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={submit} disabled={saving || !form.name.trim()}>
                {saving ? "Saving…" : form.editing ? "Save changes" : "Create project"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

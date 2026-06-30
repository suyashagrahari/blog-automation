import type { Project, ProjectDefaults, ProjectExport, StoredBlog } from "./types";
import {
  blogKey,
  deleteBlog,
  getAllProjects,
  getAllBlogsRaw,
  getBlogsByProject,
  getProject,
  saveBlog,
  saveProject,
} from "./db";
import {
  clearLegacySheet,
  loadFileName,
  loadLegacySheet,
  loadResults,
  loadRows,
  saveFileName,
  saveResults,
  saveRows,
} from "./storage";

// ─────────────────────────────────────────────────────────────────────────────
// High-level project operations: create, export to a single JSON file, import
// that file back, and a one-time migration of pre-project data into a project.
// ─────────────────────────────────────────────────────────────────────────────

/** Reasonably-unique id. Prefers crypto.randomUUID; falls back for old browsers. */
function uid(): string {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  } catch {
    /* ignore */
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/** Create + persist a new, empty project. */
export async function createProject(input: {
  name: string;
  description?: string;
  type?: string;
}): Promise<Project> {
  const now = new Date().toISOString();
  const project: Project = {
    id: uid(),
    name: input.name.trim() || "Untitled project",
    description: input.description?.trim() || undefined,
    type: input.type?.trim() || undefined,
    createdAt: now,
    updatedAt: now,
  };
  await saveProject(project);
  return project;
}

/** Merge a patch into a project, bump updatedAt, persist, and return the new value. */
export async function updateProject(project: Project, patch: Partial<Project>): Promise<Project> {
  const next: Project = { ...project, ...patch, updatedAt: new Date().toISOString() };
  await saveProject(next);
  return next;
}

// ── Export ──────────────────────────────────────────────────────────────────

/** Gather a project's full state (metadata + sheet + every blog) into one payload. */
export async function buildProjectExport(projectId: string): Promise<ProjectExport | null> {
  const project = await getProject(projectId);
  if (!project) return null;
  return {
    kind: "blog-automation/project",
    version: 1,
    exportedAt: new Date().toISOString(),
    project,
    fileName: loadFileName(projectId),
    rows: loadRows(projectId),
    results: loadResults(projectId),
    blogs: await getBlogsByProject(projectId),
  };
}

/** A filesystem-safe slug for the download file name. */
function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "project";
}

/** Build the export and trigger a browser download of `<name>.blogproject.json`. */
export async function downloadProjectExport(projectId: string): Promise<void> {
  const data = await buildProjectExport(projectId);
  if (!data) throw new Error("Project not found.");
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${slugify(data.project.name)}.blogproject.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// ── Import ────────────────────────────────────────────────────────────────────

/** Validate that a parsed object is a project export this app understands. */
function isProjectExport(v: unknown): v is ProjectExport {
  if (!v || typeof v !== "object") return false;
  const e = v as Partial<ProjectExport>;
  return e.kind === "blog-automation/project" && !!e.project && Array.isArray(e.blogs);
}

/** Parse a user-picked .json file into a validated ProjectExport (throws on bad data). */
export async function parseProjectFile(file: File): Promise<ProjectExport> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(await file.text());
  } catch {
    throw new Error("That file isn't valid JSON.");
  }
  if (!isProjectExport(parsed)) {
    throw new Error("This doesn't look like a Blog Studio project export.");
  }
  return parsed;
}

/**
 * Restore an exported project into a brand-new project (fresh id, so importing
 * the same file twice never clobbers an existing project). Sheet + every blog
 * are re-keyed to the new project id and persisted.
 */
export async function importProject(data: ProjectExport): Promise<Project> {
  const now = new Date().toISOString();
  const newId = uid();
  const src = data.project;
  const project: Project = {
    id: newId,
    name: src.name || "Imported project",
    description: src.description,
    type: src.type,
    createdAt: src.createdAt || now,
    updatedAt: now,
    // per-project default Strapi links
    defaultCategoryId: src.defaultCategoryId,
    defaultCategoryName: src.defaultCategoryName,
    defaultAuthorId: src.defaultAuthorId,
    defaultAuthorName: src.defaultAuthorName,
    defaultTemplateIds: src.defaultTemplateIds,
    defaultTemplateNames: src.defaultTemplateNames,
  };
  await saveProject(project);

  // Sheet → localStorage under the new id.
  saveRows(newId, data.rows || []);
  saveResults(newId, data.results || {});
  saveFileName(newId, data.fileName || "");

  // Blogs → re-key to the new project (rowId preserved so they re-link to rows).
  for (const b of data.blogs || []) {
    const rowId = b.rowId || b.id; // tolerate older exports that used rowId-as-id
    const blog: StoredBlog = { ...b, id: blogKey(newId, rowId), projectId: newId, rowId };
    await saveBlog(blog);
  }

  return project;
}

// ── One-time migration of pre-project data ──────────────────────────────────────

/** Read the legacy global default-link fields straight off the old settings blob. */
function readLegacyDefaults(): ProjectDefaults {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem("ba:settings");
    if (!raw) return {};
    const s = JSON.parse(raw) as ProjectDefaults;
    return {
      defaultCategoryId: s.defaultCategoryId,
      defaultCategoryName: s.defaultCategoryName,
      defaultAuthorId: s.defaultAuthorId,
      defaultAuthorName: s.defaultAuthorName,
      defaultTemplateIds: s.defaultTemplateIds,
      defaultTemplateNames: s.defaultTemplateNames,
    };
  } catch {
    return {};
  }
}

/**
 * If the user has pre-project data (a loaded sheet or blogs saved before this
 * version) and no projects yet, fold it all into a "My First Project" so nothing
 * is lost. Returns the created project, or null when there's nothing to migrate.
 */
export async function migrateLegacyData(): Promise<Project | null> {
  const projects = await getAllProjects();
  if (projects.length) return null; // already on the project model

  const legacyBlogs = (await getAllBlogsRaw()).filter((b) => !b.projectId);
  const legacy = loadLegacySheet();
  if (!legacyBlogs.length && !legacy.rows.length) return null; // brand-new user

  const now = new Date().toISOString();
  const project: Project = {
    id: uid(),
    name: "My First Project",
    description: "Imported from your existing keyword sheet & library.",
    createdAt: now,
    updatedAt: now,
    ...readLegacyDefaults(),
  };
  await saveProject(project);

  // Move the legacy sheet under the new project, then clear the old keys.
  saveRows(project.id, legacy.rows);
  saveResults(project.id, legacy.results);
  saveFileName(project.id, legacy.fileName);
  clearLegacySheet();

  // Re-key legacy blogs (old store key was the row id) into the new project.
  for (const b of legacyBlogs) {
    const rowId = b.rowId || b.id;
    await deleteBlog(b.id);
    await saveBlog({ ...b, id: blogKey(project.id, rowId), projectId: project.id, rowId });
  }

  return project;
}

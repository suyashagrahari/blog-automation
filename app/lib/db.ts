import type { Project, StoredBlog } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// IndexedDB store for projects and their fully-generated blogs.
//
//  • "projects" — one record per workspace (name, description, default links).
//  • "blogs"    — the *entire* generated article (Markdown body, FAQs, JSON-LD…),
//                 keyed by a globally-unique `${projectId}::${rowId}` id and
//                 indexed by `projectId` so each project sees only its own library.
//
// No external deps; a tiny promise wrapper over the native API.
// ─────────────────────────────────────────────────────────────────────────────

const DB_NAME = "blog-automation";
const DB_VERSION = 2;
const STORE = "blogs";
const PROJECTS = "projects";

/** Build the globally-unique blog store key from a project + keyword-row id. */
export const blogKey = (projectId: string, rowId: string) => `${projectId}::${rowId}`;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB unavailable in this environment"));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      const upgradeTx = req.transaction!; // versionchange transaction

      // v1 → blogs store (keyPath "id").
      let blogStore: IDBObjectStore;
      if (!db.objectStoreNames.contains(STORE)) {
        blogStore = db.createObjectStore(STORE, { keyPath: "id" });
        blogStore.createIndex("createdAt", "createdAt", { unique: false });
      } else {
        blogStore = upgradeTx.objectStore(STORE);
      }
      // v2 → scope blogs to a project.
      if (!blogStore.indexNames.contains("projectId")) {
        blogStore.createIndex("projectId", "projectId", { unique: false });
      }

      // v2 → projects store.
      if (!db.objectStoreNames.contains(PROJECTS)) {
        const p = db.createObjectStore(PROJECTS, { keyPath: "id" });
        p.createIndex("createdAt", "createdAt", { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error("Failed to open IndexedDB"));
  });
}

/** Run `fn` against one store inside a transaction and resolve with its request result. */
function tx<T>(
  storeName: string,
  mode: IDBTransactionMode,
  fn: (store: IDBObjectStore) => IDBRequest<T>
): Promise<T> {
  return openDB().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(storeName, mode);
        const store = t.objectStore(storeName);
        const req = fn(store);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error || new Error("IndexedDB request failed"));
        t.oncomplete = () => db.close();
      })
  );
}

// ── Projects ─────────────────────────────────────────────────────────────────

export async function saveProject(project: Project): Promise<void> {
  await tx(PROJECTS, "readwrite", (s) => s.put(project));
}

/** All projects, newest first. */
export async function getAllProjects(): Promise<Project[]> {
  try {
    const all = await tx<Project[]>(PROJECTS, "readonly", (s) => s.getAll() as IDBRequest<Project[]>);
    return all.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  } catch {
    return [];
  }
}

export async function getProject(id: string): Promise<Project | undefined> {
  try {
    return await tx<Project | undefined>(PROJECTS, "readonly", (s) => s.get(id) as IDBRequest<Project | undefined>);
  } catch {
    return undefined;
  }
}

/** Delete a project and every blog inside it. */
export async function deleteProject(id: string): Promise<void> {
  await deleteBlogsByProject(id);
  await tx(PROJECTS, "readwrite", (s) => s.delete(id));
}

// ── Blogs (project-scoped) ─────────────────────────────────────────────────────

/** Insert or overwrite a blog (keyed by its composite id → regenerating replaces it). */
export async function saveBlog(blog: StoredBlog): Promise<void> {
  await tx(STORE, "readwrite", (s) => s.put(blog));
}

/** Every blog in one project, newest first. */
export async function getBlogsByProject(projectId: string): Promise<StoredBlog[]> {
  try {
    const all = await tx<StoredBlog[]>(STORE, "readonly", (s) =>
      s.index("projectId").getAll(projectId) as IDBRequest<StoredBlog[]>
    );
    return all.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  } catch {
    return [];
  }
}

/** Raw dump of every blog across all projects (used by the legacy migration only). */
export async function getAllBlogsRaw(): Promise<StoredBlog[]> {
  try {
    return await tx<StoredBlog[]>(STORE, "readonly", (s) => s.getAll() as IDBRequest<StoredBlog[]>);
  } catch {
    return [];
  }
}

export async function deleteBlog(id: string): Promise<void> {
  await tx(STORE, "readwrite", (s) => s.delete(id));
}

/** Wipe every blog belonging to a project (keeps the project record). */
export async function deleteBlogsByProject(projectId: string): Promise<void> {
  const blogs = await getBlogsByProject(projectId);
  await Promise.all(blogs.map((b) => deleteBlog(b.id)));
}

export async function countBlogsByProject(projectId: string): Promise<number> {
  try {
    return await tx<number>(STORE, "readonly", (s) => s.index("projectId").count(projectId));
  } catch {
    return 0;
  }
}

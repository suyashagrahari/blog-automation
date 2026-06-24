import type { StoredBlog } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// IndexedDB store for fully-generated blogs. Unlike localStorage (which holds the
// lightweight keyword rows + per-row status), this keeps the *entire* generated
// article — full Markdown body, FAQs, JSON-LD, the lot — so the user can browse,
// read, and bulk-delete everything they've ever written. No external deps; a tiny
// promise wrapper over the native API.
// ─────────────────────────────────────────────────────────────────────────────

const DB_NAME = "blog-automation";
const DB_VERSION = 1;
const STORE = "blogs";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB unavailable in this environment"));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        const store = db.createObjectStore(STORE, { keyPath: "id" });
        store.createIndex("createdAt", "createdAt", { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error("Failed to open IndexedDB"));
  });
}

function tx<T>(mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDB().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(STORE, mode);
        const store = t.objectStore(STORE);
        const req = fn(store);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error || new Error("IndexedDB request failed"));
        t.oncomplete = () => db.close();
      })
  );
}

/** Insert or overwrite a blog (keyed by id → regenerating a keyword replaces it). */
export async function saveBlog(blog: StoredBlog): Promise<void> {
  await tx("readwrite", (s) => s.put(blog));
}

/** All blogs, newest first. */
export async function getAllBlogs(): Promise<StoredBlog[]> {
  try {
    const all = await tx<StoredBlog[]>("readonly", (s) => s.getAll() as IDBRequest<StoredBlog[]>);
    return all.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  } catch {
    return [];
  }
}

export async function getBlog(id: string): Promise<StoredBlog | undefined> {
  try {
    return await tx<StoredBlog | undefined>("readonly", (s) => s.get(id) as IDBRequest<StoredBlog | undefined>);
  } catch {
    return undefined;
  }
}

export async function deleteBlog(id: string): Promise<void> {
  await tx("readwrite", (s) => s.delete(id));
}

/** Wipe every stored blog. */
export async function clearAllBlogs(): Promise<void> {
  await tx("readwrite", (s) => s.clear());
}

export async function countBlogs(): Promise<number> {
  try {
    return await tx<number>("readonly", (s) => s.count());
  } catch {
    return 0;
  }
}

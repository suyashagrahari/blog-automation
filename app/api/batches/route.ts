import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parseBatchBlogFile, parseBatchManifest } from "@/app/lib/batches";
import type { BatchBlogFile, BatchManifest, BatchWithBlogs } from "@/app/lib/types";

// Serve the Claude-Code-authored batches committed under content/batches/.
//
//   GET /api/batches          → { batches: BatchManifest[] }   (cards grid)
//   GET /api/batches?id=<id>  → BatchWithBlogs                 (batch detail)
//
// Vercel's bundler only ships statically-analysable files, so next.config.ts
// force-includes ./content/** for this route — without that, readdir finds an
// empty directory in production while working perfectly on localhost.
//
// `dynamic = "force-dynamic"` is still supported in Next 16 (it is only removed
// when Cache Components is enabled, which this app does not use). It stops the
// batch list from ever being prerendered empty at build time.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TAG = "[batches]";
const ROOT = path.join(process.cwd(), "content", "batches");

export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get("id");
  try {
    if (id) return json(await loadBatch(id));
    return json({ batches: await listBatches() });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to read batches";
    console.error(`${TAG} ✖`, message);
    return json({ error: message }, 500);
  }
}

/** Directory names under content/batches/, newest id first. */
async function batchDirs(): Promise<string[]> {
  try {
    const entries = await readdir(ROOT, { withFileTypes: true });
    return entries
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort()
      .reverse();
  } catch {
    // content/batches/ absent (fresh clone, or nothing generated yet).
    return [];
  }
}

async function listBatches(): Promise<BatchManifest[]> {
  const out: BatchManifest[] = [];
  for (const dir of await batchDirs()) {
    const m = await readManifest(dir);
    if (m) out.push(m);
    else console.warn(`${TAG} skipping ${dir}: unreadable batch.json`);
  }
  return out;
}

async function readManifest(dir: string): Promise<BatchManifest | null> {
  try {
    const raw = await readFile(path.join(ROOT, dir, "batch.json"), "utf8");
    return parseBatchManifest(JSON.parse(raw));
  } catch {
    return null;
  }
}

async function loadBatch(id: string): Promise<BatchWithBlogs> {
  // Reject traversal: an id must be a plain directory name.
  if (!/^[a-z0-9._-]+$/i.test(id)) throw new Error(`Invalid batch id: ${id}`);

  const manifest = await readManifest(id);
  if (!manifest) throw new Error(`Batch not found: ${id}`);

  const loaded: BatchBlogFile[] = [];
  const skipped: { file: string; why: string }[] = [];

  // Trust the directory over the manifest list, so a blog written but not yet
  // recorded in batch.json still shows up.
  let files: string[] = [];
  try {
    files = (await readdir(path.join(ROOT, id, "blogs")))
      .filter((f) => f.endsWith(".json"))
      .sort();
  } catch {
    files = manifest.blogs.map((s) => `${s}.json`);
  }

  for (const file of files) {
    try {
      const raw = await readFile(path.join(ROOT, id, "blogs", file), "utf8");
      const parsed = parseBatchBlogFile(JSON.parse(raw));
      if (parsed) loaded.push(parsed);
      else skipped.push({ file, why: "missing title, slug or contentMarkdown" });
    } catch (err) {
      skipped.push({ file, why: err instanceof Error ? err.message : "unreadable" });
    }
  }

  return { ...manifest, loaded, skipped };
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

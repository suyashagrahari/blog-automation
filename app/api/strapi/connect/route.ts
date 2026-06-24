import type { StrapiConnectBody } from "@/app/lib/types";

// Connect / change an existing article's category + author relations.
// Tries the custom updateAndPublish endpoint first (keeps the post published and
// fires the revalidate webhook). Falls back to the standard REST update.

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: Request) {
  let body: StrapiConnectBody;
  try {
    body = (await req.json()) as StrapiConnectBody;
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const { strapiUrl, strapiToken, documentId, categoryId, authorId, coverImageUrl } = body;
  if (!strapiUrl || !documentId) return json({ error: "Missing strapiUrl or documentId" }, 400);

  const base = strapiUrl.replace(/\/+$/, "");
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (strapiToken) headers.Authorization = `Bearer ${strapiToken}`;

  // null explicitly clears a relation; undefined leaves it untouched.
  const data: Record<string, unknown> = {};
  if (categoryId !== undefined) data.category = categoryId || null;
  if (authorId !== undefined) data.author = authorId || null;
  // coverImageUrl is a top-level scalar so it's safe to patch on its own. We do
  // NOT touch `seo` here — a partial component update would wipe the other SEO
  // fields, and the site's OG image already falls back to the cover image.
  if (coverImageUrl !== undefined) data.coverImageUrl = coverImageUrl || null;
  const payload = { data };

  // 1) custom update-and-publish endpoint
  const custom = await tryPut(`${base}/api/articles/automation/${documentId}`, headers, payload);
  if (custom.ok) return json({ ok: true, publishState: "published" });
  // 404/405 => custom endpoint not installed; fall back to the standard REST update.
  if (custom.status !== 404 && custom.status !== 405) return json({ error: custom.error }, 502);

  // 2) fallback: standard REST update (updates the entry; may stay a draft)
  const std = await tryPut(`${base}/api/articles/${documentId}`, headers, payload);
  if (std.ok) return json({ ok: true, publishState: "draft" });
  return json({ error: std.error }, 502);
}

interface PutResult {
  ok: boolean;
  status: number;
  error: string;
}

async function tryPut(url: string, headers: Record<string, string>, payload: unknown): Promise<PutResult> {
  try {
    const res = await fetch(url, { method: "PUT", headers, body: JSON.stringify(payload) });
    let data: unknown = null;
    try {
      data = await res.json();
    } catch {
      /* non-json */
    }
    if (!res.ok) {
      const d = data as { error?: { message?: string } } | null;
      return { ok: false, status: res.status, error: `Strapi ${res.status}: ${d?.error?.message || res.statusText}` };
    }
    return { ok: true, status: res.status, error: "" };
  } catch (err) {
    return { ok: false, status: 0, error: err instanceof Error ? err.message : "Network error" };
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}

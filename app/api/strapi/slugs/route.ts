// Return every article slug that exists in Strapi — draft OR published — each
// with its documentId.
//
// This is the published-lock for the Batches section. IndexedDB can't be the
// lock: the user publishes from Vercel preview URLs that change per branch, so
// a flag in one browser's IndexedDB is invisible on the next deploy and the
// same post could be published twice. Strapi enforces slug uniqueness, so the
// set of existing slugs IS the durable answer.
//
// `status=draft` in Strapi v5 returns drafts *and* published entries, so a post
// saved as a draft still counts as taken.
//
// The documentId matters as much as the slug: it is the only way to UPDATE a post
// that was published from a different browser or a previous deploy. Without it,
// re-publishing an edited post could only create, and Strapi's slug-conflict
// retry would split it into `<slug>-2`. `slugs` is still returned alongside
// `articles` so nothing that only needs the lock has to change.

export const runtime = "nodejs";
export const maxDuration = 60;

const TAG = "[strapi-slugs]";
const PAGE_SIZE = 100;
const MAX_PAGES = 100; // 10k articles — a backstop, not an expected limit

export async function GET(req: Request) {
  const strapiUrl = new URL(req.url).searchParams.get("strapiUrl") || "";
  const strapiToken = req.headers.get("x-strapi-token") || "";
  if (!strapiUrl) return json({ error: "Missing strapiUrl" }, 400);

  const base = strapiUrl.replace(/\/+$/, "");
  const headers: Record<string, string> = {};
  if (strapiToken) headers.Authorization = `Bearer ${strapiToken}`;

  const bySlug = new Map<string, string>(); // slug → documentId
  try {
    for (let page = 1; page <= MAX_PAGES; page++) {
      const url =
        `${base}/api/articles?fields[0]=slug&fields[1]=documentId&status=draft` +
        `&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`;
      const res = await fetch(url, { headers, cache: "no-store" });
      const data = (await res.json().catch(() => null)) as {
        data?: { slug?: string; documentId?: string; attributes?: { slug?: string } }[];
        error?: { message?: string };
      } | null;

      if (!res.ok) {
        return json({ error: `Strapi ${res.status}: ${data?.error?.message || res.statusText}` }, 502);
      }

      const list = data?.data || [];
      for (const row of list) {
        const slug = row.slug ?? row.attributes?.slug;
        // First writer wins. A draft and its published revision share a
        // documentId, so a duplicate slug here is the same post, not a clash.
        if (slug && !bySlug.has(slug)) bySlug.set(slug, String(row.documentId ?? ""));
      }
      if (list.length < PAGE_SIZE) break;
    }
    return json({
      slugs: [...bySlug.keys()],
      articles: [...bySlug].map(([slug, documentId]) => ({ slug, documentId })),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to reach Strapi";
    console.error(`${TAG} ✖`, message);
    return json({ error: message }, 502);
  }
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

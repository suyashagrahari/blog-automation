// Return every article slug that exists in Strapi — draft OR published.
//
// This is the published-lock for the Batches section. IndexedDB can't be the
// lock: the user publishes from Vercel preview URLs that change per branch, so
// a flag in one browser's IndexedDB is invisible on the next deploy and the
// same post could be published twice. Strapi enforces slug uniqueness, so the
// set of existing slugs IS the durable answer.
//
// `status=draft` in Strapi v5 returns drafts *and* published entries, so a post
// saved as a draft still counts as taken.

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

  const slugs = new Set<string>();
  try {
    for (let page = 1; page <= MAX_PAGES; page++) {
      const url =
        `${base}/api/articles?fields[0]=slug&status=draft` +
        `&pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}`;
      const res = await fetch(url, { headers, cache: "no-store" });
      const data = (await res.json().catch(() => null)) as {
        data?: { slug?: string; attributes?: { slug?: string } }[];
        error?: { message?: string };
      } | null;

      if (!res.ok) {
        return json({ error: `Strapi ${res.status}: ${data?.error?.message || res.statusText}` }, 502);
      }

      const list = data?.data || [];
      for (const row of list) {
        const slug = row.slug ?? row.attributes?.slug;
        if (slug) slugs.add(slug);
      }
      if (list.length < PAGE_SIZE) break;
    }
    return json({ slugs: [...slugs] });
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

/**
 * Clean-up for the SEO fields the model writes, applied before an article is
 * sent to Strapi.
 *
 * Both functions exist because the model's output went to Strapi verbatim and
 * was rendered verbatim, and in October 2026 that left 30 live posts with a
 * canonical pointing at a URL that does not exist:
 *  - some canonicals were markdown, `[url](url)`, which the site resolved to
 *    `https://subhsandesh.in/[https:/…](…)`, a 404;
 *  - some slugs were cut at 60 characters while the canonical kept the full
 *    slug, so the canonical named a post that was never published.
 */

/** `[x](y)` as the whole string → `x`. Prose that merely contains a link is untouched. */
const WHOLE_MD_LINK = /^\s*\[([^\]]+)\]\([^)]*\)\s*$/;

function unwrap(s: string): string {
  return s.replace(WHOLE_MD_LINK, "$1").trim();
}

/**
 * The canonical for a post published at `slug`: the stored canonical's origin
 * and path prefix, with its last segment replaced by the real slug. The
 * canonical can then never name a URL other than the one being published.
 * Returns undefined when there is no usable URL (the site falls back to self).
 */
export function selfCanonical(canonicalURL: string | undefined, slug: string): string | undefined {
  if (!canonicalURL) return undefined;
  let u: URL;
  try {
    u = new URL(unwrap(canonicalURL));
  } catch {
    return undefined;
  }
  const parts = u.pathname.replace(/\/+$/, "").split("/");
  parts[parts.length - 1] = slug;
  return `${u.origin}${parts.join("/")}`;
}

/** Recursively unwrap whole-string markdown links in structured data. */
export function unwrapMarkdownUrls<T>(value: T): T {
  if (typeof value === "string") return unwrap(value) as T;
  if (Array.isArray(value)) return value.map(unwrapMarkdownUrls) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, unwrapMarkdownUrls(v)]),
    ) as T;
  }
  return value;
}

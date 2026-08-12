// ─────────────────────────────────────────────────────────────────────────────
// Mirrors the JSON-LD @graph that subhsandesh.in emits for a blog post
// (client/components/JsonLd.tsx → ArticleGraphJsonLd), so the studio can show the
// COMPLETE schema a post will publish with — not only the blocks stored in
// seo.structuredData.
//
// Most of the graph is derived at render time from the article's own fields and
// the Strapi author record. Storing those nodes in seo.structuredData would be
// pointless: the renderer skips any block whose @type it already builds, because
// two BlogPosting or two FAQPage nodes on one page conflict with each other.
//
// Keep this in sync with ArticleGraphJsonLd. It is a preview, not the source of
// truth — the site is.
// ─────────────────────────────────────────────────────────────────────────────

import type { GeneratedArticle } from "./types";

const SITE_URL = "https://subhsandesh.in";
const SITE_NAME = "SubhSandesh";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** The Strapi author record, as it stands today. */
const AUTHOR = {
  slug: "author",
  name: "Suyash Agrahari",
  jobTitle: "Founder",
  profiles: [
    "https://x.com/SuyashAgrahari",
    "https://www.linkedin.com/in/suyash-agrahari-717260228/",
    "https://www.instagram.com/suyash_agrahari_",
    "https://github.com/suyashagrahari",
    "https://portfolio-website-mu-fawn-27.vercel.app/",
  ],
};

/** Types the site builds itself — emitting these from the batch file is a no-op. */
export const RENDERER_BUILT_TYPES = new Set([
  "article",
  "blogposting",
  "faqpage",
  "breadcrumblist",
  "website",
  "organization",
  "webapplication",
  "webpage",
  "person",
]);

export type GraphNode = Record<string, unknown>;

/** Where a node in the preview comes from — drives the labels in the studio. */
export type NodeOrigin = "renderer" | "batch";

export interface PreviewNode {
  origin: NodeOrigin;
  type: string;
  node: GraphNode;
}

export function buildPageGraph(
  a: GeneratedArticle,
  opts: { categoryName?: string; categorySlug?: string } = {}
): PreviewNode[] {
  const url = a.canonicalURL || `${SITE_URL}/blog/${a.slug}`;
  const orgId = `${SITE_URL}/#organization`;
  const siteId = `${SITE_URL}/#website`;
  const postId = `${url}#post`;
  const authorId = `${SITE_URL}/#person-${AUTHOR.slug}`;
  const image = a.coverImageUrl || OG_IMAGE;

  // Filled in by Strapi at publish time; shown so the shape is honest.
  const datePublished = "<publishedAt from Strapi>";

  const out: PreviewNode[] = [];
  const push = (origin: NodeOrigin, node: GraphNode) =>
    out.push({ origin, type: String(node["@type"]), node });

  push("renderer", {
    "@type": "Organization",
    "@id": orgId,
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: OG_IMAGE, width: 1370, height: 784 },
    founder: { "@id": authorId },
  });

  push("renderer", {
    "@type": "WebSite",
    "@id": siteId,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": orgId },
    inLanguage: ["en-IN", "en"],
  });

  push("renderer", {
    "@type": "Person",
    "@id": authorId,
    name: AUTHOR.name,
    url: `${SITE_URL}/blog`,
    jobTitle: AUTHOR.jobTitle,
    description: "<bio from Strapi>",
    image: { "@type": "ImageObject", url: "<avatar from Strapi>", width: 460, height: 460 },
    worksFor: { "@id": orgId },
    sameAs: AUTHOR.profiles,
  });

  const keywords = (a.keywords || "")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  const post: GraphNode = {
    "@type": "BlogPosting",
    "@id": postId,
    mainEntityOfPage: url,
    isPartOf: { "@id": siteId },
    headline: a.metaTitle || a.title,
    description: a.metaDescription || a.excerpt || a.title,
    datePublished,
    dateModified: datePublished,
    author: { "@id": authorId },
    publisher: { "@id": orgId },
    image: { "@type": "ImageObject", url: image, width: 1200, height: 630 },
    thumbnailUrl: image,
    wordCount: (a.contentMarkdown || "").split(/\s+/).filter(Boolean).length,
    ...(keywords.length ? { keywords } : {}),
    ...(opts.categoryName ? { articleSection: opts.categoryName } : {}),
    inLanguage: "en-IN",
    isAccessibleForFree: true,
    ...(a.readingTime ? { timeRequired: `PT${Math.round(a.readingTime)}M` } : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".article-summary", ".key-takeaways"],
    },
  };

  const breadcrumb = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    ...(opts.categoryName && opts.categorySlug
      ? [{ name: opts.categoryName, url: `${SITE_URL}/blog/category/${opts.categorySlug}` }]
      : []),
    { name: a.title, url },
  ];

  // Batch-authored blocks: an @id match enriches an existing node, everything else
  // is appended unless the renderer already builds that type.
  const appended: GraphNode[] = [];
  for (const raw of a.structuredData || []) {
    const rest = { ...(raw as GraphNode) };
    delete rest["@context"];
    const id = typeof rest["@id"] === "string" ? (rest["@id"] as string) : "";
    if (id === postId) {
      for (const [k, v] of Object.entries(rest)) {
        if (k === "@id" || k === "@type") continue;
        if (post[k] === undefined) post[k] = v;
      }
      continue;
    }
    const type = String(rest["@type"] || "").toLowerCase();
    if (!type || RENDERER_BUILT_TYPES.has(type)) continue;
    appended.push(rest);
  }

  // The BlogPosting is listed as "batch" when the file enriched it, because that is
  // where its citation / about / mentions actually came from.
  const enriched = (a.structuredData || []).some(
    (b) => (b as GraphNode)["@id"] === postId
  );
  push(enriched ? "batch" : "renderer", post);

  push("renderer", {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: breadcrumb.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: b.url,
    })),
  });

  if (a.faqs?.length) {
    push("renderer", {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: a.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  for (const node of appended) push("batch", node);

  return out;
}

/** The graph as the site would serialise it. */
export function serialisePageGraph(nodes: PreviewNode[]): string {
  return JSON.stringify(
    { "@context": "https://schema.org", "@graph": nodes.map((n) => n.node) },
    null,
    2
  );
}

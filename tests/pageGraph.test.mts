import { test } from "node:test";
import assert from "node:assert/strict";
import { buildPageGraph, serialisePageGraph, RENDERER_BUILT_TYPES } from "../app/lib/pageGraph.ts";
import type { GeneratedArticle } from "../app/lib/types.ts";

const POST_URL = "https://subhsandesh.in/blog/demo-post";

function article(overrides: Partial<GeneratedArticle> = {}): GeneratedArticle {
  return {
    title: "Demo Post",
    slug: "demo-post",
    excerpt: "An excerpt.",
    metaTitle: "Demo Post — Ranked",
    metaDescription: "A description.",
    keywords: "one, two",
    canonicalURL: POST_URL,
    ogType: "article",
    tags: ["demo"],
    keyTakeaways: ["A takeaway."],
    faqs: [{ question: "Q1?", answer: "A1." }],
    coverImageQuery: "demo",
    coverImagePrompt: "A demo cover.",
    contentMarkdown: "# Demo Post\n\nSome body text here.",
    readingTime: 7,
    structuredData: [],
    ...overrides,
  } as GeneratedArticle;
}

test("the graph carries every node type the live page emits, including FAQPage and Person", () => {
  const types = buildPageGraph(article()).map((n) => n.type);
  for (const expected of [
    "Organization",
    "WebSite",
    "Person",
    "BlogPosting",
    "BreadcrumbList",
    "FAQPage",
  ]) {
    assert.ok(types.includes(expected), `missing ${expected}`);
  }
});

test("FAQPage is built from article.faqs, not from structuredData", () => {
  const withFaqs = buildPageGraph(article());
  const faq = withFaqs.find((n) => n.type === "FAQPage");
  assert.equal((faq!.node.mainEntity as unknown[]).length, 1);
  assert.equal(faq!.origin, "renderer");

  // No FAQs on the article means no FAQPage anywhere — the batch file cannot supply one.
  const none = buildPageGraph(article({ faqs: [] }));
  assert.ok(!none.some((n) => n.type === "FAQPage"));
});

test("the Person node is site-wide, so every post references one author entity", () => {
  const a = buildPageGraph(article());
  const b = buildPageGraph(article({ slug: "other", canonicalURL: "https://subhsandesh.in/blog/other" }));
  const idOf = (g: ReturnType<typeof buildPageGraph>) => g.find((n) => n.type === "Person")!.node["@id"];
  assert.equal(idOf(a), idOf(b));
  assert.equal(idOf(a), "https://subhsandesh.in/#person-author");
});

test("Person carries the author's image, job title and all five profiles", () => {
  const person = buildPageGraph(article()).find((n) => n.type === "Person")!.node;
  assert.equal(person.jobTitle, "Founder");
  assert.ok(person.image, "no image on Person");
  assert.equal((person.sameAs as string[]).length, 5);
  assert.equal(person.worksFor && (person.worksFor as Record<string, string>)["@id"], "https://subhsandesh.in/#organization");
});

test("Organization does not claim the founder's personal profiles as its own", () => {
  const org = buildPageGraph(article()).find((n) => n.type === "Organization")!.node;
  assert.equal(org.sameAs, undefined);
  assert.deepEqual(org.founder, { "@id": "https://subhsandesh.in/#person-author" });
});

test("an @id-matched batch block enriches BlogPosting instead of duplicating it", () => {
  const g = buildPageGraph(
    article({
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${POST_URL}#post`,
          citation: [{ "@type": "CreativeWork", name: "A source" }],
        },
      ],
    })
  );
  assert.equal(g.filter((n) => n.type === "BlogPosting").length, 1);
  const post = g.find((n) => n.type === "BlogPosting")!;
  assert.ok(post.node.citation, "citation was not merged in");
  assert.equal(post.origin, "batch", "an enriched post should be attributed to the batch file");
  // Renderer-derived values survive the merge.
  assert.equal(post.node.headline, "Demo Post — Ranked");
  assert.equal(post.node.isAccessibleForFree, true);
});

test("an enrichment block can never overwrite a renderer-derived value", () => {
  const g = buildPageGraph(
    article({
      structuredData: [
        { "@type": "BlogPosting", "@id": `${POST_URL}#post`, headline: "HIJACKED", wordCount: 999999 },
      ],
    })
  );
  const post = g.find((n) => n.type === "BlogPosting")!.node;
  assert.equal(post.headline, "Demo Post — Ranked");
  assert.notEqual(post.wordCount, 999999);
});

test("batch blocks of a renderer-built type are dropped, supplementary types kept", () => {
  const g = buildPageGraph(
    article({
      structuredData: [
        { "@type": "FAQPage", mainEntity: [] },
        { "@type": "Organization", name: "Imposter" },
        { "@type": "ItemList", "@id": `${POST_URL}#ideas`, numberOfItems: 8 },
      ],
    })
  );
  assert.equal(g.filter((n) => n.type === "FAQPage").length, 1, "duplicate FAQPage leaked in");
  assert.equal(g.filter((n) => n.type === "Organization").length, 1);
  assert.ok(g.some((n) => n.type === "ItemList"), "ItemList should be appended");
  for (const t of ["faqpage", "organization"]) assert.ok(RENDERER_BUILT_TYPES.has(t));
});

test("serialisePageGraph emits one @graph with a single @context", () => {
  const out = JSON.parse(serialisePageGraph(buildPageGraph(article())));
  assert.equal(out["@context"], "https://schema.org");
  assert.ok(Array.isArray(out["@graph"]));
  assert.ok(!out["@graph"].some((n: Record<string, unknown>) => "@context" in n));
});

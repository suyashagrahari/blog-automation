import { test } from "node:test";
import assert from "node:assert/strict";
import {
  parseBatchManifest,
  parseBatchBlogFile,
  wordCount,
  resolveCategoryId,
  resolveTemplateIds,
  batchBlogPublishState,
  mergeBatchBlog,
  changedFields,
  recanonicalise,
  normaliseSlug,
} from "../app/lib/batches.ts";

test("parseBatchManifest accepts a valid manifest", () => {
  const m = parseBatchManifest({
    kind: "blog-automation/batch",
    version: 1,
    id: "2026-01-01-fixture",
    name: "Fixture",
    createdAt: "2026-01-01T00:00:00.000Z",
    keywords: ["a"],
    blogs: ["fixture-post"],
  });
  assert.equal(m?.id, "2026-01-01-fixture");
  assert.deepEqual(m?.blogs, ["fixture-post"]);
});

test("parseBatchManifest rejects wrong kind and missing id", () => {
  assert.equal(parseBatchManifest({ kind: "nope", version: 1, id: "x" }), null);
  assert.equal(parseBatchManifest({ kind: "blog-automation/batch", version: 1 }), null);
  assert.equal(parseBatchManifest(null), null);
  assert.equal(parseBatchManifest("string"), null);
});

test("parseBatchBlogFile requires title, slug and contentMarkdown", () => {
  const ok = parseBatchBlogFile({
    kind: "blog-automation/batch-blog",
    version: 1,
    article: { title: "T", slug: "t", contentMarkdown: "# hi there" },
    batchMeta: {
      keyword: "k",
      angle: "a",
      factsUsed: [],
      sources: [],
      auditReport: { passed: [], failed: [], honestAssessment: "" },
      generatedAt: "2026-01-01T00:00:00.000Z",
    },
  });
  assert.equal(ok?.article.slug, "t");
  // defaults filled so the UI never hits undefined
  assert.deepEqual(ok?.article.tags, []);
  assert.deepEqual(ok?.article.faqs, []);

  assert.equal(
    parseBatchBlogFile({ kind: "blog-automation/batch-blog", version: 1, article: { title: "T" }, batchMeta: {} }),
    null
  );
  assert.equal(parseBatchBlogFile({ kind: "wrong", version: 1 }), null);
});

test("wordCount ignores markdown syntax", () => {
  assert.equal(wordCount("# Title\n\nOne two three."), 4);
  assert.equal(wordCount(""), 0);
});

test("resolveCategoryId matches on slug then name, case-insensitively", () => {
  const cats = [
    { documentId: "c1", name: "Festivals", slug: "festivals" },
    { documentId: "c2", name: "Birthday Ideas" },
  ];
  assert.equal(resolveCategoryId("festivals", cats), "c1");
  assert.equal(resolveCategoryId("FESTIVALS", cats), "c1");
  assert.equal(resolveCategoryId("birthday ideas", cats), "c2");
  assert.equal(resolveCategoryId("nonexistent", cats), undefined);
  assert.equal(resolveCategoryId(undefined, cats), undefined);
});

test("resolveTemplateIds matches by url path and reports misses", () => {
  const tpls = [
    { documentId: "t1", name: "Holi", url: "/holi" },
    { documentId: "t2", name: "Birthday GF", url: "https://subhsandesh.in/birthday-gf" },
  ];
  const r = resolveTemplateIds(["/holi", "/birthday-gf", "/ghost"], tpls);
  assert.deepEqual(r.ids, ["t1", "t2"]);
  assert.deepEqual(r.missing, ["/ghost"]);
});

test("batchBlogPublishState locks a slug that already exists in Strapi", () => {
  const slugs = new Set(["already-there"]);
  assert.equal(batchBlogPublishState("already-there", slugs), "published");
  assert.equal(batchBlogPublishState("brand-new", slugs), "unpublished");
});

// ── Edits: overlaying a user's changes on a committed batch file ──────────────

const baseArticle = {
  title: "Original title",
  slug: "original-slug",
  excerpt: "Original excerpt",
  metaTitle: "Original meta",
  metaDescription: "Original desc",
  keywords: "a, b",
  canonicalURL: "https://subhsandesh.in/blog/original-slug",
  ogType: "article",
  tags: ["x", "y"],
  keyTakeaways: ["k1"],
  faqs: [{ question: "Q1", answer: "A1" }],
  coverImageQuery: "q",
  coverImagePrompt: "p",
  contentMarkdown: "# Body\n\nText.",
};

const baseFile = {
  kind: "blog-automation/batch-blog" as const,
  version: 1 as const,
  article: baseArticle,
  batchMeta: {
    keyword: "kw",
    angle: "",
    factsUsed: [],
    sources: [],
    auditReport: { passed: [], failed: [], honestAssessment: "" },
    generatedAt: "2026-01-01T00:00:00.000Z",
  },
};

const editOf = (article: typeof baseArticle) => ({
  id: "b::original-slug",
  batchId: "b",
  originalSlug: "original-slug",
  article,
  createdAt: "2026-01-01T00:00:00.000Z",
  updatedAt: "2026-01-01T00:00:00.000Z",
});

test("mergeBatchBlog returns the file untouched when there is no edit", () => {
  const merged = mergeBatchBlog(baseFile, undefined);
  assert.equal(merged.article, baseFile.article); // identity, so callers can skip work
});

test("mergeBatchBlog lays the edited article over the committed file", () => {
  const merged = mergeBatchBlog(baseFile, editOf({ ...baseArticle, title: "New title" }));
  assert.equal(merged.article.title, "New title");
  assert.equal(merged.batchMeta.keyword, "kw"); // batchMeta is never edited
});

test("changedFields reports exactly the fields that differ", () => {
  assert.deepEqual(changedFields(baseFile, undefined), []);
  assert.deepEqual(changedFields(baseFile, editOf({ ...baseArticle })), []);
  assert.deepEqual(
    changedFields(baseFile, editOf({ ...baseArticle, title: "New", slug: "new-slug" })),
    ["title", "slug"]
  );
});

test("changedFields compares arrays and FAQs by value, including order", () => {
  assert.deepEqual(changedFields(baseFile, editOf({ ...baseArticle, tags: ["y", "x"] })), ["tags"]);
  assert.deepEqual(changedFields(baseFile, editOf({ ...baseArticle, tags: ["x", "y"] })), []);
  assert.deepEqual(
    changedFields(baseFile, editOf({ ...baseArticle, faqs: [{ question: "Q1", answer: "A2" }] })),
    ["faqs"]
  );
  assert.deepEqual(
    changedFields(baseFile, editOf({ ...baseArticle, faqs: [...baseArticle.faqs, { question: "Q2", answer: "A2" }] })),
    ["faqs"]
  );
});

test("recanonicalise rewrites a canonical that ends in the old slug", () => {
  assert.equal(
    recanonicalise("https://subhsandesh.in/blog/old", "old", "new"),
    "https://subhsandesh.in/blog/new"
  );
  // trailing slash
  assert.equal(
    recanonicalise("https://subhsandesh.in/blog/old/", "old", "new"),
    "https://subhsandesh.in/blog/new"
  );
});

test("recanonicalise leaves a deliberate canonical pointing elsewhere alone", () => {
  assert.equal(
    recanonicalise("https://example.com/somewhere-else", "old", "new"),
    "https://example.com/somewhere-else"
  );
  // a slug appearing mid-path is not the canonical's own slug
  assert.equal(
    recanonicalise("https://subhsandesh.in/old/other", "old", "new"),
    "https://subhsandesh.in/old/other"
  );
  assert.equal(recanonicalise(undefined, "old", "new"), undefined);
  assert.equal(recanonicalise("https://x.in/blog/old", "old", "old"), "https://x.in/blog/old");
});

test("recanonicalise treats regex metacharacters in a slug literally", () => {
  // A slug can never legally contain a dot, but a stale file might — and `.`
  // must not match an arbitrary character and rewrite the wrong URL.
  assert.equal(recanonicalise("https://x.in/blog/aXb", "a.b", "new"), "https://x.in/blog/aXb");
});

test("normaliseSlug produces a slug Strapi will accept", () => {
  assert.equal(normaliseSlug("  Happy Raksha Bandhan 2026!  "), "happy-raksha-bandhan-2026");
  assert.equal(normaliseSlug("Multiple   Spaces"), "multiple-spaces");
  assert.equal(normaliseSlug("--leading-and-trailing--"), "leading-and-trailing");
  assert.equal(normaliseSlug("Ünïcode & symbols#"), "ncode-symbols");
  assert.equal(normaliseSlug(""), "");
});

import { test } from "node:test";
import assert from "node:assert/strict";
import {
  parseBatchManifest,
  parseBatchBlogFile,
  wordCount,
  resolveCategoryId,
  resolveTemplateIds,
  batchBlogPublishState,
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

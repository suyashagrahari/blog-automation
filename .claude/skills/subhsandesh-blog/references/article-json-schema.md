# Batch JSON schema

This is a **contract**, not a suggestion. `app/lib/batches.ts` parses these files
and `parseBatchBlogFile()` returns `null` — the file is silently skipped and
reported as "skipped" in the studio — if `article.title`, `article.slug` or
`article.contentMarkdown` is missing.

`article` must match the `GeneratedArticle` interface in `app/lib/types.ts`
**exactly**, because `toStrapiData()` in `app/api/strapi/route.ts` consumes it
unchanged. Do not add fields to `article`; put anything extra in `batchMeta`,
which never reaches Strapi.

---

## File layout

```
content/batches/<batchId>/
├── batch.json
├── blogs/<slug>.json
└── research/<slug>.md
```

`<batchId>` is `<YYYY-MM-DD>-<short-name>`, e.g. `2026-08-12-diwali`.
`<slug>` is the article slug, so filename and slug always agree.

---

## `batch.json`

```json
{
  "kind": "blog-automation/batch",
  "version": 1,
  "id": "2026-08-12-diwali",
  "name": "Diwali cluster",
  "createdAt": "2026-08-12T10:00:00.000Z",
  "branch": "batch/2026-08-12-diwali",
  "keywords": ["diwali gift ideas for parents living abroad"],
  "blogs": ["diwali-gift-ideas-for-parents-abroad"]
}
```

| Field | Rule |
|---|---|
| `kind` | Exactly `"blog-automation/batch"`. Anything else → batch ignored. |
| `id` | Must equal the directory name. `[a-z0-9._-]+` only. |
| `name` | Human label shown on the batch card. |
| `createdAt` | ISO 8601. |
| `branch` | The git branch, shown on the card. Optional but include it. |
| `keywords` | One entry per keyword in the batch. |
| `blogs` | Slugs. The route trusts the `blogs/` directory over this list, but keep it accurate. |

---

## `blogs/<slug>.json`

```json
{
  "kind": "blog-automation/batch-blog",
  "version": 1,
  "article": {
    "title": "Diwali Gifts for Parents Living Abroad: What Actually Arrives On Time",
    "slug": "diwali-gift-ideas-for-parents-abroad",
    "excerpt": "International Diwali shipping needs 9–14 days. Here's what to send instead when you've left it late, with delivery windows and real costs.",
    "metaTitle": "Diwali Gifts for Parents Abroad (2026) — What Arrives On Time",
    "metaDescription": "International Diwali gift shipping takes 9–14 days. Compare what actually arrives on time, with real delivery windows, costs and a same-day digital option.",
    "keywords": "diwali gifts for parents abroad, international diwali delivery, last minute diwali gift",
    "canonicalURL": "https://subhsandesh.in/blog/diwali-gift-ideas-for-parents-abroad",
    "ogType": "article",
    "tags": ["diwali", "gifts", "family", "nri"],
    "keyTakeaways": [
      "International Diwali parcels need 9–14 days; courier cut-offs are earlier than most people expect.",
      "A shareable Diwali page arrives instantly — 52.7% of them are opened on a phone, so the recipient needs nothing but a link.",
      "Password-protecting the page matters more than people assume: 44.8% of SubhSandesh creators do it before sharing."
    ],
    "faqs": [
      { "question": "How late can I send a Diwali gift abroad?", "answer": "Standard international courier needs 9–14 days, so the practical cut-off is two weeks before Diwali. After that, express is the only physical option and costs roughly three times as much." }
    ],
    "coverImageQuery": "diwali diyas video call family",
    "coverImagePrompt": "A warm, photorealistic scene of an older Indian couple on a video call, lit by diyas on the table in front of them. Soft golden light, shallow depth of field, clean negative space at the top for a title overlay, 16:9. No text except a small subtle \"subhsandesh.in\" watermark bottom-right.",
    "contentMarkdown": "# Diwali Gifts for Parents Living Abroad\n\nInternational Diwali parcels take 9–14 days...",
    "readingTime": 7,
    "structuredData": [
      { "@context": "https://schema.org", "@type": "Article", "headline": "…", "datePublished": "2026-08-12", "dateModified": "2026-08-12", "image": "…" },
      { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How late can I send a Diwali gift abroad?", "acceptedAnswer": { "@type": "Answer", "text": "Standard international courier needs 9–14 days…" } }] }
    ]
  },
  "batchMeta": {
    "keyword": "diwali gift ideas for parents living abroad",
    "angle": "Wins by being the only post that gives real international delivery cut-off dates alongside an instant digital alternative, using SubhSandesh's own 52.7% mobile-open rate.",
    "categorySlug": "festivals",
    "templateUrls": ["/templates", "/birthday-parents"],
    "factsUsed": [
      "52.7% of shared pages are opened on a phone (16,214 of 30,794 views) — measured 2026-08-12",
      "44.8% of creators password-protect their page before sharing it — measured 2026-08-12",
      "2,625 personalised pages created since 2026-03-12 — measured 2026-08-12"
    ],
    "sources": [
      { "url": "https://www.indiapost.gov.in/…", "stat": "International speed post delivery standard of 9–14 days", "publishedDate": "2025-06-01" }
    ],
    "auditReport": {
      "passed": ["Direct answer in the first 150 words, before any context-setting", "One comparison table with real values, 3–5 rows"],
      "failed": [{ "item": "3–6 outbound links, all WebFetched and verified to contain the cited fact", "why": "only 2 sources carried a verifiable delivery-window figure" }],
      "honestAssessment": "It's the only page giving dated courier cut-offs next to an instant alternative, and the mobile-open rate is unavailable to competitors. Domain authority is well below the incumbent gifting retailers, so expect months, not weeks."
    },
    "generatedAt": "2026-08-12T10:04:00.000Z"
  }
}
```

---

## `article` field rules

| Field | Type | Rule |
|---|---|---|
| `title` | string | **Required.** |
| `slug` | string | **Required.** Lowercase, hyphenated, no stop words. Must not already exist in Strapi. |
| `contentMarkdown` | string | **Required.** Full body, starting with the single `#` H1. |
| `excerpt` | string | ≤ 300 chars (Strapi cap). |
| `metaTitle` | string | ≤ 70 chars (Strapi cap); target under 60. Defaults to `title` if empty. |
| `metaDescription` | string | ≤ 170 chars (Strapi cap); target 150–160. Defaults to `excerpt`. |
| `keywords` | string | **Comma-separated string, not an array.** |
| `canonicalURL` | string? | `https://subhsandesh.in/blog/<slug>`. |
| `ogType` | string? | `"article"`. |
| `tags` | string[] | 3–6 lowercase tags. |
| `keyTakeaways` | string[] | 3–5 standalone claims, numbers where possible. Renders as the TL;DR callout. |
| `faqs` | `{question, answer}[]` | **8–12 entries.** Entries missing either field are dropped. |
| `coverImageQuery` | string | 3–7 words for a stock search. |
| `coverImagePrompt` | string | 3–4 sentences for an image generator. |
| `contentMarkdown` | string | 1,200–1,800 words. |
| `readingTime` | number? | Minutes. Omit and Strapi computes it. |
| `structuredData` | object[] | **Array**, not a single object. Must include Article + FAQPage. |

Do **not** set `coverImageUrl` — covers are attached in the studio after
publishing.

## `batchMeta` field rules

| Field | Type | Rule |
|---|---|---|
| `keyword` | string | The target keyword, verbatim. |
| `angle` | string | The Phase 2 one-liner. |
| `categorySlug` | string? | Must match a live Strapi category slug, else an amber warning. |
| `templateUrls` | string[] | 1–3 paths from `TEMPLATE_LINKS`. Matched on last path segment. |
| `factsUsed` | string[] | Copy the lines from `content/facts.md` verbatim, dates included. |
| `sources` | `{url, stat, publishedDate?}[]` | 4–6. Entries with no `url` are dropped. |
| `auditReport.passed` | string[] | Checklist item strings that passed. |
| `auditReport.failed` | `{item, why}[]` | Item string + why it failed. |
| `auditReport.honestAssessment` | string | Required in substance — an empty string renders as "—" and defeats the point. |
| `generatedAt` | string | ISO 8601. |

---

## Validate before committing

```bash
node --input-type=module -e '
import { readFile, readdir } from "node:fs/promises";
const dir = process.argv[1];
for (const f of (await readdir(dir)).filter(n => n.endsWith(".json"))) {
  const raw = JSON.parse(await readFile(`${dir}/${f}`, "utf8"));
  const a = raw.article ?? {};
  const problems = [];
  if (raw.kind !== "blog-automation/batch-blog") problems.push("wrong kind");
  for (const k of ["title", "slug", "contentMarkdown"]) if (!a[k]) problems.push(`missing ${k}`);
  if ((a.metaTitle ?? "").length > 70) problems.push("metaTitle > 70");
  if ((a.metaDescription ?? "").length > 170) problems.push("metaDescription > 170");
  if ((a.excerpt ?? "").length > 300) problems.push("excerpt > 300");
  if (!Array.isArray(a.faqs) || a.faqs.length < 8) problems.push(`faqs = ${a.faqs?.length ?? 0}, want 8-12`);
  if (!Array.isArray(a.structuredData)) problems.push("structuredData must be an array");
  const words = (a.contentMarkdown ?? "").split(/\s+/).filter(Boolean).length;
  if (words < 1200 || words > 1800) problems.push(`${words} words, want 1200-1800`);
  console.log(problems.length ? `✖ ${f}: ${problems.join("; ")}` : `✔ ${f} (${words} words)`);
}' content/batches/<batchId>/blogs
```

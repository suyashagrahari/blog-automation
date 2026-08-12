# Publish checklist

Run every item and record the result honestly into `batchMeta.auditReport`.
**Flag failures rather than silently fixing them** — the user needs to know where
the post is weak, and a quietly-dropped requirement is worse than a reported
failure.

Each item below is the exact string to use in `passed` or as `failed[].item`, so
the studio's Audit tab reads consistently across posts.

## Originality — fail any of these and the post will not be cited

- [ ] At least 3 first-party facts appear, and at least 2 are in the first 150 words
- [ ] The post contains at least one claim none of the top 5 pages make
- [ ] The angle statement is honestly answerable: "wins by being the only post that ___"
- [ ] No section closely mirrors a competitor page's structure or framing

## Answer engine optimisation

- [ ] Direct answer in the first 150 words, before any context-setting
- [ ] Every H2 section answerable standalone in 2–3 sentences
- [ ] Paragraphs 2–3 sentences throughout
- [ ] At least one specific number, date, price or named source per H2 section
- [ ] One comparison table with real values, 3–5 rows
- [ ] At least one table column uses first-party data
- [ ] FAQ with 8–12 naturally phrased questions
- [ ] FAQs appear ONLY in article.faqs and the FAQPage JSON-LD, never in contentMarkdown
- [ ] H2s map to the fan-out sub-queries identified in Phase 2

## Traditional SEO

- [ ] Target keyword in H1, metaTitle, slug, and first 100 words
- [ ] metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)
- [ ] metaTitle differs from the H1, uses one separator, and carries a differentiator no competitor could claim
- [ ] No banned booster in metaTitle (Best, Top, Ultimate, Complete Guide, Everything You Need to Know)
- [ ] No year-stamp on an evergreen title; no brand suffix; one keyword only
- [ ] metaDescription 150–160 characters (hard cap 170)
- [ ] metaDescription leads with the answer, carries the keyword near the start and at least one number, and has no CTA cliché
- [ ] excerpt under 300 characters
- [ ] Exactly one H1; no skipped heading levels
- [ ] 1,500–1,800 words in contentMarkdown excluding FAQs, no padding
- [ ] Slug short, hyphenated, lowercase, no stop words
- [ ] Slug is not already taken in Strapi

## Links

- [ ] 3–6 outbound links, all WebFetched and verified to contain the cited fact
- [ ] Every outbound fact passes the "would it stay without the link" test
- [ ] Zero competitor links
- [ ] Wikipedia links: 0–2, entities only
- [ ] 2–4 internal links with descriptive anchor text, placed after value is established
- [ ] Every internal link is a real URL from TEMPLATE_LINKS

## Trust signals

- [ ] Sources list with publication dates
- [ ] At least one section naming a downside, limit, or case where SubhSandesh loses
- [ ] keyTakeaways present, 3–5 bullets, each standalone with a number where possible

## Technical

- [ ] structuredData contains both an Article and a FAQPage block
- [ ] FAQPage JSON-LD matches the visible FAQ text exactly
- [ ] categorySlug matches a real Strapi category slug
- [ ] templateUrls all exist in TEMPLATE_LINKS
- [ ] Batch JSON validates against references/article-json-schema.md

## Honest assessment

State plainly, in one or two sentences, as `auditReport.honestAssessment`: **why
would an answer engine cite this over the five pages analysed?**

If the answer is only "it's better written" or "it's more comprehensive", say that
the post is unlikely to outperform, and name what would need to change.

Also note what the post cannot overcome — domain authority gaps, backlink
deficits, entrenched competitors. Ranking takes months. **Do not predict
outcomes.**

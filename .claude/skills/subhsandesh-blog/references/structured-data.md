# Structured data — what to put in `structuredData`, and what not to

`article.structuredData` reaches Strapi as `seo.structuredData`, and the site
renders it through `ArticleGraphJsonLd` in `client/components/JsonLd.tsx`. That
component already builds most of the graph itself. **Writing a node it already
builds is not additive — it is silently discarded**, *unless* the block carries an
`@id` that matches a node the renderer already emitted, in which case it is merged
into that node instead. `@id` is what decides survival, not `@type`
(`client/components/JsonLd.tsx:622-637`): an `@id`-matched block merges before the
type filter ever runs, and only an unmatched block is tested and dropped. That is
why the enrichment route below works and a bare `FAQPage` does not.

Read this before writing the field. The default instinct (emit a big Article plus
a FAQPage) produces exactly zero effect.

---

## The division of labour

The renderer builds these from the article's own fields, as one unified `@graph`:

| Node | Built from |
|---|---|
| `Organization` | Site constants — logo `ImageObject`, `sameAs`, and `founder` pointing at the author when their job title says founder |
| `WebSite` | Site constants, with `SearchAction` |
| `Person` | The Strapi author relation — `name`, `jobTitle`, `description` (bio), `image` (avatar `ImageObject` with real dimensions), `worksFor`, and `sameAs` unioning the Strapi profiles with the site's founder profiles. Its `@id` is **site-wide** (`/#person-<slug>`), not per-article, so all ~834 posts reference one Person entity and author authority accumulates in one place |
| `BlogPosting` | title, metaDescription, dates, image + `thumbnailUrl`, `wordCount`, `timeRequired`, `keywords`, `articleSection`, `inLanguage`, `isAccessibleForFree`, `speakable` |
| `BreadcrumbList` | Home › Blog › category › article |
| `FAQPage` | `article.faqs` — **this** is why FAQs go in that field and not the body |

Every one of those is emitted for **every** post automatically. Nothing in the
batch JSON is needed to get them, and nothing you write can improve them — fix the
article's own fields or the Strapi author record instead.

Any block you emit whose `@type` is in `COVERED_LD_TYPES` — `article`,
`blogposting`, `faqpage`, `breadcrumblist`, `website`, `organization`,
`webapplication`, `webpage` — plus `person`, is dropped on the floor. A duplicate
`FAQPage` or a second `BlogPosting` is worse than none: conflicting nodes for the
same page are a self-inflicted wound.

## So the field carries exactly two things

**1. Supplementary node types the renderer cannot derive.**

`ItemList` is the one that earns its place on most posts here. If the body ranks
or numbers things — "8 miss you ideas", "5 wedding invite formats" — an `ItemList`
with `itemListOrder`, `numberOfItems` and one `ListItem` per H3 makes the ranking
machine-extractable. That is the whole game for answer engines: they lift lists.
Mirror the H3s exactly, in the same order, and keep each `description` to the
concrete facts (cost, time, delivery window).

**2. An `@id`-matched enrichment block.**

`about`, `mentions` and `citation` are *properties of* `BlogPosting`, so they
cannot be added as a separate node. (Do not send `isAccessibleForFree`,
`timeRequired` or `thumbnailUrl` — the renderer derives all three for every post.) Emit a block whose
`@id` is `<canonicalURL>#post` and the renderer merges its properties into the
existing `BlogPosting` instead of appending a duplicate. Renderer-built values
always win, so an enrichment block can fill gaps but never rewrite the graph.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://subhsandesh.in/blog/<slug>#post",
  "about":    [ { "@type": "Thing", "name": "…", "sameAs": ["https://en.wikipedia.org/wiki/…", "https://www.wikidata.org/wiki/Q…"] } ],
  "mentions": [ { "@type": "Organization", "name": "India Post", "sameAs": [ … ] } ],
  "citation": [ { "@type": "CreativeWork", "name": "…", "url": "…", "datePublished": "…", "publisher": { "@type": "Organization", "name": "…" } } ]
}
```

**`datePublished` means when the source was published — never when you fetched it.**
Wikipedia, Drik Panchang, dictionary entries and government portals are
continuously updated and publish no date; stamping them with the day of the run
puts a false claim inside machine-readable data that answer engines parse, and it
is invisible in the rendered page. **Omit the field** when the source carries no
publication date. If the page states a "last updated" date, that is `dateModified`,
not `datePublished`. Recording the retrieval date in `batchMeta.sources` is fine —
that never reaches Strapi — but it must not flow through into `citation`.

**`citation` is the highest-leverage thing on this page for GEO.** It states, in
machine-readable form, that the post is backed by named third-party research with
dates. Mirror `batchMeta.sources` one-to-one — that array never reaches Strapi, so
this block is the only way the citations survive into the published page.

**`about` and `mentions` ground the post's entities.** One `about` for the primary
subject; two to four `mentions` for organisations, places and concepts the post
genuinely discusses. Both need real `sameAs` targets.

**Verify every `sameAs` before using it.** Never hand-write a Wikipedia URL:

```bash
curl -s "https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageprops&ppprop=wikibase_item&titles=India%20Post%7CLong-distance%20relationship"
```

A `missing` key means the title is wrong; `wikibase_item` gives the Wikidata QID.
Pair both URLs. Note this is not a body link, so it does not count against the
0–2 Wikipedia budget in `tone-and-links.md`.

---

## Never add these

**`AggregateRating` or `Review` on a blog post.** There are no ratings for an
article, so any numbers would be invented. Fabricated review markup is a
structured-data policy violation with an asymmetric downside — a manual action
costs far more than star snippets are worth. If genuine ratings ever exist, they
belong on the thing rated, sourced from real collected reviews, never typed by
hand.

**`HowTo`.** Google dropped HowTo rich results in 2023, and most posts here are
not procedures anyway. Only consider it if the body genuinely is an ordered set of
steps, and expect no visual treatment.

**Markup for anything not on the page.** The rule is unconditional. Schema
describes the page; it does not decorate it.

**A second `speakable`.** The renderer already sets `.article-summary` and
`.key-takeaways`, and those selectors exist in the blog template. Inventing a
third selector that no element carries is worse than nothing.

---

## One honest note on FAQPage

Google restricted FAQ rich results to authoritative government and health sites in
2023, so do not expect accordions in the SERP. Keep the markup anyway: answer
engines parse it directly, and the `faqs` field drives both the JSON-LD and the
visible on-page section. Do not add FAQs "for the rich result" — add them because
they answer the fan-out sub-queries.

---

## Applying this to every post

The renderer-built half of the graph — Organization, WebSite, the full Person
entity, BlogPosting, BreadcrumbList, FAQPage — already applies to all ~834 live
articles. It needs no per-post work, and a change there improves every post at
once. That is the right lever for anything universal.

The studio half cannot be applied retroactively in bulk, and should not be faked:

- `citation` requires that post's real, fetched sources. An article written before
  the sourcing rules existed has none, and inventing them is out of the question.
- `about` / `mentions` require verified entities for that post's actual subject.
- `ItemList` requires the body to genuinely contain a ranked or numbered list.

So for a backfill, work newest-first or highest-traffic-first, and treat each post
as a small Phase 3 + Phase 5 pass: fetch its sources, verify its entities, then
add the two blocks. A post with no verifiable sources gets no `citation` block —
that is the honest outcome, not a gap to paper over.

## Check before emitting

- [ ] No block whose `@type` is in `COVERED_LD_TYPES` unless its `@id` is `<canonicalURL>#post`
- [ ] `citation` mirrors `batchMeta.sources` one-to-one, with dates
- [ ] Every `sameAs` verified against the Wikipedia API, with its Wikidata QID paired
- [ ] `ItemList` mirrors the body's H3s exactly, same order and count
- [ ] No `AggregateRating`, no `Review`, no `HowTo`, nothing not on the page

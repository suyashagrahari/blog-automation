# Research brief — `propose day quotes for parents`

- **Slug:** `propose-day-quotes-for-parents` (checked 2026-09-24, Strapi returns `total: 0` — free)
- **Category:** `modern-romance`
- **Batch:** `2026-09-24-propose-30c` (wave 4)
- **Demand:** low — 1 autocomplete prefix, ordinal only. `prefix_hits` is ordinal demand, not volume, and is not printed anywhere in the post.

---

## Phase 0 — first-party data gate

Passed. `content/facts.md` regenerated 2026-09-24. Five facts used, copied verbatim; two sit inside the first 150 words (5,148 pages across 21 page types; 90.9% published and shared).

Mandatory honesty constraints applied:

- No proposal-specific data exists. Every figure is labelled **platform-wide across 21 page types** or **sampled on `/apology-dashboard`, n=1,375**, in body prose.
- The pricing block is empty. No price, free-tier or paid-tier claim appears anywhere.

---

## Phase 1 — SERP, and what was actually measured

**Search budget used: 2 of the 4 allowed WebSearch calls.** One for the SERP, one for open-access repositories. The rest of the research ran through `findpapers.mjs`, the Europe PMC REST API and the DOAJ API.

What was observed, and nothing more: a single result listing for the exact phrase `propose day quotes for parents`, retrieved 2026-09-24, served to a **United States** location. Nine results, all generic romantic Propose Day or marriage-proposal quote pages — jewellery and gifting retailers, a wishes aggregator, an image board, a wedding-planning site. **None was written for a parent.**

**No page was fetched.** Only titles and URLs were read. Consequently:

- The post describes *who competes*, never *what is inside* those pages.
- No claim of the form "no competitor covers X" appears.
- Checklist item *"The post contains at least one claim none of the top 5 pages make"* is recorded as **failed**, because it is not verifiable on this evidence.
- None of this batch's keywords appears among the 11 India-served SERPs measured 2026-09-16.

No comparison table of the top 5 is produced here, because there is no fetched data to put in one. Writing one from titles would be exactly the wave-2 defect the BRIEF names.

---

## Phase 2 — Gap and angle

**The query's real problem.** Propose Day is a romantic occasion inside Valentine week. "Quotes for parents" is therefore a category error for most people typing it. Three different readers arrive:

1. **Wants a parent included in Valentine week.** Legitimate need, but a romantic line addressed to a parent reads wrong.
2. **Parents are a couple; wants to mark *their* relationship.** The only case where the occasion genuinely fits — there really was a proposal and it is theirs.
3. **Confused Propose Day with a family occasion.** Wants Mother's Day, Father's Day or the wedding anniversary.

**The gap.** Every incumbent visible in the listing sells romantic lines and would, at best, restack them under a "for parents" heading. Nobody triages the query. Nobody tells reader 3 they are on the wrong page. Nobody writes the one case that works.

**Angle (recorded as `batchMeta.angle`):** wins by being the only Propose Day quotes page that says in its first 150 words that this is not a family occasion, then splits the query into its three real readers and serves each separately — including the reader whose honest answer is to send nothing.

**Fan-out sub-queries → H2 map:**

| Sub-query | H2 |
|---|---|
| what is Propose Day / is it for family | What Propose Day is, and why "for parents" does not fit it |
| who searches this / is this the right page for me | Three people search this, and they need three different answers |
| give me the lines | 10 Propose Day lines for parents, grouped by who receives them |
| which one applies to me / what do I send | Which reader should send what |
| why does a romantic line feel wrong to a parent | Why a romantic line sent to a parent lands wrong |
| is there a template for this | Why the SubhSandesh proposal page is the wrong thing to send a parent |
| when is Propose Day 2027 / timing | What a working Monday changes about the timing |

---

## Cannibalisation check

**Sibling read in full before writing:** `content/batches/2026-09-23-propose-30b/blogs/propose-day-wishes-for-friends.json` (wave 3).

| | Wave-3 friends post | This post |
|---|---|---|
| Relationship | Platonic friendship | Family, adult child → parent |
| Reader's fear | "They'll think I'm confessing" | "This is going to read as strange" |
| Grouping axis | How easily a line is misread as a confession | Who receives it and what the line is doing |
| Research lane | Platonic ambiguity, indirect speech, signal misperception | Expressing affection across generations within a family |
| Banned sources honoured | Pinker PNAS and the EHESS thesis are **not** cited here | — |
| Shared sources | **None.** Zero URL overlap. | |
| Shared lines | **None.** All 10 lines written fresh for this page. | |

The difference is real and stated in the body: a friend may misread a warm line as a confession; a parent will not misread it, but may find it strange. That is a different failure mode, so it needs a different page. Cross-linked once by slug (`/blog/propose-day-wishes-for-friends`), recorded as a structural limitation because that slug 404s until wave 3 publishes.

---

## Phase 3 — Sources

Lane held: **expressing affection across generations within a family.** No platonic-ambiguity, indirect-speech, greeting-obligation, affection-exchange, gratitude or social-network-approval source is cited.

`findpapers.mjs` queries run: `parent adult child affection expression study`, `intergenerational communication family solidarity research`, `expressing love to parents cultural study`, `filial affection South Asia research`, `family communication patterns affection study`, `verbal affection expression India adult children parents`. DOAJ API queried for `bibjson.title:("intergenerational" AND "India")` and four sibling queries.

| # | Source | Why it is here | Read how |
|---|---|---|---|
| 1 | *Scientific Reports*, 26 Dec 2025 — showing love and care in 22 countries (Global Flourishing Study, N = 202,898) | India mean **8.20**/10, **15th of 22**; India's **SD 3.03 is the highest in the sample**. This is the post's load-bearing fact: a single copied line cannot be calibrated for "an Indian family" | Full text, Europe PMC REST `fullTextXML` |
| 2 | *Systematic Reviews*, 11 Apr 2025 — intergenerational support in South Asia, scoping review of **22 studies** | Adult children frame their role through filial duty and reciprocal care — affection to parents travels as care, not romance | Full text, Europe PMC REST |
| 3 | *J. Gerontology: Series B*, 27 Jun 2026 — parent–adult child contact across **23 European countries** (SHARE w9, ESS r10) | Face-to-face and phone contact remain widespread; text and especially video are less common. Used for channel choice | Full text, Europe PMC REST |
| 4 | *Diffractions* (Universidade Católica Portuguesa), Feb 2026 — intergenerational communication in India, **n = 175** youth aged 15–25 | Accommodative vs non-accommodative cross-generation talk. A romantic template dropped on a parent is non-accommodative by construction | **Abstract + keywords + reference list only** — full PDF not fetched |
| 5 | Wikipedia — Valentine's Day | Entity disambiguation only. Not counted as research | Verified via Wikipedia API (Q37587) |

**Subject test:** sources 1–4 all pass — each is about affection or communication between family generations, not about India or the internet in general.
**Peer-reviewed + open access:** 1, 2, 3 and 4 all are.
**Swap test:** none would sit unchanged in a sibling post in this batch; every other post here is about romantic partners.
**Generic context statistics:** zero.
**Cap check:** `capcheck.mjs` run at source-selection time and again immediately before saving. No banned URL used; no domain at cap. `pmc.ncbi.nlm.nih.gov` was not flagged as near-cap; `frontiersin.org` and `journals.plos.org` each had one slot left and were deliberately avoided so siblings keep them.

**Publisher blocking encountered:** `pmc.ncbi.nlm.nih.gov` returned a reCAPTCHA challenge, `escholarship.org` and `systematicreviewsjournal.biomedcentral.com` returned 403. The Europe PMC REST `fullTextXML` endpoint was used instead, which is the same deposited full text.

**Rejected candidates and why:**

- *To hug or not to hug?* (PLOS ONE, Nepal/Indonesia/Poland PDA) — genuinely South Asian and readable, but it is framed on **Affection Exchange Theory**, which is another agent's lane in this wave. Cut to avoid a lane collision.
- *Culture Change and Affectionate Communication in China and the United States* (Frontiers in Psychology, 2019) — a good fit for the "love is not said out loud" claim, but it would have taken `frontiersin.org`'s last batch slot and it also leans on affection exchange. Cut.
- Assorted Crossref hits from IJSR/IJRASET-class venues — Crossref indexes predatory journals; indexing is not peer review. Not used.

---

## Phase 4–5 — Draft decisions

- **Body: 1,798 words** on a plain whitespace split, excluding FAQs. FAQs (11) live only in `article.faqs` and the renderer-built FAQPage.
- **Date verified with `date` and `cal 2 2027`:** Rose Day Sun 7 Feb 2027, **Propose Day Mon 8 Feb 2027**, Valentine's Day Sun 14 Feb 2027. Valentine week is eight dated days.
- **Lines:** 10 original, in 5 groups. Every group carries the same four fields in the same order — who it is for · what the line is doing · when not to use it · the lines. Group 5 is deliberately empty of lines: it tells reader 3 that no line here is right and names the dates that are.
- **No competitor copy, no lyrics, no film dialogue.** Every line was written for this page.
- **Internal links (4):** `/proposal` (mandatory, and stated to be the **wrong** object for a parent because it is a marriage proposal), `/dedication` (the genuine alternative — a recorded-voice radio dedication, no proposal language, no partner-coded copy), `/templates`, and `/blog/propose-day-wishes-for-friends` (the cannibalisation cross-link, which 404s until wave 3 publishes).
- **The honest link answer**, stated in the body: for readers 1 and 3 **no romance template belongs at all** — a plain message is right, and `/templates` is worth opening only for the occasion they actually meant.
- **Comparison table:** 4 rows, 4 columns, one column entirely first-party and labelled platform-wide across 21 page types.
- **`structuredData`:** one `@id`-matched enrichment block on `…#post` carrying `about` / `mentions` / `citation` (mirroring `sources` one-to-one, 5 entries), plus an `ItemList` of 5 mirroring the H3s in order. No renderer-built type emitted unmatched. Every `sameAs` verified against the Wikipedia API with its Wikidata QID paired (Q37587, Q1057944, Q8436, Q614263).

---

## Phase 6 — Audit

50 checklist items, disjoint, 48 passed / 2 failed.

1. *"The post contains at least one claim none of the top 5 pages make"* — cannot be verified without fetching those pages, and the budget did not allow it.
2. *"Every internal link is a real URL from TEMPLATE_LINKS"* — `/blog/propose-day-wishes-for-friends` is a sibling blog slug, not a template. Kept deliberately; closes when wave 3 publishes.

Everything else that is a limitation rather than a checklist miss is in `batchMeta.structuralLimitations`.

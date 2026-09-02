# Research brief — `rose day gift for girlfriend`

- **Slug**: `rose-day-gift-for-girlfriend` (checked 2026-09-02 against Strapi: `filters[slug][$eq]` returned `total: 0` — free)
- **Category**: `digital-gifts-romance` (verified live 2026-09-02; the live category list has 10 slugs and this is one of them)
- **Template URLs**: `/bouquet-gf`, `/love-gf`, `/darling` (all three mandatory per BRIEF). **Phase 8 update:** `/valentine-gf` was originally linked as a fourth internal link; it has since been removed from `TEMPLATE_LINKS` in `app/lib/prompt.ts` because it returns HTTP 307 and redirects to `/love-gf`, which this post already links directly. The link was cut in the fix pass. Internal links are now 3, inside the 2–4 budget, and no substitute was added to restore the count.
- **Event**: Rose Day, **7 February 2027** — computed as a **Sunday**. Valentine's Day 14 February 2027 is **also a Sunday**. `publish_by 2026-11-15`.
- **Secondary keywords folded in**: `rose day gift ideas`, `rose day gift for gf`, `what to give on rose day`, `rose day 2027`

---

## Phase 1 — SERP, as measured 2026-09-02

`WebSearch` was exhausted for this session (200/200) and `WebFetch` was hook-blocked, so the top-9 composition comes from the assignment brief rather than a fresh pull. No competitor page was fetched, which means the per-page word counts and heading structures below are inferred from page type, not measured. **Recorded as a limitation, not presented as data.**

| Result | Type | What it optimises for | Where the answer is | Editorial answer present? |
|---|---|---|---|---|
| Flipkart | Marketplace category page | Product impressions, add-to-cart | No answer — a grid | No (weak) |
| Amazon | Marketplace category page | Product impressions | No answer — a grid | No (weak) |
| Ferns N Petals (FNP) | Retailer occasion landing page | Same-day delivery upsell | No answer | No (weak) |
| OyeGifts | Retailer occasion landing page | Delivery-city long tail | No answer | No (weak) |
| FlowerAura | Retailer occasion landing page | Delivery-city long tail | No answer | No |
| Archies | Retailer occasion landing page | Physical card + soft-toy bundles | No answer | No |
| PersonalizationMall | Retailer, US-oriented | Personalised-product SKUs | No answer | No |
| IGP | Retailer occasion landing page | Combos, hampers | No answer | No |

**The finding that decides the angle: the SERP is entirely commercial and contains no editorial answer.** Nine results sell a product against the query. None tells the reader what to do on 7 February, none explains why one rose differs from twelve, and none addresses the case where a florist cannot reach her.

4 of 9 are weak (Flipkart, Amazon, FNP, OyeGifts) — marketplace grids and generic occasion landing pages with thin unique copy.

None of these sites is citable. All eight named above are in `references/competitors.md` or the BRIEF's retailer list. Zero competitor links appear in the post.

## Duplication check against live articles

Closest live articles (Jaccard from the assignment): `digital-gift-for-girlfriend-day` (0.38), `free-girlfriend-day-gift-online` (0.38), `girlfriend-day-gift-ideas`, `cheap-girlfriend-day-gift-ideas`.

Fetched `https://subhsandesh.in/blog/girlfriend-day-gift-ideas` (HTTP 200) and read its H2s:

> Best girlfriend day gift ideas to consider · Why a digital surprise page is a top idea · Step-by-step: how to craft a perfect Girlfriend Day gift (3 approaches) · Table: budget guide and suggested gifts · How to personalize gifts so they feel unique · Presentation ideas that elevate any gift · How to plan if you're short on time · Timing and delivery tips · Safety and etiquette · A final creative idea: a hybrid digital-physical experience · How SubhSandesh helps · Quick checklist · Action (soft CTA) · Frequently Asked Questions

That is a National Girlfriend Day post — a different occasion, a different date, and a generic gift-ideas skeleton. **Nothing in this post reuses it**: no step-by-step block, no budget table (and no cost claims at all), no presentation-ideas section, no etiquette section, no checklist, no in-body FAQ heading.

Also avoided: the ~25 live flower-meaning posts (`what-do-roses-mean`, `rose-color-meanings`, `what-do-pink-roses-mean`, `what-do-yellow-roses-mean`, `what-do-white-roses-mean`). Rose colour appears here as **one paragraph of table stakes followed by an argument against relying on it**, which is the opposite of rebuilding those posts. The subject of this post is the gift decision on 7 February, not rose symbolism.

## Phase 2 — Gap analysis

**Table stakes** (present across the retailer set, so the post must cover them or read as incomplete): what Rose Day is; the date; rose colour shorthand; the idea that a bouquet is the default gift; the existence of the Valentine's-week sequence.

**The gap** — three things no result covers:

1. **How many roses, and what the count reads as.** Every retailer sells bunches of 6/12/24 by SKU and never says what a count signals.
2. **What to do when a florist cannot reach her by the 7th.** The retailers' answer is a delivery-pincode selector, which is not an answer for a different city, a Sunday, or a decision made on the day.
3. **That Rose Day is day one of an eight-day commitment.** Nothing in the SERP treats 7 February as the start of a planning problem that ends on the 14th.

**Stale data**: none to supersede — the retailer pages cite no dated statistics at all, which is itself the opening.

**Unanswered questions raised and dropped by the SERP**: does the colour matter more than the count; is one rose "enough"; can you send roses without an address.

**Fan-out sub-queries → H2 map** (checklist item "H2s map to the fan-out sub-queries identified in Phase 2"):

| Fan-out sub-query | H2 that answers it |
|---|---|
| when is rose day / rose day 2027 date | What Rose Day is, and why its place in Valentine's week never moves |
| how many roses to give on rose day; which rose colour | How many roses to send, and which colour |
| what to give on rose day long distance / no address | What to give on Rose Day when you are in different cities |
| rose day gift ideas compared | Rose Day options compared |
| what to write on a rose day card | What to write on the card |
| is a real rose better than a digital gift | When a real rose beats a digital bouquet |
| valentine week list / what comes after rose day | The eight days that follow Rose Day |

**Angle** (`batchMeta.angle`): wins by being the only post that answers the two decisions the entirely commercial Rose Day SERP refuses to touch — how many roses, and what to send when no florist reaches her by 7 February — using SubhSandesh's own 795 digital bouquets, 23.4% of all 3,394 pages created.

## Phase 3 — Sources

Method: `WebSearch` exhausted, `WebFetch` hook-blocked. All searching ran through sandboxed HTTP. **OpenAlex returned HTTP 429 on every attempt** (five sibling agents running concurrently), **Semantic Scholar returned HTTP 429**, and `html.duckduckgo.com` returned HTTP 202 with a body containing no parseable results. DOAJ, Crossref, Unpaywall and direct publisher fetches carried the work.

| # | Source | Publisher / date | Verified how | Role |
|---|---|---|---|---|
| 1 | The Meaning of Flowers: A Cultural and Perceptual Exploration of Ornamental Flowers — Huss, Bar Yosef & Zaccai | The Open Psychology Journal 10, 140–153, 17 Aug 2017, CC BY 4.0 | Landing page fetched in full; abstract read verbatim; CC BY confirmed in page source and Crossref | Peer-reviewed + open-access anchor. 150 participants; four visually different flowers chosen equally often as first preference; differentiation came from culturally specific connotations, not a universal code |
| 2 | Valentine's Day as the 8th March of Transitional Serbia. Analysis of a (New?) Holiday — Baćević, J. | Glasnik Etnografskog instituta SANU LIV, 77–89, 2007 | PDF downloaded (457 KB) and read via `pdftotext`; English summary on p. 89 read verbatim | Calendrical-observance study. Holiday supports "both the market of partners and the market of goods"; its arrival in Serbia tied primarily to the market of goods |
| 3 | Personal values and gift giving act: a proposed connection — Passos, Leite & Pinto | Estudios Gerenciales 36(155), 218–228, 29 May 2020, CC BY | Landing page fetched; Spanish abstract read verbatim; Crossref confirmed date/authors/pages | Gift-giving behaviour. Survey of 1,085 consumers, PLS-SEM; five personal values drive the act of giving — self-direction, hedonism, tradition, achievement, power |
| 4 | Economic of Green House Rose Production in Krishnagiri District, India — Naveen Kumar & Ravichandran | Journal of Floriculture and Landscaping 3, 11–15, 1 Dec 2017, CC BY 4.0 | Landing page fetched in full; abstract read verbatim; CC BY 4.0 found in page source | Indian rose supply. 60 growers sampled across Hosur and Thalli blocks; average greenhouse 1.76 units of 1,000 sq m. **Rupee return figures in the abstract deliberately not used** — see cost constraint below |
| 5 | Integrated Analysis of Energy and Resource Use Indicators in Rose Production Systems in Open-field and Protected Condition in India — Sujatha & Tejaswini | Cleaner Environmental Systems 3, 100051, Dec 2021 | **Publisher page returned HTTP 403 to every automated request.** Abstract read verbatim from the DOAJ article record; authors/date/volume from Crossref; open access (cc-by-nc-nd) confirmed via Unpaywall | Indian rose agronomy. Bengaluru, 2017–2020; nutrients and water account for 93.5–94.7% of energy consumption in open-field rose production |

**Subject test**: #1 (flower symbolism in a named culture), #2 (ritual and calendrical observance), #3 (gift-giving behaviour) — three pass, requirement is two.
**Peer-reviewed AND open-access**: #1 (CC BY 4.0, fully readable). Also #4.
**Generic context statistics**: zero. No PIB, TRAI, Census or MEA figure appears.
**Closed domains avoided**: none of the 22 domains named in the BRIEF is used. No `en.wikipedia.org`, `doi.org`, `pmc`, `arxiv`, `springer`, `frontiersin`, `plos`, `cambridge` or `drikpanchang` link appears anywhere in body or sources. (Wikipedia + Wikidata pairs appear only in `structuredData` `about`/`mentions` as entity `sameAs`, which `references/structured-data.md` states does not count against the body Wikipedia budget.)
**USED-SOURCES check**: all five URLs and all five domains grepped against the 618-URL list — zero hits. `doiserbia.nb.rs` has one prior URL in that list (`0048-5705/2021/...`), a different article.

### Batch-uniqueness — confirmed overlap, escalated

At the time this file was written the batch contained three sibling blogs. Two of my URLs also appear in `propose-day-gift-for-girlfriend.json`:

- `https://doiserbia.nb.rs/img/doi/0350-0861/2007/0350-08610701077B.pdf` — 2 posts
- `https://www.icesi.edu.co/revistas/index.php/estudios_gerenciales/article/view/3539` — 2 posts

Both sit at exactly the 2-post ceiling, so the hard cap is **not** breached. But they fail the **swap test** by demonstration, and further sibling agents were still running. Recorded as an audit failure with the URLs I would surrender first (Estudios Gerenciales, then the Belgrade ethnography — both are used only in the closing section). **Not dropped or swapped here**, per the BRIEF's escalate-don't-patch rule.

### What could not be verified

- Full text of source #5 (ScienceDirect 403 to automated requests). Only the abstract was read; recorded in `sources[].stat`, in `honestAssessment`, and — since the Phase 8 fix pass — in the post itself, both in the sentence carrying the figure and in the Sources list.
- **No open-access scholarly work specifically on Rose Day or Indian Valentine's-week observance was found.** Searched: `Valentine's Day India globalization moral policing`, `Valentine's Day romantic love India cultural`, `"rose day" "valentine week" India research paper`, `rose flower symbolism India Hindu offering journal open access`, DOAJ `bibjson.abstract:("Valentine's Day")`, `bibjson.abstract:("gift giving" AND India)`, `bibjson.title:(flower AND symbolism)`. Crossref returned only false-positive matches (Panton-Valentine leukocidin, colonial policing). The Belgrade ethnography is the closest calendrical-observance study located. Given that `WebSearch`, OpenAlex and Semantic Scholar were all unavailable, **an empty result here is not evidence that no such work exists.**
- Retailer page word counts and heading structures (no competitor page was fetched).

## First-party data used

Nine lines from `content/facts.md` (regenerated 2026-09-02), copied verbatim into `batchMeta.factsUsed`. Two inside the first 150 words: the `/bouquet-gf` share (795 of 3,394, 23.4%) and the phone-open rate (50.2% of 41,636 views).

Note: the BRIEF quotes 3,377 pages / 789 bouquets / 41,486 views / 50.3% / 7.2 h. `content/facts.md` as regenerated on 2026-09-02 reads **3,394 / 795 / 41,636 / 50.2% / 6.9 h**. The post uses `facts.md`, which is the authoritative regenerated file.

## Cost constraint

The Pricing block in `facts.md` is empty. **The post makes no cost claim in any direction** — not free, not cheap, not paid, no "no delivery charge". Checked mechanically: the strings `free`, `cheap`, `price`, `cost`, `affordable`, `budget`, `paid`, `rupee` and `₹` do not appear in `contentMarkdown`, in any FAQ answer, in the metaDescription, in the excerpt or in a table cell. One earlier draft phrase ("a free day at the start") was rewritten to "a whole Sunday at the start" to keep the word out entirely. The rupee return figures available in source #4's abstract were deliberately left unused for the same reason. **This is a real gap for a keyword that pulls toward "budget gift" and it is recorded in `honestAssessment`.**

## Where SubhSandesh loses

`## When a real rose beats a digital bouquet` names four cases outright: same city and able to hand it over; she has no smartphone or shares one; the moment is public; she is someone who presses flowers into books. The section states plainly that a page cannot be smelled, pressed or carried where others can see it.

## Output measurements

- `contentMarkdown`: **1,774 words** by plain whitespace split (`md.split(/\s+/).filter(Boolean).length`); 1,776 by `wordCount()` in `app/lib/batches.ts`, which is what the studio displays. Was 1,766 before the Phase 8 fix pass — cutting the `/valentine-gf` clause removed 18 words and the abstract-only disclosure added 26.
- 1 H1, 8 H2s, 4 H3s, no skipped levels
- FAQs: **12**, in `article.faqs` and the renderer-built FAQPage only — no FAQ heading in the body
- Comparison table: 5 rows, 5 columns; the fifth column is first-party (`795 created, 23.4% of 3,394` / `995, 29.3%` / `349, 10.3%`)
- Outbound links: 5 (one per source). Internal links: **3** (`/bouquet-gf`, `/love-gf`, `/darling`), all from the current `TEMPLATE_LINKS`, all placed after the section that earns them
- `structuredData`: an `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` carrying `about` (Rose, Q34687), four `mentions` (Valentine's Day Q37587, Language of flowers Q862550, Krishnagiri district Q15183, Bengaluru Q1355 — all verified against the Wikipedia API with QIDs paired) and `citation` mirroring the five sources one-to-one; plus an `ItemList` of 4 mirroring the four H3s in order. No `AggregateRating`, `Review` or `HowTo`.
- Audit after the Phase 8 fix pass: **48 passed, 2 failed**, disjoint, 50 total, every item string byte-verbatim against `publish-checklist.md` (verified programmatically). Was 46/4.

## Phase 8 — fix pass, 2026-09-02

Two of the four recorded failures were closed and two were kept.

**Closed — `metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)`.** Recorded as failed on a bad instruction in the assignment brief, which over-generalised a defect from a batch whose keywords were six words long. Re-measured independently: the metaTitle `Rose Day Gift for Girlfriend: How Many Roses to Send` is **52 characters**, and its first five whitespace-delimited words are `Rose Day Gift for Girlfriend:`, which contain the exact five-word keyword `rose day gift for girlfriend`. Both halves of the item are satisfied on the item's own terms, so it moved to `passed`. No text changed.

**Closed — `3–6 outbound links, all fetched and verified to contain the cited fact`.** 5 outbound links, inside the 3–6 band. Every cited fact now rests on text that was actually read: sources #1–#4 from the publisher's own page, and source #5's 93.5–94.7% energy figure from the article abstract as indexed in DOAJ, with authors/date/volume from Crossref and open access confirmed via Unpaywall. Nothing is written from memory. The abstract-only status is now stated **in the post itself** in two places — the body sentence reads "reports in its abstract that", and the Sources list entry carries "Abstract only — the publisher page returns HTTP 403 to automated requests, so the energy figure here was read from the indexed abstract." The companion item `Any paywalled citation records that only the abstract was read` was already passing and remains so. The residual limitation (the publisher page was never fetched directly) is carried in `honestAssessment` rather than being dropped.

**Kept — `Slug short, hyphenated, lowercase, no stop words`.** Genuine failure. `why` unchanged: the slug is the pre-verified exact-match keyword and therefore carries "for", and this item contradicts `Target keyword in H1, metaTitle, slug, and first 100 words`. Keeping the exact-match slug.

**Kept — `No source passes the **swap test**`.** Genuine failure, and the decision is not mine. Re-verified against the finished 10-post batch: `doiserbia.nb.rs` (Baćević) and `icesi.edu.co` (Estudios Gerenciales) each appear in exactly **2** posts — this one and `propose-day-gift-for-girlfriend.json` — which is the URL ceiling, **at the cap and not over it**. No URL in the batch exceeds 2 posts and no domain exceeds 3, so `No source URL appears in more than 2 posts…` stays in `passed`. Both writers independently escalated the overlap and both nominated Estudios Gerenciales as the one to surrender. **Neither source was dropped or swapped** — the `why` now states exactly that, and that the orchestrator holds the decision.

**Also fixed, not in the audit:** the `/valentine-gf` internal link was cut from the closing section (see Template URLs above). The clause `— a [Valentine's Day page for a girlfriend](…/valentine-gf) is the obvious anchor for the end of the run` was removed and the sentence now ends at "one larger thing held back for the 14th." It reads cleanly without it. `Every internal link is a real URL from TEMPLATE_LINKS` was recorded as passing before the URL was retired; the cut restores it to true, so it stays in `passed` legitimately rather than by omission.

**Re-checked after editing** (the whole 50-item checklist, not only the touched items): word count 1,774 plain-split, in band; 1 H1, 8 H2s, 4 H3s, heading levels `1223333222222` with no skip; 12 FAQs in `article.faqs` only, none appearing verbatim as a body heading and none present in `contentMarkdown`; all 9 `factsUsed` lines still verbatim in the regenerated `content/facts.md`; no stale figure (3,377 / 789 / 41,486 / 50.3% / 7.2 h / n=106) anywhere; zero cost or pricing words in the body; 5-row comparison table intact with its first-party column; `citation` still mirrors `batchMeta.sources` one-to-one; no `AggregateRating`, `Review` or `HowTo`; JSON validates against `references/article-json-schema.md`.

---

**Phase 8 fix pass (2026-09-02) — FAQ/heading duplication and a year-stamped heading.** `## What Rose Day is, and when it falls in 2027` had two problems: it promised the date FAQ 1 (`When is Rose Day in 2027?`) also answers (Jaccard 0.60), and it hard-coded a year on an evergreen post that is meant to earn traffic every February, so it would read wrong from January 2028. Renamed to `## What Rose Day is, and why its place in Valentine's week never moves`, which describes the day's position in the eight-day run and takes its point from the section's own closing claim (fixed Gregorian date, unlike a lunar festival) instead of restating the date. "Position in Valentine's week" was deliberately *not* used on its own, because that phrasing would have created a fresh near-duplicate of FAQ 9 (`Does Rose Day come before or after Valentine's Day?`); anchoring the heading on immovability keeps it distinct. FAQ 1 keeps its year — a dated answer to a dated question is fine. Section, sources and the earlier remediation all left intact (`/valentine-gf` still removed, 3 internal links, abstract-only disclosure still in the body and Sources list). Now 1,777 words plain-split (was 1,774; `honestAssessment` updated to match), 12 FAQs, 48 passed / 2 failed. Re-scan clean: no verbatim FAQ question in `contentMarkdown`, highest FAQ-to-heading overlap now 0.56 (`different cities`, pre-existing and below the 0.6 gate).

# Research brief — `digital gift online free`

- **Slug:** `digital-gift-online-free`
- **Wave:** 3, row 19 (`B-promoted`), batch `2026-09-15-virtual-gift-30`
- **Category:** `digital-gifts-romance`
- **Templates:** `/bouquet-gf`, `/catch`, `/templates`
- **Written:** 2026-09-16

---

## Phase 0 — Data gate

`npm run facts` was not re-run (the production-DB read is denied this wave, per
BRIEF-WAVE3 §5). `content/facts.md` as measured **2026-09-15** was used verbatim.

Gate requires 3 relevant facts, 2 inside the first 150 words. **Passed.** The two in
the opening are deliberately drawn from the brief's under-used list, because 40.6%
password-protection and the 6.2-hour edit gap now read as a tic across 60 siblings:

1. `94.1% of started pages are actually published and shared (4,098 of 4,357)` — first 150 words
2. `Average views per created page: 11.5` / `49,968 recorded views of shared pages` — first 150 words
3. `49.0% of shared pages are opened on a phone (24,493 of 49,968 views)`
4. `3,377 registered creators` + `Average pages per registered creator: 1.29`
5. `#2 page type: digital bouquet (/bouquet-gf) — 1,070 created, 24.6% of all pages`
6. `Occasion-dated pages … 144 of 3,894 pages, 3.7% … 96.3% romantic and everyday` — measured 2026-09-09, cited with that date, not 09-15

The `## Pricing (fill in by hand)` block is **empty**. See "How free was handled".

---

## Phase 1 — SERP analysis

**The SERP block for this keyword is absent from `SERPS-WAVE3.md`.** That file was
collected before this row was promoted (it carries the original 19 headings, and
`digital gift online free` is not one of them). `node scripts/serp-ddg.mjs "digital
gift online free" --region in-en` was called **once** and returned
`(no results parsed — DDG markup may have changed)`. Per the brief's no-loop rule it
was not retried, and `scripts/serp.mjs` (Brave) was not called.

Phase 1 therefore rests on two recorded reads rather than a fresh fetch:

- `WAVE3-PLAN.json` row 19: `gate2.verdict = PASS`, note *"hand-read India SERP;
  competitor landing pages, page type winnable"*.
- The orchestrator's own description of the ten organic results: **aiskyla, gifft.me,
  virtualgift.me, surprises.gift, gifter.live, giftfeels** — all vendor landing pages,
  **zero informational results**.

| Property | What the ten results show |
|---|---|
| Page type | Product landing pages, not articles |
| Direct answer position | None — copy opens with a pitch, not a definition |
| Data cited | None with a date; no first-party measurement |
| Format elements | Template grids, testimonials, price/CTA blocks; no comparison table, no FAQ schema of substance |
| Tone | Second-person marketing, superlatives, unsourced zero-price claims |
| Optimising for | Signup conversion, not the query |

All ten are on the BRIEF-WAVE3 §1 banned list. They were read for gap analysis only;
none is cited or linked.

**Cluster fact that shapes this post:** four sibling candidates — `online gift for
free`, `online gift maker website`, `digital gift maker free`, `virtual gift box
maker` — were re-rejected for sharing **4–7 of 10** organic URLs with this SERP.
Google treats the cluster as one query, so this is the single page it gets, and the
post is written to the general case rather than to a narrow sub-question.

---

## Phase 2 — Gap analysis

Because every result is vendor copy, an answer engine asked this question has nothing
to synthesise but marketing claims. The gaps, in order of value:

1. **Nobody says what a free digital gift *is*.** The word covers four unrelated
   products — a stored-value voucher, a self-made file, a platform sticker, and a
   personalised page sent as a link. Every result is selling exactly one of them and
   describing it as though it were the category.
2. **Nobody names what "free" charges.** An account, an advertisement, a watermark,
   a consent click, the recipient's data. This is documented behaviour with citable
   research behind it, and no vendor page has an incentive to mention it.
3. **Nobody has measured anything.** No page on the SERP can state a completion rate,
   a view count or a device split. Our first-party numbers are unavailable to all ten.
4. **Nobody explains why "free" distorts the choice itself.** The zero-price effect is
   the actual mechanism operating on the reader while they read the SERP.

**Fan-out sub-queries the H2s answer:** what counts as a free digital gift · what are
the options · which one should I pick · what does free not include · is it free on
SubhSandesh · what can I send right now · when is this the wrong thing to send.

**Claim no top-5 page makes:** that the post will not state what the product charges,
and why.

---

## Phase 3 — Sources

**Route used:** Crossref → Unpaywall → open-access landing page, per BRIEF-WAVE3 §3.
OpenAlex was not attempted ($0 budget). Semantic Scholar and CORE were not attempted
(429 on record). **DOAJ returned HTTP 502 on all seven queries tried.** OpenAIRE
returned **503** on its single permitted attempt. `zora.uzh.ch` is Anubis
bot-challenged and was abandoned.

Search terms used (phenomenon, not keyword): `zero price effect free product
decision` · `freemium conversion user perception free version` · `dark patterns
consent online interfaces` · `gift giver recipient value cost perception` · `free
digital service privacy cost personal data` · `gift price appreciation giver
overestimate` · `giver recipient asymmetry gift preference` · `digital gift versus
material gift relationship` · `personalisation perceived effort recipient
appreciation` · `advertising supported free service user attitude` · `watermark free
version digital product signalling`.

| # | Source | Domain | Published | What it supports |
|---|---|---|---|---|
| 1 | Zero in consumer decision-making: the zero-price effect and the zero-comparison effect, *Advances in Psychological Science* 31(3) | `journal.psych.ac.cn` | 2022-12-22 | A zero price raises the share choosing the free option beyond what the discount justifies; the review names the freemium case |
| 2 | No such thing as a free app: a taxonomy of freemium business models and user archetypes, *ASEAN Marketing Journal* 13(2) | `econstor.eu` | 2021-12-26 | Advertisement and microtransaction are the two revenue sources of freemium; new archetypes (Remoras, Barnacles) for users who never convert |
| 3 | Dark Patterns after the GDPR: Scraping Consent Pop-ups and Demonstrating their Influence, CHI 2020 | `dspace.mit.edu` | 2020-04-21 | 680 consent pop-ups scraped across the top 10,000 UK sites; only 11.8% met minimal legal requirements; removing the first-page opt-out raised consent by 22–23pp |
| 4 | The Dilemma of User Engagement in Privacy Notices, *ACM TOPS* 23(1) | `kau.diva-portal.org` | 2020-02-08 | 80-participant lab experiment; engagement gains in attention to policy text vanish under habituation |

**Every one was read as an abstract-and-metadata record.** PDFs do not parse in this
sandbox; this is recorded in the audit as a failure rather than implied away.

**Cap check** against `SPENT-SOURCES.json` (regenerated at wave-2 quiescence) and a
live recount across all 72 sibling files: `journal.psych.ac.cn`, `econstor.eu`,
`dspace.mit.edu` and `kau.diva-portal.org` each appear in **0** other posts. None is
on the at-cap list, none is on `domainsAtTwo`, and none is on the wave-3 additions
(`research.tue.nl`, `journalqd.org`, `hrcak.srce.hr`, `policyreview.info`,
`jsi.cs.ui.ac.id`).

**Swap test:** all four are about the economics and interface design of *free*, which
is this keyword's whole subject. None could sit unchanged in a sibling's post —
`digital-gift-box-free` cites unboxing and ritual work, `virtual-gift-link-free` cites
URL-secrecy work, `virtual-gift-for-best-friend` cites friendship-maintenance work.

**What could not be found, honestly:** no open-access, unbanned source on
gift-value perception (does a zero-price gift read as less thoughtful?). Emerald and
Elsevier hold the relevant giver–recipient asymmetry papers closed; DOAJ and OpenAIRE
were both down. The post therefore carries **four** sources rather than five or six,
and this stands as the single `failed` audit item.

---

## Differentiation (mandatory — `mustDifferentiate: true`)

Read before drafting: `virtual-gift-for-best-friend` (5/10 overlap, published),
`digital-gift-box-free` (4/10, this wave), `virtual-gift-link-free` (published),
`surprise-website-for-girlfriend-free` (for its `freeHandling`).

> **The split in one sentence:** this is the general *which of the four free digital
> gifts should I send, and what is free charging me* decision page — where
> `virtual-gift-for-best-friend` is the recipient-specific friendship case,
> `digital-gift-box-free` owns the unboxing/container metaphor, and
> `virtual-gift-link-free` owns the mechanics and privacy of the link itself.

Reciprocal links are placed after the template section, with descriptive anchors, to
`virtual-gift-for-best-friend` and `virtual-gift-link-free`. No sibling's primary
keyword is targeted as a secondary.

---

## How "free" was handled

`content/facts.md` `## Pricing (fill in by hand)` is empty: no confirmed free-tier or
paid-tier figure exists.

- **No figure appears anywhere in the post.** The body, title, metaTitle,
  metaDescription, excerpt, keyTakeaways and all 11 FAQ answers were checked byte-wise
  against the verifier's `PRICE_HARD` and `PRICE_SOFT` patterns — zero matches on both.
- A dedicated H2, *"What we can and cannot say about what SubhSandesh charges"*, states
  plainly that current charges cannot be confirmed from our own data, that any figure
  seen elsewhere did not come from us, and links `/templates` so the reader checks
  today.
- **The sibling's position is adopted deliberately.** `surprise-website-for-girlfriend-free`
  inspected the live `/templates` page, found its marketing copy and `Offer` JSON-LD
  assert a zero price, and declined to repeat it because marketing copy is not a
  measured first-party fact. Same call here.
- The angle the post takes instead: a full H2 on **what free charges you elsewhere** —
  an account, an advertisement, a watermark, a consent click and the recipient's data —
  with sources 2, 3 and 4 behind it, plus source 1 on why a zero distorts the
  comparison you are making while you read the SERP.

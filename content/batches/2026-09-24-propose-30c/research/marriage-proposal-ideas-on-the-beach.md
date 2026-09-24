# Research brief — `marriage-proposal-ideas-on-the-beach`

Batch `2026-09-24-propose-30c` · keyword **marriage proposal ideas on the beach** ·
secondaries `best proposal ideas on the beach`, `romantic proposal ideas at the beach`
(same page) · categorySlug `modern-romance` · demand: 2 prefixes, ordinal only —
**`prefix_hits` is not printed anywhere on the page**.

---

## Phase 0 — data gate

`content/facts.md`, regenerated 2026-09-24. Eight lines copied byte-verbatim into
`batchMeta.factsUsed`. Two sit inside the first 150 words: the 5,148 pages / 21 page
types line and the 48.3% phone-open line (27,499 of 56,886 views).

**Honesty constraint applied in body prose, not only in the audit:** no figure is
attributed to proposal pages. Every figure on the page is labelled platform-wide across
21 page types, or sampled on a named template — the 2.2-hour first-save-to-last-edit gap
is stated in the body as sampled on `/apology-dashboard`, n=1,375.

**No price, cost or money language anywhere.** The pricing block in `facts.md` is empty
for a fourth batch. A regex sweep for `cheap|afford|budget|price|pricing|cost|money|free|
₹|rupee|pay|paid|expensive|spend|fee|discount|hire` over `contentMarkdown` returns zero
hits. Two drafting casualties were cut for this: "the cheapest durable thing on this list"
became "the most durable thing here", and the comparison table compares beach *conditions*
rather than outlay. Travel, stay and photography are out of scope for the same reason.

---

## Phase 1 — SERP, and what was actually measured

**Measured 2026-09-24, India-served, snippet level only. 10 results, titles and
descriptions. No competitor page was fetched in full.** None of this batch's keywords
appears in the 11 India-served SERPs measured 2026-09-16
(`content/keywords/2026-09-16-propose-100/serps.md`).

| # | Result | What the snippet shows |
|---|---|---|
| 1 | pinterest.com (board) | Image board, "heart-shaped lights on sand" |
| 2 | beaches.com/blog | 16 ideas: written in sand, sunset, sunrise, beachside meal, shell hunt |
| 3 | reddit.com r/Proposal | Thread; top advice is a sunrise walk plus a song |
| 4 | sylviejewelry.com | Ideas list — **explicitly advises choosing a spot that allows beach fires and provides privacy, and arriving early to set up** |
| 5 | theknot.com | 13 ideas: golden hour, written in sand, message in a bottle, bonfire, sunrise walk |
| 6 | ellenleroyphotography.com | Photographer, three planning ideas |
| 7 | theheartbandits.com | Proposal-planner service page, LA picnic |
| 8 | youtube.com | Compilation video |
| 9 | weddingwire.com | 12 ideas: lantern boardwalk, sweetheart table, live musician, sand |
| 10 | qreport.com.au | 15 ideas: bottle, underwater, lifeguards, surfboard, skywriting, sand sculptor |

**Because only snippets were read, the page makes no claim anywhere about what incumbents
do or do not cover.** The corresponding checklist item ("at least one claim none of the
top 5 pages make") is recorded as a **failure**, not quietly passed.

### Two framing claims from the task prompt, checked and rejected

The BRIEF requires treating prompt framing as unverified. Two claims did not survive.

1. **"Every incumbent says 'sunset on the beach' and stops."** False at snippet level.
   Result 4 (Sylvie Jewelry) advises picking a spot that allows fires and provides privacy
   and arriving early. Several others lead with sunrise, not sunset. **Not printed.**
2. **"A beach is the most-recommended proposal setting and the least-examined."** Not
   measurable from a 10-result snippet pass, and no cross-keyword volume data was
   available. **Not printed.**

A third claim was corrected rather than dropped — see Phase 3.

---

## Phase 2 — gap and fan-out

**Table stakes** (present across the measured snippets, so the post covers them):
sunset and sunrise, writing in the sand, a walk to a spot, sitting down on the sand,
photographs.

**The gap.** Every measured result is a *scenery* list. None of the snippets sorts ideas
by any constraint at all, and nothing in them attaches a number to how busy a beach is.
The post's organising move is to sort seven ideas **by the crowd each survives**, most
crowd-tolerant first, with four fixed fields per idea (what it is / what the beach must
supply / what ruins it / what is left). That is a machine-extractable ordering, which is
what the `ItemList` mirrors.

**Fan-out sub-queries → H2s:**

| Sub-query | Section |
|---|---|
| what is a beach proposal / what makes it different | `## What a beach proposal actually has to survive` |
| how busy will the beach be, can I get privacy | `## The part no indoor idea has: you cannot clear a public beach` |
| best beach proposal ideas, ranked | `## Seven marriage proposal ideas on the beach, sorted by the crowd each survives` |
| will wind / sand / low light ruin my setup | `## How the beach treats what you bring` |
| why does the beach feel romantic | `## Why a beach at all — what the awe research actually says` |
| is it safe, tide, waves | `## Safety on the shore, stated plainly` |
| should I do this somewhere else | `## When the beach is the wrong choice` |

**Angle (`batchMeta.angle`):** wins by being the only post that treats the beach as a
public place that cannot be cleared — seven ideas sorted by the crowd each survives
against the Beach Crowding Index's 2.0 m² per-person threshold — and the only one that
checks the awe-and-vastness claim instead of repeating it, against the platform-wide
48.3% phone-open rate across 21 page types.

---

## Phase 3 — sources

Research lane as assigned: **awe, vastness and natural settings**. Not used, per the
task's exclusions: environmental psychology / lighting, household privacy, social-network
approval, production scale, novelty/memory, planning fallacy.

`findpapers.mjs` was run on `awe vastness natural environment study`,
`awe emotion experimental research`, `blue space coastal wellbeing research`,
`nature exposure wellbeing study`, plus `awe small self diminished self experimental`,
`coastal blue space India beach visitors` and `beach crowding recreation experience`.
**WebSearch was not used at all** (budget 4, spent 0); SERP and green-OA discovery went
through Firecrawl search and scrape, and every source below was fetched and read.

The obvious hits were unusable: the strongest awe and blue-space full texts sat on
**Europe PMC / PMC, frontiersin.org and journals.plos.org, all three at the cap of 3**.
The work-around was green open-access copies on institutional hosts, which is also what
the BRIEF prefers.

| # | Source | Subject test | What it supports |
|---|---|---|---|
| 1 | Serrano Giné, *The Beach Crowding Index*, **The Professional Geographer, 2018** — green OA, Universitat Rovira i Virgili | ✅ beach crowding | 2.0 m²/user or less = poor, 2.1–2.5 acceptable, 2.6–3.0 good, ≥3.1 very good; season scores 0.7–3.7 on a 0–4 scale; crowding varies by beach, by section **and by time of day**. Peer-reviewed, read in full. |
| 2 | Bai et al., *Awe, the Diminished Self, and Collective Engagement*, **JPSP, 2017** — green OA, University of Michigan | ✅ awe / vastness | 6 studies, N = 2,137. Awe — not other positive emotions — diminishes the sense of self across collectivist and individualistic cultures; the small self accounted for **increases in collective engagement**. Peer-reviewed, abstract quoted directly from the PDF. |
| 3 | Edwards et al., *Small but still Significant: Awe and the Self*, **in press, 2025** — author copy, Duke University | ✅ awe / self | 4 within-person experiments. Awe shrinks the self **without making one feel insignificant**, and consistently enhances perceptions of vastness and the psychological size of the world. |
| 4 | Bell et al., *The shadows of risk and inequality within salutogenic coastal waters*, in *Blue Space, Health and Wellbeing*, **2019** — accepted manuscript, University of Exeter | ✅ coastal blue space | Coastal benefit for some emerges within "shadows of risk" for others; access and felt belonging at the coast are socially shaped. Book chapter, not a journal article — used for a qualitative argument, no statistic taken from it. |
| 5 | **INCOIS**, Ministry of Earth Sciences — High Wave / Swell Surge Advisories | ✅ Indian coast safety | State-wise high wave and swell surge advisories for the Indian coastline. This is the **one** generic/government source; page carries no publication date, so `datePublished` is omitted from `citation`. |

- **Swap test:** none could move to another keyword in this batch. Beach crowding density,
  awe from vastness and Indian-coast wave advisories are all specific to an outdoor
  coastal proposal.
- **Caps:** `capcheck.mjs` run when choosing and again immediately before saving. All five
  domains — `repositori.urv.cat`, `sites.lsa.umich.edu`, `sites.duke.edu`,
  `ore.exeter.ac.uk`, `incois.gov.in` — are fresh, appear in no banned URL, and are at 0
  of 3. No exempt-list URL (statute, dictionary, treebank, corpus, standard) was reused.
- **Nothing paywalled was cited from an abstract.** All four scholarly sources were read as
  full-text PDFs on institutional hosts. No table, chart or figure was reproduced; the BCI
  threshold bands are restated in prose with attribution.

### The third framing claim, corrected rather than dropped

The prompt offered "awe is self-diminishing, an odd pairing with a moment meant to be
about two people." **The evidence points the other way**, and that correction is the
post's most citable original claim:

- Bai et al.: the small self **accounted for increases in collective engagement** —
  integration toward others, not withdrawal from them.
- Edwards et al.: awe shrinks self-size **without** inducing feelings of insignificance,
  while enlarging the perceived size of the world.

The page states the corrected version and cites both. Recorded in
`structuralLimitations`.

---

## Cannibalisation — how this differs from the two named siblings

Both were read in full before a line was drafted.

| | `romantic-proposal-room-decoration` (this batch) | `proposal-ideas-for-girlfriend-at-home` (wave 2) | **this post** |
|---|---|---|---|
| Setting | An indoor room you control | An Indian family home | An open public shore |
| Binding constraint | What the room allows; light | Privacy from family | **Strangers you cannot clear, plus wind, tide and light** |
| Sort order | Set-up and reversal time | Privacy each idea needs | **Crowd each idea survives** |
| Research lane | Environmental psychology, lighting, interior design | Household privacy, device sharing, religious segregation | **Awe/vastness, coastal blue space, beach crowding** |
| Sources | jged.uns.ac.rs, frontiersin, journalssystem, idajournal, img-journal | guttmacher, usenix, research.gold, pewresearch | **urv.cat, umich, duke, exeter, incois** — zero overlap |
| Safety content | Candle safety indoors | None | **Tide, waves, rocks, no water** |

No source, no sort axis and no section framing is shared with either. Both are
cross-linked by slug in `## When the beach is the wrong choice`, which is also the
honest routing: a reader who cannot tolerate an audience belongs in the indoor post.

**Recorded limitation:** those two `/blog/` links are not `TEMPLATE_LINKS` entries and
404 until waves 2–4 publish. That is logged as a genuine checklist failure rather than
silently dropped.

---

## Phase 5 — links and targeting

- **`/proposal` (mandatory)** — placed after the comparison table, which is where the
  page establishes why a reader would want it: the honest connection is that a link is
  the part that survives sand, wind and a dead battery, because it still opens tomorrow.
- **`/love-gf` (genuine alternative)** — in `## When the beach is the wrong choice`, for
  the reader whose ask is not marriage. In Indian usage "propose" usually means asking
  someone to be your girlfriend, so a marriage-proposal scrapbook is the wrong object for
  a large share of this traffic; the 16,998-view / 29.9% most-viewed-template figure is
  the reason given.
- Four internal links total, all relative. `templateUrls`: `/proposal`, `/love-gf`.
- `categorySlug`: `modern-romance` — advice post in Valentine week, verified against the
  live Strapi category list.
- Slug checked against Strapi: `filters[slug][$eq]=marriage-proposal-ideas-on-the-beach`
  returns `[]`.

**Safety line the page takes, plainly:** do not propose in or near water, never kneel
where a wave reaches, never plan anything requiring a walk onto rocks or into the sea,
check tide and sea state. And **no claim is made that any named beach permits fires,
alcohol, drones or night access** — the page says only that these follow state and local
rules that differ beach to beach, and tells the reader to check locally.

---

## Phase 6 — audit

`|passed| = 47`, `|failed| = 3`, `passed ∩ failed = ∅`, sum = 50. Item strings parsed
byte-verbatim from `references/publish-checklist.md`, whitespace-collapsed across wrapped
lines.

Failures, all genuine and all structural:

1. *The post contains at least one claim none of the top 5 pages make* — SERP measured at
   snippet level only; no competitor page was fetched, so the negative cannot be asserted.
2. *Slug short, hyphenated, lowercase, no stop words* — the assigned slug keeps "on-the"
   because it is the exact keyword and must match the filename and `batchMeta.keyword`.
3. *Every internal link is a real URL from TEMPLATE_LINKS* — the two sibling `/blog/`
   cross-links required by the BRIEF are not TEMPLATE_LINKS entries.

Body: **1,786 words** excluding FAQs (plain whitespace split), inside 1,500–1,800.
**12 FAQs**, in `article.faqs` only; highest FAQ-vs-H2 Jaccard similarity is well under
the 0.85 flag. `structuredData` carries one `ItemList` (7 items, mirroring the H3s in
order) and one `@id`-matched enrichment block on `<canonicalURL>#post` with `about`,
`mentions` and five `citation` entries mirroring `batchMeta.sources` one-to-one. All five
`sameAs` pairs verified live against the Wikipedia API with Wikidata QIDs: Marriage
proposal Q1057944, Beach Q40080, Awe Q1300771, Tide Q23384, Goa Q1171.

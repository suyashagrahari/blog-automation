# BRIEF — WAVE 4 of `2026-09-15-virtual-gift-30`

**Read `BRIEF.md`, then `BRIEF-WAVE2.md`, then `BRIEF-WAVE3.md`. All still apply.**
This file records only what is *different* for wave 4. Where they disagree, this wins.

Your assignment is one row of `WAVE4-PLAN.json`. Market: India. Evergreen.

---

## 0. You are on the best ground found in four waves — do not waste it

Three shapes were measured dead across 136 screened keywords in wave 3:

| Shape | Result |
|---|---|
| `online <x> gift for <person>` | retail SERP, **13 of 13** |
| `digital invitation for <occasion>` | **10/10** invitation-*maker* tool pages |
| `virtual gift <noun>` | competitor landing pages, 0–1 blog results |

**The `how to surprise <person>` shape breaks that pattern.** Its SERP is
wikiHow at #1 with Reddit threads behind it — **5 to 10 of 10 results are genuine
editorial, with zero ecommerce and zero tool pages.** That is the first genuinely
blog-shaped ground on this axis.

Two consequences:

1. **Your competition is real editorial, not vendor copy.** In waves 2–3 the honest
   assessment was usually "the SERP is product pages with no prose, so anything
   substantive wins". Not here. wikiHow, Reddit, Brides, Good Housekeeping and
   Bonobology are *good at this*. You beat them on two things only: **first-party data
   they cannot publish**, and **India specificity** — every incumbent writes for a
   US/UK reader.
2. **Reddit in the top 10 tells you the format.** People are asking other people
   because the listicles do not answer them. Write to the actual question, not to a
   keyword.

## 1. SERP caveat you must record in your audit

**All wave-4 SERPs are Brave, US-served.** DuckDuckGo rate-limited this sandbox
(HTTP 202 anomaly page) after ~150 queries, so wave 3's `kl=in-en` India route was
unavailable.

That means your SERP is **reliable evidence of page type** — which is what Gate 2
needs and why these rows were selected — and **unreliable evidence of Indian ranking
order**. Say so in your `honestAssessment` rather than implying you measured an India
SERP. Do not quietly present a US-served position as an Indian one; wave 1 of an
earlier run shipped that mistake and it cost the whole run's credibility.

Your SERP is in `SERPS-WAVE4.md`. If you need one more query:
`node scripts/serp.mjs "<query>"` (Brave works again). **DuckDuckGo is rate-limited —
do not use `serp-ddg.mjs` today.** One or two calls, never a loop.

## 2. Sources — the pool is materially thinner than wave 3

**16 domains are now at the cap of 3 and are BANNED:** `arxiv.org`,
`cyberpsychology.eu`, `dash.harvard.edu`, `developer.mozilla.org`, `europepmc.org`,
`frontiersin.org`, `gsb.stanford.edu`, `journals.plos.org`, `ojs.zrc-sazu.si`,
`osf.io`, `pewresearch.org`, `pmc.ncbi.nlm.nih.gov`, `research.tue.nl`.
Re-read `SPENT-SOURCES.json` and check your siblings' `sources` arrays before you
commit — 78 posts have already spent 335 URLs across 270 domains.

**API status, measured through wave 3 (it degraded across the run):**

- **Crossref → Unpaywall → OA landing page is the route that works.** Query Crossref
  for the phenomenon, take the DOI, call
  `https://api.unpaywall.org/v2/<doi>?email=suyash.agrahari@hirequotient.com`, and use
  the OA location it names. This lets you filter blocked hosts *before* spending a fetch.
- **OpenAlex** exhausted its daily budget ($0, resets midnight UTC). May have reset —
  try once, never loop.
- **Semantic Scholar, CORE** — 429ing.
- **DOAJ** — was 502ing late in wave 3; try it, two or three words only.
- **OpenAIRE** — reports conflict; its strict AND matching returns 0 for queries over
  ~3 words. One try.
- Confirmed 403/bot-challenged: `sagepub`, `sciencedirect`, `mdpi`, `biomedcentral`,
  `escholarship`, `base-search`, `zora.uzh.ch`, `nature.com`, SSRN, Wiley, Springer.
- **PDFs do not parse here.** Every source will be an abstract-and-metadata read.
  Record that in the audit rather than implying a full-text read.

**Search the phenomenon, not the keyword.** For a surprise post:
`surprise positive affect anticipation`, `ritual celebration relationship
satisfaction`, `expectancy violation positive`, `savoring anticipation`. Searching
`how to surprise your wife` returns nothing, because nobody studies listicles.

If no topical research exists, **say so in the audit and name the terms you tried.**
That is a real finding. Do not pad with a government statistic.

## 3. `/christian-wedding` and `/christian-wedding-2` — 78 posts, never linked once

`how-to-create-a-digital-card` carries both, plus `/shaadi-card`. It is the first
keyword in four waves whose SERP actually justifies them: a post about making a digital
card can cover wedding cards honestly, across communities, without forcing it.

**If you are that row, use all three properly** — describe what each template actually
is, from its own description in `app/lib/prompt.ts`, not from the slug. Everyone else:
use the templates your row names; if one genuinely does not fit, say so in the audit,
pick a better one from `TEMPLATE_LINKS`, and name the swap.

Several templates are **jokes by design** — `/challan` a mock traffic notice,
`/legal-notice` a mock summons, `/nutrition` a nutrition label where the product is a
person, `/flags` a swipeable joke dating profile, `/loveflix` a streaming parody,
`/vending-machine` an Affection Dispenser paid for with a confession. Describing one
earnestly reads as though you never opened it.

## 4. Anti-cannibalisation — 78 posts exist and four friend/LD clusters are saturated

Your row carries `overlapWithWritten` and `nearestWritten` if a published post shares
4+ organic URLs with you. **If `mustDifferentiate` is true: read that post first, state
the split in one sentence in your audit, and cross-link it.**

Two collisions this run were **topical and invisible to URL overlap** — an agent found
each by reading siblings. So: **before drafting, grep `blogs/` for your subject**, not
just your keyword. If a published post already makes your argument, either find a
genuinely different one or **abort the row** (emit the research brief, write no blog
JSON, report with reasoning). Two rows aborted in wave 3 and both were correct.
**18 good posts beat 19 with a twin in it.**

## 5. Pricing — still empty, and it has now bitten six drafts

`content/facts.md` `## Pricing (fill in by hand)` is **EMPTY**. The verifier caught a
hard `COST CLAIM` in six wave-3 drafts ("free tier", "costs you nothing", "costs you
nothing to build"). Every one had to be rewritten.

Two agents inspected the live site and **disagreed** — one found `/templates` marketing
copy and an `Offer` JSON-LD asserting a zero price; another fetched the same page and
found it client-rendered with no price string served. **Both declined to state a
figure**, because marketing copy is not a measured first-party fact. Take the same
position. Never invent, infer or imply a price; say it cannot be confirmed and link
`/templates`.

## 6. First-party facts — vary your opening

`content/facts.md`, measured **2026-09-15** (cite that date; `npm run facts` could not
be re-run — the production-DB read is denied in this environment).

Phase 0 blocks: **3 relevant facts, 2 inside the first 150 words.** Across 78 posts the
40.6% password figure and the 6.2-hour edit gap now read as a tic. **Check three
siblings and open with a pair nobody near you has used.** Under-used lines: 94.1%
published-and-shared; 3,377 creators at 1.29 pages each; 49.0% opened on a phone; 11.5
average views per page; occasion-dated pages only 3.7% of everything;
/apology-dashboard 23.9% against /love-gf's 25.8%.

**The database records which *template* was opened, not who received it.** A /love-gf
count does not prove the recipient was a girlfriend. Disclose that whenever you cite
template counts while writing about a husband, a friend or a parent.

## 7. Before you report — run the verifier, read only your own lines

```
node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30
```

It verifies all posts; there is no `--slug` flag.

**Act only on lines naming your own slug.** Siblings are being written as you read.
**Ignore every source-cap finding** — the orchestrator enforces caps once, at
quiescence. In wave 3 a mid-write cap report was a false alarm that resolved itself;
acting on one in wave 1 stripped a legitimate source out of a finished post.
**Ignore the batch-wide `batch.json blogs != files on disk` line** — the orchestrator
rebuilds it at the end.

Fix what it reports against your slug, then report. A structural failure stays
`failed` with an honest `why` naming the blocker and what would close it — never
delete an item to make the count green.

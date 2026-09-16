# Wave 3 notes — posts 61–78 of `2026-09-15-virtual-gift-30`

Final state: **78 posts, 136,763 words, `verify-batch.mjs` → ✔ no problems, zero
source-cap violations.** This file records what was asked, what was actually possible,
and the three orchestrator errors, because the failure modes are structural and will
recur.

---

## 1. The request was 40 posts. The axis contained 18.

The ask was to write "the 40 blogs you have not created" from
`content/keywords/2026-09-15-virtual-gift-100`. **That run does not contain 40
unwritten blogs.** Measured, not estimated:

| Of its 100 keywords | |
|---|---|
| already written here | **67** — 30 as primaries, 35 more as `secondaryKeywords` inside existing posts, 2 as near-matches |
| `do-not-write` | **25** — `gate2-ecom-serp` on head terms (`gift for girlfriend`, `birthday gift for boyfriend`, all 10,000+/mo) and `gate5-wrong-product` on price brackets (`under 500`, `e gift card`) |
| `merge-into-existing` | 2 — duplicates of live pages |
| `improve-existing` | 3 — pages we already rank with; they need an edit, not a new post |
| genuine `new-page` | **3** — and all three are ≥7/10 SERP duplicates of posts already in this batch |

Writing the 33 would have meant deliberately targeting SERPs the keyword research had
already condemned. So wave 3 sourced keywords elsewhere: a fresh India autocomplete
harvest (1,025 on-axis candidates after filtering), of which **112 were screened
against live India SERPs** in five DuckDuckGo `kl=in-en` batches.

**19 survived screening. 2 aborted during writing. 18 shipped.**

## 2. What killed the other 94 — three reusable rules

Each is measured across the 112, not inferred:

| Shape | Verdict | Evidence |
|---|---|---|
| `online <x> gift for <person>` | **retail SERP** | failed **13 of 13**. Amazon/Flipkart/FNP/IGP hold 5–8 of 10 |
| `digital invitation for <occasion>` | **tool SERP** | 10/10 invitation-*maker* products (Canva, easyinvite.in, desievite, invitationbazaar, craftyartapp) |
| `virtual gift <noun>` (box/link/website/music/free) | **competitor landing pages** | 0–1 blog results in 10 |
| `digital gift for <family member>` | **retail SERP** | Amazon/Etsy/FNP 3–7 of 10 |

**The strategic finding: the digital-invitation axis is a TOOL-PAGE opportunity, not a
blog one.** Of ~319 invitation keywords harvested, exactly one — `what is a digital
invitation` — has a blog-shaped SERP (7/10 editorial). Every other one returns products.
SubhSandesh owns five relevant templates (`/wedding-shaadi`, `/shaadi-card`,
`/reception`, `/christian-wedding`, `/christian-wedding-2`) that rank nowhere. **The
correct next action on that axis is landing-page SEO on those five URLs, not more blog
posts.**

## 3. ORCHESTRATOR ERROR — the duplicate check was blind to 32 of 60 posts

The anti-cannibalisation rule (reject at ≥6/10 shared organic URLs with a written post)
was run against `SERPS-WAVE2.md`, which holds SERPs for **28 of the 60** written posts.
The other 32 are wave-1 posts with no SERP ever recorded. **The rule could not see
them.**

It surfaced because a writing agent found an unflagged near-neighbour on its own and
reported it — not because I checked. I then backfilled all 32 SERPs
(`SERPS-WAVE1-BACKFILL.md`) and re-ran the check across all 60.

**What the backfill caught:** `virtual gift for online friend` shares **9 of 10** URLs
with the published `virtual gift for best friend`. An agent was mid-draft on it. Row
aborted, draft deleted, research kept.
It also newly flagged three rows as needing differentiation against wave-1 posts that
had been invisible.

**Rule for next time: record a SERP for EVERY post at write time.** A batch that keeps
SERPs only for its most recent wave cannot check cannibalisation against its own back
catalogue, and the gap stays invisible until something ships.

## 4. ORCHESTRATOR ERROR — the keyword dedupe did not stem

Candidate keywords were deduped against claimed primaries and secondaries with Jaccard
over **raw tokens**. `gift` and `gifts` are different tokens, so
`best online gifts for girlfriend` scored 0.60 against the claimed
`best online gift for girlfriend` — under the 0.75 threshold — and was planned.

The writing agent caught it at Phase 2: that exact phrase is a declared
`secondaryKeyword` of the published `online-gift-for-girlfriend`, which the BRIEF
forbids targeting. Row aborted before any blog JSON existed. It also skipped Phase 3
deliberately, so as not to spend a scarce source-domain slot siblings still needed.

A stemmed re-scan of all 19 rows against 163 claimed terms found one other row above
0.80: `long-distance-birthday-gift-website` (0.80). Judged acceptable — it narrows a
generic claimed phrase with "birthday" — and a cross-link to the colliding post was
added in the remediation pass.

**Fix: stem before the Jaccard dedupe, and run it against `secondaryKeywords` as well
as primaries.** Both are cheap; neither was done.

## 5. ORCHESTRATOR ERROR — a row was planned with 5 internal links

`what-is-a-digital-invitation` was assigned four templates *plus* the mandatory
`/templates` CTA link — five internal links against a 2–4 ceiling, and four
`templateUrls` against a 1–3 schema limit. Caught by the verifier on the first post of
the wave. The `/date-invitation` block was removed (it is a *date* invitation, not an
event one — the agent flagged this itself) and ~110 words of substance added to hold the
1,500-word floor.

## 6. URL-overlap screening cannot see a TOPICAL collision

Two agents independently found collisions the metric missed:

- `best online gifts for girlfriend` — the plan flagged
  `online-creative-gift-ideas-for-girlfriend` on 5/10 URL overlap, but the binding
  collision was with `what-can-i-gift-my-girlfriend`, whose published angle is a
  clause-for-clause match of the assigned lane. URL overlap was under threshold.
- `virtual-gift-link-for-boyfriend` — wave-2's `shareable-gift-link-for-couples`
  already owns ~a third of its lane (preview cards, forwarding, link decay) for a
  different keyword, at under 4/10 overlap.

**Two pages can share an argument without sharing a SERP.** The screen is necessary and
not sufficient; agents reading their siblings is what caught both.

## 7. Source discovery degraded across the wave — a measured timeline

All healthy at 13:00. By the fifth concurrent agent:

- **OpenAlex** — served ~10 queries per agent, then hard-429, then *"insufficient
  budget, $0 remaining, resets at midnight UTC"*. Dead for the day.
- **Semantic Scholar** — 429 after roughly one query.
- **CORE** — began 429ing mid-wave.
- **DOAJ** — Cloudflare 502 on every query late in the run.
- **OpenAIRE** — reports conflict: one agent called it the best tool of its session,
  another had it refuse connections, a third found its strict AND matching returns 0
  for any query over ~3 words.
- **The route that worked end-to-end: Crossref → Unpaywall → OA landing page.** It
  returns the best OA location for a DOI, which lets an agent filter blocked publisher
  hosts *before* spending a fetch. Two agents found this independently.
- Confirmed 403/bot-challenged: `sagepub`, `sciencedirect`, `mdpi`, `biomedcentral`,
  `escholarship`, `base-search`, `zora.uzh.ch`, `nature.com`.
- **PDFs do not parse in this sandbox.** Every wave-3 source is an abstract-and-metadata
  read, and every post records that rather than implying a full-text read.

Despite all of it, the 18 posts added **71 distinct new source domains** and breached
no cap.

## 8. Caps: enforced once, at quiescence — and that was the right call

Final: **335 distinct URLs, 270 distinct domains, zero violations** across 78 posts.

Mid-wave, one agent reported `dash.harvard.edu` in **4** posts — a real violation at
that instant. It correctly did *not* strip its source; it recorded an honest audit
failure and escalated. Independently, another agent dropped its own `dash.harvard.edu`
source on seeing the count. By quiescence the domain was at exactly 3, legal. **Had the
mid-write report been acted on, a legitimate source would have been stripped from a
finished post — which is exactly the wave-1 error.**

13 domains now sit at exactly 3 and are closed to wave 4: `arxiv.org`,
`cyberpsychology.eu`, `dash.harvard.edu`, `developer.mozilla.org`, `europepmc.org`,
`frontiersin.org`, `gsb.stanford.edu`, `journals.plos.org`, `ojs.zrc-sazu.si`,
`osf.io`, `pewresearch.org`, `pmc.ncbi.nlm.nih.gov`, `research.tue.nl`.

## 9. The empty pricing block is now shaping the writing

`content/facts.md` `## Pricing (fill in by hand)` is still **EMPTY**. Four wave-3
keywords contain the word "free". The verifier caught a `COST CLAIM` in **five**
separate drafts ("free tier", "costs you nothing", "costs you nothing to build"); every
one was rewritten to decline a figure.

Two agents inspected the live site and **disagreed**:
- one found `/templates` marketing copy and an `Offer` JSON-LD asserting a zero price;
- the other fetched the same page and found it client-rendered, with no price, plan or
  currency string in the served HTML.

Both declined to state a figure, on the same reasoning: marketing copy is not a measured
first-party fact. **That divergence is the point — the price is not reliably readable
from the page, so it needs a human to fill in.** Roughly 20 of 78 posts now carry a
sentence explicitly declining to quote a cost. Two lines in `facts.md` closes all of
them. Nothing should invent a figure to make them go away.

## 10. Still open

- **`/christian-wedding` and `/christian-wedding-2` have never been linked** in 78
  posts. No wave-3 keyword's SERP justifies them (see §2). They are a tool-page job.
- `apology website for girlfriend` sits at **#7** — page exists, fix is a title and
  heading edit. Cheapest win available and still untaken.
- No Search Console export — the ninth run asking. Every volume figure remains `EST`.
- Neither wave 1, 2 nor 3 is published. All 78 are drafts on disk.

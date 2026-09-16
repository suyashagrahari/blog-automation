# Wave 4 notes — posts 79–86 of `2026-09-15-virtual-gift-30`

Final state: **86 posts, 151,048 words, `verify-batch.mjs` → ✔ no problems, zero
source-cap violations.** Wave 4 added 8 posts and aborted 1.

---

## 1. The finding: `how to surprise <person>` is the first blog-shaped cluster on this axis

Across waves 3–4, 136 keywords were screened against live SERPs. Three shapes are dead
for a blog:

| Shape | Result |
|---|---|
| `online <x> gift for <person>` | retail SERP, **13 of 13** |
| `digital invitation for <occasion>` | **10/10** invitation-maker tool pages |
| `digital card for <occasion>` | 5–6/10 tool pages — same failure as invitations |
| `virtual gift <noun>` | competitor landing pages, 0–1 blog results |

**`how to surprise <person>` breaks the pattern.** wikiHow at #1 with eight Reddit
threads behind it; 5–10 of 10 results editorial; zero ecommerce, zero tool pages. It is
also the best product fit on the axis — a surprise page *is* the artefact these
searchers are trying to make.

**Read the Reddit density correctly: it is a content gap, not competition.** People ask
strangers when no article answers them. But the corollary is that wave 4's competition
is *real editorial* (wikiHow, Reddit, Brides, Good Housekeeping, marriage.com), not the
vendor copy waves 2–3 faced. The two defensible edges are first-party data no
competitor can publish, and India specificity every US/UK incumbent writes past.

## 2. SERP CAVEAT — all wave-4 SERPs are US-served

DuckDuckGo rate-limited the sandbox (HTTP 202 anomaly page) after ~150 queries, so
wave 3's `kl=in-en` India route was unavailable. Wave 4 used Brave, which **accepts no
region parameter**.

Every wave-4 post records this in `honestAssessment`: the SERP is reliable evidence of
**page type** (what Gate 2 needs, and why these rows were selected) and unreliable
evidence of **Indian ranking order**. Nothing is presented as a measured India SERP.

**By the end of the session Brave was hard-429 too, including a control query.** Both
engines are exhausted. 16 further candidates are mined, filtered and queued in
`/tmp/w4-cands2.txt` (`how to surprise someone online`, `how to surprise on birthday
midnight`, `how to surprise best friend on friendship day`, …) and could not be
screened. **They were not written.** Three of this run's four aborts came from
collisions only a SERP read exposed; writing unscreened keywords would reliably produce
twins.

## 3. `/christian-wedding` and `/christian-wedding-2` — closed after 80 posts

Both had been linked **zero times**. Every wedding/invitation keyword screened in wave 3
returned tool pages, so no row could carry them honestly. `how-to-create-a-digital-card`
is the first keyword whose SERP justifies them, and it kept both — two styles of one
document is a genuine layout choice, stated as such in the body rather than padded.

**All 33 non-festival templates in `TEMPLATE_LINKS` are now linked somewhere in the
batch.** The 5 still unlinked are all festival templates (`/holi`, `/eid-mubarak`, both
Raksha Bandhan pages, `/happy-ganesh-chaturthi`) and are correctly excluded — nothing in
this batch is a festival, and `BRIEF-WAVE2.md` §6 forbids the `indian-festivals`
category here.

## 4. ORCHESTRATOR ERRORS — four briefs corrected by their own agents

This is the wave's most important lesson and it is structural.

1. **`surprise ideas for her` — ABORTED.** I assigned "her" as a relationship-agnostic
   lane. The agent's own SERP disproved it: **6 of 10 results name a girlfriend
   explicitly**, so searchers resolve the pronoun to the most saturated intent in the
   batch (9 published posts), while the wife half was owned by a row writing
   concurrently. It also found "ideas with situational judgement" is the batch house
   format — 13 of 78 posts — with two near-verbatim matches.
2. **`how-to-surprise-husband-on-anniversary` — nearly aborted.** The thesis I supplied
   ("a shared date, so only the form can surprise") is *already stated* by both nearest
   siblings, one with an H2 reading "An anniversary is a date you both already have".
   Both already lead `/capsule`. The agent found a different axis — ranking gestures by
   whether their *second* year beats their first.
3. **`how-to-create-a-digital-card` — brief incomplete.** I named three colliding
   products; the agent found a **fourth**, the digital *business* card, which holds
   **#1** on its SERP plus a r/CreditCardsIndia thread. It separated four meanings.
4. **`how-to-surprise-your-wife` — collision avoided.** Two siblings already own the
   shared-house secrecy angle plus the 40.6%/6.2h pairing. It dropped concealment
   mechanics entirely and took the *reception* problem instead.

**The generalisation: URL-overlap screening catches duplicate RESULTS; it cannot catch
duplicate ARGUMENTS.** Every one of these was caught by an agent reading siblings in
full, never by the metric. Wave 5 must keep "read your siblings before drafting, grep
for your subject not just your keyword" as a blocking instruction, not a reminder.

## 5. Template saturation is now as real as keyword saturation

Measured during the abort: **`/love-gf` appears in 22 of 86 posts, `/bouquet-gf` in 13,
`/photo-puzzle` in 8.** Three siblings already describe `/searched` and `/nutrition`.
A template assignment is now a genuine constraint, not a formality — agents were told to
describe an already-used template *freshly* or justify a swap, and several did.

## 6. Sources — the pool is visibly thinning

**367 distinct URLs across 294 domains, zero violations.** Wave 4 added 32 new source
domains across 8 posts.

**15 domains are now at the cap of 3** and closed to wave 5: `arxiv.org`,
`cyberpsychology.eu`, `dash.harvard.edu`, `developer.mozilla.org`, `europepmc.org`,
`frontiersin.org`, `gsb.stanford.edu`, `journals.plos.org`, `ojs.zrc-sazu.si`,
`osf.io`, `pewresearch.org`, `pmc.ncbi.nlm.nih.gov`, `repository.lsu.edu`,
`research.tue.nl`, `research.vu.nl`.

**API state:** OpenAlex exhausted its daily budget ($0, resets midnight UTC); Semantic
Scholar and CORE 429; DOAJ intermittently 502; OpenAIRE's strict AND matching returns 0
for queries over ~3 words. **Crossref → Unpaywall → OA landing page carried every wave-4
post.** PDFs do not parse in this sandbox, so every wave-4 source is an
abstract-and-metadata read and each post records that.

**Three genuine negative findings**, recorded with the search terms tried rather than
padded around:
- No open-access empirical research exists on **how a woman tells her husband she is
  pregnant** (21 queries across four APIs returned only clinical disclosure work).
- No open-access research on **Indian household privacy / shared living** survived ~17
  Crossref and 7 DOAJ terms.
- No open-access research on **Indian anniversary practice** (12 terms).
In each case the India specificity is labelled first-hand observation, not dressed as
sourced. One post substitutes a Lahore study and **labels it Pakistani in the body**.

## 7. Pricing — still empty, still shaping the writing

`content/facts.md` `## Pricing (fill in by hand)` remains **EMPTY**. Roughly 25 of 86
posts now carry a sentence explicitly declining to quote a cost.

Two agents inspected the live site in wave 3 and **disagreed** — one found `/templates`
marketing copy and an `Offer` JSON-LD asserting a zero price; another found the page
client-rendered with no price string in the served HTML. A wave-4 agent fetched both
`/` and `/templates` and confirmed the second reading: **no price, plan or currency
string is in the served HTML.**

Both declined to state a figure, on the same reasoning: marketing copy is not a measured
first-party fact. **Two lines in `facts.md` closes ~25 posts' worth of hedging.** Nothing
should invent a figure to make them go away.

## 8. Still open

- **86 posts are drafts on disk. None of waves 1–4 is published.** They reach Strapi
  only via the deployment → Batches tab → review → tick → publish.
- `apology website for girlfriend` sits at **#7** — page exists, fix is a title and
  heading edit. Cheapest win in the whole run and still untaken.
- **The digital-invitation axis is a TOOL-PAGE opportunity** (wave 3 §2): `/wedding-shaadi`,
  `/shaadi-card`, `/reception`, `/christian-wedding`, `/christian-wedding-2` rank
  nowhere and need landing-page SEO, not more blog posts.
- No Search Console export — the tenth run asking. Every volume figure remains `EST`.
- 16 screened-but-unqueried candidates await a search-rate-limit reset.

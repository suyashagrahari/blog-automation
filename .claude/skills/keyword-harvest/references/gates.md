# The Six Gates — full rubric

Read this during Phase 7. Each gate runs on what survived the previous one, and the
order matters: the cheap kills come first so the expensive judgement only runs on
candidates worth judging.

---

## Gate 1 — Does the SERP exist?

**Test:** run the query and look at what comes back.

**Cut if:**
- Results are off-topic — Google is guessing because it has no demand data for this
  phrasing
- Results are entirely marketplace listings (Etsy, Amazon, Alibaba) when the user is
  not selling a physical product
- Results are entirely Pinterest or image packs
- The SERP shows results for a *different* query, meaning Google is auto-correcting
  the phrasing

**Keep if:** at least half the top 10 is on-topic and matches the intent implied by
the phrasing.

**Note:** an all-Pinterest SERP is not always a kill. If the user's asset is visual
and shareable, a weak Pinterest SERP can be a genuine opening. Judge by asset type,
not by reflex.

---

## Gate 2 — Page-type match

**Test:** what page type occupies positions 1-5?

Map the ranking type against the user's asset from Phase 0:

| Ranking type | Tool page can win? | Blog post can win? |
|---|---|---|
| Tool / product pages | Yes | Rarely |
| Blog posts, guides | Rarely | Yes |
| Listicles / roundups | No — get *listed* instead | Yes |
| Forums (Reddit, Quora) | Sometimes — weak SERP | Often |
| Marketplaces | No | No |
| Video | No | Only with video |
| Image packs | No | No |

**Action on mismatch:** do not cut immediately — reclassify. A keyword that fails
for a tool page may be a strong blog target. Move it to the other asset's pool and
note the reclassification.

**Action when listicles dominate:** flag it as an outreach target, not a ranking
target. The move is being included in the existing roundups, which is a different
and often faster job than outranking them.

---

## Gate 3 — Duplicate

Handled in Phase 6 by SERP overlap. Confirm no cluster has two primary keywords
before proceeding.

**Threshold:** 3 or more shared URLs in the top 10 means one keyword. Some
practitioners use 4 or 5 for stricter clustering; 3 is the working default. If two
keywords share exactly 3 URLs but the page types differ, treat them as separate —
the shared URLs are probably broad-authority sites appearing in both.

---

## Gate 4 — Weakness count

**Test:** count weak results in the top 10.

A result is weak if it is any of:
- A forum thread (Reddit, Quora, niche forums)
- Pinterest, TikTok, Instagram, or other social
- A page that doesn't directly answer the query — partial intent match
- A marketplace listing where a content page would serve better
- A site with authority comparable to or below the user's
- A page visibly outdated — old dates, dead references, stale figures
- A thin page, under a few hundred words, where the query deserves depth

**Scoring:**

| Weak results in top 10 | Verdict |
|---|---|
| 5+ | Strong opening — prioritise |
| 3-4 | Winnable |
| 1-2 | Hard; only with a genuine differentiator |
| 0 | Cut, regardless of volume |

**Why this beats KD scores:** keyword difficulty is derived largely from backlink
profiles of ranking pages. On long-tail and niche queries it is frequently wrong in
both directions — low KD on a SERP owned by entrenched authorities, high KD on a
SERP full of forum threads. Counting the actual results takes two minutes and is
more accurate than any single number.

**Authority calibration:** "comparable to the user's" depends on Phase 0. For a
brand-new domain, most established sites count as strong. For a site with existing
rankings, calibrate against what it already ranks for — that is the real benchmark,
not an abstract authority score.

---

## Gate 5 — Conversion fit

**Test:** when the searcher arrives, what finishes their job?

| Searcher's job | Fit for a product/tool site |
|---|---|
| Copy text or download an image | Near-zero — they leave immediately |
| Read a definition or fact | Low — top of funnel at best |
| Compare options before choosing | High — commercial intent |
| Build, create, or send something | Highest — the tool *is* the answer |
| Buy | Highest, if the user sells it |

**The classic trap:** a keyword with 10-50× the volume of everything else on the
list, low apparent difficulty, and a searcher whose job is finished by copying a
line of text. It ranks. It converts at near-zero. It looks like the obvious pick on
a spreadsheet sorted by volume, which is exactly why sorting by volume first is the
wrong method.

**Arithmetic to run when this comes up:**

```
10,000 searches × 0.1% conversion = 10 conversions
   300 searches × 5%   conversion = 15 conversions
```

State this arithmetic explicitly to the user whenever a high-volume reading-intent
keyword is being cut. The number is more persuasive than the principle.

**Exception:** if the user is explicitly running a content/link-earning play and has
said so, reading-intent keywords are legitimate targets. Confirm the strategy before
cutting on this gate.

---

## Gate 6 — Volume

Runs last, on survivors only.

**With tool data:** use it, label `TOOL`, and note that Keyword Planner merges
similar keywords and shows ranges rather than exact figures to non-advertisers — so
its numbers are lumpy and often understate long-tails.

**Without tool data:** estimate a band from SERP evidence and label `EST`. Signals
that raise the estimate:
- Ads present on the SERP — someone is paying, so there is commercial volume
- AI Overview fired — Google considers the query common enough to warrant one
- Many PAA questions — indicates a well-populated query cluster
- Multiple large sites have built dedicated pages for it
- Autocomplete surfaces it early when typing the prefix

Signals that lower it:
- No ads, no PAA, no AI Overview
- Only forum and social results
- The phrasing is unusual or unnatural

**Give bands, never precise-looking numbers.** "200-600/mo EST" is honest. "437/mo"
invented from inference is not, and it will be treated as real once it is in a
spreadsheet.

**Seasonality warning:** for event- or festival-linked keywords, annual-average
figures badly understate the peak and overstate the rest of the year. Flag these as
seasonal and note the peak window, because a keyword that looks weak on an annual
average may be dominant for three weeks.

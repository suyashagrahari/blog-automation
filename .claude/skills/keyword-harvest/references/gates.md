# The gates — full rubric

Read this during Phase 9. Each gate runs on what survived the previous one, and the
order matters: the cheap kills come first so the expensive judgement only runs on
candidates worth judging.

Gate 0 is first because it is the cheapest of all — it needs a calendar, not a SERP.

---

## Gate 0 — Lead time

**Live only for occasion-linked keywords.** Evergreen keywords skip straight to Gate 1.

**Test:**

```
publish_by = event_date − time_to_rank
```

If `publish_by` is in the past, this keyword cannot pay off this cycle.

`time_to_rank` is not a guess pulled per keyword. Use these:

| Situation | time_to_rank |
|---|---|
| Improving a page that already ranks 5-20 | 2-4 weeks |
| New page, 5+ weak results in the top 10, low-competition long-tail | 6-8 weeks |
| New page, 3-4 weak results | 8-12 weeks |
| New page, 1-2 weak results, genuine differentiator | 4-6 months |
| New domain with no topical authority yet | add 4 weeks to any of the above |

**Action on failure: bucket, do not cut.** Set `bucket = next-cycle`, keep the
`publish_by` date, and carry the row into `All Keywords`. The keyword is not bad; the
calendar is. A keyword bucketed `next-cycle` in August with `publish_by: 2027-06-12`
is a queue entry, and the next run should start from that queue rather than from a
seed.

**Why this gate exists.** The 2026-08-13 rakhi run was executed 15 days before the
festival. Its #1 shortlisted cluster carried the note *"the head of the cluster is
realistic this season only if the page ships within days. Not before 28 Aug."* Its
#2 said *"Misses this festival."* Both were ranked and recommended as though they
were actionable. The analysis was right and the sequencing was wrong, and only a
careful reader of the last line of each block would have noticed.

**Seasonality is not the same as lead time.** A festival keyword has a peak window
*and* a lead time, and they are different dates:

- `peak_window` — when the searches actually happen, e.g. `2026-08-10..2026-08-28`
- `publish_by` — when the page must be live to rank *during* that window

Record both. An annual-average volume figure badly understates the peak and
overstates the rest of the year, so for anything seasonal, state the peak-window
volume and say it is a peak figure.

**Ask before assuming evergreen.** "Long distance rakhi celebration ideas" looks
seasonal and largely is; "long distance relationship gift ideas" runs all year. When a
keyword has a seasonal peak *and* a year-round floor, treat it as evergreen for Gate 0
and note the peak as an upside.

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

**Autocomplete cross-check.** A candidate that came out of Phase 2 with a high
`prefix_hits` count but returns an off-topic SERP is unusual and worth a second look
before cutting — Google suggested it because people type it, so an off-topic SERP is
more often a locale artifact than an absence of demand. A candidate that was
*invented* in Phase 3 and never appeared in autocomplete at all, with an off-topic
SERP, is a straightforward cut.

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

**Action on mismatch:** do not cut immediately — reclassify. A keyword that fails for
a tool page may be a strong blog target. Move it to the other asset's pool and note
the reclassification.

**Action when listicles dominate:** set `action = outreach` and flag it as an outreach
target, not a ranking target. The move is being included in the existing roundups,
which is a different and often faster job than outranking them.

---

## Gate 3 — Duplicate

Handled in Phase 8, in two halves. Both must have run.

**8a — against the new list.** Threshold: 3 or more shared URLs in the top 10 means
one keyword. Some practitioners use 4 or 5 for stricter clustering; 3 is the working
default. If two keywords share exactly 3 URLs but the page types differ, treat them as
separate — the shared URLs are probably broad-authority sites appearing in both.

**8b — against the live site.** This is the half the skill used to skip, and skipping
it is how a site ends up with two posts aimed at one SERP.

Cut to `improve-existing` or `merge-into-existing` if either is true:

- Token overlap ≥ 0.6 with an existing primary keyword in `site-inventory.csv`
  (`npm run keywords:inventory` prints these pairs directly)
- A `subhsandesh.in` URL already appears in this keyword's top 20

The rakhi batches contain live examples of what 8b catches:

```
0.83  personalised raksha bandhan card with name          [2026-08-18-rakhi-2]
   ↕  personalised raksha bandhan card with name and photo [2026-08-19-rakhi-4]
0.67  raksha bandhan wishes for brother in marathi         [2026-08-13-rakhi]
   ↕  raksha bandhan message for brother in marathi        [2026-08-19-rakhi-4]
```

Those are one SERP each. Two pages aimed at one SERP means Google picks one and buries
the other, and the buried one earns nothing while still costing a write.

**The language exception — do not skip this.** Two keywords that differ only by the
language they name are **never** duplicates, however high the token overlap. "raksha
bandhan wishes for brother in gujarati" and "…in marathi" score 0.67 and are two
completely separate SERPs with two completely separate sets of incumbents. In a
multilingual market the language spokes are usually the *least* contested ground you
have, so a merge here does not just lose a page — it loses the best page.

`npm run keywords:inventory` enforces this (it returns overlap 0 when two keywords name
different languages, or when one names a language and the other does not). When judging
a pair by hand, apply the same rule.

**Confirm no cluster has two primary keywords before proceeding.**

---

## Gate 4 — Weakness count

**Test:** count weak results in the top 10.

A result is weak if it is any of:
- A forum thread (Reddit, Quora, niche forums)
- Pinterest, TikTok, Instagram, or other social
- A page that doesn't directly answer the query — partial intent match
- A marketplace listing where a content page would serve better
- A site with authority comparable to or below the user's
- **A stale-year title** — the `<title>` names a year that has passed. Weight this
  heavily: it means nobody has maintained the page, and the searcher can see the old
  year in the SERP before they click.
- A page visibly outdated — old dates, dead references, stale figures
- A thin page, under a few hundred words, where the query deserves depth

**Scoring:**

| Weak results in top 10 | Verdict | `win_probability` for Phase 10 |
|---|---|---|
| 5+ | Strong opening — prioritise | 0.60 |
| 3-4 | Winnable | 0.40 |
| 1-2 | Hard; only with a genuine differentiator | 0.15 |
| 0 | Cut, regardless of volume | 0.00 |

The `win_probability` column feeds the expected-clicks calculation in Gate 6. It is a
crude prior, and it is stated as one — its job is to stop a 100,000/mo keyword with
zero weak results from outranking a 2,000/mo keyword with eight, which is exactly what
sorting by volume does.

**Why counting beats KD scores:** keyword difficulty is derived largely from backlink
profiles of ranking pages. On long-tail and niche queries it is frequently wrong in
both directions — low KD on a SERP owned by entrenched authorities, high KD on a SERP
full of forum threads. Counting the actual results takes two minutes and is more
accurate than any single number.

**Authority calibration:** "comparable to the user's" depends on Phase 0. For a
brand-new domain, most established sites count as strong. For a site with existing
rankings, calibrate against what it already ranks for — that is the real benchmark,
not an abstract authority score. Phase 1's `site-inventory.csv` and the `site:` pass
give you that benchmark directly: the domains SubhSandesh already outranks somewhere
are the ones that count as weak everywhere.

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

**The classic trap:** a keyword with 10-50× the volume of everything else on the list,
low apparent difficulty, and a searcher whose job is finished by copying a line of
text. It ranks. It converts at near-zero. It looks like the obvious pick on a
spreadsheet sorted by volume, which is exactly why sorting by volume first is the
wrong method.

**Arithmetic to run when this comes up:**

```
10,000 searches × 0.1% conversion = 10 conversions
   300 searches × 5%   conversion = 15 conversions
```

State this arithmetic explicitly to the user whenever a high-volume reading-intent
keyword is being cut. The number is more persuasive than the principle.

**The autocomplete tell.** Phase 2 surfaces the phrasings that reveal doing-intent
inside an apparently reading-intent topic — `raksha bandhan wishes link`, `raksha
bandhan greetings online free`, `rakhi card maker with photo`. Those are the same
topic as "raksha bandhan wishes" with a completely different job at the end of the
click, and they are where a tool site should be aiming. Check the autocomplete set for
them before cutting a whole topic on this gate.

**Exception:** if the user is explicitly running a content/link-earning play and has
said so, reading-intent keywords are legitimate targets. Confirm the strategy before
cutting on this gate.

---

## Gate 6 — Volume, band, and expected clicks

Runs last, on survivors only.

### 6a. Get the best figure available

In descending order of trustworthiness:

| Source | Label | Notes |
|---|---|---|
| Ahrefs / Semrush export the user pasted | `TOOL` | Best available. Use it. |
| Keyword Planner export | `TOOL` | Merges similar keywords and shows ranges to non-advertisers, so its numbers are lumpy and often understate long-tails. Still beats an estimate. |
| Google Trends relative interest the user pasted back | `TREND` | Real *relative* volume within a group of five. Ranks correctly, gives no absolute figure. |
| Autocomplete `prefix_hits` from Phase 2 | `EST` | Ordinal demand from Google, geo-targeted. Ranks correctly, gives no absolute figure. |
| SERP furniture (ads, PAA, AI Overview) | `EST` | Weakest. Use only to place a band. |

Never mix labels in one column without saying which is which. A `TOOL` row and an
`EST` row are not comparable and a sorted spreadsheet hides that completely.

### 6b. Estimating a band without tool data

Signals that **raise** the estimate:
- Ads present on the SERP — someone is paying, so there is commercial volume
- AI Overview fired — Google considers the query common enough to warrant one
- Many PAA questions — a well-populated query cluster
- Multiple large sites have built dedicated pages for it
- High `prefix_hits` in the Phase 2 autocomplete set — Google returns it under many
  different prefixes
- Autocomplete surfaces it before you finish typing the stem

Signals that **lower** it:
- No ads, no PAA, no AI Overview
- Only forum and social results
- The phrasing is unusual or unnatural
- It never appeared in the autocomplete set at all despite being an obvious phrasing

**Anchor the run.** Pick one keyword in the set whose volume you have a real figure
for — from a tool export, or a head term with a well-known order of magnitude — and
place every other band *relative to it*. Name the anchor in `shortlist.md`. Without an
anchor, bands drift between runs and two runs cannot be compared, which defeats the
whole point of a fixed output format.

**Give bands, never precise-looking numbers.** "200-600/mo EST" is honest. "437/mo"
invented from inference is not, and it will be treated as real the moment it lands in
a spreadsheet.

### 6c. Band → score (use verbatim)

India market, monthly searches. **Do not invent a per-run mapping** — an invented
mapping makes `priority_score` incomparable across runs.

| Band | Est. monthly searches | `volume_band` score | Midpoint for the clicks maths |
|---|---|---|---|
| 5 | 10,000+ | 5 | 20,000 |
| 4 | 3,000 – 10,000 | 4 | 6,500 |
| 3 | 1,000 – 3,000 | 3 | 2,000 |
| 2 | 300 – 1,000 | 2 | 650 |
| 1 | under 300 | 1 | 150 |

For a seasonal keyword, band on the **peak-window monthly rate**, not the annual
average, and say so in the row. A keyword doing 20,000 searches across three weeks of
August and nothing for the rest of the year is a band 5 in August and a band 1 in
March, and the annual average describes neither.

### 6d. Position → CTR (use verbatim)

| Target position | Organic CTR |
|---|---|
| 1 | 28% |
| 2 | 15% |
| 3 | 11% |
| 4-5 | 7% |
| 6-10 | 3% |
| 11-20 | under 1% — treat as 0.5% |

**Halve the CTR when an AI Overview fired on that SERP** (Phase 4 recorded it). The
overview takes the click that used to go to position 1, and it takes it hardest on
informational queries. Say when you have applied the halving.

**Target position, by bucket:**

| Bucket | Assume |
|---|---|
| `improve-existing`, currently 5-20 | position 3 |
| `winnable` | position 3 |
| `medium` | position 6-10 |
| `next-cycle` | position 3, but the clicks arrive next cycle — say so |

### 6e. Expected clicks

```
expected_clicks = band_midpoint × ctr(target_position) × win_probability
```

Worked example — a band 3 keyword, 4 weak results in the top 10, no AI Overview,
targeting position 3:

```
2,000 × 0.11 × 0.40 = 88 clicks/mo
```

And the trap this catches — a band 5 keyword with zero weak results:

```
20,000 × 0.11 × 0.00 = 0 clicks/mo
```

Sorted by volume, the second keyword leads the sheet. Sorted by expected clicks, it
correctly disappears. That is the whole reason this number exists.

**Round to two significant figures and label it `EST`.** It is a product of three
estimates and presenting it as precise would be worse than not presenting it at all.
Its job is ordering, not forecasting — say that in the deliverable, once.

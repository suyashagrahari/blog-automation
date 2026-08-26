# Output templates

Use these structures exactly. Consistency across runs is what makes the output
comparable over time — and comparability is what lets the user see whether their SEO is
actually improving.

All files live in `content/keywords/<YYYY-MM-DD>-<seed-slug>/`, except
`site-inventory.csv`, which is repo-wide and written by
`npm run keywords:inventory` to `content/keywords/site-inventory.csv`.

---

## 1. `site-baseline.md` — Phase 1

Written **before** any search runs. If this file is missing, the run did not do Phase 1
and the shortlist cannot be trusted, because nothing checked whether the site already
covers these keywords.

```markdown
# Site baseline — <site> · <date>

Source: `npm run keywords:inventory` · Search Console export: yes / no (asked <date>)

## What we already cover

<N> drafted posts across <M> batches. Full list in `content/keywords/site-inventory.csv`.

## Own it already — improve, don't rewrite

| Keyword | Our URL | Our position | Impressions/mo | Action | The specific edit |
|---|---|---|---|---|---|

Position from Search Console where available, otherwise from a `site:` + query check —
say which, per row. This table is the fastest traffic in the run and it goes first in
every deliverable.

## Shortlisted in a past run, never written

| Keyword | Run | Bucket then | Still valid? |
|---|---|---|---|

Half the work is already done on these. Check them before generating new candidates.

## Own-site collisions — the site competing with itself

| Overlap | Keyword A (batch) | Keyword B (batch) | Decision |
|---|---|---|---|

Every row needs a decision: merge, differentiate, or accept with a stated reason.
"Noted" is not a decision.

## Drafted with no harvest evidence

<N> posts were written without a SERP ever being checked. Listed in the script output.
These are the likeliest underperformers and the best candidates for the
striking-distance pass once Search Console data exists.

## First-party demand (`content/facts.md`)

The two or three facts used as tie-breakers this run, quoted with their measurement
date. Name them; a tie-breaker nobody can see is not a tie-breaker.
```

---

## 2. `autocomplete.csv` — Phase 2

Written by `npm run keywords:suggest`. Never hand-authored. Header:

```
suggestion,words,prefix_hits,relevance,best_rank,source_prefixes
```

`prefix_hits` is the ordering column — see `trends-and-volume.md`. Keep the file in the
run directory even after Phase 3 has consumed it: it is the evidence behind every
`demand_rank` in the inventory.

---

## 3. `candidates.md` — Phase 3

The 30-40 long-tails, recorded **before** any SERP was run, so the run can be audited
for what it chose to check and what it never looked at.

```markdown
# Candidates — <seed> · <date>

Axes live for this category: <list> · Axes skipped: <list, with why>

## From autocomplete (Phase 2)

| Keyword | Words | prefix_hits | Axis |
|---|---|---|---|

## Generated to fill gaps autocomplete couldn't reach

| Keyword | Axis | Why autocomplete wouldn't have this |
|---|---|---|

## Dropped before searching

| Keyword | Why | 
|---|---|

Includes anything under 4 words, and anything the site already owns at position 1-4.
```

---

## 4. `keyword-inventory.csv`

One row per extracted keyword. Header:

```
keyword,cluster_id,source_url,source_domain,evidence_type,intent,page_type_required,est_volume,volume_source,weakness_count,gate_failed,bucket,priority_score,ranking_urls,category,action,own_url,own_position,expected_clicks,trend,peak_window,publish_by,demand_rank
```

**Field definitions:**

| Field | Values |
|---|---|
| `cluster_id` | `C01`, `C02`… Keywords sharing a cluster share an ID. |
| `source_url` | The exact URL the keyword was extracted from. Required. For generated candidates, `GENERATED`; for autocomplete, `AUTOCOMPLETE`. |
| `evidence_type` | `TARGETED` (competitor built for it) / `TARGETED+CONFIRMED` (built for it *and* ranks top 10) / `PAA` / `RELATED_SEARCH` / `AUTOCOMPLETE` / `TRENDS_RISING` / `LLM_CITED` / `GSC` / `GENERATED` |
| `intent` | `transactional` / `commercial` / `informational` / `navigational` |
| `page_type_required` | `tool` / `blog` / `listicle` / `comparison` / `hub` |
| `est_volume` | A band, e.g. `1000-3000`. Never a single invented figure. For seasonal keywords this is the **peak-window** rate — say so in `trend`. |
| `volume_source` | `TOOL` / `TREND` / `EST` |
| `weakness_count` | 0-10 from Gate 4 |
| `gate_failed` | Blank if it survived; otherwise `G0`…`G6` |
| `bucket` | `own-already` / `winnable` / `medium` / `next-cycle` / `do-not-attempt` |
| `priority_score` | winnability × intent fit × volume band (Gate 6c table) |
| `ranking_urls` | The live top 3 URLs, **pipe-separated, in position order**. The "who currently ranks" column, and what a reviewer reads first. |
| `category` | Functional core category for the studio sheet (e.g. `birthday`, `festival`, `apology`). Optional; falls back to the cluster's primary keyword. |
| `action` | `improve-existing` / `retitle-existing` / `merge-into-existing` / `new-page` / `outreach` / `skip` — **what to actually do.** Never blank. |
| `own_url` | The site's existing URL aimed at this keyword. Blank if none. |
| `own_position` | Current position, or `none`. Note the source (`GSC` or `site:`) in `evidence_type` where it is the only evidence. |
| `expected_clicks` | `band_midpoint × ctr(target_position) × win_probability`, two significant figures. The Excel sort column. |
| `trend` | `rising` / `stable` / `declining` / `seasonal` / `unknown`. `rising` only with Trends data pasted back — never inferred. |
| `peak_window` | `YYYY-MM-DD..YYYY-MM-DD` for seasonal keywords. Blank for evergreen. |
| `publish_by` | `event_date − time_to_rank`. Blank for evergreen. A past date means `gate_failed=G0` and `bucket=next-cycle`. |
| `demand_rank` | `prefix_hits` from `autocomplete.csv`. Blank if the keyword never appeared in autocomplete — which is itself information. |

**Quoting:** any field containing a comma, quote, or newline must be double-quoted with
internal quotes doubled (`""`). `ranking_urls` frequently contains commas in tracking
parameters — strip query strings from the URLs before writing them.

Include failed keywords with their `gate_failed` value, and every `next-cycle` keyword
with its `publish_by`. Showing what was cut and why is what makes the surviving list
trustworthy; showing what was deferred and until when is what makes the next run start
ahead.

---

## 5. `shortlist.md`

Two sections, and the first one is not optional.

```markdown
# Shortlist — <seed> · <date>

Event date: <date> · <N> days out. Anchor keyword for volume bands: <keyword> (<figure>, <TOOL/known>)
SERP locale: <India-localised / US-served — and what that costs this run>

## Part 1 — Own it already (<N>) · ship this week

| # | Keyword | Our URL | Position | Expected clicks | The edit |
|---|---|---|---|---|---|

No cap on this list. It is cheap and fast and there is no reason to ration it.

## Part 2 — New pages (max 15), ranked by expected clicks
```

Then, per cluster:

```markdown
### N. [primary keyword]

- **Action:** new-page / outreach
- **Bucket:** winnable / medium / next-cycle
- **Expected clicks:** [N]/mo EST — [band midpoint] × [CTR at pos [P]] × [win prob]
- **Est. volume:** [band] ([EST / TOOL / TREND])[ — peak-window rate]
- **Demand:** [prefix_hits] autocomplete prefixes[ · Trends relative interest N]
- **Trend:** rising / stable / seasonal — [peak window]
- **Publish by:** [date] — [N] days from now, [makes it / does not make it]
- **Intent:** [type] — searcher's job is [reading / building / comparing / buying]
- **We currently rank:** [position or "no page"]
- **Currently ranking:** [pos 1 URL], [pos 2 URL], [pos 3 URL]
- **Why winnable:** [name the actual weak results — "positions 3, 6 and 8 are Reddit
  threads; position 1's title still says 2021; position 5 is a 2019 page with dead
  links"] — NOT a generic difficulty claim
- **Page to build:** [URL slug] — [tool / blog / comparison]
- **Cluster covers:** [other keywords merged into this one]
- **Not a duplicate of:** [nearest existing site page, and why it's genuinely different]
- **Extracted from:** [source URLs]
- **Time to rank:** [estimate, with the reasoning]
```

The **"why winnable"** line carries the weight. A named weakness is verifiable; "low
difficulty" is not.

The **"not a duplicate of"** line is what proves Phase 8b ran. If the nearest existing
page is genuinely unrelated, say `no near match in site-inventory.csv` — but say it.

```markdown
## Part 3 — Next cycle (<N>)

| Keyword | Publish by | Expected clicks | Why it can't ship now |
|---|---|---|---|

## Part 4 — Do not attempt

| Keyword | Band | Gate failed | What we're giving up, and why it isn't a loss |
|---|---|---|---|

High-volume terms that failed Gate 4 or 5 belong here with the conversion arithmetic
spelled out. The point is that the user can see the trade rather than wonder about it.
```

---

## 6. `competitor-map.md`

```markdown
## Domains by SERP appearance frequency

| Domain | Appeared in N of M SERPs | Google | Answer engines | Page types | Clusters owned | Stale? |
|---|---|---|---|---|---|---|

The `Stale?` column records the oldest year visible in the domain's ranking titles.
It is the Gate 4 evidence that carries the most weight in this niche.

## URL architecture of the top 3 domains

For each: the slug pattern, how variant pages are structured, hub-and-spoke or flat,
how many pages appear to exist in this topic, and what internal anchor text reveals
about the full cluster map.

## Google-only vs answer-engine-only

- **Both:** [domains] — the strongest competitors
- **Google only:** [domains] — vulnerable to answer-engine displacement
- **Answer engines only:** [domains] — won citation without ranking; study what they
  did, it is usually cheaper to copy than a ranking play

## Where we already appear

Any SERP in which `subhsandesh.in` shows in the top 20, with the position. This is the
striking-distance list restated from the competitor's side, and it is the reason the
`site:` pass in Phase 1 is not optional.

## What none of them cover

The gap. Feeds directly into the next content brief.
```

---

## 7. `serps.md`

The working log, appended during Phases 4 and 5. Not a deliverable — a scratch file
that keeps 40 SERPs out of context. One block per query:

```markdown
### [query]

Locale served: India / US-served (unlocalised) · AI Overview: yes/no · Featured snippet: yes/no · Ads: yes/no
subhsandesh.in in top 20: pos N / no

| # | URL | Title | Year in title | Page type | Weak? |
|---|---|---|---|---|---|

PAA: [questions]
Related: [searches]
```

`Weak?`, `Year in title` and `Locale served` are filled **here**, at harvest time,
while the SERP is in front of you. Reconstructing them in Phase 9 from a URL list is
guesswork, and the locale in particular is unrecoverable afterwards.

---

## 8. `keywords.xlsx`

Generated by `npm run keywords:xlsx -- <path-to-inventory.csv>`. Never hand-authored —
the column names have to match `app/lib/excel.ts` exactly and the script is the only
thing that guarantees it.

Sheet order matters: `Keywords` (survivors) must be first, because the studio's parser
reads `wb.SheetNames[0]` and ignores the rest. The `Keywords` sheet sorts by
**`Expected Clicks / mo` descending**, falling back to `Priority Score` for rows with
no clicks figure.

---

## Reporting numbers honestly

**Report:** existing pages found, striking-distance keywords found, own-site collisions
found, autocomplete suggestions harvested, unique domains, pages fetched, keywords
extracted, clusters after 8a, clusters after 8b, clusters surviving each gate,
next-cycle count, final shortlist size.

**Do not report** the multiplied slot count (queries × results) as though it were a
count of sites. It inflates the apparent scale of the work and hides the deduplication
that is the actual finding.

Example of an honest summary line:

> 48 posts already drafted → 7 shortlisted-never-written → 4 own-site collisions →
> 433 autocomplete suggestions (geo=IN) → 38 long-tails searched → 380 result slots →
> **47 unique domains** → 34 pages fetched → 411 keywords extracted → **156 clusters**
> after 8a → **149** after 8b → 61 survived the gates → 12 next-cycle →
> **15 shortlisted**, 6 improve-existing.

The collapse from 411 to 15 is not a failure of the run. It is the run working.

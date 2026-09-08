# Trends, demand, and what the numbers are actually worth

Read this during Phase 2, and again before writing any volume figure in Phase 10.

The original version of this skill had one source for every volume number it printed:
inference from SERP furniture. Ads present, PAA present, AI Overview fired, therefore
"1,000-3,000/mo EST". That is a reasonable heuristic and it is also the weakest link in
the whole output, because it produced numbers that looked like measurements. This file
lists what can actually be measured, what cannot, and how to talk about each.

---

## The four sources, ranked

| Source | Real? | Absolute or ordinal | Cost |
|---|---|---|---|
| Tool export the user pastes (Ahrefs, Semrush, Keyword Planner) | Yes | Absolute | Free to you, 2 min for them |
| Google Trends, user pastes back | Yes | Ordinal within a group of 5 | 10 min for them |
| Google autocomplete via `npm run keywords:suggest` | Yes | Ordinal | ~1 min, automated |
| SERP furniture inference | No — it is a judgement | A band | Free, already collected |

The first two require the user. **Ask for them.** The habit of not asking, and
substituting inference, is what made the old output unfalsifiable.

---

## 1. Autocomplete — the one thing that is automated

```bash
npm run keywords:suggest -- "<seed>" --geo in --hl en
npm run keywords:suggest -- "<seed>" --geo in --hl hi
```

**What it is.** Google's suggestion endpoint, `client=chrome`, `gl=in`. For each
prefix it returns up to ten continuations that real people in that country type, in
popularity order, plus a numeric `google:suggestrelevance` per suggestion. The script
asks about the seed, the seed plus each letter a-z, the seed plus twelve modifiers, and
eight question prefixes — 48 calls, and typically 400+ unique suggestions from one
seed.

**What it is not.** It is not search volume. There is no documented mapping from a
relevance score to a monthly figure, and inventing one would be exactly the sin this
file exists to prevent.

**How to use it.**

- **Rank with `prefix_hits`, not `relevance`.** `relevance` is scoped to a single
  request, so scores from different prefixes are not strictly comparable.
  `prefix_hits` counts how many different prefixes Google returned that phrase under,
  which is a cross-request signal and the better ordering. Carry it into the CSV as
  `demand_rank`.
- **Treat presence as a demand floor.** Google does not suggest phrasings nobody
  searches. A phrase appearing at all is evidence of non-zero volume, which is more
  than can be said for a phrase invented in Phase 3.
- **Treat absence as weak evidence, not proof.** Long, specific phrasings have real
  volume and no suggestion. Absence lowers a band estimate; it does not zero it.

**The four things to read out of every run:**

1. **4+ word rows** — the Phase 3 candidate pool, from data instead of memory.
2. **Language variants** — the script isolates these. A rakhi run returned hindi,
   marathi, gujarati, kannada, telugu, tamil, in roughly that order of demand. That
   ordering is worth more than any guess about which Indian languages to target, and
   it changes by festival.
3. **Year modifiers** — every `…2026` / `…2027` phrasing. Cross-reference against the
   Phase 4 SERP: a top-3 incumbent whose `<title>` still says 2021 against a query
   people are typing with 2026 is the cheapest opening in this niche.
4. **Product-shaped phrasings** — phrases describing the mechanic the user sells. A
   rakhi run surfaced `raksha bandhan wishes link` and `raksha bandhan greetings online
   free`. Both describe a shareable personalised page. Neither had appeared in any
   earlier candidate list, and they are closer to what SubhSandesh is than most of what
   did.

**Rate limits.** Google throttles. The script paces itself at 120ms and stops on a 429
rather than emitting a truncated set that looks complete. If it stops early, re-run
with `--delay 300`. Never present a rate-limited partial run as the full picture — the
script says how many calls failed, so pass that on.

---

## 2. Google Trends — real, and it needs the user

**What is reachable from here:** `https://trends.google.com/trending/rss?geo=IN`
returns 200 and gives ten *daily news breakouts* for India with approximate traffic.
For an occasion-and-greetings business this is almost always irrelevant — a sample run
returned news topics about a fighter jet and a politician. Do not build a phase on it,
and do not describe it as trend data for the user's keywords.

**What is not reachable:** interest-over-time, rising and breakout queries, and
year-on-year comparison. These are the genuinely useful parts of Trends and they need
a browser session.

**So hand the work over, precisely.** Trends compares **five terms at a time**. Group
the surviving candidates into fives and give the user copy-pasteable blocks:

```
Open https://trends.google.com/trends/explore
Region: India · Time range: Past 12 months

Group 1:  raksha bandhan wishes for brother
          raksha bandhan wishes in marathi
          raksha bandhan wishes with name
          rakhi card maker online
          raksha bandhan wishes link

Group 2:  …

Paste back, for each group: the relative interest number for each term, and
anything under "Related queries → Rising".
```

Then use what comes back:

- **Relative interest** → real ordinal volume. Label those rows `TREND` and let them
  override autocomplete ordering, because five-term comparison is a stronger signal
  than prefix counting.
- **Rising queries** → genuinely trending phrasings, including ones that did not exist
  last cycle. These are the highest-value candidates in the entire run and no other
  source in this skill can produce them. Add them to the Phase 3 pool immediately, and
  note that a "Breakout" label means growth over 5000%, not high absolute volume.
- **Interest over time** → the real `peak_window` for Gate 0, measured rather than
  assumed. Replace any assumed festival window with the observed one.

If the user declines or doesn't get to it, say in the deliverable that trend data was
requested and not supplied, and that every band is therefore autocomplete-ordered and
SERP-inferred. Do not let the absence go unrecorded.

---

## 3. Search Console — the only data that is true about *their* site

Everything else in this skill is a statement about a SERP the user has not entered.
Search Console is a statement about the SERPs they are already in.

**What to ask for:** Performance → Search results → Queries, last 3 months, export as
CSV. Columns: query, clicks, impressions, CTR, position.

**What it unlocks that nothing else can:**

- **Striking distance** (position 5-20, impressions > 50) — the highest-ROI segment
  available anywhere in this pipeline. The page exists, Google already shows it, and
  the fix is an edit. Phase 1 reports these first for exactly this reason.
- **High impressions, near-zero CTR** at position 1-10 — a title and meta problem, not
  a ranking problem, and the cheapest fix on the entire list.
- **Queries the page ranks for that nobody targeted** — free intelligence about what
  the page is actually good at. Occasionally worth re-landing the page on that query.
- **A real authority benchmark for Gate 4.** "Sites with authority comparable to the
  user's" stops being a guess: the domains SubhSandesh already outranks somewhere are
  the ones that count as weak everywhere else.
- **Ground truth on last cycle's estimates.** Compare a published post's actual
  impressions against the band this skill predicted for it. Two cycles of that and the
  bands stop being guesses.

**Ask every run.** If it does not exist yet, say when to ask again — a post needs
roughly 4-8 weeks of indexing before its query data means anything.

---

## 4. SERP furniture — the fallback, and its honest limits

Ads, PAA and AI Overview presence place a band. That is all they do.

They cannot distinguish 1,200/mo from 2,800/mo — both sit in band 3. That is fine, and
it is why the output uses bands rather than figures. What is not fine is printing a
band midpoint as though it were measured, or letting two runs use different band
boundaries.

**Both of those are fixed by using the tables in `gates.md` Gate 6c and 6d verbatim,
and by naming an anchor keyword in every run.**

---

## What to never say

- "This keyword gets 2,000 searches a month" — say "band 3, 1,000-3,000/mo EST".
- "Trending" for a keyword whose trend was never measured — say "high autocomplete
  demand (9 prefixes)" or "no trend data supplied".
- "According to Google Trends" for anything the user did not paste back.
- Any relevance score presented as a volume.
- An expected-clicks figure without `EST` and without saying it is for ordering, not
  forecasting.

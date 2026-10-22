# Valentine's Week 2027 — 2,000 keywords, 8 days × 250, 40 batches of 50

Run `2026-10-21-valentine-week` · markets **US (primary) + India**, partial UK (Rose Day only) · **43,373 live autocomplete rows** · 19 SERPs measured (Firecrawl, locale-served) · own-site check against 1,316 live posts + 1,027 drafted primaries.

| Day | Date | Autocomplete rows | Keywords | Long-tail | Pages (clusters) | Already have a post | Exp. clicks/mo at peak (EST) | Batch files |
|---|---|---|---|---|---|---|---|---|
| Rose Day | Sun 7 Feb 2027 | 6,661 | 250 | 125 | 191 | 4 | 182,391 | `batches/rose-batch-1…5.md` |
| Propose Day | Mon 8 Feb | 7,060 | 250 | 125 | 191 | **117** | 179,421 | `batches/propose-batch-1…5.md` |
| Chocolate Day | Tue 9 Feb | 5,315 | 250 | 125 | 170 | 0 | 133,683 | `batches/chocolate-batch-1…5.md` |
| Teddy Day | Wed 10 Feb | 5,487 | 250 | 125 | 186 | 3 | 109,626 | `batches/teddy-batch-1…5.md` |
| Promise Day | Thu 11 Feb | 2,802 | 250 | 125 | 183 | 0 | 113,696 | `batches/promise-batch-1…5.md` |
| Hug Day | Fri 12 Feb | 3,153 | 250 | 125 | 200 | 1 | 138,435 | `batches/hug-batch-1…5.md` |
| Kiss Day | Sat 13 Feb | 2,362 | 250 | 125 | 176 | 0 | 101,787 | `batches/kiss-batch-1…5.md` |
| Valentine's Day | Sun 14 Feb | 10,533 | 250 | 125 | 205 | 4 | 296,010 | `batches/valentine-batch-1…5.md` |

Files: `valentine-week-2027-keywords.xlsx` (Summary + one sheet per day + All 2000), `keywords.xlsx` (studio upload), `keyword-inventory.csv`, `cut-keywords.csv`, `batches/PLAN.json`, `serps.md`, `site-baseline.md`.

## Read this first — the honest read

1. **No volume here is tool data.** Every volume band is `EST`, from autocomplete `prefix_hits` (ordinal demand) plus SERP evidence. Difficulty is EST from counting weak results in measured top-10s, not a KD score. Paste a Keyword Planner / Ahrefs export and the bands can be replaced with real numbers.
2. **Rose → Kiss Day are Indian searches, not US ones.** US-served SERPs for "rose day 2027" and "kiss day 2027" return the June/July US novelty days (Red Rose Day, National Kissing Day). The US rows for those days are mostly diaspora demand. Real US volume is Valentine's Day itself — that day's expected clicks are ~2× any other day.
3. **The 2027 window is open now and closes in January.** Every measured week-day SERP is held by FNP/GiftaLove/TOI/HT/ET pages with "2026" in the title (serps.md #2–#6, #17). A 2027-titled page needs to be live by the `publish_by` date (mostly **2026-12-13**, 8 weeks before) to rank for this February.
4. **US Valentine's Day head terms are hard.** "valentines day messages for boyfriend" and gift SERPs are American Greetings, Good Housekeeping, Wirecutter, CNN (0–3 weak). The winnable US ground is long-tail: virtual / long-distance / online card / with name / date ideas.
5. **Propose Day is mostly written already.** 117 of 250 keywords match one of the 130 live propose posts — those rows say `improve-existing` with the post to edit. Writing them again would cannibalise the site.
6. **"Pages" < keywords on purpose.** 2,000 keywords collapse to ~1,500 page clusters; rows that share a SERP share one post (the `page` column in each batch file).

## Harvest caveat
A 4-way parallel autocomplete run drew HTTP 403 from Google's `client=chrome` endpoint. Missing and partial sets were re-harvested through `client=firefox` (`suggest-ff.mjs`, same prefixes, 0 failed calls). UK/CA/AU were not re-harvested to avoid another block — see `serps.md` harvest log.

## Next
- Publish order: each day's **Batch 1** first (heads + highest expected clicks), Rose → Valentine, all before **13 Dec 2026**.
- Hand batches to `blog-optimisation`; its own SERP/facts gates may still refuse individual rows.
- Search Console export after February 2027 is the only true volume check on this list.

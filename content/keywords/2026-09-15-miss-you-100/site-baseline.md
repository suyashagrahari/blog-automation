# Phase 1 — Own-site baseline, miss-you axis

Run `2026-09-15-miss-you-100` · market **India** · site `subhsandesh.in/blog/<slug>`

## 1a. What is already live

**112 live pages** sit in the miss-you / long-distance territory (matched on slug +
title against `content/keywords/strapi-live-articles.json`, 905 live articles total,
975 live slugs). The full list is `live-miss-you-inventory.csv`.

This is not a greenfield axis. It is one of the most heavily built axes on the site,
and that changes what this run is for: the job is no longer "find miss-you keywords",
it is **"find the miss-you keywords the 112 pages do not already cover."**

## 1b. The coverage finding that drives the whole run

Format distribution of the 112 live pages vs. what India is actually typing
(5,979 unique India-geo autocomplete suggestions, `autocomplete-merged.csv`):

| Format | Live pages | Fresh demand rows | Verdict |
|---|---|---|---|
| `message` | **46** | 22 | **massively over-built** |
| `quotes` | 5 | **545** | **the gap** |
| `shayari` | 4 | 218 | under-built |
| `status` | 3 | 27 | thin |
| `caption` | **0** | **174** | **completely missing** |
| `dp` | **0** | 112 | missing (but see Gate 2) |
| `images` | **0** | 270 | missing (but see Gate 2) |
| `emoji` | **0** | 47 | missing |
| `sms` | 0 | 51 | missing |
| `reply` | 0 | 31 | missing |

The site bet almost everything on the word **"message"**. Indian searchers
overwhelmingly type **"quotes"**, **"shayari"**, **"caption"** and **"status"**.
That single mismatch is the largest addressable opportunity on this axis, and it is
why 96 of the 100 keywords below come back `new-page` rather than `improve-existing`.

## 1c. Where we already sit (`site:` / live SERP pass)

Measured on real India SERPs this run, not inferred:

| Keyword | Our position | Our URL | Action |
|---|---|---|---|
| `miss you quotes in kannada` | **3** | `/blog/miss-you-quotes-in-kannada` | `improve-existing` |
| `miss you appa quotes in kannada` | **3** | `/blog/miss-you-quotes-in-kannada` | `improve-existing` |
| `miss you quotes in urdu` | **9** | `/blog/miss-you-shayari-in-urdu-2-line` | `improve-existing` — striking distance |

**This is the most important evidence in the run.** SubhSandesh already ranks #3 in a
regional-language "miss you quotes" SERP. That is proof the low-authority domain *can*
win this SERP archetype — which is what makes the regional + shayari + caption clusters
below a realistic plan rather than a wish list.

`miss you quotes in urdu` at position 9 is the single cheapest win available: the page
exists, it is one position off the fold, and the fix is a title/heading edit, not a new
post.

## 1d. Cannibalisation risk — 21 flagged

21 of the 100 keywords have a live page on the **same topic and language but a
different format** (e.g. `miss you quotes for husband` vs live
`/blog/miss-you-message-for-husband`).

These are **not** scored as duplicates, because the measured SERPs in `serps.md` show
`quotes` / `message` / `shayari` / `caption` / `dp` return materially different result
sets, and in no measured case did the live `message` page appear in the `quotes` top 10.
But Google may still collapse them. Every flagged row carries `cannibal_risk` in
`keyword-inventory.csv` and must get a `site:` check before drafting.

## 1e. First-party demand (`content/facts.md`)

`love-gf` is 39.7% of all page views and `apology-dashboard` 19.4% of all pages created.
Used only as a tie-breaker: within equal expected-clicks, partner/spouse-facing clusters
(`c07-rel-spouse`, `c08-rel-partner`) are preferred, and those posts can cite the
first-party numbers, which is what makes them citable by answer engines.

## 1f. Still missing

**No Search Console export was supplied — the seventh run asking.** Everything in
`own_position` here comes from live SERP observation of three keywords, not from
impressions data. With the export this run would have produced a real
striking-distance list across all 112 live pages instead of three rows.

# Site baseline — subhsandesh.in · 2026-09-03

Source: `npm run keywords:inventory` · **Search Console export: no** (asked again
this run — fifth run in a row without it).

## What we already cover

170 drafted primary keywords across 15 batches; **975 live blog slugs** in
`sitemap.xml`. Full list in `content/keywords/site-inventory.csv`.

## The finding that shapes this whole run

| Slice | Count |
|---|---|
| Live blog slugs | 975 |
| Slugs whose target is **her** (girlfriend / wife / her) | **154** |
| Slugs whose target is **him** (boyfriend / husband / him) | **33** |
| Slugs containing `gift` | 36 |
| Slugs that are **both a gift keyword and aimed at him** | **1** — `online-birthday-gift-for-boyfriend` |

Of the 170 drafted primary keywords, 20 are gift keywords and **exactly one names
a male recipient** (`promotion gift for husband`). The 33 him-slugs that do exist
are almost entirely *messages* — `sorry-message-for-bf`,
`miss-you-paragraph-for-him`, `deep-sorry-message-for-boyfriend`. The site has
taught itself to write apologies to boyfriends and gifts for girlfriends.

That asymmetry shows up in the harvest too: of 2,448 open candidates,
**1,195 are aimed at him and 667 at her.** The uncovered demand is the mirror
image of the coverage. This is the single strongest argument for the run.

## Own it already — improve, don't rewrite

**Empty, and that is a gap in this run, not an absence of opportunity.** Without
a Search Console export there is no position data, and no `site:` pass was run
for the 40 candidates. With 975 live articles, some of these keywords are
certainly being served by an existing page already. `own_position` is `none` on
every row in `keyword-inventory.csv` because it was never measured — not because
it was measured and found empty. **This is the largest single inaccuracy in the
run**, exactly as it was in the three waves before it.

## Shortlisted in a past run, never written

`keywords:inventory` reports 13 keywords shortlisted and never drafted, none of
them in the gift-for-him space. None carried forward — they belong to the rakhi
and birthday clusters and have their own runs.

## Own-site collisions — the site competing with itself

41 pairs at overlap ≥ 0.6, all pre-existing and all inside the rakhi and
birthday clusters (e.g. `raksha bandhan 2027 wishes` ↕ `raksha bandhan online
wishes`, 0.60; `personalised raksha bandhan card with name` ↕ `… with name and
photo`, 0.83). **Decision: out of scope for this run and left standing.** They
are a real problem — Google picks one of each pair and buries the other — but
they are a consolidation job on published rakhi pages, not something a new gift
cluster can fix. Flagged so it is a decision and not an oversight.

Zero collisions involve any candidate in this run: all 40 scored Jaccard < 0.6
against every drafted keyword and every live slug.

## Drafted with no harvest evidence

Reported by the script and unchanged from the last run. These stay the best
striking-distance candidates the moment a Search Console export exists.

## First-party demand (`content/facts.md`, measured 2026-09-03)

Used as a tie-breaker, not a filter:

- `/love-gf` is the **#1 page type — 1,001 created, 29.3% of all 3,417 pages**
- `/bouquet-gf` is **#2 — 801 created, 23.4%**
- `/apology-dashboard` is **#3 — 748 created, 21.9%**
- **99.5% of started pages are actually published and shared (3,399 of 3,417)**

**And the limit on all of it: `facts.md` records no recipient gender.** The
database does not know whether a `/love-gf` page was sent to a girlfriend or a
boyfriend, so there is *no first-party evidence* that boyfriend-directed pages
get created. The bet in this run rests on the coverage gap and the SERP
evidence, not on first-party data. Adding a recipient field to
`scripts/collect-facts.mjs` would settle it and is worth more to the next run
than any keyword below.

# love-gf wave 3 keyword shortlist — 2026-09-02

An extension run, not a fresh harvest. It exists because of a finding that has to
come first.

## The 2026-08-31 shortlist is exhausted

Waves 1 and 2 wrote 20 posts against that run's 30 keywords. Checking each
apparent leftover against every written post's `article.keywords`:

| Leftover keyword | Status |
|---|---|
| surprise for girlfriend online | secondary on `how-can-i-surprise-my-girlfriend-online` |
| best digital gift for girlfriend | secondary on `digital-gift-ideas-for-girlfriend` |
| digital gift for girlfriend free | secondary on `digital-gift-ideas-for-girlfriend` |
| love website for girlfriend free | secondary on `cute-website-for-gf` |
| love website for girlfriend template | secondary on `cute-website-for-gf` |
| i love you website for girlfriend free | secondary on `cute-website-for-gf` |
| i love you message for her to make her cry | secondary on `how-much-i-love-you-messages-for-girlfriend` |
| love song dedicated to gf hindi | secondary on `love-song-dedication-for-her` |
| what is a good song to dedicate to your girlfriend | secondary on `love-song-dedication-for-her` |
| long distance relationship surprise website | secondary on `long-distance-relationship-surprise-ideas-on-a-phone` |
| long distance relationship surprise gifts | secondary on `long-distance-relationship-surprise-ideas-on-a-phone` |
| truth or dare questions for couples over the phone | secondary on `truth-or-dare-questions-for-couples-long-distance` |
| love quiz game for girlfriend | not a blog SERP — `expected_clicks = 0` by construction |

**12 of 13 are already targeted.** The 13th has a top 10 made entirely of product
tools with zero editorial results, which is why the original run reclassified it
as a template-metadata target rather than a post.

Writing ten more posts against that list would have meant ten pages competing
with pages published two days earlier. That is the self-cannibalisation the
clustering step exists to prevent, so wave 3 runs on new keywords instead.

## Method

Three India-geo autocomplete harvests (`--geo in --hl en`), 18 seeds, 288 unique
suggestions, in `autocomplete.csv`, `mech/autocomplete.csv` and
`round3/autocomplete.csv`.

Deduped against **both** corpora, which the earlier run could not do:

- **935 live Strapi articles** (`strapi-live.json`, fetched 2026-09-02) — slug +
  title tokens, Jaccard.
- **All 20 posts from waves 1 and 2**, including every secondary keyword named in
  their `article.keywords`.

Threshold: a candidate is OPEN below Jaccard 0.45, 4–9 words, `prefix_hits ≥ 4`.
Developer intent, wrong-recipient, adult and off-product phrasings dropped.

`prefix_hits` is **ordinal demand** — the number of distinct prefixes that
surfaced the phrase. It is not a monthly search volume and must never be printed
as one. No Ahrefs, Semrush or Search Console data was available for this run, so
there are no volume bands here at all; the honest quantity is the hit count.

## What the live blog already owns — measured, not assumed

Across 298 love-adjacent live articles:

| Axis | Live pages | Read |
|---|---|---|
| Love letters | 48 | saturated, but **mechanic-led** — editors, typing effects, makers |
| Anniversary | 38 | saturated — timelines, countdowns, clocks |
| Password / private link | 29 | saturated |
| Timeline / our-story | 21 | saturated |
| Website builders | 16 | saturated |
| Gifts | 14 | crowded |
| Long distance | 14 | crowded |
| Valentine's | 18 | crowded |
| Voice / audio | 8 | covered |
| **Language love letters** | **0** | **empty** |
| **Couple games** | **0** | **empty** |
| Quiz | 3 | thin |
| Virtual date | 1 | one mechanic page only |

The two zeroes are the whole opportunity. Note what the language row means
precisely: 8 language pages are live and every one of them is *sorry* or
*miss you* or a festival — `sorry-message-in-punjabi`,
`miss-you-quotes-in-malayalam`, `raksha-bandhan-wishes-in-punjabi`. Nothing in
Odia, Nepali or Assamese exists on the site in any category at all.

## The ten

| # | Keyword | prefix_hits | Slug | Category |
|---|---|---|---|---|
| 1 | love letter for girlfriend in malayalam | 25x | `love-letter-for-girlfriend-in-malayalam` | modern-romance |
| 2 | love letter for girlfriend in assamese | 21x | `love-letter-for-girlfriend-in-assamese` | modern-romance |
| 3 | love letter for girlfriend in punjabi | 20x | `love-letter-for-girlfriend-in-punjabi` | modern-romance |
| 4 | love letter for girlfriend in nepali | 15x | `love-letter-for-girlfriend-in-nepali` | modern-romance |
| 5 | never have i ever questions for couples | 23x | `never-have-i-ever-questions-for-couples` | modern-romance |
| 6 | 20 questions game for couples | 23x | `20-questions-game-for-couples` | modern-romance |
| 7 | would you rather questions for couples | 13x | `would-you-rather-questions-for-couples` | modern-romance |
| 8 | how to make your girlfriend feel special online | 24x | `how-to-make-your-girlfriend-feel-special-online` | modern-romance |
| 9 | virtual date night ideas for couples | 19x | `virtual-date-night-ideas-for-couples` | digital-gifts-romance |
| 10 | anniversary surprise for girlfriend online | 8x | `anniversary-surprise-for-girlfriend-online` | digital-gifts-romance |

All ten slugs were checked against the 935 live articles and are free.

**Why the games cluster is three posts and not one.** Never-Have-I-Ever is a
disclosure game, 20 Questions is a guessing game with a fixed turn budget, and
Would You Rather is a forced-choice game. They are different mechanics with
separate SERPs and separate variant sets, which is the same reason the language
family is one post per language rather than one omnibus. Each was briefed to own
its mechanic and to stay off wave 2's truth-or-dare ground.

**Row 10 is the weakest in the run and was accepted knowing that.** 8x is the
lowest demand here, and the anniversary axis already holds 38 live pages. It is
in because the occasion is distinct and the slug is free, not because the
evidence is strong. If its post cannot find an honest angle, that is the expected
outcome and the audit should say so plainly rather than manufacture one.

## Queued for wave 4

`love letter for girlfriend in odia` (13x — nothing in Odia live) and the
long-tail modifiers the harvest surfaced across the language set:
`…copy and paste` (13x odia), `…text` (10–19x punjabi/odia), `short love letter…`
(8–12x across four languages), `heart touching…` (10x nepali),
`nepali love words for girlfriend` (15x), `love quotes in nepali for girlfriend`
(8x). Also `what can couples do for date night` (12x) and
`never have i ever questions for married couples` (10x), which point at a
married-couple audience segment this cluster has not addressed.

## Honest limits

- **No tool-verified volume anywhere in this run.** Ordinal demand only.
- **No SERP teardown was run for these ten.** The weak-result counts quoted in
  the batch brief for the language family are carried over from the 2026-08-31
  run's verified SERPs on hindi-in-english, marathi and telugu — a strong
  pattern across a family, but an inference, not a measurement, for Malayalam,
  Punjabi, Assamese and Nepali. The games and virtual-date rows have **no** SERP
  evidence at all; their case rests on demand plus the zero on-site coverage,
  and each post's Phase 1 has to establish the rest.
- **The dedupe is title-level.** Jaccard on slug and title tokens against 935
  articles and 20 drafts. It is not a live-rank check, and `own_position` was not
  established for any row.
- **Still no Search Console export.** It remains the single largest quality gap
  in this cluster and it takes two minutes to produce.
- **Four more language posts means four more unreviewed languages.** Waves 1–2
  already left eight (Hindi, Urdu, Telugu, Marathi, Tamil, Bengali, Gujarati,
  Kannada) waiting on native review. This run takes that to twelve. Each post
  flags its own uncertain lines by line, but no amount of flagging substitutes
  for a speaker reading it.

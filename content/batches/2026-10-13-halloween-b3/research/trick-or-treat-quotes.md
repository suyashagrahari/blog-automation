# Research brief — trick or treat quotes (row 138)

- Slug: `trick-or-treat-quotes` · absorbs "halloween quotes trick or treat" · theme: quotes · plan weak 3/10
- Checked 2026-10-13. Slug free in Strapi (0 results). Category `festive-beats`.

## Phase 0 — first-party data

No Halloween data in facts.md (BRIEF §3). Used three platform-wide lines, labelled in the body as not Halloween data:

- Average views per created page: 11.1 — measured 2026-09-24
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24

The phone-open rate is used to argue for short lines; nothing is claimed about Halloween pages.

## Phase 1 — SERP (2 searches, budget 2)

**Search 1: WebSearch (US index), "trick or treat quotes".** 9 results, all weak:
- goodreads.com/work/quotes/... ×6: quote pages for novels titled *Trick or Treat* (wrong intent, mostly empty)
- shop.monacor.de ×2, istock.hardhattraining.com ×1: hijacked-subdomain spam, not analysed

**Search 2: DuckDuckGo html (lower confidence).** Top 9:

| # | URL | Status | Words / date | Structure | Direct answer | Data / sources | Notes |
|---|---|---|---|---|---|---|---|
| 1 | lastingquotes.com/quote-collections/trick-or-treat-quotes/ | 200 | ~2,550 incl. nav; modified 2024-07-27 | One H1, flat list of 108 user-style quotes, sidebar of unrelated topics | List starts immediately | None | Thin aggregator, so **weak**. Off-topic lines ("Halloween party without a tree") |
| 2 | lovetoknow.com/quotes-quips/holiday/trick-treat-sayings | 200 | ~1,465; 2023-09-28 | H2s: short alternatives, cute/funny, rhyming, "Fast Fact", candy sayings, famous quotes | List after a short intro | One "fast fact" mentioning 1927; famous film quotes | Strongest real competitor; mood-sorted |
| 3 | southernliving.com/.../halloween-quotes | 402 | snippet only | "60 Halloween Quotes" | — | — | General Halloween quotes, not trick-or-treat specific |
| 4 | embroly.com/blogs/news/halloween-quotes-for-kids-trick-or-treat-rhymes | 200 | ~3,840 | H2 funny / trick-or-treat sayings / pumpkin / movie quotes; FAQ | After intro | Movie lines (Harry Potter etc.) | Shopify store blog, so **weak**; kids-only |
| 5 | parade.com/1079504/.../halloween-quotes/ | 403 | snippet only | "115 Best Halloween Quotes (2026)" | — | — | General, year-stamped |
| 6 | lastingquotes.com/.../funny-trick-or-treat-quotes/ | — | snippet | Aggregator | — | — | Weak |
| 7 | blissquote.com/2019/10/halloween-quotes.html | — | snippet, 2019 | — | — | — | Weak |
| 8 | serendipity-adventures.com/halloween-quotes-and-sayings/ | — | snippet | 130 quotes | — | — | Weak |
| 9 | positivityblog.com/happy-halloween-quotes/ | — | snippet | 101 quotes | — | — | Moderate |

Weak count: **9/9 in WebSearch, about 5/9 in DuckDuckGo.** The plan's 3/10 understates it. Gate 4 passes.

Keyword-term counts on the fetched pages: porch 0–1, teal 0, blue bucket 0, age limit/curfew 0, candy tax 0, any study 0.

## Phase 2 — gap

- **Table stakes:** funny, cute and rhyming trick-or-treat sayings; short caption-length lines.
- **The gap:** no page sorts lines by the *moment of the walk* (doorbell, haul and trading, candy tax, full-size-bar house, porch light, last house, grown-ups, the people at the door, nostalgia, bucket signs). None explains the porch-light rule, age caps and curfews, the teal pumpkin or the blue bucket, and none cites anything dated.
- **Stale data:** lovetoknow's 1927 fact is history covered by b2 `history-of-halloween`, so it is not repeated here.
- **Fan-out sub-queries:** what to write on a trick-or-treat bucket; what a porch light means; is there an age limit for trick-or-treating; what a blue bucket means; what a teal pumpkin means; what the candy tax is; what to say to people handing out candy.
- **Angle:** wins by being the only post that sorts trick-or-treat quotes by moment of the walk and pairs them with sourced, dated customs (Bathurst age cap, teal pumpkin, the debated blue bucket), using the 48.3% phone-open rate to justify short lines.

## Phase 3 — sources (all fetched and read)

| Source | What it supports | Date | Read |
|---|---|---|---|
| Echelbarger, Good & Shaw, *Judgment and Decision Making* 15(6):959–971 (Cambridge Core, CC BY 3.0) | 3 studies, N = 314 children aged 5–10, predict a third party accepts a 2-for-1 trade only when he prefers the single item | Nov 2020 | Full PDF (journal.sjdm.org → jbaron.org); found via The Conversation research brief (Echelbarger, 26 Oct 2020, not cited) |
| Li, Zhu, Li & Cui, *Journal of Happiness Studies* (Springer), Europe PMC PMC9826762 | Exp 2 N = 102: 5-minute childhood snacks/toys video raised positive affect and lowered negative affect, partly via gratitude; no change in life satisfaction. Exp 1 N = 196 | 2023-01-09 | Full text via Europe PMC XML |
| CBC News / Canadian Press, Bathurst bylaw | 2005 bylaw: over-14 ban + 7 pm curfew; amendments to over-16 + 8 pm, fines up to $200, third reading expected early October | 2017-09-20 | Full article. A second CBC piece (2017-10-17) confirms the vote was pending; passage not verified |
| National Autism Association, "Trick or Treat! Blue Buckets for Halloween" | 2018 Alicia Plumer post, son BJ (21) autistic; some families disagree (sets kids apart, could make them a target); a personal choice; greet the child or compliment the costume | 2020-09-23 | Full page |
| FARE, Teal Pumpkin Project | Non-food trinkets in a separate bowl; teal pumpkin or printable sign; participation map | undated | Full page. 2nd b3 use, so the URL is now full |

Not used:
- PLOS ONE 2018 trick-or-treater RCT (PMC5749710): PLOS ONE is already in many b3 posts.
- "Trick, Treat, or Toy" 2003: JNEB is Elsevier, which is banned.
- The Conversation 2016 "most candy": an op-ed experiment, not peer-reviewed.
- Chesapeake, VA age law: wavy.com returned a bot wall (403, not worked around) and municode is JS-only, so the claim is not stated.
- Not reused from b1/b2: Diener 1976, Johnson & Downing, Hsu 2021, PMC6583441, CDC 1997 MMWR, Joel Best, the 1927 citation, LOC Winick.

findpapers queries: "trick-or-treating children Halloween candy", "Halloween candy consumption children", "nostalgia childhood memories wellbeing", "nostalgia social connectedness", "Halloween children physical activity steps", "Halloween trick-or-treat neighbourhood". Europe PMC direct: TITLE:nostalgia AND (childhood OR autobiographical OR holiday) AND OPEN_ACCESS:y; Sedikides/Wildschut OA list.

Wikipedia: 0 body links. Entities were verified for schema only (Trick-or-treating Q47195, Halloween Q251868, FARE Q5465287, Bathurst Q810807, Nostalgia Q12151852).

## Originality check

A 5-gram overlap script ran against every b1/b2/b3 blog (contentMarkdown + FAQs), including halloween-quotes, history-of-halloween, things-to-do-on-halloween-night, halloween-quotes-for-kids, halloween-sweet-messages and halloween-quotes-for-cards.
- **Copyable lines:** 0 overlaps.
- **Remaining prose overlaps:** only stock template-feature phrases and the platform-facts sentence.

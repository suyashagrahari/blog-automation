# Research brief — `miss you quotes for friends`

Batch `2026-09-25-miss-you-30`, wave 2, row 4. Written 2026-09-25.
Primary keyword: **miss you quotes for friends**. Slug: `miss-you-quotes-for-friends`
(checked against Strapi 2026-09-25 — `filters[slug][$eq]=miss-you-quotes-for-friends`
returns `total: 0`, so the slug is free).

---

## Phase 1 — SERP, measured rather than inherited

`SERPS-WAVE2.md` records **eight** organic results for this query (DuckDuckGo
`kl=in-en`, 2026-09-25), not ten. I re-ran `scripts/serp-ddg.mjs "miss you quotes for
friends" --region in-en` on 2026-09-25 and got **nine**; happilylover dropped out and
`uncommonquotes.com/best-friend-miss-quotes/` (position 3 on the *best friend* SERP)
and `blessmsg.com/i-miss-you-friend/` appeared. **I measured against the recorded
eight**, so every number below refers to the same result set the plan gate was read on.

I fetched the live `<title>` of all eight. Two 403'd a scripted UA on the first pass
(both WishesMsg pages) and returned 200 on a second pass with a desktop Windows UA.

| # | Result | Live `<title>` (fetched 2026-09-25) | "quotes" | "messages" | count-led | subject |
|---|---|---|---|---|---|---|
| 1 | wishesmsg.com/miss-you-messages-for-friends/ | 90+ Miss You Quotes and Messages for Friends | ✓ | ✓ | 90+ | friends |
| 2 | uncommonquotes.com/miss-you-friend-quotes-and-sayings/ | 300 Miss You Friend Quotes and Sayings Full of Emotion | ✓ | — | 300 | one friend |
| 3 | wishes.com.in/miss-you-quotes-and-messages-for-friends/ | 100+ Miss You Quotes and Messages for Friends | ✓ | ✓ | 100+ | friends |
| 4 | wishesmsg.com/miss-you-messages-quotes/ | 100+ Miss You Messages for Everyone in Your Life | — | ✓ | 100+ | **everyone** |
| 5 | countryliving.com/…/missing-you-quotes/ | 144 Best "I Miss You" Quotes for That Special Someone | ✓ | — | 144 | **romantic** |
| 6 | womansday.com/…/miss-you-quotes/ | 130 Best "I Miss You" Quotes for Him, Her, Family, and Friends | ✓ | — | 130 | **multi-recipient** |
| 7 | shinereads.com/miss-you-quotes/ | 140+ "I Miss You" Quotes for Love, Family, Friends & Long-Distance Relationships | ✓ | — | 140+ | **multi-recipient** |
| 8 | happilylover.com/missing-you-my-friend-quotes-messages/ | 110 Miss You Messages for Friends & Missing Quotes | ✓ | ✓ | 110 | friends |

**The numbers to report:**

- **"quotes" in the title: 7 of 8.** "messages" in the title: 4 of 8.
- **Merge both words in one title: 3 of 8** (#1, #3, #8). So on this SERP the format
  split is real but partial — between the `for her` row's 8/10-quotes-0-merge and the
  `for sister` row's 4/8 merge. Each row's answer really is its own.
- **Count-led: 8 of 8.** Every single result opens on a raw number (90+, 300, 100+,
  100+, 144, 130, 140+, 110). Same finding as the anchor row. The claimed lines on
  page one total **1,114**. Competing on volume is not available.
- **subhsandesh.in: 0 of 8**, and 0 of 9 on the live re-run. This row does **not**
  carry `weAlreadyRank`, and the measurement agrees.
- **Title/slug disagreement: 2 of 8.** #1 is served from `/miss-you-messages-for-friends/`
  under a "Quotes and Messages" title; #4 from `/miss-you-messages-quotes/` under a
  "Messages for Everyone" title. Reading slugs would have got both wrong.

**The measurement that actually matters here — group vs singular:**

- **4 of 8 are not about friends at all.** #4 is "everyone in your life"; #5 is
  "that special someone"; #6 and #7 are omnibus pages where Friends is one H2 among
  four and fourteen respectively. Same slippage rate the `for her` row found (4 of 10).
- **0 of 8 addresses a group.** Of the four pages genuinely about friends, every
  heading is singular: "Miss You Messages for Friend", "Miss You Messages For Best
  Friend", "Miss You Messages for A Friend In Long Distance", "Miss You Messages for
  Your Best Friend", "Missing Your Friend Quotes for Distance Friendships". I scraped
  the body text of all eight and searched for group markers (`group chat`, `friend
  group`, `all of you`, `you all`, `squad`, `gang`, `group of friends`): **9 hits
  across roughly 25,000 words**, all of them `you all` / `all of you` *inside a
  borrowed line*, never as a section, a heading or a piece of advice.

So the plural in this keyword is a plural of the search term, not of the recipient.
Every page answers it as "one friend", repeated. **That is the gap, and it is
measured, not asserted.**

## Phase 2 — gap, and how this row differs from its siblings

**Table stakes** (all eight): a large bank of short borrowed lines; mood or tone
buckets (emotional / funny / short / deep); a long-distance section; a
social-media-caption section.

**The gap:** nobody writes for a plural recipient. Two consequences neither SERP
touches — (a) the same borrowed sentence sent privately to five people is a template
the moment two of them compare notes, and (b) posting it once publicly is a different
act from sending it, with a different failure mode.

**Sibling separation, checked against `blogs/` on 2026-09-25 before finalising H2s:**

- `miss-you-quotes-for-best-friend.json` exists and shares 2 URLs with my SERP
  (wishesmsg `/miss-you-messages-for-friends/`, wishes.com.in) and 3 domains. Its axis
  is **the structural reason one person is not here**, and it carries an explicit
  `## One person, not a group` section handing the plural case away. Mine is the
  shape of the *group*. No collision; I do not target its primary as a secondary.
- The anchor `for him` sorts by **why he is not here**; `for her` sorts by **how you
  hand the line over**; `for sister` by **why she is away**. Mine sorts by **what
  shape the group is in**, which none of them can use.
- Wave-1 `blogs/miss-you-quotes.json` owns verified literary provenance (Shakespeare,
  Tennyson, Tagore, Kalidasa, with book and year). I read it. **This post prints no
  attributed literary lines** and does not compete there.

**Live-site cannibalisation.** Fetched and read both:

- `/blog/miss-you-message-for-friend` — 120 lines, bucketed by tone (Short & Sweet,
  Funny & Playful, Nostalgic & Warm, Gentle & Supportive, Apology + Miss You, Long
  Distance & Travel) plus a "Thoughtful & Personal Prompts (use to build your own)"
  section and a step-by-step page-building walkthrough. **Singular friend throughout.**
  This is the closer page and the one I cross-link.
- `/blog/miss-you-message-for-family` — same shape for parents/siblings/grandparents,
  with a "how to write the message — simple formula" block. Different recipient class;
  further away; not cross-linked.

Both confirm the wave-2 bans independently: mood/tone buckets and a "write your own"
workflow are already the live site's job on this exact recipient. This post does
neither.

**Fan-out sub-queries → H2 map.** The smaller questions an answer engine decomposes
"miss you quotes for friends" into, and where each one is answered:

| Sub-query | Answered by |
|---|---|
| Are these quotes or messages, and what is ranking? | `## What this search actually returns, counted` |
| Can I send the same line to several friends? | `## Why a borrowed line breaks faster at scale` |
| What do I write to a friend group that split up? | `## Four shapes a scattered group takes` (H3 1) |
| What do I send when only one of us moved? | H3 2 |
| What do I say if I am the one who left? | H3 3 |
| What if nobody moved and we just stopped? | H3 4 |
| Should I post it or send it? | `## Post it, send it once, or send it separately` |
| When should I not use a quote at all? | `## When a borrowed line is the wrong move` |
| Can I use a couples template for friends? | `## Where our own templates do not fit a group` |
| How reliable is any of this? | `## What these numbers cannot tell you` |

The remaining fan-out questions — how long a message should be, whether to credit the
author, whether it is odd with no occasion, whether a voice note is better — are
answered in `article.faqs`, not in the body, so no FAQ restates an H2.

**Angle:** *Wins by being the only page on this SERP written for a plural recipient —
measured: 4 of the 8 results are not about friends at all and 0 of 8 addresses a group
— sorting lines by the shape the scattered group is in and naming the two failure
modes of a borrowed line at scale, against 214 measured miss-you pages.*

## Phase 3 — sources

Searched the phenomenon, not the keyword. Route: Crossref → Unpaywall → Europe PMC
REST. Zero WebSearch calls spent. Terms tried: `friendship network dispersal after
graduation geographic mobility`, `context collapse imagined audience social network
site`, `broadcast versus dyadic directed communication`, `group chat multiparty
messaging relationship maintenance`, `residential mobility personal network turnover`,
`perceived effort message sincerity`.

Rejected for access: Marwick & boyd 2011 (*New Media & Society*, not OA); Roberts &
Dunbar 2011 *Evolution and Human Behavior* (not OA); Vitak 2012 (not OA); Bryant &
Marmo 2012 (not OA); Burke & Kraut 2016 *JCMC* — genuinely OA but the only location
Unpaywall names is the publisher, and both `onlinelibrary.wiley.com` and
`academic.oup.com` return a 403 bot challenge here, so it could not be read and is not
cited.

| Source | Journal (named for the cap) | What it supports | How it was read |
|---|---|---|---|
| Roberts & Dunbar 2015, PMC4626528 | *Human Nature* 26(4) | Whole personal networks over 18 months across a major life transition: friendship quality declined unless effort was invested; family ties held without it; the effective effort differed by gender (contact frequency for women, shared activity for men) | Europe PMC **REST** `resultType=core` abstract. Landing page 403s a scripted UA. Abstract only. |
| Litt & Hargittai 2016, DOAJ record | *Social Media + Society* 2(1) | 2-month diary of 119 US adults and 1,200 posts plus 30 interviews: people picture narrow, specific imagined audiences that fluctuate post to post while the actual privacy setting does not change | Crossref abstract + DOAJ API record. DOAJ landing page and the ZORA copy both bot-challenge a scripted UA. Abstract only. |
| Deters & Mehl 2013, PMC3820167 | *Social Psychological and Personality Science* 4(5) | Experiment: instructed increase in status-update posting **reduced the poster's loneliness**, mediated by feeling more connected, and **independently of whether friends responded** | Europe PMC REST abstract. Abstract only. |
| Kelly, Gooch & Watts 2018, Bath research portal | *Proceedings of the ACM on HCI* 2(CSCW), article 87 | Lightweight, easy-to-send communication trades away effortful messages "constructed with thought, time and care"; field trial with 14 **dyads** | Full abstract read on `researchportal.bath.ac.uk` (HTTP 200). ACM DL and the OU repository 403. Abstract only. |

**Cap position at time of writing** (`capcheck.mjs`, re-run immediately before saving):
`doi.org` and `journals.plos.org` at 3 — not used. `frontiersin.org` at 2 — not used.
`europepmc.org` is cap-exempt as a repository; the journals named above (*Human
Nature*, *Social Psychological and Personality Science*) appear in no other post in
this batch. `doaj.org` moves from 1 post to 2. `researchportal.bath.ac.uk` is new.
None of the spent PMC IDs listed in the task prompt is reused.

**Every source is an abstract-and-metadata read. No full text was parsed** — PDFs do
not parse in this environment, and that is recorded in the audit.

## Phase 0 — first-party facts

From `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (identical to the
current `content/facts.md` miss-you block; the 2026-09-15 archive is not cited).
Opening pair chosen to be load-bearing for *this* row rather than the batch default:
the 2,417 views line, because "page views, not unique visitors" is not a footnote here
— it is the exact reason we cannot tell a group of six from one person reopening a
page, which is the post's whole subject.

Three mandatory caveats carried in body prose: picker-with-default fields are not
sender choices; `viewCount` is page views not unique visitors; n = 214 over two months
from 2026-07-28, so no seasonal claim. Plus the batch-mandatory disclosure that the
database records **which template was opened, never who received it** — non-optional
in a post about friends.

## Structural limitations

1. **The brief's framing held.** The group angle survived the SERP: 0 of 8 results
   address a group, which is stronger than the prompt's "nobody on either SERP
   addresses it" claim rather than weaker. No correction needed to the framing.
2. **`SERPS-WAVE2.md` records 8 results; a live re-run returns 9.** The SERP moved
   within the day. All measurements above are against the recorded 8.
3. **`/missyou-gf`'s furniture is wrong for a group** — it is described in
   `app/lib/prompt.ts` as an "'I miss you' page for a girlfriend/partner", and its
   reunion countdown and "together since" field are couple furniture. Said in the body,
   as two sibling rows have already done.
4. **`/streak` is two-person by design** — "two people, one tap a day". It cannot hold
   a group of six. Said in the body rather than oversold.
5. **No group-level first-party data exists.** Every SubhSandesh figure is per page,
   and a page has one link. Nothing in the database distinguishes a page opened by six
   people from a page opened six times. That limit is stated in the post.
6. **Abstract-only sourcing** across all four research citations.
7. **No lines are attributed to an author.** Attributions on quote lists are rarely
   verifiable; wave-1 `miss-you-quotes.json` owns the verified-provenance lane.

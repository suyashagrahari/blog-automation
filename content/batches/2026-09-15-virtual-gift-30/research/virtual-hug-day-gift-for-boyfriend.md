# Research brief — `virtual-hug-day-gift-for-boyfriend`

- **Batch:** `2026-09-15-virtual-gift-30`
- **Primary keyword:** `virtual hug day gift for boyfriend`
- **Secondary keywords:** none (cluster primary only)
- **Category:** `modern-romance` (BRIEF §5: Valentine's-week posts go here, never `indian-festivals`)
- **Templates:** `/hold-my-hand`, `/streak`, `/dedication`
- **Date anchor:** Hug Day is **12 February**, the sixth day of Valentine's week
  in India (7 Feb rose → 14 Feb Valentine's Day). Siblings own rose day, propose
  day, teddy day and Valentine's Day; this post stays on 12 February only.

---

## Phase 1 — SERP analysis

**Disclosed limitation.** The session's `WebSearch` budget (200 calls) was
exhausted before this post's turn, and `WebFetch` is blocked by the environment.
No live SERP was pulled for this keyword on 2026-09-15. Everything below is the
batch's own measured competitive set (BRIEF §1, measured on live India SERPs
2026-09-15) plus the 19 sibling posts already written in this batch, which are
the closest available proxy for what the category looks like.

This is recorded as a failed checklist item rather than presented as analysis I
did not do.

| What the batch measured | Detail |
|---|---|
| Who ranks | `gifft.me`, `qlovy.com`, `surprises.gift`, `ourgiftverse.com`, `digiflower.net`, `giftsqr.com`, `blog.messagear.com` — all competitors, none citable |
| UGC share | Reddit (r/LongDistance, r/Gifts), Quora, Pinterest, Instagram hold 4–6 of every 10 results |
| Authority gap | No authoritative page exists in this category; Reddit ranks #1 for `digital gift for girlfriend` |
| Intent split (BRIEF §2) | Our searcher wants a shareable personalised page, not a physical object delivered |

**What the competitive set predictably does with Hug Day:** treat "virtual hug"
as a cute product name, list e-cards and GIFs, never mention that Hug Day is
about physical touch specifically, and never concede that a link cannot supply
it. That omission is the entire opening.

## Phase 2 — Gap analysis

**Table stakes** (must be present or the post reads incomplete):

- What a virtual Hug Day gift is, plainly.
- The date: 12 February, sixth day of Valentine's week.
- A concrete list of things to send.
- Practical mechanics: does he need an app, what does it cost in effort.

**The gap.** Hug Day is the one day in Valentine's week whose subject is a
physical act. Every competing page either ignores that or papers over it with
"virtual hugs are just as special!" Nobody writes the honest version: *touch is
measurable, the measurements are good, a web page does not produce it, and here
is what a web page does produce instead.* There is a real literature here and
none of it is being used.

**Stale data.** Not applicable — competitors cite no data at all.

**Unanswered questions the category raises and drops:**

- Do the wearable "hug" devices actually work? (Answer: partly, and the honest
  result is more interesting than the marketing.)
- Does seeing touch on a screen do anything? (Answer: yes, measurably — and one
  version of it backfires.)
- If I can't touch him, what actually helps?

**Fan-out sub-queries → became H2s:**

1. What is a virtual Hug Day gift / when is Hug Day → H2 1
2. Does a virtual hug replace a real one → H2 2
3. Can watching or seeing touch help → H2 3
4. Do long-distance touch gadgets work → H2 4
5. What should I actually send him → H2 5 (four H3s)
6. Which option is best / comparison → H2 6
7. When is this a bad idea → H2 7

**Angle (recorded as `batchMeta.angle`):**

> Wins by being the only Hug Day post that states plainly that a link cannot
> deliver touch and then cites the touch research that measures the gap — 7,880
> people in 37 countries, 1,746 deprived, 1,490 watching, 17 couples wearing
> squeeze bracelets, one null result on a squeeze device — against SubhSandesh's
> own finding that 49.2% of 49,968 page views land on a touch device and the
> average page is reopened 11.5 times.

## Phase 3 — Sources

Search terms used: `affectionate touch relationship satisfaction`,
`touch deprivation wellbeing study`, `haptic mediated social touch`,
`hug cortisol stress buffering`, `longing for touch`, `self-soothing touch cortisol`,
`social touch video intimacy`. Searched via the Europe PMC REST API and OpenAlex
(WebSearch unavailable). `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`, `arxiv.org`,
`pewresearch.org` and `gsb.stanford.edu` were all at the 3-post domain cap and
were avoided. `journals.plos.org` and `en.wikipedia.org` were drafted in and then
removed when concurrent siblings pushed both to 4 posts (see the swap note below).

Blocked while sourcing, so routed to a repository instead: `nature.com`,
`royalsocietypublishing.org`, `onlinelibrary.wiley.com`, `sciencedirect.com`,
`doaj.org` (403), `europepmc.org` article pages (403 this run, unlike earlier
agents), `core.ac.uk` (403), `publikationen.ub.uni-frankfurt.de` (bot challenge).

| # | Source | Domain use before this post | Subject test | Swap test | Peer-reviewed |
|---|---|---|---|---|---|
| 1 | van Hattum et al., *Connected Through Mediated Social Touch*, Front. Psychol., 2022-02-17 — via University of Twente research portal | 0 posts | Pass — geographically separated romantic couples and mediated touch | Fails to swap: no other post in the batch is about touch | Yes |
| 2 | Sorokowska et al., *Love and affectionate touch toward romantic partners all over the world*, Sci. Rep., 2023-04-04 — via IRIS UniCatt | 0 posts | Pass — affectionate touch in romantic partnerships | Fails to swap | Yes |
| 3 | von Mohr, Kirsch & Fotopoulou, *Social touch deprivation during COVID-19*, R. Soc. Open Sci., 2021-09-08 — via HAL | 0 posts | Pass — intimate touch deprivation | Fails to swap | Yes |
| 4 | Kirsch, von Mohr, Koukoutsakis & Fotopoulou, *Vicarious Touch*, Eur. J. Soc. Psychol., 2025-09-07 — via HAL | 0 posts (same domain as #3, one post) | Pass — seen touch as a substitute for touch | Fails to swap | Yes |
| 5 | Erk, Toet & van Erp, *Effects of mediated social touch on affective experiences and trust*, PeerJ, 2015-10-06 — via University of Twente research portal | 0 posts (same domain as #1, one post) | Pass — a handheld mediated-touch device, tested | Fails to swap | Yes |

Zero generic context statistics (no PIB, TRAI, Census or MEA figure appears) and
zero Wikipedia body links. Five peer-reviewed open-access sources, all fetched
and read on the landing pages listed. #3 and #4 were read as **abstracts only** —
the HAL landing pages carry the full abstract but not the typeset text — and
every claim from them is confined to what the abstract states, disclosed in the
body and in the audit.

**Two sources were swapped out mid-draft because siblings finished first and took
the last slot.** `journals.plos.org` (Murphy, Janicki-Deverts & Cohen 2018, the
canonical 404-adult hug study — genuinely the best-matched paper in the batch)
went to 4 posts once `online-teddy-day-gift-for-girlfriend` landed, and
`en.wikipedia.org` went to 4 posts once `online-propose-day-gift-for-girlfriend`
landed. Sources #2 and #5 replaced them. The cap was honoured over the better
citation, which is the correct trade at 30 posts but worth recording.

### Verified claims, one per source

1. **Twente / Frontiers 2022** — 17 couples, 2 weeks, internet-connected haptic
   bracelets exchanging squeeze-like signals. Result: connectedness rose;
   longing for touch **did not change**. Participant phrase in the title:
   "better than a like on Facebook".
2. **Sci. Rep. 2023 (IRIS UniCatt)** — two studies, 7,880 participants, the first
   a cross-cultural survey across 37 countries. Love was significantly and
   positively associated with affectionate touch behaviours (stroking, hugging,
   kissing), and the result replicated with controls added.
3. **R. Soc. Open Sci. 2021 (HAL)** — 1,746 survey participants. Intimate touch
   deprivation associated with higher anxiety and greater loneliness; intimate
   touch was the most craved type, increasingly so the longer distancing ran.
   Craving was moderated by attachment style.
4. **EJSP 2025 (HAL)** — 1,490 participants watched video clips of prosocial
   touch. Human–pet touch reduced self-reported stress most, human–human next,
   and human–robot touch **increased** stress.
5. **PeerJ 2015 (Twente)** — a null result. Simulated hand squeezes through a
   handheld two-way device (a Frebble) did not improve recovery from induced
   sadness, the affective quality of the shared experience, or trust, versus a
   button with visual feedback. Participants low on extraversion or low on touch
   receptivity felt more understood by the mediated touch; the reverse held for
   high scorers.

## Phase 4–5 — Facts, structure, links

**First-party facts used** (BRIEF §4 warns against reusing the batch's overused
pair; the opening deliberately leads with the two least-used lines that are also
the two most on-theme):

- 49.2% of views are on a touch device (phone or tablet) — used in only 2 of 19
  siblings, and it is the single most apt fact in `facts.md` for a post about touch
- Average views per created page: 11.5
- 49,968 recorded views of shared pages
- Median gap between first save and last edit: 6.2 hours (n=1,125, /love-gf)
- 40.6% of creators password-protect their page before sharing (1,767 of 4,357)
- Occasion-dated pages are 3.7% of all pages; the platform is 96.3% romantic and
  everyday

**Internal links** (all from `TEMPLATE_LINKS`, all placed after the section that
establishes why the reader would want them): `/hold-my-hand`, `/streak`,
`/dedication`, `/catch`. `/hold-my-hand` was unused by all 19 siblings and its
own config description — hold the screen for 60 seconds without letting go — is
the closest thing on the platform to a hand.

**Pricing:** the `facts.md` Pricing block is empty, so the post states no price
for SubhSandesh or for anyone else. The comparison table's cost column is
expressed in time and hardware, never rupees.

# Research brief — `how to surprise your boyfriend with a romantic night`

- **Slug:** `how-to-surprise-boyfriend-romantic-night`
- **Batch:** `2026-09-15-virtual-gift-30`, wave 4, row 5 of `WAVE4-PLAN.json`
- **Market:** India. Evergreen.
- **Category:** `digital-gifts-romance`
- **Templates:** `/date-invitation` (lead), `/loveflix`, `/vending-machine`, plus `/templates` at the CTA

---

## Phase 1 — SERP analysis

**Source:** `SERPS-WAVE4.md`, collected with `scripts/serp.mjs` (Brave). **Brave accepts no region
parameter, so this SERP is US-served.** It is reliable evidence of *page type* — which is what
Gate 2 needs — and unreliable evidence of Indian ranking order. No extra SERP call was made.

Blog-shaped results: **6 of 10. Zero ecommerce, zero tool pages.** That is the first genuinely
editorial ground on this axis in four waves.

| # | Page | Type | What it is optimising for |
|---|---|---|---|
| 1 | proflowers.com/blog/how-to-surprise-your-boyfriend | Retailer blog | Flower/gift attachment; listicle of gestures, US delivery assumed |
| 2 | wikihow.com/Surprise-Your-Boyfriend | Editorial how-to | Breadth. Step-by-step, illustrated, heavily sectioned, no dates, no data |
| 3 | reddit.com/r/AskReddit — "my boyfriend is filled with sweet ideas/gestures…" | Forum thread | Reciprocity anxiety — "he does more than me" |
| 4 | reddit.com/r/AskMen — "date ideas that men actually enjoy" | Forum thread | The corrective: men saying the grand gesture is not the ask |
| 5 | reddit.com/r/AskReddit — "what can I surprise my boyfriend with" | Forum thread | Object ideas, not evening plans |
| 6 | reddit.com/r/LongDistance — "small random surprises" | Forum thread | Distance case; explicitly not an in-person evening |
| 7 | pinkvilla.com — surprise ideas for boyfriend | Indian lifestyle listicle | Volume listicle; the only India-served page in the ten |
| 8–9 | Two TikTok videos | Video | Reveal moments, not plans |
| 10 | lovepanky.com — ways to surprise your boyfriend | Editorial listicle | Long list of gestures |

**Read in full for structure and gap** (never cited, never linked — several are commercial):
proflowers, wikiHow, pinkvilla, lovepanky, plus the four Reddit threads.

**What every editorial result does:** a numbered list of *things* (breakfast in bed, a scrapbook,
tickets, lingerie, a picnic). Word counts run long, the direct answer is buried under an intro, the
data is absent, and the physical setting is assumed — a flat, a bedroom, a car, a lawn.

**What the Reddit threads do that the listicles do not:** r/AskMen #4 is the whole content gap in
one thread. Men repeatedly say the elaborate production is not what they wanted; the low-friction,
low-performance evening is. None of the listicles absorb that, because a listicle is paid by the item.

## Phase 2 — Gap analysis

**Table stakes** (present in ≥4 of the editorial results, so this post must cover them): pick a
date; decide between a surprise and a "keep the evening free"; food; a location; a small gift or
token; a photo or memory element; a reveal moment.

**The gap — three of them, and all three are the same gap:**

1. **Nobody plans a sequence.** Every incumbent gives a bag of ideas. None says what happens at
   7pm, what happens at 9pm, or what you do when the plan breaks at 8:15. An evening is an ordered
   thing and the listicle format structurally cannot render it.
2. **Every incumbent assumes private space.** "Set up the bedroom", "cook him dinner at home",
   "run a bath". Most unmarried couples in India do not have a flat to themselves, and the largest
   single planning constraint of this keyword is therefore invisible in the entire SERP. Pinkvilla,
   the one India-served result, repeats the US framing.
3. **Nobody separates the invitation from the evening.** The anticipation window is a distinct,
   studied thing with its own payoff, and no result treats it as a designable part of the plan.

**Stale data:** none of the ten cite a study, a statistic or a date at all. There is nothing to
supersede — the whole SERP is assertion.

**Unanswered questions the pages raise and drop:** what if he does not like surprises; what if you
live with family; where do you go after dinner; what do you do the next morning; how much is the
right amount to spend.

**Fan-out sub-queries** → H2s and FAQs: *what counts as a romantic night without a private place* ·
*how to plan a surprise date step by step* · *how far ahead to invite him* · *what goes wrong on a
surprise date* · *is a surprise better than planning it together* · *hotel for unmarried couples in
India* · *what to do the morning after* · *how much to spend*.

**Angle:** wins by being the only post that plans a romantic night as an ordered in-person evening
under the constraint most unmarried Indian couples actually have — no private flat — and, using
SubhSandesh's own 4,357-page dataset, places a digital page at the two ends of the evening (the
invitation and the keepsake) while saying plainly that it is the wrong thing to put in the middle.

**This is the row's whole defence: the lane is an evening, not a gift.**

## Phase 2b — Anti-cannibalisation

`WAVE4-PLAN.json` records `overlapWithWritten: 0`, `mustDifferentiate: false`, `slugCollision: false`.
That is a URL-overlap measure, so `blogs/` was also grepped by subject (`romantic night`, `date
night`, `in person`, `evening`) and **five siblings were read in full** before drafting:

| Sibling | Its lane | Why this post is not it |
|---|---|---|
| `online-surprise-ideas-for-boyfriend` | An online surprise as a *delivery* problem — link previews, lock-screen leaks | It never leaves the phone. This post's evening happens in a room. |
| `online-surprise-for-long-distance-boyfriend` | A surprise you cannot attend | Premised on absence. This post is premised on presence. |
| `how-to-surprise-girlfriend-online` | Five timed steps to send a page to a girlfriend | Different recipient, and the artefact *is* the surprise. |
| `digital-gift-for-boyfriend` | `digital gift` vs RBI-regulated gift card | A product-category disambiguation post. No evening in it. |
| `virtual-gift-for-bf` | "bf" as a register choice; joke formats | A tone argument about an artefact. |
| `long-distance-date-ideas-online` | An online date, planned around no private room and IST offsets | Closest neighbour. It plans a date **through a screen**; this one plans a date **in a room** and uses the screen only at the ends. Cross-linked. |

`how-to-surprise-someone` is in flight in this wave and owns the general case, so this post never
defines "surprise" generically and does not target its primary or secondaries.

**Differentiation sentence:** the batch's 79 posts all answer *which page do I send*; this is the
only one that answers *how do I run the evening*, and it is the only one that says SubhSandesh is
not the whole answer to its own keyword.

**Cross-links:** `/blog/online-surprise-ideas-for-boyfriend` (the phone-only sibling) and
`/blog/long-distance-date-ideas-online` (the same privacy constraint, solved through a screen).

## Phase 3 — Sources

Route used: **Crossref → Unpaywall → open-access landing page**, exactly as `BRIEF-WAVE4.md` §2
prescribes. Search terms actually run: `shared novel activity relationship quality couples`,
`self-expansion couples shared activities`, `anticipation savoring anticipated event positive
affect`, `ritual couple bonding relationship`, `date night marital quality`, `intimacy public space
young unmarried couples India`, `premarital romance dating urban India young people`, `moral
policing public space couples India`, `young couples privacy public parks romance India`,
`courtship space surveillance family India youth`, `couple rituals relationship satisfaction
meaning`, `experiential gifts stronger relationships material gifts`, `effort perceived
thoughtfulness gift giver recipient`.

**Every source below is an abstract-and-metadata read.** PDFs do not parse in this sandbox and no
full text was read for any of the four. Recorded in the audit.

Dead ends worth recording: Aron et al. 2000 (`10.1037/0022-3514.78.2.273`) and Reissman et al. 1993
(`10.1177/026540759301000205`) — the two canonical self-expansion papers — are **not open access**
per Unpaywall, so neither is cited. `Experiential Gifts Foster Stronger Social Relationships Than
Material Gifts` (`10.1093/jcr/ucw067`) is closed. `Online surprise gift-giving services and
well-being` (`10.1108/ejm-09-2024-0781`, EJM 2026) is the single most on-subject paper found in the
whole run and is **closed**. `The Gift of Choice?` (`10.1002/mar.22174`) is flagged OA but resolves
only to Wiley, which 403s here. `censusindia.gov.in` would not resolve from this sandbox, so no
household-space statistic could be verified and none is asserted.

| # | Source | Domain | What it actually supports | Published |
|---|---|---|---|---|
| 1 | Yang & Yoo, *Effects of Dating Rituals on Satisfaction with Couple Relationships between Unmarried Men and Women*, 가족과 문화 / Family and Culture 29(1), 160–192 | `kci.go.kr` | Survey of **300 unmarried men and women in their 20s–30s in Seoul**. Perceived dating ritual resolved into three factors: couple-time/activity-sharing and communication, sexual intimacy, and we-ness. **Only the couple-time/activity-sharing and communication ritual was positively related to relationship satisfaction**; the sexual-intimacy and we-ness rituals were not significant. Satisfaction with that ritual partially mediated the effect. | 2017 |
| 2 | Walker, D. L., *"Let's Have a Date Night!": The Role of Approach Relationship Goals in Self-Expanding Relationship Activities*, M.A. thesis, Carleton University | `carleton.scholaris.ca` | Two-part study, **135 primarily dating participants** planned a date, enacted it within six days, and completed a follow-up a week later. People higher in approach goals engaged in significantly **more self-expanding** shared activities and wanted them more often. | 2017 |
| 3 | Nawijn, Marchand, Veenhoven & Vingerhoets, *Vacationers Happier, but Most not Happier After a Holiday*, Applied Research in Quality of Life 5(1), 35–47 | `pure.buas.nl` | Pre-test/post-test, **1,530 Dutch individuals, 974 of them vacationers**. Vacationers reported **higher pre-trip happiness** than non-vacationers, which the authors attribute to anticipation; only a very relaxed trip raised happiness after return, and post-trip there was generally no difference. | 2010 |
| 4 | IIPS & Population Council, *Romance and sex before marriage among young women and men in India*, Youth in India: Situation and Needs Policy Brief no. 34 | `knowledgecommons.popcouncil.org` | A policy brief drawn from the **Youth in India: Situation and Needs** study examining pre-marital romantic partnerships among Indian youth; findings call for family-life/sex education and condom awareness. Establishes pre-marital romance among Indian youth as a measured national phenomenon, not an assumption. CC BY-NC-ND 4.0. | 2010 |

Subject test: all four are about dates, rituals, anticipation or Indian pre-marital romance. None is
about "India" or "the internet" in general. **Zero generic context statistics** (no PIB, TRAI,
Census or MEA). Swap test: none could sit unchanged in a sibling post — every sibling is about
sending an artefact, and none of these four is about an artefact. Domain check against
`SPENT-SOURCES.json` and a live recount across all 78 sibling files: `kci.go.kr`,
`carleton.scholaris.ca`, `pure.buas.nl` and `knowledgecommons.popcouncil.org` each appear **zero**
times in the batch.

## Phase 4–5 — Structure, first-party facts, links

**H2s** (7, mapping to the fan-out list): what a romantic night means without a private flat · the
five parts in planning order (5 H3s) · where a digital page belongs in an in-person evening · the
four page roles compared (table) · what goes wrong between 7pm and 11pm · when a page is the wrong
thing to send · sources.

**First-party facts used** — deliberately avoiding the 40.6% password figure and the 6.2-hour edit
gap, both of which `BRIEF-WAVE4.md` §6 flags as a tic across 78 posts:

- 4,357 personalised pages across 16 page types since 2026-03-12 (2026-09-15)
- 3,377 registered creators at 1.29 pages each (2026-09-15)
- 11.5 average views per created page, 49,968 recorded views (2026-09-15)
- 94.1% of started pages are published and shared, 4,098 of 4,357 (2026-09-15)
- occasion-dated pages are 144 of 3,894, 3.7% (2026-09-09)
- Derived, and stated as derived: the five named page types account for 4,017 of 4,357 pages, so
  the other eleven types share **340 pages, 7.8%** of everything built.

**Disclosure carried in the body:** the database records which *template* was opened, not who
received it, so no page count proves the recipient was a boyfriend.

**Pricing:** `content/facts.md` `## Pricing` is empty. No price is stated or implied anywhere in the
post; the FAQ says plainly that current pricing cannot be confirmed here and points at `/templates`.

**Template descriptions** taken verbatim in substance from `app/lib/prompt.ts`: `/date-invitation` is
The Invitation — an invitation they must answer, a yes turns into a countdown, and on the day the
plan unlocks one stop at a time while you are out. `/loveflix` is a streaming-service parody with
one show and your partner as the lead. `/vending-machine` is the Affection Dispenser — eighteen
things you would never say out loud, paid for with a confession. The last two are jokes by design
and are written as jokes.

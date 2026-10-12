# Research brief: dandiya-captions-for-instagram

Keyword: **dandiya captions for instagram** (also covers: dandiya night captions, funny dandiya captions). Body language: en. Cluster: captions.
Written 2026-10-12. WebSearch calls used: **2 of 2** (1 SERP, 1 research). No browser tools were used.

## Phase 0: first-party data

facts.md was read directly (`npm run facts` was NOT run). It has no Navratri, dandiya, Instagram or caption segment, so the gate is thin. Lines used (verbatim in `factsUsed`):

- 48.3% of shared pages opened on a phone (platform-wide, 2026-09-24), placed in the opening
- Raksha Bandhan 2026 lead time, n=89, 49.4% built on the festival day (labelled in the body as the nearest analogue, not Navratri data), placed in the opening
- 38.5% of creators password-protect (platform-wide), in the table and the wrong-tool section

template-spec.md was used for the /dandiya-partner description only (nine lines, six photos, 1080×1920 PNG pass, No turns to Yes after five tries). No usage numbers for the template are stated or implied.

## Phase 1: SERP (US-served, WebSearch, 2026-10-12)

| # | URL (US-served, WebSearch) | Words | Structure | Dandiya-specific? | Date | Weak? |
|---|---|---|---|---|---|---|
| 1 | nestasia.in garba captions | n/a, 403 to fetcher | Garba list with a dandiya section (per search summary) | Partly | unknown | Weak: garba page, ranked for dandiya |
| 2 | eduyush.com navratri-captions-for-instagram | ~4,500 | 25+ H2s by post type, 2026 calendar table, FAQ, 5 JSON-LD blocks | 8 dandiya lines in a 200+ caption page | published 2025-09-14, modified 2026-09-27 ("Last updated: September 2026") | Weak on intent: generic Navratri page |
| 3 | training-new.klingspor.com/?p=22236 | not fetched | scraped mirror / spam | No | n/a | Weak |
| 4 | eduyush.com/en-us duplicate | same as #2 | same | same | same | Weak (duplicate) |
| 5 | scoopwhoop.com navratri-captions (amp) | ~1,700 | 4 H2s, numbered list with hashtags | 9 mentions of dandiya, 0 funny, 0 about sticks | 2024-10-11 | Weak: stale and generic |
| 6 | scoopwhoop.com (non-amp duplicate) | same | same | same | same | Weak |
| 7 | flick.social navratri-captions-for-instagram | ~1,370 | best / short / funny / cute / engaging / lyrics / quotes; copy buttons; #Navratri2022 tag in a caption | 3 mentions of dandiya | no date | Weak: generic, stale tag |
| 8 | flick.social short-navratri-captions | ~1,340 | same template | 1 mention | no date | Weak |
| 9 | buzzvoice.com/blog/?p=14003 | ~3,500 | 21 lists, upsells follower buying | 18 mentions, 0 funny, no stick jokes | 2026-01-29 | Weak: generic, commercial |

**Weak count in top 10: 9 of 9 returned.** Not one result is a dandiya-specific page. No Gate 4 abort.

Measured competitor gaps: none of the fetched pages mentions broken sticks, LED sticks, sweat, the entry queue or the post-dandiya food run. Counted in the fetched text: "broke", "LED" and "sweat" score 0 on every page. eduyush's 2026 calendar puts "Day 8 Sunday 18 October Mahagauri" and "Day 9 Monday 19 October (Durga Ashtami & Maha Navami)". That is the one-goddess-per-date mapping the BRIEF calls wrong for 2026. It matches the BRIEF's warning, and this post avoids a goddess-by-date list.

Corroboration: `content/keywords/2026-10-12-navratri-garba-dandiya/serps.md` lists "dandiya captions for instagram funny" with eduyush, flick.social, scoopwhoop and buzzvoice, which matches.

## Phase 2: gap analysis

- **Table stakes:** short captions, funny captions, group/friends captions, reel captions, Navratri dates.
- **Gap:** dandiya as its own subject. Nobody writes about the stick as an object (decorated, LED, broken, lost), the pass and queue, sweat as humour, the 2 a.m. food run, or reel transition hooks. Nobody organises captions by the moment of the night.
- **Stale data:** scoopwhoop is from 2024. flick.social uses a #Navratri2022 tag. eduyush's date table conflicts with the 2026 tithi overlap.
- **Fan-out sub-queries:** funny dandiya captions; dandiya night caption for a group; short reel captions; what a dandiya stick is made of and how long it is; why you can't sleep after dandiya; when Navratri is in 2026 and 2027; dandiya vs garba captions.
- **Sibling separation:** garba-captions-for-instagram is organised by photo type and uses the hashtag-cap hook. garba-partner-captions is sorted by who the partner is. dandiya-partner-captions is sorted by the stick-clash moment. This page is **solo/group, sorted by the hour of the night**, and does not mention the hashtag cap.

Angle: *Wins by being the only dandiya-specific caption page in a SERP of generic Navratri lists: 48 original solo and group lines sorted by the hour of the night, grounded in the physical stick (PTI's 18-inch mango-wood dandiya) and two sleep studies.*

## Phase 3: sources

| Source | Read | Claim used | Subject test | Swap test |
|---|---|---|---|---|
| PTI via Business Standard, Godhra dandiya makers, 2014-09-25 | Full text (ctx_fetch_and_index) | ~18-inch sticks; mango and baval wood; lace, beads, ghungroos; ~300 units; start 5–6 months ahead | Pass | Pass (dandiya-specific) |
| Sage Open 2023, Guangzhou Light Festival TikTok posts (OA, CC BY) | Abstract only (sagepub 403; Crossref + OpenAlex) | 5 dimensions; physical participation second after cognitive | Pass (festival-goers' posts) | Fails: would fit any festival-caption post |
| Zeiler 2026, Durga Puja visitors' selfie sharing (Routledge chapter) | Abstract only (OpenAlex; T&F page is a JS shell) | photo and selfie posting is a major practice, Mumbai and Helsinki | Pass | Borderline |
| Stutz, Eiholzer & Spengler 2019, Sports Medicine | Abstract only (Europe PMC REST API; paywalled; Unpaywall: closed) | 23 studies; vigorous exercise ending ≤1 h before bed might impair sleep onset | Pass for the "can't sleep" captions | Fails: fits any garba-night post |
| Oda & Shirakawa 2014, Eur J Appl Physiol | Abstract only (Europe PMC REST API) | 12 men, 40 min 21:20–22:00, +14.0 min sleep-onset delay | Same | Fails |
| Drik Panchang 2027 Navratri (New Delhi geoname) | Fetched | Day 1 = Thu 30 Sep 2027 | Date fact-check; cap-exempt; not in `sources` | n/a |

Rejected: YourStory "Zepto sells over one lakh dandiya sticks" (403, not read, so not cited). Wang et al. 2017 groupies (Telematics & Informatics; no abstract reachable). Hu 2026 humour review (MDPI Behavioral Sciences, a journal sibling posts already use). Anything in the PMC family as a host (5+ posts already). Avoided: Wikipedia (at cap), doi.org (at cap), aclanthology (at cap).

findpapers queries tried: "self-deprecating humor social media self-presentation", "dandiya raas stick dance", "Instagram caption humor engagement", "Navratri sleep late night garba", "group selfie friends social media posting", "percussion stick dance India folk", "evening exercise sleep meta-analysis", "vigorous exercise before bedtime sleep onset", "groupies selfies psychological effects", "humor style social media posts likes", "music festival attendees photo sharing social media", "nightlife young adults Instagram posting", "humorous self-presentation Instagram", "group photos friendship social media self-presentation", "dance event sweat heat exertion nightclub". No peer-reviewed work on dandiya events themselves was found.

## Structural limitations / brief claims checked

- BRIEF calendar claims were consistent with drikpanchang's 2027 page (Day 1 = 30 Sep 2027). 2026 dates are cited as BRIEF-verified.
- BRIEF says eduyush titles "still say 2025". The fetched page's HTML title says "200+ Navratri Captions for Instagram 2026" with "Last updated: September 2026", but the search-result title still showed "Best Quotes 2025". Both are true; the page itself is refreshed.
- The verifier reports `batch.json blogs != files on disk`. This slug is not yet listed in batch.json, which the orchestrator owns.

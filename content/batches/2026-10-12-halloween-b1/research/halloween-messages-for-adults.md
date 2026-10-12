# Research brief: halloween messages for adults

- Row 38 · slug `halloween-messages-for-adults` · theme messages · absorbs "halloween wishes for adults" · PLAN weak count 4 · band 10,000+/mo
- Slug free in Strapi (checked 2026-10-12, 0 results).
- Searches used: 1 Firecrawl (`location: "United States"`), 0 WebSearch.

## Phase 0: first-party data

No Halloween usage data exists (BRIEF §3). I used four platform-wide lines, each labelled in the body as platform-wide:
48.3% phone opens, 90.9% publish rate, 38.5% password rate, 11.1 views per page (all measured 2026-09-24).
The template spec is used only to describe /happy-halloween and /happy-halloween-premium (bestie mode question, six photos, 1080×1920 Boo License, first-answer email; premium reply box 280 chars, 60 s voice note).

## Phase 1: SERP (US, Firecrawl, 2026-10-12)

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | rd.com/article/halloween-greetings | 80-line listicle, updated 7 Oct 2026 | strong |
| 2 | pinterest.com pin "40 funny Halloween quotes" | pin | **weak** |
| 3 | ideas.hallmark.com halloween wishes | card-writing guide, Oct 2024 | strong (competitor) |
| 4 | jessalittlecreative.com 37 card messages | small shop blog | **weak** |
| 5 | boomf.com 50 funny quotes | shop blog | **weak** |
| 6 | yahoo.com (Parade syndication) 115 messages | listicle, Oct 2025 | strong |
| 7 | 1800flowers.com 75 greetings | retailer blog | strong |
| 8 | americangreetings.com halloween messages | card competitor | strong |
| 9 | cardsnacks.com 25+ card messages | e-card competitor, Aug 2026 | **weak** |
| 10 | today.com 101 greetings | listicle, 2026 | strong |

Weak count: **4/10** (matches PLAN). Gate 4 passes.
**No result is adult-specific, and none is a "naughty" list.** The task prompt's "even if the SERP has naughty lists" framing does not match the measured SERP.

### Top-5 fetched (jessalittlecreative and boomf returned 429, americangreetings 403; substitutes used)

| Page | Size / structure | Direct answer | Adult content | Data cited | Format |
|---|---|---|---|---|---|
| rd.com | ~80 lines; H2s Funny / Cute / Spooky / Flirty | intro after 2 paras | a few ageing/news jokes in "Funny" | none | bullets, byline, images |
| hallmark | 11 sections (Jokes, Sweet, Heartfelt, Kids, Friends, Family, Fun, Seasonal, Spooky, Religious, Closings) | buried after origins history | "for adults a card is a fun surprise" (one line) | none | ToC, byline |
| yahoo/Parade | 115 numbered lines; Best, Short, Friends, Kids, Partner | after scene-setting intro | 2 "steal your kids' candy" lines | none | numbered, images |
| today.com | 101 lines; Short, Funny, Cute, Spooky | after 3 intro paras | none | none | bullets |
| cardsnacks | 25+ lines by relationship incl. coworker/boss; how-to formula | after product pitch | coworker block | none | sells e-cards |

## Phase 2: gap

- **Table stakes:** funny, short and spooky groupings; friends and family; a coworker block (cardsnacks).
- **Gap:** none has an adult-tone section (ageing, adulting, 30-something), none has old-friend reconnect lines, none has anything for someone grieving at All Souls (2 Nov), none cites research, and none has a recipient/length/channel table.
- **Stale data:** none of them cite data at all.
- **Fan-out:** what to text a boss; texting an old friend out of nowhere; what to say to a grieving friend at Halloween; is dark humour OK; how long should a Halloween text be; wishes vs messages; when to send.
- **Angle:** wins by being the only top-10 page written for adults, with the reconnect section tied to reach-out research and a channel table carrying SubhSandesh's 48.3% phone-open share.

## Phase 3: sources (all fetched via the Europe PMC REST API, 2026-10-12)

1. **Liu, Rim, Min & Min**, "The surprise of reaching out: Appreciated more than we think", JPSP 124(4):754–771. Published online 11 July 2022; the issue is April 2023. PMID 35816566. **Abstract only.** Not OA; SSRN 4115683 and psycnet both returned 403. Cited claims are all from the abstract: preregistered experiments; robust underestimation; magnified when the reach-out is more surprising and when the people are more socially distant. **Brief claim check:** the prompt says "2022 JPSP". That is the online-first date; the print issue is 2023.
2. **Metskas 2024**, PsyArXiv replication of study 4a (PPR873574, CC BY, 26 June 2024). It replicated the effect and notes the outreach form was not specified. It is a preprint, not peer-reviewed.
3. **Willinger et al. 2017**, Cognitive Processing, PMC5383683, CC BY, full text open. 156 adults. The high-preference black-humour cluster had no mood disturbance and low aggressiveness (and high verbal and nonverbal IQ). Emotional instability and aggressiveness went with less enjoyment.
4. **Wildschut, Sedikides, Arndt & Routledge 2006**, JPSP 91(5), PMID 17059314. **Abstract only.** Seven studies; nostalgia is triggered by negative mood and loneliness and bolsters social bonds, self-regard and positive affect.

- **Searched and rejected:** "condolence letters bereaved helpful", "bereaved social support unhelpful comments" and "holiday grief anniversary reactions". The hits were Omega (SAGE, banned), Frontiers 2026 (Frontiers over cap), J Pain Symptom Manage (Elsevier, full) and Death Studies (T&F, banned). Result: the grief section makes no research claim.
- **Workplace humour search:** only paywalled book chapters.
- **Caps:** all four sources are on europepmc.org (cap-exempt host). capcheck shows none of the four papers in any other post. No nrf, doi.org, frontiers, sciencedirect, psycnet or wikipedia body links.
- **Entity sameAs (Wikipedia API, 2026-10-12):** Halloween Q251868, All Souls' Day Q1033140 (confirms 2 November), Dark humor Q53094, Nostalgia Q12151852, JPSP Q1247946.

## Writing notes

- There are 52 original lines. 23 are by recipient (friends 5, siblings 5, parents 4, in-laws 4, coworkers 5), 5 are for an old friend, 4 are for someone grieving, and 20 are by tone (dark, nostalgic, adulting, 30-something; 5 each).
- An automated 40-character prefix match against every other blog in the batch found 0 overlaps.
- Clean-tone line in the definition H2 says why the page stays clean.
- Links: /happy-halloween (mandatory, bestie mode, spec features only) after the table, and /happy-halloween-premium (reply box) as the alternative, with the reason. No /blog links.

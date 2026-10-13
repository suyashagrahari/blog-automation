# Research brief: halloween movies for toddlers

Row 194 · slug `halloween-movies-for-toddlers` · absorbs "toddler halloween movies" · theme kids · PLAN weak 5 · written 2026-10-13

## Phase 0: first-party data
facts.md has no film, toddler or Halloween data (BRIEF §3). I used three platform-wide lines, verbatim:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (first 150 words)
- Average views per created page: 11.1 — measured 2026-09-24 (first 150 words)
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24 (card section)

None of these bears on which film suits which age. The body says so ("the only place our data touches this list"). The post's original contribution is first-hand verification: BBFC records, JustWatch US/UK on 13 Oct 2026, Wikipedia episode lists, and a research finding nobody in the SERP uses.

## Phase 1: SERP (2 search calls)
- WebSearch returned an error (session limit), so it gave no results.
- **DuckDuckGo HTML** (lower confidence): purewow, thebump, mommypoppins, tiredmomsupermom, cafemom, mykidsmademebuyit, mommysbundle, mummysbusyworld, kidswhoplay, mkewithkids. 7/10 are weak (mom blogs and a retailer blog).
- **Firecrawl search, Google US** (Firecrawl reconnected mid-run, so this is the primary SERP):

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | reddit.com/r/Parenting/comments/73v14e | forum (2017) | yes |
| 2 | againstallgrain.com/2020/10/29/… | food blog, 2020 | yes |
| 3 | netflix.com/tudum/… family Halloween | platform editorial | no |
| 4 | facebook.com/groups/… | forum post | yes |
| 5 | commonsensemedia.org/lists/best-halloween-movies-for-kids | ratings authority | no |
| 6 | thebump.com/a/toddler-halloween-movies | parenting publisher | no |
| 7 | imdb.com/list/ls052733561 | user list, authority | no |
| 8 | editorial.rottentomatoes.com/guide/best-scary-movies-for-kids | publisher | no |
| 9 | hollywoodreporter.com/lists/best-halloween-movies-kids-hollywood | publisher | no |
| 10 | tinybeans.com/not-scary-halloween-movies-for-kids | parenting blog | yes |

Weak count: **4/10** on Google US (PLAN said 5). That is above the Gate 4 threshold of 0.

**SERP overlap with `halloween-movies-for-kids`** (its recorded Firecrawl US SERP, 2026-10-12): **5/10 URLs are shared**: againstallgrain, commonsensemedia, imdb ls052733561, rottentomatoes, hollywoodreporter. Both have a Reddit thread, but they are different threads. Google treats the two keywords as largely the same intent, so the two posts risk cannibalising each other. On the DuckDuckGo SERP the overlap is 1/10 (mommypoppins).

Pages analysed. Reddit and Facebook were judged from their snippets only. Netflix Tudum needs JavaScript and was judged from its snippet. tiredmomsupermom (DDG #4) was added as the closest structural rival.

| Page | Words / structure | Direct answer | Data | Format | Optimising for |
|---|---|---|---|---|---|
| TheBump (Oct 2025) | ~3.3k page; 10 H2 titles | none, list starts after intro | none dated; streaming names | H2 per film, affiliate | "toddler" intent, brand |
| Common Sense (mod 6 Oct 2026) | ~1.2k; ~20 H3 titles | one-line intro | CSM age ratings | cards | ratings authority |
| Against All Grain (2020) | ~1.3k; films + Disney Jr episode list | none | "Parents say/Kids say" copied ages; stale | list | personal list |
| PureWow (mod Aug 2026, DDG #1) | ~7.6k; 50 films, preschool band 7 titles | after intro | release years | H2 per film | "by age" |
| tiredmomsupermom (mod Aug 2026) | ~2.5k; table of 25 with best age, 1–3 Scare-O-Meter, runtime, streaming; 2-Minute Preview Checklist; FAQ | "Quick Answer" table | runtimes partly wrong (e.g. Boo to You Too listed 44 min; Wikipedia: 21) | table, H2 age bands, FAQ | toddler intent |

## Phase 2: gap
- **Table stakes:** Great Pumpkin, Spookley, Room on the Broom, Pooh's Heffalump Halloween, Super Monsters, Mickey specials, Curious George Boo Fest; some age split; streaming names.
- **Gap:** no page uses the WHO under-5 screen limits (none under 1, none for 1-year-olds, ≤1 h from age 2), and no page has an under-2 band. Nobody names the scary scene for each title or verifies runtimes against an official record. Nobody explains that TV-G is not a toddler label. No page dates its streaming information. None cites research. tiredmomsupermom's scale has no 0, so everything is "1".
- **Inconvenient finding nobody prints:** in Garrison 2011, adult co-viewing did NOT offset the effect of violent or evening viewing on sleep.
- **Fan-out:** first movie for a 2-year-old; can a 1-year-old watch; how long; is X too scary; TV-Y vs TV-G; does co-watching help; bedtime viewing; scared of costumes; where to stream.
- **Angle:** see batchMeta.angle.

## Phase 3: sources (all fetched)
1. **WHO news release, 24 Apr 2019**: who.int/news/item/24-04-2019-…. I read the full page: <1 no screen time; 1-year-olds not recommended; age 2 ≤1 h; 3–4 ≤1 h; "less is better"; reading and storytelling encouraged. who.int is now 3/3 in b4, at the cap but not over it.
2. **Garrison, Liekweg & Christakis 2011, *Pediatrics* 128(1)**: europepmc.org/article/PMC/PMC3124101. The REST fullTextXML returned 500 and the PDF render returned 403. The free full-text HTML (europepmc.org/articles/PMC3124101) was read through Firecrawl, which is not a bot-wall workaround because the page is free full text that needs JavaScript. Findings: n=612 aged 3–5; 72.9 min/day; 14.1 min after 7 pm; evening +0.743; violent daytime +0.398; nonviolent daytime 0.022 (n.s.); adult co-use made no difference (P=.35, .79). Not used anywhere in b1–b4.
3. **Garrison & Christakis 2012, *Pediatrics* 130(3)**: PMC3428755. **Abstract only.** RCT, 565 children; replacing violent or age-inappropriate content gave OR 0.36 for any sleep problem. Disclosed in the body ("Abstract read") and in sources.
4. **TV Parental Guidelines ratings guide PDF**: tvguidelines.org/resources/TheRatings.pdf. I read the full PDF. TV-Y is for ages 2–6 and "not expected to frighten younger children". TV-G "does not signify a program designed specifically for children". The page states no publication date; the server's last-modified date is 2019-05-17.
5. **BBFC record, Halloween Is Grinch Night**: U on 22 Aug 2024 (25:16), "very mild scary scenes", with the threat insight quoted. Earlier ratings: Uc in 1985 and U in 2004. No sibling used this URL. bbfc.co.uk has 0 other b4 posts.

Avoided: healthychildren.org (used 16× across batches), filmratings.com and bbfc /rating/u and /rating/pg (used by the kids and family posts), ERIC Wilson and Hoffner/Cantor (kids post), and every Europe PMC id in b1–b4 §10 and in sibling files. No SAGE, Elsevier, T&F, Frontiers or megajournal sources. Two candidates were searched and rejected: Cheng 2010 J Epidemiol (no fear or co-viewing data) and the findpapers phenomenon queries ("young children fear responses television", "parental co-viewing preschool fright", "children fright reactions coping", "toddler screen media fear nightmares"). Crossref's fright and coping hits were all SAGE, T&F or paywalled.

## Verification of picks (runtime / rating / streaming)
- **Runtimes, BBFC `durationSeconds`:** Room on the Broom 1560 s (2021) / 1536 s (2012); Great Pumpkin 1560 s (2024 streaming); Gruffalo 1620 s; Spookley 2713 s; Heffalump 3802 s; Grinch Night 1516 s.
- **Runtimes, Wikipedia infobox:** Boo to You Too 21 min; Trick or Treat 8; Lonesome Ghosts 9; Skeleton Dance 5:31; House of Villains 70.
- **Runtimes, series infobox:** Peppa 5; Duggee 7; Bing 7; Daniel Tiger 11 per story; Mickey Mouse Clubhouse 24. Super Monsters Save Halloween: 24 min per JustWatch.
- **Episodes confirmed in Wikipedia episode lists:** Peppa "Pumpkin Party" (26 Oct 2015); Duggee "The Spooky Badge" (28 Oct 2017); Bing "Halloween" (31 Oct 2019); Daniel Tiger ep 32 "Katerina's Costume/Dress Up Day" (28 Oct 2013, Halloween special); MMC "Mickey's Treat" (28 Oct 2006); Super Monsters Save Halloween (5 Oct 2018).
- **Scary moments** come from Wikipedia plot summaries and BBFC insights.
- **Minute marks are ESTIMATED** from scene order and runtime, not timed on a player. The body says so.
- **Streaming** is from the JustWatch GraphQL API (US, plus GB where marked) on 13 Oct 2026, checked at series level. It is not linked; the body states the date and the method.
- **Skeleton Dance in the US public domain since 1 Jan 2025:** per its Wikipedia article.
- **Shared titles with halloween-movies-for-kids:** 4 (Great Pumpkin, Room on the Broom, Spookley, Heffalump). Each carries a toddler-specific note: read the book first; watch in two halves; stop before the storm; split at the cave because of the 1 h cap.
- **Shared with family-halloween-movies:** 0. I dropped Toy Story of Terror and Garfield deliberately.

## Brief or prompt claims checked
- "healthychildren.org was used by b4 scary-costumes": true per §10. I used the WHO page instead.
- PLAN weak=5: measured 4/10 on Google US, 7/10 on DuckDuckGo.
- BRIEF §4 "Firecrawl MCP is disconnected": no longer true by mid-run; it reconnected.
- Prompt says "many specials are TV-Y/TV-G": the official guide confirms TV-G is not a children's designation, which the post now explains.

## Audit failures (2)
- First-party table column: structural, because there is no data.
- Competitor-framing mirror: tiredmomsupermom's 1–3 Scare-O-Meter and preview checklist resemble the mandated scare score and preview habit.

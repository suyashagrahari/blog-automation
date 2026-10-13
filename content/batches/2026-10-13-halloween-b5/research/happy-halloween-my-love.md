# Research brief — happy-halloween-my-love (rank 245)

- Keyword: "happy halloween my love" (absorbs: "happy halloween to my love messages")
- Theme: couple · PLAN weak 7/10 · band 300–1,000/mo
- Searches used: 2 of 2 — WebSearch (US index) ×1, DuckDuckGo HTML via fetch ×1 (lower confidence). Firecrawl disconnected; not used.

## Phase 1 — SERP

### WebSearch (US index), 9 links returned

| # | URL | What it is | Verdict |
|---|---|---|---|
| 1 | static.intrafocus.com/?p=36102 | hijacked-subdomain spam | weak; fetch failed (TLS cert mismatch) |
| 2 | static.intrafocus.com/?p=58434 | same spam network | weak |
| 3 | static.intrafocus.com/?p=40904 | same spam network | weak |
| 4 | lorilynhurley.substack.com/p/the-love-list-d17 | personal newsletter, 31 Oct 2024, "things I loved in October" | weak, off-intent (fetched) |
| 5 | static.intrafocus.com/?p=56604 | same spam network | weak |
| 6 | aol.com/50-best-halloween-greetings-wishes-123107030.html | syndicated greetings listicle (110 messages) | incumbent-type, but URL now 404 — judged from snippet |
| 7 | chronicallyvintage.com (2014) | personal blog, "5 things about Halloween" | weak, off-intent, stale |
| 8 | flashfictiononline.com "love and monsters" | short fiction | weak, off-intent |
| 9 | discover.aclib.us | library catalogue record | weak, off-intent |

**Weak count: 8 of 9** (AOL the only non-weak, and it 404s). Gate 4 passes.

### DuckDuckGo (lower confidence), top 9

| # | URL | Words | Structure / dates | Direct answer? | Data / research | Time-zone / midnight? |
|---|---|---|---|---|---|---|
| 1 | getnamenecklace.com 45 romantic Halloween quotes | ~1,700 | H2 bf / gf quotes + 5 date activities; pub 2022-11-03, never updated | quotes start after short intro | none | no |
| 2 | allwording.com/happy-halloween-my-love | ~870 (lines mostly in images/lists) | single H1 list; pub 2022-07-14, mod 2025-12-16 | list after 1-para intro | none | no |
| 3 | pinterest ideas page | — | image board | n/a | none | no |
| 4 | joliecarte.com card page | ~530 | e-card page (competitor, e-card builder) | card | none | no |
| 5 | readymessages.com 150+ greetings | ~3,700 | 17 H2 by recipient incl. "lovers"; pub 2025-10-02 | list | none | no |
| 6 | joliecarte.com second card | — | e-card | — | none | no |
| 7 | shayriwishes.com | — | wishes farm | — | none | — |
| 8 | cardmessages.com romantic Halloween messages | ~4,700 | 9 H2 by tone (short, sweet, flirty, funny, spooky, long) + card-writing tips + 3-question FAQ (FAQPage schema) | list | none | no |
| 9 | thoughtoftheday.org | — | wishes farm | — | none | — |

All are message farms / e-card builders = competitors (never cited or linked). None has a table, a study, a send time, a date for 2026/2027, or anything about time zones.

### Cannibalisation check
- b2 `halloween-love-messages` measured SERP: intrafocus ?p=33456, ?p=56604, smartsmssolutions ×2, netbox.point-broadband, smallbiztrends ×2, wordstream. **Shared URLs with mine: 1** (static.intrafocus.com/?p=56604). Below the 4-URL threshold.
- Sub-intent still differentiated: b2 love-messages sorts by relationship occasion (first Halloween, wife/husband, after a hard year, anniversary, apology) with a 4-line formula and voice scripts; b2 messages-for-boyfriend sorts by hour of day for one gender. This post is gender-neutral, built around the literal greeting "Happy Halloween, my love", and its spine is *when* it is read: midnight conversion table for partners abroad, weekend dates 2026/2027, the UK clock change landing on 31 Oct 2027, the US change after Halloween. No sibling has a city-by-city midnight table.

## Phase 2 — Gap
- Table stakes: a large set of copyable romantic lines; partner variants; short and long options.
- Gap: (1) nobody tells you when to send it, (2) nobody converts "midnight on the 31st" across time zones, (3) nobody notes that the UK clocks go back on Halloween 2027 itself, (4) no research on why an affectionate line matters or which channel serves an apart partner, (5) no "when not to send this" section.
- Stale data: none cited by competitors at all.
- Fan-out: what does it mean / is it too soon to say "my love"; is midnight OK; what time for a partner abroad; Halloween dates 2026/2027; do clocks change; voice vs text; first Halloween together; married lines; can a page open at midnight.

**Angle:** Wins by being the only "happy Halloween my love" page that sorts original lines by the moment they are read and converts a partner's midnight on 31 October 2026 (Sat) and 2027 (Sun) into Indian time for London, New York, Sydney and Dubai, including the UK clock change on Halloween 2027, using SubhSandesh's 48.3% phone-open share and 11.1 views per page.

## Phase 3 — Sources (all fetched 2026-10-13)
1. Aguilar-Raab et al., "Minimal couple intervention to improve psychobiological stress resilience", British Journal of Health Psychology (Wiley, CC BY), 2025 — europepmc.org/article/PMC/PMC12070146. Full text read. 40 couples randomised; instructed partnership appreciation task (verbal exchange of positive aspects, up to 3×/week); practising it reduced salivary cortisol (b = −.127) and alpha-amylase within the PAT group; perceived stress lower for women in PAT vs control. Subject test: pass (affectionate appreciation between partners).
2. Hall, Dominguez & Mihailova, "Interpersonal Media and Face-to-Face Communication: Relationship with Life Satisfaction and Loneliness", Journal of Happiness Studies (Springer), 2022 — europepmc.org/article/PMC/PMC9647761. Full text read. N = 1,869 US adults, 7,471 alters, eight media; video chat and voice call frequency associated with greater life satisfaction; voice calls indirectly linked to less loneliness through maintenance satisfaction; lean media indirectly linked to more loneliness via maintenance frustration. Subject test: pass (channel choice for close partners apart).
3. GOV.UK "When do the clocks change?" — clocks go back 25 Oct 2026 and 31 Oct 2027, at 2am on the last Sunday of October. Date/calendar reference.
4. NIST "Daylight Saving Time" — US DST in 2026 runs to 1 Nov 2 a.m.; ends 2 a.m. first Sunday of November (so 7 Nov 2027, computed).
5. IANA Time Zone Database page — latest release 2026e, released 2026-09-29, "Manitoba moves to permanent -05 on 2026-10-31". Offsets in the table computed with the tz database (Python zoneinfo).

Rejected: Holtzman et al. 2021 "Long-distance texting" (J Soc Pers Relat = SAGE, banned); Floyd affectionate-communication work (Communication Monographs = T&F; HCR not OA); PMC12221085 emojis (PLOS ONE, journal full in b5 and used by b2); Xie & Feeney 2024 sleep review (CC BY-NC-ND, tangential); "Making time" long-distance marriages (Current Sociology = SAGE); timeanddate.com (403 bot wall — not worked around).

Search terms tried (findpapers + Europe PMC REST): "affectionate text messages romantic partners relationship satisfaction", "long-distance couples time zone difference communication", "daily expressions of affection couples well-being diary study", "people underestimate how much others appreciate being reached out to", "mobile messaging couples intimacy responsiveness", "affection exchange theory", "computer-mediated communication romantic", "perceived partner responsiveness text", "expressions of love couples", "relationship rituals", "good morning goodnight messages couples". No open-access, non-banned study of holiday greetings between partners specifically was found.

## First-party facts used
- 48.3% phone open, 11.1 views per page (first 150 words)
- 38.5% password-protect
- 13.6% of miss-you senders record a voice note
- Raksha Bandhan 2026 lead time (labelled as Raksha Bandhan analogue, n = 89)
No Halloween usage data exists; none implied.

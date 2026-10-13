# Research brief — halloween love messages (row 87)

- Slug: `halloween-love-messages` (Strapi slug check 2026-10-13: free, `data: []`)
- Absorbs: "romantic halloween messages"
- Theme: couple · PLAN weak 7/10 · band 3,000–10,000/mo
- Batch: 2026-10-13-halloween-b2 · written 2026-10-13

## Phase 0 — first-party data

`npm run facts` NOT run (BRIEF §3). Read `content/facts.md` (2026-09-24 block + miss-you segment 2026-09-25).
No Halloween usage data exists; none is stated or implied.

Facts used (verbatim in `factsUsed`):
1. `Median miss-you letter length: 88 words; the longest is 1,024 words, n=214 — measured 2026-09-25` — the only measured letter-length figure on the platform; directly bears on "how long should a love message be". Caveats carried in body: miss-you segment, n=214, template live since 28 July 2026 (two months), not Halloween data.
2. `13.6% of miss-you senders record a voice note (29 of 214) — measured 2026-09-25` — bears on the voice-note section. Voice note is a sender-chosen field (facts.md caveat 1), so it is legitimately a choice.
3. `48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24` — write for a small screen.

Template spec (`template-spec.md`) used for /happy-halloween partner mode and /happy-halloween-premium voice note (60 s), letter (3,000 chars), reply box (280 chars), unlock time. Only spec features described.

## Phase 1 — SERP (WebSearch; Firecrawl disconnected)

Searches used: **2 of 2** (WebSearch, US-served index).
1. `halloween love messages`
2. `romantic halloween messages for husband wife partner card` (absorbed variant)

### Search 1 top results
| # | URL | Type | Judgement |
|---|---|---|---|
| 1 | static.intrafocus.com/?p=33456 | hijacked-subdomain spam ("8+ Spooky Love: Halloween Quotes") | weak; fetch failed (TLS cert mismatch — host serves another server's cert) |
| 2 | static.intrafocus.com/?p=56604 | same spam network | weak |
| 3 | smartsmssolutions.com — "100 creative halloween thank you sayings" | SMS-vendor template list, off-intent (thank-you, not love) | weak; 403, judged from snippet |
| 4 | netbox.point-broadband.com/?p=38690 | hijacked-subdomain spam | weak |
| 5 | smallbiztrends.com/?p=1073034 | business site, off-intent | weak |
| 6 | wordstream.com/blog/ws/2022/10/17/halloween-greetings-sayings | marketing greetings list, **2022**, social-media aimed | weak (stale, off-intent); 403, snippet only |
| 7 | smallbiztrends.com/2014/... difficult clients | off-topic | weak |
| 8 | smartsmssolutions.com — "150 halloween thank you messages" | SMS vendor, off-intent | weak |
| 9 | elitedaily.com/dating/sexy-texts-to-send-on-halloween | Bustle Digital editorial, 40 adult one-liners | the only real editorial page; fetched |

**Weak count: 8 of 9 returned** (WebSearch gave 9 links). PLAN said 7/10 — my measurement is weaker still, but it is a US-served WebSearch index, not Google; lower confidence.

Search 2 was equally thin: intrafocus spam x2, walmart.com card listings x2, point-broadband spam, dev.ourstate.com tag page, a lutonhoo.oandg.co.uk "Hallmark wish list" spam page, a 101-romantic-ideas PDF on yolasite, a rubyshore spam page. 0 editorial pages about Halloween love messages.

Corroboration from `content/keywords/2026-10-12-halloween-global/serps.md`: "cute halloween messages for boyfriend" 7/10 weak (pinterest x3, card generators, parade); "happy halloween wishes messages" owned by card brands (hallmark, americangreetings, 1800flowers). Card brands are competitors — never cited.

### Top-5 comparison (what could be read)
| Page | Words / structure | Where the answer sits | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|
| elitedaily sexy texts | ~1,500; H2s by heat level (suggestive → explicit) | list starts after 2-para intro | none; updated Feb 2024, first published 2018 | bulleted one-liners, no table, no FAQ | first person, slangy | "sexy halloween texts"; adult |
| intrafocus x2 / point-broadband | unreadable (spam host) | — | — | snippet shows pumpkin-patch one-liner | machine text | scraped keyword pages |
| smartsms thank-you lists | snippet only (403) | — | — | template list | vendor | SMS templates |
| wordstream 2022 | snippet only (403) | — | — | greetings list | marketing | social captions |

## Phase 2 — gap

- **Table stakes:** a list of lines; some partner targeting.
- **Gap:** nobody gives *longer* (2–4 sentence) messages; nobody sorts by occasion (first Halloween, married, long-distance, hard year, October anniversary/proposal, apology); nobody gives a writing formula, a voice-note script, or a length guide; the one editorial page is sexual, which the BRIEF forbids.
- **Stale:** elitedaily 2018/2024; wordstream 2022.
- **Fan-out:** what to write in a Halloween love card; how long; long-distance; apology; voice note; propose on Halloween; wife/husband; public vs private; when to send.

**Angle:** Wins by being the only clean, occasion-sorted set of 2–4 sentence Halloween love messages with a 4-line formula and voice-note scripts, sized against SubhSandesh's measured 88-word median love letter and 13.6% voice-note rate.

## Phase 3 — sources (all fetched via Europe PMC REST full text, CC BY, open access)

| Source | Claim used | Read |
|---|---|---|
| Hoult, Wetherell, Edginton & Smith, PLOS ONE, 21 May 2025 — https://europepmc.org/article/PMC/PMC12094736 | 51 studies of positive expressive writing; gratitude and best-possible-self writing gave the most consistent wellbeing benefits; all studies rated poor or fair quality | full text |
| Kocur et al., PLOS ONE, 25 June 2025 — https://europepmc.org/article/PMC/PMC12193689 | 461 adults (Indonesia 170, Nepal 120, Poland 171); displays of affection (scale includes verbal declarations of love) correlated positively with relationship satisfaction in all three; public display norms differ by culture | full text |
| Okati et al., PLOS Mental Health, 15 Oct 2025 — https://europepmc.org/article/PMC/PMC12798524 | 442 adults, 215 long-distance; LDR partners reported less time together and more somatic symptoms; ambivalence over expressing emotion linked to somatic symptoms in both groups; cross-sectional | full text |
| Imai, PsyCh Journal (Wiley), 20 Sept 2023 — https://europepmc.org/article/PMC/PMC10917096 | 671 Japanese participants; gratitude, or gratitude + apology, raised closeness more than apology alone; hypothetical benefactor, not couples | full text |

Not used before in either Halloween batch (checked b1 BRIEF §9 + b2 BRIEF §10 and grep of both blogs dirs). Rogge 2026, Huh 2025, Meier 2025, Forshaw 2025, Floyd 2007, Regan/Walsh/Lyubomirsky 2023, Liu reaching-out all avoided. Excluded: Health Psychology Open gratitude-in-older-couples (PMC12678730) — SAGE; Slatcher & Pennebaker 2006 — SAGE.

Search terms tried: findpapers "affectionate writing relationship satisfaction", "love letters expressive writing couples", "expressive writing romantic relationship stability", "gratitude letter romantic partner"; Europe PMC REST: expressive writing + couple/romantic; affectionate communication; verbal affection / "I love you"; apology + romantic partner + forgiveness; voice message vs text closeness (nothing relevant open access); gratitude expression couples. **No open-access study of love letters or voice notes between partners was found**; the expressive-writing review measures the writer's wellbeing, not the relationship — said so in the body.

Wikidata (Wikipedia API, 2026-10-13): Halloween Q251868; Love letter Q1056617; Long-distance relationship Q1406917; Writing therapy Q8038545 (redirect target of "Expressive writing").

## Brief claims checked
- Prompt: "Batch 1 used Floyd 2007; Regan/Walsh/Lyubomirsky 2023; Liu reaching-out" — confirmed in b1 BRIEF §9.
- Prompt: PLAN weak 7/10 — measured 8 of 9 weak on WebSearch (US index); not a contradiction, just weaker.
- Sibling `halloween-love-puns` exists on disk. `halloween-love-quotes` landed mid-draft; the final 5-word overlap check ran against all 50 b1 and every b2 blog including it: 0 overlaps in copyable lines (the only hits are template-spec feature phrasing and a citation line).
- Avoided love-quotes' papers (Benfante 2024, Özeren 2025, Pala & Güler 2026) and Gutenberg poets — none used.
- Kocur 2025 (PMC12193689) is ALSO cited by sibling `halloween-couple-shirts` (not listed in BRIEF §10 at write time) → paper now 2 of 2, FULL.
- Both WebSearch calls returned before the session cap; the DuckDuckGo fallback was not needed.

## Verification
- `scripts/verify-batch.mjs`: no problems on this slug (1,792 words, 10 FAQs, audit 49/1). The only batch-level problem is `batch.json` not listing this slug, which the orchestrator owns.
- `capcheck.mjs`: no banned URLs; europepmc.org is exempt; PMC12193689 at cap 2.

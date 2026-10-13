# Research brief: halloween around the world

Row 182 · slug `halloween-around-the-world` · theme global · absorbs "how halloween is celebrated around the world", "who celebrates halloween in the world" · category `festive-beats`

## Phase 0: first-party data

No Halloween usage data exists in `content/facts.md` (BRIEF §3). Used, verbatim, as platform-wide or segment lines:

- Miss-you pages name 47 distinct city pairs drawn from a 15-city picker, including cross-border pairs such as Mumbai-London and Berlin-London (2026-09-25). This is the miss-you segment, labelled as such; it shows SubhSandesh pages already travel across borders.
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), 2026-09-24
- Average views per created page: 11.1, 2026-09-24
- 38.5% of creators password-protect their page, 2026-09-24

The template spec (`template-spec.md`) is the only source for `/happy-halloween` features. `npm run facts` was not run.

## Phase 1: SERP (WebSearch, US index; 1 search used of the 2 allowed)

| # | URL | Type | Words / structure | Direct answer | Data and date | Notes |
|---|---|---|---|---|---|---|
| 1 | pathgather.com/halloween-around-the-world-… | thin blog | not fetched (TLS certificate expired) | snippet only | none visible | weak; appears twice (also `?p=3386`) |
| 2 | themanitoban.com/2009/10/halloween-around-the-world/394/ | 2009 student newspaper | not fetched (403 WAF) | snippet only | 2009 | weak; appears twice |
| 3 | globetrottinkids.com/halloween-traditions-around-the-world/ | kids' education blog, affiliate links | ~680 words, H1 and unlabelled paragraphs (US/Canada, Ireland, Mexico…) | after one generic intro sentence | quotes Wikipedia on barmbrack; no dates | weak |
| 4 | vam.ac.uk/mused/random/7-halloween-traditions-around-the-world | museum "Mused" listicle, 31 Oct 2025 | 7 H2s: roots, costumes, All Souls' Week (Austria), pumpkins, trick or treat, Day of the Dead, Japanese parades | none; light, jokey tone | no sources | strong domain → COMPETITOR for this keyword, not cited |
| 5 | mentalfloss.com/article/604894/… ("20 Halloween-Like Traditions…") | listicle, 2019 | ~3,900 words, 20 numbered H2s by tradition // country (Samhain, Día de Muertos, Romania, Kawasaki, Pangangaluluwa, Hungry Ghost HK, Pitru Paksha, Zaduszki, Awuru Odo, Pchum Ben, Ognissanti, Kukeri, Gai Jatra, Tết Trung Nguyên, Galungan…) | none; list starts at once | links to history.com / about.com; undated customs; 2019 | strong; COMPETITOR, not cited |
| 6–10 | gocollette.com (2017, 13 numbered H2s), pointswithacrew.com, nitravelnews.com | travel brand and small blogs | numbered country lists | no | undated | weak |

**Weak count in the top 10: 8** (pathgather ×2, themanitoban ×2, globetrottinkids, gocollette, pointswithacrew, nitravelnews); strong: vam.ac.uk, mentalfloss.com. PLAN.json says 6/10; the measured figure is higher. No AI Overview appeared in the WebSearch result.

## Phase 2: gap analysis

- **Table stakes:** Samhain/Ireland, Día de Muertos, Japan costumes, the Philippines, Hungry Ghost, Pitru Paksha, All Saints in Catholic Europe.
- **The gap:** no page states *how widely* each country celebrates, or admits when no survey exists; no page dates the Asian festivals of the dead (all are undated); none groups by region or compares them in a table; none mentions Itaewon, the Saudi shift, or Brazil's Dia do Saci law; none says Día de Muertos is mourning rather than "Mexican Halloween" in sourced terms; none cites research on how Halloween spreads.
- **Stale data:** Mental Floss 2019, Collette 2017, Manitoban 2009.
- **Fan-out sub-queries → H2s:** who celebrates Halloween in the world; how is it celebrated country by country; at-a-glance comparison; why some festivals of the dead come earlier (dates); where it sits beside grief or restriction; how to greet a friend abroad (time zones); when not to.
- **Angle:** wins by being the only post that gives 23 countries the same five fields with an explicit evidence level, dated 2026/2027 lunar festivals, and sourced, respectful treatment of Itaewon, Undas and Día de Muertos, framed by SubhSandesh's 47 cross-border city pairs and 48.3% phone-view share.

## Phase 3: sources (all fetched)

| Source | Type | Subject test | Used for |
|---|---|---|---|
| Brandes 2000, *Alteridades* 10(20), Redalyc (full PDF read) | peer-reviewed, open access | yes: how Halloween spread into Mexico, and the reaction | NAFTA 1993, migration, TV; Tepoztlán mural; Oaxaca altar contest; children asking for "jalouín" |
| Ha 2023, *F1000Research* 12:829 v2 (full text, CC BY) | open peer review | yes: Itaewon Halloween crush | 29 Oct 2022; 40 m × 4 m alley; 158 dead (26 foreign), 196 injured |
| São Paulo Law 11,669 of 13 Jan 2004 (al.sp.gov.br) | statute | yes: Dia do Saci | 31 October commemorative date |
| NDTV 2 Nov 2022 (Wayback copy; live page 403) | news | yes: Saudi Halloween | Riyadh "scary weekend"; first public events 2021; 2018 raid |
| YouGov 6 Oct 2025 (n=2,069) | poll | yes: UK reach | 51% of GB adults don't celebrate |
| US Census Bureau CB25-FF.08, 30 Sep 2025 | government statistic (the one generic statistic) | partly | 73.1 million potential trick-or-treaters |

Avoided per prompt: Lukose 2005, Sugiura 2025, Popelková & Zajonc (the 2022 Slovakia paper found on OpenAlex was skipped as likely theirs), Lherm 2010. nrf.com not used (BRIEF §5). No Taylor & Francis, Sage, Frontiers, Elsevier, MDPI. Competitors vam.ac.uk and mentalfloss.com not cited.

Verification-only (not cited): English and Portuguese Wikipedia via API (Geography of Halloween, Ghost Festival, Seoul Halloween crowd crush, Zaduszki, Gai Jatra, Dia do Saci); Nager.Date public-holiday API (timeanddate.com 403); Drik Panchang Pitru Paksha dates (New Delhi); ICU Chinese calendar for Hungry Ghost dates; Narrative Research Canada poll (7–9 Oct 2025, n=1,230); Lawphil Proclamations 1006 and 1427.

Search terms tried (findpapers / OpenAlex): "Halloween globalization", "Halloween diffusion consumer culture", "global diffusion of holidays cultural globalization festival", "Halloween Europe adoption", "Halloween China youth", "halloween cultural diffusion", "halloween mexico dia de muertos", "itaewon crowd crush", "dia do saci".

## Claims in the prompt checked

- "nrf.com is fresh in b4" for the US stat: conflicts with BRIEF §5 (spending posts only); Census used instead.
- Philippines 1 Nov special non-working + 2 Nov proclamations: confirmed for 2026 (Proclamation 1006). For 2027, Proclamation 1427's preamble says 2 November is an additional special (non-working) day, but Lawphil's table lists it under "C. Special (Working) Day". The post cites the preamble.
- Dia do Saci: confirmed as a São Paulo state commemorative date by law, not a public holiday and not national.

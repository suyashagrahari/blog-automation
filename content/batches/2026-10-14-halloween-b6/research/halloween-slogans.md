# Research brief — halloween slogans (also: halloween taglines)

Row: rank 270, slug `halloween-slogans`, band 300–1,000/mo, plan weak count 6. Written 2026-10-14.

## Phase 0 — first-party data
No Halloween usage data in facts.md (BRIEF §3). Platform-wide lines used, framed as such:
- 48.3% phone share of 57,456 views; 11.1 views per page (both in the first 150 words, tied to "short lines that survive repeat reading").
- 90.9% publish rate; 38.5% password rate (template section).

## Phase 1 — SERP (WebSearch, US index; 1 search used, Firecrawl not used)
Query: `halloween slogans`.

| # | URL | Type | Words (approx, incl. chrome) | Structure | Direct answer | Research / data | Dated | Strength |
|---|---|---|---|---|---|---|---|---|
| 1 | static.intrafocus.com/?p=68371 | hijacked subdomain spam | — | — | — | — | — | weak (spam, not analysed) |
| 2 | helpcrunch.com/blog/halloween-materials/ | SaaS blog | ~2,650 | H2 by marketing/advertising/sale slogans, then chat-widget messages | none, list starts after intro | none | no date | weak-mid |
| 3 | localiq.com/blog/halloween-marketing-slogans/ | ad-agency blog | ~2,100 | H3 by industry (education, healthcare, home services, retail, professional) with a campaign idea each | buried after intro | none | updated 30 Sep 2024 (stale) | mid |
| 4 | thryv.com / thryv.com.au (?p= URLs and /blog/halloween-puns-marketing) | SMB SaaS blog | 403 to fetcher — judged from snippet | slogan vs tagline distinction; "We'll never ghost you" | snippet only | — | — | weak-mid |
| 5 | hibu.com/blog/.../35-halloween-taglines-to-treat-your-customers | ad-agency blog | ~2,300 | H3: themes, promotions, any business, service, sales, retail, IG captions, hashtags | key-takeaways box with NRF spend | NRF $13.5bn, 56% shop before October, 21% motivated by promotions (retail stats, not about slogans) | "Updated for 2026" | mid |
| 6 | pagefly.io/blogs/shopify/halloween-marketing-slogans | Shopify app blog | redirected to blog index at fetch time | — | — | — | — | weak |

Weak count in top results: intrafocus spam, thryv ?p= duplicates, pagefly redirect → at least 3 weak; Gate 4 not triggered.

Cannibalisation check: sibling `halloween-marketing-ideas` (b1) shares thryv.com (1 domain); `halloween-puns-for-work` (b1) shares intrafocus spam and thryv.com.au (2). Overlap ≤ 2 URLs with any named sibling, below the 4-URL threshold. Sub-intent kept distinct anyway: siblings cover campaign ideas, captions, puns, quotes, vocabulary; this post owns short display lines grouped by placement, plus slogan science and ownership.

## Phase 2 — gap analysis
- **Table stakes:** grouped slogan lists for businesses; sale/promo lines; slogan vs tagline.
- **Gap:** none of the five cites research on why slogans stick; none mentions trade mark registration or the T-shirt problem; none has safety-campaign, school/club or T-shirt groups; none gives line length per use.
- **Stale data:** localiq updated 2024; hibu leans on retail-spend statistics, not slogan evidence.
- **Fan-out sub-queries:** slogan vs tagline; slogans for shop/sale; café; school event; safety; office party; T-shirt; how long should a slogan be; does rhyme work; can I trademark a slogan; can I use a famous slogan; is "trick or treat" ownable.
- **Angle:** wins by being the only post that sorts 60 original slogans by where they are read, measures their length, explains rhyme and repetition with three studies, and quotes USPTO and UK IPO slogan rules.

## Phase 3 — sources (all fetched; caps checked with capcheck.mjs, batch empty at time of writing)
1. Rubin & Wallace 1989, JEP:LMC — Duke repository (hdl.handle.net/10161/10164), abstract + repository metadata read via DSpace API: rhyme .19, category .14, both .97.
2. Filkuková & Klempe 2013, Scandinavian Journal of Psychology (Wiley) — Europe PMC MED/23841497, **abstract only** (Wiley PDF behind bot check).
3. Hassan & Barber 2021, Cognitive Research: Principles and Implications (Springer OA, CC BY) — PMC8116821; up to 27 repetitions, largest gain at second exposure, fluency.
4. IJERPH 2021 (MDPI) — PMC8430693; UK STATS19 1990–2017, 34.2% higher KSI risk 17:00–18:00 on Halloween. Note: MDPI is a megajournal (BRIEF says prefer others); used because it is the only Halloween-specific road-injury paper found.
5. USPTO "What is a trademark?" — phrase can be a mark; rights only for specific goods/services. Undated.
6. UK IPO Trade marks manual, examination guide (gov.uk content API: first published 2018-08-23, updated 2026-09-08) — "Slogans" section: registrable if not descriptive/non-distinctive; "Simply the best" purely promotional; decorative T-shirt slogans s.3(1)(b).

Rejected: McGlone & Tofighbakhsh 2000 (Psychological Science, SAGE — banned); "Keats heuristic" 1999 (Poetics, Elsevier — banned); Frontiers rhyme/fluency papers (banned); Iowa State slogan word-count proceedings (used by b1 sibling, and cosmetics-specific).

Searches tried (findpapers + Europe PMC + OpenAlex): "rhyme as reason aphorism truth judgment", "rhyme memory recall advertising slogan", "slogan memorability brevity recall", "processing fluency rhyme persuasion", "Halloween AND pedestrian", "illusory truth", "trademark slogans distinctiveness registration". No open-access, non-banned study isolates slogan brevity, so length advice rests on our own count of the 60 lines (labelled as such).

## Brief claims checked
- BRIEF/prompt framing "verify with USPTO/UKIPO that short slogans can be registered": confirmed, with the caveat the UK IPO adds (distinctiveness; T-shirt and purely promotional lines refused).
- Halloween dates: Sat 31 Oct 2026, Sun 31 Oct 2027; Friday before = 30 Oct 2026, 29 Oct 2027.

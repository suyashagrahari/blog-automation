# Research brief — navratri wishes for husband

Batch `2026-10-12-navratri-partner-b1` · slug `navratri-wishes-for-husband` · cluster romantic-wishes · bodyLanguage `en` with a Hindi section (Devanagari + romanised + gloss) · also covers "navratri wishes for husband in hindi" · run 2026-10-12.

## Phase 0 — first-party data

facts.md read by hand; `npm run facts` NOT run (BRIEF §3). No Navratri or dandiya-partner usage data exists. Used, byte-verbatim:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 → first 150 words, table
- Median miss-you letter length: 88 words … n=214 — measured 2026-09-25 → first 150 words, table (caveat in body: n=214, template live since 28 July 2026, everyday use, not Navratri)
- 43.5% of miss-you senders password-protect … — measured 2026-09-25 → table
- Raksha Bandhan 2026 lead time, n = 89 … 49.4% on the day … → dates section and table, labelled as the nearest festival analogue, small sample, not Navratri data

The miss-you lines genuinely bear on the "husband posted away" situation (how long a message to an absent partner runs). Template-spec features (nine lines, six photos, five-tries No, 1080×1920 pass, English UI) used only in the invitation section and FAQs.

## Phase 1 — SERP (US-served, WebSearch, 1 call, 12 Oct 2026)

Query: `navratri wishes for husband`. 9 results returned.

| # | URL | Weak? | Why |
|---|---|---|---|
| 1 | thequint.com … chaitra-navratri-wishes (2019) | weak | Chaitra 2019, generic, ~370 words |
| 2 | lutonhoo.oandg.co.uk/en/navratri-wishes-in-hindi | weak | scraped mirror (DNS failed to fetch) |
| 3 | fithindi.thequint.com … navratri-2021 | weak | 2021, duplicate of #4 |
| 4 | thequint.com/amp … happy-navratri-2021 | weak | 2021, 6 generic lines, ~400 words |
| 5 | eduyush.com/blogs/lifestyle/navratri-wishes-in-hindi | weak | title "2025", H2s all "(2025)", 150+ Hindi lines, ~7,460 words, no husband/pati section |
| 6 | smartpuja.com/blog/navratri-wishes | weak | "2023" title; fetcher got a puja-booking landing page (~1,430 words), no wishes visible |
| 7 | thequint.com … navratri-2023 | weak | 2023 generic |
| 8 | outlookindia.com/brand-studio … sharad-navratri-2024 | weak | 2024 brand-studio, family/friends, ~1,490 words, 4 H2 lists |
| 9 | lbas.lboro.ac.uk/wishes/navratri-wish | weak | spam subdomain (fetch failed) |

**Weak: 9 of 9.** Gate 4 passes. Corroborated by serps.md row "happy navratri wishes for husband wife romantic" (8/10 weak: quint 2021, bootsnipp 2021, outlook 2024, smartpuja 2023).

Fetched in full via ctx_fetch_and_index plus a word/term count script: #1, #4, #5, #6, #8. **"husband" occurrences: 0, 0, 0, 0, 0; "पति": 0 in all.** No tables, no FAQ sections with husband content, no dated 2026 Ashtami/Navami detail. Direct answer: none of them answer for a husband; they open with festival background. Tone: third-person, generic blessings ("May Maa Durga bless you and your family"). Eduyush's separate captions page has one line "First Navratri as husband and wife" in a couples list (seen in an earlier sibling's index) — not copied.

## Phase 2 — gap

- Table stakes: blessing lines, Hindi lines, Navratri dates.
- Gap: no page is written to a husband; no page sorts by his situation (fasting with her, posted away, first Navratri married, garba together, teasing, Ashtami/Dussehra); no page notes the 2026 Ashtami+Navami same-day tithi; no page sizes a message for an absent spouse.
- Stale: every result is 2019–2025.
- Fan-out → H2/FAQ: what to say; lines by situation; Hindi with aap/tum; which format per situation; when to send (2026/2027 dates); garba invitation; when it is wrong; army husband; fasting husband; first Navratri after wedding; Hindi UI question.
- Angle: wins by being the only post that writes Navratri wishes from a wife to her husband sorted by his situation, using miss-you data (88-word median letter, 43.5% password) for the away husband.
- Sibling split: navratri-wishes-for-love = night-by-night hub (not repeated: no per-goddess structure, no reused lines; avoided its "diya at nine / same flame" and stick-hits-knuckles ideas). navratri-wishes-for-wife (landed during this run) uses a parallel six-situation shape; I renamed my H2/H3s ("by what he is doing tonight", "dance garba as a couple", "What should a Navratri wish for a husband say?") and my situations differ (posted away, dandiya teasing, Ashtami morning vs her parents' home / puja). Some shared phrasing remains from the common table/fact lines.

## Phase 3 — sources

findpapers.mjs queries: "Hindu women vrat fasting husband", "joint religious activities couples marital satisfaction", "military spouse deployment communication", "commuter marriage dual-career couples living apart", "Karva Chauth fasting wives", "Indian army wives separation", "Navratri fasting", "praying for partner relationship", "couples shared religious rituals home", "husbands fasting Karva Chauth men". WebSearch for research: 0.

| Source | Read | Claim used | Date |
|---|---|---|---|
| Naithani et al., Med J Armed Forces India — europepmc.org/article/PMC/PMC10746805 | Abstract only (Europe PMC REST API; PMC and Europe PMC landing pages returned captcha/403) | 30 healthy adults fasted 7 days in Navratri; cholesterol and triglycerides fell, then rose after normal diet | 2022-01-20 |
| Wood, Scarville & Gravino, Armed Forces & Society — journals.sagepub.com/doi/10.1177/0095327X9502100204 | Abstract only (OpenAlex; publisher 403) | 35 army wives, 6-month deployment; employment, friends/family network, family support groups important for those who adjusted | 1995 |
| Wu & Wang, Frontiers in Psychology — frontiersin.org …/fpsyg.2022.860717/full | Full text, CC BY | 120 Taiwanese dual-earner commuter couples, apart ≥4 days/week; commuting husband's family commitment reversed the negative link between wife's family-to-work conflict and family satisfaction | 2022-08-24 |
| Talukdar, Sociological Focus — tandfonline.com/doi/abs/10.1080/00380237.2014.916592 | Abstract only (OpenAlex; publisher 403) | 41 Bengali Hindu women; fasting engagement shaped by class-based predispositions | 2014-06-10 |
| Drik Panchang 2026 and 2027, geoname 1261481 | Fetched | 2026: 11 Oct start, Ashtami + Navami 19 Oct, Vijayadashami 20 Oct, Kalaratri puja 17 Oct; 2027: 30 Sep start, Ashtami 7 Oct, Navami 8 Oct, Dussehra 9 Oct | undated |

Peer-reviewed open access: Frontiers (gold OA, CC BY); the MJAFI paper is green OA in PMC. Generic government statistics: 0. Wikipedia in body: 0 (sameAs only, verified via API: Navaratri Q10269, Durga Q382973, Garba (dance) Q882985, Religious fasting Q18458950, Dual-career commuter couples Q1243034).

Caps: switched two doi.org links to publisher URLs because doi.org was at its 3-post cap with them. capcheck clean for this slug. No Navratri-and-spouse study found: swap test recorded as a failure.

## Brief claims checked

- Calendar in BRIEF §1 matches drikpanchang (New Delhi) for 2026 and 2027.
- The sibling navratri-wishes-for-love lists "Night eight, Mahagauri (18 Oct 2026)". Drikpanchang shows Durga Ashtami / Mahagauri Puja on 19 Oct 2026, so that sibling has the exact error BRIEF §1 warns about. It is not my file; flagging it for the orchestrator.
- BRIEF note "eduyush titles still say 2025": true for the wishes-in-hindi page fetched here (all H2s "(2025)"), though its banner runs a NAV26 promo.

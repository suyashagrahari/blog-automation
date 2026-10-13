# Research brief: halloween couple photoshoot ideas (row 80)

Slug `halloween-couple-photoshoot-ideas`. It also covers "halloween couple pictures" and "halloween couple photos". Theme: couple. Weak count 9/10.

## Phase 0: first-party data
facts.md has no Halloween or photography data, and `npm run facts` was not run (per the BRIEF). I used three facts:
- 48.3% phone-open share (measured 2026-09-24). It's the reason every concept is planned as a vertical frame. It's in the first 150 words.
- 49.4% of 89 rakhi pages were built on the festival day (Raksha Bandhan, used as the nearest analogue and labelled that way). It backs the advice to book the weekend before. Also in the first 150 words.
- 11.1 average views per page. Used in the card section.

The template spec (/happy-halloween partner mode: up to 6 photos, fog-wipe portraits, 1080×1920 Boo License, answer email; premium: 12 photos, 60 s voice note) is first-hand product fact.

## Phase 1: SERP (WebSearch, 1 of 2 budget; Firecrawl disconnected; US-served index)

| # | URL | Status | Shape | Direct answer | Data / dates | Notes |
|---|---|---|---|---|---|---|
| 1 | static.intrafocus.com (x3 results) | spam | hijacked subdomain | n/a | n/a | weak, not analysed |
| 2 | jcpportraits.com (x2) | 403 | small studio blog | snippet only | none visible | weak |
| 3 | shotkit.com/halloween-photoshoot-ideas | fetched | 16 ideas for adults, kids and couples, plus a props list and editing tips | after a 4-line intro | no dates, no costs, no times | generic; the couple section is only matching costumes and silhouettes |
| 4 | splento.com 2022 "top 15" | redirects to blog index | dead URL | n/a | 2022 | weak |
| 5 | kraftgeek.com 13 ideas (29 Aug 2025) | fetched | shop blog: low light, multiple exposure, motion blur, doorway silhouettes, forest fog, equipment, editing | intro first | "golden hour" with no times; fog machines with no safety info | weak, product-led |
| 6 | elishiajacksonphotography.mypixieset.com | 403 | photographer blog | snippet | none | weak |
| 7 | plesk.danavero.com | spam | hijacked subdomain | n/a | n/a | weak |

serps.md (2026-10-12) recorded weak 9 for this keyword (Pinterest x4, Instagram, Facebook x2, a shop and small blogs), which matches this run. Weak count in the top 10: 9. Gate 4 passes.

## Phase 2: gap
- Table stakes: pumpkin patch, ghosts and sheets, fog, silhouettes, matching costumes, a props list.
- The gap: none of the pages gives actual sunset times, a cost per concept, three poses per concept, a DIY-or-hire call, fog or candle safety, or what a photographer charges. Nobody covers Día de los Muertos with respect, and nobody covers phone night mode.
- Fan-out questions: what time is golden hour on Halloween; how to shoot without a photographer; is a fog machine safe; are candles OK; how long a shoot takes; at-home ideas; prop budget; photographer cost.
- Angle: see `batchMeta.angle`.

## Phase 3: sources (all fetched)
1. Say, Akbulut & Öztürk 2025, *Behavioral Sciences* (MDPI, CC BY), PMC12466594. I read the full text via the Europe PMC REST API (the europepmc.org page 403s to bots). n=120 in three groups: observe, photo, video. Observers recalled best. The photo group declined least at the two-week delayed recall, and the authors suggest photos work as retrieval cues. Peer-reviewed, open access, on topic.
2. NOAA GML Solar Calculation Details. The calculator uses Meeus's equations and is accurate to within 1 minute between ±72° latitude, and it is "no longer actively supported or maintained". The calculator page itself is JavaScript, so I computed the 31 Oct sunsets with NOAA's equations (0.833° refraction) and sanity-checked them against June sunsets (NYC 20:31, London 21:22). Results: NYC 17:53 (2026) / 17:54 (2027) EDT; London 16:35/16:36 GMT (BST ends 25 Oct 2026 and 31 Oct 2027 at 01:00 UTC); Sydney 19:22 AEDT; Mumbai 18:06 IST; Toronto 18:10 EDT (not used).
3. Google Pixel Camera Help, Night Sight. Turns on automatically in low light, needs you to hold still for a few seconds, and auto mode is off when flash is on.
4. HSE ETIS3(rev2), Sept 2017. Lists glycol skin irritation, slips, reduced visibility, dry-ice frostbite and CO2 pooling.
5. London Fire Brigade, candles (undated). LED candles are much safer; use heat-resistant holders on a stable surface, away from curtains and clothes.
6. BLS OOH Photographers. Median $21.47/hr (May 2025), bottom 10% < $14.82, top 10% > $44.14, many self-employed. This is the one context statistic.

Rejected or failed: the NFPA candle page (client-rendered, empty; tip-sheet PDFs return 500). timeanddate (403). The USNO API (timed out). Apple's Night mode guide (redirects to the index). Lurie 2025 Mem Cognit PMC13332969 (fits, but dropped to stay within 6 links). Corsbie-Massay 2024 selfies (off-angle). "Visual-related conflicts in close relationships" (SAGE, avoided). Diehl 2016 JPSP (not open access).

Searches tried in findpapers: "taking photos memory enjoyment", "couple photographs relationship closeness", "theatrical fog glycol respiratory exposure", "photo-taking shared experience memory study". Europe PMC REST: "artificial fog" glycol, theatrical fog respiratory, "photo-taking" memory, couple selfies relationship. I found no open-access paper on couple photographs and relationship closeness.

## Sibling and originality checks
I read the H2s and H3s of b2 halloween-couple-outfit-ideas, halloween-captions-for-couples and halloween-nail-captions (its photo section uses dermatology lighting papers), and of b1 halloween-captions-for-family, halloween-activities-for-couples, halloween-date-ideas-for-couples, halloween-couple-pajamas and halloween-fancy-dress-for-couples. This post has no captions, outfits or famous-couple lists. The 5-gram overlap that remains is template-spec wording ("Will you be my boo", the 1080×1920 licence) and generic phrases. I reworded the shared fact sentences.

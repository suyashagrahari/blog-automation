# Research brief — navratri wishes for love

Batch `2026-10-12-navratri-partner-b1` · slug `navratri-wishes-for-love` · bodyLanguage `en` · absorbs "navratri wishes for lover", "navratri wishes for love in hindi" (as an H2).
WebSearch calls used: **1** (budget 2). No browser tools. Competitor pages fetched with `ctx_fetch_and_index` / sandbox fetch.

## Sibling split

This page is the hub for a romantic partner of any status, organised by night (nine H3s) and by tone (sweet, playful, devoted, missing you). It links out to `/blog/navratri-wishes-for-girlfriend`, `-boyfriend`, `-wife`, `-husband`, `-crush`, `navratri-wishes-long-distance` for person-specific lines. Those are unpublished parallel posts. Drop any link whose sibling does not ship.

## Phase 0 — first-party data (facts.md read, `npm run facts` NOT run)

Facts cited (byte-verbatim in `factsUsed`):
- love-gf most-viewed: 29.7% of page views (opening paragraph).
- 48.3% of shared pages opened on a phone (opening paragraph, table).
- /love-gf 1,182 created, 22.7% of pages (table).
- 38.5% of creators password-protect (table, downsides).
- Miss-you 43.5% password-protected, 11.3 views/page, n=214 (table, with the mandatory caveats in prose: views ≠ unique people, 214 pages over two months).
- Raksha Bandhan 2026 lead time, 49.4% on the day (labelled as the nearest analogue, n=89, small, not Navratri data).

No dandiya-partner usage data is cited or implied. Template features are taken only from `template-spec.md`.

**Prompt claim checked:** "facts.md: the platform is overwhelmingly romantic pages". The actual line is "the platform is 96.3% romantic **and everyday** pages" (measured 2026-09-09). It does not separate romantic from everyday, and the #1 page type is the apology dashboard (26.9%), so it does not support "overwhelmingly romantic". I used the love-gf share (22.7% created, 29.7% of views) instead.

## Phase 1 — SERP: "navratri wishes for love" (US-served (WebSearch), 2026-10-12)

| # | URL (US-served (WebSearch)) | Date | Words (approx.) | Romantic content | Structure / format | Weak? |
|---|---|---|---|---|---|---|
| 1 | punekarnews.in, "Navratri Wishes and Blessings" | 15 Oct 2023 | ~5,350 | 1 line in ~500 ("you and your partner"), addressed to a third party | Numbered list of 500 generic wishes; no table, no FAQ; NewsArticle schema | Weak (stale, generic) |
| 2 | nestasia.in, Chaitra Navratri 2024 Instagram wishes | 2024 | n/a (HTTP 403) | Chaitra, not Sharad, Navratri | Retailer blog | Weak (wrong Navratri, stale) |
| 3 | careerindia.com, "50+ Heartfelt Navratri Wishes" | undated | ~1,200 | "Wishes for Love and Peace" H2 means love in general; 0 mentions of lover/partner/spouse | 10 H2 themed lists, no table/FAQ | Weak (generic) |
| 4 | outlookindia.com brand-studio, Sharad Navratri 2024 | 26 Sep 2024 | ~1,140 | 0 partner mentions | 4 H2 lists (traditional, joyful, family, quotes) | Weak (stale, sponsored, generic) |
| 5 | lbas.lboro.ac.uk/wishes/navratri-wish.html | n/a | DNS fails | Content-farm mirror on a hijacked university subdomain | — | Weak (mirror) |
| 6–7 | thequint.com (+ fithindi mirror), Navratri 2021 | 7 Oct 2021 | ~380 | 0 partner mentions | 6 bullet wishes + images | Weak (stale, thin) |
| 8–9 | eduyush.com (+ /en-us), 170+ Happy Navratri Wishes | Last updated Sep 2026 | ~5,500 | 0 partner/lover sections; 16 uses of "love", all general | Day-wise table (Delhi panchang), 14 H2 sections incl. day-wise 9-forms wishes, Hindi, garba, FAQ + FAQPage schema | Strong for general dates; weak for romantic intent |

Weak count in top 10: **9 of 9 results lack any section written to a partner.** By the stricter test (stale, generic, mirror, wrong festival) 7 of 9 are weak; eduyush ×2 is fresh and thorough but has no romantic section.

AI Overview / featured snippet: none surfaced via WebSearch. The WebSearch summary itself said "I didn't find a dedicated set of romantic Navratri wishes in these results."

Corroboration from `content/keywords/2026-10-12-navratri-garba-dandiya/serps.md`: "navratri wishes 2026 for girlfriend boyfriend" → "none romantic"; "garba quotes for couples love" → "zero on-topic results"; "happy navratri wishes for husband wife romantic" → quint 2021, outlook 2024 etc.

**Brief claim checked:** BRIEF §4 says eduyush "titles still say 2025". The WebSearch result title read "Best Messages 2025", but the live page fetched today has H1 "170+ Happy Navratri Wishes 2026", 2026 dates and "Last updated: September 2026". The SERP snippet is stale, the page is not.

## Phase 2 — gap analysis

- **Table stakes:** Navratri dates; nine forms of Durga; garba/dandiya lines; Hindi lines; WhatsApp-length lines.
- **Gap:** no page writes to a partner. No page notes that the colour of the day follows the weekday and therefore changes every year (2026 night one orange, 2027 yellow). No page gives both 2026 and 2027 dates. No page says when a romantic wish is the wrong move (family reads phone, relationship not public, fasting-focused partner, group invite).
- **Stale data:** quint 2021, punekar 2023, outlook 2024, nestasia 2024.
- **Unanswered:** Hindi in which script? Emoji or not? Send once or nightly?
- **Fan-out sub-queries → H2s:** what makes a wish romantic; night-wise wishes; wishes by tone; in Hindi; which wish for which partner (sibling hub + table); asking them to dance (template); when not to send.
- **Angle:** Wins by being the only post that writes Navratri wishes to a romantic partner night by night, with each night's goddess and the colour for both 2026 and 2027, using SubhSandesh's 48.3% phone-open rate and 29.7% love-gf view share to set the two-line format.

## Phase 3 — sources (all fetched and read)

| Source | Type | Subject test | What it says (verified) | Read |
|---|---|---|---|---|
| Huh (2025), PLOS One, PMC12221085 | Peer-reviewed, OA (CC BY) | Partial: digital messaging and responsiveness; conversations framed as from **friends**, not partners (stated in body) | n=260, 15 conversations; emoji replies rated more responsive; responsiveness predicted closeness and satisfaction | Full text (Europe PMC XML) |
| Aron & Tomlinson (2026), Behavioral Sciences, PMC13203665 | Peer-reviewed review, OA (CC BY) | Yes: shared activities with a romantic partner | Reissman et al. 1993: exciting activities ≥1.5 h/week for 10 weeks → higher satisfaction vs pleasant-only and control; survey correlations 0.45 and 0.51 | Full text |
| Rudra et al. (2016), EMNLP, aclanthology D16-1121 | Peer-reviewed conference, OA | Yes for the Hindi section: language choice of Hindi-English bilinguals | 430,000 tweets; Hindi preferred for negative opinion and swearing; Hindi on social media seldom in Devanagari, romanised Hindi common | Full PDF |
| Drik Panchang, Ashwin Shardiya Navratri dates, New Delhi (geoname 1261481), 2026 and 2027 | Date reference (cap-exempt) | Fact-check | 2026: 11–19 Oct, Vijayadashami 20 Oct; colours Orange, White, Red, Royal Blue, Yellow, Green, Grey, Purple, Peacock Green; Ashtami + Navami both 19 Oct. 2027: 30 Sep–8 Oct, Dussehra 9 Oct; colours Yellow, Green, Grey, Orange, White, Red, Royal Blue, Pink, Purple | Page read |
| Wikipedia, Navadurga (+ the nine goddess articles' intros) | Entity disambiguation only | — | Goddess descriptors (daughter of mountain king, ascetic, moon as bell, creator releasing Sun's energy, mother of Skanda, slayer of Mahisha, fearsome, beauty and purity, giver of perfection) | Intros via API |

Finding: **Drik Panchang's default location from this machine is a US time zone (UTC−4), where Durga Ashtami 2026 shows as 18 Oct.** With New Delhi it is 19 Oct (same day as Navami). The body tells readers to check their city.

Searched and rejected: "Nine Nights of the Goddess" (SUNY 2018), closed access per OpenAlex; "United Way of Baroda: ... World's Largest Dancing Festival" (nepjol.info), connection timed out, not cited; couple-rituals Crossref hits, all paywalled scales. Queries run in findpapers.mjs: "couple rituals relationship satisfaction", "Navaratri goddess ritual nine nights", "expressing gratitude romantic partner relationship", "text messaging romantic relationships affection", "shared novel activities couples self-expansion"; OpenAlex: "navratri garba" (OA), "navaratri goddess" (OA), "hinglish code-mixing romanized social media" (OA).

Cap check (capcheck.mjs, 2026-10-12): aclanthology.org now at 3 posts including this one (cap reached, not exceeded); D16-1121 used only here. PMC is cap-exempt. drikpanchang exempt.

## Wishes

All 23 wishes (9 night-wise, 8 by tone, 6 Hindi/Hinglish) are original. No lyrics, film lines or competitor lines.

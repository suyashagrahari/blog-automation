# Research brief — garba partner captions for instagram in hindi

Batch `2026-10-12-navratri-partner-b1` · slug `garba-partner-captions-in-hindi` · bodyLanguage `hi-mixed` (English frame; every line in Devanagari + romanised Hinglish + English gloss) · written 2026-10-12

Absorbs: garba partner shayari (2-line shayari section), garba captions in hindi for couple. Autocomplete demand 5 (+ shayari 3).

## Sibling split

| Sibling | Owns | This page |
|---|---|---|
| garba-partner-captions-for-instagram | English captions grouped romantic / crush / best friend / funny / short | Organised by **script** (Roman Hinglish / Devanagari / mixed / filmi), no relationship grouping, no translated lines |
| dandiya-partner-captions-for-instagram | stick-clash moments | dandiya named only to separate the two senses |
| garba-partner-captions-in-gujarati | Gujarati / Gujlish | one line pointing Gujarati-reading families there |
| navratri-status-in-hindi | devotional status lines, character counts | no character counting; partner captions only |
| garba-partner-meaning-in-hindi | Hindi words for partner | reuses its findings consistently: गरबा पार्टनर default, साथी warm, जोड़ीदार matched pair, हमजोली childhood friend |

## Phase 0 — first-party data

`npm run facts` NOT run (BRIEF §3). Read `content/facts.md` (2026-09-24 vintage). No Navratri or /dandiya-partner usage data exists; none stated or implied.

Used (verbatim in `factsUsed`):
- Raksha Bandhan 2026 lead time (n=89, 49.4% on the day) — intro and table, labelled as the nearest analogue, not Navratri data.
- 38.5% password-protect — intro, table, FAQ (ask before tagging).
- 48.3% phone opens — table (check Devanagari matras on a phone).
- 11.1 average views per page — table (shayari row). This one is thin; it is the weakest fit of the four.

Template-spec facts (first-hand, not counted): nine lines, six photos, eight preset songs (Chogada named), five tries No→Yes, 1080×1920 Dandiya Pass, English UI, optional password (not stated as a separate claim beyond "nine lines are yours").

## Phase 1 — SERP (1 WebSearch call, US-served (WebSearch))

Query: `garba partner captions for instagram in hindi`. 9 results. India-served positions unavailable this run.

| # (US-served) | URL | Weak? | Notes |
|---|---|---|---|
| 1 | nestasia.in/blogs/news/trending-catchy-garba-captions-for-instagram | weak | retailer, generic garba captions, not partner, not Hindi; HTTP 403 to fetcher |
| 2 | eduyush.com/blogs/cover-letter/navratri-captions-for-instagram | **not weak** | fetched: H1 "200+ Navratri Captions for Instagram 2026", "Last updated: September 2026", sections Hindi (15) / Hinglish (10) / Gujarati (6) / Couples (15, all English), FAQ. Answer in first paragraph. Calendar table maps Day 8 = 18 Oct, Day 9 = 19 Oct (BRIEF §1 says that mapping is wrong for 2026). No partner-in-Hindi section, no gloss, no research. |
| 3 | eduyush.com/en-us/... (same page, US locale) | duplicate | |
| 4 | erpstaging.fha.gov.ng/?p=29861 | weak | scraped mirror; connect timeout |
| 5 | cmc.imexhs.com/tag/garba | weak | scraped mirror; connect timeout |
| 6 | eduyush.com/blogs/lifestyle/hindi-captions-for-instagram | weak for this query | fetched: 285+ generic Hindi captions, 19 categories, no garba/partner lines |
| 7 | cmc.imexhs.com/?p=4190 | weak | saree captions mirror |
| 8 | training-new.klingspor.com/?p=6281 | weak | mirror |
| 9 | training-new.klingspor.com/?p=22236 | weak | mirror |

**Weak count: 7 of 9** (only eduyush Navratri is a real incumbent, and it is not partner-specific). Gate 4 passes. serps.md corroboration: "garba night captions for couples" SERP lists the same nestasia / eduyush set.

Comparison of the two fetchable incumbents:

| Page | Direct answer | Structure | Hindi/Hinglish handling | Data | Schema/format |
|---|---|---|---|---|---|
| eduyush Navratri (2026 refresh) | first paragraph, bold | ~20 categories by post type and audience | separate Hindi (Devanagari) and Hinglish lists, no gloss, no partner focus | none; calendar only | FAQ, table, jump links |
| eduyush Hindi captions | generic intro | 19 categories | Devanagari only, titled "label: line" | none | lists |

## Phase 2 — gap

- Table stakes: Hindi + Hinglish lines, couple lines, short lines, FAQ.
- Gap: nobody gives the same line in Devanagari, Roman and English; nobody explains *which* script to post or why; no 2-line shayari for a partner; no first-garba lines for Hindi-belt readers; no research on how Hindi is actually typed; no filmi-style original lines (only lyric-adjacent lines elsewhere).
- Stale/wrong: eduyush Day 8/Day 9 date mapping for 2026.
- Fan-out: Devanagari or Roman? what is Hinglish? can I use a song lyric? 2-line shayari? Hindi word for partner? first garba captions? Navratri dates? tagging etiquette? can the invite page be Hindi?

Angle: wins by being the only post that sorts Hindi garba partner captions by script, every line in all three forms, grounded in code-mixing research and SubhSandesh's 49.4% festival-day and 38.5% password numbers.

## Phase 3 — sources (all fetched)

| Source | What it says (verified) | Read | Cap status |
|---|---|---|---|
| Dey et al. 2026, JMIR, via Europe PMC PMC13012004 (CC BY) | 4,161 Hinglish SRH queries, urban Mumbai; 61.53% transliterated Hindi (Latin script); 38.37% intrasentential mixing; CMI 37.38; Latin script "often the preferred mode of typing" for the population | full text (EBI REST XML) | europepmc exempt; URL new to batch |
| Roark et al. 2020, Dakshina, arXiv 2007.01176 | South Asian languages often written in Latin script for SMS/WhatsApp/social media; no standard romanisation; भ्रष्टाचार romanised 4+ ways | full PDF | URL now 2 posts (with -in-gujarati); arxiv.org domain now 3 (cap) |
| Cowie, Murty & Sinar, English Language and Linguistics 28.4 (Cambridge, CC BY) | Bollywood urban main characters' speech stays Hindi-matrix; citing Klingler 2017, older Delhi speakers 68% Hindi-matrix clauses, younger 75% English-matrix | full PDF | cambridge.org core: new to batch (sibling uses dictionary.cambridge.org) |
| McGregor via DSAL, शायरी p. 948 | "the art or practice of poetry; poetry" | entry page | dsal exempt |
| Drik Panchang (New Delhi geoname), 2026 and 2027 Navratri dates | 11 Oct 2026 Ghatasthapana … 19 Oct Maha Navami; 30 Sep 2027 … 8 Oct 2027 Maha Navami | fetched | date reference, not in sources/citation |

findpapers.mjs queries run: "Hindi English code-mixing social media romanized", "Hinglish Roman script Devanagari script choice social media", "code-mixing Hindi English Facebook Twitter corpus", "transliteration romanized Hindi users preference", "Hinglish", "romanized Hindi WhatsApp messages", "code-switching Bollywood film dialogue English Hindi", "Hindi film songs English code-switching", "script choice Roman Devanagari young Indians". Rejected: SyMCoM, W18-3503 and CAWL 2023 (aclanthology at cap); Bollywood-scripts diachronic paper (Sage, publisher at cap); IJCRT hits (predatory); PMC9308896 Hinglish hate-speech (off-subject).

No Instagram-specific Hinglish caption study was found; the Mumbai corpus is health questions, which the body states.

## WebSearch budget

1 of 2 used (SERP only).

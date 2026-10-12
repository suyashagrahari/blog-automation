# Research brief: garba partner captions for instagram in gujarati

- Slug: `garba-partner-captions-in-gujarati` · cluster partner-captions · bodyLanguage `gu-mixed` · demand 6
- Run date: 2026-10-12 · WebSearch calls used: **1** (SERP only) · no browser tools · no `npm run facts`
- Slug free in Strapi (API returned `data: []`).

## Phase 0: first-party data

facts.md read directly. No Navratri or /dandiya-partner usage data exists. Used (verbatim in `factsUsed`):

1. 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), measured 2026-09-24. In the first 150 words, used to justify short, Story-sized captions.
2. 38.5% of creators password-protect their page (2,000 of 5,199), measured 2026-09-24. In the first 150 words and the "wrong choice" section: public caption vs private ask.
3. Raksha Bandhan 2026 lead time, n=89: 49.4% built on the day, median 0 days. Labelled in body as a Raksha Bandhan analogue, not Navratri data.

Template facts (template-spec.md, not counted): nine lines, six photos, 1080×1920 Dandiya Pass, No turns into a second Yes after five tries, English UI, one-to-one only.

Gate: thin. The facts bear on format (phone, privacy, timing), not on Gujarati captions themselves.

## Phase 1: SERP, US-served (WebSearch)

| # US-served (WebSearch) | URL | Type / date | Weak? |
|---|---|---|---|
| 1 | nestasia.in/blogs/news/trending-catchy-garba-captions-for-instagram | Retailer blog, English | Weak: English only, no partner/Gujarati. **Fetch 403**, judged from snippet + serps.md row "garba night captions for couples" |
| 2 | cmc.imexhs.com/tag/garba | Scraped mirror | Weak. Fetch timed out |
| 3 | erpstaging.fha.gov.ng/?p=29861 | Scraped mirror ("9+ Divine Navratri Captions") | Weak. Fetch timed out |
| 4 | training-new.klingspor.com/tag/navratri | Scraped mirror | Weak (not fetched) |
| 5 | eduyush.com/en-us/blogs/cover-letter/navratri-captions-for-instagram | "200+ Navratri Captions 2026", "Last updated: September 2026" | Strongest page, but its Gujarati section is 6 generic lines (શુભ નવરાત્રી, જય માતાજી...), no Gujlish, no partner lines. Its 9-night table maps Day 8 = 18 Oct = Mahagauri, the 2026 error BRIEF §1 warns about. Weak for this keyword |
| 6 | indiatvnews.com/topic/garba-festival | Topic aggregator | Weak. Fetch 403 |
| 7 | indiatvnews.com/topic/garba-night | Topic aggregator | Weak |
| 8 | flick.social/captions/garba-look-captions-for-instagram | Caption farm, English "garba look" | Weak: off-intent (outfit), English only |
| 9 | training-new.klingspor.com/?p=22236 | Scraped mirror | Weak |

**Weak count: 9 of 9.** No result has Gujarati partner captions. Gate 4 passes.

### Top-page analysis (fetched)

| Page | Words / structure | Direct answer | Data | Format | Optimising for |
|---|---|---|---|---|---|
| eduyush | ~6k; ~20 H2 caption lists by post type, hashtag block, FAQ | First paragraph (bold) | 2026 dates (with a wrong Day 8 mapping) | Lists, table, FAQ, shop banner | Volume ("200+"), ACCA course upsell |
| flick.social | ~1.5k; best/short/funny groups | None | None | Copy-caption buttons, AI generator CTA | Caption-generator signups |

**Table stakes:** grouped caption lists, short captions, a hashtag note. **Gap:** no page has Gujarati partner captions, Gujlish, an English gloss, Gujarati-only wordplay, or typing and rendering advice for Gujarati on Instagram.

## Phase 2: gap and angle

- Fan-out → H2s: what makes a caption Gujarati-only (H2 1); the captions by device (H2 2, six H3s); where each goes (table, H2 3); how to type Gujarati, Gujlish spelling and fonts (H2 4); ask privately (/dandiya-partner, H2 5); dates (H2 6); wrong choice (H2 7).
- Grouping deliberately differs from sibling garba-partner-captions-for-instagram (romantic/crush/friend/funny/short): this post groups by the Gujarati word played on (ગરબો, ખેલૈયો, તાળી/દાંડિયા, sheri vs party plot, tone, Story-size). No sibling line was translated.
- **Angle:** wins by being the only post whose Gujarati partner captions are built on Gujarati-only wordplay, each in script, Gujlish and English, with a sourced Gujlish-spelling rule (Dakshina: 4.2 romanisations per Gujarati word) and SubhSandesh's 48.3% phone-open and 38.5% password rates.

## Phase 3: sources (all fetched)

| Source | Verified content | Date | Subject / swap |
|---|---|---|---|
| Roark et al., Dakshina dataset, arXiv 2007.01176 (LREC 2020) | Full PDF read via pdftotext. Intro: South Asian languages "often written in the Latin script ... SMS messages, WhatsApp, or social media", "no commonly used standard Latin script orthography". Table 1: Gujarati lexicon 25,000 train types, **4.2 entries per type** (entries = distinct native/romanised pairs, §3.2) | 2020-07-02 | Subject ✓ (romanised Gujarati). Peer-reviewed conference, open access. Swap risk: other *-mixed rows |
| Gujarati Lexicon ગરબો (GE) | "earthen vessel with holes in its sides and a lamp burning inside; singing, song sung, by men and women while dancing in a circle" | none | Dictionary, subject ✓ |
| Gujarati Lexicon ખેલૈયો (GG) | "ખેલ કરનાર માણસ; ખેલંદો" | none | Dictionary, subject ✓ |
| Gujarati Lexicon રમઝટ (GE) | "striking or beating vigorously and rapidly" | none | Dictionary, subject ✓ |
| Apple iOS/iPadOS 27 Feature Availability | Autocorrection list: Gujarati (Alphabetic), (InScript), (Transliteration); Gujarati under QuickType multilingual typing | none | Platform behaviour; swap risk (any Gujarati row) |
| Unicode 18.0 Gujarati chart U0A80.pdf | Range 0A80–0AFF; U+0ACD GUJARATI SIGN VIRAMA | v18.0 | Standard (cap-exempt); also cited by navratri-wishes-in-gujarati |

- gujaratilexicon.com is now at its 3-post domain cap (navratri-wishes-in-gujarati, garba-partner-meaning-in-gujarati, this post). No further Gujarati row should cite it.
- findpapers queries tried: "Gujarati English code-mixed social media text", "romanized script Indian languages social media users transliteration", "script choice multilingual Instagram posts language choice", "Indic language keyboard input mobile typing native script", "garba Navratri Gujarat youth commercialisation party plot". Garba/party-plot scholarship found was paywalled (Springer "Performing Body of Navratri") and not cited. *Computational Linguistics* 2023 "Context-aware Transliteration of Romanized South Asian Languages" returned 403 at direct.mit.edu, so it was not cited. aclanthology.org (LREC version of Dakshina) is at cap, so the arXiv version is linked.
- Kathiawadi dialect: one Glottolog lookup hit the wrong languoid (kath1250 = Kathoriya Tharu). No dialect source was found, so Group 5 is framed as tone with an explicit no-dialect-claim note.
- Dates: Navratri 2026 (11–19 Oct, Saptami 17–18, Ashtami+Navami 19), Sharad Purnima garba 25 Oct, 2027 (30 Sep–8 Oct) are BRIEF-verified; drikpanchang 2026 New Delhi page reachable. Not cited as a source (dates mentioned only). No Dussehra date printed.
- Instagram five-hashtag limit: one clause, not re-verified here (BRIEF §8 sibling). Flagged in the audit.
- Competitors never cited or linked: eduyush, flick.social, nestasia, indiatvnews topic pages, scraped mirrors.

## Notes

- /dandiya-partner described only from template-spec.md. English UI stated in body prose; one-to-one limit and group-invite exclusion stated; Gujarati rendering on that page not verified, so the post says to check the preview.
- Alternatives linked: /missyou-gf (partner away for Navratri), /templates.
- Instagram Story-font rendering of Gujarati was not tested on a device. The post says so and gives preview advice instead of a claim.

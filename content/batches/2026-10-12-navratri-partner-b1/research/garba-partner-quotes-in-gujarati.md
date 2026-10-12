# Research brief — garba partner quotes in gujarati

Slug `garba-partner-quotes-in-gujarati` · cluster partner-quotes · bodyLanguage `gu-mixed` · absorbs "my garba partner in gujarati", "garba partner shayari gujarati" · autocomplete demand rank 4.

## Phase 0 — first-party data

facts.md read by hand (no `npm run facts`). No Navratri or /dandiya-partner usage data exists. Used:

- 48.3% of shared pages opened on a phone (first 150 words; sets quote length).
- Raksha Bandhan 2026 lead time, n = 89, 49.4% built on the day (first 150 words; labelled as the rakhi analogue, not Navratri data).
- 38.5% of creators password-protect (table).
- 48.4% of views on a touch device (table).

The gate is thin for a poetry keyword: the phone line bears on length, the lead-time line on timing, and nothing in facts.md measures language or verse. Template-spec facts (nine lines, five-tries No, English UI) are used as product facts, not counted.

## Phase 1 — SERP (US-served (WebSearch), 2026-10-12, 1 call)

| # | URL | Type | Word count / structure | Direct answer? | Data and date | Weak? |
|---|---|---|---|---|---|---|
| 1 | en.wikipedia.org/wiki/Garba_(dance) | Encyclopedia | Long article on the dance | No quotes at all | n/a | Weak (off-intent) |
| 2 | ejje.weblio.jp/content/Garba | Japanese–English dictionary | Dictionary page, examples | No | n/a | Weak (off-intent) |
| 3 | ingles.com/ejemplos/garba | Spanish–English example sentences | Table of scraped sentences | No | n/a | Weak (off-intent) |
| 4 | aajtak.in … paid garba partner packages (2026-09-16) | Hindi news | Short news story | No; reports a ₹1,000 "silver package" rent-a-partner post | Sep 2026 | Weak (news, not quotes) |
| 5 | kakabhajans.org/bhajan/?id=1899 | Devotional bhajan (Kaka, 1986), Gujarati | Lyrics + translation | No; a hymn to the Mother, not partner quotes | 15-Mar-1986 | Weak (off-intent) |
| 6 | nestasia.in … garba captions for instagram | Retailer blog (Hindi/English captions) | List | 403 to fetcher; not Gujarati per SERP summary | — | Weak |
| 7 | cgiguangzhou.gov.in news | Consulate news | — | No | — | Weak |
| 8 | alumni.jntua.ac.in "Gujarati Garba Lyrics" | Scraped spam mirror | — | Lyrics, not partner quotes | — | Weak |
| 9 | narendramodi.in garba by Modi | Political page | — | No | — | Weak |

Fetched in full via ctx_fetch_and_index: #2, #3, #4, #5. #6 returned HTTP 403. #1 not fetched (known encyclopedia page; cannot be cited under the cap anyway). **Weak count: 9 of 9.** Gate 4 does not abort. Known incumbents (eduyush, flick.social, hindutone) did not appear for this keyword. Not in serps.md; nearest variants there (garba shayari hindi love: 10 weak) agree.

## Phase 2 — gap

- Table stakes: none. No ranking page offers Gujarati garba partner quotes.
- Gap: original Gujarati partner verse, in a native folk form (duha), with script + romanisation + gloss, and a sourced explanation of the form.
- Stale data: n/a.
- Fan-out: what is a duha; how many mātrā; "my garba partner" in Gujarati (મારો/મારી); shayari vs duha; who was Meghani; can a non-reader use it; when to send in 2026/2027; can it go in an invitation; group invites.
- Angle: wins by being the only post giving metre-checked original Gujarati duhas (13 + 11 mātrā) for a garba partner, with the form explained from Meghani's own essay, in three scripts/registers.

## Phase 3 — sources (all fetched)

1. **Meghani, J. (2000). Elegiac Chhand and Duha in Charani Lore. Asian Folklore Studies 59(1): 41–58** (tr. Vinod Meghani). Full text read via the Wayback snapshot of the journal's own PDF (`web.archive.org/web/20240225010304/https://asianethnology.org/article/644/download`); the live asianethnology.org URL now 404s and JSTOR (doi 10.2307/1179026) is closed. Claims used: duha "a sensitive precision scale"; rhyming two lines does not make one; "ecstasy of romance", "anguish of the parted"; "the entire class of duhas" belongs to folk song; Son and Halaman duhas ≥1,500 years old. Peer-reviewed, subject test pass.
2. **Shah, K. (2017). Shape-Shifting Sources and Illusory Targets: Jhaverchand Meghani and Saurashtrani Rasdhar. Translation Today 11(1)**, CIIL, `ntm.org.in/download/ttvol/volume11-1/Art_1.pdf`. Full text read (pdftotext). Claims: Meghani 1897–1947; travelled Saurashtra for years collecting stories, songs, ballads from various castes, occupations, genders; Rasdhar 1923–27; Loksahitya pioneer; "Rashtriya Shayar" per Gandhi. Scholarly, open access.
3. **Bhagavadgomandal, દુહો** (http, distinct URL from the sibling's જોડીદાર entry; domain now in 2 posts). Definition: two-part દોહરો; a duha needs no other to be understood; folk-literature equivalent of the anushtup shloka.
4. **Hindi Wiktionary, दोहा** (cap-exempt). 13/11 mātrā, rhyme on 2nd and 4th charan; reversed = sortha.
5. Drik Panchang 2026 Navratri page (New Delhi geoname) fetched: Pratipada 11 Oct, Ashtami + Navami 19 Oct, Vijayadashami 20 Oct. 2027 page: Navami 8 Oct, Vijayadashami 9 Oct. Fact-check only, linked in body, kept out of sources/citation (no times stated).

Second WebSearch (call 2 of 2) was spent finding the open copy of source 1.

findpapers queries tried: "Jhaverchand Meghani folk songs", "Gujarati folk poetry doha couplet", "Gujarati folk song oral tradition women garba songs", "Saurashtra charan bardic oral poetry", "doha metre Hindi prosody matra". Europe PMC returned nothing relevant; Crossref gave sources 1 and 2.

## Original verse check

All 8 duhas were run through a mātrā counter (long vowel/anusvara = 2, short = 1, short before an in-word conjunct = 2, no lengthening across word boundaries): every odd charan 13, every even charan 11, each line ending guru-laghu. Two first drafts failed (10 in the even charan) and were rewritten (મુખે; માડી, તને પ્રણામ). Lines are original; no lyric or collected verse is quoted.

## structuralLimitations / brief claims found false

- Prompt said gujaratilexicon.com had 1 slot left; capcheck showed it at its 3-post cap (coordinator confirmed mid-run). Not cited.
- The prompt's "prefer other sources than bhagavadgomandal" was relaxed by the coordinator; one distinct entry used.
- Source 1's only open copy is an archive.org snapshot; if the verifier or a reviewer requires a live publisher URL, it has none today.
- SERP is US-served; India-served positions were unavailable.
- Body word count 1,793 (plain split), close to the 1,800 ceiling; any edit that adds words needs a matching cut.

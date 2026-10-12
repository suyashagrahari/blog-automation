# Research brief — navratri wishes in sanskrit

Batch `2026-10-12-navratri-b2` · slug `navratri-wishes-in-sanskrit` · bodyLanguage `en` (English frame; every Sanskrit line in Devanagari + IAST + English meaning) · also covers: navratri shubhkamnayein in sanskrit, navratri sanskrit shlok, navratri status in sanskrit · autocomplete demand 4.

## Sibling split (BRIEF §9)

Read `navratri-wishes-in-hindi`, `navratri-ki-hardik-shubhkamnaye` and `navratri-status-in-hindi` (b1). None of them contains a single Sanskrit verse or a Sanskrit grammar note; they are Hindi-language pages (relationship register, the CHD spelling rule, Devanagari character counts). **Split: this page owns Sanskrit only — scripture verses with chapter/verse references and composed Sanskrit greetings checked against Sanskrit dictionaries — and never gives Hindi wishes.**

## Phase 0 — first-party data

facts.md read directly (no `npm run facts`). No Navratri, dandiya-partner or language-level data exists. Used, verbatim:

- 48.3% phone share of views (2026-09-24) — justifies two-line verse + IAST format, in the opening.
- Raksha Bandhan 2026 lead time, n = 89, 49.4% day-of (2026-09-09) — labelled in body as a different festival / nearest analogue, n small. In the opening and in the timing section.
- 38.5% password rate (2026-09-24) — in the /dandiya-partner section, where the password option is described.

Gate is thin: none of these is about Sanskrit. The genuinely original material is the verse-number verification and the grammar analysis.

## Phase 1 — SERP (US-served, WebSearch call 1 of 2)

Query `navratri wishes in sanskrit`. Positions are **US-served (WebSearch)**; India-served positions unavailable this run. `serps.md` has no Sanskrit row.

| # | URL | Type | Direct answer | Sanskrit accuracy | Sources / refs | Date | Weak? |
|---|---|---|---|---|---|---|---|
| 1 | thedailyguardian.com …sanskrit-mantras-661791 | News listicle | No — English wishes first, Sanskrit buried | Misquotes DM 5: "या देवी सर्वभूतानां माँ स्वरूपेण" (edition: सर्वभूतेषु मातृरूपेण); "दुर्गा सुमुखा भव मेरी शरण तुम्हारी" is Hindi; Argalā line misquoted as "देहि मे परमं सुखम्" | No chapter/verse, no edition | Updated 22 Sep 2025 (dated 2025 Navratri) | Yes |
| 2 | tring.co.in/wishes/navratri-wishes-in-sanskrit | Celebrity-shoutout seller's wishes page | Partly — intro in Sanskrit | Prints "शुभ नवरात्रिः" (bare stem + separate noun); mixes Hindi "अवसर पर", "साझा कुरुत" | None | Headed "Navratri 2024" with 2024 colours table | Yes |
| 3 | tring.co.in/quotes/navratri-quotes-in-sanskrit | Redirects to the same page as #2 | — | — | — | 2024 | Yes (duplicate) |
| 4 | thedailyguardian.com …day-3…-663318 | News listicle, day 3 only | No | Chandraghanta mantra, no source | None | 24 Sep 2025 | Yes |
| 5 | narendramodi.in …greets…navratri | PM greeting press note | n/a — not a wishes page | — | — | Fetch failed | Off-intent |
| 6–9 | pmindia.gov.in, theweek/tribune (CM greetings), ianslive, gumroad (paid PDF) | News / product | Off-intent | — | — | 2024–2025 | Off-intent / weak |

Weak count in top 10: **9 of 9 results returned** are either thin, stale (2024/2025), off-intent or contain grammar/quotation errors. Not one cites an edition, chapter or verse number. Gate 4 passes.

Competitors not cited or linked anywhere in the post. The page refers to "a widely copied wishes page" and "a circulating version" without naming them.

## Phase 2 — gap analysis

- **Table stakes:** या देवी सर्वभूतेषु, a Durga mantra, short wishes, the nine forms.
- **Gap:** no page (a) gives chapter and verse checked against an edition, (b) separates scripture from composed greetings, (c) explains the grammar of नवरात्र (n.) vs नवरात्रि, (d) gives IAST, (e) flags misquotations (Hindi माँ inside a Sanskrit verse; the Argalā line; the bare-stem "शुभ नवरात्रिः").
- **Stale data:** both incumbents are dated 2024 / 2025 festival calendars.
- **Fan-out:** how to say happy Navratri in Sanskrit; is या देवी from the Saptashati; meaning of सर्वमङ्गलमाङ्गल्ये; Sanskrit status; shlok for mother; nine-forms lines; pronunciation; why verse numbers differ; when to send.
- **Angle:** Wins by being the only post that labels every Sanskrit Navratri line as scripture (with Mārkaṇḍeya Purāṇa and Devī Māhātmya verse numbers checked against the GRETIL e-text) or as a composed greeting checked against Monier-Williams, with IAST, using SubhSandesh's 48.3% phone-view share to set the two-line format.

## Phase 3 — sources (all fetched)

1. **GRETIL, Mārkaṇḍeyapurāṇa 1–93** (SUB Göttingen, plain text, version 2020-07-31). Verified: MkP 81–93 = DM 1–13 (81.1 begins sāvarṇiḥ sūryatanayo); 13 chapters max-verse sum = 588; 24 "yā devī" verses at 85.12–85.35; śaktirūpeṇa 85.18; mātṛrūpeṇa 85.34; sarvamaṅgalamāṅgalye 91.9; śaraṇāgata 91.11; śaratkāle mahāpūjā 92.11, sarvabādhāvinirmṛkto (typo) 92.12. File says "The text is not proof-read!". Other typos seen: 85.15 "mano namaḥ", 85.31 "nītirūpeṇaṃ". Licence CC BY-NC-SA 4.0 — we quote public-domain verses and link, we do not republish the file.
2. **Monier-Williams via Cologne** — navarātra m. (Vedic 9-day period) and n. "the 9 days from the 1st of the light half of month Āśvina to the 9th (devoted to the worship of Durgā)", p. 531; no navarātri headword. Also checked: Apte (under navan: "—rātraṃ … the first nine days of the month of Āśvina held sacred to Durgā"), Shabda-Sagara (navarātra n.), PWG (m./n.); śubhāśis f. "good wishes, benediction, blessing, congratulation" p. 1083; kāmanā f. "wish, desire" p. 273; pratirātram ind. "each night" p. 663. Cap-exempt.
3. **sanskritdocuments.org, Argalā Stotra** — verse 1 "जय त्वं देवि चामुण्डे … जय सर्वगते देवि कालरात्रि नमोऽस्तु ते"; verse 12 "देहि सौभाग्यमारोग्यं देहि देवि परं सुखम्"; header "सप्तशतिपाठाङ्गत्वेन"; colophon "इति श्रीमार्कण्डेयपुराणे अर्गलास्तोत्रं". Not in GRETIL's MkP 81–93 (grep).
4. **sanskritdocuments.org, Devī Kavaca** — verses 3–5 list the nine Durgās (प्रथमं शैलपुत्री च …); header "सप्तशती पाठाङ्गत्वेन जपे विनियोगः"; latest update 2015-02-19 / 2020-05-01.
5. **sanskritdocuments.org, Navadurgā Stotra 1** — nine dhyāna verses (vande vāñchitalābhāya…). File names no older source text. Kālarātri verse is iconographic and fierce with no blessing; Kūṣmāṇḍā's first line describes a pot of surā and one drenched in blood (not quoted). Kātyāyanī line printed "दद्यादेवी" — sandhi error, corrected to दद्याद्देवी.
6. **OCHS lecture abstract, Silje Lyngar Einarsen, 7 Nov 2019** — DM "exist[s] in numerous editions today and is one of the most popular ritual texts among practicing Hindus"; lecture addresses "paratextual elements that figures in the manuscripts and printed editions … and how they impact the reception of the text". Only the abstract exists (it is a lecture page).
7. Drik Panchang (exempt date reference, New Delhi geoname): 2026 Ghatasthapana 11 Oct, Maha Navami 19 Oct; 2027 Ghatasthapana 30 Sep, Navami 8 Oct. Named in prose, not linked.

Searches tried for a peer-reviewed OA paper (findpapers.mjs, Crossref + Europe PMC): "Devi Mahatmya goddess hymn", "spoken Sanskrit revival modern usage", "Sanskrit mantra recitation", "Durga Saptashati", "Devimahatmya Markandeya Purana", "Navaratri goddess ritual recitation", "Sanskrit greeting modern Sanskrit social media". Candidates: Padoux 1993 (Persée, review of Coburn) — OA but the full text returned 403 to the fetcher, not cited; Simmons 2025 SUNY chapter on Mysore Navaratri — closed; Einarsen 2018 SUNY chapter "Navarātri in Benares" — closed (Unpaywall). WebSearch call 2 ("Devīmāhātmya recitation Navarātri scholarly article open access pdf") found the OCHS lecture and a Cambridge Digital Library manuscript record (403 to fetcher). Crossref hits from IJSR/IJAR-type journals ignored (predatory list).

## Brief claims checked

- BRIEF §1 dates: confirmed on Drik (New Delhi) for 2026 start/Navami and 2027 start/Navami.
- Prompt suggestion "शुभा नवरात्रिः": grammatical only if नवरात्रि is treated as feminine like रात्रि; none of MW, Apte, Shabda-Sagara or PWG has a navarātri headword — the dictionary form is navarātra (n.). The post gives both and explains.
- Prompt assumption that the nine dhyana lines may come from the Saptashati: they do not appear in MkP 81–93; the names come from the Devī Kavaca (a recited limb) and the dhyāna verses from a separate stotra of unstated origin. Labelled accordingly.

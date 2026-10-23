# Research brief — दिवाली पर 10 लाइन (slug: 10-lines-on-diwali-in-hindi)

Row 40 of PLAN.json · anchor "दिवाली पर निबंध 10" · language hi · phenomenon "early writing in Hindi" · measured 2026-10-22.

## Phase 0 — first-party data
- facts.md read (not regenerated; `npm run facts` not run, per BRIEF §3).
- Used: 48.3% phone opens (2026-09-24); 11.1 views per page (2026-09-24); Raksha Bandhan 2026 lead time, 49.4% built on the day (n = 89), labelled as the nearest festival analogue.
- No facts.md line measures Hindi writing, homework or Diwali usage. Relevance to the query is thin; the facts frame "sending your lines to a relative". The table therefore has no first-party column (audit failure, recorded).
- Template spec (`template-spec.md`) used for /happy-diwali features only: family mode, wish per diya, letter in shagun liffafa, ~5 min, any browser, no app/account.

## Phase 1 — SERP
Tools: WebSearch (US index, 1 search) + DuckDuckGo HTML kl=in-en (DuckDuckGo, lower confidence, 1 search). Firecrawl out of credits. 2 of 3 searches used.

DuckDuckGo India top 10: hindikona, hindivyakran (2024), dharmyaatra (HTTP 500), besthindipost, deepawali.info, hindivyakran (2025), mynachiketa, testbook, hinditok, jagranjosh (2025 nibandh). WebSearch US: successcds, careers360 (hi), eduyush, aglasem, amarujala.

| # | Page | Fetched | Page words | Structure | 2027 date | Sources | Hindi slips found (regex, 2026-10-22) |
|---|---|---|---|---|---|---|---|
| 1 | hindikona.com/10-lines-on-diwali-in-hindi | yes | ~960 | 10 lines, 5 lines, FAQ; modified 2022-12-05 | no | none | "हिन्दुओ", "पूजा करते है", "पटाखे जलाते है" |
| 2 | hindivyakran.com/2024/10/blog-post_27.html | yes | ~3,100 (with nav) | one "Class 1-5" set + निष्कर्ष | no (2024 only) | none | "कामना करते है" |
| 3 | dharmyaatra.in | HTTP 500 | — | snippet only | — | — | — |
| 4 | besthindipost.in/diwali-par-nibandh-10-lines | yes | ~1,090 | 5 sets labelled class 3/4/5/6; modified 2026-10-21 | no | none | "दिवाली हर साल … मनाया जाता है", "प्रसाद बांटते है" |
| 5 | deepawali.info/diwali-par-10-lines-in-hindi | yes | ~1,120 | 10 lines + 250–300 word essay | no | none | "आइये जानते है" |
| (WS) | successcds.net/hindi/essays/diwali-par-nibandh | yes (in place of #3) | ~3,000 | 10 lines + 100/150/200/250–300 paragraphs; modified 2023-11-09 | no | none | "मास के अमावस्या" ×3, "दिवाली धूमधाम से मनाया जाने लगा", "पूजा करते है" |

Where the answer sits: every page opens with a short intro and then a numbered list; tone third person, generic. Every page repeats the same three facts (Kartik Amavasya, Ram's 14-year return, crackers/sweets); several celebrate firecrackers.

Weak in top 10: 6 (hindikona 2022, hindivyakran ×2 blogspot, dharmyaatra down, deepawali.info, hinditok snippet-only).

Cannibalisation: b2 `10-lines-on-diwali` (English SERP) shares 0 top-10 URLs; b2 `diwali-essay-in-hindi` shares at most 2 (successcds nibandh, jagranjosh 2025 nibandh). Under the 4-URL gate.

## Phase 2 — gap
- Table stakes: 10 numbered lines, Kartik Amavasya, Ram's return, Lakshmi puja, diyas/rangoli/sweets, class labels.
- Gap: no page grades its sets by a Hindi writing skill; no page has 2027 dates, a source, or Jain/Sikh/regional observances; all five carry plural "है" slips and two mis-gender दिवाली.
- Fan-out sub-queries → H2/FAQ: lines for class 1/3/5/8; "मनाई जाती है vs मनाया जाता है"; 2027 date; Tamil Nadu date; can I copy these; Jain reason; what to write about crackers; है/हैं; sending to grandparents.
- Angle: "Wins by being the only post that grades original Hindi 10-line sets by one grammar skill per class, backed by Hindi early-reading research and dictionary-checked gender, with 2027 dates and the slips the ranking pages make."

Distinct from siblings: English 10-lines (NCERT words-per-line sizing — not reused; my table measures conjuncts/diacritics, not line length vs NCERT goals); essay-in-hindi (CBSE marking-scheme structure, 100/150/250 essays — not reused); b1 diwali-kyon-manaya-jata-hai (scripture-per-reason — only the Kalpa Sutra line overlaps as a fact, worded fresh); old happy-diwali-wishes-in-hindi (spelling दीपावली/दिवाली and आप/तुम register — not touched).

## Phase 3 — sources (all fetched)
1. Raman & Rao, Interspeech 2025, isca-archive PDF (peer-reviewed, OA, full text): Grade 3 N=595; Hindi substitutions 63.0% non-word vs English 48.5%; more non-word errors on longer words; conjuncts and diacritics flagged as the Hindi challenge. Reading, not writing.
2. Singh & Rao 2014, Indian J Radiol Imaging, Europe PMC PMC4028913 (OA, full text): linear vs nonlinear Devanagari words (फल/वाहन vs फूल/किरण); cites earlier work that nonlinear diacritics and ligatures cause most errors in dyslexic Devanagari readers. 16 adults.
3. McGregor, Oxford Hindi-English Dictionary (DSAL, cap-exempt): दीवाली f. p.500; अमावस्या f. p.52; त्योहार m. p.465; पर्व m. p.611; दीया m. p.500.
4. Jacobi, SBE 22 (1884), archive.org (public domain): Kalpa Sutra §128, p.266, the kings' illumination on Mahavira's nirvana night; Jacobi's note on Jain Kartik new-moon illumination.
5. drikpanchang 2027 Diwali calendar — date reference only (Dhanteras 27, Narak Chaturdashi/Tamil Deepavali/Kali Puja 28, Lakshmi Puja 29, Govardhan 30, Bhai Dooj 31 Oct 2027).

Searches tried for writing-specific research (none OA and allowed): "Devanagari akshara spelling acquisition children Hindi", "early writing development Hindi children matra errors", "Hindi spelling errors primary school children vowel diacritics". PMC7264392 (spelling error profiles, akshara) is Frontiers — banned.

Caps: isca-archive.org now 2 posts (with diwali-speech-in-hindi); Europe PMC, DSAL, archive.org, drikpanchang exempt. Avoided capped: PLOS ONE, help.instagram.com, ich.unesco.org Deepavali URL, cpcb noise URL, aclanthology.org.

## Set statistics (script-computed on the page's own lines)
| Set | Words | Conjunct words | Nonlinear words |
|---|---|---|---|
| 1 (Class 1–2) | 48 | 0 | 77% |
| 2 (Class 3) | 107 | 10 | 79% |
| 3 (Class 4–5) | 136 | 13 | 80% |
| 4 (Class 6) | 142 | 18 | 74% |
| 5 (Class 7–8) | 125 | 10 | 73% |

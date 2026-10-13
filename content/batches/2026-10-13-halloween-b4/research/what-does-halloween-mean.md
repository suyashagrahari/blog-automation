# Research brief: what does halloween mean (row 188)

Slug `what-does-halloween-mean` · absorbs "halloween meaning" · theme global · category `festive-beats` · written 2026-10-13.

## Phase 0: first-party data

`content/facts.md` read directly (no `npm run facts`). No Halloween usage data exists. Used three platform-wide lines verbatim: 48.3% phone opens and 90.9% publish rate (both in the first 150 words), and the Raksha Bandhan 2026 lead-time line (49.4% built on the day), labelled as the nearest measured festival. They are incidental to an etymology query; that is said in the honest assessment.

## Phase 1: SERP

Tooling: **WebSearch (US index)**, 1 of 2 searches used. Query: "what does halloween mean". 9 results.

| # | Result | Fetched? | Strong/weak |
|---|---|---|---|
| 1 | dictionary.com/e/halloween-een (Oct 2023) | Yes | Strong (competitor, never cited) |
| 2 | yahoo.com syndicated Austin American-Statesman explainer (2025) | Yes | Strong-ish (syndicated news) |
| 3 | sortiraparis.com "Why do we celebrate Halloween?" (updated 10 Oct 2025) | Yes | Weak (Paris listings site) |
| 4 | skiddle.com Halloween History (7 Oct 2022) | Yes | Weak (ticketing blog) |
| 5 | salina311.com/happy-halloween-2 | 404 | Weak |
| 6 | vocal.media | Snippet only | Weak (UGC) |
| 7 | discoveryhotels.com.vn/en/node/302 | Snippet only | Weak (hotel blog) |
| 8 | next-develop.aleteia.org | Snippet only | Weak (staging subdomain) |
| 9 | it-front.aleteia.org | Snippet only | Weak (staging subdomain) |

**Weak count: 7 of 9.** Gate 4 not triggered.

| Page | Words (approx.) | Where the answer sits | Dates and data | Format | Optimises for |
|---|---|---|---|---|---|
| dictionary.com | ~900 | H2 1, after a scene-setting intro | "first records... around the 1550s"; Samhain "sah-win", "some scholars believe... summer's end" | H2 Q&A, links to own entries | Definition + Samhain + Day of the Dead |
| yahoo / Statesman | ~1,200 | Mid-page H2 | Cites Merriam-Webster: "Hallow-e'en by the 16th century", modern spelling "by the 18th century"; NRF 73%; History.com chain (Gregory III, 8th c.) | News explainer, H2s | "When is Halloween 2025" + origin |
| sortiraparis | ~1,000 | Para 3 onwards | Celtic/Samhain chain, unsourced | Listings article | Paris event traffic |
| skiddle | ~1,100 | First bold Q | States Halloween "means holy evening"; Allhallowtide three days; unsourced | Blog listicle | Event-ticket traffic |
| salina311 | n/a | 404 | n/a | n/a | n/a |

**SERP overlap with b2 `history-of-halloween`:** 0 of 9 URLs and 0 domains against its recorded search 1 ("history of halloween"); 1 shared domain, skiddle.com, against its search 2 ("who made halloween origin").

## Phase 2: gap

- Table stakes: All Hallows' Eve → Halloween; hallow = saint/holy; All Saints 1 Nov; Samhain.
- Gap: the top pages give three conflicting first-use dates (1550s, "16th century", and the common "1745") and none links a dictionary that shows them. Skiddle says the word "means holy evening", which conflates the noun hallow (saint) with the adjective hallowed. None measures Halloween vs Hallowe'en usage; none gives other-language names with literal meanings; none corrects "Samhain god of the dead" or "devil's night".
- Fan-out sub-queries → H2/H3/FAQ: what hallow means; what e'en means; spelling; when first used; Samhain meaning and pronunciation; All Hallows vs All Saints vs All Souls; Halloween in Irish; other languages; what it means today; misconceptions.
- Angle: wins by being the only post that dates every part of the word against linked dictionaries and measures the spelling split itself.

## Phase 3: sources (all fetched)

| # | Source | Type | Verified claim |
|---|---|---|---|
| 1 | etymonline.com/word/Halloween (+ /hallow) | Etymological dictionary | Live page 403 to bots; read on Wayback snapshot (2025). Halloween 1560s Scottish; All Hallowen mid-15c.; "alle halwe eue" c. 1300; hallow (n.) saint, OE halga, obsolete except in Halloween; Hallowtide 15c.; Montgomerie Flyting 1621; Burns 1785 |
| 2 | dsl.ac.uk/entry/snd/hallow_n2 | Scottish National Dictionary (1960 Vol V, 2005 suppl.) | Halloween = eve of All Saints, 31 Oct; hallaleen 2000s; Auld Hallowe'en 11 Nov OS; 1745 "keep our halyeen" (oldest SND quote; SND covers 1700+); Burns 1786; Tam Lin a.1792; Ulster halloweve/haleve and the 1930 "educated circles" remark; Hallowday, Hallowmas, Hallow-fair |
| 3 | dil.ie/36129 (eDIL "samain") | Scholarly historical dictionary | 1 November, the festival on that date, All Saints' Day in religious contexts; glossary etymology sam-fuin "end of summer" |
| 4 | teanglann.ie/en/fgb/Samhain | Ó Dónaill 1977 | Samhain = November; Lá Samhna = 1 Nov, All Hallows; Oíche Shamhna = Hallowe'en |
| 5 | doi.fil.bg.ac.rs Heppa 2025, Folkloristika 10/2:239–244 (doi:10.18485/folk.2025.10.2.9) | **Scholarly, open access (CC BY-NC-ND), full PDF read**; journal labels it "fieldwork material" | Interviews Jan–Apr 2025; Ruby 93 "Nothing!"; Roud north-south line; Opie & Opie 1959 "never associated with paganism"; Halloween 1978 and E.T. 1982; pumpkins replaced turnips; Serbian summary "Ноћ вештица" |
| 6 | books.google.com Ngram (en-GB-2019, en-US-2019) | Corpus, our own query via the JSON endpoint 13 Oct 2026, case-sensitive, smoothing 0 | GB: Hallowe'en last majority 1992; 77.3% (1920s), 43.3% (1980s), 11.6% (2015–19). US: last majority 1946; 1.8% (2015–19) |

Verified but not linked in the body: Wiktionary Samhain (IPA Connacht /sˠaunʲ/, Munster /sˠɑ̃u(ə)nʲ/; alternative etymologies), Oidhche Shamhna, Calan Gaeaf ("the Calends of Winter", All Saints' Day; Nos Galan Gaeaf = All Hallows' Eve), Allerheiligen (calque of omnium sanctorum, 1 Nov), Devil's Night (30–31 Oct pranks, esp. Michigan) and Mischief Night (UK 30 Oct; US esp. New Jersey); jisho.org ハロウィン / ハロウィーン.

- Subject test: all six are about the word, its relatives or the festival's meaning. Swap test: none would sit unchanged in another b4 post.
- Generic statistic: none.
- Wikipedia: 0 body links (sameAs only, verified via API: Halloween Q251868, Samhain Q207365, All Saints' Day Q587, All Souls' Day Q1033140, Robert Burns Q81960).
- Caps (capcheck 2026-10-13): every domain is new to b4; books.google.com is exempt.
- Avoided: dictionary.com, Merriam-Webster (both competitor/top-5-adjacent; M-W also 403), Wiktionary Halloween (b3 eve-greetings), theconversation.com (one b4 slot left; Bitel/Whitaker spent), Europe PMC papers of why-is-halloween-celebrated, NRF.
- Searched without a usable OA hit: findpapers "Halloween folklore meaning", "Samhain Hallowe'en Irish calendar custom", "Halloween ritual death religion", "calendar festival All Saints folk religion" (results paywalled JSTOR/OUP, Frontiers, or off-topic).

## Brief claims checked (§0)

- **"Earliest attested use c. 1745 Scottish"**: half right. 1745 is the SND's oldest quotation ("halyeen"), but the SND covers only 1700 onward; Etymonline dates the Scots short form to the 1560s. Dictionary.com says 1550s. OED could not be opened.
- **"Hallowe'en is still used in UK/Canada"**: UK verified only as a minority book spelling (11.6%, 2015–19). Canada not measured; no Canadian Ngram corpus, so the body makes no Canada claim.
- **"Samhain means summer's end"**: a medieval gloss (eDIL), one theory among several; modern Irish Samhain = November.
- Sibling consistency: Samhain continuity is described as disputed, matching why-is-halloween-celebrated; Allhallowtide gets one definition line in new wording; Ireland gets one line (Oíche Shamhna); colours are not mentioned.

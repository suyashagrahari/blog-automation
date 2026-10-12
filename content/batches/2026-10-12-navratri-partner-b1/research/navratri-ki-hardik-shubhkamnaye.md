# Research brief — navratri ki hardik shubhkamnaye

- Slug: `navratri-ki-hardik-shubhkamnaye` · cluster wishes-language · bodyLanguage `hi` · demandRank 1
- Absorbs: "navratri ki hardik badhai", "नवरात्रि की हार्दिक शुभकामनाएं"
- Autocomplete evidence (`content/keywords/2026-10-12-navratri-garba-dandiya/ac-hi/autocomplete.csv`): "नवरात्रि की हार्दिक शुभकामनाएं" scored 1251 (highest row containing the phrase), "navratri ki hardik badhai" 600; romanised variants seen: shubhkamnaye, shubhkamnaen. "shubhkamnayein" was NOT in our autocomplete data, so the post does not claim it.
- Sibling split: `navratri-wishes-in-hindi` owns relationship-wise message sets (34 messages, aap/tum/tu). `navratri-status-in-hindi` owns short status lines. This page owns the phrase: meaning, spelling, choosing between हार्दिक शुभकामनाएँ, बधाई, मंगलकामनाएँ and अभिनंदन by register and by day, plus 12 formal greetings grouped by the word they use.
- WebSearch calls used: 2 of 2 (1 SERP, 1 for the CHD spelling standard).

## Phase 0: first-party data

facts.md was read directly. `npm run facts` was not run. Lines used, copied verbatim:

1. Raksha Bandhan 2026 lead time, n=89: 49.4% built on the festival day, median lead 0 days. Disclosed in body prose as a Raksha Bandhan analogue, not Navratri data.
2. 48.3% of shared pages opened on a phone (measured 2026-09-24).
3. Occasion-dated pages are 144 of 3,894 (3.7%); the platform is 96.3% romantic and everyday pages. Used only in the "wrong choice" section.

Gate assessment: **thin.** No line concerns greeting words. Facts 1 and 2 bear on when and where the greeting is read, not on the phrase. No dandiya-partner or Navratri usage is stated or implied.

## Phase 1: SERP (US-served, WebSearch, 2026-10-12)

Query: `navratri ki hardik shubhkamnaye`. The 41-SERP log `serps.md` has no row for this keyword or a near variant (grep for shubhkamna/hardik/शुभकामन found none).

| # | URL (US-served) | Type / date | Words (article) | Headings | Direct answer? | बधाई / मंगलकामना / spelling / boss | Weak? |
|---|---|---|---|---|---|---|---|
| 1 | smartpuja.com/blog/wp-json/…/23343 | WP JSON endpoint; 404 | 0 | — | — | — | weak (dead) |
| 2 | lutonhoo.oandg.co.uk/en/navratri-wishes-in-hindi.html | Scraped mirror (BRIEF incumbent) | n/a: ENOTFOUND | — | — | — | weak (mirror, unreachable) |
| 3 | prabhatkhabar.com …chaitra-navratri-2021… (amp) | Hindi news, Chaitra Navratri 2021-04-13 | ~573 | 9, shayari headers | No; a wish dump | हार्दिक ×2, बधाई 0, मंगलकामना 0, chandrabindu 0, boss 0 | weak (stale, wrong Navratri) |
| 4 | same, non-amp | duplicate of #3 | — | — | — | — | weak (duplicate) |
| 5 | smartpuja.com/blog/navratri-wishes/ ("14 Best Navratri Wishes 2023") | Now redirects to /puja-services | ~1,430 (services page) | 2 | No | 0 everywhere | weak (redirect, 2023) |
| 6 | ianslive.in …celebrities…navratri 2023-10-15 | Celebrity news | ~429 | 1 | No | — | weak (off-intent) |
| 7–8 | thedailyguardian.com …shubhkamnaen-messages-sanskrit-mantras (amp + canonical) | Wish list, author Kshitiz Dwivedi, updated 2025-09-22, dates 2025 | ~554 | 3 (Warm Wishes / Sanskrit Mantras / Significance) | No definition of the phrase; gives नवरात्रि की हार्दिक शुभकामनाएं + transliteration | हार्दिक ×2, शुभकामनाएं (anusvara) ×2, no बधाई/मंगलकामना/spelling | weak (2025 dates, no explanation) |
| 9 | radcity.net/?p=19647 | 2017-08-17 shayari on a spam-heavy general site | ~1,517 page incl. sidebar | 17 (mostly sidebar product lists) | No | "Hardik Shubkamnaye" misspelt, 0 others | weak (2017, spam) |

**Weak count: 9 of 9 results** (dead, mirror, stale 2017/2021/2023/2025, off-intent). Gate 4 does not trigger. No AI Overview text was returned. WebSearch's summary listed the spelling variants shubhkamnayein/shubhkamnaen/shubkamnaye.

Competitors were not cited or linked. smartpuja (puja-booking seller) and the wish pages count as competitors.

## Phase 2: gap analysis

- **Table stakes:** the phrase in Devanagari plus transliteration; a Maa Durga blessing line; ready-to-send messages.
- **The gap:** no result says what हार्दिक or शुभकामना means, how they differ from बधाई, मंगलकामना or अभिनंदन, which one fits a boss, an elder or a friend, or which spelling is standard. Every result writes शुभकामनाएं (anusvara) and none mentions the CHD standard.
- **Stale data:** the dated pages carry 2021, 2023 and 2025 festival dates. This post gives 2026 and 2027 dates, verified against Drik Panchang.
- **Fan-out sub-queries, each mapped to an H2 or FAQ:** meaning; शुभकामनाएँ vs शुभकामनाएं; की vs के; बधाई vs शुभकामना; whether बधाई is OK for a boss; who sends मंगलकामनाएँ; बधाइयाँ vs बधाईयाँ; Dussehra wording; 2027 dates; SubhSandesh for family greetings.
- **Angle:** wins by being the only result that explains the phrase itself (the CHD 2024 chandrabindu rule, dictionary-cited word differences, register and day), using SubhSandesh's Raksha Bandhan same-day-build rate (49.4%) as the disclosed timing analogue.

## Phase 3: sources (each fetched and read)

| Source | What was verified | Date | Type |
|---|---|---|---|
| CHD, "देवनागरी लिपि एवं हिंदी वर्तनी का मानकीकरण", revised 2024 (chd.education.gov.in PDF, 56 pp; full text extracted) | §3.6.2.5 pp. 28–29: aa/ii-ending feminine plurals take chandrabindu only (लताएँ, महिलाएँ, नदियाँ). Bindu replaces it only where a vowel sign sits above the headline (में, भैंस). Newspapers, magazines and sometimes textbooks use anusvara instead. §3.6.2.1: correct chandrabindu use "अनिवार्य" | 2024 | Official standard (subject: the language) |
| McGregor, Oxford Hindi-English Dictionary (DSAL), हार्दिक | p. 1070: "cordial, hearty (as greetings, congratulations); heart-felt" | 1993 | Dictionary |
| McGregor (DSAL), मंगल | p. 777: मंगल-कामना "good wish(es); benevolence". The नव entry lists नवरात्र m. and नवरात्रि f. (read, not separately cited). Also read: शुभ p. 953 (शुभकामना f. good wish), बधाई p. 704, अभिनंदन p. 48 | 1993 | Dictionary |
| Bahri, Learners' Hindi-English Dictionary (DSAL), शुभ | p. 616: "~ कामनाएँ best wishes", printed with chandrabindu | 1989 | Dictionary |
| Bahri (DSAL), बधाई | p. 439: "congratulations; हार्दिक ~; जन्मदिन (जीत/विजय, नववर्ष) की ~". Also read: अभिनंदन p. 20 "felicitations", मंगल "~ कामना good wishes, benediction" | 1989 | Dictionary |
| Gupta, "Vocative Interjections in Address Forms in Bhojpuri: A Study of Honorifics", Investigationes Linguisticae 32 (pressto.amu.edu.pl, OA full text read) | Data from 10 Bhojpuri films. The Honour Level is governed by age, caste, social and occupational status, education, kinship and ceremonial situations | 2015-12-31 | Peer-reviewed, OA; Bhojpuri not Hindi (disclosed) |
| Drik Panchang, Ashwin Shardiya Navratri pages, 2026 and 2027 (fetched) | 2026: Ghatasthapana Sun 11 Oct, Vijayadashami Tue 20 Oct. 2027: Ghatasthapana Thu 30 Sep, Vijayadashami Sat 9 Oct | n/a | Date fact-check (cap-exempt, kept out of sources/citation) |

Considered and dropped:
- Alghazo et al. 2021, Ampersand (congratulating speech act; OA CC BY-NC-ND). ScienceDirect returned 403, so only the abstract was readable, and the study is on Kabyle and Arabic.
- BIS draft Devanagari standard PDFs (404).
- Waldvogel 2007, JCMC (not OA per OpenAlex).

findpapers.mjs queries tried: "Hindi politeness honorifics address forms", "festival greeting messages WhatsApp India", "congratulating good wishes speech act politeness", "Devanagari Hindi orthography spelling variation nasalization", "Hindi pronouns aap tum honorific", "Navaratri Durga goddess festival", "workplace greetings hierarchy India email politeness".

Caps: `capcheck.mjs` run. dsal.uchicago.edu is exempt (dictionary). chd.education.gov.in and pressto.amu.edu.pl are new to the batch. drikpanchang is exempt.

Wikipedia API checks: Navaratri Q10269, Central Hindi Directorate Q3634629, Chandrabindu Q993517, Anusvara Q612871, Vijayadashami Q10274. Used for sameAs only; there are no Wikipedia body links.

## Brief and prompt claims checked

- The prompt said to "link" the sibling navratri-wishes-in-hindi. BRIEF §2 limits internal links to TEMPLATE_LINKS, so the sibling is named in prose without a link.
- The prompt said "शुभकामनाएं/शुभकामनाएँ — verify against … Central Hindi Directorate standard". Verified: the standard form is शुभकामनाएँ.
- BRIEF calendar: confirmed by Drik Panchang for 2026 and 2027. Drik labels the 2026 "Navratri Days" as Oct 11 to Oct 20, counting Vijayadashami.

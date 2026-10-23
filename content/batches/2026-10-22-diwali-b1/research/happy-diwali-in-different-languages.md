# Research brief: happy diwali in different languages

Row 27 (wave 2). Anchor: "happy diwali" (secondary of wave-1 row `diwali-2027-date`). Secondaries: happy diwali in tamil / kannada / marathi / sanskrit. Written 2026-10-22.

## Phase 0: first-party data

No Diwali usage data exists. Used (verbatim from facts.md): 48.3% phone opens; 11.1 views per created page; Raksha Bandhan 2026 lead time (n = 89, labelled as the nearest festival analogue). Template spec used for /happy-diwali features only. 3 facts, 2 inside the first 150 words.

## Phase 1: SERP (measured 2026-10-22, Firecrawl search, location India; 1 search)

| # | URL | Type | Answer position | Structure / data | Notes |
|---|---|---|---|---|---|
| 1 | happydiwali.org/wishes | Wishes site | Long Hindi/English wish at top | 11 languages, multi-sentence WhatsApp messages; no meanings, no sources, undated | Competitor (wishes farm) |
| 2 | diwaliinlondon.com/dil-wishes-in-different-languages | Event organiser blog, 15 Apr 2024 | First line | 16 languages, native script only, no transliteration or meaning | Typos: Kannada ಹಬ್ನದ (for ಹಬ್ಬದ), Marathi अणि (for आणि) |
| 3 | youtube.com/watch?v=oOSglM-dmmI | School video, 9 Nov 2023 | n/a | Not fetched | Video |
| 4 | dnaindia.com (how to wish Happy Diwali in 30 languages) | News, 2015 updated 2018 | After intro | 30 lines, mostly Roman; no sources | Same Marathi अणि typo; "Asomese" line printed in Devanagari |
| 5 | scribd.com WPS document | User upload | n/a | Not fetched; judged from snippet | |
| 6 | ling-app.com/blog/diwali-greetings | Language-app blog, pub 9 Oct 2025, updated 20 Oct 2026 | Quick answer at top | 10-language table: script, Roman, usage note; FAQ | No sources; gives Gujarati as "Diwali Mubarak" only |
| 7–10 | news18.com (2022), in.pinterest.com, simonandsimon.co.uk (2023), indianshelf.in (2025) | | | Judged from snippets | |

Weak in top 10: 7 (video, pin, uploads, small blogs, old news). Tone: third person, lists of lines, no dictionary or source for any word, no literal meanings except ling-app's usage notes.

**Cannibalisation gate (BRIEF §9):** anchor sibling `diwali-2027-date` recorded top 10 (gheestore, drikpanchang, timeanddate, samvat, facebook, calendardate, purohit, publicholidays, youtube, fb-answers). Shared URLs with this SERP: **0**.

## Phase 2: gap analysis

- Table stakes: Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Bengali greetings in native script.
- Gap: no page verifies a single word against a dictionary; none gives a word-by-word literal meaning; none says which day each region greets; two of the top five carry spelling errors; none says what it could not verify.
- Stale: DNA list from 2015/2018.
- Fan-out: Tamil / Kannada / Marathi / Sanskrit forms; what Deepavali means; Diwali vs Deepavali; Nepali name (Tihar); Gujarati Saal Mubarak; Tamil plural spelling; when each region greets in 2027.
- Angle: wins by being the only page in the India top 10 that checks every word against a named dictionary page, lists what it could not verify, and ties each language to the 2027 day its own dictionary gives.

## Phase 3: sources (all fetched 2026-10-22)

Cited (6; all body links):
1. Turner, CDIAL entry 6358 dīpāvali (DSAL; OUP 1962–1966, supplements 1969–1985 per DSAL title page) — reflexes across Indo-Aryan, diwālā 'bankruptcy', Kutchi ḍīyārī 'last day of the year'. https://dsal.uchicago.edu/cgi-bin/app/soas_query.py?qs=d%C4%ABp%C4%81vali&searchhws=yes&matchtype=exact
2. Tamil Lexicon (Univ. of Madras 1924–1936), தீபாவளி p. 1942 (dawn, 14th of dark Aippaci; second sense 'insolvent'). https://dsal.uchicago.edu/cgi-bin/app/tamil-lex_query.py?qs=%E0%AE%A4%E0%AF%80%E0%AE%AA%E0%AE%BE%E0%AE%B5%E0%AE%B3%E0%AE%BF&searchhws=yes&matchtype=exact
3. Kittel's Kannada-English Dictionary (rev. ed., Univ. of Madras 1968–1971), ದೀಪಾವಳಿ p. 838 (Bali, śuddha pāḍya of Kārttika). https://dsal.uchicago.edu/cgi-bin/app/kittel_query.py?qs=%E0%B2%A6%E0%B3%80%E0%B2%AA%E0%B2%BE%E0%B2%B5%E0%B2%B3%E0%B2%BF&searchhws=yes&matchtype=exact
4. Molesworth, Marathi-English (2nd ed. 1857), दिवाळी p. 414 (Narakachaturdashi to Yamadvitiya). https://dsal.uchicago.edu/cgi-bin/app/molesworth_query.py?qs=%E0%A4%A6%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B3%E0%A5%80&searchhws=yes&matchtype=exact
5. Madhani et al., Aksharantar, Findings of EMNLP 2023 (peer-reviewed, open access; abstract read). https://aclanthology.org/2023.findings-emnlp.4/
6. Unicode Consortium, Indic Scripts and Languages FAQ (undated). https://www.unicode.org/faq/indic.html

Peer-reviewed: Aksharantar (abstract only). Scholarly: Turner CDIAL, Tamil Lexicon. Generic context statistic: none. Wikipedia: none in body.

## Word-by-word verification log (22 Oct 2026)

All DSAL lookups use `https://dsal.uchicago.edu/cgi-bin/app/<dict>_query.py?qs=<word>&searchhws=yes&matchtype=exact`; Wiktionary via the en.wiktionary.org API.

| Language | Greeting | Verified | Not verified |
|---|---|---|---|
| Hindi | दिवाली की शुभकामनाएँ | Wiktionary दिवाली (usage example "Happy Diwali!"), शुभकामना, हार्दिक; Platts दिवाली p. 531 | — |
| Urdu | دیوالی مبارک | Platts ديوالي p. 560; مبارك p. 988 ('congratulations') | — |
| Sanskrit | दीपोत्सवस्य शुभाशयाः | Apte दीपः p. 817 (-आवली, -उत्सवः 'festival called Diwali'), शुभ p. 1562, आशयः p. 367 (senses 7, 12), उत्सवः p. 415; Wiktionary दीपावलि (Sanskrit, f. i-stem) | Compound शुभाशयाः (modern usage). Monier-Williams API at uni-koeln returned 403 |
| Marathi | दिवाळीच्या हार्दिक शुभेच्छा | Molesworth दिवाळी p. 414, आणि p. 67, सर्व p. 832; Wiktionary शुभेच्छा (Marathi), दिवाळी | हार्दिक checked in Hindi entry only |
| Gujarati | દિવાળીની શુભકામનાઓ; સાલ મુબારક | Wiktionary શુભકામના (usage example verbatim), દિવાળી, સાલ મુબારક ('Happy New Year'), મુબારક | Belsare on DSAL returned 404; નૂતન વર્ષાભિનંદન not found, not used |
| Punjabi | ਦਿਵਾਲੀ ਦੀਆਂ ਵਧਾਈਆਂ | Wiktionary ਦਿਵਾਲੀ (citing Maya Singh 1895), ਵਧਾਈ, ਵਧਾਈਆਂ | ਦੀਆਂ (grammar); ਦੀਵਾਲੀ spelling has no Wiktionary entry |
| Bengali | শুভ দীপাবলি | Samsad শুভ p. 782; Wiktionary দীপাবলি (learned borrowing), শুভেচ্ছা | দীপাবলি not a Samsad headword |
| Odia | ଦୀପାବଳିର ଶୁଭେଚ୍ଛା | Purnachandra ଦୀପାବଳି p. 3788, ଶୁଭେଚ୍ଛା p. 7754, ଶୁଭ p. 7749 | -ର ending (grammar) |
| Assamese | দেৱালীৰ শুভেচ্ছা | Wiktionary দেৱালী (Assamese) | শুভেচ্ছা in Assamese; -ৰ ending; pronunciation |
| Nepali | तिहारको शुभकामना | Wiktionary तिहार (synonym दिपावली), शुभकामना (Nepali) | -को ending (grammar) |
| Tamil | தீபாவளி நல்வாழ்த்துகள் | Tamil Lexicon தீபாவளி p. 1942, நல் p. 2169, வாழ்த்து p. 3620; Wiktionary வாழ்த்து (plural வாழ்த்துகள்), இனிய, தீபாவளி | நல்வாழ்த்து not a Lexicon headword (compound) |
| Telugu | దీపావళి శుభాకాంక్షలు | Brown ఆకాంక్ష p. 107, శుభము p. 1262; Wiktionary దీపావళి, శుభాకాంక్షలు ('greetings') | — |
| Kannada | ದೀಪಾವಳಿ ಹಬ್ಬದ ಶುಭಾಶಯಗಳು | Kittel ದೀಪಾವಳಿ p. 838, ಹಬ್ಬ p. 1707, ಶುಭ p. 1537, ಆಶಯ p. 176; Wiktionary ದೀಪಾವಳಿ, ಹಬ್ಬ | Compound ಶುಭಾಶಯ (no headword in Kittel or Wiktionary) |
| Malayalam | ദീപാവലി ആശംസകൾ | Gundert ആശംസ p. 94; Wiktionary ദീപാവലി, ആശംസ | Plural -കൾ (grammar) |
| Konkani | — | — | Omitted: no Konkani dictionary found with a greeting |

Dates: Drik Panchang 2027 Diwali calendar (date reference only, not linked): Tamil Deepavali, Narak Chaturdashi and Kali Puja Thu 28 Oct; Lakshmi Puja Fri 29 Oct; Govardhan Puja / Bali Pratipada Sat 30 Oct; Bhaiya Dooj / Bhau Beej Sun 31 Oct. TN holiday-list conflict (29 Oct) per BRIEF §1, stated not resolved.

Wikidata pairs (Wikipedia API): Diwali Q10244, Languages of India Q135595, Tihar (festival) Q15128500, Transliteration Q134550, Brahmic scripts Q467037.

## Research searches tried (findpapers.mjs, no budget)

"Diwali festival regional names India languages"; "greetings politeness Indian languages festival wishes"; "multilingual India script choice messaging transliteration romanized"; "Deepavali Tamil Nadu ritual oil bath festival". No topical paper on festival greetings found; Aksharantar found via WebSearch (site:aclanthology.org).

## Brief claims checked

None found false. BRIEF §1 Tamil Nadu conflict reproduced as a conflict.

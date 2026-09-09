# Research brief — `ganesh-chaturthi-wishes-in-marathi`

- **Primary keyword:** happy ganesh chaturthi wishes in marathi
- **Folded-in secondary:** ganesh chaturthi quotes in marathi
- **Research field (mine alone in this batch):** sociolinguistics — Marathi script choice, Devanagari vs Roman transliteration, code-switching and regional identity in digital messaging
- **Category:** `indian-festivals`
- **Date facts verified:** Ganesh Chaturthi 2026 = **Monday 14 September 2026**; visarjan / Anant Chaturdashi = **Friday 25 September 2026**. Weekdays confirmed by calendar computation; the dates match the batch brief and multiple 2026 festival calendars. No muhurat time is stated in the post, so no panchang appears in `sources` or `citation`.

---

## Phase 1 — SERP analysis

Live search on 2026-09-09 for `happy ganesh chaturthi wishes in marathi`. Every visible organic result is a low-authority Marathi quote farm. **All are competitors under `references/competitors.md` ("greeting-message and wishes content farms"), so none is cited, linked or structurally mirrored.**

| # | Page | Format | Direct answer? | Data cited | Structure | What it optimises for |
|---|---|---|---|---|---|---|
| 1 | marathiquotez.in — "[1194+] Happy Ganesh Chaturthi Wishes In Marathi" | Blockquote dump, ~1,200 lines | No — two paragraphs of Marathi boilerplate first | None | H2 per keyword variant, image per section, internal links to sibling quote pages | Count in the title, keyword stuffing across five near-identical H2s |
| 2 | marathiya.com (three of top four positions) | Same | No | None | Same | Same |
| 3 | marathiquote.com — "…Wishes in Marathi 2026" | Same | No | None | Same | Year stamp |
| 4 | marathiquote.net — "[1165+]…" | Same | No | None | Same | Count in title |
| 5 | marathibhau.com — "BEST गणेश चतुर्थीच्या शुभेच्छा…" | Same | No | None | Three keywords crammed into one slug | Slug-level keyword stuffing |

Common properties of all five, verified by fetching one in full and reading the titles/snippets of the rest:

- **Devanagari only.** No transliteration, no gloss, no register guidance.
- **No date.** None states when Ganesh Chaturthi 2026 falls.
- **No sources, no author, no schema beyond the WordPress default.**
- **Sanskrit shlokas listed as "Marathi wishes."** `वक्रतुंड महाकाय सूर्यकोटि समप्रभ` appears in the top result's Marathi wish list; it is Sanskrit.
- **Hindi loanwords in "Marathi" lists** — the शुभकामनाएँ / शुभेच्छा confusion is common across the category.
- No AI Overview was returned for the query.

There is no strong incumbent. The differentiator is not volume — nobody beats 1,194 quotes — it is being *about Marathi* rather than being *a pile of Marathi*.

## Phase 2 — Gap analysis

**Table stakes (must include or the page looks incomplete):**
- `गणेश चतुर्थीच्या हार्दिक शुभेच्छा` and `गणपती बाप्पा मोरया, मंगलमूर्ती मोरया`
- A block of ready-to-send Marathi wishes in Devanagari
- Short lines usable as a WhatsApp/Instagram status (the folded-in "quotes" intent)
- The visarjan line `पुढच्या वर्षी लवकर या`

**The gap — none of the five covers any of this:**
1. **Roman transliteration and an English gloss per wish.** A reader who speaks Marathi but does not read Devanagari fluently — a very large group — cannot use any of the five pages.
2. **Register.** तू vs तुम्ही, and which line is safe for an uncle versus a caption.
3. **Which script to send in**, and any evidence for the answer.
4. **That Marathi Devanagari is not Hindi Devanagari** — different preferred glyphs for the same code points.
5. **Sanskrit mislabelled as Marathi.**
6. **The 2026 dates**, and that the visarjan line is wrong on day one.
7. **Any first-party data at all.**

**Stale data:** none of the five cites a statistic of any age, so there is nothing to supersede. That is itself the opening.

**Fan-out sub-queries → H2s / FAQs:**

| Sub-query | Where it lands |
|---|---|
| what to say on ganesh chaturthi in marathi | H1 answer paragraph + H3 list |
| what does ganpati bappa morya mean | H2 "What 'Ganpati Bappa Morya' actually means" |
| ganesh chaturthi wishes in marathi text | H2 with 8 H3s |
| devanagari or english letters for marathi | H2 "Devanagari or Roman letters" |
| why marathi devanagari looks different | H2 "Why Marathi Devanagari does not look like Hindi Devanagari" |
| ganesh chaturthi quotes / status in marathi | H2 "Ganesh Chaturthi quotes in Marathi for a status or caption" |
| how to send ganesh chaturthi wishes | H2 "Four ways to send the wish, compared" |
| ganesh chaturthi 2026 date / visarjan date | answer paragraph + FAQ |
| shubhechha vs shubhkamnaye | definition H2 + FAQ |
| is vakratunda mahakaya marathi | quotes H2 + FAQ |

**Angle (`batchMeta.angle`):** wins by being the only post that gives real Marathi Ganesh wishes in Devanagari **with** Roman transliteration and a literal English gloss, settles the Devanagari-vs-Roman question with the 5M/5M split in L3Cube's Marathi corpus and the Unicode Marathi allographs, and prices the delivery format against SubhSandesh's platform-wide 49.6% mobile-open rate.

## Phase 3 — Sources

Searched the phenomenon, not the keyword: `roman script devanagari digital messaging sociolinguistics`, `marathi english code-mixed corpus romanized`, `digraphia script choice identity india`, `shodhganga marathi sociolinguistic code switching`, `marathi pune language shift identity open access`. Shodhganga surfaced no thesis whose full text could be opened and verified; the Critical Asian Studies paper on Marathi mother-tongue activism in Pune is paywalled and was therefore not used rather than cited from an abstract.

Five sources, all fetched and verified against the text of the page:

| # | Source | Verified claim used | Published | Test |
|---|---|---|---|---|
| 1 | [Aksharantar](https://aclanthology.org/2023.findings-emnlp.4/), Findings of the ACL: EMNLP 2023 | Abstract: "Transliteration is very important in the Indian language context due to the usage of multiple scripts and the widespread use of romanized inputs"; 26M pairs, 21 Indic languages, 12 scripts, 103k-pair test set | Dec 2023 | Subject ✓, peer-reviewed ✓, open access ✓ |
| 2 | [My Boli / L3Cube-MeCorpus](https://arxiv.org/abs/2306.14030), arXiv | 10M Marathi social-media sentences, 5M Roman-script code-mixed + 5M Devanagari. Table 1: the Roman 5M = 1,037,659 tweets + 2,277,108 YouTube comments + 1,685,233 transliterated, so 3,314,767 were natively Roman | 2023-06-24 | Subject ✓, scholarly (preprint, not peer-reviewed) ✓, open access ✓ |
| 3 | [Regional forms of Devanagari (Survey Report)](https://www.typotheque.com/research/regional-forms-of-devanagari-survey-report), Typotheque | 396 responses collected, 387 analysed, India + Nepal; 35.8% of Marathi mother-tongue respondents prefer Form 2 of ल against 60.0% Form 1, versus 2.4% / 90.4% for Hindi first-language respondents. Colophon records peer review by John Hudson, Tiro Typeworks | **No date on the page** — `publishedDate` omitted | Subject ✓ |
| 4 | [The Unicode Standard 16.0, Chapter 12](https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-12/) | Table 12-8 "Marathi and Nepali Allographs" — variant glyphs for U+091D JHA, U+0932 LA, U+0936 SHA and digits five, eight, nine. Rule R5: "the half-consonant form RRAh is represented as eyelash-RA. This form of RA is commonly used in writing Marathi and Newari" | 2024-09-10 (Unicode 16.0 release) | Subject ✓ |
| 5 | [PIB press release PRID 2061660](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2061660) | Union Cabinet approved Classical Language status for Marathi, Pali, Prakrit, Assamese and Bengali; "Posted On: 03 OCT 2024" | 2024-10-03 | The **one** permitted context source |

Swap test: none of the five could sit unchanged in a sibling post — all five are about Marathi or about Devanagari script choice specifically. Domain check against `USED-SOURCES.md` before appending: `arxiv.org` was at 1 post (post 1, a different URL), now 2 of the allowed 3; the other four domains are new to the batch.

Nothing paywalled was cited, and no figure, chart or table was reproduced — the Unicode allograph table and Typotheque's figures are described in prose, not copied.

## First-party data

There is **no Ganesh-specific first-party data**; `/happy-ganesh-chaturthi` shipped days ago with zero pages created. Every number in the post is platform-wide across all 15 page types and is captioned that way in the sentence carrying it, including in the second table's caption ("not Ganesh figures, since that template shipped days ago with zero pages so far").

Used: 49.6% mobile-open rate and 96.1% publish rate (both in the first 150 words), 42.1% password-protection rate, the 6.8-hour median edit gap, and the five-row page-type table (1,065 / 954 / 904 / 385 / 257 of 3,860).

## Internal links

- `https://subhsandesh.in/happy-ganesh-chaturthi` — anchor "Ganesh Chaturthi page the recipient performs themselves", placed inside "Four ways to send the wish, compared", i.e. after the section establishing why a page beats a forwarded JPEG. First in `templateUrls`.
- `https://subhsandesh.in/templates` — anchor "SubhSandesh template gallery".

Both are in `TEMPLATE_LINKS` (`app/lib/prompt.ts`).

## Known weaknesses

- The slug omits "happy", so the exact keyword is not in the slug. Recorded as an audit failure; the slug is fixed by the batch brief.
- Slug availability in Strapi was taken from the brief, not re-queried. Recorded as an audit failure.
- Source 2 is an arXiv preprint rather than a peer-reviewed paper. Source 1 (Findings of EMNLP 2023) carries the peer-review requirement; source 3 records peer review in its colophon but is a foundry report, not a journal article.

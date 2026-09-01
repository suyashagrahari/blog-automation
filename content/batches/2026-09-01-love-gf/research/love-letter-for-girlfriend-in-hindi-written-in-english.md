# Research brief — `love letter for girlfriend in hindi written in english`

- **batchId:** `2026-09-01-love-gf`
- **Slug:** `love-letter-for-girlfriend-in-hindi-written-in-english` (Strapi check `filters[slug][$eq]=…` → `total: 0`, verified 2026-09-01, HTTP 200)
- **Category:** `modern-romance` (present in the live Strapi category list, 10 categories total, verified 2026-09-01)
- **Volume:** 1,000–3,000/mo **(EST — no keyword tool data)**, India market
- **Intent:** informational with a strong copy-and-send component. The searcher wants finished letters, in Roman letters, right now.

---

## Phase 1 — SERP analysis (own pass, 2026-09-01)

Search returned 9 distinct results. Seven of ten are non-editorial or off-intent.

| # | Page | Type | Measured shape | Direct answer? | Data / dates | Format elements | What it optimises for |
|---|---|---|---|---|---|---|---|
| 1 | `scribd.com/document/447725484` | Uploaded PDF | Not a web article; gated behind a Scribd reader | No | None | None | Scribd's own document index |
| 2 | `pinterest.com/ideas/love-letter-for-girlfriend-in-hindi-written-in-english/` | Pinterest idea feed | Image grid, no prose | No | None | None | Pinterest board discovery |
| 3 | `instagram.com/popular/love-letters-for-girlfriend-in-hindi/` | IG tag page | Tag listing | No | None | None | IG hashtag surface |
| 4 | `firstlove311.blogspot.com/2017/04/…` | 2017 blogspot | ~2,806 tokens; 1,815 Latin words vs 716 Devanagari; 14 near-duplicate H3s ("Love letter in Hindi for girlfriend", "Hindi Love letter", "Best Love letter in Hindi"…); one table; no schema | No — heading spam first | None; last touched April 2017 | Table present, no FAQ, no JSON-LD | Exact-match heading repetition, 2017-era SEO |
| 5 | `pinterest.com/ideas/love-letters-to-your-girlfriend-hindi/` | Pinterest idea feed | Image grid | No | None | None | Pinterest |
| 6 | `en.wikipedia.org/wiki/Phir_Bhi_Tumko_Chaahunga` | Wikipedia | Article about a 2017 Bollywood song | Off-intent entirely | Song release dates | Infobox | Nothing to do with the query |
| 7 | `hindilovepoems.com/tag/love-letter-for-gf/` | Tag archive | ~3,233 tokens; 2,378 Latin vs 632 Devanagari; H2s literally "Hindi Love Poem in Devanagari Font", "…in English Font", "English Translation"; no schema; sells 3D animations and gifts in the sidebar | Partially — it is the only rival that ships a Roman-script version | None | Table markup, no FAQ, no JSON-LD | Poem (kavita) archive pagination |
| 8 | `shop.tiktok.com/us/k/…` | TikTok Shop | Product keyword page | No | None | None | Commerce |
| 9 | `hindiyatra.com/love-letters-for-girlfriend-in-hindi/` | Editorial listicle | ~2,374 tokens; **1,732 Devanagari words vs only 589 Latin**; 3 letter H3s + comment/sidebar H3s; Article + FAQPage schema present | No — opens on "Love Letter Kaise Likhe" advice | None | Schema yes, table no | The Devanagari query, not this one |

**Only two real editorial rivals** (`hindiyatra`, `hindilovepoems`). Both are on the banned list; neither is cited or linked anywhere in the post, per `references/competitors.md`.

### Table stakes (all real rivals cover these)
- Multiple complete letters, not just advice.
- An emotional, second-person register.
- Some Hindi→English bridging (translation or transliteration).
- Coverage of the propose / heart-touching / emotional variants.

---

## Phase 2 — Gap analysis

**The gap, measured:** the #1 editorial rival answers the query in Devanagari — 1,732 Devanagari words against 589 Latin. The keyword literally asks for Hindi *written in English*. The one page that does ship a Roman version (`hindilovepoems`) is a paginated poem archive, not letters, and offers no guidance at all.

So nobody:
1. Delivers a set of **complete romanised-Hindi letters varied by situation** (first letter, distance, after a fight, birthday, no reason, four-line, cinematic).
2. Explains **when Roman beats Devanagari** — no keyboard install, no font-rendering risk on her phone, spoken register.
3. Tells the reader **how to keep the Hinglish natural** rather than a translation exercise, with corpus evidence for why converters fail.
4. Gives the letter **somewhere to live** after the WhatsApp scroll swallows it.

**Stale data:** the blogspot result has not been touched since April 2017; no ranking page cites a single dated statistic.

**Unanswered questions raised and dropped by the ranking pages:** will Devanagari render on her phone; is romanised Hindi "wrong"; how long should the letter be; can a translator do this.

**Fan-out sub-queries → H2s:**
- what does "Hindi written in English" mean → H2 2
- love letters in Hinglish for X situation → H2 3 (7× H3)
- romanised Hindi vs Devanagari, which to send → H2 4 (table)
- how to write natural Hinglish → H2 5
- where to keep / how to send the letter → H2 6
- when NOT to use romanised Hindi → H2 7

**Angle:** wins by being the only post that ships seven complete romanised-Hindi (Hinglish) letters plus a rule for when Roman script beats Devanagari on a phone, grounded in SubhSandesh's own 975 /love-gf pages (29.2% of 3,335) and 14,396 views (35.2% of all views).

---

## Phase 3 — Sources (reserved vein: code-switching and romanised-script use in intimate digital communication)

Search terms actually run: `Hinglish code-switching digital communication study romanised Hindi`; `Roman script Devanagari script choice social media Hindi identity study`; `code-switching emotional expression intimacy bilingual couples romantic language study`; plus OpenAlex `search=romanised Hindi script choice`, `Hinglish code mixing social media`, `code-switching intimacy romantic` (all with `filter=is_oa:true`), Europe PMC `Hinglish code-mixing social media`, DOAJ `roman script Hindi code-mixing`.

All five were fetched and text-extracted; every claim below was located in the extracted text. Sources 2 and 4 were first found as arXiv preprints and were **switched to their published ACL Anthology versions** — see the batch reuse audit below — so the quoted wording differs slightly from the preprints and was re-verified against the published PDFs.

| # | Source | Published | Verified claim used | Subject test | Swap test |
|---|---|---|---|---|---|
| 1 | Bali, Sharma, Choudhury & Vyas, *"I am borrowing ya mixing?" An Analysis of English-Hindi Code Mixing in Facebook* — 1st Workshop on Computational Approaches to Code Switching, ACL. `https://aclanthology.org/W14-3914/` | 2014-10 | 113,578-word Facebook corpus; "the largest representation was that of Roman script"; "In total 17.2% of all posts … show some amount of CM"; 23.7% of Hindi-matrix posts carry ≥1 English embedding vs 7.2% of English-matrix posts | PASS — Hindi–English script and mixing behaviour | PASS (fails swap = good): unusable in a Telugu, Marathi, gift or website post |
| 2 | Srivastava & Singh, *PHINC: A Parallel Hinglish Social Media Code-Mixed Corpus for Machine Translation* — W-NUT 2020, ACL. `https://aclanthology.org/2020.wnut-1.7/` | 2020-11 | A parallel corpus of 13,738 code-mixed Hindi–English sentences; "Romanized Hindi also presents a challenge with no standard spelling of the words. Various spellings for the same word is used based on the user's pronunciation of the word, emotions, etc. For example, 'jaldi', 'jldi', and 'jldiii'" | PASS — romanised Hindi orthography | PASS |
| 3 | Srivastava & Singh, *HinGE: A Dataset for Generation and Evaluation of Code-Mixed Hinglish Text* — Eval4NLP 2021, ACL. `https://aclanthology.org/2021.eval4nlp-1.20/` | 2021-11 | 1,976 parallel sentence pairs, 4,803 human-generated vs 3,952 machine-generated Hinglish sentences; five expert bilingual annotators; machine output rated 1–10 by two raters; five widely used metrics shown ineffective on code-mixed text | PASS — naturalness of written Hinglish | PASS |
| 4 | Madhani et al. (AI4Bharat / IIT Madras), *Aksharantar: Open Indic-language Transliteration datasets and models for the Next Billion Users* — Findings of EMNLP 2023, ACL. `https://aclanthology.org/2023.findings-emnlp.4/` | 2023-12 | 26 million transliteration pairs, 21 Indic languages from 3 families, 12 scripts; "In various settings such as instant messaging, web search, and social media, these languages are commonly romanized owing to users' familiarity with the input tools for the Roman script"; "even the short word मैं (I) can be romanized in multiple ways: main, mai, mein, mei" | PASS — romanised input and script/keyboard choice | PASS |
| 5 | Parr, *"Baby, Te Amo": Code Switching as a Way to Develop and Limit Intimacy in Multilingual, Romantic Relationships* — Journal for Undergraduate Ethnography 3(2). `https://ojs.library.dal.ca/JUE/article/view/8239` | 2013 | Ethnographic interviews with five individuals and two couples; five forms of code switching; meanings include emotional conveyance, identity performance and secrecy; relational function is "a way to increase **or limit** intimacy" | PASS — code-switching inside romantic relationships | PASS |

- **Peer-reviewed + open-access:** #1, #2, #3 and #4 are all ACL Anthology papers — peer-reviewed workshop or Findings proceedings, free full text, every PDF extracted and searched. #5 is a peer-reviewed open-access student journal, full text read (5,114 words). No paywalled or abstract-only citation is used, so nothing needed the abstract-only disclosure.
- **Generic context statistics used: 0.** No TRAI/Census/PIB figure appears anywhere.
- **Wikipedia:** 1 body link (`Hinglish`), entity disambiguation only. Structured-data `sameAs` pairs are additional and do not count against the budget.
- **Reserved veins avoided:** no bilingual-emotion/mother-tongue study (Telugu post), no regional-language internet growth theme (Marathi post), no relationship-maintenance/mediated-communication study (surprise post), no gift-giving psychology (gift post), no self-disclosure/personalisation (website post).
- **Batch reuse audit (run against the five sibling files already on disk on 2026-09-01):** no source URL in this batch is used by more than 2 posts. The **arXiv preprint versions of sources 2 and 4 were deliberately swapped for their published ACL Anthology versions** because `arxiv.org` was already carried by 3 sibling posts (`how-can-i-surprise-my-girlfriend-online`, `love-letter-for-girlfriend-in-marathi`, `love-letter-for-girlfriend-in-telugu`); using arXiv here would have made 4 posts on one domain and broken the 3-post domain cap. The swap also upgrades both from preprint to peer-reviewed. This post is now the only one in the batch using `aclanthology.org` (3 URLs, 1 post) and `ojs.library.dal.ca` (1 URL, 1 post), so both have 2 of 3 domain slots left for siblings; each of the five URLs has 1 of 2 post-slots left.
- **Note for the batch owner:** `pmc.ncbi.nlm.nih.gov` is currently carried by 5 posts in this batch (1 in `cute-website-for-gf`, 4 in `love-letter-for-girlfriend-in-marathi`), which is over the 3-post domain cap. That is not fixable from this file and is flagged rather than touched.

### Sources that were wanted and could not be used
- *Social, economic, and demographic factors drive the emergence of Hinglish code-mixing on social media*, Humanities and Social Sciences Communications (2024), `doi:10.1057/s41599-024-03058-6` — the ideal peer-reviewed source for this angle. **Not cited: nature.com returns a Cloudflare "Client Challenge" from this environment on both the article URL and the DOI, so the claim could not be verified.** Not in Europe PMC either.
- *HiACC: Hinglish adult & children code-switched corpus*, Data in Brief (2025-07-17), PMC12329218 — PMC served a reCAPTCHA wall; not verifiable, not cited.

---

## Phase 4–5 notes

- **First-party facts used (verbatim from `content/facts.md`, generated 2026-09-01):** the /love-gf #1-page-type line, the 14,396-views line, the 50.3% phone line, the 42.9% password line, the 99.5% published line, the 6.9-hour median-edit line, and the /darling #4 line.
- **Internal links (2, both mandatory, both in `TEMPLATE_LINKS`):** `https://subhsandesh.in/love-gf` and `https://subhsandesh.in/darling`, both inside the "where the letter lives" H2 — i.e. after the letters and the script decision have established why the reader would want them, and nowhere near the opening paragraph. `/darling` is attached specifically to letter 7, the deliberately cinematic one, as a stylistic match rather than a second generic CTA.
- **Comparison table:** 4 rows × 4 columns; column 3 is first-party (the 50.3% phone-open rate).
- **Structured data:** additive only — one `ItemList` mirroring the seven letter H3s in order, and one `@id`-matched enrichment block on `…#post` carrying `about`, `mentions` and `citation` (5 entries, one-to-one with `batchMeta.sources`). Every `sameAs` verified against the Wikipedia API on 2026-09-01: Hinglish Q1499115, Devanagari Q38592, Code-switching Q255615, Hindi Q1568, Love letter Q1056617.
- **FAQs:** 12, in `article.faqs` and the renderer-built FAQPage only. Nothing FAQ-shaped in `contentMarkdown`.

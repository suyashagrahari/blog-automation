# Research brief — `love letter for girlfriend in kannada`

- **Batch:** `2026-09-01-love-gf-2`
- **Slug:** `love-letter-for-girlfriend-in-kannada` (checked against Strapi 2026-09-01, `total: 0` — free)
- **Category:** `modern-romance` (confirmed live against the categories endpoint)
- **Templates:** `https://subhsandesh.in/love-gf`, `https://subhsandesh.in/darling`
- **Market:** India. Estimated **under 300/mo (band 1, EST)**, demand rank 5x. Emptiest SERP in either batch.

---

## Phase 1 — SERP analysis

The query returns **six results, all thin**. There is no real editorial page on this keyword.

**What was fetched.** I fetched and parsed **three of the six in full** — the three `ai.tenorshare.com` pages — extracting heading structure, word count, Kannada character count, table count and FAQ-schema presence. The two `nojoto.com` pages returned **HTTP 500** on 2026-09-01 and could not be fetched; the Instagram tag page returned a login-walled shell (1 word of body text, zero headings). For those three I am relying on the SERP titles/snippets and the known page type, **not** a first-hand full-page read. Recorded here so nobody reads the comparison table below as five full fetches.

All six are on the banned list (`ai.tenorshare.com`, `nojoto.com`, plus Instagram as a UGC aggregator). Read for analysis in Phase 1; never cited, linked or paraphrased.

### What holds the positions

| Position / page | Shape | Words | Direct answer | Format | Optimising for |
|---|---|---|---|---|---|
| `instagram.com/popular/love-letter-to-girlfriend-in-kannada` | Login-walled tag page | ~0 body | None | No prose, no schema | Session time, not the query |
| `nojoto.com/q/…/love-letter-in-kannada-for-girlfriend-10/` | UGC quote/status collection (not fetched — HTTP 500) | n/a | None expected | Infinite card feed | App installs, board saves |
| `nojoto.com/q/…/love-letter-to-girlfriend-in-kannada-10/` | Same template, second URL (not fetched — HTTP 500) | n/a | None expected | Infinite card feed | Same |
| `ai.tenorshare.com/love-letter/love-letters-for-girlfriend-in-kannada.html` | "20 Samples" listicle | 1,481 | Listicle only; no guidance before the samples | 11 H2s, **0 tables, no FAQPage schema, no byline, no dates** | AI-letter-generator tool signup |
| `ai.tenorshare.com/love-letter/love-letter-for-boyfriend-in-kannada.html` | Same template, gender-swapped | 1,300 | Same | Same, 10 H2s | Same |
| `ai.tenorshare.com/love-letter/kannada-love-propose-letter.html` | Same template, proposal-framed | 1,429 | Same | Same, 10 H2s | Same |

**On the three tenorshare pages specifically.** They are one template run three times. Every H2 is the exact target phrase plus an occasion suffix — "Love Letters for Girlfriend in Kannada for a Romantic Proposal", "… for Her Birthday", "… for Long-Distance Relationship" — closing with "Conclusion" and a "Back to School Sale" promo block. Kannada character counts (5,744 / 4,379 / 5,236) against total word counts imply the letters are **Kannada script only with a short English wrapper**: there is not enough Latin text on the page for both an English translation and a romanised transliteration. None carries a table, FAQ schema, an author, a date, or a single cited figure.

### Table stakes (present on what ranks)

- A batch of ready-to-send Kannada letters in Kannada script.
- Occasion labels: proposal, birthday, anniversary, apology, long distance, good morning.
- A short "be sincere" preamble before the samples.

### The gap — specific to Kannada, unaddressed by all six

1. **Spoken versus written register.** Written/formal Kannada (ಗ್ರಂಥಿಕ, *granthika*) is noticeably different from everyday spoken Kannada, and a love letter in the written variety reads like an exam answer. **No ranking page mentions the distinction exists.**
2. **The three-way second person.** ನೀನು / ನೀವು / ತಾವು. Not named anywhere on the SERP, and it is the single loudest signal in the letter.
3. **Roman-script Kannada ("Kanglish").** Many Kannada speakers type Roman, so a Kannada-script letter may be untypeable on the sender's side. Ranking pages give script only, with **no romanisation**.
4. **Script delivery.** Where to actually put Kannada script so it renders as typed on the phone she opens. Nobody addresses it.
5. **Where a Kannada letter is the wrong call** — English-schooled, raised outside Karnataka. No ranking page admits a limit.

### Stale data

Nothing to supersede: **not one of the six cites a dated statistic**. That absence is the opening — this post carries five dated sources and eight first-party figures against their zero.

### Unanswered questions the ranking pages raise and drop

- "Personalise this" — with what, and in which register?
- "Kannada adds a cultural touch" — which Kannada? North or South Karnataka, spoken or written?
- How does the sender type it if they have no Kannada keyboard?

### Fan-out sub-queries → where each is answered

| Sub-query | Answered in |
|---|---|
| Should it be spoken or formal written Kannada? | H2 1 + FAQ 4 |
| ನೀನು or ನೀವು? What is ತಾವು? | H2 2 + FAQs 2, 3 |
| First-confession letter in Kannada | H3 1 |
| Kannada letter for long distance | H3 2 |
| Kannada sorry / after-a-fight letter | H3 3 + FAQ 11 |
| Kannada birthday letter for girlfriend | H3 4 |
| Short Kannada love letter | H3 6 + FAQ 6 |
| I cannot type Kannada script — what now? | H2 4 table + FAQ 1 |
| Which page does each letter go on? | H2 5 table (page-type rows, first-party creation counts) |
| Will Kannada render on WhatsApp / Instagram? | H2 4 table + FAQ 5 |
| Can I mix English into it? | FAQ 7 |
| What should I call her in Kannada? | FAQ 8 |
| Should I use Google Translate? | H2 5 + FAQ 9 |
| WhatsApp or a page? | H2 5 + FAQ 10 |
| Is Kannada better than English here? | H2 5 + FAQ 12 |

---

## Phase 2 — Angle

> Wins by being the only post that treats the Kannada spoken-versus-written register split and the ನೀನು / ನೀವು / ತಾವು second-person choice as the actual writing decision, delivering six letters in script plus romanised transliteration, grounded in the 975 `/love-gf` pages (29.2% of 3,335) and the 6.9-hour median edit window that show how people really write these.

---

## Phase 3 — Sources

Reserved vein: **spoken-versus-written register in Kannada, and Roman-script Kannada in digital writing.** Searches run: `Kannada diglossia spoken written variation sociolinguistics study`; `Kannada English code-mixed Roman script dataset YouTube comments aclanthology`; `"colloquial Kannada" OR "spoken Kannada" formal written variety paper`; `Kannada dialect spoken form normalization written form NLP corpus arxiv`; `Kannada second person pronoun ninu nivu honorific respect address terms study`; plus OpenAlex API sweeps on `kannada honorific`, `dravidian honorific second person address`, `kannada sociolinguistic variation`, `kannada transliteration roman script`, `kannada code mixing social media`, `kannada colloquial spoken written`.

Every source below was fetched and the claim verified in the fetched text. **Zero generic context statistics used** (0 of the 1 permitted — see rejections).

| # | Source | Type | Verified claim | Read | Published |
|---|---|---|---|---|---|
| 1 | [CIIL, *LIS India — Kannada: Language Variation*](https://web.archive.org/web/20241213225718/http://lisindia.ciil.org/Kannada/Kan_vari.html) | Government institutional linguistics resource (Central Institute of Indian Languages) | "There is also a sharp distinction between the spoken and written forms of the language"; written form "more or less constant throughout Karnataka" while spoken Kannada varies by region; four major regional dialects (Mangalore/Udupi, Mysore/Bangalore, Kota/Kundapur, Hubli/Dharwad); Ethnologue cited for ~20 dialects | **Full page** | No date published — field omitted from `citation`. Live host returned **HTTP 500** on 2026-09-01, so the 2024-12-13 Internet Archive snapshot is cited |
| 2 | [Amba & Mukherjee, *A Comparative Study of Honorific and Ultra Honorific Pronouns — Kannada and Telugu*](https://zenodo.org/records/18543048) | Open-access journal article (IJTMSS), Zenodo deposit | Kannada second person: `nī:nu` (familiar sg), `nī:vu` (sg-honorific **and** plural), `tā:vu` (sg **ultra**-honorific); "English does not have honorific pronouns. It also does not differentiate between second person singular and second person plural" | **Full PDF** (text extracted and read) | 2026-02-05 |
| 3 | [Hande, Priyadharshini & Chakravarthi, *KanCMD*](https://aclanthology.org/2020.peoples-1.6/) | Peer-reviewed workshop paper (PEOPLES @ COLING 2020), open access | 7,671 Kannada–English code-mixed comments crawled from YouTube — "actual comments in code mixed text posted by users on YouTube social media, rather than in monolingual text from the textbook"; min. three annotators per comment | **Full PDF** (re-fetched 2026-09-01; Table 2 = 7,671 posts, 64,997 tokens, 8,472 sentences) | 2020-12 |
| 4 | [Shashirekha et al., *CoLI: Code-mixed Language Identification at the Word Level in Kannada-English Texts*](https://arxiv.org/abs/2211.09847) | arXiv preprint (scholarly, later journal-published) | CoLI-Kenglish built from Kannada YouTube comments; every word tagged into six categories — "Kannada", "English", "Mixed-language", "Name", "Location", "Other"; best model (CoLI-ngrams) macro-average **F1 0.64** | **Full PDF** (re-fetched 2026-09-01; Table 1 defines "Mixed-language" as Kannada+English words **in Roman script**) | 2022-11-17 |
| 5 | [Chundi, Hulipalled & Simha, *Identification of monolingual and code-switch information from English-Kannada code-switch data*](https://ijece.iaescore.com/index.php/IJECE/article/view/29245) | Peer-reviewed journal (IJECE 13(5), pp. 5632–5640), open access, CC BY-SA | Character-level n-gram approach gives SVC and NN **97.9% accuracy / 98% F1** separating monolingual from code-switched English–Kannada social-media text | **Full PDF** (re-fetched 2026-09-01, 9 pp.) | 2023 |

**Subject test:** all five are about the Kannada language, its registers, its pronoun system, or how Kannada is written online. **Swap test:** none could sit unchanged in a sibling post — all five are Kannada-specific, and the reserved veins for siblings (anticipation, attachment, concreteness, ritual, Tamil diglossia, Bengali honorifics, Gujarati heritage literacy, play, no-code) touch none of them. **Peer-reviewed and open-access:** #3 and #5. **Abstract-only: none as of the 2026-09-01 fix pass.** #3, #4 and #5 were originally verified from abstracts; all three PDFs were re-fetched successfully on 2026-09-01 (aclanthology 200/259KB, arXiv 200/559KB, IJECE `article/download/29245/16860` 200/386KB) and every claim was re-verified in the full text. The live `lisindia.ciil.org` host was re-checked the same day and still returns HTTP 500, so #1 stays on the Internet Archive snapshot.

### Rejected, and why — useful for the next run

| Candidate | Why rejected |
|---|---|
| `hasp.ub.uni-heidelberg.de` — Zydenbos, *A Manual of Modern Kannada* (open-access Heidelberg monograph) | **The strongest candidate for the register point and it could not be verified.** The host runs Anubis proof-of-work bot protection; every fetch returned the challenge page, not the book. Worth retrying from an environment that executes JS — it states the spoken/written contrast in phonology, syntax and lexicon and that no standard colloquial Kannada exists. |
| `lisindia.ciil.org` (live URL) | HTTP 500 on 2026-09-01. Cited via the Internet Archive snapshot instead. |
| Census of India 2011, Kannada mother-tongue speakers (43,706,512) | The one permitted generic. `censusindia.gov.in` was **unreachable** from this environment (DNS/connection failure on five candidate URLs), so it could not be fetched and verified. Dropped rather than cited from memory. The post carries zero generic context statistics as a result. |
| Bright, *Phonological Rules in Literary and Colloquial Kannada* (JAOS 1970) | Exactly on-topic; no open-access copy found. OpenAlex shows `is_oa: false`, resolving to a paywalled OUP chapter. |
| `pmc.ncbi.nlm.nih.gov/articles/PMC9388449` (DravidianCodeMix) | Already used by the Tamil sibling in this batch — URL reuse. |
| `aclanthology.org/2020.lrec-1.294/` (Dakshina) | Already used by the Tamil sibling — URL reuse. |
| Language-learning blogs (preply, talkpal, speakfluentli, kannadamathu, Grokipedia) | Not research; several are content farms competing for the same long-tail. |

**Batch caps (scoped to `2026-09-01-love-gf-2`, counting distinct POSTS):** `aclanthology.org` 1 → **2 posts**; `arxiv.org` 1 → **2 posts**; `zenodo.org`, `web.archive.org`, `ijece.iaescore.com` 0 → **1 post** each. No domain reaches 3, no URL reaches 2. **`doi.org` deliberately not cited at all** — it had already hit the 3-post cap, so every source resolves to a publisher, repository or archive URL. `pmc.ncbi.nlm.nih.gov` (already at 2 posts) was avoided. **Previous-batch reuse:** none — all 10 `batchMeta.sources` arrays in `content/batches/2026-09-01-love-gf/` and all 5 siblings on disk here were read and diffed before choosing.

---

## The register decisions, and what they rest on

**ನೀನು, not ನೀವು.** Kannada's second person is three-way, not two-way. Amba & Mukherjee (#2) give the paradigm directly: `nī:nu` familiar singular, `nī:vu` singular-honorific *and* plural, `tā:vu` singular ultra-honorific — and note English marks neither respect nor number, which is exactly why an English-first writer never makes this choice consciously. **Every letter in the post uses ನೀನು.** ನೀವು to a girlfriend reads as distance or as a joke about distance; ತಾವು is what you write to a stranger's father and here it is comic. The post states the one real edge case: a first letter to someone the writer still addresses as ನೀವು in person, where ನೀನು on paper is a bigger move than the letter.

**Spoken register, not ಗ್ರಂಥಿಕ.** This rests on the CIIL profile (#1): a sharp spoken/written distinction, a written form near-constant across Karnataka against a spoken form that shifts by region, four named regional varieties and ~20 dialects overall. The practical conclusion drawn in the post is that there is **no single "correct" colloquial Kannada to copy**, so the target register is hers, not a textbook's — and the letters therefore use spoken forms (ನಂಗೆ, ನಿಂಗೆ, ಗೊತ್ತಾ, ಅಷ್ಟೇ, ಬೇಜಾರು, ಮಾಡ್ಕೊ, ಬರೀತಿದ್ದೀನಿ) rather than their written equivalents.

**Roman script is a real option, not a fallback.** KanCMD (#3), CoLI-Kenglish (#4) and the IJECE paper (#5) are all built on Kannada written in Roman and mixed with English at the word level — the shared-task name is literally "CoLI-Kanglish". That is the evidence base for telling a reader that romanised Kannada beats English, and for the table's middle row.

---

## Phase 4–5 — Build notes

- **Body:** **1,775 words** by plain whitespace split (was 1,596 before the 2026-09-01 fix pass, which added the page-type H2 and table to close the first-party-table-column item). Band 1,500–1,800. `wordCount()` in `app/lib/batches.ts` reads higher by design; not trimmed against it.
- **Headings:** 1 H1, 7 H2, 6 H3, no skipped levels. Every H2 carries a number, date or named source.
- **Paragraphs:** 2–3 sentences throughout, including the answer paragraph, which was split in two to hold the limit.
- **Tables:** two. (1) Script choice — 3 rows × 5 columns (Option / Keyboard needed / Renders in WhatsApp and Instagram / Register / Who it suits); five columns rather than `page-structure.md`'s 3–4 because the brief specified four comparison dimensions. (2) Added 2026-09-01 — page destination, 4 rows × 4 columns (Page it belongs on / Letters from above / Why that page for a Kannada letter / Pages created here of 3,335). Row axis is page type, so the last column is a genuine first-party column that varies by row: 975 — 29.2%, 720 — 21.6%, 343 — 10.3%, 258 — 7.7%. Caveat stated in the body under the table: those counts are page types, not languages.
- **Letters:** six, each as **Kannada / Roman / English / Use when** in that fixed order. Mirrored one-to-one in the `ItemList`.
- **Internal links:** `/love-gf` in the new delivery H2 "Which page each Kannada letter belongs on" (where a page that renders Kannada correctly is the actual answer), `/darling` in the objection H2 (the heavier cinematic register). Neither in the opening. Two links, within the 2–4 band, and identical to `templateUrls`. `/apology-dashboard` and `/birthday-gf` appear as plain-text page names in the second table, not as links, so the link count and `templateUrls` are unchanged.
- **Outbound links:** five, one per source, inline at the sentence stating the fact. Zero competitor links. Zero Wikipedia links in the body.
- **Entities verified** via the Wikipedia API with QIDs paired: Kannada `Q33673`, Kannada script `Q839666`, Diglossia `Q59203`, Code-mixing `Q3201279`, Karnataka `Q1185`.
- **Pricing:** no claim of any kind about cost, not even "free" — the pricing block in `content/facts.md` is empty.
- **structuredData:** additive only — one `ItemList` (6 letters, mirroring the H3s in order) plus one `@id`-matched `BlogPosting` enrichment on `#post` carrying `about` / `mentions` / `citation` (five sources, one-to-one with `batchMeta.sources`). No `AggregateRating`, `Review` or `HowTo`.
- **FAQs:** 12, in `article.faqs` and the renderer-built FAQPage only. None in `contentMarkdown`.

---

## Phase 6 — Audit summary

50 checklist items. **Original audit: 47 passed, 3 failed. After the 2026-09-01 fix pass: 48 passed, 2 failed**, disjoint and complete (`passed ∩ failed = ∅`, `|passed| + |failed| = 50`, zero non-canonical strings). Item strings copied byte-for-byte from `publish-checklist.md`, parsed wrap-aware and substituted programmatically.

| Failed item | Why, and what closes it |
|---|---|
| *At least one table column uses first-party data* | **CLOSED 2026-09-01.** The original reasoning was right about the script table — its row axis is the script, and no first-party figure varies by script. Fixed by adding a *second* table whose row axis is page type, where a `facts.md` column sits truthfully: created counts of 975 (29.2%), 720 (21.6%), 343 (10.3%) and 258 (7.7%) of 3,335. The body states the limit directly under it: those counts measure page types, not languages. |
| *metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)* | **STILL FAILED — arithmetically unsatisfiable.** The keyword is six words / 37 characters, so no title holds it in a five-word window. metaTitle stays at 59 characters with the keyword at word one. 62–70 character alternatives were tested and rejected for truncation near 580px / ~60 characters, which lands inside the differentiator: "…: 6 in Script, Roman and English" (69), "…: 6 in Script Plus Roman Lines" (67), "…: 6 Letters, Both Scripts" (62, and says less), "…: 6 in Spoken Kannada, Not Written" (71, over the Strapi cap). **Closes** only by shortening the keyword to five words, which forfeits exact match. |
| *Slug short, hyphenated, lowercase, no stop words* | **STILL FAILED — deliberate trade, not renamed.** The slug is the exact six-word keyword and keeps the stop words "for" and "in". On a SERP of six thin pages with no editorial competitor, exact-match slug is the whole positional advantage. Pre-verified free in Strapi (`total: 0`, 2026-09-01) and referenced by the manifest and `canonicalURL`. **Closes** only by losing exact match, which is not worth it here. |

**Band-1 note, stated plainly.** Estimated under 300 searches a month. It is winnable because the SERP is **empty**, not because it is easy, and even the top position would win a small amount of traffic. Nothing in this brief or the audit is a traffic forecast, and no claim is made that the post will rank.

---

## Native-speaker gate — the checklist to act on

**The Kannada in all six letters is non-native composition and must get a native Kannada read-through before this publishes.** Nothing here is machine-translated, but six specific lines are flagged, plus one pronoun call and the endearments:

1. **Letter 1** — `ಇದನ್ನ ಹೇಳಬೇಕು ಅಂತ ತುಂಬಾ ದಿನದಿಂದ ಅಂದ್ಕೊಂಡಿದ್ದೆ, ಧೈರ್ಯ ಬರಲಿಲ್ಲ.` Two clauses hang off one comma; this probably wants **ಆದ್ರೆ** between them. Confirm or insert.
2. **Letter 3** — `ಮುಗಿಯೋಕೆ ಮುಂಚೆನೇ` and `ನಿಂಗೆ ಸರಿ ಅನ್ನಿಸಿದಾಗ`. The two spoken contractions I am least confident are idiomatic rather than merely intelligible. `ಮುಂಚೆನೇ` for ಮುಂಚೆಯೇ in particular.
3. **Letter 4** — `ಯಾರೂ ನೋಡ್ತಿಲ್ಲ ಅಂದಾಗಲೂ ನೀನು ಜನಕ್ಕೆ ಸಹಾಯ ಮಾಡ್ತೀಯ.` The most literary construction in the set and **the one place a written-register (ಗ್ರಂಥಿಕ) leak could hide.** Read it aloud; if it sounds like prose rather than speech, rewrite.
4. **Letter 5** — `ನೀನು ನಗುವಾಗ ಮೂಗು ಸ್ವಲ್ಪ ಸುಕ್ಕಾಗುತ್ತೆ.` `ಸುಕ್ಕಾಗುತ್ತೆ` may be the **wrong verb entirely** for a nose wrinkling when someone laughs. Verify the verb, not just the form.
5. **The ನೀನು call in letter 1.** The pronoun rule is right — ನೀನು for a girlfriend — but letter 1 is a **first confession**. If the writer still says ನೀವು to her in person, ನೀನು on paper is a register jump that the surrounding prose flags and the letter itself does not soften. A native reader should clear **that line**, not the rule.
6. **Endearments.** `ಚಿನ್ನ` / `ಚಿನ್ನು` / `ಮರಿ` are regionally and socially marked. A Mysore reader will not weigh them the way a Dharwad reader does. Confirm they land for the intended audience.

7. **Letter 2** — `ನಿಂಗೆ ಇಷ್ಟದ ಹಾಡು`. *Added by the 2026-09-01 fix-pass re-read.* This pairs a dative pronoun with a genitive-shaped modifier; it probably wants **ನಿನ್ನ ಇಷ್ಟದ ಹಾಡು** or **ನಿಂಗೆ ಇಷ್ಟ ಆಗಿರೋ ಹಾಡು**. Confirm which.
8. **Letter 6** — `ರಾತ್ರಿ ಕಣ್ಣು ಮುಚ್ಚಿದಾಗ ಕೊನೆಗೂ ನಿನ್ನ ನೆನಪು`. *Added by the 2026-09-01 fix-pass re-read.* `ಕೊನೆಗೂ` reads as "at long last", not "the last thought of the day" — the sense the English line claims. May need **ಕೊನೆಯದೂ**.

Do not publish before a native reader clears items 1–5, 7 and 8.

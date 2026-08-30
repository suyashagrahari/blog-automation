# Research brief — birthday wishes for teacher in hindi

- **Slug:** `birthday-wishes-for-teacher-in-hindi`
- **Batch:** `2026-08-27-birthday-30`, wave 2, rank 17, band 1,000–3,000, expected clicks 132
- **Lane:** C — multilingual communication. **Sub-angle: formal/honorific register and institutional hierarchy in Hindi address.**
- **Market:** India, evergreen
- **Slug availability:** checked against live Strapi 2026-08-27 — `filters[slug][$eq]=birthday-wishes-for-teacher-in-hindi` returns `total: 0`. Free.

---

## Phase 0 — data gate

Satisfied by `BRIEF.md`'s read-only probe of `birthdaygfpages` (n = 198 pages, n = 197
messages, measured 2026-08-26) plus `content/facts.md` (measured 2026-08-26). No
`npm run facts` re-run: the brief states the probe is the only birthday-specific
first-party data that exists.

Facts used, and where they land:

| Fact | Where |
|---|---|
| Median personal message 96 characters (n = 197) | answer paragraph, table column, three H3s, FAQ |
| 106 of 197 messages under 100 characters | answer paragraph |
| 198 birthday pages, 6.5% of 3,024, #5 page type | "wrong thing to send" H2 |
| Of 195 pages with a quiz, only 28 played — 14.4% | "wrong thing to send" H2 |
| 48.6% of birthday views are mobile (1,081/1,121/22) vs 51.0% site-wide | "wrong thing to send" H2 |
| 37.9% password-protect a birthday page vs 43.9% site-wide | semi-public group H3 + FAQ |
| Median first-save-to-last-edit 0.9 h; 50.5% inside the hour | FAQ |

**Structural absence, recorded rather than invented:** the probe has no relationship
field and no language field. There is therefore **no** first-party number for "birthday
pages made for a teacher" or "pages written in Hindi", and none is stated anywhere in
the post. This is the single most tempting fabrication in a keyword like this one.

---

## Phase 1 — SERP (supplied, harvested India-localised `gl=in`; not re-fetched)

Six results only. No competitor page was fetched, cited, linked or paraphrased.

| # | Result | Format | Register guidance |
|---|---|---|---|
| 1 | craftyartapp.com — "370+ Best Birthday Wishes For Teacher in Hindi" | volume listicle (370+) | none |
| 2 | pinterest.com — "Birthday Wishes Teacher in Hindi" | image board | none |
| 3 | scribd.com — "120+ Best Birthday Wishes For Teacher In Hindi शिक्षक …" | uploaded document (120+) | none |
| 4 | hindiwishez.com — "150+ टीचर को जन्मदिन की शुभकामनाएं (2026)" | volume listicle (150+) | none |
| 5 | herzindagi.com — "Birthday Wishes For Teacher In Hindi: अपने प्यारे …" | magazine listicle | none |
| 6 | meribadhai.com — "Teacher Birthday Wishes 2026 — ज्ञान भी मिला, …" | wishes farm | none |

Two of the six results are user-upload platforms (Pinterest, Scribd), which is why the
query is winnable at all. The two volume plays (370+, 150+) are the same content type
at different scale.

**Table stakes:** Devanagari wish text; a Roman transliteration for people typing the
query in English letters; more than one wish; a Teachers' Day adjacency.

**The gap — the whole post:** not one of the six tells the reader *which register a wish
is in*. A Hindi wish is locked to a pronoun tier the moment it is written, and a list of
370 undifferentiated lines gives the reader no way to tell a line safe for a school
principal from a line safe for a 24-year-old lab assistant they are friendly with. Nobody
organises by **who is sending**, and nobody mentions that a class WhatsApp group is
semi-public.

**Fan-out sub-queries → H2/H3 map:**

- what does "register" mean in a Hindi wish → H2 2
- should I use आप or तुम for a teacher → H2 3
- गुरुजी vs सर vs मैडम vs शिक्षक महोदय → H2 4 + table
- what do I write as a student / a parent / a colleague → H2 5, six H3s
- is there one "most polite" Hindi phrasing → H2 6
- is it safe to post in the school group → H3 5 + H2 7 + FAQs
- how long should it be → answer paragraph + table column
- what about Teachers' Day → FAQ
- can I trust Google Translate for this → FAQ

---

## Phase 2 — angle

> Wins by being the only post that fixes the register of a Hindi teacher birthday wish
> before the wording — measuring आप at 12,335 against तू at 236 in a 19,177,172-token
> Hindi news corpus, showing that the "most polite" Hindi construction inverts between
> Pandharipande's 1979 hierarchy and a 2025 survey of twenty Eastern-Indic-L1 speakers,
> and sorting six wishes by who is sending against SubhSandesh's measured 96-character
> median personal message across 197 birthday pages.

**Cannibalisation.**

- `birthday-wishes-for-teacher` is **live in English** (fetched from Strapi 2026-08-27;
  ~1,100 words; H2s on tone-by-relationship, message examples, card structure, surprise
  ideas, school etiquette, ideas by class age). It contains no Hindi, no pronoun tier, no
  title choice, no corpus data. No section of this post mirrors its order or framing.
- `birthday-wishes-in-hindi` (this batch, wave 1) owns Devanagari-vs-Roman character
  counts, transliteration input methods, and the *informal* register (तुम for a brother).
  This post does not repeat any of those; it is the formal/institutional end and adds the
  title ladder, the sender split and the semi-public group.
- `birthday-wishes-reply-in-hindi` (this batch, wave 2) owns Hindi *gratitude* words
  measured in the Leipzig corpus. This post measures **pronouns and address terms** —
  a disjoint word set, and a different domain of the same resource is not used.
- `birthday-wishes-for-senior` and `birthday-wishes-for-boss` are live; both are English
  and neither addresses Hindi honorific grammar.

---

## Phase 3 — sources

Five sources. Zero generic context statistics (no PIB / TRAI / Census / MEA). Zero
competitor domains. Every full text was read, not just the abstract; nothing is paywalled.

### In-batch counts, measured with the BRIEF-WAVE2 snippet before citing

| Domain | Count before | Count after |
|---|---|---|
| `api.wortschatz-leipzig.de` | 0 of 3 | 1 of 3 |
| `scf-lsa.info` | 0 of 3 | 1 of 3 |
| `edizionicafoscari.it` | 0 of 3 | **2 of 3** — see the swap-test note below |
| `philjournal.ru` | 0 of 3 | 1 of 3 |
| `revue-akofena.com` | 0 of 3 | 1 of 3 |

No URL in this batch was at 2 when this post's sources were chosen. `birthday-wishes-for-daughter-in-hindi`
then landed the **same** Kumar and Dharurkar URL concurrently, putting it at 2 of the 2 permitted posts and
the domain at 2 of 3. Item 65 therefore still holds, but the **swap test does not**, and it is recorded as a
failure rather than hidden — see Phase 6. Closing options: replace it with a Hindi-specific
politeness-variation study no sibling has taken, or have the sibling drop it.

**`r12a.github.io` was deliberately not taken.** It sat at 2 of 3 (`birthday-wishes-in-hindi`,
`birthday-wishes-in-tamil`) with one slot left. Richard Ishida's notes are orthography and
script mechanics; this post's subject is honorific *grammar and address*, which those notes
do not cover. The last slot is left for the Punjabi and Urdu siblings, which genuinely need
a script source.

**The Leipzig human-readable corpus page was also deliberately not taken.**
`corpora.uni-leipzig.de/en?corpusId=hin_news_2011_1M` was already at 1 of 2 URL uses via
`birthday-wishes-reply-in-hindi`. Citing the Wortschatz API endpoint instead is both truer
provenance — it is literally where each frequency came from, and a reader clicking it sees
the number — and leaves that URL free.

### 1. Original measurement — Leipzig Corpora Collection, Hindi news corpus

- Corpus: `hin_news_2011_1M`, confirmed via `availableCorpora`: 1,000,000 sentences,
  **19,177,172 tokens**, 230,831 types. It is the **only** Hindi corpus the collection
  currently serves.
- Queried per word through `https://api.wortschatz-leipzig.de/ws/words/hin_news_2011_1M/word/<word>`
  on 2026-08-27.

Pronouns:

| Word | Frequency |
|---|---|
| आप | 12,335 |
| आपको | 6,884 |
| तुम | 750 |
| तुम्हें | 201 |
| तू | 236 |
| तुझे | 43 |

Ratios stated in the post: **≈52 आप per तू** (12,335 / 236 = 52.3) and **≈16 आप per तुम**
(12,335 / 750 = 16.4).

Address and title terms:

| Word | Frequency |
|---|---|
| गुरु | 1,103 |
| मास्टर | 761 |
| शिक्षक | 710 |
| सर | 517 |
| आचार्य | 481 |
| जी | 4,433 |
| श्री | 2,339 |
| टीचर | 260 |
| अध्यापक | 195 |
| मैडम | 192 |
| शिक्षिका | 103 |
| गुरुदेव | 35 |
| महोदय | 33 |
| गुरुजी | 18 |

**Caveats stated in the body, not hidden here:** this is written news prose and
over-represents formal register; the corpus is 2011, which predates आप as a political
party abbreviation (a help, not a problem); गुरु is inflated by "religious teacher" and
"Jupiter"; सर is inflated by the informal noun for "head"; मास्टर is inflated by
"master plan" and is therefore quoted but not used as evidence.

- Subject test: **pass** — Hindi address forms and pronouns.
- Swap test: **pass (no sibling could reuse it)** — the word list is teacher-address
  specific and disjoint from the gratitude set already measured in the batch.

### 2. Hadavizadeh, A. & Singh, R. (2022). "Leech's Politeness Maxims and Their Hierarchy in Hindi and Persian: A Pragmatic Study of Politeness"

- *Studii şi cercetări filologice. Seria Limbi Străine Aplicate*, 2022, pp. 16–29.
  DOI 10.5281/zenodo.7457674. Open PDF, **full text read** (pdftotext, 5,364 words).
- Peer-reviewed, open-access, indexed in DOAJ.
- Cited claims, verified verbatim in the text:
  - "deference in Hindi follows a three-tier system of तू/तुम/आप (tu/tum/aap) or (you1,
    you2, you3)", against the two-tier T/V of Persian, French, Russian and Spanish.
  - तुम between status equals "familiar but still polite" (citing Bhatt 2015: 373); तू
    "when the addressee is considered to belong to a lower social stratum"; आप "when the
    addressee enjoys a status higher than the addressor" (citing Srivastava & Pandit
    1987: 193).
  - Pandharipande's (1979) Hindi politeness hierarchy, most to least polite: Passive,
    simple present, V+Past+karana, Optative, cāhiye/should, Future imperative, Imperative.
- Nothing reproduced: no figure, table or passage of length. The tri-tier claim is stated
  in the post's own words with the source named.
- Subject test: **pass**. Swap test: **pass** — Hindi-specific, unusable in a Tamil,
  Gujarati, Telugu, Punjabi or Urdu sibling.
- **Not** the same URL or domain as the sibling's Bhatt paper (`journals.phil.muni.cz`),
  which this paper cites but is not.

### 3. Kumar, S. & Dharurkar, C. (2025). "Revisiting Passivity and Politeness in Selected Indic Languages"

- *Bhasha: Journal of South Asian Linguistics, Philology and Grammatical Traditions*
  4(1), 7–30. Published 2025-07-01. CC BY. Authors at IIT Kanpur.
  **Full text read** (PDF, 8,413 words).
- Peer-reviewed and open-access — this is the post's scholarly source of record alongside (2).
- Cited claims, verified in §4.1 and Table 3:
  - Survey of **twenty** native speakers of Thethi, Magahi and Angika, all near-native in
    Hindi (Hindi is an L2 in that region), ranking Hindi sentence structures by politeness.
  - **65% ranked the passive least polite; 70% ranked the imperative most polite** —
    the exact inversion of Pandharipande's 1979 ordering used in (2).
- This is the post's most differentiating third-party claim: it means there is no
  universally "most polite" Hindi construction, so the safe move is register marking
  (आप + honorific plural verb + a title), not clever syntax.
- Limitation stated in the body: n = 20, one language region.
- Subject test: **pass**. Swap test: **FAIL, by demonstration** — the sibling
  `birthday-wishes-for-daughter-in-hindi` cited this same URL for the same 65% / 70% figures while both
  drafts were running. Recorded in `auditReport.failed`.

### 4. Soomro, M. A. (2023). "Students and Administrative Staff Interaction: A Socio-Cultural Competence of Pakistani English Address Forms in Academic Discourse"

- *Current Issues in Philology and Pedagogical Linguistics*, 2023(2), 240–247.
  DOI 10.29025/2079-6021-2023-2-240-247. Open PDF, **full text read** (4,435 words).
- Cited claims, verified in the abstract, §Results and Table 1:
  - **252 responses**, questionnaire plus ethnographic observation, SPSS v.20.
  - Addressing senior staff: honorifics **50.3%** (78 *Sir*, 49 *Madam*);
    occupation/profession-based **11.1%**; endearments **6.3%** (10 *Dear Sir*,
    6 *Dear Madam*); titles **4.7%**.
  - Addressing junior staff: kinship terms **19.7%**; first names **7.9%**.
  - Students attached Sindhi/Urdu *saab/sahib* to a title for senior staff and avoided it
    for junior staff.
- **Honest limitation, stated in the body:** these are *administrative* staff, not
  teachers, and the setting is a Pakistani university, not an Indian school. It is cited
  as evidence about South Asian sir/madam address practice, not about teachers.
- Subject test: **pass** — institutional address forms in South Asia.
- Swap test: **pass** — no sibling in this batch is about institutional hierarchy.

### 5. N'Guessan, A. A. K., Kiroua, K. J. & Ouattara, Z. T. (2023). "Analysis of Address forms in Discourse: a Case of English Department Students and Teachers"

- *Revue Akofena*, March 2023, pp. 433–442. Open PDF, **full text read** (4,736 words).
- Cited claims, verified in §2 and Tables 1–4:
  - **389** address terms observed naturally across **sixteen** classes (lectures and
    tutorials) at Université Alassane Ouattara, Côte d'Ivoire: **153** student → teacher
    and **236** teacher → student.
  - Student → teacher: academic titles only 111, general titles only 37, academic title
    plus last name 1, general title plus last name 4 — i.e. **all 153 tokens carried a
    title**, none was a bare first name.
  - Teacher → student: second-person pronouns 92 (48 + 44), first names 86 (34 + 52),
    general title "miss" 36, last names 22.
- **Honest limitation, stated in the body:** Côte d'Ivoire, in English-medium classes, not
  India. It is cited for the *direction* of institutional address — the asymmetry — which
  is what the post claims from it, not for anything Hindi-specific.
- Subject test: **pass** — teacher/student address forms.
- Swap test: **pass**.

### Searches run, and what was not found

`ctx_execute` against the OpenAlex, Semantic Scholar and DOAJ APIs (WebSearch is
exhausted at 200/200 and was not called; WebFetch is blocked; no curl/wget). Query terms
tried: *honorific address forms Hindi study*, *Hindi honorific pronoun politeness aap tum*,
*teacher student address terms India*, *address forms sir madam Indian English classroom*,
*politeness hierarchy institutional discourse*, *honorification Hindi verb agreement
respect*, *guru shishya teacher respect India education tradition*, *WhatsApp group school
parents teachers*, *honorific machine translation Hindi formality*.

**Not found, and therefore not claimed anywhere in the post:**

- Any study of address forms between Indian **school** students and teachers. Everything
  reachable was university-level, and the two closest were Pakistan and Côte d'Ivoire.
  Both are labelled as such in the body.
- Any measured data on Hindi register in **WhatsApp class or school groups**. The
  semi-public-group section is therefore argued from the structure of the medium plus
  first-party password-protection data, and states no third-party figure.
- Any Hindi corpus other than `hin_news_2011_1M`. There is no spoken or social-media
  Hindi corpus in the collection, which is why the register caveat is stated in the body.
- OpenAlex and Semantic Scholar both returned HTTP 429 for most of the session, which
  narrowed discovery to DOAJ. Recorded in `honestAssessment` as a process limitation.

---

## Phase 4–5 — build notes

- **Length target ~1,770** per BRIEF-WAVE2 correction 2, measured with the `wordCount()`
  snippet, not a plain whitespace split.
- **Comparison table** — five rows, columns: title form / corpus frequency in the
  19,177,172-token corpus / who says it / characters it costs against the 96-character
  first-party median. The fourth column is the first-party column.
- **Table** — no table, figure or passage is reproduced from any source; every table in
  this post is computed here.
- **Internal links** — two, both `https://subhsandesh.in/templates`, placed after the six
  wishes and in the closing section. No teacher-specific template exists in
  `TEMPLATE_LINKS`, and `/birthday-gf`, `/birthday-bestfriend`, `/birthday-friend` and
  `/birthday-parents` would all be off-topic for a teacher. `templateUrls` is therefore
  `/templates` alone.
- **Category** — `milestone-birthdays`, per the batch rule.
- **Wikipedia** — zero body links. Wikipedia URLs appear only as verified `sameAs` in
  `about`/`mentions`, which do not count against the 0–2 body budget.
- **Entities, verified against the Wikipedia API on 2026-08-27 with QIDs paired:**
  Hindi (Q1568), Honorific (Q1326966), Devanagari (Q38592), Guru (Q484260),
  T–V distinction (Q1124935).
- **ItemList** — six `ListItem`s mirroring the six H3s in order.

### The six wishes, measured

All are machine-composed and **unverified** (see the blocker below). Character counts are
computed, not claimed.

| Sender | Devanagari chars | Roman chars |
|---|---|---|
| School student | 75 | 85 |
| College student | 61 | 71 |
| Parent | 76 | 91 |
| Colleague | 63 | 75 |
| Class/school group | 78 | 91 |
| Former student | 62 | 74 |

Devanagari mean 69.2 characters (415 / 6); every one is inside the 96-character median.

---

## Phase 6 — audit position

50 items, `passed ∩ failed = ∅`, `|passed| + |failed| = 50`, strings verbatim.

**The mandatory language blocker** is mapped, per BRIEF-WAVE2 correction 3, to exactly:

> The post contains at least one claim none of the top 5 pages make

recorded as **structural**. Every Devanagari string in this post — six wishes, six
transliterations, five title forms, the pronoun set — is machine-generated. The
differentiating claim of a language post *is* the script content, so until a native
reader signs it off, that claim is not established. **No citation can close it**: the
sources verify the grammar of Hindi honorification, they cannot verify that these
particular sentences read as natural, correctly diacritised Hindi to a teacher in
Lucknow. Closing condition: native-reader sign-off.

Two further failures, both real rather than mapped:

- **`Paragraphs 2–3 sentences throughout`** — the lead paragraph of each of the six H3s carries one English
  framing sentence plus a two-clause Devanagari wish plus its Roman transliteration, which is four to five
  sentence-terminated units. Fixable only by splitting the wish onto its own line, which breaks the
  four-field H3 pattern and costs words the 1,776-word body does not have.
- **`No source passes the swap test`** — the Kumar and Dharurkar URL collision above.

Everything about the research *process* — the OpenAlex/Semantic Scholar 429s, the absence of an Indian
school-level address study, the absence of a spoken Hindi corpus, and the missing relationship and
language fields in the probe — is in `honestAssessment`, not in `failed`.

**Rejected sources, and why:** `edumag.mrsu.ru` (Soomro's caste-address-form paper — the landing page
serves only the abstract and the subject drifts to caste rather than teacher register);
`clt-international.org` (Hu, Qin & Qi 2021 on 老师 *laoshi* as teacher address — genuinely on-subject and
uncontested in-batch, but it carries no measured figure and would have made three of five sources
off-region); `journals.phil.muni.cz` (Bhatt on Hindi honorifics — already the sibling
`birthday-wishes-in-hindi`'s source, and the Hadavizadeh and Singh paper reaches the same tri-tier finding
via a domain no sibling holds).

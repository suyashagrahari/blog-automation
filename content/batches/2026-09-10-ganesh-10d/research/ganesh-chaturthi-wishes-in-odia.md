# Research brief — `happy ganesh chaturthi odia`

- **Slug:** `ganesh-chaturthi-wishes-in-odia`
- **Batch:** `2026-09-10-ganesh-10d` (Ganesh Chaturthi wave 4)
- **Pool relevance:** 601 (AUTOCOMPLETE) — the lowest in the batch
- **Gate against:** `content/batches/2026-09-09-ganesh-10b/blogs/ganesh-chaturthi-wishes-in-gujarati.json`
- **Verdict: PROCEED.** Both halves of the §3 gate pass. Blog JSON written.

---

## Phase 0 — data gate (PASS)

`npm run facts` was **not** run: it is blocked by this machine's command
classifier, and re-dating `content/facts.md` would invalidate 133 `factsUsed`
entries across the 36 posts already written. The file as regenerated
**2026-09-09** is quoted as it stands.

Lines available for this keyword (≥3 required, ≥2 usable inside the first 150
words):

1. `3,894 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-09`
2. `46,005 recorded views of shared pages — measured 2026-09-09`
3. `49.6% of shared pages are opened on a phone (22,817 of 46,005 views) — measured 2026-09-09`
4. `96.0% of started pages are actually published and shared (3,737 of 3,894) — measured 2026-09-09`
5. `42.0% of creators password-protect their page before sharing it (1,636 of 3,894) — measured 2026-09-09`
6. `No Ganesh Chaturthi page-creation data exists at all: the /happy-ganesh-chaturthi template went live 2026-09-10, four days before the festival — measured 2026-09-10`

Lines 1, 2 and 3 sit inside the opening paragraph. Line 6 is used to state
plainly that no Ganesh-specific creation number exists rather than implying one.

**The Raksha Bandhan lead-time dataset is deliberately not used.** Nothing in
this post's angle needs a lead-time figure, so the two mandatory BRIEF §1
disclosures (Raksha Bandhan ≠ Ganesh Chaturthi; n = 89 is small) do not arise.
The Holi collection (n = 9) is not touched either. `pageviews` appears in no
denominator; the denominator throughout is 3,894 pages across 15 page types.

---

## Phase 1 — SERP analysis

### Recorded tool limitation

`WebSearch` is **US-locale only** — there is no `gl=in` parameter. This is an
India-intent, Odia-language keyword whose real audience is inside Odisha, so the
Odisha SERP may differ materially from what was measured. Every wave-3 post
records this; so does this one, in `auditReport` as well as here.

### Top 10 organic, `happy ganesh chaturthi odia` (measured 2026-09-10)

| # | Domain | Page identity | What it is |
|---|---|---|---|
| 1 | deviantart.com | `/rosy66/journal/Ganesha-Chaturthi-Quotes-in-Odia-984092144` | A user journal post scraping generic quotes. No Odia script above the fold, no date, no muhurat. |
| 2 | instagram.com | `/dearest_foodie_/p/C_n1uAgv43_/` | A food blogger's post. Caption only; not a wishes page at all. |
| 3 | in.pinterest.com | `/pin/…268034615312743405/` | A pin of an image. **Excluded from the gate count.** |
| 4 | bsmjsambalpuri.in | `/2021/12/ganesh-puja-wishes-in-odia-sambalpuri.html` | Wishes content farm, Odia + Sambalpuri. Dated 2021, wishes are image-first. |
| 5 | odiaquotes.com | `/odia-ganesh-puja-photo/` | "50+ Best Odia Ganesh Puja-Chaturthi Wishes Photo 2026". Image gallery; the wishes are pixels. |
| 6 | brands.live | `/template/ganesh-chaturthi-odia-greeting-155249` | A branded-poster template tool. |
| 7 | lifekafunda.com | `/site/createcard/…in_Odia` | Name-on-card generator. |
| 8 | pngkey.com | `…happy-ganesh-chaturthi-odia/` | Transparent PNG asset page. |
| 9 | nuaodisha.com | `/OdiaGreetingCards/Happy-Ganesh-Chaturthi-Greetings.aspx` | Odia greeting-card gallery. |
| 10 | nuaodisha.com | `/Happy-Ganesh-Chaturthi.aspx` | Second nuaodisha page, same cluster. |

**What the whole SERP has in common, and it is the gap:** nine of ten results
deliver the wish as an **image**. Not one of them gives the Odia line as live
text with a Roman transliteration and an English gloss; not one states the
Bhubaneswar muhurat; and not one mentions the thing every Odia reader knows —
that in Odisha this is **ଗଣେଶ ପୂଜା**, run by schools and colleges. Six of the ten
are wishes/asset content farms and are therefore competitors under
`references/competitors.md`: read in Phase 1, cited nowhere, framing not reused.

Where the direct answer appears: nowhere in results 1–3 and 6–8. Results 4, 5,
9 and 10 open with a gallery, not an answer. No AI Overview was returned for this
query in the US locale.

---

## Phase 2 — gap analysis

**Table stakes** — an Odia wish in Odia script; a short caption line; a mention of
Ganesh as the remover of obstacles; the 2026 date.

**The gap, in order of value:**

1. **The name.** In Odia the day is **ଗଣେଶ ପୂଜା**. Odia Wikipedia's article is
   titled `ଗଣେଶ ପୂଜା` and `ଗଣେଶ ଚତୁର୍ଥୀ` is a *redirect into it* — checked via the
   `or.wikipedia.org` API with `redirects=1` on 2026-09-10. No pan-India wishes
   page says this.
2. **Who runs it.** The Odia article states it directly:
   `ବିଶେଷକରି ପ୍ରତ୍ୟେକ ଶିକ୍ଷାନୁଷ୍ଠାନରେ ଏହି ପୂଜା କରାଯାଇଥାଏ` — "especially, this puja
   is performed in every educational institution" — and that Ganesha is
   `ବିଦ୍ୟାର ଦେବତା`, the god of learning. It also records that in **Jatani,
   Odisha it runs for 11 days**. Household mandaps are not the centre of gravity
   in Odisha; school and college pandals are.
3. **Live text vs pixels.** Nine of ten ranking results ship the wish as an
   image. An Odia sentence sent as a JPEG is unsearchable, uncopyable and
   invisible to a screen reader — and Odia is measurably short of text to begin
   with (OdNER, below).
4. **Rendering.** Whether Odia arrives correctly on the recipient's phone is a
   real, answerable question that no wishes page addresses. Ishida's orthography
   notes document that fonts disagree on Odia conjunct forms — Noto Sans Oriya
   stacks the *ʤ* conjunct, Noto Serif Oriya and Oriya Sangam MN conjoin it.
5. **Register.** Which wish you send depends on the relationship, not the
   sentiment — which is precisely Sahoo's finding on Odia politeness.

**Stale data on the SERP:** result 4 is dated 2021; result 5 headlines "2026" over
undated images.

**Fan-out sub-queries → H2/H3 map:** is it Ganesh Chaturthi or Ganesh Puja in
Odia? · what is the Odia for "happy Ganesh Chaturthi"? · what do Odia schools do?
· when is it in 2026 and what is the Bhubaneswar muhurat? · will Odia script show
on my relative's phone? · what should I write to a student? · Odia vs Bengali
script confusion · how many days is it kept in Odisha?

**Angle (one sentence, recorded as `batchMeta.angle`):** wins by being the only
Ganesh page that treats the Odia observance as **Ganesh Puja run by educational
institutions** — the framing Odia Wikipedia states and every pan-India wishes
page misses — with nine wishes given as live Odia text plus transliteration and
gloss, each token attested against a live Odia corpus, priced against
SubhSandesh's platform-wide 49.6% phone-open rate over 46,005 views.

---

## Phase 3 — the cannibalisation gate (BLOCKING) — **PASS, counted**

### (a) SERP half — 0 shared results

Top 10 for the sibling keyword `ganesh chaturthi wishes in gujarati`, measured
the same day on the same engine:

1. smitcreation.com · 2. gujaratiimages.com · 3. explorequotes.com ·
4. gujarati.webdunia.com (2025 article) · 5. gujarati.webdunia.com (2024 article) ·
6. gulfnews.com · 7. gulfnews.com · 8. newsonair.gov.in · 9. newsonair.gov.in ·
10. bombaylives.substack.com

**Count, excluding `pinterest.com` and `youtube.com`:**

| Measure | Count |
|---|---|
| My top-10 domains (pinterest excluded) | 9 |
| Sibling top-10 domains (pinterest excluded) | 10 |
| **Shared domains** | **0** |
| **Shared results (same domain *and* same article identity)** | **0** |

Zero, not two — the two SERPs do not intersect at the domain level, let alone at
article identity, so the "Spotify precedent" false-merge question never arises.
Threshold is 3; measured 0. **No second-engine corroboration needed** (that is
only required at exactly 2). **PASS.**

The reason is structural: an Odia-language query is served by Odia-language
publishers (nuaodisha, odiaquotes, bsmjsambalpuri) and a Gujarati-language query
by Gujarati-language publishers. Language lanes separate cleanly, which is what
`ASSIGNMENTS.json` predicted for this slot.

### (b) Substantive-duplication half — PASS

The Gujarati sibling's JSON was read in full before drafting, and
`ganesh-chaturthi-wishes-in-tamil.json` was read as a second reference point for
how the lane is built. Overlap audit:

| Dimension | Gujarati sibling | This post | Duplicate? |
|---|---|---|---|
| Central claim | Gujarat's Ganesh does **not** run into Navratri; Pitru Paksha is the gap | Odisha's observance is **Ganesh Puja run by schools and colleges** | No — different claim entirely |
| Sources | AiBi (Gujarati NLP), IJMEMS (Gujarati OCR), Wellington thesis, GRFDT Lisbon, UNESCO Garba, Drik Ahmedabad | Acta Linguistica Asiatica (Odia politeness), Natural Language Processing Journal (OdNER), PUMRJ (Odia festivals), Ishida orthography notes, `or.wikipedia.org`, Drik **Bhubaneswar** | **0 shared URLs, 0 shared domains** except drikpanchang.com, which is a different geoname (1279233 Ahmedabad vs 1275817 Bhubaneswar) under the date-reference exemption |
| First-party lines | 2026-09-08 vintage: 3,860 pages / 45,656 views / 49.6% / 96.1% / 42.1% | 2026-09-09 vintage: 3,894 pages / 46,005 views / 49.6% / 96.0% / plus the "no Ganesh data exists" line | Different numbers, and one line the sibling does not have |
| Reader | Gujarati diaspora in Leicester and Edison | Students and their families in Odisha, plus relatives outside the state | No |
| Structural echo | Nine wishes with transliteration + gloss, a four-way table, a "wrong choice" section | Same *lane shape*, because the schema and `page-structure.md` require it | Shape shared, substance not |

The honest caveat, stated here and in the audit: the **format** is the lane's
format — nine numbered wishes, a comparison table, an objection section. That is
what `references/page-structure.md` prescribes and what five siblings already do.
What is not shared is any claim, any source, any wish line, or any argument. The
Tamil sibling's second half argues *idaiyuru vs vikkinam* and *centamil vs
koduntamil*; the Gujarati sibling's argues the Navratri gap; this one argues
institutional observance and script survival. Not a re-run with a different
script.

---

## Phase 3b — Odia script verification (the assignment's hard constraint)

The wish lines were **not** written from memory and then hoped over. Four
mechanical checks were run in the sandbox, and every one is reproducible.

**A. Codepoint block audit.** All 417 non-punctuation glyphs across the ten
drafted Odia lines were tested against Unicode block ranges. Result: **417/417 in
the Oriya block U+0B00–U+0B7F. Devanagari (U+0900–U+097F): 0 characters.
Bengali (U+0980–U+09FF): 0 characters. Other blocks: 0.** This is the check that
catches the two failure modes the assignment names — Bengali glyphs substituted
(ও for ଓ, আ for ଆ) and Devanagari substituted — and both come back clean.

**B. Normalisation and nukta encoding.** Every line is already NFC-normalised.
`ଡ଼` in `ଲଡ଼ୁ` is stored as U+0B21 + U+0B3C (DDA + NUKTA), the encoding Unicode
recommends, not the discouraged precomposed U+0B5C. No orphan combining mark
appears at the start of any word (checked against the vowel-sign, candrabindu,
anusvara, visarga, nukta and halant ranges): 0 orphans.

**C. Token attestation against a live Odia corpus.** A 77 KB corpus of real Odia
prose was pulled from the `or.wikipedia.org` and `or.wikisource.org` APIs
(45 article extracts plus 20 Wikisource pages). Every token in every wish line
resolves by one of: exact corpus match, stem match, an `or.wiktionary.org`
headword, or an `insource:` hit count on Odia Wikipedia. Selected counts:
`ବିଦ୍ୟାଳୟ` 782 · `କରନ୍ତୁ` 497 · `କେବେ` 444 · `କଠିନ` 219 · `ଆପଣ` 185 ·
`ମଣ୍ଡପ` 135 · `ଆଶୀର୍ବାଦ` 136 · `ଶିକ୍ଷାନୁଷ୍ଠାନ` 98 · `ଆପଣଙ୍କ` 77 · `ଛାତ୍ରଛାତ୍ରୀ` 44 ·
`ଖାତା` 33 · `ରହୁ` 27 · `ଶୁଭେଚ୍ଛା` 16 · `ଜାଣିଛି` 9 · `ମନୋକାମନା` 5 · `ଆସନ୍ତୁ` 5 ·
`ହାର୍ଦ୍ଦିକ` 3 · `ଆଣନ୍ତୁ` 1. Wiktionary headwords confirmed for `କଠିନ`, `କେବେ`,
`ଖାତା`, `ଜାଣିବା`, `ଠାକୁର`, `ଭୋଗ`, `ଲଡ଼ୁ`, `ଶୁଭେଚ୍ଛା`, `ହାଲୁକା`.
**Fully unattested tokens: 0.**

**The one honest limitation.** The greeting *phrase* `ହାର୍ଦ୍ଦିକ ଶୁଭେଚ୍ଛା` returns
**0** `insource:` hits on Odia Wikipedia, because an encyclopaedia does not greet
anybody. Both constituent words are attested (`ହାର୍ଦ୍ଦିକ` 3 hits; `ଶୁଭେଚ୍ଛା` 16
hits and an `or.wiktionary.org` headword), and the compound is the ordinary Odia
greeting formula, but the *bigram* itself is corroborated by construction rather
than by corpus frequency. That is recorded as-is; it is not claimed as verified
frequency.

**D. Belt and braces for the reader.** Independent of all the above, every wish
carries a **Roman transliteration and an English meaning** on the two lines
below it. A reader whose phone lacks an Odia font, or who speaks Odia but reads
only Roman letters, still receives the wish. The post says so in prose rather
than leaving it implied.

`ORIYA` is retained as the Unicode block name because that is what Unicode calls
it; the language and script are called **Odia**, which India made the
constitutional spelling in 2011.

---

## Phase 3c — sources (6; caps checked against all 39 written posts)

Checked programmatically across `content/batches/*ganesh*/blogs/*.json`.
**`doi.org` is at 15 posts and was therefore avoided** — the OdNER citation uses
the publisher URL instead of its DOI. `en.wikipedia.org` (6 posts) is untouched;
`or.wikipedia.org` is a distinct host at 0 posts.

| # | Source | Test it passes | URL count in batch | Verified how |
|---|---|---|---|---|
| 1 | Sahoo, K. (2013), "Pronouns, Address Forms and Politeness Strategies in Odia", *Acta Linguistica Asiatica* 3(1), 29–46 | **Subject + peer-reviewed + open access.** Literally about how Odia chooses an address form by relationship | 0 (`journals.uni-lj.si` 0 posts) | Article page fetched; **abstract only** — the PDF galley (`/view/65/324`) is a viewer wrapper the sandbox could not extract, so only what the abstract states is cited |
| 2 | Dalai, Das, Mishra & Sa (2025), "OdNER", *Natural Language Processing Journal* 11, 100139 | **Subject + peer-reviewed + open access** (DOAJ-listed). About the Odia language's text scarcity | 0 (`sciencedirect.com` 0 posts) | Abstract retrieved verbatim from the DOAJ API and quoted only from it; **full text not read** (ScienceDirect not retrievable) |
| 3 | Majhi, L. (2024–25), "The Uniqueness of Oḍiā Festivals", *PUMRJ* 2(1) | **Subject.** Utkal University Sanskrit dept, on Odia festivals | 0 (`pumrj.com` 0 posts) | **Full text read** — 17-page PDF fetched and text-extracted. Places `Gaṇeśa Caturthī` in Bhādraba (Aug–Sep) and states the "13 festivals in 12 months" (*Bāra Māsa re Tera Parba*) formula |
| 4 | Ishida, R., *Oriya (Odia) Orthography Notes*, updated 28 April 2026 | **Subject.** The script itself | 0 for this URL; `r12a.github.io` at 1 post (Tamil, different URL) — cap is 3 | **Full text read.** 36 basic consonants, 9 vowel signs, 10 independent vowels, 93 characters in the Oriya block in Unicode 17, rounded shapes from palm-leaf writing, font disagreement on conjuncts |
| 5 | `or.wikipedia.org`, `ଗଣେଶ ପୂଜା` | **Entity / native-name verification only — not counted as research.** 1 of the permitted 0–2 Wikipedia links | 0 | Fetched via the MediaWiki API with `redirects=1`: `ଗଣେଶ ଚତୁର୍ଥୀ` redirects to `ଗଣେଶ ପୂଜା`; article text supplies `ବିଦ୍ୟାର ଦେବତା`, `ପ୍ରତ୍ୟେକ ଶିକ୍ଷାନୁଷ୍ଠାନରେ`, and Jatani's 11 days |
| 6 | Drik Panchang, Ganesh Chaturthi 2026 for Bhubaneswar (geoname 1275817) | **[date/festival reference] — exemption claimed and marked in the source entry** | `drikpanchang.com` at 20 posts, exempt; this geoname unused | Page fetched and parsed: Monday 14 September 2026; Madhyahna muhurat 10:28 AM–12:56 PM; Chaturthi tithi 07:06 AM 14 Sep → 07:44 AM 15 Sep; visarjan Friday 25 September 2026; location string confirmed "Bhubaneshwar, Odisha, India" |

**Generic context statistics (PIB / TRAI / Census / MEA): 0 used.** None was
needed, and none was added to pad the count.

**Swap test.** No source survives being moved to another keyword in this batch.
Odia address forms, an Odia NER corpus, Odia festivals, Odia orthography and the
Odia name of the festival are all unusable in `ganesh-chaturthi-holiday-2026`,
`ganesh-chaturthi-ai-prompts` or any other row. The Bhubaneswar panchang is the
only entry another post could reuse, and it is the exempt date reference.

**Searches that failed, recorded honestly.** No scholarly work was found on Ganesh
Puja in Odisha specifically, or on its student-and-institution character.
Terms tried: `Ganesh Puja Odisha students schools colleges tradition Odisha
Review`; `Ganesh Puja Odisha educational institutions pandal students research
paper Utkal Bhubaneswar festival sociology`; `"Odisha Review" magazine Ganesh
Puja` (the government magazine archive carries Durga Puja articles, not Ganesh).
The institutional claim therefore rests on the Odia-language Wikipedia article
plus Majhi's festival calendar, not on a study — and the post does not dress that
up as one.

---

## Phase 4–5 decisions

- **Word band:** 1,650–1,760 by plain whitespace split *including* the §0 social
  block. Measured with
  `python3 -c "import json,sys;print(len(json.load(open(sys.argv[1]))['article']['contentMarkdown'].split()))"`.
  `wordCount()` in `app/lib/batches.ts` reads 20–50 high and was not used.
- **§0 social block:** pasted verbatim, immediately before `## Sources`. Its two
  URLs are **not** in `batchMeta.sources` and count toward no quota.
- **FAQs:** 10, in `article.faqs` only, with an `@id`-matched FAQPage on
  `…#faq`. None in `contentMarkdown`.
- **Internal links (3, absolute):** `https://subhsandesh.in/happy-ganesh-chaturthi`
  (mandatory, in the students section, after the value is established),
  `https://subhsandesh.in/guides/happy-ganesh-chaturthi` (body reference in the
  script section), `https://subhsandesh.in/templates` (objection section).
  Relative paths were avoided entirely — the verifier's regex
  `\]\((\/[a-z0-9-]+)\)` cannot match a two-segment path.
- **`templateUrls`:** `["/happy-ganesh-chaturthi"]` only. Not `/templates`, not
  a `/guides/...` path.
- **`categorySlug`:** `indian-festivals`.
- **Marker words unique to this keyword,** so a crossed-over draft would be
  detectable: `Jatani`, `ଶିକ୍ଷାନୁଷ୍ଠାନ`, `OdNER`.
- **`structuredData`:** an `ItemList` mirroring the nine H3s in order, plus an
  `@id`-matched `BlogPosting` enrichment on `…#post` carrying `about`,
  `mentions` and a `citation` array mirroring all six sources one-to-one. Every
  `sameAs` was checked against the Wikipedia API with its Wikidata QID paired:
  Ganesh Chaturthi Q929250, Odia language Q33810, Odia script Q1760127,
  Odisha Q22048, Bhubaneswar Q171771. No `AggregateRating`, `Review` or `HowTo`.

---

## Phase 6–7 — as shipped, measured on the file on disk

| Check | Result |
|---|---|
| Body words, plain whitespace split, including the §0 social block | **1,738** (band 1,650–1,760) |
| Measured with | `python3 -c "import json,sys;print(len(json.load(open(sys.argv[1]))['article']['contentMarkdown'].split()))"` — `wordCount()` from `app/lib/batches.ts` was **not** used |
| H1 / H2 / H3 counts | 1 / 8 / 9, no skipped levels |
| `article.faqs` | 10; zero FAQ headings in `contentMarkdown`; FAQPage `mainEntity` matches `article.faqs` question-for-question and answer-for-answer |
| `ItemList` | 9 items, mirroring the nine H3s in the same order |
| First-party numbers in the first 150 words | 3 — 3,894 pages, 46,005 views, 49.6% phone |
| `factsUsed` | 6, all byte-verbatim against `content/facts.md` (string-matched, 0 mismatches) |
| §0 social block | present verbatim, and the gap between its end and `## Sources` is empty |
| Its two URLs in `batchMeta.sources` | **no** |
| Internal links | 3, all absolute `https://subhsandesh.in/...`; the verifier's relative regex `\]\((\/[a-z0-9-]+)\)` matches **0** times, as intended |
| `categorySlug` / `templateUrls` | `indian-festivals` / `["/happy-ganesh-chaturthi"]` |
| Audit invariants | `passed ∩ failed = ∅` (0 overlap); `|passed| + |failed| = 47 + 3 = 50` |
| Schema validator from `references/article-json-schema.md` | `OK (1738 words)` — no dead structuredData blocks, `@id`-matched enrichment present |
| `citation` vs `batchMeta.sources` | 6 vs 6, one-to-one |
| Marker words unique to this keyword | `Jatani`, `OdNER`, `ଶିକ୍ଷାନୁଷ୍ଠାନ` — all present |

### Odia script audit re-run on the shipped JSON, not on the draft

- **571 Oriya-block glyphs** in `contentMarkdown`.
- **Bengali codepoints (U+0980–U+09FF): 0.**
- **Devanagari letters: 8, and all eight are deliberate** — they spell शुभकामना
  in the single sentence that contrasts the Hindi word with the Odia ଶୁଭେଚ୍ଛା.
  There is no Devanagari anywhere else. The 15 further hits in the Devanagari
  *block* are U+0964 DANDA, which is the correct sentence terminator for Odia
  (Ishida: "dandas are used for sentence and verse final punctuation").
- The **nine wish lines audited in isolation** contain nothing but Oriya-block
  characters, space, comma, question mark and U+0964. No Latin, no Devanagari,
  no Bengali.
- File is NFC-normalised; the deprecated precomposed nukta letters U+0B5C /
  U+0B5D appear **0 times**.

### Verifier note

`node scripts/verify-batch.mjs content/batches/2026-09-10-ganesh-10d` cannot run
yet: it reads `batch.json`, which does not exist because five sibling agents are
still writing into this batch directory. `batch.json` is a shared file and was
deliberately **not** created here. The two checks that verifier owns and that
could be reproduced locally — the plain-split word count and the absolute-link
regex — were both run against the shipped file and both pass.

## Scratch files (namespaced per §7)

`/tmp/odia/ganesh-chaturthi-wishes-in-odia-lines.txt` — the ten verified Odia
lines, written before drafting so the script work survived independently of the
draft.

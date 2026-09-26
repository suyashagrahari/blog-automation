# Research brief — `i miss you in arabic`

Batch `2026-09-25-miss-you-30`. Slug `i-miss-you-in-arabic`, checked free against
the Strapi API on 2026-09-25 (`filters[slug][$eq]` returned 0 rows). Category
`miss-you-across-miles`.

---

## Phase 1 — SERP, as actually run

One `WebSearch` on the exact keyword, per the batch budget. Results in the order
returned:

| # | Result | What it is |
|---|---|---|
| 1 | arabic.fi/sentences/2322 | A sentence database entry, "I miss you (m). An Arabic verbal sentence." |
| 2 | blog.alifbee.com | Language-app blog, "10 Ways to Say I Miss You in Arabic" |
| 3 | quora.com | Q&A thread |
| 4–5 | wordhippo.com ×2 | Dictionary-lookup pages, "I miss you" and "I missed you" |
| 6 | earabic.io/blog | Language-school blog |
| 7 | ithacaboundlanguages.com | "I miss you in Tunisian Arabic" |
| 8–9 | en.wikipedia.org ×2 | Two songs titled "I Miss You" — unrelated |

**No page on this SERP was fetched, linked, cited or paraphrased**, per
`references/competitors.md`. Consequently this brief makes **no claim** about
their word counts, heading structures, schema or data recency, because none was
measured. Anything the post says about "what nobody else prints" is grounded in
the dictionaries and corpora below, not in an unrun comparison.

Two errors were visible in the search-result summary itself and are corrected in
the post:

1. It presented **أفتقدك (aftaqiduka)** as a pronunciation/spelling of اشتقت إليك.
   It is a different verb on a different root (افتقد).
2. It glossed **وحشتني** as "I miss you **very much**". The intensifier is not in
   the morphology.

## Phase 2 — Gap and angle

**Table stakes** (everything on this query has to carry these): the MSA form
اشتقت إليك with a transliteration; the fact that Arabic verbs agree with the
addressee's gender; at least one dialect form.

**The gap.** Everything on this SERP tells the reader that Arabic marks gender.
Nothing measured here tells them **that the mark is normally absent from the
text**, **which codepoints it is**, or **that the Egyptian dialect writes the same
distinction as a full letter**. That last point reverses the usual
standard-is-precise, dialect-is-loose assumption, and it is verifiable from a
conjugation table anyone can open.

**Fan-out sub-queries** → H2s / FAQs: *is it different for a man and a woman* ·
*how do I tell which one I copied* · *what does وحشتني mean literally* · *is MSA
too formal to text* · *what do Egyptians actually say* · *what about the Gulf* ·
*how is it pronounced* · *do I need the vowel marks*.

**Angle.** Wins by being the only post that names U+064E and U+0650, counts how
often attested Arabic writes them (zero of four Tatoeba sentences), shows that
Egyptian وحشتني marks the same distinction with a written ي, and puts that beside
recipient-side data from 214 `/missyou-gf` pages.

## Phase 3 — Sources, all fetched and read

| Source | Domain posts before this one | What it verifies |
|---|---|---|
| Lane, *An Arabic-English Lexicon*, root و ح ش (Perseus, Tufts) | 0 | وَحْشٌ = wild animal / monster / "Desolate, deserted, or destitute of human beings"; form IV اوحش الرَّجُلَ = "He made the man lonely … [by his absence]", contrary of آنَسَهُ; **"Hence the saying of the people of Mekkeh, [and of Egypt,] أَوْحَشْتَنَا"** |
| Wiktionary, وحش | exempt | Egyptian form-I *waḥaš* "to miss, **to cause longing**"; past 2nd person وحشت *waḥašt* (m) / وحشتي *waḥašti* (f); Hijazi example وَحَشْتَنِي من زمان عنك |
| Wiktionary, اشتاق | exempt | Form VIII on ش و ق, "to yearn for" then "to miss"; examples أَشْتَاقُ إِلَيْكَ *to a man* / أَشْتَاقُ إِلَيْكِ *to a woman*; perfect اِشْتَقْتُ / اِشْتَقْتَ / اِشْتَقْتِ; Hijazi *aštagt*, اشتاقوا لك = *aštāgōlak* |
| Tatoeba (ara→eng, api_v0, paged) | exempt | 4 sentences contain اشتقت إليك (392778, 11782987, 3659935, 394055); **0 of 4 carry U+064E or U+0650**; **0 sentences** contain وحشتني or وحشني; 392779 افتقدتك = "I miss you" |
| Unicode, `UnicodeData.txt` + `Blocks.txt` | exempt | `064E;ARABIC FATHA;Mn`, `0650;ARABIC KASRA;Mn`, `064A;ARABIC LETTER YEH;Lo`, `0643;ARABIC LETTER KAF;Lo`; `0600..06FF; Arabic` |
| Magidow 2013, *Journal of Arabic and Islamic Studies* 13 (journals.uio.no) | 0 | Survey of **28 native speakers of Damascene Arabic**: they "tend to avoid elements that are common in their local colloquial dialect, even if they are attested and permissible in Modern Standard Arabic" |

Peer-reviewed + open access: Magidow 2013. Generic context statistics: **zero**.
Wikipedia in the body: **zero** (Wikipedia URLs appear only as `sameAs` targets in
`structuredData`, which does not count against the body budget).

### Sources that were wanted and could not be used

- **Asadi & Ibrahim, "Diglossia and Orthographic Complexity as Multiplicative but
  not Additive Challenges in Arabic"** (*J Psycholinguist Res*,
  doi:10.1007/s10936-026-10214-3, PMC13050341). The single closest paper to this
  post's angle — diglossia *and* the missing short vowels. The PMC family was at
  the 3-post batch cap, and both publisher copies (`link.springer.com`, and
  `www.nature.com` for the *Scientific Reports* alternative on dialectal
  substitution) served a JavaScript bot challenge instead of text.
- **Almaany** — HTTP 403 behind a Cloudflare challenge on all three lookups
  (اشتقت, وحشتني, شوق).
- **lexicon.quranicarabic.com** — a parked domain for sale, not a lexicon.
- **arabiclexicon.hawramani.com** — database error (HTTP 500).
- **archive.org** Lane scans — require JavaScript. Perseus serves the same
  1863–1893 edition as text, split by letter, and was used instead.
- **Lane, root ش و ق** — fetched and read
  (`…2002.02.0027:root=$wq`). Glosses اشتاق إليه "He was, or became, desirous of
  it … [or he yearned or longed for it in his soul]" and شَوْقٌ "Desire, or
  yearning or longing of the soul"; its form-I شَاقَنِى is itself inverted ("It …
  excited my desire"), a classical parallel to the وحشتني inversion. **Cut from
  `sources` to stay inside the 4–6 cap**; the sense-ordering claim was re-sourced
  to Wiktionary's اشتاق entry and the شَاقَنِى parallel was dropped from the post
  entirely.

## The keyword-harvest problem, measured

`content/keywords/2026-09-25-miss-you-global/ac/sa-ar/autocomplete.csv` holds
**40 rows**. `us-en` holds **1,216**. The cause is in the data: every row's
`source_prefixes` column is the seed `اشتقت اليك` followed by a **Latin** letter
(`a b e f g i m p t` and the bigram `in`). The harvester expands seeds with a–z,
which cannot expand an Arabic stem.

So the Arabic-side demand evidence is thin *by construction*, not because Arabic
demand is thin. What the 40 rows do show:

- **21 of 40** are people translating *out* of Arabic — into English, French,
  Spanish or Turkish.
- **9 of 40** name a relative: ابي, امي, اخي, اختي, حبيبتي, حبيبي, including
  `اشتقت اليك ابي رحمك الله`, addressed to a dead father.
- **7 of 40** are one poem line, `اشتقت اليك فعلمني الا اشتاق`. One row attributes
  it to نزار; no fetched source confirms authorship, so the post does not name a
  poet.
- **0 of 40** contain وحش in any form — the seed never gave it a chance.

English side, where this post's own keyword lives: `i miss you in arabic` surfaced
in **us-en only** (2 prefix hits, best rank 10); `miss you in arabic` in `gb-en`
and `us-en` (4 prefix hits); `what's i miss you in arabic` in `in-en` and `us-en`.
Also present: `miss kita in arabic` (ph-en) and `aku rindu kamu in arabic`
(id-id).

## Lines cut, and why

1. **Tunisian توحّشتك** — Wiktionary's توحش has no Tunisian section and no "miss"
   sense in MSA. SERP-only.
2. **Moroccan اشتئتلك** — no fetched dictionary entry.
3. **"Levantine وحشتني"** — South Levantine اشتاق gives حنّ (*ḥann*) as its
   synonym, not وحش; the وحش page has Egyptian and Hijazi sections only.
4. **اشتقتلك as one word** — no entry; the Hijazi example writes the preposition
   separately (اشتاقوا لك) while transliterating it as a clitic.
5. **أفتقدك** — the corpus attests the perfect افتقدتك, not the imperfect.
6. **The poem's attribution** — see above.
7. **"وحشتني = I miss you very much"** — the intensifier is not in the morphology.
8. **Labelling اشتقت لك "Gulf"** — the fetched evidence is Hijazi (code `acw`),
   western Saudi Arabia.

## Corrections to the task prompt

- The prompt paired the string **وحشتني** with the transliteration
  **waḥaštīni**. They belong to different addressees: وحشت + ني is *waḥaštini*, to
  a man; *waḥaštīni* is وحشتيني, to a woman. The post prints both, correctly
  paired, and makes the mismatch its strongest claim.
- The prompt gave the MSA forms as the perfect only. Wiktionary's own examples and
  the live hub both use the **present** أشتاق إليك. Both are current.
- The prompt says one unwritten vowel hides the addressee. **Two** decisions are
  hidden: اشتقت is also اِشْتَقْتُ / اِشْتَقْتَ / اِشْتَقْتِ.

## First-party data and its limits

`/missyou-gf` letter text is free input and is **not language-tagged**, so the
platform cannot say whether any of the 214 senders wrote a word of Arabic. Every
first-party number in the post is about the **channel** — password, letter length,
voice note, reunion date, hug taps — never about the language.

The three mandatory caveats appear in body prose: the city / background-music /
"together since" fields are **pickers with defaults**; `viewCount` is **page
views, not unique visitors**; and **n = 214 over two months** (template live
2026-07-28) supports no seasonal claim.

## Hub relationship

`/blog/i-miss-you-in-different-languages` (Strapi id 1360) is live and gives
Arabic one line: *"Arabic: أشتاق إليك (ash-taaq ilayk / ash-taaq ilayki)"*, plus a
general note that Arabic "changes verbs based on gender or formality". It never
says which mark makes the difference, never says the mark is normally absent, and
never mentions a dialect. Its table is **not** restated. This page is the Arabic
depth beneath it.

## Cannibalisation

No live Strapi slug contains "arabic" (queried 2026-09-25). None of the 81 live
"miss" slugs is a translation spoke for a Semitic language. Differs on the
**language** axis from all of them. No merge recommended.

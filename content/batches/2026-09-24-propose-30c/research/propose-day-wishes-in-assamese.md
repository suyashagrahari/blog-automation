# Research brief — `propose day wishes assamese`

**Slug:** `propose-day-wishes-in-assamese` · **Category:** `modern-romance` · **Batch:** `2026-09-24-propose-30c`
**Date of work:** 2026-09-24. Weekday verified with `date` and with a UTC calendar calculation:
Rose Day **Sunday 7 Feb 2027**, Propose Day **Monday 8 Feb 2027**, Valentine's Day **Sunday 14 Feb 2027**.

---

## Phase 0 — first-party data

Four lines copied verbatim from `content/facts.md` (regenerated 2026-09-24). Two sit inside the first
150 words of the body. Every one is labelled **platform-wide across 21 page types** or **sampled on
the named template**, in body prose, never attributed to proposal pages.

| Fact | Where it appears |
|---|---|
| 5,148 personalised pages created since 2026-03-12, across 21 page types | answer block |
| 48.3% of shared pages opened on a phone (27,499 of 56,886 views) | answer block, table row 1 |
| Most-viewed template: love-gf — 16,998 views, 29.9% of all page views | "where to send the line" |
| 90.9% of started pages published and shared (4,679 of 5,148) | table row 2 |

The `proposalpages` probe remains refused by this machine's production-read policy, so no
proposal-specific figure exists and none is claimed. The pricing block in `facts.md` is empty for a
fourth batch, so no price, free tier or paid tier appears anywhere.

---

## Phase 1 — SERP: NOT MEASURED. What was actually done.

One US-served `WebSearch` on 2026-09-24 for `propose day wishes in Assamese অসমীয়া`. It returned
Pinterest, three Wikipedia articles (Propose Day, Asom Divas, Assamese calendar), a TikTok video and
two Assamese **anniversary**-wishes blogs (fittingfattang.com, impetuslabs.com). **No page dedicated
to Propose Day wishes in Assamese appeared, and none of the results was fetched.**

That is one query from one tool, not an India-served Google SERP. **Nothing in the post describes
what any competing page contains.** The inherited Phase 1 for this batch covers 11 India-served SERPs
measured on 2026-09-16 (`content/keywords/2026-09-16-propose-100/`), none of them this keyword. The
checklist item "The post contains at least one claim none of the top 5 pages make" is recorded as
**failed** for exactly this reason.

---

## Cannibalisation — the real risk here, and it is not Bengali

The task named wave 3's `propose-day-wishes-for-girlfriend-bangla` and `propose-day-quotes-in-bengali`
as banned. Both are **Bengali**, a different language; Bhattacharyya (2020) is cited in the body for
that point, and this page makes it without being defensive about it.

The live risk is different and was found by querying Strapi. **The live corpus is not empty of
Assamese.** `love-letter-for-girlfriend-in-assamese` (id 1986, published 2026-09-02) is already live
and already covers ৰ/ৱ, the তই/তুমি/আপুনি register, and machine translation failing Assamese.

How this post differs, checked against the live article's own body and sources:

| | Live `love-letter-...-in-assamese` | This post |
|---|---|---|
| Intent | a letter the reader composes for an existing girlfriend | short copy-text lines for a dated occasion, sent to someone who is not yet a partner |
| Editorial choice | **deliberately withholds finished lines** — "I am deliberately not giving you a finished letter to copy" | **publishes 11 finished lines**, plus a ledger of 5 cut |
| Instrument | English Wiktionary Assamese entries | Candrakanta Abhidhana (1962) + Tatoeba Assamese (14,805 sentences) + UD_Assamese-AiW (871 tokens) |
| Standard cited | Unicode Standard 16.0, Chapter 12 | Unicode Character Database **18.0.0** data files (`NamesList.txt`, `UnicodeData.txt`, `Blocks.txt`) |
| Script claim | asserted | **measured** — codepoint scan of all 11 lines, plus corpus and treebank baselines |
| Research sources | Mahanta 2012, Boruah 2020, Biswas 2024, Nath & Gulzar 2026, Wiktionary | Sharma 2021, Kakwani 2020, Doddapaneni 2023, Bhattacharyya 2020 — **disjoint** |
| First-party figures | superseded (987 pages, 3,377 total, 7.2 h) | 2026-09-24 set |

One overlap is unavoidable and turned into a differentiator: both pages carry মই তোমাক ভাল পাওঁ,
the canonical "I love you". The live post writes it closed as **ভালপাওঁ**; this post writes it open
as **ভাল পাওঁ** with a space, because Candrakanta headwords the verb as **ভাল পা** (two words) and
the corpus returns **74 hits for ভাল পাওঁ and 0 for ভালপাওঁ**. The closed form is not wrong — the
corpus does carry ভালপোৱা 4 times against 23 for ভাল পোৱা — and the post does not say it is.

The live article is referenced in prose, not linked: `/blog/` slugs are not `TEMPLATE_LINKS` entries.

---

## Phase 2 — gap and fan-out sub-queries

**Angle (one sentence).** Wins by being the only Propose Day page that publishes its Assamese lines
with the instrument each one was checked against, reports the five lines it cut and why, and proves
the text is Assamese rather than Bengali with a codepoint scan returning zero occurrences of U+09B0.

**Fan-out sub-queries** the keyword decomposes into, each mapped to an H2 or an FAQ:

| Sub-query | Where answered |
|---|---|
| When is Propose Day 2027? | H2 1, FAQ 1 |
| What counts as a "wish" in Assamese, and is it a marriage ask? | H2 1 |
| Which "you" do I use — তই, তুমি or আপুনি? | H2 2, FAQ 3 |
| How do I say "I love you" in Assamese? | H3 1, FAQ 4 |
| Give me the lines, with transliteration | H2 3 |
| Is Assamese the same as Bengali? | H2 4, FAQ 2 |
| What is the difference between ৰ and র / what is ৱ? | H2 4, FAQ 5, FAQ 6 |
| Why is Assamese content online so bad / can I use a translator? | H2 5, FAQ 7 |
| Script or Roman? Will it render? | H2 5 table, FAQ 8, FAQ 9 |
| Why so few lines? | H2 6, FAQ 10 |
| She hasn't replied — what now? | H2 7, FAQ 11 |
| Are there Assamese templates? | H2 5, FAQ 12 |

---

## Phase 3 — research lane and sources

**Lane:** Assamese as a distinct language and a low-resource one. Queries run through
`findpapers.mjs`: `Assamese language low resource NLP`, `Assamese language identity Assam script`,
`Assamese morphology grammar description`, `digital language vitality language technology divide`,
`Assamese script orthography Bengali distinction`, `Assamese Asamiya language technology resource
creation`. Search budget used: **1 of 4 WebSearch calls** (the SERP pass above); everything else went
through findpapers and direct fetches.

Rejected candidates and why: Joshi et al. 2020 (ACL) — fetched and grepped, **the PDF never names
Assamese**, so it is cited only at second hand through Doddapaneni's Table 14; ACM TALLIP Assamese
lemmatizer and the Cambridge English–Assamese NMT paper — paywalled; Research Square and SSRN
Assamese preprints — not peer reviewed; Europe PMC / PMC results — domain at cap, and all Bangla or
Sylheti rather than Assamese; Census 2011 Statement-1 — **HTTP 404 on 2026-09-24**, so no
Assamese-speaker population figure is claimed anywhere on the page.

**Sources used (4). All full texts read; none paywalled; all open access.**

1. **Sharma, S. (2021), "Morphophonemic variation in the nominal morphology of Assamese,"
   *Himalayan Linguistics* 20(2), Gauhati University, CC BY-NC-ND** —
   `https://escholarship.org/uc/item/2qr4s19d`
   Table 2 gives the accusative in *-k*: mɔi+k → mʊk, tɔi+k → tʊk, tumi+k → tʊmak, apuni+k → apʊnak,
   and labels তই *2nd person non-honorific*, তুমি *2nd familiar*, আপুনি *2nd honorific*. Genitive:
   tʊma + ɹ → tʊmaɹ. This is what verifies the oblique pronouns the dictionary does not headword.
   Subject test: about Assamese grammar. Swap test: unusable in any other post in this batch.

2. **Kakwani, D. et al. (2020), "IndicNLPSuite," *Findings of EMNLP 2020*** —
   `https://aclanthology.org/2020.findings-emnlp.445/`
   Table 1: Assamese 1.39 M sentences / **32.6 M tokens** against Hindi **1,860 M** and Bengali
   **836 M**. Text states Odia and Assamese have the smallest collections and that IndicBERT large
   performs poorest on those two.

3. **Doddapaneni, S. et al. (2023), "Towards Leaving No Indic Language Behind," *ACL 2023*** —
   `https://aclanthology.org/2023.acl-long.693/`
   Table 14: Assamese **class 2** in the Joshi et al. (2020) taxonomy, where Hindi, Bengali and Urdu
   are class 5; script column reads "Bengali". Body text: "**cld3 does not identify Assamese and
   Oriya**."

4. **Bhattacharyya, A. (2020), "Pronominal in Assamese and Bengali Language: A Comparative
   Analysis," *Space and Culture, India* 8(3), 29 Nov 2020, CC BY** —
   `https://www.spaceandculture.in/index.php/spaceandculture/article/view/936`
   Worked minimal pairs for identical sentences: Assamese *Moi etiyao bhat khoa nai* against Bengali
   *Ami ekhono bhat khai nei*; Assamese *iyat* against Bengali *ekhane*; *zetiya/zidina* against
   *zakhan/zabe*.

---

## Verification instruments (exempt; credited in prose, not in `sources`)

Per the 2026-09-24 BRIEF exemption for dictionaries, grammars, treebanks, corpora and standards.

| Instrument | What was measured | What it settles |
|---|---|---|
| **Candrakanta Abhidhana**, Gauhati University 2nd ed. 1962, digitised by DSAL (`dsal.uchicago.edu/dictionaries/candrakanta/`) | headword lookups via the site's own autocomplete endpoint | root/lemma spellings. **Exact headwords confirmed:** মই, তুমি, আপুনি, তই, মোৰ, ভাল, **ভাল পা**, মৰম, কৰা, লগ, গোটেই, উত্তৰ, বাবে, বিচৰা, থাক্, পা, নাচ্, হাত, কথা, সপোন |
| **Tatoeba Assamese sentence export** (`downloads.tatoeba.org/exports/per_language/asm/`) | **14,805 sentences** downloaded and grepped | inflected forms, word spacing, question particles, register triplets |
| **UD_Assamese-AiW** (UD v2.18, first released 2026-05-15) | 73 sentences / 871 tokens per the UD site; **682 tokens across the train+test files actually parsed here** | Assamese word order; a second independent ৰ/র baseline |
| **Unicode Character Database 18.0.0** (`unicode.org/Public/UCD/latest/ucd/`) | `NamesList.txt`, `UnicodeData.txt`, `Blocks.txt` | U+09F0 = "BENGALI LETTER RA WITH MIDDLE DIAGONAL", alias **"Assamese letter ra"**; U+09F1 alias **"Assamese letter wa"**; U+09B0 = plain BENGALI LETTER RA. Block 0980..09FF is still named simply **"Bengali"** — the post does not claim otherwise |

`github.com/UniversalDependencies` URLs for Marathi and Telugu appear on the wave-3 ban list. This is
a different treebank and an exempt instrument; the reuse of the domain is deliberate and recorded in
`structuralLimitations`.

### The orthographic conflict I found, and how it was resolved

The DSAL digitisation of Candrakanta Abhidhana **returns no headword containing ৱ at all**. It lists
**হোবা**, **পোবা** and **জীবন** where current writing has হোৱা, পোৱা and জীৱন. The modern corpus is
unambiguous the other way: হোৱা 174 / হোবা 0, পোৱা 170 / পোবা 0, জীৱন 70 / জীবন 0, নোৱাৰ 177 /
নোবাৰ 0. The dictionary *does* use ৰ freely (মৰম, উত্তৰ, ভালৰি), so this is specific to ৱ.

**Resolution:** the corpus was followed for line 5 (জীৱন), and the conflict is disclosed in body
prose and in `structuralLimitations`. What was measured is the **digitisation**, not the 1962 print.

---

## The Assamese ledger — 16 drafted, 11 published, 5 cut

### Published (11)

| # | Line | Roman | English | Register | Verification |
|---|---|---|---|---|---|
| 1 | মই তোমাক ভাল পাওঁ। | moi tumak bhal pao | I love you | তুমি | **corpus verbatim sentence**; ভাল পা headword |
| 2 | মই তোমাক মৰম কৰোঁ। | moi tumak morom koro | I hold you dear | তুমি | **corpus verbatim sentence**; মৰম, কৰা headwords |
| 3 | তুমি মোৰ লগত নাচি ভাল পাবানে? | tumi mor logot nasi bhal pabane? | Would you like to dance with me? | তুমি | **corpus verbatim sentence** |
| 4 | তুমি মোৰ লগত থাকিবানে? | tumi mor logot thakibane? | Will you stay with me? | তুমি | composed: `তুমি ঘৰতে থাকিবানে` (verbatim) + `মোৰ লগত` (n=56); থাক্ headword |
| 5 | মই তোমাৰ লগত গোটেই জীৱন থাকিব বিচাৰোঁ। | moi tumar logot goteiy jibon thakib bisaro | I want to spend my whole life with you | তুমি | composed: `থাকিব বিচাৰোঁ` (n=2), `গোটেই জীৱন` (n=2), `তোমাৰ লগত` (n=34), all verbatim; গোটেই, বিচৰা headwords |
| 6 | মই তোমাৰ উত্তৰৰ বাবে ৰৈ আছোঁ। | moi tumar uttoror babe roi aso | I am waiting for your answer | তুমি | `আপোনাৰ উত্তৰৰ বাবে ৰৈ আছোঁ` and `মই মোৰ মাৰ বাবে ৰৈ আছোঁ` both verbatim; তোমাৰ genitive per Sharma |
| 7 | মই আপোনাক ভাল পাওঁ। | moi aponak bhal pao | I love you | আপুনি | frame `মই আপোনাক বেয়া পাওঁ` verbatim; `ভাল পাওঁ` n=74; আপোনাক per Sharma Table 2 |
| 8 | আপুনি মোৰ লগত নাচি ভাল পাবনে? | apuni mor logot nasi bhal pabne? | Would you like to dance with me? | আপুনি | **corpus verbatim sentence**; minimal pair with #3 |
| 9 | মই আপোনাৰ উত্তৰৰ বাবে ৰৈ আছোঁ। | moi aponar uttoror babe roi aso | I am waiting for your answer | আপুনি | corpus verbatim clause + মই…ৰৈ আছোঁ frame verbatim |
| 10 | মই তোক ভাল পাওঁ। | moi tok bhal pao | I love you | তই | frame `মই তোক বেয়া পাওঁ` verbatim; তোক per Sharma Table 2 |
| 11 | তই মোৰ লগত থাকিবিনে? | toi mor logot thakibine? | Will you stay with me? | তই | `তই ব'ষ্টনত ক'ত থাকিবি` verbatim (-বি future); `পাৰিবিনে` verbatim (-বি + নে written closed); `মোৰ লগত` n=56 |

Four lines (1, 2, 3 and 8) are verbatim corpus sentences; the rest are composed from strings attested
verbatim in it, and every H3 in the body says which.

### Cut (5), with reasons

1. **তুমি মোৰ হ'বানে?** "Will you be mine?" — হ'বা occurs 13 times and **every instance is a
   predicate adjective** (নিৰাশ নহ'বাঁ; তুমি শকত আৰু আপচু হ’বা নে…). The possessive predicate
   মোৰ হ'বা is attested nowhere and Candrakanta does not settle it.
2. **মই তোমাৰ বাবে চিৰদিন ৰৈ থাকিম।** "I'll wait for you forever." — চিৰদিন occurs **once** in
   14,805 sentences and only as চিৰদিনৰ বাবে; ৰৈ থাকিম unattested. Also editorially wrong: it
   promises persistence to someone who has not answered.
3. **আজি মই তোমাক এটা কথা ক'ব খুজিছোঁ।** "Today I want to tell you something." — `এটা কথা ক`
   returns **zero** hits. কথা is a headword and ক'ব খুজিছোঁ is attested, but no instrument settles
   the Assamese classifier for কথা in this frame.
4. **মোৰ জীৱনৰ সপোন তুমি।** "You are the dream of my life." — সপোন is a headword (n=20) but
   `জীৱনৰ সপোন` returns **zero**. Reads as a calque; unverifiable.
5. **মই তোৰ হাতখন ধৰিব বিচাৰোঁ।** "I want to hold your hand." — `হাতখন ধৰ` occurs once, inside a
   sentence about pain (ভ্লাদিমিৰে মোৰ হাতখন ধৰোঁতে বিষাইছিল); `তোৰ লগত` and `তোৰ হাত` return zero.

---

## The Assamese-not-Bengali check, in full

This is the equivalent of the wave-3 Marathi agent's Hindi blocklist.

1. **Codepoint scan over all 11 published lines.** Result: **0 occurrences of U+09B0** (র), **16 of
   U+09F0** (ৰ), **1 of U+09F1** (ৱ). Per-line counts were printed; no line failed.
2. **Bengali-form blocklist, 28 entries** — আমি, আমার, আমাকে, তোমাকে, তোমার, করি, করছি, ভালোবাসি,
   ভালবাসি, আছি, এখন, যখন, তখন, কেন, কোথায়, হবে, থাকবে, তুই, তোকে, আপনি, আপনাকে, আপনার, নয়,
   হয়েছে, দিয়ে, বলছি, চাই and more. **0 hits.**
3. **Assamese markers present instead:** মই in 7 lines, মোৰ in 4, তোমাক 2, তোমাৰ 2, তোক 1,
   আপোনাক 1, আপোনাৰ 1, আপুনি 1, তই 1, কৰোঁ 1, পাওঁ 3, আছোঁ 2, ভাল পা 5, লগত 5, নে? 4.
4. **Baselines measured in the instruments, so the scan means something.**
   - Tatoeba Assamese: **26,205 ৰ against 11 র** (0.04%), and all 11 র sit in Latin loanwords —
     প্র'চেছৰ, এপ্র'ন, প্রিয়, ছাত্র, ক্রিষ্ট'ফাৰ.
   - UD_Assamese-AiW train+test, 682 tokens: **242 ৰ against 6 tokens carrying র**, all
     conjunct-forming — প্রশ্ন, দ্রাঘিমা, নির্দেশনা, সুবিধার্থে, মুহূর্তও, প্রতিখন. Linguists
     annotating by hand leak Bengali at roughly one token in 114.

---

## Phase 5 — links and Strapi targeting

- **Internal (2, both from `TEMPLATE_LINKS`):** `/love-gf` and `/proposal`, both placed in the
  "where to send the line" section, after the lines have established value — never in the opening.
  The post says plainly that both templates are **English-language** with no Assamese interface.
- **Outbound (5, all fetched and verified):** escholarship (Sharma), aclanthology ×2, spaceandculture,
  github UD_Assamese-AiW. **Zero Wikipedia body links. Zero competitor links.**
- `categorySlug`: `modern-romance` — confirmed present in the live Strapi category list.
- Slug confirmed free: the Strapi articles endpoint returns `total: 0` for
  `filters[slug][$eq]=propose-day-wishes-in-assamese`.
- `structuredData`: an `@id`-matched `BlogPosting` enrichment block on `<canonical>#post` carrying
  `about`, `mentions` and `citation` mirroring `batchMeta.sources` one-to-one; an `ItemList` mirroring
  the 11 H3s in order; and a `FAQPage` on `<canonical>#faq` matching `article.faqs` exactly. Every
  `sameAs` was verified through the Wikipedia API with its Wikidata QID paired: Assamese language
  **Q29401**, Assamese alphabet **Q191272**, Propose Day **Q7250378**, Assam **Q1164**, Universal
  Dependencies **Q64830310**.

## Phase 6 — audit

50 checklist items, extracted byte-verbatim from `references/publish-checklist.md` by script.
**48 passed, 2 failed, disjoint, summing to 50.** The two failures are the unmeasured SERP and the
assignment-fixed slug carrying the stop word "in". Eleven further notes that are not checklist items
live in `batchMeta.structuralLimitations`, including the native-speaker caveat and the thinness of
Assamese resources relative to every other language in this project.

**Body: 1,798 words excluding FAQs** (plain whitespace split). 12 FAQs, in `article.faqs` and the
FAQPage JSON-LD only. Maximum FAQ-to-H2 Jaccard similarity: **0.308**, well under the 0.85 flag.

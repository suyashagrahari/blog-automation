# Research brief — `love letter for girlfriend in nepali`

- **Batch**: `2026-09-02-love-gf-3`
- **Slug**: `love-letter-for-girlfriend-in-nepali` (checked against Strapi 2026-09-02 — `filters[slug][$eq]` returned `data: []`, so free)
- **Category**: `modern-romance` (confirmed live in `/api/categories`)
- **Secondaries folded in**: `nepali love words for girlfriend` (15x), `short love letter for girlfriend in nepali` (12x), `heart touching love letter for girlfriend in nepali` (10x), `love quotes in nepali for girlfriend` (8x), `love message for girlfriend in nepali` (7x), `nepali love letter for gf` (4x)

---

## Phase 1 — SERP analysis

The session's WebSearch budget was exhausted after the first query (200/200 used), so the
competitor set is the nine organic results returned for the exact keyword, fetched in
sandbox and measured programmatically (word counts, heading trees, JSON-LD presence,
Devanagari character counts). No competitor is cited or linked anywhere in the post.

| # | Page | Words | Headings | Direct answer? | Romanisation | Register explained | Table | FAQ | JSON-LD | Data cited |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | imnepal.com `/love-letter-prem-patra-namuna-nepali/` | 1,823 | H1 + 1 real H2, rest are "Rate this post" / "More Posts" | No — opens on "Get here prem patra namuna in Nepali language" self-description | Partial, inconsistent (`Arko kura tapai ko…` style) | No | No | No | Yes | None |
| 2 | imnepal.com `/love-letter-lover-nepali/` | 1,547 | H1 + 3 H2 | No — "A Love Letter in Nepali, if well written… can do wonders" | Partial | No | No | No | Yes | None |
| 3 | imnepal.com `/love-sms-girlfriend-nepali-gf/` | 3,201 | 31 headings, 2 H1s (broken), "Featured Snippet Answer", ToC | Yes, but for SMS not letters | Partial | No | No | Yes (5 Q) | Yes | None; title year-stamped "2026" |
| 4 | kuikelachyut.blogspot.com (2010) | ~5 rendered | 0 | n/a — body is JS-only, effectively dead | — | No | No | No | No | None |
| 5 | palpalimilan.blogspot.com (2011) | 652 | 2 real headings, template chrome | No — it is a short story | Partial | No | Layout table only | No | Yes | None |
| 6 | in.pinterest.com pin `…345299496442174818` | 150 | 5 | No — it is an image pin pointing back to imnepal.com | No | No | No | No | Yes | None |

Notes:

- One publisher (`imnepal.com`) holds three of the visible results, all of them sample-letter
  dumps by the same author. This confirms the 2026-08-31 measurement of the
  `love letter for girlfriend in <language>` family at 6–8 weak results out of 10.
- `ai.tenorshare.com` is in the brief's competitor list. It was not fetched, not cited and
  not linked.
- **Nothing in the set gives a romanisation aligned to its Devanagari, and nothing in the set
  explains which second-person pronoun to use.** That is the gap.
- Zero pages cite a source of any kind. Zero pages carry a comparison table. One carries an
  FAQ block, on the SMS keyword rather than this one.

## Phase 2 — Gap analysis

**Table stakes** (present across the set, so the post must cover them): actual Nepali lines in
Devanagari; the word माया; a salutation; a closing line; some framing of "letter" vs "message".

**The gap** — three things nobody in the set does:

1. **Verifiability.** No page gives a source for a single Nepali line. Turner's 1931
   *Comparative and Etymological Dictionary of the Nepali Language*, digitised open-access by
   Digital Dictionaries of South Asia, is queryable per-headword with page numbers, and four
   of the eight lines in this post are printed in it verbatim, romanisation included.
2. **Register.** तँ / तिमी / तपाईं is the single decision that determines whether a Nepali love
   letter reads as affectionate, cold or rude, and not one competitor names it. Turner's तिमि
   entry settles it in one sentence and adds the grammatical consequence nobody states: it
   takes the second-person plural of the verb.
3. **The Hindi leak.** Every page assumes Devanagari means Hindi-adjacent. The copula (तिमी हौ
   vs तुम हो) and छ vs है are where a Hindi writer's Nepali breaks, and both are checkable in
   Turner's हुनु (p. 641) and छनु (p. 191) paradigms.

**Stale data**: not applicable — no page cites data at all.

**Unanswered questions raised and dropped by the set**: whether the reader's girlfriend can read
Devanagari; whether Roman-script Nepali is acceptable; whether "Nepali" here means Nepal or
India.

**Fan-out sub-queries → H2 map**:

| Sub-query | H2 |
|---|---|
| what is a prem patra / Nepali love letter | `What is a Nepali प्रेमपत्र (prem patra)?` |
| तिमी or तपाईं for a girlfriend | `Which "you" do you use — तँ, तिमी or तपाईं?` |
| Nepali love words / lines / quotes / short letter | `Eight Nepali lines for a love letter, each one checkable` (8 H3s → `ItemList`) |
| is Nepali the same as Hindi in Devanagari | `Nepali is not Hindi in Devanagari: three places they split` |
| how do I send it / will the script render | `How the letter actually reaches her` (comparison table) |
| Nepali in India vs Nepal | `If she grew up in Darjeeling or Sikkim, not Nepal` |
| when not to / downside | `When a Nepali love letter is the wrong choice` |

**Angle**: wins by being the only post where every Nepali line in the letter carries a page
number in Turner's 1931 dictionary, and where the तँ/तिमी/तपाईं register decision is made
explicitly and sourced, set against SubhSandesh's own 987 /love-gf pages and 14,607 views.

## Phase 3 — Sources

Five sources, three domains, none in `USED-SOURCES.md`. Every one fetched in sandbox and
verified to contain the quoted text. The brief's closed domains (`pmc.ncbi.nlm.nih.gov`,
`aclanthology.org`, `arxiv.org`, `frontiersin.org`, `journals.plos.org`, `doi.org`) were
excluded at the query filter, not after the fact.

| Source | Domain | Published | Subject test | Verified quote |
|---|---|---|---|---|
| Turner, *A Comparative and Etymological Dictionary of the Nepali Language* — माया, p. 504 | dsal.uchicago.edu | 1931 | Pass | "Infatuation, folly; — (pop.) magic; — love; pity… `malāi m˚ lāgyo` I have fallen in love… `m˚ na māra` don't forget me… Pvb. `m˚ le kāyā hũdaina` the body does not live by love" |
| Turner, same dictionary — तिमि, p. 284 | dsal.uchicago.edu | 1931 | Pass | "pronoun of the second person singular, less familiar than `tã`, less formal than `tapāĩ`. It takes the second person plural of the verb. It is used between friends or to inferiors. The plural is `timiharu`." |
| Pathak, "Honorification in Nepali: a psycholinguistic perspective", *Gipan* | www.nepjol.info | 2019-12-31 | Pass — peer-reviewed/scholarly, open access | "The canonical three-level honorific system is discussed as a reference point…"; "Significant influencers in choice of honorifics are fluctuation in state of mind and proximality." |
| Tumbahang, "A Case of Lenition-Fortition and Honorific Asymmetry in Limbu Native's Nepali Speech", *Dristikon* 12(1) 110–120 | www.nepjol.info | 2022-07-05 | Pass — scholarly, open access | "The Nepali language exhibits the five-layered honorific pronominal subjects with parallel verb conjugations. In contrast, the Limbu does possess only one form." |
| Department of Official Language, "Languages Included in the Eighth Schedule of the Indian Constitution" | rajbhasha.gov.in | *(page states no publication date; "Last Updated: 17 May 2022")* | **Fail** — the single permitted generic context statistic | Nepali appears in the 22-language list |

Additional Turner headwords queried and used inside the body without a separate `sources`
entry (same dictionary, same domain): पत्र p. 362, गर्नु p. 137, तिम्रो p. 284, सम्झनु p. 588,
पर्खनु p. 367, सधैँ p. 583, मुटु p. 512, हिर्दै p. 639, पियारो p. 382, अँगालो p. 1, तँ p. 270,
हुनु p. 641, छनु p. 191, बिर्सनु p. 448, लाग्नु p. 553.

**Search terms tried and what they returned.** OpenAlex (`is_oa:true`) on: *Nepali honorifics
second person pronouns*, *Nepali language honorificity address terms*, *Nepali Devanagari
orthography script*, *Nepali language maintenance diaspora*, *Nepali language Darjeeling Sikkim
identity*, *Nepali romanization transliteration Roman script informal*, *Nepali grammar verb
agreement honorific*, *Nepali migrant families phone communication intimacy*, *Indian Nepali
Gorkha language recognition Eighth Schedule*, *Nepali speakers India census language*,
*romanized Nepali social media script choice*. DOAJ on *Nepali honorific*, *Nepali language
identity India*, *prem patra Nepali literature* — all three returned zero. NepJOL's own site
search returned zero parseable results for every query.

**Sources considered and deliberately not used:**

- **Ranjit, "'We Nepalis': Language, Literature and the Formation of a Nepali Public Sphere in
  India, 1914–1940"** (SOAS dissertation, `eprints.soas.ac.uk/34025`). This would have been the
  strongest source for the Nepal/India section. `eprints.soas.ac.uk` was unreachable from this
  environment on four attempts (`fetch failed`), so it could not be verified and is not cited.
- **Noonan, "Recent Adaptions of the Devanagari Script for the Tibeto-Burman Languages of
  Nepal"** (`fid4sa-repository.ub.uni-heidelberg.de/202/`). Abstract verified; the repository
  states **Date: 2005**, not the 2008 OpenAlex reports — 2008 is the deposit date. Dropped on
  relevance: it is about six Tibeto-Burman languages, not about Nepali, and any use here would
  have stretched the claim wider than the paper.
- **Census of India language tables** (`censusindia.gov.in`). Host unreachable; and the post
  already spends its one context statistic on the Eighth Schedule page.

**Reading limits recorded honestly:** neither NepJOL PDF galley could be retrieved — both
`/article/download/…` URLs returned HTTP 500 on repeated attempts, including via the embedded
pdf.js viewer URL. Both papers were therefore read as the abstract plus the full bibliographic
metadata rendered on the linked article page, and every claim drawn from them is a phrase
quoted from that abstract. `nepjol.info/index.php/gipan/about` was also unreachable, so
*Gipan*'s peer-review statement is unverified; the paper is treated as scholarly on the basis
of the journal, the `10.3126` DOI prefix, and the author biography on the article page naming
the Central Department of Linguistics, Tribhuvan University.

## Phase 5 — Links and targeting

- Outbound: 6 unique URLs (2× Turner deep links + the तँ entry, both NepJOL papers, rajbhasha).
- Internal: 3 — `https://subhsandesh.in/love-gf`, `https://subhsandesh.in/darling` (both
  mandatory for this cluster), `https://subhsandesh.in/missyou-gf`. All three placed after the
  section that earns them; none in the opening paragraph.
- Wikipedia: 0 body links. Four entities appear only in `structuredData` `sameAs`, each verified
  against the Wikipedia API with its QID paired — Nepali language Q33823, Devanagari Q38592,
  Darjeeling Q169997, Sikkim Q1505.
- `structuredData`: one `@id`-matched enrichment block on `<canonicalURL>#post` carrying
  `about` / `mentions` / `citation` (5 citations, mirroring `batchMeta.sources` one-to-one),
  plus one `ItemList` of 8 mirroring the eight H3s in order. No renderer-built type is emitted
  unmatched; no `AggregateRating`, `Review` or `HowTo`.

## Phase 6 — Audit summary

47 passed, 3 failed, disjoint, 50 total. The three failures: *Paragraphs 2–3 sentences
throughout* (the answer paragraph and three H3 blocks run four short sentences; closing it
costs either the romanisation or the page number), *Slug short, hyphenated, lowercase, no stop
words* (the pre-verified slug carries "for" and "in"), and *No source passes the swap test*
(the Eighth Schedule page could sit unchanged in the Malayalam, Assamese or Punjabi posts).
Full reasoning is in `batchMeta.auditReport`.

The pricing gap is real and recorded: `facts.md` carries no pricing data, so the post makes no
claim about cost in any direction. Readers arriving on a "is it free" intent are not served.

## Phase 8 — Audit remediation

**Now 48 passed, 2 failed, disjoint, 50 total; 1,793 words on the plain whitespace split.**

Fixed:

- *Paragraphs 2–3 sentences throughout* — **closed.** The opening answer paragraph was split
  4 → 2 + 2 at the sentence boundary, which changes no word order, so all five first-party
  numbers (987, 3,377, 14,607, 35.2%, 2026-03-12) still fall inside the first 150 words and the
  answer-first block is now the tighter pair. The eight H3 line-blocks were re-set as a lead
  line (Devanagari + romanisation + gloss) plus labelled bullets (`**Verified**` / `**Assembled**`
  / `**Use**`), which reads better than a four-sentence paragraph and **keeps every page
  number** — the `p. N` count in the body is unchanged at 17. The romanisation note and the
  `छनु` block were also brought under three sentences.
- Removed a reader-facing production note ("SubhSandesh's pricing data was not available when
  this was written"). No cost claim replaced it — the Pricing block in `facts.md` is genuinely
  empty, so the post still says nothing about cost in either direction. The gap now lives in
  `auditReport.honestAssessment`.
- Corrected an unsupported geographic framing: the platform totals were described as
  "India-wide", which `facts.md` does not support and which sits awkwardly beside the Eighth
  Schedule paragraph. They are now "platform-wide totals", with the existing "no language
  attribute on a page" caveat immediately after. Nothing in the body now implies the figures
  are Nepali-speaker-specific, and nothing implies Nepali's place in the Eighth Schedule makes
  it an Indian language *only* — the section still opens "Nepali is not only Nepal's language."

Left failing on purpose:

- *Slug short, hyphenated, lowercase, no stop words* — kept. Re-verified live 2026-09-02:
  `total: 0`. The slug is the exact-match keyword and is not the remediator's to change.
- *No source passes the **swap test*** — kept, with the `why` rewritten to say precisely what
  the honest record is: four of five sources are Nepali-specific and pass; the fifth
  (`rajbhasha.gov.in`) is this post's one permitted **context source** and one permitted
  **generic context statistic** under `references/research-sources.md`, so the post *complies
  with the reference* and *fails the checklist item as literally worded*. The source was **not
  dropped** — batch-level source and domain counts belong to the orchestrator.

Twelve Nepali line flags, both NepJOL HTTP 500 disclosures and the unverified *Gipan*
peer-review statement are preserved verbatim. No source added or removed; no Wikipedia link
added.

**Twelve Nepali lines are flagged for native review, by line, in
`batchMeta.auditReport.honestAssessment`.** The highest-risk one is `तिमी मेरो हौ` — मेरो may
need to agree with the feminine addressee as मेरी.

# Research brief — `propose day quotes hindi english`

- **Batch:** `2026-09-23-propose-30b` (wave 3, propose/proposal territory)
- **Slug:** `propose-day-quotes-hindi-english`
- **Category:** `modern-romance`
- **Band:** 300–1,000 EST. Never printed as a real volume anywhere on the page.
- **Date check:** run locally 2026-09-23. Rose Day Sun 7 Feb 2027, **Propose Day Mon 8 Feb 2027**,
  Valentine's Day Sun 14 Feb 2027. Verified with `date` and `datetime.date.fromisoformat`.

---

## Phase 1 — SERP: INHERITED AND PARTIAL. Not freshly measured.

**No SERP was measured for this keyword.** The session WebSearch budget was 5 calls shared
across 30 agents and was spent on research, not on a SERP pass. `WebSearch` from this machine
is US-served, so it would not have reflected the India-served result set anyway.

The nearest **measured** data is `content/keywords/2026-09-16-propose-100/serps.md`, captured
**2026-09-16**, India-served, for the *head* term `propose day quotes` — not for this keyword.
What that file records, and the only SERP statement this post is entitled to make:

| # | Result | Type |
|---|---|---|
| 1 | giftalove.com/quotes/propose-day | gifting retailer, title year-stamped 2025 |
| 6 | sg.style.yahoo.com/propose-day-2026… | syndicated news, SG geo |
| 7 | floweraura.com/blog/propose-day-2025-100-heartfelt-quotes | gifting retailer, stale year |
| 8 | fnp.com/quotes/propose-day | gifting retailer |
| 10 | myflowertree.com/quotes/propose-day | gifting retailer |

All five are **competitors** under `references/competitors.md`. None was fetched, none is
linked, cited or paraphrased, and **the post makes no claim about what is inside any of them.**

**Consequence for the draft.** The post may not say "no incumbent covers code-mixing", "every
rival publishes two separate lists", or anything of that shape — those are exactly the wave-2
defect the BRIEF names. The differentiator is written as a positive claim about *this* page
only: it treats code-mixing as a register in its own right. Recorded in
`batchMeta.structuralLimitations`.

---

## Phase 2 — Gap and angle

### The searcher

Someone typing `propose day quotes hindi english` is not asking for a Hindi list *and* an
English list. They want a line that works in **both at once**, because that is how they and
the person they are asking already text: a Hindi sentence with an English noun in it, or one
Hindi line followed by one English line. They may also have the specific problem of a partner
who reads Devanagari slowly, or not at all.

### Angle (one sentence)

> Wins by being the only post in this cluster that treats Hindi-English **code-mixing as a
> register in its own right** — grouping its 12 lines by *how* they mix (insertion,
> clause alternation, V + *karnā*, mirror pair) against the clause-level distributions Klingler
> (2017) measured for Hindi-English bilinguals in Dehradun, and grounding delivery in
> SubhSandesh's platform-wide 5,061 pages across 20 page types and 38.7% password-protect rate.

### Fan-out sub-queries this maps to

- What is Hinglish, and is it acceptable in a proposal?
- Should I write in Hindi, English, or both?
- Will a mixed line look like I don't know Hindi properly?
- What do I send if my partner can't read Devanagari?
- तुम or आप in a mixed line?
- Which day is Propose Day 2027?

---

## Cannibalisation — the two siblings, and the line held between them

Both siblings are in `content/batches/2026-09-17-propose-30/blogs/`. Both were read in full
before a word of this post was drafted. Neither is live in Strapi as of 2026-09-23 (checked:
`filters[slug][$eq]` returned `[]` for both), so the two cross-links in this post resolve only
once wave 2 publishes. Recorded as an audit failure rather than quietly dropped.

| | `propose-day-quotes-in-hindi` | `propose-message-in-hindi` | **this post** |
|---|---|---|---|
| Unit | a line to copy | one whole message to one named person | a line to copy |
| Organised by | Hindi register: तुम / आप / तू / shayari diction | script choice + message mechanics | **how the line mixes the two languages** |
| Language of the lines | Devanagari only | Devanagari only | **code-mixed: Hindi frame + English content words** |
| Lane | politeness / deference system | romanisation, Roman-vs-Devanagari | **code-mixing as a social register** |
| Sources | Hadavizadeh & Singh; UCL; arXiv; UvA; PMC | AI4Bharat Aksharantar, Google romanised-LID, ACL, DOAJ | Klingler; Sahni; Mäkilähde & Rissanen; Dondolo & Mushaathoni; Kodali et al. |

**The hard line I am not allowed to cross:** `propose-message-in-hindi` already owns the
romanisation / script-choice lane and its sources (Aksharantar, informally-romanised LID).
This post does **not** argue about which script to type in. It argues about **which language
supplies the grammar and which supplies the words**, which is a different question with a
different literature. Where a reader genuinely needs the script decision, this post links that
sibling instead of re-covering it.

Zero source URLs and zero source domains overlap with either sibling.

---

## Phase 3 — Sources

Lane assigned: **code-mixing / code-switching as a social register in Indian English.** Excluded
by instruction and observed: romanisation / script choice, Hindi politeness, bilingual-emotion
L1/L2, Kannada, Telugu, Malayalam, Marathi, Bengali.

`capcheck.mjs` run twice — once when choosing, once immediately before saving the JSON.
`pmc.ncbi.nlm.nih.gov` / `europepmc.org` was at the 3-post cap both times and is **not** used.
`frontiersin.org`, `nature.com`, `journals.plos.org`, `link.springer.com` and `doi.org` each had
one slot left and are **not** used. Two strong candidates were dropped for this reason or
because they could not be read:

- *Social, economic, and demographic factors drive the emergence of Hinglish code-mixing on
  social media* (Humanities & Social Sciences Communications, 2024) — `nature.com` returned a
  bot-challenge page, so it was never read, and the domain had one slot left. Not cited.
- *A Sociolinguistic Study of Linguistic Variation and Code Matrix in Kanpur City* (Procedia) —
  ScienceDirect returned HTTP 403. Not read, not cited.
- *Hindi-English Code Switching and Language Choice in Urban, Upper-middle-class Indian
  Families* (Kansas Working Papers in Linguistics, 1980) — KU ScholarWorks required a login.
  Not read, not cited.

Search terms used, via `findpapers.mjs` (Crossref + Europe PMC) and one WebSearch call:
`Hindi English code mixing social meaning study`, `code switching identity bilingual India
research`, `matrix language frame model code mixing`, `code mixing advertising India study`,
`bilingual code switching solidarity marker research`, `Hinglish code mixed urban Indian youth
register`, `attitudes towards code mixing Indian English speakers survey`, `code switching
WhatsApp text messaging bilingual functions`, plus two DOAJ API title/abstract queries.

### The five cited

1. **Klingler, A. (2017). "Changes in Code-Switching Patterns among Hindi-English Bilinguals in
   Northern India." *Lifespans & Styles* 3(1).**
   <https://journals.ed.ac.uk/lifespansstyles/article/view/1827> — University of Edinburgh
   Journal Hosting Service, open access. **Full text read (10-page PDF).**
   Six female upper-middle-class Hindi-English bilinguals recorded in Dehradun, July 2012;
   2 h 07 min analysed; N(young) = 1,828 clauses, N(old) = 2,020 clauses.
   - Younger speakers: **75% English-matrix clauses**, 25% Hindi-matrix.
     Older speakers: **68% Hindi-matrix**, 32% English-matrix.
   - Younger: 63.89% fully English clauses, 14.66% fully Hindi, **10.72%** mixed either way.
     Older: 36% fully Hindi, **31% Mixed Hindi** (English inside a Hindi clause), 26% fully
     English, 7% Mixed English.
   - Of the English items inserted into Hindi clauses, **84%, 69% and 71%** were nouns or noun
     phrases in the three older-speaker conversations; 74%, 51% and 76% among the younger.
   - The English-verb + Hindi *karnā* construction ("call karna", "reply karnā",
     "start ho kardiya") is recorded across both generations.
   - Insertions occur "without discernible patterns, 'triggers', or typical contexts", which
     Klingler takes as evidence they are **unmarked** — part of an established mixed medium.
   - **Honest caveat carried into the post:** this is an undergraduate working-papers journal
     and n = 6 speakers, all female, all upper middle class, one city, recorded in 2012. The
     post says so in prose and does not generalise it to India.

2. **Sahni, A. (2025). "Code-Switching in South Asia: Comparing the Equivalence Constraint and
   Matrix Language Frame Models with Hinglish." *Bhasha* 4(1), 51–76.**
   <https://edizionicafoscari.it/en/edizioni/riviste/bhasha/2025/1/code-switching-in-south-asia-comparing-the-equival/>
   Edizioni Ca' Foscari, peer reviewed, CC BY. Published 1 July 2025. **Full text read (8-page PDF).**
   - Argues the **Matrix Language Frame Model** accounts for Hinglish better than Poplack's
     Equivalence Constraint Model, because only MLFM handles asymmetry — which language is host.
   - MLFM's three principles as stated in the paper: the **Morpheme Order Principle** (surface
     order follows the matrix language), the **System Morpheme Principle** (grammatical
     morphemes come from the matrix language), and the **Blocking Hypothesis** (embedded-language
     content morphemes must be congruent with the matrix language).
   - Worked Hinglish example *"Ram highly qualified hai and he can find a job poori duniya mai"*:
     Hindi supplies the verb and the postposition, so Hindi is the matrix language; English
     supplies adjectives, pronoun and verb phrase as embedded material.
   - Reports the **2011 Census of India** figure of approximately **528 million** Hindi speakers,
     up from ~422 million at the 2001 Census. *This is the post's single permitted generic
     context statistic, and it is attributed to this paper with the census year.*

3. **Mäkilähde, A. & Rissanen, V.-M. (2016). "Solidarity in Cicero's letters: Methodological
   considerations in analysing the functions of code-switching." *Pallas* 102, 237–245.**
   <https://journals.openedition.org/pallas/3724> — OpenEdition Journals, open access.
   **Full text read.**
   - Code-switching in **private written correspondence** analysed for its functions; solidarity
     is the function under examination, and the authors argue it needs an explicit definition
     because instances differ by context.
   - Summarises Adams (2003), who classifies code-switching functions into four categories:
     **establishing a relationship with an addressee, expressing identity, responding to a
     particular topic, and stylistic effect.**
   - Why it belongs here and not in a sibling: it is the only cited work about switching
     languages *inside a letter written to one person*, which is precisely what a code-mixed
     proposal line is. Nothing about India, Hindi, or script.

4. **Dondolo, B. & Mushaathoni, M. (2025). "Communication through Shifting Lingua Franca:
   Surveying Followers' Perceptions of Influencers' Code-Switching in Social Media."
   *African Journal of Inter/Multidisciplinary Studies* 7(1).**
   <https://journals.dut.ac.za/index.php/ajims/article/view/1416> — Durban University of
   Technology, open access. Published 19 July 2025. **Abstract read; the PDF galley was not
   opened, so only what the abstract states is cited.**
   - n = 163 followers surveyed. Factor analysis returned three underlying perceptions of a
     code-switching speaker: **lexical clarity, lexical deficiencies, and language meaning**,
     with **lexical clarity the most dominant**.
   - Used for exactly one claim: an audience reads code-switching as a clarity move more often
     than as a deficiency. Nothing further is inferred.

5. **Kodali, P., Goel, A., Choudhury, M., Shrivastava, M. & Kumaraguru, P. (2022).
   "SyMCoM — Syntactic Measure of Code Mixing: A Study of English-Hindi Code-Mixing."
   *Findings of the ACL 2022*, 472–480.**
   <https://aclanthology.org/2022.findings-acl.40/> — ACL Anthology, open access.
   **Abstract read; the full PDF was not opened, so only the abstract is cited.**
   - Proposes SyMCoM, an indicator of **syntactic** variety in English-Hindi code-mixed text
     with stated theoretical bounds, computed over a collection of en-hi code-mixed datasets
     using an en-hi part-of-speech tagger the authors report at **93.4% accuracy**.
   - Used for one claim only: Hindi-English mixing is regular enough to be measured
     syntactically, not a random blend.

### Test results

- **Subject test:** passed by 1, 2, 3 and 5 (all are *about* code-switching / code-mixing).
  4 is about perception of code-switching — also passes. Five of five.
- **Peer-reviewed open access:** Sahni 2025 (*Bhasha*, Edizioni Ca' Foscari) and Mäkilähde &
  Rissanen 2016 (*Pallas*).
- **Swap test:** none survives a swap into another keyword in this batch. Every one is
  specifically about switching between two languages; drop any of them into a rakhi, bouquet or
  anniversary post and it is visibly irrelevant.
- **Generic context statistics:** exactly one (the 2011 Census Hindi-speaker figure, via Sahni).
- **Wikipedia:** one body link, `Hinglish`, entity disambiguation only. Not counted as research
  and not listed in `batchMeta.sources`.
- **Competitors:** zero cited, zero linked, zero paraphrased.

---

## How the Devanagari and the mixing were verified

The BRIEF requires morphology checked against a cited linguistic source rather than intuition.
The procedure actually run on every line:

1. **Matrix language must be Hindi.** Applying the MLFM principles as stated in Sahni (2025):
   every inflection, every postposition, every auxiliary and the finite verb come from Hindi
   (System Morpheme Principle); the surface order is Hindi's SOV (Morpheme Order Principle);
   English contributes **content morphemes only**. Any draft line where an English element
   carried grammar — an English auxiliary, an English plural or case marker on a Hindi noun —
   was cut.
2. **Insertion type must be attested.** Klingler (2017) found 69–84% of English insertions into
   Hindi clauses in her older-speaker conversations were nouns or noun phrases. Every published
   insertion line therefore inserts a **noun or noun phrase** (`plan`, `line`, `future planning`,
   `serious`, `respect`, `time`). Adverb and full-VP insertions were cut as marked.
3. **V + *karnā* must be the attested shape.** Klingler records `call karna`, `reply karnā`,
   `start ho kardiya`. The published hybrid lines use the same shape: bare English verb stem +
   a Hindi form of *karnā*, with all tense, aspect, gender and number on the Hindi operator.
4. **Alternation lines are checked clause by clause.** In an alternation line each clause is
   monolingual, so MLFM does not apply within it; each Hindi clause was checked as a
   free-standing Hindi sentence and each English clause as a free-standing English sentence.
5. **Register marked on every line** — तुम, आप or तू — and तू lines were cut entirely rather
   than published with a warning, because a तू line sent to the wrong person on Propose Day is
   the one error that cannot be walked back.
6. **Gender agreement** stated once in prose with the flip (`रहोगी → रहोगे`, `रहा हूँ → रही हूँ`),
   not repeated per line.

**Not native-speaker reviewed.** Recorded in `batchMeta.structuralLimitations`.

### Line ledger — 18 drafted, 12 published, 6 cut

| # | Line (fragment) | Verdict | Reason |
|---|---|---|---|
| 1 | तुम्हारे बिना मेरा हर **plan** अधूरा लगता है… | published | noun insertion, Hindi matrix intact (तुम) |
| 2 | मुझे कोई **perfect line** नहीं आती… | published | NP insertion, Hindi matrix intact (तुम) |
| 3 | आपसे एक **serious** बात करनी है… | published | आप register, adjective inside a Hindi NP |
| 4 | बहुत सोचा, बहुत टाला. **I'm asking you now.** | published | clause alternation, both clauses well-formed |
| 5 | तुम्हें पता है ना…? **Say yes anyway.** | published | clause alternation (तुम) |
| 6 | जवाब सोचकर देना. **No pressure, and no deadline.** | published | clause alternation (तुम) |
| 7 | मैं तुम्हें **propose** कर रहा हूँ… | published | V + *karnā*, attested shape (तुम) |
| 8 | दो साल से **feel** कर रहा हूँ… | published | V + *karnā*, attested shape |
| 9 | जितना **time** चाहिए, ले लो। मैं **wait** कर लूँगा | published | noun insertion + V + *karnā* (तुम) |
| 10 | तुम मेरी आदत नहीं, मेरी पसंद हो / "…my choice" | published | mirror pair, both halves stand alone (तुम) |
| 11 | साथ चलोगी? रास्ता मैं ढूँढ लूँगा / "Walk with me?" | published | mirror pair (तुम) |
| 12 | आप हाँ कहें तो कल से शुरू करते हैं / "…we start tomorrow" | published | mirror pair, आप subjunctive |
| 13 | तू मेरी **life** का **best decision** है | **cut** | तू register; a तू line to the wrong person is unrecoverable |
| 14 | मैं तुमसे **unconditionally** प्यार करता हूँ | **cut** | adverb insertion — not the attested type in Klingler's counts; reads as marked |
| 15 | Will you be my forever? | **cut** | not mixed at all, and a stock English line — fails the originality test |
| 16 | तुम्हारे साथ जो **vibe** है वो कहीं नहीं | **cut** | verb missing (needs मिलती); slang with a short shelf life |
| 17 | आप मेरी **zindagi** हैं | **cut** | a Hindi word written in Latin inside a Devanagari line — reverse-mixing nobody types |
| 18 | मेरा दिल तुम्हारे नाम की **FD** है | **cut** | joke register; wrong for a proposal (it belongs on `/court-of-love`) |

Published lines are three per group across the four groups.

---

## Phase 0 — first-party facts used

Copied verbatim from `content/facts.md` (regenerated 2026-09-23). Every one is labelled in body
prose as **platform-wide across 20 page types** or **sampled on the named template**. None is
attributed to proposal pages — no proposal-specific data exists, because the read-only probe of
`proposalpages` is refused by this machine's production-read policy.

- 5,061 personalised pages created since 2026-03-12, across 20 page types — measured 2026-09-23
- 48.4% of shared pages are opened on a phone (27,185 of 56,152 views) — measured 2026-09-23
- 38.7% of creators password-protect their page before sharing it (1,961 of 5,061) — measured 2026-09-23
- #2 page type: "I love you" page (/love-gf) — 1,173 created, 23.2% of all pages — measured 2026-09-23
- 91.2% of started pages are actually published and shared (4,615 of 5,061) — measured 2026-09-23
- Median gap between a page's first save and its last edit: 2.4 hours — sampled on apology dashboard (/apology-dashboard), n=1,348 — measured 2026-09-23

The **pricing block in `content/facts.md` is empty**, so the post states no price, no free tier
and no paid tier, and avoids phrasings that read as a price claim. The Raksha Bandhan lead-time
block is out of bounds for this batch and is not used.

---

## Phase 5 — links

**Template links (2, both from `TEMPLATE_LINKS`, relative paths):**

- `/proposal` — mandatory. Placed after the section that establishes why a reader would want a
  page rather than a message.
- `/love-gf` — the honest alternative, because most Propose Day traffic is not a marriage
  proposal. The post states plainly that the templates are **English-language**, so a bilingual
  reader gets the English chrome and supplies their own Hindi in the fields they fill.

A third link to `/templates` was drafted and removed so that the post carries exactly four
internal links in total, keeping it inside the 2–4 rule once the two mandated sibling
cross-links are counted.

**Sibling cross-links (2, `/blog/` URLs, not in `TEMPLATE_LINKS`):**

- `/blog/propose-day-quotes-in-hindi` — for the reader who wants Devanagari-only lines sorted
  by तुम / आप / तू.
- `/blog/propose-message-in-hindi` — for the reader whose real question is which script to type
  in. That is that post's lane and this post defers to it rather than re-arguing it.

Neither is live in Strapi as of 2026-09-23. Recorded as an audit failure.

---

## Honest assessment

A copy-text query with near-zero conversion: the searcher lifts a line and leaves. Target
**position 6–10, not 3** — this SERP family is a February news cycle owned by MensXP, Zee,
Webdunia, Times Now and Amar Ujala, whose domain authority is far above this site's. The page is
a visibility asset judged on impressions and on being the thing an answer engine quotes when
someone asks an assistant for a Hinglish proposal line, not a converting page. The genuinely
citable assets are the four-way grouping by mixing pattern, Klingler's clause distributions, and
the platform-wide first-party numbers — the last of which no competitor can print.

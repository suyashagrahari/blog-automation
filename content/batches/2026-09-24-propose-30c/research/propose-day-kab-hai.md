# Research brief — `propose day kab hai`

Batch `2026-09-24-propose-30c` · slug `propose-day-kab-hai` · category `modern-romance`
Written 2026-09-24. Secondaries on the same page: `propose day kab hai 2026`,
`propose day kab aata hai`, `propose day kitne tarikh ko hai`, `propose de kab hai`.

---

## Phase 1 — SERP analysis: NOT RUN

**No SERP was measured for this keyword, and none is inherited.** The only India-served
SERPs this project has ever measured are the 11 in
`content/keywords/2026-09-16-propose-100/serps.md`, taken on 2026-09-16, and this keyword
is not among them. The session's shared WebSearch budget was spent on Phase 3 research
(4 calls, the cap set in my task prompt), and the Firecrawl search tool returned HTTP 402
(out of credits) on both attempts.

**Consequence, and it is binding on the draft:** this post makes no claim about what any
competing page contains, what date competitors print, or what position anything holds.
Three checklist items that depend on a top-5 comparison are recorded as failures rather
than guessed at. This is the wave-2 defect class the BRIEF names, and the honest move is
to leave the items open.

There is therefore no Phase 1 comparison table below. There is nothing to put in it.

## Phase 2 — Gap analysis, derived without a SERP

The fan-out was derived from the keyword itself plus the four assigned secondaries, which
are real India-geo autocomplete demand (ordinal `prefix_hits`, never a volume figure).

Fan-out sub-queries, each mapped to a body section:

| Sub-query | Hindi form | Body section |
|---|---|---|
| when is it | प्रपोज़ डे कब है? | H3 1 |
| does it come round / recur | प्रपोज़ डे कब आता है? | H3 2 |
| on what date | प्रपोज़ डे किस तारीख़ को है? | H3 3 |
| is it a holiday | क्या उस दिन छुट्टी है? | H3 4 |
| what about the other days | रोज़ डे और वैलेंटाइन्स डे कब हैं? | H3 5 |
| what to send on a workday | — | table + "wrong thing to send" |
| why is the query in Hindi at all | — | research-lane H2 |

**Angle.** Wins by being the only Propose Day page that answers the Hindi-language query
in its own script in the first sentence — सोमवार, 8 फ़रवरी 2027, verified four ways — and
then explains, from measured research on query-language choice, why a Hindi question
about an English-named day is a distinct information need rather than a translation of
the English page, priced against SubhSandesh's own page-type mix (the "I love you" page
at 1,178 of 5,148 pages, 22.9%, platform-wide across 21 page types).

## Cannibalisation check

**Nearest neighbour: `content/batches/2026-09-17-propose-30/blogs/propose-day-2027.json`**
(wave 2, the English calendar page). Read in full before drafting.

| | Wave 2 `propose-day-2027` | This page |
|---|---|---|
| Searcher | English-language, wants the 2027 date | Hindi-language, wants the date now |
| Spine | invented-tradition / holiday-construction argument | the five questions inside one Hindi query |
| Numbered block | "Four things that actually fit into Monday 8 February 2027" | five *questions*, not five gifts |
| Research lane | folklore / holiday construction | query-language choice in multilingual search |
| Scripts | English only | Devanagari + Roman + English throughout |
| Sources | The Conversation, PLOS ONE, folklore.ee, asianetworkexchange, Wikipedia | JMIR ×3, Nature HSSC, Wikipedia (zero overlap) |

**Verdict: distinct.** Per the project's dedupe rules a different query language is never a
duplicate, and the two pages share only the date, which both must state. I deliberately
did **not** re-run wave 2's invented-tradition argument; where the origin comes up I state
the absence of evidence as my own finding and name my search terms. The numbered block was
rewritten from "things to send" to "questions inside the query" specifically to avoid
mirroring wave 2's H3 set.

**Banned neighbour: `content/batches/2026-09-23-propose-30b/blogs/propose-day-meaning-in-hindi.json`**
(wave 3, loanword-semantics / light-verb lane). Read. Its subject is what the *word* means;
mine is what the *date* is. I use the "propose karna ≠ marriage proposal" point in one
sentence because the BRIEF requires it for template selection, and I do not argue the
light-verb borrowing at all. Both siblings are cross-linked by slug.

## Phase 3 — Sources

Lane assigned: **how people seek information in a second language — query language choice
in multilingual search.** Excluded lanes (taken by siblings): invented-tradition/calendar,
loanword-semantics/light-verb, code-mixing-as-register, romanisation/script-choice,
Hindi-politeness.

Search route: `findpapers.mjs` (Crossref + Europe PMC) on the four assigned phenomenon
queries plus two of my own; then the **DOAJ article API** and the **Europe PMC REST API**
programmatically, which is how the usable OA material was actually found. 4 WebSearch calls
spent, per budget.

| # | Source | Why it is here | Subject test | Swap test |
|---|---|---|---|---|
| 1 | JMIR 2026, code-mixed Hinglish SRH queries, urban Mumbai (n=4,161) | direct evidence that Indians type real questions in mixed Hindi–English, and that systems handle the fine-grained intent worst | pass | pass — no other keyword in this batch is about query intent |
| 2 | JMIR 2007, language preference in Google searches (20% sample, 227 nations) | the only fetched source that measures *which language a query is typed in* | pass | pass |
| 3 | Humanities & Social Sciences Communications 2024, Hinglish growth on Twitter | the mixed form is the ordinary written form, measured 2014–2022 | pass | pass |
| 4 | JMIR Formative 2025, paired English/Spanish epilepsy videos | same content, two languages: the non-English version drew 11,339 views to English's 3,366 | pass | pass |
| 5 | Wikipedia, Hindu calendar (Q190552) | entity disambiguation for the lunisolar contrast only; not research | n/a | n/a |

**Every publisher page bot-blocked this machine** (jmir.org and formative.jmir.org return
HTTP 202 with an empty body; nature.com returns a "Client Challenge" page). Each abstract
was therefore read through the **Europe PMC REST API** (sources 1 and 2) or the **DOAJ
article API** (sources 3 and 4), which serve the publisher's own abstract text. **Only the
abstracts were read. No full text was read for any source, and every figure quoted on the
page is one the abstract states.** This is disclosed in the audit and in
`structuralLimitations`.

Cap check run when choosing and again immediately before saving. No banned URL used. No
domain at cap used: `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`, `journals.plos.org` and
`aclanthology.org` were all avoided, and Europe PMC and DOAJ were used as *retrieval
APIs*, not cited. `en.wikipedia.org` had one slot left and takes it.

### Origin of Valentine week — stated as a finding

Two `findpapers.mjs` runs across Crossref and Europe PMC:
`"Valentine week invented tradition South Asia day by day structure"` and
`"Rose Day Propose Day Valentine week India origin study"`. Neither returned a single item
about the practice; the hits were unrelated ("Ladies Day", five-day-week policy papers,
haemodialysis variation). A wave-2 agent reported the same absence across roughly twelve
phrasings and a wave-3 agent confirmed it. **The page therefore asserts no origin date or
place**, and says so in prose.

## Date verification — four independent methods

The task prompt supplied these dates. Per the BRIEF I treated them as unverified claims
and checked them. All four methods agree; the prompt was correct.

1. `date -j -f '%Y-%m-%d' 2027-02-08 '+%A'` → `Monday` (BSD date, macOS)
2. `cal 2 2027` → 8 sits in the Mo column; 7 and 14 sit in Su
3. Zeller's congruence, implemented from scratch → `Monday`
4. ICU/CLDR via `Intl.DateTimeFormat('en-GB'|'hi-IN')`, ICU 77.1 → `Monday` / `सोमवार`

Also verified: 7 Feb 2027 = Sunday, 14 Feb 2027 = Sunday, **8 Feb 2026 = Sunday**.
7–14 February inclusive is **eight** dated days, counted directly.

## Hindi ledger

Instruments, all ban-exempt as reference material and credited in prose rather than in
`batchMeta.sources`, per the BRIEF's preferred handling:

- **McGregor, *The Oxford Hindi–English Dictionary*** via DSAL (`dsal.uchicago.edu`)
- **Platts, *A Dictionary of Urdu, Classical Hindi and English*** via DSAL
- **Unicode CLDR** via ICU 77.1 in Node 22 (`Intl.DateTimeFormat('hi-IN')`)

**Drafted: 16 lines. Published: 10. Cut: 6.**

Verified in McGregor (exact headword): कब, है, को, का, में, था, यह, इस, हर, नहीं, और,
क्या, किस, कितना, बार, दिन, दूसरा, पहला, आठ, साल, महीना, काम, छुट्टी, बदलना, आना (sense 2,
"to come"), सप्ताह, तिथि, सवाल, जवाब, पूछना, कहना, प्यार, फूल, होना, तय.

Verified in Platts: **तारीख़** *tārīḵẖ* — "Date, era, epoch; day (of a month)".

Verified in CLDR/ICU: **सोमवार**, **रविवार**, **मंगलवार**, **बुधवार**, **गुरुवार**,
**शुक्रवार**, **शनिवार**, **फ़रवरी**, and the full string *सोमवार, 8 फ़रवरी 2027*.

**Cuts, with reasons:**

1. **पंचांग** (*pañcāṅg*, almanac) — **no McGregor headword** under four spellings tried
   (पंचांग, पंचाङ्ग, पञ्चांग, पंचाग). Replaced with the English "Hindu lunisolar calendar".
2. **हफ़्ता** (*haftā*, week) — no McGregor headword; Platts attests only the Persian
   هفته. Cut as unnecessary: Valentine week is transliterated as वैलेंटाइन वीक anyway.
3. **तिथि** — verified in McGregor ("a lunar day") but cut from the published lines,
   because printing it next to Propose Day implies the day has a tithi. It does not.
4. **प्रस्ताव** — not used at all. Wave 3 established it is a motion for discussion.
5. **Second-person lines** (e.g. *आप कब प्रपोज़ करेंगे?*) — all cut. A date statement has
   no addressee, so no तू / तुम / आप choice arises, and I will not print a register I
   cannot have a native speaker check.
6. **सोमवार as a McGregor headword** — not attested. Kept only because McGregor's सोम
   entry gives sense **5. Monday** and defines सोमवती as "a Monday coinciding with…", and
   CLDR gives सोमवार for Monday in `hi-IN`. Disclosed on the page.

**Register:** none of the ten published lines uses a second-person pronoun. That is
deliberate, not an oversight.

**प्रपोज़ डे and वैलेंटाइन वीक are labelled on the page as transliterations of English
names, not as Hindi vocabulary**, because that is what they are and neither dictionary
records them.

**Not reviewed by a native speaker.** Recorded in `structuralLimitations`.

## Honesty constraints applied

- No figure attributed to proposal pages. The `proposalpages` probe is still refused by
  this machine's production-read policy, so every number is labelled in body prose as
  platform-wide across 21 page types or as sampled on the named template.
- No price, no tier, no "free", no "₹". The pricing block in `content/facts.md` is empty
  for a fourth batch.
- `prefix_hits` is not printed anywhere.
- No claim about competitor pages, positions or content.

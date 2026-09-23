# Research brief — `propose day quotes malayalam`

- **Slug:** `propose-day-quotes-in-malayalam`
- **Batch:** `2026-09-23-propose-30b` (wave 3)
- **Category:** `modern-romance` (verified against the live Strapi category list:
  `digital-gifts-romance, milestone-birthdays, modern-romance, family-and-continuity,
  big-fat-weddings, festive-beats, say-sorry-beautifully, miss-you-across-miles,
  virtual-bouquets, indian-festivals`)
- **Slug availability:** `filters[slug][$eq]=propose-day-quotes-in-malayalam` returned
  `{"data":[],"meta":{"pagination":{"total":0}}}` on 2026-09-23 — free.
- **Date check:** `date` on this machine returned `Wed Sep 23 16:10:35 IST 2026`.
  Propose Day 2027 = **Monday 8 February 2027** (Rose Day Sun 7 Feb, Valentine's Day
  Sun 14 Feb), per the batch BRIEF's verified dates.

---

## Phase 1 — SERP analysis: NOT PERFORMED, and that is recorded

**No SERP was measured for this keyword.** The only India-served SERPs this programme
has ever measured are the 11 captured on 2026-09-16 in
`content/keywords/2026-09-16-propose-100/serps.md`, and none of them is a Malayalam
query — `competitor-map.md:95` says only that the Indian-language SERPs "belong
entirely to news media", and `shortlist.md:75` records **0** measured volume rows for
the Hindi / Marathi / Bengali / Kannada / Telugu / Malayalam group.

Consequences, applied throughout:

1. The post makes **no claim about what any competing page contains, omits, or dates**.
2. Checklist item *"The post contains at least one claim none of the top 5 pages make"*
   is recorded as **failed**, because there is no measured top 5 to compare against.
3. Checklist item *"No section closely mirrors a competitor page's structure or
   framing"* is recorded as **passed** on a different ground: no competitor page was
   opened at any point in this run. The structure is derived from (a) the Malayalam
   register system and (b) the verification ledger, neither of which came from an
   incumbent.
4. `batchMeta.structuralLimitations` states the above.

The BRIEF's standing instruction for this cluster — *target position 6–10, not 3,
because the February Indian-language news cycle is owned by publishers with far higher
authority* — is carried into `honestAssessment` unchanged.

---

## Phase 2 — Angle, fan-out, and how this differs from its siblings

### Cannibalisation check

Siblings already written in this territory that touch language:

| Sibling | Batch | Its organising idea | How this post differs |
|---|---|---|---|
| `propose-day-quotes-in-hindi` | wave 2 | तू/तुम/आप register + Urdu-leaning shayari diction | Different language, different pronoun set, and Malayalam carries **no** person agreement on the verb, which is the opposite of the Hindi case |
| `propose-day-quotes-in-marathi` | wave 2 | Hindi-only blocklist run over every Devanagari line | Malayalam shares no script with Hindi, so a blocklist is meaningless here; the failure mode is orthographic rendering, not lexical bleed |
| `propose-day-quotes-in-bengali` | wave 2 | তুই/তুমি/আপনি tiers + verb agreement paradigm | Bengali verbs **do** agree for person; Malayalam verbs do not, so the register has to be carried entirely by the pronoun |
| `propose-day-quotes-in-kannada`, `…-in-telugu` | this batch, concurrent | Kannada linguistics lane / Telugu diglossia lane | Explicitly excluded from this post's lane |

**Lane taken here (assigned):** Malayalam script and orthography — the documented
പഴയ ലിപി / പുതിയ ലിപി (old script / reformed script) split and the very large conjunct
inventory, as the citable reason Malayalam text mangles when it is copied between
devices. Lanes not touched: Kannada linguistics, Telugu diglossia, Marathi regional
internet, Bengali literary, Hindi politeness, romanisation/script choice, bilingual
emotion.

### Fan-out sub-queries this post answers (each becomes an H2 or an FAQ)

1. When is Propose Day 2027, and is it the same day as Rose Day?
2. What is a "Propose Day quote in Malayalam" as distinct from a wish or a message?
3. Which "you" do I use — നീ, നിങ്ങൾ or താങ്കൾ?
4. Does the Malayalam verb change depending on who I am addressing?
5. Give me the actual lines, with transliteration and meaning.
6. How do I know these lines are correct?
7. Why does Malayalam text look broken when I paste it somewhere else?
8. Where should I send the line so it survives?
9. When is a Malayalam quote the wrong thing to send at all?

### Angle (one sentence)

Wins by being the only Propose Day page in Malayalam that publishes its own
verification ledger — 15 lines drafted, 10 published, 5 cut with the reason for each —
and explains, from the Unicode Standard and the 1971 Kerala script order, why a
Malayalam line is the one kind of quote that can arrive at the other end broken.

---

## Phase 3 — Sources

All six were fetched and read in this run. Two crowded publishers were deliberately
avoided per the BRIEF's mid-batch race note: `frontiersin.org` and the
PMC / Europe PMC family (the PLOS paper below is also mirrored at
`europepmc.org/article/PMC/PMC10399769`, which was **not** used, because that publisher
is at the 3-post cap for this batch). `capcheck.mjs` was run before choosing sources
and again immediately before saving.

| # | Source | What it supports | Test |
|---|---|---|---|
| 1 | Nambiar, Kishore & Bhargava, *The effect of script reform on levels of orthographic knowledge: Evidence from alphasyllabary Malayalam scripts*, **PLOS ONE** 18(8) e0285781, 2023-08-03 | Kerala's 1971 order "Malayalam Script — Adoption of New Script for Use", effective 15 April 1971; a government committee found separating consonants and diacritics could cut the grapheme count by 75%; the reform brought the count from ~1,200 down to a standardised 90 (18 vowels, 39 consonants); ~38 million speakers | Subject ✓, peer-reviewed ✓, open access ✓ |
| 2 | Radhakrishnan, Rajeesh & Hussain, *Metafont/MetaPost and a complex Indic script: Malayalam*, **TUGboat** 44(2), 2023, pp. 297–314 | Up to four consonants can be combined in a single Malayalam ligature; vowel signs can attach on both the left and right of the same consonant; a Malayalam font table runs to over 900 glyphs, and RIT Rachana carries over 920 glyphs derived from 117 base characters | Subject ✓, scholarly ✓, open ✓ |
| 3 | **The Unicode Standard**, Version 18.0.0, Chapter 12 §12.9 *Malayalam* (Table 12-36 Malayalam Orthographic Reform; Table 12-39 Use of Joiners in Malayalam), 2026 | ZWJ/ZWNJ sequences may be used to request traditional ligatures or reformed-orthography open forms, and — the load-bearing sentence — "Such sequences are defined for Malayalam only, and are left undefined for other Indic scripts"; conjunct display happens "where the font in use supports it" and "if available" | Subject ✓, standards body ✓ |
| 4 | Caldwell, *A Comparative Grammar of the Dravidian or South-Indian Family of Languages*, 2nd ed., Trübner & Co., London, **1875** (full text via archive.org) | "The verb in ordinary Malayāḷam is destitute of personal terminations; but in the poetry an inflected form is frequently used"; "In Malayāḷam the personal affixes are not yet used in prose"; "The future in *um* is altogether impersonal; no pronominal terminations are ever added to it"; nominative *nī*; dative pronoun forms *ninakk'*, *namukku* | Subject ✓, published grammar ✓, public domain ✓ |
| 5 | Moag, R. F., *Malayalam: A University Course and Reference Grammar*, Center for South and Southeast Asian Studies, University of Michigan, **1980** (ERIC ED197626, full text at files.eric.ed.gov) | "Malayalam has a total of three" words for 'you' (Lesson 1, §1.6 *Multiple Forms for He, She, and You*), with the politest of the three described as usable "in any situation without fear of insulting anyone" | Subject ✓, published university grammar ✓, open ✓ |
| 6 | **Wiktionary**, Malayalam entries (നീ, നിങ്ങൾ, താങ്കൾ, ഞാൻ, നിന്നെ, എന്നെ, എന്റെ, എനിക്ക്, സ്നേഹിക്കുക, കാത്തിരിക്കുക, ജീവിക്കുക, ഹൃദയം, ജീവിതം, ഇഷ്ടം, വിവാഹം, കഴിക്കുക, കൂടെ, ആണ്, മുഴുവൻ, കൈ, പിടിക്കുക, ആഗ്രഹിക്കുക, വേണം, ഉണ്ടാകുക, ഇല്ല) | Lexical gloss and part of speech for every content word used, and the register labels: നീ is marked *informal, impolite*; നിങ്ങൾ is *you all (2pl)* and *honorific you (2sg)*; താങ്കൾ is a second-person singular pronoun | Subject ✓ — it is the dictionary the lines were checked against. Not scholarly; treated as a dictionary, not as research |

**OCR caveat on source 5:** the ERIC scan's Malayalam script did not survive OCR, so only Moag's English prose was used — the three-pronoun statement and the politeness note. No Malayalam form was taken from it.

No generic context statistic (PIB / TRAI / Census / MEA) is used anywhere.
No Wikipedia link appears in the body. Wikipedia is used only inside
`structuredData` `sameAs`, where the checklist explicitly exempts it, with every QID
verified through the Wikipedia API on 2026-09-23: Malayalam → Q36236, Malayalam
script → Q1164129, Unicode → Q8819, Kerala → Q1186, Valentine's Day → Q37587.

### Search terms tried

`Malayalam orthography reformed script study`, `Malayalam OCR script complexity
research`, `Malayalam input method typing study`, `Malayalam pronouns honorifics
address terms`, `Kerala literacy language use sociolinguistics` — all via
`findpapers.mjs` (Crossref + Europe PMC). **Zero WebSearch calls were spent.**
The honorifics and Kerala-sociolinguistics queries returned nothing usable: Crossref
surfaced Korean, Mongolian and German address-term work, and Europe PMC returned
conference abstract dumps. That is a real finding — Malayalam address terms are not
covered by anything open-access that these two indexes reach — so the register
section leans on Caldwell (1875) plus dictionary entries rather than on a modern paper.

---

## Phase 3b — The verification method, and the ledger

Every line was checked at three independent layers. A line had to survive all three or
it was cut.

1. **Lexical.** Each content word was looked up in the Malayalam section of its
   Wiktionary entry, with the three-pronoun inventory cross-checked against Moag (1980), via the MediaWiki `action=parse` API, and its part of speech and
   gloss recorded. A word with no Malayalam section was treated as unverified.
2. **Morphological / syntactic.** Case forms and the tense formants were checked
   against Caldwell (1875): the accusative in *-e*, the dative pronouns *ninakk'* and
   *namukku*, the nominative *nī*, and the impersonal future in *-um* that carries no
   pronominal termination.
3. **Corpus attestation.** The exact Malayalam string was run as an
   `insource:"…"` exact-phrase search against both **ml.wikipedia.org** and
   **ml.wikisource.org** through the MediaWiki search API, and the total hit count
   recorded. A string with zero hits in both corpora was cut.

### Ledger — 15 drafted, 10 published, 5 cut

| # | Line | Verdict | Evidence / reason |
|---|---|---|---|
| 1 | ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു | **Published** | ഞാൻ, നിന്നെ (acc. of നീ), സ്നേഹിക്കുക "to love" all in Wiktionary; exact string 6 hits ml.wikipedia + 3 ml.wikisource |
| 2 | ഞാൻ നിങ്ങളെ സ്നേഹിക്കുന്നു | **Published** | നിങ്ങൾ glossed *you all (2pl); honorific you (2sg)*; "നിങ്ങളെ സ്നേഹിക്കുന്നു" 3 hits ml.wikisource |
| 3 | ഞാൻ താങ്കളെ സ്നേഹിക്കുന്നു | **Published** | താങ്കൾ in Wiktionary as 2sg pronoun; താങ്കളെ 13 hits ml.wikipedia + 23 ml.wikisource |
| 4 | എന്നെ വിവാഹം കഴിക്കുമോ? | **Published** | എന്നെ = acc. of ഞാൻ (Wiktionary); വിവാഹം "marriage"; കഴിക്കുക "to complete, finish"; "വിവാഹം കഴിക്കുമോ" 1 hit ml.wikipedia; interrogative *-ō* and impersonal future *-um* per Caldwell |
| 5 | നീ എന്റെ കൂടെ വരുമോ? | **Published** | എന്റെ = gen. of the 1sg pronoun; കൂടെ "with, together" (particle); "എന്റെ കൂടെ" 9 + 28 hits; വരുമോ 25 + 52 hits |
| 6 | നിങ്ങൾ എന്റെ കൂടെ വരുമോ? | **Published** | Same frame as #5 with the polite pronoun substituted; both halves attested independently |
| 7 | ഞാൻ നിന്നെ കാത്തിരിക്കും | **Published** | കാത്തിരിക്കുക "to wait, to await" (Wiktionary); കാത്തിരിക്കും 10 + 15 hits; future *-um* is impersonal (Caldwell), so the form is identical for every subject |
| 8 | നീ എന്റെ ഹൃദയമാണ് | **Published** | ഹൃദയം "heart"; ആണ് = conjugated form of ആകുക; ഹൃദയമാണ് 7 + 2 hits |
| 9 | നമുക്ക് ഒരുമിച്ച് ജീവിക്കാം | **Published** | namukku "to us" attested in Caldwell's Malayalam dative list; ഒരുമിച്ച് 1,102 + 22 hits; ജീവിക്കുക "to live"; ജീവിക്കാം 21 hits ml.wikipedia |
| 10 | നീ എന്റെ ജീവിതത്തിലേക്ക് വരുമോ? | **Published** | ജീവിതം "life"; ജീവിതത്തിലേക്ക് 164 + 5 hits; വരുമോ attested as above |
| 11 | താങ്കൾ എന്റെ കൂടെ വരുമോ? | **Cut** | Grammatical, but the collocation of the respectful താങ്കൾ with the familiar കൂടെ returned no corpus hit as a unit, and I could not establish that the pairing reads naturally rather than oddly. Register mismatch is exactly the failure a native reader spots, so it went. |
| 12 | എനിക്ക് നിന്നോട് ഇഷ്ടമാണ് | **Cut** | The sociative form നിന്നോട് has no Malayalam Wiktionary entry, so the case marking could not be checked against a dictionary; "എനിക്ക് നിന്നോട്" returned 1 hit on ml.wikipedia and 0 on ml.wikisource. One weak hit is not attestation. |
| 13 | നീ ഇല്ലാതെ എനിക്ക് ജീവിതമില്ല | **Cut** | "നീ ഇല്ലാതെ" returned 0 hits on ml.wikipedia and 1 on ml.wikisource; the possessive-existential frame എനിക്ക് … ഇല്ല could not be attested as a unit in either corpus. |
| 14 | എന്റെ കൈ പിടിക്കുമോ? | **Cut** | പിടിക്കുക glosses as "catch, grip, hold" — this is an English idiom ("hold my hand") mapped onto a Malayalam verb, and പിടിക്കുമോ returned 0 hits on ml.wikipedia (2 on ml.wikisource). Not enough to publish as a proposal line. |
| 15 | നമുക്ക് ഒരുമിച്ച് ഒരു ജീവിതം തുടങ്ങാം | **Cut** | Every part verifies (തുടങ്ങാം 24 + 4 hits), but it says nothing #9 does not already say, and the brief is explicit that fewer correct lines beat more. Cut for redundancy, not for error. |

**Standing limitation:** none of the ten published lines was reviewed by a native
Malayalam speaker. Corpus attestation shows a string occurs in published Malayalam; it
does not show that it reads well in a proposal. This is recorded in
`batchMeta.structuralLimitations` and stated in the body.

---

## Phase 4–5 notes

- **First-party facts used (verbatim from `content/facts.md`, regenerated 2026-09-23):**
  the 5,061 pages / 20 page types line, the 91.2% publish-and-share line, the 38.7%
  password-protect line, the 48.4% phone-open line, and the #1 `/apology-dashboard`
  line. Every one is labelled **platform-wide across 20 page types** in body prose.
  Nothing is attributed to proposal pages, because no proposal-specific data exists —
  the read-only probe of `proposalpages` remains refused.
- **No price, free-tier or paid-tier claim appears.** The pricing block in `facts.md`
  is empty.
- **Internal links (3):** `/proposal` (mandatory, placed after the register section
  establishes why a rendered page matters), `/love-gf` (the honest alternative — this
  is a "will you be my girlfriend" ask, not a marriage one), and `/templates`. All
  three are in `TEMPLATE_LINKS`. `templateUrls` carries `/proposal` and `/love-gf`.
  The body states plainly that all SubhSandesh templates are **English-language** and
  that a Malayalam line pasted into one is still subject to the recipient's font.
- **Where SubhSandesh loses:** its own section. The page does not solve Malayalam
  rendering; a screenshot does, and the post says so.

---

## Cap position at save time (capcheck.mjs re-run immediately before saving)

- `journals.plos.org` — **3 posts including this one** (the other two are
  `propose-day-wishes-for-friends` and `propose-day-wishes-for-girlfriend`). At the cap of 3,
  not over it. The PLOS paper is the only open-access source found that carries the 1971 order's
  75% / 1,200 → 90 figures; its Europe PMC mirror (PMC10399769) was deliberately **not** used
  because that publisher is already at cap.
- `archive.org` — **3 posts including this one** (`propose-day-quotes-in-kannada` and
  `propose-day-quotes-in-telugu` hold the other two, each citing a different public-domain grammar).
  At the cap, not over it.
- `unicode.org` — 2 posts (this one and the Kannada sibling, different chapter versions).
- `tug.org`, `files.eric.ed.gov`, `en.wiktionary.org` — 1 post each.
- **Race exposure:** both at-cap domains are full with this post included, so a sibling adding a
  PLOS or archive.org source after this save would push the batch over. Flagged in the handback.

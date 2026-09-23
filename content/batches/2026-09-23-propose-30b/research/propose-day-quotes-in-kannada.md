# Research brief — `propose day quotes in kannada`

Batch `2026-09-23-propose-30b` (wave 3). Slug `propose-day-quotes-in-kannada`.
Category `modern-romance`. Band 1,000–3,000 EST — not a measured volume.

---

## Phase 0 — first-party gate

`content/facts.md`, regenerated 2026-09-23. Five lines used verbatim in
`batchMeta.factsUsed`; three of them appear inside the first 150 words.

The ranking changed since wave 2: `/apology-dashboard` is now #1 (1,347 pages,
26.6%) and `/love-gf` is #2 (1,173 pages, 23.2%) while remaining the most-viewed
(16,902 views, 30.1%). Waves 1–2 say `/love-gf` is #1 at 1,138 / 24.9%; that is
out of date and is not repeated here. The 6.4-hour edit-gap figure sampled on
`/love-gf` is gone; the live figure is 2.4 hours sampled on `/apology-dashboard`,
n=1,348, and the body says so in prose.

No proposal-specific data exists. Every number in the body is labelled in prose
as platform-wide across all 20 page types, or as sampled on the named template.
The pricing block in `facts.md` is empty, so the post states and implies no
price, no free tier and no paid tier. The Raksha Bandhan lead-time block is out
of bounds for this batch and is not used.

## Phase 1 — SERP: not measured, and not described

WebSearch budget for this run was 5 calls shared across 30 agents. One call was
spent, on a search for an open-access Kannada honorifics paper, not on the
keyword SERP. **No competitor page for this keyword was fetched and no SERP for
it was measured**, so this brief makes no claim about what ranking pages contain,
what year they carry, or what they omit. The batch brief records that eleven
India-served SERPs were measured on 2026-09-16 in
`content/keywords/2026-09-16-propose-100/serps.md`; this keyword is not in that
set. The inherited, unverified context is that Indian-language Propose Day
queries run on an annual February news cycle held by large publishers. That is
recorded in `structuralLimitations` and drives the position 6–10 target in
`honestAssessment`, and nothing in the body describes a competitor page.

## Phase 2 — cannibalisation and the angle

Siblings on this territory, wave 2 (`content/batches/2026-09-17-propose-30`):
`propose-day-quotes-in-hindi`, `-in-marathi`, `-in-bengali`. Kannada, Telugu and
Malayalam were held back in wave 2 because the scripts could not be verified.

`propose-day-quotes-in-marathi.json` was read for the standard of verification,
not for its shape. How this post differs:

- **Different language family.** Marathi is Indo-Aryan and its post runs a
  Hindi-only blocklist over every line, because Marathi and Hindi share a script
  and much vocabulary. Kannada is Dravidian; a Hindi blocklist is meaningless
  here. The screen that matters instead is *lexical attestation* — does the word
  have a headword in a Kannada dictionary at all — and *affix attestation* —
  does the ending appear in that dictionary's own list of person affixes.
- **Different pronoun system.** Marathi has तू / तुम्ही. Kannada has ನೀನು /
  ನೀವು plus a separate honorific enclitic -ಇರಿ that Marathi has no analogue for.
- **Different structure.** The Marathi post groups by who you are asking and
  closes on regional-language internet scarcity. This post is built as a
  register pair: the same two asks written twice, once in ನೀನು and once in ನೀವು,
  so the reader can see the ending change. That section is the page.
- **Different sources.** No source here appears in the Marathi, Hindi or Bengali
  posts. The regional-language-internet lane (KPMG), the literary lane, the
  politeness lane and the romanisation lane are all taken by siblings and are
  avoided. This post's lane is Kannada linguistics and Kannada language
  technology.

**Angle.** Wins by being the only Kannada Propose Day page that publishes the
ನೀನು/ನೀವು register pair as its main section with the verb ending shown on both
sides, verifies every word and affix against Kittel's dictionary and grammar, and
publishes the cut count — twelve of nineteen kept — alongside first-party
SubhSandesh figures labelled platform-wide across 20 page types.

## Phase 3 — sources

Lane assigned: Kannada linguistics and the language's digital presence. Queries
run through `findpapers.mjs`: `Kannada honorifics pronouns linguistics`,
`Kannada morphology study`, `Kannada NLP corpus resources`, `Dravidian languages
digital resources study`, `Kannada language identity Karnataka research`,
`Kannada address terms politeness second person`, `Kannada Wikipedia digital
content Indian language`, `agglutinative Dravidian morphological analyzer
Kannada`, `Kannada grammar verb agreement second person`.

**What was not available, and it matters.** Almost every scholarly hit on
Kannada honorifics is a paywalled book chapter — the Oxford Handbook of Dravidian
Languages, the Routledge Dravidian Languages volume, Lexical Anaphors and
Pronouns in Selected South Asian Languages. Of the open-access candidates found,
several were unreachable from this machine: `tandfonline.com` returned 403 on the
Cogent Arts & Humanities paper on the Gokak movement, `mdpi.com` returned 403,
`degruyterbrill.com` returned an empty body, and `library.oapen.org`,
`books.openedition.org` and `hasp.ub.uni-heidelberg.de` all served an Anubis
bot-challenge. Zydenbos's *A Manual of Modern Kannada* (Heidelberg, open access)
would have been the ideal modern grammar and could not be fetched.

The PMC family and `frontiersin.org` were already at the 3-post domain cap and
were not used. `aclanthology.org`, `arxiv.org` and `doi.org` were avoided as
crowded.

Four sources, all fetched and read:

1. **Kittel's Kannada–English Dictionary**, Digital Dictionaries of South Asia,
   University of Chicago — https://dsal.uchicago.edu/dictionaries/kittel/
   Revised and enlarged edition, [Madras]: University of Madras, 1968–71.
   Subject test: passes — it is a dictionary of the language the post is written
   in. Used for every headword and for the affix entries. Not peer-reviewed; it
   is a scholarly reference work.
2. **F. Kittel, *A Grammar of the Kannada Language in English***, Basel Mission
   Book and Tract Depository, Mangalore, 1903 —
   https://archive.org/details/grammarofkannada00kittuoft
   Full OCR text read. §258 carries the ನೀನು/ನೀವು rule quoted in the body.
   Subject test: passes.
3. **Rajani Shree M. and Shambhavi B. R., "Generation of Syntax Parser on South
   Indian Language using Bottom-Up Parsing Technique and PCFG"**, *Journal of
   Information Technology Management* (University of Tehran), Volume 15, Special
   Issue 2023, pages 19–33 — https://jitm.ut.ac.ir/article_89408.html
   Peer-reviewed, DOAJ-listed, open access. Full PDF read. Subject test: passes.
   This is the post's peer-reviewed open-access source.
4. **The Unicode Standard, Version 17.0, Chapter 12 "South and Central Asia-I",
   §12.8 Kannada** — https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-12/
   Read in full. Subject test: passes — it is the specification for the script
   the post prints. A standards body, not a competitor.

Swap test: none of the four could sit unchanged in another keyword's post in
this batch; all four are specifically about Kannada. Generic context statistics
used: zero. Wikipedia links in the body: zero (Wikipedia appears only as verified
`sameAs` targets in `structuredData`, which does not count against the body
budget). No Kannada-speaker population figure is printed anywhere, because no
source carrying one with a date was fetched.

## Verification method for the Kannada lines

Two screens, both against fetched material, applied to every line:

1. **Lexical.** Every content word must return a headword in Kittel's dictionary
   via the DSAL query endpoint, and the gloss at that headword must be the sense
   the line uses. A word whose only headword sense is wrong is a cut, not a
   judgement call — that is how ಉಳಿ, ಬಾಳು and ಮರೆ were lost.
2. **Morphological.** Every inflection must map to an affix the same dictionary
   lists as its own headword, with worked examples:
   - `-ಏನೆ` — "a common affix for the first person singular of the present",
     e.g. ತರುತ್ತೇನೆ. Licenses ಪ್ರೀತಿಸುತ್ತೇನೆ, ಕಾಯುತ್ತೇನೆ.
   - `-ಈ` (entry 7) — "an affix for the second person singular of the common
     present", e.g. ಮಾಡುತ್ತೀ, ತಿಳಿಯುತ್ತೀ. Licenses ಹಿಡಿಯುತ್ತೀ,
     ಮದುವೆಯಾಗುತ್ತೀ; ತಿಳಿಯುತ್ತೀ attests the -ಯುತ್ತೀ shape after a vowel-final
     stem.
   - `-ಈರಿ` (entry 1) — "the plural of -ಈ 7", e.g. ಹೋಗುತ್ತೀರಿ, ಇರುತ್ತೀರಿ.
     Licenses ಹಿಡಿಯುತ್ತೀರಿ, ಮದುವೆಯಾಗುತ್ತೀರಿ.
   - `-ಇರಿ` (entry 3) — "an honorific affix, generally added to the end of any
     final word which is employed in addressing a superior or a dear person".
   - Conditional `-ದರೆ` / `-ಇದರೆ` attested in dictionary examples
     (ಇದ್ದರೆ, ಅಗಲಿದರೆ, ಮಾಡಿದರೆ). Licenses ಇದ್ದರೆ, ಒಪ್ಪಿದರೆ.
   - Case forms attested in dictionary example sentences: ನಿನ್ನನ್ನು,
     ನನ್ನನ್ನು, ನನಗೆ, ನಿಮಗೆ, ಮನಸ್ಸಿನಲ್ಲಿ, ಅಷ್ಟಕ್ಕೆ.
   - Verbal noun `-ುವುದು` attested (ಮದುವೆಯಾಗುವುದಕ್ಕೆ, ಕೇಳುವುದು).
   - Question by intonation with no added particle attested
     ("…ನೀನು ಹೋಗಿದ್ದಿ?"). The colloquial interrogative -ಯಾ could **not** be
     attested in the dictionary, so no line uses it.
3. **Register agreement.** Kittel's grammar §258: "when addressing a person of
   some respectability, the plural ನೀವು (also in its oblique cases) is always
   used, followed by a verb in the plural; and when addressing a person of low
   rank, or a child, the singular ನೀನು is always used." Every ನೀವು line takes
   `-ಈರಿ`; every ನೀನು line takes `-ಈ` or no second-person ending at all.

**Orthography.** Kittel writes nasal-plus-stop as a conjunct (ನ್ದ, ಮ್ಬ) and
retains ೞ where modern standard Kannada uses anusvara (ಂದ, ಂಬ) and ಳ. The
published lines use modern orthography. Two published words are affected —
ತುಂಬಾ (Kittel: ತುಮ್ಬಾ) and ಎಂದು-type forms, which do not appear in a published
line. This is disclosed in `structuralLimitations`.

**Ledger.** 19 drafted, 12 published, 7 cut.

| Cut line | Reason |
|---|---|
| ನೀನು ಇಲ್ಲದೆ ಈ ದಿನಗಳು ಬರಿದು | ಬರಿದು returns no headword in Kittel |
| ನನ್ನ ಕನಸಿನಲ್ಲಿ ನೀನೇ ಇದ್ದೀಯ | the form ಇದ್ದೀಯ is not among the dictionary's second-person affixes |
| ನಿನ್ನ ನೆನಪು ನನ್ನಲ್ಲಿ ಉಳಿದಿದೆ | ಉಳಿ is entered as "to conceal oneself", "a chisel", "a thief" — not "to remain" |
| ನನ್ನ ಜೊತೆ ಬಾಳು | ಬಾಳು entry 1 is "a knife, a sword"; the life sense is narrow and separate |
| ನಿನ್ನನ್ನು ಎಂದಿಗೂ ಮರೆಯುವುದಿಲ್ಲ | ಮರೆ is entered as "a kind of deer" |
| ನಿಮ್ಮ ಜೊತೆ ಜೀವನ ಕಳೆಯಲು ಬಯಸುತ್ತೇನೆ | the infinitive ಕಳೆಯಲು returns nothing on a full-text search |
| ನನ್ನ ಮನಸ್ಸಿನಲ್ಲಿ ನಿನ್ನ ಹೆಸರು | verbless equational sentence pattern could not be attested as a sentence |

**The limit of the method, stated plainly.** A dictionary of 1894, revised
1968–71, is good evidence that a word exists and means what is claimed, and that
an ending is real. It is not evidence that a line sounds natural to a Kannada
speaker in 2027. No native speaker reviewed these lines. That is recorded in
`batchMeta.structuralLimitations` and said in the body.

## Phase 5 — links and targeting

- `/proposal` — mandatory, placed after the twelve lines, once the reader has a
  line worth sending.
- `/love-gf` — the genuine alternative, because most Propose Day traffic is not a
  marriage proposal. Placed in the objection section with the honest note that
  the templates are English-language.
- `/templates` — a third real URL from `TEMPLATE_LINKS`, for a reader neither
  fits.
- `templateUrls`: `/proposal`, `/love-gf`. `categorySlug`: `modern-romance`
  (verified live against the Strapi categories endpoint).
- Slug checked free against Strapi on 2026-09-23: `total: 0`.

## Dates

Verified with `date` on this machine: Rose Day Sunday 7 February 2027, Propose
Day **Monday 8 February 2027**, Valentine's Day Sunday 14 February 2027.

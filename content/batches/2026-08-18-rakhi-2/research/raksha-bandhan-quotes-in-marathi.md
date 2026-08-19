# Research brief — `raksha bandhan quotes in marathi`

Batch: `2026-08-18-rakhi-2` · slug: `raksha-bandhan-quotes-in-marathi`
Intent: C11 · informational · asset type: blog · category: rakhi
Difficulty from the sheet: winnable · 5 weak in top 10
Slug verified free in Strapi before drafting.

Provenance note: a subagent completed Phases 1–4 and wrote the body draft to scratch, then
died on an API stream error before writing either deliverable. The body was recovered from
`raksha-bandhan-quotes-in-marathi-body.md`; **every source claim in it was then independently
re-fetched and re-verified in the main session**, which changed four of them (below).

---

## Phase 1 — SERP analysis

Named ranking URLs from the sheet: `wishesframes.com/raksha-bandhan-quotes-in-marathi/` and
`giboxonline.com/blogs/wishes/heart-touching-raksha-bandhan-quotes-in-marathi`. The wider set
is the same species — Marathi quote inventories, 20 to 100 lines each, no grammar notes, no
script guidance, no citations, several with the sender's gender unmarked or wrong for the
stated recipient. All are competitors under `references/competitors.md` (wishes content
farms). **Analysed only; none cited, linked or paraphrased**, and no quote list was reproduced.

### The finding that decides the post

Every page treats Marathi as a **translation target**: Hindi sentiment rendered in Devanagari,
with no acknowledgement that Marathi grammar forces two decisions English does not.

1. **Who you are addressing** is marked inside the verb — तू vs तुम्ही — so a line is not
   register-neutral.
2. **The speaker's own gender** is marked in the present tense, so a line written for a
   sister to send announces the wrong sender when a brother pastes it unchanged.

No page in the set mentions either. That single fact — *copying a Marathi line off a list can
misgender the sender* — is the post's spine and appears nowhere in the SERP.

---

## Phase 2 — Gap analysis

**Table stakes:** Marathi lines in Devanagari; wishes for a sibling; the Shravan Purnima date.

**The gap — none of the ranking pages cover:**
1. The तू / तुम्ही / आपण register decision, or that imperatives encode it too.
2. Speaker-gender verb marking, and the copy-paste failure it causes.
3. Transliteration for people who speak Marathi but read Latin script.
4. Devanagari rendering faults — conjunct display and the Marathi eyelash ऱ.
5. A collective line for the family group rather than one sibling.
6. Any case for not sending a Marathi quote at all.
7. Any citation of any kind.

**Fan-out sub-queries → H2s:** what counts as a Marathi quote · pick the register first · the
quotes themselves (H3s) · where each fits (table) · what breaks Devanagari on a phone ·
writing Marathi in Latin letters · when a Marathi quote is the wrong choice · getting it right
before sending.

### Angle

> Wins by being the only post that treats Marathi as a language with decisions in it rather
> than a translation target — the तू / तुम्ही register choice and speaker-gender verb forms
> come before the words, and every line ships with transliteration, an English gloss, and the
> Unicode-documented script faults that break Devanagari on someone else's phone.

---

## Phase 2b — Cannibalisation check

The 2026-08-13 batch drafted **`raksha-bandhan-wishes-for-brother-in-marathi`**, which is
brother-directed wishes and used `censusindia.gov.in`, `en.wikipedia.org`, `aclanthology.org`
(×2) and `maharashtratourism.gov.in`. This post is deliberately **sister-, group- and
caption-directed**, carried by register and script material rather than wish text, and shares
**none** of those five sources. Overlap is reduced but real — same language, same occasion —
and it is recorded in `honestAssessment` with a recommendation to compare them side by side
before publishing both.

---

## Phase 3 — Sources (all re-verified in the main session)

Five sources, five fresh domains, none used elsewhere in this batch, none banned.

| # | Source | Domain | Verified finding | Tests |
|---|---|---|---|---|
| 1 | *Marathi in Context* | `lib.uchicago.edu` | Read on the page: "For addressing a person there are three levels of respect: तू tu (familiar), तुम्ही tumhi (middle) and आपण apəṇ (honorific). The pronoun तुम्ही tumhi is most frequently used." Also: आपण "in the second person… expressing a greater degree of deference than तुम्ही", and "The honorific आपण apəṇ is gradually falling out of use"; "The आपण apəṇ in Table 3 is the same word as the inclusive 'we'." Speaker-gender forms मी जातो / जाते printed. Transliteration scheme uses ə (नमस्ते → nəməste, माझं → majhə:). **No publication date printed.** | subject ✓ scholarly ✓ swap ✗ |
| 2 | Shweta Akolkar, *Interpreting the shifty first person inclusive pronoun in Marathi*, **Proceedings of SALT 34** | `journals.linguisticsociety.org` | Confirmed: author at UC Berkeley, abstract on indexical shift in attitude reports, **published 2025-03-11**. | subject ✓ peer-reviewed ✓ swap ✗ |
| 3 | *Indic Scripts and Languages FAQ*, Unicode Consortium | `unicode.org` | Verbatim: display "is the decision of an underlying software module called a display engine, which bases this decision on the availability of glyphs in the font." Also confirms Google's Noto fonts cover the Indic scripts. | subject ✓ official ✓ swap ✗ |
| 4 | *Developing OpenType Fonts for Devanagari Script*, Microsoft | `learn.microsoft.com` | Verbatim: "the sequence RA H ZWJ is used for the encoded representation for 'eyelash RA' used for the Marathi language." | subject ✓ official ✓ swap ✗ |
| 5 | *Grindmill Songs*, Scroll.in | `scroll.in` | Verified: Hema Rairkar and Guy Poitevin "co-founded the Centre for Cooperative Research in Social Sciences in Pune and transcribed more than 110,000 folk songs of Maharashtra over two long decades"; the page defines ovi as a couplet. | subject ✓ swap ✗ |

**Generic context statistics: zero.**

### Four corrections made during re-verification

The recovered draft over-stated four things. All were fixed before assembly:

1. The Unicode quote was paraphrased as *"based on the availability of glyphs"*; the source
   reads **"bases this decision on the availability of glyphs in the font"**. Now quoted exactly.
2. The draft claimed **110,000 ovi**; Scroll.in says **110,000 folk songs**, with ovi defined
   as the couplet form. Corrected.
3. The draft cited the transliteration example **नमस्कार / nəməskar**; the page prints
   **नमस्ते / nəməste**. Swapped to the verified example.
4. The draft attributed the **रे / ग address particles** to *Marathi in Context*; that could
   not be found on the page. The guidance stays in the body, explicitly marked as ordinary
   usage rather than sourced, and the attribution was removed from the source line. The
   SALT paper's **CC BY** licence claim was also dropped — the page states an author agreement
   with the LSA, not a CC BY licence.

Also corrected at assembly: three Wikidata QIDs guessed by the draft pipeline were wrong.
Verified against the Wikipedia API — Marathi language **Q1571**, Devanagari **Q38592**,
Honorifics (linguistics) **Q5897044**.

---

## Phase 4–5 decisions

- 9 H2s, 7 H3 quotes (mirrored as an `ItemList` in order), one 4-row comparison table whose
  last column is entirely first-party.
- Body 1,798 words excluding FAQs; 12 FAQs. The recovered draft ran to **2,410 words** and was
  compressed by roughly 600 without dropping a Marathi line, a citation or a number; one quote
  entry (a cousin / chosen-sister line) was cut because it overlapped the existing
  `rakhi-wishes-for-cousin-brother` post, and the heading and ItemList were renumbered to seven.
- First-party facts, ≥2 in the first 150 words: **51.9% mobile opens of 32,683 views** and
  **2,718 pages created**; 52.1% touch-device, 99.4% publish rate, 44.3% password rate and the
  6.9-hour edit gap appear later.
- `categorySlug`: `family-and-continuity` — the post is about the sibling relationship and the
  language it is conducted in.
- `templateUrls`: `/happy-rakshabandhan-to-brother`, `/templates`.
- Deliberate admission: the only rakhi template is written **brother-first**, so there is no
  sister-specific rakhi design today — stated plainly in the body, which is awkward for a post
  whose best lines are sister-directed.

## The quotes — an honest note

**The seven Marathi lines are original compositions written for this post**, each with a plain
Roman transliteration and an English gloss. They have had **no native-speaker review**. Grammar
claims about them (आहात vs आहेस, रागावतेस / सांगतेस as second-person feminine singular,
पाहतो vs पाहते, झालीस, बांध / ठेव as bare imperative bases) are stated confidently in the
body; a Marathi speaker should confirm both the idiom and those parsings before publishing.
This is flagged as the post's biggest risk in `honestAssessment`.

## Date fact-check

Shravan Purnima falls on **28 August 2026** — consistent with the panchang record verified in
the 2026-08-13 batch. No muhurat time is stated and no calendar source is cited
(`drikpanchang.com` is banned for this batch).

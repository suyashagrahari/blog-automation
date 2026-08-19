# Research brief — `happy diwali wishes in hindi`

Batch: `2026-08-19-diwali` · slug: `happy-diwali-wishes-in-hindi`
Informational, high volume · asset type: blog · Slug verified free in Strapi before drafting.

**Provenance:** a subagent completed Phases 1–4 and wrote the body draft to scratch, then died on
the org monthly spend limit before writing either deliverable. The body was recovered from
`happy-diwali-wishes-in-hindi-body.md`; this brief was reconstructed in the main session from the
draft's own citations, and the body was trimmed from **1,991 to 1,797 words** to meet the word
band. No claim was added and no source changed.

---

## Phase 1 — SERP analysis

The query is dominated by Hindi news portals (Navbharat Times, Amar Ujala, Jagran, ABP, News18
Hindi) and wishes farms, publishing large lists of forwardable lines. Several are year-stamped and
some still carry a previous year's date as current. All are competitors or content farms under
`references/competitors.md`. **Analysed only; none cited, linked or paraphrased**, and no line was
taken from any of them.

### The finding that decides the post

Every ranking page treats the task as **vocabulary supply** — here are 50 lines, copy one. Not one
of them says that Hindi's second person is a **three-way** (आप / तुम / तू), that शुभ दीपावली and
हैप्पी दिवाली belong to different registers and are not interchangeable, or that a wish in तुम to a
mother-in-law reads as a slight. The single decision that determines whether a Hindi Diwali wish
lands is invisible on this SERP.

---

## Phase 2 — Gap analysis

**Table stakes:** a substantial set of Hindi lines; Devanagari; something sendable on WhatsApp.

**The gap — none of the ranking pages cover:**
1. शुभ दीपावली vs हैप्पी दिवाली as a register choice, and who each suits.
2. दीपावली vs दिवाली — which spelling to write where.
3. The आप / तुम / तू three-way, and that आप takes plural agreement.
4. That excess politeness is its own failure — शुभ दीपावली to a college friend reads like a bank SMS.
5. What a Diwali wish is conventionally *about* (समृद्धि, light over darkness, Lakshmi's blessing),
   and why a line translated from "have a great Diwali" lands flat.
6. Devanagari conjunct rendering on someone else's handset.
7. Any case for not sending a Hindi wish at all.
8. Any citation of any kind.

**Fan-out sub-queries → H2s:** which greeting fits whom · which spelling · the pronoun rule · what
the greeting is conventionally about · the wishes themselves (H3s by recipient) · where each fits
(table) · Devanagari on a phone · when a Hindi wish is the wrong choice.

### Angle

> Wins by being the only post that treats a Hindi Diwali wish as a register decision before a
> wording one — शुभ दीपावली versus हैप्पी दिवाली, the आप/तुम/तू three-way, and what समृद्धि actually
> means — sourced to a politeness corpus and to Platts' 1884 dictionary rather than to another list
> of forwards.

---

## Phase 2b — Cannibalisation check

Two precedents in earlier batches were read before drafting:

- `2026-08-18-rakhi-2/blogs/raksha-bandhan-shayari-2026-hindi-english` — owns Hindi/Urdu **poetic
  form** (sher, radeef, qaafiya) and translation loss. This post does **not** make poetic form its
  spine and shares none of its sources.
- `2026-08-18-rakhi-2/blogs/raksha-bandhan-quotes-in-marathi` — owns the deep **script-rendering**
  material (Unicode display engine, eyelash ऱ) via `unicode.org` and `learn.microsoft.com`. This
  post keeps Devanagari rendering to one short section and cites **neither** of those domains.

A sibling in this batch covers Marathi separately; the Marathi/Maharashtra material is not touched here.

---

## Phase 3 — Sources (5, four distinct domains)

Lane: Hindi honorifics and politeness registers, plus Diwali's own textual and ritual conventions.
All five are open and were read; none is on the batch ban list, and none appears in any of the 29
rakhi posts.

| # | Source | Domain | Verified finding |
|---|---|---|---|
| 1 | Ritesh Kumar, *Developing Politeness Annotated Corpus of Hindi Blogs*, **LREC 2014** | `lrec-conf.org` | Politeness-annotated corpus of **over 479,000** Hindi blog posts and comments. Honorific pronouns and honorific verb forms addressed to an elder or a stranger are classed **appropriate** — unmarked, expected usage. Politeness beyond what the relationship calls for is classed **"too polite"** and was marked impolite by annotators. |
| 2 | Hadavizadeh & Singh, *Leech's Politeness Maxims and Their Hierarchy in Hindi and Persian*, **Studii şi cercetări filologice** 21 | `zenodo.org` | Contrasts Hindi's three-tier तू / तुम / आप address system with the two-way T/V split of Persian, French and Spanish: तुम where statuses are equal and the relationship familiar but polite, तू where the addressee is perceived as lower, आप where the addressee ranks higher. Published **19 December 2022**. |
| 3 | John T. Platts, *A Dictionary of Urdū, Classical Hindī, and English* (**1884**) | `archive.org` | Lists **दीपावली as equal to दिवाली**. Records **आप** as literally reflexive — "self, himself, oneself" — pressed into reverential use for "you, Sir, your honour", which is why it takes plural agreement. Glosses **समृद्धि** as "great prosperity or success, thriving, increase, gain… well-being, wealth" and **शुभ** as "bright, shining… auspicious, fortunate". |
| 4 | S. M. Natesa Sastri, *Hindu Feasts, Fasts and Ceremonies* (**1903**), ch. 5 "The Dipavali" | `en.wikisource.org` | Verbatim: "The word Dipavali is a Sanskrit compound, made up of two simple words, Dipa, meaning lights, and avali, a row, thus a row of lights." Also records that in northern India Diwali was the day the year's accounts were closed and new account books opened. |
| 5 | R. E. Hume, *The Thirteen Principal Upanishads* (Oxford University Press, **1921**) | `archive.org` | Renders Bṛhadāraṇyaka Upaniṣad **1.3.28** as "From darkness lead me to light", with the text glossing the darkness as death and the light as immortality. |

**Generic context statistics used: zero.** No PIB / TRAI / Census / MEA figure appears.

**Domain note:** `archive.org` supplies two of the five sources (Platts and Hume) as distinct URLs.
The batch cap counts posts per domain, not URLs per post, so this sits at one post for `archive.org`.

**Two sources are pre-1925 reference works**, used deliberately: Platts for lexical meaning and
Natesa Sastri for the compound's etymology and the ledger convention. Neither is used as current
empirical data, and the body frames them as historical record.

---

## Phase 4–5 decisions

- 9 H2s, 5 H3 recipient groups (mirrored as an `ItemList` in order), one 5-row comparison table
  whose last column is first-party — and deliberately unflattering.
- Body **1,797 words** excluding FAQs; 11 FAQs.
- First-party facts, ≥2 in the first 150 words: **51.8% mobile opens** and the **6.9-hour median
  edit gap**; 2,739 pages / 13 page types, /love-gf's 914 pages and 13,104 views, and the 44.3%
  password rate appear later.
- `categorySlug`: `festive-beats`.
- `templateUrls`: `/templates`, `/love-gf`, `/holi`.
- **The table is the honest admission.** Of five recipient types, only one — a partner — has a
  SubhSandesh template built for it, and the body says so: "One row of five has a template built
  for it — the honest state of the product going into November 2026."

## The wishes — an honest note

**All nine Hindi wishes are original compositions written for this post**, each with Devanagari, a
plain Roman transliteration and an English gloss, and the pronoun in each is deliberate. They have
had **no native-speaker review**. The तू line is flagged in the body itself as "the riskiest thing
here", and a Hindi reader should confirm idiom before publishing. This is recorded in
`honestAssessment` as the post's main risk.

## Date fact-check

Diwali 2026 falls on **Sunday 8 November 2026**, five days **6–10 November**. Stated as an
operational fact about send timing. **No muhurat time is given**, so no panchang is cited and the
date stays out of `sources` per the checklist's festival-date exception; `drikpanchang.com` is
banned for this batch.

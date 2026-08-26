# Research brief — `raksha bandhan wishes in punjabi`

- Slug: `raksha-bandhan-wishes-in-punjabi` (verified free in Strapi on 2026-08-25 — `filters[slug][$eq]` returned `total: 0`)
- Batch: `2026-08-25-rakhi-2027`
- Category: `indian-festivals` (verified against the live Strapi category list)
- Templates: `/happy-rakshabandhan-to-brother`, `/templates`
- Volume band: 2 (300–1,000/mo, **EST** not TOOL), autocomplete demand 4. Small, cheap win.
- Festival dates used: Rakhi 2027 = **Tuesday 17 August 2027**; Rakhi 2026 = **Friday 28 August 2026**.
  Verified two ways, no panchang site cited: the Wikipedia infobox source gives `date2026 = 28 August (Friday)`,
  and a Meeus full-moon computation run in-session gives full moon 2026-08-28 09:50 IST and 2027-08-17 13:01 IST
  (Shravana Purnima). Both agree with the brief.

---

## Phase 1 — SERP analysis (fetched 2026-08-25)

`WebSearch` for the exact keyword returned, in order: Pinterest ideas page, punjabiwishes.com,
fnp.com/quotes/raksha-bandhan/punjabi, shayaristudy.com, fnp.com/quotes/raksha-bandhan (English hub),
lovesove.com, seminarsonly.com, adobe.com/in/express. No AI Overview surfaced. **Position 1 is Pinterest**,
which is the clearest possible signal that Google has almost nothing native to rank.

| Page | Words / shape | Gurmukhi? | Translit? | English meaning? | Answer position | Format elements | Data + date | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|---|
| pinterest.com (pos 1) | Image grid, no prose | In images only | No | No | n/a | None | None | n/a | Image discovery |
| punjabiwishes.com | ~1,200, long unbroken list | **Yes, real Gurmukhi** | **No** | **No** | Immediate (list starts at the top) | No table, no FAQ, no byline, no date; comment form; images uploaded 2022 | None | Neutral, no authorial voice | Volume of quotable lines |
| fnp.com/quotes/raksha-bandhan/punjabi | ~150 words of prose | **Only inside JPG/PNG files** | No | No | 1-sentence intro then gallery | Commerce banner, "Related Pages" links, no FAQ, no table | None | Retail-promotional | Selling rakhi hampers |
| shayaristudy.com | **Nothing — parked domain** | No | No | No | n/a | "This domain may be for sale." | None | n/a | Nothing; it is for sale |
| lovesove.com | ~800, wishes as images | In images | No | No | After nav clutter | Dated Aug 5 2025 (updated Aug 6 2025), related-language rail, no FAQ, no table | None | Aggregator | Cross-language wish hub |
| seminarsonly.com | ~900, numbered list | Yes | No | No | Immediate | Byline "Freddy John", dated **21 August 2021**; H3 in body says "ਰੱਖੜੀ ਬੰਧਨ 22 ਅਗਸਤ 2021" | Stale festival date baked into copy | Machine-translated | 2021 news cycle |

Two findings worth more than the table:

1. **shayaristudy.com — a top-5 result — is an abandoned parked domain offered for sale.** Fetched and confirmed
   2026-08-25. Google is ranking a dead page because there is nothing better.
2. **The Punjabi on several of these pages is machine-translated from Hindi and visibly broken.** In the
   seminarsonly copy, a line about a brother protecting his sister contains `ਮੁਰਗੀਆਂ` ("hens") where a word
   about safety belongs, and another sentence collapses into the corrupted cluster `ਬੁੱ oldੇ` mid-word. The same
   "protective brother" line is copied verbatim onto punjabiwishes.com. This is a verifiable quality gap, not an
   opinion.

The brief's note that igp.com's **Hindi** post ranks for this **Punjabi** query is consistent with what the SERP
shows — Google substituting an adjacent language because native Punjabi supply is thin. The specific igp URL did
not appear in this run's top 8; adobe.com/in/express appeared instead, which is the same phenomenon (a generic
template page filling a native-content vacuum).

---

## Phase 2 — Gap analysis

**Table stakes (all five carry these, so the post must too):** a list of ready-to-send wishes; wishes segmented
by brother vs sister; short status/caption-length options; the emotional register of the festival.

**The gap — none of the five has any of this:**
- Gurmukhi **and** Latin transliteration **and** English meaning for the same line. Every page gives at most one.
- Any mention that Punjabi has two scripts — Gurmukhi in India, Shahmukhi in Pakistan — or which to send.
- Any acknowledgement that the festival's Punjabi name is **Rakhri**, not Raksha Bandhan.
- Any note on whether Gurmukhi will actually render on the recipient's handset.
- Any Punjabi kinship vocabulary guidance (`veer` / `veere` / `bhaji` / `bhaine`, `vadhaiyan` vs `shubhkamnayein`).
- The cousin / sibling-by-choice case.
- A downside section, a comparison table, or any first-party data.

**Stale data:** seminarsonly is date-stamped 2021 in its own body copy. lovesove's wish images date from 2020.
punjabiwishes' images from 2022. None cites a statistic of any kind, so there is no number to supersede — the
freshness win is the festival date and the script guidance, not a replaced figure.

**Unanswered questions the pages raise and drop:** what do I send if my brother cannot read Gurmukhi? Do Sikhs
observe rakhi? How do I type Punjabi without a Punjabi keyboard?

**Fan-out sub-queries → became H2s or FAQs:** how do I say happy rakhi in Punjabi · is it Rakhri or Raksha
Bandhan · Gurmukhi vs Shahmukhi · will Punjabi text show on my phone · what do you call brother in Punjabi ·
do Sikhs celebrate Raksha Bandhan · short Punjabi rakhi status for WhatsApp · when is Raksha Bandhan 2027.

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that gives Punjabi Raksha Bandhan wishes
as copy-pasteable Gurmukhi *plus* Latin transliteration *plus* English meaning, and the only one that answers the
Gurmukhi-versus-Shahmukhi question, framed by SubhSandesh's own 6.9-hour median edit window.

---

## Phase 3 — Sources

Searched the **phenomenon**, not the festival. Queries used: `Gurmukhi Shahmukhi script transliteration Punjabi
open access`, `Punjabi diaspora transnational family communication study`, `brother sister relationship Punjab
kinship anthropology`, `arxiv Punjabi low-resource language Gurmukhi Unicode`, `Punjabi heritage language
literacy Gurmukhi second generation diaspora`, plus OpenAlex API searches on
`Punjabi Gurmukhi script identity sociolinguistics` and `Punjabi language digital media Gurmukhi social media`
filtered to `is_oa:true`.

| # | Source | Type | Claim used | Published | Subject test | Swap test |
|---|---|---|---|---|---|---|
| 1 | unicode.org/Public/UNIDATA/Blocks.txt | Standards body, full text read | Gurmukhi occupies U+0A00–U+0A7F (Blocks-17.0.0) | 2025-08-01 | Pass (the script) | Pass — Gurmukhi-specific |
| 2 | aclanthology.org/C12-2062/ | Peer-reviewed, COLING 2012, open access | Converting Gurmukhi↔Shahmukhi is "beyond simple transliteration" | 2012-12-01 | Pass (the language) | Pass |
| 3 | cardinalscholar.bsu.edu/handle/20.500.14291/199826 | PhD thesis, Ball State, open access, abstract read in full | Punjabi is the language of 44% of Pakistanis, no official status, absent from education and government; 96 interviewees in Sahiwal district and Lahore | 2015-07-17 | Pass (the language) | Pass |
| 4 | arxiv.org/abs/2508.01918 | Scholarly preprint, abstract read in full | PunGPT2 presented as the first fully open-source Punjabi generative model suite; 35GB corpus; tokenizer covering Gurmukhi and Shahmukhi | 2025-08-03 | Pass (Punjabi as a low-resource language) | Pass |
| 5 | etheses.whiterose.ac.uk/21070/ | PhD thesis, University of York, open access | Punjabi maintenance and shift in a diaspora community was a doctoral subject as early as 1995 | 1995 | Pass (the language) | Pass |

- **Zero government / context statistics.** No PIB, TRAI, Census, MEA, India Post, drikpanchang.
- **Wikipedia:** 2 links, entity disambiguation only — `Shahmukhi` and `Gurmukhi`.
- **Competitors:** zero links, zero citations, zero borrowed framing. The competitor observations in the body
  ("one top result is an abandoned domain", "another delivers its wishes as images") are original first-hand
  findings from this session's own fetches, stated without naming or linking any of them.
- **Full text not read for sources 2 and 5** — both open access, but neither PDF extracted as readable text, so
  only landing-page metadata was read and only title-level claims are made from them. Recorded in
  `auditReport.failed`.

### Batch collision check (run before adding, `content/batches/2026-08-25-rakhi-2027/blogs/`)

Siblings present at write time: `raksha-bandhan-2027-wishes.json`, `raksha-bandhan-greetings-online-free.json`.

- No URL collision on any of the five. `arxiv.org/abs/2508.01918` is unique; the siblings use
  `2509.16932`, `2407.08172v1` and `1907.07032`.
- **`arxiv.org` is now at the domain cap: 2 sibling posts + this one = 3.** Flagged for the orchestrator —
  any later agent adding an arXiv source pushes the domain over the batch limit.
- `unicode.org`, `aclanthology.org`, `cardinalscholar.bsu.edu` and `etheses.whiterose.ac.uk` are first uses in
  this batch.
- `en.wikipedia.org/wiki/Gurmukhi` and `.../Shahmukhi` are first uses; the siblings use `Raksha_Bandhan`,
  `Sibling`, `WhatsApp`, `Hindu_calendar`, `Greeting_card`, `Freemium`, `Watermark`, `Dark_pattern`.

---

## Phase 0 note — the first-party data problem

`content/facts.md` refreshed 2026-08-25. There is **no rakhi-specific first-party data**: `rakshabandhanpages`
holds 3 documents, and rakhi templates account for 39 of 36,202 recorded views (0.1%). No rate, percentage or
median was computed from it, and the post does not claim rakhi template popularity.

Facts used, all platform-wide, led by this agent's assigned primary:

1. Median 6.9 hours between a page's first save and its last edit (n=931, `/love-gf`) — **lead number, first 150 words**
2. 51.1% of shared pages opened on a phone (18,497 of 36,202) — first 150 words
3. 99.4% of started pages are published and shared (2,956 of 2,973) — comparison table
4. 44.2% of creators password-protect before sharing (1,315 of 2,973) — downside section

This reuse is recorded as a **failure** in `auditReport.failed`, against the checklist item
"At least 3 first-party facts appear, and at least 2 are in the first 150 words", with the honest reason: the
count is met but the facts describe SubhSandesh, not Punjabi rakhi behaviour. Re-check when rakhi template usage
passes ~500 pages.

---

## Notes for the orchestrator

- **`BRIEF.md` names `/happy-rakshabandhan-to-sister` as an available template. It does not exist.**
  `TEMPLATE_LINKS` in `app/lib/prompt.ts` carries only `/happy-rakshabandhan-to-brother` (line 35). Any sibling
  agent that trusted the brief has emitted a 404 slug. This post uses only real slugs.
- `arxiv.org` is at 3/3 posts in this batch after this file.
- Word count 1,796 by plain whitespace split; the studio's `wordCount()` will read higher.

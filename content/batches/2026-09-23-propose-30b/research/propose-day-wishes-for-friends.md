# Research brief — `propose day wishes for friends`

- **Batch:** `2026-09-23-propose-30b` (wave 3)
- **Slug:** `propose-day-wishes-for-friends` — checked against Strapi
  `?filters[slug][$eq]=propose-day-wishes-for-friends` on 2026-09-23, returns
  `total: 0`, so the slug is free.
- **Secondary keyword, same page:** `propose day wishes for best friend`
- **Volume band:** 1,000–3,000 EST. Never printed on the page as a real volume.
- **Category:** `modern-romance` (verified against the live Strapi category list).
- **Date check:** `date -j` on this machine, 2026-09-23 — Propose Day **Monday 8
  February 2027**, Rose Day **Sunday 7 February 2027**, Valentine's Day **Sunday
  14 February 2027**. Valentine's week is eight dated days.

---

## Phase 0 — first-party facts used

All three are copied verbatim from `content/facts.md` (regenerated 2026-09-23).
The regenerated ranking is used, not waves 1–2's: `/apology-dashboard` is now #1.

1. `5,061 personalised pages created since 2026-03-12, across 20 page types — measured 2026-09-23`
2. `38.7% of creators password-protect their page before sharing it (1,961 of 5,061) — measured 2026-09-23`
3. `Most popular creation: apology dashboard (/apology-dashboard) — 1,347 pages, 26.6% of everything created — measured 2026-09-23`
4. `#2 page type: "I love you" page (/love-gf) — 1,173 created, 23.2% of all pages — measured 2026-09-23`
5. `#3 page type: digital bouquet (/bouquet-gf) — 1,163 created, 23.0% of all pages — measured 2026-09-23`

Facts 1 and 2 sit inside the first 150 words. Every one of them is labelled
**platform-wide across 20 page types** in the body prose, not only in the audit.
**No figure is attributed to proposal pages** — there is none, because the
read-only probe of `proposalpages` is refused by this machine's production-read
policy. The pricing block in `facts.md` is empty, so the page makes no price,
free-tier or paid-tier claim of any kind.

---

## Phase 1 — SERP, and exactly what was and was not measured

One `WebSearch` call for the exact keyword, run 2026-09-23. **The tool is
US-served.** This is therefore *not* the India SERP the page will actually
compete on, and nothing on the page describes an incumbent's current position.
The 11 India-served SERPs measured on 2026-09-16 (`content/keywords/2026-09-16-propose-100/serps.md`)
do not include this keyword.

What the measured result set contained, and nothing beyond it:

| Rank band | Result | Type | Competitor per `references/competitors.md`? |
|---|---|---|---|
| top | craftyartapp.com | card-maker wish list | adjacent builder |
| top | pinterest.com "propose day quotes best friends" | image board | no |
| top | oyehappy.com | gifting retailer blog | **yes** |
| top | giftalove.com | gifting retailer quote page | **yes** |
| top | wineandchampagnegifts.com | retailer listicle | **yes** |
| top | wishesmsg.com | wishes content farm | **yes** |
| top | wishesmagazine.com | wishes content farm | **yes** |
| top | dribbble.com | design shot | no |
| top | adobe.com/express (friendship day) | template tool | adjacent builder |

**No competitor page was fetched, quoted or paraphrased.** The only claim the
page makes about this SERP is one that the result set itself supports: it is
made of wish-list pages and gifting retailers. The page does **not** claim that
"no competitor covers X", that incumbents "still say 2025", or anything else
about page interiors that was not measured.

Format observation that *is* safe to act on: the search engine's own summary of
those pages showed the standard format is friendship-wordplay lines ("propose a
lifetime of friendship"). That is a genre observation, not a claim about a
specific page, and the post does not reference it.

---

## Phase 2 — gap and angle

**Table stakes** (present in the genre, so the page carries them): the date; a
block of copyable lines; lines addressed to a best friend specifically; a
short definition of what the day is.

**The gap.** The genre writes friendship-proposal wordplay and never addresses
the one thing that makes a person hesitate before sending: *a Propose Day
message to a friend can be read as a confession.* On 8 February the romantic
frame is supplied by the calendar, not by the sender, so even a neutral line
arrives pre-interpreted. Nobody in the genre treats that as the subject.

**Angle sentence.** Wins by being the only Propose Day wishes page organised by
how easily each line can be misread as a confession, backed by published work on
indirect speech and signal misperception, and by SubhSandesh's own platform-wide
send behaviour (5,061 pages across 20 page types, 38.7% password-protected
before sharing).

**Fan-out sub-queries** that became H2s or FAQs: what is a Propose Day wish for
a friend; propose day wishes for best friend; is it weird to send one to a
friend; how not to sound like a confession; can I send it to the group; opposite
gender friend; what if they take it the wrong way; Propose Day 2027 date and
weekday; is a proposal page appropriate for a friend.

---

## Cannibalisation — against `2026-09-17-propose-30/propose-day-wishes-in-hindi`

Read in full before drafting. Its H2/H3 map: a definition, **10 lines grouped by
recipient** (partner, spouse, friend, sibling, group, someone not told yet), a
pronoun section (तुम/तू/आप), a recipient table, a greeting-obligation section
("why a forwarded wish works for an acquaintance and fails for a partner"), and
a wrong-thing-to-send section.

| | Sibling (Hindi) | This page |
|---|---|---|
| Language | Devanagari lines + transliteration + gloss | English only |
| Grouping axis | **who receives it** (6 recipient types) | **how easily it is misread** (6 risk bands) |
| Friend coverage | one group of ten lines | the entire page, 12 lines |
| Governing idea | pronoun register decides whether the wish lands | ambiguity of a romantic-adjacent gesture between friends |
| Research lane | honorifics, (im)politeness matching, phatic greeting, Indian English address | indirect speech and plausible deniability, signal misperception, Indian platonic friendship, friendship closeness |
| Sources | arXiv honorifics, ScienceDirect (im)politeness, arXiv mobile-call reciprocity, TPLS phatic, RUJ Indian English | theses.fr EHESS, PNAS, Archives of Sexual Behavior, Behavioral Sciences, PLOS ONE — **zero overlap** |
| Templates | `/proposal`, `/love-gf` | `/proposal` (named as the wrong choice), `/apology-dashboard`, `/templates` |

No lane, line, grouping or source is reused. The sibling is linked by slug from
the body as the Hindi-language neighbour, rather than re-covered.

**Also checked against the brief's banned lanes.** Not used: greeting
obligation, affection exchange, gratitude, humour, nostalgia, responsiveness,
quotation, chronemics, choice overload, emoji, calendar, unrequited love.

---

## Phase 3 — sources

Five. Capcheck run before choosing and again before finalising. At the time of
choosing, `frontiersin.org` (4 posts) and `pmc.ncbi.nlm.nih.gov` (3 posts, which
includes `europepmc.org`) were at the 3-post cap and were avoided entirely.
None of these five URLs appears in the 194 banned wave-1/2 URLs.

| # | Source | What it actually says | Published | Test |
|---|---|---|---|---|
| 1 | `theses.fr/2025EHES0037` — Ribadeau Dumas, *"Will you do friendship with me?": platonic bonds, gender inequalities, and the transformation of friendship in urbanising India*, EHESS doctoral thesis | Mixed-method: survey of **n = 1,062** across two Indian cities (Purnea, Bihar and Margao, Goa) plus **61** in-depth interviews. Close friendship is defined as an intimate bond that is neither familial nor romantic. Patriarchal, family and community norms tend to stifle intimate friendships — women's especially — which are often perceived as frivolous, suspect or even threatening. | 2025-05-15 (defence) | subject ✓ swap ✓ scholarly ✓ |
| 2 | `pnas.org/doi/10.1073/pnas.0707192105` — Pinker, Nowak & Lee, *The logic of indirect speech*, PNAS | People insinuate intent indirectly rather than stating it; indirectness buys **plausible deniability**, and the **emotional costs of a mismatch in the assumed relationship type** can create a need for deniability and select for indirectness even where there are no tangible costs. | 2008-01-22 | subject ✓ swap ✓ peer-reviewed ✓ |
| 3 | `link.springer.com/article/10.1007/s10508-021-02017-5` — *The Role of Emotion Projection, Sexual Desire, and Self-Rated Attractiveness in the Sexual Overperception Bias*, Archives of Sexual Behavior (CC BY) | 67 participants, **277 speed-dates**. Attraction-detection accuracy was reliably predicted by **projection of one's own interest**, in combination with participant sex. | 2021-08 | subject ✓ swap ✓ peer-reviewed ✓ |
| 4 | `mdpi.com/2076-328X/15/8/1101` — *The Relationship Between Men's Self-Perceived Attractiveness and Ratings of Women's Sexual Intent*, Behavioral Sciences (CC BY) | **N = 180** heterosexual men rated a woman's **ambiguous** behaviour as showing greater sexual intent when **they themselves** were the recipient of it rather than another man. | 2025-08-14 | subject ✓ swap ✓ peer-reviewed ✓ |
| 5 | `journals.plos.org/plosone/article?id=10.1371/journal.pone.0305834` — *The American Friendship Project*, PLOS ONE | Two national US adult samples (2022, 2023) plus college students. Over **75%** were satisfied with the number of friends they had, but over **40%** felt they were **not as close to their friends as they would like**. | 2024-07-30 | subject ✓ swap ✓ peer-reviewed ✓ |

**Zero generic context statistics.** No PIB, TRAI, Census or MEA figure is used.
**Zero Wikipedia body links.** Wikipedia and Wikidata appear only as verified
`sameAs` targets in `structuredData`, which does not count against the body
budget.

### Read-access disclosure

- Sources 2 and 4 returned **HTTP 403** to this machine (pnas.org and mdpi.com
  both bot-block). Only the **publisher abstract**, retrieved through the
  Crossref metadata API, was read. Only what those abstracts state is cited.
- Source 1 is a thesis record page; the **record abstract** was read in full, the
  thesis PDF was not. Only the abstract is cited.
- Sources 3 and 5 returned HTTP 200. Source 3's article page renders its body
  through JavaScript, so its **published abstract** (Crossref) is what was read.
- No figure, chart, table or substantial passage is reproduced from any source.

### Search terms tried

`platonic friendship affection expression study`, `cross-sex friendship
ambiguity research`, `friendship maintenance behaviours study`,
`misinterpretation of friendly signals research`, `flirting ambiguity perception
study`, `cross-sex friendship relational maintenance behaviours`, `expressing
affection to friends risk study`, `friendship maintenance social media
communication study`, `sexual overperception bias misperception friendliness`,
plus Crossref licence-filtered queries on `friendship maintenance behaviour`,
`opposite-sex friendship boundary`, `friendship expression of affection
ambiguity`.

**A real finding worth recording:** the classic cross-sex friendship literature
that would have fitted best — O'Meara's *Cross-sex friendship: Four basic
challenges of an ignored relationship* (Sex Roles, 1989, `10.1007/bf00289102`) —
carries **no abstract in Crossref and no open version**, and the friendship
*maintenance* papers (Human Communication Research 2011 `10.1111/j.1468-2958.2011.01411.x`;
Communication Research Reports 2017 `10.1080/08824096.2017.1361393`) are likewise
abstract-less and paywalled. None was cited, because nothing in them was read.
The misperception half of the lane is far better served by open access than the
maintenance half.

---

## Phase 4–5 — structure and links

Body H2s, in order:

1. `## What a Propose Day wish for a friend actually is` — definition block.
2. `## 12 Propose Day wishes for friends, sorted by how easily each one is misread`
   — six H3 groups, two lines each, four fields per H3 **in fixed order**: the
   lines / who it fits / misread risk / skip it when.
3. `## Why a friendly line gets read as a confession` — the research lane.
4. `## Which way of sending it carries which misread risk` — comparison table,
   four rows, one column first-party.
5. `## Propose Day 2027 is a working Monday, and that moves the timing`
6. `## Why the proposal template is the wrong thing to send a friend`
   — the objection block, and where SubhSandesh loses.
7. `## Sources`

**All twelve lines are original.** None is copied, adapted or translated from any
competitor page, and none reproduces lyrics, film dialogue or copyrighted poetry.

**Internal links — 3, relative paths, all in `TEMPLATE_LINKS`:**

- `/proposal` — mandatory, and named in prose as the **wrong** template for a
  friend. It is a marriage-proposal scrapbook ending in a YES button; sending it
  to a friend manufactures exactly the misreading the page exists to prevent.
- `/apology-dashboard` — the honest closest alternative, and the caveat is
  stated: its own description is the only one on the platform written "for
  anyone (partner, friend, family)", but it is an **apology** page, so it fits
  only if you actually owe the friend one.
- `/templates` — to browse, with the page's real verdict attached: for a platonic
  friend, **no romance template belongs**, and a plain message is the right
  answer.

The sibling `propose-day-wishes-in-hindi` is referenced by slug in the body.

`structuredData`: an `ItemList` mirroring the six H3s in order, and an
`@id`-matched enrichment block on `<canonicalURL>#post` carrying `citation`
(one-to-one with `batchMeta.sources`), `about` and `mentions`. Every `sameAs`
was verified against the Wikipedia API on 2026-09-23: Valentine's Day → Q37587,
Platonic love → Q209041, Friendship → Q491, Valentine's Week → Q138309865.

---

## Honest position on this keyword

The 100-keyword run flagged this as **platonic intent — the weakest conversion
in the whole set**. Someone searching for a line to send a friend is not
somewhere on the path to building a proposal page; they want text, and they
leave with text. The page is a visibility asset, judged on impressions and on
being the one result that answers the question the searcher is too embarrassed
to type. It is not a converting page and the post does not pretend it is. The
measured result set is dominated by gifting retailers and wishes farms whose
domain authority is far above ours; a realistic target is the second half of page
one, not the top three, and that will take months.

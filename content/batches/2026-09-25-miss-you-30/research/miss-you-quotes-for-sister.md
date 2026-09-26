# Research — `miss you quotes for sister`

Batch `2026-09-25-miss-you-30`, wave 2, row 8. Slug `miss-you-quotes-for-sister`.
Written 2026-09-25.

## Phase 0 — first-party data

From `content/batches/2026-09-25-miss-you-30/facts-snapshot.md`, `## Miss-you segment
— the /missyou-gf template` block (measured 2026-09-25, n = 214, template live
2026-07-28). The three mandatory caveats travel with every line used: the city,
background-music and "together since" fields are **pickers with defaults** and their
fill rates are not sender choices; `viewCount` is page views, not unique visitors;
n = 214 over two months supports no seasonal or festival claim.

The fourth disclosure, specific to this post: **the database records which template was
opened, never who received it.** Nothing in the 214 pages says a single one went to a
sister. Every figure in this post is about the miss-you segment as a whole. In a post
about a sibling that is not an optional footnote — a reader could otherwise take "43.5%
password-protect" as "people hide messages from their sisters", which the data does not
say.

Lines used (byte-verbatim from the snapshot):

- 43.5% password-protect (93 of 214) against 38.5% platform-wide — most private segment measured
- Median miss-you letter length 88 words; longest 1,024
- 86.4% carry at least one written memory (185 of 214), 4.5 on average, 12 at most
- 92.1% carry at least one "open when" letter (197 of 214), 3.2 on average, 6 at most
- 28.0% set a reunion date for the countdown (60 of 214)
- 13.6% record a voice note (29 of 214)
- 1,434 hug taps across 138 of 214 pages (64.5% received at least one), 512 on one page
- 214 pages since 2026-07-28, 4.1% of 5,221 pages across 44 collections

`## Pricing (fill in by hand)` is EMPTY. No price, no "free", no cost language anywhere.

## Phase 1 — SERP

Genuine India SERP, DDG `kl=in-en`, recorded in `SERPS-WAVE2.md`. Eight editorial
results, no vendor pages, no AI Overview captured by the probe.

| # | Page | What it actually is | Format | Situation coverage |
|---|---|---|---|---|
| 1 | parenting.firstcry.com — heartfelt miss you quotes/messages for sister | Parenting-portal list, quotes and messages merged under one heading | Tone buckets | Generic distance only |
| 2 | wishes.com.in — heartfelt miss you messages for your sister | Wishes farm | Tone buckets | Generic |
| 3 | quotewords.com — emotional miss you sister quotes | Quote farm | Undifferentiated list | None |
| 4 | littlenivi.com — i miss you my sister messages and quotes | Farm, title merges both formats | Undifferentiated list | None |
| 5 | wishesmsg.com — miss you messages for sister | Wishes farm | Tone buckets | Generic |
| 6 | tinypositive.com — i miss you my sister messages and quotes | Near-identical to #4 | Undifferentiated list | None |
| 7 | **subhsandesh.in/blog/miss-you-message-for-sister** | **Ours** | Tone buckets + how-to | Moved cities, studied abroad, after a fight, new mother |
| 8 | boomsumo.com — beautiful i miss you my sister messages and quotes | Farm | Undifferentiated list | None |

**The format split is weaker here than the batch brief assumes.** Four of the eight
results (`littlenivi`, `tinypositive`, `boomsumo`, and firstcry at #1) put *"messages
and quotes"* in the same title, and our own **messages** page already ranks #7 for the
**quotes** query. On this SERP, Google is not treating quotes and messages as separate
intents. That is measured, not assumed, and it is the single most important finding
here — it means "we are the quotes one" is **not** on its own a sufficient
differentiator.

What every one of the eight does share: a long undifferentiated list sorted by tone
(short / funny / emotional / long-distance), no situation logic, no data, no sources, no
statement of when a line is the wrong thing to send.

## Phase 1b — the cannibalisation decision (BINDING, resolved before drafting)

`https://subhsandesh.in/blog/miss-you-message-for-sister` fetched and indexed
2026-09-25. What it actually covers:

- H2 "When to send a 'miss you' message to your sister" → moved cities, studying abroad,
  not seen since a family event, a shared memory, after a small argument
- H2 "How to choose the right tone" → match tone to situation
- H2 "75+ Miss You Messages for Sister" with **14 H3 sub-buckets**: short and sweet;
  warm and nostalgic (for sisters far away); funny and teasing; long-distance and
  heartfelt; after a fight; supportive and gentle; poetic and reflective; for younger or
  older sisters; texts that invite connection; for big milestones; messages you can pair
  with a photo; closing-strong lines; two-line combos; creative prompts to personalise
- H2 "Quick 5-step plan: make one message unmistakably yours"
- H2 "How to send this message as a private surprise page", with a 5-step build flow
- ~20 FAQs, every one of the form "what is a miss you message for a sister who ___"

It is a **compose-and-send** page. It hands you a line and then teaches you to rewrite
it into your own message, and its centre of gravity is the 5-step personalisation plan
and the build flow.

What it does **not** contain, checked by search against the indexed copy:

- No mention of a sister who has **married and moved into her husband's family**. The
  closest it gets is "moved cities or studying abroad" and "just become a mom". The
  single most common structural reason an Indian adult misses a sister is absent.
- No mention of **Raksha Bandhan**, rakhi, or any festival.
- No first-party data, no sources, no research, no dates.
- No discussion of **register** — nowhere does it warn that a miss-you line written for
  a partner misfires on a sibling.
- No statement of when a line is the wrong thing to send.

**Decision: DIFFERENTIATE, and not on the word "quotes".** The format split is real but,
as measured above, too weak on this SERP to carry the post by itself. The defensible
split is **selection logic**: the live page is a tone-sorted compose-and-send library
for a sister who moved away, while this post sorts a much smaller set of lines by the
*structural reason* she is away — married into another household, relocated for work,
or not speaking — and says where each line misfires. The live page is cross-linked in
the body as the destination for the reader who wants to write their own message, so the
two reinforce rather than compete.

**One-sentence differentiation for the audit:** *The live #7 page is a tone-sorted
library of 75+ messages you compose and send, and this post is a short set of borrowable
lines sorted by the structural reason a sister is away — married into another household,
relocated for work, or not speaking — with the register warning and the misfire note
none of the eight SERP results carry.*

Slug collision check: `miss-you-quotes-for-sister` returns `total: 0` from Strapi. Free.

## Phase 1c — sibling check inside this batch

`blogs/` at time of writing holds 24 wave-1 files and none of the nine wave-2
`miss you quotes for <person>` rows. The one that matters:

- **`miss-you-quotes.json`** (wave 1, live in this batch) is built entirely on
  **verified literary provenance** — ten quotes with book, year and check: Shakespeare
  Sonnets 97 and 39, Tennyson *In Memoriam* XXVII, Lamartine, Tagore *The Gardener*,
  Dickinson, Barrett Browning, Dickens, Kalidasa's *Meghaduta*. It also carries "the
  five quotes I cut and what was wrong with each".

Consequence: **the attributed-literary-quote angle is taken.** This post must not print
attributed lines from published works or it becomes a recipient-flavoured reskin of a
sibling in the same batch. It uses unattributed short lines and earns its place on
selection logic, not provenance. No wave-2 sibling's primary keyword is used as a
secondary here; the H2s name only the sister.

## Phase 2 — gap and fan-out sub-queries

Nobody on the SERP answers:

1. Which line do I send a sister who got married and now lives with her in-laws?
2. Why does a "miss you" line I liked sound wrong when I send it to my sister?
3. What do I send a sister I'm not on speaking terms with?
4. How much should I write around the quote?
5. Is a quote the wrong thing to send here?

These become the H2s.

## Phase 3 — sources

Route: `findpapers.mjs` (Crossref + Europe PMC), then the Europe PMC REST `resultType=core`
endpoint for abstracts. **Every source below is an ABSTRACT-AND-METADATA read. No full
text and no PDF was parsed** — PDFs do not parse in this environment, and that is
recorded in the audit as well as here.

Searched: `sibling relationship quality adulthood`, `sister relationship emotional
closeness`, `marriage migration women India natal family`, `separation distress
attachment adults`.

| Source | Journal (the capped entity) | Date | What the abstract actually says |
|---|---|---|---|
| europepmc.org/article/PMC/PMC13242563 | Journal of Public Health Research (SAGE) | 2026-04-01 | Scoping review, 32 studies, eight databases, last search Nov 2025. Patrilocality = post-marital residence in the husband's natal household, "common across South Asia", shapes women's autonomy, mobility and decision-making power. |
| europepmc.org/article/PMC/PMC13439929 | Journals of Gerontology Series B (Oxford) | 2026-08-01 | Generational Transmissions in Finland; siblings give and receive help "even across long distances"; proximity strengthens exchange but does not determine it; a 10 km threshold approximates help exchange. |
| europepmc.org/article/PMC/PMC13469736 | Family Process (Wiley) | 2026-09-01 | Meta-synthesis of 13 qualitative studies of mixed-status and transnational families; four themes including emotional burden and relational strain, and sibling solidarity and adaptation. |
| europepmc.org/article/PMC/PMC13095974 | Current Psychology (Springer) | 2026-04-20 | Two-cohort longitudinal sample, N = 189, mean age 20.89; sibling relationships act as "both risk and resiliency factors"; sibling relationship quality moderated intolerance-of-uncertainty effects. |
| europepmc.org/article/PMC/PMC13485386 | Psychiatry Investigation | 2026-08-04 | Cross-sectional, 200 first-year university students; 47.5% screened positive for both childhood and adult separation anxiety symptoms, 13.5% adult only, 24% screen-negative. Symptom-level, authors call for longitudinal confirmation. |

Five sources, five different journals, none at the batch cap. Host `europepmc.org` is a
cap-EXEMPT repository under the 2026-09-25 amendment; the cap is applied to the journal
named in each row above. `journals.plos.org` is at the cap of 3 and was avoided;
`frontiersin.org` had one slot left and was avoided as a race risk; `doi.org` is at 3.

Zero generic context statistics — no PIB, TRAI, Census or MEA figure is used, so the
"at most 1" rule is satisfied at 0. Zero competitor links. Zero Wikipedia citations
(Wikipedia appears only as `sameAs` entity identifiers in structured data).

**Swap test:** the patrilocality review cannot sit in any other row of this batch — it
is about post-marital residence in South Asia and only this row has a married sister in
it. The Gerontology and Family Process papers are about siblings specifically, which no
language row or romantic row can use.

**What the sources do NOT support, and is therefore not claimed:** none of them studies
Indian brothers and sisters missing each other, none measures message-sending, and the
separation-anxiety study is on Turkish first-year students, not Indian adults. The post
states each limit where the source is used.

## Phase 5 — links and templates

- `/missyou-gf` — mandatory batch-wide. Described honestly for a sibling recipient: it
  is built as an "I miss you" page for a partner, so the romantic furniture (the
  "together since" date, the couple framing) is the part a sibling sender has to leave
  alone. That is a genuine limitation and it is stated in the body.
- `/catch` — the genuine alternative from `oneOfLinks`. A letter that falls from the sky
  one line at a time, caught with the recipient's own face, nothing ever locked. It suits
  a sister better than the miss-you page because there is no couple framing in it at all
  and no field that has to be ignored, and because it delivers a line at a time, which is
  the shape of a quote.
- **`/rewind` was dropped from the assigned three.** Its published description ends the
  story on "which couple you actually are". That is a couple verdict, and there is no
  reading of it that is right for a sister. Using it would be exactly the noun-swap error
  the wave brief warns about. Recorded as a deliberate deviation in the audit.
- Cross-link out: `/blog/miss-you-message-for-sister` (live, id 1298, confirmed in
  Strapi) — the cannibalisation resolution, placed in the final H2.

`categorySlug`: `miss-you-across-miles`, confirmed against the live Strapi category
list. Raksha Bandhan is mentioned once as the occasion that sanctions the sentiment and
explicitly named as *not* this post's subject, so the festival-goes-to-`indian-festivals`
rule is not triggered — the festival is incidental.

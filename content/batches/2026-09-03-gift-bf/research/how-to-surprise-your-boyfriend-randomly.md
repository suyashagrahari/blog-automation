# Research brief — `how to surprise your boyfriend randomly`

- **Slug:** `how-to-surprise-your-boyfriend-randomly` (checked against Strapi 2026-09-03 — `total: 0`, free)
- **Category:** `modern-romance` (confirmed live in the Strapi categories list, 2026-09-03)
- **Templates:** `/love-gf`, `/darling`, `/missyou-gf`
- **Words in `contentMarkdown`:** 1,796 (plain whitespace split, FAQs excluded)
- **Subject assigned:** timing and unpredictability. The twin row (`how to surprise
  my boyfriend for no reason`) owns the absence of an occasion and the reciprocity
  trap. Neither appears here — verified by grep for `reciproc`, `no reason`,
  `obligat`, `owe`, `guilt`: zero hits in the body.

---

## Phase 1 — SERP, as measured (not re-derived)

Taken from `content/keywords/2026-09-03-gift-gf-bf/serps.md`, row `how to surprise
your boyfriend randomly`, real Google `gl=in&hl=en`, 2026-09-03:

| | Hosts |
|---|---|
| **Weak (4/8)** | `reddit.com`, `pinterest.com`, `youtube.com`, `quora.com` |
| **Strong (4)** | `wikihow.com`, `munchiesandmunchkins.com`, `stylecraze.com`, `anncheshire.co.nz` |
| **AI Overview** | Fires |

### The pages I could actually open

| Page | Words (raw) | Shape | Where the answer is | Data cited | Timing covered? |
|---|---|---|---|---|---|
| `wikihow.com/Surprise-Your-Boyfriend` — "30 Ways to Surprise Your Boyfriend That Are Creative & Fun" | ~5,190 | Numbered idea list under a "Quick Guide" box; steps run *Pay attention to what he likes → Make a list → Give him a gift for no reason → Buy him tickets → Spoil him for a day → …* | Quick-guide box near the top, but it is a list of ideas, not an answer to "randomly" | None | **No.** Every item is a *what*, never a *when* |
| `stylecraze.com/articles/surprise-ideas-for-boyfriend/` — "21 Ways To Surprise Your Boyfriend" | ~5,180 | Three buckets (Adventure / Romantic / Creative and Thoughtful) over 21 numbered ideas — treasure hunt, notes on the mirror, tidy his apartment, book a hotel room | Buried behind the bucket headings | None | **No** |
| `anncheshire.co.nz` | ~730 | **Not editorial at all** — it is a NZ florist storefront (Shop / Popular Now / Wedding Flowers). No article on this keyword found; `/blog` and `/blogs/news` both 404 | n/a | n/a | n/a |
| `munchiesandmunchkins.com` | — | **Unreachable from this environment** (DNS/fetch failure on the root, `/sitemap_index.xml` and `?s=` search). Not analysed. Recorded as a gap in this brief rather than guessed at | — | — | — |

Two notes for the brief author, since it asked to be checked:

1. **`anncheshire.co.nz` is classified "strong" but is a flower shop, not editorial.**
   Same failure mode the brief flagged from the bouquet wave ("a competitor's ranking
   page was strong editorial — it was a product category page with 11 words of
   prose"). Two of the four "strong" hosts on this SERP are therefore not editorial
   competition: one is a storefront and one could not be reached.
2. **The brief's warning not to rely on "givers systematically mispredict what
   recipients want" was correct to be cautious.** I did not need it for this angle
   and did not use it. No claim in this post rests on it.

Neither `wikihow` nor `stylecraze` is linked or cited. Both are read-only research
under `references/competitors.md` (wishes/ideas content farms competing for the exact
long-tail).

---

## Phase 2 — Gap analysis

**Table stakes** (present on both openable pages, so the post has to acknowledge
them): concrete idea suggestions; something for the same-city case; something for
the low-effort case; an explicit "what if he doesn't like surprises" answer.

**The gap.** Neither page treats the word in the query. The keyword is
*"randomly"* — an adverb about **scheduling** — and both pages answer a different
question ("what should I give him"). Nobody on page 1 addresses:

- why a gesture he can forecast stops producing a response at all;
- how quickly a repeated gesture decays, and what restores it;
- how to be unpredictable when the two of you share a routine and a calendar;
- how to vary without escalating into a magnitude race.

**Stale data.** Neither page cites a statistic of any kind, so there is nothing to
supersede — the win is being the first page on the SERP with a number in it.

**Fan-out sub-queries → H2 map.** These are what an answer engine would decompose
the query into, and each became a heading:

| Sub-query | H2 |
|---|---|
| what counts as a "random" surprise | `## What "randomly" actually means here` |
| why does he not react to the usual gesture any more | `## Why the Friday-evening gesture stops registering` |
| how often can I repeat a surprise before it stops working | `## How fast a repeated gesture decays, and what puts it back` |
| how do I surprise him when we both have routines | `## Five ways to randomise the timing when you both keep routines` |
| which method needs the least lead time | `## The five tactics compared` |
| how do I avoid having to top myself every time | `## Varying intensity without starting an escalation` |
| when is a random surprise a bad idea | `## When random timing is the wrong choice` |

**Angle (one sentence).** Wins by being the only post in a SERP of idea listicles
that treats surprising a partner as a scheduling problem rather than a shopping one
— dopamine neurons stay at baseline for a fully predicted reward, and a 25-person
fMRI study found reward-region activity greatest when delivery was unpredictable and
uncorrelated with stated preference — answered with five timing mechanics and
SubhSandesh's own 1.21 pages per creator across 2,829 creators and 12.3 views per
created page.

**Distinctness check against siblings** (run against every file in
`content/batches/2026-09-03-gift-bf/blogs/` after drafting): no H2 shared with any
sibling except `## Sources`, which every post in the batch carries by design. No
source URL shared with any sibling. The twin's H2s — *what a gift with no occasion
actually signals*, *the reciprocity trap*, *occasion-bound versus unprompted* — do
not overlap any of mine.

---

## Phase 3 — Sources

Five sources, five distinct domains, **none of them used by any sibling in this
batch** and none in the 42-URL spent ledger. All five are peer-reviewed and
open-access; four are CC BY or CC BY-NC.

| # | Source | What it supports | Verified how |
|---|---|---|---|
| 1 | Schultz, *Dopamine reward prediction error coding*, **Dialogues in Clinical Neuroscience**, Mar 2016 — `europepmc.org/articles/PMC4826767` | Dopamine neurons "remain at baseline activity for fully predicted rewards" | Europe PMC REST `resultType=core` record (abstract, license `cc by-nc-nd`). **Abstract only — the quoted phrase is in the abstract; the full text was not read.** |
| 2 | Berns, McClure, Pagnoni & Montague, *Predictability Modulates Human Brain Response to Reward*, **Journal of Neuroscience** 21(8), 15 Apr 2001 — `jneurosci.org/content/21/8/2793` | 25 adults, fMRI, juice/water: accumbens + medial OFC activity "greatest when the stimuli were unpredictable"; stated preference not correlated with reward-region activity | **Full text read** at the PMC mirror `PMC6762527` (Methods: "Twenty-five normal adults … Emory University"). `jneurosci.org` itself returns a Cloudflare wall to automated fetches. |
| 3 | Kieling, Brei & Vieira, *The Influence of Negative Surprise on Hedonic Adaptation*, **Brazilian Business Review** 13(3):111–132, 1 May 2016 — `bbronline.com.br/index.php/bbr/article/view/143` | Definition of hedonic adaptation; across two experiments negative surprise made adaptation "happen more intensively and faster as time goes by" | Article page fetched directly (200), CC BY 4.0, publication date read off the page. **Abstract only — the PDF was not read.** |
| 4 | Gladstone, Ruberton, Margolis & Lyubomirsky, *Does variety in hedonic spending improve happiness?*, **BMC Psychology**, 26 Feb 2024 — `bmcpsychology.biomedcentral.com/articles/10.1186/s40359-024-01599-8` | Four studies, total N = 2,920; variety uniquely associated with well-being controlling for total; the real-spending experiment gap was "slightly larger" and "not reliably stronger than … varied utilitarian purchases" | **Full text read** at the PMC mirror `PMC10897990` (CC BY) plus the DOAJ article record. The cited BMC URL 302s to a link.springer.com bot wall from here. |
| 5 | Aron & Tomlinson, *Self-Expansion Activities with a Partner as One Path to Well-Being*, **Behavioral Sciences** 16(5):700, 4 May 2026 — `mdpi.com/2076-328X/16/5/700` | Self-expansion excitement "slows over time, and thus relationships can become dull"; novel and challenging shared activities are the route back | **Full text read** at the PMC mirror `PMC13203665` (CC BY). `mdpi.com` returns 403 to automated fetches. |

**Why the citation URLs are publisher pages and not the PMC copies I read.** By the
time this post was assembled, `pmc.ncbi.nlm.nih.gov` already appeared in three other
posts in this batch (`anniversary-gift-for-boyfriend-unique`,
`how-to-surprise-my-girlfriend-with-flowers`,
`romantic-gifts-for-boyfriend-long-distance`), which is the domain cap. Citing PMC
would have made it four. The publisher pages are the canonical open-access records
of the same CC BY / CC BY-NC text; the mirror I actually read is named above for
every one of them, and the checklist item on outbound-link fetching is recorded as
**failed** in the audit rather than quietly passed.

**Zero context statistics** (no PIB / TRAI / Census / MEA) and **zero Wikipedia body
links**. The four Wikipedia entities used in `structuredData` — Surprise (emotion)
`Q333173`, Hedonic treadmill `Q5697619`, Reward system `Q670713`, Habituation
`Q1136816`, Self-expansion model `Q7447965`, Interpersonal relationship `Q223642` —
were all confirmed against the MediaWiki API with `prop=pageprops&ppprop=wikibase_item`
on 2026-09-03; none returned `missing`.

### Searches that did not produce a usable source

Recorded because the brief asks for it:

- `hedonic adaptation positive events variety` / `variety prevents adaptation
  happiness` — OpenAlex returned HTTP 429 on every attempt; Semantic Scholar 429 after
  one query. Sheldon & Lyubomirsky's 2012 *Challenge of Staying Happier* (the canonical
  hedonic-adaptation-prevention paper) has **no open-access copy** — the author-site PDF
  path 404s and the only OA link Semantic Scholar offers is on `escholarship.org`, which
  a sibling has already spent. Replaced by source 4, which tests the same variety
  mechanism and is CC BY.
- `savouring anticipation positive affect` and `diurnal variation positive affect`
  on Europe PMC — nothing on-subject; results were clinical mood-rhythm studies.
- `"relational boredom"` — the on-point papers (Harasymchuk & Fehr 2013;
  Harasymchuk et al. 2017; Aron et al. 2000) are all closed access on `sagepub` /
  `psycnet`. Covered instead through Aron's own 2026 open-access review, which cites them.
- `givers mispredict what recipients want` — **deliberately not used.** A sibling had
  already established that Gino & Flynn 2011, Galak/Givi/Williams 2016 and Yang &
  Urminsky 2018 are closed and unverifiable here. Nothing in this post depends on it.

---

## First-party facts used

Nine lines from `content/facts.md`, quoted byte-verbatim into
`batchMeta.factsUsed` (verified by substring match against the file, straight
apostrophes intact). **Primary fact chosen deliberately away from the neighbours':**
most siblings lead on the 7.2-hour edit gap or the 50.2% mobile share. This post
leads on **1.21 pages per registered creator across 2,829 creators**, because "almost
nobody makes a second one" is the same finding as "the second gesture is usually a
copy of the first" — which is the post's thesis. Three facts sit inside the first 150
words (3,425 pages / 15 page types, 1.21 pages per creator, 12.3 views per page).

**Not claimed anywhere:** any recipient gender. `facts.md` records none, so every
number in the post describes page *creation* and *views*, and the prose says
"partner". No price, no cost, no free tier, no plan — the Pricing block in
`facts.md` is empty and the post contains no monetary term of any kind.

---

## Audit summary

- `passed` 46, `failed` 4, sum 50, intersection empty (asserted programmatically).
- Failures recorded, not fixed: paragraph length inside the five H3 field-blocks;
  stop words retained in the assigned exact-match slug; three of five citation URLs
  verified at their PMC mirror rather than at the cited URL; Aron & Tomlinson fails
  the swap test and is kept with the reason stated.

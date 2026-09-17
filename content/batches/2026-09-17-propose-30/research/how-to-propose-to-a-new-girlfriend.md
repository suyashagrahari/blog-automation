# Research brief — `how to propose to a new girlfriend`

- **Batch:** `2026-09-17-propose-30` (wave 2 on the propose/proposal territory)
- **Slug:** `how-to-propose-to-a-new-girlfriend` — checked against Strapi
  `?filters[slug][$eq]=how-to-propose-to-a-new-girlfriend`, returned `data: []`, so it is free.
- **Category:** `modern-romance` — confirmed live in the Strapi categories list.
- **Volume:** no tool data. Treated as a 300–1,000 estimated band and never printed as a real figure.
- **Searcher:** already in a relationship, and it is new. The query is about the *next*
  escalation — exclusivity, "I love you", going public — not about acquiring a girlfriend and
  not about marriage. The marriage keyword is a sibling agent's.

---

## Phase 1 — SERP analysis

`WebSearch` on the exact keyword returns an almost entirely **marriage-proposal** SERP. There
is no AI Overview on the exact phrase; the featured content is engagement-ring and
proposal-planner material. A second search on the intent behind the keyword
(`how to propose girlfriend already dating make it official ask to be exclusive`) surfaces a
different, non-overlapping set — "ask a girl to be your girlfriend" listicles aimed at people
who are *not yet* dating.

**Neither set is written for this searcher.** That is the whole opportunity.

| # | Page | Words / structure | Where the answer lands | Data cited (and its date) | Format | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|
| 1 | marriage.com, "20 Ways on How to Propose to a Girl" | ~2,000; H1 + 20 numbered H2/H3 ideas | Buried — a listicle, no answer paragraph | None dated; generic expert framing | Long list, related-post rails, byline | Third person, hedged, advice-column | `how to propose to a girl` (marriage intent) |
| 2 | momjunction.com, "27 Romantic Ways To Ask A Girl To Be Your Girlfriend" | ~4,000; 27 H3 ideas + FAQ block | Buried under the list | Cites a USU Extension page on play in couple relationships; no date given on-page | Numbered list, FAQ, references, byline | Third person, warm, hedged | `ask a girl to be your girlfriend` — **pre**-relationship |
| 3 | theknot.com, "95 Marriage Proposal Ideas" | Long listicle (HTTP 403 to the fetcher; assessed from SERP metadata and its own Real Weddings Study, quoted second-hand elsewhere) | N/A | Real Weddings Study (annual) | Listicle | Editorial | Engagement/wedding funnel |
| 4 | myplannerfriend.com, "How to Propose to My Girlfriend: 10 Foolproof Steps" | ~2,500; 10 numbered steps + FAQ | Answer delayed by an intro | "58% of proposers feel pressure to plan a highly unique proposal" — sourced to The Knot's Real Weddings Study, no year printed on the page | Steps, FAQ, in-article TOC, byline, author bio | First person, sells proposal planning | Marriage proposal planning services |
| 5 | bondlyfe.com, "How to Propose to a Girl (2026)" | ~3,000; answer-first; recently refreshed | First paragraph | **Zero sources cited** | Answer-first blocks, FAQ | Direct, confident, second person | The same commercial job SubhSandesh does — **competitor, per the BRIEF** |

Competitors were read for gap analysis only. None is cited, linked or mirrored.

## Phase 2 — Gap analysis

**Table stakes (all five carry them, so the post must not omit them):**
consider her personality; pick a meaningful, private-or-public setting deliberately; be clear
and ask an actual question; keep the words short; do not make a wall of text; check the
interest is mutual first.

**The gap — four things nobody on this SERP does:**

1. **Nobody separates the asks.** "Proposing" to a new girlfriend can mean at least four
   different things — exclusivity, "I love you", going public, and meeting family. Every page
   collapses them into "the proposal", which is why a reader in a six-week-old relationship
   ends up reading about ring budgets.
2. **Nobody gives timing guidance grounded in anything.** momjunction's "eight weeks is
   usually a reasonable timeline" is asserted, not sourced. There is real longitudinal work on
   when relationship ambiguity starts costing you, and none of these pages uses it.
3. **Nobody names the cost of *not* asking.** Every page frames the risk as "asking badly".
   The measured risk in the literature is avoidance.
4. **Nobody admits the reader might be aiming too high.** Every competitor's commercial
   incentive is to sell the bigger gesture. A post that says "the marriage template is
   probably the wrong one for you, here is the smaller one" is unique on this SERP.

**Stale data:** the one hard statistic in the set (58% of proposers feeling pressure) comes
from an annual wedding-industry study, is undated on the page that quotes it, and is about
engagements — the wrong population for this query.

**Fan-out sub-queries → H2s:**
what does "propose" even mean when we are already dating · which ask do I actually owe her ·
how long should I wait · what do I say · should it be private or on Instagram · what if she
says not yet · is a page better than saying it in person.

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that treats
"propose to a new girlfriend" as a choice between four *different* escalations rather than one
marriage proposal, dates each one against relationship-escalation research, and then argues
against its own biggest template using SubhSandesh's platform-wide page mix.

## Phase 3 — Sources

Lane held: early-stage relationship escalation and defining-the-relationship. No
first-disclosure-anxiety, marriage-readiness, novelty/memory, CMC-channel, post-conflict or
long-distance literature was used.

| Source | What it actually says | Read | Test |
|---|---|---|---|
| Clifford, Vennum, Busk & Fincham (2017), *Personal Relationships* 24, 223–238 — `fincham.info/papers/2017-slidvsdecide.pdf` | Longitudinal, 3 waves 7 weeks apart, N = 244 emerging adults in relationships (drawn from 979 undergraduates). "Relationship talk avoidance" — literally scored on the item *"I try to avoid having 'the talk' (DTR, 'defining the relationship')"* — was positively associated with relationship uncertainty 7 weeks **earlier**, and negatively related to dedication and satisfaction 7 weeks **later**, through decreased constructive communication. | Full text | Subject ✓ Peer-reviewed ✓ Open ✓ |
| Solomon, Knobloch, Theiss & McLaren (2016), *Human Communication Research*, doi 10.1111/hcre.12091 — author copy at `jentheiss.com` | Relational turbulence theory. The transition from casual dating to serious involvement corresponds with relational uncertainty and partner interference. Relational uncertainty is an umbrella for three distinct sources: **self** uncertainty, **partner** uncertainty and **relationship** uncertainty. People under relational uncertainty "encounter more severe face threats, have difficulty planning messages, and are reluctant to communicate directly about sensitive topics." | Full text | Subject ✓ Peer-reviewed ✓ Open ✓ |
| Darak, Parchure, Darak & Kulkarni (2022), *Sexual and Reproductive Health Matters*, PMC8865127 | 1,240 never-married 20–29-year-olds in Pune, relationship-history calendar. 76% had at least one relationship (84% of women, 70% of men); median age at first relationship 17 for women, 18 for men. Four trajectories: Commitment–No sex (N = 187), Commitment–Sex–Some exploration (N = 189), No commitment–Exploration (N = 281), No relationship (N = 583). Emotional involvement, commitment and physical intimacy differed significantly by relationship type. | Full text | Subject ✓ Peer-reviewed ✓ Open ✓ India-specific |
| Harrison & Shortall (2011), *The Journal of Social Psychology* 151(6), 727–736 — PubMed 22208110 | 172 college students. Both sexes *believed* women fall in love and say "I love you" first; men reported falling in love earlier and expressing it earlier. No sex differences on general love-and-romance attitudes. | **Abstract only** — full text paywalled at Taylor & Francis. Recorded in the audit. | Subject ✓ Peer-reviewed ✓ |
| Navarro, Larrañaga, Yubero & Víllora (2021), *Escritos de Psicología* 13(2), 46–59, doi 10.24310/espsiescpsi.v13i2.9960 | Spanish adults 18–40. About 2 in 10 had both experienced and initiated ghosting; slightly more than 3 in 10 had experienced or initiated **breadcrumbing** in the previous 12 months. Half the sample did not know either term. Dating-app use, more short-term relationships and online surveillance all raised the odds. | Full text | Subject ✓ Peer-reviewed ✓ Open ✓ |

Zero generic context statistics (PIB/TRAI/Census/MEA) were used. Zero Wikipedia body links; the
Wikipedia/Wikidata pairs appear only in `structuredData.about` / `mentions` and were verified
through the Wikipedia API (Committed relationship Q382798, Intimate relationship Q736922,
Dating Q654810, Declaration of love Q24950437, Interpersonal communication Q3685487).

**Uniqueness check.** None of these five URLs appears in the 54 spent in
`content/batches/2026-09-17-propose-12`, and none appears in a sibling file in this batch.
Domain counts after this post: `pubmed.ncbi.nlm.nih.gov` 2/3, `pmc.ncbi.nlm.nih.gov` 1/3,
`fincham.info` 1/3, `jentheiss.com` 1/3, `revistas.uma.es` 1/3. None of the eleven
sibling-reserved papers was touched.

**What I searched and did not find.** `defining the relationship talk study` returns Knopp,
Rhoades, Stanley & Markman (2020, *JSPR*) — the single best DTR paper, with DTR talks in over
half of 341 young adults' most recent relationships. OpenAlex confirms `oa_status: closed`,
no repository copy, so it is not cited. Baxter & Bullis (1986) on relational turning points is
equally load-bearing and equally unreachable (Oxford Academic and Wiley both returned 403).
Both would have strengthened the timing section.

## Phase 4–5 — Draft decisions

- **First-party facts, all labelled in body prose** as platform-wide or `/love-gf`-sampled, per
  the BRIEF: 4,567 pages across 16 page types; `/love-gf` at 1,138 pages and 24.9%; `/love-gf`
  at 16,362 views and 31.8%; 39.9% password-protecting (1,822 of 4,567); 48.9% of views on a
  phone (25,167 of 51,504); median 6.4-hour first-save-to-last-edit gap, n = 1,138, sampled on
  `/love-gf`. **No number is attributed to proposal pages anywhere**, because none exists.
- **Links:** `/proposal` (mandatory, placed after the section that earns it), `/love-gf` (the
  honest alternative, and for this keyword usually the *correct* one), `/templates`.
  Three internal links, relative paths, all from `TEMPLATE_LINKS`.
- **Objection block:** names three cases where SubhSandesh loses — same room, no smartphone,
  and the reader who wants a marriage answer from a page that cannot give one.

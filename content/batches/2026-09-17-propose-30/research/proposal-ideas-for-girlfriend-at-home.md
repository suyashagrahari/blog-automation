# Research brief — `proposal ideas for girlfriend at home`

- **Slug:** `proposal-ideas-for-girlfriend-at-home` (verified free in Strapi, 2026-09-17: `total: 0`)
- **Batch:** `2026-09-17-propose-30` · **Category:** `modern-romance`
- **Demand:** band 3,000–10,000 EST, **36 autocomplete prefixes — the highest-demand phrase in the 100-keyword run.** A prefix count is not a search volume and is never printed as one.
- **Body:** 1,793 words excluding FAQs · **FAQs:** 11 · **Audit:** 46 passed / 4 failed

---

## Phase 0 — first-party data gate

`content/facts.md`, regenerated 2026-09-17. Six lines used, four of them in the body, two inside the first 150 words (the 4,567-pages line and the 39.9% password-protection line).

**The gate passes, with the batch's standing honesty constraint.** There is no proposal-specific data — a read-only probe of the `proposalpages` collection was refused by this machine's production-read policy in wave 1 and again in this wave. Every SubhSandesh figure in the post is therefore labelled **in body prose** as platform-wide across 16 page types or as sampled on `/love-gf`. The pricing block in `facts.md` is empty, so the post states no price, no free or paid tier, and no rupee figure for decorations, flowers or rings. Both limitations are recorded in `batchMeta.structuralLimitations`, not in `failed`.

The Raksha Bandhan lead-time block is out of bounds for this batch and was not touched.

---

## Phase 1 — SERP analysis (INHERITED, not freshly measured)

**WebSearch was exhausted at 200/200 before this post started.** No live SERP pass was possible and the top 5 pages were not re-fetched. The competitive picture below is taken from the 2026-09-16 measurement in `content/keywords/2026-09-16-propose-100/` (`serps.md`, `competitor-map.md`, `shortlist.md`). No position described here is current.

From `shortlist.md` line 265:

| Keyword | Band | Weak of 10 | Est. clicks | Recorded note |
|---|---|---|---|---|
| proposal ideas for girlfriend at home | 3,000–10,000 | **3** | 78 | dr36 — highest demand in the entire run, but the SERP is **100% US/UK**: Hitched, The Knot, Zola, Brides |

**This is the hardest SERP in the batch.** Only 3 of 10 slots are weak, and every strong slot belongs to a wedding-media property with authority far above SubhSandesh's. `competitor-map.md` records Pinterest in 7 of 11 measured proposal SERPs with boards dated 2024, and Quora/Reddit/TikTok recurring — i.e. the weak slots are UGC, not publishers.

What the four incumbents optimise for, from the recorded page types rather than a fresh fetch: long idea listicles (typically 20–50 numbered items), heavy on decor and photography, monetised against rings, venues and photographers, and written for a couple who control the residence. None is India-served.

**Competitors were not cited, linked, paraphrased or mirrored.** `bondlyfe.com`, `bemyval.co`, `yourlovepage.online/.com`, `pixeryhub.com`, `momentocard.in`, `ai.mobirise.com`, `giftsqr.com`, `mewtrucard.com`, `greetingsisland.com` and `paperlesspost.com` were all avoided.

---

## Phase 2 — Gap analysis

**Table stakes** (present in essentially every at-home proposal guide, so the post must not look incomplete without them): a list of distinct ideas; a sense of how much effort each takes; a decor/setting dimension; a "what could go wrong" note; the advice to personalise.

**The gap — and it is the whole post.** The incumbents assume *at home = your own private flat*. For a large share of Indian readers in their twenties, **home is the family home**: parents, often grandparents, siblings, a shared room, a neighbour on the landing. That single substitution changes what the advice has to optimise for:

1. **Privacy, not budget, is the binding constraint.** Nobody ranking for this phrase says that.
2. **The planning unit is a room, a surface, or half an hour** — not "the house".
3. **A rooftop, a terrace, a balcony at a specific hour, or the gap when the house is empty** are real, nameable planning units in India and appear in none of the incumbent lists.
4. **Whether the family knows about the relationship at all is the first question**, and an honest page asks it before suggesting anything.
5. **Two incumbent staples are actively bad advice here** — a candlelit floor of rose petals (the clean-up outlasts the proposal and happens while people are coming home) and the surprise with relatives hiding (where the relationship is not yet known, that staging is a disclosure made on her behalf).

**Stale data:** the incumbent pages cite essentially nothing, so there is no stale statistic to supersede — there is an unoccupied evidence slot instead. That is the opening this post takes.

**Fan-out sub-queries → H2s.** Each H2 answers one:

| Sub-query | H2 |
|---|---|
| What counts as an at-home proposal? | What an at-home proposal actually means in an Indian house |
| Do I need my family to know first? | The question to settle before you plan anything: does the family know? |
| What are the actual ideas? | Eight at-home proposal ideas, sorted by the privacy each one needs |
| Which room / spot should I use? | Where in the house, and what each spot costs you |
| Will the ideas I saw online work here? | The imported ideas that break in an Indian home |
| Should I send something instead? | Where a link belongs, and where it does not |
| When is a page the wrong choice? | When SubhSandesh is the wrong answer |

**Sort order of the eight ideas: ascending by privacy required.** Idea 1 needs no private room at all; idea 8 needs the house and the family's prior knowledge. That ordering is the post's organising claim and is mirrored exactly by the `ItemList` in `structuredData` (`ItemListOrderAscending`, 8 items, same names, same order as the H3s).

**Angle statement:** *Wins by being the only post that treats "at home" as the Indian family home — where privacy, not budget, is the binding constraint — sorting eight ideas by the privacy each needs and mapping them to SubhSandesh's platform-wide 39.9% password-protection rate (1,822 of 4,567 pages).*

---

## Phase 3 — Sources

**Lane:** home as a social space; privacy and courtship inside the family household. Discovery was by `findpapers.mjs` (Crossref + Europe PMC), Crossref's REST API, DOAJ's API and Unpaywall — **no WebSearch, no DuckDuckGo/Mojeek scraping.**

Queries run: `courtship secrecy family India`; `young people romantic relationships parental household South Asia`; `premarital romantic partnerships youth India parents aware`; `domestic space privacy home India ethnography`; `intergenerational co-residence young adults India autonomy`; `dating secrecy disclosure to parents romantic relationship concealment`; `love marriage family approval India young couples qualitative`; plus Crossref passes on `privacy shared mobile phone household women India`, `housing crowding privacy adolescents home India`, `terrace rooftop courtyard Indian house social space`, `young couples romance public parks privacy Indian city loitering`.

**Cap discipline.** `capcheck.mjs` was run before choosing and again before finalising. `pmc.ncbi.nlm.nih.gov` / `europepmc.org` (one publisher, counted together), `frontiersin.org`, `journals.plos.org`, `aclanthology.org` and `arxiv.org` are at the 3-post cap and were avoided entirely. That forced two deliberate detours:

- The PLOS ONE collectivism paper is cited from its **green open-access copy in the Goldsmiths, University of London repository** (`research.gold.ac.uk`), not from `journals.plos.org`.
- `journals.sagepub.com` and `onlinelibrary.wiley.com` candidates were dropped once the verifier showed SAGE at cap and Wiley at cap.

**Deliberately rejected:**

- *Alexander et al., "HIV Correlates of Premarital Relationships Among Unmarried Youth in Pune District"* (Guttmacher, 2007) — excellent fit, fully read, but the **same paper** is already cited in the sibling post `propose-day-wishes-in-marathi.json`. Reusing it would be a within-cluster duplicate.
- *"'Let Us Hold Hands': Lived Practices of Intimacy Among Gay Youth in Urban India"* (Young, 2023) — full text fetched from the Brunel repository and read; it contains **no** discussion of the parental home, private space or privacy, so it failed the subject test on inspection despite a promising title.
- *"Re-theorizing the Sexual Minority Closet: Evidence From Queer South Asian Women"* (Wiley, 2025) — abstract only (Wiley 403, PMC at cap), and the population is second-generation queer South Asian women in Canada. Using it as evidence about Indian readers would repeat exactly the population-mismatch error a sibling was pulled up for.
- *Crossref hits in IJSR, IJRASET, IJFMR and similar pay-to-publish outlets* — Crossref indexing is not peer review; none cited.

### The four sources used

| # | Source | What it actually says | Domain / cap status |
|---|---|---|---|
| 1 | Jaya & Hindin, **"Premarital Romantic Partnerships: Attitudes and Sexual Experiences of Youth in Delhi, India"**, *International Perspectives on Sexual and Reproductive Health*, June 2009 — [PDF](https://www.guttmacher.org/sites/default/files/pdfs/pubs/journals/3509709.pdf) | 2004 survey of 583 unmarried males and 475 unmarried females aged 15–19 in low-income Delhi neighbourhoods. **65% of males and 53% of females who liked someone of the opposite sex stopped meeting that person because they feared getting a "bad name".** Also: 84% of females and 77% of males felt good but *also afraid* when interest was expressed. **Full text read.** | `guttmacher.org` — 1 other post in batch, cap 3. **Not at cap.** |
| 2 | Sambasivan et al., **"'Privacy is not for me, it's for those rich women': Performative Privacy Practices on Mobile Phones by Women in South Asia"**, *SOUPS 2018*, 12 Aug 2018 — [page](https://www.usenix.org/conference/soups2018/presentation/sambasivan) | 199 women across India, Pakistan and Bangladesh. Cultural expectations that phones be shared with family and that digital activity be open to family scrutiny. One participant **deleted her search history after shopping online for a gift for her boyfriend**, because a men's t-shirt in a recommendation feed invites questions from relatives. **Full paper PDF read.** | `usenix.org` — 1 other post, cap 3. URL used in 1 other post, cap 2. **Not at cap, but see the swap-test failure below.** |
| 3 | Bejanyan, Marshall & Ferenczi, **"Associations of Collectivism with Relationship Commitment, Passion, and Mate Preferences: Opposing Roles of Parental Influence and Family Allocentrism"**, *PLOS ONE*, 26 Feb 2015 — [Goldsmiths green OA copy](https://research.gold.ac.uk/id/eprint/18918/1/journal.pone.0117374.PDF) | Collectivism was associated with **greater acceptance of parental influence over mate choice, which drove commitment and passion down**, and simultaneously with **stronger family ties, which drove them up**. Study 1: 154 UK residents (121 women, 33 men, mean age 20.77). **Full text read.** The post states the British sample explicitly and uses the mechanism, not the number. | `research.gold.ac.uk` — 0 other posts. **Fresh domain.** |
| 4 | Pew Research Center, **"Religion in India: Tolerance and Segregation" — Chapter 3, Religious segregation**, 29 June 2021 — [chapter](https://www.pewresearch.org/religion/2021/06/29/religious-segregation/) | Face-to-face survey of **29,999 Indian adults**, 17 Nov 2019 – 23 Mar 2020. **67% said it is very important to stop women in their community from marrying into another religion; 65% said the same about men.** Christians (37%/35%) and Buddhists (46%/44%) far lower. **Full chapter read.** | `pewresearch.org` — 0 other posts in batch. **This is the post's single generic context statistic.** |

**Subject test:** sources 1, 2 and 3 are about the phenomenon (courtship conducted out of sight of the family; scrutiny of a young woman's device inside the household; parental influence over partner choice), not "about India" or "about the internet". **Peer-reviewed and open-access:** 1 (IPSRH), 2 (SOUPS, USENIX open access) and 3 (PLOS ONE, CC-BY, green copy) all qualify. **Generic context statistics:** exactly one (Pew). **Paywalled abstracts:** none — all four were fetched and read in full. **No figure, chart, table or substantial passage was reproduced.**

---

## Phase 5 — Links and targeting

- **Outbound:** 4 unique URLs, each placed inline at the sentence it supports and repeated once in the Sources H2. Every one was fetched and verified in this session.
- **Internal (3):** [`/proposal`](https://subhsandesh.in/proposal) — mandatory, placed in "Where a link belongs", after the section that establishes why a reader would want it, never in the opening. [`/love-gf`](https://subhsandesh.in/love-gf) — the **genuine alternative**, because most people searching this phrase are asking "will you be my girlfriend", not "will you marry me"; the post says so in as many words. [`/templates`](https://subhsandesh.in/templates) — the fallback when neither fits. All three exist in `TEMPLATE_LINKS`; all are relative paths.
- **`templateUrls`:** `["/proposal", "/love-gf"]` — relative, both real.
- **Wikipedia in the body:** zero. Wikipedia appears only as verified `sameAs` targets in `about`/`mentions`, each paired with its Wikidata QID, checked against the Wikipedia API on 2026-09-17: Marriage proposal (Q1057944), Extended family (Q721790, via the `Joint family` redirect), Courtship (Q376596), Privacy (Q188728), Guttmacher Institute (Q3121433), Pew Research Center (Q1635722).
- **`structuredData`:** two blocks. An `@id`-matched enrichment block on `https://subhsandesh.in/blog/proposal-ideas-for-girlfriend-at-home#post` carrying `about`, `mentions` and a `citation` array mirroring `batchMeta.sources` one-to-one with dates; and an `ItemList` of 8 items mirroring the H3s in order. No `BlogPosting` without the matching `@id`, no `FAQPage`, no `AggregateRating`, `Review` or `HowTo`.

---

## Phase 6 — Audit: the four honest failures

`passed` = 46, `failed` = 4, sum = 50, intersection empty, strings byte-verbatim.

1. **"Paragraphs 2–3 sentences throughout"** — the eight H3 idea blocks are each a single paragraph of four to five short labelled clauses, which is the four-field format `page-structure.md` prescribes for machine-extractable H3 items. Splitting them would break extraction. Every paragraph outside those eight is 2–3 sentences.
2. **"metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)"** — the metaTitle is 59 characters and opens on the exact keyword at word one, but the keyword is itself six words long, so it cannot finish inside the first five. Unfixable without truncating the keyword.
3. **"Slug short, hyphenated, lowercase, no stop words"** — the slug contains "for" and "at". It is the exact-match target keyword and is fixed by the batch assignment, so it must not be changed.
4. **"No source passes the swap test"** — the SOUPS 2018 study already appears in the sibling post `propose-day-wishes-for-girlfriend-bangla`, which is direct evidence it is swappable. It is retained for a different finding (a gift purchase leaking through a recommendation feed) but the item fails honestly. The Pew figure is likewise swappable in principle, which is why it is the single generic context statistic rather than a research source.

**Structural limitations** (recorded in `batchMeta.structuralLimitations`, deliberately **not** in `failed`): no proposal-specific first-party data; empty pricing block; Phase 1 inherited rather than freshly measured.

---

## Honest assessment

Demand here is the highest in the 100-keyword run and the incumbents are Hitched, The Knot, Zola and Brides — authority SubhSandesh will not approach, and this post does not close that gap. What it has that they structurally cannot is the India reading of "at home": that home is often the parental household, that privacy rather than budget is the binding constraint, and that two of their staple ideas are actively bad advice where the relationship is not yet known to the family. That is a real India gap rather than a sixth copy of a US listicle, and it is citable for an India-served query. It is not an authority win, and a US/UK-dominated SERP may simply not serve this page at all.

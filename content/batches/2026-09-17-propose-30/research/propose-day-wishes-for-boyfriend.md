# Research brief — `propose day wishes for boyfriend`

- **Batch:** `2026-09-17-propose-30` (wave 2)
- **Slug:** `propose-day-wishes-for-boyfriend` — checked against Strapi on 2026-09-17, `total: 0`, free
- **Category:** `modern-romance`
- **Templates:** `/proposal` (mandatory), `/love-gf` (the genuine alternative), `/missyou-gf`
- **Date verified:** `date` on this machine returned Thu 17 Sep 2026 IST. Computed weekdays for 2027: **Rose Day Sunday 7 Feb, Propose Day Monday 8 Feb, Valentine's Day Sunday 14 Feb.**

---

## Phase 1 — SERP analysis (INHERITED, not freshly measured)

**This session's WebSearch allowance was exhausted before this agent ran** — the single
search attempted returned "this session has used its web search budget (200 of 200
WebSearch calls)". No SERP was read live by this agent and **no SERP was invented**.
The competitive picture below is the batch BRIEF's SERP intelligence, measured
2026-09-16, India-served, and is reproduced as inherited context rather than as a
measurement of my own. This is recorded in `batchMeta.structuralLimitations`.

| Who owns the `propose day wishes` family | Type | What they offer | Known weakness |
|---|---|---|---|
| FNP, FloweraAura, GiftaLove, OyeGifts | Indian gift retailers | High-volume wishes listicles attached to a product catalogue | Volume, not judgement; commercial intent visible |
| Zee, Times Now, MensXP | National media, republished annually | Fast, broad, refreshed every February | Several still carry **2025** in their titles |
| An unnamed incumbent | — | Has published "7 Feb Propose Day" | **Wrong.** 7 Feb 2027 is Rose Day |

Per `references/competitors.md` and the BRIEF, none of these were fetched, cited,
linked or paraphrased. bondlyfe.com and the wave-1 competitor list were likewise
left alone.

**Reader-side observation that does not need a SERP:** the live corpus has 46
proposal pages and effectively all are written to a man. Every incumbent on this
keyword assumes a male sender.

---

## Phase 2 — Gap analysis

**Table stakes** (must be present or the page looks incomplete): the correct date,
a usable set of quotable lines, some grouping of those lines by tone, a short/long
split, a long-distance option.

**The gap — three things nobody on this query does:**

1. **The reader is a woman writing to a boyfriend she already has.** Every sibling
   page is written to a man. Nothing in the SERP addresses what reads as sweet
   versus what reads as pressure when the sender is the girlfriend.
2. **Nobody says the obvious true thing**: a Propose Day message from a girlfriend
   to an existing boyfriend is *affection, not a proposal*. The whole category
   implies otherwise and leaves the reader anxious about a question she is not
   asking.
3. **Nobody answers "public or private."** This is the actual decision — story,
   post, DM, private link — and there is measured evidence on it that no wishes
   listicle cites.

**Stale data:** competitor titles still carrying 2025; an incumbent printing 7
February as Propose Day.

**Boundary with the sibling post.** `can-a-girl-propose-to-her-boyfriend.json` in
this batch owns the *decision* to propose (reverse proposals, reactions, parents).
This post is **wishes/messages to send** and deliberately does not touch that
decision; the body says only that whether to propose is "a separate question" and
does not argue it either way. Its H2s, angle and sources share nothing with mine.

**Fan-out sub-queries → H2s / FAQs:** when is Propose Day 2027 · is it a proposal
if we are already together · should I post it or send it privately · what do I
write so it does not sound like hinting · what time on a Monday · what if we are
long distance · how long should it be · what if he dislikes being posted about ·
what if things are bad right now.

**Angle:** wins by being the only propose-day-wishes page written from a girlfriend
to an existing boyfriend, saying plainly that the message is affection rather than
a proposal, and the only one answering "private or public" with measured
public-versus-private affection data alongside SubhSandesh's platform-wide
password-protection rate and its `/love-gf`-sampled median build gap.

---

## Phase 3 — Sources

**Lane:** expression of affection and its asymmetries in couples. Searched:
`affectionate communication`, `affection exchange theory`, `expressions of affection
gender differences romantic couples`, `relationship maintenance behaviors`,
`verbal affection wellbeing couples`, `affection deprivation`, `"expressed affection"
AND "received affection" partner`, `TITLE:affection AND TITLE:gender`,
`public displays of affection social media romantic couples`.

**Tooling reality.** OpenAlex returned HTTP 429 (daily budget exhausted by earlier
agents) and Semantic Scholar HTTP 429 on every call. Discovery therefore ran on
**DOAJ**, the **Europe PMC REST API** and **Crossref** only. Recorded as a
structural limitation.

**Cap compliance.** `capcheck.mjs` run before choosing sources and again before
finalising. `pmc.ncbi.nlm.nih.gov`, `frontiersin.org` and `arxiv.org` are at the
3-post cap and **none is cited here**. None of the 54 wave-1 banned URLs appears
here. Domains used: `journals.plos.org` (×2 URLs, but this is **one post**, so one
post against the 3-post domain cap), `fidesetratio.com.pl`, `www.nature.com`,
`journals.sagepub.com`. No `doi.org` resolver URL is cited — the BRIEF requires the
resolved publisher, so the SAGE article is linked at `journals.sagepub.com` directly.

**One caution for whoever finalises this batch.** On the re-run,
`journals.plos.org` reads **3 posts, and this post is the third** — exactly at the
domain cap, not over it. No further post in `2026-09-17-propose-30` may cite
`journals.plos.org`. `fidesetratio.com.pl`, `www.nature.com` and
`journals.sagepub.com` each had slots to spare.

| # | Source | Subject test | What it actually says | Read |
|---|---|---|---|---|
| 1 | Kocur, Jach, Sitko-Dominik, Dhakal et al. (2025), *To hug or not to hug? Public and private displays of affection and relationship satisfaction among people from Indonesia, Nepal, and Poland*, PLOS ONE, 25 Jun 2025 | **Pass** — public vs private affection | 461 participants (170 Indonesian, 120 Nepali, 171 Polish, 18–49). Mixed-model ANOVA: main effect of context, participants more willing to show affection in private than public, *t*(459) = 8.77, Cohen's *d* = 0.34. Main effect of country; Nepali participants as willing in private as Polish participants in public. Both private and public displays correlated positively with relationship satisfaction in all three countries. **No sex effect detected** on willingness. | Full text |
| 2 | Mostova, Stolarski & Matthews (2022), *I love the way you love me*, PLOS ONE, 22 Jun 2022 | **Pass** — asymmetry between expressed and received affection | 100 heterosexual couples, together 6 months–24 years (M = 3.5 yr), 31 nationalities. Greater discrepancy between preferred and partner-expressed "love language" → lower relationship and sexual satisfaction. Mismatch in physical touch, words of affirmation and quality time mattered most. Women scored higher than men on four of five "feeling" scales. Mismatch↔sexual-satisfaction correlation −.37 (men) vs −.21 (women). | Full text |
| 3 | Walęcka-Matyja (2020), *The Polish version of the Affectionate Communication Index: Preliminary report*, Kwartalnik Naukowy Fides et Ratio 42(2), 18 Aug 2020 | **Pass** — the measurement of affectionate communication and a gender asymmetry in it | 430 participants, 61.63% women, aged 18–36 (M = 27.41). EFA gave a two-factor solution (verbal; support-and-nonverbal) against the original three; α .89–.93. **Women scored higher on average than men on support and nonverbal communication.** Caveat recorded in the audit: the sample is adult *sibling* relationships, not couples, so it is used only for the structure of affectionate communication and the gender difference, never extended to couples. | Full record + abstract |
| 4 | Sorokowska, Kowal, Saluja et al. (2023), *Love and affectionate touch toward romantic partners all over the world*, Scientific Reports, 4 Apr 2023 | **Pass** — affectionate behaviour in couples | Two studies, 7,880 participants; study 1 a cross-cultural survey across 37 countries. Love significantly and positively associated with affectionate touch behaviours in both studies, robust to controls. | **Abstract only** — nature.com returned a Cloudflare client challenge; abstract retrieved via Europe PMC REST (PMC10073073, CC BY) |
| 5 | Blair, McKenna & Holmberg (2022), *On guard: Public versus private affection-sharing experiences in same-sex, gender-diverse, and mixed-sex relationships*, Journal of Social and Personal Relationships, 21 Apr 2022 | **Pass** — the cost of public affection | 1,675 people: mixed-sex N = 1,018, same-sex N = 561, gender-diverse N = 96. Private affection-sharing similar across groups. Public affection-sharing frequency, comfort and vigilance differed sharply; higher PDA-related vigilance was associated with worse psychological and physical well-being in all groups. | **Abstract only** — journals.sagepub.com is bot-blocked and europepmc.org returned HTTP 403 to this fetcher; abstract retrieved via the Europe PMC REST API (PMC9386764, PMID 35991526) |

**Swap test:** none of the five would sit unchanged in another post in this batch.
Each is about *where and how affection is expressed between partners*, which is the
specific question this post answers and no sibling's.

**Generic context statistics used: zero.** No PIB, TRAI, Census or MEA figure
appears. **Wikipedia in the body: zero** (Wikipedia appears only as verified
`sameAs` targets in `structuredData`, which per `structured-data.md` does not count
against the 0–2 body budget). Every `sameAs` was checked against the Wikipedia API
with its Wikidata QID paired: Propose Day Q7250378, Affection Q1124198, Public
display of affection Q4383252, Affection exchange theory Q4688876, Long-distance
relationship Q1406917.

**No topical research found on one sub-question**, and this is a real finding: there
is no study measuring what an Indian woman sending a Propose Day message to her
boyfriend actually does or how it is received. The closest South Asian data point in
the set is the Nepali sample in source 1, and the post says *Nepal*, not India.

---

## Phase 0 — first-party facts used

All from `content/facts.md`, regenerated 2026-09-17. Every figure is labelled **in
body prose** as platform-wide across all 16 page types or as sampled on `/love-gf`.
**Nothing is attributed to proposal pages** — the `proposalpages` probe was refused
by this machine's production-read policy in both waves.

Two inside the first 150 words: `/love-gf` at 1,138 of 4,567 pages and 24.9% of
everything created (platform-wide), and the 39.9% password-protection rate
(1,822 of 4,567, platform-wide). Also used: 16,362 `/love-gf` views and 31.8% of all
views; 48.9% phone opens (25,167 of 51,504); 92.7% published and shared (4,234 of
4,567); 11.3 average views per page; the 6.4-hour median first-save-to-last-edit gap
**sampled on `/love-gf`, n = 1,138**.

No price, free-tier or paid-tier claim appears anywhere — the pricing block in
`facts.md` is empty.

---

## Phase 4–5 — structure and links

H1 + answer paragraph → date correction H2 → definition H2 (what the message
actually is) → 20 original wishes in 5 H3 groups, each with the same four fields →
comparison table (5 rows, first-party column) → "write it the way he receives
affection" H2 → objection H2 (when a message is the wrong thing to send) → sources.

Internal links, all from `TEMPLATE_LINKS`, all relative, all placed after the value
is established: `/proposal` (the mandatory primary, introduced only after the wishes
block has shown why a reader would want a whole story), `/love-gf` (the honest
alternative — for a girlfriend telling an existing boyfriend she loves him, this is
the right template, and it is the platform's #1 at 1,138 pages, 24.9% of everything
created), `/missyou-gf` (long distance).

**All 20 wishes are original, written for this page.** No competitor line, no film
dialogue, no song lyric.

---

## Phase 6 — audit

50 checklist items, extracted byte-verbatim from
`references/publish-checklist.md` by script rather than by hand. **48 passed,
2 failed, disjoint, sum 50.** Failures are the stop word `for` in the assigned
exact-match slug, and outbound-link verification: 3 of 5 sources were fetched as
full text, and 2 (nature.com, SAGE via doi.org) are bot-blocked and were verified
against their abstracts only.

Structural limitations — no proposal-specific data, an empty pricing block, an
inherited rather than measured Phase 1, OpenAlex/Semantic Scholar rate-limited, the
ACI sample being siblings not couples, and no Indian study in the set — are recorded
in `batchMeta.structuralLimitations`, **not** in `failed`.

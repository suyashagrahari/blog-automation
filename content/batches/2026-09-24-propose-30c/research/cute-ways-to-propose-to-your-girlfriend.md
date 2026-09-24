# Research brief — `cute ways to propose to your girlfriend`

- **Batch:** `2026-09-24-propose-30c` (wave 4)
- **Slug:** `cute-ways-to-propose-to-your-girlfriend` — checked against Strapi on 2026-09-24, `total: 0`, free
- **Category:** `modern-romance` (confirmed present in the live category list)
- **Secondary keyword, same page:** `fun ways to propose to your girlfriend`
- **Demand:** 5 prefixes, ordinal only. `prefix_hits` is not printed anywhere on the page.

---

## Phase 1 — SERP analysis: NOT RUN, and the page says nothing about competitors

No SERP was measured for this keyword. The only India-served SERPs on record were
measured 2026-09-16 (`content/keywords/2026-09-16-propose-100/serps.md`) for a
different keyword set, and this keyword is not among them. No ranking page was
fetched.

Consequence, per the BRIEF's "Do not claim what you did not measure":

- The post makes **no claim** about what incumbents cover, omit, or get wrong.
- Checklist item *"The post contains at least one claim none of the top 5 pages
  make"* is recorded as **failed**, not quietly passed.
- Checklist item *"H2s map to the fan-out sub-queries identified in Phase 2"* is
  recorded as **failed**: the fan-out was reasoned from the keyword, not read off
  a measured SERP or PAA block.

Search budget spent: **0 WebSearch calls.** All research ran through
`findpapers.mjs` (Crossref + Europe PMC) and direct page fetches.

---

## Verifying the framing claims in my own task prompt

The BRIEF requires treating the task prompt's framing as unverified. Two claims
were checked before being used.

| Claim in the prompt | Verdict | Evidence |
|---|---|---|
| "the baby-schema account is usually credited to Konrad Lorenz" | **Holds** | The June 2024 *Proceedings B* review cites Lorenz K. 1943, *Die angeborenen Formen möglicher Erfahrung*, Z. Tierpsychol. 5: 235–409, and states `Kindchenschema` "was originally proposed" there. |
| "there are Japanese kawaii/task-performance studies" | **Holds, but unusable** | Nittono, Fukushima, Yano & Moriya (2012), *The Power of Kawaii*, is real and on point — but it sits on `journals.plos.org`, which is **at the 3-post domain cap** for this batch, and no green-OA institutional copy was findable (Hiroshima/Osaka repositories, ResearchGate excluded). **Cut.** Replaced with Nittono & Ihara (2017) in *SAGE Open*, which is fully open access and carries the more load-bearing finding for this angle anyway. |

A third framing claim — "cute is a register, not a synonym for good" — is the
angle, not a fact, and is argued from the Kuraguchi 2015 dissociation rather than
asserted.

---

## Phase 2 — Angle and cannibalisation

### Angle

> Wins by being the only post that treats "cute" as a **register** rather than a
> grade of effort — sorting six asks by how small and private they are, giving a
> runnable cute-versus-twee test, and holding the line that the question itself
> must stay literal.

### Verdict on distinctness from the three named siblings

**Meaningfully distinct. Writing it was the right call.** The three siblings all
sort the same inventory of ideas; each sorts it on a different *quantity*. This
post does not sort on a quantity at all — it sorts on tone, and then argues that
one axis (how literal the question is) cuts across the tone entirely.

| Sibling | Its sorting axis | Its evidence | Overlap with this post |
|---|---|---|---|
| `how-to-propose-girl-in-unique-way` | novelty vs memorability; effort *she can see* | bizarreness effect, peak-end meta-analysis, gratitude diary study | None. It argues novelty is not the lever; this post never discusses novelty, memory or recall. |
| `will-you-be-my-girlfriend-proposal-ideas` | production scale, smallest→largest; audience size | Hoplock proposal-account coding (**banned here**), ring-market history | Closest neighbour, and the one to watch. Both sort smallest-first. **But** that post's axis is *how many people see it* and its argument is that public proposals carry rejection odds. This post's axis is *tone*, its argument is that a playful wrapper can make the question unanswerable, and it cites none of that post's sources. The two are complementary and cross-linked. |
| `proposal-ideas-for-girlfriend` | lead time and number of accomplices | planning fallacy, implementation intentions | None. This post says nothing about lead time; its only time claim is the first-party 2.2-hour build median. |

Banned lanes confirmed unused: novelty/memory, production-scale, planning-fallacy,
script-theory, humour-in-marriage, illusion-of-control. Hoplock sources: **not
used.**

Cross-linking: all three siblings are named here by slug. They are **not** linked
in the body, because sibling `/blog/` slugs are not `TEMPLATE_LINKS` entries and
404 until waves 1–3 publish. Recorded in `structuralLimitations`.

### Fan-out sub-queries the H2s answer (inferred, not measured)

what counts as cute · cute vs romantic · cute vs childish · who cute suits ·
what to actually say · does cute work at distance · is cute too casual ·
when cute is wrong · what if she laughs

---

## Phase 3 — Sources

Five sources; zero generic context statistics; zero Wikipedia in the body;
zero competitor links. `capcheck.mjs` run when choosing and again immediately
before saving — no banned URL, no domain at or near cap.

| # | Source | Domain | Subject test | Why it earns its place |
|---|---|---|---|---|
| 1 | Lorenz's classic 'baby schema': a useful biological concept? — *Proc. R. Soc. B*, 19 Jun 2024 | `royalsocietypublishing.org` | Pass — cuteness perception | Verifies the Lorenz/1943/`Kindchenschema` attribution and supplies the "no single word pinned the feeling down" point (*niedlich*, *süß*, *herzig*) that grounds "cute is its own category". |
| 2 | Psychophysiological Responses to Kawaii Pictures With or Without Baby Schema — *SAGE Open*, 30 May 2017 | `journals.sagepub.com` | Pass — cuteness perception | Kawaii without baby schema still raises pleasantness and smiling-muscle activity; the feeling is "more generic than infant attractiveness" and tied to **approach motivation**. This is the evidence for "cute is an approach signal, and an approach signal is not a question". |
| 3 | The impact of baby schema on perceived attractiveness, beauty, and cuteness in female adults — *SpringerPlus*, 7 Apr 2015, CC BY 4.0 | `link.springer.com` | Pass — cuteness perception | 69 raters, 17 faces. Cuteness "does not completely overlap with beauty or attractiveness". Also supplies the gender split used in the objection block: cuteness implied non-sexual attraction for female raters, both for male raters. |
| 4 | Egocentrism over e-mail: can we communicate as well as we think? — *JPSP*, 2005 (green OA, NYU Stern) | `web-docs.stern.nyu.edu` | Pass — how playful intent is decoded | Study 1: senders expected **97%** decoded, actual **84%**, t(5)=3.23, p=.023. Study 2, **29 dyads**: e-mail readers indistinguishable from chance (**50%**) while listeners managed nearly three-quarters, and sender confidence did not fall to match. The spine of the post. |
| 5 | Personal idiom use and affect regulation in romantic relationships — Texas Tech University, Dec 2005 | `ttu-ir.tdl.org` | Pass — couple communication | Playfulness and affection were the two most-cited reasons couples use their own private language; use tracked closeness, partner knowledge and fondness. Supports "who cute suits". **Abstract only — full text not retrieved.** |

Swap test: none of the five could sit unchanged in another post in this batch.
Peer-reviewed + open access: #1, #2, #3.

### Search terms tried, and what they returned

`cuteness baby schema kindchenschema study` · `kawaii perception behaviour research` ·
`cute stimuli approach motivation study` · `cuteness careful behaviour attention narrowing` ·
`kawaii cute images careful behavior attentional focus Nittono` ·
`kawaii pictures baby schema social engagement smiling Nittono Ihara` ·
`indirect request ambiguity plausible deniability interpretation politeness`

The last query was run to source the "the question must be unambiguous" spine from
the indirect-speech literature. The obvious candidate — Pinker, Nowak & Lee (2008),
*The logic of indirect speech*, PNAS — is **on the batch ban list** (spent in
`2026-09-23-propose-30b`). Rather than reach for a weaker pragmatics paper, the
spine was re-sourced onto Kruger et al. 2005, which is a better fit anyway: it
measures decoding accuracy rather than theorising about deniability.

Crossref returned several predatory or low-quality venues on the kawaii queries
(`Journal of Social Sciences and Humanities`, `advance.*` preprints). All rejected
on venue.

---

## Phase 4–5 — Structure, facts and links

Body: **1,794 words** excluding FAQs. 8 H2s (incl. Sources), 6 H3s, one 5-row table.
**12 FAQs**, in `article.faqs` and the renderer-built FAQPage only. Highest
FAQ↔H2 Dice similarity: **0.476**, well under the 0.85 flag.

First-party facts used (6, copied verbatim from `content/facts.md`; 2 inside the
first 150 words):

- 5,148 pages across 21 page types — opening paragraph
- 38.5% password-protect (1,983 of 5,148) — opening paragraph
- 48.3% phone views (27,499 of 56,886) — idea 6
- /love-gf 1,178 created, 22.9% — table and template section
- /love-gf 16,998 views, 29.9% — template section
- 2.2-hour median build, sampled on /apology-dashboard, n=1,375 — template section

**Every one is labelled in body prose** as platform-wide across 21 page types or
as sampled on a named template, and the opening states outright that no
proposal-specific data exists.

**No price, cost or money language anywhere**, scanned mechanically. No idea is
priced. Nothing is described as included, free, paid or worth anything.

Internal links (3, relative, all in `TEMPLATE_LINKS`, all after value is
established):

- `/proposal` — **mandatory, and handled honestly.** The post says plainly it is
  *not* the cute option: large, earnest, the whole story ending on a growing YES
  button, sitting oddly beside a folded note. Use it for a marriage ask.
- `/court-of-love` — the genuine alternative for the playful register. Ten funny
  questions and a penguin judge is the register done properly, and the verdict
  screen is where the plain question goes.
- `/love-gf` — the right-sized alternative, and the one the first-party numbers
  actually support.

Date verified locally with `date`: Propose Day **Monday 8 February 2027**.

---

## Phase 6 — Audit

**48 passed / 2 failed / 50 total, disjoint, byte-verbatim strings.**

Both failures are the SERP-dependent items (see Phase 1). Neither is fixable
without measuring a SERP, and neither was papered over.

Non-checklist limitations live in `batchMeta.structuralLimitations`: no
proposal-specific data, empty pricing block, inherited Phase 1, abstract-only
reading of source #5, no exempt-URL reuse, siblings unlinked pending publication,
and the single-row first-party column in the comparison table.

`verify-batch.mjs` reports this file clean: 1794 words, 12 FAQs, 48/2 audit,
`modern-romance`, `/proposal /court-of-love /love-gf`.

# Research brief — `how to propose shy girl`

- **Slug:** `how-to-propose-a-shy-girl`
- **Category:** `modern-romance`
- **Batch:** `2026-09-24-propose-30c` (wave 4)
- **Written:** 2026-09-24
- **Demand:** 1 prefix hit in the 4,788-suggestion autocomplete harvest. `prefix_hits`
  is ordinal demand, not volume, and is never printed in the post as a search figure.

---

## Phase 0 — first-party gate

Four facts from `content/facts.md` (regenerated 2026-09-24), copied verbatim into
`batchMeta.factsUsed`. Two sit inside the first 150 words: the 5,148 pages across 21
page types, and the 38.5% password-protection rate (1,983 of 5,148).

The 38.5% figure is the load-bearing one for this angle. It is the only first-party
number the site holds that measures a *privacy preference*, which is exactly what this
post argues for. It is labelled platform-wide across 21 page types in the body prose,
because no proposal-specific data exists — the `proposalpages` probe is still refused by
this machine's production-read policy.

---

## Phase 1 — SERP, and what was actually measured

**One** WebSearch call was spent, on 2026-09-24, for `how to propose a shy girl`. It
returned titles, URLs and snippet text. **No ranking page was fetched in full**, and none
of this batch's keywords is among the 11 India-served SERPs measured on 2026-09-16
(`content/keywords/2026-09-16-propose-100/serps.md`). Everything below is therefore an
observation about *what the result list showed*, not a description of page internals, and
none of it is asserted in the body.

| What the result list showed | Count |
|---|---|
| Results addressing a shy **asker** ("I am too shy to propose") | 4 of 9 |
| Results addressing a shy **recipient** | 2 of 9 |
| Community Q&A (Quora, Weddingbee boards) | 4 of 9 |
| Wikipedia disambiguation noise (a film titled *Shy Girl*) | 1 of 9 |

Two observations worth recording, neither of which is stated in the post:

1. The keyword is **split intent**. Roughly half the visible results read it as "how do I
   propose when *I* am shy", which is sibling 2's territory. The recipient-side reading is
   the minority, which is the opening.
2. The recipient-side results that did surface were US engagement-ring context
   (ring-vendor and wedding blogs). Neither was fetched, neither is linked, and neither
   is cited — see `references/competitors.md`. The Indian sense of *propose* (asking
   someone to be your girlfriend) did not appear in any snippet returned, which is handled
   in an FAQ rather than as a body claim.

**Audit consequence:** the checklist item *"The post contains at least one claim none of
the top 5 pages make"* is recorded as **failed**, and so is the Phase 2 fan-out mapping
item, because both would require reading pages that were not fetched.

---

## Phase 2 — gap and angle

**Table stakes** (present in the visible snippets, so the post must not omit them):
propose privately rather than publicly; written/letter options; home rather than a venue.

**The gap.** All 72 posts already live in this territory, and everything visible on this
SERP, treat the recipient as a generic "her". None asks what changes when she is *shy* —
and the answer inverts the standard advice, because the grand gesture that is the default
recommendation everywhere else is the single worst design choice for this recipient. No
visible result grounds any of that in the shyness or evaluation-apprehension literature.

**Fan-out sub-queries** answered as H2s or FAQs: what shyness actually is; whether a
public proposal is worse; how to ask without a live performance; what silence means;
whether text is acceptable; whether to involve friends; how long to give her; whether to
film it.

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that treats the
recipient's temperament as the variable, argues from evaluation-apprehension and
shyness-trait evidence that every public element is worse for a shy recipient, and grounds
the private alternative in SubhSandesh's platform-wide 38.5% password-protection rate.

---

## Cannibalisation — the two named siblings

| | This post | `will-you-be-my-girlfriend-proposal-ideas` (wave 3) | `how-to-propose-girlfriend-first-time` (wave 2) |
|---|---|---|---|
| Subject | The **recipient's temperament** | **Production scale** of the gesture | The **asker's** nerves |
| Argument | Public is worse *because she is shy* | Over-production underperforms *in general* | The asker mis-forecasts the odds of a no |
| Evidence base | Shyness trait, evaluation apprehension, social-anxiety behaviour | Hoplock & Stinson proposal accounts, engagement-script vignettes, diamond-ring demand | Compliance underestimation, liking gap, rejection sensitivity |
| Sources shared | none | none | none |

Sibling 1 argues against spectacle for everyone; this argues it from one person's
temperament, which is a different evidence base and a different reader. Sibling 2 is about
the person asking being nervous; this is about the person being asked being shy — the
opposite party. All three source sets are disjoint, and all of sibling 1's URLs are on the
332-URL ban list. Sibling slugs are not `TEMPLATE_LINKS` entries and 404 until waves 2–3
publish, so they are named here and deliberately not linked from the body.

---

## Phase 3 — sources

Lane, as assigned: **shyness, social anxiety and introversion as traits, and how they
shape social situations.** Nothing from the first-disclosure-anxiety, compliance/liking-gap,
zero-acquaintance or romantic-script lanes.

Search route: `findpapers.mjs` for `shyness trait social behaviour study`,
`evaluation apprehension audience effect research`, `social anxiety public performance
research`, `introversion extraversion social situation preference study`; then the DOAJ
article API with title- and abstract-scoped queries (`shyness`, `"behavioral inhibition"`,
`"fear of negative evaluation"`, `"social facilitation" OR "audience effect"`,
`"social anxiety" AND (speech OR performance OR audience OR evaluation)`).
Europe PMC returned 500/503 on four of five queries and its REST API returned HTML;
OpenAlex and Semantic Scholar were not reachable.

| # | Source | Why it is here | Read |
|---|---|---|---|
| 1 | Industrial Psychiatry Journal, 2017 — sociability and shyness in 210 Delhi students | The spine: shyness and sociability are **orthogonal** traits, so quiet is not disinterest | Abstract only (DOAJ) |
| 2 | Iranian Journal of Psychiatry, March 2011 — RCBS factor structure, n = 300 | Shyness is a measured trait with a structure invariant across genders | Abstract only |
| 3 | PLoS ONE, 28 June 2016 — prehension under a watching attendee, n = 31 | The audience mechanism: evaluation apprehension reaches into motor control after thirty acts | **Full text read** |
| 4 | BMC Psychology, April 2019 — social anxiety and observed performance, n = 93 | Visible discomfort ≠ impaired content, so reticence is neither a yes nor a no | Abstract only (DOAJ) |
| 5 | Computers in Human Behavior Reports, August 2024 — RECS validation, n = 780 | **Assertiveness** falls in person, so refusing clearly is harder — the asker's burden | Abstract only (DOAJ) |

- Subject test: all five are about shyness, social anxiety or being observed. None is a
  generic context statistic; there are zero PIB/TRAI/Census/MEA figures in the post.
- Swap test: none could sit unchanged in another post in this batch — every one of them
  is about temperament or audience effects, which only this post is about.
- Peer-reviewed open access: all five. Source 3 is the only one whose full text was
  readable; industrialpsychiatry.org, journals.lww.com, link.springer.com,
  bmcpsychology.biomedcentral.com, sciencedirect.com, europepmc.org and
  pmc.ncbi.nlm.nih.gov all refused automated access.
- `capcheck.mjs` was run when choosing and again immediately before saving: none of the
  five URLs is on the 332-URL ban list, and no domain is at cap.
- **Disagreement kept, not resolved:** source 1 found females more shy than males; source
  2 found no gender difference. The body reports both.
- **Corrigendum disclosed:** source 5 has a December 2025 corrigendum that could not be
  read from here. Only the abstract's headline association is cited.

---

## Phase 4–5 — structure and links

H1 → three-sentence answer paragraph → definition H2 → the public-is-worse H2 → five H3
options → 5-row comparison table → the two-misreadings H2 → the "wrong tool, including
ours" H2 → Sources. 1,796 words excluding FAQs. 12 FAQs, in `article.faqs` and the
renderer-built FAQPage only.

Internal links, all from `TEMPLATE_LINKS`, all relative, all placed after value is
established:

- `/proposal` — mandatory, named twice: once as the template built for the ask, once in
  the objection section where the **growing YES button** is called what it is. It is a
  playful mechanic that suits a confident recipient and reads as pressure to a shy one,
  and a mechanic that makes *no* physically harder to click contradicts the argument of
  the whole page. Saying so is the page working properly, not a hedge.
- `/love-gf` — the genuine alternative: it states a feeling rather than demanding a
  decision, so there is nothing for her to perform.
- `/templates` — the library, explicitly gated on having first decided a link is the right
  shape for the ask.

The post also states outright that sometimes **no page at all** is the right call.

---

## Constraints honoured

- Nothing patronising, and nothing framing her temperament as an obstacle. No "bring her
  out of her shell" — the phrase appears once, as a refusal.
- No price, free-tier or paid-tier claim anywhere. `content/facts.md` still ships an empty
  Pricing block.
- No figure attributed to proposal pages. Every number is labelled platform-wide across 21
  page types, in body prose.
- The honest caution is carried in the body, not only in the audit: quiet can mean
  discomfort, a shy person may find a clear refusal harder, and the asker therefore carries
  more of the responsibility for making refusal easy.

## Audit

47 passed, 3 failed, disjoint, summing to 50, strings byte-verbatim from
`references/publish-checklist.md`. The three failures are the two SERP-derived items
(top-5 claim comparison, Phase 2 fan-out mapping) and the metaTitle keyword-position item,
where the exact string `how to propose shy girl` cannot be rendered grammatically inside
the first five words. Everything not a checklist item is in
`batchMeta.structuralLimitations`.

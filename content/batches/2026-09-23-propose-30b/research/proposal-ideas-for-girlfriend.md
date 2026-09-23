# Research brief — `proposal ideas for girlfriend`

- **Batch:** `2026-09-23-propose-30b` (wave 3)
- **Slug:** `proposal-ideas-for-girlfriend` — verified free in Strapi on 2026-09-23 (`filters[slug][$eq]` returned `total: 0`)
- **Secondary keyword:** `proposal ideas for gf` — same page, named once in the definition block
- **Category:** `modern-romance` — confirmed present in the live Strapi category list (10 categories, fetched 2026-09-23)
- **Band:** 3,000–10,000 EST

---

## Phase 1 — SERP analysis: NOT RUN, and nothing is claimed from it

No SERP was measured for this keyword and **no competitor page was fetched**. The
11 India-served SERPs captured on 2026-09-16
(`content/keywords/2026-09-16-propose-100/serps.md`) do not include this term —
the closest entries are `propose day wishes for girlfriend` and
`will you be my girlfriend proposal page online`, neither of which is this query.

Zero WebSearch calls were spent (budget was 5). Sourcing ran entirely through
`findpapers.mjs`, the Crossref API, the Unpaywall API and direct fetches.

Consequently the post makes **no claim about what ranks, what incumbents cover, or
what any competing page says**, and two checklist items that depend on knowing the
top five are recorded as `failed` rather than assumed:

- *"The post contains at least one claim none of the top 5 pages make"*
- *"H2s map to the fan-out sub-queries identified in Phase 2"*

Both are also logged in `batchMeta.structuralLimitations`. This is the defect class
the BRIEF names under "Do not claim what you did not measure"; the honest version
is a recorded failure, not a green audit.

---

## Phase 2 — Angle, and how it differs from all three siblings

**Organising axis: how long each idea actually takes, and what it needs from you.**
Every listicle presents ideas as equally available. They are not — one needs an
evening, one needs three weeks and a co-conspirator, one needs a booking. The post
sorts nine ideas by ascending lead time, states the same four fields for each
(lead time, what it needs from you, who it suits, where it breaks), and names the
two ideas it would talk the reader out of.

### Cannibalisation check against the three named wave-2 siblings

| Sibling (wave 2) | Its lane | Its sources | How this post differs |
|---|---|---|---|
| `proposal-ideas-for-girlfriend-at-home` | Household privacy in the Indian family home; 8 ideas sorted by the privacy each needs | guttmacher.org, usenix.org, research.gold.ac.uk, pewresearch.org | Different sort key (lead time, not privacy), different ideas, zero shared sources. The at-home case is routed to by slug, not re-covered. |
| `online-proposal-ideas` | Mediated co-presence across distance; 9 ideas sorted by shared hour / audience / certainty / build time | olj.onlinelearningconsortium.org, cyberpsychology.eu, doi.org→gt, journals.openedition.org | That post sorts by constraints on the *channel*; this one sorts by calendar days and headcount. Distance is routed out by slug and never covered. |
| `how-to-propose-girl-in-unique-way` | Novelty vs memorability; bizarreness effect and peak-end memory | openprairie.sdstate.edu, greatergood.berkeley.edu, ncbi.nlm.nih.gov, econpapers, frontiersin.org | That post ranks by what she will recall; this one ranks by what the plan demands before the day. No overlap in ideas or sources. |

No source URL or domain is shared with any of the three. All three are named by
slug in the body's closing section so the head term routes out rather than
competing.

### Head-term honesty

This is the general head term in the cluster and it is the hardest to win. It earns
the position by being the page that sorts across the other three and routes to them,
not by re-covering them. `honestAssessment` says plainly that the long-tail siblings
are likely to rank before this page does.

---

## Phase 3 — Research lane: the planning fallacy

Assigned lane. `findpapers.mjs` queries run: `planning fallacy task completion
time`, `From origami to software development review judgment-based predictions of
performance time`, `unpacking task segmentation time prediction planning fallacy`,
plus Crossref bibliographic queries on `planning fallacy time prediction
underestimate` (2012+) with an Unpaywall open-access filter applied to each hit.

Candidates rejected and why:

- **Buehler, Griffin & Ross (1994)**, the origin paper — Unpaywall reports `is_oa: false`, no green copy found. Not cited.
- **Koole & van 't Spijker (2000)**, EJSP, the paper that directly joins implementation intentions to the planning fallacy — the VU Amsterdam record is readable but carries no abstract, and the repository PDF returns 403. Citing it would mean citing a bibliographic record, not a finding. Dropped.
- **Forsyth & Burt (2008)**, task segmentation — only open copy is on `link.springer.com`, which the BRIEF lists as a crowded publisher and `capcheck.mjs` shows at 2 posts. Avoided under the source-cap RACE rule.
- **Gollwitzer & Sheeran (2006)** meta-analysis — the KOPS landing page is behind an Anubis bot challenge. Superseded by Gollwitzer (1999), whose PDF bitstream is directly reachable.
- **"Unpacking Planning Fallacy", IJPS (2021)** — CCSE venue, judged not peer-reviewed to a citable standard per the BRIEF's warning about Crossref-indexed predatory journals.
- **IIMB Management Review (2018)** planning-fallacy mitigation — open access but `sciencedirect.com` returns 403.

### Sources used (4)

| # | Source | Domain | Read | What it carries |
|---|---|---|---|---|
| 1 | Wiese, Buehler & Griffin, "Backward planning", *Judgment and Decision Making* 11(2), March 2016 | `cambridge.org` | Full text (CC BY 3.0) | Study 4, n=125 completed projects: predicted finishing 3.25 days before deadline, actually finished 2.15 days before (t(124)=4.18, p<.001). Predicted hours 17.39 vs actual 17.31 (p=.96) — the error is in *when*, not *how much*. Longer deadlines carried **more** bias (B=.18, p<.03). Study 1 is a date-night scenario, n=232. |
| 2 | Gollwitzer, "Implementation Intentions: Strong Effects of Simple Plans", *American Psychologist* 54(7), July 1999 | `kops.uni-konstanz.de` | Full text PDF | Intentions alone account for only 20–30% of variance in behaviour. Difficult holiday projects: two thirds completed with a named time and place vs one quarter without. Christmas Eve report within 48 hours: three quarters vs one third. Easy projects: 80% either way. |
| 3 | Sniehotta, Schwarzer, Scholz & Schüz, "Action planning and coping planning for long-term lifestyle change", *EJSP* 35(4), 2005 | `kops.uni-konstanz.de` | Full text PDF | n=352 cardiac rehabilitation patients; action plans (when/where/how) mattered early, barrier-focused coping plans mattered later. |
| 4 | Newby-Clark, Ross, Buehler, Koehler & Griffin, *JEP: Applied* 6(3), 2000 | `zenodo.org` | **Abstract only** | People rate pessimistic scenarios about their own tasks as less plausible and do not adjust their own predictions — but *do* take pessimistic scenarios into account when predicting someone else's completion times. |

Cap position re-checked with `capcheck.mjs` immediately before saving: none of
`cambridge.org`, `kops.uni-konstanz.de` or `zenodo.org` appears in the 194 banned
URLs, in the four domains at cap (`dsal.uchicago.edu`, `pmc.ncbi.nlm.nih.gov`,
`archive.org`, `journals.plos.org`), or in the one-slot-left list. Sources 2 and 3
share a repository domain but are different papers, which counts as one post
against the 3-post domain cap.

Zero generic context statistics. Zero Wikipedia body links (the two Wikipedia URLs
in `structuredData` are `sameAs` entity grounding, verified via the Wikipedia API:
Marriage proposal Q1057944, Planning fallacy Q1637631, Implementation intention
Q1364123, Valentine's Day Q37587).

**Subject test:** sources 1–4 are all about time prediction and planning, which is
the post's actual mechanism. **Swap test:** none could sit in a sibling's post —
no other post in this batch runs a planning lane. Source 3's population is cardiac
rehabilitation, not romance; the body says so and labels the transfer as the
author's inference rather than the study's claim.

---

## Phase 0 — first-party facts used

Copied verbatim from `content/facts.md` (regenerated 2026-09-23) and asserted
byte-identical by the build script:

- 5,061 personalised pages created since 2026-03-12, across 20 page types
- Median first save → last edit gap 2.4 hours, **sampled on /apology-dashboard, n=1,348**
- 48.4% of shared pages opened on a phone (27,185 of 56,152 views)
- 38.7% of creators password-protect before sharing (1,961 of 5,061)
- #2 page type `/love-gf` — 1,173 created, 23.2% of all pages

Two are inside the first 150 words. **Every occurrence in body prose states whether
the figure is platform-wide across 20 page types or sampled on the named template.**
The opening paragraph says outright that no proposal-specific figure exists. The
wave-1/2 figure of 6.4 hours sampled on `/love-gf` is not used anywhere, and neither
is the superseded "#1 is /love-gf" ranking.

The Raksha Bandhan lead-time block in `facts.md` is out of bounds for this batch and
is not used, despite being superficially relevant to a lead-time post.

---

## Phase 5 — links

- `/proposal` — mandatory, placed in the routing section after the ideas and the research establish why a scrapbook page would help.
- `/love-gf` — the genuine alternative. In Indian usage "propose" usually means asking someone to be your girlfriend rather than to marry you, so the marry-me scrapbook is wrong for much of this traffic. The body states which reader should use which.
- `/date-invitation` — for the reader who is only asking her out.

All three are in `TEMPLATE_LINKS`, all relative. The body also says plainly that
where the proposal happens in person the page is the keepsake afterwards, **not the
moment itself**, and names the case where a page is the wrong choice entirely.

The three wave-2 siblings are named by slug in plain text rather than hyperlinked:
a Strapi query on 2026-09-23 returned 0 for each of
`proposal-ideas-for-girlfriend-at-home`, `online-proposal-ideas` and
`how-to-propose-girl-in-unique-way`, so `/blog/<slug>` links would 404 today. Logged
in `structuralLimitations` with the condition that closes it.

---

## Calendar

`date` on the machine returned Wed 23 Sep 2026 IST. 2027 weekdays computed and
confirmed: **Rose Day Sunday 7 February 2027, Propose Day Monday 8 February 2027,
Valentine's Day Sunday 14 February 2027.** Propose Day 2027 is a working Monday,
which is load-bearing for the post — a Monday gives a morning and an evening, not a
day, and that alone eliminates about half the ideas.

No panchang or calendar source is cited; the weekday is arithmetic, so it is a
fact-check rather than a citation and stays out of `sources`.

---

## Constraints observed

- Body is **1,798 words** excluding FAQs (plain whitespace split), inside 1,500–1,800.
- **11 FAQs** in `article.faqs` and the FAQPage JSON-LD only; none byte-identical to a body H2 (asserted in the build script).
- Audit: 48 passed, 2 failed, disjoint, summing to 50, strings parsed byte-verbatim from `publish-checklist.md` with wrapped items joined.
- No price, tier or cost claim in either direction anywhere in the post.
- Scratch files namespaced `proposal-ideas-for-girlfriend-*`.
- `scripts/verify-batch.mjs` run before saving: this blog reports `1798 words / 11 faq / 48 2 / modern-romance`, clean. The one batch-level problem it reports (`batch.json blogs != files on disk`) is a batch manifest issue caused by siblings still in flight, not this file.

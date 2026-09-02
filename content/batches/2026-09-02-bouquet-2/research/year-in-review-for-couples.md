# Research brief — `year in review for couples`

- **Slug:** `year-in-review-for-couples` (verified free: `filters[slug][$eq]` returned `data: []` against the live Strapi article collection)
- **Category:** `modern-romance` (confirmed present in the live category list)
- **Timing:** evergreen, December–January peak. No year-stamp in any title.
- **Batch:** 2026-09-02-bouquet-2. Written 2026-09-02/03.

---

## Phase 1 — SERP, as measured 2026-09-02

Nine results supplied by the orchestrator: `thelovenerds.com`, `connectcouplestherapy.com`,
`scribd.com`, `growingus.coach`, `dooyongro.com`, `etsy.com`, `napturallyval.com`,
`erikalabuzanlopeztherapy.com`, `somewhatsimple.com`. **2 of 9 weak.**

`WebSearch` was exhausted (200/200) for the day and `WebFetch` is hook-blocked, so the
top pages were **not** fetched in full by this agent. Two engines returned false
positives earlier in the run (127 KB of an unrelated cached Portuguese SERP; HTTP 200
with Wattpad fan-fiction), so no substitute fetch was attempted and no page-level word
count or heading structure is claimed here. What follows is a classification of the row
from the domains and the orchestrator's measurement, not a per-page teardown — recorded
plainly because a parsing 200 is not proof of an answer.

| Kind of incumbent | Domains | What they optimise for |
|---|---|---|
| Couples-therapy practices | connectcouplestherapy.com, growingus.coach, erikalabuzanlopeztherapy.com | A list of reflection questions, as a lead-in to therapy |
| Craft / lifestyle blogs | thelovenerds.com, napturallyval.com, somewhatsimple.com, dooyongro.com | A printable or a seasonal activity round-up |
| Marketplaces / doc hosts | etsy.com, scribd.com | Selling or hosting a downloadable question sheet |

Under the skill's Gate 4 that is a **hard** row — roughly 0.15 win probability. It is not
a Gate-4 cut, but it is not a head-term win either.

## Phase 2 — Gap analysis

**Table stakes** (present across the row, so the post must carry them): a definition; a
set of questions; a sense of when to do it; some notion of an output.

**The gap.** The row splits cleanly into *therapists offering questions* and *sellers
offering printables*. Nobody offers the thing in between: a structure two people move
through together that **ends somewhere**. Every incumbent format is open-ended — a
question list has no terminating condition, and a printable is a container, not a
procedure. That absence is the whole angle.

**Fan-out sub-queries → H2s.**

| Sub-query | Becomes |
|---|---|
| what is a year in review for couples | `## What is a year in review for couples?` |
| when should we do it / does it have to be January | `## When to hold it, and why January is not the only window` |
| how do you actually do one | `## Six steps to run a year in review with your partner` (6 numbered H3s) |
| what questions should we ask | `## Couples year in review questions that actually produce answers` |
| what do we make out of it | `## What couples actually build to mark a year, and what none of it is shaped for` |
| when is this a bad idea | `## When a page is the wrong format for a year in review` |

**Angle (recorded as `batchMeta.angle`).** Wins by being the only post that treats a year
in review for couples as a two-person conversation with a fixed structure and a verdict at
the end — not a therapist's question list or a printable — and proves the format gap with
SubhSandesh's own creation data.

**Stale data superseded.** None found in the row (no page fetched, so none claimed). The
research instead leans on two sources published after most of this row's likely
publication dates: a 2025 temporal-landmark experiment and a 2022 meta-analysis.

## Deliberate non-duplication of live SubhSandesh posts

Two of the named neighbours were fetched from Strapi and read before drafting:

- `what-to-write-in-a-5-year-relationship-anniversary-letter` (1,593 words) — a
  letter-writing guide: structure, examples, tone, delivery. One voice addressed to
  another.
- `how-to-structure-a-visual-love-timeline-presentation-website` (1,831 words) — a build
  guide: which moments, which layout, typography, captions, accessibility, testing.

Both own "build a permanent monument to the whole relationship". This post is scoped to
**one period, two people, one conclusion**, is explicitly not a letter (said in the
definition section), and treats the artefact as optional and secondary to the
conversation. The overlapping neighbour `interactive-story-timeline-builder-for-boyfriend-anniversary`
(1,389 words) was also read; it is a builder walkthrough, again not an annual ritual.

The sibling in this batch, `new-year-gift-for-girlfriend`, owns the gift decision for
1 January. This post stays on the review itself, which can be run on any landmark, and
its internal links treat `/rewind` and `/capsule` as records of a conversation rather
than as gifts.

## Phase 3 — Sources

Route that worked: **Crossref `query.bibliographic` → Unpaywall → repository**, exactly as
the brief said. OpenAlex, CORE and Semantic Scholar were not attempted (documented 429s).
DOAJ's own search API was tried and is weak for this vocabulary — `"fresh start effect"`
returned 84 hits dominated by horticulture papers about crop yields.

Checked against `USED-SOURCES.md` (666 URLs / 409 domains): all four URLs unused, and no
chosen domain is on the closed-at-4+ list. Checked against the three sibling blog files
after they landed: max domain reuse in this batch is 2 posts (`onlinelibrary.wiley.com`,
`www.sciencedirect.com`), no URL is shared, so no cap is breached and there is nothing to
escalate.

| # | Source | Domain | Subject test | Peer-reviewed | Open access | Verified figure |
|---|---|---|---|---|---|---|
| 1 | Reminiscence of relationship-defining memories and marital outcomes: a systematic review and meta-analysis, *Journal of Family Theory & Review* 14(1), 7–27, 7 Jan 2022 | onlinelibrary.wiley.com | Pass | Yes | Yes, CC BY published version | 16 studies reviewed, 14 pooled; r = .334 with marital outcomes, r = .445 with marital satisfaction |
| 2 | Benefits of collaborative remembering in older and younger couples: the role of conversation dynamics and gender — author copy of a paper in *Memory*, posted 10 Jan 2023 | osf.io | Pass | Yes (accepted version of DOI 10.1080/09658211.2023.2166963) | Yes, gold | 30 intimate-couple pairs (15 long-term older, 15 shorter-term younger) vs 30 stranger pairs; significant collaborative facilitation **only** in the older couples |
| 3 | Effects of start vs. end temporal landmarks on self-dissimilarity and goal motivation, *Current Research in Ecological and Social Psychology* vol. 8, 2025 | www.sciencedirect.com | Pass | Yes | Yes, gold, CC BY-NC-ND | N = 457 Japanese participants, end-of-year online experiment across four conditions; salience raised perceived meaningfulness and self-dissimilarity whether the landmark was a start or an end |
| 4 | Jennifer N. Morey, *The Sharing of and Reactions to Positive Events in Romantic Relationships*, West Virginia University graduate thesis, 1 May 2011 | researchrepository.wvu.edu | Pass | Scholarly (thesis) | Yes | 92 couples aged 18–25, daily positive-event logs for one week; perceived partner responses predicted the sharer's relationship satisfaction, controlling for support seeking |

- **Generic context statistics: zero.** No PIB, TRAI, Census or MEA figure appears.
- **Wikipedia body links: zero.** Wikipedia URLs appear only as `sameAs` entity grounding
  inside `structuredData`, which the skill states is not a body link.
- **Swap test:** none of the four could sit unchanged in a sibling's post. Each is about
  couples remembering, reflecting or sharing, not about India or the internet.

### What could not be verified, and what was dropped

- **`onlinelibrary.wiley.com` and `www.sciencedirect.com` both returned HTTP 403** to the
  sandbox fetch, and `osf.io` serves a JavaScript shell with no abstract in the HTML. The
  cited figures were therefore verified against machine-readable publisher records — the
  Crossref-deposited abstract for source 1, the DOAJ-indexed abstract for source 3, the
  OSF API record for source 2 — plus Unpaywall confirmation that each URL hosts a free
  published or author version. Only source 4's article page (HTTP 200) rendered its own
  abstract to a fetch. This is recorded as an **audit failure**, not a pass.
- **Dropped: the single most on-topic paper found all day.** "The relationship between
  marital reminiscence styles and psychological well-being through mediating role of
  marital quality" (*Frontiers in Psychology*, 26 Aug 2025; 304 married participants in
  Kermanshah, Iran; obsessive reminiscence style negatively related to marital quality,
  narrative style positively). Every open-access host Unpaywall lists for it —
  `frontiersin.org`, `pmc.ncbi.nlm.nih.gov` — is on the batch's closed-domain list, and
  the DOAJ mirror returned 403. It was left out rather than routed through an index page.
- **Closed to us and not used:** the "You say tomato?" collaborative-remembering false-memory
  paper (*Memory*, 2008) and Algoe et al.'s everyday-gratitude study (*Personal
  Relationships*, 2010) are both `is_oa: false` with no repository copy, so neither was
  cited even though both are on-subject. The Dai/Milkman/Riis fresh-start paper
  (*Management Science*, 2014) is likewise closed; the Wharton PDF path 404s. Source 3 was
  used as the open, more recent substitute for the temporal-landmark claim.

## Phase 4–5 — Build notes

- **Body:** 1,796 words by plain whitespace split (`md.split(/\s+/).filter(Boolean).length`),
  FAQs excluded. One H1, seven H2s, six H3s, no skipped levels. Every H2 section contains a
  digit; zero paragraphs exceed three sentences.
- **First 150 words** carry three first-party facts verbatim from `content/facts.md`
  (regeneration of 2026-09-02, re-read before drafting): the 3,397 pages / 15 page types
  line, the 6.9-hour first-save-to-last-edit median (n=996), and the 42.8% password figure
  (1,455 of 3,397).
- **Comparison table:** five rows, the five most-built page types, with two first-party
  columns (created count and share of all pages). It is a real comparison and it carries
  the post's original claim — none of the five, together 92.4% of everything created, is
  shaped around a period of time with an ending.
- **Downside section:** `## When a page is the wrong format for a year in review` names
  four cases, including the required one where some of the conversation should happen out
  loud with no screen (steps 3 and 4), and the case where a warm template is the wrong
  container for an unresolved conflict.
- **Internal links: 4** (the cap), all from `TEMPLATE_LINKS`, all placed in the last two
  sections after the value is established: `/rewind` (the record that matches this
  structure and ends on a verdict), `/capsule` (the forward half), `/bouquet-gf`
  (mandatory), `/love-gf` (used in the downside section, as the wrong container).
  `templateUrls`: `/rewind`, `/capsule`, `/bouquet-gf`.
- **Outbound links: 4**, each attached inline to the sentence stating its fact.
- **Pricing:** the `facts.md` Pricing block is empty, so no cost claim appears anywhere —
  not in the body, an FAQ, the excerpt, the metaDescription or a table cell.
- **No invented telemetry.** `facts.md` has no per-page engagement or retention data, and
  the post says so out loud: it states that we cannot report how long couples spend on a
  review or how many finish one, and offers the 6.9-hour median as the closest real figure.
- **FAQs: 11**, in `article.faqs` only. Each was compared on meaning against all thirteen
  headings; the one that read closest ("Can you do a year in review with your partner long
  distance?" against `## Six steps to run a year in review with your partner`) was reworded
  to "We are long distance — can we still do this?" to remove the resemblance.

## The two "known defect" items, counted rather than assumed

- **metaTitle five-word rule — PASSES.** The keyword is **five words**
  ("year / in / review / for / couples"), and `metaTitle` is
  `Year in Review for Couples: 6 Steps and One Verdict` — 51 characters, keyword occupying
  words one to five, one separator, no banned booster, no year-stamp, no brand suffix, and
  it differs from the H1. The wave-1 claim that this item always fails does not hold here.
- **Slug stop-word rule — FAILS.** `year-in-review-for-couples` contains two stop words,
  `in` and `for`. Removing them yields `year-review-couples`, which loses exact match in
  the URL, so the exact-match slug was kept and the item is recorded in
  `auditReport.failed` with that reasoning.

## Phase 6 — Audit summary

`|passed| = 48`, `|failed| = 2`, `passed ∩ failed = ∅`, total 50. Item strings copied
byte-verbatim from `references/publish-checklist.md`, `**bold**` markers included.

Failed:

1. *Slug short, hyphenated, lowercase, no stop words* — two stop words, unavoidable
   without breaking exact match.
2. *3–6 outbound links, all fetched and verified to contain the cited fact* — count
   passes; three of four article pages could not be fetched (two HTTP 403, one JS shell),
   so the claims were verified against publisher metadata rather than rendered pages.

Structural, not fixable from here: both. The first is a property of the keyword; the second
needs a fetch route the publishers' bot-blocking does not refuse.

## Honest assessment

Recorded in full in `batchMeta.auditReport.honestAssessment`. Short version: a hard row at
2 of 9 weak, so the realistic upside is answer-engine citation and the long-tail variants
(`year in review with partner`, `couples year in review questions`), not the head term.
No rank is predicted. The defensible assets are the format-gap claim from our own creation
mix and four sources no page on this SERP carries.

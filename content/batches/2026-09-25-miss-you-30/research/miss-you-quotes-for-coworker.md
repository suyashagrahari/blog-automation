# Research brief — `miss you quotes for coworker`

Row 22, wave 2 of `2026-09-25-miss-you-30`. Slug `miss-you-quotes-for-coworker`,
category `miss-you-across-miles`, templates `/missyou-gf` (mandatory), `/searched`,
`/templates`.

---

## Phase 0 — first-party data gate

Source: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (pinned; not the
live `content/facts.md`). Six lines used, all byte-verbatim, all from the
2026-09-25 miss-you segment — none from the `## Superseded vintage — 2026-09-15
(ARCHIVE)` block.

Two sit inside the first 150 words: the 43.5% / 38.5% password-protect pair and the
88-word median letter length. Gate cleared.

Mandatory caveats carried in body prose, not only here: n = 214 over two months
(template live 2026-07-28, so no seasonal claim); `viewCount` is page views, not
unique visitors; **the database records which template was opened, never who
received it — nothing in this data proves a single one of those pages went to a
colleague.** The city / background-music / "together since" pickers are not cited at
all, so the picker caveat does not arise.

`## Pricing (fill in by hand)` is empty. No price, no "free", no "costs nothing"
anywhere in the post; the word "free" does not appear.

---

## Phase 1 — SERP, measured live

`SERPS-WAVE2.md`, "## miss you quotes for coworker" — DuckDuckGo `kl=in-en`,
2026-09-25, **seven results, not ten**. Live `<title>` and `<h1>` fetched for each on
2026-09-25 (not read off slugs, per the METHOD table in BRIEF-WAVE2 §0).

| # | Domain | Live `<title>` | Words | Publisher type |
|---|---|---|---|---|
| 1 | smartsmssolutions.com | **403 Cloudflare — not fetchable.** Slug reads `150-heartfelt-miss-you-messages-for-colleagues-professional-ways-to-stay-connected-when-apart` | — | Bulk-SMS vendor |
| 2 | wellhub.com | "142 Farewell Messages to Coworkers: Examples for Every Scenario \| Wellhub" | 6,061 | **HR / B2B** (corporate-wellbeing vendor; URL path `/blog/talent-acquisition-and-retention/`) |
| 3 | teamculturecards.com | "60 \"I'll Miss You\" Messages for a Coworker Leaving (2026)" | 2,985 | **HR / B2B** (team-culture card vendor) |
| 4 | allfeelingshub.com | "200+ Heartfelt Miss You Quotes for Coworker" | 3,150 | Consumer content site |
| 5 | theedadvocate.org | "100+ Farewell Messages for Colleagues and Coworkers - The Edvocate" | 3,271 | Education-sector publication |
| 6 | factohr.com | "100 Meaningful Farewell Quotes and Message for Colleagues" | 3,958 | **HR / B2B** (HRMS vendor) |
| 7 | wikihow.com | "110 Best Farewell Messages for Coworkers, Bosses & More" | 4,691 | Consumer how-to |

**The measured numbers, reported in the body:**

- **Farewell-framed vs longing-framed: 5 of 7 farewell, 2 of 7 longing.** Farewell:
  wellhub, teamculturecards ("for a Coworker Leaving"), theedadvocate, factohr,
  wikihow. Longing: allfeelingshub, and smartsmssolutions by its slug ("stay
  connected when apart"). **This is a farewell SERP, and the task prompt's framing
  was correct** — the one framing claim in the prompt that was load-bearing and it
  checked out.
- **"quotes" vs "messages": 6 of 7 say "messages" in the title, 2 of 7 say
  "quotes", 1 of 7 (factohr) merges both words in one title.** Only
  allfeelingshub says "quotes" without "messages". So the format split is *real but
  inverted* here: the query says quotes, page one answers with messages. Compare
  `for her` (8/10 "quotes", 0 merge) and `for sister` (4/8 merge) — three SERPs,
  three different answers, which is exactly why the METHOD table says measure your
  own.
- **Count-led: 7 of 7.** 150, 142, 60, 200+, 100+, 100, 110 — 862 claimed lines on a
  seven-result page one. Competing on volume is not available.
- **subhsandesh.in pages on this SERP: 0.** `weAlreadyRank` is `null` in
  WAVE2-PLAN.json and the fetched SERP confirms it.
- **HR / B2B-audience pages: 3 of 7** (wellhub, teamculturecards, factohr) — 4 of 7 if
  the bulk-SMS vendor smartsmssolutions is counted as vendor-owned. Materially changes
  who the page is written against: nearly half of page one is written for an employer
  deciding what the company says, not for the individual holding the card.
- **Title / URL disagreement:** teamculturecards ranks a *quotes* query with a
  `/miss-you-messages-for-coworker` slug under an `"I'll Miss You" ... Leaving` title;
  wikiHow's `<title>` ("110 Best Farewell **Messages**") and `<h1>` ("110 Goodbye
  Messages") differ from each other. Reading slugs would have got the split wrong.

**Structural probe of the six fetchable pages** (regex over stripped body text):

| Probe | Hits |
|---|---|
| Mood/tone buckets (funny / heartfelt / short and sweet / professional) | **6 of 6** |
| "what if you barely knew them" | 1 of 6 (wikiHow, and only as a passing "not close") |
| Any register warning about saying this to a **current** colleague | 0 of 6 |
| Group card / card passed around named | 3 of 6 |

---

## Phase 2 — gap and angle

**Table stakes:** a farewell-card use case; short lines that fit a card; something for
a boss as well as a peer; a nod to Slack/LinkedIn.

**The gap, in three parts:**

1. **Nobody names the register risk.** Zero of six fetchable pages warn that "I miss
   you" addressed to a colleague who has *not* left is the one sentence that can
   genuinely embarrass someone at work — because workplace messages travel through
   channels other people read, and in a mixed-gender office with visible hierarchy a
   partner-register line re-pointed at a colleague reads as a pass.
2. **Nobody writes for the person who did not know them well.** The real, common,
   unwritten case — a card on your desk for someone you barely overlapped with. A
   word bank of 200 heartfelt lines is precisely the wrong tool for it.
3. **Nobody sorts by audience.** All six bucket by mood. The variable that actually
   decides the line is who else reads it: a group card (the whole floor and their
   manager), a Slack channel (searchable forever), a LinkedIn comment (their next
   employer), a private message after they have gone (only them).

**Angle (`batchMeta.angle`):** wins by being the only page on this SERP that measures
the query's real intent, then sorts advice by who the person was to you and who else
reads it — including the case nobody writes for — and says outright that the
mandatory romantic template is the wrong tool for a workplace farewell.

**Fan-out sub-queries → H2s.** "Is this a farewell query?" → *The search says "miss
you", the results say "farewell"*. "Can I tell a coworker I miss them?" → *"I miss
you" to a current colleague is the one sentence to avoid*. "What do I write for X?" →
*Four workplace situations*. "Where can I be warm?" → *Where a warm line survives, by
channel*. "Is a coworker a friend?" → *What "colleague" actually means*. "How long?"
→ the 214-page section. "Should I send a page?" → *Where this product is the wrong
tool*.

**Lane sentence inherited verbatim from the anchor row** (a message is composed and
sent; a quote is someone else's exact words borrowed and passed on) — used in an FAQ,
not restated as a body H2, because the anchor owns it.

---

## Phase 3 — sources

Route: `findpapers.mjs` (Crossref + Europe PMC), then Europe PMC REST `resultType=core`
for abstracts. **Zero WebSearch calls spent.** Landing pages were not fetched; PDFs
were not parsed. **Every research citation is abstract-and-metadata only, and the
body and the `stat` fields say so.**

| Source | Journal (the capped unit) | Date | What it supports |
|---|---|---|---|
| europepmc.org/article/PMC/PMC10525437 | *Behavioral Sciences* (MDPI) | 2023-09-13 | Personal workplace relationships are **voluntary**, informal and mutual — the card on your desk is not |
| europepmc.org/article/PMC/PMC11530345 | *Organizational Psychology Review* (SAGE) | 2024-08-09 | "Blended friendships": two roles, worker and friend, enacted concomitantly; benefits and costs run together |
| europepmc.org/article/PMC/PMC12701760 | *Journal of Management* (SAGE) | 2025-02-14 | 213 articles / 233 empirical studies on work loneliness; it is an organisational problem |
| europepmc.org/article/PMC/PMC12385570 | *Healthcare* (MDPI) | 2025-08-08 | 65 articles; absence of **structured** social contact drives remote detachment → restore a structure, don't send a line |
| en.wiktionary.org/wiki/colleague | Wiktionary (reference instrument, cap-exempt) | — | Latin *collēga*, "a partner in office", *com-* + *lēgō* < *lēx*; derived term *frolleague* |

Search terms tried, per the brief's "search the phenomenon" rule: `workplace friendship
dissolution`, `coworker turnover social loss colleagues`, `organisational farewell
ritual leaving employee`, `work friendships wellbeing employees`, `workplace friendship
ambivalence multiplex relationships`, `leaving a job losing work friends relational`,
`workplace loneliness social connection colleagues India`, `self-disclosure at work
boundaries professional relationships`.

**A real negative finding:** there is no open-access empirical literature on the
*farewell ritual itself* — the card, the send-off, what people write. Crossref returns
"Loss of a Coworker: Bereavement in the Workplace" (2026) as a closed book chapter and
"Leaving the lived city: Ritual flames as a farewell to Shanghai", which is about a
city, not an office. Europe PMC returns conference abstract books. So the post leans on
workplace-relationship and work-loneliness research plus first-party data, and does not
pretend a farewell-card literature exists.

**Cap compliance.** Avoided at cap: `journals.plos.org`, `doi.org`. Avoided at 2 of 3
(race risk): `frontiersin.org` — several strong Frontiers candidates were dropped for
this reason alone. None of the spent PMC IDs reused (checked against the batch: the
four used here appear in no sibling). `europepmc.org` is cap-exempt as a repository;
the **journals** named — Behavioral Sciences, Organizational Psychology Review, Journal
of Management, Healthcare — appear in no other post in the batch.

---

## Phase 5 — cannibalisation and internal links

**No live cannibalisation.** Strapi returns no article whose slug contains `coworker`;
the only `colleague` slug live is `birthday-wishes-for-colleague`, a different occasion
(occasion is one of the three never-duplicate axes). The slug
`miss-you-quotes-for-coworker` is free.

**Siblings read, and how this differs:**

- `blogs/miss-you-quotes.json` — owns verified literary provenance. **No attributed
  literary line appears here**, per the ban.
- `blogs/miss-you-quotes-for-best-friend.json` and `blogs/miss-you-quotes-for-sister.json`
  — both name "the romantic-register misfire" for a platonic-personal recipient. **Not
  restated.** Theirs is *relationship category* (a partner line misfires on a friend);
  mine is *audience* (a partner line misfires in a channel a manager reads), and mine
  adds the farewell reframe, which neither has.
- `blogs/miss-you-quotes-for-him.json` — owns the **situation** axis (reason the person
  is away). `blogs/miss-you-quotes-for-her.json` — owns the **delivery** axis. Mine is a
  third axis: **who they were to you × who else reads it.** No mood/tone buckets, and no
  "how to write your own" workflow.

**Internal links: 3.** `/searched` — the joke search-results page with a too-accurate
knowledge panel, a running-joke format a whole team can read over a leaver's shoulder;
the genuinely better fit for this reader and the reason it is here. `/templates` — the
`oneOfLinks` alternative, for the non-romantic occasions. `/missyou-gf` — mandatory,
linked, and explicitly described in the body as the wrong tool for a workplace farewell
except for a friend who happened to be a coworker, months after they left.

---

## Gate 5 — conversion fit, judged honestly

**Verdict: poor, and stated as such in `honestAssessment` rather than oversold.**

SubhSandesh's product is personalised romantic and celebration pages. A farewell card
for a colleague is a plausible but weak fit, and `/missyou-gf` — mandatory batch-wide —
is a romantic partner page that is wrong for a coworker under almost any reading: its
reunion countdown and open-when letters describe a relationship a colleague does not
have with you. The sister and best-friend rows named the template's limitation for
their recipient; this row goes further and gives it its own H2 (*Where this product is
the wrong tool*), with the concrete number that 28.0% of miss-you senders set a reunion
date — a field that means nothing for someone not coming back to your team.

`/searched` is the honest alternative and is linked as the better fit. Even so, the
post's own closing line is that most workplace farewells need a card and two true
sentences, not a product. That is the correct recommendation and it costs conversions;
the row is still worth publishing for the register rule and the barely-knew-them case,
neither of which exists anywhere on this SERP.

---

## Phase 6 — audit

50/50 checklist items accounted for; `passed ∩ failed = ∅`. 49 passed, 1 failed:
"Wikipedia links: 0–2, entities only" is recorded as failed because the body carries
zero Wikipedia links to count — the two `sameAs` URLs exist only in `structuredData`,
where they are QID-paired and verified against the Wikipedia API (Workplace relationship
Q8035069, Loneliness Q223270, Etiquette Q188907). Recording it as "passed" would assert
a check that was never exercised.

`node scripts/verify-batch.mjs content/batches/2026-09-25-miss-you-30` reports no
finding against this slug: 1,791 words, 11 FAQs, 49/1 audit, `miss-you-across-miles`,
links `/searched /templates /missyou-gf`.

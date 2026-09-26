# Research brief — `what does it mean when he says i miss you`

Batch `2026-09-25-miss-you-30`, wave 2 row 24. Written 2026-09-25.
Category `miss-you-across-miles`. Templates `/missyou-gf` (mandatory), `/templates`, `/catch`.

---

## Phase 0 — first-party gate

Source: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (pinned), current block only.
Seven lines used, byte-verbatim, listed in `batchMeta.factsUsed`.

Gate: PASS on count (7 ≥ 3; two in the first 150 words — 2,417 views / 11.3 / 104, and 28.0%
reunion countdown). Gate is weak on *originality within the batch*: all 12 miss-you lines in the
snapshot are already used by 13–43 of the 43 blog files on disk. See `structuralLimitations`.

Caveats carried in body prose: n = 214 over ~two months since 2026-07-28; `viewCount` is page
views not unique visitors; the database records which template was opened, never who received it.
No picker-derived figure (city, background music, "together since") is cited, so that caveat does
not apply here.

## Phase 1 — SERP, measured not assumed

Engine: URLs from `SERPS-WAVE2.md` (DuckDuckGo `kl=in-en`, 2026-09-25, second screening round).
Method: fetched each URL live on 2026-09-25 and extracted `<title>` and `h1`–`h3`, then ran a
regex sweep of the stripped body text. Slugs were not read as a proxy for titles.

| # | Domain | Live title | Words (approx) | Gendered? | Count in title? | Decode-promise section? |
|---|---|---|---|---|---|---|
| 1 | marriage.com | 11 Hidden Meanings When a Guy Says He Misses You | 4,328 | yes | yes, leads | yes ("11 Hidden Meanings"; h1 disagrees: "9 Ways to Respond") |
| 2 | wikihow.com | Does He Miss Me? 18 Signs He's Thinking of You | 4,450 | yes | yes, not leading | yes ("18 Signs That He's Missing You") |
| 3 | enotalone.com | **403 — not read** | — | yes (from URL) | — | — |
| 4 | inspirepearls.com | What Does It Mean When Someone Says He Misses You | 1,616 | yes | no | yes ("Signs That Someone Truly Misses You") |
| 5 | inspirepearls.com | What Does It Mean When Someone Says I Miss You | 1,352 | no (general) | no | yes ("Signs That Someone Truly Misses You") |
| 6 | attractiondiary.com | What Does It Mean When a Guy Says He Misses You? | 1,979 | yes | no | yes ("How to Tell He Means It When He Says He Misses You") |
| 7 | readingswithhope.com | When a Guy Says He Misses You, He Will Do These Things | 2,673 | yes | no | yes ("Actions That Prove He Actually Misses You") |
| 8 | dwellwords.blog | **403 — not read** | — | yes (from URL) | — | — |

**Counts, all out of the six that loaded unless stated.**

- Decode-with-certainty section: **6 of 6**.
- Any language of uncertainty (`cannot know`, `no way to know`, `mind read`, `can't read his mind`):
  **0 of 6**.
- Mentions asking him anything (`ask him` / `just ask` / `ask directly` / `ask what he meant`):
  **1 of 6**, and that one is wikiHow proposing a sit-down about a breakup, not a question about
  the message. marriage.com's "Honest communication" and inspirepearls' "Communicate Honestly" are
  reply-advice headings.
- Gendered vs general: **7 of 8 gendered**, 1 general.
- Raw count in the title: **2 of 6**; leading with it: **1 of 6**.
- Title/URL or title/H1 disagreement: marriage.com (title "11 Hidden Meanings", h1 "9 Ways to
  Respond") — the same page serving both intents.
- Astrology-adjacent context confirmed: readingswithhope's own related rail carries
  "How Does an Aries Man Test You in a Relationship?".

**Two claims in my task prompt tested.** The "SERP is full of mind-reading content" claim: CONFIRMED
(6/6). The implied carry-over that the SERP is count-led, as the `for him` and `for her` rows found
on the quotes SERPs: **NOT CONFIRMED** — 2 of 6 carry a count, 1 leads. This SERP competes on
certainty, not volume.

## Phase 2 — gap analysis

**Table stakes** (all six do these): list several things it can mean; a section on whether he means
it; something about actions vs words; a response section.

**The gap.** Nobody concedes that the single message is uninformative. Nobody recommends asking.
Nobody distinguishes an instance from a pattern — which is the only thing that actually separates
the readings, and is checkable by the reader in thirty seconds of scrolling.

**Fan-out sub-queries → H2s:**

1. what do the pages about this actually say → `## What the eight pages ranking for this actually promise`
2. can you tell what a text really means → `## Why three words cannot carry an intention`
3. how do I know if he really misses me → `## The unit that carries information is the pattern, not the message`
4. what are the reasons a guy says he misses you → `## Five situations, and what each looks like from outside`
5. what are the signs he means it → `## What you could observe, and what stays unknowable` (table)
6. he says he misses me but does nothing → `## When he says it and nothing follows`
7. should I ask him what he meant → `## Asking him is legitimate, and it is faster than decoding`
8. (trust block) → `## What our own numbers can and cannot tell you`

**Angle.** Wins by being the only page on this SERP that measures the SERP and then refuses its
premise, replacing the decode with what is actually observable and with the one first-party number
that breaks the genre's favourite rule.

**Stale data:** none of the six cites a dated statistic at all, so there is nothing to supersede.
That is itself the finding — the genre runs on assertion.

## Phase 3 — sources

Route: Europe PMC REST search (`OPEN_ACCESS:Y AND SRC:MED`) → `resultType=core` for abstract and
metadata. Zero WebSearch calls spent. Crossref used once (Kruger 2005 "Egocentrism over e-mail"),
then dropped: Unpaywall reports `is_oa: false`, no OA location.

| # | Source | Journal | Date | Subject test | Why it is here |
|---|---|---|---|---|---|
| 1 | [PMC11844058](https://europepmc.org/article/PMC/PMC11844058) | BMC Psychology | 2025-02-21 | partners reading each other in a messenger | N = 102 (51 couples); tracking accuracy **and** assumed-similarity bias; more messenger experience → *higher* bias |
| 2 | [PMC9646273](https://europepmc.org/article/PMC/PMC9646273) | Motivation and Emotion | 2022-11-09 | inferring a partner's thoughts | n = 172 couples; induced partner-serving motivation → *less* accuracy for men |
| 3 | [PMC12722480](https://europepmc.org/article/PMC/PMC12722480) | Current Psychology | 2025-12-22 | how people ask a partner for support | RoSS scale, N = 117/491/355; four modes incl. indirect and "no support wanted" |
| 4 | [PMC7037474](https://europepmc.org/article/PMC/PMC7037474) | IJERPH | 2020-02-10 | receiving non-committal messages | 626 adults; breadcrumbing → lower life satisfaction, more loneliness/helplessness; ghosting n.s. |

All four: **abstract only**, recorded in each `sources[].stat`. PDFs do not parse here and the
`europepmc.org` landing pages 403 a scripted UA; the REST record is what was read.

Swap test: all four are about reading or sending ambiguous partner messages. None would sit
unchanged in a language spoke or a quotes-for-<person> row. Generic context statistics: zero.
Wikipedia in body: zero. Competitor links: zero.

Journal cap position when written: Motivation and Emotion 0 → 1, Current Psychology 1 → 2,
IJERPH 1 → 2, BMC Psychology 2 → 3 (at cap, not over). Frontiers in Psychology and PLOS ONE were
both already at 3 and cost this post PMC6400868 (explicit stress communication) and PMC4928818
(gender differences in expressivity).

## Phase 5 — links

Internal, 3: `/missyou-gf` (mandatory; placed only after the privacy figure establishes why),
`/catch` (the `oneOfLinks` alternative — a letter delivered one line at a time, nothing locked,
which suits a reader who does not want a single heavy block to land), `/templates` (browse).
Plus two `/blog/` cross-links to the two siblings, which 404 until this batch publishes.

Outbound, 4: the Europe PMC records above.

## Phase 6 — audit

50 items, 48 passed, 2 failed. Both failures are recorded honestly rather than fixed: the outbound
URLs were verified through the Europe PMC REST record rather than by fetching the 403-ing landing
pages, and the five-situation list structurally resembles the genre's reason-lists even though its
framing is inverted. Full text in `batchMeta.auditReport` and `batchMeta.structuralLimitations`.

# Research brief — `funny miss you quotes`

Batch `2026-09-25-miss-you-30`, wave 2, row 29. Slug `funny-miss-you-quotes`.
Category `miss-you-across-miles`. Templates `/missyou-gf` (mandatory), `/searched`, `/challan`.
Written 2026-09-25. Zero WebSearch calls spent.

---

## Phase 0 — first-party data gate

Source: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (pinned; **not**
`content/facts.md`, which `npm run facts` rewrites in place). `content/facts.md` itself
was regenerated 2026-09-24 and carries a `## Superseded vintage — 2026-09-15 (ARCHIVE)`
block that is **not** cited here.

**Usage census across the 39 sibling blog JSONs on disk**, counting byte-verbatim
`factsUsed` entries:

| miss-you fact line | sibling posts using it |
|---|---|
| 88.8% of started miss-you pages published and shared (190 of 214) | **10** |
| Median first-save-to-last-edit gap 2.6 hours, n=214 | **10** |
| 86.4% carry at least one written memory | 21 |
| 92.1% carry at least one "open when" letter | 21 |
| 2,417 recorded views, 11.3 per page | 23 |
| 47 distinct city pairs from a 15-city picker | 23 |
| 28.0% set a reunion countdown | 32 |
| 1,434 hug taps across 138 of 214 pages | 33 |
| 13.6% record a voice note | 35 |
| 43.5% password-protect (vs 38.5% platform-wide) | **39** |
| Median letter 88 words, longest 1,024 | **39** |

The post therefore **opens on the two least-reused lines** (88.8% published, 2.6-hour
edit gap), which also happen to be the two that carry the post's actual argument: 24 of
214 pages were written and never handed over, and the median page was worked on for
2.6 hours. That is the case for the joke — it is what gets a message out of the drafts.

Gate: 8 facts cited, 2 inside the first 150 words. **PASS.**

Mandatory caveats carried in body prose, not only here: n=214 over two months since
2026-07-28 so no seasonal claim; `viewCount` is page views, not unique visitors; city,
background music and "together since" are pickers with defaults so their fill rates are
not sender choices; the database records which **template** was opened, never who
received it. `## Pricing` is empty, so no price, cost or "free" appears anywhere.

**Honest limit, stated in the audit too:** none of these is a *funny-sender* figure.
The probe does not segment /missyou-gf by register. This closes with a new read-only
probe, not with more writing.

---

## Phase 1 — SERP analysis

Source list: `SERPS-WAVE2.md`, `## funny miss you quotes` (second screening round),
DuckDuckGo `kl=in-en`, 2026-09-25, hand-read gate verdict PASS. **Seven** organic
results. `uncommonquotes.com` holds **2 of 7**.

Live `<title>`, `<h1>`, H2 and body fetched per result on 2026-09-25 (slugs were not
read — the brief's METHOD table exists because slugs and titles disagree).

| # | Result | HTTP | Live title | Claimed count | Sorting axis | H2s | Body words |
|---|---|---|---|---|---|---|---|
| 1 | uncommonquotes.com/funny-i-miss-you-quotes | 200 | "300 Funny I Miss You Quotes With Humor" | 300 | mood + recipient buckets | 12 | 3,760 |
| 2 | therandomvibez.com/funny-i-miss-you-quotes | 200 | "150 Funny I Miss You Quotes For Her & Him" | 150 | recipient (her / him) | 4 | 2,221 |
| 3 | uncommonquotes.com/i-miss-u-quotes-funny | 200 | "300 I Miss U Quotes Funny but Heartfelt" | 300 | mood + recipient buckets | 12 | 3,456 |
| 4 | thebesttravelgifts.com/funny-miss-you-quotes-long-distance | **500** | — (WordPress error page) | — | — | — | — |
| 5 | conversationstartersguru.com/funny-ways-to-say-i-miss-you | 200 | "140+ Funny Ways to Say I Miss You" | 140+ | method (verbal / non-verbal / questions / languages) | 9 | 2,569 |
| 6 | wishesexpert.com/funny-i-miss-you-quotes | **403** | — (blocked) | — | — | — | — |
| 7 | lastingquotes.com/quote-collections/funny-quotes-about-missing-you | 200 | "116 Memorable Funny Quotes About Missing You" | 116 | **none** | 2 (neither sorts) | 2,665 |

### Measurements (all out of the five that served a page)

- **Count-led titles: 5 of 5.** 300, 150, 300, 140+, 116 — **1,006 claimed lines** on the
  readable half of page one. The anchor row found 10/10 count-led on `for him`; this SERP
  is the same competition on volume, at a smaller scale.
- **Sorts by anything at all: 4 of 5.** Every one of those four sorts by **mood or by
  recipient** — hilarious / playful / witty / silly / cheeky / quirky / lighthearted
  (uncommonquotes ×2), her / him (therandomvibez), method categories
  (conversationstartersguru). **1 of 5** (lastingquotes, 116 lines) dumps one
  undifferentiated list under no sorting heading.
- **Names when humour is the wrong choice: 0 of 5.** Predicted zero by the orchestrator;
  measured zero. The token "serious" occurs on three of the five pages and **every single
  occurrence is inside a joke line** ("seriously, where do they go?", "that's a serious
  commitment"), never in guidance. Nothing on this SERP tells a reader not to send one.
- **Attributes a line to a named author: 0 of 5.** Regex for `— Firstname Lastname`
  returned only navigation artefacts ("Privacy Policy", "Latest Post"). The whole SERP
  publishes unattributed lines — and **not one of them says so**.
- **subhsandesh.in results: 0 of 7.** This row does **not** carry `weAlreadyRank`.
- **Register is not held where promised:** therandomvibez's *funny* page carries plainly
  unfunny lines — "Missing you isn't what hurts. It's knowing that I had you that's
  killing me", "The reason it hurts so much to separate is that our souls are connected".
  A reader who came for a joke has to sort that out themselves.
- **Format split (the `for sister` correction):** on this SERP the word "messages" appears
  in **0 of 5** readable titles. Unlike the sister SERP, quotes and messages are not merged
  here — but that is **not** the differentiation, per BRIEF-WAVE2 §0. See Phase 2.

---

## Phase 2 — gap analysis

**Table stakes** (all five readable results carry these): a large bank of short humorous
lines; explicit long-distance framing; explicit him/her framing; copy-paste formatting.

**The gap.** Every readable result sorts by *how the line sounds* (playful, witty, cheeky)
or *who it is for* (him, her). **None sorts by how much the sender means it**, and none
admits there are moments when a joke should not be sent at all. A joke about missing
someone is a deflection: sometimes exactly right, sometimes a way of not saying the thing.
That distinction is invisible on a mood-bucketed list and is the whole content of this page.

**Stale data.** None of the five cites any research, dated or otherwise. There is no stale
statistic to supersede — there is no statistic at all.

**Unanswered questions raised and dropped by the five:** whether a joke is safe when the
other person is struggling; whether teasing them and mocking yourself are interchangeable;
where the lines came from; whether the recipient has already seen them.

**Fan-out sub-queries → body H2s:**

| Sub-query an answer engine would decompose this into | H2 that answers it |
|---|---|
| what is a funny miss-you quote actually for | ## What a funny miss you quote is actually doing |
| funny lines when you just saw them | ## Lines for when you saw them yesterday |
| funny way to say i miss you when i really mean it | ## Lines for when you mean it and cannot say it straight |
| self-deprecating vs teasing humour | ## Aim the joke at yourself, not at them |
| when is joking about missing someone inappropriate | ## When a joke is the wrong move |
| which funny line for which situation | ## The four rungs side by side |
| are these quote lists any good | ## What the seven results on this search actually are |
| who wrote these quotes / are they real quotes | ## Where the lines on this page come from |
| what to send instead of a text | ## Which SubhSandesh page fits a joke, and which does not |
| how reliable are these numbers | ## What these numbers cannot tell you |

**Angle (recorded as `batchMeta.angle`):** wins by being the only page on its SERP that
sorts funny miss-you lines by **how much the sender actually means it**, and the only one
that names the five situations in which a joke is the wrong move — grounded in 214
measured `/missyou-gf` pages where 88.8% were published and the median page was edited
over 2.6 hours.

**Bans inherited from BRIEF-WAVE2 §0 and honoured:** no mood/tone buckets; no "how to
write your own" workflow (that is the live `/blog/cute-ways-to-say-i-miss-you-over-text`
page's job); no attributed literary lines (wave-1 `blogs/miss-you-quotes.json` owns
verified provenance and is cross-linked instead).

### Cannibalisation check

No live subhsandesh slug carries "funny", "humour" or "joke"
(`content/keywords/2026-09-25-miss-you-global/site-baseline.md`, 81 live `miss` slugs).
Nearest live page fetched 2026-09-25:

- `/blog/cute-ways-to-say-i-miss-you-over-text` — ~7,915 words, **106** mentions of
  funny/humour/joke, but always as one tone bucket among four (playful / romantic /
  nostalgic / casual) inside a *compose your own text* workflow with a "how to craft the
  perfect cute text (step-by-step)" H2. **Split:** that page teaches writing; this one
  sorts borrowed lines and adds the do-not-joke cases it never raises.
- `/blog/what-to-say-when-you-miss-someone` — 56 mentions, same shape, message-composition.

Sibling rows in this batch: no other row targets humour. Checked all 39 blog JSONs —
"humour"/"humor" appears **zero** times.

---

## Phase 3 — sources

Route: `findpapers.mjs` (Crossref + Europe PMC), then Europe PMC REST `resultType=core`
for abstracts and licence metadata. No WebSearch. PDFs do not parse in this sandbox and
publisher landing pages 403 a scripted UA, so **every paper is an abstract-and-metadata
read** and each source note says so.

Searches run: `benign violation theory humor appraisal`, `humor styles relationship
satisfaction romantic couples`, `self-defeating humor style psychological wellbeing`,
`teasing recipient interpretation prosocial antisocial intent`, `humor avoidant emotion
regulation suppression distress`. The last two returned nothing usable (conference
abstract dumps and attachment/defence-mechanism reviews) — recorded here as a real
finding: the *teasing-recipient* literature did not surface an open-access study on
this route.

| # | URL | Journal / publisher | Date | What it supports |
|---|---|---|---|---|
| 1 | europepmc.org/article/PMC/PMC11939602 | *Behavioral Sciences* (MDPI), CC BY | 2025-02-23 | Indirectness correlates with aggressive humour in both groups; self-defeating humour with indirectness in the English L1 group. n=56 + 32. |
| 2 | europepmc.org/article/PMC/PMC9893297 | *Social Psychological and Personality Science* (SAGE), CC BY-NC | 2021-12-30 | Benign violation + social distance: jokes about *distant* others appreciated and shared more than about close others (Chinese samples); little effect among Americans. |
| 3 | europepmc.org/article/PMC/PMC11659645 | *Frontiers in Psychology*, CC BY | 2024-12-06 | Play-mirth theory: humour needs a **playful-turn** appraisal AND a **motive-consistency** appraisal. Two experiments, n=104 and n=150. |
| 4 | europepmc.org/article/PMC/PMC13405941 | *Behavioral Sciences* (MDPI), CC BY | 2026-07-06 | Self-enhancing humour predicted all five PTG dimensions (β 0.324–0.477); affiliative humour predicted none independently. n=194, CFI 0.870. |
| 5 | en.wiktionary.org/wiki/joke | reference instrument | — | *joke* < Latin *iocus* < PIE *\*yek-* "to speak, utter"; German *Beichte* "confession" among that root's distant cognates. Read in full as wikitext. |
| 6 | en.wiktionary.org/wiki/tease | reference instrument | — | *tease* < OE *tǣsan* < PWGmc *\*taisijan* "to separate, tug, shred"; fourth sense "to poke fun at, either cruelly or affectionately in a playful way". Read in full as wikitext. |

- **Subject test:** 4 of 6 are about humour production, appraisal and style — the post's
  actual subject. Both Wiktionary entries are the instrument the etymological claims were
  verified against. **PASS.**
- **Peer-reviewed + open access:** all four papers. **PASS.**
- **Swap test:** none could sit in another row of this batch. This is the only humour row.
  **PASS.**
- **Generic context statistics:** zero. No PIB, TRAI, Census or MEA.
- **Caps:** `capcheck.mjs` run immediately before writing. Every host here is on this
  batch's `capExemptDomains` list (europepmc.org ×4, en.wiktionary.org ×2), so nothing in
  this post touches `journals.plos.org` (closed at 3) or the four domains sitting at 2.
  **Counting the hostname linked, not the journal:** the Hatzithomas paper is published in
  *Frontiers in Psychology* but linked at `europepmc.org`, so `frontiersin.org`'s count is
  unchanged — the journal is named in the source note so a human can check the journal cap.
- **No PMCID reuse:** all four are new to the batch (39 PMCIDs already spent across
  siblings; none of these four is among them).

### Sample-provenance limit, carried in body prose

Cao et al. tested Chinese and American participants; Kruger tested South African
undergraduates; Berrios et al. tested English-L1 and Korean-L1 speakers in the US. **No
Indian sample** in any of them, on an India-served SERP. Each citation says so in the body.

---

## Where the lines came from

All six lines on the page were **written for it**. (The seventh humorous string, "illegal parking in your head since 2023", is the /challan template’s own product copy from `app/lib/prompt.ts`, quoted as such.) None carries an attribution, for two
stated reasons: attributions on quote lists are rarely verifiable (the anchor row set this
precedent, and wave-1 `miss-you-quotes.json` had to check Shakespeare, Tennyson, Tagore and
a Lamartine paraphrase against printed sources to establish provenance at all), and a joke
with a known author is a working comedian's copyrighted bit — reproducing one under a
listicle heading is taking their work, not quoting it. Measured: **0 of 5** readable
results attributes a line to a named author either, and **none says so**.

---

## Corrections to the task prompt (BRIEF §0)

**FALSE CLAIM FOUND.** My prompt states that the sibling row `miss-you-quotes-for-sister`
"grounded exactly this on research showing sisters score lowest on self-defeating humour"
and instructs me to read its `sources` array and not reuse its papers. That row cites **no
humour research at all** — its five sources are patrilocality in South Asia, sibling help
across distance in Finland, transnational families, emerging-adult sibling influence, and
separation anxiety. The strings "humour" and "humor" appear **zero** times across all 39
blog JSON files in this batch. Nothing was inherited; the benign-violation and
humour-styles literature cited here is new to the batch, and no sibling paper is reused.

**Verified as stated:** `uncommonquotes` holds 2 of 7 (true); the count that "likely zero"
results name when humour is wrong (true, 0 of 5); `/challan` and `/searched` descriptions
in `app/lib/prompt.ts` (quoted verbatim in the body).

---

## Phase 5 — links and targeting

- Body internal links (4): `/missyou-gf` (mandatory), `/challan`, `/searched`,
  `/hold-my-hand` (the `oneOfLinks` alternative, named with the reason it suits the
  do-not-joke reader better). All four exist in `TEMPLATE_LINKS`.
- **`/missyou-gf` fit is stated honestly in the body**: a sincere romantic page for a
  partner, with countdown and letter, is an odd destination for a reader who arrived
  wanting a joke to send a friend. Four sibling rows named their template's mismatch and
  it was right each time.
- Outbound (6): the four Europe PMC records and the two Wiktionary entries, all fetched.
- Cross-link to `/blog/miss-you-quotes` (wave-1, verified provenance) — a `/blog` path,
  so it does not count against the 2–4 internal-link rule.
- `categorySlug`: `miss-you-across-miles`, confirmed live in the Strapi categories API.
- Slug `funny-miss-you-quotes` confirmed free: the Strapi articles filter returns `[]`.

## Phase 6 — audit

49 passed, 1 failed, byte-verbatim against `references/publish-checklist.md`;
`passed ∩ failed = ∅`, `|passed| + |failed| = 50`. Body 1,799 words excluding FAQs;
10 FAQs in `article.faqs` and the FAQPage JSON-LD only. The one open failure is recorded
with its reason in `batchMeta.auditReport.failed`.

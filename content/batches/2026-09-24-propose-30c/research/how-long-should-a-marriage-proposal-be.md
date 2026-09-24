# Research brief — `how long should a marriage proposal be`

- **Batch:** `2026-09-24-propose-30c` (wave 4)
- **Slug:** `how-long-should-a-marriage-proposal-be`
- **Category:** `modern-romance`
- **Written:** 2026-09-24
- **Demand:** 3 ordinal prefixes from the 4,788 unselected autocomplete suggestions. `prefix_hits`
  is ordinal, not volume, and is not printed anywhere in the post.

---

## Phase 0 — first-party gate

Read from `content/facts.md` (regenerated 2026-09-24), copied verbatim into `factsUsed`:

1. `48.3% of shared pages are opened on a phone (27,499 of 56,886 views) — measured 2026-09-24`
2. `Median gap between a page's first save and its last edit: 2.2 hours — sampled on apology dashboard (/apology-dashboard), n=1,375 — measured 2026-09-24`
3. `5,148 personalised pages created since 2026-03-12, across 21 page types — measured 2026-09-24`
4. `Average views per created page: 11.1 — measured 2026-09-24`
5. `Most-viewed template: love-gf — 16,998 views, 29.9% of all page views — measured 2026-09-24`

Facts 1 and 2 sit inside the first 150 words. **Every one of them is labelled in body prose** as
either platform-wide across 21 page types or sampled on the named template. No figure anywhere in
the post is attributed to proposal pages — the `proposalpages` probe is still refused by this
machine's production-read policy, so no proposal-specific measurement exists.

The 2.2-hour gap is a *writer* behaviour, not a reader behaviour. The post says so explicitly
rather than letting it read as evidence about how long people spend reading.

---

## Phase 1 — SERP (measured, once, 2026-09-24)

One WebSearch on `how long should a marriage proposal be speech length`. **Results seen as a SERP
listing with snippets only. No competitor page was fetched, opened, cited or paraphrased.**

What the listing itself shows:

| Position type | Domains returned | What the snippet claims |
|---|---|---|
| Retail jewellery blogs | bluenile.com, cleanorigin.com, estatediamondjewelry.com | "1–2 minutes", "30–45 seconds", "no longer than five minutes" |
| Proposal-planning services | theheartbandits.com, dolcevitamakers.com | "short, personal and heartfelt", "three paragraphs" |
| Wedding-speech sites | toastwiz.com, honoredwords.com | wedding *toast* length, a different question |
| Forum | pricescope.com | anecdote thread |

Honest correction to the working assumption in the task: **the incumbents do print durations.**
They are not all "from the heart". What none of the snippets does is (a) say where the duration
comes from, or (b) treat anything other than the spoken ask. Every result on this SERP is about a
man standing up and talking. The written message, the letter and the built page are absent.

**Not measured and therefore never described in the post:** ranking positions, AI Overview
presence, page word counts, internal structure. Only 11 India-served SERPs were measured for this
territory, on 2026-09-16, and this keyword is not among them.

---

## Phase 2 — gap and angle

**Table stakes** (visible in snippets, so a retrieval system expects them): a duration for the
spoken ask; the advice to be specific rather than generic; the warning against rambling.

**The gap:** nobody splits the question by delivery form, and nobody traces a number to anything.
"One to two minutes" is asserted, never derived. The four forms have genuinely different units —
seconds, words, minutes-of-writing, screens — and conflating them is why one word count is useless.

**The angle (`batchMeta.angle`):** wins by being the only page that answers the length question
separately for the spoken ask, the written message, the letter and the built page, with every
recommended number either traced to a source that was read or labelled plainly as editorial
judgement, and with the two research findings that cut *against* brevity stated rather than hidden.

**Fan-out sub-queries mapped to H2s/H3s:** what counts as "length" for a proposal · how many
sentences before the question · how long a proposal speech should be · how long a proposal message
should be · how long a proposal letter should be · how many screens a proposal page should be ·
does a longer proposal sound more sincere · what to cut first.

---

## Phase 3 — sources

Search budget: **4 WebSearch calls used of 4 allowed** (1 SERP, 3 research). Everything after that
was `findpapers.mjs`, Crossref, DOAJ and direct fetches.

`findpapers.mjs` queries run: `message length persuasion`, `verbosity credibility judgment`,
`brevity comprehension plain language written message`, `speech length audience attention decline
lecture`. Crossref returned mostly encyclopaedia entries and unrelated minimum-message-length
(information theory) hits. **Europe PMC returned an HTML error page on every call from this
machine**, so the Europe PMC half of `findpapers.mjs` produced nothing usable.

### Selected — 4 sources, all read

| # | Source | What was read | Subject test | Swap test |
|---|---|---|---|---|
| 1 | Yuan, Liberman & Cieri, *Towards an Integrated Understanding of Speaking Rate in Conversation*, Interspeech 2006 (ISCA Archive) | **Full PDF.** English Switchboard, 2,438 word-aligned conversations: overall rate **196 WPM**, range 111–291 WPM per conversation; "net" rate excluding silences **236 WPM**; turn-wise rate 164 WPM. Speaking rate rises abruptly across segments of one to seven words, then levels for 8–30 words. | Pass — speech rate is the unit of the spoken ask | Pass (no other keyword in this batch needs a WPM rate) |
| 2 | *What to Believe? Impact of Knowledge and Message Length on Neural Activity in Message Credibility Evaluation*, Front. Hum. Neurosci., 17 Sep 2021, read at PMC8485696 | **Full text.** n=105 male right-handed participants. Long notes judged true in 4,079 of 7,605 trials (**53.6%**); short notes in 3,455 of 8,432 (**41.0%**). Binomial test p < 0.000001. Authors name a "cognitive bias for long notes". | Pass — message length vs. credibility | Pass |
| 3 | Baikie & Wilhelm, *Emotional and physical health benefits of expressive writing*, Advances in Psychiatric Treatment 11(5), 2005, Cambridge Core (open) | **Abstract + body text on the paradigm.** Standard protocol: writing for **15–20 minutes per session across 3–5 sessions**; Pennebaker & Beall's original 1986 study was 15 minutes on 4 consecutive days. | Pass — how long people write when writing is doing work | Pass |
| 4 | DuBay, *The Principles of Readability*, 2004, ERIC ED490073 (`files.eric.ed.gov`) | **Full PDF, relevant sections.** Sherman's historical sentence-length counts: pre-Elizabethan 50 words/sentence → Elizabethan 45 → Victorian 29 → Sherman's time 23 → "in our time, the average is down to 20 words per sentence". Gray & Leary (1935), ~800 adults: **average sentence length in words correlated −.52** with reading ease, "the longer the sentence the more difficult it is". | Pass — length vs. comprehension in writing | Pass |

Peer-reviewed open-access requirement: satisfied by #2 (Frontiers, CC BY, read at PMC) and #3
(Cambridge Core, open). #1 is a peer-reviewed conference proceeding, open in the ISCA Archive. #4
is a self-published survey report hosted on ERIC — **not peer-reviewed**, and it is cited only for
what it reports about Sherman's and Gray & Leary's counts, both of which appear in the passages
actually read.

Generic context statistics used: **zero**. Wikipedia in body: **zero** (Wikipedia appears only as
`sameAs` targets in `structuredData`, which does not count against the body budget).

### Rejected

- `link.springer.com/article/10.1007/s42001-021-00153-5` (*An inclusive, real-world investigation
  of persuasion in language and verbal behavior*) — Cloudflare "Client Challenge", never read.
  Would have been a useful counterweight; not cited because it was not read.
- `iovs.arvojournals.org` IReST reading-speed paper (Trauzettel-Klosinski & Dietz 2012) and
  Brysbaert's 2019 reading-rate meta-analysis (Elsevier) — both blocked; **no reading-rate figure
  appears in the post as a result.** This is why the built-page length is stated as editorial
  judgement rather than derived from a words-per-minute number.
- Cureus reading-speed paper — reachable, but the venue's review bar was judged too low.
- `plainlanguage.gov` guideline pages — redirect to a Drupal shell on digital.gov and the guideline
  text was not recoverable.

### Cap check

`node content/batches/2026-09-24-propose-30c/capcheck.mjs` run twice (at selection and immediately
before saving). None of the four URLs is in the 332-URL ban list; no domain at or near cap.

---

## Cannibalisation — how this differs from the two named siblings

### `2026-09-23-propose-30b/blogs/propose-message-for-her.json` (wave 3)
That post is a **drafting method**: six moves, incubation, revision, an explicit stop rule, sourced
to revision and incubation research. It answers *how do I produce a message*. Mine answers *how
much*, and never gives a drafting sequence. Overlap point: it carries the FAQ "How long should a
propose message for her be?" — a single FAQ answer there is the whole page here, across four forms
it never separates. Its five sources (ICWSM, psyjournals.ru ×2, teljournal.org, jowr.org) are
banned for me and none is used.

### `2026-09-23-propose-30b/blogs/online-proposal-for-girlfriend.json` (wave 3)
That post is about **reading conditions** — a phone, one-handed, interrupted — and produces a
first-screen rule, a word *budget*, and an interruption rule. This is the real overlap risk, and
the handling is deliberate: my form 2 is the **texted message**, not a built page; my form 4 is the
built page counted in **screens**, stated as a count and not as a design rule; and I do not restate
the first-screen rule, the interruption rule or anything about how the page reads. Where a reader
wants that, the post links out and says so in one line. Its four sources are banned for me and none
is used.

Both siblings are linked by slug in the body with a one-line statement of what each covers. Those
`/blog/` paths are **not** `TEMPLATE_LINKS` entries and 404 until wave 3 publishes — recorded as a
checklist failure rather than quietly passed.

---

## Phase 5 — links and targeting

- `categorySlug`: `modern-romance` — advice post, and Propose Day sits in Valentine week, not
  `indian-festivals`.
- `templateUrls`: `/proposal` (mandatory; the long form, and the post says which reader it suits
  and which it does not), `/love-gf` (the genuine shorter alternative — in Indian usage "propose"
  usually means asking someone to be a girlfriend or boyfriend, so this is the right size for most
  of the traffic), `/catch` (the letter delivered one line at a time — the form-3 fit).
- Outbound: 4 research links, each inline at the sentence it supports.

## Verified dates

`date -j` on this machine: **Rose Day Sunday 7 Feb 2027**, **Propose Day Monday 8 Feb 2027**,
**Valentine's Day Sunday 14 Feb 2027**. Propose Day 2027 is a working Monday. Used in one FAQ only.

## Lengths recommended, and what each is traceable to

| Form | Recommendation | Traceable to |
|---|---|---|
| Spoken ask | 45–90 words of preamble, then the question; under a minute end to end | 196 WPM conversational rate (source 1) gives 14–28 seconds; the four-sentence rule is **editorial judgement**, stated as such |
| Written message | ~60 words, three sentences of about 20 | 20-word modern sentence average (source 4); the 60-word ceiling is **editorial judgement**, stated as such |
| Letter | one sitting of 15–20 minutes | expressive-writing protocol (source 3) |
| Built page | 3–5 screens | **editorial judgement**, stated as such; anchored on platform-wide 11.1 views per page and 48.3% phone share |

No research-sounding number is invented anywhere. The post says outright that no reading-rate
figure could be obtained and why.

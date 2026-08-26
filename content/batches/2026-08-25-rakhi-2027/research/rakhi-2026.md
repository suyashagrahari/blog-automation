# Research brief — `rakhi 2026` → `rakhi-2026`

Batch `2026-08-25-rakhi-2027`. Source lane **F (media & data), then D (publisher-native OA)**.
Primary assigned first-party fact: **36,202 recorded views of shared pages, average 12.2 views per created page.**

## Phase 0 — data gate

`content/facts.md` was refreshed against the live `gifts` DB on 2026-08-25 by the batch
orchestrator (17 facts). Not re-run here: ten agents share the file and a concurrent
rebuild would race.

Gate result: **passes on platform-wide facts only.** Seven facts used, four of them inside
the first 150 words. **No rakhi-specific first-party data exists** — `rakshabandhanpages`
and `rakshabandhansisterpages` hold 3 documents each, and rakhi templates account for
**39 of 36,202** recorded views (0.1%). No rate, share or "most creators" claim was computed
from that. The post says the templates are new and lightly used, and names the 39/36,202
figure in the body. Recorded as `auditReport.failed[0]`.

## Phase 1 — SERP

**WebSearch was exhausted before this agent ran** (200/200, refused on the first and only
attempt). Fallback: **Brave Search, `country=IN`**, which 429'd twice and answered on the
third try. Bing was not used — the batch brief records it collapsing modifier tokens onto
head terms, and this keyword's modifier (the year) is the whole query.

Ranking set returned for `rakhi 2026` (Brave IN, 2026-08-26), first appearance per domain:

| # | Domain | What the page is | Notes |
|---|---|---|---|
| 1 | myflowertree.com | "When is Raksha Bandhan" | **competitor** (gifting retailer) |
| 2 | timeanddate.com | holiday reference | calls it an *optional* holiday in India |
| 3 | eternz.com | date + history + rituals guide | retailer blog |
| 4 | economictimes.indiatimes.com | news: "27 or 28 August?" | date-confusion framing |
| 5 | livemint.com | news: date, muhurat, Purnima tithi | date-confusion framing |
| 6 | youtube.com | video | |
| 7 | amarujala.com / livehindustan.com / aajtak.in | Hindi date + muhurat galleries | |
| 8 | rakhi.com, rakhisale.com, rakhibazaar.com, rakhiz.com, bablarakhi.com | "when is rakhi" | **competitors** (rakhi ecommerce) |
| 9 | timesofindia.indiatimes.com | "27 or 28? correct date" | |
| 10 | caratlane.com, winni.in, fnp.com | retailer date pages | **competitors** |
| — | publicholidays.in, calendardate.com, astrozindagi.in | calendar references | |

This matches the teardown verified earlier in the session (drikpanchang, caratlane,
usarakhi.com, Wikipedia's *Rahu Ketu (2026 film)*) on **page type** — panchang, news date
pages, gifting retailers — though not on exact ordering. `drikpanchang.com` is banned
corpus-wide (5 posts) and was not fetched.

Pages actually fetched and read in full: `timeanddate.com/holidays/india/raksha-bandhan`,
`publicholidays.in/raksha-bandhan/`, `calendardate.com/raksha_bandhan_2026.htm`. The TOI
article 404'd on the URL Brave returned. Competitor pages were **not** fetched, cited or
paraphrased.

**What every one of them is optimising for:** the date, the tithi, the muhurat, and the
"27 or 28?" ambiguity. Word counts run long, the direct answer is usually in the first
paragraph, and the data cited is panchang timings.

**What none of them does:** tell the reader what to *do* about the date. Not one page in the
set states a courier cut-off, a lead time, a decision sequence, or the point at which a
physical rakhi stops being possible.

## Phase 2 — gap

**Table stakes:** the date (Friday 28 August 2026); the weekday; holiday status; the 2027
date; a plain-language statement of what Raksha Bandhan is.

**The gap:** the practical planning question. Every page answers *when*; none answers
*by when must I act, and through which route*. The lead time is the unserved sub-question.

**Stale / absent data:** the SERP has no delivery, logistics or lead-time figure at all, from
any page, at any date.

**Fan-out sub-queries → H2/H3 map:**

| Sub-query | Where it lands |
|---|---|
| when is rakhi 2026 / is it a holiday | H2 "When is Rakhi 2026, and why the weekday matters more than the date" |
| by when do I have to order / post a rakhi | H2 "How to count backwards from 28 August", H3s 1–3 |
| what if it is already too late | H2 comparison table; H3 5; FAQ 5 |
| does the Friday matter | H2 "The Friday problem, in practice" |
| when is rakhi 2027 / why does the date move | H2 "Rakhi 2027 is Tuesday 17 August — eleven days earlier" |
| is a digital rakhi a real substitute | H2 "When a countdown is the wrong tool" |

**Angle:** see `batchMeta.angle`.

## Differentiation

- **vs the concurrent `raksha bandhan 2026` post** (comprehensive dated guide: date confusion,
  Purnima tithi spanning two days, muhurat, Bhadra, state holiday status). This post states
  the date in one short factual block, gives no muhurat, no tithi and no Bhadra window, and
  spends its length on lead times instead. Zero muhurat/tithi/Bhadra content here.
- **vs `raksha-bandhan-wishes-for-long-distance-brother`** (already live): that post owns the
  IST send-time table and a "what reaches him" comparison. This one carries no time-zone
  table and no wish text at all; its table is keyed on **the latest moment you can still
  start**, which that post does not have.
- **vs `celebrate-raksha-bandhan-online-long-distance`**: that post owns "seven ways to
  celebrate online" and a courier-vs-call-vs-page cost table. This one lists no celebration
  ideas and prices nothing; it is a dated ladder.
- **vs `raksha-bandhan-wishes-link` / `raksha-bandhan-online-wishes` /
  `personalised-raksha-bandhan-website-for-sibling`**: those are about the artefact — what a
  link does, which form to send, what a page needs on it. This is about the calendar.
- **vs `25-raksha-bandhan-wishes-for-brother-who-lives-far-away`**: no wishes, no message
  text, no emotion-led framing.

Marker strings unique to this post in the batch: `T-14`, `Domestic Priority 1030`,
`384 days`, `Blue Dart`.

## Phase 3 — sources

Assigned lane **F** was worked first and found exhausted:

| Lane F repository | Outcome |
|---|---|
| `pewresearch.org` | **2/2 in this batch — FULL.** Not used. |
| `theweek.in` | banned for this agent (corpus cap). Not used. |
| `statista.com` | free tier behind a signup wall. |
| `sciencedaily.com` | search returns a JS shell; the one candidate release URL 404'd. |
| `themarkup.org` | off-subject for lead times. |
| `lokniti.org` | election surveys only. |
| `upu.int` (borrowed, UN postal body) | **every deep link redirects to the homepage** — 2IPD and postal-statistics pages both returned the front page. Unusable. |

So the two scholarly sources come from **lane D via publisher-native open archives**
(recorded in the audit). Both PDFs were downloaded and read in full — no abstract-only
reading in this post.

| Source | Domain | Lane | Verified claim |
|---|---|---|---|
| Wiese, Buehler & Griffin, "Backward planning", *Judgment and Decision Making* 11(2), 147–167, March 2016 — `journal.sjdm.org/16/16101/jdm16101.pdf` | journal.sjdm.org (**new to corpus, 1/3**) | D | Four experiments; backward planners predicted later, less biased completion times. Study 4: predicted finishing 3.25 days before deadline (SD 2.99) vs actual 2.15 days (SD 2.10), t(124) = 4.18, p < .001, n = 125; bias eliminated in the backward condition. CC-BY. |
| Ariely & Wertenbroch, "Procrastination, Deadlines, and Performance", *Psychological Science* 13(3), 219–224, 2002 — `web.mit.edu/ariely/www/MIT/Papers/deadlines.pdf` | web.mit.edu (**2/3** — 1 other post, different URL) | D | Pilot: mean self-imposed deadline 21.2 days before end of course (t(83) = 8.05, p < .001); 41.59 days for a single task. Study 1: no-choice section grades M = 88.76 > free-choice. Study 2: performance highest under evenly spaced externally imposed deadlines, lowest in the end-deadline condition (all ps significant). Author-hosted copy at MIT. |
| Blue Dart, Domestic Priority service guide — `bluedart.com/domestic-priority` | bluedart.com (**new to corpus, 1/3**) | primary source, not a competitor | "A guaranteed door-to-door time definite delivery of shipments by air the next possible business day by 10:30 hours", money-back guarantee, "to the select Pin codes in Chennai, Delhi, Ahmedabad, Mumbai, Bangalore, Navi Mumbai and Gurgaon". Undated page — no `publishedDate` emitted. |
| publicholidays.in, Raksha Bandhan | publicholidays.in (**2/3**) | date/festival reference (uncapped) | "In 2026, Raksha Bandhan falls on Friday 28 August. The holiday will be on Tuesday 17 August in 2027." 2025: Saturday 9 August. Gazetted in CG, DD, DN, GJ, HR, MP, RJ, UK & UP. Undated — no `publishedDate`. |

Rejected on caps or bans: `drikpanchang.com`, `indiapost.gov.in`, `pib.gov.in`, `doi.org`,
`arxiv.org`, `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`, `journals.sagepub.com` (3/3),
`onlinelibrary.wiley.com` (3/3), `aclanthology.org` (3/3), `archive.org` (3/3),
`escholarship.org` (3/3), `theweek.in`, `cambridge.org`. `mdpi.com` returned 403 and
`ijfmr.com` served a page shell.

## Could a courier / lead-time claim be sourced without India Post?

**Partly.** One domestic express commitment was verified from a primary, non-India-Post
source: Blue Dart's own Domestic Priority guide, which is specific enough to be useful
(next possible business day by 10:30, money-back, **select pin codes in seven named
cities**) and honest about how narrow it is.

**Nothing was verified for ordinary domestic post/courier or for international parcels.**
Blue Dart publishes those windows only behind an interactive Transit Time Finder; the
international-service URLs 404'd; `upu.int` redirects its statistics pages to the homepage;
and India Post — the actual primary source for both — is banned. So the post prints
**"Unknown — no timeframe verified from a non-India-Post source"** in two table rows and
reasons qualitatively, and FAQ 8 tells the reader to check the window with their carrier
rather than trusting a number. No delivery timeframe in this post is unverified.

## Calendar arithmetic (computed, checkable)

- 9 Aug 2025 = Saturday · 28 Aug 2026 = Friday · 17 Aug 2027 = Tuesday.
- 2025 → 2026 gap: **384 days** (the date jumps 19 days later in the month).
- 2026 → 2027 gap: **354 days** (the date moves 11 days earlier).
- 2026 backwards: T-14 Fri 14 Aug · T-10 Tue 18 Aug · T-3 Tue 25 Aug · T-1 Thu 27 Aug.
- 2027 backwards: T-14 Tue 3 Aug · T-10 Sat 7 Aug · T-3 Sat 14 Aug · T-1 Mon 16 Aug.
- Independence Day 2027 = Sunday 15 Aug, so 14–17 Aug 2027 is a Sat→Tue stretch. In 2026,
  15 Aug was a Saturday and Rakhi is 13 days later.

## Known limits

1. Phase 1 was run on Brave IN, not WebSearch (budget exhausted). Recorded in
   `honestAssessment`, not `failed`, per the batch brief.
2. Links across to the `raksha bandhan 2026` and `rakhi 2027` siblings could not be placed:
   `TEMPLATE_LINKS` holds only product template URLs and the checklist forbids internal links
   outside it. The cross-references are made in prose without anchors. If the studio ever
   allows blog-to-blog internal links, this post wants three: `raksha-bandhan-2026`,
   `raksha-bandhan-2027-wishes`, `rakhi-2027-wishes-for-sister`.
3. All first-party numbers are platform-wide. See `auditReport.failed[0]`.

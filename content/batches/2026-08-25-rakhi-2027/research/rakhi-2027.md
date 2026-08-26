# Research brief — `rakhi 2027`

Slug: `rakhi-2027` · Batch: `2026-08-25-rakhi-2027` · Written 2026-08-26
Source lane: **F (media & data), then E (Indian scholarship)** — both were largely
exhausted; see "Lane note" below for what was borrowed and why.

---

## Phase 0 — Data gate

`content/facts.md` regenerated 2026-08-25, 17 facts. **`npm run facts` was not
re-run by this agent** — ten agents share the file and re-running mid-batch would
change numbers already quoted in landed sibling posts.

Assigned primary fact: **median gap between a page's first save and its last edit
= 6.9 hours (n=931, sampled on /love-gf)**. Leads the first 150 words.

Supporting: 99.4% published-and-shared (2,956 of 2,973), 51.1% phone opens
(18,497 of 36,202), 44.2% password-protect (1,315 of 2,973), 12.2 average views
per created page, 2,973 pages across 15 page types.

**Blocked, per batch brief:** `rakshabandhanpages` holds 3 documents and rakhi
templates account for 39 of 36,202 recorded views. No statistic was computed from
either. The post says plainly, in the body, that our rakhi templates are new and
lightly used and that every number is platform-wide. Recorded in
`auditReport.failed`.

## Phase 1 — SERP analysis: NOT RUN as specified

`WebSearch` returned `200 of 200 calls used` on the single attempt permitted.
Brave Search (`country=in`) answered two queries and then hard-429'd with a
captcha schedule. Bing was not used: a control in this batch proved it strips
modifiers and serves a cached head-term SERP.

**No top-5 teardown table exists for this keyword.** What is used instead, second
hand and labelled as such:

| Finding | Verified by |
|---|---|
| `raksha bandhan 2027 wishes` returns ~6 results and **none is titled 2027**; BlueStone, iforher, vyapargrow all say 2026 | sibling agent, this session |
| Brave check on the same cluster returned ganeshaspeaks, firstcry, astroyogi, Britannica, oneindia — every one dated 2026 | sibling agent `rakhi-2027-wishes-for-sister` |
| `raksha bandhan 2027 date` is a panchang wall — dharmalok, samvat.in, Wikipedia, calendarlabs, muhuratam | batch orchestrator |
| DoPT's own 2027 central-government holiday order exists but its PDF is a scanned image (`pdftotext` yields 0 words) and the circular index lists only up to 2026 | this agent, 2026-08-26 |

Head-term note, per the skill: `rakhi 2027` is a **two-word head term** and would
normally be refused. The batch brief includes it at the user's explicit request
with tool volume for the parent (`rakhi 2025`: 22,200/mo, KD 25%). Long-tail
alternatives that were the honest recommendation and are recorded here rather than
written: `is rakhi 2027 a holiday`, `rakhi 2027 date and day`,
`what to send for rakhi when it falls on a working day`.

## Phase 2 — Gap analysis and fan-out

Derived from the sibling briefs and the keyword's own decomposition, **not** from a
live People-Also-Ask read.

**Table stakes** (any page on this keyword must carry): the date, the weekday, the
tithi/full-moon basis, whether it is a holiday.

**The gap.** Every page in the cluster — including all three siblings — treats
2027 as a *wishes* occasion. None treats it as a *scheduling* problem. Nobody
states the two facts that actually govern the week:

1. Independence Day 2027 falls on **Sunday 15 August**, and Eid e Milad and Parsi
   New Year land on the same Sunday. Three observances collapse into one weekend
   day and produce no weekday off.
2. **Monday 16 August 2027 is a working day everywhere except Odisha and
   Puducherry.** It is the only bridge-leave day, and the last office day before
   the festival.

Both were verified here, from `publicholidays.in/2027-dates/`. Neither appears on
any page in the corpus or in any sibling brief.

**Stale data superseded:** the whole SERP is dated 2026. This page is dated 2027
and structured so the 2028 re-date is four edits, not a rewrite.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| when is rakhi 2027 / what date | When is Rakhi 2027? |
| why does the rakhi date change | Why the rakhi date moves earlier every year |
| is rakhi 2027 a holiday / which states | Is Rakhi 2027 a public holiday? |
| what to do / how to plan / when to send | Six things to arrange, and the day to do each |
| rakhi 2027 week / long weekend | The week of 14–18 August 2027, day by day |
| should I send a link or a gift | When a shared page is the wrong choice |
| when is rakhi 2028 | How to re-date this plan for 2028 and 2029 |

**Angle.** Wins by being the only rakhi 2027 page that is a planning guide rather
than a wishes list — verifying the date twice, publishing the nine-state gazetted
map, naming the Sunday-Independence-Day collision nobody else states, and pacing
the plan with the 6.9-hour median edit gap.

## Date verification — done independently

| Claim | Instrument | Result |
|---|---|---|
| Rakhi 2027 = Tuesday 17 August 2027 | `publicholidays.in/raksha-bandhan/` and `/2027-dates/` | "17 Aug Tue Raksha Bandhan CG, DD, DN, GJ, HR, MP, RJ, UK & UP" |
| The Shravana full moon is on that day | US Naval Observatory Astronomical Applications API | Full Moon 17 Aug 2027, **07:29 UT = 12:59 IST** |
| Weekday arithmetic | computed locally | 17 Aug 2027 = Tue; 15 Aug 2027 = Sun; 5 Aug 2028 = Sat; 28 Aug 2026 = Fri |
| Holiday status | `publicholidays.in/2027-dates/` | gazetted in **9** states/UTs; not central |
| 2026 comparison | Positional Astronomy Centre, `festival.php?pg=9` | "28 August, 06 Bhadra, 1948 Saka Era, Friday :: Raksha Bandhana" |

`drikpanchang.com` was not fetched (banned). `samvat.in` was not fetched (2/2, full).

**What could NOT be verified, and is therefore not claimed:** the central
government's 2027 restricted-holiday annexure (DoPT's PDFs are scanned images);
any courier or postal transit time (India Post is a banned domain and no other
carrier publishes a fetchable norm) — the post says so in step 5 and in an FAQ,
and tells the reader to ring the courier; and any time-of-day sending pattern, on
which we hold no data.

## Phase 3 — Sources

| # | URL | Domain | Lane | What it carries |
|---|---|---|---|---|
| 1 | `aa.usno.navy.mil/api/moon/phases/date?date=2027-08-01&nump=6` | aa.usno.navy.mil (new) | borrowed | Full Moon 17 Aug 2027, 07:29 UT |
| 2 | `packolkata.gov.in/festival.php?pg=9` | packolkata.gov.in (new) | E | Raksha Bandhana 28 Aug 2026, 06 Bhadra 1948 Saka; Rashtriya Panchang since 1879 Saka Era |
| 3 | `publicholidays.in/raksha-bandhan/` | publicholidays.in (1→2) | F | 2026/2027/2028 dates + state lists; 2028 adds TG, drops CG |
| 4 | `publicholidays.in/2027-dates/` | publicholidays.in | F | 15/16/17 Aug 2027 holiday map |
| 5 | `docs.iza.org/dp2089.pdf` | docs.iza.org (new) | borrowed (D-ish) | Merz & Osberg, *Keeping in Touch: A Benefit of Public Holidays*, IZA DP 2089, Apr 2006 |
| 6 | `web.mit.edu/ariely/www/MIT/Papers/deadlines.pdf` | web.mit.edu (new) | borrowed | Ariely & Wertenbroch, Psych Science 13(3), May 2002, 219–224 |

Full text was read for 5 and 6 (both PDFs extracted with `pdftotext`); nothing
here is abstract-only. **IZA DP 2089 is a discussion paper** and its own front
matter says such papers "represent preliminary work"; the post attributes it as a
working paper. Ariely & Wertenbroch is the peer-reviewed, openly readable one.

Numbers taken, verbatim-checked:
- IZA 2089: "in ... Länder with three extra public holidays, on a normal
  non-holiday weekday the average 25 to 54 year old spent 37% more time going out
  for entertainment, 21% more time going to meetings and 6% more time in all types
  of non-work activity involving others outside the household." Also: 13→17
  holidays across Länder = "a 30% differential in non-weekend co-ordinated leisure
  time"; ~7.5 additional social engagements a year. Data: German Time Use Study
  2001/02, 37,700 diaries from 12,600 persons.
- Ariely & Wertenbroch: self-imposed deadlines are set and do improve performance,
  "but they are not as effective as some externally imposed deadlines".

### Lane note — lane F was already spent, and lane E's repository is saturated

Assigned F, then E. What was actually available on 2026-08-26:

- `pewresearch.org` — **2/2, full** (`rakhi-2027-wishes-for-sister`,
  `what-to-write-in-raksha-bandhan-card`).
- `theweek.in` — 3 corpus-wide, at cap. Not used.
- `sciencedaily.com`, `statista.com` — JS-rendered / signup wall, per the prior
  agent's note; not retried beyond confirmation.
- `lokniti.org` — election surveys only.
- `themarkup.org` — 1/3 and fetchable, but nothing on this subject.
- Lane E: `archive.org` is **4 posts corpus-wide, saturated**. `shodhganga`
  simple-search, `epgp.inflibnet.ac.in` and `ijcrt.org` search all returned no
  usable topical hit for calendar/festival-timing queries. `packolkata.gov.in`
  (Positional Astronomy Centre, IMD) was used as lane E's Indology/calendar
  holding instead — new to the corpus, 1 post.

So three of six sources are borrowed from outside both lanes: `aa.usno.navy.mil`,
`docs.iza.org`, `web.mit.edu`. All three are new to the corpus. **`docs.iza.org`
is the find worth passing on** — IZA discussion papers are free, text-extractable
PDFs at the predictable path `https://docs.iza.org/dp<N>.pdf`, and the series
covers time use, holidays, leisure co-ordination and family contact. It is the
best remaining route for any post in this cluster that needs labour-economics or
time-use evidence.

Discovery instruments that worked on 2026-08-26: Crossref
(`api.crossref.org/works?query.bibliographic=`), Unpaywall, and Brave for exactly
two queries. Instruments that did not: DOAJ's article API returned 0 for every
lucene query tried (`"luni-solar" AND calendar`, `festival AND weekday`,
`"public holiday" AND leave`, `"Hindu calendar" AND intercalation`,
`Purnima OR Shravana`); `timeanddate.com` 403s behind Cloudflare after one
successful hit; `research.aalto.fi` 403s; `iser.essex.ac.uk` DNS-fails;
`doptcirculars.nic.in` needs TLS verification disabled and its holiday PDFs are
scans.

## Phase 4–5 — build notes

- 1,780 words in `contentMarkdown`, FAQs excluded (they live only in
  `article.faqs`). 8 H2s including Sources, 6 H3s.
- Comparison table is the 14–18 August 2027 week, 5 rows × 4 columns, every value
  verified; the fourth column is first-party.
- `categorySlug`: `indian-festivals`.
- `templateUrls`: `/happy-rakshabandhan-to-sister`,
  `/happy-rakshabandhan-to-brother`, `/templates` — both directions, because a
  planning guide has no single recipient. All three are in `TEMPLATE_LINKS`.
- Internal links sit in the final body section, after the plan and the downside.
- Zero Wikipedia links in the body (the domain is at 3 corpus-wide). Wikipedia
  appears only in `sameAs`, which the skill does not count, and every QID was
  checked against the Wikipedia API: Raksha Bandhan Q10266, Hindu calendar
  Q190552, Public holidays in India Q927083, Independence Day (India) Q56106,
  United States Naval Observatory Q11700. "Positional Astronomy Centre" has no
  Wikipedia article and was therefore left out of `mentions`.
- `structuredData`: one `@id`-matched enrichment block on `<canonicalURL>#post`
  with `about`/`mentions`/`citation` (6 citations, mirroring `sources`
  one-to-one), plus one `ItemList` mirroring the six H3s in order. No
  renderer-built type without a matching `@id`; no AggregateRating, Review or
  HowTo.

## Phase 6 — audit summary

`passed` 47 · `failed` 3 · disjoint · 47 + 3 = 50.

Failed:
1. *At least 3 first-party facts appear, and at least 2 are in the first 150
   words* — literally satisfied, flagged deliberately per the batch brief: all
   figures are platform-wide, not rakhi-specific (n=3 collection). Closes when
   rakhi usage passes ~500 pages.
2. *No section closely mirrors a competitor page's structure or framing* — the top
   five pages were never fetched; WebSearch exhausted, Brave 429. Closes on a
   re-run of Phase 1 with a working instrument.
3. *No source passes the swap test* — `publicholidays.in/raksha-bandhan/` is a
   portable multi-year date table that already appears in a sibling post. Kept
   under the checklist's date/festival fact-check exemption, and not claimed as
   research.

## Differentiation verdict

- vs `raksha-bandhan-2027-wishes` — that post is six sibling-type wish sets. No
  overlap beyond the shared date sentence.
- vs `raksha-bandhan-2027-quotes` — portable unaddressed lines and the linguistics
  of memorability. No overlap.
- vs `rakhi-2027-wishes-for-sister` — the closest, because it also uses the
  working-Tuesday point. It uses it as *framing for wishes from a brother*; this
  post uses it as the *subject*. This post adds the Independence-Day-on-Sunday
  collision, the Monday-16-August bridge day, the day-by-day week table, the
  USNO full-moon instant, the eleven-then-twelve-day drift arithmetic and the
  2028 state-list change — none of which are in that file. It contains no wishes
  and no message templates. **Not a twin.**
- vs the concurrent `raksha bandhan 2026` (comprehensive dated guide) and
  `rakhi 2026` (lead times and cut-offs) — those are the 2026 cycle. This is the
  forward-looking one and states no delivery timeframe at all, which is the
  boundary that keeps it off `rakhi 2026`'s ground.

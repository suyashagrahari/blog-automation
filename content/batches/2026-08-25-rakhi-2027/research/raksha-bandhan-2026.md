# Research brief — `raksha bandhan 2026`

- **Slug:** `raksha-bandhan-2026` — checked against Strapi 2026-08-26, `total: 0`. Free.
- **Volume (TOOL, user-supplied):** `raksha bandhan 2025` = 40,500/mo, KD 30%. The
  2026 variant inherits that head-term demand.
- **Category:** `indian-festivals`. **Lane:** F (media & data), then E.
- **Assigned primary first-party fact:** 2,973 personalised pages across 15 page
  types, by 2,466 registered creators.

---

## Phase 0 — data gate

`content/facts.md` (regenerated 2026-08-25) carries 17 facts. **There is no
rakhi-specific first-party data**: `rakshabandhanpages` = 3 documents,
`rakshabandhansisterpages` = 3, rakhi template views = 39 of 36,202. Per BRIEF.md,
no statistic may be computed off n=3, and none is.

Gate passes on platform-wide facts only, and that is recorded as a real weakness in
`auditReport.failed`. Facts used:

- 2,973 pages / 15 page types (primary, in the first 150 words)
- 2,466 registered creators (secondary, in the first 150 words)
- 51.1% of shared pages opened on a phone (18,497 of 36,202)
- 12.2 average views per created page
- 99.4% of started pages published and shared (2,956 of 2,973)
- Template mix: love-gf 931 / 31.3%, bouquet-gf 732 / 24.6%, apology-dashboard
  628 / 21.1%, birthday-gf 188 / 6.3%

The 3-pages / 39-views rakhi figure is stated in the post as a raw count, framed as
too small to conclude from. It is the post's downside block.

---

## Phase 1 — SERP analysis

**WebSearch was exhausted (200/200) before this post started.** One call was
attempted and refused. Fallback instrument: **Brave Search, `country=in`** (Bing was
not used — a control earlier in this batch proved it strips modifiers). Brave
returned 429 on one of three queries and answered after a 12 s backoff.

Two SERP readings are on record for this keyword:

**(a) Verified earlier this session for the bare head term `raksha bandhan 2026`:**
brut.media, drikpanchang.com, two YouTube videos, ibtimes.co.in, eternz.com,
calendardate.com, rakhi.com, rakhiz.com.

| Result | Type | What it optimises for | Weakness |
|---|---|---|---|
| drikpanchang.com | Panchang engine | Tithi/muhurat computation | The ranking result was titled **"…for Berlin, Berlin, Germany"** — a geo-mismatched page holding a top slot on an India query |
| calendardate.com | Calendar stub | Date only | No muhurat, no Bhadra, no holiday status |
| rakhi.com / rakhiz.com | Ecommerce | Rakhi sales | Date is a pretext for a product grid |
| two YouTube results | Video | Watch time | Not extractable as text by an answer engine |
| brut.media, ibtimes.co.in | Media | Topical news | Thin on timings |
| eternz.com | **Jewellery brand's blog** | Content | **Proof a content page can enter this SERP** |

**(b) Brave `country=in`, query `raksha bandhan 2026 27 or 28 august bhadra kaal`
(2026-08-26):** timesofindia.indiatimes.com, livemint.com,
economictimes.indiatimes.com, aajtak.in (×3), amarujala.com, livehindustan.com (×2),
ndtv.in, goodreturns.in, jansatta.com (×2), newsx.com, hindi.asianetnews.com,
ntvtelugu.com, academyofvedicvidya.com, astrozindagi.in.

That second set is the finding that matters. **Every major Indian outlet published a
"27th or 28th?" explainer within the same fortnight.** The dominant intent behind
`raksha bandhan 2026` is not greetings — it is date disambiguation. Confirmed
independently by the Hindi headline pattern (`27 or 28 august`, `kab hai`) and by
Facebook video titles literally saying "तारीख को लेकर … भ्रम है" (there is confusion
about the date).

**Format audit of the news cluster:** answer-first (date in the standfirst), one
timings table, Delhi-only muhurat, 600–900 words, no city breakdown, no holiday
table, no astronomical cross-check, byline usually an astrologer or a news desk.

---

## Phase 2 — gap analysis

**Table stakes** — present on every page in cluster (b), so mandatory here: the
28 August 2026 date; Purnima tithi start and end; the Delhi shubh muhurat
5:57–9:48 AM; a plain statement about Bhadra; Aparahna and Pradosh fallbacks.

**The gaps.** None of the pages read does any of the following:

1. **Muhurat by city.** All of them print one Delhi window. The closing time is a
   tithi instant and therefore *national*; the opening time is local sunrise and
   therefore *not*. Kolkata gets 4 h 27 m, Mumbai gets 3 h 22 m — a 65-minute
   spread nobody tables. This is also the precise failure mode of the
   Berlin-computed panchang page holding a top slot.
2. **Holiday status.** Raksha Bandhan is a **restricted** holiday centrally, and a
   public/regional holiday in only nine states and UTs. No page in the SERP tables
   this, and the primary circular is fetchable.
3. **An independent astronomical cross-check.** Purnima ends when the moon is
   exactly full. NASA's lunar-eclipse canon puts greatest eclipse on 28 August 2026
   at 04:14:04 TD = **09:44 IST**, four minutes from the panchang's 09:48 IST tithi
   end. Two independent computations, agreeing to four minutes. Nobody does this.
4. **What is different about 2026 specifically** — the partial lunar eclipse, and
   the fact that 28 August is the second-latest Raksha Bandhan of the 2020s.
5. **A re-datable structure.** Every page in the cluster is a news article with a
   one-year shelf life.

**Stale data:** not the issue here — the cluster is days old. The issue is
*shallowness*, not age.

**Unanswered questions the pages raise and drop:** whether Aparahna is valid at all
once Purnima has ended at 09:48 AM; what a reader outside Delhi should actually do;
whether the eclipse triggers sutak in India.

**Fan-out sub-queries → H2/FAQ map:** is it the 27th or 28th · what is the muhurat ·
does Bhadra affect it · what time in my city · is it a holiday / in which states ·
is there an eclipse · can rakhi be tied after 9:48 · afternoon and evening windows ·
when is Rakhi 2027 · why does the date move.

**Angle:** wins by being the only page that prints the Raksha Bandhan 2026 muhurat
city by city — showing the 9:48 AM close is national while the open is local sunrise
— and cross-checks that instant against NASA's eclipse canon to four minutes.

---

## Phase 3 — sources

Lane F was assigned. **Lane F's named repositories were all unusable for a dated
guide**: `theweek.in` is at 2/3 with its only relevant URL at the 2/2 cap and is
about WhatsApp storage; `pewresearch.org` is full at 2/2; `sciencedaily.com` and
`statista.com` carry nothing on Hindu calendrical timing; `lokniti.org` publishes
election surveys; `themarkup.org` is about web tracking. Lane F was therefore worked
as *media & data* in substance — Indian national newspapers, which is where 2026
muhurat reporting actually lives — plus two primary references that sit outside every
lane (a Government of India holiday circular and NASA's eclipse canon). **Lane E was
not used at all:** Indology scholarship (`shodhganga`, `ijcrt`, `archive.org` — the
last saturated at 3/3 anyway) documents the rite's history, not a 2026 tithi.

Search terms tried for scholarly work on this angle and abandoned: `Shravan Purnima
tithi determination udaya`, `Bhadra Vishti karana muhurta calculation`, `Hindu
luni-solar calendar festival date variance India`, `panchang ayanamsa discrepancy
festival timing`. There is no open-access peer-reviewed paper that fixes a 2026
muhurat, and no honest way to pretend otherwise.

**Cap position — every domain below is new to the corpus (0 prior posts).**

| # | URL | Domain | Lane | What it verifies | Published |
|---|---|---|---|---|---|
| 1 | livemint.com — Raksha Bandhan 2026 date, August 27 or 28 | livemint.com | F | Purnima 9:08 AM 27 Aug → 9:48 AM 28 Aug (Delhi); **Bhadra falls on 27 Aug and ends before sunrise on 28 Aug, so it does not overlap the Rakhi window**; Delhi 5:57–9:48 AM; Gurgaon 5:58–9:48; udaya-tithi rule; Aparahna ~1:46–4:20 PM | 2026-08-25 |
| 2 | timesofindia.indiatimes.com — Is Raksha Bandhan on August 27 or 28? | timesofindia.indiatimes.com | F | Friday 28 August 2026; Bhadra on 27 Aug "continues till dusk"; New Delhi muhurat 5:57–9:48 AM = 3 h 51 m; byline Acharya Neeraj Dhankher | 2026-08-22 |
| 3 | latestly.com — Is it a public holiday in your state? | latestly.com | F | Restricted holiday for central government employees; public/regional holiday in Chhattisgarh, Dadra & Nagar Haveli, Daman & Diu, Gujarat, Haryana, MP, Rajasthan, Uttarakhand, UP; bank holiday in five of those | 2026-08-05 |
| 4 | prokerala.com — Raksha Bandhan festival page (`?loc=`) | prokerala.com | date reference (uncapped) | Purnima 09:09 AM 27 Aug → 09:48 AM 28 Aug; muhurat **Kolkata 05:21, Delhi 06:01, Chennai 06:01, Bengaluru 06:12, Ujjain 06:11, Mumbai 06:26 — all closing 09:48**; Delhi Aparahan 01:38–04:11 PM, Pradosha 06:43–08:59 PM; 2020–2030 date table (2025 Sat 9 Aug, 2026 Fri 28 Aug, 2027 Tue 17 Aug, 2028 Sat 5 Aug) | none stated |
| 5 | dfe.gov.in — List of Restricted Holidays 2026 (PDF) | dfe.gov.in | primary / government (the one allowed) | Item **22 of 35** restricted holidays: "Raksha Bandhan — August 28 — Friday". CGEWCC circular of DoPT OM No. 12/2/2023-JCA | circular 2025 (date OCR-garbled in the scan) |
| 6 | eclipse.gsfc.nasa.gov — Lunar Eclipses: 2021–2030 | eclipse.gsfc.nasa.gov | primary / astronomy | 2026 Aug 28, greatest eclipse **04:14:04 TD**, Partial, Saros 138, umbral magnitude 0.930, duration 03h18m, visible eastern Pacific / Americas / Europe / Africa — **India not listed**. 2027 Aug 17, 07:14:59 TD, Penumbral, Saros 148 | undated reference publication |

**BANNED and not used:** `drikpanchang.com` (5 posts corpus-wide), `indiapost.gov.in`,
`pib.gov.in`, `trai.gov.in`, `doi.org`, `europepmc.org`, `journals.plos.org`,
`digitalcommons.usu.edu`. **At/over cap and not used:** `pmc.ncbi.nlm.nih.gov`,
`arxiv.org`, `unicode.org`, `archive.org`, `aclanthology.org`, `escholarship.org`,
`journals.sagepub.com`, `frontiersin.org`, `research.ed.ac.uk`, `theweek.in`,
`cambridge.org`, `hbs.edu`, `w3.org`, `lrec-conf.org`, `en.wikipedia.org`.

**Fetched and deliberately rejected:** `mpanchang.com` (confirmed 2027 = 17 August
2027 (Shravana), but prokerala's own 2020–2030 table gives the same fact and keeps the
source list at six); `publicholidays.in` (page still says "In 2025, Raksha Bandhan will
be celebrated…", and it is already used by `rakhi-2027-wishes-for-sister`);
`simpliance.in/…/rajasthan/2026` and `greythr.com` UP list (both corroborate "Raksha
Bandhan, 28/08/2026, Friday, Regional" — kept as corroboration, not cited, to hold the
6-source cap); `cdnbbsr.s3waas.gov.in` PDF (turned out to be a single Kendriya
Vidyalaya's holiday list — too narrow to cite, though it too shows "Raksha Bandhan
(RH) 28/08/2026 Friday"); `rbi.org.in` holiday matrix (year context ambiguous on the
page returned); `timeanddate.com` (403); `hindupad.com`, `astrosage.com` (404).

**A note on prokerala's own prose:** its narrative paragraph says "In 2026, Raksha
Bandhan will be observed on August 26" while its panchang table on the same page says
28 August. **Only the table is cited.** That is exactly the kind of unreviewed
calendar-site error this post exists to be better than.

**Discrepancies stated openly in the post rather than smoothed over:**
Delhi muhurat opens at 5:57 AM per livemint/TOI and 6:01 AM per prokerala — a
four-minute difference in the sunrise/ayanamsa convention. Purnima start is 9:08 AM
(livemint, Delhi) vs 09:09 AM (prokerala). Aparahna is 1:38–4:11 PM (prokerala Delhi)
vs ~1:46–4:20 PM (livemint). None of these is an error to hide; the spread *is* the
reader's real problem.

---

## Phase 5 — targeting

- `categorySlug`: `indian-festivals` (verified live in Strapi).
- `templateUrls`: `/happy-rakshabandhan-to-brother`, `/happy-rakshabandhan-to-sister`,
  `/templates` — all three in `TEMPLATE_LINKS`. Recipient-neutral keyword, so both
  directions are legitimate. Links placed in the last third only.
- Sibling 2027 posts (`raksha-bandhan-2027-wishes`, `raksha-bandhan-2027-quotes`,
  `rakhi-2027-wishes-for-sister`) are **named in prose, not hyperlinked** — they are
  not live yet and `TEMPLATE_LINKS` is the only permitted internal-link source.
- `structuredData`: `ItemList` mirroring the three H3s under "If you miss the
  9:48 AM window", plus an `@id`-matched `#post` enrichment block carrying
  `citation` (6 entries, one per source), `about` (Raksha Bandhan, Q10266) and
  `mentions` (Tithi Q1427958, Hindu calendar Q190552, Lunar eclipse Q44235, Goddard
  Space Flight Center Q52152). All five QIDs verified against the Wikipedia API on
  2026-08-26.

## Differentiation from siblings

`raksha-bandhan-2027-wishes`, `raksha-bandhan-2027-quotes`,
`rakhi-2027-wishes-for-sister` are wishes/quotes pages; `how-raksha-bandhan-started`,
`why-raksha-bandhan-is-celebrated`, `how-raksha-bandhan-is-celebrated` are
history/ritual explainers. **None is a dated guide.** This post carries no wishes, no
quotes and no origin legend. The concurrent `rakhi 2026` post takes the short-name
query; this one is the full-name query and is the more comprehensive of the two —
city table, holiday table, eclipse cross-check and the re-dating instructions live
here.

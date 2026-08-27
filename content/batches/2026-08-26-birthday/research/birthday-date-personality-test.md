# Research brief — `birthday date personality test`

- **Slug:** `birthday-date-personality-test`
- **Batch:** `2026-08-26-birthday` (wave 3, rank 2 of 30)
- **Lane:** **I** — Barnum/Forer effect, validity and replication of date-based personality claims
- **Category:** `milestone-birthdays`
- **Demand:** 429 expected clicks/mo, 29 autocomplete prefixes — the highest-value keyword in the 30-keyword run
- **Written:** 2026-08-27

---

## Phase 0 — data gate

Satisfied by `BRIEF-WAVE3.md` section 1, not by a fresh probe. This keyword was held on the
gate through waves 1 and 2 because no first-party data existed for it. The 2026-08-27
read-only probe of `birthdaygfpages` measured the recorded birthday-date field for the first
time (209 pages, 182 with a date), which makes the day-of-month reducible to a numerology
birth number (*mūlānk*) and gives the post a measurement of its own.

First-party facts used (all measured 2026-08-27 unless noted):

1. 182 of 209 birthday pages carry a recorded birthday date.
2. Birth-number distribution across those 182 dates: 1 → 20 (11.0%), 2 → 24 (13.2%),
   3 → 19 (10.4%), 4 → 13 (7.1%), 5 → 19 (10.4%), 6 → 20 (11.0%), 7 → 29 (15.9%),
   8 → 21 (11.5%), 9 → 17 (9.3%).
3. χ² against a uniform day-of-month = **14.53 on 8 df**; critical value at p=.05 is 15.51 —
   **not significant**. Two independent cuts agree: 56 rows with a plausible year of birth
   (1990–2012) give χ²=14.07; the 126 rows where the year is the upcoming occurrence give
   χ²=5.24.
4. Lead time: median 0 days; **91 of 182 (50.0%) created on the birthday itself**; 114 (62.6%)
   on the day or the day before; **23 (12.6%) created after the birthday had passed**.
5. Quiz built on 98.5% of birthday pages, played on only **14.4%** (28 of 195) — measured
   2026-08-26.
6. Median personal message 96 characters (n=197); median build 0.9 hours; 48.6% of birthday
   views are mobile — measured 2026-08-26.

**Disclosed limitations (in the body, not only the audit):** days 1–15 hold only 28.0% of the
dates where 48.4% would be expected, and the skew persists in the clean birth-year subset
(32.1%, n=56), so it is not explained by launch timing and is not understood; only 56 of 182
rows carry a plausible year of birth, so this is a sample of birth *days and months*, not full
birth dates; 32 of 182 (17.6%) have a birthday identical to the page's creation date; n=182
supports the aggregate uniformity finding and **nothing about any individual number**.

---

## Phase 1 — SERP (supplied, harvested in a real browser at `gl=in`, `hl=en`, `pws=0`, 2026-08-27)

WebSearch was not called — the session budget is exhausted at 200/200. AI Overview: **present**.
9 results.

| # | Domain | Title | Format | Direct answer? | Data cited | Notes |
|---|---|---|---|---|---|---|
| 1 | thecalculator.co | Personality Test by Date of Birth | Calculator tool | Tool output, no prose answer | none | Interactive form; no evidence, no dates |
| 2 | kabalarians.com | What Does My Birthday Say About Me | Lead-gen page | No | none | 1990s-era "Society of Kabalarians" site; free name report funnel, paid courses, phone number in header |
| 3 | allgpts.co | Birthday Personality Test | GPT wrapper | No | none | Third-party GPT directory listing |
| 4 | destinymatrics.com | Free Personality Test by Date of Birth | Calculator tool | Tool output | none | Destiny-matrix generator |
| 5 | youtube.com | What Your Birth Date Says About Your Personality | Video | n/a | none | Video holds a top-5 slot |
| 6 | astroyogi.com | Free Personality Number Calculator by DOB | Calculator + funnel | Tool output | none | Routes to paid astrologer chat |
| 7 | astrosage.com | All about Birth Date Astrology | Content + funnel | Partially — one intro paragraph | none | Read in full. Asserts "Astrology is a science which correlates the events on earth with the movements of the celestial bodies"; the page is a routing hub to Dasha, Sade Sati, Nakshatra Phal and Varshphal reports plus "Chat with Astrologer" and OTP sign-up. No study, no number, no date anywhere |
| 8 | jagranjosh.com | Personality Test: Born on 2nd, 11th, 20th, 29th? | Listicle article | Yes, per-number | none | The only conventional article ranking; proves a content page can hold this SERP |
| 9 | timesofindia.indiatimes.com | What color reflects your true personality? by birth… | Quiz/engagement | Yes, per-number | none | Colour-by-birth-date quiz |

**People Also Ask:** "Is 7 a lucky birth date?" · "Can I check my personality based on my date
of birth?" · "Which birthday date is lucky?" · "What is a powerful date of birth?"

**Honesty note on Phase 1 depth.** Two of the nine pages were opened and read in full
(`astrosage.com/astrology/birth-date-astrology.asp`, `kabalarians.com`). The remaining seven
were characterised from the supplied SERP metadata (title, domain, position) plus the format
each domain publishes, because no live search tool was available to resolve their exact URLs
and two URL guesses landed on unrelated pages (`thecalculator.co` returned an Ellipsoid Volume
Calculator). The gap analysis below is therefore firm on format and evidence-density — which is
the axis the angle turns on — and weaker on the exact heading order of the seven pages.

---

## Phase 2 — gap analysis

**Table stakes.** Every page gives a reading per birth number or per date; every one explains
(or silently assumes) the reduce-to-a-single-digit calculation; all address the four PAA
questions about lucky and rare dates in some form.

**The gap — nobody measures anything.** Four of nine results are calculators or generators, one
is a video, one is a 1990s lead-gen page, two are astrology portals that assert astrology is a
science, and one is a listicle. **Across all nine there is not one sample size, not one
statistical test, and not one citation to a study.** Two separate absences follow:

1. No page explains *why* the reading feels accurate. The Barnum/Forer effect is the whole
   mechanism of this SERP's product and no result names it.
2. No page has a frequency count of real birth dates. The PAA asks which date is lucky and
   which is rarest; every result answers by assertion.

**Stale data.** Not applicable in the usual sense — there is no data on these pages to be
stale. `kabalarians.com` is stale as an artefact (site architecture and copy predate 2000).

**Unanswered questions.** Is a birth number actually rarer than others? Does a date-derived
compatibility claim hold at scale? Why does a generic description score as accurate?

**Fan-out sub-queries → H2s and FAQs.** What a birthday date personality test measures ·
how the birth number is calculated · what each number traditionally means · why the description
feels accurate (Barnum) · is it scientific / has it been tested · which birth date is lucky ·
what is the rarest birth number · does zodiac compatibility predict divorce · what to send
instead when you have hours, not days.

**Angle (one sentence).** Wins by being the only post that gives the traditional birth-number
reading, then tests it against 182 real birthday dates entered by Indian users — the nine
numbers arrive at rates indistinguishable from chance, χ²=14.53 on 8 df — and explains, with
the Barnum-effect literature, why the reading felt accurate anyway.

**Lane discipline.** `birthday-number-meaning-numerology` (lane H) owns numerology and number
superstition as cultural practice. This post cites none of that literature. Every scholarly
source here is about *validity* or *acceptance of vague feedback*.

**Cannibalisation.** 2 shared SERP results with `birthday-number-meaning-numerology`, below the
3-result threshold. No live SubhSandesh post covers date-based personality claims.

---

## Phase 3 — sources (5, all fetched and read in full text)

| # | Source | Domain (in-batch count after this post) | What it gives | Test |
|---|---|---|---|---|
| 1 | Helgertz & Scott, "The validity of astrological predictions on marriage and divorce", *Genus* 76:34, 2020-10-19, CC BY 4.0 | genus.springeropen.com (1/3) | Swedish register data, ~500,000 individuals 1968–2001; 66,063 marital unions across 144 zodiac-sign combinations (mean 458.8 per combination); divorce analysis on 46,326 unions with 14,920 divorces; pseudo R² 0.000; "results fail to provide any consistent evidence" for compatibility affecting partner choice or divorce risk | **Required lane-I scholarly source.** Subject ✓ (validity of a date-of-birth claim) · Swap ✗ (fits no sibling) |
| 2 | Poškus, "A new way of looking at the Barnum effect…", *Psichologija* 50, 2014 | journals.vu.lt (2/3) | 359 students recruited, four randomised feedback groups (final N: 61 real-profile, 64 inverted, 60 positive, 58 universally valid); accuracy rated 1–7; Kruskal–Wallis H(3)=29.333, p<0.01, with actual, positive and universally valid feedback rated equally accurate and only inverted feedback rated lower | Barnum core, peer-reviewed, open. Subject ✓ · Swap ✗ |
| 3 | Pennycook, Cheyne, Barr, Koehler & Fugelsang, "On the reception and detection of pseudo-profound bullshit", *Judgment and Decision Making* 10(6), 549–563, Nov 2015 | cambridge.org (2/3) | Randomly assembled buzzword sentences with no meaning rated 2.72 of 5 (SD .90) for profundity against 3.05 (SD .69) for genuine motivational quotations; mundane control statements 1.44 (SD .78) | Mechanism of vague-statement acceptance. Subject ✓ · Swap ✗ |
| 4 | Edwards, March, Willoughby & Giannelis, "Intelligence and Individual Differences in Astrological Belief", *Journal of Individual Differences* 46(1), 50–57, published 2025-02-01 | pure.eur.nl (1/3) | n=8,553 Americans, General Social Survey; intelligence (Wordsum) the largest effect size and a negative predictor of astrological belief; education also predicts disbelief; religiosity and spirituality null; scientific trust null | Who believes and why. Subject ✓ · Swap ✗ |
| 5 | Peacock, Afzal, Asopa, Clement & Sochart, "Is success written in the stars? The effect of zodiac sign on the outcome of total knee arthroplasty", *NZMJ* 136(1572), 2023 | nzmj.org.nz (1/3) | 509 TKA patients Jan 2019–Dec 2020, zodiac assigned from date of birth; scattered "significant" hits (Pisces best pre-op EQ-5D 0.595, Aries/Gemini worst 0.366, p=0.038); authors state the findings "are the result of multiple testing in a large dataset following a data trawl" | The multiple-comparisons warning, applied to my own 9-way table. Subject ✓ · Swap ✗ |

**Generic context statistics: 0.** No PIB/TRAI/Census/MEA figure is used.
**Wikipedia: 0 body links.** Barnum effect (Q653175), Numerology (Q140732), Astrology (Q34362)
and Birthday (Q47223) are used only as verified `sameAs` in `about`/`mentions`, checked against
the Wikipedia API on 2026-08-27.

**Per-batch caps re-measured from the repository root on 2026-08-27, after siblings claimed
their reservations.** `corpora.uni-leipzig.de` and `r12a.github.io` are both at 2/3 and
reserved to `birthday-wishes-for-uncle` and `birthday-wishes-in-kannada` respectively — neither
is used here. None of my five domains was at cap: `cambridge.org` and `journals.vu.lt` were at
1 of 3 and move to 2 of 3; the other three were at 0.

**Searches that did not yield a usable source.** Forer's original 1949 *Journal of Abnormal
Psychology* demonstration is paywalled at PsycNet with no open version located via OpenAlex, so
it is described in the body without a citation, as common history rather than a sourced
statistic. An OpenAlex query for `sun sign self-attribution personality horoscope` (is_oa:true)
returned mostly history-of-astrology work, not replications. A 2022 eye-tracking Barnum paper
(`francis-press.com`) was rejected on venue quality. An ACM CHI 2023 Barnum paper
("'Specially For You'", doi 10.1145/3544548.3580656) was rejected because dl.acm.org returned
403 and the full text could not be verified.

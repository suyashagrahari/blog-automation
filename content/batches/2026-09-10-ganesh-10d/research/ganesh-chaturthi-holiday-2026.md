# Research brief — `ganesh chaturthi holiday 2026` — **ABORTED (cannibalisation gate, BRIEF §3)**

- **Batch:** `2026-09-10-ganesh-10d` (Ganesh Chaturthi wave 4)
- **Slug that was assigned:** `ganesh-chaturthi-holiday-2026`
- **Gated against:** `content/batches/2026-09-09-ganesh-10/blogs/ganesh-chaturthi-2026-date.json`
  (`batchMeta.keyword` = `ganesh chaturthi 2026`)
- **Run date:** 2026-09-10
- **Outcome: ABORT. No blog JSON was written.** BRIEF §3 step 3: "3 or more shared
  results = one keyword. Abort, and write the research brief explaining it. Do not
  write a thinner second post on the same SERP."
- **Shared top-result count: 3 on Google (via `WebSearch`), 3 on DuckDuckGo.**
  Both engines independently hit the threshold.

---

## 1. Phase 0 — fact gate: **CLEARS** (it is not the reason for the abort)

`content/facts.md`, regenerated 2026-09-09, was read as it stands. `npm run facts`
was **not** run, per the assignment and BRIEF §1.

The keyword clears the gate comfortably. Facts relevant to a *working/public-holiday*
angle, at least two of which could sit inside the first 150 words:

1. `Raksha Bandhan 2026 lead time, both rakhi collections, n = 89 pages, IST calendar days: 49.4% built on the festival day itself, 27.0% the day before, 5.6% two to three days ahead, 6.7% four or more days ahead, 11.2% after it had passed; median lead time 0 days — measured 2026-09-09`
2. `Of the 79 Raksha Bandhan 2026 pages finished in time, 55.7% were built on the day itself and 86.1% within 24 hours of it — measured 2026-09-09`
3. `3,894 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-09`
4. `49.6% of shared pages are opened on a phone (22,817 of 46,005 views) — measured 2026-09-09`
5. `Occasion-dated pages, every festival plus every wedding type, are 144 of 3,894 pages, 3.7%; the platform is 96.3% romantic and everyday pages — measured 2026-09-09`
6. `No Ganesh Chaturthi page-creation data exists at all: the /happy-ganesh-chaturthi template went live 2026-09-10, four days before the festival — measured 2026-09-10`

The lead-time lines are the genuinely on-angle ones: a day where 49.4% of pages are
built on the festival day itself is a behavioural fingerprint of a day off work. Had
the post been written, **both BRIEF §1 disclosures would have been required in body
prose** — that the measurement is Raksha Bandhan and not Ganesh Chaturthi (a
different festival, and a one-day one against Ganesh Chaturthi's ten), and that
n = 89 is too small to derive any per-template, per-region or per-language rate.

**So Phase 0 is not the blocker. §3 is.**

---

## 2. Phase 1 — SERP measurement, both keywords

### Tool limitation, recorded up front

`WebSearch` is **US-locale only** — there is no `gl=in` parameter. An India-intent
keyword like this one may return a materially different real SERP in India from what
was measured here. This is recorded per BRIEF §4 and it cuts **both** ways: it could
mean the true India SERPs are more separated than measured, or less. The
DuckDuckGo run in §2.3 is the second, independent measurement taken partly to
offset this.

Neither engine returned a full ten organic results; the counts below are honest
about the denominators.

### 2.1 `ganesh chaturthi holiday 2026` — Google via `WebSearch` (9 results)

| # | Domain | Asset |
|---|---|---|
| 1 | kissht.com | `/blog/ganesh-chaturthi-holiday-2026` — holiday-intent |
| 2 | outlookindia.com | `/brand-studio/...date-history-significance-and-celebration-guide` |
| 3 | calendarlabs.com | `/holidays/india/ganesh-chaturthi.php` — holiday-intent |
| 4 | **giriusa.com** | `/blogs/blogs/ganesh-chaturthi-2026-date-significance-rituals-and-celebrations` |
| 5 | mygiftscorner.com | `/blog/when-is-ganesh-chaturthi/` |
| 6 | drkrishnaathal.com | `/blog/ganesh-chaturthi-2026/` |
| 7 | creditmitra.in | `/indian-holiday/ganesh-chaturthi-holiday` — holiday-intent |
| 8 | **sanatan.org** | `/en/ganesh-chaturthi` |
| 9 | **archyam.com** | `/blogs/news/ganesh-chaturthi-2026-date-timings-rituals-celebrations-guide` |

Bold = also ranks for the sibling keyword at the same URL.

### 2.2 `ganesh chaturthi 2026` (the sibling's keyword) — Google via `WebSearch` (8 results)

| # | Domain | Asset |
|---|---|---|
| 1 | drikpanchang.com | `/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html` |
| 2 | **giriusa.com** | `/blogs/blogs/ganesh-chaturthi-2026-date-significance-rituals-and-celebrations` |
| 3 | luxeartisanship.com | `/blogs/article/ganesh-chaturthi-2026-date-puja-time-tithi-visarjan-full-guide` |
| 4 | divinestore.sanatanajourney.com | `/blogs/updates/ganesh-chaturthi-2026-date-sthapana-muhurat-puja-vidhi-visarjan` |
| 5 | **sanatan.org** | `/en/ganesh-chaturthi` |
| 6 | harishyam.com | `/blogs/news/ganesh-chaturthi-2026-complete-date-madhyahna-sthapana-muhurat-calendar` |
| 7 | **archyam.com** | `/blogs/news/ganesh-chaturthi-2026-date-timings-rituals-celebrations-guide` |
| 8 | calendar.ku.edu | `/event/ganesh-chaturthi` |

### 2.3 Second engine — DuckDuckGo HTML endpoint, same two queries

Fetched in-sandbox, deduplicated to one asset per host, top hosts in order.

`ganesh chaturthi holiday 2026` (9 distinct hosts): publicholidays.in ·
**economictimes.indiatimes.com** (`/astrology/others/ganesh-chaturthi-2026-is-it-september-13-or-september-14-know-the-exact-date-is-ganesh-chaturthi-a-national-holiday/articleshow/133955829.cms`) ·
msn.com · **moneycontrol.com** (`/religion/ganesh-chaturthi-2026-date-and-time-complete-10-day-festival-calendar-rituals-and-celebration-guide-article-14003406.html`) ·
indiatoday.in · timesofindia.indiatimes.com · calendarlabs.com (`/holidays/hindu/2026`) ·
**panchang.org** (`/ganesh-chaturthi-2026-date-puja-vidhi-vrat-visarjan-significance/`) · nationaltoday.com

`ganesh chaturthi 2026` (10 distinct hosts): smartpuja.com ·
**panchang.org** (same URL) · bhaktiras.net ·
**economictimes.indiatimes.com** (same URL) · calendardate.com ·
**moneycontrol.com** (same URL) · drikpanchang.com · divinestore.sanatanajourney.com ·
hindutone.com · newspointapp.com

---

## 3. The cannibalisation gate — how it was counted, and the verdict

**Counting rule applied, exactly as BRIEF §3 step 2 specifies:** a result counts as
shared only when it is the **same domain *and* the same article identity**. Operationally
that meant normalising each URL to `host-without-www` + `path` with the trailing slash
stripped, ignoring the query string, and intersecting the two lists. `pinterest.com`
and `youtube.com` were excluded before intersecting (the "Spotify precedent" — a shared
*publisher* ranking a different asset is a false merge). Neither appeared in any of the
four result sets, so the exclusion changed nothing.

**Google (`WebSearch`), 9 vs 8 results — 3 shared, all exact-URL matches:**

1. `giriusa.com/blogs/blogs/ganesh-chaturthi-2026-date-significance-rituals-and-celebrations`
2. `sanatan.org/en/ganesh-chaturthi`
3. `archyam.com/blogs/news/ganesh-chaturthi-2026-date-timings-rituals-celebrations-guide`

**DuckDuckGo, 9 vs 10 hosts — 3 shared, all exact-URL matches:**

1. `economictimes.indiatimes.com/.../articleshow/133955829.cms`
2. `moneycontrol.com/religion/...-article-14003406.html`
3. `panchang.org/ganesh-chaturthi-2026-date-puja-vidhi-vrat-visarjan-significance/`

**Deliberately *not* counted as shared** — a domain appearing in both measurements
with a different asset: `calendarlabs.com` (`/holidays/india/ganesh-chaturthi.php` on
Google for my keyword vs `/holidays/hindu/2026` on DuckDuckGo) and
`drikpanchang.com` (different geoname/year parameters). Counting either would have
inflated the number by a false merge.

### Verdict

**3 shared results on each of two independent engines. The threshold is 3. The gate
trips, and it trips decisively rather than marginally** — this is not the "exactly 2,
judgment call" branch of BRIEF §3 step 4, so there is no discretion to exercise.

Two further observations that make the trip read as a true positive rather than a
measurement artefact:

- The shared assets are all **undifferentiated "Ganesh Chaturthi 2026: date,
  significance, rituals" overview pages.** Both engines are answering both queries with
  the same generic festival explainer, which is precisely the signal the gate exists to
  detect: one SERP, therefore one keyword.
- The single strongest piece of evidence is the shared Economic Times URL. Its own slug
  is `...know-the-exact-date-**is-ganesh-chaturthi-a-national-holiday**`. The incumbent
  that ranks for the sibling's head keyword **already answers my exact assigned
  question inside the same article**. The holiday question is not a separate SERP in
  the market's own view; it is a section of the date article. `is ganesh chaturthi a
  national holiday` is one of my three assigned `folds`, and the top-ranking page for
  the *sibling* keyword is built around it.

### The second, independent abort condition — substantive duplication: **does NOT trip**

Reported separately and honestly, because it points the other way and the reader
should not be told the two halves agreed when they did not.

`content/batches/2026-09-09-ganesh-10/blogs/ganesh-chaturthi-2026-date.json` was read
in full before any drafting. It owns: the midday-tithi rule (Kielhorn 1897;
Dershowitz & Reingold), the 07:06→07:44 tithi window, per-city madhyahna muhurats, the
Adhika Jyeshtha leap month and the 18-day jump, all five visarjan dates, and a
platform-wide first-party table. **It contains no gazette, no state-by-state holiday
table, nothing on banks or schools, and no RBI or CAG source.** Its one glancing
sentence — "That is why a national holiday list and a neighbourhood pandit can still
disagree by a day" — is about panchang divergence, not about holiday scheduling. Its
source list (Drik Panchang ×2, Kielhorn, Dershowitz & Reingold, the 1955 Calendar
Reform Committee, Power 2018) has no overlap with the holiday-lane sources this post
would have used.

So the substantive-duplication half is clean. **The abort rests entirely on the SERP
half, which is blocking on its own.**

---

## 4. Phases 2 and 3 — stopped at the gate

Gap analysis and sourcing were **not completed**, because BRIEF §3 places the gate
"BLOCKING — read before drafting" and there is no point sourcing a post that cannot
be written. What was established before stopping is recorded here so a retarget does
not start from zero.

### The angle that was assigned, and why it was genuinely a good one

The separation rationale in `ASSIGNMENTS.json` is sound on the merits: the date post
answers the tithi and the muhurat; this would have answered the *working* question —
which states gazette the day, whether banks and schools close, and that it is **not**
a national holiday (India has three: Republic Day, Independence Day, Gandhi Jayanti).
Different question, arguably a different reader. The lead-time dataset was an unusually
good fit, since a 49.4%-on-the-day build rate is what a day off work does to behaviour.

**None of that survives the gate.** A better angle on the same SERP is still the same
SERP, and the two posts would have competed for the same results rather than adding
coverage. This is the case BRIEF §3 was written for.

### Partial findings, for whoever picks this up

- **The substance is real and citable.** A second Google query
  (`is ganesh chaturthi a public holiday which states banks closed`) surfaced a
  consistent picture: Ganesh Chaturthi is a **Restricted Holiday** on the central
  list rather than a Gazetted one, with full bank closure in a specific set of states
  — Andhra Pradesh, Chhattisgarh, Goa, Jharkhand, Karnataka, Maharashtra, Tamil Nadu
  and Telangana are the ones repeatedly named, with Goa additionally closing for the
  second day. **These values were NOT verified against a primary source in this run
  and must not be published on this basis.** They are a lead, nothing more.
- **A primary source for the state table exists and has a slot.**
  `https://cag.gov.in/uploads/media/List-of-Gazetted-Holidays-and-Restricted-Holidays-2026-069492ddf80fa39-36385303.pdf`
  is in the `USED-SOURCES.md` "one slot left" section (used in 1 of 36 posts), and
  `cag.gov.in` is nowhere near the 3-post domain cap. The RBI holiday calendar would be
  the natural second primary source for the bank-closure half. **Neither was fetched
  in this run** — sourcing stopped at the gate. `ASSIGNMENTS.json`'s `formatRisk` note
  is the right instinct: get the table values from a citable primary source or omit
  the table entirely; never estimate which states observe it.
- **Sources not consumed.** No URL or domain slot in `USED-SOURCES.md` was spent by
  this run, so nothing is now closed to a sibling that was open before it.

### Recommended disposition, in preference order

1. **Fold the holiday material into the existing sibling** as one or two H2s in
   `ganesh-chaturthi-2026-date` — "Is Ganesh Chaturthi a public holiday?" and "Which
   states close banks and schools" — sourced to the CAG list and the RBI calendar.
   That is where both engines already say the answer belongs, it strengthens a post
   that already ranks for the cluster's head term, and it adds the state table the
   incumbent overview pages lack. This is the highest-value outcome available.
2. **If a standalone post is still wanted**, retarget to a keyword whose SERP is
   genuinely distinct from the date post's, and re-run the §3 gate against *both*
   `ganesh-chaturthi-2026-date` and any new sibling before drafting. Candidates worth
   measuring: `ganesh chaturthi school holiday maharashtra`,
   `ganesh chaturthi bank holiday list rbi`. Both are plausible and both are
   **unmeasured** — neither should be assumed to clear.
3. **Do not** write this post as assigned.

---

## 5. Audit-equivalent notes for the abort

- `WebSearch` is **US-locale only**; an India-intent SERP may differ from what was
  measured. A second engine (DuckDuckGo) was run for exactly this reason and returned
  the same shared-result count of 3.
- Phase 0 fact gate: **passes** (6 relevant facts identified, ≥2 placeable in the
  first 150 words). Not the blocker.
- Cannibalisation gate, SERP half: **trips at 3 on two engines.** Blocking.
- Cannibalisation gate, substantive-duplication half: **clean.** Reported honestly
  rather than folded into the trip.
- Sibling JSON read in full before any drafting, per BRIEF §3.
- No blog JSON written. No source slots consumed. No temp files left behind.

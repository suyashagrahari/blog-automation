# Research brief — navratri wishes in hindi

- Slug: `navratri-wishes-in-hindi` · cluster wishes-language · bodyLanguage `hi` · absorbs "navratri wishes in hindi text"
- Run: 2026-10-12 (Sharad Navratri day 2). WebSearch calls used: **1** (SERP only). No browser tools.
- Sibling split: this page = the hub of Hindi wishes organised by **recipient (pronoun register)** and by **tithi / goddess**. Left to siblings: the formal phrase "हार्दिक शुभकामनाएं" (navratri-ki-hardik-shubhkamnaye), short status lines (navratri-status-in-hindi), romantic lines (-for-love / -wife / -husband), other languages (-marathi / -gujarati / -english). Only one romantic touch here: the 9 sample lines for the one-to-one Dandiya Partner page.

## Phase 0 — first-party data

Read `content/facts.md` (did NOT run `npm run facts`). No Navratri or dandiya-partner usage data exists. Used, verbatim:
1. Raksha Bandhan 2026 lead time, n=89: 49.4% on the day, median 0 days — labelled in body as the Raksha Bandhan analogue, not Navratri, with the n=89 caveat.
2. 48.3% of shared pages opened on a phone (27,725 of 57,456 views) — used to justify one-screen message length and the "no smartphone, call instead" limit.
3. 38.5% of creators password-protect — used only in the Dandiya Partner section, where the password option is a real feature.
Template features: only those in `template-spec.md`.

## Phase 1 — SERP (US-served (WebSearch), 2026-10-12, query "navratri wishes in hindi")

| # | URL (US-served (WebSearch)) | Words / structure | Direct answer | Data & date | Format | Weak? |
|---|---|---|---|---|---|---|
| 1 | lutonhoo.oandg.co.uk/en/navratri-wishes-in-hindi.html | not fetchable (DNS ENOTFOUND) | — | scraped mirror; WebSearch summary notes stray drafting notes | — | weak (mirror) |
| 2 | eduyush.com/blogs/lifestyle/navratri-wishes-in-hindi | ~7,500 words incl. nav; 11 H2 lists all suffixed "(2025)"; FAQ | list after 2-para intro | datePublished/modified 2025-09-14; title "Best 150+ Messages 2025" | lists, Article schema; site sells ACCA/CA exam books, 7% off banner | weak (stale year, off-topic domain) |
| 3 | eduyush.com/en-us/... | duplicate of #2 | | | | weak (dup) |
| 4 | hindupad.com/navratri-sms-in-hindi-sms-wishes-greetings/ | ~750 words; no H2s; romanised Hindi only, no Devanagari | none | datePublished 2012-10-15; one comment from 2013 | plain couplets | weak (2012, no Devanagari) |
| 5 | successcds.net/?p=147990 | ~4,000 words; sections short / traditional / friends / poetic / day 1–9 + Vijayadashami | after 1 intro para | 20 Sep 2024 byline | bullet lists + images | weak (2024, day-number not tithi) |
| 6 | bhaktibharat.com/amp/en/wishes-quotes/navratri | ~2,000 words; image-download gallery | none | 2025-04-01 (Chaitra) | images; labels mismatch (a "Day 3 Chandraghanta" card downloads a kushmanda file) | weak |
| 7–9 | fithindi.thequint.com Chaitra Navratri 2021 / 2020 / 2022 | 403 to fetch | — | Chaitra, not Sharad; 2020–22 | — | weak (wrong Navratri, stale) |

Only 9 results returned. **Weak count: 9 of 9.** Gate 4 not triggered.
`serps.md` (41 SERPs today) has no row for this exact keyword; near variants (rows 21, 25, 37) show the same incumbents (eduyush 2025, quint, tring) — corroborates.

## Phase 2 — gap analysis

- Table stakes: short wishes, family/friends wishes, day 1–9 goddess wishes, Jai Mata Di closers.
- Gap 1 (nobody): which pronoun (आप/तुम/तू) each recipient needs; competitors mix registers and never say why it matters.
- Gap 2 (nobody): goddesses follow the **tithi**, not the day number. In 2026 (Drik Panchang, New Delhi) Saptami covers 17 AND 18 Oct, Ashtami + Maha Navami both on 19 Oct (Navami tithi 10:51 AM 19 Oct → 12:50 PM 20 Oct). A "day 8 = Mahagauri" list gives the wrong goddess on 18 Oct 2026. No competitor gives dated 2026 or 2027 mapping.
- Gap 3: North vs South India lists differ (Drik Panchang info page) — no competitor notes it.
- Stale: every incumbent dated 2012–2025.
- Fan-out → H2s: pronoun register; recipient sets; goddess-by-tithi with dates; when to send; one-person garba invite; when not to.
- Angle: "Wins by being the only top-10 page that organises original Hindi wishes by pronoun register and by tithi, with the 2026 Saptami repeat dated, plus SubhSandesh's festival lead-time data."

## Phase 3 — sources (all fetched)

| Source | What it says (verified) | Read | Published |
|---|---|---|---|
| arxiv.org/abs/2111.15268 — R. Kumar, LTC 2013 | >25,000 annotated Hindi blog comments; honorific pronoun with elders is "appropriate" (unmarked), its absence potentially impolite; "ji" as HON marker in glossed examples | full PDF (pdftotext) | arXiv 2021-11-30 |
| europepmc.org/article/PMC/PMC9001062 — Kapoor, Belk, Goulding, J. Public Policy & Marketing, CC BY | Hindu rituals incl. Durga Puja revised during COVID-19; Durga-as-doctor post "supposedly shared over 69,000 times" (citing Indian Express 2020); Goffman: greetings as everyday ritual | full text XML, keyword-searched (not read cover to cover) | 2022-07-01 |
| drikpanchang.com Sharad Navratri 2026 & 2027 calendars (geoname 1261481) | dates/goddess per tithi above; 2027: 30 Sep Shailputri … 6 Oct Kalaratri, 7 Oct Mahagauri, 8 Oct Maha Navami, 9 Oct Vijayadashami | fetched | no date |
| drikpanchang.com maha-navami 2026 | Navami tithi times | fetched | no date |
| drikpanchang.com navratri info | North-India list Shailaputri…Siddhidatri as presiding deities of Pratipada…Navami; South-India list differs | fetched | no date |
| drikpanchang Vijayadashami 2026 | Tue 20 Oct 2026 (fact-check only, not cited) | fetched | — |

Rejected: Kumar 2017 J. Politeness Research (closed); Sinha 2022 "Singular tum is not plural" (OJS login wall); UAE intergenerational WhatsApp study (fails swap/subject); Wikipedia Navadurga (used only for sameAs; its extract lists the Agni Purana set, not the day list).
Searches: findpapers "Hindi pronouns honorific aap tum politeness", "festival greeting messages WhatsApp India", "Navaratri goddess Durga nine forms ritual", "personalized versus generic greeting message", "second person pronoun address forms Hindi", "Navadurga", "phatic communication greetings mobile messaging"; OpenAlex OA searches for Hindi address forms.
capcheck: arxiv.org and europepmc.org (exempt) not at cap at time of writing.

## Brief/prompt claims checked

- Prompt: "EST peak volume band 5 (10,000+/mo)". PLAN.json row carries only `demandRank: "6"`; no volume field. **Unverified — not found in the plan.**
- Prompt: measured incumbents "eduyush 2025, tring, successcds, lutonhoo mirror, quint 2022". My US-served SERP had eduyush, successcds, lutonhoo, quint (2020/21/22) but **no tring**; hindupad (2012) and bhaktibharat appeared instead.
- BRIEF calendar (11–19 Oct, Dussehra 20 Oct) confirmed. Extra finding: the nine goddesses do NOT map one per date in 2026 (Saptami repeats; Ashtami and Navami share 19 Oct). Drik Panchang defaults to Orlando, USA without a geoname-id — any agent fetching it bare gets US-local tithis.

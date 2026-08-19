# Research brief — celebrate raksha bandhan when siblings in different cities

- **Batch:** `2026-08-19-rakhi-3`
- **Slug:** `celebrate-raksha-bandhan-siblings-different-cities` (verified free in Strapi, `filters[slug][$eq]` returned `total: 0`)
- **Cluster:** C05 · winnable (6 of 10 weak) · asset type blog · 100–400 EST
- **Research lane held:** internal migration within India, intercity mobility, geographic proximity between adult siblings. Stayed out of: form abandonment / IKEA effect, Bengali festival history and Tagore, sister-to-sister ritual, blended families, Indian Army postings.
- **Phase 0:** not re-run. `content/facts.md` generated 2026-08-18 was read as-is, per the batch brief.
- **Date fact-check:** Raksha Bandhan 2026 = **Friday 28 August 2026** (confirmed against the brief; day-of-week computed). Saturday 29 and Sunday 30 August 2026 follow. Kept out of `sources` — the post states no muhurat time.

---

## Phase 1 — SERP analysis

`WebSearch` for the exact keyword plus a second travel-intent variant (`rakhi celebrate brother sister different cities India travel train flight visit`).

| Page | Words / structure | Where the answer lands | Data cited (and date) | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|
| nestasia.in — "How to Celebrate Raksha Bandhan When You're in Different Cities" | Not measurable — **403 to fetch**, judged from SERP snippet only | Snippet is idea-list framing | None visible | Unknown | Unknown | Homeware/gifting product pages. Exact-match title, so the incumbent for this keyword |
| igp.com — "Top Creative Rakhi Celebration Ideas for Long-Distance Siblings" (17 June 2025) | ~1,100 words, H2 + six H3 "ideas" | No direct answer; two paragraphs of "the bond remains constant" first | **Zero** statistics, zero external citations | No table, no FAQ, no schema byline, heavy internal product links | Third person, warm, hedged | Selling rakhi hampers. Explicitly dodges travel: "If an actual visit to your sibling isn't possible right now…" |
| remitly.com — "Raksha Bandhan 2026: Date, Meaning & How to Celebrate" | ~1,800 words, many H2s, quick-answer box at top | Direct answer box, well done | **States Raksha Bandhan 2026 falls on Tuesday, August 18 — factually wrong** (it is Friday 28 August 2026) | Quick-answer callout, images | Second person, clean | Remittance app installs. Diaspora/US framing throughout |
| lovenspire.com — "Celebrating Rakhi in the USA" (19 June 2023) | ~1,600 words, "Rakhi Intro / History" style headings | Buried behind an "Introduction" paragraph | None | Author byline, shop banners | Essayistic, generic | Selling Indian goods in the USA. Not domestic-India at all |
| kidsrakhi.weebly.com / pr4-articles.com | Thin (<800 words), single block | No structure | None | None | Article-spam register | Backlinks. Content-farm tier |
| Travel vertical (indianeagle.com, happyeasygo.com, railmitra.com, ixigo.com) | 600–1,200 words each | Destination lists | None | Some tables of destinations | Promotional | Selling flights/trains via *getaway* content — "best places to explore with siblings", not "should you go" |

No AI Overview captured for the exact query. No page in either SERP carries a comparison table with real values, an FAQ block, or a single cited statistic.

## Phase 2 — Gap analysis

**Table stakes** (all five cover, so the post must acknowledge them): fix a video-call slot; post the rakhi ahead of the date; send a gift or hamper; share childhood memories; the "distance doesn't diminish the bond" reassurance.

**The gap.** Every page answers *how to celebrate remotely* and none answers the question that actually comes first for two people in the same country: **should you just go?** IGP names the possibility only to dismiss it in half a sentence. The travel-vertical pages sell *holidays* with a sibling, not a same-day trip to tie a rakhi. Nobody anywhere states a booking deadline, a fare band, a journey time, or what a Friday festival does to seat availability.

**Stale / wrong data.** remitly.com publishes the wrong festival date for 2026 (Tuesday 18 August). Not cited, not linked — recorded here because superseding it is a citation win. lovenspire.com is a 2023 post with no dated data at all.

**Unanswered questions the pages raise and drop:** who travels when both siblings have moved; what happens when in-laws in a third city claim the same day; whether the ritual can be repeated; whether the weekend is an acceptable substitute.

**Fan-out sub-queries → H2/FAQ map:**

| Sub-query | Where it is answered |
|---|---|
| what's different about different cities vs different countries | H2 1 |
| should I travel for raksha bandhan / is it worth it | H2 2 + FAQ 1 |
| is it too late to book a train for raksha bandhan | H3 2 + FAQ 2 |
| when does tatkal open / do I need aadhaar | H3 3 + FAQ 3, 4 |
| how much does it cost to fly for one day | H3 1 + table |
| can we celebrate on the weekend instead | H2 5 + FAQ 5 |
| can you tie rakhi twice | H2 5 + FAQ 6 |
| who should travel | H2 6 + FAQ 7 |
| in-laws expect him elsewhere | H2 4 + FAQ 8 |
| what to send if nobody travels | H2 7 + FAQ 9 |
| how early to post the rakhi | FAQ 10 |
| when is travelling / a digital page the wrong call | H2 7 |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that treats domestic distance as a travel decision with a real, dated deadline — 60-day ARP so 29 June 2026 for a 28 August journey, Tatkal at 10:00/11:00 on 27 August, and a Friday festival whose following weekend is a separate booking day — with the no-travel fallback grounded in 2,718 SubhSandesh pages and 32,683 recorded views.

## Phase 2b — Cannibalisation check against the 19 existing rakhi posts

Read in full before drafting, per the task:

- `2026-08-13-rakhi/blogs/celebrate-raksha-bandhan-online-long-distance.json` — owns the seven-idea online list and the time-zone slot maths. **Overlap risk is real:** it already carries an H2 "Different cities or different countries? Not the same problem". Mitigation: this post contains no idea list of remote activities, no timezone table, and no courier-window material; its five H3s are transport modes ordered by booking deadline.
- `2026-08-18-rakhi-2/blogs/how-to-tie-rakhi-virtually-on-video-call.json` — owns the timed nine-step procedure, camera framing, drop protocol, mediated co-presence research. This post never describes how to run the call; it only says to fix a 20-minute slot and links nothing of the procedure.
- `2026-08-18-rakhi-2/blogs/rakhi-message-for-brother-far-away-in-another-country.json` — owns the cross-border case, years-away segmentation, "when are you coming home". This post is explicit that same-country distance is a different problem and never discusses citizenship, language attrition or return migration.

Residual overlap, recorded honestly rather than denied: the closing "what to send if nobody travels" section necessarily touches the same product ground as the 2026-08-13 post. It is ~180 words of an 1,778-word body and uses different first-party numbers.

## Phase 3 — Sources

Searched the phenomenon, not the keyword: `sibling relationship geographic proximity register data`, `Demographic Research distance between siblings kin proximity internal migration`, `visiting friends and relatives travel distance frequency`, `India internal migrants return home visits frequency festivals`, `married women visits natal home India frequency`, `travel time threshold family visit frequency`.

Banned-domain casualties: the strongest India-specific return-visit evidence sat on `frontiersin.org` (temporary labour migration, return frequency) and `pmc.ncbi.nlm.nih.gov` / `journals.plos.org` (natal-home visiting), all banned for this batch; `doi.org` and `cambridge.org` likewise. `Kolk 2017` (life-course distance to siblings) is Wiley-paywalled. `sciencedirect.com` VFR-travel work is paywalled with no open version found.

| # | URL | What it verifies | Published | Subject test | Swap test | Type |
|---|---|---|---|---|---|---|
| 1 | demographic-research.org/articles/volume/49/7 | 987,486 Swedes aged 65–84; nearly 35% have closest sibling within 10 km; proximity likelier for those without partners or children | 2023-08-04 | PASS — siblings + distance | Fails (could sit in another sibling post) | Peer-reviewed, open access |
| 2 | demographic-research.org/articles/volume/39/43 | Mulder's family-ties perspective: ties to nonresident family shape internal migration *and* immobility | 2018-12-05 | PASS — internal migration + family | Partly fails | Peer-reviewed, open access |
| 3 | pib.gov.in PRID=1941077 | Census 2011: 4,14,22,917 inter-state migrant workers; MoSPI PLFS 2020–21 total migration rate 28.9% (rural 26.5%) | 2023-07-20 | Context only | Fails | **The one permitted generic context statistic** |
| 4 | newsonair.gov.in — advance booking 120→60 days | ARP cut to 60 days effective 1 November 2024; foreign tourists remain at 365 days | 2024-10-18 | PASS — operational, and the load-bearing deadline | PASS — meaningless in any other keyword | Government news, primary statement |
| 5 | pib.gov.in PRID=2135694 | Aadhaar auth for online Tatkal from 1 July 2025, Aadhaar OTP from 15 July 2025; opening-day window described as 10:00 AM AC / 11:00 AM non-AC, agents barred first 30 min | 2025-06-11 | PASS — operational, keyword-locked | PASS | Ministry of Railways release |

Every one of the five was fetched and the quoted figure read in the page text. Sources 1 and 2 are open access but **only their abstract pages were read**, not the full PDFs; every figure cited from them appears verbatim in the abstract. Nothing was cited from a search snippet.

**Disclosures.**
1. `pib.gov.in` appears twice. Source 3 is the single generic context statistic the task explicitly blessed for this keyword; source 5 is a topical operational release that fails the swap test and is not a statistic. No other primary publisher states the Tatkal window (IRCTC's own pages 404/000 to fetch; Deccan Herald's article body did not extract past the standfirst).
2. `demographic-research.org` appears twice. Within-post repetition is not capped by the batch rule (domain ≤ 2 *posts*), and no sibling post uses it.

**Batch collision check.** At the time of writing, `content/batches/2026-08-19-rakhi-3/blogs/` contained two sibling files: `make-raksha-bandhan-card-online-with-name.json` (hbs.edu, research.google.com, englelab.gatech.edu, wu.ac.at, ics.uci.edu) and `raksha-bandhan-wishes-in-bengali.json` (ccsenet.org, questjournals.org, en.banglapedia.org, w3.org, unicode.org). **Zero URL overlap and zero domain overlap** with this post's five.

**Fares and timings.** No live fare was fetched. All money and journey-time figures are stated in the body as indicative bands with the basis named ("a band from published fare ranges rather than a live quote, so check the real fare before committing"). The only hard numbers are the dated, verified booking rules.

## Phase 4–5 — Build decisions

- Body **1,778 words** by plain whitespace split, FAQs excluded. 10 FAQs live only in `article.faqs` and the renderer-built FAQPage.
- 8 H2s (including Sources), 5 H3s, one comparison table with 5 rows.
- `categorySlug`: `family-and-continuity` — verified live in Strapi. Chosen over `festive-beats` because the post is about a family logistics decision, not the festival's ritual.
- `templateUrls`: `https://subhsandesh.in/happy-rakshabandhan-to-brother`, `https://subhsandesh.in/templates` — both from `TEMPLATE_LINKS`. The body states plainly that the rakhi template is brother-first and points sisters-of-sisters at the gallery.
- Internal links: 2, both in the final section, after the value case is made. No links to any of the 19 unpublished rakhi slugs.
- Wikipedia body links: 0. Wikipedia/Wikidata pairs appear only in `structuredData` `sameAs`, all four verified against the Wikipedia API: Raksha Bandhan Q10266, Internal migration Q863941, Indian Railways Q819425, Sibling Q31184.
- `structuredData`: an `ItemList` mirroring the five H3s in order, plus one `@id`-matched `BlogPosting` enrichment block on `…#post` carrying `about`, `mentions` and `citation` (5 entries, one-to-one with `batchMeta.sources`). No AggregateRating, Review, HowTo, or duplicate FAQPage.

## Phase 6 — Audit summary

46 passed, 4 failed, disjoint, summing to 50. Failures recorded in the JSON:

1. **Target keyword in H1, metaTitle, slug, and first 100 words** — the 57-character keyword cannot fit a 60-character metaTitle with a differentiator; metaTitle drops "when siblings".
2. **metaTitle 50–60 characters, exact keyword in the first five words** — same root cause. Closing it needs a 70-character title or no differentiator.
3. **Paragraphs 2–3 sentences throughout** — every paragraph complies except the opening answer block, which is five sentences because Block 1 requires a direct answer plus two first-party numbers plus a coverage sentence in one liftable unit.
4. **No source passes the swap test** — three of five pass. The PIB migration figure and the sibling-proximity paper would both survive transplant into another distance-themed rakhi keyword; only the two railway sources are locked to this one.

Known weakest point, stated in `honestAssessment`: the comparison table's first-party column pairs platform-wide SubhSandesh measurements to travel rows rather than measuring the travel options, because no first-party travel data exists. The facts are also not rakhi-specific — rakhi is not one of the 13 page types.

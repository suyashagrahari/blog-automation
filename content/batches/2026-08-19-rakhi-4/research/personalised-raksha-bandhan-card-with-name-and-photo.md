# Research brief — personalised raksha bandhan card with name and photo

- **Batch:** 2026-08-19-rakhi-4 · Cluster C02 · transactional / tool · P80 · 300–800 EST
- **Slug:** `personalised-raksha-bandhan-card-with-name-and-photo` (checked in Strapi 2026-08-19: `total: 0`, free)
- **Festival date used as fact-check only:** Raksha Bandhan 2026 = Friday 28 August 2026. Not in `sources`; the post states no muhurat.
- **Siblings present in this batch when I picked sources:** `happy-raksha-bandhan-wishes-with-name`, `25-raksha-bandhan-wishes-for-brother-who-lives-far-away`, `virtual-raksha-bandhan-celebration-ideas`. Their 13 source URLs were listed and avoided; zero URL or domain overlap with mine.

---

## Phase 1 — SERP analysis (run 2026-08-19)

`WebSearch` for the exact keyword returned nine results. **Every one is a competitor tool or template gallery. Not one is an editorial page, and not one answers the query literally in prose** — they answer it with a grid of designs.

| # | Page | What it is | Word count / structure | Where the "answer" is | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | funkypigeon.com/cards/rakhi-cards | UK print-on-demand card grid | Effectively no prose; product tiles | Nowhere — the grid *is* the answer | None | Product listing, price filters | Retail copy, third person | Card SKU sales |
| 2 | zazzle.com (single Rakhi card SKU + `rakhi+cards`) | POD product page | ~150 words of product blurb | Product description block | None | Buy box, "personalise this template" | Retail, imperative | Transactional buy |
| 3 | canva.com/create/raksha-bandhan-cards | Template landing page (403 to my fetcher; characterised from the SERP result only) | Not readable — recorded as unread | n/a | None visible | Template grid + feature bullets | Product marketing | "card maker" head terms |
| 4 | mynameart.com/greeting-cards/raksha-bandhan | Name-on-image generator, 15 sections indexed | Thin prose, mostly design thumbnails | Immediate: pick design → type name | None | Grid, "create" buttons | Utility copy | "with name" queries |
| 5 | createcustomwishes.com/…/raksha-bandhan-rakhi | 73 templates, "1.2k+ designs", 10 sections indexed | ~400 words boilerplate above the grid | First paragraph, but generic | None | Grid, sort-by-price, company-logo variants | Utility copy | "custom card maker online" |
| 6 | lifekafunda.com/…/Raksha_Bandhan_Wishes_Card_With_Name_and_Photo | Exact-match title, 21 sections indexed | ~350 words of festival explanation | Paragraph 1 restates the title | None | Card grid, language list (English/Hindi/Odia) | Generic, third person | Exact-match keyword |
| 7 | birthdayphotoframes.com/category/raksha-bandhan-cards-with-photos | Photo-frame generator | Thin | Grid | None | Grid | Utility | "download" intent |

Common shape: a festival paragraph, a promise that you can "add your name and photo", a grid, a download button. **No AI Overview appeared for this query.**

## Phase 2 — Gap analysis

**Table stakes** (all of them do this, so the post must too): say what a personalised card with name and photo is; show that a photo can be added; cover both printed and digital routes; make clear it can be done free and on a phone; name the 2026 date.

**The gap, and it is a large one.** Every page above assumes the photo already exists and is fine. Not one of them says a word about **which** photo — how big a face has to be at card size, whether you should be using a photo of your adult brother aged seven at all, what pixel dimensions actually mean at 5×7 inches, or what a vertical phone photo loses when it is cropped into a landscape card. The tool does the cropping silently and the user finds out at the printer.

**Stale data:** none of the seven cite any data at all, so there is nothing to supersede. That is itself the finding — the entire SERP is undated.

**Unanswered questions raised and dropped:** "upload your photo" (which one?); "high quality print" (at what resolution?); "add your family photo" (with whose permission?).

**Fan-out sub-queries → my H2s:**
- which photo works on a Raksha Bandhan card → *Which photo actually works at card size*
- is it OK to use an old/childhood photo of my brother → *Whose photo is it: consent, and the childhood photo problem*
- what resolution/DPI do I need to print a photo card → *Resolution: what a phone photo can actually print*
- how do I crop a vertical photo for a card → *Cropping a phone photo into a card*
- should a formal card have a photo → *When a photo makes the card worse*
- can I use an old scanned photo → *Old prints and scans: what is salvageable*

**Angle (`batchMeta.angle`):** wins by being the only page on this SERP that treats the photo as an editorial and ethical decision rather than an upload slot — face-size arithmetic from published resolution thresholds, a consent rule for adult siblings, and FADGI's real 400 ppi figure instead of the folk "300 DPI" — grounded in 2,739 pages and a 51.8% phone-open rate no card retailer can publish.

**Separation from `personalised-raksha-bandhan-card-with-name` (2026-08-18-rakhi-2):** that post owns printed-vs-digital and India Post transit standards. I state the printed/digital choice in one clause and link nothing to it, name no courier, quote no transit window, and reuse none of its four sources (`indiapost.gov.in`, `bmj.com`, `uploads-ssl.webflow.com`, `cs.cmu.edu`). `write-name-on-happy-raksha-bandhan-photo` owns legibility, contrast and text placement, so I make no claim about type size, contrast ratio or where the *name* sits.

## Phase 3 — Sources (5, all fetched and read in full)

Search pattern used: the phenomenon, not the keyword — `profile image selection self-presentation study`, `sharenting consent children photographs systematic review` (via the DOAJ article API), `digitisation guidelines ppi photographic prints`, `face recognition low resolution pixels`, `photos with faces engagement`.

| # | Source | Verified claim | Published | Test |
|---|---|---|---|---|
| 1 | White, Sutherland & Burton, *Choosing face: The curse of self in profile image selection*, Cognitive Research: Principles and Implications 2:23 — OA copy at `d-nb.info/1142707725/34` | Two internet studies, **n = 610**; image selections accentuated favourable impressions, but **other-selected images conferred more favourable impressions than self-selected ones**; authors' own conclusion is that if you want to put your best face forward, ask someone else to choose it. Received 14 Dec 2016, accepted 21 Feb 2017. | 2017-12-01 | subject ✓ peer-reviewed ✓ |
| 2 | Motevalli et al., *Parents' Sharenting Behaviours: A Systematic Review*, F1000Research 14:448 (v2, 2 approved) | Synthesises **21 studies from 13 countries**, published 2019–2024, samples 8–2,900. Finding used: children value favourable representations of themselves but **resent sharing without consent, particularly personal or embarrassing material**, because it undermines an identity they manage themselves. | 2025-07-16 | subject ✓ peer-reviewed ✓ |
| 3 | FADGI, *Technical Guidelines for Digitizing Cultural Heritage Materials*, 3rd edition | §3.8 Prints and Photographs sampling frequency **at the original size**: 200 ppi (1-star), 250 (2-star), **400 (3-star)**, 600 (4-star), with a footnote that finer detail can need more than 600; masters for prints are to be captured at or above 3-star. §2.4.9 states the relationship plainly: an object captured at 400 ppi renders at correct size only when printed at 400 ppi. Also: "every generation of photographic copying involves some quality loss". | 2023-05-09 | subject ✓ standards body |
| 4 | Sinha, Balas, Ostrovsky & Russell, *Face Recognition by Humans: Nineteen Results…*, Proceedings of the IEEE 94(11) | Familiar faces: subjects recognised **more than half at an equivalent resolution of 7×10 pixels**, with performance **at ceiling by 19×27 pixels** (Yip & Sinha); Harmon & Julesz got high accuracy from 16×16 blocks. Fine featural detail is not required for recognition. | 2006-11-01 | subject ✓ peer-reviewed ✓ |
| 5 | Bakhshi, Shamma & Gilbert, *Faces Engage Us*, CHI '14 | **1.1 million Instagram photos**; a photo containing a face got **38% more likes and 32% more comments**, controlling for user activity — but the **number of faces had no significant effect**, nor did their age or gender. | 2014-04-26 | subject ✓ peer-reviewed ✓ |

Zero generic context statistics (no PIB / TRAI / Census / MEA). Zero Wikipedia in the body. Nothing paywalled — all five were downloaded and read as text; no figure, table or passage is reproduced.

**Sources I wanted and could not use:** the Springer/BMC HTML of source 1 and the `cognitiveresearchjournal.springeropen.com` version both returned 403/Cloudflare, so the citation points at the German National Library's deposited OA copy of the same article, which I did read. Sarkadi et al. 2020 (*Children want parents to ask for permission before 'sharenting'*) and Ouvrein & Verswijvel 2019 are the closest studies to my consent section but both are paywalled with no readable OA copy, so they are cited only at second hand through source 2's synthesis, which is itself explicit about that. ICAO Doc 9303's inter-eye pixel minimum would have been ideal for face size; `icao.int` returned 404 for the consolidated PDFs, so it is not cited. GWG's Sign & Display spec is behind a download gate and is not cited.

**Known correction on source 1:** a 2021 correction (Cogn. Research 6:55) reports a data-processing error in the "Internet calibration" panels of Fig. 2; the authors state it does not change the main results or the conclusions, and the main effect of self/other selection was *strengthened* (published ηp² 0.020 → corrected 0.026). The claim I use is the one the correction leaves standing.

## First-party facts used

- 2,739 personalised pages created since 2026-03-12, across 13 page types — measured 2026-08-19
- 51.8% of shared pages are opened on a phone (17,101 of 33,007 views) — measured 2026-08-19
- 44.3% of creators password-protect their page before sharing it (1,213 of 2,739) — measured 2026-08-19
- Median gap between a page's first save and its last edit: 6.9 hours — sampled on "I love you" page (/love-gf), n=914 — measured 2026-08-19
- 99.4% of started pages are actually published and shared (2,722 of 2,739) — measured 2026-08-19

**Limit stated in the post and the audit:** none of these is rakhi-specific — rakhi is not one of the 13 page types — and they pass the subject test for "making and sharing a personalised greeting" while failing the swap test across this batch.

## Strapi targeting

- `categorySlug`: `family-and-continuity` (the post is about the relationship and about someone else's image, not the festival).
- `templateUrls`: `https://subhsandesh.in/happy-rakshabandhan-to-brother`, `https://subhsandesh.in/templates`. There is no `/rakhi` URL, and the rakhi template is brother-first — stated in the body.

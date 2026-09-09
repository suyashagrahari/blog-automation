# Research brief — `ganesh-chaturthi-drawing-for-school`

- **Batch:** `2026-09-09-ganesh-10b` (wave 3 addendum, post 9 of the original ten)
- **Primary keyword:** `ganesh chaturthi drawing`
- **Folds in:** `ganesh chaturthi poster drawing` · `ganesh chaturthi drawing easy` · `ganesh chaturthi craft ideas for kids`
- **Assigned research field:** art education — children's drawing development (the stages
  literature), festival art in Indian schools, why drawing-from-formula differs from
  drawing-from-observation.
- **Category:** `indian-festivals` (verified live in Strapi, 2026-09-09)
- **Slug check:** `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=ganesh-chaturthi-drawing-for-school`
  returned `{"data":[],"meta":{"pagination":{"total":0}}}` on 2026-09-09 — **free.**
- **Date fact-check:** Ganesh Chaturthi 2026 = **Monday 14 September 2026**; Ganesh Visarjan /
  Anant Chaturdashi = **Friday 25 September 2026**. Verified against Drik Panchang (Mumbai,
  geoname-id=1275339, year=2026), which also states the Mumbai Madhyahna muhurat as
  11:20 AM–01:48 PM. **The post states the dates but no muhurat time**, so per
  `publish-checklist.md` the panchang stays out of `batchMeta.sources` and out of `citation`.
  It appears as a body link only.

---

## Scope fences — what this post must NOT touch

| Owned by | Territory this post stays off |
|---|---|
| `2026-09-09-ganesh-10/blogs/ganesh-chaturthi-decoration-ideas.json` | The home mandap, decoration materials, marigold/mogra garlands, banana stems, toran, backdrops, LED strings, diyas, thermocol, **and rangoli in every form** |
| `2026-09-09-ganesh-10/blogs/ganesh-chaturthi-images.json` | Downloadable greeting images, banners, and the keyword `happy ganesh chaturthi poster` (a *file you send*). This post owns `ganesh chaturthi poster drawing` — **a sheet of chart paper a child draws by hand for a school competition** |
| `2026-09-09-ganesh-10/blogs/ganesh-chaturthi-essay.json` | Tilak, 1893, the sarvajanik history |
| `2026-09-09-ganesh-10b/blogs/ganesh-chaturthi-puja-vidhi.json` | Sthapana, samagri, shodashopachara |

Keyword collision scan run across all 19 sibling `article.keywords` strings on 2026-09-09.
No sibling claims `drawing`, `craft`, `poster drawing`, `sketch` or `colouring`. Clear.

---

## Phase 1 — SERP analysis

Searches run: `ganesh chaturthi drawing easy for school kids step by step`,
`"ganesh chaturthi poster drawing" competition school`.

| # | Page | Format | Word count / shape | Where the answer sits | Data cited | Notable |
|---|---|---|---|---|---|---|
| 1 | infinitylearn.com (Surge blog) | Listicle + stock images | ~1,100, mostly image captions | Buried under two lead-capture forms and a "Fill Out the Form for Expert Academic Guidance" gate | None | Steps are three sentences long: "draw a large circle for the head… then a smaller circle for the trunk". Anatomically wrong — a trunk is not a circle |
| 2 | indiatvnews.com (2025-08-24) | News listicle | ~600 | First screen, but the "steps" are one line each | None | HTTP 403 to a fetcher; read via SERP snippet only. Recorded as unread |
| 3 | easydrawingsteps.com | 10-step post | ~900 | Step 1 is "gather your supplies" | None | Every illustration is a lazy-loaded grey SVG placeholder — the page literally has no drawings on it. Three Telegram/WhatsApp join prompts inside the steps |
| 4 | pinterest.com / instagram.com hub pages | Image grid | 0 prose | No answer at all | None | Ranks purely on image intent |
| 5 | complan.in blog | Brand content listicle | ~800 | Mid-page | None | Nutrition-brand content marketing; ideas only, no build order |

**AI Overview / featured snippet:** Google assembles a generic five-step list from #1 and #3
("large oval for the head… fan-shaped ears… trunk extending downward"). It cites no source
with any authority on how children actually draw.

## Phase 2 — Gap analysis

**Table stakes (all five cover):** basic shapes first; ears; trunk; crown/mukut; modak;
bright festive colours; "for kids".

**The gap — five things none of the five do:**

1. **No age or class differentiation whatsoever.** Every page gives one identical procedure to
   a four-year-old and a fifteen-year-old. This is the largest and most obvious hole.
2. **No materials with names or prices.** "Colouring tools such as coloured pencils, markers,
   or watercolours" is the entire materials guidance on the best-ranked page.
3. **No time estimate.** The searcher's real constraint is that this is due tomorrow morning.
4. **Nobody says what a poster competition is marked on**, even though "poster drawing" is a
   distinct query with a distinct output (chart paper, a slogan, a margin, a title).
5. **Nobody addresses tracing**, which is what most of these pages functionally encourage, and
   nobody has any evidence about whether copying an outline improves anything.

**Stale data:** not applicable — none of the five cite a single number, of any age.

**Unanswered questions raised and dropped:** "break the figure into basic shapes" is asserted
on four of the five pages and justified on none of them.

**Fan-out sub-queries → headings/FAQs:** what shapes make a drawing read as Ganesha · in what
order · how long it takes · what a Class 1 child can do vs a Class 8 child · what paper ·
what colours · what a poster needs beyond the picture · what to make instead if the child
will not draw · is tracing allowed · what the 2026 date is.

**Angle (recorded as `batchMeta.angle`):**

> Wins by being the only Ganesh Chaturthi drawing page that gives a class-by-class
> progression and a six-shape build order, and the only one that cites developmental
> evidence — 37,770 children's drawings and a coached-observation experiment — for why a
> traced outline teaches nothing.

---

## Phase 3 — Sources

Field searched: children's drawing development, observational drawing instruction,
art education policy in Indian schools. Searched the *phenomenon*, never the keyword.

### Cited — 4 in `batchMeta.sources` and `citation`

1. **Long, Fan, Huey, Chai & Frank (2024), _Nature Communications_ 15:1191** —
   `https://pmc.ncbi.nlm.nih.gov/articles/PMC10853520/` · published 2024-02-08 · CC BY 4.0,
   read in full via PMC. **Peer-reviewed and open access — this is the post's scholarly source.**
   Verified figures used: 37,770 drawings of 48 categories from N = 8,084 children aged 2–10
   (mean 5.33), collected on a museum touchscreen kiosk; recognizability rises with age
   (β = 0.251, SE = 0.020, p < 0.0001) *alongside*, not because of, tracing-measured visuomotor
   control (β = 0.267, SE = 0.020, p < 0.0001); parent-estimated drawing frequency was **not** a
   significant predictor (p = 0.721); older children's drawings contain more semantic parts
   (β = 0.395, SE = 0.041, df = 2071, p < 0.001). Subject test: **pass**. Swap test: **pass** —
   unusable in any other post in this batch.
2. **Vlach & Carver (2008), _Early Childhood Research & Practice_ 10(1)** —
   `https://ecrp.illinois.edu/v10n1/vlach.html` · peer-reviewed, open access, read in full.
   22 kindergartners, once a week for a month, 11 coached / 11 not. Coaching was three
   instructions plus a mnemonic ("In the beginning I look close, in the middle I look a lot, and
   at the end I look one more time"). Looks at the model rose significantly in the coached group
   (F(1,20) = 12.32, p = .002 for animate models); looks longer than 3 seconds also rose
   (F(1,20) = 9.45, p = .006). Drawings scored out of 23 (five components × 4 points + 3
   distinguishing features). **All 11 coached children improved; only about half the control
   group improved on practice alone, and the control group's range of improvement was half as
   large.** Subject test: **pass**.
3. **Deaver (2009), _Art Therapy: Journal of the American Art Therapy Association_ 26(1), 4–11** —
   open-access copy at `https://files.eric.ed.gov/fulltext/EJ833503.pdf`, read in full.
   316 fourth graders (mean age 9.69) and 151 second graders (mean age 7.56), each scored on
   five modified FEATS scales. Second graders scored higher on Prominence of Colour
   (M = 3.81, SD = 0.83 vs M = 3.53, SD = 0.93; t = 3.3, p < .01), on Space
   (M = 3.69, SD = 1.09 vs M = 3.08, SD = 1.15; t = 5.5, p < .01) and on Details
   (M = 3.08, SD = 1.24 vs M = 2.37, SD = 1.32; t = 5.6, p < .01). Fourth graders scored higher
   only on Developmental Level (M = 3.25, SD = 0.66 vs M = 3.00, SD = 0.59; t = 4.0, p < .01).
   **The counterintuitive finding the post is built on: the older child draws a more developed
   figure but fills less of the page and adds fewer details.** Subject test: **pass**.
4. **CBSE Circular Acad-33/2020, 14 May 2020** —
   `https://cbseacademic.nic.in/web_material/Circulars/2020/33_Circular_2020.pdf` · read in full
   via `pdftotext`. Verified: at least one Art-Integrated Project per subject is required of
   Classes IX and X from session 2020-21 and encouraged for Classes I–VIII; Art-Integrated
   Learning was introduced by Circular Acad-12/2019 (8 March 2019) with guidelines in
   Acad-22/2019 (18 April 2019); clause 4.3 requires integration with an Indian art form;
   **clause 4.7: "The project should be taken up in an eco-friendly manner, using readily
   available local resources without any financial burden on parents or guardians."**
   This is a curriculum fact, not a generic context statistic — the post therefore still
   carries **zero** PIB / TRAI / Census / MEA statistics.

### Fetched as a fact-check, deliberately kept out of `sources` and `citation`

- Drik Panchang, Ganesh Chaturthi 2026, Mumbai (`geoname-id=1275339&year=2026`). Body link only.

### Found and rejected — do not burn a slot re-searching these

- `mdpi.com/2227-7102/15/6/681` (Lowenfeld stage validity, 218 drawings, Madrid, 2025) — **HTTP 403**
  to the fetcher, as it was for two siblings. Perfect fit, unreadable.
- `ncert.nic.in` **does not resolve from this network at all** (connect timeout on both the Arts
  Education syllabus PDF and the site root), so the NCF-2005 Position Paper of the National Focus
  Group on Arts, Music, Dance and Theatre could not be read. `cbseacademic.nic.in` resolves fine;
  the CBSE circular was used instead. Worth retrying NCERT from another network.
- `journals.sagepub.com` (Wammes, Meade & Fernandes 2016, the drawing effect) — 403, as recorded
  by the business-wishes sibling. The MDPI replication (Educ. Sci. 14(5):470) also 403s.
- Every "how to draw Ganesha" page in the SERP is either a competitor content farm or an image
  dump, and none is cited or paraphrased.

### Cap accounting for this post (per batch `2026-09-09-ganesh-10b`)

All four cited domains were **previously untouched in both batches** and are each now at 1 of 3:
`pmc.ncbi.nlm.nih.gov` (0 in this batch before now), `ecrp.illinois.edu`, `files.eric.ed.gov`,
`cbseacademic.nic.in`. Nothing here reduces a sibling's remaining budget.
`dsal.uchicago.edu`, `aclanthology.org` (both at cap) and `arxiv.org` (its last slot) were not
touched. **Zero Wikipedia body links** — Wikipedia appears only as `sameAs` inside
`structuredData`: Q929250, Q1579, Q93184, Q1430886, Q3347350, Q2673557.

---

## Phase 4–5 notes

**Structure (9 H2s, FAQs excluded from the body):** definition of what makes a drawing read as
Ganesha → the six-shape build (6 H3s, mirrored as an `ItemList`) → Class 1 to Class 10 →
poster drawing and what a competition marks → why tracing will not help → craft alternatives →
getting the drawing to people who are not in the room (comparison table + both internal links)
→ when a shared page is the wrong choice → sources.

**Internal links (2):** `/happy-ganesh-chaturthi` first, placed in the "getting the drawing to
people who are not in the room" section — after the reader has a finished drawing and a reason
to send it — and `/templates`. Neither appears in the opening.

**First-party data.** No Ganesh-specific first-party number exists: the template has created
zero pages. Every figure used is platform-wide across 15 page types and is captioned that way
in the sentence nearest the claim, per `audit-remediation.md`.

**Conversion honesty.** Intent here is a child doing homework, not a buyer. The template link is
one sentence in one section, and `honestAssessment` says plainly that this post is a
top-of-funnel traffic asset with near-zero conversion.

**Known deploy blocker.** `https://subhsandesh.in/happy-ganesh-chaturthi` returned **HTTP 404**
again on 2026-09-09 while `/templates` returned 200 — the fourth sibling in a row to record it.
Logged in `auditReport.failed`.

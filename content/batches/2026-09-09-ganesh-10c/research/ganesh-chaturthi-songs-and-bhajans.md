# Research brief — `ganesh chaturthi songs`

- **Slug:** `ganesh-chaturthi-songs-and-bhajans`
- **Batch:** `2026-09-09-ganesh-10c` (wave 3), assignment n=3, cluster C09
- **Category:** `indian-festivals`
- **Date of research:** 2026-09-09. Ganesh Chaturthi 2026 = Monday 14 September. Anant Chaturdashi visarjan = Friday 25 September.
- **Research lane:** ethnomusicology of Marathi devotional song — bhajan and kirtan, Ganeshotsav's public music, fixed liturgy vs regional/generational repertoire.

---

## Phase 1 — SERP analysis

### Localisation caveat, recorded honestly

The `WebSearch` tool available to this agent is **US-locale only** and exposes no `gl`
parameter, so a true `gl=in` harvest was not possible from here. Attempts to fetch a
`google.com/search?...&gl=in` result page directly return the JavaScript shell, not
ranked results.

**Capture integrity.** No SERP on this page was read through the batch's shared Chrome
tab, so the tab-drift failure that hit a sibling agent in this wave does not apply
here. Every result below came from the stateless `WebSearch` tool, one call per
keyword, with no shared browser state to corrupt.

**Both stateless India-localised fallbacks were attempted from the sandbox and both
failed today:**

| Route | Result |
| --- | --- |
| DuckDuckGo HTML, `kl=in-en` (`html.duckduckgo.com` and `lite.duckduckgo.com`) | HTTP **202** bot-challenge page, ~14 KB, **0** result nodes — twice, both keywords |
| Brave, `country=in` | HTTP **429** rate-limited, identical 73,792-byte body on every attempt, including a retry after a 25-second wait |
| Google plain HTTP, `gl=in` | JS-walled, as documented — no result markup |

The 429 is consistent with ten sibling agents in this wave hitting Brave concurrently.
Corroboration across two engines was therefore not possible. It is **not load-bearing
here**: the cannibalisation gate came back at **0 shared articles against a threshold
of 3**, so the verdict does not sit anywhere near the line where a second engine would
change it. Had the count been 2, this post would have stopped and asked for a re-run.

The tables below are therefore the **best available approximation** of the India SERP:
the queries were run unmodified, and every ranked domain returned is an India-facing
property (Saregama, JioSaavn, Artium Academy, GrooveNexus, TemplePurohit, MantraMaya)
rather than a US one, which suggests the result set is close to the India ranking. This
limitation is carried into `auditReport.failed` rather than hidden.

Positions below are the returned result order, which is a proxy for rank, not a
verified rank.

### Top results — `ganesh chaturthi songs`

| # | Domain | Title | Format |
| --- | --- | --- | --- |
| 1 | saregama.com | Ganesh Chaturthi Songs Mp3 Download \| Ganesh Chaturthi Festival Songs | Streaming/download catalogue |
| 2 | artiumacademy.com | Best Songs to Celebrate Ganesh Chaturthi \| Artium Academy | Blog listicle (10 songs) |
| 3 | open.spotify.com | Ganesh Chaturthi Special (Hindi Devotional Songs) — album `58onrcjxEWwVQNltIZGQXP` | Streaming playlist |
| 4 | open.spotify.com | Ganesh Chaturthi Special (Hindi Devotional Songs) — album `4UgTXQhfon0vz611OFFQ6j` | Streaming playlist (duplicate album) |
| 5 | jiosaavn.com | Ganesh Chaturthi Songs \| Top Ganesha Songs In Hindi | Streaming playlist |
| 6 | youtube.com | Top Ganesh Songs I Ganesh Chaturthi 2024 | Video playlist (excluded from gate) |
| 7 | groovenexus.com | Top 14 Famous Ganesh Chaturthi Songs to Watch Now | Blog listicle (14 songs) |

**AI Overview:** none surfaced for this query.
**Featured snippet:** none surfaced.

**People-Also-Ask (as surfaced / inferable from the result set):**

- Which song is played on Ganesh Chaturthi?
- What is the most famous Ganesh song?
- Which aarti is sung for Ganpati?
- What songs are played during Ganpati visarjan?

### Format finding — the honest version

**Two of the seven ranked results are informational text pages** (artiumacademy.com,
groovenexus.com); the rest are streaming catalogues and playlists. So the format risk
in the assignment (`MEDIUM`) is confirmed and correctly graded: streaming dominates,
but a text page *does* rank, and there is no AI Overview occupying the answer slot.

Both text pages are the same artefact: a ranked list of film and devotional tracks with
a one-paragraph gloss each, no ritual sequencing, no distinction between liturgy and
repertoire. Neither answers "what do I play, and at which moment of the ten days".

### Top results — sibling keyword `ganpati aarti` (already live as `content/batches/2026-09-09-ganesh-10/blogs/ganpati-aarti.json`)

| # | Domain | Title | Format |
| --- | --- | --- | --- |
| 1 | open.spotify.com | Ganpati Aarti — Amitabh Bachchan (track `12nopdgaV2JrbX8OkU0MFB`) | Streaming track |
| 2 | play.google.com | Ganpati Aarti Sangrah 2026 — Apps on Google Play | App listing |
| 3 | youtube.com | GANPATI AARTI & MANTRA (Videos) by AMITABH BACHCHAN | Video playlist (excluded) |
| 4 | templepurohit.com | Shri Ganpati Aarti — Ganpati Ki Seva Mangal Meva | Lyrics page |
| 5 | youtube.com | Ganpati Aarti | Video playlist (excluded) |
| 6 | radhakrishnatemple.net | Ganesh Chaturthi Aarti: Lyrics in English, Meaning, Rituals | Lyrics + meaning page |
| 7 | indif.com | Ganesh Aarti, Shri Ganesha Aarti, Ganpati, Prayer to Lord Ganesha in Hindi | Lyrics page |
| 8 | mantramaya.com | गणपती आरती मराठी — Ganpati Aarti Marathi Lyrics (Text, PDF, Image) | Lyrics page |
| 9 | tohfatales.com | 10 Ganpati Arti Lyrics in English | Lyrics listicle |
| 10 | allmusic.com | Ganpati Aarti | Music metadata page |

### CANNIBALISATION GATE — verdict

Compared on **(domain, title) identity** — the same *article*, not merely the same
publisher — excluding `pinterest.com` and `youtube.com`:

| Domain in both SERPs? | `ganesh chaturthi songs` article | `ganpati aarti` article | Same article? |
| --- | --- | --- | --- |
| open.spotify.com | "Ganesh Chaturthi Special (Hindi Devotional Songs)" (two album IDs) | "Ganpati Aarti — Amitabh Bachchan" (a single track) | **No** — different entities entirely |

**Shared articles: 0.**

No other domain appears in both lists. `open.spotify.com` is the only overlapping
publisher, and it is exactly the false-merge pattern the BRIEF warns about — a platform
that ranks a different asset for every query. The two Spotify results are a *compilation
album* and a *single track by a named artist*; they are not the same article by any
reading.

**GATE VERDICT: PASS (0 shared articles, threshold is 3). Cleared to write.**

The two SERPs are also intent-distinct in a way that reads clearly off the format
column: `ganpati aarti` returns **lyrics pages** (the reader wants the words), while
`ganesh chaturthi songs` returns **playlists and catalogues** (the reader wants a queue
of tracks). The live sibling is a lyrics-and-sequence post; this one is a
repertoire-and-timing post. Their H2s do not collide except at one deliberate hinge —
the sibling's "Ganesh Chaturthi songs beyond the aarti" section, which this post treats
as its whole subject and which should eventually link here.

---

## Phase 2 — Gap analysis

### Table stakes (both text pages carry these; omit them and the post reads incomplete)

- "Deva Shree Ganesha" (*Agneepath*, 2012, Ajay–Atul, sung by Ajay Gogavale, lyrics
  Amitabh Bhattacharya) — the single most-cited track on this query.
- "Sukhkarta Dukhharta" — named on every page, always as one item in a list.
- "Shendur Laal Chadhaya" — the Hindi aarti, usually mislabelled as Marathi.
- Bollywood Ganpati numbers as a category.
- Dhol-tasha / Mumbai street sound as colour.

### The gap — what none of the ranked pages do

1. **No page separates liturgy from repertoire.** "Sukhkarta Dukhharta" — a fixed,
   sung-daily aarti attributed to Samarth Ramdas — is listed at #4 in a countdown
   between two film songs, as though the two were interchangeable choices. They are not
   the same *kind* of object: one is obligatory and unchanging, the other is optional
   and dated.
2. **No page maps song to moment.** The festival has an internal clock —
   *sthapana* / *pranapratishthapana* on day 1, two aartis a day for ten days, then the
   *visarjan* procession on Anant Chaturdashi. Every ranked page delivers one flat
   playlist for all ten days.
3. **No page distinguishes the three venues** — the household mandap, the sarvajanik
   (public) pandal, and the procession — which have different acoustics, different
   audiences and, since the 2016–2020 Bombay High Court noise-limit rulings, different
   legal ceilings.
4. **No page dates its repertoire.** The listicles mix a 1720s-era Marathi aarti, a
   2012 film song and a 2020s single with no chronology, so a reader cannot tell what
   their grandmother would recognise from what only their cousin would.
5. **Nobody says what to do when you cannot sing.** The practical question five days
   before the festival — twenty people in a room, one phone, nobody knows the second
   verse — is unanswered by every page on the SERP.

### Stale data

The ranked pages carry no statistics at all, stale or current — they are unsourced
editorial lists. That is itself the opening: there is no number on this SERP to
supersede, so any verified figure is a differentiator.

### Unanswered questions the pages raise and drop

- Is the aarti sung once or twice a day, and does that change across the ten days?
- Which aarti is Marathi and which is Hindi, and does it matter which you sing?
- What actually gets played at visarjan, and why is it different from what is played at home?
- Is playing film songs in front of the idol acceptable?

### Fan-out sub-queries (each becomes an H2 or FAQ)

- what songs are played on ganesh chaturthi
- which aarti is sung for ganpati and when
- ganesh chaturthi songs for visarjan / procession
- difference between bhajan, aarti and kirtan
- ganpati songs for home vs pandal
- marathi vs hindi ganpati aarti
- ganesh chaturthi bollywood songs list
- how loud can a pandal play music in maharashtra

### Angle (one sentence, recorded as `batchMeta.angle`)

> This post wins by being the only page on the SERP that separates the fixed liturgy
> (one aarti, sung twice daily for ten days) from optional film and pandal repertoire and
> then maps each to its moment in the sthapana → daily aarti → visarjan clock — using
> open-access ethnomusicology on Marathi kirtan and Ganeshotsav's public music plus
> SubhSandesh's own 46,005-view, 3,894-page behaviour data and its n=89 Raksha Bandhan
> lead-time measurement.

---

## Phase 3 — Sources

Five sources, every one fetched and verified to contain the claim made of it.

| # | Source | Published | Subject test | Swap test | Role |
| --- | --- | --- | --- | --- | --- |
| 1 | Anna Christine Schultz, "Marathi Kirtan Before and After 'The Classical'", *Open Access Musicology* Vol. 3 | 2025 | **Pass** — Marathi naradiya kirtan | Pass | The scholarly, open-access source. Hoshing's 1925 biography; Brahmin performers absorbing Hindustani raga/tala/improvisation while rejecting its secular contexts; classicization as boundary-making. |
| 2 | Sumaira Abdulali, "Soaring noise levels during Ganesh festival…", *Citizen Matters* | 2022-09-20 | **Pass** — Ganesh visarjan procession sound | Pass | Awaaz Foundation's measured dB: 55 dB residential limit; 115 dB Babulnath, 112 dB Bandra; 120.2 dB Opera House past midnight; 93.1 dB (2021), 100.7 dB (2020), 121.3 dB (2019). Also the 2016 Bombay HC orders and the DJ ban. |
| 3 | Shetty & Gupta, "Awareness of Noise-Induced Hearing loss among Young Dhol Tasha Players in Maharashtra", *IJARESM* 13(1) | 2025-01 | **Pass** — dhol-tasha players at Ganesh processions | Pass | n=50, aged 18–35, ≥5 years' experience, 19-item validated questionnaire; exposure above 85 dB. **Abstract only was readable** — recorded in the audit and stated in the body. |
| 4 | "Maharashtra declares Sarvajanik Ganeshotsav as state festival", *Akashvani News* (newsonair.gov.in) | 2025-07-11 | Pass (Ganeshotsav) | **FAIL** | The single generic government statistic. Minister Ashish Shelar's Legislative Assembly announcement; state bears organising and promotion costs. Could transplant to another Ganesh post in this wave — failed honestly in the audit rather than claimed. |
| 5 | "Sukhakarta Dukhaharta", English Wikipedia | — (no publication date; omitted from `citation`) | Entity/text only | n/a | Used **only** to verify the Devanagari spelling सुखकर्ता दुःखहर्ता and the attribution to Samarth Ramdas (1608–1682), plus the "most standard and almost universal" characterisation. Not counted as research. 1 of the permitted 0–2. |

**Cross-batch collision check** (run against every blog in every `content/batches/*`):
zero exact URL collisions. `en.wikipedia.org` and `newsonair.gov.in` appear in earlier
waves, but **neither appears in any `-10c` post**, and the caps are counted within
`-10c` only. The `newsonair.gov.in` page used by `-10b`'s Kannada post is a **different
article** (the Karnataka Gowri-Ganesha story), so no reader sees the same citation twice.

**Rejected candidates and why:**

- MPCB *Ambient Noise Monitoring during Ganesh Festival* reports (2020 and 2024 PDFs) — the
  single best-fitting source for this angle. Both URLs failed to fetch from the sandbox,
  so neither was cited. Worth retrying: it would supply per-location dB(A) Leq tables.
- AJSAT, "Assessment and Analysis of Noise Levels During Festivals in Guwahati" (2025) —
  open access and peer-reviewed, but it measures **Durga Puja and Deepawali**, not
  Ganeshotsav. Fails the subject test for this post and would fail the swap test.
- ResearchGate copies of the Mumbai/Satara/Solapur Ganesh noise studies — not fetchable.
- Marathi Wikisource text of the aarti — searched; **no such page exists**, which is why
  no Devanagari beyond the verified incipit is printed.

Selection notes:

- Lane-appropriate: Marathi kirtan/bhajan performance studies and Ganeshotsav public-music
  scholarship, not "music and wellbeing" generalities.
- Avoided per BRIEF §2: `drikpanchang.com` as a scholarly source, `arxiv.org`,
  and the domains already spent 3+ times in waves 1–2.
- Deliberately **not** reusing any of the five sources on the live `ganpati-aarti`
  sibling (PMC4632513, PMC4856205, two Frontiers papers, archive.org AaratiSangraha).
- Zero competitor citations: artiumacademy.com, groovenexus.com, templepurohit.com,
  radhakrishnatemple.net, indif.com, mantramaya.com and tohfatales.com are all
  competitors on this SERP and are cited nowhere.

## Transliteration discipline

Devanagari is printed only where it could be verified character-by-character against a
digitised primary text. Where a text could not be verified, the song is **named and
described in Roman only** and no line is quoted. No film lyrics are reproduced at
length anywhere in the post.

---

## Phase 8 — Audit remediation, 2026-09-10

Fix pass run by a reader who did not write the draft. Three recorded failures triaged,
BRIEF §3 re-read after its mid-batch reversal, whole 50-item checklist re-run.

### 1. Word band — closed

| Measure | Before | After |
| --- | --- | --- |
| Plain whitespace split (what `scripts/verify-batch.mjs` enforces, and the schema doc's validator) | 1,794 | **1,748** |
| `wordCount()` in `app/lib/batches.ts` (what the studio displays) | 1,829 | **1,787** |

The two disagree by ~39 — `wordCount()` strips `#>*_`|-[]()!` and so counts link and
table-cell fragments as tokens. `verify-batch.mjs` carries an explicit warning at the top
that the plain split is the authoritative band measure and that trusting `wordCount()`
"once nearly cost three posts real content". **1,748 plain split is inside 1,500–1,800, so
the band item passes.** Both figures are recorded in `batchMeta.wordCountNote`.

Cuts were flab only: a rhetorical tail ("with no author's discretion left in it"), a
section-closing restatement folded into the sentence before it, and roughly twenty
tightenings of two-word-for-one phrasing. Nothing substantive was cut for length — every
decibel figure, all five song-to-moment slots, the table and the mandatory Raksha Bandhan
disclosures are intact. Net additions in this pass: the Ganesh CTA and guide link (~45
words) and the MPCB paragraph (~60).

### 2. The Ganesh CTA — closed, and verified independently

`/happy-ganesh-chaturthi` was a genuine 404 when this post was drafted; it shipped on
2026-09-10. Re-verified from the sandbox rather than taken on trust:

| URL | HTTP | Evidence |
| --- | --- | --- |
| `https://subhsandesh.in/happy-ganesh-chaturthi` | 200 | `<title>` "Happy Ganesh Chaturthi — Send a Ganpati Wish They Can Perform, Free \| SubhSandesh"; 158 on-page ganesh/ganpati/modak/aarti mentions; durva 14, modak 18, Karpur 14, prarthana 14 — a real page, not a soft-404 shell |
| `https://subhsandesh.in/guides/happy-ganesh-chaturthi` | 200 | H1 "Build a Ganesh Chaturthi page for the people you cannot sit with" |
| `https://subhsandesh.in/sitemap.xml` | 200 | 1,123 `<loc>` entries, both Ganesh URLs present; still no `/blog/` entry for any post in this batch |

Body link set now, all from `TEMPLATE_LINKS`:

- `/happy-ganesh-chaturthi` — the topical CTA, placed in the "twenty people onto the same
  words" section, i.e. after the phone and lead-time numbers that earn it. Also in
  `batchMeta.templateUrls`.
- `/guides/happy-ganesh-chaturthi` — body reference only. Deliberately **not** in
  `templateUrls`: those resolve to Strapi template entries at publish and no template
  corresponds to a guide page (and `pathKey()` would collide it with the product page).
- `/dedication` — kept; it is the closest fit for the film-song half of the festival.
- `/templates` — **dropped.** It existed only as the stand-in for the dead Ganesh link.
- `/holi` — **dropped.** "The closest live example of a festival greeting page" is a
  claim that no longer holds now that the Ganesh page is live, and several siblings in
  this wave carry the same link.

`templateUrls` = `["/happy-ganesh-chaturthi", "/dedication"]`.

### 3. The MPCB PDFs — retried, and they fetched

Both URLs the original brief recorded as unfetchable resolved on 2026-09-10 from the
sandbox (Python `urllib`, browser UA), and the text was extracted with `pdftotext -layout`
and read:

| Report | URL | Result |
| --- | --- | --- |
| Ganesh Festival **2024** | `https://mpcb.gov.in/sites/default/files/Establishment%20of%20MPCB/Seniority%20list/2014/Report%20_Noise_Ganesh_AEC%20MPCB%202024_22.09.2024_R1.pdf` | **200, 5.5 MB, 173 pp** — cited |
| Ganesh Festival **2020** | `https://mpcb.gov.in/sites/default/files/noise-pollution/NoisemonitoringduringGaneshFestivalYear202011102021.pdf` | **200, 9.9 MB, 198 pp** — read, not cited (2024 supersedes it) |
| Ganesh Festival 2019 | `https://mpcb.gov.in/sites/default/files/noise-pollution/MPCBGaneshfestivalreport2019final04112020.pdf` | 200 — read for context only |

Verified in the 2024 report: hourly Leq dB(A) at **132 locations across all 27 municipal
corporations**, precalibrated Type-II meters on 1.5 m tripods **outside the pandals where
continuous music and crowds were present**, 1800–2400 hrs on 7, 8, 11, 13 and 17 September
2024; the first four days lower, and on **Anant Chaturdashi (17 September) levels above the
Noise Rules, 2000 thresholds at nearly all locations**, peak **102.36 dB at Gandhi Square,
Chandrapur**, against 96.30 dB at Pune's Shaniwar Peth and 93.7 dB at Mulund, Mumbai.
Caveat recorded honestly: the 2024 file is served from `mpcb.gov.in` but is **not linked
from the board's own noise-pollution index page**, which only lists 2017–2020; it was found
by search and confirmed by reading the PDF's own cover and conclusions.

Cap check before adding: `mpcb.gov.in` appears in **0** other posts in `-10c`. `doi.org`
and `pmc.ncbi.nlm.nih.gov` are both at exactly 3 posts and were not touched.

**It does not close the first-party-table failure.** MPCB is a government primary source,
not first-party data; the checklist item asks for a SubhSandesh column. See below.

### 4. Source set changed

- **Dropped:** `newsonair.gov.in` "Maharashtra declares Sarvajanik Ganeshotsav as state
  festival", together with the closing paragraph it supported. It was the post's one
  generic government statistic *and* its clearest swap-test failure, and the MPCB
  paragraph now carries the "public music here is regulated and measured" point with a
  measurement instead of an announcement.
- **Added:** MPCB *Report on Ambient Noise Monitoring during Ganesh Festival — 2024*
  (22 September 2024).
- Still five sources; `batchMeta.sources`, the `## Sources` list and the `citation` array
  on the `#post` enrichment block were updated together and mirror one-to-one.
- The four pre-existing outbound links were re-fetched today and still contain their
  figures: Citizen Matters (55 / 115 / 112 / 120.2 / 93.1 / 121.3 dB, Babulnath, Bandra,
  Opera House), Open Access Musicology (Hoshing, 1925, naradiya), IJARESM (50 players,
  18–35, above 85 dB, abstract only), Wikipedia (Samarth Ramdas, 1608, "almost universal",
  सुखकर्ता). The six `sameAs` entities were re-checked against the Wikipedia API and all
  six Wikidata QIDs still pair correctly.

### 5. Body claim corrected without being asked

The draft said SubhSandesh has no Ganesh page-creation data "because that template is not
live at the time of writing". That sentence became false on 2026-09-10. It now reads that
the page **went live on 10 September 2026, four days before the festival, so nothing has
been measured on it yet** — the honest limiter survives, the dead-link premise does not.
`batchMeta.publishBlockers` and `batchMeasurementUsed.honestLimiterStated` were updated to
match.

### 6. Audit re-run — 47 passed / 3 failed, disjoint, sum 50

All 50 item strings were re-extracted from `references/publish-checklist.md` and compared
byte-for-byte after collapsing internal whitespace: no paraphrase, no stripped `**bold**`,
no truncated clause, no overlap, none missing.

Left open, deliberately:

1. **"At least one table column uses first-party data"** — structural. The fourth column is
   now stronger (MPCB alongside Awaaz Foundation) but still entirely third-party. There is
   no per-setting, per-venue or per-festival SubhSandesh measurement, and no Ganesh page
   data at all — the page shipped four days before the festival and `facts.md` was
   regenerated 2026-09-09. A first-party column today means inventing a dimension.
   Re-check at the first `facts.md` regeneration after Anant Chaturdashi.
2. **"Slug short, hyphenated, lowercase, no stop words"** — the slug carries "and". Fixed
   by `ASSIGNMENTS.json` and verified free on Strapi; renaming in a fix pass would void the
   availability check and break the filename/canonicalURL/`@id` chain. Reported, not
   silently altered.
3. **"No source passes the swap test"** — improved, still failed. Dropping newsonair
   removed the clearest offender, but the two remaining noise sources (Citizen Matters and
   MPCB) are festival-wide rather than repertoire-specific and would transplant to any
   Ganesh post that discusses loudspeakers. Only Schultz, the dhol-tasha study and the
   Sukhakarta Dukhaharta entity check are bound to this keyword. Closes when a
   music-specific official or scholarly source is verifiable; the reported "Bhajani Mandals
   eligible for a grant of up to Rs 5 crore" detail would qualify but is not on the
   newsonair page and no GR text carrying it was fetchable today.

### 7. Verifier state, and the one failure left to the batch

`scripts/verify-batch.mjs` now reports **no per-post failure** for this slug: 1,748 words
(plain split), 11 FAQs, 47/3 audit, `indian-festivals`, body links
`/happy-ganesh-chaturthi /guides /dedication`.

Two notes for the record. First, while this fix pass was running the batch gained a
`verify.config.json` declaring `mandatoryLinks: ["/happy-ganesh-chaturthi"]` and no
`oneOfLinks`; before it existed the verifier fell back to the **bouquet-wave defaults**
(`/bouquet-gf` mandatory, one of `/love-gf` or `/darling`) and flagged 10 of the 11 Ganesh
posts identically. Those two failures on this post are now gone, and no girlfriend-page
link was added to a Ganesh songs post to satisfy them — that would have been off-topic and
would have pushed body internal links to five, breaking the checklist's 2–4 rule and
BRIEF §6.

Second, the run still flags the §4 social block's YouTube and Instagram URLs as over the
URL cap (2 posts) and the domain cap (3 posts) in **all 11 posts**. That block is
brief-mandated and verbatim, so it was not touched. It is a batch-level reconciliation
between BRIEF §4 and the cap rule, not something a single post can fix.

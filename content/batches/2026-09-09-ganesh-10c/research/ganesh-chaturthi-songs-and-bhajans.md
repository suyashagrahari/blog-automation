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

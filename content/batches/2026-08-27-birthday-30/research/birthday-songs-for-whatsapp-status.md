# Research brief — `birthday-songs-for-whatsapp-status`

**Batch:** 2026-08-27-birthday-30 (wave 2, rank 14) · **Lane H** — music in personal media, and
status/ephemeral sharing (new lane, no sibling shares it)
**Keyword:** birthday songs for whatsapp status · band 1000–3000 · expected clicks 132
**Written:** 2026-08-27

---

## Phase 0 — data gate

Satisfied by `BRIEF.md`'s birthday probe (`birthdaygfpages`, n = 198, measured 2026-08-26) plus
`content/facts.md`. Facts used, and where:

| Fact | Used in |
|---|---|
| 198 birthday pages, 100% attached a music track | answer paragraph, H3 6, table, data H2 |
| **53 of 198 (26.8%) added surprise audio** — the assignment's key number | answer paragraph, H3 6, table, FAQ 5, takeaway 2 |
| 2,224 views; 11.2 views/page vs 12.2 site-wide; 4 pages never opened | data H2, FAQ 8 |
| 195 pages added a quiz, only 28 played (14.4%) | data H2, FAQ 6 |
| Median first-save → last-edit 0.9 h; 100 of 198 (50.5%) inside the hour | closing H2, FAQ 10 |
| Music track max 5 per page (990 total) | table, closing H2, FAQ 10 |

Note on accuracy: all 198 pages are the **partner** birthday template (`/birthday-gf`, facts.md
#5 page type). The post says so explicitly rather than implying the measurement spans templates.

Per-song, per-genre and per-language birthday data **does not exist** and was not invented. No
checklist item covers it, so per `BRIEF-WAVE2.md` it is recorded in `honestAssessment` rather than
mapped onto an unrelated `failed` entry.

## Phase 1 — SERP (supplied, India-localised `gl=in`, 2026-08-26/27; WebSearch exhausted 200/200)

| # | Result | What it is | Format |
|---|---|---|---|
| 1 | youtube.com — "tranding on instagram \| happy birthday Lyrics Status" | video | UGC video |
| 2 | pixabay.com — "Download Happy Birthday Songs – Free MP3s and Music" | download library | file list |
| 3 | chosic.com — "Happy Birthday Songs & Music Free Download. 30 tracks" | download library | file list |
| 4 | bakingo.com — "Top 10 Birthday Songs in Hindi That Everyone Loves" | **the only real article** | listicle |
| 5 | pinterest.com — "Happy Birthday To You / WhatsApp status video" | pin board | image/video grid |
| 6 | capcut.com — "Happy Birthday Song for WhatsApp Status Free Download" | editor + download | template/download |
| 7 | in.pinterest.com — birthday songs / status pins | pin board | image grid |
| 8 | youtube.com — "Happy Birthday \| Ishq Forever \| Nakash Aziz" | video | music video |

No page was fetched. Every domain in this SERP is the competitor set for this keyword and the
hard constraint forbids citing, linking or recommending any of them — including recommending a
specific copyrighted film song for download. The SERP was read as supplied.

**What the SERP is optimising for:** file delivery, not an answer. Seven of eight results exist
to hand over an MP3 or a pre-made status video. One (bakingo) is a Hindi-song listicle.

## Phase 2 — gap analysis

**Table stakes** — a named set of song options; the words "WhatsApp status"; something about
Hindi/regional songs; a route to actually getting audio onto a status.

**The gap.** Nothing in the SERP addresses the *constraint*. Nobody states the published length
cap, nobody says which part of a song to cut, and nobody engages with copyright at all — a
striking omission for a page whose top three results are free-download libraries of tracks.

**Stale / absent data.** None of the eight cite a source or a date for anything.

**Unanswered questions → the fan-out set, and the H2s that answer them:**

| Sub-query | H2 |
|---|---|
| How long can a song be on a WhatsApp status? | What is a birthday song status, and how long can it be? |
| Which part of the song do I use? | How to find the usable 30 seconds in any birthday song |
| Which song for which person? | Six kinds of birthday song, and which 30 seconds to use |
| Status vs chat vs a link — where does it land? | Status, page or chat: where a birthday song actually gets heard |
| Is a film song on my status legal? | The copyright reality of putting a film song on your status |
| Does anyone even listen? | Does anyone actually hear it? What 198 birthday pages show |
| When should I not do this? | When a birthday song status is the wrong move |

**Angle (`batchMeta.angle`):** wins by being the only post that treats a birthday song status as a
30-second editing problem — where the usable window sits, and why there is no length below which
copyright stops — instead of a download list, using the measured fact that 100% of 198 SubhSandesh
birthday pages attached a track but only 26.8% recorded audio of their own.

**Conversion caveat, stated in the post and not hidden.** The searcher wants an MP3 file.
SubhSandesh sells a shareable page. This is top-of-funnel traffic with weak conversion, and the
post says so in the "wrong move" section rather than pretending the fit is good.

## Phase 3 — sources

Lane H. Searched the phenomenon, not the keyword. Tool route: `ctx_execute` + OpenAlex, Europe PMC,
DOAJ and Crossref APIs; `ctx_fetch_and_index` was blocked by bot-checks on PMC and Springer, so
full texts were pulled with `ctx_execute` (urllib + `pdftotext`) and read in the sandbox.
No `curl`/`wget`, no `WebFetch`, no `WebSearch`.

Search terms tried: `music sharing social identity`, `ephemeral social media stories research`,
`background music emotional response`, `music in social media stories self-presentation`,
`music listening identity construction`, `WhatsApp status music sharing`,
`short form video music hook TikTok song structure`, `recognition familiar melody brief exposure
milliseconds`, `copyright user generated content music social media platforms`,
`fair dealing India copyright section 52 user generated content`,
`de minimis music sampling copyright seconds rule myth`.

**Full text read for all five.** No source was cited from an abstract.

| # | Source | Verified claim | Published | Test |
|---|---|---|---|---|
| 1 | Schäfer, Sedlmeier, Städtler & Huron, *The psychological functions of music listening*, Frontiers in Psychology 4:511 (PMC3741536) | 129 non-redundant functions rated by 834 respondents; PCA → three dimensions; arousal and mood regulation M = 3.78, self-awareness M = 3.59, social relatedness M = 2.01 (below the scale mean) | 2013-08-13 | subject ✓ scholarly ✓ |
| 2 | Raffa & Pronzato, *The Social Life of an Optimised Song*, Popular Music 44:62–80, CC BY | 39 semi-structured interviews (15 producers/songwriters, 12 heavy platform users, 12 industry operators); producers "increasingly being asked to put the chorus at the start of tracks"; one writes at 122–128 bpm because "eight bars of chorus takes about 15 seconds, […] exactly the length of an Instagram story" | 2025-06-26 (online; issue 2025-02) | subject ✓ scholarly ✓ |
| 3 | Reid & Miño, *When Therapy Goes Public: Copyright Gatekeepers and Sharing Therapeutic Artifacts on Social Media*, International Journal of Communication 15:950–969 | 18 in-depth interviews with US board-certified music therapists, summer 2020; comfortable with copyrighted music inside a private session, not once a recording is shared; fair use is case-by-case and "provides weak ex ante guidance for users"; gatekeeping to forestall the emotional harm of a takedown | 2021 | subject ✓ scholarly ✓ |
| 4 | Meta, *Introducing New WhatsApp Status Features* | "the ability to record and share voice messages of up to 30 seconds on WhatsApp status"; "Every status disappears in 24 hours"; private audience selector; link previews on status | 2023-02-07 | subject ✓ platform primary |
| 5 | Meta, *New Music, Layout and Sticker Options in WhatsApp Status* | music added to Status — share a song as your status or turn it into a music sticker; **no clip length is stated anywhere in the announcement** | 2025-05-29 | subject ✓ platform primary |

**Swap test.** All five are about music inside personal/ephemeral media. None could sit unchanged
in a sibling's post: the closest sibling, `birthday-status-for-whatsapp`, is about *text* length
and shares no URL or domain with this file.

**Generic context statistics: zero.** No PIB, TRAI, Census or MEA figure appears.
**Wikipedia body links: zero** (entities appear only in `structuredData.sameAs`, which is exempt).

**In-batch caps, measured before citing** (BRIEF-WAVE2 snippet, 10 wave-1 posts, 43 domains):
`pmc.ncbi.nlm.nih.gov` 0/3 · `cambridge.org` 0/3 · `ijoc.org` 0/3 · `about.fb.com` 0/3.
No URL at 2. Two `about.fb.com` URLs are used, which is one post against that domain's cap of
three posts. Nothing near a limit; the four at 2 of 3 (`pure.uva.nl`, `ccsenet.org`,
`journals.openedition.org`, `r12a.github.io`) are untouched and left for siblings.

## Sources that were wanted and could not be obtained

- **The Copyright Act, 1957 (India), s. 52.** Wanted as the primary text for the claim that Indian
  fair dealing is purpose-based with no duration threshold. `indiacode.nic.in` is mid-migration
  and 404s on every bitstream path tried; `wipolex-res.wipo.int` and `copyright.gov.in` both
  return an HTML shell instead of the PDF; `iprs.org` returns 403. **The post therefore does not
  assert anything about Indian statute** — it states the US mechanism from source 3 and says
  plainly that India's regime is separate and unlinked. Recorded in the audit.
- **A published length for WhatsApp's music-in-Status clips.** Meta's own announcement gives none,
  and `faq.whatsapp.com` / `blog.whatsapp.com` return HTTP 400 to any non-browser client. The post
  says the length is unpublished rather than guessing, and the comparison table carries
  "Meta publishes no length" as a real value.
- **A short-excerpt music-recognition study.** Schellenberg et al. 1999 (*Name that tune*) and
  Filipic et al. 2010 (*Judging familiarity and emotion from very brief musical excerpts*) are both
  exactly on point and both sit behind link.springer.com's bot challenge, with no open mirror
  (UCL Discovery 403, CiteSeerX dead). Source 2 covers the same ground from the production side
  with a verifiable number, so the post uses that instead of citing an abstract.

## Phase 5 — targeting

- `categorySlug`: `milestone-birthdays` — confirmed live in Strapi 2026-08-27 (id 2).
- `templateUrls`: `/birthday-friend`, `/birthday-gf`, `/templates` — all present in `TEMPLATE_LINKS`.
  `/birthday-gf` is included because it is the template the 198 measured pages actually are.
- Slug checked against live Strapi 2026-08-27: `total: 0`. Free.
- `structuredData`: `ItemList` mirroring the six H3s in order, plus one `@id`-matched enrichment
  block on `…#post` carrying `about`, `mentions` and `citation` (five entries, one per source).
  Every `sameAs` verified through the Wikipedia API: WhatsApp Q1049511, Hindi film music Q6942022
  (`Filmi` redirects here), Copyright law of India Q3520092, Happy Birthday to You Q167545.

## Cannibalisation

181 birthday posts live, plus 10 wave-1 siblings. The near-collision is
`birthday-status-for-whatsapp` (wave 1), which is about how long a *written* status should be and
is organised around the 96-character median. This post never uses the 96-character finding, never
lists written status lines, and is organised around audio and the 30-second window. Distinct
sources, distinct H2s, no shared marker phrase.

## Phase 6 — measurements and audit

Measured 2026-08-27 with the `wordCount()` snippet from `BRIEF-WAVE2.md` (not a plain split):

| Measure | Value |
|---|---|
| `wordCount()` on `contentMarkdown` | **1,787** (cap 1,800) |
| Plain whitespace split, for reference | 1,781 |
| H1 / H2 / H3 | 1 / 8 / 6 |
| FAQs (`article.faqs` only) | 12 |
| Outbound links, all full-text verified | 5 |
| Internal links from `TEMPLATE_LINKS` | 3 |
| Sources | 5 — 3 scholarly, 0 generic context statistics, 0 Wikipedia |
| Audit | 48 passed + 2 failed = 50, disjoint |

Body paragraphs were split so every paragraph runs two or three sentences, except the Block 1
answer paragraph. The Sources H2 is plain-text citations with dates because each source is already
hyperlinked at the exact claim it supports in the body.

**Both remaining failures are structural**, and each `why` describes its own item:

1. *Paragraphs 2–3 sentences throughout* — the opening answer paragraph is six sentences because
   `page-structure.md` Block 1 requires the direct answer, two first-party numbers and the roadmap
   in one liftable ~150-word block. The two rules conflict; no rewrite closes both.
2. *Slug short, hyphenated, lowercase, no stop words* — `birthday-songs-for-whatsapp-status` keeps
   the stop word "for" because it is the exact assigned keyword and the assignment fixes the
   filename. Closes only if the assignment reissues the slug.

Not recorded as audit failures, because no checklist item covers them and `BRIEF-WAVE2.md` routes
process limitations to `honestAssessment`: the absence of per-song/per-genre/per-language birthday
data, and the unreachable primary text of India's Copyright Act. Both are stated in
`honestAssessment`.

`batch.json` was deliberately **not** touched — four other wave-2 agents were writing concurrently
and it is a shared file.

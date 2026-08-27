# Research brief — `birthday-wishes-in-punjabi`

- **Keyword:** birthday wishes in punjabi
- **Batch:** `2026-08-26-birthday`, wave 2, rank 20, expected clicks 132
- **Lane:** C — multilingual communication. Sub-angle: Gurmukhi vs Shahmukhi, Punjabi as a script split across two countries.
- **Category:** `milestone-birthdays` · **Templates:** `/birthday-parents`, `/birthday-friend`, `/templates`
- **Written:** 2026-08-27 · **Body:** 1,770 words by `wordCount()` (1,758 plain split) · **FAQs:** 11

---

## Phase 0 — data gate

Satisfied by `BRIEF.md`'s read-only probe of `birthdaygfpages` (n=198, 2026-08-26). Facts used:

| Fact | Where it appears |
|---|---|
| Median personal message 96 characters (n=197) | First 150 words, table section, FAQ |
| 106 of 197 messages under 100 characters | First 150 words |
| 198 birthday pages created, 6.5% of all pages | First 150 words |
| 28 of 195 quizzes ever played — 14.4% | Objection section |
| 4 of 198 pages never opened | Objection section |
| Birthday views 48.6% mobile vs 51.0% site-wide | Objection section, FAQ |

**Recorded absence:** the probe has **no language field**. No Punjabi-specific first-party figure exists, and none was invented. Every first-party number in the post is all-birthday-pages, and the copy never implies a Punjabi cut. Closing condition: a language or locale column on `birthdaygfpages`, then a re-query.

---

## Phase 1 — SERP (supplied, India-localised `gl=in`, 2026-08-26/27)

WebSearch was exhausted at 200/200, and the competitor pages were **not fetched** — the SERP list below is the brief's, and it is the only competitor evidence this post rests on. That is a real limitation, recorded in `honestAssessment`.

| # | Page | What it is | Read on the intent |
|---|---|---|---|
| 1 | `igp.com` — Happy Birthday Wishes, Messages, Shayari in Punjabi | Gifting retailer | Commercial page renting the query |
| 2 | `pinterest.com` — **Sikh** Birthday Wishes in Punjabi | Image board | Frames the language as a religion — the factual error corrected in the post |
| 3 | `wishhappybirthday.org` — 45+ Birthday Wishes In Punjabi | Wishes farm | Count, no guidance |
| 4 | `punjabiwishes.com` — 60+ … For Friend In Punjabi | Wishes farm | Count, no guidance |
| 5 | `scribd.com` — Happy Birthday Wishes in Punjabi | Uploaded **PDF** | A PDF ranking top-5 is the clearest signal the intent is unserved |
| 6 | `shayarilekh.com` — Top 55 Birthday Love Wishes | Shayari farm | Count |
| 7 | `punjabishayarii.com` — Top 600+ Birthday Shayari | Shayari farm | 600+ items, zero guidance |
| 8 | `preply.com` — How to say happy birthday in Punjabi | **Language-tutoring** page | A tutoring site ranking on a wishes query = nobody is answering the language question |

**Every domain above is a competitor for this batch's purposes. None is linked or cited.**

### Table stakes
Copy-pasteable Punjabi wish text; a Roman transliteration; an English gloss; some relationship coverage (friend, brother, lover).

### The gap
Not one of them says which **script** to send. Punjabi is written in Gurmukhi in India and Shahmukhi in Pakistan; a Gurmukhi message is unreadable to a Shahmukhi reader. That is the spine of this post.

Second gap: **register**. None gives the `tu`/`tusi` rule or the `ji` honorific, so a reader copying a line can send a grammatically disrespectful message to an elder without knowing.

Third gap: **length**. The pages compete on volume ("600+"). Nobody says how long a wish should be.

### The framing error
Result #2 files Punjabi wishes as *Sikh* wishes. Punjabi is spoken by Sikhs, Hindus and Muslims across two countries, and 44.15% of Pakistan's population has it as a mother tongue. The post corrects this by giving a religiously neutral blessing (`Rabb`) as the default and the Sikh one (`Waheguru`) as explicitly Sikh — a correction delivered as a practical instruction rather than a lecture.

### Fan-out sub-queries → H2s
| Sub-query | H2 |
|---|---|
| What is a Punjabi birthday wish / which script? | What a birthday wish in Punjabi actually is |
| Give me the wishes | Eight birthday wishes in Punjabi, with script, sound and meaning |
| Gurmukhi or Shahmukhi or Roman? | Gurmukhi, Shahmukhi or Roman: pick before you write |
| How long / will it render? | How the three scripts compare on a 96-character message |
| Are these Sikh wishes? | Punjabi is not a Sikh-only language, and that changes the wish |
| How do I not offend an elder? | The honorifics that decide whether the wish lands |
| When is a Punjabi wish a bad idea? | When a Punjabi birthday wish is the wrong choice |

---

## Phase 2 — angle

> Wins by being the only post that treats "a birthday wish in Punjabi" as a script decision first — Gurmukhi for India, Shahmukhi for Pakistan, Roman for everyone else — and prices each script against SubhSandesh's measured 96-character median personal message, while correcting the Sikh-equals-Punjabi conflation the ranking pages repeat.

### Cannibalisation check
`raksha-bandhan-wishes-in-punjabi` exists in the **different** batch `2026-08-25-rakhi-2027`. It was read. Overlaps: it carries a Gurmukhi-vs-Shahmukhi H2 as one section among six, framed by the 6.9-hour love-page edit window. Divergences taken deliberately: script choice is the **spine** here rather than a section; the honorific/register layer and the Sikh-conflation correction are new; the framing number is the 96-character birthday median, not the 6.9-hour window; and **none of its five sources is reused** (`unicode.org`, `aclanthology.org/C12-2062`, `cardinalscholar.bsu.edu`, `arxiv.org/abs/2508.01918`, `etheses.whiterose.ac.uk` all avoided). No live birthday post covers Punjabi.

---

## Phase 3 — sources

Lane-C sibling sources were read first and **none is reused**: `research.google`, `github.com/google-research-datasets`, `r12a.github.io`, `google.com/inputtools`, `journals.phil.muni.cz` (Hindi); `sciendo.com`, `shura.shu.ac.uk`, `erpjournal.net`, `shodhganga.inflibnet.ac.in`, `r12a.github.io` (Tamil); `ons.gov.uk`, `taylorfrancis.com`, `openaccess.wgtn.ac.nz`, `notofonts.github.io` (Gujarati); `bop.unibe.ch`, `etsi.org`, `source.android.com`, `learn.microsoft.com`, `harfbuzz.github.io` (Telugu); `ruj.uj.edu.pl`, `eprints.whiterose.ac.uk`, `corpora.uni-leipzig.de`, `aclanthology.org` (Hindi reply).

`r12a.github.io` was **not** taken: measured at 2 of 3 (Hindi + Tamil), and three other lane-C siblings were briefed to want the last slot. Routed around it instead.

Search terms used (via DOAJ API, Crossref, and direct repository fetches — OpenAlex and Semantic Scholar were both rate-limited to zero by concurrent siblings): `Shahmukhi`, `Gurmukhi`, `Punjabi script`, `Punjabi language Pakistan`, `digraphia`, `Punjabi address terms`, `Punjabi kinship terms`, `Punjabi politeness`, `Punjabi WhatsApp`, `Punjabi code-switching`, `Punjabi diaspora language`, `Punjabi greetings`, `shodhganga Punjabi Gurmukhi thesis`.

### Sources cited (5) — in-batch domain counts measured 2026-08-27, immediately before citing

| Source | Domain | In-batch count | Full text? | Load-bearing fact |
|---|---|---|---|---|
| Hussain, *Punjabi (India and Pakistan) – Language Snapshot*, Language Documentation and Description 19, 2020-12-31 | `lddjournal.org` | **0 of 3** | **Abstract only** — the galley PDF sits behind an Anubis bot challenge; five fetch routes tried | Gurmukhi for Eastern dialects in India; Shahmukhi (Perso-Arabic) mainly in Western Punjab, Pakistan |
| Nazir, Aftab & Saeed, *Language Shift – The Case of Punjabi in Sargodha Region of Pakistan*, Acta Linguistica Asiatica 3(2), 2013 | `journals.uni-lj.si` | **0 of 3** | **Yes** (5,228 words extracted) | n=80 questionnaires + n=3 interviews; young speakers rate Punjabi reading and writing at 25% each; census table gives Punjabi 44.15% of Pakistan vs Urdu 7.57% |
| Saini & Lehal, *Word Disambiguation in Shahmukhi to Gurmukhi Transliteration*, 9th Workshop on Asian Language Resources, Chiang Mai, 2011-11-12 | `learnpunjabi.org` (Punjabi University, Patiala) | **0 of 3** | **Yes** (5,286 words extracted) | Gurmukhi 41 letters vs Shahmukhi 38; 20% of top-100 Shahmukhi words ambiguous into Gurmukhi; short-vowel coverage 1.66% vs 6.13%; disambiguation just over 92% |
| Kaur, *Strategies and Approaches in Translating Cultural Punjabi Terms*, Journal of Modern Languages 18(1), 2008 | `ejournal.um.edu.my` | **0 of 3** | **Yes** (6,507 words extracted) | The two populations "cannot read or write each other's language"; elders take plural `tusi`/`tuhanu`; `ji` attaches to kinship terms; Gurmukhi standardised in the 16th century for the gurus' teachings |
| Singh & Kamboj, *Next Word Prediction in Social Media Texts for Punjabi-English Bilingual Users with Sequential CNN-BiLSTM*, Baghdad Science Journal 22(11), 2025-11-24 | `bsj.uobaghdad.edu.iq` | **0 of 3** | **Abstract only** — `viewcontent.cgi` returns HTTP 403 | Large Gurmukhi character set makes typing slow, so many Punjabi users write Roman on WhatsApp/Facebook/Twitter; corpus of 311,271 WhatsApp sequences of 2–33 words |

- **Subject test:** all five are *about Punjabi*, its scripts, or how Punjabis type. None is "about India" or "about the internet".
- **Swap test:** none could sit in a sibling's post — every one is Punjabi- or Shahmukhi-specific.
- **Peer-reviewed and open-access:** four of the five (LDD, Acta Linguistica Asiatica, the ALR workshop proceedings, Journal of Modern Languages).
- **Generic context statistics:** zero government sources cited. The single census figure (44.15%) is quoted from a scholarly paper's own table, not from a census portal.
- **Wikipedia body links:** zero. Wikipedia appears only as verified `sameAs` targets in JSON-LD, which does not count against the body budget.
- **Nothing reproduced:** no figure, chart or table copied; all tables in the post are our own.
- **Licence note:** the LDD article is CC BY-NC. It is cited and linked only — no material reused, which the NC clause would forbid for a commercial blog.

### Sources considered and rejected
- `pmc.ncbi.nlm.nih.gov` — already at 3 of 3 in-batch, no slots.
- `aclanthology.org/C12-2062` (Saini & Lehal, *Conversion between Scripts of Punjabi*) — the rakhi post's source, and would have duplicated its framing. The 2011 ALR paper on `learnpunjabi.org` was used instead, for different facts.
- `arxiv.org`, `pib.gov.in`, `census.gov.in`, bare `doi.org` — banned corpus-wide.
- `journals.rudn.ru` digraphia paper — subject test fails (English/Cyrillic digraphia, not Punjabi).
- `journals.plos.org` Arabic-script Punjabi simplification paper (2026) — genuinely on-subject, but `journals.plos.org` was already taken this wave.
- `mdpi.com` *Monsoon Wedding* translation paper — on code-switching in film dialogue, too far from a written wish.
- `unicode.org` Gurmukhi code chart — reachable and verified (Version 17.0, block U+0A00–U+0A7F), but the rakhi post already used `unicode.org` for the same block fact, so it was dropped to avoid restating.

### Original measurement (better than a citation, per the wave-2 brief)
Rather than duplicate the sibling's Leipzig-corpus method, the eight composed wishes were measured directly in-sandbox on 2026-08-27, in all three renderings:

| Rendering | Mean code points | Mean UTF-8 bytes | Fits in 96 chars |
|---|---|---|---|
| Gurmukhi | 31.0 | 82.8 | 3.1× |
| Shahmukhi | 30.3 | 55.8 | 3.2× |
| Roman | 36.0 | 36.0 | 2.7× |

Script purity was asserted programmatically for all 24 strings (Gurmukhi block only / Arabic block only / ASCII only). The counter-intuitive finding — Roman Punjabi is the **longest** of the three at 16% more characters than the Gurmukhi original, while Shahmukhi is the **cheapest in bytes** because Arabic-block code points are 2 bytes against Gurmukhi's 3 — is original to this post. **It depends on the composed strings being correct Punjabi, which is unverified.**

---

## Phase 6 — audit summary

- **50 items, 49 passed, 1 failed.** Disjoint, sums to 50, strings copied verbatim from `publish-checklist.md`.
- **The one failure**, per BRIEF-WAVE2.md correction 3, is *"The post contains at least one claim none of the top 5 pages make"*, recorded **structural**: the differentiating claim in a language post **is** the script content, and every Gurmukhi and Shahmukhi string here is machine-composed. No citation can close it — a source can attest that the two scripts differ, but none can attest that these particular sentences are idiomatic Punjabi with correct honorific register and correct conjuncts. **Closing condition: native-reader sign-off, in Gurmukhi and (for the Shahmukhi table row) Shahmukhi, on every string.**
- Process limitations kept out of `failed` and stated in `honestAssessment`: the top-5 pages were not fetched, and two of five sources yielded abstracts only.

## Do not publish before
A native Punjabi reader has checked all eight Gurmukhi wishes, their Roman transliterations, the Shahmukhi row's premise, and the `tu`/`tusi`/`ji` guidance.

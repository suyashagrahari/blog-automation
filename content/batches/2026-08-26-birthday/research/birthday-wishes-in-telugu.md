# Research brief — "birthday wishes in telugu"

Batch: `2026-08-26-birthday` · slug: `birthday-wishes-in-telugu` · rank 8 · lane **C**
Sub-angle: **Telugu script rendering, encoding and font fallback**
Written 2026-08-27. WebSearch not used (exhausted 200/200); SERP supplied by the batch owner
from a live `gl=in` browser harvest. All source pages fetched and read in full.

---

## Phase 0 — data gate (satisfied by BRIEF.md)

Birthday-specific probe of `birthdaygfpages`, n = 198, run 2026-08-26. Facts used:

| Fact | Where it lands |
|---|---|
| Median personal message **96 characters** (n=197); 106 of 197 under 100 characters | Answer paragraph, table, three H2s |
| Birthday views **1,081 mobile / 1,121 desktop / 22 tablet = 48.6% mobile** (2,224 views on 198 pages) | Answer paragraph, downside section |
| **198 birthday pages, 6.5% of 3,024** created; #5 page type | Answer paragraph |
| **11.2 views per birthday page** vs 12.2 site-wide | Rendering-risk section |
| Only **28 of 195** quiz-carrying pages had the quiz played (**14.4%**) | Downside section (the inconvenient number) |
| Median first-save → last-edit gap **0.9 h**; 50.5% finished inside the hour | "Test before you send" argument |
| **37.9%** password-protect a birthday page vs 43.9% site-wide | Downside section |

Site-wide line from `content/facts.md`: 51.0% of shared pages are opened on a phone
(18,789 of 36,851) — used only as the contrast for the 48.6% birthday figure.

Gate passes: 3+ relevant facts, 2+ placeable in the first 150 words.

---

## Phase 1 — SERP analysis (India, supplied)

| # | Page | What it is | Words (fetched) | Tables | FAQ schema | Direct answer? | Mentions rendering / encoding |
|---|---|---|---|---|---|---|---|
| 1 | `telugufunnysms.blogspot.com` | Blogspot SMS blog homepage, mixed English success-quotes and Telugu status | ~3,350 | 0 | none | No — no answer block at all | No |
| 2 | `teluguq.com` — "450+ Best Birthday Quotes In Telugu" | Very long relation-segmented listicle (lover, best friend, bible, son, brother, daughter, friend, sister, wife, leader…) | ~13,800 | 0 | none (1 ld+json, WebSite-level) | No — straight into lists | No |
| 3 | `in.pinterest.com` | Image board | n/a | 0 | n/a | No | No |
| 4 | `telugu.timesnownews.com` | News-vertical seasonal listicle, not a standing wishes resource | n/a | 0 | n/a | No | No |
| 5 | `in.pinterest.com` | Image board ("26 Birthday greetings images ideas") | n/a | 0 | n/a | No | No |
| 6 | `craftoapp.com` | App-download page wrapped around a wish list | n/a | 0 | n/a | No | No |
| 7 | `telugubucket.com` — "101 Birthday Wishes in Telugu" | ~474 words of HTML; the wishes are **baked into images**, so the page has almost no indexable Telugu text | ~474 | 0 | none | No | No |

Tone across all of them: third person, no byline, no dates, no numbers, no tradeoffs.
Nothing on the page is dated and nothing is sourced.

**Weakness confirmed as 3–4 of 5.** A blogspot subdomain at #1 and two Pinterest boards in
the top five is a thin field. It is still an entrenched-domain problem: `teluguq.com` and
`telugubucket.com` have years of topical Telugu content behind them. Do not overclaim.

Note for the gap analysis: `telugubucket.com` shipping its wishes as images is itself a
rendering workaround — it guarantees the glyphs appear because the reader's font is never
involved. Nobody on the SERP says that out loud, and nobody explains what happens when the
reader's font *is* involved.

---

## Phase 2 — gap analysis

**Table stakes** (present on every ranking page, so the post must carry them):
Telugu-script wishes with a Roman transliteration; an English gloss; some relationship
coverage (parents, friend, partner); the standard phrase `పుట్టినరోజు శుభాకాంక్షలు`.

**The gap.** Not one of the seven ranking pages mentions:
- what encoding a Telugu message travels under, or the 70-vs-160 character asymmetry;
- why Telugu appears as empty boxes or dotted circles on some devices;
- that the Android compatibility guarantee for font coverage stops at Latin, Greek and Cyrillic;
- how long a Telugu wish should actually be, with a measured number behind it.

Every page competes on **volume** (450+, 101, 100+). The measured behaviour is the opposite:
the median personal message on a SubhSandesh birthday page is 96 characters. A post that
gives six wishes with exact character counts and the transport maths is doing a different
job from a 13,800-word list.

**Stale data.** None of them cite anything at all, so there is nothing to supersede — the
win here is being the only page with a dated citation.

**Unanswered questions raised and dropped:** "will this show up properly on their phone?"
is never raised. Neither is "how long should it be?".

**Fan-out sub-queries** → H2s and FAQs:
- what is `పుట్టినరోజు శుభాకాంక్షలు` / how do you say happy birthday in Telugu → definition H2 + FAQ
- short birthday wishes in Telugu → wishes H2 with counts
- why does Telugu show as boxes / squares on WhatsApp → rendering H2 + FAQs
- Telugu SMS character limit → encoding H2 + table
- Telugu vs Tenglish (Roman-script Telugu) → downside H2 + FAQ
- formal vs informal Telugu birthday wish (మీరు / నువ్వు) → downside H2 + FAQ
- is Telugu harder to read on a screen → eye-tracking H2

**Angle (one sentence, recorded as `batchMeta.angle`):**
> Wins by being the only page on this keyword that treats a Telugu wish as something that
> has to *survive transport and font fallback*, pairing the 3GPP 70-character UCS-2 SMS
> limit and the Android CDD's Latin/Greek/Cyrillic-only font guarantee with SubhSandesh's
> measured 96-character median birthday message (n=197) and 48.6% mobile split.

---

## Phase 3 — sources

Lane C, sub-angle "script digitisation / rendering / font fallback". Siblings (Hindi, Tamil,
Gujarati) must not share these. Domain counts re-measured across
`content/batches/*/blogs/*.json` immediately before writing — all five were at **0 or 2**.

| # | Source | Domain (count before) | Subject test | Swap test | What was verified, and how |
|---|---|---|---|---|---|
| 1 | Chowdhury, Bhattacharyya, Majumdar & Majumdar (2015), "Effect of Dravidian vernacular, English and Hindi during onscreen reading text", *Journal of Eye Movement Research* 8(2):4 — `https://bop.unibe.ch/JEMR/article/view/2401` | `bop.unibe.ch` (0) | Yes — on-screen reading of **Telugu** specifically | Passes: no other keyword in this batch could use Dravidian on-screen reading data | **Full PDF downloaded and read** (`article/download/2401/3597/8625`), not just the abstract. See discrepancy note below. |
| 2 | Android 15 Compatibility Definition, §3.8.13 "Unicode and Font" — `https://source.android.com/docs/compatibility/15/android-15-cdd` | `source.android.com` (0) | Yes — what fonts an Android device is *required* to ship | Passes: only a script-rendering post needs it | Full document fetched and §3.8.13 read verbatim |
| 3 | Microsoft, "Developing OpenType Fonts for Telugu Script" — `https://learn.microsoft.com/en-us/typography/script-development/telugu` | `learn.microsoft.com` (2 — took the last slot) | Yes — Telugu shaping, conjuncts, reordering, missing-glyph behaviour | Passes: Telugu-specific document | Full page fetched; feature order, cluster constraints and the U+25CC / white-box passage read verbatim |
| 4 | ETSI TS 123 038 V17.0.0 (2022-04) = 3GPP TS 23.038, "Alphabets and language-specific information" — `https://www.etsi.org/deliver/etsi_ts/123000_123099/123038/17.00.00_60/ts_123038v170000p.pdf` | `etsi.org` (0) | Yes — the SMS alphabet rules that decide what a Telugu message costs | Passes: the Telugu National Language tables are Telugu-specific | **PDF downloaded and text-extracted**; clauses 4, 6.2.1.2 and tables A.2.12 / A.3.12 / 6.2.1.2.4.1 read verbatim |
| 5 | HarfBuzz Manual, "What does HarfBuzz do?" — `https://harfbuzz.github.io/what-does-harfbuzz-do.html` | `harfbuzz.github.io` (0) | Yes — the shaping engine that draws Telugu on Android, Chrome, Windows, macOS, iOS | Passes: irrelevant to any non-script keyword in the batch | Full page fetched; Indic shaping-model list and platform list read verbatim |

**Zero generic context statistics.** No PIB, no TRAI, no Census, no MEA. Zero Wikipedia body
links (Wikipedia URLs appear only as `sameAs` in `structuredData`, which does not count).

### Verified quotes and figures actually used

**ETSI TS 123 038 V17.0.0, clause 4:**
- "GSM 7 bit default alphabet indicates that the TP-UD is coded from the GSM 7 bit default
  alphabet … and the message can consist of up to 160 characters."
- "UCS2 character set indicates that the TP-UD has a UCS2 coded message, and the message can
  consist of up to 140 octets, i.e. up to 70 UCS2 characters."
- Clause 6.2.1.2.1: "In case that several languages are used, which require different
  national language tables, it is recommended to encode the message in UCS-2."
- Table 6.2.1.2.4.1: National Language Identifier `00001100` = **Telugu**, Single Shift Table
  §A.2.12, Locking Shift Table §A.3.12. The locking shift mechanism "replaces the GSM 7 bit
  default alphabet … with a National Language Locking Shift Table … that defines the whole
  character set needed for the language" (clause 6.2.1.2.1).

**Android 15 CDD §3.8.13** — device implementations with a screen `[C-1-2]` MUST include
support for the Roboto 2 weights and "Full Unicode 7.0 coverage of Latin, Greek, and Cyrillic,
including the Latin Extended A, B, C, and D ranges, and all glyphs in the currency symbols
block of Unicode 7.0." Telugu is **not** in that mandatory list. (Emoji colour-glyph rendering
is mandatory; a specific Burmese/Zawgyi clause exists; no equivalent clause names Telugu.)

**Microsoft Telugu OpenType** — "it is recommended that a Telugu OT font contain a glyph for
the dotted circle character, U+25CC. If this character is not supported in the font, such
implementations will display invalid signs on the missing glyph shape (white box)." The page
also documents the Indic cluster constraints (one reph per syllable, one pre-base reordering
Ra, one matra per positioning class) and the fixed GSUB feature order
`locl → nukt → akhn → rphf → pref → blwf → half → pstf → cjct → pres → abvs → blws → psts`.

**HarfBuzz** — Telugu is handled by the **Indic** shaping model (with Devanagari, Bengali,
Gujarati, Gurmukhi, Kannada, Malayalam, Oriya, Tamil), a separate path from "a default shaping
model for non-complex scripts (covering Latin, Cyrillic, Greek…)". HarfBuzz "can run on Linux,
Android, Windows, macOS, and iOS systems."

**JEMR 2015 — read the full text, and it does not match its own abstract.**
The abstract says "Forty-four Indian infantry soldiers from each of the Dravidian language
groups participated". The Methods section says "A total number of 200 infantry soldiers (50
participants from each of the Dravidian vernacular group)". Table 3 is labelled n = 44 per
group. The post therefore states **200 recruited, 50 per group, with eye-movement data
reported for 44 per group** — never "44 participants" and never "200 analysed". This is
exactly the abstract-vs-full-text trap the batch warned about.

Figures used, all from tables read in the PDF (mean ± SEM):
- Telugu group, timed mode, average fixation duration: **557.47 ± 31.51 ms** on Telugu vs
  **325.94 ± 11.62 ms** on English (self-paced: 578.17 vs 333.44 ms).
- Word processing rate, vernacular: Telugu **95.63 ± 3.025 wpm** — the lowest of the four
  groups; Malayalam highest at **141 ± 4.249 wpm**.
- Self-paced total reading time, Telugu group: **161.9 ± 5.608 s** in Telugu vs
  **199.1 ± 8.57 s** in English (significant, p < 0.05).
- Self-reported legibility: all four groups rated their own script "very easy"; English fell
  between "easy" and "moderate".
- Licence CC BY 4.0, DOI 10.16910/jemr.8.2.4, published 2015-07-30.

**Stated limits of that study, carried into the post:** Indian Armed Forces infantry
volunteers, a 19-inch desktop monitor, 2015, and among the Tamil group only three volunteers
could read Hindi (so Hindi data for that group was dropped). It is not a phone study.

### Character counts computed for this post

Counted as Unicode code points (identical to UTF-16 units for all six strings — no characters
outside the BMP), then converted to SMS segments at 70 UCS-2 characters per segment:

| Wish | Chars | UCS-2 octets | SMS segments |
|---|---|---|---|
| పుట్టినరోజు శుభాకాంక్షలు | 24 | 48 | 1 |
| జన్మదిన శుభాకాంక్షలు | 20 | 40 | 1 |
| మీకు ఆయురారోగ్యాలతో నిండు నూరేళ్లు | 34 | 68 | 1 |
| నీ పుట్టినరోజు ఎప్పటికీ గుర్తుండిపోవాలి | 39 | 78 | 1 |
| అమ్మా, పుట్టినరోజు శుభాకాంక్షలు | 31 | 62 | 1 |
| హ్యాపీ బర్త్‌డే మామా | 20 | 40 | 1 |

The 96-character median message needs **2** UCS-2 segments and **1** GSM-7 segment.

### Searches that did not produce a usable in-cap source

Recorded so the next agent does not repeat them:
`Telugu script Unicode encoding rendering`, `Telugu orthography script complexity akshara`,
`Telugu digital typography font design`, `Indic script rendering complex text layout`,
`Telugu SMS text messaging transliteration` (Semantic Scholar — HTTP 429 all five);
`Telugu script`, `Telugu unicode`, `indic script rendering`, `Telugu typography`,
`Telugu text processing`, `akshara orthography reading`, `Dravidian script reading
legibility`, `onscreen reading Indian language font`, `Telugu language digital media`,
`south indian script legibility screen`, `mobile phone Indian language script usability`
(DOAJ — only the JEMR paper and OCR/NLP papers came back). OpenAlex returned HTTP 429
(daily budget exhausted). `jitm.ut.ac.ir` had a relevant Telugu code-mixing paper but serves
a self-signed certificate chain, so a reader could not open it — dropped rather than cited.
`aclanthology.org`, `unicode.org`, `lrec-conf.org` and `w3.org` — all at or over the domain
cap — were not fetched.

---

## Phase 4–5 — draft and targeting decisions

- `categorySlug`: `milestone-birthdays` (batch-wide).
- `templateUrls`: `/birthday-parents`, `/templates`.
- Internal links in body (all from `TEMPLATE_LINKS`, all placed after the section that earns
  them): `/birthday-parents`, `/birthday-friend`, `/templates`.
- Slug checked against live Strapi 2026-08-27 —
  `articles?filters[slug][$eq]=birthday-wishes-in-telugu` returned `total: 0`. Free.
- `structuredData`: an `ItemList` mirroring the six H3s in order, plus an `@id`-matched
  enrichment block on `…/birthday-wishes-in-telugu#post` carrying `about`, `mentions` and a
  `citation` array mirroring `batchMeta.sources` one-to-one. Every `sameAs` verified through
  the Wikipedia API with its QID paired: Telugu language Q8097, Telugu script Q570450,
  Unicode Q8819, Android (operating system) Q94, GSM 03.38 Q1441241, HarfBuzz Q4119352.

## Known blocker

Every Telugu string in the post is machine-composed and unverified. Recorded in
`auditReport.failed` as a **structural** failure: native-reader sign-off required; no agent
can verify Telugu idiom, honorific register (`మీరు` vs `నువ్వు`) or conjunct correctness.
Do not publish before a Telugu reader signs off.

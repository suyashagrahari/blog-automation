# Research brief — `miss you yaar meaning in hindi`

Batch: `2026-09-25-miss-you-30` (wave 2) · slug `miss-you-yaar-meaning-in-hindi` ·
category `miss-you-across-miles` · templates `/missyou-gf`, `/streak`, `/templates`
Written 2026-09-25. Slug checked free in Strapi (`filters[slug][$eq]` returns
`{"data":[],"meta":{"pagination":{"total":0}}}`).

---

## Phase 1 — SERP measurement (METHOD table, BRIEF-WAVE2 §0)

Source of URLs: `SERPS-WAVE2.md`, "## miss you yaar meaning in hindi" (DuckDuckGo
`kl=in-en`, recorded 2026-09-25). **Method used: fetched every URL live on
2026-09-25 and read the `<title>` element plus the body text** — not slugs.
Counted occurrences of the Latin string `yaar` and of Devanagari `यार` in the
fetched HTML with `<script>`/`<style>` stripped.

| # | URL | Fetch | `<title>` | `yaar` (Latin) | `यार` | body words |
|---|---|---|---|---|---|---|
| 1 | loveshayaree.com/i-miss-you-meaning-in-hindi-shayari/ | 200 | "I Miss You Meaning in Hindi Shayari \| आइ मिस यू का हिंदी 1" | 0 | 0 | 1,373 |
| 2 | shabdkosh.com/hi/dictionary/english-hindi/miss you… | **FAILED** (TypeError: fetch failed, 2 attempts) | — | — | — | — |
| 3 | learnjankari.in/i-miss-you-shayari-in-hindi/ | 200 | "100+ I Miss You Shayari in Hindi – किसी की याद में…" | 0 | 5 | 2,118 |
| 4 | shayariyan.com/miss-you-shayari-in-hindi/ | 200 | "100+ Deep Emotions Miss You Shayari in hindi मिस यू शायरी" | 0 | 27 | 3,214 |
| 5 | shayarguru.com/miss-you-shayari-in-hindi/ | 200 | "80+ Miss You Shayari in Hindi \| Best याद शायरी" | 0 | 1 | 1,577 |
| 6 | moodinlines.com/miss-you-shayari-in-hindi/ | 200 | "120+ Miss You Shayari in Hindi \| दिल छू लेने वाली शायरी" | 0 | 15 | 4,110 |
| 7 | shyarireaders.com/miss-you-shayari-in-hindi/ | 200 | "Miss You Shayari In Hindi \| Best 320+ मिस यु शायरी हिंदी…" | 0 | 9 | 4,185 |
| 8 | royalsshayari.com/miss-you-shayari-in-hindi/ | 200 | "50+ Best Miss You Shayari in Hindi \| याद शायरी हिंदी में" | 0 | 0 | 1,297 |
| 9 | translate.google.com/?hl=hi | 200 | "Google Translate" | 0 | 16 | 9,376 |
| 10 | desidose.in/lifestyle/miss-you-shayari-hindi-english/ | 200 | "Miss You Shayari: Heartfelt Expressions of Longing and Love" | 0 | 0 | 1,363 |

**Counts to report:**

- **Pages that explain `yaar`: 0 of 10.** The Latin string `yaar` occurs **0 times**
  across every page that fetched. No page defines the word, glosses it, or gives
  its etymology.
- **Pages with Devanagari in the body: 9 of 9 fetched** (all had ≥638 Devanagari
  characters). Pages containing `यार` specifically: **6 of 9** (5, 27, 1, 15, 9, 16
  occurrences) — always inside a shayari line, never in a definition.
- **Devanagari in the `<title>`: 7 of 9.**
- **Dictionaries vs farms: 8 of 10 are shayari/quote farms**
  (loveshayaree, learnjankari, shayariyan, shayarguru, moodinlines, shyarireaders,
  royalsshayari, desidose); **1 is a real dictionary** (shabdkosh.com, #2);
  **1 is a tool home page** (translate.google.com, #9).
- **Failed to fetch: 1 of 10** — `shabdkosh.com`, twice, `TypeError: fetch failed`
  (connection-level, not an HTTP status). Also note: the ranked shabdkosh URL is the
  entry for **"miss you"**, not for `यार` — so even the one dictionary on the SERP
  is not answering this keyword.
- **Count-led titles: 6 of 9 fetched** (100+, 100+, 80+, 120+, 320+, 50+). The
  BRIEF-WAVE2 anchor's "the whole SERP competes on volume" finding partly holds
  here — 6/9, not 10/10.
- **subhsandesh on this SERP: 0 of 10.**

**Conclusion.** The keyword asks what a word means. Nobody on page one answers it.
The gap is not a format split, it is a missing definition plus its practical
consequence (register).

## Phase 2 — Gap and angle

Angle: **`yaar` is the whole post.** Establish (a) what it is — a Persian loan with
a friend sense *and* a lover sense, (b) what it does — lowers register, which is why
"miss you yaar" is warm but unserious, (c) who it misfires with, (d) why the English
half is there at all. Every claim carries the instrument and the exact entry.

Explicitly **not** doing (inherited bans, BRIEF-WAVE2 §0): mood/tone buckets; a
"write your own" workflow; attributed literary lines.

De-confliction:

- `blogs/miss-you-shayari-with-english-translation.json` (sibling, same batch) owns
  the Urdu poetic register, the public-domain couplets with provenance, and the
  Platts `qs=miss` search. Its H2 "Why 'I miss you' has no clean Urdu verb" is
  adjacent to my §"Why the English half is there at all". **Differentiation:** it
  argues the poetic/lexical gap; I argue the *grammatical agreement* consequence
  (`yād` is feminine, so the verb agrees with the memory) and then leave poetry
  alone and cross-link it. Different Platts query pages: it used `qs=miss`, I used
  `qs=yār` and `qs=yād`, both page 1247.
- Live `/blog/how-to-say-i-miss-you-in-hindi` — fetched 2026-09-25, HTTP 200,
  7,497 words, 14 H2s, tone-bucketed (casual / romantic / respectful), includes a
  "how to structure your message" workflow. Uses `यार` **7 times**, `yaar` once,
  never as a headword. **This is the closer page; cross-linked.**
- Live `/blog/miss-you-message-for-love-in-hindi` — fetched 2026-09-25, HTTP 200,
  7,552 words, 14 H2s, 120 romantic lines by tone plus a "write your own" formula.
  Uses `यार` **0 times**. That zero is itself evidence for the register claim and is
  reported in the body.
- The orchestrator says subhsandesh ranks **#6** for the adjacent query
  `miss you meaning in hindi`. **I did not re-measure that SERP.** Recorded as
  inherited-not-verified in `structuralLimitations`; kept out of the body.

## Phase 3 — Lexical verification (every claim, instrument, exact entry)

| Claim | Instrument | Exact entry | Verdict |
|---|---|---|---|
| `yaar` is a Persian loan | Platts, *A Dictionary of Urdu, Classical Hindi, and English*, DSAL `platts_query.py?qs=yār` | headword **يار `yār`, p. 1247**, tagged **"P"** (Persian) | **CONFIRMED** |
| same, second instrument | Wiktionary, Hindi `यार` | "Borrowed from Classical Persian یار (yār)" | **CONFIRMED** |
| `yaar` also means the beloved / lover | Platts p. 1247 | "A friend; a lover; paramour, gallant; mistress; — companion, comrade; — an assistant; — one of a sect or gang of thieves" | **CONFIRMED** |
| same, second instrument | Wiktionary Hindi `यार` | sense 3: "paramour, lover" | **CONFIRMED** |
| register is low / derivatives are not polite | Platts p. 1247 | `yār-bāz` "Wanton"; `yār-bāzī` "Wantonness, harlotry; fornication" | **CONFIRMED** |
| modern usage is platonic, informal, ≈ "mate / dude" | Wiktionary Hindi `यार` | sense 2 labelled **"(vocative, colloquial) bro, dude"**, with usex "यार, यह सब भूल जाओ…" glossed "**Dude**, just forget all this…" | **CONFIRMED** |
| it is *too familiar* for elders / bosses | same "(vocative, colloquial)" label | colloquial register label | **CONFIRMED as a register label.** The "elder/boss" application is an inference from the label, stated as such in the body — no instrument tests it directly |
| Hindi expresses this as `yād ānā`, subject = the memory | Platts `qs=yād`, **p. 1247**: `yād` s.f. "Remembrance, recollection; memory"; `yād ānā` "To come to recollection or mind; to recur to memory" | + Wiktionary `याद`: Hindi, **f**, "a memory, recollection", declension table "(fem cons-stem)", borrowed from Classical Persian | **CONFIRMED.** `yād` is feminine, so the verb agrees with the memory, not with the speaker or the missed person |
| "used across genders" | Platts: `yār` "s.m. & f."; Wiktionary declines modern Hindi `यार` as **masculine** and lists a separate feminine `यारनी` "A female friend; a mistress" | conflicting | **NOT SETTLED — cut.** Body states only that Platts marks the noun m. & f. and that modern Wiktionary declines it masculine. The usage claim about speakers' genders is not asserted |
| `yaar` is also an English word | Wiktionary English lemma **`yaar`** | "(India, Pakistan) A friend, pal, or buddy", cited **1990, Hanif Kureishi, *The Buddha of Suburbia*, ch. 15, p. 222**: "I'm going to make the most of my life now, *yaar*"; sense 2 "(India, Pakistan) A lover" | **CONFIRMED — and it complicates the prompt's framing** (see below) |

**Correction to my prompt.** The prompt says "**Code-switching is the mechanism.**"
At the level of this particular word that is only partly true: Wiktionary carries
`yaar` as an **English** headword (Indian and Pakistani English) with a 1990 print
citation. For many speakers "miss you yaar" is one English sentence containing a
borrowed English noun, not a switch into Hindi. The code-switching framing survives
for the *phrase-level* point (the English verb phrase is doing work `yād ānā` does
not do), and that is how the body states it.

**Lines cut:** the Devanagari sentence `तुम्हारी याद आ रही है` was cut from the body.
`याद` and `यार` are verified headwords; `तुम्हारी`, `आ`, `रही`, `है` were not
individually verified, and the brief forbids printing unverified non-English text.
The construction is given in Platts' own romanisation (`yād ānā`) instead.

## Phase 3 — Research sources

Route used: Europe PMC REST → Crossref/DOAJ REST → abstracts only. **Zero WebSearch
spend.** PDFs not parsed.

1. **Europe PMC / *Frontiers in Psychology* — PMC12823517**, "Negotiating language in
   family texts: case-study of transnational families in Finland",
   doi 10.3389/fpsyg.2025.1672423, first published 2026-01-08. Abstract categorises
   translanguaging in family text messaging by form and **by function — "local/temporal,
   phatic, and address terms"**. Subject test: this is literally about address-term
   insertions in cross-border family texts. Swap test: it is about code-switching in
   messages, useless in a quotes-listicle row. Abstract only.
2. **Europe PMC / *Data in Brief* — PMC12329218**, "HiACC: Hinglish adult & children
   code-switched corpus", doi 10.1016/j.dib.2025.111886, 2025-07-17. Abstract:
   "In India, more than 250 million people are estimated to engage in code-switched
   communication, especially blending English with Hindi (Hinglish)"; corpus is
   3,318 adult + 1,858 child segments, 5.24 hours. Abstract only.
3. **Europe PMC / *J Med Internet Res* — PMC13012004**, code-mixed Hinglish query
   intent, doi 10.2196/86545, 2026-03-24. Abstract: 4,161 deidentified Hinglish
   questions collected in urban Mumbai; LLMs "trained for English… may perform poorly
   on code-mixed text and miss cultural nuances". Abstract only.
4. **DOAJ — Hadavizadeh & Singh, "Leech's politeness maxims and their hierarchy in
   Hindi and Persian"**, *Studii si Cercetari Filologice: Seria Limbi Straine
   Aplicate*, 2022. Abstract works from "Pandharipande's (1979) hierarchy of the
   degree of politeness proposed for Hindi". Full text is a PDF at `scf-lsa.info`
   which was **not parsed** — abstract only, and the body says so.
5. **DSAL / Platts** `platts_query.py?qs=yār` — instrument, cap-exempt.
6. **Wiktionary** `यार` (Hindi) and `yaar` (English) — instrument, cap-exempt.
   `याद` used as a second instrument on the `yād` gender point.

Cap position measured on disk at write time, counting **distinct posts per hostname**:
`journals.plos.org` 3 (closed), `arxiv.org` 3 (closed), `doaj.org` 2, `frontiersin.org` 2,
`edizionicafoscari.it` 2. My non-exempt additions: **`doaj.org` only** (→ 3, at cap, no
violation). Everything else is on the batch `capExemptDomains` list (`europepmc.org`,
`dsal.uchicago.edu`, `en.wiktionary.org`). **Same-work check** (the failure mode the
prompt warned about): none of PMC12823517 / PMC12329218 / PMC13012004 / the DOAJ
article appears in any sibling by PMCID, DOI or title string — grepped all 48 sibling
JSONs for `12823517`, `12329218`, `13012004`, `1672423`, `111886`, `86545`.

## Phase 0 — first-party data

`content/facts.md`, regenerated 2026-09-24; miss-you block measured 2026-09-25.
Current blocks only — the `## Superseded vintage — 2026-09-15 (ARCHIVE)` block was
not touched.

Re-measured the collision across **48** sibling posts on disk (the prompt said 44 posts
and 13–43 uses; the real range is **16–48**):

| line | siblings using it |
|---|---|
| 88.8% published and shared (190 of 214) | **16** ← least |
| Median first-save→last-edit 2.6 h, n=214 | **16** ← least |
| 47 distinct city pairs, 15-city picker | 23 |
| 92.1% carry an "open when" letter | 24 |
| 86.4% carry a written memory | 25 |
| 2,417 views, 11.3/page | 27 |
| 1,434 hug taps / 28.0% reunion date | 36 |
| 13.6% voice note | 41 |
| 214 pages, 4.1% of 5,221 | 45 |
| 43.5% password-protect | 47 |
| Median letter 88 words, longest 1,024 | 48 |

Opened with the joint-least pair (88.8% + 2.6 hours). **No unused pair exists** —
differentiation from first-party data is thin and is recorded as such in the audit.

Mandatory caveats carried in the body: n=214 over two months (template live
2026-07-28); views are page views, not unique visitors; the city field is a picker
with defaults, so fill rate is not a sender's choice; **the database records which
template was opened, never who received it**.

## Phase 5 — links

- `/missyou-gf` (mandatory) — placed in the last section, with the honest note that
  it is built for a girlfriend/partner and is therefore the *wrong register* for
  "miss you yaar".
- `/streak` (from `oneOfLinks`) — the genuine alternative for a friend across cities:
  one tap a day rather than one declaration.
- `/templates` (from `oneOfLinks`) — fallback.
- Cross-links: `/blog/miss-you-shayari-with-english-translation` (sibling, same batch)
  and `/blog/how-to-say-i-miss-you-in-hindi` (live, fetched). Neither is in
  TEMPLATE_LINKS; recorded as a known audit failure, same as the shayari sibling's.

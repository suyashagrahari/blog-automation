# Research brief — `missing-you` / "missing you" / us-en / band 10k+ per month

Written 2026-09-28. Row axis per `WAVE5-PLAN.json`: *the -ing form as an ongoing
state, and its real habitat — captions, sign-offs, letter closings.*

---

## Phase 1 — SERP, measured on two independent routes

`serp-ddg.mjs` was tried **once**, with a control query of known demand first:

```
node scripts/serp-ddg.mjs "weather forecast" --region us-en
  engine: ddg-html   region: us-en   query: weather forecast
  (no results parsed — DDG markup may have changed)
```

The `query:` line echoes back correctly, so the argument order was right and the
control has known demand. The tool is therefore **IP-blocked**, not reporting an
empty SERP. No retry, per BRIEF §3.

The harness `WebSearch` tool was deliberately **not** used. BRIEF §12 licenses it
for `us-en` rows but warns it is not sufficient alone on an entity-colliding head
term. Two independent non-WebSearch routes were obtained instead.

### Route A — Google, real browser, `gl=us&hl=en&pws=0&num=20`

Self-authentication: every result heading contained the query string; no Spanish,
Turkish or German markers present; the `browser_navigate` response url was compared
against the requested url on every call and matched each time. Keyword Surfer's
injected `surferseo.com` links and per-result numbers were excluded from everything
recorded here.

**Bare head term `missing you` — run twice, identical heading set both times:**

| # | Result | Host | Type |
|---|---|---|---|
| 1 | Watch Missing You \| Netflix Official Site | netflix.com | entity (TV) |
| 2 | Missing You (2025 TV series) | en.wikipedia.org | entity (TV) |
| 3 | Missing You (TV Mini Series 2025) | imdb.com | entity (TV) |
| 4 | Season 1 – Missing You | rottentomatoes.com | entity (TV) |
| 5 | Missing You — song and lyrics by John Waite | open.spotify.com | entity (music) |
| 6 | Missing You — Harlan Coben | harlancoben.com | entity (novel) |
| 7 | Missing You review | theguardian.com | entity (TV) |
| 8 | Missing You (John Waite song) | en.wikipedia.org | entity (music) |

**8 results, 8 of 8 named entity, 0 language or grammar pages, 0 weak.**

**Intent variant `"missing you" meaning when to use`:** quora.com (×2 threads),
languagetool.org, english.stackexchange.com (closed question), hinative.com,
jodiaman.com (personal blog), reddit.com r/EnglishLearning, ludwig.guru.
**Zero entity results. ~8 of 9 weak.**

### Route B — Brave Search, real browser, `country=us`

**Bare head term:** netflix.com, imdb.com, rottentomatoes.com, metacritic.com,
variety.com, hollywoodreporter.com, open.spotify.com, music.youtube.com,
harlancoben.com, themoviedb.org, tvmaze.com, rogerebert.com, pajiba.com.
**Same entity vertical. AGREES with Google.**

**Intent variant (same query string):** forum.wordreference.com,
english.stackexchange.com, ell.stackexchange.com, italki.com, urbandictionary.com,
hinative.com, brainly.in, quora.com, wikihow.com, womansday.com, parade.com,
countryliving.com, momjunction.com, jodiaman.com, wordreference.com.
**Zero entity results, ~15 of 16 weak, 4 hosts shared with the Google run.**

### Conclusion, and a correction to the row prompt

The two routes agree on both queries. **The bare phrase is genuinely
entity-owned — on Google, not only on WebSearch.** The row prompt framed this as
"WebSearch alone would have caused a false abort"; measured on *this* row's own
head term, Google itself returns 8 of 8 music/TV/novel. The inversion described in
BRIEF §12 appears only once intent is expressed in the query, and that is exactly
what happens here: add "meaning when to use" and the entity vertical vanishes on
both routes. **Not an abort** — the user requested this row, the intent slice is
weak on two agreeing routes, and the page is built for that slice.

---

## Phase 2 — Gap

**Table stakes on the intent SERP:** both forms are correct; -ing = continuous;
"missing you" is warmer / softer; a list of alternative phrasings.

**Occupied ground that must not be touched:**

- `/blog/miss-you-or-missing-you` (LIVE) owns the bare grammar contrast: *miss* as
  a state verb, whether the progressive is licensed, eWAVE 3.0 on Indian English,
  the three-way miss / missing / missed table, and "missing" as *absent*. This post
  does not argue correctness at all and says so explicitly, linking there.
- The parallel `miss-you` row owns the bare **finite** "Miss you" sent as a message
  and diary subject-omission (Haegeman). This post analyses the **non-finite**
  participle — a different construction — and hands the sent-message ground over by
  name. Confirmed no H2 overlap and no shared source against the emitted sibling file.
- `/blog/miss-you-quotes` owns sourced quotations; `/blog/miss-you-dearly-meaning`
  owns the adverb *dearly*; `i-miss-you-meaning` (written, **not live** — Strapi
  returns `total=0`) owns the dating of the senses of *miss*. None overlaps.

**The gap:** nobody on either SERP names the construction. Every page treats
"Missing you" as a shortened "I am missing you". It is not — it is a **subjectless
non-finite participial phrase**, the same shape as "Wishing you well" and "Thinking
of you", and the English letter-writing tradition has a name for it.

**Fan-out sub-queries → H2s:** what is it grammatically / why does -ing mean ongoing
without the auxiliary / is it a letter convention / was it always / where do I use
it / how does it differ from "Miss you" / what do real senders do / when is it wrong.

---

## Phase 3 — Sources

| # | Source | What it carries | Read |
|---|---|---|---|
| 1 | Universal Dependencies v2, `VerbForm` | `Part` = "a non-finite verb form"; finiteness rule "if it has non-empty Mood, it is finite" | full page |
| 2 | Universal Dependencies v2, `Aspect` | Aspect "specifies duration of the action in time"; "the -ing participle is so bound to progressive meaning that it seems a good idea to annotate it with this feature" | full page |
| 3 | Crowther, *How to Write Letters*, © 1922 (PG #22222) | names "the participial closing of a letter", four stock examples, "weakens the entire effect", and the rationale: "A letter used to be considered lacking in ease if it ended with an emphatic sentence" | full text |
| 4 | *Love Letters of Mary Wollstonecraft to Gilbert Imlay*, 1793–95 (PG #34413) | **original count:** 75 letters, 26 "Yours…" closings, **0** sentence-initial participial formulae from a 12-verb list | full text |
| 5 | *Business Correspondence, Vol. 1* (PG #7309) | **original count:** "Hoping to hear" ×3, "Thanking you" ×2 in ~497k chars — the commercial register | full text |
| 6 | *PLOS One* 2025, PMC12021284 | 806 daily reports, N=106 (64 FIFO workers, 42 partners, 19 couples); satisfaction drop on away days **completely mediated by time spent communicating** | full text via Europe PMC `fullTextXML` |

Subject test: 3, 4, 5 are about the language of letters; 6 is about separation.
Peer-reviewed + open access: 6. Generic context statistics: **0**. Wikipedia body
links: **0** (Wikipedia appears only as `sameAs` entity identifiers, each verified
against the Wikipedia API with its Wikidata QID paired). No competitor cited.

Cap state at time of writing (`capcheck.mjs` + `journalcheck.mjs`, both re-run
immediately before the file was written): no banned URL used; every source domain is
on the cap-exempt instrument list; **Frontiers in Psychology is AT CAP (3 posts) in
*this* batch**, contradicting BRIEF §7's "one slot remains" — that figure was measured
on the 2026-09-26 batch — and was avoided. PLOS One sits at 1 prior post here.
None of the batch's 14 already-spent PMCIDs is reused.

---

## Instruments and defects found

- `serp-ddg.mjs` IP-blocked; control query proves it is a block, not an empty SERP.
- `gutendex.com` times out at 20 s and 30 s from this IP (two attempts). Gutenberg's
  own `/ebooks/search/` HTML works and was used instead.
- `https://www.gutenberg.org/cache/epub/22950/pg22950.txt` returns HTTP **404**
  (a 6,530-byte error body) although `/ebooks/22950` is listed. An id appearing in
  Gutenberg search results does not guarantee a `cache/epub` plain-text file.
- Every fetched text was authenticated on its own `Title:` line before being counted.
- **The BRIEF has no §15.** The row prompt said "§11 through §15 are corrections
  entered today; §12 and §15 are CRITICAL". The file ends at §14, line 591.

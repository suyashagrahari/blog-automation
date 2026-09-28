# Research brief — `miss-you` ("miss you", us-en, body English)

Batch `2026-09-28-miss-you-es-10`. Row axis: **the bare "Miss you" SENT AS A MESSAGE.**
Written 2026-09-28.

---

## Phase 0 — data gate

`npm run facts` was **deliberately not run.** Per BRIEF §6 the pinned
`facts-snapshot.md` is the source for this family, and regenerating the live file
orphans `factsUsed` references across already-written posts. Facts were read from
`content/batches/2026-09-26-miss-you-global-30/facts-snapshot.md` and copied
byte-verbatim by a script that greps them out of that file, so no retyping error
is possible.

Gate result: **passes.** Five relevant lines from the miss-you segment, four
numbers inside the first 150 words (214 pages, 88-word median letter, 43.5%
password rate, 38.5% platform baseline).

The honest caveat (BRIEF §13): all five lines are collided 14–25 times across
siblings. The differentiation is the *reading* — 88 words when given a page,
two words when given a text box — not the numbers.

---

## Phase 1 — SERP analysis, TWO independent routes

The row prompt warned that `WebSearch` returned 7-of-9 Wikipedia song pages on a
related query while Google returned zero music, and required two agreeing routes.
Both the head term and the axis term were measured on two routes.

`serp-ddg.mjs` was tried **once**, with a control first:

```
node scripts/serp-ddg.mjs "weather forecast" --region us-en
engine: ddg-html   region: us-en   query: weather forecast
  (no results parsed — DDG markup may have changed)
```

The query echoed back correctly, and a query with certain demand returned nothing,
so this is an IP-level block, not an empty SERP (laneWideFindings #20). Not retried.

### Head term `miss you`

| Route | Instrument | Result |
|---|---|---|
| A | Harness `WebSearch` (US-served, not Google) | 8 of 9 Wikipedia song/film entity pages — *Miss You* (2024 Tamil film), Westlife, Louis Tomlinson, Tungevaag/Sick Individuals/Marf, *Miss You* EP, I Miss You (Klymaxx), a disambiguation page. One Medium post. |
| B | Google, real browser, `gl=us&hl=en&pws=0&num=20`, **run twice**, identical | 8 of 8 music — Spotify ×2, Wikipedia (Rolling Stones song) ×2, YouTube, Genius, YouTube Music. **Zero informational results.** |

**The two routes AGREE: the bare head term is entity-owned.** Self-authenticated
on content — the search box read back `miss you` on both Google runs, and no
Spanish markers or sibling-row content appeared.

**This does not reproduce the BRIEF §12 artefact,** and that is a finding. §12 was
measured on `i miss you meaning`, where a disambiguating token pulled Google to
informational results while WebSearch stayed on entities. On the bare head term
there is no disambiguating token at all, and Google is *more* music-heavy than
WebSearch, not less.

### Axis term `"miss you" vs "i miss you" text message`

| Route | Result |
|---|---|
| C — Google, real browser, same parameters | 8 results, **zero music**: Medium (Miri Pierce), Reddit, Quora ×2, wikiHow, a second Medium post, TheKnot listicle, italki forum. **8 of 8 weak.** |
| D — Harness `WebSearch` | Medium, italki, TextRanch, TikTok, Quora, GirlsAskGuys ×2, one spam domain, one Wikipedia song page. Agrees with C. |

**Both routes agree the axis SERP is weak.** No authority, no research, nothing
newer than a four-year-old forum thread on most results.

### Inventory claim, overturned

`WAVE5-PLAN.json` gives this row `weak: 2` (of 10). Neither measurement reproduces
it: the head term is **0 of 8 weak**, the axis term is **8 of 8 weak**. The
inventory figure is not a property of either SERP.

### Competitor profile (the axis SERP)

Every ranking page asserts the pragmatic difference from intuition. Consistent
across all of them: both forms mean the same thing; the bare form is "softer",
"less formal", "a sprinkle of affection"; the answer is buried under an anecdote;
no citation of any kind; no named mechanism. TheKnot is off-intent (a 55-item
listicle). wikiHow is the only page with structure, and it covers "other ways to
say it" rather than the dropped subject.

---

## Phase 2 — gap analysis

**Table stakes** — both forms mean the same thing; the bare form is lighter; the
relationship and context decide; what to reply.

**The gap.** Nobody names the mechanism. Not one ranking page says that
(a) the deletion is a documented register phenomenon with a literature,
(b) it is restricted to root clauses so it cannot be embedded,
(c) it is asymmetric — the subject can go, the object cannot,
(d) it is effectively absent from general written-English corpora,
(e) the deniability is the same machinery as indirect speech generally.

**Stale data** — not applicable; the incumbents cite nothing at all, which is the
stronger finding.

**Fan-out sub-queries → H2s.** What does dropping the "I" do? Does it have a name?
Can you drop the "you" too? Can you put it in a longer sentence? Is it real
English? Which form should I send? When is it the wrong choice? What do people do
with more room? What can't this tell me?

**Angle.** Wins by being the only page on this SERP that names the bare form's
mechanism instead of describing its vibe — diary subject omission, root-restricted
per Haegeman (*Lingua* 130, 2013), asymmetric because the emotional sense of *miss*
is transitive, and absent from 60 of 60 English sentences retrieved from Tatoeba on
2026-09-28 — set against SubhSandesh's 214 miss-you pages where the median sender
given unlimited room writes 88 words.

---

## Phase 3 — sources

Four, all fetched and verified. Journals named for hand-counting: **Lingua** (1
post), **PNAS** (1 post). Neither is on the BRIEF banned list; `PMC2242675` is not
`PMC13552847` or `PMC11878271`.

1. **Haegeman 2013**, *Lingua* 130:88–110 — Ghent peer-reviewed author version,
   open access, **read in full** via `pdftotext -layout` (11,177 words). Supplies:
   the ungrammaticality of bare subject drop in ordinary English (`*Serves four
   people`); the diary register and the Woolf entry of 10 January 1936; the root
   restriction across complement, interrogative, relative and adverbial clauses;
   recipe object-omission as a *different* register; Bianchi's count of 21 non-overt
   subjects among 62 finite verbs in Beckett's *Rockaby*.
2. **Pinker, Nowak & Lee 2008**, *PNAS* 105(3):833–838 — **abstract only.** The
   Europe PMC `fullTextXML` endpoint returned HTTP 500 twice (retried once as the
   BRIEF instructs), the record carries `isOpenAccess:N`, and the PMC landing page
   serves abstract plus references with no body sections. Supplies plausible
   deniability.
3. **en.wiktionary.org/wiki/miss** — headword confirmed on the fetched page. The
   emotional sense carries an explicit `(transitive)` label. Cap-exempt instrument.
4. **Tatoeba** — my own count, 60 unique sentences over 6 API pages, 60 of 60 with
   an overt subject. Counted from the sentence texts by hand because the quoted
   search is **not** exact-phrase (it returns "She misses you" for `"miss you"`),
   which I reproduced independently. No count reported as a phrase frequency.

Subject test: all four. Swap test: none could sit in a Spanish sibling's post.
At most 1 generic context statistic: **zero used.** Wikipedia: 1 body link
(Rolling Stones song, entity disambiguation).

### Sources cut, and why

- **Scott 2013**, "Pragmatically motivated null subjects in English" (*Journal of
  Pragmatics*) — the single most on-topic paper. OpenAlex *and* Semantic Scholar
  both advertise an OA PDF at `eprints.kingston.ac.uk`; **that host does not
  resolve** (ENOTFOUND, two attempts, two environments). Wayback fallback returned
  429. Nothing cited from it. *A dead OA link carried by two major indexes.*
- **Luerssen, Jhita & Ayduk 2017**, *PSPB* 43(7):940–956 — abstract supports the
  exposure argument, but not OA and SAGE 403s. Dropped rather than cited from an
  abstract when the PNAS abstract carries the same claim.
- **Donner 2007** (JCMC) and **Wood, Kemp & Waldron 2014** (BJDP) — both listed OA
  by OpenAlex; `academic.oup.com` and `onlinelibrary.wiley.com` each returned 403.
- **PMC8669216** (JSPR long-distance texting) — available and in-cap for this
  batch, but already cited in 10+ posts across the repo and off-axis. Declined.

---

## Boundaries held

- **`/blog/miss-you-or-missing-you` is live** and owns aspect: simple present vs
  progressive, *miss* as a state verb, Indian English progressive, `I missed you`
  as past tense, the "absent" sense of *missing*. Read in full via the Strapi API.
  This post takes none of it — my ground is the **subject**, not the aspect — and
  cross-links it in the section where the distinction first arises.
- **Sibling `missing-you`** (written in parallel, read from disk before finalising)
  owns the participle as caption and sign-off, a 1922 letter-writing manual, and a
  corpus count of that construction. No overlap in mechanism or in sources. One H2
  of mine echoed one of theirs verbatim in phrasing and was renamed.
- `/blog/miss-you-quotes`, `/blog/miss-you-dearly-meaning`,
  `/blog/what-does-it-mean-when-he-says-i-miss-you` and `/blog/i-miss-you-meaning`
  checked against Strapi. The first three are live and are quote lists, a single-word
  gloss, and an interpretation piece respectively — none touches subject ellipsis.
  `i-miss-you-meaning` returns `total=0`, so it is not yet published.

## Instrument defects recorded

- `serp-ddg.mjs` is IP-blocked; proven with a control, not assumed.
- `eprints.kingston.ac.uk` does not resolve, while OpenAlex and Semantic Scholar
  both still serve it as the OA location for Scott 2013.
- `europepmc.org/article/PMC/PMC2242675` returns 403 to a scripted UA;
  `pmc.ncbi.nlm.nih.gov/articles/PMC2242675/` returns 200. The REST API works
  throughout, as BRIEF §7 says.
- `web.archive.org` availability API returned 429.
- Tatoeba quoted search is not exact-phrase — independently reproduced.
- No browser contention was observed in this run, but every page load was
  content-authenticated anyway; the Google search box was read back as `miss you`
  on both runs before any position was recorded.

# Research brief — `i-miss-you-in-morse-code`

- **Keyword:** i miss you in morse code
- **Row:** WAVE2-PLAN.json, tier `A-explainer`, region `us-en`, bodyLanguage **English**
- **Category:** `miss-you-across-miles` (verified live in Strapi, 10 categories)
- **Templates:** `/missyou-gf` (mandatory), `/streak` (oneOfLinks), `/templates`
- **Written:** 2026-09-27

---

## Phase 0 — data gate

`facts-snapshot.md` (pinned), not `content/facts.md`. The gift database holds no Morse,
code or language segmentation of any kind, so the relevant lines are platform-wide.
Chosen for **low collision** with the 46 sibling posts — the six miss-you-specific
lines are each carried by 48–63 posts, while these sit among the eight platform-wide
lines used roughly once:

| Line | Why it earns its place here |
|---|---|
| 5,199 pages since 2026-03-12, 21 page types | scale, first 150 words |
| 90.9% of started pages published and shared (4,724 of 5,199) | the failure mode is not the wording |
| 1.35 pages per registered creator | most senders build once — a private cipher rarely pays for itself |
| 48.3% of shared page views on a phone (27,725 of 57,456) | where a Morse string actually lands |
| Median first-save-to-last-edit 2.5 hours (apology dashboard, n=1,396) | deliberate composing is real; dots are a fine thing to spend it on |

Gate met: 5 facts, 3 inside the first 150 words. Caveats carried in body prose —
nothing segmented by language or country, the DB records which TEMPLATE was opened and
never who received it, `viewCount` is page views not unique visitors.

---

## Phase 1 — SERP

**Route: harness `WebSearch`, two calls, no browser.** BRIEF §3 names this a legitimate
route for a `us-en` row: it is a real index and US-served, which matches the reader. The
one caveat is that it is not Google and the positions are that index's. `serp-ddg.mjs`
was **not** run — the brief's one-attempt rule exists to stop grinding, and two
WebSearch calls answered the question. No browser tool was used on this row at all,
so no scrape could be another agent's.

**Call 1 — `i miss you in morse code`** (9 results seen):

| # | Result | Type |
|---|---|---|
| 1 | morsecodetranslator.com | bare translator tool |
| 2 | pinterest.com/ideas/… | image aggregator |
| 3 | allmorsecode.com/i-miss-you-in-morse-code/ | tool-site article |
| 4–9 | six `en.wikipedia.org` pages for songs titled "I Miss You" (Blink-182, Darren Hayes, N II U, Toki o Koete…) and one Quora thread about **I love you** | entity confusion, not competition |

**Call 2 — `"i miss you" morse code dots dashes translation spacing`** (9 results seen):
morsetranslator.com · morsecodehub.com · morse-code-translator.co.uk · allmorsecode.com ·
themorselab.com · clickcalculators.com · morse-codetranslator.net · morsecodereader.com ·
morsecodee.com. **Nine of nine are Morse-tool SEO domains.**

**Weak count: 9 of 9 actually seen on call 2, 8 of 9 on call 1.** Zero established
editorial publishers on either. **Gate 4: PROCEED.**

**The tool-widget ceiling the brief predicted holds.** Rank 1 on the head query is a bare
translator. The whole second SERP is translator sites. A text page cannot beat a working
translator for a reader who only wants the string, and the post says so.

Six of the ranking pages were fetched directly over HTTP and saved per host before
reading (`morsecodehub.com` refused the connection — counted as unread, not guessed at).

---

## Phase 2 — gap

**Table stakes** (all six pages have them): the string `.. / -- .. ... ... / -.-- --- ..-`,
a letter-by-letter breakdown, the 1/3/1/3/7 timing chart, an audio/flasher/copy widget,
an IMY aside, an "I love you" comparison.

**The gap, verified by machine search of all six saved pages:**

- **None** mentions the run-together collisions. `ambigu*` appears on zero pages.
- **None** computes the phrase in dot units.
- **None** cites a recommendation number. Three invoke "ITU" by name; `allmorsecode.com`
  calls its chart "the official timing rules" and attributes it to nobody.
- **None** notes that Unicode defines no Morse character.
- **None** notes that the standard's own word for the measure is *dot*, not *unit*.

**Checkable error found in a ranking result.** `themorselab.com`, which heads its page
"International Morse Code · ITU Standard", states: *"MISS and YOU are exactly the same
length at 10 signals each."* True by mark count; false by the only length the standard
defines. Clause 2.1 makes a dash equal to three dots, so **MISS is 29 dot units and YOU
is 37** — YOU is 28% longer. The same page's claim that IMY fits nearly three times
inside the full phrase **does** check out (29 against 83) and is reported as correct.

**An error I did NOT report.** The WebSearch answer summary claimed letters are separated
by "one dot duration" and words by "about three dot durations" — every gap shifted down
one level from clause 2. I fetched all six pages to attribute it and **none of them says
that**; they all print the correct chart. It was the engine's synthesis, not a page.

**No letter error on any ranking page.** Every Morse string on the six pages was decoded
against the ITU tables. All give the same correct phrase. An early regex pass appeared to
show M/Y/O mismatches; those were artefacts of pages typesetting "M - -" with spaces and
were discarded rather than reported.

**Fan-out sub-queries → H2s:** how is it encoded · what does the standard say about
spacing · what happens if I drop the gaps · is there a right character to type it with ·
how long is it · who can still read it · when is a code worth sending.

---

## Phase 3 — sources (4)

| Source | What was read | Subject test |
|---|---|---|
| **Recommendation ITU-R M.1677-1 (10/2009)**, *International Morse code* | **Read in full.** The ITU's own PDF (1,456,560 bytes) extracted with `pdftotext -layout` → 13,113 chars. Contrary to the brief's blanket note, PDFs *do* parse in the `ctx_execute` sandbox. | it *is* Morse |
| **Unicode Character Database, `UnicodeData.txt`** | Parsed in full, 41,342 lines, **zero** containing "MORSE". Cap-exempt instrument. | how Morse is typed |
| **FCC 06-178**, Report and Order, WT Docket No. 05-235 | Read from docs.fcc.gov. Eliminates the 5-wpm telegraphy requirement; defines the code by reference to a withdrawn ITU-T text. | who can receive Morse |
| **Alzahrani et al., *Sensors* 26(8):2425, 2026-04-15**, doi 10.3390/s26082425, PMC13120290, CC BY | **Abstract only**, via the Europe PMC REST API. Morse-coded EOG interface for locked-in syndrome: 10.43 letters/min, 83.96% ± 4.59% accuracy, n=10. | Morse as a working channel |

Peer-reviewed + open access: 1 (*Sensors*). Generic context statistics: 0. Wikipedia in
body: 0 (entity `sameAs` only, in `structuredData`). **Journal named for the hand count:
*Sensors* (MDPI)** — used by no other post in this batch or the 2026-09-25 sibling batch.
None of the BRIEF's banned journals is cited. `doi.org` is at cap 3, so the paper is
linked through `europepmc.org`. `capcheck.mjs` run from the repo root before writing:
no banned URL, no domain at cap among the four.

---

## What the standard actually says (read, not quoted from a blog)

**Clause 1.1.1 — the six letters this phrase needs**, re-derived programmatically from the
parsed table (26 letters recovered):

| Letter | Signal | Dot units |
|---|---|---|
| I | `..` | 3 |
| M | `--` | 7 |
| S | `...` | 5 |
| Y | `-.--` | 13 |
| O | `---` | 11 |
| U | `..-` | 7 |

→ **I** `..` / **MISS** `-- .. ... ...` / **YOU** `-.-- --- ..-`

**Clause 2 — the whole timing specification, four lines:**

- 2.1 "A dash is equal to three dots."
- 2.2 "The space between the signals forming the same letter is equal to one dot."
- 2.3 "The space between two letters is equal to three dots."
- 2.4 "The space between two words is equal to seven dots."

The document **never uses the word "unit"** — everything is a multiple of one dot. It
also contains **no "SOS" and no "distress"**; its service signals (Understood `...-.`,
Wait `.-...`, Error = eight dots, End of work `...-.-`, Starting signal `-.-.-`) sit at
clause 1.1.3. Its own typography is U+002E FULL STOP and **U+2212 MINUS SIGN**, not the
keyboard hyphen.

**Collisions when letter gaps are dropped** — found by machine search of the ITU letter,
figure and punctuation tables, not asserted:

| Run together | Signal | ITU says |
|---|---|---|
| I + M + I | `..--..` | question mark — "request for repetition of a transmission not understood" (1.1.3) |
| M + I | `--..` | letter **Z** (1.1.1) |
| I + S | `.....` | figure **5** (1.1.2) |
| I + S + S | `........` | **Error**, eight dots (1.1.3) |

The Recommendation builds its own service signals the same way (`-.-.-` is K+A joined),
so spacing is part of the alphabet rather than presentation.

**Arithmetic, computed from clauses 2.1–2.4:** I = 3 u, MISS = 29 u, YOU = 37 u, two
word gaps = 14 u → **83 dot units**. Key-down 40 u; **silence 43 u = 51.8%**. Word gaps
= 16.9% of the message. ≈5.0 s at 20 WPM, ≈20 s at 5 WPM. "I love you" = 93 u.

---

## Sibling split — and why this is not an ABORT

`/blog/miss-you-number-code-meaning` is live (Strapi id 2604, published 2026-09-26) and
was read in full. It owns the **numeric** codes (143, 459, 07734, Mandarin 520) and
mentions Morse **once**:

> "Morse code gets asked in the same breath and is a different question: it is a
> transliteration, not a code, so 'I miss you' has one rendering and any translator gives
> it to you."

The first half is right and the split is clean; ABORT was considered on the ground that
the sibling answers the Morse question and rejected, because one sentence with no
encoding, no spacing and no authority does not. The second half is what this post
qualifies: there is one correct rendering of the **letters**, but the word gap is a
**timing** rule that no translator's output string preserves, so what a translator hands
you is under-specified rather than complete. Cross-linked in the body.

The German sibling `/blog/ich-vermisse-dich-in-zahlen` (Strapi id 2724) is live and its
findings are interesting, but it is a German page and this row is `us-en`. Sending an
English searcher there is a bounce — **not** cross-linked, deliberately.

---

## Phase 5 — links and product honesty

- `/missyou-gf` — mandatory, and **recipient-specific**: `app/lib/prompt.ts:44` defines it
  as *"'I miss you' page for a girlfriend/partner"* (verified at source). Disclosed in
  body prose. The one thing that *is* aligned on this row: the product is English and so
  is the reader.
- `/streak` — the oneOfLinks alternative, with a stated reason: what Morse actually offers
  is rhythm over time, and Streak is a rhythm the other person can join with no text to
  get right and nothing to decode.
- `/templates` — carries the price disclaimer (no price is derivable from our records).
- Cross-link to the live number-code sibling (`/blog/…`, excluded from the 2–4 internal
  link count by the verifier).

Slug free: `filters[slug][$eq]=i-miss-you-in-morse-code` → `total: 0`, via `ctx_execute`
against production. `references/article-json-schema.md` read in full: `kind` is
`"blog-automation/batch-blog"`, `article.keywords` is a comma-separated **string**.

---

## Phase 6 — audit

48 passed / 2 failed, byte-verbatim, disjoint. Both failures are structural and recorded
honestly: the 6-word keyword cannot sit inside a metaTitle's "first five words", and the
slug is fixed by the plan and carries the stop words "in" and "you".

A third item was nearly recorded as failed and should not have been. I had written that
four paragraphs ran to four sentences; measuring properly — masking code spans,
codepoints and clause numbers so Morse dots are not counted as full stops — showed 28
body paragraphs with exactly one at four sentences. It was split, and the item passes.
The lesson is the batch's own: measure before recording a finding, including a finding
against yourself.

Extra self-checks live in `additionalChecks`, never in `passed`.

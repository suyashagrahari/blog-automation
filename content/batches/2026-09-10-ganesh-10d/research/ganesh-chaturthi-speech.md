# Research brief — `ganesh chaturthi speech`

- **Batch:** `2026-09-10-ganesh-10d` (Ganesh Chaturthi wave 4)
- **Slug:** `ganesh-chaturthi-speech`
- **Written:** 2026-09-10
- **Gate sibling (BRIEF §3):** `content/batches/2026-09-09-ganesh-10/blogs/ganesh-chaturthi-essay.json`
- **Also read in full:** `2026-09-09-ganesh-10b/blogs/ganesh-chaturthi-katha-and-story.json`,
  `2026-09-09-ganesh-10c/blogs/ganesh-chaturthi-activities-for-kids.json`

---

## Phase 0 — data gate

`npm run facts` was **not** run, per BRIEF §1: it is blocked by this machine's
command classifier, and re-running it would re-date every line and invalidate
the 133 `factsUsed` entries already committed across waves 1–3.
`content/facts.md` as it stands (generated 2026-09-09, plus one 2026-09-10 line
in the manual section) was quoted verbatim.

Facts relevant to this keyword, at least two of which sit inside the first 150
words:

1. `3,894 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-09`
2. `49.6% of shared pages are opened on a phone (22,817 of 46,005 views) — measured 2026-09-09`
3. `No Ganesh Chaturthi page-creation data exists at all: the /happy-ganesh-chaturthi template went live 2026-09-10, four days before the festival — measured 2026-09-10`
4. `96.0% of started pages are actually published and shared (3,737 of 3,894) — measured 2026-09-09`
5. `Of the 79 Raksha Bandhan 2026 pages finished in time, 55.7% were built on the day itself and 86.1% within 24 hours of it — measured 2026-09-09`

Gate **passes** (5 relevant, 3 usable in the opening). Fact 5 is from the
festival lead-time dataset, so **both mandatory disclosures appear in body
prose**: the measurement is Raksha Bandhan and not Ganesh Chaturthi (a
different festival, and a one-day one against Ganesh Chaturthi's ten), and
n = 89 is small, so no per-template, per-region or per-language rate is derived
from it. The Holi collection (n=9) is not used. `pageviews` appears in no
denominator; the denominator is 3,894 pages across 15 page types.

---

## Phase 1 — SERP analysis

### The SERP gate: **NOT MEASURED**

Recorded honestly, per the batch's standing instruction not to report a SERP
that was not measured.

- `WebSearch` is **exhausted for this session** — 200 of 200 calls, shared
  across the concurrent agents in this batch. It refuses on call. No attempts
  were spent on it.
- `scripts/serp.mjs`, the repo's Brave-only wrapper (Brave is the one engine
  measured today that returns a real ranked SERP for `country=in`; Google, Bing,
  DuckDuckGo, Startpage, Mojeek and Ecosia were all tested by other agents in
  this batch and are unusable — Bing in particular serves the same ten generic
  "Ganesha" hosts for every query on this topic, which would report 10 shared
  results for any pair of keywords and abort the batch on an artefact), was run
  against `--gate "ganesh chaturthi speech" "ganesh chaturthi essay"`.
- **Every attempt returned HTTP 429.** Measured effort, for the record: 10
  invocations of `serp.mjs --gate` between 16:33 and 17:13 IST on 2026-09-10 —
  two direct, then eight from a background retry loop with 110-second gaps —
  each of which exhausts the script's own four internal retries with backoff.
  That is roughly 40 Brave requests over 40 minutes, all 429. A bare
  single-keyword query (`serp.mjs "ganesh chaturthi speech"`, no gate) also
  failed to return inside a 400-second timeout. Brave is being hit concurrently
  by the other agents in this wave and the limit never cleared.
- `serp.mjs` deliberately **refuses** to report a shared count from too few
  organic results, because an empty result list intersects to zero and would
  print "clear" for every gate. So there is no partial number to report, and
  none is claimed here.

**Consequence, stated plainly: Phase 1 for this post rests on unmeasured
ground.** No competitor page was fetched, no ranked top 5 was recorded, and no
AI Overview or featured snippet was observed. The comparison table Phase 1
normally produces does not exist for this post, and the audit records that as a
failure rather than a pass. `WebSearch` is also US-locale only (no `gl=in`), so
even a successful measurement would not have been the India-intent SERP this
keyword actually faces.

### What *was* measured, before this agent was launched

The keyword was cleared against the cluster's own corpus rather than against a
SERP:

- Across the 43 posts already written in the Ganesh cluster there are **428
  H1/H2 headings, and not one of them is about a speech**.
- The word "speech" appears **3 times in any body**, all incidental.
- Pool relevance for the keyword: 601.

That is a corpus check, not a SERP check, and it is reported as such.

---

## Phase 1b / §3 — substantive duplication (the stronger half, run in full)

BRIEF §3's second, independent abort condition. All three sibling JSONs were
read in full before drafting. This half needed no search at all, and on this
keyword it is the more informative test.

| | `ganesh-chaturthi-essay` (gate sibling) | `ganesh-chaturthi-katha-and-story` | `ganesh-chaturthi-activities-for-kids` | **this post** |
|---|---|---|---|---|
| Words | 1,843 | 1,836 | 1,737 | 1,744 |
| Owns | Model paragraphs at 100 / 200 / 500 words, English + Hindi; the 1893 sarvajanik reinvention and the Peshwa roots | Six Puranic tellings of the birth story and where they contradict; the moon prohibition; when the texts were written | Four age bands mapped to jobs, with supervision levels and stated age floors on flame and water | The **spoken word budget** — minutes converted to words at a stated rate, and a script built for the ear |
| Unit of the deliverable | The paragraph, and its word count on paper | The narrative, and its textual source | The child's age | The **minute**, and the words that fit in it |
| Sources | openedition (SAMAJ), Cogent Arts & Humanities, De Gruyter *Culture*, FedOA book, themetropole.blog | asianethnology, wisdomlib, sanskritdocuments, GRETIL, SLJOL, drikpanchang | PLOS ONE ×2, UChicago voices PDF, WHO drowning, Young Lives | Brysbaert 2019 (JML), Li 2010 (JoSTrans), Pritchard 2019 (*Child Development*), Coupé 2019 (*Science Advances*) |
| Shared source URLs with this post | **0** | **0** | **0** | — |
| Shared source domains with this post | **0** | **0** | **0** | — |
| Speech / delivery / timing content | none — "assembly" appears only as *political* assembly under colonial restriction; no wpm, no minutes, no delivery, no rehearsal | "read out loud" appears for the vratha katha, and `11 hours 28 minutes` is a muhurat window, not a delivery time | one incidental "under a minute" for a toddler's job; "singing the aarti through, reading the katha aloud" at age 12+, with no timing | the whole post |

**Verdict: substantive duplication is CLEAR, and clear by a wide margin.**

- Zero source URLs and zero source domains are shared with any of the three.
- The essay sibling's deliverable is a paragraph graded on paper. This post's
  deliverable is a text measured against a clock and delivered from memory to a
  room. Its central number (183 wpm oral reading rate against 100–120 wpm
  speech delivery rate) has no counterpart anywhere in the essay post, and the
  essay post's central claim (the 1893 sarvajanik reinvention) is deliberately
  **not** re-argued here — this post gives the history two sentences inside the
  script itself and links nothing to it.
- The katha sibling owns myth and textual provenance; this post states no
  Puranic variant and cites no Purana.
- The kids sibling owns age-appropriateness of *activities*; this post's
  register section is about what a child can say to peers and teachers under
  nerves, which is a delivery question, not a supervision question.
- The overlap that does exist is the platform-wide first-party lines
  (49.6% mobile opens, 3,894 pages across 15 page types), which every post in
  the cluster necessarily shares. They are put to a different argument here —
  what a listener can be handed *after* a speech — and the post's own
  first-party point is a **negative** one: there is no Ganesh Chaturthi
  page-creation data at all.

The instruction that this post must not simply re-cut the essay post's
paragraphs was tested against the draft: no sentence, model paragraph or
heading is carried over, and the two posts share no source.

---

## Phase 2 — gap analysis

Run against the cluster corpus and the sibling JSONs rather than a measured
SERP, which is a real weakening of this phase and is recorded as such.

**Table stakes** — what any page on this keyword has to carry:

- Why Ganesh Chaturthi is celebrated, in one or two sentences a child can say.
- A ready-to-deliver text, not just advice about writing one.
- A short version and a longer version.
- An opening greeting and a closing line appropriate to a school audience.
- Something for the Hindi / Marathi speaker.

**The gap** — what the adjacent pages do not do:

1. **Nobody states a words-per-minute basis, so nobody's "2-minute speech" is
   two minutes.** The essay sibling gives 100 / 200 / 500-word models because
   *schools ask for those word counts on paper*. Converting a slot in minutes
   into a word count needs a delivery rate, and a delivery rate needs a source.
2. **The read-aloud rate and the speech rate are different numbers, and the
   difference is the whole trap.** A fluent reader reads aloud at 183 wpm
   (Brysbaert 2019, 77 studies, 5,965 participants). A speech is delivered at
   100–120 wpm (Li 2010). So a text that "fits" two minutes when you read it
   off the page at reading speed is roughly 1.5× too long when you actually
   deliver it. That is why school speeches overrun.
3. **Signposting for the ear.** A listener cannot re-read. Brysbaert's own
   conclusion is that reading rates are "in line with maximum listening speed",
   and Coupé et al. put the ceiling at ~39 bits/s across 17 languages — so a
   speaker who packs more in per minute does not transmit more, they lose the
   difference. Nothing in the cluster says this.
4. **Rehearsal method, with evidence.** Rehearsing aloud is not just
   traditional advice: the production effect is measured, and it has been
   measured *in 7- to 10-year-olds* (Pritchard et al. 2019, n = 41 and n = 40).
   This is the single strongest bridge between "a child has to remember it" and
   a citable finding.
5. **The language switch changes the word count, not the time.** Coupé et al.'s
   ~39 bits/s convergence means a Marathi or Hindi speech occupying the same
   two minutes is a different number of words. Word-for-word translation of a
   220-word English script therefore mis-times the Marathi delivery. No page in
   the cluster raises this.

**Stale data:** not assessable without a measured SERP. Recorded as unknown
rather than guessed.

**Unanswered questions the adjacent pages raise and drop:** how long is "short"?
what do you do if you are handed the slot the night before? what do you cut
first when you overrun? do you memorise it or read it?

**Fan-out sub-queries** (each became an H2 or an FAQ):

- how many words is a 2 minute ganesh chaturthi speech
- ganesh chaturthi speech in english for students
- ganesh chaturthi speech 10 lines / short speech
- how to start a ganesh chaturthi speech
- ganesh chaturthi speech in hindi / marathi
- how to remember a speech
- how fast should you speak in a school assembly
- ganesh chaturthi speech for teachers vs students

**Angle (recorded as `batchMeta.angle`):**

> Wins by being the only Ganesh Chaturthi speech page that converts the slot in
> minutes into a word budget against a stated, sourced delivery rate — 100–120
> wpm for a speech against the 183 wpm oral reading rate from a 77-study
> meta-analysis — and hands over a script timed to it, while stating plainly
> that SubhSandesh has no Ganesh Chaturthi page-creation data at all because the
> template went live 2026-09-10.

---

## Phase 3 — sources

Four sources. All four were fetched today and verified to contain the figure
cited. **The phenomenon searched was spoken delivery rate and memory for
material read aloud, not the keyword.** Search route: OpenAlex
(`is_oa:true`) and the DOAJ article API, then direct fetch of each candidate.
No source is shared with any of the 43 existing cluster posts — every domain
below was checked against all 45 blog JSONs in
`content/batches/2026-09-*ganesh*/blogs/` and against `USED-SOURCES.md`.

| # | Source | Domain (posts in cluster before this one) | Figure cited | Published | Verified how |
|---|---|---|---|---|---|
| 1 | Brysbaert, "How many words do we read per minute? A review and meta-analysis of reading rate", *Journal of Memory and Language* 109:104047 | `sciencedirect.com` (1) | Average **oral reading rate 183 wpm** from 77 studies / 5,965 participants; silent non-fiction 238 wpm; rates **lower for children**; rates "in line with maximum listening speed" | 2019-08-09 | Full abstract retrieved and read; published version is open on ScienceDirect (hybrid OA) |
| 2 | Li, "Coping Strategies for Fast Delivery in Simultaneous Interpretation", *The Journal of Specialised Translation* 13, 19–25 | `jostrans.org` (0) | "a rate between **100 and 120 words per minute (wpm) is optimal for English speeches**"; 150–180 syllables/min for Chinese | 2010-01-25 | Article page fetched, sentence read verbatim. CC-BY. **Abstract only was read** — recorded in the audit |
| 3 | Pritchard, Heron-Delaney, Malone & MacLeod, "The Production Effect Improves Memory in 7- to 10-Year-Old Children", *Child Development* | `onlinelibrary.wiley.com` (0) | Reading words **aloud** beat reading them silently for recognition in 7–10-year-olds, **n = 41** (Exp. 1) and **n = 40** (Exp. 2); effect held for words and nonwords | 2019-05-17 | Full abstract retrieved and read; free PDF (bronze OA). **Abstract only was read** — recorded in the audit |
| 4 | Coupé, Oh, Dediu & Pellegrino, "Different languages, similar encoding efficiency: Comparable information rates across the human communicative niche", *Science Advances* 5(9):eaaw2594 | `advances.sciencemag.org` (0) | 17-language corpus; languages converge on **~39 bits/s** despite wide differences in syllable rate and information per syllable | 2019-09-04 | Full abstract retrieved and read; gold OA | 

Tests applied:

- **Subject test** — all four are about spoken delivery rate, listening
  capacity, or memory for material read aloud. None is "about India" or "about
  the internet".
- **Swap test** — none survives a swap into another keyword in this batch. A
  words-per-minute delivery rate is useless in `ganesh-chaturthi-outfits` or
  `ganesh-chaturthi-board-decoration`; that is the point of choosing them.
- **Generic context statistics: zero.** No PIB, TRAI, Census or MEA figure
  appears anywhere in the post.
- **Wikipedia: zero as a source.** Wikipedia appears only as `sameAs` in
  `structuredData`, paired with a Wikidata QID, each verified against the
  Wikipedia API today (Ganesh Chaturthi Q929250, Ganesha Q1579, Public speaking
  Q18342738, Words per minute Q569389, School assembly Q7432324, Speech Q52946).
- **No competitor is cited, linked or paraphrased.**
- **drikpanchang is not cited at all.** The post states the festival date
  (Monday 14 September 2026) and no muhurat time, so per the checklist's
  date-reference rule it stays out of `sources` and `citation` entirely. This
  also avoids the two spent drikpanchang URLs in `USED-SOURCES.md`.
- **Nothing is reproduced.** No figure, chart, table or substantial passage is
  lifted from any source; the tables in the post are arithmetic computed from
  the cited rates, and the arithmetic is shown.

### Searches that did not produce a usable source

Recorded because a null result is a finding:

- Public-speaking anxiety in **school-age** children with a usable prevalence
  figure: the open-access literature that exists is dominated by virtual-reality
  exposure trials in university students and nursing students. The best-fitting
  hits sat on `frontiersin.org`, which is **at the cap of 3 posts** in this
  cluster. Terms tried: `public speaking anxiety prevalence students`,
  `fear of public speaking school presentation children`,
  `bibjson.title:("speech anxiety" AND students)`. No claim about anxiety
  prevalence is made in the post as a result — the nerves argument is made from
  the production-effect finding and from what the script structure does, not
  from an invented number.
- **Speaking rate normed by child age** in words per minute: nothing usable and
  open-access. The hits are clinical (stuttering severity, hoarseness,
  dysarthria) and report syllables per second in disordered populations. The
  post therefore does **not** publish a per-age wpm figure, and says so; it
  carries Brysbaert's direction of effect ("lower for children") without
  inventing a magnitude.
- A **CBSE / NCERT** document specifying a time or word limit for a school
  speaking task: `cbseacademic.nic.in/asl.html` 404s and the curriculum path
  guessed for the current cycle 404s; the one circular PDF that resolved is a
  scanned image with no extractable text. No institutional Indian time limit is
  claimed in the post.
- Signalling / discourse-marker effects on **listening** comprehension:
  `bibjson.title:("speech rate" AND comprehension)` returned one hit on
  `nature.com`, which is at the cap of 4 posts. The signposting section is
  therefore argued from Brysbaert's maximum-listening-speed conclusion and
  Coupé's bits/s ceiling, both already cited, rather than from a fifth source.

---

## Phase 4–5 notes

- **Word band:** target 1,650–1,760 by plain whitespace split, including the
  46-word §0 social block, per BRIEF §2. Measured only with
  `python3 -c "...['article']['contentMarkdown'].split()"`. `wordCount()` in
  `app/lib/batches.ts` was not used.
- **§0 social block** is present verbatim, immediately before `## Sources`.
  Its two URLs are not in `batchMeta.sources` and are not counted toward the
  source quota.
- **Internal links**, all absolute: `https://subhsandesh.in/happy-ganesh-chaturthi`
  (mandatory), `https://subhsandesh.in/guides/happy-ganesh-chaturthi` (body
  reference), `https://subhsandesh.in/templates` (browse-all). All three exist
  in `TEMPLATE_LINKS`. All placed after the section that establishes why a
  reader would want them, never in the opening paragraph.
- **`templateUrls`:** `["/happy-ganesh-chaturthi"]` only — not `/templates`,
  not a `/guides/...` path.
- **`categorySlug`:** `indian-festivals`.
- **Marker word unique to this keyword:** `183 wpm` and `word budget` appear in
  the body and nowhere else in the cluster.
- **`structuredData`:** an `ItemList` mirroring the four rehearsal H3s in order,
  an `@id`-matched enrichment block on `<canonical>#post` carrying `citation`
  one-to-one with `batchMeta.sources` plus `about` and `mentions`, and a
  `FAQPage` on `<canonical>#faq`. No `AggregateRating`, `Review` or `HowTo`.

## Known weaknesses

1. **The SERP gate was not measured.** Recorded as a failure in the audit, not
   a pass. The corpus check (428 headings, 0 about a speech) and the
   substantive-duplication read are what the separation actually rests on.
2. **No top-5 competitor pages were analysed**, so "at least one claim none of
   the top 5 pages make" cannot be verified as stated — only asserted against
   the 43-post cluster corpus. Also recorded as a failure.
3. Two of the four sources were read as **abstract only** (Li 2010, Pritchard
   2019). The figures cited are in those abstracts verbatim.
4. The festival lead-time figure is **Raksha Bandhan, n = 89**, and both
   disclosures are in body prose. No Ganesh lead-time number exists to use.

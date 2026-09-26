# BRIEF — WAVE 2 of `2026-09-25-miss-you-30`

**Read `BRIEF.md` first — all of it still applies.** This file records only what is
different for wave 2. Your assignment is one row of `WAVE2-PLAN.json`.

---

## 0. The gap this wave exists to take

The live site has **81 miss-you pages**. They are overwhelmingly
**"miss you *message* for <person>"** plus regional-language quotes/shayari/status.
There is **no English "miss you *quotes* for <person>" page at all.**

The earlier `2026-09-15-miss-you-100` run measured that `message` / `quotes` / `shayari` /
`status` return materially different SERPs, and that the site had over-built "message".
Nine rows in this wave take the quotes half.

**CORRECTION — measured by the `for sister` agent, and it binds all nine quotes rows.**
On the *sister* SERP the format split is **much weaker than the paragraph above implies**:
four of eight results carry "messages **and** quotes" in a single title, and our own
`/blog/miss-you-message-for-sister` ranks **#7 for the quotes query**. Google is not
separating the two intents on that SERP.

**So "mine is the quotes one" is NOT sufficient differentiation. Do not rely on it.**
Check your own SERP for the same pattern — count how many results merge the two words,
and whether a subhsandesh page appears. Then find a real angle underneath the format:
a situation split, a recipient truth, a register problem, a misfire nobody names. The
`for sister` row differentiated on the *structural reason* the person is away (married
into another household / relocated for work / not speaking) — which no result on its
SERP covered, ours included. That is the bar.

If the only difference you can state is the word "quotes", **abort the row** and say so.

**THE LANE SENTENCE — inherit this, do not re-invent it.** The anchor row
(`miss-you-quotes-for-him`) landed on a formulation the other eight should hold:

> *A message is something you compose and send; a quote is someone else's exact words
> that you borrow and pass on.*

It is grounded, not asserted — Wiktionary dates the "copy out exact words" sense to 1680.
So the post is about **borrowing**: which borrowed line fits which situation, and **when
borrowing is the wrong move**.

**THE STRUCTURE TO USE — arrived at independently by two rows, so treat it as the
cluster's shape.** Sort your lines by **the structural reason the person is not here**,
never by mood. The anchor's four, each a genuinely different problem:

1. **a fixed trip** — the absence has a known end date, so name the date;
2. **open-ended distance** — no end date, so a promise reads hollow; carry a *place* instead;
3. **chosen absence after a fight** — the obstacle is not kilometres. **Do not borrow at
   all here**: the one thing a borrowed line cannot do is admit what you specifically did;
4. **no absence at all** — they are reachable and the only obstacle is your hesitation.

The `for sister` row reached the same shape from a different direction (married into
another household / relocated for work / not speaking). **No result on either SERP asks
why the person is away**, which is why none of them can give a different answer for a
work trip than for a fight. That is the gap.

**METHOD — fetch live `<title>`s, do not read slugs. The answer varies BY SERP.**
Three rows measured the format split and got three different answers, all correct for
their own SERP:

| Row | Method | Finding |
|---|---|---|
| `for sister` | read slugs | 4 of 8 merge "messages and quotes"; **our page ranks #7** |
| `for him` | fetched titles | 3 of 10 title-mismatch; **0 subhsandesh**; 10/10 count-led |
| `for her` | fetched titles | **8 of 10 say "quotes", 0 merge both**; 0 subhsandesh |

**So do not inherit a conclusion about the split — measure your own and report the
number.** `SERPS-WAVE2.md` holds URLs only, so fetch the live titles (one
`serp-ddg.mjs` call, or fetch the pages). A slug and a title frequently disagree:
momjunction ranks for a *quotes* query serving `/best-miss-you-messages-for-him/` under
the title "120+ Warm 'I Miss You' Quotes For Him".

**The `for her` row's finding is the one to internalise:** the split can be *real and
still useless*, because all ten results are the same object — a numbered, mood-bucketed
bank. It counted **1,244 borrowed lines on page one** for `her` and **1,086** for `him`,
and 4 of its 10 results were not about "her" at all. It then turned that measurement into
the angle: both people in a couple draw from the same public, symmetrical, indexed
supply, so the recipient may well have seen the line — which makes the real question not
*which line* but *how you hand it over*. Its axis is therefore **delivery** (bare /
credited / framed / do-not-borrow), distinct from the anchor's **situation** axis.

**Two more measured facts from the anchor — check yours and report:**
- **The whole SERP competes on volume.** All ten of the anchor's results lead with a raw
  count (50, 50, 55, 120, 120, 120, 130, 140, 150, 151). You will not win on length, and
  trying is how you become the eleventh identical list.
- **Titles and URLs disagree.** momjunction ranks for a *quotes* query serving
  `/best-miss-you-messages-for-him_00790699/` under the title "120+ Warm 'I Miss You'
  Quotes For Him" — the same page, retitled. Report the count for your own SERP in an
  honest body section rather than asserting a format split you did not measure. The anchor structured on four situations (work trip /
different cities / just argued / late at night), each with a committed recommendation,
and made one of them an explicit *do not borrow*. Two things it banned after reading the
live pages, which apply to you too:

- **No mood/tone buckets.** Both live `for him` pages are mood-bucketed word banks of
  120+ lines. Repeating that shape is how you become a twin.
- **No "how to write your own" workflow.** That is the live pages' job; hand it off by
  cross-linking them instead.

**And no attributed literary lines** — the wave-1 sibling `blogs/miss-you-quotes.json`
already owns verified provenance (Shakespeare, Tennyson, Tagore, Kalidasa with book and
year). Read it. The anchor also stated outright that its lines carry no author
attributions *because attributions on quote lists are rarely verifiable* — that honesty
is itself a differentiator on a SERP full of misattributed lines.

**Your SERP is a genuine India SERP** (DuckDuckGo `kl=in-en`, 2026-09-25) in
`SERPS-WAVE2.md`. Treat positions as India-served.

**The gate verdicts were HAND-READ, and that matters to you.** The automated classifier
scored 13 of 29 candidates as FAIL; hand-reading inverted almost all of them, because
these SERPs are editorial on domains no regex knows — `quoteroot`, `redmessages`,
`howtosayguide`, `textranch`, `talkpal`, `wishesmsg`, `uncommonquotes`, and a long tail
of shayari farms. **Do not assume a domain is a competitor because it is unfamiliar.**
Read your own SERP before deciding what the gap is.

## 1. Three rows: WE ALREADY RANK. Read this if it is you.

Your row may carry `weAlreadyRank`. subhsandesh.in appears in your own SERP:

- `miss you quotes for sister` → **#7**, `/blog/miss-you-message-for-sister`
- `miss you quotes for coworker` → (check your SERP)
- `i miss you letter` → **#6**, `/blog/i-miss-you-letter-generator`

This is the cannibalisation question in its sharpest form. **Open that live page with
`ctx_fetch_and_index` and read it before drafting.** Then do one of two things and write
which in your audit:

- **Differentiate** — your page targets the *quotes* format (lines to copy) where the
  live page targets *messages* (something to send), or the *how to write* where the live
  page is a *generator*. Say in one sentence what the split is, and **cross-link the live
  page** so the two reinforce instead of compete.
- **Escalate** — if you cannot honestly differentiate, do NOT write a near-duplicate.
  Emit the research brief, write no blog JSON, report the row as an abort with reasoning.

Four rows aborted across the virtual-gift batch's waves 3–4 and every one was correct.
**A twin is worse than a missing post.**

## 2. The quotes cluster will cannibalise itself if you let it

Nine rows are `miss you quotes for <person>`. They were selected under a rule rejecting
any row sharing 5+ of 10 organic URLs with an already-selected one — `miss you quotes for
boyfriend` was rejected at **7/10 against `for him`**. But several siblings still sit at
3–4/10.

So: **your recipient is your lane and you must hold it.** What actually differs for a
husband versus a boyfriend, a best friend versus friends generally, a sister versus a
friend. If your post would read identically with the noun swapped, it is the wrong post.
Check `blogs/` for siblings before you finalise your H2s and do not target another row's
primary as your secondary.

## 3. Register — this batch is not the romance batch

`/missyou-gf` is **mandatory in every post** (`verify.config.json`), and the category is
`miss-you-across-miles`. But several rows are **not romantic**: coworker, best friend,
friends, sister. For those, warm-but-not-romantic is the whole craft problem — a farewell
message to a colleague that reads like a love letter is a failure. Say so where it helps.

## 4. Sources — reference instruments are cap-EXEMPT here, research is not

This batch's `verify.config.json` carries a **`capExemptDomains`** list (Wiktionary,
Tatoeba, Glosbe, Omniglot, Unicode, DSAL, jisho, diksiyonaryo.ph, national dictionaries,
Europe PMC, Archive.org and more). The reasoning is in `verify-batch.mjs`: a dictionary,
corpus or standards document cited as **the instrument a line was verified against** is
the method, not research concentration. Fifteen posts citing fifteen different Tatoeba
sentences is lexicography, not a content farm.

**This does not exempt research sources.** The URL ≤2 / domain ≤3 caps still bind
everything else. `journals.plos.org` is already at the cap of 3 in this batch. Read
your siblings' `sources` arrays before you commit.

**CAP STATUS — CORRECTED 2026-09-25 by the `i-miss-you-letter` row. My earlier "frontiersin
is CLOSED at 3" was WRONG and cost two rows their best-matched paper.**

Measured against all posts on disk, counting only non-exempt hosts:

| domain | posts | status |
|---|---|---|
| `journals.plos.org` | 3 | **closed** |
| `frontiersin.org` | **2** | **OPEN — one slot left** |
| `arxiv.org` | 2 | one slot left |
| `doaj.org` | 2 | one slot left |
| `edizionicafoscari.it` | 2 | one slot left |

**Zero URL violations. `doi.org` is a RESOLVER and is not counted** (verify-batch skips
it; ten DOIs resolve to ten publishers).

**THE CONFUSION THAT CAUSED THIS — read it, it will bite you too.** The cap is on the
**DOMAIN YOU LINK**, not the journal that published the paper. `europepmc.org` is
**cap-exempt**, so a paper published in *Frontiers in Psychology* but linked at a
`europepmc.org/article/PMC/...` URL **does not touch `frontiersin.org`'s count at all**.
Two rows counted by journal name, concluded Frontiers was at 3, and dropped good papers
for nothing.

**So: count the hostname in the URL you are about to put in `sources`, nothing else.**
Run `capcheck.mjs` immediately before you commit and trust its host-based count over any
figure quoted in this brief — including this table, which will age.

**FIRST-PARTY DATA IS THE BINDING CONSTRAINT NOW, not sources.** The `for wife` row
measured it: `facts-snapshot.md` carries **12 miss-you lines for 30 posts**, and every one
is already used by **19–32 siblings**. You will not find an unused pair. Do what it did —
open with the two *least*-reused lines, and say plainly in the audit that the fact density
is real but the differentiation from it is thin. **This closes with a new database probe,
not with more writing**, and no amount of care in your post fixes it.

**Route that works: Crossref → Unpaywall → OA landing page**
(`https://api.unpaywall.org/v2/<doi>?email=suyash.agrahari@hirequotient.com`) — it names
the OA location so you can skip blocked hosts before spending a fetch. OpenAlex
rate-limits under load; Semantic Scholar and CORE throttle; DOAJ intermittently 502s.
403/bot-challenged: sagepub, sciencedirect, mdpi, biomedcentral, SSRN, Wiley, Springer.
**PDFs do not parse here** — every source will be an abstract-and-metadata read, and you
must record that rather than implying you read the full text.

Search the phenomenon, not the keyword: `separation distress attachment`, `longing
rumination`, `relational maintenance mediated communication`, `expressive writing
emotional disclosure`. For the language rows: the lexical-gap literature is real and
genuinely interesting — several Philippine and South Asian languages have **no native
verb for "miss"** and borrow the English word, which is a finding worth building on.
If nothing topical exists, **say so and name the terms you tried.**

## 5. facts.md — read the file, do not trust any figure quoted in a brief

`content/facts.md` was regenerated **2026-09-24**. It also carries a
`## Superseded vintage — 2026-09-15 (ARCHIVE)` block below the manual marker: those lines
exist so older posts' citations still resolve. **Cite the current block, never the
archive.** Check the date on the line you are quoting.

Phase 0 blocks: 3 relevant facts, 2 inside the first 150 words. The site-wide
`/missyou-gf` figures are in the file — check three siblings and open with a pair nobody
near you has used.

**`## Pricing (fill in by hand)` is EMPTY.** Never state, infer or imply a price. The
verifier treats a priced phrase as a hard `COST CLAIM`. **The database records which
TEMPLATE was opened, never who received it** — disclose that wherever you cite template
counts, and it is not optional in a post about a sister, a friend or a colleague.

## 6. Before you report

```
node scripts/verify-batch.mjs content/batches/2026-09-25-miss-you-30
```
Act ONLY on lines naming your own slug. **Ignore source-cap findings** — the orchestrator
enforces caps once, at quiescence; five mid-write cap alarms in the previous batch all
turned out to be false. **Ignore the batch-wide `batch.json` line.**

A structural failure stays `failed` with an honest `why` naming the blocker and what
would close it — never delete an item to make the count green.

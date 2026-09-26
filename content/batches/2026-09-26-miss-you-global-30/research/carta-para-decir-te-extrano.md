# Research brief — `carta para decir te extraño`

- **Slug:** `carta-para-decir-te-extrano`
- **Body language:** Spanish · **Region:** `mx-es` · **Tier:** `B-howto`
- **Category:** `miss-you-across-miles`
- **Templates:** `/missyou-gf` (mandatory), `/catch`, `/templates` (+ `/photo-puzzle` linked in body)
- **Written:** 2026-09-27

---

## Phase 1 — SERP analysis (measured, not assumed)

### Route taken, in the order BRIEF §3 prescribes

| Step | Route | Result |
|---|---|---|
| 1 | `node scripts/serp-ddg.mjs "carta para decir te extraño" --region mx-es` — ONE call | `(no results parsed — DDG markup may have changed)`. Not retried, per BRIEF. |
| 2 | Sandboxed control probe (`ctx_execute`) of Brave `country=mx`, Bing `mkt=es-MX`, Mojeek, Google `gl=mx`, Startpage | Brave **429**; Bing 200 but 0 off-site hosts (JS shell); Mojeek 5.5 KB stub; Google 200 / 0 off-site hosts; Startpage 22 KB / 0. Exactly as BRIEF §3 documents. |
| 3 | **Google in the real browser, `gl=mx&hl=es-419&pws=0&num=20`** | Worked. **Run twice, identical hosts and order.** This is the SERP recorded below. |

### Contention — caught and discarded

Between the two clean runs, a `browser_scrape` of `#search h3` returned **the Turkish
sibling's SERP** (`seni özledim diyen birine ne cevap verilir`, wikiHow TR, 12 Turkish
results), and a subsequent `browser_navigate` returned `https://www.google.com/search?q=seni+özledim+diyen+erkeğe+ne+cevap+verilir&gl=tr&hl=tr`
with that title. **Nothing from either was recorded.** The row `seni-ozledim-diyen-erkege-ne-cevap-verilir`
is in WAVE2-PLAN, so a sibling was driving the same tab at the same moment. Confirms
BRIEF §3: a correct title in the navigate response is not authentication.

The two runs that *were* recorded were self-authenticated on the content: every result
is Spanish and every result is about *te extraño* / *carta*.

### Top 10, Google `gl=mx` `hl=es-419` `pws=0`, 2026-09-27 (10 of 10 actually seen)

| # | Host | Page type | Strong or weak |
|---|---|---|---|
| 1 | tumblr.com | User microblog post, one paragraph | Weak — UGC |
| 2 | writeexpress.com/es/love23.html | Four "Carta Modelo" samples, translated from English, ~2,200 words, **no advice section** | Weak — translated model letters |
| 3 | poetalia.com | Quote/poem aggregator — **returned HTTP 500 (WordPress critical error) when fetched** | Weak |
| 4 | pensador.com | Quote aggregator, 5 H2s, each one a sample letter, ~1,640 words | Weak — aggregator |
| 5 | pinterest.com/ideas/… | Pinterest Explore hub | Weak — no article |
| 6 | reddit.com/r/lonely (`?tl=es-419`) | English thread, title machine-translated by Google | Weak — UGC, wrong language |
| 7 | facebook.com group post | Group post attributed to Jorge Bucay | Weak — UGC |
| 8 | tubreveespacio.com | "Reflexiones / pensamientos" page, ~690 words | Weak |
| 9 | lettertomyex.com/2014/08/09/i-miss-you-7/ | English blog of letters to an ex, 2014 | Weak — English, 12 years old |
| 10 | lettertomyex.com/2014/08/09/i-miss-you-7/ | **Same URL again** | Weak — duplicate |

**Weak count: 10 of 10 seen. Zero strong Spanish editorial.**

### Gate 4 verdict — **PROCEED**

The BRIEF's `D-listicle` abort pattern (eight established national publishers, no weak
result) does not hold here. Not one incumbent is a Spanish editorial site with
subject authority. Four are pure UGC platforms, two are quote aggregators, one is a
translated model-letter library, one returns a 500, and one occupies two positions with
a twelve-year-old English page. This is the profile BRIEF §3 calls an `A`/`B`
opportunity, not an abort.

### Not aborted against the English sibling either

`../2026-09-25-miss-you-30/blogs/i-miss-you-letter.json` exists and is live in Strapi.
Its thesis is **what to leave OUT** of a letter, derived from the form (a letter is
finished before it is read, arrives once, cannot be amended), for a `us-en` SERP.
It does not serve a Spanish reader: different language, different SERP, different
incumbents, and a deliberately negative-space angle. This row is **structure-first**
(five ordered parts + a worked example) plus the `carta`/`mensaje` register question,
which the English row does not touch. Not a translation.

---

## Phase 2 — Gap analysis

**Table stakes on this SERP:** sample letter text; long-distance framing; an emotional
register the reader recognises.

**The gap, measured:**

1. **Nobody gives a structure.** All ten results give finished text or none. Not one
   names the parts of the letter or the order they go in.
2. **Nobody answers "how long".** Not one page states a length.
3. **Nobody publishes a "what not to write" list.** Verified on the ten results seen.
   **BUT** — the BRIEF is right that this gap is not universal: on the English SERP a
   sibling found `lovetale.app` publishes an explicit "Avoid This" list. The post
   therefore says the gap exists *on this SERP*, with the measurement attached, and
   explicitly says it does not exist in English. It never claims "nobody covers this".
4. **Nobody handles the grief-adjacent reader.** No result says who the page is not for.

**Checkable error in a ranking result (found):**
`writeexpress.com/es/love23.html`, **rank 2**, Carta Modelo #1 contains
**`un pizza de entrega`** — verified in the raw page source, not from a rendering.
The DLE marks [`pizza`](https://dle.rae.es/pizza) as **`1. f.`** (feminine, single
sense), so the agreement is *una pizza* — and the same sentence, two lines later,
writes *"una persona comiendo pizza"*. The page also carries malformed entities
(`m&aacutes`, `est&aacute`, `Cu&aacutendo`, missing semicolons); those were **not**
used as the error claim, because HTML5 legacy entity parsing may still render them
correctly. Only the agreement error is asserted.

**Angle (`batchMeta.angle`):** wins by being the only page on the measured es-MX SERP
that gives a five-part structure plus a measured answer to "how long" (median 88 words,
longest 1,024, n=214), and settles *carta* vs *mensaje* on what the DLE entries
actually say.

**Fan-out sub-queries → H2s:** qué dice el diccionario de «carta» / cuántas palabras /
qué partes lleva / un ejemplo / qué no escribir / carta vs mensaje vs nota de voz /
cuánto tiempo dedicarle / carta a alguien que murió / qué encuentro si hago clic.

---

## Phase 3 — Instruments and sources

### DLE, read in the real browser (sandboxed fetch 403s behind Cloudflare), headword authenticated each time

| Entry | What it actually says |
|---|---|
| [`carta`](https://dle.rae.es/carta) | *Del lat.* **charta** *'papiro', 'papel'*. **1. f.** «Papel escrito, y ordinariamente cerrado, que una persona envía a otra para comunicarse con ella.» Sin.: escrito, misiva, epístola, pliego, billete, besalamano. **Eight senses; not one mentions length.** |
| [`mensaje`](https://dle.rae.es/mensaje) | **1. m.** «Recado que envía alguien a otra persona.» Sin.: recado, aviso, nota, comunicación. |
| [`pizza`](https://dle.rae.es/pizza) | **1. f.** — single sense, feminine. Used to verify the rank-2 error. |

**This overturns the framing in my task prompt.** I was told a letter "implies length,
permanence and being kept" and to establish that from the DLE. The DLE establishes
**material support and closure**, and says nothing about length or permanence in either
entry. The post is built on what the entry says.

### Papers (Europe PMC, full text read via `fullTextXML` — no PDF needed, no abstract-only read)

1. **PMC12937751** — *Behavioral Sciences* (MDPI), 2026-02-05, CC BY.
   "Individual Differences in the Affective Experience of Writing a Gratitude Letter."
   N = 487 across three merged experiments. Three-cluster k-means (Table 1):
   **Backfired n = 185**, Mixed Feelings n = 188, Buffered n = 114. The Backfired
   cluster's positive affect fell and negative affect rose. **Used for the
   argue-against-my-own-premise section.** Journal count in this batch before me: 1.
2. **PMC12009924** — *Frontiers in Medicine*, 2025-04-07, CC BY, Manevich A.
   "Letter-writing to the deceased among family caregivers of individuals living with
   dementia." Perspective piece, no structured abstract, so full text was necessary.
   Expressive-writing protocol: *"typically for 15–20 min across three to five
   consecutive sessions"*. Key honest line: *"research has yet to establish the unique
   contribution and standalone efficacy of letter writing as an independent
   intervention"*. Only two pilot studies for non-death loss; Den Elzen et al. N = 20.
   **Used for the grief-adjacent section.** *Frontiers in Medicine is a different
   journal from the banned Frontiers in Psychology* — flagged for the human count.
   Unspent swap if the orchestrator counts Frontiers as one publisher: PMC9700208 is
   already cited, and PMC9183993 / PMC7741611 remain untouched.
3. **PMC9700208** — *Geriatric Nursing* (Elsevier), 2022-11-26, OA in Europe PMC.
   "The effect of letter writing on a long-term care resident with loneliness."
   **n = 1 case report**, IRB-approved: an 82-year-old resident of five years, family
   out of state visiting a couple of times a year, measured on the 20-item UCLA
   Loneliness Scale (0–3 per item). Cited explicitly as a single case so the evidence
   for letters is not overstated.

### Source dropped for a cap

**PMC8669216** — *Journal of Social and Personal Relationships* (SAGE, 2021),
"Long-distance texting", n = 647 with 36.5% in LDRs. This was the best on-subject
long-distance source available. It is **already cited in two posts of this batch**
(`te-extrano-en-ingles-como-se-dice`, `aitai-meaning-in-english`), which is the URL cap
of 2, so it was dropped. `capcheck.mjs` did **not** surface this — it reports
`europepmc.org` as an exempt host. Found by grepping PMCIDs across both batch
directories by hand.

`capcheck.mjs` run immediately before writing: clean; no banned URL used; `doi.org` at
cap 3 and not cited; no domain of mine at cap.

---

## Phase 4–5 — Build notes

- **Body 1,766 words** (plain whitespace split), FAQs excluded. Aimed at ~1,750 per the
  WAVE1 word-ceiling `knownIssue`; deliberately not near 1,800.
- **11 FAQs**, Spanish, none restating a body H2.
- **Table:** 4 rows, one column entirely first-party (88-word median, 13.6% voice notes).
- **First-party lines: 10.** The two heavily-collided miss-you lines (88 words, 43.5%
  password) are kept because this is the one row where letter length *is* the query;
  the rest lean on the least-used platform lines (`48.4%` touch and the `love-gf
  17,093` line are used by one other post each).
- **Template choice — `/capsule` rejected with a reason.** My prompt assigned `/capsule`
  "because a letter suits a time-capsule". `app/lib/prompt.ts:80` defines `/capsule` as
  a **mutual prediction game sealed for a year and scored together** — no letter, and it
  needs both people to play. `verify.config.json`'s own `_why` says
  *"/catch or /photo-puzzle when the sender wants a letter rather than a page"*.
  Took **`/catch`** (delivers the letter line by line, nothing ever locked) and named
  **`/photo-puzzle`** as the second letter-shaped option.
- **Product mismatch disclosed in Spanish body prose**, per BRIEF §2:
  `/missyou-gf` is an **English page with English labels**, defined at
  `app/lib/prompt.ts:44` as an "I miss you page for a girlfriend/partner" — so it is
  both wrong-language and recipient-specific, and the post says both.
- **Price guard:** `pricecheck-intl.mjs carta-para-decir-te-extrano` → clean. The post
  says the terms of use cannot be confirmed and links `/templates`.
- **Mandatory caveats, all in Spanish body prose:** picker defaults; views ≠ unique
  visitors; n = 214 over two months; nothing segmented by language or country
  (so no figure here is Mexican or Spanish); the database records which **template**
  was opened, never who received it.
- **Strapi:** slug free (`total: 0`, production API via `ctx_execute`). `miss-you-across-miles`
  confirmed live among 10 categories. Both sibling cross-link targets confirmed live
  (`total: 1` each), so neither 404s.
- **Wikidata QIDs all verified** against the MediaWiki API: Carta **Q133492**,
  Idioma español **Q1321**, Real Academia Española **Q11993457** (my own guess of
  Q207767 was wrong — checked), Long-distance relationship **Q1406917**.

## Phase 6 — Audit

50 items, `passed` = 49, `failed` = 1, `passed ∩ failed = ∅`, every string byte-verbatim
from `references/publish-checklist.md`. Extra self-checks live in
`auditReport.additionalChecks`, never in `passed`.

**The one failure and why it stays:** *"No source passes the **swap test**"* —
`dle.rae.es/mensaje` could sit unchanged in another Spanish sibling's post. It is kept
because the *carta*/*mensaje* contrast is the post's central register claim and that
entry is the evidence for it. Closing the item would mean deleting the register
section, which costs more than the item is worth.

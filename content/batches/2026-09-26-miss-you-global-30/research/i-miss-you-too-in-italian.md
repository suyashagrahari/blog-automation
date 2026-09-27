# Research — `i-miss-you-too-in-italian`

- **Keyword:** `anche tu mi manchi significato`
- **Region:** `it-it` · **Body language:** Italian · **Tier:** `A-reply`
- **Written:** 2026-09-27
- **Category:** `miss-you-across-miles` (Strapi category id 8, "Miss You, Across Miles" — resolved live)

---

## 0. The task framing, tested

The prompt said its framing had been overturned sixteen times across this run and told me to
verify both halves against real entries. **Both halves held.** The evidence is below, and it is
stronger than the framing claimed, because the licence for the scope analysis turns out to be
sitting inside Treccani's own example sentences for *anche*.

| Claim in the prompt | Verdict | What settled it |
|---|---|---|
| *mi manchi* inverts; missed person = subject, experiencer = **complemento di termine** (Treccani's label, not "dative") | **HOLDS** | Treccani *mancare*, sense 1 `intr. (aus. essere)`, sense 1.c "Con il compl. di termine…" |
| *anche tu mi manchi* — *anche* scopes over **tu** → a correct reply | **HOLDS** | Treccani *anche* 1.a examples + De Cesare 2015 Tables 1 and 7 |
| *anche a me manchi* — *anche* scopes over the experiencer → a different proposition | **HOLDS, empirically** | Tatoeba: 3 of 3 *anche a me* + *mancare* sentences render the added element as the English subject |
| *anche io mi manchi* is ungrammatical nonsense | **HOLDS**, on two grounds | agreement (*manchi* is 2sg) + sense (*mi* already fills the complemento di termine); absent from both corpora |

**One correction to the strength of the claim, made in the body.** *anche a me manchi* is
**not** wrong. Tatoeba gives it 0, but Google Books Ngram attests it in 6 distinct years. It is
rare, not absent, and the post says *different*, not *wrong*.

---

## 1. Phase 0 — first-party facts

`facts-snapshot.md` only (never `content/facts.md`). Usage counted across both this batch and
`2026-09-25-miss-you-30` (70 posts on disk) before choosing:

| Line | Other posts using it |
|---|---|
| 57,456 recorded views of shared pages | 1 |
| Average views per created page: 11.1 | 2 |
| 90.9% of started pages published and shared | 3 |
| Median edit gap 2.5 h, /apology-dashboard, n=1,396 | 6 |
| Median miss-you edit gap 2.6 h, n=214 | 36 |

The three Italian siblings between them already use twelve of the miss-you lines
(`mi-manchi-in-inglese`: 2.6 h, 88.8%, 86.4%, 214 pages; `mi-manchi-in-spagnolo`: 47 city pairs,
1,434 hugs, 43.5%, 2,417 views; `come-dire-…`: 88-word median, 92.1%, 13.6%, 28.0%). I took four
platform-wide lines instead and **paired the two edit-gap lines so the contrast is the finding**:
two samples of very different size, n=1,396 and n=214, land 0.1 h apart. That is what licenses
the post's spine — a reply and a page are different jobs — and no sibling uses the pair.

Mandatory caveats, all in Italian body prose: template-not-recipient, **nothing segmented by
language or country**, views ≠ unique visitors, n=214 = two months, pickers-with-defaults.

---

## 2. Phase 1 — instruments

Every line checked against a fetched source. Nothing from memory, nothing from a competitor.

### Treccani, *mancare* — https://www.treccani.it/vocabolario/mancare/
Fetched 2026-09-26, 170,394 bytes HTML → 7,909 chars of text, read in full.
Headword `mancare v. intr. e tr. [der. di manco 1] (io manco, tu manchi, ecc.)`. Sense 1 =
`intr. (aus. essere)`. Sense **1.c** verbatim:

> «Con il compl. di termine, in frasi quali *mi manchi, mi sei mancato, ci mancherai, ci manca
> molto* e sim., riferite a persona di cui si sente, si è sentita o si sentirà la lontananza, e
> quindi il desiderio e il rimpianto»

Two things taken from it: the label is **complemento di termine** (used throughout the post;
"dativo" appears nowhere, matching the three Italian siblings), and because sense 1 is
intransitive with auxiliary *essere*, **the construction has no complemento oggetto at all** —
which is exactly what falsifies the error found on the SERP.

### Treccani, *anche* — https://www.treccani.it/vocabolario/anche/  ← **the licensing entry**
Fetched 2026-09-26, read in full. Sense 1.a:

> «Particella aggiuntiva, che serve per riferire a una persona o cosa o nozione quanto già si è
> affermato, o si sottintende, d'altre persone o cose o nozioni»

**The dictionary's own two examples are themselves the minimal pair this post is about:**

- «ci sarò **anch'io** alla festa *(oltre agli altri)*» — *anche* pre-adjacent to the **subject**
  *io*, and the parenthetical naming the alternative set is Treccani's, not mine.
- «importa a te, ma importa molto **anche a me**» — *anche* pre-adjacent to the **complemento di
  termine** *a me*, contrast set {te, me}.

Same particle, same verb class, **different added element, decided by which constituent it
precedes.** That is the whole argument, printed in the dictionary.

### Crusca 4th ed., ANCHE — https://www.lessicografia.it/Controller?lemma=ANCHE
Read in full 2026-09-27. (`accademiadellacrusca.it` search is 500/404 — established by
`mi-manchi-in-inglese`; the `lessicografia.it/Controller?lemma=X` route works, and I used it on a
**different lemma**, so nothing is re-derived.) Head definition, entire:

> «Lo stesso che *Ancora* coll'accento sulla sillaba penultima. Lat. *etiam, quoque*.»

plus §I (*anche* for *altro*) and §II, which defers outright: «Alcune notizie di tal particella
si possono vedere nel Cinonio sotto la voce *Ancora*.»
**Finding:** the 1729–38 Crusca gives the right Latin equivalents but says **nothing** about what
the particle takes scope over. The scope description is a modern lexicographic addition. This is
a different *kind* of finding from the sibling's Crusca result (which was an absent *sense*).

### De Cesare 2015 — https://bop.unibe.ch/linguistik-online/article/view/1777
*Linguistik Online* 71, 2/2015, University of Bern, doi 10.13092/lo.71.1777.
Unpaywall: `is_oa: true`, `oa_status: gold`, CC BY, publisher University of Bern.
**FULL TEXT READ** — PDF (458,911 bytes) downloaded and parsed with `pdftotext -layout`
(`/usr/local/bin/pdftotext`) into 81,000 characters. Not an abstract.

Corpus: ICOCP sub-corpus, **743,500 words** of comparable online news (Italian 242,500 —
corriere.it, repubblica.it, lastampa.it; French 263,000; English 247,000), Q4 2011. Syntactic
analysis on the first 100 occurrences of each adverb.

The load-bearing sentence, §3.1.1:

> "In Italian, when the Subject functions as its DA, *anche* is generally placed directly in front
> of it… **In this case, *anche* can only have the Subject as its DA.**"

- **Table 1** — configuration I `AFA S Vfin (O)`: It. *anche* **NS** (narrow scope); Fr. *aussi*
  **NA**; E. *also* **NA**.
- **Table 7** — configuration I: It. *anche* **100% / NS**. E. *also* is 69% in configuration II
  at **WS** (wide scope), and the paper states: "E. *also* takes wide scope and always needs the
  context to narrow down its association with the Subject."
- **Table 3** — frequency per 100,000 words: *anche* 380 (922 occ.), *also* 162 (399), *aussi* 106 (278).

*anche tu mi manchi* **is** configuration I. So the Italian reply is structurally unambiguous
where the English "I miss you too" is not — which is the post's most citable claim and one no
ranking page makes.

**Limitation recorded:** her corpus is journalistic prose and she never discusses *mancare* or
reciprocal replies. The bridge from her rule to this sentence is mine, and it rests on Treccani's
classification of *tu* as the subject.

---

## 3. Corpus work — two corpora, and one zero refused

### Tatoeba (api_v0/search, `from=ita&to=eng&trans_to=eng`), 2026-09-27
Search is **tokenised** and **diacritic-insensitive**, so every loose result was paginated and
then filtered on the literal Italian string, and every strict hit was read individually.

| Query | raw returned | strict | what survived |
|---|---|---|---|
| `anche tu mi manchi` | 5 | **1** | 1125710 «Anche tu mi manchi!» → *I miss you too! / I miss you, too.* |
| `anche tu mi sei mancato` | 4 | **2** | 10824127 → *I missed you too.*; 9967158 «…, Tom.» → *I have missed you too, Tom.* |
| `anche a me manchi` | 3 | **0** | all three are *anche a me* + *mancare* with a third party |
| `anche a me manca` | 3 | **1** | 3533156 «Anche a me manca Tom.» → *I'll miss Tom, too.* |
| `mi manchi anche tu` | 5 | **0** | all five place *anche* **before** *tu* |
| `anche io mi manchi` | 0 | 0 | — |
| `anche io ti manco` | 0 | 0 | — |
| `anche a me` | 72 rep. / 60 pag. | 53 | 4 of them are *mancare* |
| `anche tu` | 112 rep. / 60 pag. | 60 | — |
| `ti manco` | 70 rep. / 40 pag. | 1 | 3869907 «Non ti manco per niente?» |

**THE MINIMAL PAIR.** Every attested *anche a me* + *mancare* sentence keeps the missed person
fixed and renders the added element as the English **subject**:

- 3533156 «Anche a me manca Tom.» → "I'll miss Tom, **too**." (= *I* too)
- 6172630 «Anche a me mancherà.» → "I'll miss him, too. / I'll miss her, too."
- 6172631 «Anche a me mancheranno.» → "I'll miss them, too."

**3 of 3**, against 1125710 «Anche tu mi manchi!» → "I miss **you** too!". The experiencer is
what *anche a me* adds; the missed person is what *anche tu* adds. Exactly as predicted.

**Bonus attestation, the elliptical reply:** 7275135 and 7274609 are dialogue —
«"Mi sei mancata/o tanto". "**Anche tu!**"» → «"I missed you a lot." "I missed you too!"». The
short Italian reply is **nominative *tu***, not *a me*. That is as direct a confirmation as a
corpus can give.

### Google Books Ngram Viewer, Italian corpus, 1900–2019, `smoothing=0`
A first run at `smoothing=3` inflated the nonzero-year counts (54/20/46) and was **discarded**;
the unsmoothed run is what the post reports.

| ngram | nonzero years | peak rel. freq. |
|---|---|---|
| anche tu mi manchi | **20** | 2.368e-8 |
| mi manchi anche tu | **17** | 1.581e-8 |
| anche a me manchi | **6** (1997, 2010, 2015, 2016, 2018, 2019) | 2.273e-9 |
| anche io mi manchi | **not returned at all** | — |

### The zero I refused to treat as evidence
Tatoeba returns **0** for *anche a me manchi*. Taken alone that would have supported calling the
form non-existent — and a Polish sibling row refused exactly that move when a real corpus showed
41–81 attestations, while this site's own `come-dire-mi-manchi-in-modo-originale` proved a zero
can belong to the query rather than the corpus. So I went to a second corpus, and Google Books
puts the form in six years. **The form is rare, not absent.** The post calls it *different*, not
*wrong*, and says so in the body. Meanwhile *anche io mi manchi* is absent from **both** corpora,
which is what makes it a genuinely separate case.

---

## 4. SERP measurement — route, contention, Gate 4

**Route order followed exactly as BRIEF §3 prescribes.**

1. **`serp-ddg.mjs` — ONE call, failed, not retried.**
   `node scripts/serp-ddg.mjs "anche tu mi manchi significato" --region it-it`
   Echoed back `query: anche tu mi manchi significato` — so this was a **genuine failure, not the
   argument-order bug** the brief added on 2026-09-27 (which would have printed `query: it-it`).
   Result: `(no results parsed — DDG markup may have changed)`. Moved on immediately.

2. **PolterTab shared Chrome — CONTENTION CONFIRMED, output discarded.** After navigating to my
   Google URL (`status: ok`, **correct page title**), the first scrape returned a single Italian
   h3; the very next call reported the tab sitting on
   `roboguru.ruangguru.com/question/apa-bahasa-inggrisnya-aku-rindu-kamu-…` — **an Indonesian
   sibling's page**. Exactly the failure mode the brief documents: *a correct title in the
   navigate response is not authentication*. Nothing from that route was recorded.
   `browser_scrape` also silently ignores a `url` argument, so there is no atomic
   navigate-and-extract on that tool.

3. **Playwright browser — Google `gl=it&hl=it&pws=0`. USED, and self-authenticated on content.**
   The evaluated page reported `q = "anche tu mi manchi significato"` from its own
   `location.search`, a fully Italian body, and every result on-topic for *mi manchi*.
   **Run twice; nine organic results, identical and in identical order.** No `/sorry/index`.
   Bing and Brave were not needed.

### What ranks (Google it-IT, 2026-09-26, measured twice)

| # | Result | Type | Weak? |
|---|---|---|---|
| — | **AI Overview** (sourced to My-personaltrainer +2, Reddit r/Italian, WordReference) | SGE panel | n/a |
| 1 | Facebook post, «"Mi manchi" Penso sia questa la frase più bella…» | social UGC | **weak** |
| 2 | Reddit · r/Italian, «Mi manchi tu/te» (80+ comments) | forum | **weak** |
| 3 | Reverso Context, «Anche tu mi manchi — Traduzione in inglese» | MT scraper | **weak** |
| 4 | Instagram · primulagalantucci | social UGC | **weak** |
| 5 | ilcentro.net, «10 modi diversi per dire "Mi manchi"» (Milan language school) | listicle | not weak |
| 6 | WordReference Forums, «La risposta giusta a "mi manchi"» (2016) | forum | **weak** |
| 7 | my-personaltrainer.it / Psicologia (16 lug 2026) | publisher, off-intent | not weak |
| 8 | Reddit · r/AvoidantBreakUps | forum | **weak** |
| 9 | Instagram · psicologia_benessere_ | social UGC | **weak** |

**Weak count: 7 of the 9 I actually saw.** I did not invent a tenth position.
**None of the nine cites Treccani, Crusca, Zingarelli, De Mauro or Devoto-Oli.** Consistent with
the Italian siblings' 9/10 and 7/8 measurements.

**GATE 4: PASS, clearly.** The top 10 is not strong Italian editorial. It is social UGC and
forums, with one language-school listicle and one psychology page that answers a *feelings*
question and never says who the subject of *mancare* is. That last point is the content gap.

### The checkable error
The snippet **Google itself serves** at position 2 (r/Italian):

> «Dire "Mi manchi anche te" è un'inflessione dialettale. "Te" verrebbe usato come soggetto,
> **mentre in realtà è un complemento oggetto**. E in …»

The practical verdict is right (*tu*, not *te*) but **the reason is false and a dictionary
falsifies it**: Treccani classes *mancare* sense 1 as `intr. (aus. essere)`, and an intransitive
verb takes **no complemento oggetto at all**. The slot in question is the **subject**; the
experiencer is the **complemento di termine**. Notably the same thread's other surfaced comment
gets it right ("«Tu» è corretto, poiché è il soggetto del verbo"), so the SERP is serving a
correct and an incorrect explanation of the same point.

**Honesty limit:** `reddit.com` returns **403** to a scripted request from here, and I would not
drive the shared browser to it after that browser had already handed me another agent's page. I
read the snippet Google publishes — reproducible by anyone running the query — not the thread.
The body states this.

**Also recorded:** Google's AI Overview answers the emotional question, cites a psychology page,
and never states who the subject is. It does get the word-order point right ("«mi manchi anche
tu» o semplicemente «anche tu» … mantenendo lo stesso identico valore"), which agrees with this
post.

---

## 5. Split from the three Italian siblings

Read in full before writing; nothing re-derived.

| Sibling | Owns | This post does NOT touch it |
|---|---|---|
| `mi-manchi-in-inglese` | subject inversion vs English; Crusca **MANCARE** (10 senses, no affective sense); Tatoeba 32/32 flipped | I cite its 32/32 only inside an FAQ, attributed, and my Crusca lemma is **ANCHE** |
| `mi-manchi-in-spagnolo` | *me faltas* / DLE *faltar* (11 senses) | no Spanish anywhere |
| `come-dire-mi-manchi-in-modo-originale` | register table; *rimpiangere* trap; intensifier between verb and object | referenced in one FAQ, attributed, not re-measured |

**This post owns what none of them touches: the SCOPE of *anche* — which argument the additive
particle selects — and therefore the *reply* rather than the message.** All three are cross-linked
from the body.

---

## 6. Sources, caps, product

**6 sources**, all read in full, **zero abstract-only**:
Treccani *mancare* · Treccani *anche* · Crusca 4th ed. ANCHE (lessicografia.it) · Tatoeba
(sentence 1125710) · Google Books Ngram Viewer · **De Cesare 2015, *Linguistik Online*** (the
peer-reviewed, open-access one — `is_oa: true`, gold, CC BY; PDF parsed with `pdftotext`).

**Caps.** Journal named for the hand count: **Linguistik Online, 0 other posts.** No banned
journal (no *Frontiers in Psychology*, *PLoS ONE*, *Scientific Reports*, *BMC Psychology*,
*PNAS*). **No `doi.org` link** — that domain is at cap 3, so the De Cesare citation uses the
publisher URL `bop.unibe.ch`. **No PMCID cited at all**, so PMC8669216 and the siblings' spent
PMC11337870 / PMC12276763 / MDPI *Languages* are untouched. `capcheck.mjs` run immediately before
writing: my hosts clean, `bop.unibe.ch` absent from the batch.

**Swap test:** every source is specific to *this* keyword — two Treccani entries, a Crusca lemma,
a corpus measurement of these four strings, an ngram of these four strings, and a paper about
Italian *anche* itself. None could sit unchanged in another post in this batch. This is also why
I **dropped** the obvious second-language-affect psycholinguistics paper: it would have failed the
swap test outright, and the Italian siblings already hold that slot.

**Templates — checked at source, not accepted.** `app/lib/prompt.ts:44` defines `/missyou-gf` as
*"'I miss you' page for a girlfriend/partner"* — English and recipient-specific; mandatory per
`verify.config.json`, so it stays and is **disclosed in Italian prose** (wrong language *and*,
for a friend or relative, wrong recipient). I **kept** the assigned `/streak` rather than
swapping, for a substantive reason: `prompt.ts:88` describes it as *"two people, one tap a day"*
— the only template in `oneOfLinks` where **both** parties act, which is the same reciprocity the
post is about. Its labels are English too, and the post says so.

**The tension the prompt asked me to name is the post's spine:** a reply is not a page. The body
opens by telling a reader who is mid-conversation to close the page and type three words, and the
first-party table sets "the time it takes to type it" against medians of 2.5 h (n=1,396) and
2.6 h (n=214).

**Price guard:** `pricecheck-intl.mjs i-miss-you-too-in-italian` → clean. The refusal is worded
without *prezzo*, which the script flags even inside a refusal.

**Strapi, live via `ctx_execute` (curl/WebFetch are blocked and were not used):** slug
`i-miss-you-too-in-italian` → `total: 0`, free. Category `miss-you-across-miles` → id 8.

**QIDs, all resolved through the Wikidata + Wikipedia APIs:** Q652 Italian language (pageid
14708), Q184943 grammatical particle (95478), Q338489 Accademia della Crusca (754089), Q4015911
Vocabolario degli Accademici della Crusca (59125410), Q495456 Tatoeba (31238416), Q1406917
long-distance relationship (801682). **A first guess of Q220923 for Tatoeba resolved to the 1983
European Grand Prix** and was discarded — the trap the brief warns about, caught.

---

## 7. Output

- Body **1,768 words** (target ~1,750), 1 H1, 10 H2s, no H3s.
- **12 FAQs**, Italian, in `article.faqs` only; none restates a body H2.
- 2 tables (4-row corpus comparison; 3-row first-party time comparison, whose third column is
  first-party with n and measurement dates).
- 6 outbound links, all fetched and confirmed to contain the cited content; 3 internal template
  links (`/missyou-gf`, `/streak`, `/templates`); 3 `/blog/` sibling cross-links (filtered out of
  the internal-link count by the verifier).
- Audit: **47 passed / 3 failed**, `passed ∩ failed = ∅`, 50 total; extras in `additionalChecks`.
  The three failures are the English slug (two items — fixed by `WAVE3-PLAN.json`, and
  `batch.json` is out of scope) and the source-cap item, which cannot be settled at write time
  with six agents writing concurrently.

# Research brief — `ich-vermisse-dich-auf-italienisch`

Keyword: **ich vermisse dich auf italienisch** · market `de-de` · body language German
Tier `A-translate`, band 2, plan estimate `weak: 4`.

---

## Phase 1 — SERP measurement (two routes, both market-served)

**Route 1 — `scripts/serp-ddg.mjs "ich vermisse dich auf italienisch" --region de-de`.**
Succeeded on the **first** call, 10 results parsed, `query:` line echoed back correctly.
Two later calls on the same route (a confirmation re-run and a control on the bare head)
both returned `(no results parsed)` — throttled, exactly as BRIEF §3 describes. The SERP was
therefore captured once and not re-run on this route.

| # | Host | Page type |
|---|---|---|
| 1 | woerterbuch.reverso.net | bilingual dictionary / translation memory |
| 2 | wordy.info | thin language blog |
| 3 | context.reverso.net | parallel-corpus concordance |
| 4 | de.bab.la | dictionary |
| 5 | fluentvista.com | thin language blog |
| 6 | de.pons.com | dictionary (real lexicographic publisher) |
| 7 | dict.leo.org | dictionary + forum |
| 8 | woerterbuch.reverso.net | dictionary (second entry) |
| 9 | ilcentro.net | **editorial** — Italian language school, Rome |
| 10 | de.glosbe.com | dictionary scraper |

**Route 2 — Google in the real browser**, `gl=de&hl=de&pws=0`.
Self-authenticated on the content actually read, not on the navigation result: the page
returned German UI chrome and the DE→IT Google-Translate one-box for this exact query.
8 organic records extracted of 24 containers (the rest are widgets/placeholders).

Order: **Google Translate one-box first** (answer: *Mi manchi*), then an AI-Modus block
citing `context.reverso` and `ilcentro.net`, then context.reverso, reddit
r/italianlearning, ilcentro.net, memrise, PONS, bab.la.

**Weak count: 8–9 of 10 on both routes.** The only genuine editorial page is ilcentro.net.
**Zero German magazine publishers.** No Helene Fischer, no Netflix *Missing You* — that
contamination belongs to the bare head, which could not be measured because DDG throttled,
so the post neither confirms nor denies it.

**Gate 4: PASS.** Measured weak (8–9) is better than the plan's estimate (4). No abort.

---

## Phase 2 — Gap

**Table stakes:** give *mi manchi*; give a past-tense form; give a plural form.

**The gap, on both routes:** not one ranking result names a case, a subject, or the fact
that *mi manchi* reverses the roles. Google itself answers the query with a Translate
one-box, so a page that only supplies the string has nothing to add.

**Fan-out sub-queries → H2s:** which sentence is it really · why is the subject on the
other side · does Italian have the other construction · which German form do Germans
actually use · which forms do I need · what ranks today.

**Twin risk — checked, and it was real.** Three siblings already state that German has two
constructions: `ich-vermisse-dich-auf-turkisch` («Die deutsche Wahl hat im Türkischen
keinen Platz»), `ich-vermisse-dich-auch` («Du fehlst mir auch»), and `mi-manchi-in-inglese`
(Treccani, Italian→English). The bare asymmetry would have been a twin. What is new here:
the **direction German→Italian**, the **mapping** of *mi manchi* onto *du fehlst mir*
rather than onto *ich vermisse dich*, the Treccani finding that Italian's misser-subject
reading **leaves the verb** for a noun periphrasis, and the **measured frequency contrast**.
The split is stated in body prose and all three siblings are cross-linked.

---

## Phase 3 — Instruments and sources

### The two-construction asymmetry, established not assumed

- **DWDS `vermissen`** — Bedeutung 1 is ⟨jmd. vermisst jmdn., etw.⟩, collocation line
  "mit Akkusativobjekt". Misser = subject. Headword confirmed on the page fetched.
- **DWDS `fehlen`** — Bedeutung **1 b)** is ⟨jmd. fehlt jmdm.⟩, glossed
  "sehr vermisst, entbehrt werden". DWDS defines the dative construction *through the
  passive of* `vermissen` — the two are lexicographically bound.
- **Treccani `mancare` 1.c** — intransitive (aus. essere), "Con il compl. di termine, in
  frasi quali **mi manchi**, mi sei mancato, ci mancherai". Missed person = subject.
- **Treccani `mancare` 3.** — the transitive use exists but means **fallire**:
  *mancare il colpo*, *mancare la coincidenza*, *mancare un rigore*. Never a person.
- **Treccani `mancanza` 1.b** — "abbiamo sentito molto la tua mancanza". Italian's
  misser-subject perspective exists, but as a **noun periphrasis**, not a verb valency.

### The corpus measurement (the original contribution)

DWDS D* interface, `kaskade.dwds.de/dstar/<corpus>/dstar.perl?q=count("…")&fmt=json`.

| Form | untertitel | blogs | dwdsxl |
|---|---|---|---|
| ich vermisse dich | 453 | 25 | 738 |
| du fehlst mir | 232 | 12 | 376 |
| ich vermisse sie | 129 | 17 | 289 |
| sie fehlen mir | 69 | 8 | 148 |
| wir vermissen dich | 50 | 12 | 159 |
| du fehlst uns | 18 | 1 | 43 |

Accusative share: **66.5 %** (untertitel), **72.0 %** (blogs), **67.7 %** (dwdsxl).
Perfect tense, untertitel: *ich habe dich vermisst* 297 : *du hast mir gefehlt* 105.

**Instrument authentication.** Every count re-run through a second query path; `count()`
matched `nhits_` exactly (453/453, 232/232), and a concordance read returned real records
with IMDb ids and the matched tokens («Du fehlst mir.», *Addicted to Love*, 1997). A ratio
inside one corpus needs no normalisation, since the denominator cancels.

**Translationese control.** `untertitel` is largely translated German, so an English
"I miss you" could explain the skew. `blogs` is natively written German with no English
source and shows the same ratio — the explanation does not hold.

### Sources (6, all cited in the body)

1. `dwds.de/wb/vermissen` · 2. `dwds.de/wb/fehlen` · 3. `treccani.it/vocabolario/mancare/`
4. `treccani.it/vocabolario/mancanza/` · 5. `kaskade.dwds.de/…/dstar.perl?q=count(…)`
6. `europepmc.org/article/PMC/PMC13518077` — Sánchez-López, Isasi-Isasmendi, Bickel &
   Santesteban, *Open Mind* (MIT Press), CC BY, 2026-07-17, **full text read**: n = 30 per
   experiment; experiencers pattern with agents, not patients (no N400 for agent vs
   experiencer). Peer-reviewed and open-access.

Cap position: `dwds.de`, `treccani.it`, `kaskade.dwds.de` and `europepmc.org` are all
cap-exempt instrument/repository hosts. PMC13518077 is used by no other post in either batch.

### Discarded after being read in full

- **Stortini, *Languages*, `mdpi.com/2226-471X/11/3/36`** — read via `pdftotext`, drafted
  into the body, then **removed**: capcheck lists the URL as spent in an earlier wave by
  `2026-09-25-miss-you-30/blogs/i-miss-you-in-italian.json`. Not re-routed through DOAJ or
  the institutional handle, because the cap counts the work, not the hostname.
- **Agustín Llach, *Journal of Intelligence*, PMC12842814** — read in full, dropped: the
  sibling `saudade-em-ingles-como-se-diz` holds one of its two slots, and the body never
  used it.
- **Engelberg 2018, "The argument structure of psych-verbs"** — the best German-side match,
  genuinely CC BY-NC-ND at `ids-pub.bsz-bw.de`, **unreadable**: Anubis proof-of-work bot
  wall returns a 7.5 KB challenge to every scripted fetch. Same wall on
  `publikationen.ub.uni-frankfurt.de`.

### Lines and numbers cut

- *mi manchi da morire* — widely quoted online, in **neither** Treccani entry. Cut.
- Bare-form counts `count("vermisse dich")` / `count("fehlst mir")` — returned 66 vs 1,254
  in `blogs` where the full clauses stand at 25 vs 12. Unexplained, so **all** bare-form
  counts were discarded and only cross-checked full-clause counts reported.
- No Italian frequency counterpart: D*'s `it_blogs` returns **HTTP 401** from this IP, as do
  `reddit`, `zeitungenxl` and `web_ext`. The Italian side is lexicographic only.

---

## Overturned framing claims

1. **"The literal-feeling German translation is the one German speakers reach for LAST."**
   **False.** *Ich vermisse dich* outnumbers *du fehlst mir* ~2:1 in every corpus large
   enough to count, in translated *and* natively written German, in present and perfect,
   and across person and number. The structural asymmetry is real; the frequency claim
   attached to it is backwards. The post says so and explains it.
2. **"Italian has essentially only the second shape."** True of the verb, too strong as
   stated. Italian expresses the misser-subject perspective with *sentire la mancanza di*,
   a noun periphrasis. The precise claim is that Italian lacks a misser-subject **verb**.
3. **`de-de` query-shape warning** — does not bite on this shape: no German magazine
   publisher, no song, no Netflix series on either route. The bare head was not measurable.
4. **Schema path** — `references/article-json-schema.md` does **not** exist at the repo
   root; the file is at `.claude/skills/blog-optimisation/references/article-json-schema.md`
   and was read there.

## Tooling defects

- `timeout` is not on PATH on this macOS host — `timeout 90 node …` dies with
  `command not found`, which reads exactly like the wrapped script failing.
- `journalcheck.mjs` resolves PMCIDs only, so a publisher-URL citation (MDPI, Springer) is
  invisible to it; `capcheck.mjs` counts hostnames only. The banned-URL list caught the
  MDPI reuse, but only after it had already been drafted into the body.
- MDPI's `/pdf` endpoint is **intermittent**: one paper downloaded cleanly as 1.07 MB of
  PDF, a second returned a 2.2 KB bot-challenge minutes later.

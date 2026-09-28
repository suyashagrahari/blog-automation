# Research brief — `frases-de-te-extrano-para-mi-novia`

Keyword: **frases de te extraño para mi novia** · body language **Spanish** · market **mx-es** · band 1–3k/mo
Axis: **SUBJECT — the girlfriend (female ROMANTIC partner)**. Written 2026-09-28.

## Phase 0 — data gate

Used the pinned `2026-09-26-miss-you-global-30/facts-snapshot.md` (per BRIEF §6), not `content/facts.md`
— `npm run facts` rewrites the live file in place and has orphaned references before.
The `/missyou-gf` segment carries 12 relevant lines; 8 are used, 3 land in the first 150 words
(214 pages since 2026-07-28, 88-word median letter, 43.5 % password-protected). Gate passed.

**Caveat carried forward (WAVE4 laneWideFindings #17):** all 12 first-party lines are collided
14–25 times across the siblings. There is no least-collided pair left. This post differentiates on
the *reading* of them — the table pairs each feature rate with a relationship moment — not on novelty.

## Phase 1 — SERP, measured

**Route:** `node scripts/serp-ddg.mjs "frases de te extraño para mi novia" --region mx-es`
(query first; the `query:` echo was read and was correct). DuckDuckGo, market-served, **not Google**.
**No browser was used at any point**, so this row has zero contention exposure.

**Control first:** `"frases de amor" --region mx-es` returned 10 parsed results, so an empty block
would have been distinguishable from an empty SERP (laneWideFindings #20).

**Target run twice**, identical host set both times; only ranks 8/9 swapped. A third query
(`"frases de te extraño para ella"`) returned `(no results parsed)` — the known bot-challenge
failure mode, not a finding, and not retried.

| # | Host | Type | Weak? |
|---|---|---|---|
| 1 | es.wikihow.com | how-to wiki, quote list | weak |
| 2 | frasesmuybonitas.net | quote farm, on-axis (novia) | weak |
| 3 | bonobology.com/es/ | machine translation of an English site, «para él» | weak |
| 4 | frasesmuybonitas.net | same domain, second page | weak |
| 5 | pensador.com | quote aggregator | weak |
| 6 | psicoblog.org | quote farm | weak |
| 7 | blogfrases.com | quote farm | weak |
| 8 | elcomercio.pe | national newspaper (Peru) | **strong** |
| 9 | enpareja.com | couples magazine | mid |
| 10 | consejosgratis.es | quote farm, «para mi pareja» | weak |

**8 weak of 10.** WAVE5-PLAN.json predicted `weak: 4`. **The plan understates this SERP** — the
D-listicle tier is not dead here, and this row is materially easier than the lane warning implies.

### Two checkable errors on page one

1. **Rank 1** — `<title>` is "140 de las mejores citas de «Te extraño» **para él**", its `<h1>` is
   "140 mensajes de «Te extraño» para esa persona especial", and it contains an H3
   "**Frases sinceras para amigos y familiares**". One list serving a boyfriend, a girlfriend and a
   friend, ranking #1 for a query that says *para mi novia*.
2. **Rank 3** — a Spanish machine translation of an English-language site, also titled «para él»,
   with untranslated English strings left in its own navigation ("Married Life", "Guía de citas en
   Nueva York").

### Two censuses of rank 1 (programmatic, reproducible)

- **152 quoted lines. 0 carry any addressee-gender or vocative mark.** (Two regex hits were
  inspected by hand and both are `mi corazón` / `mi amor` as the SPEAKER's subject, not vocatives.)
- **107 attributions across 93 distinct names, and not one wrote in Spanish** — Shakespeare,
  Dickens, Virginia Woolf, Bukowski, Kafka, Lamartine, Khalil Gibran, plus 25 English song lyrics.
  Two names are of Hispanic heritage (Plascencia, Acevedo) and both write in English.

## Phase 2 — gap and angle

**Table stakes:** lines grouped by length/tone; a long-distance group; a "how to say it" note.

**The gap:** every incumbent answers *which lines*, none answers **what makes a line hers**.
`te` is invariable and `extraño` is 1sg, so the keyword phrase marks nothing — which is the
mechanical reason the same list is recyclable across él / ella / amigos, and why a translated
English line fits everywhere equally badly.

**Angle:** wins by being the only page on this SERP that gives the inventory of slots where Spanish
actually marks the addressee, plus the DLE evidence that the endearment nouns cannot be the
romantic/platonic boundary.

**Fan-out sub-queries → H2s:** does *te extraño* change for a woman · which words mark the feminine ·
what if the sender is a woman · does *mi amor* mean it's romantic · what separates a girlfriend line
from a friend line · is it too soon to say it · what to send at which stage · what ranks today ·
what to send · what the data cannot say.

## Phase 3 — sources

| Source | Role | Test |
|---|---|---|
| DLE «amigo, ga» (acep. 8 = *amante*; 7 = affectionate address) | the boundary | subject ✓ swap ✓ |
| DLE «novio, via» (acep. 3 lists *amigo* as a synonym; acep. 1 adds "con fines matrimoniales") | the boundary | subject ✓ swap ✓ |
| DLE «amor» (acep. 2 romantic vs acep. 3 non-romantic vs acep. 6 "persona amada") | why *mi amor* fails | subject ✓ swap ✓ |
| Tatoeba census (40 sentences, 10 addressed, 2 identify by vocative, 0 by agreement, 0 with *un poco*) | attested Spanish | subject ✓ swap ✓ |
| Europe PMC **PMC11304351** — *Frontiers in Psychology* 2024, n=51, visual-world paradigm | agreement does real work | subject ✓ swap ✓ |
| Europe PMC **PMC12798524** — *PLOS Mental Health* 2025, n=442 LDR/GCR | the inconvenient number | subject ✓ **swap ✗** |

Both papers read in **full text** via `europepmc.org/…/fullTextXML`. Journals named for hand-counting:
*Frontiers in Psychology*, *PLOS Mental Health*.

**Dropped after reading:** PMC11335949 (*Archives of Sexual Behavior* 2024) — a German vignette study
of reactions to same-gender flirtation; it is about sexual orientation and homonegativity, fails the
subject test here, and was not padded in.

**Swapped mid-run:** PMC12842814 (*Journal of Intelligence*, L1/L2 love lexicon) was in the first draft
and the sibling `te-extrano-mucho-frases-para-el` had taken the same PMCID, putting it at the URL cap
of 2. Replaced with PMC11304351, which is unique to this row and evidences the agreement thesis directly.

**No open-access research exists** on the post's actual question — how a Spanish affectionate message
is read as romantic rather than platonic. Search terms tried are listed in
`batchMeta.structuralLimitations`.

## Instruments — what worked and what did not

- `dle.rae.es` / `rae.es`: **HTTP 403 on 6 of 6 URL shapes**, including the site's own
  `/data/search` JSON endpoint. Consistent, not intermittent.
- **Wayback Machine, direct `web/<year>/<url>` form, worked.** The availability API
  (`archive.org/wayback/available`) 429'd on every call; some snapshots return HTTP 402
  ("Please contact the site owner for access"), which is a per-snapshot block, not an absence —
  retry a different year. Headword confirmed on each page before citing: «novio, via», «amigo, ga», «amor».
- **Tatoeba `api_v0` quoted search is NOT exact-phrase.** `"te extraño"`, `"te extrañé"` and
  `"te extrañaba"` all return the identical count 62 — it lemmatises. The census here was computed
  by downloading the result sentences and matching client-side; no paging count is cited.
- **Leipzig Wortschatz control reproduced:** `de` in `spa_news_2011_3M` = freq 4,228,124, rank 1.
  Leipzig was then **not used as evidence**: a 3M-sentence news corpus cannot separate the adjective
  *extraño* ('strange') from the verb form, so no frequency claim would have been sound.
- `/missyou-gf` re-verified independently: `html lang="en"`, `og:locale="en_US"`, English
  `og:title`/`og:description` — the Spanish card arrives behind an English WhatsApp preview.

## Boundary contract with the siblings

- `frases-de-te-extrano-para-una-amiga` (platonic female friend) — **the hardest boundary.** Held by
  mechanism: this post *argues* that the endearment nouns do not mark it (DLE), then gives four
  content markers that do — shared body, plural possessive, cohabited future, naming the relationship
  — plus an explicit inverse test ("if you could send it to a friend, it isn't doing this page's work").
  The one friend-safe line quoted is labelled as such.
- `te-extrano-mucho-frases-para-el` (male partner) — cross-linked; this row does not touch intensifiers.
- `frases-de-te-extrano` (hub) — cross-linked; the regional verb split is **not** restated.
- `diferencia-entre-te-extrano-y-te-echo-de-menos` (LIVE, `total=1`) — cited, not restated.
- `mensajes-de-te-extrano-para-whatsapp` / `imagenes-de-te-extrano-para-enviar` — **not linked.**
  This body has no channel-mechanics or image section; inserting a link with nothing to earn it would
  have pulled this row onto their axes. Flagged rather than forced.

## Claims of the orchestrator overturned

1. `weak: 4` → **measured 8 of 10 weak.**
2. The proposed hedging section (diminutives / conditional / *un poco*) — the **diminutive** half is
   already the shipped thesis of the live `como-decir-te-extrano-sin-decirlo` («El diminutivo no
   siempre suaviza: el DLE le da tres valores»). Writing it would have produced a twin. Rebuilt on
   **tense** (pretérito perfecto simple as a bounding device), which no sibling uses.
3. A planned `tú` / `vos` register paragraph was cut: `pagina-web-para-decir-te-extrano` owns that
   axis and "casi todo México" is tuteo-exclusive anyway, so it would have been both a twin and
   irrelevant to an mx-es row.

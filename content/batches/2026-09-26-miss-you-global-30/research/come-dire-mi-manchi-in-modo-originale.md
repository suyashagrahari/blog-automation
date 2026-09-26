# Research brief — come dire mi manchi in modo originale

- **Slug:** `come-dire-mi-manchi-in-modo-originale`
- **Region / body language:** `it-it` / Italian
- **Tier:** `B-howto` (per WAVE1-PLAN.json — not an ABORT-LIKELY `D-listicle` row)
- **Verdict: PROCEED**
- **Written:** 2026-09-26

---

## Phase 1 — SERP

### Route and self-authentication

`scripts/serp-ddg.mjs` was tried **once**, per BRIEF §3, and failed exactly as the brief
predicted: `UND_ERR_CONNECT_TIMEOUT` on `html.duckduckgo.com:443`. No further attempts.

Measured instead on **Google served to Italy**, in the operator's real browser, read-only:

```
https://www.google.com/search?q=come+dire+mi+manchi+in+modo+originale&gl=it&hl=it&pws=0&num=10
```

**Self-authentication, both runs:** page title was `come dire mi manchi in modo originale
- Cerca con Google` (my exact query); interface Italian; footer read `I risultati non sono
personalizzati` and `Italia`; every organic result was an Italian-language page about
*mi manchi*. Nothing belonging to another agent appeared. **Run 2 returned the organic
results in identical order** — only the AI Overview regenerated, which is expected.

### Results actually seen: 8 (ranks 9–10 not observed, so not recorded)

| # | Host | Page type | Strong / weak | Note |
|---|---|---|---|---|
| 1 | cosmopolitan.com/it | National magazine listicle, "30 frasi dolcissime", 4 Aug 2021 | **STRONG** | The only strong result |
| 2 | ilcentro.net | Milan Italian-language school blog, "10 modi diversi per dire Mi manchi" | weak (low authority) | Only result framed as language teaching |
| 3 | facebook.com (*Impariamo l'italiano*) | Social post, 6 years old | weak | Google flags **"Mancanti: originale"** |
| 4 | aforisticamente.com | Aphorism aggregator, "150 frasi" | weak | |
| 5 | wineflowers.com | Florist e-commerce blog | weak | Off-intent; Google flags **"Mancanti: originale"** |
| 6 | iloveyou.gift | Gift-site blog, English page auto-translated on the SERP | weak | URL slug is English: `/blog/cute-ways-to-say-i-miss-you` |
| 7 | bonobology.com | Relationship site, English page auto-translated | weak | URL slug is English: `/how-to-say-i-miss-you-…` |
| 8 | dediche.it | Old quote-dump site | weak | Google flags **"Mancanti: originale"** |

Also present: an AI Overview, a "Le persone hanno chiesto anche" (PAA) block, an Images block.

**Weak count: 7 of the 8 I actually saw.**

**Zero of the eight cites Treccani, Crusca, Zingarelli, De Mauro or Devoto-Oli.** This matches
what the `mi-manchi-in-inglese` sibling found (9/10 weak, zero Italian editorial citing a
dictionary) and what `mi-manchi-in-spagnolo` found (7/8 weak).

### Gate 4 verdict — PROCEED

The gate aborts when the top 10 is **strong editorial in that language with no weak result**.
Here the top 10 is 1 strong national magazine and 7 weak results, two of which are English
pages machine-translated by Google and three of which Google itself says do not contain the
query's distinguishing word. This is not the Brazilian `D-listicle` pattern (eight strong
Portuguese publishers, zero weak). The row is `B-howto`, and the SERP measures like a `B` row.

### Checkable error in a ranking result

**Google itself prints `Mancanti: originale — Deve includere: originale` beneath three of the
eight results.** Three pages ranking for a query whose whole point is the word *originale* do
not contain that word. Reproducible by anyone in thirty seconds.

Secondary, verified by fetch: **rank 6 (`iloveyou.gift`) is an entirely English page.** I
fetched it; its body is English end to end, its URL slug is English, and the Italian title and
headings a reader sees on the Italian SERP are produced by Google's translation layer, not by
the publisher. The same is true of rank 7. Two of the eight results are therefore not Italian
pages at all.

**Could not fetch:** `ilcentro.net` (rank 2) returns a Cloudflare interstitial
("Please wait while your request is being verified") to a scripted fetch. I make **no claim**
about its contents beyond the snippet Google displayed, and did not hunt for an error in it.

---

## Phase 2 — Gap

**Table stakes** (all eight do this): supply a list of ready-made Italian phrases; group them
by tone (romantic / poetic / ironic); aim at a partner.

**The gap:** not one of the eight attaches a **register label from a named dictionary** to any
phrase, and not one asks whether "originale" is a coherent thing to ask for. They answer a
request for originality by handing over pre-written lines, which is self-defeating.

**Fan-out sub-queries → H2s:** what "originale" actually means · which alternatives are attested
and at what register · is "sento la tua mancanza" really corpus-absent · which poetic-sounding
words mean something else · what an unusual phrase costs the reader · what the Italian SERP
actually looks like · what our own data does and does not show · when our product is wrong.

**Angle:** wins by being the only post that gives each Italian alternative the register label a
named dictionary assigns it, and that argues against its own premise from Treccani's own
definition of *originale*.

---

## Phase 3 — Instruments and sources

Every Treccani entry was fetched on 2026-09-26 and **its H1 headword confirmed** before anything
was quoted — the `Larousse /manquer/49348 → MARAUD` failure mode. All eleven fetched returned
200 with the right headword: *mancanza, morire, originale, struggere, struggimento, bramare,
anelare, sospirare, nostalgia, desiderare, rimpiangere*.

### The finding the page is built on

**Treccani, `originale`, sense 3.a:** «Che non dipende o non è ispirato, suggerito da altri
esempî o modelli, che non ha somiglianza con altre opere analoghe e ha quindi una sua novità».
**Sense 3.b, of a person:** «Singolare, strano, bizzarro e sim.». A phrase taken from a list of
150 cannot satisfy 3.a. So the honest answer to the keyword is that **"originale" is the wrong
target** — the achievable target is attested register plus the writer's own specific detail.

### Register labels, read at source (the citable asset)

| Form | Treccani label | Verdict |
|---|---|---|
| *sospirare* per / il ritorno di | senses 1.a, 2.a — **no register label**; «s. per la lontananza dell'innamorata». Poetic label falls only on the *di* variant («raro e poet.») | **The one real alternative.** High but not archaic |
| *sentire la mancanza* | voce *mancanza* 1.b, no label; «abbiamo sentito **molto** la tua m.» | Usable, tilts formal / non-partner |
| *anelare* | **`letter.` in the headword line itself**, before any sense | Literary by declaration |
| *struggersi* | sense 3.a «in similitudini, in usi **letter. o elevati**» | Literary/elevated |
| *struggimento* | sense 2: «ansia, pena e sofferenza, che consuma e non dà tregua» | Not tenderness |
| *rimpiangere* | sense 1 requires «la consapevolezza di **non poterla avere più** perché perduta o scomparsa» | **Trap.** Says the person is gone for good |
| *nostalgia* | primary sense is a **place**; the person is «per estens.», parenthesising «(o non più in vita)» | Extension, not core sense |
| *bramare* | **no label** — but only literary citations (Dante, Foscolo, Manzoni) | Presented as unlabelled; not called literary |

*bramare* is the discipline case: I expected a literary marker and Treccani gives none, so the
post does not claim one.

### Tatoeba — the corpus re-check, and a correction to a sibling

The `mi-manchi-in-inglese` sibling measured `sento la tua mancanza` at **0** Tatoeba sentences
and read that as corpus absence against Treccani's attestation at *mancanza* 1.b.

**Re-measured 2026-09-26 (`api_v0/search`, from=ita to=eng, every loose page paginated then
filtered on the literal string). It falls the other way.**

The exact string `sento la tua mancanza` is indeed **0**. But `la tua mancanza` returns **6
strict**, and **two are the affective construction**:

- **5507203** — «Sento **tanto** la tua mancanza.» → *I miss you badly.*
- **6893516** — «Tom sentirà **molto** la tua mancanza.» → *Tom is going to miss you a lot.*

(The other four are *mancanza di* = lack: timidezza, sostegno, lealtà.)

The cause is word order: **Italian puts the intensifier between verb and object**, so the
unbroken string almost never occurs — and Treccani's own example is written that way
(«abbiamo sentito **molto** la tua m.»). **The zero belonged to the query, not to the corpus
and not to the language.** A sibling's conclusion is corrected here, with the sentence ids.

Other strict counts: `quanto mi manchi` 2 · `mi manchi tanto` 2 · `ti penso` 3 ·
`mi manchi da morire` **0** · `non vedo l'ora di rivederti` **0 strict** (1 loose) ·
`mi manchi un sacco` 0 · `mi manchi moltissimo` 0 · `vorrei che fossi qui` 0 ·
`sentire la mancanza` 0 strict of 13 loose.

### Peer-reviewed source

**Socolof M, O'Donnell TJ, Wagner M, "The Idiom Processing Advantage is Explained By
Surprisal", *Cognitive Science* vol. 49 (2025), doi 10.1111/cogs.70085, PMC12276763.**
Unpaywall checked **before** citing: `is_oa: true`, `oa_status: hybrid`, licence **CC BY**,
publisher Wiley. **Abstract only — the PDF does not parse here.** Idioms are processed faster
than matched literal phrases because they carry **lower surprisal**. Mechanism for why an
"original" line costs the reader. Stimuli are English verb-object idioms, not Italian affective
phrases — disclosed in the body.

**Journal cap, checked by hand:** *Cognitive Science* appears in **zero** other posts in this
batch. Avoided: ***Frontiers in Psychology*, which measures at 8 posts here** (worse than the 5
in BRIEF §7 and the 6 in my prompt), **every PNAS paper** (at 3), PMC11337870 and MDPI
*Languages* 11(3):36 (spent by the Italian siblings). *Memory & Cognition* (PMC13407966,
Milburn et al. 2026) was read and **dropped** to stay at six sources.

### Wikidata QIDs — two rejected

- `Q3567479`, provisionally taken for "Vocabolario Treccani" → resolves to **Koufalia, a former
  Greek municipality.** Rejected.
- `Q1128537` → resolves to the **Dizionario Biografico degli Italiani**, not the Istituto. Rejected.
- Used instead, each confirmed via `wbgetentities` with a paired Wikipedia sitelink:
  **Q731361** (Enciclopedia Treccani), **Q495456** (Tatoeba), **Q652** (Italian language),
  **Q184511** (idiom).

---

## Lane split from the two Italian siblings

One sentence, as required, and it is in the body:

> `mi-manchi-in-inglese` establishes the grammar (Treccani's **complemento di termine** at sense
> 1.c) and `mi-manchi-in-spagnolo` establishes that Spanish `me faltas` does not work; **this
> post does not redo either, and asks instead which Italian alternatives are attested, at what
> register, and whether "originale" is a coherent request at all.**

The grammar is pointed at, not repeated. Both siblings are cross-linked from the body.

---

## Lines cut, and why

1. **Dialect and regional forms.** No dialect dictionary I could name and verify. Answered in an
   FAQ as "yes they exist, I did not verify them" rather than listed.
2. **Any taxonomy of what each phrase "conveys"** beyond what a Treccani sense line states.
3. **`mi manchi da morire` as an attested locution.** In no entry I read, 0 on Tatoeba. Kept in
   the table marked unattested; not recommended as a written line.
4. **The *Memory & Cognition* paper** — read, then dropped (six-source cap; its L1/L2 framing
   does not fit a post for native Italian speakers).
5. **Any claim about `ilcentro.net`'s contents** — Cloudflare-blocked, so nothing asserted.

---

## Product disclosure

- `/missyou-gf` is defined at **`app/lib/prompt.ts:44`** as *"I miss you page for a
  girlfriend/partner"*. **Both** problems disclosed in Italian body prose: the page is entirely
  **English** (labels, fields, interface copy) and it is **recipient-specific**, so for a
  brother, friend or parent the frame is wrong twice over.
- **`/catch` chosen over the other `oneOfLinks`** on a concrete reading of
  **`app/lib/prompt.ts:86`**: *"a letter that falls from the sky one line at a time… nothing is
  ever locked, each catch just adds a line."* It ships **no pre-written romantic copy at all**,
  so it is the one template that **cannot mistranslate the reader** — which is exactly this
  post's thesis. Only the button is English.
- **Commercial terms:** `content/facts.md`'s pricing block is empty, so the post says the terms
  cannot be confirmed and points at `/templates`. `pricecheck-intl.mjs` passes clean; the words
  *prezzo*, *gratis*, *gratuito*, *gratuitamente*, *senza costi* appear nowhere. One violation
  was caught and removed during drafting ("gratuitamente consultabile" in an FAQ).

## First-party facts

All four are **unused by both Italian siblings** — the exact complement of what they took:
88-word median letter · 92.1% "open when" · 13.6% voice note · 28.0% reunion date. Two sit
inside the first 150 words. Mandatory caveats carried **in Italian body prose**: nothing is
segmented by language or country so **no figure is Italian**; the database records **which
template was opened, never who received it**; views are page views not unique visitors; the
city / music / "together since" fields are **pickers with defaults**; n = 214 over two months.

## Audit

**45 passed / 5 failed**, `passed ∩ failed = ∅`, strings pulled **by index from
`references/publish-checklist.md`** so they are byte-verbatim. Extras in `additionalChecks`.

Failed, all with an honest `why`: **#10** (no table column can carry first-party data — the DB
stores no sender text), **#24** (slug fixed by the plan, contains "in"), **#34** (the
*Cognitive Science* paper would survive a swap into another language's post), **#36** (source
cap unverifiable mid-write with six concurrent agents), **#45** (body ranks nothing, has no H3s).

**#50 is satisfied and passed.** `references/article-json-schema.md` exists (196 lines); reading
it confirmed `kind` is exactly `"blog-automation/batch-blog"`. **#25 also passed** — the Strapi
slug query returned `[]`, so the slug is free; my prompt listed it as likely unsatisfiable and
it was not.

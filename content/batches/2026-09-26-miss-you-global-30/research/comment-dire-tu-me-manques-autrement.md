# Research brief — `comment dire tu me manques autrement`

- **Slug**: `comment-dire-tu-me-manques-autrement`
- **Body language**: French · **Region**: `fr-fr` · **Tier**: `B-howto`
- **Category**: `miss-you-across-miles` · **Templates**: `/missyou-gf` (mandatory), `/catch`, `/templates`
- **Written**: 2026-09-26

---

## Phase 1 — SERP, measured not assumed

**Route used**: Google served to the French market in the operator's real Chrome
(PolterTab), `https://www.google.com/search?q=comment+dire+tu+me+manques+autrement&gl=fr&hl=fr&pws=0&num=20`.
`scripts/serp-ddg.mjs` was tried **once** and failed exactly as BRIEF §3 predicts
(`UND_ERR_CONNECT_TIMEOUT` on `html.duckduckgo.com:443`); no further scripted retries.

**Self-authentication**: the returned page carried my own query string and French
result text on both loads. **Run twice**; the eight organic hosts and their order
were byte-identical across the two loads.

| # | Host | Page type | Strong / weak |
|---|---|---|---|
| 1 | francaisavecpierre.com | FLE teaching blog, exact-match title, 12 numbered phrases, dated 10/05/2024 | medium-strong (topical authority) |
| 2 | lovenspa.fr | e-commerce (spa/wellness) blog listicle, "100 SMS chauds" | weak |
| 3 | flexilivre.com | photo-book product blog, "50 idées de messages" — Google flags *Termes manquants : autrement* | weak |
| 4 | the-love-room.com | sex-shop product blog, "7 façons de dire tu me manques à un homme" | weak |
| 5 | fr.lovebox.love | connected-object product blog, "10 messages pour dire tu me manques" | weak |
| 6 | citations.ouest-france.fr | quotations sub-site of a national newspaper; strong domain, aggregated-quote page | mixed |
| 7 | alexandrecormont.com | relationship-coach site, under `/recuperer-un-ex/` — off-intent | weak |
| 8 | lebeauthe.com | tea e-commerce blog, "TOP 100" | weak |

Plus: a **YouTube video block** (`8NXh1lcwXYo`, four timestamp deep-links) and an
**AI Overview / "Aperçu IA"** citing Français avec Pierre, Le Beau Thé and
the-love-room.com. The AI Overview itself lists *« Je pense à toi tout le temps »*
as an "expression proche" of *tu me manques* — the exact conflation this post refutes.

- **Weak count: 6 of the 8 organic results I actually saw.** I did not see ranks
  9–10 and do not report them.
- **No Google Translate widget.** The French sibling (`tu-me-manques-en-anglais`)
  measured a Translate box above every organic result; this query is advice-shaped,
  not translation-shaped, and the field is entirely different. The orchestrator's
  prediction that it would differ **held**.
- The row note predicted Lovebox and Flexilivre. **Both confirmed present** (ranks 5
  and 3). What they do not do: not one of the eight cites a dictionary entry, a
  corpus count, or any source at all.

**Gate 4 verdict: PROCEED.** This is not the Brazilian `D-listicle` situation. Six
of eight are product blogs running unsourced phrase lists — the same play as ours,
executed without evidence. The one genuinely authoritative page (Français avec
Pierre) contains a checkable register error (below).

## Phase 2 — Gap

- **Table stakes**: a list of alternative phrases; a romantic register; long-distance framing.
- **The gap**: nobody on this SERP asks *what the alternatives actually mean*.
  Every page treats "je pense à toi", "j'ai hâte de te revoir" and "tu me manques"
  as interchangeable. They are not, and two Larousse entries prove it.
- **Fan-out sub-queries** → H2s: which alternatives are attested? what does each
  convey? does "je pense à toi" mean the same thing? is "vivement que" correct?
  should I even say it differently?

**Angle**: the only post on this SERP that reads the actual dictionary entries for
*manquer*, *penser*, *tarder* and *hâte*, shows that every alternative switching to
"je" changes who the sentence is about, counts the attestations on Tatoeba with the
survivor rate stated, and then argues against its own keyword.

## Phase 3 — Verification log

### Instruments that worked
- **Larousse** — resolves by headword and redirects to a canonical id.
  `manquer/49234` **confirmed** (the brief's warning about `/49348` → MARAUD is real;
  I never used that id). Also `penser/59268`, `tarder/76714`, `hâte/39181`,
  `vivement/82310`, `vachement/80872` — headword checked on every page before citing.
- **Tatoeba** `api_v0/search` with `from=fra`, paginated with `&page=N`.
- **fr.wiktionary.org** REST HTML endpoint (used as a cross-check on *vivement*, not cited).
- **Europe PMC REST** for abstracts.

### Instruments that FAILED — recorded, not worked around
- **`cnrtl.fr` is now a JavaScript single-page application.** `GET /definition/tarder`
  and `/definition/vivement` both return **HTTP 200 with a 914-byte empty shell**
  (`<body id="app"></body>`, title "Portail lexical"). `/api/definition/<word>`
  returns 400. This is the same failure class the BRIEF warns about — 200 is not
  confirmation. The French sibling cited CNRTL successfully earlier the same day, so
  this may be a recent change or an intermittent build.
- **`dictionnaire-academie.fr/search?term=…`** returns 196 KB of SPA shell with zero
  `/article/` links; `api.dictionnaire-academie.fr` does not resolve (DNS).
- **Browser route for CNRTL: CONTAMINATED.** `browser_navigate` to
  `https://www.cnrtl.fr/definition/vivement` reported `status: ok` **and the correct
  page title**, and the very next `browser_get_text` returned a **Turkish** Onedio
  article, *"Sevgilinize 'Seni Özledim' Demenin 11 Farklı Yolu"* — another agent's
  page. **Discarded, not recorded.** Note the navigate call's own title field was
  correct while the body was not: the title is not sufficient self-authentication.
- Consequence: **"vivement que + subjonctif" is not dictionary-sourced in this post.**
  It is presented as an example with its Tatoeba count, and explicitly not recommended.

### What the entries actually say

| Entry | Verbatim | What it licenses |
|---|---|---|
| Larousse *manquer* 49234, v.t. ind. sens 3 | « Créer un vide, un manque par son absence : *Ses enfants lui manquent.* » | the absent person is the subject; experiencer is **lui** (COI) |
| Larousse *penser* 59268, v.t. ind. sens 1 | « Songer à quelqu'un, quelque chose, l'évoquer par la pensée, l'avoir présent à l'esprit : *Je pense souvent à lui.* » | **no mention of absence, vide or manque** |
| Larousse *tarder* 76714, Expressions | « Il me tarde ou, dans la langue littéraire, le temps me tarde, **je suis impatient** : *Il lui tarde que ce procès se termine.* » + Difficultés/CONSTRUCTION: « Il me (te, lui, etc.) tarde de (+ infinitif), que (+ subjonctif) » | impatience, not lack; experiencer still **lui** |
| Larousse *hâte* 39181, Expressions | « Avoir hâte de, que, être très pressé de faire quelque chose. » + CONSTRUCTION « Avoir hâte de (+ infinitif) : *j'ai hâte de la voir.* » | pressé — about elapsed time |
| Larousse *vivement* 82310, sens 5 | « Exprime le vif souhait de voir un événement arriver, se produire au plus tôt : *Vivement dimanche !* » | only exemplified as **vivement + nom** |
| Larousse *vachement* 80872 | « **Populaire.** Indique un très haut degré : *Un film vachement drôle.* » synonyms bigrement, bougrement, drôlement (all *familier*) | marked register |

### Tatoeba counts — raw vs survived (tokenised search, every hit inspected)

| Query (quoted) | Raw hits | Retrieved | Contain the literal string | Survivor rate |
|---|---|---|---|---|
| "tu me manques" | 57 | 57 | **48** | 84.2% |
| "vous me manquez" | 33 | 33 | **22** | 66.7% |
| "il me tarde" | 10 | 10 | **10** | 100% |
| "hâte de te" | 22 | 22 | **22** | 100% |
| "je pense à toi" | 22 | 22 | **19** | 86.4% |
| "vivement que" | 18 | 18 | 8 → **6 genuine** | 33.3% |

Non-survivors are exactly the tokenisation artefact BRIEF §3 warns about: *tu me
manquais / manqueras* for the first, and for "vivement que" — *« Il ne vivait que
pour elle »*, *« Je suis plus vive que vous »*, *« Le robot semblait tellement vivant
que… »*. Two further hits were *« J'espère **vivement que** … »* and *« sentait
vivement que … »*, where *vivement* is an intensity adverb, not the optative
locution; removing them leaves **6 real uses out of 18 raw hits**.

**Of those 6, not one expresses missing a person.** They are
*Vivement que ça s'arrête ! / ça se termine ! / commence la saison des pluies /
se termine la saison des pluies / Tom rentre à la maison / ****Vivement que Tom s'en
aille !**** — the last one wishes a person **away**. This is why the post does not
recommend it.

By contrast **3 of the 10 "il me tarde" sentences are person-directed**:
*Il me tarde de te voir. / Il me tarde de vous voir. / Il me tarde de la revoir.*

### Checkable error in a ranking result
**francaisavecpierre.com (rank 1)** lists, under its seventh phrase:
« Tu me manques **énormément / vachement / vraiment / intensément / infiniment**… »
with no register label on any of them. Larousse marks ***vachement*** **« Populaire »**
and glosses it with *un film vachement drôle*. It is not a grammatical fault — it is
a missing register label, checkable in one click, and it hands a learner
« Tu me manques vachement » as a love-letter line.

### Research sources
1. **PLoS ONE** (journal named for the cap), Piotrowski & al. style study —
   PMC12221085, doi 10.1371/journal.pone.0326189, 2025-07-02, CC BY, `is_oa = Y`,
   n = 260. Abstract read via Europe PMC REST; **full text not read** (PDFs do not
   parse here). Finding used: messages perceived as **more responsive** predicted
   higher closeness and relationship satisfaction.
   Checked against both batches' blogs: **PMC12221085 is unused**. Careful —
   `PMC12221082` IS spent by a sibling and differs by one digit.
   PLoS ONE is at **1** other post in this batch (`wo-xiang-ni-meaning-in-english`),
   so this is the 2nd of 3 allowed.
2. Larousse ×4 and Tatoeba — cap-exempt reference instruments.

### Banned / avoided
- **Journal *Frontiers in Psychology*: not cited.** A search for
  "affectionate communication" returned two Frontiers papers in the top eight
  (PMC12679299, PMC11882564); both refused under BRIEF §7. Took PLoS ONE instead.
- **No PNAS paper**, no PMC13552847.
- The French sibling's PMC8330882 (Guajardo 2021, *Frontiers in Psychology*) is spent
  and is in the banned journal anyway.
- Considered and dropped: *Scientific Reports* PMC10073073 (affectionate touch, 37
  countries) — a grep across both batches matched "Scientific Reports" in 6 files, so
  the journal is at or over cap; and *Health Psychology Open* PMC12678730 (gratitude
  in older couples) — genuinely relevant but cut to keep `sources` at 6.

### Wikidata
- French language → `Q150`, **verified** via the Wikipedia API (`wikibase_item = Q150`,
  Wikidata label "French", description "Romance language").
- Long-distance relationship → my first guess `Q1211037` was **wrong**; the API gives
  **`Q1406917`** ("long-distance relationship", "relations between persons on different
  geographical locations"). Used the verified one.

## Phase 4–5 — split from the siblings

- `tu-me-manques-en-anglais` owns the **grammar of *manquer*** and the
  French→English translation. This post **points at it and does not re-derive it**,
  using the *manquer* entry only as the baseline the alternatives are measured against.
- `tu-me-manques-en-arabe` did not exist when the body was drafted but appeared on
  disk before the final verifier run, so it IS cross-linked. The link was added by
  rewrapping existing prose (the « vous me manquez » register paragraph, which is the
  natural hook: French marks number and politeness, Arabic marks the addressee's
  gender), and eight words were trimmed elsewhere to stay clear of the 1,800 ceiling.
- One sentence of split, in the body: *cette page ne refait pas la grammaire de
  manquer ; elle demande ce que chaque formule de remplacement dit réellement.*

## Honest position taken

The post argues **against its own keyword**. The evidence is that every alternative
which switches the subject to "je" stops being about the other person, that the
dictionary glosses of *tarder* and *hâte* are both "impatient / pressé" rather than
"absence", and that the only measured predictor available (PLoS ONE 2025,
perceived responsiveness) is about being answered, not about being original. The
post recommends *il me tarde de te revoir* as the one honest addition, and otherwise
recommends keeping *tu me manques* and changing the detail around it.

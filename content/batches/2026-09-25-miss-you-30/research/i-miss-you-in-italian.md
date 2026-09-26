# Research brief — `i miss you in italian`

Batch `2026-09-25-miss-you-30` · slug `i-miss-you-in-italian` · written 2026-09-25

---

## Phase 0 — first-party gate

Source: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (pinned), **not**
`content/facts.md`. Gate passes on the miss-you segment: 214 pages on `/missyou-gf`,
probed read-only 2026-09-25. Eight lines used, two of them inside the first 150 words
(214 pages / 88-word median letter / 43.5% password rate).

The three snapshot caveats are carried in body prose, not only in the audit:
pickers-with-defaults (city, background music, "together since"), `viewCount` is page
views not unique visitors, and n = 214 over two months (template live 2026-07-28), so
no seasonal claim.

---

## Phase 1 — SERP

One `WebSearch` on the English keyword `i miss you in italian`, US-served, 2026-09-25.
Nine results. Two are off-intent Wikipedia entity pages (*I Miss You* (Sarah Engels
song); *I Love You in Every Language in the World*). One is a Facebook group post.
Six are content pages, and **all six are language-learning brands** — Rosetta Stone,
Clozemaster, Think in Italian, The Intrepid Guide, Yabla, Reverso Context.

Per `references/competitors.md` none of them is cited, linked or paraphrased anywhere
in the post. What follows is structural measurement only, taken 2026-09-25 by fetching
each page and counting markup.

| Page | Words | H2 / H3 | Tables | FAQPage schema | Names a dictionary | Prints `ti manco` | Prints `mi mancate` | Prints `mi mancano` | Prints `da morire` |
|---|---|---|---|---|---|---|---|---|---|
| A (blog.rosettastone.com) | ~2,665 | 4 / 20 | 0 | no | **no** | no | yes | no | yes |
| B (clozemaster.com) | ~470 | 3 / 1 | 0 | no | **no** | no | no | no | no |
| C (thinkinitalian.com) | ~2,249 | 20 / 22 | 0 | yes | **no** | yes | no | yes | no |
| D (theintrepidguide.com) | ~3,796 | 13 / 1 | 2 | no | **no** | yes | yes | yes | no |
| E (italian.yabla.com) | — | — | — | — | — | — | — | — | — |

E returned HTTP 403 to this fetch and was not measured; no claim is made about its
contents. "Names a dictionary" tested for Treccani, Accademia della Crusca, Zingarelli,
De Mauro and Devoto-Oli. **Zero of the four fetchable pages names any of them.** Only B
contains the string "Tatoeba", and Clozemaster is built on Tatoeba sentences, so that is
a platform artefact rather than a citation.

No AI Overview is observable through this search tool, so none is claimed either way.

### The orchestrator's SERP framing, corrected

The task prompt supplied a SERP for the **Italian-language** sibling query
`frasi mi manchi amore` (frasimania.it, aforisticamente.com, cartoline.it, dilei.it,
shakespeareinitaly.it, pensieriparole.it, frasiamorose.it, dediche.it) and noted "no
product site anywhere in the Italian top 10". That is true of that query and **does not
transfer to mine.** The English query I actually target is the opposite: six of nine
results are commercial language-learning products, several on domains far above this
one. There is no open ground here of the kind the Italian SERP shows.

---

## Phase 2 — gap

**Table stakes** (all measured pages carry these): `mi manchi` as the headline answer;
some statement that the grammar is inverted; intensifiers such as `tanto` / `così tanto`;
a handful of romantic lines.

**The gap, stated as what none of the four measured pages does:**

1. **Nobody quotes the authority.** Not one names Treccani, let alone the sense that
   licenses `mi manchi`. Every explanation on this SERP is asserted.
2. **Nobody reports which forms the corpus does not have.** `mi manchi da morire` is a
   high-intent search phrasing and it returns **zero** hits in Tatoeba's Italian corpus.
   `mi manchi amore` returns exactly one, and it has a comma in it.
3. **Nobody tests the Romance parallel.** The tidy claim that Italian and Spanish do this
   the same way is checkable, and it fails.
4. **Nobody warns that the same verb means "died".** Treccani files the euphemistic sense
   under the very same lemma. For a reader writing about someone who has died, that is
   the most consequential fact on the page.
5. No first-party behavioural data exists on any of them, because none of them runs a
   product that measures it.

**Fan-out sub-queries → H2s:** what does *mi manchi* literally mean · is *ti manco*
wrong · how do I say it to more than one person · *mi manchi tanto* / *quanto mi manchi*
/ *mi manchi da morire* · is it like Spanish *me haces falta* · where does *mancare*
come from · how long should the message be · when not to send it.

**Angle.** Wins by being the only post on this query that quotes the Treccani sense
which actually licenses `mi manchi`, proves from two attested corpus lines that `ti
manco` means "you miss me", reports that `mi manchi da morire` has zero corpus
attestation, and sets that against 214 measured miss-you pages whose median letter is
88 words.

---

## Phase 3 — sources (6)

### 1. Treccani, *Vocabolario on line*, **mancare** — the authority
`https://www.treccani.it/vocabolario/mancare/` · fetched 2026-09-25, HTTP 200.

Headword: `mancare v. intr. e tr. [der. di manco¹] (io manco, tu manchi, ecc.)`.
Sense 1 is intransitive, **auxiliary *essere***, and splits four ways:

- **1.a** quantity — "Essere in quantità o in numero insufficiente, essere meno di quanto
  sarebbe necessario o conveniente o desiderabile" (*mi manca il tempo*, *mi mancò il
  coraggio*).
- **1.b** sudden failing, *venir meno* — "indica il determinarsi improvviso di tale
  deficienza, col sign. di venir meno, diminuire, scemare o scomparire del tutto"
  (*a metà della salita gli mancò il fiato*).
- **1.c** — **the sense that licenses `mi manchi`.** Opens "Di persona, essere assente,
  essere lontano da un luogo in cui dovrebbe o potrebbe essere", then verbatim:
  > "Con il compl. di termine, in frasi quali *mi manchi*, *mi sei mancato*,
  > *ci mancherai*, *ci manca molto* e sim., riferite a persona di cui si sente, si è
  > sentita o si sentirà la lontananza, e quindi il desiderio e il rimpianto"

  The same 1.c continues into two further readings on the same lemma: failing someone
  ("venire meno alla fiducia o alle speranze di qualcuno", with Manzoni's «Lucia», disse
  Renzo, «volete voi mancarmi ora?»), and the euphemism for dying — "Quasi eufemistico
  … quindi morire: *m. ai vivi*; *è mancato all'affetto dei suoi cari*". The past
  participle entry confirms it: "**mancato**, anche come agg., morto, defunto".
- **1.d** countdown — "mancano pochi minuti per la cottura".

So Treccani's own label for the grammar is **complemento di termine**, not "dative
experiencer". Subject test: pass. Peer-reviewed: no (it is a dictionary of record).

### 2. Treccani, *Vocabolario on line*, **manco¹** — the etymology
`https://www.treccani.it/vocabolario/manco1/` · fetched 2026-09-25, HTTP 200.

`manco¹ agg. e avv. [lat. mancus «monco, storpio, debole»]` — maimed, crippled, weak.
Sense 1.b: "Sinistro, che si trova sul lato sinistro (in origine riferito alla mano, in
quanto la sinistra è «più debole» della destra)", surviving in *a mano manca*. This is
the `manco¹` that `mancare` is derived from, per source 1's own headword.

### 3. Vietri, *The Variety of Syntactic Patterns of Dative Experiencer Verbs in Italian*
`https://edizionicafoscari.it/it/edizioni/libri/978-88-6969-962-7/the-variety-of-syntactic-patterns-of-dative-experi/`
Simonetta Vietri (University of Salerno), in *Psych Predicates in Romance Languages*,
LiVVaL 8, Edizioni Ca' Foscari, pp. 259–280. Published **29 April 2026**, open access,
**CC BY, peer reviewed**. Full text fetched as PDF and read (6,129 words).

- "In Vietri's (2024) taxonomy, there are 224 Accusative Experiencer verbs and 87
  Subject Experiencer (transitive/non-transitive) verbs, while there are **only 10
  Dative Experiencer verbs**."
- "The DE class includes the verbs *piacere* 'appeal', ***mancare* 'miss'**, *garbare*
  'appeal', *dispiacere* 'regret', *spiacere* 'regret', *rincrescere* 'be sorry,
  regret', *interessare* 'interest', *compiacere* 'please', *ripugnare* 'disgust',
  *importare* 'matter'."
- §4.1: "The verbs *garbare* 'appeal' and *mancare* 'miss' … are both stative verbs
  where **the Subject plays the role of the Object of Emotion**", showing the inverted
  SVO/OVS structure; and they take no reflexive — `*Maria si mancava` is starred (39).
- Abstract: the class "in most cases share the inverted structure, i.e. the SVO and the
  OVS patterns"; conclusion calls it "a small, heterogeneous and unstable class".
- Method note worth recording: Vietri built examples "based on data drawn from Italian
  dictionaries (De Mauro; Devoto-Oli; **Treccani online**; Zingarelli)" and checked
  doubtful judgments against the Italian Web Corpus 2020 via Sketch Engine.

**Caution recorded, not printed as fact:** the paper's free English glosses of its
examples (37) `Gianni mancava a Maria` and (38) `A Maria mancava Gianni` are both given
as "Gianni missed Maria", which does not disambiguate the direction in English. The
direction claimed in my post comes from the *role* statement ("the Subject plays the
role of the Object of Emotion"), from Treccani 1.c, and from the corpus — never from
that gloss.

Subject test: pass. Peer-reviewed + open access: pass.

### 4. Stortini, *Dative Experiencer Psych-Verbs in Italian and Spanish*
`https://www.mdpi.com/2226-471X/11/3/36` · *Languages* 11(3):36, MDPI, published
**26 February 2026**, CC BY.

**Abstract only.** `www.mdpi.com` returned a 2,205-byte challenge page to this fetch, so
the full text was not read; the abstract was read from the publisher's own deposit via
the Crossref API (`api.crossref.org/works/10.3390/languages11030036`). Quoted claim:

> "These verbs display non-canonical mapping between thematic and grammatical roles, in
> which the Experiencer surfaces as a dative object and the Theme as the subject."

Note precisely what it compares: Italian *piacere* against Spanish ***gustar***. It does
not treat Spanish *hacer falta*, and I do not imply that it does. The `doi.org` resolver
is deliberately **not** used as the source URL — capcheck shows `doi.org` already at two
posts, and the BRIEF requires counting the publisher it resolves to.

### 5. Wiktionary, **mancare**
`https://en.wiktionary.org/wiki/mancare` · cap-exempt reference instrument.

- Etymology "From *manco* (adjective) + *-are*, or from a Vulgar Latin \*mancāre, from
  Latin *mancus*" — independently consistent with Treccani sources 1 and 2.
- Auxiliary: "(transitive and in some intransitive meanings) *avere* or (in other
  intransitive meanings) *èssere*"; the "to be missed (of a person)" sense is marked
  `[auxiliary essere]` and glossed literally: "*Ci manca molto.* We miss him very much.
  (literally, 'He is missed by us very much.')".
- Parallel literal gloss on the quantity sense: "*mi mancano cinque dollari* — I'm
  missing five dollars (literally, 'five dollars is missing to me')".

### 6. Tatoeba, Italian corpus — attestation
`https://tatoeba.org/en/sentences/show/4378` · cap-exempt reference instrument.

Queried through `tatoeba.org/en/api_v0/search` with `from=ita&to=eng`, using the `=`
exact-word-form operator (plain queries stem and return unrelated forms). Every Italian
line printed in the post carries its sentence id. Results below, 2026-09-25.

| Query | Result |
|---|---|
| `=manchi` wc≤2 | 5 total — **[4378] Mi manchi. = "I miss you."**, [3247477] Ci manchi. = "We miss you.", [3461815] Manchi tu! = "I miss you!", [4596670] Manchi., [4596671] Tu manchi. |
| `=manca` wc≤2 | 10 total — **[479785] Mi manca. = "I miss you." / "I miss him."**, [3782456] Ci manca., [10058892] Gli manca. = "He misses her." |
| `=mancate` wc≤2 | 4 total — **[1017022] Mi mancate. = "I miss you."**, [3782457] Ci mancate. |
| `=mancano` wc≤2 | 4 total — **[5438340] Mi mancano. = "I miss them."**, [5749226] Ti mancano? |
| `=manco` (any length) | **12 total.** Two are `ti manco`: **[3869907] Non ti manco per niente? = "Do you miss me at all?"** and **[4962399] Forse un giorno ti accorgerai che ti manco. = "Maybe one day you will realise that you miss me."** Two are the full-NP dative: [8831521] Manco a Tom? = "Does Tom miss me?", [2454983] Manco a qualcuno? = "Anybody miss me?" Four are the **homograph** colloquial *manco* "not even" ([3410438], [3398603], [3767179], [11026793] "non manco di nulla"). |
| `=manchi =tanto` | 6 — [3137826] Mi manchi tanto., [615305] Ci manchi tanto., [3637742] Mi manchi così tanto., [3637743] Tu mi manchi così tanto., [6163487] Mamma! Mi manchi così tanto., [3239425] Mi manchi tanto, amore! |
| `=manchi =quanto` | 3 — [1389532] Quanto mi manchi! = "How I miss you.", [13936246] Non potrai mai immaginare quanto mi manchi. |
| `=manchi =amore` | **1** — [3239425] *Mi manchi tanto, amore!*, with a comma. |
| `=manchi =morire` | **0.** The only `da morire` line with this verb is [4541855] *Mi sei mancato da morire.* = "My longing for you is killing me!" — compound past, not present. |
| past forms | [381446] Mi sei mancato., [2180667] Mi sei mancata., [1237920]/[1237921], [3007132] Quanto mi sei mancata! |

### Source hygiene

- Generic context statistics: **0**. Wikipedia in `sources`: **0** (used only for
  `sameAs`/QID pairing in `structuredData`).
- `capcheck.mjs` (the fixed version) run immediately before saving: no banned URLs, no
  domain at cap, no URL at cap. `treccani.it`, `edizionicafoscari.it` and `mdpi.com` were
  each at 0 posts in this batch; `doi.org` was at 2 and is avoided.
- `tatoeba.org` and `en.wiktionary.org` are in `verify.config.json → capExemptDomains`.
  Both were fetched and read; neither is taken on trust.
- Swap test: every source is about *mancare*, the Italian DE class, or a specific Italian
  sentence id. None could sit unchanged in another post in this batch.

### Searches that returned nothing citable

- **Accademia della Crusca.** The BRIEF and the task prompt both asked for it. Four
  entry points tried 2026-09-25: `accademiadellacrusca.it/it/search?q=mancare` (404 body,
  "Pagina non trovata"), `/it/consulenza/ricerca?query=mancare` (HTTP 500),
  `/it/ricerca?keys=mi+manchi` (HTTP 500), `/it/consulenza/lelenco-delle-risposte`
  (HTTP 500). The Crusca's historical *Lessicografia della Crusca in rete*
  (`lessicografia.it`) returned 404 on lemma lookup and an empty page frame on direct
  page access. **No Crusca ruling on this construction was obtained, so none is cited or
  implied.** Re-check when their search endpoint is serving.
- **A measured error rate for `ti manco` among English-speaking learners.**
  `findpapers.mjs` run on `Italian psych verbs unaccusative mancare`,
  `experiencer object verbs Romance`, `second language learners argument structure
  transfer` and `acquisition of Italian piacere dative experiencer second language`.
  The nearest hits are Turkish EFL learners on psych verbs (doi:10.31261/tapsla.10353),
  a 1998 *Second Language Research* paper on L2 dative experiencer subjects
  (doi:10.1191/026765898668810271, paywalled), and CLLD in L2 Italian
  (PMC11288789 — clitic left dislocation, not argument direction). **Nothing measures
  how often learners produce `ti manco`.** The post therefore states the structural
  reason the error is available and explicitly declines to quantify it.

---

## Phase 4–5 — build decisions

- **Category** `miss-you-across-miles` — confirmed live in the Strapi categories list
  fetched 2026-09-25, and the category three sibling spokes in this batch already use.
- **Slug** `i-miss-you-in-italian` — checked against
  `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=i-miss-you-in-italian`,
  returned `[]`. Free.
- **Hub.** `/blog/i-miss-you-in-different-languages` is live (fetched 2026-09-25,
  ~5,547 words). Its Italian coverage is four touches: one pronunciation-list row
  ("Italian: Mi manchi (mee MAHN-kee)"), one copy-and-personalise line, one tone-table
  cell, and one FAQ ("it's direct and romantic … For extra emphasis use 'Mi manchi
  tanto'"). No grammar, no direction, no dictionary, no other person forms. The post
  links up and does not restate the table.
- **Templates.** `/missyou-gf` (mandatory) plus **`/photo-puzzle`** (The Last Piece) as
  the genuine alternative from `oneOfLinks`: each placed piece reveals one line of the
  letter, which is the only format that lets an Italian phrase and its English gloss
  arrive as separate beats, and its final piece is not in the box — the literal sense of
  *mi manchi*. Rejected: `/dedication` (already in three posts here, a fourth in flight,
  and a radio dedication is not the instrument for a grammar reader); `/train-ticket`
  (PNR and running status fit the Indian-rail reader the Spanish sibling sent there, not
  a transatlantic one); `/capsule` (a real second-best on the fixed-term-absence reading,
  but the french, japanese and tagalog spokes all took it while this post was being
  written, and `/photo-puzzle` is the more specific fit regardless).
- **Division of labour with the French sibling.** French `tu me manques` is the same
  construction and that post is running concurrently. The Italian post spends **two
  sentences** on French, and they earn their place by carrying the Spanish
  disconfirmation the French post is not testing.

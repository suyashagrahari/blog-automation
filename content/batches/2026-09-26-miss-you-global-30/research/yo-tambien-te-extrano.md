# Research brief — `yo-tambien-te-extrano`

- **Keyword:** `yo también te extraño`
- **Lane:** A-reply (WAVE3-PLAN row 1)
- **Body language:** Spanish · **Region:** `mx-es` · **Category:** `miss-you-across-miles`
- **Templates:** `/missyou-gf` (mandatory), `/streak`, `/templates`
- Measured 2026-09-27.

---

## Phase 1 — SERP analysis

Measured three ways. Every scrape self-authenticated on the content returned (Spanish text, my query),
not on the navigation response, per BRIEF §3.

### Route 1 — `scripts/serp-ddg.mjs` (worked, run twice, identical)

`node scripts/serp-ddg.mjs "yo también te extraño" --region mx-es` — the tool echoed back
`query: yo también te extraño`, so the argument order was right. It **parsed**, which means no
browser and therefore no contention exposure. Run twice; ranks 1–9 byte-identical, rank 10 differed
(`letrasboom.com` vs `cancioneros.com` — both lyrics sites).

| # | Result | Type |
|---|---|---|
| 1–2 | youtube.com ×2 "Yo Te Extraño" | song video |
| 3–4 | music.youtube.com ×2 | song |
| 5 | spanishdict.com/translate/yo también te extraño | translation scraper |
| 6 | letras.com — Sebastián Yatra | lyrics |
| 7 | musica.com | lyrics |
| 8 | musixmatch.com | lyrics |
| 9 | cancioneros.com / open.spotify.com | lyrics / playlist |
| 10 | letrasboom.com / spotify | lyrics |

**10 of 10 weak. 9 of 10 music. 0 dictionaries, 0 RAE.**

A `+ significado` variant on the same route returned 6 song-analysis pages and 4 translation
scrapers (spanishdict ×2, glosbe, reverso) plus one blog — still 10 of 10 weak, 0 citing the RAE.

### Route 2 — Google in the real browser, `gl=mx&hl=es-419&pws=0`

8 organic results reached. Self-authenticated: every title Spanish, every one containing my phrase.

| # | Host | Page type | Weak? |
|---|---|---|---|
| 1 | youtube.com | song, "Yo Tambien Te Extraño" | yes |
| 2 | open.spotify.com | song + lyrics, *PA GOZAR* | yes |
| 3 | youtube.com | Sebastián Yatra, animated video | yes |
| 4 | youtube.com | TrankaBalanka, song | yes |
| 5 | open.spotify.com | song, Estrellas de la… | yes |
| 6 | ingles.com | translator page | yes |
| 7 | tiktok.com | UGC video | yes |
| 8 | facebook.com | UGC post quoting the phrase | yes |

Above all eight, an **"El Modo IA respondió"** block — Google is answering this itself.

**8 of 8 weak. 5 of 8 are songs. Exactly 1 dictionary-shaped page. 0 cite the RAE.**

### Route 3 — the reply-intent long-tail, same Google route

`"yo también te extraño" o "te extraño también" cuál es correcto`:

Quora (1 answer thread, 11 years old), reddit.com ×2 (r/grammar, r/etymology — both served through
Google's `?tl=es-419` translation), facebook.com ×2, tiktok.com, context.reverso.net (a Spanish→**French**
translation-memory page, on a Spanish/English question), and `baggagereclaim.co.uk`, an English blog
surfaced with `hreftranslate="es"`.

**8 of 8 weak, 0 dictionaries.** Google is filling this SERP by machine-translating English pages,
which is what a genuine content gap looks like.

### Gate 2 / Gate 4 verdict

**Gate 4: PASS, unambiguously.** There is no strong editorial page in Spanish anywhere on any of the
three measurements. The incumbents are exactly what the A-reply lane predicted: forums, social posts
and translation scrapers.

**Gate 2: PARTIAL, and the post says so.** The bare phrase is an *entertainment* SERP — Google in
Mexico reads it as the Sebastián Yatra song. A blog cannot displace a song page for a song query.
The realistic target is the reply-intent tail, which is genuinely open. Proceeding rather than
aborting is a judgement call; the abort precedent is the WAVE3 `ph-en` lyrics exclusion, and the
difference is that this SERP has a real, named, weak non-lyrics tail and no copyright exposure.

### Checkable error in a ranking result

`ingles.com/traductor/yo también te extraño` — **rank 6 on the measured Google mx-es SERP**, and the
same publisher's `spanishdict.com` page at rank 5 on DDG (Dictionary Media Group / IXL Learning).

1. Its two-line dialogue example translates **«cariño» as "sweetie" in the first turn and "bae" in the
   second**, inside the same two lines, on a page that labels the whole phrase "(informal)".
2. Among its ten listed examples, **«Sí, yo también te extraño mucho» → "Yes, I miss you very much"**
   — the *too* is dropped entirely, on a page whose entire subject is *too*.
3. Its own disclaimer reads **«Estos ejemplos aún no se han verificado»**. Honest of it; also the state
   of the only dictionary-shaped page on this SERP.

Not linked from the post (zero-competitor-links rule). Verifiable by loading the URL.

---

## Phase 2 — Gap analysis and angle

**Table stakes:** the translation ("I miss you too"), the two word orders, the *extrañar* / *echar de
menos* pair.

**The gap:** not one ranking page cites a dictionary, and not one distinguishes the three reply forms
by *what the adverb attaches to*. The Italian sibling proved the reply is a scope question in Italian;
nobody has asked whether it is one in Spanish.

**Angle:** the only page that tests the Italian rule against Spanish and reports a **clean negative**,
then finds the real asymmetry in *tampoco*.

**Fan-out sub-queries → H2s:** where does *también* go · is *te extraño también* wrong · what does
the RAE actually say · can I answer "a mí también" · what if the message was negative · what does
Google return for this in Mexico.

---

## Phase 3 — The linguistics, verified

### `también` — DLE and DPD (headwords confirmed on the page, read in the real browser; `dle.rae.es` 403s a script)

- **DLE `también`** (`De tan3 y bien`): «1. adv. U. para indicar la igualdad, semejanza, conformidad o
  relación de una cosa con otra ya nombrada. Sin.: asimismo, igualmente. 2. adv. Tanto o así.»
  **No example. No mention of position.** This is the opposite of Treccani's `anche` 1.a, whose own two
  examples *are* the minimal pair.
- **DPD `también`, 2.ª ed.**: «Adverbio que se usa para indicar que lo expresado en **la palabra o
  secuencia a la que afecta** se suma a lo dicho con anterioridad.» So the Academy *does* grant the
  adverb a target — but not a positional rule for finding it.
- **The load-bearing observation — the DPD's own two citations sit on opposite sides of the target:**
  - «Decile **también** que desde ahora cuenta con nuestra casa» (Cortázar, *Reunión*, ar 1983) — *también*
    **precedes** what it adds.
  - «No sé, yo **también** estoy confundido» (Nieva, *Zorra*, es 1988) — *también* **follows** the subject
    *yo*, which is what it adds.
- DPD sense 2 separates *también* from *tan bien*: «Ella canta también, como su padre» vs «Ella canta
  tan bien como su padre».

### Does the Italian scope trap transfer? — **NO. Clean negative.**

Three independent reasons:

1. **The verb does not invert.** Italian *mancare* makes the missed person the subject, so *anche* landing
   on *tu* versus *a me* changes who is added. Spanish *extrañar* is transitive with the **misser** as
   subject, so there is only one plausible landing site and no trap to fall into.
2. **Adjacency does not disambiguate in Spanish.** De Cesare 2015 found Italian *anche* in `anche + S + V`
   takes narrow scope 100% of the time. Spanish has no such uniform configuration: the DPD's own entry
   shows the particle both pre- and post-adjacent to its target.
3. **Neither dictionary states a positional rule for `también` at all.**

### The `también` / `tampoco` asymmetry — the finding no listicle carries

- **DLE `tampoco`** (`De tan3 y poco`): «1. adv. U. para negar algo **después de haberse negado otra cosa**.
  2. adv. U. para atenuar o refutar una aserción precedente. —La voy a despedir. —Tampoco es eso.»
  - *también* is defined by a relation of equality, with **no polarity condition and no example**;
    *tampoco* is defined by a **polarity precondition** and has a second sense *también* lacks.
  - **The only illustrative example the RAE gives anywhere in this pair is that two-turn dialogue — i.e. a
    reply.** It sits under *tampoco*, not *también*.
- **DPD `tampoco`, 2.ª ed.** gives **the only position-dependent rule the Academy states in this family**:
  pre-verbal *tampoco* may **not** be followed by *no* (⊗«Entonces tampoco no existía ninguna solicitud de
  mediación», *Semana* co, 21-28.1.1997 — «debió decirse *tampoco existía*»); post-verbal *tampoco* **does**
  take a negative verb («Entonces no existía tampoco…»). Its citations: Aguirre, *Retablo* (cl 1987) and
  Cabal, *Vade* (es 1982) — the latter being «tampoco **yo** le guardo rencor», with the adverb *preceding*
  the subject pronoun.

So Spanish's position rule exists only for the **negative** member of the pair, and it is about **polarity
concord**, not about which constituent the particle associates with. That is a different shape of rule
from the Italian one, and it is the genuinely useful line here.

### Tatoeba — 13 queries, 219 sentences paginated, 181 strict survivors

Measured through `api_v0/search` (`from=spa`, `to=eng`), every page walked, every hit inspected, then
filtered on the literal string because the search is **tokenised and diacritic-insensitive**.

| query | reported | paginated | strict |
|---|---|---|---|
| `yo también te extraño` | 2 | 2 | 1 |
| `te extraño también` | 4 | 4 | 1 |
| `también te extraño` | 4 | 4 | 1 |
| `te echo de menos también` | 1 | 1 | 1 |
| `yo también te echo de menos` | 0 | 0 | 0 |
| `yo tampoco te extraño` | 0 | 0 | 0 |
| `tampoco te extraño` | 0 | 0 | 0 |
| `tampoco te echo de menos` | 0 | 0 | 0 |
| `yo también` | 267 | 60 | 60 |
| `a mí también` | 61 | 61 | 48 |
| `yo tampoco` | 76 | 76 | 68 |
| `tampoco yo` | 76 | 10 | 0 |
| `tú a mí también` | 1 | 1 | 1 |

**Result A — placement contrast does not survive translation.** Four attested sentences put *también* in
four positions and all four render with one clause-final English *too*:

- 3238100 «**También** te extrañamos» → "We'll miss you, too" (initial)
- 1737188 «Creo que yo **también** te extraño» → "I guess I miss you too" (post-subject)
- 1841795 «Yo **también** te voy a extrañar» → "I'm going to miss you, too" (post-subject)
- 1126193 «¡Te extraño **también**!» → "I miss you too!" (post-verbal)

4 of 4. No corpus evidence that *yo también te extraño* and *te extraño también* differ.

**Result B — «a mí también» belongs to another verb class.** Of the 48 strict sentences, **32 carry a
clitic *me* after the adverb**, and the overwhelming majority are dative-experiencer verbs: *gustar* (≈24),
*encantar*, *agradar*, *disgustar*, *dar asco*, *pasar*, *ocurrir*, *inspirar*. The remainder have *a mí*
as an object of a transitive (*llévenme*, *cuéntame*, *dame*, *retó*, *invitaron*, *secuestraron*).
**Not one has the speaker as nominative subject.** The elliptical reply pattern is attested repeatedly and
always answers a *gustar*-type sentence: «"Me gusta viajar." "A mí también."» (1059079, 1262708, 3135524).
So *a mí también* answers *me haces falta*, not *te extraño*.

**Result C — the DPD prohibition holds empirically.** **0 of 68** «yo tampoco» sentences contain
*tampoco no*; **0 of 60** «yo también» sentences contain *también no*. Of the 68, **54** have an English
translation using *either* and **20** one using *neither*/*nor* — one Spanish word against three English
constructions.

**Result D — a zero belonged to the query, not the corpus.** «yo también te echo de menos» returned 0,
but «te echo de menos también» returned 1 (1126192 → "I miss you too!"), with an ID consecutive to the
*extrañar* version (1126193) — the same English sentence rendered with both verbs. Varying the phrasing
rescued the form, exactly as two Italian rows found.

*Corpus oddity, noted not cited:* 2787029 «Yo tampoco entendí nada» carries the user translation
"I, too, didn't understand anything" — *tampoco* rendered as "too". Tatoeba is user-contributed, so this
is a corpus artefact, not a ranking page's error.

### Scholarly source

**Mora Peralta, Idanely (2023).** "Los marcadores discursivos aditivos del español novohispano. El caso de
demás/además, asimismo, también, ítem, otrosí." ***Cuadernos de la ALFAL*** 15(1): 162–180. ISSN 2218-0761.
doi 10.5935/2218-0761.20230010. UNAM, Instituto de Investigaciones Filológicas.

- Unpaywall before citing: `is_oa: true`, `oa_status: gold`, licence `cc-by-nc-nd`.
- **Full text read**, not the abstract: the DOI resolves straight to a 286,885-byte PDF at
  `mundoalfal.org`; parsed with `pdftotext -layout` at `/usr/local/bin/pdftotext` → 63,544 characters.
- Corpus: 16th-century New Spain legal-administrative documents (cartas de defensa, peticiones,
  testamentos, testimonios, solicitudes) from Arias Álvarez 2014, plus CORDE examples.
- Taken from §3.4: Cuervo (1998: 655) on *también* — «denota igualdad, semejanza, conformidad o relación de
  una cosa con otra ya nombrada» — **which the 2026 DLE reproduces almost verbatim**; Moliner (2000: 1327),
  «una cosa nueva a la que también **afecta**» — the same verb the DPD uses; and the paper's own conclusion
  that *también* as a discourse marker «pone de relieve el mensaje que presenta a continuación» (forward
  scope), against the backward target in *yo también*.
- **Limitation recorded:** 16th-century administrative prose, not affective messaging; the paper never
  discusses *extrañar* or replies. The inference to *yo también te extraño* is the post's own.

### Lines cut, and why

- **`dle.rae.es/extrañar` and `dle.rae.es/falta`** — both already at the 2-post URL cap across the Spanish
  siblings. The *extrañar*-is-transitive point is therefore carried by a cross-link to
  `diferencia-entre-te-extrano-y-te-echo-de-menos` rather than a third citation, and `hacer falta` is
  referenced without a new source.
- **`doi.org`** — at cap 3; the ALFAL paper is cited at its publisher URL instead.
- **Every psychology candidate** — the first two `findpapers.mjs` searches returned nothing but *Frontiers
  in Psychology* and *PLoS ONE* papers, both banned at cap 3. Swapped the whole citation class for a
  linguistics journal, which is a better subject-test fit anyway.
- **A claim that «yo también» contrasts the subject and «te extraño también» the action** — this is the
  framing my own task prompt floated, and it does not survive the check. Neither the DLE nor the DPD says
  it, and the corpus renders both identically. Cut and replaced with the negative result.
- **An "informal" register claim** — `ingles.com` marks the phrase "(informal)"; neither RAE entry marks
  *también* or *extrañar* for register, so the post does not repeat it.

---

## Split from the six Spanish siblings

One sentence: **the six siblings own the verb — what *extrañar* means, how it differs from *echar de
menos*, how it goes into English, how many alternatives exist, how to imply it, how to write it as a
letter — and this post owns the *adverb*: where *también* attaches when you are answering rather than
sending, and why *tampoco* is the one with a rule.**

Cross-linked, not re-derived:

- `diferencia-entre-te-extrano-y-te-echo-de-menos` (**LIVE**) — carries the subject-of-*extrañar* point and
  the RAE's refusal to mark either verb regionally.
- `te-extrano-en-ingles-como-se-dice` (**LIVE**) — carries the tense mapping, so this post does not
  re-derive it when discussing the *ingles.com* examples.
- `i-miss-you-too-in-italian` (not yet live — this cross-link 404s until the batch publishes) — the
  contrast case the whole post turns on.

Not cross-linked but checked for overlap: `te-echo-de-menos-significado` (owns the two DLE senses of the
locution and the entertainment takeover of *its* head term — my SERP section is a different phrase, a
different measurement and a music rather than a general takeover), `otra-forma-de-decir-te-extrano`
(94 renderings / 3 constructions), `como-decir-te-extrano-sin-decirlo` (*ojalá*, diminutives),
`carta-para-decir-te-extrano` (letter structure and length).

**Self-cannibalisation check.** A sibling already ranks #10 for another sibling's keyword, so the risk is
real. This post targets no translation, no synonym list, no meaning-of-the-verb query and no letter
structure; its keyword contains *también*, which none of the six targets, and its H2s are about an adverb.
I can write the split honestly, so this row did not abort.

---

## First-party facts — and the honest statement about them

99 posts across the two batches have spent the miss-you block; the most-used line appears in **68** of them.
This post therefore takes mostly platform-wide lines, including three that had never been used in any of
the 99 posts on disk (#1 page type, #3 page type, and the 5,199-pages line).

Used: 3,843 registered creators · 1.35 pages per creator · #1 page type apology dashboard (1,396 / 26.9%) ·
#3 page type love-gf (1,182 / 22.7%) · 5,199 pages across 21 page types · 2.5 h edit gap
(/apology-dashboard, n=1,396) · 2.6 h edit gap (miss-you, n=214) · 48.4% touch-device views.

**The edit-gap pairing:** 2.6 h on n=214 against 2.5 h on n=1,396 — one tenth of an hour apart across a
sample six times larger. The post states it as a null result (missing is not edited more slowly than
apologising), which is what the numbers support. This pairing is shared with the Italian sibling;
everything else in the set is unshared with the six Spanish siblings.

**Mandatory caveats, all in Spanish body prose:** nothing is segmented by language or country, so no figure
here is Mexican; the database records **which template was opened, never who received it**; views are page
views, not unique visitors.

**Why the spine is a reply-lane spine:** 1.35 pages per creator means almost nobody makes a second page,
and the top three page types (26.9% apology, 22.7% "I love you", 8.8% darling) are all *opening moves*.
The product is built for the first message, not the answer. That is the first-party fact that actually
belongs in a reply post, and no sibling has used it.

## The product disclosure

`app/lib/prompt.ts:44` defines `/missyou-gf` as "'I miss you' page for a girlfriend/partner" — **verified at
source**. So the mandatory link is wrong-language (English labels), recipient-specific (a partner), and —
the tension this row has to name — **wrong-shaped for the job**: a reply is not a page. `/streak` is kept
for the same reason the Italian reply row kept it: `prompt.ts:88` makes it the only **reciprocal** template
("two people, one tap a day"), which is the only thing in `oneOfLinks` with a two-way shape. `/templates`
is the escape hatch. All three disclosed in Spanish prose, with no price, tier or cost claim anywhere.

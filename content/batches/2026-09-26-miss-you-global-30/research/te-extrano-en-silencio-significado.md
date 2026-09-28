# Research brief — `te-extrano-en-silencio-significado`

**VERDICT: ABORT. No blog JSON written.**

**Aborted on TWO independent grounds, either of which is sufficient:**

1. **Gate 4 — the SERP is music-owned and the intent-word fix FAILED.** The lane rule
   ("add a word naming the INTENT") does not hold in es-MX, and the measurement
   explains *why* it failed here in a way that corrects the rule rather than merely
   adding an exception.
2. **Twin test — the proposed substance is already shipped.** The "concealment /
   saying it without saying it" angle my prompt proposes is the existing thesis of
   `como-decir-te-extrano-sin-decirlo`, in the same language, in the same batch.

- Keyword: `te extraño en silencio significado`
- Row tier: `A-explainer`, band 2, inventory `weak: 3` — flagged SONG CONTAMINATION EXPECTED
- Region: `mx-es` · bodyLanguage would have been Spanish (es-MX)
- Date measured: 2026-09-28
- Files emitted: **this brief only.** `blogs/` untouched, `batch.json` untouched.

---

## 1. Headline finding — the intent-word rule is wrong as stated, and here is the correction

The lane's accumulated rule going into this row:

> Portuguese: adding the additive particle cleared the music results (7 of 18 → 0).
> German: that failed, because the particle was already inside the song title
> (Helene Fischer, *Und ich vermiss dich auch*).
> Therefore: add a word naming the **INTENT** (`significado`, `qué quiere decir`),
> not the particle.

**In es-MX the intent word did not clear the music. It is the third data point and it
does not confirm the rule — it corrects it.**

Adding `significado` moved the SERP from *streaming* music results to *lyric-meaning*
music results. It did not move it off music. The reason is specific and generalisable:

**`significado` is itself part of the incumbent vertical's own page-title template.**
The Spanish lyrics-aggregator genre publishes pages literally titled
**"letra y significado"** — `letras.com/<artista>/<id>/significado.html` is a
first-class URL shape on that site, and `musica.com/<artista>/<cancion>/analisis-cancion`
renders as "Análisis | Significado". So the token intended to *disambiguate away from*
music is a token the music sites have already optimised for.

**The corrected rule, which explains all three data points with one mechanism:**

> The disambiguating token must be one that does **not** already appear in the
> incumbent vertical's title pattern. Portuguese succeeded because the additive
> particle was absent from the lyric pages' titles. German failed because the particle
> was *inside the song title*. Spanish fails because the intent word is *inside the
> lyric sites' meaning-page template*. "Particle vs intent word" was never the real
> variable — **token overlap with the incumbent's own titles** is.

A practical corollary for the next row that hits song contamination: before choosing a
disambiguator, search the bare token against the music vertical (`"letra y <token>"`,
`"<token> de la canción"`). If the vertical already publishes pages with that token in
the title, the token will not clear the SERP and may make it worse.

**It did make it worse here.** On Google the intent-word variant returned a *higher*
proportion of explicit lyric-meaning pages than the bare head term did on DDG, because
the head term at least surfaced a general `frases` listicle, while the intent variant
pulled in three dedicated song-analysis pages.

---

## 2. SERP routes attempted, in the order BRIEF §3 prescribes

| # | Route | Result |
|---|---|---|
| 1 | `scripts/serp-ddg.mjs "te extraño en silencio" --region mx-es` | **200, parsed, 9 results.** Query-first arg order used; the echoed `query:` line was read and confirmed correct. |
| 2 | `scripts/serp-ddg.mjs "te extraño en silencio significado" --region mx-es` | **200, parsed, 9 results.** |
| 3 | `scripts/serp-ddg.mjs "qué significa cuando alguien te extraña en silencio" --region mx-es` | `(no results parsed)`. **No retry**, per BRIEF §3. No conclusion drawn from it. |
| 4 | **Google `gl=mx&hl=es&pws=0&num=20`, real browser** | First load **CONTAMINATED — discarded, see §3.** Second load (quoted phrase) **authenticated and used below.** |
| 5 | `scripts/serp-ddg.mjs "qué quiere decir que alguien te extrañe en silencio" --region mx-es` | `(no results parsed)`. No retry, no conclusion. |

DDG was live at the start of this session and throttled after two successful calls —
consistent with BRIEF §3's "intermittent, not dead". **Both successful DDG calls landed
before the throttle, and both are the measurements this abort rests on.** Bing and
Brave were not needed: two independent routes already agreed.

---

## 3. CONTENTION INCIDENT — caught, discarded, and reported as a tooling defect

**This is a fresh, independent reproduction of BRIEF §3 item 0, and it is the third
confirmed instance in this batch.**

`browser_navigate` to
`https://www.google.com/search?q=te+extraño+en+silencio+significado&gl=mx&hl=es&pws=0&num=20`
returned:

```
status: ok
title: "te extraño en silencio significado - Buscar con Google"
```

**Both the status and the title were correct.** The immediately following
`browser_scrape` on the same named session returned:

```
title: ich vermisse dich auf italienisch - Google Suche
url:   https://www.google.com/search?q=ich+vermisse+dich+auf+italienisch&gl=de&hl=de&pws=0&num=10
```

— a **German** SERP for `ich-vermisse-dich-auf-italienisch`, which is **another row in
my own `WAVE4-PLAN.json`**. Contamination markers `vermisse` and `manchi` were present;
`silencio`, `extraño` and `significado` were all absent.

**Discarded in full. Not recorded, not counted, not used.** Re-ran and re-authenticated.

Two things worth carrying forward:

- **The `session` argument does not isolate.** I passed a distinctive session name
  (`teextrano-silencio`) on both the navigate and the scrape. It did not help, exactly
  as BRIEF §3 says. This is confirmation, not a new workaround.
- **The defect is specifically in the navigate→scrape gap.** The navigate response was
  correct *about my own navigation*; the tab had been repointed by another agent before
  the scrape read it. This is why the brief's "prefer atomic navigate-and-extract"
  advice matters — but note that PolterTab's `browser_navigate` and `browser_scrape`
  are **separate calls with no atomic variant**, so the gap cannot actually be closed
  on this toolchain. The only available defence is content self-authentication after
  the fact, which is what caught it.

### Self-authentication of the run that WAS used

Run 4b (quoted phrase, `gl=mx&hl=es&pws=0`) was checked programmatically before any
position was recorded:

- contains `silencio` ✓, `extraño` ✓, `significado` ✓
- page language Spanish, headings in Spanish (`Resultados de búsqueda`, `Webergebnisse`
  absent)
- contamination markers `vermisse`, `özledim`, `tęsknię`, `saudade`, `manques`,
  `manchi`, `rindu`, `bogoshipda` — **all absent**

A correct page title was **not** treated as authentication; the content was. Nothing was
clicked, submitted or dismissed. Read-only throughout.

---

## 4. Measured SERP A — DDG `mx-es`, head term `te extraño en silencio`, 2026-09-28

| # | Result | Type | Music? |
|---|---|---|---|
| 1 | `music.youtube.com/watch?v=tk1TzH_GjnI` — Te Extraño En Silencio | Streaming | **YES** |
| 2 | `youtube.com/watch?v=tk1TzH_GjnI` — Flow Firme style (Music Video) | Streaming | **YES** |
| 3 | `youtube.com/watch?v=iezoeSNu1uA` — Anuel AA, Te Extraño en Silencio (Audio Oficial) | Streaming | **YES** |
| 4 | `music.youtube.com/watch?v=u1wF0s7J67Q` | Streaming | **YES** |
| 5 | `open.spotify.com/intl-es/track/...` — Anuel A | Streaming | **YES** |
| 6 | `open.spotify.com/intl-es/album/...` — Flow Firme | Streaming | **YES** |
| 7 | `facebook.com/CorridosDMOficial/...` — Grupo Firme, Letra | Lyrics video | **YES** |
| 8 | `facebook.com/ailuj.zneas/...` — te extraño en silencio | Lyrics video | **YES** |
| 9 | `pensador.com/es/te_extrano_frases/` — 102 frases de extrañar | Quotes listicle | no |

**8 of 9 music. 1 of 9 non-music, and it answers `te extraño frases`, not this query.**

Counted 9 because 9 is what I actually saw. The inventory's `weak: 3` is not a
meaningful description of this SERP — the results are not weak, they are *off-intent
and unassailable*: YouTube, YouTube Music, Spotify and Facebook.

---

## 5. Measured SERP B — the intent-word variant, on BOTH routes

### 5a. DDG `mx-es`, `te extraño en silencio significado`

| # | Result | Type | Music? |
|---|---|---|---|
| 1 | `letras.com/luis-miguel/26108/significado.html` | **Lyric-meaning page** | **YES** |
| 2 | `youtube.com/watch?v=fgH6glkXHgc` — Anuel, Cazzu (Official Music Video) | Streaming | **YES** |
| 3 | `pensador.com/es/te_extrano_frases/` | Quotes listicle | no |
| 4 | `oigo.com/noticias/musica/luis-miguel-letra-y-significado-...` | **Lyric-meaning page** | **YES** |
| 5 | `musica.com/luis-miguel/te-extrano/analisis-cancion` — Análisis \| Significado | **Lyric-meaning page** | **YES** |
| 6 | `facebook.com/LaSalsaViive/...` — quote post | Social quote | **YES** |
| 7 | `ppdesiero.es/cuando-un-hombre-dice-te-extrano/` | Advice blog | no |
| 8 | `youtube.com/watch?v=tk1TzH_GjnI` — Flow Firme | Streaming | **YES** |
| 9 | `uniproyecta.com/que-significa-te-extrano/` | Explainer | no |

**6 of 9 music.** And the three non-music results all answer the *shorter* head
`te extraño` — none of them addresses `en silencio` at all.

### 5b. Google `gl=mx&hl=es&pws=0&num=20`, `"te extraño en silencio" significado` (authenticated run)

Result titles as returned:

| # | Result title | Type | Music? |
|---|---|---|---|
| — | **Google AI Mode answer** occupies the top slot | AI answer | — |
| 1 | Te extraño en silencio Grupo Firme — letra y significado | **Lyric-meaning** | **YES** |
| 2 | Te extraño en silencio Grupo Firme - letra y significado | **Lyric-meaning** | **YES** |
| 3 | Te extraño en silencio, porque ya entendí que extrañarte no... (Facebook) | Social quote | **YES** |
| 4 | Te Extrañaré en Silencio letra y significado | **Lyric-meaning** | **YES** |
| 5 | Te extraño en silencio : r/POESIA (Reddit) | Poetry post | no |
| 6 | Su Significado De La Canción Te Extraño En Silencio | **Lyric-meaning** | **YES** |
| 7 | Te extraño en silencio Grupo Firme - letra y significado | **Lyric-meaning** | **YES** |

**5 of 7 are explicitly song lyric-meaning pages. Zero results treat the phrase as a
psychological or relational question.** Four distinct results carry the exact string
**"letra y significado"** in the title — the template-overlap mechanism from §1, visible
directly in the SERP.

Only 7 results were extractable from the authenticated load and **7 is what I report.**
I did not invent ranks 8–20.

**The two routes agree.** DDG (proxy) and Google (the real in-market SERP) independently
return a music-dominated SERP for the intent-word variant. That agreement, not either
number alone, is what makes this abort safe.

---

## 6. Gate 4 verdict

**FAIL — and not for the usual reason.**

The standard Gate 4 failure is "strong editorial pages in that language with no weak
result". This is a different and harder failure: **the query's dominant intent is not
the one the row assumes.** People typing `te extraño en silencio significado` in Mexico
are overwhelmingly asking what a *song* means — Grupo Firme, Anuel AA & Cazzu, Flow
Firme, and Luis Miguel's adjacent *Te Extraño*.

Consequences, in order of severity:

1. **Unwinnable.** The incumbents are YouTube, Spotify, letras.com and musica.com. A
   low-authority English domain publishing its first Spanish explainer does not displace
   them on a song-title query.
2. **Worse than unwinnable — actively harmful.** Per BRIEF §2's own logic: a page that
   does not serve the dominant intent gets clicked, bounced, and teaches Google the
   domain does not answer the query. Ranking is not the only thing at stake.
3. **Google has already resolved it.** AI Mode answers this query in the top slot, and
   it answers it *as a song question*. There is no unanswered-question gap to occupy.

**No intent-word variant clears it.** `significado` was tested on two routes and failed
on both. Two paraphrase variants that break the exact title string
(`qué significa cuando alguien te extraña en silencio`,
`qué quiere decir que alguien te extrañe en silencio`) both hit the DDG throttle and
returned no data — **so I cannot claim a paraphrase would fail, and I do not.** But that
is moot for this row: a paraphrase is a *different keyword*, and the row's keyword is
fixed. Clearing the SERP by changing the query is not clearing the SERP.

---

## 7. Twin test — independently fatal

My prompt proposed this substance:

> "te extraño en silencio" is a **concealment frame**, not a translation question — the
> searcher wants to know what it means that someone says this, or whether to say it.

**That post already exists in this batch, in Spanish.**
`blogs/como-decir-te-extrano-sin-decirlo.json` (keyword `como decir te extraño sin
decirlo`) has as its stated angle:

> "…separates the two operations Spanish actually has for saying it without saying it,
> using the RAE's own entries: **la indirecta** (which the DLE's entry for *reticencia*
> defines as concealing something 'y de ordinario con malicia')…"

Concealed expression of missing someone, in Spanish, grounded in the RAE, is that post's
thesis. Writing the concealment frame again under a song-title keyword is the twin the
`bindingReminders` explicitly say to abort on rather than ship.

**Verified against Strapi production 2026-09-28 — the twin is not merely on disk, it is
LIVE.** `api/articles?filters[slug][$eq]=como-decir-te-extrano-sin-decirlo` returns
HTTP 200, `total=1`; it is published and indexable at
`https://subhsandesh.in/blog/como-decir-te-extrano-sin-decirlo`. So do
`te-echo-de-menos-significado` and `otra-forma-de-decir-te-extrano` (both `total=1`).
This strengthens the twin ground rather than softening it: a second concealment-frame
page in Spanish would now be competing with an already-indexed page on the same domain
for the same intent.

The Spanish shelf in this batch is dense and already covers the neighbouring intents:

| Sibling | Occupies |
|---|---|
| `como-decir-te-extrano-sin-decirlo` | **concealed/indirect expression — the proposed angle** |
| `te-echo-de-menos-significado` | the "what does this phrase mean" explainer shape |
| `otra-forma-de-decir-te-extrano` | alternatives / synonym variation |
| `diferencia-entre-te-extrano-y-te-echo-de-menos` | the regional split |
| `yo-tambien-te-extrano` | the reciprocal reply |
| `carta-para-decir-te-extrano` | the long-form written form |
| `te-extrano-en-ingles-como-se-dice` | the translation request |

Even with a clean SERP, the honest angle sentence for this row would have had to be
written *against* `como-decir-te-extrano-sin-decirlo`, and I could not write it honestly.
Per Phase 2: if the angle sentence cannot be written honestly, go back.

---

## 8. What would reopen this row

Concrete and checkable, not a restatement of the failure:

1. **A different keyword.** The concealment intent is real, but it is not reachable
   through a song title. A query that does not contain the string `te extraño en
   silencio` — e.g. one built on `guardarse lo que siente` or `no decir lo que siente
   por alguien` — would need its own inventory row and its own SERP measurement, and
   would still have to clear the twin test against `como-decir-te-extrano-sin-decirlo`.
2. **A measurable change in the music SERP.** If the Grupo Firme / Anuel releases decay
   out of the es-MX SERP, re-measure. The head term should fall below ~3 of 9 music
   results before this is reconsidered.
3. Not reopened by: more sources, a longer draft, or a better angle sentence. The
   blocker is query intent, and no amount of drafting changes it.

---

## 9. Process notes

- **Phase 0 not reached as a gate decision.** `facts-snapshot.md` was not drawn on
  because no post is being written; no `factsUsed` strings were consumed, so the
  heavily-collided 12 lines are left for rows that will ship.
- **`capcheck.mjs` run 2026-09-28, clean.** No banned URL used, `doi.org` at cap 3,
  URL caps intact. **No source was consumed by this row** — no citation was claimed, so
  nothing was spent from the batch budget. `bop.unibe.ch` and `pelcra-nkjp` remain where
  they were.
- **No `pricecheck-intl.mjs` run needed** — no body prose was written, so there is no
  price surface. No price, cost, subscription or currency claim appears in this brief.
- **`references/article-json-schema.md` EXISTS and was read** — verified at
  `.claude/skills/blog-optimisation/references/article-json-schema.md`, **11,783 bytes,
  197 lines.** It is **not** at the repo root, so the bare path `references/…` does not
  resolve from the project directory. **The file is real; only the location given in the
  task prompt was wrong.** Recording it as verified, not as a missing-file failure — an
  earlier agent's note that the schema "was not located in this repo" was right about the
  root path and wrong about the file, and that error should not be propagated further.
- **Strapi PRODUCTION is UP — checked, not assumed, 2026-09-28.** No
  "Strapi offline / unreachable / no credentials" failure is recorded anywhere in this
  brief. Only `http://127.0.0.1:1337` is down; production answers normally.
- **Slug-collision check RUN for my own slug:**
  `api/articles?fields[0]=slug&filters[slug][$eq]=te-extrano-en-silencio-significado`
  → HTTP 200, **`total=0`. The slug is FREE.** It is being left unclaimed deliberately:
  the abort is on query intent and the twin test, not on slug availability. If §8's
  conditions are ever met, the slug is still there.
- **`miss-you-across-miles` is a confirmed live category** and is not recorded as a
  failure here.
- **Two DDG successes before throttle.** Whoever runs next: the two-call budget before
  throttle appears real. Spend it on the two queries that actually decide the gate, and
  run the head term first.

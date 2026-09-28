# Research brief — `frases-de-te-extrano-para-una-amiga`

**Keyword:** frases de te extraño para una amiga · **Market:** mx-es · **Body language:** Spanish
**Axis (WAVE5-PLAN):** SUBJECT — platonic female friend. The page must not read romantic.
**Date:** 2026-09-28

---

## Phase 1 — SERP, measured not inferred

### Route log

| Route | Result |
|---|---|
| `serp-ddg.mjs "frases de cumpleaños" --region mx-es` (**control**, known demand) | `(no results parsed)` → **tool bot-blocked, not an empty SERP**. One call, then switched route per BRIEF §3. |
| Harness `WebSearch` | **Not used.** us-en only; invalid for an es-MX row. Not substituted silently. |
| **Google, real browser, `gl=mx&hl=es&pws=0&num=20`** | **Worked.** Run twice; 15 of 17 hosts identical across runs (churn: cosmopolitan.com/elmueble.com ↔ psicologiaymente.com). Self-authenticated on content: contains `amiga` + `extrañ`; absent `vermisse`, `özledim`, `saudade`, `mis je`. |

### The SERP (run 2, 8 organic web results)

| # | Host | Title | Page type | Weak? | About a *friend*? |
|---|---|---|---|---|---|
| 1 | pensador.com | 102 frases de extrañar a alguien | quote aggregator | weak | no — snippet is romantic |
| 2 | es.pinterest.com | Te Extraño Amiga Frases | UGC board | weak | nominally |
| 3 | facebook.com (Nueva Mujer) | Te extraño mucho, amiga | social post, 4 yrs old | weak | nominally |
| 4 | lnx.cabinas.net | Mensajes para mi amiga que extraño mucho | thin listicle, 7 Oct 2023 | weak | **yes — the only one** |
| 5 | quillbot.com | Frases para decir te echo de menos | SaaS blog | strong | no |
| 6 | es.pinterest.com | Extraño a Mi Mejor Amiga | UGC board | weak | no (ex-best-friend links) |
| 7 | elcomercio.pe | 50 frases de "te extraño" | national newspaper | strong | no — snippet romantic |
| 8 | psicologiaymente.com | 135 frases y dedicatorias para alguien especial | psychology magazine | strong | no — snippet romantic |

**Weak count: 5 of the 8 I actually saw.** Row estimate was 4 — measured slightly better.
Also present: AI Overview ("Visión general creada por IA"), an image pack of Pinterest/TikTok/Instagram/Facebook/YouTube, and a People-Also-Ask block.

**Two incumbents show overtly romantic lines in their own Google snippet while ranking for a friend query:**
- elcomercio.pe — "Eres la brújula que guía mi camino, la estrella que me orienta en la oscuridad."
- psicologiaymente.com — "Dejaré que te metas bajo mi piel y que comiences a ocupar…" / "El adiós de alguien a quien amamos."

**Google's own AI Overview** proposes *"Amiga, sin ti me siento sola; eres como mi otra mitad"* — couple vocabulary — and points the reader to Pinterest for "more inspiration".

PAA questions (FAQ seeds): ¿Cómo decir que extrañas a una amiga? · ¿Cómo decir te extraño con palabras bonitas? · ¿Cómo decirle algo bonito a mi amiga? · ¿Cómo te extraño, amiga?

### Instrument artefact worth recording

The operator's real Chrome runs the **Keyword Surfer** extension, which injects `surferseo.com` / `docs.surferseo.com` links into the SERP DOM plus per-result figures (e.g. `14,299,153 / 97 / 0`). These are **not Google data and not search volume for this keyword**. Excluded from the host census; no figure from them used.

---

## Phase 2 — Gap

**Table stakes:** a grouped list of lines; a short intro; something about distance.

**The gap, and it is the whole page:** *not one of the eight results states which Spanish words carry romantic implicature.* Six of eight are not about friends at all, and three of them (including Google's AI answer) actively supply couple vocabulary for a friendship query. Nobody separates dictionary fact from usage observation, and nobody mentions that a term can flip meaning across countries.

**Angle:** wins by being the only post that says which Spanish phrasings and address terms carry romantic implicature between friends, sourced to the *Diccionario del español de México*, with a country-variation claim verifiable in two dictionaries — grounded in SubhSandesh's 88-word median letter and 86.4% written-memory rate.

**Fan-out sub-queries → H2s:** what makes a line sound romantic · which words are marked · does it change by country · *mucho* vs *un montón* · amiga/comadre/carnala/hermana · diminutives · the lines themselves · what belongs to a partner instead · what research says · how to make it keepable.

---

## Phase 3 — Sources and instruments

### What failed, and why it matters

- **`dle.rae.es` → HTTP 403 Cloudflare** to every scripted UA (confirms lane finding #27). Its internal `/data/search` endpoint 403s too.
- **`web.archive.org` also 403s from this IP**, so the Wayback fallback the BRIEF recommends for 403-family hosts was **not available**. The availability API returned HTML, not JSON.
- **Real browser → contention, twice.** `browser_navigate` to `dle.rae.es/amigo` returned `status: ok` **and the correct title** (`amigo, amiga | … RAE`), while the content read back was the entry for **`faltar`**. A second attempt under a different `session` returned **`falta`**. A third returned, in the response's own `url` field, `dle.rae.es/extrañar` — **a URL never requested**.
  - **New finding:** comparing the *returned* `url` against the *requested* `url` is a cheaper contention check than content, and it caught this one for free.
  - **Worse than the documented cases:** the foreign content was in **my language on my site**. Language markers would not have caught it. Only checking the **headword** did — exactly BRIEF §4's "HTTP 200 is not confirmation you got the right entry".
- **Leipzig Wortschatz has no per-country Spanish corpora.** The public API exposes only `spa_news_2011_3M`, `spa_news_2011_1M`, `spa_wikipedia_2011_1M`. The country-variation claim therefore **cannot** be grounded in corpus frequency.
- **CORPES XXI (`apps2.rae.es`) → 403 Cloudflare.**

### What worked — and is a better instrument for this row

**`dem.colmex.mx` — *Diccionario del español de México*, El Colegio de México. HTTP 200 to a scripted UA, parses cleanly.** For an `mx-es` row this is a *better* authority than the pan-Hispanic RAE, because it describes Mexican Spanish specifically and carries the senses that matter here. It is **not** in `verify.config.json`'s `capExemptDomains`, although `dle.rae.es` is — a gap worth fixing in a ten-row Spanish batch.

### Established (dictionary fact)

| Claim | Evidence |
|---|---|
| **`querido` adj. vs noun is the sharp edge** | DEM II (adj.) "cariño o estimación", example **"mi más querida amiga"**; DEM III (noun) "persona con quien se tienen relaciones amorosas ilícitas; **amante**", example "la querida del general". So *mi querida amiga* is safe; *mi querida* is a mistress. |
| **`mi amor` sits in a sexual/beloved field** | DEM *amor* I.2 "deseo sexual"; I.3 "hacer el amor"; I.6 "persona amada". |
| **`mamacita` is a piropo, not a friend term** | DEM *mamá* 2: "Mujer guapa y de buen cuerpo", with a street-catcall example. |
| **`comadre` is a warm platonic female-to-female word in Mexico** | DEM *comadre* 2: "mujer que se relaciona con otra por una estrecha amistad" ("la comadrita Trinidad"). |
| **`carnala` is fraternal, not sexual** | DEM *carnal* 3 "(Popular) Hermano", 4 "(Popular) **Amigo**", example "vi a tu carnala". The word meaning "of the flesh" is among the most unambiguously platonic. |
| **`un montón` is register-marked, not romance-marked** | DEM *montón* 2 and 3 both tagged **(Popular)**. So *mucho* vs *un montón* is a colloquiality difference — making *un montón* the **safer** friend choice. |
| **Affection is already inside the verb** | DEM *extrañar* 1: "sentir la falta de algo o de alguien **querido por uno**". |
| **`novia` is defined romantically; `amiga` is not** | DEM *novio*: "mantiene relaciones amorosas… intención de contraer matrimonio". |

### Country variation — verifiable in two dictionaries

| Word | Mexico (DEM) | General / Spain (Wikcionario) |
|---|---|---|
| **chula** | adj. popular, "bonito, lindo y de buena apariencia"; example "es usted re chula" | *chulo* sense 1, marked **"Ámbito: España"**: "persona que lucra con el ejercicio sexual de terceros" — **proxeneta** |
| **comadre** | 2: "estrecha amistad" between women | 3: "**mujer cotilla y chismosa**"; no close-friend sense |

This is the "a term neutral in one market is romantic (or insulting) in another" claim, **measured rather than assumed**, and it is checkable by any reader.

### Hypothesis of mine that the evidence REFUTED

I expected **`amigo/amiga` to carry an "amante" sense** (as the pan-Hispanic DRAE does). **In the DEM it does not exist.** All four senses are platonic: friend; enthusiast of; *amigo de lo ajeno* (thief); *falso amigo* (linguistic term). Recorded in the body rather than quietly dropped.

### Marked as USAGE OBSERVATION, not dictionary fact

- **`corazón`, `mi vida`, `cielo`** — searched the DEM expecting a "expresión de cariño" sense; **there is none**. People use them as address terms; the dictionary does not register that.
- **Diminutives** — `amiguita` has **no DEM entry**; the diminutive is not lexicalised. The DEM's own *cariño* sense 3 example illustrates the ambivalence: "—Y no me digas 'gordito'. —No te enojes, te lo digo de cariño."

### Peer-reviewed, open access, both read in FULL TEXT via Europe PMC `fullTextXML`

1. **PMC12971648** — *Frontiers in Psychology*, 2026-02-24, "The social pragmatics of address in heritage Spanish: a virtual reality study". 44 heritage speakers, 21,882 words, 753 second-person tokens. **Female speakers signalled in-group solidarity in female-to-female interaction.** Perception/production gap: believed 68.45% *usted*, produced 49.40% — **speakers' intuitions about their own register are unreliable**, which is the warrant for checking a phrase rather than trusting your ear. *Limitation stated in body:* US heritage speakers (78.58% with a Mexico-born parent), not Mexico residents. (168,254 chars read.)
2. **PMC13595777** — *BMC Psychology*, 2026-08-10, fNIRS hyperscanning, 32 female + 30 male stranger dyads, Fast Friends paradigm. Perceived closeness rose with escalating mutual self-disclosure; gender moderated the effect. Authors' own limitation: fixed sequential task order confounds disclosure depth with habituation/fatigue. (131,814 chars read.) → **what builds closeness is disclosing something of yours, not adjectivising the bond.**

Subject test: both pass (Spanish address register; female friendship closeness). Swap test: neither could sit unchanged in a sibling's post — one is about Spanish forms of address, the other about female-to-female closeness. Generic context statistics: **zero**. Wikipedia as research: **zero**.

`capcheck.mjs` and `journalcheck.mjs` run from the repo root immediately before writing: 0 banned URLs, 0 domains at cap, 0 prior PMC citations in this batch.

---

## Phase 5 — targeting

- `categorySlug`: **`miss-you-across-miles`** — verified live against production Strapi (1 of 10 categories).
- `templateUrls`: **`/missyou-gf`** (mandatory) + **`/streak`** (the genuine alternative: a daily two-person check-in is friendship maintenance, not declaration).
- Slug checked against production Strapi: `total=0`, free.
- Cross-link contract: hub `frases-de-te-extrano`, plus `mensajes-de-te-extrano-para-whatsapp` and `imagenes-de-te-extrano-para-enviar`; the romantic siblings `frases-de-te-extrano-para-mi-novia` and `te-extrano-mucho-frases-para-el` are linked **to send the reader away**.

### Product disclosure — verified by me, 2026-09-28

`https://subhsandesh.in/missyou-gf` serves `og:locale=en_US`, `<html lang="en">`, and `og:title` **"Miss You Page for Your Girlfriend — Send a Love Letter"**. So the mandatory template is (a) in English and (b) **explicitly labelled for a girlfriend** — the exact framing this page tells the reader to avoid. Disclosed in Spanish body prose, with the honest recommendation to skip it if the label matters to her. (Its meta description also contains the word "Free"; deliberately not quoted, per the price guard.)

---

## Structural limitations carried into `batchMeta`

RAE unreachable on every route; Wayback 403; browser contention twice; Leipzig has no per-country Spanish; `corazón`/`vida`/`cielo` and diminutives are usage not dictionary; both papers' samples disclosed; first-party facts collided 14–25× across siblings so no numeric differentiation is available; `npm run facts` deliberately **not** run (it would orphan siblings' `factsUsed` mid-batch); Keyword Surfer DOM injection; `findpapers.mjs` missing from this batch directory (used the 2026-09-26 sibling's copy); `dem.colmex.mx` absent from `capExemptDomains`.

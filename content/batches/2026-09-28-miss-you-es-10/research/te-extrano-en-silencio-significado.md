# Research brief — `te-extrano-en-silencio-significado`

**VERDICT: WRITTEN.** `blogs/te-extrano-en-silencio-significado.json` emitted. `batch.json` untouched.

- Keyword: `te extraño en silencio significado` · region `mx-es` · body language Spanish (es-MX) · axis EXPLAINER
- Row status: **user-requested after an evidenced abort on 2026-09-28.** Not re-aborted, per instruction.
- Date measured: **2026-09-28**
- Supersedes: `../2026-09-26-miss-you-global-30/research/te-extrano-en-silencio-significado.md` (the abort brief). Its measurement is not repeated here; only what changed is.

---

## 1. SERP re-measured — route, date, and what moved

### 1a. `serp-ddg.mjs` — BLOCKED, and proved so with a control

| Call | Echoed `query:` | Result |
|---|---|---|
| `node scripts/serp-ddg.mjs "te extraño en silencio significado" --region mx-es` | `te extraño en silencio significado` ✓ | `(no results parsed)` |
| `node scripts/serp-ddg.mjs "clima ciudad de mexico" --region mx-es` (CONTROL, known demand) | `clima ciudad de mexico` ✓ | `(no results parsed)` |

The control fails identically, so this is the block described in lane-wide finding 20, not an empty SERP.
**No conclusion is drawn from the DDG route today.** One call each, no retries.

### 1b. Google `gl=mx&hl=es&pws=0&num=20`, real browser — run TWICE, identical

Self-authenticated on **content**, not on the navigate title: `silencio`, `extraño`, `significado` all present;
contamination markers `vermisse`, `özledim`, `tęsknię`, `saudade`, `manques`, `manchi`, `rindu` all absent;
page furniture Spanish (`Resultados de búsqueda`). Both runs returned the same nine H3s in the same order.

| # | Result | Host | Type | Music? |
|---|---|---|---|---|
| — | **Visión general creada por IA** occupies the top slot | google | AI answer | **no — see below** |
| 1 | Te extraño en silencio Grupo Firme — letra y significado | tiktok.com | UGC video | **YES** |
| 2 | Te extraño en silencio Grupo Firme - letra y significado | tiktok.com | UGC video | **YES** |
| 3 | Te extraño en silencio, porque ya entendí que extrañarte no … | facebook.com | Quote post | no |
| 4 | Extrañar en silencio es una forma profunda de amor. … | instagram.com | Quote post | no |
| 5 | Te Extrañaré en Silencio letra y significado | tiktok.com | UGC video | **YES** |
| 6 | Te extraño en silencio : r/POESIA | reddit.com | Poetry post | no |
| 7 | Su Significado De La Canción Te Extraño En Silencio | tiktok.com | Discover page | **YES** |
| 8 | Te extraño de la manera más callada que pueda existir … | facebook.com | Quote post | no |

**4 of 8 music. 8 of 8 UGC/social. ZERO editorial pages of any kind.** Eight is what was extractable and eight is
what is reported; ranks beyond that were not invented. A `brainly.lat/tarea/…` homework question also appeared in
the link set — someone asking the question as a question.

### 1c. Bing `mkt=es-MX&setlang=es`, real browser — the second route

| # | Result | Type | Music? |
|---|---|---|---|
| 1 | Significado de la canción TE EXTRAÑO (Luis Miguel) — LETRAS.COM | Lyric-meaning | **YES** |
| 2 | Anuel, Cazzu — Te Extraño En Silencio (Official Music Video) | Streaming | **YES** |
| 3 | Luis Miguel: ¿qué quiere decir la letra de su canción 'Te extraño'? | Lyric-meaning | **YES** |
| 4 | Te Extraño — Análisis \| Significado — Musica.com | Lyric-meaning | **YES** |
| 5 | 102 frases de extrañar a alguien para expresar lo que sientes | Quotes listicle | no |
| 6 | Te extraño en silencio, porque ya entendí… — Facebook | Quote post | no |
| 7 | Cuando un Hombre Dice «Te Extraño»: Significado y Qué Hacer al… | Advice blog | no |
| 8 | Te Extraño En Silencio — Flow Firme style (Music Video) | Streaming | **YES** |
| 9 | Grupo Firme — Te Extraño En Silencio Letra — Facebook | Lyrics | **YES** |

**6 of 9 music.** Bing is a different index and is labelled as such. The two non-music editorial results (#5, #7)
both answer the shorter head `te extraño`; **neither addresses `en silencio`.**

### 1d. Two corrections to the abort brief, from today's data

1. **The dedicated lyric publishers have been displaced on Google.** The abort recorded
   `letras.com/luis-miguel/26108/significado.html`, `oigo.com` and `musica.com` in the Google top slots. Today's
   Google run returns none of them; the "letra y significado" titles are now **TikTok clips**. They survive on Bing.
   Consequence: **there is no authoritative editorial incumbent left to outrank on Google** — the competition is
   UGC video and social quote posts.
2. **Google no longer answers this as a song question.** The abort recorded AI Mode answering it as a song
   question. Today's AI overview answers it **relationally**, verbatim: «Te extraño en silencio» significa echar de
   menos a alguien con una intensidad profunda y callada, sin decirlo, reclamarlo o hacerlo público», with
   sub-points «Amor sin demanda», «Ausencia aceptada», «Dolor en calma». **Its only cited sources are a Facebook
   post and a TikTok.** Three of the four People-Also-Ask questions are relational too
   (`¿Cómo saber si un hombre te extraña en silencio?`, `¿Qué significa te extraño de la manera más silenciosa?`,
   `¿Qué significa cuando una persona te dice "te extraño"?`); only the fourth asks for lyrics.

**What survives from the abort and is NOT re-litigated:** the query is genuinely music-contaminated; `significado`
sits inside the lyric vertical's own title template; the song ground is taken. The re-measure confirms the reading
and dates it — it does not overturn it.

---

## 2. The two taken grounds, and how the post stays off them

| Taken ground | Owner | How this post avoids it |
|---|---|---|
| The song | Grupo Firme / Anuel AA & Cazzu / Flow Firme / Luis Miguel, via TikTok, YouTube, Spotify, letras.com | The post **names no song, artist, album or lyric anywhere**, and the FAQ deliberately does not answer the lyrics PAA question. |
| The concealment thesis | `https://subhsandesh.in/blog/como-decir-te-extrano-sin-decirlo` — LIVE, `total=1` in Strapi. Its spine is the DLE's **«reticencia»** («callar algo y de ordinario con malicia»), «ojalá» + subjunctive, the diminutive's three values, and a 120-sentence «ojalá» census. | Read in full before drafting. **Different lemma** (`silencio`, not `reticencia`), **different question** (what the phrase means and whether to send, not how to phrase an indirect message), **different evidence** (an «en silencio» predicate census, not an «ojalá» mood census). It is linked in body prose with an explicit "we answered that separately, we do not repeat it here". |

---

## 3. The angle

> The page wins by being the only one that reads «te extraño en silencio» as **a decision not to send** rather than
> a vocabulary problem — grounded in the DLE's own gloss of the locución adverbial, a 100-sentence corpus census,
> and a measured send rate among people who wanted to write.

Three legs, each checkable:

1. **The DLE does not define «en silencio» as «sin hablar».** Its gloss is **«Sin protestar, sin quejarse.
   *Sufrir en silencio*»** — a locución adverbial about *not making a claim*. Every ranking result, and Google's own
   AI overview, assumes it means "without saying it". The entry also separates the noun's acepción 1
   («Abstención de hablar» — a decision) from acepción 2 («Falta de ruido» — a state).
2. **The silence attaches to the verb, not to the speaker.** Own census of 100 distinct Spanish Tatoeba sentences
   containing «en silencio»: 99 follow a predicate, **0 follow a verb of saying**. The predicates are *quedó* (9),
   *estar* (8), *mantuvo* (6), *permanecer* (3), then *comieron*, *cenaron*, *salieron*, *entraron*, *escuchó*,
   *trabajar*, *sufrir*. So the locution says **how** something is done. Corroborated at the lexical level in
   Leipzig `spa_news_2011_3M`: *silencio* rank 2,139 (3,160 hits) against *callado* rank 20,145 (204 hits).
3. **Not sending is the default, and everyone mispredicts it.** Communications Psychology 2024 (PMC11332216, read
   in full via `fullTextXML`): 90.9% had lost touch with someone they cared about; only 27.8% (Study 3, N=453) sent
   the message despite wanting to, expecting appreciation, having the contact details and being given the time;
   36.8% in Study 4 (N=604). Participants predicted 56.6% against an observed 27.5%. **Persuasion did not work**
   (F(2,450)=1.72, p=0.18; F(2,601)=1.93, p=0.15) — **rehearsal did**, 31% → 53% in Study 7 (N=194), because an old
   friend feels like a stranger (Study 5, N=288).
   PNAS Nexus 2026 (PMC13168892) adds that withholding is registered as a missed opportunity, felt as regret, and
   usually followed by switching to disclosing — so the silence is unstable.

---

## 4. Sources (5) — and the orchestrator claim that was corrected

| # | Source | Journal / instrument | Subject test | Read |
|---|---|---|---|---|
| 1 | `dle.rae.es/silencio` | RAE-ASALE (cap-exempt instrument) | ✓ the language | Full entry, headword confirmed in the real browser |
| 2 | `tatoeba.org/en/api_v0/search?from=spa&query="en silencio"` | Tatoeba (cap-exempt) | ✓ the language | 100 sentences counted one by one |
| 3 | `api.wortschatz-leipzig.de/.../spa_news_2011_3M/word/silencio` | Wortschatz Leipzig (cap-exempt corpus) | ✓ the language | Two lemma queries |
| 4 | `europepmc.org/article/PMC/PMC11332216` | **Communications Psychology**, 2024-04-23, CC BY | ✓ reaching out / not reaching out | **Full text** via `fullTextXML` |
| 5 | `europepmc.org/article/PMC/PMC13168892` | **PNAS Nexus**, 2026-04-24 | ✓ withholding vs disclosing | **Full text** via `fullTextXML` |

Two peer-reviewed, both open access, both read in full — no abstract-only citation in this post.
Zero generic context statistics. Zero Wikipedia in `sources`. Zero competitor links.
`capcheck.mjs` and `journalcheck.mjs` both run immediately before writing: no banned URL, no domain at cap 3, no URL
at cap 2. Journals named for the human count: **Communications Psychology** (new to this batch) and **PNAS Nexus**
(new to this batch, and a different journal from *PNAS*).

**Orchestrator claim overturned.** The prompt proposed "Dungan/Munguia Gomez/Epley 2022 in *Psychological Science*"
for "senders systematically underestimate how well a message would be received". The paper exists but its title is
**"Too Reluctant to Reach Out: Receiving Social Support Is More Positive Than Expressers Expect"**
(doi:10.1177/09567976221082942) — *receiving support*, not *receivers vs senders* — and SAGE is bot-challenged, so
it could not be read. Substituted Communications Psychology 2024, which is open access, readable in full, and about
the reaching-out decision itself, which is a closer fit to this angle than the suggested paper would have been.

---

## 5. Instruments — defects confirmed and one re-verified first-hand

- **`serp-ddg.mjs` is blocked today**, proved with a control (§1a). Lane-wide finding 20 reproduced.
- **Tatoeba `api_v0` quoted search is not exact-phrase** (BRIEF §14). Its global counter for `"en silencio"` reported
  127; that number is **not used**. All 100 sentences were counted from their own texts.
- **`rae.es` / `dle.rae.es` need the real browser.** Read successfully there; headword `silencio` confirmed on the
  page (the page also showed «Palabra del día lunes, 28 de septiembre de 2026», which dates the read).
- **No browser-contention incident occurred in this run.** Every read was authenticated by content markers before
  anything was recorded, per BRIEF §14.
- **Leipzig co-occurrence endpoint 404s** (`/ws/cooccurrences/<corpus>/coocurrences/<word>`); the `/ws/words/` lemma
  endpoint works. Minor, recorded so the next row does not spend time on it.
- **Product defect re-verified first-hand, not relayed** (lane-wide finding 30): `https://subhsandesh.in/missyou-gf`
  serves `html lang="en"` and `og:locale=en_US` with an English `og:title` and `og:description`. Disclosed in Spanish
  body prose and in an FAQ. Its `og:description` carries a free-tier claim — deliberately **not** quoted or
  paraphrased anywhere, and `pricecheck-intl.mjs` passes.

---

## 6. First-party facts and the mandatory caveats

Phase 0 satisfied from `facts-snapshot.md` (pinned; `content/facts.md` not regenerated). Six lines used, two of them
inside the first 150 words.

The load-bearing reading — and per lane-wide finding 17 the reading is the only differentiator left, since all 12
fact lines are collided 14–25 times across the siblings — is that **88.8% published and shared means 11.2% written
and never sent: 24 of 214 pages.** That is the keyword's own behaviour, measured.

Mandatory caveats carried **in Spanish body prose**, not only in the audit:
- n = 214 over two months from 2026-07-28; no seasonal reading.
- The database records which template was opened, never who received it, and is not segmented by language or
  country — **no figure here describes Mexico.**
- The linked product page is in English.

Not cited, so their caveats do not arise: any picker-with-default field (city, background music, "together since")
and `viewCount`.

---

## 7. Checks run

- Schema validator from `.claude/skills/blog-optimisation/references/article-json-schema.md` (**that path; it does
  not resolve from the repo root**) → `OK te-extrano-en-silencio-significado.json (1616 words)`.
- `node content/batches/2026-09-28-miss-you-es-10/pricecheck-intl.mjs` → no cost claim in any guarded language.
- `node content/batches/2026-09-28-miss-you-es-10/capcheck.mjs` → clean.
- `node content/batches/2026-09-28-miss-you-es-10/journalcheck.mjs` → 14 PMC citations, 14 resolved, none over cap.
- `node scripts/verify-batch.mjs content/batches/2026-09-28-miss-you-es-10` → **no finding naming this slug**;
  the only reported problem is the batch-wide `batch.json` line, which BRIEF §9 says to ignore and which this row was
  instructed not to touch.
- Slug check: `api/articles?filters[slug][$eq]=te-extrano-en-silencio-significado` → HTTP 200, **`total=0`, free.**
  Category `miss-you-across-miles` confirmed present in the live category list.
- Audit arithmetic: 46 passed + 4 failed = 50, disjoint, strings byte-verbatim from `publish-checklist.md`; extra
  self-checks kept in `additionalChecks`.

## 8. Structural failures left open (not fixable today)

1. `Every internal link is a real URL from TEMPLATE_LINKS` — the batch's cross-link contract mandates three sibling
   **blog** URLs that are not in `TEMPLATE_LINKS`. The three template links resolve.
2. `Slug is not already taken in Strapi` — passes for this slug; recorded because the three sibling blog anchors are
   unpublished rows of this batch (`total=0`) and 404 until it ships.
3. `The post contains at least one claim none of the top 5 pages make` — passes on substance, but there are no five
   comparable pages: the measured SERP contains no editorial page at all.
4. `H2s map to the fan-out sub-queries identified in Phase 2` — three of four PAA questions answered; the fourth is
   a lyrics request the post deliberately refuses, because serving it would put the page on the taken music ground.

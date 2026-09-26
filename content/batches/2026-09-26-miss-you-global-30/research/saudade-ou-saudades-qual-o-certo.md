# Research brief — saudade ou saudades qual o certo
slug: `saudade-ou-saudades-qual-o-certo` · region `br-pt` · bodyLanguage pt-BR · tier `A-grammar`
Researched 2026-09-26.

## 1. SERP measurement

**`node scripts/serp-ddg.mjs "saudade ou saudades qual o certo" --region br-pt --n 10` FAILED.**
Recorded negative, in full:
- First 3 runs: HTTP 200 but `(no results parsed — DDG markup may have changed)`.
- Direct probe of `html.duckduckgo.com` and `lite.duckduckgo.com` (POST, pt-BR headers):
  **HTTP 202 with an anomaly/challenge body**, 14,259 bytes, no `result__a`.
- Then **HTTP 403**, then **`UND_ERR_CONNECT_TIMEOUT` to html.duckduckgo.com:443** on
  12 consecutive retries over ~6 minutes in a background wrapper. The egress is blackholed,
  almost certainly because six agents in this wave hit DDG at once.
- Fallbacks tried and what they returned:
  `mojeek` 200 / 2 off-site hosts (a stub) · `bing` 200 / 92 KB JS shell, **0** `b_algo`,
  0 `<cite>` · `ecosia` 403 · `search.brave.com` **429** · `yandex` 200 / 0 extractable hosts ·
  six SearXNG instances (searx.be, priv.au, searxng.site, opnxng.com, search.inetol.net,
  search.bus-hit.me) — five returned 0 parseable results, one returned blogspot and
  pornography, i.e. garbage · `r.jina.ai` **403 Cloudflare** on both Google and DDG targets.

**Measured instead: Google Brazil, live, in a browser** —
`google.com/search?q=saudade+ou+saudades+qual+o+certo&gl=br&hl=pt-BR&pws=0&num=20`,
read 2026-09-26. This is a genuine market-served SERP, stronger evidence than DDG's proxy.
Organic web results, in order:

| # | Result | Type | Strength |
|---|---|---|---|
| 1 | brasilescola.uol.com.br — "Saudade ou saudades: qual o correto?" | UOL-owned education portal | **strong** |
| 2 | quillbot.com/pt — "É saudade ou saudades?" | AI-writing-tool blog | medium (high DA, thin page) |
| 3 | brainly.com.br — "Está correto: Saudade ou saudades?" | UGC Q&A, 18/09/2023 | **weak** |
| 4 | dicio.com.br — "Saudade ou saudades" | dictionary site, Dúvidas de Português | medium |
| 5 | clubedoportugues.com.br — "Sinto saudade ou saudades?" | one-author blog, 17/09/2017 | **weak** |
| 6 | open.spotify.com — Pasquale Cipro Neto, "Sentimos 'saudade' ou 'saudades'?", 24/03/2026 | podcast episode page, no article text | **weak** |

Six organic text results before pagination. **Weak count: 3 of 6** clearly weak (UGC, a
2017 one-author blog, a podcast page with no article), plus two that are a tool blog and a
dictionary-doubts page rather than editorial. **One** genuinely strong national publisher.
Google also fills the middle of the page with a People Also Ask box, a `Vídeos` block and a
`Vídeos curtos` block (TikTok, YouTube ×2, Instagram, Facebook) — Google is padding with
video, which is what it does when the text answers are thin.

**Gate 4: PROCEED.** This is not the `D-listicle` picture the orchestrator warned about and
it is not the `mensagem de saudade para namorado` SERP a sibling measured (1 weak in 8,
eleven established publishers → abort). It is forum / dictionary-scraper / video ground,
exactly what tier `A-grammar` predicted.

**Fan-out sub-queries harvested from the live SERP** (People Also Ask + "Outras pessoas
pesquisaram"): *Estou com muita saudade ou muitas saudades?* · *É certo falar saudade?* ·
*"minhas saudades" ou "minha saudade"?* · *É correto falar saudades sua?* · *Quanta saudades
ou quantas saudades* · *Muitas saudades está correto* · *Muita saudades* · *Saudade é com u
ou com l* · *Saudade ou saudades eterna*.

## 2. The checkable error in a ranking result

**Brasil Escola (#1 on Google Brazil), `brasilescola.uol.com.br/gramatica/saudade-ou-saudades.htm`.**
Its recommendation, verbatim: *"Nossa sugestão é que você utilize esses substantivos no plural
e no singular, não há problema algum nisso, **desde que você não altere o sentido principal
por eles transmitidos** e respeite a concordância…"*

That rule is exactly the case where the two forms are **not** interchangeable, and the page
never says so. Three named dictionaries record senses that exist **only** in the plural:
- **Priberam** files sense 6 *"Boas lembranças ou recordações (ex.: a antiga chefe não deixou
  saudades)"* and sense 7 *"Cumprimentos a alguém (ex.: mande-lhe saudades minhas)"* under the
  label **nome feminino plural**.
- **Michaelis** gives `saudades sf pl` its own definition: *"Lembranças ou cumprimentos
  afetuosos de quem sente a ausência de outrem."*
- **VOLP (ABL)** registers **`saudades s.f.pl.`** as a headword of its own, not as an
  inflection of `saudade s.f.`

Second, related, and checkable: Brasil Escola and Dicio both frame the question as an
unresolved dispute (*"não é consenso nem mesmo entre os linguistas"*, *"não havendo consenso
entre os estudiosos da língua"*). **Neither mentions the VOLP**, the ABL's own orthographic
vocabulary, which settles the registration question outright. I verified the VOLP entries
myself through the ABL's own search endpoint (below), not from memory.

Third: **dicio.com.br and escrevercerto.com run substantially the same text** — both carry
*"a tendência atual é o uso do plural, não em todos os substantivos abstratos, mas
especialmente nas palavras saudades, ciúmes e lembranças. Segundo uma perspectiva mais atual
e flexível da língua, estes substantivos podem ser usados no singular ou no plural, desde que
não haja alteração do sentido principal que transmitem."* The SERP is, in part, one text.
(In fairness: escrevercerto.com's claim that both forms are registered in the ABL's VOLP is
**correct** — I checked it and it holds. It is the only ranking page that gets there.)

## 3. Instruments — every one verified to resolve before a section was built on it

| Instrument | URL actually fetched | Status | What it gave |
|---|---|---|---|
| VOLP / ABL | `academia.org.br/ajax/abl/buscar-palavras?form=vocabulario&palavra=saudade` (and `…=saudades`) | 200 JSON | `saudade` → `s.f.`; `saudades` → `s.f.pl.` — **two separate headwords**. Also `Saudades` (município de Santa Catarina) and `Saudade do Iguaçu` (município do Paraná), gentílico `saudadense`, from the Vocabulário de Topônimos e Gentílicos. |
| Priberam pt-BR | `dicionario.priberam.org/pt-br/saudade`, `/pt-br/saudades` | 200 | senses 1–2 emotional, **3–5 botanical** (*Scabiosa atropurpurea*), **6–7 `nome feminino plural` only**. Origin: *latim solitas, -atis, solidão*. |
| Priberam pt-PT | `dicionario.priberam.org/pt-pt/saudades` | 200 | **identical** senses, identical plural-only 6–7, identical etymology; only the grammar label differs (`nome feminino` vs the pt-BR page's `substantivo feminino`). |
| Michaelis | `michaelis.uol.com.br/busca?…palavra=saudade` | 200 | `saudade sf` 1–5; **`saudades sf pl`** with its own gloss; expressions *Deixar na saudade*, *Morrer de saudade*. |
| Ciberdúvidas | `/consultorio/perguntas/saudade-saudades/2998` | 200 | Carlos Marinheiro, **24/12/1998** — the answer quoted in the post. |
| Ciberdúvidas | `/consultorio/perguntas/saudades-de-ti--saudades-tuas/4298` | 200 | F. V. Peixoto da Fonseca, **13/10/1999** — *"Tanto faz"* on *saudades de ti* vs *saudades tuas*. |

**Corrections to the orchestrator's framing, verified:**
1. The prompt's *"the answer is probably 'both are correct, and they are not the same thing'"* **holds** — and the difference is lexical, not stylistic: the plural has senses the singular lacks.
2. The prompt's suggestion that the plural might be an *intensifier* is **not supported by any instrument I read.** No dictionary marks it as intensive. What the corpus shows is frame-conditioned selection, not intensity.
3. Priberam does redirect to `/pt-pt/` on a bare `/saudade`. I re-fetched both variant paths explicitly, per the coordinator's correction. They do not differ.
4. **Corpus do Português (`corpusdoportugues.org`) was not used.** It is a session/login corpus with no scripted query route and no public frequency endpoint; building a section on it would have been an unverified claim. Recorded negative.

## 4. The frequency measurement (this is the original contribution)

**Google Books Ngram Viewer JSON endpoint**, `corpus=pt-2019`, `smoothing=0`, read 2026-09-26.
Figures are the mean of the yearly relative frequencies over the stated window, and the
percentages are each form's share of the pair.

| Pair | Window | Singular | Plural |
|---|---|---|---|
| `saudade` / `saudades` | 1990–2019 | **83.3%** | 16.7% |
| `a saudade` / `as saudades` | 1980–2019 | **85.7%** | 14.3% |
| `saudade de` / `saudades de` | 1980–2019 | 45.8% | **54.2%** |
| `com saudade` / `com saudades` | 1980–2019 | 27.5% | **72.5%** |
| `que saudade` / `que saudades` | 1990–2019 | 30.9% | **69.1%** |
| `matar saudade` / `matar saudades` | 1980–2019 | **below corpus threshold — no data** | attested, 6.08e-11 |

The 3-grams *matar a saudade*, *matar as saudades*, *com saudade de*, *com saudades de*,
*sinto saudade(s)*, *tenho saudade(s)*, *deixar saudade(s)*, *saudade(s) de você* all returned
**zero series**. This is not an API failure — the control 3-gram *de que a* returned a series
normally — so those strings fall below the pt-2019 corpus's inclusion threshold.

**Leipzig Corpora Collection**, `api.wortschatz-leipzig.de`, corpus `por_news_2013_1M`,
read 2026-09-26: `saudade` **freq 235, rank 7,239**; `saudades` **freq 150, rank 10,138** →
61.0% / 39.0%. `availableCorpora` lists **exactly one** Portuguese corpus (104 corpora total);
`por_br_web_2011_1M`, `por_pt_web_2011_1M` and hyphenated variants all **404**.

**Limits, all stated in the post:** both corpora are edited books and news, not messaging;
neither is split by variety, so **neither can settle the pt-BR / pt-PT question**; the bare
`saudade` unigram also absorbs the plant and toponym senses; Ngrams exposes relative
frequency, not raw counts.

## 5. The pt-BR vs pt-PT claim — the answer is "unmeasured", not "true"

The widely repeated claim (pt-PT prefers the plural, pt-BR the singular) is **not recorded by
any instrument I checked**: not the VOLP, not Michaelis, not Ciberdúvidas answering that exact
question twice, and not Priberam — whose pt-br and pt-pt pages for *saudade* and *saudades*
I fetched separately and found identical, on a dictionary that **does** flag regional
differences when they exist (its own word-of-the-day carries *"Grafia no Brasil: alanita /
Grafia em Portugal: alanite"*). Not one of the six ranking pages raises the question at all.

A corpus that could settle it exists — **CoPEP**, ~40 million words, *"equilibrado entre as
variedades português brasileiro e português europeu"* (Kuhn & Ferreira, *DELTA* 36(2), 2020,
doi:10.1590/1678-460x2020360209) — but it is a lexicographic resource behind a dictionary
project, not a public frequency box, and the two corpora that **do** answer a query
(Ngrams `pt`, Leipzig `por`) merge the varieties. So: **not verified, not refuted, and the
reason it stays unverified is itself the finding.**

## 6. Papers — what was reachable

- **Neto & Mullet (2014), "A Prototype Analysis of the Portuguese Concept of Saudade",
  *Journal of Cross-Cultural Psychology*, doi:10.1177/0022022113518370.** Unpaywall: `is_oa: false`.
  **Abstract only**, read through the Crossref API. Used for one narrow point: participants
  produced **182 separate prototypic features** of *saudade*, ~7 each, and rated valence from
  negative to positive — i.e. speakers decompose the concept into discrete, enumerable parts,
  which is precisely what the "abstract nouns cannot be counted" objection denies.
- **Kuhn & Ferreira (2020), *DELTA* 36(2)** — peer-reviewed, open access (SciELO). Abstract read
  through Crossref; `scielo.br` returned **HTTP 500** on the article page on three attempts.
- **Blocked, recorded:** `glossa-journal.org` (Glossa 5788, *Object mass nouns and subkind
  countability*) and `jpl.letras.ulisboa.pt` (*Journal of Portuguese Linguistics*, 10.5334/jpl.17,
  *Bare Nominals and Number in Brazilian and European Portuguese*) are **both behind an Anubis
  proof-of-work challenge** — "Making sure you're not a bot", version 1.22.0. Both are OA and
  both would have been better sources than what I could read. A sibling in the previous batch
  hit the same wall on Glossa; this is now independently reproduced on a second Ubiquity host.
  `search.scielo.org` 403s a scripted UA. SAGE landing pages 403 as the BRIEF says.

## 7. Split from the two sibling saudade rows

- `o-que-significa-saudade` — **meaning**. This post does not define *saudade*, does not do
  etymology beyond one clause, and does not touch untranslatability.
- `saudade-em-ingles-como-se-diz` — **translation**. This post contains no English rendering.
- This row is **grammar and usage only**: which form to write, why both are registered, what
  the plural adds, and what a corpus says about each frame.
- Neither sibling file existed in `blogs/` at 2026-09-26 when this was written, so the
  cross-links are stated in `structuralLimitations` rather than placed in the body.
- The **English** sibling `i-miss-you-in-portuguese` (batch 2026-09-25) already carries one
  ~150-word H2 on this question and reaches Priberam senses 6–7. This post is not its
  translation: it is written for a Brazilian who already speaks Portuguese, and it adds the
  VOLP registration, the Michaelis plural entry, the two Ciberdúvidas rulings, the pt-br/pt-pt
  Priberam comparison and the corpus measurement, none of which appear there.

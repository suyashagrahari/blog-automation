# Research brief — `eu também sinto sua falta`

- **Slug:** `eu-tambem-sinto-sua-falta` (native slug; the orchestrator's original English slug was corrected before this row started)
- **Body language:** Portuguese (pt-BR) · region `br-pt` · category `miss-you-across-miles`
- **Lane:** A-reply (wave 3)
- **Date measured:** 2026-09-27

---

## 0. The split from the four Portuguese siblings, in one sentence

The four siblings on disk all answer *what the missing is* or *how to render it in
English* — `o-que-significa-saudade` (the Real Academia Galega registers *saudade* as
Galician with two exact synonyms), `saudade-ou-saudades-qual-o-certo` (the VOLP holds
two headwords), `saudade-em-ingles-como-se-diz` (Priberam sense 7 has no English gloss
in its own translation tool), `sinto-sua-falta-em-ingles` (97.1% of 210 Tatoeba pairs
render with *miss*; Michaelis's monolingual edition does not lemmatise *sentir falta*);
**mine is the only one about the REPLY, and the reply is not a lexical question at all
— it is a question about where a focus particle attaches**, which none of the four
touches. Split written honestly; row proceeds.

---

## 1. SERP — measured, routes named

### Route A — `serp-ddg.mjs`, PARSED CLEANLY (no browser, no contention exposure)

`node scripts/serp-ddg.mjs "eu também sinto sua falta" --region br-pt` — echoed
`query: eu também sinto sua falta`, returned 10 results. DDG drops *também*: the result
set is the bare-phrase SERP.

| # | Host | Type |
|---|---|---|
| 1 | pensador.com | quote listicle |
| 2 | pensador.com | quote listicle |
| 3 | mundodasmensagens.com | message listicle |
| 4 | **letras.mus.br/ferrugem/sinto-a-sua-falta** | **song lyrics** |
| 5 | pt.scribd.com | uploaded PDF of messages |
| 6 | **letras.mus.br/bea/eu-sinto-sua-falta** | **song lyrics** |
| 7 | frasesdobem.com | message listicle |
| 8 | msglindas.com.br | message listicle |
| 9 | mensagensmagicas.com.br | message listicle |
| 10 | msglindas.com.br | message listicle |

Weak count 10 of 10 actually seen, but the **page type is wrong for a blog**: 8 message
farms + 2 lyrics pages.

A quoted re-run (`"eu também sinto sua falta"`) returned only 3, with
**linguee.com.br at #1**. A third DDG call (`como responder eu também sinto sua falta`)
returned "(no results parsed)" — the documented intermittency. Not retried.

### Route B — Google `gl=br&hl=pt-BR&pws=0`, real browser, three loads

Self-authenticated on content each time: page title carried my query and the body
carried `linguee.com.br/.../eu+também+sinto+sua+falta`. No sibling-language leakage.

**B1 — unquoted `eu também sinto sua falta`, 18 organic results seen.**
**SONG CONTAMINATION CONFIRMED: 7 of 18 are music** — YouTube ×5 (Ferrugem "DVD Prazer,
Eu Sou Ferrugem: Sinto Sua Falta"; Banda Encantu's; Amado Batista; Leo do Cerrado;
Marília Mendonça), Spotify (Lil Chainz), letras.mus.br (Ferrugem). Plus 6 social posts
(Instagram ×3, Facebook ×3), 3 quote farms, 1 Reddit, 1 Linguee. `sinto sua falta
ferrugem` is exactly the known song the brief warned about, and it is here.

**B2 — quoted `"eu também sinto sua falta"`, 14 organic results seen. ZERO music.**
Adding *também* removes the song contamination completely — itself a finding.

| # | Host | Type | Weak? |
|---|---|---|---|
| 1 | pensador.com | quote farm | yes |
| 2 | tiktok.com | short video | yes |
| 3 | zazzle.com.br | greeting-card product listing | yes |
| 4 | instagram.com | social post | yes |
| 5 | zazzle.com.br | product listing | yes |
| 6 | instagram.com | social post | yes |
| 7 | tiktok.com | short video | yes |
| 8 | instagram.com | social post | yes |
| 9 | pensador.com | quote farm | yes |
| 10 | quora.com — "Is there a difference between replying 'I miss you too' and 'you are also missed'" | Q&A, English | yes |
| 11 | linguee.com.br | translation aggregator | yes |
| 12 | reddit.com | forum, English | yes |
| 13 | wikihow.com | English how-to, machine-titled into PT by Google | yes |
| 14 | preply.com | English tutoring blog | yes |

**Weak count: 14 of the 14 I actually saw.** Not one Portuguese-language editorial or
grammar page. Google is serving English pages with Portuguese-rendered titles.

**B3 — confirm re-run of B2.** Identical canonical result set; the only diff was
per-request `srsltid` tracking tokens on the same three Zazzle URLs. Two runs agree.

**B4 — reply-tail control, `"eu também sinto sua falta" OU "também sinto sua falta"
como responder`.** 12 results: Reddit ×3, Quora, wikiHow (EN + pt.wikihow), Medium,
Preply, Yahoo lifestyle, TikTok, kylian.ai. 12 of 12 weak, all forums/aggregators or
translated English.

Bing and Brave were not needed and were not run; saying so rather than implying breadth
I did not buy.

### Gate verdicts

- **Gate 2 (page-type match): PARTIAL.** The bare phrase `sinto sua falta` is a song
  SERP and a message-farm SERP — a blog cannot win it. **Retargeted to the exact
  keyword with *também*, where the music disappears and the surviving informational
  results (Quora, Linguee, Preply, wikiHow) are all about the reply.** The post is
  built for that reading and says which SERP it measured.
- **Gate 4 (winnability): PASS, comfortably.** 14 of 14 weak on the retargeted SERP,
  12 of 12 on the reply tail, and zero Portuguese-language explainers in either.

---

## 2. The lane question, answered — and the answer is a fourth cell

The three siblings landed on three different answers. Portuguese is none of them.

### Instrument 1 — Michaelis, *Dicionário Brasileiro da Língua Portuguesa*, entry *também*, adv.

Read 2026-09-27 at `michaelis.uol.com.br/busca?r=0&f=0&t=0&palavra=também`; headword on
the page confirmed as *também*.

- **Sense 1** — "Indica que uma coisa é igual ou semelhante a outra já mencionada":
  *Vários professores vão sair em férias.* ***Eu também*** *vou sair alguns dias.*
  → *também* sits immediately after the subject pronoun and equates the SUBJECT to
  the previously mentioned professors.
- **Sense 2** — "Indica inclusão de uma coisa em outra": *Nessa fase, escreveu dois
  romances e,* ***também****, um livro de contos.* → *também* precedes and selects the
  OBJECT.

**Michaelis's own senses 1 and 2 are the minimal pair** — subject-associated vs
object-associated — the same structure the Italian sibling found in Treccani `anche`
1.a. But Michaelis states no positional rule; the positions in the two examples differ
because the examples differ.

### Instrument 2 — Priberam, `/pt-br/também` (requested `/pt-br/` explicitly)

adv. 1. Do mesmo modo. 2. Igualmente, conjuntamente. conj. 3. Por isto, como
consequência de tal. **No examples. No positional rule. A clean negative**, exactly as
the Spanish row found with the RAE.

Its translation aid `/Traduzir/EN/também` gives *also; too; so; likewise; as well* —
five English words, none of which is scope-marked.

### Instrument 3 — Aulete, *também*

Eight senses. Sense 1 *Queria viajar logo, e o irmão* ***também*** and sense 7
*Minhas mãos tremiam, e as dela* ***também*** both put a post-posed *também* after a
bare subject NP and both select the subject. Sense 4 is the explicative-reinforcement
one; sense 8 is an interjection of displeasure.

### Instrument 4 — the peer-reviewed answer, and it overrules the adjacency intuition

**Alfa: Revista de Linguística** 68 (2024), "Uma análise semântica de 'também' com uso
aditivo no português brasileiro", `doi.org/10.1590/1981-5794-e14829`, open access,
**full text read** at `scielo.br/j/alfa/a/TJPFrrSVJkp5SKwq6vS7vvR/?lang=pt`.

1. Its opening pair for the additive particle is **(1a) *João foi na festa também.*
   (1b) *João também foi na festa.*** — presented as **two positions of the same
   particle**, not two scopes.
2. It states the additive *também* "apresenta maior liberdade sintática e não requer
   nenhuma entoação específica".
3. Following **Krifka (1998), "Additive particles under stress"**, it gives (14a)
   *Péter provavelmente foi na exposição, tambèm* vs (14b) *Peter provavelmente foi na
   exposíção, tambèm* — **identical word order, different phrasal accent, different
   scope**: in (14a) Peter joins the list of people who visited the exhibition, in (14b)
   the exhibition joins the list of places Peter visited.
4. Its own proposal is that *também* (i) creates a list and (ii) **"direciona o foco,
   talvez com o auxílio (aparentemente opcional) de acentos frasais"**.
5. Its translation of English "Me too" (ex. 7) is ***Eu também*** — nominative.

**THE ANSWER: in Brazilian Portuguese the additive *também* has free syntactic position
and its target is selected by contrastive accent, not by word order.** That is a fourth
cell, distinct from Italian (position selects), French (clitics block it, wide scope by
default) and Spanish (no rule at all).

**The consequence that matters for the reply:** accent does not survive into a typed
message. So *sinto sua falta também*, written, is as ambiguous as English "I miss you
too" — and **the only disambiguator available in writing is putting *também* against an
overt subject pronoun: *eu também*.**

### Instrument 5 — DELTA (prosody is the carrier, and it is multimodal)

**DELTA — Documentação e Estudos em Linguística Teórica e Aplicada** 38(3), 2022,
"Focus types in Brazilian Portuguese: Multimodal production and perception",
`scielo.br/j/delta/a/v7bX9HSyb7jzSYChDwSR8Jw/`, open access, **full text read**.
80 utterances (4 focalised elements × 5 focus types × 4 speakers), each presented in
audio-only, visual-only and audiovisual — **240 stimuli**. Contrastive focus is
confused when visual cues are presented alone and is identified at higher rates in the
audiovisual condition than audio-only. Neither channel exists in a text message.

---

## 3. Tatoeba — every hit inspected, survivors reported

`tatoeba.org/en/api_v0/search?query="…"&from=por&to=eng`. Tokenised, so every returned
sentence was re-filtered on exact substring; both numbers are reported.

| Query | Tokenised total | Exact-substring survivors |
|---|---|---|
| `eu também sinto` | 4 | **4** |
| `também sinto` | 5 | **5** |
| `sinto sua falta` | 6 | **6** |
| `sinto a sua falta` | 3 | **3** |
| `sinto falta` | 23 | **22** |
| **`sinto sua falta também`** | **0** | **0** |
| `eu também te amo` | 3 | **3** |
| `também te amo` | 4 | **4** |
| `você também` | 101 | 20 of 20 fetched |
| `a mim` | 141 | 30 of 30 fetched |
| **`a mim também`** | **0** | **0** |
| **`me faz falta`** | **0** | **0** |
| **`você faz falta`** | **0** | **0** |
| **`me fazes falta`** | **0** | **0** |
| `fazes falta` | 5 | **0** |
| `faz falta` | 5 | **3** |

The phrasing was varied before any zero was recorded, per the brief: `a mim também`
returns 0 while the bare `a mim` returns 141, so the zero belongs to the collocation,
not to the query.

**The paradigm, three consecutive contributed IDs:**

- [8564511] *Eu sinto falta de Tom.* → "I miss Tom."
- [8564499] ***Também** sinto falta de Tom.* → "I miss Tom, too."
- [8564507] ***Eu também** sinto falta de Tom.* → "I miss Tom, too."

**Both Portuguese orders collapse into one English string.** English cannot keep them
apart; Portuguese writers keep them apart by moving one word.

**The closest hit to the keyword:** [1299018] *Acho que* ***eu também*** *sinto saudade
de você.* → "I guess I miss you too."

**The reply template:** [4922328] *"Eu te amo." "**Eu também** te amo."* → `"I love
you." "I love you too."` — the dialogue pair, overt *eu* + *também*.

**Post-posed order: zero.** `sinto sua falta também` is unattested while `eu também
sinto` and `também sinto` are both attested. That is the measurement behind the
recommendation.

### The dative counter-trap: Portuguese does NOT have it

The Spanish row found 48 strict «a mí también», none with the speaker as nominative
subject, answering *me haces falta*. Portuguese has no such cell:

1. **«a mim também» = 0 in Tatoeba**, against 141 for the bare «a mim».
2. **Priberam's `/pt-br/falta` entry (112 KB read) carries no *fazer falta* locution at
   all** — `à falta de`, `em falta`, `falta de chá`, `na falta de`, `ter falta de pau`,
   and no *fazer falta*.
3. **Michaelis's monolingual *falta* entry does carry it, and glosses it:
   "Fazer falta: fazer sentir uma ausência, carência, ou a necessidade, valor e
   importância de uma pessoa MORTA."** Bereavement, not a partner in another city.
4. **Michaelis's own PT-EN edition gives exactly one *fazer falta* example and it is
   inanimate:** *isto não me faz falta / **I can manage without it***. Not "I miss it".
5. The 3 exact `faz falta` survivors in Tatoeba are *Como faz falta meu computador*,
   *Como o meu computador faz falta* (a computer, twice) and *O que te faz falta?*
   ("What did you miss?"). **Not one has a person as subject.**

**Cross-Romance finding: the Spanish dative trap does not transfer. Portuguese's reply
is nominative — *eu também* — and Michaelis's PT-EN edition glosses it "So am I"**
(*está com fome? eu também / are you hungry? So am I*), while Spanish's is dative and
never nominative. The two languages sit on opposite sides of the same question.

### Subject reduplication: it does NOT work, and the reason is documented

French gets precision from *Toi aussi, tu me manques*. The literal Portuguese
transposition is ***Você também**, eu sinto sua falta* — and that string collides with a
different, documented *também*. Alfa 2024 example (3) is ***Você também**, hein, nem pra
tomar cuidado com onde parar o carro* and example (5) *Você também, hein, foi na festa
na véspera da prova*, classified as the **expressive** *também*, which "requer um
indivíduo como argumento" and "carrega um conteúdo de **desaprovação**".

So the French trick lands, in Portuguese, on a reproach. Structurally it also cannot
apply: in *sinto sua falta* the addressee is not the subject but a possessor inside the
object, so there is no subject to reduplicate.

**Second trap, same source:** sentence-initial *também* has an interjective/causal use
("mas é claro", "é óbvio") whose "posição sintática [é] sempre inicial" — Alfa ex. (4a)
*— O João chegou tarde pra caramba em casa. — **Também**, ele foi na festa.* So a bare
*Também sinto sua falta* opening a reply is structurally ambiguous between the additive
and the causal readings, resolved only by intonation the message does not carry.

---

## 4. The checkable error in a ranking result

**Linguee, `linguee.com.br/portugues-ingles/traducao/eu+também+sinto+sua+falta.html`,
ranked #1 organic on the quoted Google br-pt SERP and #1 on the quoted DDG run.**
Read 2026-09-27 (page is served `charset=iso-8859-15`).

Its own dictionary panel gives, in the same block:

- `sua falta f — **his absence** s`
- `sua pron — **your** pron · his pron`

**The page contradicts itself on one screen**: *sua* alone is glossed "your", but
*sua falta* — the exact substring of the query, in a phrase addressed to whoever wrote
to you — is glossed "**his** absence". A reader who trusts the top result is handed the
third person for a second-person reply. Checkable against Michaelis PT-EN's *sentir
falta de* → "to miss: *vou sentir muito **a sua falta** / I shall miss **you** very
much*", which glosses the same phrase second-person.

**Bonus from the same page**, which no ranking result discusses: its Europarl example
carries a third Portuguese order — ***Também eu** gostaria de desejar um feliz
regresso…* → "**I too** would like to welcome…" — and its two other examples, *Eu
também sinto falta da comida* → "I also miss the food" and *Também sinto falta dos
sorrisos* → "I also miss the warm smiles", **both collapse into the same English
"also"**. Linguee's own corpus demonstrates the asymmetry the post is about.

---

## 5. Gap analysis

**Table stakes on the retargeted SERP:** give the phrase, give an English rendering,
give reply variants.

**The gap — what none of the 14 covers:**
1. Where *também* attaches, and that the answer is "the accent, not the order".
2. That *sinto sua falta também* is unattested in the parallel corpus while the other
   two orders are attested.
3. That *Você também, …* collides with the expressive *também* of disapproval.
4. That Portuguese has no «a mim também» and its *fazer falta* is a bereavement idiom.
5. The Linguee person error, on the page ranked above everything else.

**Angle:** the only page on the measured br-pt SERP that answers where *também* attaches
in the reply, using a peer-reviewed Brazilian semantics paper that says position is free
and accent decides, plus three measured zeros nobody has published.

---

## 6. Sources, with journal names and what was read

| Source | Journal / publisher | Read |
|---|---|---|
| `scielo.br/j/alfa/a/TJPFrrSVJkp5SKwq6vS7vvR/` | **Alfa: Revista de Linguística** (UNESP), 68, 2024 | **full text** |
| `scielo.br/j/delta/a/v7bX9HSyb7jzSYChDwSR8Jw/` | **DELTA** (PUC-SP), 38(3), 2022 | **full text** |
| `michaelis.uol.com.br/…palavra=também` (r=0) | Melhoramentos, monolingual BR | full entry |
| `michaelis.uol.com.br/…palavra=também` (r=1) | Melhoramentos, PT-EN | full entry |
| `michaelis.uol.com.br/…palavra=falta` (r=0 and r=1) | Melhoramentos | full entries |
| `dicionario.priberam.org/pt-br/também` and `/pt-br/falta` | Priberam | full entries |
| `aulete.com.br/também` | Caldas Aulete | full entry |
| `tatoeba.org` (16 queries) | Tatoeba, CC BY 2.0 FR | counts + every hit |
| `linguee.com.br/…/eu+também+sinto+sua+falta.html` | Linguee (ranking page, cited as evidence of the error, not as authority) | full panel |

Frontiers in Psychology, PLoS ONE, BMC Psychology and Behavioral Sciences were returned
by `findpapers.mjs` for every psychology-side query and **all are at or over cap — none
was used.** `doi.org` is at cap 3, so the Alfa DOI is cited through its SciELO publisher
URL. scielo.br was at 1 post before this one; Alfa at 0 posts, DELTA at 1.

## 7. Instruments that failed, recorded

- **Ciberdúvidas search is unusable from here**: `ciberduvidas.iscte-iul.pt/pesquisa?q=…`
  returned HTTP 200 and a **37.5 KB navigation shell for three different queries**
  (37,525 / 37,522 / 37,502 bytes) with zero result links — the Van Dale / Larousse
  shape. No Ciberdúvidas ruling is cited because none was actually read.
- **Google Ngrams pt-2019 returns no series for the 3-grams** `eu também sinto`,
  `sinto sua falta`, `me faz falta`; only 2-grams (`eu também`, `faz falta`) come back.
  No Ngrams frequency claim is made.
- **Leipzig Corpora REST API 404s** on every `por_*` corpus id tried.
- **SciELO full-text fetch 502'd** on the DELTA 2023 null-subject paper
  (S0102-44502023000300401) across three attempts; that paper is not cited.

## 8. Lines cut, and why

- Any claim that *eu também* is "correct" and *sinto sua falta também* is "wrong" —
  **cut**. Alfa 2024 gives both positions for the additive particle; the honest claim is
  that one is unattested in the corpus and ambiguous in writing, not ungrammatical.
- Any claim that *também* selects by adjacency, as the Italian sibling found for
  *anche* — **cut**, because the peer-reviewed source says the opposite for Portuguese.
- A Ciberdúvidas ruling on adverb placement — **cut**, search endpoint unusable.
- An Ngrams frequency split between the three orders — **cut**, no series returned.
- A claim about Brazil-vs-Portugal preference — **cut**, nothing measured it.
- A Wikidata QID for a "reply" or "additive particle" entity taken from memory — **cut**;
  only QIDs verified against the Wikipedia API are used (Q750553, Q5146, Q1435289,
  Q1338509, Q184943).

## 9. Orchestrator framing checked

The prompt asked me to "verify where *também* attaches" and to test whether Portuguese
"permits the subject-reduplication trick French uses". Both were tested and **both came
back negative against the implied expectation**: *também* does not attach positionally
at all in Brazilian Portuguese (Alfa 2024), and subject reduplication is blocked twice
over — structurally, because the addressee is not the subject of *sinto sua falta*, and
lexically, because *Você também* is a documented expressive of disapproval. The prompt
also asked whether Portuguese has the Spanish dative counter-trap; it does not, and the
reason (Michaelis defining *fazer falta* by reference to a dead person) is stronger
evidence than the corpus zero on its own. Nothing else in the prompt was found wrong.

# Research brief — `i miss you in portuguese`

Slug: `i-miss-you-in-portuguese` · Batch: `2026-09-25-miss-you-30` · Run date: 2026-09-25
Facts source: `content/batches/2026-09-25-miss-you-30/facts-snapshot.md` (pinned, NOT `content/facts.md`)

---

## Phase 0 — data gate

Passed on the batch's own first-party segment: 214 pages on `/missyou-gf`, probed read-only
on 2026-09-25. Nine lines used, all byte-verbatim from the snapshot. Two first-party numbers
sit inside the first 150 words (88-word median letter / 1,024 longest; 43.5% password use
against 38.5% platform-wide). The three mandatory caveats — pickers-with-defaults,
`viewCount` is page views not unique visitors, n=214 over two months with no seasonal claim —
are all in body prose in the 214-pages section, not only in this brief.

---

## Phase 1 — SERP

One `WebSearch`, US-served, 2026-09-25, query `i miss you in portuguese`. Ten results.

| # | Result | Type | Structure |
|---|---|---|---|
| 1 | instagram.com reel | social | no text page |
| 2 | memrise.com phrasebook row | phrasebook | one line, audio, no prose |
| 3 | learnwitholiver.com | phrasebook | single sentence + audio |
| 4 | quora.com ("for my ex") | forum | user answers, no source |
| 5 | quora.com ("in Brazilian") | forum | user answers, no source |
| 6 | en.wikipedia.org — *I Miss You (Sarah Engels song)* | entity | off-intent |
| 7 | elon.io lexicon entry | course widget | one sentence, gloss only |
| 8 | online-translator.com (PROMT) | MT widget | machine output |
| 9 | en.wikipedia.org — *Saudade* | entity | the conceptual answer, high authority |
| 10 | en.wikipedia.org — *I Miss You* | entity | off-intent |

**This is the thinnest competitor set of any big-language query in this batch.** There is no
long-form article on the first page — only phrasebook rows, two forum threads, a translator
widget and three Wikipedia entity pages. Nothing here was fetched for reproduction; structure
only was recorded, per `references/competitors.md`. Nothing is cited, linked or paraphrased.

Notable: the search tool's own generated summary asserted, with no source, that saudade
"has no translation to any other language". That unsourced assertion is the claim this post
was commissioned to test, and it is visibly the consensus of the page-one results.

No AI Overview claim is made in either direction — the search tool does not expose one.

**Competitor observation only** (supplied by the brief, not run by me): the Portuguese-language
sibling SERP for `mensagem de saudade para namorado` is medium.com, tiktok.com ×2,
coroasparavelorio.com.br (funeral wreaths, off-intent), pinterest.com, belasmensagens.com.br,
mensagensmagicas.com.br, textopronto.com, mundodasmensagens.com — graded 5/10. Recorded here
and deliberately absent from the post.

---

## Phase 2 — gap analysis

**Table stakes** (every result touches these): the word *saudade*; at least one of
*tenho saudades de você* / *sinto sua falta*; some gesture at emotional depth.

**The gap** — nothing on page one does any of the following:

1. Cites a dictionary. Not one result names Priberam, the Michaelis, or any lexicographic source.
2. Distinguishes European from Brazilian Portuguese, despite the pronoun system making the
   distinction unavoidable.
3. Settles `saudade` vs `saudades`, which the keyword harvest shows Brazilians themselves
   searching as `saudades ou saudade`.
4. Notices that *sinto sua falta* is ambiguous between "I miss you" and "I miss him/her".
5. Tests the untranslatability claim. Every result that mentions it repeats it.
6. Dates the word. The Portuguese-sailors origin story is asserted or implied with no chronology.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what is "I miss you" in Portuguese / what does saudade mean | What each Portuguese line actually says |
| saudades ou saudade, which is correct | Saudade or saudades: which one is correct |
| what does sinto sua falta mean | Sinto sua falta, and the trap hidden inside it |
| is saudade untranslatable | Is saudade actually untranslatable? |
| where does saudade come from / sailors | Where saudade comes from, and why the sailors did not invent it |
| how long should the message be | What 214 miss-you pages say about the words around the phrase |
| when not to send a foreign-language line | When a Portuguese line is the wrong thing to send |

**Angle:** the only post on this query that grades every line against Priberam and the Michaelis
with a corpus id behind each one, settles the plural from the dictionaries, shows *sinto sua falta*
is ambiguous, dates *soydade* to the thirteenth century, and refuses the untranslatability claim
on evidence — beside 214 measured miss-you pages.

---

## Phase 3 — sources

Six, all fetched and read. Four research + two exempt reference instruments (Wiktionary ×2);
Tatoeba is the third instrument, linked once in the body.

| Source | Subject test | Peer-reviewed / OA | Cap position (2026-09-25) |
|---|---|---|---|
| `dicionario.priberam.org/saudade` | pass — the word itself | n/a, dictionary | 0 posts before this one |
| `michaelis.uol.com.br/.../saudade/` | pass — the word itself | n/a, dictionary | 0 posts before this one |
| `en.wiktionary.org/wiki/saudade` | pass — the word itself | n/a, instrument | cap-exempt per verify.config.json |
| `en.wiktionary.org/wiki/soydade` | pass — the word's ancestor | n/a, instrument | cap-exempt |
| `press-files.anu.edu.au/.../ch11.pdf` | pass — saudade semantics | scholarly, ANU Press, open access, read in full | 0 posts before this one |
| `miss.psychopen.eu/.../11049` | pass — saudade measurement | peer-reviewed, CC BY, abstract read | 0 posts before this one |

`tatoeba.org` — attestation instrument, cap-exempt, one body link.

**Swap test:** every one is saudade- or Portuguese-specific. None could sit unchanged in the
Tagalog, Kannada, Japanese or Korean sibling. **Generic context statistics: zero.**
**Wikipedia body links: zero** (Wikipedia appears only as `sameAs` in structuredData, which
`references/structured-data.md` excludes from the body budget).

### What the dictionaries actually say

- **Priberam** — sense 1 "Lembrança grata de pessoa ausente, de um momento passado, ou de alguma
  coisa de que alguém se vê privado"; sense 2 "Pesar, mágoa que essa privação causa"; senses 3–5
  botanical (*Scabiosa atropurpurea*); plural senses 6 "Boas lembranças ou recordações" and 7
  "Cumprimentos a alguém (ex.: mande-lhe saudades minhas)".
  Etymology: **"Origem: latim solitas, -atis, solidão."** Offers translation into ES/FR/EN.
  **No untranslatability claim.**
- **Michaelis** — sense 1 the nostalgic-melancholy definition, listing *sodade, soidade* as
  variants; sense 2 "Cantiga entoada por marinheiros em alto-mar"; plural "Lembranças ou
  cumprimentos afetuosos de quem sente a ausência de outrem"; idiom "Morrer de saudade".
  Etymology: **"ETIMOLOGIA alt do lat solitatem."** **No untranslatability claim.**
- **Wiktionary** — five English glosses; usage note settling the plural; the multiple-causation
  etymology (*saudar* influence, *salūtātem* homonym, oi→au hypercorrection) referenced to
  Leo Pap, WORD 43(1), 1992; the Arabic *sawdāʾ* theory marked "no strong evidence exists";
  a borrowed **English** headword for *saudade*.

### Sources the brief named that could not be reached

- **Academia das Ciências de Lisboa** (`dicionario.acad-ciencias.pt`) — Anubis proof-of-work
  interstitial, no entry served.
- **Infopédia** (Porto Editora) — HTTP 403 behind a Cloudflare JS check.
- **Dicionário Houaiss** — no public entry endpoint found.
- **Machado, *Grande Dicionário da Língua Portuguesa* (1981)** — not online; quoted only as
  Bułat Silva quotes it, and attributed that way in the post.
- **Bułat Silva, "Saudade – a Key Portuguese Emotion", *Emotion Review* 4(2), 2012** — closed
  access (OpenAlex `oa_status: closed`). **Not cited.** Abstract read; it glosses saudade
  "roughly 'nostalgia'", which is corroborating but the post rests on the open 2020 chapter.
- **Leo Pap 1992, WORD 43(1)** — bronze OA at tandfonline, not read in full, so **not cited**;
  only Wiktionary's reference to it is reported.

### Corpus work (Tatoeba, Portuguese→English, exact-phrase)

Printed: `Tenho saudades tuas.` 7004996 · `Estou com saudades de você.` 893304 ·
`Estou com saudade de você!` 6055887 · `Sinto saudade de você` 5080642 ·
`Sinto saudades de você, faz uma semana…` 1305946 · `Sinto sua falta.` 347660 ·
`Eu sinto muito a sua falta.` 393677 (two glosses: "I miss you badly" / "I miss her so much") ·
`Eu sinto falta de você o tempo todo.` 5519740 · `Vou sentir sua falta.` 2044280 ·
`Que saudades de você!` 7189225.

**Cut, with reasons:** `Tenho saudades de ti.` (0 hits) · `Tô com saudade de você.` (0 hits;
demoted to an FAQ) · `Sinto sua falta todos os dias.` (0 hits) · bare `Sinto falta de você.`
(0 hits in that exact form) · `matar saudades` as a miss-you line (glossed "to catch up") ·
the hub's invented line "Saudade — a little corner of me keeps waiting for you" and similar
SERP poetry (uncheckable) · bare `Que saudade!` without a complement · the gloss "saudade has
no translation in any other language" (replaced with the graded verdict). **Eight cuts.**

---

## Phase 5 — targeting

- `categorySlug`: **`miss-you-across-miles`** — confirmed live in the Strapi category list.
- `templateUrls`: **`/missyou-gf`** (mandatory), **`/photo-puzzle`**, **`/capsule`**.
  `/photo-puzzle` is chosen on merit: its final piece is not in the box, which is the shape of
  the feeling the post describes — a good thing present as an absence. `/capsule` is chosen for
  *saudades do futuro*, saudade for something that has not happened yet, which Bułat Silva
  documents; it fits a reader whose distance is time rather than kilometres. Three body internal
  links, none in the opening.
- Slug checked free: `filters[slug][$eq]=i-miss-you-in-portuguese` → `total: 0`.
  `$contains=portug` → 0. `$contains=saudade` → 0.
- All `sameAs` verified against the Wikipedia API with QIDs paired: Saudade Q1338509,
  Portuguese language Q5146, Brazilian Portuguese Q750553, Galician–Portuguese Q1072111,
  Denis of Portugal Q212890, Natural semantic metalanguage Q1929599, Tatoeba Q495456.

---

## Verdicts

1. **Untranslatability: refused as stated, supported in a narrower form.** Saudade is
   translatable but not by a single English word. Evidence: two national dictionaries defining
   it in one sentence each; Priberam's own ES/FR/EN translation aids; five English glosses plus
   a borrowed English headword; a fifteen-line NSM explication in plain cross-translatable
   English; a validated single-factor psychometric scale. The one source carrying the claim,
   Machado 1981, says "**probably** doesn't have equivalents".
2. **Etymology: supported.** Latin *solitas / solitatem* "solitude", carried by both national
   dictionaries. The *saudar* influence is a documented strand of a multiple-causation account,
   not the derivation. The Arabic *sawdāʾ* story is this post's *achar menos* — widely repeated,
   and its only fetchable source disclaims it.
3. **Sailors: falsified as an origin story.** *soydade* is attested in the thirteenth-century
   Galician-Portuguese lyric, including King Denis's "con vossa soydade viver".
4. **Prompt claim corrected:** the live hub does **not** assert untranslatability. It asserts an
   unsourced comparative-depth claim and prints one undifferentiated Portuguese row.
5. **Prompt framing sharpened:** the PT/BR split is a *pronoun* split (tu vs você), not a border.

# Research brief — `i miss you in german`

Batch `2026-09-25-miss-you-30` · slug `i-miss-you-in-german` · drafted 2026-09-25

---

## Phase 1 — SERP

One `WebSearch` run on the English head query `i miss you in german` (US-served,
2026-09-25). Results returned, in order:

1. fluentu.com/blog/german/i-miss-you-in-german/
2. lingoda.com/blog/en/i-miss-you-in-german/
3. memrise.com — phrasebook entry (`ich vermisse dich jetzt schon`)
4. pinterest.com — ideas board
5. quora.com — Q&A thread
6. learnwitholiver.com/german/translate-sentence-12
7. deepl.com translator permalink
8. en.wikipedia.org — *I Miss You* (Sarah Engels song) — **off-intent**
9. deutschgym.com/words/I-miss-you

No AI Overview was returned in the result block. **Not one result is a competitor
of SubhSandesh**; every one of them is a language-learning product, a dictionary
tool or a UGC thread. None is linked, cited or paraphrased anywhere in the post
(references/competitors.md).

### Structural measurement of the fetchable pages

Pages fetched and parsed programmatically for headings, `<table>` count, FAQPage
markup and any occurrence of `dwds.de` / `duden.de` / `corpus`. **Measured, not
asserted** — BRIEF §1.

| Page | Words | Tables | FAQPage schema | Cites a dictionary or corpus | Covers `Sie` form | Covers `euch` form |
|---|---|---|---|---|---|---|
| fluentu.com | 2,166 | 0 | no | no | no | no |
| lingoda.com | 1,817 | 0 | no | no | no | yes (in passing) |
| deutschgym.com | 250 | 0 | no | no | yes | no |
| memrise.com | 674 | 0 | no | no | no | no |
| learnwitholiver.com | 131 | 0 | no | no | no | no |

Heading structure of the two substantial pages is a numbered phrase list —
`1. Ich vermisse dich`, `2. Du fehlst mir`, then poetic/colloquial extras. Both
lead with the same two constructions in the same order. Neither carries a table,
FAQ markup, a dictionary citation, a corpus count, or a rule for who may receive
a `du` form.

**The claim on the SERP that this post exists to test.** The search snippet for
result 1 states that `Du fehlst mir` is "actually more common than *Ich vermisse
dich* in everyday conversation" and that "many native speakers feel it carries a
warmer, more emotional vibe". No page on the SERP attaches any evidence to either
half. That is the folklore this post measures.

---

## Phase 2 — Gap

**Table stakes** (must be covered or the page reads incomplete): `Ich vermisse
dich`; `Du fehlst mir`; the literal "you are missing to me" gloss; intensifiers
with *sehr*; a reply form.

**The gap.** Nobody on the SERP:

- cites a dictionary or a corpus for anything at all;
- distinguishes `dich` / `Sie` / `euch` as a decision with a social cost;
- tests the "more common / warmer" claim they all repeat;
- notes that bare `Du fehlst` means *you were absent* (marked absent from class);
- notes that passive `vermisst` is the missing-persons word;
- carries a table, FAQ markup, or any recipient-side data.

**Stale / unevidenced data.** There is no stale statistic to supersede, because
there is no statistic on the SERP at all. That is itself the opening.

**Fan-out sub-queries** → became H2s and FAQs: *is it ich vermisse dich or du
fehlst mir* · *what does du fehlst mir literally mean* · *which is more common* ·
*how do you say I miss you formally in German* · *how do you say I miss you to
more than one person* · *how do you say I miss you so much in German* · *how do
you say I missed you (past)* · *is du fehlst mir grammatically inverted* ·
*why does searching this bring up a Netflix series*.

**Angle.** Wins by being the only post that settles *ich vermisse dich* vs *du
fehlst mir* with a counted corpus (453 to 232 in 75,520,701 words of DWDS
subtitle dialogue) and with both German reference dictionaries defining *fehlen*'s
person-sense **using** *vermissen* — and then pairs the `dich` / `Sie` / `euch`
decision with recipient-side data from 214 `/missyou-gf` pages.

---

## Phase 3 — Sources, and what each one was verified to say

Every URL below was fetched in this session and read. Nothing is from memory.

### 1. DWDS — `vermissen` (https://www.dwds.de/wb/vermissen)

- Grammar line: `Verb · vermisst, vermisste, hat vermisst`.
- Sense 1 ⟨jmd. vermisst jmdn., etw.⟩ — *sich mit Bedauern bewusst sein, dass man
  jmdn., etw. nicht mehr in seiner Nähe, nicht mehr zur Verfügung hat und es als
  persönlichen Mangel empfinden*.
- Collocation block: **mit Akkusativobjekt: die Mutter, den Vater, die Familie,
  Freunde vermissen** — accusative, and the listed objects are people.
- Sense 2 collocation block: *mit Passivsubjekt: Besatzungsmitglieder, Passagiere,
  Bewohner, Bergleute **werden vermisst*** — the missing-persons sense.
- Etymology (Pfeifer): *missen* ahd. `missen`, cognate mnl. `missen`, afries.
  `missa`, aengl. `missan`, **engl. `to miss`**, anord. `missa`, germ. `*missjan`;
  *vermissen* ahd. `firmissen` (9. Jh.), mhd. `vermissen`.
- openThesaurus panel (04/2026) on the same page marks **`schmerzlich vermissen`
  as `geh.` and `floskelhaft`** — elevated and formulaic.
- Computed collocates ("Typische Verbindungen"): arg, Aussage, Bekenntnis,
  Bereitschaft, Besatzungsmitglied, Fingerspitzengefühl, Fischer, Flugzeug,
  Gesamtkonzept, Hinweis, Konzept, Kritiker, leider, manchmal, Mensch, Mut, oft,
  Person, Respekt, Rückendeckung, schmerzhaft, schmerzlich, schrecklich, Seeleute,
  seitdem, seither, Sensibilität, viel, Wertschätzung, Wille. **Press German, not
  love letters** — which is why a lemma count answers a different question.

### 2. DWDS — `fehlen` (https://www.dwds.de/wb/fehlen)

- Grammar line: `Verb · fehlt, fehlte, hat gefehlt`.
- Sense 1b ⟨jmd. fehlt jmdm.⟩ glossed **`sehr vermisst, entbehrt werden`** — the
  person-sense of *fehlen* is defined **using** *vermissen*, with *sehr*.
- The illustrative quotation DWDS prints under 1b is literally
  **"Ich vermisse dich, du fehlst mir, komm bitte zurück, lass mich hier nicht
  alleine"** (SMS Sprüche, 13.06.2022, DWDS-dated 23.10.2025) — both constructions
  in one attested sentence, *vermissen* first.
- Sense 2a ⟨jmd. fehlt⟩ **`abwesend sein`**, examples *er hat zwei Tage
  unentschuldigt gefehlt*, *die fehlenden Schüler werden notiert*.
- Sense 1a is `es fehlt (jmdm.) an etw.`, the shortage sense.

### 3. Duden — `fehlen` (https://www.duden.de/rechtschreibung/fehlen)

- `schwaches Verb`; Duden's own frequency bar reads 4 of 5 blocks
  (against 3 of 5 for `vermissen`).
- Sense 4: **`[sehnlich] herbeigewünscht, vermisst werden`**, example
  *du wirst/deine Hilfe wird mir sehr fehlen* — Duden **also** defines it using
  *vermisst*.
- Sense 3: *(von Menschen) … abwesend sein*, example *die Kinder haben schon öfter
  unentschuldigt gefehlt*.
- (`vermissen` on Duden was also fetched: Goethe-Zertifikat B1 vocabulary;
  example *die Kinder, die Ehefrau, den Freund **sehr** vermissen*; adjective
  collocates schmerzlich, schrecklich, furchtbar, arg, sonderlich, schmerzhaft.
  Only the `fehlen` URL is carried in `sources`, to keep duden.de to one URL.)

### 4. DWDS Filmuntertitel corpus (https://www.dwds.de/d/korpora/untertitel)

The corpus description page states: built from the German-language part of
opensubtitles.org, created 2013/14, reindexed 25.11.2025; **11,993 documents,
9,758,785 sentences, 75,520,701 tokens**; category *Spezialkorpora*; the dstar
server reports `textClass: gesprochen` (spoken register) on every document.

Counts obtained from DWDS's public DDC/dstar endpoint
(`kaskade.dwds.de/dstar/untertitel/dstar.perl?q=count("…")&fmt=json`), then
re-derived from the returned KWIC rows so that surface forms could be separated
from inflected variants. The `dhits_` sums confirm the queries ran across both
sub-corpora (untertitel01 + untertitel02 = 11,993 files, 75,520,701 tokens),
matching the description page exactly.

| Query | Total hits | Exact present-tense surface (any capitalisation) |
|---|---|---|
| `"ich vermisse dich"` | 453 | 410 |
| `"du fehlst mir"` | 232 | 223 |
| `"ich habe dich vermisst"` | 297 | 145 + 88 (`Ich hab…`) + 24 + 15 |
| `"du hast mir gefehlt"` | 105 | 93 + 12 |
| `"ich vermisse dich auch"` | 80 | 60 + 11 |
| `"du fehlst mir auch"` | 32 | 28 + 4 |
| `"ich vermisse dich so sehr"` | 30 | 25 |
| `"du fehlst mir so sehr"` | 10 | 9 |
| `"ich vermisse dich sehr"` | 15 | — |
| `"ich vermisse euch"` | 46 | 35 (`Ich/ich vermisse euch`) |
| `"ich vermisse sie"` | 129 | capital `Sie` = 9; lowercase `sie` = 114 |
| `"ich vermisse dich jetzt schon"` | 9 | 5 + 2 |
| `"ich sehne mich nach dir"` | 9 | 7 |
| `"ich vermisse dich schmerzlich"` | **0** | 0 |
| `"du gehst mir ab"` | **0** | 0 |
| `"mir fehlt deine Nähe"` | **0** | 0 |

Note on method: a DDC quoted string is case-insensitive and expands inflection —
`"ich vermisse dich"` also returns `Ich vermisste dich` and `Ich vermiss dich`.
Every figure above that is presented as a form count was therefore taken from the
KWIC surface strings, not from the raw hit total.

Cross-checks in other DWDS corpora, same two phrases:

| Corpus | Size | `ich vermisse dich` | `du fehlst mir` |
|---|---|---|---|
| Filmuntertitel (spoken) | 75,520,701 tokens | 453 | 232 |
| Blogs | 225,964 docs, 107,069,513 tokens | 25 | 12 |
| Wikipedia | — | 41 | 25 |
| DWDS-Kernkorpus (20th c.) | — | 3 | 6 |
| Kernkorpus 21 | — | 2 | 3 |
| Deutsches Textarchiv (historical) | — | 3 | 9 |

The two large contemporary corpora agree, ~2:1 for *vermissen*. The literary and
historical corpora lean the other way but are **single digits**, which supports no
claim at all, and the post says so rather than cherry-picking the direction it
prefers.

Lemma-level frequency, from the DWDS frequency API
(`/api/frequency/?q=…`, 53,362,074,529 tokens): `fehlen` 7,740,436 hits,
`vermissen` 1,172,332. **This is not evidence about the love-letter question** —
it is dominated by *es fehlt an Geld*, *der Schüler fehlt*, *fehlende Beweise*.
The post states the number and states why it does not settle anything.

### 5. Tatoeba (cap-exempt reference instrument) — attested sentences

| Sentence | id | English translations carried |
|---|---|---|
| `Ich vermisse dich.` | 110 | I miss you. / I miss you very much. / I'm missing you. / I missed you. / I'll miss you. / I pine for you. / I long for you. |
| `Du fehlst mir.` | 540957 | I miss you. / I'm missing you. / I missed you. |
| `Ich vermisse Sie.` | 385356 | I miss you. |
| `Ich vermisse euch.` | 385357 | I miss you. |
| `Ich vermisse dich sehr.` | 607221 | I miss you very much / badly / a lot / so much / dearly. |
| `Du fehlst mir sehr.` | 527924 | I miss you badly / very much / a lot / so much / dearly. |
| `Ich habe dich vermisst.` | 11081429 | I missed you. / I've been missing you. |
| `Ich vermisse dich auch.` | 10088585 | I miss you, too. |

Queried exact-match (`query==<sentence>`) against the `api_v0` search endpoint,
`from=deu&to=eng`. **No exact Tatoeba sentence exists for** `Ich vermisse dich so
sehr.`, `Du fehlst mir so sehr.`, `Ihr fehlt mir.` or `Sie fehlen mir.` — recorded,
and handled in the cut list.

### 6. Somers, Jenset & Barðdal (2024), *Lingua* 247:103833 — peer-reviewed, open access

"Subjecthood and argument structure of synonymous Dat-Nom/Nom-Dat verbs across
German and Icelandic", Ghent University. Green OA copy fetched in full from
`biblio.ugent.be` and read.

What it actually says, as read: 15 Icelandic verbs compared with a corresponding
set of 15 German verbs; 200 tokens for each of 14 alternating verbs, 2,800 tokens
fed to a conditional inference tree with just under 70% accuracy. Its headline
finding is that apparent Dat-Nom verbs in German such as `gefallen` are in fact
**alternating** Dat-Nom/Nom-Dat verbs; in the double-NP configuration the
`gefallen` class runs **nominative-first 58% of the time and dative-first 42%**.

**Honest limit, stated in the post:** `fehlen` is not in their verb set — the
German verbs are dünken, gefallen, grauen, leidtun, zufallen, entgehen, genügen,
geziemen, nützen, reichen. The paper is cited for what German dative-experiencer
verbs do as a class, not as a study of *du fehlst mir*.

### 7. Wikipedia (entity disambiguation only, 1 link)

**The brief's framing arrived unverified and was re-checked before anything was
printed.** The orchestrator flagged mid-task that a sibling agent had falsified the
equivalent *French* claim, and asked that no localised title be asserted on its
say-so. Checked independently here through the MediaWiki and Wikidata APIs:

- `de.wikipedia.org` carries an article titled **exactly `Ich vermisse dich`**, no
  redirect, Wikidata item **Q124795248**.
- Its opening line: *"Ich vermisse dich (Originaltitel: Missing You) ist eine
  Fernsehserie, die auf dem gleichnamigen Buch von Harlan Coben beruht … Die Serie
  wurde am 1. Januar 2025 auf Netflix veröffentlicht."*
- Q124795248's German label is `Ich vermisse dich`; its `dewiki` sitelink is
  `Ich vermisse dich` and its `enwiki` sitelink `Missing You (2025 TV series)`.

So the claim **holds for German** and the post prints it, linking the German
article as the evidence. The French sibling's falsification does not transfer: it
concerns a French article that does not exist and Q67960905, a 2019 Bolivian film.

**What is deliberately not claimed.** The brief's SERP context was for the
German-language sibling query `ich vermisse dich sprüche`, not for `ich vermisse
dich`. No German-market SERP was run here, so the first draft's line that the
series "now occupies much of that result page" was cut; only the entity fact
survives.

### Source-cap position

`capcheck.mjs`, run immediately before saving, reported **no domain at cap and no
URL at cap** across the batch. `dwds.de`, `duden.de` and `biblio.ugent.be` are
each new to this batch — 1 post apiece. `tatoeba.org` and `en.wiktionary.org` are
in `capExemptDomains`; Wiktionary is not used here at all. No sibling post uses
any of these domains (checked by reading all six sibling `sources` arrays).

---

## Phase 4–5 notes

- **Category** `miss-you-across-miles` (verified against the live Strapi category
  list, 2026-09-25).
- **Templates** `/missyou-gf` (batch-mandatory, and the template the first-party
  data comes from) and **`/streak`**, chosen on merit: *fehlen*'s core sense is
  *not sufficiently present*, an everyday low-grade absence rather than a single
  declaration, and `/streak` is the one template built for a daily rather than a
  one-shot message. `/dedication` (4 posts) and `/catch` (2 posts) were passed
  over as over-used in this batch and less apt here.
- **Hub** `/blog/i-miss-you-in-different-languages` (Strapi id 1360) is live and
  linked up to. Its entire German coverage is one line —
  `German: Ich vermisse dich (ikh fer-MIS-uh dikh)` — with no *du fehlst mir*, no
  register, and no source. Its table is not restated.
- **Slug** `i-miss-you-in-german` confirmed free in Strapi on 2026-09-25; zero of
  the 1,200 live slugs contain `german` or `deutsch`.

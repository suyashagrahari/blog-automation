# Research brief — `i-miss-you-so-much-in-italian`

- **Primary keyword:** `mi manchi un sacco in english`
- **Body language:** Italian · **Region:** `it-it` · **Tier:** `B-intensifier`
- **Category:** `miss-you-across-miles` · **Templates:** `/missyou-gf` (mandatory), `/streak`, `/templates`
- **Written:** 2026-09-27

---

## 0. The lane, and how it differs from the sibling that handed it over

The sibling `come-dire-mi-manchi-in-modo-originale` established that Italian puts the
intensifier **between verb and object** (`Sento tanto la tua mancanza`), and that
Treccani writes it that way itself under `mancanza` 1.b («abbiamo sentito **molto** la
tua m.»).

**That rule is real but it is a special case, and this post is the general case.**
Treccani states the actual rule in a different entry, under the adverb `molto`:

> **molto**, *Osservazioni varie*, **a.**: «Nella sua funzione di avverbio, si pospone
> di solito al verbo (*ho dormito m.*) o si pone tra l'ausiliare e il participio
> (*mi è m. piaciuto*).»

The rule is therefore **"after the verb"**, not "between verb and object". With
*sentire* there happens to be an object (*la tua mancanza*), so the postposed adverb
lands in the middle. With **mancare there is no object at all** — Treccani's headword
is `mancare v. intr. e tr.` and the affective sense is filed under `1. intr. (aus.
essere)`, sub-sense **1.c**, "Con il **compl. di termine**, in frasi quali *mi manchi,
mi sei mancato, ci mancherai, **ci manca molto*** e sim." The missed person is the
**subject**; the experiencer is a **complemento di termine** (Treccani's own label —
the word *dative* is deliberately kept out of the body, as three Italian siblings do).

So: **the between-verb-and-object rule does NOT hold for *mi manchi*, and the reason
it does not is the same reason it holds for *sentire*.** Same rule, different argument
structure. That is the extension.

---

## 1. SERP — measured 2026-09-27, two instruments, both self-authenticated

### Instrument A — `serp-ddg.mjs`, `it-it`, run TWICE, query first

`node scripts/serp-ddg.mjs "mi manchi un sacco in english" --region it-it`.
Echoed back `query: mi manchi un sacco in english`, `region: it-it` — correct
argument order confirmed on the tool's own echo line. Ran twice; 9 of 10 hosts
identical across the two runs, with minor rank shuffling.

| # | Host | Page type | Verdict |
|---|---|---|---|
| 1 | context.reverso.net | translation-memory aggregator | weak |
| 2 | mymemory.translated.net (`/en/`) | MT memory aggregator | weak |
| 3 | wordy.info/blog | SEO language blog, year-stamped title "(2026)" | weak |
| 4 | mymemory.translated.net (`/it/`) | same page, other locale path | weak |
| 5 | dictionary.reverso.net | bilingual dictionary scraper | weak |
| 6 | blog.rosettastone.com | real editorial, established brand | **not weak** |
| 7 | context.reverso.net (third path) | aggregator | weak |
| 8 | frasario.it | phrase listicle | weak |
| 9 | frasimania.it | phrase listicle | weak |
| 10 | **subhsandesh.in/blog/mi-manchi-in-inglese** | our own published sibling | n/a |

**Weak count: 8 of the 9 competitors I actually saw.** Reverso occupies 3 of 10 in
run 1 and 4 of 10 in run 2; combined with MyMemory, translation-memory aggregators
hold 5–6 of every 10 slots.

### Instrument B — Google, real browser, `gl=it&hl=it&pws=0&num=20`

Self-authenticated on the **content read**, not on the navigate response: every
snippet returned contains the literal string `mi manchi un sacco`, the interface
furniture is Italian (`Traduci questa pagina`, `Risultati web`, `Mancanti:`), and no
foreign-language or sibling-keyword result appeared. This is my SERP.

**Google's own top element is a Google Translate widget** giving
`mi manchi un sacco` → **"I miss you a lot."** That is not an organic result; it is
the answer box, and it is the answer the keyword asks for.

Ten organic results seen:

| # | Host | Page type | Verdict |
|---|---|---|---|
| 1 | context.reverso.net | aggregator — "I miss you an awful lot when you're away" | weak |
| 2 | mymemory.translated.net | aggregator; the entry's own metadata reads **"Usage Frequency: 1. Quality: Excellent. Reference: Anonymous."** | weak |
| 3 | blog.rosettastone.com (5 Dec 2025) | real editorial, per-intensifier H2s | **not weak** |
| 4 | ilcentro.net — Il Centro, Italian language school, Milan | real institutional editorial | **not weak** |
| 5 | depts.washington.edu (17 Sep 2004) | 22-year-old student page, **carries a checkable error** | weak |
| 6 | context.reverso.net | aggregator; Google flags `Mancanti: manchi` | weak |
| 7 | Quora (thread 9 years old) | Q&A | weak |
| 8 | wordreference.com | dictionary entry for the **English headword `load`** | weak / off-target |
| 9 | chatpal.chat (2 days old) | brand-new thin vocabulary page | weak |
| — | images block (TikTok, Il Centro) | not an organic page | excluded |

**Weak count: 8 of the 10 I actually saw.**

**NONE of the ten on either instrument cites Treccani, the Crusca, Zingarelli,
De Mauro or Devoto-Oli.** Verified by direct fetch on the four pages I could read in
full (`wordy.info`, `blog.rosettastone.com`, `frasario.it`, `frasimania.it`) and by
snippet on the rest. `wordy.info` is the one exception and it is an instructive one —
see §5. `wordreference.com` returns **HTTP 418** to a scripted UA and was read only
through its Google snippet; recorded as such.

**Gate 4 verdict: PASS.** 8-of-10 weak on Google, 8-of-9 weak on DDG, incumbents are
translation-memory aggregators, a 2004 `.edu` page with a wrong gloss, a nine-year-old
Quora thread and a WordReference entry for the wrong headword. No ranking page answers
where the intensifier goes.

### Song contamination — CONFIRMED for `da morire`, and it matters

A separate `it-it` DDG run on **`mi manchi da morire`** returns, in the top ten, **two
copies of the same YouTube video — Dennis Fantina, "Mi manchi da morire" (official
video 2018)**, at ranks 4 and 6. The remaining eight are Italian phrase/aforismi
publishers (cartoline.it, alfemminile.com, frasimania.it, frasidadedicare.it,
frasario.it, aforisticamente.com ×2, frasibrevi.it) — a `D-listicle` SERP owned by
national Italian publishers. A run on `mi manchi un casino significato` likewise
returns a song entity (`Valerio Mazzei — Casino`) at #4.

**Consequence:** `mi manchi da morire` is entity-contaminated and would be an
ABORT-LIKELY standalone row. It is treated here as a sub-section, never as a target.

---

## 2. Register table — built from headword and sense lines, not from feel

Every mark below was read on the entry page, and the headword on each page was
confirmed to be the word I went looking for (the MARAUD/DEZILITER trap).

| Form | Treccani entry & sense | Treccani mark | De Mauro headword | De Mauro mark |
|---|---|---|---|---|
| `mi manchi molto` | `molto`, **3. avv.** + *Osservazioni varie* **a.** | none | — | — |
| `mi manchi tanto` | `tanto`, **3.** (Come avv.), sub-sense **d.** — «Molto, assai, sia con verbi: … *mi piace t.*» | none | — | — |
| `mi manchi un sacco` | `sacco`, **2.b** — «fig., **fam.** Grande quantità … Nel **linguaggio colloquiale**, con valore avverbiale, *un s.*, molto: **mi piace un sacco**» | **`fig., fam.`** + "linguaggio colloquiale" | `un sacco` `loc.avv., loc.s.m.` — «1. con valore avv., molto, tantissimo: *divertirsi un sacco*» | **`CO`** |
| `mi manchi da morire` | `morire`, **1.a** — «Con **uso iperb.** … *avere una fame, una sete, un freddo da m., essere stanco da m.*» | **`uso iperb.`**, no register label | `da morire` `loc.agg.inv., loc.avv.` — «2. loc.avv., moltissimo: *il film mi è piaciuto da morire*» | **`CO`** |
| `mi manchi un casino` | `casino` — **the sense does not exist.** The whole entry is 762 characters, 3 senses; sense 3 is «**Postribolo**, casa di tolleranza. Fig., **pop.**, chiasso, confusione» | **`pop.`**, and **no intensifier reading is recorded at all** | `un casino` `loc.avv., loc.s.m.` — «1. con valore avv., molto, tantissimo: *mi piace un casino*» | **`CO`** |

### Three findings nothing on the SERP contains

1. **Treccani's own adverbial example for `un sacco` is *mi piace un sacco*** — a
   *piacere* sentence, which is the **same inverted argument structure as *mancare***
   (experiencer in the complemento di termine, the liked/missed thing as subject).
   De Mauro's example for `un casino` is likewise *mi piace un casino*, and for
   `da morire` it is *il film mi è piaciuto da morire*. The dictionaries print the
   frame of `mi manchi un sacco` under other headwords without ever naming *mancare*.
2. **The two dictionaries disagree.** Treccani marks `un sacco` `fam.` and calls the
   adverbial use "linguaggio colloquiale"; De Mauro marks the locution `CO`. Treccani
   records **no** intensifier sense for `casino`; De Mauro gives `un casino` a full
   headword, marked `CO`, identical to `un sacco`.
3. **De Mauro has a `colloq. colloquiale` mark available and applies it to none of the
   three.** Confirmed by reading De Mauro's own abbreviation list (via the Wayback
   copy — the live page is JS-rendered), which contains the entry `colloq.
   colloquiale`. The absence is therefore meaningful, not a gap in the dictionary.

**Recorded cut:** De Mauro's *Marche d'uso* table is behind a client-side toggle and
is **not** served in the static HTML (the section heading is present, its contents are
not). **I therefore do not expand `CO` anywhere in the body** — I report only that the
three locutions carry the identical printed mark, which is what I actually read.

---

## 3. Tatoeba — ita→eng, tokenised and diacritic-insensitive, inspected individually

Method: `api_v0/search?from=ita&to=eng&trans_to=eng&query="<phrase>"`, every page
paginated, then each result **filtered on the literal Italian string** after Unicode
NFD accent-stripping and case folding. Every surviving sentence was opened and its
English alignments read.

**Across the twelve *mi manchi*-family queries: 90 raw (loose) hits returned,
11 survived the strict filter.**

| Query | loose | strict | English alignments actually recorded |
|---|---|---|---|
| `mi manchi tanto` | 8 | **2** | 3137826 "Mi manchi tanto." → *I miss you very much.*; 3239425 "Mi manchi tanto, amore!" → *I miss you so much, my love.* |
| `mi manchi così tanto` | 23 | **3** | 3637742 / 3637743 / 6163487 → *I miss you so much* (×3) |
| `mi manchi molto` | 16 | **1** | 3756139 "Mi manchi molto." → *I miss you a lot.* / *I miss you badly.* / *I miss you very much.* — one Italian sentence, three English renderings |
| `quanto mi manchi` | 9 | **2** | 1389532 → *How I miss you.*; 13936246 → *You'll never know just how much I miss you.* |
| `mi sei mancato molto` | 3 | **2** | 381448 → *I missed you very much / a lot / I longed for you deeply / I really missed you*; 2193185 → *I missed you very much yesterday.* |
| `mi mancate tanto` | 8 | **1** | 14032894 → *I miss you very much.* |
| `mi manchi un sacco` | 0 | **0** | — |
| `mi manchi da morire` | 0 | **0** | — |
| `mi manchi un casino` | 0 | **0** | — |
| `mi manchi moltissimo` | 0 | **0** | — |
| `mi manchi tantissimo` | 0 | **0** | — |
| `mi manchi davvero` | 23 | **0** | all 23 loose hits fail the literal-string test |

### The zeros belonged to the query, not the corpus — reproduced independently

Exactly as the sibling found for `sento la tua mancanza`. I varied the phrasing:

- **`mancare` + `un sacco` IS attested, twice:** `mancava un sacco` returns 9 loose,
  **2 strict** — **12852379 "Le mancava un sacco." → *"She missed him a lot."*** and
  **946180 "Gli mancava un sacco." → *"He missed him a lot."*** Both flip the subject
  and both move the intensifier **after the English object**.
- **`mancare` + `da morire` IS attested:** inside the 22 strict `da morire` hits sits
  **4541855 "Mi sei mancato da morire." → *"My longing for you is killing me!"*** —
  English abandons the intensifier slot entirely and re-lexicalises.
- **`un sacco` as a postposed adverb is attested on *piacere*:** 5204932 "In realtà mi
  piace un sacco." → *"I actually liked it a lot."* — Treccani's own example sentence,
  found in the wild.
- **`un casino`: 0 anywhere**, in any frame I tried. Consistent with Treccani not
  recording the sense at all.

### A tension between dictionary and corpus, recorded honestly

Treccani says the adverb "si pone tra l'ausiliare e il participio" (*mi è m.
piaciuto*), which predicts ***mi sei molto mancato***. The corpus has:

- `mi sei mancato molto` — 3 loose, **2 strict**
- `mi sei molto mancato` — **0 loose, 0 strict**

Same corpus, matched queries, opposite result. Treccani says "**di solito**", so this
is a tendency the corpus does not follow for this verb, not a rule the corpus breaks.
De Mauro's own example `il film mi è piaciuto da morire` puts the phrasal intensifier
**after** the participle too. Stated in the body as a tendency-versus-token count, not
as a correction of Treccani. **n is 2 against 0 and that is too small to generalise —
said so in the body.**

---

## 4. What English does instead

The keyword asks for the English, so the body answers it in the first sentence:
**"I miss you a lot"** — Google's own answer box, MyMemory's stored alignment, and the
two `mancava un sacco` Tatoeba sentences all converge on it. WordReference (read via
the Google snippet; the host 418s a script) offers the British **"I miss you loads"**
under its `load` entry.

The structural point: **Italian postposes the intensifier to the verb, English
postposes it to the object.** *mi manchi **un sacco*** → *I miss **you** a lot*.
`*I miss a lot you` does not exist. Attested in every one of the 11 strict hits.

### Peer-reviewed, open-access, full text read via Europe PMC `fullTextXML`

**Source 1 — *Heliyon*** (journal named for the cap; Elsevier, gold OA, CC BY-NC-ND),
Al-Shawashreh E, Allawzi A & Jarrah M, "Variable use of intensifiers in Ottawa
English", vol. 10 (2024), e31369, PMC11141378. **Full text read, 110 KB of JATS XML.**

- Data: the **Ottawa English Corpus** (Levey 2011, University of Ottawa) — sociolinguistic
  interviews recorded **2008–2010**, **~270,000 words** from **37 speakers** (20 male,
  17 female; 24 young, 13 old).
- Finding: **"really", "so", "very"** and **"pretty"** are the most frequent English
  intensifiers; **women and younger speakers use intensifiers more often** than men and
  older speakers.
- Cited within the paper: "the use of *very* is a mark of being over 35, while favouring
  *really* should clearly mark one as much younger" (Ito & Tagliamonte on York English);
  *so* is associated with women; Tagliamonte analysed >10,000 tokens of Toronto English.
- The delexicalisation point: *very* "changed from a word that was used to mean 'true' or
  'real' in Old English to an intensifier".

**Why it earns its place:** it answers the question the SERP does not — *which* English
intensifier to pick — and it sets up the comparison that `un sacco` ("a sack"),
`un casino` ("a brothel") and `da morire` ("to die") are Italian intensifiers still
carrying visible lexical content, while English *very* has delexicalised completely.

**Source 2 — *Frontiers in Artificial Intelligence*** (journal named for the cap;
Frontiers Media SA, gold OA, CC BY), Jones T, "African American English intensifier
*dennamug*: Using twitter to investigate syntactic change in low-frequency forms",
doi 10.3389/frai.2022.683104, PMC9973324, published 2023-01-27. **Full text read,
162 KB of JATS XML.**

- The methodological fact this post needs: **"While state-of-the-art traditional corpora
  contain so few tokens they can be counted on one hand, twitter yields almost 300,000
  tokens over a 10 year sample period."**
- And: tokens that "may occur a handful of times in a traditional sociolinguistic corpus
  (e.g., **seven instances** of third person quotative *talkin' 'bout* and **23 tokens**
  of associative *'nem* in the Corpus of Regional African American Language, Kendall and
  Farrington 2020) occur hundreds of thousands of times on social media."
- Method scale: mixed-effects logistic regression on a subset of **52,646 observations
  from 2,442 authors**; results "consistent and robust across multiple specifications".

**Why it earns its place:** it is peer-reviewed evidence that a **colloquial intensifier
can be absent from a curated corpus while being extremely frequent in real speech** —
which is precisely why `mi manchi un sacco` returns 0 in Tatoeba and why that 0 must not
be read as "nobody says it". Neither paper mentions Italian; said so in the body.

**Cap position at write time (2026-09-27):** by resolved ID in this batch, *Heliyon* is
cited in **0** posts (two files match a text grep but neither carries a Heliyon citation
in `sources` — the knownIssues warning about grepping journal names, confirmed);
*Frontiers in Artificial Intelligence* is cited in **1** post
(`aitai-meaning-in-english`, PMC12714898 — a different PMCID). Mine takes it to 2 of 3.
Neither PMCID appears anywhere in either batch. Both are clear of the hard bans
(*Frontiers in Psychology*, *PLoS ONE*, *Scientific Reports*, *BMC Psychology*, PNAS)
and neither uses a `doi.org` URL.

---

## 5. The checkable error in ranking results

### Primary — `wordy.info`, rank 3 (DDG) / rank 5 (DDG run 2)

Its phrase table assigns a register column. It prints:

- `Mi manchi da morire` — **"slang"**
- `Mi manchi un sacco` — "casual"
- `Mi manchi tanto` — "polite"
- `Mi mancate` — **"casual"**

**Two errors, both checkable against a named dictionary:**

1. **`da morire` is not slang.** Treccani files it under `morire` **1.a** as a
   **«uso iperb.»** with **no register label**, alongside everyday examples — *avere
   una fame, una sete, un freddo da morire; essere stanco da morire*. De Mauro gives it
   a headword marked **`CO`**, the same mark it gives `un sacco`. Neither dictionary
   calls it slang, and **both demonstrably apply register labels elsewhere**: Treccani
   marks `sacco` 2.b `fam.` and `casino` 3 `pop.` in the same entry family, and
   De Mauro's abbreviation list carries a distinct `colloq. colloquiale` mark.
2. **`Mi mancate` is a number change, not a register change.** It is the second-person
   **plural** of the same verb. The page's own table labels `Mi manchi tanto` "polite"
   and `Mi mancate` "casual", which collapses person/number and register into one
   column.

**What makes this the strongest form of the finding:** the page lists, in its own
*Sources & References* block, **"Treccani, Vocabolario Treccani, entry for 'mancare'
(accessed 2026)"** and **"Accademia della Crusca, consulenze linguistiche (accessed
2026)"** — and then prints register labels that Treccani's entry does not support. It
is the only ranking page that names an Italian dictionary, and it contradicts it.

### Secondary — `depts.washington.edu`, rank 5 on Google, dated 17 September 2004

Glosses `Mi manchi un sacco` as literally **"to me it lacks a bag"**. Wrong twice:

- ***manchi* is second person singular**, not third. The literal gloss would be "to me
  you are missing", which is what Treccani's `1.c` describes.
- ***un sacco* here is an adverb, not a noun object.** Treccani files it under `sacco`
  2.b: "Nel linguaggio colloquiale, con valore avverbiale, *un s.*, molto". Parsing it
  as the direct object of a transitive "lacks" is impossible in this sense, because
  Treccani's headword is `mancare v. intr. e tr.` and the affective sense sits under
  **`1. intr. (aus. essere)`**; the transitive sense 3 is a different word-sense
  entirely (*m. il colpo*, *m. la coincidenza*).

A twenty-two-year-old page-one `.edu` result with a doubly-wrong literal gloss.

### A third, softer one — `blog.rosettastone.com`, rank 3 on Google

The best of the incumbents: it has an H2 per intensifier and gets the register roughly
right ("very informal", "can sound a bit crude"). It glosses `un casino` as "a big
mess". Treccani's `casino` sense 3 opens on **«Postribolo, casa di tolleranza»** and
reaches "chiasso, confusione" only figuratively and marked `pop.` — which is *why* it
sounds crude. Not an error; an omission that explains the thing the page asserts
without explaining. Cited in the body as an omission, not an error.

---

## 6. Gap analysis

**Table stakes** (all five analysed pages cover these): the subject flips; a list of
intensifiers with glosses; *mi manchi* vs *mi manca* vs *mi mancate*; an informality
warning on `un casino`.

**The gap — nothing on either SERP does any of this:**

1. Says **where the intensifier sits**, or cites a dictionary's own placement rule.
2. Notes that **English moves it to the other side of the object**.
3. Gives **register marks copied from headword and sense lines** rather than asserted.
4. Notes that **Treccani and De Mauro disagree**, or that Treccani does not record
   `un casino` as an intensifier at all.
5. Counts anything. Not one competing page contains a corpus figure.
6. Explains why a corpus zero is not evidence of non-use.

**Angle:** wins by being the only post on this SERP that answers where the intensifier
actually sits — from Treccani's own placement note under `molto` and its adverbial
example under `sacco` (*mi piace un sacco*, the same inverted verb class as *mancare*)
— and that measures each form against Tatoeba, finding 11 strict survivors from 90 raw
hits and proving the `un sacco` zero belongs to the query, since `Le/Gli mancava un
sacco` is attested and renders "missed him **a lot**".

**Fan-out sub-queries → H2s:** where does the intensifier go in Italian · why is there
no object with *mancare* · which intensifier is too informal to send · does `un casino`
exist in the dictionary · how many attested sentences are there · why does the corpus
return zero · which English intensifier should I use · is a ranking page wrong · what
does the SERP look like.

---

## 7. Split from the three Italian siblings (all three now LIVE in Strapi, `total=1` each)

| Sibling | Its lane | My split |
|---|---|---|
| `mi-manchi-in-inglese` | IT→EN, Treccani sense 1.c, Crusca 4th ed. via `lessicografia.it` (ten senses, **no affective sense**), 278 Tatoeba sentences, 32/32 subject-flipped | It owns **which verb and which subject**. I own **where the intensifier goes and what it costs in register.** It counts the base forms; I count the intensified ones and report the zeros. |
| `mi-manchi-in-spagnolo` | IT→ES; **`me faltas` does not work**; DLE `faltar` 11 senses, none affective | Different target language entirely. No overlap beyond the shared Treccani `mancare` entry, which I read independently and cite for a different sub-sense point (the absence of an object). |
| `come-dire-mi-manchi-in-modo-originale` | Alternatives to *mi manchi*; register from four Treccani entries; found the intensifier-inside-`la tua mancanza` correction | It found the rule **for *sentire***. I show it is **Treccani's general adverb rule** and that **it does not apply to *mancare*** because *mancare* has no object. I extend, and I correct the framing of the rule. |
| `i-miss-you-too-in-italian` | being written concurrently | **Not on disk and `total=0` in Strapi at write time — no cross-link possible.** Recorded as a limitation. |

Cross-linked in the body: `/blog/mi-manchi-in-inglese` and
`/blog/come-dire-mi-manchi-in-modo-originale` (both confirmed live, `total=1`).
`/blog/mi-manchi-in-spagnolo` also live but not linked — off-language for this reader.

---

## 8. First-party facts, and the differentiation problem

All **twelve** miss-you segment lines in `facts-snapshot.md` are already spent across
the three Italian siblings (four each, no overlap between them). There is no unused
miss-you line left for a fourth Italian post.

**Decision: five platform-wide lines, zero overlap with any Italian sibling.** The
least-collided lines in the batch, by measured count across 41 files:

| Line | Posts using it before mine |
|---|---|
| 57,456 recorded views of shared pages | **1** |
| Average views per created page: 11.1 | **2** |
| 90.9% of started pages are actually published and shared | 3 |
| 38.5% of creators password-protect their page before sharing it | 3 |
| Median gap … 2.5 hours — sampled on /apology-dashboard, n=1,396 | 6 |

The 2.5 h `/apology-dashboard` line is deliberately the **other** edit-gap line — the
Italian siblings used the miss-you 2.6 h / n=214 figure.

**Honest weakness:** these are platform-wide numbers, so they are less topically tight
than the miss-you segment lines. Recorded in the audit. The trade is deliberate: a
fourth Italian post repeating a sibling's four miss-you lines would be worse.

**Mandatory caveats, all in Italian body prose:**
1. `viewCount` is page views, not unique visitors.
2. **Nothing in the database is segmented by language or country** — no figure here is
   Italian.
3. **The database records which TEMPLATE was opened, never who received it.**
4. The 2.5 h median is sampled on `/apology-dashboard` (n=1,396), not on `/missyou-gf`.

---

## 9. Template decision — checked at source before accepting

`app/lib/prompt.ts:44` defines `/missyou-gf` as **"'I miss you' page for a
girlfriend/partner"** — English labels, English furniture, recipient-specific.
`verify.config.json` makes it mandatory for this batch and its `_why` names
**`/streak` for long distance**. Read both; **kept the assigned set.**

Reasoning, against the wave-2 precedent where agents swapped: the `/catch` swap was
made because `/catch` "ships no pre-written romantic copy and cannot mistranslate the
reader". **`/streak` has the same property** — "two people, one tap a day; each
check-in keeps a word" (its own `config.ts` description). The words are the reader's,
typed in Italian, so the English-product mismatch is confined to the interface chrome
rather than to the message. That is the strongest fit available for a reader whose
whole problem is choosing one Italian word carefully. No swap needed.

**Disclosed in body prose, in Italian:** the page is in English, its labels are in
English, it was built for a partner, and the reader's own Italian text is the only
Italian on it.

---

## 10. Limitations recorded

- **`wordreference.com` returns HTTP 418** to a scripted UA. Its `load` entry was read
  only through the Google snippet, which is quoted as a snippet, not as a fetched page.
- **De Mauro's *Marche d'uso* table is not served** in static HTML. `CO` is reported
  verbatim and never expanded.
- **`mi sei molto mancato` = 0 vs `mi sei mancato molto` = 2** is a 2-against-0 count.
  Too small to generalise; stated as such.
- **Neither paper is about Italian.** Both are about English intensifiers. Stated.
- **`i-miss-you-too-in-italian` does not exist yet**, so no cross-link.
- No first-party column exists for the comparison table — the database stores the
  letter as free text and does not parse it for lexis. Recorded as a `failed` item
  rather than invented.

## 11. Search terms that returned nothing usable

`Italian intensifier corpus register variation` (Crossref: Italian intonation, not
intensifiers); `("intensifier" OR "degree adverb") AND "Italian"` on Europe PMC
returned orthopaedics and synchrotron papers — the term "intensifier" in the biomedical
index means an image intensifier. `Corpus Pragmatics` "Gender and Discipline:
Intensifier Variation in Academic Lectures" — Unpaywall `is_oa: false`, closed. Papers
on Italian affective intensifiers specifically: none found open-access.

# Research brief — `ich-vermisse-dich-auch`

**VERDICT: PROCEED.** Blog JSON written. Gate 2 **PARTIAL** (head term is an
entertainment SERP and is not claimed), Gate 4 **PASS** on the reply tail.

- Slug: `ich-vermisse-dich-auch` (native slug; the orchestrator's earlier English slug was corrected)
- Primary keyword as given in my prompt: `ich vermisse dich auch`
- Keyword in `WAVE3-PLAN.json` for this row: `ich vermisse dich auch antwort` — **both measured**, see §2
- Region `de-de` · bodyLanguage GERMAN · tier `A-reply` · category `miss-you-across-miles`
- Templates: `/missyou-gf` (mandatory), `/streak`, `/templates`
- Date measured: 2026-09-27
- Files emitted: `blogs/ich-vermisse-dich-auch.json`, this brief. `batch.json` untouched, no other blog file touched.

---

## 1. Headline finding, stated first

**German is a SIXTH answer to the lane's question, and it is the sixth answer
because it contains the other five — sorted by construction.**

| Construction | What decides the association | Which sibling language that matches |
|---|---|---|
| `Auch ich vermisse dich` (particle preposed) | **Syntax alone.** DWDS files it as a separate sense, 1b, "verstärkt den folgenden Satzteil". Grubic & Wierzba: "the additive particle can only associate with the subject it precedes." | **ITALIAN** — position selects, unambiguous |
| `Ich vermisse dich auch` (particle postposed) | **Direction is fixed, target is not.** Grubic & Wierzba: "Stressed *auch* associates with a **preceding** constituent." | **RUSSIAN** on direction (тоже always follows its associate) |
| …and when several constituents precede | **ACCENT.** "If several constituents are available, disambiguation is possible by marking one of them as a contrastive topic by a rising accent (Krifka, 1999)." IDS: "Der Bezugsausdruck ist durch einen **Gewichtungsakzent** hervorgehoben." | **PORTUGUESE** — position free, accent decides; note it is the same author, Krifka, that the Portuguese row's Alfa paper follows |
| Which one German actually uses | The postposed, wide-scope one, ~70% of the time | **FRENCH / ENGLISH** — JESLA: "French shares the post-finite position with German" |
| Whether any *rule* forces a reading on the postposed form | **None exists.** No dictionary or grammar states one. | **SPANISH** — the clean negative |

**So German does not sit in one of the five cells. It has two constructions, each
landing in a different cell, and it prefers the ambiguous one.** That is a
cross-linguistic result none of the five sibling rows could have produced,
because no other language in the set licenses both positions.

### The sentence that settles it, from a peer-reviewed source

> "German licenses two positions of *auch*: Left-of-entity (before the added
> entity-subject) and post-finite (after the finite verb)."
> — Berchio, Bonvin & Berthele, *Journal of the European Second Language
> Association* 9(1), 85–102 (2025), read in full

The same table states the post-finite position is **"considered non-grammatical
in Italian"**, that **"French shares the post-finite position with German"**, and
that **"the left-of-entity position of the additive focus particle is not shared
with English."**

### Where *auch* attaches, and the exact sections that licensed it

- **IDS / grammis, Systematische Grammatik, page "Fokuspartikel"** (id 408,
  author Eva Breindl, last changed 28.06.2018) — `auch` appears verbatim in the
  Bestand list of Fokuspartikeln. Three verbatim rules used:
  - "Fokuspartikeln können vor oder nach ihrem Bezugsausdruck stehen, mitunter
    auch in Distanzstellung zum Bezugsausdruck, **aber nicht allein im Vorfeld**."
  - "Der Bezugsausdruck ist durch einen **Gewichtungsakzent** hervorgehoben."
  - "Fokuspartikeln können keine Phrasen bilden, sind nicht selbständig verwendbar
    und **können nicht allein im Vorfeld stehen**."
  - and, for the negative reply: "Zu den Fokuspartikeln rechnen wir auch die
    **Negationspartikel *nicht***."
- **Duden** — `/rechtschreibung/auch` **404s**; the entry is split into
  `/auch_Adverb` (Wortart: **Adverb**, Bedeutung 1 "ebenfalls, genauso") and
  `/auch_Partikel_verstaerkend` (Wortart: **Partikel**, Grammatik: "Partikel;
  **unbetont**"). The additive *auch* of the reply is Duden's **Adverb**.
- **DWDS** — headword labelled **Konjunktion**; sense 1a "stets betont",
  gloss "gleichfalls, ebenso", example *das kann Ihnen auch passieren*; sense 1b
  "verstärkt den **folgenden** Satzteil", example *das kann auch Ihnen passieren*
  plus Lortzing's *Auch ich war ein Jüngling mit lockigem Haar*. **The two
  examples are a minimal pair filed under two different senses** — the Treccani
  move, from a German instrument.

### Does *auch ich* vs *ich … auch* disambiguate the way Italian's *anche* does?

**Yes in the grammar, no in the corpus.** Preposed *auch* is unambiguous, and
Grubic & Wierzba built their Experiment 2 control on exactly that property, then
recommended in their own discussion that "it would therefore be **advisable to
use preposed *auch*** in future research."

But in 75,520,701 tokens of DWDS subtitle dialogue, `auch ich vermisse dich`
returns **0** against **80** for `ich vermisse dich auch`. German owns the
Italian disambiguator and does not deploy it with this verb.

### Is `ich auch vermisse dich` grammatical?

**No.** Three independent checks agree:
- IDS: a focus particle "kann nicht allein im Vorfeld stehen" and cannot form a phrase.
- JESLA, reporting Andorno & Turco (2015) on the parallel `*"und herr rot auch
  ist aufgewacht"`: "This position is considered **ungrammatical in both Italian
  and German**."
- DWDS Filmuntertitel: **0 hits**.

### Do the two constructions put *auch* on different arguments?

**Yes, and this is the finding no other language in the lane could produce.**

*vermissen* takes the **accusative** (Duden's own example, cited by the live
sibling `wie-sage-ich-ihm-dass-ich-ihn-vermisse`: "den Freund sehr vermissen").
*fehlen* inverts the roles: in *du fehlst mir*, *du* is the nominative **subject**
and *mir* the dative experiencer.

Because stressed postposed *auch* reaches **leftward**, the nearest available
associate is:

| Reply | Last constituent before *auch* | Which person that is |
|---|---|---|
| Ich vermisse dich **auch** | *dich* (accusative) | the **missed** person — the addressee |
| Du fehlst mir **auch** | *mir* (dative) | the **missing** person — the speaker |

The intended reply reading focuses the speaker ("I too"). **`Du fehlst mir auch`
therefore puts the particle next to the right person and `Ich vermisse dich auch`
does not.** Stated in the post as a tendency with the accent caveat, not as a
rule, because grammis explicitly allows Distanzstellung.

### The *auch nicht* finding

German is the **simple** case, like Russian. It does not swap the particle under
negation the way Romance does (*tampoco*, *neanche*, *non plus*, *também não*);
it stacks *auch* + *nicht* — and per grammis, *nicht* is itself counted among the
focus particles, so two focus particles meet.

Measured on Tatoeba: **59 German sentences containing the literal string
*auch nicht* with an English translation; 52 use *either*, 1 uses *neither*,
0 use *nor*, 1 uses *as well* (a non-native rendering, "I don't like it as well"),
5 carry no additive marker. 53 of 59 = 89.8% switch to either/neither/nor.**
German keeps one word where English needs a different one. This closely matches
the Russian row's 29-of-30.

DWDS: `ich vermisse dich auch nicht` = **0**; the ellipsis `ich dich auch nicht`
= **54**.

---

## 2. SERP measurement

### Routes, in the order BRIEF §3 prescribes

| Route | Result |
|---|---|
| `node scripts/serp-ddg.mjs "ich vermisse dich auch" --region de-de` | Echoed `query: ich vermisse dich auch` **correctly** (so not the argument-order trap), returned "(no results parsed)". **ONE call, no retry.** |
| **Google `gl=de&hl=de&pws=0`, real browser** | **Served on the first attempt, no `/sorry/index`, no captcha, nothing clicked.** Used for everything below. |
| Bing / Brave | Not needed. |

### Self-authentication

The results container carried `data-async-context="query:ich%20vermisse%20dich%20auch"`,
i.e. the page identified my own query. Every result was German. No Turkish,
Spanish, Dutch or Louisiana-court-case decoy appeared. The reply query was loaded
twice and returned the identical rank-1 result. A correct page title was **not**
treated as authentication — the content was.

**Method note:** the default (universal) SERP was read first and its page types
recorded; then `&udm=14` was used to enumerate the organic list cleanly. That
filter strips universal blocks, so the image pack and carousels are reported
from the default load, not from the filtered one. Ranks 8–14 came from `&start=7`.

### Query A — `ich vermisse dich auch` (the head term)

| # | Result | Type |
|---|---|---|
| — | image pack above rank 1 (Etsy, MyPostcard, Grafik Werkstatt, VISUAL STATEMENTS, Instagram) | SERP feature |
| 1 | YouTube · Helene Fischer — **„Und ich vermiss dich auch"** (~314,550 views, 11 years) | **MUSIC** |
| 2 | Reverso Context — translation memory | weak |
| 3 | Linguee — dictionary / TM | weak |
| 4 | Reddit r/German — „Gibt es einen Unterschied…" (9 comments, **10 years old**) | weak forum |
| 5 | Songtexte.com — Helene Fischer lyrics | **MUSIC** |
| 6 | Spotify — Lune, „ich vermisse dich." lyrics | **MUSIC** |
| 7 | YouTube · Lune Officiel — Official Video (~2.1M views) | **MUSIC** |
| 8 | Netflix — „Ich vermisse dich" (Harlan Coben, *Missing You*) | **TV** |
| 9 | fernsehserien.de — Episodenguide | **TV** |
| 10 | YouTube · Pietro Lombardi — „Ich vermisse dich" (~3.1M views) | **MUSIC** |
| 11 | de.wikipedia — „Ich vermisse dich" (the TV series) | **TV** |
| 12 | Kino-Zeit.de — Kritik (01.01.2025) | **TV** |
| 13 | Instagram · capital_bra | social |
| 14 | Dailymotion — Trailer (25.11.2024) | **TV** |

**Fourteen results seen. Five music, five TV/film, zero dictionaries, zero
grammar authorities, one decade-old forum thread.** Page-type mismatch →
**Gate 2 PARTIAL. The head term is not claimed.**

#### The lane-wide song hazard: the Portuguese fix DOES NOT WORK IN GERMAN

This is the fourth language in the lane to measure as music-contaminated
(Spanish 9/10, Russian 5/8, Portuguese 7/18). Portuguese found the fix: adding
the particle to the query dropped music to zero.

**That fix cannot work here, and the reason is checkable: Helene Fischer's 2007
track is literally called „Und ich vermiss dich auch" — the particle is already
in the song title.** My query *contained* the particle and still returned five
music results. **What cleared it was adding `antwort`.** Record this for the lane:
*the particle is the disambiguator only where the particle is not in the song.*

### Query B — `ich vermisse dich auch antwort` (the retarget)

| # | Result | Type | Verdict |
|---|---|---|---|
| 1 | Reddit r/dating_advice — „Gute Antwort auf 'Ich vermisse dich'?" (~120 comments, **7 years**) | forum | **weak** |
| 2 | gutefrage.net — „Was kann man auf ,,Ich vermisse dich auch,, antworten?" (07.08.2022) | Q&A | **weak** |
| 3 | Reddit r/AutisticAdults (~150 comments, 2 years) | forum | **weak** |
| 4 | gofeminin Forum — „Keine Antwort auf eine Aussage" | forum | **weak** |
| 5 | myself.de (Bauer) — „Psychologie: 4 Sätze, die indirekt 'Ich vermisse dich' sagen" (10.07.2026) | German magazine | strong, **off-intent** |
| 6 | TikTok · Emanuel Albert (~4.3M views, 5 years) | social video | **weak** |
| 7 | du.de — „'Ich vermisse dich manchmal': antworten oder nicht?" (23.06.2026) | small site | **weak** |

**Weak count: 6 of the 7 I actually saw. ZERO music. Zero dictionaries, zero
grammar authorities, zero corpora.** Gate 4 **PASS**.

This confirms and extends the aborted sibling's finding: **`de-de` is not
uniformly closed — query SHAPE decides.** The magazines own `sprüche`; they do
not own a "vs" query (that row: 8 of 9 weak) and they do not own an advice query
(here: 6 of 7 weak, and the one magazine answers a different question).

### Checkable error in a ranking result

**Linguee** (rank 3 on the head SERP), page
`linguee.de/deutsch-englisch/uebersetzung/ich+vermisse+dich+auch.html`, fetched
2026-09-27. Its own Wörterbuch block renders:

> Ich vermisse dich auch. — **I miss you, too.**
> …
> Ich auch. — **So do I. · So am I. · So did I.**

The three *so*-forms echo the predicate **with its object unchanged**. Applied to
this exchange, "So do I" says *I miss the same third person you miss*; the German
reply requires the object to flip (*dich* → *mich*). **The page contradicts
itself within four lines**, one of which is correct.

**Honest limit, recorded because it matters:** "Ich auch. — So do I." is not
wrong as a general gloss (*Ich mag Kaffee.* — *Ich auch.* → "So do I." is exactly
right). What is checkable is that it is offered on a page whose headword is this
sentence, where it does not hold. Linguee is **named, not linked**.

Second-check attempts that failed and are reported as failures: **gutefrage.net
HTTP 403** and **Reverso Context HTTP 403**, both behind a JS challenge. No claim
is made about their content beyond the SERP snippet.

---

## 3. Tatoeba — every hit inspected, survivors reported

| Query (German→English) | Raw hits | Survivors carrying the exact string | Notes |
|---|---|---|---|
| `"ich vermisse dich auch"` | 4 | **2** | *Ich vermisse dich auch.* / *…, Tom.* The other two are *Wir vermissen dich auch.* and *…er vermisst mich auch.* |
| `"du fehlst mir auch"` | 5 | **4** | one near-miss, *Mir fehlen sie auch.* |
| `"auch ich vermisse dich"` | **0** | 0 | **the zero belongs to the verb, not the pattern** — sentence-initial *Auch ich …* is attested: *Auch ich bin arbeitslos.* ("I, too, am unemployed"), *Auch ich will lernen.*, *Auch ich fürchte mich.*, *Auch ich sehe nichts.* ("Neither can I see anything") |
| `"ich auch vermisse"` | 8 | **0** | not one hit contains the sequence; all are *dich auch vermisst*-type |
| `"auch nicht"` | 466 | 59 collected & classified | 53 of 59 (89.8%) → *either* / *neither* / *nor* |
| `"dich auch"` | **1000** | — | **hit the API's 1000-result ceiling; no ratio computed from it**, same refusal the Russian row recorded |

**The strongest single Tatoeba fact:** *Ich vermisse dich auch.* and
*Du fehlst mir auch.* carry the **identical** English translation,
"I miss you, too." Two German constructions, one English sentence.

---

## 4. Corpus measurement — and a working DWDS route the batch did not have

**BRIEF §4 and the aborted sibling both record that DWDS corpus counts are not
reachable by API** (`/api/corpus/counts` and `/api/search/` 404,
`/api/frequency/` returns null for multi-word strings, `/r/` returns 401 —
all re-confirmed today). **They are reachable, without login, here:**

```
https://kaskade.dwds.de/dstar/<corpus>/dstar.perl?q=count(%22<phrase>%22)&fmt=json
```

Authenticated by reproducing the live sibling `/blog/i-miss-you-in-german`'s
published figures exactly: 453 / 232 / 80 / 32. Corpus: DWDS-Filmuntertitel,
`count(*)` = **9,758,785 sentences**, 75,520,701 tokens.

| Phrase | Hits |
|---|---|
| ich vermisse dich | 453 |
| du fehlst mir | 232 |
| **ich vermisse dich auch** | **80** |
| **du fehlst mir auch** | **32** |
| **auch ich vermisse dich** | **0** |
| ich vermisse auch dich | 0 |
| dich vermisse ich auch | 0 |
| **ich auch vermisse dich** | **0** |
| auch du fehlst mir | 0 |
| mir fehlst du auch | 0 |
| ich vermisse dich auch nicht | 0 |
| **ich dich auch nicht** | **54** |
| ich vermisse Sie auch | 14 |
| ich vermisse euch auch | 5 |
| ich vermisse dich ebenfalls | 0 |

### The tokenisation trap I caught, and the number that survived it

The query `"ich dich auch"` returns **846**. Taking that at face value would have
overstated the result by ~30%: I retrieved all 846 and tallied the matched tokens
by surface form —

- **649** are literally *ich dich auch*
- **195** are *ich dir auch* (dative; the query matched through the lemma *du*)
- 2 *mir dich auch*, 1 *mich dich auch*

Then I re-pulled 644 of the literal sentences with context and classified them:
**457 are the bare elliptical reply** ("Ich dich auch." / "Ich dich auch, Mama." /
"Ja, ich dich auch."), **187** have *auch* inside a full clause ("Weil ich dich
auch liebe"). **457 / 644 = 71.0%.** Sampled contexts confirm the elliptical ones
are standalone subtitle lines.

**So the most common German reply is not a sentence at all: 649 vs 80.** And the
ellipsis is itself a disambiguator of a kind none of the five sibling languages
uses — it leaves standing exactly the contrastive remnants, *ich* and *dich*, and
gaps the verb, so the association is visible without accent.

---

## 5. Sources — journals named, full-text status recorded

| Source | Journal / publisher | OA | Read |
|---|---|---|---|
| grammis, Systematische Grammatik, "Fokuspartikel" (id 408) | Leibniz-Institut für Deutsche Sprache | — | full page |
| DWDS entry *auch* + kaskade dstar corpus | BBAW | — | full |
| Duden `/rechtschreibung/auch_Adverb` (+ `_Partikel_verstaerkend`) | Duden / Bibliographisches Institut | — | both entries, headword and Wortart confirmed |
| Grubic & Wierzba, "Presupposition Accommodation of the German Additive Particle *auch*" | **Frontiers in Communication** 4 (24.04.2019) | `is_oa: true` | **FULL TEXT**, HTML |
| Berchio, Bonvin & Berthele | **Journal of the European Second Language Association** 9(1), 85–102 (2025) | `is_oa: true` | **FULL TEXT**, PDF via `pdftotext -layout` |
| Tatoeba | — | — | every hit inspected |

**Read in full but deliberately NOT added to `batchMeta.sources`**, to stay inside
the 4–6 cap, and left unspent for a later row: **Edyta Błachut, "Die Gradpartikel
und die Fokuspartikel in der deutschen Grammatikschreibung", *Linguistica
Silesiana* 44/1 (2023), doi 10.24425/linsi.2023.144827**, OA, PDF read. It
corroborates the word-class disagreement independently: Helbig/Buscha (2001) call
*Gradpartikel* what Hentschel/Weydt (2013) call *Fokuspartikel*; Engel (2009)
files *auch* under *Gradpartikel*; the abstract's own words are "terminological
and classification confusion".

### Cap notes
- **Frontiers in COMMUNICATION**, not Frontiers in Psychology — a different
  journal from the one BRIEF §7 bans.
- **No** PLoS ONE, Scientific Reports, BMC Psychology, Behavioral Sciences or PNAS.
- **No `doi.org` URL** (that domain is at cap 3). Publisher URLs only.
- PMC8669216, PMC12842814 and `bop.unibe.ch/.../1777` (De Cesare) **not cited**.
- `de.wiktionary.org` (2 of 2) **not cited**.
- **SHARED WORK, flagged loudly:** the Russian sibling `ya-tozhe-skuchayu-po-tebe`
  already cites the **same** JESLA paper at
  `euroslajournal.org/articles/10.22599/jesla.127`; I reached it at its PDF URL.
  **Two URLs, one work → now at the URL cap of 2. No third row may use it.**
  Kept because it is the only source stating the claim this row turns on, and the
  two posts use it for different sentences. Also note: the Russian row's
  36% / 64% are that study's own monolingual results, while my 30% (20 of 70) is
  from its literature review (Bonvin & Dimroth 2016, reannotated) — both are in
  the paper, not a contradiction.

---

## 6. Split from the three German siblings and from the aborted row

| Post | What it owns | What I did |
|---|---|---|
| `wie-sage-ich-ihm-dass-ich-ihn-vermisse` (live) | the CASE contrast; *fehlen* is not a subjectless dative verb; Duden glosses *fehlen* 4 with *vermisst* | cited in one paragraph as the premise of my §1 finding and **cross-linked**; not re-derived |
| `ich-vermisse-dich-in-zahlen` (live) | numeric codes, `143` filed as English, `gn8` as syllable rebus | untouched |
| `ich-vermisse-dich-auf-turkisch` (**live** — see §7) | Turkish `özlenmek` tagged *nesnesiz* | untouched |
| `/blog/i-miss-you-in-german` (live, English) | the frequency question; dich/Sie/euch | its 80:32 reply counts were **re-measured, not copied**, and used for a different purpose (position, not frequency) |
| `ich-vermisse-dich-vs-du-fehlst-mir` (**ABORTED**) | closed five differentiators on the CONTRAST, incl. a clean DACH register negative and the exhaustion of DWDS cuts | **none of the five re-opened.** No register/regional section. No "which is more common" section. No decision table by relationship. |

**My lane is the PARTICLE, not the contrast:** where *auch* attaches, what
preposing vs postposing does, what the ellipsis does, how German sits against
Italian, French, Spanish, Russian and Portuguese, and what happens under negation.
None of that appears in any sibling. I re-read the aborted brief in full before
starting and checked each of its five closed lanes against my outline.

---

## 7. Framing claims in my prompt that were wrong (BRIEF §0)

1. **"`ich-vermisse-dich-auf-turkisch` … three siblings on disk, TWO NOW LIVE."**
   Strapi production on 2026-09-27 returns `total: 1` for **all four** German
   slugs, including that one. All four are live.
2. **Keyword.** My prompt gives `ich vermisse dich auch`; `WAVE3-PLAN.json` gives
   the row's keyword as `ich vermisse dich auch antwort`. Both were measured.
   `batchMeta.keyword` records my prompt's version; the post is built for the
   reply tail, because that is the query the measurement says is winnable.
3. **"Portuguese found the fix: adding the particle drops music to zero."** True
   for Portuguese, **false for German**, and the reason is measurable (§2).

---

## 8. Lines cut, and why

- **Dropped:** "*Ich auch vermisse dich* is ungrammatical because German is V2."
  grammis licenses a postposed particle inside the Vorfeld for some phrases
  ("Zwei Jahre nur muss er sitzen"), so the blanket V2 argument is not grammis's.
  Replaced with the narrower sourced version (§1).
- **Dropped:** any claim that *Du fehlst mir auch* is more frequent or more
  natural. The corpus says the opposite (32 vs 80). The post claims only that it
  places the particle next to the more useful argument.
- **Dropped:** the whole DACH register/regional angle — closed by the aborted row
  with a clean negative at both Duden and DWDS.
- **Dropped:** reporting `"ich dich auch"` as 846 (§4).
- **Dropped:** the de.wikipedia „Ich vermisse dich" (Netflix) article as a
  checkable-error target — it ranks, but it is off-lane entertainment.

---

## 9. First-party facts and the mandatory caveats

Four lines used. The **differentiation is thin and that is structural** — the
twelve miss-you lines are shared by 54+ siblings. **This row's split is the
PAIRING:** *2.6 hours, n=214* against *2.5 hours sampled on /apology-dashboard,
n=1,396* — six minutes apart, two different populations, and no post on disk
pairs them. The other two (88.8% shared; 86.4% with a written memory) are among
the least-collided and appear in neither German sibling.

All three mandatory caveats plus the two batch-specific ones are in **German body
prose**, not only in the audit: pickers-with-defaults are not sender choices;
`viewCount` is page views not people; n=214 over two months supports no seasonal
claim; the database records **which TEMPLATE was opened, never who received it**;
and **nothing in it is segmented by language or country**.

The comparison table's first-party column is **platform-level, not per-row**, and
a German sentence directly under the table says so. That is recorded as the one
**failed** checklist item (#10), honestly, rather than passed.

## 10. Product disclosure

`/missyou-gf` is at `app/lib/prompt.ts:44` an "I miss you page for a
girlfriend/partner" — **English labels, recipient-specific**. Disclosed in German
prose, including the second mismatch that matters most for this row: **the page
is built for SENDING, and this reader is ANSWERING.** `/streak` is kept because
`prompt.ts` makes it the only genuinely **reciprocal** template ("two people, one
tap a day"), which is the right shape for a reply. No pricing claim of any kind;
`/templates` linked instead.

## 11. Checks run

- `node content/batches/2026-09-26-miss-you-global-30/pricecheck-intl.mjs ich-vermisse-dich-auch` → **clean**
- `node content/batches/2026-09-26-miss-you-global-30/capcheck.mjs` → no banned URL used; `doi.org` at cap 3 avoided; `euroslajournal.org` now at 2 (see §5)
- schema validator from `references/article-json-schema.md` → **OK, 1769 words**
- `node scripts/verify-batch.mjs content/batches/2026-09-26-miss-you-global-30` → **one line names this slug and it is the summary row**: `ich-vermisse-dich-auch 1769 11 49/1 miss-you-across-miles /missyou-gf /streak /templates`. No finding.
- Audit arithmetic: 49 passed + 1 failed = 50, disjoint, byte-verbatim English from `references/publish-checklist.md`; extras in `additionalChecks`.
- `batch.json` **not touched**; no other blog file read for modification or modified.

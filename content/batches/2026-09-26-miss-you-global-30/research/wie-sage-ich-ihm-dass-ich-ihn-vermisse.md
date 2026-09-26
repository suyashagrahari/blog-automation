# Research brief — `wie sage ich ihm dass ich ihn vermisse` (de-de)

Batch `2026-09-26-miss-you-global-30`. Row tier `B-howto`. bodyLanguage GERMAN.
Written 2026-09-26. **Verdict: PROCEED.**

---

## 1. Gate 4 — SERP measurement

### Route actually used, and why

| Attempt | Route | Result |
|---|---|---|
| 1 | Google `gl=de&hl=de&pws=0&num=20` via **isolated Playwright** | HTTP **429** → `/sorry/index` captcha |
| 2 | Google `google.de` `gl=de&hl=de&pws=0` via isolated Playwright | HTTP **429** → `/sorry/index` captcha |
| 3 | **Bing `mkt=de-DE&setlang=de`** via isolated Playwright | **200, real German SERP** |

I did **not** click past either captcha. Google was unavailable to me for this row in
both variants, roughly three minutes apart. **The measurement below is Bing de-DE, a
different index from Google, and every position in the post is labelled as such.**
`serp-ddg.mjs` was not attempted: BRIEF §3 records it as connect-timing-out batch-wide
and tells me not to grind on it.

### Self-authentication and stability

Every scrape was checked before recording: the Bing query box echoed my exact query,
`documentElement.lang` was `de`, and all ten results were German-language pages on the
topic. Runs 2 and 3 of the unquoted query returned **identical hosts in identical
positions 1–10**. That is the recorded SERP.

A first run used the **quoted** phrase `"wie sage ich ihm dass ich ihn vermisse"` and
returned a different, also-German set (wmn.de, onlinda.de, martin-von-bergen.info,
gutefrage.net ×2, starke-gedanken.de, de.wikihow.com, silkenolden.de,
`ab.corona-experten.de`, nordbayern.de). That is a different query, not contention, and
it is not the SERP I record — but it points the same way: 8 of 10 weak, no magazine.

### The measured SERP — Bing de-DE, unquoted, 2026-09-26, twice identical

| # | Host | Page type | Weak? |
|---|---|---|---|
| 1 | bonobology.com/de | Listicle, **machine-translated** from English (Indian relationship site) | **weak** |
| 2 | de.wikihow.com | How-to, on intent, translated wiki | strong-ish |
| 3 | gedankensplitter.com | Small relationship blog | **weak** |
| 4 | gedankensplitter.com | Same domain again, position 4 | **weak** |
| 5 | michverlieben.com | Dating-coach blog, Sprüche listicle | **weak** |
| 6 | bonobology.com/de | Same domain again, machine-translated | **weak** |
| 7 | wmn.de | Lifestyle magazine, short listicle | medium |
| 8 | gedankenwelt.de | German edition of a Spanish site, translated | **weak** |
| 9 | mystischerrabe.de | Esoteric blog, **answers the opposite question** | **weak** |
| 10 | fluentvista.com/de | Machine-translated content farm (403s to a bot UA) | **weak** |

**Weak count: 9 of 10** (all 10 seen and recorded). Only #2 de.wikihow.com is a genuine
on-intent authority; #7 wmn.de is medium.

### The orchestrator's fear did not materialise — this is the headline finding

My prompt warned that **brigitte.de, wunderweib.de, cosmopolitan.de, desired.de and
tag24.de** rank hard for "wie sage ich ihm…" phrasings, and that the row could go either
way. **Measured: not one of them appears in the top 10, on either query variant.** The
German magazines own `ich vermisse dich sprüche` (the D-listicle lane, correctly dropped)
and they do **not** own the advice lane. Three diagnostics of a genuinely soft SERP:

1. **Three of ten are machine-translated into German from another language**
   (bonobology ×2 from English, gedankenwelt from Spanish), plus fluentvista at #10.
2. **Two of ten answer the opposite question** — #9 "So bringst du ihn dazu, dich zu
   vermissen" and, on the quoted run, wikiHow "Wie ich ihn dazu bekomme mich zu
   vermissen". The SERP cannot hold the direction of the query.
3. **Two domains appear twice** (bonobology, gedankensplitter). Duplicate hosts in a top
   10 mean the index is short of distinct good answers.

This is a PROCEED, and by a wide margin — wider than the German sibling's 8-of-10.

---

## 2. Checkable errors found in a ranking result

**Page: `bonobology.com/de/Ich-vermisse-deine-Nachrichten-für-ihn/`, position 6.**
Fetched and authenticated (URL and H1 confirmed on the fetched document) 2026-09-26.

**(a) The du/Sie register collapses inside the opening paragraph.** Verbatim:

> "Vermisst **du** deinen Freund in einer Fernbeziehung? Sehnen **Sie** sich nach der
> Anwesenheit **Ihres** Mannes während seiner Geschäftsreise? Halten **Sie** sich nicht
> zurück – lassen **Sie** ihn wissen, wie viel er **Ihnen** bedeutet…"

Informal `du` and formal `Sie` addressed to the same reader in consecutive sentences.
Whole-page counts I took on the document: `Sie` 70, `Ihnen` 8, `Ihr-` possessives 35,
against `du` 69, `dich` 118, `dir` 36, `dein-` 72. Both registers run through the entire
article. This is the exact artefact of translating English "you" without choosing, and it
is the one distinction a German sender must actually get right.

**(b) The page's own title contradicts its own breadcrumb.** H1:
"Über 100 **herzzerreißende** „Ich vermisse Dich"-Nachrichten für ihn". Breadcrumb on the
same page: "Über 100 **herzergreifende** „Ich vermisse dich"-Nachrichten für ihn".
Two different adjectives, and *herzzerreißend* ("heart-rending") is the wrong register
for messages meant to make someone feel wanted.

**(c) The URL says a different sentence from the page.** The slug is
`Ich-vermisse-deine-Nachrichten-für-ihn` = "I miss your messages" — a machine translation
that read the "you" of English "I miss **you** messages for him" as the possessor of
"messages". The page's own H1 says something else.

Per BRIEF §7/#28 this is described in body prose with the domain named, and is **not**
linked and **not** entered in `sources` — it is a competitor listicle.

---

## 3. Lexical verification — every claim checked at the headword

Per BRIEF §4, the headword on each fetched page was read and confirmed before citing.

- **Duden, `duden.de/rechtschreibung/vermissen`** — headword confirmed as `ver­mis­sen`.
  Wortart: **schwaches Verb**. Bedeutung 1: "sich mit Bedauern bewusst sein, dass jemand,
  etwas nicht mehr in der Nähe ist, nicht mehr zur Verfügung steht, und dies als
  persönlichen Mangel empfinden". Its own example: "die Kinder, die Ehefrau, **den
  Freund** sehr vermissen" — `den Freund` is **masculine accusative**, which is exactly
  this reader's case. Herkunft: mhd. *vermissen*, ahd. *farmissen*.
- **de.wiktionary `vermissen`** — German section, `{{Wortart|Verb}}`, marked
  `*{{K|trans.}}` (transitive). Bedeutung [2] "bedauern, darunter leiden, dass jemand
  oder etwas fehlt"; example [2] is literally "Ich *vermisse* dich."
- **de.wiktionary `fehlen`** — Bedeutung **[1] "nicht vorhanden sein"**, and the *first*
  example under [1] is "**Du *fehlst* mir.**" So the dictionary's primary sense for the
  sentence in question is "not to be present".
- **de.wiktionary `sagen`** — Bedeutung **[2] is explicitly tagged `{{K|Dativ}}**:
  "Worte an eine bestimmte Person oder Personenkreis richten", example "Sag **mir**, wo
  die Blumen sind."
- **de.wiktionary `Sehnsucht`** — Substantiv, f., Bedeutung [1] "der Drang, der Wunsch
  nach etwas", example "Ich habe *Sehnsucht* nach dir."

### The case verdict, with the terminology stated exactly

- **`vermissen` governs the ACCUSATIVE.** *Ich vermisse dich / ihn.* The person who
  misses is the nominative subject; the person missed is the accusative object.
- **`fehlen` governs the DATIVE, and inverts the roles.** *Du fehlst mir.* Here **`du` is
  the nominative SUBJECT** and **`mir` is a dative object** (an experiencer dative). The
  person missed is the grammatical subject of the sentence; the person doing the missing
  is the one it happens *to*.
- **Terminology correction to my prompt.** The prompt calls *du fehlst mir* "the dative
  construction ('you are lacking to me')". The gloss is right and the parallel to French
  *tu me manques* and Italian *mi manchi* is real — in all three the missed person is the
  subject and the misser is an indirect/dative object. But it must not be called a
  "dative verb" of the *mir ist kalt* type: `fehlen` has a perfectly ordinary nominative
  subject. The load-bearing fact is the **inversion of roles**, not the absence of a
  subject. The post states it that way.

### What I could NOT verify, and did not claim

- **That German speakers *perceive* `du fehlst mir` as softer or less demanding.** The
  structural inversion is dictionary-verifiable; the emotional reading is my
  interpretation and is marked as such in body prose. I found no study of it.
- **That `ich vermisse dich` is "direct and unhedged in a way English 'I miss you' is
  not"** (my prompt's register claim). I found no instrument that measures this. Duden's
  entry carries no register marking (no *geh.*, *ugs.* or *salopp*) on sense 1 at all,
  which is evidence it is simply neutral standard German — but "neutral" is not the same
  as "blunter than English", and I did not assert the comparison. **Recorded as a
  negative.**

---

## 4. Split from the German sibling, and a spent-angle warning

- **`ich-vermisse-dich-in-zahlen`** (this batch) — lane: whether a numeric code exists.
  Cross-linked.
- **`i-miss-you-in-german`** (`2026-09-25-miss-you-30`) — **this is the important one.**
  It already covers *vermissen* vs *du fehlst mir* **with dictionary and corpus
  evidence**: DWDS `/wb/vermissen` and `/wb/fehlen`, Duden `fehlen`, and a DWDS
  Filmuntertitel count (75.5M tokens) of **453 hits for "ich vermisse dich" against 232
  for "du fehlst mir"**. **My prompt proposed that comparison as my headline asset. It is
  already published.** I therefore do not re-derive it: I state the case facts from
  *different* instruments (Duden `vermissen`, de.wiktionary `vermissen`/`fehlen`/`sagen`
  — none of which that sibling used), spend three paragraphs on it rather than a whole
  post, and point the reader there for the frequency question.
- **My lane:** the advice and **risk** question — how to send it, what the reader's own
  query already proves about the grammar, what the research actually measured about
  self-disclosure and responsiveness, and what his silence does and does not mean.

**A keyword-native asset no sibling can have:** the query *"wie sage ich **ihm**, dass ich
**ihn** vermisse"* already contains both cases correctly — `ihm` is the dative that
`sagen` sense [2] requires, `ihn` the accusative that `vermissen` requires. The searcher
has written the grammar correctly while asking how to say it.

---

## 5. Sources (5) — caps checked

`capcheck.mjs` run immediately before writing: no banned URL used, **no domain at cap,
no URL at cap, none with one slot left**. Batch counts start at zero.

| # | Source | Subject test | Notes |
|---|---|---|---|
| 1 | Duden, `vermissen` | German language ✅ | Cap-exempt instrument. Headword confirmed. |
| 2 | de.wiktionary, `fehlen` | German language ✅ | Cap-exempt. "Du fehlst mir" is its example [1]. |
| 3 | de.wiktionary, `sagen` | German language ✅ | Cap-exempt. Sense [2] tagged `{{K|Dativ}}`. |
| 4 | *Frontiers in Psychology* 2021, `10.3389/fpsyg.2021.609232`, PMC8022838 | missing/closeness ✅ | **Peer-reviewed, OA gold, CC BY** (Unpaywall `is_oa: true`). 99 couples / 198 participants, 7 days, 2 daily measurements, dyadic double-intercept multilevel model. |
| 5 | *Behavioral Sciences* 2026, `10.3390/bs16060963`, PMC13295598 | speaking/withholding ✅ | **Peer-reviewed, OA, CC BY.** Qualitative; 53 young adults (30 w / 23 m), 10 interviews + 43 written reflections, Thailand. |

Reached via `findpapers.mjs` (Crossref + Europe PMC) and the Europe PMC REST API —
**zero WebSearch calls used.** Abstracts read in full through the REST API; MDPI and
Frontiers landing pages were not fetched. PMC13295598's abstract was empty in the Europe
PMC `core` search result and had to be read from `fullTextXML` — the DOI there is
`10.3390/bs16060963`, **not** the `10.3390/bs16040538` that the search listing implied
for a neighbouring record; I took the DOI from the article XML, not the listing.

Banned/spent and avoided as instructed: PMC13552847, `doi.org`, `journals.plos.org`,
`arxiv.org`, `repo.uni-hannover.de`. Not cited.

### Honest limits carried into body prose

- Neither paper has a German sample. Neither is about German.
- Frontiers: the self-disclosure→satisfaction association was significant **only for
  men** — that is a man's *own* disclosure predicting his *own* satisfaction. It does
  **not** show that disclosing *to* a man works better, and the post says so explicitly.
- Behavioral Sciences: qualitative, n = 53, Thai university context, *kreng jai* / *jai
  yen* as local vocabulary. No rate, percentage or German inference may be drawn.

---

## 6. First-party facts — differentiation

`facts-snapshot.md`, not `content/facts.md`. Four lines used; **three of the four are
untouched by either German sibling and by `i-miss-you-in-german`**:

- median 2.6 h first save → last edit (n=214) — **unused by any sibling**
- 88.8% of started miss-you pages published and shared (190 of 214) — **unused**
- 92.1% carry at least one "open when" letter (197 of 214), 3.2 avg, 6 max — **unused**
- 214 pages / 4.1% of 5,221 — the denominator; used by both siblings, unavoidable.

This is better differentiation than the batch norm, but the 214 base line is a genuine
collision and is declared in the audit.

Mandatory caveats, all in German body prose: pickers-with-defaults; `viewCount` is page
views not visitors; n = 214 over two months, no seasonal claim; **nothing in the database
is segmented by language or country, so no figure here is German**; and **the database
records which TEMPLATE was opened, never who received it**.

---

## 7. The mandatory link is wrong for this reader

`app/lib/prompt.ts:44`, read at source:

```ts
{ url: `${SITE_ROOT}/missyou-gf`, what: "'I miss you' page for a girlfriend/partner" },
```

Two mismatches, both disclosed in German body prose:

1. **Wrong recipient.** This reader is writing **to a man**. The template's own
   definition names a girlfriend/partner.
2. **Wrong language.** English labels, English prompts, English furniture, for a German
   sender and a German-speaking recipient.

Recorded in `WAVE1-PLAN.json → knownIssues` as a known defect; confirmed independently.

**Honest alternative chosen: `/capsule`** — "you both write predictions about the next
year, blind to each other; it seals, and a year later you open it together". It is not
gendered at all, and it is **structurally symmetric**: it does not ask him to answer now,
which is precisely this reader's stated fear. `/templates` is offered as the neutral
browse. Price: never mentioned; `pricecheck-intl.mjs` run clean.

---

## 8. Brief/prompt claims that turned out wrong

1. **"Brigitte, Wunderweib, Cosmopolitan and Desired rank hard for 'wie sage ich ihm…'
   phrasings."** Measured: **zero** of them in the top 10, on two query variants.
2. **"Isolated Playwright is per-agent and immune to contention" (BRIEF §3 / knownIssue
   6).** **False in this session.** A `browser_navigate` to
   `bonobology.com/de/Wie-soll-ich-sagen…` returned a sibling's Turkish Bing SERP for
   `seni özledim ingilizce nasıl yazılır`, and a later `browser_evaluate` executed
   against `location.pathname === "/search"` instead of my page. The Playwright browser
   is **shared too**. Both corrupted results were discarded and re-run, and every
   recorded observation was self-authenticated against its own URL or query box.
3. **"Known unsatisfiable: #50 (schema file)."** `references/article-json-schema.md`
   exists (196 lines) and is readable. #50 is checkable and is passed honestly.
4. **The prompt's headline angle (`vermissen` vs `du fehlst mir`) is already published**
   by `i-miss-you-in-german`, with corpus counts. See §4.

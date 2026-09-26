# Research brief — `ik-mis-je-in-het-frans`

- **Primary keyword:** ik mis je in het frans
- **Body language:** Dutch (French lines are quoted material)
- **Region:** nl-nl · **Tier:** A-translate · **Category:** miss-you-across-miles
- **Templates:** /missyou-gf (mandatory), /streak, /templates
- **Written:** 2026-09-27

---

## Phase 1 — SERP measurement

### Route log (BRIEF §3 order)

| Route | Result |
|---|---|
| `serp-ddg.mjs --region nl-nl` | ONE call, as instructed. `(no results parsed — DDG markup may have changed)`. No retry. |
| **Google `gl=nl&hl=nl&pws=0`, real browser** | **WORKED. Run twice (once with `&num=20`, once plain, once with `&start=0`) — the two plain runs returned byte-identical result lists.** This is the recorded SERP. |
| Bing / Brave | Not needed — Google served on the first plain load and reproduced. |

The `&num=20` variant returned `Ongeveer 0 resultaten (0,13 s)` — a parameter artefact, **not** a
zero-result SERP. Per BRIEF §3 I did not record it as a finding; the plain load seconds later
returned a full page, twice. This is the same class of transient the brief documents for Bing.

**Self-authentication:** every scrape contained my own query string (`ik mis je in het frans`),
Dutch-language interface chrome (`Zoekresultaten`, `Ongeveer … resultaten`), and Dutch/Belgian
hosts. No sibling's SERP appeared. Contention did not hit this row.

### The SERP (Google nl-NL, 2026-09-27, 9 organic positions actually seen)

Above **every** organic result, in this order:

1. **Google Translate widget** — source `ik mis je`, target `tu me manques`. Scraped from
   `#tw-source-text` / `#tw-target-text`. **The ceiling the three wave-1 rows measured holds here,
   and the widget's four words are CORRECT** — it does not produce *je te manque*.
2. **AI-modus / AI Overview block** ("AI-modus heeft gereageerd: Hoe zeg je ik mis je in het Frans?").

Organic:

| # | Host | Page type | Weak? |
|---|---|---|---|
| 1 | context.reverso.net | translation-memory scraper | yes |
| 2 | reddit.com/r/French `jjsuf7` | **English** thread, 50+ comments, 5 yr old, served with `?tl=nl` | yes |
| 3 | memrise.com | flashcard phrasebook entry, four words + audio | yes |
| 4 | nl.glosbe.com | dictionary scraper (Dbnary/Wiktionary) | yes |
| 5 | vertalen.nu | translation site (403s a scripted UA — Cloudflare) | yes |
| 6 | reddit.com/r/French `8ydbm7` | **English** thread, 10+ comments, 8 yr old, `?tl=nl` | yes |
| 7 | mijnwoordenboek.nl | dictionary entry, attribution reads "Bron: Wikipedia" | yes |
| 8 | context.reverso.net (`ik mis je ook`) | second Reverso URL | yes |
| 9 | ikhebeenvraag.be | 2010 Q&A, answered by a KU Leuven **Wiskunde/Statistiek** researcher | yes |

**Weak count: 9 of the 9 I actually saw.** Zero Dutch-language editorial pages. Two of nine are
English Reddit threads about the *English* sentence, machine-translated into Dutch by Google.

**Gate 4 verdict: PROCEED.** This is precisely the "forums, dictionary scrapers and Q&A sites"
profile BRIEF §3 names as the real opportunity for an A/B row. The ceiling is the Translate widget,
not an incumbent publisher.

## Phase 2 — Gap

**Table stakes:** the four words `tu me manques`; the fact that it is not literal.

**The gap (none of the nine covers it):**
- *Why* the subject inverts, named with a grammatical category.
- **Whether Dutch has the mirroring construction.** Nobody asks. The answer is not "no".
- The register axis: *je / jou / u / jullie* → `tu` / `vous`.
- *Je te manque* explained rather than mentioned. Result #9's eleven-year-old asker says in 2010
  "vele mensen zeggen dat het tu me manques is en sommige je te manque is dus ik weet het niet meer" —
  and the answer never addresses it. Sixteen years later it is still the unanswered question.

**Fan-out sub-queries → H2s:** wie is het onderwerp · wat betekent *je te manque* · heeft het
Nederlands dezelfde constructie · ik mis je vs ik mis jou vs ik mis u · wat zegt het corpus ·
wanneer draait *missen* niet om · wat staat er fout in de zoekresultaten · wat kan het product wel/niet.

## Phase 3 — Instruments and what each one gave

### Dutch side (established, not assumed)

**e-ANS (`e-ans.ivdnt.org`) works.** URL shape is `/topics/pid/ans<2-digit-per-level>lingtopic`;
`/search?q=` is **404**, so sections were located from the homepage table of contents (1,088 topic links).

- **ANS 2.2.3** — overgankelijke werkwoorden "hebben in de zin waarin ze voorkomen een lijdend
  voorwerp bij zich". *Missen* is one; *je* in *ik mis je* is the lijdend voorwerp. **Dutch does not invert.**
- **ANS 20.5.1 / 20.5.2 — het ondervindend voorwerp.** This is the answer to the mirror question,
  and it is not a clean negative. Dutch *has* an experiencer-object category, defined as the
  entity "die de door het gezegde uitgedrukte werking ondervindt", which can never become the
  subject of a passive. **20.5.2's verb list contains `ontbreken` AND `mankeren`** —
  full list as printed: *aanstaan, baten, berouwen, betamen, bevallen, bevreemden, bijblijven,
  mankeren, meevallen, ontbreken, passen, spijten, tegenvallen, verbazen, voegen*. `missen` is NOT in it.
- **ANS 5.2.4.1** — the second-person paradigm: ev. *jij/je* (onderwerp), *jou/je* (niet-onderwerp),
  u-vormen *u*; mv. *jullie*, u-vormen *u*.
- **ANS 5.2.4.2** — je- and u-forms are complementary and relationship-governed, and the
  familiarity scale is printed as **`jullie → je → jij/jou`**.
- **ANS 5.2.7** — full forms are obligatory "in tegenstellingen", example "Hij bedoelt jou niet,
  maar Mark". This is what licenses *ik mis jóu* independently of any corpus count.

**Etymologiebank works, with a caveat the Dutch sibling already flagged:** `/trefwoord/missen`
returns a 2,592-char stub with no entry; **`/trefwoord/missen1`** is the real entry (16,114 chars).
The id is not guessable and was checked, not assumed — the same trap as Larousse/MARAUD.

- **`/trefwoord/missen1`** (EWN, Philippa/Debrabandere/Quak/Schoonheim/Van der Sijs 2003–2009):
  the intransitive *missen* "ontbreken", **with the absent thing as subject**, is "relatief jong,
  maar inmiddels algemeen gangbaar", and **"Het WNT bestempelde dit in 1906 nog als 'ongewoon
  gallicisme', namelijk naar het voorbeeld van Frans *manquer*"** — EWN itself judges it a native
  development. Attestation printed: "Aan dezen broedrenkring mist nog een enkle broeder" [1784; iWNT].
- **`/trefwoord/mankeren`** (Van Veen & Van der Sijs 1997): *manckéren, manquéren* **1588**,
  `< frans manquer < latijn mancare (verminken, verlammen), van mancus (vgl. mank)`.

**Van Dale:** not attempted. The sibling established it serves an 8,403-char webshop page for every
URL shape. **`woordenlijst.org`** resolves but its search is client-side (422 chars of text, no
headword) — recorded as unusable for this row rather than guessed at. **Onze Taal:** not attempted
per the brief's 404 report.

**gtb.ivdnt.org (WNT/MNW/VMNW/ONW)**: HTTP 200 and 270 KB, but the article body is not in the
served HTML — it is a search shell. So the 1906 WNT judgment is cited **as EWN reports it**, with
that attribution stated in the post, not as a direct WNT read.

### French side — read, not re-derived

Per the task, the French half comes from the two siblings and is cross-linked rather than rebuilt.
Independent spot-check performed: `dictionnaire-academie.fr/article/A9M0575` returns HTTP 200 with
`<title>manquer | Dictionnaire de l'Académie française | 9e édition</title>` — **headword confirmed**.
`larousse.fr/…/manquer/49234` and that Académie URL are both already at the 2-post URL cap in this
batch, so neither is listed in `sources`; the reader is sent to the sibling that carries them.

**CNRTL: tested as instructed.** `https://www.cnrtl.fr/definition/manquer` — not fetched this run
(the two siblings' TLFi material is already on the record and cross-linked, and re-testing it would
not change what this post cites). **Recorded as not tested rather than claimed either way.**

### Tatoeba — the strongest asset here

Queried via `api_v0`, **direct and indirect translation groups separated** (`translations[0]` vs
`translations[1]`), every hit read individually.

**Critical method note:** `to=fra` silently filters to sentences that *have* a French translation.
The raw Dutch-corpus counts required `to=none`. A row that reported the `to=fra` number as the
corpus count would understate it.

| Query (nld) | raw, `to=none` | with a French translation | survived inspection |
|---|---|---|---|
| `"ik mis je"` | **11** | 8 | **7 of 8 = 87.5%** |
| `"ik mis jullie"` | 2 | 1 | 1 |
| `"ik mis jou"` | **0** | 0 | — |
| `"ik mis u"` | **0** | 0 | — |
| `"mis jou"` (anywhere) | **0** | — | — |
| `"mis je"` | 20 | 20 | 18 affective, 2 = "miss the bus/train" |

**The one discarded hit:** `[8471415] Ik mis je grapjes` → `Vos blagues me manquent`. It passes a
`\bik mis je\b` regex and is still wrong, because *je* there is the **possessive determiner**
("your jokes"), not the object pronoun — the French translation proves it. Same class of false
positive as the Dutch sibling's *"laten nu al hun bladeren vallen"*. A regex would have recorded 8 of 8.

**Of the 7 survivors, 0 preserve the Dutch shape.** In all seven the missed person is the French subject.

**The `ik mis jou` zero is NOT treated as evidence.** ANS 5.2.7 makes the full form obligatory in
contrast, so the form is not merely possible but required there; the Dutch Tatoeba corpus is simply
small. A second instrument was attempted and also failed to settle it: **Google Books Ngrams**
(`corpus=nl-2019`) returns `[]` for `ik mis je`, `ik mis jou` and even the bigram `mis jou`, while
the controls `het huis` and `ik mis` return full time series — i.e. the endpoint works and these
colloquial strings are below its frequency floor. **Recorded as "no instrument settles it", not as
"the form is unattested".**

### Key attested pairs used in the post

- `[378752] Ik mis je.` → **direct** `Tu me manques.`; **indirect** `Vous me manquez.` — one Dutch
  sentence, both French registers.
- `[3124] Tu me manques.` → direct `Ik mis je.` (its indirect set also carries `Ik wil het zien` /
  `Ik wil je zien`, which are not translations of it — a reminder that indirect links must be read).
- `[385358] Vous me manquez.` → `Ik mis je.` ǀ `Ik mis jullie.`
- `[1370870] Vous me manquerez beaucoup.` → **direct** `Ik zal u erg missen.`
- `[2089480] Je te manquerai.` → `Je zult me missen.` — **the trap, attested.**
- `[3986637] Mis je me niet?` → `Est-ce que je ne te manque pas ?`
- `[7902243] … anders mis je de bus` → `tu vas manquer le bus`; `[4584578] … mis je de laatste
  trein` → `tu vas rater le dernier train` — **no inversion in the non-affective sense.**

### Peer-reviewed, open access

**Piepers, Backus & Swanenberg (2025), "Sociopragmatic pronouns in Limburgian", _Cognitive
Linguistics_ 36, De Gruyter, doi 10.1515/cog-2023-0141, PMC11878271. isOpenAccess = Y, CC BY.
FULL TEXT READ** via the Europe PMC REST `fullTextXML` endpoint (169,717 chars) — not abstract-only.
N = 405. Conclusion quoted verbatim in the notes: automaticity is the driver, "but this autopilot
may be curbed by awareness and attitudes … it is possible to overrule this process if speakers are
both able and interested."

**Journal-cap check done by hand, per BRIEF §7:** *Cognitive Linguistics* appears in **no** post in
either the `2026-09-25-miss-you-30` or `2026-09-26-miss-you-global-30` batch. It is not *Frontiers in
Psychology*, not *PNAS*, not *PLoS ONE*, not *Scientific Reports*.

**A candidate I rejected on the cap, not on quality:** "Effects of Shared Word Order on
Intrasentential Language Mixing in English-Dutch, Polish-Dutch, and Turkish-Dutch Bilingual
Children", **Behavioral Sciences (MDPI)**, PMC13295676, 2026-05-22, CC BY — full text read via
`ncbi.nlm.nih.gov/pmc` HTML (the EPMC `fullTextXML` 500s and both PDF routes 403 for this one).
n = 57, and it finds **no evidence that shared word order facilitates language mixing**, which would
have been a good honest counterweight. **Not cited: *Behavioral Sciences* is already at 2 posts in
this batch and taking the last slot while five other agents write would risk a breach.** Recorded
here so the orchestrator can use it elsewhere.

## The checkable error in a ranking result

**Glosbe (`nl.glosbe.com`), position 4 on this SERP**, prints the identical French translation for
three different Dutch headwords:

- `/nl/fr/ik mis je` → "tu me manques is de vertaling van 'ik mis je' in Frans" — **correct**
- `/nl/fr/ik mis jullie` → "tu me manques is de vertaling van **'ik mis jullie'** in Frans" — **wrong**
- `/nl/fr/ik mis U` → "tu me manques is de vertaling van **'ik mis U'** in Frans" — **wrong**

Both wrong cases require *vous me manquez*. On the `ik mis U` page the site contradicts itself two
lines down, where its own example reads *"U bent net weg en ik mis u nu al. / Vous venez de partir
et **vous me manquez** déjà."* Verified against ANS 5.2.4.1 (u-vormen are a separate paradigm) and
Tatoeba 1370870 (`Vous me manquerez beaucoup.` ↔ `Ik zal u erg missen.`, a direct link).

Two further weaknesses recorded but **not** called errors, because they are not:
`mijnwoordenboek.nl` sources its NL→FR dictionary line to **"Bron: Wikipedia"** and its
"Voorbeeldzinnen" never load; `ikhebeenvraag.be`'s French is accurate — the failure there is that a
mathematician answered a French-grammar question in 2010 and left the asker's actual confusion
(*je te manque*) untouched.

## Split from the three siblings

| Sibling | Its territory | Mine |
|---|---|---|
| `tu-me-manques-en-anglais` | FR→EN; COI proven by the `lui` test; 90 English translations | FR→NL, and the Dutch *lijdend voorwerp* on the other side |
| `tu-me-manques-signification-grammaire` | the verb itself: five Larousse blocks, Italian etymology, OQLF ruling | the Dutch verb *missen* and the 1588 Dutch borrowing *mankeren* |
| `ik-mis-je-nu-al-betekenis` | Dutch-internal: is *nu al* compositional | Dutch→French: does the Dutch shape survive translation |

**No overlap in `factsUsed`** — the three siblings between them used 214-pages / 88-words /
92.1% / 86.4% / 28.0% / 13.6% / 2,417-views / 2.6h / 88.8% / 5,199 / 3,843 / 1.35 / 48.3%. This post
leads on **43.5% password-protection** and **1,434 hug taps**, which none of them used, and on the
**47 city pairs** line, which no post in the batch has touched.

## Structural limitations

1. **`article.faqs` cross-links 404 until this batch publishes** — the three sibling URLs are real
   slugs in this batch but not yet live in Strapi.
2. **WNT 1906 is cited at one remove**, through EWN, because `gtb.ivdnt.org` serves a search shell.
3. **No instrument settles `ik mis jou`** — Tatoeba 0, Ngrams below floor, ANS licenses it on rule.
   Stated as such in the body rather than papered over.
4. **First-party data is language-blind.** No figure in this post is Dutch. Disclosed in the third
   paragraph of the body, in Dutch, as the brief requires.
5. **The table's first-party column cannot vary by French form** — so the register table carries a
   source column instead, and the first-party column lives in the second table.

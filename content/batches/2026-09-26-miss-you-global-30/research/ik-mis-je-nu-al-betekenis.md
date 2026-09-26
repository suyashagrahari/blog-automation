# Research brief — `ik-mis-je-nu-al-betekenis`

- **Keyword:** ik mis je nu al betekenis
- **Region:** nl-nl · **bodyLanguage:** Dutch · **tier:** A-explainer
- **Batch:** 2026-09-26-miss-you-global-30
- **Written:** 2026-09-26
- **Site context:** 905 live posts, **zero Dutch**. This is the first Dutch page this
  domain has ever published. There is no sibling Dutch post to read, no internal Dutch
  cluster to link into, and no domain track record in Dutch. That is stated in the audit
  and in `structuralLimitations`, not hidden.

---

## 0. Framing claims in the task prompt — checked

| Prompt claim | Verdict | Evidence |
|---|---|---|
| "`nu al` is the whole phrase; *ik mis je nu al* is anticipatory" | **Half right.** The anticipatory reading is real, but it is produced by one word (`al`), not by the pair. | ANS 21.4.9.4.1 |
| "Is it idiomatic or merely compositional?" | **Compositional.** See §2. | ANS + Wiktionary 404 + Tatoeba |
| "The tense paradox is the interesting part — a present-tense verb describing a feeling about a future absence" | **The label 'paradox' is wrong and I am correcting it.** Per ANS 2.4.8.3.i the presens here has werking = referentiepunt = spreekmoment: the *feeling* is genuinely present. Only its *cause* is future. There is no tense conflict to resolve. | ANS 2.4.8.3.i |
| "Is *nu al* stronger or more specific than 'already'?" | **Not stronger — differently pinned.** See §4. | Tatoeba renderings |
| "Check whether the phrase collides with a song, film or book title" | **Confirmed, and worse than expected — it is also a funeral-industry brand.** See §5. | Brave SERP ×2, MusicBrainz, live fetch |

**The prompt's grammatical framing was corrected once (tense paradox → no paradox) and its
idiom hypothesis was falsified.** Both are reported in `structuralLimitations`.

---

## 1. Instruments — which resolved, which did not

Every instrument below was fetched and its **headword read** before anything was built on
it, per BRIEF §4.

| Instrument | URL | Result |
|---|---|---|
| **Van Dale** | `vandale.nl/gratis-woordenboek/nederlands/betekenis/al`, `/opzoeken?pattern=al&lang=nn` | ❌ **UNUSABLE.** Both URL shapes 302 to `vandale.nl/pages/gratis-woordenboek/<word>` and serve an **8,403-character webshop page** — cart, VAT toggle, shipping — with **no headword and no entry**, for `al`, for `missen`, and with no pattern at all. HTTP 200 throughout. This is the Larousse-`/manquer/49348`-serves-MARAUD trap in Dutch form and **I did not cite Van Dale.** |
| **Woordenlijst / Taalunie** | `woordenlijst.org/zoeken/?q=al`, `/api/woord/al`, `/api/search?q=al` | ❌ Client-rendered shell; the API paths return the same 4,365-char help text, not word data. Not citable. |
| **Onze Taal** | `onzetaal.nl/zoeken?q=…`, `/search?q=…` | ❌ 404 on both search paths. **The prompt named Onze Taal as "exactly the kind of source that answers this question directly." It has no reachable search endpoint from here and I could not reach an advice page on `al`.** Reported, not faked. |
| **Taaladvies.net (Taalunie)** | `taaladvies.net/?s=al+bijwoord` | ✅ 200, 247 results — but no advice page specifically on `nu al`. Used as corroboration only. |
| **etymologiebank.nl** | `/trefwoord/al`, `/trefwoord/nu` | ✅ **Both resolve, headwords read.** `/trefwoord/al1` and `/trefwoord/missen` return "Geen zoekresultaten" — the id is not guessable, exactly as the brief warns. |
| **e-ANS (Algemene Nederlandse Spraakkunst, Instituut voor de Nederlandse Taal)** | `e-ans.ivdnt.org/topics/pid/…` | ✅ **The decisive instrument.** Content is in the raw HTML outside `<main>`; titles confirm the headword on every page fetched. |
| **nl.wiktionary.org** | `/wiki/nu_al` | ✅ Fetched — **404 `missingtitle`.** The absence is the evidence. |
| **Tatoeba** | `api_v0/search?from=nld` | ✅ Worked. See §3. |
| **MyMemory** | `api.mymemory.translated.net` | ✅ Worked — and produced the checkable error (§6). |

---

## 2. Idiomatic or compositional? — **COMPOSITIONAL**

Five independent lines, all fetched:

1. **ANS 21.4.9.4.1 "Focuspartikels"** (`e-ans.ivdnt.org/topics/pid/ans2104090401lingtopic`,
   title verified). Read verbatim from the page:
   > "Onder focuspartikels verstaat men woorden als *ook*, *zelfs*, *juist*, *alleen*,
   > *maar* ('slechts'), *slechts*, **al**, *reeds*, *nog*, *pas*, *eerst*."

   `al` is a member of an **open, freely-combining class**, not half of a fixed expression.
   That single sentence settles the question.
2. **ANS 8.3.2 "Indeling naar de betekenis"** (title verified) lists **`nu`** among the
   *bijwoorden van tijd*, alongside *toen*, *dan*, *morgen*, *vandaag*, *gisteren*.
   Both constituents are independently classified; neither entry points at the other.
3. **`nl.wiktionary.org/wiki/nu_al` → 404.** WikiWoordenboek, which lemmatises Dutch
   multiword expressions freely, has no entry. No dictionary consulted has one.
4. **Tatoeba**: 19 verified `nu al` sentences spread across entirely unrelated predicates
   — drunk, dark, tired, arriving, a moustache, a wedding date, being over thirty, a week
   in bed. A fixed expression does not distribute like that.
5. **EWN via etymologiebank** (M. Philippa, F. Debrabandere, A. Quak, T. Schoonheim,
   N. van der Sijs, *Etymologisch Woordenboek van het Nederlands*, 2003–2009): `al` bw.
   'reeds', attested `vnnl. al 'reeds' [1688; WNT]`; `nu` bw. 'op dit moment', Onl. 10th c.
   Two adverbs with long independent histories.

**Verdict: compositional, with a conventionalised pragmatic effect.** `nu al` is
`nu` + `al` and means what those two words mean. What makes it feel like an idiom is that
`al`, as a focuspartikel, always measures the state against an **expected later point** —
and at a goodbye the expected later point is obvious to both people. The idiom-feeling is
context, not lexicon. **Saying so is the finding; inventing an idiom would have been the
error.**

## 2b. The grammatical label — corrected

The prompt asked for "the tense paradox … name the phenomenon correctly". **There is no
paradox, and I am not going to name one.**

**ANS 2.4.8.3.i, "Werking, referentiepunt en spreekmoment vallen (geheel of gedeeltelijk)
samen"** (`ans0204080301lingtopic`, title verified), read verbatim:

> "De belangrijkste functie van het presens ligt daar waar de werking, het referentiepunt
> (niet altijd expliciet aanwezig) en het spreekmoment samenvallen."

`ik mis` is a plain **presens (onvoltooid tegenwoordige tijd, o.t.t.)** in exactly that
configuration: **w = r = s**. The missing is happening at the moment of speaking. Nothing
about the verb points forward. Dutch marks a genuine future differently — Tatoeba's own
`Ik zal je missen wanneer je weg bent` ("I'll miss you when you're gone") uses *zullen*,
and that sentence sits in the same result set as `Ik mis je`.

**Correct labels, all verified at the ANS:**
- `mis` — **presens / o.t.t.**, ANS 2.4.8.3.i, werking = referentiepunt = spreekmoment.
- `nu` — **bijwoord van tijd**, ANS 8.3.2.
- `al` — **focuspartikel**, ANS 21.4.9.4.1, in the set with *reeds*, *nog*, *pas*, *eerst*.

The forward-looking element is neither the verb nor the adverb: it is the **expectation
`al` measures against**, which lives in the situation, not in the grammar. I checked this
term against the ANS rather than accepting "anticipatory tense" from the brief, and I did
not reach for "prospective", "inchoative" or "anticipatory aspect" — none of which the ANS
applies here.

---

## 3. Tatoeba — counts, and how many survived inspection

The search is tokenised, exactly as the brief warns. **Every raw hit was inspected
individually.**

### Query `"nu al"`, `from=nld`, paginated to exhaustion

- **23 raw hits returned. 23 inspected. 19 genuine. 4 discarded — 82.6% survival.**
- Discarded, and why:
  - `En laten we nu alles vergeten.` → "And now let's forget everything." — matched inside ***alles***.
  - `Je gaat toch niet nu alles laten liggen?` — matched inside ***alles***.
  - `Ze heeft me uitgebreid over zijn verhuizing verteld. Ik weet nu alles over zijn nieuwe huis.` — matched inside ***alles***.
  - `De bomen laten nu al hun bladeren vallen, hoewel het nog lang geen herfst is.`
    → **"The trees are letting all their leaves fall now"**. This one **passed a
    `\bnu al\b` regex** and is still a false positive: `al` here is the determiner *all*
    in *al hun bladeren*, not the focuspartikel. **A regex would have recorded 20 of 23;
    reading the English translation of each sentence brought it down to 19.** This is
    precisely why the brief says inspect individually, and it is the only one of the four
    a script would have missed.

### Query `"ik mis je"`, `from=nld`

- **9 hits, 9 inspected, 9 genuine — 100% survival.** The exact-phrase quoting is what
  kept it clean; unquoted `ik mis je` reports 33 and is not trustworthy.
- **`nu al` appears in none of them.** Zero of 9.

### Query `"mis je nu al"`, `from=nld`

- **0 hits.** The full Dutch phrase is not attested in Tatoeba at all.

### What `nu al` becomes in English — the whole attested set

| Dutch (Tatoeba, nld) | Attested English translation(s) |
|---|---|
| `Nu al?` / `Nu al?!` | "Already?" / "Already?!" |
| `Ga je nu al?` | **"Are you leaving so early?"** / "Going already?" |
| `Vertrek je nu al?` | "Going already?" |
| `Ik ben nu al moe.` | "I'm tired already." / "I'm already tired." |
| `Ben je er nu al?` | "Have you arrived yet?" / "Have you already arrived?" |
| `Tom moet nu al over de dertig zijn.` | **"Tom must be over thirty by now."** |
| `Ik kan je nu al vertellen dat Tom het antwoord niet zal weten.` | **"I'll tell you right now that Tom won't know the answer."** |
| `Het zou voorbarig zijn om nu al een datum voor de bruiloft vast te leggen.` | **"It would be premature to set a date for the wedding right now."** |
| `Ze draagt nu al een maand dezelfde hoed.` | **"She's been wearing the same hat for a month."** |
| `Hij is nu al een goede vent, dus hij zal in de toekomst ook een goede echtgenoot worden.` | "He's a good guy now, so he'll make a good husband in the future." |

---

## 4. Is `nu al` stronger than English "already"? — **No. Differently pinned.**

The honest, sourced answer: **no source supports "stronger".** What the Tatoeba set shows
is that no single English word covers `nu al`. Translators reach for **"already"**,
**"so early"**, **"by now"**, **"right now"**, **"premature"**, or a durative **"for … now"**
depending on context. `nu` pins the scale to the speech moment; English *already* leaves
the reference point implicit and has to be helped out by a different word when the
"earlier than expected" reading needs to be forced.

Corroboration from a sister language: MyMemory's translation memory renders
`ik mis je nu al` into German as **"Ich vermisse dich jetzt schon"** — *jetzt* + *schon*,
the exact structural cognate of *nu* + *al*. Germanic sisters build this the same way,
which is what compositionality looks like from the outside.

**I am not claiming `nu al` is untranslatable, emphatic, or uniquely Dutch.** Nothing
fetched supports any of those, and the first two Dutch results for the query are a song
and a webshop, not a usage authority.

---

## 5. SERP — route, measurement, contamination, Gate 4

### Routes attempted, in order

| Route | Result |
|---|---|
| `scripts/serp-ddg.mjs` (run **once**, per BRIEF §3) | ❌ `UND_ERR_CONNECT_TIMEOUT` on `html.duckduckgo.com:443`. Confirms the documented IP block. Stopped. |
| DuckDuckGo in a real browser | ❌ 60 s navigation timeout — the block is at network level, not a UA check. |
| **Google** `google.com/search?gl=nl&hl=nl&pws=0`, Playwright | ❌ **429 → `/sorry/index`.** |
| **Google** `google.nl`, Playwright | ❌ 429 → `/sorry/index`. |
| **Google**, operator's real Chrome (PolterTab) | ❌ 429 → `/sorry/index`. **Captcha not clicked on any of the three.** |
| **Bing RSS** `format=rss&setmkt=nl-NL`, sandboxed | ❌ 200, valid channel echoing my query, **0 `<item>`s** — and a `wat betekent saudade` control also returned 0. Route dead from this IP. |
| **Bing** `setmkt=nl-NL`, real browser | ⚠️ **Measured but discarded — see below.** |
| Ecosia | ❌ 403 Cloudflare. |
| Mojeek | ❌ Captcha page. Not clicked. |
| Startpage | ❌ Proof-of-work challenge never completed across three loads ("Difficulty: 6, Speed: ~250 kH/s"). |
| **Brave Search**, `country=nl`, operator's real Chrome | ✅ **This is the measurement.** |

### Why the Bing result was discarded rather than reported as a finding

Bing `nl-NL` in the real browser returned `li.b_no` — *"Er zijn geen resultaten voor ik mis
je nu al betekenis"* — for **all four** Dutch long-tail queries I tried, while the
navigational control `nederlandse taalunie` returned **7** organic results in the same
session. That asymmetry means I cannot distinguish "no pages exist" from "Bing will not
serve me long-tail from this IP", so **a zero there is not a measurement.**

**Corroborated by accident:** during a contention incident (below) I was handed a sibling
agent's Bing `pt-BR` SERP for `sinto sua falta em inglês`, which also read
*"Não há resultados"*. Bing is returning `b_no` for **another agent's** long-tail query
too. That settles it — the zeros are the route, not the web. **Reported, not used.**

### Contention — caught twice, discarded twice

The BRIEF §3 correction is right and `WAVE1-PLAN.json`'s `knownIssues` entry
("The fix is an isolated Playwright browser, which is per-agent") is **wrong**:

- Playwright's tab 0 held a **German** `bonobology.com/de/` page throughout my session.
- Twice, between my `navigate` to `search.brave.com` and my `evaluate` on it, the tab was
  at `bing.com/search?q=sinto+sua+falta+em+inglês&mkt=pt-BR` — a **Portuguese** sibling's
  query. My guard (`if (!/brave/.test(location.hostname)) return CONTENTION`) caught both.
  Nothing from either was recorded.

**Playwright is not isolated.** The fix that worked was to make the whole measurement
**atomic**: one PolterTab `navigate`, one `scrape`, self-authenticated on the page title.

### The measurement

**Route: Brave Search, `country=nl`, operator's real Chrome via PolterTab. Run twice.**
Both runs returned page title `ik mis je nu al betekenis - Brave Search`, the query in the
URL, and Dutch results. **24 distinct off-site results, identical set and identical order
across both runs.** Brave is a different index from Google and is labelled as such
everywhere it is used.

| # | Host | What it is | Weak? |
|---|---|---|---|
| 1 | `context.reverso.net` (`/vertaling/nederlands-engels/ik+mis+je+nu+al`) | translation-memory scraper | ✅ |
| 2 | `ikmisjenual.com` | **bereavement webshop** — urns, mourning jewellery, grief boxes | ✅ off-intent |
| 3 | `youtube.com` | video "Ik Mis Je Nu **Wel Hier**" — not even the phrase | ✅ off-query |
| 4 | `context.reverso.net` (`/translation/dutch-english/…`) | same scraper, EN interface | ✅ |
| 5 | `reddit.com/r/German` | **German** thread on *ich vermisse* | ✅ wrong language |
| 6–8 | `reddit.com/r/thenetherlands` ×3 | threads about the TV show *"Ik heb het nog nooit gedaan"* | ✅ off-query |
| 9 | `context.reverso.net` (`mis+je+nu+al`) | scraper, third variant | ✅ |
| 10 | `muzikum.eu` | Günther Neefs — *ik mis je nu al* songtekst | ✅ song |
| 11 | `ikmisjenual.nl` | **"Ik Mis Je Nu Al \| Hoe een uitvaart anders kan!"** — funeral services | ✅ off-intent |
| 12 | `genius.com` | Lucky Fonz III — *Ik Mis Je Nu Al* lyrics | ✅ song |
| 13 | `open.spotify.com` | track *Ik Mis Je Nu Al* (`1aYCwurwu5WY1Et6jjP6Rv`) | ✅ song |
| 14 | `muzikum.eu` | Pluk — *ik mis je nu al* songtekst | ✅ song |
| 15 | `mymemory.translated.net` | NL→DE translation memory | ✅ |
| 16 | `facebook.com/Ikmisjenual` | the webshop's page | ✅ |
| 17 | `context.reverso.net` | NL→FR | ✅ |
| 18 | `koorcantare.nl` | choir PDF, *Mis je zo graag* | ✅ |
| 19 | `genius.com` | Claudia de Breij — *Ik mis je zo graag* | ✅ |
| 20 | `songteksten.nl` | same song | ✅ |
| 21 | `facebook.com/EOikmisje` | broadcaster grief page | ✅ |
| 22 | `ikmisje.eo.nl` | **EO (public broadcaster) bereavement platform** | ✅ off-intent |
| 23 | `vertalen.nu` | dictionary scraper | ✅ |
| 24 | `froukjes.wordpress.com` | personal blog post, 2022 | ✅ |

**Weak / off-intent count: 24 of the 24 I actually saw. Top 10: 10 of 10.**
**Not one result is a Dutch editorial page explaining what the phrase means.** Zero
dictionaries, zero grammars, zero usage guides. The incumbents are exactly the profile
BRIEF §3 predicts for a tier-A row: translation-memory scrapers, forums, and noise.

**Gate 4: PROCEED.** There is no strong Dutch editorial incumbent to displace. This is not
a `D-listicle` SERP owned by national publishers; it is an unanswered query.

**What I cannot claim:** this is Brave, not Google. I did not see Google's top 10, so I
make **no** claim about AI Overviews, featured snippets, People Also Ask, knowledge panels
or any other SERP furniture, and no claim about Dutch-market Google positions.

### Entertainment / commercial contamination — **YES, heavily, and in two directions**

1. **Songs.** At least **three** distinct Dutch/Flemish songs are titled exactly
   *Ik mis je nu al* — Lucky Fonz III (Genius + Spotify, track id verified via Spotify
   oEmbed, which returns the title *"Ik Mis Je Nu Al"*), Günther Neefs and Pluk (both
   `muzikum.eu`). MusicBrainz, queried independently, returns **1 exact recording**
   (Lucky Fonz III, score 100) and **155** for the shorter *Ik mis je* — Frank Boeijen
   Groep, Herman van Veen, Henk Westbroek, Herman/Checkpoint Charlie, Vangrail.
   Six of the 24 results are song pages.
2. **Funeral and bereavement — this is the bigger one and nobody warned me about it.**
   `ikmisjenual.com` (fetched, 200) is a **mourning webshop**: *Asdragers* (urns),
   *Sieraden*, *Edelstenen bij rouw*, *Rouwverwerkingsboxen*, *Rouwbegeleiding*,
   *Herdenken*. `ikmisjenual.nl` is a funeral-services site — *"Hoe een uitvaart anders
   kan!"*. `ikmisje.eo.nl` (fetched, 200) is the **EO public broadcaster's grief
   platform**: *"Rouwen doe je samen"*, *"Steek een kaarsje aan"*, *"Ik mis mijn… Kind /
   Kleinkind / Partner / Ouder"*, *"Verlies door zelfdoding"*.

   **The exact phrase is a brand name in the Dutch funeral sector.** A searcher typing
   *ik mis je nu al betekenis* lands in urns and candles, not in grammar. That reframes
   the whole page: it must say early and plainly that the phrase is about a **parting**,
   not a **death**, or it will be read as the wrong kind of page. No sibling row in this
   batch hit anything like this.

---

## 6. Checkable error in a ranking result

**`mymemory.translated.net`, which ranks in my measured SERP (#15).**

Its translation memory, queried at `api.mymemory.translated.net/get?q=nu%20al&langpair=nl|en`,
returns as its **highest-confidence match (0.98)**:

> `Nu al` → **"Now already"**

*Now already* is not English. Its own lower-ranked entries get it right — `Nu al.` →
"Already.", `Nu al?` → "Already?" — so the top-scored segment is the wrong one. Tatoeba's
19 attested sentences render `nu al` as *already*, *so early*, *by now*, *right now*,
never as *now already*. Anyone can reproduce this in one request.

A second, smaller defect on the same service: for the NL→DE pair it returns
*"Ich vermisse dich jetzt schon"* for `ik mis je **al**` (0.89) but the shorter
*"ich vermisse dich schon"* for `ik mis je **nu** al` (0.85) — the entry that contains
`nu` is the one that drops its German equivalent.

I could not test Reverso (#1, #4, #9, #17): `context.reverso.net` returns **403 Cloudflare**
to a scripted fetch, and I would not run a multi-step interactive browser session for it
with contention confirmed twice. **Recorded as untested, not asserted.**

---

## 7. Gap analysis

**Table stakes** (what the query needs answered, that nothing on the SERP supplies):
what the phrase means; whether `nu al` is an expression; how to say it in English; when
you send it.

**The gap — all of it.** There is no Dutch explainer at all. Specifically missing
everywhere:

- Any statement that the construction is **compositional**, with the `al` = focuspartikel
  analysis behind it. Not one result names a word class.
- The **o.t.t. correction** — every popular treatment of "I miss you already" in any
  language calls it a feeling about the future. The ANS says the feeling is present.
- The **timing question**: at the station, the night before, after they board. No
  dictionary answers it and no scraper tries.
- A warning that the phrase is a **funeral brand** in Dutch, which changes what a reader
  should expect to find when they search it.

**Angle:** *This post wins by being the only page on the Dutch SERP that settles `nu al`
as compositional using the ANS's own focuspartikel list, corrects the tense to a plain
o.t.t. with werking = referentiepunt = spreekmoment, and answers the timing question the
dictionaries skip — grounded in 214 miss-you pages of which 28.0% set a reunion
countdown.*

**Fan-out sub-queries → H2s:** wat betekent het · is *nu al* een uitdrukking · welke tijd ·
hetzelfde als "already" · wanneer stuur je het · wat de zoekresultaten laten zien ·
onderzoek over afscheid · wat SubhSandesh wel en niet doet.

---

## 8. Sources (with journals named, per BRIEF §7)

| # | Source | Type | Journal / publisher | Cap note |
|---|---|---|---|---|
| 1 | ANS 21.4.9.4.1 *Focuspartikels* — `e-ans.ivdnt.org/topics/pid/ans2104090401lingtopic` | reference grammar | **Algemene Nederlandse Spraakkunst**, Instituut voor de Nederlandse Taal, v2.1 (2019), from ANS 2.0 (Haeseryn, Romijn, Geerts, De Rooij, Van den Toorn, 1997) | cap-exempt instrument; first use in batch |
| 2 | ANS 2.4.8.3.i *Werking, referentiepunt en spreekmoment* — `…/ans0204080301lingtopic` | reference grammar | same | same domain, 2nd use |
| 3 | `etymologiebank.nl/trefwoord/al` | etymological dictionary | **Etymologisch Woordenboek van het Nederlands**, Philippa/Debrabandere/Quak/Schoonheim/Van der Sijs, 2003–2009 | cap-exempt; first use |
| 4 | `tatoeba.org` — nld corpus | attested-usage corpus | Tatoeba Project (CC BY 2.0 FR) | cap-exempt; used by 39 sibling posts, but **no sibling has the Dutch set** |
| 5 | **PMC12294133** — `europepmc.org/article/PMC/PMC12294133` | peer-reviewed, **open access** | ***International Journal of Environmental Research and Public Health***, 2025-06-30, doi 10.3390/ijerph22071056 | **journal not used anywhere in either batch**; PMCID unused; not *Frontiers in Psychology*, not PNAS |
| 6 | **PMC12482273** — `europepmc.org/article/PMC/PMC12482273` | peer-reviewed, **open access** | ***BMC Psychology***, 2025-09-29, doi 10.1186/s40359-025-03444-y | **journal not used anywhere in either batch**; PMCID unused |

**Cap self-check (the one `capcheck.mjs` cannot do).** Neither journal is
*Frontiers in Psychology* (banned, 5/3) and neither is *PNAS* (banned, 3/3). Neither PMCID
appears in the 71 sibling posts on disk across `2026-09-25-miss-you-30` and this batch —
verified by parsing every `batchMeta.sources` array. `is_oa` checked on both:
`isOpenAccess = Y` at Europe PMC. **Both read abstract-only** — Europe PMC's REST
`resultType=core` abstract; PDFs do not parse in this environment and the MDPI and BMC
landing pages 403 a scripted UA. Recorded in the audit.

Rejected on cap or ban grounds:
- Every *Frontiers in Psychology* hit from four Europe PMC searches — **banned**, so I
  filtered the journal out of the query itself and took the next-best.
- `10.1177/1461444820958717` — *New Media & Society*, "Social media, rituals, and
  long-distance family relationship maintenance". Topically the best fit I found.
  **Unpaywall: `is_oa = false`, no OA location.** Rejected: the checklist requires the
  reader can open it.
- `10.1075/pbns.234.04aij` — "Analyzing modal adverbs as modal particles", *Pragmatics &
  Beyond New Series*. **`is_oa = false`.** Rejected.
- Научный диалог 2020, "Particle UZHE [already] and Methods of its Translation into
  Vietnamese" (DOAJ, OA) — about Russian *уже*, not Dutch. Fails the subject test and
  risks colliding with the `skuchayu-po-tebe` row. Rejected.

**Terms searched that returned nothing topical**, named per the skill's Phase 3 rule:
`anticipatory separation distress`, `relationship maintenance goodbye rituals`,
`anticipated separation romantic partners long distance`, `farewell ritual couples
separation`, `anticipatory grief separation partner`, `saying goodbye airport departure
couples emotion`, `anticipation of separation emotional response partner pre-deployment`,
`loneliness anticipation upcoming absence close relationship`, `modal particles Dutch
pragmatics`, `Dutch adverb reeds al Nederlandse taalkunde`, `Dutch particle al already
scalar`.

**There is no open-access literature on anticipatory missing — the feeling of missing
someone before they have left.** Eleven query formulations across Crossref, Europe PMC and
DOAJ returned palliative-care anticipatory grief, climate solastalgia, paediatric
procedural distress and particle physics. The two sources I kept are about **enduring** a
separation and about **digital interventions** for couples; neither is about the moment of
parting. That is a real finding and it is stated in the post rather than papered over.

---

## 9. First-party facts — collision, and the honest failure

`factsUsed` counted across **71 sibling posts** (`2026-09-25-miss-you-30` +
`2026-09-26-miss-you-global-30`). Every one of the 12 miss-you lines is already used
between **29 and 60** times. There is no uncollided line to take.

| Line | Sibling uses | Taken? |
|---|---|---|
| Median first-save → last-edit gap: 2.6 hours, n=214 | **29** — the least collided line available | ✅ |
| 88.8% of started miss-you pages are published and shared | **31** | ✅ |
| 28.0% of senders set a reunion date for the countdown | **42** | ✅ — and the prompt is right that it suits this row: a countdown *is* a parting, measured |
| 1,434 "hug" taps / 13.6% voice note / 43.5% password / 88-word median | 45–58 | ✗ |

**The differentiation checklist item is failed honestly.** Two of my three lines are the
two least-used in the pool and the third is the only one that is actually *about* my
subject; even so, all three appear in dozens of siblings. Differentiation here comes from
the **linguistic analysis and the SERP finding**, not from the numbers.

Mandatory caveats, carried in Dutch body prose and not only here: pickers with defaults are
not sender choices; `viewCount` is page views and not unique visitors; n = 214 over two
months since 2026-07-28, so no seasonal claim survives; and — the one that matters most in
a Dutch post — **the database records which template was opened, never who received it, and
nothing in it is segmented by language or country, so not one of these figures is Dutch.**

---

## 10. Product tension, disclosed in the body

`/missyou-gf` is defined at `app/lib/prompt.ts:44` as *"'I miss you' page for a
girlfriend/partner"* — **English labels, English prompts, and recipient-specific to a
girlfriend or partner.** Both facts are disclosed in Dutch prose.

The sharper tension, and the post says it: *ik mis je nu al* is said **at the moment of
parting**, and a page you build takes a median of **2.6 hours** from first save to last
edit. The two do not fit. **For the words themselves, a message beats a page, and the post
says so.** The page is for the week after — which is why `/capsule` ("you both write
predictions about the next year, blind to each other; it seals, and a year later you open
it together") is offered as the genuine alternative: it is built around a future date you
open together, which is the one thing *nu al* is actually pointing at.

---

## 11. Structural limitations

1. **First Dutch page on a 905-post domain with zero Dutch.** No sibling to cross-link, no
   Dutch internal cluster, no track record in this language. Nothing in this post fixes it.
2. **SERP measured on Brave, not Google.** Three Google attempts across two browsers all
   returned 429 `/sorry/index`; the captcha was never clicked. No SERP-furniture claim of
   any kind is made.
3. **Bing zero-result readings discarded** as a route artefact, corroborated by a sibling's
   `pt-BR` query returning the same.
4. **Van Dale unusable** — every URL shape serves a webshop page at HTTP 200. **Onze Taal
   has no reachable search endpoint.** Both were named in the task prompt as instruments
   and neither could be cited; the ANS and the EWN carried the analysis instead.
5. **Reverso untested** (403 Cloudflare) despite holding four of the 24 ranked positions.
6. **Both research papers read abstract-only.**
7. **No literature exists on anticipatory missing**; 11 search terms named above.
8. **All three first-party lines are heavily collided** (29–42 sibling uses).
9. **Two prompt framing claims were wrong** and are corrected in the post: the phrase is
   compositional rather than idiomatic, and there is no tense paradox.

# Research brief — `tesknie-za-toba-po-angielsku`

- **Keyword:** `tęsknię za tobą po angielsku`
- **Body language:** Polish · **Region:** `pl-pl` · **Tier:** `A-translate`
- **Category:** `miss-you-across-miles` · **Templates:** `/missyou-gf`, `/streak`, `/templates`
- **Date of all measurements:** 2026-09-26
- **Domain track record in Polish: none.** 905 live posts, zero Polish. This is the site's first page in the language.

---

## Phase 0 — Data gate

Used the pinned `facts-snapshot.md`, not `content/facts.md`.

Facts-collision count across the 17 sibling blogs already on disk in this batch
(every `factsUsed` string, counted by post):

| Uses | Line |
| --- | --- |
| 5 | 28.0% set a reunion date (60 of 214) |
| 5 | Median letter length 88 words, longest 1,024 |
| 6 | 13.6% record a voice note (29 of 214) |
| 6 | 92.1% carry an "open when" letter |
| 6 | 43.5% password-protect |
| 6 | 1,434 "hug" taps across 138 pages |
| 7 | 47 city pairs |
| 7 | 2,417 views |
| 8 | 86.4% carry a written memory |
| 9 | Median save-to-last-edit 2.6 h |
| 9 | 88.8% published and shared |
| 12 | 214 pages / 4.1% of 5,221 |

Took the two least-used lines (reunion date, median letter length) plus two at 6
and one at 9, and deliberately avoided the 12-post line as a `factsUsed` string.
**Differentiation is thin and the audit says so.** Gate passes on count
(5 facts, 3 in the first 150 words) but not on originality.

---

## Phase 1 — SERP

### Routes tried, in order

| Route | Result |
| --- | --- |
| `scripts/serp-ddg.mjs` (run **once**, per BRIEF §3) | `UND_ERR_CONNECT_TIMEOUT` → `html.duckduckgo.com:443` |
| `duckduckgo.com` in PolterTab real Chrome | navigation timed out after 30 s |
| Google `gl=pl&hl=pl&pws=0`, PolterTab real Chrome (`google.com` and `google.pl`) | `/sorry/index` both times. **No captcha clicked.** |
| Google same params, Playwright browser | HTTP **429** |
| Bing `setmkt=pl-PL`, RSS (`format=rss`) | HTTP 200, channel title echoed my query, **0 `<item>`s** |
| Bing `setmkt=pl-PL`, PolterTab | `Brak wyników` |
| Bing `setmkt=pl-PL`, Playwright | `Brak wyników` |
| Bing control `"tęsknię za tobą"` quoted | `Brak wyników` — a phrase with millions of hits |
| Bing control `tesknie za toba po angielsku` (no diacritics) | `Brak wyników` |
| Bing control `wikipedia` | full SERP |
| **Yahoo Poland** (`pl.search.yahoo.com`, Bing index, PL market), Playwright | **worked** |

The Bing controls matter: `Brak wyników` for a query that certainly has results,
next to a working control, means Bing was **throttling this session**, not that
the SERP is empty. **No Bing zero is reported as a finding anywhere in the post.**

### Self-authentication and contention

Every recorded page was checked before anything was written down: the Yahoo page
title read `tęsknię za tobą po angielsku - Yahoo Poland Wyniki wyszukiwania`
(exact query + Polish UI) and all results were Polish-language.

**Contention was observed live.** Throughout the Playwright session the tab list
held another agent's page — `bonobology.com/de/Ich-vermisse-deine-Nachrichten-für-ihn/`,
the German sibling's. Nothing from it was recorded.

### The SERP — Yahoo Poland, `tęsknię za tobą po angielsku`, 2026-09-26

| # | Host | Page type | Weak? |
| --- | --- | --- | --- |
| 1 | `diki.pl` | dictionary — and the URL is `?q=tęsknić`, the **lemma page**, not the phrase | yes |
| 2 | `pl.bab.la` | dictionary phrase entry, auto-generated | yes |
| 3 | `specyfikajezyka.pl` | the only editorial page in the top seven | no |
| 4 | `pl.glosbe.com` | scraped translation memory | yes |
| 5 | `dictionary.reverso.net` | dictionary | yes |
| 6 | `context.reverso.net` | translation memory examples | yes |
| 7 | `lovelanguages.io` | thin phrase/product page (fetch returned a Vercel bot challenge) | yes |

**Seven results were visible and seven are reported. No ranks 8–10 were invented.**
**Weak count: 6 of the 7 I actually saw.**

The brief's predicted incumbents — Diki, bab.la, Reverso, Glosbe — all appeared.
No Translate widget was visible; because Yahoo/Bing furniture differs from
Google's, **nothing is asserted about Google's widgets.**

### Gate 4 — PROCEED

Six of seven are dictionaries or translation memories. **No Polish editorial
publisher holds a position on page one.** This is the `A`/`B` profile the brief
names as the real opportunity, not the `D-listicle` profile that should abort.

### The Netflix claim — tested on my own query, and it holds

Bare head term `tęsknię za tobą`, same index, same day:

| # | Host | Title |
| --- | --- | --- |
| 1 | `filmweb.pl` | Tęsknię za tobą (Serial TV 2025-2025) |
| 2 | `netflix.com` | Oglądaj: Tęsknię za tobą \| Oficjalna witryna Netflix |
| 3 | `filmweb.pl` | …serial online — Gdzie obejrzeć: Netflix |
| 4 | `youtube.com` | Tęsknię za Tobą Kochanie — piosenka |
| 5 | `serialowa.pl` | …czy warto oglądać serial **Harlana Cobena**? |
| 6 | `youtube.com` | Kochanie Tęsknię Za Tobą — piosenka |
| 7 | `pl.callie.com` | 50 romantycznych wiadomości „Tęsknię za Tobą" |

**Zero linguistic results.** The head term is owned end to end by the Harlan Coben
Netflix series; the `po angielsku` modifier opens a completely disjoint,
dictionary-shaped SERP. The inventory's claim was correct — and this is the first
time it has been *tested* rather than inherited from the discredited US scoring pass.

### A checkable error in a ranking result — two, both government errors

`specyfikajezyka.pl` (rank 3, published 30.12.2024, ~1 750 words, author byline
"Jakub Kowalczyk") is the only editorial page in the top seven.

1. It uses **„jak się mówi za tęsknotą"** three times, in headings and in body.
   Wiktionary's `składnia` for *mówić*: `mówić + {{B}}, nie mówić + {{D}}; mówić o + {{Ms}}`.
   There is no *mówić za* + instrumental. *Mówić za kimś* = to speak on someone's behalf.
2. It offers **„moje serce cierpi za tobą"** as the Polish for *My heart aches for you*.
   `składnia` for *cierpieć*: `cierpieć z powodu + {{D}}`, `cierpieć na + {{B}}`.
   *Cierpieć za kogoś* = to be punished in someone's place.

A page about how Poles say *tęsknota* gets preposition government wrong twice,
and **never states which case *za* governs after *tęsknić*.** Its three cited
sources are Glosbe, WordReference and bab.la — three bilingual dictionaries and
no dictionary of Polish. **Named in the post, not linked** (zero-competitor-links rule).

---

## Phase 2 — Gap

**Table stakes:** the translation *I miss you*; intensifiers (*so much*, *badly*);
tense variants; "it's emotional, not just words".

**The gap, in one line:** not one page on the SERP names the grammatical case, and
not one has a frequency count.

**Fan-out sub-queries → H2s:** which English variant; *za* vs *do*; how often each
is actually used; what case *tobą* is; how other Slavic languages do it; is
*tęsknota* untranslatable; who ranks and what do they get wrong; who sends this.

---

## Phase 3 — Sources, and what refused me

### PWN is unreachable from this environment

`sjp.pwn.pl` returns **HTTP 403 (nginx)** for every path tried — `/szukaj/…`,
`/slowniki/…`, `/poradnia/szukaj/…` and the bare root — from the sandboxed fetch,
from `ctx_fetch_and_index`, **and from the operator's real Chrome**. `www.pwn.pl`
is 403 too. It is an IP/UA block.

**Recovered via the Wayback Machine** (archive.org, cap-exempt). The route:
Polish Wiktionary's `tęsknić` entry footnotes `{{PoradniaPWN|id=1561}}`; the
template expands to `sjp.pwn.pl/poradnia/haslo/;<id>.html`; the availability API
has no snapshot for that form but **does** for `sjp.pwn.pl/poradnia/haslo/tesknic;1561.html`,
snapshot `20250503213631`. **Headword on the fetched page read and confirmed to be
„tęsknić" before anything was built on it** — per the Larousse/MARAUD and
dwds/DEZILITER warnings.

### WSJP is unusable for this word

`wsjp.pl/haslo/podglad/40624` → HTTP **401**, `hasło w trakcie opracowania` — the
*tęsknić* entry is still being drafted. `/szukaj/podstawowe/tęsknić` and
`/szukaj/podstawowe/tęsknota` → HTTP **500**. The root serves only an alphabetical
index from "a" with no working jump parameter, and `haslo` URLs carry bare numeric
ids. **No WSJP line was written.** `dobryslownik.pl` resolves but returned no
`/slowo/` entry for *tęsknić*.

**Walenty**, the IPI PAN valence dictionary that would have been the ideal
instrument, is dead: `walenty.nlp.ipipan.waw.pl` redirects to a
"no publicly available service" notice at `glass.ipipan.waw.pl`, and HTTPS gives 400.

### NKJP — the official interface refused, PELCRA worked

1. `GET nkjp.pl/poliqarp/nkjp300/query/?query=…` → HTTP 200, **bare form, zero results**.
2. `POST nkjp.pl/poliqarp/query/` with `corpus=nkjp300` and a live `sessionid` cookie
   → HTTP 200, **bare form again**.
3. `pelcra-nkjp.clarin-pl.eu/NKJPSpanSearch?query=…` → HTTP **500
   `java.lang.NullPointerException`** (GlassFish 4.1.1), with both a minimal and a
   full parameter set.
4. **Worked** once the form's own defaults were read off the index page and sent
   verbatim: `span=0`, `sort=srodek`, `second_sort=lewa`, `groupBy=---`,
   `m_nkjpSubcorpus=balanced`, `m_date_from=RRRR`, `m_date_to=RRRR`, and the hidden
   `dummystring=ąĄćĆęĘłŁńŃóÓśŚźŹżŻ`.

**Recording the exact shape because the next Polish row will hit the same NPE.**

### Corpus results — balanced NKJP subcorpus, 240,192,461 words

Every hit inspected. PELCRA does not respect sentence boundaries, so raw counts
overstate: matches whose bolded span contains `. , ? ;` were discarded.

| Query | Reported | Collected | Contaminated | Clean |
| --- | --- | --- | --- | --- |
| tęsknię za tobą | 30 | 30 | 0 | **30** |
| tęsknię do ciebie | 8 | 8 | 0 | **8** |
| tęsknić za | 122 | 124 | 0 | **124** |
| tęsknić do | 44 | 45 | 4 | **41** |
| tęsknię do | 83 | 84 | 3 | **81** |
| tęsknię za | 320 | 204 (4 pages) | 2 | 202 — **not used in the post** |
| tęsknota | 1,282 | — | — | **1,282** |

Contaminants were `tęsknić, do` / `tęsknić? Do` / `tęsknić. Do` / `tęsknię. Do`.
The 320 figure is not printed anywhere because it was not fully collected.

### Tatoeba — 43 to 0, and 100% precision

Quoted-phrase searches, `from=pol&to=eng`, every hit inspected:

| Query | Reported | Literal match |
| --- | --- | --- |
| `"tęsknię za tobą"` | 10 | 10 / 10 |
| `"tęsknię za"` | 25 | 25 / 25 |
| `"tęskni za"` | 13 | 10 / 10 on page 1 |
| `"tęsknić za"` | 5 | 5 / 5 |
| `"tęsknię do ciebie"` | 0 | — |
| `"tęsknię do"` | 0 | — |
| `"tęskni do"` | 0 | — |
| `"tęsknić do"` | 0 | — |
| `"tęsknota"` | 0 | — |

**43 za-forms, 0 do-forms, 43 of 43 inspected hits literal.** Precision 100%,
against the 6.1% a Chinese sibling measured and the ~5.8% a Japanese sibling
measured — quoted Tatoeba queries appear genuinely phrasal for Polish.

**But the post does not use Tatoeba's zero as evidence.** NKJP shows 8 for
`tęsknię do ciebie` and 41 for the infinitive. The small corpus would have
produced a false negative, and the body says so explicitly.

### Papers

`findpapers.mjs` on `Slavic prepositional case government verb valency` and
`emotion concept lexicon untranslatable Polish`: **Europe PMC returned zero
results for both**; Crossref returned only closed-access book chapters
(*Encyclopedia of Slavic Languages and Linguistics Online*, *Linguistik Aktuell*,
*The Routledge World Companion to Polish Literature*). **There is no open-access
peer-reviewed work on Polish verb government reachable here, and the audit says so.**

`Polish migration family separation transnational` gave the one used:

- **PMC13455274**, *Journal of Occupational Medicine and Toxicology*, 2026-08-07,
  doi `10.1186/s12995-026-00522-8`, CC BY, `isOpenAccess: Y`. 16 semi-structured
  interviews with Polish live-in caregivers in German private households,
  interviews conducted in Polish; psychological strain includes
  *"social isolation … emotional burden"*. **Abstract only — the PDF does not parse here.**

**Rejected on purpose:** PMC11655495, *Frontiers in Sociology*, "Good childhood",
a German-Polish project with 27 group discussions in Poland — a better topical
fit, but a grep of `../2026-09-25-miss-you-30/blogs/` shows that journal already
in **four** posts of the previous batch. Took the second-best source, as the brief
instructs. *Frontiers in Psychology*, PNAS and PMC13552847 were never approached.

**Journal named for the human counter: _Journal of Occupational Medicine and
Toxicology_ (BMC).** `capcheck.mjs` read clean immediately before the write — and
per BRIEF §7 that means nothing about journal caps.

---

## Phase 3b — The linguistic findings

### Case government: **za + narzędnik (instrumental)** — verified

Polish Wiktionary, `tęsknić`, `{{składnia}}`:

```
(1.1) tęsknić za + {{N}} • tęsknić do + {{D}}   <ref>PoradniaPWN id=1561</ref>
(1.2) tęsknić do + {{D}}                        <ref name="Poradnia"/>
```

`N` = narzędnik = instrumental. `D` = dopełniacz = genitive.

Cross-checked against the declension of *ty* on the same site:
`ty / ciebie·cię / tobie·ci / ciebie·cię / **tobą** / tobie`.
**`tobą` is the instrumental**; `ciebie` in *tęsknię do ciebie* is the genitive.
The label in the task prompt was correct.

### *za* vs *do* — **neither regional nor a register split**

Poradnia Językowa PWN answer **№ 1561, 28.08.2002**, prof. dr hab. **Mirosław Bańko**
(Uniwersytet Warszawski), quoting *Inny słownik języka polskiego PWN*:

> „tęsknimy **za** kimś lub za czymś minionym lub utraconym" …
> „tęsknimy **do** czegoś, czego nigdy nie mieliśmy lub nie zaznaliśmy" …
> „W pierwszym znaczeniu zamiast *tęsknić za kimś (czymś)* można też powiedzieć
> *tęsknić do kogoś (czegoś)*, np. »To dobrze, że przyjechałaś, ojciec tęsknił już
> do ciebie«. Natomiast w drugim znaczeniu konstrukcji *do czegoś* nie zastępuje
> się konstrukcją *za czymś*."

**The split is semantic and asymmetric**, not regional and not prescriptive:
*do* may replace *za* in sense 1, *za* may never replace *do* in sense 2.
Both are standard. The corpus ratio is ~3 : 1, not 10 : 1.

**This corrects the task prompt**, which asked which is standard and whether there
is a regional/register split.

### The Polish/Russian contrast — **holds, with one correction and one nuance**

**Holds:** Gramota.ru answer **№ 274269**, 1 April 2014, fetched and read directly:
the entire answer to «скучать по тебе или за тобой?» is
**«Нормативно: скучать по тебе.»** The sibling post on disk adds № 332860:
*скучать за кем-либо* «не является нормативным, выходит за рамки русского
литературного языка». So **the construction that is the Polish default is the one
Russian codifiers place outside the literary norm.**

**Correction to the prompt's framing:** *tęsknić* and *скучать* are **not cognates** —
*скучать* is built on *скука*. The real cognate is Russian **тосковать**: both
*тоска* and *tęsknota* descend from Proto-Slavic `*tъsk-` (en.wiktionary
etymologies; Polish *tęsknić* < Old Polish *tesknić* < `*tъskniti`, with secondary
nasalization). And **тосковать also takes по + dative** — en.wiktionary usage
examples: «тосковать по родине», «Она очень тоскует по другу».
**Same root, opposite government.** That is the stronger version of the claim and
it is what the post prints.

**Honest nuance:** the Russian sibling already established that Ukrainian *скучати*
takes *за* + instrumental as standard. **Russian is the outlier inside its own
family; Polish is not exotic.** The post says so rather than letting the contrast
overclaim.

### *tęsknota* is not untranslatable — tested the saudade way

- Polish Wiktionary lists **four Polish synonyms**: *smutek, nostalgia, utęsknienie, tęsknica*.
- It gives the verb's English equivalents as *miss, yearn*.
- English Wiktionary glosses the noun as ***yearning*, *Sehnsucht***.
- NKJP: **1,282 attestations** in the same 240 M-word subcorpus.

Four in-language synonyms, cross-linguistic glosses in two languages, four-figure
corpus frequency. **The untranslatability claim is a rhetorical figure, not a
lexicographic fact.** One paragraph in the post, not a section.

---

## Phase 4–6 — Build notes

- **Body: 1,776 words** excluding FAQs (range 1,500–1,800, target ~1,750). The
  Russian cross-link is already inside that count.
- **10 FAQs**, Polish, in `article.faqs` and the FAQPage JSON-LD only. Checked
  one by one against the twelve body H2s; none restates a section.
- **Two tables**, four rows each: the corpus/grammar comparison (item 9) and the
  first-party table with `n = 214` figures (item 10).
- **Internal links:** `/missyou-gf` (mandatory), `/streak` (the alternative, with
  the reason: a one-off letter page does not fix a thinned rhythm), `/templates`.
  Plus one blog-to-blog cross-link to the Russian sibling.
- **Product mismatch disclosed twice in Polish prose:** `/missyou-gf` is
  English-only with no Polish version, and is defined at `app/lib/prompt.ts:44` as
  *"I miss you page for a girlfriend/partner"* — addressed to a female partner.
  The post also opens by telling a translation-only reader they need nothing from us.
- **All five mandatory caveats in Polish body prose:** nothing is segmented by
  language or country so no figure is Polish; the DB records which **template** was
  opened, never who received it; city/music/"together since" are pickers with
  defaults; `viewCount` is page views; n = 214 over two months.
- **Price guard:** regex-checked against the finished body for
  *darmowy / bezpłatny / za darmo / nic nie kosztuje / gratis / free* — no match.
  `pricecheck-intl.mjs` clean.
- **Audit: 45 passed, 5 failed, sum 50, intersection empty**, asserted
  programmatically. Failed: **24** (slug keeps the stop words *za*/*po* and drops
  diacritics — imposed by the row), **34** (the Gramota URL literally also sits in
  the Russian sibling, so it fails the swap test as written; kept because the
  contrast is the thesis), **36** (journal caps are unverifiable from inside one
  post), **45** (no H3s for an ItemList to mirror), **50** (no standalone schema
  validator exists).
- **Item 25 is in `passed`, not deferred:** the Strapi API returned
  `data: [], total: 0` for this slug on 2026-09-26. The slug is free.

# Research — `jak-powiedziec-tesknie-inaczej`

**Keyword:** jak powiedzieć tęsknię inaczej · **region** pl-pl · **bodyLanguage** POLISH
· **tier** B-howto · **written** 2026-09-27

---

## 0. Split from the Polish sibling

`blogs/tesknie-za-toba-po-angielsku.json` owns **translating** *tęsknię za tobą* into
English — the *za*/*do* government, the Poradnia PWN ruling № 1561, the Russian
cognate contrast, and what English loses. **This row owns the other direction: what
you can say in Polish INSTEAD of *tęsknię*, and whether any of it survives the
corpus.** Zero overlap in sources except the PELCRA servlet itself, which is the
instrument both rows had to use. The sibling is cross-linked in the closing section.

---

## 1. Phase 1 — SERP

### Route

1. `node scripts/serp-ddg.mjs "jak powiedzieć tęsknię inaczej" --region pl-pl` — run
   **ONCE**, returned `(no results parsed — DDG markup may have changed)`. Not
   retried, per BRIEF §3.
   *(An earlier malformed invocation put `--region` before the query, which the script's
   `args.find(a => !a.startsWith("--"))` parses as the query itself — it searched for the
   literal string `pl-pl`. Recording it because the next agent will make the same mistake.)*
2. **Google, operator's real Chrome, `gl=pl&hl=pl&pws=0&num=20`** — served a real
   Polish SERP on the first attempt. No `/sorry`, no captcha, nothing clicked.
3. **Re-run of the identical URL → identical ten results in the same order.** No Bing,
   Brave or Yahoo needed.

### Self-authentication

Not on the navigation response. On the content: every result is a Polish page about
*tęsknić*/*tęsknie*, and **Google appended its own `Nie zawiera: powiedzieć` note to
the synoniminaczej.pl result and `Nie zawiera: inaczej` to the pl.glosbe.com result** —
machine-checkable proof the index was answering *this* query and not a sibling's.

### The top ten, 2026-09-27

| # | Host | Page type | Weak? |
| --- | --- | --- | --- |
| 1 | synonim.net | auto-generated thesaurus (`/inaczej-tęsknić`) | yes |
| 2 | synonimy.pl | thesaurus (`/synonim/tęsknić`) | yes |
| 3 | synonim.net | thesaurus (`/synonim/tęsknie`) — same domain twice | yes |
| 4 | sjp.pwn.pl | Słownik Synonimów PWN | yes |
| 5 | synonyms.reverso.net | thesaurus scraper | yes |
| 6 | synoniminaczej.pl | thesaurus (`Nie zawiera: powiedzieć`) | yes |
| 7 | synonim.com.pl | thesaurus | yes |
| 8 | synonimy.pl | thesaurus (`/synonim/tęsknie`) — same domain twice | yes |
| 9 | wyrazy.pl | thesaurus | yes |
| 10 | pl.glosbe.com | dictionary / translation memory (`Nie zawiera: inaczej`) | yes |

**Weak count: 10 of the 10 I actually saw.** Six distinct domains, two appearing twice.
**Not one editorial page. Not one page written for a person composing a message.**
Gate 4: **PROCEED** — this is the weakest top ten measured on any row in this batch.

**People Also Ask** carried four questions, all four answer panels rendering
`Wystąpił błąd` (not reported as a finding, transient): *Jak zastąpić słowo „tęsknić"? ·
Jak inaczej nazwać tęsknotę? · Jaki jest synonim słowa „tęsknię za tobą"? · Jakie są
synonimy słowa „tęsknie"?* — used as the Phase 2 fan-out and answered in the FAQs.

### Phase 2 — gap

Table stakes: a list of alternative words. **The gap, and it is total: not one ranking
page says whether any word it offers is actually used, what case it governs, what
register it carries, or what it means differently.** Nobody has run a corpus.

**Angle:** the only post that measures every candidate against NKJP, finds two of the
top-ranked suggestions have zero attestations, and then argues against its own keyword.

---

## 2. Checkable errors in ranking results — three

1. **Rank 1, synonim.net** offers *zatęsknić się* and *zapamiętać się w tęsknocie* as
   the "most popular" synonyms of *tęsknić*. **Both: 0 paragraphs in the balanced
   NKJP.** *zatęsknić się* has **no Wikisłownik headword at all** — the headword is
   *zatęsknić*, without *się*.
2. **Rank 4, Słownik Synonimów PWN** offers *cknić się* / *cnić się*. Wikisłownik marks
   *cnić się* **przestarzały** and "czasownik niewłaściwy zwrotny niedokonany"; its only
   citation is a Krzysztof Krawczyk song. *cknić się* is a redirect. **Both: 0 paragraphs.**
3. **Rank 7, synonim.com.pl** lists as "inne określenia słowa Tęsknie": *nietęskniąca,
   nietęskniącą, nietęskniące, nietęskniącego, nietęskniącej, nietęskniącemu* — **the
   declension table of the NEGATED participle *nietęskniący***, i.e. the opposite
   meaning and a different part of speech, pasted in as synonyms. *nietęskniący*: 0
   paragraphs, and no Wikisłownik headword.

Ranks 6 and 10 additionally give **brakować** as a synonym of **tęsknić** — the exact
substitution section 3 shows to be ungrammatical.

None of these pages is linked in the post.

---

## 3. The spine — `brakuje mi ciebie` has NO grammatical subject

The prompt asked whether it inverts like French *tu me manques*. **It does not, and the
true answer is stronger.**

- Wikisłownik, *brakować* (1.1): **"czasownik nieprzechodni niedokonany"**, "być w zbyt
  małej ilości lub liczbie, nie wystarczać".
- Its own example: ***Brakuje mi moich ulubionych butów***. *butów* is **dopełniacz**
  (nominative would be *buty*). Experiencer in the **celownik** (*mi*).
- The pronoun proves nothing: *ciebie* is syncretic gen/acc. The noun does.
- **Poradnia PWN № 23173, 7.01.2024, Adam Wolański** (Wayback, headword read and
  confirmed): *brak* in this function "**odmienia się tylko przez czasy i tryby**".

Not by person. Not by number. Reader-checkable: *brakuje mi ciebie / was / ich* — the
verb never changes. French *tu me manques* has a **nominative subject** the verb agrees
with. Polish has **none**. Third pattern, not a copy.

Wikisłownik's own translation row glosses *brakować* (1.1) as French *manquer*, Italian
*mancare*, Spanish *faltar* — the cross-linguistic hook, from the dictionary, not memory.

---

## 4. NKJP via PELCRA — the dataset

**Balanced subcorpus, 240,192,461 words.** Servlet parameters, sent verbatim off the
form's own defaults (the sibling's finding, reconfirmed — a minimal parameter set still
NPEs): `span=0`, `sort=srodek`, `second_sort=lewa`, `groupBy=---`,
`m_nkjpSubcorpus=balanced`, `m_date_from=RRRR`, `m_date_to=RRRR`,
`dummystring=ąĄćĆęĘłŁńŃóÓśŚźŹżŻ`.

**Every hit inspected individually.** Two bold spans on every page are the servlet's own
hit count and timing string — discarded programmatically, not counted.

| Query | akapity (header) | różne teksty | exact word order | free order | rejected |
| --- | --- | --- | --- | --- | --- |
| myślę o tobie | 102 | 78 | 73 | 26 | 2 |
| tęskno mi | 54 | 31 | 49 | 11 | 0 |
| stęskniłam się | 41 | 33 | 31 | 11 | 0 |
| tęsknię za tobą | 39 | 34 | 30 | 10 | 0 |
| stęskniłem się | 34 | 30 | 29 | 5 | 0 |
| brakuje mi ciebie | 21 | 20 | 12 | 9 | 0 |
| tęsknię do ciebie | 11 | 3 | 8 | 3 | 0 |
| brak mi ciebie | 9 | 8 | 2 | 7 | 1 |
| tęsknota za tobą | 6 | 6 | 6 | 0 | 0 |
| tęskno mi za tobą | 1 | 1 | 1 | 0 | 0 |
| brakuje mi cię | 1 | 1 | 1 | 0 | 0 |

**ZERO paragraphs:** `zatęsknić się`, `cknić się`, `cnić się`,
`zapamiętać się w tęsknocie`, `schnąć z tęsknoty`, `usychać z tęsknoty`,
`nietęskniący`, `myślami jestem przy tobie`. (`wzdychać za`: 1.)

### The sibling's counts reconciled, not contradicted

The sibling recorded **30** and **8** for *tęsknię za tobą* / *tęsknię do ciebie*. Three
identical runs here returned headers of **39** and **11**. **PELCRA `NKJPSpanSearch` is a
SPAN search, not a phrase search** — it also matches the same words in another order
(*za tobą tęsknię*). Splitting every row by word order reconciles the two exactly: 30 of
39 and 8 of 11 are in the query's own order. **The header number is not a phrase count.**

`m_nkjpSubcorpus=full` also works (1,524,696,745 words; 112 for *tęsknię za tobą*).
Not used — the balanced subcorpus keeps this comparable to the sibling.

---

## 5. The Norwid result

`tęskno mi` looks abundant (54 akapity) and is not. **22 of the 60 inspected rows are
Cyprian Kamil Norwid's *Moja piosnka*** — the refrain „Tęskno mi, Panie…", plus „Tęskno
mi jeszcze i do rzeczy innej" and „Tęskno mi ówdzie". NKJP's own source labels include
*Czesław Niemen*, whose 1970 setting is why the line is ambient in Polish.

Read the poem in full (pl.wikisource, Pini ed. 1934, public domain): **every complement
is *do* + dopełniacz and every one is a place or an abstraction** — „Do kraju tego", „do
rzeczy innej", „do beztęsknoty". **Never a person.**

Of the 60 rows, **only 4 have a person as the complement**, one of which addresses a
country („za tobą mój kraju, mój Poznaniu"). And ***tęskno mi za tobą* has exactly one
attestation in 240 million words.**

Document count says the same thing more cleanly: 54 hits from only **31 texts**, the
worst diversity ratio in the set.

---

## 6. Register and aspect, per named entry

| Form | Label / part of speech | Government | Source |
| --- | --- | --- | --- |
| stęsknić się | dokonany; marks speaker's gender | za + narzędnik (24 + 32 hits, all inspected) | NKJP; no pl.wikt headword for the lemma |
| tęskno / tęsknie | przysłówek, "w sposób tęskny" | do + dopełniacz in practice | pl.wikt *tęskno*, *tęsknie* |
| zatęsknić | dokonany, "poczuć tęsknotę" | example takes *do* | pl.wikt *zatęsknić* |
| tęsknota (noun) | — | "do kogoś/czegoś **lub** za kimś/czymś" | pl.wikt *tęsknota* składnia |
| tęsknica | **książk., poet.**; sense 1.2 = a Slavic-mythology demon | — | pl.wikt *tęsknica* |
| utęsknienie | **przest.**; lives in *oczekiwać z utęsknieniem* | — | pl.wikt *utęsknienie* |
| cnić się | **przest.**, "czasownik niewłaściwy zwrotny" | do + D / za + N | pl.wikt *cnić się* |
| myśleć | niedokonany | **o + miejscownik** / nad + N | pl.wikt *myśleć* składnia |

**Gender, which English cannot do:** *stęskniłam się* 41/33 vs *stęskniłem się* 34/30 —
the feminine is the commoner form, and together they outnumber *tęsknię za tobą*.

### Cut, and why

- **myślami jestem przy tobie** (row note candidate) — **0** in NKJP. Not printed.
- **nie mogę się doczekać** — 275 hits, cut on **meaning**: it points at a future
  reunion, not a present absence. Not a way of saying *tęsknię*.
- **brak mi ciebie** — 9/8, and only 2 of 10 rows in that word order, one of which is the
  cross-sentence artefact „mi brak. Ciebie". Cut from the main table.
- **jestem stęskniony / stęskniona** — 2 each. Too thin.
- **tęsknica, utęsknienie** — survive in an FAQ only, on their dictionary labels.

### Tatoeba — deliberately not used

The sibling measured 43 za-forms / 0 do-forms at 100% precision and then **refused** to
treat the zero as evidence, because NKJP showed 8 and 41 for the same strings. With a
working NKJP route returning document counts as well, a second and much smaller corpus
would add noise, not evidence. **No Tatoeba figure appears in this post.**

---

## 7. Instruments — what resolved and what did not

| Instrument | Result |
| --- | --- |
| `sjp.pwn.pl` | **HTTP 403**, every path. Sibling's finding reconfirmed. |
| Wayback → Poradnia № 23173, № 9169 | **200**, headwords read and confirmed |
| `doroszewski.pwn.pl` | **does not resolve** (fetch failed, not 403) |
| `wsjp.pl/haslo/do_druku/45789/brakowac` | **404** |
| `pl.wiktionary.org` API | 200 — *brakować*, *tęsknota*, *myśleć*, *cnić się*, *tęskno*, *tęsknie*, *zatęsknić*, *utęsknienie*, *tęsknica*, *tęskny*, *brak* |
| `pl.wiktionary.org/wiki/stęsknić_się` | **missingtitle** — no headword for the lemma |
| PELCRA `NKJPSpanSearch` | **works**, with the form's own defaults |
| `pl.wikisource.org` API | 200 — Norwid, Pini ed. 1934 |
| Europe PMC `fullTextXML` | 200 on all three papers fetched, no retry needed |

**Poradnia № 9169** (Bańko, 26.04.2008) was read and is a real finding — „Nie mam
pieniędzy, ale nie brakuje mi ich" is non-contradictory because *brakować* encodes
**need**, not absence — but it was **cut from `sources`** to keep outbound links at 6.

---

## 8. Sources — 6, journals named

1. **Poradnia Językowa PWN № 23173** (Wayback), 7.01.2024, Adam Wolański
2. **pl.wiktionary, *brakować*** — nieprzechodni; genitive complement; FR/IT/ES glosses
3. **pl.wiktionary, *cnić się*** — przest., czasownik niewłaściwy
4. **NKJP balanced subcorpus via PELCRA**, queried 2026-09-27
5. **Norwid, *Moja piosnka*** (pl.wikisource, Pini 1934, public domain)
6. **Davis, Troutman-Jordan & Maclagan 2024**, *International Journal of Language &
   Communication Disorders* 59(1):84–93, doi 10.1111/1460-6984.12915, CC BY-NC,
   `isOpenAccess=Y`. **FULL TEXT READ** (90,309 bytes of JATS via `fullTextXML`).
   Quotes the definition it still prefers, Wray & Perkins (2000:1): a formulaic sequence
   is "prefabricated: that is, **stored and retrieved whole from memory at the time of
   use, rather than being subject to generation or analysis by the language grammar**";
   summarises Van Lancker Sidtis's dual-process model, formulaic vs novel language
   "as analytic and holistic, and as governed by principles of open choice and idiom".
   **Journal at 0 prior posts across `content/batches/*/blogs/` when measured.**

### Cap findings — the prompt's list was wrong on two journals

Measured by grep across `content/batches/*/blogs/` before writing:

- **Memory & Cognition: 7 posts.** The prompt said "at 2, one slot". It is **over cap 3**.
  Cost me **PMC13407966** ("Native speakers kick buckets, but learners kick doors"),
  which was the single best topical fit and is **also already in 3 posts** against a URL
  cap of 2.
- **IJERPH: 8 posts.** The prompt said "at 2, one slot". **Over cap 3.**
- Avoided entirely: Frontiers in Psychology, PLoS ONE, Scientific Reports, BMC
  Psychology, PNAS, `doi.org` as a host, PMC8669216, PMC13455274.

**Read in full and then cut for the 6-link cap:** PMC12627139, *Psychonomic Bulletin &
Review* 2025, "The effects of contextual diversity on lexical processing: A scoping
review", CC BY, 351,530 bytes read. N = 145 studies, 61 on word-form processing, 92.86%
interrater agreement on the double-screened 10%. Its core result — **contextual
diversity, the number of distinct documents a word occurs in, explains significantly
more variance in lexical decision and word-naming latency than raw word frequency** — is
why this post prints document counts beside paragraph counts. Journal at 0 prior posts;
**unspent and available to a later row.**

---

## 9. First-party facts

Five used, byte-verbatim. The two edit-gap lines are used **together and explicitly
distinguished**, in prose and in a table, because BRIEF §6 records them being conflated:
**2.6 h is n=214 on /missyou-gf; 2.5 h is n=1,396 sampled on /apology-dashboard.** Six
minutes apart, two different measurements.

Collision count across both batches at write time: 2.6 h → 35 posts, written memories →
37, open-when letters → 38, **38.5% password-protection → 0** (platform-wide, unused),
/apology-dashboard edit gap → 4. The sibling's five lines were all avoided.

All four mandatory caveats are in **Polish body prose**, including the one that matters
most here: **the database records which TEMPLATE was opened, never who received it, and
nothing in it is segmented by language or country. None of these numbers is "Polish."**

---

## 10. Product

`/missyou-gf` mandatory; defined at **`app/lib/prompt.ts:44`** as "I miss you page for a
girlfriend/partner" — verified at source. Disclosed in Polish prose: English interface,
no Polish version, addressed to a female partner, only the sender's own text is Polish.

`/catch` was checked against `prompt.ts` and **kept rather than swapped**. Its
description — "a letter that falls from the sky one line at a time… nothing is ever
locked, each catch just adds a line" — is a **"say more"** tool, which is exactly what
this post concludes the reader needs instead of a different verb, and it is linked to
the 86.4% / 92.1% figures that establish that conclusion. `/templates` carries the
price-guard sentence.

---

## 11. Verdict

**"Inaczej" is bad advice, and the corpus says so rather than me.** Two of the forms the
ranking pages name first are unattested in 240 million words; a third of the most poetic
one is a single 1854 poem; the form that works best (*stęsknić się*) is not a different
phrase but the same verb in the perfective. The post's closing advice is to keep the
verb and change the detail — the opposite of what the keyword asks for.

Audit: **46 passed, 4 failed**, `passed ∩ failed = ∅`. Failures: the slug (imposed by
the row), the swap test (PELCRA sits in the sibling too; the formulaic-language review
would fit the other "say it differently" rows), the source cap (unverifiable from inside
one post), and the ItemList (no H3s to mirror).

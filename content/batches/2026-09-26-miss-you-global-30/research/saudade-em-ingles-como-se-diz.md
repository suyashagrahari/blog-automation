# Research — saudade em ingles como se diz (br-pt, A-translate)

Written 2026-09-26. Row: `saudade-em-ingles-como-se-diz`, bodyLanguage Portuguese (pt-BR),
region br-pt, category `miss-you-across-miles`, templates `/missyou-gf`, `/streak`, `/templates`.

---

## 0. Split from the two saudade siblings

- `o-que-significa-saudade` — the MEANING lane: what the dictionaries define, and the
  refutation of strong untranslatability via the Real Academia Galega.
- `saudade-ou-saudades-qual-o-certo` — the GRAMMAR lane: VOLP/ABL two headwords,
  Priberam plural-only senses, Ngram frame frequencies.
- **This post** — the TRANSLATION-PRACTICE lane: what a Brazilian actually types in an
  English message tonight. Untranslatability is NOT re-argued and the plural question is
  NOT re-decided; both are pointed at with a cross-link.

A fourth Portuguese translation row exists in the plan, `sinto-sua-falta-em-ingles`.
It was not on disk at write time; its lane is the *sinto sua falta* construction rather
than the noun *saudade*, so no cross-link was possible.

## 1. SERP — measured, with the route named

**Dead routes, each tried once:**

| Route | Result |
| --- | --- |
| `scripts/serp-ddg.mjs` | `UND_ERR_CONNECT_TIMEOUT` to `html.duckduckgo.com:443` |
| Google br-pt in the shared browser | 7 navigations, all → `/sorry/index` |
| yep.com API (Ahrefs index) | 403 Cloudflare |
| Qwant v3 API | 403, DataDome captcha redirect |
| Mojeek | 200 but a 5.5 KB stub |
| Startpage | 200, Anubis proof-of-work challenge |
| Bing HTML page in the browser | degraded bot-detection shell, `li.b_algo` contains only CSS |

**The route that worked:** Bing's RSS endpoint,
`https://www.bing.com/search?q=<query>&format=rss&count=30&setmkt=pt-BR&setlang=pt-BR&cc=BR`.
Run twice, byte-identical ten results. Labelled as an instrument substitution in the body.

**Top 10 for `saudade em inglês como se diz`, Bing pt-BR, 2026-09-26:**

| # | Host | Page type | Weak? |
| --- | --- | --- | --- |
| 1 | mairovergara.com | Established Brazilian ELT brand, long post | no |
| 2 | mosalingua.com/pt | International language app, translated PT section | no |
| 3 | clarkeprofessordeingles.com.br | Individual teacher's blog | WEAK |
| 4 | letras.mus.br/academy/blog | Big Brazilian lyrics site, thin sub-blog | no |
| 5 | chavedoingles.com.br | Small teacher blog | WEAK |
| 6 | fluency.io/br/blog | Brazilian ed-tech blog | no |
| 7 | amerishenglish.blogspot.com | Free blogspot host | WEAK |
| 8 | hridiomas.com | Small language school | WEAK |
| 9 | aprendafalaringles.com.br | Small blog, "53 frases prontas" listicle | WEAK |
| 10 | pedrogalvao.com/dcs | Personal site, "Método RRSLG" | WEAK |

**Weak count: 6 of 10, all 10 actually seen.** No dictionary, no national language
authority, no strong Brazilian editorial publisher in the ten. Not one of the ten cites a
dictionary entry with an address.

**Gate 4 verdict: PROCEED.** This is not a SERP of strong Portuguese editorial — it is a
field of English-teaching blogs and individual teachers.

**Translate widget: NOT MEASURED, NOT ASSERTED.** An RSS feed carries no SERP furniture,
and Google never opened. The post says so explicitly instead of guessing either way.

**Shared-browser contention, confirmed twice:** a navigation I issued returned
`kangen kamu bahasa jawa` (gl=id) and later `mi manchi in spagnolo` (gl=it) — other
agents' pages in my tab. Every scrape was self-authenticated against my own query before
being recorded.

## 2. Checkable error in a ranking result

**`chavedoingles.com.br`, position 5, published 2026-05-20 — self-refuting on one page.**

- Body: "O inglês simplesmente não tem uma palavra única que carregue todo esse significado de uma vez."
- Its own FAQ, same page: "'Saudade' existe no dicionário inglês? **Sim!** A palavra foi
  incluída no dicionário Oxford, reconhecida como intraduzível…"

English has no word for it, and the word is in an English dictionary, on the same page.
Independently checkable: Wiktionary carries a full **English** headword for *saudade*.

Same page also asserts "Dicionários de todo o mundo a reconhecem como intraduzível" —
no dictionary carries an "untranslatable" label, and Priberam's own translation aid and
Michaelis's bilingual edition both supply English glosses.

## 3. Instruments — every one fetched, every one verified to serve the right word

### Priberam (`dicionario.priberam.org`)

- `/pt-br/saudade` → 200, Brazilian norm. Emotional senses 1–2; **3–5 are the plant**.
  Separate plural headword: **6 "Boas lembranças ou recordações"**, **7 "Cumprimentos a
  alguém" (ex.: "mande-lhe saudades minhas")** — the sign-off sense.
- Block "Auxiliares de tradução → Traduzir 'saudade' para: Espanhol / Francês / Inglês",
  whose EN href is `../Traduzir/EN/saudade`.
- **`/Traduzir/EN/saudade` → 200. Entire English content: `saudade nome homesickness; yearning.`**
  Two nouns. Neither is *miss*.
- `/Traduzir/EN/saudades` → 200, **same single entry**. The aid does not distinguish plural.
- **`/pt-br/Traduzir/EN/saudade` → "Página não encontrada".** This is the 404 a sibling hit:
  the pt-BR prefix required for the definition breaks the translation aid.
- **Gap:** the aid has no gloss at all for the sense-7 greeting the same dictionary records.

### Michaelis (`michaelis.uol.com.br`)

Bilingual edition reached by reading the dictionary selector's own attributes
(`data-rep=1 data-from=0 data-to=1` = "Português - Inglês (Moderno)") →
`busca?r=1&f=0&t=1&palavra=saudade`.

Entry, verbatim:

> saudade sau.da.de sf 1 longing, yearning (for someone), fond remembrance: *estou cada vez
> com mais saudade de você / I miss you more and more every day*: *tenho muita saudade dele /
> I miss him very much*. 2 homesickness, nostalgia. 3 Bot scabious, columbine. 4 bras a
> seamen's song. **5 saudades bras compliments, affectionate greetings to absent persons.**
> Expressões: *matar ou desafogar saudades* to visit or see again a person or place one likes
> very much. *meu coração tem saudade de* my heart aches for. *ter saudade da sua terra ou
> pátria* to be homesick, have a longing or hankering for one's home or country.

Monolingual (`r=0&f=0&t=0`): **"saudades sf pl Lembranças ou cumprimentos afetuosos de quem
sente a ausência de outrem."** Agrees with Priberam 7.

Reverse direction (`r=1&f=1&t=0`): `homesickness` → "saudade da pátria, do lar e da família,
nostalgia"; `yearning` → "anseio, anelo, desejo ardente, aspiração, saudade".

### Aulete (`aulete.com.br/saudade`) — READ, then CUT from sources

Sense 1 "[Tb. us. no pl.]", etymology "[F.: Do lat. solitate (m)]". Both are the siblings'
lanes (plural, etymology), so it was dropped rather than padded in.

### Wiktionary (`en.wiktionary.org/wiki/saudade`, read via `action=raw`)

- **English section exists**: `{{en-noun|-}}` (uncountable), IPA /saʊˈdɑːdə/, borrowed from
  Portuguese, "A feeling of melancholy and wistful yearning for something that is absent,
  impossible or lost."
- Portuguese noun gloss: "wistfulness, melancholy, nostalgia, yearning, longing; the feeling
  of missing something or someone". **All three usage examples translate with a VERB**:
  *sentir saudade de alguém* → to miss someone; *ter saudades de casa* → to miss home, to feel
  homesick; *matar saudades* → to catch up (with someone).
- Etymology: from Old Galician-Portuguese *soydade*, from Latin *sōlitātem*. On Arabic
  سَوْدَاء it says "though **no strong evidence exists** for the latter" — a refinement of the
  meaning sibling's "no dictionary mentions Arabic", not a contradiction of its conclusion.

### Tatoeba — the measurement

Pulled every Portuguese sentence containing *saudade* that has an English translation
(api_v0, `from=por&to=eng`, paginated):

- **142 unique PT→EN pairs.**
- **124 (87.3%) translate with the English verb *miss*.**
- 7 use a noun/adjective: *I long for you* ×2, *I yearn for the university* ×2,
  *a persistent longing* ×1, *feels homesick* ×2 (both from *sente saudades de casa*).
- 11 do something else: 5 render *não sinto saudade de nada* as **"I have no regrets"**,
  and *a saudade aumenta o amor* → **"absence makes the heart grow fonder"**.

English-corpus phrase counts, same day:

| Phrase | Sentences |
| --- | --- |
| "I miss you" | **110** |
| "I long for you" | 5 |
| "I'm homesick" | 3 |
| "I miss home" | 2 |
| "I miss those days" | 1 |
| "I feel nostalgic" | 1 |
| **"I yearn for you"** | **0** |
| "yearn for you" | 0 |

Caveat recorded in `additionalChecks`: Tatoeba's engine STEMS single-word quoted queries
("longing" returns "Too long!"), so only multi-word phrase counts are reported.

## 4. The frame-by-frame answer, with its licence

| Frame | English | Licensed by |
| --- | --- | --- |
| A person | *I miss you* | Michaelis PT-EN sense 1 example; Wiktionary *sentir saudade de alguém*; Tatoeba 124/142 |
| Home, city, country | *I miss home* / *I'm homesick* | Priberam aid ("homesickness"); Michaelis "ter saudade da sua terra… to be homesick"; Wiktionary *ter saudades de casa* |
| A past time | *I miss those days* / *nostalgia* | Michaelis PT-EN sense 2 "homesickness, nostalgia" |
| The abstract emotion | *longing* / *yearning* | Priberam aid ("yearning"); Michaelis sense 1 — **but "I yearn for you" = 0 in corpus** |
| Letter sign-off | **no equivalent** | Priberam 6–7; Michaelis monolingual "saudades sf pl"; Michaelis bilingual sense 5 "compliments, affectionate greetings to absent persons" |
| Reunion (*matar saudades*) | *to catch up* / *to visit or see again* | Wiktionary; Michaelis expressões — note: no *miss* at all |
| Borrow it | write *saudade* | Wiktionary English headword, /saʊˈdɑːdə/ |

**Noun-to-verb shift: HELD**, triangulated three ways (Michaelis's own examples contradicting
its own glosses; Wiktionary's three usage examples; Tatoeba at 87.3%).

**Sign-off finding: HELD, and stronger than expected** — one dictionary records a sense at 7
that its own bilingual tool cannot gloss.

## 5. Peer-reviewed, open access

Both found through `findpapers.mjs` (Crossref + Europe PMC), both read as PMC full text.
`europepmc.org/article/PMC/...` returns 403 to a script; `pmc.ncbi.nlm.nih.gov/articles/...`
serves 200, so that is the citation URL. No PDF was parsed.

1. **"Negotiating language in family texts: case-study of transnational families in Finland"**,
   *Frontiers in Psychology*, 2025, doi:10.3389/fpsyg.2025.1672423, PMC12823517. Six bilingual
   Russian-Hebrew parents in Finland; translanguaging in family texts classified by form
   (isolated insertions, sentence-level switches, complex constructs) and function
   (local/temporal, **phatic**, address terms), which "reinforce familial bonds". Used for the
   narrow claim that keeping the home-language word inside an English message is an attested
   device, not a vocabulary failure.
2. **"Understanding *Love* in the L1 and the Additional Language"**, *Journal of Intelligence*,
   2025, doi:10.3390/jintelligence14010003, PMC12842814. 66 A2 learners; significantly more
   semantic-fluency responses for *Amor* than *Love* (t = −8.866, p < 0.001); L2 responses
   "probably mediated by L1 translation equivalents".

Both were checked against the spent/banned list: neither is `doi.org`-resolved into a banned
publisher, neither is the ANU Bułat Silva paper, the psychopen Saudade Scale, PMC8144866 or
the *Encyclopedia* 2026 article. `capcheck.mjs` run immediately before writing: no banned URL,
no domain at cap 3, no URL at cap 2.

**Swap test, honestly:** both papers would survive a swap into another A-translate row. The
Tatoeba measurement and all four dictionary pages would not. Recorded as a checklist failure
rather than disguised.

## 6. First-party facts and the differentiation problem

All twelve miss-you lines in `facts-snapshot.md` are spent: the least-collided has **26** prior
uses across the 64 posts in this batch and the 2026-09-25 batch, and the two saudade siblings
between them have touched **every one**. Picked the three lowest-collision lines the *meaning*
sibling did not use:

- median 2.6 h first-save-to-last-edit, n=214 (26 prior uses) — used in the first 150 words
- 88.8% published and shared, 190 of 214 (28) — used in the first 150 words
- 47 distinct city pairs from a 15-city picker (31)

Differentiation is thin and the audit says so. Mandatory caveats written in Portuguese body
prose: city is a picker with defaults, viewCount is page views not unique visitors, n = 214
over two months supports no seasonal reading, and — the one that matters most here — **nothing
in the database is segmented by language or country, and the record stores which template was
opened, never who received it. No figure is Brazilian.**

## 7. Product honesty

`app/lib/prompt.ts:44` defines `/missyou-gf` as "'I miss you' page for a girlfriend/partner" —
English labels, recipient-specific. Disclosed in body prose: the page is entirely in English,
which for this reader is less of a mismatch than usual because they came wanting English, but
it is still an English screen. And the post says outright that a reader who only needed the
translation needs nothing from us: "Feche esta página e mande *I miss you*. Resolve."

Alternative offered with its reason: `/streak`, for a reader whose saudade is continuous
distance rather than one message. Price claim refused without any guarded token.

## 8. Lines cut

- A Linguee/Glosbe attested-usage section. Tatoeba gives a countable, reproducible parallel
  corpus; the other two would have added assertion without a number.
- The Aulete citation (see §3).
- Any re-argument of untranslatability, and any re-decision of the singular/plural question.
  Both belong to the siblings and are cross-linked instead.

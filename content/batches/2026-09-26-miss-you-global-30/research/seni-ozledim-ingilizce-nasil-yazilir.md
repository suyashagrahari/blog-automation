# Research brief — `seni-ozledim-ingilizce-nasil-yazilir`

- **Keyword:** `seni özledim ingilizce nasıl yazılır`
- **Body language:** Turkish · **Region:** `tr-tr` · **Tier:** `A-translate`
- **Category:** `miss-you-across-miles` · **Templates:** `/missyou-gf`, `/streak`, `/templates`
- **Written:** 2026-09-26

---

## 0. Phase 0 — data gate

`facts-snapshot.md` (pinned) was used, never `content/facts.md`.

Three lines chosen, all of them **unused by the Turkish sibling**
`seni-ozledim-mesajina-verilecek-cevaplar`:

1. `92.1% of miss-you pages carry at least one "open when" letter (197 of 214), 3.2 on average and 6 at most`
2. `2,417 recorded views of miss-you pages, 11.3 per page on average, 104 on the single most-opened page`
3. `Miss-you pages name 47 distinct city pairs drawn from a 15-city picker, including cross-border pairs such as Mumbai-London and Berlin-London`

Two are inside the first 150 words. **Differentiation is thin and recorded as such**:
each of the three still appears in four other posts in this batch, and no line in
facts-snapshot.md is about translation, about Turkish, or about a Turkish sender.

Five caveats carried in Turkish body prose, not only in the audit: picker-with-default
(cities), `viewCount` = page views not unique visitors, n = 214 over two months,
**nothing in the database is segmented by language or country — no figure is Turkish**,
and the database records **which template was opened, never who received it**.

---

## 1. SERP — measured, with the instrument named

**Google was not obtainable.** `google.com/search?q=…&gl=tr&hl=tr&pws=0` returned
`/sorry/index` with **HTTP 429 twice**: once through the Playwright MCP browser, once
through the shared real Chrome (PolterTab). No Google SERP is reported anywhere in
this record.

**Route used: Bing `mkt=tr-TR&setlang=tr` in a real browser, loaded twice, identical
result set both times.** Every scrape self-authenticated by reading the page's own
search box back (`seni özledim ingilizce nasıl yazılır`) and confirming Turkish chrome.
Bing is a different index from Google — this is an **instrument substitution** and is
labelled as one in the post itself.

> **Correction to BRIEF §3 and to `WAVE1-PLAN.json` knownIssues.** The brief names the
> Playwright MCP browser as "isolated … per-agent, and immune to the contention".
> **It is not.** Mid-call my Playwright page navigated itself to
> `bonobology.com/de/Ich-vermisse-deine-Nachrichten-für-ihn/` — a German sibling's
> competitor page — and destroyed my execution context. Workaround: open a dedicated
> tab (`browser_tabs new`) and combine navigate + extract into a single atomic
> `browser_run_code_unsafe` call to shrink the contention window. Any later row relying
> on "isolated Playwright" must self-authenticate exactly as the shared-Chrome rule
> already requires.

### Organic results seen: 9 of 9. Weak: 8.

| # | Host | Page type | Weak |
|---|---|---|---|
| 1 | tureng.com (`/seni özledim`) | bilingual term bank — word pairs, no prose, no grammar | yes |
| 2 | tureng.com (`/özledim`) | same term bank, same domain twice | yes |
| 3 | translate.google.com.tr | MT tool **homepage** — no content about the query at all | yes |
| 4 | context.reverso.net (`Seni+özledim`) | machine-aligned translation-memory dump | yes |
| 5 | lovelanguages.io | the only editorial page — see below | **no** |
| 6 | tr.hinative.com/questions | user-generated Q&A | yes |
| 7 | context.reverso.net (`nasıl+özledim`) | TM dump, off-query phrase | yes |
| 8 | translate.google.com | MT tool homepage, **a second time** | yes |
| 9 | ingilizcesi.com (`/ceviri/ozledim-seni`) | auto-generated MT output; fetched HTTP 200, page states its own output is "makine çevirisi ile yapılmış" | yes |

### Does a translate widget outrank everything? **Yes — twice over.**

- A **Bing QnA answer card** sits above every organic result: *"I miss you — 'Seni
  özledim' İngilizce'de 'I miss you' olarak çevrilebilir…"*, attributed to Tureng.
- **Bing's own inline translator widget** (`li.b_ans.b_mop`) sits between organic 1 and
  organic 2.
- **Google Translate's homepage takes two of the nine organic slots.**

This is the same structural ceiling the French sibling recorded, and it is real here.

### Gate 4 verdict: **PASS**, ceiling named.

Zero Turkish editorial properties, zero national publishers, zero dictionary
authorities carrying grammatical prose. Not one result explains the `-di` past, the
`belirtme durumu` on *seni*, or the *özledim / özlüyorum* split. The one non-weak
result answers a different Turkish word than the query asks about. I will not outrank a
translation widget for the bare lookup — but the widget's answer is wrong-shaped and
nothing on the page corrects it, which is the gap.

---

## 2. Checkable errors found in ranking results — two

### (A) The machine-translation layer at the top of the SERP collapses six sentences into two

Measured 2026-09-26 against `translate.googleapis.com` (public `gtx` endpoint),
reproducible:

| Turkish in | English out |
|---|---|
| Seni özledim. | I miss you. |
| Seni özlüyorum. | I miss you. |
| Sizi özledim. | I miss you. |
| Özledim. | **I miss.** |

| English in | Turkish out |
|---|---|
| I miss you. | Seni özledim. |
| I missed you. | Seni özledim. |
| I have missed you. | Seni özledim. |

- Three Turkish sentences differing in **tense** and in **register** produce one string.
- Round-tripping **`Sizi özledim.` returns `Seni özledim.`** — the tool silently demotes
  the polite/plural form to the informal singular, against **TDK's own `siz` entry**,
  whose second sense is *"Bir kişiye saygı ve incelik belirtisi olarak kullanılan bir
  seslenme sözü."*
- **`Özledim.`** — a complete Turkish sentence, and the premise of the whole page —
  comes back as **"I miss."**, which is not a grammatical English sentence.

Google Translate's homepage ranks twice on this SERP.

### (B) The only editorial page on the SERP answers a different word

`lovelanguages.io` (organic #5) read in a real browser — a scripted fetch gets a Vercel
bot checkpoint (HTTP 429). H1: **"İngilizce Özlem İfadeleri: Seni Özlüyorum Nasıl
Söylenir."** In **8,059 characters** it uses ***özlüyorum* 4 times and *özledim* once**,
and has no grammar section at all (H2s: Özlemi Dile Getirmek, Temel Özlem İfadeleri,
Duygusal ve Derin İfadeler, Mesajlaşma için Kısa İfadeler, Romantik ve Poetik İfadeler,
Kullanım İpuçları, Kültürel Notlar, Sonuç).

This **independently reproduces** what the Turkish reply-lane sibling found on wikiHow
Türkçe — a title about *özledim* whose body switches to *özlüyorum* — on a different
page, a different SERP, a different publisher. The corpus counts below explain *why*
the switch keeps happening.

---

## 3. The tense question — verified, and the prompt's framing corrected

**The prompt's claim:** *"özledim is morphologically past (-di), but the natural English
is the present 'I miss you', not 'I missed you'."*

**First half VERIFIED. Second half CONTRADICTED by the evidence.**

### Dictionary layer (TDK Güncel Türkçe Sözlük, `gts` endpoint, HTTP 200, 2026-09-26)

| Entry | What it says |
|---|---|
| `özlemek` | `[-i]` — governs the **belirtme (accusative)**. Definition is a **present desire**: *"Bir kimseyi, bir yeri veya bir şeyi görmeyi, ona kavuşmayı istemek, göreceği gelmek."* |
| `görülen geçmiş zaman` | *"Fiilin belirttiği kavramın, içinde bulunan zamandan önce **bitmiş** olduğunu bildiren ve **-dı** ekiyle kurulan zaman."* |
| `kişi eki` | *"Fiil çekimlerinde kişiyi gösteren ek; şahıs eki: geldi-m, gelir-iz, gelmiş-sin."* → **-m carries 1sg** |
| `belirtme durumu` | *"Adın fiile -ı eki aracılığıyla bağlandığı durumu; yükleme durumu, yükleme hâli, **akuzatif**."* |
| `şimdiki zaman` | *"…**-yor, -makta** ekleriyle kurulan zaman."* |
| `siz` | TWO senses: *"Çokluk ikinci kişi zamiri"* AND *"Bir kişiye **saygı ve incelik** belirtisi olarak kullanılan bir seslenme sözü."* |
| `bende` | separate headword, **Persian**, *"eskimiş"*, glossed **"► köle"** |

So *özle-di-m* is **past-marked** while the verb's own definition names a **present
state**. That clash is the whole page.

### Wiktionary (MediaWiki API, 2026-09-26)

- `özlemek` (pageid 1860473): *"to miss, to feel the absence of someone or something"*;
  example in the **aorist** — *"Seni özlerim. — I miss you."*; usage note: **"This verb
  is frequently used in the past tense: Seni özledim. — I miss(ed) you."** The
  parenthesis is the dictionary's own hedge.
- `seni` (pageid 264838): *"inflection of sen … accusative"*. `sizi`: accusative of `siz`.
- **`özledim` and `özlüyorum` are both `missingtitle`** — exactly the brief's warning.
  Built on the lemma. (`seni özlüyorum` and `seni özlerim` are also red links, despite
  being "See also" targets on the `özlemek` page.)

### Corpus layer — Tatoeba, every hit inspected individually

Search is **tokenised**, so survival rates are recorded:

| Query | API total | Fetched | Actually contained the form | With `seni` |
|---|---|---|---|---|
| `özledim` | 124 | 124 | **80** (44 were *özledi / özledin / özlediler*) | **31** |
| `özlüyorum` | 259 | 140 | **89** | **14** |
| `özledim` + `sizi` | — | — | — | **3** |

**The tense tally (per translation, n = 52 across the 31 sentences):**

| English rendering | Count | Share |
|---|---|---|
| simple past — *I missed you* | **24** | 46.2% |
| present perfect — *I've missed you* | **18** | 34.6% |
| simple present — *I miss you* | **9** | 17.3% |
| other | 1 | 1.9% |

→ **42 of 52 (80.8%) are past-marked.**

Counted per *sentence* instead: 23 past-only, 7 present-only, 1 carrying both. Same
direction, slightly weaker ratio. Both numbers are in `structuralLimitations`.

**The contrast case — `seni … özlüyorum`, n = 14:** of the 12 rendered with the verb
*miss*, **12 of 12 are simple present** (*"I miss you"*, *"I'm missing you"*, *"I still
miss you"*). **Zero past.** The remaining 2 are not *miss* at all.

**Tatoeba #630939 — the question in one sentence:** *"Seni özledim."* carries *"I miss
you."*, *"I missed you."*, *"I've missed you."* and *"I missed you!"* simultaneously.

### VERDICT

- ***özledim* is genuinely past-marked** (TDK, `görülen geçmiş zaman`, `-dı`), while the
  verb's own definition names a present desire. Both halves are real; the clash is real.
- **The attested English is predominantly PAST, not present** — 80.8% — which is the
  reverse of what the prompt asserted.
- **The mapping is:**
  - `seni özlüyorum` → **I miss you** / **I'm missing you** (12 of 12 present)
  - `seni özledim` → **I missed you** / **I've missed you** (42 of 52 past-marked), and
    *I miss you* only where context forces it (9 of 52)
- **`I've missed you` is the one form that carries both readings**, and is the safest
  rendering of the literal string while the two people are still apart.
- This is *why* wikiHow and lovelanguages.io both drift to *özlüyorum*: it is the form
  that maps one-to-one onto the English they want to teach.

### Register — `seni` vs `sizi`

TDK's `siz` entry gives both plural and polite-singular senses, so *sizi özledim* is
ambiguous in Turkish. English has one *you* and cannot mark it. Of the **3** attested
`sizi … özledim` sentences, **2 recover plurality by adding a noun**: #3697027 *"Sizi
özledim çocuklar."* → *"I missed you kids."*; #3140526 *"Sizi gerçekten özledim
arkadaşlar."* → *"I really missed you guys."* **n = 3 is too small for a rate** and the
post says so in body prose. The Spanish sibling's corpus-count method was followed; the
Turkish corpus simply does not have the volume the Spanish one had.

### A corpus error disclosed rather than dropped

Tatoeba is volunteer-built. #10000372 *"Seni görmeyi özlüyorum."* is glossed *"I'm
yearning to see you…"*, and #4008437 *"Seni öpmeyi özlüyorum."* is glossed **"I regret
kissing you"** — which is not what the Turkish says (*"I miss kissing you"*). This is
named in the body and is the reason every hit was eyeballed.

---

## 4. Gap analysis

**Table stakes on this SERP** (present on ≥5 of 9): the string *I miss you*; an
intensified variant (*I miss you so much*); a reciprocal (*I miss you too*).

**The gap — none of the nine has any of it:** that *özledim* is past-marked; that
*-m* is the person suffix and *-i* the accusative, so *ben* is unnecessary; that
*özledim* and *özlüyorum* are different tenses with different English; that *seni* and
*sizi* differ in register and English cannot carry the difference; and that the
translation widget occupying the top of the page collapses all of it.

**Angle (`batchMeta.angle`):** the only page on this SERP that *measures* the tense
question instead of asserting it.

**Fan-out sub-queries → H2s:** *özledim tek kelime mi?* · *özledim geçmiş zaman mı?* ·
*özledim mi özlüyorum mu?* · *hangi cümleyi ne zaman?* · *seni mi sizi mi?* · *Google
Çeviri doğru mu?* · *nereye yazayım?* · *ne işe yaramaz?*

---

## 5. Split from the Turkish sibling

`seni-ozledim-mesajina-verilecek-cevaplar` owns **replies** — what to write back and
what the message means. This page owns **translation into English**. Stated in one
sentence in the body and cross-linked (`/blog/…`, which `verify-batch.mjs` excludes from
the 2–4 internal-link count, so it costs no template slot).

**No line was taken from it.** The sibling established *-m* = 1sg, *seni* = accusative
and *bende* = *köle*; all three were re-verified here against the same TDK / Wiktionary
entries and used only as setup. Every number in this post was measured fresh: the
52-translation tense split, the 12-of-12 *özlüyorum* result, the 3 *sizi* sentences, the
Google Translate collapse, the lovelanguages.io character counts.

Its `factsUsed` were read first; all three of mine are different lines.

---

## 6. Sources (6)

| # | URL | Why it passes the subject test |
|---|---|---|
| 1 | `sozluk.gov.tr/gts?ara=özlemek` | the official Turkish dictionary on the exact verb; `[-i]` and the present-desire definition |
| 2 | `sozluk.gov.tr/gts?ara=görülen geçmiş zaman` | the official definition of the `-dı` past — the load-bearing fact |
| 3 | `en.wiktionary.org/wiki/özlemek` | usage note hedging *"I miss(ed) you"*; lemma page, since the inflected pages 404 |
| 4 | `tatoeba.org/en/sentences/show/630939` | the sentence carrying both glosses; anchors the corpus counts |
| 5 | `europepmc.org/article/PMC/PMC10873250` | Tosun 2024, *Cognitive Research: Principles and Implications*, CC BY — 36 Turkish–English bilinguals judging **MT accuracy on a Turkish grammatical category**. Peer-reviewed, open access. **Abstract only** (landing page 403s a scripted UA; record read via Europe PMC REST). |
| 6 | `europepmc.org/article/PMC/PMC10723160` | Antonova-Unlu & Bayram 2023, *Frontiers in Psychology*, CC BY — 28 Turkish heritage speakers vs 28 monolinguals, tested on **direct object case marking**, i.e. the `-i` on *seni*. **Abstract only.** |

**Swap test:** none could sit unchanged in another post in this batch — every one is
Turkish-specific or Turkish–English-specific.
**Generic context statistics:** zero.
**Wikipedia:** zero as sources (entity `sameAs` only, in `structuredData`).
**Competitor links:** zero — tureng, reverso, hinative, ingilizcesi and lovelanguages
are named as measured results in plain text, never hyperlinked.
**WebSearch calls used:** **zero.** All sourcing via `findpapers.mjs` (Crossref +
Europe PMC), the Europe PMC REST API, the TDK `gts` endpoint, the MediaWiki API and the
Tatoeba `api_v0` endpoint.
**Spent sources avoided:** PMC13550703, PMC13337705, PMC13552847 not cited; no
`doi.org`, `journals.plos.org` or `arxiv.org` URL anywhere.
**Cap note:** `capcheck.mjs` run immediately before writing — zero banned URLs, zero
domains at cap. Frontiers in Psychology is at least the third use in this batch; source 6
is the one to cut if quiescence puts the publisher over three, and the post survives
without it.

### URLs checked before citing, per the brief's "HTTP 200 is not confirmation" rule

- `tatoeba.org/en/search?from=tur&to=eng&query=özledim` → **404. Not cited.**
- `tatoeba.org/en/sentences/search?…` → 200.
- `en.wiktionary.org/wiki/özledim` and `/özlüyorum` → both **missingtitle**.
- Every TDK entry read back by its own `madde` (headword) field before quoting.
- Both Europe PMC landing pages → **403 to a scripted UA**; records read through the
  REST API, which confirmed `isOpenAccess=Y` and CC BY for both. No PDF parsed.

---

## 7. Product honesty

`/missyou-gf` is quoted from `app/lib/prompt.ts` line 44 as *"'I miss you' page for a
girlfriend/partner"*. The body states plainly, in Turkish, that the interface, labels
and prompts are **English**, that there is **no Turkish localisation**, and that a
reader who only needed the translation **needs nothing from us** — the answer is on the
page and they can close the tab. The alternative link `/streak` is given with the reason
it suits a reader whose distance is measured in days rather than in one letter.
`/templates` is linked where cost would naturally come up, with the statement that it
cannot be confirmed from this data set. `pricecheck-intl.mjs` clean.

---

## 8. Audit

`|passed| + |failed| = 50`, `passed ∩ failed = ∅`, strings byte-verbatim.
**46 passed / 4 failed**, all four structural:

1. **#24 slug stop words** — the keyword contains *nasıl* / *yazılır*; dropping them
   breaks exact-match alignment.
2. **#25 slug not taken in Strapi** — Strapi unreachable from this agent.
3. **#36 source caps** — counted in posts per batch, six agents writing concurrently,
   resolved at quiescence.
4. **#45 ItemList** — the body ranks and numbers nothing; its one table is a mapping
   table, not an ordered list.

**#50 was NOT failed, contrary to my prompt.** The prompt listed it as unsatisfiable
because `references/article-json-schema.md` is "not found". **It exists**, and reading
it caught a real defect: the draft carried `kind: "subhsandesh.blog.article"` where the
contract requires `"blog-automation/batch-blog"`, which `app/lib/batches.ts` would have
silently skipped. Fixed, validated with the schema doc's own validator (`PASS, 1764
words`), item recorded as passed.

`node scripts/verify-batch.mjs content/batches/2026-09-26-miss-you-global-30` →
**zero findings for this slug.**

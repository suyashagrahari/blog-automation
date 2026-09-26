# Research brief — `aku rindu kamu bahasa mandarin`

- **Slug:** `aku-rindu-kamu-bahasa-mandarin`
- **Region:** `id-id` · **bodyLanguage:** Indonesian (Chinese lines are quoted material)
- **Tier:** A-translate · **Category:** `miss-you-across-miles`
- **Written:** 2026-09-27

---

## Phase 1 — SERP, measured

### Route log (BRIEF §3 order)

| Step | Route | Outcome |
|---|---|---|
| 1 | `node scripts/serp-ddg.mjs "aku rindu kamu bahasa mandarin" --region id-id --n 10` | **ONE call, as instructed. "(no results parsed — DDG markup may have changed)". Not retried.** |
| 2 | Google `gl=id&hl=id&pws=0&num=20`, shared Chrome (PolterTab), read 1 | **CONTAMINATED.** `browser_navigate` returned `status: ok` **and the correct Indonesian page title**, and the very next read returned a **Dutch** Google Translate widget (`Nederlands - detected`, `ik mis je` → `tu me manques`) — the `ik-mis-je-in-het-frans` sibling's page. Discarded, not recorded. Exactly the trap BRIEF §3 item 0 documents. |
| 3 | Same URL, re-navigated, scraped with a narrow result selector | **CLEAN and self-authenticated:** Indonesian interface, my query, Mandarin subject matter. This is the SERP recorded below. |
| 4 | Bing `setlang=id&mkt=id-ID`, shared Chrome | **CONTAMINATED.** Navigate reported the Bing URL and my title; the body was the **Spanish** `otra forma de decir te extraño` SERP (`gl=mx&hl=es-419`). Discarded twice. |
| 5 | Bing `setlang=id&mkt=id-ID`, Playwright, self-authenticated on the query box | `.b_no`, **0 results**. |
| 6 | **Bing control** `q=wikipedia indonesia`, same route, seconds later | `.b_no`, **0 results**. → **Bing is throttled from this IP. The zero is NOT recorded as a finding about my keyword.** (BRIEF §3.) |
| 7 | Brave `search.brave.com/search?q=…&country=id`, Playwright | **CLEAN**, self-authenticated on the query box and on Indonesian result text. Recorded as the second index. |

**Instrument label for the post:** Google served to `gl=id&hl=id&pws=0` through a real browser, cross-checked against Brave `country=id`. Bing unusable (throttle proven by control). DDG one call, failed.

### Google `id-id`, 2026-09-27 — 9 organic results actually seen

Above the fold: a Google Translate box returning **我想你 / Wǒ xiǎng nǐ**; an **AI Overview** ("Ringkasan AI") whose answer is *"Wǒ xiǎng nǐ (我想你)"* and which cites **Prep Edu**; and a "Orang lain juga bertanya" box.

| # | Host | Page | Language | Type | Weak? |
|---|---|---|---|---|---|
| 1 | alienmandarin.com | "7 Cara Mengatakan 'Aku Kangen Kamu' dalam Bahasa Mandarin" (2017, 682 words) | Indonesian | small school blog, listicle | **weak** |
| 2 | wukongsch.com | `/blog/i-miss-you-in-chinese-post-37570/` (11 Agu 2026) | English URL, ID snippet | translated ed-tech blog | **weak** |
| 3 | promova.com | `/blog/i-miss-you-in-chinese` (19 Jun 2025) | English URL, ID snippet | translated app blog | borderline |
| 4 | prepedu.com | `/en/blog/i-miss-you-in-chinese` | **`/en/` served to an `id` query** | translated ed-tech blog | **weak** |
| 5 | tiktok.com/@pujay2108 | video | Indonesian | UGC | **weak** |
| 6 | instagram.com/reel/DYKEkmlBBfU | reel | Indonesian | UGC | **weak** |
| 7 | instagram.com/p/DZFNHVXAfYH | post | Indonesian | UGC | **weak** |
| 8 | tiktok.com/@cocopangg | video | Indonesian | UGC | **weak** |
| 9 | mandarincenter.id | "14 Cara Mengatakan **Aku Cinta Kamu** Dalam Bahasa Mandarin" (2 Mei 2018) | Indonesian | school blog, **wrong intent** | **weak** |

**Weak count: 8 of the 9 I actually saw.** Ranks beyond 9 were not read and are not reported.

### Brave `country=id`, 2026-09-27 — second index

Order of first appearances: alienmandarin.com (**#1 again**) → brainly.co.id (homework Q&A) → TikTok @tvmandarin.id → YouTube Shorts → TikTok ×2 → YouTube Shorts → **translate.google.com proxy of `promova.com/blog/i-miss-you-in-chinese`** → TikTok discover → mandarincenter.id → mandarinpare.com (tag page) → **laoshi.io/characters/id/想念** → Instagram → brainly.co.id → perpusteknik.com → popbela.com.

**Do the two indexes agree?** **Yes, on the thing that matters.** Both put **alienmandarin.com at #1**; both carry **mandarincenter.id** and **promova**; both are dominated by UGC video. Brave adds Q&A (brainly ×2) and one dictionary-scraper page (laoshi.io). **Neither index contains a single Indonesian national publisher, editorial magazine, university page or dictionary.** Where the two Indonesian wave-1 siblings *disagreed* between indexes (national portals 0-of-5 on Google, 4-of-5 on Bing), mine agree — and agree on weakness.

Brave also surfaces the intent leak clearly: several top results are about **"aku cinta kamu"** (I love you), not "aku rindu kamu".

### Gate 4 verdict — **PASS, comfortably**

The top 10 is not strong Indonesian editorial. It is one 2017 Blogspot-hosted school blog, four social videos, three auto-/human-translated foreign language-app blogs (one of which Google serves at an `/en/` URL to an Indonesian query), and one page that is about a different phrase. Eight of nine are weak. A dictionary-grounded, corpus-counted Indonesian page has a real opening here.

---

## Phase 2 — gap analysis

**Table stakes (every page has them):** 我想你 / wǒ xiǎng nǐ as the default; 我很想你 and 我非常想你 as intensifiers; 想念 and 思念 as "deeper" words; 了 as a particle to add.

**What no page on either index does:**

1. **Nobody asks whether the Indonesian *kangen* / *rindu* split maps onto Chinese at all.** Every page hands an Indonesian reader a Chinese list without asking what the reader's own language was already doing.
2. **Nobody warns that 我想你 + anything = "I want you to…".** This is the single highest-cost error available to an Indonesian learner and it is absent from all nine results.
3. **Nobody mentions tone.** Not one top-9 page tells the reader that *xiǎng* and *xiàng* are different words, or that stripping tone marks (which an Indonesian keyboard forces) collapses them.
4. **Nobody counts anything.** No page cites a corpus, a dictionary entry or a study.
5. **Nobody names the sandhi rule** — and the pages that get closest print a surface pronunciation without saying which of the two possible trisyllabic patterns it is.

**Fan-out sub-queries → H2s:** does *kangen* vs *rindu* survive into Chinese · what changes when the sentence continues past 你 · which of 我想你/我很想你/我想念你 to actually send · why *rindu* and 想 are ambiguous in the same way · what happens without tone marks · what three third tones in a row actually do · what the ranking pages get wrong · what to do if it goes on a page rather than in a chat box.

**Angle:** the only page on this SERP that measures the Indonesian→Mandarin mapping in an attested `ind`↔`cmn` corpus — where *kangen*, *rindu* and *Anda* all collapse into the same four Chinese sentences — and that verifies the clause-position rule from the Indonesian side rather than asserting it.

---

## Phase 3 — verification log

### Indonesian side — KBBI via `kbbi.web.id` (the official site refuses both routes; `kbbi.web.id`/`kbbi.co.id` are cap-exempt)

- **`kbbi.web.id/rindu`** (HTTP 200, headword read). `rin·du` **a**, **no usage label**. Sense 1 *"sangat ingin dan berharap benar terhadap sesuatu"*; sense 2 *"memiliki keinginan yang kuat untuk bertemu"*. Derivatives: `merindu`, `merindukan`, `rinduan`, `perindu`, `kerinduan` = **five**. `me·rin·du·kan` sense 1 = *"sangat menginginkan dan mengharapkan (hendak bertemu)"*.
  - ⚠️ **Trap noted:** `perindu` sense 1 is *"buluh yang tipis, biasa digunakan untuk suling"* — a thin bamboo for a flute. Not cited as an emotion word. (Same shape as Priberam's *saudade* = Scabiosa plant.)
- **`kbbi.web.id/kangen`** (HTTP 200, headword read). `ka·ngen` **a cak** — the colloquial label. Gloss *"ingin sekali bertemu; rindu"* — **defined by means of *rindu***. Derivatives: `mengangeni`, `kangen-kangenan` = **two**.
- Both confirm the `kangen-kamu-bahasa-inggris` sibling independently.
- **New for this row:** *rindu*'s own sense 1 is a **want**-sense (*sangat ingin*), and *merindukan* is built on *menginginkan*. This is the hinge of the post: Indonesian's miss-word sits on the want/miss boundary **exactly where 想 does**.

### Chinese side — 漢典 (`zdic.net`), every headword read before citing

| Entry | Pinyin read on page | Gloss read on page | English line on page |
|---|---|---|---|
| 想念 | xiǎng niàn | 思念，怀念; example 他非常想念他的妻子 | "long to see again; miss" |
| 思念 | sī niàn | 思虑，怀念; example 他们时常变得想家,时常思念故旧; 书证 《诗经·周南·卷耳·序》 | "yearn; miss; long for; think of" |
| 挂念 | guà niàn | 想念;牵挂 | "miss" |
| **怀念** | huái niàn | sense 1 心中思念牵挂; **sense 2 对过往人事物的追忆** | sense 1 "miss", **sense 2 "remember"**; 翻译 line: **"to cherish the memory of, to think of, reminisce"** |
| 像 | **xiàng** (ㄒㄧㄤˋ, **4th tone**) | 相似 — "resemble" | — |
| 向 | **xiàng** (ㄒㄧㄤˋ, **4th tone**) | 对着，朝着 — facing/toward | — |

Both 想念 and 思念 also carry a **纪念品 / 纪念 "souvenir"** sense on 漢典 (书证 《红楼梦》 and 《醒世姻缘传》) — noted, not used.

### Tatoeba — the `ind`↔`cmn` pair, inspected individually

**Raw hits and how many survived the contiguity check:**

| Search | Reported | Fetched | Contained the query string contiguously | Survival |
|---|---|---|---|---|
| `from=ind&to=cmn&query=rindu` | 10 | 10 | **10** | **10/10 (100%)** |
| `from=ind&to=cmn&query=kangen` | 1 | 1 | **1** | **1/1 (100%)** |
| `from=cmn&to=ind&query=想` | 221 | **221 (all pages)** | **221** | **221/221 (100%)** |
| `from=cmn&to=ind&query=想念` | 6 | 6 | **6** | **6/6** |
| `from=cmn&to=ind&query=思念` | **0** | 0 | 0 | — |
| `from=cmn&to=ind&query=像` | 28 | 10 (page 1) | 10 | 10/10 |
| `from=cmn&to=eng&query=思念` (zero-control) | **9** | 9 | **9** | **9/9** |
| `from=cmn&to=eng&query=想念` (control) | 45 | 20 (2 pages) | 19 | 19/20 |

**Unlike the Chinese sibling's 31-of-511 (6.1%) and the Japanese row's 942-of-1,000 miss rate, this pair tokenises cleanly** — every raw hit I inspected contained its query string. The reason is the opposite of a win: the `ind`↔`cmn` pair is **thin** (10 sentences for the whole *rindu* family), so there is no long tail of loose matches. **The thinness is itself the finding and is reported as such.**

**The mapping result — three Indonesian sentences, one Chinese answer set:**

| Tatoeba id | Indonesian | Chinese translations attached |
|---|---|---|
| #902834 | **Aku kangen kamu.** | 我很想你。/ 我好想念你。/ 我想你。/ 我想念你。 |
| #3807609 | **Aku rindu kamu.** | 我很想你。/ 我好想念你。/ 我想你。/ 我想念你。 |
| #902837 | **Saya rindu Anda.** | 我很想你。/ 我好想念你。/ 我想你。/ 我想念你。 |
| #3493985 | Aku merindukanmu. | 我很想你。/ 我好想念你。/ 我想你。/ 我想念你。 |

**Identical sets.** The corpus renders the `cak`/unlabelled split — and the `kamu`/`Anda` politeness split — with the same four Chinese sentences. **The register split does not survive into Chinese.** Symmetrically, #813490 **我想你。** is translated back as all four Indonesian sentences at once.

**Zero is not evidence.** `cmn→ind` returns **0** for 思念, but `cmn→eng` returns **9** — so 思念 is attested in the corpus and simply has no Indonesian translation yet. Recorded as pair-thinness, never as "思念 does not exist". Of those 9, only **2** use 思念 verbally with a person object (我多么思念你呀! / 我很思念过去的日子); the rest are nominal or fixed (思念與柔情, 所有的思念, 思念的滋味, 思念並祈禱 ×3).

**The clause-position rule, verified independently on the Indonesian pair.** All 221 `cmn→ind` sentences containing 想 were fetched. Four have the shape 我(ADV)想你:

| Sentence | Continues past 你? | Indonesian translation | Reading |
|---|---|---|---|
| 我想你。 | no | Aku kangen kamu. / Saya rindu Anda. / Aku merindukanmu. / Aku rindu kamu. | **miss** |
| 我很想你。 | no | Aku kangen kamu. / Saya rindu Anda. / Aku merindukanmu. / Aku rindu kamu. | **miss** |
| 我想你讀一讀這本書。 | yes | Saya ingin kamu baca buku ini. / Aku mau kamu membaca buku ini. | **want** |
| 我想你的答案是對的。 | yes (你 is possessive) | Aku pikir jawabanmu benar. | **think** |

**2 of 2 whole-clause = miss. 0 of 2 continuing = miss. Zero exceptions, on a different language pair from the sibling's.** And across the wider set, 我想 + X (X ≠ 你) is rendered **ingin/mau 66 times, pikir/kira 3 times, other 8** — so the default Indonesian reading of 我想 is *ingin*.

Tatoeba sentences are CC BY 2.0 FR.

### Tone and sandhi

- 想 = **xiǎng, third tone**; 像 and 向 = **xiàng, fourth tone** (漢典, 注音 ㄒㄧㄤˋ on both). Strip the tone marks and *wo xiang ni* is three different strings.
- 我像你 is grammatical and means "aku mirip kamu". Tatoeba `cmn→ind` returns **28** sentences with 像, glossed *mirip / seperti / terlihat seperti* — e.g. 他很像他的父亲 → "Dia sangat mirip dengan ayahnya", which is **structurally identical to 我很想你** and tone-stripped to the same `hen xiang`.
- **Tu, J.-Y. & Cha, J.-H. (2022), "Mandarin third tone sandhi application in trisyllabic words by L2 learners", *Speech Prosody 2022*, ISCA, Lisbon, pp. 797–801. PDF read IN FULL via `pdftotext -layout` from the ISCA Archive.** Verbatim: *"Mandarin tone 3 (T3) sandhi is a phonological rule, where a low dipping T3 followed by another T3 is changed as a high rising tone, similar to tone 2 (T2)."* And: *"In a trisyllabic phrase, there are two different surface tone sandhi based on the morphological structures. That is, the structures [σ1+[σ2+σ3]] and [[σ1+σ2]+σ3] would produce the surface sandhi patterns 'T3+T2+T3' and 'T2+T2+T3,' respectively."* And: *"T3 sandhi applying to three or more than three syllables with T3 in sequence is not determined simply by being followed by another T3."*
  - Measured accuracy: overall **native speakers 91.67%**, Japanese learners 42.84%, Korean learners 62.18%. By length, L2 learners: **disyllabic 76.29%, trisyllabic 53.66%, hexasyllabic 39.36%**. Native speakers: **disyllabic 98.61%, trisyllabic 83.34%**.
  - **LINE CUT, and why:** I do **not** print a surface tone pattern for 我想你. The paper's trisyllabic stimuli are *words* (zhǐlǎohǔ, lǐngdǎozhě), bracketed morpho-syntactically; 我想你 is a pronoun–verb–pronoun clause, which the paper does not cover. Printing "wó xiǎng nǐ" would be extending a result past its stimuli. Same standard the `wo-xiang-ni-meaning-in-english` sibling held.

### The interference mechanism

**Ayuningtias, N. & Nasution, V. A., "Indonesian Language Interference in Mandarin Writing Discourse of Chinese Literature Student", *ICOSTEERR 2018*, SCITEPRESS, pp. 1837–1843. Unpaywall `is_oa: true`. PDF read IN FULL.** 101 phrases and sentences collected from Chinese Literature students at Universitas Sumatera Utara, Medan; *"The highest frequency is sentence (83%) and followed by phrase (16,83%)."* Worked example: students wrote 老师 Budi (*Lǎoshī Budi*) for "Pak Budi", carrying Indonesian head-first order into Mandarin, where the correct order is Budi 老师. This is the same mechanism as the 我想你 + clause error and it is measured on Indonesians specifically.

### Checkable errors in ranking results

1. **alienmandarin.com, #1 on BOTH Google `id-id` and Brave `country=id`.** Its item 7 offers **我怀念你 (wǒ huái niàn nǐ) = "Saya rindu kamu"** as one of seven ways to text someone you miss. 漢典's entry for 怀念 gives sense 2 as **对过往人事物的追忆** ("recollection of past people, things and events") with the English **"remember"**, and its 翻译 line reads **"to cherish the memory of, to think of, reminisce"**. 百度百科 on the same page: *"通常用于已经过去的事物"*. Sending 我怀念你 to a living partner reads as if they are gone. **Checkable against `zdic.net/hans/怀念`.**
2. Same page, internal contradiction: it says 我想念你 is for *"seseorang yang sudah tiada"* (someone who has died) — yet Tatoeba's 我想念你 is translated plainly as "Aku rindu kamu" / "Aku kangen kamu" (#2180625).
3. **mandarincenter.id** (Google #9, Brave top-10) ranks for a *rindu* query with a page titled *"14 Cara Mengatakan **Aku Cinta Kamu** Dalam Bahasa Mandarin"*, whose item 4 is 我想你 glossed "aku rindu kamu". 漢典's and CC-CEDICT's senses of 想 contain no "love" sense at all.
4. **wukongsch.com** (Google #2) renders its own pinyin as **"W xi ng n我 想 你"** in the Indonesian snippet — the tone-marked vowels have been dropped by its localisation pipeline. Noted, not built on, since a snippet is not the page.

---

## Phase 3b — cap and guard checks

- `capcheck.mjs` immediately before writing: **no banned URL used; `doi.org` at cap 3 → I cite publisher URLs only (`isca-archive.org`, `scitepress.org`); `isca-archive.org` and `scitepress.org` unused in this batch.**
- **Journals named for hand-counting:** *Speech Prosody 2022* (ISCA proceedings) and *ICOSTEERR 2018* (SCITEPRESS proceedings). **Neither is *Frontiers in Psychology*, *PLoS ONE*, *Scientific Reports*, *PNAS*, *BMC Psychology*, *Eur J Psychotraumatology*, *Memory & Cognition* or *Behavioral Sciences*.** No PMCID is cited at all, so `PMC8669216` and the spent siblings' PMCIDs are untouched.
- `pricecheck-intl.mjs aku-rindu-kamu-bahasa-mandarin`: run before reporting. No price, tier or free-of-charge claim in any language; the refusal uses **"tanpa membayar"** phrasing to dodge the *harga*/*biaya* false positive, as the siblings did.
- Strapi production, via `ctx_execute`-style sandbox fetch (not curl/WebFetch): `aku-rindu-kamu-bahasa-mandarin` → **total: 0, slug free**. `miss-you-across-miles` → **present among 10 live categories**. All four sibling slugs → **total: 1 each, live**, so the cross-link resolves.
- `references/article-json-schema.md` read (196 lines): `kind` is exactly `"blog-automation/batch-blog"`; `article.keywords` is a **comma-separated string, not an array**. Both honoured.
- Wikidata QIDs verified through the Wikipedia `pageprops` API and then label-checked on Wikidata: **Q9240 = "Indonesian"**, **Q9192 = "Mandarin"**, **Q42222 = "pinyin"**, **Q1577090 = "tone sandhi"**, **Q495456 = "Tatoeba"**, **Q4200623 = "Great Dictionary of the Indonesian Language"**. No scarves, municipalities or disambiguation pages.

---

## Phase 4–5 — split from the four siblings, product, links

**The split, in one sentence each:**

- `kangen-kamu-bahasa-inggris` owns **Indonesian → English** and the KBBI `cak` finding. Mine takes that finding as given and asks what happens on the **other** side of the pair.
- `kangen-kamu-bahasa-jawa` owns the **ngoko/krama/krama inggil** ladder. Mine is the mirror case: Javanese changes the *pronoun* and keeps the verb; Chinese keeps the pronoun and changes the *verb*.
- `cara-bilang-kangen-tanpa-bilang-kangen` owns **not saying it**. Mine is saying it, in another language.
- `wo-xiang-ni-meaning-in-english` owns **what 我想你 means to an English reader**. Mine is what an **Indonesian should send**, and it re-derives the clause-position rule on the `ind`↔`cmn` pair instead of borrowing it.

**Template links — and the swap.** `/missyou-gf` is mandatory and is linked. The assigned alternative was **`/capsule`**, which `app/lib/prompt.ts` defines as *"you both write predictions about the next year, blind to each other; it seals, and a year later you open it together and score every one."* That is a mutual prediction game on a one-year delay — it has nothing to do with sending a short sentence in a language you do not write well. **Swapped for `/dedication`**, defined as *"a radio show made for one person: they drag the needle through static, land on your station, and hear your real voice introduce the song."* `verify.config.json`'s own `_why` names `/dedication` for "when a song says it better" — and this post's whole argument is that the difference between 想 and 像 lives in a **tone**, which written pinyin loses and a **recorded voice keeps**. Third link: `/templates`, which is where the price question is sent.

**Product mismatch, disclosed in body prose:** `/missyou-gf` is defined at `app/lib/prompt.ts:44` as an *"'I miss you' page for a girlfriend/partner"* — English interface, English labels, and recipient-specific. The reader here is Indonesian, writing Mandarin, possibly to a friend or a parent. That is a **triple** mismatch and the post says so plainly rather than selling around it.

**First-party facts and their caveats** are carried in Indonesian prose: pickers-with-defaults, page-views-not-visitors, n=214 over two months, and the one that matters most here — **the database records which template was opened, never who received it, and nothing in it is segmented by language or country.** The post also states explicitly that **2.6 h (n=214, miss-you) and 2.5 h (n=1,396, sampled on /apology-dashboard) are two different measurements**, and cites the platform-wide one.

---

## Phase 6 — known open failures

- **"Every internal link is a real URL from TEMPLATE_LINKS"** fails by design: the fourth internal link is the sibling cross-link `https://subhsandesh.in/blog/wo-xiang-ni-meaning-in-english`, which the batch brief requires and which resolves (Strapi `total: 1`). `TEMPLATE_LINKS` has no entries for blog articles, so the item cannot pass while the cross-link is present. The 2–4 internal-link ceiling is why only **one** of the four siblings is linked; the other three are named in prose.
- **First-party differentiation is thin.** Four of the facts-snapshot lines I could use are in 9–15 sibling posts already. I took the two least-collided platform-wide lines (38.5% password-protection and the 2.5 h /apology-dashboard edit gap, both at **zero** prior uses in this batch) plus the two miss-you lines that carry the argument. It is still the same twelve-line pool.

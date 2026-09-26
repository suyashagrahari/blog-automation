# Research — seni özledim kürtçe nasıl denir

- Slug: `seni-ozledim-kurtce-nasil-denir`
- Region `tr-tr` · bodyLanguage Turkish · tier `A-translate`
- Verdict: **PROCEED**

---

## 1. SERP — measured, not inferred

**Route taken, in the order the BRIEF mandates.**

1. `node scripts/serp-ddg.mjs "seni özledim kürtçe nasıl denir" --region tr-tr` — run **once**.
   `UND_ERR_CONNECT_TIMEOUT`, `html.duckduckgo.com:443`. Confirms the BRIEF. Not retried.
2. **Google served to Turkey in the real browser**, `gl=tr&hl=tr&pws=0&num=20`.
   Worked first time, no captcha, nothing clicked. **Run twice** (second run with
   `&filter=0`); ranks 1–8 identical across both runs, rank 9 differed
   (mardinlife.com vs a TikTok video) — both social/listicle, both weak.
   Bing and Brave were therefore **not needed**; no Bing zero was recorded, so no
   throttle control was required.

**Self-authentication.** Page `<title>` = `seni özledim kürtçe nasıl denir - Google'da Ara`
on both loads; every snippet is Turkish and about this keyword; the first
People-Also-Ask `data-q` is literally `seni özledim kürtçe nasıl denir`. No
foreign-language or sibling-keyword results appeared. Nothing discarded.

**Organic results I actually saw: 9.** (Not 10 — Google returned nine organic
links above the fold set plus PAA; I count nine and say nine.)

| # | URL | Page type | Strong/weak |
|---|---|---|---|
| 1 | tr.glosbe.com/tr/ku/seni%20özledim | dictionary-aggregator, user-fed | weak |
| 2 | nasildenir.kurtcebilgi.com/kurtce-seni-ozledim-nasil-denir/ | tiny niche blog subdomain | weak |
| 3 | kizlarsoruyor.com/…/q15669418-kurtce-seni-ozledim-ne-demek | Q&A forum | weak |
| 4 | forumunuz.com/yabanci-dil/96700-… | forum thread, 26 Mar 2017 | weak |
| 5 | instagram.com/reel/DFLD8ExItZs/ | social video | weak |
| 6 | x.com/kurdcesozluk/status/1027636269365559296 | social post, 2018 | weak |
| 7 | nasildenir.kurtcebilgi.com/361-seni-ozledim-ninem-… | same niche blog, 2nd URL | weak |
| 8 | tr.glosbe.com/tr/ku/seni%20çok%20özledim | same aggregator, 2nd URL | weak |
| 9 | mardinlife.com/kurdi/kurtce-ask-sozleri-… (run 1) / tiktok.com/@zemherrim/… (run 2) | local-news listicle / social video | weak |

**Weak count: 9 of the 9 I saw.** Zero national Turkish publishers. Zero
dictionary or institutional pages. Two domains hold 4 of 9 slots. Above the
organic set sits a **Google Translate widget**, which is the de-facto answer.

**PAA questions captured:** `seni özledim kürtçe nasıl denir` · `Seni çok özledim
Kürtçe nasıl denir?` · `Kürtçe "seni çok özledim aşkım" nasıl söylenir?` ·
`Kürtçe beni özledin mi ne demek?` · `Seni özledim kelimesi ne anlama gelir?`

**Gate 4 verdict: PASS → PROCEED.** The BRIEF's abort trigger is "strong editorial
pages in that language with no weak result". This SERP is the opposite extreme:
nine weak results, no editorial incumbent, and not one page that names which
Kurdish it is giving.

**Gate 2 (twin check) — the English sibling.** `i-miss-you-in-kurdish` is read in
full and does **not** answer this reader. Split in one sentence: *the sibling asks
an English speaker to choose between two Kurdish varieties they have no prior tie
to; this page tells a Turkish speaker that the choice is effectively already made —
Kurmanji — and then spends its length on the Turkish-side comparison (özle-di-m as
one word against min bêriya te kir as four) and on the Turkish SERP's own
misspellings, neither of which exists in the English post.* Different SERP,
different incumbents, zero shared sources except the ISO registry. Not a
translation, not a twin.

---

## 2. ISO verdicts — exactly as `iso639-3.sil.org` states them

Fetched 2026-09-26, all HTTP 200 except where noted.

| Code | Registry's own wording |
|---|---|
| `kur` | "Kurdish" — Status **Active**, Code Sets **639-2, 639-3**, Equivalent **639-1: ku**, Scope **Macrolanguage**, Language Type **Living**. "Kurdish is a macrolanguage." Member list = exactly three: ckb, kmr, sdh. |
| `kmr` | "Northern Kurdish" — Active, 639-3, Scope **Individual**, **Living**. "Northern Kurdish is a member of the macrolanguage Kurdish." |
| `ckb` | "Central Kurdish" — Active, 639-3, Individual, Living. Member of `kur`. |
| `sdh` | "Southern Kurdish" — Active, 639-3, Individual, Living. Member of `kur`. |
| `ku` | `iso639-3.sil.org/code/ku` → **HTTP 404**. `ku` is not an ISO 639-3 identifier; it exists only as the 639-1 equivalent listed on the `kur` page. |

**Verdict on my own prompt: all four codes it gave me are CORRECT.** `kmr`
Northern/Kurmanji, `ckb` Central/Sorani, `sdh` Southern, `kur` the macrolanguage —
the registry confirms each one, and none is deprecated. The prompt warned that a
previous prompt carried three ISO errors including a code deprecated in 2010; that
is not true of this prompt. Reported as a correction to the orchestrator's
expectation rather than a finding against the prompt.

Wikidata QIDs, each checked against the Wikidata API before use:
Q36163 = "Kurmanji" ("Kurdish language spoken in eastern Turkey, northern Syria,
northern Iraq and in Armenia"); Q36368 = "Kurdish language"; Q36811 = "Sorani";
Q256 = "Turkish". No scarves, no municipalities. Corroboration for Q36163: English
Wiktionary's `kirin` entry embeds the Lingua Libre audio file
`LL-Q36163 (kmr)-Key Mîrza-kirin.wav`.

---

## 3. Every Kurdish form — variety, script, instrument

**PRINTED (all verified):**

| Form | Variety | Script | Verifying instrument |
|---|---|---|---|
| Min bêriya te kir | Kurmanji `kmr` | Latin | Tatoeba sentence 4814057, linked directly to Turkish "Seni özledim." and English "I miss you." |
| Bêriya te dikim | Kurmanji `kmr` | Latin | Tatoeba 9822369, linked to Turkish "Seni özlüyorum." |
| Ez gelek bêriya te dikim | Kurmanji `kmr` | Latin | Tatoeba 11057027, Turkish "Seni çok özlüyorum.", aligned to ckb گەلێک بیرت دەکەم |
| Ez dizanim tu jî bêriya min dikî | Kurmanji `kmr` | Latin | Tatoeba 9164103, English "I know that you miss me too." |
| بیرت دەکەم | Sorani `ckb` | Arabic-based | Tatoeba 10812773, English "I miss you." |
| زۆر بیرت دەکەم | Sorani `ckb` | Arabic-based | Tatoeba 10473994, English "I miss you badly." |
| bêrî (f. noun, "longing") · bêrî kirin ("to long") | `kmr` | Latin | en.wiktionary.org/wiki/bêrî and /wiki/bêrî_kirin |
| berî (preposition, "before") | `kmr` | Latin | en.wiktionary.org/wiki/berî |
| kirin — present stem `dike`, past stem `kir`; `dikim` = 1sg present | `kmr` | Latin | en.wiktionary.org/wiki/kirin (`{{kmr-verb|dike|kir}}`) and /wiki/dikim ("verb form of kirin, 1s, pres") |
| min ("I/me/my"), tu ("you" sg, oblique te) | `kmr` | Latin | en.wiktionary.org/wiki/min, /wiki/tu |
| بیر (memory, mind) · کردن (to do) | `ckb` | Arabic-based | en.wiktionary.org/wiki/بیر, /wiki/کردن |

**Corpus counts used as evidence (Tatoeba, `from=kmr`, 2026-09-26):**
`bêriya` = 59 · `bêriya te` = 8 · `bêriya min` = 6 · `kiriye` = 90 ·
**`bêrîya` = 0** · **`kirîye` = 0** · **`bîra te dikim` = 0** ·
`bîra` = 13 (all "remember"/"beer", none "miss").

**CUT — every line, and why:**

1. **`bêriya te kirim`** (candidate handed to me in the prompt) — **cut.**
   `kirim` is not the attested past of `kirin` in this idiom; Tatoeba's Kurmanji
   corpus returns **0** sentences for it, against 90 for `kiriye` and the direct
   Turkish pair for `kir`. The prompt's own note said "verify, never assert"; this
   is the one that did not survive.
2. **`bêrîya te dikim`** (second prompt candidate) — **cut as spelled.** The form
   itself is right, the orthography is not: Tatoeba writes `bêriya` (circumflex on
   the ê only) in 59 sentences and `bêrîya` in **0**. Printed as
   **Bêriya te dikim**, with the difference explained in the body rather than
   silently corrected.
3. **`Ez bîra te dikim`** — **cut from the recommended lines**, kept only as the
   object of a finding. This is what **Google's own translate widget** returns at
   the top of this SERP, and two ranking pages repeat it. Tatoeba: `bîra te dikim`
   = **0**; the 13 `bîra` sentences all mean "remember" ("Nayê bîra min" = "I don't
   remember") or "beer". Wiktionary's `bîr` gives "memory" and "well". I do **not**
   claim Google is wrong — I report that one form has 59 corpus sentences and the
   other has none, and say so plainly.
4. **`Bêrîya Te Kirîye`** (the wording of ranking result #2) — **cut.** Two
   non-corpus spellings in one phrase: `bêrîya` (0) and `kirîye` (0, against 90 for
   `kiriye`). Also drops the agent pronoun `min` entirely.
5. **`min berîya te kir` / `min beriya te kiriye`** (ranking result #1, Glosbe) —
   **cut**, and reported as the checkable error. See §4.
6. **`mı xeyba dege`** — offered by Glosbe as the Kurdish for "seni çok özledim".
   **Cut.** It is not Kurmanji orthography and looks Zazaki; I could not verify it
   in Wiktionary, Tatoeba or the ISO registry, and Zazaki is `zza`, outside `kur`
   altogether. An unverifiable line from a user-fed aggregator is exactly the kind
   of thing this batch exists to stop printing.
7. **Romanised Sorani `bîrt dekem`** — **cut.** Useful as a reading aid, but there
   is no standardised Sorani romanisation I could cite and Tatoeba's `ckb` corpus
   is Arabic-script only. Printing an ad-hoc transliteration as if it were
   orthography is the invention the BRIEF bans.
8. **Any Southern Kurdish (`sdh`) line** — **cut.** The ISO registry confirms `sdh`
   exists and is Living; no instrument I could reach carries a "miss you" form in
   it. Tatoeba has no `sdh` corpus. Named as a gap in the body rather than filled.
9. **A question form, "Te bêriya min kir?"** — **cut.** The X post at rank 6 uses
   "Erê min bêriya te kiriye" as an answer to a question it does not spell out in
   a verifiable way. Tatoeba attests the statement
   "Ez dizanim tu jî bêriya min dikî" but no interrogative; I print the statement
   and say the question form was not verified.
10. **`Bêriya te kiriye delalamın / gülamın`** (forum result #4) — **cut.** The
    vocatives are not in any entry I could reach and the `-mın` spelling uses a
    Turkish dotless ı that is not in the Kurmanji Latin alphabet.

---

## 4. Checkable error in a ranking result

**Ranking result #1, `tr.glosbe.com/tr/ku/seni özledim`, fetched 2026-09-26
(HTTP 200, headword confirmed as "seni özledim" on the page itself).**

The page's headline translation reads **`min berîya te kir`** — no circumflex on
the `e` of `berî`. Immediately below it, the same page's dictionary block lists two
entries, `min berîya te kir` and **`min beriya te kiriye`**, the second with no
circumflex anywhere. English Wiktionary gives **bêrî** as the Kurmanji feminine
noun "longing" and **berî**, the same letters without the circumflex, as the
Kurmanji preposition **"before"**. In the Kurmanji Latin alphabet `ê` is a letter,
not a droppable accent.

So the page ranking first for this query prints the phrase in two spellings, at
least one of which points at a different word — and the Google snippet for that
same page quotes an example sentence spelled the third way, `Min bêriya te kiriye`.
Ranking result #2 then adds a fourth spelling, `Bêrîya Te Kirîye`.

Second, smaller error: result #3 (KizlarSoruyor) has its accepted "best answer" to
"Kürtçe seni özledim ne demek?" recorded by Google as **"I miss you"** — an English
gloss offered as the Kurdish.

---

## 5. Instruments — what worked and what refused

| Instrument | Result |
|---|---|
| `iso639-3.sil.org` | **Works.** 4 codes fetched, headword row read on each. `/code/ku` 404s, which is itself the finding. |
| `en.wiktionary.org` (API, `action=parse`) | **Works**, with a caveat: rate-limited me after ~7 rapid calls (`You are making too many requests`); a 3.5 s delay fixed it. `bêriya` and `bêriya te kirin` are **`missingtitle`** — the BRIEF's inflected-form warning is exactly right; the lemma pages `bêrî`, `berî`, `kirin`, `bêrî kirin`, `dikim`, `bîr`, `min`, `tu` all resolve and were read. |
| `tatoeba.org` (`api_v0/search`) | **Works, and is the single most useful instrument here** — it carries Turkish↔Kurmanji and Kurmanji↔Sorani aligned sentence pairs, which no dictionary in reach does. |
| `sozluk.gov.tr` (TDK GTS) | **Works.** `özlemek` returns the full entry; `özle` returns `{"error":"Sonuç bulunamadı"}`. |
| `dergipark.org.tr` | **Works** for the HTML abstract page. |
| `api.unpaywall.org`, `api.crossref.org` | **Work.** |
| `www.wikidata.org` / `en.wikipedia.org` APIs | **Work.** |
| `tr.glosbe.com` | Fetches fine from the sandbox — used only as the object of a finding, never as an instrument. |
| `webonary.org` | **Not attempted.** Two independent rows have recorded 403 Cloudflare; the BRIEF forbids planning a section around it. |
| `archive.org` scanned dictionaries (Chyet 2003, McCarus & Abdulla 1967) | **Not used.** The English sibling already cites both; re-citing them would have made this post a translation of that one. Wiktionary plus the Tatoeba corpus gave independent coverage, which is the better split. |
| Bing, Brave, Yahoo | **Not needed** — Google served on the first attempt and reproduced on a second run. |

---

## 6. First-party facts and the differentiation problem

Usage counted across both batches (54 sibling posts + 23 in this one) before
choosing. Three of the four lines picked have **zero** prior use:

- `48.4% of views are on a touch device (phone or tablet) — measured 2026-09-24` — **0 prior uses**
- `90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24` — **0 prior uses**
- `Median gap between a page's first save and its last edit: 2.5 hours — sampled on apology dashboard (/apology-dashboard), n=1,396 — measured 2026-09-24` — **0 prior uses**
- `88.8% of started miss-you pages are published and shared (190 of 214) — measured 2026-09-25` — 33 prior uses, kept as the topical anchor

The BRIEF says "failing the differentiation item honestly is the expected
outcome". This row does **not** fail it, and the reason is worth recording: the
heavily-collided lines are all in the miss-you block, while the platform-wide
block in `facts-snapshot.md` is almost untouched. The touch-device line is also
genuinely load-bearing here rather than decorative — an Arabic-script Sorani line
in a font without `ڕ ێ ۆ ڵ` fails on a phone, and 48.4% of views are on one.

Mandatory caveats carried in Turkish body prose: pickers-with-defaults;
`viewCount` = page views not unique visitors; n=214 over two months; and the one
that matters most here — **the database records which template was opened, never
who received it, and nothing is segmented by language or country, so no figure in
this post is Turkish or Kurdish.**

---

## 7. Sources, with journal names

1. `iso639-3.sil.org/code/kur` (+ `/kmr`) — ISO 639-3 registry, SIL Global. No publication date given.
2. `en.wiktionary.org/wiki/bêrî` and `/berî` — English Wiktionary. No publication date.
3. `tatoeba.org/en/sentences/show/4814057` — Tatoeba, CC BY 2.0 FR. Kurmanji↔Turkish pair.
4. `tatoeba.org/en/sentences/show/10812773` — Tatoeba, Sorani↔English pair.
5. `sozluk.gov.tr/gts?ara=özlemek` — TDK Güncel Türkçe Sözlük.
6. **Kasap, S. & Işık, N. (2026). "Kurdish Language Attrition and Its Influence on Intergenerational Communication in Turkey." Journal: *International Journal of Kurdish Studies*, 12(1), 51–63.** DOI `10.21600/ijoks.1788166`, published 21 March 2026. Unpaywall: `is_oa: true`, `oa_status: bronze`. Abstract read on the DergiPark HTML page; **the PDF was not parsed** — abstract-only, recorded in the audit.

**Cap position.** The journal named in the one peer-reviewed citation is
*International Journal of Kurdish Studies* — **not** *Frontiers in Psychology*
(banned, over at 5–6 posts), **not** *PNAS* (banned, at 3), and not any of the
spent PMCIDs (PMC13552847, PMC13550703, PMC13337705, PMC10873250, PMC10723160,
PMC12849801, PMC11977004, PMC13481806, PMC4891949, PMC12714898, PMC12599338,
PMC8144866 — none used). `dergipark.org.tr` appears in one other post in the
sibling batch and in none in this one. `capcheck.mjs` run immediately before
writing: only `de.wiktionary.org` at cap; none of my hosts is at cap.

**Phenomenon searches run** (`findpapers.mjs`, Crossref + Europe PMC, costing no
WebSearch call): `Kurdish sociolinguistics Turkey language maintenance`,
`minority language maintenance intergenerational transmission`,
`Kurmanji Kurdish grammar ergative`. Three further strong-on-subject papers were
found and **rejected on open access**: `10.21600/ijoks.653812` (Kurmanji/Zazaki
phonetics, `is_oa: false`), `10.33182/ks.v10i1.561` (*Kurdish Studies*, "Struggling
against language shift", `is_oa: false`), `10.1075/tilar.9.09mah` (split-ergative
case marking in Kurmanji, John Benjamins, `is_oa: false`). The last one is the
paper that would have let me put a grammatical label on the `min`/`ez` alternation;
because it is closed, **the body describes the alternation from the corpus and
does not name it**. That is the BRIEF's rule about grammatical labels applied
literally.

---

## 8. Product mismatch, disclosed in body prose

`/missyou-gf` is defined at `app/lib/prompt.ts:44` as
`"'I miss you' page for a girlfriend/partner"` — verified at source. For this
reader the mismatch is **triple**: English interface, Turkish reader, Kurdish
line — and for the grandmother case, which one of the nine ranking results is
literally about, the recipient is wrong too, making it four.

`oneOfLinks` alternative taken: **`/capsule`** — `verify.config.json`'s own note
says it is for "when the missing is about time rather than distance", which is the
honest fit for a reader whose missing is generational (a fading heritage language,
a grandparent) rather than geographical. It carries no partner-specific label.
Both interfaces are still English and the body says so.

Price guard: no `ücretsiz`, `bedava`, `parasız`, `indirim`, or any figure. The body
states that nothing about pricing can be confirmed and links `/templates`.

---

## 9. Cross-links

- `/blog/i-miss-you-in-kurdish` — the English sibling; split stated in the body.
- `/blog/seni-ozledim-ingilizce-nasil-yazilir` — owns the English side of the
  özledim/özlüyorum split; this post stays out of it and points there.
- `/blog/seni-ozledim-mesajina-verilecek-cevaplar` — owns the reply case and the
  TDK morphology of *özledim*; this post cites TDK for the definition only and
  does not re-litigate the `[-i]` tagging.
- `ich-vermisse-dich-auf-turkisch` deliberately **not** cross-linked: its lane is
  composing Turkish from German, which shares no reader with this one.

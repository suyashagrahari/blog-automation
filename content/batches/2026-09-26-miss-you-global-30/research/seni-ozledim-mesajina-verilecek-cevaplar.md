# Research brief — `seni özledim mesajına verilecek cevaplar`

- **Slug:** `seni-ozledim-mesajina-verilecek-cevaplar`
- **Body language:** Turkish · **Region measured:** tr-tr · **Tier:** C-reply
- **Category:** `miss-you-across-miles` (verified live in Strapi, 10 categories returned)
- **Slug free in Strapi:** yes — `filters[slug][$eq]` returned 0 rows, HTTP 200, 2026-09-26

---

## Phase 1 — SERP, measured

### Instrument failure, and what I used instead

`node scripts/serp-ddg.mjs "<kw>" --region tr-tr --n 10` returned
`(no results parsed — DDG markup may have changed)` on three consecutive runs.
The real cause is not markup: `html.duckduckgo.com` and `lite.duckduckgo.com` are
**unreachable from this machine** — `UND_ERR_CONNECT_TIMEOUT` after 10 s, with and
without the sandbox. Verified against a control set in the same process:
`api.crossref.org` 200, `sozluk.gov.tr` 200, `tr.wikipedia.org` 200,
`search.marginalia.nu` 200, `html.duckduckgo.com` **timeout**. So DDG is down or
blocked for this session, not broken.

Scripted fallbacks all failed too: Brave 429, Mojeek/Startpage/searx/Bing/Yandex
returned pages with zero off-site result hosts (bot challenge or JS-only markup).

**What I actually measured:** Google, in the user's own Chrome via PolterTab, at
`google.com/search?q=…&hl=tr&gl=tr&pws=0`, twice (`num=20` and `num=30`), on
2026-09-26. This is a genuine tr-served, personalisation-off SERP and is *better*
evidence than the DDG proxy the brief prescribes. Both loads returned the same set.

### The measured top 10 (deduped by URL, DOM order)

| # | Domain | Title | Page type |
|---|---|---|---|
| 1 | kizlarsoruyor.com | "Seni özledim diyen birine ne cevap verilir?" | Q&A forum thread |
| 2 | **wikihow.com.tr** | "\"Seni Özledim\" Mesajına Nasıl Cevap Verilir?" | **editorial how-to** |
| 3 | kizlarsoruyor.com | "\"Özledim\" mesajına verilecek cevaplar neler?" | Q&A forum thread |
| 4 | reddit.com/r/BreakUps (`?tl=tr`) | "İletişimi kestikten sonra…" | forum, English thread auto-translated |
| 5 | normalsozluk.com | "1 Sene Sonra Gelen Özledim Mesajına Verilecek Cevaplar" | sözlük / UGC |
| 6 | uludagsozluk.com | "seni özledim diyen sevgiliye alternatif cevaplar" | sözlük / UGC |
| 7 | eksisozluk.com | "ben de seni özledim" | sözlük / UGC |
| 8 | medium.com/@messageamint.team | "300+ Best Ways to Respond to I Miss You Too…" | self-published **English** listicle |
| 9 | quora.com | "If someone I like tells me 'I miss you'…" | Q&A, **English** |

Google now caps this query at 9 distinct URLs; `num=20` and `num=30` both returned
the same nine. Positions 8 and 9 swapped between the two loads.

### Gate 4

**Weak count: 8 of 9.** Seven are forum / Q&A / sözlük UGC (kizlarsoruyor ×2,
Reddit, normalsözlük, uludağsözlük, ekşisözlük, Quora); the eighth is a
self-published Medium listicle *in the wrong language for the query*. The single
real editorial page is wikiHow Türkçe, at **#2**.

Two of nine results are in English on a fully Turkish query. **Gate 4 passes
comfortably** — this is the weakest SERP I could have been handed short of an
empty one.

### The orchestrator's framing — what held and what did not

The prompt pasted a "what tr-tr actually returns" list and asked me to re-measure.

**Held:** the correction itself. The inventory's claim that *"no editorial page
exists"* for this query is **FALSE** — wikiHow Türkçe ranks, and ranks high.

**Did not hold, and it matters:**

1. **The pasted list is not this SERP.** Of the ten hosts pasted —
   wikihow.com.tr, kizlarsoruyor ×2, bg360.com.tr, yandex.com.tr/yacevap ×2,
   uludagsozluk, onedio, love.you/tr, forum.donanimhaber — only **three**
   (wikihow.com.tr, kizlarsoruyor, uludagsozluk) appear in the measured Google tr
   result. **bg360.com.tr, yandex yacevap (both), onedio.com, love.you/tr and
   forum.donanimhaber do not rank at all.** Five hosts that *do* rank were absent
   from the paste: reddit.com, normalsozluk.com, eksisozluk.com, medium.com,
   quora.com.
2. **wikiHow is at #2, not #1.** kizlarsoruyor holds #1.
3. **The weak count is higher than claimed, not lower.** The prompt said "six of
   ten are forums and Q&A dumps". Measured: **eight of nine**.
4. Consequently the prompt's supporting claim that "bg360, onedio and love.you are
   editorial too" is moot — none of them rank here.

The correction was right about the thing it was correcting and wrong about almost
every particular. Recorded in `structuralLimitations`.

### What wikiHow Türkçe actually does (page read in full, 2026-09-26)

**Does:** fifteen ready-made reply lines, each an H3 quoting the suggested message,
each with a single-line rationale underneath. Examples, verbatim:
"Ne tesadüf! Ben de seni özledim!" / "Bana gününü anlat" / "Biliyorum 😊" /
"Keşke burada olsaydın" / "Bu gece bir şeyler yapalım!" /
"Bunu söylediğin için teşekkür ederim ama ben aynı şekilde hissetmiyorum".
It does cover the refusal case and the "I doubt their intentions" case.

**Does not:** sort the replies by what the message *means* or by what the reader
wants to happen next — it is a flat list with tonal labels. It contains **no
grammar at all**: nothing on *seni* being the object, nothing on why *ben* is
absent, nothing on *ben de* vs *ben de seni özledim* vs *özledim seni*, nothing on
the `ben de` / `bende` spelling split.

**And it is a translation, visibly.** Its title asks about *seni özledim* but its
body repeatedly switches the phrase to *seni özlüyorum* ("Herkes 'Seni
özlüyorum.'", "Seni bir süredir özlüyorum…"), and several lines are calques
("Aman tanrım.", "Bir randevu planlayın!").

### Checkable error found in a ranking result

**wikiHow Türkçe (#2), its very first suggested reply: "Ne tesadüf! Ben de seni
özledim!"**

TDK Güncel Türkçe Sözlük, entry `tesadüf` (`sozluk.gov.tr/gts?ara=tesadüf`), gives
two senses and no others:

1. "Yalnızca ihtimallere bağlı olduğu düşünülen olayların kesin olmayan,
   değişebilen sebebi"
2. "Tasarlanmadığı halde karşılaşma; rast"

Reciprocated feeling is not an unplanned encounter and not a probabilistic cause.
The line is an over-literal rendering of an English "What a coincidence!" and
misapplies a word the national dictionary defines narrowly. It is the *first* thing
the only editorial page on this SERP tells a Turkish reader to send.

Named in body prose, dictionary-cited, **not linked and not in `sources`** — it is
a SERP competitor.

---

## Phase 2 — Gap and angle

**Table stakes** (all nine cover some of): a reciprocal reply, a refusal, an
ex/no-contact case, a flirtier option, "suggest meeting".

**The gap.** Every one of the nine sorts replies by *tone* (sweet / funny / cold /
flirty) or by nothing at all. **None sorts by what the message means or by what the
reader wants to happen next**, and **none of the nine contains a single line of
Turkish grammar** — despite the query being about a Turkish sentence whose whole
difficulty is morphological. A forum thread gives forty unsorted one-liners; the
reader still has to decide which situation they are in.

**Fan-out sub-queries → H2s:** what is actually ranking · what *seni özledim*
grammatically commits you to · *ben de* vs *ben de seni özledim* vs *özledim seni* ·
`ben de` vs `bende` spelling · reply if you miss them back · reply if you do not ·
ex / 2 a.m. / unclear · four situations side by side · what our data can and cannot
say · replying vs building a page.

**Angle:** wins by being the only page on this SERP that sorts replies by the
message's *meaning* rather than its tone, and the only one that opens
*özledim* morphologically against TDK — measured: 8 of the 9 ranking results are
forum/Q&A/sözlük UGC, 0 of 9 contain any grammar, and the one editorial page (#2)
opens with a reply TDK's own `tesadüf` entry contradicts — grounded in 214 real
miss-you pages where the median letter runs 88 words and recipients answered 1,434
times with a tap instead of a sentence.

**Split from the English sibling** (`2026-09-25-miss-you-30/blogs/what-to-reply-when-someone-says-i-miss-you.json`,
read in full): the sibling sorts English replies by the receiver's *situation*
— group chat, timing, gendered sender — on an India-served English SERP; this post
sorts Turkish replies by the *message's meaning* and adds the morphology and
orthography of *özledim / seni / ben de*, which the English question does not
possess and the sibling therefore never touches. No section, table, fact pairing or
FAQ is carried across. The one row this must not drift into,
`ozledim-demenin-farkli-yollari`, is about *saying* it differently; this one is
strictly about *answering* it.

---

## Phase 3 — Sources

Turkish lines were verified before any section was built on them. Every dictionary
call below was made and returned 200; nothing here is from memory.

| # | Source | What it verifies | Date |
|---|---|---|---|
| 1 | `sozluk.gov.tr/gts?ara=özlemek` | `özlemek` is tagged **`[-i]`** — it governs the accusative, which is what licenses *seni* | none published |
| 2 | `en.wiktionary.org/wiki/seni` | *seni* = "accusative of sen: you"; and `özlemek`'s usage note, "This verb is frequently used in the past tense" | none published |
| 3 | `tatoeba.org/en/sentences/show/630939` | Turkish "Seni özledim." is glossed into English as **both** "I miss you." (#1308) and "I missed you." (#407574) — the past form carries present meaning | none published |
| 4 | `europepmc.org/article/PMC/PMC13550703` | Doğru & Türk Kurtça, *The Silent Rejection*, **Journal of Community Psychology**; n = 1,627 young adults (821 F / 806 M, 18–35, M = 21.63); partner phubbing associated with lower self-esteem and higher romantic loneliness. Authors at Yıldız Technical University, İstanbul and Trakya University, Edirne | 2026-09-01 |
| 5 | `europepmc.org/article/PMC/PMC13337705` | Soyer & Ömür Sünbül, **Frontiers in Psychology**; n = 446 adults; women report higher perceived partner phubbing than men, married higher than single, highest at 5–10 years. Authors at Mersin University | 2026-06-23 |

**Additional TDK entries fetched and used in prose** (same cap-exempt instrument,
same host as #1, so not listed separately in `sources`):
`belirtme durumu` ("Adın fiile -ı eki aracılığıyla bağlandığı durumu; yükleme
durumu, yükleme hâli, akuzatif: sokağ-ı, ev-i, okul-u, yüz-ü"), `kişi eki` ("Fiil
çekimlerinde kişiyi gösteren ek; şahıs eki: geldi-m, gelir-iz, gelmiş-sin"),
`kurallı cümle` ("Yüklemi sonunda olan cümle"), `devrik cümle` ("Yüklemi sonda
olmayan cümle"), `ünlü uyumu`, `da` ("ünlü uyumuna uyan bir söz"), `bende`
(Farsça, "► köle"), `tesadüf`.

**Both papers: abstract only.** Europe PMC REST `resultType=core` gave title,
journal, affiliations, dates and full abstract text. No full text or PDF was read,
and nothing beyond the abstract is claimed. Both are `isOpenAccess: Y`.

**Honest limit on both papers:** they measure *face-to-face* phone-ignoring, not
failing to answer a text. The post says so in body prose rather than stretching
them. Neither states its sample's nationality in the abstract — only that the
authors are at Turkish universities — and the post says that too.

**Cap position** (`capcheck.mjs`, run immediately before writing): `doi.org`,
`journals.plos.org` and `arxiv.org` are **at cap 3** and were avoided —
this cost me `10.1371/journal.pone.0326189` (emojis and perceived responsiveness,
PLoS ONE 2025), which is the single most on-subject empirical paper for a
reply-to-a-text post and whose DOI already appears three times in the sibling
batch. `frontiersin.org` has one slot left; source #5 is reached via
`europepmc.org` (repository, cap-exempt) and its journal, *Frontiers in Psychology*,
is named so the cap is checkable by hand. No banned URL used.

**Lines cut, and why:**

- *"Ne tesadüf! Ben de seni özledim!"* — not printed as a usable reply anywhere in
  the post except as the documented error. TDK's `tesadüf` does not support it.
- **"Bende seni özledim"** — cut as a reply form; kept only as the negative example
  in the orthography section, because TDK lists `bende` as a Persian-origin
  headword meaning "► köle".
- **"Ben da seni özledim"** — cut. TDK records the `da` conjunction as
  "ünlü uyumuna uyan bir söz"; after the front vowel in *ben* the form is *de*.
- **"Seni özlüyorum" as the default reply** — demoted, not cut. Wiktionary's
  `özlemek` usage note and Tatoeba #630939 both point to the `-DI` past as the
  ordinary Turkish form for a present feeling, so the post leads with *özledim* and
  mentions *özlüyorum* only as the continuous alternative. This is the same swap
  wikiHow makes silently.
- **A claim that *özledim seni* is "more emotional"** — cut as unverifiable. TDK
  only supports the structural statement (devrik cümle = predicate not final); the
  affective reading is not in any source I fetched, so the post describes the
  structure and calls the tone a tendency, not a rule.
- **Any figure presented as Turkish** — cut. Nothing in the first-party database is
  segmented by language or country.

---

## Phase 4–5 notes

- `/missyou-gf` mandatory link present; `/streak` is the genuine alternative
  (continuity rather than a one-off page) with its reason stated; `/templates`
  carries the unverifiable-pricing pointer. All three confirmed present in
  `TEMPLATE_LINKS` in `app/lib/prompt.ts`.
- **Product-language mismatch disclosed in Turkish body prose**, in its own H2, not
  only in the audit: `/missyou-gf` is an English-language page with English
  labels, and the post states that a reader expecting a Turkish interface will not
  find one.
- **The honest tension is stated outright**: answering a text and building a page
  are different jobs, and the post tells the reader that if all they want is one
  line, they do not need to click anything.
- **Price guard:** no price, tier, or any of *ücretsiz / bedava / parasız /
  karşılıksız / free*. `facts-snapshot.md` Pricing is empty; the post says the
  information is not in a verified source and points at `/templates`.
- **First-party caveats, all in Turkish prose:** pickers-with-defaults (city,
  background music, "together since") not presented as sender behaviour;
  `viewCount` is page views not unique visitors; n = 214 over two months so no
  seasonal claim; the database records **which template was opened, never who
  received it**; and **nothing in it is segmented by language or country, so no
  figure here is Turkish.**

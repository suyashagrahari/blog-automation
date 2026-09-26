# Research — ozledim-demenin-farkli-yollari

Keyword: `özledim demenin farklı yolları` · region `tr-tr` · bodyLanguage Turkish
· tier `B-howto` · written 2026-09-26. **Verdict: PROCEED.**

---

## 1. SERP — measured, not assumed

**Route:** `serp-ddg.mjs` tried ONCE per BRIEF §3 → `UND_ERR_CONNECT_TIMEOUT`
against `html.duckduckgo.com:443`. Switched immediately. Measured on **Google,
real browser (PolterTab), `gl=tr&hl=tr&pws=0&num=20`**. No captcha, no 429.

**Self-authentication:** page `<title>` came back `özledim demenin farklı yolları
- Google'da Ara`; all nine h3s were Turkish and on my keyword. Not another
agent's SERP. **Run twice; the nine hrefs were byte-identical across both runs.**

Nine organic results, all nine actually seen:

| # | Host | Page type | Weak? |
|---|---|---|---|
| 1 | kizlarsoruyor.com | Turkish Q&A forum, UGC | weak |
| 2 | eksisozluk.com | Ekşi Sözlük, collaborative UGC | weak |
| 3 | reddit.com/r/CasualPH `?tl=tr` | **Filipino** subreddit, English thread, Google-translated into Turkish | weak |
| 4 | instagram.com/p/B_PgS3IgLPh/ | a single Instagram post | weak |
| 5 | onedio.com | listicle — **Coca-Cola Türkiye advertorial, 14.02.2017** | moderate |
| 6 | bonobology.com/tr/ | Indian relationship site, MT'd subfolder, **English slug** | weak |
| 7 | blog.alifbee.com/tr/ | Arabic-learning app blog — about **Arabic**, not Turkish | weak |
| 8 | posta.com.tr | national newspaper, **galeri** (slideshow), 2023-11-28 | moderate |
| 9 | tercumex.com.tr | translation agency, "I miss you in 100 languages" | weak |

**Weak: 7 of 9.** Two mainstream Turkish publishers (#5, #8), both in the
weakest format either owns. **Gate 4: PASS — proceed.** This is not the strong
national-publisher wall that aborted the `br-pt` listicle row.

**Four of nine do not answer the Turkish query at all** (#3 English/Filipino, #6
machine-translated, #7 Arabic, #9 other languages). **0 of 9 cite TDK or any
dictionary.**

### Checkable finding in a ranking result

Opened #5 and #8 and read them.

- **#5 onedio.com** — the highest-ranking piece of genuine Turkish editorial for
  a query asking how to *say* özledim differently **contains no Turkish phrase at
  all.** All 11 "ways" are social-media behaviours: liking a photo from 135 weeks
  ago, favouriting every tweet, Snapchat replays, `#tb` and `#özledim` hashtags,
  mentioning them under a song. Byline reads `Coca-Cola Türkiye — Onedio Üyesi`;
  dated 14.02.2017. It is a nine-year-old branded advertorial.
- **#8 posta.com.tr** — same substitution, verified from the gallery captions:
  DÜŞÜNCELİ HAREKET, ŞARKILAR, FOTOĞRAFLAR, SANAT PLATFORMLARI, GELECEK
  PLANLARI. Six ways to *show* it. Zero phrases. `ppublishdate 20231128`,
  `pnewstype newsgaleri`.

I deliberately did **not** accuse either page of a dictionary error. Onedio's
closing `"Bende Son Durum: Çok Özledim"` uses *bende* as the locative of *ben*,
which is correct Turkish — it is **not** the Persian `bende` "► köle" trap the
German sibling caught at beluka.de. Checked and cleared, not asserted.

**The gap:** both Turkish publishers answer "how do I *show* it"; nobody answers
"which *sentence* do I write instead".

---

## 2. TDK — every entry read at the headword (`sozluk.gov.tr/gts`, HTTP 200)

| Headword | `lisan` tag | TDK definition, verbatim |
|---|---|---|
| özlemek | *(none — native)* | `(-i)` "Bir kimseyi, bir yeri veya bir şeyi görmeyi, ona kavuşmayı istemek, göreceği gelmek" |
| özlem | *(none)* | "Bir kimseyi veya bir şeyi görme, kavuşma isteği; özlenti, hasret, tahassür" |
| **hasret** | **Arapça ḥasret** | "► özlem" |
| hasretlik | *(none)* | "Sevilen bir şey veya kimseden ayrı kalma durumu, ayrılık" |
| hasret çekmek | *(none)* | "özlem duymak" |
| hasret kalmak | *(none)* | "özlemek" |
| hasretini çekmek | *(none)* | "**çok** özlemek" |
| hasret gidermek | *(none)* | "özleme son vermek, kavuşmak" |
| **burnunda tütmek** | *(none)* | "**çok** özlemek" — ör. "Benim Nazlılarım… **burnumda tütmeye** başladı" (Osman Cemal Kaygılı) |
| **gözünde tütmek** | *(none)* | "**çok** özlemek" |
| özlenti | *(none)* | "► özlem" |
| tahassür | **Arapça taḥassur** | `eskimiş` "► özlem" |
| iştiyak | **Arapça iştiyāḳ** | `eskimiş` "► özleme" |
| özlenmek | *(none)* | `nesnesiz` "Özleme işine konu olmak" |
| içi gitmek | *(none)* | [1] "**içi sürmek**" [2] "bir şeyi yapmayı veya elde etmeyi çok istemek" |
| içi sürmek | *(none)* | "**ishal olmak**" |
| yokluk | *(none)* | [1] "Yok olma, bulunmama durumu" [2] "Göz önünde bulunmama; gaybubet" |
| hissetmek | Arapça ḥiss + T. etmek | `(-i)` "► duymak" |

**THE FINDING THAT REFRAMES THE POST.** The task prompt asserts "Turkish has real
alternatives and **they are not synonyms**." **TDK says the opposite.** Nine of
the entries above are defined *by özlem or özlemek itself*: hasret, özlenti and
tahassür are bare cross-references `► özlem`; iştiyak is `► özleme`; hasret
kalmak is "özlemek"; hasret çekmek is "özlem duymak"; and burnunda tütmek,
gözünde tütmek and hasretini çekmek are all "çok özlemek". **Lexically they ARE
synonyms, by the official dictionary's own accounting.** Corrected in the body
and recorded in `structuralLimitations`.

What actually separates them, all four verified at TDK:
1. **Intensity** — three carry the adverb *çok* inside the definition.
2. **Origin/register** — hasret, tahassür, iştiyak carry an `Arapça` `lisan`
   tag; özlemek, özlem, özlenti carry none. TDK marks loan origin on the
   headword, so this is a read tag, not an assertion.
3. **Currency** — tahassür and iştiyak are tagged `eskimiş` (obsolete). Cut.
4. **Argument structure** — burnunda/gözünde tütmek make the *missed person* the
   grammatical subject.

`göreceğim geldi` is **not** a TDK headword (`Sonuç bulunamadı`) — but
*göreceği gelmek* is the closing clause of TDK's own definition of *özlemek*.
Licensed as the dictionary's paraphrase, stated in the body as exactly that.
`özlem duymak` is likewise not headworded but is TDK's gloss of *hasret çekmek*.
`göresi gelmek`: `Sonuç bulunamadı`, though *göresim gelmedi* appears in TDK's
Nâzım Hikmet citation under *hasret çekmek*.

---

## 3. Tatoeba — hand-inspected, survival counts reported

Tokenised search, so every raw count was inspected individually.

| Query | Reported | Fetched | Literal survivors |
|---|---|---|---|
| `hasret` | 31 | 31 | **31/31** |
| `özlem` | 18 | 18 | **17/18** |
| `özledim` | 124 | 10 (page 1) | 8/10 |
| `burnumda` | 190 | 30 | **2/30 (6.7%)** |
| `tütüyorsun` | 6 | 6 | **2/6** |
| `yokluğunu` | 84 | 10 | 3/10 |
| `içim gitti` | **653** | 10 | **0/10** |
| `göreceğim geldi` | 0 | 0 | 0 |
| `yokluğunu hissediyorum` | 0 | 0 | 0 |
| `hasret kaldım` | 0 | 0 | 0 |

**`içim gitti`: 653 raw hits, 0 survivors on page 1** — the tokeniser splitting
*içim* and *gitti* independently. The single loudest demonstration of the
false-positive mode the BRIEF warns about.

**The `hasret` distribution is the post's measured asset.** Of the 31 sentences,
**28 name a place** — *vatan hasreti*, *ev hasreti*, *sıla hasreti*, *memleket
hasreti*, all glossed "homesick". Three do not: #10765482 (*sevgiye*, "craving
affection"), #4905779 (*saadeti*, "the happiness I longed for"), and **exactly
one addresses a person: #4766169 "Ben sana hasretim" → "I pine for you." / "I'm
languishing for you."** Note the case: **`sana`, dative** — not the accusative
*seni* that *özlemek* `[-i]` requires. A real grammatical difference, not just
register. And both English translators reached for *pine* / *languish*, marked
verbs — corroborating the register lift from the gloss side.

Of the 17 *özlem* survivors, **not one addresses a person**: vatan/yurt/ev
özlemi, meyve, arkadaşlık, barış, üniversite, çikolatalı dondurma. The
person-directed member of this family is the **verb**, not the noun.

**The minimal pair, consecutive sentence IDs:**
- #5495688 `Burnumda tütüyorsun.` → "I long for you."
- #5495689 `Gözümde tütüyorsun.` → "I long for you."

Both TDK-headworded ("çok özlemek"), both attested, and both carry **`-sun`, 2sg
agreement** — *you* are the subject and the misser is reduced to a possessive on
a body part. n=2 in this corpus, stated as n=2 in the body.

**Zeros are NOT reported as absence** (the Polish sibling's discipline): a
3-sentence corpus for a phrase family proves nothing. `yokluğunu hissediyorum`
returned 0, yet **#12920763 `Yokluğunu çok hissettim.` → "I missed you a lot."**
attests the construction outright.

---

## 4. Cuts — recorded per BRIEF §4

- **`içim gitti` — CUT.** TDK `içi gitmek` sense [1] is a cross-reference to
  `içi sürmek`, and `içi sürmek` = **"ishal olmak"**. Sense [2] is wanting to do
  or obtain something, not missing a person. Not a miss-you phrase. The task
  prompt offered it; the dictionary refuses it.
- **`tahassür`, `iştiyak` — CUT.** Both `eskimiş` at TDK. Naming them as live
  options would mislead.
- **`sıla`, `gurbet`, `firkat` — CUT.** All Arabic-tagged, all about *place* or
  *separation*, none addresses a person.
- **`hasretlik` — CUT as a substitute.** TDK defines it as *ayrılık*, the state
  of being apart, not the feeling. Different word, different thing.
- **`özlenmek` — not re-derived.** The German sibling owns it.

---

## 5. Split from the three Turkish-bearing siblings

They answer *what özledim already means*; I answer *what you can write instead*.

- `seni-ozledim-mesajina-verilecek-cevaplar` — **replies**. Owns the `-m` 1sg /
  `[-i]` accusative morphology and the `bende` finding. **Pointed at, not redone.**
- `seni-ozledim-ingilizce-nasil-yazilir` — **into English**. Owns the 42/52
  past-marking measurement.
- `ich-vermisse-dich-auf-turkisch` — **from German**. Owns `özlenmek` `nesnesiz`,
  the 259/124 frequency count and `devrik cümle`.

**Where I extend the German sibling rather than repeat it:** it concluded that
Turkish's only inversion is the passive *özlenmek*, which being `nesnesiz`
*deletes* the misser. That holds for the **voice system**. But *burnunda tütmek*
and *gözünde tütmek* achieve the German `du fehlst mir` shape **lexically** —
the missed person takes 2sg subject agreement and the misser survives as a
possessive. Stated as an extension, with the sibling credited.

---

## 6. Sources (journals named for the §7 cap)

1. **TDK Güncel Türkçe Sözlük**, `sozluk.gov.tr/gts` — 38 entries fetched, every
   headword read on the delivered response. Cap-exempt instrument.
2. **Tatoeba**, `api_v0` — counts and hand inspection above. Cap-exempt.
3. **English Wiktionary, `hasret`** (pageid 1873448) — "From Ottoman Turkish
   حسرت, from Arabic حَسْرَة (ḥasra)", glossed "longing (**melancholic** desire)",
   `Synonym: özlem`. Independent corroboration of TDK's `Arapça` tag.
4. **Alshammari W.F. & Alshammari A.R. (2020)**, "Adaptation of Turkish Loanwords
   Originating from Arabic", **journal: *International Journal of English
   Linguistics*** 10(5). doi:10.5539/ijel.v10n5p388. Unpaywall `is_oa: true`,
   `oa_status: gold`, CC BY. Corpus of 250 Arabic-origin Turkish loanwords.
   **ABSTRACT ONLY** — the ccsenet full text is a PDF and PDFs do not parse here.
5. **Carrol G. & Segaert K. (2024)**, "As easy as cake or a piece of pie?
   Processing idiom variation and the contribution of individual cognitive
   differences", **journal: *Memory & Cognition*** 52(2), PMC10896937,
   doi:10.3758/s13421-023-01463-x. Unpaywall `is_oa: true`, hybrid, CC BY;
   Europe PMC `isOpenAccess: Y`, `cc by`. Eye-tracking, n=47 native English
   speakers: idiom **variants** required significantly longer overall reading
   times and more rereading than canonical idioms or literal controls.
   **ABSTRACT ONLY.**

**Cap position, checked by hand and not by `capcheck.mjs`:** neither journal is
*Frontiers in Psychology* (banned, over at 6) nor *PNAS* (banned). Neither
PMC10896937 nor the IJEL DOI appears anywhere in this batch or in
`2026-09-25-miss-you-30`. **Rejected on cap grounds:** *Scientific Reports*
(PMC10073073, "Love and affectionate touch toward romantic partners all over the
world") — already named in 2 posts in this batch, and taking it to 3 would leave
zero headroom with six agents writing concurrently. **Rejected on access
grounds:** "Echoes of the Turkish language reform: attitudes to Arabic and
Persian loanwords in discourse", *Turkish Studies* 2025,
doi:10.1080/14683849.2024.2447874 — a near-perfect subject match for the
register axis, but Unpaywall returns `is_oa: false, closed`. Took the
second-best and said so.

**Wikidata QIDs verified** at `Special:EntityData`: Q256 = Turkish ✓,
Q13955 = Arabic ✓. (Q34125, checked speculatively, is **Tetum** — not used.)

---

## 7. Honest verdict on the keyword's own premise

Only about four substitutes survive the dictionary *and* address a person, and
each one costs something: *sana hasretim* is Arabic-origin, dative-governed and
attested overwhelmingly for places; *burnumda tütüyorsun* is TDK-defined as "çok
özlemek", so it is an intensifier, not a neutral swap; *yokluğunu hissediyorum*
is compositional and absent from the dictionary; *göreceğim geldi* is TDK's own
paraphrase of *özlemek* rather than an independent idiom. Carrol & Segaert then
measure the cost of the strategy itself: varied forms are reread more.

So the body argues **against its own keyword's premise** — swap the phrase when
you mean something different (more intensity, or to make the other person the
subject), not to avoid repeating yourself. `seni özledim` is not a failure of
imagination; it is the form the language actually carries.

---

## 8. Addendum — two coordinator corrections applied after drafting

**SERP re-authenticated on content, not on the navigate response.** A third pass
used an **atomic per-record extraction** — title and href pulled from inside the
same result container in one call, so the two cannot straddle a page swap.
Result: 9 records, 0 dropped, all nine titles Turkish and on this keyword, all
nine hrefs identical to both earlier runs. **Three consistent observations of the
same nine results.** No position in this post rests on a navigate-then-read pair.

**Checklist item #25 tested rather than assumed.** The coordinator noted that
earlier agents wrongly reported Strapi offline because `curl`/WebFetch are
blocked. Checked properly: `http://localhost:1337` (the host configured at
`app/lib/storage.ts:27`) was queried from the sandbox with `fetch` — `/_health`,
an articles filter on this slug and a categories filter all returned
`fetch failed` — and then from the host itself, where `nc -z 127.0.0.1 1337`
reports **CLOSED/REFUSED** and `lsof` shows **no listener**. The server genuinely
is not running, so #25 stays failed on evidence rather than on assumption.

**First-party facts drawn from the uncollided platform-wide block.** Three of the
four `factsUsed` lines — 3,843 registered creators; 1.35 pages per registered
creator; love-gf at 17,093 views / 29.7% — appear in **zero** other posts across
both batches. The fourth (2.6-hour median edit gap, collided in 12 posts) was
kept on merit as the only line in `facts-snapshot.md` that measures revision
time, which is this post's subject. All four verified byte-verbatim.

**Frontiers in Psychology** is now measured at **8 posts** against a cap of 3 and
remains banned. Neither journal cited here is Frontiers or PNAS.

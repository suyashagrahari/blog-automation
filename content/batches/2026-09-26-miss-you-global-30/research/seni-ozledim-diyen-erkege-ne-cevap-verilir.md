# Research — `seni-ozledim-diyen-erkege-ne-cevap-verilir`

**Keyword:** seni özledim diyen erkeğe ne cevap verilir
**Region:** tr-tr · **Body language:** Turkish · **Category:** miss-you-across-miles
**Verdict: PROCEED.**

**One sentence:** The gendered query returns a materially different SERP from the
ungendered sibling's — three of its results are about a message that arrives *after a
silence* and two are machine-translated English pages promising to decode *his* intent —
so the lane is not "another reply list" but "what is he asking for", which neither sibling
occupies and which TDK's own definition of *özlemek* ("kavuşmayı istemek") makes a Turkish
question rather than an imported one.

---

## 1. Measured SERP (Gate 4)

**Route taken.** `serp-ddg.mjs --region tr-tr` was run **once** and returned
`(no results parsed)`. Per BRIEF §3 that is not worth a retry, so I switched immediately
to the real browser on Google served to Turkey: `gl=tr&hl=tr&pws=0&num=20`.

**Contention caught and discarded.** My second call on that tab (an `href` scrape) came
back with ten Spanish results — `te-extraño` letter pages, `poetalia.com`,
`tubreveespacio.com`, `pensador.com`. That is the `carta-para-decir-te-extrano` agent's
SERP, not mine. **Discarded, not recorded**, and re-run as a single atomic
navigate-and-extract (`browser_extract_all`), which returned my own query's results.

**Self-authentication:** every recorded row is Turkish or is a Turkish-titled result for my
query, and four rows contain the gendered wording (*erkek*, *bir erkek*) that the sibling's
ungendered SERP did not have. Two runs were compared; 10 of 11 rows are identical.
Run 1 additionally showed **marriage.com twice**; run 2 showed TikTok in its place. I
report what I actually saw and flag the difference rather than merging them.

### What ranks (Google tr-tr, 2026-09-27, personalisation off)

| # | Host | Page type | Language reality | Weak? |
|---|---|---|---|---|
| 1 | kizlarsoruyor.com (q511777) | Q&A forum thread | Turkish, user-generated | weak |
| 2 | wikihow.com.tr | Editorial how-to, 15 canned replies | Turkish (translated from wikiHow EN) | **not weak** |
| 3 | marriage.com *(run 1)* | US relationship magazine | **English page, machine-translated title** | weak |
| 4 | marriage.com *(run 1, 2nd slot)* | same URL, second title | English | weak |
| 5 | lovetoknow.com | US lifestyle site | **English page, machine-translated title** | weak |
| 6 | quora.com | Q&A, 50+ answers, 8 years old | English original, translated title | weak |
| 7 | reddit.com/r/BreakUps | Forum thread, `?tl=tr` | English original, auto-translated | weak |
| 8 | kizlarsoruyor.com (q21911551) | Q&A forum thread | Turkish, user-generated | weak |
| 9 | normalsozluk.com | Sözlük entry ("1 sene sonra gelen…") | Turkish, user-generated | weak |
| 10 | tiktok.com *(run 2)* | 60-second video | Turkish | weak |
| 11 | uludagsozluk.com | Sözlük entry | Turkish, user-generated | weak |

**Weak count: 10 of the 11 results I actually saw.** The single non-weak result is
wikiHow Türkiye, which is also the sibling's only editorial incumbent. Gate 4 passes
comfortably: there is no Turkish editorial publisher defending this query. The inventory's
`w=9` is, if anything, an understatement.

### Does the gendered framing change what the SERP wants? YES.

The sibling's ungendered SERP was a **reply-list** SERP (kizlarsoruyor ×2, ekşisözlük,
uludağsözlük, Reddit, Quora, a Medium listicle, wikiHow at #2). Mine keeps the forum floor
but swaps the top for a **decoding-and-re-approach** SERP:

- `marriage.com` — *"11 Hidden Meanings When a Guy Says He Misses You"* — pure intent-decoding
- `reddit.com/r/BreakUps` — *"İletişimi kestikten sonra 'Seni özledim' mesajına nasıl…"* —
  the message arriving **after no contact**
- `normalsozluk.com` — *"1 Sene Sonra Gelen Özledim Mesajına Verilecek Cevaplar"* — the same
  scenario at one year's distance
- `tiktok.com` — *"Seni özledim diye mesaj attığında bunu yap #ilişki #psikoloji"*

Four of eleven results are about **what he means and whether he is coming back**, a framing
absent from the sibling's measured SERP. That is the lane.

---

## 2. Checkable error found in a ranking result

**marriage.com ships a title that does not match its own page.**
`https://www.marriage.com/advice/relationship/when-a-guy-says-he-misses-you/`
returns HTTP 200 with:

- `<title>` and `og:title` = **"11 Hidden Meanings When a Guy Says He Misses You"**
- `<h1>` = **"9 Ways to Respond When a Guy Says He Misses You"**

Two different promises, one URL. Google indexed **both strings as two separate results** in
my run-1 Turkish SERP — one with the H1 machine-translated
(*"Bir Erkek Seni Özlediğini Söylediğinde Verilebilecek 9 Cevap"*) and one with the English
`<title>` left intact. Verified by reading the served HTML, not by inference.

A second, reader-checkable defect on the same page: its list of eleven *hidden* meanings
opens with **"1. He misses you"** — the literal meaning offered as a hidden one.

**Second measured finding — the Turkish titles are not Turkish pages.** `marriage.com`
declares `hreflang` for `en-US`, `es`, `fr` and `x-default` and **no Turkish at all**;
`lovetoknow.com` declares no `hreflang` and no `html lang`. So two of the results Google
offers a Turkish searcher *in Turkish* are English pages wearing translated titles.

**Deliberately NOT reused:** the sibling already owns wikiHow's *"Ne tesadüf!"* error
against TDK's `tesadüf` entry. I verified it still stands (TDK gives only two senses, neither
reciprocal) but did not build on it.

## 3. An accusation TESTED AND CLEARED

Turkish forum advice on this query leans on *naz yapmak* — reply coolly, make him work.
I suspected TDK marks *naz* as pejorative, which would have let me say the forums recommend
a word the dictionary condemns. **That is wrong and I dropped it.** TDK's `naz` gives three
senses: (1) "Kendini beğendirmek amacıyla yapılan davranış", (2) "İsteksiz gibi görünerek
yalvartmak amacıyla yapılan davranış", (3) "Şımarıkça davranış". Only sense 3 carries a
negative colouring, and TDK attaches no usage label (*hakaret*, *alay*, *küçümseme*) to
senses 1–2. The dictionary describes the behaviour neutrally. No accusation published.

---

## 4. TDK findings (sozluk.gov.tr/gts — headword read on every entry)

| Headword | What TDK actually says | Why it matters here |
|---|---|---|
| `özlemek` | tagged **`[-i]`**; "Bir kimseyi, bir yeri veya bir şeyi görmeyi, ona **kavuşmayı istemek**, göreceği gelmek" | The definition contains a **want**. *Özledim* is by dictionary definition a statement of desire, not only of feeling. **This is the spine and no sibling uses it.** |
| `cevap` | "Bir soruya, **bir isteğe**, bir söz, bir davranış veya yazıya verilen karşılık; yanıt" | TDK defines a *reply* as what you give to a **request**. Chained with `özlemek`, the question "ne cevap verilir" becomes "ne istendi". |
| `oyalamak` | sense 1 "…meşgul etmek, **bekletmek**"; sense 2 **"Vakit kazanmak için aldatmak"** | Turkish already has the word for breadcrumbing. No English loan needed. |
| `sitem` | "…üzüntü, alınganlık, kırgınlık vb. duygular uyandırdığını **öfkelenmeden** belirtme" | A precise, named Turkish reply register: reproach without anger. |
| `naz` | 3 senses, no negative usage label on 1–2 | See §3 — cleared, not published as an error. |
| `erkek` | sense 1 "Yetişkin adam"; **sense 3 "► koca"** | The query's *erkek* spans stranger to husband; the post must not assume a partner. |
| `bende` | separate headword, **Farsça, "► köle"** | Sibling's finding, cited by cross-link only, not re-argued. |

`seni` and `sizi` return "Sonuç bulunamadı" as the brief predicted — TDK does not headword
inflections.

## 5. Tatoeba (tatoeba.org, `from=tur`, query `özledim`)

- **Raw hits reported by Tatoeba: 141.** All 141 collected across paged calls.
- **Survived tokenisation — sentences literally containing `özledim`: 95 of 141 (67.4%).**
- The 46 rejected were other persons of the same verb: `özledi` ×28, `özledin` ×15,
  `özlediler` ×3. Confirms the sibling's warning that the search is tokenised.
- Of the 95, **41 address the hearer** (contain `seni` / `sizi` / `sizleri`).
- **Of those 41, only 2 carry any cue about meeting, contact or a next step**
  (`5623767` "Seni çok özledim. Seni görmek için sabırsızlanıyorum." and `12190356`
  "Seni o kadar özledim ki gözlerim yollarda kaldı."). **39 of 41 are bare declarations.**
- 6 sentences are the reciprocal `Ben de … özledim` form.
- Exactly **one** sentence is the bare `Seni özledim.` — id `630939`.

**The finding that carries the post:** TDK puts a request inside the verb; the attested
corpus almost never puts it in the sentence. 2 of 41 is why the reader cannot tell what he
wants — and it is a measured number, not an opinion.

**Method note (recorded because it nearly produced a false figure):** my first pass used a
case-sensitive pronoun test and returned 22 rather than 41, silently dropping every
sentence-initial *Seni*. Caught and corrected before anything was written.

## 6. Duplicate risk — read both siblings, both LIVE on Strapi

| Sibling | Owns | My split |
|---|---|---|
| `seni-ozledim-mesajina-verilecek-cevaplar` (tr, live) | Replies sorted by **what you want to happen next** — 4 cells: you miss him too / you don't / an ex / unclear. TDK morphology (`-m` = 1sg, `[-i]`, `ben de` vs `bende`). | I do **not** re-sort by your wish and do not re-argue the morphology. I sort by **what is being asked of you**. |
| `what-does-it-mean-when-he-says-i-miss-you` (en, live, **2026-09-25 batch**) | What *he* means, sorted by observable **pattern** — 5 situations incl. "testing the water after distance" and "just ahead of an ask". | **Not named in my prompt — I found it.** It is English, for a US SERP, and it refuses to decode. Mine is Turkish, for a Turkish SERP, and its unit is the TDK definition plus a Turkish corpus count, neither of which that post has. |

Both are cross-linked in the body with the split stated. Strapi production
(`strapi.subhsandesh.in/api/articles`) confirms both slugs live (`total:1`) and **my slug
free (`total:0`)** — checklist item on the Strapi slug is genuinely satisfiable and passed.

## 7. Sources (journals named for the cap)

1. **TDK Güncel Türkçe Sözlük**, `özlemek` — cap-exempt instrument.
2. **TDK Güncel Türkçe Sözlük**, `oyalamak` — cap-exempt instrument.
3. **Tatoeba** — cap-exempt instrument; 141 raw / 95 surviving / 41 hearer-addressed / 2 with a next-step cue.
4. **BMC Psychology** 13 (2025), Atalar, Çolakoğlu, Bağişlioğlu, Ammar & Jahrami,
   "Turkish adaptation of Ghosting Questionnaire", `PMC12007334`, CC BY, 2025-04-17.
   **Journal cap note: BMC Psychology stands at 2 posts in this batch, so this is the third
   and final slot.** Abstract only.
5. **International Journal of Environmental Research and Public Health** 17 (2020),
   Navarro, Larrañaga, Yubero & Víllora, "Psychological Correlates of Ghosting and
   Breadcrumbing Experiences", `PMC7037474`, CC BY, 2020-02-10. **IJERPH stands at 1 post in
   this batch.** Abstract only.

**Disclosed reuse:** `PMC7037474` is also cited by `what-does-it-mean-when-he-says-i-miss-you`
in the **2026-09-25** batch. The URL cap is per batch and this is its first use in this
batch, but I am naming it because its finding is load-bearing here and a reviewer should
know. I chose it over the unspent `PMC7766626` (BREAD-ASR, same journal) because BREAD-ASR
is an instrument-validation paper with no outcome finding, whereas Navarro et al. report the
asymmetry the post turns on.

**Banned and avoided:** every candidate search returned *Frontiers in Psychology*, *PLoS ONE*
or *Scientific Reports* papers in the top results. All discarded unread on the cap.

## 8. Honest limits recorded in the post

- Neither paper studies replying to a message; both study ghosting/breadcrumbing.
  Navarro et al. is a **Spanish adolescent-to-adult online sample**, not Turkish.
- The Turkish paper (Atalar et al.) is a **psychometric validation**, n=200, 80% female —
  it establishes that a scale works in Turkish, **not how common ghosting is in Turkey**.
  Stated in body prose so no reader can take it as a prevalence figure.
- Both read **abstract only**; PDFs do not parse here.
- Tatoeba is a volunteer sentence bank, not a balanced corpus of Turkish; 41 sentences is a
  small base and the post says so.
- No first-party figure is Turkish, and the database records which **template** was opened,
  never who received it. Disclosed in body prose.

# Research brief — `kangen-kamu-bahasa-jawa`

- **Keyword:** kangen kamu bahasa jawa
- **Body language:** Indonesian (Javanese lines are quoted material)
- **Region:** `id-id`
- **Tier:** A-translate
- **Category:** `miss-you-across-miles` (Strapi id 8, verified live)
- **Templates:** `/missyou-gf` (mandatory), `/capsule`, `/templates`
- **Slug check:** `filters[slug][$eq]=kangen-kamu-bahasa-jawa` → `total: 0`. Free.

---

## 0. Framing claims in the task prompt — checked before building on them

| Prompt claim | Verdict | Evidence |
|---|---|---|
| Javanese has speech levels ngoko / krama / krama inggil | **TRUE** | jv.wiktionary `Cithakan:Jenis tembung` switch carries `n` ngoko, `k` krama, `ki` krama-inggil, plus `km` krama madya, `kd` krama désa, `kw` krama wenang, `kn` krama-ngoko — 7 register labels in one dictionary |
| "*kowe* / *sampeyan* / *panjenengan* are the classic **ngoko/madya/krama** ladder" | **FALSE** | Both instruments say ngoko / **krama** / **krama inggil**. en.wiktionary `ꦱꦩ꧀ꦥꦺꦪꦤ꧀` = `{{jv-krama of|ꦏꦺꦴꦮꦺ}}`; `ꦥꦚ꧀ꦗꦼꦤꦼꦔꦤ꧀` = `{{jv-krama inggil of|ꦏꦺꦴꦮꦺ}}`; jv.wiktionary labels them `{{k}}` and `{{ki}}`. *Madya* (`km` krama madya) is a separate register that none of the three belongs to. **Angle corrected.** |
| *kangen* is itself Javanese | **TRUE** | en.wiktionary `ꦏꦔꦼꦤ꧀`: inherited from Kawi (Old Javanese) *kāṅĕn* "to think of (with emotion), always to have in one's thoughts"; descendant `{{desc|id|bor=1|kangen}}` |
| ISO `jav` | **TRUE** | iso639-3.sil.org/code/jav — Javanese [jav], Active, code sets 639-2 + 639-3, 639-1 equivalent **jv**, Scope **Individual**, Type **Living** |
| Aksara Jawa has a Unicode block | **TRUE** | UCD 18.0.0 `Blocks.txt`: `A980..A9DF; Javanese`. `UnicodeData.txt` → **91 assigned codepoints** in that 96-slot range |
| Wiktionary 404s on inflected forms | **TRUE, and worse here** | `en.wiktionary.org/wiki/kangen kowe` → `missingtitle`. Also: English Wiktionary lemmatises Javanese **at the Aksara Jawa spelling** — `kangen`, `kowe`, `panjenengan`, `kula`, `aku` are all `{{jv-rom}}` romanization stubs with no gloss. The content is only at `ꦏꦔꦼꦤ꧀`, `ꦏꦺꦴꦮꦺ`, `ꦥꦚ꧀ꦗꦼꦤꦼꦔꦤ꧀`, `ꦏꦸꦭ`, `ꦲꦏꦸ` |
| Baoesastra Djawa scan on archive.org | **FALSE / unavailable** — see §5 |

---

## 1. SERP — measured, with the route named

**Google was unreachable.** Five attempts across ~30 minutes from the shared real
browser (`google.com/search?q=kangen+kamu+bahasa+jawa&gl=id&hl=id&pws=0`, with and
without `num`, and `google.co.id`) every one redirected to `google.com/sorry/index`.
`serp-ddg.mjs` was tried **once**, per BRIEF §3: `UND_ERR_CONNECT_TIMEOUT` on
`html.duckduckgo.com:443`. `serp.mjs` (Brave) not attempted — `WAVE1-PLAN.knownIssues`
records it 429 on this date. `html.duckduckgo.com` in the real browser: 30 s navigation
timeout.

**Route actually used — INSTRUMENT SUBSTITUTION, stated in the post:**
**Bing served to the Indonesian market in the operator's real Chrome**,
`bing.com/search?q=kangen+kamu+bahasa+jawa&setlang=id&mkt=id-ID` (first run also
`cc=id&count=20`). **This is Bing, not Google.** The Indonesian UI string ("Mencari")
and ten Indonesian, on-query results self-authenticate each scrape.

Run twice. Ranks 2–10 identical in both runs; run 1's slot 1 came back as an injected
`<style>` blob, run 2 resolved it to `kawruhbasa.com/arti-kangen-…`. A third attempt
returned `b_no` — "Tidak ada hasil untuk kangen kamu bahasa jawa" — i.e. a bot
response, recorded rather than hidden. **Contention was real and visible:** two
`browser_get_url` checks during this work returned `dle.rae.es/falta` and
`dle.rae.es/echar` — the Spanish sibling's tab. Both were discarded, not recorded.

| # | Domain | Page type | Weak? |
|---|---|---|---|
| 1 | kawruhbasa.com | Javanese-learning blog, "Tanya Jawab" Q&A post | yes |
| 2 | kbji.kemendikdasmen.go.id | **Government dictionary (KBJI, Balai Bahasa DIY)** — but see §5: the public URL renders an empty logged-out workspace | no |
| 3 | kosakatajawa.com | word-per-page dictionary blog | yes |
| 4 | kamusjawa.net | auto-generated one-line dictionary page | yes |
| 5 | kosakatajawa.com | word-per-page dictionary blog (`/bahasa-jawanya/rindu/`) | yes |
| 6 | kamusjawa.net | auto-generated one-line dictionary page | yes |
| 7 | kawruhbasa.com | Q&A post, 9 Mar 2023, "Berita ini 790 kali dibaca" | yes |
| 8 | perpusteknik.com | general content farm | yes |
| 9 | bocahkampus.com | free-text translate tool | yes |
| 10 | kamuslengkap.com | dictionary aggregator carrying a countdown discount banner | yes |

**Weak count: 9 of 10 I actually saw.** No national news portal, no established
Indonesian publisher, no academic source, **no citation of any named dictionary on any
of the ten**. Two domains appear twice each (kosakatajawa, kamusjawa, kawruhbasa —
three domains taking six of ten slots).

**Gate 4: PROCEED.** This is not the incumbent wall the brief warned about for
`D-listicle` rows. It is a SERP of unsourced word-per-page blogs.

**Fan-out (Google Suggest, `hl=id&gl=id`, live):** `kangen kamu bahasa jawa halus`
(rank 2 — the speech-level question, in the demand data), `aku kangen kamu bahasa
jawa`, `saya kangen kamu bahasa jawa`, `aku juga kangen kamu bahasa jawa`, `kangen
banget sama kamu bahasa jawa`, `aku kangen kamu mas bahasa jawa`, `kamu kangen aku gak
bahasa jawa`, `aku kangen kamu sayang bahasa jawa`; and from `kangen bahasa jawa
krama`: `krama inggil`, `krama alus`, `bahasa jawa krama aku kangen kamu`.

---

## 2. Gap analysis

**Table stakes** all ten cover: *kangen* = *rindu*; "Aku kangen kowe".

**The gap.** Nine of ten give a single answer to a question that has three. Only two
mention a register at all, and both get it wrong (§4). Not one names a dictionary, a
corpus, a Unicode chart or an ISO code. **Nobody prints the krama line correctly.**

**Angle:** *This post wins by being the only one that names the speech level of every
Javanese line it prints, checked against a dictionary entry a reader can open — and by
answering the question none of the ten asks, whether a krama verb for* kangen *exists
at all (it does not: only the pronoun moves).*

---

## 3. The answer, verified

**`kangen` does not change. Only the pronoun does.**

- Javanese Wiktionary (`jv.wiktionary.org/wiki/kangen`) labels the entry **`{{kn}}`**,
  which `Cithakan:Jenis tembung` expands to **"krama/ngoko"** — one word for both
  registers. Gloss: *"tansah kèlingan sarta kepéngin ketemu karo kang ditinggal (kang
  tinresnan)"*.
- English Wiktionary's `ꦏꦔꦼꦤ꧀` heads the word `{{head|jv|adjective|tr=kangen|ngoko}}`
  and carries **no `jv-set`** — the template that gives every Javanese word with
  register counterparts its ngoko/krama/krama-inggil row. Three `insource:` searches of
  English Wiktionary (`"jv-krama of|ꦏꦔꦼꦤ꧀"`, `"jv-krama inggil of|ꦏꦔꦼꦤ꧀"`,
  `/jv-set.*ꦏꦔꦼꦤ꧀/`) returned **0 hits each.**

The two instruments disagree on one point and the post says so: jv.wiktionary calls
*kangen* krama-ngoko (both registers), en.wiktionary tags it ngoko. Either way, **no
distinct krama verb is recorded by either.**

| Form | Level | Instrument |
|---|---|---|
| **kangen** ꦏꦔꦼꦤ꧀ | krama-ngoko (`kn`) / ngoko | jv.wikt `kangen`; en.wikt `ꦏꦔꦼꦤ꧀` |
| **aku** ꦲꦏꦸ | ngoko | en.wikt `ꦲꦏꦸ` `jv-set|kra=ꦢꦊꦩ꧀|kr=ꦏꦸꦭ|ng=ꦲꦏꦸ` |
| **kula** ꦏꦸꦭ | krama | en.wikt `ꦏꦸꦭ`; jv.wikt `{{k}} aku, -ku` |
| **kowé** ꦏꦺꦴꦮꦺ | ngoko | en.wikt `{{lb|jv|ngoko}}`; jv.wikt `{{ngoko|sampéyan|panjenengan}}` |
| **sampéyan** ꦱꦩ꧀ꦥꦺꦪꦤ꧀ | **krama** | en.wikt `{{jv-krama of|ꦏꦺꦴꦮꦺ}}`; jv.wikt `{{k}} kowé` |
| **panjenengan** ꦥꦚ꧀ꦗꦼꦤꦼꦔꦤ꧀ | **krama inggil** | en.wikt `{{jv-krama inggil of|ꦏꦺꦴꦮꦺ}}`; jv.wikt `{{ki}} kowé` |
| **banget** / **sanget** | ngoko / krama | jv.wikt `{{ngoko|sanget}}`, `{{krama|banget}}` |
| **ora** / **boten** | ngoko / krama | jv.wikt `ora` `{{ngoko|boten}}` |
| **apa** / **punapa** | ngoko / krama | jv.wikt `apa` `{{ngoko|punapa}}` |
| **ibu** | krama (of *embok*) | jv.wikt `ibu` `{{krama|embok}}` |
| **tresna** | krama-ngoko (`kn`) | jv.wikt `tresna` |

**Attested sentence.** Tatoeba **#902839**, `jav`: **"Aku kangen kowe."** → eng
**#1308 "I miss you."**, and its Indonesian translations are **"Aku kangen kamu."** and
**"Saya rindu Anda."** — the exact keyword string and its formal Indonesian counterpart
sitting in the same translation set.

**Register frequency in Tatoeba's Javanese corpus** (`from=jav`, sentence counts):
*aku* 243, *kula* 30, *kowé* 18, *panjenengan* 14, ***sampéyan* 1**.

---

## 4. Checkable errors in ranking results

**(a) kawruhbasa.com, `/bahasa-jawanya-aku-kangen-kamu/`, #7, dated 9 March 2023.**
Prints, in full: *"Ngoko : Aku kangen kowe. Krama : Kula kapang panjenengan."*
Wrong twice:
1. ***panjenengan* is krama inggil, not krama.** en.wiktionary `ꦥꦚ꧀ꦗꦼꦤꦼꦔꦤ꧀` is
   `{{jv-krama inggil of|ꦏꦺꦴꦮꦺ}}` and jv.wiktionary labels it `{{ki}}`. The krama
   pronoun for *kowé* is *sampéyan*. The line labelled "Krama" is not krama.
2. ***kapang* is not recorded as a krama form of *kangen* by either dictionary.**
   jv.wiktionary's `kapang` entry is labelled `{{kn}}` **and `{{ak}}`** — the Bausastra
   abbreviation for *"iki arang kanggone"*, rarely used — and glosses it
   *"padha ngadeg (linggih) mangun satengah buwengan"*, standing or sitting in a
   half-circle. English Wiktionary does assert a Javanese ꦏꦥꦁ "to long, to yearn" but
   only inside the etymology of Indonesian *kapang* "eclipse"; the page `ꦏꦥꦁ` itself is
   `missingtitle`. So the sense is attested, the **register label is not**.

**(b) kosakatajawa.com, `/bahasa-jawanya/rindu/`, #5.** Title: *"Bahasa Jawanya Rindu
Ngoko & Krama Alus Serta Contoh"*. Body: *"jika kata Rindu diterjemahkan ke dalam
Bahasa Jawa Ngoko dan **Krama Inggil** memiliki kata tersendiri"* — then gives
**only** *kangen*, marked Ngoko, with three ngoko examples and no krama or krama inggil
form anywhere on the page. It promises the polite register in the title, names a
*different* register in the first sentence, and delivers neither.

---

## 5. Instruments that refused, and what replaced them

- **Baoesastra Djawa (Poerwadarminta 1939)** — Open Library work `OL387686W` exists,
  author and year confirmed, but the record carries **no `ia` scan id**, and
  `archive.org` advancedsearch for `title:(baoesastra)` and `(bausastra OR baoesastra)
  AND djawa` both return `numFound: 0`. **No readable scan. Not cited.**
- **Horne, *Javanese-English Dictionary* (Yale 1974)** `javaneseenglishd0000horn` and
  **Robson & Wibisono (2002)** `javaneseenglishd0000robs` are on archive.org but
  lending-restricted; `fulltext/inside.php` returns **403** for both, and
  `api.archivelab.org` / `ia-pub-fts-api` are `UND_ERR_CONNECT_TIMEOUT` / `ENOTFOUND`.
  **No page number obtainable. Not cited.**
- **sastra.org** — `UND_ERR_CONNECT_TIMEOUT`. **bausastra.uad.ac.id** — `ENOTFOUND`.
- **KBJI, `kbji.kemendikdasmen.go.id`** (Bing #2) — scripted fetch returns a JS
  challenge (*"Mohon tunggu saat kami memverifikasi permintaan Anda…"*); the real
  browser gets past it and renders **an empty "KBJI Workspace" search shell with a
  `Masuk` (log-in) button and no entry content**. `?q=kangen` changes the `<title>` to
  "kangen - Kamus Bahasa Jawa-Indonesia KBJI" and still renders no definition.
  **Not cited — a government dictionary that does not serve its entry to a reader.**
- **What replaced them:** `jv.wiktionary.org`, whose Javanese entries are built on the
  **Bausastra abbreviation set itself** (`Cithakan:Jenis tembung` is a switch over
  `kyt`, `ar`, `bngs`, `up`, `ut`, `ak`, `êngg`, `kc`, `tmr`, `saèm`, `lsp`, `ki`, `k`,
  `n`, `kn`, `kd`, `km`, `kw`, `br`, `ént`, `kb`, `ks`, `lmr`, `cs`, `ws`, `wc`, `pr`,
  `pc`, `plutan`, `(Jk)`, `(Kw)`, `(Prs)`, `(Prt)`, `(S)`, `(C)`, `(A)`, `(M)`, `(W)`).
  English Wiktionary's Javanese entries cite *Kamus Basa Jawa (Bausastra Jawa)*,
  Linguistic Center of Yogyakarta, Kanisius, 2nd ed. 2011, ISBN 978-979-21-2858-1.

---

## 6. Lines and sources CUT

1. **"sampéyan = madya"** (from my task prompt). Cut. Both dictionaries say krama.
2. **"Kula kapang panjenengan"** as the krama line. Cut — §4(a).
3. **"mboten"** for "not". Cut → **boten**. `jv.wiktionary.org/wiki/mboten` is MISSING;
   the lemma under `ora` is `{{ngoko|boten}}`.
4. **"Aku kangen kowe, sayang."** Cut. Javanese *sayang* is not an endearment:
   jv.wiktionary gives three senses — a tool's forked tip, a nest, and a coppersmith.
   The endearment is Indonesian.
5. **Aksara Jawa spellings quoted from memory.** Cut and re-derived: every codepoint
   printed was decoded against UCD 18.0.0 `Blocks.txt` + `UnicodeData.txt`.
6. **Wikidata `Q1786410` for "Krama".** Cut from `sameAs` — the Wikipedia extract for
   that QID begins *"A krama … is a sturdy traditional Cambodian garment"*. Wrong
   entity. `Javanese speech levels` and `Honorific speech in Javanese` are both
   `missing` on English Wikipedia, so no QID exists for the register system; only
   `Q33549` (Javanese language) and `Q879704` (Javanese script) are used.
7. **Heliyon `PMC9489508`** (kinship terms as a politeness model). Cut — it studies
   **Bugis**, not Javanese. Fails the subject test for this row.
8. **`PMC7540291`** (Yearning in Situations of Loss Short Form, Dutch/German/English).
   Cut — bereavement grief, not missing a living person, and no Javanese or Indonesian
   sample. Would have been an overclaim.
9. **`PMC13489933`** (Indigenous oral traditions and well-being). Cut — conceptual, no
   Javanese data.
10. **Corpus-size claim for Tatoeba Javanese.** Cut. An empty `from=jav` query returns
    `count: 1000`, which is a paging cap, not a corpus size. Only the per-word counts
    (all well under the cap) are printed.

---

## 7. Sources (6)

| # | URL | What it carries | Subject | Swap |
|---|---|---|---|---|
| 1 | `jv.wiktionary.org/wiki/kangen` | `{{kn}}` = krama/ngoko + Bausastra gloss | pass | pass |
| 2 | `en.wiktionary.org/wiki/ꦏꦺꦴꦮꦺ` | `jv-set` ng/kr/kri = kowé/sampéyan/panjenengan | pass | pass |
| 3 | `en.wiktionary.org/wiki/ꦏꦔꦼꦤ꧀` | ngoko adjective, from Kawi *kāṅĕn*, → Indonesian | pass | pass |
| 4 | `tatoeba.org/en/sentences/show/902839` | "Aku kangen kowe." ↔ "I miss you." ↔ "Aku kangen kamu." | pass | pass |
| 5 | `journal.binus.ac.id/index.php/Lingua/article/view/7109` | Atmawati, *Lingua Cultura* 15(1), 2021 — 50 Javanese speakers, Magelang; younger speakers misapply krama-inggil verbs *siram*, *tindak*, *mireng* to themselves. **Peer-reviewed, open access.** | pass | pass |
| 6 | `jurnal.ugm.ac.id/jurnal-humaniora/article/view/65058` | *Jurnal Humaniora*, 2022 — 12 speakers in public transactional talk; 5/5 women held krama, 6/7 men held ngoko. **Peer-reviewed, open access.** | pass | pass |

Unicode 18.0.0 and iso639-3 were **verified and named in prose but not hyperlinked**,
to keep outbound links inside the checklist's 3–6. Wikipedia: 0 body links; two QIDs in
`sameAs` only. `capcheck.mjs` run immediately before writing: no banned URL, no domain
at cap, no URL at cap. Banned PMCIDs (PMC13552847, PMC11977004, PMC13481806) not used;
`doi.org` and `journals.plos.org` not used.

---

## 8. Split from the Indonesian sibling

`kangen-kamu-bahasa-inggris.json` owns the **Indonesian→English** question and the
KBBI evidence (*kangen* `cak`, *rindu* unlabelled, 28 Tatoeba sentences). **This post
owns the Javanese speech levels** — it does not re-run the English translation work,
does not re-cite KBBI as a source, and takes the sibling's verified finding that
*kangen* is a Javanese borrowing as its own starting point rather than its conclusion.

---

## 9. First-party facts

Chosen from `facts-snapshot.md` (**not** `content/facts.md`), deliberately avoiding the
sibling's three. Collision counts across the 66 posts in the two miss-you batches:
2,417 views → 33; 92.1% open-when → 33; 47 city pairs → 33. These are the
**least-collided lines available**, and 33 of 66 is still one post in two. Recorded as
an audit failure, not hidden.

Mandatory caveats, all carried in Indonesian body prose: pickers-with-defaults (the
15-city list), `viewCount` = page views not unique visitors, n = 214 over two months,
**nothing segmented by language or country**, and **the database records which template
was opened, never who received it** — which is exactly why it cannot answer the
register question the post is about.

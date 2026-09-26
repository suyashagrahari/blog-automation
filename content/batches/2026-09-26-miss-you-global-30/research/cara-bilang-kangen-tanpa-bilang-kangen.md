# Research brief — `cara-bilang-kangen-tanpa-bilang-kangen`

- **Row**: `B-howto`, `bodyLanguage: Indonesian`, `region: id-id`, category `miss-you-across-miles`
- **Decision**: **PROCEED** (Gate 4 passed on the measured Google id-ID SERP)
- **Measured**: 2026-09-26

---

## 1. SERP measurement

### Route

**Primary — isolated Playwright browser** (per-agent, never the shared Chrome), Google served
to the Indonesian market with personalisation off:

```
https://www.google.com/search?q=cara+bilang+kangen+tanpa+bilang+kangen&gl=id&hl=id&pws=0&num=20
```

Self-authenticated before recording a single position: the returned page carried my own query
in its search box and `documentElement.lang === "id"`. No contention artefact.

**Confirmation run — refused.** Google returned `/sorry/index` **HTTP 429** on the second
attempt. The captcha was **not** clicked. The second measurement was therefore taken on
**Bing `setlang=id&mkt=id-ID`** in the same isolated Playwright browser and is recorded as an
**instrument substitution** — a different index, reported separately rather than averaged in.

`serp-ddg.mjs` and `serp.mjs` were not attempted; BRIEF §3 already establishes they are down,
and the Playwright route worked first time.

### Google id-ID — 9 organic results (Google returned 9, not 10, for `num=20`)

| # | Host | Page type | Weak |
|---|---|---|---|
| 1 | x.com (@radenrauf) | social post, Feb 2022, 22.9k likes | yes |
| 2 | kelasonlinemrbob.com | English-course blog listicle, answers in English | yes |
| 3 | instagram.com (@bund.lifetainment) | social post, 510+ likes | yes |
| 4 | quora.com | Q&A thread, 10+ answers, 3 years old | yes |
| 5 | tiktok.com (@heny) | short video, 344.9k views | yes |
| 6 | cosmopolitan.co.id | national magazine — also an English-phrase listicle | **no** |
| 7 | threads.net (@sadzvianip) | social post, 8 months old | yes |
| 8 | englishvit.com | English-course article, English phrases | yes |
| 9 | hipwee.com | lifestyle portal, article dated 22 Feb 2020 | yes |

**Weak count: 8 of the 9 I actually saw.** I did not invent a tenth result.
Counting Hipwee as strong (it is a judgement call on age and thinness) would still leave 7 of 9.
An **AI Overview ("Ringkasan AI") was present**, with sub-headings *Cara Halus Lewat Pesan*,
*Aksi Langsung Tanpa Banyak Kata*, *Cara Mengungkapkan Kangen Lewat Kata-Kata* and
*Cara Mengungkapkan Kangen Tanpa Kata-Kata*.

**Zero of the nine cites any named dictionary.**

### Bing id-ID — a materially different field

Sonora.id (1), Hipwee (2), kumparan.com (3), Cosmopolitan Indonesia (4), Liputan6.com (5),
kelasonlinemrbob.com (6), Kompasiana (7), IDN Times (8), timenews.co.id (9).

Five established national portals; roughly **3 of 9 weak**, which would be a much tighter gate.
**None of Kumparan, Liputan6, Sonora or IDN Times appears anywhere in Google's nine.**

### Gate 4 — PROCEED

Applied to **Google**, because that is overwhelmingly the index Indonesian readers use.
8 of 9 weak; five UGC results, two English-course listicles answering the Indonesian question
in English, one six-year-old lifestyle post. The single strong result (Cosmopolitan) answers a
different question. A post that reads KBBI and counts Tatoeba occupies an empty position.

The Bing divergence is the honest uncertainty in this decision and is recorded in
`batchMeta.serp.googleVsBing` rather than hidden.

### Orchestrator prediction — checked

The prompt predicted national portals (Kumparan, Liputan6, Merdeka, Sonora, IDN Times) might
own this SERP. **Wrong on Google** (zero of five rank); **largely right on Bing** (four of five).
The prediction was index-dependent and was stated without naming an index.

---

## 2. What I could and could not source about the particles

The prompt's framing — that *sih / dong / kok / nih / deh* "carry exactly the softening this
reader wants" — is **only one-fifth supported by KBBI**. All five entries were opened and the
headword read on the page before citing.

| Particle | KBBI label | KBBI definition | Softener? |
|---|---|---|---|
| **dong** | `p cak` | "kata yang dipakai di belakang kata atau kalimat untuk **pemanis atau pelembut maksud**" | **YES — the dictionary uses the word *pelembut*** |
| **sih** | `p cak` | 1. "kata penambah atau penegas dalam kalimat tanya, menyatakan **masih bimbang atau belum pasti benar**"; 2. "memang; sebenarnya" | No — marks hesitancy inside a question |
| **nih** | `p cak` | "ini (**dengan penegasan**)" | **No — emphatic** |
| **deh** | `Jk p` | "kata yang digunakan untuk **mengukuhkan** kata-kata atau maksud kawan bicara" | **No — affirming** |
| **kok** | — | **UNREACHABLE** | Unknown; no claim made |

**The *kok* trap.** Both mirrors — `kbbi.web.id/kok` and `kbbi.co.id/arti-kata/kok` — return
**HTTP 200** and serve `kok n bola dalam permainan bulu tangkis`: the **badminton shuttlecock**.
`en.wiktionary.org/wiki/kok` has no Indonesian particle section either (its only "Indonesian"
string is a descendants list belonging to *koki*). This is the exact HTTP-200-wrong-entry trap
BRIEF §4 warns about, caught by reading the headword. **No claim about *kok* appears in the post.**

**Corroboration on *deh*.** `en.wiktionary.org/wiki/deh` independently gives the Indonesian
particle *dèh* as "(Jakarta, colloquial) **adds emphasis** at the end of a phrase or a sentence",
borrowed from Betawi Kota *dèh*, a doublet of *sudah*. Two independent sources agree it is
emphatic, and Wiktionary's "(Jakarta)" matches KBBI's `Jk` label.

`en.wiktionary.org/wiki/sih` and `/nih` **have no Indonesian section at all.** Honest negatives.

---

## 3. The spine — verified, not asserted

The prompt's hypothesis that **the pronoun itself can carry the distance** holds, and KBBI
says so in its own register labels:

- *aku* — "yang berbicara atau yang menulis (**dalam ragam akrab**)"
- *kamu* — "yang diajak bicara; yang disapa (**dalam ragam akrab atau kasar**)"
- *saya* — "orang yang berbicara atau menulis (**dalam ragam resmi atau biasa**)"
- *Anda* — "sapaan untuk orang yang diajak berbicara ... (**tidak membedakan tingkat, kedudukan, dan umur**)"

English has one *you*. Indonesian lets the speaker keep the sentence and move one word.
This is the one place where the orchestrator's framing survived checking intact.

**`basa-basi` is the sourced home for "udah makan?".** KBBI sense 2: "ungkapan yang digunakan
**hanya untuk sopan santun dan tidak untuk menyampaikan informasi**, misalnya kalimat
'apa kabar?'". The dictionary names the category. It gives *apa kabar?* as its example and
does **not** list *udah makan?* or *lagi apa?* — the post says so explicitly rather than
inventing a taxonomy.

Also read: *sungkan* ("merasa tidak enak hati"; "menaruh hormat; segan") and *kangen*
(`a cak`, "ingin sekali bertemu; rindu", derivatives *mengangeni* and *kangen-kangenan*).

---

## 4. Attested usage — Tatoeba counts

- ***dong***: the whole ind→eng corpus holds **5 sentences**. **4 of 5 are requests or
  prohibitions** (*Jangan marah, dong* / *Ambilkan teh di kulkas dong* / *Bawa gelas itu ke
  dapur dong* / *Sedikit aja dong*) — exactly KBBI's function. **4 of 5 English translations
  contain no word corresponding to *dong***. One survives as a question tag.
- ***sih***: **19 sentences** reported; **10 readable** on the first API page (the `page`
  parameter returns HTML, not JSON). **8 of those 10 are questions**, matching KBBI sense 1;
  the other two match sense 2 (*Ini parah banget sih* → "This is awful indeed").
  Every count in the body is stated as "of the 10 I could read".
- *Sudah makan?* is an attested sentence, translated "Have you already eaten?".
- Best find: **`Tau nggak sih? Kamu tuh cantik.` → "You know what? You're beautiful."**
  A question whose content is a compliment — the thesis in one attested sentence.

---

## 5. Third-party research

**Cited (1, peer-reviewed, gold OA, CC-BY):**
*Indirectness and politeness in request strategies of Javanese male Indonesian EFL learners*,
**Studies in English Language and Education** 13(2):1033–1050, Universitas Syiah Kuala,
2026-05-31, doi:10.24815/siele.v13i2.1100. Unpaywall `is_oa: true`, `oa_status: gold`.

Measured: conventionally indirect strategies **56.25%**, direct **43.75%**, external
modifications (supportive reasons) **81.25%**.

**What it does not measure, stated in the body:** **n = 4** male university students from
Central Java, role-play, **formal contexts**, **requests** — not expressions of longing to a
partner. It supports "indirectness carries cultural weight in Indonesia"; it does not support
any claim about how Indonesians talk to people they miss.

**ABSTRACT ONLY.** `publications.usk.ac.id` returns **HTTP 468** to a scripted UA *and* to the
isolated Playwright browser. The abstract was read via the Crossref REST API and confirmed
word-for-word against OpenAlex's inverted index.

**Rejected:**
- `10.17509/ijal.v3i1.197` (Indonesian Journal of Applied Linguistics) — `ejournal.upi.edu`
  403 Cloudflare.
- PMC8669216 (long-distance texting, JSPR 2021) — already spent in **4** sibling posts.
- PMC12221085 (emoji/responsiveness, PLoS ONE 2025) — unused by ID, but PLoS is spent per the
  prompt's banned list and appears across 8 files in this batch.

---

## 6. Checkable error found

**Google result #2, `kelasonlinemrbob.com` ("Kelas Online Mr.BOB Kampung Inggris"), an
English-teaching business.**

1. **Ungrammatical English in a teaching example.** Item 4 of its list offers:
   *"I was having fun, but I realized something's missing you."*
   That parses as "something is missing **you**" — *something* becomes the one doing the
   missing — the opposite of the meaning the article's own gloss gives it ("ada yang kurang").
2. **The list breaks its own stated rule.** The page promises ten ways to say *kangen*
   "tanpa harus ngomong 'I miss you'", and item 3 explicitly says "tanpa kata *miss*" — yet
   item 7 is **"I miss your energy"**.

Weaker third observation: **three of the four publisher results** on the Indonesian SERP
(kelasonlinemrbob #2, Cosmopolitan #6, Englishvit #8) answer the Indonesian query with lists of
**English** phrases, reading *"tanpa bilang kangen"* as *"tanpa bilang I miss you"*.
That is a different question.

**Not claimed:** that englishvit.com's ranking URL 404s. The SERP only showed a truncated
display URL; the URL I probed was my own reconstruction, so the 404 is evidence about my guess.

---

## 7. Split from the siblings

| Post | Question it answers |
|---|---|
| `kangen-kamu-bahasa-inggris` | What is the **English equivalent**, and what does English flatten? |
| `kangen-kamu-bahasa-jawa` | How do you say it in **Javanese**, at the right **speech level**? |
| **this post** | How does **Indonesian itself** soften a message **without replacing the word *kangen*** — via pronoun register, particles and *basa-basi*? |

One sentence, as required: *the siblings change the language you say it in; this post keeps the
language and changes how much of it you say.*

Both are cross-linked in the closing section. No section, count or source is shared with either.

**Not translations of the English posts.** `say-i-miss-you-without-saying-it` treats the
phenomenon as measured nonverbal behaviour; `how-to-say-i-miss-you-without-sounding-desperate`
treats desperation as a measured construct. This post is lexical and Indonesian-specific:
its entire argument depends on a pronoun system and a particle inventory English does not have.

**The prompt is wrong that `/blog/say-i-miss-you-without-saying-it` is live.**
`content/keywords/strapi-live-articles.json` holds 905 live articles and **none of the 54 slugs**
in `content/batches/2026-09-25-miss-you-30` appears among them. The cross-link was **dropped**
rather than shipping a 404.

---

## 8. First-party facts and the collision

Taken: **1,434 hug taps** (45/71), **28.0% reunion date** (42/71), **13.6% voice note** (51/71).

Every less-collided line was already taken by the two Indonesian siblings
(2.6h @29, 88.8% @31, 86.4% @35, 92.1% @35, 2,417 views @36, 47 city pairs @36).
42 and 45 are the two lowest still available. All three are shared with
`say-i-miss-you-without-saying-it`. **Checklist item 34 is failed honestly.**

**Methodological note worth recording:** a first grep-based collision pass reported the 1,434
and 214 lines as *unused by anyone*. That was **wrong** — both contain double quotes, which are
backslash-escaped in the JSON source, so the literal substring never matches. The corrected
pass parses `batchMeta.factsUsed` from each file. Anyone repeating this count should parse, not grep.

Mandatory caveats, all in Indonesian body prose: n = 214 over two months; pickers-with-defaults;
`viewCount` is page views; **the database records which template was opened, never who received
it**; **nothing is segmented by language or country, so no figure here is Indonesian.**

---

## 9. Product disclosure

`/missyou-gf` is defined at `app/lib/prompt.ts:44` as an *"I miss you page for a girlfriend/partner"*.
Body prose discloses, in Indonesian: **(a)** the page and all its interface text are English with
no Indonesian version; **(b)** it is recipient-specific to a partner, so it misfires for a friend
or a parent; and **(c)** the genuine tension — the page exists to say it **directly**, while this
post is about not doing that. The post points the reader at `/catch` for a lighter signal and
names the case where the page is the wrong tool.

Price: no figure, no tier, no *gratis / cuma-cuma / tanpa biaya*. The refusal uses the siblings'
**"tanpa membayar"** phrasing. `pricecheck-intl.mjs` initially flagged a false positive on
**"harga"** inside the refusal sentence itself; rephrased to "informasi semacam itu" and the
script now passes clean.

---

## 10. Instruments that refused

| Instrument | Outcome |
|---|---|
| Google id-ID, 2nd run | HTTP 429 `/sorry/index`. Captcha **not** clicked. |
| `kbbi.web.id` | HTTP 503 on three consecutive rapid requests; all entries re-fetched with a 1.5–2 s pause. |
| `publications.usk.ac.id` | HTTP 468 to scripted UA **and** to the real isolated browser. Abstract via Crossref/OpenAlex. |
| `ejournal.upi.edu` | HTTP 403 Cloudflare. Not cited. |
| Tatoeba API `?page=2` | Returns HTML, not JSON. Only 10 of 19 *sih* sentences readable. |
| `en.wiktionary.org/wiki/sih`, `/nih` | Pages exist; no Indonesian section. |

**Wikidata QIDs:** two guessed QIDs were **wrong** and discarded — **Q1626846 resolves to
"Acebo", a municipality in Cáceres, Spain** (Tatoeba is Q495456), and Q12473617 resolves to
nothing (KBBI is Q4200623). Same class of error as the sibling's Cambodian-scarf "Krama".
Shipped QIDs, all API-verified: Q9240, Q184943, Q4200623, Q495456, Q281287.

---

## 11. Output

- `content/batches/2026-09-26-miss-you-global-30/blogs/cara-bilang-kangen-tanpa-bilang-kangen.json`
- Body **1,766 words** excluding FAQs (target ~1,750); **11 FAQs**; **6 sources**;
  audit **44 passed / 6 failed**, `passed ∩ failed = ∅`.
- Failed and why: **#24** (slug stop words, unavoidable), **#25** (Strapi offline),
  **#45** (no ItemList — the body deliberately does not rank), **#50** (schema file absent
  from this checkout), **#36** (batch-wide source cap, not verifiable mid-write),
  **#34** (first-party facts fail the swap test — the honest collision failure above).

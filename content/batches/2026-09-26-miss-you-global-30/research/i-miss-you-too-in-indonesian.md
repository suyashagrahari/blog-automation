# Research brief — `i-miss-you-too-in-indonesian`

- **Keyword:** `kangen kamu juga bahasa inggris`
- **Body language:** Indonesian · **Region:** `id-id` · **Category:** `miss-you-across-miles`
- **Lane:** A-reply. The reader has *received* "kangen kamu" and is answering it.
- **Written:** 2026-09-27

---

## Phase 1 — SERP, measured

`serp-ddg.mjs --region id-id`: run **once**, returned `(no results parsed — DDG markup
may have changed)`. Not retried, per BRIEF §3.

### Route 1 — Google, real browser, `gl=id&hl=id&pws=0&num=20`

**Self-authentication:** the scraped `#search` block contains my exact query string,
is entirely in Indonesian, and its AI Overview answers *"kangen kamu juga"*
specifically. Not another agent's page.

Google served **8 organic results** plus an AI Overview, a Google Translate card
(`kangen kamu juga` → `miss you too`), a Glosbe rich card and a TikTok video card.
I record only the 8 I actually saw.

| # | Host | Page type | Strong? |
|---|---|---|---|
| 1 | englishvit.com | "30 Cara Bilang Kangen selain I Miss You" — English-course listicle | weak |
| 2 | golden-course.com (Golden English) | "Ungkapan Rindu … Gaul Selain I Miss You" — course listicle | weak |
| 3 | youtube.com (Asaljeplak) | video, 8 yrs old | weak (UGC) |
| 4 | instagram.com (michelpurnamaa) | social post | weak (UGC) |
| 5 | kampunginggris.id | "25+ Cara Mengatakan I Miss You" — course listicle | weak |
| 6 | id.glosbe.com | translation-memory scrape | weak (aggregator) |
| 7 | tiktok.com (Boardicle) | video | weak (UGC) |
| 8 | kukchelanguages.com | "Bosen? Ini Cara Lain Bilang I Miss You" | weak |

**Weak count: 8 of the 8 I actually saw.** Zero national Indonesian editorial
(no Kompas, Detik, IDN Times, Liputan6, Merdeka) in Google's top 8.

### Route 2 — Bing `setlang=id&mkt=id-ID`: THROTTLE, not a finding

Returned *"Tidak ada hasil untuk kangen kamu juga bahasa inggris"*. Per BRIEF §3 I ran
a **control** (`kangen bahasa inggris`) on the same route — it also returned
*"Tidak ada hasil"*, with Indian sponsored ads (onlinemanipal.com, sumadhura-edition.com)
attached. So Bing is throttling this IP and `mkt=id-ID` is not overriding the browser's
real geo. **Nothing about my keyword is recorded from Bing.**

### Route 3 — Brave `country=id`, real browser

Authenticated: Indonesian results, my query in the URL and in the page. Top 10 in order:
golden-course.com, englishvit.com, **idntimes.com**, id.glosbe.com, englishnesia.id,
transferakademi.id, sunenglish.co.id, brainly.co.id, tiktok.com/discover,
roboguru.ruangguru.com. Below 10: merdeka.com, brainly.co.id ×2, liputan6.com,
englishcafe.co.id, kukchelanguages.com, jateng.idntimes.com,
s1pbing.fbs.unesa.ac.id, babla.co.id, transferakademi.id.

**Weak count: 9 of 10.** The single non-weak result is **IDN Times** at #3, a national
Indonesian digital magazine.

### THE TWO INDEXES DISAGREE — both reported, neither picked

Google `id` served **no national Indonesian editorial at all** in its top 8. Brave `id`
put **IDN Times at #3** and also surfaced Merdeka and Liputan6 further down. That is a
real divergence and it is recorded here rather than resolved in favour of whichever
reads better. Gate 4 passes on **both** readings (8-of-8 and 9-of-10 weak), so the
divergence does not change the decision — it changes how confident the incumbency
picture is, and the post does not assert one SERP as *the* SERP.

### Gate 4 — PASS

No strong Indonesian editorial with no weak result. The incumbents are English-course
blogs, a translation-memory scraper, UGC video and UGC Q&A. This matches the lane's
prior evidence: the two written Turkish reply rows measured forum/Q&A-held SERPs and
passed at 8-of-9 and 10-of-11 weak.

---

## Phase 2 — Gap

**Table stakes** every ranking page covers: the English string `I miss you`, a list of
"other ways to say it" (`long for`, `yearn for`, `can't stop thinking about you`),
and a casual/romantic register split *inside English*.

**The gap, measured rather than asserted:** across **19 distinct ranking results on two
indexes, not one discusses the word *juga*** — the word that is actually in the query.
- `englishvit.com` (Google #1): fetched in full. Its only occurrence of "juga" is in its
  own course advertisement ("kamu **juga** bisa bertemu teman-teman…").
- `idntimes.com` (Brave #3): fetched in full. Its only occurrence is a sentence
  connector ("**Juga**, ungkapan ini cocok buat kamu yang lama tidak bertemu").
- `id.glosbe.com` (Google #6 / Brave #4) is the **only** result that contains the exact
  reply. Its entry prints one example pair — *"Aku kangen kamu juga. ↔ I miss you, too."*
  — and never mentions that a second placement exists.

Every one of them answers the **send** lane. The keyword is a **reply**.

**Fan-out sub-queries** → H2s: where does *juga* go; is one placement wrong; does
*kangen* vs *rindu* survive into an answer; must the pronoun match; what is the short
one-word reply; what English cannot carry.

**Angle:** the only page on this SERP that actually resolves the *juga* placement
question, against KBBI plus two peer-reviewed Indonesian adverb studies plus a
199-sentence corpus count — and that reports the answer is "both are correct", not the
tidier answer.

---

## Phase 3 — Instruments, each fetched and the headword read

### KBBI — `kbbi.web.id` (official `kbbi.kemdikbud.go.id` refuses both routes)

**`/juga`** — headword read on the page, and confirmed byte-identical on the second
mirror `kbbi.co.id/arti-kata/juga`:

> **juga** ju·ga *adv* **1** selalu demikian halnya (**kadang-kadang untuk menekankan
> kata di depannya**): *berkali-kali dipanggil, tetapi ia tidak mau datang --;*
> **2** sama atau serupa halnya dengan yang lain atau yang tersebut dahulu:
> *ayahnya pandai, anaknya -- demikian*

Two things matter. Sense 1 states in the dictionary's own words that *juga* may
emphasise **the word in front of it** — and hedges it with *kadang-kadang*. Sense 2 is
the echo sense ("the same as … that mentioned earlier"), and its example places *juga*
straight after the constituent being paralleled.

**`/rindu`** — `rin·du` **a**, **no usage label**, two senses; derivatives *merindu* v,
*merindukan* v ("sangat menginginkan dan mengharapkan (hendak bertemu)"), *rinduan* n,
*perindu* n.

**`/aku`** — `aku` *pron* "yang berbicara atau yang menulis (**dalam ragam akrab**);
diri sendiri; saya". **`/saya`** (read, not cited) — *pron* "orang yang berbicara atau
menulis (**dalam ragam resmi atau biasa**); aku".

**`/kangen`** — read (`ka·ngen a cak` "ingin sekali bertemu; rindu") but **NOT cited**:
`kbbi.web.id/kangen` is already at the URL cap of 2 (`kangen-kamu-bahasa-inggris`,
`aku-rindu-kamu-bahasa-mandarin`). The post cross-links the sibling instead.

### Tatoeba `ind→eng`, query `juga` — every raw hit inspected

- **199 reported, 199 fetched, 199 of 199 survive a word-boundary token test (100%).**
  No tokenisation losses — unlike the Chinese sibling's 31-of-511.
- Position split: **148 non-final, 47 clause-final, 4 bare** (`Aku juga.` / `Kamu juga?`).
- **Attested minimal pair:** #10006717 *"Namaku juga Tom."* and #10006716 *"Namaku Tom
  juga."* — consecutive ids, both translated **"My name's Tom, too."**
- **Nearest structural template for the keyword:** #6044285 *"Aku cinta kamu juga."* →
  **"I love you, too."**
- Bare replies: #13814400 *"Aku lapar." "Aku juga."* → "So am I."; #4295804 *"Dia suka
  musik." "Aku juga."* → "So do I."; #12054882 *"Kamu juga?"* → "You too?".
- **Thinness, reported not hidden: zero of the 199 contain *kangen* or *rindu*.**
  `ind→eng` `kangen` returns 2 sentences total; `rindu` returns 26. The exact sentence
  the keyword asks about is **unattested** in this corpus. The `ind` set is small and
  that is a fact about the corpus, not about Indonesian.
- Register collapse in the reply direction: English #1308 *"I miss you."* carries four
  linked Indonesian sentences — #902834 *Aku kangen kamu.*, #902837 *Saya rindu Anda.*,
  #3493985 *Aku merindukanmu.*, #3807609 *Aku rindu kamu.*

### Peer-reviewed, open access, read in full

1. **Mujid Farihul Amin, "Ciri-ciri dan Jenis Adverbia Pewatas dalam Bahasa Indonesia",
   NUSA: Jurnal Ilmu Bahasa dan Sastra 13(2), May 2018, 213–222, Universitas
   Diponegoro. DOI 10.14710/nusa.13.2.213-222, CC-BY-SA.** Unpaywall `is_oa: true`.
   **Read IN FULL** — PDF downloaded (174 KB) and parsed with `pdftotext -layout`
   (2,469 words). The paper sorts verb-modifying adverbs by position into three classes:
   (a) always precede — *hampir, pernah, akan, harus* (`hampir menabrak`,
   \**menabrak hampir*); (b) always follow — *saja* (`menangis saja`, \**saja menangis*);
   (c) **may precede or follow — "seperti *juga*, *segera*, *selalu* dan
   *kadang-kadang*"**, with example (23) printing `juga membeli` / `membeli juga`
   side by side, neither starred. It also notes (examples 24–25) that these adverbs can
   stand alone as a **short answer to a question**.
2. **Raden Novitasari, "Contrastivity of 'mo' as an Affirmation Particle in Japanese and
   'juga' as Adverb in Indonesian", WIDAI Japanese Journal 1(2), 2021, 77–89,
   Universitas Widyatama. DOI 10.33197/widai.vol1.iss2.2021.675, CC-BY-SA.** Unpaywall
   `is_oa: true`. **Abstract, keywords, reference list and publication record read on
   the publisher's own page** in the real browser (a Cloudflare interstitial cleared by
   itself; nothing was clicked). The PDF endpoint returns 403 to a scripted fetch, so
   the full text was **not** read — recorded as a limitation. Its finding: *"'mo' is
   after the element it adds, while 'juga' is more flexible in position can be before
   or after the element it adds."*

Two independent peer-reviewed Indonesian sources therefore agree with each other and
with KBBI's own hedge.

### Verified and rejected

- **`PMC12842814` — "Understanding *Love* in the L1 and the Additional Language",
  Journal of Intelligence (MDPI), 2025.** Found, full text read via Europe PMC
  `fullTextXML` (153,688 chars), and it fits the reply angle well (n=66, A2 learners,
  significantly fewer love-related responses in L2 than L1, t = −8.866, p < 0.001).
  **Not cited: it is already in 3 posts in this batch** — `ich-vermisse-dich-auf-turkisch`,
  `skuchayu-po-tebe-na-angliyskom`, `saudade-em-ingles-como-se-diz` — breaching both the
  URL cap of 2 and the journal cap of 3. `capcheck.mjs` read clean throughout, exactly
  as BRIEF §7 warns.
- **`PMC8669216` — Journal of Social and Personal Relationships, "Long-distance
  texting".** Unpaywall `is_oa: true`, but the brief records it at the URL cap of 2.
  Not cited.
- **PLoS ONE "impact of emojis on perceived responsiveness"** (doi
  10.1371/journal.pone.0326189) — PLoS ONE is on the hard-ban list. Not cited.
- **Computers in Human Behavior, "Perceived responsiveness in text messaging"** —
  Unpaywall `is_oa: false`. Not cited.
- **Ranah: Jurnal Kajian Bahasa (Badan Bahasa), "Adverb in Indonesian", doi
  10.26499/rnh.v11i1.2454** — gold OA with a direct PDF, but
  `ojs.badanbahasa.kemdikbud.go.id` is unreachable from both the sandbox
  (`TypeError: fetch failed`) and the real browser (`timeout_but_loaded`, no frame data).
  DOAJ's API returns 0 results for the DOI. Not cited.

### Journals named for the hand cap count

**NUSA: Jurnal Ilmu Bahasa dan Sastra** (1st use in this batch) and **WIDAI Japanese
Journal** (1st use in this batch). Neither appears in `2026-09-25-miss-you-30` or in
this batch. `ejournal.undip.ac.id` appears once in `2026-08-27-birthday-30`, a different
batch, so its count here is 0.

---

## The checkable error in a ranking result

`roboguru.ruangguru.com/question/apa-bahasa-inggrisnya-aku-rindu-kamu-_QU-NOERCU96` —
Brave #10, and surfaced by Brave as an answer card. Read **on the page itself in the
real browser** (the body is client-rendered and a scripted fetch returns no answer
text). It is badged **"Jawaban terverifikasi"** and attributed to a **"Master Teacher"**,
and reads verbatim:

> Bahasa inggris dari kata: / Aku adalah I / Rindu adalah miss / Kamu adalah you /
> Sehingga aku rindu kamu dalam bahasa inggris adalah I miss you. / Jadi, jawaban nya
> I miss you.

The output is right; the method is checkably wrong. KBBI's headword `rindu` is tagged
**`a`** — adjektiva — while English *miss* is a verb. KBBI's own verb for the sense is
**`merindukan`** (v). Mapping an Indonesian adjective onto an English verb word-for-word
is the reason *aku rindu kamu* contains no verb at all while *aku merindukanmu* does.
And the method has no column for the word in my keyword: *juga* has no fixed slot, and
where it lands changes what is being echoed.

Also noted, but **not** used because the sibling `kangen-kamu-bahasa-inggris` already
refuted it with its own Tatoeba count: `englishvit.com` (Google #1) claims *I long for
you* and *I yearn for you* have "arti sama" with *I miss you*.

---

## Split from the four siblings

| Sibling | Its question | Mine |
|---|---|---|
| `kangen-kamu-bahasa-inggris` | how to **send** *kangen* in English; KBBI's `cak` label; English flattens the **pronoun** system | how to **answer** one; where *juga* goes |
| `kangen-kamu-bahasa-jawa` | ngoko / krama / krama inggil; no distinct krama verb for *kangen* | no speech-level ladder — the variable is adverb position |
| `cara-bilang-kangen-tanpa-bilang-kangen` | particles as softeners; only *dong* softens | *juga* is not a softener; it is an additive adverb that marks an echo |
| `aku-rindu-kamu-bahasa-mandarin` | the *kangen/rindu* split does not survive into Chinese | it does not survive into English either — and neither does the *juga* placement |

---

## Verdicts asked for in the prompt

**1. Does *juga* placement change what is echoed? REAL BUT SOFT — the framing is
partly overturned.** Both *aku juga kangen kamu* and *aku kangen kamu juga* are
grammatical and ordinary. Amin (2018) puts *juga* in the class of adverbs that may
precede **or** follow what they modify, printing `juga membeli` / `membeli juga`
unstarred; Novitasari (2021) says the same contrastively against Japanese *mo*. KBBI
does give a focus cue — sense 1's *"kadang-kadang untuk menekankan kata di depannya"* —
but hedges it with *kadang-kadang*, and Tatoeba's minimal pair #10006717 / #10006716
carries the identical English. So: a tendency about **what *juga* attaches to**, not a
rule, and English collapses it either way. The prompt's "if the difference is real,
that is the post" needed the honest second half — the difference is real *and* not
categorical, and that is the more useful thing to tell a reader.

**2. Does the *kangen*/*rindu* register split matter in a reply? It matters in
Indonesian and is unanswerable in English.** KBBI marks *kangen* `cak` and leaves
*rindu* unlabelled, so answering formal *rindu* with colloquial *kangen* does shift
register mid-exchange. But the keyword asks for English, and English has exactly one
string — Tatoeba links four different Indonesian sentences, across both words and both
politeness levels, to the single English sentence #1308 *"I miss you."* So the honest
answer is: you cannot match their register in English; you can only match their
**pronoun**, and that is the thing actually worth matching (KBBI: *aku* = *ragam akrab*,
*saya* = *ragam resmi atau biasa*).

**3. Template.** `/missyou-gf` is checked at `app/lib/prompt.ts:44` — *"'I miss you'
page for a girlfriend/partner"*, English labels, recipient-specific — and
`verify.config.json`'s own `_why` makes it mandatory because every row here is a
miss-you keyword, naming `/streak` as a long-distance alternative. Kept, not swapped.
`/streak` is the one template in `TEMPLATE_LINKS` that is structurally **two-sided**
("two people, one tap a day"), which is what a reply is, so it is the genuine
alternative and the post says why. The tension is named in the body: a reply is a
message, a page is a much larger gesture, and 1.35 pages per registered creator says
page-building is not a per-message habit.

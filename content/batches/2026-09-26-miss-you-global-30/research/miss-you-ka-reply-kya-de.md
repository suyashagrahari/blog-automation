# Research brief — `miss you ka reply kya de`

- Batch: `2026-09-26-miss-you-global-30` · wave 3 · row tier `A-reply`
- Region `in-en` · bodyLanguage **English** (Hinglish query, Indian reader)
- Category `miss-you-across-miles` · templates `/missyou-gf`, `/streak`, `/templates`
- Verdict: **PROCEED**
- Written 2026-09-27

---

## 0. Framing claims in the task prompt — checked

| Prompt claim | Check | Result |
|---|---|---|
| `what-to-reply-when-someone-says-i-miss-you` is LIVE | Strapi production API, `filters[slug][$eq]`, via `ctx_execute` | **TRUE.** `total: 1`. **My own first check was wrong**: `content/keywords/strapi-live-articles.json` (905 rows) does **not** contain it, or `how-to-say-i-miss-you-without-sounding-desperate`, or `miss-you-yaar-meaning-in-hindi`. That snapshot is **stale** — it predates the `2026-09-25-miss-you-30` batch publishing. Anyone deduping against the 905-row file in a later wave will get a false negative on 54 posts. |
| `how-to-say-i-miss-you-without-sounding-desperate` live | Strapi | TRUE, `total: 1` |
| `miss-you-yaar-meaning-in-hindi` on disk | `content/batches/2026-09-25-miss-you-30/blogs/` | TRUE, and also live (`total: 1`) |
| slug `miss-you-ka-reply-kya-de` free | Strapi | TRUE, `total: 0` |
| DSAL query script resolves | fetched 5 Platts queries | **TRUE.** `dsal.uchicago.edu/cgi-bin/app/platts_query.py?qs=<translit>&searchhws=yes` returns HTML carrying the headword. Verified the headword on every entry before citing. |
| `/missyou-gf` is partner-specific | `app/lib/prompt.ts:44` | TRUE — `"'I miss you' page for a girlfriend/partner"`. Disclosed in body prose. |
| `serp-ddg.mjs` intermittent | one call | Failed. Echoed `query: miss you ka reply kya de` (argument order correct), then `(no results parsed)`. Switched routes immediately, no retry. |

## 1. Cannibalisation check — the real gate on this row

`content/keywords/2026-09-25-miss-you-global/site-baseline.md`: **81 live articles carry
`miss` in the slug.** Enumerated all 81 from the live corpus. Relevant neighbours, all read:

| Live page | What it owns | Overlap with this row |
|---|---|---|
| `what-to-reply-when-someone-says-i-miss-you` | **Read in full (1,758 words).** Sorts replies by the *recipient's situation*: miss them too / don't feel the same / can't tell / group chat / timing / from a guy. Zero Devanagari, zero Hindi, zero register discussion. | **None on substance.** It answers *what do I feel and what do I send*. This row answers *what language and which register do I type it in*. |
| `miss-you-yaar-meaning-in-hindi` | **Read in full.** Defines यार (Platts p. 1247, Persian loan, vocative), the *yād ānā* grammatical-subject argument, the register of यार specifically. | Shares the Platts *yād* page. Deliberately does **not** re-derive it — this post cites `yād karnā`, a different compound on the same page, and cross-links the sibling rather than restating its grammar essay. |
| `how-to-say-i-miss-you-in-hindi` | Sending, not replying. Casual registers. | Different intent. Cross-linked. |
| `miss-you-message-for-love-in-hindi` | Romantic Hindi lines, 7,552 words. | A message bank, not a reply decision. |

**Split, in one sentence:** the live English reply post sorts by how you feel about the
person; this one sorts by the grammar and register of the Hindi reply you are about to
type, which it never touches.

Sibling in this wave: `miss-you-a-lot-meaning-in-hindi` (B-intensifier, `in-en`) — a
meaning question, not a reply question. No collision.

## 2. SERP — measured, four instruments, all labelled

### 2a. `serp-ddg.mjs` — one call, failed
`node scripts/serp-ddg.mjs "miss you ka reply kya de" --region in-en` →
`engine: ddg-html   region: in-en   query: miss you ka reply kya de` / `(no results
parsed)`. The query echoed back correctly, so this is the tool, not the argument order.
No retry, per BRIEF §3.

### 2b. Google, real browser, `gl=in&hl=en&pws=0&num=20`, 2026-09-27
Self-authenticated on content: the returned DOM contains my query string *and* Hindi
People-Also-Ask entries (`"Missing you" का अंग्रेजी में जवाब क्या दें?`). Nine results
actually seen and recorded; ranks past that were never read, so they are not reported.

| # | Host | Page type | Weak? |
|---|---|---|---|
| 1 | youtube.com (`D08oMv0EtKY`, "Yellow Words", 213K views, 10 Dec 2023) | Video, 0:45 | Weak — not a text competitor |
| 2 | hi.wikihow.com | Machine-translated wikiHow, 15 methods, 54,004 views | The only established domain — **and it carries a dictionary-checkable error, §4** |
| 3 | quora.com | Q&A thread for **"We miss you"** — a different query | Weak |
| 4 | preply.com | English-learner Q&A blog | Weak |
| 5 | youtube.com (`xjWOEi4o4u8`, 21K views) | Video | Weak |
| 6 | reddit.com r/socialskills, served as `?tl=hi-latn` | Forum thread behind Google's Hindi-Latin MT layer | Weak |
| 7 | youtube.com (50+ views) | Video | Weak |
| 8 | lovetoknow.com | US English listicle, "32 Genuine Ways…" | Weak |
| 9 | youtube.com (690+ views) | Video | Weak |

**Weak count: 8 of the 9 I actually saw.** A confirmation re-run timed out three times on
the shared tab (contention). Reported as a failure rather than padded.

### 2c. Bing, real browser, `mkt=en-IN` — instrument failure, not a finding
Returned ten results for the **English honorific "Miss"** — Scribbr, Merriam-Webster,
Miss World, Wikipedia. Bing did not resolve the Hinglish long-tail at all. Ten results,
not a zero, so this is not the throttle pattern BRIEF §3 warns about; it is a
query-parsing failure. Recorded, not used.

### 2d. Brave, real browser, `country=in` — the decisive measurement
~20 results, self-authenticated on Hindi/Hinglish content. Composition:

- **8 `translate.google.com` proxy URLs** wrapping English pages — quora ×3, lovetoknow,
  yahoo.com/lifestyle, smartresponces.com, pushtolearn.com, practicalpie.com
- hi.wikihow ×2 (machine-translated)
- reddit ×4, three behind `?tl=hi` / `?tl=hi-latn` MT layers, one (`r/TanongLang`)
  **Filipino and entirely off-topic**
- youtube ×5
- mymemory.translated.net — a translation-memory scraper page
- **2 natively-written Indian blogs, and both are dead — §4**

**Not one page on either SERP is an English-language editorial answer written for an
Indian reader.** Gate 4: pass, comfortably. The lane is unowned.

## 3. Gap analysis

**Table stakes:** a list of replies; the case where you do not feel the same; a
partner/friend distinction.

**The gap, measured rather than predicted:** no ranking page chooses a Hindi *register*
for the reader, and none distinguishes `याद आना` from `याद करना`. The SERP is English
content pushed through machine translation. The reader's actual problem — the message
arrived in English, which commits to nothing, and Hindi will not let you answer without
choosing between तू, तुम and आप — is untouched by all of it.

**Fan-out sub-queries → H2s:** what do I type back · is "main bhi" correct · मैं भी vs
मुझे भी · where does *bhi* go · तू/तुम/आप · is हम भी wrong · is replying in English cold ·
does the reply change with who sent it.

**Angle:** wins by being the only page that fixes the register and the construction of the
Hindi reply for each sender, and catches a dictionary-checkable error in the #2 result,
grounded in 1,434 recipient hug taps across 214 real miss-you pages.

## 4. Checkable errors found in ranking results — three

**(a) hi.wikiHow, Google #2 — the `याद करना` calque.** The page's Method 1 of 15, its
headline reply, is `"क्या बात है! मैं भी तुम्हें याद करता हूँ!"`, glossed **by the page
itself** as *"What a coincidence! I miss you, too!"*. Method 14 is
`"मैं कुछ समय से आपको याद कर रहा था"`. Both are built on **याद करना**.

- Wiktionary, Hindi याद करना: **"to remember, to recall"** only, with the example
  `याद करने की कोशिश कीजिए।` — "Please try to remember." **No 'miss' sense.**
- Platts p. 1247, *yād karnā*: "To think of, to remember, recollect, call to mind; — to
  commit to memory; — **to send for, to require the presence of (a subordinate)**."
- The 'miss' sense lives on **याद आना**: Wiktionary sense 2 is "**to miss, long for**",
  example `तुम्हारी बहुत याद आ रही है।` — "**I miss you a lot.**"

Raw counts on that page: `याद कर` 13 occurrences, `याद आ` **3**.

**(b) `theindianposts.co.in` (Brave, in) — NXDOMAIN.** Two DNS lookups and two HTTP
attempts on 2026-09-27: `ENOTFOUND`. The domain does not resolve.

**(c) `hindimeg.net/i-miss-you-ka-reply-kya-hoga/` (Brave, in) — hijacked.** HTTP 200,
2,882 characters, `<title>HWGSLOT Dengan Angka Togel Resmi…</title>`, headings
*Deskripsi Produk / Spesifikasi Produk / Rekomendasi Untukmu*. It is now an **Indonesian
online-gambling storefront**. `याद` 0, `मैं भी` 0, `मुझे भी` 0. The Hindi article is gone
and the index entry is a ghost.

Both natively-written Hindi pages Brave ranks for this query are therefore dead.

## 5. Instruments — each fetched, headword read before citing

| Instrument | Entry | What it licensed |
|---|---|---|
| Platts, DSAL | `yād` p. 1247 | *yād* s.f. "Remembrance, recollection; memory"; *yād ānā* "To come to recollection or mind; to recur to memory"; *yād karnā* "To think of, to remember, recollect, call to mind; to commit to memory; to send for…" |
| Platts, DSAL | `bhī` p. 198 | conj. "Also, too, even, and, with; yet, still, besides, likewise, moreover, furthermore; — soever" |
| Platts, DSAL | `tū` p. 341 | "pers. pron. Thou (used to imply depreciation or contempt; or by way of familiarity, or endearment; or, in addressing the Deity, to imply extreme reverence)"; *tū-karnā* "to address rudely or disrespectfully" |
| Platts, DSAL | `tum` p. 336 | "pers. pron., 2nd pers. pl., You" |
| Platts, DSAL | `āp` p. 7 | "**pron. rever.** You, Sir, your honour, your worship" |
| Wiktionary | याद आना | "to remember, to recall"; "**to miss, long for**"; ex. तुम्हारी बहुत याद आ रही है = "I miss you a lot" |
| Wiktionary | याद करना | "to remember, to recall" **only** |
| Wiktionary | भी | Particle "even"; Adverb "also, too", ex. **तुम भी जाओगी?** = "Will **you too** go?" — the particle follows the constituent it scopes over |
| Wiktionary | तू | "informal, grammatically singular"; usage note: in the Hindi–Urdu Belt "तू chiefly used insultingly… generally the most common pronoun used in abusive or vulgar contexts"; in Maharashtra "normally used inoffensively by adults for children, as well as among social equals such as siblings, friends, and spouses" |
| Wiktionary | तुम | "mid-level formality and grammatically plural"; "आप is the safest way to express 'you' unless there is reason to be less formal" |
| Wiktionary | आप | "formal, polite and grammatically plural"; "used when addressing elders or those higher in social status" |
| Wiktionary | हम | sense 1 "we"; sense 2 "**(Varanasi, Awadh, colloquial in Standard Hindi) I**"; note: "Most Eastern Hindi dialects only use हम as 'I'" |
| Tatoeba | #2060321, #2060322 | The **only two** Hindi sentences in the corpus matching `याद आ रही`: `मुझें तुम्हारी याद आ रही है।` and `मुझें आपकी याद आ रही है।` — **both translated "I miss you."** One English sentence, two registers. (The corpus spells the dative `मुझें`; the standard form is `मुझे`.) |

## 6. Papers — both open access, both read in FULL TEXT via `pdftotext`

1. **Cowie, Murty & Sinar (2024), "Decoding Bollywood: why Hindi–English code-switching
   and standard English outrank Indian English."** *English Language and Linguistics*
   **28(4): 683–708**, Cambridge University Press, CC-BY, doi 10.1017/S1360674324000534.
   Unpaywall `is_oa: true`, `oa_status: hybrid`. PDF fetched from cambridge.org (379 KB)
   and parsed with `/usr/local/bin/pdftotext -layout` → **11,840 words**. The Edinburgh
   repository copy **403s**; the publisher PDF does not.
   - Read: Hindi-matrix clauses with English insertions are the commonest clause type in
     Bollywood; English "has encroached little into the films themselves, although there
     are key stock phrases, **such as saying *I love you***" (Dwyer 2014: 27, quoted);
     English is "strongly associated with… Western signifiers of romance on the one hand,
     and distanced elitism on the other" (of anglicised-minority characters, citing
     Kothari 2011: 116).
   - Corpus example (1), from *Dear Zindagi* (2016): `hum easy option bhī choose kar sakte
     hɛ̃ nā` → "we can **also** choose an easy option" — an attested
     *bhī*-after-the-object placement.
   - **Method limitation, in the authors' words:** "an exploratory and qualitative study,
     rather than compile a film corpus." Sample: 25 Bollywood films 1990–2014, 9 more
     2014–2024, 12 English-only independent films/series, 6 anglicised-minority films.
   - **Honest negative:** the strings *emotion*, *affect* and *intimac* occur **0 times**
     in the full text. It does not measure warmth or coldness, and the post does not claim
     it does.

2. **Klingler, Anita (2017), "Changes in Code-Switching Patterns among Hindi-English
   Bilinguals in Northern India."** *Lifespans and Styles* **3(1): 40–50**, University of
   Edinburgh, CC-BY, doi 10.2218/ls.v3i1.2017.1827. Unpaywall `is_oa: true`, gold. PDF
   (437 KB) via the OJS galley `article/download/1827/pdf_17`; parsed → **7,077 words**.
   - Six female native Hindi speakers, Dehradun (Uttarakhand), July 2012; **2 h 07 min** of
     naturalistic recorded conversation. Older group aged 63, 61, 54; younger 24, 35, 30;
     all upper-middle-class. N (Young) = **1,828** clauses; N (Old) = **2,020**.
   - Younger speakers use more English overall and **alternate between fully Hindi and
     fully English clauses**; older speakers **insert English items into Hindi clauses**.
   - Those insertions are overwhelmingly nouns or noun phrases: **69% and 71%** in two
     older conversations, **74%, 51% and 76%** in the three younger ones.
   - **Limitations recorded:** six speakers, all female (not intentional — the author
     invokes Labov 2001: 291 on women leading linguistic change), one city, one class, 2012.

**Honest negative, recorded in the post itself:** I looked for a study measuring whether
an English reply reads colder to a Hindi–English bilingual, and found none that is both
topical and open-access. Terms tried: `Hindi English code-switching emotional expression`,
`emotional resonance first language second language bilingual`, `language choice emotion
expression bilingual couples`, `politeness address pronoun choice Hindi honorific`,
`Hindi English code mixing`. The one directly relevant politeness paper —
"Conventionalized Politeness Structures: Empirical Evidence from Hindi/Urdu",
*Journal of Politeness Research*, 2017, doi 10.1515/pr-2015-0001 — is **closed**
(Unpaywall `is_oa: false`). So the register ladder here rests on **dictionary labels**, not
on a study of who Hindi speakers actually address as तू. The post says so.

**Cap position at write time:** `capcheck.mjs` clean. `doi.org` is at cap 3 and no
`doi.org` URL is used. Journals named: *English Language and Linguistics* (0 prior posts in
this batch), *Lifespans and Styles* (0). Neither is *Frontiers in Psychology*, *PLoS ONE*,
*Scientific Reports*, *BMC Psychology* or *PNAS*. No banned PMCID is used — neither paper
is in PMC at all. `dsal.uchicago.edu`, `en.wiktionary.org` and `tatoeba.org` are
cap-exempt instruments per `verify.config.json`.

## 7. Lines cut, and why

| Cut | Why |
|---|---|
| "Replying in English reads as cold", asserted | No open-access study measures it. Replaced with what Klingler and Cowie et al. actually found, plus the recorded negative. |
| "मैं भी is wrong" | It is not. It is a well-formed elliptical reply **to an English sentence**; it simply cannot be expanded into the Hindi construction, which has no first-person subject. Stated as a consequence, not a verdict. |
| "हम भी is a mistake" | Wiktionary licenses हम = "I" for Varanasi, Awadh and Eastern Hindi. Recast as regional, not wrong. |
| A 250-million Hinglish-speaker figure (HiACC, *Data in Brief*) | Already carried by the `miss-you-yaar-meaning-in-hindi` sibling. Not repeated. |
| The Frontiers translanguaging paper the sibling used | *Frontiers in Psychology* is hard-banned in this batch at 5 posts. |
| Any claim about which register Indians actually use in practice | Dictionary labels are not usage data. Said so in the body. |
| Bing's ten "Miss World" results as a SERP finding | Instrument failure, not a property of the keyword. |
| Google ranks 10 and beyond | The confirmation load timed out. Not invented. |

## 8. Product disclosure

`/missyou-gf` is `"'I miss you' page for a girlfriend/partner"` (`app/lib/prompt.ts:44`) —
**recipient-specific, and wrong for three of the four senders this post sorts by** (a
friend, a sibling, a parent). Stated in body prose, not only here. `/streak` is the genuine
alternative from `oneOfLinks`: two people, one tap a day — and **a tap has no register**,
so the exact problem this post is about disappears. That is the reason it suits a reader
stuck between तू, तुम and आप. The honest tension is named in the body too: **a reply is a
different job from building a page.** Nobody answers "miss you" by sending a link.

Price guard: no price, no tier, no "free". `pricecheck-intl.mjs` run before save.

## 9. First-party facts and their mandatory caveats

Used: 1,434 hug taps across 138 of 214 pages (64.5%); median 2.6 h between first save and
last edit (n=214); median letter 88 words, longest 1,024; 214 pages = 4.1% of 5,221 across
44 collections. All byte-verbatim from `facts-snapshot.md`.

Caveats carried in body prose: the city, background-music and "together since" fields are
pickers with defaults and are not sender choices; `viewCount` is page views, not unique
visitors; n = 214 over two months since 2026-07-28, so no seasonal claim survives;
**the database records which TEMPLATE was opened, never who received it, and nothing in it
is segmented by language or country** — so no figure here is a Hindi-speaker figure. The
two edit-gap lines are **not** conflated: the miss-you figure is 2.6 h at n=214, the
platform-wide figure is 2.5 h sampled on `/apology-dashboard` at n=1,396, and only the
first is used.

Differentiation is thin: the six miss-you lines carry 48–63 sibling posts each, and the
hug-tap line is also the lead fact of the live English reply post. Recorded as an audit
failure rather than hidden.

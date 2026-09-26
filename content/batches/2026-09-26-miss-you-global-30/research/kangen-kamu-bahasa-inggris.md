# Research brief — `kangen-kamu-bahasa-inggris`

- **Keyword:** kangen kamu bahasa inggris
- **Region:** id-id · **Body language:** Indonesian · **Tier:** A-translate
- **Measured:** 2026-09-26
- **Verdict:** Gate 4 **PROCEED** (9 of 10 weak). Blog JSON emitted.

---

## 1. SERP — route, because serp-ddg.mjs and serp.mjs were down

`WAVE1-PLAN.json` `knownIssues` records `serp-ddg.mjs` connect-timing-out and
`serp.mjs` (Brave) returning 429 on 2026-09-26. I did not use either.

**Route used: live Google Indonesia in the user's real browser (PolterTab).**

```
google.com/search?q=kangen+kamu+bahasa+inggris&gl=id&hl=id&num=20&pws=0&gws_rd=cr
google.com/search?q=kangen+kamu+bahasa+inggris&gl=id&hl=id&num=10&pws=0
```

Two runs, agreeing. The page served is genuinely in-market: Indonesian UI
("Penelusuran Google", "Orang lain juga menelusuri"), Indonesian results throughout,
and an AI Mode block ("Mode AI membalas:") above the organic results.

| # | Domain | Page type | Weak? |
|---|---|---|---|
| 1 | englishvit.com | English-course blog listicle ("30 Cara Bilang Kangen selain I Miss You") | yes |
| 2 | id.glosbe.com | dictionary scraper | yes |
| 3 | kampunginggris.id | English-course blog listicle | yes |
| 4 | instagram.com (twenglish.id) | social post | yes |
| 5 | golden-course.com | English-course blog listicle | yes |
| 6 | **liputan6.com** | national news portal, `/feeds/` programmatic explainer, hero image credited "©Ilustrasi dibuat AI" | **no** |
| 7 | instagram.com (michelpurnamaa) | social post | yes |
| 8 | englishnesia.id | English-course blog listicle | yes |
| 9 | youtube.com (Asaljeplak) | video, 8 years old | yes |
| 10 | tiktok.com (Boardicle) | short video | yes |

**Weak count: 9 of 10.**

**Gate 4: PROCEED.** The incumbent wall the prompt warned about — CNN Indonesia,
Kumparan, Liputan6, Merdeka, Sonora, Halodoc — appears exactly **once**, at position 6,
and it is a programmatic `/feeds/` page with an AI-generated hero image rather than a
desk-written article. This is not the Brazilian `mensagem de saudade` SERP; it is
English-course content marketing plus social video. The inventory's weakness score for
this row was not consulted, per the batch's own finding that those scores are
US-served artefacts.

**Fan-out queries Google itself returned** ("Orang lain juga menelusuri"): Bahasa
Inggris kangen berat · Ungkapan rindu dalam Bahasa Inggris gaul · Bahasa Inggris kangen
selain miss · Kangen kalian Bahasa Inggris · Bahasa Inggris kangen dia · Bahasa Inggris
rindu momen ini · Menahan rindu bahasa Inggrisnya · Kata-kata rindu dalam Bahasa Inggris.

---

## 2. Gap analysis

**Table stakes** (all five top pages): the answer is *miss*; a list of alternative
phrasings; Indonesian glosses beside each.

**The gap, and it is a large one: not one of the ten results cites KBBI.**
Verified programmatically on the three fetchable pages (`/KBBI|Kamus Besar/i` → false on
englishvit, golden-course and liputan6; `\bcak\b` → false on all three). Every page
treats *kangen* and *rindu* as interchangeable. None mentions the register label, the
Javanese origin, the pronoun system, or any preposition question.

**Angle:** the only page that opens the national dictionary, quotes its usage label,
and backs it with a corpus count.

---

## 3. The instruments — what resolved and what refused

### KBBI: the official site REFUSED BOTH ROUTES

`kbbi.kemdikbud.go.id` failed on 2026-09-26 in two independent ways:

1. **Real browser (PolterTab):** navigations to `/entri/kangen`, `/entri/rindu` and `/`
   all returned `timeout_but_loaded` with the tab title stuck at the bare hostname, and
   no content script could attach ("Could not establish connection").
2. **Scripted fetch:** `fetch failed` at the connection layer — **not a 403, not an
   HTTP timeout**. The host did not answer.

**Mirrors used, and named in the body:**

| Mirror | Status | Role |
|---|---|---|
| `kbbi.web.id/kangen`, `/rindu` | 200 | cited in the post |
| `kbbi.co.id/arti-kata/kangen`, `/rindu` | 200 | cross-check + symbol legend |

The two agree **byte-for-byte** on both entry texts, down to the middle dots. That
agreement is why I was willing to print the entries at all.

### The `cak` label — the load-bearing finding, CONFIRMED

> `ka·ngen  a  cak  ingin sekali bertemu; rindu: ia -- kepada suaminya;`
> `me·nga·ngeni v kangen akan; kangen kepada; ka·ngen-ka·ngen·an v melepas rindu`

And kbbi.co.id's own symbol legend, verbatim:

> **`cak` Bentuk kata percakapan (tidak baku)`**

*rindu*, by contrast, carries **no usage label at all**:

> `rin·du  a  1 sangat ingin dan berharap benar terhadap sesuatu: ia -- akan kemerdekaan;`
> `2 memiliki keinginan yang kuat untuk bertemu (hendak pulang ke kampung halaman): ia -- benar kepada anak-istrinya;`
> `-- jadi batasnya maka manis tak jadi cuka, pb …`
> `me·rin·du v 1 menjadi rindu; 2 bernyanyi karena rindu;`
> `me·rin·du·kan v 1 sangat menginginkan dan mengharapkan (hendak bertemu) …;`
> `rin·du·an n; pe·rin·du n; ke·rin·du·an n perihal rindu`

**Three asymmetries beyond the label**, all readable off the entries:

1. KBBI defines *kangen* **by means of** *rindu*, not the reverse. *Rindu* is the parent.
2. *rindu* has **two** senses, *kangen* **one**. Sense 1 of *rindu* takes an abstract
   object ("rindu akan kemerdekaan") — a slot *kangen* cannot fill.
3. **Morphological productivity:** *rindu* has five derivatives in KBBI, *kangen* two.
   The standard word is productive; the colloquial Javanese borrowing is not.

### Etymology — verified, not assumed

`en.wiktionary.org/wiki/kangen`: Indonesian *kangen* "From Javanese ꦏꦔꦼꦤ꧀ (kangen)",
cognate with Balinese *kangen* "Borrowed from Old Javanese kāṅĕn", labelled
**(colloquial)**, synonym *rindu*, further reading → KBBI. The Javanese-borrowing claim
in the prompt is **correct**.

*(Aside worth noting: Wiktionary's Indonesian gloss — "desirous, feeling desire; eagerly
wishing; eager to obtain" — is word-for-word its Balinese gloss and omits the
**bertemu** ('to meet') element that KBBI makes central. KBBI is the better authority
here and is what the post quotes.)*

### ISO codes — checked at source, not taken from the brief

`iso639-3.sil.org/code/ind` → Indonesian, Active, 639-1 `id`.
`iso639-3.sil.org/code/jav` → Javanese, Active, 639-1 `jv`. Both matched the prompt.

### webonary.org — not attempted
BRIEF §4 records it as 403 Cloudflare, confirmed independently by two rows.

---

## 4. The corpus count

**Method:** Tatoeba `api_v0` search, `from=ind&to=eng`, paginated to exhaustion,
2026-09-26. English verbs tallied programmatically over every returned translation.

| Query | Sentences | → *miss* | → *homesick* | → other | → *long for* / *yearn* |
|---|---|---|---|---|---|
| *kangen* | **2** | 2 | 0 | 0 | **0** |
| *rindu* (+ derivatives) | **26** | 23 | 2 | 1 (*dying to see*) | **0** |
| **Total** | **28** | **25** | 2 | 1 | **0** |

Separately, in Tatoeba's **English** corpus: `"I yearn for you"` → **0 sentences**.
`"I long for you"` → 5. `"crave for"` → 18.

**The 2-vs-26 ratio is itself evidence.** Tatoeba is built from contributed, translated
written sentences — a register skewed to the standard — and the `cak`-labelled word
barely appears in it. The dictionary label and the corpus point the same way.

**Attested pairs that carry the post's central claim:**

```
"Aku kangen kamu."   → "I miss you."
"Saya rindu Anda."   → "I miss you."
```

Two socially different Indonesian sentences; one identical English string.

Other attested forms: `Aku merindukanmu` (me-…-kan absorbs the object — the dominant
written pattern), `Aku rindu dia`, `Aku rindu Paris`, `Aku sangat rindu **padamu**!` →
"How I've missed you!", `Tom mungkin akan rindu rumah` → "Tom may get homesick",
and the single *kangen sama* sentence: `Kita semua bakal **kangen sama lu** ketika lu
pergi` — where *bakal*, *lu* and *sama* all arrive together. Register travels as a
bundle. KBBI's own example uses *kepada*: "ia kangen **kepada** suaminya".

---

## 5. Claims tested and CUT

1. **CUT — "English flattens the kangen/rindu distinction."** The prompt's framing, and
   it does not survive. Indonesian splits by **register**; English splits the same space
   by **object type** (*miss* a person or place, *long for* an abstraction — KBBI's own
   *rindu* sense 1 is "rindu akan kemerdekaan"). The post prints the corrected claim:
   what English flattens is the **pronoun system** — *aku / saya / kamu / Anda / kau /
   lu* all become **you**.
2. **CUT — "I crave for you" (item 5 on the #1 page) is ungrammatical.** My own
   hypothesis. Wiktionary marks English *crave* **ambitransitive** and gives
   "to crave for peace" as its own example; Tatoeba has 18 English sentences with
   "crave for". Wrong, dropped, and the body says so.
3. **CUT — *rindu* is the "formal" word English renders as "I long for you".** In
   English "I long for you" is *more* intimate and intense, not more formal.
4. **CUT — webonary.org.** Recorded 403 by two prior rows; not attempted.

---

## 6. The checkable error in a ranking result

**#1, englishvit.com** (`/artikel/30-cara-bilang-kangen-selain-i-miss-you-dalam-bahasa-inggris-2789`),
published by an English-course company that also sells IELTS preparation:

> "Bahasa Inggrisnya rindu atau kangen adalah miss."

and then:

> "Terdapat dua kalimat yang punya arti sama dengan 'I miss you', yaitu:
> a. I long for you. b. I yearn for you."

Checkable two ways: **KBBI** marks *kangen* `cak` and leaves *rindu* unlabelled with two
senses, so they are not one word with one equivalent; and **Tatoeba** returns
**0 sentences** for "I yearn for you" across its whole English corpus and 5 for
"I long for you", against hundreds for "I miss you". Calling them "arti sama" equates
things that are not remotely equal in attestation.

Plus the structural one: **none of the ten measured results cites KBBI.**

---

## 7. Sources (6)

| # | Source | Subject test | Peer-reviewed / OA |
|---|---|---|---|
| 1 | `kbbi.web.id/kangen` — the `cak` label (mirror; official site refused) | ✅ the language | instrument |
| 2 | `tatoeba.org` — the 28-sentence count | ✅ the language | instrument |
| 3 | `en.wiktionary.org/wiki/kangen` — Javanese borrowing, colloquial label | ✅ the language | instrument |
| 4 | **PNAS** 2026-08-31, PMC13552847 — affect labeling down-regulates amygdala only in the dominant native language, N=151 bilinguals | ✅ | ✅ CC BY-NC-ND |
| 5 | **Scientific Reports** 2025-04-07, PMC11977004 — ERP on Standard Indonesian verb bias | ✅ the language | ✅ CC BY |
| 6 | **Frontiers in Human Neuroscience** 2026-08-04, PMC13481806 — L1/L2 affective ERP, 34 bilinguals | ✅ | ✅ CC BY |

Journals named for the cap: PNAS · Scientific Reports · Frontiers in Human Neuroscience.
All three checked by PMCID **and** DOI against all 54 posts in
`../2026-09-25-miss-you-30/blogs/` — **none previously used**. All read
**abstract-only** through the Europe PMC REST API; no PDF parsed.

**Swap test — honest failure.** Sources 4 and 6 are about bilingual affect in general and
could sit unchanged in any non-English row of this batch. Recorded in
`auditReport.failed`. No bilingual-affect study on Indonesian-English speakers
specifically was found via Crossref or Europe PMC.

---

## 8. First-party data and its limits

Least-collided pair available, and it is not very uncollided: the 2.6-hour median edit
gap appears in **21** of 56 sibling posts and the 88.8% publish rate in **23**. Third
fact: 86.4% carry a written memory (29 posts). The differentiation from first-party data
is **thin** and is recorded as an audit failure rather than dressed up.

Four caveats carried in Indonesian body prose, not only here: pickers-with-defaults are
not sender choices; `viewCount` is page views not unique visitors; n=214 over two months
kills any seasonal claim; and — the one that matters most in this batch — **the database
records which template was opened, never who received it, and nothing in it is segmented
by language or country. No figure in this post is an Indonesian figure.**

## 9. Product disclosure

`/missyou-gf` is defined at `app/lib/prompt.ts:44` as **"'I miss you' page for a
girlfriend/partner"** — verified at source. It is an English-language page with English
labels *and* recipient-specific. Both disclosed in Indonesian body prose, including the
plain statement that it is the wrong choice for a parent, a boss or a friend.
`/streak` offered as the genuine alternative for daily long-distance missing;
`/templates` for the cost question, which is refused outright because `facts.md` Pricing
is empty.

## 10. Siblings

`../2026-09-25-miss-you-30/blogs/` (54 posts) contains **no Indonesian or Malay post**
and no *kangen*/*rindu* coverage beyond two passing mentions (in the Arabic and Tagalog
posts). The two Indonesian siblings named in the prompt —
`kangen-kamu-bahasa-jawa`, `cara-bilang-kangen-tanpa-bilang-kangen` — **do not exist on
disk** at time of writing, so no cross-link was written rather than ship a 404. Natural
anchors if they land: the Javanese-origin paragraph, and the register section.

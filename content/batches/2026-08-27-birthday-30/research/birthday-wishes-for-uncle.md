# Research brief — `birthday wishes for uncle`

- **Slug:** `birthday-wishes-for-uncle`
- **Batch:** `2026-08-27-birthday-30` (wave 3, rank 28)
- **Lane:** **M** — terms of address and honorific register for senior male kin
- **Category:** `milestone-birthdays` (confirmed live against Strapi 2026-08-27)
- **Slug check:** `filters[slug][$eq]=birthday-wishes-for-uncle` returns 0 rows — free.
  `birthday-wishes-for-chachu` and `birthday-wishes-for-mama` both return 1 row — **live**.

---

## Phase 1 — SERP (supplied, harvested in a real browser at `gl=in&hl=en&pws=0` on 2026-08-27)

WebSearch was exhausted at 200/200 for the session, so the ranking set was handed over
rather than re-harvested. 9 organic results, AI Overview present.

| # | Domain | Title | What it is | Competitor? |
|---|---|---|---|---|
| 1 | kudoboard.com | 93+ Happy Birthday Messages for Uncle to Make His Day | Group-card product blog, long listicle | Yes — card/greeting builder |
| 2 | recocards.com | 85 Happy Birthday Wishes for Your Uncle (Real Ones) | Card retailer listicle, one page per relation | Yes |
| 3 | pinterest.com | 25 Unique Birthday Wishes to Make Your Uncle Smile | Image board, no prose | Aggregator |
| 4 | floweraura.com | Birthday Wishes: Text Messages and Quotes for Uncle | Gifting retailer listicle | Yes — named in `competitors.md` |
| 5 | grammarly.com | 185 Happy Birthday Wishes and Messages in English | **Not uncle-specific at all** | No, but off-topic |
| 6 | parenting.firstcry.com | 250+ Best Birthday Wishes, Messages & Quotes for Uncle | Parenting portal listicle, the most thorough of the set | Adjacent |
| 7 | fnp.com | Best Happy Birthday Quotes, Wishes For Uncle | Ferns N Petals | Yes — named in `competitors.md` |
| 8 | pinkvilla.com | 120+ Happy Birthday Wishes for Uncle That He Will… | Entertainment portal listicle | No |
| 9 | happybirthdaywisher.com | 150+ Best Birthday Wishes for Uncle (5) | Wishes content farm | Yes — content farm |

**People Also Ask:** How do you wish an uncle a happy birthday? · What is the best short
message for birthday wishes? · How to wish a heart touching birthday? · How do I caption
my uncle?

**Shape of the field.** Every page is a quantity listicle — 25, 85, 93, 120, 150, 185, 250.
The strongest signal in the set is that Google puts a *generic* Grammarly page at #5:
there is not enough uncle-specific substance on the open web to fill nine slots, so the
engine pads with a page that never mentions an uncle. `clusteringVerified` in the
assignment confirms no other wave-3 keyword shares 3+ of these results.

**Note on Phase 1 depth.** I did not fetch the nine pages, because the brief supplied the
ranking set and the batch's WebSearch budget is spent. Titles, positions and the PAA block
are therefore first-hand; per-page word counts, heading structures and schema inventories
are not. Recorded in `honestAssessment` as a process limitation rather than as a
checklist failure, since no checklist item asks for a competitor teardown.

---

## Phase 2 — Gap analysis

### Table stakes (present on effectively all of them — the post must not look thin)
- Ready-to-send wish text a reader can copy.
- Short options as well as long ones.
- Some sense of warmth/emotion, and a nod to funny wishes.
- Coverage of the *English* word "uncle" as a single relationship.

### The gap
**None of the nine distinguishes the five relations that English "uncle" collapses.**

| English | Hindi | Relation |
|---|---|---|
| uncle | चाचा *chacha* | father's younger brother |
| uncle | ताऊ *tau* | father's elder brother |
| uncle | मामा *mama* | mother's brother |
| uncle | मौसा *mausa* | mother's sister's husband |
| uncle | फूफा *fufa* | father's sister's husband |

These carry different expected registers: a father's elder brother sits above your father
in the household hierarchy and takes the `जी` honorific and `आप`; a mother's brother is
conventionally the indulgent one and tolerates teasing. A message that reads correctly to
a chacha reads impertinent to a tau. Not one ranking page says so.

### Stale / absent data
There is no data of any kind in the ranking set — no counts, no dates, no sourcing. There
is nothing to supersede, which means any measured number is a differentiator on its own.

### Unanswered questions the pages raise and drop
- What do I actually *call* him in the message — Uncle, Uncle ji, Chachu, Tau ji?
- Is `जी` optional?
- Do I write in English, Hindi, or Hinglish?
- How long should it be?
- What if I have already missed the day?

### Fan-out sub-queries → H2 map
| Sub-query | H2 |
|---|---|
| Which uncle does "uncle" mean in an Indian family? | `## Five relations, one English word` |
| Which uncle term do people actually use? | `## Which uncle gets named most in Hindi` |
| What do I write for chacha / tau / mama / mausa / fufa? | `## The five uncles, and the register each one expects` (5 H3s) |
| How do I pick the address form and the length? | comparison table inside that section |
| Is a digital page the right thing for an older relative? | `## When a shareable page is the wrong thing to send an uncle` |
| I have left it to the last minute — what now? | `## If the party has already started` |

### Angle (one sentence)
Wins by being the only post that separates the five relations English flattens into
"uncle" — chacha, tau, mama, mausa, fufa — and fixes the register before the wording, by
measuring each term's frequency in a 19,177,172-token Hindi corpus (चाचा 187, अंकल 113,
मामा 106, ताऊ 21, मौसा 9, फूफा 5) and sizing every wish against SubhSandesh's measured
96-character median personal message across 197 birthday pages.

### Cannibalisation
- **`birthday-wishes-for-chachu` is live** — father's younger brother, in depth. This post
  gives chacha one H3 among five and does not re-run that page's material.
- **`birthday-wishes-for-mama` is live** — mother's brother, in depth. Same treatment.
- **`birthday-wishes-for-nephew`** (wave 1, this batch) already used the same *shape* of
  angle for bhatija vs bhanja, and consumed Lane E plus `poverty.com.pk`,
  `journals.openedition.org/ebhr/162`, `europepmc.org/article/MED/28811365` and
  `pure.uva.nl`. None of those is reused here, and the direction is inverted: nephew is
  about descriptive-vs-classificatory *terminology*, this post is about *address* — what
  you call a senior man to his face and which pronoun goes with it.
- **`birthday-wishes-for-sister-in-law`** is being written after this one with the same
  shape of angle for bhabhi/nanad/jethani/devrani. Deliberately kept apart: that post's
  lane (K) is affinal-term semantics; this one's (M) is honorific register for senior male
  kin, and the sources do not overlap.

---

## Phase 3 — Sources

### 1. Original measurement — Leipzig Corpora Collection (reserved slot, 3 of 3 for the domain)

**Corpus id: `hin_news_2011_1M`** — the Leipzig Corpora Collection's *only* Hindi corpus,
confirmed by querying `availableCorpora` (one match for "hin"). 1,000,000 sentences ·
230,831 types · **19,177,172 tokens** · Hindi news material from 2011.

Queried 2026-08-27, one request per word, via
`api.wortschatz-leipzig.de/ws/words/hin_news_2011_1M/word/<word>`.

| Term | Relation | Absolute frequency | Frequency rank |
|---|---|---|---|
| चाचा *chacha* | father's younger brother | **187** | 7,360 |
| अंकल *ankal* (the English loanword) | any uncle | **113** | 10,132 |
| मामा *mama* | mother's brother | **106** | 10,576 |
| ताऊ *tau* | father's elder brother | **21** | 26,451 |
| मौसा *mausa* | mother's sister's husband | **9** | 42,552 |
| फूफा *fufa* | father's sister's husband | **5** | 58,984 |

Companion terms, same corpus: चाची 29 · मामी 16 · बुआ 39 · मौसी 36 · ताया 2 (rank
104,058) · भतीजा 41 · भांजा 9 · जी 4,433 (rank 649).
**Absent from the corpus entirely (HTTP 404, i.e. not a type):** चाचू, चाचाजी, ताऊजी,
मामाजी, "ताऊ जी" — the `जी` honorific is written as a separate token, never compounded.

Two findings worth the post:
1. **चाचा : फूफा is 37 : 1.** The five "uncles" are not equally written about, and the two
   affinal uncles (मौसा, फूफा) are close to invisible in news prose.
2. **अंकल (113) outnumbers ताऊ + मौसा + फूफा combined (35).** The English loanword is the
   second most frequent way to say "uncle" in written Hindi. Only चाचा beats it.

**Honesty checks I ran on my own counts, and which the post discloses:**
- All 187 चाचा hits are 2011 material. **9 of 187 are "चाचा नेहरू"** (Nehru's epithet), so
  ~4.8% of that count is not a kin use.
- **84 of 187** चाचा hits sit in a possessive frame (X के / का / की चाचा) — reference about
  a third party, not address to his face.
- All 21 ताऊ hits inspected individually; every one is a genuine kin use ("वधु के ताऊ",
  "बच्चे के ताऊ", "पिता और ताऊ जॉइंट फैमिली में रहते हैं").
- The standing caveat: this is **written news prose from 2011**, mostly third-party
  reference. Frequency in news is not frequency in speech, and reference is not address.

Cited URL: `https://corpora.uni-leipzig.de/en/res?corpusId=hin_news_2011_1M`
(deliberately **not** `https://corpora.uni-leipzig.de/en`, which is already spent in
`birthday-wishes-for-wife-in-hindi` and `birthday-wishes-reply-in-hindi`).

### 2. Forms of address in Pakistani English — the required Lane M scholarly source

Shahid, Anwar & Shaffaqat, *Social Sciences Spectrum* 4(4), 81–95, published
**2025-10-14**, DOI `10.71085/sss.04.04.362`. Open access, **full text read** (PDF, 5,361
words).

- Self-compiled 1,000,000-token Pakistani English corpus (300k newspapers, 200k academic,
  150k interviews, 150k TV, 200k social media), analysed in AntConc, normalised per
  million words.
- Top-10 address terms: Sir 4,350 · Madam 2,780 · **Uncle 2,150** · Aunty 1,960 ·
  Respected Sir 1,780 · Brother 1,650 · Boss 1,400 · Bhai 1,200 · Baji 980 · Teacher 820.
- Cross-variety: **Uncle 2,150 per million in PakE against 410 in the BNC and 450 in
  COCA** — roughly 5× the British figure.
- Paper's own words on why: PakE "apply 'Uncle' and 'Aunty' to unconnected elderly
  individuals even though these terms would naturally indicate blood relations in
  American English."
- **Limitations I state in the post:** it is *Pakistani* English, not Indian, and the
  corpus is self-compiled rather than a standard reference corpus. The paper names both
  limits itself (genre-balanced but limited regional and socioeconomic spread).

Subject test: forms of address, including kin terms used as address. Passes.
Swap test: a figure about the word *Uncle* cannot sit in any sibling post in this batch.
Passes.

### 3. Lexical gaps in kinship — LREC 2022

Khishigsuren, Bella, Batsuren, Freihat et al., *Proceedings of LREC 2022*,
`2022.lrec-1.299`, published **2022-06-20**. Open access, **full text read** (PDF, 8,069
words).

- Resource of **198 kinship concepts, 1,911 words and 37,370 lexical gaps across 699
  languages**.
- Table 6: the **uncles/aunts subdomain is the largest single source of gaps in the whole
  resource — 16,503 gaps across 625 languages**, from 31 concepts and 51 relations. For
  comparison: grandparents 7,171 · grandchildren 5,049 · siblings 3,851 · cousins 3,190 ·
  nephews/nieces 1,606.
- Native-speaker evaluation covered ten languages including Hindi; Hindi scored 100.0
  precision / 84.4 recall on words and 100.0 / 88.6 on gaps (Table 4). Hindi contributed
  38 Wiktionary words, 124 inferred gaps, 7 expert words and 16 expert gaps (Table 2).
- The paper uses Hindi as its worked example of the two-way gap: English *cousin* has no
  Hindi equivalent, and Hindi चचेरा भाई ("son of father's brother") has no concise English
  equivalent.
- The uncle/aunt subdomain also had the *lowest* agreement with Murdock's typological data
  (Cohen's κ = 0.75 against 0.89 overall) — i.e. it is the messiest corner of kinship
  vocabulary even for specialists. Worth noting, not overclaiming.

Subject test: the semantics of uncle terms across languages. Passes.
Swap test: the uncles/aunts gap count is about *this* keyword. Passes.

### 4. The avuncular profile — paternal sternness vs maternal geniality

Samuels, J., *Journal of Research Institute* (Kobe City University of Foreign Studies)
vol. 51, pp. 435–464, issue date **2014-03-01**. Open access (CC BY-NC-SA — cited and
linked only, nothing reproduced), **full text read** (PDF, 12,582 words).

- Ethnographic finding, stated in the paper's own terms: a tendency for the **paternal
  uncle** (Tib. *a-khu*, Tam. *agu*) "to be associated with sternness, seriousness, if not
  a degree of remoteness and aloofness (sometimes even disapproval)", whereas the
  **maternal uncle** (Tam. *asyang*) is "associated more with strength and lively energy,
  geniality, playfulness, and friendliness inviting intimacy."
- Also documents kin terms deliberately manipulated as address forms to inject intimacy,
  and notes the use of kin terms for non-kin is far more marked among Tamangs than
  Tibetans.
- **Limitation the post states outright:** this is Tibetan and Tamang ethnography from the
  Himalayan region, not the Hindi belt, and the author is explicit that these particular
  observations are subjective — he designed a picture test to check them and abandoned it
  when respondents keyed on apparent age instead. I use it as corroboration of a register
  contrast, not as evidence about Hindi speakers.

Subject test: the maternal uncle as a relation and how he is addressed. Passes.
Swap test: nothing else in this batch is about uncles. Passes.

### Sources I looked for and did not find

I could not find an open-access study of **Hindi-belt kin terms of address** that was not
already spent in this batch. Searched, via DOAJ, OpenAlex (`is_oa:true`) and the HAL and
ACL Anthology indexes: `"terms of address" AND kinship` · `"kinship terms" AND Hindi` ·
`"address terms" AND Indian` · `kinship terms of address North India uncle chacha mama` ·
`Hindi honorific ji kinship term respect address` · `Indian English uncle aunty address
term politeness` · `fictive kinship address strangers uncle aunty urban India` ·
`maternal uncle mama ritual North India ethnography mamera` · `Reference address fictive
kinship urban North India Vatuk`.

The one direct hit — *Kinship terms as indicators of identity and social reality: Syrian
Arabic and Hindi*, Russian Journal of Linguistics 2021 — is **`journals.rudn.ru/linguistics/article/view/26001`,
which the brief lists as a spent URL** (already in `birthday-wishes-for-daughter-in-hindi`
and `birthday-wishes-for-younger-sister`), so it is unavailable to this post. Semantic
Scholar returned HTTP 429 on both attempts and was not retried, per the pacing rule.
`muse.jhu.edu/article/574604` (*Language in the Constitution of Kinship*, Anthropological
Linguistics 2014) looked promising but is paywalled — dropped rather than cited from an
abstract.

Net position: 2 of 4 sources are peer-reviewed scholarly work in Lane M territory, one is
an original measurement against a public corpus, and **zero are generic government
statistics.**

### Source-cap position (script run from the repository root, 2026-08-27)

| Domain | Posts before this one | After |
|---|---|---|
| `corpora.uni-leipzig.de` | 2 (reserved for this post) | **3 of 3 — now at cap** |
| `aclanthology.org` | 1 | 2 of 3 |
| `sss.org.pk` | 0 | 1 of 3 |
| `kobe-cufs.repo.nii.ac.jp` | 0 | 1 of 3 |

No URL in this post appears in any sibling. `r12a.github.io` (reserved for Kannada) is not
touched. `api.wortschatz-leipzig.de` is *not* listed as a source — it is the endpoint I
queried, and it is recorded here in the brief rather than in `batchMeta.sources`, so the
teacher post's use of that domain is unaffected.

---

## Phase 4–5 notes

- **First-party facts in the first 150 words:** the 96-character median personal message
  (n=197) and the 50.0% same-day creation rate (91 of 182 dated pages). Two more appear
  later: quiz built on 98.5% of pages but played on only 14.4%, and 12.6% created after
  the birthday had already passed.
- **Comparison table:** 5 rows × 4 columns; the fourth column sizes a wish against the
  first-party 96-character median.
- **Internal links (3):** `/birthday-parents`, `/birthday-friend`, `/templates` — all from
  `TEMPLATE_LINKS`, all placed after the section that establishes why the reader wants
  them. `/birthday-gf` and `/birthday-bestfriend` were deliberately not used: an uncle post
  linking a girlfriend template is the off-topic linking the last commit removed.
- **ItemList:** mirrors the five H3s in order (chacha, tau, mama, mausa, fufa).
- **`about` / `mentions` sameAs**, all verified against the Wikipedia API with QIDs paired:
  Uncle Q76557 · Kinship terminology Q2305447 · Hindi Q1568 · Indian English Q1348800 ·
  Honorific Q1326966. "Leipzig Corpora Collection" has no Wikipedia article — checked,
  returned `missing`, so it is named without a `sameAs`.

## The recorded audit failure

One item fails, structurally: **"The post contains at least one claim none of the top 5
pages make."** The corpus half of that claim is independently verifiable — anyone can
re-query `hin_news_2011_1M` and get 187 / 113 / 106 / 21 / 9 / 5. The *register* half is
not: the guidance that a tau ji takes `जी` and `आप` where a chachu can take `तुम`, and the
Devanagari kin terms printed in the body, are machine-composed and have not been checked
by a native Hindi reader. Since the register guidance is part of what differentiates the
post, the item is not established until a native reader signs off. No citation can close
it — only a reader can.

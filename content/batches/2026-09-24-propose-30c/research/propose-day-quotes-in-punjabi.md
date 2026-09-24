# Research brief — `propose day quotes in punjabi`

- **Slug:** `propose-day-quotes-in-punjabi`
- **Secondary keyword (same page):** `propose day wishes in punjabi`
- **Category:** `modern-romance`
- **Demand:** 3 ordinal prefixes from the unselected autocomplete pool. Ordinal, not volume.
- **Date check:** `date` on this machine returned `Thu Sep 24 12:54:54 IST 2026`. Propose Day
  2027 = **Monday 8 February 2027**; Rose Day Sunday 7 February; Valentine's Day Sunday
  14 February. Valentine week 2027 is eight dated days.

---

## Phase 0 — first-party facts (from `content/facts.md`, regenerated 2026-09-24)

Copied byte-for-byte into `batchMeta.factsUsed`:

1. `5,148 personalised pages created since 2026-03-12, across 21 page types — measured 2026-09-24`
2. `48.3% of shared pages are opened on a phone (27,499 of 56,886 views) — measured 2026-09-24`
3. `#3 page type: "I love you" page (/love-gf) — 1,178 created, 22.9% of all pages — measured 2026-09-24`
4. `Most-viewed template: love-gf — 16,998 views, 29.9% of all page views — measured 2026-09-24`
5. `90.9% of started pages are actually published and shared (4,679 of 5,148) — measured 2026-09-24`
6. `38.5% of creators password-protect their page before sharing it (1,983 of 5,148) — measured 2026-09-24`

Every one is labelled in body prose as platform-wide across 21 page types, or as the named
template's own figure. **No proposal-page figure exists**; the `proposalpages` probe is still
refused. **No price, free tier or paid tier is stated or implied** — the pricing block in
`content/facts.md` is empty for a fourth batch.

---

## Phase 1 — SERP (measured once, 2026-09-24)

One `WebSearch` for the exact keyword, run 2026-09-24. **This is the only SERP observation
behind this post, it is a single US-served query, and no ranking page was fetched** — the
skill forbids fetching or reproducing competitor pages, and every result on this SERP is a
competitor under `references/competitors.md` (gifting retailers, an invitation builder, and
shayari/wishes content farms). So: no position, no word count, no "competitors all say X".

What the result **titles and snippets alone** showed, and nothing more:

| Observable | What I saw |
|---|---|
| Result types | Pinterest board, a wedding-services blog, a gifting retailer, four shayari/wishes aggregators, Goodreads, Dribbble |
| Year-stamping | Titles carrying `[2024]`, `(2023)`, `for 2025` — i.e. annually restamped list pages |
| Script handling | One title rendered "Propose Day" into Gurmukhi as **ਪ੍ਰਸਤਾਵਿਤ ਦਿਨ ਮੁਬਾਰਕ** — *prastāvit din*, "proposed day", the bureaucratic-agenda sense, not the romantic ask |
| Snippet lines | The snippet quoted lines with mixed Hindi/Punjabi morphology (`ਹਸਰਤਾਂ 'ਚ ਮਰਦਾ ਹੈ`) |

**That last row is the whole gap.** The wave-3 Hindi agent established against McGregor and a
treebank that the Indic verbs of "proposing" are parliamentary and commercial, not romantic;
this SERP shows the same calque being shipped into Gurmukhi by machine. I cannot say how many
pages do it — I saw one title — and the post says exactly that.

## Phase 2 — gap and angle

- **Table stakes:** lines in Gurmukhi; transliteration; an English gloss; grouping by situation;
  the date.
- **The gap:** nobody publishes the verification. Every result is a line list. None states which
  dictionary a word was checked in, which forms a corpus attests, or which lines were cut.
- **Fan-out sub-queries → H2s:** what a Punjabi propose-day quote is · ਤੂੰ vs ਤੁਸੀਂ · Gurmukhi vs
  Shahmukhi · why a Punjabi word has two spellings · is Punjabi tonal · what got cut · when a
  Punjabi line is wrong.
- **Angle:** *Wins by being the only Propose Day page in Punjabi that publishes its verification
  ledger — 24 lines drafted, 11 published, 13 cut with the dictionary gloss that killed each —
  against a platform measured at 5,148 pages across 21 page types.*

**Sibling check.** No other post in waves 1–4 targets Punjabi; waves 2–3 took Hindi, Marathi,
Bengali, Kannada, Telugu and Malayalam. This post shares the method and nothing else: different
script, different dictionary, different corpora, different sources, and a two-script problem that
none of the other languages has.

---

## Phase 3 — verification instruments (credited in prose, kept OUT of `sources`)

The BRIEF's mid-batch exemption covers dictionaries, treebanks and corpora, and says the
preferred handling is to credit them in prose and `structuralLimitations` rather than spend
source slots. Done.

| Instrument | URL | What I measured in it |
|---|---|---|
| Singh, *The Panjabi Dictionary* (1895), via DSAL | `https://dsal.uchicago.edu/cgi-bin/app/singh_query.py` | 70 headword queries; glosses read verbatim; entries run to at least p. 1,221 |
| UD **Punjabi-Rang** + **Punjabi-CS** treebanks | `https://github.com/UniversalDependencies/UD_Punjabi-Rang`, `…/UD_Punjabi-CS` | all six `.conllu` files: **250 sentences, 3,810 tokens, 1,374 types** |
| **Tatoeba** Punjabi exports | `https://downloads.tatoeba.org/exports/per_language/pan/`, `…/pnb/` | **217** Gurmukhi (`pan`) + **77** Shahmukhi (`pnb`) sentences |
| Unicode UCD `UnicodeData.txt` | `https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt` | **80** assigned code points in U+0A00–U+0A7F (U+0A01–U+0A76); one `U+0A3C GURMUKHI SIGN NUKTA`; six letters with a second, precomposed encoding |

Combined attestation corpus (UD + Tatoeba) = **5,508 tokens, 2,055 types**. That is the whole
free, machine-readable Gurmukhi evidence base I could assemble, and it is tiny — the reason the
dictionary does most of the work here and the corpus only confirms living forms.

**A third UD Punjabi repository, `UD_Punjabi-PunTB`, contains no `.conllu` file at all** — only a
README, LICENSE and CONTRIBUTING. Reported, not used.

### Method, per line

1. Every **content word** must be a headword in Singh with an attested sense that matches the
   intended meaning. A near-miss gloss is a cut, not a judgement call.
2. Every **grammatical frame** (pronoun + auxiliary + verb ending) must appear in the combined
   corpus. Function words (ਲਈ, ਤੇ, ਕੀ) are corpus-verified only — they are not dictionary headwords.
3. If 1 and 2 disagree, the line is cut or rewritten to a frame the corpus attests.

---

## Phase 3 — third-party sources (4)

| # | Source | Passes subject test? | Peer-reviewed? | Open? | Read |
|---|---|---|---|---|---|
| 1 | Arora, Farris, Basu & Kolichala, *Computational historical linguistics and language diversity in South Asia*, ACL 2022 Theme Track (arXiv:2203.12524) | **Yes** — Punjabi tone | **Yes** (ACL 2022) | Yes | **Full text** via ar5iv |
| 2 | Shehzad, Rauf, Nazeer, Daud & Dawood, *Automatic sentence simplification system for Arabic Script Punjabi*, PLOS ONE 21(6):e0344915, 11 June 2026 | **Yes** — Shahmukhi NLP | **Yes** | Yes | **Abstract + metadata**; full text not read |
| 3 | The Unicode Standard 17.0, Ch. 12 *South and Central Asia-I*, Gurmukhi section | **Yes** — Gurmukhi encoding | Standard, not a paper | Yes | **Full section** |
| 4 | Unicode Character Database, `UnicodeData.txt` (latest) | **Yes** — Gurmukhi block | Standard, not a paper | Yes | **Parsed directly** |

Swap test: none of the four could sit in another keyword's post in this batch — all four are
about Gurmukhi, Shahmukhi or Punjabi tone specifically. **Zero generic context statistics.**
`capcheck.mjs` run when choosing and again immediately before saving; no banned URL, no domain
over cap.

### Facts taken, verbatim from what I read

- **Source 1:** Baart's (2003) classification puts Punjabi in a named **"Punjabi-type"** tonal
  group alongside Hindko, some Gujari varieties, Himachali languages and Kishtwari; the paper
  states the system "arises primarily from the disappearance of phonemic breathy voice."
- **Source 2:** the paper builds **PUSIM**, a simplification corpus for Shahmukhi, reports a
  **SARI score of 45.3**, and describes Shahmukhi as "a linguistic facet that had previously
  received limited attention in natural language processing." (The paper calls Shahmukhi a
  *dialect*; it is a script. The post states the correct fact and does not repeat the paper's
  wording as its own.)
- **Source 3:** "The script is closely associated with Sikhs and Sikhism, but it is used on an
  everyday basis in East Punjab. (West Punjab, now in Pakistan, uses the Arabic script.)"; the
  *pairin bindi* consonants are "primarily used to differentiate Urdu or Persian loan words";
  `U+0A71 ADDAK` marks gemination; `U+0A51 UDAAT` "indicates a high tone"; Gurmukhi is attributed
  to Angad, the second Sikh Guru (1504–1552 CE).
- **Source 4:** ਲ਼ ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼ each have a precomposed code point **and** a canonical decomposition
  into base + `U+0A3C`.

### Sources I tried and could not use — named, as the BRIEF requires

| Candidate | Why not |
|---|---|
| *A sentence-aligned bitext corpus … Punjabi normalization … Gurumukhi script*, SSAHO 2026 (DOAJ-listed) | ScienceDirect returned **403**; Crossref carried **no abstract**. Nothing readable to cite. |
| *Advancing Deep Learning … Shahmukhi Punjabi*, SSRN 2025 | SSRN returned **403** (content-protection block). |
| *Digital Language Vitality: … Punjabi (Shahmukhi) in the Cyber Era*, JALS 3(3) 2025 | Venue judged: `jals.miard.org`, **not DOAJ-listed**, charges publication fees. Rejected on venue. |
| *The Inadequate Digital Representation of the Punjabi Diaspora in Canada* (Toronto Metropolitan University thesis, 2026-03-02) | Read the abstract — it is about Instagram representation of Punjabi women, **off-lane**. |
| *Family language policy … in Pakistan*, Front. Psychol. 2025 | Europe PMC returned **403**; also fails the subject test. |
| Census of India 2011 language tables | `censusindia.gov.in` **unreachable** from this machine (DNS/fetch failure). **So this post prints no Punjabi-speaker population figure at all.** |
| An open-access acoustic study of Punjabi tone | Searched `Punjabi tone phonology study`, `Punjabi tonogenesis murmured consonants acoustic`, `Punjabi lexical tone acoustic analysis production perception`, `Punjabi tonal language Indo-Aryan tone contrast`, `Gurmukhi orthography tone representation Punjabi reading` via `findpapers.mjs`, plus the full *Journal of South Asian Linguistics* archive including its Vol. 10 prosody special issue. **No open-access, fetchable Punjabi-tone acoustic paper found.** The tone claim therefore rests only on Source 1 and Source 3, and the post says no more than those two say. |

---

## Phase 4 — the Punjabi ledger: 24 drafted, 11 published, 13 cut

### Published (11)

| # | Gurmukhi | Roman | Gloss | Dictionary evidence | Corpus evidence |
|---|---|---|---|---|---|
| A1 | ਮੈਂ ਇਥੇ ਤੇਰੇ ਲਈ ਹਾਂ। | maĩ ithe tere laī hā̃ | I am here for you | ਇੱਥੇ "Here"; ਤੇਰਾ "(gen. of Túṇ) Thy" | Attested near-verbatim in Tatoeba: *ਟੋਮ, ਮੈਂ ਇਥੇ ਤੇਰੇ ਲਈ ਹਾਂ।* |
| A2 | ਤੂੰ ਮੇਰੇ ਨਾਲ ਏਂ, ਤੇ ਇਹ ਬਹੁਤ ਹੈ। | tū̃ mere nāl ẽ, te ih bahut hai | You are with me, and that is plenty | ਨਾਲ "With, by"; ਬਹੁਤ "Much, many, enough" | ਤੂੰ … ਏਂ attested in UD-Rang (*ਜਿਹੜੀ ਭੇਡ ਤੂੰ ਕਹਿ ਰਿਹਾ ਏਂ*); ਨਾਲ ×28 |
| A3 | ਮੇਰਾ ਦਿਲ ਤੇਰੇ ਕੋਲ ਹੈ। | merā dil tere kol hai | My heart is with you | ਦਿਲ "Heart, mind, soul"; ਕੋਲ "Near, by, with, in the keeping or possession of" | ਮੇਰੇ ਕੋਲ attested; ਦਿਲ ×2 |
| A4 | ਮੈਂ ਤੇਰੇ ਵਰਗਾ ਕੋਈ ਨਹੀਂ ਵੇਖਿਆ। | maĩ tere vargā koī nahī̃ vekhiā | I have never seen anyone like you | ਵਰਗਾ "Like, resembling, equal to"; ਵੇਖਣਾ "To see, to look" | ਤੇਰੇ ਵਰਗਾ attested (*ਤੇਰੇ ਵਰਗਾ ਬਣਨਾ ਚਾਹੁੰਦਾ ਹਾਂ*) |
| B1 | ਕੀ ਤੁਹਾਨੂੰ ਮੇਰੇ ਉੱਤੇ ਭਰੋਸਾ ਹੈ? | kī tuhānū̃ mere utte bharosā hai? | Do you trust me? | ਭਰੋਸਾ "Belief, faith; trust, hope"; ਉੱਤੇ "Over, on, upon" | **Verbatim** Tatoeba sentence |
| B2 | ਕੀ ਤੁਸੀਂ ਮੇਰੇ ਨਾਲ ਜ਼ਿੰਦਗੀ ਗੁਜ਼ਾਰੋਗੇ? | kī tusī̃ mere nāl zindagī guzāroge? | Will you spend a life with me? | ਜਿੰਦਗੀ "Life, life-time"; ਗੁਜਾਰਨਾ "to pass the time" | *ਆਪਣੀ ਜ਼ਿੰਦਗੀ … ਗੁਜ਼ਾਰੀ* in UD-Rang; ਕੀ ਤੁਸੀਂ … -ਓਗੇ in Tatoeba |
| B3 | ਤੁਸੀਂ ਮੈਨੂੰ ਸਭ ਕੁਝ ਦੱਸ ਸਕਦੇ ਹੋ। | tusī̃ mainū̃ sabh kujh dass sakde ho | You can tell me everything | ਸਭ "All, the whole … sabh kuchh, Every thing"; ਦੱਸਣਾ "To show, to direct, to tell" | *ਤੁਸੀਂ ਮੈਨੂੰ ਸਬ ਕੁਛ ਦਸਦੇ ਹੁੰਦੇ ਸੀ*; *ਸਮਝ ਸਕਦੇ ਹੋ* |
| B4 | ਮੈਂ ਚਾਹੁੰਦਾ ਹਾਂ ਕਿ ਤੁਸੀਂ ਮੇਰੇ ਨਾਲ ਰਹੋ। | maĩ cāhundā hā̃ ki tusī̃ mere nāl raho | I want you to stay with me | ਰਹਿਣਾ "To stay, to stop, to remain" | *ਮੈਂ ਚਾਹੰਦਾ ਹਾਂ ਤੁਸੀਂ ਉਸ ਦਾ ਇਸਤੇਮਾਲ ਕਰੋ*; ਚਾਹੁੰਦਾ ×3 |
| C1 | ਕੀ ਤੁਸੀਂ ਮੇਰੇ ਨਾਲ ਵਿਆਹ ਕਰੋਗੇ? | kī tusī̃ mere nāl viāh karoge? | Will you marry me? | ਵਿਆਹ "Marriage, a wedding" | *ਮੇਰਾ ਅਗਲੇ ਮਹੀਨੇ ਵਿਆਹ ਹੈ।* |
| C2 | ਮੈਂ ਤੇਰੇ ਨਾਲ ਬੁੱਢਾ ਹੋਣਾ ਚਾਹੁੰਦਾ ਹਾਂ। | maĩ tere nāl buḍḍhā hoṇā cāhundā hā̃ | I want to grow old with you | ਬੁੱਢਾ "Old; an old man" | *… ਬਣਨਾ ਚਾਹੁੰਦਾ ਹਾਂ* frame attested |
| C3 | ਤੂੰ ਹਾਂ ਕਹਿ ਦੇ। | tū̃ hā̃ kahi de | Just say yes | ਹਾਂ "Yes, indeed"; ਕਹਿਣਾ "To speak … to say" | ਹਾਂ as *yes* in Tatoeba; ਦੇ ×25 in UD |

One line was **revised rather than cut**: A3 was drafted as *ਮੇਰਾ ਦਿਲ ਤੇਰਾ ਹੈ*. ਤੇਰਾ is a Singh
headword but has **zero** attestations in the 5,508-token corpus, while ਤੇਰੇ ਕੋਲ is attested, so
the line moved to the attested frame.

### Cut (13), with the gloss that killed each

| Drafted line / word | Reason |
|---|---|
| *…ਅਧੂਰੀ ਹੈ* "incomplete without you" | Singh's **ਅਧੂਰਾ** = "Half ready, half done, half dressed, immature (as a fœtus); unfinished, defective" — not the emotional sense. |
| *ਤੂੰ ਮੇਰਾ ਮਾਹੀ ਏਂ* | Singh's **ਮਾਹੀ** = "**A herdsman of buffaloes**; a friend." First sense wrong. |
| *ਮੇਰੇ ਢੋਲ…* | Singh's **ਢੋਲ** = "A drum … a beloved (**in the last sense used in poetry**)." Drum-first, poetry-marked, and the most song-saturated word in the register. |
| *ਤੂੰ ਮੇਰਾ ਯਾਰ ਏਂ* | Singh's **ਯਾਰ** = "A friend, an intimate, a lover … **an adulterer; a paramour**." Kept as a warning in the body, not as a line. |
| *ਤੇਰਾ ਹਾਸਾ ਮੇਰੀ ਸਵੇਰ ਹੈ* | **ਹਾਸਾ** returns **0** headwords (only ਹੱਸਣਾ "to laugh") and **0** corpus hits. |
| *ਤੇਰੀ ਮੁਸਕਾਨ…* | **ਮੁਸਕਾਨ 0**, **ਮੁਸਕਰਾਹਟ 0** headwords, **0** corpus hits. Hindi import. |
| *ਮੈਂ ਵਾਅਦਾ ਕਰਦਾ ਹਾਂ* | **ਵਾਅਦਾ 0**, **ਵਾਇਦਾ 0**, **ਵਾਦਾ 0**, **ਇਕਰਾਰ 0** headwords. No verified way to say "I promise". |
| *ਤੂੰ ਮੇਰੀ ਦੁਨੀਆ ਏਂ* | Singh's **ਦੁਨੀਆ** headword = "(K.) **Coriander**, *Coriandrum sativum*." ਦੁਨੀਆਂ: 0 corpus hits. |
| *ਤੂੰ ਮੇਰੇ ਸੰਗ ਰਹਿ* | Singh's **ਸੰਗ** first sense = "**Shame**"; then "a stone; association". |
| *…ਜ਼ਿੰਦਗੀ ਸਾਂਝੀ ਕਰੋਗੇ?* | Singh glosses **ਸਾਂਝਾ** only "Partnership fellowship", no adjectival "shared"; ਸਾਂਝੀ 0 corpus hits. **Replaced by B2.** |
| *ਤੂੰ ਮੇਰੀ ਆਦਤ ਬਣ ਗਈ ਏਂ* | ਆਦਤ is attested ("Habit, custom"), but the phrase is a film-song formula. Cut under the no-lyrics rule. |
| *ਤੂੰ ਮੇਰੇ ਲਈ ਕੀਮਤੀ ਏਂ* | Singh's **ਕੀਮਤੀ** = "**High-priced**, dear, precious, costly, valuable" — a price reading, which this batch may not imply. |
| *ਮੇਰਾ ਇਸ਼ਕ…* | Nukta'd **ਇਸ਼ਕ** returns **0** headwords (un-nukta'd ਇਸਕ = "Love, affection"), and the word is the heaviest song register in Punjabi. |

**No song lyric, film line or copyrighted verse is reproduced anywhere on the page.** All eleven
published lines are original sentences built from dictionary-attested words in corpus-attested
frames. Nothing was taken from any page on the SERP.

### The nukta finding, which is why three of those cuts happened

Singh (1895) predates the standardisation of the *pairin bindi*. Four modern spellings —
**ਜ਼ਿੰਦਗੀ, ਖ਼ਾਸ, ਇਸ਼ਕ, ਗੁਜ਼ਾਰਨਾ** — returned **0** headwords, while their un-dotted forms
**ਜਿੰਦਗੀ, ਖਾਸ, ਇਸਕ, ਗੁਜਾਰਨਾ** returned 1, 6, 1 and 2. Unicode explains it: ਲ਼ ਸ਼ ਖ਼ ਗ਼ ਜ਼ ਫ਼ each
have a precomposed code point *and* a base + `U+0A3C` decomposition, so the same visible word can
be two different byte strings, and a dictionary indexed on one will not match the other.
`ਖ਼ਾਸ` is **not** the Hindi ख़ास case from wave 3 — Punjabi ਖਾਸ genuinely means "Own, particular,
private; excellent; favourite". Only the spelling was wrong, not the sense.

---

## Phase 5 — links and Strapi

- `/proposal` — mandatory, placed after the group that contains ਕੀ ਤੁਸੀਂ ਮੇਰੇ ਨਾਲ ਵਿਆਹ ਕਰੋਗੇ?
- `/love-gf` — the genuine alternative. In Indian usage "propose" usually means asking someone
  to be your girlfriend, not to marry you, so most of this traffic wants the *I love you* page,
  not the marriage scrapbook. **Stated honestly in the body: both templates are English-language.**
  A Punjabi reader gets the line in Gurmukhi because they paste it in; the template's own
  furniture stays English.
- `/templates` — third internal link.
- `templateUrls`: `/proposal`, `/love-gf`. `categorySlug`: `modern-romance`.

## Phase 6 — audit

50/50, disjoint. Limitations in `structuralLimitations`, not `failed`.

## Phase 7 — honest assessment

Target **position 6–10, not 3**. These SERPs are an annual February news cycle held by large
publishers and by shayari aggregators with years of accumulated links, and a `quotes` query is a
copy-and-leave query: the reader takes a line and goes. This is a **visibility asset judged on
impressions, not a converting page**, and it is not written to convert.

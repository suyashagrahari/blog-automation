# Research brief — `raksha bandhan wishes in hindi`

- **Slug:** `raksha-bandhan-wishes-in-hindi` — verified free in Strapi on 2026-08-25 (`filters[slug][$eq]` returned `total: 0`). No live article matches `rakhi-wishes-in-hindi` or `raksha-bandhan-wishes` either.
- **Batch:** `2026-08-25-rakhi-2027`. Category `indian-festivals` (confirmed against the live category list).
- **Demand:** highest-volume language keyword in the batch — autocomplete demand 62, more than 2× Marathi (29) and 3× Gujarati/Kannada (19). Band 4, 3,000–10,000/mo **EST** peak. Not a TOOL figure.
- **Timing:** Rakhi 2027 = Tuesday 17 August 2027 (weekday verified by calculation). Rakhi 2026 = Friday 28 August 2026. Written for the 2027 cycle and the year-round long tail; the date block is isolated in one H2 so it is re-datable rather than rewritable.

---

## Not a duplicate of the two existing Hindi rakhi posts

SubhSandesh already has `raksha-bandhan-shayari-in-hindi-for-bhai` (2026-08-13 batch) and
`raksha-bandhan-shayari-2026-hindi-english` (2026-08-18 batch). Both were read in full
before drafting. **Verdict: not a duplicate — ship it.** The distinction is structural, not
cosmetic:

| | The two existing posts | This post |
|---|---|---|
| Object | A **shayari** — a couplet with metre and rhyme that stands alone as a poem | A **wish** — an addressed message to one named person |
| Organising axis | Poetic form: qaafiya, radif, matra counts, ghazal prosody, what translation sacrifices | Grammatical address: sender's gender on the verb, आप/तुम register, script |
| What the reader is choosing between | Couplets, by how they sound | Wishes, by **who is sending and who is receiving** |
| Sources | Ghazal prosody, translation studies, poetics | Hindi honorifics, Hindi kinship terms, Hindi–English script-mixing |
| Overlapping entity | Both are in Hindi. That is the whole overlap. |

Corroborating evidence that these are separate SERPs, not one: FNP maintains
`/quotes/raksha-bandhan/hindi` **and** a separate shayari asset; FlowerAura and IGP likewise
split "wishes" from "shayari" into distinct URLs. This post makes the boundary explicit in
its own definition H2 ("A wish is also not a shayari…") so a retrieval system sees the
distinction rather than inferring it, and it links nowhere near the shayari pages' framing.

---

## Phase 1 — SERP analysis

Top results for the exact query, fetched and measured 2026-08-25. Word counts and
Devanagari glyph counts are from the rendered text of each page.

| Page | Words | Devanagari glyphs | H2s | Table | FAQ schema | ItemList | Year in title | What it optimises for |
|---|---|---|---|---|---|---|---|---|
| igp.com/blog/raksha-bandhan-wishes-in-hindi | 2,462 | 7,309 | 1 | yes | no | no | **2026** | Volume of Hindi wishes + express-rakhi product placement. The real competitor. |
| fnp.com/quotes/raksha-bandhan/hindi | 1,976 | **0** | 2 | no | no | no | 2026 | Image gallery. The Hindi exists **only inside JPG/PNG files**. |
| floweraura.com/blog/happy-raksha-bandhan-wishes-in-hindi | 1,569 | 3,097 | 3 | no | no | no | — (dated May 2021) | A 2021 listicle, still ranking; opening paragraph still says "साल २०२१". |
| partyvillas.in/blog/happy-raksha-bandhan-wishes-in-hindi-english | 1,051 | 457 | 7 | no | no | no | 2025 | "40+ wishes in Hindi & English" — but only 457 Devanagari glyphs, so the Hindi half is thin. |
| sloshout.com/blog/raksha-bandhan-wishes-in-hindi-and-english | 1,217 | 920 | 4 | no | **yes** | **yes** | **2025** | The only page with FAQ + ItemList schema, and the only one whose title is a year out of date. |
| wordzz.com/happy-raksha-bandhan-hindi-wishes | 1,886 | **0** | 0 | yes | no | no | — | "Hindi wishes" delivered entirely in Roman transliteration. No Devanagari at all. |
| joliecarte.com (×2 URLs in the top 7) | 391–500 | 0 | 1 | no | no | no | — | Thin foreign ecard pages, two of them ranking for near-identical queries. |

**Where the direct answer appears:** nowhere on any of them. Every page opens with 2–4
paragraphs of festival scene-setting before the first wish. None answers the question a
reader actually has, which is *which of these lines is the right one for me to send*.

**Honest read of the difficulty.** This is the hardest of the language set in this batch.
Only 4 of 9 results are genuinely weak (joliecarte ×2, sloshout titled 2025, partyvillas a
small venue blog). igp.com already ships a 2026-titled Hindi post with 7,309 Devanagari
glyphs; fnp.com has a dedicated Hindi quotes URL; floweraura.com is present. Two of the
three strong incumbents outrank subhsandesh.in on domain authority by a wide margin.

**Tone across all seven:** third person, no author byline with credentials, no stated
opinion, no tradeoff named anywhere. Nobody says a wish is the wrong thing to send.

---

## Phase 2 — Gap analysis

**Table stakes** (present on ≥5 of the pages, so this post must carry them): real Hindi
wishes in Devanagari; separate lines for brother and for sister; a short WhatsApp-length
option; the phrase रक्षाबंधन की शुभकामनाएँ; the festival date.

**The gap — three related holes, none of which any page fills:**

1. **Nobody labels the sender's voice.** Hindi conjugates the first person for the
   speaker's gender. Measured on the live pages: igp.com's wish pool contains **both**
   `करता हूँ` and `करती हूँ` lines with no marker saying which is which, and floweraura.com
   carries only masculine first-person forms while addressing a mixed audience. So roughly
   half of the highest-ranking list is grammatically wrong for whoever copies it, and the
   reader is given no way to tell.
2. **Nobody explains आप vs तुम.** igp.com and floweraura.com use both pronouns
   interchangeably across their lists; partyvillas.in and sloshout.com contain `तुम` and no
   `आप` at all, across wishes offered for brother and sister alike. Sending `तुम` to an
   elder brother is a live social error in a Hindi-speaking family, and it is invisible to a
   reader who does not already know the rule.
3. **Nobody gives script + transliteration + sense together.** wordzz.com is Roman-only
   (0 Devanagari glyphs). fnp.com is image-only (0 Devanagari glyphs in 1,976 words — its
   Hindi cannot be copied, searched, read by a screen reader, or retrieved by an answer
   engine). igp.com is Devanagari-only. Not one page gives a reader both scripts plus what
   the line actually means.

**Also missing:** the fact that some Hindi constructions carry **no** speaker-gender
marking at all (nouns + copula: `शुभकामनाएँ`, `मुबारक`, `याद हो`), which is the single most
useful thing to tell someone who does not want to declare their gender in a forwarded
message. No competitor page mentions it. This is the claim none of the top 5 make.

**Stale data:** floweraura.com is a 2021 post whose body still reads "साल २०२१ का रक्षा बंधन";
sloshout.com is titled 2025; partyvillas.in is dated July 2025. Three of six are running on
a superseded year.

**Fan-out sub-queries** (each became an H2 or an FAQ): what is the Hindi for Happy Raksha
Bandhan · आप or तुम for my brother · I'm the brother not the sister, does the wish change ·
Roman or Devanagari · a wish that doesn't reveal my gender · wish vs shayari · शुभकामनाएँ vs
मुबारक vs बधाई · Raksha Bandhan 2027 date · typing Hindi without a Devanagari keyboard ·
can an LLM write it.

**Angle (recorded as `batchMeta.angle`):** wins by being the only Hindi Raksha Bandhan
wishes page that labels every wish for the sender's own gender and for आप/तुम register,
gives each in Devanagari, Roman and English, and names the copula construction that lets a
sender stay gender-unmarked — grounded in the 44.2% of 2,973 SubhSandesh creators who
password-protect a page before sharing.

---

## Phase 3 — Sources

Searched the **phenomenon**, not the festival. Query terms used: `Hindi honorifics aap tum
tu address terms politeness sociolinguistic study kinship`, `romanized Hindi versus
Devanagari script choice social media users study`, `Hindi kinship terms address elder
brother bhaiya respect open access DOAJ`, `emotional resonance native language versus second
language bilingual open access`, `Hindi verb gender agreement first person speaker gender`.

All five sources were fetched and read. Zero government or context statistics — no PIB, no
TRAI, no Census, no MEA, and none of the four domains banned for this batch.

| # | Source | Verified claim used | Published | Tests |
|---|---|---|---|---|
| 1 | [Bhatt, *Linguistica Brunensia* 60(1–2), 49–60](https://journals.phil.muni.cz/linguistica-brunensia/article/view/30697) | The Hindi honorific system reflects family ties, familiarity, formality, personal closeness, social status and caste simultaneously; analysed morphologically, semantically and pragmatically | 2012 | subject ✓ scholarly ✓ open ✓ swap ✓ |
| 2 | [Suryanarayan & Khalil, *Russian Journal of Linguistics* 25(1), 125–146](https://journals.rudn.ru/linguistics/article/view/26001) | Open-ended questionnaires with 70 Hindi-speaking respondents aged 20–85; Hindi kinship terms distinguish seniority and lineage unusually precisely, and replace first names to avoid the disrespect a bare name carries | 2021 | subject ✓ peer-reviewed ✓ open ✓ swap ✓ |
| 3 | [Srivastava, Bali & Choudhury, CALCS Workshop 2020](https://aclanthology.org/2020.calcs-1.5/) | Intra- and inter-sentential script-mixing both occur among Hindi–English bilingual Twitter users; script can be used to emphasise a phrase or disambiguate a word's meaning | May 2020 | subject ✓ peer-reviewed ✓ open ✓ swap ✓ |
| 4 | [Kumar & Dharurkar, *Bhasha* 4(1), Edizioni Ca' Foscari](https://edizionicafoscari.unive.it/en/edizioni4/riviste/bhasha/2025/1/revisiting-passivity-and-politeness-in-selected-in/) | Fresh survey data from near-native Hindi speakers whose L1s are Eastern Indic languages; speakers familiar with explicit honorific marking often perceive modal forms as **more** polite than passives, so politeness judgements in Hindi vary by the speaker's own first language. CC BY | 1 Jul 2025 | subject ✓ peer-reviewed ✓ open ✓ swap ✓ |
| 5 | [Mukherjee et al., EMNLP 2025 / arXiv:2501.03479](https://arxiv.org/abs/2501.03479) | Across 10,000 Hindi and Bengali Wikipedia articles, men are addressed with honorifics more often than women, more prominently in Hindi; six LLMs probed over 1,000 balanced entities diverged from Wikipedia honorific usage | 7 Jan 2025 (rev. 16 Oct 2025) | subject ✓ peer-reviewed ✓ open ✓ swap ✓ |

Plus one Wikipedia link (Devanagari) for entity disambiguation only, inside the 0–2 budget.

**Sourcing caveats, recorded in `auditReport.failed`:**

- **Source 4 was swapped mid-run.** The first pick was Del Maschio et al. on L1 vs L2
  emotional processing (*Frontiers in Behavioral Neuroscience*, 7 Aug 2024). It failed the
  swap test — it is about first-language emotion in general and would sit unchanged in the
  Gujarati, Kannada, Punjabi or Telugu post in this batch — and frontiersin.org had reached
  4 posts. Replaced with the Bhasha article, which is Hindi-specific and on a domain no
  sibling uses. This closed both problems: **all five sources now pass the swap test**, and
  frontiersin.org drops to 3 posts, inside the cap.
- Source 1 was verified from its open landing page — Czech abstract, keyword list, full
  reference list — not the English PDF full text, which would not extract here. The claim
  attributed to it is confined to what that abstract states.
- **Domain caps, counted across all 10 sibling files after they landed.** The URL half
  passes: all five URLs are unique to this post. The domain half fails twice —
  `aclanthology.org` in **4** posts (2027-quotes, hindi, kannada, punjabi) and `arxiv.org`
  in **7** posts (2027-quotes, 2027-wishes, greetings-online-free, gujarati, hindi, kannada,
  punjabi), both over the 3-post cap. Every agent picked a *different* paper, so this is an
  emergent batch-level collision, not a repeated citation. One contribution was already
  removed (the Frontiers swap above). The ACL script-mixing paper and the EMNLP honorifics
  paper are kept because they are the only sources carrying the script and gender-marking
  claims for a Hindi keyword. **The orchestrator must arbitrate which posts give up
  `aclanthology.org` and `arxiv.org`** — this post is the one that can least afford to.
  Recorded as a failure in `auditReport.failed`.

**Sources deliberately not used:** nature.com/articles/s41599-024-03058-6 (Hinglish
code-mixing, HSS Communications 2024) and pmc.ncbi.nlm.nih.gov — both returned
bot-challenge pages rather than content, and a source that cannot be fetched cannot be
verified. The NUS CLaSIC 2014 honorifics PDF also would not extract. No government or
context statistic was used at all, so the "at most 1" allowance is unspent.

---

## Phase 0 — first-party data note

`content/facts.md` refreshed 2026-08-25. **There is no rakhi-specific first-party data:**
`rakshabandhanpages` = 3 documents, `rakshabandhansisterpages` = 3, and rakhi template views
= 39 of 36,202 (0.1%). No statistic was computed from n=3. The post leads on the assigned
platform-wide fact — 44.2% of creators password-protect before sharing (1,315 of 2,973) —
because a wish addressed to one named person is behaviourally a private message, and the
password rate is the closest first-party evidence that creators treat these pages that way.
This substitution is recorded as a failure in the audit, not as a pass.

## Phase 5 — internal links and schema

- Internal links: `/happy-rakshabandhan-to-brother` (placed after the send-channel table
  establishes why real text beats an image) and `/templates` (in the timing section).
- **`/happy-rakshabandhan-to-sister` does not exist in `TEMPLATE_LINKS`** despite the batch
  brief listing it. Only the brother template is defined in `app/lib/prompt.ts`, so it was
  not used. Worth adding to `TEMPLATE_LINKS` if the page exists.
- `structuredData`: an `@id`-matched enrichment block on `<canonical>#post` carrying `about`
  (Raksha Bandhan, Q10266), four `mentions` (Hindi Q1568, Devanagari Q38592, T–V distinction
  Q1124935, Grammatical gender Q162378 — every QID verified against the Wikipedia and
  Wikidata APIs) and `citation` mirroring all five sources one-to-one; plus an `ItemList`
  mirroring the eight H3s in order. No renderer-built type emitted unmatched.

---

## Phase 8 — Source remediation (2026-08-26)

**The Phase 3 table above is superseded.** It records sources 3 and 5 as kept; both
are gone. Read this section for the list that is actually cited.

Trigger: the arbitration the Phase 3 note asked for. Measured across all 16 landed
files, `arxiv.org` stood at 7 posts and `aclanthology.org` at 4, and this post held
one of each. Lane **E** (Indian scholarship) was assigned, then **B**.

### Removed

| Removed | Why | Replaced by |
|---|---|---|
| `aclanthology.org/2020.calcs-1.5/` (Srivastava, Bali & Choudhury — script-mixing on Twitter) | `aclanthology.org` at 4 posts, one over cap | `shodhganga.inflibnet.ac.in/handle/10603/444347` (lane E) |
| `arxiv.org/abs/2501.03479` (Mukherjee et al. — honorific gender asymmetry) | `arxiv.org` closed batch-wide at 7 posts | `shodhganga.inflibnet.ac.in/handle/10603/677604` (lane E) |

Lane E delivered, as the allocation predicted it would for Hindi. `archive.org` was
available (one post used, one more permitted) and was not needed.

### The list as it now stands — all five re-fetched and re-read 2026-08-26

| # | Source | Lane | Verified against |
|---|---|---|---|
| 1 | Bhatt, *Linguistica Brunensia* 60(1–2), 49–60, 2012 | — | Open landing page, Czech abstract: the honorific system reflects "rodinnými vazbami, známostí, formálností, osobní blízkosti, společenského statutu, kasty" and is analysed morphologically, semantically and pragmatically. Pages 49–60 confirmed on the record. English PDF still will not extract |
| 2 | Suryanarayan & Khalil, *Russian Journal of Linguistics* 25(1), 125–146, 2021 | — | Full open text: "open-ended questionnaires with the participation of 70 respondents each of Syrian Arabic and Hindi … aged from twenty to eighty-five"; kinship categories "used to address an adult, who is status-superior to avoid the disrespect brought by using first names"; data sectioned by seniority |
| 3 | Poonam, *A case study of Hindi English hybridized verbs on Twitter*, PhD, Panjab University | E | Open Shodhganga record: Researcher Poonam, guide Deepti Gupta, **Completed Date 2020**, keywords Code switching / Contact linguistics / Sociolinguistics / Twitter / Verbs; abstract covers inflectional and derivational morphology of verbs and the sociolinguistic analysis by country, gender and professional background |
| 4 | Kumar & Dharurkar, *Bhasha* 4(1), Edizioni Ca' Foscari | — | Full open abstract; the record states "Submitted: Feb. 6, 2025 \| Accepted: May 12, 2025 \| **Published July 1, 2025**", CC BY. "speakers of EILs – familiar with explicit honorific markings – often perceive modal…" |
| 5 | Kodali, *Computationally Code-Mixing Bahut Challenging Hai*, PhD, IIIT Hyderabad | E | Open Shodhganga record, Completed Date 2025: "we introduce CLINE, a large-scale dataset containing English Hindi code-mixed sentences annotated with human judgments on their acceptability. Through empirical analysis, we show that exis…" — the record truncates mid-sentence, and nothing beyond this is claimed |

### Date correction made in this pass

Source 3 was recorded as `publishedDate: "2022"` and described in the body as
"awarded 2022". The Shodhganga record states **Completed Date: 2020** and carries no
award date, so 2022 was not verifiable from the source. Corrected to 2020 in
`batchMeta.sources`, in the `citation` block and in both places in the body.

### Also changed in this pass

- `The angle statement is honestly answerable` moved from `passed` to `failed`. The
  angle is the per-wish gender and register labelling, and every Devanagari line
  carrying it is machine-composed; the five sources attest that Hindi marks
  honorifics and gender this way, not that these sentences do it correctly. Closes
  on a Hindi-reading reviewer, before publish.
- `honestAssessment` updated from two unclosed weaknesses to three.

Domain use after remediation: `shodhganga.inflibnet.ac.in` ×2 URLs, 1 post;
`journals.phil.muni.cz`, `journals.rudn.ru`, `edizionicafoscari.unive.it` one post
each; `en.wikipedia.org` ×1 entity link. **Zero** sources on any closed, banned or
at-ceiling domain. Word count was unaffected — both replacements were the same
length in the body as what they replaced.

# Research brief — `i-miss-you-in-vietnamese`

- **Keyword:** `miss you in vietnamese anh nho em`
- **Batch:** 2026-09-25-miss-you-30 (wave 2, row 19)
- **Category:** `miss-you-across-miles` (verified against the live Strapi categories API, id 8, "Miss You, Across Miles")
- **Templates:** `/missyou-gf` (mandatory), `/catch`, `/templates`
- **Slug check:** `filters[slug][$eq]=i-miss-you-in-vietnamese` returns `total: 0` — free.
- **Language code:** verified at `iso639-3.sil.org/code/vie` — `vie`, Vietnamese, Status **Active**, Code Sets 639-2 and 639-3, 639-1 equivalent `vi`, Scope **Individual**, Type **Living**. Not taken from any brief.

---

## Phase 1 — SERP analysis (measured, and partial)

`SERPS-WAVE2.md` holds six URLs for this keyword. All six were attempted on 2026-09-25.

| # | URL | Fetch result | Words | Title as served |
|---|---|---|---|---|
| 1 | blog.vietnamteachingjobs.com/i-miss-you-in-vietnamese/ | **200 — read in full** | 1,427 | "I miss you" in Vietnamese: Expressions and Interesting Usage |
| 2 | howtosayguide.com/how-to-say-i-miss-you-in-vietnam/ | **FAILED** — DNS `ENOTFOUND` in sandbox | — | — |
| 3 | hinative.com/questions/23944019 | **FAILED** — HTTP 403 Cloudflare | — | "Just a moment..." |
| 4 | hinative.com/questions/1203557 | **FAILED** — HTTP 403 Cloudflare | — | "Just a moment..." |
| 5 | howtosayguide.com/how-to-say-miss-you-in-vietnamese/ | **FAILED** — DNS `ENOTFOUND` in sandbox | — | — |
| 6 | vnet.glosbe.com/vi/en/anh%20nhớ%20em | **200 — read in full** | 239 | anh nhớ em in English - Vietnamese-English Dictionary \| Glosbe |

**On the two DNS failures — this is my environment, not the site.** `host howtosayguide.com`
from the host OS returns `142.132.133.130` with nameservers `dns1/dns2.turhost.com`. The
execution sandbox cannot resolve it, and a direct request to the IP with a `Host` header
timed out (`UND_ERR_CONNECT_TIMEOUT`). A PolterTab retry through the user's real browser
timed out at 30s and was abandoned rather than disturb a live session. **No claim in the
post describes those two pages.**

### Counts, over the 2 results actually read

| Question | Count |
|---|---|
| Explain the Vietnamese pronoun / kinship system | **1 of 2** (and it does so incorrectly) |
| Give any form other than `anh nhớ em` | **2 of 2** |
| Warn that the phrase is gendered / age-ordered | **1 of 2** |
| Mention that `nhớ` also means "remember" | **0 of 2** |
| Mention diacritics / that `nho` is a different word | **0 of 2** |
| Failed to fetch | **4 of 6** |

### Result 1 in detail — blog.vietnamteachingjobs.com

1,427 words. Structure: meaning → "most common way" → family/friends → romantic → tone
guide → FAQs. Direct answer is in the first section. No author byline, no dates on any
claim. Optimising for Vietnamese-language learners, with a jobs-board CTA above the fold.

### Result 6 in detail — Glosbe

239 words. Glosses `anh nhớ em` as "i miss you" with a Vietnamese note,
`cảm xúc của hai người yêu nhau khi xa nhau` (the feeling of two people in love when
apart) — so it does mark the phrase as romantic, but explains nothing about who says it.
Lists `em nhớ anh` under "Phrases similar", **untranslated**. Offers machine output behind
a "Show algorithmically generated translations" toggle (Glosbe Translate, Google Translate).

---

## The checkable error in the #1 result

The page writes:

> The difficult word to say is "nhớ" (miss): it belongs to a sharp tone, **pronounced with
> a falling then rising tone** (like saying "huh?" with a questioning tone)

Wiktionary's `nhớ` entry gives Hà Nội **[ɲəː˧˦]**, Huế **[ɲəː˨˩˦]**, Saigon **[ɲəː˦˥]**.
The Hanoi and Saigon contours are rises. "Falling then rising" is the dipping contour of a
**different tone** (`hỏi`, a different diacritic on a different word). The same page
contradicts itself two paragraphs earlier — "the sharp sound is high and short".

**Two more, on the same page:**

1. It glosses both halves of the pair as *you*: "the placement of 'em' (you – younger/female)
   and 'anh' (you – older/male)". Under that gloss `anh nhớ em` reads "you miss you".
   Wiktionary's `anh` entry has four **first-person** senses before the two second-person ones.
2. It gives two different headline answers to its own question: "'I miss you' means
   'Tôi nhớ bạn' in Vietnamese" in one section, then "The most straightforward and commonly
   used phrase for 'I miss you' in Vietnamese is 'Anh nhớ em'" in the next, with nothing
   saying the two are not interchangeable.

---

## Phase 2 — Gap

**Table stakes:** give `anh nhớ em`; give `em nhớ anh`; give some intensifier
(`rất nhiều`, `quá`, `nhiều lắm`); say something about tones.

**The gap, in one line:** *no page on this SERP says who `anh nhớ em` belongs to and shows
the evidence.* One asserts the gender dynamic in a single sentence and mis-glosses both
words while doing it; the other treats the phrase as a dictionary headword.

**Fan-out sub-queries → H2s:**
1. what does `anh nhớ em` literally mean → *What anh nhớ em says, word by word*
2. can `anh nhớ em` mean "do you miss me" → *The same three words can also mean "do you miss me?"*
3. which form do I use for X → *Which pair belongs to you* (the comparison table)
4. does `nhớ` mean remember or miss → *Nhớ is the word for "remember" too*
5. does the accent matter / `anh nho em` spelling → *Anh nho em and anh nhớ em are different sentences*
6. are the pages that rank correct → *What the pages ranking for this phrase say*
7. how do I actually send it → *Putting one Vietnamese line on an English page*

---

## Every form printed, with the instrument that verified it

| Form | Speaker → addressee | Instrument |
|---|---|---|
| `anh nhớ em` | older male → younger woman/partner | Wiktionary `anh` pronoun senses 1–4 ("I/me, your boyfriend older than you"; "(endearing) I/me, your husband"); Wiktionary `em` pronoun sense 1; Tatoeba 10233484 `Anh nhớ em quá.` = "I miss you very much." |
| `em nhớ anh` | younger woman → older man/partner | Wiktionary `em` pronoun sense 1; Tatoeba 10233486 `Em nhớ anh quá.` |
| `Anh nhớ em không?` | **reversed** — younger speaker → older male | Tatoeba **9814527**, translated "Do you miss me?" |
| `tôi nhớ bạn` | anyone → peer/friend, polite distance | Wiktionary `I miss you` phrasebook (the **only** Vietnamese translation it carries, and a redlink); Wiktionary `tôi` usage note; Tatoeba 12528568 = "I miss you." |
| `chị nhớ em` | older woman → younger person | Wiktionary `chị` pronoun sense 5 "(familiar) I/me, a female who's (presumably) slightly older than you". **Tatoeba: 0 sentences.** Printed as grammar and labelled as such. |
| `con nhớ mẹ` | child → mother | Wiktionary `con` pronoun sense 1 "I/me (used by children when talking to their parents)"; `mẹ` pronoun sense 2 "you, my mother"; Tatoeba `con sẽ nhớ mẹ lắm.` = "I will miss you." |
| `bà` (grandmother) | — | Wiktionary `bà` pronoun: "you, my grandmother"; "(formal) you, a woman about 40 or older". Named as the correct term; **no full sentence printed**, because `cháu` was not fetched. |
| `nỗi nhớ` | — | Wiktionary `nhớ`, collocation glossed "feeling of longing" |
| `nhớ nhà` / `nhớ thương` | — | Wiktionary `nhớ`, "to miss home" / "to miss dearly" |

**Diacritics.** `nho` (no accent) is a separate Wiktionary entry: Vietnamese noun **"grape"**
(`nho khô` = raisins) and the lowercase form of `Nho` "Ruist; Confucianist". It is also the
ISO 639-3 code for Takuu. `anh` is separately the ISO 639-3 code for **Nend**.

**The miss/remember measurement.** Tatoeba `api_v0` search, `from=vie`, 2026-09-25: **153**
Vietnamese sentences contain `nhớ`. Of the **first 80** pulled (paged 10 at a time; the full
153 timed out and the sample is reported as a sample): **42 remember, 28 miss, 1 both,
9 neither.** String counts: `anh nhớ em` 8, `em nhớ anh` 8, `tôi nhớ bạn` 16,
`chị nhớ em` 0, `em nhớ chị` 0, `bà nhớ` 0.

---

## Corrections to my own task prompt (BRIEF.md §0)

1. **"Vietnamese has no generic pronouns" — WRONG.** Wiktionary's `tôi` usage note: "*Tôi*
   is a generic way to refer to oneself"; the speaker "can employ generic words such as
   *tôi* and *ta*, but note that these are considered stiff." Corrected in the body.
2. **"`anh` = older male speaker; `em` = younger addressee" — too strong.** Both words are
   person-neutral. `anh` has 4 first-person and 2 second-person senses; `em` "refers to any
   person (oneself, the addressee, or any third person)". Tatoeba 9814527 attests the
   reversal. Corrected in the body.
3. **"12 miss-you lines across 43 posts, used by 13–39 each" — off.** Counted directly on
   2026-09-25: **48** sibling files, range **16–48**. Least-reused pair (16 each) opens the post.
4. **Cap status.** My prompt said `arxiv.org` was at 2 with one slot left. `capcheck.mjs`
   run on 2026-09-25 reports `arxiv.org` at **3 — closed**, alongside `doi.org` (4) and
   `journals.plos.org` (3). Not used here either way.
5. **Confirmed as stated:** `nhớ` is both "miss" and "remember"; diacritics are contrastive;
   Vietnamese *is* listed in the Wiktionary "I miss you" phrasebook.

---

## Phase 3 — Sources and what was not reachable

**Used (6).** Five reference instruments (4 Wiktionary entries, 1 Tatoeba sentence) plus one
peer-reviewed open-access paper:

- `europepmc.org/article/PMC/PMC10828962` — *On the division of labor in the maintenance of
  intersubjectivity: insights from the study of other-initiated repair in Vietnamese*,
  **Frontiers in Sociology**, 2024-01-08. Video recordings of casual conversation among
  Vietnamese **same-generation peers**; "participants continuously display an orientation to
  relations of relative seniority through the selection of terms used to accomplish
  interlocutor reference." **Abstract only** (Europe PMC REST); full text not parsed.
  Linked at the cap-exempt `europepmc.org` host, so `frontiersin.org`'s count is untouched.

**Found, read, and deliberately excluded:** Sahoo 2013, *Pronouns, Address Forms and
Politeness Strategies in Odia*, Acta Linguistica Asiatica 3(1), 2013-04-11, OA
(`journals.uni-lj.si/ala/article/view/65`). Good abstract, wrong subject — it fails the swap
test and would have been filler.

**Not reachable (recorded rather than worked around):**
- *A Study on The Concept of Relatives in Vietnam and the Use Pattern of Vietnamese Address
  Terms Using Kinship Terms* (2021, doi:10.33645/cnc.2021.01.43.1.765) — **not OA** per Unpaywall.
- *Comparatives Study of Kinship Terms in Thai, Vietnamese and Indonesian Language*
  (SCITEPRESS 2018, doi:10.5220/0010005202110215) — flagged OA, **no abstract in Crossref**,
  PDF does not parse here.
- Europe PMC returned **0** OA hits for `TITLE:Vietnamese AND TITLE:pronoun`,
  `ABSTRACT:Vietnamese AND ABSTRACT:"kinship term"` and
  `ABSTRACT:Vietnamese AND ABSTRACT:"address term"`.

**Terms tried** (all via `findpapers.mjs`, Crossref + Europe PMC, **zero WebSearch calls**):
`Vietnamese kinship terms of address pronouns`; `Vietnamese personal pronouns politeness
address`; `kinship terms address Southeast Asia politeness pronoun avoidance`;
`Vietnamese language emotion expression longing diaspora`.

---

## Cannibalisation (BRIEF §2)

No live SubhSandesh page targets Vietnamese: no slug containing `vietnam` appears in
`content/keywords/2026-09-25-miss-you-global/site-baseline.md` (the owned Indian-language
territory there is hindi, marathi, tamil, telugu and others), and no sibling file in this
batch mentions Vietnamese.

**The hub was fetched.** `subhsandesh.in/blog/i-miss-you-in-different-languages` (5,549
words) **does have a Vietnamese row**: `Vietnamese: Anh nhớ em / Em nhớ anh (ahn nyuh em /
em nyuh ahn)`. It gives both pronoun-ordered forms — more than most pages — but says
nothing about which is yours, gives no neutral form, and does not mention `nhớ`'s second
sense. This post is the depth under that row and links up to it without restating the table.

---

## First-party data

Least-reused pair used in the opening (both at 16 of 48 sibling posts): the **2.6-hour**
median edit gap and **88.8%** published-and-shared. Also used: 88-word median letter,
13.6% voice note, 64.5% hug-tap rate, 92.1% open-when rate, 47 city pairs, 214 pages.

Mandatory caveats carried **in body prose**: the city field is a picker with defaults
(so 47 pairs is an option set, not sender choice); n=214 over two months from 2026-07-28,
so no seasonal claim; the database records which template was opened and never who received
the page. `viewCount` is not cited, so that caveat does not arise.

**The honest limit:** nothing in `facts-snapshot.md` is Vietnamese-specific, and the post
says so. Differentiation from the first-party data is thin. It closes with a new probe
segmenting miss-you pages by the language of the letter body — not with more writing.

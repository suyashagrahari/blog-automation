# Research brief — `i miss you in sign language`

Batch `2026-09-25-miss-you-30` · slug `i-miss-you-in-sign-language` · drafted 2026-09-25

---

## Phase 1 — SERP, run not predicted

One WebSearch on the exact keyword, 2026-09-25, US-served. Ten results returned:

| # | Domain | What it is | Treated as |
|---|---|---|---|
| 1 | www2.parklanejewelry.com | jewellery retailer running a "Ultimate Guide" SEO post | competitor-adjacent content farm — not read, not cited |
| 2 | aslbloom.com | ASL learning app, sign page | commercial substitute — not cited |
| 3 | signingsavvy.com | subscription ASL video dictionary | commercial — not cited |
| 4 | lifeprint.com | Bill Vicars' ASL lesson page | teaching site — not cited |
| 5 | lead-academy.org | online course provider blog | commercial — not cited |
| 6 | handspeak.com | subscription ASL dictionary | commercial — not cited |
| 7 | facebook.com (group post) | user post | not a source |
| 8 | pinterest.com | sticker pin | not a source |
| 9 | pocketsign.org | ASL app | commercial — not cited |
| 10 | signlanguage-translator.com | translator tool blog | commercial — not cited |

**No AI Overview or featured snippet appeared in the result set.** No university,
no government body, no lexical database and no peer-reviewed work appears anywhere
on page one. `asl-lex.org`, `bslsignbank.ucl.ac.uk` and `islrtc.nic.in` are all
absent.

**The engine's own synthesis of those pages is the clearest evidence of the gap.**
It answered "how to say I miss you in sign language" with a single ASL recipe and a
single BSL recipe, and never once asked which signed language the reader meant. It
also asserted, for BSL, "place two fingers on your throat while signing miss".
BSL SignBank — UCL's national BSL database — returns two entries for the English
word *miss*, and **neither of them means to long for someone** (see Phase 3).

Per `references/competitors.md` none of the ten was linked, cited or paraphrased.
Nothing in the drafted post is derived from any of them.

## Phase 2 — Gap

**Table stakes** (what a complete page must have): the ASL sign people mean; the
fact that facial expression matters; something for BSL; a pointer to video.

**The gap, and it is the whole post:**

1. **Nobody on the SERP names the language before naming the sign.** ASL, BSL,
   Auslan, ISL, LSF and NGT are distinct languages; ASL and BSL are not even
   related, and their manual alphabets differ (BSL two-handed, ASL one-handed).
2. **Nobody sources a sign to a named lexical database.** Every page on the SERP
   asserts a description. None cites a dictionary with phonological coding.
3. **Nobody treats Indian Sign Language at all**, on a query whose Indian search
   volume is the reason this site is writing it.
4. **Nobody states the hard limit** — that a still description cannot specify a
   sign, because signs are movement.
5. **Nobody separates 🤟 (I-LOVE-YOU) from "I miss you"**, and readers conflate them.

**Angle:** the only post that answers this from ASL-LEX's own phonological coding —
MISS is coded at the **chin**, not the nose; it has the **highest phonological
neighbourhood density of all 2,723 signs in the database (50, against a median of
3)**; and **three signs with three unrelated meanings share its exact coded form** —
paired with BSL SignBank's two "miss" entries, ISLRTC's video-only ISL dictionary,
and the first-party finding that 13.6% of miss-you senders record a voice note, the
one field on the page a Deaf recipient cannot use.

**Fan-out sub-queries → H2/FAQ:** which sign language · is there one sign for "I
miss you" · what does 🤟 mean · ASL MISS vs MISS-the-bus · BSL vs ASL · ISL sign ·
do I need the facial expression · can I learn it from a photo · is it rude for a
hearing person to use it.

## Phase 3 — Sources, all fetched and parsed in this session

### 1. ASL-LEX 2.0 — `asl-lex.org` (peer-reviewed lexical database; fresh domain)

The visualisation's own data file, `https://asl-lex.org/visualization/data/sign_props.json`,
was fetched and parsed in full: **2,723 records**, matching the project title on OSF.
Fields quoted below are the file's own field names.

**`miss` — Code G_02_049**
```
Handshape.2.0 = "1"            SelectedFingers.2.0 = "i"       Flexion.2.0 = "FullyOpen"
ThumbPosition.2.0 = "Closed"   SignType.2.0 = "OneHanded"      Movement.2.0 = "None"
RepeatedMovement.2.0 = 0       MajorLocation.2.0 = "Head"      MinorLocation.2.0 = "Chin"
Contact.2.0 = 1                SignDuration(ms) = 834
SignFrequency(M) = 5.423 (N=27)    Iconicity(M) = 2.875 (N=32), IconicityType "Arbitrary"
Iconicity_ID = "TO MISS SOMEONE"   LexicalClass = "Verb"
SignBankAnnotationID = "MISS"
SignBankEnglishTranslations = "disappointed, miss, pine for, yearn for"
Neighborhood Density 2.0 = 50      Phonological Complexity = 1
```

**THE TASK PROMPT SAID "THE ONE MADE AT THE NOSE". ASL-LEX CODES IT AT THE CHIN.**
`MinorLocation.2.0` is `"Chin"`, not `Nose`. `MinorLocation.2.0Frequency` = 0.037,
and a direct count confirms 101 of 2,723 signs (3.7%) are coded at the chin. This is
recorded in `structuralLimitations` and corrected in the body.

**`missing` — Code E_02_017.** A *different* sign, and its SignBank gloss is **GONE**:
translations "depleted, empty, gone, missing, pass away, used up". Asymmetrical,
different handshape, MajorLocation "Hand" / MinorLocation "Palm" → SecondMinorLocation
"HandAway", Movement "Straight", Contact 0, Iconicity 2.0. Nothing to do with longing.

**`I_love_you` — Code F_01_102.** Handshape `"ily"`, SelectedFingers `"ip"` (index +
pinky), ThumbPosition "Open", OneHanded, Movement "Straight", RepeatedMovement 1,
MajorLocation/MinorLocation "Neutral", Contact 0, **`Initialized.2.0 = 1`**.
SignBankAnnotationID "I-LOVE-YOU"; SignBankEnglishTranslations "I love you, ILY, love".
**"Miss" is not among them.** Iconicity 3.848 (N=33), type "Arbitrary".
It differs from `miss` on *every* coded parameter.

**The confusability finding.** `Neighborhood Density 2.0` for `miss` is **50 — the
single highest value in the database**. Sorted descending, the top of the list is
`miss` 50, then seven signs tied at 47 (`humble`, `promise`, `blood`, `tomato`,
`true_business`, `plain`, `dedicate_1`). Across the 2,723 records the median is 3
and the mean 5.0.

Fourteen signs are coded with handshape "1" at MajorLocation Head / MinorLocation
Chin: `dormitory, desert, serious, really, lonely, dryer, cleftchin, famous, dry,
red_faced, sour, miss, disappoint, single`. Of these, **`serious` (B_01_071) and
`sour` (F_03_060, SignBank gloss BITTER) carry byte-identical values to `miss` on
every phonological field** — handshape 1, selected finger i, FullyOpen, thumb
Closed, OneHanded, Movement None, RepeatedMovement 0, Head/Chin, Contact 1.
`lonely` (B_03_078) differs from `miss` **only in movement** (Straight, repeated).

**That is the proof that prose cannot specify a sign**, and it is measured, not
asserted.

Formal citation of the database: Sevcikova Sehyr, Z., Caselli, N. K.,
Cohen-Goldberg, A. M., & Emmorey, K., *The ASL-LEX 2.0 Project: A database of
lexical and phonological properties for 2,723 signs in American Sign Language*.

### 2. OSF project record — `https://osf.io/zpha4/` (fresh domain)

Fetched through the OSF API. Title: "ASL-LEX 2.0 Project: A database of lexical and
phonological properties for 2723 signs in American Sign Language". `date_created`
2020-05-14. Independently confirms the 2,723 count used above and supplies the
project's own suggested citation.

### 3. BSL SignBank — `bslsignbank.ucl.ac.uk` (UCL DCAL; fresh domain)

`/dictionary/search/?query=miss` returns **"4 full or partial matches"**: `miss`,
`missile`, `missionary`, `missioner`. The two entries reached from `miss`:

- `/dictionary/words/miss-1.html` — **Keywords: disappointment, disappoint,
  disappointed, miss**
- `/dictionary/words/miss-2.html` — **Keywords: miss, err, error, mistake, wrong,
  misunderstand, misunderstanding**

**Neither carries the "long for someone" sense.** Searches for `longing`, `yearn`,
`absent` and `want` return no entry at all; `lonely` returns two (`lonely-2`
keyworded simply "lonely"); `love` returns two. Both `miss` entries publish a video
and no written description, which is the point.

### 4. PLOS ONE — non-manual markers are grammar

Oomen, M., Esselink, L. & Roelofsen, F. (2026), "Polar questions in Dutch Sign
Language (NGT): A production experiment", *PLoS One* 21(7): e0354015.
Received 2025-10-17, accepted 2026-07-02, **published 2026-07-29**. CC-BY, open
access, full article page fetched and read.

From the abstract, verbatim in substance: the study identifies a range of polar
question forms differing in polarity marking, presence of question tags and **use of
non-manual markers**; and, "contrary to expectation given the previous literature on
polar questions in sign languages, **raised eyebrows are not consistently used**"
— brow lowering is also common — leading the authors to suggest that **a head or
body forward position, not raised eyebrows, is the main polar question marker in
NGT.**

Two things this buys: non-manuals do grammatical work (peer-reviewed, open access),
and the field is still arguing about *which* non-manual does *what* — so a listicle
that says "just add a sad face" is not simplifying a settled answer.

`journals.plos.org` stood at 2 of 3 posts when capcheck was run; this is the last
slot, and capcheck was re-run immediately before saving.

### 5. ISLRTC — `islrtc.nic.in` (Government of India; fresh domain)

`/about-department/about-islrtc/` (Publish Date: July 8, 2024) fetched in full.
ISLRTC was established **28 September 2015** as a Society under the Department of
Empowerment of Persons with Disabilities, MSJE, after the Union Cabinet approved it
on 22 September 2015 — following an earlier IGNOU-hosted centre (foundation stone
4 October 2011, closed 2013) and a 2015 attempt to merge it into AYJNIHH that the
Deaf community protested. The page also states: **"As per the 2011 Census, the total
population of deaf persons in India numbered about 50 lakh."** That is this post's
**one and only generic context statistic**, per the BRIEF.

`/isl-dictionary/` fetched. The ISL Dictionary is published as **video** — a
dictionary website, a YouTube channel, a Google Drive folder and a dataset on
`data.gov.in` (catalog page also fetched: contributor Ministry of Social Justice and
Empowerment / DEPwD, released under NDSAP, Published On 07/02/2024, Updated On
18/02/2025). **There is no text gloss list with phonological coding.** The ISL
dictionary's own hosting endpoint, `divyangjan.depwd.gov.in`, timed out on two
attempts from this session — recorded rather than hidden.

**Consequence, and it is the honest one: I could not source an ISL sign for "I miss
you" to a named dictionary entry, so the post does not print one.** It sends the
reader to ISLRTC's video dictionary instead.

### 6. Wiktionary ASL entries — `en.wiktionary.org` (cap-exempt)

Wiktionary titles ASL entries by sign notation. `Category:American Sign Language
lemmas` was enumerated (100 returned) and individual entries fetched:

- `Claw5@NearNose-PalmBack` (ANGRY) — production note opens: *"This one-handed ASL
  sign is produced with an angry scowl."*
- `1@Nose-FingerBack 1@FromNose-FingerForward` (DON'T-MIND) — *"usually made while
  twisting the head from side to side (the typical 'no' headshake)"*.
- `Y@InsideChesthigh-PalmDown Sidetoside` (SAME-AS) — carries Stokoe notation `ØY≷`.

**The face and head are written into the lexical entry itself**, which is the
cleanest available demonstration that non-manuals are not decoration.

Also fetched: the English entry `miss`, which lists the "failure to physically hit"
noun sense and, separately, verb sense 11, "to become aware of the loss or absence
of; to feel the want or need of… to feel sadness at the absence of somebody". Two
senses of one English word.

**A negative result worth recording:** a full-text search of Wiktionary for an ASL
entry glossed MISS returns nothing. Wiktionary's ASL coverage is roughly a hundred
lemmas; MISS is not among them. The post says so rather than implying Wiktionary
backs the ASL claim.

### Fetched, verified, deliberately NOT counted in `sources`

`https://unicode.org/Public/emoji/latest/emoji-test.txt`, header dated 2026-04-30,
was fetched and grepped. `U+1F91F` is named **`love-you gesture`**, Emoji version
E5.0. Cap-exempt, but left out of `batchMeta.sources` to stay inside the 4–6 rule
and because the sibling post `miss-you-emoji-meaning` already carries the Unicode
layer for this batch. The fact is stated in the body with Unicode named in prose.

### Rejected

- Every SERP result (Phase 1 table) — competitor rule.
- `europepmc.org` / `pmc.ncbi.nlm.nih.gov` — at cap (3 posts). Several strong
  candidates were on Europe PMC and were abandoned for this reason.
- `link.springer.com`, `academic.oup.com`, `degruyterbrill.com` — all three returned
  bot challenges (403 / "Client Challenge" / "verify that you're not a robot"), so
  the ASL-LEX 1.0 and 2.0 journal articles and the SignGram Blueprint could not be
  read. Nothing is cited from any of them.
- `aslsignbank.com` — reachable but requires a login for sign records.

## Phase 4–5 — build decisions

- Category `miss-you-across-miles` (confirmed live in Strapi).
- Templates `/missyou-gf` (mandatory) + `/watch`. `/watch` is chosen on merit, not
  to satisfy the rule: this is the one keyword in the batch where the correct
  message format is *video*, because a sign cannot be written. `/watch` is the only
  `oneOfLinks` entry that gives a video a page of its own.
- Link up to the live hub `/blog/i-miss-you-in-different-languages`. That page was
  fetched: ~5,549 rendered words, 50+ spoken languages, and **the string "sign
  language" appears zero times in it.** Measured, not assumed.
- Slug checked free against Strapi (`filters[slug][$eq]` returned `[]`).

## Signs sourced vs signs refused

| Sign | Language | Sourced to | Printed? |
|---|---|---|---|
| MISS (pine for, yearn for) | ASL | ASL-LEX 2.0, G_02_049 | Yes — as the database's coded parameters, with the correction that it is the chin |
| GONE ("missing") | ASL | ASL-LEX 2.0, E_02_017 | Yes — to separate the senses |
| I-LOVE-YOU / 🤟 | ASL | ASL-LEX 2.0, F_01_102 + Unicode name | Yes — to state what it does *not* mean |
| LONELY | ASL | ASL-LEX 2.0, B_03_078 | Yes — as the minimal-pair contrast |
| "miss" (2 entries) | BSL | BSL SignBank, miss-1 / miss-2 | Keyword sets only; **no form description printed** — SignBank publishes video, not prose |
| MISS-the-bus / "failed to catch" | ASL | **nothing** | **Refused.** ASL-LEX 2.0 has no entry for that sense. Not described. |
| "I miss you" | ISL | **nothing citable** | **Refused.** ISLRTC publishes video only; reader is sent there. |
| "I miss you" | any | — | **Refused as a single lexical sign.** No database consulted lists one. |

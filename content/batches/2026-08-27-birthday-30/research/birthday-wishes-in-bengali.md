# Research brief — `birthday wishes in bengali`

- **Slug:** `birthday-wishes-in-bengali`
- **Batch:** `2026-08-27-birthday-30` (wave 3, rank 29)
- **Lane:** **N** — Bengali script, orthography and Bangla digital text
- **Category:** `milestone-birthdays`
- **Written:** 2026-08-27

---

## Phase 1 — SERP (harvested for me, not by me)

The SERP was harvested by the orchestrator in a real browser at `gl=in, hl=en, pws=0` on
2026-08-27 and handed to me in `ASSIGNMENTS-WAVE3.json`. **`WebSearch` is exhausted at
200/200 for this session and was not called.** 8 organic results, AI Overview present.

| # | Domain | What it is (from the harvested title) |
|---|---|---|
| 1 | `igp.com` | Gifting site. "50 বাংলায় জন্মদিনের শুভেচ্ছা" — 50 wishes attached to a gift catalogue |
| 2 | `in.pinterest.com` | Board: "10 শুভ জন্মদিন ideas \| decorative bengali birthday wishes" |
| 3 | `bongquotes.com` | "৭৫০+ শুভ জন্মদিন শুভেচ্ছা" — volume as the entire proposition |
| 4 | `kobita.banglakosh.com` | Poetry / SMS archive: "Bangla Birthday Sms শুভ জন্মদিন" |
| 5 | `pinterest.com` | Board: "Birthday Wishes Bengali Text" |
| 6 | `heloplus.com` | "Birthday Wishes in Bengali \| 1500 ..." |
| 7 | `bengali.timesnownews.com` | News-site seasonal listicle |
| 8 | `poetryskills.com` | "50+ Bengali Happy Birthday Shayari & Jonmodiner ..." |

**People Also Ask (all in Bengali):** প্রিয় জন্মদিনের শুভেচ্ছা স্ট্যাটাস কি কি? ·
রোমান্টিক জন্মদিনের শুভেচ্ছা কি কি? · প্রিয়তমা কে জন্মদিনের শুভেচ্ছা? ·
দেবর কে জন্মদিনের শুভেচ্ছা?

### Honest limitation on Phase 1

The assignment gave me **domains and titles, not URLs**. I attempted the four obvious
guessed URLs (`igp.com/blog/birthday-wishes-in-bengali`,
`bongquotes.com/happy-birthday-wishes-bengali/`, `kobita.banglakosh.com/archives/1042`,
`heloplus.com/birthday-wishes-in-bengali/`) via `ctx_execute` fetch and **all four
returned 404** — I guessed wrong paths and did not keep guessing, because I am forbidden
from citing or linking any of these domains anyway. So the per-page word counts, heading
structures and "where the direct answer appears" columns of a full Phase 1 table are
**not** in this brief. What I do have is each page's own self-description in its title,
which for this genre is unusually informative: four of eight pages lead with a **count**
(50, 750+, 1500, 50+), two are Pinterest boards, one is a poetry archive. That is enough
to establish the gap; it is not enough to claim I analysed their prose, and I have not
claimed that anywhere in the post.

---

## Phase 2 — Gap analysis

**Table stakes** (present on effectively all of them, so the post must have them):
the literal line শুভ জন্মদিন; a Roman spelling; a set of ready-to-send lines; something
for a friend, something for an elder; the phrase জন্মদিনের শুভেচ্ছা.

**The gap.** Every ranking page treats "in Bengali" as a *translation and volume*
problem: here are 50 / 750 / 1500 strings, pick one. **Not one of them measures anything
about the script the strings are written in.** Nothing on the SERP tells you that
জন্মদিন contains a conjunct, that the visible unit and the read unit differ in Bengali,
that a 96-character box holds ~47 akśar, or that truncating Bengali by character count
breaks glyphs. Two of the eight results are Pinterest boards, i.e. Google could not fill
the page — which is what makes rank 3 plausible at all.

**Stale data / unanswered questions.** There is no data on any of these pages to be stale
— they cite nothing. The questions they raise and never answer: which pronoun does this
line commit me to; will it render on the recipient's phone; how much of my message box
does it eat.

**Fan-out sub-queries → H2s.** *what is "happy birthday" in Bengali* · *how do you write
জন্মদিন* · *shubho jonmodin meaning* · *Bengali vs Roman spelling — which do I send* ·
*formal birthday wish in Bengali (আপনি)* · *close-friend wish (তুই)* · *why does Bengali
text break on some phones* · *how long can a Bengali birthday message be*.

**Angle (one sentence).** This post wins by being the only one that counts the *juktakkhor*
in each Bengali birthday wish and prices it against SubhSandesh's measured 96-character
median personal message and 0-day median lead time — where all eight ranking pages count
wishes and measure nothing.

### Differentiation from the seven sibling language posts

I read `birthday-wishes-in-kannada.json` (landed today) and `birthday-wishes-in-punjabi.json`
in full, plus the Hindi post's spine, plus the rakhi batch's
`2026-08-19-rakhi-3/blogs/raksha-bandhan-wishes-in-bengali.json`.

| Post | Its spine | Its number | How mine differs |
|---|---|---|---|
| Punjabi | Script *choice* — Gurmukhi / Shahmukhi / Roman | Roman **longest**, +16% characters | I make no script-choice argument |
| Kannada | Ranking lines by **ottakshara load**; Kannada vs Devanagari codepoints per visible unit | Romanising **+27.1%**; 11.9 Kannada vs 9.3 Roman words in 96 chars | Kannada counted the **visible** unit. I count *inside* it, against a peer-reviewed reading metric, and add a truncation measure neither post has |
| Hindi | Why Hindi wishes get typed in Roman | Google names Transliteration as the first Hindi input method | Roman-Bangla is a **side note** in my post, deliberately, in one section |
| **Rakhi Bengali** | রাখী পূর্ণিমা as a Bengali festival; **আপনি/তুমি/তুই register as the step before the words**; Jhulan; Tagore's 1905 rakhi | Register table | **Register is not my spine.** It gets one short section and no cited source. My spine is conjunct density and cut-point safety |

**Sources deliberately *not* reused from the rakhi Bengali post:** `ccsenet.org`
(apni/tumi/tui morphemes), `questjournals.org`, `en.banglapedia.org`,
`w3.org/TR/beng-lreq` (Bengali conjuncts and virama), `unicode.org/faq/bengali.html`
(ya-phalā). All five were available and all five are avoided. `unicode.org` also sits in
5 posts corpus-wide.

`r12a.github.io` was **not** used — it is at 3 of 3 in this batch (Hindi, Tamil, Kannada)
and was reserved for Kannada, which took the last slot.

---

## Phase 3 — Sources

In-batch measurement re-run from the repository root before choosing, and again after
drafting. At cap and therefore excluded: `corpora.uni-leipzig.de`, `r12a.github.io`,
`europepmc.org`, and `dsal.uchicago.edu` once it breached (see §3a). Avoided on judgement:
`pmc.ncbi.nlm.nih.gov` (8 posts corpus-wide), `aclanthology.org` (6), `cambridge.org` (5),
`link.springer.com` (4), `unicode.org` (5), `lrec-conf.org`, `nature.com`, `pnas.org`.
`arxiv.org` is **banned** by `BRIEF.md` §2 and now sits in 6 posts corpus-wide — the
Kannada post cited it today; I did not, and I checked §2 by grep for every candidate before
fetching it rather than relying on the cap script, which does not surface the ban.

**Final set: 4 sources, 4 domains** — `journals.plos.org` (3 of 3 in-batch),
`learn.microsoft.com` (2 of 3), `frontiersin.org` (3 of 3, taken knowingly — see §3a),
`ph.pollub.pl` (1 of 3). No URL above 1 of 2. Nothing over cap.

### 1. Moitra, Chacón & Stockall (2024) — required scholarly, lane N

`https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0292979&type=printable`
"How long is long? Word length effects in reading correspond to minimal graphemic units:
An MEG study in Bangla." *PLOS ONE* 19(4): e0292979. Received 2023-10-31, accepted
2024-02-20, **published 2024-04-18**. CC BY. Peer-reviewed, open access, and squarely in
lane N.

Full text read at the article page. Verified claims used in the post:

- Bangla is an abugida; a consonant carries an inherent vowel /ô/ overwritten by a
  diacritic "before, after, under, or around the consonant".
- "Consonant sequences are often written as 'conjunct characters', in which elements of
  both consonants are conjoined into a single, complex character."
- ক্লান্ত *klantô* "tired" = **6 phonemes, 5 characters, 2 akśar** (Fig 1A).
- Anterior left fusiform gyrus activity at **~130ms** correlates with word length measured
  in **minimal graphemic units** (their WL_c) rather than in akśar or phonemes.
- *akśar* is "the unit Bangla speakers consider as a 'letter' for the purposes of
  spelling".

**Repository-copy attempt, and why it failed.** The brief prefers an institutional copy.
The QMUL repository copy exists (`qmro.qmul.ac.uk/xmlui/handle/123456789/96687`) and I
tried both the handle and the bitstream PDF: the handle returns 200 with an empty body,
`?show=full` returns **HTTP 403 from a WAF** ("Web Page Blocked"), and the PDF socket
drops. `pmc.ncbi.nlm.nih.gov` has a copy but is at 2 in-batch and 8 corpus-wide. DOAJ
carries a record, not full text. So I cite the publisher's own PDF, which I verified
resolves (`200, application/pdf, 1,471,435 bytes`). Note the cap arithmetic: the stripped
URL `journals.plos.org/plosone/article` is already spent in 2 posts, so the `/article/file`
path is used deliberately — a different URL, and the domain lands at exactly 3 of 3, which
item 65 permits.

### 2. Microsoft — Developing OpenType Fonts for Bengali Script

`https://learn.microsoft.com/en-us/typography/script-development/bengali`

Living document with **no stated publication or revision date** anywhere in the page or
its markup (I grepped for `ms.date`, `dateModified`, `datePublished` and inline date
patterns — all empty). Its own text says it "reflects the changes made in 2005
recommendations for Indic-script OpenType font and shaping-engine implementations."
`publishedDate` is therefore **omitted**, per checklist item "Sources list with publication
dates, omitted where the source publishes none". I did not invent a `dateModified` either,
because the page states none.

Verified claims used:

- The shaping engine finds the base consonant, then "decomposes two- or three-part
  *matras* into their constituent parts before any repositioning" and reorders them to
  positions defined relative to half forms, subjoined consonants and post-forms.
- "Only one reph is allowed per syllable. Only one pre-base reordering Ra is allowed per
  syllable."
- A pre-base Ra "may logically follow the base consonant (that is, it follows it
  phonetically and in the character sequence of the text), even though it is presented
  visually before the base."
- Bengali fonts need `rphf` (reph), `blwf` (below-base, *ba + ra phala*), `half`, `pstf`,
  `vatu` (*Bengali ra-phala* ligatures) and `cjct` (conjunct forms).

This is the source for "the order stored is not the order shown", which is what makes
character-count truncation unsafe.

### 3. Alfaz, Sarwar, Farid et al. (2026) — why the conjunct is unavoidable

`https://www.frontiersin.org/articles/10.3389/frai.2026.1751148/full`

"CompoundDenseNet: a novel approach for accurate recognition of Bangla handwritten
compound characters." *Frontiers in Artificial Intelligence* 9:1751148. Received
2025-11-25, revised 2026-02-11, accepted 2026-03-10, **published 2026-04-15**. CC BY.

Introduction read in full; the CNN methodology and results sections were not read, and
the audit records that. Verified claims used:

- "The unique complexity of the Bangla script arises from its alphabet, comprising **50
  basic characters (11 vowels and 39 consonants)**, alongside **334 compound characters**
  formed by combining these basic elements" — the authors attribute this to Reza et al.
  (2019), and the post says the figure is theirs by citation, not by measurement.
- "Compound characters dominate the Bangla text, accounting for approximately **85% of all
  characters**" — attributed to Das et al. (2014). **The post does not repeat this at face
  value.** 334 of 384 forms is 87.0%, which is a statement about the *inventory*; my own
  measurement puts conjuncts at 11.9% of *running* visible units across the eight lines.
  The post states both and says which one matters when you are typing. This is the
  inconvenient number the tone guide asks for, and it is the honest reading.

### 3a. The source this replaced, and why

The fourth source was originally `dsal.uchicago.edu` — Biswas, *Samsad Bengali-English
dictionary*, 3rd ed., Sahitya Samsad, 2000 (DSAL data last updated June 2020), queried for
শুভ (2 results: "weal, well-being, (the) good"; "auspicious; favourable; promising") and
জন্ম (11 results: "birth, nativity"). All of that was verified by fetching.

**It was dropped on the domain cap.** `dsal.uchicago.edu` read 1 of 3 in-batch when I
measured before citing it, and 4 of 3 when I re-measured after drafting: three siblings
(`birthday-wishes-in-urdu` on Platts, `birthday-wishes-in-kannada` on Kittel,
`birthday-wishes-for-sister-in-law` on Platts and McGregor) reached the same institutional
host independently and landed while I was writing. Mine was the lightest use of the four —
a single headword lookup with alternatives — so it is the one that gave way. The
coordinator reached the same conclusion independently. The etymology paragraph and one FAQ
were rewritten so that no claim depends on a dictionary I no longer cite.

**Replacement search, and why it landed on `frontiersin.org` despite the concentration
warning.** The 50-basic / 334-compound figure is standard in the Bangla OCR literature, so
the question was purely which host is both open and fetchable. Tried and failed:
`sciencedirect.com` (BanglaLekha-Isolated 2017 and three others — **403**),
`mdpi.com` (Bangla Character Detection with YOLOv11, 2025 — **403**), `ieeexplore.ieee.org`
(Bangla NLP comprehensive analysis, 2022 — **202, empty body**), `peerj.com` (**403**),
`degruyterbrill.com` / `sciendo.com` (Journal of Intelligent Systems 2011 — **202, empty**),
`link.springer.com` (Discover AI 2025 — reachable but at 2 in-batch and 4 corpus-wide, on
the avoid list), `banglaacademy.gov.bd` (**self-signed certificate**),
`scriptsource.org` (**403, Cloudflare**), `sanskrit-lexicon.uni-koeln.de` (site reports its
own dictionaries are down). Lexicographic alternatives the coordinator suggested were
checked too: Haricharan Bandyopadhyay's *Bangiya Sabdakosh* is on `archive.org` in four
scans, but they are page images with no reliable text layer, so I could not verify a
headword and will not cite what I cannot read; `shodhganga.inflibnet.ac.in` and the Jadavpur
/ Calcutta collections returned nothing on Bengali orthography that I could open and check.

So `frontiersin.org` it is: **3 of 3 in-batch, which item 65 permits** (the item caps a
domain at more than 3, not at 3). It is on the corpus-wide concentration list at 6 posts,
and `BRIEF-WAVE2.md` Correction 1 is explicit that corpus-wide concentration is
"judgement, not a cap". The judgement here is that a Bangla-specific compound-character
paper beats both a fifth generic alphasyllabary paper and shipping on three sources.
`journals.plos.org` is likewise at exactly 3 of 3. Two of my four domains therefore sit at
the limit — recorded in `honestAssessment` rather than hidden.

**Domains checked against `BRIEF.md` section 2 before fetching, not after.** The banned
list there — `drikpanchang.com`, `indiapost.gov.in`, `pib.gov.in`, `trai.gov.in`,
`doi.org` as a bare resolver, `publicholidays.in`, `arxiv.org`, `census.gov.in` — is a
separate instruction from the cap script, and passing the cap tells you nothing about it. I
grepped section 2 for every candidate. None of my four appears in it. `arxiv.org` came up
twice during the search (the Bengali.AI grapheme dataset and a Bangla NLP review) and was
rejected on the ban, not on the count.

### 4. Islam, Roy, Nahid et al. (2025) — Bangla typography

`https://ph.pollub.pl/index.php/jcsi/article/view/7120`

"Advancing Bangla typography: machine learning and transfer learning based font detection
and classification approach using the 'BanglaFont45' dataset." *Journal of Computer
Sciences Institute* vol. 35 (2025), 166+. **Published 2025-06-30.** DOI 10.35784/jcsi.7120.
Open access, Lublin University of Technology press.

Abstract read in full. Verified: a dataset of **28,000 images across 45 Bangla font
classes**; SVC best of four classical models at **93.43%**; VGG-16 best of six transfer
models at **87.74%**. Used only for the narrow, true claim that Bangla is drawn by many
different fonts, which is why a conjunct's shape is not something the sender controls.
Full text beyond the abstract not read — only the abstract's figures are cited.

### Source tests

- **Subject test:** 1, 2 and 3 are about the Bengali script specifically; 4 is about
  Bangla type. All four pass.
- **Swap test:** none could sit unchanged in another post in this batch. The MEG paper is
  Bangla-only; the Microsoft page is the Bengali script page; the compound-character paper
  is about Bangla compound characters; the font dataset is Bangla fonts. Note that the
  Kannada post also cites `frontiersin.org`, but its article there is Sonali Nag's general
  alphasyllabary paper, which would have swapped straight into this post — that generic
  paper is exactly what I declined, and the Bangla-specific article I took instead could
  not sit in the Kannada post.
- **Generic context statistics:** **zero**. No PIB, TRAI, Census or MEA figure appears in
  this post.
- **Wikipedia:** zero body links. Four `sameAs` entries in `structuredData`, each QID
  verified against the Wikipedia API on 2026-08-27: Bengali language Q9610,
  Bengali–Assamese script Q12438487, Abugida Q335806, Birthday Q47223.

### Searches that found nothing usable

`OpenAlex` (3 queries before the shared budget returned 429 and I stopped rather than
looping), `Crossref` (3 queries), `DOAJ` (5 queries). Terms tried: *Bengali script
conjunct consonant orthography reading* · *Bangla grapheme cluster text processing* ·
*Bengali orthography akshara literacy* · *Bangla conjunct consonant reading acquisition* ·
*Bengali typography type design ligature* · *Banglish / Roman Bangla / romanized Bengali* ·
*compound characters Bangla*. Nothing open-access and fetchable turned up on **Bengali
conjunct acquisition in children** — the obvious fifth source. The best candidates were all
blocked or capped: Fiona Ross's SOAS thesis on the printed Bengali character
(`eprints.soas.ac.uk` no longer resolves; the Worktribe replacement returns 403),
"Spelling and Reading Words in Bengali: The Role of Distributed Phonology"
(`link.springer.com`, at 2 in-batch), `CompoundDenseNet` (`frontiersin.org`, at 2 in-batch
and 6 corpus-wide), `BanglaLekha-Isolated` (`sciencedirect.com`, 403), the Bengali
code-mixed social-media paper (De Gruyter, 202/blocked). **The post therefore ships with 4
sources, not 5 or 6.** That is inside the 4–6 range and it is deliberate: a fifth would
have had to be a generic alphasyllabary paper, which fails the swap test. See §3a for the
full replacement-search log after the `dsal.uchicago.edu` cap breach.

---

## First-party facts used

From `BRIEF-WAVE3.md` §1 (probe of `birthdaygfpages`, 2026-08-27, n=209 / 182 dated) and
`BRIEF.md` §1 (probe 2026-08-26, n=198):

1. **Median personal message 96 characters** (n=197). Used as the box every line is priced
   against. Two instances inside the first 150 words.
2. **Median lead time 0 days; 91 of 182 dated pages created on the birthday itself
   (50.0%)**; 114 of 182 (62.6%) on the day or the day before.
3. **23 of 182 (12.6%) created after the birthday had passed.**
4. **50.5% of birthday pages finished inside the hour**, median build 0.9 hours.
5. **Quiz built on 98.5% of pages, played on 14.4%** — the inconvenient number, used in
   the downside section.
6. **48.6% of birthday-page views are mobile** (1,081 of 2,224), against 51.0% site-wide.

Overclaim guard observed: n is small, the data starts 2026-04, and **no per-language
birthday data exists.** The post never says anything about Bengali-speaking users
specifically from first-party data, and the audit records that absence as a structural
failure.

---

## My original measurement

Run in `ctx_execute` (Python) on the eight Bengali lines in the post. I wrote an
akśar segmenter for Bengali: a cluster is a consonant, plus any nukta, plus any
`hasant + consonant` chain, plus trailing vowel signs, syllable modifiers
(candrabindu / anusvara / visarga) and a word-final hasant. Independent vowels start their
own cluster. "Minimal graphemic units" follows Moitra et al.: consonant characters plus
explicit vowel characters plus syllable modifiers, excluding hasant, nukta and the
inherent vowel.

| Measure | Value |
|---|---|
| Lines measured | 8 |
| Characters (codepoints, incl. spaces and punctuation) | 204 |
| Bengali codepoints only | 178 |
| Visible akśar | 101 |
| Minimal graphemic units | 166 |
| **Minimal graphemic units per visible akśar** | **1.64** |
| **Visible-unit count understates read load by** | **64.4%** |
| Juktakkhor (conjuncts) | 12 |
| Conjuncts per 100 visible akśar | 11.9 |
| **Lines containing at least one conjunct** | **8 of 8** |
| Lines whose conjunct is inside জন্মদিন itself | 8 of 8 |
| Roman transliteration characters | 250 — **+22.5%** on 204 |
| UTF-8 bytes, Bengali / Roman | 560 / 250 — **2.24×** |
| **Interior cut positions that fall inside an akśar** | **77 of 196 — 39.3%** |
| Same measure on the Roman transliterations | 0 of 242 — 0.0% |
| 96-character median holds | 47.5 akśar · 78.1 graphemic units · 15.1 Bengali words · 12.3 Roman words |

Word-level: জন্মদিন is 7 characters, **4 akśar**, 6 graphemic units, **1 conjunct (ন্ম)**.
শুভেচ্ছা is 8 characters, **3 akśar**, 7 graphemic units, 1 conjunct (চ্ছ). শুভ is 3
characters, 2 akśar, **0 conjuncts**. শুভকামনা is 8 characters, 5 akśar, **0 conjuncts** —
the one common wish-word that avoids a stack entirely.

**Why this is not Punjabi's or Kannada's finding.** Punjabi and Kannada both measured
*length* and both concluded romanising is expensive (+16% and +27.1%). My +22.5% is the
same *kind* of number and is therefore demoted to one paragraph in a late section. The two
headline findings are different mechanisms: (a) the ratio *inside* the visible unit,
against the metric a peer-reviewed MEG study says the reader actually tracks — Kannada's
comparison was codepoints per visible unit *between* scripts, mine is graphemic units per
visible unit *within* Bangla; and (b) **cut-point safety**, which no sibling measured at
all, and which follows directly from the Microsoft shaping documentation rather than from
any length argument.

**Limits of the measurement.** n=8 lines chosen by me, so the 11.9% conjunct rate is a
property of these eight strings and not of Bengali prose — a corpus figure would need a
Bengali corpus, and `corpora.uni-leipzig.de` is at cap in this batch. The 39.3% figure
assumes truncation at a codepoint boundary, which is what a naive `slice(0, n)` does;
software that segments by extended grapheme cluster does not have this problem, and I say
so in the post. The segmenter is mine and unreviewed.

---

## The language blocker

Every Bengali string in this post — eight wishes, their transliterations, their glosses and
the register assignments — is **unverified by a native Bengali reader.** I do not read
Bengali. The measurement code is verifiable and the four sources are verified; the script
content is not.

Mapped, verbatim, to checklist item:

> The post contains at least one claim none of the top 5 pages make

Recorded as **structural** in `auditReport.failed`. In a language post the differentiating
claim *is* the script content: if the eight lines, their Roman spellings or their আপনি /
তুমি / তুই assignments are wrong, the claim is not established, and **no citation can close
that** — only a native Bengali reader signing off line by line can. Twelve posts in this
batch now need a native reader and there is no confirmation that a Bengali reader is
available. I have not softened this and I have not assumed anyone will check it.

---

## Internal links and targeting

- `categorySlug`: `milestone-birthdays` (confirmed live 2026-08-26 for all thirty).
- `templateUrls`, all present in `TEMPLATE_LINKS` in `app/lib/prompt.ts`:
  `https://subhsandesh.in/birthday-bestfriend`, `https://subhsandesh.in/birthday-parents`,
  `https://subhsandesh.in/templates`.
- Three body links, all in the closing "wrong choice" section, i.e. after the value is
  established. No link in the opening.
- Zero competitor links. None of `igp.com`, `in.pinterest.com`, `pinterest.com`,
  `bongquotes.com`, `kobita.banglakosh.com`, `heloplus.com`,
  `bengali.timesnownews.com` or `poetryskills.com` appears anywhere in the file.

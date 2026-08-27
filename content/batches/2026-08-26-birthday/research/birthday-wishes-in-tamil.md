# Research brief — `birthday-wishes-in-tamil`

Batch: `2026-08-26-birthday` · Keyword: **birthday wishes in tamil** · Rank 4 · Lane **C**
Sub-angle: **Tamil diglossia** (literary/formal vs spoken register)
Written 2026-08-27. WebSearch exhausted for this session; SERP supplied by the batch owner.

---

## Phase 1 — SERP analysis

Live India-localised SERP (`gl=in`), harvested by the batch owner with a real browser and
supplied in `ASSIGNMENTS.json`. **Not fetched by me** — the batch brief states WebSearch is
at 200/200 and the SERP is given as-is. Competitor pages were therefore analysed from their
SERP titles and from what is publicly known about the platform each sits on, not from a full
page fetch. That limitation is recorded in the audit.

| # | Domain | Title | Format | Where the answer sits | Data cited | Register handled? |
|---|---|---|---|---|---|---|
| 1 | pinterest.com | "Top 15 Happy Birthday Wishes in Tamil Kavithai SMS" | Pin board / image grid | No prose answer at all — images | None | No |
| 2 | kavithai.blog | "பிறந்தநாள் வாழ்த்துகள் - Happy Birthday Kavithai" | Wish listicle, Tamil script | Buried under a list | None | No |
| 3 | scribd.com | "பிறந்தநாள் வாழ்த்துக்கள் கவிதை" | Uploaded document behind a signup wall | Not extractable | None | No |
| 4 | sharechat.com | "900+ birthday Wish Tamil Status, Images & Videos" | Status/image feed | None — a feed | None | No |
| 5 | in.pinterest.com | "hbd" | A single pin literally titled "hbd" | None | None | No |
| 6 | marathiquote.com | "Happy Birthday Wishes in Tamil 100+" | Wish listicle on a **Marathi** site | Under a list | None | No |

**Read of the SERP.** This is the weakest language SERP in the batch. Two of the top five
results are Pinterest, one is a Scribd upload, one is a ShareChat feed, one is titled "hbd",
and the #6 result is a Marathi quotes site ranking for a Tamil query. Nothing on page one is
a purpose-built article. Google is filling the slot with whatever carries the string
"பிறந்தநாள் வாழ்த்துக்கள்", because no one has written the page.

**Common shape of what ranks:** a count in the title ("Top 15", "900+", "100+"), an
undifferentiated dump of wish text, no explanation of *which* wish to send to *whom*, and no
data of any kind.

## Phase 2 — Gap analysis

**Table stakes** (present on all or most ranking pages, so the post must carry them):
ready-to-send Tamil wish text in Tamil script; a transliteration for readers who speak Tamil
but do not read it; wishes covering parents, siblings and friends; something about kavithai
(the poetic wish format Tamil readers expect); an easy copy path.

**The gap.** Not one ranking page addresses **register**. Tamil is a diglossic language: the
literary/formal variety and the spoken variety are genuinely different, and the choice
between them is decided by who you are addressing. A wish that is correct for an appa is
wrong — stiff, faintly comic — for a friend, and a wish that is correct for a friend is
disrespectful to a grandparent. Every ranking page publishes one undifferentiated pile of
Tamil text and leaves the reader to guess. That guess is a visible mistake, which is exactly
the kind of anxiety a search like this carries.

**Stale data.** None of the ranking pages cite data at all, so there is nothing to supersede.
That is itself the finding: the entire SERP is data-free.

**Unanswered questions raised and dropped by the ranking pages:**
- Should I send this in Tamil script or in Roman letters ("Tanglish")?
- Is "உங்களுக்கு" or "உனக்கு" right for my mother?
- How long should a Tamil birthday message actually be?
- Will the Tamil script even render on the recipient's phone?

**Fan-out sub-queries** (each becomes an H2 or an FAQ):
`what is the difference between formal and spoken tamil` ·
`how to say happy birthday in tamil formally` ·
`birthday wishes in tamil for father / mother` ·
`birthday wishes in tamil for friend` ·
`is it rude to use ni instead of ninga in tamil` ·
`should i write tamil in english letters` ·
`how long should a tamil birthday message be` ·
`what is piranthanaal vaazhthukkal`

**Angle (one sentence, recorded as `batchMeta.angle`):**
> This post wins by being the only page that sorts Tamil birthday wishes by register —
> literary Tamil for elders, spoken Tamil for friends — and sizes each one against the
> 96-character median personal message measured across 197 SubhSandesh birthday pages.

## Phase 3 — Sources

Lane C is shared by four posts, so this post takes **Tamil-specific sociolinguistics** and
avoids any general multilingual-internet survey. Every domain below was counted against
`content/batches/*/blogs/*.json` on 2026-08-27 before use. `aclanthology.org`,
`unicode.org`, `lrec-conf.org`, `arxiv.org`, `w3.org`, `en.wikipedia.org` and
`etheses.whiterose.ac.uk` are all at or over cap and were **not** used, which ruled out the
obvious Tamil NLP venues (the 2024 *IruMozhi* diglossia-classification paper and the 2014
dialectal-Tamil FST paper both sit on `aclanthology.org`, and *Literary and Colloquial Tamil
Dialect Identification* sits on `arxiv.org`).

| # | Source | Domain (count before / after) | Passes subject test? | Passes swap test? |
|---|---|---|---|---|
| 1 | Nalliannan, Perumal & Pillai (2021), *Language Use Among Malaysian Tamil Youth*, **Sustainable Multilingualism** 19 | `sciendo.com` (0 → 1) | Yes — Tamil register choice by addressee | No other keyword in this batch could use it |
| 2 | Ramachandran (2018), *Predicting user acceptance of Tamil speech to text*, PhD, Sheffield Hallam University | `shura.shu.ac.uk` (0 → 1) | Yes — how Tamil is actually typed in messages | Tamil-specific |
| 3 | Kadakara (2015), *Status of Tamil Language in Singapore: An Analysis of Family Domain*, **Education Research and Perspectives** 42 | `erpjournal.net` (0 → 1) | Yes — Tamil in the family domain, kinship address terms | Tamil-specific |
| 4 | Ramaswami (1979), *Formal and Informal Tamil*, PhD, University of Kerala (guide: E. Annamalai) — Shodhganga record | `shodhganga.inflibnet.ac.in` (2 → 3, at cap) | Yes — the thesis *is* the formal/informal split | Tamil-specific |
| 5 | Ishida, R., *Tamil Orthography Notes* (living document, version dated 28 April 2026) | `r12a.github.io` (0 → 1) | Yes — Tamil diglossia and Tamil script orthography | Tamil-specific |

**Zero government / context statistics used.** The budget allows one; none was needed, so
none was taken.

### What each source actually says (verified by fetching, 2026-08-27)

**1. Nalliannan, Perumal & Pillai (2021)** — `https://sciendo.com/article/10.2478/sm-2021-0014`
Published November 2021, *Sustainable Multilingualism* 19(1). Method: 150 questionnaires
distributed, **109 returned (72.7%)**; **42** natural-conversation audio recordings; **40**
interviews. Verified findings used in the post:
- Tamil use in the family domain declines with the seniority of the addressee:
  **grandparents 84%, parents 74%, siblings 70%, own children 33.3%**; average 75%.
- Recorded transcript (Extract 4): a 17-year-old male "uses colloquial Tamil mixed with
  English and Malay when speaking to a classmate, but the use of formal Tamil when speaking
  to the teacher" — in the same lesson.
- "Those who were not fluent in formal Tamil, used a more colloquial variety of Tamil,
  especially in the friendship domain."
Full text read (PDF, 26 pp). Open access.

**2. Ramachandran (2018)** — `https://shura.shu.ac.uk/24461/`
Doctoral thesis, Sheffield Hallam University, June 2018. Fieldwork in Tamil Nadu. Verified
findings used in the post:
- "All the participants were familiar with writing Tamil in Roman script which they referred
  to as 'Tanglish' … almost all the participants … used Roman script to represent Tamil in
  the context of technology for example while sending a text message."
- Tamil-script spelling was "almost one hundred percent accurate … and consistent", while
  "there is a significant difference in the consistency of spelling in Roman orthography for
  the same word."
- The 'Zha' test (sample size 30, ages 18–25, one city in western Tamil Nadu): "Only 20% of
  the 30 participants got the 'Zha' syllables accurate," reading a phrase shown in Tamil
  script.
Full text read (PDF, ~250 pp). Open access.
*Note on scope:* the thesis frames its target user group in caste terms (Tamil Brahmans).
The post cites only the general orthography and pronunciation findings and does not
reproduce or endorse that framing.

**3. Kadakara (2015)** — `https://www.erpjournal.net/wp-content/uploads/2020/01/2_ERPV42_Kadakara_2015_Status-of-Tamil-Language-in-Singapore.pdf`
*Education Research and Perspectives* Vol. 42 (2015), pp. 25–64, Graduate School of
Education, University of Western Australia. Method: **30 families, 60 respondents** (30
fathers, 30 mothers), questionnaires plus 30 semi-structured interviews. Verified findings
used in the post:
- Of the 30 families, **only 5 spoke Tamil alone at home**; 13 English only; 12 mixed.
- Where the family had shifted to English, children's Tamil was "likely limited to the
  ability to address family members by Tamil kinship terms, to identify and name various
  food ingredients in Tamil, and not much more."
Full text read (PDF, 40 pp). Open access.
*Note:* diaspora study, not Tamil Nadu. Used only for the kinship-term point, which is what
it actually supports.

**4. Ramaswami (1979)** — `https://shodhganga.inflibnet.ac.in/handle/10603/110637`
Shodhganga catalogue record: title *Formal and Informal Tamil*, researcher Ramaswami N,
guide E. Annamalai, University of Kerala, Department of Linguistics, completed **16/06/1979**.
**Only the catalogue record was read.** The chapter PDFs are hosted on a bitstream endpoint
that timed out repeatedly on 2026-08-27, so no finding from the thesis body is claimed — the
post cites the record only to establish that Tamil's formal/informal split has been the
subject of Indian doctoral linguistics since 1979. Licence on the record: CC BY-NC 4.0;
nothing is reproduced.

**5. Ishida, R., *Tamil Orthography Notes*** — `https://r12a.github.io/scripts/taml/ta.html`
A maintained script and orthography reference written for font and browser developers, not a
peer-reviewed paper — it is the fifth source, not one of the two that carry the subject-test
requirement. Verified sentences used in the post:
- "Tamil is diglossic: the classic form is preferred for writing and public speaking, and is
  mostly standard across the Tamil-speaking regions; the colloquial, spoken form differs
  widely from the written."
- "Although modern Tamil uses fewer conjunct ligatures than most other indic scripts, many
  ligatures are still needed for a Tamil font, mostly for combinations of base consonant and
  vowel sign."
- "In 1978, in an attempt to simplify the script, the government of Tamil Nadu proposed the
  reform of certain letters and syllables … These reforms only spread in India and the digital
  world, whereas Sri Lanka, Singapore, Malaysia, Mauritius, Reunion and other Tamil speaking
  regions continue to use the traditional syllables."
Dating: the page states "Updated 28 April, 2026" and the author's own suggested citation
carries that date. It is therefore recorded as `publishedDate: 2026-04-28` in
`batchMeta.sources` — the cited version's date, not a fetch date — and emitted as
`dateModified` (not `datePublished`) in `citation`, per `references/structured-data.md`.

**Source removed after a cap re-measure.** `learn.microsoft.com/en-us/typography/script-development/tamil`
was drafted in as source 5 and then dropped: the domain was already at 3 posts corpus-wide
(the Telugu sibling took the last slot), so citing it would have been a cap breach. The claim
it supported — Tamil script rendering — was re-grounded on the Ishida reference, which states
the ligature position more precisely anyway.

### Search terms tried that produced nothing usable

`Tamil diglossia` · `Tamil spoken written variety register` · `diglossia Tamil social media` ·
`Standard Spoken Tamil Schiffman` · `Tamil literary spoken variety teaching learners` ·
`Tamil terms of address honorific pronoun` · `Tamil politeness address forms kinship` ·
`Tamil greeting formulae politeness` · `Tamil kinship terms address appa amma` ·
`Tamil register formal informal WhatsApp messaging` — run against OpenAlex, DOAJ, Semantic
Scholar and Shodhganga.

Result: **there is no open-access, in-cap study of Tamil register choice in digital birthday
or greeting messages specifically.** DOAJ returns zero articles combining "Tamil" and
"diglossia" in title or abstract. The two best-matched papers — *IruMozhi: Automatically
classifying diglossia in Tamil* (2024) and *Literary and Colloquial Tamil Dialect
Identification* (2022) — are on `aclanthology.org` and `arxiv.org`, both over cap. The
Acta Linguistica Petropolitana paper *Diglossia and Tamil Varieties in Chennai* (2018) has a
dead PDF link and no working landing page. The nearest in-cap substitutes are the Malaysian
and Singapore studies above, which measure register and language choice by addressee in
Tamil-speaking families but not in India. That is a real limitation and it is recorded as a
structural audit failure.

## Phase 4–5 — Build notes

- Direct answer in the first ~120 words with two first-party numbers (96-character median;
  106 of 197 under 100 characters).
- 7 H2s, mapping to the fan-out list above. Four H3s under the main body H2, mirrored
  one-to-one by the `ItemList` in `structuredData`.
- Comparison table: four rows, real character counts computed from the four Tamil wishes in
  the post, sized against the 96-character first-party median.
- Internal links (3, all from `TEMPLATE_LINKS`): `/birthday-parents`, `/birthday-friend`,
  `/templates` — each placed after the section that establishes why the reader would want it.
- `categorySlug`: `milestone-birthdays` (confirmed live on Strapi 2026-08-27, documentId
  `uwc6sanl1mqehjsdqzi6rhy0`).
- Slug checked against Strapi on 2026-08-27: **free** (`total: 0`).
- Entities for `about`/`mentions` verified through the Wikipedia API with Wikidata QIDs:
  Tamil language Q5885, Diglossia Q59203, Tamil script Q26803, Birthday Q47223,
  Tamil Nadu Q1445.

## Phase 6 — Standing blocker

**Every Tamil string in this post is machine-composed and unverified.** Tamil is among the
highest-risk scripts in this batch. This is recorded in `auditReport.failed` as a
**structural** failure. It closes only on native-reader sign-off; no agent in this pipeline
can verify Tamil idiom, register or diacritics. Do not publish before that sign-off.

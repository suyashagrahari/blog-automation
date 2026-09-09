# Research brief — `ganesh-chaturthi-wishes-in-kannada`

Batch `2026-09-09-ganesh-10b`, post 4. Primary keyword: **ganesh chaturthi wishes in kannada**.
Folds in: `happy ganesh chaturthi quotes in kannada`, `happy ganesh chaturthi kannada wishes`,
`ganesh chaturthi in kannada`.
Assigned research field: **Kannada sociolinguistics — the Kannada script online, diglossia
between spoken and written Kannada, digital Kannada language use.**

Slug checked free in Strapi on 2026-09-09:
`GET /api/articles?filters[slug][$eq]=ganesh-chaturthi-wishes-in-kannada` → `data: []`.
`indian-festivals` confirmed live (category id 10).

---

## Phase 0 — data gate

`content/facts.md`, regenerated 2026-09-08, carries 17 facts and **zero Ganesh facts**. The
`/happy-ganesh-chaturthi` template has created no pages. Every first-party number in this post
is therefore platform-wide across all 15 page types and is captioned that way in the sentence
nearest the claim, per the batch brief and `audit-remediation.md`.

Used: 49.6% mobile opens (22,667 of 45,656 views), 96.1% publish rate (3,708 of 3,860),
42.1% password protection (1,625 of 3,860), 3,860 pages since 12 March 2026, 45,656 views,
49.9% touch-device views.

---

## Phase 1 — SERP

Searched `ganesh chaturthi wishes in kannada`. No AI Overview surfaced. Top results and what
they actually are (fetched 2026-09-09; **all are competitors or news farms and none is cited**):

| Result | Words | Structure | Kannada chars | Table | Schema | What it optimises for |
|---|---|---|---|---|---|---|
| indiatvnews.com (multi-language wishes roundup, Aug 2025) | JS-rendered, no static body | Listicle across 5 languages | 0 in static HTML | No | None served | Festival-day news traffic, all languages in one page |
| tring.co.in "50+ Ganesh Chaturthi Wishes in Kannada" | ~1,100 | H1 + 4 H2 buckets (general / WhatsApp / greeting cards / images) | 6,006 | No | 0 ld+json | Volume of wishes; upsell to celebrity video greetings |
| kannada.asianetnews.com | ~380 | H1 + 3 H2s, one of which is a wish itself | 1,994 | No | 0 ld+json | Kannada-language news pageviews, images gallery |
| kannada.boldsky.com | ~780 | 10 H2s literally titled ಶುಭಾಶಯ 1–10 | 2,846 | No | 0 ld+json | Scroll depth over ten wish slides |
| Pinterest / PosterMyWall / JolieCarte | n/a | Image and template grids | n/a | No | n/a | Image search and template downloads |

Consistent findings across all five:

- **No Roman transliteration anywhere.** Every page prints Kannada script only. A reader who
  speaks Kannada but does not read the script gets nothing.
- **No English gloss.** Nobody says what a line means.
- **No 2026 dates and no muhurat.** Two of the four text pages are still year-stamped 2025.
- **No mention of Gowri Habba or Gowri-Ganesha Habba at all** — the Karnataka framing is absent
  from every result, including the two Kannada-language news sites.
- **No comparison table, no structured data enrichment, no first-party data.**
- Tone is Ganesha-generic; several lines read as Hindi or Marathi wishes respelt in Kannada
  letters (`ಶುಭಕಾಮನೆಗಳು` for `ಶುಭಾಶಯಗಳು`, `modak` for `kadubu`).

The SERP matches the batch brief's prediction: low-authority regional content farms with no
strong incumbent. The two real obstacles are Asianet Suvarna and Boldsky, which win on domain
authority in Kannada news rather than on the page.

---

## Phase 2 — gap analysis

**Table stakes.** A list of Kannada wishes in the Kannada script; a WhatsApp/status framing;
the standard `ಗಣೇಶ ಚತುರ್ಥಿಯ ಶುಭಾಶಯಗಳು` line; some mention of images.

**The gap.** Four things nobody covers:

1. **Karnataka calls it Gowri-Ganesha Habba.** Gowri is installed first and the bagina is
   exchanged among married women. Every page in the SERP writes as if the festival were
   Ganesha-only, i.e. as if it were happening in Maharashtra.
2. **2026 is unusual.** Swarna Gowri Vratha and Ganesh Chaturthi both fall on Monday
   14 September 2026 for Bengaluru — the usual one-day gap collapses. Gowri puja 06:09–07:06 AM,
   Ganesha puja 11:02 AM–01:28 PM. This is a genuinely checkable, genuinely useful, zero-competition
   fact, and it is the reason the brief said to verify rather than assert from memory.
3. **Script versus Roman is unanswered.** Nobody says whether to send Kannada script or
   transliteration, and there is a corpus number that settles it.
4. **Register.** `ಶುಭಾಶಯಗಳು` is written-register Kannada nobody says aloud; the spoken form
   (`ಹಬ್ಬ ಚೆನ್ನಾಗಿ ಆಚರಿಸಿ`, `ಗಣಪ`, `ಜೊತೆ`) signals closeness. No page distinguishes them.

**Stale data.** The two ranking Kannada news pages are 2025-dated and carry 2025 festival dates.

**Fan-out sub-queries → H2s.**

| Sub-query | H2 |
|---|---|
| what is Gowri Ganesha Habba / when is it in 2026 | Why Karnataka calls it Gowri-Ganesha Habba |
| kannada wishes with meaning / in english letters | Eight Ganesh Chaturthi wishes in Kannada, with transliteration and meaning |
| should I write in Kannada or English | Kannada script or Roman letters: what Kannada comment data shows |
| why is Kannada hard to type / boxes instead of letters | Why the Kannada script is heavy on a phone keyboard |
| formal vs informal Kannada wish | Written Kannada is not spoken Kannada |
| best way to send a Kannada wish | Four ways to send a Kannada wish, compared |
| when not to send a digital greeting | When a Kannada wishes page is the wrong thing to send |

**Angle (→ `batchMeta.angle`).** Wins by being the only post that gives real Kannada Ganesh
wishes in the Kannada script with Roman transliteration and a literal English gloss, frames them
correctly as Gowri-Ganesha Habba with the verified 14 September 2026 collision, and settles the
script-versus-Roman question with the CoLI-Kenglish 44.8/32.32/7.5 split alongside SubhSandesh's
platform-wide 49.6% mobile-open rate.

**Deliberate divergence from batch 1's Marathi post.** Different sources (no Aksharantar, no
L3Cube, no Typotheque, no Unicode ch. 12), different structure (no "what Ganpati Bappa Morya
means" opener, no Devanagari-allograph section, no separate status/caption section, no second
first-party page-type table), different wishes written from scratch in Kannada rather than
translated, and a regional-festival section that the Marathi post has no equivalent of.

---

## Phase 3 — sources

Six, all fetched and verified on 2026-09-09. Two pass the subject test and are peer-reviewed
open access. Zero competitor links. Zero Wikipedia body links (`en.wikipedia.org` is at its
3-post cap from batch 1; Wikipedia appears only as `sameAs` inside `structuredData`). Zero
generic context statistics — no PIB, TRAI, Census or MEA figure was needed.

1. **Hebbi & Mamatha (2023), "Comprehensive Dataset Building and Recognition of Isolated
   Handwritten Kannada Characters Using Machine Learning Models", *Artificial Intelligence and
   Applications* 1(3).** DOI `10.47852/bonviewAIA3202624`. CC BY 4.0, peer-reviewed, full text
   read as PDF. Verified verbatim: "34 vyanjanagalu (consonants), 13 swaragalu (vowels), and
   2 yogavahagalu"; "The combination of consonants and swaragalu forms the gunitaksharagalu
   (kagunitas), which are 510 in number"; "the number of classes will be more than 600+
   considering the vowels, consonants, ottaksharas, and digits"; dataset of 130,981 samples for
   85 classes from 500 writers. **Subject test: pass** (the Kannada script itself).
2. **Shashirekha, Balouchzahi, Anusha & Sidorov (2022), "CoLI-Machine Learning Approaches for
   Code-mixed Language Identification at the Word Level in Kannada-English Texts", *Acta
   Polytechnica Hungarica* 19(10), 123–141.** Peer-reviewed journal version of arXiv:2211.09847
   — the journal PDF was used deliberately so the batch's last arXiv slot stays free (and it has
   since been taken by the `wishes-with-name` sibling). Full text read. Verified verbatim:
   "download 100000 comments from 373 Kannada YouTube videos"; "19432 unique words extracted from
   nearly 7000 sentences"; "nearly 44.8% words are Kannada words, about 7.5% words are Kn-En mixed
   language words like 'Dogsgalige' … and about 32.32% words are English words"; "the keyboard
   layout of computers and smartphones by default is of Roman script … due to technological
   glitches most of the users prefer Roman script to write the comments in local or code-mixing
   languages". **Subject test: pass** (digital Kannada language use).
3. **Kittel, *A Kannada-English Dictionary* (1894), Digital Dictionaries of South Asia,
   University of Chicago.** Queried three headwords directly. `ಬೆನಕ benaka. Tbh. of ವಿನಾಯಕ.
   Gaṇēśa`; `ಬಾಗಿನ bāgina. Tbh. of ವಾಯನ. a present, a gift … a present made by a lady whose
   husband is living`; `ಕಡುಬು kaḍubu` attested with a classical citation. **Subject test: pass**
   (the language). Scholarly reference work, freely readable, not a competitor.
4. **Akashvani / News On AIR (Prasar Bharati), "Gowri-Ganesha festival is being celebrated with
   devotion all over Karnataka", 18 September 2023.** Verified verbatim: "the idol of Gowri is
   installed in the mandapam, worship is offered and gifts are distributed among women".
   Government broadcaster, not a competitor, and it is a report rather than a statistic — it is
   not the post's one permitted generic context statistic, because the post uses none.
5. **Drik Panchang — Ganesh Chaturthi 2026, Bengaluru (geoname 1277333).** Monday 14 September
   2026; Madhyahna Ganesha Puja Muhurat 11:02 AM–01:28 PM; Chaturthi tithi 07:06 AM 14 Sep →
   07:44 AM 15 Sep; Ganesha Visarjan Friday 25 September 2026. `[date/festival reference]`.
6. **Drik Panchang — Swarna Gowri Vratha 2026, Bengaluru (geoname 1277333).** Monday 14 September
   2026; Pratahkala Gowri Puja Muhurat 06:09 AM–07:06 AM; Tadige tithi 07:08 AM 13 Sep →
   07:06 AM 14 Sep. `[date/festival reference]`.

Both Drik Panchang entries earn a place in `citation` because the body states the muhurat times.
Their `stat` strings carry the literal `[date/festival reference]` marker the ledger requires.
Neither carries a `datePublished`, because the pages publish none.

### What was searched and not found

No open-access, peer-reviewed study specifically on **Kannada diglossia** could be opened.
Search terms tried: `Kannada diglossia`, `Kannada diglossia spoken written variety`,
`Kannada diglossia formal colloquial variety`, `Kannada sociolinguistic`, `diglossia Dravidian
Kannada written standard spoken` — on OpenAlex, DOAJ, Semantic Scholar and Shodhganga. Results
were either about Tamil or Arabic diglossia (wrong language, and the Tamil ones belong to the
Tamil sibling), or unreachable: `ideals.illinois.edu` returns 403 on hdl 2142/78494 ("The optimal
grammar of code-switching between Kannada and English"), the CIIL e-book *Diglossia and Literacy*
covers Kannada, Sinhalese and Tamil together and would collide with the Tamil sibling, and the
Sonali Nag akshara work is paywalled at Wiley. The register section therefore rests on Kittel and
on the CoLI corpus rather than on diglossia scholarship. Recorded in `honestAssessment`.

### Considered and rejected

- `arxiv.org` — at the 3-post cap across both batches by the time this post landed; the journal
  version of the CoLI paper was used instead.
- `frontiersin.org`, `pmc.ncbi.nlm.nih.gov`, `en.wikipedia.org` — at or near cap from batch 1.
- Frontiers in Neuroscience 2024 "Kannada handwritten character recognition", MDPI *Acoustics*
  "Visual Speech Recognition for Kannada" — both would have worked but the domains are contested.
- GraphCom (131 written languages) — fails the swap test; three siblings could use it unchanged.
- Every SERP result — competitors under `references/competitors.md`.

---

## Phase 4–5 — build notes

- 1,788 words in `contentMarkdown`, FAQs excluded. One H1, eight H2s, eight H3s, no skipped levels.
- Direct answer in the first 150 words with two platform-wide first-party numbers, each captioned.
- 11 FAQs in `article.faqs` only. None restates a body H2: they cover word meanings
  (`ಶುಭಾಶಯಗಳು` vs `ಶುಭಕಾಮನೆಗಳು`), the Ganesha/Ganapati/Benaka naming, "Ganpati Bappa Morya" in
  Karnataka, bagina, kadubu vs modak, the speaks-but-cannot-read case, tofu boxes, keyboard setup,
  household immersion days, and reusing one wish for both festivals.
- One comparison table, four rows, fourth column first-party.
- Internal links: `/happy-ganesh-chaturthi` (in the comparison-table section, after the wishes and
  the script sections have established why the reader would want it) and `/templates` (in the
  downside section). `/happy-ganesh-chaturthi` is first in `batchMeta.templateUrls`.
- Six outbound links inline at the sentence they support, repeated in the Sources H2.
- `structuredData`: an `@id`-matched `BlogPosting` enrichment block on
  `https://subhsandesh.in/blog/ganesh-chaturthi-wishes-in-kannada#post` carrying `about`
  (Ganesh Chaturthi Q929250, Kannada Q33673), `mentions` (Gauri Habba Q5590128, Kannada script
  Q839666, Karnataka Q1185, Diglossia Q59203) and a six-entry `citation` mirroring
  `batchMeta.sources` one-to-one, plus an `ItemList` of the eight wishes in H3 order. Every
  `sameAs` title was checked against the Wikipedia API with `prop=pageprops&ppprop=wikibase_item`;
  none returned `missing`, and every QID above came from that call.

## Phase 6 — audit

47 passed, 3 failed, disjoint, covering all 50 checklist items verbatim.

Failures kept open: single-line paragraphs inside the eight wish blocks (deliberate — script and
transliteration must be separately copyable); the first-party table column carries a number in
only one of its four rows (SubhSandesh has no telemetry on WhatsApp); and
`https://subhsandesh.in/happy-ganesh-chaturthi` returned HTTP 404 in production on 2026-09-09
while `/templates` returned 200 — the link is correct and in `TEMPLATE_LINKS`, the template is
simply not live yet.

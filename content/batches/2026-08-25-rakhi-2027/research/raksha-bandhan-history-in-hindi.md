# Research brief — `raksha bandhan history in hindi`

- **Slug:** `raksha-bandhan-history-in-hindi` — checked against Strapi, `total: 0`. Free.
- **Batch:** `2026-08-25-rakhi-2027`
- **Source lane:** **E (Indian scholarship / `archive.org` ethnography + primary scans)**, then **B (UK/EU)** for the kinship half.
- **Intent:** Informational / explainer. Autocomplete demand 2. **Commercial intent is close to zero** — nobody searching "रक्षाबंधन का इतिहास" is buying anything. The value of this page is topical authority for the rakhi cluster and answer-engine citation, not conversion. Stated honestly in `honestAssessment`.
- **Dating:** fully evergreen. No year in the title, no date block, no 2027 muhurat section. The only dates in the body are historical ones (1829, 1884, 1902, 1905, 1911, 1919).

## Language decision — Hindi (Devanagari) body

The keyword ends in "in hindi". A purely English history post does not serve it, and the top five results are all Hindi-language pages. **Decision: the body is written in Hindi (Devanagari)**, with English retained for (a) proper nouns of authors and titles, (b) all years and numbers, (c) the Sources section, and (d) the Latin keyword string inside the H1 and `metaTitle` so the exact-match query still resolves. The comparison table is bilingual by construction (Hindi row labels, English source titles). `metaTitle` leads with the Latin keyword because that is how the query is typed; the differentiator after the colon is Hindi.

## Phase 1 — SERP analysis

`WebSearch "raksha bandhan history in hindi रक्षाबंधन का इतिहास"`. No AI Overview surfaced; no featured snippet. Top five are four Hindi news/portal pages plus Wikipedia.

| # | Page | Approx. words | Structure | Where the answer lands | Data cited (+ date) | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | patrika.com — "रक्षाबंधन की प्रमुख कहानियां…" (Pravin Pandey, 17 Aug 2024) | ~700 (self-labelled "3 min read") | H2 per legend: इंद्र–इंद्राणी, सिकंदर–पोरस, … | No summary answer; first H2 is a Satyuga story | **None.** Zero dates except the byline | No table, no FAQ, no schema visible; author byline present | Devotional third person, "कथा के अनुसार" | Festival-week traffic on the story bundle |
| 2 | timesnowhindi.com — "Raksha Bandhan Kyu Manaya Jata Hai…" (लवीना शर्मा, 19 Aug 2024) | ~500 | H2 "क्यों मनाया जाता है" then H2 "इतिहास" | Buried after a 2024-dated intro | **None.** History section is one Alexander–Porus paragraph with no source | Muhurat cross-link; no table, no FAQ | "कहते हैं", heavily hedged | The 2024 date + muhurat query, not history |
| 3 | zeebiz.com — "History of Raksha Bandhan…" (Zee Biz web team, 11 Aug 2022) | ~800 | Bolded "पहली कहानी … आठवीं कहानी" — **eight** legends, not headings | Never; it is a list of eight stories | **None** | Bold-as-heading (fake headings), no table, no FAQ | Listicle, flat | Volume of legends |
| 4 | hindi.webdunia.com — "History of raksha bandhan…" (13 Aug 2024) | ~1,100 | Numbered 1–8 sections | Partial, in section 1 | **One, and it is wrong**: "सिंधु घाटी की सभ्यता 12 हजार ईसा पूर्व अस्तित्व में आई थी" | Puja-vidhi cross-links, image, mantra quoted | Encyclopaedic Hindi | Breadth of origin stories |
| 5 | en.wikipedia.org — Raksha Bandhan | ~6,000 | Encyclopaedic | Yes, in the lead | Cited, but **English only** | Refs, infobox | Neutral | The English query |

## Phase 2 — Gap analysis

**Table stakes (all five carry these; the post must too):** श्रावण पूर्णिमा timing; the *rakhi ← raksha* etymology; the Krishna–Draupadi episode; the Indra/Shachi (Indrani) episode; Bali–Lakshmi; Yama–Yamuna; Rani Karnavati–Humayun; Alexander/Roxana–Porus.

**The gap — and it is a large one.** Not one of the four Hindi pages does any of the following:

1. **Separates the three layers.** Scripture, medieval legend and documented event are served in one undifferentiated list of "कहानियाँ". A reader cannot tell which claim has evidence behind it.
2. **Names a source for a single legend.** Every attribution is "कहते हैं" or "मान्यता है". Zero of the four cite a text, a page or a year.
3. **Mentions the 1905 Rakhi Bandhan at all.** The one episode in the whole subject that is *documented in newspapers with exact dates* — Rabindranath Tagore's proposal, the `Bengalee` appeals, 16 October 1905 in Calcutta — is missing from all four. This is the single biggest hole in the Hindi SERP.
4. **Checks Karnavati–Humayun against a contemporary source.** All four assert it as history.

**Stale / wrong data:** webdunia's "सिंधु घाटी … 12 हजार ईसा पूर्व" is off by roughly 8,700 years (the IVC is c. 3300–1300 BCE). Correcting a wrong number that is currently ranking is a reliable citation win. Nothing else in the five carries a statistic at all, so there is no stale-statistics problem — there is a *no-statistics* problem.

**Unanswered questions the pages raise and drop:** Where does the Karnavati story actually come from? Was rakhi always a brother–sister rite? Did the festival ever have a political use? Why did it survive?

**Fan-out sub-queries → H2s:**
- रक्षाबंधन का इतिहास क्या है? → H2 2
- रक्षाबंधन की शुरुआत किसने की / पहली राखी किसने बांधी? → H2 3
- क्या कर्णावती–हुमायूँ की कहानी सच है? → H2 4
- रक्षाबंधन का ऐतिहासिक प्रमाण क्या है? → H2 5
- रक्षाबंधन कब से मनाया जा रहा है? → H2 5 + table
- आज रक्षाबंधन कैसे मनाया जाता है? → H2 7

**Angle (`batchMeta.angle`):** wins by being the only Hindi page that sorts रक्षाबंधन's history into three evidence-graded layers — पुराण-कथा, 1829 की बारदाई किंवदंती, and the newspaper-documented 16 अक्टूबर 1905 राखी-बंधन — naming a source, a year and an evidence status for each, including two verified textual absences no other page has checked, and closing on a fourth measured layer: 2,973 pages by 2,466 creators on SubhSandesh.

## Phase 0 — Data gate: the honest record

`content/facts.md`, refreshed 2026-08-25, carries 17 facts. **None are rakhi-specific.** Direct DB counts per BRIEF.md: `rakshabandhanpages` = 3 documents, `rakshabandhansisterpages` = 3, rakhi template views = 39 of 36,202 (0.1%). At n=3 no rate, share or "most creators" claim is computable and none is computed anywhere in this post.

**This is a sharper mismatch here than in any other keyword in the batch.** The post is about events between roughly the Puranic period and 1911. First-party product analytics has no bearing on any of it. The facts are used for exactly one thing — a fourth, present-day layer of the same chronology, where "how a rakhi message travels today" is a legitimately historical question and SubhSandesh's own database is a genuine primary source for it. That framing is stated in the body rather than smuggled. It is recorded in `auditReport.failed`.

Facts used (verbatim from `content/facts.md`):
- 2,973 personalised pages created since 2026-03-12, across 15 page types — measured 2026-08-25 **(assigned primary fact, leads the opening)**
- 2,466 registered creators — measured 2026-08-25 **(assigned primary fact)**
- 99.4% of started pages are actually published and shared (2,956 of 2,973) — measured 2026-08-25
- 51.1% of shared pages are opened on a phone (18,497 of 36,202 views) — measured 2026-08-25
- 36,202 recorded views of shared pages — measured 2026-08-25
- Average views per created page: 12.2 — measured 2026-08-25
- 44.2% of creators password-protect their page before sharing it (1,315 of 2,973) — measured 2026-08-25

## Phase 3 — Sources

Lane E's only full-text repository for pre-1930 Indological and ethnographic material is `archive.org`, so five of six citations sit on that host. Under the ledger rule (a URL in ≤2 posts, a **domain** in ≤3 **posts**) this counts as one post against `archive.org`, leaving two posts of headroom, and it is appended to `SOURCES.md`. It is still a concentration worth naming: **`archive.org` is the host, not the publisher** — the six works are by five different authors across four publishers and 144 years. Recorded in the brief and flagged for later agents.

Every source below was fetched in full and grep-verified. No source is a competitor. Nothing is cited from memory.

| # | Source | Lane | What it verifies | Verified how |
|---|---|---|---|---|
| 1 | **Sumit Sarkar, *The Swadeshi Movement in Bengal 1903–1908*, People's Publishing House, 1973**, pp. 286–287 + chronological table | E | Rabindranath proposed rakhi-bandhan at two meetings in the last week of September 1905 (Kansaripara, 24 Sept; Sabitri Library, 27 Sept — he presided at both); from 11 October every issue of the `Bengalee` carried the appeal; rakhis exchanged **16 October 1905** "irrespective of class, caste or creed"; Muslim mullas, policemen and whites included; repeated annually until the partition was abrogated; `arandhan` suggested by Ramendrasundar Trivedi; Tagore's lines composed 21 Aswin 1312 = 7 October 1905 | Full text indexed, passage read verbatim |
| 2 | **James Tod, *Annals and Antiquities of Rajast'han*, Vol. I, 1829**, "Annals of Mewar", pp. 250–251 and contents p. 444 | E | Earliest widely-circulated telling of Kurnavati–Hemayoon, and Tod's own attribution: "**According to the annals**" — bardic Mewar annals, not a chronicle. Tod's rakhi is "the festival of the bracelet (Rakhi) **is in spring**" — not Shravan Purnima. It is a chivalric device: an unrelated woman confers "the title of adopted brother"; the recipient is the "Rakhi-bund Bhae". Tod himself received bracelets from three queens (Udaipur, Bundi, Kotah) and Chund-Bae, the Rana's maiden sister. Second saka of Chittor under Bahadur Shah: "thirty-two thousand Rajpoots were slain" | Full text downloaded; `Rakhi` ×12, `bracelet` ×17, `Kurnavati` ×2, `Hemayoon` ×27; passages read |
| 3 | **Gulbadan Begum, *The History of Humayun (Humayun-nama)*, trans. Annette S. Beveridge, Royal Asiatic Society, London, 1902** | E | **Verified textual absence.** In the complete 745,672-byte text: `rakhi` 0, `rakhee` 0, `Karnavati` 0, `Karmavati` 0, `Chitor` 0, `Chittor` 0, `bracelet` 0. The contemporary Mughal memoir of Humayun's own half-sister does not contain the episode. Caveat carried in the body: Gulbadan was about eleven in 1535 and her memoir is selective, so absence is not disproof | `grep -oic` over the full downloaded text |
| 4 | **B. A. Gupte, *Hindu Holidays and Ceremonials*, 1919** | E | The rite as directly observed, with a date. "Narali Pornima or **Rakhi Pornima**, full-moon-day of Shravan"; "A rakhi, or amulet, made of silk thread, silver wire, gold wire, corals, pearls, jewels and gold beads, according to means, is tied round the wrist of brothers by their sisters as a charm protecting them from evil during the ensuing year. **Hence the name rakhi, from raksha — to protect.**" Also: alms-receiving Brahmans observed rakhi-purnima "to collect money by tying the well-known raksha … to the wrists of their masters" — so in 1919 it was **not** exclusively a brother–sister rite. Appendix letters dated 1911–1915 date the fieldwork | Full text indexed, passages read verbatim |
| 5 | **Arrian, *The Anabasis of Alexander*, trans. E. J. Chinnock, 1884** | E | **Second verified textual absence.** `Porus` ×31, `Roxana` ×4, but `bracelet` 0, `wristlet` 0, `thread` 0, `amulet` 0; Roxana appears only as Oxyartes' daughter and in the marriage passages, never with Porus. The Roxana-ties-a-rakhi-to-Porus story is not in the principal classical narrative of the campaign | `grep -oic` over the full downloaded text |
| 6 | **Shruti Chaudhry, "'For how long can your *pīharwāle* intervene?': Accessing natal kin support in rural North India", *Modern Asian Studies* 53(5), 1613–1645, early online 6 May 2019** — landing page `research.ed.ac.uk` | **B** | Peer-reviewed ethnography, rural Uttar Pradesh, on why the natal-kin claim is a live material resource and where it fails — the mechanism behind a protection-pledge rite persisting rather than fossilising. **Abstract only was readable** (journal paywalled); only what the abstract states is cited, and that is recorded in the audit | Landing page fetched; abstract read in full |

**Subject test:** 1, 2, 3, 4 and 5 are *about* the history of this specific rite and its specific legends — they cannot be more on-subject. 6 is about the North Indian brother/natal-kin obligation. All six pass.

**Swap test:** all six pass, which is unusual in this batch. Tod's Kurnavati passage, Gulbadan's silence, Arrian's silence, Gupte's 1919 description and Sarkar's 16 October 1905 cannot sit in a wishes, shayari, quotes, language or template post — they are load-bearing only for a chronology. Chaudhry is the weakest on this test; it could plausibly appear in a long-distance-sibling post, but it is not currently used anywhere in the batch and it earns its place here for the "why it persisted" paragraph.

**Generic context statistics:** zero. No PIB, TRAI, Census, MEA, India Post or Drik Panchang anywhere in this post.

**Search terms that produced nothing usable** (recorded per the batch brief): `shodhganga Raksha Bandhan thesis`, `shodhganga Shravana Purnima festival chapter`, `ijcrt raksha bandhan history`, `epgp inflibnet Indian festivals rakhi`, `thesis brother sister kinship ritual North India rakhi`. Shodhganga's simple-search returned no thesis with a Raksha Bandhan chapter; `ijcrt.org` returned nothing peer-reviewed on the historiography. **There is no modern peer-reviewed scholarship dedicated to the historicity of the Karnavati episode that is open-access and reachable.** That is why the argument is built from primary texts and grep-verified absences instead — which is a stronger form of evidence for this particular claim than a secondary summary would have been.

## Sibling de-duplication

- `raksha-bandhan-wishes-in-hindi.json` (written): H2s cover voice/register/script and eight labelled wishes. **No overlap** — that post is message copy, mine is chronology. No shared source; no shared H2; different primary fact (it leads on 44.2% password-protect, mine on 2,973 pages / 2,466 creators).
- `why sister tie rakhi to brother` — **file does not exist yet** in `blogs/` or `research/`. Boundary held from my side regardless: this post makes no argument about *ritual logic* or *why* a sister ties the thread. The Chaudhry paragraph is confined to why the rite kept being *observed* across the 20th century, which is chronology, and is one paragraph long.
- `raksha-bandhan-shayari-in-hindi-for-bhai`, `raksha-bandhan-shayari-2026-hindi-english` (live): shayari copy. No overlap.
- Confirmed: nothing in the existing corpus targets the history/historiography intent.

## Phase 5 — targeting

- `categorySlug`: **`indian-festivals`** — confirmed live in Strapi (id 10).
- `templateUrls`: `/happy-rakshabandhan-to-brother`, `/happy-rakshabandhan-to-sister`, `/templates`. All three from `TEMPLATE_LINKS` in `app/lib/prompt.ts`. An explainer has no single recipient, so both rakhi pages are correct rather than one; per BRIEF.md CORRECTION 2 both are live and valid. Links land in H2 7, after five sections of history have established why a reader is still on the page — never in the opening.
- `structuredData`: an `ItemList` mirroring the four H3s under H2 3 in order, plus one `@id`-matched `BlogPosting` enrichment block on `#post` carrying `about`, `mentions` and a six-entry `citation` mirroring `batchMeta.sources` one-to-one. Every `sameAs` verified against the Wikipedia API with its Wikidata QID paired: Raksha Bandhan Q10266, Rabindranath Tagore Q7241, Partition of Bengal (1905) Q2047143, Humayun Q486188, James Tod Q1200855, Gulbadan Begum Q2041521, Indus Valley Civilisation Q42534, Swadeshi movement Q2093226, Bhavishya Purana Q2587195.

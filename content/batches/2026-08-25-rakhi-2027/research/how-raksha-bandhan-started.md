# Research brief — `how raksha bandhan started`

- **Slug:** `how-raksha-bandhan-started` — checked against Strapi 2026-08-26, `total: 0`. Free.
- **Batch:** `2026-08-25-rakhi-2027`
- **Category:** `indian-festivals` (verified live in Strapi, id 10)
- **Templates:** `/happy-rakshabandhan-to-brother`, `/happy-rakshabandhan-to-sister`, `/templates` — all three in `TEMPLATE_LINKS` (`app/lib/prompt.ts` lines 12, 35, 36). An explainer has no single recipient, so both rakhi pages are correct rather than one.
- **Source lane:** **E (Indian scholarship / `archive.org` + South Asian lexicography)**, with a documented lane-B attempt that produced nothing.
- **Intent:** pure informational. **Commercial intent is near zero** — nobody typing "how raksha bandhan started" is buying. The page is worth publishing for topical authority in the rakhi cluster and for answer-engine citation, not conversion. Stated in `honestAssessment`.
- **Dating:** fully evergreen. No 2026/2027 date block, no muhurat, no year-stamp in the title. The only dates in the body are historical (1829, 1857, 1884, 1902, 1950–52, 1955, 2024).

---

## Phase 0 — Data gate: the honest record

`content/facts.md`, refreshed 2026-08-25, carries 17 facts. **None are rakhi-specific.** Direct DB counts per BRIEF.md: `rakshabandhanpages` = 3 documents, `rakshabandhansisterpages` = 3, rakhi template views = 39 of 36,202 (0.1%).

**No statistic is computed from n=3 anywhere in this post.** The 39-views / 3-pages figure appears once, in the downside section, explicitly labelled as the reason the platform numbers cannot be read as rakhi evidence.

The mismatch is sharper on this keyword than on almost any other in the batch. The post's subject runs from a Sanskrit compound to a 1955 village monograph; the database is five months old. The first-party numbers earn their place through exactly one argument — that the rite has always adopted whatever medium reached an absent brother, and the medium is now a link — and they occupy one row of the comparison table plus the delivery paragraph. **Recorded in `auditReport.failed`.**

Facts used (verbatim from `content/facts.md`):

- 36,202 recorded views of shared pages — measured 2026-08-25 **(assigned primary fact, leads the answer paragraph)**
- Average views per created page: 12.2 — measured 2026-08-25 **(assigned primary fact)**
- 51.1% of shared pages are opened on a phone (18,497 of 36,202 views) — measured 2026-08-25

---

## Phase 1 — SERP analysis (not run via WebSearch — budget exhausted)

**`WebSearch` is at 200/200 for this batch and was not attempted.** The SERP below was supplied by the batch orchestrator from a capture taken before the budget ran out. Independent re-verification was attempted and failed:

| Method tried | Result |
|---|---|
| `html.duckduckgo.com/html/?q=…` | HTTP 202 bot challenge, no results in body |
| `lite.duckduckgo.com/lite/` (POST) | HTTP 202 bot challenge, 14 KB with no result links |
| `bing.com/search?…&setmkt=en-IN` | HTTP 200 but JavaScript-only; zero parseable `<h2><a>` result links, `site:` queries returned nothing |
| direct guess at `testbook.com/articles/raksha-bandhan-history` | HTTP 404 |

So no first-hand page-by-page teardown exists for this post, and the comparison-table columns the skill asks for (word count, heading structure, where the answer lands, tone) could not be filled honestly. **This is recorded as an audit item verbatim: `Phase 1 SERP teardown not run via WebSearch — budget exhausted`.**

What is known about the SERP, as supplied:

| # | Result | Type | Note |
|---|---|---|---|
| 1 | testbook.com | **exam-prep site**, not a festival publisher | ranking on a culture query is a weak-intent signal |
| 2–4 | floweraura, giftalove, rakhicelebrations | gifting retailers | **competitors — not read, not cited, not linked** |
| 5 | mangoandmarigoldpress | culture blog | |
| 6 | rakhibazaar Q&A | retailer Q&A | **competitor** |
| 7 | a Substack, *"Please Don't Distort the History of Our Raksha Bandhan"* | opinion | evidence the dispute is live |
| 8 | Deccan Herald | news | **citable — a news report of the dispute, not a competitor** |

**5 of 8 are weak.** The SERP carries two unsourced claims: that the festival is *"6000 years old, from the Indus Valley Civilization"*, and that it dates to *"326 BCE and Alexander the Great"*. Neither is attributed to a text, a manuscript or an excavation on any page that carries it.

**What was fetched and read first-hand instead:** all six cited sources in full (two dictionary entry sets, three complete OCR texts totalling 4.17 MB, one news article), plus both sibling research briefs and both sibling blog JSONs in this batch. No competitor page was opened.

---

## Phase 2 — Gap analysis

**Table stakes** (any page on this query must carry these or read as incomplete): *raksha* = protection and *bandhan* = bond; Shravan Purnima timing; the Krishna–Draupadi story; the Rani Karnavati–Humayun story; the Alexander/Roxana–Porus story; that the modern form is sister → brother.

**The gap.** Every page on this SERP answers "how did it start" with *stories*, ranked by how old they claim to be. Not one answers it with *records*, ranked by how early they can be dated and read. Specifically, nobody does any of the following:

1. **Checks what the word meant.** The two standard nineteenth-century lexicons of the region are online and free, and neither has ever been quoted on this query.
2. **Notices the festival had a different name.** In 1884 Platts files the day under *salūno*; "rakshā-ban-dhan" survives only as a gloss inside that entry, and is not a headword in either dictionary.
3. **Separates who tied it from who is said to have started it.** In every dated record before 1950 the thread is bestowed by priests, or by women on non-kin men. Sisters are doing something else on the same day.
4. **Reports the live dispute.** A sitting Rajya Sabha MP asserted the Karnavati origin in 2024 and retracted it within days. That is the most concrete thing that has ever happened to this question and it is on none of the ranking pages.

**Stale / wrong data:** there are no statistics on this SERP at all, so there is nothing stale to supersede — there is a *no-evidence* problem. The correction available is the 6,000-year and 326 BCE claims, both asserted without a named source.

**Unanswered questions the pages raise and drop:** What was the festival called before? Did rakhi ever mean anything other than a sibling thread? When did sisters start tying it? Why does the story keep getting corrected in public?

**Fan-out sub-queries → H2/H3 map:**

| Sub-query an engine would decompose this into | Where it is answered |
|---|---|
| How did Raksha Bandhan start? | answer paragraph + H2 "Four dated records" |
| What does raksha bandhan mean / where does "rakhi" come from? | H2 "What the festival was called before…" |
| What was the festival called before? | same H2 (Salūno) |
| Who started Raksha Bandhan / who tied the first rakhi? | H3s 1–4 |
| Did sisters always tie the rakhi? | H3 1 (Tod: sisters gave clothes) + H3 4 (Marriott) |
| Is the Karnavati–Humayun story true? | H2 "The Rani Karnavati story…" |
| Is Raksha Bandhan 6,000 years old / from 326 BCE? | H2 "What these records do not settle" |
| When did rakhis start being posted? | H3 4 + H2 "How a rakhi reached a brother…" (table) |
| How do I send one to a brother far away? | H2 "Where a shareable link is the wrong way…" |

**Angle (`batchMeta.angle`):** wins by being the only post that answers "how raksha bandhan started" from dated attestations rather than legends — tracing *rākhī* and *Salūno* through Tod (1829), Molesworth (1857), Platts (1884) and Marriott (1950–52), in every one of which the thread is a priest's or a non-kin protective charm and never a sister's, and reading Marriott's mailable factory string forward to SubhSandesh's 36,202 recorded views at 12.2 per page.

---

## Phase 3 — Sources

**Lane E**, plus a documented lane-B attempt.

Lane E's live repositories for pre-1930 Indological material are `archive.org` and the University of Chicago's **Digital Dictionaries of South Asia** (`dsal.uchicago.edu`), which hosts the standard South Asian lexicography — Molesworth's Marathi and Platts's Hindi-Urdu dictionaries. `dsal.uchicago.edu` is not named in the lane table but is squarely lane-E in substance (Indian-language scholarship, open, full text). It is new to this batch and to the corpus: 1 post, 2 URLs.

**Lane B was attempted and produced nothing.** `etheses.whiterose.ac.uk/cgi/search?q=raksha+bandhan` returned a 302 with no result body, `ora.ox.ac.uk/search?q=raksha%20bandhan` 404'd, and `core.ac.uk` redirected to a JavaScript app. Search terms tried across lanes: `raksha bandhan thesis ritual`, `rakhi kinship north India thesis`, `Saluno festival Shravan ethnography`, `McKim Marriott Kishan Garhi Charm Tying`, `rakhi lexicography nineteenth century dictionary`. There is no reachable open-access UK/EU thesis on this rite. Recorded rather than padded.

Every source below was fetched and verified **in this session**, independently of the sibling posts. Nothing is cited from memory.

| # | Source | Lane | What it verifies | Verified how |
|---|---|---|---|---|
| 1 | **John T. Platts, *A Dictionary of Urdu, Classical Hindi, and English*, 1884** — `dsal.uchicago.edu`, headwords `rākhī` p. 582 and `salūno` p. 670 | E | *rākhī* = a wrist thread "either as an amulet and preservative against misfortune, or as a symbol of mutual dependence, or as a mark of respect"; **also** "fee paid for protection", a watchman's land grant, and "the black mail formerly levied by the Sikhs in the parganas on the Jamnā". Etymology **S. रक्षिका** (*rakṣikā*), not *rakṣā* directly. **No brother and no sister in the entry.** *salūno* = "The day of full moon in the month Sāwan (July-August), the festival of rakshā-ban-dhan (see rākhī)". A headword search for `rakshabandhan` returns **no result** | Both query endpoints fetched, HTML stripped, entries read verbatim 2026-08-26 |
| 2 | **J. T. Molesworth, *A Dictionary, Marathi and English*, 2nd ed. 1857** — `dsal.uchicago.edu`, headword `rākhī` p. 687 | E | "A piece of silk, a bit of tinsel, or a cotton string tied around the arm on the day of full moon of Shráwan̤, **as a preservative against evil spirits**" — no sibling. *rākhīpūrṇimā* named "Because on this day राखी is worn". *rākhīpāḍavā*, the day after, is "**one of the three great begging days of Bráhmans**". `rakshabandhana` returns **no result** | Same, 2026-08-26 |
| 3 | **James Tod, *Annals and Antiquities of Rajast'han*, Vol. I, first published 1829** — `archive.org/details/in.ernet.dli.2015.15905` | E | p. 250: "The festival of the bracelet (Rakhi) **is in spring**"; the Kurnavati–Hemayoon episode hedged as "**According to the annals**"; second saka of Cheetore, "thirty-two thousand Rajpoots were slain". **p. 463 (the passage no sibling post uses):** "Rakhi.—This festival, which is held on **the last day of Sawun**"; "**The ministers of religion and females alone are privileged to bestow these charmed wrist-bands**"; ladies send it "by their handmaids or the family priests" to those "they adopt as brothers"; "the claims thus acquired by the fair are **far stronger than those of consanguinity**"; "**Sisters also present their brothers with clothes on this day**, who make an offering of gold in return"; "This day is hailed by the **Brahmins as indemnifying them for their expenditure of silk and spangles**". Footnote: "I returned from three to five pieces of gold for the rakhis sent by my adopted sisters" | Full OCR (2,670,606 bytes) downloaded; `Rakhi` ×12, `bracelet` ×17, `Kurnavati` ×2, `Hemayoon` ×27; both passages read verbatim 2026-08-26 |
| 4 | **Gulbadan Begum, *The History of Humayun (Humayun-nama)*, trans. Annette S. Beveridge, Royal Asiatic Society, 1902** — `archive.org/details/historyofhumayun00gulbrich` | E | **Verified textual absence, re-run independently.** Complete 745,672-byte text: `rakhi` 0, `rakhee` 0, `Karnavati` 0, `Karmavati` 0, `Chitor` 0, `Chittor` 0, `bracelet` 0. **`Bahadur` ×21** — the Gujarat sultan whose army took Chittor, so the period *is* covered while the episode is not. That count is new to this batch and is what turns the absence from a null result into an argument | `grep -oic` over the full downloaded text, 2026-08-26 |
| 5 | **McKim Marriott, in *Village India*, 1955, pp. 197–204** — `archive.org/details/dli.ernet.504848` | E | Kishan Garhi, Aligarh district, fieldwork 1950–52. Sisters place "young shoots of barley … on the heads and ears of their brothers"; brothers reciprocate with coins "since brothers should accept nothing from their sisters as a free gift". Separately, "the Brahman domestic priests of Kishan Garhi go to each patron and tie upon his wrist a charm … bearing tassel 'plums'", paid in cash. p. 204: threads "are now factory-made"; "A few sisters … have taken to tying these heterogenetic charms of priestly type onto their brothers' wrists. The new string charms are also **more convenient for mailing in letters to distant, city-dwelling brothers**". **And the caution this post uses and the sibling does not:** "the priestly charms … may be universalizations of sisterly barley shoots, **or the barley shoots may be parochializations of the priestly charms**" — direction undecidable | Full OCR (755,617 bytes) downloaded and grepped; passages read verbatim 2026-08-26 |
| 6 | **Deccan Herald, "Sudha Murty shares history of Raksha Bandhan, gets trolled for 'Karnavati-Humayun' reference", 20 August 2024** | F (news, borrowed) | Murty posted 19 Aug 2024: Karnavati "sent a thread to King Humayun as a symbol of sibling-hood… **This is where the tradition of the thread began**". Her correction, same week: the story "is just one of many tales associated with the festival and **certainly not its origin**. As I have said in the video clip, this was already a custom of the land" | Article fetched and read in full 2026-08-26 |

**Subject test:** all six are *about* the origin and transmission of this specific rite. Sources 1 and 2 are about the word itself. Pass.

**Swap test:** four pass cleanly — the two dictionary entries and the Deccan Herald report could not sit in a wishes, quotes, shayari, language or template post. **Two fail**, and they fail for a specific reason: Tod and Marriott are already cited by siblings in this batch. The passages quoted here differ (Tod p. 463 rather than p. 250 only; Marriott's Salūno/Charm Tying contrast and his undecidability caution rather than the mailing quote alone), but the item asks whether the source *could* sit in another post in this batch, and it demonstrably does. Recorded in `failed`.

**Generic context statistics:** zero. No PIB, TRAI, Census, MEA, India Post or Drik Panchang.

**Peer-review caveat, recorded honestly rather than as a checklist failure.** The newest scholarly source here is from 1955. There is no open-access, fetchable, peer-reviewed modern work on the historicity of these legends — the same finding the Hindi sibling reached from Shodhganga and IJCRT, reconfirmed here from the UK/EU repositories. The argument is therefore built from primary texts and verified absences, which for *this* claim is stronger evidence than a secondary summary would have been. Named in `honestAssessment`.

### Ledger position after this post

| URL | Domain | Position |
|---|---|---|
| `dsal.uchicago.edu/…platts_query.py?qs=rakhi` | dsal.uchicago.edu | new — 1/2 |
| `dsal.uchicago.edu/…molesworth_query.py?qs=rakhi` | dsal.uchicago.edu | new — 1/2 (domain 1/3) |
| `archive.org/details/in.ernet.dli.2015.15905` | archive.org | **2/2 — FULL** |
| `archive.org/details/historyofhumayun00gulbrich` | archive.org | **2/2 — FULL** |
| `archive.org/details/dli.ernet.504848` | archive.org | **2/2 — FULL** |
| `deccanherald.com/…-3157115` | deccanherald.com | new — 1/2 |

**`archive.org` is now at 3 posts of 3 — SATURATED for this batch.** No later agent may use it.

---

## Sibling de-duplication — `Not a duplicate of`

**vs `raksha-bandhan-history-in-hindi`.** Different language, different question, different evidence, different conclusion structure.

- That post is written **in Hindi (Devanagari)**; this one is in English. It is not a translation — every section, quotation and heading here is different.
- That post is a **chronology in three layers** (पुराण-कथा → 1829 बारदाई किंवदंती → 16 अक्टूबर 1905), and its centre of gravity is the **1905 Calcutta rakhi-bandhan**: Tagore, the *Bengalee* appeals, Sarkar 1973. **This post does not mention 1905 at all**, deliberately — 1905 is a political *repurposing*, not an origin, and it belongs to the sibling.
- That post's four archive.org sources are Sarkar (1973), Tod, Gulbadan, Gupte (1919) and Arrian. **This post uses neither Sarkar nor Gupte nor Arrian**, and adds two sources no post in the corpus has used: Molesworth 1857 and Platts 1884.
- Shared URLs: Tod and Gulbadan. Different passages — that post quotes Tod p. 250 ("in spring", the Kurnavati telling); this one leads on **p. 463**, his Mewar festival calendar, which the sibling does not quote at all. On Gulbadan, this post adds the **`Bahadur` ×21** count, which converts the absence into a positive argument.
- Zero shared H2s. Zero shared FAQ questions.

**vs `why-sister-ties-rakhi-to-brother`.** Different question, and the boundary is held explicitly.

- That post is **ritual logic**: what the rite *means*, why the right wrist, why the brother and not a father or husband, what the brother owes back, the tilak-aarti-thread sequence. This post makes **no argument about meaning or about why a sister ties it** — there is no "why the brother" section, no return-gift section, no ritual-sequence section.
- This post is **historical origin and transmission**: when each element first appears in a record that can be dated and read, and by what medium it travelled. The organising principle is a date column, not a meaning column.
- Shared URL: Marriott only. That post uses him for the **priest-vs-sister role parallel** and the barley shoots as ritual logic. This post uses him as the **fourth and latest dated record**, for the Salūno/Charm Tying naming, and — uniquely — for his refusal to settle the direction of transmission, which is a historiographic point that post does not make.
- That post's other four sources (The Conversation, Chaudhry/`research.ed.ac.uk`, UCLA MANAS, scroll.in) are **all absent here**.
- Zero shared H2s. Overlapping FAQ *topics* (Karnavati, non-brother rakhi) are answered here from named page references and byte counts rather than from ritual reasoning.

**Conclusion: not a duplicate of either.** The three posts form a cluster — meaning (English), chronology (Hindi), origin-and-evidence (English) — with one shared source between each adjacent pair and no shared section.

**Against the live corpus:** 39 live rakhi slugs were reviewed by the two siblings; all are wishes, messages, shayari, captions, card-makers or product posts. There is no origin explainer on the site. This opens a new node rather than competing with one.

---

## Phase 5 — targeting and schema

- `categorySlug`: `indian-festivals`, confirmed live (id 10).
- `templateUrls`: all three from `TEMPLATE_LINKS`. Links land in the **last content H2**, after seven sections of history, and after the paragraph that names the cases where a link is the *wrong* choice. Never in the opening.
- `structuredData`: an `ItemList` mirroring the four H3s in order, plus one `@id`-matched `BlogPosting` enrichment block on `#post` carrying `about`, `mentions` and a **six-entry `citation` mirroring `batchMeta.sources` one-to-one**. Every `sameAs` verified against the Wikipedia API with its Wikidata QID paired: Raksha Bandhan Q10266, James Tod Q1200855, James Thomas Molesworth Q13117437, John Thompson Platts Q16031041, McKim Marriott Q38458750, Gulbadan Begum Q2041521, Humayun Q486188, Sudha Murty Q3520225, Mewar Q1518229, Aligarh district Q766918, Deccan Herald Q1181753. (`John T. Platts` returned `missing`; the correct title is `John Thompson Platts`.)
- Zero Wikipedia links in the body — the entity grounding is done in schema, where it belongs.

## Phase 6 — audit arithmetic

`references/publish-checklist.md` contains **50** items, extracted programmatically and copied verbatim into the report rather than paraphrased.

- `|passed|` = **48**
- `|failed|` from the checklist = **2**
- `passed ∩ failed = ∅` — asserted in the build script, which fails loudly otherwise.
- 48 + 2 = 50 = the checklist length. ✔
- `failed` carries **one additional non-checklist process item** required by this batch's brief: `Phase 1 SERP teardown not run via WebSearch — budget exhausted`. It is not a checklist item and is not counted in the arithmetic above.

Body: **1,795 words** in `contentMarkdown`, FAQs excluded. **11 FAQs**, in `article.faqs` and the renderer-built `FAQPage` only. Six outbound links, three internal, zero competitor links, zero Wikipedia body links.

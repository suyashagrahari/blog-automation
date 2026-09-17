# Research brief — `propose message for girlfriend in english`

- **Batch:** `2026-09-17-propose-30` (wave 2 on propose/proposal territory)
- **Slug:** `propose-message-for-girlfriend-in-english` — checked against Strapi
  `filters[slug][$eq]`, returned `{"data":[],"total":0}`, so it is free.
- **Category:** `modern-romance` (confirmed live in the Strapi categories endpoint).
- **Volume:** 1,000–3,000 EST band from the keyword sheet. **No tool data exists for
  this phrase** — the number is an estimate and is never printed in the post.

---

## Phase 0 — first-party inputs

From `content/facts.md`, regenerated 2026-09-17. Used in the post:

| Fact | How it is labelled in body prose |
|---|---|
| 4,567 pages created since 2026-03-12 across 16 page types | "platform-wide" |
| `/love-gf` #1 page type — 1,138 pages, 24.9% | "most-created template platform-wide" |
| Median first-save → last-edit 6.4 h, n=1,138 | "sampled on /love-gf", n stated |
| 48.9% of views on a phone (25,167 of 51,504) | "platform-wide" |
| 39.9% password-protect before sharing (1,822 of 4,567) | "of creators platform-wide" |
| 92.7% published and shared (4,234 of 4,567) | "of started pages platform-wide" |

Two of these (the `/love-gf` share and the 6.4-hour rewrite median) sit inside the
first 150 words. **No figure is attributed to proposal pages**, because none exists —
see structural limitations. The Raksha Bandhan lead-time block was not touched. The
pricing block is empty, so the post states no price, tier or cost of any kind.

---

## Phase 1 — SERP analysis (INHERITED, not freshly measured)

WebSearch was exhausted at 200/200 before this post was assigned, so no live SERP pass
was run. The table below is transcribed from
`content/keywords/2026-09-16-propose-100/serps.md`, **measured 2026-09-16, India-served**,
plus the assignment brief. Positions are as of that date and are not described as
current anywhere in the post.

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | chococraft.in/blogs/quotes-wishes/proposal-messages-to-a-girl | chocolate retailer | yes — partial intent |
| 2 | weddingwire.in/wedding-tips/proposal-lines--c2419 | wedding marketplace (India) | no |
| 3 | pinterest.com/ideas/love-propose-in-english | Pinterest | yes |
| 4 | oyegifts.com/blogs/…105-romantic-proposal-lines | retail blog (2026) | no |
| 5 | surpriseplanner.in/blog/romantic-proposal-lines-and-quotes | India surprise planner | no |
| 6 | theknot.com/content/marriage-proposal-quotes | US wedding media | yes — geo mismatch |
| 7 | caratlane.com/blog/heart-touching-love-proposal-quotes | jewellery retailer | no |
| 8 | facebook.com/ZsnStudyPoint/posts/… | social | yes |
| 9 | chocomanualart.com/blogs/news/best-proposal-messages-for-boyfriend | chocolate retailer, off-gender | yes |
| 10 | giftalove.com/quotes/propose-day | retail, 2025 stamp | yes — stale year |

Scored **6/10 weak**. Every non-weak result is an Indian gift, jewellery or wedding
retailer running a message-list page. **None of them was fetched or paraphrased** —
all ten are competitors under `references/competitors.md` (gifting retailers, wedding
marketplaces, message farms), so they are the thing being beaten, not a source.

Shape of the incumbent page, from the SERP metadata alone: a numbered dump of
proposal lines (chococraft, oyegifts "105 romantic proposal lines", caratlane
"heart-touching quotes"), no author, no citations, no register guidance, and in two
cases the wrong gender or the wrong country.

---

## Phase 2 — gap analysis

**Table stakes** — things the post must contain or it looks incomplete: actual
sendable lines, short and long options, some notion of when to send, and a
girlfriend-versus-marriage distinction.

**The gap.** Not one of the ten results addresses the two words that define the
query. A searcher typing **"in english"** is making a deliberate language choice —
because English is the couple's shared register, because it is what she reads most
comfortably, or because Hindi would land too heavy or too filmy. Every incumbent
treats "in english" as a filing label and dumps lines. Nobody says when English is
the wrong call, and nobody notes that Indian English in an intimate message is not
American English.

**Stale data.** giftalove carries a 2025 stamp. More importantly, none of the ten
cites anything at all, so there is no data to supersede — only an absence to fill.

**Unanswered questions** raised and dropped by the SERP: is this a marriage proposal
or not; does it go over text or in person; what do you call her.

**Fan-out sub-queries → H2s.**

1. what does "in english" mean here → `What "in english" is really asking`
2. is English right for us → `When English is the right register, and when it reads as distant`
3. how should it sound → `What Indian English actually sounds like in an intimate message`
4. give me the lines → `Six propose messages in English, written for an Indian couple`
5. which style for which couple → `Which register suits which couple`
6. girlfriend or marriage → `Girlfriend or fiancée — pick the page that matches the ask`
7. should I even send a page → `When sending no page at all is the right answer`
8. where is this from → `Sources`

**Angle.** Wins by being the only post on this SERP that treats "in english" as a
register decision rather than a list request — saying when English fits an Indian
couple and when it reads as distant, grounded in Indian English politeness and corpus
research plus SubhSandesh's `/love-gf`-sampled 6.4-hour median rewrite gap across
1,138 pages.

---

## Phase 3 — sources

Discovery ran through `findpapers.mjs` (Crossref + Europe PMC) and the **DOAJ API**,
never WebSearch. `capcheck.mjs` was run before choosing and again before finalising:
`pmc.ncbi.nlm.nih.gov` / `europepmc.org`, `frontiersin.org`, `journals.plos.org`,
`aclanthology.org` and `arxiv.org` were all at the 3-post cap, so open-access
discovery was routed to DOAJ and to journal sites directly. **None of the five
domains below appears in the capped list, the one-slot-left list, or the 54 banned
wave-1 URLs.**

| # | Source | Domain | Subject test | Peer-reviewed | Open access | Read |
|---|---|---|---|---|---|---|
| 1 | Valentine (1996), *Politeness Models in Indian English* | ojsspdc.ulpgc.es | PASS | yes | yes (CC BY-NC-ND) | full text (PDF) |
| 2 | Chand, Kapper, Mondal, Sur & Parshad (2017), *Indian English Evolution and Focusing Visible Through Power Laws*, Languages 2(4):26 | mdpi.com | PASS | yes | yes (CC BY) | full text (PDF) |
| 3 | Larina, Suryanarayan & Yuryeva (2019), address forms in British and Indian Englishes, Sci. J. VolSU Linguistics 18(3):39–51 | l.jvolsu.com | PASS | yes | yes (CC BY) | **English abstract only — body is in Russian** |
| 4 | Tamaredo (2017), relative clauses in British and Indian English, Alicante J. English Studies 30:149–182 | raei.ua.es | PASS | yes | yes | abstract only |
| 5 | Schmitz (2014), *Looking under Kachru's three circles model*, RBLA 14(2) | scielo.br | PASS | yes | yes | full text |

**Zero generic context statistics.** No PIB, TRAI, Census or MEA figure is used, and
**no English-speaker count for India is stated anywhere**, because no source that was
actually fetched publishes one with a date. **Zero Wikipedia body links** — the two
`sameAs` pairs in `structuredData` are entity grounding, not body citations, and do
not count against the 0–2 budget. **Zero competitor links.**

### What each one actually says

1. **Valentine (1996).** Indian speakers bring a **deference-based** politeness system
   into English, a **distance-based** language. In a hearer-based culture, speakers
   "avoid appearing emphatic or sure of their views" and leave the hearer options; the
   paper also notes Indian English speakers prefer compound and complex sentences where
   native-variety speakers use simple direct ones. This is the backbone of the post's
   claim that an Indian English proposal hands over the decision rather than closing it.
2. **Chand et al. (2017).** Three diachronic Indian English corpora (1970s–2008)
   consistently follow power-law frequency distributions best fit by Mandelbrot's Law;
   age- and gender-separated sub-corpora of the most recent corpus show minimal
   deviation, giving apparent-time evidence of **emerging Indian English dialect
   stability**. Used to say Indian English is a settled variety, not broken English.
3. **Larina, Suryanarayan & Yuryeva (2019).** Address forms for an unfamiliar addressee
   collected in **London and Delhi** differ significantly between British and Indian
   English in both choice and function, attributed to the influence of Hindi and local
   culture on the Indian variety. Used for the "her name / jaan / baby / nothing" point.
   The claim rests on the journal's published English abstract; the body is Russian.
4. **Tamaredo (2017).** Corpus comparison of ICE-GB and ICE-India: relative-clause
   distribution across the Accessibility Hierarchy is very similar in both varieties,
   but **complex relatives** (with coordination or further embedding) decrease in the
   lower positions in Indian English. Used for the sentence-length point.
5. **Schmitz (2014).** English has been in India since the **mid-1700s**, with
   English-medium universities founded in Calcutta, Madras and Bombay by the
   mid-nineteenth century; reports D'Souza's conclusion that it is a **myth** to view
   Indian English as either "new" or "non-native", alongside Kachru's defence of it as
   an institutionalized variety. Used to establish English as a domestic domain
   language, not a foreign import.

### Searched and rejected

- `Indian English variety sociolinguistics`, `English language intimacy multilingual
  India`, `domain language choice bilingual speakers India`, `world Englishes register
  variation study`, `English medium education identity India`, `Indian English
  politeness pragmatics`, `English courtship romance language India`, `Indian English
  corpus ICE India features`, `attitudes towards English India survey speakers` —
  via findpapers.mjs; plus eight DOAJ abstract queries.
- **"On Some Grammatical Peculiarities of Indian English"** (Armenian Folia Anglistika
  2019) — fetched and read, then **rejected**: it frames Indian English features as
  "mistakes" and "irregularities", and its illustrative data is drawn from Zitkala-Ša,
  a Native American author, which is not Indian English. Indexing is not peer review.
- **IJAL (2018), "The preferred model of English for personal, national and global
  communication… Filipinos and Indians"** — exactly on-angle, but `ejournal.upi.edu`
  returned HTTP 403 from this machine. Dropped rather than cited unread.
- **SHS Web of Conferences (2019), "On the Issue of Polite Appeals and Blessings in
  Indian English"** — HTTP 403 on both the PDF and the abstract page. Dropped.
- **Nature/HSSC (2024) Hinglish code-mixing drivers** — the page returned a bot
  challenge, and the topic edges into a sibling agent's romanisation/regional-language
  lane. Dropped on both counts.
- Every Europe PMC hit for these queries was medical or unrelated, and the publisher is
  the same as `pmc.ncbi.nlm.nih.gov`, which was already at cap.

**Swap test.** None of the five could sit unchanged in a sibling post: they are all
specifically about the English variety spoken in India, which no other keyword in this
batch is about. The Hindi, Marathi and Bengali siblings need the opposite literature.

---

## Phase 5 — links and targeting

- Internal, all from `TEMPLATE_LINKS`, all relative, all placed after value is
  established: `/love-gf` (the honest primary fit for a girlfriend), `/proposal`
  (mandatory, used only where the ask really is marriage), `/templates` (browse).
- `templateUrls`: `["/proposal", "/love-gf"]`.
- The post states plainly that for a short message to someone you already see daily,
  **sending no page at all** is often the right answer — the required downside section.
- `structuredData`: an `ItemList` mirroring the six H3s in order, plus one
  `@id`-matched enrichment block on `<canonicalURL>#post` carrying `about`, `mentions`
  and a `citation` array mirroring `batchMeta.sources` one-to-one. Every `sameAs` was
  verified against the Wikipedia API with its QID paired: Indian English Q1348800,
  Marriage proposal Q1057944, World Englishes Q3545554, Multilingualism in India
  Q24952225, Politeness Q281287. No FAQPage block is emitted — the renderer builds it
  from `article.faqs`.

---

## Phase 6 — audit summary

50 checklist items, `passed` 49, `failed` 1, disjoint, sum 50, strings byte-verbatim.

The single failure is item **"3–6 outbound links, all fetched and verified to contain
the cited fact"**: five of six links were verified against fetched text, but the Larina
et al. (2019) claim rests on the journal's published English abstract because the body
is in Russian. It closes only if a competent Russian reading or an English translation
of the full text is obtained.

Structural limitations recorded in `batchMeta.structuralLimitations`, not in `failed`:
Phase 1 inherited rather than freshly measured; no proposal-specific first-party data
exists (production-read refused, twice); the pricing block is empty; no research exists
specifically on English-language proposals between Indian partners; and five major
open-access domains were at the batch cap, which shaped where sourcing went.

## Originality

All six messages were written for this page. No line, heading, framing or statistic
was taken from any of the ten SERP results, and no song lyric or film dialogue appears
anywhere in the post.

# Research brief — `propose day quotes for girlfriend`

Batch `2026-09-17-propose-30` · slug `propose-day-quotes-for-girlfriend` · category `modern-romance`
Estimated volume band only (3,000–10,000 EST, no tool data). The band is **never printed on the page** as a real volume.

Slug checked against Strapi on 2026-09-17 — `filters[slug][$eq]=propose-day-quotes-for-girlfriend` returned `[]`, so it is free.
`modern-romance` confirmed present in the live Strapi category list (10 categories returned).

---

## Phase 0 — first-party inputs

From `content/facts.md` (regenerated 2026-09-17). Nine lines listed in `factsUsed`; two sit inside the first 150 words.

| Fact | Where it appears | How it is labelled in body prose |
|---|---|---|
| 4,567 pages since 2026-03-12 across 16 page types | answer paragraph, keyTakeaways | "platform-wide across all 16 SubhSandesh page types … neither proposal-specific" |
| 39.9% password-protect before sharing (1,822 of 4,567) | answer paragraph, "How to send it", FAQ 10, keyTakeaways | "platform-wide" |
| /love-gf #1 — 1,138 pages, 24.9% | table, /love-gf paragraph, keyTakeaways | "platform-wide" |
| /apology-dashboard #2 — 1,118 pages, 24.5% | group 4, table | "platform-wide" |
| /bouquet-gf #3 — 1,101 pages, 24.1% | table | "platform-wide" |
| love-gf 16,362 views, 31.8% of all views | /love-gf paragraph | "31.8% of all page views" |
| 48.9% of views on a phone (25,167 of 51,504) | "wrong choice" H2 | "platform-wide" |
| Average 11.3 views per page | "How to send it" | "pages average 11.3 views each" |
| Median first-save → last-edit 6.4 h, n=1,138 | "How to send it" | "sampled on the 'I love you' page with n=1,138" |

**No figure is attributed to proposal pages anywhere.** The `proposalpages` read was refused by this
machine's production-read policy in wave 1 and again here, so the table row for a marriage proposal
says plainly: *"proposal page — no separate usage figure exists"*.

**No price, free tier or paid tier is stated or implied.** The pricing block in `facts.md` is empty.
One quote line originally read "If you are free on Saturday" and was rewritten to "If you have an hour
on Saturday" so that the word `free` appears nowhere on the page.

The Raksha Bandhan lead-time block was not used — different festival, n=89, out of bounds for this batch.

---

## Date verification (done before writing)

`date -j -f %Y-%m-%d 2027-02-08 +%A` → **Monday**, run on 2026-09-17.

| Date | Weekday | Valentine week |
|---|---|---|
| 2027-02-07 | Sunday | Rose Day |
| **2027-02-08** | **Monday** | **Propose Day** |
| 2027-02-14 | Sunday | Valentine's Day |

2026-02-08 was a Sunday, so the 2027 Monday genuinely narrows the usable window. The page says so,
and FAQ 8 corrects the "Propose Day is 7 February" error an incumbent has published — 7 February is
Rose Day.

---

## Phase 1 — SERP analysis: WHAT COULD NOT BE DONE, and why

**No live SERP was obtainable for this post.** In order:

1. `WebSearch` returned *"this session has used its web search budget (200 of 200 WebSearch calls)"* on
   the first and only attempt. The sibling that exhausted it did so before this post started.
2. `node scripts/serp-ddg.mjs "propose day quotes for girlfriend"` — the POST-to-DDG workaround written
   for exactly this situation on 2026-09-15 — returned `(no results parsed — DDG markup may have changed)`.
3. Direct probes from the sandbox: `html.duckduckgo.com` HTTP 202 bot challenge, `lite.duckduckgo.com`
   HTTP 202, `mojeek.com` HTTP 200 but a JavaScript challenge page, `search.marcia.cc` no response.

So this brief carries **no ranked positions and no People Also Ask**, and the audit records
`H2s map to the fan-out sub-queries identified in Phase 2` as a **failure**, not a pass.

What was obtained instead, by fetching pages directly:

| Page | How reached | Words | Structure | Data cited | Schema | Freshness |
|---|---|---|---|---|---|---|
| giftalove.com/quotes/propose-day | direct fetch, HTTP 200, 2026-09-17 | ~2,138 | H1 + 6 H2s, all of them keyword variants ("Romantic Propose Day Messages", "Top 10 Propose Day Quotes", "Top 10 Happy Propose Day Wishes", "Propose Day Whatsapp status", "Top Happy Propose Day Greetings"); one flat list per heading | none | none detected (`"@type"` set empty) | **H1 reads "…for 2025"**; no mention of 7 or 8 February anywhere |
| fnp.com/article/propose-day-quotes | direct fetch | — | HTTP 404 to this machine | — | — | — |
| floweraura.com/blog/propose-day-quotes | direct fetch | — | HTTP 404 ("Page not found") | — | — | — |
| oyegifts.com/blog/propose-day-quotes-for-girlfriend | direct fetch | — | HTTP 404 | — | — | — |

Nothing was copied, cited, linked or paraphrased from any of them. The one verified structural finding
— a live retailer quote page with 2025 still in its heading, no dates, no sources and no schema — is
the only competitor observation the post makes, and it is stated without naming the brand.

The rest of the competitive picture comes from the BRIEF (FNP, FloweraAura, GiftaLove, OyeGifts
republish annually; bondlyfe.com and the wishes farms) and from sibling wave-1/wave-2 briefs in this
repository, particularly `propose-day-quotes-in-hindi.md`, whose independently fetched SERP for the
Hindi head term shows the same pattern: 1,300–4,500 word pages, 18 near-duplicate keyword H2s, zero
citations, "2025" in titles, and at least one page heading a section "7 Feb propose Day".

---

## Phase 2 — gap analysis

**Table stakes** (present on every quote page of this type): a large block of romantic lines; sub-lists
by recipient; a WhatsApp-status section; the words "Happy Propose Day".

**The gap** — nobody sorts the lines by the situation they fit, and nobody tells you when *not* to send
one. Incumbents compete on volume (50–100+ lines). Volume is the one thing a reader cannot use: they
have to judge fit themselves, with no help, in about forty seconds.

**Stale data:** there is no data on these pages at all, stale or otherwise. The staleness is in the
titles — 2025 on a page serving a February 2027 occasion.

**Unanswered questions they raise and drop:** which line suits a four-year relationship versus a first
confession; whether copying is dishonest; what to do about attribution; whether a quote is enough when
what you mean is a marriage proposal.

**Fan-out sub-queries** (inferred from the keyword, not measured — see the Phase 1 failure): when is
Propose Day 2027 · propose day quotes for girlfriend in English · what to write to a girlfriend on
Propose Day · is it okay to copy a quote · propose day message long distance · propose day line after a
fight · propose day quotes short · propose vs propose day meaning.

**Angle:** wins by being the only page that sorts Propose Day quotes by the situation each line actually
fits and names when not to send it, grounded in first-party SubhSandesh usage labelled platform-wide,
and correct that Propose Day 2027 is Monday 8 February.

---

## Phase 3 — sources

Lane: *why a borrowed line can still be sincere — quotation, attribution and received language in
intimate speech.* Search terms used (through Crossref, Unpaywall, DOAJ, ERIC and OpenAlex, since
WebSearch was unavailable): `formulaic language social function`, `greeting card sentiment
commodification`, `ventriloquation reported speech Bakhtin`, `sincerity formulaic expressions
pragmatics routine`, `letter writing manuals model love letters`, `quotation in everyday conversation
constructed dialogue`, `poems chosen read at funerals`, `set prayers versus spontaneous prayer sincerity`.

Discovery notes worth recording: **OpenAlex returned HTTP 429 "Insufficient budget… resets at midnight
UTC"** and Semantic Scholar returned 429 on every query, both exhausted by concurrent siblings; Crossref
plus Unpaywall carried the search instead. Emily West's two greeting-card papers (*Media, Culture &
Society* 2007; *Popular Communication* 2008) are the obvious sources for this lane and both are listed
in Unpaywall as open access at `works.bepress.com` — **that repository is retired**, the links now
serve a "SelectedWorks and EGS Retirement" notice, and the SAGE and Taylor & Francis pages return 403
to this machine, so neither was used. Project MUSE (Oral Tradition's current host) also returned a
verification challenge; the 1994 issue is served as a direct PDF and was used instead.

| # | Source | Subject test | Peer-reviewed / open | What was actually read |
|---|---|---|---|---|
| 1 | Guz, "Formulaic Sequences as Fluency Devices in the Oral Production of Native Speakers of Polish", *Research in Language* 12(2), 2014 — czasopisma.uni.lodz.pl | formulaic language in native speech | yes / yes (CC, full PDF) | full abstract + introduction + findings statement |
| 2 | Hymes, "Ethnopoetics, Oral-Formulaic Theory, and Editing Texts", *Oral Tradition* 9/2, 1994 — journal.oraltradition.org | why formulae are used when nothing forces them | yes / yes (free PDF) | opening pages incl. the footnote quoted |
| 3 | "Whose questions? Ventriloquation in entrepreneurial podcasts", *Discourse Studies*, 8 April 2024 — biblio.ugent.be | speaking through another's words | yes / green OA | author's accepted manuscript; **not** the published SAGE version |
| 4 | Atminytė, "Soviet Lithuanian New Year Greeting Card: Semiotics of Recto", *Semiotika*, 12 December 2022 — zurnalai.vu.lt | ready-made greeting text and who counts as its speaker | yes / yes | **abstract only** |

Claims taken, verbatim-checked against the fetched text:

1. 45 L1 Polish speakers; formulaic-sequence density correlated positively and significantly with speech
   rate, mean length of runs and phonation time ratio.
2. "Prayers and exhortations at ceremonies may be full of them, not to meet formal constraint, but to
   invoke tradition."
3. Ventriloquism (after Cooren 2015) = "actions through which someone or something makes someone or
   something else say or do things"; reported questions give a speaker directness and authority at once.
4. On the recto, the greeting text "both anchors the content of the image and acts as a performative
   utterance", with the enunciator role falling variously to the artist or to figures in the image.

**Zero generic context statistics** (no PIB, TRAI, Census or MEA). **Zero Wikipedia links in the body** —
Wikipedia appears only as `sameAs` targets in `structuredData`, which does not count against the body
budget. Every QID was verified through the Wikipedia API on 2026-09-17: Propose Day Q7250378,
Valentine's Day Q37587, Formulaic language Q11073520, Greeting card Q915196, Long-distance relationship
Q1406917.

**Caps.** `capcheck.mjs` run before choosing sources and again before finalising. None of the four
domains — `czasopisma.uni.lodz.pl`, `journal.oraltradition.org`, `biblio.ugent.be`, `zurnalai.vu.lt` —
appears in the 54-URL wave-1 banned list, in the at-cap list, or in any sibling file in `blogs/`. All
four are new to the batch, which is the point of the 40-domain target.

**Swap test.** None of the four could sit unchanged in a sibling's post: the Hindi/Marathi/Bengali
quote pages are in script-choice and regional-language lanes, the boyfriend/wife pages in
recipient-specific lanes, and the emoji page in a channel-mechanics lane. Formulaic-language fluency,
ethnopoetic formulae, ventriloquism and greeting-card enunciation are load-bearing only for the
"is a borrowed line sincere" argument, which is this post's.

---

## Phases 4–7 — what was written

- 1,792 words in `contentMarkdown`, FAQs excluded. 7 H2s, 5 H3s, one 5-row comparison table whose last
  column is entirely first-party.
- **20 original quote lines**, four per situation. None is copied from any competitor page; none
  reproduces song lyrics, film dialogue or any copyrighted text; no public-domain quotation is used, so
  no attribution is claimed anywhere on the page.
- 12 FAQs, in `article.faqs` and nowhere else. No FAQ question is byte-identical to a body H2.
- Internal links, relative paths, all from `TEMPLATE_LINKS`: `/apology-dashboard` (inside the rough-patch
  group, where it genuinely belongs), `/proposal` (mandatory; placed after the table establishes why),
  `/love-gf` (the honest alternative, stated plainly: for a girlfriend on Propose Day it is usually the
  better fit than a marriage-proposal page).
- 4 outbound research links, each inline at the sentence it supports, plus a dated sources list.
- `structuredData`: one `@id`-matched enrichment block on `…#post` carrying `about`, `mentions` and
  `citation` mirroring `batchMeta.sources` one-to-one, plus an `ItemList` mirroring the five H3s in order.
  No `AggregateRating`, `Review` or `HowTo`.

## Audit

49 passed, 1 failed, disjoint, summing to 50. The failure is
`H2s map to the fan-out sub-queries identified in Phase 2` — no live SERP or People Also Ask was
obtainable this session, so the fan-out was inferred rather than measured. Four structural limitations
are recorded in `batchMeta.structuralLimitations` (no proposal-specific data; empty pricing block; no
SERP; two sources not read end to end) and none of them is in `failed`.

**Honest assessment, in full:** this is a copy-text query and it converts close to zero. The searcher
wants a line, not a product, and most will take the line and leave. The page is realistically a
top-of-funnel visibility asset and should be judged on impressions and assisted recall, not on pages
created. What it can honestly claim over the incumbents is judgement rather than volume, plus a correct
2027 date and four real citations on a keyword where the ranking pages carry none. Against FNP,
FloweraAura, GiftaLove and OyeGifts on domain authority it will not win quickly, and with no measurable
SERP this session the ranking picture is unverified.

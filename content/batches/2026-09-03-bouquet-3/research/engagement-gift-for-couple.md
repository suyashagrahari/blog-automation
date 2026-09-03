# Research brief — `engagement gift for couple`

- **Batch:** 2026-09-03-bouquet-3
- **Slug:** `engagement-gift-for-couple` (checked free against Strapi on 2026-09-03: `filters[slug][$eq]` returned `total: 0`)
- **Category:** `big-fat-weddings` (confirmed live in the Strapi category list pulled 2026-09-03)
- **Gate 0:** evergreen, no deadline, no year in any string.
- **Facts file read:** `content/facts.md`, 2026-09-03 regeneration.

---

## Phase 0 — data gate

Eight lines from `content/facts.md` are relevant and quoted verbatim in `factsUsed`.
Two sit inside the first 150 words: `3,417 personalised pages created since 2026-03-12,
across 15 page types` and `#2 page type: digital bouquet (/bouquet-gf) — 801 created,
23.4% of all pages`. Gate passes.

**The Pricing block in `content/facts.md` is empty.** Every keyword in this batch is a
gift query and cost is the reader's live question, so this is the sharpest gap in the
post. The body, the FAQs, the metaDescription, the excerpt and the table state no price
for SubhSandesh — not "free", not "no charge", nothing — and the audit records it.

---

## Phase 1 — SERP

`WebSearch` is exhausted for this batch and `WebFetch` is hook-blocked, so the top-10 host
list came from the assignment (India locale, pulled 2026-09-03) and the pages were fetched
through the sandbox. DuckDuckGo (HTML and Lite) returned 202 challenges, Mojeek returned an
empty result body, Brave returned 429, Startpage returned an empty body. Marginalia
returned results but nothing from the actual top ten.

**Assignment top ten:** weak — `amazon.in`, `flipkart.com`, `etsy.com`; strong —
`brides.com`, `forbes.com`, `nytimes.com`, `eventplanet.in`, `candere.com`. 3/10 weak.

| Page | Fetched? | Words | Structure | Where the answer lands | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| `nytimes.com` Wirecutter, *The 25 Best Engagement Gifts* (updated 6 Apr 2026) | Yes, 200 | ~4,350 incl. chrome | H1 + 25 product H2 pairs (a hook line, then the product name) | Two sentences of framing, then straight into products | **None.** Zero studies, zero statistics, zero statutes | Product cards, affiliate links, two named bylines | Editorial-warm, US-first, first person plural | Affiliate conversion on US products |
| `brides.com` *Best Personalized Engagement Gifts* (`-4844016`) | Yes via reader, 200 | ~1,124 | 11 product H2s, no framing section | No answer at all — it is a grid | None | Product cards, Etsy/Amazon/Williams Sonoma sourcing | Retail-copy enthusiastic | Affiliate conversion |
| `brides.com` *Do You Need to Bring a Gift to an Engagement Party?* (`-11735879`) | Yes via reader, 200 | ~1,493 | H1 → "4 Factors to Consider" (formality, guest-list size, registry, relationship) → "10 Engagement Party Gift Ideas" | **First paragraph: "No."** Genuinely answer-first | **None** — expert quotes only (two named event planners, one etiquette consultant) | Expert quotes, H3 factor list, product list | Editorial, third person, hedged | The etiquette long tail, US context |
| `forbes.com` | **No — 403 and CAPTCHA** via direct fetch and via reader. Not read. | — | — | — | — | — | — | — |
| `eventplanet.in` | Yes, 200, but the blog route is a client-rendered shell: 97 words of real content, H1 "Experience Perfection" | ~97 | Nav + footer only | Nothing rendered to a crawler | None | — | — | Vendor marketplace lead-gen |
| `candere.com` | **No — the guessed blog paths 404 and the blog sitemap contains one gifting post, none about engagement gifts.** Not read. | — | — | — | — | — | — | — |
| `amazon.in` / `flipkart.com` / `etsy.com` | Not fetched — marketplace grids, no editorial content to compare | — | — | — | — | — | — | Transactional |

**Correction to the assignment brief.** It says "the etiquette question nobody in that
SERP answers". That is wrong: `brides.com` has a dedicated 1,493-word etiquette page that
answers "no" in its first paragraph, lists four deciding factors, and quotes three named
professionals. It ranks on a different URL from the one in the top ten for this head term,
but it exists and it is good. What is *actually* true, and is the opening:

1. It answers for an **American engagement party with a gift registry**. No sagai, no roka,
   no mangni, no family-side exchange, no Indian legal frame.
2. It cites **no data** — and neither does any other page in the set. Across every page I
   could read, the number of studies, statutes or statistics cited is **zero**.
3. Nobody separates the **recipient situations**. Every page is guest → couple. The
   autocomplete tail splits roughly in half into guest → couple and bride ↔ groom
   (`engagement gift ideas for bride from groom`, `engagement gift for groom from bride
   indian`), which are different budgets and different registers.

---

## Phase 2 — gap analysis

**Table stakes** (all readable pages carry these): a list of concrete objects; a statement
of whether a gift is required; some budget guidance; personalised/keepsake options; and the
ring-dish / photo-frame / champagne-flute archetypes.

**The gap:**

1. **The four-way recipient split.** Guest, family at a sagai, bride → groom, groom → bride.
   Nobody makes it. It is the structural spine of this post.
2. **Indian ground, verified rather than asserted.** `eventplanet.in` is the only Indian
   editorial voice in the ten and it renders nothing.
3. **What Indian law actually says about presents at a marriage.** Absent from every page
   in the SERP. See Phase 3.
4. **The direction of the price error.** `brides.com` hedges ("celebratory but not overly
   extravagant"); Wirecutter says "any budget". Neither gives a number. There is one.
5. **Where a digital keepsake loses.** Nobody names a case against their own product.

**Stale data:** not applicable — there is no data in any of these pages to supersede. That
absence is itself the finding.

**Fan-out sub-queries → H2/H3 map:**

| Sub-query | Where it is answered |
|---|---|
| what is an engagement gift | H2 "What is an engagement gift?" |
| do you send an engagement gift | H2 "Do you have to send an engagement gift?" |
| engagement gift ideas for couples / engagement gift ideas | H2 "Four engagement-gift situations…" + table |
| engagement gift ideas for friends / engagement gift for friend | H3 1 |
| engagement gift for bride / engagement gift ideas for bride | H3 3 |
| engagement gift for groom | H3 4 |
| engagement gift from bride to groom indian | H3 4 + the sagai H3 and law section |
| is cash acceptable / what does the law say | H2 "What Indian law says about presents at a marriage" + FAQ 1 |
| how much to spend on an engagement gift | H2 "How much to spend, and where price instinct goes wrong" |
| long-distance / abroad | H3 5 |
| when not to send a digital gift | H2 "When a shareable page is the wrong engagement gift" |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that separates the
four engagement-gift situations — guest, family at a sagai, bride-to-groom and
groom-to-bride — and the only one that states what India's Dowry Prohibition (Maintenance
of Lists of Presents) Rules, 1985 actually require of presents at a marriage, grounded in
SubhSandesh's 801 digital-bouquet pages (23.4% of 3,417).

---

## Phase 3 — sources

Route that worked: **Crossref → Unpaywall → repository**, plus the **India Code DSpace REST
API**. Confirming the batch brief: OpenAlex, CORE and Semantic Scholar were not used because
they rate-limit; SSRN (`papers.ssrn.com`) is Cloudflare-blocked and returned 403 twice;
`eGyanKosh` was unreachable (`fetch failed` on three queries); DOAJ returned nothing for
`marriage ritual India`, `betrothal India` or `marriage kinship north India`.
`indiacode.nic.in` has migrated to `indiacode.gov.in`, and only the new host's
`/server/api/discover/search/objects` endpoint works — the old `simple-search` and `/rest/`
paths 404.

**Search terms tried:** `deadweight loss of Christmas gift giving`; `givers recipients
preference asked-for gifts appreciation`; `experiential gifts stronger social relationships
material gifts`; `gift giving reciprocity marriage prestations north India`; `betrothal
engagement ceremony gift exchange India kinship`; `wedding gift cash envelope norms`;
`shagun gift ritual North India`; `roka sagai engagement ritual Punjabi`; `dowry streedhan
gifts bride India marriage expenditure`; `Indian wedding expenditure household
consumption`; `gift giving Indian consumer culture festival`; `sentimental value gift
giving givers recipients`; `explicitness gift exchange give them what they want`; `it's the
thought that counts gift exchanges exaggerated`; `marriage payments India Contributions
Indian Sociology`; `betrothal ritual Hindu marriage samskara`; `marriage ritual gift
exchange India ethnography`; `gift giving South Asia kinship obligation`; `wedding ritual
expenditure status India`.

### Used (6 URLs, 4 domains)

| # | Source | Domain | Subject test | Swap test | Access |
|---|---|---|---|---|---|
| 1 | Hindu Marriage Act, 1955, s.7 — Ceremonies for a Hindu marriage (enacted 18 May 1955) | `indiacode.gov.in` | Pass — Indian marriage law | Pass | Open, primary |
| 2 | Dowry Prohibition Act, 1961, s.3 — Penalty for giving or taking dowry (enacted 20 May 1961) | `indiacode.gov.in` | Pass — presents at Indian marriages | Pass | Open, primary |
| 3 | Dowry Prohibition (Maintenance of Lists of Presents to the Bride and Bridegroom) Rules, 1985, G.S.R. 664(E), 19 Aug 1985 | `indiacode.gov.in` | Pass — presents at Indian marriages | Pass | Open, primary |
| 4 | Hu Xiaohan & Zhang Xiaoyu, *The Thoughtfulness Premium*, Psychology of China 7(9), Sept 2025, pp. 1116–1120, CC BY-NC | `sciscanpub.com` | Pass — gift-giving prediction bias | Pass | Open access, peer-reviewed |
| 5 | Samra Noman & Saad Shahid, *Moderating Effect of Recipient's Anxiety on Gift Giving Perceptions*, Review of Applied Management and Social Sciences 8(4), Dec 2025, pp. 1823–1842, CC BY-NC | `ramss.spcrd.org` | Pass — gift-giving in romantic relationships, married and engaged South Asian sample | Pass | Open access, peer-reviewed |
| 6 | A. K. Amirkhanova & A. A. Bayramkulova, *Wedding gift exchange among the peoples of Dagestan*, History, Archeology and Ethnography of the Caucasus 15(4), 2019, CC BY | `caucasushistory.ru` | Pass — wedding gift exchange in a specific culture | Pass | Open access, peer-reviewed |

**Verification notes.**

- Sources 1–3 were read as **verbatim statutory text** from the India Code API, not from a
  summary. s.3(2)(a) and the 1985 Rules are quoted in the body exactly as they read.
- The claim that the Hindu Marriage Act names no betrothal stage was checked by
  **enumerating all 37 CENTRAL sections** of the Act through the API; zero match
  `/betroth|engag/i`.
- Source 4: full Chinese text read, including the results section. Numbers used — 22.22%,
  59.72%, 40.28%, χ²(1, N = 144) = 20.93, p < 0.001, N = 216 — are quoted from it directly.
  The body says explicitly that the sample was Chinese and that the manipulation was a price
  rise on the same object, so the transfer claim stays narrower than the finding.
- Source 5: full text read. n = 104 married and engaged individuals in Pakistan, scenario
  survey experiment, purposive sampling.
- Source 6: **abstract only.** The Russian full text was not translated. The single claim
  taken from it ("many wedding gifts that were formerly symbolic have been replaced by money,
  and the amounts increase every year") is the abstract's own sentence, narrowed from
  "many", not widened to "most". Recorded here and in the citation.
- No `en.wikipedia.org` or `wikidata.org` **body links** at all — both are closed domains.
  Wikipedia and Wikidata appear only as `sameAs` targets inside `structuredData`, which
  `references/structured-data.md` states does not count against the 0–2 body budget. All
  five were verified through the Wikipedia API with paired Wikidata QIDs: Engagement
  (Q157512), Gift (Q184303), Weddings in India (Q16196994), Hindu Marriage Act, 1955
  (Q5766344), Dowry system in India (Q17052027 — note "Dowry Prohibition Act, 1961"
  redirects here, so the canonical title is used).
- **Generic context statistics: zero.** The India Code entries are primary legal
  instruments specifically about presents at Indian marriages, not background statistics of
  the PIB/TRAI/Census/MEA kind, and neither would survive the swap test into another
  keyword's post.

### Surrendered, and why

Three genuinely better-fitting open-access peer-reviewed sources were found and **not used
because `onlinelibrary.wiley.com` is closed at 4+ posts** in `USED-SOURCES.md`. Named here
so the orchestrator can decide whether to spend the domain on this post:

- `10.1002/mar.21983` — *Looking a gift horse in the mouth: suspicion of large gift
  expenditures undermines gift appreciation*, Psychology & Marketing, 14 Feb 2024, CC BY-NC-ND.
  An exact fit for the "how much to spend" section, and it cuts the other way from source 4.
- `10.1002/mar.21790` — *Gifting digital versus physical gift cards: how and why givers and
  recipients have different preferences*, Psychology & Marketing, 7 Jan 2023. An exact fit
  for the digital-versus-physical argument.
- `10.1002/jcpy.1446` — *Better late than never? Gift givers overestimate the relationship
  harm from giving late gifts*, Journal of Consumer Psychology, 5 Dec 2024, CC BY. Would
  have let the "is it too late" FAQ carry a number instead of a judgement.

Unpaywall reports **no** alternative OA location for any of the three.

Also considered and rejected: `10.1080/23311983.2026.2687986` (*Eid rituals and gift-giving
practices among Saudi Gen Z*, Cogent Arts & Humanities, CC BY) — a good source, but this
batch contains an Eid-adjacent festival post and the domain is better spent there;
`10.1177/0069966714525164` (*Situating marriage payments*, Contributions to Indian
Sociology) — paywalled and `journals.sagepub.com` is closed; `shodhganga.inflibnet.ac.in`,
`journals.openedition.org` and `pib.gov.in` — all sitting at exactly 3 posts, so avoided
rather than closed.

### Batch source-cap check

Run against all ten blog files in `blogs/` after writing: **zero collisions.** Each of my
six URLs appears in exactly one post, each of my four domains in exactly one post, and no
domain anywhere in the batch reaches three posts.

---

## Phase 4–5 — draft, links, targeting

- **1,800 words** in `contentMarkdown` by plain whitespace split, FAQs excluded.
- 1 H1, 7 H2, 5 H3. No skipped levels. Zero paragraphs over three sentences.
- One comparison table, 5 rows, with a first-party "Platform signal" column carrying a real
  value in every cell (including `0 of 15 page types` for the family-exchange row).
- **11 FAQs**, in `article.faqs` only. Checked against every heading on meaning as well as
  by token overlap; the ≥0.6 hits are all artefacts of the two-token heading "What is an
  engagement gift?" and none is the same question twice. One FAQ was rewritten during this
  check — an "is an engagement gift the same as a wedding gift?" entry restated the
  definition H2's second sentence and was replaced with the cash-envelope question.
- **Internal links (3):** `/bouquet-gf` (mandatory, placed in H3 3 where the private
  bride-facing register has been established), `/love-gf` (H3 4), `/proposal` (H3 5, and the
  anchor is honest that it is for a proposal that has not happened yet). None in the opening
  paragraph. `/wedding-shaadi`, `/shaadi-card` and `/reception` were read and dropped: they
  are invitation templates, and this post is about a gift, so linking them would have been
  keyword-adjacency rather than reader value.
- **Outbound links: 6**, each attached inline to the sentence it supports and repeated once
  in the Sources H2. Every fact passes the "would it stay without the link" test.
- **Competitor links: zero.** `brides.com` and `nytimes.com` were read in Phase 1 and are
  neither cited nor linked, and no expert quote or statistic from either appears in the post.
- `structuredData`: an `@id`-matched `BlogPosting` enrichment block on
  `…/engagement-gift-for-couple#post` carrying `about`, four `mentions` and six `citation`
  entries mirroring `batchMeta.sources` one-to-one, plus an `ItemList` of 5 items mirroring
  the H3s in order. No `AggregateRating`, `Review` or `HowTo`. No `isAccessibleForFree`,
  `timeRequired` or `thumbnailUrl` — the renderer derives those.

---

## Phase 6 — audit

`|passed| = 49`, `|failed| = 1`, `passed ∩ failed = ∅`, `49 + 1 = 50`. Item strings copied
byte-verbatim from `references/publish-checklist.md`, internal whitespace collapsed to
single spaces, `**bold**` markers preserved.

**The one failure, counted rather than assumed:**

- *Slug short, hyphenated, lowercase, no stop words* — the slug is the exact-match keyword
  and **"for" is a stop word**. `engagement-gift-couple` would clear the item but reads as
  broken English and loses the exact-phrase match in the URL. Structural.

**The two "known defect" items, counted rather than assumed:**

- *metaTitle 50–60 characters, exact keyword in the first five words* — **PASSES.** The
  keyword is **four words**, and `Engagement Gift for Couple: What Changes at a Sagai`
  (51 characters) opens on it. The brief's warning applies only at six words or more.
- *Slug … no stop words* — **FAILS**, as above. One of the two known-defect items passes and
  one genuinely fails; neither was assumed.

Other measured values: metaTitle 51 chars, metaDescription 158 chars, excerpt 258 chars,
title/H1 52 chars, no year-stamp, no brand suffix, one separator, no banned booster.

The honest assessment in the JSON names, in full: the etiquette correction to the assignment
brief; the four Indian customs I could not source and therefore left out (sagai/roka gifting
conventions, shagun amounts, the rupee-ending-in-one convention, who sends sargi); the
unsourced status of the smaller-than-a-wedding-gift convention; the abstract-only read of
source 6; the empty Pricing block; the surrendered Wiley URLs; and the domain-authority gap
against Brides, Forbes and the New York Times.

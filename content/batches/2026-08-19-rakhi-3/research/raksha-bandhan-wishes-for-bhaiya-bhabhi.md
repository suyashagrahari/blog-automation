# Research brief — raksha bandhan wishes for bhaiya bhabhi

- **Slug:** `raksha-bandhan-wishes-for-bhaiya-bhabhi`
- **Cluster:** C08 · informational · blog · medium · 200–600 EST
- **Batch:** 2026-08-19-rakhi-3 (third rakhi batch; 19 rakhi posts already exist on disk)
- **Written:** 2026-08-19. Phase 0 was run for the batch on 2026-08-18; `npm run facts` was **not** re-run.

---

## Phase 1 — SERP analysis

`WebSearch` for the exact keyword on 2026-08-19 returned a first page that is entirely
competitors under `references/competitors.md` — gifting retailers and wishes farms. None is
citable or linkable, and none was linked or paraphrased.

| # | Page | Type | Shape | Where the answer is | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | igp.com/blog/rakhi-wishes-bhaiya-bhabhi | Gifting retailer | ~40 undated English wishes under sentiment headings ("emotional", "funny") | No answer — the list *is* the page | None | Long list, product rail, no schema visible, no byline | Third person, generic warmth | Rakhi product sales |
| 2 | floweraura.com/blog/raksha-bandhan-messages-for-bhaiya-and-bhabhi | Gifting retailer | Same pattern, ~30 messages | No answer | None | List + CTA blocks | Third person | Rakhi/flower sales |
| 3 | nestasia.in "51 Trending Rakhi Wishes For Bhaiya And Bhabhi" | Homeware retailer | Numbered 51 quotes | Count in title substitutes for an answer | None | Numbered list | Brand-editorial | Gifting sales |
| 4 | bestmessage.org/rakhi-messages-for-bhaiya-bhabhi | Wishes farm | ~25 messages | No answer | None | Bare list, no dates | Impersonal | Ad impressions on long-tail |
| 5 | rakhibazaar.com (two ranking posts, one with a 2021 slug re-titled "…in 2026") | Rakhi retailer | ~40 quotes | No answer | None | List + product links | Third person | Rakhi sales |

Common to all five: **English-only** lines (occasional romanised Hindi with no gloss), grouped
by *sentiment* ("emotional / funny / short"), zero dates, zero sources, no author, no register
guidance, and no acknowledgement that the reader's relationship with bhabhi might be anything
other than adoring. One of the five recycles a 2021 post with the year swapped in the title.

## Phase 2 — Gap analysis

**Table stakes** (present in all five, so the post must cover them): joint wishes addressed to
the pair, a first-Rakhi-after-the-wedding case, some Hindi/Hinglish lines, the fact that the
rakhi goes on the brother's wrist, a mention of a rakhi for bhabhi.

**The gap.** Nobody treats the message as what it structurally is: **one message with two
recipients and an audience.** Specifically, nothing on page one covers:

1. Why joint address is the point rather than a shortcut — and the three cases where you should
   send two messages instead.
2. Bhabhi on her own terms: she married into this ritual rather than growing up in it.
3. What changes between the first year and the tenth.
4. The case where you are closer to her than to him (and why that line goes to her, not the group).
5. The strained relationship — common, and universally avoided by listicles.
6. Whether bhabhi gets a rakhi at all: the **lumba** as a Marwari/Rajasthani custom rather than
   a pan-Indian rule, stated as regional variation instead of product copy.
7. The **nanad–bhabhi** dynamic, and the fact that your bhabhi is somebody else's nanad who may
   want to be at her own natal home on the day.

**Stale data:** none of the five cites data at all, so there is nothing to supersede — the
opportunity is that any dated, sourced number is a differentiator here.

**Fan-out sub-queries** used as H2/H3/FAQ targets: *what to write for bhaiya bhabhi · one message
or two · aap or tum for bhabhi · first rakhi after brother's wedding · do you tie rakhi to bhabhi ·
what is lumba rakhi · rakhi wish when relationship is strained · closer to bhabhi than brother ·
will bhabhi be at her parents' home on Raksha Bandhan · can a brother wish bhaiya-bhabhi.*

**Angle (recorded as `batchMeta.angle`):** wins by being the only page that treats a bhaiya-bhabhi
wish as one message with two recipients and an audience — grouping worked Hindi lines by how long
bhabhi has been in the family and by who the sender is actually closer to, naming the strained
case and the lumba question — grounded in in-law research plus SubhSandesh's own 51.9% phone-open
rate across 32,683 views and 44.3% password rate on 2,718 pages.

### Overlap with an existing post — recorded, not hidden

`content/batches/2026-08-13-rakhi/blogs/rakhi-wishes-for-brother-in-law-jiju.json` contains an H2
titled "Raksha Bandhan wishes for bhaiya and bhabhi, greeted as a pair" with five Hindi lines and a
register table. That post's subject is **jiju** (a sister's husband); bhaiya-bhabhi is a subsection
of it. This post is the opposite side of the family and goes far deeper, but the overlap is real:

- All seven Hindi lines here are **new** — none of the jiju post's five lines is reused or reworded.
- The framing here is tenure × closeness, not "which of four relationships are you writing to".
- The one shared factual point ("thread on his wrist, she is greeted") is unavoidable and stated
  once, in a definition sentence.

If the jiju post publishes first, that H2 is the thin duplicate and should be cut down to a
cross-reference. Flagged in `honestAssessment`.

## Phase 3 — Sources

Research lane for this post: **in-law relationships — sister-in-law ties, relationships with a
sibling's spouse, and how marriage reshapes sibling relationships.** Searched the phenomenon, not
the keyword. Tools: OpenAlex (`is_oa:true`), DOAJ API, Journal of Family Research site search, plus
targeted repository searches. Every PDF was downloaded and read locally with `pdftotext`; every
number below was located in the source text before being written into the post.

**Domains banned for this batch that were deliberately avoided:** `drikpanchang.com`,
`en.wikipedia.org`, `doi.org`, `pmc.ncbi.nlm.nih.gov`, `arxiv.org`, `europepmc.org`,
`journals.plos.org`, `frontiersin.org`, `cambridge.org`, `calendar.gatech.edu`, `aclanthology.org`,
`blog.whatsapp.com`, `developers.facebook.com`. Note `doi.org` links were resolved to publisher or
repository URLs so the dedup count stays honest.

**Siblings present in `blogs/` when this was checked (2026-08-19):**
`celebrate-raksha-bandhan-siblings-different-cities.json`,
`make-raksha-bandhan-card-online-with-name.json`,
`raksha-bandhan-wishes-in-bengali.json`. Their source domains — `demographic-research.org`,
`pib.gov.in`, `newsonair.gov.in`, `hbs.edu`, `research.google.com`, `englelab.gatech.edu`,
`wu.ac.at`, `ics.uci.edu`, `ccsenet.org`, `questjournals.org`, `en.banglapedia.org`, `w3.org`,
`unicode.org` — and **none of them is reused here**. All five domains below appear in zero of the
29 posts across the three rakhi batches. A sibling has already spent the batch's single generic
context statistic (`pib.gov.in`), so this post uses **zero** context statistics.

| # | Source | Domain | Verified claim used | Published |
|---|---|---|---|---|
| 1 | Voorpostel & Blieszner, "Intergenerational Solidarity and Support Between Adult Siblings", *Journal of Marriage and Family* 70(1) — publisher PDF via University of Groningen | pure.rug.nl | Netherlands Kinship Panel Study, 1,259 complete sibling dyads: 33% of siblings had received practical support and 35% had provided it, while emotional support was provided by 93% and received by 94% | 2008 |
| 2 | Power & Ready, "Cooperation beyond consanguinity", *Phil. Trans. R. Soc. B* 374(1780) — accepted version, LSE Research Online | researchonline.lse.ac.uk | Two Tamil villages surveyed September 2017 (N=440, N=344): among ever-married people, 87% of men and 30% of women live in their natal village; non-natal (married-in) residents are more likely than natal residents to name close affines as support providers | 2019-07-15 |
| 3 | Chaudhry, "'For how long can your pīharwāle intervene?': Accessing natal kin support in rural North India", *Modern Asian Studies* 53(5), 1613–1645 — Edinburgh Research Explorer record | research.ed.ac.uk | Ethnography of rural Uttar Pradesh: distance cuts married women off from natal-kin support, and "even for regional brides, natal kin support is complicated and relative proximity does not guarantee support" | 2019-09 |
| 4 | Anukriti, Herrera-Almanza, Karra & Pathak, "Curse of the Mummy-ji: The Influence of Mothers-in-Law on Women in India", *American Journal of Agricultural Economics* 102(5), 1328–1351 — open manuscript, Boston University | open.bu.edu | 2018 primary survey of married women aged 18–30 in Jaunpur, UP: besides husband and mother-in-law, the average woman names 1.6 general peers in the district; 36% have no close peer in Jaunpur; co-residence with the MIL is associated with 18% fewer close peers in the village | 2020-08-23 |
| 5 | Gold, "Waiting for Moonrise: Fasting, Storytelling, and Marriage in Provincial Rajasthan", *Oral Tradition* 29(2), 203–224 | journal.oraltradition.org | In Ghatiyali the Tij fast was kept "only by those high status castes in which remarriage was forbidden" — regional and caste variation decides who observes a festival at all; Raksha Bandhan is classed (after Freed & Freed) as a festival of interaction focused on the brother–sister bond | 2015 |

**Subject test:** all five are about in-law ties, natal-kin access, adult sibling support or North
Indian festival observance. **Swap test:** none would survive unchanged in the Bengali-wishes,
card-making or different-cities posts in this batch. Peer-reviewed and open-access: 1, 2, 4, 5.

### What was rejected, and why

- **Buyukkececi & Çineli, "Adult sibling relationships: the impact of cohabitation, marriage,
  separation, and childbearing", *JMF* 86(3), 2023** — the perfect source for "how marriage
  reshapes sibling ties" (pairfam, five waves; contact fell with cohabitation but rose with
  marriage). Listed as hybrid CC BY, but `onlinelibrary.wiley.com` returned **HTTP 403** on both
  the article and the `pdfdirect` PDF, and no repository copy exists. Only the abstract was
  readable (Semantic Scholar), so per the batch rule it is **not cited**.
- Every lumba-rakhi explainer on the SERP (floweraura, itokri, phool, nestasia, rakhi.com and
  similar) is a competitor or a retailer, so the lumba custom is stated as common cultural
  knowledge with no attribution, and hedged as regional rather than universal.
- `pmc.ncbi.nlm.nih.gov`, `journals.plos.org`, `frontiersin.org` and `cambridge.org` all carried
  usable in-law material and were skipped on the batch ban list.
- No generic context statistic (PIB/TRAI/Census/MEA) was added; the batch's single allowance was
  already used by a sibling post.
- `collections.unu.edu` (Women and Kinship in South and South-East Asia) served a 0-byte PDF.

## Phase 4–5 — Draft decisions

- Body **1,799 words** by plain whitespace split, FAQs excluded. 9 H2s (including Sources), 6 H3s.
- Direct answer in the first 150 words with two first-party numbers (51.9% phone-open of 32,683
  views; 44.3% password rate of 2,718 pages).
- Seven Hindi lines published, each with Devanagari, transliteration and an English gloss.
  **Two drafted lines were dropped:** one because "जोड़ कर बाँध रही हूँ" read as translated English
  rather than idiom, and one attempted Marwari lumba line whose idiom could not be vouched for.
- `categorySlug`: `family-and-continuity` — the post is about the relationship, not the festival
  (the brief's steer; existing rakhi posts lean heavily on `festive-beats`).
- `templateUrls`: the rakhi page and the template library. The post states plainly that the rakhi
  template is written brother-first and has no lumba equivalent, which is where SubhSandesh loses.
- Internal links: 3, all from `TEMPLATE_LINKS`, all placed after the value is established.
- Wikidata QIDs verified via the Wikipedia API on 2026-08-19: Raksha Bandhan **Q10266**,
  Sibling-in-law **Q16658574** (note "Sister-in-law" redirects), Rajasthan **Q1437**, Uttar Pradesh
  **Q1498**, Marwari people **Q18356677**. `Rakhi (bracelet)` returned `missing` and was not used.
- Raksha Bandhan 2026 = Friday 28 August 2026, stated as a fact-check only; no muhurat time is
  given, so no panchang source appears in `sources` or `citation`.

## Phase 6 — Audit summary

49 of the 50 checklist items pass. The single failure is structural: the slug
`raksha-bandhan-wishes-for-bhaiya-bhabhi` contains the stop word "for", but it was verified free in
Strapi and assigned before drafting, so it is kept rather than silently changed.

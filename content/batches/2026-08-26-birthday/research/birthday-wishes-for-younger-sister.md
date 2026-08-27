# Research brief — birthday wishes for younger sister

- **Batch:** 2026-08-26-birthday (wave 2, rank 19)
- **Slug:** `birthday-wishes-for-younger-sister` — checked against live Strapi 2026-08-27, free
  (`filters[slug][$contains]=sister` returns 12 live slugs, none of them this one)
- **Lane:** E — sibling relationships and birth-order effects
- **Category:** `milestone-birthdays` (confirmed live in the Strapi categories endpoint)
- **Band:** 1,000–3,000 / expected clicks 132 / weak results 5+

---

## Phase 0 — data gate

Satisfied by `BRIEF.md`'s read-only probe of the `birthdaygfpages` collection (n = 198,
measured 2026-08-26). Facts used, and where:

| Fact | Where it lands |
|---|---|
| Median personal message 96 characters (n = 197); longest 1,437 | Opening paragraph, section on length, FAQs |
| 106 of 197 messages under 100 characters | Opening paragraph, section on length |
| 198 birthday pages, 6.5% of 3,024, #5 page type | Opening paragraph |
| 0.9 h median first-save-to-last-edit; 50.5% inside the hour (vs 6.9 h for /love-gf) | Section on length |
| Cover photo 100%, music 100% (990 tracks), quiz 98.5%, surprise audio 26.8% | Comparison table |
| Only 28 of 195 quizzes ever played — 14.4% | Comparison table, takeaway, FAQ |
| 4 of 198 pages (2.0%) never opened | "Wrong choice" section |
| 37.9% password-protected vs 43.9% site-wide | "Wrong choice" section |
| Birthday views 48.6% mobile vs 51.0% site-wide | "Wrong choice" section |

**Structural absence, recorded rather than invented:** the n = 198 probe has **no
relationship field**. There is therefore no first-party number about sisters, younger or
otherwise. The post says this in its own H2 ("What our own data cannot tell you about
sisters") instead of dressing a site-wide figure up as a sister-specific one. The
condition that closes it is a relationship label in the page builder.

---

## Phase 1 — SERP

WebSearch is exhausted at 200/200 for this session, so the India-localised SERP was taken
as supplied in `ASSIGNMENTS-WAVE2.json` (harvested `gl=in`, real browser, 2026-08-26/27).
The competitor **bodies were not individually fetched** — the assignment supplies the
ranking set and every one of them is a titled count-listicle, which is enough to establish
format and to avoid mirroring. What was fetched instead was the site's own live sister
pages, so the cannibalisation risk could be checked against real structure.

| # | Page | What it is | Addresses *younger*? |
|---|---|---|---|
| 1 | goodhousekeeping.com — "125 Sweet Birthday Wishes to Make Your Sister's Day" | Generic sister listicle, mood-bucketed | No |
| 2 | boxupgifting.com — "150+ Heartfelt Birthday Wishes For Sister" | Gifting retailer listicle | No |
| 3 | pinterest.com — "Heart Touching Birthday Wishes for Younger Sister" | Image board, no prose | Nominally |
| 4 | bloomandwild.com — "140 Best Birthday Messages for a Sister" | Flower retailer listicle | No |
| 5 | prevention.com — "115 Birthday Wishes for Little Sister That Are From the Heart" | Health magazine listicle | Yes, loosely |
| 6 | in.pinterest.com — "270 Best Birthday Quotes For Sister ideas in 2026" | Image board | No |
| 7 | freddiesflowers.com — "100 Heartfelt Birthday Messages for Your Sister" | Flower subscription | No |
| 8 | headsandtailsjewellery.co.uk — "120 Birthday Wishes for Sister" | Jewellery shop | No |

Two of eight results are Pinterest boards; two are retailers selling flowers and jewellery
answering a wishes query. Only #3 and #5 name a younger or little sister at all — Google is
substituting generic sister pages because nothing better exists. **Every domain above is a
competitor: none is linked, cited or paraphrased.**

### Own-site check (cannibalisation)

Fetched from live Strapi: `birthday-wishes-for-sister`, `birthday-wishes-for-elder-sister`,
`birthday-wishes-for-cousin-sister`, `birthday-wishes-for-didi` are all live, and
`birthday-wishes-for-younger-brother` is live. **There is no younger-sister page — a hole in
the site's own set**, with the brother equivalent already filled.

The live `-elder-sister` post is organised by mood: "Heartfelt & Loving", "Short and Sweet",
"Funny & Playful", "Long, Story-Style", "Emotional & Reassuring", "For Married or Mom
Sisters", "Hindi & Hinglish Lines", "Wishes for Social Posts". This post deliberately uses
**none** of those buckets. Its organising principle is birth order and direction of address,
and its H3s are situations, not moods.

---

## Phase 2 — gap analysis

**Table stakes** (present, or the page looks incomplete): a set of usable ready-to-send
lines; something about tone; a Hindi/Hinglish option; a milestone case; a distance case.

**The gap:** nobody treats *direction* as the variable. Eight listicles publish lines that
would read identically sent up or down the age gap, and none of them notices that Indian
languages do not treat the two directions the same way. Nor does any of them state how long
a birthday message actually is.

**Stale or absent data:** the ranking pages carry no data at all — no counts, no dates, no
research. The "spoiled youngest child" framing several of them lean on is contradicted by the
largest sample available (2024).

**Unanswered questions they raise and drop:** how long should it be; is *choti behen* right;
what changes at 18; what to write when the year was bad; is teasing acceptable.

**Fan-out sub-queries → H2/H3 mapping:**

| Sub-query | Where answered |
|---|---|
| What do I write for my younger sister's birthday? | Opening paragraph + the 8 H3s |
| How is it different from wishes for an elder sister? | "What actually changes when the sister is younger" |
| Is it choti behen or behen? | Same H2, plus FAQ |
| How long should the message be? | "How long the wish should be, and what to put around it" |
| Are youngest children really spoiled/dramatic? | "What birth order predicts about her, and what it does not" |
| What do I write for her 18th? | H3 4, plus FAQ |
| What if she lives in another city? | H3 5 |
| What if the year was hard? | H3 7 |
| Should I make her a page, and what goes on it? | Comparison table + "wrong choice" H2 |
| Is there sister-specific data? | "What our own data cannot tell you about sisters" |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post organised around
birth order rather than mood — the one that shows Hindi and Marwari give an elder sister a
title (*didi*, *jiji*) and a younger sister none, and sizes each wish against the measured
96-character median across 197 birthday pages.

---

## Phase 3 — sources

Searched the phenomenon, not the keyword: *birth order sibling relationship quality older
younger*, *sibling warmth age gap adolescence longitudinal*, *older sibling caretaking
India children*, *elder sibling authority younger sibling deference socialization*, *Hindi
kinship terminology elder younger sibling terms address*, *kinship terminology Dravidian /
Tamil / Telugu*, *sister sibling warmth*, *age gap siblings*, *adult sibling emotional
support* — via the OpenAlex, DOAJ, Crossref and Europe PMC APIs, since WebSearch is
exhausted.

Lane-E exclusions honoured: **no** `poverty.com.pk`, `journals.openedition.org/ebhr/162`,
`europepmc.org` or `pure.uva.nl` (all four used by wave 1's nephew post).

| # | Source | Why it is *about* this post | Verification |
|---|---|---|---|
| 1 | Suryanarayan & Khalil (2021), *Kinship terms as indicators of identity and social reality: A case study of Syrian Arabic and Hindi*, Russian Journal of Linguistics 25(1) 125–146 | Records that Hindi differentiates sibling terms by relative age: *behen* (sister), *didi* (older sister), and *choti behen* for a younger sister "if it is necessary" | Full text read on the journal article page. CC BY-NC 4.0 — cited and linked only, nothing reproduced. Metadata confirmed via Crossref (issued 2021-12-15) |
| 2 | Goswami & Shougrakpam (2025), *Kinship terms in Marwari: A sociolinguistic study*, Training, Language and Culture 9(2) 43–56 | Kin-term table: eB = *bhaisa/bhaiji*, yB = *bhai*, eZ = *bhen/jiji*, yZ = *bhen* — the elder sister has an honorific second form and the younger sister does not | Full PDF downloaded and read (pdftotext). Central University of Rajasthan; accepted 2 June 2025; Crossref issued 2025-06-20 |
| 3 | Ashton & Lee (2024), *Personality differences between birth order categories and across sibship sizes*, PNAS 122(1) — cited at the publisher of record, `www.pnas.org/doi/10.1073/pnas.2416709121` | The largest test of the birth-order-personality claim: firstborns only slightly higher on intellect-related traits; middle- and last-borns slightly higher on Honesty-Humility and Agreeableness. Sample 1 N = 710,797; Sample 2 N = 74,920 | **Full text read**, but not at the cited URL: `pnas.org` returns 403 to automated requests on the landing, PDF and epub routes, and `pmc.ncbi.nlm.nih.gov` both served a reCAPTCHA and is at the batch domain cap. The text was retrieved through the Europe PMC REST `fullTextXML` endpoint for the same article (PMC11725879) and the figures checked verbatim. Recorded as an audit failure on the outbound-link item rather than glossed |
| 4 | Sumbas & Yurtcu (2024), *The number of children in a family as a factor of their mutual relationships*, Research in Pedagogy 14(1) 228–249 | Lifelong Sibling Relations Scale on 735 young adults: "sibling relation scores of the first-born children are higher"; birth-order contrasts significant (first–middle t = 6.324, p < .0001; first–last t = 5.454, p < .0001), middle–last not significant (p = 0.2888) | Full PDF downloaded and read (pdftotext). Crossref metadata confirmed |

**Subject test:** all four are about siblings, birth order or Indian-language kinship terms.
**Swap test:** none could sit unchanged in a sibling post's neighbour in this batch — the
Hindi and Marwari kin-term evidence is specifically about elder-vs-younger sister address,
and the two birth-order studies are meaningless in a Tamil-script or cake-message post.
**Generic context statistics:** zero. No PIB, TRAI, Census or MEA figure appears.

**In-batch caps, re-measured immediately before finalising `batchMeta.sources` (2026-08-27,
after the coordinator's cap update):** `journals.rudn.ru` 1/3, `rudn.tlcjournal.org` 1/3,
`pnas.org` 1/3, `research.rs` 1/3. No URL appears in more than one post, and no domain in
this post is shared with any sibling.

The Ashton & Lee citation was **moved off `pmc.ncbi.nlm.nih.gov`** on the coordinator's
instruction: PMC is spoken for by `birthday-songs-for-whatsapp-status` and
`birthday-surprise-ideas-for-wife-at-home`, and no institutional-repository copy of this
paper exists (OpenAlex lists only PNAS, PMC and an OSF preprint whose download route returns
500). It is therefore cited at the publisher of record. `europepmc.org` still had one slot,
and it was deliberately left alone — the paper is the same one PMC hosts, so taking the last
Europe PMC slot would have spent a scarce shared resource for no gain in verifiability.

Sources considered and rejected:

- *Sibling relationships in older adulthood: links with loneliness and well-being* (J. Family
  Psychology, 2020) — the sister–sister warmth finding is exactly on point (sister–sister
  mean warmth 3.26 vs 2.64 for older-brother/younger-sister, F = 16.55, p < .001) but the
  article is an author manuscript with no Europe PMC full text and PMC itself was
  captcha-blocked, so it could not be verified first-hand. Not cited.
- Punch (2001, 2005) on birth order and sibling power relations — the best conceptual fit
  found, but `dspace.stir.ac.uk` returns 403 to every request for both PDFs. Not cited.
- *Perception of family environment, sibling relationships, and life satisfaction: effects of
  gender and birth order* (2024) — `doiserbia.nb.rs` returned 503 on three attempts. Not cited.
- Any government or demographic statistic on Indian family size — fails the subject test and
  would have been the one permitted context figure spent on nothing.

---

## Phase 4–5 — draft and targeting

- Body: 1,782 words by `wordCount()`, 1,763 by plain split (cap 1,800).
- 7 H2s, one H1, 8 H3s, no skipped levels. FAQs are in `article.faqs` and the renderer's
  FAQPage only — 11 of them, none in the body.
- Internal links (2, both from `TEMPLATE_LINKS`, both after the section that earns them):
  `/birthday-friend` after the wishes list, `/templates` in the closing section.
  `/birthday-gf` was deliberately **not** used — it is a romantic-partner page.
- Outbound links: 4, one per source, inline at the sentence each supports. Zero Wikipedia
  links in the body; Wikipedia and Wikidata appear only as verified `sameAs` targets in
  `structuredData` (Birth order Q2914808, Sibling Q31184, Hindi Q1568, Marwari language
  Q56312, Birthday Q47223 — all checked against the Wikipedia API).
- `structuredData`: an `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post`
  carrying `about`, `mentions` and `citation` (mirroring `batchMeta.sources` one-to-one),
  plus an `ItemList` mirroring the eight H3s in order. No AggregateRating, Review or HowTo.

## Phase 6 — audit

49 passed, 1 failed, disjoint, summing to 50, strings verbatim from
`references/publish-checklist.md`. The single failure is the outbound-link verification item,
and the `why` describes that item: three of four URLs were fetched directly, the fourth
(PMC) was captcha-blocked and was verified through the Europe PMC full-text mirror of the
same record.

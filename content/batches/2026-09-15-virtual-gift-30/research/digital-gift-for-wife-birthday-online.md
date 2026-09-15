# Research brief — `digital-gift-for-wife-birthday-online`

- **Target keyword:** `digital gift for wife birthday online`
- **Secondary keywords:** none
- **Category:** `milestone-birthdays`
- **Templates:** `/birthday-gf`, `/rewind`, `/capsule` (body also links `/photo-puzzle`)
- **Date of work:** 2026-09-15

---

## Phase 1 — SERP

WebSearch budget for this session was exhausted before this agent started
(200/200 calls used batch-wide), so the live SERP for this exact keyword was
**not** re-pulled. What stands in for it:

- BRIEF §1, measured on live India SERPs 2026-09-15 for this whole axis: the
  competitive set is `gifft.me`, `qlovy.com`, `surprises.gift`, `ourgiftverse.com`,
  `digiflower.net`, `giftsqr.com`, `blog.messagear.com`, with Reddit, Quora,
  Pinterest and Instagram holding 4–6 of every 10 results and Reddit ranking #1
  for `digital gift for girlfriend`. None of these were fetched, cited or
  paraphrased here.
- The sibling post `virtual-gift-for-boyfriend-birthday` in this batch, read
  directly, as the closest measured structural comparator.

**This is a real gap in the brief and it is recorded rather than papered over:**
the per-page word counts, heading structures and answer positions that Phase 1
normally produces do not exist for this keyword. The gap analysis below is
therefore derived from the batch-level SERP measurement plus the sibling posts,
not from five individually fetched competitor pages.

| Comparator | What it optimises for | Where the answer sits | Wife-specific? |
|---|---|---|---|
| Startup personalised-page sites (BRIEF §1) | Sign-up to their own builder | After a long intro | No — partner-generic |
| Reddit / Quora threads | Anecdote, single-user answers | Scattered across replies | Occasionally, incidentally |
| Pinterest / Instagram | Visual idea grids | No prose answer | No |
| Sibling `virtual-gift-for-boyfriend-birthday` | Boyfriend birthday, 12 FAQs, password H2 | First 150 words | No — boyfriend |

## Phase 2 — Gap and angle

**Table stakes** (must be present or the post looks incomplete): what a digital
birthday gift is; a list of things to put on it; a comparison; whether to
password-protect; when it is the wrong choice.

**The gap.** Every page in this category, including both siblings, assumes the
giver and the recipient are apart. A marriage inverts that: the giver and the
recipient share a home, a sofa, often a laptop and sometimes children who talk.
The whole build problem changes from "how do I make distance feel close" to
"how do I make this without her seeing it." Nothing in the measured competitive
set addresses that.

**Fan-out sub-queries the post answers as H2s:**

1. What is a digital gift for a wife's birthday? → *What a digital birthday gift for a wife actually is*
2. How do I keep it secret when we live together? → *The surprise problem is different when you live together*
3. What should go on it? → *Six things worth putting on her birthday page*
4. How does it compare with a parcel or a booking? → *Four ways to hand it over, compared*
5. What should a birthday gift in a long marriage do? → *What research on long marriages says a birthday gift should carry*
6. Is locking it weird in a marriage? → *Does locking the page read as secrecy in a marriage?*
7. When should I not do this? → *When a link is the wrong birthday present for your wife*

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that
treats a wife's birthday page as a secrecy problem inside a shared home rather
than a distance problem, using the 40.6% password-protection rate (1,767 of
4,357) and the 6.2-hour median first-save-to-last-edit gap.

## Phase 0 / first-party data

Facts used, verbatim from `content/facts.md` (regenerated 2026-09-15):

- 40.6% of creators password-protect their page before sharing it (1,767 of 4,357)
- Median first save → last edit: 6.2 hours, sampled on /love-gf, n=1,125
- 94.1% of started pages are published and shared (4,098 of 4,357)
- 4,357 pages created since 2026-03-12 across 16 page types
- #5 page type: birthday page for a partner (/birthday-gf) — 352 created, 8.1%
- 49.0% of shared pages are opened on a phone (24,493 of 49,968 views)
- #1 /love-gf 1,125 (25.8%) and #2 /bouquet-gf 1,070 (24.6%)

**Recorded limitation, and it is stated in the body as well as here.** The
platform is heavily girlfriend/partner-skewed by *template name*, but the
database stores **no relationship label**. The page-type splits measure which
template a creator opened, not who received the result. There is therefore **no
wife-specific creation figure on SubhSandesh**, and the post says so explicitly
in the "What a digital birthday gift for a wife actually is" section rather than
letting the 25.8% / 24.6% figures imply a wife audience.

## Phase 3 — Sources

Search strategy: the phenomenon, not the keyword. Queries run against DOAJ
(article search API), Europe PMC, Crossref, OpenAlex and Semantic Scholar:

- `gift giving spouses / husbands wives marriage`
- `relationship maintenance behaviors marital satisfaction married couples`
- `long-term marriage protective factors`
- `surprise gift giving recipient appreciation`
- `mobile phone / WhatsApp / social media AND marital`
- `secrecy AND (spouse OR couple)`; `device sharing privacy couples`

Dead ends worth naming: OpenAlex returned HTTP 429 (daily budget exhausted),
Semantic Scholar 429, Firecrawl search 402, DuckDuckGo 202-blocked, and
WebSearch was out of session budget. `surprise gift giver` and
`device sharing privacy couples` returned zero open-access hits in DOAJ — there
appears to be no readable open-access work on *surprise inside cohabiting
couples* specifically, which is the one part of the angle with no third-party
support. The post leans on first-party data there instead.

| # | Source | Domain | Subject test | Swap test | Read |
|---|---|---|---|---|---|
| 1 | Karimi, Bakhtiyari & Masjedi Arani (2019), *Protective factors of marital stability in long-term marriage globally: a systematic review*, Epidemiol Health 41:e2019023 | `e-epih.org` | Long marriages | Cannot sit in a girlfriend post | Full text, PDF via `pdftotext` |
| 2 | Pasaribu & Arjadi (2023), *Relational Maintenance Behavior as a Predictor of Marital Satisfaction in Commuter Marriage*, Jurnal Psikologi 50(1) | `jurnal.ugm.ac.id` | Married couples living apart | Married sample only | Abstract (landing page) |
| 3 | Shabani Afarani, Kianpour & Sadeghi Fassaei (2024), *"In the Presence of the Other": Mobile Phone Technology and Insecurity in Marital Life*, J Cyberspace Studies 8(2) | `jcss.ut.ac.ir` | Phones inside marriage | Married sample only | Abstract (landing page) |
| 4 | Omokhabi, Omokhabi & Oloyede (2025), *Social media impact on marital conflict among married couples in three Southwestern Nigerian states*, Simulacra 8(1) | `journal.trunojoyo.ac.id` | Married couples' platform use | Married sample only | Abstract (landing page) |
| 5 | Horne (1991), *Risks perceived by husbands and wives in giving clothing gifts within the family*, Iowa State University | `dr.lib.iastate.edu` | Spousal gift-giving risk | Husband-and-wife sample only | **Abstract only**, via the repository's DSpace REST metadata API — the landing page is a JavaScript app that returns no server-rendered text |

- **Peer-reviewed / scholarly + open access:** #1 (CC BY), #2 (CC BY-SA), #3, #4 (CC BY-NC-SA), #5 (institutional repository dissertation). All five are free to read.
- **Generic context statistics used: zero.** No PIB, TRAI, Census or MEA figure appears.
- **Wikipedia in the body: zero.** Wikipedia/Wikidata pairs appear only in `structuredData` `about`/`mentions`, verified against the MediaWiki API (`Birthday` Q47223, `Marriage` Q8445, `Wife` Q188830, `Gift` Q184303, `Surprise` Q333173 — note `Surprise (emotion)` redirects to `Surprise`).
- **Batch caps:** all five domains had **zero** prior appearances across the 21 sibling posts in `blogs/` when checked on 2026-09-15. None of the banned/at-cap domains (`arxiv.org`, `pewresearch.org`, `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`, `gsb.stanford.edu`) is used.
- **Honest limits on each:** #1 pools other people's samples and says nothing about gifts or India; #3 is qualitative, n=30, Iranian, about phones not gift pages; #4 is Nigerian; #5 is 35 years old, American, about clothing, and abstract-only. Every one of those caveats is stated in the body at the point of citation.

## Phase 5 — Links and targeting

- **Internal (4, all from `TEMPLATE_LINKS`):** `/capsule`, `/rewind`, `/photo-puzzle`, `/birthday-gf` — each placed after the paragraph that establishes why the reader would want it, never in the opening.
- **`templateUrls` (3):** `/birthday-gf`, `/rewind`, `/capsule`.
- **Category:** `milestone-birthdays`, verified live against the Strapi categories endpoint on 2026-09-15.
- **Slug:** `digital-gift-for-wife-birthday-online` — verified free (`filters[slug][$eq]` returned `total: 0`).
- **`structuredData`:** an `ItemList` mirroring the six H3s in order, plus one `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` carrying `citation` (one-to-one with `batchMeta.sources`), `about` and `mentions`. No renderer-built type is emitted unmatched; no `AggregateRating`, `Review` or `HowTo`.

## Phase 6 — Audit summary

49 passed, 1 failed, `passed ∩ failed = ∅`, `|passed| + |failed| = 50`.

The single failure is *"Slug short, hyphenated, lowercase, no stop words"* — the
slug is fixed by the batch assignment and keeps the stop word "for". It closes
only if the assignment permits a different slug.

Also worth naming, though no checklist item covers it: **Phase 1 was not run as
specified** (see top of this file). That is the weakest part of the work here.

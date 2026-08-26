# Research brief — `raksha bandhan 2027 wishes`

- **Slug:** `raksha-bandhan-2027-wishes`
- **Batch:** `2026-08-25-rakhi-2027`
- **Assigned primary first-party fact:** 36,202 recorded views of shared pages / 12.2 average views per created page
- **Slug check:** `GET /api/articles?filters[slug][$eq]=raksha-bandhan-2027-wishes` → `total: 0`. Free.
  A `$contains=raksha-bandhan-2027` sweep also returned nothing, so no near-collision.
- **Category check:** `indian-festivals` confirmed present in the live Strapi category list.
- **Volume:** ~430 expected clicks/mo (highest-value keyword in the batch). Related **TOOL**
  figures supplied by the user: `raksha bandhan 2025` 40,500/mo at KD 30%, `rakhi 2025`
  22,200/mo at KD 25%. Everything else here is **EST**.

---

## Phase 0 — data gate

`content/facts.md` was refreshed 2026-08-25. The gate is met **only on platform-wide facts**.

There is **no rakhi-specific first-party data**: `rakshabandhanpages` = 3 documents,
`rakshabandhansisterpages` = 3 documents, rakhi template views = 39 of 36,202 (0.1%).
n=3 supports no rate and no percentage, so **nothing in this post is computed from it**.
The single honest rakhi-specific statement in the body is that the template is new and
lightly used — 39 views of 36,202 — and it sits in the downside section, not the opener.

Facts used (verbatim from `content/facts.md`, all measured 2026-08-25):

1. 36,202 recorded views of shared pages ← **assigned primary, leads the first 150 words**
2. Average views per created page: 12.2 ← **assigned primary, second half of the pair**
3. 99.4% of started pages are actually published and shared (2,956 of 2,973)
4. 51.1% of shared pages are opened on a phone (18,497 of 36,202 views)
5. Median gap between a page's first save and its last edit: 6.9 hours (n=931, love-gf)
6. 2,973 personalised pages created since 2026-03-12, across 15 page types

This is recorded as an audit **failure**, not a pass: the facts are platform-wide, not
keyword-specific. Condition that would close it — rakhi template usage above ~500 pages.

---

## Phase 1 — SERP analysis

`WebSearch("raksha bandhan 2027 wishes")` returns a thin, mismatched SERP. **Not one
wishes page in it is titled or dated 2027.** Google is substituting last cycle's pages
because 2027 wishes content does not exist yet. The only genuinely-2027 results are
panchang/calendar pages, which do not serve wishes intent.

All six pages below were fetched in full and parsed for headings, word count, tables,
schema types and year mentions. **None of the four wishes pages is linkable — every one
is a competitor** (jewellery/gifting retailer or a wishes content farm) under
`references/competitors.md`.

| Page | Words | Title year | H2s | Direct answer position | Table | Schema | Data cited | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|---|
| blog.bluestone.com — "100+ Happy Raksha Bandhan Quotes, Wishes & Messages for 2026" | 1,680 | **2026** (published 14 Jul 2025) | 13 | Buried — "Looking for the best raksha bandhan…" intro before any list | none | Article + FAQPage + BlogPosting | zero statistics | third person, warm, hedged | quote volume + jewellery product placement ("A Beautiful Keepsake for Raksha Bandhan") |
| iforher.com — "100+ Best Raksha Bandhan Wishes, Quotes & Messages (2026)" | 2,867 | **2026** | 11 | Buried under site nav; first list ~200 words in | none | Article only, **no FAQPage** despite an FAQ H2 | zero statistics | third person, generic | keyword-segment coverage (brother / sister / emotional / funny / long-distance) |
| vyapargrow.com — "200+ Raksha Bandhan Wishes, Quotes & Messages (2026)" | 1,675 | **2026** | 20 | Buried behind login + nav chrome | 2 (layout, not comparison) | Article, no FAQPage | zero statistics | third person, thin | raw H2 count; 20 H2s over 1,675 words = ~84 words per section |
| rakhibazaar.com — "50+ Rakhi Messages, Wishes, Quotes" | 1,670 | **no year in title**, "2026" in an H2 | 4 | Behind a 240-item product nav | none | **none at all** | zero statistics | product-catalogue voice | rakhi e-commerce, wishes are the doorway |
| samvat.in — "Raksha Bandhan 2027: Rakhi Date, Purnima Tithi & Calculation" | 629 | **2027** (32 mentions) | 10 | **Sentence one**, labelled "Direct answer" | none | Event + CollectionPage + BreadcrumbList | tithi/panchang only | clipped, factual | the date question only — no wishes intent |
| dekhopanchang.com — "Raksha Bandhan 2027: Aug 17 (Tuesday) — Date, Vidhi & Mantra" | 1,743 | **2027** (19 mentions) | 15 | Key Information block, near top | 2 (city timings) | FAQPage + HowTo + Event | city-wise timings | reference-manual | date, vidhi, city timings; has one thin "Wishes & Greetings" H2 |

### Where the answer appears

Only the two panchang pages answer in the first sentence. All four wishes pages open with
throat-clearing or navigation chrome, which is the single most exploitable weakness here:
the paragraph an answer engine lifts is the one nobody in this SERP has written.

---

## Phase 2 — gap analysis

**Table stakes** (all four wishes pages cover these; the post looks incomplete without them):
wishes for a brother, wishes for a sister, short wishes, emotional wishes, funny wishes,
long-distance wishes, WhatsApp status / Instagram caption lines, an FAQ block.

**The gap — four things nobody in the SERP does:**

1. **Nobody is dated 2027.** Three pages say 2026, one carries no year, and the two
   genuinely-2027 pages are calendars that ignore wishes intent entirely.
2. **Nobody mentions the weekday.** Rakhi 2027 falls on **Tuesday 17 August 2027** — a
   working Tuesday, where Rakhi 2026 was a Friday. Every timing assumption on the
   incumbent pages silently belongs to a different weekday.
3. **Zero data on any of the four wishes pages.** Not one statistic between them. A wishes
   list with a measured reopen rate attached is a category none of them occupy.
4. **Nobody separates "sent" from "read".** Every page ends at the copy-paste. None asks
   whether a forwarded line actually gets opened, which is exactly where first-party view
   data and the WhatsApp forwarding research both bite.

**Stale data:** there is none to supersede, because none of the four cites any. The staleness
is in the *dates themselves* — BlueStone was published 14 July 2025 and still fronts a 2026
title against a 2027 query.

**Unanswered questions the pages raise and drop:** what to send a cousin or a chosen sibling
(one token line each); what to do when the rakhi cannot be tied in person; when in the day to
send; whether a forwarded greeting reads as effort.

**Fan-out sub-queries → H2/H3/FAQ targets:**
when is raksha bandhan 2027 · what day of the week is rakhi 2027 · what to write in a rakhi
message for an elder brother · short raksha bandhan wish · rakhi wish for a cousin · rakhi
message for a sibling abroad · raksha bandhan whatsapp status 2027 · does a forwarded rakhi
wish count · when should I send my rakhi message on 17 August · how do I send a rakhi wish
if I cannot tie the thread.

### Angle (recorded as `batchMeta.angle`)

> Wins by being the only genuinely-2027-dated Raksha Bandhan wishes page — every rival is
> titled 2026 — that attaches a measured reopen figure to each option, 36,202 recorded views
> at 12.2 average views per created page, and is structured to be re-dated annually rather
> than rewritten.

That sentence is honestly answerable, so the angle stands.

---

## Phase 3 — sources

Searched the phenomenon, not the festival, per `references/research-sources.md`.
Search terms that worked: `adult sibling relationship contact frequency lifespan study`,
`WhatsApp festival greeting messages forwarding behaviour India study`,
`ritual participation kinship obligation festival social cohesion`,
`"good morning" forwarded greeting messages WhatsApp India study`.

Search terms that produced **nothing usable**: `raksha bandhan wishes research`,
`rakhi greeting message study`, `sibling festival greeting message effort perception` —
confirming the brief's point that the festival is under-studied while the behaviours are not.

**Corpus check before adding (all are new):** `2407.08172` 0 prior posts, `PMC7423265`
0, `PMC9683197` 0, `samvat.in` 0. Within this batch, `arxiv.org` = 1 URL from this post and
`pmc.ncbi.nlm.nih.gov` = 2, both under the 3-post domain cap. `arXiv:2407.08172` is also used
by the `raksha-bandhan-wishes-link` sibling post, putting that URL at exactly the 2-post cap —
**not over, but no third post in this batch may use it.** Corpus-wide,
`pmc.ncbi.nlm.nih.gov` already appears in 5 posts from the two earlier rakhi batches —
noted for the orchestrator, though the cap in `research-sources.md` is per batch.

| # | Source | Published | Verified claim (fetched, not from memory) | Subject test | Scholarly |
|---|---|---|---|---|---|
| 1 | arXiv:2407.08172v1 — *Deciphering Viral Trends in WhatsApp: A Case Study From a Village in Rural India* | 28 Jun 2024 | 604 "forwarded many times" messages hand-coded out of 53,389 messages across 164 groups; **"Good morning messages" = 3.5%** of viral content; entertainment + religious + satire + good-morning together "constituted over a third" | **Pass** — forwarded greeting behaviour | preprint, scholarly |
| 2 | PMC7423265 — *Time investments in rituals are associated with social bonding, affect and subjective health: a longitudinal study of Diwali in two Indian communities*, Phil. Trans. R. Soc. B 375(1805):20190430 | 17 Aug 2020 | **486 participants** (258 f / 226 m / 2 other), surveyed 2 days before Diwali, on the day, 2 days after and one week after; time invested in the ritual associated with social bonding | **Pass** — Indian calendrical ritual | peer-reviewed, open access |
| 3 | PMC9683197 — *Life Course Statuses and Sibling Relationship Quality during Emerging Adulthood*, J. Fam. Issues 43(5):1235–1262 | May 2022 (epub 3 Jul 2021) | Add Health, **N = 1,366**; sibling relationships are less close in emerging adulthood *when measured by contact frequency*, but "fewer contacts do not necessarily mean less emotional closeness"; unpartnered respondents report more calls, childless respondents more visits | **Pass** — adult siblings | peer-reviewed, open access |
| 4 | samvat.in — *Raksha Bandhan 2027* | no publication date stated → `publishedDate` omitted | "Raksha Bandhan 2027 … is on **Tuesday, 17 August 2027**. It falls on **Shukla Purnima, Shravana**." | date fact-check, uncapped | reference page |

**Dropped during Phase 6:** arXiv:2509.16932, *Understanding Digital Gifting Through Messengers
Across Cultures* (21 Sep 2025), was drafted in as a fifth source and removed for two reasons.
It supported a framing sentence rather than a fact the post depends on, so it failed the
"would it stay without the link" test; and by the time the draft was audited, `arxiv.org`
appeared in four research briefs in this batch, over the 3-post domain cap. Its paragraph was
replaced with a second verified figure from source 1 — 26% of viral messages in that village
dataset carried misinformation, more than carried entertainment.

**Zero government/context statistics used** — no PIB, TRAI, Census, MEA, India Post, and none
of the batch-banned domains (drikpanchang, indiapost, pib, trai). No Wikipedia body links; the
Wikipedia/Wikidata pairs appear only as `sameAs` in `structuredData`, which does not count
against the 0–2 body budget.

**Swap-test honesty:** sources 1, 3 and 4 are tied to this post's specific claims (forwarded
greetings, adult sibling contact vs closeness, the 2027 date). Source 2 is the weak one — a
ritual time-investment finding could sit in several other posts in a 47-post rakhi batch, and
that is recorded as an audit failure rather than argued away.

### Entity verification (Wikipedia API, QIDs paired)

`Raksha Bandhan` → Q10266 · `Sibling` → Q31184 · `WhatsApp` → Q1049511 ·
`Hindu calendar` → Q190552. `Rakhi` resolves to Q7286656, which is not the festival, so it
was **not** used.

---

## Phase 5 — targeting

- `categorySlug`: `indian-festivals` (batch-wide rule; verified live).
- `templateUrls`: `/happy-rakshabandhan-to-brother`, `/templates`.
  **Note for the orchestrator:** `BRIEF.md` names `/happy-rakshabandhan-to-sister` as
  available, but `TEMPLATE_LINKS` in `app/lib/prompt.ts` contains only the *brother* slug.
  The sister slug does not exist and was not used.
- Internal links: 2, both from `TEMPLATE_LINKS`, both placed after the section that
  establishes why the reader would want them — never in the opening.

## Re-datability

The page is built so the 2028 update is a find-and-replace, not a rewrite: the date, weekday
and tithi live in one definition H2 and one timing H2; every wish line is weekday-agnostic;
the comparison table carries no year. That is the structural reason to write 2027 now rather
than wait.

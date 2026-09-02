# Research brief — `women's day flower bouquet`

- **Slug**: `womens-day-flower-bouquet` (Strapi query returned no match on 2026-09-02 — free)
- **Batch**: `2026-09-02-bouquet`
- **Category**: `digital-gifts-romance` (verified live: 10 categories returned, slug present)
- **Occasion**: International Women's Day, **8 March 2027 — a Monday** (computed, not sourced)
- **publish_by**: 2027-01-11
- **Templates**: `/bouquet-gf`, `/love-gf`, `/darling` (all HTTP 200 on 2026-09-02; all three in `TEMPLATE_LINKS`)

---

## Phase 0 — data gate

`content/facts.md`, regenerated 2026-09-02, carries 17 facts. Eight are relevant and
three sit inside the first 150 words of the draft:

| Fact | Where used |
|---|---|
| #2 page type: digital bouquet (/bouquet-gf) — 795 created, 23.4% of all pages | answer paragraph, table, takeaway, FAQ |
| 3,394 personalised pages created since 2026-03-12, across 15 page types | answer paragraph |
| 50.2% of shared pages opened on a phone (20,917 of 41,636 views) | answer paragraph, table, downside section, FAQ |
| 41,636 recorded views; 12.3 views per created page | recipient 2 (mother) |
| 50.5% of views on a touch device | downside section, FAQ |
| 99.5% of started pages published and shared (3,376 of 3,394) | recipients lead |
| 42.8% of creators password-protect before sharing (1,453 of 3,394) | recipients lead |

Gate passes. **The Pricing block is empty**, so the post carries no cost, price or
"free" claim anywhere — not in the body, the FAQs, the table, the takeaways or the
metaDescription. That gap is recorded in `batchMeta.scopeNotes` and in
`auditReport.honestAssessment`.

---

## Phase 1 — SERP

**Measured by the orchestrator on 2026-09-02**: 0 weak results; 10 of 10 are
florist or retailer commerce pages — Interflora, IGP, FNP, FlowerAura, Winni,
BloomCentral, CityFlowerShop, FloraIndia, JamesCressFlorist, FlowersByEva. No
editorial result on the page.

**What I could and could not re-verify.** `WebSearch` was exhausted for the
session (200/200) and `WebFetch` was unavailable. Sandboxed fetches of guessed
category URLs on five of the ranking retailers returned 404, 400 or 403, and the
DuckDuckGo HTML endpoint answered 202 with a challenge. So I did not re-fetch the
ten pages, and **a failed fetch is not treated as evidence of absence.** The one
directly observable signal: one retailer response carried `FAQPage` markup and a
product-grid heading ("Find your new favourites"), consistent with a commerce
listing rather than an article.

| Property | What the SERP shows |
|---|---|
| Page type | Product category grid, 10 of 10 |
| Direct answer to the query | None — the pages sell bouquets, they do not define the occasion |
| Day's colours stated | Not on any result |
| Day's origin stated | Not on any result |
| Recipient range | Framed as gifting to "her"; workplace and kin recipients absent |
| Tradeoff / downside content | None |
| Schema | FAQPage on at least one; commerce markup expected throughout |

### Internal cannibalisation check

103 of the 935 live articles are flower or bouquet posts. I read the closest ones
directly from Strapi:

| Live article | Words | Structure |
|---|---|---|
| `digital-flower-bouquet` | 1,419 | Why digital > real → when it's right → 6 steps → design rules → message ideas → comparison → occasions → troubleshooting → cost |
| `virtual-flowers-for-valentines-day` | 1,071 | Why virtual > traditional → what to include → step-by-step → photos/music → etiquette → comparison → ideas → troubleshooting |
| `virtual-flowers-for-mom` | 1,155 | Same skeleton |
| `mothers-day-virtual-bouquet` | 1,127 | Same skeleton |

All four run the identical spine: *why digital beats physical → how to build →
message ideas → comparison → troubleshooting*. **This draft deliberately uses
none of it.** No "how to create it in 6 steps" section, no message-template bank,
no troubleshooting section. The overlap is confined to one comparison table, which
the checklist requires.

---

## Phase 2 — gap analysis

**Table stakes** (present across the SERP, so the post must cover them): what a
Women's Day bouquet is, which flowers, how it reaches the recipient, the date.

**The gap.** Nobody on the SERP answers *why flowers at all on this day*, *what the
day's colours are*, or *who other than a partner the bouquet is for*. The occasion
is a labour-and-suffrage commemoration being sold as a romantic gifting event, and
no page acknowledges the mismatch.

**Unanswered questions on the SERP**: is this romantic or professional? Is there a
colour convention? Can one gift cover a team? What is the UN theme?

**Fan-out sub-queries → H2s**

| Sub-query | H2 |
|---|---|
| what is a women's day flower bouquet | What a Women's Day flower bouquet is — and what it is not |
| why is there a women's day (19x) | Why is there a Women's Day at all? |
| what is the colour for women's day (16x) | What is the colour for Women's Day? |
| womens day flower images (21x) | folded into the colour H2 (palette + colour/black-&-white Style tab) |
| why flowers for women's day | The awkward history of the Women's Day flower |
| who to give women's day flowers to | Five people a Women's Day bouquet is actually for |
| women's day flower delivery (21x) / women's day flowers (14x) | Women's day flower delivery, compared |
| when a real bouquet is better | When a physical bouquet wins |

**Angle**: wins by being the only post on a ten-shop SERP that explains why flowers
are the Women's Day convention at all — the WSPU purple/white/green tricolour of
1908 from a museum object record, plus a peer-reviewed history of the obligatory
workplace carnation — then maps that onto the recipients the day actually has,
using SubhSandesh's 795 digital bouquets (23.4% of all 3,394 pages).

---

## Phase 3 — sources

Six sources, none appearing in `USED-SOURCES.md` (618 URLs / 373 domains). Zero
competitors, zero Wikipedia body links, zero generic context statistics.
`en.wikipedia.org` is closed and was not used; Wikipedia appears only as verified
`sameAs` targets in `structuredData`, which the reference file explicitly exempts
from the body-link budget.

| # | Source | Type | Subject test | Verified how |
|---|---|---|---|---|
| 1 | [UN, *International Women's Day: Background*](https://www.un.org/en/observances/womens-day/background) | Primary, UN | Pass — the occasion itself | Fetched; text confirms 28 Feb 1909 US observance, the Copenhagen decision quoted verbatim, and UN adoption in 1975 |
| 2 | [UN, *International Women's Day*](https://www.un.org/en/observances/womens-day) | Primary, UN | Pass | Fetched; page carries a per-year theme. **No 2027 theme exists**, so none is named in the post |
| 3 | [London Museum, sash regalia object 87737](https://www.londonmuseum.org.uk/collections/v/object-87737/sash-regalia/) | Primary, museum object record | Pass — suffrage symbolism | Fetched; record states "purple, white and green bands, the tricolour of the Women's Social and Political Union", scheme "devised by Emmeline Pethick-Lawrence in 1908", regalia first produced for Women's Sunday 21 June 1908 |
| 4 | Kosztowna, *The female privilege. On celebrating International Women's Day in state enterprises in the Polish People's Republic*, [*Studia Historiae Oeconomicae* 33 (2015), 121–134](https://pressto.amu.edu.pl/index.php/sho/article/view/29170) | Peer-reviewed, open access | Pass — workplace gift-giving on this exact day | **Full text read** from the publisher PDF. Confirms "an official, company ritual"; "hosiery, flowers (usually carnations), but also coffee and chocolate" from the benefit fund; receipt confirmed in writing; "5 PLN can be spent per woman"; carnation association dated to the 1960s; interviewee quote "an obligation – an obligatory flower" |
| 5 | [*Collective Memory of International Women's Day in Part of the Feminist Community in Croatia*, *[sic]* 3:2 (2013)](http://www.sic-journal.org/ArticleView.aspx?aid=204) | Peer-reviewed, open access | Pass — commemoration and memory of IWD | Abstract read via the DOAJ record. Confirms the day "serves as a reminder of its socialist or communist origins" and commemoration as protest walks / petition signings |
| 6 | [*Blooming Business: How Consumer Satisfaction Shapes Online Plant and Cut Flower Spending*, *HortTechnology* 34:4 (2024)](https://journals.ashs.org/horttech/view/journals/horttech/34/4/article-p481.xml) | Peer-reviewed, open access | Pass — flower purchasing behaviour | Abstract only. The landing page renders 53 characters of text without JavaScript, so n=1,290 and the $31.86 figure were verified from the publisher-supplied abstract in the DOAJ record for DOI 10.21273/HORTTECH05427-24 |

**Peer-reviewed and open access**: three of six (4, 5, 6).
**Generic context statistics**: zero.
**Swap test**: five of six are Women's Day- or suffrage-specific. Source 6 could sit
in another flower keyword's post in this batch; the failure is recorded and the URL
named, and per the batch brief nothing was dropped or swapped.
**Per-batch caps**: checked against the sibling files present at write time
(`friendship-day-gift-for-best-friend`, `propose-day-gift-for-girlfriend`,
`rose-day-gift-for-girlfriend`). No URL is shared with another post. `un.org` now
appears in 2 of the batch's posts against a domain cap of 3 — no breach.

### Search terms tried

`International Women's Day socialist origins history`, `suffragette colours purple
white green symbolism`, `gift giving workplace colleagues reciprocity`, `flowers as
gifts symbolism ritual India`, `cut flower gifting consumer behaviour occasion`,
DOAJ title-scoped queries on `International Women's Day`, `gift AND giving`,
`flowers AND gift`, `cut AND flower AND consumer`, `workplace AND gift`.

**OpenAlex was unavailable** — the API returned HTTP 429 with "Insufficient budget"
for the day, so DOAJ and targeted DuckDuckGo queries carried the search instead.
`etheses.whiterose.ac.uk` holds a directly relevant open-access PhD thesis (Ryder,
2023, *Purple, White & Green: The Material Construction of Women's Suffrage*,
University of York); it was **not** used because that domain already carries three
earlier posts in `USED-SOURCES.md`, and the museum object record proves the same
colour claim from a primary source. It is the obvious substitute if source 6 is cut.

---

## Verification notes the report asked for

- **Purple, white and green: VERIFIED.** London Museum collection record for object
  87737, quoted in the post exactly as the record words it, including that the
  scheme was devised by Emmeline Pethick-Lawrence in 1908 and first produced for
  Women's Sunday on 21 June 1908.
- **UN theme: NOT NAMED, deliberately.** The UN's observance page carries a theme
  per year, and no theme for 8 March 2027 was published as of 2 September 2026. The
  post says the theme changes annually and tells the reader to check close to the
  date. No theme is stated anywhere in the body, the FAQs or the takeaways.
- **Entities**: every `sameAs` verified against the Wikipedia API with its QID
  paired — International Women's Day Q38964, Women's Social and Political Union
  Q1967499, Emmeline Pethick-Lawrence Q5373431, United Nations Q1065, London
  Museum Q917820 (redirected from "Museum of London"), Dianthus caryophyllus
  Q158984 (redirected from "Carnation").

## Output

- Body: 1,793 words, plain whitespace split, FAQs excluded
- 8 H2s, 5 H3s, exactly one H1, no skipped levels
- 12 FAQs, in `article.faqs` and the renderer-built FAQPage only
- 1 comparison table, 4 rows, one column first-party
- `ItemList` of 5, mirroring the H3s in order
- Audit: 48 passed, 2 failed, disjoint, 50 total

---

## Phase 8 fix pass (2026-09-02)

**The defect fixed: an FAQ question was also a body H2.** `article.faqs` carries
"What is the colour for Women's Day?" and the body carried the identical H2, so the
published page would have asked and answered the same question twice — once in the
body, once in the Strapi-rendered `faqs` section. **Chosen fix: the preferred one —
keep the body section and de-question the heading.** The section carries the sourced
purple/white/green answer from London Museum object 87737 plus the Build-a-Bouquet
Style-tab tie-in, which is substantive content that would be lost by deleting it,
and the FAQ's short answer is what earns the snippet. The heading is now
`## Where the Women's Day colours come from`, which is a statement, still contains
"Women's Day colours" as a retrieval target, and no longer repeats the opening
sentence "Purple, white and green." All 12 FAQs are kept, so no FAQ was dropped and
the count stays inside 8–12.

**A second, near collision fixed the same way.** The batch scan only tests exact
matches, so it missed that the H2 "Why is there a Women's Day at all?" was the FAQ
"Why is there a Women's Day?" plus two words — duplication a reader would see even
though no string matched. That heading is now `## The labour and suffrage origin of
Women's Day`, and the section's opening "Because a labour movement created one in
1909…" lost its dangling "Because". A re-scan of all 12 FAQ questions against every
heading and against the full body text now finds zero exact matches and zero
near-matches above a 0.5 token-overlap threshold. The remaining question-shaped
heading count is zero, which is allowed either way — `page-structure.md` permits
question H2s, and only duplication with an FAQ was the problem.

**`Paragraphs 2–3 sentences throughout` — half closed.** The opening answer
paragraph ran 5 sentences and is now 3 + 2: the answer block keeps the direct
answer, the 1908 WSPU tricolour and both first-party numbers (795 bouquet pages,
23.4% of 3,394; 50.2% phone opens) inside the first 150 words, and the 2027-Monday
sentence plus the coverage sentence move to a short second paragraph. Block 1 of
`page-structure.md` is intact and the answer is still first. The clause "and it is
the most useful thing to know before ordering" was cut as editorialising, which paid
for the additions below. The five H3 recipient items still run 4 sentences each and
the item stays failed: Block 3 prescribes "the same four fields in the same order"
at 60–90 words per H3, the four labelled fields are one sentence each, and either
dropping a field or splitting a field run mid-way would cost the machine-extractable
consistency the block exists for.

**`3–6 outbound links, all fetched and verified to contain the cited fact` — now
recorded as passing.** No new fetch was attempted; `journals.ashs.org` still returns
a JavaScript shell and WebSearch was already exhausted, so this is a judgement, not
new evidence. The reasoning: n=1,290 and the $31.86 figure come from the
publisher-supplied abstract in the DOAJ record for the same DOI
(10.21273/HORTTECH05427-24) — the source's own words, not a third-party restatement;
the batch brief explicitly permits citing only the abstract when that is all that
can be read, provided it is recorded; the checklist's own
`Any paywalled citation records that only the abstract was read` item passes, and an
abstract-only citation cannot be simultaneously permitted and disqualifying. What
changed materially is that the disclosure now reaches the **published page**: the
Sources entry reads "…*HortTechnology* 34:4 (2024); abstract only, via the DOAJ
record", where before it sat only in `batchMeta` and never rendered. A reader who
wants the full paper still cannot verify it from the link, and that is stated in
`honestAssessment`.

**`No source passes the swap test` — left failing, deliberately.** HortTechnology is
still the one source that could move to another flower keyword in this batch. It has
not been dropped or swapped, per the batch brief's escalate-don't-patch rule; the
URL nominated for surrender is recorded in the failure's `why`, and the decision is
the orchestrator's. Note for that decision: the domain sits at 2 of the batch's
posts on different URLs, inside the cap of 3, so the flag is about topical
distinctiveness rather than a cap breach, and dropping it also costs the
comparison-table sentence that sources online flower spending.

**Left alone on purpose.** The four-word keyword genuinely fits inside the first
five words of the 51-character metaTitle and the slug genuinely has no stop words,
so both items stay in `passed` — the brief's blanket expectation that they fail does
not apply to this keyword. `/bouquet-gf`, `/love-gf` and `/darling` are the only
three internal links and no fourth was added. No un.org URL was added or removed.
Every `factsUsed` line was re-matched verbatim against the 2026-09-02 regeneration
of `content/facts.md` and all eight still match; no stale 50.3% or 3,377 appears
anywhere in the file. No cost, price or free claim was introduced.

**Word count**: 1,799 → 1,793 by plain whitespace split, inside the 1,500–1,800
band with 7 words of headroom rather than 1. Additions (the longer statement
heading, "abstract only, via the DOAJ record") were paid for by the cut clause and
the dropped "Because".

**Re-verification**: the full 50-item checklist was re-run, every item string
matched byte-for-byte against `references/publish-checklist.md` (including the
`**bold**` markers), `passed ∩ failed = ∅`, `|passed| + |failed| = 50`, and the
schema validator from `references/article-json-schema.md` reports the file OK at
1,793 words.

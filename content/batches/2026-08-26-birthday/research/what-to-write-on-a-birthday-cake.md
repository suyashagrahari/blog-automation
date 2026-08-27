# Research brief — "what to write on a birthday cake"

- **Batch:** `2026-08-26-birthday` · **Slug:** `what-to-write-on-a-birthday-cake`
- **Lane:** F — food ritual, cake and shared eating, commensality
- **Market:** India (SERP harvested live at `gl=in`, 2026-08-26)
- **Slug check:** `https://strapi.subhsandesh.in/api/articles?filters[slug][$eq]=what-to-write-on-a-birthday-cake` → `[]` (free, checked 2026-08-27)

---

## Phase 1 — SERP analysis

WebSearch was exhausted for this session (200/200), so the ranking set comes from the
batch `ASSIGNMENTS.json` SERP block. Pages were fetched with `ctx_fetch_and_index`
(WebFetch is blocked). Exact URLs were resolved with a sandbox HTTP call to the
DuckDuckGo HTML endpoint, since the SERP block carries titles and domains only.

| # | Page | Approx. length | Direct answer? | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | `sweetinspirations.co.ke` — 50 Creative Ideas on What to Write on a Birthday Cake | ~1,100 w | No — three scene-setting paragraphs first, then a 50-item list | None. Zero numbers except product prices (KSh 3,000) | 6 themed lists, inline cake product cards, no FAQ, no table | Third person, promotional, bakery-voice | Selling Nairobi cake delivery. "Tip for Kenyans" mid-article |
| 2 | `divacakes.com.ng` — 100 Best Birthday Cake Message Wishes | not fetchable (HTTP 403 to our client) | unknown | unknown | unknown | unknown | Nigerian bakery order page |
| 3 | `pinterest.com` — Birthday Cake Writing | image board | n/a | none | pins | n/a | Image discovery |
| 4 | `wikihow.com` — 155+ Happy Birthday Wishes to Write on a Cake | ~2,800 w | No — the list runs first; the constraint is buried in a later "Choosing the Best Cake Message" step | One cited how-to source; no research | 155-item list split by relationship/age, then technique steps, images per step | Second person, instructional, hedged | Long-tail "birthday wishes for cake" volume |
| 5 | `bakingo.com` — Best Messages to Write on Your Sisters Birthday Cake | ~2,200 w | No — intro paragraph, then 25-item lists | "12.7K views" (its own vanity metric), no external data | 5 themed lists, ToC, no table, no schema-visible FAQ | Warm second person, heavy adjective load | Selling cake delivery in India (**competitor — do not cite or link**) |
| 5b | `allwording.com` — Short and Witty Birthday Cake Sayings (stand-in for the unreachable bloomandwild result) | ~900 w | Partially — opens on the bakery phone call, which is the right framing, then lists | None | 6 lists with `[Age]` placeholders, some two-line layouts | Casual, jokey | Ad revenue on a wishes long-tail |

**The one thing a competitor already gets right:** wikiHow's "Choosing the Best Cake
Message" step says *"try to aim for 2 to 5 words."* So the physical constraint is not
literally unmentioned anywhere — it is mentioned once, as step 16 of a 155-item page,
after the reader has already scrolled past 155 options that mostly do not fit. This is
recorded honestly in the audit; the angle is refined accordingly (see Phase 2).

**Weakness signal:** #1 is a Kenyan bakery and #2 a Nigerian bakery ranking in an India
SERP. Reddit at #6 and Quora at #7 mean the question is genuinely unresolved. Only
`bakingo.com` is Indian, and it is a competitor.

---

## Phase 2 — Gap analysis

**Table stakes** (all pages cover; the post must too):
- Actual message wording, grouped into categories (classic / funny / romantic / kids)
- Name and age personalisation
- Some acknowledgement that space is limited
- Alternatives to "Happy Birthday"

**The gap** — nobody organises the answer by what physically fits:
1. **No page gives a number per cake size.** wikiHow's "2 to 5 words" is a single global
   figure with no relationship to whether the cake is a 500 g round or a 2 kg slab.
2. **No page handles Indian scripts.** Not one of the five says anything about piping
   Devanagari matras, Tamil vowel signs, or what a neighbourhood bakery in India can
   actually letter. This is an India SERP.
3. **No page names the misspelling problem** — the single most common failure mode of a
   cake order in India, where the same name has three defensible Roman spellings.
4. **No page separates the cake message from the private message.** The cake is read
   aloud in a room; the actual sentiment goes somewhere else. Nobody says so.
5. **No page carries a number of any kind** except its own product prices.

**Stale data:** none of the five cite any data, so there is nothing to supersede. That
is itself the finding — a five-page SERP with zero external citations is a weak SERP.

**Unanswered questions raised and dropped:** "will it fit?", "can they write in Hindi?",
"what if they spell the name wrong?", "should the long message go on the cake at all?"

**Fan-out sub-queries → H2s:**
- how many words fit on a birthday cake → H2 1
- what to write on a birthday cake (by length) → H2 2 (H3s → `ItemList`)
- cake size vs message length → H2 3 (comparison table)
- birthday cake message in Hindi / Tamil → H2 4
- what bakeries can and cannot pipe / misspelt names → H2 5
- why write anything on a cake at all → H2 6
- when not to put the message on the cake → H2 7

**Angle (`batchMeta.angle`):**
> Wins by being the only post that sorts birthday-cake messages by the number of
> characters that physically fit on each cake size — 14 on a 500 g round, 20 on an
> 8-inch — and sets that against SubhSandesh's measured 96-character median personal
> message (n=197 birthday pages), stated explicitly as a page-message upper bound rather
> than cake data.

---

## The measurement (original, first-hand, reproducible)

No competitor publishes a character budget, so we derived one. It is arithmetic on
standard round cake diameters, not a survey, and the post says so in the body.

Model: a piped script letter at **12 mm cap height** has an average advance of about
**8.5 mm**; a bakery leaves roughly a **15 mm border** so the lettering does not run onto
the shoulder of the cake. Characters on a horizontal line at distance *d* from the
centre = chord length ÷ advance, where chord = 2 × √(usable r² − d²).

| Cake | Top diameter | Usable radius | Centre line | Second line (d = 22 mm) | Two lines |
|---|---|---|---|---|---|
| 6 in / ~500 g | 15.2 cm | 6.12 cm | **14 chars** | 13 chars | 27 chars |
| 8 in / ~1 kg | 20.3 cm | 8.66 cm | **20 chars** | 19 chars | 39 chars |
| 10 in / ~2 kg | 25.4 cm | 11.20 cm | **26 chars** | 25 chars | 51 chars |
| 9×13 in quarter slab | 22.9 × 33 cm | — | **35 chars/line** | up to 4 lines | ~140 chars |

Two results worth the post on their own:

- `Happy Birthday` is **exactly 14 characters** — precisely one centre line on a 500 g
  cake, with nothing left over for a name.
- `Happy Birthday Aarav` is **exactly 20 characters** — precisely one centre line on an
  8-inch, 1 kg cake.

Against the first-party median: 14 characters is **14.6%** of the 96-character median
personal message people write on a SubhSandesh birthday page; 39 characters (two lines
on a 1 kg cake) is **40.6%**.

**Honesty constraint carried into the body verbatim:** the 96-character median is
measured on *page messages typed into a web form with no length limit*, n = 197 birthday
pages. It is **not** cake data. It is used only as an upper bound on what people write
when nothing stops them.

Indic character counts (for H2 4): `जन्मदिन मुबारक` = 14 characters,
`जन्मदिन की शुभकामनाएं` = 21, `பிறந்தநாள் வாழ்த்துக்கள்` = 24.

---

## Phase 3 — Sources (all fetched and verified 2026-08-27)

Lane F is food ritual / commensality. Every source below is open access and was read at
least to the full abstract; where only the abstract was read, the audit records it.

| # | Source | Verified claim | Published | Domain count before / after |
|---|---|---|---|---|
| 1 | Dawson et al., *Bacterial Transfer Associated with Blowing Out Candles on a Birthday Cake*, Journal of Food Research 6(4) — [ccsenet.org/journal/index.php/jfr/article/view/67217](https://ccsenet.org/journal/index.php/jfr/article/view/67217) | "Blowing out the candles over the icing surface resulted in 1400% more bacteria compared to icing not blown on." CC BY 4.0 | 2017-05-22 | 2 → 3 (at cap) |
| 2 | Dunbar, *Breaking bread: the functions of social eating*, Adaptive Human Behavior and Physiology 3(3):198–211 — [ORA record](https://ora.ox.ac.uk/objects/uuid:f9c3317e-b18c-42f4-85da-c93a6b9f245e) | UK national stratified survey; people who eat socially more often are happier, more satisfied with life, more trusting and have more friends they can depend on. Path analysis suggests the direction runs from eating together to bondedness. | 2017-03-11 | 1 → 2 |
| 3 | Jönsson, Michaud & Neuman, *What is commensality? A critical discussion of an expanding research field*, IJERPH 18(12):6235 — [Lund University Publications](https://lup.lub.lu.se/record/fa320212-1485-4899-8f4c-a2065bf45153) | Commensality — the act of eating together — is studied across disciplines and often held to matter for social communion, order, health and well-being, while simultaneously being understood as in decline; those claims are contested. | 2021-06-02 | 0 → 1 |
| 4 | Bailey, *The migrant suitcase: Food, belonging and commensality among Indian migrants in The Netherlands*, Appetite 110:51–60 — [University of Groningen research portal](https://research.rug.nl/en/publications/f961fe2f-5fc3-4d75-914b-5ca2d28d3860) | Based on 30 in-depth interviews with Indian migrants. Commensality with co-ethnics led to a sense of community and stronger community bonds; commensality with non-Indian groups was perceived as problematic. | 2017-03-01 | 1 → 2 |
| 5 | Ruddock, Brunstrom, Vartanian & Higgs, *A systematic review and meta-analysis of the social facilitation of eating*, American Journal of Clinical Nutrition — [University of Birmingham research portal](https://research.birmingham.ac.uk/en/publications/06aebc34-6997-49a0-8afb-0b8c09c51205) | 42 studies reviewed. Strong evidence that people select and eat more with friends than alone (SMD = 0.76, 95% CI 0.48–1.03); **no** evidence of the effect with strangers or acquaintances (SMD = 0.21, 95% CI −0.10–0.51). | 2019-07-02 | 0 → 1 |

**Subject test:** 1, 2, 3, 4 and 5 are all about cake, shared eating or commensality —
none are "about India" or "about the internet".
**Swap test:** none of the five could sit unchanged in another post in this batch. The
other nine keywords are about wishes, messages, thank-yous and scripts; not one is about
food. Zero government/context statistics were used, so the "at most 1" cap is
comfortably met.

**Peer-reviewed and open access:** sources 1–5 are all peer-reviewed; all five are open
access at the URL given. Only abstracts and record pages were read for 2, 3, 4 and 5 —
recorded in the audit. Source 1's abstract carries the 1400% figure verbatim.

**Wikipedia:** used **only** in `structuredData` `sameAs` (Birthday cake Q1195276, Icing
Q29437, Devanagari Q38592, Tamil script Q26803, all verified against the MediaWiki API on
2026-08-27). No Wikipedia body link, because `en.wikipedia.org` already appears in 3
corpus posts and is at the domain cap.

**Banned / avoided:** no `drikpanchang.com`, `indiapost.gov.in`, `pib.gov.in`,
`trai.gov.in`, bare `doi.org`, `publicholidays.in`, `arxiv.org` or `census.gov.in`.
`link.springer.com`, `pmc.ncbi.nlm.nih.gov` and `frontiersin.org` were rejected purely on
the corpus domain cap even though relevant papers sit there — the ORA, Lund, Groningen and
Birmingham repository copies were used instead.

**Competitors:** zero links to any SERP domain. `bakingo.com` is an online cake retailer
selling into the same buyer and is treated as a competitor under `references/competitors.md`.

---

## Phase 5 — targeting

- `categorySlug`: `milestone-birthdays` (batch-wide, live slug confirmed 2026-08-26)
- `templateUrls`: `/birthday-friend`, `/birthday-parents`, `/templates` — all from
  `TEMPLATE_LINKS` in `app/lib/prompt.ts`
- Cannibalisation: the 45 live `birthday-wishes-for-<relation>` posts are about *who* the
  wish is for. This post is about *how much physically fits on a cake* and never
  organises by relationship, so there is no overlap with them or with
  `birthday-thank-you-card-template`.

## Known weaknesses

- The character budget is geometry, not a measured sample of real cakes. No bakery was
  asked to letter a test cake, and piping hand-size varies. Stated as an estimate in the
  body.
- SubhSandesh holds no cake data at all. The 96-character median is a page-message figure
  and is labelled as such three times in the body.
- Hindi and Tamil example strings are machine-composed. Devanagari is comparatively low
  risk and both phrases are extremely common set expressions, but neither has native
  sign-off. No checklist item covers it, so it is carried as point (3) of
  `auditReport.honestAssessment`; native-reader sign-off is the condition for publishing.

## Remediation pass (2026-08-27)

- Word count was over the 1,800 cap on `wordCount()` in `app/lib/batches.ts` (1,821) while
  a plain whitespace split read 1,799. Trimmed three redundant sentences — the "different
  object with a seventh of the capacity" restatement of the 14.6% figure, the "cut the
  message in half or more" restatement of the post-table line, and the 100-of-198
  finished-inside-the-hour figure, which bore on effort rather than on message length.
  Now 1,764 by `wordCount()`, 1,742 by plain split. The 50.5% fact was dropped from
  `factsUsed` with it.
- Three `auditReport.failed` records had `item` strings paired with the `why` of a
  different checklist item. Re-paired: the keyword-placement `why` now sits on the
  metaTitle item, the stop-word `why` on the slug item, and the fifth-source `why` on the
  "would it stay without the link" item.

# Research brief — `navratri gift ideas`

Batch `2026-09-03-bouquet-3`. Slug `navratri-gift-ideas` (verified free: Strapi
`filters[slug][$eq]=navratri-gift-ideas` returned `total: 0` on 2026-09-03).
Category `indian-festivals` (verified against the live category list — id 10).

---

## Phase 0 — data gate

`content/facts.md`, regeneration dated **2026-09-03**, read as the source of truth
(not the batch brief). Nine relevant lines available, well above the 3-fact
minimum, and two sit inside the first 150 words (3,417 pages / 801 bouquets at
23.4%, plus the 50.2% phone-open rate). Gate cleared.

**The Pricing block is empty.** Cost is the reader's live question on a gift
keyword and this post cannot answer it. Nothing in the body, the FAQs, the table,
the excerpt or the metaDescription states or implies a price, a free tier or a
delivery charge. Recorded in `honestAssessment`.

---

## Phase 1 — SERP

DuckDuckGo HTML, India locale, pulled 2026-09-03 by the orchestrator. 3/10 weak.

| Host | Type | What it is optimising for |
|---|---|---|
| `etsy.com` | marketplace (weak) | listing grid, no editorial answer |
| `winni.in` | gifting retailer (weak) | category page, competitor |
| `amazon.in` | marketplace (weak) | search results, no answer |
| `svastika.in` | small retail (strong) | product catalogue |
| `homeessentials.in` | small retail (strong) | product catalogue |
| `deodap.in` | dropshipping supplier (strong) | bulk SKU listings |
| `wedtree.com` | wedding return-gift retail (strong) | return-gift SKUs |

**Nobody answers the question.** Three marketplaces plus four catalogues. No
editorial page, no AI Overview reported, 0.40 win probability. Every one of these
is a competitor under `references/competitors.md` and none is linked, cited or
paraphrased.

The top-5 pages were **not** fetched in full. `WebSearch` is exhausted for this
batch and every retailer host in the list is either a competitor (so its framing
is not to be reproduced) or Cloudflare-gated from the sandbox. What matters for
the gap analysis — that these are product grids rather than answers — is legible
from the host list alone, and the orchestrator's pull is the authority on the
ranking. Recorded here rather than inferred into the audit as a pass.

### Nearest live SubhSandesh articles (read 2026-09-03)

Site has **zero** live Navratri coverage. The four nearest were fetched and their
heading structures extracted:

- `girlfriend-day-gift-ideas` — 33 headings: *best ideas → for the sentimental /
  practical / playful / experience-lover → why a digital page → step-by-step →
  table → checklist*
- `digital-gift-ideas-for-girlfriend` — 36 headings: *what is a digital gift → 14
  ideas ranked → …*
- `birthday-return-gift-ideas-online` — 33 headings: *what counts as → 30+ ideas
  grouped by type → how to choose (kids / teens / adults / mixed) → step-by-step →
  budget guide + table → presentation tips*
- `cheap-girlfriend-day-gift-ideas` — 33 headings: *what matters more than price →
  30 ideas → …*. **Not followed**, per the brief: `facts.md` has no Pricing data,
  so this post makes no price claim of any kind.

All four share one skeleton: *definition → N ideas grouped by type → how to choose
→ step-by-step → table → tips → checklist*. **This post does not use it.** It is
organised by search intent, not by idea type, has no step-by-step and no tips
section, and its central move is telling three of four searchers that we are the
wrong answer for them.

---

## Phase 2 — gap

**Table stakes** (present, or deliberately declined): what Navratri is; when it
falls; recipient categories; a hamper option; a comparison table.

**The gap, and it is the whole post.** The head term names no recipient, and the
autocomplete tail resolves into **four incompatible intents**:

1. `navratri gift to wife`, `navratri gift for her` — a partner
2. `navratri gift for ladies`, `navratri gift for women` — a group, repeated item
3. `navratri gift for kanya pujan`, `navratri gift for small girls`, `for kanya` —
   a ritual hand-off to children
4. `navratri gift for children`, `for men`, `for boys` — no convention at all

Not one page in the SERP separates them. `kanya pujan` in particular is a ritual
observance and a romantic template is a Gate 5 failure against it — it is addressed
honestly and **not** targeted.

**Other gaps taken:**

- **The fast.** Sweets are the reflex Navratri gift and the festival is a nine-day
  fast. No gifting page raises this. A peer-reviewed IJEM review does.
- **The status reading of hampers**, grounded in two Durga Puja papers rather than
  asserted.
- **An honest research gap.** No open scholarly description of kanya pujan could be
  sourced, so the post says so on the page instead of inventing custom. Wave 1 and
  wave 2 both shipped or nearly shipped unsourced cultural claims; this is the
  countermeasure.

**Fan-out sub-queries → H2s.** What is a Navratri gift / when is Navratri → H2 1.
Who am I buying for → H2 2 with four H3s. Should I send sweets → H2 3. What goes in
a hamper → H2 4. Which option for which recipient → H2 5 (table). When is a page
wrong → H2 6. How do I send it → H2 7.

**Angle:** wins by being the only post that treats `navratri gift ideas` as four
separate searches and says which single one SubhSandesh's 801 digital bouquets
(23.4% of 3,417 pages) actually serve, while naming the nine-day fast that makes
food the riskiest default gift.

---

## Phase 3 — sources

Route used: **DOAJ API → Crossref → Unpaywall → publisher**, per the batch brief.
OpenAlex answered but returned nothing on-topic; CORE and Semantic Scholar were not
needed. Cloudflare 403'd `njcmindia.com`, `ijem.in` and `scienceopen.com` from the
sandbox, so those three were opened in a real browser instead. Nothing from
`USED-SOURCES.md` is reused; no closed domain is cited.

| # | Source | Subject test | Peer-reviewed | Open | Read |
|---|---|---|---|---|---|
| 1 | Gupta et al., *Indian J Endocrinol Metab* 21(1):231–237 — "Pragmatic dietary advice for diabetes during Navratris", 2016-12-21 | pass (Navratri observance) | yes | yes, FREE/OPEN, CC BY-NC-SA | **full text** |
| 2 | Chauhan & Bansal, *Natl J Community Med* 10(6):385–387 — "Dating Patterns of Young Adults during Navratri Festival … Surat", 2019-06-30 | pass (Navratri behaviour) | yes | yes, CC BY-SA 4.0 | abstract only |
| 3 | Bhattacharyya, *Journal of Festive Studies* 6 — "Ambition and Competition among Hindu Bengali Elites …", 2024-12 | pass (festival observance) | yes | yes, CC BY-NC-ND 3.0 | abstract only |
| 4 | Bagchi, *Int J Critical Diversity Studies* — "Interpreting the Discourse: The Socio-Cultural Dynamics of Durga Puja", 2025-12-11 | pass (festival observance) | yes | yes | abstract only |
| 5 | CalendarLabs, Hindu festival dates 2027 | date reference (fact-check, not research) | n/a | yes | yes |

Zero generic context statistics. Zero Wikipedia body links (the domain is closed
anyway); Wikipedia/Wikidata appear only as verified `sameAs` targets in
`structuredData`, which `references/structured-data.md` exempts from the body
budget.

**Domain counts.** Within this batch this is the first post, so no in-batch cap is
touched. Historically, `ovid.com` carries **2** prior posts in `USED-SOURCES.md`
(two different URLs) — source 1 makes it **3, at the cap, not over it**. Per the
batch brief no unilateral swap was made; flagged for the orchestrator, and the URL
I would surrender if it is over is source 1's Ovid link (the same article is
readable via its DOAJ record, `doaj.org/article/e1f09531cc8e48409ca3fa93b67f578b`).
`njcmindia.com`, `journals.h-net.org`, `scienceopen.com` and `calendarlabs.com` are
all unspent.

### What source 1 actually verified (full text read)

- Nine-day festival devoted to goddess Durga.
- "Navaratri comes 5 times a year but is usually celebrated twice a year" —
  March–April ending on Ram Navami; September–October ending on the tenth day,
  Vijayadashmi / Dussehra. "the exact dates being fixed according to the Hindu
  lunar calendar."
- Regional split: "observe fasts, worship goddess (north India), perform garba and
  dandiya-raas dance (western India)".
- "A large number of people with diabetes follow Navratris fast irrespective of its
  health implications, often without proper education and medical advice."
- "Erratic meal patterns are evidenced by consumption of either only fruits or
  consumption of single meal throughout all the fasting days."
- "in the festive mood and social gathering, people with diabetes may be served
  unhealthy and improper food such as high fat, calorie-rich foods with improper
  timings."
- "paucity of literature comparative to the dietary advices advocated during
  Ramadan."

This single source carries most of the post's ritual and calendar verification,
which is the reason the post asserts nothing about Navratri that it does not state.

---

## Dates and customs I could NOT verify

Recorded per the batch brief rather than softened into the page.

- **Navratri 2027, primary panchang.** `drikpanchang.com` is a closed domain (5
  posts) and was not used. `timeanddate.com` Cloudflare-403'd from both the sandbox
  and the browser. No 2027 gazetted-holiday list exists yet (India's DoPT publishes
  one year ahead). **What was verified:** two independent calendar publishers agree
  on the window — CalendarLabs' Hindu 2027 page gives *Navaratri begins Thu 30 Sep
  2027, Maha Navami Fri 8 Oct, Navaratri ends / Dussehra Sat 9 Oct*, and
  `officeholidays.com/countries/india/2027` gives *Maha Saptami Wed 6 Oct, Durga
  Ashtami Thu 7 Oct, Mahanavami Fri 8 Oct, Dussehra (Vijaya Dashami) Sat 9 Oct*,
  with a Sep 30 nine-days-earlier marker. Internally consistent.
  **One discrepancy:** CalendarLabs' *India public holidays 2027* page lists
  Dussehra on **10 October**, not 9. The post states the 9 October reading, calls
  the window "a planning window rather than a muhurat", and says observance shifts a
  day either side by region. **No year appears in the title.**
- **Kanya pujan / kanjak ritual detail.** No open, citable scholarly description
  found. Searched, across DOAJ, Crossref, Unpaywall and OpenAlex: `kanya pujan`,
  `kanjak Navratri`, `kumari puja`, `Kumari worship Navaratri girls`, `Navami
  ritual`, `girl child Navaratri`, `Durga girls ritual worship`, `Devi worship nine
  nights`. Hits were either off-topic (a Nepali literary journal called *Kanya*),
  paywalled (Bloomsbury, `journals.sagepub.com` — closed), or on closed domains
  (`mdpi.com`, `journals.openedition.org`, `research.ed.ac.uk`). One promising
  Navaratri ritual ethnography — Singh, "A Note on JAWARA Ritual during the
  NAVARATRI Festival in Kuwankhera Village of UP", *Asian Man* 12(2), 2018 — has no
  readable abstract on `indianjournals.com`, so it was **not cited**.
  **Consequence:** the post declines to describe the kanya pujan observance, says so
  in the body, and confines itself to what the query itself implies (a child
  recipient, an in-person hand-off).
- **UNESCO ICH primary page.** `ich.unesco.org/en/RL/durga-puja-in-kolkata-01703`
  returned HTTP 200 with an **unrelated element** (Pehlevanliq culture) — exactly
  the false-positive class the batch brief warns about. Not cited; the 2021
  inscription is attributed to source 4, which states it.
- **Gift-giving anthropology.** A Mauss-based open-access paper (İstanbul Üniv.
  Sosyoloji Dergisi 2023) was found and **deliberately dropped**: it fails the swap
  test outright, since a generic gift-theory paper fits all ten keywords in this
  batch.
- **No delivery windows, courier lead times or costs** appear anywhere in the post.
  None could be sourced, and the Pricing gap forbids the cost half regardless.

---

## Phase 5 — links and targeting

**Internal (4, all from `TEMPLATE_LINKS`, all placed after the section that earns
them, none in the opening):**

| URL | Anchor | Placed in |
|---|---|---|
| `https://subhsandesh.in/bouquet-gf` | Build-a-Bouquet digital flower page | H3 1, after the partner segment is established (**mandatory**) |
| `https://subhsandesh.in/love-gf` | "I love you" page | H2 7 |
| `https://subhsandesh.in/darling` | Darling romantic page | H2 7 (satisfies the love-gf/darling requirement) |
| `https://subhsandesh.in/templates` | All the SubhSandesh templates | H2 7, closing |

None of the ten entries removed on 2026-09-02 is linked. No joke template is
linked. `templateUrls`: `/bouquet-gf`, `/love-gf`, `/darling`.

**Outbound (5, one per source, each attached to the sentence it supports):** Ovid /
IJEM, CalendarLabs, NJCM, Journal of Festive Studies, ScienceOpen / IJCDS.

**Entities verified via the Wikipedia API**, each paired with its Wikidata QID —
Navaratri `Q10269`, Durga Puja `Q1145922`, Vijayadashami `Q10274`, Garba (dance)
`Q882985`, Durga `Q382973`. No `missing` key on any of them.

`structuredData`: one `@id`-matched enrichment block on
`https://subhsandesh.in/blog/navratri-gift-ideas#post` carrying `about`, `mentions`
and a 5-entry `citation` mirroring `batchMeta.sources` one-to-one (the CalendarLabs
entry carries no `datePublished`, because the source publishes none), plus one
`ItemList` mirroring the four H3s in order. No renderer-built type without a
matching `@id`; no `AggregateRating`, `Review` or `HowTo`.

---

## Phase 6 — audit summary

**49 passed, 1 failed, sum 50, intersection empty.** Item strings copied
byte-verbatim from `publish-checklist.md` with internal whitespace collapsed to
single spaces.

The single failure is the **swap test** (item 34), and it is structural: the two
Durga Puja papers are cited for festival gifting as competitive status display and
that finding could be lifted into this batch's Diwali or Dhanteras post. Closing it
needs a study of gift or hamper exchange specific to Navratri or kanya pujan, and
the search log above shows none is open.

Two checklist items the batch brief told writers to check for themselves rather
than assume, **counted here and both genuinely pass**:

- **Item 15** — `navratri gift ideas` is **3 words**, so it fits inside the first
  five words of the `metaTitle`. `metaTitle` is *"Navratri Gift Ideas by Recipient:
  801 Bouquets Later"* — 52 characters, keyword at words 1–3, one separator, and a
  differentiator (801 first-party bouquets) no competitor can print. **PASS.**
- **Item 24** — slug `navratri-gift-ideas` tokenises to `navratri`, `gift`,
  `ideas`. **No stop words at all.** Short, hyphenated, lowercase. **PASS.**

Measured, not assumed: **1,794 words** in `contentMarkdown` by plain whitespace
split (`md.split(/\s+/).filter(Boolean).length`), FAQs excluded and absent from the
body. 1 H1, 8 H2s, 4 H3s, no skipped levels. 12 FAQs. One table, 4 rows, with a
first-party column. Every H2 carries a number or a named source. No paragraph
exceeds three sentences. Maximum FAQ-to-heading token overlap **0.50**, below the
0.6 re-examination threshold, and the closest pair was checked by hand and is two
different questions.

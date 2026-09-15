# Research brief — `digital-gift-for-wife`

**Batch:** `2026-09-15-virtual-gift-30`, wave 2 · **Market:** India · **Evergreen**
**Primary keyword:** digital gift for wife
**Secondary:** digital gift ideas for wife · best digital gift for wife · romantic gift for wife
**Category:** `digital-gifts-romance` · **Templates:** `/love-gf`, `/rewind`, `/capsule`
**nearestLive:** `/blog/digital-flowers-for-wife`

---

## Phase 0 — data gate

`content/facts.md`, regenerated 2026-09-15. Gate met: far more than three relevant
lines, and the two that open the post are both first-party and both under-used
across the batch.

Opening pair (deliberately **not** the 40.6% / 6.2-hour pair that wave 1 leaned
on, and that the birthday sibling already opens with):

- Occasion-dated pages are 144 of 3,894 pages, 3.7% — the platform is 96.3%
  romantic and everyday (measured 2026-09-09, against the earlier 3,894-page
  snapshot, not the current 4,357).
- The apology dashboard is 1,043 pages, 23.9% of everything created, against the
  "I love you" page's 25.8%.

Those two carry the whole argument: a gift for a wife is usually not a calendar
event.

**Mandatory disclosure.** `facts.md` records which *template* was opened, never
who received it. `/love-gf` counts do not prove the recipient was a girlfriend,
and nothing here is a wife-specific rate. This is stated in body prose under its
own H2 (`## Our data records the template, not who received it`), not only here.

Pricing: the `## Pricing (fill in by hand)` block in `facts.md` is empty, so the
post makes no free/paid claim at all.

---

## Phase 1 — SERP analysis

### What was actually measurable

**Both of my `serp.mjs` runs failed.** `node scripts/serp.mjs "digital gift for
wife"` and `node scripts/serp.mjs --gate "digital gift for wife" "digital flowers
for wife"` each ended in `brave rate-limited (429) after 4 attempts`. Four
source-discovery queries failed the same way. The batch's Brave key was saturated
by ~30 concurrent wave-2 agents. WebSearch is exhausted (200/200) and WebFetch is
blocked, so there was no fallback engine.

So Phase 1 rests on two things that *were* available, and both are labelled:

1. **BRIEF-WAVE2 §5**, measured with `serp.mjs` on 2026-09-15, `locale=us-served`
   and therefore discounted: `sendbestgift` · `lettersbyheart` · a `bestproducts`
   listicle · Reddit · Etsy · then a wall of **BestBuy gift cards**.
2. **India autocomplete**, `content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`
   — real India-geo phrasing, and the better source of truth on how the query is
   typed here.

### What the autocomplete rows show, and why it changed the post

`digital gift for wife` is the head of this sub-cluster: 37 autocomplete hits,
rank 1, with `digital gift ideas for wife` (25) and `best digital gift for wife`
(13) behind it. The suggestion tails include `... free`, `... app`, `... without`,
`... in`, and the full how/what/when/why/which/who set.

The finding that is not in BRIEF-WAVE2 §5: **Indian searchers also collapse
"digital" into "electronic".** These rows all surface `digital gift for wife` as a
completion —

| Seed row | Hits | Surfaces |
|---|---|---|
| `electronic gift for wife` | 3 | `digital gift for wife` |
| `best electronic gift for wife` | 3 | `digital gift for wife` |
| `electronic gadget gift for wife` | 3 | `digital gift for wife` |
| `electronic gift items for wife` | 2 | `digital gift for wife` |
| `mobile gift for wife` | 11 | `digital gift for wife …` |

So the phrase is not a two-way collision with gift cards. It is a **three-way**
one: e-voucher, gadget, personalised page. That is the post's central section and
its angle.

### Competitive read (from §5, us-served, discounted)

| Result | What it optimises for | Our read |
|---|---|---|
| sendbestgift, lettersbyheart | transactional personalised-gift retail | physical product intent |
| bestproducts listicle | affiliate roundup, 20+ items | no first-party data, no India |
| Reddit | genuine question threads | evidence the query is under-served |
| Etsy | marketplace listings | physical + printable |
| BestBuy (wall of results) | **gift cards** | a different product entirely |

No competitor was fetched or paraphrased. `references/competitors.md` domains
(`gifft.me`, `qlovy.com`, `surprises.gift`, `ourgiftverse.com`, `digiflower.net`,
`giftsqr.com`, `blog.messagear.com`) do not appear in this post in any form.

---

## Phase 2 — gap analysis and angle

**Table stakes:** what a digital gift is, a list of ideas, how to send it, a
comparison with a physical gift, an FAQ.

**The gap:** every page in the measured set silently picks one of the three
products and writes as if the other two do not exist. The BestBuy block answers
"digital gift card"; the listicles answer "gadget"; nobody separates them, so the
reader who wanted a made thing lands on a redeem-a-code page and leaves.

**Second gap:** the wife case is written everywhere as a *birthday* or
*anniversary* case. Our own data says the platform is 96.3% not occasion-dated,
and the strongest wife-specific research finding I could open says duration of
marriage is *not* related to marital satisfaction while forgiveness and gratitude
are. Both point the same way: write the apology and the ordinary week, not the
calendar.

**Fan-out sub-queries → H2s:**

| Sub-query | Becomes |
|---|---|
| what is a digital gift for a wife | `## What a digital gift for a wife actually is` |
| is a digital gift the same as a digital gift card | `## Gift card, gadget or page: three products under one phrase` |
| digital gift ideas for wife (not birthday) | `## Five digital gifts for a wife when it is not her birthday` |
| digital gift vs gift card comparison | `## Digital gift versus digital gift card, side by side` |
| does a gift actually help a marriage | `## What the research says a gift to a wife is doing` |
| how reliable are these numbers | `## Our data records the template, not who received it` |
| when not to send one | `## When a link is the wrong gift for your wife` |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that
separates the three unrelated products the phrase returns, and then uses the 3.7%
occasion-dated share to argue the wife case is an everyday/apology/anniversary
case rather than a calendar one.

---

## Phase 3 — sources

Cap check before citing: `SPENT-SOURCES.json` (137 URLs / 111 domains after wave 1)
and every sibling in `blogs/`. **All four domains below were at zero.** Banned
domains (`arxiv.org`, `pmc.ncbi.nlm.nih.gov`, `journals.plos.org`,
`frontiersin.org`, `pewresearch.org`, `gsb.stanford.edu`) were avoided, and so
were the twelve domains sitting at 2.

Discovery was done through the **DOAJ article API** rather than a search engine,
because Brave was returning 429 and OpenAlex and Semantic Scholar both returned
rate-limit errors on their free tiers.

| # | Source | Year | What it supports | Fetched |
|---|---|---|---|---|
| 1 | [Gift Cards and Gift Giving](https://digitalcommons.georgiasouthern.edu/jamt/vol4/iss1/5/), *Journal of Applied Marketing Theory* | 2013 | Gift cards communicate convenience, time and experience, cross-tabulated by relationship duration and intimacy | **Abstract only** — the PDF route returns an HTML challenge |
| 2 | [Gifticon, an Innovative New Service Standing at Crossroads](https://amj.kma.re.kr/journal/vol14/iss2/1), *Asia Marketing Journal* | 2012 | The mobile gift voucher as a product category: launched end of 2006, an SMS bar code exchanged for a real product | Yes, CC BY |
| 3 | [Mindful self-care, attachment styles and relationship maintenance strategies in married people with and without marital conflict](https://qccpc.atu.ac.ir/article_10747.html?lang=en) | 2020 | Married people with marital conflict scored lower on relational maintenance strategies (Stafford, 2011) | Yes, English abstract; full text is Persian |
| 4 | [Forgiveness, gratitude, duration of marriage and marital satisfaction in wives in South Jakarta](http://journal.uinjkt.ac.id/index.php/tazkiya/article/view/8408), *Tazkiya Journal of Psychology* | 2019 | 247 wives + 50 wives filing for divorce: forgiveness and gratitude significant, duration of marriage not | Yes |

**Zero generic context statistics.** No PIB, TRAI, Census or MEA figure appears —
the budget of one was not spent. **Zero Wikipedia links in the body** (Wikipedia
appears only as `sameAs` entity grounding in `structuredData`, which is not a body
link).

**Subject test:** all four pass — two are about gift cards and mobile gift
vouchers specifically, two are about married couples and wives specifically.

**Swap test — one failure, recorded in the audit.** Source 3 is about married
couples in general and could sit unchanged in the batch's
`online-gift-for-husband-anniversary-free` post. It is kept because it is the only
fetchable evidence that a gift to a spouse is a *measured* maintenance behaviour;
closing the item needs a wife-specific relational-maintenance study, and DOAJ
returned none.

**Searches that found nothing usable** (all via the DOAJ article API, since the
SERP tool was 429ing): `bibjson.abstract:"non-occasion"` (0 results),
`bibjson.abstract:"gift" AND bibjson.abstract:"intimacy" AND
bibjson.abstract:"couple"` (0), `bibjson.abstract:"surprise" AND
bibjson.abstract:"gift" AND bibjson.abstract:"recipient"` (0),
`bibjson.abstract:"digital gifting"` (1, Taylor & Francis, blocked),
`bibjson.abstract:"expressing affection" AND bibjson.abstract:"spouse"` (0).
A promising hit — *The Reinvention of the Ancient Tradition "Red Packet" in
Digital Times*, Social Media + Society 2021 — could not be opened: `doi.org` and
`journals.sagepub.com` both returned 403 from this sandbox.

One candidate was **dropped on purpose**: *Personal values and gift giving act*
(Estudios Gerenciales, `icesi.edu.co`, n = 1,085). It is genuinely topical, but its
URL is already spent once in wave 1 and its finding — five personal values predict
gift-giving — would sit unchanged in any gift post in this batch. Taking it would
have failed the swap test a second time for no gain.

---

## Phase 4–5 — draft, links, schema

- 1,795 words in `contentMarkdown`, FAQs excluded (they live in `article.faqs`
  only, per the schema and BRIEF §8).
- Direct answer in sentence one; two first-party numbers inside the first 150
  words; paragraphs held to 2–3 sentences including the opening block.
- One comparison table, 5 rows × 4 columns, with the fourth column entirely
  first-party.
- 10 FAQs, none of which restate a body H2 or H3 — they cover delivery, locking
  the page, timing, children's voices, reuse, weak connections and whether to warn
  her, none of which has a section in the body.

**Internal links (4, all from `TEMPLATE_LINKS`, all placed after the section that
earns them):** `/rewind`, `/capsule`, `/love-gf` inside the five-ideas block, and
`/templates` in the closing CTA. Template descriptions were read from
`app/lib/prompt.ts` before writing about them, so `/rewind` is described as
deriving a year from one date and `/capsule` as a blind two-person prediction that
seals and is scored a year later — not as generic "romantic pages".

**Cross-links (excluded from the 2–4 count by `verify-batch.mjs`, which filters
`/blog*`):** `/blog/digital-gift-for-wife-birthday-online` and
`/blog/digital-flowers-for-wife`, both in the closing section.

**`structuredData`:** one `@id`-matched enrichment block on
`https://subhsandesh.in/blog/digital-gift-for-wife#post` carrying `about`,
`mentions` and a `citation` array mirroring `batchMeta.sources` one-to-one; plus an
`ItemList` of 5 mirroring the H3s in order. Every `sameAs` was checked against the
Wikipedia API with its Wikidata QID paired (Gift Q184303, Gift card Q554910,
Marriage Q8445, Wedding anniversary Q1136848, Personalization Q1000371). No
`Article`, `FAQPage`, `AggregateRating`, `Review` or `HowTo`.

Slug checked against Strapi: `filters[slug][$eq]=digital-gift-for-wife` returns
`total: 0`. Free.

---

## Cannibalisation — BRIEF-WAVE2 §3

**Outcome: differentiate, not escalate.** The gate command 429'd, so the split was
established by reading both pages instead.

| Page | Owns | Evidence |
|---|---|---|
| `/blog/digital-flowers-for-wife` (live) | the **bouquet** format — virtual flowers, `/bouquet-gf`, "digital flowers vs physical bouquet", sample page flow | read directly; its H2s are all flower-led |
| `blogs/digital-gift-for-wife-birthday-online.json` (wave 1) | the **birthday** occasion, framed as a secrecy problem inside a shared home; `/birthday-gf`; category `milestone-birthdays` | read directly |
| **this page** | the **parent, non-birthday, non-flowers** intent — what the phrase means, anniversary, apology, everyday | category `digital-gifts-romance` |

One-sentence split: *the live page is about flowers, the wave-1 page is about her
birthday, and this page is about every other day of the year.* No heading, idea or
source is shared with either — the birthday sibling cites `e-epih.org`,
`jurnal.ugm.ac.id`, `jcss.ut.ac.ir`, `journal.trunojoyo.ac.id` and
`dr.lib.iastate.edu`; this post shares none of them. Both siblings are linked from
the closing section so the three pages reinforce rather than compete.

---

## Phase 6 — audit summary

49 passed, 1 failed. The single failure is the **swap test**, with the reasoning
above recorded verbatim in `auditReport.failed[0].why`. It is left open rather than
papered over: it needs a source that does not appear to exist in the open-access
literature I could reach today.

`passed ∩ failed = ∅` and `|passed| + |failed| = 50`, asserted in the build script
before the file was written.

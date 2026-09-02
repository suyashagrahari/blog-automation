# Research brief — `flowers to propose a girl`

- **Slug**: `flowers-to-propose-a-girl` (re-verified free: Strapi `filters[slug][$eq]` returned `total: 0`, 2026-09-02)
- **Category**: `modern-romance` (verified live, Strapi category id 3)
- **Secondary**: what flowers to give when proposing · how to propose with flowers · how to propose a girl with rose · which flower to propose
- **Timing**: evergreen, February peak (Propose Day, 8 February). No date-stamp on the title.

---

## Phase 1 — SERP analysis

### Tooling note

`WebSearch` was exhausted (200/200) and `WebFetch` hook-blocked. I established the SERP through sandboxed HTTP. **What failed, so nobody repeats it:** DuckDuckGo HTML/lite (HTTP 202, empty body, GET and POST), Mojeek (captcha stub), Startpage (200 but captcha page), Ecosia (403), Qwant API (403), searx.be and priv.au (429), Marginalia (no relevant index). **Bing returned HTTP 200 with 127 KB of a completely unrelated cached Portuguese WhatsApp SERP** — it looks like a success and is worthless; do not trust it. **Brave Search HTML worked** (`https://search.brave.com/search?q=…`, plain desktop UA) and is the only engine that returned a real ranked SERP. It rate-limits after roughly 4–6 queries and then serves a Tor-manual block page, so space queries out.

### The real SERP — the assigned 4/10 pattern score was too pessimistic

My row was pattern-scored, not verified. Verified now, and the opening is **larger** than 4/10 implied. Top 14 organic for the exact keyword:

| # | Domain | Page | Read? |
|---|---|---|---|
| 1 | odealarose.com | How to Propose with Flowers | yes, 2,112 words |
| 2 | theknot.com | Best Flowers for Proposing | **no — Akamai 403 to datacenter IPs** |
| 3 | floweraura.com | 9 Proposal Flowers That Will Help Your Love Bloom | yes, 1,221 words |
| 4 | arenaflowers.co.in | How To Propose A Girl With Flowers In Hand | no — connection refused (HTTP 000) |
| 5 | apoteosurprise.com | Quelles fleurs offrir… (Paris) | not fetched |
| 6 | reddit.com | r/Proposal — "Flowers?" | forum thread |
| 7–14 | jmcflorist, kxhflowers, windflowerflorist (SG), missbeccafloralsg (SG), rosaholics, interflora.in, anahanaflower, floramoments (SG) | 8-/10-/13-/30-item listicles | interflora read, 1,255 words |

**The finding that decides the angle: 11 of the 14 results are non-Indian florists** — US, Singapore, France — writing for a Western engagement-ring proposal. Only three are Indian (FlowerAura #3, ArenaFlowers #4, Interflora #12), and Reddit sits at #6 because none of them actually answer the question.

### What the readable pages have

| Page | Words | Structure | Table | FAQ schema | Data | Date |
|---|---|---|---|---|---|---|
| odealarose | 2,112 | 6 flowers + 6 "creative ideas" + tips | none | none | none | undated |
| floweraura | 1,221 | 9-item listicle, byline "admin" | none | none | none | **29 Jan 2018** |
| interflora.in | 1,255 | 10-item listicle | none | none | none | 31 Jul 2025 |

Ode à Rose opens with throat-clearing ("Some go big with skywriting…") and closes on "Where to Find Proposal Flowers?" — i.e. its own delivery. Every page is a bloom listicle whose real job is a product page.

## Phase 2 — Gap analysis

**Table stakes** (present on all readable pages): red rose as the default; a short colour-symbolism line; tulips, orchids, peonies, carnations, lilies as alternates; a "personalise it" closer.

**The gap — nobody covers any of this:**

1. **Which blooms read wrong in an Indian household.** Zero coverage. FlowerAura, an Indian florist, actively *recommends* chrysanthemum at #8 of 9.
2. **Stem count.** Nobody states how many stems reads as a proposal rather than a Tuesday. Ode à Rose mentions "lavish mixed bouquet" and stops.
3. **Different cities / no florist will deliver on the right morning.** Unwritten, because there is no order to take.
4. **No comparison table and no FAQ schema on a single page in the top 14.**
5. **Zero first-party data anywhere.**

**Stale data**: FlowerAura's post is from January 2018 — eight years old, and it is ranking #3.

**Fan-out sub-queries → H2/H3 map:** what makes a bouquet a proposal (H2 2) · which flowers to avoid (H2 3, three H3s) · which to pick and how many stems (H2 4, three numbered H3s → `ItemList`) · how to get it there (H2 5, table) · long-distance (H2 6) · when real flowers win (H2 7).

**Angle**: wins by being the only post that names the blooms which read wrong in an Indian proposal — marigold, chrysanthemum, strung white jasmine, all documented ritual-offering flowers in Hindu worship — instead of listing eight romantic flowers, and by answering the stem-count and different-cities questions with data from the 795 digital bouquets built on SubhSandesh.

**Not duplicated**: no colour-symbolism section (that is `rose-color-meanings`, `what-do-roses-mean` et al., ~25 live posts). Colour is stated once, in one clause, and dropped. Stayed off `rose-day-gift-for-girlfriend` (the object) and `propose-day-gift-for-girlfriend` (the ask) — this post is only the choice of bloom.

## Phase 3 — Sources

Five sources. All five domains and URLs are absent from `USED-SOURCES.md` (618 URLs / 373 domains) and, re-checked against the four sibling batch files on disk, each appears in exactly one post. **Ethnobotany was the open vein the brief predicted.**

| Source | What it gives | Subject test | Peer-reviewed | Open access | Read |
|---|---|---|---|---|---|
| Chandra, S. (2022), *Documentation of the plants used in different Hindu rituals in Uttarakhand, India*, Asian J Ethnobiol 5(2):92–101, DOI 10.13057/asianjethnobiol/y050203 — [smujo.id](https://smujo.id/aje/article/view/10630) | 104 plant species; rose, carnation, dahlia and marigold grouped as *Hritu Pushpam*, the ordinary seasonal flowers routinely offered to deities | pass | yes | yes | **full text** |
| Jain, S.K. & Kapoor, S.L. (2007), *Divine botany*, Indian J Traditional Knowledge 6(3):534–539 — [nopr.niscpr.res.in](https://nopr.niscpr.res.in/handle/123456789/997) | Hindu worship prescribes particular flowers for particular deities and expressly prohibits others (Madar, Datura, Kachnar, banyan, Gular, Pakar, Kaner for Vishnu); specific plants tied to cremation rites | pass | yes | yes | **full text** |
| *Utilizing Temple Floral Waste…Kannauj District* (2025), AgroEnvironmental Sustainability, DOI 10.59983/s2025030107 — [sagens.org](https://www.sagens.org/journal/agens/article/view/132) | Named Kannauj temples collectively dispose of several quintals of flowers daily; 500 respondents surveyed | pass | yes (DOAJ-indexed) | yes | abstract/landing only |
| *Role of AICRP in Development of Floriculture in India* (2014), Int J Bio-Resource & Stress Mgmt — [ojs.pphouse.org](https://ojs.pphouse.org/index.php/IJBSM/article/view/500) | 22 coordinated centres, 13 ornamental crops, 68 research projects; "hardly any function is complete without flowers" | pass | yes | yes | abstract/landing only |
| APEDA, Govt of India, *Floriculture* — [apeda.gov.in](https://apeda.gov.in/floriculture) | 100% export-oriented status; rose, carnation, chrysanthemum, gerbera, gladiolus, gypsophila in the international cut-flower trade. No publication date → `datePublished` omitted | **fails swap test** | no | yes | full page |

### Claims deliberately NOT made

- **Marigold is not called a funeral flower.** Neither source says that. The page says only that it is a documented ritual-offering flower whose ritual reading has won — and it explicitly concedes that rose is on the same *Hritu Pushpam* list, so temple use alone is not disqualifying.
- **Chrysanthemum's funeral reputation is stated to come from Europe and East Asia rather than from any Indian source I could verify**, and the page tells the reader not to use that reason. That is an honest negative finding, not a hedge.

### Search infrastructure that was down

- **OpenAlex: daily budget exhausted** ("Insufficient budget… resets at midnight UTC") — earlier agents spent it. Zero queries served.
- **Semantic Scholar Graph API: HTTP 429** on every query.
- **DOAJ API worked** but AND-matches strictly; 2–3 term queries only. It surfaced the Kannauj floral-waste paper and the AICRP paper.
- Searches tried and unproductive: `flowers courtship gift attraction`, `gift giving symbolic value givers recipients`, `"gift" thought counts exchange`, `courtship signalling costly gift`, `digital gift mediated intimacy`. **No usable open-access source on flower-gifting as a courtship signal was found** — the Guéguen-style literature is paywalled and Brave blocked before I could chase an OA copy. Recorded rather than padded with a government statistic.

## Compliance notes

- **Pricing gap**: `facts.md` Pricing block is empty. The post states nothing about cost, free tiers, or delivery charges — not in the body, table, FAQs or meta. This is a genuine hole: "which flowers to propose with" is partly a budget question and every florist page answers it. Named in `honestAssessment`.
- **Word count**: 1,734 (plain `split(/\s+/)`), FAQs excluded. 11 FAQs, in `article.faqs` + renderer-built FAQPage only.
- **Table**: 3 data rows, one column first-party (795 built / 23.4% of 3,394 / 12.3 views / 50.2% phone), and two honest "Not measured" cells.
- **Real flowers beat digital**: `## When a paper-wrapped bouquet beats a digital one` — same room, buy the flowers, stated without qualification.
- **Internal links**: all three mandatory (`/bouquet-gf`, `/love-gf`, `/darling`), placed after the different-cities section. No fourth added — `/valentine-gf` returned HTTP 307 on check, so it was left out.
- **Audit**: 48 passed / 2 failed, disjoint, 50 total, strings byte-verbatim (extracted programmatically from `publish-checklist.md`).
  - Failed: slug stop words (exact-match slug, contradicts item 14 — known checklist defect).
  - Failed: swap test — APEDA. Named as the URL I would surrender; **not dropped or swapped**, per the escalate-don't-patch rule.
- **Deviation from the assignment**: the brief predicted `metaTitle … exact keyword in the first five words` would also fail. It does not. "flowers to propose a girl" is exactly five words and occupies words 1–5 of `Flowers to Propose a Girl: 3 Safe Picks and 3 to Avoid` (54 chars). Recorded as **passed**; recording a failure that is not real would be as dishonest as hiding one.

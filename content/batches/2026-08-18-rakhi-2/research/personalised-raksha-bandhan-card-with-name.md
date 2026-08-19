# Research brief — `personalised raksha bandhan card with name`

- Batch: `2026-08-18-rakhi-2`
- Slug: `personalised-raksha-bandhan-card-with-name` (checked against Strapi 2026-08-18: `filters[slug][$eq]` returned `total: 0`, so free)
- Intent cluster: C03 · transactional · asset type "tool" · category "rakhi"
- Volume profile: 800–2500 EST · difficulty medium, 9 weak results in top 10
- Lane assigned by the batch orchestrator: **the card artefact and what goes on it** — physical vs digital, print-and-post lead times vs an instant link, what a name-personalised card should say, and delivery when the sibling lives elsewhere. Deliberately *not* a card-maker walkthrough (that would duplicate the sibling post on `raksha bandhan wishes with name and photo`).

---

## Phase 1 — SERP analysis

Searched `personalised raksha bandhan card with name` and `rakhi card with name and photo online maker` (2026-08-18). There is **no AI Overview and no editorial featured snippet** for this query — the SERP is 100% commercial: print-on-demand retailers, marketplaces and name-on-image generators. Nine of the top ten are transactional product or tool pages, which is why the difficulty is "medium · 9 weak".

All pages below were analysed as competitors. **None are cited or linked in the post.** Canva returned HTTP 403 to every fetch attempt, so it was assessed from its SERP description and its public page title only — recorded here as an incomplete read.

| Page | Type | Words / structure | Where the answer is | Data cited | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|
| funkypigeon.com/cards/rakhi-cards | Retail category (PLP) | ~120 words of copy under a product grid; H1 "Rakhi Cards" + a "Read more" blurb | No answer; a grid. Copy says you can customise "cover and inside of your card with their name, photo and your Rakhi wishes" | None. Delivery info is a link out to a help-centre article, no dates on the page | Product grid, Trustpilot badge, cross-sell links (Rakhi Gifts, Diwali Cards) | Third person, brand voice, no author | Product discovery + "personalised rakhi card" head term |
| zazzle.com/raksha_bandhan_card_with_name_and_message_rakhi-…​ | Marketplace PDP | Almost no prose; spec/option lists | No answer; a configurator | Only its own price and option surcharges, plus "31 people viewed this design" | Paper-type comparison table, quantity tiers, RealViews, option surcharge list | Product copy, no author | One SKU + long-tail "card with name and message" |
| canva.com/create/raksha-bandhan-cards | Tool landing page (403 on fetch — assessed from SERP data only) | Unknown; landing pages of this type usually run 300–600 words | Per its SERP description: personalise with "name, photo, or wishes", download and "share online or print it out" | None visible | Template grid, in-browser editor | Brand voice, second person | "raksha bandhan card maker" tool intent |
| moonpig.com/us/personalised-cards/p/raksha-bandhan-card/sbt014 | Retail PDP | ~150 words | No answer; product detail | Its own prices and card dimensions (132 × 185 mm / 205 × 290 mm), and an eCard option | Size/price selector, Product Details vs Delivery Options tabs, "People also viewed" | Product copy | One SKU; incidentally covers "physical vs eCard" as a purchase option, never as advice |
| mynameart.com/greeting-cards/raksha-bandhan | Name-on-image generator | ~150 words of copy + a very large template/category index | "You can create Raksha Bandhan wishes image just in single click" | None | Huge internal category list, download / email / social share buttons | Thin, keyword-led, no author, 2024 still in the H1 | Volume across hundreds of "name on image" template pages |

Common to all five: a template grid, name/photo/message fields, and a purchase or download button. Common to **none** of them: a publication date, an author, a source, a single third-party number, or an FAQ block answering anything that is not about their own checkout.

## Phase 2 — Gap analysis

**Table stakes (must appear or the post looks incomplete):** what "personalised with a name" means concretely; the two formats (printed and posted vs digital and shared); that a photo can usually be added; that free options exist; the fact that Raksha Bandhan 2026 is 28 August.

**The gap.** Every ranking page sells one delivery route and never states its cost in days. Not one of the five answers the actual question a buyer has ten days out: *will this reach my brother by the 28th, and if not, what do I send instead?* Nobody publishes transit windows, nobody separates domestic from international, nobody says what the card should say beside the name, and nobody names a case where their own format is the wrong one. Moonpig sells both a printed card and a $0.99 eCard on the same page without ever comparing them.

**Stale data.** No page cites any data at all, so there is nothing to supersede — but `mynameart.com` still carries "2024" in its H1 in August 2026, and Canva's page is undated. Publishing dated 2021 postal service standards and 2026 first-party numbers is a straightforward differentiator.

**Unanswered questions raised and dropped:** how long the print-and-post route actually takes; whether a link is private; what to write; whether photo upload changes the price; what to do when the sibling is abroad.

**Fan-out sub-queries → H2/FAQ map**
- *What is a personalised Raksha Bandhan card with a name?* → H2 definition block
- *How late can I post a rakhi card so it arrives by 28 August?* → H2 lead-time maths + FAQ
- *Printed card or digital card?* → H2 comparison table
- *What should I write on it beside the name?* → H2 "What belongs beside the name on the card" + H3 2 and 3
- *Can I use a nickname / a name in Hindi?* → H3 1 + FAQs
- *How do I send one to a brother in the US/UK/Canada?* → H2 lead-time maths + FAQ
- *Is the link private? Can it be forwarded?* → FAQ (44.3% password rate)
- *Does the recipient need an app or an account?* → FAQ
- *Is a card enough on its own?* → H2 objection block (BMJ RCT)
- *When is paper better than a link?* → H2 objection block

**Angle (recorded as `batchMeta.angle`):** wins by being the only page that prices the card decision in days — India Post's own 1–2 / 4–5 / 4–7-day standards against a link that arrives in seconds — and backs the "send it now" half with 2,718 pages created, a 51.9% phone-open rate and a 44.3% password rate no card retailer can publish.

**Distinctness check vs the concurrent sibling (`raksha bandhan wishes with name and photo`, C02):** that post owns wish text + photo, and its published draft frames the choice as "flat name-on-image JPG versus a named shareable page". This post owns the artefact and its delivery: postal service standards, the print-and-post versus link decision, the 6.9-hour edit gap and the paper-as-keepsake objection. Real convergence, declared in the audit: both posts run a five-item format list, an objection H2 and a "what to write next to the name" section — the first two are the shared `page-structure.md` template, and the third is one genuinely shared sub-question, kept apart here by anchoring it to a card that has to be posted (gratitude-letter evidence, the multi-sitting edit pattern) rather than to a status or a JPG. This post's H2 was retitled to "What belongs beside the name on the card" once the sibling's heading was visible.

## Phase 3 — Sources

Research lane assigned: handwritten/physical vs digital greeting reception, card-giving as a relational ritual, postal delivery timelines as a documented constraint. Searched OpenAlex (`title.search:greeting cards`, `greeting card ritual kinship`, `handwritten versus typed message perceived effort`, `electronic greeting card sincerity perceived`, `personalization name effect attention own name`), plus targeted web searches. Every source below was fetched and the number verified in the fetched text.

| Source | Verified claim | Published | Subject test | Notes |
|---|---|---|---|---|
| Department of Posts, *Citizens' Charter* (PDF) | Speed Post: local 1–2, metro–metro 1–3, state capital to state capital 1–4, same state 1–4, rest of country 4–5 days. First-class mail: local 2, metro–metro 2–4, same state 2–6, capitals 3–5, rest of country 5–6 days. EMS end-to-end: UK 2–6, USA 4–7, UAE 4–8, Australia 4–8, Canada 5–9, Singapore 3–6 days, customs detention excluded, booked in Delhi/Mumbai/Kolkata/Chennai/Kochi only | 2021 | Pass — the post is about whether a card arrives in time | Official, not a competitor. Verified by extracting the PDF text (rows 1.1–1.4) |
| Coleman E et al., *The BMJ* — "Bah humbug! …Christmas cards… trial retention" | 1,469 participants analysed across 8 host trials; retention 85.3% (639/749) with a card vs 85.4% (615/720) without; OR 0.96 (0.71–1.29), p=0.77; £0.76 and ~140 g CO₂e per card | 2021-12-14 | Pass — the effect of sending a physical card | Peer-reviewed, CC BY, full text read |
| Kumar A & Epley N, *Psychological Science* 29(9) 1423–1435 — "Undervaluing Gratitude" | N=107 MBA students wrote gratitude letters; of 80 responding recipients, expressers underestimated recipients' surprise (d=0.68) and positive mood (d=0.74) and overestimated awkwardness (d=0.32) | 2018 | Pass — how written appreciation is actually received | Peer-reviewed; full text read from the authors' freely posted PDF |
| Sun J et al., *CHI 2022* — "Pretty Princess vs. Successful Leader" | 18,559 stock greeting-card messages collected across 6 scenarios from 8 card websites (Hallmark and American Greetings among them); gender stereotyping found via topic modelling, odds ratio and WEAT | 2022-04-29 | Pass — what pre-printed card sentiment actually contains | Peer-reviewed; full text read from the author's university-hosted PDF |
| Kendriya Vidyalaya *List of Holidays for 2026* (PDF, issued 22-12-2025) | "Raksha Bandhan (RH) — 28/08/2026 — Friday" | 2025-12-22 | Date fact-check, **not** counted as a source | Deliberately kept out of `batchMeta.sources` and out of `citation`, per the checklist's date-reference exception |

Swap test: all four fail to transplant. Postal transit windows, a Christmas-card RCT, a gratitude-letter experiment and a greeting-card message corpus are about the card artefact; none of them would make sense in the batch's shayari, Marathi, Instagram-caption or WhatsApp posts.

Only 4 sources, the floor of the 4–6 range. Searches that produced nothing citable: `electronic greeting card sincerity perceived` (no relevant OA work), `handwritten versus typed message perceived effort` (returned only ML/OCR papers), `gift giving ritual India kinship siblings` (nothing on cards). Emily West's greeting-card papers (2008, 2010) are the closest genuine fit and are all paywalled — the bepress open copies were retired in April 2025 and now 404. "It Is All in the Name" (Maslowska et al., *Journal of Interactive Advertising*, 2016) is paywalled with metadata-only OA records, and the 2019 name-and-photo eye-tracking paper 403s on ScienceDirect, so neither was used rather than cited unread.

Banned/over-budget domains avoided throughout: drikpanchang.com, en.wikipedia.org (as a body link or source), europepmc.org, frontiersin.org, arxiv.org (the CHI paper was taken from the CMU copy, not the arXiv one), aclanthology.org, blog.whatsapp.com, developers.facebook.com. Generic context statistics (PIB/TRAI/Census/MEA): zero used.

Sibling-collision check: `content/batches/2026-08-18-rakhi-2/blogs/` was empty when drafting began. By the time the JSON was emitted, three sibling files existed — `how-to-tie-rakhi-virtually-on-video-call`, `raksha-bandhan-whatsapp-status-with-name`, `raksha-bandhan-wishes-with-name-and-photo` — and none of them uses any of this post's four URLs or domains (their domains: cyberpsychology.eu, journal.fi, doi.org, pmc.ncbi.nlm.nih.gov, calendar.gatech.edu, journals.sagepub.com, thoughtcrumbs.com, asc.upenn.edu, ideas.repec.org, inria.hal.science, trialsjournal.biomedcentral.com). The remaining six posts were still being written, so the batch-wide count is incomplete — recorded as the single audit failure.

## Phase 5 — targeting

- `categorySlug`: `family-and-continuity` — verified live against the Strapi categories endpoint on 2026-08-18. Chosen over `festive-beats` per the batch brief, because the post is about a sibling relationship artefact rather than the festival itself.
- `templateUrls`: `https://subhsandesh.in/happy-rakshabandhan-to-brother` and `https://subhsandesh.in/templates` — both present in `TEMPLATE_LINKS` in `app/lib/prompt.ts`.
- Internal links: 3 (the rakhi template after the lead-time section, the template gallery after the "what to write" section).
- `sameAs` verified via the Wikipedia API with Wikidata QIDs paired: Raksha Bandhan (Q10266), Greeting card (Q915196), India Post (Q3519720).

## First-party facts used

1. `2,718 personalised pages created since 2026-03-12, across 13 page types — measured 2026-08-18`
2. `51.9% of shared pages are opened on a phone (16,952 of 32,683 views) — measured 2026-08-18`
3. `44.3% of creators password-protect their page before sharing it (1,205 of 2,718) — measured 2026-08-18`
4. `99.4% of started pages are actually published and shared (2,701 of 2,718) — measured 2026-08-18`
5. `Median gap between a page's first save and its last edit: 6.9 hours — sampled on "I love you" page (/love-gf), n=913 — measured 2026-08-18`
6. `Average views per created page: 12.0 — measured 2026-08-18`

Limitation, as the batch brief requires: none of these are rakhi-specific. `facts.md` carries no rakhi page type, so every number here describes SubhSandesh's platform-wide behaviour for making and sharing a personalised page, and the 6.9-hour edit gap is sampled from a single romantic template (n=913), not from rakhi cards. The post states them as platform figures and never implies a rakhi-specific measurement.

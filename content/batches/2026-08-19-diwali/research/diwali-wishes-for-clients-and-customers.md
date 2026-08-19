# Research brief — `diwali wishes for clients and customers`

- **Slug:** `diwali-wishes-for-clients-and-customers` (verified free: `filters[slug][$eq]` returned `total: 0` on 2026-08-19)
- **Intent:** transactional / B2B. The searcher is a marketer, founder or account manager who has been told to "send something to clients for Diwali" and has to decide what.
- **Research lane held:** gratitude and relationship marketing in commercial relationships; B2B relationship quality. Deliberately stayed out of gift-giving/greeting psychology (giver–recipient asymmetry) and homesickness/belonging.
- **Category:** `festive-beats`. **Templates:** `https://subhsandesh.in/templates`, `https://subhsandesh.in/holi`.

## Siblings present when sources were picked

At first check (before drafting) `content/batches/2026-08-19-diwali/blogs/` was **empty**. By the time the file was validated, two siblings existed and were re-checked:

- `diwali-wishes-with-name-and-photo.json` — durham.ac.uk, nus.edu.sg, gsb.stanford.edu, sfu.ca, marketing.wharton.upenn.edu
- `first-diwali-away-from-family.json` — ojed.org (×2), mjphm.org, ijip.in, journals.openedition.org

**No URL and no domain overlap** with this post's five sources. No banned domain used.

## Phase 1 — what actually ranks

`WebSearch` for the exact keyword, top results fetched in full. There was no AI Overview in the returned result set; the SERP is dominated by employee-engagement/reward platforms and wishes farms.

| # | Page | Words / shape | Where the answer sits | Data cited | Format | Tone | Really optimising for |
|---|---|---|---|---|---|---|---|
| 1 | blog.xoxoday.com/plum/diwali-wishes/ | ~2,500; 20 B2B client wishes + wishes for customers, employees, colleagues | No answer — festival prose intro, then numbered wishes | None. Zero external citations | Long numbered lists, in-body product CTAs to a Diwali gifting campaign | Third person, warm, promotional | Selling a corporate gifting/rewards platform |
| 2 | blog.xoxoday.com/plum/diwali-messages-to-customer/ | ~2,000; 36 messages split by sending team (sales, marketing, support) | No answer; "as the autumn breeze ushers in…" opener | None | Numbered lists per team, gift-guide cross-links | Third person, florid | Same platform; internal links to "Diwali Gifts for Customers" |
| 3 | smscountry.com/blog/diwali-wish-message/ | ~3,000+; 101+ SMS templates, incl. explicit "Diwali offers and discounts" and sector packs (insurance, travel, finance) | No answer; templates first | None; 10 generic "best practice" tips (know your audience, be time-conscious) | Huge list, tables of internal product links | Second person, salesy | Selling bulk SMS / WhatsApp API |
| 4 | jobera.com/corporate-diwali-wishes/ | ~900; 30+ wishes for clients, colleagues, employees | No answer; rhetorical-question intro | None; last updated 27 Sep 2024 | Bullet lists + 5 generic tips | Third person, thin | Job-board SEO traffic |
| 5 | thezappybox.com/blogs/news/50-heartwarming-…-business | ~2,000 under a full e-commerce nav; 50+ business wishes | No answer; store chrome first | None | Lists, product collection links | Marketing copy | Selling gift hampers |

## Phase 2 — gap analysis

**Table stakes (all five have them):** actual wordings a reader can copy; a client/customer split; some "keep it professional yet warm" guidance; a nod to sending "a few days before".

**The gap — none of the five covers any of this:**

1. That appending an offer changes the *category* of the message, not just its tone. Result #3 does the opposite: it files "Get up to 50% off" under Diwali wishes.
2. Whether to send at all. No page entertains "send nothing".
3. The segmentation problem — a Diwali blast reaching customers who do not observe Diwali. Two pages say "know your audience" and neither says what to do about religion, which no CRM stores.
4. Corporate-gifting compliance. Nobody mentions that a counterparty may be barred from accepting a hamper.
5. Channel-by-channel consent and deliverability. Result #3 sells the channel and never discusses opt-in.
6. Anything date-specific for 2026, let alone that Diwali falls on a **Sunday**.

**Stale data:** there is no data to supersede — all five cite nothing. That is itself the opening: any verified primary source outranks five uncited listicles for citation purposes.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what is a corporate Diwali greeting / is it marketing | What separates a client Diwali greeting from a Diwali campaign |
| what do I actually write | Four wordings that work when the sender is a company |
| whole list or individual notes | Should this go to your whole customer list, or to one account owner? |
| can I send a Diwali gift to a client | Gift or greeting: what India's gift rules actually restrict |
| email or WhatsApp or card | Email, WhatsApp Business, a link, or a printed card |
| when to send Diwali wishes 2026 | Timing a client greeting when Diwali 2026 falls on a Sunday |
| should I send at all | When a client Diwali greeting is the wrong move |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that treats a client Diwali greeting as commercial communication rather than a wish list — pricing the offer-appending mistake against TRAI's own definition, using Rule 13's ₹1,500/₹500 ceilings to show why a greeting travels where a hamper cannot, and setting the send against Diwali 2026 falling on Sunday 8 November.

## Phase 3 — sources (all five fetched and read in full)

| Source | Type | Verified content | Subject test | Swap test |
|---|---|---|---|---|
| [TCCCPR, 2018](https://www.trai.gov.in/sites/default/files/2024-09/RegulationUcc19072018.pdf) (TRAI, 19 Jul 2018) | Primary regulation | Definitions read verbatim from the gazette text: "Commercial Communication" turns on whether the **primary purpose is to inform about or advertise or solicit business**; "Promotional messages" = commercial communication with **no explicit consent**; customers may set **preference of time band and day type** | Pass — it is about commercial messages to customers | Pass — could not sit in a sibling post about photos or homesickness |
| [CCS (Conduct) Rules, 1964, Rule 13](https://dopt.gov.in/sites/default/files/CCS_Conduct_Rules_1964_Updated_27Feb15_0.pdf) (DoPT, updated 27 Feb 2015) | Primary rule | Rule 13(1) blanket bar; "gift" defined to exclude only a near relative or personal friend **having no official dealings**; 13(2) report thresholds ₹25,000 / ₹15,000 / ₹7,500 on occasions incl. religious functions; 13(3) sanction above ₹1,500 (Gp A/B) and ₹500 (Gp C/D) | Pass — corporate gifting to a counterparty | Pass |
| [Interpersonal Relationship Marketing: Reciprocity in Buyer-Seller Dyad with Customer Gratitude as Mediator](http://sajms.iurc.edu.pk//issues/2020b/SAJMS3.pdf) — *South Asian Journal of Management Sciences* 14(2), 2020 | Peer-reviewed, open access | 100 buyer–seller dyads (food 23, apparel 21, financial 24, medical 15, travel 17), PLS-SEM. Investments → gratitude **β = 0.572**; gratitude → reciprocity **β = 0.433**; investments → reciprocity direct **β = 0.084, n.s.** (H4 rejected). R² 51.60% gratitude, 59.0% reciprocity | Pass — measured effect of seller investment on customer gratitude | Pass |
| [Relationship Quality as Predictor of B2B Customer Loyalty](http://www.iiisci.org/Journal/CV$/sci/pdfs/HSA292TS.pdf) — *Journal of Systemics, Cybernetics and Informatics* 11(1), 2013 | Peer-reviewed, open access | Egyptian shipping/freight B2B; 500 distributed, **310 usable**; relationship quality (trust + commitment + satisfaction) on loyalty, **R² = 0.56, F = 101.9, p < 0.001**, all three dimensions significant | Pass — B2B relationship quality | Pass |
| [Promoting Business with Corporate Gifts](http://bura.brunel.ac.uk/bitstream/2438/1284/3/Corporate%2bgifts-1.pdf) — Ying Fan, *Corporate Communications: An International Journal* 11(1):43–55, 2006 (author post-print) | Peer-reviewed post-print, open | UK airline marketers: 21 sent, **14 usable, 67% response**; gift **value** is the single factor separating gift from bribe; guardrails "token value" / "less than £30"; gifting concentrates at Christmas/New Year, one respondent "feel compelled to enter the gift arena" when competitors do | Pass — corporate gifts to clients | Pass |

**Notes on source selection**

- **Zero generic context statistics used.** TRAI appears as *regulation text* (definitions of commercial communication and consent), not as a subscriber count, so the batch's one-context-statistic budget is untouched. Recorded here explicitly because the domain name looks like the banned pattern.
- **Nothing cited from an abstract.** All five full texts were downloaded and read.
- **Sources rejected because they 403'd rather than because they were wrong** — reported rather than cited from a snippet: Palmatier et al. 2009 (SAGE, paywalled); the Manchester accepted manuscript of *Gratitude, Indebtedness, and Reciprocity*; the Baylor Keller Center summary of Mangus et al. 2022 on gratitude vs indebtedness in B2B; the QUT thesis PDF *The role of customer gratitude in strengthening seller-buyer relationships* (record page readable, PDF blocked); the Stirling post-print of Bridger & Wood, *Gratitude mediates consumer responses to marketing communications*; SSRN's *Differentiating Indebtedness and Gratitude in the Commercial Exchange Context*; the Cogent B2B relationship-quality paper on Taylor & Francis. The indebtedness literature would have strengthened the "a gift creates obligation" argument and none of it was openly readable.
- Search terms used: `customer gratitude relationship marketing open access`, `gratitude indebtedness B2B relationship quality`, `thank you message customer reciprocity field experiment`, `business gift giving client relationship obligation`, plus DOAJ API queries on `bibjson.abstract:"customer gratitude"` and `bibjson.abstract:"B2B" AND "relationship quality"`, and OpenAlex `is_oa:true` sweeps with fetchability testing on every candidate.

## Fact-checks (not citations)

- Diwali (Lakshmi Puja) **Sunday 8 November 2026**; five-day festival **6–10 November 2026**; therefore ordinary working days inside it are Friday 6 and Monday–Tuesday 9–10 November. Taken from the batch brief as a fact-check. **No muhurat time is stated in the post**, so no panchang source is cited.
- Wikidata QIDs verified against the Wikipedia API (`action=query&prop=pageprops&ppprop=wikibase_item`): Diwali **Q10244**, Business-to-business **Q325421**, Telecom Regulatory Authority of India **Q7695822**, Gratitude **Q2728730**, Relationship marketing **Q574424**. `Corporate gift` returned `missing` and was dropped.

## First-party data used

- `2,739 personalised pages created since 2026-03-12, across 13 page types — measured 2026-08-19` (first 150 words; also carries the "Diwali is not one of the 13" admission)
- `51.8% of shared pages are opened on a phone (17,101 of 33,007 views) — measured 2026-08-19` (first 150 words)
- `44.3% of creators password-protect their page before sharing it (1,213 of 2,739) — measured 2026-08-19`
- `Median gap between a page's first save and its last edit: 6.9 hours — sampled on "I love you" page (/love-gf), n=914 — measured 2026-08-19`
- `33,007 recorded views of shared pages — measured 2026-08-19`

**Stated limits:** there is no Diwali-specific first-party fact (Diwali is not among the 13 page types) and the post says so. The platform-wide figures pass the subject test for "making and sharing a greeting" but would fit any sibling in this batch, so they support the argument without being unique to it.

## Product honesty

`TEMPLATE_LINKS` has no Diwali template. The post states this in the final section and links the [gallery](https://subhsandesh.in/templates), the [Holi page](https://subhsandesh.in/holi) and the [Eid Mubarak page](https://subhsandesh.in/eid-mubarak) as the festival designs that do exist — and then recommends a plain email from the account owner over a page built on the wrong festival's design.

## Audit outcome

49 passed, 1 failed, disjoint, summing to 50. The single failure is `Slug short, hyphenated, lowercase, no stop words` — the slug retains "for" and "and" because the exact-match slug was pre-verified in Strapi and fixed by the brief. Structural, not fixable inside this post.

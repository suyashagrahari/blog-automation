# Research brief — how to surprise husband on anniversary

Batch `2026-09-15-virtual-gift-30`, wave 4, row 4 of `WAVE4-PLAN.json`.
Slug `how-to-surprise-husband-on-anniversary`. Category `digital-gifts-romance`.
Templates `/capsule`, `/train-ticket`, `/recharge`.

---

## Phase 1 — SERP analysis

**Engine caveat, recorded before anything else:** the SERP in `SERPS-WAVE4.md` was
measured on **Brave, US-served**. Brave accepts no region parameter, and DuckDuckGo
(`kl=in-en`, wave 3's India route) rate-limited the sandbox with an HTTP 202 anomaly
page. These positions are reliable evidence of **page type** and unreliable evidence
of **Indian ranking order**. No India SERP was measured for this keyword.

Blog-shaped results: **7 of 10**. One ecommerce collection (surprisemachi), one Amazon
search page, one bridal-retail roundup. No tool pages at all.

| # | Result | Type | What it optimises for |
|---|---|---|---|
| 1 | Quora — "I baked him a cake and gifted him a watch and a perfume last year. What should I do now?" | Q&A thread | The *repeat* problem, stated outright by the asker |
| 2 | Reddit r/HappyMarriages — "very happy, very in need of anniversary ideas" | Discussion | Ideas, from people in the situation |
| 3 | Reddit r/Marriage — "mostly asking husbands here" | Discussion | Asking the recipient directly — the caring asymmetry |
| 4 | Reddit r/Marriage — "please help me with what to get my husband for…" | Discussion | Gift selection |
| 5 | Reddit r/relationship_advice — a 10-year-anniversary infidelity update | Discussion | Noise; matches on the words, not the intent |
| 6 | surprisemachi.com collection | Ecommerce | Product listing |
| 7 | howdoesshe.com — 23 never-fail anniversary gift ideas | Listicle, ~1,780 words | Four category H2s (Experience / Adventurous / Thoughtful / Unique). No data, no dates, no sources, US framing |
| 8 | Amazon search | Ecommerce | Product listing |
| 9 | greetingsisland.com — 20 romantic anniversary ideas | Listicle, ~4,140 words | 20 numbered H2s, memory lane / scavenger hunt / spa / camping. No data, no sources, US framing, card-product CTAs |
| 10 | theknot.com — anniversary gifts for husband | Retail roundup (403 to the sandbox) | Product roundup |

**The finding is the top five.** Every one of the top five results is a discussion
thread — one Quora, four Reddit — and not one is a gift list. People are asking other
people because the listicles do not settle this question. Results 7 and 9 were fetched
in full; 10 and 1 returned 403.

## Phase 2 — Gap analysis

**Table stakes** (present in 7 and 9, so the post must not look incomplete against
them): concrete ideas with enough specificity to act on; an experience-versus-object
distinction; some acknowledgement of budget and time.

**The gap.** No page on this SERP addresses the one structural fact that makes an
anniversary different from a birthday: **it is a shared date, so he knows it is
coming.** The occasion cannot be the surprise; only the form can. Nor does any page
address the corollary the Quora asker states explicitly — an anniversary **recurs with
the same two people**, so every year permanently spends a gift category and next year
has to clear this year. Both listicles answer as though this were the first year.

**Also unaddressed anywhere:** what to do when he says "let's not do anything this
year"; the asymmetry when one partner cares more about marking it; and the case where
a quiet evening genuinely beats a production.

**Fan-out sub-queries** → became H2s and FAQs: what counts as a surprise when the date
is shared; what to do when the obvious ideas are used up; ranking ideas by repeatability;
how forms compare on lead time and audience; how to respond to "let's not do anything";
how to build a surprise in a joint household; when not to bother.

**Angle:** wins by being the only post that treats an anniversary surprise as a
*repetition* problem rather than an idea problem, ranking six forms by whether year two
is stronger or weaker than year one, against first-party numbers that argue against its
own product's repeat story.

## Anti-cannibalisation — siblings read before drafting

`blogs/` was grepped for the subject (anniversary, husband), not just the keyword.
Four read in full:

| Sibling | Its lane | How this row differs |
|---|---|---|
| `online-gift-for-husband-anniversary-free` | What an *online anniversary gift* is, and what the word "free" can honestly mean when the dataset has no price. Five things to put on a page. Leads `/capsule`. | Nearest neighbour. It is a **product** question ("what do I make, and is it free"); this is a **decision** question ("what do I do, given the date is known and the categories are spent"). It recommends the capsule for this year; this post is the only one saying the capsule's payoff is *next* year and that year one buys an option, not a surprise. Cross-linked from the body. |
| `anniversary-website-for-wife` | An anniversary page as a jointly-known ritual meant to repeat; what a long marriage supplies that a first year does not. Recipient is a wife. | Different recipient and different object. Its repeat argument is about the *page*; this post's is about the *gift category* burning out, which is a constraint on every form including doing nothing. |
| `romantic-gift-for-husband-birthday` | A husband's birthday as a **concealment** problem — shared house, shared chargers. | The opposite constraint: a birthday can still be sprung, so its whole problem is hiding. An anniversary cannot be, so hiding is irrelevant and form is everything. Zero overlap in argument. |
| `digital-gift-for-husband` | Separating voucher / gadget / page for the `digital gift for husband` query, from autocomplete evidence. | A disambiguation post about product categories. No anniversary content and no repetition argument. |

Also checked for topical collision: `anniversary-wish-page-online`,
`virtual-anniversary-gift-for-boyfriend`, `gift-ideas-for-girlfriend-1-year-anniversary`.
None targets a married husband on a wedding anniversary, and none of their primaries
appear in this post's secondaries.

**Differentiation sentence:** this is the only post in the corner that ranks anniversary
gestures by whether their *second* year is better or worse than their first, because it
is the only one that treats the recurring, jointly-known nature of the date as the
problem to solve rather than as background.

**Abort considered and rejected.** The assigned thesis as briefed — "a shared date, so
only the form can surprise" — is genuinely already stated by both nearest siblings, and
writing the post around it would have produced a twin. The row survives on the
repetition axis instead, which neither sibling touches and which the #1 SERP result
asks for by name.

## Phase 3 — Sources

Route used: **Crossref → Unpaywall → OA landing page**, per `BRIEF-WAVE4.md` §2.
OpenAlex was unreachable from the sandbox (`fetch failed` on every query). DOAJ
responded and was queried by abstract field. Semantic Scholar and CORE not attempted.
**All four sources were read as abstract and metadata only — PDFs do not parse here.**

| Source | Domain | Why it passes the subject test | Swap test |
|---|---|---|---|
| Skavronskaya, Moyle & Scott (2020), *Novelty, unexpectedness and surprise: a conceptual clarification*, Tourism Recreation Research | `research-repository.griffith.edu.au` (fresh) | Defines surprise as the mismatch between expectation and experience — the exact mechanism this post's thesis rests on | Would be filler in a gift-category post; here it is the load-bearing definition |
| Zoppolat, Visserman & Righetti (2020), *A nice surprise: Sacrifice expectations and partner appreciation*, JSPR | `research.vu.nl` (third and final slot) | n=253 daily-diary: perceived sacrifice raised appreciation **only** where expectations were low | Specific to expectation-dampened gratitude; useless in a post about a date nobody anticipates |
| Liu, Kozinets, Patterson & Zhao (2024), *Gift Giving in Enduring Dyadic Relationships*, Journal of Consumer Research | `eprints.lancs.ac.uk` (fresh) | 54 interviews, diachronic view of gift exchange over decades; unwanted gifts can still bond | Only fits a post about a *recurring* exchange; meaningless for a one-off occasion |
| Rohmah, Noviekayati & Saragih (2020), IJMMU — long-distance marriage satisfaction | `ijmmu.com` (fresh) | Marital satisfaction and communication under separation, supporting the `/train-ticket` section | Only fits where the marriage is apart |

Generic context statistics used: **zero**. Wikipedia body links: **zero** (Wikipedia
appears only as verified `sameAs` targets in `structuredData`).

**Negative finding, recorded honestly.** No open-access research on **Indian**
anniversary practice was found. Terms tried: `anniversary ritual marital satisfaction`,
`relationship milestone celebration ritual`, `couple rituals relationship quality`,
`celebration of wedding anniversary couples`, `marital satisfaction India`,
`married couples India`, `Indian couples`, `joint family couple privacy`,
`conjugal privacy`, `leisure marriage India`, `temporal landmark fresh start`,
`capitalization shared positive events`. The Fresh Start Effect (Dai, Milkman & Riis
2014) and *Rituals Enhance Consumption* (Vohs et al. 2013) were both located and both
rejected — the first is not open access, the second is OA only at `dash.harvard.edu`,
which is at the domain cap. The India specificity in this post (joint households,
midnight wishing, relatives seeing the post) is therefore **first-hand observation,
stated as such, not dressed up as sourced**.

## Phase 5 — Links and targeting

Internal: `/capsule` (leads section 1 — it is the anniversary-shaped object and the only
form whose second run beats its first), `/recharge` (a prepaid plan implying renewal),
`/train-ticket` (PNR, clearing waitlist, running status — for the anniversary spent
apart), `/templates` (soft CTA at the end). All four verbatim from `TEMPLATE_LINKS`.
Descriptions taken from the `what` strings in `app/lib/prompt.ts`, not inferred from
slugs; no `/challan`-family joke template is described earnestly anywhere.

Fifth internal link: a cross-link to `/blog/online-gift-for-husband-anniversary-free`,
required by `BRIEF-WAVE4.md` §4. Recorded as an audit failure because `TEMPLATE_LINKS`
contains templates, not blog posts.

Slug checked against Strapi — `filters[slug][$eq]=how-to-surprise-husband-on-anniversary`
returns `total: 0`. Category `digital-gifts-romance` confirmed live.

Entities verified via the Wikipedia API with Wikidata QIDs paired: Wedding anniversary
(Q1136848), Surprise (Q333173), Gift (Q184303), Weddings in India (Q16196994).

## Pricing

`content/facts.md` `## Pricing (fill in by hand)` is empty. No price is stated, implied
or inferred anywhere in the post. The cost FAQ says plainly that the figure cannot be
stated from the first-party dataset.

## Template-versus-recipient disclosure

The database records **which template was opened, not who received it**. This is stated
in the body prose, not only in the audit, and repeated in an FAQ, because the post cites
`/love-gf` and `/apology-dashboard` shares while writing about a husband.

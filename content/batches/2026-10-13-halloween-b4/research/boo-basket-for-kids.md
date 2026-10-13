# Research brief — boo basket for kids (row 162)

- Slug: `boo-basket-for-kids` · absorbs "boo basket ideas for kids" · batch `2026-10-13-halloween-b4`
- Searches used: **1 WebSearch (US index)** — query `boo basket for kids`. Firecrawl not used (disconnected per BRIEF §4). No browser tools.
- Slug free in Strapi (checked 2026-10-13, 0 results). `festive-beats` confirmed in live category list.
- **Brief/plan discrepancy:** `PLAN.json` row 162 has `theme: "couple"`; the task prompt says theme kids. The post follows the keyword (kids).

## Phase 0 — first-party data
No Halloween data in facts.md (BRIEF §3). Platform-wide lines used, labelled platform-wide in the body:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24
- Average views per created page: 11.1 — measured 2026-09-24

The template spec (Kids tone, family question, premium voice note, No button absent for kids) is product fact and is not counted toward the 3.

## Phase 1 — SERP (WebSearch, US index)
Returned 9: alamocitymoms.com x2, maisonette.com, purewow.com, foxnews.com/deals, theeverymom.com, nbclosangeles.com x2, fridaywereinlove.com. Weak: 5 of 9 (two local mom-blog URLs, theeverymom, fridaywereinlove, a retailer product grid). PureWow and Fox News Deals are thin affiliate lists on strong domains. Gate 4 passes.

| # | Page | Words | Structure | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | alamocitymoms.com/tips-tricks/boo-baskets (Oct 2025) | ~1,170 | H1 + 3 H3s: Toddlers / Elementary / Tweens & Teens | No, opens on "what's a boo basket" anecdote | None; no prices | Lists of items | Local parent-blog traffic |
| 2 | maisonette.com/le_scoop/boo-basket-ideas | ~550 | Product grid by brand (bags, accessories, pyjamas) | No | Product prices $24–50 | Product cards | Retail conversions |
| 3 | purewow.com best-gifts-to-add-to-a-boo-basket | ~1,600 | 12 numbered products, mixed kids/tween/adult | Brief intro | Product prices $7–35 | Listicle, affiliate | Affiliate clicks |
| 4 | foxnews.com/deals/halloween-boo-basket (18 Sep 2024) | ~1,070 | 11 products with prices as H2s | One para | Prices $8–110 | Affiliate list | Affiliate clicks; mostly adult items |
| 5 | theeverymom.com/boo-baskets | n/a | **403 — judged from snippet only** | — | — | — | — |

Snippet-level note: one ranking page (from the AI summary) mentions avoiding hard candy for toddlers; no page has a per-item choking flag.

## Phase 2 — gap
- Table stakes: age-split item ideas; pyjamas/books/crayons; keep it cheap.
- **Gap:** no page gives complete builds per age band with item-level choking flags, cost and assembly time; none covers a sibling pair, a no-food basket, the 16 CFR 1501 scope and its clothing/accessories exemption, or etiquette for booing a neighbour's children.
- Stale: Fox News Deals is Sept 2024 pricing.
- Fan-out → H2s: what is it; builds by age; cost/choking compared; small-parts rule; booing neighbours' kids; does the child actually like it; note option + when to skip.
- **Angle:** wins by being the only post that builds complete kids' boo baskets per age band with item-level choking flags, labelled cost and time, explains what 16 CFR 1501 exempts, and grounds the note in the 48.3% phone-open share.

## Phase 3 — sources (all fetched)
| Source | What it says (verified) | Read | Subject test | Swap test |
|---|---|---|---|---|
| Meristo, Szepanski & Strid, *Infancy* (Wiley), 2025-11-01, CC BY — https://europepmc.org/article/PMC/PMC12662943 | 54 toddlers aged 18 months, nonverbal fairness task; preschool attendance → greater sensitivity to unfair outcomes; having siblings did not appear to influence expectations | Full text (Europe PMC XML) | Yes: children and fair shares (sibling basket) | Fails swap: fits a kids' gift/sibling post only |
| Brady, Shneidman, Cano & Davis, *Affective Science* (Springer), 2023-12-01, CC BY — https://europepmc.org/article/PMC/PMC10751280 | 42 Yucatec Maya children aged 6 and 10; disappointing-gift task (broken lowest-ranked toy); children followed display rules to hide negative emotion, older children more so | Full text | Yes: children's responses to gifts | Fails swap |
| eCFR 16 CFR part 1501 — https://www.ecfr.gov/current/title-16/chapter-II/subchapter-C/part-1501 | 1501.2 scope: toys/articles intended for under-3s, not toys solely for 3+; 1501.3 exemptions incl. books/paper, crayons, children's clothing and accessories such as buttons, barrettes, modelling clay, paints | Full text (eCFR renderer API) | Yes: small parts in kids' gifts | Regulation (exempt class) |
| Nemours KidsHealth, "Choosing Safe Toys" (medically reviewed, no date) — https://kidshealth.org/en/parents/safe-toys.html | Age levels determined by safety, not intelligence; crayons/paints should say ASTM D-4236; avoid older hand-me-down toys | Full page | Yes: child-safe gift choice (not used by b2/b3 named siblings) | Kids-gift specific |

- Not used: b2's PMC12780796, ecfr 1500.19, foodallergy.org, nrf.com (not needed). No banned publishers (Frontiers, SAGE, T&F, Elsevier), no megajournals. No generic statistic. Wikipedia 0 in body; sameAs verified via API (Gift basket Q362622, Halloween Q251868, Choking Q19275831, US CPSC Q2995379).
- capcheck run 2026-10-13: no banned URLs, no domain at cap; kidshealth.org and europepmc PMC IDs unused in b4.
- eCFR Figure 1 cylinder dimensions are an image; not quoted.

## Sibling dedupe
Checked b1 `boo-basket-ideas` (kids line: pyjamas, glow book, stickers; carving kit; bubbles/chalk/plush), b2 `halloween-party-favors` (all 32 favours), b3 kids/toddler/snacks H2s, and b4 boo-basket siblings on disk (wife, best friend, boyfriend, girlfriend). Swapped a disposable camera (girlfriend basket) and ceiling stars (boyfriend basket) out. 5-gram overlap run against all Halloween b1–b4 bodies: remaining hits are dates, fact strings and template-feature phrases only; no copyable line or basket idea reused. Booing etiquette kept to 5 rules; the b4 best-friend "You've Been Boo'd" explainer is not repeated.

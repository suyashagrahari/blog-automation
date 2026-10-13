# Research brief — baby-halloween-costume-ideas (row 145)

Keyword: **baby halloween costume ideas** · absorbs "halloween costume infant", "first halloween costume" · theme costume · plan weak 4/10 · band 3,000–10,000/mo.

## Phase 0 — first-party data
No Halloween, costume or baby usage data exists in `content/facts.md` (BRIEF §3). Used three platform-wide lines, each labelled site-wide in the body:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (first 150 words)
- Average views per created page: 11.1 — measured 2026-09-24 (first 150 words)
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24 (Family-mode section)
Template features taken only from `template-spec.md`. `npm run facts` not run.

## Phase 1 — SERP (WebSearch, US index; 1 search for the SERP, 1 for the face-paint source = 2 total)
| # | URL | Type | ~Words / structure | Direct answer | Data cited (date) | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | romper.com/life/baby-halloween-costumes | Publisher, affiliate | ~3,000; 30 numbered product H2s | Buried after a 2-para intro | None; prices of shop-bought suits US$39–99 (updated 21 Sep 2022) | Product cards, no table, no FAQ | Affiliate clicks (Pottery Barn) |
| 2 | cradlewise.com/blog/halloween-costume-ideas-babies-parents (+ en-AU duplicate) | Baby-product retailer blog | ~1,800; 15 numbered parent+baby ideas | After 4-para intro | None (2026) | "What you'll need" lines | Parent+baby family looks; cross-links a separate safety post |
| 3 | shop.nestdesigns.com 7 ideas | Clothing retailer blog | ~700; 7 H3 ideas + safety bullets | After intro | None (2022) | 5 safety bullets (warmth, fit, reflective, no masks, hats) | Selling base layers |
| 4 | freshlypicked.com baby's first costume | Shoe/bag retailer blog | ~900 (mostly nav); 10 ideas | Brief | None | Product embeds | Selling moccasins |
| 5 | baby-chick.com 31 first-Halloween ideas | Parenting publisher, affiliate | ~3,500; 31 numbered H3s | After intro | None (updated 24 Nov 2025) | Affiliate links; DIY via third-party blogs | Affiliate clicks |
Others in top 10: happiestbaby.com (retailer blog), spirithalloween.com (costume retailer), old.langmai.org (hijacked-subdomain spam — weak, not analysed).
**Weak results in top 9 shown: 6** (cradlewise ×2, nestdesigns, freshlypicked, happiestbaby, langmai spam). Gate 4 passes.

## Phase 2 — gap
- **Table stakes:** a numbered idea list, a mix of animals/food/characters, newborn suitability, warmth, "no masks".
- **Gap:** no page sorts ideas by developmental stage (lying / tummy time / crawling / cruising); none prices a DIY build per idea; none cites any regulation; none mentions that the US small-parts rule exempts clothing; none mentions sleepwear flammability vs costumes; none addresses swaddle hip safety; none cites any research. Baby Chick's gnome even suggests cotton balls glued to paper with ear loops "like a mask" — the opposite of the face and small-parts advice.
- **Stale data:** Romper prices dated 2022; no page cites research at all.
- **Fan-out sub-queries:** what to dress a newborn in; costume by age in months; DIY onesie costumes; can baby sleep in costume; face paint on babies; pom-pom choking; overheating in carrier; swaddle costume safety; cost; sending photos to grandparents.
- **Angle:** wins by being the only post that sorts baby costumes by developmental stage with a onesie DIY build and cost each, and reads the actual US rules to show costume trims are exempt from the small-parts test.

## Phase 3 — sources (all fetched)
1. **16 CFR part 1501** — https://www.ecfr.gov/current/title-16/chapter-II/subchapter-C/part-1501. §1501.2 scope (articles for under-3s), §1501.3(d) **exempts "children's clothing and accessories, such as shoe lace holders and buttons."** HTML returned a bot wall (not worked around); text read via the official eCFR versioner API (`/api/versioner/v1/full/2026-10-01/title-16.xml?part=1501`), which the block page itself points to. Cylinder dimensions are only in Figure 1 (image), so the post gives no mm figure.
2. **16 CFR part 1615** — https://www.ecfr.gov/current/title-16/chapter-II/subchapter-D/part-1615. §1615.1(a) sleepwear = sizes 0–6X intended for sleeping, excluding (c) **"infant garments": sized nine months or smaller, one-piece ≤ 64.8 cm (25.75 in)**, which must still meet part 1610. Part 1616 (sizes 7–14) also read via API; mentioned unlinked to stay within 6 outbound links. Same API route.
3. **WA Health, Face and body painting** — https://health.wa.gov.au/Articles/F_I/Face-and-body-painting (undated). "It is not advisable to paint a child's face if they are under 3"; paint can enter eyes or mouth; young skin sensitive. Found with the 2nd search.
4. **van de Kamp & Daanen 2025**, IJERPH (MDPI, CC BY 4.0), 13 Aug 2025 — https://europepmc.org/article/PMC/PMC12386404. Full text read: infants cannot remove excess clothing; caregivers judge infant thermal state by their own; "one extra layer" advice needs reconsidering in hot weather. (Thermoregulation paper; not Olvera.)
5. **Filingeri et al. 2020**, Physiological Reports (Wiley, CC BY 4.0), 6 May 2020 — https://europepmc.org/article/PMC/PMC7202982. 9 babies (7.3 ± 3.1 months), 15-min babywearing at 23°C: local skin temp up to +1.1°C (abdomen), no tympanic change, mothers perceived nothing; 1 vs 2 light layers made no difference. Abstract and methods read.
6. **Alfawaz et al. 2026**, J Family Med Prim Care (Medknow, CC BY-NC-ND — cited/linked only), 27 Jul 2026 — https://europepmc.org/article/PMC/PMC13465751. 436 Riyadh mothers; correct-swaddling knowledge mean 46.9%; swaddling restricting hip flexion/abduction is a modifiable DDH risk.
Not used from couple-costumes-with-baby: Safe to Sleep, Lullaby Trust, Cole, Olvera (0 reuses). Tried and rejected: findpapers "face paint cosmetics children skin reaction", "newborn skin care barrier immaturity review" (nothing on-subject); Frontiers hits skipped (banned).
capcheck: no domain at cap, none of these URLs banned; europepmc exempt.

## Structural limitations / brief claims checked
- **Prompt framing partly false:** the prompt lists "small-parts/choking from buttons and pom-poms" under 16 CFR 1501. The rule itself **exempts children's clothing and buttons** (§1501.3(d)), so costume trims are not cylinder-tested. The post says this plainly rather than implying the rule protects them.
- Prompt says "flame-resistant labelling for sleepwear vs costumes": 1615 also **exempts infant garments sized 9 months or smaller**, so most baby sleepwear is outside the sleepwear flammability test too (only 1610 applies). The post states the exemption.
- eCFR HTML is bot-walled for automated fetches; verification used the official API (same regulation text, version 2026-10-01).
- No first-party table column (no Halloween data) — audit failure, structural.
- Idea overlap: all 32 ideas checked against couple-costumes-with-baby, halloween-captions-for-baby, family-halloween-costumes, halloween-costume-ideas-for-kids (baby band), halloween-ideas-for-toddlers; skeleton, vampire, superhero, cupcake, moon, burrito, lumberjack, farmer, race car, chef and werewolf were dropped as collisions.

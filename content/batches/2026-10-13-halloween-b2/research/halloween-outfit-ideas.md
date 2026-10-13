# Research brief — halloween outfit ideas (row 67, absorbs "halloween outfit inspo")

Batch `2026-10-13-halloween-b2` · slug `halloween-outfit-ideas` · theme costume · PLAN band 10,000+/mo, demand 5, weak 4 (recorded).

## Phase 0 — first-party data

- No Halloween, outfit or fashion data exists in `content/facts.md` (BRIEF §3). `npm run facts` NOT run.
- Used (verbatim in `factsUsed`):
  - 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), measured 2026-09-24. Framed as "plan the outfit photo for a small vertical frame".
  - Average views per created page: 11.1, measured 2026-09-24. Framed as "a handful of reopenings, not a crowd".
  - Raksha Bandhan 2026 lead time (49.4% of 89 pages built on the day), labelled as the nearest analogue, not Halloween data. Framed as "start from your wardrobe".
- Template spec (`template-spec.md`) used for /happy-halloween and /happy-halloween-premium features only.

## Phase 1 — SERP (WebSearch; Firecrawl disconnected)

Searches used: **2 of 2**. (1) `halloween outfit ideas`; (2) `halloween outfit inspo what to wear that isn't a costume`. US-served index. Pinterest and Google Images, which likely dominate "outfit inspo" intent, are not visible to this tool.

Query 1 top 9: 8 hijacked-subdomain spam pages (2019esg.quantaservices.com ×3, tdten.teradata.com ×2, foreman.hms.harvard.edu ×2, old.langmai.org ×2; DNS no longer resolves for the two tested) plus timeout.com (a 2025 costume list, not outfits). **Weak in top 10: 8 of 9 measured** (PLAN said 4). Query 2: 5 spam, autostraddle.com, myunidays.com ×3 (same post, mirrored locales).

| Page | Words / structure | Direct answer | Data cited (date) | Format | Tone / optimises for |
|---|---|---|---|---|---|
| autostraddle.com "Five Outfits To Wear for Halloweekend" (2022) | ~600; 5 H2-like outfit blocks, 3 products each with prices | After a 2-para intro | Product prices only (2022) | Shopping images + affiliate links | Chatty first person; affiliate revenue |
| myunidays.com "5 basic Halloween ideas for those who cba" (2018) | ~350; 5 H2s | Para 1, vague | None (2018) | Affiliate links | UK student slang; partner retail |
| timeout.com "best Halloween costume ideas in the U.S. for 2025" | ~1,500; 9 costume H2s | After intro | Pop-culture references (2025) | Images | Editorial, trend-led; costumes not outfits |
| Spam pages (quantaservices, teradata, harvard subdomains, langmai) | Auto-generated | n/a | None | Fetch failed (ENOTFOUND) for 2 tested; judged from snippets | Keyword stuffing |
| `content/keywords/2026-10-12-halloween-global/serps.md` | No entry for "outfit" or "inspo" | — | — | — | — |

Competitor pages read for analysis only; none cited or linked.

## Phase 2 — gap

- **Table stakes:** all-black base + one accessory; skeleton or print pieces; "use clothes you own".
- **The gap:** no page groups outfits by occasion (office, campus, pumpkin patch, party, night out); none gives a colour formula or cost per look; none covers plus-size, adaptive or modest-wear; none mentions weather or layering; none mentions second-hand or textile waste; none addresses whether clothing changes how you feel.
- **Stale data:** UniDays 2018, Autostraddle 2022 prices.
- **Fan-out sub-queries → H2/FAQ:** what counts as a Halloween outfit vs costume (H2 1); outfit ideas by occasion (H2 2, 8 H3s); cost (H2 3 table); what to wear in late-October weather (H2 4); does clothing affect mood/confidence (H2 5); sending the photo / limits (H2 6); FAQs on office, school, modest, plus-size, all-black, colours.
- **Angle:** Wins by being the only post that gives non-costume Halloween outfits by occasion with a colour formula and est. cost per look, paired with sourced 31 October temperature normals and an honest read of the enclothed-cognition replication, framed by SubhSandesh's 48.3% phone-view share.

## Phase 3 — sources (all fetched)

| # | Source | What it supports | Read |
|---|---|---|---|
| 1 | Burns, Fox, Greenstein, Olbright, Montgomery (2019), PsyArXiv `osf.io/preprints/psyarxiv/cj6kv`, CC BY 4.0 | Preregistered direct replication of Adam & Galinsky's lab-coat Stroop effect: 200 participants, 4 sites, 192 analysed, no effect | Full PDF |
| 2 | Van Stockum & DeCaro (2014), Journal of Problem Solving 7(1), docs.lib.purdue.edu (peer-reviewed, OA) | Lab coat × working-memory interaction on insight problems | Abstract only (PDF 403) |
| 3 | Scott (2023), Toronto Metropolitan University thesis, rshare.library.torontomu.ca | 7 women 21–39; clothing can lift mood, self-concept, self-esteem | Abstract only (via Crossref) |
| 4 | US EPA, Textiles: Material-Specific Data | 17 M tons textiles in 2018 MSW (5.8%), 11.3 M tons landfilled, clothing & footwear recycled at 13% | Full page |
| 5 | NOAA NCEI 1991–2020 daily normals (data service URL) | 31 Oct max/min: NYC 59.2/46.4°F, Chicago 55.9/40.1, Atlanta 69.1/48.9, Seattle 55.6/43.8 | JSON returned |
| 6 | Met Office Heathrow station data | Our 1991–2020 mean of October rows: 15.8°C / 8.8°C (n=30) | Full file, computed |

Search terms run through `findpapers.mjs`: "enclothed cognition", "clothing mood women", "wearing clothes self-esteem body image fashion", "lab coat attention replication". Rejected: Adam & Galinsky 2012 (JESP, Elsevier, banned; named in body without link); Frontiers white-coat papers (Frontiers is a §9 trap); PSPR "Dress is a fundamental component of person perception" (SAGE); Clothing and Textiles Research Journal (SAGE).

**Brief/prompt claims checked:** Adam & Galinsky 2012 confirmed JESP (Crossref DOI 10.1016/j.jesp.2012.02.008). PLAN weak=4 understated: measured 8 of 9. Capcheck before writing: no conflicts; none of these 6 URLs or domains appear elsewhere in either batch.

## Siblings checked

`diy-halloween-costumes` (b2), `unique-halloween-costumes` (b2), `halloween-fancy-dress-for-couples` (b1) H2s read; no idea reused (this page is outfits, not builds or characters; the DIY "thrift-store remix" builds are costumes and are not repeated). 5-gram overlap checked against all files in both batches: only shared product-description phrasing remained, which was rewritten.

# Research brief — `flowers for wife after giving birth`

- **Batch:** `2026-09-03-bouquet-3`
- **Slug:** `flowers-for-wife-after-giving-birth` (checked free against Strapi on 2026-09-03: `filters[slug][$eq]` returned `total: 0`)
- **Category:** `virtual-bouquets` (confirmed present in the live Strapi category list on 2026-09-03)
- **Gate 0:** evergreen, no deadline, no year in any title string.
- **Keyword length:** 6 words. Recorded because it decides checklist item 15.
- **Slug stop words:** `for` and `after`. Counted by hand; recorded because it decides item 24.

---

## Phase 0 — data gate

`content/facts.md` (regeneration of 2026-09-03) carries the six facts used. Two of
the three in the opening paragraph are first-party (50.2% phone share of 42,017
views; 12.3 views per page), so the gate passes on the "2 inside the first 150
words" condition with one to spare.

The **Pricing block is empty**. Every keyword in this batch is a gift query and
cost is the reader's live question, so this is a real hole. The post makes no cost
claim of any kind — not "free", not "no delivery charge", not a price point — and
says so explicitly in the body's limits section. Recorded in `honestAssessment`.

---

## Phase 1 — SERP

Pulled 2026-09-03, India locale. Search engines reachable from this environment
(DuckDuckGo HTML, Mojeek, Qwant, searx.be, baresearch, lite.duckduckgo) all
returned captchas or bot challenges; the SERP and the page fetches below were
obtained through a text-extraction proxy instead. The result set matched the host
list in the assignment, which is the cross-check that it is the right SERP.

**Top 10:** one paid FromYouFlowers unit, then `bellbloomflowers.net`,
`odealarose.com`, `teleflora.com`, `etsy.com`, `flowersmamba.com`,
`mommyonpurpose.com`, `yourindoorherbs.com`, `babylist.com`, `dailymom.com`.

**2 weak of 10** — `etsy.com`, `floweraura.com`. On the skill's Gate 4 scale that
is a **0.15 win probability**, the lowest in this batch. No rank is predicted
anywhere in the output.

| Page | Words | Structure | Direct answer? | Data cited | Table | FAQ | Hospital as a policy? | Any India? |
|---|---|---|---|---|---|---|---|---|
| bellbloomflowers.net | ~1,510 | Why it matters → 5 ranked blooms → budget → presentation tips → FAQ | Buried under a "why this matters" preamble | None dated | No | Yes, 5 Qs | Only as a delivery address | No |
| odealarose.com | ~2,150 | Why flowers → 9 blooms → birth-month flowers → avoid → presentation → own-brand close | No; opens on emotional framing | None | No | No | Mentioned, not sourced | No |
| flowersmamba.com | n/a | Blocked the fetch (Cloudflare) | — | — | — | — | — | — |
| yourindoorherbs.com | ~2,040 | 15 botanical entries with Latin binomials → 2-question FAQ → sources | No; it is a plant catalogue, not an answer | Horticultural | No | Yes, 2 Qs | No | Incidental only |
| mommyonpurpose.com | ~1,930 | Jewellery → "new title" gifts → photography → pampering → hospital gifts → be a good dad | Partly, in the H2s | None | No | No | Mentioned, not sourced | No |

**What the SERP is optimising for:** four of the five are bloom-selection pages
(which flower, what it symbolises, what to avoid). One is a general new-mum gift
listicle. All five treat the hospital as an address you ship to.

---

## Phase 2 — gap analysis

**Table stakes** — all five cover which blooms to pick, scent and allergy caution,
flowers to avoid, timing, and what to write on the card. The post has to touch
scent, timing and card wording or it reads incomplete.

**The gap, and it is large:**

1. **Not one page tells the reader the ward may refuse the bouquet at the door.**
   `bellbloomflowers.net` gets closest with an FAQ asking which flowers are best
   "in the hospital" — but treats the hospital as a shipping destination, never as
   a body with a written policy. Nobody cites a hospital policy or a clinical
   guideline. This single fact reframes the entire query and is the post's spine.
2. **Zero Indian editorial presence.** Every strong result is a US florist
   (`teleflora`, `fromyouflowers`, `odealarose`, `bellbloomflowers`,
   `flowerpatchdelivery`) or a US parenting blog (`mommyonpurpose`). No Indian
   hospital, no rupee, no joint-family visitor load, no confinement period. In an
   India-locale SERP that is a genuine geo-gap.
3. **Nobody asks what the first twenty-four hours actually allow.** She is
   feeding, exhausted, and has one hand free. Not one page orders its
   recommendations by how little they ask of her.
4. **No comparison table anywhere in the top five.**
5. **Nothing is dated.** No page cites a source with a publication date, so any
   dated claim is a differentiator by default.

**Stale data:** none to supersede — the competitors cite no statistics at all,
which is its own finding.

**Fan-out sub-queries → H2s:**

| Sub-query | Where it lands |
|---|---|
| Can you bring flowers into a maternity / postnatal ward? | H2 1 |
| Why are flowers banned on some wards? | H2 2 |
| What do I send on delivery day if flowers can't come in? | H2 3 (5 × H3) |
| Flowers vs a link vs practical help | H2 4 (table) |
| When is a physical gift the better call? | H2 5 |
| What should the message say? | H2 6 |

**Angle:** wins by being the only post that checks the ward's own rules before
recommending a bouquet — quoting a named NHS postnatal-ward leaflet that permits
neither flowers nor latex balloons, and a CDC guideline that restricts them only
for immunosuppressed patients — then answers for an Indian postnatal ward and
confinement period, using SubhSandesh's 50.2% phone-open rate.

**Secondary keywords.** Read `(5x)` on `flower for wife after giving birth to
baby` as harvest frequency metadata, not an instruction to repeat an ungrammatical
phrase five times, which would be stuffing and is forbidden by the skill. All four
secondaries sit in `article.keywords`; `gift for wife on delivery day`, `what to
gift your wife after delivery` and `flowers for new mom` each appear once,
naturally, in the FAQs.

**Skeleton avoidance.** Read `digital-flowers-for-wife` (1,060 words) and
`virtual-flowers-for-wife` (1,307 words) live. Both run the twelve-page product
skeleton the batch brief warns about: *why digital beats physical → step-by-step →
design tips → table → sharing/privacy → troubleshooting → how SubhSandesh makes it
effortless*. This post has **no** step-by-step section, **no** design-tips section,
**no** sharing-and-privacy section and **no** "how SubhSandesh makes it effortless"
section. It opens on a hospital policy, not on a product comparison.
`sorry-message-for-wife-after-argument` was also read; no overlap.

---

## Phase 3 — sources

Route used: **Crossref → PubMed E-utilities → DOAJ → Unpaywall → direct fetch**,
as the batch brief recommends. OpenAlex, CORE and Semantic Scholar were not needed.
Closed domains were avoided by design, which ruled out the obvious medical
publishers (`sciencedirect.com` for *J Hosp Infect*, `journals.sagepub.com` for
*Journal of Research in Nursing*, `pmc.ncbi.nlm.nih.gov`, `journals.plos.org`,
`link.springer.com`, `cambridge.org`, `mdpi.com`, `onlinelibrary.wiley.com`) and
`pubmed.ncbi.nlm.nih.gov`, which sits at exactly 3 posts.

**5 sources. All 5 pass the subject test. None passes the swap test. Zero generic
context statistics. Zero Wikipedia body links. Zero competitor links.**

1. **Milton Keynes University Hospital NHS Foundation Trust — *Your Postnatal Ward
   Stay*, patient information leaflet, published May 2025.** Full PDF read.
   Verbatim: "For anyone wishing to bring in gifts, please note that due to
   allergies and infection control we are unable to permit flowers or latex
   balloons onto the ward." Also states two visitors at the bedside, 08:00–22:00,
   over 16s only. Author Sophie Coetzee, Doc No 4116, review May 2028.
   *This is the answer to the assignment's central question — a real, named,
   dated hospital postnatal-ward policy banning cut flowers.*
2. **NHS Borders Infection Prevention & Control Team — *Miscellaneous Infection
   Control Guidance*, v1.5, issued November 2020.** Full PDF read. "Flowers are
   not permitted in the following high risk areas: ITU, SCBU, BMC, Renal Dialysis,
   Any area experiencing an outbreak." Senior charge nurses may prohibit flowers
   from all or part of their clinical area. Process for any area displaying
   flowers: "Daily - clean vase and clean water." SCBU is the special care baby
   unit, which is the neonatal half of the assignment's question.
3. **CDC — *Guidelines for Environmental Infection Control in Health-Care
   Facilities*, 2003, section E.IV.** Full recommendations page read. "Flowers and
   potted plants need not be restricted from areas for immunocompetent patients"
   (Category II); "Do not allow fresh or dried flowers, or potted plants in
   patient-care areas for immunosuppressed patients" (Category II); flower care to
   be designated to staff not directly involved with patient care, with gloves and
   hand hygiene if unavoidable.
4. **Bandyopadhyay M — "Impact of ritual pollution on lactation and breastfeeding
   practices in rural West Bengal, India", *International Breastfeeding Journal*
   4:2, published 26 March 2009. Peer-reviewed, open access, CC BY 2.0.** Four
   villages, fieldwork Sept 1993 – April 1994, 402 survey respondents, 30 in-depth
   interviews, 12 case studies. "Upper caste Hindu women remain in seclusion and
   restricted diet for about 21 to 30 days compared to 9 to 11 days for women from
   the lower castes. Muslim women have a longer period of restricted diet and
   seclusion (40 days) after childbirth." In Motipur and Kapgari, mothers were on
   puffed rice, tea and hot water for the first three days. A respondent gives
   visitor exposure and infection as the reason to keep mother and baby apart from
   visitors "for at least 21 days after birth". Full text verified through the
   publisher's deposited article XML — the journal host returned a client
   challenge to automated fetch. **The 1993–94 fieldwork date is stated in the
   post's body, not hidden.**
5. **Sequera SKL, Cutinho SP, Fernandes R, Kathi P, Tom N — "Satisfaction and
   preferences of the patient visitors toward visiting hour policy in postnatal
   ward of a selected hospital, Mangalore: A descriptive study", *Muller Journal of
   Medical Sciences and Research* 10(1):13–16, 2019. Peer-reviewed, DOAJ-indexed
   open access. DOI 10.4103/mjmsr.mjmsr_38_18.** 74% of patient visitors satisfied
   with the visiting hour policy; 78% preferred a 2-hour visiting duration; **68%
   preferred one visitor at a time**; 59% preferred the policy displayed in
   Kannada. **Abstract only was read** — the publisher host `journals.lww.com`
   returned a Cloudflare bot challenge, so the abstract was verified via the DOAJ
   article record. Recorded in the audit; no claim beyond the abstract is made.

**Cap check.** `www.mkuh.nhs.uk`, `www.nhsborders.scot.nhs.uk`, `www.cdc.gov`,
`www.mjmsr.net` and `internationalbreastfeedingjournal.biomedcentral.com` are all
unused as hosts across the 1,435 spent URLs and across the seven sibling files in
this batch. One ambiguity is recorded rather than worked around: counted as a
registrable domain, `biomedcentral.com` already sits at 3 posts across three
different subdomains, though `USED-SOURCES.md`'s own generated 3-post list counts
hosts and does not name it. Per the batch brief this is reported, not
restructured around — the URL I would surrender is the Bandyopadhyay article, and
surrendering it would break checklist item 33 since it is the post's only
peer-reviewed open-access source.

### What could not be sourced

- **The assignment's own framing was only partly right, and the post does not
  repeat it as given.** The brief said many maternity and neonatal wards restrict
  cut flowers with infection-control reasoning behind it. The clinical guidance
  says the opposite for immunocompetent patients — a healthy postnatal woman is
  not in the restricted class — and describes the issue as allergy plus staff
  workload plus named high-risk areas. The post states what the documents state.
- **No Indian hospital's published flower policy could be found.** Both named
  policies are UK NHS documents and the post never presents them as Indian rules.
  Naming an Indian hospital's own written rule would materially strengthen the page.
- ***Jaappa*** could not be verified in any scholarly source (DOAJ, Crossref and
  PubMed all returned nothing on point; DOAJ's "japa" hits are Nigerian
  emigration studies). The term is therefore **not used** — the post says
  "confinement period" and "postpartum seclusion", which Bandyopadhyay supports.
- Elsevier's *J Hosp Infect* "Flowers and healthcare-associated infection" (2006)
  and BMJ's "Wards of the roses" (2009) are both on point and both unreachable:
  paywalled or 403, and on closed or near-closed domains. Neither is cited.

---

## Phase 5 — targeting

- **Internal links (3).** `/bouquet-gf` (mandatory for this cluster) in H3 1;
  `/dedication` in H3 2; `/love-gf` in the closing tone section. All placed after
  the section that earns them, never in the opening.
- **Register-based exclusions.** Every `TEMPLATE_LINKS` description was read.
  `/challan` (mock traffic notice), `/legal-notice` (mock legal notice),
  `/nutrition` (nutrition label about a person) and `/court-of-love` (mock trial)
  are jokes by design and are wrong on this page. `/hold-my-hand` requires holding
  a screen for 60 unbroken seconds, which is the wrong ask of someone feeding a
  newborn. `/capsule`, `/streak`, `/proposal`, `/date-invitation`, `/flags`,
  `/recharge`, `/loveflix`, `/searched`, `/vending-machine`, `/photo-puzzle` and
  `/rewind` all demand sustained interaction or the wrong tone. `/darling` is
  described as "dark, dramatic", which does not belong on a maternity ward, so
  `/love-gf` was taken as the required second link instead.
- `templateUrls`: `/bouquet-gf`, `/love-gf`, `/dedication`.

## Phase 6 — audit summary

**48 passed, 2 failed, disjoint, 48 + 2 = 50.**

- Item 15 (`metaTitle` exact keyword in the first five words) — genuinely
  unsatisfiable: the keyword is 6 words. It opens the title at word one.
- Item 24 (slug, no stop words) — the exact-match slug contains `for` and `after`.

Both are structural and both are recorded with the reason rather than
paper-mached over. No rank is predicted; the realistic upside is answer-engine
citation of the ward-policy fact and the long-tail variants the incumbents have
no page for.

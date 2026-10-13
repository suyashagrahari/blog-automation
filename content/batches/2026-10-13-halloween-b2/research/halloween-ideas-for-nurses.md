# Research brief: halloween ideas for nurses

- Row 95, slug `halloween-ideas-for-nurses`, theme work. It also covers "nurse halloween costumes".
- Batch `2026-10-13-halloween-b2`. Researched 2026-10-13.
- Category `festive-beats`. Templates: /happy-halloween, then /happy-halloween-premium.

## Phase 0: first-party data

- facts.md was read directly. `npm run facts` was not run, as BRIEF §3 requires.
- facts.md has no Halloween or nurse segment.
- Platform-wide lines used, each relevant to sending a thank-you to one nurse on shift:
  - 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), measured 2026-09-24. This is in the first 150 words.
  - 38.5% of creators password-protect their page before sharing it (2,000 of 5,199), measured 2026-09-24. This is in the first 150 words.
  - Average views per created page: 11.1, measured 2026-09-24. This is in the "wrong call" section.
- No Halloween usage figures are stated or implied anywhere.

## Phase 1: SERP

### How it was measured

- Firecrawl is disconnected, so the SERP was measured with WebSearch on a US-served index.
- Search 1 (WebSearch): "halloween ideas for nurses".
- Search 2 (DuckDuckGo HTML, in a sandbox): "nurse halloween costumes", the keyword this row absorbs.
- That is 2 searches in total. Confidence is US-weighted.

### WebSearch results (9 returned)

| # | URL | Status | Judgement |
|---|---|---|---|
| 1 | halloween.com/nurse-halloween-ideas.html?ht=1115 | 403 | Weak: query-string duplicate pages |
| 2 | ceufast.com/blog/seven-ridiculously-easy… | 404 | Weak: dead page |
| 3 | halloween.com …?g=1 | 403 | Weak: duplicate |
| 4 | halloween.com …?a=2&g=1 | 403 | Weak: duplicate |
| 5 | amnhealthcare.com 5 best group costumes | 200 | Staffing-agency blog from 25 June 2020 |
| 6 | hosthealthcare.com/?p=2957 | — | Weak: ?p= duplicate of #7 |
| 7 | hosthealthcare.com 5 easy costumes | 200 | Published 26 Oct 2018, updated 30 Sep 2024, about 700 words |
| 8 | htagen.loldrivers.io | — | Weak: spam on a hijacked subdomain. Not analysed |
| 9 | development.credenzahealth.com | 503 | Weak: staging subdomain |

- Weak results: 7 of 9 (PLAN.json said 6).
- Gate 4 passes.

### DuckDuckGo results for "nurse halloween costumes"

- Most of the top 10 are retailers: halloweencostumes.com ×2, amazon ×2, walmart ×2 and spirithalloween.
- The rest are content pages: thrivinginparenting.com, nurse.org and advantismed.com.

### Top 5 analysed

| Page | Words | Headings | Direct answer | Sources and data | Tone and optimised for |
|---|---|---|---|---|---|
| amnhealthcare.com (2020) | ~600 body | H2 plus 5 H3 group costumes (banana split, superheroes, dwarves, candy bars, Harry Potter) | Para 1: "if your facility allows it" | None | Staffing brand. Group costumes |
| hosthealthcare.com (2018/2024) | ~700 | 5 costumes plus an agency FAQ | Para 1 | None. Mentions paediatric caution for the zombie idea | Agency. Easy costumes |
| nurse.org (29 Oct 2025) | ~1,600 incl. nav | H3s: comfort/safety, keep it professional, ideas, tips | Key takeaways box | One PMC link. Competitor sidebar: "Ditch the 'Sexy Nurse' Look" | Nursing media. Work-safe costumes |
| advantismed.com (6 Oct 2026) | ~1,900 | 25+ ideas in categories, a policy checklist, dos and don'ts | Para 1 | No external sources (internal and Medium links) | Travel-nurse agency. Scrub-friendly |
| thrivinginparenting.com (Aug 2026) | ~2,400 | Kids, duo, zombie and scary nurse costumes | Para 1 | None. Recommends a "sexy nurse outfit" in one duo | Affiliate listicle for nurse costumes worn by non-nurses |

## Phase 2: gap analysis

### Table stakes

- Check the facility's policy first.
- Comfort.
- Costumes built from scrubs.
- Group and unit costumes.
- Avoid scary costumes on paediatric wards.

### The gap: what none of the five do

- None cites a written uniform standard. advantismed's checklist is unsourced, and no page raises the lanyard rule.
- None gives contamination data on sleeves or fabric.
- None covers potluck holding times or allergen labels.
- None covers treats for patients checked against diet orders.
- None mentions dementia wards.
- None covers night-shift inclusion now that 31 Oct falls on a weekend (Sat 2026, Sun 2027).
- None covers research on unit celebrations and wellbeing.
- None handles "nurse costumes" for non-nurses respectfully with a named source. thrivinginparenting promotes the sexy nurse costume.

### Stale data

- hosthealthcare dates from 2018 and amnhealthcare from 2020.
- Neither page carries data that would go stale.

### Fan-out sub-queries, mapped to H2s and FAQs

- Can nurses wear costumes at work? → H2 1 and an FAQ.
- Ward-safe costume ideas → H2 2, with H3 ×6 and the table.
- Lanyards, masks and face paint → FAQs.
- Unit potluck, decorating, the night shift and patient treats → H2 3.
- Do celebrations help burnout? → H2 4.
- Respectful nurse costume and the naughty-nurse objection → H2 5.
- Thanking one nurse → H2 6.
- When not to do it → H2 7.

### Angle

The post wins by being the only one that checks every nurse Halloween idea against a written uniform standard (NHS England, April 2020) and against sleeve-contamination data. It also flags the lanyard idea the SERP recommends, and covers potluck holding times, patient treats and the naughty-nurse objection with named sources. SubhSandesh's 48.3% phone-open and 38.5% password rates support the one-nurse thank-you.

## Phase 3: sources (6, all fetched)

| # | Source | Subject test | What it supports | Read |
|---|---|---|---|---|
| 1 | NHS England & NHS Improvement, *Uniforms and workwear: guidance for NHS employers*, 2 Apr 2020 (england.nhs.uk PDF) | Yes: nurse dress code | Lanyards and neckties during direct care, wrist jewellery and watches, false nails all listed as poor practice. Stud earrings only. Tie long hair back | Full PDF. The HTML landing page returned 202 |
| 2 | Sanes Guevara et al., ICHE 2026, PMC12932925 (CC BY, Cambridge UP) | Yes: healthcare attire | Of 280 sleeve samples, 81.1% grew bacteria and 20.7% grew a potential pathogen. Fleece was the worst material | Abstract only |
| 3 | Knezevic et al., BMC HSR 2025, PMC12337441 (CC BY-NC-ND) | Yes: staff wellbeing and celebration | SEED program, 12 weeks, 5 activities including Celebration, 3 implemented. Themes: staff as experts, camaraderie. Barriers: disconnection and trust | Full text |
| 4 | USDA FSIS "Danger Zone", updated 28 Jun 2023 | Context: potluck | 2 hours out of refrigeration, or 1 hour above 90 °F | Full page |
| 5 | The Truth About Nursing, naughty nurse FAQ, updated 5 Apr 2015 | Yes: nurse image | Campaign log including an Oct 2014 Halloween commercial and a May 2010 costume contest. Argues nursing is over 90% female | Full page |
| 6 | National Army Museum, *Florence Nightingale: The Lady with the Lamp* | Yes: costume history | Lived 1820–1910. Reached Scutari 21 Oct 1854. *The Times* reported her lamp at night. Lamp dated c1856 | Full page |

### Papers searched with findpapers

- Queries tried:
  - "nurse recognition wellbeing"
  - "nurse burnout recognition appreciation"
  - "naughty nurse stereotype image media"
  - "healthcare personnel attire infection transmission"
  - "workplace celebration nurses morale"
  - "meaningful recognition nurses DAISY"
  - "sexualised image of nurses public perception"
  - "dementia hospital environment distress"
  - "food allergy hospital inpatients"
- Rejected:
  - Elsevier titles (Annals of Intensive Care / aicoj, IJNS Advances, Nurse Leader).
  - Frontiers editorials.
- No open-access paper on the sexualised nurse image turned up, so an advocacy organisation's record was used instead.

### Caps

- capcheck shows no banned URLs.
- None of these 6 domains or papers appears in another b2 post.
- nhs.uk is FULL. england.nhs.uk is a separate host for the cap script.
- No source from Batch 1 is reused. b1 halloween-puns-for-work used two other PMC papers, mailchimp, jw.org and eeoc.

### Competitors

- None of the competitors are cited or linked: nurse.org, advantismed, amnhealthcare, hosthealthcare, costume retailers.

## Claims in the brief or prompt checked against sources

- **False: the prompt's suggested "themed lanyard".** NHS England guidance lists lanyards during direct patient care as poor practice. The post recommends a chest-height badge reel instead.
- **True: "nhs.uk is FULL; use england.nhs.uk if it's a different host".** It is a different host, and capcheck counts it separately.
- **True: BRIEF §1, Sat 31 Oct 2026 and Sun 31 Oct 2027.** Verified by computing the weekday.

## Sibling checks

- **halloween-costumes-for-work (b2):** read. It covers office, retail and school workplaces, and its sources are EEOC, OSHA and PMC13203499, so neither its sources nor its H2s overlap with this post. Shared 5-grams are template-spec boilerplate only.
- **halloween-puns-for-work (b1):** its two healthcare lines are not reused.
- **Original lines in this post:** 3 thank-you letter lines and 2 sticker puns. None has a 5-word overlap with any b1 or b2 file.

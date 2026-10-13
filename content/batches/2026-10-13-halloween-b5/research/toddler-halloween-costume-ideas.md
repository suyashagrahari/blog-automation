# Research brief: toddler-halloween-costume-ideas (rank 228)

Keyword: **toddler halloween costume ideas**. Also covers: halloween costumes toddler. Band 1,000–3,000/mo.

## Phase 0: first-party data
facts.md has no Halloween, costume or child-age data (BRIEF §3). I used four platform-wide lines, all labelled as platform-wide in the body:
- 48.3% phone opens and 11.1 views per page. Both are in the first 150 words and frame how the costume photo should read on a small screen.
- 38.5% password-protect. Used for the advice on sharing a child's photos.
- 90.9% of started pages are published.

## Phase 1: SERP. WebSearch (US index), 2026-10-13, 2 searches
| # | URL | Type | Words | Headings | Direct answer | Data / date | Notes |
|---|---|---|---|---|---|---|---|
| 1 | twinkl.com/blog/best-halloween-costume-ideas-for-toddlers | edu-publisher blog | ~2 served | n/a | n/a | n/a | Snippet only: gnome, ladybird, flower hat |
| 2 | sitters.co.uk/halloweencostumes (and /halloween, a duplicate) | babysitting site list | ~1,000 | H1 + 30 numbered H2s | none, straight into the list | none | No safety, car-seat or nappy content |
| 3 | halloween.com/halloween-ideas-for-toddlers.html?n=1 (x3 query strings) | doorway | 403 | n/a | n/a | n/a | Weak |
| 4 | 2019esg.quantaservices.com, old.langmai.org x2 | hijacked-subdomain spam | n/a | n/a | n/a | n/a | Weak |
| 5 | romper.com/life/toddler-halloween-costumes | magazine roundup | ~2,850 | 20 numbered H2s | none | published 2021-09-20 (stale) | Product-led, no safety content |
| 6 | kmart.com.au / kmart.co.nz, potterybarnkids.com, halloweencostumes.com | retail category pages | 403 | n/a | n/a | n/a | Snippets: "soft, simple, easy to move in"; "ease of dressing and bathroom breaks" |

- **Weak count:** 6 of the 9 Q1 results are weak (3 doorways and 3 spam). Gate 4 does not apply.
- **What the fetched pages miss:** none of them mention car-seat harnesses, choking or small parts, or face paint for under-3s. Bathroom access appears only as one retailer snippet line.
- **Sibling overlap with b3 halloween-ideas-for-toddlers:** 1 identical URL (twinkl blog). There are also 2 shared hosts with different URLs: halloween.com doorway query strings and langmai spam. That is under the 4-URL threshold, and the sub-intent differs anyway (costumes, not activities).

## Phase 2: gap and angle
- **Table stakes:** a list of costume ideas, DIY options, and cute rather than scary.
- **Gap:** potty and nappy access, the car-seat harness, sensory and hat refusal, prop choking labels, and face paint ingestion, all for ages 1–3.
- **Fan-out queries:** easiest costume for a 2-year-old; costume in the car seat; one-piece versus potty training; face paint on toddlers; toddler who refuses a hat; props for a 1-year-old; cost; size; photo.
- **Angle:** see `batchMeta.angle`.

### Not repeated from siblings
- **b2 kids:** toddler list (teddy, ladybug raincoat, snail backpack, penguin puffer, lion hat), temperament filter, pyjama character.
- **b3 baby:** stages, and the claim that clothing trims are exempt from the small-parts rule.
- **b3 toddler ideas:** activities, AAP/CDC candy rules, stranger-fear twin study.
- **b3 couple-with-baby:** where the baby is (carrier, stroller).
- **b4 crafts:** a craft small-parts check.
- **b5 boys:** flame resistance and visibility.
- **Grandparent-card angle:** used by 4 siblings. I replaced it with the parent on shift on 31 October.

All 12 costume names were grepped against all b1–b5 bodies. None appears in a sibling costume list.

## Phase 3: sources
Every source was fetched. The Europe PMC papers were read at abstract level only, through the REST API.

1. **Bastos et al. 2021, Int Braz J Urol, PMC7712689 (CC BY).** 372 parents; mean age at finishing toilet training 31.6 months. Passes the subject test (potty access).
2. **Bussu, Portugal & Falck-Ytter 2025, J Child Psychol Psychiatry (Wiley), PMC12267685.** 285 twin pairs aged 5 months; four separable sensory dimensions. The subject fit is partial: the children are infants, not toddlers, and the body says so.
3. **AAP HealthyChildren.org, Winter Car Seat Safety Tips (last updated 28 February 2025).** Bulky clothing should not go under the harness; the pinch test; coat on backwards. This is the primary source for the harness rule.
4. **CPSC small-parts business guidance (undated).** Covers 16 CFR 1501 and the 1500.19 warning label. cpsc.gov is now in 2 b5 posts (boys and this one), under the cap.
5. **Salles et al. 2022, IJERPH (MDPI), PMC9819701.** 95 face paint samples. This paper was also cited in b1 and b2; caps are per batch, so it is allowed. It fails the swap test (see audit).

### Searches tried
- Europe PMC: "sensory over-responsivity", "toilet training", "car seat coat harness", "costume child".
- No open-access study on puffy coats and harness slack was found, so the AAP guidance stands as the primary source.
- Avoided: fda.gov (coordinator reserved its last slot), en.wikipedia (full), and banned publishers.

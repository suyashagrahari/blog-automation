# Research brief: halloween captions for baby (row 135)

- Slug: `halloween-captions-for-baby` (Strapi check 2026-10-13: free, `data: []`)
- Also targets: "halloween captions for baby boy" (own H2), "first halloween captions" (own H2)
- Category `festive-beats`; templates `/happy-halloween` (Family mode), `/happy-halloween-premium`
- Siblings read: b1 `halloween-captions-for-family` (baby's-first-Halloween H3, 5 lines), b3 `couple-costumes-with-baby` (H2s), b3 `halloween-captions-for-kids` (sources, which landed during this run). 5-word overlap check against all b1/b2/b3 blog bodies and FAQs: **0 hits on captions or table rows**. The prose hits left are platform-fact wording and template-feature names only.

## Phase 0: first-party data
facts.md read directly (no `npm run facts`). No Halloween or baby data exists. Platform-wide lines used, labelled as platform-wide: 48.3% phone opens and 38.5% password-protect (both in the first 150 words), 90.9% published and 11.1 views per page (grandparents section). Template-spec features only: Family mode question, six photos, letter, pumpkin word, knock/carve/fog portraits/flashlight letter, browser-only, first-answer email, and premium's 12 photos, 60-second voice note, and no No button in family mode.

## Phase 1: SERP (WebSearch, US index, 1 search used of 2)
| # | URL | Type | Words | Structure | Data/date | Notes |
|---|---|---|---|---|---|---|
| 1 | romper.com/life/babys-first-halloween-captions | Strong, baby-specific | ~680 | 3 H2s (costume, trick-or-treat, eating treats), ~50 bullets | Published 2022-10-10, updated 2024-10-10; no data | Answer is buried after an intro. Includes film/song quotes. No table, no FAQ schema |
| 2 | beacons.ai/i/blog/baby-in-pumpkin-captions-for-instagram | **Weak** (link-in-bio vendor blog) | ~1,670 | 12 "baby in pumpkin" H2s plus a product CTA | Undated | Only one photo type covered |
| 3 | womenshealthsa.co.za/halloween-instagram-captions (also listed as `?p=` duplicate) | **Weak** (regional mirror, general list) | ~1,710 | Cute/funny/couples/group/pets/movie/lyrics | 2023-10-27 | Nothing for babies |
| 4 | romper.com/life/halloween-captions | General | ~890 | Puns/classic/pumpkin/couples/movie | 2021-10-04 | Not baby-specific |
| 5 | lovetoknow.com 100 Halloween captions | General | ~1,800 | 9 H2s, one "families and kids" group | 2021-09-27 | Stale, not baby-specific |
| - | apartmenttherapy.com, oldstore.motogp.com (hijacked subdomain spam), static.intrafocus.com (hijacked spam) | Weak / spam | - | - | - | Spam was counted as weak and not analysed |

**Weak count in top 9 returned: 5 entries (beacons, womenshealthsa x2, two hijacked subdomains).** Gate 4 passes. Only one page is genuinely about babies.

## Phase 2: gap
- Table stakes: costume puns, a pumpkin group, a first-Halloween framing, bulleted lines.
- Gap (none of the 5 has it): month-by-month age lines, a baby boy group, a baby girl group, gender-neutral, a sleeping baby (with safe-sleep photo guidance), baby with pet, baby with siblings, sleep-deprived parents, a Halloween pregnancy announcement, grandparents' captions, a type-tone-photo table, FAQs, and any study.
- Stale: lovetoknow and Romper (general) are from 2021. No competitor cites data.
- Fan-out: what to write on a first-Halloween photo / baby boy captions / is it safe to photograph a sleeping baby in costume / pregnancy announcement wording / name privacy / when parents start posting / grandparents far away / baby + dog.
- **Angle:** wins by being the only post that sorts baby Halloween captions by age and photo, with a safe-sleep photo rule from a 2024 study, using the 48.3% phone-open and 38.5% password-protect rates to justify short lines and private sharing.

## Phase 3: sources (all Europe PMC; full text read for all four)
| Source | Claim used | Subject test |
|---|---|---|
| Conti et al. 2024, *Italian Journal of Pediatrics*, PMC11290302 (CC BY) | 228 parents in Rome: 75% of social-media users posted about their children, and 31% started in the child's first 6 months | Pass (parents posting about children, from infancy) |
| Doğan Keskin et al. 2023, *Healthcare* (MDPI), PMC10218097 (CC BY) | 427 adults in Turkey: 45.9% say posts centre on special days such as birth and birthdays; 45.7% say sharing starts in utero; 86.9% say sharing can count as neglect/abuse | Pass (sharing children's photos). These are respondents' **perceptions**, and the body words them that way |
| Pretorius, Kang & Choi 2024, *JMIR Pediatrics and Parenting*, PMC11063578 (CC BY) | 12 of 14 (86%) infant-sleep photos in a Facebook mothers' group were inconsistent with AAP safe-sleep guidance (prone, objects, sleeping devices) | Pass (infant photos shared online) |
| Roche et al. 2026, *Infancy*, PMC12855635 (CC BY) | 47 parent/infant/on-screen-grandparent video-chat triads: mutual caregiver sensitivity was associated with positive, alert infant states | Pass (infants and distant grandparents) |

Search log (findpapers + Europe PMC REST): "sharenting infant photos parents social media", "mothers posting baby photos Facebook", "pregnancy announcement social media", "grandparents video contact grandchildren distance", "ultrasound/pregnancy announcement social media", "sharenting motivations", "transition to parenthood social media photos", "family photograph memory".

Rejected sources: Motevalli, Ferrara and Such (barred by the prompt). Walrave 2023 and Akay 2026 (Frontiers, banned). Neely 2026 Infancy (already used by b1 and b2). Cole, Olvera, NIH and Lullaby Trust (sibling's sources). Barr 2026 (CC BY-NC). **Berg 2024 (PMC10918551) and Baxter 2025 (PMC11734948) were my first picks. Both were swapped out when `halloween-captions-for-kids` landed citing exactly those two papers.**

Caps: europepmc.org is exempt. **JMIR Pediatrics and Parenting is now in 3 b3 posts (captions-for-facebook, captions-for-kids, this one), which is at the journal cap.** No later post may use it. capcheck 2026-10-13: no banned URLs, no domain over cap.

## Brief claims checked
- BRIEF §4 says WebSearch is "probably still capped". It worked first time (1 search used).
- The verifier has no 5-word cross-batch overlap check (it only checks FAQ/heading token overlap), so I ran the overlap check separately (script in the scratchpad, slug-prefixed).
- `verify-batch.mjs` reports one problem: batch.json `blogs` does not list this slug. Per BRIEF §7 I did not edit batch.json; the orchestrator should add it.

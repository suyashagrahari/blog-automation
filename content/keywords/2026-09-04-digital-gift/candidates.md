# Phase 3 — candidates, before any SERP was run — 2026-09-04

Source: **5,018 unique India-geo autocomplete suggestions** from three seed
batches (`autocomplete.csv`, `raw2/`, `raw3/`), 4,285 of them 4+ words. Seeds:

```
batch 1  digital gift · online gift · virtual gift · digital invitation ·
         online gift ideas for girlfriend · virtual gift for boyfriend ·
         digital gift ideas · send gift online
batch 2  digital invitation card · online invitation · virtual gift ideas ·
         online gift for girlfriend · digital card for girlfriend ·
         online surprise for girlfriend · gift link · e gift card
batch 3  surprise link for girlfriend · website for girlfriend · webpage for
         boyfriend · online surprise for boyfriend · digital card for boyfriend ·
         virtual date night · digital love letter · qr code gift
```

**Batch 3 was the productive one.** Batches 1-2 returned mostly gift-card and
delivery intent; the product-shaped phrasings the site can actually win came
almost entirely from batch 3 seeds. `prefix_hits` is **ordinal demand from
Google, never a monthly figure.**

## Axes live for this category

| Axis | Live? | Why |
|---|---|---|
| 1 Modifier | **yes** | `free`, `online`, `best` — `free` already appears in 66 live slugs |
| 2 Audience | **yes** | gf / bf / her / him — the axis the user named |
| 3 Format | **yes, and it is the decisive one** | `link`, `website`, `web page`, `card`, `letter`, `maker`, `generator`. See the two-families finding in `shortlist.md` |
| 4 Action | **yes** | `send`, `make`, `create`, `share` |
| 5 Occasion | partly | birthday and anniversary only; festival occasions were harvested in the three previous runs |
| 6 Feature | **yes** | `with music`, `with code`, `with photo`, `with QR` — matches the product mechanic exactly |
| 7 Language | **queued, not spent** | 10 Hinglish rows surfaced (`online gift kaise bheje`); they need their own SERP pass and locale, so they are next-cycle, not cut |
| 8 Question | **yes** | `how to make a website for…`, `how do i make a digital card` |
| 9 Year freshness | no | almost no year-modified rows on this axis, unlike the festival runs |

## What was cut before a single search was spent, and why

| Removed | Reason |
|---|---|
| **1410** | gift-card/voucher intent — we do not sell stored value |
| **212** | outside the gf/bf axis the user named |
| **142** | invitation vertical, not partner gifting |
| **104** | physical-delivery or price-point intent |
| **95** | cross-border physical shipping |
| **71** | wedding-invitation vertical — a different template and a crowded paid market |
| **39** | in-app virtual-currency gifting on a third-party platform |
| **35** | no matching template |
| **28** | physical gift delivery — marketplace intent |
| **26** | local physical service or support lookup |
| **22** | definitional — Gate 5 reading intent |
| **20** | geo-modifier duplicate of the unmodified stem |
| **19** | wrong entity / corporate procurement |
| **19** | brand-navigational |
| **12** | friend axis — real vein, but the user asked for gf/bf; queued next-cycle |
| **10** | Hinglish/Devanagari — real vein, needs its own SERP pass; queued next-cycle |
| **8** | definitional — reading intent, Gate 5 |
| **8** | navigational to a marketplace |

**The 1,410-row gift-card cut is the single biggest fact in this file.** In
India, "digital gift" overwhelmingly means *stored value* — Amazon Pay vouchers,
Gyftr, Woohoo, brand e-gift cards. SubhSandesh does not sell stored value, so
that entire mass of demand is a Gate 5 conversion-fit cut, not headroom. Anyone
re-running this seed should expect the same ~1,400 rows and not mistake them for
opportunity.

**The 142-row invitation cut is the second.** The user asked specifically about
"best digital invitation gift". Autocomplete says `digital invitation` in India
means wedding, engagement, housewarming, annaprashan and rice-ceremony
invitations — an event-invitation vertical, not partner gifting. Three invitation
keywords were kept as SERP probes to test that rather than assume it. All three
came back owned by Canva, Greetings Island, Adobe, Paperless Post and Evite.

## Gate 3 / 8b — duplicates against the live site

**382 candidates** scored token-overlap ≥ 0.6 against an existing primary
keyword or a live blog slug and were removed as `improve-existing` /
`merge-into-existing` rather than shortlisted. Highest-overlap examples:

```
  1.00  digital gift ideas for girlfriend
        vs  digital gift ideas for girlfriend  [committed]
  1.00  online birthday gift ideas for girlfriend
        vs  birthday-gift-for-girlfriend-online  [live-slug]
  1.00  digital gift for girlfriend
        vs  digital gift ideas for girlfriend  [committed]
  1.00  online gift for boyfriend birthday
        vs  online-birthday-gift-for-boyfriend  [live-slug]
  1.00  online best gift for girlfriend birthday
        vs  birthday-gift-for-girlfriend-online  [live-slug]
  1.00  virtual gift for long distance girlfriend
        vs  virtual-gift-for-long-distance-girlfriend  [live-slug]
  1.00  digital gift for my girlfriend
        vs  digital gift ideas for girlfriend  [committed]
  1.00  digital gift to girlfriend
        vs  digital gift ideas for girlfriend  [committed]
  1.00  online gift for girlfriend birthday
        vs  birthday-gift-for-girlfriend-online  [live-slug]
  1.00  best online birthday gift for girlfriend
        vs  birthday-gift-for-girlfriend-online  [live-slug]
```

The language exception was applied: rows differing only by a named language were
not merged. None of the survivors differ only by language.

## Pre-clustering before spending SERP budget

1,367 surviving candidates collapsed to **1253 clusters** by normalising
abbreviation-only and trivial variants (`gf`↔`girlfriend`, `bf`↔`boyfriend`,
plural, `ideas`↔`idea`, stopwords). **Gender was deliberately preserved** —
`surprise link for bf` and `surprise link for girlfriend` are two clusters, and
the SERPs confirmed that: they share incumbents but not result order, and one of
them has our own page in it.

This is a heuristic applied *before* SERP data existed, purely to avoid spending a
search on a pure abbreviation restatement. The skill's real 8a rule — 3+ shared
URLs in the top 10 — was then applied to the measured SERPs; see `shortlist.md`.

## The 62 taken to Phase 4

  1. virtual gift for boyfriend
  2. online surprise for boyfriend
  3. surprise link for girlfriend
  4. digital card for gf
  5. digital card for boyfriend
  6. web page for boyfriend
  7. digital birthday card for boyfriend
  8. online surprise ideas for boyfriend
  9. digital love letter maker
 10. digital birthday card for girlfriend
 11. qr code gift generator
 12. virtual gift ideas for boyfriend
 13. digital card for love
 14. digital birthday wish for boyfriend
 15. online gift ideas for gf
 16. surprise link for bf
 17. digital love letter app
 18. virtual date with gf
 19. gift link for whatsapp
 20. virtual gift for boyfriend free
 21. virtual gift ideas free
 22. digital love letter for boyfriend
 23. gift link for gf
 24. digital card for boyfriend free
 25. digital gift for boyfriend
 26. how do i make a digital card
 27. virtual gift website free
 28. digital gift ideas for boyfriend
 29. digital love letter for him
 30. how to make a website for my boyfriend
 31. digital love letter website free
 32. digital love letter with code
 33. digital love letter with music
 34. how to make a website for girlfriend
 35. digital invitation cards online
 36. digital invitation card maker online free
 37. virtual date nights for long-distance couples
 38. best virtual gift for boyfriend
 39. website for girlfriend github
 40. website for girlfriend ideas
 41. virtual date night for long distance
 42. online gift maker for gf
 43. digital love letter for her
 44. free digital love letter for girlfriend
 45. digital love letter template
 46. virtual date night games free
 47. website for girlfriend free
 48. website for girlfriend reddit
 49. online gift maker for bf
 50. virtual gift link for boyfriend
 51. virtual gift ideas for her
 52. digital card maker for boyfriend
 53. propose day surprise link for girlfriend
 54. website for girlfriend anniversary ideas
 55. how to surprise your girlfriend on whatsapp
 56. digital gift for her
 57. virtual gift for girlfriend free
 58. digital sorry card for gf
 59. sorry surprise link for girlfriend
 60. surprise message link for girlfriend
 61. website for girlfriend surprise
 62. virtual gift for girlfriend

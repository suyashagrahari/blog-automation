# Remediation required — 2026-09-25-miss-you-30

**This batch is PUBLISHED.** Every fix below is an edit to a live post and needs a
republish, not a local-only change. Nothing here has been applied.

## 1. Three journals over the source cap

Measured 2026-09-28 by resolving every PMCID against Europe PMC metadata
(`../2026-09-26-miss-you-global-30/journalcheck.mjs --batch 2026-09-25-miss-you-30`,
run from the repo root). 81 PMC citations, 79 unique articles, 77 resolved.

This is NOT the same as the earlier figure I circulated. An earlier count taken by
grepping journal names out of post prose over-counted, because agents name journals in
running text including inside negations ("NOT Frontiers in Psychology"). Resolve-by-ID is
the only trustworthy method. In particular **Frontiers in Psychology is 4, not 5.**

Cap is 3 posts per publisher, so five citations must be swapped:

| Journal | Posts | Swaps needed |
|---|---|---|
| Behavioral Sciences (Basel) | 5 — funny-miss-you-quotes, miss-you-quotes-for-brother, miss-you-quotes-for-coworker, miss-you-quotes-for-grandmother, miss-you-quotes-for-wife | 2 |
| BMC Psychology | 5 — i-miss-you-letter, miss-you-quotes-for-dad, miss-you-quotes-for-grandmother, miss-you-quotes-for-mom, what-does-it-mean-when-he-says-i-miss-you | 2 |
| Frontiers in Psychology | 4 — funny-miss-you-quotes, how-i-miss-you-meaning, miss-you-quotes-for-brother, miss-you-quotes-for-her | 1 |

`miss-you-quotes-for-grandmother` and `miss-you-quotes-for-brother` each appear under two
over-cap journals, so choosing those two posts closes three of the five breaches at once.

A swap is not a find-and-replace. Whoever does it must confirm the replacement source
actually supports the claim the citation is attached to, and change the body prose if the
journal is named or quoted inline. If no replacement supports the claim, drop the claim —
do not substitute a weaker source that does not say it.

## 2. One citation whose journal is still unknown

`PMC13242563`, cited by **miss-you-quotes-for-sister**, would not resolve. Europe PMC
returned **HTTP 503 on seven consecutive attempts** across two sessions — a service fault,
not a missing record, so nothing can be concluded from it yet.

**It is not known to be safe.** If it resolves to Behavioral Sciences, BMC Psychology or
Frontiers in Psychology it adds a sixth required swap. Re-run the census when Europe PMC
is healthy before declaring this batch clean.

(`PMC10465319`, cited by miss-you-quotes-for-mom, did resolve on retry —
*Epidemiology and Psychiatric Sciences*, one post, no breach.)

## 3. Method note

Do not use `capcheck.mjs` alone to check this. It counts by hostname, and
`europepmc.org` is a repository appearing in 29 of this batch's 54 posts — it can never
name the journal that is actually full. That is what hid these three breaches until now.

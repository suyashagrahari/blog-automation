# BRIEF — WAVE 5 of `2026-09-15-virtual-gift-30`

**Read `BRIEF.md`, `BRIEF-WAVE2.md`, `BRIEF-WAVE3.md`, `BRIEF-WAVE4.md`. All apply.**
This file records only what is different. Your row is one of `WAVE5-PLAN.json`.

---

## 0. Good news: your SERP is a REAL India SERP

Wave 4's SERPs were Brave, US-served, and every wave-4 post had to caveat that.
**Wave 5 is DuckDuckGo `kl=in-en` — genuine India results.** You may treat positions as
India-served. Say so plainly; do not copy wave 4's US-served caveat, it does not apply.

If you need one more query: `node scripts/serp-ddg.mjs "<q>" --region in-en`. One or two
calls, never a loop — it rate-limited the whole sandbox mid-run last session. Brave
(`scripts/serp.mjs`) also works but is US-served, so prefer DDG. Firecrawl returns 402.

## 1. This wave opens the FAMILY and FRIEND ground

86 posts exist and they skew heavily partner-facing. Wave 5 targets sister, brother,
parents, mom, and friends — recipients the batch has barely touched. The
`how to surprise <person>` shape continues to hold on India SERPs: 4–8 of 10 editorial,
low ecommerce, low vendor.

**This changes the register completely, and that is the craft problem of the wave.**
Almost every romantic convention in the other 86 posts is wrong here: no midnight
declarations of love, no "I can't live without you", nothing that reads as courtship.
A page for a sibling or a parent has to be warm without being romantic, and funny
without being cruel. Say that in the post where it helps the reader — it is the single
most useful thing you can tell someone making their first non-romantic page.

**For parents specifically:** many Indian parents are less phone-fluent than the sender.
A link that needs an account, a scroll gesture, or a password they must remember is a
worse gift than a phone call. Be honest about that.

## 2. Templates: the joke set finally has a right home

Several templates are **jokes by design** and have been under-used because they are
wrong for earnest romance. They fit siblings and friends far better:
`/court-of-love` (a trial with a penguin judge), `/legal-notice` (a mock summons),
`/challan` (a mock traffic notice), `/nutrition` (a nutrition label where the product
is a person), `/searched` (joke search results about them), `/flags` (Red Flag, Green
Flag). **Read each one's real description in `app/lib/prompt.ts` before writing about
it.** Describing a joke template earnestly reads as though you never opened it.

Template saturation is real: `/love-gf` is in 22 of 86 posts, `/bouquet-gf` 13,
`/photo-puzzle` 8. Use the ones your row names; if one genuinely does not fit, say so in
the audit, pick a better one from `TEMPLATE_LINKS`, and name the swap.

## 3. Anti-cannibalisation — read your `mustReadSibling`

Five rows carry a `mustReadSibling` in the plan. **Read that file in full before
drafting**, state the split in one sentence in your audit, and cross-link it.

Known tight pairs inside this wave — check `blogs/` for the sibling before you finalise
H2s, and do not target its primary as your secondary:
- `how-to-surprise-your-sister` vs published `birthday-surprise-page-for-sister`
- `how-to-surprise-a-friend-on-their-birthday` vs `how-to-surprise-best-friend-birthday-online`
  (one is general and offline-inclusive; the other is explicitly online)
- `how-to-surprise-mom-on-her-birthday` vs `how-to-surprise-your-parents`
  (mom is a subset of parents — the parents row must be about *both*, and about the
  case where they are together)
- `how-to-surprise-husband-on-birthday` vs published `how-to-surprise-husband-on-anniversary`
  (a birthday is *his* day; an anniversary is a shared one — that is the whole split)

**Four rows aborted across waves 3–4, every one correctly.** Three of those collisions
were TOPICAL and invisible to URL-overlap screening — an agent caught each by reading
siblings. **Grep `blogs/` for your subject, not just your keyword.** If a published post
already makes your argument, find a different one or abort: emit the research brief,
write no blog JSON, report with reasoning. A twin is worse than a missing post.

## 4. Sources — 15 domains are at cap

**Banned (at 3):** `arxiv.org`, `cyberpsychology.eu`, `dash.harvard.edu`,
`developer.mozilla.org`, `europepmc.org`, `frontiersin.org`, `gsb.stanford.edu`,
`journals.plos.org`, `ojs.zrc-sazu.si`, `osf.io`, `pewresearch.org`,
`pmc.ncbi.nlm.nih.gov`, `repository.lsu.edu`, `research.tue.nl`, `research.vu.nl`.
Re-read `SPENT-SOURCES.json` and check siblings' `sources` before committing — 86 posts
have spent 367 URLs across 294 domains.

**Route that works: Crossref → Unpaywall → OA landing page.**
`https://api.unpaywall.org/v2/<doi>?email=suyash.agrahari@hirequotient.com` names the OA
location, letting you skip blocked hosts before spending a fetch. OpenAlex may have
reset (try once, never loop); Semantic Scholar and CORE were 429ing; DOAJ 502ing.
403/bot-challenged: sagepub, sciencedirect, mdpi, biomedcentral, escholarship, SSRN,
Wiley, Springer, nature.com.

**PDFs do not parse here** — every source is an abstract-and-metadata read; record that.

Search the phenomenon: `sibling relationship quality adulthood`, `intergenerational
family ritual`, `friendship maintenance behaviours`, `birthday ritual significance`,
`filial piety gift giving`. If nothing topical exists, **say so and name the terms you
tried** — three wave-4 posts did exactly that and it is a real finding, not a failure.

## 5. Pricing — still empty

`content/facts.md` `## Pricing` is **EMPTY**. The verifier treats a priced phrase as a
hard `COST CLAIM`; it caught six wave-3 drafts. Never invent, infer or imply a price;
say it cannot be confirmed and link `/templates`. A wave-4 agent fetched the live site
and confirmed **no price string is in the served HTML**, so there is nothing to quote.

## 6. First-party facts

**CORRECTION — this section was wrong when first written, and a wave-5 agent caught it.**

`content/facts.md` was **regenerated 2026-09-24**, not 2026-09-15. The numbers moved
materially and the earlier version of this section listed figures that are no longer in
the file. **Read `content/facts.md` yourself and cite the dates on its own lines.** Do
not cite 2026-09-15 for anything you take from it today.

What changed, so you recognise a stale figure if you see one in a sibling:

| | superseded (2026-09-15) | current (2026-09-24) |
|---|---|---|
| pages created | 4,357 across 16 types | **5,199 across 21 types** |
| #1 page type | /love-gf 25.8% | **/apology-dashboard 1,396, 26.9%** |
| #2 / #3 | /bouquet-gf, /apology-dashboard | **/bouquet-gf 22.9%, /love-gf 22.7%** |
| registered creators | 3,377 @ 1.29 each | **3,843 @ 1.35 each** |
| recorded views | 49,968 @ 11.5/page | **57,456 @ 11.1/page** |
| password-protected | 40.6% | **38.5%** |
| median first-save→last-edit | 6.2 h | **2.5 h** |

**Posts written in waves 1–4 cite the 2026-09-15 figures with that date attached. Those
are not errors** — they were true when measured and are labelled accordingly. Do not
"correct" a sibling. Just do not mix the two vintages inside your own post.

**The headline change is worth using:** the apology dashboard has overtaken the "I love
you" page as the most-created template. That is a real shift in what this audience
builds, it is one week old, and no competitor can publish it.

Phase 0 still blocks: 3 relevant facts, 2 in the first 150 words. Check three siblings
and open with a pair nobody near you has used.

**Critical for this wave: the database records which TEMPLATE was opened, never who
received it.** A `/love-gf` count does not prove a girlfriend received it — and in a
post about a sister, brother, mother or friend that caveat is not optional. Disclose it
in body prose wherever you cite template counts.

## 7. Before reporting

```
node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30
```
Act ONLY on lines naming your own slug. **Ignore every source-cap finding** — the
orchestrator enforces caps at quiescence; a mid-write cap report was a false alarm in
wave 3 and acting on one in wave 1 stripped a legitimate source from a finished post.
**Ignore the batch-wide `batch.json` line.** A structural failure stays `failed` with an
honest `why` — never delete an item to make the count green.

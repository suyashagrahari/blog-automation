# Site baseline — subhsandesh.in · 2026-09-16

Source: `npm run keywords:inventory` · **Search Console export: no (asked 2026-09-16 — ninth run asking)**

## What we already cover

**297 drafted posts across 22 batches** · 434 keywords shortlisted by past runs ·
full list in `content/keywords/site-inventory.csv`.

Separately, `content/keywords/strapi-live-articles.json` holds **905 live articles** —
the repo's `content/batches/` is only a third of what is published, so Phase 8b was run
against the live file, not the batch inventory.

### Proposal-territory coverage

| Source | Count |
|---|---|
| Drafted posts in `content/batches/` mentioning propose | **3** |
| Keywords researched across 4 prior runs mentioning propose | **5 of 434** |
| **Live articles in proposal territory** | **46 of 905** |

The batch inventory says this axis is untouched. The live corpus says it is the
site's **most-covered single territory**. Both are true, and only the second one
matters for Phase 8b.

The 46 live proposal pages:

```
anime-theme-dynamic-proposal-webpage-maker-free          moving-items-dodge-no-response-proposal
be-my-girlfriend-interactive-card-builder-online-free    password-protected-marriage-proposal-web-landing-page
best-text-wording-will-you-be-mine-layout                personalized-digital-marriage-proposal-template-online
create-a-custom-countdown-link-to-the-exact-proposal-moment   proposal-page-template-with-yes-or-no-button
create-interactive-proposal-website-girlfriend           proposal-website-with-built-in-email-response-capture
creative-layout-milestone-anniversary-proposal-site      romantic-letter-drop-space-page-custom-unlock
custom-background-video-proposal-web-landing-page-free   romantic-proposal-timeline-web-page-with-interactive-maps
custom-proposal-landing-page-builder-with-photo-upload   romantic-text-effects-generator-for-custom-proposal-link
custom-response-redirect-proposal-yes                    surprise-online-partner-with-custom-webpage
cute-kitten-theme-will-you-be-my-girlfriend-web-layout   will-you-be-my-date-interactive-card-download-hd
cute-visual-novel-style-proposal-page-with-choices       will-you-be-my-lifetime-partner-single-web-link
digital-proposal-book-template-with-page-turn-animation  will-you-be-my-prom-date-dynamic-link-builder
embed-openstreetmap-romantic-landmarks                   will-you-be-my-valentine-custom-audio-link-maker
funny-will-you-be-my-girlfriend-page-with-dodging-no-button   will-you-be-my-valentine-link-with-button-selection
handle-proposal-responses-real-time-push-notification    will-you-go-out-with-me-click-button-tracker-link
heart-breaking-no-button-alternative-options-proposal-tool    will-you-marry-me-flash-animation-page-code-copy-paste
how-do-i-build-a-proposal-page-with-yes-and-no-option    will-you-marry-me-interactive-website-builder
how-to-code-a-moving-button-proposal-website-for-crush   will-you-marry-me-marquee-scrolling-text-generator-link
how-to-create-a-secret-link-proposal-website-for-girlfriend   will-you-still-love-me-interactive-test-page-builder
how-to-design-surprise-virtual-scavenger-hunt-proposal   wording-ideas-tracking-yes-no-proposal-page
how-to-trick-your-girlfriend-with-a-fake-quiz-link-proposal   interactive-love-quiz-proposal-website-template-free
interactive-prompter-link-what-if-i-say-yes-proposal     interactive-puzzle-solver-unlock-romantic-confession-link
interactive-romantic-choice-tree-builder-mobile          make-your-own-dynamic-yes-no-choice-love-card-online
```

**What they are:** builder / tool / code-angle, English-only, Western-flavoured
(prom, Valentine, crush, "copy-paste flash animation").

**What they are not:** Propose Day (the Indian 8 February occasion), any Indian
language, or the how-to-propose advice angle. Those three axes carry
**1,772 of the 4,788 autocomplete suggestions** harvested this run and have **zero**
live pages between them.

## Own it already — improve, don't rewrite

| Keyword | Our URL | Our position | Impressions/mo | Action | The specific edit |
|---|---|---|---|---|---|
| proposal website for girlfriend free | /blog/create-interactive-proposal-website-girlfriend | **not in top 20** (`site:` check) | unknown — no GSC | merge-into-existing | Put "free" in `<title>` and H1. Every incumbent leads with it; this page never states a price |
| proposal website for girlfriend | /blog/create-interactive-proposal-website-girlfriend | **not in top 20** (`site:`) | unknown | merge-into-existing | Same page — 0.60 token overlap, one SERP |

Positions are from a `site:` + query check on 2026-09-16, **not** from Search Console.

**This table should be forty rows long and it is two.** 44 of the 46 live proposal
pages were not visible in any of the 11 SERPs measured, and this repo has no way to
tell whether they sit at 11-20 (an edit) or nowhere (a rewrite). That distinction is
the highest-value unknown in the run.

## Shortlisted in a past run, never written

**244 keywords** across 22 batches were shortlisted and never drafted. Checked for
propose territory: **5 matches**, all already actioned —

| Keyword | Run | Bucket then | Still valid? |
|---|---|---|---|
| propose day gift for girlfriend | 2026-09-02-bouquet | shortlisted | **Drafted and live. Now cut G5** — it does not rank and the SERP is physical retail |
| flowers to propose a girl | 2026-09-02-bouquet | shortlisted | Drafted and live |
| how many roses to give for proposal | 2026-09-02-bouquet | gate-4-zero-weak | Still a correct cut |
| propose day surprise link for girlfriend | 2026-09-04-digital-gift | priority 9/9 | **Never drafted. Still valid — it is the `virtual propose day` cluster in this run's #1 slot** |
| online propose day gift for girlfriend | 2026-09-15-virtual-gift-100 | priority 6 | Drafted 2026-09-15. Now cut G5 |

`propose day surprise link for girlfriend` was scored 9/9 eleven days ago and never
written. This run independently re-derived the same cluster from live autocomplete.
That is two runs agreeing, and it is the strongest single signal in the baseline.

## Own-site collisions — the site competing with itself

`npm run keywords:inventory` reports **88 collisions at overlap ≥ 0.6** across the
whole site. None involve a proposal keyword. No decision needed for this run; the 88
remain an open debt for a dedicated pass.

**One methodology note that changes results.** The script's token-overlap measure
produced 20 false-positive merges on this run's keywords — `propose day quotes` →
`girlfriend-day-quotes` at 0.67, `online proposal card` → `sorry-card-online` at 0.67,
`virtual proposal ideas for long distance relationship` →
`virtual-flowers-for-long-distance-relationship` at 0.67. Those are different
occasions and different products, so they are different SERPs with different
incumbents — merging them would have deleted the page, not saved a write.

`gates.md` already carves out a **language exception** for exactly this failure. This
run added two more of the same shape in `build-inventory.mjs`:

- **occasion exception** — different occasion named (propose day vs girlfriend day vs birthday) → overlap 0
- **subject exception** — one names propose/proposal/will-you-be-my and the other does not → overlap 0

With all three applied, 8b returns **2 genuine merges** instead of 20. Worth folding
back into `scripts/site-inventory.mjs`, where the same false positives will be
inflating the 88.

## Drafted with no harvest evidence

Reported by the script across the whole site. Not segmented for propose territory
because only 3 batch posts exist there. These remain the likeliest underperformers and
the best striking-distance candidates **once Search Console data exists**.

## First-party demand (`content/facts.md`)

Two facts used as tie-breakers, both measured 2026-09-15:

1. **"I love you" page (`/love-gf`) — 1,125 created, 25.8% of all pages; 16,201 views,
   32.4% of all page views.** It is the #1 template by both creation and reach. A
   proposal page is the same mechanic with a different question on it, and there is no
   dedicated `/propose` template — which is why every shortlisted tool page in Part 2
   maps to `/love-gf`. This is the tie-breaker that put `virtual propose day` above
   `virtual proposal card`.

2. **40.6% of creators password-protect their page before sharing it (1,767 of
   4,357).** A proposal is the single most protection-sensitive thing on the platform,
   and `password-protected-marriage-proposal-web-landing-page` is already live. Any
   Part 2 post can cite a real 40.6% rather than asserting that privacy matters — which
   is what makes a page citable by an answer engine.

**Not used as a filter.** Both are tie-breakers between clusters that had already
passed Gates 0-6 on SERP evidence.

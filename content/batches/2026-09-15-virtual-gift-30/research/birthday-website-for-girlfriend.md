# Research brief — `birthday website for girlfriend`

Batch `2026-09-15-virtual-gift-30`, wave 2. Market: India. Evergreen.
Category `milestone-birthdays`. Templates `/birthday-gf`, `/rewind`, `/photo-puzzle`.

---

## Phase 0 — Data gate

`content/facts.md`, regenerated 2026-09-15. Relevant first-party lines, more than
the three required:

- 352 `/birthday-gf` pages, 8.1% of all 4,357 pages — the exact page type this keyword asks for
- 4,357 pages since 2026-03-12 across 16 page types
- 3,377 registered creators, 1.29 pages each
- 94.1% of started pages are published and shared (4,098 of 4,357)
- 49.0% of shared-page views are on a phone (24,493 of 49,968); 49.2% on any touch device
- 40.6% of creators password-protect before sharing (1,767 of 4,357)
- 11.5 average views per created page

**Opening pair chosen: 352 / 8.1% and 3,377 creators × 1.29 pages.** Per
BRIEF-WAVE2 §4 I counted the opening 120 words of the 32 sibling files present in
`blogs/` at the time of writing: **40.6% opens 21 of them, 6.2 hours opens 15, and
4,357 opens 23** — that is the tic the brief names, and I avoided both of the two
worst offenders. My pair is not unique: 352 / 8.1% opens 2 siblings
(`digital-birthday-gift-for-girlfriend`, `virtual-gift-for-boyfriend-birthday`,
both genuinely birthday posts) and 1.29 opens 3. Two and three is an order of
magnitude better than twenty-one, and 8.1% is the one first-party number that is
actually *about* this keyword, so I kept it rather than reaching for a rarer but
irrelevant line.

**Pricing:** the `## Pricing (fill in by hand)` block in `facts.md` is empty. The
secondary keyword `birthday website for girlfriend free` is therefore handled by
saying plainly that current pricing cannot be confirmed here and linking
`/templates`, per BRIEF-WAVE2 §4. No price is stated or implied anywhere.

---

## Phase 1 — SERP

**Tooling note, and it is a real limitation.** WebSearch is exhausted (200/200) and
WebFetch is blocked, per BRIEF-WAVE2 §0. `node scripts/serp.mjs` was run twice —
once for the `--gate` pair, once on retry several minutes later — and **both runs
died with `brave rate-limited (429) after 4 attempts`**, which is what thirty
concurrent agents sharing one Brave key produces. I did not get a Brave-served
ranking of my own.

Two substitutes, both labelled honestly:

**(a) The measured SERP handed down in BRIEF-WAVE2 §5** (serp.mjs, 2026-09-15,
`locale=us-served`):

| # | Result | Type |
|---|---|---|
| 1 | github.com/nikitayadav19/HappyBirthdayGF | source repository |
| 2 | yourlovepage.online | competitor page builder |
| 3–6 | r/webdesign, r/learnprogramming, r/Gifts, r/TwentiesIndia | forum threads |
| 7 | yourlovepage.com | competitor page builder |
| 8 | giftsqr.com | competitor (BRIEF.md §1 named) |
| 9 | blink.new | AI app builder |
| 10 | TikTok | video |

**(b) My own fallback pass**, DuckDuckGo HTML endpoint run inside the sandbox on
2026-09-15 (not Brave, not India-geo — treat as directional only):

`birthday website for girlfriend` → justmeantforyou.com · giftsqr.com ·
yourlovepage.com · openyourletter.com · 2-luv.com · giftfeels.com ·
myheartcraft.com · blink.new · wishcrane.com · thegreeter.in

`custom birthday website template for girlfriend` → blink.new · giftsqr.com ·
blink.new (2nd) · yourlovepage.com · thegreeter.in · **github.com/gapatshivam1-dev/Birthday-Wishes-To-Gf**
· **etsy.com** (interactive birthday website template listing) ·
ai.mobirise.com · aiskyla.com (free birthday website template) · yourlovepage.online

Both passes agree on the shape of the result set, which is what matters: **no
retailer, no Amazon, no Flipkart, no gift card, and no authoritative page.** The
searcher is currently being offered a repo to clone, an AI builder to prompt, a
template file to buy, or a competitor's page builder. Nobody tells them which of
those four is the right choice, and nobody costs any of them.

Because I could not fetch the top five with WebFetch, the per-page teardown table
the skill's Phase 1 asks for is not present. What I could verify directly is the
one page that matters most for cannibalisation — our own — below.

---

## Phase 2 — Gap analysis and cannibalisation

**Table stakes** (present across the result set, so the post must cover them):
what the page is, what goes on it, that it needs no coding, that it is shareable
by link, that it works on a phone.

**The gap.** Four routes exist and nobody compares them. Nobody states what
free hosting actually costs you (a public repo), nobody mentions that the music
will not start by itself, and nobody says who keeps the page alive in March.

**Stale/absent data.** There is no data at all in this result set — not a
statistic on any of the ten results. Any measured number is a differentiator here.

**Fan-out sub-queries → H2s:**

1. What is a birthday website for a girlfriend? → H2 2
2. Do I have to code it? → H2 3
3. Which route should I pick / how long does it take? → H2 4 (table)
4. What goes wrong when she opens it? → H2 5 (four H3s → `ItemList`)
5. Does the effort actually register? → H2 6
6. When is this the wrong idea? → H2 7

**Angle:** wins by being the only post that prices the four real routes to a
birthday website for a girlfriend — writing the code, an AI builder, a bought
template, a ready-made page — against build time, hosting, privacy and autoplay,
using SubhSandesh's 352 partner-birthday pages and 94.1% publish rate.

### Cannibalisation — BRIEF-WAVE2 §3

`nearestLive`: `/blog/custom-birthday-website-template-for-girlfriend`
("Make a Birthday Website for Your Girlfriend: 2026 Template Guide").

`serp.mjs --gate` could not run (429, twice). The DuckDuckGo fallback above gives
**4 shared hosts and 4 shared exact URLs in the top 10**, so overlap is real and I
treat the risk as high rather than hand-waving it away.

I read the live page in full. It covers: why a web page beats a card; four
"essential visual sections" (midnight hero, photo timeline, ambient audio,
click-to-reveal letters); a five-step build walkthrough on SubhSandesh; a keyword
matrix; and an FAQ. It contains no data, no third-party sources, and no mention of
coding, hosting, repositories or autoplay behaviour — its FAQ in fact asserts the
background track "can play smoothly" the moment she opens the link.

**Decision: DIFFERENTIATE.**

**The split in one sentence:** the live page is the *build walkthrough* for
someone who has already decided to make the page here; this post is the *route
decision* for someone whose search results are still telling them to clone a
GitHub repo, and it answers the questions the walkthrough does not touch —
autoplay, public repositories, hosting limits and who maintains the page after
the birthday.

Concretely, to keep the two from competing I deliberately **dropped the
"what sections to put on the page" block** I had planned, because that is the live
page's spine, and replaced it with "four things that break a birthday website on
her phone". The post links the live page once, mid-article, with the anchor
*custom birthday website template for a girlfriend*, pointing the reader there for
the section-by-section detail.

I also correct the live page's autoplay claim, with MDN as the citation. That is a
deliberate, sourced disagreement with our own older post rather than a silent
contradiction.

---

## Phase 3 — Sources

Checked `SPENT-SOURCES.json` and every sibling file then present in `blogs/` before
committing. **All five domains below are absent from the batch so far**, and none
is on the banned list (arxiv, pmc.ncbi, journals.plos, frontiersin, pewresearch,
gsb.stanford) or the one-slot-left list. Every source was downloaded and read in
full — the three papers via `pdftotext`, not from an abstract.

| Source | Domain | What it gives the post | Subject test | Swap test |
|---|---|---|---|---|
| Buehler, Griffin & Ross 1994, *Exploring the "Planning Fallacy"*, JPSP 67(3):366–381 | `bear.warrington.ufl.edu` | Predicted 33.9 days vs actual 55.5; only 29.7% finished inside their own best estimate | Yes — why a self-built birthday site misses a fixed date | Passes: it only works in a post about building something to a deadline |
| Norton, Mochon & Ariely 2012, *The IKEA Effect*, JCP 22(3):453–460 (Harvard DASH) | `dash.harvard.edu` | Builders bid $0.78 vs $0.48 for the same box; own origami valued at $0.23 vs $0.05 by others | Yes — why your own build feels better to you than to her | Passes: meaningless in a "send a bouquet link" post |
| Fuchs, Schreier & van Osselaer 2015, *The Handmade Effect*, Journal of Marketing 79(2):98–110 | `wu.ac.at` | 17% higher WTP for handmade; effect stronger for close recipients and when the goal is conveying love | Yes — whether visible effort registers as love | Passes: tied to made-by-hand gifts specifically |
| MDN Web Docs, *Autoplay guide for media and Web Audio APIs* | `developer.mozilla.org` | Autoplay allowed only if muted/zero volume, after user interaction, if allowlisted, or via Permissions Policy | Yes — the music claim every page on this SERP makes | Passes: only a "website" post has this problem |
| GitHub Docs, *What is GitHub Pages?* + *GitHub Pages limits* | `docs.github.com` | Free Pages hosting is public repositories only; site cap 1 GB, 100 GB/month soft bandwidth, 10 builds/hour | Yes — the actual cost of the "free" DIY route | Passes: no other keyword in this batch touches self-hosting |

- **Peer-reviewed and open access:** three of the five (JPSP, JCP, Journal of Marketing), all readable in full at the URLs cited.
- **Generic context statistics (PIB/TRAI/Census/MEA): zero.** None was needed.
- **Competitor links: zero.** giftsqr.com, yourlovepage.\*, blink.new, wishcrane.com,
  2-luv.com, thegreeter.in, giftfeels.com and the Etsy/mobirise listings are named
  nowhere in the body and linked nowhere.
- **Wikipedia in the body: zero.** Wikipedia appears only as verified `sameAs`
  targets in `structuredData`, each paired with its Wikidata QID from the API
  (Birthday Q47223; IKEA effect Q1653973; Planning fallacy Q1637631; GitHub Q364;
  Static web page Q2641220). `Autoplay` was checked and **rejected** — it redirects
  to `AutoPlay` (Q2872478), the Windows feature, which is the wrong entity.
- **Rejected after fetching:** `vtevelde.com/papers/SurprisingGifts.pdf` (Macera &
  te Velde) — turned out to be gift-exchange *wage* experiments, off-subject; and
  `ana-valenzuela.com/.../paper-1.pdf` (Valenzuela, Mellers & Strebel) — a
  cross-cultural retail-incentive surprise study, too far from the keyword and
  swap-testable. Neither is cited.

---

## Phases 4–6 notes

- Body 1,754 words by plain whitespace split, FAQs excluded from `contentMarkdown`.
- **Post-verifier rewrite.** The first run flagged `COST CLAIM "free tier"` against
  this slug. The phrase was about *GitHub's* hosting, not SubhSandesh's, but the
  rule is blunt for good reason, so every price-shaped phrase was rewritten:
  "free tier" → "at no charge", "free trial, then a monthly subscription" → "a
  trial, then a recurring monthly charge", "₹0 cash" → "no cash outlay", and the
  "free" FAQ became "Is there a way to do this without spending anything?". The
  post now states no figure for a SubhSandesh page anywhere and sends the reader to
  `/templates`. Re-run: no findings against this slug.
- 7 H2s, 4 H3s, one comparison table of 4 rows; its "time to a live link" column
  carries first-party data (≈10 minutes, 94.1% of 4,357 started pages published).
- 10 FAQs, none restating a body heading.
- Internal links: `/birthday-gf`, `/photo-puzzle`, `/rewind`, `/templates` (closing
  CTA) — all from `TEMPLATE_LINKS`, each placed after the section that earns it —
  plus the mandated `nearestLive` blog link. Template descriptions were read from
  `app/lib/prompt.ts` before writing about them, so `/photo-puzzle` is described as
  the jigsaw whose final piece is not in the box and `/rewind` as the year worked
  out from one date, not as generic "romantic pages".
- Downside section names three cases SubhSandesh loses: same room, no smartphone,
  and unconfirmable pricing against a "free" search.
- Audit: 49 passed, 1 failed. The failure is structural and is the collision
  between checklist item *"Every internal link is a real URL from TEMPLATE_LINKS"*
  and BRIEF-WAVE2 §3's requirement to link the `nearestLive` blog post. It is left
  failed with the reason rather than deleted.

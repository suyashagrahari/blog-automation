# Research brief — `digital gift box free`

- **Slug:** `digital-gift-box-free` (verified free in Strapi on 2026-09-16 — `filters[slug][$eq]` returned `[]`)
- **Wave:** 3, row 13 of `WAVE3-PLAN.json` (tier B, gate2 PASS, overlapWithWritten 2, overlapWithNewRow 3)
- **Category:** `digital-gifts-romance` · **Templates:** `/bouquet-gf`, `/vending-machine`, `/templates`
- **Lane:** the gift box as a **container / unboxing metaphor** — the reveal, the unwrapping,
  opening something rather than receiving something flat. Not a "what is a virtual gift"
  explainer (both of those are published) and not a gift-ideas roundup.

---

## Phase 1 — SERP analysis

India SERP (`ddg-html`, `kl=in-en`, collected 2026-09-16, `SERPS-WAVE3.md`). **All ten
results are competitor product landing pages. Zero informational results.** Every one is
on the wave-3 banned list (`BRIEF-WAVE3.md` §1) — read for gap analysis only, never cited
and never linked.

| # | Page | Words (body text) | Structure | Direct answer? | Data cited | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | aiskyla /free-virtual-gift-box | ~379 | H1 + How It Works (3 numbered H3s) + Tips + Why Choose + Testimonials + FAQ + CTA | No — "Free Virtual Gift Box 🎁" then straight to the builder | none | FAQ section, no JSON-LD | conversion to the builder |
| 2 | surprises.gift /virtual-gift-box | ~326 | H1 + "What You Can Create" only | No | none | JSON-LD present, no FAQ | conversion |
| 3 | gifft.me /create/gift-box | ~574 | Inspiration + H1 + FAQ (4 H3s) + brand blurb | No | none | FAQ + JSON-LD | conversion |
| 4 | openagift /templates/unwrap-a-gift | ~997 | How it works + Pick the wrapping + Questions + More ways + CTA | Partially — describes the unwrap flow | none | JSON-LD, mentions **watermark** | conversion |
| 5 | boxofjoy.fun | ~793 | H1 "Create a Surprise Gift Box", language switcher, feature blocks | No | none | no JSON-LD; mentions account, **no login** | conversion |
| 6 | giftsqr.com/en | ~969 | H1 + 13 emoji-headed surprise types | No | none | JSON-LD | conversion |
| 7 | virtualgift.me | ~984 | H1 "…in minutes for free" + feature H3s + social proof | No | none | mentions **premium** | conversion |

Tone across all seven: third person, feature-led, no author byline, no dates, no
citations, no downside anywhere. None is longer than 1,000 words of real body text.

**Nine of the ten result titles contain the word "free"** (only boxofjoy.fun does not) —
counted by hand from `SERPS-WAVE3.md` on 2026-09-16. That count is the one number in the
post's "free" section and it is our own measurement, not a borrowed claim.

---

## Phase 2 — Gap analysis

**Table stakes** (everyone covers, so we must too): what a digital gift box is; that it
arrives as a link; that nothing ships and no address is needed; that you can put photos,
a message and music inside; that it works on a phone.

**The gap — four things nobody on the SERP touches:**

1. **Why the unwrapping step works at all.** Every page sells "interactive unwrapping"
   and not one explains the mechanism. This is a studied phenomenon (ritual before
   consumption; the unboxing genre) and no competitor cites any of it.
2. **What "free" actually gates.** Nine of ten shout the word; the trade-offs are
   visible on the products themselves — a watermark (openagift), ads (gifft.me's own
   help answer "How can I remove ads?"), a required account, and a retention limit
   ("How long are gifts kept?") — and none of them names the trade-off up front.
3. **What happens after the box is opened.** No page covers the second week: whether
   the link persists, who is hosting it, whether the contents should be kept elsewhere.
4. **When the format is the wrong choice.** Zero downsides across all ten pages.

**Stale data:** none — the competitors cite no data at all, which is itself the finding.

**Unanswered questions they raise and drop:** how long a gift is kept (gifft.me asks it
of itself); how to remove ads; whether a recipient needs an account.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what is a digital gift box | What a digital gift box actually is |
| why does unwrapping feel better | Why the unwrapping step is the gift |
| are unboxing videos really a thing | What the unboxing genre already proved |
| is a digital gift box really free | What "free" usually covers, and what it usually gates |
| digital gift box vs gift card vs parcel | Five ways to send the same message, compared |
| how do I make a digital gift box | How to build one that survives the first tap |
| how long does the link last | What happens after it is opened |
| when should I not send one | When a digital gift box is the wrong thing to send |

**Angle:** wins by being the only page on this search that explains why the unwrapping
step is the gift — pairing four experiments on ritual-before-consumption and three
studies of the unboxing genre with SubhSandesh's own bloom-open bouquet at 1,070 pages
and 24.6% of everything built — and the only one that refuses to state what free costs,
because our published data carries no figure.

---

## Phase 3 — Sources

Route used: **Crossref → Unpaywall**, exactly as `BRIEF-WAVE3.md` §3 (updated) prescribes.
OpenAlex returned HTTP 429 on all three attempts and was abandoned without a retry loop;
DOAJ returned HTTP 502 on the second round; Semantic Scholar and CORE were not attempted
after the OpenAlex result. Search terms tried: `unboxing experience anticipation`,
`packaging ritual consumer`, `gift wrapping perceived value`, `delayed reveal savoring`,
`blind box mystery box consumer uncertainty`, `freemium free version limitations`,
`consumers pay with personal data free online services`, `dark patterns online services`.

**PDFs do not parse in this sandbox. All four sources below were read as abstract +
metadata only; none of the full texts was read.** This is recorded in the post's Sources
list and in the audit.

| Source | Domain | Published | What it gives the post | Subject test | Swap test |
|---|---|---|---|---|---|
| Vohs, Wang, Gino & Norton, *Rituals Enhance Consumption*, Psychological Science 24(9) 1714–1721 — https://dash.harvard.edu/entities/publication/73120378-af41-6bd4-e053-0100007fdf3b | dash.harvard.edu — **at 2 posts when chosen, now 4** (see the audit failure below) | 2013-07-17 | Ritual before consumption raised flavour, value and savouring; random gestures did not; a **delay** between ritual and consumption raised enjoyment; doing it yourself beat watching | Pass — about the ritual of opening, not about India | Pass — only a post about a reveal-with-a-delay needs the delay finding |
| Nicoll & Nansen, *Mimetic Production in YouTube Toy Unboxing Videos*, Social Media + Society 4(3) 1–12 — https://eprints.qut.edu.au/127089/ | eprints.qut.edu.au (new to the batch) | 2018-07 | The unboxing genre exists at scale: adults and children film themselves unpacking commercial toys | Pass | Pass |
| Li, *On Brown Boxes: Hidden Interdependence in Unboxing Videos*, AoIR Selected Papers of Internet Research — https://spir.aoir.org/ojs/index.php/spir/article/view/11969 | spir.aoir.org (new) | 2021-09-15 | Names the mechanism: "brown-boxing" as concealment — the box hides, the reveal is the event | Pass | Pass |
| Othman & Shanat, *Emotional Design in Packaging: Enhancing the Unboxing Experience*, IJACA 9(1) 68–80 — https://publisher.unimas.my/ojs/index.php/IJACA/article/view/11049 | publisher.unimas.my (new) | 2026-06-30 | Thematic case study of **nine** high-engagement YouTube unboxing videos; sensory appeal + usability + storytelling raised perceived value | Pass | Pass |

Peer-reviewed and open-access: Vohs et al. (Psychological Science, OA via Harvard DASH)
and Nicoll & Nansen (Social Media + Society, CC BY-NC). Generic context statistics used:
**zero**. Wikipedia body links: **zero** — Wikipedia/Wikidata appear only as `sameAs`
entity references in `structuredData` (Unboxing Q2492568, Gift wrapping Q1516291,
Gift Q184303, all verified against the Wikipedia API on 2026-09-16).

**Checked before committing:** none of the four URLs appears in `SPENT-SOURCES.json`;
no sibling in `blogs/` cites `spir.aoir.org`, `eprints.qut.edu.au`, `publisher.unimas.my`
or this DASH record.

**What could not be sourced.** No citable, fetchable research was found for the "what
free costs" section — the concrete evidence (watermark, ads, forced account, retention
limit) sits in competitor product copy, which `BRIEF-WAVE3.md` §1 bans from citation and
linking. That section therefore rests on our own SERP count (9 of 10 titles say "free",
counted 2026-09-16) and on named-but-unlinked behaviour, not on a third-party source.
Blocked or rate-limited while looking: `sagepub.com`, `tandfonline.com`, `ieeexplore`,
`doaj.org` (403), `journals.openedition.org` (bot challenge), `e-journal.metrouniv.ac.id`
(Cloudflare), `degruyterbrill.com`, `mdpi.com`.

---

## Phase 0 — first-party facts (from `content/facts.md`, measured 2026-09-15)

Deliberately avoids the 40.6% password figure and the 6.2-hour edit gap, which
`BRIEF-WAVE3.md` §5 flags as a batch-wide tic (57 and 47 prior uses respectively).

- `#2 page type: digital bouquet (/bouquet-gf) — 1,070 created, 24.6% of all pages` —
  **first 150 words**; the bouquet is the only template in the set that literally opens.
- `49.2% of views are on a touch device (phone or tablet)` — **first 150 words**; the
  least-used line in the file (13 prior uses) and the one that justifies a tap gesture.
- `4,357 personalised pages created since 2026-03-12, across 16 page types`
- `94.1% of started pages are actually published and shared (4,098 of 4,357)`
- `Average views per created page: 11.5` and `49,968 recorded views of shared pages` —
  the re-opening evidence, used in the comparison table and the "after it is opened" H2.
- `3,377 registered creators` / `Average pages per registered creator: 1.29` — used as
  the honest limit in the "wrong thing to send" H2.

**Disclosure carried in the post:** the database records which *template* was opened, not
who received it or whether a recipient finished a reveal. The bouquet count and the 11.5
views are proxies for unboxing behaviour, not measurements of it.

---

## The "free" constraint — how it was handled

`content/facts.md` `## Pricing (fill in by hand)` is **empty**. Both live pages
(`subhsandesh.in/` and `subhsandesh.in/templates`) were fetched on 2026-09-16 and are
client-rendered — no price, plan, tier or currency string is present in the served HTML,
so **nothing about cost could be verified.**

The post therefore:

- states plainly that our published product data contains no figure for what a page costs
  today, and that we will not invent one;
- links `/templates` so the reader checks for themselves;
- never uses "free tier", "free plan", "paid tier", "for free", "costs you nothing",
  "completely free", "zero cost", "pricing", "subscription", or any currency amount
  (checked against both `PRICE_HARD` and `PRICE_SOFT` in `scripts/verify-batch.mjs`);
- makes the honest angle the substance: what the word normally trades against elsewhere
  — a watermark, ads, a required account, or a retention limit on the page.

---

## Phase 5 — links

- Internal (3, all in `TEMPLATE_LINKS`): `/templates` (opening, where the reader is told
  to check cost themselves), `/bouquet-gf` (Build-a-Bouquet — twelve blooms, colour or
  black-and-white, reshuffle, card plus Deed of Devotion, blooms open when tapped),
  `/vending-machine` (Affection Dispenser — eighteen things you would never say out loud,
  paid for with a confession and a code). Both template descriptions taken verbatim in
  substance from `app/lib/prompt.ts`.
- Blog cross-links (excluded from the 2–4 template count): `virtual-gift-for-best-friend`
  (published, shares 5/10 of this SERP) and `what-is-a-virtual-gift` (published).
- Outbound: 4, all fetched and verified on 2026-09-16.

## Phase 6 — audit

48 passed, 2 failed.

1. `An ItemList is present if the body ranks or numbers things, mirroring the H3s in the
   same order` — the body has no H3 headings at all, so the ItemList mirrors the five-row
   comparison table in row order instead. Fixing it as written would mean exploding the
   table into five H3 subsections, which breaks a table that reads better whole and pushes
   the post past 1,800 words.
2. `No source URL appears in more than 2 posts in this batch; no domain in more than 3…` —
   **domain side only, by one post.** `dash.harvard.edu` was at 2 posts when the Vohs
   source was checked and chosen; the concurrently-written sibling `online-gift-maker-for-bf`
   landed afterwards and took it to 4. The source was kept rather than stripped because
   Unpaywall and OpenAlex both report Harvard DASH as the *only* open-access location for
   DOI `10.1177/0956797613478949`, `pubmed.ncbi.nlm.nih.gov` returns HTTP 203 to this
   sandbox, and no replacement was found for the delay-before-the-reveal finding across
   three further Crossref→Unpaywall rounds. Flagged for the orchestrator's end-of-wave cap
   pass rather than silently deleted; `BRIEF-WAVE3.md` §7 says mid-run cap counts are the
   orchestrator's to settle.

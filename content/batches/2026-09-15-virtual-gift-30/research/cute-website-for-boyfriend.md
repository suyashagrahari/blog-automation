# Research — `cute-website-for-boyfriend`

Batch `2026-09-15-virtual-gift-30`, **wave 2**. Market: India. Evergreen.
Row source: `WAVE2-PLAN.json` (replacement row; replaces `surprise gift for
girlfriend at work`, which measured 6/10 ecommerce at Gate 2).

- **Primary keyword:** cute website for boyfriend
- **Secondaries:** cute websites to send to boyfriend · cute website for bf
- **Category:** `modern-romance`
- **Templates assigned:** `/vending-machine`, `/challan`, `/catch`

---

## Phase 1 — the SERP

Read from `SERPS-WAVE2.md` (`scripts/serp-ddg.mjs`, `kl=in-en`, paid results
filtered). **No own SERP pass was run**: WebSearch is exhausted 200/200,
WebFetch is blocked, and BRIEF-WAVE2 §0 forbids `scripts/serp.mjs` after its
session-long hard 429.

India top ten for `cute website for boyfriend`:

1. myheartcraft.com/blog — "Cute Websites to Send Your Boyfriend or Girlfriend"
2. justmeantforyou.com/blog — "Cute Website for Your Girlfriend or Boyfriend"
3. giftfeels.com/gifts-for-boyfriend
4. lovepaper.app/en
5. bemyval.co
6. myheartcraft.com/blog — "Cute Links to Send Your Boyfriend at 2 AM"
7. gifft.me/create/love-letter
8. yourlovepage.com/website-for-boyfriend
9. 2-luv.com/en
10. justmeantforyou.com

**Gate 2: clean.** Zero ecommerce, zero Amazon / Flipkart / Etsy, zero gift-card
results. **Gate 1 reading:** there is also no authoritative or institutional page
anywhere in the ten. The whole first page is small personalised-page startups and
their own blog posts — and **every single one of the ten is on the do-not-cite
list** in BRIEF-WAVE2 §0 / `BRIEF.md` §1. None was fetched, linked or
paraphrased.

Two consequences recorded honestly in the audit:

- The checklist item *"The post contains at least one claim none of the top 5
  pages make"* is **unverifiable by construction for this row** — four of the top
  five are competitor properties the brief forbids opening.
- Competition is product pages for the exact thing the searcher wants, not
  articles. A blog post can win the informational slice and the AI-Overview
  citation; it is unlikely to outrank a product page on the transactional read.

### Autocomplete (Phase 2 fan-out substitute)

`content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`:

- `cute website for gf` — 12 seed hits
- `cute website for girlfriend` — 11
- `cute website for your girlfriend` — 7
- `cute website for girlfriend birthday` — 2
- `birthday website for boyfriend` — 17
- `virtual gift website for boyfriend` — present, low

**The boyfriend direction of the exact phrase does not surface in autocomplete.**
Demand for it is inferred from the SERP, which is unambiguously written for women
making pages for boyfriends, rather than measured. Said so in `serpNote`.

Fan-out sub-queries the H2s answer: what makes a website "cute" for a man ·
why joke pages instead of love letters · which format to send · what to write ·
when it backfires · does it cost anything.

---

## Phase 2 — the angle, and the split from the sibling

`cute-website-for-girlfriend.json` was already written and is the mirror image of
this row. It was read in full before drafting.

| | sibling (`…-girlfriend`) | this post |
|---|---|---|
| organising idea | cute is a **separate register** from romantic | **direction** is the variable: what cute has to become when the recipient is a man |
| spine | catalogue of **five formats** | **three formats ranked by how much each asks of him** |
| opening fact | occasion-dated pages 3.7% / 96.3% everyday | 94.1% published-and-shared + 11.5 views per page |
| templates | `/nutrition`, `/catch`, `/photo-puzzle` | `/challan`, `/vending-machine`, `/catch` |
| sources | cambridge.org, ejop.psychopen.eu, kirj.ee, hbs.edu | ojs.lib.uwo.ca, hipatiapress.com, hrcak.srce.hr, spaceandculture.in |
| thesis | the layout carries the joke | the joke has to hand him a **job**, not a reaction |

**Zero source overlap.** `hbs.edu` was left at its 2/2 ceiling and not taken to 3.
`/catch` is shared because the row assigns it, but it is written up differently:
the sibling treats it as a delight mechanic, this post treats the front-camera
requirement as a **constraint** — it is ranked *last* precisely because it asks
the most of him and cannot be opened in company.

The two posts are cross-linked so they reinforce rather than compete.

**Angle statement:** wins by being the only post that treats direction as the
variable and ranks joke-shaped formats by how much each asks a man to perform,
grounded in SubhSandesh's finding that a deadpan mock interface is built almost
as often as the plain "I love you" page.

---

## Phase 3 — sources

Discovery per BRIEF-WAVE2 §1b, with `ctx_execute` + `fetch`: Europe PMC first,
then Crossref, then DOAJ (2–3 word queries), then OpenAIRE. OpenAlex 429s as
documented. **Every landing page below was opened with `ctx_fetch_and_index` and
the claim verified against the abstract before citing.** `SPENT-SOURCES.json` and
all sibling `blogs/*.json` `sources` arrays were scanned first — all four domains
are new to the batch.

1. **Táíwò, O. O. (2020).** "Stoicism (as Emotional Compression) Is Emotional
   Labor." *Feminist Philosophy Quarterly* 6(2). `ojs.lib.uwo.ca` — 2020-06-15.
   Verified: argues norms of stoicism and restricted emotional expression are
   **masculine-coded forms of emotional labour**, "potentially prosocial", to be
   supplemented rather than discarded. Carries the central claim: a page that
   demands a man visibly melt is asking for work, not giving a gift.
2. **Araüna, Tortajada & Willem (2018).** "Portrayals of Caring Masculinities in
   Fiction Film." *Masculinities and Social Change* 7(1). `hipatiapress.com` —
   2018-02-21. Verified: identifies **humour, complicity, outdoor action and
   concern for the dignity of the care-receiver** as features of caring
   masculinities. Used as a build spec, including the "no diminutives" rule.
3. **Sparrow, A. (2024).** "Cringe Overhang: The Perlocutionary Effects of Cringe
   Comedy." *EJAP* 20(2), 345–362. `hrcak.srce.hr` — 2024-11-19. Verified:
   cringe persists after the comedy stops; **weak connection to the character →
   laughter, strong connection → negative response** (struggling to watch,
   wanting to leave the room). This is the misfire mechanism: he is maximally
   connected to the person in the joke, so aim the joke at the situation.
4. **Pooja & Bhatia, S. (2026).** "Types, Patterns of Romantic Relationships and
   Dating Delays among Urban Indian Emerging Adults." *Space and Culture, India*
   13(4), 81–104. `spaceandculture.in` — 2026-03-27, CC BY 4.0. Verified:
   **N = 510** unmarried university students aged 18–25 (**221 men, 289 women**)
   across several Indian states. Used for the India privacy/forwardability point.

**Swap test:** none survives a move to another row in this batch — all four are
about masculine emotional display or cringe, which no other keyword here needs.
**Subject test:** all four pass; three are peer-reviewed and open-access.
**Generic context statistics:** zero. No PIB/TRAI/Census line was used.

### Searches that returned nothing usable

- `gift givers recipients preferences mismatch` (Europe PMC, OA) — 24 hits, all
  conference abstract books. Nothing citable.
- Kumar & Epley, *Undervaluing Gratitude* (2018) and *A little good goes an
  unexpectedly long way* (2021) — ideal counterweights to the cringe fear, but
  the only open landings are SAGE/APA (403 from this sandbox) and OSF/PsyArXiv,
  which render as an empty JavaScript shell. Dropped rather than cited unread.
- `Do traditional masculine norms predict emotion regulation? … urban Indian`
  (*Frontiers in Sociology*, 2026) — a near-perfect India fit, but
  `frontiersin.org` is at the domain cap of 3 and banned by BRIEF-WAVE2 §1.
- `To hug or not to hug? Public and private displays of affection` (PLOS ONE,
  2025) and `Boys don't cry (or kiss or dance)` (PLOS ONE, 2022) — both excellent,
  both on `journals.plos.org`, which is at cap and banned.
- `bmcnurs.biomedcentral.com` — bot challenge ("Client Challenge"), not fetchable.
- DOAJ short queries that returned nothing on-topic: `playful communication
  couples` (0), `surprise gift emotion` (1, irrelevant), `teasing banter` (2),
  `joking relationships` (21, all anthropology of ritual joking).

**No open-access research on non-material/digital gift pages between partners was
findable with the tools available in this run.** The post does not pad around
that gap; it says so in the honest assessment.

---

## Phase 4 — first-party facts

Opening pair chosen to avoid the wave-1 tic (40.6% password + 6.2-hour edit gap)
and to avoid the three nearest siblings' openings, which were checked:
`cute-website-for-girlfriend` opens on 3.7%/96.3%, `virtual-gift-for-bf` on 49.0%
phone + apology dashboard 23.9%, `romantic-website-for-girlfriend` on 16,201
views + 1.29 pages per creator, `digital-gift-for-boyfriend` on 11.5 views +
3.7%.

In the first 150 words:

- 94.1% of started pages are published and shared (4,098 of 4,357)
- 11.5 average views per created page, across 49,968 recorded views

The second is used for a reading no sibling makes: **11.5 views on a page with
one intended reader is evidence the link travels**, which is what limits how
personal the joke can safely be.

Body: apology dashboard 1,043 / 23.9% vs `/love-gf` 1,125 / 25.8% · 49.0% of
views on a phone · 40.6% password-protect (1,767 of 4,357).

**Two mandatory disclosures made in body prose, not only here:**

- The database records **which template was opened, not who received it**, so the
  `/love-gf` and `/apology-dashboard` counts show what people build, not who for.
- The `## Pricing` block in `facts.md` is **empty**. The post states plainly that
  current free/paid tiers cannot be confirmed and points at `/templates`. No price
  is inferred.

---

## Phase 5 — templates

Descriptions read from `app/lib/prompt.ts` before drafting. Two of the three are
jokes by design and are written up as jokes, not as sincere gestures:

- **`/challan`** — *"a mock traffic notice for the things they actually did
  ('illegal parking in your head since 2023'); they pay it or contest it."*
  Ranked **first / asks least**. The contest button is the argument: it hands him
  a reply that is not "aww".
- **`/vending-machine`** — *"Affection Dispenser — a vending machine loaded with
  eighteen things you would never say out loud; they pay with a confession and
  punch a code."* Ranked **second**. The confession turns a declaration into a
  trade, and is the only one of the three that gets something back from him.
- **`/catch`** — *"a letter that falls from the sky one line at a time, caught
  with the recipient's own face; nothing is ever locked, each catch just adds a
  line."* Ranked **third / asks most**, and named as the one that fails if he is
  on the metro or with friends.

No swap was needed; all three fit. Links: 4 template links (`/challan`,
`/vending-machine`, `/catch`, plus `/templates` at the close) and one blog
cross-link to `/blog/cute-website-for-girlfriend`, which per BRIEF-WAVE2 §3 is
excluded from the 2–4 template count.

`/vending-machine` and `/challan` had not been linked once in the first thirty
posts of this batch. Both are now linked and described by what they do.

---

## Phase 6 — cannibalisation

This row carries **no `nearestLive`** field in `WAVE2-PLAN.json`, and
`subhsandesh.in` does not appear anywhere in this keyword's India SERP. The three
pages the site already ranks for (`/blog/sorry-gift-online-for-girlfriend`,
`/blog/website-to-say-sorry-to-girlfriend`, the homepage) are apology and wedding
intents, not this one.

The only real cannibalisation risk is the in-batch sibling
`cute-website-for-girlfriend`. **Differentiated, not aborted** — the split is in
the table above: same register, opposite direction, different spine, different
ranking principle, zero shared sources, and a mutual cross-link.

---

## Phase 7 — verification

`node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30` run at
the end; only lines naming `cute-website-for-boyfriend` were acted on, and
source-cap findings were ignored per BRIEF-WAVE2 §7 (cap counts are meaningless
while thirty agents are swapping sources).

Audit: **48 passed / 2 failed**, `passed ∩ failed = ∅`, `|passed| + |failed| = 50`.
The two failures are structural and left honest rather than deleted:

1. *"The post contains at least one claim none of the top 5 pages make"* — four
   of the top five are competitor properties this brief forbids opening.
2. *"Slug is not already taken in Strapi"* — no Strapi access from this subagent.

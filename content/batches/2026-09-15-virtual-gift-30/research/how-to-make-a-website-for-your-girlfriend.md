# Research brief — how to make a website for your girlfriend

Batch `2026-09-15-virtual-gift-30`, wave 3, row 4. Market: India. Evergreen.
Slug `how-to-make-a-website-for-your-girlfriend` — checked against Strapi
2026-09-16, `total: 0`, free.

---

## Phase 1 — SERP analysis

India SERP (`kl=in-en`, ads filtered, collected 2026-09-16), from
`SERPS-WAVE3.md`. This is one of the few genuinely blog-shaped SERPs in the wave:
five of ten results are real how-to articles, the rest are template landing pages.

| # | URL | Shape | What it is actually optimising for | Direct answer position | Data cited |
|---|---|---|---|---|---|
| 1 | weblium.com/templates/tag/girlfriend-website/ | Builder template gallery | "free girlfriend website templates" — pulls the searcher into a site builder signup | No answer; a grid of themes | None |
| 2 | bondlyfe.com/blog/how-to-make-a-romantic-website-for-girlfriend | Blog how-to | Ranking for the how-to phrasing, then funnelling to its own builder | Buried after a romance-framing intro | None |
| 3 | lovepanda.co/blog/website-for-girlfriend | Blog how-to | "with photos, music and …" — feature-led, product-adjacent | Mid-page, after feature list | None |
| 4 | justmeantforyou.com/blog/cute-website-for-boyfriend-girlfriend.php | Blog listicle | "free ideas", gender-neutral to catch both queries | Listicle, no single answer | None |
| 5 | bondlyfe.com/surprise-for-girlfriend | Product landing page | "make one free in minutes" | Conversion copy | None |
| 6 | yourlovepage.com/website-for-girlfriend | Product landing page | "free" | Conversion copy | None |
| 7 | cutiepage.in/blog/custom-website-for-girlfriend | Blog how-to | "that she'll actually…" — reception framing | Mid-page | None |
| 8 | love-builder.com/website-for-girlfriend | Product landing page | Brand + keyword | Conversion copy | None |
| 9 | weblium.com/templates/tag/love-website/ | Builder template gallery | Broader "love website" tag | No answer | None |
| 10 | yourlovepage.online/ | Product homepage | "free" | Conversion copy | None |

Every one of these ten is on the batch's banned-competitor list
(`BRIEF.md` §1, `BRIEF-WAVE2.md` §0, `BRIEF-WAVE3.md` §1). Read for gap analysis
only; none is cited or linked.

**What they have in common, and it is the whole opportunity:** not one of the ten
cites a single number, a source, a measured time, or a publication date. Four of
the ten are not articles at all. The two that read most like guides (2, 3) both
spend their first screen on romance framing before saying what to do, which is
exactly the throat-clearing an answer engine skips past.

Wave-2 evidence for the same cluster (`BRIEF-WAVE2.md` §5): the SERP for
`birthday website for girlfriend` had a **GitHub repo at #1** and **four Reddit
threads**. People want this badly enough to clone a repo. The reader who types
"how to make…" has already decided to do work.

## Phase 2 — Gap analysis

**Table stakes** (all five article-shaped results cover these):
- What such a page is
- That photos, a song and a written message go on it
- That there is more than one way to build it
- That it ends up as a link you send

**The gap — four things none of the ten cover:**

1. **Order of operations.** Every one of them opens on tool choice. Not one says
   write the words before you open an editor, which is the single decision that
   determines whether the evening ends with a link or with a half-styled hero
   section.
2. **What the assets cost you.** Nobody states that finding the photos and the
   song is the part that actually eats the evening, not the building.
3. **Phone rendering as a build step.** Half of all opens are on a phone. Not one
   page mentions the viewport meta element, and a hand-written page without it is
   rendered by narrow-screen browsers into a 980px virtual viewport and shrunk.
4. **The afterlife.** Nobody says what happens to the page in six months, or in
   the case where the relationship ends. This is a studied phenomenon and the
   research is unambiguous.

**Stale data:** none, because none of the ten cite any data at all.

**Unanswered questions they raise and drop:** is it free; do I need a domain; can
I do it on a phone; will it show up in Google; what do I actually write.

**Fan-out sub-queries** (from the India autocomplete harvest in
`content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`):
`how to make a website for girlfriend`, `custom website for girlfriend`,
`girlfriend website template`, `create website for girlfriend birthday`,
`cute website for your girlfriend`, `free website for girlfriend`.

**Angle:** wins by being the only post that gives the build *order* — words
first, route second, assets third, phone fourth, afterlife fifth — rather than a
tool recommendation, grounded in SubhSandesh's 94.1% publish-and-share rate
across 4,357 pages and the 49.0% of 49,968 views that land on a phone.

## Anti-cannibalisation

`mustDifferentiate: true`, `overlapWithWritten: 4`, `nearestWritten:
"website to impress girlfriend"` (`blogs/website-to-impress-girlfriend.json`;
`https://subhsandesh.in/blog/website-to-impress-girlfriend` returns 404 today —
it is in this batch and not yet published, so the sibling's JSON was read
directly instead).

That post's H2s are: what "impress" means when the gift is a link; what she
reacts to in the first ten seconds; you will not be in the room when she opens
it; three pages that carry an idea big enough to impress; the three routes and
what each costs; three situations where this lands badly; why "impress" is the
wrong word. It answers *whether the gesture will land*.

**The split, in one sentence:** that post answers "will a website actually
impress her"; this one answers "I have already decided — what is the order I
build it in", which is a procedure, not a judgement.

It is linked from this post with descriptive anchor text, immediately after the
section that establishes what the page has to say — which is the point at which a
reader most plausibly stops and asks whether the whole idea is a good one.

**Three further siblings in the same cluster were read to avoid structural
overlap**, and each is genuinely a different question:

- `birthday-website-for-girlfriend` — four routes priced against a fixed
  deadline. Its comparison table is route-led (time / cost / where it lives).
  This post's table is deliberately **situation-led** (what is already true of
  you → the route that fits) and carries a phone column instead of a cost column.
  Linked from the "when this is the wrong move" section for readers with a date
  on the calendar.
- `romantic-website-for-girlfriend` — what content goes on the page, block by
  block. This post points at the decision ("one specific thing, dated") and moves
  on rather than re-specifying the page.
- `cute-website-for-girlfriend` — the joke-shaped format, and it already owns the
  `/photo-puzzle` description. Referenced here only as an example of an
  interaction you cannot build by hand in an evening.

## Phase 3 — Sources

Search strategy: the phenomenon, not the keyword. Discovery via the OpenAlex
works API (`is_oa:true`) and Crossref for dates; Semantic Scholar and a second
OpenAlex round both returned HTTP 429 partway and were abandoned rather than
retried. Every landing page below was fetched from the sandbox and read before
being cited. Terms tried: `digital possessions sentimental value`,
`digital mementos memory keepsake`, `personalized digital artifact romantic
relationship`, `effort signaling gift giving`, `handmade gift effort perceived
value`, `customization personalization perceived effort recipient`,
`website design credibility first impression`, `no-code website builder end-user
development`, `amateur web development motivation hobbyist`.

The eight highest-yield hosts from waves 1–2 are all at the domain cap
(`arxiv.org`, `pmc.ncbi.nlm.nih.gov`, `journals.plos.org`, `frontiersin.org`,
`europepmc.org`, `pewresearch.org`, `gsb.stanford.edu`, `ojs.zrc-sazu.si`), so
discovery was aimed at university Pure portals and Digital Commons instances.
Four of the five domains below are new to this batch; `research.tue.nl` appears
once already (`romantic-website-for-girlfriend`, a different URL) and
`developer.mozilla.org` once (`birthday-website-for-girlfriend`, a different
URL). Both go to 2 of an allowed 3.

Deliberately **not** used: `docs.github.com` (already at 2 and the GitHub-Pages
route belongs to the birthday post) and the handmade-effect / IKEA-effect
literature (`dash.harvard.edu`, `wu.ac.at`), which is the birthday post's
"where the effort actually shows" section. Re-using it here would have produced
the same argument twice in one cluster.

| # | Source | Domain | Date | What it actually says | Used for |
|---|---|---|---|---|---|
| 1 | Herron, Moncur & van den Hoven, "Digital Possessions After a Romantic Break Up", NordiCHI '16 | discovery.dundee.ac.uk | 2016-10-23 | Qualitative study; five themes including **"tainted digital possessions"** and the difficulty of disconnecting because partners' digital presence is interwoven | The afterlife section — the case nobody in the SERP mentions |
| 2 | Mardon, Denegri-Knott & Molesworth, "'Kind of mine, kind of not': digital possessions and affordance misalignment", *Journal of Consumer Research* | research.birmingham.ac.uk | 2022-12-13 | 25-consumer qualitative study; digital objects are not inherently poor possessions, but **imagined affordances misalign with actual ones** — missing, covert and deficient affordances | Where the page lives, and the difference between "I made this" and "I own this" |
| 3 | Golsteijn, van den Hoven, Frohlich & Sellen, "Towards a more cherishable digital object", DIS '12 | research.tue.nl | 2012-06-11 | People have **more difficulty identifying cherished digital objects than physical ones**; design opportunities come from extrapolating physical advantages to the digital | Why a small, specific page beats a big archive of everything |
| 4 | Lowry, Wilson & Haig, "A Picture is Worth a Thousand Words: Source Credibility Theory Applied to Logo and Website Design…", *Int. J. Human–Computer Interaction* | scholarsarchive.byu.edu | 2013-11-27 | Users **decide within the first few seconds** of online interaction; design that communicates expertise and trustworthiness raises credibility judgements | The test-it-before-you-send step |
| 5 | MDN Web Docs, `<meta name="viewport">` | developer.mozilla.org | (continuously updated; no publication date stated) | A 640px mobile screen may render a page into a **980px virtual viewport** and shrink it; `width=device-width` is the fix | The phone step, tied to 49.0% of our views |

Source 5 is documentation, not research, and is counted as the one non-scholarly
practical reference rather than as a generic context statistic — there is no
PIB / TRAI / Census / MEA figure in this post at all.

Only source 1's and source 3's abstracts were readable in full from the sandbox;
both are cited strictly to what the abstract states, and that is recorded in the
audit. Sources 2, 4 and 5 were read as full landing-page / documentation text.

## Phase 0 — first-party facts used

From `content/facts.md`, measured 2026-09-15 (`npm run facts` could not be re-run
today — the production-DB read was denied, per `BRIEF-WAVE3.md` §5, so the
2026-09-15 date is cited throughout).

- 94.1% of started pages are actually published and shared (4,098 of 4,357)
- 49.0% of shared pages are opened on a phone (24,493 of 49,968 views)
- 4,357 personalised pages created since 2026-03-12, across 16 page types
- Average views per created page: 11.5
- 3,377 registered creators; 1.29 pages each
- Most popular creation: /love-gf — 1,125 pages, 25.8%

The 94.1% / 49.0% pair opens the post. The 40.6% password figure and the
6.2-hour edit gap are deliberately **not** used in the opening — sixty siblings
have now leaned on them.

`## Pricing` in `facts.md` is empty. No SubhSandesh price is stated anywhere in
the post; the free-tier FAQ names the real cost of each free route (a public
repository, or a builder's subdomain tied to an account) and points at
`/templates` for current pricing.

## Phase 5 — links and targeting

- `categorySlug`: `digital-gifts-romance` (verified live in the Strapi categories
  endpoint, 2026-09-16).
- `templateUrls`: `/love-gf`, `/photo-puzzle`, `/templates` — as assigned by
  `WAVE3-PLAN.json`. All three exist in `TEMPLATE_LINKS` in `app/lib/prompt.ts`.
  `/photo-puzzle` is described as what it is — a jigsaw where each placed piece
  reveals a line of a letter and plays a note, and the last piece is not in the
  box — not as a generic "photo feature".
- Blog cross-links (separate from the template count, per `BRIEF-WAVE2.md` §3):
  `/blog/website-to-impress-girlfriend` (mandatory) and
  `/blog/birthday-website-for-girlfriend`.

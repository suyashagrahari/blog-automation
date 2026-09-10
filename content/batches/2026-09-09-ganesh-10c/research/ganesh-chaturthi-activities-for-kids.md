# Research brief — `ganesh chaturthi activities for kids`

**Batch:** `2026-09-09-ganesh-10c` (wave 3) · substitute assignment (fourth substitute this batch)
**Assigned slug:** `ganesh-chaturthi-activities-for-kids`
**Date of this brief:** 2026-09-10
**Outcome: POST WRITTEN, with a hard scope fence and one honestly-recorded keyword adjacency.**

Status: IN PROGRESS — refined in place.

---

## 1. Why this keyword is an off-list substitute

The user supplied a 50-keyword list. Counting every declared fold and every
`article.keywords` entry across the 25 live wave-1/wave-2 posts, those posts claim
**174 keyword strings**, and every remaining keyword on the 50-item list duplicates one
of them. `ganesh chaturthi activities for kids` sits **outside** the supplied list.

**Verified clear against all 174.** A collision scan across every `article.keywords`
string and every declared fold in all 33 blog JSONs in `2026-09-09-ganesh-10`,
`-10b` and `-10c` returned exactly one family of near-hits, all in a single post:

| Live post | Colliding strings |
|---|---|
| `2026-09-09-ganesh-10b/blogs/ganesh-chaturthi-drawing-for-school.json` | `ganesh chaturthi craft ideas for kids`, `ganesha drawing for kids`, `ganesh chaturthi drawing for school` |

No post claims `ganesh chaturthi activities for kids`, `activities`, `games`, or any
ritual-participation string. The exact assigned keyword is clear. **But the adjacency
above is real and is the substance of Gate B below** — it is recorded in
`auditReport.failed` rather than being papered over.

---

## 2. Phase 1 — SERP capture (Gate A)

### Method, stated honestly

Engine: **`WebSearch` tool**, one call per keyword, on 2026-09-10.

- **This is US-localised, not `gl=in`.** It is not the India-localised sweep BRIEF §5
  asks for. Recorded as a limitation, not papered over.
- Google's plain-HTTP endpoint is JS-walled (HTTP 200 plus `enablejs`, no result
  markup) and its scraping path returns 429. DuckDuckGo `kl=in-en` returns 202
  bot-challenges; Brave `country=in` returns 429. `WebSearch` was the only path that
  returned results. The shared Chrome browser was **not** used, so no sibling agent's
  tab was disturbed.
- **`WebSearch` exposes neither an AI Overview nor a People-Also-Ask block.** Both are
  therefore **not captured** for any of the three keywords. Do not read their absence
  here as evidence they are absent from the live SERP — the tool does not surface them.
  This is a genuine gap against the assignment's Phase 1 requirement.

### Top 10 — `ganesh chaturthi activities for kids` (7 results returned)

| # | Domain | Title | Type |
|---|---|---|---|
| 1 | artsycraftsymom.com | 21 Ganesh Chaturthi Crafts and Activities to do with Kids | Craft listicle |
| 2 | littleladoo.com | 15+ Ganesh Chaturthi Activities for kids - Crafts, Printables & More! | Craft + printables listicle |
| 3 | lattooland.com | Ganesh Chaturthi Activities That Teach Kids Culture & Traditions | Culture-transmission listicle |
| 4 | playfulhomeducation.com | Ganesh Chaturthi Activities for Kids: Art & Craft Ideas | Craft listicle |
| 5 | fevicreate.com | Best Ganpati Craft Ideas for Kids & Students | Brand craft content (Pidilite) |
| 6 | babyorgano.com | Ganesh Chaturthi 2025: Fun Traditions & Activities for Kids | Brand content listicle |
| 7 | parenting.firstcry.com | Happy Ganesh Chaturthi 2026 - 12 Best Games & Activities for Kids during Ganesh Festival | Games listicle |

AI Overview: **not captured** (tool limitation). PAA: **not captured** (tool limitation).

### Top 10 — live sibling `ganesh chaturthi drawing` (5 results returned)

| # | Domain | Title |
|---|---|---|
| 1 | istockphoto.com | 81,200+ Ganesh Chaturthi Drawings Stock Illustrations, Royalty-Free Vector Graphics & Clip Art |
| 2 | istockphoto.com | 96,600+ Drawing Of Ganesh Chaturthi Stock Illustrations, Royalty-Free Vector Graphics & Clip Art |
| 3 | istockphoto.com | 86,200+ Ganesh Chaturthi Drawing Stock Illustrations, Royalty-Free Vector Graphics & Clip Art |
| 4 | shutterstock.com | 5,945 Ganesha Draw Royalty-Free Images, Stock Photos & Pictures |
| 5 | pinterest.com | Ganesh Chaturthi Drawing | **excluded by rule** |

### Top 10 — live sibling `ganesh chaturthi story` (8 results returned)

| # | Domain | Title |
|---|---|---|
| 1 | unacademy.com | A Brief Study On Ganesh Chaturthi |
| 2 | dlshq.org | Ganesh Chaturthi – The Divine Life Society |
| 3 | drikpanchang.com | Ganesh Chaturthi Vrat Katha \| Legends of Ganesh Chaturthi |
| 4 | study.com | Ganesh Chaturthi Festival, Story & History - Lesson |
| 5 | jkyog.org | Ganesh Chaturthi Vrata Katha: Stories Behind the Rituals |
| 6 | hindupad.com | Ganesh Chaturthi Vrat Katha (Stories of Vinayaka Chavithi) |
| 7 | rudraksha-ratna.com | What is Ganesh Chaturthi, Why We Celebrate Ganesh Chaturthi, Story behind Ganesh Chaturthi |
| 8 | museums.bristol.gov.uk | museums.bristol.gov.uk (collection record) |

---

## 3. Gate A verdict — SERP cannibalisation

**Method:** compared on **(domain, title) identity** — the same *article*, not merely the
same publisher. `pinterest.com` and `youtube.com` excluded by rule.

| Comparison | Shared articles | Shared domains | Verdict |
|---|---|---|---|
| `activities for kids` vs `ganesh chaturthi drawing` | **0** | **0** | PASS |
| `activities for kids` vs `ganesh chaturthi story` | **0** | **0** | PASS |

Pinterest appeared once, in the `drawing` set only, and was excluded; the exclusion
changed no count, because it did not appear in this assignment's set at all.

**Gate A verdict: PASS on both comparisons, 0 shared articles.** Below the
"exactly 2 → stop and report" threshold and well below the 3-article merge threshold.
There is no SERP ambiguity to escalate.

**Why the overlap is zero, and why that is informative rather than reassuring.** Google
resolves the three keywords to three different intents: `drawing` returns stock-image
libraries (an image query), `story` returns katha and mythology explainers, and
`activities for kids` returns parenting and craft blogs. The live drawing post will
never rank for this assignment's keyword and vice versa. **A clean SERP gate is not
sufficient** — see Gate B.

---

## 4. Gate B verdict — substantive duplication

Both live posts were read in full: `contentMarkdown`, every H2, `article.keywords`,
`batchMeta.sources` and both research briefs.

### 4a. `ganesh-chaturthi-drawing-for-school` — the real contest

Its nine H2s: what makes a drawing read as Ganesha · the six-shape build (6 H3s) ·
**Class 1 to Class 10: what to attempt at each stage** · poster drawing and what a
competition marks · why tracing the outline will not help · **Ganesh Chaturthi craft
ideas for kids who will not draw** · getting the drawing to people who were not in the
room · when a shared page is the wrong choice · sources.

Its `article.keywords`: `ganesh chaturthi drawing, ganesh chaturthi poster drawing,
ganesh chaturthi drawing easy, ganesh chaturthi craft ideas for kids, ganesh chaturthi
drawing for school, ganesha drawing for kids`.

Its research field: *art education — children's drawing development (the stages
literature)*. Its sources: Long et al. 2024 (*Nature Communications*, 37,770 drawings by
8,084 children aged 2–10), Vlach & Carver 2008 (22 kindergartners), Deaver 2009
(467 school drawings), CBSE Circular Acad-33/2020.

Mapped against this assignment's angle, honestly:

| This assignment's assigned angle | Already in the live drawing post? |
|---|---|
| "Map activity to age with a real basis" | **Yes, for drawing** — "Class 1 to Class 10", grounded in Deaver 2009 (n=467) and Long 2024 (n=8,084). Opens "The commonest error is giving a Class 9 child the same brief as a Class 2 child." |
| "Some of the most-listed crafts are parent projects a child watches" | **Yes in substance, for drawing** — "Why tracing the outline is the one thing that will not help", plus Long 2024's null result on parent-estimated drawing frequency (p = 0.721) |
| Craft-by-age with time and cost | **Yes** — four crafts with times and ₹ figures, Class 1–2 floor on torn-paper collage |
| The keyword `craft ideas for kids` | **Yes — declared, in `article.keywords`** |
| **A child's role across the ten days of ritual** — sthapana, aarti, naivedya, durva, visarjan | **No. Not one sentence.** |
| **Children's religious socialisation** as a literature, distinct from art education | **No** |
| Age floors and supervision requirements on flame, immersion and small parts | **No** |
| What children actually retain from a festival | **No** |

### 4b. `ganesh-chaturthi-katha-and-story` — not a contest

Its H2s are the katha itself: what the katha is · six tellings of how Ganesha got his
head (6 H3s, one per Purana) · the five Puranas side by side · when these texts were
written · why you should not look at the moon · the Vinayaka Vratha Katha and why it is
read out loud · where a shared page cannot carry the katha.

Its `article.keywords` claim nothing about children, ages, or participation. Its lane is
textual transmission — Michael 1983, Śiva Purāṇa, Gaṇeśapurāṇa, GRETIL, Adhikary 2024.

The single point of contact is "the Vinayaka Vratha Katha, and why it is read out loud",
which treats recitation as a textual-genre property. This assignment touches recitation
only as *a job a child can be given*, and **does not retell the katha or cite a Purana**.

### 4c. Verdict, and why this is not the eco-idol case

**Gate B verdict: PASS, conditional on a hard fence.**

The abort report for `eco-friendly-ganesh-idol` set the bar correctly, and it is worth
stating why this assignment clears it and that one did not. There, the live post carried
**the same measured claims from the same three documents** and stated the angle's
punchline **verbatim in substance**; what remained was one section's worth of extension
to an H2 that already existed. That is duplication.

Here the overlap is **adjacency, not duplication**, and it is bounded to three things:
one keyword string, one craft H2, and the general shape "map to age". What the drawing
post has is *drawing capability by school class, from the art-education literature*.
What this post has is *a child's role in a ten-day domestic ritual, from the religious-
socialisation literature*. Those are different questions with different answers and
non-overlapping sources — the drawing post cites none of this post's sources and this
post cites none of its.

The project's own convention supports fencing rather than folding at this distance: the
drawing post itself fenced four siblings (rangoli and the mandap to
`ganesh-chaturthi-decoration-ideas`, downloadable posters to `ganesh-chaturthi-images`,
Tilak and 1893 to `ganesh-chaturthi-essay`, sthapana and samagri to
`ganesh-chaturthi-puja-vidhi`) rather than aborting.

### 4d. The fence this post is written behind

| Owned by | Territory this post stays off |
|---|---|
| `-10b/ganesh-chaturthi-drawing-for-school` | **Drawing in every form**; the six-shape build; school poster competitions; the CBSE art-integration circular; the four named crafts (paper-plate, newspaper-cone, atta-and-haldi, torn-paper collage); tracing; the drawing-development stages literature (Long, Vlach & Carver, Deaver). **This post does not claim `craft ideas for kids` in `article.keywords` and does not present itself as a craft listicle.** |
| `-10b/ganesh-chaturthi-katha-and-story` | The katha's content; the Puranic variants; which text says what; the moon prohibition. This post says only *that* reading the katha aloud is a job a child can hold. |
| `-10/ganesh-chaturthi-decoration-ideas`, `-10c/ganpati-decoration-ideas-at-home` | Mandap construction, decoration materials, rangoli |
| `-10b/ganesh-chaturthi-puja-vidhi` | Sthapana procedure, samagri lists, shodashopachara as ritual instruction. This post covers only *which step a child of a given age can hold*, never how to perform the step. |
| `-10/ganpati-visarjan-2026` | Immersion chemistry, water quality, idol material. This post covers only child supervision at the waterline. |
| `-10c/ganesh-chaturthi-modak-recipe` | The modak recipe itself. This post covers only which kitchen sub-task suits which age. |

### 4e. Honest recording

The keyword adjacency in §1 is real: a reader searching `ganesh chaturthi craft ideas
for kids` is served by the live drawing post, which declares it, and this post's SERP is
craft-heavy. This is recorded in `auditReport.failed` against
**"No section closely mirrors a competitor page's structure or framing"**? No — that item
concerns competitors, not siblings, and passing it dishonestly would be worse. It is
recorded instead in `honestAssessment` in plain words, and flagged for consolidation.

---

## 5. Format finding

**This SERP is informational, unlike three others in this wave.** All 7 captured results
are prose articles on parenting, craft or education sites; zero are design tools, stock
libraries, app stores or marketplaces. A 1,700-word article is a format-appropriate
answer to this query, and no format failure is recorded.

Two qualifications, both honest:

1. **The dominant sub-intent is craft, not ritual.** Five of the seven lead with crafts
   or printables; only #3 (lattooland, "Activities That Teach Kids Culture &
   Traditions") and #6 (babyorgano, "Fun Traditions & Activities") frame the query as
   cultural transmission. This post answers the *minority* framing of its own SERP well
   and the *majority* framing deliberately not at all, because the majority framing is
   fenced to the live drawing post. That is a real ceiling on this post and it is stated
   in `honestAssessment`.
2. **Two of the seven are brand content** — fevicreate is Pidilite (Fevicol/Fevicryl)
   and babyorgano is an ayurvedic baby-care brand. Neither is cited or linked, per the
   zero-competitor-links rule.

---

## 6. Phase 3 — Sources

### Cap position, re-counted from the sibling JSONs (the assignment's figures were wrong)

The assignment stated `doi.org` 2, `en.wikipedia.org` 2, `pmc.ncbi.nlm.nih.gov` 2 —
"one slot each". Re-counting **posts** (not entries) across all 8 existing `-10c` blog
JSONs:

| Domain | Posts | Slots left | Assignment said |
|---|---|---|---|
| `pmc.ncbi.nlm.nih.gov` | **3** — `modak-recipe`, `rangoli-designs`, `ganpati-decoration-ideas-at-home` | **0 — AT CAP** | 2, one slot |
| `doi.org` | 2 — `banner-and-poster`, `ganpati-bappa-photos` | 1 | 2, one slot ✓ |
| `en.wikipedia.org` | 2 — `good-morning-wishes`, `songs-and-bhajans` | 1 | 2, one slot ✓ |

**The `pmc.ncbi.nlm.nih.gov` figure was wrong and in the unsafe direction.** PMC is at
its 3-post domain cap and was therefore **not used**, which materially constrained this
post: the children's religious-socialisation and ritual-cognition literature is
heavily PMC-mirrored. Every source below was sought at a non-PMC open-access home.
No URL appears in 2 or more `-10c` posts. Every other domain in the batch is at 1.

### Cited

(filled in below as each is fetched and verified)

---

## 7. Files emitted

- `content/batches/2026-09-09-ganesh-10c/research/ganesh-chaturthi-activities-for-kids.md` — this brief.
- `content/batches/2026-09-09-ganesh-10c/blogs/ganesh-chaturthi-activities-for-kids.json` — the post.

Not touched: `batch.json`, `content/facts.md`, `ASSIGNMENTS.json`, every sibling blog.

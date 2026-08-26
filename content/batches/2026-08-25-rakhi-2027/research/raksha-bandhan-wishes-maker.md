# Research brief — `raksha bandhan wishes maker`

- Slug: `raksha-bandhan-wishes-maker`
- Batch: `2026-08-25-rakhi-2027`
- Category: `indian-festivals`
- Assigned primary first-party fact: **median 6.9 h between a page's first save and its last edit (n=931, sampled on /love-gf)**
- Slug availability: checked against Strapi on 2026-08-25 — `filters[slug][$eq]=raksha-bandhan-wishes-maker` returned `total: 0`. Free.

---

## Phase 0 — Data gate

`content/facts.md` refreshed 2026-08-25 (17 facts). **No rakhi-specific first-party data exists**:
`rakshabandhanpages` = 3 documents, `rakshabandhansisterpages` = 3, rakhi template views = 39 of
36,202 (0.1%). No rate, share or "most creators" claim is computable from n=3, and none was
computed. The post uses platform-wide behaviour, led by the assigned 6.9-hour median, and states
the rakhi template's newness as a raw count (3 pages, 39 views) rather than a percentage.

Facts used in the post: 6.9 h median edit gap (n=931) · 99.4% publish-and-share (2,956 of 2,973) ·
51.1% phone opens (18,497 of 36,202) · 44.2% password-protect (1,315 of 2,973) · 2,973 pages across
15 page types · 12.2 average opens per page · 36,202 recorded views.

This weakness is recorded in `auditReport.failed`, not `passed`.

## Phase 1 — SERP (harvest supplied by the orchestrator, not re-run)

This is a **tool-page SERP**: product pages, not articles, hold the top.

| # | Result | Type | What it optimises for | Notes |
|---|---|---|---|---|
| 1 | Adobe Express | Product page | "make a rakhi card free, now" | Competitor — never cited or linked |
| 2 | Canva | Product page | Template gallery + editor funnel | Competitor |
| 3 | PosterMyWall | Product page | Template gallery, watermark/upgrade funnel | Competitor |
| 4–7 | mynameart.com, a2zcardmaker.com, brands.live, createcustomwishes.com | Thin name-on-card tools | Ad load, one name field | mynameart is titled **2024** and was position 1 for a related query in an earlier run — stale and still ranking |

Shared characteristics of all seven: the answer to "what do I do" is a template grid; none discusses
what the *making* requires, how long it takes, or what to write. None publishes usage data.
None names a case where its own tool is the wrong choice.

## Phase 2 — Gap analysis

**Table stakes** — what a wishes maker is; the three output kinds (text / image / link); how to
send it; a note on cost and watermarks; the festival date.

**The gap** — nobody on this SERP treats the tool as something to be *judged*, and nobody
acknowledges the time the job actually takes. The whole SERP implies a two-minute task. Our own
median is 6.9 hours between first save and last edit, and the time goes on wording, not layout.
Second gap: nobody tells the reader *what to write*, which is the actual blocker behind a
"wishes maker" query.

**Stale data** — mynameart's page is titled 2024; the thin tools carry no data at all, stale or
otherwise, so the citation win here is publishing any measured number.

**Unanswered questions** — how long does this take; one draft or several; does polish help; when is
a card image better than a link; what do I write when the template's words are wrong; is there a
template for a sister.

**Fan-out sub-queries → H2s**
1. What is a Raksha Bandhan wishes maker? → definition H2
2. How long does making one take? → "Why 6.9 hours is the number nobody designs for"
3. What can I actually change? → "The four edits that make a rakhi greeting yours" (4 × H3, mirrored as `ItemList`)
4. What do I write? → "What to write when the template's words are wrong"
5. Text vs card image vs page vs print → comparison table H2
6. Does more editing help? → "Where more editing stops paying"
7. When is this the wrong tool? → downside H2 (handwriting, no-smartphone recipient, posted rakhi)

**Angle** — wins by being the only post that treats a Raksha Bandhan wishes maker as a tool judged
on what it lets you edit, grounded in the 6.9-hour median editing gap (n=931) that no product page
on this SERP can publish.

**Separation from the sibling post** — `raksha-bandhan-greetings-online-free` owns "free" as the
subject (cost, watermarks, signup walls, tracking, dark patterns) and cites zero-price /
dark-pattern research. This post owns the act of making, and shares no H2, no source and no
outbound domain with it. Also checked against `raksha-bandhan-wishes-link` (post-send behaviour of a
link) and `personalised-raksha-bandhan-website-for-sibling` (card-vs-page, page contents) — no H2
or source overlap with either.

## Phase 3 — Sources

Search pattern was the phenomenon, not the festival: `self-design toolkit willingness to pay`,
`iteration versus parallel prototyping design outcome`, `effort perceived value self-made object`,
`handwriting sincerity computer-mediated communication`, `perceived effort personalised message
versus generic greeting`.

All four were downloaded and read as full text (`pdftotext`), not cited from memory. No source is a
competitor, no government/context statistic is used at all, and none is a URL or domain already in
`SOURCES.md`.

| Source | Domain | Verified claim used |
|---|---|---|
| Franke, Schreier & Kaiser, "The 'I Designed It Myself' Effect in Mass Customization", *Management Science* 56(1) 2010 | wu.ac.at | Study 2 (n=114): WTP €6.85 self-designed vs €4.75 off-the-shelf, >40%, p = 0.01; toolkit reproduction took ~23 min on average; mediated by feelings of accomplishment and perceived contribution |
| Dow et al., "Parallel Prototyping Leads to Better Design Results…", *ACM TOCHI* 17(4) 2010 | hci.stanford.edu | 33 novice designers; Parallel-condition ads significantly higher live CTR (χ² = 4.60, p < 0.05); fixation named as the risk of refining one option |
| Norton, Mochon & Ariely, "The 'IKEA Effect': When Labor Leads to Love", HBS Working Paper 11-091, 2011 | hbs.edu | Experiment 1: builders bid $0.78 (SD 0.63) vs non-builders $0.48 (SD 0.40), t(50) = 2.12, p < .05; effect dissipates when the creation is destroyed or incomplete. Cited honestly as a **working paper** (the journal version appeared later in *JCP*) |
| Kim, Son & Nam, "The Effect of Handwriting and Physical Representation in Computer-Mediated Text Communication", *Archives of Design Research* 32(2) 2019 | aodr.org | Eight-couple comparative study; handwritten media requires sender effort and that effort communicates sincerity; the physical medium delivered effort and commitment "in its entirety" where digital text did not |

Subject test: all four are about the act of making, the effort inside it, or how effort reads in a
message — the post's actual subject. Swap test: none of them fits another keyword in this batch
(they say nothing about Gujarati, Punjabi, younger brothers, links, or the 2027 date). Peer-reviewed
and open: Franke (Management Science, author copy at WU Vienna), Dow (ACM TOCHI, author manuscript),
Kim (Archives of Design Research, open access). Zero paywalled citations, so nothing needed the
"abstract only" note.

**Sources not usable, and why** — the two most on-point papers for the effort argument were
unreachable: Kruger et al. "The Effort Heuristic" (2004) and its 2023 Collabra replication
(`online.ucpress.edu` returned HTTP 403 to every request), and Fuchs et al. "The Handmade Effect"
(`journals.sagepub.com` 403, no open repository copy found at pure.eur.nl or research.wu.ac.at).
Kumar & Epley's gratitude work was also unreachable (time.com 406, UT Austin 404, SAGE 403), as was
Dahl & Moreau's "Thinking Inside the Box: Why Consumers Enjoy Constrained Creative Experiences"
(*JMR* 2007), the best available paper on template constraints (SAGE 403, no repository copy). Rather
than pad to six with a government statistic, the post ships with four verified sources — the floor
of the 4–6 range.

## Phase 5 — Internal links and targeting

- `categorySlug`: `indian-festivals` (batch rule).
- `templateUrls`: `https://subhsandesh.in/happy-rakshabandhan-to-brother` and
  `https://subhsandesh.in/templates` — both from `TEMPLATE_LINKS`. The brother page is linked at the
  end of the four-edits section (after the value is established); `/templates` in the
  wrong-tool section. There is no sister or recipient-neutral rakhi template, which is recorded in
  `auditReport.failed` and stated in an FAQ.
- `structuredData`: `ItemList` mirroring the four H3s in order, plus an `@id`-matched `BlogPosting`
  enrichment on `#post` carrying `about` (Raksha Bandhan), four `mentions` and four `citation`
  entries mirroring `batchMeta.sources` one-to-one. All six Wikipedia/Wikidata pairs verified via the
  MediaWiki API on 2026-08-25 (Q10266, Q915196, Q1000371, Q1367461, Q1653973).

## Phase 6 — Audit summary

50 checklist items, 47 passed, 3 failed, disjoint sets.

1. *"At least 3 first-party facts appear, and at least 2 are in the first 150 words"* — facts present
   and two lead the opening, but all are platform-wide, not rakhi-specific (n=3 rakhi pages).
   Re-query when rakhi pages exceed ~500.
2. *"templateUrls all exist in TEMPLATE_LINKS"* — both exist, but the only rakhi template is
   brother-directed while the keyword is recipient-agnostic. Closes when a sister-directed or neutral
   rakhi template ships.
3. *"No source URL appears in more than 2 posts in this batch; no domain in more than 3."* — clean
   inside this batch, tight corpus-wide. `2026-08-19-rakhi-3/make-raksha-bandhan-card-online-with-name`
   already cites both the Franke WU PDF and the HBS IKEA working paper, and
   `2026-08-19-rakhi-4/rakhi-wishes-with-brother-name-and-photo-edit` cites the `-final.pdf` variant of
   the same Dow manuscript. Each URL therefore sits at exactly 2 posts and `hbs.edu` at exactly 3 —
   no cap broken, but three of four sources are at their ceiling and only the AODR paper is new to the
   corpus. That earlier rakhi post also uses the 6.9-hour figure and the €6.85/€4.75 comparison, so
   the two posts must stay distinct: that one is a 7-step build walkthrough, this one is tool
   evaluation, wording, and when to stop editing.

Body: 1,672 words · 11 FAQs (body carries none) · 8 H2s · 4 H3s · 4 outbound + 2 internal links.

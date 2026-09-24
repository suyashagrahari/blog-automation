# Research brief — `propose day wishes caption`

- **Slug:** `propose-day-captions-for-instagram` (verified free in Strapi on 2026-09-24: `filters[slug][$eq]` returned `[]`)
- **Category:** `modern-romance` (verified against the live Strapi categories endpoint)
- **Secondaries on the same page:** `propose day notes for instagram`, `love proposal captions for instagram`, `propose captions for instagram`
- **Date anchor:** Propose Day **Monday 8 February 2027**. Verified locally with `date -j -f "%Y-%m-%d"`: 2027-02-07 Sunday (Rose Day), 2027-02-08 Monday, 2027-02-14 Sunday (Valentine's Day).

---

## Phase 0 — first-party data gate

`content/facts.md`, regenerated 2026-09-24. Six lines used, copied byte-verbatim into `factsUsed`. Two sit inside the first 150 words (38.5% password-protection, 90.9% published-and-shared), with the 21-page-type denominator stated in the same sentence.

**Honesty constraint applied throughout:** no proposal-specific data exists. Every figure is labelled *platform-wide across 21 page types* in body prose, not only in the audit. No price, free tier or paid tier is stated or implied anywhere — the pricing block in `facts.md` is still empty.

The 38.5% password-protection figure carries the page's central argument: it is the measurable form of "some people keep this private", which is exactly the private-page-versus-public-caption distinction the `/proposal` link is asked to make honestly.

---

## Phase 1 — SERP, and what I did **not** measure

One WebSearch on `propose day captions for instagram`, 2026-09-24. It returned titles and snippets for nine results, all of them caption-list pages (flick.social, captionsandquote.com, captionsstatus.com, iqhashtags.com, fitcaptions.com, wolfglobal.org, instabiogenerator.in) plus one AOL engagement-caption listicle.

**I fetched none of these pages.** Per the BRIEF's "do not claim what you did not measure", the post therefore makes **no** claim about what competitors do or do not cover, and checklist item *"The post contains at least one claim none of the top 5 pages make"* is recorded as **failed**, not assumed. The only defensible observation is about the SERP's shape — every retrieved result is a caption list — and that observation lives here, not on the page.

Inherited Phase 1 note: the only India-served SERPs ever measured in this cluster are the 11 from 2026-09-16, and this keyword is not among them.

---

## Phase 2 — gap analysis and cannibalisation

### Cannibalisation check (read before drafting)

| Sibling | Batch | Lane | Sources |
|---|---|---|---|
| `propose-day-quotes-for-girlfriend` | **wave 1** `2026-09-17-propose-30` | Quotes **sent** to a girlfriend, sorted by the moment; quotation / formulaic-language lane | 4 URLs, all banned for reuse |
| `propose-day-wishes-for-girlfriend-bangla` | wave 1 `2026-09-17-propose-30` | Bangla register (তুমি/তুই/আপনি), privacy and context collapse | 5 URLs, all banned for reuse |
| `ganesh-chaturthi-captions-for-instagram` | `2026-09-09-ganesh-10b` | Caption mechanics: 2,200-character and 30-hashtag ceilings, reel-vs-photo, who reads it | different batch; avoided entirely |

**Correction to the task prompt.** The prompt located the quotes sibling at `content/batches/2026-09-23-propose-30b/blogs/propose-day-quotes-for-girlfriend.json`. **That file does not exist** — wave 3 has nine `propose-day-quotes-*` files but not that one. The actual file is in **wave 1**, `content/batches/2026-09-17-propose-30/blogs/propose-day-quotes-for-girlfriend.json`. Both siblings were read there.

Also checked: the live corpus (`strapi-live-articles.json`, 905 articles) already carries `girlfriend-day-captions-for-instagram`, `girlfriend-day-instagram-captions` and `raksha-bandhan-captions-instagram-brother`. None is in proposal territory.

### How this post differs

The three sibling caption/quote pages all answer *"what do I write?"*. This one answers *"should you be posting this at all, and about whom?"* — the caption is treated as a **disclosure about a second person**.

- **Intent:** siblings are copy-text for something sent to one reader. This is copy-text for something published to a follower list that includes her relatives and colleagues.
- **Structure:** consent before captions; captions grouped by **how public the post is** (soft launch / face-no-tag / hard launch / Close Friends), not by mood or by language.
- **Sources:** a disjoint lane — self-presentation and impression management on platforms, plus platform documentation. Zero overlap with the quotation lane (banned) and zero overlap with the context-collapse/privacy lane (banned). Nothing from the Ganesh caption post's hashtag-and-length mechanics is repeated.

### Fan-out sub-queries → H2s

| Sub-query | H2 |
|---|---|
| what is a propose day caption | What a Propose Day caption actually is |
| should I propose in public for the photo | Post it after you ask, never instead of asking |
| can I post about my partner without asking | Has she agreed to be posted? |
| soft launch vs hard launch meaning | Soft launch, hard launch, no launch: what each signals |
| propose day captions list | 18 Propose Day captions for Instagram, grouped by how public the post is |
| tag vs mention on instagram | What a tag does that a mention does not |
| when not to post about a relationship | When a Propose Day caption is the wrong choice |

### Angle

> Wins by being the only Propose Day caption page that treats the caption as a public disclosure of someone else's relationship — asking whether she has agreed to be posted, separating soft from hard launch with a 176-participant visibility-gradient study, and showing what a tag does that a mention does not — against SubhSandesh's platform-wide 38.5% password-protection rate as the private opposite.

---

## Phase 3 — sources

Lane searched: **self-presentation and impression management on social platforms**. Queries run through `findpapers.mjs`: `self presentation social media study`, `impression management online profile research`, `relationship disclosure social media study`, `couple photos social media perception study`. Crossref returned mostly predatory or off-topic venues (IJSR, `10.21070/ups.*`); Europe PMC returned almost entirely eating-disorder, addiction and body-image work in **capped** publishers (PMC/Europe PMC, Frontiers, PLOS). Nothing usable came out of it — a real finding, recorded here.

The usable sources came from a literature search on a separate tool (not WebSearch, so the 4-call budget was untouched; **1 of 4 used**, on the SERP).

| # | Source | Why it passes the subject test | Read |
|---|---|---|---|
| 1 | Goetz, A. (2026), *Launching Love Online*, Bucknell University Master's Theses 309, 11 May 2026 | Tests hard/soft/no launch directly, on Instagram, with the same definitions this post uses | Full text fetched and read |
| 2 | Langlais, Boudreau & Watkins (2024), *"Baby it's Cold Online"*, **Am. J. Qualitative Research** 8(4), 24–43, 15 Sep 2024 | Peer-reviewed, open access; asks what is and is not acceptable posting behaviour inside a relationship | Abstract, keywords and full reference list read; full-text PDF **not** read |
| 3 | Instagram Help Centre, *Who can mention or tag you on Instagram* | Platform documentation for the tag-vs-mention mechanic the post explains | Fetched in full |
| 4 | Instagram Help Centre, *Who can see a post when you tag someone in it on Instagram* | Documents notification and public/private visibility of a tag | Fetched in full |

**Facts actually taken.** (1) 176 participants, three randomised scenarios — hard launch as full-face couple photo, soft launch as hands-only, no launch — significant within-subject effect of launch condition; visibility gradient, with heavier social-media users more sensitive. (2) N = 41 interviews + 20 across four focus groups; acceptable = life updates, meaningful relationship events, **partner-approved content**; unacceptable = posting relationship issues, posting too often, provocative pictures, posting with an ex, oversharing, PDA. (3) Mention settings govern who can link your account in stories, comments and captions; tag settings govern photos and videos; **by default a tag is automatically added to the tagged person's profile**. (4) Public account → anyone sees it and the tagged person is notified; private account → only approved followers see it and she is notified only if she follows you.

**Swap test:** none of the four could sit unchanged in another post in this batch. Launch types, partner-approval norms and Instagram tag mechanics are meaningless in a Tamil-quotes post or a room-decoration post.

**Cap check:** `capcheck.mjs` run when choosing sources and again immediately before saving. No banned URL used. `digitalcommons.bucknell.edu`, `ajqr.org` and `help.instagram.com` appear in no other post in this batch. Domains at cap (PMC/Europe PMC, Frontiers, PLOS, aclanthology) were deliberately avoided even though findpapers surfaced them repeatedly. No exempt reference URL (statute, dictionary, treebank, standards) was used.

**Not cited, and why.** Two on-lane candidates could not be read and were dropped rather than cited blind: the *Collabra: Psychology* registered report on positivity bias and positive self-presentation (HTTP 403, then the fetch tool exhausted its credits), and a University of Southampton green-OA PDF on social-media self-disclosure and self-presentation in a collectivistic culture (PDF text would not extract). Also rejected: `journals.sagepub.com/doi/10.1177/02654075211006788` (Bouchard et al., relationship visibility) — already spent by the wave-1 Bangla post and therefore banned.

**Generic context statistics used: zero.** No PIB, TRAI, Census or MEA figure appears.

---

## Phase 4–5 — drafting decisions

- **1,787 words** in `contentMarkdown`, FAQs excluded. 12 FAQs live only in `article.faqs` and the `@id`-matched `#faq` JSON-LD block. Max Jaccard similarity between any FAQ question and any body H2: **0.50**, well under the 0.85 flag.
- **18 original captions**, none derived from a song, a film or a competitor page. Song lyrics were deliberately avoided: it is the default caption move and a copyright trap.
- **Comparison table:** four rows, four columns, real values, and one column carrying first-party figures (38.5%, 90.9%, 48.3%) each labelled platform-wide.
- **Internal links (3):** `/proposal` placed immediately after the consent section, where the private-object-versus-public-object argument is made honestly and the page is described as something that should usually stay unlisted even when the post is public; `/love-gf` as the genuine alternative, on the established point that in Indian usage "propose" usually means the first ask rather than a marriage proposal; `/templates` in the closing limit paragraph. `templateUrls`: `/proposal`, `/love-gf`.
- **No algorithm, reach, follower-count or engagement claim** appears anywhere. Every platform statement is a documented mechanic from a Help Centre page that was fetched.

---

## Phase 6 — audit

50 checklist items, byte-verbatim, disjoint, summing to 50. **46 passed, 4 failed.** The four failures are recorded honestly rather than papered over:

1. *"The post contains at least one claim none of the top 5 pages make"* — SERP measured, ranking pages not fetched.
2. *"Target keyword in H1, metaTitle, slug, and first 100 words"* — the assigned keyword string `propose day wishes caption` is an autocomplete fragment and is not natural English; it appears as "Propose Day wishes and captions" in the first 100 words instead.
3. *"metaTitle 50–60 characters, exact keyword in the first five words"* — same cause; metaTitle is 56 characters and leads with "Propose Day Captions for Instagram".
4. *"Slug short, hyphenated, lowercase, no stop words"* — the assigned slug contains the stop word "for", retained because it is the searched phrasing and matches two of the three secondaries.

Twelve further notes that are **not** checklist items live in `batchMeta.structuralLimitations`.

## Honest assessment

This is a copy-text query with near-zero conversion — the searcher copies a line and leaves — so the page is a visibility asset judged on impressions, not a converting page, and it is not written as bait. What makes it worth publishing is that it is the only page in the territory that treats the caption as a disclosure about a second person and gives the reader something actionable before the list: ask her, decide the launch type, understand what a tag does. The SERP is held by high-volume caption farms with far more domain authority; a realistic target is position 6–10 over months, not weeks, and no ranking outcome is predicted.

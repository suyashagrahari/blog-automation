# Research brief — `rakhi-2026-custom-photo-wishes-card-maker-online`

Batch `2026-08-19-rakhi-4` · Cluster C02 · transactional / tool · P80 · 200–600 EST
Written 2026-08-19. Phase 0 skipped by instruction (facts.md generated 2026-08-19; `npm run facts` NOT re-run).

Mandated differentiator: **choosing the tool, and what "2026" actually changes** — a pre-flight
checklist for any online card maker, applied honestly to SubhSandesh, plus what a Friday festival
genuinely changes.

---

## Siblings that already exist (checked before sourcing)

In `content/batches/2026-08-19-rakhi-4/blogs/` at the time of writing, **one** sibling file existed:

- `happy-raksha-bandhan-wishes-with-name.json` — sources: `kops.uni-konstanz.de`,
  `journals.rudn.ru`, `ijhssi.org`, `hindiurduflagship.org`, `emerginginvestigators.org`.
  All five domains are banned for this post and none are reused.

Named C02 siblings in earlier batches, and what they own (not repeated here):

| Sibling | Batch | Owns |
|---|---|---|
| `raksha-bandhan-wishes-with-name-and-photo` | 2026-08-18-rakhi-2 | JPG-vs-link argument |
| `write-name-on-happy-raksha-bandhan-photo` | 2026-08-19-rakhi-3 | text legibility, contrast, WCAG |
| `make-raksha-bandhan-card-online-with-name` | 2026-08-19-rakhi-3 | the creation walkthrough, self-generation effect |
| `happy-raksha-bandhan-wishes-with-name` | this batch | name grammar, transliteration, mail-merge seam |

Overlap risk with `make-raksha-bandhan-card-online-with-name` is real but bounded: that post walks
the reader *through* one tool; this post is about deciding *whether to enter* a tool at all, and
about the calendar. No walkthrough steps are reproduced. Recorded in `honestAssessment`.

I read the `batchMeta.sources` of every blog in all six batch directories (43 files) before
choosing sources. No URL and no domain below appears in any of them.

---

## Phase 1 — SERP analysis (run 2026-08-19)

Two queries: the exact keyword, and `rakhi card maker online with photo and name free 2026 raksha
bandhan greeting card`. 16 distinct URLs surfaced. **The brief's SERP prediction was mostly right
but missed three sites**: `birthdayphotoframes.com`, `123greetings.com`, `postermywall.com`.

### The literal-match finding

`createcustomwishes.com` has a page whose **title is the exact keyword, word for word**:
`/greetings-card/rakhi-2026-custom-photo-wishes-card-maker-online/`. That is unusual and worth
naming — the keyword is almost certainly harvested off that page's title. It ranked in the top 5.

| # | Page (competitor — analysed, never cited) | Fetched | Body words | Year stamps found | Answers the query literally? |
|---|---|---|---|---|---|
| 1 | createcustomwishes.com category (Raksha Bandhan) | 200 | ~2,000 (73 template cards) | **2026** in title | Yes — it is a template grid |
| 1b | createcustomwishes.com exact-title page | 200 | ~600 | 2026 ×6 in body | Yes, but the body is 10 generic wishes, not tool guidance |
| 2 | canva.com/create/raksha-bandhan-cards | **403** | n/a | n/a | Blocked to crawlers; not verifiable |
| 3 | createcustomwishes.com homepage | not fetched | n/a | none in title | Partly |
| 4 | thefestivalwishes.com/create | 200 | ~1,200 nav-heavy | none | Yes — an editor index |
| 5 | canva.in/cards/templates/raksha-bandhan | 200 | ~1,668 | 2026 ×1 | Yes — template grid + FAQ |
| 6 | mynameart.com/greeting-cards/raksha-bandhan-photo-frames | 200 | ~629 | **2021 ×1, 2024 ×1**, 2026 ×3 | Yes |
| 7 | adobe.com/express/discover/wishes/raksha-bandhan | fetch failed | n/a | n/a | No — it is a 40-wishes listicle |
| 8 | zazzle.com/rakhi+cards | **403** | n/a | n/a | Print-and-ship, not a maker |
| 9 | funkypigeon.com personalised rakhi card | not fetched | n/a | none | Print-and-ship (UK) |
| 10 | apps.apple.com app listing | not fetched | n/a | none | App, not web |
| 11 | mynameart.com/greeting-cards/raksha-bandhan | 200 | ~713 | **title stamped 2024**, 2024 ×5, 2021 ×2 | Yes |
| 12 | mynameart.com/create-card/raksha-bandhan-free-ecards-download | not fetched | n/a | none | Yes |
| 13 | birthdayphotoframes.com/category/raksha-bandhan-cards-with-photos | 200 | ~463 | **2024 ×1, 2025 ×1** | Yes |
| 14 | 123greetings.com/events/rakshabandhan | 200 | ~738 | 2026 ×1 | Yes — ecards |
| 15 | postermywall.com search | 202, JS-rendered | n/a | n/a | Yes — template grid |
| 16 | en.wikipedia.org/wiki/Raksha_Bandhan | — | — | — | No (encyclopedia; banned as a source here) |

### The stale-year count (the number the differentiator asks for)

Of the **15 commercial ranking URLs** (excluding Wikipedia):

- **3 carry an earlier year** in the title or body: `mynameart.com/greeting-cards/raksha-bandhan`
  (title stamped **2024**, body 2024 ×5, 2021 ×2), `mynameart.com/.../raksha-bandhan-photo-frames`
  (body 2021, 2024), `birthdayphotoframes.com` (body 2024, 2025).
- **3 are explicitly stamped 2026**: the two createcustomwishes URLs and `canva.in` (once).
- **The remaining 9 carry no year at all** — which is the real story. A year-agnostic page written
  in 2023 keeps ranking for a "2026" query indefinitely, so the "2026" in the query is almost
  entirely unearned by the pages answering it.
- **Zero of the pages I could read mention that Raksha Bandhan 2026 falls on a Friday**, or that
  28 August 2026 is a working day. Not one. Verified by grep across the fetched text.
- One incidental finding: `thefestivalwishes.com`'s own Raksha Bandhan editor URL, linked from its
  navigation, returns **404**. A site ranking for "card maker" whose card maker is dead.

### Structural observations

- Almost every result is a **template grid**, not prose. The direct answer to "which maker should I
  use" appears on **none** of them.
- Word counts are low (463–1,668). Two of the biggest names (Canva `.com`, Zazzle) 403 crawlers
  entirely, so an answer engine cannot read them at all — a genuine opening.
- No page states an export policy, a watermark policy, a link-expiry policy, or what happens to an
  uploaded photo. Not one page names a downside of its own tool.
- Signup: `canva.in`'s page carries sign-in/register affordances; the name-art sites do not appear
  to gate the editor. None of them *tell* you before you start.

---

## Phase 2 — Gap analysis

**Table stakes** (must be present or the post looks incomplete): what a photo card maker does; that
free options exist; that you can add a name and a photo; the 2026 date; how to share on WhatsApp.

**The gap.** Every ranking page is the tool. None is *about choosing* a tool. The seven failure
modes a reader will hit — no export, watermark, expiring link, no post-send edit, forced signup,
unstated photo handling, desktop-only output — are all discoverable in 60 seconds *before* you
invest 30–45 minutes, and nobody has written that down. Second gap: the "2026" is decorative
everywhere. Nobody says the festival is on a **Friday**, which changes when you send.

**Stale data.** Three pages stamped 2021/2024/2025; nine year-agnostic pages implicitly restamped.
`mynameart` still advertises "2024" in its title tag in August 2026.

**Unanswered questions.** Will the free version watermark my card? Can I download it or only share
it? Will the link still work next year? Can I fix a typo after sending? Do I have to sign up first?
What happens to the photo of my brother that I uploaded?

**Fan-out sub-queries** → became H2s/H3s: is there a free rakhi card maker with photo; do card
makers watermark free downloads; can I download a card I made online; do shared card links expire;
can I edit a card after sending it; do I need an account to make a rakhi card; is it safe to upload
photos to a card maker; what day is Raksha Bandhan 2026; is Raksha Bandhan 2026 a holiday.

**Angle (one sentence).** This post wins by being the only one that turns "choose a rakhi card
maker" into a seven-item pre-flight test with real answers — including SubhSandesh's own failures
on export and template coverage — and by being the only one that says 28 August 2026 is a Friday.

---

## Phase 3 — Sources (all fetched and verified 2026-08-19)

Research lane assigned: deceptive design / dark patterns, forced registration and consent friction,
data portability as a user right. Banned for this post and avoided: `kops.uni-konstanz.de`,
`journals.rudn.ru`, `ijhssi.org`, `hindiurduflagship.org`, `emerginginvestigators.org`,
`trai.gov.in`, `dopt.gov.in`, plus the brief's 19-domain list (`doi.org`, `arxiv.org`,
`en.wikipedia.org`, `pmc.ncbi.nlm.nih.gov`, `learn.microsoft.com`, `hbs.edu`, `w3.org` and the rest).

| Source | Verified claim (read in the source text, not a snippet) | Published | Test |
|---|---|---|---|
| `webtransparency.cs.princeton.edu/dark-patterns/` — Mathur et al., **ACM CSCW 2019** | "We discovered 1,818 instances of dark patterns … 15 types"; "present on 1,254 of the ∼11K shopping websites (∼11.1%)"; "234 instances of deceptive dark patterns across 183 websites"; 22 third-party providers identified | 2019-11 (CSCW 2019) | peer-reviewed ✓ subject ✓ |
| `dspace.mit.edu/.../3313831.3376321.pdf` — Nouwens, Liccardi, Veale, Karger, **CHI 2020** | "the five most popular CMPs on the top 10,000 websites in the UK (n=680) … only 11.8% meet our minimal requirements based on European law"; "removing the opt-out button from the first page increases consent by 22–23 percentage points"; "providing more granular controls on the first page decreases consent by 8–20 percentage points"; Table 1 shows 80 of 680 = 11.8% | 2020-04-25 | peer-reviewed ✓ subject ✓ |
| `edpb.europa.eu/.../edpb_03-2022_guidelines_on_deceptive_design_patterns…v2_en_0.pdf` — EDPB Guidelines 03/2022, Version 2.0 | "Adopted on 14 February 2023"; six deceptive-design categories named in the text: **Overloading, Skipping, Stirring, Obstructing, Fickle, Left in the dark**; Obstructing covers "Dead end, Longer than necessary and Misleading action" (§4.4.1, §4.4.2) | 2023-02-14 | primary regulatory ✓ subject ✓ |
| `meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf` — **Digital Personal Data Protection Act, 2023**, Gazette of India | Title verified: "THE DIGITAL PERSONAL DATA PROTECTION ACT, 2023"; Gazette Extraordinary, 11 August 2023. Section 12 = "Right to correction and erasure of personal data"; Section 13 = "Right of grievance redressal". **The string "portab" appears 0 times in the Act** — Indian law grants no data-portability right, so export is a product promise, not a legal one | 2023-08-11 | primary regulatory ✓ subject ✓ |
| `pib.gov.in/PressReleaseIframePage.aspx?PRID=1983994` — Ministry of Consumer Affairs | CCPA issued "Guidelines for Prevention and Regulation of Dark Patterns, 2023" on **30 November 2023** under section 18 of the Consumer Protection Act, 2019, "listing 13 specified dark patterns"; defines dark patterns as design and choice architecture that "deceive, coerce, or influence consumers into making choices that are not in their best interest"; such practices are "unfair trade practices" under the Act | 2023-12-08 | India-specific regulatory ✓ subject ✓ |

**Swap test:** none of the five could sit unchanged in another post in this batch. A dark-patterns
crawl, a consent-popup field experiment, an EU deceptive-design taxonomy, the DPDP Act's silence on
portability and the CCPA's 13 patterns are all about *choosing and entering an online tool*. They
would be nonsense in a Marathi-wishes post or a long-distance-brother post.

**Generic context statistics:** the PIB release is the only government-portal item, and it is
topical (it *is* about deceptive design), not a background statistic. No TRAI, Census, MEA or
subscriber counts.

**Rejected / failed sources:** `consumeraffairs.nic.in` — the official CCPA guidelines PDF and even
the department homepage failed to resolve from this environment (network-level failure, twice), so
the guidelines are cited via the PIB release instead of the primary gazette text. `nls.ac.in`'s
"Dark-Patterns.pdf" turned out to be a summary note, not the annexure, and does not contain the
names of the 13 patterns — so **the post does not name any of the 13**, only the count and the
definition PIB verifies. `cs.princeton.edu/~arvindn/publications/dark-patterns.pdf` → 404.
`dl.acm.org` → 403. `aruneshmathur.co.in` → 404. All checked, none cited.

## Fact-check (not a citation)

Raksha Bandhan 2026 = **28 August 2026**, computed as **Friday**; 29–30 August are Saturday and
Sunday. For contrast, 9 August 2025 was a **Saturday** and 19 August 2024 was a **Monday**. No
muhurat time is stated anywhere in the post, so no panchang source is cited and the date stays out
of `sources` and `citation`, per the batch brief.

## First-party facts used (verbatim from `content/facts.md`, generated 2026-08-19)

- 99.4% of started pages are actually published and shared (2,722 of 2,739) — measured 2026-08-19
- Median gap between a page's first save and its last edit: 6.9 hours — sampled on "I love you" page (/love-gf), n=914 — measured 2026-08-19
- 51.8% of shared pages are opened on a phone (17,101 of 33,007 views) — measured 2026-08-19
- 44.3% of creators password-protect their page before sharing it (1,213 of 2,739) — measured 2026-08-19
- 2,739 personalised pages created since 2026-03-12, across 13 page types — measured 2026-08-19
- 2,253 registered creators — measured 2026-08-19

**Limit stated in the post, not papered over:** rakhi is not one of the 13 page types, so there is
no rakhi-specific first-party number. The platform-wide figures pass the subject test for "making
and sharing a personalised greeting" but fail the swap test across this batch.

## Product limitations stated plainly in the body

1. No file export — no JPG, no PNG, no PDF, no MP4. The output is a page on our domain.
2. The only rakhi template is `/happy-rakshabandhan-to-brother`, written **brother-first**.
3. The shared page carries SubhSandesh branding and a Create link. That is a watermark by another name.
4. Publishing requires an account, so a signup does stand between the reader and a live link — after
   the preview, not before it.

## Phase 5 targeting

- `categorySlug`: `festive-beats`. The post's second half is festival-calendar mechanics (a Friday
  festival, send timing), not the sibling relationship, so `family-and-continuity` would be a worse
  fit here even though the corpus leans festive-heavy.
- `templateUrls`: `https://subhsandesh.in/happy-rakshabandhan-to-brother`, `https://subhsandesh.in/templates`.
- Wikidata QIDs verified against the Wikipedia API (`action=query&prop=pageprops&ppprop=wikibase_item`),
  all six resolved, none guessed: Raksha Bandhan **Q10266**, Dark pattern **Q30325366**, Data
  portability **Q25325217**, European Data Protection Board **Q26877724**, Digital Personal Data
  Protection Act, 2023 **Q121754994**, Consumer Protection Act, 2019 **Q66809767**.
- Slug availability re-verified: `filters[slug][$eq]=rakhi-2026-custom-photo-wishes-card-maker-online`
  returned `[]`.

## metaTitle arithmetic — recorded as an audit failure

The keyword is **8 words and 48 characters**: `rakhi 2026 custom photo wishes card maker online`.
The checklist item reads "metaTitle 50–60 characters, exact keyword in the first five words (hard
cap 70)". The length half is satisfiable — the chosen metaTitle is 59 characters. The placement half
is **arithmetically impossible**: an 8-word keyword occupies words 1–8, so no five-word window can
contain it. The keyword does begin at word 1, which is the strongest available compliance. Recorded
in `auditReport.failed` with this arithmetic rather than by truncating the keyword.

The year-stamp rule is *not* breached: `meta-and-titles.md` permits a year on "genuinely time-bound
queries … anything where last year's answer is wrong rather than merely older", and this post's
whole second half is why last year's answer (a Saturday festival) is wrong for 2026.

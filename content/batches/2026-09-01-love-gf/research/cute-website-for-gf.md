# Research brief — `cute website for gf`

- **Slug:** `cute-website-for-gf` (verified free in Strapi: `filters[slug][$eq]` returned `[]`)
- **Batch:** `2026-09-01-love-gf` · **Category:** `digital-gifts-romance` (verified against the live Strapi category list, 10 categories)
- **Secondaries served on the same page:** `love website for girlfriend free`, `love website for girlfriend template`, `i love you website for girlfriend free`
- **Volume:** est. 1,000–3,000/mo (EST, no tool data), India market. Demand rank 15x.

---

## Phase 1 — SERP analysis

Two searches were run (`cute website for gf`, `love website for girlfriend free template`) plus direct fetches of the three weak slots and two competitor pages. Competitor pages were read for structure only — never cited, linked or paraphrased.

| Result | Type | Words / shape | Where the answer sits | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| `github.com/topics/romantic-website` | Weak slot | Repo index, 27 public repositories (HTML 10, JS 7, CSS 6, TS 3) | No prose answer at all | None | Repo cards, star counts | None | GitHub's own topic taxonomy |
| `github.com/ritvikbhatia/LoveProject` | Weak slot | README, ~60 words. 151 stars, 164 forks, 8 commits, static HTML/CSS/JS | One line: "a simple static webpage as a gift for my girlfriend" | None | Link to a GitHub Pages demo | First person, incidental | Nothing; it's a personal repo |
| Medium — "I Built a Website to Propose to My Girlfriend" | Weak slot | Personal narrative | Buried in the story | None | Prose | First person | Readership, not search |
| Competitor A (`justmeantforyou.com` blog) | Direct competitor | ~1,400 words | Paragraph 1, but as a definition rather than an answer | **Zero numbers anywhere** | Bulleted benefits, numbered how-to, internal template links, FAQ | Second person, warm, salesy | Its own Creator signup |
| Competitor B (`yourlovepage.online` blog) | Direct competitor | ~600 words, "5 min read", dated 7 July 2026 | Paragraph 1 | **Zero numbers.** Claims "about 5 minutes" to build | "6 cute website ideas" H3 list, each mapped to one of its own template names, then a 3-step how-to | Second person, breezy | Its own `/create` funnel |
| Weblium / Nicepage / Freepik template pages | Direct competitors | Template galleries | No prose | Template counts only | Grid | None | Builder signups |

**Structural read:** every commercial result runs the same four blocks — *what it is → why it beats a text/card → how to make it in N minutes → our templates → FAQ*. Not one publishes a verifiable number about the thing being described. Two independently claim the job takes about five minutes.

## Phase 2 — Gap analysis

**Table stakes** (must be present or the page looks incomplete): what a cute website is; that it needs no coding; that it works from one shared link; a section list; a how-to; a free-vs-paid note; FAQs.

**The gap.** Nobody explains *what actually goes on the page.* Every ranking result either sells a builder or is a weekend repo. The searcher's real question — "what do I put on it so it doesn't feel like a Word document with hearts?" — is unanswered on the entire first page. Nobody names a photo count, nobody mentions mobile autoplay blocking, nobody discusses password-protection, nobody costs out build-vs-buy, and nobody tells the truth about how long it takes.

**Stale / wrong data.** The "about 5 minutes" claim is the load-bearing falsehood. SubhSandesh's own median is **6.9 hours** between first save and last edit across 975 `/love-gf` pages. That is not a nitpick — it changes how the reader plans the evening, and it is the single most useful fact for anyone about to start.

**Unanswered questions raised and dropped by competitors:** how many photos; why the music doesn't play; whether the link is private; what happens on a slow connection; whether coding it is better.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what is a cute website for a girlfriend | What a cute website for a girlfriend actually is |
| what to put on a love website / sections / ideas | The 6 sections that earn their place (6 H3s → `ItemList`) |
| how many photos should I add | Why 8–12 photos beats 40, and what 40 costs on her phone |
| how long does it take to make | How long it really takes: a median of 6.9 hours, not five minutes |
| free template vs make my own / cost / no coding | Build it yourself or use a love website for girlfriend template (table) |
| is it private / can I lock it | Should you password-protect it? 42.9% of creators do |
| what style / aesthetic / dark theme | Which aesthetic suits her: warm and bright, or dark and cinematic |
| when is this a bad idea | When a free I love you website for your girlfriend is the wrong choice |

**Angle:** wins by being the only post that specifies what actually goes on the page and how long it really takes — a median 6.9 hours across 975 pages, against the "about 5 minutes" every ranking competitor claims — plus the photo-count and mobile-load failure modes none of them name.

## Phase 3 — Sources

Assigned vein: **self-disclosure, personalisation and perceived effort in digitally-mediated intimacy**, plus one load-time slot. Five sources, five distinct domains, zero generic context statistics, zero Wikipedia links in the body.

| Source | Type | Verified claim used | Published | Subject test | Peer-reviewed / open |
|---|---|---|---|---|---|
| Lee, Gillath & Miller, *Effects of self- and partner's online disclosure on relationship intimacy and satisfaction*, PLOS ONE 14(3): e0212186 | Peer-reviewed, CC BY | Greater disclosure depth → higher intimacy/satisfaction offline but **lower** online (Studies 1–4); the negative online effect appeared **only when perceived inclusivity of recipients was high** (Study 4); focusing content on the partner dissipated it (Study 5) | 2019-03-04 | Pass | Yes / yes (full text read) |
| Candel & Turliuc, *Relational Entitlement, Self-Disclosure and Perceived Partner Responsiveness in Predicting Couple Satisfaction*, Frontiers in Psychology 12:609232 | Peer-reviewed, CC BY | 7-day, twice-daily dyadic diary of **99 couples (198 participants)**; couple satisfaction positively related to self-disclosure, perceived partner self-disclosure and PPR at both levels | 2021-03-23 | Pass | Yes / yes (full text read) |
| Reshadi, Givi & Das, *Gifting digital versus physical gift cards*, Psychology & Marketing | Peer-reviewed | Across five studies, **givers were less likely to choose digital (vs. physical) gift cards than recipients were to prefer receiving them**, partly because givers overestimate how much recipients see digital gifts as violating gift-giving norms | 2023-01-07 | Pass | Yes / bronze OA — **abstract only** (publisher returned HTTP 403; claim verified from the publisher's Crossref-deposited abstract) |
| HTTP Archive, *Web Almanac 2024: Media* | Industry dataset | Median **13** `<img>` elements per mobile page, **56** at the 90th percentile; median image byte size **12 KB**; 99.9% of 10M+ scanned pages request at least one image | 2024-12-29 | Platform behaviour | n/a / yes (full text read) |
| web.dev (Google), *Largest Contentful Paint (LCP)* | Vendor documentation | A good LCP is **2.5 seconds or less**, measured at the **75th percentile** and segmented by mobile and desktop | 2019-08-08 | Platform behaviour | n/a / yes (full text read) |

**Searched and rejected / unavailable.** `self-disclosure intimacy digital media study`, `perceived effort gift appreciation research`, `personalisation perceived thoughtfulness study`, `mobile page load abandonment research`, plus PMC E-utilities and DOAJ title queries for `perceived effort AND gift`, `personalization AND gift`, `"digital gift"`, `effort AND thoughtfulness`.

- Jiang, Bazarova & Hancock (2011), *Human Communication Research* — the canonical disclosure–intimacy CMC paper. The Cornell open PDF is a scanned/DVIPS artefact that yielded no extractable text, so it could not be verified and was dropped rather than cited from memory.
- Fuchs, Schreier & Van Osselaer (2015), *The Handmade Effect* — directly on-vein (handmade products perceived to "contain love", holding after controlling for effort). The author PDF also failed text extraction; not cited.
- Kumar & Epley (2023), *A Little Good Goes an Unexpectedly Long Way* — the Rotman open copy timed out; only a PsyArXiv preprint of a different version was reachable. Not cited.
- The widely repeated "53% of mobile users abandon a site after 3 seconds" figure traces back through a chain of marketing blogs. Rejected in favour of Google's own current, dated LCP threshold.

**Competitors:** zero cited, zero linked, zero paraphrased. `competitors.md` re-read before drafting. The GitHub repositories are described generically ("the GitHub topic for romantic websites lists 27 public repositories") and not linked; the Medium post is not referenced.

## Phase 5 — Internal links and schema

- `https://subhsandesh.in/love-gf` — placed after the six-section list, because that section establishes what the template contains before naming it.
- `https://subhsandesh.in/darling` — placed inside the aesthetic discussion, where the dark/cinematic alternative is the actual subject.
- `https://subhsandesh.in/templates` — closing line only.

`structuredData` carries exactly two blocks: an `@id`-matched `BlogPosting` enrichment on `<canonicalURL>#post` with `about` (Personal web page, Q2737701), four `mentions` (Self-disclosure Q2892912, Static web page Q2641220, Web performance Q7978612, GitHub Q364 — all verified against the Wikipedia API) and `citation` mirroring the five sources one-to-one; plus an `ItemList` of the six H3s in the same order, `ItemListOrderDescending`.

## Phase 6 — Audit summary

50 checklist items, 48 passed, 2 failed, disjoint. The two failures are the swap test (the two performance sources are portable across posts) and full verification of the fifth outbound link (403; verified via the publisher's own deposited abstract instead). Both are recorded with reasons in `batchMeta.auditReport.failed`.

Honest read: seven of ten SERP slots are funded direct competitors and this post is unlikely to outperform them on the head term. Its defensible ground is the 6.9-hour median, the 13-images-per-page benchmark applied to a 40-photo love page, and the 42.9% password rate — three claims no competitor can print.

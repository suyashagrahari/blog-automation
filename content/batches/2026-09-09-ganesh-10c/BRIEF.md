# Batch brief — `2026-09-09-ganesh-10c`

Ganesh Chaturthi 2026, wave 3. Ten posts, one keyword each.
**Ganesh Chaturthi is Monday 14 September 2026. Today is 9 September — five days out.**
Anant Chaturdashi visarjan is Friday 25 September.

Waves 1 and 2 shipped 25 posts (`2026-09-09-ganesh-10`, `-10b`). This wave takes ten
keywords those 25 did **not** claim. Read this whole file before Phase 1.

---

## 1. What is new in this wave: real festival data

The 25 existing posts all lean on **platform-wide** behaviour facts, because
`content/facts.md` has no festival segment. This wave has something better.

`facts.md` was regenerated **2026-09-09** (17 facts). On top of it, three read-only
probes of the `gifts` database produced the batch's own measurement, which is **not in
facts.md** — cite it from this brief and caption it exactly as written here.

### The Raksha Bandhan lead-time measurement

Raksha Bandhan 2026 fell on **28 August 2026, twelve days ago**. Across **both** rakhi
collections (`rakshabandhanpages` + `rakshabandhansisterpages`), **n = 89** pages,
comparing the creation date to the festival date **in IST calendar days**:

| when the page was built | pages | share |
| --- | --- | --- |
| 4 or more days ahead | 6 | 6.7% |
| 2–3 days ahead | 5 | 5.6% |
| the day before | 24 | 27.0% |
| **on the day itself** | **44** | **49.4%** |
| after the festival had passed | 10 | 11.2% |

- **Median lead time: 0 days.**
- **Not one of the 89 was built more than 7 days ahead.** The earliest was 7 days.
- Of the 79 who got it done in time, **55.7% did it on the day** and **86.1% within
  24 hours of it**.
- Of the 44 built on the day, hour-of-day in IST clusters late morning — 24 of 44
  before noon, only 5 after 18:00.
- Median gap from a rakhi page's first save to its last edit: **5.4 hours** (n=89).
  (`facts.md` carries 6.8 hours, but that is sampled on `/love-gf`. Use 5.4 when you
  want the festival figure and say which one you are using.)

**Why this matters for every post in this wave.** The pages you are competing with are
"150+ wishes" listicles written for someone browsing at leisure. The only festival
SubhSandesh has actually measured says the opposite: people arrive on the day, or the
evening before, and finish in one sitting. Five days out, that is the reader.

### Mandatory disclosures when you use it

Every post that cites this number must, **in the body prose and not only in the
audit**, state both of these:

1. It is **Raksha Bandhan, not Ganesh Chaturthi** — a different festival, and a
   one-day one. Ganesh Chaturthi runs ten days to Anant Chaturdashi, so the same
   shape is *suggestive*, not measured for this festival.
2. **n = 89.** Small. Do not derive a per-template or per-region rate from it, and do
   not project a count of Ganesh pages from it.

### Two traps — do not fall into either

- **Holi is unusable.** `holipages` has n=9 and 100% were created after Holi had
  passed. Holi 2026 was 4 March; the platform's earliest page is well after that.
  That 100% is a launch artefact, not behaviour. **Never quote it.**
- **`pageviews` is not a page type.** It holds 46,009 view records. Putting it in a
  denominator of "pages created" is how you get a wrong share. The real denominator
  is **3,894 pages across 15 page types**.

### The honest limiter, which you should use rather than hide

Occasion-dated pages — every festival plus every wedding type — are **144 of 3,894
pages, 3.7%**. The platform is overwhelmingly romantic pages: 96.3%. If a post implies
Ganesh page-building is a mass behaviour on this platform, it is lying. There is no
Ganesh page-creation data **at all**, because the template is not live (see §3).

---

## 2. Source rules for this wave

Standard caps, counted **within this batch (`-10c`) only**: a URL in at most **2**
posts, a domain in at most **3**. Count *posts*, not source entries.

Waves 1–2 already spent **68 domains across 124 source URLs**. The caps reset for a
new batch, but a reader who lands on two SubhSandesh Ganesh posts should not see the
same citation. **Avoid these unless your post genuinely needs them:**

- `drikpanchang.com` — used in 19 of the 25. Fine for a date/tithi fact you cannot get
  elsewhere; never as your scholarly source.
- `arxiv.org` — used 4 times, and it is a preprint server: not peer-reviewed. If you
  cite it, say "preprint" in the `stat`.
- Heavily used already: `pmc.ncbi.nlm.nih.gov` (5), `frontiersin.org` (4),
  `aclanthology.org` (4), `archive.org` (4), `journals.plos.org` (3), `nature.com` (3),
  `gretil.sub.uni-goettingen.de` (3), `dsal.uchicago.edu` (3).

`doi.org` (17) is a resolver, not a publisher — resolving through it is fine.

**Each post has its own research lane** (§5), chosen so ten agents do not compete for
the same literature. Search the *phenomenon* in your lane, not the keyword.

Every source must pass the subject test and the swap test. At least 2 genuinely about
your subject, at least 1 peer-reviewed and open-access. At most 1 generic context
statistic. Never a competitor. Fetch it and verify it says what you claim; if only the
abstract is readable, cite only the abstract and record that in the audit.

---

## 3. The internal-link situation — REVERSED on 2026-09-10, read this before Phase 5

**UPDATE — the Ganesh page has shipped. Link it.**

Re-verified 2026-09-10:

| URL | status | evidence |
| --- | --- | --- |
| `/happy-ganesh-chaturthi` | **200, real page** | title "Happy Ganesh Chaturthi — Send a Ganpati Wish They Can Perform, Free"; 158 on-page mentions of ganesh/ganpati/modak/aarti |
| `/guides/happy-ganesh-chaturthi` | **200, real page** | H1 "Build a Ganesh Chaturthi page for the people you cannot sit with" |

`sitemap.xml` is now **1,123 URLs and both Ganesh URLs are in it** — it was 1,121 with
zero Ganesh entries a few hours earlier.

So, for any post not yet finalised:

- **`/happy-ganesh-chaturthi` is now the correct topical CTA.** Link it, and put it in
  `batchMeta.templateUrls`.
- `/guides/happy-ganesh-chaturthi` is a legitimate second link — it is the written
  step-by-step guide, and the YouTube walkthrough in §4 points at it.
- Keep `/templates` only if you want a third, broader link. It is no longer needed as a
  substitute.
- You may now write sentences that assume the reader can open the page today.

### What this superseded, kept for the record

Earlier on 2026-09-09 all 37 `TEMPLATE_LINKS` were checked and 36 returned 200 with
`/happy-ganesh-chaturthi` the single dead one — a genuine 404, confirmed in a real
browser showing an H1 of "404", with no Ganesh URL anywhere in the sitemap. The brief
therefore banned the link and told ten agents to use `/templates` instead. That was
correct when written and is now wrong.

**Consequences to handle at consolidation, not by you:**

- The four wave-3 posts already written under the ban (`banner-and-poster`,
  `songs-and-bhajans`, `ganpati-bappa-photos`, `good-morning-wishes`) omit the link and
  must be retrofitted.
- The 21 wave-1/2 posts that link `/happy-ganesh-chaturthi` were pointing at a 404 and
  are now correct with no action needed.
- One agent reported this URL as a *soft* 404 returning HTTP 200 with a not-found
  shell. That reading was taken mid-deploy; it is a real page now. Do not rely on a
  status code alone for this URL — check for on-page Ganesh content.

**Still true: the 25 wave-1/2 blog posts are NOT published.** No `/blog/<slug>` for any
of them appears in the sitemap. The product page shipping does not change that.

---

## 4. The social block every post in this wave carries

Waves 1–2 were retrofitted with this. Add it to `contentMarkdown` **immediately before
`## Sources`**, verbatim, so all 35 posts match:

```
## Watch the page get built

Ninety seconds, start to finish — the aarti going round, the five offerings, and the box at the end where they write a line back to you: [Ganesh Chaturthi Wishes Online — Full Walkthrough](https://www.youtube.com/watch?v=mpWiv5T59QY). More page walkthroughs on Instagram: [@subhsandesh_official](https://www.instagram.com/subhsandesh_official).
```

Those two links are verified. The YouTube video is SubhSandesh's own, 90 seconds,
uploaded 2026-09-09. The Instagram link is the **brand profile**, not a Ganesh post —
the account has 25 posts and none are Ganesh. Do not describe it as a Ganesh reel.
This block's ~51 words count toward your word budget.

---

## 5. Cannibalisation — the blocking check, and it is yours to run

I could not complete the India-localised SERP sweep myself: Google rate-limited the
harvest at HTTP 429 after two queries. Two things follow.

**First, your Phase 1 is not optional and not a formality.** Run it India-localised
(`gl=in`). Record position, domain and title for the top 10, plus AI Overview and PAA.

**Second, every keyword in this wave sits in a cluster where a sibling post is already
live.** Your assignment names it. Before you write a word:

> Compare your top 10 against the sibling's top 10 on **(domain, title)** identity —
> the same *article*, not merely the same publisher. Exclude Pinterest and YouTube
> from the count; those publishers rank a different asset for every query and will
> produce false merges.
>
> **3 or more shared results = the same keyword.** If you hit 3, **stop. Do not
> write.** Report the merge with the shared results listed, and I will substitute a
> reserve keyword.

That rule caught 4 false merges in the birthday batch when compared on domains, and 0
real ones when compared correctly on articles. Compare articles.

**Also record the format finding.** Several of these SERPs are expected to be
image-farm, app-store or design-tool results with **no informational page at all**. If
yours has no informational result and no AI Overview, a blog post may be the wrong
format for the query. That is a finding, not a failure — put it in `failed` with an
honest `why`, and say it plainly in `honestAssessment`. Do not pretend a listicle can
outrank Canva on a tool query.

Known already, from the two queries that did get through before the 429:

- **`happy ganesh chaturthi banner` and `happy ganesh chaturthi poster` share at
  least 5 of their top results** (postermywall.com, magnific.com, pinterest.com,
  stock.adobe.com, canva.in). They are one keyword. Folded into one post.
- That SERP is **entirely design tools and stock libraries — zero informational
  results.** The banner post is the highest-format-risk assignment in the wave.

---

## 6. Non-negotiables

- Direct answer in the **first 150 words**, with **at least two first-party numbers**
  in it.
- Body **1,500–1,800 words**, FAQs excluded. **FAQs live in `article.faqs` and the
  FAQPage JSON-LD only — never in `contentMarkdown`.**
- **8–12 FAQs**, spoken phrasing.
- Every H2 carries a specific number, date, price or named source.
- One comparison table with real values.
- `categorySlug`: **`indian-festivals`** for all ten. It is the festival hub.
- 2–4 internal links, descriptive anchors, placed after the section that earns them,
  **from the 36 live URLs only**.
- `structuredData` is **additive only** — an `ItemList` for any ranked body list, and
  an `@id`-matched block carrying `citation`. Never re-emit `BlogPosting`, `FAQPage`,
  `BreadcrumbList`, `Organization`, `WebSite` or `Person`; the site builds those and
  drops duplicates.
- Self-audit against **all 50** items in `references/publish-checklist.md`. Copy item
  strings **verbatim** — do not paraphrase, do not strip `**bold**`, do not truncate a
  clause. Assert `passed ∩ failed = ∅` and `|passed| + |failed| == 50`.
- Never claim the post will rank.

## 7. Housekeeping that has bitten this project before

- **The scratchpad is shared between all ten of you.** Name every temporary file
  `<slug>-<purpose>.md`. Three agents once wrote `body.md` and overwrote each other.
- **Run every script from the repository root.** A stray `cd` once created
  `content/keywords/.../content/batches/...` and the mistake was only caught because a
  glob returned 0 files while `ls` showed 20.
- **Write your files early and refine in place.** Two agents lost ~20 minutes of work
  to the machine sleeping mid-response. Do not hold a finished draft only in your head.
- The Mongo URI lives in `../server/.env` and is **never** printed or logged.

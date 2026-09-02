# Research brief — `movie night ideas at home with friends`

- **Slug:** `movie-night-ideas-at-home-with-friends` (checked live: `filters[slug][$eq]` returns `total: 0` against the 935 live articles, 2026-09-03)
- **Category:** `modern-romance` (verified against the live Strapi category list: `digital-gifts-romance, milestone-birthdays, modern-romance, family-and-continuity, big-fat-weddings, festive-beats, say-sorry-beautifully, miss-you-across-miles, virtual-bouquets, indian-festivals`)
- **Secondaries folded in:** `movie night ideas at home` (18x, contained in the primary), `movie night at home ideas`, `movie night ideas for family night` (12x, own H2), `friends movie night ideas`, `movie marathon ideas` (H3 4 + FAQ)
- **Timing:** evergreen, no year-stamp
- **Facts read from:** `content/facts.md`, regeneration stamped `2026-09-02`

---

## Phase 1 — SERP, and what could not be done

Measured by the orchestrator on 2026-09-02: `movienightsathome.com`, `neilchasefilm.com`,
`allgiftsconsidered.com`, `grahmsguide.com`, `caffeyolly.com`, `casolia.com`,
`designthusiasm.com`, `decisionmakertool.com`, `wikihow.com`, `starsandanchor.com` —
**1 of 10 weak.**

**The Phase 1 page-by-page fetch was not performed and cannot be.** `WebSearch` is
exhausted (200/200), and every one of the ten results is a competitor under
`references/competitors.md` (niche lifestyle/film blogs and content sites competing for
this exact long tail), so they are not fetchable as sources either. Two engines returned
false positives earlier today, so a 200 would not have been evidence in any case.
Consequences, recorded rather than papered over:

- The per-page word counts, heading structures and schema inventories the skill asks for
  are **absent from this brief**.
- Checklist item *"No section closely mirrors a competitor page's structure or framing"*
  is therefore recorded as **failed** — asserted, not verified.
- Item *"The post contains at least one claim none of the top 5 pages make"* is recorded as
  **passed**, because the first-party figures from our own database are unavailable to any
  competitor by construction. That much is certain without a fetch.

`movienightsathome.com` is a whole site dedicated to this query. Under Gate 4 this is a
**hard** row (~0.15 win probability on the head term), not a winnable one. The realistic
upside is answer-engine citation and long-tail variants.

## Phase 2 — gap analysis

**Table stakes** (from the SERP genre — aesthetic set-dressing listicles): a list of ideas,
snacks, seating/lighting, themes, a marathon idea, something for families.

**The gap.** Every ranking page treats a movie night as a *decorating* problem — fairy
lights, popcorn bars, blanket forts. None of them solves the two things that actually sink
it: **coordination** (someone is late, snacks arrive in triplicate) and **choosing** (six
people cannot agree, one person has seen it). Nobody names a decision procedure.

**Fan-out sub-queries → H2/H3 mapping:**

| Sub-query an answer engine would decompose to | Where it is answered |
|---|---|
| what do you need for a movie night at home | H2 "What a movie night at home with friends actually needs" |
| movie night ideas for friends | H2 "Seven movie night ideas at home with friends" (7 H3s) |
| how do you decide what to watch as a group | H2 "Four ways to settle what you're watching, compared" (table) |
| movie marathon ideas / how to plan a marathon | H3 4, plus FAQ on marathon length |
| why do movie nights go wrong | H2 "What actually breaks a group movie night" |
| movie night ideas for family night | H2 "Movie night ideas for family night, and where they differ" |
| virtual vs in-person movie night | H2 "Same room or different cities: not the same problem" |
| do I need an app / website for a movie night | H2 "When a link or a page is the wrong answer" |

**Angle (one sentence).** Wins by being the only post that treats a group movie night as a
decision problem rather than a decorating problem — a named picker, a three-film shortlist
and one veto each, settled the day before — using Masthoff's group-choice experiments and
our own 12.3 views per created page and 50.2% phone-open rate across 41,682 views.

**Deliberate separation from the wave-1 sibling.** `virtual-date-night-ideas-for-couples`
(`content/batches/2026-09-02-love-gf-3/blogs/`) was read before drafting. It owns the
*remote, mutual, scheduled* case: time zones, the setup tax, the phone-versus-laptop
mismatch, the audio clash that makes co-watching fail. This post owns the opposite
situation — everyone in one room — where nothing is technical and every failure is social.
The H2 "Same room or different cities: not the same problem" states the split explicitly so
the two pages read as deliberately different. No idea, source or first-party figure is
shared with it other than the site-wide phone-open rate, which is stated at a different
regeneration (50.2% of 41,682 here, 50.3% of 41,486 there). Also checked for adjacency:
`birthday-surprise-ideas-*` and `things-to-do-on-girlfriend-day` are occasion-gift posts
with no decision-procedure content; the only touch point is the birthday FAQ, which points
at a home-made feature rather than a gift.

**Not targeted:** `movie night ideas at home for couples` (22x) — cut on Gate 4 with 0 of 8
weak results, and it belongs to the sibling post.

## Phase 3 — sources

Four sources, all peer-reviewed, all open access, none from `USED-SOURCES.md`. Route used:
Crossref search → Unpaywall → repository, exactly as the brief predicted; OpenAlex, CORE and
Semantic Scholar were not needed. DOAJ full-text search was tried and returned nothing usable
for the group-decision vein.

| Source | What it verifies | Verification |
|---|---|---|
| Masthoff, *Group modeling: Selecting a sequence of television items to suit a group of viewers*, User Modeling and User-Adapted Interaction, Feb 2004 — [aura.abdn.ac.uk/handle/2164/2051](https://aura.abdn.ac.uk/handle/2164/2051) | 39 subjects, given three people's clip ratings, asked what the group should watch. No dominant strategy; Least Misery and Average Without Misery among those used; subjects "care about fairness and avoiding individual misery"; deviating subjects still "left out A and I", the two lowest-rated clips. Experiment 2: "the ratings of the first and last items in the sequence are especially important". | **Full text read** — 17-page published-version PDF from the AURA bitstream, text-extracted. Landing page confirmed to resolve (DSpace item 9d167331-…). |
| Scheibehenne, Greifeneder & Todd, *Can there ever be too many options? A meta-analytic review of choice overload*, Journal of Consumer Research, 2010 — [archive-ouverte.unige.ch/unige:76440](https://archive-ouverte.unige.ch/unige:76440) | "In a meta-analysis of 63 conditions from 50 published and unpublished experiments (N = 5,036), we found a mean effect size of virtually zero but considerable variance between studies"; "no sufficient conditions could be identified". | **Abstract only.** The UNIGE record carries the published version at public access level but the file would not extract; the `edoc.unibas.ch` copy is marked `IN_COPYRIGHT` / request-a-copy. Nothing beyond the abstract's own wording is claimed. |
| Guo, *Social television viewing with second screen platforms: antecedents and consequences*, Media and Communication 7(1), 19 Feb 2019, CC BY — [cogitatiopress.com/…/1745](https://www.cogitatiopress.com/mediaandcommunication/article/view/1745) | Two-stage online panel, 801 qualified respondents (mean age 39.3) plus a 209-respondent pilot. Program affinity γ = .464 (p < .01) was the strongest antecedent of social TV viewing, ahead of ease of use γ = .110, convenience γ = .132, compatibility γ = .123, interpersonal connection γ = .228, arousal γ = .126, interpersonal interaction γ = .109. | **Full text read** — publisher PDF (`/article/download/1745/1019`), figures verified in §4 Results. |
| Stuldreher, Thammasan, van Erp & Brouwer, *Physiological synchrony in EEG, electrodermal activity and heart rate reflects shared selective auditory attention*, Journal of Neural Engineering 17:046028, 11 Aug 2020, CC BY — [research.utwente.nl/…](https://research.utwente.nl/en/publications/d60ec203-0ef2-4355-8e6c-c8989760f1d4) | 27 participants (17 female, 18–48), each listening **one by one** to the same 66-minute audiobook, 13 per attentional condition after one exclusion; synchrony identified a participant's instruction in 96% (EEG), 73% (EDA), 73% (IBI) of cases. Used for the narrow claim that *attention*, not proximity, synchronises people. | **Full text read** — CC BY PDF via `publications.tno.nl` (same article; `iopscience.iop.org` is behind a Radware bot captcha). Landing page fetched and abstract confirmed. |

**Subject test:** all four pass — group choice of what to watch, choice overload, social
television viewing, shared attention. **Swap test:** none could sit unchanged in a sibling
post in this batch (`christmas-gift-for-girlfriend`, `eid-gift-for-wife`,
`flower-emoji-meaning-in-chat`, `new-year-gift-for-girlfriend`, `year-in-review-for-couples`).
**Generic context statistics:** zero. **Wikipedia body links:** zero.

**Cap check (counts distinct posts, not URLs).** None of the four URLs appears in
`USED-SOURCES.md` or in any sibling file in this batch. `aura.abdn.ac.uk`,
`archive-ouverte.unige.ch` and `research.utwente.nl` appear nowhere in the 666-URL list.
`cogitatiopress.com` is at **2 earlier posts** (from other batches, both other journals of
the same press) and **0 posts in this batch**, so with this post it is at 1 of the 3 allowed
in-batch posts — no breach. **If the orchestrator judges the historical `cogitatiopress.com`
count to be the binding number, the URL I would surrender is
`https://www.cogitatiopress.com/mediaandcommunication/article/view/1745`**, which would leave
the post with three sources and would cost the γ = .464 program-affinity finding used in the
definition H2, the table's fourth row and one FAQ. I have not dropped or swapped it myself.

### A source that was verified and then deliberately excluded

Dunbar, *Breaking bread: the functions of social eating* (Adaptive Human Behavior and
Physiology, 11 Mar 2017) was fetched in full from ORA and verified — 2,000-adult UK panel,
"only 21% of lunch groups contained more than four individuals, and only 27% of dinner
groups did so", 65% naming someone they should see more and 75% saying a shared meal was
how. It was then **removed from the post**, because its URL is already spent at line 466 of
`USED-SOURCES.md`. No reachable open-access substitute exists today: Krems et al. (2016),
Dunbar (2019) on the four-person conversation limit and Fay et al. (2017) on estimating
group size from speech are all closed access; the BYU repository copy of the oxytocin
shared-leisure paper is behind Cloudflare; DOAJ returned nothing. The group-size claim in
the family-night section is consequently **my own veto arithmetic plus our 12.3 views per
page**, not a cited finding, and the snack item now carries no citation at all.

## Phase 5 — targeting

- **Internal links (4, the maximum):** `/bouquet-gf` (mandatory) and `/love-gf` (the required
  one-of), both in the "wrong answer" H2 where the register problem is stated; `/loveflix`
  after the seven ideas, as the tie-breaker mechanic; `/watch` inside H3 7. None in the
  opening. All four are current `TEMPLATE_LINKS` entries.
- **The romantic-register problem, handled in the open.** `/bouquet-gf` and `/love-gf` are
  written to a partner, and `/loveflix` explicitly casts "your partner as the lead". The
  keyword's recipient is a group of friends. Rather than dressing them up as friend-ready,
  the body says plainly that all three are written in a romantic register and would need the
  copy rewritten for a friend group — and, for `/bouquet-gf` and `/love-gf`, that neither
  settles what you are watching. The phrasing is mine, not borrowed from the sibling post
  that made the same move about the Deed of Devotion.
- **`templateUrls`:** `/loveflix`, `/watch`, `/bouquet-gf`.
- **Pricing:** the Pricing block in `facts.md` is empty, so the post makes **no cost claim in
  any direction** — not "free", not "no subscription", not a rupee figure, in body, FAQs,
  meta, excerpt or table cell. Grep-checked. Recorded in `honestAssessment` as a gap, since
  cost is a live sub-intent here.
- **No streaming service is named or recommended as a product** anywhere in the post.

## What could not be verified

1. The ten ranking pages (see Phase 1). No word counts, no heading inventories, no schema audit.
2. Full text of Scheibehenne et al. (2010) — abstract only.
3. Any Indian-specific figure on group viewing or household TV use. None was sought from a
   competitor and none was found from a citable non-competitor inside the source budget, so
   the post carries no India-specific external statistic; the Indian context is carried by
   first-party data only.
4. Whether the historical `cogitatiopress.com` count (2 earlier posts) should bind. Recorded
   above with the URL I would surrender.

## Assertions run before emitting

- `passed ∩ failed = ∅` (0 overlap), `|passed| + |failed| = 50`, every item string
  byte-verbatim against `references/publish-checklist.md` (extracted programmatically, not
  retyped).
- Plain whitespace split (`md.split(/\s+/).filter(Boolean).length`) = **1,768 words**, inside
  1,500–1,800.
- 11 FAQs, in `article.faqs` only; no `## Frequently asked`/`## FAQ` heading in
  `contentMarkdown`; every FAQ compared against every H1/H2/H3 on meaning, with a
  word-overlap screen flagging only the shared "movie night at home" phrasing on the group-size
  FAQ, whose question ("how many friends") is asked by no heading.
- `/bouquet-gf` present, plus `/love-gf`. 4 internal links, 4 outbound, 0 competitor links.
- Schema validator from `references/article-json-schema.md`: passes, with the `@id`-matched
  enrichment block on `…#post` and an `ItemList` mirroring the seven H3s in order (checked
  by string comparison, not by eye).
- Every `sameAs` verified live against the Wikipedia API with its QID paired: Home cinema
  (Q864121), Overchoice (Q2233384), Social choice theory (Q1971461), Joint attention
  (Q9636076).

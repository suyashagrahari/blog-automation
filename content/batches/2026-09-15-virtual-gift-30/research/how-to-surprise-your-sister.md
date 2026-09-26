# Research brief — `how to surprise your sister`

- **Slug:** `how-to-surprise-your-sister`
- **Batch:** `2026-09-15-virtual-gift-30`, wave 5, row 1
- **Category:** `family-and-continuity` (**swapped** from the plan's `digital-gifts-romance` — see §6)
- **Templates:** `/catch`, `/rewind`, `/templates`
- **Market:** India. Evergreen, occasion-free.

---

## Phase 0 — Data gate

`npm run facts` is denied in this environment. `content/facts.md` was regenerated
**2026-09-24** (not 2026-09-15 as BRIEF-WAVE5 §6 states — the file's own lines carry the
later date, and the numbers moved: 5,199 pages not 4,357, 38.5% password not 40.6%,
2.5-hour edit gap not 6.2). Every figure in the post is quoted with the date printed on
its own line in `facts.md`.

Facts relevant to this keyword, well above the required three:

| Fact | Where it is used |
|---|---|
| 5,199 pages since 2026-03-12 across 21 page types | first 150 words |
| Top three page types — /apology-dashboard 1,396 (26.9%), /bouquet-gf 1,190 (22.9%), /love-gf 1,182 (22.7%) = 3,768, 72.5% | first 150 words; this **is** the register argument in a number |
| 38.5% password-protect before sharing (2,000 of 5,199) | same-house secrecy section, table |
| Median first save → last edit 2.5 h, n=1,396 | same-house section, table |
| 90.9% published and shared (4,724 of 5,199) | table |
| 48.3% of 57,456 views are on a phone | table, FAQ |
| 11.1 views per created page | FAQ on whether she opened it |

**Mandatory disclosure, carried in body prose and not only here:** the database records
which *template* was opened, never who received it. No count on this platform proves a
page reached a sister. `## Pricing` is EMPTY, so no price is stated, inferred or implied.

## Phase 1 — SERP

`SERPS-WAVE5.md`, `## how to surprise your sister`. **DuckDuckGo `kl=in-en`, collected
2026-09-25 — a genuine India SERP.** Wave 4's US-served Brave caveat does not apply and
is deliberately not repeated. 8 of 10 results are blog-shaped.

| # | Domain | Type | What it optimises for |
|---|---|---|---|
| 1 | mommyhoodlife.com | editorial listicle | "ways to surprise your sister **on her birthday**" |
| 2 | fnp.com/blog | retailer blog | flower and gift SKUs behind sibling-bond framing |
| 3 | oyehappy.com | retailer blog | "2 best ways … **on her birthday**" |
| 4 | wikihow.com | how-to | generic "surprise someone on their birthday" — not sister-specific |
| 5 | fnp.ae/blog | retailer blog | UAE arm of #2, **birthday** surprise ideas |
| 6 | dodoburd.com | affiliate roundup | "gifts for sister" — product list, not a surprise |
| 7 | cremecastle.in | cake retailer | "make your sister's **birthday** memorable" |
| 8 | inspirepearls.com | editorial | "how to make your sister excited" |
| 9 | skillmatics.in | toy retailer | sister surprise **on Raksha Bandhan** |
| 10 | bookthesurprise.com | surprise-service vendor | "**birthday** surprise for sister" |

Pages were not fetched individually: Firecrawl returns HTTP 402 in this environment and
the brief forbids curl/WebFetch. Classification above is from the URL, the SERP title and
the domain's known business model — sufficient for the gap analysis, and recorded here as
a limit rather than dressed up as a full read.

## Phase 2 — Gap

**Table stakes** (present on nearly all ten): a numbered list of ideas; at least one
low-cost option; something involving photos; something involving food or a cake; a
closing line about what the sister will feel.

**The gap, and it is large and measurable.** The query is occasion-free. **Seven of the
eight editorial results silently convert it into "her birthday"**, and a ninth converts it
into Raksha Bandhan. Nobody writes for the sister who has had a bad October, or a Tuesday.

Three further gaps, none of the ten touching any of them:

1. **Register.** Not one page says that a sibling gesture must be warm without reading as
   courtship and funny without being cruel, or gives a rule for where to aim the joke.
   This is the single most useful thing to tell a first-time non-romantic page-builder,
   and 86 of this batch's posts are partner-facing, so it is the wave's craft problem too.
2. **Living arrangement.** No page distinguishes the sister in the same house — where
   secrecy is close to impossible and the plan leaks through a shared charger, a shared
   room or a relative — from the sister who married and moved, where contact has thinned
   and the gesture carries different weight. In India these are the two real cases.
3. **Recommending against yourself.** No page names the situation in which a sent link is
   the wrong object. Three of the six ideas in this post involve no link at all, and the
   sixth is an aeroplane ticket.

**Stale data:** none of the ten cites a dated statistic at all, so there is nothing to
supersede — a finding in itself about how thin this SERP is.

**Fan-out sub-queries → H2/H3 mapping:** what counts as a surprise when it is not her
birthday (H2 2) · how to surprise a sister at home / keep it secret from a sibling (H2 5)
· surprise ideas for a married sister who lives far away (H2 6) · what to say to a sister
without it being awkward (H2 3) · ideas ranked by effort (H2 4, H2 7) · when not to do it
(H2 8). FAQ entries take the residue: elder vs younger, a child sister, several siblings
contributing, after a fight, being late, whether she needs an account.

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that treats
surprising a sister as a register problem rather than a gift problem, and splits the
answer by living arrangement rather than by occasion.

## Phase 3 — Sources

Route used: **OpenAlex (recovered — 200s today) → Crossref → landing page.** Unpaywall
timed out on every call from this sandbox and was abandoned after two attempts. DOAJ
answered but returned almost nothing topical for `sibling relationship`. Firecrawl: 402.

Blocked or dead during this run: `utupub.fi` 403 (cost us the 2021 kin-detection /
co-residence paper, which was the best fit for the same-house section); Wiley 403 (cost us
*Better late than never? Gift givers overestimate the relationship harm from giving late
gifts*, 2024, and *Adult sibling relationships: the impact of cohabitation, marriage,
separation and childbearing*, JMF 2023 — both directly on-topic and both unverifiable from
here, so neither is cited).

Searched the phenomenon, not the keyword: `sibling relationship quality adulthood`,
`sibling affection conflict`, `sibling teasing humor affection`, `adult sibling contact
frequency marriage`, `sibling relationship migration distance emotional closeness`,
`sibling co-residence childhood duration relationship quality`, `brother sister
relationship India kinship`, `Raksha Bandhan brother sister ritual`, `shared mobile phone
household India privacy`. The two India-specific searches returned nothing citable and
open — recorded here as a real finding, not padded over with a PIB or TRAI number. **This
post carries zero generic context statistics.**

**All four sources are abstract-and-metadata reads. PDFs do not parse in this sandbox.**

| Source | Domain | What it actually says | Used for |
|---|---|---|---|
| Walęcka-Matyja (2017), *Archives of Psychiatry and Psychotherapy* 19(3) | `archivespp.pl` | n=100, mean age 27.08 (SD 4.38), 60 women. Sisters' sibling relationships were based on Warmth, with higher Empathic Care and Personal Distress and **lower Self-defeating humour** than brothers | the register rule: aim the joke at yourself or the family, never at her |
| Voorpostel & van der Lippe (2007), *JMF* 69(5) | `research.rug.nl` | 6,289 individuals, 12,578 sibling and friend relationships. Siblings exchange **more practical and less emotional** support than friends; **living further away was positively related** to sibling emotional support, which the authors flagged as unexpected | why a done errand beats a declared feeling; why distance does not weaken the tie |
| Voorpostel & Blieszner (2008), *JMF* 70(1) | `research.rug.nl` | 1,259 triads (two siblings, one parent). Sibling support positively related to parental support — a reinforcing mechanism, **stronger among sisters** | route a married sister's surprise through the family, not around it |
| Edwards, Weller & Weissberg (2026), *Journal of Family Research* | `ubp.uni-bamberg.de` | 795 people answered the open postcard prompt "Please tell us about your brothers and sisters". What they volunteered was factual, not relational: **family form, geographical location, and the age at which siblings left home** | the material a married sister's surprise should be made of |

**Subject test:** all four are about siblings specifically. **Swap test:** none survives a
move to another post in this batch — 86 of them are partner-facing, and a finding about
sisters' humour styles or sibling postcards is useless in a girlfriend post. **Caps:**
`archivespp.pl` and `ubp.uni-bamberg.de` appear nowhere in `SPENT-SOURCES.json`;
`research.rug.nl` appears in neither `domainsAtCap` nor `domainsAtTwo`, and its two URLs
sit inside this one post, which counts once against the domain. **Zero competitor links.**
Not one of the ten SERP results is cited, linked or paraphrased.

## Phase 4–5 — Draft decisions

- 1,773 words by plain whitespace split; 8 H2s, 6 H3s, one H1, one 5-row table.
- FAQs are in `article.faqs` only, 11 of them, none restating a heading.
- Internal links: `/catch` and `/rewind` inside the ideas they belong to, `/templates`
  in the objection section, plus the mandated cross-link to the published sibling.
- `/catch` and `/rewind` descriptions are taken from `TEMPLATE_LINKS` in
  `app/lib/prompt.ts`, not paraphrased from the slug. `/rewind`'s closing card resolves
  to "which couple you actually are", which is wrong for a sibling — the post says so
  rather than hiding it.

## §6 — The two deliberate deviations

**Category swapped to `family-and-continuity`.** `WAVE5-PLAN.json` row 1 names
`digital-gifts-romance`. Both are live Strapi slugs, but filing a post about a sister
under a romance hub is the exact register error this wave exists to avoid, and it would
surface on the blog's category rail. The published sibling `birthday-surprise-page-for-sister`
is in `family-and-continuity`, so this also concentrates the sister cluster where its twin
already lives. Flagged loudly so the orchestrator can reverse it in one edit.

**Anti-cannibalisation.** `blogs/birthday-surprise-page-for-sister.json` was read in full
before drafting, and `blogs/` was grepped for *sister* and *sibling* rather than for the
keyword: it is the only one of the 86 posts with more than six mentions of either.
`how-to-surprise-someone` was also read, because it already owns "screen whether they like
being surprised" and "an Indian home where nobody has a private room" — this post does not
re-argue either; its same-house section is about the specific fact that a sibling knows
your tells, not about household privacy in general.

**The split, in one sentence:** the published post asks which SubhSandesh templates
survive the move from a partner to a sibling for one birthday page; this one is about
surprising a sister at all — occasion-free, wider than one artefact, split by whether she
lives in the same house or has married out, and explicit about the cases where no page is
the right object. The two are cross-linked from the final section.

Not aborted: the two posts share a recipient and nothing else — no H2, no source, no
first-party figure and no template overlap.

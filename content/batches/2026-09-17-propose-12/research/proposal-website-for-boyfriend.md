# Research brief — "proposal website for boyfriend"

Batch `2026-09-17-propose-12` · slug `proposal-website-for-boyfriend` · category `digital-gifts-romance`
Written 2026-09-17.

## Phase 1 — SERP analysis

`WebSearch` for the exact keyword. The BRIEF's warning about B2B contamination did **not**
materialise here: the romance word "boyfriend" is enough to keep the SERP entirely in the
romance half. Zero business-proposal SaaS results. That finding matters for the batch — the
contamination is specific to `online proposal website free`-shaped queries.

What did materialise is the gender problem. **Nine of the nine organic results returned are
written for a man asking a woman, or are gender-neutral tooling.** The single boyfriend-facing
result is a product landing page, not an article.

| # | Page | Words | Where the answer lands | Structure | Data cited | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | bemyval.co `/boyfriend-proposal-website-maker` | ~550 | First screen, but it is a product pitch not an answer | H1 + "Why people choose this" + 5-step how-to + FAQ + CTA | None. No dates, no numbers beyond "2-minute setup" | Second person, brisk, feature-led | Signup. The only boyfriend-facing page in the SERP, and it never addresses whether asking is culturally loaded |
| 2 | yourlovepage.online `/proposal-website` | ~600 | First screen | "How it works" (3 steps) + what to include + why it works + when to use + FAQ | None | Second person, warm, generic | Signup. H1 is "Ask **her** out" — an explicitly girlfriend-facing page ranking for a boyfriend query |
| 3 | yourlovepage.online `/blog/how-to-propose-online` | ~1,020 | After a nav block; answer is diffuse | 9 H2s, step-numbered, ends "The bottom line" | None | Second person, listicle | The `how to propose online` query; "her" throughout. Note: its front-matter block leaks into the rendered page as an H2 — a real quality tell |
| 4 | proposelove.netlify.app | ~4 rendered | Nowhere — client-rendered shell | None extractable | None | n/a | Nothing. A JS app with no server-rendered content; it ranks on domain/anchor signals alone |
| 5 | medium.com — "I Built a Website to Propose to My Girlfriend" | long-form | Narrative, answer buried | Personal essay | First-hand only | First person | Engagement. Genuinely original, and girlfriend-facing |

Also present: a GitHub template repo, a Wikipedia article on *engagement chicken* (an entity
misfire), and adiamondisforever.com's personality-quiz proposal ideas.

No AI Overview was returned for the query.

**All five are competitors under `references/competitors.md`** (page-builder tools and
adjacent tutorial content). None is cited, linked or paraphrased.

## Site baseline — verified independently

Queried Strapi directly rather than trusting the brief:

- `filters[slug][$contains]=propos` → **29 live articles**. (The brief's figure of 46 counts
  proposal-intent pages more broadly; 29 is the count that carries "propos" in the slug.)
- Of those 29, **zero are boyfriend-facing**. Filtering the slug list for
  `boyfriend|-bf|him|husband` returns an empty set. Every one is girlfriend-, crush- or
  mechanics-facing: `create-interactive-proposal-website-girlfriend`,
  `how-to-code-a-moving-button-proposal-website-for-crush`,
  `how-to-trick-your-girlfriend-with-a-fake-quiz-link-proposal`, and so on.
- `filters[slug][$eq]=proposal-website-for-boyfriend` → total 0. **Slug is free.**

So the brief's claim holds in the direction that matters: the gender flip is an unserved
segment both on the SERP and on our own site.

## Phase 2 — Gap analysis

**Table stakes** (present on all five): what a proposal page is; that it is a shareable link;
a build/how-it-works sequence; what to put on it; an FAQ block; a CTA.

**The gap.** Not one page acknowledges that the reader might be a woman proposing to a man.
Result #1 is nominally boyfriend-facing but treats the gender flip as a pure string
substitution — "Ask Him To Be Your Boyfriend In A Fun, Confident Way" — and never touches the
question the reader actually has. The unanswered question is **"is this weird?"**, and behind
it four practical ones nobody answers: the ring, public vs private, telling the families, and
the absence of a script to copy.

**Stale data.** There is no data on any of the five pages to be stale. That is itself the
opening: a SERP with zero cited figures is one where a page with named research and dated
first-party numbers is structurally different, not merely better written.

**Fan-out sub-queries → H2s.**

| Sub-query | Became |
|---|---|
| is it weird for a girl to propose to her boyfriend | `## Is it weird for a woman to propose to her boyfriend?` |
| what is a proposal website for a boyfriend | `## What a proposal website for a boyfriend actually is` |
| how is proposing to a man different | `## Four things that change when you are the one asking` (4 H3s) |
| should I buy him a ring / propose in public or private | H3s 1 and 2, plus the comparison table |
| can women propose on 29 February / leap year rule | `## The leap-year story, and why it is context rather than advice` |
| do Indian women propose / is it accepted in India | `## What this research does not say about India` |
| when not to send a proposal link | `## When a proposal page is the wrong choice` |

**Angle.** Wins by being the only proposal-website page written for the woman doing the
asking — answering "is this weird?" with named research on engagement proposal scripts,
admitting outright that no Indian study measures who proposes, and grounding the practical
advice in SubhSandesh's platform-wide 40.0% password-protection rate (1,809 of 4,524 pages).

## Phase 3 — Sources

Lane: gender and marriage-proposal norms. Banned in this batch: `arxiv.org`,
`ncbi.nlm.nih.gov` / `pmc.ncbi.nlm.nih.gov` (at cap); `journals.plos.org` avoided (one slot
left, not needed).

Sibling-file audit before adding anything — domain counts already in `blogs/`:
`arxiv.org` 4, `pmc.ncbi.nlm.nih.gov` 3, `journals.plos.org` 2, `doi.org` 2, `nature.com` 2,
`ncbi.nlm.nih.gov` 2, and one each for `thejsms.org`, `journals.sagepub.com`,
`cyberpsychology.eu`, `hbs.edu`, `pewresearch.org`, `frontiersin.org`, `shura.shu.ac.uk`.
No URL of mine appears in any sibling. After this post: `journals.sagepub.com` = 3 (at the cap,
not over), `frontiersin.org` = 2, `link.springer.com` = 1, `en.wikipedia.org` = 1.

| Source | Date | Domain | Why it passes the subject test | Access |
|---|---|---|---|---|
| Socius, "Conformity to Heterosexual Engagement Proposal Scripts: Do Same-Sex Couples Benefit?" | 2022-12-01 | journals.sagepub.com | Directly about engagement proposal scripts and the social legitimacy conformity buys | Open access (DOAJ-listed). **Abstract read via the DOAJ API record — the SAGE page returned HTTP 403 to every fetch** |
| Sex Roles, "Women's Endorsement of Heteronormative Dating Scripts…" | 2023-07-24 | link.springer.com | Measures endorsement of the exact script ("men… making marriage proposals") and what predicts it | CC BY, hybrid OA. Abstract verified via OpenAlex; Springer HTML behind a Cloudflare challenge, Essex repository PDF fetched but text layer did not extract |
| Frontiers in Psychology, "Romantic ideals, mate preferences… young adults in India and America" | 2014-12-02 | frontiersin.org | The only India-inclusive peer-reviewed evidence found on gender-role traditionalism and romantic belief | CC BY, gold OA |
| Journal of Family Issues, "'Marriage is a Complete Gamble': Marriage Attitudes of the Indian Middle Class" | 2025-07-04 | journals.sagepub.com | India-specific, on the stigma attached to self-choice marriage | **Paywalled — abstract only**, via the publisher-supplied abstract in OpenAlex |
| Wikipedia, "Bachelor's Day (tradition)" | no publication date | en.wikipedia.org | Entity disambiguation for the leap-year custom; not counted as research | Free |

Zero generic context statistics. No PIB/TRAI/Census figure appears in this post.

**The honest finding this brief is obliged to record.** Searched, in this order:
`gender marriage proposal norms study`, `who proposes engagement gendered script research`,
`attitudes women proposing peer reviewed`, `relationship initiation gender roles open access`,
`arranged marriage self-choice marriage India gender young adults study` (scoped to mdpi.com,
journals.sagepub.com, frontiersin.org, tandfonline.com, springeropen.com), and
`gender ritual engagement wedding tradition women propose leap year study`. **No study of who
proposes in India was found.** The proposal-script literature is American (Socius, and the
paywalled 2013 *Journal of Adolescent Research* "Girls Don't Propose! Ew.", which is not OA and
was therefore not cited), Australian (Sex Roles), British and Norwegian. The two India-specific
papers found are about marriage *choice*, not about who asks. This is stated in the body under
its own H2 rather than papered over, and it is repeated in the audit.

`mdpi.com` was searched and produced nothing in lane — its nearest hits were Vatsonga wedding
ritual in southern Africa and Confucian Chinese wedding rites. Not used rather than stretched.

## Phase 4–5 notes

- Templates: `/proposal` primary. `/court-of-love` offered for couples where a straight
  proposal would land badly, `/date-invitation` for a reader asking him out rather than to
  marry. Both named with a reason, in the "wrong choice" block, not as a menu.
- First-party honesty: every SubhSandesh number in the body is labelled platform-wide or
  /love-gf-sampled in prose. The girlfriend-facing template creation counts (`/love-gf`,
  `/bouquet-gf`, `/birthday-gf`) are **deliberately not used** — they are evidence about
  girlfriend pages and would be misleading in a post about proposing to a man.
- Date check: Propose Day 2027 is **Monday 8 February 2027** (verified by computation). The
  next 29 February is in **2028**.

## Known weaknesses carried into the audit

1. The "Sources" H2 is not answerable standalone — an unavoidable conflict with the trust-signal
   requirement for a visible dated sources list.
2. Two of five outbound links (SAGE) could not be fetched directly; their claims were verified
   against the DOAJ and OpenAlex API records for the same DOIs.
3. The Frontiers 2014 source is borderline on the swap test and is kept, with its limitation
   stated in the body.
4. **Structural, per the BRIEF:** no proposal-specific first-party figures were obtainable, so
   there is no proposal-template password rate, no proposal edit-time median, and no split of
   who creates proposal pages. A per-template password rate would have been the single
   strongest fact this post could have carried.

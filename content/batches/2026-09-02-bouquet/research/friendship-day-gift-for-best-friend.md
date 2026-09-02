# Research brief — `friendship day gift for best friend`

- **Slug**: `friendship-day-gift-for-best-friend` — verified free against Strapi on 2026-09-02 (`filters[slug][$eq]` returned `total: 0` against 935 live articles).
- **Category**: `digital-gifts-romance` — confirmed present in the live category list (10 categories returned).
- **Volume signal**: 29x — the second-highest-demand keyword in the 30-keyword shortlist.
- **Occasion**: Friendship Day in India is the first Sunday of August; 2027 falls on **1 August**. `publish_by 2027-05-09`. No year in the title.

---

## Phase 1 — SERP, measured 2026-09-02

`WebSearch` was exhausted for the session (200/200) and `WebFetch` is hook-blocked, so the SERP composition below is the orchestrator's measurement handed down in the assignment rather than a fresh pull by this agent. **This is a real limitation and it is recorded rather than papered over**: individual competitor page word counts, heading structures and schema were not re-verified by me.

| Result | Type | What it optimises for | Answers "which gift for which friend"? |
|---|---|---|---|
| FNP | Gift retailer | Product grid + cart | No |
| Winni | Gift retailer | Product grid + delivery slots | No |
| IGP | Gift retailer | Product grid + price filters | No |
| OyeGifts | Gift retailer | Product grid | No |
| GrabOn | Coupons | Discount codes against retailers | No |
| Giftlaya | Gift retailer | Product grid | No |
| OyeHappy | Gift retailer | Product grid | No |
| Instax | Brand/product | Instant-camera SKUs | No |
| Tring | Celebrity shoutouts | Single-product funnel | No |
| CGAI | Gift retailer | Product grid | No |

**0 weak results, 10 commercial pages, 0 editorial.** Every one is a product grid. None was fetched, cited, linked or paraphrased — see `references/competitors.md`.

## Phase 2 — Gap analysis

**Table stakes** (present across the grids, so the post must cover them or read as incomplete): the date of Friendship Day; a distance/long-distance case; a "what if it's last minute" case; some notion of personalisation; a group-of-friends case.

**The gap.** Nobody separates the *friendships*. The variant set — `forever` (29x), `girl` (28x), `easy` (24x), `boy` (21x), `gifts for friends on friendship day` (18x), `friendship day best gift for best friend` (17x) — reads as demand for a list of cheap ideas, and that is the trap: a 30-item listicle is precisely what the retailers already publish. The genuinely unanswered question is *which* friend. The friend you see weekly, the friend you have not seen in three years, the friend who emigrated and the group chat of six are four different problems with four different answers, and no page on this SERP separates them.

**Stale/absent data.** Zero of the ten cite any research at all, so there is nothing to supersede — there is only an empty field to occupy.

**Fan-out sub-queries → became H2s or FAQs:**
- When is Friendship Day / is it the same as the UN day? → definition H2 + 2 FAQs
- What do I give a friend I rarely see? → H3 2 + FAQ
- What do I give a friend abroad, and do I need their address? → H3 3 + 2 FAQs
- What's an *easy* gift? → H3 2 + FAQ
- Girl friend vs boy friend → H2 on decay + 2 FAQs
- Gift for a whole group → H3 4 + FAQ
- Is a digital gift enough? → objection H2 + FAQ

**Angle (recorded as `batchMeta.angle`).** Wins by being the only post that sorts the Friendship Day gift decision by the state of the friendship instead of by object type, using SubhSandesh's own 795-page digital-bouquet share (23.4% of 3,394 pages) as the evidence for what people actually send when there is no parcel to post.

## De-duplication against live articles

Both nearest live posts were fetched from Strapi and read before drafting:

- **`digital-bouquet-for-best-friend`** (1,300 words). Owns "how to build a digital bouquet": 7-step build, design tips, message samples, photo/music practices, troubleshooting. **My post contains no build steps, no message templates and no design tips.**
- **`birthday-gift-ideas-for-best-friend`** (1,435 words, j=0.22). Owns "50+ ideas by object type" plus a two-week logistics checklist. **My post has no idea-list-by-type and no logistics checklist.**

Sibling `what-to-do-for-friendship-day` owns activities and plans; my post commits to the *object or gesture* decision and never proposes an itinerary. The one overlap point — "pair the gift with an actual proposal for a date" — is one clause, deliberately not developed.

## Phase 3 — Sources

Search route: OpenAlex was rate-limited out (HTTP 429, daily budget spent by concurrent agents) and CORE returned 429 throughout, so sourcing ran through **Crossref → Unpaywall → repository landing page**, plus the DOAJ article API. Every URL below was fetched successfully and read; every claim in the body is narrower than what the source states.

| # | Source | Subject test | Peer-reviewed | Open access | What was actually read |
|---|---|---|---|---|---|
| 1 | Policarpo, `czasopisma.uni.lodz.pl/qualit/article/view/11673` | Pass — long-distance friendship | Yes (Qualitative Sociology Review 12(2), 22–42) | Yes, CC BY-NC-ND | **Abstract only** |
| 2 | Roberts & Dunbar, `researchonline.ljmu.ac.uk/id/eprint/7521/` | Pass — friendship decay and effort | Yes (Human Nature 26(4), 426–450) | Yes, published-version PDF in repository | Abstract + repository record |
| 3 | Shtudiner, `accessecon.com/.../EB-20-V40-I3-P172.pdf` | Pass — festival gift-giving | Yes (Economics Bulletin 40(3), 1977–1984) | Yes | **Full text** (pp. 1–2 extracted) |
| 4 | Scott, Stuart & Barber, `hdl.handle.net/10072/418176` | Pass — online vs offline interaction with close friends | Yes (Computers in Human Behavior Reports) | Yes, CC BY-NC-ND, VoR in repository | **Abstract only** (via DOAJ metadata) + repository record |
| 5 | United Nations, `un.org/en/observances/friendship-day` | Context/entity, not research | No | Yes | Full page |

Counts: 5 sources; 4 pass the subject test; 4 are peer-reviewed **and** open-access; 1 generic context source. None appears in `USED-SOURCES.md` (618 spent URLs checked by URL and by domain: four of the five domains occur zero times; `hdl.handle.net` occurs once under a different handle). None is a competitor.

**Verified findings, as stated by the sources:**

1. Policarpo (2016): friendships survive geographical separation largely through routines and rituals that keep the tie alive by re-enacting a shared sense of identity and "ontological security" through the "work of memory".
2. Roberts & Dunbar (2015): across 18 months and a major life transition, family relationships and friendships differed strikingly; friendship quality declined, the decline was mitigated by increased effort, and the effective effort split by gender — increased contact frequency for females, more shared activities for males.
3. Shtudiner (2020): holiday gift purchases produced welfare gains rather than the predicted deadweight loss; **social distance between giver and recipient did not affect the welfare gain**.
4. Scott, Stuart & Barber (2022): of 687 Australian young adults recruited and 672 who answered the open question, 567 perceived a difference between online and offline interactions with close friends; themes included depth, intimacy and perceived value.
5. UN: the International Day of Friendship is 30 July, proclaimed by the UN General Assembly in 2011 — distinct from India's first-Sunday-of-August observance.

**A source found and deliberately not cited.** Fuchs, Schreier & van Osselaer, "The Handmade Effect: What's Love Got to Do with It?" (Journal of Marketing, 2015, doi `10.1509/jm.14.0018`) would have been the strongest anchor for hand-assembling a bouquet yourself — four studies finding handmade products more attractive largely because they are perceived to symbolically "contain love". Its **only** open-access location is the TUM repository (`mediatum.ub.tum.de/node?id=1243919`), which serves an Anubis proof-of-work bot challenge and could not be opened, and that copy is the *submitted* version. Only the publisher-deposited Crossref abstract was readable. **Not cited**, because a citation a reader cannot open defeats the purpose. Re-check if TUM drops the challenge or another repository copy appears.

Search terms that returned nothing usable: `gift giving friendship social relationships qualitative study meaning`, `gift personalization perceived thoughtfulness recipient`, `friendship day celebration youth India survey`, `digital gift virtual gifting social media platform`, `gift givers overestimate recipients thoughtfulness`. The consumer-psychology literature on giver/recipient preference mismatch (Gino & Flynn; Givi & Galak; Zhang & Epley) is almost entirely paywalled with no repository copies surfaced by Unpaywall — a real gap, and the reason the gift-economics leg of the argument rests on one Economics Bulletin paper rather than three.

## Phase 4–5 — Build notes

- **1,791 words** in `contentMarkdown`, plain whitespace split, FAQs excluded (1,776 before the Phase 8 fix pass; `wordCount()` in `app/lib/batches.ts`, which the studio displays, reads 1,816). **12 FAQs** in `article.faqs` only, none of them duplicated as a body heading (checked verbatim and case-insensitively against every H1–H3).
- 7 first-party facts used, copied verbatim from `content/facts.md` (regenerated 2026-09-02). Three land inside the first 150 words: 795 / 23.4%, 3,394, 12.3.
- **The pricing block in `facts.md` is empty, so the post makes no cost claim in any direction** — no "free", no "no delivery charge", no price comparison. The comparison table's cost-adjacent column is *time to put together*, not money. This is the single largest unmet reader need on this keyword, given how hard the variants pull towards "cheap" and "easy": recorded here as a gap, not smuggled in.
- Every first-party number is platform-wide and skewed romantic. The body says so explicitly in the closing section rather than implying friendship-specific rates.
- Internal links (4, all real `TEMPLATE_LINKS` paths, all after the section that earns them): `/bouquet-gf` in the abroad case, `/missyou-gf` in the decay section, `/love-gf` and `/darling` in the objection section — the last two used *honestly*, as templates that are wrong for a platonic friend. `templateUrls` carries the three mandatory ones (`templateUrls` is capped at 3 by the schema, so `/missyou-gf` is linked in the body without being listed there).
- The `/bouquet-gf` "Deed of Devotion" is written for a romantic partner. The body states plainly that it needs rewording for a friend.
- `structuredData`: one `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` carrying `citation` (5, mirroring `batchMeta.sources` one-to-one), `about` (Friendship Day) and 4 `mentions`; plus one `ItemList` mirroring the four H3s in order. All six Wikidata QIDs verified through the Wikipedia API on 2026-09-02 (Friendship Day Q14551661, Friendship Q491, Gift Q184303, Long-distance relationship Q1406917, India Q668). No Wikipedia link appears in the body.

## Phase 6 — Audit summary

**47 passed, 3 failed, disjoint, 50 total, strings byte-verbatim** (verified by extracting the items from `publish-checklist.md` and diffing).

1. `metaTitle … exact keyword in the first five words` — known checklist defect; the keyword is six words. Placed at word one, 55 characters.
2. `Slug short, hyphenated, lowercase, no stop words` — known checklist defect; the slug is the pre-verified exact-match keyword and contains "for".
3. `No source passes the swap test` — one of five fails: the Shtudiner paper is about festival gift-giving generally and could sit in any gift post in this cluster. Kept because the specific finding used (social distance did not affect the welfare gain) only bites in a post that segments by closeness. **This is the URL to surrender if the orchestrator wants a clean pass.** Nothing was dropped or swapped unilaterally.

The batch cap was re-counted once four of the five sibling posts existed: no URL on more than one post, no domain on more than two.

---

## Phase 8 — Fix pass, 2026-09-02

**One real defect, fixed.** The decay section linked `https://subhsandesh.in/missyou-bestfriend`,
which returns HTTP 307 and redirects to `/missyou-gf`. `/missyou-bestfriend` has since been removed
from `TEMPLATE_LINKS` in `app/lib/prompt.ts` along with nine other 307 redirects: the
recipient-specific pages were consolidated into one page per occasion, so no separate best-friend
miss-you page exists. Unlike the `/valentine-gf → /love-gf` case in two sibling posts, `/missyou-gf`
is a page this post does not otherwise link, so the link was not a duplicate — it just pointed at a
redirect. It was kept and repointed rather than deleted.

The anchor also had to change. It read `"I miss you" page for a best friend`, which promises a
variant that does not exist; `/missyou-gf` is described in `TEMPLATE_LINKS` as the "'I miss you' page
for a girlfriend/partner". The sentence now reads:

> The ["I miss you" page](https://subhsandesh.in/missyou-gf) carries that ask, though it is written
> for a partner and there is no best-friend version, so reword it first.

That matches how `/bouquet-gf` is already handled in the abroad case and is consistent with the
objection section, which says romantic templates sent to a platonic friend read as a confession.
All four internal links now resolve 200: `/bouquet-gf`, `/missyou-gf`, `/love-gf`, `/darling`.
`Every internal link is a real URL from TEMPLATE_LINKS` was re-checked path by path against the
current `TEMPLATE_LINKS` and now genuinely passes; it stays in `passed`.

**Pricing re-scan.** A batch-level scan flagged possible pricing language. Every hit is abstract, not
a cost claim about SubhSandesh: "the price of the object", "the lowest maintenance cost", "the
marginal cost of adding a seventh name", "a higher spending floor". `contentMarkdown`, all 12 FAQ
answers, `metaDescription`, `excerpt`, `keyTakeaways`, the comparison table and `structuredData` were
re-scanned for `free`, `price`, `cost`, `₹`, `pay`, `charge`, `cheap`, `discount`, `fee`,
`subscription`, `tier`, `budget` and `spend`: no cost, price or "free" claim about the product appears
anywhere. Nothing was scrubbed. The `facts.md` pricing block is still empty, so the gap stands as
recorded.

**Facts re-verified against the regenerated `content/facts.md`.** All 7 `factsUsed` entries match the
current file byte for byte — 3,394 pages, 795 bouquets, 23.4%, 12.3 views, 50.2% phone, 6.9 hours
n=995, 42.8% password, 99.5% (3,376 of 3,394). No stale 50.3% or 3,377 anywhere in the post.

**Checklist re-run in full: 47 passed / 3 failed**, disjoint, 50 total, every string byte-verbatim
against `publish-checklist.md`. The three remaining failures are unchanged in substance:

1. `metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)` — genuinely
   fails and cannot be fixed: the keyword is six words. Kept.
2. `Slug short, hyphenated, lowercase, no stop words` — genuinely fails on "for". Kept; the slug is
   the pre-verified exact-match keyword.
3. `No source passes the **swap test**` — Shtudiner (2020) is one source of five and could sit in any
   gift post in this cluster. Not dropped and not swapped. The `why` was rewritten to record that it
   is one of five, that the batch cap was re-counted during this pass with no URL on more than 1 post
   and no domain on more than 2, and that the decision to surrender it belongs to the orchestrator,
   which alone sees the whole batch.

`honestAssessment` was rewritten to describe the post as it now stands, keeping all three recorded
limitations: platform-wide numbers skewed romantic, abstract-only reads for Policarpo (2016) and
Scott et al. (2022), and the pricing gap. No source was added, dropped or swapped in this pass.

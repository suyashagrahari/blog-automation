# Research brief — `how to surprise wife`

- **Slug:** `how-to-surprise-your-wife`
- **Batch:** `2026-09-15-virtual-gift-30`, wave 4, row 3
- **Category:** `digital-gifts-romance`
- **Templates:** `/darling`, `/dedication`, `/rewind`
- **Written:** 2026-09-16

---

## Phase 1 — SERP analysis

**Engine caveat, stated first because it changes how the table should be read:**
the SERP in `SERPS-WAVE4.md` was collected via Brave and is **US-served**. Brave
accepts no region parameter, and DuckDuckGo's `kl=in-en` route (used in wave 3)
was rate-limited for this sandbox. So the SERP below is **reliable evidence of
page type** — which is what Gate 2 needed — and **unreliable evidence of Indian
ranking order**. Nothing in this brief claims an Indian position was measured.

Measured: **9 of 10 results are blog-shaped.** Zero ecommerce, zero tool pages.

| # | Result | Type | What it is |
|---|---|---|---|
| 1 | celebrateagain.org — "Romantic things to do for your wife" | Editorial listicle | The only conventional article on the page. US-framed: date nights, weekend getaways, a house the couple has to themselves. |
| 2 | reddit.com/r/Marriage — "What's some romantic shit to do for my wife (M31/F31)" | Forum thread | Crowd-sourced answers, heavily weighted to small daily acts over events. |
| 3 | reddit.com/r/Marriage — "Romancing your wife" | Forum thread | Same shape. |
| 4 | reddit.com/r/marriageadvice — "What are the small things you can do to make…" | Forum thread | Explicitly asks for *small*, which the listicles do not supply. |
| 5 | reddit.com/r/relationship_advice — "My 34M wife 33F are looking for ways to spice up…" | Forum thread | Couple-initiated, not surprise-initiated. |
| 6–10 | r/AskReddit, r/Advice, r/AskWomenOver30, r/Marriage ×2 | Forum threads | "What to do to make your wife happy", "little surprises to bring home to wife", "ideas to surprise my wife, she's coming home from a trip". |

**The structural finding: nine of ten results are people asking other people.**
That is what a SERP looks like when the published articles do not answer the
question. The demand is for judgement — *will this land, or will it backfire* —
and listicles supply inventory instead.

Common properties of the editorial result and the top-voted forum answers:

- **Direct answer position:** the listicle buries it under an intro; the threads
  put it in the first comment. An answer engine has an easy job on the threads and
  a hard one on the article.
- **Named entities / subtopics:** date night, breakfast in bed, handwritten notes,
  weekend trips, spa vouchers, flowers delivered to work.
- **Data cited:** none. Not one page on this SERP carries a statistic of any kind.
- **Format:** the listicle has a numbered list and no schema worth noting; the
  threads have no structure at all.
- **Tone:** first person and specific on Reddit; third person and hedged on the
  listicle.
- **Assumed reader:** a US/UK couple with their own house, a car, and an evening
  they can leave. Every logistical assumption on this page fails in a shared
  Indian household.

---

## Phase 2 — Gap analysis

**Table stakes** — present across the set, so the post must cover them or look
incomplete: small acts beating grand ones; timing; doing it without an occasion;
some acknowledgement that the gesture can misfire.

**The gap.** Nobody on this SERP writes for a couple who do not control their own
space. The incumbent advice assumes concealment is trivial (another room), that an
audience is optional (your own house), and that a surprise is read only by the two
people in the marriage. In an Indian household — parents, a sibling, children, and
a family WhatsApp group that sees everything — a surprise has a third party
attached to it by default, and a grand gesture can read to relatives as
performance rather than to a wife as intimacy.

Second gap, equally untouched: **the reception sequence.** A no-occasion surprise
inside a marriage has to clear "what is this for?" before it clears anything else.
No page on the SERP treats suspicion as the first obstacle.

**Stale data.** Not applicable — no page on this SERP cites data at all, stale or
current. That is itself the opportunity.

**Unanswered questions raised and dropped:** what to do if she dislikes surprises;
whether a surprise works as an apology; how to keep it away from the family; what
happens when the reaction is flat.

**Fan-out sub-queries** (each became an H2 or an FAQ): how is surprising a wife
different from surprising a girlfriend · how do I surprise her when we live with
family · what day should I do it · what should I actually send · how do the options
compare · what does she actually respond to · is a surprise a bad idea right now.

**Angle statement.** Wins by being the only post that treats surprising a wife as
a credibility and audience problem rather than an ideas problem — in a shared
Indian home the gesture must survive "what is this for?" and "who else can see
this?" before it can land — grounded in SubhSandesh's 3.7% occasion-dated share,
the 1,043 apology pages that are 23.9% of everything built, and an explicit
statement that the database records the template opened, never the recipient.

---

## Phase 2b — Anti-cannibalisation check

Grepped `blogs/` (78 files) for wife / husband / surprise / anniversary / romantic
and read five siblings in full.

| Sibling | Its argument | Why this post does not collide |
|---|---|---|
| `digital-gift-for-wife` | Separates the three products the phrase returns (voucher / gadget / page); everyday rather than calendar | Product-definition post. This post is a behaviour post and defines nothing. **Cross-linked** as the closest neighbour. |
| `digital-gift-for-wife-birthday-online` | A wife's birthday page is a **secrecy** problem in a shared home; 40.6% password rate, 6.2-hour edit gap | **Closest collision.** That post owns "where do I build it so she doesn't see it". This post deliberately does not cover concealment mechanics at all — it covers what happens *after* she opens it, and it is occasion-free where that one is birthday-anchored. |
| `romantic-gift-for-husband-birthday` | Same shared-house concealment argument, mirrored to a husband | Same avoidance. Also a different recipient and a dated occasion. |
| `anniversary-website-for-wife` | An anniversary is a date neither spouse can be surprised by; built as a known repeating ritual | Explicit inverse of this post, which is entirely about the undated day. No overlap. |
| `how-to-surprise-girlfriend-online` | Five timed steps for an online surprise; 40.6% password, 6.2-hour gap | Unmarried, usually separate homes, no third-party audience. This post's H2 1 states the difference directly rather than repeating the steps. |

Two siblings already open on the 40.6%-password / 6.2-hour-edit-gap pair. **Neither
is this post's headline pair**: the 6.2-hour gap does not appear at all, and the
password figure appears once, as a raw count (1,767 of 4,357) inside the comparison
table and one FAQ, where it is the only honest answer to "who else can see this".
Facts carrying the post are the 3.7% occasion-dated share, 94.1% published-and-shared, 3,377
creators at 1.29 pages, 49,968 views at 11.5 per page, /darling at 427 (9.8%),
/love-gf at 1,125 (25.8%) and 16,201 views (32.4%), 49.0% phone opens, and
/apology-dashboard at 1,043 (23.9%).

Verdict: **proceed.** The argument is not made by any published or drafted post.

---

## Phase 3 — Sources

Route used: Crossref (phenomenon search) → Unpaywall OA check → publisher landing
page. Every source below was fetched and its abstract read on 2026-09-16.
**All five are abstract-and-metadata reads — no full text was retrieved**, which is
recorded in the audit.

Search terms tried, in order: `marital satisfaction small gestures`,
`expectancy violation positive`, `ritual couple relationship`,
`perceived partner responsiveness`, `surprise anticipation savoring positive
affect`, `unexpected gift recipient gratitude emotion`, `surprise gift givers
recipients mispredict preference`, `joint family privacy couple intimacy India
marriage`, `marital satisfaction India arranged marriage couples study`,
`relational maintenance behaviours marital satisfaction married`,
`expectancy violation gift giving evaluation`, `positive surprise emotion
intensity experience`, plus a DOAJ title search for `surprise AND partner`.

**Two real negative findings, both recorded in the audit:**

1. **Surprise itself is not studied in a marital context in anything open-access.**
   The two closest hits — "Surprise me! On the impact of unexpected benefits on
   other-praising gratitude expressions" (*Cognition and Emotion*,
   `10.1080/02699931.2020.1797638`) and "When a gift exchange isn't an exchange:
   why gift givers underestimate how uncomfortable recipients feel"
   (*Journal of Business Research*, `10.1016/j.jbusres.2021.03.013`) — are both
   **closed access** per Unpaywall, so neither could be verified and neither is
   cited. The DOAJ title search returned zero results. The post therefore leans on
   *perceived partner responsiveness* as the studied mechanism nearest to what a
   surprise is trying to produce, and says so in the body rather than implying
   surprise research exists.
2. **No Indian-sample paper could be fetched.** `10.25215/0303.065` (International
   Journal of Indian Psychology, "Marital Adjustment among Love Marriage and
   Arranged Marriage Couples") is OA but `ijip.in` returns **HTTP 406** behind
   mod_security. The Lahore study below is the nearest fetchable South Asian
   sample and is cited as such, not as Indian data.

| # | Source | Domain | Published | What it actually says | Subject test | Swap test |
|---|---|---|---|---|---|---|
| 1 | Kausar et al., *Trust, Romantic Love and Marital Satisfaction in Love and Arranged Marriage Couples*, Applied Psychology Review | journals.umt.edu.pk | 2024-12-31 | 261 couples in Lahore (147 love, 114 arranged); trust hypothesised and tested as predictor of romantic love and marital satisfaction in both marriage types | Pass — marriage type and trust, South Asian sample | Pass — meaningless in a girlfriend/friend/LD post |
| 2 | Safitri & Ratnasari, *Comparison of marital satisfaction by couples types in arranged (ta'aruf) married couples*, Humanitas | journal.uad.ac.id | 2019-08-30 | 62 people (couples) in Jakarta, RDAS + RDI, K-means couple types; satisfaction differed significantly by couple type overall and among husbands, **but not among wives** | Pass — spouses score the same marriage differently | Pass — requires a married couple |
| 3 | *The Mediating Role of Dyadic Coping in the Relationship between Perceived Partner Responsiveness and Marital Satisfaction*, Research and Practice in Couple Therapy | jrpct.com | 2026-01-01 | 642 married adults in Canada, SEM; PPR → dyadic coping β = 0.72, PPR → marital satisfaction β = 0.27, dyadic coping → satisfaction β = 0.58 | Pass — the mechanism a gesture is trying to trigger | Pass — married-adult sample, marital satisfaction outcome |
| 4 | *Self-disclosure and Intimate Relationship Satisfaction: The Mediation Role of Perceived Partner Responsiveness*, Academic Journal of Humanities & Social Sciences | francis-press.com | 2025-01-01 | 905 students across four universities (Guangdong, Jiangxi); PPR ↔ satisfaction r = 0.51, PPR partially mediates self-disclosure → satisfaction; trust moderates | Pass — disclosure beats display | Weak pass — sample is unmarried students; used only for the mechanism, and the body says so |
| 5 | Satıcı & Deniz, *Relational Humor and Marital Satisfaction in Married Individuals*, International Journal of Psychology and Educational Studies | ijpes.com | 2020-05-01 | 228 married participants, 1–46 years married; self-positive and self-negative relational humour predicted own marital satisfaction, self-instrumental humour did not | Pass — warmth vs. performance, in marriages specifically | Pass — married-only sample |

Domain check against `SPENT-SOURCES.json` and a live scan of all 78 sibling
`sources` arrays: **all five domains are unused in this batch** (0 prior uses
each). No URL is reused. No generic context statistic (PIB / TRAI / Census / MEA)
is used at all — the count is 0, under the cap of 1. No competitor is cited or
linked.

---

## Phase 4–5 — Draft decisions

- Direct answer in the opening block, keyword inside the first 100 words, two
  first-party numbers before word 150 (3.7% occasion-dated; 94.1%
  published-and-shared).
- Nine H2s mapping to the fan-out list, one comparison table with four rows and a
  first-party column, an `ItemList` mirroring the five H3s.
- Internal links: `/dedication`, `/rewind`, `/darling`, plus one cross-link to
  `digital-gift-for-wife`. All template paths verified present in `TEMPLATE_LINKS`
  (`app/lib/prompt.ts` lines 42, 84, 96).
- **No price is stated or implied anywhere.** `content/facts.md` `## Pricing` is
  empty; the cost FAQ says the figure cannot be confirmed from first-party data and
  points at `/templates`.
- FAQs live only in `article.faqs`. None restates a body heading.

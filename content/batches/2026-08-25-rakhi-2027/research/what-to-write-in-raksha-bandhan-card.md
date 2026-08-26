# Research brief — `what to write in raksha bandhan card`

- Slug: `what-to-write-in-raksha-bandhan-card`
- Batch: `2026-08-25-rakhi-2027`
- Source lane: **D (publisher-native OA), then F (media & data)**
- Slug check: `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=what-to-write-in-raksha-bandhan-card` → `{"data":[]}` — free.
- Category check: `indian-festivals` present in live Strapi categories → confirmed.

---

## Phase 0 — data gate

`content/facts.md` regenerated 2026-08-25 (17 facts). **No rakhi-specific first-party
data exists**: `rakshabandhanpages` = 3 docs, `rakshabandhansisterpages` = 3 docs,
rakhi template views = 39 of 36,202 (0.1%). Per BRIEF.md, no statistic may be computed
from n=3, and none was.

Facts used are platform-wide and apply to a rakhi page as much as any other:

- 51.1% of shared pages are opened on a phone (18,497 of 36,202 views) — **assigned primary fact, leads the opening**
- 99.4% of started pages are published and shared (2,956 of 2,973)
- Average views per created page: 12.2
- 44.2% of creators password-protect their page before sharing (1,315 of 2,973)
- 2,973 pages across 15 page types

Gate passes on count (5 facts, 3 in the first 150 words) but **fails on
keyword-specificity**, recorded in `auditReport.failed`.

---

## Phase 1 — SERP

Google was unavailable (WebSearch budget for the session was exhausted at 200/200
before this agent started), so the SERP was reconstructed from DuckDuckGo HTML for
two phrasings — `what to write in raksha bandhan card` and `raksha bandhan card
message what to write` — and the top five pages were fetched in full and parsed.
Ranking positions below are DDG's, not Google's; treat the *set* as reliable and the
*order* as approximate.

| Page | Words (raw) | Structure | Where the answer sits | Data cited | Format | Optimising for |
|---|---|---|---|---|---|---|
| rakhibazaar.com — "What to Write in a Raksha Bandhan Card" | ~1,800 | 4 H2s: "4 Important Things to Consider", brother lines, sister lines, short lines | After a two-paragraph gift pitch | None. Byline "Gaurav Gupta", page states "6 years ago" | No table, no FAQ, no schema | Rakhi e-commerce; the card is a gift up-sell |
| floweraura.com — "What To Write in Raksha Bandhan Card?" | ~1,000 | Almost no H2s; body is a run of message lists | Immediately, but the answer is "here are lines" | None. Author "admin", dated June 2021, re-stamped 2026 | FAQ text, no table | Gift-hamper commerce |
| iforher.com — "100+ Best Raksha Bandhan Wishes, Quotes & Messages (2026)" | ~2,900 | 10 H2 buckets (short, brother, sister, emotional, funny, long-distance, WhatsApp, captions, quotes) + 5-question FAQ | Immediately — a list | None | FAQ section, no table | Volume of copyable lines |
| parenting.firstcry.com — "100 Raksha Bandhan Quotes, Wishes, Messages and Images" | ~4,300 | 7 H2 buckets incl. long-distance brother and sister | Immediately — a list | None | FAQ text, no table | Volume + images |
| adobe.com/express — "40 Raksha Bandhan wishes to make your sibling smile" | ~3,500 | 9 H2s incl. "A simple framework for writing original wishes" and H3 "Common mistakes to avoid" | Immediately | None | No table | Express product signup |

Observations:

- **Not one of the five cites a single source, statistic or study.** Zero data on any page.
- Four of five are line inventories. Adobe alone attempts a *framework* — a generic
  "be specific / avoid clichés" section that is not tied to any relationship situation.
- Between them the five publish several hundred ready-made lines (100+, 100 and 40 on
  three of them alone).
- Two of five carry stale authorship (floweraura dated June 2021 with 2026 re-stamps;
  rakhibazaar's own byline says "6 years ago").
- No AI Overview could be verified without Google access — recorded as a gap.

---

## Phase 2 — gap analysis

**Table stakes** — brother lines, sister lines, short lines, long-distance lines,
the ritual's meaning, English phrasing.

**The gap.** Every page hands the reader lines to copy. None of them teaches the
*decision*. Nobody addresses what to write when:
you barely know the recipient; there was a falling-out nobody named; it is the first
Raksha Bandhan after a death in the family; the sibling has gone no-contact; you are
writing in English to someone who thinks in Hindi; you are close and have nothing new
to say. These are the six places people actually stall — a line inventory is useless
in every one of them, because the problem is not vocabulary.

**Stale data.** There is no data to supersede. Instead the win is publishing *any*
number on a SERP where five pages publish none.

**Unanswered questions.** How long should it be. Whether to write it in Hindi.
Whether to send anything at all to someone estranged. What to say about a death
without making the card about grief.

**Fan-out sub-queries** → became H2s/H3s/FAQs: what do I write if I hardly know them ·
what do I write to a sibling I fought with · first rakhi after a death · sibling not
talking to me · Hindi or English · how long should a rakhi message be · what not to
write · is a card enough.

**Angle.** Wins by being the only post that treats a Raksha Bandhan card as a
relational decision rather than a line inventory — six situations where the copy-paste
lines actively fail — with the only numbers on the SERP: 51.1% phone opens of 36,202
views and a 99.4% publish-through rate, plus 2026 sibling-estrangement research none of
the five pages has read.

---

## Phase 3 — sources (lane D, then F)

**Lane D was fetch-blocked end to end.** `journals.sagepub.com`,
`onlinelibrary.wiley.com`, `tandfonline.com`, `nature.com` and `link.springer.com` all
return HTTP 403 with a Cloudflare "Enable JavaScript and cookies" interstitial to an
automated request; `sciencedirect.com` returns 403 as well. Every lane-D claim below
was therefore verified against the **publisher-deposited abstract in the Crossref
metadata record** (`api.crossref.org/works/<doi>`), which is the publisher's own text.
Only the abstract was read in all four cases. `doi.org` is banned by BRIEF.md, so each
source is cited at its publisher-native URL.

**Lane F produced nothing topical.** `sciencedaily.com` search is JavaScript-driven and
returns the site's generic headline rail to a fetch; `pewresearch.org`, `theweek.in`,
`statista.com` and `lokniti.org` have no coverage of card-writing, sibling estrangement
or bereavement ritual that passes the subject test. Recorded as an audit failure.

| # | Source | Domain / lane | What it supports | Published |
|---|---|---|---|---|
| 1 | Kumar & Epley, "Undervaluing Gratitude: Expressers Misunderstand the Consequences of Showing Appreciation", *Psychological Science* | journals.sagepub.com — D | Across three experiments in which participants wrote gratitude letters, expressers **underestimated how positive recipients would feel and overestimated how awkward** recipients would feel; expected awkwardness correlated with willingness to express gratitude at all | 2018-06-27 |
| 2 | "Pathways to Adult Sibling Estrangement: Perspectives of Estranged U.S. Adults", *Journal of Marriage and Family* (CC BY-NC-ND) | onlinelibrary.wiley.com — D | **39 in-depth interviews**; five pathways in two themes — parental partisanship, collateral damage, absent foundations, destabilising conduct, **risk containment**; most respondents described both themes, termed "layered estrangement" | 2026-08-18 |
| 3 | "Empathy and sibling relationship dynamics of women in emerging adulthood: Mixed-method research", *Family Relations* | onlinelibrary.wiley.com — D | **N = 284** questionnaires plus 9 interviews; affective and cognitive empathy both linked to sibling relationship quality, and **major family issues play a crucial role in sibling closeness** | 2021-11-19 |
| 4 | "Meaning Co-Construction: Facilitating Shared Family Meaning-Making in Bereavement", *Family Process* | onlinelibrary.wiley.com — D | Relational approaches to grief work through **continuing bonds** and shared meaning-making; family members struggle to **coregulate each other's grief**, which is why a card that tries to resolve someone's loss usually misfires | 2021-05-18 |

Domain caps after this post: `journals.sagepub.com` 3/3 (full), `onlinelibrary.wiley.com`
3/3 (full). Appended to `SOURCES.md`.

Search terms tried that returned nothing citable in lane: `handwritten note perceived
sincerity`, `expressive writing relationship`, `self-disclosure closeness`, `greeting
card message research`, `emotional weight of I love you multilinguals`, `L1 versus L2
emotional resonance`, `emotion words first language bilingual`, `continuing bonds
anniversary ritual`, `ritual grief loss`, `family estrangement adult siblings`,
`perceived thoughtfulness handwritten versus digital message`, `gratitude letter
closeness experiment`, `festival ritual sibling kinship India`.

The Hindi/English section is therefore **unsourced by design**: Taylor & Francis
(*Journal of Multilingual and Multicultural Development*, *Cognition and Emotion*)
deposits no abstracts to Crossref and 403s to fetch, and Elsevier's *Journal of
Pragmatics* (Dewaele 2008) is neither OA nor fetchable. That section rests on the
read-aloud test, stated as a method, not on a citation.

---

## Phase 5 — targeting

- `categorySlug`: `indian-festivals` (batch rule; verified live).
- `templateUrls`: `/happy-rakshabandhan-to-brother`, `/happy-rakshabandhan-to-sister`,
  `/templates`. The post is recipient-agnostic — it covers sister→brother and
  brother→sister equally — so both rakhi pages are correct here, and neither
  contradicts the post.
- Entities verified via the Wikipedia API with Wikidata QIDs: Raksha Bandhan Q10266,
  Greeting card Q915196, Sibling Q31184, Family estrangement Q17013143, Grief Q1026040.

## Cannibalisation

- `what-to-write-in-a-diwali-card` is organised around **card anatomy** (four parts), a
  **35–45 word budget**, and **four recipient tiers** ordered by social distance
  (family → neighbour → colleague → household staff). This post is organised around
  **six relational situations inside one relationship**, has no anatomy section and no
  global word budget (length appears only as a per-situation column). Different axis.
- `personalised-raksha-bandhan-card-with-name`, `make-raksha-bandhan-card-online-with-name`
  and `rakhi-2026-custom-photo-wishes-card-maker-online` are all about **making** the
  card — lead times, seven ordered steps, a tool pre-flight test. This post never
  explains how to build anything.

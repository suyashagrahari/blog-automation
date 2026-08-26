# Research brief — `raksha bandhan wishes for elder brother`

Batch: `2026-08-25-rakhi-2027` · Slug: `raksha-bandhan-wishes-for-elder-brother`
Source lane: **C (US repositories)**, fallback **D (publisher-native OA)** — see note in Phase 3.
Slug check: `https://strapi.subhsandesh.in/api/articles?...$eq=raksha-bandhan-wishes-for-elder-brother` → `data: []`, `total: 0`. **Free.**

---

## Phase 0 — Data gate

`content/facts.md` refreshed 2026-08-25, 17 facts. Per BRIEF.md there is **no rakhi-specific
first-party data** (`rakshabandhanpages` = 3 documents, 39 of 36,202 template views). No
statistic is computed from n=3 anywhere in this post. The one place the rakhi template is
mentioned it is described honestly as new and lightly used.

Facts used (verbatim from `content/facts.md`):

- 44.2% of creators password-protect their page before sharing it (1,315 of 2,973) — measured 2026-08-25 **(assigned primary)**
- 99.4% of started pages are actually published and shared (2,956 of 2,973) — measured 2026-08-25
- 51.1% of shared pages are opened on a phone (18,497 of 36,202 views) — measured 2026-08-25
- Average views per created page: 12.2 — measured 2026-08-25
- 2,973 personalised pages created since 2026-03-12, across 15 page types — measured 2026-08-25

Gate: passed on platform-wide facts only. Recorded as an audit failure — these are platform
behaviour, not rakhi behaviour. Re-query when rakhi pages exceed ~500.

---

## Phase 1 — SERP analysis

`WebSearch` was unavailable (session budget 200/200 exhausted), so the SERP was pulled from
DuckDuckGo's HTML endpoint and each page fetched and parsed directly. Recorded as an audit
note. Query: `raksha bandhan wishes for elder brother`.

| # | Page | Words (full page) | Structure | Direct answer? | Data cited | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | floweraura.com `/quotes/raksha-bandhan/for-elder-brother` | ~1,976 | H1 + 6 headings: heartwarming / funny / emotional / short & sweet | No — gift block ("Looking for the Perfect Gift? Start Here") sits above the quotes | **None** | FAQ text, no table, **no JSON-LD** | Rakhi gift transactions |
| 2 | fnp.com `/quotes/raksha-bandhan/for-elder-brother` | ~2,222 | H1 + 2 headings, both commercial ("Gift ideas", "Related Pages") | No | **None** | No table, no FAQ, **no JSON-LD** | Rakhi hampers |
| 3 | rakshabandhan.currentnewstimes.com `/raksha-bandhan-wishes-for-elder-brothers/` | ~1,600 | H1 + 1 real H2, then comment form | Intro paragraph is generic ritual description | **None** | JSON-LD present, no table, no FAQ | Ad impressions; last updated **June 2023** |
| 4 | blog.bluestone.com `/raksha-bandhan-wishes-for-brother-in-english-2026/` | ~2,442 | 25 headings; elder brother is **one H2 of fourteen** | Quick-picks block near top | **None** | FAQ + JSON-LD, no table | Jewellery |
| 5 | igp.com `/blog/happy-rakhi-wishes-for-brother/` | ~3,323 | 16 headings, mostly tone buckets + product cross-links | No | **None** | Table + JSON-LD | Same-day gift delivery |

Signal counts across all five pages (substring frequency in body text):

| Term | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| `elder` | 23 | 6 | 4 | ~6 | 1 |
| `eldest` | 0 | 0 | 0 | 0 | 0 |
| `firstborn` | 0 | 0 | 0 | 0 | 0 |
| `birth order` | 0 | 0 | 0 | 0 | 0 |
| `responsibility` | 0 | 1 | 0 | 0 | 0 |
| `research` / `study` | 0 | 0 | 0 | 0 | 0 |
| `2027` | 0 | 0 | 0 | 0 | 0 |

Tone: all five third-person, hedged, adjective-led ("heartwarming", "heartfelt", "emotional").
Every one sorts its lines by **register** — heartfelt / funny / short — and none by anything
about the recipient.

---

## Phase 2 — Gap analysis

**Table stakes.** A visible block of copyable lines. Short/WhatsApp options. A funny option.
Something for a long-distance brother. A statement of what Raksha Bandhan is.

**The gap.** Not one of the five pages treats "elder brother" as a *position in the family*.
All five treat it as a tone setting. Consequently every line runs in the same direction —
the sister asking to be protected — and the recipient of the message is asked, on the one day
addressed to him, to re-confirm a role he has held since he was a child. Zero pages cite any
research. Zero use the words *firstborn*, *eldest* or *birth order*. Zero mention 2027.

**Stale data.** There is no data on any of the five pages to be stale. Result 3 was last
touched in June 2023 and still says "Raksha Bandhan 2025" in its `<title>`.

**Unanswered questions raised and dropped.** What do you write if you are *not* close to him?
What if you are a younger *brother*, not a sister? What if you have overtaken him? What if the
honest thing is not something you want on the family WhatsApp group?

**Fan-out sub-queries → H2s/H3s:**

- what should I write for my elder brother → H2 1 + the 8 lines
- why do rakhi messages for elder brothers all sound the same → H2 1
- what makes a message feel personal rather than forwarded → H2 "What makes a line land"
- where should I send it so it stays private → H2 "Where to send it" (table)
- what does being the eldest actually cost him → H2 "What the role costs him"
- can a brother send rakhi wishes to his elder brother → H3 8
- when is Raksha Bandhan 2027 → H2 "Raksha Bandhan 2027"
- when is a written wish the wrong idea → H2 "When a written wish is the wrong thing"

**Angle.** Wins by being the only post that treats an elder brother as a position in the family
rather than a tone setting — eight lines sorted by what each one gives back to the person who
was handed the responsible role first, grounded in sibling-communication and parentification
research and in SubhSandesh's own 44.2% password-protect rate.

---

## Phase 3 — Sources

**Lane C worked; lane D did not.** Every lane-D publisher was bot-blocked on fetch:
`link.springer.com` returned a JavaScript "Client Challenge" page (3,036 bytes, no content),
and `journals.sagepub.com`, `onlinelibrary.wiley.com` and `sciencedirect.com` all returned
HTTP 403 Cloudflare interstitials. Since the skill requires fetching and verifying every
source, no lane-D source could be verified and none is cited. All five sources are lane C.

Candidates identified but rejected for that reason (recorded so they are not re-chased):
`10.1007/978-3-030-55985-4_21` (Springer), `10.1177/0192513X221079330` (SAGE),
`10.1111/fare.12646` (Wiley), `10.1177/1049732308327195` (SAGE).

Search terms tried: `older sibling responsibility caregiving emerging adulthood`,
`firstborn birth order sibling responsibility`, `parentification older sibling caregiving
responsibility adolescents`, `adult sibling relationship obligation support`,
`eldest son filial responsibility India elderly support`, `sibling relationship maintenance
adult communication`, `sibling relationship India joint family brother sister ritual`,
`older brother younger sister relationship protection`. The last two returned **nothing** —
there is no open, citable body of work on the elder-brother role inside Indian ritual kinship
that lane C or D can reach. The post therefore uses general sibling-role research and says so.

### Cited (all fetched 2026-08-26, landing pages read; PDFs behind Cloudflare in two cases)

1. **https://digitalcommons.du.edu/etd/793** — Corti, J. K., *Sibling Relationships During the
   Young Adult Years*, PhD, University of Denver, 2009. N = 199 young adults. Everyday talk fell
   into three categories — expressions of intimacy, maintenance talk, relationally risky talk —
   and all three related to closeness, but **only expressions of intimacy related to relational
   satisfaction**. Geographic distance had **no significant effect** on closeness.
   *Subject test:* sibling communication. *Swap test:* it is doing specific work here — it is
   the reason the post argues content beats channel; a distance-keyword post would use the
   distance finding for the opposite purpose.

2. **https://scholarsarchive.library.albany.edu/legacy-etd/1619** — Gozu, H., *The role of
   personality, perceived parental differential treatment, and perceptions of fairness on the
   quality of sibling relationships among emerging adults*, PhD, University at Albany SUNY, 2016.
   N = 775 undergraduates; SEM path model; fairness evaluations mediate between parental
   differential treatment and sibling relationship quality.

3. **https://digitalcommons.pcom.edu/psychology_dissertations/507** — Vroman, C., *The Impact
   Caregiving and Decision-making Has on Adult Sibling Relationships*, PsyD, Philadelphia College
   of Osteopathic Medicine, 2019. Adult siblings tend to believe caregiving responsibility should
   be split equally, **but one sibling usually takes on the majority of it**. Abstract read on
   the landing page; the full-text PDF host returned HTTP 403.

4. **https://scholarsarchive.byu.edu/intuition/vol14/iss2/17** — Sarvey, S., "Birth Order:
   Shaping Lives One Sibling at a Time", *Intuition: The BYU Undergraduate Journal of Psychology*,
   2019. A review arguing older siblings develop stronger leadership skills because families
   assign them more responsibility as more children arrive. **This is an undergraduate review
   journal, not primary peer-reviewed research** — labelled as such in the body.

5. **https://scholarworks.lib.csusb.edu/etd/1087** — Preciado, B., *Developmental Implications of
   Parentification: An Examination of Ethnic Variation and Loneliness*, MA, California State
   University San Bernardino, 2020. Ethnic-minority participants reported **higher levels of
   parentification** than European/White American participants; loneliness levels were **similar**
   across groups.

### Ledger compliance

| URL | Domain | Prior uses in batch | After this post |
|---|---|---|---|
| digitalcommons.du.edu/etd/793 | digitalcommons.du.edu | 0 | 1 |
| scholarsarchive.library.albany.edu/legacy-etd/1619 | scholarsarchive.library.albany.edu | 0 | 1 |
| digitalcommons.pcom.edu/psychology_dissertations/507 | digitalcommons.pcom.edu | 0 | 1 |
| scholarsarchive.byu.edu/intuition/vol14/iss2/17 | scholarsarchive.byu.edu | 1 (`raksha-bandhan-wishes-for-younger-brother`, different URL) | 2 of 3 |
| scholarworks.lib.csusb.edu/etd/1087 | scholarworks.lib.csusb.edu | 0 | 1 |

No banned domain used. No government/context source used at all. Zero Wikipedia links in the
body. Zero competitor links. The younger-brother post's sources (`digitalcommons.wku.edu`,
`alex-hoagland.github.io`, `escholarship.org`, `scholarsarchive.byu.edu/facpub/2674`,
`etd.ohiolink.edu`) are **not** reused.

---

## Phase 5 — Targeting

- `categorySlug`: `indian-festivals`
- `templateUrls`: `/happy-rakshabandhan-to-brother` (recipient matches), `/templates`.
  `/happy-rakshabandhan-to-sister` deliberately **not** used — wrong recipient.
- Internal links: 3, all from `TEMPLATE_LINKS`, all placed after the section that establishes why.

## Cannibalisation check

| Existing post | Overlap | Verdict |
|---|---|---|
| `raksha-bandhan-wishes-for-younger-brother` (this batch) | Same festival, opposite direction. That post = elder sister → younger brother, sorted by *his age*, birth-order-as-development. This post = younger sibling → elder brother, sorted by *what the line gives back*, birth-order-as-burden. | Distinct — deliberate pair |
| `rakhi-wishes-for-cousin-brother` | Sorted by closeness; cousin relationship | Distinct |
| `rakhi-wishes-for-brother-in-law-jiju` | In-law register, Hindi glosses | Distinct |
| `raksha-bandhan-message-for-step-siblings` | Step-family formation | Distinct |
| `rakhi-wishes-for-brother-in-the-army` | Grouped by reachability; A.P.O. logistics | Distinct |
| `25-raksha-bandhan-wishes-for-brother-who-lives-far-away` | Grouped by the job each line does, distance-framed | Closest structural neighbour. Mitigated: this post argues from Corti (2009) that distance is *not* the variable, uses none of the same lines, and its axis is birth-order position, not geography |

No live Strapi slug contains `elder brother`. The nearest live slugs are
`birthday-wishes-for-elder-sister` (different festival and recipient) and the brother-cluster
posts above.

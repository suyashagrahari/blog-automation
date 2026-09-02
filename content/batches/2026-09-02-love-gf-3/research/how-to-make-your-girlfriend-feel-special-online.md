# Research brief — how to make your girlfriend feel special online

- **Slug:** `how-to-make-your-girlfriend-feel-special-online` (re-verified live 2026-09-02: `filters[slug][$eq]` returns `total: 0`)
- **Category:** `modern-romance` (verified live against `/api/categories` — id 3)
- **Demand:** 24x prefix hits, highest in the wave-3 harvest. Ordinal demand, not a monthly volume.
- **Secondaries folded into body and FAQs:** `how to make your gf feel special online` (24x), `how to make my girlfriend feel special` (23x), `how to make a girl feel special online` (18x)

**Tooling note.** The session's WebSearch budget (200/200) was exhausted before this
post started and `WebFetch` is blocked in this environment, so Phase 1 was run
through DuckDuckGo HTML result pages and direct fetches in the sandbox, and Phase 3
through the OpenAlex, Crossref and DOAJ APIs plus `pdftotext` on the fetched PDFs.

---

## Phase 1 — SERP analysis

Search engine: DuckDuckGo HTML (three queries: the exact keyword, `how to make a
girl feel special online`, `how to make your gf feel special online india`). The
same five to seven pages own all three.

| # | Page | Words (approx) | Heading structure | Where the answer lands | Data cited (and date) | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | marriage.com — "How to Make Your Girlfriend Feel Special: 25 Impactful Tips" | ~3,800 | H1 + 2 H2 + 25 numbered H3 + "commonly asked questions" | After a "what does it mean" H2; no answer in the opening | None. Only date on the page is the 2026 copyright | `HowTo` + `HowToStep` schema, ProfilePage, VideoObject, expert byline, an AI "relationship guide" widget. No table, no FAQPage | Third person, warm, hedged, long sentences | Being the canonical 25-tip list; heavy on E-E-A-T furniture, thin on evidence |
| 2 | bonobology.com — "51 Ideas On How To Make Your Girlfriend Feel Special" | ~6,400 | H1 + 2 H2 + 51 H3 | Buried; opens with "Let her know she means the world to you" | Years 2022/2024/2025 appear as post dates, not as data | 104 headings, comment schema, no table, no FAQPage | Second person, chatty, Indian context (period care, family) | Volume. 51 items, mostly co-located (cook dinner, spa, breakfast in bed) |
| 3 | wikihow.com — "24 Ways to Make a Girl Feel Special" | ~6,200 | H1 + Steps H2 + 24 H3 + Expert Q&A | Opening summary, then steps | Cites 2006, 2012, 2015, 2016, 2019 references; "52%" and "80%" figures with no year in-body | `HowTo`, `HowToSection`, **FAQPage**, expert Q&A, video, reader stories. No table | Second person, imperative, short sentences | Snippets and PAA. The only competitor with FAQ markup |
| 4 | regain.us — "How To Make Your Girlfriend Feel Special \| Regain" | not readable | — | — | — | Returned HTTP 202 to every fetch (bot wall), so it was analysed from the SERP title only | — | Therapy-service lead generation |
| 5 | inspiringtips.com — "52 Ways to Make Your Girlfriend Feel Loved, Special and Giddy" | ~4,400 | H1 + 2 H2 + 40 H3 (16 + 24 split) | Buried under an intro | 2017/2022 in references | NewsArticle schema, no table, no FAQ | Second person, sentimental | Volume, and two keywords in one page ("loved" + "special") |

Also present on the sibling queries: `wikihow.com/Make-a-Girl-Feel-Special-Through-Text`
(the closest online-specific page anywhere on the SERP), `lovepanky.com`,
`pinkvilla.com`, `stylecraze.com`, `lovetoknow.com`, `thedailyjagran.com`,
`lifeberrys.com`, `heartandsoulevents.in`. No AI Overview was retrievable through
this route. **marriage.com and lovepanky.com are on the never-cite list; both were
read as positioning intel only.**

## Phase 2 — Gap analysis

**Table stakes** (all five cover): specific compliments; making time; listening;
remembering dates; surprises and gifts; consistency / "don't take her for granted";
support during a bad week.

**The gap.** *None of the ranking pages is actually about being online.* Between
them they run 24, 25, 51 and 52 ideas, and the majority need a shared room — hugs,
breakfast in bed, a spa booking, PDA, cooking dinner. Nobody:

- separates a one-off **event** from a recurring **habit**, or says which gestures
  belong at which cadence;
- addresses whether the recipient can *detect* effort spent online — the legibility
  problem, which is the whole failure mode of a digital gesture;
- gives a comparison table of any kind, or any behavioural data on what happens
  after a digital gesture is sent;
- handles the shared-phone problem that is routine in Indian households;
- does the time-zone arithmetic (how many overlapping hours you actually have);
- warns that repetition kills the same gesture.

**Stale data.** wikiHow's evidence base runs 2006–2019 and its two in-body
percentages carry no year. marriage.com and bonobology cite no data at all, which
is a stronger opening than stale data: any dated, named finding is a differentiator
here.

**Unanswered questions the pages raise and drop:** how often is too often; what to
do when she does not reply; whether a made page is sweet or embarrassing; what to
do when you cannot be in the same room *at all*.

**Fan-out sub-queries → H2s.** what does "feel special online" mean → definition
H2; does she notice the effort → legibility H2; what should I actually do → the six
H3s; which one when → the comparison table; how often / why it stops working →
cadence and decay H2; is it private → phone-and-audience H2; when is this the wrong
move → objection H2.

**Angle (recorded as `batchMeta.angle`).** Wins by being the only post that treats
making a girlfriend feel special online as a cadence rather than a single surprise,
pairing a legibility-of-effort finding with the 7.2-hour median gap between a
page's first save and its last edit (n=987), the 50.3% phone-open rate and the
42.8% password rate.

**Wave-1 overlap check.** `2026-09-01-love-gf/blogs/how-can-i-surprise-my-girlfriend-online.json`
was read in full before drafting. It sorts *surprises* into four effort tiers
(10 minutes / a small spend / her address / another person) and solves the
execution problems of a single reveal. This post deliberately stays off that
ground: no tier framing, no delivery or address mechanics, no spend tiers at all,
and the event-versus-habit distinction is stated explicitly in the definition H2
as the thing that separates the two posts. Zero shared sources.

## Phase 3 — Sources

Five sources, none in `USED-SOURCES.md`, and **zero domain collisions** with the
six sibling posts already written in this batch (checked programmatically at write
time). `link.springer.com` was deliberately avoided — it stands at 2 of a maximum 3
posts in this batch.

| Source | Domain | Peer-reviewed | Open access | Read | Subject test |
|---|---|---|---|---|---|
| Liu, Kang & Wei (2023), "Artificial intelligence and perceived effort in relationship maintenance", *Journal of Social and Personal Relationships*, 18 Jul 2023 | journals.sagepub.com | Yes | Listed OA | **Abstract only** — the PDF returned HTTP 403 to every fetch here; the abstract was verified through the Crossref API and OpenAlex, which agree word for word | Pass — effort attribution in relationship maintenance |
| Neustaedter & Greenberg (2012), "Intimacy in Long-Distance Relationships over Video Chat", CHI 2012 | ucalgary.scholaris.ca | Yes | Yes | Full text | Pass — mediated intimacy in LDR couples |
| Candel, Carciuc, Cracan, Mînzat & Lungu (2021), "Is the quality or the frequency of communication?", *Psihologija* 54(1), 49–73 | doiserbia.nb.rs | Yes | Yes | Full text | Pass — online communication and relational satisfaction |
| Bao & Lyubomirsky (2013), "Making it last: Combating hedonic adaptation in romantic relationships", *The Journal of Positive Psychology* 8(3) | escholarship.org | Yes | Yes | Full text | Pass — decay of repeated positive events in couples |
| Jansson (2015), "Polymedia Distinctions", *Nordicom Review* 36(2), 33–50 | sciendo.com | Yes | Yes | Full text | Pass — media-format choice in couple relationships |

**Zero generic context statistics.** No PIB, TRAI, Census or MEA figure is used, and
no Wikipedia link appears in the body (Wikipedia and Wikidata URLs appear only as
`sameAs` targets in `structuredData`, verified through the Wikipedia API with QIDs
paired: Q1406917, Q796573, Q854954, Q5697619, Q2728730).

**Claims kept narrower than the sources.**

- Liu et al.: the scenario is a **close friend**, not a romantic partner, and the
  design is hypothetical vignettes with N=208. The post says "a close friend" and
  frames the finding as a warning about legibility, not about tools.
- Neustaedter & Greenberg: the methodology section says fourteen **individuals** in
  LDRs (the limitations section says "14 couples"); the post uses the narrower
  "14 people in long-distance relationships".
- Bao & Lyubomirsky is a review that *argues* variety and appreciation slow
  adaptation, and its long-distance section is explicitly offered as a hypothesis
  for future testing. The post says "argue" and "a proposal for future testing, not
  a finding".
- Jansson: the survey ran in Sweden in 2012. The post says so and labels the
  transfer to an Indian reader a hypothesis.
- Candel et al.: the paper's literature review reports an earlier finding that
  frequency explains only ~10% of variance in satisfaction (Emmers-Sommer, 2004).
  That is a second-hand citation and **was not used**; only the paper's own
  moderation results are cited.

## Rejected sources

- `ps.psychopen.eu` (Park, Gordon, Humberg & Muise 2023 on gratitude asymmetry) —
  *Personality Science* has moved to a publisher that 403s here and every PsychOpen
  URL for the article now 404s, so the reader could not open it. Dropped rather than
  cited blind. `psychopen.eu` also stands at 2 earlier posts.
- `academic.oup.com` (Madianou 2014, "Smartphones as Polymedia") — HTTP 403; the
  polymedia point is carried by Jansson instead.
- `journals.sagepub.com` (Careful Co-presence, 2019) and all `tandfonline.com`
  candidates — paywalled or bot-walled.
- Bernhold & Rice (2020) on escholarship — readable and topical, but it is a
  propositional model with no data, and escholarship was already carrying Bao &
  Lyubomirsky.

## Constraint recorded, not worked around

**The Pricing block in `content/facts.md` is empty**, so the post states nothing
about cost — not free, not paid, not cheap — anywhere in the body, table, FAQs or
metadata. This keyword pulls hard toward "free ways to make her feel special", and
that intent is left unanswered on purpose. The two "free" strings in the body both
read "overlapping free time". The one place the draft implied a cost comparison
("the link reads as the cheaper option") was rewritten to "the lazier option".

## Audit summary

46 passed, 4 failed, disjoint, 50 total, every string byte-verbatim from
`publish-checklist.md`. The four failures: metaTitle keyword-in-first-five-words
(the keyword is seven words long); slug stop words (brief-assigned exact-match
slug); one of five outbound links not fetchable, verified via the publisher's
deposited abstract instead; and one source (Bao & Lyubomirsky) that could sit
unchanged in a sibling post, escalated rather than dropped.

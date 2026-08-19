# Research brief — `raksha-bandhan-without-a-brother`

- **Keyword:** what to do on raksha bandhan if you don't have a brother
- **Batch:** 2026-08-19-rakhi-3 · **Asset type:** informational blog · **Intent:** informational
- **Slug checked in Strapi 2026-08-19:** `filters[slug][$eq]=raksha-bandhan-without-a-brother` → `total: 0` (free)
- **Category checked live:** `family-and-continuity` present in the 9 Strapi categories
- Phase 0 was run upstream; `content/facts.md` (generated 2026-08-18) was read, not regenerated.

## Siblings present in the batch when I checked (2026-08-19)

`content/batches/2026-08-19-rakhi-3/blogs/` contained three files, and I picked my sources around
their `batchMeta.sources`:

| Sibling slug | Source domains already taken |
|---|---|
| `celebrate-raksha-bandhan-siblings-different-cities` | demographic-research.org (×2), pib.gov.in (×2), newsonair.gov.in |
| `make-raksha-bandhan-card-online-with-name` | hbs.edu, research.google.com, englelab.gatech.edu, wu.ac.at, ics.uci.edu |
| `raksha-bandhan-wishes-in-bengali` | ccsenet.org, questjournals.org, en.banglapedia.org, w3.org, unicode.org |

None of my five domains appears in any sibling file, in the batch ban list, or (as far as I can
tell from the ban list's stated reasons) in the 19 earlier rakhi posts. **I used zero generic
context statistics** — the brief's rule is that if a sibling has taken the PIB/TRAI/Census slot you
get zero, and `celebrate-raksha-bandhan-siblings-different-cities` has taken it twice.

---

## Phase 1 — SERP analysis

Searched `what to do on raksha bandhan if you don't have a brother` and
`raksha bandhan without a brother who to tie rakhi to`. No AI Overview surfaced in the tool output.
Top organic results, in the order returned: floweraura.com, quora.com (two threads),
zeenews.india.com, freepressjournal.in, healthwealthbridge.com, gujaratgifts.com,
rakhibazaar.com, plus a Medium personal essay. I fetched the five non-forum, non-Medium pages in
full.

**Direct answer to the question the parent asked me to check: all five top results do address the
literal query.** That is unusual for this batch's SERP history and I want to be precise rather than
convenient about it — this is not the usual wall of gifting retailers ignoring the question. What
they do instead is answer it as a cheerful substitution listicle. **Zero of the five contain the
words *died*, *death*, *bereaved*, *grief* or *estranged* anywhere on the page** (regex-checked
against the fetched HTML, nav and footer included). So the count is: 5 of 5 answer the literal
query; 0 of 5 acknowledge that the brother might be dead, estranged, or unwilling; 0 of 5 permit
not observing the day.

| Page | Words (nav-stripped) | Structure | Where the answer lands | Data cited | Format | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|
| floweraura.com — "12 Things To Do On Raksha Bandhan When You Don't Have A Sibling" (17 Aug 2018) | ~1,038 | H1 + 12 numbered H2s | After two paragraphs of "the TV remote belongs to only you" throat-clearing | None | No table, no FAQ, no schema author byline; "by admin" | Second person, jokey, "waste the tissue stack unnecessarily" | Rakhi gift-hamper product links; six related-post gift links |
| zeenews.india.com — "Don't Have A Sibling? 5 Emotional And Unique Ways" (6 Aug 2025) | ~749 | Photo gallery, 7 slides as H2s | Slide 1, in a 60-word standfirst | None | Gallery, no table, no FAQ; named author | Warm, generic ("celebrate the bonds that feel just as real") | Pageviews per slide; year-stamped to 2025 |
| freepressjournal.in — "No Brother? No Problem!" (2 Aug 2025) | ~1,071 | H1 + one subhead, then unbroken prose | ~250 words in | None; three named interviewees instead | No headings inside the body, no table, no FAQ | Feature journalism, first-person quotes | A weekend-section read; the strongest page of the five, and the only one with real voices |
| rakhibazaar.com — "How to celebrate Raksha Bandhan as an only child?" (Jul 2023, refreshed to 2026) | ~1,358 | H1 + 10 H2s | ~200 words in | None | No table, no FAQ; author bio block | Second person, retailer-warm | An in-body link to `/brothers-rakhi-117.html` in paragraph two |
| healthwealthbridge.com — "How to celebrate Rakhi when you don't have a brother" (2019) | ~1,609 total, ~350 of actual post | Two H1s (site + post), then blog-hop rules | Immediately, but as a personal anecdote, not an answer | None | Wikipedia links to Mahabharat/Draupadi/Krishna; blog-linky boilerplate | Sincere personal blog; ends by asking readers for tips | A #MondayMommyMoments link-up, not search |

Shared characteristics: **no page has a comparison table, an FAQ block, a citation, or a single
number.** Two are year-stamped. The modal advice set is friends → cousins → pets or plants →
orphanage visit → soldiers → self-love → binge-watch.

## Phase 2 — Gap analysis

**Table stakes** (all five, so I must cover them): tie it to a friend; tie it to a cousin or
extended family; tie it to a parent; self-directed observance; the assertion that the festival is
"about bonds, not blood".

**The gap.** Nobody covers the reason a brother is missing. The entire SERP models one reader — an
only child who feels mildly left out — and writes past five others: people whose brother has died,
people estranged from a brother, people whose brother is alive and simply will not take part,
people with a distant half- or step-brother, and people for whom the substitution itself is the
problem. Nobody says opting out is allowed. Nobody says what *not* to say. Nobody distinguishes
what a substitute replaces from what it does not.

**Stale data.** There is none to supersede, because there is none. Two pages carry a 2025
year-stamp on evergreen advice; the floweraura page is from 2018 and unrevised.

**Unanswered questions raised and dropped:** the healthwealthbridge author ends by literally asking
readers whether to point her daughter at cousins or at Krishna, and never answers it. The
freepressjournal feature raises "longing" in its second paragraph and then pivots to pets.

**Fan-out sub-queries → H2 map:**

| Sub-query | Became |
|---|---|
| who counts as "no brother"? | `## Who this applies to, named plainly` |
| who can I tie a rakhi to instead? | `## Who you can tie a rakhi to instead, and what each one does not replace` (7 H3s) |
| which option should I pick? | the comparison table |
| what do I do if my brother died? | `## The first Raksha Bandhan after a brother's death` |
| what if we don't speak? | `## When the absence is a decision, not a loss` |
| what do I say to someone with no brother? | `## What to say, and what not to say` |
| how do I get through the Instagram feed? | `## The feed, on one specific day` |
| is a digital card a good idea here? | `## Where SubhSandesh is the wrong tool for this` |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post on this SERP that names
bereavement, estrangement and opting out entirely, with each substitute graded on what it does
*not* replace, grounded in the 807-respondent Hidden Voices survey and in 2,718 SubhSandesh pages
of which 44.3% are password-protected.

## Phase 3 — Sources

Research lane held: chosen family and fictive kinship, ritual participation when the required
relative is absent, grief around anniversaries and calendar dates. I stayed out of the lanes held
by other agents (form abandonment, text legibility, internal migration, Bengali festival history,
sister-to-sister ritual, in-laws, blended families, Army postings, caption brevity).

| # | Source | Verified claim | Published | Test |
|---|---|---|---|---|
| 1 | Stand Alone with the Centre for Family Research, University of Cambridge — *Hidden Voices: Family Estrangement in Adulthood* (PDF) | Survey sent to 1,629 Stand Alone members in Jan 2015, **807 responded**; **90%** found the holiday season challenging, **85%** birthdays; **51% of those estranged from a brother** wished the relationship could be different; **68%** reported stigma; ~4 in 5 reported some positive outcome | 2015-12-10 | subject ✓ swap ✗ |
| 2 | University of Cambridge research news | Dr Lucy Blake: social media is "a highlight reel of people's family lives, with Facebook feeds filled with pictures of families celebrating together"; **81%** found being around other families challenging | 2015-12-10 | subject ✓ swap ✗ |
| 3 | Brenda J. Marshall, *Silent Grief: Narratives of Bereaved Adult Siblings*, doctoral thesis, University of Toronto (TSpace/Scholaris, CC BY-NC-ND) | Adult sibling loss is a **disenfranchised loss** — concern goes first to the spouse and children, then the parents, and the surviving sibling is expected to supply strength; pain **rekindled with each passing family milestone**; families fell silent to protect elderly parents | 2010-02-25 | subject ✓ swap ✗ scholarly ✓ |
| 4 | Elizabeth Schiffrin, *"This so clearly needs to be marked": memorial tattoos and their functions for the bereaved*, MSW thesis, Smith College | **14** semi-structured interviews; memorial acts functioned as effective grief rituals where they integrated **structure, symbolism and the inclusion of others**; all participants reported a symbolic representation of the loss | 2009 | subject ✓ swap ✗ scholarly ✓ |
| 5 | Sands — *Forever Tied in Love* | Raksha Bandhan "can be especially difficult for bereaved families"; some families "have developed their own way of observing Raksha Bandhan following the loss"; Sands sends knitted remembrance Rakhis; page states the festival falls Friday 28 August | none stated → `publishedDate` omitted | subject ✓ swap ✗ |

All five were fetched and the quoted numbers read out of the fetched text, not from a search
snippet. Source 1 is a PDF: I inflated its FlateDecode streams and extracted the text operators in
the sandbox, which is how 807, 90%, 85% and the 51% brother figure were confirmed against the
report body rather than the press release. Nothing is paywalled.

**Two disclosures.**

1. For sources 3 and 4 I read the repository record and full abstract, not the thesis PDFs. Every
   claim I make from them is stated in the abstract I read. The checklist item about paywalled
   citations does not bite (neither is paywalled), but it is recorded here so the limit is visible.
2. Sources 1 and 2 are two artefacts of the **same** study. I kept both because they carry
   different things — the report has the raw counts, the press release has the researcher's quote
   about the feed — but the effective count of distinct studies behind this post is four, not five.

**What I searched for and could not get.** A peer-reviewed, open-access, English-language paper on
chosen family / fictive kinship, and a peer-reviewed paper on the anniversary reaction. Search
terms tried: `chosen family fictive kinship open access study`, `voluntary kin chosen family
communication`, `anniversary reaction bereavement`, `anniversary reaction grief significant dates
bereaved`, `grief anniversary holiday reminders bereaved`, `sibling estrangement adulthood`,
plus OpenAlex and DOAJ API queries on the same phrases. The relevant work exists and is
open-access, but every landing page I needed returned HTTP 403 or a bot challenge:
`journals.sagepub.com` (Hank & Steinbach 2022, *Sibling estrangement in adulthood* — the Cologne
repository record confirms it is refereed but holds no full text), `tandfonline.com` (two 2025
systematic reviews of bereavement anniversary reactions), `link.springer.com` and
`dash.harvard.edu` (the 2015 Swedish nationwide anniversary-reaction study),
`academic.oup.com` (*Do Special Occasions Trigger Psychological Distress Among Older Bereaved
Spouses?*), `bmcpalliatcare.biomedcentral.com`, `www.mdpi.com`, `scholarworks.umt.edu`,
`uwe-repository.worktribe.com`, `core.ac.uk`, `onlinelibrary.wiley.com`. **I did not cite any of
them**, because I could not read them, and I did not substitute a government statistic to pad the
count. The anniversary-reaction literature therefore appears in this post only as the mechanism
described in the Marshall thesis ("rekindled with each passing family milestone"), not as a cited
finding — that is a real limit on the post.

## Phase 5 — targeting and entities

- `categorySlug`: **family-and-continuity** — the post is about the relationship and its absence,
  not about the festival's mechanics.
- `templateUrls`: `/happy-rakshabandhan-to-brother`, `/missyou-bestfriend`, `/templates` — all three
  present in `TEMPLATE_LINKS`, all three linked in the body, all three inside the section that
  names them as imperfect fits.
- Internal links sit in the final H2 only, after the post has established that the reader may want
  nothing at all.
- Wikidata QIDs, each verified against `en.wikipedia.org/w/api.php` (`prop=pageprops&ppprop=wikibase_item`)
  on 2026-08-19: Raksha Bandhan **Q10266**, Fictive kinship **Q5446591**, Family estrangement
  **Q17013143**, Grief **Q1026040**, Only child **Q636156**. `Rakhi (bracelet)` returned `missing`
  and was dropped.
- `structuredData`: one `@id`-matched `BlogPosting` enrichment block on `<canonical>#post` carrying
  `about`, `mentions` and a `citation` array mirroring `batchMeta.sources` one-to-one, plus one
  `ItemList` of 7 `ListItem`s mirroring the seven H3s in order. No `AggregateRating`, `Review` or
  `HowTo`.

## Phase 6 — audit summary

47 passed, 3 failed, disjoint, 50 total. Failures, all recorded in the JSON with reasons:
paragraph length (four-sentence H3 blocks are forced by `page-structure.md`'s four-field rule),
`metaTitle` length (the exact keyword is 56 characters, so 50–60 with a differentiator is
arithmetically impossible; 65 chars, inside the 70 cap), and slug stop words (`without`, `a` —
the slug was fixed by the batch brief).

Body: **1,800 words** by plain whitespace split, FAQs excluded. 12 FAQs, in `article.faqs` and the
renderer-built FAQPage only.

**Cannibalisation check.** No overlap with the 19 existing rakhi posts: none of them addresses the
absence of a brother. The nearest neighbours are `rakhi-wishes-for-cousin-brother` (my H3 #2 is
three sentences on cousins and does not repeat its content) and `happy-raksha-bandhan-replies-to-sister`.
Within this batch, sister-to-sister tying is another agent's keyword; H3 #1 states the practice in
four sentences and does not argue for it. No internal link points at any unpublished slug.

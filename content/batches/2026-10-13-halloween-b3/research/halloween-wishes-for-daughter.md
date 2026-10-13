# Research brief: halloween wishes for daughter (row 121)

- Slug: `halloween-wishes-for-daughter` · absorbs "halloween wishes for son" (own H2: "Halloween wishes for son: why a question gets an answer", plus son lines at every stage)
- Batch: 2026-10-13-halloween-b3 · theme: messages · plan weak 4/10 · band 3,000–10,000/mo
- Slug free in Strapi (checked 2026-10-13, `data: []`).

## Phase 0: first-party data
No Halloween usage data exists (BRIEF §3). Used three platform-wide lines, labelled site-wide in the body:
- 48.3% of shared pages are opened on a phone (first 150 words)
- 38.5% of creators password-protect their page (first 150 words; used only as evidence that senders value privacy, NOT as a claim that /happy-halloween has a password, since template-spec does not list one)
- Average views per created page: 11.1 (page section)

## Phase 1: SERP (searches used: 2 of 2)
1. WebSearch (US index): returned no real SERP (charity "wish" pages, a Reedsy short story, a hijacked-subdomain spam page `static.intrafocus.com`). Counted as used.
2. DuckDuckGo HTML (lower confidence), top 10:

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | jollywisher.com/halloween-messages-for-daughter | wishes farm | weak |
| 2 | cozywisher.com/halloween-messages-for-daughter | wishes farm (same template as #1) | weak |
| 3 | blessingwish.com/halloween-wishes-for-kids | wishes farm | weak |
| 4 | ideas.hallmark.com …/halloween-wishes-what-to-write-in-a-halloween-card | brand card guide | strong |
| 5 | nationaldayreview.com/halloween-wishes-for-daughter | thin "{2023}" list | weak |
| 6 | wisheshelp.com/halloween-wishes | wishes farm | weak |
| 7 | readymessages.com …/halloween-greetings-wishes | wishes farm | weak |
| 8 | pinterest.com/ideas/halloween-wishes-for-daughter | aggregator | weak |
| 9 | cozywisher.com/halloween-wishes-for-family | wishes farm | weak |
| 10 | onmoxieandmotherhood.com …/200-best-halloween-wishes-for-kids | mom blog | medium |

Weak count in top 10: 8 (plan said 4). Gate 4 passes.

### Top 5 compared (fetched 2026-10-13, all HTTP 200)

| Page | ~Words | Structure | Direct answer | Son covered? | Adult child / teen / step | Table | FAQ schema | Data / research | Optimises for |
|---|---|---|---|---|---|---|---|---|---|
| jollywisher | 2,150 | 12 H2 tone/sender buckets (dad, mom, step, foster, adopted, teen, little) | none, straight to lists | no | step yes, teen yes, adult minimal | no | yes (generic) | none | "messages for daughter" volume |
| cozywisher | 2,100 | same 12 buckets, reordered | none | one stray mention | step, teen; no adult child | no | no | none | same |
| blessingwish | 8,000 | kids-wide, one H2 each for son and daughter | none | one H2 | none | no | yes | none | "wishes for kids" |
| hallmark ideas | 4,300 | card-writing guide by recipient (nav-heavy) | intro then lists | brief | brief | no | no | none | card-shop intent (competitor) |
| nationaldayreview | 1,150 | one list | none | no | adult mentions | no | no | none, dated {2023} | thin long-tail |

## Phase 2: gap
- Table stakes: daughter lines from mum and dad, cute/funny/spooky tones, teen and stepdaughter buckets.
- Gap: nobody organises by the child's life stage through adulthood (college, adult far away, adult with own kids); nobody puts son lines beside daughter lines at each stage; nobody addresses the teen who doesn't want a public post; no page cites any research or gives a channel per age; no page has a table.
- Fan-out sub-queries → H2s: what makes a parent's wish different; wishes for young kids; teen (private); teen public-post objection; grown/college/far away; stepchild; son-specific; channel per stage; when a page is wrong.
- Angle: see `batchMeta.angle`.

## Phase 3: sources (all Europe PMC, cap-exempt domain; none used elsewhere in b3, capcheck clean)
1. Sarkadi et al. 2023, Clin Child Fam Psychol Rev (Springer, CC BY), PMC10640438: summary of their 2020 sharenting questionnaire, N = 68, ages 4–17; most negative about parents posting pictures of/writing about them on social media, and photos taken without permission. Full text read. The 2020 original (J Paediatr Child Health, doi 10.1111/jpc.14945) is paywalled and NOT read. A 2025 review (PMC11949879) gives the age range as 4–15: discrepancy noted, body uses the authors' own 4–17.
2. Kullberg et al. 2026, J Adolesc (Wiley, CC BY), PMC13044866: 12 Dutch adolescents 15–21; disclosed most to caregivers, especially mothers; privacy concerns a barrier; parents' approach-vs-space dilemma. Full text read.
3. Morgan et al. 2024, Cannabis (CC BY-NC-ND), PMC11225983: N = 287 US first-years, Oct 2021; mean texts/day with mother 6.50, father 3.90. Descriptives only; cited not reused.
4. Arpino, Tosi & Bordone 2026, J Gerontol B (OUP, CC BY), PMC13476080: 23 countries; face-to-face and phone remain the backbone, frequent video calls rare. (Also cited in two non-Halloween batches; caps are per batch.)
5. Daddis, Metzger & Said 2026, J Adolesc (Wiley, CC BY-NC-ND), PMC13643662: 99 US Muslim mothers; conventional issues: solicitation primary for sons, disclosure for daughters. Sample-specific, caveated in body.

Rejected: Kickbusch & Holly 2026 (commentary citing Ferrara, the b1 sharenting paper); F1000 Motevalli (b1/b2 spent); Ferrara 2024 (spent); Frontiers papers (banned); Sarkadi 2020 original (paywalled).
Searches: findpapers "adolescents parents social media posting embarrassment", "adolescent views parental sharenting consent", "parent emerging adult communication college students contact frequency", "parent adult child contact geographic distance"; Europe PMC REST queries on sharenting + adolescents/permission.

## Brief or prompt claims found false or qualified
- Prompt asked for "an open-access study on adolescents' preferences about parental posting". No open-access primary study of adolescents alone was found among non-banned publishers; the best available is the open-access 2023 Sarkadi account of a 4–17 sample (children and adolescents mixed). The 2020 primary is paywalled.
- PLAN weak 4/10 vs measured 8/10 weak (DuckDuckGo, lower confidence).
- WebSearch is not capped but returned a non-SERP result set for this query.

## Writing notes
- 57 original lines (9 + 9 + 9 + 18 + 6 + 6), each labelled Daughter / Son / Either; 5-gram overlap check run against all b1, b2 and b3 blog files: zero wish-line overlaps (remaining shared 5-grams are template-spec wording and fact lines).
- `halloween-messages-for-family` (b3 row 123) not yet on disk at write time; could not be checked.

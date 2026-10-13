# Research brief — halloween jokes for adults

Row 103 · slug `halloween-jokes-for-adults` · theme jokes · absorbs "halloween jokes for adults one liners" · band 3,000–10,000/mo · plan weak 6/10.

## Phase 0 — first-party data

No Halloween usage data exists in `content/facts.md` (BRIEF §3). `npm run facts` was NOT run. Four platform-wide lines used, labelled as platform-wide in the body:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (first 150 words)
- Average views per created page: 11.1 — measured 2026-09-24 (first 150 words)
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24

Relevance: the phone-open share is the honest reason to keep adult jokes to one-liners. The other two only describe the /happy-halloween send step.

## Phase 1 — SERP (WebSearch, US index; 1 search used, plus 1 DuckDuckGo lite fallback that hit a bot challenge)

| # | Page | Fetched | Words / structure | Direct answer | "Adults" treatment | Data | Format | Tone |
|---|---|---|---|---|---|---|---|---|
| 1 | ev27.clearout.io (spam) | no | hijacked subdomain | — | — | — | — | weak, not analysed |
| 2 | nationalworld.com "Best Halloween jokes: roundup for adults and kids" | 403, snippet only | news roundup | — | mixed adult/kid list | none visible | list | UK news |
| 3–4 | static.intrafocus.com ×2 (spam, "dirty" jokes) | no | hijacked subdomain | — | innuendo | — | — | weak |
| 5 | tools.wbez.org "Funny Jokes Of Halloween" | no | scraped spam page | — | — | — | — | weak |
| 6 | helloswanky.com (Shopify store blog, "150+ jokes", 2026) | yes | ~25 KB; H2 per monster/topic, FAQ Q1–Qn | after a padded intro | an "office humour" strand, otherwise generic | none | list + FAQ | farm-like, "this year" framing |
| 7 | library.gmob.ca (spam) | no | scraped | — | — | — | — | weak |
| 8 | classpop.com/magazine/halloween-jokes (2026) | 405, snippet only | long list; a "mature but clean" section (vampire dating-app, ghost dating) and a separate NSFW section | — | dating gags + NSFW | none | list | brand blog |
| 9 | bestlifeonline.com "102 Seriously Funny Halloween Jokes" (Aug 2022) | yes | numbered Q&A list; "Halloween Jokes for Adults" = items 70–80 | none; jokes start after an intro | graveyard fence, skeleton key, "plots", headless horseman "get a-head", "no body to love" — monster puns relabelled | none | numbered list | light, dated 2022 |

**Weak in top 9: 5** (clearout.io, intrafocus ×2, tools.wbez.org, library.gmob.ca). Gate 4 not triggered.

## Phase 2 — gap

- **Table stakes:** a long list of jokes; one-liners; a nod to "adults" vs kids; clean vs dirty labelling.
- **The gap:** none of the fetched pages treats "for adults" as *adult life*. Bestlife's adult section is the same monster puns as its kids' section; classpop splits into dating gags and NSFW; helloswanky has only an "office" strand. Nobody groups by life stage (work, money, parenting, ageing, dating, homeownership, toasts), says where each lands or what makes it risky, or offers telling advice backed by research.
- **Stale data:** bestlife dates from 2022; no page cites any data at all.
- **Fan-out sub-queries → H2/FAQ:** what makes a joke "for adults" (H2); one-liners for adults (H2 list + FAQ); jokes for work (H3 + FAQ); toast one-liners (H3 + FAQ); are adult Halloween jokes dirty (definition + FAQ); jokes for older relatives (rules + FAQ); dating-app jokes at a party (FAQ); dark jokes (FAQ); how to tell a joke at a party (H2); sending a joke to one person (H2); Halloween date (FAQ).
- **Keep it clean:** the SERP carries "dirty" pages (intrafocus, classpop NSFW). This post says in one line why it doesn't: a joke that needs a wink shuts out half the room and any child nearby.

**Angle:** wins by being the only post that defines "for adults" as grown-up life, not innuendo or relabelled monster puns, with 56 original jokes grouped by life stage, a setting-and-risk table, and telling rules from a September 2026 study of 142 adults on when laughter is appropriate, framed by the 48.3% phone-open rate.

## Phase 3 — sources (all fetched; none used in Batch 1 or Batch 2)

| Source | Host | Type | Read | Claim used |
|---|---|---|---|---|
| Kamiloğlu 2026, "Vocal display rules in everyday life: when is it appropriate to laugh, sigh or scream?" Phil Trans R Soc B 381:20250151, published 2026-09-24, CC BY | europepmc.org PMC13601882 | peer-reviewed, OA | full text (Europe PMC XML) | 142 adults, 7 days, 2,670 surveys, 3,821 vocalisations; laughter more appropriate at home and in social places (parties) than work/school/public, higher with close ties than weak ties/strangers; formality and power lower appropriateness |
| McAuley & Glenwright 2025, "Humor Styles Predict Self-Reported Sarcasm Use in Interpersonal Communication", Behavioral Sciences 15(7):922, 2025-07-08, CC BY (MDPI) | europepmc.org PMC12292925 | peer-reviewed, OA | full text | N = 179; affiliative humour predicts face-saving sarcasm used to enhance relationships, tease and self-deprecate. Participants over 25 were excluded, so the body says "young adults" |
| Giapraki et al. 2020, "Humor in aging: is it able to enhance wellbeing in community dwelling older adults?", Psychology (Hellenic Psychological Society) 25(1):128, 2020-11-22, CC BY 4.0 | ejournals.epublishing.ekt.gr | peer-reviewed, OA | abstract only (Crossref + landing page) | 40 adults aged 65–91; one-month humour-recollection intervention; wellbeing (PERMA) higher at posttest, held at follow-up |
| Kruczek & Basińska 2018, "Humour, stress and coping in adults", Adv Psychiatry Neurol 27(3):181–195, online 2018-09-30 | termedia.pl | peer-reviewed | abstract only (landing page) | 199 adults aged 20–60; younger less likely than older to cope with stress through humour; humour coping negatively correlated with sense of stress |

Rejected: Frontiers hits (banned), Taylor & Francis (Australian Journal of Psychology "Humor Competence Scale"), SAGE, Elsevier (Personality and Individual Differences 2025 humour styles in older adults), BMC self-deprecation paper (PMC12070663, already in b2 funny-halloween-costumes), memes-about-problems paper (PMC13392671, already in b1 halloween-memes).

findpapers queries tried: "humor styles workplace wellbeing", "humor older adults aging wellbeing", "affiliative humor social relationships adults", "humor parenting stress", "black humor preference intelligence", "self-deprecating humor perception", "workplace humor employees coworkers", "humor romantic relationship satisfaction couples", "aggressive humor social perception offense", "ageist humor jokes about aging attitudes", "humor coping everyday stress adults diary", "shared laughter social bonding".

Entities (Wikipedia API verified): Joke Q131138, Halloween Q251868, Humour Q35874, Sarcasm Q191035.

Slug free in Strapi (filter returned 0). Capcheck: no banned URLs, no domain at cap.

## Originality

All 56 jokes and the FAQ answers were checked at 5-word shingles against every Batch 1, Batch 2 and on-disk Batch 3 blog; all joke hits were rewritten to 0. Bestlife's adult jokes (graveyard fence, skeleton key, plots, a-head, no body) were read and none is echoed.

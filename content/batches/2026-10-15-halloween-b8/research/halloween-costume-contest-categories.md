# Research brief — halloween-costume-contest-categories (row 374)

Keyword: **halloween costume contest categories** (absorbs "costume contest award names"). Theme: work / party. Band: under 300/mo.

## Phase 0 — first-party data
No Halloween usage data exists (BRIEF §3). Used, verbatim from facts.md:
- Raksha Bandhan 2026 lead time (49.4% built on the day itself, n = 89) — labelled in body as the nearest measured festival, small sample.
- 48.3% of shared pages opened on a phone — used to argue for phone-size judging of photo and virtual entries.
- 38.5% of creators password-protect — template section.

## Phase 1 — SERP (WebSearch, US index, 1 search; no second search used)

| # | URL | Status / type | Notes |
|---|---|---|---|
| 1 | nasa.ualberta.ca/halloween-costume-contest | 404 when fetched; snippet only | Staff-association contest page; snippet names scariest and funniest categories, "five ways to win" |
| 2 | netbox.point-broadband.com/tag/category | hijacked-subdomain spam | weak |
| 3 | cheddarup.com/blog/halloween-costume-contest-categories | Cloudflare challenge; snippet only | Payments/collection tool blog; snippet: generic list (Most Creative, Funniest, Scariest, Best Group, Best Overall), kids "Cutest" 0–12 |
| 4 | static.intrafocus.com/?p=37584 | hijacked-subdomain spam | weak |
| 5 | static.intrafocus.com/tag/categories | hijacked-subdomain spam | weak |
| 6 | toybook.com/hca-spooky-awards-2024-news | trade news, 2 May 2024, fetched in full | HCA Spooky Awards: 6 costume subcategories, 5 judging criteria, industry panel |
| 7–9 | static.intrafocus.com x2, dev.ourstate.com | hijacked-subdomain spam | weak |

Weak results in top 10: **7** (6 spam + 1 dead page). Gate 4 passes.
Where the direct answer appears: snippets give a bare list of generic categories; none groups by setting, names a ballot method or a judging-panel rule, or addresses inclusion (kids, no-costume, body-ranking).

Sibling overlap: 0 shared URLs with b6 halloween-costume-party-ideas, b6 halloween-games-for-the-office, b2 halloween-costumes-for-work, b4 halloween-team-costumes, b2 halloween-party-favors.

## Phase 2 — gap
- Table stakes: a list of categories (scariest, funniest, most creative, group, kids).
- Gap: setting-specific award names; how to vote (approval vs evaluation vs ranked); how to build a neutral panel; tie rules; prizes by budget; inclusion (no-costume category, no ranking of young children, no body-ranking categories).
- Fan-out: categories by setting; funny award names; how many categories; voting method; popularity bias; ties; prizes on a budget; kids; categories to avoid.
- Angle: wins by being the only post that gives 36 original award names in 5 settings, each paired with a named ballot and a neutral-panel rule backed by voting experiments and a judging-bias study.

### Sibling idea check
b6 halloween-costume-party-ideas already owns: one-parade-then-vote, approval ballot as "fairest", show-of-hands/secret-vote/approval/two-judge table, 10-point score, cheer tie-break, rosette/sweet bowl/playlist prizes, guest-judge role, wheelchair note, Antipov 2017 order effects. This post reuses none of its names, prizes, tie-break or sources; it covers approval only as one of three ballots, with different evidence (Laslier 2008), and does not discuss order effects. b4 team-costumes owns a ranked poll with private veto and a 100-point score — not reused. In-batch 363 owns costume rules and 364 owns UGC contest/giveaway rules — not touched.

## Phase 3 — sources (phenomenon: voting methods and judging bias)
findpapers queries tried: "in-group favoritism judges voting competition bias", "approval voting experiment", "serial position effect judging competition order", "peer voting popularity bias awards"; Europe PMC REST title searches for judging bias, approval voting, Eurovision, Borda, peer assessment bias. HAL API search for approval-voting experiments.

| Source | What it supports | Read |
|---|---|---|
| Myers, Balmer, Nevill, Al-Nakeeb 2006, J Sports Sci Med (europepmc PMC3863918, open access) | 70 bouts, 5–9 judges, ~1.09-point own-nation bias; many neutral judges limited its effect | abstract (full-text endpoint HTTP 500) |
| Laslier & Van der Straeten 2008, Experimental Economics (hal.science) | approval voting easily understood/accepted; changed ranking vs single vote | abstract via HAL API |
| Baujard & Igersheim 2011 (shs.hal.science) | approval and (+2,+1,0) evaluation voting tested 2007; voters wanted expression and transparency | abstract via HAL API |
| Toy Book, 2 May 2024 | HCA Spooky Awards categories and criteria | full page |

Rejected: Frontiers referee-bias paper (Frontiers banned); Antipov 2017 (used by b6); Page & Page 2010 Idol (Elsevier banned); Fargo approval-voting page (404). Wikipedia not linked in body; sameAs verified via API (Halloween costume Q5643122, Approval voting Q526530, Score voting Q852733, Borda count Q576578, Muay Thai Q120931).

Caps: no PLOS ONE, Sci Rep, MDPI, fda.gov, gov.uk, doi.org used. Domains: toybook.com, hal.science, shs.hal.science, europepmc.org (exempt).

# Source allocation — pre-assigned, because cooperation failed

## Why this file exists

The `SOURCES.md` ledger did not work. Agents read it at the start of a ~15-minute
research phase, chose sources, and appended at the end — by which point three other
agents had independently picked the same obvious repositories. Result after 10 posts:

| Domain | Posts | Cap |
|---|---|---|
| arxiv.org | **6** | 3 |
| pmc.ncbi.nlm.nih.gov | **4** | 3 |
| frontiersin.org | 3 | 3 |

A shared-state constraint cannot be enforced by concurrent readers with a long
critical section. So the orchestrator allocates instead.

## Rule for every remaining agent

**You are assigned a source lane below. Draw your 4-6 sources from your lane's
repositories. Do not use any domain outside your lane unless your lane genuinely
has nothing, and if so say which lane you borrowed from in `auditReport`.**

These three are CLOSED to everyone for the rest of the batch:
`arxiv.org`, `pmc.ncbi.nlm.nih.gov`, `frontiersin.org`

Plus the permanent corpus bans: `drikpanchang.com`, `indiapost.gov.in`,
`pib.gov.in`, `trai.gov.in`, `doi.org`, `journals.plos.org`,
`digitalcommons.usu.edu`, `europepmc.org`.

## Lanes

| Lane | Repositories to search | Suited to |
|---|---|---|
| **A — linguistics** | `aclanthology.org` (max 3), `unicode.org`, `glottolog.org`, `lrec-conf.org`, `aclweb.org` anthology mirrors | language / script keywords |
| **B — UK/EU theses** | `etheses.whiterose.ac.uk`, `ethos.bl.uk`, `research.ed.ac.uk`, `discovery.ucl.ac.uk`, `ora.ox.ac.uk`, `repository.cam.ac.uk` | ritual, kinship, diaspora |
| **C — US repositories** | `cardinalscholar.bsu.edu`, `scholarworks.*`, `ir.library.*`, `digitalcommons.*` (NOT usu.edu), `escholarship.org` | sibling / family studies |
| **D — publisher-native OA** | `journals.sagepub.com`, `link.springer.com`, `tandfonline.com`, `nature.com`, `sciencedirect.com` (OA only), `wiley.com` OA | psychology, communication |
| **E — Indian scholarship** | `shodhganga.inflibnet.ac.in`, `epgp.inflibnet.ac.in`, `ijcrt.org`, `jstor.org` open content, `archive.org` ethnography scans | Indology, South Asian ritual |
| ~~**F — media & data**~~ | **CLOSED 2026-08-26.** Every domain in this lane is over cap: sciencedaily 5, themarkup 4, pewresearch 4 (against a lane cap of 2), statista 4, lokniti 4, theweek.in flagged. Three separate agents reported it exhausted before it was closed. **Do not assign lane F.** | — |

## Assignments for the remaining keywords

Language posts → **A**, then **B** for the cultural half.
Explainer / why / how / history posts → **E**, then **B**.
Relationship posts (brother, bhabhi, soldiers, younger) → **C**, then **D**.
Product-intent posts (maker, editor, template, poster, collage, link, online) → **D**, then **F**.
Shayari / quotes / captions / social → **A**, then **F**.
Head terms (`raksha bandhan 2026`, `rakhi 2026`, `rakhi 2027`) → **E**, then **F**.

## The honest note to carry into your audit

Six of the first ten agents independently recorded the **swap test** as a failure:
their sources would sit unchanged in a sibling keyword's post. That is not six
agents being lazy — it is the finding that **there is not a distinct body of
topical research behind 47 rakhi keywords.** There is roughly enough for 10-15.

Do not paper over this. If your lane gives you nothing genuinely about your
keyword's subject, write the post with fewer sources, lean on the first-party
platform facts, and record in `auditReport.failed` that topical research does not
exist for this angle — naming every search term you tried. That record is more
valuable than a padded citation list.


## Lane F is closed, and lane B has the headroom (2026-08-26)

Three agents in a row reported lane F exhausted, and the third checked `SOURCES.md`
properly: it is not merely spent, it is **over cap on every constituent domain**.
Assigning it wastes an agent's Phase 3 and forces an undeclared borrow.

**Send media/behaviour keywords to lane D or B instead.** Measured headroom as of
2026-08-26:

| Domain | Used | Left |
|---|---|---|
| `ethos.bl.uk` | 0 | 3 |
| `discovery.ucl.ac.uk` | 0 | 3 |
| `ora.ox.ac.uk` | 2 | 1 |
| `repository.cam.ac.uk` | 2 | 1 |
| `etheses.whiterose.ac.uk` | **5** | **0 — over cap** |

The **OpenAlex → institutional-repository** route is how the last three agents sourced
everything without a working search engine: find the DOI in OpenAlex, then fetch the
author's deposited copy from a university repository. Publisher hosts bot-block; the
repositories do not.

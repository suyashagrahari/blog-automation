# Research brief: history of halloween (row 100)

- Slug: `history-of-halloween` (free in Strapi, checked 2026-10-13). Absorbs "halloween origin" and "who made halloween".
- Batch: 2026-10-13-halloween-b2 · theme global · band 3,000–10,000/mo · plan weak 6/10.
- Head term warning: "history of halloween" is a 3-word head term held by History.com, Britannica, National Geographic and Wikipedia. The post targets the long-tail answer "who made Halloween" (timeline with evidence grades) inside it.

## Phase 0: first-party data

facts.md has no Halloween data (BRIEF §3). The post uses three platform-wide lines, verbatim, in the template and limits sections only:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- Average views per created page: 11.1 — measured 2026-09-24
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24

None is in the first 150 words. Putting phone-open rates into a history answer would be forcing them, which BRIEF §9 forbids, so that checklist item is recorded as a structural failure.

## Phase 1: SERP

Tooling: WebSearch (US-served index). Firecrawl was disconnected. `scripts/serp-ddg.mjs` hit a bot challenge in in-en, us-en and uk-en and returned 0 results. I used 2 of 2 searches.

Search 1, "history of halloween" (9 results): bigthink.com (403), gainesvillefl.macaronikid.com, sa.sothebysinstitute.com (hijacked subdomain), lapdonline.org (403), next-cms.climatetrace.org (hijacked), shibboleth.idm.home.nyu.edu (hijacked), inquirer.com (2011), nsucurrent.nova.edu (2018 student paper), thewrangleronline.com (high-school paper).
Search 2, "who made halloween origin": revolt.tv, nashuproar.org (student), tapatalk forum, milford.lib.de.us (redirects to delaware.gov), theweeklychallenger.com, climatetrace (spam again), brightstarcare.com franchise blog, gulfnews, skiddle.

**Weak count: 8 of 9 in search 1.** Bigthink is the only plausible strong page, and it returned 403. None of the named incumbents appeared, which looks like an index artefact, so confidence that this matches Google is low.

| Page | Words (approx.) | Where the answer sits | Data and dates | Format | What it optimises for |
|---|---|---|---|---|---|
| inquirer.com "History of Halloween: From Celts to candy" (2011) | ~600 | Para 2: "dates back to the ancient Celtic festival of Samhain" | Celts "2,000 years ago", Romans 43 AD Feralia/Pomona, unsourced | Prose, 1 H1 | Generic explainer |
| nsucurrent.nova.edu (2018) | ~350 | Para 2, "According to History" | Same History.com chain; 1000 AD All Souls; famine | Prose | Student feature |
| thewrangleronline.com | ~300 | Para 1 | "Druids... sacrificing animals and crops"; 1950s trick-or-treating | Prose | Student feature |
| revolt.tv "12 interesting facts" | ~1,260 | Intro, Samhain-first | Unsourced; Getty images | Numbered list | Listicle |
| bigthink.com / lapdonline.org | n/a (403) | Snippet: Celts, Romans, Gregory III | Snippet only | n/a | n/a |

## Phase 2: gap

- **Table stakes:** Samhain, All Saints / All Hallows' Eve, Irish immigration, 1950s trick-or-treating.
- **Gap:** every analysed page repeats one unsourced chain: Celts 2,000 years ago, then Roman Feralia and Pomona, then a pope. None dates the first print use of "trick or treat", none grades evidence, none mentions the candy-tampering research, and none notes that historians dispute direct Samhain continuity. The Wrangler repeats the druid sacrifice claim outright.
- **Stale or unsourced data:** the 2011 Inquirer piece and the 2018 student piece both lean on History.com.
- **Fan-out sub-queries:** who made Halloween; is it Irish; did it come from Samhain; when did trick-or-treating start; first use of "trick or treat"; why pumpkins; poisoned candy; is it Satanic; global spread. These became H2s, H3s and FAQs.
- **Angle:** wins by being the only post that answers "who made Halloween" as a dated, sourced timeline graded strong or disputed. It adds the 1927 print citation, Best's tampering evidence and Bitel's dispute of Samhain continuity.

## Phase 3: sources (all fetched)

| # | Source | Type | Verified claim |
|---|---|---|---|
| 1 | Bitel 2024, theconversation.com | Historian (USC) essay | c. 800 AD churchmen texts, about 400 years after conversion; Gregory IV 834; tales did not link Samhain with death; Rhys and Frazer and "whispers of human sacrifice"; 16th-century Protestant suppression; 18th-century Jack tale; mid-19th-century immigrants; bonfires at Beltaine; "only real remnant ... is the date" |
| 2 | McIntosh, The Canadian Encyclopedia (2012, edited 2025) | Reference (Historica Canada) | Lethbridge Herald 4 Nov 1927 quote; 1886 Kingston pumpkin; 1898 Vancouver; mid-1800s influx; WWII sugar rationing; 1950s suburbs; UNICEF Philadelphia 1947; $1.8bn by 2023 |
| 3 | Winick 2020, blogs.loc.gov Folklife Today | Folklorist, American Folklife Center | c. 1910: no trick-or-treating, Thanksgiving masking; Tuleja dates trick-or-treating to the 1930s, with no mention in 1940s articles; single origin "probably a fool's errand" |
| 4 | Dennison's Bogie Book 1920, archive.org (exempt) | Primary source, trade catalogue | New edition yearly; crepe borders 10¢; festoons 75¢–$1.50/doz; costumes as models to copy |
| 5 | anokahalloween.com/history | Organiser's own page | 1920 civic celebration to divert pranks; "first city" is self-reported and not repeated in the body |
| 6 | Kim 2025, Religions 16:1543 (MDPI, CC BY) | **Peer-reviewed, OA, full PDF read** | Korea since the 2000s; Itaewon 29 Oct 2022, 159 deaths; late-19th/early-20th-century US Protestant "satanic" framing, citing Hislop 1858 |
| 7 | Best, "Halloween Sadism: The Evidence", udspace.udel.edu | Scholarly (sociology), university repository, full PDF read (revised through 2025) | Tally from 1958; no substantiated child death or serious injury from a contaminated trick-or-treat treat; O'Bryan 1974 (father); 1982 Tylenol spike |

- Subject test: all 7 are about Halloween history.
- Swap test: Best's document is also cited by things-to-do-on-halloween-night via joelbest.net, so it is now in 2 posts and at the cap. Recorded as a failure.
- Generic statistic: only TCE's $1.8bn.
- Caps (capcheck 2026-10-13): theconversation.com is now 2 posts. All other domains are new to b2.
- Avoided: History.com, Britannica, NatGeo (competitors per prompt), T&F/Sage, Rodway/O'Neill theconversation (b1 UK sibling), Dunning 2025 (witch-quotes), newadvent/Szczych/JAMA (b1 when-is-halloween), and sydney.edu.au Cusack (used by halloween-in-australia).
- Read but not cited: Winick 2013 (Samhain new-year conjecture, Coligny 1897) and LoC Headlines & Heroes 2021 (repeats unsourced Samhain claims; candy corn 1880s/1898). Also Heppa 2025 (Folkloristika, UK change since the 1950s and the E.T. 1982 effect) and Nic Philibín 2026 EJFDS Oíche Shamhna (abstract only, PDF 403).

## Claims I could not verify (brief §0)

- OED entry for "trick or treat": oed.com returned a bot challenge. Wikipedia cites 1 Nov 1917 (Sault Daily Star, "tricks or treats") and 2 Nov 1917 (Owen Sound Sun, Chatsworth, "trick or treat") via newspapers.com clippings, which returned 403. The body gives 1927 as the long-cited first use and marks 1917 as unverified.
- Gregory IV date: Bitel says 834; the b1 sibling says 835. The body gives both.
- "1840s famine migration" as the driver: the sources say only "mid-1800s" or "mid-19th century". The body says the wave included famine emigrants and does not credit the famine alone.
- "Early-1900s community-party movement to curb vandalism": the only source found is Anoka's 1920 self-description. Wikipedia's trick-or-treating article notes few records support the "re-channel vandalism" story.
- Myth "Samhain god of the dead": no fetched source names where it came from. It is refuted only through Bitel.

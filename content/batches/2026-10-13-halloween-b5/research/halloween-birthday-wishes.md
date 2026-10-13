# Research brief: halloween birthday wishes

- Row 208 · slug `halloween-birthday-wishes` · absorbs "happy birthday halloween", "halloween birthday messages" · theme "messages"
- Searches used: **1 WebSearch (US index)**, keyword verbatim. Firecrawl not used (disconnected per BRIEF). No browser tools.
- Template check: `/birthday-gf` exists in TEMPLATE_LINKS (`app/lib/prompt.ts`, line 40) but is not in `oneOfLinks`, so the post links `/templates` as the oneOf alternative and `/birthday-gf` as the 4th internal link (mandatory 2 + oneOf 1 + 1 = 4).

## Phase 0: first-party data

No Halloween data exists (BRIEF §3). Platform-wide lines used verbatim (2026-09-24 vintage):
- #4 page type: birthday page for a partner (/birthday-gf), 510 created, 9.8% (first 150 words; the one line that bears on birthdays)
- 48.3% of shared pages opened on a phone (first 150 words)
- Average views per created page: 11.1 (after the table)
- 38.5% of creators password-protect (page section)

## Phase 1: SERP (WebSearch, US index, 2026-10-13)

| # | Page | Fetched | Date | Structure / words | Direct answer | Data | Optimising for |
|---|---|---|---|---|---|---|---|
| 1–2 | static.intrafocus.com ?p=70659, ?p=65315 | not fetched | n/a | hijacked-subdomain spam | n/a | n/a | Counted weak, not analysed (BRIEF §4) |
| 3 | aol.com "45 Best Halloween Wishes and Sayings" (Parade syndication) | 404 | n/a | snippet: puns, one "doesn't suck like a vampire" birthday line | n/a | none | general Halloween wishes; birthday is one line |
| 4 | lbas.lboro.ac.uk/wishes/halloween-wish.html | DNS fails (ENOTFOUND) | n/a | hijacked-subdomain spam pattern | n/a | n/a | Counted weak |
| 5 | newsable.asianetnews.com "Best Halloween Wishes 2025" | yes, ~600 words | 31 Oct 2025 | year-stamped listicle, history paragraph then quotes | no | none | Halloween 2025 news traffic; no birthday section |
| 6 | fithindi.thequint.com Halloween 2023 | not fetched (403 in b3 brief) | 2023 | year-stamped | n/a | n/a | stale |
| 7 | scoopwhoop.com "120 Best Halloween Wishes" (amp + canonical, 2 results) | yes, ~2,000 words | 29 Oct 2024 | 120 numbered quotes in H2 groups; one H2 "Halloween Birthday Wishes" with 11 lines (#23–33) | no; 2-paragraph intro | none | broad Halloween wishes; birthday is 11 of 120 lines |
| 8 | thequint.com Halloween 2021 | yes, ~300 words | 31 Oct 2021 | 6 wishes + images | no | none | stale |

**Weak count: 6 of 9** (intrafocus ×2, lboro, asianet 2025, thequint 2021, fithindi 2023). No result is a dedicated Halloween birthday page; the only birthday content is an 11-line H2 inside scoopwhoop's general list.

**Cannibalisation check:** halloween-eve-greetings (b3) shares 2 URLs (fithindi 2023, thequint 2021); happy-halloween-wishes (b1) shared aol/Parade syndication only. Under 4 with every named sibling, so no forced sub-intent change; the birthday angle is distinct anyway.

Table stakes: a block of "happy birthday and happy Halloween" lines; puns (boo-tiful, spook-tacular, fang-tastic).
Gap: nobody separates the situations (born on the day vs the day either side vs themed party vs kids vs partner vs late), nobody addresses the birthday-gets-swallowed problem, nobody gives a single number about 31 October births, and nobody covers when the theme is unwelcome.
Fan-out: what to say to someone born on Halloween; is it unlucky; how many people are born on 31 October; kids' card lines; separate party or combined; what day is Halloween 2026/2027; short texts; coworker wishes; belated wishes; can a page open at midnight.

Angle: *This post wins by being the only one that treats a Halloween birthday as a birthday first, sorting 40 original lines by whose birthday it is and measuring how rare the date is from US SSA and UK ONS birth records, using SubhSandesh's 510 partner-birthday pages and 48.3% phone-open share.*

## Phase 3: sources (all fetched)

| Source | What it says (verified) | Read | Subject | Swap |
|---|---|---|---|---|
| FiveThirtyEight births data (SSA 2000–2014), github.com/fivethirtyeight/data/tree/master/births | Own analysis of the CSV: 31 Oct mean 10,263/day vs 11,350 overall; rank 355/365 (29 Feb excluded); 11.8% below same weekday ±7 d; 30 Oct −2.6%, 1 Nov +1.8%; 153,942 total. Only 4 Jul, 24 Dec, 1 Jan, 25 Dec rank lower among the dates checked | CSV + README | Yes: birth dates | Fits only a birth-date post |
| ONS "How popular is your birthday?", 18 Dec 2015 (+ data.csv) | E&W 1995–2014: 31 Oct 1,803/day vs mean 1,813; rank 197/365 by own count; 26 Sep top | article + CSV | Yes | Yes (birth-date specific) |
| Macfarlane & Dattani, IJPDS 4(3), 22 Nov 2019 | Planned caesareans concentrated into weekday mornings; spontaneous births peak 4–6am | full published abstract-format paper | Yes: birth timing | Yes |
| Espenhain et al., JAMA Netw Open, 1 Jul 2026, PMC13366199 (CC BY) | 1,106,493 Danish grandparents; 9.9% higher SARS-CoV-2 hazard in the week after a grandchild's birthday, despite official advice not to gather | abstract only (EPMC REST API; page 403s scripted fetch) | Yes: birthday gatherings | Yes |

Rejected: Levy, Chung & Slade 2011 "Influence of Valentine's Day and Halloween on Birth Timing" (Social Science & Medicine, Elsevier; banned publisher per BRIEF §9). It is the direct study of the Halloween dip, so the post states the dip from raw data and claims no cause. Frontiers "Identity Selection and the Social Construction of Birthdays" (Frontiers, banned).
findpapers queries tried: "birth timing holidays Halloween", "birthday celebration ritual meaning", "day of week birth seasonality scheduled births", "birthday greetings social media wishes", "birthday celebration children party", "birthdays temporal landmarks", "planned caesarean induction holiday avoidance births", "birthday", "birthday messages social network wall posts", "holiday birthdays births Christmas Halloween timing obstetric".

## Brief claims checked
- Halloween 2026 Saturday, 2027 Sunday: consistent with BRIEF §1.
- Task prompt said check TEMPLATE_LINKS for a birthday template: `/birthday-gf` exists (partner birthday only; prompt.ts comments note /birthday-bestfriend, /birthday-friend, /birthday-parents were removed).
- 5-word overlap of every copyable line against all Halloween b1–b4 blogs and scoopwhoop's birthday H2: zero hits after rewriting 3 lines.

# Research brief: halloween messages for family

Row 123 · slug `halloween-messages-for-family` · theme messages · absorbs "halloween wishes for family" · plan weak 4/10 · band 3,000–10,000/mo.

## Phase 0: first-party data
- No Halloween usage data exists in facts.md (BRIEF §3). `npm run facts` was NOT run.
- Used, verbatim in `factsUsed`: 48.3% phone-open share (2026-09-24); Raksha Bandhan 2026 lead time, 49.4% built on the day itself (2026-09-09), labelled in the body as "our nearest family-festival analogue"; 90.9% publish rate (2026-09-24).
- The template spec (`template-spec.md`) supplies the Family-mode and premium features. Only spec features are described.

## Phase 1: SERP (1 search: WebSearch, US index, 2026-10-13)
`content/keywords/2026-10-12-halloween-global/serps.md` has no SERP for this keyword, so it was measured fresh.

| # | Result | Type | Fetched? | Notes |
|---|---|---|---|---|
| 1 | fithindi.thequint.com (AMP, "Happy Halloween 2023") | News listicle, year-stamped 2023 | 403, judged from snippet | Weak: stale, generic, not family-specific |
| 2 | hallmark.ca "What to write in a Halloween card" (2021) | Competitor (card brand) | Yes | ~60 lines over 11 sections; "For Family" holds 5 lines with no split by relative; seasonal/religious sections exist. Says Halloween "isn't normally a big day for family gatherings". Never cited or linked. |
| 3 | ibtimes.co.uk "Top 10 Halloween quotes… friends and family" (2016) | News | Yes | Weak: 10 attributed quotes, nothing family-specific, 2016 |
| 4 | lutonhoo.oandg.co.uk "50+ Spooktacular Halloween Wishes" | Hijacked-subdomain spam | Not analysed | Weak (spam) |
| 5 | newsx.com "Halloween 2025: 50 heartfelt messages… family and friends" | News listicle | 403, judged from snippet | Weak: year-stamped, mixed audience |
| 6 | republicworld.com "Happy Halloween 2025: wishes, messages" | News listicle | Yes | Weak: generic household wishes, year-stamped |
| 7 | msoid.icmbio.gov.br "Printable Halloween sayings" | Hijacked-subdomain spam | No | Weak (spam) |
| 8 | aol.com (Parade syndication) "110 Halloween messages" | Competitor-class listicle | Snippet only | A few "batty family" puns |
| 9 | static.intrafocus.com "halloween wishes for granddaughter" | Hijacked-subdomain spam | No | Weak (spam) |

Weak in top 9 returned: 7 (3 spam subdomains, 4 thin/stale news listicles). The plan said 4/10; the measured SERP is weaker than that. Gate 4 passes.

Direct answer placement: none of the fetched pages answers "what should I send family" in the first 100 words; all open with Halloween origins or a generic intro. Format: bulleted lists, no tables, no FAQ schema seen on the fetched pages, no sources cited.

## Phase 2: gap analysis
- Table stakes: a family section of short, warm lines; seasonal alternatives (Hallmark).
- Gap: no page splits by relative (group chat, cousins, aunts/uncles, nieces/nephews, parents, in-laws). None covers family abroad and time zones, relatives who don't celebrate (beyond Hallmark's generic "seasonal" block), or bereaved families around All Saints' / All Souls' Day. None gives a channel recommendation per relative, and none cites research.
- Stale data: the ranking pages are year-stamped 2016, 2021, 2023 and 2025.
- Fan-out sub-queries, mapped to H2s and FAQs: what to write to family; group chat lines; in-laws; non-celebrating relatives; grief on 1–2 Nov; texting relatives in Australia/India; text or call parents; nieces/nephews; Halloween 2027 date.
- Angle: "Wins by being the only post that splits Halloween messages for family by relative, including in-laws, family abroad (with time-zone maths valid for 2026 and 2027), relatives who don't celebrate and families grieving on 1–2 November, grounded in the 48.3% phone-open share and the Raksha Bandhan day-of build pattern."

## Phase 3: sources (findpapers.mjs, Crossref + Europe PMC; no search budget used)
Queries tried: extended family contact frequency wellbeing; kin contact frequency loneliness older adults; family group chat messaging; aunts uncles cousins relationship; WhatsApp family group intergenerational; transnational family communication migrants left behind; contact with relatives life satisfaction; bereavement social support messages condolence; aunt uncle niece nephew relationship; grief anniversary reactions holidays bereaved; time zone difference transnational family video calls; family group chat; extended kin network support mental health; frequency of contact with grandparents aunts uncles adolescents; contact with extended family well-being; kinship ties beyond nuclear family wellbeing; cousins relationship adulthood; relatives social network loneliness europe survey.

| Source | Use in post | Read | Licence / publisher | Cap status |
|---|---|---|---|---|
| Tambellini et al. 2026, J Gerontol B, PMC13553083 | Kinkeeping (definition H2); widowhood: 3,257 widowed of 55,555, networks grew but satisfaction and closeness fell (grief H3) | Abstract + methods/background passages | CC BY, OUP | 1st use in b3 |
| Arpino et al. 2026, J Gerontol B, PMC13476080 | 23 countries; phone/face-to-face contact with older parents widespread, text/video less common (parents H2, wrong-choice) | Abstract | OUP | 2nd use in b3 (daughter): AT cap, not over |
| Ekoh et al. 2026, The Gerontologist, PMC13529335 | 102 interviews, 7 Canadian cities; seasonal barriers; smartphones complement, not replace, in-person contact (abroad H2) | Abstract | CC BY, OUP | 1st use |
| Stoebenau et al. 2025, J Marriage & Family, PMC13148376 | 46 Nairobi interviews; in-law integration varied among women; higher-income participants wanted couple autonomy (in-laws H3) | Abstract | CC BY, Wiley | 1st use |
| Baulch 2024, The Conversation | 160 Australian readers; >80% credit family influence on reading; uncles and great-aunts named (extended family H2) | Full article | The Conversation (not a competitor) | 1st use of domain in b3 |

Rejected: Frontiers papers (UAE extended-family distance 2026, intergenerational social media 2025, Filipino transnational families): Frontiers is banned. CHI 2020 "Family Group Chat": not verifiably open access. Journal of Family Research 2020 single mothers' contact frequency: host DNS failed (ubp.uni-bamberg.de unreachable), so it could not be fetched or verified. PLOS ONE 2024 bereaved time perspective (PMC10906841): fetched, but "markers in time" was too indirect for the claim. Avoided the b1/b2 family papers (Chereches, Neely, Frontiers 2025, Reynolds, Yang & Wang).

Time-zone maths, checked by hand against DST rules: UK clocks go back 25 Oct 2026 and 31 Oct 2027 (02:00), so the evening of 31 Oct is GMT in both years. US DST ends 1 Nov 2026 and 7 Nov 2027, so New York is EDT (UTC−4). Sydney is on AEDT (UTC+11) from early October, and India is UTC+5:30. That gives 6 pm London = 2 pm New York = 11:30 pm Mumbai = 5 am 1 Nov Sydney. No timeanddate page was cited.

## Originality check
5-word-overlap script (`halloween-messages-for-family-overlap.cjs`, scratchpad) against all b1, b2 and b3 blog bodies and FAQs: none of the 56 offered lines shares a 5-gram with any sibling. Three early drafts did and were rewritten ("from the two of us. Thank you for", "Love from all of us", "and I thought of you"). The remaining overlaps are in prose: citation boilerplate, the 48.3%/90.9% fact phrasing, and template-feature descriptions shared with posts that describe the same /happy-halloween spec.

## Brief/prompt claims found false
- The prompt places `halloween-captions-for-family` in b2. It is a b1 post (`content/batches/2026-10-12-halloween-b1/blogs/`). It was checked there.
- Plan "weak 4/10": the measured top 9 had 7 weak results.

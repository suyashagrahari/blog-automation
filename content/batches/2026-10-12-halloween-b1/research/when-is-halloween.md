# Research brief — when-is-halloween (row 42)

- **Keyword:** halloween 2026 date · absorbs: when is halloween 2026, halloween 2026 day
- **Theme / archetype:** global · weak 3/10 in PLAN (contested: calendar sites)
- **Slug:** `when-is-halloween` (Strapi: free, checked 2026-10-12) · category `festive-beats`
- **Sibling not to cannibalise:** `halloween-in-the-uk` (UK customs, Samhain history). This page is the date authority; Samhain gets one sentence and no link.

## Phase 0 — first-party data

facts.md has no Halloween data (BRIEF §3). Used, verbatim:

1. Raksha Bandhan 2026 lead time (n = 89): 49.4% built on the festival day, median lead time 0 days. Disclosed in body as a different festival and a small sample. **Opening paragraph.**
2. 48.3% of shared pages opened on a phone. **Opening paragraph (word ~132).**
3. 90.9% of started pages published and shared.
4. Average views per created page: 11.1.

Template spec: /happy-halloween has **no scheduling feature**. Only /happy-halloween-premium's optional unlock time (countdown until then) is described as a "send early" option.

## Phase 1 — SERP

**Tool:** Firecrawl MCP disconnected → `WebSearch` (US-served index, not Google's ranking, so lower confidence). **2 searches used:** "halloween 2026 date" and "city moves trick-or-treat hours when Halloween falls on Sunday news".

Results for "halloween 2026 date" (9 returned):

| # | URL | Type | Weak? |
|---|---|---|---|
| 1 | gotime.backtrace.io/when-is-halloween-2026/ | scraped/spam subdomain (connection refused) | weak |
| 2 | farmersalmanac.com/move-halloween-saturday-28925 | almanac explainer, 4,490 words | no |
| 3 | seo-service.chartlocal.com/?p=12380 | scraped/spam subdomain | weak |
| 4 | awarenessdays.com/…/halloween-2026/ | UK awareness-day calendar, 1,479 words | no |
| 5 | do-b.clients.kiwiirc.com/when-is-halloween-in-2026/ | scraped/spam | weak |
| 6 | static.intrafocus.com/?p=45300 | scraped/spam (connection refused) | weak |
| 7 | do-b.clients.kiwiirc.com/?p=223160 | scraped/spam | weak |
| 8 | awarenessdays.com/…/halloween-2024/ | stale year page | no |
| 9 | publicholidays.com/halloween/ | holiday-calendar stub, 348 words | no |

**Weak count: 5 of 9** (all scraped spam subdomains). Gate 4 passes. These are calendar/date competitors: none is cited or linked.

### Top pages analysed (the three real ones; the spam pages had no content to analyse)

| Page | Words | Direct answer | Headings / format | Data cited (date) | Optimising for |
|---|---|---|---|---|---|
| farmersalmanac.com | ~4,490 incl. nav | First line, "Quick Reference" box | Quick ref; next-five-years table (year, weekday, "what it means"); history (Samhain, mumming, All Souls, trick-or-treat); "Why always Oct 31"; jack-o'-lanterns; legends; trivia; jokes; FAQ | History.com spending claim (undated); no primary sources | "when is halloween 2026" + general Halloween hub |
| awarenessdays.com 2026 | 1,479 | H1 + first line | "What's different in 2026" (Saturday; England/Wales half term 26–30 Oct; BST ends 25 Oct); how to take part; key dates list; FAQ; paid toolkit upsell | Council half-term dates, English Heritage event | UK planners, schools, workplaces |
| publicholidays.com | 348 | First paragraph | 3-row table 2026–2028; short US description; previous years | none | the bare date |

**Error found:** the almanac page says "The next Saturday Halloween after 2026 is 2031, then 2036." Date arithmetic: 31 Oct 2031 and 31 Oct 2036 are both **Fridays**; the next Saturday is **2037**. The WebSearch summary repeated the error.

## Phase 2 — gap analysis

- **Table stakes:** date + weekday for 2026–2028+, "always 31 October", All Hallows' Eve → All Saints' Day, not a public holiday.
- **Gap:**
  - No page gives the **US** clock change (first Sunday of November) next to the UK one, or notes that in 2027 BST ends on Halloween morning itself.
  - Nobody covers **time zones**: when 31 October starts in Sydney or India relative to New York, or the 4-hour London–New York week.
  - No page traces the date to a **primary or scholarly** source; all of them retell folklore.
  - None says **how** "not a public holiday" was checked.
  - None covers **Sunday trick-or-treat moves**, even though 2027 is a Sunday.
- **Stale or wrong data:** the almanac's 2031 error; its History.com spending figure is undated.
- **Fan-out sub-queries → H2s:**
  - weekday per year → table
  - why 31 October → history H2
  - what else is around it → dates H2
  - is it a public holiday → H2
  - trick-or-treat hours and moves → H2
  - time zones → H2
  - sending a greeting on the day → template H2
- **Angle (batchMeta.angle):** the only post pairing 2026–2030 weekdays with the UK and US clock changes and city offsets. It sources the date to peer-reviewed liturgy history, corrects the 2031 error, and uses the Raksha Bandhan same-day-build figure to explain timing.

## Phase 3 — sources (all fetched and read)

| Source | Type | What it supports | Date |
|---|---|---|---|
| [Catholic Encyclopedia, "All Saints' Day" (New Advent)](https://www.newadvent.org/cathen/01315a.htm) | encyclopedic | Gregory III (731–741) chapel at St Peter's, anniversary fixed 1 Nov; Gregory IV (827–844) extended it to the whole Church; vigil as early as the feast | 1907 |
| [Szczych, Ruch Biblijny i Liturgiczny 62(3)](https://rbl.ptt.net.pl/index.php/RBL/article/view/207) | **peer-reviewed, OA, CC BY 4.0**; Polish full PDF read | 609 Pantheon; 741 St Peter's oratory (Gregory III); feast moved to 1 Nov in 835; Hadrianum Gregorian Sacramentary Mass "in vigilia omnium sanctorum" for 31 Oct (texts attributed to Alcuin, d. 804) | 2009-09-30 |
| [Staples, Yip, Redelmeier, JAMA Pediatrics 173(1)](https://europepmc.org/article/PMC/PMC6583441) | **peer-reviewed**, free full text on PMC | 5–11:59 pm window; +43% pedestrian deaths; 10× for ages 4–8; peak ~6 pm; absolute risk fell from 4.9 to 2.5 per 100M | 2019-01 |
| [WTKR, Poquoson council vote](https://wtkr.com/news/poquoson-city-council-votes-to-observe-halloween-on-oct-30-due-to-holiday-falling-on-sunday-this-year) | dated news (JSON-LD datePublished 2021-10-15) | 7–0 vote to move trick-or-treat to Sat 30 Oct 2021; "not changing the holiday, just trick-or-treat"; dusk to 8 p.m.; resident objections | 2021-10-15 |
| [15 U.S.C. §260a (LII)](https://www.law.cornell.edu/uscode/text/15/260a) | statute | US DST ends 2 a.m. on the first Sunday of November; 2005 amendment (Pub. L. 109–58) replaced "last Sunday of October" | — |
| [5 U.S.C. §6103 (LII)](https://www.law.cornell.edu/uscode/text/5/6103) | statute | 11 US legal public holidays, Halloween not among them | — |

**Verified but not linked** (6-link ceiling; gov.uk at cap):

- legislation.gov.uk SI 2002/262: BST ends 1 a.m. GMT on the last Sunday in October.
- gov.uk bank-holidays.json (E&W, Scotland, NI 2026–2027): no 31 October.
- canada.ca CRA 2026 public holidays: Thanksgiving 12 Oct → Remembrance Day 11 Nov.
- nsw.gov.au public holidays 2026–2027: Labour Day → Christmas.

**Could not verify:** India's 2026 central holiday list (DoPT PDF fetch failed); Victoria's list (403).

**Searches tried (Crossref + Europe PMC via findpapers, DOAJ API):**

- "All Saints All Souls feast history medieval"
- "Halloween history calendar festival origins"
- "Halloween trick-or-treating children pedestrian fatalities"
- DOAJ: "All Saints" feast history; Halloween history; "All Souls" medieval; Samhain calendar

OpenAlex was rate-limited (429).

**Excluded:**

- the "medieval Slovenia" calendar paper (Taylor & Francis, banned)
- Ethos 2005 "Tricks of Festival" (paywalled)
- ich.unesco.org (full)
- doi.org links (publisher pages used instead)

**Computed, not cited:**

- weekdays 2020–2040
- UK/US/NSW DST dates 2026–2030
- UTC offsets on 31 Oct 2026–2028 for Sydney, Kolkata, London, New York, LA, Honolulu, Kiritimati and Pago Pago (Node Intl, IANA tz)

## Brief claims checked

- Sat 31 Oct 2026, Sun 2027, Tue 2028: **true**. 2029 is a Wednesday and 2030 a Thursday.
- UK clocks change 25 Oct 2026 and 31 Oct 2027: **true** (last Sunday in October). US: 1 Nov 2026, 7 Nov 2027.
- "8th-century Pope Gregory III / later Gregory IV dating": **partly**. The 8th-century step is the St Peter's chapel; Szczych dates the feast's move to 1 November to **835** (9th century, Gregory IV's papacy). The Catholic Encyclopedia credits Gregory III with fixing the chapel anniversary on 1 November. The body gives both.
- "Not a public holiday in US/UK/CA/AU/IN": verified for the US, UK and Canada, and for Australia via NSW only. **India unverified** (stated as such in the body).

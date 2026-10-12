# Research brief — navratri wishes for long distance love

Slug: `navratri-wishes-long-distance` · cluster romantic-wishes · bodyLanguage en (Hinglish lines) · run 2026-10-12
Also covers: navratri wishes for long distance relationship, miss you on navratri, virtual garba with partner.

## Phase 0 — first-party data

facts.md read directly (no `npm run facts`). No Navratri or dandiya-partner usage data exists. Used, verbatim:

- 214 "I miss you" pages on /missyou-gf (2026-09-25) — opening paragraph
- 1,434 hug taps across 138 of 214 pages, 64.5% (2026-09-25) — opening paragraph, comparison table
- 28.0% of miss-you senders set a reunion date (2026-09-25) — opening paragraph
- 43.5% of miss-you senders password-protect (2026-09-25) — comparison table
- 48.3% of shared pages opened on a phone (2026-09-24) — comparison table, FAQ
- Raksha Bandhan 2026 lead time, 49.4% built on the day, n=89 (2026-09-09) — labelled as Raksha Bandhan analogue, not Navratri

Caveats honoured in body: n=214, two months, no festival claim. City-pair line (picker defaults) deliberately not used.

## Phase 1 — SERP (1 WebSearch call, US-served)

Query: `navratri wishes for long distance love`. All positions US-served (WebSearch). Corroborated by serps.md row "navratri wishes for long distance relationship | 9 | New Year LDR spam pages".

| # | URL | Type | Words | Long-distance content | Date of data | Weak? |
|---|---|---|---|---|---|---|
| 1 | testaction.babson.edu/…/happy-new-year-wishes-for-my-love-long-distance.html | Scraped mirror spam, New Year | fetch failed | New Year, not Navratri | — | Weak |
| 2 | my.kyndi.co.uk/happy-new-year-wishes-for-my-love-long-distance.html | Scraped mirror spam | fetch failed | New Year only | — | Weak |
| 3 | thequint.com/…/chaitra-navratri-wishes… | News roundup | ~370 | 0 mentions; Chaitra 2019 | 2019 | Weak (stale, wrong Navratri) |
| 4 | community.realventures.com/…/happy-new-year-wishes-for-my-love-long-distance.html | Mirror spam | not fetched | New Year | — | Weak |
| 5 | thequint.com/amp/…/happy-navratri-2021-wishes… | News roundup | ~400 | 0 mentions; family prayers | 2021 | Weak (stale) |
| 6 | eduyush.com/blogs/lifestyle/happy-navratri-wishes | Competitor list (refreshed to 2026, "170+") | ~5,870 | 0 long-distance mentions | 2026 | Strong-ish but off-intent |
| 7 | fithindi.thequint.com/amp/…2021 | Mirror of #5 | — | 0 | 2021 | Weak |
| 8 | lutonhoo.oandg.co.uk/en/navratri-wishes-in-hindi.html | Scraped mirror (known) | — | — | — | Weak |
| 9 | lbas.lboro.ac.uk/wishes/navratri-wish.html | Hijacked subdomain spam | fetch failed | generic | — | Weak |

Weak count in top 9: 8 (only eduyush is a real page, and it has no long-distance content). Gate 4 passes. AI summary in the WebSearch result itself said "no Navratri-specific wishes written for long-distance couples."

eduyush structure: H1 "170+ Happy Navratri Wishes 2026", H2s by audience (WhatsApp, family, clients, garba night), day-wise. No time zones, no partner-apart section, no research. None cited or linked.

## Phase 2 — gap

- Table stakes: a set of wishes, some Hindi/Hinglish, the 2026 dates.
- Gap: nobody addresses couples apart at all; nobody converts garba times across time zones; nobody handles jealousy when one partner attends garba alone; nobody offers a nine-night shared ritual.
- Fan-out sub-queries → H2s: what makes a long-distance wish work; wishes by situation; what time is 9 pm IST abroad; virtual garba / ritual apart; partner at garba without me; which format (text / call / page); planning the reunion garba; when a page is wrong.

Angle: wins by being the only post that converts a 9 pm IST garba into the partner's local time for all nine nights (DST-checked), with situation wishes, a nine-night ritual and a research-backed jealousy section, grounded in SubhSandesh's miss-you data.

## Time-zone working (IANA tz via Node Intl, cross-checked with GOV.UK and NSW)

9 pm IST, every night 11–19 Oct 2026: London 16:30 BST · Dubai 19:30 · New York/Toronto 11:30 EDT · SF/Vancouver 08:30 PDT · Sydney 02:30 AEDT next day · Perth/Singapore 23:30.
Reverse (local 9 pm → IST): London 01:30 next day · Toronto 06:30 next day · Vancouver 09:30 next day · Sydney 15:30 same day · Dubai 22:30.
UK clocks back 25 Oct 2026 (GOV.UK) → after Navratri; 25 Oct 2026 Sharad Purnima garba = 15:30 GMT London. US DST ends 1 Nov 2026 (tz db). NSW DST began 4 Oct 2026 (NSW Govt). 2027: 30 Sep–2 Oct Sydney is AEST → 01:30; from 3 Oct 02:30 (tz db rule; NSW page does not list Oct 2027 start, so body hedges to "opening nights land an hour earlier").

## Phase 3 — sources

findpapers.mjs queries: "long-distance dating relationship jealousy uncertainty", "long-distance relationship video call synchronous communication couples", "geographically separated couples relationship quality stability", "long distance relationship young adults India". Crossref hits were mostly T&F Communication Quarterly (publisher at cap), predatory IJSR, or Indonesian journals. Europe PMC REST searched directly (title/abstract "long-distance relationship", OA only).

Rejected: Frontiers mediated-touch LDR study (Frontiers in Psychology at journal cap); "Long-distance texting" J Soc Pers Relat 2021 PMC8669216 (Sage, at publisher cap); Dainton & Aylor 2001 / Stafford (T&F / Sage caps); Kelmer 2013 Family Process (not OA).

| Source | Claim used | Read | Date |
|---|---|---|---|
| Okati et al., PLOS Mental Health (europepmc PMC12798524) | 442 adults, 215 LDR vs 227 GCR; LDR group reported significantly higher somatic symptoms; cross-sectional, Iranian | Abstract + full JATS text via Europe PMC REST; CC BY | 2025-10-15 |
| Métellus et al., J Marital Fam Ther (europepmc PMC12445260) | 322 adults 18–29, 2 years; social-media jealousy → more electronic partner surveillance and lower satisfaction 1 year later; not LDR-specific (stated in body) | Abstract + full JATS text; CC BY-NC-ND, cited/linked only | 2025-09-18 |
| GOV.UK clocks change | UK clocks back 25 Oct 2026, 31 Oct 2027 | Full page | updated 2025-11-24 |
| NSW Government daylight saving | DST starts 4 Oct 2026 | Full page | none |
| Drik Panchang 2026 New Delhi | 11–19 Oct; Ashtami + Navami 19 Oct; nine colours | Full page fetched (geoname 1261481) | none (date reference) |

Dussehra regional dates (20 Oct Delhi; 21 Oct Bengal/Mysuru) and 2027 dates (30 Sep–8 Oct, Dussehra 9 Oct) are BRIEF-verified; the 2027 drik page was not fetched by this writer.

None of the sources is used by the -love, -husband or -wife siblings. europepmc.org is cap-exempt in verify.config.json.

## Internal links

/missyou-gf (miss-you message itself), /train-ticket (playful alternative), /dandiya-partner (placed after the "plan the garba together" setup; only template-spec features described: nine lines, six photos, date/time/venue/dress code, colour pick, Add to calendar, "Any night you pick", 1080×1920 Dandiya Pass, email on first yes; English UI and one-to-one limits stated).

## Brief claims checked

- Prompt: "Measured today (US-served): zero LDR Navratri page; only New Year LDR spam" — confirmed (eduyush is the only real page and has 0 long-distance lines).
- BRIEF: eduyush "SOME titles still say 2025" — this page's H1 says 2026 (title tag still "Best Messages 2025"); consistent with the BRIEF's caution.
- No false brief claims found.

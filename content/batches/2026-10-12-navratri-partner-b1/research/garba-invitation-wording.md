# Research brief — garba invitation wording

- Slug: `garba-invitation-wording` · cluster invite-wording · bodyLanguage `en` · autocomplete demand 11
- Also covers: garba invitation message, garba night invitation wording, garba invitation message for whatsapp
- Written 2026-10-12. WebSearch calls used: **2 of 2** (SERP + one listing search). No browser tools.

## Phase 0 — first-party data gate

`content/facts.md` read directly (no `npm run facts`, per BRIEF §3). There is no invitation, Navratri or dandiya-partner data. Facts used, all platform-wide or analogue and labelled as such in body prose:

1. 48.3% of shared pages are opened on a phone (27,725 of 57,456 views), measured 2026-09-24. Used in the first 150 words to argue for a one-screen details block.
2. Average views per created page: 11.1, measured 2026-09-24. Used in the first 150 words: people reopen a link to re-check details. Caveat in the body: personal pages, not garba flyers.
3. Raksha Bandhan 2026 lead time (n = 89): 49.4% built on the festival day itself. Used in the RSVP block and one FAQ, labelled as a different festival and a small sample.

Verdict: the gate passes on count (3, with 2 in the first 150 words), but it is **thin**. None of the three measures what organisers write. The template spec (`template-spec.md`) is used only in the "wrong tool" section.

## Phase 1 — SERP (US-served, WebSearch, 2026-10-12, query "garba invitation wording")

Nine results came back. **8 of 9 are weak**, so Gate 4 passes.

| # | URL | What it is | Words / structure | Direct answer? | Data and date | Weak? |
|---|---|---|---|---|---|---|
| 1 | en.wikipedia.org/wiki/Garba_(dance) | Encyclopedia entry | ~790 words wikitext; Etymology, Dance/music, Popularity | No; mentions invitations once | none | Weak (off-intent) |
| 2 | deccanherald.com (garba-ban board, Matar) | PTI news, 16 Sep 2025 | Short news | No | 2025 news | Weak (off-topic) |
| 3 | lists.stevens.edu igsa 2008/000016 | 2008 mailing-list invitation | Fetch: **HTTP 404** | Snippet only: hook, theme, date, venue | 2008 | Weak (dead, 18 years old) |
| 4 | lists.stevens.edu igsa 2008/000017 | Duplicate thread | **HTTP 404** | — | 2008 | Weak |
| 5 | tring.co.in/invitations/invitations-for-garba-night | Celebrity-shoutout marketplace; "120+ Garba Night Invitation Messages For Navratri 2025" | ~5,200 words with chrome; H2s: Dandiya messages, Raas garba English, Traditional, Gujarati, Party, FAQ | Answer only in FAQ ("date, time, venue… dress code… RSVP"); greeting-style lines with no logistics | datePublished 2023-05-17, title says 2025; "RSVP" once, "parking" 0, "pass" 0 | **Only targeted result**: competitor, generic |
| 6 | ubwp.buffalo.edu/gsa/calendar/2018-10-13/?ical=1 | iCal of GISA Garba Night 2018 | One event description | Real organiser copy: When/Where/Time 8 pm–midnight, $3/$7/$13 tiers, food not included | 2018 | Weak (raw .ics, noindex) |
| 7 | extraleker.old.convert.no/… | Scraped mirror of an MP-minister news story | TLS cert mismatch, not fetchable | No | — | Weak (spam) |
| 8 | indianembassywarsaw.gov.in/docs/1702273432GAR.pdf | Embassy press release, 9 Dec 2023, on the UNESCO inscription celebration | ~150 words | No | 2023 | Weak (off-intent) |
| 9 | ghaa.in/news?id=346 | Real association circular: Sharad Poonam Garba 28 Oct 2023 | ~120 words | Real organiser copy: "8 p.m. onwards", passes Rs 100, collect by 25 Oct, no entry without a pass | 2023 | Weak as a ranking page; **useful primary example** |

Cross-check: `content/keywords/2026-10-12-navratri-garba-dandiya/serps.md` gives "dandiya night invitation wording society" 7/10 weak (campus and ticketing listings), which agrees.

**Competitors, never linked:** Tring (celebrity e-invites marketplace). Ticketing listings (Eventbrite, Humanitix, TicketTailor, Platinumlist) were read as examples only and are not linked.

## Phase 2 — gap analysis

- **Table stakes:** date, time, venue, dress code and RSVP are named (Tring FAQ; the organiser examples).
- **The gap:** no ranking page writes the copy *from the organiser's side, block by block*. None says the end time must be stated or why. None covers the pass/price "includes" line, children and elders, food or rules. None checks real listings.
- **Stale data:** Tring is dated 2023 and titled 2025. The Stevens results are from 2008 and now dead.
- **Unanswered:** whether a society garba can run past 10 pm; how to word a pass line; how to get a headcount.
- **Fan-out sub-queries (mapped to H2s and FAQs):** what to include; how to write the time; can it go past 10 pm; WhatsApp message; pass/fee line; dress code; kids and elders; RSVP/headcount; how far ahead to send; garba vs dandiya wording; whether /dandiya-partner works for a group.
- **Angle:** the only post that writes garba invitation wording for the organiser, block by block, ties the end time to the Noise Rules' 10 pm cut-off and its 15-day festive exemption, and checks five real listings. SubhSandesh's 48.3% phone-open and 11.1 views-per-page figures support the case for a one-screen details block.

## Real organiser listings read (examples only, text not copied)

| Listing | URL (read 2026-10-12) | Verified content used |
|---|---|---|
| GHAA Sharad Poonam Garba, Ahmedabad, 2023 | ghaa.in/news?id=346 | 8 p.m. onwards; Rs 100 pass; collect by 25 Oct; no entry without a pass; families (spouse and children); dinner after; posted 12 Oct 2023 |
| GISA Garba Night, Buffalo, 2018 | ubwp.buffalo.edu/gsa/calendar/2018-10-13/?ical=1 | 8 pm to midnight; $3 members, $7 UB students, $13 others; food not included; "line dancing in a circle" explainer for newcomers (the idea is used, the text is not) |
| Group of Nagarsheth, Perth, 10 Oct 2026 | events.humanitix.com/ratri-b4-navratri-2026 | Listing header 7–11 pm, body text "7:00 PM Onwards"; $15 early bird; under 5 free; food for purchase; free parking; traditional encouraged "but wear anything you're comfortable dancing in"; alcohol- and smoke-free; digital or printed ticket; photography notice |
| Palos Verdes Garba & Dandiya Night, 17 Oct 2026 | tickettailor.com/events/peninsulahill/2377612 | 6:00–9:30 pm; Regular $35, Kids $25, under 5 free; includes entrance, dinner and fees; dandiya sticks for purchase |
| Indian Festivals Club of Nova Scotia, 2–4 Oct 2026 | eventbrite.ca/e/1999321930715 | 7 PM–11:30 PM; online sales ended, limited door tickets. Price and child policy were not visible in the page read. **The WebSearch summary's "under 11 free / no outside food" claim was not verified and is not used.** |

## Phase 3 — sources

| Source | Type | Subject test | Swap test | Read |
|---|---|---|---|---|
| CPCB, Noise Pollution (Regulation and Control) Rules, 2000: cpcb.nic.in/noise-pollution-rules/ | Statute (notified 14 Feb 2000) | Pass: loudspeakers on festive nights set the end time | **Fails:** sibling dandiya-invitation-card-in-hindi cites the same rules (displaypdf URL). Domain now at 2 posts | Full page |
| GHAA circular, ghaa.in/news?id=346 | Primary organiser notice | Pass | Pass | Full |
| Hock, Anderson & Potoski 2012, *Public Administration Review* 73(2): onlinelibrary.wiley.com/doi/10.1111/j.1540-6210.2012.02627.x | Peer-reviewed, paywalled | Pass (invitation → attendance) | Pass | **Abstract only** (Crossref): 8.3% (n=108) vs 4.7% (n=169) |
| IJERPH 2022, PMC9407907 (Europe PMC) | Peer-reviewed, open access | Pass (festival gatherings; garba raas "organized with feasts") | Pass | Full text |
| *Current Cardiology Reviews* 2025, PMC12060909 (Europe PMC) | Review, open access | Partial: youth cardiac; cites EMRI Gujarat 66,397 heart calls Jan–Nov 2023, peaking Oct–Nov "coinciding with Navratri" | Pass | Full text (a secondary report of EMRI figures) |
| Drik Panchang, New Delhi, year=2026 and 2027 | Date fact-check (exempt) | — | — | Fetched: 2026 runs 11 Oct to Ashtami+Navami on 19 Oct, Vijayadashami 20 Oct. 2027 runs 30 Sep to 8 Oct, Vijayadashami 9 Oct |

**Tried and dropped:**
- "Noise Pollution during Navratri Festival in Anand, Gujarat" (JESE/NEERI): neerijese.org does not resolve.
- Ganeshotsav noise paper (Noise Mapping 2021): wrong festival.
- Meetup/RSVP prediction books (Springer): paywalled and off-subject.
- Health no-show texting studies: off-subject.

**RSVP/headcount maths:** no sourced garba or community-event no-show rate exists (queries: "no-show rate free event registration attendance", "RSVP attendance prediction social events", "event invitation message wording attendance experiment"). Per the task's condition, no maths section was written, and the body says so.

## Brief and prompt claims checked

- Calendar (BRIEF §1): 2026 and 2027 dates are confirmed on Drik Panchang (New Delhi). Sharad Purnima 2026 was not fetched (the URL returned 404) and is not printed.
- Prompt: "Diaspora examples may draw on real public event listings": done. Five listings were read, none copied, and none of the ticketing pages is linked.
- The WebSearch AI summary misattributed details to the Nova Scotia listing. This is recorded so no sibling reuses it.

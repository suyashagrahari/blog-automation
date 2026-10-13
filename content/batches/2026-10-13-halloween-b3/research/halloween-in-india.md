# Research brief — halloween in india (row 101)

Slug `halloween-in-india` · absorbs "is halloween celebrated in india", "halloween in india 2026", "is it halloween in india" · theme global · plan weak 6/10 · category `festive-beats`.

## Phase 0 — first-party data

facts.md (read by hand; `npm run facts` NOT run, per BRIEF §3) holds **no Halloween and no India-segmented usage data**. The task prompt's suggestion that "facts.md India data may genuinely apply" is only partly true: nothing is segmented by country. Used, with disclosures in the body:

- Occasion-dated pages are 3.7% of 3,894 pages (festival + wedding; measured 2026-09-09).
- Raksha Bandhan 2026 lead time, n = 89, 49.4% built on the day (labelled a different festival, small n).
- 48.3% of shared-page views on a phone (platform-wide, labelled as such).

## Phase 1 — SERP (WebSearch, US index; 1 of 2 searches)

Query `halloween in india`. Results:

| # | Page | Words | Date of data | Direct answer | Format | Notes |
|---|---|---|---|---|---|---|
| 1–2 | twinkl.com / twinkl.com.ph "halloween in india 2026" | n/a (fetch returned empty shell) | event stub | snippet only | event card | judged from snippet; thin |
| 3 | static.intrafocus.com/?p=60655 | — | — | — | — | hijacked-subdomain spam, weak, not analysed |
| 4 | netbox.point-broadband.com/?p=25349 | — | — | — | — | hijacked-subdomain spam, weak |
| 5 | indianlink.com.au (IANS syndication) | 793 | 31 Oct 2014 | para 2 | prose, no H2s, no FAQ | Delhi venue list from 2014; Bengaluru quote that parties were once discouraged |
| 6 | netbox.point-broadband.com/?p=52534 | — | — | — | — | spam, weak |
| 7 | filmibeat.com 2023 | ~1,027 | 31 Oct 2023 | after history section | 4 H2s, bullet traditions | generic "Western culture via films, TV, social media"; claims trick-or-treating door to door, unsourced |
| 8 | thenewsminute.com (same IANS piece) | 782 | 30 Oct 2014 | para 2 | prose | duplicate of #5 |
| 9 | wanderingeducators.com | 722 | 5 Nov 2013 | none | first-person blog | US students' haunted house in Bengaluru |

**Weak count: 8 of 9** (3 spam, 2 duplicate 2014 IANS wires, 2013 expat blog, Twinkl stub, 2023 listicle). Gate 4 clear.

## Phase 2 — gap analysis

- **Table stakes:** Halloween is niche/urban in India; parties in Delhi, Mumbai, Bengaluru; Western/Celtic origin.
- **Gap:** no page checks a holiday list; none gives Diwali-relative dates (and none notices **Bhai Dooj = 31 Oct 2027**); none dates Pitru Paksha or sources Bhoot Chaturdashi; none cites research; newest venue data is 2014 or undated.
- **Stale data:** every venue list is 2014.
- **Fan-out:** is it a holiday · why it grew · Diwali clash 2026/2027 · Indian equivalents · is it disrespectful · where in which city · safety · how to greet someone.
- **Angle:** wins by being the only post that checks 31 October against the RBI holiday matrix, dates Halloween against Diwali, Pitru Paksha and Bhoot Chaturdashi for 2026–2027, and grounds the "Western import" debate in peer-reviewed South Asian research.

## Phase 3 — sources (all fetched; full text read unless noted)

| Source | What it supports | Date | Subject test |
|---|---|---|---|
| RBI Holiday Matrix, Oct 2026 (rbi.org.in) | 31 Oct bank holiday only in Ahmedabad, "Sardar Vallabhbhai Patel's Birthday"; Mahalaya Amavasye 10 Oct closes Bengaluru + Kolkata | undated, read 2026-10-13 | yes (holiday status) |
| Lukose 2005, Journal of Social History (UPenn repository PDF) | early-1990s liberalisation (tariffs, state industries opened); consumption reconfigures national identity; Kerala youth clothing, movies, pageants; debates on Westernization/tradition/modernity are gendered | 2005 | yes (globalisation of youth consumption in India) |
| Waheed, Ahmad & Bhatti 2025, JITC 15(2) (UMT, CC BY 4.0) | Halloween on Instagram, Lahore, n=16, four groups; Instagram frames it as secular lifestyle trend; youth for entertainment/belonging; scholars warn of Westernization; reframed as cultural not religious | 2025-10-17 | yes; peer-reviewed, OA |
| Pragya et al. 2020, Indian Horticulture (ICAR epubs) | "Chauddo Shaak": 14 leafy vegetables prepared in Bengal on Bhoot Chaturdashi, the night before Kali Puja | May–June 2020 | yes (only the one passage) |
| Harper's Bazaar India, Eden Noronha | 2025 events in Mumbai, Goa, Delhi, Bengaluru with venues and dates | 2025-10-30 | yes |
| Drik Panchang Diwali calendar (2026, 2027; New Delhi and Kolkata) + Shraddha dates 2026 | 2026: Dhanteras 6 Nov, Narak Chaturdashi/Kali Puja/Lakshmi Puja 8 Nov, Bhai Dooj 11 Nov. 2027: Dhanteras 27 Oct, Kali Puja 28 Oct, Lakshmi Puja 29 Oct, Bhai Dooj 31 Oct. Pitru Paksha 26 Sep–10 Oct 2026 | undated | date/festival reference (exempt) |

Searches tried (findpapers / Europe PMC / OpenAlex): "festival globalization India youth", "Western holidays adoption India consumer", "Valentine's Day India globalization culture", "Halloween globalization spread outside United States", "ancestor rituals shraddha pitru paksha", Bhoot Chaturdashi/choddo shak, Halloween + India/Japan/China. Candidates rejected: Taylor & Francis (J Youth Studies EDM), SAGE items, IJ-predatory venues (TIJER, IJSSHR), Research Square preprint on Chinese youth ghost festivals (not peer-reviewed). Also read but not cited: Popelková & Zajonc 2022, Halloween and Valentine's Day in Slovakia (Łódzkie Studia Etnograficzne) — kept in reserve to hold links at 6.

Competitors (never cited): all SERP pages above, including filmibeat and thenewsminute/indianlink. Outlook Traveller's OT Eats 2025 guide was read as a cross-check for Bengaluru/Gurugram/Mumbai venues; not cited, to keep outbound links at 6.

## Brief claims found false or unsupported

- Prompt: "facts.md India data may genuinely apply" — no India-segmented data exists in facts.md.
- Prompt: growth driven by "international schools, malls, OTT/streaming" — no dated Indian source found within the 2-search budget; the post says these are plausible but unmeasured.
- Prompt: "Bhoot Chaturdashi the night before Kali Puja" — confirmed by ICAR; but Drik Panchang lists Narak Chaturdashi and Kali Puja on the SAME date (8 Nov 2026; 28 Oct 2027), so no separate Bhoot Chaturdashi date is printed.
- Prompt: "Diwali 2026 is 8 Nov", "2027 Diwali is 29 Oct" — both confirmed (Lakshmi Puja, New Delhi and Kolkata).

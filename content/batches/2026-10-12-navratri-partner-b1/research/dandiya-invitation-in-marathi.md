# Research brief: dandiya invitation in marathi

- Slug: `dandiya-invitation-in-marathi` · cluster invite-language · bodyLanguage `mr-mixed` (English frame; wordings in Devanagari + romanised + English gloss)
- Also covers: navratri invitation card in marathi, garba invitation in marathi, दांडिया निमंत्रण
- Slug check: Strapi `filters[slug][$eq]` returned 0 results (2026-10-12). Category `indian-festivals` confirmed live.
- WebSearch calls used: **2 of 2** (1 SERP, 1 research). No browser tools.

## Phase 0: first-party data

facts.md read directly (no `npm run facts`). No Navratri or /dandiya-partner usage data exists. Used, verbatim:
- 48.3% phone opens (bears on card layout: date-time-venue in the top half of a portrait card).
- Raksha Bandhan 2026 lead time, 49.4% built on the day (labelled in the body as the nearest festival analogue, not Navratri data; bears on why society cards must go early).
- 38.5% password-protect (table row for the one-to-one page; thin relevance, stated honestly).
Gate: 3 facts, 2 inside the first 150 words. The gate is thin: none of these is about Marathi or invitations, they are about format and timing.

## Phase 1: SERP (US-served (WebSearch), 2026-10-12; India-served positions unavailable)

| # | URL | What it is | Fetch | Direct answer? | Weak? |
|---|---|---|---|---|---|
| 1 | zeffy.com … sankalp-marathi-mandal-garba-2026 | US Marathi mandal garba ticket page | HTTP 403 | No wording at all | Weak |
| 2 | tempotickets.com/event/jIjnWF | Marathi Association of Minnesota "Bhondla and Dandiya 2024" ticket page (event 5 Oct 2024; 350-entry cap; bring your own dandiyas) | Read | No; English event listing | Weak |
| 3 | insider.in dandiya-fever-60 … 2024 | Ticket listing (2024) | JS shell only | No | Weak |
| 4 | next-cms.climatetrace.org/invited-by-meaning-in-marathi | Scraped mirror farm (same page on siemens, sothebysinstitute, ingeniusprep subdomains) | Timeout | WebSearch summary: lists आमंत्रण/निमंत्रण/बोलावणे, machine-garbled | Weak |
| 5 | district.in dandiya-beats-sep26-2025 | Pune ticket listing (Liberty Square, 26 Sep 2025; "English, Hindi, Marathi, Gujarati") | Read | No | Weak |
| 6–9 | myshare-cms.siemens.com, sa.sothebysinstitute.com, api-legacy.ingeniusprep.com (same mirror), wwwstag.nelson-atkins.org "50th Birthday Invitation Message in Marathi" | Scraped mirrors | Timeout / not fetched | No | Weak |
| 10 | amarkosh.tech/मराठी/शब्द/दांडिया | Marathi dictionary: दांडिया = Gujarati stick folk dance | Read | Defines the word only | Weak |

Second result block also showed wisdomlib, pressreader (HT Mumbai 2018), a Mendeley dataset, Deccan Herald. **Weak count in top 10: 10/10.** Gate 4 passes. No eduyush, flick.social or hindutone result for this query. Nothing cited or linked from this table.

Tone/format of incumbents: none has headings, tables, FAQ, a byline or Marathi invitation text. The query is effectively unserved in the US-served SERP.

## Phase 2: gap

- Table stakes: none exist; the closest is the mirror farm's word list (आमंत्रण/निमंत्रण).
- Gap: actual Marathi card wording for the Maharashtra formats (housing-society committee card with pass collection and sponsor line, mandal pass night, Bhondla for girls and for society women, ghatasthapana, Ashtami/Navami), register explained, send-by dates, phone layout.
- Fan-out sub-queries → H2s: what goes on the card; which register (सस्नेह / आग्रहाचे / स्नेहांकित); wordings by event; layout; format/lead time; one-person page; limits. FAQs: how to say it, garba vs dandiya, Bhondla, script choice, send-by, UI language.
- Angle: wins by being the only post that gives Marathi society, Bhondla, ghatasthapana and one-to-one wordings with register checked against Molesworth and a 2024 Marathi address-term study, laid out for a phone using the 48.3% phone-open rate.
- Sibling differentiation: dandiya-invitation-card-in-hindi organises 9 Hindi wordings by event type plus a Devanagari-vs-roman H2; this post leads with a dictionary-checked register section, Maharashtra-specific events (Bhondla ×2, ghatasthapana, Ashtami/Navami shared date), and send-by dates. Three H2s that echoed the Hindi sibling's wording were renamed. Uses नवरात्र (Molesworth headword) in wordings, consistent with navratri-wishes-in-marathi.

## Phase 3: sources (all fetched)

| Source | What it supports | Read |
|---|---|---|
| Molesworth 1857, निमंत्रण p. 467 (+ आमंत्रण p. 72), DSAL | both words = "an invitation" | Full entries |
| Molesworth, आग्रह p. 63 | sense 2 "urgent invitation or earnest pressing" → आग्रहाचे निमंत्रण | Full entry |
| Molesworth, स्नेह / स्नेहांकित p. 876 | स्नेह = affection ("the popular sense"); स्नेहांकित = epistolary sign-off before writer's name. **सस्नेह: no headword** (searched) | Full entries |
| Molesworth, भोंडला p. 622 | figures drawn on walls by little girls in Ashwin + singing before them | Full entry |
| Metkari, Kudale & Vishwanathan (2024), Rupkatha Journal 16(2), rupkatha.com PDF; first published 18 Jun 2024; DOAJ/ESCI; peer-reviewed, OA | honorific level of māuli "contingent upon the accompanying verb", T/V analogy; 72/83 (86.74%) bidirectional; 69/147 responses (46.94%) politeness/respect | Full text (pdftotext) |
| Maharashtra Dept of Tourism, "Bhondla" (no date) | Ganesh Chaturthi + Navratri; women and girls; evening; circle dance holding hands. Etymology claim ignored (unsupported) | Full page |
| Drik Panchang 2026, New Delhi (date check, not cited) | Ghatasthapana Sun 11 Oct; Ashtami + Navami Mon 19 Oct; day 10 Tue 20 Oct | Read |

Subject test: Molesworth ×4, Rupkatha, MH Tourism pass. Swap test: Rupkatha could arguably serve the Marathi-wishes sibling; used here only for the verb-register point specific to invitations. Generic statistics: 0. Wikipedia body links: 0. capcheck: rupkatha.com, maharashtratourism.gov.in unused by siblings; dsal is cap-exempt; each DSAL URL is distinct from the sibling's नवरात्र query.

Searches tried that found nothing usable (findpapers / OpenAlex / Semantic Scholar): "Bhondla Hadga Maharashtra women folk songs", "Marathi women ritual songs Navaratri goddess", "housing society Mumbai festival celebration community", "gated community apartment India middle class neighbourhood festival", "Marathi honorific politeness address forms", "festival noise pollution Mumbai Navratri loudspeaker", "noise monitoring festival Mumbai Pune", "invitation reciprocity social obligation", "WhatsApp housing society residents India". Toraskar (2001) HKU thesis on Marathi wedding-ritual speech: handle dead, not read. Asian Ethnology candidate: 404.

## Structural limitations and prompt claims checked

- **Prompt framing "आपणांस सस्नेह निमंत्रण, verify usage":** सस्नेह has no Molesworth headword, so its usage could not be dated from the one Marathi dictionary available; the body says so and treats it as later card register. आग्रहाचे निमंत्रण is supported (आग्रह = "urgent invitation").
- **Maharashtra noise/end-time rules:** no Maharashtra-specific source found within budget; omitted on purpose, and the body tells readers not to print an unconfirmed end time. Did not reuse the sibling's CPCB citation.
- **Society dandiya as "the dominant Mumbai/Pune format":** not verified by any source; the body does not claim dominance, only describes the format.
- Hadga/Bhondla as regional names for the same event: not sourced; body uses भोंडला and avoids regional claims. Khirapat appears in wordings only, not as a cited fact.
- India-served SERP not measured; 4 of 10 US results could not be fetched (403 / timeout).

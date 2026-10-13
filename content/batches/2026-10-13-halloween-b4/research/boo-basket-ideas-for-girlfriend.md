# Research brief — boo basket ideas for girlfriend (row 157)

Batch `2026-10-13-halloween-b4` · slug `boo-basket-ideas-for-girlfriend` · theme couple · absorbs "boo basket for girlfriend", "boo basket for her" · category `festive-beats`

## Phase 0 — first-party data
No Halloween or boo-basket data exists in facts.md (BRIEF §3). I did not run `npm run facts`. Facts used, byte-verbatim:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24 (first 150 words)
- Average views per created page: 11.1 — measured 2026-09-24 (first 150 words)
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24
- Median miss-you letter length: 88 words; the longest is 1,024 words, n=214 — measured 2026-09-25 (labelled as "I miss you" pages)
- 28.0% of miss-you senders set a reunion date for the countdown (60 of 214) — measured 2026-09-25

Template features come from `template-spec.md` (/happy-halloween in partner mode) and the TEMPLATE_LINKS descriptions for /date-invitation and /missyou-gf.

## Phase 1 — SERP (WebSearch, US index, 1 search, 2026-10-13)

| # | URL | Type | Notes |
|---|---|---|---|
| 1 | pearltrees.com/halloweenmysterybox/… | aggregator | weak; not analysed |
| 2 | theknot.com/content/boo-basket-for-wife | editorial (wife) | HTTP 403; judged from the title only. Off-intent (wife) |
| 3 | elitedaily.com/…bachelorette-inspired-boo-basket… | editorial, bestie | 2020, updated Feb 2024. Five themed baskets with affiliate products. No costs totalled, no assembly time, no girlfriend angle |
| 4 | cvs.com/learn/…/boo-basket-ideas | retailer guide | Published 3 Aug 2026, ~7 min read. H2s: what is it, what to put in, ways to make (5 steps), 6 adult and 6 kid ideas, takeaways, FAQs. Girlfriend FAQ = beauty stuffers (body spray, lashes, hair masks, lipstick, nail kits). Stuffers "under $5" |
| 5 | homeandtexture.com/?p=34166 | hijacked/spam | weak; not analysed |
| 6 | gathered.how/arts-crafts/diy-boo-basket | UK craft magazine | 8 Sep 2025. Definition, DIY containers, 9 ideas including "3 for girlfriends" (Halloween jewellery, skincare). No costs or times |
| 7 | elitedaily.com/…boo-basket-ideas-for-your-partner… | editorial, partner | 2020, updated Feb 2024. Date-night basket ($85 Etsy spa kit + wine glasses), etc. Product-led, affiliate |
| 8 | gathered.how/arts-crafts/boo-basket | duplicate of 6 | weak |
| 9 | auth.sts.org/?p=9470 | hijacked subdomain spam | weak; not analysed |

Weak in top 9–10: at least 4 (pearltrees, homeandtexture, auth.sts.org, the gathered duplicate), and the remaining "strong" pages are off-intent (wife, bestie, generic). Gate 4 passes. Competitors were neither cited nor linked.

## Phase 2 — gap
- **Table stakes:** a definition, a stuffer list, a girlfriend-specific angle (beauty, cosy, treats), a personal touch (photo, note).
- **Gap:** no page builds *complete* girlfriend baskets by **relationship stage or occasion** (first Halloween, long distance, hard month, student budget). None totals a cost per build or gives assembly time. None addresses over-gifting early in a relationship, handwriting versus printed notes, or a late parcel.
- **Stale data:** Elite Daily's product prices date from 2020.
- **Fan-out sub-queries:** what to put in; how much to spend early on; long-distance delivery; student budget; not into scary things; handwritten note; assembly time; container; whether a digital note can replace it.
- **Angle:** wins by being the only post that builds complete girlfriend boo baskets by relationship stage and occasion, each with an estimated total cost and assembly time, and backs "don't over-gift early" with research on indebtedness and relationship stage, using 48.3% phone views and 11.1 views per page to justify the QR-code note.

## Phase 3 — sources (findpapers.mjs + OpenAlex + Europe PMC; no extra web searches)
Queries tried: "gift giving romantic relationship stage dating", "gift reciprocity obligation discomfort recipient", "gift giving dating couples relationship development", "handwritten note perceived warmth personal", "gift price recipient appreciation givers overestimate", "indebtedness gratitude gift recipient", "gift giving romantic partners", "expensive gift relationship commitment signal", "costly signaling romantic gift", plus OpenAlex OA searches and Europe PMC title searches.

**Used:**
1. Oishi, Lee, Koo & Cha (2025), *Applied Psychology: Health and Well-Being*, Wiley, open access, CC BY-NC-ND. Read in full via Europe PMC XML. Three studies (N = 120, 327, 561): indebtedness was the only emotion that uniquely predicted a thank-you gift. The review cites Peng et al. (2018): indebtedness leads to an obligation to reciprocate, gratitude leads to proximity seeking. **Caveat stated in the body:** the participants were students and teachers, not couples.
2. Lai & Huang (2013), *HortTechnology* 23(1), ASHS. **Abstract only**: the ASHS site is a JavaScript shell, so I read the abstract via OpenAlex. n = 366; relationship stage, passion and satisfaction influenced Valentine's flower buying, and more satisfied partners were less likely to buy flowers.
3. Haltman, Herziger, Donnelly & Reczek (2024), *Journal of Consumer Psychology*, Wiley, CC BY. **Abstract only**: Wiley returned HTTP 403, so I read the abstract via Crossref and OpenAlex. Givers overestimate the relationship harm of a late occasion gift, and the overestimation shrinks when care is signalled another way, such as effort.
4. Adena, Huck & Neyse (2025), *Experimental Economics* 28(4), Cambridge University Press, CC BY. Read the full PDF. Study 2: 1,132 past donors; 19.3% responded to handwritten cards and 18.7% to printed ones, a difference that was not significant. The authors suggest the cards were not perceived as personal because an institution sent them.

**Rejected:** the GRAS paper (Heliyon/Elsevier, already used in b1), Nguyen & Munch 2011 (Elsevier), the relational-mobility commitment-signal paper (Evolution and Human Behavior, Elsevier), "More expensive, more attractive?" (Frontiers, banned), the RAMSS 2025 "recipient's anxiety" paper (venue not credible), and Yang & Urminsky's smile-seeking givers paper (published in Psychological Science, which is SAGE and banned). Also excluded as b1/b2 gift papers: Puente-Díaz, Gino & Flynn, Chan & Mogilner, Pollmann & van Beest, Stenlund, and Van Boven & Gilovich.

Capcheck run 2026-10-13: no banned URLs, no domains at cap, and none of my domains at 2.

## Sibling clash log
- b1 `boo-basket-ideas` girlfriend lines (ghost candle + face mask, mini pumpkin + paints, cosy throw + date-at-home ticket): avoided.
- b2 `halloween-gift-ideas-for-girlfriend` (grimoire notebook, Frankenstein/Dracula, tea sampler, ghost walk): avoided.
- b4 `boo-basket-for-wife` (landed mid-draft): swapped shower steamer → foot soak, popcorn kernels + film tickets → kettle corn + scare-meter scorecard, takeaway credit → trimmed flowers, wrapped sweets + "open on 31 October" envelope → boiled-sweet tin + QR sticker, and the saved-list paperback → a secondhand gothic hardback.
- b4 `boo-basket-ideas-for-boyfriend` and `boo-basket-for-best-friend` were not on disk at finalisation, so no check against them was possible.

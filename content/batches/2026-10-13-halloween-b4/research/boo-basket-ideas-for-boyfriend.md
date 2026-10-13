# Research brief: boo basket ideas for boyfriend

Row 156 · slug `boo-basket-ideas-for-boyfriend` · theme couple · absorbs "boo basket for boyfriend", "halloween basket for boyfriend" · written 2026-10-13

## Phase 0: first-party data

- No Halloween usage data in `content/facts.md` (BRIEF §3). `npm run facts` was not run.
- Used, verbatim: Average views per created page: 11.1; 48.3% of shared pages opened on a phone (both measured 2026-09-24, both in the first 150 words); the Raksha Bandhan 86.1%-within-24-hours line (measured 2026-09-09), disclosed in the body as a different festival with a small sample.
- Not used: the 38.5% password rate, because the /happy-halloween template spec lists no password feature, so citing it would imply a feature that doesn't exist.
- The template spec (`template-spec.md`) is the only source for product features. The body describes only partner mode, up to six photos, the pumpkin word, the AI draft, the haunted-house sequence, the email on first answer and, for premium, the voice note (60 s), 12 photos and the unlock time with a countdown.

## Phase 1: SERP

Method: WebSearch (US index), 1 search of the 2 allowed. Pages were fetched with `ctx_fetch_and_index` and a sandbox fetch. All 5 returned HTTP 200.

| # | URL | Words (approx.) | Structure | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | elitedaily.com, boo basket ideas for your partner (2020, updated Feb 2024) | ~780 | 4 H2 themed baskets: Date Night, Breakfast in Bed, Outdoor Lovers, Couple's Halloween | None; intro about Parks & Rec, then product links | Product prices from 2020 retailer links | Affiliate product cards, no table or FAQ | Affiliate clicks; partner (gender-neutral) |
| 2 | fridaywereinlove.com/spooky-basket-for-him | ~2,070 incl. chrome | What is a spooky basket, What to put in, H3 product categories (wear, date night, treats, other), how and when to give | Buried; "no right or wrong answer" | None dated; suggests giving 1 October | Affiliate list, Pinterest images, no table or FAQ | Pinterest and affiliate traffic; boyfriend or husband |
| 3 | fridaywereinlove.com/?p=82850 | Same page as #2 (duplicate URL) | Same | Same | Same | Same | Same |
| 4 | elitedaily.com, 7 boo basket ideas for couples (2020/2024) | ~1,040 | 7 themed baskets for gifting a couple | None | 2020 product prices | Affiliate cards | Basket for friends who are a couple; off-target |
| 5 | benable.com/sarahh_ar88/spooky-boo-basket-ideas | ~570 | User list: kids / husband or boyfriend / BFF sections | None | None | Product list | UGC affiliate list |

Also returned: elitedaily.com Bachelorette-themed BFF baskets (off-target), plus msoid.icmbio.gov.br and lbas.lboro.ac.uk "Boo Basket Template" pages (hijacked-subdomain spam, counted as weak and not analysed).

**Weak count in top 10:** 9 results came back. 6 are clearly weak: 2 spam, 2 URLs for the same small-blog post, 1 UGC list, plus the off-target bachelorette roundup. The 3 Elite Daily pages are 2020 roundups and not boyfriend-specific. This matches the plan's weak 9/10.

## Phase 2: gap analysis

- **Table stakes:** what a boo/spooky basket is, a container (pail or basket), candy or snacks, something cosy (socks, blanket), a date-night or activity element, and when to give it.
- **Gap:** none of the five organises baskets by the boyfriend's type. None gives a total cost or assembly time per basket, has a comparison table or FAQ, or cites anything. None covers mailing a basket to a long-distance boyfriend: what USPS will not carry, the fees, and when to post. None names a case where a basket is the wrong gift.
- **Stale data:** Elite Daily prices are from 2020 retailer listings (pages "updated Feb 2024").
- **Fan-out sub-queries** (mapped to H2s or FAQs): what goes in a boyfriend's boo basket; ideas by his interest (gamer, gym, horror, foodie, outdoors, homebody); how much to spend; how long it takes; how to make it personal or what to write; can you mail one; can you mail alcohol; when to post it for Halloween; non-candy options; is it childish.
- **Angle:** this post wins by being the only one that builds a complete boyfriend boo basket for each of eight types, with an estimated total and assembly time, and the only one covering what USPS will not carry and the fees that hit a mailed basket. SubhSandesh's 11.1 views per page and 48.3% phone-open share explain why the note should be a link.

## Phase 3: sources (all fetched)

| Source | Subject test | What it supports | Read |
|---|---|---|---|
| Walcher, Leube & Blazek 2016, IJIEM 7(4):153-158, [PDF](https://ijiemjournal.uns.ac.rs/images/journal/volume7/03-Walcher-IJIEM_2016_December-special-issue.pdf) | Yes: gender and gift personalisation | n=247; women customised products for gifts more than men in all categories; its literature review cites Belk & Coon (1993): men judge gifts by utilitarian value | Full text (pdftotext) |
| Hall 2017, Personal Relationships 24(2):306-322, [KU ScholarWorks record](https://kuscholarworks.ku.edu/handle/1808/21559) | Yes: couple humour (the inside joke) | 43 samples, 15,177 participants; relational humour has a large association with satisfaction, self-reported humour a small one; 4 of 5 negative types are negative | Abstract only (Crossref-deposited abstract). Wiley returned 403; KU holds the record plus Table 2 |
| USPS [Shipping Restrictions & HAZMAT](https://www.usps.com/ship/shipping-restrictions.htm) | Partly: about mailing a basket | Alcohol not mailable except in limited cases; strike-anywhere matches nonmailable; safety matches and alcohol perfume go by ground only; perishables at the mailer's risk | Full page, undated, read 2026-10-13 |
| USPS [Mail & Shipping Services](https://www.usps.com/ship/mail-shipping-services.htm) | Partly: about mailing a basket | Ground Advantage 2–5 days from $8.40; Priority 2–3 days from $11.50; wooden/metal box or more than 24 oz liquid in glass adds $4.50; perishable fee $7.50 / $15 | Full page, undated, fees as listed 2026-10-13 |

Search terms tried (findpapers, Europe PMC, OpenAlex): "personalized gift recipient appreciation", "gender differences gift giving men recipients", "gift customization effort perceived thoughtfulness", "romantic partner gift giving men preferences", title searches for gift + personal/sentimental/gender/romantic, "personal idioms relationship", "shared humor couples", "humor romantic relationship satisfaction", "unboxing experience", "anticipation gift surprise".

Rejected:
- Ward & Broniarczyk 2016 (JMR) and Yang & Urminsky (Psych Science): SAGE, banned.
- Evol Psychol humour papers: SAGE.
- Barelds & Barelds-Dijkstra 2010: rug.nl returned 403/503 and DeGruyter returned 202 (bot wall, not worked around).
- PMC4991047 and PMC9247916: already used in b1–b3.
- USDA FSIS mail-order food safety page: returned 403.

Excluded on the prompt's list: Gino & Flynn, Chan & Mogilner, PMC13603195, Pollmann & van Beest, Stenlund, PMC11787505.

Competitors (never cited): elitedaily.com, fridaywereinlove.com, benable.com.

## Collision checks

- The 5-word overlap check against all b1–b4 bodies passed for the ideas and card lines. The remaining overlaps are fixed template-spec phrasing ("Will you be my boo", "up to six photos") shared by every post, and the Raksha Bandhan disclosure.
- Ideas changed after the b4 siblings landed:
  - Wife post uses a hand-drawn map and a sealed "Open on 31 October" letter. Mine became a GPS trace and a first-messages printout.
  - Best-friend post has a "bad-day bingo" card. Mine became horror-poster coasters.
  - Girlfriend post uses a tote container. Mine became his last delivery box turned inside out.
- Hub filler ideas avoided: skull hot-sauce bottle, sour sweets, horror DVD and popcorn, fuzzy socks, mug and cocoa, ghost candle, photo strip.

## Brief claims checked

- "usps.com was used in b3 once; it's fresh in b4": true for www.usps.com at write time. But the sibling `boo-basket-for-wife` already cites pe.usps.com Publication 52, so USPS as a publisher appears in 2 b4 posts (different hosts, within the cap).
- `batch.json` does not yet list this slug, so the verifier flags "blogs != files on disk". It is left for the orchestrator (BRIEF §7 forbids editing batch.json).

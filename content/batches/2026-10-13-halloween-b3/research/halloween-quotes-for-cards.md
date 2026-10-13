# Research brief — halloween quotes for cards (row 137)

- Keyword: `halloween quotes for cards` · absorbs `halloween card quotes` · slug `halloween-quotes-for-cards` (free in Strapi, checked 2026-10-13)
- Batch: 2026-10-13-halloween-b3 · category `festive-beats` · templates /happy-halloween (mandatory), /happy-halloween-premium
- Searches used: 1 WebSearch (US index). No Firecrawl. No browser tools.

## Phase 0 — first-party data
No Halloween usage data exists in facts.md. Used, labelled as analogue / platform-wide:
- Raksha Bandhan 2026 lead time: 49.4% built on the festival day itself (nearest analogue for "people decide late", which is the reason a 1-week posting window matters).
- Not one of the 89 Raksha Bandhan 2026 pages was built more than 7 days ahead.
- 48.3% of shared pages are opened on a phone (platform-wide).
Template spec (/happy-halloween, /happy-halloween-premium) used for feature claims only.

## Phase 1 — SERP (WebSearch, US index, 2026-10-13)

| # | URL | Type | Notes |
|---|---|---|---|
| 1 | adobe.com/uk/express/discover/quotes/halloween | Card builder (competitor) | 403 — snippet only (Hardy "Fear is the mother of foresight") |
| 2 | hallmark.ca/…/what-to-write-in-a-halloween-card | Card brand (competitor) | Fetched. Joey Benevento, 2021 (US version 2024). Sections by tone/recipient (jokes and puns, heartfelt, friends, kids, family, religious, fun closings), 60+ messages, doodle/envelope-decorating tip. No sizes, word limits, postage or timing. |
| 3 | msoid.icmbio.gov.br/… | Hijacked-subdomain spam | Weak, not analysed |
| 4 | swifdoo.com/templates/amp/halloween-sayings-greetings | PDF-tool content (weak) | Fetched (non-AMP). "55 sayings", by audience; ends with a product step-by-step to print a card in SwifDoo PDF. Updated 2024-10-31. |
| 5 | static.intrafocus.com/?p=55006 | Spam | Weak |
| 6 | thequint.com/lifestyle/halloween-wishes-quotes-greetings-cards | News, 2019 | Fetched. ~4 quotes, stale "Halloween 2019" framing. Weak. |
| 7 | swifdoo.com/templates/halloween-sayings-greetings | Duplicate of #4 | Weak |
| 8 | bouqs.com/blog/?p=15824 | Florist blog | 403 — snippet only (Macbeth, Bradbury) |
| 9 | static.intrafocus.com/?p=45140 | Spam | Weak |
| 10 | netbox.point-broadband.com/?p=11707 | Spam | Weak |

Weak count in top 10: 7 (4 spam, 2 swifdoo, thequint 2019). Gate 4 passes. Contested: hallmark and adobe are card brands/builders (competitors — never cited or linked).

## Phase 2 — gap
- Table stakes: lists of short Halloween card lines, funny/spooky/kids splits, a few classic quotes.
- Gap: nobody sorts lines by the physical PART of the card (cover, inside-left, sign-off, envelope, postcard back, lettering, class swap), gives word limits, card sizes, USPS size/aspect-ratio rules, posting deadlines, or handwriting legibility. Hallmark's only practical tip is decorating the envelope.
- Stale: thequint 2019; swifdoo 2024.
- Fan-out sub-queries → H2/FAQ: what to write in a Halloween card; how long; cover line; envelope sayings; card sizes; square card postage; when to mail; postcard cost; kids' class cards; Shakespeare quotes; handwritten vs text; too late to post.
- Angle: wins by being the only post that sizes every Halloween card quote to a physical card part with word limits, USPS size/posting rules and a same-day fallback grounded in the Raksha Bandhan lead-time line.

## Phase 3 — sources (all fetched and verified)
1. Scott et al. 2023, BMC Public Health, #KindnessByPost realist interview study — https://europepmc.org/article/PMC/PMC10694983 — full text (CC BY). 20 one-to-one interviews + focus group; cards kept/displayed/revisited for mood; "a low effort card, such as a shop bought one without a handwritten message, could be disappointing". Used only in 2026-09-15 batch before; not in halloween b1/b2/b3.
2. Anwar, Macnaughton & Latham 2026, Ophthalmic & Physiological Optics (Springer DOI 10.1007/s44402-026-00108-1) — https://europepmc.org/article/PMC/PMC13395829 — full text (CC BY 4.0). 10 participants aged 67–93; handwriting retained for meaningful communication like birthday cards; worry messy card looks low-effort; bold-lined paper as a low-tech aid.
3. USPS DMM 101 — https://pe.usps.com/text/dmm300/101.htm — postcard 3½–4¼ × 5–6 in; letter max 11½ × 6⅛ in; nonmachinable if aspect ratio < 1.3 or > 2.5. Undated.
4. USPS Mail & Shipping Services — https://www.usps.com/ship/mail-shipping-services.htm — First-Class Mail 1–5 days; from $0.65 postcards, $0.82 letters (checked 2026-10-13). Undated.
5. Gutenberg #1514 A Midsummer Night's Dream — Puck lines copied verbatim from pg1514.txt.
6. Gutenberg #1365 Longfellow Complete Poetical Works — "Haunted Houses" opening copied verbatim.

findpapers queries tried: "handwritten letter recipient appreciation", "handwritten note warmth perception", "greeting card sending social connection", "letter writing recipient surprise underestimate", "handwritten", "handwritten versus typed message", "postcard sending wellbeing", "handwriting legibility adults". Avoided all b1/b2/b3 gratitude/kindness papers (Kumar & Epley, Aknin, Sandstrom etc.).

Public-domain check: Shakespeare MND and Longfellow appear in no b1/b2/b3 Halloween post (grep for "graves all gaping", "lets forth his sprite", "Haunted Houses" poem, "Midsummer", "Longfellow"). Rossetti and Dickinson deliberately avoided (used in romantic/love quote posts).

Overlap: 5-word-gram check of every offered line against 761 batch blog files + 905 live Strapi articles — 0 hits after fixes (3 early drafts lines rewritten: "thirty-one days of October", "from the house with the", "glow brighter than a jack-o'-lantern").

Not verified / limitations: Royal Mail letter-size page 403 (UK times not stated — "allow a week"); A2/A7 sizes stated as trade sizes, word limits labelled estimates; Longfellow 1858 dating rests on the Birds of Passage / Miles Standish 1858 volume (Wikipedia), not the Gutenberg file.

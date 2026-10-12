# Research brief: dandiya invitation card in hindi

- Slug: `dandiya-invitation-card-in-hindi` · cluster invite-language · bodyLanguage `hi-mixed`
- Also covers: dandiya invitation message in hindi (7 prefixes), dandiya invitation in hindi (19)
- Demand: `prefix_hits_max` 20 in `content/keywords/2026-10-12-navratri-garba-dandiya/autocomplete.csv`, row 11 of 7,176 suggestions and the top invitation row. Checked: the prompt's claim holds. PLAN.json's `demandRank` of 20 is that same prefix count, not a rank.

## How this page splits from its siblings

| Sibling | Its job | This page does not |
|---|---|---|
| navratri-invitation-message-in-hindi | General Navratri, garba, puja and kanya-pujan invites in Hindi | Write puja or general Navratri invites. This page is only about the dandiya night card |
| dandiya-invitation-in-marathi / garba-invitation-card-in-gujarati | The same job in Marathi and Gujarati | Write any Marathi or Gujarati. It only says a Gujarati society should use Gujarati |
| dandiya-invitation-card-online-free | Free card-maker tools | Compare card tools |
| dandiya-night-invitation-message | English WhatsApp messages | Write English wordings. English appears only as a gloss |

Scope of this page: Hindi card wording for a dandiya night in three groups. Society or club (1–3), home (4–6) and one-to-one partner asks (7–9). It also gives the six-field card layout (शीर्षक, आयोजक, तिथि, समय, स्थान, ड्रेस कोड, RSVP). /dandiya-partner is offered only for 7–9, and the page says plainly that it is the wrong tool for a group.

## Phase 0: first-party data

facts.md was read by hand. `npm run facts` was not run. No Navratri or dandiya-partner usage data exists. These facts are used, copied verbatim into `factsUsed`:

- 48.3% of shared pages opened on a phone (in the first 150 words, and in the nuance section)
- Raksha Bandhan 2026 lead time, n=89, 49.4% built on the festival day (in the first 150 words). The body labels it as the nearest measured festival, not Navratri data
- 38.5% of creators password-protect (in the /dandiya-partner section, next to the optional password)

The template-spec product facts are used as first-hand product material: nine lines, six photos, the 1080×1920 pass, five tries before No turns into Yes, and the email on yes.

## Phase 1: SERP (1 WebSearch, US-served (WebSearch))

Query: `dandiya invitation card in hindi`. 9 results came back.

| # (US-served) | URL | Type | Weak? | Hindi wording? | Notes |
|---|---|---|---|---|---|
| 1 | etsy.com/listing/1801641419 | marketplace listing, "unavailable" | weak (dead listing) | no | ~$2 template |
| 2 | freepik.com/free-photos-vectors/dandiya-invitation-card | stock images | weak (off-intent) | no | fetch returned empty |
| 3 | freepik.com/vectors/dandiya-night-invitation | stock vectors | weak (off-intent) | no | |
| 4 | shutterstock.com/search/dandiya-invites | stock | weak (off-intent) | no | |
| 5 | craftyartapp.com/templates/invitation/navratri/2 | card maker (competitor) | weak (page-2 listing, off-intent for wording) | 3 generic Navratri **puja** lines in Hindi, none about dandiya | H1 "Navratri Invitation Card Maker Online for Dandiya Night", title stamped 2026, FAQ block, generic advice to "add host, date, time, venue" |
| 6 | desievite.com/invitation/?tags=navratri-dandiya-garaba-invitation | card maker (competitor) | partial | language filter includes Hindi, but no wording on the page | Rs 100 premium templates, AI cards |
| 7 | happyinvites.co/…/garba-dandiya-navratri-invitation-card | e-card product (competitor) | partial | no | Rs 84 DIY e-card |
| 8 | pinterest.com/ideas/garba-invitation | pin board | weak | no | |
| 9 | happyinvites.co/…/dandiya-invitation-card | e-card product (competitor) | partial | no | Rs 84, "Designed by happyinvites.co" line stays on the card |

Weak count: 6 of 9 (Etsy, Freepik ×2, Shutterstock, Pinterest, plus Craftyart's page-2 listing, which is off-intent for wording). None of the 9 gives dandiya-specific Hindi wording. Gate 4 passes.

No AI Overview or featured snippet was visible in the WebSearch result. `serps.md` has no row for this keyword. The nearest rows are "dandiya night invitation wording society" (7/10 weak) and "dandiya night invitation card template whatsapp" (4/10 weak, tools). Both corroborate a tool-dominated, wording-poor SERP.

Top-5 read via ctx_fetch_and_index (Freepik returned empty):

| Page | Words (approx.) | Where the answer is | Data cited | Format | Optimising for |
|---|---|---|---|---|---|
| Craftyart | ~5k incl. template grid | tool pitch first, wording sections far down | none | H2/H3, FAQ, template grid | "navratri invitation card maker" |
| DesiEvite | ~1k | tool pitch | prices only | template grid, filters | "free online … ecard maker" |
| Happy Invites ×2 | ~600 | product price first | Rs 84 | product page | product purchase |

## Phase 2: gap

- Table stakes: date, time, venue on the card; WhatsApp sharing; a festive heading.
- Gap: no page gives Hindi dandiya wording at all, and none splits by event type, gives a romanised version or a gloss, or covers the one-to-one partner ask. None prints an end time or mentions the loudspeaker rule.
- Stale data: none cited by anyone.
- Fan-out sub-queries, each mapped to an H2 or FAQ: what goes on the card (H2); Devanagari or Roman (H2); society, home and partner wordings (H2 + 9 H3s); which format (table H2); partner page fit (H2); when Hindi is wrong, plus dates (H2); end time (FAQ); lead time (FAQ); "be my dandiya partner" in Hindi (FAQ); Hinglish (FAQ); 2027 dates (FAQ).
- Angle: *Wins by being the only post that gives Hindi dandiya card wording split by event type with a fill-in card layout in Devanagari + Roman + English, the Noise Rules 10 pm end-time line, and SubhSandesh's 48.3% phone-open and Raksha Bandhan lead-time data.*

## Phase 3: sources (findpapers.mjs only, 0 extra WebSearch)

Queries tried: "romanized Hindi Devanagari script choice social media"; "Hindi English code-mixing WhatsApp messages"; "dandiya raas Navratri Gujarat dance"; "invitation acceptance personal request compliance face-to-face email"; "garba folk dance Gujarat"; "transliteration Hindi Roman script users preference typing".

| Source | Subject test | Read | Used for |
|---|---|---|---|
| Bali, Sharma, Choudhury, Vyas (2014), ACL W14-3914, https://aclanthology.org/W14-3914.pdf | passes (Hindi script and code-mixing in social text) | **full PDF** | 6,983-post corpus; Roman script largest share; 17.2% of posts code-mixed. Table 2 not reproduced |
| Nielsen, Kirov, Roark (2023), ACL CAWL, https://aclanthology.org/2023.cawl-1.5/ | passes (romanised Hindi) | **abstract only** | "widely informally romanized" |
| Noise Pollution (Regulation and Control) Rules, 2000, CPCB PDF | passes for a dandiya-night card (festival-night loudspeaker timing); **fails the swap test** within this all-dandiya batch | full PDF, Rule 5(1)–(3) | 10 pm–6 am night ban outside closed premises; State may allow 10 pm–midnight on festive occasions, ≤15 days a year, days named in advance |
| Wikipedia: Dandiya Raas (Q3629880) | entity only | n/a | disambiguation |

Rejected: "The Performing Body of Navratri: Dancing Dandiya" (Springer 2019 chapter), where the fetch returned nothing and it is likely paywalled. Also "Noise Pollution during Navratri Festival in Anand" (NEERI JESE 2018), where the PDF fetch failed, so it was not cited. Also the "Embodied Traditions: Garba and Raas in the UK" chapter (paywalled), and the COVID festivities media scan (swap-test filler).

capcheck: no banned URL; no domain at cap. aclanthology.org is used by this post only so far.

## Dates

Navratri 11–19 Oct 2026, Dussehra 20 Oct 2026; Navratri 30 Sep–8 Oct 2027, Dussehra 9 Oct 2027. All are from BRIEF §1. A re-check on drikpanchang.com failed: every URL pattern tried returned HTTP 404 to a non-browser fetch, so drikpanchang is not cited. Sample card date: Sat 17 Oct 2026, which is day 7 (11 Oct is a Sunday).

## Links

Internal links: https://subhsandesh.in/dandiya-partner (after the wordings; one-to-one only; the English UI is stated in prose; group invites are called the wrong tool) and https://subhsandesh.in/date-invitation (oneOfLinks; for a plan bigger than the dandiya night). No competitor links.

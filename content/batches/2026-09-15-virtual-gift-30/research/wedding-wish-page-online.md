# Research brief — `wedding-wish-page-online`

**Batch:** `2026-09-15-virtual-gift-30`, wave 2
**Keyword:** `wedding wish page online`
**Secondaries:** `online wedding wish page`, `wedding congratulations page online`
**Category:** `big-fat-weddings` (a wedding is not a festival; `indian-festivals` is banned for this batch by BRIEF.md §5)
**Templates assigned:** `/wedding-shaadi`, `/shaadi-card`, `/reception` — all three used, none swapped

---

## Phase 0 — Data gate

`content/facts.md`, regenerated 2026-09-15. Gate passes: six relevant lines, two inside the
first 150 words.

- `Occasion-dated pages, every festival plus every wedding type, are 144 of 3,894 pages, 3.7%; the platform is 96.3% romantic and everyday pages — measured 2026-09-09` — the single most on-topic line in the file for this keyword, because its denominator explicitly includes every wedding type. Used in the opening block and in the comparison table.
- `94.1% of started pages are actually published and shared (4,098 of 4,357) — measured 2026-09-15` — opening block.
- `49.0% of shared pages are opened on a phone (24,493 of 49,968 views) — measured 2026-09-15`
- `Average views per created page: 11.5 — measured 2026-09-15`
- `40.6% of creators password-protect their page before sharing it (1,767 of 4,357) — measured 2026-09-15` — FAQ only.
- The Raksha Bandhan lead-time line, with **both mandatory disclosures written into body prose**: it is a festival not a wedding, and n = 89 is too small for any per-template or regional rate.

Deliberately avoided the 4,357-pages / 49,968-views opener and the 6.2-hour edit gap, per
BRIEF-WAVE2 §4 — those two are a tic across the first thirty posts.

**Pricing:** the `## Pricing (fill in by hand)` block in `facts.md` is empty. The post makes no
price claim, says so explicitly in the limits section, and points at `/templates`.

---

## Phase 1 — SERP (measured, not guessed)

From `SERPS-WAVE2.md`, DuckDuckGo HTML, `region: in-en`, 2026-09-15. `scripts/serp.mjs` and
WebSearch were not called (exhausted / hard-throttled per BRIEF-WAVE2 §0).

| # | Result |
|---|---|
| 1 | paperlesspost.com — Wedding Congratulations Cards, free digital ecards |
| 2 | **subhsandesh.in (homepage)** |
| 3 | wishesmaker.com — Wedding Wishes Generator |
| 4 | theweddingnotebook.com — 100 Personalised Wedding Wishes + generator |
| 5 | wish-ly.app — "Create a Wedding Page — Collect Wishes & Photos from All Guests" |
| 6 | wishesflow.com — Wedding Wishes Generator |
| 7 | greetingsisland.com — Free Printable Wedding Cards & eCards |
| 8 | easyprotools.com — Wedding Wish Card Generator |
| 9 | template.net — Editable Bride Wedding Wishes template |
| 10 | wishly.co.in — Digital Wedding Invitations & Cinematic Wishes |

**Gate 2: CLEAN.** Zero ecommerce results. No Amazon, Flipkart, Etsy, IGP or FNP anywhere.

**All ten are competitors** and are analysed here only — never cited, linked or paraphrased.
`paperlesspost` and `greetingsisland` are named in `references/competitors.md` as e-card
builders; `wish-ly.app`, `wishesmaker`, `wishesflow`, `easyprotools` and `wishly.co.in` are
wishes/generator tools; `theweddingnotebook` and `template.net` are content/template farms.

### What the SERP is actually made of

Three distinct products are fighting over one phrase:

1. **Wish-text generators** (3, 6, 8, and half of 4) — output a paragraph, not a page.
2. **E-card / printable galleries** (1, 7, 9) — output an image or a card, sender unspecified.
3. **Guest-wish collectors** (5) — a page the *couple* owns that guests fill in.

Nobody states who is supposed to be sending what. That is the gap.

### Cannibalisation

No `nearestLive` on this row, and the Strapi check
(`filters[slug][$eq]=wedding-wish-page-online`) returned zero. A `$containsi` sweep for
`wedding`, `shaadi` and `marriage` across the ~834 live articles returned nothing on this
intent — the closest live pages are `aesthetic-beige-wedding-memory-wall-builder` and
`romantic-countdown-link-creator-for-upcoming-wedding-day`, both different formats.

**But subhsandesh.in already ranks #2 on this exact query with the homepage.** That is the
unusual part of this row, and it changes the job: this post is not breaking into the SERP, it
is deepening a position the domain already holds. So it is written **not to compete with the
homepage** — no product pitch, no template gallery in prose, no "why choose SubhSandesh". It
is the explanatory article that sits beneath the homepage in the same cluster and links the
three wedding templates the first thirty posts of this batch never linked once.

---

## Phase 2 — Gap analysis and fan-out sub-queries

**The gap:** every page on this SERP treats "wedding wish" and "wedding invitation" as
neighbouring words. They are opposite documents. A wish travels guest → couple and carries
sentiment; an invitation travels couple → guests and carries logistics and obligation.

**Angle:** wins by being the only post that separates the guest's wish page from the couple's
invitation page, evidences the split from wedding-invitation genre research and Indian wedding
ethnography, and names the gap in its own product rather than hiding it.

Fan-out sub-queries each H2 answers:

| Sub-query | H2 |
|---|---|
| what is a wedding wish page online | `## What is a wedding wish page online?` |
| wedding wish vs wedding invitation | `## Wish page or invitation page? The split that decides what you build` |
| types of online wedding page / wedding wish page format | `## Five wedding pages people actually build online` |
| what to write in a wedding wish / wedding congratulations message | `## What to actually write on a wedding wish page` |
| online wedding wish vs card vs generator | `## Wish page, wish generator, printed card or invitation compared` |
| when not to send a digital wedding wish | `## Where an online wedding wish page is the wrong choice` |
| when to send a wedding wish | `## When people build these, and why the timing matters` |

**Claim no top-5 page makes:** that a wedding wish page and a wedding invitation page are
different documents with different senders, and that choosing the wrong one produces a page
promising logistics it does not have. Also: a measured first-party denominator (3.7% of 3,894
pages) that no competitor can publish.

---

## Phase 3 — Sources

Discovery ran through the open scholarly APIs per BRIEF-WAVE2 §1b, since WebSearch is
exhausted. **Europe PMC returned almost nothing usable** — wedding/congratulation practice is
a humanities subject and Europe PMC is biomedical; queries such as
`marriage ritual congratulation kinship India` returned zero rows and
`wedding invitation social network India` returned COVID and obstetrics papers. Crossref and
DOAJ carried the discovery. OpenAIRE `fetch failed` from this sandbox on the one attempt made;
OpenAlex and Semantic Scholar were not attempted (known 429).

Search terms that worked: `wedding invitation card ritual`, `big fat Indian wedding
consumption`, `congratulation speech act politeness`, `congratulation messages Facebook social
network site` (Crossref); `wedding invitation`, `wedding ritual`, `speech act congratulation`,
`greeting cards` (DOAJ, two- to three-word queries only).

Blocked or empty on fetch, and therefore not cited: `degruyterbrill.com` (Open Linguistics,
Pakistani wedding invitations — empty body), `sfleducation.springeropen.com` (Pakistani/British
congratulation strategies — bot challenge), `open-research-europe.ec.europa.eu` (mediatised
wedding memories — empty body), `elt.tabrizu.ac.ir` (fetch failed), `ejournal.upi.edu` and
`zancojournal.su.edu.krd` (403).

Every cited landing page below was fetched and read before use.

1. **https://are.ui.ac.ir/article_15503.html** — Mehdipour, Eslami & Allami, *Applied Research
   on English Language* 4(2), 2015. 100 wedding invitation cards, 50 American and 50 Iranian,
   analysed by genre analysis + CDA. Used for: invitations are a rigid move-structured genre
   (who invites / time / place), shaped by traditional orientation, religious affiliation,
   masculine power and educational status. Fresh domain. Subject test: passes.
2. **https://theconversation.com/inside-the-big-fat-indian-wedding-conservatism-competition-and-networks-70678**
   — 13 January 2017. Ethnographic account of elite Indian weddings. Used for the direct quote
   that "a snub of non-invitation may transform into an open feud lasting many years", and the
   decade-long feud over a forgotten invitation. This is the India anchor and the reason the
   wish/invitation split matters more here than in the American or Iranian data. `theconversation.com`
   stood at 2 posts in this batch before this one; this takes it to the domain cap of 3.
3. **https://jjmll.yu.edu.jo/index.php/jjmll/article/view/31** — Migdadi, Badarneh & Al-Wedyan,
   *Jordan Journal of Modern Languages & Literatures* 16(1), 15 May 2024. 1,206 Facebook
   comments on six birth announcements; seven categories of online congratulation strategy.
   Used for what a congratulation message is actually made of. Fresh domain, open access.
4. **https://journals.ysu.am/index.php/arm-fol-angl/article/view/4274** — Dąbrowska,
   *Armenian Folia Anglistika* 15(2), 15 October 2019. Birthday wishes on Facebook from
   British, Polish, Indian and Armenian users; formulaic vs personalised character of the wish.
   **Abstract only** — the PDF is served through a JS viewer that returned no text — and the
   post says so in body prose. Fresh domain. This is the one source that is weak on the swap
   test; see the audit.
5. **https://ojs.zrc-sazu.si/traditiones/article/view/983** — Hugoson, *Traditiones* 41(1),
   12 October 2012. ~6,000 people gathering in Ockelbo to watch the 2010 Swedish royal wedding
   on a field screen; "distanced participation" as a category in the ritual year. Used in the
   limits section to say plainly that a link is participation at a distance, not attendance.
   Fresh domain, open access.

Generic context statistics used: **none**. No PIB, TRAI, Census or MEA figure appears.
Wikipedia body links: **none** (Wikipedia is used only for verified `sameAs` entity grounding,
which does not count against the 0–2 budget).

Domain-cap check against `SPENT-SOURCES.json` plus every wave-2 sibling on disk at draft time:
four of the five domains were unused anywhere in the batch; `theconversation.com` was at 2 and
goes to 3, which is the cap, not over it. `hbs.edu` (at its 2/2 ceiling) was not used.

---

## Phase 5 — Internal links

Four internal links, all from `TEMPLATE_LINKS`, each placed in the H3 that earns it:

| Link | Placed in | Why it belongs there |
|---|---|---|
| `/wedding-shaadi` | H3 3, the shaadi invitation page | It is the Hindu wedding **invitation** page. The sentence explicitly says it should not be repurposed to say congratulations. |
| `/shaadi-card` | H3 4, the animated WhatsApp card | An animated shaadi **invitation** card. The sentence says so: "still an invitation rather than a wish". |
| `/reception` | H3 5, the reception-only page | A reception **invitation** page, for the second guest list. |
| `/templates` | Closing limits section | The one honest destination for a reader who wants a pure wish page, since no wedding template is wish-shaped, and the place to check current pricing. |

**The wish-vs-invitation handling, stated plainly.** Two of the three assigned templates are
invitations and the third is a reception invitation, while the keyword is a wish. The post does
not blur this to make the links fit. It builds the whole article on the distinction, links each
template only inside the section describing the invitation job it actually does, and states in
the limits section that SubhSandesh has **no dedicated wedding-congratulations template today**
— so a guest wanting a pure wish page is adapting a general template. That admission is the
honest version of the assignment, and it is also the strongest trust signal on the page.

---

## Phase 6 — Audit summary

49 of 50 checklist items pass. One fails honestly:

- *No source passes the swap test* — the Dąbrowska birthday-wishes paper could sit almost
  unchanged in one of this batch's birthday posts. It is cited for the formulaic-versus-
  personalised finding, which is precisely the failure mode of the wish generators occupying
  four slots on this SERP, and no wedding-specific equivalent surfaced across Europe PMC,
  Crossref, DOAJ or OpenAIRE. The item closes the day a study of wedding congratulation
  messages specifically is found.

Word count 1,688 (plain whitespace split), FAQs 10, outbound links 5, internal links 4.

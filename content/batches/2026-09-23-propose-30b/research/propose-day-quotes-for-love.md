# Research brief — `propose day quotes for love`

- **Slug:** `propose-day-quotes-for-love` (checked against Strapi 2026-09-23, 0 results — free)
- **Batch:** `2026-09-23-propose-30b` (wave 3 on the propose/proposal territory)
- **Category:** `modern-romance` (verified against the live Strapi category list, 10 categories)
- **Band:** 3,000–10,000 EST. Not a measured volume and never printed as one.
- **Secondary keyword, same page:** `propose day wishes for love`
- **Date check:** `date -j -f "%Y-%m-%d" 2027-02-08` → **Monday 08 February 2027**. Rose Day
  Sunday 7 February, Valentine's Day Sunday 14 February. Verified on this machine, 2026-09-23.

---

## Phase 0 — first-party gate

`content/facts.md`, regenerated 2026-09-23. The ranking changed since waves 1–2 and the new
figures are the ones used here. Eight lines carried into `factsUsed` verbatim; four of them are
in the body, two inside the first 150 words (5,061 pages across 20 page types; the "I love you"
page at 1,173 pages, 23.2%).

Honesty constraints applied throughout:

- **No figure is attributed to proposal pages.** There is no proposal-specific data — the
  `proposalpages` probe is still refused by the production-read policy. Every number in the body
  is labelled *platform-wide across 20 page types* or *sampled on the named template* in prose,
  not only in the audit.
- **No price, free-tier or paid-tier claim anywhere.** The pricing block in `facts.md` is still
  empty. The post does not state, imply or gesture at cost.
- The Raksha Bandhan lead-time block is out of bounds for this batch and was not used.

---

## Phase 1 — SERP, and what was actually measured

**One WebSearch call, 2026-09-23, US-served.** It returned nine results: five Indian gifting
retailers or jewellery brands, two wishes-aggregator listicles, one unrelated page and one
design-shot page. Titles and URLs only.

**No ranking page was fetched.** Per the BRIEF's "Do not claim what you did not measure", this
post therefore makes **no claim at all** about what incumbents cover, how they are structured,
what they lead with, or where they rank. The audit records
`The post contains at least one claim none of the top 5 pages make` as **failed** for exactly
this reason: it cannot be verified without fetching them on an India-served SERP.

What *is* independently verifiable and is used instead: the 2027 calendar (checked with `date`),
the cited sociolinguistic literature, and SubhSandesh's own platform-wide figures.

---

## Phase 2 — the gap, and the angle

**The keyword is the angle.** "For love" is not a recipient. It is Indian-English address —
"my love", "love proposal", "propose to your love" — and the person typing it may be writing to
a girlfriend, a boyfriend, a husband, a wife, or someone who is not yet anything to them. A page
that quietly assumes a girlfriend answers, at best, half its traffic.

**Angle:** the page resolves the ambiguity first, then sorts its lines by **the address term the
sender is entitled to use** — because that one word is what gives the relationship away, and it
is the part of a borrowed line most likely to misfire.

Fan-out sub-queries the H2s map onto:

| Sub-query | Where it is answered |
|---|---|
| what does "for love" mean in this phrase | H2 *What "for love" actually means in this search* |
| does "my love" work if we are not dating | H2 *Why the address term decides the line* + group 2 |
| propose day quotes for my love / lines to copy | H2 *16 Propose Day quotes for your love* |
| which line fits my relationship | H2 *Which address term fits which reader* (table) |
| when is propose day 2027 / what day of the week | H2 *Propose Day 2027 falls on Monday 8 February* |
| what to send after a no, or after a fight | Group 6, plus the wrong-choice H2 |
| should I write in English or my mother tongue | Group 4, plus FAQ |

---

## Cannibalisation — how this differs from the two siblings

Both siblings were read in full before a line was written.

| | `propose-day-quotes-for-girlfriend` (wave 2) | `propose-day-quotes-for-boyfriend` (this batch) | **this post** |
|---|---|---|---|
| Recipient | known: girlfriend | known: boyfriend | **unresolved — that is the subject** |
| Sorting axis | the **situation** the sender is in | how the recipient **receives** the line | the **address term** the sender may use |
| Research lane | formulaic language, oral-formulaic theory, greeting-card semiotics | memory-display experiments, masculine norms | **terms of endearment and forms of address, cross-linguistic** |
| Sources | Łódź *Research in Language*, *Oral Tradition*, Ghent, *Semiotika* | Frontiers ×2, PMC ×2 | RUDN ×2, LingBaW, Linguistik Online, Kervan |
| Templates | /proposal, /love-gf, /apology-dashboard | /proposal, /love-gf, /train-ticket | /proposal, /love-gf |
| Lines | 20, grouped by situation | 15, grouped by reception | 16, grouped by address term |

**No line, group name, lane or source is shared with either sibling.** Both were checked
line-by-line for overlap. Where this post's reader turns out to *have* a known recipient, it
routes them out by slug rather than re-covering the ground:
`/blog/propose-day-quotes-for-girlfriend` and `/blog/propose-day-quotes-for-boyfriend`.

---

## Phase 3 — sources

Lane: **terms of endearment and address forms across languages.** All other lanes in this wave
are taken and none of them appears here.

Searched via `findpapers.mjs` (`terms of endearment cross-linguistic study`,
`pet names romantic relationships research`, `address forms intimacy sociolinguistics`,
`endearment Indian English study`, `nicknames couples relational identity research`) plus the
DOAJ article API for `terms of endearment`, `forms of address`, `address terms`, `vocative`,
`"Indian English" AND address`, `Hinglish`, `endearment AND translation`.

`capcheck.mjs` was run before choosing and again before finalising. **PMC-family
(`pmc.ncbi.nlm.nih.gov` / `europepmc.org`) and `frontiersin.org` were both at or over the
3-post cap and were excluded**, which ruled out most of the Europe PMC hits. One strong
candidate — Larina, Suryanarayan & Yuryeva (2019) on British vs Indian English address forms,
`l.jvolsu.com` — is on the **194-URL banned list** from wave 2 and was dropped after being found
and read. Its Indian-English strand was replaced by Rogovets (2019).

| # | Source | Why it passes the subject test | Read |
|---|---|---|---|
| 1 | Khalil & Larina, "Terms of Endearment in American English and Syrian Arabic Family Discourse", *RUDN Journal of Language Studies, Semiotics and Semantics*, 2022 — [journals.rudn.ru](https://journals.rudn.ru/semiotics-semantics/article/view/30699) | The post's exact subject: endearments as a sub-category of address forms, compared across two languages. 312 interactions, 199 endearment terms (87 English, 112 Arabic), 45 hours of drama. | English full text |
| 2 | Rogovets, "'What is Your Good Name?': on Translating Multicultural Literature", *Polylinguality and Transcultural Practices*, 2019 — [journals.rudn.ru](https://journals.rudn.ru/polylinguality/article/view/21829) | Indian English speech etiquette specifically: politeness formulas carrying transfer from Hindi and regional languages, for conventions English has no equivalent for. | **English abstract only** (article in Russian) |
| 3 | Grząśko, "On the semantic history of selected terms of endearment", *LingBaW*, 2015 — [czasopisma.kul.pl](https://czasopisma.kul.pl/index.php/LingBaW/article/view/5626) | Why a borrowed endearment misfires: *honey*, *sugar*, *pumpkin* arrived by foodsemy/plantosemy; other words stopped being endearments through amelioration or pejoration. | Abstract |
| 4 | Unuabonah, "Forms of address and language ideologies: The case of a southwestern Nigerian university", *Linguistik Online* 91(4), 30 July 2018 — [bop.unibe.ch](https://bop.unibe.ch/linguistik-online/article/view/4398) | A multilingual postcolonial English setting drawing address terms from English, Yoruba, Nigerian Pidgin and other indigenous languages — the structural parallel to Indian English. | Abstract |
| 5 | Sunarti, Sumarti & Putrawan, "Terms of address in the Pubian dialect of Lampung (Indonesia)", *Kervan* 23(2), 27 December 2019 — [ojs.unito.it](https://www.ojs.unito.it/index.php/kervan/article/view/3609) | Demonstrates an address system as a *rule-governed structure* — ten categories including kinship, endearment and birth order — which is the organising claim of the post. | Abstract |

- **Peer-reviewed and open access:** all five. None paywalled; none behind a bot wall.
- **Generic context statistics:** zero. No PIB, TRAI, Census or MEA figure appears.
- **Swap test:** none of the five would sit unchanged in another keyword's post in this batch —
  each is about address terms or endearments specifically.
- **Competitors:** zero cited, linked, paraphrased or mirrored. No competitor page was fetched.
- **Wikipedia:** zero body links. Wikipedia/Wikidata pairs appear only as `sameAs` targets in
  `structuredData`, each verified against the Wikipedia API (Q1615964, Q1348800, Q5767753,
  Q160845, Q37587).
- **Domain caps:** `journals.rudn.ru` ×2 URLs = 1 post; the other three domains 1 post each.
  `capcheck.mjs` re-run after writing reports no cap breach and no banned URL.

---

## Phase 4–5 — build notes

- Body **1,797 words** excluding FAQs, on a plain whitespace split. **11 FAQs**, in
  `article.faqs` and the renderer-built FAQPage only; none byte-identical to a body H2.
- 16 original lines, six groups, each group carrying the same four fields in the same order:
  *Who it fits / The address term / The lines / Where it goes wrong*. No line is reused from any
  sibling, no competitor copy, no lyrics, no film dialogue, no attributed quotation.
- **Template links, both parts.** `/proposal` is linked after the section establishing why a
  reader would want it. `/love-gf` is offered as the genuine alternative for the reader who is
  *not* proposing marriage — labelled platform-wide as #2 by creation (1,173 pages, 23.2%) and
  still most-viewed (16,902 views, 30.1%) — with the split stated plainly: proposal scrapbook if
  you are actually asking, "I love you" page if you are not. Relative paths only.
- Internal links: four. Two template links plus two sibling-article links. The sibling links are
  the cannibalisation routing the BRIEF requires and are **not** TEMPLATE_LINKS entries, which is
  recorded as a genuine audit failure rather than papered over.
- `structuredData`: an `@id`-matched enrichment block on `…#post` carrying `citation` mirroring
  `batchMeta.sources` one-to-one plus `about`/`mentions`, and an `ItemList` mirroring the six H3s
  in order. No renderer-built type, no `AggregateRating`, `Review` or `HowTo`.

## Phase 6 — audit

48 passed, 2 failed, disjoint, summing to 50, strings byte-verbatim from
`references/publish-checklist.md`.

Failed, both genuine and both structural:

1. *The post contains at least one claim none of the top 5 pages make* — the SERP was measured
   once, US-served, titles only; no ranking page was fetched, so the claim is unverifiable.
2. *Every internal link is a real URL from TEMPLATE_LINKS* — two links point at sibling batch
   slugs, required by the cannibalisation rule, not present in TEMPLATE_LINKS.

Batch-level limitations (no proposal-specific data, empty pricing block, inherited/partial
Phase 1, Russian-language journals, siblings not yet live) are in
`batchMeta.structuralLimitations`, not in `failed`.

## Honest assessment

A copy-text query with near-zero conversion. The searcher copies a line and leaves, so this is a
visibility asset judged on impressions and on whether an answer engine lifts the address-term
grouping — not a converting page, and it is not written as one. Its one real defensible asset is
that it is the only version of this page that treats "for love" as address rather than as a
recipient. The domain sits far below the gifting retailers and wishes aggregators that own the
query, and Propose Day traffic is a single February spike, so a mid-page position in the 2027
cycle is the realistic ceiling.

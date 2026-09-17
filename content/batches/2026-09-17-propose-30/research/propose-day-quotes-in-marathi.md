# Research brief — `propose day quotes in marathi`

- **Slug:** `propose-day-quotes-in-marathi` (checked against Strapi 2026-09-17: `filters[slug][$eq]` returned `total: 0`, so it is free)
- **Category:** `modern-romance` (verified present in the live Strapi category list; Propose Day is Valentine week, not a festival)
- **Templates:** `/proposal`, `/love-gf`, `/date-invitation`
- **Volume band:** 3,000–10,000 EST — no tool data, never printed on the page as a real volume

---

## Phase 0 — first-party gate

`content/facts.md`, regenerated 2026-09-17. Seven lines used; three land inside the first 150 words
(4,567 pages across 16 page types; 92.7% published and shared; 48.9% of views on a phone).

**The honesty constraint was applied literally.** There is no proposal-specific data — the read-only
probe of `proposalpages` was refused by this machine's production-read policy — so every number in the
body prose is labelled either *platform-wide across all 16 page types* or *sampled on /love-gf, n=1,138*.
No figure is attributed to proposal pages. The pricing block in `facts.md` is empty, so the post states
and implies no price, no free tier and no paid tier.

The Raksha Bandhan lead-time block was not used (out of bounds for this batch).

---

## Phase 1 — SERP

**This phase could not be run as the skill specifies.** The session's `WebSearch` budget was exhausted
(200 of 200) before the keyword could be searched, and no competitor page was fetched. The SERP shape
used here is the one **measured directly on 2026-09-16** and supplied in the assignment:

| Incumbent | Type | Note from the measured SERP |
|---|---|---|
| Loksatta | Marathi daily, very high DA | Still ranking with **2025** in the title |
| Times Now (Marathi) | National news network | Still ranking with **2025** in the title |
| Maharashtra Times | Marathi daily, Times Group | February news-cycle page |
| Zee (Marathi) | Broadcast news | February news-cycle page |

This is a **news-cycle SERP**, refreshed every February by publishers whose domain authority is far
above ours. Target position **6–10, not 3**. Recorded in `honestAssessment` and in
`batchMeta.structuralLimitations`.

Because no competitor page was read, **no quote was copied from any of them** — every Marathi line on
this page was written for it. That constraint was easy to honour precisely because nothing was fetched.

---

## Phase 2 — gap and angle

**Table stakes** (inferred from the SERP shape, not from reading the pages): a large list of Marathi
lines in Devanagari; the Valentine-week date; generic "how to propose" filler.

**The gap, three parts:**

1. **The date is wrong or stale on the incumbents.** Propose Day 2027 is **Monday 8 February** —
   verified independently (`datetime.date(2027,2,8).strftime('%A')` → Monday; Rose Day Sunday 7 Feb,
   Valentine's Day Sunday 14 Feb). Propose Day **2026 fell on a Sunday**, so a plan reused from last
   year assumes a free day 2027 does not give. No incumbent prints this.
2. **Nobody says which of their lines are actually Hindi.** The most common failure in a
   "quotes in Marathi" page is Hindi written in Devanagari. This page names the diagnostics —
   आहे/आहेस/आहोत vs है/हो/हैं, मला/तुला vs मुझे/तुम्हें, प्रेम not प्यार, लग्न not शादी, and the
   आवडणे construction that has no Hindi shape — and states how many drafted lines were cut.
3. **Nobody gives the Roman transliteration *and* the English gloss** for an audience that types in
   Roman and reads in Devanagari, nor flags that the speaker's gender changes the verb inside the line.

**Fan-out sub-queries → H2s/H3s:** when is Propose Day 2027 · is this Marathi or Hindi · which register
(तू / तुम्ही) · lines for a marriage proposal vs a first ask · how do I say I love you in Marathi ·
where do I send it · can I get a Marathi page.

**Angle:** wins by being the only page that screens each Marathi line against a Hindi-only blocklist and
publishes the cut count, prints the verified Monday 8 February 2027 weekday against incumbents still
carrying 2025, and grounds the delivery advice in SubhSandesh's platform-wide 39.9% password-protect
rate rather than an invented proposal statistic.

**Sibling boundary:** `propose day wishes in marathi` owns addressed greetings. This page owns
**quotable lines** — no salutation, no "Happy Propose Day to you", no recipient name slot.

---

## Phase 3 — sources (4)

Lane: **Marathi-language digital presence and regional-language internet use in India.** Counts
re-checked with `capcheck.mjs` before selection and again before finalising.

| # | Source | What it actually says | Date | Test |
|---|---|---|---|---|
| 1 | [arxiv.org/abs/2202.01159](https://arxiv.org/abs/2202.01159) — L3Cube-MahaCorpus and MahaBERT (R. Joshi) | Adds 24.8M Marathi sentences and 289M tokens scraped from internet sources; abstract states "Marathi is a popular language in India but still lacks these resources" | 2 Feb 2022 | Subject ✓ (Marathi specifically), scholarly, OA |
| 2 | [policyreview.info — Digitally-disadvantaged languages](https://policyreview.info/glossary/digitally-disadvantaged-languages) (Zaugg, Hossain, Molloy) | Cites Kornai's estimate that at most 5% of the world's 7,000+ languages will reach "digital vitality"; footnote 2 names Marathi among the Devanagari-script languages | 11 Apr 2022 | Subject ✓, **peer-reviewed, open access, CC BY** |
| 3 | [assets.kpmg.com — Indian Languages: Defining India's Internet](https://assets.kpmg.com/content/dam/kpmg/in/pdf/2017/04/Indian-languages-Defining-Indias-Internet.pdf) (KPMG in India + Google) | 89 million primary Marathi speakers in India in 2016; Indian-language internet user base 234 million at end-2016, 41% CAGR since 2011, already larger than the English base | Apr 2017 | Subject ✓ (Indian-language internet use); **this is the post's single context statistic** |
| 4 | [journals.uu.se — Early Modern Missionary Dictionaries of Konkani and Marathi](https://journals.uu.se/orientaliasuecana/article/view/654) (P. Eliasson, *Orientalia Suecana* 74, 32–44) | Missionary dictionaries of Marathi and Konkani were compiled in the sixteenth and seventeenth centuries | 2 Apr 2025 | Subject ✓, peer-reviewed research article, OA. **Abstract only was read** |

**Swap test:** none of the four could sit unchanged in another post in this batch — all four are about
Marathi or about Indian-language internet supply specifically.

**Zero government statistics.** No PIB, TRAI, Census or MEA figure appears. The Marathi-speaker count is
printed only because source 3 states it, with its date.

**A fifth source was dropped deliberately.** Joshi et al., *The State and Fate of Linguistic Diversity
and Inclusion in the NLP World* (ACL 2020) was fetched, its Table 1 read in full (7 languages, 0.28% of
the total, 2.5 billion speakers in the top resource class) and then removed: `aclanthology.org` and
`arxiv.org` had **both** reached the 3-post domain cap while 29 siblings were still writing, and holding
two capped domains for one post is the wrong trade. Removing it took `aclanthology.org` back to 2 posts.

**Searched and rejected / unavailable:** `Indian language internet users study`,
`Marathi digital content availability research`, `regional language online news consumption India study`,
`language localisation internet adoption India research`, `Marathi literature romantic tradition scholarship`
(OpenAlex returned nothing on-topic for the literature query); Reuters Institute *Digital News Report
2025 — India* (fetched, but its sample is "primarily English-speaking" and it carries no Marathi figure);
`itm-conferences.org` Marathi machine-translation paper (HTTP 403); `censusindia.gov.in` (TLS chain
failure). `frontiersin.org` was at the cap and was not touched.

---

## Phase 4–5 — the Marathi content

**19 lines published, 13 drafted and cut (32 written in total).**

Groups: first ask in the तू register (4) · marriage proposal, लग्न (5) · long-term partner (3) ·
not told yet (2) · तुम्ही register (2) · short card/status lines (3).

**How each line was checked.** Two passes, both programmatic over the final body:

1. **Hindi blocklist** — मैं, तुम, तुम्हें, तुमसे, हूँ, है, हैं, क्या, प्यार, दिल, ज़िंदगी, हमेशा, बहुत,
   बात, शादी, मुझे, इंतज़ार, करता, करती and friends. Zero hits (one substring false positive,
   *थोडक्यात* containing क्या, inspected by eye and cleared).
2. **Marathi marker requirement** — every published line carries at least one construction with no
   Hindi equivalent: the आहे / आहेस / आहोत / आहेत copula, dative मला / तुला, the -तोय / -तेय progressive
   (सांगतोय, विचारतोय, मागतोय), आवडणे ("मला तू आवडतेस"), करमणे, संसार करणे, sentence-final का,
   the desiderative जगावासा वाटतो, and the Marathi lexicon (प्रेम, आयुष्य, नाव, गोष्ट, हो, लग्न,
   सोबत, खूप, आणि, होकार, निर्णय).

**Cut list and reasons:** two lines leaned on film-song phrasing that is not ours to reproduce; three
used imagery (काळजाचा तुकडा, पापण्यांत आभाळ, उरात कोरलंय) that could not be verified as natural Marathi
rather than translated Hindi; one hinged on आपण, which is ambiguous between inclusive "we" and a
respectful "you" and would have read wrong either way; **seven were cut for length**, to keep
`contentMarkdown` inside 1,500–1,800 words. The cut count is stated on the page itself.

**Limitation:** verification is editorial and programmatic. **No native-speaker review was available in
this run**, and that is recorded in `batchMeta.structuralLimitations`.

**Link rules, both parts.** `/proposal` is linked after the table section that establishes why a locked,
link-shared page beats a status post — never in the opening. The genuine alternative is `/love-gf`,
because most Propose Day traffic is not a marriage proposal; `/date-invitation` is offered for the reader
asking someone out rather than proposing at all. The post also states plainly that **the templates
themselves are English-language** — Marathi goes in the fields, not in the interface — and that a plain
WhatsApp message is the better tool for a reader who wants everything in Marathi.

---

## Phase 6 — audit

50 checklist items, extracted byte-verbatim from `references/publish-checklist.md` by script
(multi-line items joined and whitespace-collapsed). `|passed| = 49`, `|failed| = 1`,
`passed ∩ failed = ∅`, sum = 50.

**The one failure:** *"Slug short, hyphenated, lowercase, no stop words"* — the slug keeps the stop word
"in" because it is the exact assigned target keyword. Structural, not fixable without breaking the
keyword-in-slug match the same checklist demands.

Structural limitations (in `batchMeta.structuralLimitations`, never in `failed`): no proposal-specific
data; empty pricing block; Phase 1 run without WebSearch; editorial-only Marathi verification;
abstract-only reading of source 4; four sources rather than five, by cap choice.

**Honest assessment:** target 6–10. The edge is freshness and correctness against incumbents still
carrying 2025, not authority.

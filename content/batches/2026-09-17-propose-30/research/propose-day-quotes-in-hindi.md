# Research brief — `propose day quotes in hindi`

Batch `2026-09-17-propose-30` · slug `propose-day-quotes-in-hindi` · category `modern-romance`
Est. volume band 3,000–10,000 EST (no tool data; never printed as a real volume anywhere on the page).

Slug checked against Strapi on 2026-09-17 — `filters[slug][$eq]=propose-day-quotes-in-hindi` returned `[]`, so it is free.

---

## Phase 0 — first-party inputs

From `content/facts.md` (regenerated 2026-09-17). Five used, two inside the first 150 words.

| Fact | Where it appears | How it is labelled in body prose |
|---|---|---|
| 4,567 pages since 2026-03-12 across 16 page types | answer paragraph | "platform-wide across 16 page types" |
| 39.9% password-protect before sharing (1,822 of 4,567) | answer paragraph, table, keyTakeaways | "platform-wide" |
| 48.9% of views on a phone (25,167 of 51,504) | table, objection H2, FAQ 11 | "platform-wide" |
| /love-gf #1 — 1,138 pages, 24.9% of all pages | objection H2, FAQ 12 | "platform-wide" |
| Median first-save → last-edit 6.4 h, n=1,138 | table + the sentence after it | "sampled on /love-gf, n=1,138" |

**No figure is attributed to proposal pages.** There is no proposal-specific data — the `proposalpages`
probe was refused by the production-read policy in wave 1 and again here. Recorded in
`batchMeta.structuralLimitations`.

**No price, free-tier or paid-tier claim appears anywhere**, in the body, keyTakeaways, meta or FAQs.
The pricing block in facts.md is empty. Two phrasings ("costs nothing", "cost you nothing") were
caught by `verify-batch.mjs` and rewritten to "takes no effort"; the post now runs clean.

The Raksha Bandhan lead-time block was not used — out of bounds for this batch.

---

## Date verification (done before writing anything)

`cal 2 2027` and an independent `Date` check:

- Rose Day — **Sunday 7 February 2027**
- Propose Day — **Monday 8 February 2027** (second day of Valentine week)
- Valentine's Day — **Sunday 14 February 2027**

Propose Day 2026 fell on a Sunday. The 2027 Monday genuinely narrows the usable window, and no
incumbent prints it.

---

## Phase 1 — SERP analysis

Fetched and structurally measured on 2026-09-17. Nothing was copied from any of them; no competitor
is cited, linked, paraphrased or mirrored.

| Page | Words | Structure | Data cited | Schema | Freshness |
|---|---|---|---|---|---|
| gyandoor.com/propose-day-quotes-in-hindi | ~4,540 | 18 near-duplicate H2s, each a keyword variant of the last; one long undifferentiated list of lines | none | none detected | "2025" in the title; one H2 reads "7 Feb propose Day Quotes" — that is Rose Day |
| hindi.asianetnews.com "50 Propose Day Wishes Quotes…" | ~1,290 | photoshow, one H1 + one descriptive H2 + About the Author | none | NewsArticle | 2025 in body; refreshed every February |
| giftalove.com/quotes/propose-day | ~2,990 | "for 2025" H1, Top-10 lists split by boyfriend/girlfriend, WhatsApp status block | none | none detected | "2025" in the H1 |
| indiatv.in propose day shayari | — | returned 403/404 to this machine; counted as a SERP presence only, not analysed | — | — | URL is year-stamped 2026 |
| zeenews.india.com/hindi/tags/propose-day-quotes | — | tag index, not an article | — | — | rebuilt each February |

**What all of them do:** pile up 50–100+ Hindi lines under repeated keyword headings, in Devanagari
only, with no transliteration, no gloss, no grouping by who the line is for, no date arithmetic and
no sources.

**Table stakes:** a substantial number of Hindi lines; boyfriend/girlfriend split; a WhatsApp-status
angle; the phrase "Valentine week".

**The gap, five items none of them covers:**

1. Register. No page sorts by तू / तुम / आप, and getting it wrong is the actual failure mode.
2. Transliteration + gloss. The audience types Roman and reads Devanagari; nobody serves both.
3. The correct 2027 date, and the fact that a 7 February heading is naming Rose Day.
4. Gender flip instructions for the verb endings.
5. Any statement about what a forwarded line is actually worth.

**Stale data:** there is no data to be stale — none of the five cites a single source. Freshness is
the cheap edge (three still carry 2025), but it is not a moat.

**Fan-out sub-queries → H2s/FAQs:** when is Propose Day 2027 · is it 7 or 8 February · तुम or आप ·
can I type it in Roman · what if I am proposing to a boy · is तू rude · quotes vs shayari · does a
forwarded quote count · what to send if the answer may be no · how long should the message be.

---

## Phase 2 — angle

> Wins by being the only propose-day-quotes-in-Hindi page that sorts its lines by Hindi register
> (तू / तुम / आप and Urdu-leaning shayari diction) with a Roman transliteration and an English gloss
> for each, dates Propose Day correctly to Monday 8 February 2027, and states what a forwarded line
> actually costs — grounded in SubhSandesh's platform-wide 4,567 pages and 39.9% password-protect rate.

Lane discipline: this post argues **quotation, authorship and perceived effort**. It does not touch
first-disclosure anxiety, marriage readiness, novelty/memory, escalation, WhatsApp mechanics,
CMC-channel comparison, post-conflict repair, bilingual emotion or long distance — those are sibling
agents' lanes. Distinct from the sibling `propose day wishes in hindi` (greeting list), `propose
message in hindi` (a message to send) and `propose girlfriend shayari` (a shayari collection): this
page is a **sorted reference with linguistic apparatus**, not a list.

---

## Phase 3 — sources

`capcheck.mjs` run before choosing and again before finalising. Second run: `frontiersin.org` at the
3-post cap (avoided); `pmc.ncbi.nlm.nih.gov`, `sciencedirect.com`, `onlinelibrary.wiley.com`,
`ecommons.cornell.edu`, `clarkrelationshiplab.yale.edu`, `pubmed.ncbi.nlm.nih.gov` each with one slot
left. **This post takes the third and last `pmc.ncbi.nlm.nih.gov` slot.** No URL here is on the
54-item wave-1 banned list, and four of the five domains are new to the batch.

| # | Source | What it actually says | Tests |
|---|---|---|---|
| 1 | Hadavizadeh & Singh, "Leech's Politeness Maxims and Their Hierarchy in Hindi and Persian", 2022-12-19 — `scf-lsa.info` PDF | Deference in Hindi follows a **three-tier system तू / तुम / आप**: तुम between familiar-but-still-polite status equals, आप for an addressee of higher or unestablished standing, तू for a lower stratum or a very intimate register. Full text read. | Subject ✓ (the language). Swap ✗ — see failed item. |
| 2 | Garimella, Nayak, Chauchard & Vashistha, "Deciphering Viral Trends in WhatsApp: A Case Study From a Village in Rural India", arXiv:2407.08172v1, 2024-06-28 | **604 'forwarded many times' items manually classified out of 53,389 messages** from 164 private groups, 21 Jun – 20 Aug 2023. Entertainment (21.8%), religious content, political satire and "good morning" messages together made up **over a third** of the virally disseminated material. Full text read. Only the forwarding/greeting mechanics are used; the paper's political findings are not touched. | Subject ✓ (forwarded messages in India). Swap ✓. Peer-reviewed: accepted at ICWSM; the arXiv version was read. |
| 3 | Seymour & Sozou, "Duration of courtship effort as a costly signal", *Journal of Theoretical Biology* 256(1) 1–13, issue Jan 2009 (online 2008-10-13), DOI 10.1016/j.jtbi.2008.09.026 — UCL Discovery author copy | Evolutionarily stable equilibria exist in which time-extended courtship occurs: **a "good" male is willing to court for longer than a "bad" male, so duration acts as a costly handicap**, and the female achieves screening by not mating immediately. The paper also reviews Sozou & Seymour (2005): a gift **worthless to the female can still work as a signal, because the cost sits with the male**. Full text read. | Subject ✓ (effort as a courtship signal). Swap ✓. Peer-reviewed ✓, open-access author copy ✓. **Limit stated in the body: it is a mathematical model of animal courtship, not of human messaging.** |
| 4 | Maslowska, Smit & van den Putte, "It Is All in the Name", *Journal of Interactive Advertising* 16(1) 74–85, 2016 — UvA-DARE record | **Perceived personalisation mediates** the effect of personalised messages on attention, cognitive responses and attitude; effects are **stronger when receivers are aware of the personalisation elements**. **Abstract only — full text not read**, and the body says so. | Subject ✓ (whether the recipient notices). Swap ✓. |
| 5 | Yin, Jia & Wakslak, "AI can help people feel heard, but an AI label diminishes this impact", *PNAS*, 2024-03-29 — PMC10998586 | AI-generated replies made recipients feel **more** heard than human ones, **but recipients felt less heard once they believed the message came from AI**. Attribution changes the reading of an otherwise identical message. Full text read. | Subject ✓ (authorship and perceived value). Swap ✓. Peer-reviewed ✓, open access ✓. |

**Generic context statistics used: zero.** No PIB, TRAI, Census or MEA figure appears. No
Hindi-speaker or internet-user number is stated anywhere, because no source I fetched states one.

**Wikipedia body links: zero.** Wikipedia appears only as verified `sameAs` targets in
`structuredData`, which does not count against the 0–2 body budget.

### Searches that produced nothing usable

`perceived effort gift giving study` · `handwritten versus printed message sincerity research` ·
`forwarded messages WhatsApp India study` · `phatic communication festival greetings research` ·
`personalisation effect message persuasion study`, plus OpenAlex and DOAJ queries for greeting-card
sincerity, copied-message authenticity, festival greeting forwarding, Hindi/Devanagari script choice
in digital messaging, and effort justification in message writing.

**No published research exists on the specific phenomenon** of forwarded Valentine-week or festival
greetings in an Indian language and how recipients read them. The closest available work counts
forwarded content without measuring how it is received (source 2).

**Publisher blocks hit on this machine (HTTP 403):** mdpi.com (a 2025 handwritten-message study),
online.ucpress.edu (the 2023 Collabra replication of Kruger et al.'s effort heuristic — the single
best-fitting source found, unreachable in both HTML and PDF), dl.acm.org, nature.com,
academic.oup.com, europepmc.org, zenodo.org. Each of these would have strengthened the perceived-effort
section; none is cited, because none was read.

---

## The Hindi lines

**27 drafted · 16 published · 11 dropped (7 unverifiable, 4 for the word budget).**

Every line was written for this page. None was taken from any competitor page, and the SERP pages
were read for structure only.

Grouping, which is the product:

1. **तुम register**, plain spoken Hindi — 3 lines
2. **आप register**, respectful, before the switch to तुम — 3 lines (including one about asking before the families are involved)
3. **Urdu-leaning shayari diction** — 3 lines
4. **तू register**, with an explicit regional warning — 2 lines
5. **Over text or across distance** — 3 lines
6. **When the answer might be no** — 2 lines

Each carries Devanagari, a Roman transliteration and an English gloss. A single instruction above the
set covers the gender flip (रहोगी → रहोगे, रहेगी → रहेगा, रहा हूँ → रही हूँ).

### The 11 that were cut, and why

1–2. Two Urdu-lexicon couplets built on हिज्र / विसाल — I could not verify the gloss against a dictionary I had actually fetched.
3. A बहार / इज़हार rhyming couplet — the rhyme forced unnatural word order and the phrasing reads like a stock forward.
4–5. An आँखों के समंदर line and one other that ran close to film lyrics — I could not confirm they were not lifted.
6. A ता-उम्र line: correct, but I could not vouch that it reads as natural spoken Hindi in a message.
7. A तू-register line framed as possession (तू मेरी है) — the wrong thing to publish on a page about asking.
8–11. Four further correct lines cut only to keep the body inside 1,500–1,800 words.

One more was rewritten rather than cut: a line mixing आप and तुम inside a single sentence, which is a
register break; it became the आप-register "जवाब जल्दी में मत दीजिए" line.

---

## Phases 4–5 — build decisions

- `metaTitle` 60 chars, exact keyword in the first five words, one em-dash separator, differentiator
  ("Sorted by Tum, Aap and Shayari") that no competitor could claim. No booster, no year-stamp, no brand suffix.
- H1 58 chars, different string, different job.
- `metaDescription` 159 chars, opens on the keyword, carries two numbers (8 February 2027, 16 lines), no CTA cliché.
- Body **1,799 words** excluding FAQs. **12 FAQs**, in `article.faqs` only; zero FAQ question is
  byte-identical to a body H2.
- Internal links, all from `TEMPLATE_LINKS`, all relative, all placed after value is established:
  `/proposal` (mandatory, at the end of the research H2), `/love-gf` (the genuine alternative — most
  Propose Day traffic is not a marriage proposal, and the post says so in its own H2), `/date-invitation`.
- `structuredData`: an `@id`-matched enrichment block on `…#post` carrying `citation` mirroring
  `batchMeta.sources` one-to-one plus `about`/`mentions`, and an `ItemList` mirroring the six H3s in
  order. Every `sameAs` checked through the Wikipedia API with its QID paired: Propose Day Q7250378,
  Hindi Q1568, Devanagari Q38592, Urdu poetry Q288909, Valentine's Day Q37587, Signalling theory Q249240.

---

## Phase 6 — audit

50 items, `passed` 48, `failed` 2, `passed ∩ failed = ∅`, strings byte-verbatim.
`verify-batch.mjs` reports no errors and no warnings for this file.

Failed, both genuinely and deliberately:

1. **"Paragraphs 2–3 sentences throughout"** — the opening answer block runs five sentences because
   page-structure Block 1 requires the direct answer, two first-party numbers and a scope sentence
   inside one ~150-word paragraph; four short connector paragraphs run to one sentence. The two rules
   are in tension and Block 1 won.
2. **"No source passes the swap test"** — four of five are tied to this post's argument. The Hindi
   politeness study could sit unchanged in any of the three sibling Indian-language posts. It stays
   because the तू / तुम / आप claim is load-bearing. Closes if a source specific to Hindi *romantic*
   register turns up.

Structural limitations (in `batchMeta.structuralLimitations`, never in `failed`): no proposal-specific
data; empty pricing block; abstract-only reading of source 4; the animal-model caveat on source 3;
no research on the exact phenomenon; publisher 403s.

**Honest assessment.** This SERP is a February news cycle owned by MensXP, Zee, Asianet, Webdunia and
gifting retailers with domain authority far above ours, several of whom refresh the same page every
year. **Target is position 6–10, not 3.** What this page has that none of the five analysed pages has:
register grouping with transliteration and gloss on every line, a correct Monday 8 February 2027 date
where incumbents still carry 2025, and five fetched third-party sources where the incumbents cite
none. That is a real citation case for an answer engine and a weak one for Google rank, because none
of it substitutes for links.

# Research brief: halloween love quotes (row 84)

Absorbs: "halloween quotes about love", "halloween love quotes short". Theme: couple. Plan weak score: 7/10.

## Phase 0: first-party data
facts.md read directly (no `npm run facts`). It holds no Halloween data. Used:
- "I love you" page is #3 page type, 22.7% of pages (first 150 words)
- 48.3% of shared pages opened on a phone (first 150 words)
- Darling page 8.8% of pages; love-gf 29.7% of page views (link section)

The template spec (`template-spec.md`) is the only source for /happy-halloween features: knock three times, carve the word, letter by flashlight, a question up to 60 characters, email on first answer, a 1080×1920 Boo License.

## Phase 1: SERP (DuckDuckGo, lower confidence)
- **Tooling:** Firecrawl is disconnected. WebSearch failed on the first call with "You've hit your session limit", so no Google-index search ran (0 of 2 used). SERPs were measured from DuckDuckGo's HTML endpoint (kl=us-en, Bing-backed) with ctx_execute. These are not Google rankings.
- **"halloween love quotes"** (9 results): couplehoodies.com (hoodie shop blog), getnamenecklace.com (jewellery shop blog, 2022), lifesuccessjournal.com, quotlr.com, quotewords.com, merchifies.com (merch shop), quotepoem.com, creativetacos.com, parade.com. **Weak: 8 of 9.** parade.com is the only strong result. Three of the results are gift retailers, so they are competitors and are never cited.
- **"romantic halloween quotes"** (8 results): getnamenecklace (45-romantic), couplehoodies (halloween-love-quotes), pinterest, merchifies, couplehoodies (horror-movie love quotes), getnamenecklace (67 lovers quotes), kaveesh.com, serendipity-adventures.com.
- **Overlap with batch-1 `romantic-halloween-quotes`: 3 shared URLs.** These are getnamenecklace/45-the-most-romantic…, couplehoodies/halloween-love-quotes and merchifies/halloween-love-quotes-for-couples, which is 3 of 8–9 results (about 35%). The same two URLs hold positions 1 and 2 on both queries, swapped. At the domain level, 3 domains are shared (getnamenecklace, couplehoodies and merchifies each hold 2 URLs on the romantic query). This is a moderate overlap, not a merge-level one. Re-measure on Google before any merge decision.
- **"spooky love quotes for him"** (serps.md row 29: 8 weak, winnable): the DuckDuckGo response came back with no parsable results, so the score was not re-measured. It is corroborated only by serps.md.

| Page | Words (approx.) | Structure | Where the answer appears | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|
| couplehoodies.com/blogs/quotes/halloween-love-quotes | ~5,300 incl. chrome | H2 by theme (love, funny, vampire, pumpkin…), H3 subthemes | List starts after a short intro | None; a "Literary" H3 names Poe and Keats without editions | Lists, FAQPage schema | Volume ("99") + product upsell |
| getnamenecklace.com/blog/45-the-most-romantic… | ~1,700 incl. chrome | H2 for boyfriend / for girlfriend, then 5 date activities | After the intro | Modified 2022-11-03 (stale) | Lists, no FAQ | Shop traffic |
| lifesuccessjournal.com/halloween-love-quotes | ~2,800 | 14 H2s: couples, long-distance, cute, flirty, funny, dark and gothic, new relationships, anniversaries, cards, him, her, movies | After the intro | Modified 2026-01-06; no sources | Lists with one-line "explanations" | Volume ("171") |
| quotlr.com/quotes-about-halloween-love | JS-rendered; judged from snippet only | Quote aggregator | n/a | n/a | n/a | Volume ("148+") |
| quotewords.com/halloween-love-quotes | ~2,700 | Romantic, spooky sweetheart, movie, gothic, funny | After the intro | Modified 2026-05-10; names Poe, Shakespeare, Browning, Brontë and films, with no editions or years | Lists | Volume |

## Phase 2: gap
- **Table stakes:** cute, funny, dark/gothic, for him and for her groups; some literary lines.
- **Gap:** No page quotes classic lines exactly with edition and year. No page ties its grouping to love-style research. No page offers a gender-neutral "my person" group or a hard short-line cap (under 8 words). The Keats 13 October 1819 letter and Dickinson's "Proof" appear on none of them.
- **Not a gap (honest):** lifesuccessjournal already groups by cute, funny, dark/gothic, him, her and new relationships. Logged as a failed "mirrors a competitor" audit item.
- **Fan-out queries:** short quotes; quotes from poets; for him; for her; gender-neutral; is "How do I love thee" public domain; when Keats wrote "Love is my religion"; dark quotes in a new relationship; what a love style is; where to put a quote.
- **Angle:** see batchMeta.angle.
- **Overlap handling vs romantic-halloween-quotes:** none of its 10 public-domain lines is reused. It used Rossetti's "Remember", Dickinson's "Because I could not stop for Death" and Keats's "La Belle Dame"; this page uses "Echo", "Proof" and the Brawne letters. There is no fake-quote section. Lines are grouped by love style, not by use. A 5-gram check of every original line against all 82 sibling files (batch 1 and batch 2) gave 0 overlaps after five lines were reworded.

## Phase 3: sources (all fetched)
1. Benfante et al. 2024, *Heliyon* (Elsevier, CC BY), PMC11693915. Abstract read via the Europe PMC REST API. n=1,101; married or cohabiting people showed more Eros and Agape and less Ludus, Mania, Pragma and Storge than singles.
2. Özeren 2025, *Nursing Open* (Wiley OA, CC BY-NC-ND, so cited, not reused), PMC12476884. Abstract read. n=335; secure attachment correlates positively with storge and negatively with mania; obsessive and fearful attachment correlate with mania.
3. Pala & Güler 2026, *BMC Psychology* (CC BY-NC-ND), PMC13072604. Abstract read. 14 people married 15–31 years; they describe respect, love, commitment, trust and gratitude.
4. Gutenberg #2002, *Sonnets from the Portuguese*: Sonnet XLIII text verified.
5. Gutenberg #12242, Dickinson's three series: "Proof" (Series Two, 1891) verified.
6. Gutenberg #60433, Keats's letters to Fanny Brawne (Forman 1878): Letter I (postmark 3 July 1819) and Letter VIII (postmark 13 October 1819) verified.
- Also checked but not linked: Gutenberg #16950, Rossetti's "Echo" (the 1875 collected edition). The poem was first collected in 1862.
- Publisher exclusions applied: no Frontiers, SAGE or Taylor & Francis, and no papers Batch 1 used (Jamil, Meston & Frohlich, the 2026 Emotion haunted-attraction paper).
- findpapers queries: "love styles attitudes scale eros storge ludus", "darkness romantic attraction dim lighting intimacy", "humor styles romantic relationship satisfaction couples", "expressing affection verbal I love you romantic partners". No open-access paper on darkness or fear linked to romance came back other than the ones Batch 1 already used, so the love-style angle was taken instead.
- capcheck: none of the six URLs or papers appears in another b2 post. europepmc.org and gutenberg.org are cap-exempt domains.

## Brief claims checked
- The keyword's SERP could not be measured on Google this session; the DuckDuckGo measurement is recorded above.
- Keats's birthday is 31 October (1795). That makes the 13 October 1819 letter 18 days before his 24th birthday.

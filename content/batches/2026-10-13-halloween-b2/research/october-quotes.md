# Research brief: october quotes (row 58)

Slug `october-quotes`. Absorbs "halloween october quotes" and "hello october quotes". Theme: quotes. Category `festive-beats`.

## Phase 0: first-party data
facts.md was read directly; `npm run facts` was not run. It holds no Halloween or October usage data. The post uses three lines, quoted byte-verbatim:
- 48.3% phone opens (27,725 of 57,456 views), measured 2026-09-24. In the first 150 words.
- 11.1 average views per created page, measured 2026-09-24. In the first 150 words.
- Raksha Bandhan 2026 lead time (49.4% built on the day, n = 89), measured 2026-09-09. Labelled in the body as a different festival with a small sample.

## Phase 1: SERP
One WebSearch was used, for "october quotes". It searches a US-served index, not Google's ranking. Firecrawl was disconnected, so confidence is lower. Pages were fetched with ctx_fetch_and_index.

| # | Page | Size / count | Where the answer sits | Data cited | Format | Notes |
|---|---|---|---|---|---|---|
| 1 | success.com/october-quotes | ~2,300 words, 53 quotes | after a 2-paragraph intro | none | H2s: "Hello, October", letter-board, etc.; images | Own "SUCCESS®" letter-board lines; L. M. Montgomery line |
| 2 | goodgoodgood.co/articles/october-quotes | ~5,000 words, 85 quotes | after an intro | none; bookshop.org affiliate links | sections for poems, awareness days, birthdays | **Misquotes Thoreau as "month of painted leaves"** (the Gutenberg text says "for"). Carries the Frost "October" and Jackson "Bright Blue Weather" lines |
| 3 | bookroo.com/quotes/october | ~400 words, 4 quotes | immediate | none | tag page | Thin; weak |
| 4 | trvst.world/mind-body/october-quotes | ~4,000 words, 48 quotes | after an intro | SAD "around 5%" (Kurlansik 2012, stale); Tucker & Gilliland 2007 | 9 H2s, footnotes, byline | Only page with any research, and it is dated |
| 5 | blog.journey.cloud/october-quotes | ~1,200 words, 50 quotes | numbered list at once | none | flat list | SaaS blog. Attributions are unsourced (Brontë, Camus, Fitzgerald); weak |
| – | s.gr-assets.com (Goodreads mirror), capcut.com (birthday, off-intent), katiegilley.com (personal blog that admits its attributions are unverified) | | | | | All weak |

Weak results: 5 of 9 (the PLAN said 3). Gate 4 passes. "october quotes" is a 1–2 word head term. Long-tail alternatives: "hello october quotes for instagram", "public domain october poems with source", "short october quotes for letter board".

## Phase 2: gap
- **Table stakes:** Hello October lines, cosy/fall lines, Halloween lines, short captions, classic poets (Thoreau, Frost, Jackson, Montgomery).
- **The gap:** no page checks a single attribution against a primary text. One page prints Thoreau wrongly. None says that Frost is still in copyright in life+70 countries. None explains why leaves change colour, and none uses current research on autumn and mood. trvst's 2012 SAD figure is the only data, and it is stale.
- **Fan-out:** good October quote; Thoreau/Keats source; hello October caption; is Frost public domain; why leaves change colour; does autumn make you sad; can I use these on Instagram or in a shop; days in October; card wording; planner lines.
- **Angle:** the only October quotes page that checks every classic line word for word against Gutenberg (it catches the "month of painted leaves" misquote and Frost's UK copyright term). It explains leaf colour from SUNY ESF and seasonal mood from a 5,282-person study, and grounds caption length in the 48.3% phone-open rate.

## Phase 3: sources (all fetched and verified)
1. Gutenberg #23684, Keats, *Poems Published in 1820*. "To Autumn" stanzas 1 and 3 verified. Composed 19 Sept 1819 (Wikipedia API, not cited).
2. Gutenberg #9846, Thoreau, *Excursions* (1863). "Autumnal Tints" is headed [1862.]. Both lines verified; the text reads "for painted leaves".
3. Gutenberg #9825, Helen Jackson, *A Calendar of Sonnets* (1886). The "October" sonnet was verified.
4. Gutenberg #3021, Frost, *A Boy's Will* (1913). "October" lines 1–2 verified.
5. esf.edu "Why Leaves Change Color" (SUNY ESF, undated). Covers chlorophyll breakdown, carotenes and xanthophylls, anthocyanins, and the abscission layer. This is the subject source.
6. Europe PMC PMC7489524, Winthorst et al. 2020, *PLOS ONE*, CC BY, open access. Full text read: n = 5,282, small or very small effects, seasonality only among people high in neuroticism, no within-subject effect (n = 503). This is the peer-reviewed subject source.

Publisher checks: PLOS (not Frontiers, SAGE or T&F). No arxiv, no doi.org, no competitor. Gutenberg and Europe PMC are cap-exempt hosts. Capcheck is clean, and no sibling in either batch uses these papers or URLs.

### Brief claims found false or unverifiable
- **Frost "October" is "public domain".** That is true in the US only. Frost died in 1963, so the poem is in copyright until the end of 2033 under life+70 (UK/EU). The body says so.
- **"October's Bright Blue Weather" and Brontë's "Fall, leaves, fall".** Neither is on Gutenberg in any edition found; Brontë has only the 1846 Bell *Poems*, which lacks it. Neither was quoted. Jackson's verified 1886 "October" sonnet was used instead.
- **Keats "(1819)".** That is the composition year. Publication was 1820. Both are stated.
- **USDA Forest Service.** fs.usda.gov returned ENOTFOUND from this environment twice, so the SUNY ESF university explainer was used instead.

Searches tried with findpapers: "seasonal variation mood autumn", "autumn nature exposure wellbeing", "seasonality of mood general population", "fall foliage viewing wellbeing".

## Originality checks
55 original lines plus one in-prose caption. There are 0 five-word overlaps with 54 sibling files (Batch 1 and Batch 2) and 0 with the 6 competitor pages, which were re-fetched to check. No line reuses Batch 1 `halloween-quotes` (Montgomery's "Octobers" line is not used). There is no day-by-day list.

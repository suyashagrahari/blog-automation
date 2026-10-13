# Research brief — halloween-puns (row 48)

Keyword: **halloween puns** · slug `halloween-puns` · theme puns · archetype weak 3/10 (contested), band 10,000+/mo
Absorbs: halloween puns funny, halloween puns for adults, adult halloween puns, ghost puns, boo puns, skeleton puns, bone puns.
Head-term note: "halloween puns" is a 2-word head term and unwinnable short-term for this domain. Long-tail alternatives the page also serves: "ghost and boo puns for a halloween card", "clean halloween puns for adults", "skeleton and bone puns for captions".

## Phase 0 — first-party data
facts.md read directly (no `npm run facts`, per BRIEF §3). No Halloween usage data exists; only platform-wide lines used, labelled platform-wide:
- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- Average views per created page: 11.1 — measured 2026-09-24
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24
Template spec (template-spec.md) used for product features only (60-character question, pumpkin word, up to six photos, 8 Boo License costumes, premium 60-second voice note and 280-character reply).

## Phase 1 — SERP (WebSearch, 1 search used of 2)
Firecrawl MCP disconnected (BRIEF §9), so the SERP is the **WebSearch index, US-served, not Google's ranking — lower confidence**. Corroborated by the measured Google SERP in `content/keywords/2026-10-12-halloween-global/serps.md` row 15: "halloween puns | 3 weak | today, GH, rd, wordstream, wickerdarling; weak: pinterest, stompstickers x2, depositphotos — hard".

WebSearch top results: romper.com, picsart.com, wordstream.com, wideopencountry.com, static.intrafocus.com (scraped), helloswanky.com (shop blog), wiki.uep.edu.py PDF (spam), aol.com x2 (syndicated Parade-style lists). Weak in this index: 3 (intrafocus scrape, uep spam PDF, helloswanky shop blog). Gate 4 passes.

Fetched with ctx_fetch_and_index: romper (OK), picsart (OK), wideopencountry (OK). wordstream HTTP 403, aol x2 HTTP 404, helloswanky HTTP 429 — only 3 of the top 5 could be read in full.

| Page | Size / structure | Direct answer | Organisation | Data cited | Format | Tone / optimising for |
|---|---|---|---|---|---|---|
| romper.com "55 Silly Halloween Puns" (updated 26 Jul 2022) | ~55 lines, 5–6 H2 groups (general, ghost/boo, adult drinks, vampire…) | after an intro paragraph | by theme | none | bullets, byline, no FAQ, no table | breezy listicle; "for adults" = drinking puns ("sheet-faced", "pumpkin smashed") |
| picsart.com "Halloween puns that'll make you cackle" (27 Oct 2025) | ~100 numbered lines, 10 H2s by monster + one-liners + FAQ (4 Qs) | after an intro | by monster (trick-or-treat, witch, skeleton, ghost, vampire, zombie, monster, candy, pumpkin) | none | numbered lists, FAQ, CTA to its own poster editor | product funnel for its design tool |
| wideopencountry.com "99 Halloween Puns" (undated) | ~99 lines, H2s funny/skeleton/pumpkin/witch… | after 3 intro paragraphs | mixed Q&A jokes + puns | none | bold setups, images | entertainment listicle |
| wordstream.com | not readable (403) | — | — | — | — | marketing-pun angle (title) |
| aol.com (2 syndications) | not readable (404) | — | — | — | — | 85 / 133 puns per titles |

## Phase 2 — Gap analysis
- **Table stakes:** grouped by monster (ghost, skeleton, witch, vampire, pumpkin, zombie, mummy, candy); short copyable lines.
- **The gap:** none of the readable pages explains *how* a pun works (homophone vs near-homophone vs double meaning vs idiom-made-literal vs phrase swap) or which kind suits a caption, a card or a sign. None cites any research. None says what "for adults" means beyond alcohol. All three recycle the same stock lines (oh my gourd, humerus, boo-tiful, fang-tastic, creep it real, love at first bite, newlywebs).
- **Stale data:** romper last updated 2022; no data at all on any page.
- **Unanswered:** why do death puns feel funny rather than grim? Are near-sound puns worse than perfect-sound ones? What makes a pun clean for adults?
- **Fan-out sub-queries → H2s:** what is a pun / how puns work; ghost & boo puns; skeleton & bone puns; adult (clean) puns; puns for captions vs cards vs signs; how to use a pun in a card.

**Angle:** Wins by being the only post in the readable top results that writes 70 original, clean Halloween puns grouped by monster AND labels the mechanic behind each group (homophone, near-homophone, double meaning, literal idiom, phrase swap), backed by Kao et al. 2016 (435 sentences: near-sound puns rate as funny as perfect ones) and Sun et al. 2025 (pun sentences with negative words rated both more amusing and more negative), with SubhSandesh's 48.3% phone-open and 11.1 views-per-page figures showing puns are now read on a screen more than heard.

## Phase 3 — Sources (all fetched, verified)
| Source | Used for | Read | Licence | Date |
|---|---|---|---|---|
| Kao, Levy & Goodman, "A Computational Model of Linguistic Humor in Puns", Cognitive Science 40(5) — https://europepmc.org/article/PMC/PMC5042108 | 435 sentences; 65 identical-homophone + 80 near-homophone puns; 100 MTurk raters (1–7); no funniness difference identical vs near (t=0.13, p=.896); ambiguity + distinctiveness predict funniness, R²=0.25 | full text (Europe PMC XML) | CC BY-NC-ND — cited/linked only | online 2015-07-31 |
| Sun, Jiang, Yin, Li & Chang, "Neural representation of mixed feelings during real-time processing of negative words in pun-humor", Communications Biology 8:1455 — https://europepmc.org/article/PMC/PMC12514311 | 150 Chinese pun sentences built on negative words; behavioural n=42: pun sentences rated 5.06 amusing vs 2.96 non-humor, and 5.36 vs 4.39 negative; EEG n=36; mixed feelings | full text | CC BY-NC-ND — cited/linked only | 2025-10-10 |
| Wiktionary, "pun" — https://en.wiktionary.org/wiki/pun | definition: wordplay in which similar sounds or different definitions of words are deliberately confused; synonym paronomasia | full entry (API wikitext) | CC BY-SA; exempt reference | undated (continuously edited) |
| Shakespeare, Romeo and Juliet 3.1, MIT Complete Works — https://shakespeare.mit.edu/romeo_juliet/romeo_juliet.3.1.html | Mercutio, fatally wounded: "ask for me to-morrow, and you shall find me a grave man" | full scene | public domain | undated web edition |

Rejected: Palmann & Miller 2025 (used by halloween-jokes, BRIEF asks for a different paper); Frontiers pun papers PMC9131095, PMC9912983, PMC7011777 (frontiersin journal over cap); Zheng & Wang 2023 ERP (Taylor & Francis, banned); Merriam-Webster (competitor-ish lexical source); gutenberg.org (near cap in batch — MIT edition used instead).
Search terms (findpapers): "pun comprehension homophone humor", "pun processing lexical ambiguity brain", "wordplay humour puns appreciation".

## Sibling de-duplication
Every bullet line in all batch blogs (incl. halloween-jokes, halloween-jokes-for-kids) was compared by token overlap against the 70 lines here; no line reused. Single-word portmanteaus left to halloween-one-word-captions; work/office framing left to halloween-puns-for-work.

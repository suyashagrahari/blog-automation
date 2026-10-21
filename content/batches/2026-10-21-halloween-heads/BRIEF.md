# BRIEF — 2026-10-21-halloween-heads (BINDING) — Halloween HEAD terms, 5 posts

## A. Overrides for this batch (read first; they win over anything below)
- **5 rows only** (`PLAN.json`): halloween 2027, halloween costume ideas, halloween ecards, easy halloween
  drawings, halloween emojis. These are HEAD terms the 400 posts in b1–b8 never targeted as primary.
- **Siblings = all 400 posts in b1–b8** (`content/batches/2026-10-1*-halloween-b*/blogs/`). Your row's
  `siblings` list is the must-read set; the 5-word-overlap and no-reused-idea rules apply to all 400.
- **SERP:** Firecrawl MCP **works again** (`mcp__claude_ai_Firecrawl__firecrawl_search`, location
  "United States"; rate limit ~10/min, wait and retry on 429). The orchestrator's measured top-10 for every
  row is in `research/serp-snapshots.md` — start from it; you may spend at most 2 more searches.
- Section 9b (Batch 8 overlap map) and §10 source logs below are b8 history: use them only to avoid
  re-citing papers b8 already used. Caps (§5) count posts in THIS batch (5 posts).
- Halloween 2026 is in 10 days (Sat 31 Oct 2026). Nothing published now ranks for it; write for **Halloween
  2027 (Sun 31 Oct 2027)** and evergreen.
- Head terms are hard for this domain. Do the work anyway (user request) and say so plainly in
  `honestAssessment`.



Read before Phase 1. Overrides your task prompt where they conflict. Your row is one entry of
`PLAN.json`. Skill: `.claude/skills/blog-optimisation/SKILL.md` — run Phases 0–7 for your one
keyword. Phase 8 (remediation) is run later by the orchestrator. Do not spawn agents.

## 0. Treat framing claims in your prompt as unverified
If a claim is load-bearing, verify it. "The brief said X, the source says Y" goes in
`structuralLimitations` and in your report. That is the most useful thing you can send back.

## 1. Calendar and audience (verified)
- Halloween is **31 October every year**: Sat 31 Oct 2026, Sun 31 Oct 2027. All Saints' Day 1 Nov;
  Día de los Muertos 1–2 Nov; UK Bonfire Night 5 Nov. Verify anything else you print (timeanddate.com).
- **Write evergreen.** Pages published now realistically rank for Halloween 2027 (Gate 0). No "this
  year", no 2026-only framing in titles unless the keyword itself carries a year. Give 2026 and 2027 dates side by side whenever a date
  matters.
- The market is **global English** (US, UK, CA, AU, IN). Use the phrasing your row targets — UK
  "chat up lines", "fancy dress"; AU "dress ups". Keep spelling consistent within a post.

## 2. Mandatory links — BOTH /happy-halloween AND /happy-halloween-premium (user requirement)
- Every post links **https://subhsandesh.in/happy-halloween** AND **https://subhsandesh.in/happy-halloween-premium**,
  each with descriptive anchor text and a one-line reason that tells the reader which one suits them
  (regular: short interactive card, up to 6 photos, ~5 min to make; premium: cinematic, voice note up to
  60 s, up to 12 photos, unlock time, reply box, ~10 min). The verifier now requires both.
- `template-spec.md` lists every feature of both (re-verified live 2026-10-15, HTTP 200). **Describe only those features.**
- Place them AFTER the section that makes the reader want them, never in the first paragraph.
- They are **one-person greeting pages** with partner / bestie / family / kids modes. For party,
  school, office, trivia, decor or group posts, say plainly it is not a party tool; link it for the one
  person the reader wants to surprise.
- Plus exactly one alternative from `oneOfLinks` in `verify.config.json` (the verifier requires it; pick the one that genuinely fits and say why) — 3–4 internal links total,
  only `TEMPLATE_LINKS` URLs (`app/lib/prompt.ts`). **No `/blog/<slug>` links.**
- `batchMeta.templateUrls`: `https://subhsandesh.in/happy-halloween` first, then
  `https://subhsandesh.in/happy-halloween-premium`. `batchMeta.categorySlug`: **`festive-beats`** for every post.

## 3. Phase 0 — first-party data
- Read `content/facts.md` yourself. **Do NOT run `npm run facts`** (it breaks `factsUsed` on every
  earlier batch, and production DB reads are permission-blocked this session).
- **No Halloween usage data exists in facts.md.** Never state or imply how many Halloween pages were
  made, opened or answered.
- You may cite platform-wide lines where they genuinely bear on the reader's question (phone-open
  share, password rate, publish rate, views per page, build time) and the festival lead-time line,
  labelled as Raksha Bandhan data used as the nearest analogue. `factsUsed` strings are byte-verbatim.
- The template spec is first-hand product fact; it does not count toward the 3-facts minimum.

## 4. Phase 1 — SERP. HARD BUDGET: at most 2 searches for your row, total (prefer 1)
- **[b8 text — superseded by §A: Firecrawl works in this batch.]** WebSearch (US index) may already be at its session cap. Try it once; if it errors or returns nothing, measure the SERP with
  `ctx_fetch_and_index("https://html.duckduckgo.com/html/?q=<url-encoded keyword>", "<slug>-serp")`;
  if that returns 202 / a bot challenge, try `https://lite.duckduckgo.com/lite/?q=<keyword>`.
  Label the result in the brief: "WebSearch (US index)" or "DuckDuckGo, lower confidence".
- Fetch the top 5 competitor pages with **`ctx_fetch_and_index`** (WebFetch is blocked). Pages that
  return 403/429 may be judged from their snippet only; say so. Count hijacked-subdomain spam as
  weak, never analyse it as a top-5 page.
- **No browser tools** (PolterTab, Playwright, claude-in-chrome): they share one tab across agents.
- `content/keywords/2026-10-12-halloween-global/serps.md` holds 40 measured SERPs. Known incumbents:
  today.com, rd.com, parade.com, goodhousekeeping.com, cosmopolitan.com, adobe.com,
  hallmark/americangreetings, imdb/variety, costume retailers. Competitors — **never cite or link
  them** (this includes any page that itself ranks top-5 for your keyword).
- **Gate 4 abort:** if your top 10 has 0 weak results, write only the research brief and report why.

## 5. Phase 3 — research
- `node content/batches/2026-10-21-halloween-heads/findpapers.mjs "<phenomenon query>"` (Crossref +
  Europe PMC; no search budget). Search the **phenomenon**: "costume wearing identity play",
  "humor in romantic flirtation", "pickup lines first impressions study", "couple shared novel
  activities relationship satisfaction", "fear arousal attraction misattribution", "trick-or-treating
  history folklore", "Samhain Celtic calendar", "children humor development riddles", "gift giving
  relationships", "social media captions self-presentation", "group identity costume"…
- Crossref indexes predatory journals (IJSR, IJRASET, IJCRT, IRJMETS): **never cite them.**
- At least 2 sources genuinely about your subject; at least 1 peer-reviewed, open access. At most 1
  generic statistic (nrf.com is capped at 3 posts batch-wide: use it ONLY if your post is about spending,
  budget, gifts or costumes, and check capcheck first). Wikipedia 0–2, disambiguation only.
- Fetch every source and verify it says what you claim; if only the abstract was readable, say so.
- **Caps across this batch:** a URL — or a PAPER (same PMC id / DOI on any host) — in at most 2 posts;
  a domain or journal in at most 3. Run `node content/batches/2026-10-21-halloween-heads/capcheck.mjs`
  before you finish. Siblings write in parallel; prefer specific sources nobody else will pick.
- Avoid entirely: Taylor & Francis, Sage, arxiv.org, aclanthology.org (concentrated last batch).

## 6. Writing rules
- English body. Rows naming another language (row 304 Spanish, any other-language lines) → English
  frame with the native-language lines + English gloss.
- **Every line you offer (pickup lines, captions, wishes, quotes, puns, jokes, nicknames) is ORIGINAL.**
  Never copy a competitor's list. No song lyrics. No quotes from film scripts or books beyond a short
  attributed public-domain line (Poe, Shakespeare are fine; modern films are not).
- **Keep it clean.** No sexual or "dirty" lines, even where the SERP has them; say why in one line if
  your keyword invites it.
- Paragraphs: prose 2–3 sentences. **Copyable lines go in bulleted lists or blockquote lists**, never
  as one-line prose paragraphs (the most common failure last batch).
- Every H2 has a specific number, date, price or named source. One comparison table with real values.
  8–12 FAQs in `article.faqs` + FAQPage JSON-LD, **never inside contentMarkdown**. Body 1,500–1,800
  words (plain whitespace split), FAQs excluded.
- Kids rows: genuinely kid-safe; mention the template's Kids tone only as template-spec states it.

## 7. Hygiene (lessons from the last 200 posts)
- **Scratch files: `<your-slug>-<purpose>.*` only.** Never `body.md`/`draft.md` — the scratchpad is
  shared with 9 other agents and generic names have overwritten siblings' posts before.
- **Never save downloads in the repo root**; use the scratchpad with your slug prefix.
- Before writing your JSON, confirm its H1 is your own keyword's.
- `batch.json` exists: run `node scripts/verify-batch.mjs content/batches/2026-10-21-halloween-heads`
  from the repo root and fix your own lines until clean. Ignore problems on sibling slugs. Do not edit
  `batch.json`, `PLAN.json` or any sibling's files.

## 8. Output and report
Write only `blogs/<slug>.json` and `research/<slug>.md`. Report back in under 150 words: slug, body
words, FAQ count, searches used (Firecrawl/WebSearch), weak count in your top 10, sources (domains),
audit failures, one-line honest assessment, and any brief claim you found false.

## 9. Lessons carried over from Batches 1–7 (350 posts — read them)
- **Batches 1–7 are sibling sets:** `content/batches/2026-10-12-halloween-b1/blogs/`,
  `content/batches/2026-10-13-halloween-b2/blogs/`, `content/batches/2026-10-13-halloween-b3/blogs/`,
  `content/batches/2026-10-13-halloween-b4/blogs/`, `content/batches/2026-10-13-halloween-b5/blogs/`,
  `content/batches/2026-10-14-halloween-b6/blogs/`, `content/batches/2026-10-14-halloween-b7/blogs/`.
  Read the H2s of every post your prompt names; reuse NO line (5-word overlap check against ALL 350
  files) and NO idea (costume pairs, games, recipes, designs, gift items, date plans). Prefer sources
  none of them used; their source logs are §10 of each batch's BRIEF.md. Caps are counted per batch.
- Link papers via **europepmc.org** (cap-exempt), not `doi.org` (counted as a domain; it filled in b6)
  or pmc.ncbi.nlm.nih.gov. gutenberg.org and archive.org are also cap-exempt.
- **No price wording** ("for free", "costs nothing") — the verifier rejects it. Label estimates.
  Rows with a budget in the keyword (e.g. "under 25 dollars") give prices as labelled, dated estimates
  ("about $4 at major US retailers, Oct 2026 EST") and never claim a retailer's current price as fact.
- **Comparison table: 3–5 rows, ALWAYS.** Group rows; keep per-item detail in H3s.
- **Paragraphs:** prose 2–3 sentences; no one-sentence lead-ins; copyable lines in lists.
- **Outbound links: 3–6.**
- **Banned publishers:** Frontiers, SAGE (Psych Science, Evol Psych, JSPR, PSPB), Taylor & Francis
  (incl. Dove Medical Press), Elsevier. findpapers returns them first — check the publisher.
- **Journal cap is enforced by hand:** count a JOURNAL (PLOS ONE, Scientific Reports, any MDPI title,
  BMC Psychology, PNAS, Nat Commun) as one "domain" for the 3-post cap, even when linked via Europe PMC.
  Grep sibling `batchMeta.sources` in this batch's blogs/ for the journal name before you commit.
- **Do not work around bot walls / CAPTCHAs / proof-of-work pages.** Official API, else snippet-only and say so.
- No first-party Halloween data exists: the "first-party table column" item fails honestly; never force it.
- **Swap test failed in 16 b6 posts** — the usual cause was a generic safety source (CPSC, FDA, CDC) that
  could sit in any costume/decor post. Prefer a source only YOUR post could cite.
- Writers in parallel can collide: re-read this batch's blogs/ folder just before you finalise and swap
  any clashing idea.
- Time-sensitive facts (platform features, prices, laws, trends): date-stamp them ("as of October 2026").
- **Cannibalisation:** compare your SERP top 10 with the closest sibling slug(s). If you share 4+ URLs,
  pick a clearly different sub-intent (audience, format, constraint) and record the overlap count.
- Run capcheck BEFORE you fetch a gov source (gov caps fill in an hour).
- **Writers' corrections are the most valuable output.** Verify every folklore/origin/"fact" claim at a
  primary or scholarly source; viral misattributed quotes are the norm (b6 found a "Mary Shelley" quote
  that is from the 1994 film, and a "Phantom" quote that isn't in Leroux). US public domain = published
  1930 or earlier as of 1 Jan 2026.
- **Gift/surprise rows:** no affiliate-style product roundups, no brand promotion, no claimed prices as
  fact. Ideas must be things a reader can make, assemble or plan; name a product category, not a SKU.
- **Relationship rows:** inclusive (don't assume gender roles beyond what the keyword names), consent-
  aware for ask-out / crush rows (a clear easy "no" option; never pressure, never surprise in public
  if it risks embarrassment). Teens row: age-appropriate, parent-aware, no alcohol.

- **b7 lessons:** (1) the swap test failed in 37/50 posts because sibling rows drew on one research pool — your prompt names a research PHENOMENON for your row; search that, not the generic topic. (2) The /happy-halloween "No" button runs away (template-spec): never recommend it for a first ask or to anyone who hasn't already said yes. (3) Journals beyond megajournals fill too (JPSP, Eur J Psychol, Emotion, Arch Sex Behav hit 3) — grep this batch's `batchMeta.sources` for the journal name. (4) Citing a banned publisher's finding via a press release is a workaround — don't; describe it unlinked or skip it. (5) Check b1–b7 for a paper before calling it "new".
- **Kids / school / work rows:** genuinely kid-safe and workplace-safe; for office rows name inclusivity (not everyone celebrates; religious observance; opt-in costumes) with a real HR/employment source. The templates are one-person greeting pages — say so plainly in party/office/class rows.
- **Religion row (370):** balanced, respectful, sourced to the denominations' own statements or scholarly work; present the range of Christian views, never a verdict.

## 9b. Batch 8 overlap map — read these siblings; reuse nothing
- **Couple games/dates:** b2 `halloween-games-for-couples`, b5 `halloween-questions-to-ask-your-boyfriend`, b5 `halloween-conversation-starters`, b6 `halloween-relationship-quiz`, b6 `halloween-couple-challenges`, b6 `halloween-bucket-list`, b1 `halloween-date-ideas-for-couples`/`-at-home`/`-for-adults`, b7 `halloween-dinner-date-ideas`, `first-halloween-together-as-a-couple`. b7 `halloween-surprise-for-boyfriend` cites a haunted-attraction bonding paper (Wiley 2026, Emotion).
- **Music/movies/books:** b4 `halloween-songs`, b4 `halloween-party-playlist`, b2 `halloween-movies-to-watch`, `family-halloween-movies`, b1 `halloween-movies-for-kids`, b4 `halloween-movies-for-toddlers`, b5 `non-scary-halloween-movies`, `romantic-halloween-movies`, `halloween-tv-episodes`, b3 `halloween-movies-on-netflix`, b5 `halloween-movies-on-disney-plus`, b3 `halloween-movie-trivia`, b7 `horror-movie-love-quotes`, b6 `halloween-ghost-stories`.
- **Captions/puns/pickup/sayings:** b7 caption set, b5 `halloween-captions-for-boyfriend`, b2 `halloween-captions-for-couples`, b1 `halloween-puns`, b3 `halloween-food-puns`, b7 `pumpkin-puns`/`witch-puns`, b1/b2/b4/b5/b6 pickup-line set (incl. b6 `zombie-pickup-lines`, b5 `vampire-pickup-lines`), b6 `halloween-slogans`, b5 `halloween-hashtags`.
- **Party/games:** b1 `halloween-party-ideas`/`-themes`/`-games`, b2 `halloween-party-activities`/`-games-for-kids`/`-favors`, b4 `halloween-games-for-adults`, b6 `halloween-house-party-ideas`, `halloween-costume-party-ideas`, `halloween-party-checklist`, `halloween-scavenger-hunt`, `halloween-bingo`, `halloween-charades`, `halloween-pictionary`, `halloween-riddles`, b6 `halloween-dinner-ideas`, `halloween-charcuterie-board`, b3 `halloween-party-food-ideas`, b5 `halloween-trivia-questions`.
- **Work:** b2 `halloween-costumes-for-work`, `halloween-wishes-for-colleagues`, b1 `halloween-puns-for-work`, b3 `halloween-quotes-for-work`, b4 `halloween-team-costumes`, b6 `halloween-games-for-the-office`, b1 `halloween-captions-for-business`, b6 `halloween-slogans`, b5 `halloween-hashtags`.
- **Culture/history:** b2 `history-of-halloween`, b4 `what-does-halloween-mean`, `why-is-halloween-celebrated`, `halloween-colors-meaning`, `halloween-around-the-world`, b6 `halloween-traditions`, `halloween-facts`, `halloween-superstitions`, `what-is-samhain`, `why-do-we-wear-costumes-on-halloween`, `halloween-in-mexico` (owns the Mexico City parade 2016), b3 `trick-or-treat-quotes`, b4 `trunk-or-treat-ideas`, `things-to-do-on-halloween-instead-of-trick-or-treating`, b5 `is-halloween-a-public-holiday`.
- **Kids/school:** b2 `halloween-costume-ideas-for-kids`, b5 `halloween-costumes-for-school`, b4 `halloween-ideas-for-teachers`, b5 `halloween-quotes-for-teachers`, b1 `halloween-messages-for-kids`, b6 `halloween-science-experiments`, `halloween-lunchbox-jokes`, b3 `halloween-ideas-for-kids`, b6 `teal-pumpkin-project`, `halloween-candy-alternatives`.
- **Costumes:** b6 `halloween-costume-ideas-with-a-black-dress` (382 red dress must reuse none), b6 `halloween-costumes-for-plus-size`/`-short-hair`/`-curly-hair`, b4 `halloween-costumes-for-glasses-wearers`, b7 `halloween-couple-costumes-for-big-guys`, b1 `group-halloween-costumes`, `trio-halloween-costumes`, `halloween-costumes-for-best-friends`, b4 `girl-group-halloween-costumes`, b3/b5 couple-costume set.
- **Announcements/messages:** b5 `halloween-baby-announcement` (394 gender reveal ≠ announcement), b4 `halloween-wedding-ideas`, b7 messages set.
- **In-batch pairs (written concurrently):** 354 truth-or-dare vs 355 would-you-rather; 357 couple playlist vs 358 love songs vs 399 kids songs (no song in two posts' main lists); 360 four friends vs 361 five friends; 363 office party vs 371 employee email vs 373 virtual team building vs 374 contest categories vs 375 office door; 364 social posts vs 372 email subject lines; 365 dinner party vs 376 murder mystery; 367 vs Day of the Dead vs 380 All Hallows' Eve vs 369 symbols vs 368 carving vs 381 trick-or-treat history vs 370 Christians; 378 treasure hunt vs 377 escape room; 383 kids books vs 400 adult books; 384 classroom party vs 397 kids trivia vs 391/392 teachers/students; 386 hot vs 387 cold weather costumes; 388 safety vs 389 age to stop; 395 candy puns vs 396 sign sayings.

## 10. Live spent-source notes (orchestrator appends as rows land)
- (b7 sources are logged in the b7 BRIEF §10; caps reset per batch.)
- **Used by halloween-truth-or-dare-for-couples:** Europe PMC Sci Rep x2 (Fornari, Epstein — **Sci Rep 1 post**), Commun Psychol, J Adolesc (Andrews & Dawes). Aron 1997 PSPB described unlinked. Self-disclosure papers spent — 355 uses others. 48 truths/dares owned.
- **Used by halloween-would-you-rather-for-couples:** Europe PMC Int Rev Soc Psychol 2026 (Dziura), SCAN 2023, Innov Aging 2025; doi.org Tidwell 2012 Personal Relationships (abstract; doi.org 1 post). Similarity/attraction papers spent.
- **Used by horror-movie-pickup-lines:** Europe PMC Matz 2026 Sci Rep speed dates (**Sci Rep now 2 posts — ONE left**), Devenport 2025 Behav Sci (**MDPI 1 post**); gutenberg Frankenstein 1818. 25 film-premise lines owned.
- **Used by haunted-house-date-tips:** the17thdoor.com, headlesshorseman.com (posted safe-word/no-touch rules); Europe PMC Kerr 2019 Emotion (abstract); osf.io Scrivner/Clasen horror-fan types (abstract; osf 1 post). Recreational-fear papers spent.
- **Used by halloween-breakfast-in-bed:** Europe PMC Foods 2022 plate beauty + IJERPH 2017 scalds (both MDPI — **MDPI now 2 posts, ONE left**), PeerJ 2016 odd/even plating; fda.gov eggs (fda 1 post); gov.uk FSA eggs (gov.uk 1 post). Plating-aesthetics papers spent — 365 must use others.
- **Used by halloween-captions-for-girlfriend:** pewresearch.org; publicera.kb.se JDSR 2024; digitalcommons.bucknell.edu Goetz 2026 thesis (abstract); help.instagram.com (1 post). Cannibalisation flag: ~5 SERP URLs shared with b7 couple-costume-captions — narrowed to captions about her.
- **Used by halloween-costumes-for-4-friends:** Europe PMC J Nonverbal Behav 2026, PLOS ONE 2010 Moussaïd walking groups (**PLOS ONE 1 post**), Mem Cogn 2024 Brown-Schmidt; gutenberg Grimm Bremen Town Musicians, KJV Revelation 6 (no "Pestilence" horseman in KJV). Elements/seasons/card suits/band sets are in b1 group-costumes — don't use.
- **Used by halloween-playlist-for-couples:** Europe PMC Sci Rep 2019 couples music (**Sci Rep FULL — do not cite**), Behav Sci 2024 (**MDPI FULL, 3 posts — do not cite**), Ann NYAS 2026; support.spotify.com; support.apple.com x2. F1000/Open Research Europe = Taylor & Francis company — banned. 25 songs owned; 358/399 must share none.
- **Used by halloween-songs-about-love:** Europe PMC Taruffi 2014 + Eerola 2016 (PLOS ONE — **PLOS ONE now 2 posts, ONE left**); gutenberg Child Ballads x4. Owns 5 ballads + 12 recorded dark-love songs — 399 kids songs shares none.
- **Used by halloween-couple-bucket-list:** Europe PMC J Palliat Med (abstract), JMFT 2026, Sci Adv 2020; gutenberg Burns 1785 (Halloween poem), Wharton 1910; batweek.org. Burns "Halloween" 1785 now used — 369/380/381 may cite it only if essential.
- **Used by halloween-office-party-ideas:** Europe PMC Masood 2026 J Hosp Med, Searby 2026 BMC Nursing; eeoc.gov religious guidance (eeoc 1 post); acas.org.uk food/fasting (acas 1 post); fda.gov allergens (**fda.gov now 2 posts — ONE left**). Owns run-sheets, budget per head, allergen card, alcohol/costume rules — 371/373/374/375 must not repeat; use different HR sources if possible (acas/eeoc have 2 slots each).
- **Used by halloween-costumes-for-5-friends:** Europe PMC Dunbar 1995 Hum Nat (abstract), Dale 2020 R Soc Open Sci, Halberstadt 2016 (**PLOS ONE FULL — do not cite**); oceanservice.noaa.gov; gutenberg Pride and Prejudice, Hesiod. Five senses / five-piece band already in b1.
- **Used by halloween-social-media-post-ideas:** Europe PMC Acta Inform Med 2025, JMIR Cancer 2026; facebook.com Pages Terms; ecfr.gov 16 CFR 255.5 (ecfr 1 post); w3.org x2. ftc.gov guidance pages 404 to the fetcher. Owns 31-day calendar + giveaway rules — 372 must not repeat giveaway/endorsement rules.
- **Used by halloween-dinner-party-ideas:** Europe PMC Embling 2021 Am J Clin Nutr, Dunbar 1995 Hum Nat (abstract; **Dunbar 1995 at URL cap 2 with 361**); gov.uk FSA x2 (**gov.uk now 2 posts — ONE left**). Owns costed make-ahead menus, 48-h leftovers rule, seating plan.
- **Used by friendsgiving-vs-halloween-party-ideas:** Europe PMC R Soc Open Sci 2024; gutenberg Durkheim; opm.gov; canada.ca; wiktionary x2. Muddled-intent keyword written as friends-only autumn gathering (pick/merge/girls' night).
- **Used by halloween-minute-to-win-it-games:** en.wikipedia Minute to Win It (wikipedia 1 post; NBC premiere 14 Mar 2010; Swedish format, Banijay); Europe PMC SUNRISE 2026 Eur J Pediatr, JAMA 2019 aspiration letter; ecfr.gov 16 CFR 1500.19 (**ecfr now 2 posts — ONE left**). Child choking/small-parts sources spent — 378/384 kids rows use others.
- **Used by halloween-vs-day-of-the-dead:** unesco.org; dra.revistas.csic.es Alonso Meneses 2022; gutenberg Kelley 1919; theconversation.com Lavery 2022 (theconversation 1 post); Europe PMC continuing-bonds + child-grief papers. Owns All Saints/All Souls link, Paz/Spectre-parade myth checks. Regional dates vary (30/31 Oct per Alonso Meneses vs 28 Oct per b6's source).
- **Used by why-do-we-carve-pumpkins-on-halloween:** wiktionary; archive.org Dublin Penny Journal 1836 + Ellis Rhyme Book 1851 (Stingy Jack, plain lantern); Europe PMC R Soc Open Sci 2016 (**R Soc Open Sci 2 posts — ONE left**), Theor Appl Genet 2012; ers.usda.gov. Hawthorne "Feathertop" is NOT 1835 and its pumpkin isn't lit; "jack-o'-lantern" = carved lantern 1834 (Wiktionary) vs 1837 (OED via Wikipedia). Owns jack-o'-lantern history.
- **Used by halloween-email-to-employees:** Europe PMC HSSC 2023, JAMIA Open 2026, SJWEH 2026; w3.org; acas.org.uk (**acas now 2 posts — ONE left**). Owns 7 email templates + send calendar + US/UK clock-gap note (London only 4 h ahead of NY on 30 Oct 2026) — 373 virtual must not re-explain the gap at length.
- **Used by should-christians-celebrate-halloween:** archive.org 1907 Catholic Encyclopedia (All Saints, no Samhain mention); vaticannews.va; witness.lcms.org; oca.org (repeats Celtic-origin claim); christianitytoday.com; eauk.org; scholarworks.umass.edu (abstract). 7 outbound (audit fail). Owns denominational views + Gregory III/IV dating — 380 uses different church sources.
- **Used by halloween-symbols-and-meanings:** doi.org Darrah 2024 J Am Culture (**doi.org now 2 posts — ONE left**); archive.org Orne 1898, Guptill 1915, Middlebury card 1909; gutenberg Macbeth; museumofthegrandprairie.org (candy corn — no primary record of "Wunderle 1888"). loc.gov blocked for this writer.
- **Used by halloween-email-subject-lines:** ideas.repec.org Sahni (abstract); journals.library.ualberta.ca Janke 2014; law.cornell.edu 15 USC 7704 (CAN-SPAM subject rule is in the statute); ico.org.uk PECR; support.google.com Gmail sender rules; unicode.org. ftc.gov 404, ecfr bot-walled for this writer.
- **Used by halloween-costume-contest-categories:** Europe PMC Myers 2006 judge bias (abstract); hal.science Laslier 2008 approval voting; shs.hal.science Baujard 2011 evaluation voting (all abstract); toybook.com Costume Association awards 2024. Owns award names by setting + ballot types.
- **Used by halloween-murder-mystery-party:** journals.uu.se Int J Role-Playing 2023 Xiong; umsl.edu Knox Decalogue (1929; UK copyright to end-2027, 2 short phrases only; Rule V racist — not reproduced); Europe PMC BMC Public Health 2026. Owns original whodunit scenario.
- **Used by halloween-escape-room-at-home:** Europe PMC BMC Med Educ 2025, Med Sci Educ 2021, Psychon Bull Rev 2026; en.wikipedia Koszalin escape-room fire (**wikipedia 2 posts — ONE left**). Owns "Clock-Keeper's Last Midnight" room + never-lock-a-door rule.
- **Used by halloween-door-decorating-ideas-for-office:** umkc.edu (NFPA 80-based door policy), clarkson.edu, access-board.gov (ADA sign zone), Europe PMC SJWEH (2 posts) + BMC Health Serv Res; acas.org.uk (**acas FULL, 3 posts**). NFPA 101 / BS 8300 not open.
- **Used by halloween-virtual-team-building:** Europe PMC Bergmann 2022 CSCW, Korkmaz 2025 BMC Public Health; support.microsoft.com x2 (Teams breakout, captions); nist.gov; legislation.gov.uk Summer Time Order. timeanddate.com bot-walled.
- **Used by halloween-treasure-hunt-for-kids:** gutenberg Treasure Island; thecorestandards.org reading by grade; Europe PMC npj Sci Learn 2025 curiosity, Injury Epidemiology 2021 tip-overs. Owns reading-age clue trails + hiding-spot safety.
- **Used by all-hallows-eve-meaning:** bosworthtoller.com (OE hālga); cambridge.org Timofeeva 2018 (cambridge 1 post); gutenberg; churchofengland.org Common Worship; archive.org Book of Occasional Services 2003; books.google.com spelling counts. Dictionaries date different forms (1550–60 / OED 1556 / c.1300).
- **Used by halloween-classroom-party-ideas:** Europe PMC J Sch Health 2026, Occup Ther Int 2026, Clin Transl Allergy 2024; glenview34.org (district guideline); capri.campbellusd.org (school notice). Owns stations + run-sheets + volunteer ratios — 397 trivia and 391/392 messages must not repeat.
- **Used by halloween-traditions-to-start:** Europe PMC Fiese 2002 J Fam Psychol (abstract), Zaborskis 2007 BMC Public Health, Hosokawa 2022 CAPMH (Halloween 50.4%); schoolcraftcounty.net Halloween parenting-time schedule. Family-ritual papers spent.
- **Used by halloween-costume-ideas-with-a-red-dress:** Europe PMC Psychol Res 2023, PeerJ 2021 (PeerJ 2 posts), Sci Adv 2025 (Sci Adv 2 posts — ONE left); gutenberg Perrault (Lang), Through the Looking-Glass, Andersen Red Shoes. Perrault 1697 has no woodcutter; Poe's Red Death isn't in red (Leroux 1910 is).
- **Used by halloween-costumes-for-tall-people:** Europe PMC eLife, PLOS Mental Health (separate journal from PLOS ONE), "Duck!" (abstract); access-board.gov (2 posts — ONE left); gutenberg x2 (Frankenstein 1818 "eight feet", Sleepy Hollow).
- **Used by halloween-books-for-kids:** eric.ed.gov 1996 (abstract); Europe PMC BMJ Paediatr Open 2025, J Child Lang 2025; gutenberg Grimm; archive.org Sketch Book 1st ed; help.libbyapp.com (1 post). LoC/WorldCat blocked — Open Library LoC records used. 400 adult books shares no title and should not cite Libby (swap test).
- **Used by halloween-costumes-for-hot-weather:** worldweather.wmo.int (Oct monthly means); journals.uni-lj.si Tekstilec 2023 (abstract); healthychildren.org AAP; Europe PMC Narra J 2024 (abstract), Br J Sports Med 2025. 387 cold must avoid WMO + Tekstilec.
- **Used by halloween-costumes-for-cold-weather:** Europe PMC Kim 2026 J Physiol Anthropol, Xu 2021 Int J Biometeorol; healthychildren.org winter (**healthychildren 2 posts — ONE left**); climate.weather.gc.ca, ncei.noaa.gov, metoffice.gov.uk. Sunsets 31 Oct: N. America 5:39–6:11pm (DST until 1 Nov 2026 / 7 Nov 2027), UK/Scandinavia 3:59–4:37pm.
- **Used by trick-or-treat-safety-tips:** Europe PMC JAMA Pediatr (Staples, Yip & Redelmeier — online 30 Oct 2018, Jan 2019 issue), Injury Epidemiology (2 posts), Child Youth Care Forum 2026, Cochrane (abstract), Clin Child Fam Psychol Rev (abstract). Pedestrian-death study spent — 389 must not cite it.
- **Used by halloween-messages-for-students:** Europe PMC npj Sci Learn 2023 inflated praise (npj Sci Learn 2 posts), Br J Educ Psychol 2022; studentprivacy.ed.gov FERPA photos; ico.org.uk (2 posts — ONE left). 47 teacher→student lines owned.
- **Used by what-age-to-stop-trick-or-treating:** library.municode.com x2, law.lis.virginia.gov, today.yougov.com 2021, Europe PMC Allen 2014 Child Dev (abstract), Janusz 2018 J Adult Dev. Chesapeake Ord. 19-O-038 (12 Mar 2019): over-12 → over-14; Norfolk, Va Beach, Hampton, Newport News, Portsmouth still ban over-12 (2026 code).
- **Used by why-do-we-trick-or-treat:** archive.org Burne Shropshire Folk-Lore; dchp.arts.ubc.ca; loc.gov x3 newspapers 1933/1942/1950; udspace.udel.edu Best poisoned-candy tally. "WWII pause" false (1942–44 papers report trick-or-treating); UNICEF 1950 confirmed; 1917/1927 for different phrase forms.
- **Used by halloween-messages-for-teachers:** Europe PMC Early Child Educ J 2026, BMJ Open 2026; resources.finalsite.net Edina Policy 421; revisor.mn.gov Minn. Stat. 471.895 ($5 trinket exception). Minnesota-only gift rules (flag).
- **Used by halloween-messages-for-neighbors:** Europe PMC J Aging Res 2012, BMJ Open 2023 (BMJ Open 2 posts), J Gerontol B 2026; police.govt.nz; warrington.gov.uk; legislation.gov.uk Noise Act 1996 (legislation.gov.uk 2 posts — ONE left). Porch light = custom, not rule.
- **Used by candy-puns-for-halloween:** Europe PMC Psychon Bull Rev 2026, Cognitive Science 2026; dsal.uchicago.edu Hobson-Jobson 1903 ("candy" p.156); en.wiktionary x2. 58 brand-free candy puns owned.
- **Used by lgbtq-couple-halloween-costumes:** Europe PMC Auger 2026 drag review; ojs.interpersonajournal.com Kent 2011 (abstract); humandignitytrust.org (66 jurisdictions criminalise; 13 cross-dressing laws); gutenberg Ovid/Riley, Hichens. "Wilde green carnation 1892" story unverified — omitted.
- **Used by halloween-gender-reveal-ideas:** journals.uvic.ca Jack 2020; Europe PMC Prenat Diagn 2025, Arch Sex Behav 2023; da.sbcounty.gov El Dorado plea; theconversation.com (**theconversation 2 posts — ONE left**). Karvunidis not verifiable at a primary source — omitted.
- **Used by halloween-sayings-for-signs:** ada.gov 703.5; mutcd.fhwa.dot.gov 2A.13/2A.07; Europe PMC Legge & Bigelow 2011 J Vision (abstract); w3.org WCAG 2.2. Owns sign word budgets + letter heights + contrast ratios.
- **Used by halloween-trivia-for-kids:** batcon.org (1,400+/1,500+ species inconsistency), australian.museum, barnowltrust.org.uk, extension.illinois.edu, aa.usno.navy.mil moon phases, gutenberg Kelley 1919, Europe PMC Leonard & Deevy 2020 JSLHR (abstract). 7 outbound (audit fail).
- **Used by halloween-songs-for-kids:** Europe PMC Infancy 2026, BMC Psychology 2026; who.int; gutenberg Newell 1883 songbook; guides.library.cornell.edu. "Ghost of John" earliest found 1981 textbook — not PD-verified, words not printed. WHO gives no child volume limit.
- **Used by halloween-books-for-adults:** journal.sjdm.org Rozin 2013 benign masochism; Europe PMC Affan 2026 BMC Psychology (BMC Psych 2 posts); archive.org Rogers 2002 OUP; gutenberg x2. Turn of the Screw first in book form in The Two Magics (1898).
- **Used by 31-days-of-halloween-movies:** firstmonday.org; Europe PMC; copyright.gov; catalog.afi.com; loc.gov (2 posts); archive.org. Night of the Living Dead NOT cleanly PD (1986 Image Ten copyright per AFI); Dracula/Frankenstein (1931) enter US PD 1 Jan 2027.

# BRIEF — 2026-10-15-halloween-b8 (BINDING) — Halloween global, Batch 8 of 8

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
- **Firecrawl MCP is disconnected (out of credits). WebSearch (US index) may already be at its session cap.** Try it once; if it errors or returns nothing, measure the SERP with
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
- `node content/batches/2026-10-15-halloween-b8/findpapers.mjs "<phenomenon query>"` (Crossref +
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
  a domain or journal in at most 3. Run `node content/batches/2026-10-15-halloween-b8/capcheck.mjs`
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
- `batch.json` exists: run `node scripts/verify-batch.mjs content/batches/2026-10-15-halloween-b8`
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

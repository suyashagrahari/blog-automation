# BRIEF — 2026-10-14-halloween-b7 (BINDING) — Halloween global, Batch 7 of 8

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
- `template-spec.md` lists every feature of both (re-verified live 2026-10-14, HTTP 200). **Describe only those features.**
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
- `node content/batches/2026-10-14-halloween-b7/findpapers.mjs "<phenomenon query>"` (Crossref +
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
  a domain or journal in at most 3. Run `node content/batches/2026-10-14-halloween-b7/capcheck.mjs`
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
- `batch.json` exists: run `node scripts/verify-batch.mjs content/batches/2026-10-14-halloween-b7`
  from the repo root and fix your own lines until clean. Ignore problems on sibling slugs. Do not edit
  `batch.json`, `PLAN.json` or any sibling's files.

## 8. Output and report
Write only `blogs/<slug>.json` and `research/<slug>.md`. Report back in under 150 words: slug, body
words, FAQ count, searches used (Firecrawl/WebSearch), weak count in your top 10, sources (domains),
audit failures, one-line honest assessment, and any brief claim you found false.

## 9. Lessons carried over from Batches 1–6 (300 posts — read them)
- **Batches 1–6 are sibling sets:** `content/batches/2026-10-12-halloween-b1/blogs/`,
  `content/batches/2026-10-13-halloween-b2/blogs/`, `content/batches/2026-10-13-halloween-b3/blogs/`,
  `content/batches/2026-10-13-halloween-b4/blogs/`, `content/batches/2026-10-13-halloween-b5/blogs/`,
  `content/batches/2026-10-14-halloween-b6/blogs/`.
  Read the H2s of every post your prompt names; reuse NO line (5-word overlap check against ALL 300
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

## 9b. Batch 7 overlap map — 41 of 50 rows have close siblings. Read them; reuse nothing.
- **Couple ideas/dates:** b1 `free-halloween-date-ideas`, `halloween-date-ideas-at-home`,
  `halloween-date-ideas-for-adults`, `halloween-date-ideas-for-couples`, `halloween-for-boyfriend-and-girlfriend`,
  `halloween-ideas-for-boyfriend`, `halloween-ideas-for-girlfriend`, `halloween-activities-for-couples`;
  b4 `halloween-ideas-for-wife`, `halloween-long-distance-relationship-ideas`; b5 `virtual-halloween-date-ideas`,
  `halloween-movie-night-for-couples`, `halloween-games-for-couples`; b6 `halloween-dinner-ideas`,
  `halloween-couple-challenges`.
- **Gifts/boo baskets:** b1 `boo-basket-ideas`, `halloween-gift-ideas-for-boyfriend`; b2
  `halloween-gift-ideas-for-girlfriend`; b4 `what-is-a-boo-basket`, `boo-basket-for-wife`,
  `boo-basket-ideas-for-boyfriend`, `boo-basket-ideas-for-girlfriend`, `boo-basket-for-best-friend`,
  `boo-basket-for-kids`; b6 `halloween-boo-grams`, `youve-been-booed`.
- **Messages/letters/wishes:** b1 `happy-halloween-wishes`, `halloween-messages-for-adults`; b2
  `halloween-love-messages`, `halloween-messages-for-boyfriend`; b3 `halloween-sweet-messages`; b4
  `halloween-love-letter`; b5 `halloween-card-for-boyfriend`, `halloween-poems-for-boyfriend`,
  `halloween-quotes-for-girlfriend`; b4 `halloween-quotes-for-boyfriend`; b3 `halloween-wishes-in-french`.
- **Nicknames/pickup/puns:** b1 `halloween-nicknames-for-boyfriend`; b4 `halloween-couple-nicknames`;
  b1 `halloween-pickup-lines`, `-for-girls`, `-for-guys`, `-in-spanish`; b2 `ghost-pickup-lines`,
  `halloween-pickup-lines-for-tinder`; b4 `witch-pickup-lines`; b1 `halloween-puns`, `halloween-puns-for-work`;
  b2 `halloween-love-puns`; b3 `halloween-food-puns`; b5 `halloween-puns-for-girlfriend`, `halloween-puns-for-kids`.
- **Captions/quotes:** b1 `halloween-captions-for-stories`, `halloween-captions-for-girls`; b2
  `halloween-captions-for-instagram`, `halloween-captions-for-couples`, `halloween-captions-for-best-friends`,
  `witch-quotes`, `halloween-movie-quotes`, `halloween-love-quotes`; b3 `halloween-captions-with-friends`,
  `spider-captions-for-instagram`; b4 `halloween-engagement-captions`; b5 `halloween-costume-captions`,
  `halloween-captions-for-boyfriend`, `halloween-selfie-captions`; b6 `spooky-love-quotes`; b5 `romantic-halloween-movies`.
- **Costumes/outfits/photos:** b3 couple-costume set (simple, scary, unique, movie, dog, baby); b5
  `matching-halloween-costumes-for-couples`, `funny-couple-halloween-costumes`, `halloween-costume-ideas-for-teens`,
  `halloween-costume-ideas-for-boys`; b6 `last-minute-halloween-costumes`; b2 `halloween-couple-outfit-ideas`,
  `halloween-outfit-ideas`, `halloween-couple-photoshoot-ideas`; b4 `halloween-couple-poses`; b6 `ghostface-couple-photoshoot`.
- **Makeup/decor/pumpkins:** b2 `easy-halloween-makeup`, b5 `halloween-face-paint-ideas`, b1
  `halloween-makeup-captions`; b2 `diy-halloween-decorations`, `halloween-decorations-ideas`; b4
  `halloween-porch-decorations`; b5 `when-to-put-up-halloween-decorations`; b3 `pumpkin-carving-ideas`.
- **Teens:** b2 `halloween-games-for-teens`, b4 `halloween-jokes-for-teens`, b5 `halloween-costume-ideas-for-teens`.
- **In-batch splits (written concurrently — each row owns ONLY its lane):**
  - 321 boo basket for husband (his interests, assembled) · 322 under $25 (budget build, costed EST) ·
    323 long-distance (shipping/mailing rules, what survives post) · 341 long-distance gifts (non-basket:
    digital + timed + experience) · 336/337 gifts for husband/wife (single gifts, not baskets).
  - 319 ideas for husband (an evening plan) vs 336 gifts for husband vs 345 wishes for husband.
    337 gifts for wife vs 346 wishes for wife (b4 owns ideas-for-wife and boo-basket-for-wife).
  - 324 will-you-be-my-boo ideas (props/reveal formats) · 338 how to ask someone to be your boo
    (the conversation, wording, reading the answer) · 339 ask a girl out · 340 ask a guy out
    (each: invitation formats for that ask; no overlap with 324's props) · 334 soft launch (social posting).
  - 325 messages for girlfriend (short texts) · 326 card for girlfriend (card-length, by card type) ·
    344 love letter for girlfriend (letter structure, 300-word sample) · 349 paragraph for girlfriend
    (100–200-word paragraphs) · 348 paragraph for boyfriend · 343 surprise for girlfriend (a plan, not words) ·
    342 surprise for boyfriend.
  - 331 pickup lines for your crush (in-person lines) vs 347 texts to send your crush (text openers, timing).
  - 303 couple costume captions vs 309 friends-group captions vs 306 witch captions vs 308 witch puns
    (puns = wordplay jokes, not captions) vs 307 pumpkin puns.
  - 312 cute pumpkin carving (designs) · 317 pumpkin painting (no-carve, paints) · 329 pumpkin carving
    date (the date plan: where/when/kit) · 330 couple pumpkin carving (matching two-pumpkin designs).
  - 311 makeup for beginners (kit + skills) · 313 skeleton makeup · 314 witch makeup (looks).
  - 315 bedroom decor · 316 apartment/small-space (renter rules, no-damage) · 318 table decor.
  - 327 date-night outfit (what to wear, not costumes) · 328 dinner date ideas (vs b6 halloween-dinner-ideas
    which owns recipes/menus — 328 is the date: setting, at-home vs out, timing) · 332 teen dates ·
    333 first Halloween together · 335 pumpkin-head photoshoot (vs b2 photoshoot, b6 ghostface).
  - 345/346 wishes husband/wife; 350 horror movie love quotes (vs b6 spooky-love-quotes and b2
    movie-quotes: short attributed quotes only, fair-use length, verified against the film).

## 10. Live spent-source notes (orchestrator appends as rows land)
- (b6 sources are logged in the b6 BRIEF §10; caps reset per batch.)

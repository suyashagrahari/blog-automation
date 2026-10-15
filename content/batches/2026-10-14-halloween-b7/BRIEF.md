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
- **Used by witch-puns:** en.wiktionary x3 (witch, coven, hex — exempt); Europe PMC PMC4482729 (PLOS ONE 2015 German puns — **PLOS ONE 1 post**), PMC10711695 (J Neurosci 2023 humour fMRI). 49 witch puns (witch/which, spell, broom, brew, cauldron, hex, coven) owned — 306 witch captions must not reuse wordplay.
- **Used by last-minute-couples-halloween-costumes:** Europe PMC PMC13203665 (Aron & Tomlinson self-expansion review, MDPI Behav Sci — **MDPI 1 post**), PMC11364825 (Brauer et al. couples humour, Sci Rep — **Sci Rep 1 post**), PMC12093450 (Trott et al. Cognitive Science); consumer.ftc.gov phishing (ftc 1 post). Owns "set-up + punchline" pairs built from wardrobe (phishing email/IT ticket etc.) with build times for two — other couple rows reuse no pair. Self-expansion/couple-humour papers are spent.
- **Used by halloween-captions-for-friends-group:** Europe PMC PMC9489299 (Phil Trans B 2022 laughter group size), PMC8362988 (PLOS ONE 2021 — **PLOS ONE now 2 posts, ONE left**), PMC6596504 (J Neurosci 2017 social laughter opioids — J Neurosci now 2 posts), PMC11918532 (Ann NYAS 2025 friendship layers). Laughter/group-size/Dunbar-layer papers are spent. Owns captions by headcount (trio, 4–5, 6–9, 10+), roll-call and carousel formats.
- **Used by pumpkin-puns:** en.wiktionary x3 (pumpkin, gourd, squash); Europe PMC PMC12487772 (Palmann & Miller 2025, Humor, De Gruyter), PMC10874607 (J Eye Movement Research — MDPI, **MDPI now 2 posts, ONE left**); gutenberg #41 Sleepy Hollow. 48 pumpkin puns owned (Instagram/kids/love/autumn) — 312/317/329/330 must not reuse pumpkin wordplay. Pun papers spent.
- **Used by halloween-wishes-in-spanish:** fundeu.es, dle.rae.es (exempt); revistas.uca.es (abstract); Europe PMC IJSL 2026 (De Gruyter); ich.unesco.org (Día de Muertos); theconversation.com (**theconversation now 2 posts with witch-captions — ONE left**). "jálogüin" is NOT in the DLE (14 Oct 2026). Native-speaker review flagged.
- **Used by witch-captions-for-instagram:** theconversation.com Bailey 2024; gutenberg Scot 1584 Discoverie of Witchcraft; developers.facebook.com; Europe PMC Gershman 2022 (PLOS ONE — **PLOS ONE now FULL, 3 posts — do not cite**); doi.org Open Theology 2024 (doi.org 1 post). 48 captions in 8 witch-aesthetic groups owned — 314 witch-makeup must not reuse.
- **Used by halloween-instagram-story-ideas:** help.instagram.com x3 (stickers, Stories, Close Friends — help.instagram.com 1 post); Europe PMC JMIR 2025 Story-sticker study; bmij.org (abstract); gutenberg Frazer 1922. Owns Story formats ranked by sticker response (polls 54–57% vs question 21%).
- **Used by halloween-couple-costumes-for-big-guys:** gutenberg x3 (Pyle 1883 Robin Hood, Morris 1864 Gawain, Johnson 1724 Pyrates); Europe PMC Arch Sex Behav 2023, J Occup Med Toxicol 2025 (costume heat strain). Owns big/bearded-guy pairs (Robin Hood/Little John-type, Green Knight, pirates) with heat ratings — no other row reuses these characters.
- **Used by couple-costume-captions:** Europe PMC León 2023 we-identities (Springer); archive.org Holt 1887 Fancy Dresses Described; gutenberg Lear 1871; en.wikipedia "Couple costume" (wikipedia 1 post). Owns captions by duo type — every couple row reuses no caption.
- **Used by halloween-costume-ideas-for-teen-boys:** resources.finalsite.net (Davis SD policy PDF), clevelandhs.org, surreyschools.ca, ecfr.gov 15 CFR 272 orange-tip rule (ecfr 1 post), Europe PMC x2 (toy-gun-at-school abstract only). School-costume-policy angle owned — 332 teen dates must not reuse.
- **Used by halloween-makeup-for-beginners:** Europe PMC PeerJ 2014 shading, J Appl Microbiol 2020 used sponges (abstract), Contact Dermatitis 2026 ESCD patch-test guideline; ecfr.gov 21 CFR 70.5 (**ecfr.gov now 2 posts — ONE left**); fda.gov talc (fda 1 post). Owns the 5 core skills + patch test + eye-area colour-additive rule — 313/314 cite different sources.
- **Used by cute-pumpkin-carving-ideas:** Europe PMC Ethology 2009 baby schema, Proc R Soc B 2024 baby-schema review, Proc R Soc B 2021 face pareidolia (Proc R Soc B 1 post); andrewssportsmedicine.com hand surgeon Oct 2025. Carving hand-injury clinical papers are Elsevier (banned). Owns cute carved faces + baby-schema "why it's cute" — 329/330 must use different sources (no hand-surgeon page, no baby-schema).
- **Used by halloween-bedroom-decor:** london-fire.gov.uk bedtime checks (1 post); Europe PMC npj Biol Timing Sleep 2026 nightlight, Physiol Rep 2018 preschool melatonin, CAPMH 2026 night fears. Sleep/light/night-fear papers spent. Owns decor sorted by sleep effect (warm/red light, fabric distance from lamps).
- **Used by pumpkin-painting-ideas:** ars.usda.gov pumpkin storage; journals.ashs.org HortTechnology 1994 (abstract); acmiart.org; ecfr.gov (**ecfr.gov now FULL, 3 posts — do not cite**); cpsc.gov (1 post); gutenberg. No study compares painted vs carved pumpkin lifespan — stated as inference.
- **Used by halloween-ideas-for-husband:** Europe PMC Roth 2024, d'Orsi 2026, Roeters 2016 (all Springer), Pala 2026 (BMC Psychology — **BMC Psych 1 post**). Owns 3 timed evening plans (kids at home / work next day / tight budget). Long-term-couple time-use papers spent — 336/345 use other sources.
- **Used by skeleton-makeup:** openstax.org x2 (skull 7.2, teeth 23.3); Europe PMC Tobacco Control 2022 (Día de Muertos appropriation); ojs.uel.br Terra Roxa 2022 Catrina (dates Posada engraving "1873" — normally c.1910–13; not printed). Costume-paint metals paper and Posada–Rivera 1947 story are in b1 makeup-captions — avoid.
- **Used by halloween-decorations-for-apartments:** idaholegalaid.org; gov.uk deposit protection (gov.uk 1 post); assets.publishing.service.gov.uk Home Office flats fire guide 2011; Europe PMC PMC9347395 Brown 2022 (Wiley). Owns renter/no-hole/corridor rules.
- **Used by witch-makeup:** archive.org Photoplay Studies 1939 (cinematographer: face and hands "bright green" — contradicts b4 halloween-colors-meaning, flagged for REPORT); gutenberg Baum 1900; fda.gov colour-additive list (**fda.gov now 2 posts — ONE left**); Europe PMC Molecules 2021 (**MDPI now FULL, 3 posts — do not cite**); wiktionary.
- **Used by halloween-table-decorations:** Europe PMC Koul & Novembre 2026 Ann NYAS (centrepiece height/visual contact — Ann NYAS now 2 posts), Cureus 2025 liquid-nitrogen cocktail case; london-fire.gov.uk candles (**london-fire now 2 posts — ONE left**); fda.gov lead-glazed pottery (**fda.gov now FULL — do not cite**). Owns tablescape sizing + candle/fog/food-contact rules — 328 must not repeat.
- **Used by boo-basket-for-husband:** eprints.lancs.ac.uk JCR 2024 long-term gift exchange (54 interviews); Europe PMC Open Research Europe music-in-relationships; extension.illinois.edu bulbs/apples; gutenberg Hound of the Baskervilles. Owns 6 hobby baskets (records, garden bulbs, coffee, car detailing, workshop, mystery reader) — 322/323/336/337/341 reuse none. JCR gift-exchange paper spent.
- **Used by boo-basket-under-25-dollars:** content.ugeskriftet.dk 2025 gift trial (long card +5.42 joy); onlinelibrary.wiley.com (abstract); cambridge.org; bls.gov candy CPI SEFR02 (bls 1 post); ecb.europa.eu rates. Flynn & Adams 2009 = JESP (Elsevier, banned). Owns costed builds + 4-currency equivalents + container/filler/candy split. Gift-card-length trial spent — 326 card row must not cite it.
- **Used by halloween-nicknames-for-girlfriend:** ans-names.pitt.edu Adams 2009; academypublication.com 2020 couples pet names; languages.oup.com; gutenberg; en.wiktionary "boo" (pet name c.1988 per OED). Pet-name papers + "boo" etymology spent — 324/338 use different sources. 32 nicknames owned.
- **Used by pumpkin-carving-date-ideas:** extension.psu.edu pumpkin storage; Europe PMC Pan 2017 Hum Brain Mapp (abstract), Tang 2020 Brain Behav (couples pace-matching); nchfp.uga.edu seed roasting. Owns pick/carve day calendar 2026/2027, kit, contest rules — 330 must not reuse.
- **Used by long-distance-boo-basket:** royalmail.com; auspost.com.au x2; usps.com (customs forms); Europe PMC PMC11561827 (Food Sci Nutr 2024 chocolate melting); tidsskriftet-nof.no 2016 LDR review. Owns postal rules, packing, post-by dates — 341 long-distance gifts must not repeat mailing advice and should cite different LDR research.
- **Used by halloween-messages-for-girlfriend:** Europe PMC Sci Rep 2022 gratitude, Sci Rep 2024 texting EEG (**Sci Rep now 2 posts — ONE left**); osf.io 2021 messaging preprint; journals.colorado.edu 2021 review. Owns 40 short texts by moment + send-time table. Texting papers spent — 347/348/349 use others.
- **Used by halloween-date-night-outfit:** worldweather.wmo.int (Oct normals Boston/Toronto/Edinburgh/Sydney/New Delhi); econtent.hogrefe.com Lehmann 2017 (abstract); link.springer.com Hesslinger 2015; osf.io Pollet 2018 (**osf.io now 2 posts — ONE left**). "Red dress effect" did not replicate. Owns venue × weather outfits.
- **Used by halloween-dinner-date-ideas:** Europe PMC Dunbar 2017 (eating together), Commun Psychol 2025, Sci Rep 2022 restaurant noise (**Sci Rep now FULL — do not cite**); nist.gov; gov.uk clocks (**gov.uk now 2 posts — ONE left**). UK clocks go back 02:00 Sun 31 Oct 2027. Owns booking windows, eat-in/out formats, table games.
- **Used by couple-pumpkin-carving-ideas:** psychclassics.yorku.ca Wertheimer 1923; Europe PMC Wagemans 2012 Psych Bull (abstract), Zhang 2025 closure (abstract); hal.science Verger & Duymedjian 2020. Owns two-pumpkin matching designs.
- **Used by will-you-be-my-boo-ideas:** Europe PMC Hoplock & Stinson 2022 (rejected proposals skew public), Vorauer 2003; journals.muni.cz Qassim 2023 refusal strategies; czasopisma.aps.edu.pl Konieczna 2025 DTR. Owns 8–10 reveal props each with a written "no". Proposal/refusal/DTR papers spent — 338/339/340 use others.
- **TEMPLATE NOTE for ask-out/crush rows (331, 338, 339, 340, 347):** template-spec says the /happy-halloween "No" button runs away. That is not consent-aware for a first ask — say so, and recommend the template only once the person has already said yes (or for an established partner).
- **Used by halloween-card-for-girlfriend:** Europe PMC PMC12911175 (BMC Health Serv Res), PMC8053415 (J Happiness Stud); publicdomainreview.org postcard history; pe.usps.com postcard rules. Owns messages sized by card type/writing space.
- **Used by halloween-date-ideas-for-teens:** Europe PMC McMillan 2026, Boele 2026 (Wiley); cdc.gov teen dating violence (Dating Matters page is 404; cdc 1 post); sixflags.com x2 (Fright Fest under-13 advice, Knott's 21+ chaperone). Owns teen dates with check-in plan.
- **Used by first-halloween-together-as-a-couple:** Europe PMC Kennedy 2023 Netw Sci, Kee 2025 JMFT, DiDonato 2016 Eur J Psychol, Imber-Black 2020 + Horowitz 1999 Family Process (abstracts). Owns relationship-stage pacing, whose party, matching-costume signalling, starting a tradition.
- **Used by pumpkin-head-couple-photoshoot:** fox13news.com (trend first dated 28–30 Oct 2020); extension.usu.edu pumpkin weights; sunrise-sunset.org twilight API; Europe PMC Exp Physiol 2024 helmet neck load, JEP:HPP 2014 head angle/gaze. Owns pumpkin-head build + twilight times.
- **Used by halloween-pickup-lines-for-your-crush:** web.stanford.edu McFarland 2013 speed-dating; Europe PMC Huang 2017 (abstract) + 2025 correction; news.cornell.edu Bohns & DeVincent (paper is SAGE — cited via university release; REPORT flag); gutenberg Much Ado. Huang 2017 question-asking paper spent — 347 must not cite it.
- **Used by halloween-soft-launch-ideas:** en.wiktionary "soft launch" (earliest relationship cite NYT 6 Oct 2022); Europe PMC Warton 2026 J Res Adolesc, Fox & Warber (abstract); psychologia.pelnus.ac.id (weak methods, flagged); esafety.gov.au x2. Owns soft-launch shots + posting consent/location delay.
- **Used by cute-ways-to-ask-a-girl-out-on-halloween:** ifstudies.org IFS/YouGov 2022; Europe PMC Kerr 2018 Emotion (abstract), Valshtein 2022 Curr Psychol, Kwon 2026 PNAS Nexus. Owns plan-based invitations with time cost + written-in "no". 340 must use different papers.
- **Used by halloween-gifts-for-wife:** Europe PMC BMC Pregnancy Childbirth 2026, NHS earbuds preprint (abstract), BMC Psychology 2026 (**BMC Psych now 2 posts — ONE left**); doi.org Bryksina 2020 JCP (abstract; doi.org 2 posts — ONE left). Owns single gifts by her situation.
- **Used by halloween-gifts-for-husband:** gutenberg Kelley 1919; academic.oup.com Chan & Mogilner JCR (abstract; also in b1 gift-ideas-for-boyfriend); Europe PMC Peng & Li 2026 Int J Psychol, Kirchler & Palan 2017 Exp Econ. Owns single gifts by type with start-by dates.
- **WebSearch hit its session cap (15 Oct).** Remaining writers: measure the SERP via DuckDuckGo html/lite (§4) and label it lower confidence.
- **Used by how-to-ask-someone-to-be-your-boo:** Europe PMC Baxter 2022 PNAS (**Baxter paper now at URL cap 2 with 340; PNAS 2 posts**), Chang 2021 + Silver 2026 SCAN, Kranz 2024 Arch Sex Behav. Owns signals/timing/3 scripts/yes-maybe-no replies.
- **Used by cute-ways-to-ask-a-guy-out-on-halloween:** Europe PMC Bruch & Newman 2018 Sci Adv, Kreager 2014 JMF (abstract), Flynn & Lake 2008 JPSP (abstract — **JPSP FULL per writer**), DiDonato 2016 Eur J Psychol (**DiDonato paper at URL cap 2 with 333**). Escape room / board-game café / karaoke asks owned.
- **Used by halloween-surprise-for-boyfriend:** Europe PMC Ghadri 2016 Eur Heart J (happy-heart takotsubo 4.1%), Rhabneh 2026 Oxf Med Case Rep, Wiley 2026 Emotion haunted-attraction bonding (abstract), Faunce 2022 Psychophysiology startle (abstract). Owns 6 surprise plans with risk checks; scare/surprise-physiology papers spent — 343 must not reuse.
- **Used by long-distance-halloween-gifts:** cambridge.org (abstract; cambridge 2 posts); cyberpsychology.eu; Europe PMC; aa.usno.navy.mil sunset times (usno 2 posts); support.google.com. Owns sunset-timed digital/experience gifts; no mailing advice.
- **Used by halloween-surprise-for-girlfriend:** Europe PMC Cognitive Science 2026 dread/savouring, SCAN 2023 compliment sharing, BJHP 2025 appreciation; aa.usno.navy.mil moon data. Owns "Tell me now / Surprise me" envelopes, stamp printing, filming-location reveal.
- **Used by halloween-wishes-for-husband:** Europe PMC Hahn & Campbell 2016, Haase 2023 (marital humour); ejop.psychopen.eu Saroglou 2010 (**Eur J Psychol FULL, 3 posts**); biblio.ugent.be Kindt 2017 gratitude diary. Owns wishes by delivery channel × marriage stage; marital-humour papers spent.
- **Used by halloween-wishes-for-wife:** Europe PMC Haney & Barber 2022 Can Rev Sociol, Eckstein 2023 SCAN (PMC9976881 at URL cap 2), Smoliak 2023 Family Process (abstract; Family Process 2 posts); ons.gov.uk 2016 unpaid work. Owns wishes by her role that night + specificity formula.
- **Used by halloween-texts-to-send-your-crush:** pewresearch.org 2015 teen flirting; Europe PMC Ehrenreich 2020 J Res Adolesc (reply latency); cogitatiopress.com Šiša 2024 ghosting (abstract); home.unicode.org emoji frequency. Overlap flag: b6 flirty-halloween-texts (missed in §9b) — kept crush-only.
- **Used by halloween-paragraph-for-girlfriend:** Europe PMC Br J Psychol 2025, JMFT 2026, Mem Cogn 2021; twilio.com SMS segments; developers.facebook.com caption (URL at cap 2). Owns 10 paragraphs by function + per-channel length limits.
- **Used by halloween-love-letter-for-girlfriend:** Europe PMC Regan 2022 + Walsh 2022 Affective Science, Dambrogio 2021 letterlocking (Nat Commun); gutenberg #16182 Browning–Barrett letters. Owns dark/flame/glow/wick letter structure + 2 sample letters.
- **Used by halloween-paragraph-for-boyfriend:** Europe PMC Floyd & Morman 2020 (PsyArXiv preprint), Barkley 2026 PLOS Mental Health, Niemyjska & Curcio 2021. Cannibalisation flag: b2 halloween-messages-for-boyfriend ranks #8 for this keyword.
- **Used by horror-movie-love-quotes:** gutenberg Dracula; dailyscript.com 1932 King Kong screenplay; Europe PMC Meston 2003 Arch Sex Behav (abstract), Andersen 2025 Emotion (abstract), Scrivner 2021 PsyArXiv. "Oceans of time" not in Stoker (also b1). A Quiet Place "I have... always... loved you" verified in screenplay.

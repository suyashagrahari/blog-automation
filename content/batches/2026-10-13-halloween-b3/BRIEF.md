# BRIEF — 2026-10-13-halloween-b3 (BINDING) — Halloween global, Batch 3 of 8

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
  year", no 2026-only framing in titles unless the keyword itself carries a year. Row 101 (`halloween in india`) absorbs
  "halloween in india 2026": give 2026 and 2027 dates, not a 2026-only framing.
- The market is **global English** (US, UK, CA, AU, IN). Use the phrasing your row targets — UK
  "chat up lines", "fancy dress"; AU "dress ups". Keep spelling consistent within a post.

## 2. Mandatory link — /happy-halloween
- Every post links **https://subhsandesh.in/happy-halloween**. `template-spec.md` lists every feature
  of it and of `/happy-halloween-premium`. **Describe only those features.**
- Place it AFTER the section that makes the reader want it, never in the first paragraph.
- It is a **one-person greeting page** with partner / bestie / family / kids modes. For party,
  marketing, office or group posts, say plainly it is not a party tool; link it for the one person
  the reader wants to surprise.
- Plus at least one alternative from `oneOfLinks` in `verify.config.json`, with the reason. 2–4
  internal links total, only `TEMPLATE_LINKS` URLs (`app/lib/prompt.ts`). **No `/blog/<slug>` links.**
- `batchMeta.templateUrls`: `https://subhsandesh.in/happy-halloween` first (plus the premium URL or
  one other when relevant). `batchMeta.categorySlug`: **`festive-beats`** for every post (Halloween is
  not an Indian festival, so not `indian-festivals`).

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
- **Firecrawl MCP is disconnected. WebSearch hit its session cap in Batch 2 and is probably still
  capped.** Try `WebSearch` ONCE. If it errors or returns nothing, measure the SERP with
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
- `node content/batches/2026-10-13-halloween-b3/findpapers.mjs "<phenomenon query>"` (Crossref +
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
  a domain or journal in at most 3. Run `node content/batches/2026-10-13-halloween-b3/capcheck.mjs`
  before you finish. Siblings write in parallel; prefer specific sources nobody else will pick.
- Avoid entirely: Taylor & Francis, Sage, arxiv.org, aclanthology.org (concentrated last batch).

## 6. Writing rules
- English body. Rows naming another language (row 18 Spanish, any Tagalog/French lines) → English
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

## 7. Hygiene (lessons from the last 116 posts)
- **Scratch files: `<your-slug>-<purpose>.*` only.** Never `body.md`/`draft.md` — the scratchpad is
  shared with 9 other agents and generic names have overwritten siblings' posts before.
- **Never save downloads in the repo root**; use the scratchpad with your slug prefix.
- Before writing your JSON, confirm its H1 is your own keyword's.
- `batch.json` exists: run `node scripts/verify-batch.mjs content/batches/2026-10-13-halloween-b3`
  from the repo root and fix your own lines until clean. Ignore problems on sibling slugs. Do not edit
  `batch.json`, `PLAN.json` or any sibling's files.

## 8. Output and report
Write only `blogs/<slug>.json` and `research/<slug>.md`. Report back in under 150 words: slug, body
words, FAQ count, searches used (Firecrawl/WebSearch), weak count in your top 10, sources (domains),
audit failures, one-line honest assessment, and any brief claim you found false.

## 9. Lessons carried over from Batches 1 and 2 (100 posts — read them)
- **Batches 1 and 2 are sibling sets.** Posts: `content/batches/2026-10-12-halloween-b1/blogs/` and
  `content/batches/2026-10-13-halloween-b2/blogs/`. Read the H2s of every post your prompt names and
  reuse NO line (5-word overlap check against ALL 100 files). Prefer sources neither batch used;
  their source logs are §9/§10 of each batch's BRIEF.md. Caps are counted per batch.
- Link papers via **europepmc.org** (exempt), not `doi.org` and not pmc.ncbi.nlm.nih.gov.
- **The verifier rejects price wording ("for free", "costs nothing").**
- **Comparison table: 3–5 rows, ALWAYS.** If your prompt asks for one row per item, group the rows
  (by type/age/etc.) and keep per-item detail in the H3s. Four Batch 2 posts had to be remediated.
- **Paragraphs:** prose 2–3 sentences. One-sentence lead-ins before lists fail. Copyable lines go in lists.
- **Outbound links: 3–6.** Seven fails.
- Frontiers, SAGE (incl. Psychological Science, Evolutionary Psychology, JSPR, PSPB), Taylor & Francis,
  Elsevier: banned. findpapers returns them first — check the publisher.
- No first-party Halloween data exists, so "At least one table column uses first-party data" fails
  honestly. Do NOT force an unrelated facts.md number into a table.
- Streaming availability, prices and "most popular" lists change constantly: date-stamp anything time-
  sensitive and say where it was checked.

## 10. Live spent-source notes (orchestrator appends as rows land)

# BRIEF — 2026-10-12-navratri-partner-b1 (BINDING)

Read this before Phase 1. It overrides your task prompt where they conflict. Your row is
one entry of `PLAN.json`. The skill is `.claude/skills/blog-optimisation/SKILL.md` —
run its Phases 0–7 for your one keyword. Phase 8 (remediation) is run later by the
orchestrator; do not spawn agents yourself.

## 0. Treat framing claims in your prompt as unverified

If a claim in your prompt is load-bearing, verify it. "The brief said X, the source says
Y" goes in `structuralLimitations` and is the most valuable thing you can report.

## 1. The calendar (verified 2026-10-12)

- Sharad Navratri 2026: **Sun 11 Oct – Mon 19 Oct**. Today, 12 Oct, is day 2.
- Vijayadashami / Dussehra 2026: **Tue 20 Oct**.
- Sharad Purnima 2026: tithi 25 Oct 11:55 IST → 26 Oct 09:41 IST; Gujarat plays garba again on the night of **Sun 25 Oct**.
- Sharad Navratri 2027: **30 Sep – 8 Oct**, Dussehra **9 Oct 2027** (drikpanchang).
- If you print a date, check it against drikpanchang.com (cap-exempt, a fact-check).
- Write so the page is still correct in October 2027. Use undated titles unless the keyword
  itself carries a year. Do not write "this year" next to a 2026 date.

## 2. The mandatory link — /dandiya-partner

The user asked that **every post link https://subhsandesh.in/dandiya-partner**.
`template-spec.md` (this folder) lists every feature it has. **Describe only those
features.** Inventing one (a price, a feature, a usage number) is the worst failure available.

- Place it AFTER the section that makes the reader want it, never in the first paragraph.
- It is a **one-to-one** invitation (love, crush, best friend as garba buddy). For society,
  office, home-puja or group invitations, say plainly it is the wrong tool for a group invite.
  You can still link it, but only for the single person the reader wants to dance with.
- The page UI is **English**. A Hindi, Gujarati or Marathi post must say so in body prose.
- Also link at least one genuine alternative from `oneOfLinks` in `verify.config.json`, with
  the reason it suits that reader better. 2–4 internal links in total, only URLs from
  `TEMPLATE_LINKS` in `app/lib/prompt.ts`.
- `batchMeta.templateUrls`: put `https://subhsandesh.in/dandiya-partner` first. It is not yet a
  Strapi template entry, so it will show as an amber "missing" warning. That is expected.
- `batchMeta.categorySlug`: **`indian-festivals`** for every post.

## 3. Phase 0 — first-party data (read this carefully)

- Read `content/facts.md` yourself. **Do NOT run `npm run facts`.** A regeneration breaks
  `factsUsed` on every earlier batch, and the production database probe is permission-blocked
  this session.
- **No dandiya-partner or Navratri usage data exists in facts.md.** The template is new.
  Never state or imply how many dandiya pages were created, opened or accepted.
- What you may cite: the platform-wide lines (phone share of views, password rate,
  publish rate, views per page, median build time), and the **festival lead-time** lines
  (Raksha Bandhan, n=89: 49.4% built on the festival day itself, median lead 0 days).
  Label the festival line as a Raksha Bandhan measurement used as the nearest analogue,
  never as Navratri data.
- The template spec in `template-spec.md` is first-hand product fact (nine lines, six photos,
  the 1080×1920 pass, No turns into Yes after five tries, eight preset songs). It counts
  toward the "something no competitor has" test, but not toward the 3-facts count.
- `batchMeta.factsUsed` strings must be **byte-verbatim** copies of facts.md lines. Copy, never retype.
- Only cite a platform fact where it genuinely bears on the reader's question. A forced
  "48.3% of pages are opened on phones" in a garba-benefits post is filler; say the gate is
  thin in the audit instead.

## 4. Phase 1 — SERP. HARD BUDGET: at most 2 `WebSearch` calls in total for your row

WebSearch is capped at 200 calls for the WHOLE session, shared by all 50 agents, and about
150 remain. **One call for your SERP, at most one more for research. That is all.**

- `WebSearch` results are **US-served**. Label every position as `US-served (WebSearch)`.
  India-served positions are unavailable this run.
- Fetch the top 5 competitor pages with **`ctx_fetch_and_index`** (then `ctx_search`).
  WebFetch is blocked here. Do not paste raw HTML into context.
- **Do not use any browser tool** (PolterTab, Playwright, claude-in-chrome). They share one
  tab across agents, and earlier batches got other agents' SERPs back.
- `content/keywords/2026-10-12-navratri-garba-dandiya/serps.md` holds 41 SERPs measured
  today. If your keyword or a near variant is there, use it as corroboration.
- Known incumbents: eduyush.com (titles still say 2025), flick.social, hindutone.com (the
  only fresh 2026 publisher), scraped mirrors (lutonhoo.oandg.co.uk, msoid.icmbio.gov.br,
  *.onrender.com). These are competitors. **Never cite or link them.**
- **Gate 4 abort:** if your top 10 has 0 weak results, write the research brief, write NO
  blog JSON, and report why. An evidenced abort is a good outcome.

## 5. Phase 3 — research

- `node content/batches/2026-10-12-navratri-partner-b1/findpapers.mjs "<phenomenon query>"`
  (Crossref + Europe PMC, no WebSearch cost). Search the **phenomenon**, not the keyword:
  "garba circle dance community Gujarat", "dance partner synchrony social bonding",
  "folk dance physical activity energy expenditure", "festival greeting messages social
  media", "long-distance relationship maintenance mediated communication",
  "invitation reciprocity", "colour symbolism Hindu festival", "Navaratri goddess ritual".
- Crossref indexes predatory journals (IJSR, IJRASET, IJCRT, IRJMETS). **Do not cite those.**
- At least 2 sources genuinely about the post's subject, at least 1 peer-reviewed and open
  access. At most 1 generic government statistic. Wikipedia 0–2, disambiguation only.
- Fetch every source and verify it says what you claim. If you only read the abstract, say so.
- Caps across this batch: a URL in at most 2 posts, a domain (or journal) in at most 3.
  Run `node content/batches/2026-10-12-navratri-partner-b1/capcheck.mjs` before you finish.
  Siblings are writing in parallel, so prefer a source no sibling is likely to pick.
  Generic dance-and-health papers will be contested; go specific.
- Never cite a news piece for something it does not say. The "rent a garba partner" story
  (freepressjournal, Sep 2026) is real, but the content of the Gujarat police advisory was
  not visible in search snippets. Read it before you describe it.

## 6. Writing rules for this batch

- **Body language per row (`bodyLanguage` in PLAN.json):**
  - `en`: English.
  - `hi` / `mr` / `gu`: the body is written in that language and script (Devanagari or
    Gujarati), including H2s, metaDescription and FAQs. The slug stays Latin.
  - `*-mixed`: the searcher typed an English query asking for that language. Write an
    English-frame page (headings in English) whose payload (meanings, captions, quotes,
    messages) is given in the native script **plus** romanised transliteration plus
    English gloss.
- **Captions, quotes, shayari and wishes must be original.** Never copy a competitor's
  line, a film lyric or a poet's couplet. Song titles may be named; lyrics may not be quoted.
- "Garba partner" has two senses: a dance partner in the circle (garba is mostly danced in a
  circle, where partners rotate; dandiya raas is the paired stick dance), and the slang sense
  (a date or companion for the nine nights). Explainer posts must separate the two.
- Do not claim SubhSandesh helps anyone find, rent or hire a partner. It does not.
- Every H2 needs a specific number, date, price or named source. One comparison table with
  real values. 8–12 FAQs in `article.faqs` and FAQPage JSON-LD, **never inside
  contentMarkdown**. Body 1,500–1,800 words without the FAQs.
- **Scratch files:** name every temp file `<your-slug>-<purpose>.md`. The scratchpad and
  the browser are shared with 5 other running agents.

## 7. Output and report

Write only `blogs/<slug>.json` and `research/<slug>.md` for your own slug. Do not touch
`batch.json`, `PLAN.json` or a sibling's files. Before finishing, confirm your H1,
`article.slug` and `batchMeta.keyword` agree.

Report back in under 150 words: slug, body words, FAQ count, WebSearch calls used, weak
count in your top 10, sources (domains), audit failures, the one-line honest assessment,
and any brief claim you found false.

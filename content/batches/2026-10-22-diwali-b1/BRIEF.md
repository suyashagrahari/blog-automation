# BRIEF — 2026-10-22-diwali-b1 (BINDING) — Diwali 2027, Batch 1 (25 posts)

Read before Phase 1. Overrides your task prompt where they conflict. Your row is one entry of
`PLAN.json`. Skill: `.claude/skills/blog-optimisation/SKILL.md` — run Phases 0–7 for your one
keyword. Phase 8 (remediation) is run later by the orchestrator. Do not spawn agents.

## 0. Treat framing claims in your prompt as unverified
If a claim is load-bearing, verify it. "The brief said X, the source says Y" goes in
`structuralLimitations` and in your report.

## 1. Calendar and audience (verified 2026-10-22 from the SERP; re-verify anything you print)
- **Diwali 2027 (Lakshmi Puja) = Friday 29 October 2027.** Five days: Dhanteras Wed 27 Oct · Choti
  Diwali / Naraka Chaturdashi Thu 28 Oct · Lakshmi Puja Fri 29 Oct · Govardhan Puja Sat 30 Oct · Bhai
  Dooj Sun 31 Oct 2027. Amavasya tithi ≈ 28 Oct 20:49 → 29 Oct 19:07 IST (one source; verify).
  Diwali 2026 = Sun 8 Nov 2026. Some South Indian states mark Deepavali on Naraka Chaturdashi.
  Two ranking pages print WRONG 2027 dates (a facebook "fb-answers" page says 28 Oct; another says
  16–17 Oct) — never copy a date from a page; verify at a panchang/government source you can cite.
- **Write for Diwali 2027 and evergreen.** Nothing published now ranks for Diwali 2026 (17 days away).
  Titles may carry "2027" when the keyword does.
- Market: **India first** (Hindi/Hinglish searchers included), Indian diaspora second. Use Indian
  English, ₹ for money, Indian examples. Row `diwali-2027-kab-hai` is written **in Hindi**.

## 2. Links — SubhSandesh must be present and honest (user requirement)
- Every post links **https://subhsandesh.in/happy-diwali** with descriptive anchor text, placed AFTER
  the section that makes the reader want it, never in the first paragraph. Mention **SubhSandesh by
  name** at least once in the body.
- `template-spec.md` is the ONLY source for what /happy-diwali does (from the live page's own JSON-LD,
  2026-10-22). Describe only those features: diya at their door with a tag, row of wish diyas, rangoli
  with initials, sparkler writing, sky lanterns holding up to 6 photos, crackers playground (drawn, no
  noise/smoke), letter in a shagun liffafa, mithai box + Shubh Deepavali card; love/family/friend
  modes; YouTube song or Diwali favourite; AI can write from a short story; ~5 min; private link, opens
  in any browser, no app/account. **There is no premium Diwali page** (404) — never link or mention one.
- Plus **exactly one** alternative from `oneOfLinks` in `verify.config.json` that genuinely fits your
  reader, with a one-line reason (e.g. `/missyou-gf` for someone far away, `/happy-rakshabandhan-to-sister`
  is a Rakhi page — only if the post is sibling-focused such as Bhai Dooj, and say it is a Rakhi template).
  3–4 internal links total, only `TEMPLATE_LINKS` URLs (`app/lib/prompt.ts`). **No `/blog/<slug>` links.**
- Be honest about fit: /happy-diwali is a one-person greeting page. For essay, speech, puja, muhurat,
  rangoli, sweets, party or office-gift posts, say plainly it is not that tool; link it for the one
  person the reader wants to wish.
- `batchMeta.templateUrls`: `https://subhsandesh.in/happy-diwali` first, then your alternative.
  `batchMeta.categorySlug`: **`indian-festivals`** for every post (skill rule for festivals).

## 3. Phase 0 — first-party data
- Read `content/facts.md` yourself. **Do NOT run `npm run facts`** (it breaks `factsUsed` on 400+
  earlier posts; production DB reads are permission-blocked).
- **No Diwali usage data exists** (/happy-diwali is new). Never state or imply how many Diwali pages were
  made or opened. You may cite platform-wide lines where they genuinely bear on the reader's question
  (phone-open share, views per page, build time) and the Raksha Bandhan lead-time lines, **labelled as
  Raksha Bandhan 2026 data used as the nearest festival analogue (n = 89)**. `factsUsed` strings are
  byte-verbatim copies of facts.md lines.
- The template spec is first-hand product fact; it does not count toward the 3-facts minimum. If you
  cannot reach 3 relevant facts, say so in the audit (it fails honestly; do not force it).

## 4. Phase 1 — SERP. Budget: at most 3 searches for your row
- Use **WebSearch** first (session cap 200, shared by all agents). Also available: Firecrawl MCP
  `firecrawl_search` with `location: "India"` (rate limit ~10/min shared — on 429 wait 15 s, retry once).
  If both fail: `ctx_fetch_and_index("https://html.duckduckgo.com/html/?q=<keyword>&kl=in-en", "<slug>-serp")`,
  label "DuckDuckGo, lower confidence".
- Fetch the top 5 with **`ctx_fetch_and_index`** (WebFetch is blocked). 403/429 pages → judge from the
  snippet and say so.
- `content/keywords/2026-10-22-diwali-2027/serps.md` holds 8 India SERPs measured 2026-10-22. Known
  incumbents: drikpanchang, timeanddate, adobe express, fnp, igp, caratlane, timesofindia, hindustantimes,
  ndtv, livehindustan, navbharattimes, amarujala, pinterest, youtube, gift shops (milton, nestasia…),
  planetspark, pw.live. **Any page ranking top 5 for YOUR keyword is a competitor: never cite or link it.**
- **No browser tools** (PolterTab, Playwright, claude-in-chrome).
- Record your SERP in `batchMeta.serp` and the research brief. Never claim what "most pages" do unless
  you measured it — state it as a dated observation of the top 10 you saw.

## 5. Phase 3 — research
- `node content/batches/2026-10-22-diwali-b1/findpapers.mjs "<phenomenon query>"` (Crossref + Europe PMC,
  no search budget). Search YOUR row's **phenomenon** from PLAN.json, not the keyword.
- Primary sources welcome: incometaxindia.gov.in, fssai.gov.in, ayush.gov.in, ndma.gov.in, bis.gov.in,
  pib.gov.in (one generic stat max), rbi.org.in, gold.org (World Gold Council), whatsapp help pages,
  archive.org / gutenberg.org public-domain texts (Ramayana, Bhagavata translations, Nazir Akbarabadi).
- At least 2 sources genuinely about your subject; at least 1 peer-reviewed open access OR a
  public-domain primary text for story/ritual posts (say which). At most 1 generic statistic.
  Wikipedia 0–2, disambiguation only.
- Fetch every source and verify it says what you claim; abstract-only → say so.
- **Never cite:** Crossref predatory journals (IJSR, IJRASET, IJCRT, IRJMETS, IJFMR, IJNRD, JETIR,
  IJARIIE, IJRPR), Frontiers, SAGE, Taylor & Francis (incl. Dove Medical Press, F1000/Open Research
  Europe), Elsevier, arxiv.org, any competitor in §4.
- **Caps across this batch:** a URL (or the same paper by PMC id/DOI) in at most 2 posts; a domain or a
  journal in at most 3 (count PLOS ONE, Scientific Reports, any MDPI title, BMC titles as one each).
  Link papers via **europepmc.org** (cap-exempt), not doi.org. Run
  `node content/batches/2026-10-22-diwali-b1/capcheck.mjs` before you finish; siblings write in parallel.

## 6. Writing rules
- English body (except `diwali-2027-kab-hai`: Hindi). Hindi/Urdu lines in other posts: Devanagari +
  Roman transliteration + English gloss.
- **Every line you offer (quotes, wishes, shayari, captions, status, speeches, essays) is ORIGINAL.**
  Never copy a competitor's list. Classical public-domain lines only with author + source.
- Keep it clean and respectful of all traditions (Hindu, Jain, Sikh, Buddhist observances of Diwali).
  No firecracker-buying advice; no gambling instructions.
- Paragraphs: prose 2–3 sentences; no one-sentence lead-ins. **Copyable lines go in bulleted or
  blockquote lists.**
- Every H2 has a specific number, date, price or named source. **One comparison table with real
  values, 3–5 rows.** 8–12 FAQs in `article.faqs` + FAQPage JSON-LD, **never inside contentMarkdown**.
  Body **1,500–1,800 words** (plain whitespace split), FAQs excluded. Outbound links 3–6.
- **No price wording** ("free", "costs nothing") — the verifier rejects it. Prices are labelled, dated
  estimates ("about ₹500–800 in Oct 2026, EST").
- Time-sensitive facts: date-stamp them ("as of October 2026").

## 7. Hygiene
- **Scratch files: `<your-slug>-<purpose>.*` only**, in the session scratchpad. Never generic names;
  never save downloads in the repo.
- Before writing your JSON, confirm its H1, `article.slug` and `batchMeta.keyword` are your row's.
- Siblings: read the H2s + FAQs of every slug in your row's `siblings` and of the 8 `oldDiwaliPosts`
  (`content/batches/2026-08-19-diwali/blogs/`, `content/batches/2026-09-03-bouquet-3/blogs/`). Reuse no
  line and no idea. If your SERP shares 4+ URLs with a sibling's keyword, pick a clearly different
  sub-intent and record the overlap.
- Run `node scripts/verify-batch.mjs content/batches/2026-10-22-diwali-b1` from the repo root and fix
  your own lines until clean. Ignore problems on sibling slugs. Do not edit `batch.json`, `PLAN.json`
  or any sibling's files.

## 8. Output and report
Write only `blogs/<slug>.json` and `research/<slug>.md`. Report back in under 150 words: slug, body
words, FAQ count, searches used, weak count in your top 10, sources (domains), audit failures, one-line
honest assessment, and any brief claim you found false.

# BRIEF — 2026-10-12-navratri-b2 (BINDING)

Read this before Phase 1. It overrides your task prompt where they conflict. Your row is
one entry of `PLAN.json`. The skill is `.claude/skills/blog-optimisation/SKILL.md` —
run its Phases 0–7 for your one keyword. Phase 8 (remediation) is run later by the
orchestrator; do not spawn agents yourself.

## 0. Treat framing claims in your prompt as unverified

If a claim in your prompt is load-bearing, verify it. "The brief said X, the source says
Y" goes in `structuralLimitations` and is the most valuable thing you can report.

## 1. The calendar (verified 2026-10-12)

- Sharad Navratri 2026: **Sun 11 Oct – Mon 19 Oct**. Today, 12 Oct, is day 2.
- Durga Ashtami and Maha Navami 2026 fall on the SAME day, **Mon 19 Oct (IST)**. Drikpanchang served with a US timezone shows Ashtami 18 Oct, so set New Delhi.
- **2026 tithis do not map one-goddess-per-date:** Saptami runs across 17 AND 18 Oct, Ashtami and Maha Navami share 19 Oct. A plain "day 8 = Mahagauri = 18 Oct" list is wrong for 2026. Organise by night/goddess without dates, or use the tithi dates.
- Drikpanchang defaults to Orlando, USA. Append `&geoname-id=1261481` (New Delhi) to every date URL.
- Vijayadashami / Dussehra 2026: **Tue 20 Oct (Delhi/North India per drikpanchang)**, but **Wed 21 Oct in Bengal and Mysuru** (Drik Panchang regional listing; official Mysuru palace calendar puts Jumboo Savari on 21 Oct). Mahanavami/Ayudha Puja is **Tue 20 Oct** in Drik's Navratri table and the Mysuru calendar. Never print a single all-India Dussehra date without the regional caveat. Working drik URL: `/festivals/vijayadashami/vijayadashami-date-time.html`.
- Sharad Purnima 2026: tithi 25 Oct 11:55 IST → 26 Oct 09:41 IST; Gujarat plays garba again on the night of **Sun 25 Oct**.
- Sharad Navratri 2027: **30 Sep – 8 Oct**, Dussehra **9 Oct 2027** (drikpanchang).
- If you print a date, check it against drikpanchang.com (cap-exempt). Its 2027 page `https://www.drikpanchang.com/navratri/ashwin-shardiya-navratri-dates.html?year=2027` was reachable in search; some drikpanchang URLs 404 to fetchers. If you cannot fetch it, say so in the audit and cite the dates as BRIEF-verified rather than linking a page you did not read.
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
- Known incumbents: eduyush.com (SOME titles still say 2025, but at least one caption page was refreshed to 2026 with "Last updated: September 2026" — check your own page, never assume), flick.social, hindutone.com (the
  only fresh 2026 publisher), scraped mirrors (lutonhoo.oandg.co.uk, msoid.icmbio.gov.br,
  *.onrender.com). These are competitors. **Never cite or link them.**
- **Gate 4 abort:** if your top 10 has 0 weak results, write the research brief, write NO
  blog JSON, and report why. An evidenced abort is a good outcome.

## 5. Phase 3 — research

- `node content/batches/2026-10-12-navratri-b2/findpapers.mjs "<phenomenon query>"`
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
  Run `node content/batches/2026-10-12-navratri-b2/capcheck.mjs` before you finish.
  Siblings are writing in parallel, so prefer a source no sibling is likely to pick.
  Generic dance-and-health papers will be contested; go specific.
- Never cite a news piece for something it does not say. The "rent a garba partner" story
  (freepressjournal, Sep 2026) is real, but per the garba-partner-meaning writer it was an **Ahmedabad Cyber Crime Cell investigation plus general safety advice; no advisory text was published.** Do not write "police advisory" as if a document exists.

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

`batch.json` exists, so run `node scripts/verify-batch.mjs content/batches/2026-10-12-navratri-b2` from the repo root and fix your own post's lines until clean. Ignore problems on sibling slugs.

Write only `blogs/<slug>.json` and `research/<slug>.md` for your own slug. Do not touch
`batch.json`, `PLAN.json` or a sibling's files. Before finishing, confirm your H1,
`article.slug` and `batchMeta.keyword` agree.

Report back in under 150 words: slug, body words, FAQ count, WebSearch calls used, weak
count in your top 10, sources (domains), audit failures, the one-line honest assessment,
and any brief claim you found false.

## 8. Live spent-source notes (orchestrator updates as rows land)

- **AT URL CAP (2 posts) — do not cite:** the UNESCO ICH garba inscription page (ich.unesco.org, "Garba of Gujarat"), and Bali 2014 on aclanthology.org. Generic garba-heritage sources also fail the swap test. Go specific to your own subject.
- Run `node content/batches/2026-10-12-navratri-b2/capcheck.mjs` for the current truth; it reads the blogs folder.
- **Do NOT put sibling `/blog/<slug>` links in the body,** even if your prompt says "link it". They fail the TEMPLATE_LINKS checklist items and 404 if a sibling does not ship. Name the sibling topic in prose if useful; the orchestrator adds cross-links after publish.
- **aclanthology.org is at its 3-post DOMAIN cap.** Do not cite it.
- The facts.md 96.3% line is "romantic **and everyday** pages", and the #1 page type is the apology dashboard. Do not call the platform "overwhelmingly romantic".
- **At URL cap (2):** Chavda 2019 "Performing Garba" (Dance Chronicle DOI). Instagram's Dec 2025 five-hashtag cap is already the hook of garba-captions-for-instagram; caption siblings may mention it in one line but must not build on it.
- **en.wikipedia.org is at its 3-post domain cap** (the verifier counts body links; capcheck may undercount). Do not cite Wikipedia. Avoid "free"/"for free" phrasing about any third-party tool unless sourced: the verifier treats it as a pricing claim. /dandiya-partner is `isAccessibleForFree: true` per its own schema (template-spec.md); cite that if you say it is free.
- **doi.org is at its 3-post cap** as a host. Link the publisher URL (or Europe PMC) instead of doi.org.
- **At URL cap (2):** the 2017 Navratri-fasting review on Europe PMC (used by -wife and -in-english).
- **Taylor & Francis (tandfonline.com, taylorfrancis.com, doi 10.1080/…) and Sage (journals.sagepub.com, doi 10.1177/…) are AT the publisher cap.** Do not cite either publisher. Count doi.org links by the publisher they resolve to.
- Gujarati spelling: Gujarati Lexicon lists BOTH નવરાત્રી and નવરાત્રિ; navratri-wishes-in-gujarati uses નવરાત્રી throughout. Gujarati siblings should match. Roberts (openaccess.wgtn.ac.nz) and gujaratilexicon are used by that post — other Gujarati rows prefer different sources.
- **At URL cap (2):** the PTI/Business Standard dandiya-stick piece (18-inch, mango/baval wood); the Dynamite News rent-a-partner piece; the JBMR Vadodara case study (nepjol.info). pacompendium.com folk-dance METs are used by dandiya-partner-steps — garba-benefits may cite it once more (URL cap 2).
- **At URL cap (2):** CPCB Noise Pollution Rules 2000 (cpcb.nic.in).
- **At URL cap (2):** Parmar 2013 Leeds thesis (etheses.whiterose.ac.uk) and Sundar 2017 (soundstudiesblog.com).
- **At URL cap (2):** freepressjournal rent-a-partner story; deshgujarat 2025 garba pass prices. gujaratilexicon.com has 1 post-slot left.
- **gujaratilexicon.com is at its 3-post DOMAIN cap.** pacompendium.com/dancing at URL cap.
- **Journal at cap (3 posts): Frontiers in Psychology.** Do not cite it.
- **arxiv.org is at its 3-post DOMAIN cap.** Dakshina paper at URL cap.

## 9. Rules added after the first 50-post batch (BINDING)

- **50 sibling posts are already written** in `content/batches/2026-10-12-navratri-partner-b1/blogs/`. Do NOT cannibalise them. Read the 1–3 closest ones to your keyword before drafting and state the split in one sentence in the research brief. Slugs: dandiya-captions-for-instagram dandiya-invitation-card-in-hindi dandiya-invitation-card-online-free dandiya-invitation-in-marathi dandiya-night-invitation-message dandiya-partner-captions-for-instagram dandiya-partner-meaning dandiya-partner-steps dussehra-wishes-for-girlfriend dussehra-wishes garba-aur-dandiya-in-hindi garba-benefits garba-captions-for-instagram garba-invitation-card-in-gujarati garba-invitation-wording garba-night-captions-for-couples garba-partner-app-finder garba-partner-captions-for-instagram garba-partner-captions-in-gujarati garba-partner-captions-in-hindi garba-partner-captions-with-friends garba-partner-meaning-in-gujarati garba-partner-meaning-in-hindi garba-partner-meaning garba-partner-on-rent garba-partner-quotes-in-gujarati garba-partner-quotes garba-partner-vacancy-meaning how-to-ask-someone-to-be-your-garba-partner navratri-invitation-for-office navratri-invitation-message-in-hindi navratri-invitation-message navratri-ki-hardik-shubhkamnaye navratri-status-in-hindi navratri-wishes-for-best-friend navratri-wishes-for-boyfriend navratri-wishes-for-crush navratri-wishes-for-girlfriend navratri-wishes-for-husband navratri-wishes-for-love navratri-wishes-for-wife navratri-wishes-in-english navratri-wishes-in-gujarati navratri-wishes-in-hindi navratri-wishes-in-marathi navratri-wishes-long-distance navratri-wishes-with-name sharad-purnima-wishes what-to-wear-to-garba why-is-dandiya-played-during-navratri 
- **No `/blog/<slug>` links in the body at all.** Internal links are TEMPLATE_LINKS URLs only (2–4), /dandiya-partner mandatory.
- **Paragraph rule:** prose paragraphs 2–3 sentences. Copyable wishes, captions, quotes and messages go in bulleted lists or blockquote lists, never as one-line prose paragraphs. This was the most common failure last batch.
- **Sources already used in the first batch are BANNED here** (capcheck prints them; run it with `--list`). Reference instruments (drikpanchang, dsal, wiktionary, unicode, europepmc/pmc as hosts) stay exempt, but do not reuse the same PAPER.
- **Publishers to avoid entirely:** Taylor & Francis, Sage, Frontiers in Psychology, arxiv.org, aclanthology.org, gujaratilexicon.com, bhagavadgomandal.com (all hit caps last batch).
- **Scratch files MUST be named `<your-slug>-<purpose>.*`.** Never `body.md`/`draft.md`. Two agents overwrote each other last batch. Before writing your JSON, confirm its H1 is your own keyword's.
- **Downloads:** never save PDFs or downloads in the repo root. Use the scratchpad with your slug prefix.
- **Dussehra:** always give the regional split (20 Oct Delhi / 21 Oct Bengal and Mysuru in 2026). **Ashtami/Mahagauri 2026 = 19 Oct (New Delhi)**, never 18 Oct. 2027: Ashtami 7 Oct, Navami 8 Oct (Drik, New Delhi).
- **Nine colours:** days 1–7 follow the weekday; days 8–9 change by year (2026: purple, peacock green; 2027: pink, purple per Drik). Verify before printing.
- **eduyush.com** pages were refreshed to 2026; do not call them stale without reading them. Their 2026 calendar has the wrong Day 8 = 18 Oct mapping; you may say so.
- WebSearch budget: still **max 2 calls** for your row.

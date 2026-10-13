# BRIEF — 2026-10-13-halloween-b5 (BINDING) — Halloween global, Batch 5 of 8

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
- `template-spec.md` lists every feature of both (re-verified live 2026-10-13, HTTP 200). **Describe only those features.**
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
- **Firecrawl MCP is disconnected. WebSearch works (US index).** Use it first. If it errors or returns nothing, measure the SERP with
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
- `node content/batches/2026-10-13-halloween-b5/findpapers.mjs "<phenomenon query>"` (Crossref +
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
  a domain or journal in at most 3. Run `node content/batches/2026-10-13-halloween-b5/capcheck.mjs`
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

## 7. Hygiene (lessons from the last 200 posts)
- **Scratch files: `<your-slug>-<purpose>.*` only.** Never `body.md`/`draft.md` — the scratchpad is
  shared with 9 other agents and generic names have overwritten siblings' posts before.
- **Never save downloads in the repo root**; use the scratchpad with your slug prefix.
- Before writing your JSON, confirm its H1 is your own keyword's.
- `batch.json` exists: run `node scripts/verify-batch.mjs content/batches/2026-10-13-halloween-b5`
  from the repo root and fix your own lines until clean. Ignore problems on sibling slugs. Do not edit
  `batch.json`, `PLAN.json` or any sibling's files.

## 8. Output and report
Write only `blogs/<slug>.json` and `research/<slug>.md`. Report back in under 150 words: slug, body
words, FAQ count, searches used (Firecrawl/WebSearch), weak count in your top 10, sources (domains),
audit failures, one-line honest assessment, and any brief claim you found false.

## 9. Lessons carried over from Batches 1–4 (200 posts — read them)
- **Batches 1–4 are sibling sets:** `content/batches/2026-10-12-halloween-b1/blogs/`,
  `content/batches/2026-10-13-halloween-b2/blogs/`, `content/batches/2026-10-13-halloween-b3/blogs/`,
  `content/batches/2026-10-13-halloween-b4/blogs/`.
  Read the H2s of every post your prompt names; reuse NO line (5-word overlap check against ALL 200
  files) and NO idea (costume pairs, games, recipes, designs). Prefer sources none of them used;
  their source logs are the §9/§10 of each batch's BRIEF.md. Caps are counted per batch.
- Link papers via **europepmc.org** (exempt), not `doi.org` / pmc.ncbi.nlm.nih.gov.
- **No price wording** ("for free", "costs nothing") — the verifier rejects it. Label estimates.
- **Comparison table: 3–5 rows, ALWAYS.** Group rows; keep per-item detail in H3s.
- **Paragraphs:** prose 2–3 sentences; no one-sentence lead-ins; copyable lines in lists.
- **Outbound links: 3–6.**
- **Banned publishers:** Frontiers, SAGE (Psych Science, Evol Psych, JSPR, PSPB), Taylor & Francis,
  Elsevier. findpapers returns them first — check the publisher. **Megajournals** (PLOS ONE, Scientific
  Reports, MDPI journals, BMC Psychology) are already heavy across batches: prefer other journals.
- **Do not work around bot walls / CAPTCHAs / proof-of-work pages.** Use an official API if the site
  offers one, else snippet-only and say so.
- No first-party Halloween data exists: the "first-party table column" item fails honestly; never force it.
- Writers in parallel can collide: if a sibling slug in your prompt is "being written", re-read the
  blogs/ folder just before you finalise and swap any clashing idea.
- Time-sensitive facts (streaming catalogues, platform features, prices, laws): date-stamp them.
- **Cannibalisation (b4 lesson):** before choosing your angle, compare your SERP top 10 with the
  closest sibling slug(s) named in your prompt. If you share 4+ URLs, pick a clearly different
  sub-intent (audience, format, constraint) and record the overlap count in the research brief.
- **Gov caps fill fast (b4 lesson):** fda.gov, cdc.gov, who.int, nhs.uk, gov.uk, usps.com hit 3 in
  an hour last batch. Run capcheck BEFORE you fetch a gov source, not only at the end.
- Pop-culture / streaming rows: date-stamp every catalogue or trend claim ("as of October 2026").

## 10. Live spent-source notes (orchestrator appends as rows land)
- (b4 sources are logged in the b4 BRIEF §10; caps reset per batch.)
- **Used by cartoon-couple-costumes:** Europe PMC 2025 Behav Res Methods cartoon attributes + 2026 PNAS symbols; web.law.duke.edu Public Domain Day 2026; thewaltdisneycompany.com x2 (Fox deal). Pairs used: Betty Boop, Blondie & Dagwood, Simpsons-era pairs — avoid in other couple rows.
- **Used by halloween-party-thank-you-message:** Europe PMC Regan 2022 + Gray & DeSteno 2026 (Affective Science); cambridge.org Adena 2025; en.wikipedia Halloween.
- **Used by halloween-birthday-wishes:** github.com/fivethirtyeight SSA births; ons.gov.uk birthdays; ijpds.org; Europe PMC JAMA Netw Open. Birthday angle (31 Oct rarity) is owned — baby-announcement row must not repeat the birth-date rarity stats.
- **Used by 90s-couple-costumes:** Europe PMC Wolf & Zimprich 2020, Benz 2020, Doshi 2026, Sidhu 2025 (PLOS ONE); en.wikipedia x2. 21 named 90s pairs (incl. Bollywood) — couple rows must not reuse them.
- **en.wikipedia.org is FULL (3 posts) — do not cite it in this batch.**
- **Used by edgar-allan-poe-halloween-quotes:** gutenberg Raven Edition + Bacon; eapoe.org Eveleth letter 1848; poemuseum.org misattributions; Europe PMC Vora & Ramanan 2002. Poe lines are owned — teachers-quotes row must use non-Poe or different Poe lines.
- **Used by halloween-trivia-questions:** barrypopik.com; burkemuseum.org; guinnessworldrecords.com; ers.usda.gov; Europe PMC Keller 2024 npj Sci Learn; ich.unesco.org. "Trick or treat": variant "tricks or treats" in print Sault Daily Star (Ontario) 1 Nov 1917; exact wording 1927 Alberta — state it this way.
- **Used by funny-couple-halloween-costumes:** Europe PMC Humor 2025 puns, Cogn Sci 2025, J Pers 2024, HBM 2023. Pun/joke papers are spent — puns rows pick others.
- **Used by halloween-puns-for-kids:** files.eric.ed.gov Lems 2013; Europe PMC PMC10881745; readingmatrix.com; gutenberg.org. 52 kid puns owned — puns-for-girlfriend must not reuse.
- **Used by halloween-poems:** Europe PMC x2 (preschool song/poem memory; meter & memory); hsa-haiku.org; web.law.duke.edu Public Domain Day 2026 (**URL now FULL, 2 posts**); archive.org Sandburg 1916. 19 original kids' poems — poems-for-boyfriend must not reuse forms' lines. US public domain = published 1930 or earlier (as of 1 Jan 2026), not "pre-1929".
- **Used by is-halloween-a-public-holiday:** opm.gov; www.gov.uk bank holidays; irishstatutebook.ie; dopt.gov.in; lawphil.net Proc 1427; apcz.umk.pl Popelková & Zajonc 2022.
- **Used by halloween-baby-announcement:** nhs.uk dating scan; Europe PMC Harpel 2018 JMIR, Bardos 2015; reaganlibrary.gov Proc 5890; babyloss-awareness.org.
- **Used by happy-halloween-images-with-quotes:** developers.facebook.com; techradar.com (WhatsApp HD); w3.org contrast; Europe PMC J Vision 2022 + Nat Commun 2020; creativecommons.org. faq.whatsapp.com and Instagram help pages return no readable text — use developers.facebook.com or say snippet-only.
- **Used by halloween-captions-for-girls:** Europe PMC x4 (Clin Child Fam Psychol Rev 2022; Br J Health Psychol 2026 caption stigma RCT; Int J Psychol 2026; Int J Eat Disord 2026). 64 lines incl. "captions for her" from partner — boyfriend-captions and girlfriend-quotes rows must not reuse.
- **Used by pumpkin-patch-captions:** extension.psu.edu; ers.usda.gov (**URL now FULL, 2 posts**); extension.illinois.edu; commons.joe.org J Extension 2012. Clock changes: UK 25 Oct 2026 / 31 Oct 2027; US 1 Nov 2026 / 7 Nov 2027.
- **Used by halloween-quotes-for-teachers:** Europe PMC Orman 2026 ECEJ, Morales 2026 JMBE; nyc.gov COIB gift booklet; gutenberg.org Sleepy Hollow + Anne of Avonlea.
- **Used by halloween-captions-for-cats:** Europe PMC Carini 2020 + Villarreal 2026 (both MDPI Animals — MDPI now 1 post); cats.org.uk x2.
- **Used by matching-halloween-costumes-for-couples:** Europe PMC Koudenburg 2015 PLOS ONE, Schloss & Palmer 2011; fda.gov x2 (novelty makeup; decorative lenses) — fda.gov 1 post; gutenberg Frankenstein.
- **Used by halloween-costume-captions:** nrf.com 2026 survey (nrf 1 post); Europe PMC Pagnini 2025 Batman metro; theconversation.com x2 (2018, 2024).
- **Used by halloween-hashtags:** threads.com x2 (Instagram 5-hashtag cap Dec 2025; Mosseri topic tags 2023); socialmediatoday.com; pib.gov.in TikTok block; Europe PMC PMC9838373; firstmonday.org Highfield 2018. Instagram caps at 5 hashtags/post (Dec 2025) — caption rows should be consistent with that.
- **Used by halloween-bio-ideas:** help.instagram.com; help.x.com; faq.whatsapp.com; support.tiktok.com; ieeexplore.ieee.org Rogers & Jones 2021; Europe PMC Brauer & Proyer 2024 PMC12224558 (**paper now FULL, 2 posts**).
- **Correction to §4:** Firecrawl MCP is connected again this batch (firecrawl_search / firecrawl_scrape work; it refuses threads.com). Still max 2 searches per row.
- **Used by halloween-selfie-captions:** journal.media-culture.org.au Morse 2017; psyct.swu.bg Fam 2024; Europe PMC PMC9887880; cyberpsychology.eu Qutub 2021.
- **Used by halloween-costume-ideas-for-teens:** Europe PMC PMC9287711 Perfect Storm 2022 (**paper FULL, 2 posts**), JAMA Pediatrics Halloween pedestrian deaths (1 post); ecode360.com x2 (Pennsauken § 138-6, Little Silver curfew).
- **Used by halloween-nails-for-kids:** fda.gov nail care (**fda.gov now 2 posts — ONE left, reserved for halloween-face-paint-ideas**); poison.org x2; Europe PMC Cureus 2026 + Clin Ophthalmol 2026; data.europa.eu EU Reg 2025/877.
- **Used by halloween-crafts-for-adults:** Europe PMC Orui 2023, Mak 2023 Nat Med, Israel 2021; nfpa.org candle fires (nfpa 1 post). (Wikipedia is actually at 2 posts after a drop — still treat as full; keep it to sameAs only.)
- **Used by halloween-costume-ideas-for-boys:** cpsc.gov x2 releases (**cpsc.gov 2 posts? check capcheck — ONE left, reserved for toddler-halloween-costume-ideas**); ecfr.gov 1610.1 + 1616.2; Europe PMC UK road injuries 2021 + Child Dev 2024. CPSC Halloween safety pages now 404.
- **Used by cheap-halloween-costumes:** nrf.com (**nrf.com now FULL, 3 posts**); epa.gov textiles; Europe PMC Sci Rep 2025 second-hand, ESPR 2026 textile burning, J Laryngol Otol 2026 button batteries. Costumes used incl. "overworked office vampire".
- **Used by toddler-halloween-costume-ideas:** Europe PMC Bastos 2021, Bussu 2025, Salles 2022 (MDPI); healthychildren.org car-seat; cpsc.gov small parts (**cpsc.gov FULL? — 3 posts with boys x2 releases; do not cite**).
- **Used by halloween-movies-on-disney-plus:** disneyplus.com x2; press.disneyplus.com; bbfc.co.uk; filmratings.com; cogitatiopress.com Siles 2025. Dove Press = Taylor & Francis imprint (banned).
- **Firecrawl credits are low — prefer WebSearch; use Firecrawl only when a page will not fetch otherwise.**
- **UPDATE: Firecrawl MCP is DISCONNECTED again. Use WebSearch, then DuckDuckGo via ctx_fetch_and_index (§4).**
- **Used by halloween-face-paint-ideas:** ecfr.gov 21 CFR 70.5 + 73.2995 (ecfr now 2 posts — ONE left); fda.gov Eye Cosmetic Safety (**fda.gov FULL**); Europe PMC Yu & Schalock 2026, Mercan 2024, Mokashi 2025.
- **Used by what-to-be-for-halloween:** Europe PMC Iyengar & Lepper 2000, Schwartz 2002, Peterson & Cheng 2020, White 2017 Batman Effect.
- **Used by halloween-costumes-for-school:** dpsk12.org; diefenbaker.sd38.bc.ca; bates.wsd.net; emerson.garvey.k12.ca.us; rockfordschools.org; files.eric.ed.gov Kawash 2011 (eric now 2 posts — ONE left).
- **Used by pop-culture-halloween-costumes:** the-numbers.com; netflix.com Top 10 x2; trends.withgoogle.com; Europe PMC Lorenz-Spreen 2019.
- **Used by non-scary-halloween-movies:** darkroom.bbfc.co.uk guidelines; bbfc.co.uk (**bbfc now 2 posts — ONE left**); Europe PMC Kiss 2024 Sci Rep; tidsskrift.dk Leviathan 2024. 12 films incl. Ghost and Mrs Muir, Blithe Spirit, Bell Book and Candle, Arsenic and Old Lace, Clue, Death Becomes Her, Addams Family Values, Little Shop of Horrors, Bhoothnath — movie rows must not lead with these.
- **BANNED reminder:** Dove Medical Press journals (PRBM, etc.) are Taylor & Francis imprints — never cite.
- **bbfc.co.uk is FULL (3 posts).** non-scary dropped Zhan & Ding (Dove/T&F).
- **Used by when-to-put-up-halloween-decorations:** Europe PMC Kamerlin 2024, Hidalgo 2020; gml.noaa.gov solar calc; leg.state.fl.us § 720.3045; ich.unesco.org Día de los Muertos 2008.
- **SEARCH UPDATE: WebSearch may return a session-cap error and Firecrawl is DISCONNECTED. If WebSearch fails, go straight to DuckDuckGo: ctx_fetch_and_index("https://html.duckduckgo.com/html/?q=<encoded keyword>", "<slug>-serp"), then lite.duckduckgo.com. Label it "DuckDuckGo, lower confidence".**
- **Used by halloween-tv-episodes:** bbc.co.uk Inside No. 9; tvmaze.com; cogitatiopress.com Siles 2025 (**paper FULL, 2 posts**); Europe PMC Sci Rep 2026. Original networks for 3 shows unsourced (flag in REPORT).
- **Used by halloween-puns-for-girlfriend:** degruyterbrill.com Miczo & Averbeck 2020 HUMOR; Europe PMC Huh 2025 PLOS ONE; osf.io Holtzman 2020; unicode.org.
- **JOURNAL CAP: PLOS ONE is FULL (3 posts in b5). Do not cite any PLOS ONE paper.**
- **Used by halloween-card-for-boyfriend:** Europe PMC Skolarus 2026 Trials, Vannoy 2026 Behav Sci (MDPI); usps.com; royalmail.com; indiapost.gov.in; canadapost PDF.
- **Used by halloween-garland-ideas:** command.com x2; Europe PMC Saß & Kuhnert 2026 RKI; electricalsafetyfirst.org.uk; london-fire.gov.uk.
- **Used by halloween-poems-for-boyfriend:** Europe PMC Wassiliwizky 2017, Xu 2026 Commun Biol; gutenberg Burns Halloween; copyright.cornell.edu.
- **Used by halloween-movie-night-for-couples:** Europe PMC Lüscher 2022 PMC9808656, Coan 2017 PMC5647795; justwatch.com x3. Films: Werewolves Within, Ready or Not, American Werewolf in London, Late Night with the Devil, Under the Shadow, Autopsy of Jane Doe, Talk to Me, The Descent.
- **Used by halloween-wreath-ideas:** dublincity.ie DFB; Europe PMC Polruang 2025 Sci Rep, Roy 2019 GCB; aspca.org x2.
- **Used by virtual-halloween-date-ideas:** ucalgary.scholaris.ca Neustaedter & Greenberg 2012; gutenberg Burns; eclipse.gsfc.nasa.gov; zoom.com; workspace.google.com; support.apple.com.
- **Used by halloween-promposal-ideas:** Europe PMC Givi & Kirk 2024, Gupta 2018, Toledano 2025; bostonprep.org; cbsnews.com. SERP overlap with b4 halloween-proposal-ideas: 6 URLs (cannibalisation risk — REPORT).
- **Used by romantic-halloween-movies:** filmratings.com, justwatch.com (both FULL); Europe PMC BJPsych Open 2021, Rogge 2013; sas.rochester.edu.
- **Used by halloween-questions-to-ask-your-boyfriend:** Europe PMC Fornari 2026, Sprecher 2021, West 2025 + Kleinert 2026 (Commun Psychol — journal now 1 post, 2 papers).
- **Used by halloween-captions-for-boyfriend:** research.uca.ac.uk Such 2017; link.springer.com Curr Psychol 2020; ijoc.org 2015; threads.com (URL now 2). SERP overlap with b2 captions-for-couples ~5 URLs (REPORT).
- **Used by happy-halloween-my-love:** Europe PMC Aguilar-Raab 2025, Hall 2022; gov.uk; nist.gov; iana.org.
- **Used by halloween-conversation-starters:** Europe PMC Epley & Schroeder 2014, Mastroianni 2021 PNAS, Atir 2022 PNAS (PNAS now 2 posts? check), Speer 2024 Nat Commun.
- **Used by vampire-pickup-lines:** gutenberg #345, #6087, #10007; Europe PMC Nakamine 2017, Wade 2018.
- **Used by halloween-quotes-for-girlfriend:** Europe PMC Bode 2025, Fujisaki 2026 SCAN; copyright.cornell.edu (URL now 2); gutenberg x3.

# BRIEF — 2026-10-13-halloween-b4 (BINDING) — Halloween global, Batch 4 of 8

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
- `node content/batches/2026-10-13-halloween-b4/findpapers.mjs "<phenomenon query>"` (Crossref +
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
  a domain or journal in at most 3. Run `node content/batches/2026-10-13-halloween-b4/capcheck.mjs`
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
- `batch.json` exists: run `node scripts/verify-batch.mjs content/batches/2026-10-13-halloween-b4`
  from the repo root and fix your own lines until clean. Ignore problems on sibling slugs. Do not edit
  `batch.json`, `PLAN.json` or any sibling's files.

## 8. Output and report
Write only `blogs/<slug>.json` and `research/<slug>.md`. Report back in under 150 words: slug, body
words, FAQ count, searches used (Firecrawl/WebSearch), weak count in your top 10, sources (domains),
audit failures, one-line honest assessment, and any brief claim you found false.

## 9. Lessons carried over from Batches 1–3 (150 posts — read them)
- **Batches 1–3 are sibling sets:** `content/batches/2026-10-12-halloween-b1/blogs/`,
  `content/batches/2026-10-13-halloween-b2/blogs/`, `content/batches/2026-10-13-halloween-b3/blogs/`.
  Read the H2s of every post your prompt names; reuse NO line (5-word overlap check against ALL 150
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

## 10. Live spent-source notes (orchestrator appends as rows land)
- **Used by boo-basket-for-wife:** Europe PMC Crowther 2026, Jiang/Chiu/Liu 2021; nhs.uk pregnancy foods; pe.usps.com Pub 52 (alcohol nonmailable).
- **Used by halloween-hairstyles:** Europe PMC Rosenberg 2025, Hwang 2024; nhs.uk (2 in b4 — ONE left), fda.gov, bucksfire.gov.uk.
- **Used by halloween-songs:** Europe PMC Annals NYAS 2026, Phil Trans B 2026, JASA 2020, Biol Lett 2010; officialcharts.com x2. Row 191 party playlist: use different music papers.
- **Used by boo-basket-ideas-for-girlfriend:** Europe PMC Oishi 2025, cambridge.org Adena 2025, onlinelibrary.wiley.com Haltman 2024, journals.ashs.org Lai & Huang 2013.
- **Used by halloween-ideas-for-wife:** Europe PMC Roeters & Gracia 2016, Aydin & Buyukcan-Tetik 2021, Arlinghaus 2019, Gray/Growney/English 2023.
- **Used by halloween-porch-decorations:** Europe PMC Kuzuoglu 2024 PMC11593799, foodallergy.org, nationalautismassociation.org, access-board.gov, electricalsafetyfirst.org.uk, london-fire.gov.uk.
- **Used by scary-halloween-costumes:** Europe PMC PMC5024669 uncanny valley, PMC8831965 clown phobia; my.clevelandclinic.org; healthychildren.org; en.wikipedia x2 (wikipedia 1 post).
- **Used by boo-basket-for-best-friend:** folklore.usc.edu booing, Europe PMC PMC10840555 + PMC12862200, nfpa.org dorm fires, coastal.edu booing chain. Row 163 what-is-a-boo-basket: avoid folklore.usc.edu or reuse once only.
- **Used by y2k-halloween-costumes:** Europe PMC Acerbi 2012, Fajardo 2024; collections.vam.ac.uk x2; books.google Ngram; theguardian.com 2022. SERP overlap with 90s: 0/10.
- **Used by boo-basket-ideas-for-boyfriend:** ijiemjournal.uns.ac.rs Walcher 2016, kuscholarworks.ku.edu Hall 2017, www.usps.com x2 (USPS now 2 b4 posts).
- **Used by boo-basket-for-kids:** Europe PMC Meristo 2025, Brady 2023; ecfr.gov 1501; kidshealth.org.
- **Used by halloween-long-distance-relationship-ideas:** Europe PMC Wu 2025 SCAN, Hansom & Guerrero 2025; usps.com x2 (www.usps.com now 2 → ONE left); gov.uk + nist.gov clocks.
- **Used by halloween-quotes-for-boyfriend:** Europe PMC Eckstein 2023 SCAN, Mostova 2022 PLOS ONE; gutenberg Burns + Jane Eyre.
- **Used by halloween-couple-nicknames:** Europe PMC Seider 2009; ans-names.pitt.edu DiGirolamo 2012 (Names journal now published OA by Pitt — accepted, not T&F-hosted); learn.microsoft.com; support.apple.com. SERP overlap with b1 nicknames: 1/9 (spam only).
- **Used by halloween-couple-memes:** firstmonday.org Brody & Cullen 2023, Europe PMC Driver & Gottman 2004 + McLatchie 2024, gottman.com. Row 171 couple jokes: avoid Gottman sources.
- **Used by halloween-couple-poses:** Europe PMC Dawel 2025, Witkower 2024, Knight 2023, Girard 2021. SERP overlap with b2 photoshoot: 0 URLs.
- **Used by halloween-couple-goals:** Europe PMC Taba 2020, Chang/Algoe 2022; link.springer.com Fejes-Vékássy 2020; academic.oup.com Utz & Beukeboom 2011.
- **Used by halloween-love-letter:** Europe PMC Chishima 2021, Catty & Salisbury 2026; usps.com (**www.usps.com FULL**), pe.usps.com (2 — ONE left).
- **Used by halloween-pickup-lines-tagalog:** diksiyonaryo.ph, pnuminresearchportal.org Perez & Pantorilla 2025, plarideljournal.org Reyes 2023, lawphil.net Proclamations 1006/1427, ptvnews.ph.
- **Used by halloween-couple-jokes:** Europe PMC Hahn & Campbell 2016, Laumer 2024, Andrews & Dawes 2025; nsuworks.nova.edu Anderson & DiTunnariello 2016.
- **Used by what-is-a-boo-basket:** web.archive.org (beenbooed 2009, TikTok #boobasket 2023), pib.gov.in TikTok ban 2020, Europe PMC Nowak & Roch 2007, Dobrogowska 2026. SERP overlap with b1 hub: 0.
- **Used by halloween-proposal-ideas:** research.gold.ac.uk Hoelscher 2022, ich.unesco.org, iii.org, hauntedhappenings.org.
- **Used by halloween-engagement-captions:** Europe PMC Papp 2012, Toma & Choi 2015, Lee/Gillath/Miller 2019; emilypost.com x2; ncsc.gov.uk.
- **Used by witch-pickup-lines:** Europe PMC DiDonato & Jakubiak 2016; doi.org→MDPI Religions Miller 2022 (**MDPI now 3 in b4 → FULL**); pewresearch.org 2025; theconversation.com Tervanotko 2025; cem.va.gov.
- **Used by halloween-wedding-ideas:** Europe PMC Mäder 2023, umass.edu extension, london-fire.gov.uk (URL now 2 → FULL), ich.unesco.org (URL now 2 → FULL).
- **Used by girl-group-halloween-costumes:** Europe PMC Becker 2013 PMC3776206; firstmonday.org Wagner 2016 (firstmonday now 2 b4 posts); bletchleypark.org.uk; nasa.gov Dorothy Vaughan; nationalarchives.gov.uk suffragettes. b1 group costumes already used seasons/planets — avoid.
- **Used by halloween-ideas-with-friends:** Europe PMC PMC12217411 Priestley 2025, PMC12212089 Zhan & Ding 2025; nps.gov Ten Essentials; trussell.org.uk. Howlett 2026 BJSP is spent (2 posts).
- **Used by halloween-games-for-adults:** europeanjournalofhumour.org Proyer 2013; journalofplayinadulthood.org.uk Ruddock 2025; niaaa.nih.gov alcohol-overdose page; en.wikipedia "Murder mystery game" (wikipedia now 2 b4 posts). Games used: Cauldron Pong, flip-cup relay, 45-min mystery — do not repeat.
- **Used by why-is-halloween-celebrated:** theconversation.com Whitaker 2019; Europe PMC PNAS 2025 Ozbay (safe fear) + Xygalatas (ritual synchrony); nrf.com 22 Sept 2026 release; en.wikipedia Allhallowtide. Do not reuse these papers.
- **Used by halloween-games-for-seniors:** Europe PMC Jiao 2025 BMC Geriatrics reminiscence; alzfdn.org; bhf.org.uk takotsubo; who.int falls; diabetes.org.uk sweeteners. Games used: Riddle/Object Bingo, radio-play listening, Monkey's Paw reading.
- **Used by halloween-ideas-for-teachers:** Europe PMC Skene 2022 guided play, Santos 2023 Winnipeg allergy; butlermiddle.canyonsdistrict.org; ars.htps.us. ich.unesco.org Día de los Muertos URL now FULL (3).
- **Used by halloween-in-canada:** narrativeresearch.ca 2025 poll; persee.fr Lherm 2005; dchp.arts.ubc.ca trick-or-treat; climate.weather.gc.ca; recalls-rappels.canada.ca; nrc.canada.ca DST. 1927 "trick or treat" = Blackie, Alberta (Lethbridge Herald print); Ontario variants 1917.
- **Used by halloween-around-the-world:** redalyc.org Brandes 2000; f1000research.com Ha 2023 Itaewon; census.gov; al.sp.gov.br Dia do Saci; yougov.com; web.archive.org NDTV Saudi 2022.
- **Used by things-to-do-on-halloween-instead-of-trick-or-treating:** Europe PMC de Oliveira 2026 PMC13599684, Nocerino 2026 PMC12900628; autism.org.uk sensory; stsaviours.net Light Party; achurchnearyou.com.
- **Used by halloween-sleepover-ideas:** Europe PMC Taranu 2025, Baum 2014, Thurber 2007 homesickness, Paruthi 2016; gutenberg.org Saki + E. F. Benson. ("The Open Window" also in teachers — clash to fix.)
- **Used by halloween-countdown-ideas:** Europe PMC Gardner 2014 IJBNPA, Shahnawaz 2026, Nawijn 2010, Dawson & Johnson 2026.
- **Used by halloween-colors-meaning:** archive.org Kelley 1919 + Dennison Bogie Book; Europe PMC 2025 PBR colour review + 2019 RSOS; foodallergy.org teal origin (URL cap 2 FULL); fullfact.org blue bucket.
- **Used by halloween-team-costumes:** acas.org.uk; Europe PMC Sutcliffe 2025 Cureus, Zacher 2023 Sci Rep (Sci Rep now 2 b4 posts), Patel 2021 BMC HSR. Costume day = Fri 30 Oct 2026 / 29 Oct 2027.
- **Used by what-does-halloween-mean:** etymonline.com; dsl.ac.uk; dil.ie; teanglann.ie; doi.fil.bg.ac.rs Heppa 2025 Folkloristika; books.google Ngram (Hallowe'en share). Samhain = "November" in modern Irish.
- **Used by halloween-party-playlist:** Europe PMC Bigand 2025 J Neurosci, Alen 2026 Alcohol & Alcoholism; epa.nsw.gov.au noise; copyright.gov 17 USC 101; pplprs.co.uk. Avg track 3:50 (~15.7/hr).
- **Used by halloween-in-ireland:** arrow.tudublin.ie Nic Philibín 2025; duchas.ie; into.ie circular 0018/2026; irishstatutebook.ie CJA 2006 s.68; dublincity.ie DFB; teanglann.ie (now 2 b4 posts).
- **Used by halloween-jokes-for-teens:** Europe PMC J Sch Health 2026 teasing survey, Halfpenny 2020 humour styles; doi.org → Psihologija 2026; corp.oup.com 2024 (brain rot). doi.org resolver now at 3 b4 posts (witch relink will free one).
- **Used by halloween-crafts-for-toddlers:** Europe PMC Yoo 2022 ECEJ, Noda 2025 crayon ingestion; cpsc.gov small parts; acmiart.org; ecfr.gov 16 CFR 1500.14 (ecfr.gov now 2 b4 posts, ONE left). Cookie decorating not used.
- **Used by halloween-treats:** fda.gov x2 (Halloween safety tips; THC copycat edibles); Europe PMC Ridolo 2024; aspca.org chocolate/xylitol; allergyuk.org 14 allergens; who.int sugars. **fda.gov and who.int now FULL (3).**
- **Used by halloween-cookies:** Europe PMC Dadalı & Özcan 2026 J Food Sci; fda.gov x2 (flour; allergens); fsis.usda.gov x2 (egg icing; freezing). fsis.usda.gov now 1 b4 post.
- **Used by halloween-movies-for-toddlers:** who.int WHO 2019 (who.int FULL); Europe PMC Garrison 2011 + 2012; tvguidelines.org; bbfc.co.uk. SERP overlap with b-kids movies 5/10 Google — cannibalisation risk, flag in REPORT.
- **Used by halloween-cookies (final):** Europe PMC Dadalı & Özcan 2026; cdc.gov no-raw-dough; www.gov.uk FSA allergy; fsis.usda.gov x2. fda.gov removed. **cdc.gov and www.gov.uk now FULL.**
- **Used by halloween-desserts:** Europe PMC Spence 2019 Exp Psych, Della Fontana 2025; poison.org; federalregister.gov 2026-15920 (Red 3 reinstated 5 Aug 2026; food deadline 15 Jan 2027); www.gov.uk FSA; foodsafety.gov.
- **Used by halloween-costumes-for-glasses-wearers:** Europe PMC Agarwal & Sharma 2021 mask fog, Berenson 2019 cosmetic lenses; aao.org; aop.org.uk. fda.gov removed (fda back to 2).
- **Used by trunk-or-treat-ideas:** Europe PMC Rice 2012 PMC3415800, Anthikkat 2013 PMC3679758; nfpa.org Halloween (nfpa 2 b4); access-board.gov §308 (2 b4); epilepsysociety.org.uk; ehs.harvard.edu dry ice.
- **Used by halloween-costumes-for-pregnant-women:** Europe PMC Shamsaei 2022; uwlpress.uwl.ac.uk Griffin 2026; acog.org; nhs.uk (now FULL); canada.ca Health Canada cosmetics.

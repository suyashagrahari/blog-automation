# BRIEF — 2026-10-13-halloween-b2 (BINDING) — Halloween global, Batch 2 of 8

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
  year", no 2026-only framing in titles unless the keyword itself carries a year. Row 94 (`halloween in australia`)
  absorbs "halloween 2026 australia dates": give the dates for 2026 and 2027, not a 2026-only framing.
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
- **Firecrawl MCP is disconnected this session. Use `WebSearch`** (US-served index). Say so in the
  brief and lower confidence for UK/AU/IN-phrased rows (add the country to the query).
- Fetch the top 5 competitor pages with **`ctx_fetch_and_index`** (WebFetch is blocked). Pages that
  return 403/429 may be judged from their snippet only; say so. Expect hijacked-subdomain spam in
  WebSearch results: count it as weak, never analyse it as a top-5 page.
- **No browser tools** (PolterTab, Playwright, claude-in-chrome): they share one tab across agents.
- `content/keywords/2026-10-12-halloween-global/serps.md` holds 40 measured SERPs. If your keyword or
  a sibling is there, use it as corroboration. Known incumbents: today.com, rd.com, parade.com,
  goodhousekeeping.com, cosmopolitan.com, adobe.com, hallmark/americangreetings (wishes), imdb/variety
  (movies), costume retailers. These are competitors — **never cite or link them.**
- **Gate 4 abort:** if your top 10 has 0 weak results, write only the research brief and report why.

## 5. Phase 3 — research
- `node content/batches/2026-10-13-halloween-b2/findpapers.mjs "<phenomenon query>"` (Crossref +
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
  a domain or journal in at most 3. Run `node content/batches/2026-10-13-halloween-b2/capcheck.mjs`
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
- `batch.json` exists: run `node scripts/verify-batch.mjs content/batches/2026-10-13-halloween-b2`
  from the repo root and fix your own lines until clean. Ignore problems on sibling slugs. Do not edit
  `batch.json`, `PLAN.json` or any sibling's files.

## 8. Output and report
Write only `blogs/<slug>.json` and `research/<slug>.md`. Report back in under 150 words: slug, body
words, FAQ count, searches used (Firecrawl/WebSearch), weak count in your top 10, sources (domains),
audit failures, one-line honest assessment, and any brief claim you found false.

## 9. Lessons carried over from Batch 1 (2026-10-12-halloween-b1, 50 posts — read them)
- **Batch 1 is a sibling set too.** Its 50 posts are in `content/batches/2026-10-12-halloween-b1/blogs/`.
  Before outlining, read the H2s of any Batch 1 post your prompt names, and reuse NO line from it.
  Caps are counted per batch, but **prefer sources Batch 1 did not use**; its source log is
  `content/batches/2026-10-12-halloween-b1/BRIEF.md` §9.
- Link papers via **europepmc.org** (exempt), not `doi.org` (a resolver the cap script cannot attribute)
  and not pmc.ncbi.nlm.nih.gov (reCAPTCHA). Find a PMCID with `findpapers.mjs` or the Europe PMC REST API.
- **The verifier rejects price wording ("for free", "costs nothing")** because facts.md has no pricing block.
- Frontiers, SAGE (incl. Psychological Science, Evolutionary Psychology), Taylor & Francis are the
  usual traps: findpapers returns them first. Check the publisher before drafting.
- No first-party Halloween data exists, so "At least one table column uses first-party data" will
  usually fail honestly. Do NOT force an unrelated facts.md number into a table to close it.
- Copyable lines must be in lists; one-sentence lead-ins before lists fail the paragraph rule.
- Cross-check every original line against all sibling files (both batches) for 5-word overlaps.

## 10. Live spent-source notes (orchestrator appends as rows land)
- **Used by halloween-captions-for-instagram:** Europe PMC Zhang 2020 JMIR, Abbas 2021, Inoue & Yoshida 2026 PLOS ONE, Harper 2024 Health Expect. Caption siblings: pick other caption-emotion papers.
- **Used by vampire-halloween-captions:** Europe PMC PMC7458347 (Balkan vampire sources), PMC4245124 (Drawsko burials), PMC12137733 (wampir/upiór); gutenberg Vampyre #6087 + Carmilla #10007; fda.gov novelty makeup.
- **Used by halloween-nail-captions:** Europe PMC Ali & Thomsen 2026, Benlidayi 2026, Kaliyadan & Pasquali 2026 (photo consent); Zhivagui 2023 (UV dryer), Kamińska 2026 (gel), Wang & Lipner 2024 (DIY nail cosmetics). Nails rows 69/72: pick different safety papers or reuse at most once.
- **Used by halloween-quotes-for-kids:** files.eric.ed.gov x2 (Grofčíková 2021, Harper 2011), Europe PMC Goswami 2022 + BMC Psychology 2026 review; gutenberg Riley #9777, Stevenson #136.
- **Used by october-quotes:** gutenberg x4 (Keats, Thoreau Excursions, Jackson Calendar of Sonnets, Frost A Boy's Will), esf.edu leaf colour, PMC7489524 Winthorst 2020. NOTE: Frost is PD in US only (UK copyright to end-2033).
- **Used by witch-quotes:** famous-trials.com (Linder), salem.lib.virginia.edu, peterleeson.com Leeson & Russ 2018, Europe PMC PMC10271903 Kwaschik 2023, theconversation.com Dunning 2025 (witch iconography — history-of-halloween row 100 should pick other sources), gutenberg.
- **Used by diy-halloween-costumes:** Europe PMC Bone 2026 Sci Rep crafts/wellbeing, Marsh 2022 IKEA effect; cpsc.gov Pub 100; healthychildren.org; ecfr.gov 16 CFR 1610.
- **Used by vampire-quotes:** Europe PMC Gómez-Alonso 1998, Cox 1995, Daniels-Higginbotham 2019 PMC6769528; gutenberg #6087; en.wikipedia Arnold Paole.
- **Used by family-halloween-costumes:** Europe PMC x3 (BMJ Paed Open 2026 carriers; Frontiers Psych 2025 teen rituals), healthychildren.org (**URL now in 2 posts → FULL**), aspca.org, pdsa.org.uk.
- **Used by halloween-movie-quotes:** web.law.duke.edu Public Domain Day, guides.library.cornell.edu, copyright.gov Circular 33, PMC7492010 Scrivner 2020, en.wikipedia (now 2), en.wikiquote.org.
- **Used by halloween-costume-ideas-for-kids:** kidshealth.org, safekids.org, Europe PMC Ben-Sasson 2009, Yin 2026, Francis & Gibson 2023. NOTE: CDC Halloween pages 404; CPSC bot-blocked.
- **Used by unique-halloween-costumes:** nrf.com (22 Sept 2026 press release with 2026 top costumes + 7 Oct 2025 blog; **nrf.com 1 of 3 posts** — reserve the other 2 for rows needing spending/costume data, e.g. 99 party favors, 83 couple shirts), blog.google Frightgeist 2025, Europe PMC Liang 2024, Capuano 2024, D'Silva 2018.
- **Used by halloween-decorations-ideas:** nfpa.org x2 (decoration fires; cords/GFCI blog), cbc.ca cobwebs/wildlife, aspca.org (URL now 2 → FULL), cambridge.org microplastics 2025, Europe PMC lamp colour 2026. diy-halloween-decorations (73) must use different safety pages.
- **Used by halloween-outfit-ideas:** osf.io Burns 2019 replication, docs.lib.purdue.edu Van Stockum & DeCaro 2014, rshare.library.torontomu.ca Scott 2023, epa.gov textiles, ncei.noaa.gov normals, metoffice.gov.uk.
- **Used by easy-halloween-costumes:** archive-ouverte.unige.ch Scheibehenne 2010 (choice overload ≈ null), Europe PMC Pisauro 2026, Salles 2022 (PMC9819701 — 1 of 2 in b2), dermnetnz.org, fda.gov (**fda.gov now FULL in b2; novelty-makeup URL FULL**).
- CORRECTION: fda.gov is in 2 posts (vampire-captions, easy-costumes) — ONE slot left; the novelty-makeup URL is FULL.
- **Used by simple-halloween-nails:** cosmoderma.org Bansal & Grover 2024, PMC12663605 acetone fumes, PMC13294297 HEMA allergy, aad.org healthy nails (aad.org 1 post).
- **Used by halloween-movies-to-watch:** Europe PMC Cureus 2025 horror/personality, BMC Psych 2026 frightening media, PLOS ONE 2022 content warnings; filmratings.com; copyright.gov Circular 15A; archive.org.
- **Used by easy-halloween-makeup:** Europe PMC Sukakul & Svedman 2025, fda.gov colour additives (**fda.gov now FULL**), nhs.uk eye injuries, unesco.org Day of the Dead.
- **Used by halloween-nails:** Europe PMC IDOJ 2024 Bansal (now 2 → FULL), J Cosmet Dermatol 2025 review, Sci Rep 2026 salon ventilation; osha.gov x2.
- **Used by funny-halloween-costumes:** Europe PMC Brigaud & Blanc 2021, Miczo & Zhao 2026, Cao 2025; now.humboldt.edu; nhs.uk heat exhaustion; safekids.org (URL now 2 → FULL).
- **Table rule:** comparison tables must have 3–5 rows (two writers built 7-row tables). Group rows if needed.
- **Used by 80s-halloween-costumes:** PMC9948635 Zhang 2023 nostalgia, collections.vam.ac.uk x3, kpbs.org scrunchie 1986, cpsc.gov candle fires (cpsc.gov 2 posts — ONE left).
- **Used by halloween-messages-for-boyfriend:** Europe PMC Rogge 2026, Huh 2025, Meier 2025, Forshaw 2025. Row 87 love-messages: avoid Rogge + Huh.
- **Used by family-halloween-movies:** Europe PMC Du 2022, Chen & Yeung 2026, Paruthi 2016 AASM; bbfc.co.uk x2; filmratings.com (now 2 posts).
- **Used by diy-halloween-decorations:** Europe PMC Petreca 2025, button-battery 2026, Rogasch 2026 epoxy, Jain 2023 saws; nhs.uk (**nhs.uk now FULL**), epa.gov (now 2 — ONE left).
- **Used by halloween-gift-ideas-for-girlfriend:** Europe PMC Pollmann & van Beest 2013 PMC3873259, Stenlund 2024 PMC11659422, Van Boven & Gilovich 2003 (abstract); gutenberg Frankenstein #84.
- **Used by halloween-couple-outfit-ideas:** Europe PMC Wong 2018 PMC5773214, Tea-makorn & Kosinski 2020 PMC7550338 (couple facial similarity); weather.gov wind chill; nhtsa.gov pedestrian.
- **Used by halloween-captions-for-couples:** Europe PMC Corsbie-Massay 2024 PMC11351969, Métellus 2025 PMC12445260, Sullivan 2021 PMC8322522, Stammwitz & Wessler 2021 PMC8598037.
- **Used by halloween-games-for-couples:** Europe PMC Walker 2023, Yang 2024, Chen 2025 BMC Psychol, Marcus 2004.
- **Used by halloween-pickup-lines-for-tinder:** Europe PMC Bruch & Newman 2018, van der Zanden 2022, Dürnberger 2022; help.tinder.com; policies.tinder.com.
- **Used by halloween-love-puns:** en.wiktionary boo, onlinelibrary.wiley.com Hall 2017 (abstract), ejop.psychopen.eu Saroglou 2010, Europe PMC Palmann & Miller 2025.
- **Used by halloween-couple-shirts:** Europe PMC Kocur 2025, dbpia.co.kr Yoo 2010, ftc.gov care labels, epa.gov textiles (**epa.gov now FULL**), uspto.gov.
- **Used by halloween-couple-photoshoot-ideas:** Europe PMC Say 2025, gml.noaa.gov, support.google.com, hse.gov.uk, london-fire.gov.uk, bls.gov.
- **Used by famous-halloween-couples:** Europe PMC 2026 parasocial review, 2018 Sci Rep + PLOS ONE caricature studies; web.law.duke.edu x2 (Public Domain Day 2024/2025 — duke now 2 posts); nobelprize.org. NOTE: Addams cartoons (1938) not PD until 2034; the Bride is from the 1935 film.
- **WebSearch HIT ITS SESSION CAP.** If WebSearch returns nothing/errors, measure the SERP ONCE with `ctx_fetch_and_index("https://html.duckduckgo.com/html/?q=<url-encoded keyword>", "<slug>-serp")` (or a node fetch inside ctx_execute) and say so in the brief (DuckDuckGo, lower confidence).
- **Used by halloween-love-quotes:** Europe PMC Benfante 2024 Heliyon, Özeren 2025 Nursing Open, Pala & Güler 2026 BMC Psych; gutenberg x3. Measured overlap with b1 romantic-halloween-quotes: 3 of ~9 URLs (~35%, DDG) — moderate; re-measure on Google before merging.
- **Used by ghost-pickup-lines:** Europe PMC Navarro 2020, Biolcati 2021, Atalar 2025; unicode.org emoji list.
- **Used by halloween-love-messages:** Europe PMC Hoult 2025, Kocur 2025 PMC12193689 (**now 2 posts → FULL**, shared with couple-shirts), Okati 2025, Imai 2023.
- **Used by halloween-messages-for-best-friend:** Europe PMC Roberts & Dunbar 2015 PMC4626528, van der Mey-Baijens 2025 PMC12217408; gov.uk + nist.gov clocks; drikpanchang Diwali 2027.
- **Used by halloween-couple-tattoos:** Europe PMC IJD 2022 regret, Dermatol Res Pract 2024, J Cosmet Dermatol 2026 + 2021; health.state.mn.us x2 (henna PPD, shop checklist). Cureus is at 3 posts in b2 → FULL.
- **Used by halloween-captions-for-best-friends:** kclpure.kcl.ac.uk Such 2017 (photo consent), Europe PMC PMC5409138, PMC6115014, PMC9247916, PMC11288408.
- **Used by halloween-quotes-for-best-friend:** Europe PMC Holt-Lunstad 2010 PMC2910600, Kim 2023 PMC10689060, Dunbar 2025 PMC11918532; gutenberg #2944 #2808 #1524.
- **Used by things-to-do-on-halloween-night:** cdc.gov 1997 MMWR (cdc.gov 2 posts), PMC8430693 Hsu 2021, PMC7532006 Leung 2020, joelbest.net candy myth (history-of-halloween row 100 may reuse once), foodallergy.org Teal Pumpkin.
- **Used by halloween-costumes-for-work:** Europe PMC Wang & Tang 2026 PMC13203499, eeoc.gov x2 (harassment, religious), osha.gov OSHA 3170 (osha.gov now 2 → ONE left).
- **Used by halloween-wishes-for-colleagues:** Europe PMC Sci Rep 2026 workplace thanks + 2025 UK loneliness; eeoc.gov (2 posts — ONE left), acas.org.uk, gov.uk + nist.gov clock URLs (FULL).
- **Used by halloween-ideas-for-nurses:** england.nhs.uk uniforms 2020, PMC12932925, PMC12337441, fsis.usda.gov 2-hour rule, truthaboutnursing.org, nam.ac.uk.
- **Used by halloween-games-for-teens:** Europe PMC Chein 2011, Slagter 2026, van der Kruk 2023; niaaa.nih.gov underage drinking.
- **Used by halloween-in-australia:** abc.net.au x2, mja.com.au Porter & Grills 2013, sydney.edu.au (also ranks #1 — flagged), bom.gov.au, transport.nsw.gov.au. history-of-halloween may reuse Porter & Grills once.
- **Used by halloween-party-games-for-kids:** Europe PMC Zhang 2025, Jusko 2026; ecfr.gov 16 CFR 1501 (ecfr 2 posts); foodallergy.org Teal Pumpkin (**URL now FULL**).
- **Used by halloween-party-activities:** Europe PMC Pearce 2015, Dunbar 2016, Wiessner 2014; usfa.fema.gov; gutenberg x2.
- **Used by halloween-party-favors:** nrf.com (URL now 2 → FULL), ecfr.gov 1500.19 (**ecfr.gov FULL**), Europe PMC PMC10811631, PMC5749710, PMC12780796; foodallergy.org non-food list (**foodallergy.org FULL**).
- **Used by history-of-halloween:** theconversation Bitel 2024, thecanadianencyclopedia.ca, blogs.loc.gov Winick 2020, archive.org Bogie Book, anokahalloween.com, mdpi.com Kim 2025, udspace.udel.edu Best.

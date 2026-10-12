# BRIEF — 2026-10-12-halloween-b1 (BINDING)

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
  year", no 2026-only framing in titles unless the keyword itself carries a year (row 43
  `halloween 2026 date` → slug `when-is-halloween`: give 2026, 2027 and 2028 dates and why it never moves).
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

## 4. Phase 1 — SERP. HARD BUDGET: at most 2 searches for your row, total
- **First choice: `mcp__claude_ai_Firecrawl__firecrawl_search`** with `location: "United States"`
  (or "United Kingdom" for UK-phrased rows, "India" for India/WhatsApp-status rows), `limit: 10`,
  `sources: ["web"]`, `domainTools: false`, `highlights: false`. It serves real locale results.
  It rate-limits at bursts: on a 429, wait ~60 s and retry ONCE; if it fails again, use `WebSearch`
  (US-served index, lower confidence; say so).
- Fetch the top 5 competitor pages with **`ctx_fetch_and_index`** (WebFetch is blocked). Do not use
  `firecrawl_scrape` unless ctx_fetch fails on a page that matters (credits are limited).
- **No browser tools** (PolterTab, Playwright, claude-in-chrome): they share one tab across agents.
- `content/keywords/2026-10-12-halloween-global/serps.md` holds 40 measured SERPs. If your keyword or
  a sibling is there, use it as corroboration. Known incumbents: today.com, rd.com, parade.com,
  goodhousekeeping.com, cosmopolitan.com, adobe.com, hallmark/americangreetings (wishes), imdb/variety
  (movies), costume retailers. These are competitors — **never cite or link them.**
- **Gate 4 abort:** if your top 10 has 0 weak results, write only the research brief and report why.

## 5. Phase 3 — research
- `node content/batches/2026-10-12-halloween-b1/findpapers.mjs "<phenomenon query>"` (Crossref +
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
  a domain or journal in at most 3. Run `node content/batches/2026-10-12-halloween-b1/capcheck.mjs`
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
- `batch.json` exists: run `node scripts/verify-batch.mjs content/batches/2026-10-12-halloween-b1`
  from the repo root and fix your own lines until clean. Ignore problems on sibling slugs. Do not edit
  `batch.json`, `PLAN.json` or any sibling's files.

## 8. Output and report
Write only `blogs/<slug>.json` and `research/<slug>.md`. Report back in under 150 words: slug, body
words, FAQ count, searches used (Firecrawl/WebSearch), weak count in your top 10, sources (domains),
audit failures, one-line honest assessment, and any brief claim you found false.

## 9. Live spent-source notes (orchestrator appends as rows land)
- **Couples shared-novel-activities review: Aron & Tomlinson 2026 (PMC13203665)** is used by halloween-date-ideas-at-home; one more post may use it (paper cap 2).
- Fear/horror-enjoyment papers PMC12212089 and PMC10844225 are used by the at-home date post; prefer others.
- **Used by halloween-chat-up-lines:** Bale, Morrison & Caryl 2006 (chat-up lines, ScienceDirect) and DiDonato & Jakubiak 2016 (PMC). Pickup/rizz siblings: prefer OTHER studies (paper cap 2).
- Measured: the UK SERP for "halloween chat up lines" is 10/10 US pickup-line pages — same SERP as the pickup hub. Do not lean on "UK" as the differentiator for any other pickup row.
- **Used by halloween-date-ideas-for-couples:** Balzarini 2025 (PMC11761567), the 2026 Emotion haunted-attraction paper, Córdoba 2021 dark-tourism, UNESCO Día de los Muertos, nrf.com (1 of 3).
- **Used by halloween-date-ideas-for-adults:** Martin 2019 horror review (Frontiers), Jamil et al. Dutton & Aron re-analysis (Springer), Meston & Frohlich 2003, NIAAA. Clasen 2020 haunted-house study is SAGE — excluded.
- **Used by halloween-nicknames-for-boyfriend:** Frontiers fdpys.2025.1649507 + fpsyg.2024.1498235 (frontiersin.org now in 2 posts — ONE more allowed), Europe PMC PMC11364825 (playfulness), galwaycitymuseum.ie turnip lanterns. Bruess & Pearson 1993 is Taylor & Francis — banned.
- **nrf.com is now FULL (3 of 3 posts) — no further post may cite nrf.com.** Used by halloween-ideas-for-boyfriend: Williams et al. PLOS ONE 2025, Tsapelas/Beckes/Aron Frontiers 2020 (frontiersin.org now 3 of 3 — FULL), Scrivner et al. PAID 2020, Jiang & Hancock J Commun 2013. PMC13203665 and PMC10844225 are each at the 2-post cap — FULL.
- **Used by halloween-for-boyfriend-and-girlfriend:** Sci Rep 2024 couple playfulness (likely same paper as nicknames PMC11364825 → FULL), Evol Hum Behav 2019 gifts-as-commitment, Family Process 2022 couple identity, Interpersona 2010 long-distance (n=971).
- **Used by halloween-ideas-for-girlfriend:** Martin 2019 (now 2 posts → FULL), Clasen et al. 2019 Poetics (pure.au.dk), Maffei et al. 2026 Psychophysiology, Huh & Andreu-Sánchez 2025 PLOS One. Psychological Science and Evolutionary Psychology are SAGE — banned. doi.org is at 3 posts: link papers via their publisher or Europe PMC instead.
- **Used by halloween-pickup-lines:** Kleinke 1986 (Springer), Bressler & Balshine 2006 (ScienceDirect), Rathcke & Fuchs 2022 + Duarte & Zhang 2023 (frontiersin.org). **frontiersin.org is now OVER cap (host count 3 + adults' doi.org Frontiers link) — nobody else may cite Frontiers.**
- **Used by free-halloween-date-ideas:** nrf.com, about.bankofamerica.com Museums on Us, theconversation.com pumpkin waste, Europe PMC Frontiers in Medicine 2025 free-museum study. Playing With Fear (PMC7734554) is SAGE — banned.
- **Used by halloween-rizz-lines:** languages.oup.com WOTY 2023, PLOS ONE Krach 2011 vicarious embarrassment, mdpi.com Mayer/Paulus/Krach 2021 cringe, Europe PMC de Moraes 2021 playfulness. pmc.ncbi.nlm.nih.gov is in 3 posts — link papers via europepmc.org (exempt).
- **Used by boo-basket-ideas:** nbcsandiego.com, the-independent.com (#boobasket), PMC13603195 Puente-Díaz 2026 gift surprise, fda.gov Halloween food safety + allergens, foodallergy.org Teal Pumpkin. Kids/party rows wanting food-safety: fda.gov now 1 post (ok), foodallergy.org 1 post.
- **Used by halloween-gift-ideas-for-boyfriend:** Gino & Flynn 2011 (gsb.stanford.edu), Chan & Mogilner 2017 (academic.oup.com), PMC13603195 (now 2 posts → FULL), PMC11787505 Shahrier & Khatun 2025. Elsevier (sciencedirect + doi 10.1016) is at 3 → FULL.
- **Used by halloween-pickup-lines-for-guys:** Kreager 2014 (PMC), Topinkova 2025 PLOS ONE, Albury 2021 firstmonday.org, Rerick 2025 Behav Sci. journals.plos.org now 2 posts.
- **Used by halloween-activities-for-couples:** fb.org AFBF pumpkin price 2024, PMC10725765 Miller 2023 Goldilocks fear, PMC13359723 Affan 2026 horror enjoyment, ich.unesco.org Día de los Muertos (now 2 posts → FULL).
- **Used by halloween-couple-pajamas:** PMC11596996, PMC6716586, PMC4853167 (sleepwear, AWI-funded), ftc.gov bamboo, ecfr.gov 16 CFR 1615/1616.
- **Used by halloween-fancy-dress-for-couples:** gov.uk x4 (OPSS costume tests 2024, BIS 2015, OPSS Halloween advice 2019, Toys Safety Regs 2011 guide), PMC13603805 Ding & Liu 2026, researchrepository.wvu.edu 2009. Measured: UK SERP only 4/10 weak (retailer-heavy).
- **Used by halloween-pickup-lines-for-girls:** Kennair 2022, Landwehr 2026, Rerick 2025 (PMC12382781 now 2 posts → FULL), Samara 2022, Gersick & Kurzban 2014 — all PMC.
- **Used by halloween-pickup-lines-in-spanish:** dle.rae.es, dem.colmex.mx, inah.gob.mx Día de Muertos, boe.es LO 10/2022, scielo.br Chacon Onetto 2019, isonomia.itam.mx Richter 2023.
- **Used by group-halloween-costumes:** Europe PMC Jackson 2018 Sci Rep (synchrony), psycnet.apa.org Johnson & Downing 1979 + Diener 1976 (deindividuation), fda.gov decorative contact lenses (fda.gov now 2 posts — ONE left).
- **Used by romantic-halloween-quotes:** eapoe.org, periodicos.apps.uern.br Lima 2025, journals.openedition.org Oda 2010, poemuseum.org misattributions, academic.oup.com Floyd 2007 (oup now 2 posts — ONE left), gutenberg.org. halloween-quotes (row 50) must not repeat its classic-quote verification angle as the main hook.
- **Used by halloween-marketing-ideas:** ftc.gov (now 2 posts — ONE left) CAN-SPAM + Endorsement FAQ, uspto.gov, link.springer.com Kelly & Riach 2018 (springer now 2 — ONE left), iastatedigitalpress.com ITAA 2024, PMC13404449 scarcity. FREE for siblings: Google Frightgeist 2025 (blog.google — top costume searches), Dev et al. 2020 CHI (dl.acm.org).
- **Used by trio-halloween-costumes:** Europe PMC Hartgerink 2015 Cyberball meta-analysis, Mulder 2023 BMC Psych, Wang 2014 RPS; gutenberg Jacobs 1890.
- **Used by halloween-party-ideas:** Europe PMC Dunbar 2022 Phil Trans B + Dunbar 2017 Breaking Bread, nfpa.org, nhtsa.gov, cdc.gov NIOSH dry ice, fda.gov allergens. **fda.gov now FULL (3 posts).**
- **Used by halloween-costumes-for-best-friends:** Europe PMC Parkinson 2018 Nat Commun, Rennung & Göritz 2016 synchrony meta, Kikuchi 2026 oxytocin, Lakkis 2022 contact lenses.
- **Used by halloween-party-games:** PMC8362988 Dunbar 2021 laughter, PMC11680777 Mafia game, PMC12476318 board games autism, duchas.ie National Folklore Collection x2.
- **Used by halloween-in-the-uk:** yougov.com x2 (Sept 2025 n=2,069; Oct 2024 Bonfire vs Halloween), PMC8430693 Hsu 2021, theconversation.com Rodway + O'Neill (theconversation now 2 posts — ONE left), nidirect.gov.uk fireworks. Correct Welsh: Nos Galan Gaeaf.
- **Used by halloween-party-themes:** PMC12083803 Sidhu 2025 nostalgia music, gob.mx/inpi ofrenda, gutenberg Frankenstein, gov.uk DEFRA noise (gov.uk treat as FULL).
- **Used by halloween-jokes:** Europe PMC Trott 2025 Cogn Sci, Fan 2025 PsyCh J (benign violation), Palmann & Miller 2025 Humor (puns), Gorenz & Schwarz 2025 PLOS One. halloween-puns (row 48) should prefer a different pun paper.
- **Used by halloween-memes:** copyright.gov fair use, blog.google Frightgeist 2025, PMC13392671 Jach 2026 memes, PMC13603214 An 2026 ugly-cute. NOTE: verifier rejects 'free' price wording (facts.md pricing block empty) — avoid 'for free' claims.
- **Used by halloween-crafts-for-kids:** Europe PMC Lersilp 2026, PubMed 35930995 Johnson 2022 pumpkin injuries, healthychildren.org AAP, acmiart.org, ecfr.gov (now 2 posts — ONE left).
- **Used by halloween-jokes-for-kids:** Europe PMC Paine 2022, Mayseless & Reiss 2021, Jackson 2021; eric.ed.gov Zipke 2008 + Zipke/Ehri/Cairns 2009.
- **Used by anime-couple-costumes:** journal.transformativeworks.org Lamerichs 2015, PMC13289549 anime-fandom review, aao.org, naka-kon.com, abc.net.au.
- **Firecrawl MCP is DISCONNECTED (from rows relaunched after the rate-limit pause). Use WebSearch for the SERP (US-served index; say so; for India/UK rows add the country to the query and lower confidence).**
- **Used by halloween-wishes-for-instagram:** help.instagram.com hashtags (5-limit) + alt text, developers.facebook.com, journal.lib.uoguelph.ca Hill & Oswald 2023, Europe PMC Desjarlais 2026 PLOS ONE. No official 'visible caption cut-off' exists — don't claim 125 chars.
- **Used by halloween-messages-for-adults:** Europe PMC Liu et al. reaching out (JPSP), Metskas 2024 PsyArXiv, Willinger 2017 dark humour, Wildschut 2006 nostalgia.
- **Used by happy-halloween-wishes:** Europe PMC Regan/Walsh/Lyubomirsky 2023, onlinelibrary.wiley.com Darrah 2024 postcards, theconversation.com McMahan 2020 (**theconversation.com now FULL**), iana.org tz.
- **Used by halloween-movies-for-kids:** files.eric.ed.gov Wilson 2008, eric.ed.gov Hoffner & Cantor 1990 (eric.ed.gov now 2 posts — ONE left), filmratings.com, bbfc.co.uk.
- **Used by halloween-whatsapp-status:** faq.whatsapp.com x3, journals.rudn.ru Maíz-Arévalo 2018, apcz.umk.pl Popelková & Zajonc 2022, edizionicafoscari.it Sahni 2025.
- **Used by halloween-wishes-for-grandchildren:** aarp.org x2 (2018 survey; June 2026 Powering Families), Europe PMC Chereches 2026 J Gerontol B, Neely 2026 Infancy.
- **Used by halloween-messages-for-kids:** Europe PMC Muris & Field 2010, Saminathen 2026, Lin 2025, Aji 2026.
- **Used by halloween-makeup-captions:** aad.org patch test, PMC9819701 Salles 2022, PMC5058481 Jones & Kramer 2016, gaceta.unam.mx Catrina.
- **Used by halloween-one-word-captions:** Europe PMC Okuhara 2017, revistas.unav.edu Cuevas-Molano 2022, ojs.aaai.org Miller 2017, dl.acm.org Griggio 2024, unicode.org UTS #51.
- **Used by halloween-picture-comments:** Europe PMC Wu & Zhang 2026, da Silva Pinho 2024, Marano 2026, Gunderson 2013, Motevalli 2025.
- **Used by halloween-puns-for-work:** PMC10813194, PMC12372801, mailchimp.com, jw.org, eeoc.gov.
- **Used by halloween-captions-for-stories:** help.instagram.com (stories/stickers/close friends/highlights — help.instagram.com now 2 posts), phd.lib.uni-corvinus.hu Veloso da Silva 2025, atlantis-press.com Purmiasa 2020.
- **Used by halloween-captions-for-family:** Europe PMC Ferrara 2024, Motevalli 2025 (now 2 posts → FULL), childnet.com, consumer.ftc.gov (**ftc.gov now FULL**).
- **Used by when-is-halloween:** rbl.ptt.net.pl Szczych 2009, PMC6583441 JAMA Pediatr 2019, newadvent.org, wtkr.com, law.cornell.edu.
- **Used by halloween-puns:** Europe PMC Kao/Levy/Goodman 2015, Sun et al. 2025 Commun Biol; en.wiktionary.org; shakespeare.mit.edu.
- **Used by halloween-captions-for-business:** carleton.scholaris.ca Deng 2019, Europe PMC Hu 2026, uspto.gov (now 2), w3.org WAI, dxtraining.iowa.gov.
- **Used by halloween-quotes:** cambridge.org Rozin 2013, osf.io chiasmus preprint, gutenberg x4.

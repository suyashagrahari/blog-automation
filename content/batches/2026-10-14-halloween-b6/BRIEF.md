# BRIEF — 2026-10-14-halloween-b6 (BINDING) — Halloween global, Batch 6 of 8

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
- `node content/batches/2026-10-14-halloween-b6/findpapers.mjs "<phenomenon query>"` (Crossref +
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
  a domain or journal in at most 3. Run `node content/batches/2026-10-14-halloween-b6/capcheck.mjs`
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
- `batch.json` exists: run `node scripts/verify-batch.mjs content/batches/2026-10-14-halloween-b6`
  from the repo root and fix your own lines until clean. Ignore problems on sibling slugs. Do not edit
  `batch.json`, `PLAN.json` or any sibling's files.

## 8. Output and report
Write only `blogs/<slug>.json` and `research/<slug>.md`. Report back in under 150 words: slug, body
words, FAQ count, searches used (Firecrawl/WebSearch), weak count in your top 10, sources (domains),
audit failures, one-line honest assessment, and any brief claim you found false.

## 9. Lessons carried over from Batches 1–5 (250 posts — read them)
- **Batches 1–5 are sibling sets:** `content/batches/2026-10-12-halloween-b1/blogs/`,
  `content/batches/2026-10-13-halloween-b2/blogs/`, `content/batches/2026-10-13-halloween-b3/blogs/`,
  `content/batches/2026-10-13-halloween-b4/blogs/`, `content/batches/2026-10-13-halloween-b5/blogs/`.
  Read the H2s of every post your prompt names; reuse NO line (5-word overlap check against ALL 250
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
- **Journal cap is enforced by hand (b5 lesson):** count a JOURNAL (PLOS ONE, Scientific Reports, any
  MDPI title, BMC Psychology, PNAS, Nat Commun) as one "domain" for the 3-post cap, even when linked via
  Europe PMC. Grep sibling `batchMeta.sources` in this batch's blogs/ for the journal name before you
  commit to a paper. **Dove Medical Press** journals (PRBM, Clin Ophthalmol, etc.) are Taylor & Francis —
  banned.
- **Writers' corrections were the most valuable output of b5** (e.g. "tricks or treats" in print 1917
  Ontario; US public domain = published 1930 or earlier as of 1 Jan 2026; Poe never wrote "Halloween";
  a viral "Dracula" quote is fake; Nager.Date wrongly lists 31 Oct as a PH holiday — Proc. 1427 is
  the source). Verify every folklore origin claim at a primary or scholarly source; folk-etymology
  ("Samhain = god of the dead", "costumes to hide from spirits — fact") is the norm on these SERPs.
- **Alcohol rows:** clean, adult-only framing, one responsible-drinking line, no health claims, no
  brand promotion. No dosing of dry ice in drinks without a sourced safety line.

## 9b. Batch 6 overlap map (sibling posts in b1–b5 your row must NOT repeat)
- Cultural cluster: `history-of-halloween`, `why-is-halloween-celebrated`, `what-does-halloween-mean`,
  `halloween-around-the-world`, `halloween-in-ireland`, `halloween-in-the-uk`, `halloween-in-india`,
  `is-halloween-a-public-holiday`, `halloween-trivia-questions`, `halloween-colors-meaning`. Rows
  Scotland/Mexico/Philippines/Germany/Samhain/Bhoot Chaturdashi/traditions/facts/superstitions/
  why-costumes go DEEPER on one country/idea than those hubs; read them and do not restate their
  sections.
- Party cluster: `halloween-party-ideas`, `halloween-party-themes`, `halloween-party-games`,
  `halloween-party-activities`, `halloween-party-games-for-kids`, `halloween-games-for-adults`,
  `halloween-party-food-ideas`, `halloween-sleepover-ideas`. costume-party / house-party / checklist /
  bingo / scavenger / charades / pictionary rows each own ONE format; no generic idea lists.
- Food: `halloween-treats`, `halloween-desserts`, `halloween-cookies`, `halloween-snacks-for-kids`,
  `halloween-party-food-ideas`, `halloween-food-puns`. No recipe idea repeated.
- **In-batch pairs (written concurrently — coordinate by reading blogs/ before finalising):**
  riddles (general, all ages) vs riddles-for-adults (hard, lateral); candy-alternatives (what to hand
  out) vs teal-pumpkin-project (the allergy initiative, its history and how to take part);
  cocktails (adult) vs mocktails (kids/no-alcohol); halloween-traditions vs halloween-facts vs
  superstitions; you've-been-booed vs boo-grams (vs b3/b4 boo-basket set).

## 10. Live spent-source notes (orchestrator appends as rows land)
- (b5 sources are logged in the b5 BRIEF §10; caps reset per batch.)
- **Used by halloween-candy-alternatives:** Europe PMC Pediatrics 2018 allergy prevalence, CMAJ 2020 Halloween peanut anaphylaxis, Clinical Diabetes 2024 15 g rule; ecfr.gov 16 CFR 1501.4 (ecfr 1 post). FARE mentioned unlinked — teal-pumpkin-project owns FARE. Schwartz toy-vs-candy study = 2003 J Nutr Educ Behav (Elsevier, abstract only).
- **Used by halloween-slogans:** hdl.handle.net Rubin & Wallace 1989; Europe PMC Filkuková & Klempe 2013, Hassan & Barber 2021, UK Halloween child road injuries (MDPI — MDPI journals 1 post); uspto.gov; gov.uk UKIPO examination guide (gov.uk 1 post). Rhyme-as-reason / slogan-memory papers are spent.
- **Used by halloween-cocktails:** flavourjournal.biomedcentral.com Spence 2015; Europe PMC quinine fluorescence (MDPI — **MDPI journals now 2 posts, ONE left**), butterfly-pea pH (Wiley); nhs.uk units; niaaa.nih.gov. 8 recipes (glow/colour-change tonic + butterfly pea) — mocktails must not reuse drink names or the quinine/butterfly-pea science. No source found for "charcoal interferes with medication" — do not claim it.
- **Used by halloween-in-scotland:** open.journals.ed.ac.uk Bennett & Lyle 1993; gutenberg Campbell 1902 Tiree; dsl.ac.uk x2 (Hallow, Guiser); renfrewshire.gov.uk; beltane.org Samhuinn (Calton Hill, not Royal Mile). Guising also at Christmas/Hogmanay. Scotland guising/neeps/dooking owned — why-costumes, samhain, traditions rows keep Scotland to one line.
- **Used by halloween-knock-knock-jokes:** blogs.loc.gov; archive.org; npr.org; isca-archive.org; files.eric.ed.gov x2 (eric 1 post). 40 original knock-knock jokes — riddles/lunchbox/tongue-twister rows must not reuse. Child-humour (McGhee-era) papers are spent. Knock-knock: 1936 craze, exchange in Jonson c.1597 and a 1929 children's game; "Shakespeare invented it" is a myth.
- **Used by ghostface-couple-photoshoot:** storage.courtlistener.com x2 + courtlistener.com (Fun World v Rozier 2021, Alterian 2026 suits); Europe PMC Phil Trans R Soc B 2024, Eur J Psychol 2024; en.wikipedia 2016 clown sightings (wikipedia 1 post). Ghostface: Fun World holds TM 4,256,208 but lost the Rozier suit (fair use) — do not say "Fun World owns the mask" flatly. 8-frame shot list owned — couple rows must not reuse.
- **Used by why-do-we-wear-costumes-on-halloween:** dsl.ac.uk (**dsl.ac.uk now 2 posts — ONE left**); archive.org 1418 mumming ban (**archive.org 2 posts — ONE left**); gutenberg Kelley 1919 (**gutenberg 2 posts — ONE left**); loc.gov 1936 ad; psycnet.apa.org Diener 1976; Europe PMC 2025 Batman study. No dated record of Celtic disguise exists — say "theory". Costume history (mumming→guising→1930s retail) is owned.
- **Used by last-minute-halloween-costumes:** cambridge.org JDM 2016; fda.gov Novelty makeup (fda 1 post; FDA Halloween-makeup URL is 404); cpsc.gov (cpsc 1 post); Europe PMC Wood 2017 visibility. 9 costumes in 10/30/60-min tiers owned — black-dress/short-hair/curly-hair/plus-size rows read it and reuse none.
- **Used by bhoot-chaturdashi:** Europe PMC eCAM 2014 famine greens; bjpsychiatry.org; gutenberg Lal Behari Day 1883 (**gutenberg.org now FULL, 3 posts — do not cite**); bn.wikipedia.org; myastrology.in; drikpanchang.com. Bhoot Chaturdashi 7 Nov 2026 (Narak Chaturdashi 8 Nov in Kolkata); 28 Oct 2027 same day as Kali Puja. b3 halloween-in-india says 8 Nov 2026 — flagged for REPORT.
- **Used by youve-been-booed:** web.archive.org x2 (About.com 2005, 2009 captures); Europe PMC PNAS chain-letter study + Kumar & Epley; internationaljournalofwellbeing.org; ico.org.uk. Booed rules/rhyme/etiquette owned — boo-grams must not reuse. Earliest record 2005, not "1990s Midwest"; rule = 2 days, not 24 h. Kumar & Epley surprise-kindness paper is spent.
- **Used by halloween-games-for-the-office:** doi.org Emerald (abstract); Europe PMC x2; eeoc.gov; irs.gov (gift-card tax); gov.uk (**gov.uk now 2 posts — ONE left**). 7 office games owned (15/30/60-min slots, remote versions, opt-out roles) — party-format rows must not reuse. Google re:Work psych-safety page is 404.
- **Used by teal-pumpkin-project:** foodallergy.org x3 (**FULL**); community.kidswithfoodallergies.org; Europe PMC PMC12900628 + PMC12400901 (both Pediatr Allergy Immunol — journal 1 post). Origin: KWFA 2014 interview ("two years ago"), network campaign 2013; FARE never says "official colour".
- **Used by halloween-in-mexico:** espaciodisenoojs.xoc.uam.mx 2016; nahuatl.historicas.unam.mx 2020; revista-agroproductividad.org; journals.openedition.org InMedia 2022; diputados.gob.mx LFT Art. 74. gob.mx is bot-walled. Mexico City parade began 2016 (post-Spectre). Children's ofrenda days 30–31 Oct per fieldwork.
- **Used by halloween-mocktails:** Europe PMC x4 (Drug Alcohol Rev 2026, AHA Circulation, Ital J Pediatr 2026, Arch Dis Child); nhs.uk (**nhs.uk now 2 posts — ONE left**); ameriburn.org dry ice. 9 recipes owned. Grape choking + dry-ice warnings owned — food rows keep them to one line or skip.
- **Used by halloween-anniversary-ideas:** gutenberg Emily Post 1922; Europe PMC J Marital Fam Ther 2025, Family Process 2025, Sleep Advances 2024; gov.uk (**gov.uk now FULL, 3 posts**); law.cornell.edu. Emily Post 1922 lists only years 1/5/10/15/20/25/50/75 — year-by-year gift lists are later retail inventions.
- **CORRECTION:** gutenberg.org, archive.org and europepmc.org are in `capExemptDomains` (primary-reference hosts) — they are NOT capped. Earlier "gutenberg FULL" notes are withdrawn; still prefer variety. Individual URLs/papers remain capped at 2 posts.
- **Used by halloween-costume-ideas-with-a-black-dress:** archive.org Vogue 1 Oct 1926 p.69 ("The Chanel 'Ford'" — never "little black dress"); collections.vam.ac.uk; Europe PMC Wood 2017 (**paper now FULL, 2 posts**), Jonauskaite & Mohr 2025 colour review. Ideas sorted by dress cut — hair/plus-size rows must not reuse costumes.
- **Used by halloween-boo-grams:** ecfr.gov x2 (7 CFR 210.11, 210.31 — **ecfr.gov now 2 posts, ONE left**); Europe PMC Cyberball meta-analysis + Layous 2012 (both PLOS ONE — **PLOS ONE 1 post**), Embry & Biglan 2008 tootle notes. 20 gram tag lines owned.
- **Used by halloween-riddles:** osf.io Mercier 2025; Europe PMC Bieth 2024, Danek 2013 (insight/aha); files.eric.ed.gov Higl 2017 Exeter Book (**eric now 2 posts — ONE left**); theriddleages.com. 30 riddles (ages 5–7, 8–11, logic, wordplay) owned. Insight/aha papers are spent.
- **Used by what-is-samhain:** dil.ie eDIL samain; celt.ucc.ie x2 (Meyer 1888 Wooing of Emer; Keating c.1634); persee.fr McKay 2016 Coligny; dimitrafimi.org Fimi 2017 (Hutton summary); ons.gov.uk 2021 Census Pagan/Wicca. Tlachtga fire first appears in Keating c.1634, not older Dindshenchas. Samhain etymology/Coligny/Hutton owned — traditions/superstitions/facts rows: one line max.
- **Used by halloween-in-the-philippines:** asianethnology.org de Castro; iskomunidad.upd.edu.ph; hdl.handle.net Lim 2015 (**hdl.handle.net now 2 posts — ONE left**); philsacra.ust.edu.ph Demetrio 1993; lawphil.net x2 (Proc 1427, 8 Sep 2026 = 2027 holidays). Pangangaluluwa = All Souls' (2 Nov), dated 1934.
- **Used by halloween-bingo:** en.wikipedia.org (**wikipedia now 2 posts — ONE left**); Europe PMC x4 (Innovation in Aging, BMC Women's Health, Adv Simulation, Perspect Med Educ). Bingo maths/odds owned.
- **Used by halloween-charcuterie-board:** fda.gov buffet/2-hour (**fda.gov now 2 posts — ONE left**); ecfr.gov (**ecfr.gov FULL**); nhs.uk (**nhs.uk FULL**); Europe PMC Eurosurveillance 2025, J Pregnancy 2026 (listeria). 2-hour rule and listeria owned — dinner/cupcakes rows one line max. FSIS and CDC return 403.
- **Used by flirty-halloween-texts:** pewresearch.org 2014 couples; discovery.ucl.ac.uk Gibson 2024 wink emoji; Europe PMC Dubé 2024 + Gesselman 2019 (**PLOS ONE now 2 posts — ONE left**), Steinebach 2025 (BMC Psychology 1). 49 flirty lines owned — spooky-love-quotes, zombie-pickup-lines must not reuse. Texting/emoji papers spent.
- **Used by halloween-in-germany:** spiegel.de 2013; econstor.eu ifo 2018 (not peer-reviewed — REPORT check); gesetze-bayern.de; dejure.org BW Feiertagsgesetz; evangelisch.de 2026; frankenstein-halloween.de (event moved to Burg Königstein, 16 Oct–1 Nov 2026). Reformationstag holiday in 9 states.
- **Used by halloween-traditions:** folger.edu (Hallowmas 1623); en.wikisource.org x2 (Burne Folk-Lore 1912; Schell 1903); barrypopik.com; anokahalloween.com (Anoka parade 1920). Dated custom cards owned (souling, bonfires, trick-or-treat 1917, parades, jack-o'-lantern) — facts/superstitions rows one line max.
- **Used by halloween-costumes-for-short-hair:** Europe PMC J Burn Care Res 2025 (wig fire), BMJ Open 2017; law.cornell.edu 16 CFR 1610.1 (**law.cornell.edu now 2 posts — ONE left**); canada.ca (hair-dye/cosmetics); en.wiktionary.org. Wig-flammability + Health Canada hair-dye angle owned — curly-hair must use different safety sources.
- **Used by halloween-riddles-for-adults:** Europe PMC Devanand 2022 NEJM Evidence crossword trial, Cutting 2023 R Soc Open Sci difficulty; nap.nationalacademies.org 2017; eapoe.org Poe 1841. 18 rated riddles + yes/no hosting rules owned.
- **Used by halloween-facts:** Europe PMC Kistler PNAS 2015 (**PNAS now 2 posts — ONE left**); bats.org.uk; sciencedaily.com owl 2013; museumofthegrandprairie.org; aa.usno.navy.mil; dsl.ac.uk DOST (**dsl.ac.uk FULL**). 31 Oct is NOT the cross-quarter midpoint (6 Nov 2026 / 7 Nov 2027 UT). Pumpkin/bat/owl/candy-corn facts + 6 debunks owned.
- **Used by halloween-costume-party-ideas:** Europe PMC Novelli 2013 (**PLOS ONE now FULL, 3 posts — do not cite any PLOS ONE paper**); cambridge.org JDM 2017 (**cambridge.org now 2 posts — ONE left**); yorku.ca; autism.org.uk; magicwheelchair.org. Dress-code tiers, judging rubric, approval ballot, costume box owned.
- **Used by halloween-scavenger-hunt:** Europe PMC JAMA Pediatrics 2019 Halloween pedestrian deaths (paper 1 post), J Educ Health Promot 2026, JCPP 2026 GUS outdoor play; en.wikipedia.org (**wikipedia now FULL, 3 posts**). 5 clue sets owned. Europe PMC API was 503 at times — read via PMC.
- **Used by halloween-superstitions:** gutenberg Kelley 1919; doi.org Best & Horiuchi 1985, Calin-Jageman 2014 (abstracts); Europe PMC JAMA Pediatrics 2019 (**paper now FULL, 2 posts**), Carini 2020 (**MDPI now FULL, 3 posts**); smw.ch. Black-cat shelter holds: HSUS admits shelters once held them back — say "once", not "never". Macbeth's cat is "brinded" (grey/streaked).
- **Used by spooky-love-quotes:** journal.sjdm.org Rozin 2013; Europe PMC Evers & Deng 2016; doi.org Sinclair 2014 (Romeo & Juliet effect replication failure); gutenberg x3 (gothic texts). 9 gothic quotes + 36 original lines owned. "I have love in me…" is the 1994 Branagh film, not Shelley.
- **Used by halloween-house-party-ideas:** Europe PMC Dunbar 2025 friendship layers, Emotion 2025 haunted-attraction; nfpa.org candles (nfpa 1 post); toronto.ca noise. Room-zone layout + run-of-show owned.
- **Used by halloween-charades:** en.wikisource.org x2 (1911 Britannica Charade, Crambo — **wikisource now 2 posts, ONE left**); gutenberg Vanity Fair ch.51; Europe PMC x3 (2 Behav Res Methods, 1 Phil Trans B). 55 charades prompts owned — pictionary must not reuse. Hand signals are convention, undated.
- **Used by halloween-dinner-ideas:** gml.noaa.gov (sunset NYC/Toronto/London/Delhi 2026–27); Europe PMC Harrison 2015 Can Fam Physician, Dallacker 2023 JAMA Netw Open, Wang 2025 Cureus. Sunset-timed dinner + Indian/veg menus owned. No study shows pre-trick-or-treat meals cut candy intake.
- **Used by halloween-ghost-stories:** Europe PMC Clasen 2025 Emotion (recreational fear), Sci Rep 2024, npj Sci Learn 2026; gutenberg x3 (Signal-Man 1866, M. R. James 1925, Le Fanu). 6 original read-aloud stories owned. Recreational-fear papers spent.
- **Used by halloween-costumes-for-curly-hair:** Europe PMC J Cosmet Dermatol 2026, Int J Women's Dermatol 2021, Int J Trichology 2015, J Exp Psychol Gen 2025; congress.gov S.751 CROWN Act (House vote 18 Mar 2022). Curl-pattern sorting owned.
- **Used by halloween-statistics:** nrf.com x2 (nrf 1 post); census.gov; yougov.com; ers.usda.gov; Europe PMC Vet Record 2017 dog-chocolate. Spending trend (+41% real since 2005), "2nd biggest holiday" refuted (Mother's Day/Valentine's/Easter higher). NHTSA Halloween pages 404; Google Trends 429.
- **Used by halloween-party-checklist:** research.vu.nl Koole 2000; kops.uni-konstanz.de Gollwitzer 1999; Europe PMC Cochrane 2013 reminders; nysenate.gov GOL §11-100; adata.org 2015. Cannibalisation risk with b1 halloween-party-ideas (it has a timeline) — REPORT.
- **Used by halloween-pictionary:** Europe PMC ASM 2018, Nat Commun 2023; pubmed Roberts & Wammes 2021; research.gold.ac.uk Bainbridge 2024; tsdr.uspto.gov (owner Pictionary Incorporated, not Mattel). 36 drawing words owned. Drawing-effect papers spent.
- **Used by halloween-bucket-list:** Europe PMC Savor-Aging RCT 2026, Dawson & Johnson Cogn Sci 2026; aa.usno.navy.mil (**2 posts — ONE left**); legislation.gov.uk (**2 posts — ONE left**); nist.gov; fs.usda.gov. 40 dated season items owned. timeanddate.com is 403.
- **Used by halloween-ideas-for-babies:** Europe PMC Mindell 2009 Sleep; healthychildren.org x2 (AAP choking, safe sleep); acmiart.org AP Seal; govinfo.gov 15 USC 260a; legislation.gov.uk. Never baby inside a pumpkin (a SERP page advises it).
- **Used by zombie-pickup-lines:** archive.org x3 (Seabrook 1929, NOTLD 1968 screenplay + transcript); Europe PMC J Physiol 2015, Scand J Psychol 2022, Curr Psychol 2023. 36 zombie lines owned. Screenplay uses "zombie" once in a stage direction; film dialogue never.
- **Used by halloween-costumes-for-plus-size:** cdc.gov NHANES 2015–18 (cdc 1 post); archive.org USDA 1941 sizing survey; Europe PMC BMC Public Health 2022, Diabetes Obes Metab 2025, J Cosmet Dermatol 2025 (journal 2 posts). 12 all-gender builds owned.
- **Used by halloween-cupcakes:** legislation.gov.uk (**FULL, 3 posts**); federalregister.gov; Europe PMC EHP 2012, Food Sci Nutr 2024, J Food Sci 2025. fda.gov FULL. EUR-Lex bot-walled.
- **Used by halloween-relationship-quiz:** Europe PMC JPSP 1997, Nat Commun 2025 (journal 2 posts), Motiv Emot 2022, Family Process 2024 (journal 2 posts). 28 quiz questions owned. Love maps = Gottman 1999 book; no OA study.
- **Used by halloween-tongue-twisters:** Europe PMC Acheson & MacDonald 2009 Psychol Bull, Teghipco 2023, Crowe & McLeod 2020; wals.info; asha.org. 35 twisters owned. "Sixth sick sheikh" Guinness record unverified.
- **Used by halloween-couple-challenges:** Europe PMC Aron 2000, Brauer 2024 Sci Rep, Walker 2023 Curr Psychol (paper also in zombie — now FULL); fda.gov (**FULL**); tiktok.com/safety. 12 challenges owned. TikTok trend pages unverifiable (redirect).
- **Used by halloween-lunchbox-jokes:** brtprojects.org 2017 reading-speed norms; Europe PMC JAMA Netw Open lunch-length trial, Dev Psychol; unicode.org. 31 lunchbox notes owned.

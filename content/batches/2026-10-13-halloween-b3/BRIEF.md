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
- **Used by halloween-in-japan:** jstage.jst.go.jp Sugiura 2025, Europe PMC PLOS ONE Itaewon crowd crush + Obon Mikasa, timeout.com 2024. WebSearch is working again (not capped).
- **Used by halloween-ideas-for-kids:** Europe PMC Sci Rep 2025 Telangana + Cureus 2022 balloon aspiration; poison.org x2; foodallergy.org Teal Pumpkin (URL 1 post); gutenberg Canterville Ghost.
- **Used by halloween-costumes-with-no-mask:** healthychildren.org (AAP), fda.gov novelty makeup, Europe PMC PMC8064590 + PMC12422498, disneyworld party page.
- **Used by halloween-jokes-for-toddlers:** Europe PMC PMC9374637 Hoicka Early Humor Survey, PMC6171116 Mireault 2017, PMC8291289 Mireault & Reddy 2020, PMC12464472 Allison 2025. Rows 134/135 kids/baby captions: avoid these.
- **Used by halloween-ideas-for-family-of-3:** Europe PMC Reynolds 2025, Yang & Wang 2022, He 2025, Fu 2024.
- **Used by halloween-party-food-ideas:** Europe PMC Foods 2025 plating colour, PLOS ONE 2023 chef's touch, ACS 2023 dry ice; fda.gov x2 buffets + allergies (fda.gov now 2 in b3 — ONE left). Row 111 snacks: avoid the FDA allergen page.
- **Used by halloween-costumes-without-buying-anything:** hubbub.org.uk (7m costumes binned, 2017), fairylandtrust.org (2,079 t plastic, 2019), Europe PMC Kroneisen 2021, Singh 2025, Ho 2017 BMJ Case Rep face paint.
- **Used by halloween-ideas-for-toddlers:** healthychildren.org choking (domain 2 in b3), cdc.gov choking, Europe PMC Craig 2024, Wang 2024 Sci Rep, Brooker 2013.
- **Used by halloween-jokes-for-adults:** Europe PMC Kamiloğlu 2026, McAuley & Glenwright 2025; ejournals.epublishing.ekt.gr Giapraki 2020; termedia.pl Kruczek 2018.
- **Used by halloween-in-india:** rbi.org.in holidays, repository.upenn.edu Lukose 2005, journals.umt.edu.pk 2025, epubs.icar.org.in Bhoot Chaturdashi, harpersbazaar.in 2025 events, drikpanchang.
- **Used by halloween-couple-costume-ideas-simple:** Europe PMC Pan 2016 PMC6867051, Tang 2020 PMC7507397, Moffat 2026 PMC13056352; cpsc.gov art materials.
- **Used by halloween-snacks-for-kids:** Europe PMC AHA added-sugar statement, Asigbee 2020, Mustafa 2018, Bauer 2017, Gevers 2015; allergyaware.org.au.
- **Used by halloween-couple-dress-ups:** productsafety.gov.au (via web.archive), cancer.org.au UV, Europe PMC PMC7531871, PMC8753943.
- **Used by couple-costumes-with-dog:** Europe PMC Ding & Liu 2026 PMC13603805, Gardeweg 2026, Hall 2020; merckvetmanual.com x2; gov.uk microchip.
- **Used by couple-costumes-with-baby:** safetosleep.nichd.nih.gov, Europe PMC Cole 2020 + Olvera 2025, lullabytrust.org.uk x2. Row 145 baby costumes: prefer other safe-sleep sources or reuse at most once.
- **Used by halloween-wishes-for-daughter:** Europe PMC Sarkadi 2023, Kullberg 2026, Daddis 2026, Morgan 2024 (journal *Cannabis* — descriptive texting figures only), Arpino 2026.
- **Used by scary-couple-halloween-costumes:** Europe PMC Chung 2024 PMC11521598, aad.org contact dermatitis (aad 1 post), aao.org lens page, en.wikipedia La Llorona.
- **Used by movie-couple-costumes:** Europe PMC Wentura & Schuck 2025, Munawar 2018, Mohanty 2023; law.cornell.edu Star Athletica; en.wikipedia DDLJ. SERP overlap with b2 famous couples: 0/10.
- **Used by halloween-messages-for-friends:** Europe PMC Aknin 2011, Sandstrom 2023, Aknin & Sandstrom 2024, Yen 2026.
- **Used by unique-couple-halloween-costumes:** Europe PMC Kurtz & Algoe 2015 PMC4779443, Borelli 2024 PMC11245364; figshare Bazzini 2007; cdr.lib.unc.edu Kurtz 2014.
- **Used by halloween-wishes-in-french:** larousse.fr, vitrinelinguistique.oqlf.gouv.qc.ca, books.openedition.org Lherm 2010, unilim.fr Actes Sémiotiques 2025, montreal.ca, service-public.fr.
- **Do not work around bot challenges / CAPTCHAs / proof-of-work walls.** If a page blocks automated fetching, skip it (snippet only) and say so.
- **Used by halloween-party-invitation-wording:** emilypost.com x2, Europe PMC PMC5293197 Meetup attendance, PMC12400901 food-allergy anxiety.
- **Used by spider-captions-for-instagram:** nhm.ac.uk, australian.museum, Europe PMC Agnarsson 2010, Wardenaar 2017, Veale 2025.
- **Used by halloween-eve-greetings:** en.wiktionary Halloween/Allhallowtide, ceskylid.avcr.cz Uhrin 2026, PMC7729787 Hidalgo 2020, ich.unesco.org Día de los Muertos.
- **Used by halloween-messages-for-family:** Europe PMC Tambellini 2026, Arpino 2026 PMC13476080 (now 2 → FULL), Ekoh 2026, Stoebenau 2025; theconversation.com Baulch 2024.
- **Used by halloween-sweet-messages:** Europe PMC Lim 2024 KIND trial, Housby 2025, Kumar & Epley 2022, Schaefer 2020. **Journal Scientific Reports is at 3 b3 posts → FULL.**
- **Used by halloween-puns-for-party-invite:** Europe PMC Konovalova & Petrova 2023, Beelders 2026, Miczo & Zhao 2026; en.wiktionary RSVP.
- **Used by halloween-captions-with-friends:** Europe PMC Howlett 2026, Dunbar 2017; usenix.org Rashidi 2018; en.wikipedia Friendsgiving. SERP overlap with b2 bf captions: 2/9. Row 141 party captions: avoid Rashidi.
- **Used by halloween-ways-to-say-happy-halloween:** ciccre.uvt.ro Bădescu & Dincă 2023, gutenberg Blain 1912, books.google Ngram, stdict.korean.go.kr, teanglann.ie, en.wiktionary.
- **Used by halloween-quotes-for-work:** Europe PMC Lee 2023 JMIR, Gholami 2025 BMC Psych, Bartzik 2021 BMC Nursing; gutenberg x3 (Dickens, Irving, Shelley).
- **Used by halloween-captions-for-dogs:** cogitatiopress.com Vereshchagina 2025, Europe PMC Bouma 2023 + Zhang 2025, help.instagram.com x2 (hashtags, alt text).
- **Used by halloween-captions-for-facebook:** pewresearch.org (20 Nov 2025), facebook.com policies + help, Europe PMC Hurd 2026, Carlin 2026, Tosuntaş & Griffiths 2026.
- **Used by halloween-celebration-captions:** Europe PMC Proc R Soc B 2025 mourning, PLOS ONE 2025 intl students, BMC Psych 2023 expat loneliness, IJERPH 2022 Stockholm festival.
- **Used by halloween-captions-for-kids:** Europe PMC Berg 2024 PMC10918551, Baxter 2025 PMC11734948; medlineplus.gov x2.
- **Used by halloween-captions-for-baby:** Europe PMC Conti 2024, Doğan Keskin 2023, Pretorius 2024 (JMIR Ped Parent now 3 → FULL), Roche 2026 Infancy.
- **Used by halloween-food-puns:** Europe PMC Gavrieli 2022, Roose & Mulier 2020 Foods; gov.uk FSA allergens (gov.uk 2 in b3); science.food.gov.uk.
- **Used by halloween-phrases:** digibug.ugr.es Lázaro Ibarrola 2015, castledown.com Ishii 2013 (VLI journal — published by Castledown, kept), en.wiktionary x2.
- **Used by halloween-party-captions:** Europe PMC Lurie 2025, Hendriks 2023, Conti 2024 PMC11290302 (now 2 → FULL); support.apple.com Night mode.
- **Used by halloween-instagram-notes:** help.instagram.com x3 (Notes, Spotify note, Stories; domain 2 in b3), developers.facebook.com, spir.aoir.org 2019, Europe PMC JMIR 2025 teen emoji.
- **Used by halloween-quotes-for-cards:** Europe PMC KindnessByPost 2023, Anwar 2026; pe.usps.com + usps.com; gutenberg x2.
- **Used by trick-or-treat-quotes:** cambridge.org Echelbarger 2020, Europe PMC Li 2023, cbc.ca Bathurst 2017, nationalautismassociation.org blue bucket, foodallergy.org Teal Pumpkin (URL now 2 → FULL).
- **Used by baby-halloween-costume-ideas:** ecfr.gov x2 (1501 — clothing EXEMPT; 1615 — infant garments ≤9m exempt), health.wa.gov.au face paint, Europe PMC van de Kamp & Daanen 2025, Filingeri 2020, Alfawaz 2026.
- **Used by halloween-costume-ideas-for-women:** pudding.cool pockets, Europe PMC PMC12135448 heels, nps.gov Nellie Bly, womenshistory.org Grace Hopper.
- **Used by halloween-costume-ideas-for-girls:** Europe PMC x4 (career aspirations, counter-stereotypic toys, appearance games, mobility licences), nhm.ac.uk Mary Anning (nhm 2 in b3). History figures: Anning, Savitribai Phule, Bessie Coleman, Wilma Rudolph, Junko Tabei.
- **Used by short-halloween-nails:** Europe PMC x3 (nail-biting survey, IJD 675 patients, German hand-hygiene guideline), fda.gov Food Code (**fda.gov FULL in b3**), dermnetnz.org paronychia. SERP overlap with b2 nail posts: 0 real pages shared.
- **Used by pumpkin-carving-ideas:** extension.sdstate.edu, extension.usu.edu, extension.illinois.edu, Europe PMC Sun 2012 PMC3866743, nfpa.org, epa.gov.
- **Used by halloween-movie-trivia:** catalog.afi.com x2, Europe PMC Liquin 2026, Büsser 2025, Finch 2026.
- **Used by halloween-movies-on-netflix:** help.netflix.com x3, netflix.com collection, Europe PMC PMC9524295, PMC12007762. Availability checked on Netflix US 13 Oct 2026 — re-check each October.
- **Used by halloween-costume-ideas-for-men:** egrove.olemiss.edu Broussard 2009, Europe PMC PMC13583625 + PMC13111975, osf.io preprint, medlineplus.gov (2 in b3).
- **Used by 90s-halloween-costumes:** Europe PMC Hanson 2025, metmuseum.org x2, books.google Ngram x2.

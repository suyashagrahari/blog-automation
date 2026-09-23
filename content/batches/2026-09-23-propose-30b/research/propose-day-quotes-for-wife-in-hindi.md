# Research brief — `propose day quotes for wife in hindi`

- **Slug:** `propose-day-quotes-for-wife-in-hindi` — checked against Strapi on 2026-09-23, `data: []`, free.
- **Batch:** `2026-09-23-propose-30b` (wave 3 on the propose/proposal territory).
- **Category:** `modern-romance` (verified live in the Strapi categories list).
- **Volume band:** 300–1,000 EST. Not printed anywhere in the post as a real volume.
- **Date check, run locally with `date` on 2026-09-23:** `2027-02-08` → Monday; `2027-02-07` → Sunday (Rose Day); `2027-02-14` → Sunday (Valentine's Day). Propose Day 2027 is a **working Monday**.

---

## Phase 1 — SERP analysis: NOT RUN. State this plainly.

No India-served SERP was measured for this keyword. The session WebSearch budget for this post was five calls and both calls spent went to sourcing, not to a SERP pass. **Therefore this post contains no claim about what competing pages do or do not cover** — no "most pages still say 2026", no "no competitor covers X", no positional language.

The only measured SERPs in this territory remain the eleven recorded on 2026-09-16 in `content/keywords/2026-09-16-propose-100/serps.md`, and none of them is this keyword. Recorded in `batchMeta.structuralLimitations` and as a `failed` audit item.

What is verifiable without a SERP, and what the post leans on instead: a calendar fact checked with `date`, four fetched third-party sources, an original count run over a public treebank, and SubhSandesh's own first-party numbers.

---

## Phase 2 — Cannibalisation: the two siblings, and why this is not either of them

Both siblings were read in full before a line was written.

### Sibling A — `content/batches/2026-09-17-propose-30/blogs/propose-day-quotes-in-hindi.json`

Hindi, but for an **unmarried or new couple**. Its H2s sort by तुम / आप / Urdu-leaning shayari / तू, and its lane is the costly-signal argument ("what a forwarded line actually costs"). Its आप group is explicitly framed as *"respectful, before you switch to तुम"* — i.e. आप as a pre-intimacy stage on the way to तुम. Sources: Hadavizadeh & Singh on Hindi politeness, arXiv, UCL, UvA, PMC.

**How this post differs:** in a marriage आप is not a stage before तुम, it is the permanent register of a large share of Indian marriages, and the sibling's framing is actively wrong for this reader. This post also adds a third group the sibling does not have — **no pronoun at all** — and it drops तू entirely rather than giving lines in it. Zero source overlap. Zero line overlap (checked line by line against the sibling's Devanagari).

### Sibling B — `content/batches/2026-09-23-propose-30b/blogs/propose-day-quotes-for-wife.json`

A wife recipient, but **English**, sorted by **years married** (year 1–3, 4–9, 10+, 20+), nostalgia/shared-memory lane. Sources: Frontiers, three PMC articles, Springer.

**How this post differs:** it is in Hindi, and it argues directly *against* sibling B's organising axis using Indian data (JCDR: duration of marriage r=0.033, p=0.644 against marital quality in 199 married Indians). One H2 is devoted to that argument. Zero source overlap.

### The intersection, stated once

Married **and** in Hindi is a genuinely distinct problem: many Indian husbands and wives address each other with आप, or with no pronoun at all, in a सुनिए / जी register that has no English equivalent. A romantic line in तुम can read as wrong in a marriage where आप is the habit. That is the spine of the page.

### Fan-out sub-queries the H2s answer

Reasoned from intent, **not** harvested from a measured SERP or a People Also Ask block — recorded as a `failed` audit item.

- Which pronoun do I use with my own wife? → H2 1
- Does it matter how long we have been married? → H2 2
- Give me the actual lines, in a script I can paste → H2 3
- How do I send it on a working Monday? → H2 4
- Is this Hindi actually correct? → H2 5
- When should I not send a Hindi line at all? → H2 6

---

## Phase 3 — Sources

`capcheck.mjs` was run three times: when choosing sources, immediately before saving, and again after saving. The source-cap race bit twice.

- **`dsal.uchicago.edu`** moved from *one slot left* to **at cap 3** between the first and second runs. McGregor's dictionary was still used as the headword check, and the domain was deliberately **not** cited.
- **`universaldependencies.org`** was at zero posts when sources were chosen and at **3 posts including mine** by the save check, with the exact `hi_hdtb` URL already at the 2-post URL cap. Rather than sit at the cap and risk a fourth sibling pushing it over, the citation was swapped to the treebank's own project page at **`ltrc.iiit.ac.in`** (IIIT Hyderabad), which is arguably the better citation anyway. The post still states in prose that the count was run over the Universal Dependencies release.

After the swap, all four cited domains sit at **1 post each** — this one.

Crowded publishers avoided entirely: `pmc.ncbi.nlm.nih.gov` / `europepmc.org` (at cap), `frontiersin.org`, `journals.plos.org`, `link.springer.com`, `nature.com`, `journals.sagepub.com`, `arxiv.org`, `onlinelibrary.wiley.com`, `dsal.uchicago.edu` (at cap), `universaldependencies.org` (reached cap mid-run).

| # | Source | Domain | Subject test | Peer-reviewed OA | What it is cited for |
|---|---|---|---|---|---|
| 1 | Bhatia & Bhatt, "Copular agreement in Hindi-Urdu", *Glossa*, 2023-03-16 | glossa-journal.org | the language | yes (DOAJ, full OA) | तू = 2NH non-honorific singular; तुम = neutral 2nd person, 2pl agreement; आप = 2H honorific, plural agreement |
| 2 | Varyani & Sharma, JCDR, 2024-12 | jcdr.net | Indian marriage | yes (DOAJ, full OA) | n=199 married HCPs, Gujarat; duration of marriage vs marital quality r=0.033, p=0.644; mean marriage 13.40±10.44 years; authors recommend targeting communication, conflict resolution, support, empathy |
| 3 | Palit, doctoral dissertation, Virginia Tech, 2014-01-24 | vtechworks.lib.vt.edu | Indian marriage | yes (scholarly, green OA repository) | 11 couples (N=22), six dimensions of intimacy; wives rated emotional closeness/self-disclosure highest, husbands commitment; "partner's response is crucial" |
| 4 | Hindi Dependency Treebank (HDTB), Hindi-Urdu Treebank project, IIIT Hyderabad (no publication date — omitted) | ltrc.iiit.ac.in | the language | corpus resource, not a paper | The treebank's own project page. Counting was done over its Universal Dependencies release: 351,704 tokens / 16,649 sentences, used for morphology verification and the original pronoun-drop count |

Full text was read for all four. No paywalled abstract-only citations. Zero generic context statistics (no PIB, TRAI, Census, MEA). Zero Wikipedia body links. Zero competitor links.

**Searches run.** `findpapers.mjs`: `arranged marriage intimacy development India study`, `marital satisfaction arranged versus love marriage longitudinal`, `spousal communication India research`, `affection expression Indian couples study`, `companionate marriage India sociology`, `conjugality intimacy India companionate marriage`, `marital quality arranged marriage society determinants`, `name avoidance husband wife North India kinship`. Plus DOAJ API queries and Unpaywall DOI lookups. **WebSearch: 2 of 5 budgeted calls used**, both on sourcing.

**Dead ends worth recording.** The two obvious lane papers — Allendorf & Ghimire, "Determinants of marital quality in an arranged marriage society" (*Social Science Research*, 2012) and Allendorf, "Schemas of Marital Change" (*JMF*, 2013) — are open access **only** via PMC, which is at the 3-post batch cap, so neither could be cited. Sandhya (2009) on marital happiness in 182 urban Indian husbands and wives is paywalled (Unpaywall `is_oa: false`) and is referenced in the post only through Palit's review, where it was actually read. `journals.lww.com` (technoference among married couples in India, 2025) bot-blocks with a 403 challenge. `bmcpsychology.biomedcentral.com` bot-blocks, and three BMC Psychology URLs are already spent in wave 2 anyway.

---

## Phase 3b — Hindi verification method and the line ledger

The BRIEF requires morphology verified against something actually fetched, not intuition. Method, mirroring the Telugu agent's dictionary-plus-treebank approach:

1. **Treebank.** Downloaded the three UD_Hindi-HDTB CoNLL-U files (train/dev/test) — the Universal Dependencies release of IIIT Hyderabad's Hindi Dependency Treebank — 351,704 tokens, 19,088 distinct surface forms, 15,646 lemmas — and matched every Devanagari token in every candidate line against the surface-form inventory, with danda stripped and nukta normalised in both directions (precomposed U+095B/U+095E and combining U+093C).
2. **Dictionary.** Every content word was queried as an exact headword against R. S. McGregor's *Oxford Hindi-English Dictionary* at `dsal.uchicago.edu`. Confirmed: तुम ("pron., reduced hon. grade"), चलना, हँसना, सुनना, कहना, आदत, निभाना, चुनना, आहट, मकान, त्योहार, मामूली, जी, मत ("adv. w. imp., properly of 2nd pers."), साथ, बात, and — with precomposed nukta — आवाज़, ख़बर, तोहफ़ा, दरवाज़ा. **Fetched but deliberately not cited**, because the domain hit the 3-post cap mid-run.
3. **Conjugation paradigms.** The forms HDTB does not attest were checked against the rendered Wiktionary conjugation tables: चलोगी, चलोगे, चलेंगी, चलेंगे, चलिए, चलेगी; सुनिए, सुनिये, सुनो, सुननी; कहनी, कहिए, कहोगी; हँसना, हँसो, हँसिए; चुनता, चुनती; निभाया, निभाई; आदतें, आदतों. All FOUND.

**Published-line coverage:** 111 of 120 word forms appear in HDTB exactly — 92.5%. The eight distinct unattested forms are कहनी, चलेंगी, चलोगी, सुनिए, निभाया, आदतें, लगना and तुम.

**Why those eight are missing, and why it is a corpus artefact rather than an error:** HDTB is newswire. It contains **तुम = 0, तू = 0, तुम्हें = 0, चलोगी = 0, करोगी = 0**, and only 80 occurrences of आप. Second-person familiar forms, imperatives in -इए and feminine infinitives in -नी barely occur in news prose. Each missing form's paradigm *is* attested: मुझसे/उससे/इससे/हमसे for the pronoun+से fusion, चलेगी/चलेंगे/होंगी for the future, कीजिए/दीजिए/लीजिए for the -इए imperative, करनी/देनी/लेनी/सुननी for the feminine infinitive, बातें for the -एँ plural, रहना/जाना/होना for the bare infinitive, निभाने/निभाई/निभाता for निभाना.

### Original measurement made from the treebank

Counting Person=2 feature-marked verbs against overt second-person pronouns across all 16,649 HDTB sentences: **163 sentences carry a Person=2 verb form; 92 of them (56%) contain an overt second-person pronoun; 71 (44%) do not.** This is the number the post's central section rests on. It is measured on written news Hindi, not on spoken marital Hindi, and the post and `structuralLimitations` both say so.

### Line ledger — 18 drafted, 10 published, 8 cut

| # | Line (opening) | Register | Verdict | Reason |
|---|---|---|---|---|
| 1 | घर आप से है, मकान तो पहले भी था। | आप | **published** | 9/9 forms in HDTB |
| 2 | पूछना तो तब ही चाहिए था… साथ चलेंगी? | आप | **published** | चलेंगी via Wiktionary paradigm; चलेगी/चलेंगे in HDTB |
| 3 | आपने जो निभाया है… | आप | **published** | निभाया via paradigm; निभाने/निभाई/निभाता in HDTB |
| 4 | तुमने मेरी सबसे मामूली आदतें… | तुम | **published** | आदतें via paradigm; आदत + बातें in HDTB |
| 5 | तुम चुप हो जाती हो… | तुम | **published** | तुम via McGregor + Wiktionary; absent from newswire HDTB |
| 6 | शादी के बाद पूछना बंद नहीं… साथ चलोगी? | तुम | **published** | चलोगी via paradigm |
| 7 | इतने साल एक ही घर में… दरवाज़े की आहट… | none | **published** | 15/15 forms in HDTB |
| 8 | सुनिए — कुछ नहीं, बस आवाज़ सुननी थी। | none | **published** | सुनिए via कीजिए/दीजिए/लीजिए pattern + paradigm |
| 9 | साथ रहना मुश्किल नहीं था… | none | **published** | लगना: lemma लग ×363 in HDTB, infinitive pattern via रहना/जाना/होना |
| 10 | जी, एक बात कहनी है। और रोज़ कहनी चाहिए थी। | none | **published** | कहनी via करनी/देनी/लेनी/सुननी pattern |
| 11 | आज कोई तोहफ़ा नहीं लाया… आप मेरी सबसे अच्छी आदत हैं। | आप | **cut** | आदत used *of a person* is a trope saturated in film lyrics and forwarded messages; originality could not be cleared |
| 12 | तुम्हारे साथ रोज़ का काम भी त्योहार लगता है। | तुम | **cut** | त्योहार-as-metaphor is generic enough to collide with circulating forwards |
| 13 | तुम्हें हर साल दोबारा चुनता हूँ… | तुम | **cut** | word-for-word calque of "I choose you again" — English sentiment in Hindi clothing, and it undercuts a page about Hindi register |
| 14 | जी, एक बात कहनी है। हँसना मत। | none | **cut** | standalone infinitive prohibitive; HDTB attests infinitive + मत only as another verb's complement (*उठाना मत भूलिएगा*), so it went rather than shipping on intuition |
| 15 | बहुत कुछ बदल गया, आपका साथ नहीं बदला। | आप | **cut** | fully verified (8/8 in HDTB) but a greeting-card sentiment that does no register-specific work |
| 16 | आप से आज भी वही बात कहनी है… | आप | **cut** | duplicates line 10's कहनी construction without adding a register distinction |
| 17 | दो कप चाय की आदत हो गई है… | none | **cut** | repeats the आदत framing that disqualified line 11 |
| 18 | दिन भर की सबसे अच्छी ख़बर… शाम को घर जाना है। | none | **cut** | fully verified (15/15 in HDTB) but repeats line 7's homecoming image |

**No line is copied from any competitor page, any circulating forward, any film lyric or any modern poem.** Every line was composed for this post. Two lines that were verified clean (15, 18) were still cut, which is the intended direction of travel: fewer correct lines beats more shaky ones, and a wrong line in a proposal is worse than no page.

**The lines have NOT been reviewed by a native Hindi speaker.** Mechanical verification establishes that the forms exist and inflect correctly. It does not establish that a line sounds natural to a Hindi-speaking spouse. This is recorded in `structuralLimitations`.

---

## Phase 0 — first-party facts used

Copied verbatim from `content/facts.md` (regenerated 2026-09-23). The #1 template is now `/apology-dashboard`, not `/love-gf`; the old 1,138 / 24.9% figure and the 6.4-hour `/love-gf` edit-gap sample are **not** used anywhere in this post.

Two facts sit inside the first 150 words: 5,061 pages across 20 page types, and the 38.7% password-protect rate. Every SubhSandesh number in body prose is labelled either **platform-wide across 20 page types** or **sampled on the named template** (the 2.4-hour median says `/apology-dashboard`, n=1,348, in the table cell itself). No figure is attributed to proposal pages, because no proposal-specific data exists. No price, free tier or paid tier is stated or implied.

---

## Phase 5 — links

- `/proposal` — mandatory, placed after the delivery table establishes why a page beats a chat message.
- `/love-gf` — the genuine alternative, argued honestly: for a long-married reader a marry-me scrapbook is usually the wrong shape.
- `/apology-dashboard` — offered for the case where Propose Day follows a bad patch.

All three are relative paths from `TEMPLATE_LINKS` in `app/lib/prompt.ts`. The post states in body prose that **both templates are English-language**: a Devanagari line pasted into a text field displays, but every label and button around it stays English and there is no Hindi interface.

Outbound: four research links, all fetched and verified. Wikipedia body links: zero. Competitor links: zero.

---

## Honest assessment

A copy-text query with near-zero conversion — the reader copies a line and leaves. The page is a visibility asset judged on impressions, not a converting page. These SERPs are an annual February news cycle owned by MensXP, Zee, Webdunia and Amar Ujala; the realistic target is **position 6–10, not 3**.

What could earn a citation: the 44% pronoun-drop count from a named treebank, the published cut ledger, and Indian marriage data arguing against the axis every rival page is organised on. Against it: no SERP was measured, no native speaker reviewed the Hindi, and ranking takes months regardless of any of this.

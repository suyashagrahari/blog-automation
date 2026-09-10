# Research brief — `ganesh-chaturthi-modak-recipe`

- **Keyword:** `ganesh chaturthi modak recipe`
- **Batch:** `2026-09-09-ganesh-10c` · branch `batch/2026-09-09-ganesh-10c`
- **categorySlug:** `indian-festivals`
- **Written:** 2026-09-10
- **Research lane:** food science of steamed rice-flour dough + the anthropology of festival food

---

## 0. This keyword is an off-list substitute — why, stated plainly

The slot originally held `ganesh chaturthi invitation maker`. That assignment was
**correctly aborted**: its SERP merged with a live post at 5 shared articles, which is
above the batch's stop-at-3 rule.

This keyword is **not on the user's 50-keyword list.** The reason it is off-list:

- The 25 live posts across waves `-10` and `-10b` claim **86 keywords** once every
  declared fold is counted.
- Every remaining keyword on the supplied 50-keyword list duplicates one of those 86.
- So a substitute had to come from outside the list. `ganesh chaturthi modak recipe`
  was checked against all 86 and is clear of every one of them.
- It was chosen because it has genuine informational intent that **no live post
  targets**: none of the 25 is about food. The nearest touch is a single "modak recipe"
  subsection inside `radhakrishnatemple.net`'s puja-vidhi page — a competitor page, not
  a SubhSandesh one.

Slug `ganesh-chaturthi-modak-recipe` verified free on Strapi before assignment.

---

## 1. Phase 1 — SERP analysis

### Engine and localisation, recorded honestly

**Engine: the `WebSearch` tool, one call for the keyword, run 2026-09-10.**

Everything else was already known-broken from repeated testing today and was not
re-attempted:

| Path | Failure |
|---|---|
| Google plain-HTTP endpoint | HTTP 200 + `enablejs`, no result markup (JS-walled) |
| Google scraping path | HTTP 429 |
| DuckDuckGo `kl=in-en` | HTTP 202 bot-challenge |
| Brave `country=in` | HTTP 429 |
| Shared Chrome browser | Available but shared across ten agents; one sibling had its tab navigated away mid-capture. Not used. |

**`WebSearch` is US-localised, not `gl=in`.** For this keyword that matters *more* than
for most in the wave: Indian recipe SERPs are dominated by Indian food blogs and Indian
brand content, and a US-localised result set will under-weight regional Indian sites and
over-weight anything with US SEO investment. Two of the seven results returned
(`milkmaid.in`, `vinodcookware.com`) are Indian brand-content pages, and
`tarladalal.com` / `indianhealthyrecipes.com` / `vegrecipesofindia.com` are the
Indian recipe majors, so the set is not obviously mis-localised — but it is **not
evidence about the India SERP** and is not presented as such.

### Top results as returned (7, not 10)

`WebSearch` returned **seven** results for this query, not ten. Positions are the
tool's own ordering.

| # | Domain | Title as returned |
|---|---|---|
| 1 | milkmaid.in | Sweeten your Devotion this Ganesh Chaturthi with 10 Easy Modak Recipes |
| 2 | indianhealthyrecipes.com | Modak Recipe with & without Mould - Swasthi's Recipes |
| 3 | tarladalal.com | Ukadiche Modak for Ganesh Chaturthi recipe |
| 4 | thebellyrulesthemind.net | Easy Mawa Modak Recipe for Ganesh Chaturthi - The Belly Rules The Mind |
| 5 | vegrecipesofindia.com | Modak Recipe (With or Without Mould) \| Ukadiche Modak – Dassana's Veg Recipes |
| 6 | vinodcookware.com | 3 Modak Recipes for Ganesh Chaturthi – Vinod Cookware India Private Limited |
| 7 | wiproappliances.com | Easy Modak Recipe - How to Ganpati Special Modak At Home |

**AI Overview: not retrievable.** The `WebSearch` tool does not surface Google's AI
Overview block. The prose summary the tool returned is the *tool's own* synthesis of the
seven pages, not an AI Overview, and it is not recorded as one.

**People Also Ask: not retrievable.** The tool returns no PAA module. Rather than invent
one, the fan-out sub-queries in §3 were derived from the seven titles, the tool's
synthesis, and the failure modes the corpus leaves unexplained.

Both absences are recorded as audit failures, not papered over.

### Format finding

**The opposite of the banner post's problem.** This SERP is *dense* with informational
pages — seven of seven are recipe articles, and a blog post is unambiguously the right
format for the query. The difficulty is not format, it is saturation:

- **Two of the seven are appliance/brand content marketing** (`vinodcookware.com`,
  `wiproappliances.com`) and one is condensed-milk brand content (`milkmaid.in`). These
  rank on brand authority, not on recipe depth.
- **Three are the Indian recipe majors** with years of accumulated authority
  (`tarladalal.com`, `indianhealthyrecipes.com`, `vegrecipesofindia.com`).
- **Every one of the seven is a competitor** under `references/competitors.md` — recipe
  and food-content sites compete for exactly these long-tail festival queries. None is
  cited, linked, or paraphrased. They were read in Phase 1 only.

### What the corpus does and does not do

Common to all seven, from titles and the returned synthesis:

- Ingredient list, quantities, step sequence, mould / no-mould variants.
- Steaming time given as a flat range (the corpus converges on 10–15 minutes).
- Variants: ukadiche (steamed), mawa, fried, condensed-milk shortcuts.
- The `modakapriya` naming fact (one of Ganesha's 108 names).

What **none** of them does — verified against the titles and synthesis:

1. **Explains a single failure mode.** Not one title or summary line addresses why a
   dough cracks, why pleats tear, why a shell goes tough. They give the correct
   procedure and leave the reader alone with the wrong outcome.
2. **Connects the cooking to the ritual clock.** No page states what time the naivedya
   actually has to exist by, on a named date, in a named city.
3. **Says where its numbers come from.** Quantities are asserted, never sourced.
4. **Admits the ratio is contested.** Jaggery sweetness and coconut moisture vary by
   region and brand; the corpus prints one ratio as though it were settled.

---

## 2. Phase 5 gate — cannibalisation, both counts

Run against the two nearest live posts named in the assignment, comparing on
**(domain, title) article identity**, not publisher. `pinterest.com` and `youtube.com`
excluded by rule; neither appeared in any of the three sets anyway.

### Gate A — vs `ganesh-chaturthi-puja-vidhi` (batch `-10b`)

Live post's keyword: `ganesh chaturthi puja vidhi`.
Declared folds read from its brief: `ganesh sthapana vidhi` · `ganesh chaturthi puja
samagri` · `pranapratishtha vidhi` · `ganpati sthapana`. None is a food query.

Its recorded top results: `radhakrishnatemple.net`, `jkyog.org`, `bhaktihome.com`,
`mypoojabox.in`, `harishyam.com`, `devaastha.com`, `cycle.in`, `satvikly.com`,
`divinestore`.

| Metric | Count |
|---|---|
| **Shared articles (domain + title identity)** | **0** |
| Shared domains (weaker test, for reference) | 0 |

**PASS.** Note for the record: `radhakrishnatemple.net`'s puja-vidhi page *contains* a
modak-recipe subsection, per that post's own Phase 1 table. It does not rank for this
keyword, so it produces no article overlap — but it is the single point of topical
contact between the two SERPs, and it is a competitor page rather than a SubhSandesh one.

### Gate B — vs `ganesh-chaturthi-2026-date` (batch `-10`)

Run because this post references the aarti clock.

Its recorded top results: `drikpanchang.com`, `en.wikipedia.org`, `imagicaaworld.com`,
`artofpuja.com`, `archyam.com`, `luxeartisanship.com`.

| Metric | Count |
|---|---|
| **Shared articles (domain + title identity)** | **0** |
| Shared domains (weaker test, for reference) | 0 |

**PASS.**

### Verdict

**0 and 0. Clear pass — no ambiguity, no 2-count, nothing to escalate.** Recipe SERPs
and ritual-procedure SERPs do not intersect: the publisher populations are disjoint
(food blogs and appliance brands versus temple blogs and puja-kit retailers). This is
the expected result and it is now evidenced rather than assumed.

---

## 3. Phase 2 — gap analysis and fan-out map

**Table stakes** (must be present or the post reads incomplete): what ukadiche modak is;
rice flour + jaggery + coconut; the two-stage cook; a steaming time; mould versus hand
pleating; the steamed/fried/mawa distinction.

**The gap:** failure modes and the ritual clock. The corpus tells you what to do and
never what goes wrong or when it has to be finished.

**Stale data:** none to supersede — the corpus cites no dated data at all, which is
itself the finding.

| Fan-out sub-query | Where it lands |
|---|---|
| what is ukadiche modak / why steamed not fried | `## What ukadiche modak is, and why the steamed form is the ritual one` |
| how much rice flour, jaggery, coconut for how many modaks | `## Quantities for 21 modaks, and where these numbers actually come from` |
| why does modak dough crack | `### 1. The dough cracks the moment you press the shell` |
| why do the pleats tear / won't seal | `### 2. The pleats tear, or the tip will not close` |
| why does the filling leak / base go soggy | `### 3. The filling leaks and the base goes soggy` |
| why did my modak go hard | `### 4. The shell turns tough within a few hours` |
| steamed vs fried vs mawa modak difference | `## Steamed, fried or mawa: what each costs you on the day` |
| how long to steam modak | same H2 + the failure H3s |
| what time is Ganesh puja on 14 September 2026 | `## The clock on 14 September 2026: 4 hours 14 minutes in Mumbai` |
| can I make modak the night before | same H2 (retrogradation) |
| how many modaks to offer | `## Quantities for 21 modaks…` |
| what if I cannot make modak | `## When a modak — or a SubhSandesh page — is the wrong choice` |

**Angle (recorded as `batchMeta.angle`):** wins by being the only modak page that
explains the four failure modes in starch-science terms and pins the cook to a named
aarti window — 11:20 AM in Mumbai on 14 September 2026 — using SubhSandesh's own
measurement that 49.4% of festival pages (n=89, Raksha Bandhan) were built on the day
itself.

---

## 4. Phase 3 — sources

Five sources. Lane: rice-starch food science + festival foodways. **Zero competitors** —
and every one of the seven SERP results is a competitor, so none was used.

| # | Source | Subject test | Peer-reviewed | Open | What it verifies |
|---|---|---|---|---|---|
| 1 | Lu, Yang, Zhang, Yu, Chen & Hao, "Study on the Characteristics of Fine Rice Flour by Micro-Crushing and Its Effects on the Quality Improvement of Rice Cakes", *Foods* 13(22):3565, Nov 2024, DOI 10.3390/foods13223565, CC BY | **PASS** — rice flour particle size → rice-cake texture, i.e. the shell | **Yes** | Yes (PMC) | Gelatinisation temperature falls 76.63 °C → 71.61 °C as particle size drops; damaged starch rises 18% → 26.5%; damaged starch absorbs water at **5× the rate of normal starch**; finer flour cuts rice-cake hardness 47.77% and chewiness 52.44%; 100–120 mesh cake hardness 480.11 gf |
| 2 | Oh, Cho, Choi & Baik, "Starch Retrogradation in Rice Cake: Influences of Sucrose Stearate and Glycerol", *Foods* 9(12):1737, 25 Nov 2020, DOI 10.3390/foods9121737, CC BY | **PASS** — why a steamed rice-flour product hardens | **Yes** | Yes (PMC) | Additive-free control rice cake **reached maximum hardness at day 2** stored at 25 °C; the paper notes rice cakes "cannot be sold after 24 h of showcase storage at room temperature"; method: rice flour–water at 45% moisture, steamed in boiling water **20 min** to full gelatinisation |
| 3 | Yadav, Srivastava & Chandra, "Nature-human's celebratory ties: indigenous foodways and festive traditions of central India", *Journal of Ethnobiology and Ethnomedicine* 22:77, 22 May 2026, DOI 10.1186/s13002-026-00904-6, CC BY | **PASS** — the anthropology of festival food, in India | **Yes** | Yes (PMC/OA) | Ethnographic fieldwork over a year, three rounds Nov 2023–Dec 2024, Maikal Hills (Anuppur and Dindori districts, MP), Gond and Baiga communities; newly harvested crops are **offered to deities or ancestors before being consumed by the community**; ritual foods track what the local land yields in that season |
| 4 | Rajat Ghai, "Ganesh Chaturthi: The modak's history reflects its strong ties to the land; here is how", *Down To Earth* (Centre for Science and Environment), 30 Aug 2022 | **PASS** — about modak specifically | No — science journalism | Yes | Historian Saili Palande Datar: on the **ghats**, fried modak of wheat flour, sugar, coconut and cardamom; on the **coast**, steamed modak of rice flour — the local sticky *ambemohur* — with jaggery and coconut; "whatever is available is used"; the ukdiche steaming method is old; eaten hot with ghee; *modak* from Sanskrit *moda*, happiness/bliss. Food writer Vikram Doctor: modak "doesn't need fruits or even milk … entirely with dry and storable ingredients". *Samaithu Par* lists four types of modak |
| 5 | Drik Panchang, Ganesh Chaturthi 2026 date and puja time, Mumbai (`geoname-id=1275339`) | **date/festival reference — exempt from the caps** | n/a | Yes | Monday 14 Sep 2026; Chaturthi tithi **07:06 AM 14 Sep → 07:44 AM 15 Sep**; Madhyahna Ganesha Puja Muhurat **11:20 AM–01:48 PM**, 2 h 27 min; visarjan Fri 25 Sep 2026; moon-sighting window to avoid 09:10 AM–08:37 PM. Other cities: Pune 11:16 AM–01:44 PM, New Delhi 11:02 AM–01:31 PM, Chennai 10:51 AM–01:18 PM, Hyderabad 10:58 AM–01:25 PM, Jaipur 11:08 AM–01:36 PM. No publication date — `datePublished` omitted from `citation` |

**Swap test:** all five fail the swap test in the right direction — none could sit
unchanged in another `-10c` post. Rice-cake retrogradation cannot go in the rangoli
post; modak's coast/ghat geography cannot go in the songs post.

**Generic context statistics: zero.** No PIB, TRAI, Census or MEA figure appears.

**Wikipedia: zero body links.** Wikipedia URLs appear only as verified `sameAs` targets
in `structuredData`, which does not count against the 0–2 body budget.

### Batch cap check (counted within `-10c` only, by posts)

Read from the four sibling JSONs already in `-10c` before adding anything:

| Domain | Posts using it in `-10c` before this one | After this post | Cap |
|---|---|---|---|
| `pmc.ncbi.nlm.nih.gov` | 1 (`ganesh-chaturthi-rangoli-designs`) | **2** | 3 ✔ |
| `downtoearth.org.in` | 0 | 1 | 3 ✔ |
| `drikpanchang.com` | 0 | 1 (exempt anyway) | — ✔ |

No source **URL** in this post appears in any sibling. Three of the five sit on
`pmc.ncbi.nlm.nih.gov`, which is the one weak point in the sourcing spread and is
recorded as such in the audit — it is under the cap, but a reader landing on two
SubhSandesh Ganesh posts could see the PMC host twice.

### Searches that failed, recorded rather than hidden

- `"modak" Ganeshotsav Maharashtra food history scholarly article` — **no peer-reviewed
  work on modak exists that this search could reach.** Results were journalism and
  content farms. This is a real finding: modak itself is not a studied object, so the
  scholarly weight had to come from rice-starch food science and from festival-foodways
  anthropology instead.
- `anthropology prasad food offering Hindu ritual cooked food purity study open access`
  — returned only devotional and encyclopaedic pages, no scholarship. Not used.
- Jaggery composition: `iadns.onlinelibrary.wiley.com` (eFood review) returned HTTP 403;
  ScienceDirect `S1672630816300683` (Rice Science, steaming/degree-of-gelatinisation)
  returned HTTP 403; `link.springer.com` returned a bot challenge. **No jaggery
  composition figure is stated in the post**, because no source for one could be fetched
  and verified. Consequently the post gives **no calorie, macro or nutrition figure at
  all** — that is the honest outcome, not an omission to paper over.

---

## 5. Phase 5 — links and targeting

| Item | Value |
|---|---|
| `categorySlug` | `indian-festivals` (the festival hub, per BRIEF §6) |
| `templateUrls` | `/templates`, `/holi` |
| `/happy-ganesh-chaturthi` | **404 on prod.** Not linked in `contentMarkdown`, not in `templateUrls`. No sentence in the post depends on it. |

**The internal links are weakly earned, and that is recorded in the audit rather than
disguised.** A modak recipe has no natural path to a greetings-page product. Both links
are placed in the final "wrong choice" H2 — after the section that establishes the one
honest bridge (family who cannot be in the room when the aarti happens) — and `/holi` is
introduced explicitly as *the nearest live festival page, not a Ganesh one*, because the
Ganesh template is not deployed. Two internal links, at the floor of the 2–4 range, on
purpose.

## 6. Structured data — verified before emitting

`RENDERER_BUILT_TYPES` read directly from `app/lib/pageGraph.ts:37-47`:
`article`, `blogposting`, `faqpage`, `breadcrumblist`, `website`, `organization`,
`webapplication`, `webpage`, `person`.

- **`Recipe` is NOT in that set**, so it is legitimately additive and is emitted. It
  carries only what is actually on the page: real `recipeIngredient` lines,
  `recipeYield`, `prepTime`, `cookTime`, `totalTime` and `recipeInstructions`. No
  `nutrition` block, because the post states no nutrition figure. No `aggregateRating`
  and no `review`.
- **`ItemList` is not in that set** — emitted, mirroring the four failure-mode H3s in
  body order.
- **`@id`-matched `BlogPosting`** on `https://subhsandesh.in/blog/ganesh-chaturthi-modak-recipe#post`,
  carrying `citation` mirroring `batchMeta.sources` one-to-one, plus `about` and
  `mentions`. It survives because `@id` matches, not because of its type.
- **No `HowTo`.** The body is procedural in places, but Google dropped HowTo rich
  results in 2023 and `structured-data.md` forbids it here.

`sameAs` QIDs, all verified live against the Wikipedia API on 2026-09-10 (no `missing`
key on any title): Modak `Q2673557`, Ganesh Chaturthi `Q929250`, Jaggery `Q1148077`,
Rice flour `Q1269205`, Starch gelatinization `Q7601513`, Retrogradation (starch)
`Q906426`, Maharashtra `Q1191`.

## 7. Known weaknesses carried into the audit

1. SERP is US-localised `WebSearch`, not `gl=in`, and this is a query where the India
   SERP plausibly differs substantially.
2. Only 7 results returned, not 10.
3. No AI Overview and no PAA retrievable from this engine.
4. Household quantities and the 10–15 minute steaming range are **standard household
   practice, not a measured or cited figure**. The post says so in its own prose.
5. The first-party lead-time measurement is **Raksha Bandhan, not Ganesh Chaturthi**, and
   **n = 89** is small. Both disclosures appear in body prose, per BRIEF §1.
6. There is **no Ganesh page-creation data at all** — the template is not deployed. Every
   platform figure used is platform-wide across 15 page types, and the post says so.
7. Three of five sources share the PMC host.
8. Internal links are weakly earned for a food post.

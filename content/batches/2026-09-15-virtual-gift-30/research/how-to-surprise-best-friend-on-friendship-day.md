# Research brief — how to surprise best friend on friendship day

- **Slug:** `how-to-surprise-best-friend-on-friendship-day`
- **Row:** WAVE5-PLAN.json row 3 · market India · evergreen
- **Category:** `digital-gifts-romance` (verified live 2026-09-25 against the Strapi categories endpoint). **Not** `indian-festivals` — Friendship Day is not one of the festivals that hub covers.
- **Templates:** `/streak`, `/nutrition`, `/templates` (all three present in `TEMPLATE_LINKS`)
- **Slug availability:** `strapi.subhsandesh.in/api/articles?filters[slug][$eq]=…` returned `total: 0` on 2026-09-25 — free.

---

## Phase 0 — data gate

`npm run facts` was not re-run (the production-DB read is denied in this environment). `content/facts.md` as it stands was regenerated **2026-09-24**, which is fresher than the 2026-09-15 numbers the earlier briefs quote, so this post cites the 2026-09-24 lines and their date. No `facts-snapshot.md` exists in the batch directory, so the verifier checks `factsUsed` against the live file.

Gate satisfied: 11 relevant lines, two of them inside the first 150 words (3,843 registered creators at 1.35 pages each; 90.9% of started pages published and shared, 4,724 of 5,199). Both are chosen deliberately: the earlier waves' 40.6% password figure and 6.2-hour edit gap now read as a tic across 86 posts, and the published sibling already opens on the 3.7% / 94.1% pair.

`## Pricing` in `facts.md` is **empty**. No price, tier or "free" claim appears anywhere in the post, and the draft avoids the words the verifier treats as price-adjacent.

---

## Phase 1 — SERP

Source: `SERPS-WAVE5.md`, "## how to surprise best friend on friendship day", collected 2026-09-25 on DuckDuckGo `kl=in-en`. **This is a genuine India SERP** — ads filtered, positions India-served. Wave 4's US-served Brave caveat does not apply and is not repeated in the post.

Blog-shaped: **6/10**.

| # | Result | Type | What it is optimising for |
|---|---|---|---|
| 1 | floweraura.com/blog — "how to make friendship day special for your best friend" | retailer blog | flower and cake delivery; the post is a funnel |
| 2 | wikihow.com/Surprise-a-Friend | editorial how-to | generic, undated, no India specificity, no occasion |
| 3 | walkaroo.in/blogs — 10 gift ideas for Friendship Day | footwear brand blog | product placement in a listicle |
| 4 | tring.co.in/gifts/friendship-day-gifts | marketplace | celebrity video shout-outs, priced |
| 5 | charmbox.in/blogs — Friendship Day celebration guide | subscription-box brand | box sales |
| 6 | bookthesurprise.com — Friendship Day surprise category | service listing | paid surprise setups |
| 7 | news.abplive.com — "Friendship Day 2026: best gifts under Rs 1000" | news listicle | year-stamped, budget-bracketed shopping |
| 8 | yummycake.in/blog — long-distance Friendship Day surprise ideas | bakery blog | cake delivery |
| 9 | floweraura.com/blog — Friendship Day gift ideas | retailer blog | second FlowerAura entry on the same SERP |
| 10 | ndtvshopping.com — affordable gifting options for Friendship Day | shopping vertical | affiliate listings |

**Read for Phase 1, cited nowhere.** All ten are either competitors under `references/competitors.md` or commercial gifting brands; none appears in `sources` or as a link.

What the ten have in common, and it is the whole opening: **not one of them explains the date.** Two of them state a year-stamped date in passing (ABP Live says "2026"); none distinguishes the Indian first-Sunday-of-August date from the UN's 30 July, none gives the rule, and none says what the day is actually for. Six of ten sell a physical object.

---

## Phase 2 — gap analysis

**Table stakes** (all or most of the ten cover these, so the post must too): a date reference; a set of concrete things to do; long-distance handling; a nod to what to write.

**The gap.** The occasion itself is unowned. Nobody in the top ten:

1. States that India's Friendship Day is a *floating* date (first Sunday of August) and gives the arithmetic forward.
2. Separates it from the UN's International Day of Friendship on 30 July.
3. Explains why a day for friendship is not a foreign import of the *idea*, only of the packaging.
4. Says what a dated occasion mechanically does — which is remove the need for a reason.
5. Addresses register: how to be warm to a friend without the romantic conventions that dominate this whole product category.

**Stale data.** The SERP carries almost no data of any kind; the only dated numbers are ABP Live's price brackets, which are year-stamped and commercial. There is nothing to supersede — which also means there is nothing to beat on freshness alone.

**Fan-out sub-queries → H2s.**

| Sub-query | H2 |
|---|---|
| when is friendship day / what date | When is Friendship Day, and why the Indian date is not 30 July |
| why does india celebrate friendship day in august | Why a day set aside for friendship is not an import into India |
| why celebrate friendship day at all | What a dated occasion is actually good for |
| friendship day surprise ideas for best friend | Four ways to surprise a best friend on Friendship Day |
| which idea should i pick | Four options compared by what each one asks of you |
| what to write for a friend / friendship day message | Writing warmly for a friend without sounding like a partner |
| missed friendship day / friendship day is over | What to do if Friendship Day has already gone |
| when not to do this | When a Friendship Day surprise is the wrong move |

**Angle.** Wins by being the only post that treats Friendship Day as an occasion with a contested date rather than a gift list — separating India's first-Sunday-of-August date from the UN's 30 July, showing with Apatani ritual-friendship research that a scheduled day for friendship is not a Hallmark import into India, and arguing from the 2024 finding that fewer than a third of people message an old friend even when they want to that the date's only real job is to remove the need for a reason.

---

## The date — how it was verified, because it is the most checkable fact in the post

1. **Calendar arithmetic, run locally on 2026-09-25.** The first Sunday of August is 2 August in 2026, 1 August in 2027, 6 August in 2028. Confirmed by `date -j` weekday lookups on each candidate day.
2. **The UN date, from the primary source.** `un.org/en/observances/friendship-day` was fetched in full: the International Day of Friendship is **30 July**, proclaimed by the UN General Assembly in **2011**. The page carries no first-Sunday-of-August reference at all, which is itself the evidence that the two observances are distinct.
3. **India-convention cross-check.** One `serp-ddg.mjs --region in-en` query ("when is friendship day in india first sunday of august") returned five independent non-competitor references agreeing on the first Sunday of August for India — Mathrubhumi, Indiatimes, Hindustan Times, Moneycontrol and timeanddate.com. `timeanddate.com` itself returned 403 to this sandbox, so it counts as SERP-title evidence, not a read source. None of these is cited in the post; they were a fact-check, not a citation.
4. **Consistency with the published sibling.** `digital-gift-ideas-for-best-friend` states "the first Sunday of August — 2 August in 2026". This post agrees with it exactly and extends it forward, so the two pages cannot contradict each other.

One published page (nationaltoday.com) gave "August 3, 2026", which is a Monday and therefore wrong. Noted here so the discrepancy is on the record rather than silently dropped.

---

## Lead time (Gate 0)

Today is 2026-09-25. Friendship Day 2026 (2 August) has passed; the next is 1 August 2027, ten months out. The post is written **evergreen**: no "this year", no countdown, no urgency language, and the date section states the *rule* with three worked years rather than a single current-year date. The one section that could have read as urgency — "What to do if Friendship Day has already gone" — is framed as a permanent condition of friendship rather than a this-year apology.

---

## Phase 3 — sources

Route used: **Crossref → Unpaywall → OA landing page**, with OpenAlex (which had reset and answered) and DOAJ for discovery, and the Semantic Scholar graph endpoint for one abstract the publisher would not serve. Searched the phenomenon, not the keyword: `friendship maintenance behaviours adults`, `celebration ritual friendship`, `platonic intimacy young adults`, `ritual friendship fictive kinship India`, `friendship day commercialization greeting card`, `reconnecting dormant ties`, `ceremonial friendship`, `friendship ritual`, `invented holiday commercial celebration`. Searching the keyword itself returns listicles, because nobody studies listicles.

Checked before committing: `SPENT-SOURCES.json` (86 posts, 367 URLs, 294 domains) plus the `sources` arrays of all six friend-cluster siblings on disk. That cluster had already spent `hrcak.srce.hr`, `journalqd.org`, `ledonline.it`, `e-journal.elkuator.com`, `research.aalto.fi`, `dspace.stir.ac.uk`, `researchrepository.wvu.edu`, `repository.cam.ac.uk`, `centaur.reading.ac.uk`, `jyx.jyu.fi`, `knowledge.uchicago.edu`, `plopcon.org` and others, none of which is reused here.

**The four cited:**

| Source | Domain | Cap position before this post | Read |
|---|---|---|---|
| Hilaly, S. (2018). *Culture of Friendship Among the Apatanis of Arunachal Pradesh*, Space and Culture India 6(1) 38–50 — [landing page](https://www.spaceandculture.in/index.php/spaceandculture/article/view/322) | `spaceandculture.in` | **2 of 3** — this takes the third and last slot | Abstract + full citation metadata read on the OJS landing page. Full text is a PDF, which does not parse in this sandbox. |
| Aknin, L. B., & Sandstrom, G. M. (2024). *People are Surprisingly Hesitant to Reach Out to Old Friends*, Communications Psychology — [Sussex repository record](https://sussex.figshare.com/articles/journal_contribution/People_are_Surprisingly_Hesitant_to_Reach_Out_to_Old_Friends/25479784) | `sussex.figshare.com` | 0 | Full abstract read from the repository record (the figshare HTML page returns 202 to a browser fetch; the repository API served the record). nature.com and pmc.ncbi are both blocked/at cap, which is why this location was chosen. |
| Castaneto, K. K., & Aknin, L. B. (2025). *Who Reaches Out to Old Friends and What Do They Say?*, Collabra: Psychology 11(1) — [publisher page](https://online.ucpress.edu/collabra/article/11/1/143319/212890/Who-Reaches-Out-to-Old-Friends-and-What-Do-They) | `online.ucpress.edu` | 0 | **Landing page returned a bot challenge (403).** Abstract verified through the publisher-supplied metadata record instead. Recorded as an audit failure on the "all fetched" item and disclosed in the body's source list. |
| United Nations, *International Day of Friendship* — [un.org](https://www.un.org/en/observances/friendship-day) | `un.org` | 0 | Page read in full. Carries no publication date, so `datePublished` is omitted from `citation` rather than stamped with the fetch date. |

**Subject test:** all four are about friendship — its ritual institutionalisation, the barrier to contacting a friend, who actually makes contact, and the observance itself. None is "about India" or "about the internet" in general.

**Swap test:** none survives a swap. The Apatani paper only makes sense where the post argues about a *day* for friendship; both Aknin papers are about old friends specifically, not partners; the UN page is the Friendship Day observance itself.

**Generic context statistics:** zero. No PIB, TRAI, Census or MEA line appears.

**PDFs:** every scholarly source here is an abstract-and-metadata read. Stated in the body's source list and in the audit.

**Sources that were chased and rejected**, recorded so the next agent does not repeat them: `journals.plos.org` (The American Friendship Project, 2024) and `pmc.ncbi.nlm.nih.gov` are both at the domain cap; `tandfonline.com` (Cogent Social Sciences, "Cultural influence on using mobile instant messaging applications to develop and maintain friendship") and every Wiley-only JCMC and Global Networks title are 403 here; `works.bepress.com/emily_west/5` (greeting-card industry and cultural criticism — an excellent fit) is dead, SelectedWorks was discontinued in April 2025; `hdl.handle.net/11693/26939` ("Globalization and Rituals: Does Ramadan Turn into Christmas?", Bilkent) refused the connection; `timeanddate.com` 403s.

---

## Phase 3b — anti-cannibalisation

**`mustReadSibling`: `digital-gift-ideas-for-best-friend` (published). Read in full**, body and FAQs.

It is an eight-idea roundup arguing that a friendship gift is a *calibration* problem — the risk is overshooting, not underdoing — and it carries one section on the Indian friendship calendar that states the first-Sunday-of-August date in a single line. It owns `/searched` and `/nutrition` as ideas and cross-links `virtual-gift-for-best-friend`.

**The split, in one sentence:** `digital-gift-ideas-for-best-friend` owns the ideas roundup and the calibration problem of what to send a friend; this post owns the occasion itself — which date Friendship Day actually is in India, why a scheduled day for friendship is not an import, and what to do on it.

It is cross-linked from the closing section with descriptive anchor text, after the section that earns it.

**Also read in full** (`sources`, angle, H2 structure, template use): `virtual-gift-for-best-friend`, `long-distance-gift-for-best-friend`, `digital-gift-for-best-friend`, `birthday-website-for-best-friend`, plus `digital-gift-for-long-distance-friend` and `birthday-wish-website-for-friend`, which the assignment did not name but which sit in the same corner. That corner is genuinely crowded — six published posts — and the check was topical, not just URL-overlap:

- `virtual-gift-for-best-friend` — what to send from another city. **Distance**, not occasion.
- `long-distance-gift-for-best-friend` — the parcel as a logistics failure. **Delivery**, not occasion.
- `digital-gift-for-best-friend` — choosing one gift with a time horizon. **Single-choice decision**, not occasion.
- `birthday-website-for-best-friend` — the semi-public page that gets screenshotted into a group chat. **A birthday**, which is one person's day; Friendship Day is a shared one.
- `digital-gift-for-long-distance-friend` — a friendship has no anniversary, so make your own occasion. **Closest in argument**, and the reason to check carefully: it argues you must *invent* an occasion. This post argues the opposite — India already has one, on a date most people get wrong. They are complements, not twins.
- `birthday-wish-website-for-friend` — which templates transfer from partner to friend.

Three of nine wave-5 rows also touch friends. `how-to-surprise-a-friend-on-their-birthday` and `how-to-surprise-best-friend-birthday-online` are both birthdays; neither primary appears in this post's `secondaryKeywords`, and no H2 here targets a birthday.

**Verdict: hold the lane.** The occasion is unclaimed by all six published siblings and by all ten SERP results. No abort.

`overlapWithWritten` for this row is **1 of 10** and `stemmedKwSim` 0.29 — the lowest-collision row in the wave, which matches what reading the siblings showed.

---

## Phase 4–5 — draft decisions

**Register.** 86 of the 89 posts in this batch are partner-facing, and the brief is right that the romantic conventions are all wrong here. The post says so in its own section, with the template mix as the evidence: apology dashboard 26.9%, digital bouquet 22.9%, "I love you" page 22.7% of 5,199 pages. The library is romantic by default.

**Templates, described from `app/lib/prompt.ts` rather than from the slug.**

- `/streak` — "two people, one tap a day; the streak grows, each check-in keeps a word, and after a hundred days you have a diary neither of you meant to write." Used as the *duration* idea: it is the only one of the four whose value is measured in months, which is a friendship-shaped property.
- `/nutrition` — "a nutrition label where the product is a person (serving size 1, calories ∞); tap any row and the sender explains why it is on the label." Three siblings already describe it, so this post takes a different line on it: the joke is the *delivery mechanism* for sincerity — it lets you say something true without either party having to treat it as a declaration, which is the specific social problem of being warm to a friend. It is not described as a sentimental gesture, because it is not one.
- `/templates` — once, in the closing section.

Plus the required blog cross-link to `digital-gift-ideas-for-best-friend`, which `verify-batch.mjs` excludes from the 2–4 template-link count.

**Mandatory disclosure, in body prose:** the database records which *template* was opened, never who received it. A count against a romantic template is evidence about the page's design, not proof a partner was on the other end. This sits in the register section, where it does the most work.

**Downside sections, two of them:** "When a Friendship Day surprise is the wrong move" (phone-unfamiliar recipients; a page standing in for an apology) and, inside the four ideas, the explicit statement that sentiment is the wrong register for a bereavement, a layoff or an illness. Two of the four comparison-table rows are not SubhSandesh formats.

---

## Phase 6 — audit summary

48 passed, 2 failed, disjoint, 50 total, strings taken byte-verbatim from `references/publish-checklist.md` by parsing the file with the same routine `verify-batch.mjs` uses.

**Failed, both structural:**

1. *Slug short, hyphenated, lowercase, no stop words* — three stop words, but the slug is the target keyword verbatim and is fixed by WAVE5-PLAN row 3. Closes only if the orchestrator re-cuts the slug.
2. *3–6 outbound links, all fetched and verified to contain the cited fact* — three of four were fetched and read directly; `online.ucpress.edu` bot-challenges this sandbox, so the Collabra abstract was verified from the publisher-supplied metadata record. Closes only from a client the UC Press challenge lets through.

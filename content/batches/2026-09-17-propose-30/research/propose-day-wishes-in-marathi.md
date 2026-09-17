# Research brief — `propose day wishes in marathi`

- **Slug:** `propose-day-wishes-in-marathi` (checked free in Strapi: `filters[slug][$eq]` returned `total: 0`)
- **Category:** `modern-romance` (Propose Day is Valentine week, not a festival)
- **Templates:** `/proposal` (mandatory), `/love-gf` (genuine alternative); `/templates` linked in body only
- **Volume:** estimate band only, no tool data. No volume figure is printed in the post.
- **Date check, done here, not taken on trust:** 7 Feb 2027 = Sunday (Rose Day), **8 Feb 2027 = Monday (Propose Day)**, 14 Feb 2027 = Sunday (Valentine's Day). 8 Feb **2026** was a Sunday, which is why last cycle's advice assumes a weekend.

---

## Phase 1 — SERP analysis

WebSearch was unavailable (session budget exhausted at 200/200), so the SERP was pulled from an independent engine and each result fetched directly. Structural metrics were computed in a sandbox rather than by reading the pages into context, deliberately: these are wishes farms and the risk of absorbing their lines is the whole problem.

| Page | Words | Structure | Transliteration | Gloss | Date handling | Schema |
|---|---|---|---|---|---|---|
| maharashtratimes.com | ~1,750 | H2 is the wish line itself; flat dump | No | No | Title says 2026, a surviving H2 still says **2025** | None |
| marathi.webdunia.com | ~1,043 | Single flat list | No | No | 2026 in title | None |
| lokmat.com | ~955 | Flat list of "love lines" | No | No | 2026 in title | None |
| mensxp.com/marathi | ~3,729 | **Segmented by recipient** — husband, boyfriend, female friend, wife, friends, singles; "101 wishes" | Roman in headings only | No | Undated | FAQPage |
| zeenews.india.com | — | 403 to a direct fetch; not analysed | — | — | — | — |
| marathi.timesnownews.com | — | 403 to a direct fetch; not analysed | — | — | — | — |

Two of the six incumbents blocked a direct fetch. That is recorded rather than papered over; their structure is inferred from the SERP title only and was not used.

## Phase 2 — Gap analysis

**Table stakes** — Devanagari lines; a recipient split (MensXP); a "Happy Propose Day" formula line; volume of options.

**The gap, in order of value:**

1. **Nobody transliterates or glosses.** Every page assumes the reader reads Devanagari fluently and needs no meaning. Most of this audience types in Roman.
2. **Nobody marks register.** तू and तुम्ही are the difference between a wish to a spouse and a wish to a colleague, and not one incumbent labels which line takes which.
3. **Nobody prints the 2027 weekday.** Four incumbents still carry 2025 or 2026 in their titles.
4. **Nobody treats the wish as *addressed*.** A quotes page is a dump; a wishes page has a recipient. MensXP segments by recipient but does not change the grammar accordingly.
5. **Nobody names the constraint.** Sending a romantic line in Maharashtra is, for a real share of this audience, something done quietly. No incumbent says so, and none has any data on how people actually send things.

**Stale data:** none of the five pages cites a single source, so there is nothing to supersede — the whole category is unsourced.

**Fan-out sub-queries → H2s:** when is Propose Day 2027 / how is Marathi different from Hindi here / which wish for which recipient / how should I send it / when is this the wrong idea.

**Angle:** wins by being the only Propose Day page that treats a Marathi wish as something addressed to a named recipient — grouping every line by तू or तुम्ही, transliterating and glossing it, and pricing in how quietly it has to be sent, using SubhSandesh's platform-wide password-protection rate alongside Pune-district research on premarital relationships.

**Boundary against the sibling post (`propose day quotes in marathi`):** a quote is quotable; a wish is *sent to someone*. Every section here is organised by recipient, and a third of the lines go to people the sender is explicitly not proposing to — a friend, a colleague, a group, a spouse of many years.

## Phase 3 — Sources

Lane: **Maharashtrian social ritual and how Valentine week is actually received in Maharashtra.** Searched: `Valentine's Day India cultural reception study`, `Valentine's Day protest India scholarship`, `public display affection India norms study`, `Maharashtra youth romantic relationships research`, `globalisation festivals India consumption research`, plus `Youth in India Situation and Needs Maharashtra`, `premarital relationships Pune`, `Marathi honorific second person pronoun`.

Search infrastructure was degraded throughout: OpenAlex returned HTTP 429 (daily budget exhausted by concurrent siblings), Semantic Scholar 429, DuckDuckGo/Mojeek/Startpage/SearX all served bot walls, and `censusindia.gov.in` would not resolve. Brave and the Crossref/DOAJ/Europe PMC APIs carried the search.

**Used (5):**

1. **Alexander, M. et al. (2007), "Correlates of Premarital Relationships Among Unmarried Youth in Pune District, Maharashtra, India", *International Family Planning Perspectives* 33(4).** Peer-reviewed, open access, **read in full**. About one-third of urban and one-fourth of rural 15–24-year-olds had made or received a proposal of romantic partnership; 24% of urban young men and 8% of urban young women had ever had a romantic partner (17% / 5% rural). The limitations section states Pune is "a traditional setting… relationships are usually carried on secretly"; the results find strict parental supervision made no difference to whether a young person entered one. Subject test: **pass** — it is literally about proposing, in Maharashtra. Dated 2007, and the post says so.
2. **Bhandari, P. (2017), "Pre-marital Relationships and the Family in Modern India", *SAMAJ* 16.** Peer-reviewed, open access, **read in full**. 100 in-depth interviews with 24–31-year-olds in New Delhi plus ~25 parents; partners routinely check each other's messages, email and whereabouts, and submitting to it is read as intimacy. Fieldwork is Delhi, not Maharashtra — stated in the post as "New Delhi fieldwork" rather than generalised. Subject test: **pass**.
3. **IIPS (2008), "Romance and sex before marriage among young women and men in Maharashtra", Youth in India Policy Brief 5.** **Record and abstract only** — the PDF is behind a Cloudflare challenge. Cited for what the record states, nothing more. Subject test: **pass**.
4. **Eliasson, P. (2025), "An Overview of Early Modern Missionary Dictionaries of Konkani and Marathi", *Orientalia Suecana* 74.** Peer-reviewed, open access, **abstract and record read; the PDF endpoint refused a direct fetch**. Supports one claim only: Marathi has been catalogued as a distinct language of western India since the sixteenth and seventeenth centuries. **This URL sits at the 2-post batch cap** (one sibling also uses it) — re-verified at finalisation with `capcheck.mjs`; it is at the cap, not over it. It is also the one source that **fails the swap test**, recorded as such in `auditReport.failed`.
5. **ReligionUnplugged (14 Feb 2026), "Hindu Moral Panic And The Policing Of Valentine's Day In India".** News analysis, **read**. Annual crackdowns on couples in public during Valentine's Day; names a 14 Feb 2026 campus incident in Indore. Not scholarly, and not Maharashtra-specific — used only for the fact that the week is publicly contested.

**Generic context statistics used: zero.** The Census 2011 Marathi speaker count was dropped when `censusindia.gov.in` proved unreachable, and no substitute was smuggled in from a secondary site.

**Not used, deliberately:** `frontiersin.org` (at the 3-post domain cap), the doiSerbia Valentine's-Day-in-Serbia paper and the Wikipedia *Propose Day* entry (both on the wave-1 banned list), every competitor page in the SERP, and the Popelková & Zajonc Slovakia holiday paper (only a Polish abstract was readable).

## Phase 4 — The Marathi lines

**30 drafted → 12 published, 18 cut.** Twelve were cut because I could not be confident they were Marathi rather than Hindi written in Devanagari; six more were correct but cut for the word budget.

**How each surviving line was checked.** Every line had to carry Marathi-only morphology, not merely Devanagari:

- copula **आहे / आहेस / आहात / आहेत**, never है / हैं;
- possessives **माझा / माझी / माझं** and **तुझ्या / तुमच्या**, never मेरा / तेरा / तुम्हारा;
- the Marathi second person **तू / तुम्ही** with its own endings — होशील, म्हणालीस, आहेस, आहात, असशील — never तुम / आप;
- the Marathi "love *on* you" frame **तुझ्यावर प्रेम आहे**, never the Hindi तुमसे प्यार है;
- Marathi lexis — आयुष्य, धावपळ, घरपण, नशीब, संसार, सोबत, मैत्री — in place of ज़िंदगी, भागदौड़, किस्मत, दोस्ती;
- Marathi compound and desiderative verbs — सांगून टाकतो, राहून जातं, सांगावंसं वाटतं, वाट बघणे, मन मोकळं करणे, पडतायत.

**Cut, with the reason:** lines built on दिल / धडकन instead of काळीज (Urdu-Hindi register grafted onto Marathi); ज़िंदगीभर साथ निभाशील का (both ज़िंदगी and निभाना are Hindi); तुझको प्रपोज करतो (तुझको is Hindi; Marathi is तुला); हर पल तुझी आठवण येते (हर पल is Hindi; Marathi is प्रत्येक क्षणी); इश्क़ / मेरी जान and four further shayari-style couplets whose idiom I could not verify as Marathi rather than Hindi with Marathi spelling. Fewer correct lines beats more shaky ones, and a Marathi reader spots a Hindi frame instantly.

**Gender agreement is stated in the body**, because it changes almost every line: म्हणालीस / म्हणालास and आवडतेस / आवडतोस for the addressee, विचारतो / विचारते for the speaker.

Nothing was copied from any competitor page. The lines were written here.

## Phase 5–6 — Targeting and audit

- 3 internal links, all from `TEMPLATE_LINKS`: `/proposal` (after the section establishing why a lockable page matters), `/love-gf`, `/templates`. The post states plainly that for a friend, a colleague or a group **neither template is right** and the correct answer is plain text with no link, and that every template's own wording and prompts are **English** — the Marathi is what the sender types in.
- 6 outbound links, all fetched: 5 sources plus one Wikipedia entity link (`Marathi language`).
- `sameAs` verified against the Wikipedia API with Wikidata QIDs paired: Marathi language Q1571, Valentine's Day Q37587, Maharashtra Q1191, Pune district Q1797336, Devanagari Q38592.
- Body 1,793 words excluding FAQs; 12 FAQs in `article.faqs` only; no FAQ question is byte-identical to a body H2.
- Audit: **47 passed, 3 failed, 50 total, disjoint.** The three failures are honest and recorded in the file: the recipient-grouping converges with MensXP's framing; the answer paragraph runs to four sentences because Block 1 requires it; and the Eliasson source fails the swap test.
- Structural limitations (no proposal-specific data; empty pricing block; 2007 Maharashtra figures; abstract-only IIPS read; estimate-band volume) are in `batchMeta.structuralLimitations`, never in `failed`.

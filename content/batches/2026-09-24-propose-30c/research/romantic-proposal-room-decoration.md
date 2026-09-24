# Research brief — `romantic-proposal-room-decoration`

**Keyword:** romantic proposal room decoration
**Secondaries on the same page:** marriage proposal decoration ideas · love proposal decoration ideas · marriage proposal hotel room decoration
**Category:** `modern-romance` (verified against the live Strapi category list)
**Demand:** 4 autocomplete prefixes, ordinal only. No volume figure is printed anywhere on the page.
**Slug check:** `filters[slug][$eq]=romantic-proposal-room-decoration` returned `total: 0` on 2026-09-24. Free.

---

## Phase 0 — first-party facts (from `content/facts.md`, regenerated 2026-09-24)

Copied verbatim into `batchMeta.factsUsed`:

1. 5,148 personalised pages created since 2026-03-12, across 21 page types
2. 90.9% of started pages are actually published and shared (4,679 of 5,148)
3. 48.3% of shared pages are opened on a phone (27,499 of 56,886 views)
4. 38.5% of creators password-protect their page before sharing it (1,983 of 5,148)
5. Median gap between first save and last edit: 2.2 hours — sampled on `/apology-dashboard`, n=1,375
6. #3 page type: `/love-gf` — 1,178 created, 22.9% of all pages

Facts 1 and 2 sit inside the first 150 words. **Every figure is labelled in body prose** as
platform-wide across 21 page types, or as sampled on the template named beside it. No figure is
attributed to proposal pages: the `proposalpages` probe is still refused, so no proposal-specific
data exists.

**The pricing block in `content/facts.md` is empty for a fourth batch.** Nothing on this page
states or implies what anything costs. The draft was machine-scanned for 25 money terms before
saving; zero hits. Every ordering on the page is by *work* (set-up minutes, reversal minutes) and
by *what the room allows* — never by outlay. Where an idea is simple, the page says it is quick or
uses the room as it already is.

---

## Phase 1 — SERP (measured, thinly)

One India-phrased WebSearch was run on 2026-09-24 (`romantic proposal room decoration ideas
India`). **The search tool is US-served, and no result page was fetched in full**, so this is a
result-listing observation, not a SERP audit, and nothing on the page describes a competitor's
content. The nine returned results:

| Result | What it is |
|---|---|
| cherishx.com (two entries: all-India, Delhi NCR) | decoration-service vendor, booking pages |
| balloondekor.com | decoration-service vendor, product page with a starting figure in the title |
| 7eventzz.com | decoration-service vendor |
| jusst4you.com (two entries) | vendor blog listicles, organised by theme |
| surpriseplanner.in (two entries) | vendor blog listicles, one year-stamped |
| decorplanner.co.in | vendor blog listicle, framed by outlay |

**Observation, limited to what the listing showed:** the visible results are decoration vendors and
vendor-blog listicles. Titles and snippets organise by *theme* ("Luxury Red & Gold", "Starry
Night", "Royal Romance") and by what to acquire (LED letters, rose petals, fairy-light canopies).
None of the visible titles organises by the constraint the reader actually has.

**Not claimed anywhere on the page:** what any specific competitor does or does not cover, what
position anything holds, or what "most ranking pages" say. None of this batch's keywords is among
the 11 India-served SERPs measured on 2026-09-16.

---

## Phase 2 — gap and angle

**Table stakes** (visible in the result listing, so the page must not look incomplete without
them): lighting, seating/floor setups, a doorway or entry moment, photographs, string lights, the
hotel-room case.

**The gap.** Every visible result treats the room as a shopping list and sorts by theme. Nobody
treats the room as a *constraint*: which room you get, for how long, and how fast you can put it
back. Nobody names the reversal time at all — and reversal time is the single most useful number
for someone decorating a room inside a shared family home.

**Second gap.** Nobody says the decoration is not the proposal. Over-decoration reads as a
production and announces how much was staged before the question was asked, which raises the stakes
of the answer.

**Third gap.** The hotel-room secondary is answered everywhere as a service. Nobody says the
obvious consequence: if the hotel's team sets it up, strangers know before she does.

**Fan-out sub-queries** → mapped to H2s:

| Sub-query | H2 |
|---|---|
| what is proposal room decoration / does it matter | What proposal room decoration actually is |
| ideas / what setups are there | Seven proposal room setups, sorted by the work they take |
| do I need decoration or is a message enough | How the room compares with a page she can open |
| what lighting for a proposal at home | Light is the part to get right |
| which room, how long do I have it, family at home | Which room, and for how long |
| marriage proposal hotel room decoration | Marriage proposal hotel room decoration, and the part nobody mentions |
| when not to decorate | When decorating the room is the wrong move |

**Angle (one sentence):** wins by being the only post that treats the proposal room as a constraint
rather than a shopping list — seven setups sorted by set-up and reversal time and by what the room
allows, grounded in lighting-and-mood experiments and SubhSandesh's platform-wide 90.9%
publish-and-share rate across 21 page types.

---

## Cannibalisation — how this differs from the two named siblings

**`proposal-ideas-for-girlfriend-at-home.json` (wave 2)** sorts eight ideas by **the privacy each
needs** and is about who might walk in. Its sources are the household-privacy lane (Guttmacher,
USENIX SOUPS, PLOS, Pew) and are banned to me.

**`romantic-proposal-ideas-at-home-with-family.json` (this batch)** sorts seven ideas by **audience
size** and is about consent to being asked in front of people. Its lane is social-network approval;
its four sources are PMC and USU digital commons.

**Mine is the physical room itself** — light, surfaces, seating, doors, and how long a state takes
to build and to undo. Sorting key: **work, then what the room allows**. Not who is in the room, not
who knows. No source overlaps either sibling; no domain overlaps either sibling. Where the family
question arises it is answered as a *scheduling and door* question ("which room closes, when is it
empty, how long do you have it"), not as a privacy-norms or approval question. Both siblings are
referenced only by subject in prose; their `/blog/` slugs are not `TEMPLATE_LINKS` entries and 404
until waves 1–3 publish, so neither is linked.

---

## Phase 3 — sources

Lane: **environmental psychology — how physical settings shape feeling and behaviour.** Queried via
`findpapers.mjs` (`lighting affect mood environmental psychology study`, `ambient lighting intimacy
perception research`, `restorative environment attention study`, `bright light emotional intensity
consumer judgment`), then the DOAJ article API and Unpaywall.

**What was not usable, and why — recorded because it shaped the source set:**

- `pmc.ncbi.nlm.nih.gov` / `europepmc.org` are at the 3-post domain cap, and `journals.plos.org` too.
  That rules out most of the open lighting-and-affect literature, which lives there.
- The canonical papers are paywalled with no OA copy anywhere: Xu & Labroo, *Incandescent affect*
  (JCP 2013, `10.1016/j.jcps.2013.12.007`), Knez, *Effects of indoor lighting on mood and cognition*
  (J Env Psych 1995), Saxbe & Repetti, *No place like home* (PSPB 2009), Maslow & Mintz, *Effects of
  esthetic surroundings* (1956). Unpaywall returns `is_oa: false` and zero OA locations for all four.
- `nature.com` (Scientific Reports, *Effects of illuminance and correlated color temperature of
  indoor light on emotion perception*, 2021) is bot-blocked from here — it returns a 305-byte shell.
  **It is not cited, because it was not read.**
- Gosling et al., *A room with a cue* (JPSP 2002) is the best-fitting classic. The APA release PDF
  downloaded once and was blocked on eight retries, so the full text was never parsed. **Not cited.**
- `sciencedirect.com` and `journal.uc.ac.id` returned 403.

**The five cited, all open access, five distinct domains, none on the 332-URL ban list:**

1. **Journal of Graphic Engineering and Design (University of Novi Sad), 2024** —
   `https://jged.uns.ac.rs/index.php/jged/article/view/1207`. *Full PDF read.* 42 adults (16 male,
   26 female, 18–40) from the interior design department at Universitas Sebelas Maret rated one
   DIALux-simulated room under 7 lighting settings: CCTs of 2700 K, 4000 K and 6500 K, work-plane
   illuminance 124.8 lx (dim), ~255 lx (control), 390.3 lx (bright). Bipolar 1–7 semantic
   differential, relaxed–tense and alert–fatigue. Pearson: relaxed–tense correlated **negatively**
   with CCT, which the authors state "might mean the warmer lighting relates to a relaxing mood";
   alert–fatigue correlated negatively with both CCT and illuminance. *Subject test: passes — it is
   about how a room's light is read.*
2. **Frontiers in Human Neuroscience, 20 September 2023** —
   `https://www.frontiersin.org/articles/10.3389/fnhum.2023.1201559/full`. *Full text read.* 66
   participants (22 m / 44 f, M = 23) rated 32 rendered living-room and bedroom models on Laumann's
   22-scale restorative-components questionnaire; 15 then viewed the best- and worst-rated rooms in
   VR with eye and fNIRS sensors. Four characteristics identified for a restorative home: favourable
   window views, light warm colours, spacious room size, outdoor access. Pupil radius 1.82 mm in the
   best-rated room vs 2.13 mm in the worst (n = 15, p = 0.00). *Subject test: passes — home interiors.*
3. **Annals of Agricultural and Environmental Medicine, 2020** — journalssystem.com. *Abstract and
   conclusions read; full PDF not parsed.* 12 interior boards varying proportions, lighting, colour
   scheme and the colours and spatial arrangement of furnishings; Tobii TX300 eye tracking plus
   self-described emotional reactions; different spatial and colour arrangements provoked different
   emotional responses, confirmed by pupil parameters. *Subject test: passes.*
4. **IDA: International Design and Art Journal, 2023** — idajournal.com. *Abstract read only.* 93
   participants rated 27 spaces/rooms across eight experiential categories using a semantic
   differential over pleasure, excitement and dominance, plus openness and spaciousness ratings.
   *Subject test: passes.*
5. **img journal (University of Bologna), 2026** — img-journal.unibo.it. *Abstract read only.*
   Architectural-atmosphere study reading Carlo Mollino's *Bedroom for a Farmhouse in a Rice Field*
   (1943, for *Domus*) through Böhme, Griffero and Zumthor: atmosphere in an interior is generated
   by layered materials, colour and enclosure, not by objects set into the room. *Subject test:
   passes — it is literally about a staged bedroom interior.*

**Swap test:** none of the five would sit unchanged in another keyword's post in this batch. All
five are about the physical reading of an interior, which is this post's whole subject and no other
post's.

**Generic context statistics: zero.** The Census of India dwelling-room tables were attempted
(`censusindia.gov.in` reachable but the table catalogue was not retrieved in time) and dropped
rather than padded. Wikipedia body links: zero.

**Candle safety is stated without a citation.** `ndma.gov.in` was unreachable and the NFPA candle
page returned an empty shell; rather than cite a page not read, the page states the precaution
plainly (never leave a flame unattended; keep it clear of curtains, dupattas and bedsheets) and
notes that hotels normally prohibit open flames. Nothing on the page suggests leading anyone into a
room blindfolded, with or without a flame.

---

## Framing claims in the task prompt — checked before repeating

Per the BRIEF's final section, the prompt's framing was treated as unverified.

- *"There is genuine experimental work on lighting and affect."* **Holds**, but with a real
  qualification the page respects: the strongest work (Xu & Labroo; Knez; Baron, Rea & Daniels) is
  paywalled with no OA copy, and the readable open-access work is mostly image-based or simulated
  rather than in-situ. The page therefore says what the studies actually did — rated simulated or
  rendered rooms — and never claims a measured effect on a real couple in a real room.
- *"Over-decoration reads as a production and raises the stakes of an answer."* **No source found
  for this.** It is argued on the page as reasoning, not asserted as a finding, and it carries no
  citation. Terms tried: `staged environment expectation emotion`, `surprise anticipation physical
  environment setting`, `atmosphere perception space`. The closest real support is the img journal
  argument that atmosphere comes from enclosure and material rather than from added objects, which
  is cited for exactly what it says and nothing more.
- *"The `/proposal` page is the part of the moment that survives the room being tidied up."*
  **Stated as what it is** — a description of the product, not a measured claim. The adjacent
  numbers (2.2-hour median edit gap, 48.3% phone opens, 38.5% password-protect) are labelled
  platform-wide or sampled-on-`/apology-dashboard` in the table itself.

---

## Phase 5 — links and targeting

- Internal, 3, all from `TEMPLATE_LINKS`, all relative, all placed after value is established:
  `/proposal` (mandatory, in "Which room, and for how long"), `/templates` and `/love-gf` (both in
  the objection block, where the alternative is argued).
- `templateUrls`: `/proposal`, `/love-gf`. `/love-gf` is the genuine alternative — in Indian usage
  "propose" usually means asking someone to be your girlfriend, so the marriage template is the
  wrong one for much of this traffic, and the page says so.
- Outbound: 5, one per source, in the Sources H2 and inline where the fact sits.
- `structuredData`: an `ItemList` mirroring the seven H3s in order, plus an `@id`-matched
  enrichment block on `<canonicalURL>#post` carrying `citation` (all five sources), `about`
  (Marriage proposal, Q1057944) and `mentions` (Environmental psychology Q618752, Interior design
  Q179232, Colour temperature Q327408). All QIDs verified against the Wikipedia API on 2026-09-24.

---

## Honest assessment

The citable thing here is the pair of numbers no competitor prints: **set-up time and reversal
time** for each setup, plus a first-party column on what a shareable page does that a room cannot.
The lighting section is the only one in the visible result set that names a colour temperature and
an illuminance from a study rather than saying "set the mood". Against that: the incumbents are
decoration vendors with commercial intent and transactional pages, this domain's authority is far
below theirs, and three of the five sources were read at abstract level. Ranking is months of work
and is not predicted here.

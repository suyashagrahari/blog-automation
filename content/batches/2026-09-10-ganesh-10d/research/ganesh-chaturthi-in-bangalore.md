# Research brief — `ganesh chaturthi celebration in bangalore`

- **Slug:** `ganesh-chaturthi-in-bangalore`
- **Batch:** `2026-09-10-ganesh-10d` (Ganesh Chaturthi wave 4)
- **Gate against:** `content/batches/2026-09-09-ganesh-10b/blogs/lalbaugcha-raja-mumbai.json` (keyword `lalbaugcha raja`)
- **Also read in full before drafting:** `content/batches/2026-09-09-ganesh-10b/blogs/ganesh-chaturthi-wishes-in-kannada.json` (the Kannada language lane)
- **Written:** 2026-09-10
- **Status:** GATE CLEARED — 0 shared top-10 results. Post written.

---

## Tool limitation, recorded up front

`WebSearch` in this harness is **US-locale only** — there is no `gl=in` parameter and
no way to request an India-localised result set. Every wave-3 post records this; it
bites this keyword **harder than most**. `ganesh chaturthi celebration in bangalore`
is a city-intent, India-intent query: the real Bengaluru SERP will be reshaped by a
local pack, Kannada-language results, Karnataka news carousels and personalisation
that a US-locale measurement cannot see at all. The measured SERP below is therefore
directional evidence about *publisher types and page shapes*, and weak evidence about
*ranking positions*. The cannibalisation count is safe anyway — it came back **0**,
not 2, so no locale correction plausibly pushes it to 3.

---

## Phase 0 — data gate

`content/facts.md` regenerated **2026-09-09**. `npm run facts` was **not** re-run
(blocked by the machine's command classifier, and per BRIEF §1 re-running it would
re-date every line and invalidate 133 `factsUsed` entries across the 25 posts already
written).

Relevant facts, byte-verbatim, at least 2 usable inside the first 150 words:

1. `3,894 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-09`
2. `49.6% of shared pages are opened on a phone (22,817 of 46,005 views) — measured 2026-09-09`
3. `46,005 recorded views of shared pages — measured 2026-09-09`
4. `96.0% of started pages are actually published and shared (3,737 of 3,894) — measured 2026-09-09`
5. `42.0% of creators password-protect their page before sharing it (1,636 of 3,894) — measured 2026-09-09`
6. `No Ganesh Chaturthi page-creation data exists at all: the /happy-ganesh-chaturthi template went live 2026-09-10, four days before the festival — measured 2026-09-10`

**Gate: PASS.** Six relevant lines, well over the three required, and (1)+(2) sit
naturally in the opening paragraph.

**Deliberately NOT used:** the `## Festival lead time` Raksha Bandhan block. It is
available and legal with the two mandatory §1 disclosures, but this post's question is
"what does the Bengaluru observance actually look like", not "when do people build".
Spending 40 words of a 1,760-word budget on two disclosures about a *different
festival* would buy less than the Gowri-seam material it displaces. Recorded here so
the omission reads as a decision, not an oversight.

Fact (6) is used explicitly rather than hidden: this post states that SubhSandesh has
**no** Ganesh page-creation data, because the template went live four days before the
festival.

---

## Phase 1 — SERP analysis

### The cannibalisation gate (BRIEF §3) — counted explicitly

Both SERPs pulled 2026-09-10 via `WebSearch` (US locale — see caveat above).

**Top organic results for `ganesh chaturthi celebration in bangalore` (mine):**

| # | Domain | Article identity |
|---|---|---|
| 1 | agoda.com | "Experience Ganesh Chaturthi in Bangalore: A Festive Guide" |
| 2 | nativeplanet.com | "Explore the Spirit of Ganesh Chaturthi in Bangalore: A Guide to Top Locations" |
| 3 | muhuratam.in | "Ganesh Chaturthi 2026 in Bangalore: Muhurat & Puja Timings" |
| 4 | hindutone.com | "Bangalore Ganesh Chaturthi Celebrations: Complete Guide to Famous Mandapas… 2025" |
| 5 | tripzilla.in | "Celebrate Ganesh Chaturthi 2025 in Bengaluru's Top Spots" |
| 6 | deccanherald.com | "Ganesh fest celebrated with fervour in Karnataka" |
| 7 | deccanherald.com | "Single-window clearance for Ganesh Chaturthi celebrations in Bengaluru" |
| 8 | deccanherald.com | "Public celebration of Ganesha festival not allowed in B'luru this year" |

**Top organic results for `lalbaugcha raja` (the sibling):**

| # | Domain | Article identity |
|---|---|---|
| 1 | open.spotify.com | "Lalbaugcha Raja" — song (Dhruvan Moorthy) |
| 2 | en.wikipedia.org | "Lalbaugcha Raja" |
| 3 | gettyimages.com | "80 Lalbaugcha Raja Ganesh Idol Stock Photos" |
| 4 | instagram.com | @lalbaugcharaja |
| 5 | youtube.com | @LalbaugRaja *(excluded per §3)* |
| 6 | tripadvisor.in | "Lal Baug Cha Raja — Reviews, Photos" |
| 7 | pinterest.com | pin 433049320443411365 *(excluded per §3)* |

**Shared results, same domain AND same article identity, excluding `pinterest.com`
and `youtube.com`:**

> **0.**

Not one domain appears on both lists — the intersection is empty even *before* the
Spotify-precedent exclusions are applied. Threshold is 3. The gate clears by the
widest margin available, and it clears for a structural reason rather than by luck:
`lalbaugcha raja` is a **branded entity query** (its SERP is a song, a Wikipedia
entity, a stock-photo library and two social profiles) while
`ganesh chaturthi celebration in bangalore` is a **city-guide/informational query**
(its SERP is travel publishers, a muhurat calculator and a local newspaper). Two
different query classes; no correction for locale moves 0 to 3.

Corroboration on a second surface was not required (§3 asks for it only at exactly 2),
but the fold queries `ganesh chaturthi bangalore` and `ganesh chaturthi in bangalore`
return the same publisher set — travel guides plus Deccan Herald — with no Mumbai
mandal pages at all.

### Second, independent abort condition — substantive duplication (§3)

Read in full: `lalbaugcha-raja-mumbai.json` and `ganesh-chaturthi-wishes-in-kannada.json`.

**vs `lalbaugcha-raja-mumbai`** — no overlap of substance. That post is a queue-choice
and logistics post about one Mumbai mandal: two darshan queues, four Mumbai mandals'
closing days, walking times from Chinchpokli/Currey Road/Byculla, and a
carrying-capacity paper on Sabarimala. Its H2s are Mumbai street-level. Nothing in it
mentions Gowri, Karnataka, BBMP, lakes or Bengaluru. **Zero shared sources.**

**vs `ganesh-chaturthi-wishes-in-kannada`** — this is the real duplication risk and it
needed handling, not just noting. That post carries one H2, "Why Karnataka calls it
Gowri-Ganesha Habba", and it establishes the pairing using
`newsonair.gov.in` plus **both** Bengaluru drikpanchang pages. Mitigations actually
applied:

- **Different documents for the same framing.** I did *not* reuse the `newsonair.gov.in`
  quote, even though that URL has a legal slot left. The Karnataka observance is
  instead grounded in `utsav.gov.in` (Ministry of Tourism event record) and a
  peer-reviewed Bengaluru lake study, neither of which appears in any of the 36
  existing posts.
- **Different question.** The Kannada post answers *what do I write in Kannada*. This
  post answers *what does the observance in this city actually consist of, and what do
  I need to do on the day*. Language lane vs. city/observance lane.
- **The drikpanchang pair is reused, and that is deliberate and legal.** Both Bengaluru
  pages are marked `[date/festival reference]` in `sources`, which is the BRIEF §4
  exemption; each had one slot left in `USED-SOURCES.md`.
- **The load-bearing fact is new to the cluster.** No existing post states the
  **07:06 AM seam** (below). That is the whole reason this post exists.

**Verdict: no abort on either condition.**

### What the ranking pages actually are

The five non-news results are all the same page shape and it is worth naming, because
the gap falls straight out of it.

| Page | Shape | Direct answer position | Data + date | Karnataka-specific? | Optimising for |
|---|---|---|---|---|---|
| agoda.com | Travel-guide listicle, hotel-adjacent | After a scene-setting intro | None dated | No | Bengaluru hotel bookings |
| nativeplanet.com | "Top locations" listicle — Basavanagudi, Cubbonpete, Ulsoor, Pottery Town | Mid-page | None dated | Place names only | Travel pageviews |
| muhuratam.in | Muhurat calculator page | First screen (a time) | 2026 timings | Date only | Muhurat queries |
| hindutone.com | "Complete guide to famous mandapas… **2025**" | After intro | Stale year in the title | Venue list, undated | Festival-guide traffic |
| tripzilla.in | "10 best places… **2025**" | Mid-page | Stale year in the title | Venue list, undated | Travel pageviews |

Tone across all five: third person, hedged, no named sources, no author with a stake,
no downside anywhere. Two of the five are **year-stamped 2025** and were not refreshed.
None carries a citation.

---

## Phase 2 — gap analysis

**Table stakes** (present in nearly all five, so this post must cover them or read as
incomplete): what Ganesh Chaturthi is; that Bengaluru observes it publicly and at home;
Basavanagudi as the centre of gravity; the 2026 date; that idols get immersed at the end.

**The gap — three things none of the five do:**

1. **The Gauri–Ganesha structure.** Every one of the five is a Mumbai-shaped article
   with "Bangalore" swapped in: pandals, crowds, best places. Not one explains that
   Karnataka observes **Swarna Gauri Vrata** and **Ganesha** as a paired festival —
   which is why locals say *Gowri-Ganesha habba*, why the household work starts with
   the goddess and not the god, and why the bagina and the gauridaara exist at all.
   This is the structural difference, and it is invisible in the SERP.
2. **The 2026 seam, which nobody has noticed.** Karnataka's pairing is usually
   described as "Gauri on the preceding day, Ganesha the next". In 2026 for Bengaluru
   it is **not two days**. Verified against drikpanchang's Bengaluru pages:
   *Tadige* (Gauri) tithi **ends 07:06 AM on Mon 14 Sep 2026**; *Chaturthi* (Ganesha)
   tithi **begins 07:06 AM on Mon 14 Sep 2026**. The Pratahkala Gowri Puja Muhurat is
   **06:09–07:06 AM** and the Madhyahna Ganesha Puja Muhurat is **11:02 AM–01:28 PM** —
   the same morning, about four hours apart, the Gauri window closing at the exact
   minute the Ganesha tithi opens. Every "the day before" article is wrong for 2026.
3. **The two civic facts a Bengaluru reader actually acts on** — that installing a
   public idol runs through a BBMP single-window clearance, and that immersion happens
   at designated lakes and mobile tanks rather than wherever you like — with a real
   count attached and a named place to check the current year's list.

**Stale data in the incumbents:** two of the five carry **2025** in the title and were
never refreshed for 2026. A city post whose venue list is a year old is exactly the
kind of page a reader acts on and gets wrong.

**Unanswered questions the five raise and drop:** why a Bengaluru pandal season can be
shorter than Mumbai's 11 days; whether public celebration is guaranteed (2020's
Bengaluru ban says no); where the current year's immersion sites are published; what
the household actually needs on the morning itself.

**Fan-out sub-queries** → each became an H2 or an FAQ: *is Ganesh Chaturthi the same as
Gowri Ganesha habba* · *what is Gowri Habba* · *what date is Gowri Ganesha 2026 in
Bangalore* · *what time is Ganesh puja in Bangalore* · *where to immerse Ganesha idol
in Bangalore* · *do you need permission for a Ganesha pandal in Bengaluru* · *where is
Bengaluru Ganesh Utsava held* · *how long does Ganesh Chaturthi last in Bangalore* ·
*what is bagina* · *is PoP idol banned in Bengaluru*.

### Angle (recorded as `batchMeta.angle`)

> Wins by being the only post that gets Bengaluru's observance structurally right —
> naming the Swarna Gauri Vrata / Ganesha pairing and the verified 2026 seam where the
> Gauri window closes at 07:06 AM on Monday 14 September and the Chaturthi tithi opens
> at the same minute, against five ranking pages that are Mumbai-shaped guides with the
> city name swapped and two of them still year-stamped 2025 — and the only one that
> admits SubhSandesh has zero Ganesh page-creation data because the template went live
> 2026-09-10, four days out.

That sentence is honestly writable, which is the Phase 2 test.

---

## Phase 3 — sources

Search pattern was the phenomenon, not the keyword. Terms tried:
`Bengaluru BBMP Ganesha idol immersion tanks kalyanis`,
`Swarna Gauri Vrata Gowri Habba Karnataka bagina ritual study`,
`Ganesha festival Karnataka Gauri anthropology journal open access Bengaluru public space`,
`idol immersion lake water quality Bengaluru study heavy metals Ganesha`,
`"Bengaluru Ganesh Utsava" National College Grounds Basavanagudi`.

**Honest finding on the scholarly search:** there is **no open-access peer-reviewed
study of Swarna Gauri Vrata or of Bengaluru's public Ganesha festival as an urban
phenomenon** that I could find and open. The anthropology-of-ritual query returned
only devotional how-to blogs and a district-portal page. What *does* exist, in
quantity, is peer-reviewed **environmental** science on Bengaluru's own lakes during
immersion — which is genuinely about this city's observance rather than about India in
general, so that is the scholarly source used. Recorded as a limitation in the audit.

| # | URL | What it verifies | Published | Tests |
|---|---|---|---|---|
| 1 | `cwejournal.org/vol14no1/effect-of-idol-immersion-activities-on-the-water-quality-of-urban-lakes-in-bengaluru--karnataka` | Nagavara + Ulsoor lakes, Bengaluru, sampled before and after immersion. Ulsoor: Pb 0.0016 → 0.0062 ppm at 30 days; nitrate 1.51 → 4.7 ppm at 14 days; COD 118.5 → 190.7 mg/L. Authors recommend unpainted clay idols, organic dyes, a PoP ban, and composting the flowers and leaves. CC BY 4.0, full text read. | 2019-03-18 | subject ✓ scholarly ✓ swap ✓ |
| 2 | `utsav.gov.in/view-event/bengaluru-ganesh-utsav-1` | Ministry of Tourism event record for Bengaluru Ganesh Utsava: held at **APS College Grounds, Basavanagudi** by **Shree Vidyaranya Yuvaka Sangha** for about five decades; ~1 million people over an 11-day cultural programme; **free entry**. (Record describes the 59th edition.) | undated portal record — `datePublished` omitted | subject ✓ swap ✓ |
| 3 | `thehansindia.com/news/cities/bengaluru/bbmp-identifies-462-moving-tankers-41-lakes-for-ganesh-idol-immersion-905126` | BBMP arranged **462 moving tankers and 41 lakes** for idol immersion; immersion sites published via a **QR code**; police, barricades, fire brigade, BESCOM, lighting, swimmers, loudspeakers, NDRF, ambulances and doctors deployed at lakes and kalyanis. | 2024-09-07 | subject ✓ swap ✓ |
| 4 | `deccanherald.com/india/karnataka/bengaluru/single-window-clearance-for-ganesh-chaturthi-celebrations-in-bengaluru-2670160` | Bengaluru runs a **single-window clearance** for Ganesh Chaturthi: each office includes BBMP, Bescom, police and fire-department representatives, covering everything "from erecting pandals to carrying out processions". Article body is behind an ad-lite gate; **only the headline and standfirst were readable**, and only those are cited. | 2023-09-01 | subject ✓ swap ✓ |
| 5 | `drikpanchang.com/festivals/gowri-habba/swarna-gowri-vratha-date.html?geoname-id=1277333&year=2026` | **[date/festival reference]** Gowri Habba / Swarna Gowri Vratha, Bengaluru: **Monday 14 Sep 2026**; Pratahkala Gowri Puja Muhurat **06:09–07:06 AM**; Tadige tithi begins 07:08 AM 13 Sep, **ends 07:06 AM 14 Sep 2026**. | reference — no publication date | §4 exemption |
| 6 | `drikpanchang.com/festivals/ganesh-chaturthi/ganesh-chaturthi-date-time.html?geoname-id=1277333&year=2026` | **[date/festival reference]** Ganesha Chaturthi, Bengaluru: **Monday 14 Sep 2026**; Madhyahna Ganesha Puja Muhurat **11:02 AM–01:28 PM**; Chaturthi tithi **begins 07:06 AM 14 Sep**, ends 07:44 AM 15 Sep; Ganesha Visarjan **Friday 25 Sep 2026**. | reference — no publication date | §4 exemption |

Source-cap check against `USED-SOURCES.md`: (1) (2) (3) are **new to the cluster** —
`cwejournal.org`, `utsav.gov.in` and `thehansindia.com` appear in none of the 36
existing posts. (4) `deccanherald.com` is at 1 post, so this is its 2nd — legal. (5)
and (6) each had exactly one slot left and are both marked `[date/festival reference]`,
which is what activates the §4 exemption for `drikpanchang.com`'s 18-post domain count.
No URL exceeds 2 uses.

Deliberately declined: `newsonair.gov.in` (legal, but it is the Kannada sibling's
document for the same claim — see the duplication mitigation above);
`bengaluruurban.nic.in/en/festival/gowri-ganesh/` (**certificate expired**,
`CERT_HAS_EXPIRED` — I will not cite a page a reader's browser will block);
`karnataka.com`, `hindutone.com`, `tripzilla.in`, `agoda.com`, `nativeplanet.com`,
`hindupad.com`, `99pandit.com` (competitors or content farms — BRIEF §4 / `competitors.md`);
`researchgate.net` and `academia.edu` mirrors (prefer the publisher of record).

Wikipedia: **0 body links.** The `en.wikipedia.org` domain is past its cap at 6 posts,
so it appears only as `sameAs` grounding inside `structuredData`, which
`structured-data.md` explicitly does not count against the body budget.

---

## The venue constraint — what was listed and how it was verified

The assignment's hard constraint: no pandals, venues or 2026 event details that cannot
be verified from a citable source.

**Exactly one venue is named:** *APS College Grounds, Basavanagudi*, with the organiser
*Shree Vidyaranya Yuvaka Sangha* — both taken from the Ministry of Tourism's own event
record (source 2), not from a travel listicle.

**Everything else was deliberately left out**, including the Basavanagudi
Dodda Ganapathi / Bull Temple, Cubbonpete's Avenue Road pandals, Ulsoor's Someshwara
temple and Pottery Town, all of which the ranking pages list freely. They may well be
accurate; I had no citable 2026 source, so they are not in the post.

**No 2026 dates, timings, ticket or programme details are given for any public event.**
The post says in plain words that the edition number, dates, grounds and immersion list
change every year, and names where to check: the organiser's own announcement and
BBMP's Ganesha portal / QR listing for the current year. The one BBMP count that is
given (462 tankers, 41 lakes) is explicitly attributed to **2024** rather than
presented as 2026's arrangement.

The stated reason is in the body: two of the five ranking pages are still titled 2025.
A venue list is the one part of a city festival page a reader acts on physically, and a
wrong one costs them a trip.

---

## Phase 4–5 notes

- Body target **1,650–1,760** words by plain whitespace split, **including** the §0
  social block (46 words). BRIEF §2: the band is 1,500–1,800 but wave 3 wrote to the
  ceiling and 24 of 25 posts went over once the social block was added.
- Measured only with
  `python3 -c "import json,sys;print(len(json.load(open(sys.argv[1]))['article']['contentMarkdown'].split()))"`.
  `wordCount()` in `app/lib/batches.ts` was not used — it reads 20–50 words high.
- §0 social block pasted **verbatim**, immediately before `## Sources`. Its two URLs are
  **not** in `batchMeta.sources` and are **not** counted toward the source quota.
- FAQs: **10**, in `article.faqs` and the `structuredData` FAQPage only. None in
  `contentMarkdown`.
- Internal links, all absolute (the verifier's relative regex cannot match a two-segment
  path): `https://subhsandesh.in/happy-ganesh-chaturthi` (mandatory, in the body),
  `https://subhsandesh.in/guides/happy-ganesh-chaturthi` (body reference).
- `batchMeta.templateUrls` = `["/happy-ganesh-chaturthi"]`. `categorySlug` =
  `indian-festivals`.
- Marker words unique to this keyword, so a crossed-over draft would be detectable:
  **Tadige**, **Nagavara**, **bagina**, **gauridaara**, **kalyani**.

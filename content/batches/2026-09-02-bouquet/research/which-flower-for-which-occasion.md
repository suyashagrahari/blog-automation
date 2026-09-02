# Research brief — `which flower for which occasion`

- **Slug**: `which-flower-for-which-occasion`
- **Category**: `modern-romance`
- **Timing**: evergreen, no year-stamp
- **Facts read from**: `content/facts.md`, regeneration dated **2026-09-02** (17 facts, pricing block empty)
- **Batch**: `2026-09-02-bouquet`

---

## Phase 1 — SERP analysis (what was actually found)

The assignment noted the SERP had **not** been independently verified and that the 2/10-weak score was a
pattern estimate from sibling flower SERPs. It has now been verified in a live browser against
Google with `gl=in&hl=en&num=20`. **The estimate was wrong in the site's favour.**

### Exact-phrase check — `"which flower for which occasion"`

Almost nobody targets the exact phrase. The quoted query returns a Georgian florist journal
(`amelie.ge`), a French florist shop page (`aquarelle.com`), a US preserved-rose retailer
(`nordblooms.com`), Lemon8 and Instagram posts, and a French florist-marketing SaaS page. Google
then reports that it "omitted some entries very similar to the 9 already displayed". **No Indian
site and no flower-meaning specialist appears on the exact phrase at all.**

### Unquoted head query — `which flower for which occasion` (gl=in)

| # | Page | Site type | Format | Cultural/Indian framing | "Avoid" content |
|---|---|---|---|---|---|
| 1 | The Best Flowers For Different Occasions (14 Jul 2025) | `odealarose.com` — US florist retailer | Occasion listicle, "Flower Etiquette" hub | None | None |
| 2 | What Flowers to Gift for Different Occasions? | `fnp.com` — Ferns N Petals, **direct competitor** | ~2,330 words, H2/H3 per occasion, **no table, no JSON-LD, no FAQ**; "puja" ×1, "chrysanthemum" ×1, "funeral" ×3 (sympathy section only) | Nominal | None |
| 3 | Which Flowers Say What? Meanings by Colour and Occasion (11 Nov 2025) | `blacktulipflowers.in` — Indian florist | Colour→meaning→occasion blocks | Indian domain, **Western framing lifted** ("Occasions: sympathy, weddings, graduations") | None |
| 4 | 10 Best Flowers to Gift to Your Girlfriend (31 Jul 2025) | `interflora.in` — **listed competitor** | Ranked list of 10 blooms | Minimal | None |
| 5 | How to Choose Flowers That Feel Right for the Occasion (3 Jun 2026) | `figandbloom.com` — AU florist | Mood-led prose ("if the answer is joy…") | None | None |
| 6 | Top 10 Flowers for Every Occasion (18 Dec 2025) | `davinciflower.com` — florist | Ranked list | None | None |
| 7 | Which Flowers to Give — Perfect Blooms for Every Occasion | `plantsandflowersfoundationholland.org` — industry body | Occasion hub | None | None |
| 8 | How to Choose the Right Flowers for Special Occasions (16 Mar 2026) | `botanicpossessions.com` — small florist | Three-factor framework (meaning / mood / personality) | None | None |

No AI Overview rendered on either query. A "People also ask" block carried: *What flowers to give on
what occasion? / In which occasions are flowers used? / Which flower represents which month? / Which
is the luckiest flower?*

### `which flower for which occasion in india` (gl=in)

**Ten out of ten results are florist retailers**: `interflora.in`, `getflowersdaily.com`,
`nikkiflower.com`, `floweraura.com`, `blacktulipflowers.in` (×2), `floraindia.com`, `gulmahal.in`,
`phoolwala.com`. Not one editorial page. Not one page naming a flower to avoid.

### Key finding — the door is open, not closed

The assignment asked whether the SERP is owned by dedicated flower-meaning specialists
(`petalrepublic`, `flowermeaning.com`, `theflowerexpert`, `foliagefriend`) — which would be a closed
door. **It is not.** Zero specialists rank on either query. This is the brief's *retailer-owned
editorial vacuum* category, not the *specialist-owned closed door* category. Nobody answers the
question; they sell against it.

### Where the "avoid" content actually lives

A separate probe (`which flowers not to gift in india marigold chrysanthemum avoid`) shows the
negative half exists, but only as global florist "cultural guide" listicles — `saiflower.com`,
`hanumanthandicraft.com`, `petalandpoem.com`, `jubilantfields.sg`, `bloomboxhk.com`,
`euroflorist.dk`, `flowerscolumbus.com`, `thursd.com`, `getflowersdaily.com`. **None of them ranks
for the target keyword**, and every one of them repeats the same unsourced generalisations ("white
flowers are associated with funerals in India", "avoid frangipani"). That is both the gap and the
trap.

### Fetch limitations (recorded, not treated as absence)

`WebSearch` was exhausted (200/200) and `WebFetch` unavailable. SERPs were established through the
user's live browser. Bing's HTML and RSS endpoints geo-resolved to US datacentre locations
(Escondido CA, Seattle WA) and broad-matched to generic "flower delivery" packs — unusable.
DuckDuckGo HTML and Lite both returned HTTP 202 anomaly pages; Mojeek, Startpage and Ecosia
returned block pages. Of the top 5 pages, only `fnp.com` could be fetched in full; the other four
guessed URLs 404'd (the SERP shows truncated paths), so their word counts and schema are recorded
from SERP snippets and titles only. **A failed fetch is not evidence of absence.**

---

## Phase 2 — Gap analysis

**Table stakes** (all 8 pages carry these, so the post must too): birthday, anniversary/romance,
sympathy, congratulations; a rose-colour note; per-occasion structure.

**The gap** — three things nobody on this SERP does:

1. **A decision rule instead of a chart.** Every page hands over a mapping to memorise. None gives a
   test you can apply to a bloom you have never seen.
2. **The negative half, per occasion.** Not one ranking page names a flower to avoid for a given
   occasion. The pages that do exist are global "cultural guides" that do not rank here.
3. **Ritual-versus-gift as the operative distinction.** Nobody notes that India's floriculture is
   overwhelmingly a *loose-flower* economy, which is precisely why a Victorian occasion chart
   mis-fires here.

**Stale / unsupported data on the SERP**: the recurring "white flowers mean death in India" and
"avoid frangipani" claims are stated with no source on every page that makes them.

**Unanswered questions the pages raise and drop**: how many stems; what to do at distance; whether a
flower is even the right object; and what a marigold garland means when handed to a person rather
than hung at a door.

**Fan-out sub-queries → H2/H3 map**
- *What does the question mean?* → H2 "What the question is really asking"
- *How do I decide without a chart?* → H2 "The two-question rule that replaces the chart"
- *Which flower for a birthday / anniversary / hospital / apology / congratulations / festival?* →
  six H3s under H2 "Occasion by occasion"
- *Which flowers should I avoid in India? Are white flowers bad luck? Is chrysanthemum a funeral
  flower?* → H2 "The Indian flower taboos you should not repeat"
- *Is a flower even right? What if we are in different cities?* → H2 "When a physical bouquet, or no
  flower at all, wins"

**Angle** (recorded as `batchMeta.angle`): wins by being the only post that turns the occasion→bloom
question into a two-question rule and names the misfire for each occasion in an Indian context,
grounded in India's 2,152-vs-828-thousand-tonne loose-to-cut flower split and `/bouquet-gf`'s own
share of 795 pages, 23.4% of all 3,394 created.

---

## Duplication control — 103 live flower/bouquet posts

Read before drafting: `meaning-of-flowers-in-a-bouquet` and `flower-meaning-chart` are meanings
charts; the ~25 Western meaning posts (`flower-meanings`, `language-of-flowers`,
`flowers-that-mean-love`, `birth-month-flowers-and-meanings` …) cover symbolism; the per-occasion
product pages (`birthday-flower-bouquet-online`, `anniversary-flowers-online-free`,
`sorry-flowers-online`, `get-well-soon-flowers-online`, `mothers-day-virtual-bouquet` …) cover
single occasions.

This post is neither: it is a **cross-occasion decision rule plus a negative half**. It contains no
colour-meaning table and no per-occasion product pitch.

**Sibling separation.** `flowers-to-propose-a-girl` (same batch) has H3s named *Marigold (genda)*,
*Chrysanthemum (guldaudi, sevanti)* and *Loose white jasmine and tuberose* — a per-flower structure
for a single occasion. This post therefore organises the negative half **by occasion, not by
flower**, and shares zero H3 headings and zero source URLs or domains with it.
`jasmine-flower-meaning` is one flower's meaning; jasmine appears here only inside the
white-flower-taboo discussion.

---

## Phase 3 — Sources

Route used: **Crossref → Unpaywall → publisher/repository**, as instructed. OpenAlex, CORE and
Semantic Scholar were not needed. DOAJ's article API returned `total=0` for every ethnobotany and
floriculture query attempted (its `/search/articles/{q}` endpoint answered correctly for a
single-term sanity check, so the zeroes are a query-syntax limit, not evidence of absence).

Five sources. **All five pass the subject test. Zero generic context statistics.** All five are
peer-reviewed and open access; none is paywalled.

| # | Source | Domain | Date | Access | Read | Subject test |
|---|---|---|---|---|---|---|
| 1 | Panda, S. et al., "Production and Marketing of Marigold in Gajapati District, Odisha, India: Challenges and Opportunities", *Plant Archives* 22(2) | `plantarchives.org` | 2022 (no exact publication date printed; receipt 17-05-2022, acceptance 12-09-2022) | Open, PDF | **Full text** | Indian floriculture output and marigold's occasion use |
| 2 | Thakur, S., Jamwal, R., Negi, S., "Ethnobotanical survey of plants used in magico-religious practices in Kullu district of Himachal Pradesh, India", *Ethnobotany Research and Applications* | `ethnobotanyjournal.org` | 2023-03-25 | Gold OA | **Abstract only** | Ritual use of plants and flowers in India |
| 3 | Khare, S.M., Pawar, S., Patil, D.A., "Plants of Temples and Religious Places in Khandesh Region (Maharashtra): An Ethnobotanical Perspective", *Plantae Scientia* 4(4–5) | `plantaescientia.com` | 2021-09-16 | Gold OA, CC BY | **Full text** | Temple and religious plant use in India |
| 4 | "Evaluation of chrysanthemum genotypes (Dendranthema grandiflora) for loose flower production", *International Journal of Research in Agronomy* | `agronomyjournals.com` | 2024-09-01 | Bronze OA | **Abstract only** | Indian floriculture / chrysanthemum as a loose flower |
| 5 | "Relationship Type and Gift-giving in Mobile Commerce: Psychological Costs of Thoughtfulness and Conformity to Social Norms", *Journal of Channel and Retailing* 30(3):103–138 | `e-jcr.org` | 2025-07-01 | Gold OA, CC BY-NC-SA | **Abstract only** | Gift-giving behaviour and delivery medium |

Verified facts, as stated by each source:

1. "during 2020-21 the area under floriculture production in India was 322 thousand hectares with the
   production of 2152 thousand tones of loose flowers and 828 thousand tones of cut flowers"
   (attributed by the paper to the National Horticulture Database / APEDA); and marigold
   "extensively used for cultural and social occasions as loose flowers or as garlands… used as
   garland to god in various ceremonies, occasion's offerings".
2. "75 species under 46 families, used for Magico-religious beliefs"; "Most utilized parts were
   flowers, whole plant, leaves, seeds, followed by fruits."
3. "Total 28 species belonging to 27 genera and 21 angiospermic families… touching four aspects viz.,
   sacredness, miscellaneous uses, cosmetics and medicinal utilities."
4. "Twenty-five genotypes of chrysanthemum were evaluated for loose flower yield under open field
   conditions… during the year 2023-24."
5. Mobile gifting "triggers concerns related to perceived thoughtfulness and social norm
   conformity"; effects "vary depending on the relationship between the giver and the
   recipient—specifically, romantic partners, close friends, or casual acquaintances."

**Cap check.** No source URL or domain appears in `USED-SOURCES.md` (618 URLs / 373 domains checked
programmatically) and none appears in any sibling file in this batch. Every closed domain was
avoided, including the additional ceilings named in the assignment (`doiserbia.nb.rs`,
`icesi.edu.co`, `un.org`). `doi.org` was used only as a resolver during research and does not appear
as a cited URL. **No cap breach suspected, so nothing to escalate.**

**Swap-test failure, recorded not patched.** Source 1's loose-vs-cut tonnage could sit unchanged in
another bouquet post in this batch. It is load-bearing here — it is the evidence for the ritual/gift
distinction that the whole post rests on — so it is kept and the checklist item is failed honestly.
Per the brief, nothing was dropped or swapped unilaterally.

**Rejected candidates** (recorded so the search is not repeated): `link.springer.com`
(`10.1007/s11135-022-01347-3`, "Rise of marigold floriculture") — closed domain and closed access;
`journals.sagepub.com` (`10.1177/00302228241248863`, Bhil funeral rituals) — closed domain;
`journalarja.com` and `journalijecc.com` marigold-marketing papers — Cloudflare bot challenge, not
bypassed; `smujo.id` Bhutan socio-religious ethnobotany — already used by a sibling and about Bhutan,
not India; `10.52783/eel.v13i4.663` (cut-flower transport barriers in India) — journal quality not
established.

---

## Cultural claims that could NOT be verified

Named explicitly because getting these wrong is the main way this post would embarrass the site.
All three are handled in the body as open questions, not assertions.

1. **"White flowers mean death in India."** No peer-reviewed source found stating this as a general
   Indian rule. Searched: funerary flower custom South Asia; plants used in death rituals / last
   rites / cremation ethnobotany; life-cycle ritual ethnobotany India; `Nerium`/`Calotropis`/
   `Plumeria` funeral use India. What *is* established: white jasmine and tuberose are wedding and
   hair flowers across much of India, and white is worn in mourning in some regions and communities.
   The post states the variation and declines the blanket rule.
2. **"Chrysanthemum is a death flower."** The absence of an Indian taboo cannot be sourced directly.
   What is sourced is that chrysanthemum is bred and trialled as a mainstream Indian loose-flower
   crop (source 4). The post presents the funeral reading as European/East Asian in origin — that
   attribution is editorial inference from the sourced Indian cultivation evidence, not a sourced
   claim in itself.
3. **Marigold as a funeral flower.** Not asserted anywhere in the post. Only its documented role —
   garlands for deities in ceremonies and offerings (source 1) — is claimed. Its funerary use in
   India was not sourceable.
4. Also *not* asserted, for lack of a source: frangipani/champa taboos, and any deity-specific
   prohibition (e.g. which flower may not be offered to which god).

---

## Phase 5 — Internal links and targeting

- `https://subhsandesh.in/bouquet-gf` — closing the "Occasion by occasion" H2, after the six
  occasions establish why you would want it. Anchor: "hand-tie a digital bouquet from 12 blooms".
- `https://subhsandesh.in/love-gf` — in "When a physical bouquet… wins", after the honest limits.
  Anchor: "private \"I love you\" page".
- `https://subhsandesh.in/darling` — same section. Anchor: "darker, more dramatic romantic version".
- **No fourth internal link.** Three of a 2–4 budget, all mandatory, none in the opening paragraph.
- `categorySlug`: `modern-romance` (this is a meaning/decision post, not a gift post).
- `templateUrls`: `/bouquet-gf`, `/love-gf`, `/darling`.
- `structuredData`: `ItemList` mirroring the six H3s in body order, plus an `@id`-matched
  `BlogPosting` enrichment block on `<canonicalURL>#post` carrying `citation` (5 entries, one per
  source), one `about` and four `mentions`. Every `sameAs` verified against the Wikipedia API with
  its Wikidata QID paired: Flower bouquet Q1187930, Tagetes Q147552, Chrysanthemum Q59882, Jasminum
  sambac Q1356614, Puja (Hinduism) Q10937578.

---

## Phase 6 — Audit summary

- **1,774 words** in `contentMarkdown`, plain whitespace split, FAQs excluded.
- **11 FAQs**, in `article.faqs` only. No FAQ heading in the body.
- **48 passed / 2 failed**, `passed ∩ failed = ∅`, `|passed| + |failed| = 50`, every string
  byte-verbatim against `publish-checklist.md` including `**bold**` markers (verified
  programmatically).

The two known-defect items were counted rather than assumed:

- `metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)` — **PASSES.**
  The keyword is exactly five words and opens the title, so it occupies words one to five.
  metaTitle is 56 characters.
- `Slug short, hyphenated, lowercase, no stop words` — **FAILS.** The slug carries "for" and "which"
  (twice), and it must, because it is the pre-verified exact-match keyword required by
  `Target keyword in H1, metaTitle, slug, and first 100 words`.

The second failure is the swap test on source 1, described above.

**Pricing gap, recorded.** The pricing block in `facts.md` is empty. The post makes no cost claim in
the body, the FAQs, the metaDescription, the table or the takeaways, and does not use "free" as a
synonym for "no delivery charge". Consequence: the "how much should I spend on flowers for X" half
of this query is left unanswered, and a competitor with real price ranges can answer it.

**Honest assessment of demand.** This is the weakest-demand keyword in the batch — `prefix_hits` 7x,
estimated volume band under 300/mo. The compensating facts are that the SERP turned out to be a
retailer vacuum rather than a specialist lock-out, that the exact phrase is essentially unclaimed,
and that the product genuinely answers the question by being used. Eight established florist domains
outrank the site on authority and eight of ten results are commercial, which Google may keep
favouring for a query it reads as transactional. No ranking prediction is made.

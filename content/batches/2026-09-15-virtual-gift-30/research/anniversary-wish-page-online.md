# Research brief — `anniversary-wish-page-online`

- **Batch:** `2026-09-15-virtual-gift-30`, WAVE 2 (replacement row for the aborted
  `long distance relationship gift website`)
- **Primary keyword:** anniversary wish page online
- **Secondaries:** online anniversary wish page · anniversary wishes page for couple
- **Market:** India. Evergreen. Category `digital-gifts-romance`.
- **Templates assigned:** `/recharge`, `/dedication`, `/templates` — all three used as assigned, no swap.

---

## Phase 1 — SERP

**Measured 2026-09-16 via Brave (`scripts/serp.mjs`). Not in `SERPS-WAVE2.md`; recorded here.**
`WebSearch` and `WebFetch` were not used (exhausted / blocked). DuckDuckGo
(`scripts/serp-ddg.mjs`) was throttling this session while Brave worked — the
reverse of the position described in `BRIEF-WAVE2.md` §0, and no extra query was
needed.

| # | Result | Page shape |
|---|---|---|
| 1 | thegreeter.in/anniversary-wishes-website | wish-page builder (competitor, do not cite) |
| 2 | wishqr.com/create | builder |
| 3 | vidday.com/en-in/generator/anniversary-wishes | group video/wish generator |
| 4 | thegreeter.in/create | builder (competitor) |
| 5 | thegreeter.in/ | builder home (competitor) |
| 6 | greetingsisland.com/cards/.../anniversary | e-card gallery |
| 7 | mynameart.com/greeting-cards/anniversary | name-on-card generator |
| 8 | canva.com/cards/templates/anniversary/ | template gallery |
| 9 | adobe.com/express/discover/wishes/wedding/anniversary | template gallery + wording |
| 10 | fnp.com/quotes/anniversary | editorial quotes list |
| 11 | weddingwire.in/wedding-tips/wedding-anniversary-wishes | editorial wishes list |
| 12 | celebrateally.com/anniversary/message | message list |
| 13 | pixeryhub.com/anniversary-wish | wish generator |
| 14 | easyprotools.com/events/anniversary-wish-card-generator/ | card generator |
| 15 | shutterfly.com/ideas/happy-anniversary-messages/ | editorial messages list |

**Gate 2: CLEAN — 0/10 transactional by page shape.** No storefront, no cart, no
product listing. The two retail brands present (`fnp.com/quotes`,
`shutterfly.com/ideas`) appear on editorial URLs, not shop pages. This is one of
the cleanest SERPs in the sixty-post batch and it is why the row was created.

**What the top results actually optimise for.** Every one of the fifteen produces
*wording* or a *card*: thegreeter, wishqr, vidday, pixeryhub and easyprotools are
generators; canva, adobe express, greetingsisland and mynameart are template
galleries; fnp, weddingwire, celebrateally and shutterfly are message lists. Word
counts on the editorial pages run long (60–150 sample wishes) with the "answer"
buried under a list. None carries usage data, none carries research, none names a
downside, and none has an author byline with a stated basis.

## Phase 2 — Gap

**Table stakes:** what an anniversary wish is; sample wordings by relationship
(wife/husband/friend/parents); short vs long wishes; adding a photo.

**The gap, and it is the whole post.** Every ranking page treats the wish as a
*text problem*. Not one of them distinguishes the wish text from the artifact the
wish text lives on. That distinction is the entire difference between a generator
and a page: a generator hands you two to six lines and leaves you to paste them
into a chat window; a wish page *is* the place they live. Nobody on this SERP
makes that claim, and it is checkable rather than rhetorical.

**Second gap: the third-party sender.** All fifteen assume the sender is inside
the couple (or is sending a card to one person). A wish page sent *to a couple* by
a friend, sibling or parent is unserved. That also keeps this post clear of both
adjacent siblings.

**Fan-out sub-queries → H2s:** what is an anniversary wish page online · is a wish
generator the same thing · what kinds of anniversary wish page exist · what should
I write on one · generator vs card vs page · what does SubhSandesh actually have ·
when is a page the wrong choice.

## Phase 2b — Cannibalisation

Screened before the row was created (`WAVE2-PLAN.json.noOverlap`): 1/10 URL
overlap with `wedding wish page online`, 2/10 with `anniversary website for wife`
(thegreeter twice). Both well under the 4+ threshold. No `nearestLive` on this row.

Both siblings were read in full before drafting. **Differentiate**, as follows:

- **`wedding-wish-page-online`** owns the *wish vs invitation* line (guest → couple
  versus couple → guests) and the wedding-etiquette material. Not restated here;
  linked once from the honest-gap section, where it supplies the parallel
  observation that all three wedding templates are invitations.
- **`anniversary-website-for-wife`** owns the marriage-anniversary framing, the
  un-surprisable-date argument, and the long-marriage retrospective. Not restated;
  linked once from the "wrong choice" section as the partner-to-partner case.
  None of its five sources is reused.
- **This post is broader than either**: an anniversary wish page for *any*
  anniversary, and explicitly including one sent to a couple by someone outside
  it. The split in one sentence: the siblings are about what one spouse builds for
  the other and what a guest sends a newly married couple; this is about where an
  anniversary wish lives at all, whoever is sending it.

## Phase 3 — Sources

Discovery: Europe PMC (**recovered this session — the §1b 503 warning is stale**),
Crossref and DOAJ, all via `ctx_execute`. OpenAlex and Semantic Scholar not
attempted (429 per §1b). `europepmc.org` used for discovery only, never cited.
Every landing page below was opened with `ctx_fetch_and_index` and the claim read
off the page before it was used.

Search terms that produced the usable set: `greeting cards`, `congratulation
messages`, `festive greeting`, `birthday wishes`, `online memorial`, `digital
commemoration`. Terms that produced nothing usable: `wedding anniversary ritual
couple`, `anniversary celebration family`, `relationship celebration`, `couple
ritual`, `relationship maintenance rituals`, `anniversary commemoration media`,
`marriage anniversary`, `temporal landmarks`, `fresh start effect`.

| # | Source | Date | What it supports | Domain count before this post |
|---|---|---|---|---|
| 1 | [Soviet Lithuanian New Year Greeting Card: Semiotics of Recto](https://www.zurnalai.vu.lt/Semiotika/article/view/30059), *Semiotika* | 2022-12-12 | Greeting text on the recto anchors the image **and** acts as a performative utterance; the performative function goes secondary when playfulness takes priority. The surface decides what the words do. | 0 |
| 2 | [The electronic greeting card as a polycode text](https://neophilology.elpub.ru/jour/article/view/531), *Neophilology* 11(3) | 2025 | The e-card fixes value meanings through well-wishes **and** visual images together, forming the media image of the occasion. Russian-language article; abstract read. | 0 |
| 3 | [Congratulation Genre in the Even Language](https://journals.rudn.ru/polylinguality/article/view/43111), *Polylinguality and Transcultural Practices* | 2024 | Congratulations built from real WhatsApp texts sort into exactly three types (brief, full, extended) with three semantic dominants (well-being, happiness, health). Full text Russian; abstract read. | 1 (different URL, → 2) |
| 4 | [How to Experience Grief Online? A Comparison of Web Memorials](https://proa.ua.pt/index.php/jdmi/article/view/23632), *Journal of Digital Media & Interaction* | 2021 | Content analysis of the interfaces of 20 online memorial systems, mapping features against users' actual goals. The one well-documented family of "a page that exists to hold what people want to say". | 0 |

**Sources considered and rejected.** `jle.hse.ru/article/view/1351` (Facebook
birthday postings) and `elt.tabrizu.ac.ir/article_17259.html` (Facebook
congratulation strategies) are both already cited by the
`birthday-wish-website-for-friend` sibling — re-citing them would put three
adjacent wish posts on one literature. `frontiersin.org`, `pmc.ncbi.nlm.nih.gov`
and `journals.plos.org` are at the domain cap. `czasopisma.uni.lodz.pl`
(Genethliacon on celebrating birthdays and anniversaries) sits at 2 and was left
for whoever needs it. `bmcpublichealth.biomedcentral.com` (#KindnessByPost realist
study — cards sent between strangers, a genuinely good fit) returned a Cloudflare
challenge and could not be verified, so it was dropped rather than cited unread.
`zhanry-rechi.sgu.ru` ("the speech genre 'wish'") is behind an Anubis bot check.
`jlc.univ-adrar.edu.dz` (Algerian greeting formulae) fails the HTTP parser from
this sandbox. `philjournal.ru` serves only a PDF that indexes as raw bytes.

**Only four sources, not five or six.** That is deliberate. Padding with a TRAI or
PIB internet-penetration figure would have failed the subject test and the swap
test simultaneously, which `BRIEF.md` §3 explicitly tells us not to do. Zero
generic context statistics are used.

**Recorded honestly as a failed checklist item:** *"No source passes the swap
test"*. Sources 1–3 are written at the level of the wish as a speech genre, not at
the level of anniversaries, so each could sit unchanged in the birthday-wish
sibling. No anniversary-specific greeting study surfaced across three APIs. Only
the argument built on them is keyword-specific.

## Phase 4–5 — Draft decisions

- **Opening pair of first-party facts, chosen to avoid the batch's tic.** Neither
  the 40.6% password figure nor the 6.2-hour edit gap opens this post. It opens on
  a pairing nothing else in the batch uses: 4,357 pages across 16 page types, and
  the top three clustered within two percentage points (25.8% / 24.6% / 23.9%) —
  which sets up the honest observation that none of the 16 is an anniversary wish
  page.
- **Templates.** `/recharge` and `/dedication` described from their
  `app/lib/prompt.ts` entries. `/recharge` is written up as what it is — a mock
  prepaid top-up with a plan grid, a payment sheet built to look real, and a
  receipt — an explicit joke whose anniversary reading is "renew for another
  twelve months", with the warning that it lands badly on anyone who wanted
  sincerity. `/templates` links once near the honest-gap close.
- **Internal links:** 3 template links from `TEMPLATE_LINKS` plus 2 blog
  cross-links (`wedding-wish-page-online`, `anniversary-website-for-wife`). Per
  `BRIEF-WAVE2.md` §3 the blog cross-links do not count toward the 2–4 template
  budget and are not a checklist failure.
- **Disclosures in body prose, not only in the audit:** the database records which
  *template* was opened, not who received it; and the `facts.md` pricing block is
  empty, so no price is quoted anywhere, including in the FAQ that asks about it.
- **Table** is 5 rows × 4 columns with a first-party column (`0 of our 16`,
  `49.0% of 49,968 views on a phone`, `40.6% of 4,357 creators`).

## Phase 6 — Audit result

49 of 50 checklist items pass. One deliberate failure, the swap test, with the
structural reasoning above. `passed ∩ failed = ∅`, `|passed| + |failed| = 50`,
asserted in the build script before the file was written. Body is 1,799 words
excluding the 11 FAQs.

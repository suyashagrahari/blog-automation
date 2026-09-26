# Research brief — `how to surprise your brother`

- **Slug:** `how-to-surprise-your-brother` (checked against Strapi 2026-09-25: `filters[slug][$eq]` returned 0 rows, free)
- **Wave:** 5, row 8 of `WAVE5-PLAN.json`
- **Market:** India. Evergreen.
- **Category:** `family-and-continuity` (changed from the row-assigned `digital-gifts-romance` on the coordinator's mid-run correction)
- **Templates:** `/court-of-love`, `/legal-notice`, `/templates` — used as assigned, no swap

---

## Phase 1 — SERP

Source: `SERPS-WAVE5.md`, section `## how to surprise your brother`. **DuckDuckGo `kl=in-en`, collected 2026-09-25 — a genuine India SERP.** Wave 4's US-served Brave caveat does not apply and is deliberately not repeated in the post. Blog-shaped: **5/10**. No ad results, no marketplace listing pages, no vendor tool pages.

| # | URL | Type | What it optimises for | Where the answer sits | Data cited |
|---|---|---|---|---|---|
| 1 | giftron.app/best/exciting-birthday-surprise-ideas-brother | Vendor blog | "birthday surprise ideas brother" listicle | After an intro | None |
| 2 | buildnectic.com/surprises/birthday-gift-ideas-for-brother | Vendor blog | gift-idea listicle | After an intro | None |
| 3 | insanelygoodgifts.com/gifts-for-brother/ | Affiliate roundup | product listing, not a how-to | Product grid | None |
| 4 | plainpaper.blog/surprise-brother-birthday-ideas | Blog | birthday surprise listicle | Mid-page | None |
| 5 | geeklane.in/blogs/gifting-ideas/... | Vendor blog | sentiment framing + product push | Buried | None |
| 6 | wikihow.com/Be-Nice-to-Your-Brother | wikiHow | sibling behaviour, not surprises | Step 1 | None |
| 7 | flambeevents.com/blogs/f/how-to-surprise-brother-on-his-birthday | Event vendor | event booking | Mid-page | None |
| 8 | wikihow.com/Surprise-Someone-on-Their-Birthday | wikiHow | generic birthday surprise | Step 1 | None |

Observations that decided the post:

1. **Every editorial result treats the query as a gift-selection problem.** Not one of the eight discusses how the gesture will be received, which is the thing the searcher is actually nervous about.
2. **Both wikiHow results are generic** — one is about being nice to a brother in general, the other about surprising *anyone* on a birthday. Neither is brother-specific.
3. **Six of eight are vendor-owned**, so their incentive is a product recommendation rather than an honest "do not do this".
4. **Zero first-party data anywhere in the set.** No page cites a study, a measurement or a number it owns.
5. None of the eight is a competitor on the `BRIEF.md` §1 / `BRIEF-WAVE2.md` §0 / `BRIEF-WAVE3.md` §1 banned lists, but all eight are competitor pages for the purposes of `references/competitors.md` — read, never cited or linked.

## Phase 2 — Gap analysis

**Table stakes** (all or most of the eight cover these): ideas broken out by budget or effort; a birthday framing; something involving photos or memories; a "make it personal" instruction.

**The gap — and it is the whole post.** Nobody in the set names the failure mode. A brother-shaped surprise fails not because the idea was bad but because the *register* was wrong: a sincere page gets screenshotted into the family group and quoted back for a decade. Affection between brothers usually travels disguised as a joke, which is why a mock summons lands where a love letter does not. Every incumbent writes as though the recipient were neutral about tone.

**Stale/absent data:** there is none to supersede — not one of the eight cites a statistic at all, which is itself the opportunity.

**Unanswered questions raised and dropped:** how to keep a secret in a house with no private rooms; what changes when the brother has moved city; whether a joke can go too far; what to do when the siblings are not getting on.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what counts as a surprise for a brother | What counts as a surprise for a brother |
| why do sibling gestures feel awkward / cringe | Why a sincere page gets mocked and a joke does not |
| brother surprise ideas | Five surprises that survive the group chat |
| how to surprise a brother at home / secretly | Surprising a brother in the same house |
| surprise for a brother living in another city | Surprising a brother who has moved city for work |
| raksha bandhan surprise for brother | Raksha Bandhan is the one day sincerity is allowed |
| when not to / what if he hates it | When a page is the wrong gift for your brother |

**Angle:** wins by being the only post that treats register as the whole problem — arguing from sibling-support and teasing research that affection between brothers travels disguised as a joke, and grounding it in SubhSandesh's own page mix, where four of the five most-created page types are named for a partner.

## Phase 3 — Sources

Route used: **Crossref → Unpaywall → OA landing page**, plus OpenAlex (which was up today and returned 200) and DOAJ for discovery. Searched the phenomenon, not the keyword. **All five are abstract-and-metadata reads — PDFs do not parse in this sandbox and this is recorded in the audit and in every `sources[].stat`.**

Terms tried: `sibling relationship quality adulthood`, `teasing prosocial function relationships`, `humour affection masculinity friendship`, `sibling communication humor closeness`, `adult sibling contact frequency geographic distance`, `banter teasing friendship bonding qualitative`, `jocular mockery disaffiliation face conversational humour`, `affection exchange theory men expressing affection sons`, `young men friendship emotional intimacy jokes qualitative`.

| # | URL | Domain | What it supports | Published |
|---|---|---|---|---|
| 1 | research.rug.nl/…/a4d5cec7 | research.rug.nl | Dutch national sample, n=6,289 / 12,578 relationships: siblings exchange more practical and less emotional support than friends; living further away positively associated with emotional support between siblings | 2007 |
| 2 | nbn-resolving.de/urn:nbn:de:bsz:352-2-gj3ukolkawb83 | nbn-resolving.de (Konstanz KOPS) | Playful teasing in all four great ape genera; attention-getting, one-sided, response-looking, repetition, escalation; prerequisites ≥13 Myr | 2024 |
| 3 | irep.ntu.ac.uk/id/eprint/49509/ | irep.ntu.ac.uk | Five focus groups, n=24: banter "accepted and expected" but produces banter fatigue; repetition harms the target | 2023-08-01 |
| 4 | research.edgehill.ac.uk/…/1aec3b09 | research.edgehill.ac.uk | n=291 estranged adults: sibling relationships "not necessarily or always life-long, significant or supportive" | 2022-03-17 |
| 5 | pure.solent.ac.uk/…/e60cbd97 | pure.solent.ac.uk | n=10 follow-up interviews: young men kept seeking emotional intimacy with male friends after university | 2017-11-02 |

- **Subject test:** all five are about siblings, teasing or male friendship. None is "about India" or "about the internet".
- **Swap test:** none survives a move to another keyword in this batch — they are specific to sibling support, teasing structure, banter limits, sibling estrangement and male friendship.
- **Generic context statistics:** zero. No PIB/TRAI/Census/MEA figure appears.
- **Caps:** none of the five domains appears in `SPENT-SOURCES.json` `domainsAtCap` or `domainsAtTwo`. **One collision to flag:** the wave-5 sister post cites source 1 as well, which puts that URL at its cap of 2 posts for this batch. Both uses are legal; the orchestrator should not add a third.
- **Wikipedia:** zero body links. The four Wikipedia/Wikidata pairs in `structuredData` are `sameAs` targets only, verified against the Wikipedia API on 2026-09-25 (Sibling Q31184, Teasing Q518090, Humour Q35874, Raksha Bandhan Q10266).

**Research gap worth recording:** no open-access study of Indian sibling practice or of Raksha Bandhan was found. `raksha bandhan sibling ritual India`, `brother sister ritual kinship north India` and `sibling relationships India adolescents` returned only book chapters behind blocked publishers (Routledge, Springer, De Gruyter), a Nepal festivals chapter, and unrelated engineering papers. The India specificity in the post is therefore carried by first-party data and by domestic detail, not by cited Indian research. That is a real finding, not a failure.

Hosts that cost a fetch and returned nothing: `utupub.fi` (403), `repositorio.unal.edu.co` (Unpaywall's record pointed at an unrelated thesis), `escholarship.org` (per brief, 403). Wiley, Springer and Royal Society landing pages were skipped without fetching, per `BRIEF.md` §10.

## Phase 0 — First-party data

`content/facts.md`, **regenerated 2026-09-24** (the brief's 2026-09-15 figures are superseded; the coordinator confirmed this mid-run). Every figure in the post was re-checked line-by-line against the current file and carries that line's own date. The one 2026-09-09 line (occasion-dated pages, 144 of 3,894) is cited with its own date.

Opening pair chosen to be distinct from siblings, which leaned on the retired 40.6% password figure and 6.2-hour edit gap: **5,199 pages across 21 page types** and **the apology dashboard at 1,396 pages, 26.9%** — the most-built page on a romance-first platform is the one for saying sorry, which is not a romantic gesture at all and sets up the register argument in the first 60 words.

**Mandatory disclosure, in body prose:** the database records which *template* was opened, never who received it. Stated once in the Phase-3 list intro, again in the comparison table, and once more in `keyTakeaways`. No count in this post proves a brother was on the other end.

**Pricing:** `## Pricing (fill in by hand)` is still empty. The post states that no price can be confirmed and links `/templates`. No priced phrase appears anywhere.

## Phase 5 — Links and templates

Template links (4, all in `TEMPLATE_LINKS`, all placed after the section that earns them):

- `/court-of-love` — described from its own `prompt.ts` entry: a trial, ten funny questions, a penguin judge, a signed stamp paper if he wins. It is a joke by design and the post says so.
- `/legal-notice` — a mock formal notice served on a person; every demand accepted or contested, seven days to comply.
- `/happy-rakshabandhan-to-brother` — in the festival section only; a body link, deliberately **not** in `templateUrls`, which stays at the three the row assigns.
- `/templates` — once, near the close, attached to the no-price sentence.

Blog cross-links (excluded from the 2–4 template count per `BRIEF-WAVE2.md` §3): `/blog/how-to-surprise-someone` and `/blog/how-to-surprise-your-sister`.

## Anti-cannibalisation

`overlapWithWritten` is 0 and `mustReadSibling` is null, but `blogs/` was grepped for the subject rather than the keyword, and the wave-5 sister post was read in full once it landed.

Two collisions found and fixed:

1. **H1.** The sister post shipped as *"How to Surprise Your Sister Without Making It Weird"*. This post's draft H1 was the identical construction. Changed to **"How to Surprise Your Brother Without Him Screenshotting It"** so the pair does not read as one template run twice.
2. **FAQ.** The sister post asks *"How do I stop our mother from telling her?"*. The draft asked *"How do I stop our parents from opening it before he does?"*. Replaced with *"He shares a phone with our parents. Is a link still a good idea?"*.

The split is stated in the body and cross-linked: the sister post is about **what siblings may say to each other**; this post is about **the wrapper that gets it past his friends**. Neither targets the other's primary keyword, and `secondaryKeywords` here are brother-only.

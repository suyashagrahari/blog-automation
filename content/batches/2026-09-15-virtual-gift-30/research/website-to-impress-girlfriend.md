# Research — `website to impress girlfriend`

Batch `2026-09-15-virtual-gift-30`, wave 2. Written 2026-09-15.

Row from `WAVE2-PLAN.json`: kw `website to impress girlfriend`; secondaries
`impress girlfriend website`, `website to impress your girlfriend`; category
`digital-gifts-romance`; templates `/proposal`, `/loveflix`, `/darling`. No
`nearestLive`. This row replaced `best surprise gift for girlfriend to impress`,
which measured 5/10 ecommerce on its India SERP and was killed at gate 2.

## Phase 1 — SERP

Not re-collected. Read from `SERPS-WAVE2.md` (`scripts/serp-ddg.mjs`, engine
`ddg-html`, region `in-en`). `serp.mjs`, WebSearch and WebFetch were not called,
per BRIEF-WAVE2 §0.

| # | result | what it is |
|---|---|---|
| 1 | myheartcraft.com/blog/cute-websites-… | competitor blog |
| 2 | justmeantforyou.com/blog/… | competitor blog |
| 3 | lovepage.io | competitor homepage |
| 4 | github.com/ritvikbhatia/LoveProject | a static webpage repo |
| 5 | yourlovepage.online | competitor homepage |
| 6 | yourlovepage.com | competitor homepage |
| 7 | yourlovepage.com/website-for-girlfriend | competitor landing page |
| 8 | github.com/topics/girlfriend | GitHub topic listing |
| 9 | weblium.com/templates/tag/girlfriend-website | builder template gallery |
| 10 | ai.mobirise.com/sites/beautiful-website-to-impress-girlfriend-… | AI-generated builder demo |

Gate 2: **clean, zero ecommerce**. Nothing cited or linked from this list —
seven of the ten are on the BRIEF competitor lists, two are code repositories and
one is a builder gallery.

**The gap.** Every result answers *how to get a website*. None answers the
question in the query, which is about a person: *will this actually impress her?*
Four of the ten are the sellers' own homepages and have a commercial reason to
say yes. The two GitHub entries answer with "write the HTML yourself", which is
the route whose effort is least visible to the recipient.

## Phase 2 — Gap and angle

**Angle.** Wins by being the only post that answers *will a website actually
impress her*, rather than *which website should I make* — pricing the gesture by
how it is received, and naming the three situations where it backfires.

Fan-out sub-queries the H2s map to:

1. what does "impress" even mean for a digital gift → H2 1
2. what makes it land / what is she reacting to → H2 2
3. will I see her reaction → H2 3
4. which page should I build → H2 4 (three H3s)
5. should I code it myself / use a builder → H2 5 (table)
6. when should I not do this → H2 6
7. is "impress" the right goal → H2 7

**Separation from the four siblings** (all read before drafting):

| sibling | its question | mine |
|---|---|---|
| `birthday-website-for-girlfriend` | which of four routes, against a deadline | reception, no deadline |
| `romantic-website-for-girlfriend` | what content goes on the page | whether the page lands at all |
| `cute-website-for-girlfriend` | cute vs romantic as a format choice | neither format; the effort-and-reception question |
| `love-letter-website-for-girlfriend` | which interaction format gets reread | why the interaction is not what she is scoring |

Differentiated, not aborted. All four pick a *format*; this post assumes the
format decision is already made and answers what happens after you send it. The
only deliberate overlap is the honest "when this is the wrong choice" section
every post in the cluster carries, and mine is the only one where that material
is the spine rather than a closing caveat.

## Phase 3 — Sources

WebSearch/WebFetch unavailable. Discovery ran through Europe PMC, Crossref, DOAJ
and OpenAIRE per BRIEF-WAVE2 §1b. OpenAIRE's JSON shape defeated two parsing
attempts and produced nothing usable; Crossref and DOAJ produced the leads that
stuck. Two `serp-ddg.mjs` calls were spent locating open copies of two specific
papers (both failed to yield an open full text; the RePEc record below is the
salvage).

Search terms that produced nothing usable, recorded so the next agent does not
repeat them: `effort heuristic perceived value`, `undervaluing gratitude
expressers recipients`, `surprise of reaching out recipients appreciation`,
`handmade effect love got to do with it`, `thoughtfulness gift` (DOAJ, 1 result,
unrelated), `smartphone mediated romance India young adults courtship` (Europe
PMC, 0 results).

Blocked hosts confirmed again this session: `nature.com`, `link.springer.com`,
`onlinelibrary.wiley.com`, `journals.sagepub.com`, `mdpi.com`,
`tandfonline.com`, `emerald.com`, `psycnet.apa.org`, `jstor.org`. All returned a
bot challenge of identical length.

### Cited (4)

1. **deSouza et al. (2021), "The Gratitude Opportunity Space"**, *Social
   Interaction* 4(1), 24 Feb 2021 —
   `https://tidsskrift.dk/socialinteraction/article/view/122437`.
   Open access, peer-reviewed, conversation-analytic. Landing page fetched and
   the abstract read. Used for: gratitude is timed to the object pass itself
   (pre-delivery, on-delivery, post-delivery positions), recalibrated for remote
   offers and gift giving. Applied to the one thing no competitor page mentions
   — a link has no shared handover, so the thanks arrives detached.

2. **Givi (2021), "When a gift exchange isn't an exchange"**, *Journal of
   Business Research* 129, 393–405 —
   `https://ideas.repec.org/a/eee/jbrese/v129y2021icp393-405.html`.
   **Abstract only; full text paywalled at Elsevier and recorded as such in the
   body and the audit.** Used for: givers severely underestimate how
   uncomfortable recipients feel when they cannot reciprocate, and give more
   often than recipients prefer when that is known in advance. This is the
   evidence behind "do not send this three weeks in".

3. **Aicken et al. (2025), Paired app evaluation**, *JMIR mHealth and uHealth*
   13:e55433, 14 Apr 2025 — `https://openaccess.city.ac.uk/id/eprint/35125/`.
   Open access, peer-reviewed, CC BY. Landing page fetched, full abstract read.
   Used for: n=440 longitudinal / n=745 survey / n=20 interviews; relationship
   quality improved with duration and frequency of use, and the reported
   mechanism was prompted and habituated conversation, with a neutral prompt
   making hard topics easier to raise. This is the strongest honest statement
   available that a digital prompt does something — and it says *conversation*,
   not *admiration*, which is the post's thesis.

4. **Gostič (2023), "Mementos of a Love Faraway"**, *Dve domovini / Two
   Homelands* 57, 27 Feb 2023 —
   `https://ojs.zrc-sazu.si/twohomelands/article/view/11767`.
   Open access, peer-reviewed. Landing page fetched; abstract served in
   Slovenian and read in Slovenian. Used for: interviews with people in
   long-distance relationships in Europe describe recognising the sentimental
   value of everyday objects as a practice that builds an absent partner's
   "abstract presence". Applied to the "she wanted something she can hold" case.

All four dates confirmed against Crossref (`issued` / `published-online`).

### Cap check before citing

`SPENT-SOURCES.json` plus all 40 sibling files in `blogs/` were read first. None
of the four domains appears in either. Deliberately avoided: `europepmc.org`,
`doi.org`, `en.wikipedia.org`, `cyberpsychology.eu`, `sciencedaily.com`,
`pib.gov.in` (all at 2 with one contested slot), and the six domains already at
3. `hbs.edu` at 2/2 was not touched. Also avoided a set of findings already
spent by siblings: Flynn & Adams and Yang & Urminsky (`what-can-i-gift-my-
girlfriend`), the "Surprise of Reaching Out" reach-out finding
(`virtual-gift-for-boyfriend-birthday`), and the IKEA effect
(`cute-website-for-girlfriend`).

`jwsps.alzahra.ac.ir` and `juliangivi.wixsite.com` were both found already cached
in the sandbox from the last hour, i.e. a sibling agent is working them; neither
is cited here.

## Phase 4–5 — Draft decisions

**Zero generic context statistics.** No PIB, TRAI, Census or MEA figure appears.
Nothing in this post rests on how many Indians are online.

**Templates.** Assigned three used as assigned, no swaps. Descriptions taken from
`TEMPLATE_LINKS` in `app/lib/prompt.ts`: `/proposal` is a proposal scrapbook
ending in a YES button that grows when dodged; `/loveflix` is a streaming service
with one show on it and a branching episode; `/darling` is the dark, dramatic
romantic page. `/proposal` is described with an explicit warning that it is a
real proposal page and the wrong thing to send early — describing it earnestly as
a generic romantic gesture would have been the failure mode BRIEF-WAVE2 §2 warns
about.

**Internal links.** Four template links (`/proposal`, `/loveflix`, `/darling`,
`/templates`), each placed after the section that earns it, plus one blog
cross-link to `/blog/website-to-say-sorry-to-girlfriend` in the "middle of a
fight" case. That page is one of the three places subhsandesh.in already ranks
(#7 for `apology website for girlfriend`) and the cross-link is excluded from the
2–4 template count per BRIEF-WAVE2 §3. Both live URLs HTTP-checked (200); the
post's own slug checked and free (404).

**The inconvenient numbers, stated in the body rather than hidden:** 11.5 average
views per page (this does not travel), the 5.9% of started pages that never get
sent, and "not measurable from our data" in two cells of the comparison table.

**No cost claim anywhere.** The `facts.md` pricing block is still empty, so the
post prices nothing — not the product, not the alternatives. A first draft asked
"can I make one for free?" in the FAQs; `verify-batch.mjs` flagged it as a hard
cost claim and the question was replaced with one about sending a single page
versus a series. The comparison table's builder row says "a recurring builder
plan" rather than naming a figure for the same reason.

## Phase 6 — Audit

50 checklist items, 48 passed, 2 failed, disjoint. Both failures are honest and
structural:

- **swap test** — Gostič 2023 could sit in a long-distance row. Kept because it
  carries the single most important place this format loses.
- **ItemList** — deliberately omitted. The three H3s are three registers, not a
  ranking, and asserting an order in schema that the body refuses to assert in
  prose would be marking up something that is not on the page.

Verifier run per BRIEF-WAVE2 §7; only lines naming this slug were acted on and
all source-cap findings ignored.

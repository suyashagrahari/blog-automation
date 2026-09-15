# Research brief — `digital-gift-for-couples`

Batch `2026-09-15-virtual-gift-30`, wave 2. Market: India. Evergreen.
Primary keyword: **digital gift for couples**. Category: `digital-gifts-romance`.

---

## Phase 1 — SERP (India, `kl=in-en`, from `SERPS-WAVE2.md`)

```
1. ourgiftverse.com          — 3D digital gifts for long-distance couples
2. iloveyou.gift             — virtual gifts with music and photos
3. giftfordarling.com        — interactive couple platform
4. giftfeels.com             — digital gifts & surprise gift links
5. amazon.in /digital-gifts
6. couplemoment.com          — 35 Best Long Distance Relationship Gifts
7. amazon.in /couple-gifts
8. flipkart.com  couple watches
9. gifft.me                  — send free virtual gifts online
10. igp.com /gifts-for-couples
```

**Ecommerce score: 4/10** (amazon.in ×2, flipkart, igp) — borderline, below the
5/10 threshold that killed eight rows, so the row survives Gate 2 on evidence.

But 4/10 understates the real difficulty, and the audit says so. Positions
1, 2, 3, 4 and 9 are **five direct competitors** — personalised-page startups
page-shaped exactly like SubhSandesh, every one of them on the never-cite list
in `BRIEF-WAVE2.md` §0. Position 6 is a 35-item listicle. That leaves **zero
informational pages on the SERP**: no Reddit, no Quora, no guide, no
explainer. Nine of ten results are either a product homepage or a shop.

**What that means for the realistic ceiling.** Google is currently reading
`digital gift for couples` as navigational-commercial — "show me somewhere to
buy/make one" — not informational. A blog post does not displace a homepage for
a query Google has classified that way, and IGP, Amazon and Flipkart carry
domain authority SubhSandesh does not have. The honest ceiling for this URL is:
the long-tail question variants underneath the head phrase ("can two people
open the same gift link", "gift for a couple who just got married online"),
featured-snippet capture on those, and citation by answer engines, which do not
rank homepages well because a homepage states no facts. Ranking page one for
the bare head phrase is not a realistic target and is not claimed.

One thing the SERP does prove: **nobody has written the mechanics down.** Five
rivals sell the product and none explains what changes when the recipient is a
pair. That is the gap this post takes.

## Phase 2 — the angle, and the sibling problem

`shareable-gift-link-for-couples` (wave 1) is the closest neighbour and was read
in full before drafting. It covers the **link as an object**: capability URLs,
Open Graph preview cards, password scope, link decay, four handover methods,
what the link looks like when it lands in WhatsApp.

**The separation, in one sentence:** the sibling explains how one link built by
one person travels to a recipient; this post is about the page whose *recipient
is two people* — who ends up holding it, who the page addresses in the second
person, whether a password survives contact with two pairs of hands, and what
happens when only one of the two ever opens it.

That is a real split, so this row **differentiates rather than aborts**. Where
the two touch — the sibling's FAQ "Can two of us build the same page together?"
— this post takes the question as its spine instead of a one-paragraph answer,
and links the sibling so the two pages reinforce rather than compete.

`wedding-wish-page-online` (wave 2) was also read. Its finding — **SubhSandesh
has no dedicated wedding-congratulations template** — is used here in the
"wrong choice" section and credited by cross-link. Its wish-versus-invitation
argument is deliberately not restated.

**Angle:** the only post on this SERP that treats the recipient *count* as the
design problem, using SubhSandesh's own 40.6% password rate and 11.5 average
views to show why a page built for one reader misbehaves when two people are
supposed to share it.

## Phase 2b — keyword conflict found in the plan, and the swap

`WAVE2-PLAN.json` gives this row the secondary keyword
**`long distance relationship gift website`**. That string is the **primary
keyword of another wave-2 row**, slug `long-distance-relationship-gift-website`.
Targeting it here would cannibalise a sibling that is being written in parallel,
which `BRIEF-WAVE2.md` §3 forbids. It has therefore been dropped and replaced
with two phrasings that appear on no other row in either wave:

- `online gift for newly married couple`
- `digital gift ideas for couples`

Recorded here and in the audit rather than silently swapped.

## Phase 3 — sources

WebSearch and WebFetch not called. `scripts/serp.mjs` not called. Europe PMC was
**down for the whole session (HTTP 503 on every query, three attempts)**, so
discovery ran on Crossref, DOAJ and OpenAIRE instead, per §1b. OpenAlex not
attempted (known 429). Every landing page below was opened with
`ctx_fetch_and_index` and states what is cited.

Search terms that worked: `wedding gift giving` (OpenAIRE),
`joint ownership shared digital possessions couples` (Crossref),
`password sharing relationships` (OpenAIRE), `kinkeeping` (OpenAIRE).
Search terms that returned nothing usable: `Indian wedding gift exchange`,
`wedding gift registry`, `joint decision making gift purchase couple`,
`relationship maintenance asymmetry couples`, `couple shared media viewing
together` — all zero rows on OpenAIRE.

**Four sources, all verified, all on fresh or under-cap domains:**

1. **Saad & Gill (2017)**, *Gift Giving at Israeli Weddings as a Function of
   Genetic Relatedness and Kinship Certainty*, Journal of Consumer Psychology,
   repository copy at `spectrum.library.concordia.ca` (Concordia Spectrum).
   Abstract read on the landing page; full text not read. Monetary gift sums
   from guests at **30 weddings**, collapsed by genetic relatedness (0%, 6.25%,
   12.5%, 25%, 50%) and by maternal versus paternal lineage. Both hypotheses
   supported: closer relatives gave more, and the maternal side gave more than
   the paternal side. **Why it is here:** it is direct evidence that a gift
   nominally addressed to a couple is in practice calibrated to the giver's
   relationship with *one* of them. No other post in this batch has a
   two-recipient gift to explain, so it cannot be swapped out.
   Domain count before this post: 0.

2. **Wong, Hogg & Vanharanta (2017)**, *Couples' narratives of shared-self,
   possessions and consumption experiences*, Journal of Consumer Behaviour
   16(1) 72–81, author accepted manuscript at `eprints.lancs.ac.uk`. Abstract
   read in full on the landing page. Narrative study in Hong Kong; couples build
   a "shared-self" over time by sharing and negotiating resources, integrating
   perspectives, and including the partner as part of the self. **Why it is
   here:** it is the evidence that "jointly owned" is something a couple
   *arrives at*, not a default — which is why a page handed to a pair on day
   one is not automatically theirs. Domain count before this post: 0.

3. **Gutierrez, Aledia, Guevarra, Jasa, Villanueva & Tan (2024)**, *Signs of an
   Enmeshed Relationship: Motivations and Outcomes of Social Networking Sites
   Password Sharing among Emerging Adult Men*, Social Psychology and Society
   15(2) 140–154, `psyjournals.ru`, open access. Abstract read in full.
   Phenomenological study, **20 Filipino men aged 21–24** in monogamous
   relationships, semi-structured interviews, thematic analysis. Password
   sharing between partners has both personal and relational motivators and
   both **constructive and detrimental** outcomes. **Why it is here:** the post
   asks whether a password works when two people need it, and this is the only
   open study located on what actually happens when partners share one. Small
   qualitative sample — stated in the body, not just here.
   Domain count before this post: 1 (different URL, different article).

4. **Hornstra & Ivanova (2023)**, *Kinkeeping across families: The central role
   of mothers and stepmothers in the facilitation of adult intergenerational
   ties*, Sex Roles 88(7–8) 367–382, `research.tilburguniversity.edu` (Pure).
   Abstract read in full. OKiN survey, **N = 746 intact, 982 mother-stepfather
   and 1,010 father-stepmother families**. Kinkeeping is defined as four
   activities — **buying presents**, organising outings, relaying family news,
   discussing problems — and mothers and stepmothers hold the role. **Why it is
   here:** it is measured evidence that within a household the gift and
   relationship work concentrates in one person. The application to a couple's
   inbox (one of the two will become the keeper of your link) is stated in the
   body as an observation, not as the paper's finding. Domain count before this
   post: 0.

**Checked and rejected:** `usenix.org/conference/soups2018/presentation/park`
(Park et al., account sharing in romantic relationships) is an excellent fit but
is **already cited by `virtual-gift-for-boyfriend-birthday.json`**; taking it
would put that URL at the cap of 2 for a source that duplicates what Gutierrez
covers. `espace.library.uq.edu.au` (we-ness scale) returned 403.
`digitalcommons.unl.edu` kinkeeper PDFs returned 403.
`documentation.ird.fr` wedding gift-giving is a one-page newsletter item with
the full text behind a request form — not readable, so not cited.
Boothby et al. *Shared Experiences Are Amplified* exists only on
sagepub/pubmed, both blocked.

## Phase 4 — first-party facts

Two inside the first 150 words, five used in total:

- 40.6% of creators password-protect their page before sharing it (1,767 of 4,357)
- Average views per created page: 11.5 (of 49,968 recorded views)
- 49.0% of shared pages are opened on a phone (24,493 of 49,968 views)
- 3,377 registered creators, averaging 1.29 pages each
- 94.1% of started pages are actually published and shared (4,098 of 4,357)

**Disclosure carried into the body:** the database records which *template* was
opened, not who received it. Nothing in these numbers proves a page reached a
couple rather than one person, and the post says so rather than implying a
couple-specific measurement exists.

**No pricing claim anywhere.** The `## Pricing (fill in by hand)` block in
`facts.md` is empty, the keyword does not contain "free", and the post routes
price questions to `/templates`.

## Phase 5 — templates

Assigned: `/capsule`, `/flags`, `/date-invitation`. All three used, all three
descriptions read from `TEMPLATE_LINKS` in `app/lib/prompt.ts` first.

- **`/capsule`** — "you both write predictions about the next year, blind to
  each other; it seals, and a year later you open it together and score every
  one." This is the **spine of the post**. It is the only template in the
  library where two people are co-authors rather than one author and one
  reader, so it is the honest answer to "a digital gift for couples", and every
  other section is arranged around it.
- **`/date-invitation`** — "an invitation they must answer; a yes turns into a
  countdown, and on the day the plan unlocks one stop at a time while you are
  out." One author, two participants: the middle case.
- **`/flags`** — "Red Flag, Green Flag — one dating profile of your worst
  habits; they swipe left, right or 'it's complicated'." This is a genuinely
  one-to-one page and it is used **as the worked counter-example**, in the
  section on when a couple gift is really a one-person gift. That is a
  deliberate, accurate use of a template that would be wrong if described as a
  couple's page — not a forced link and not a swap.
- `/templates` once at the closing CTA. Four template links, inside the 2–4
  rule as the verifier counts it.

Blog cross-links, on top of the template count per `BRIEF-WAVE2.md` §3:
`/blog/shareable-gift-link-for-couples` and `/blog/wedding-wish-page-online`.
This row has no `nearestLive` field.

## Phase 6 — the claim no competitor makes

None of the ten results distinguishes a one-recipient page from a two-recipient
one. The claim this post owns: **a view counter cannot tell you whether two
people opened a page once each or one person opened it eleven times, and a
password protects a page from everyone except the person who was told it — so
the failure mode of a couple's gift is not that it breaks, it is that it
quietly becomes one person's.** No competitor states it because no competitor
has a view distribution to state it from.

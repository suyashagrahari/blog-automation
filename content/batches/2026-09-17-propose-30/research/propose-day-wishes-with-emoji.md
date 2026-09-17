# Research brief — `propose day wishes with emoji`

- **Slug:** `propose-day-wishes-with-emoji` (checked free: Strapi `filters[slug][$eq]` returned `total: 0`, 2026-09-17)
- **Category:** `modern-romance`
- **Templates:** `/proposal` (mandatory), `/love-gf` (the genuine alternative), `/date-invitation`
- **Occasion date, verified with `date` on this machine:** Rose Day Sunday 7 Feb 2027 · **Propose Day Monday 8 Feb 2027** · Valentine's Day Sunday 14 Feb 2027
- **Demand:** est. band 1,000–3,000, from 8 autocomplete prefixes in the 2026-09-16 harvest. Prefix count is not a volume and is printed nowhere in the post.

---

## Phase 1 — SERP analysis (INHERITED, not freshly measured)

The session's WebSearch budget was exhausted (200/200) before this post began, so no
live SERP was run for this keyword. The competitor picture below is taken from the 11
India-served SERPs measured with Firecrawl on **2026-09-16**, recorded in
`content/keywords/2026-09-16-propose-100/serps.md` and `competitor-map.md`. The closest
measured SERP is `propose day wishes for girlfriend`; no emoji-qualified SERP exists in
that log. **No position described here should be read as current.** This is recorded in
`batchMeta.structuralLimitations`.

| # | Page (2026-09-16, India) | Type | What it is | Weak? |
|---|---|---|---|---|
| 1 | giftalove.com/quotes/propose-day | retail quote list | "Quotes, Messages & Wishes for **2025**" | yes — stale year |
| 2 | pinterest.com/ideas/propose-day-messages | board | image grid, no prose | yes |
| 3 | wineandchampagnegifts.com/blog/propose-day-wishes | retail blog | "111+ Best Propose Day Wishes" | no |
| 5 | oyegifts.com — 105+ romantic proposal lines | retail blog | line list | no |
| 7 | floweraura.com — propose day **2025** 100 heartfelt quotes | retail blog | line list | yes — stale year |
| 8 | fnp.com/quotes/propose-day | retail | quotes + images | no |
| 10 | myflowertree.com/quotes/propose-day | retail | line list | no |

All seven are competitors under `references/competitors.md` (gifting retailers and
wishes content farms). None was linked, cited, paraphrased or mirrored. Four of the ten
results carry a stale year (2025, 2023) in the title. One incumbent published "7 Feb
Propose Day" — that is Rose Day, and the error is corrected in this post's first
sentence.

## Phase 2 — Gap analysis

**Table stakes** (present on every measured incumbent, so the post must not be missing
them): actual sendable lines; grouping by recipient; a mention of the date; short lines
suitable for a status.

**The gap.** Not one measured page treats the emoji as carrying meaning. They are used
as bullet decoration. Nobody covers:

- that the same code point is drawn by a different font on the recipient's phone;
- that emoji have acquired second readings (👍 as dismissal, 🍑/🍆/🙃);
- skin-tone and gender modifiers, and that the default is itself a choice;
- how many emoji, and where in the line they belong;
- that a page fixes the words but *not* the glyph — the honest limit of our own product.

**Stale data.** The incumbents cite nothing at all, so there is no stale statistic to
supersede — there is an empty field to occupy.

**Fan-out sub-queries → H2s.** Each H2 answers one:

| Sub-query | H2 |
|---|---|
| what do emoji add to a proposal message | What emoji actually do in a Propose Day message |
| why do emoji look different on different phones | The same emoji is drawn differently on her phone than on yours |
| which emoji mean what in a proposal | Five emoji at the centre of a proposal, and what each one is actually saying |
| what do skin tone / gender modifiers mean | Skin tone and gender modifiers: the default is a choice too |
| how many emoji is too many | How many emoji, and where they go in the line |
| propose day wishes with emoji, by recipient | Propose day wishes with emoji, grouped by who is getting them |
| text vs image vs link | Which way of sending the message survives the phone it lands on |
| when not to use emoji / a page | When emoji, and a SubhSandesh page, are the wrong choice |

**Angle.** Wins by being the only post on this keyword that treats the emoji as the
message rather than decoration — rendering variance, second readings, modifiers, count
and placement — anchored to the verified Monday 8 February 2027 date and to
SubhSandesh's platform-wide 48.9% phone-open rate across 4,567 pages and 16 page types.

## Phase 3 — Sources

Discovery was by `findpapers.mjs` (Crossref + Europe PMC), not WebSearch. Queries run:
`emoji interpretation cross-platform rendering study`, `emoji ambiguity miscommunication
study`, `emoji skin tone modifier research`, `emoji function computer-mediated
communication study`.

| Source | Domain | What it actually says | Read |
|---|---|---|---|
| Miller et al., *"Blissfully Happy" or "Ready to Fight": Varying Interpretations of Emoji*, ICWSM 10 (2016) | ojs.aaai.org | Participants rating the **same** emoji rendering disagreed on positive/neutral/negative **25% of the time**; disagreement increases across platform renderings | abstract only |
| Miller et al., *Understanding Emoji Ambiguity in Context*, ICWSM, 3 May 2017 | ojs.aaai.org | **2,482 participants**; interpreting emoji inside textual context left miscommunication potential **roughly unchanged** | abstract only |
| Zhukova & Herring, *Benign or Toxic?*, *Language@Internet* 22, 20 Dec 2024 | scholarworks.iu.edu | Younger generations rated the **smile and thumbs-up as more passive-aggressive**; older generations rated fire and bomb more negatively | abstract |
| Sweeney & Whaley, *Technically white: Emoji skin-tone modifiers as American technoculture*, *First Monday* 24(7), 30 Jun 2019 | firstmonday.org | Skin-tone modifiers arrived in **Unicode 8.0**, released by Apple in 2015; they still technically centre whiteness because the unmodified character stays the default | full text |
| Unicode Consortium, *UTS #51: Unicode Emoji* v16.0, 15 Aug 2024 | unicode.org | "The shape of the character can vary significantly"; **five** skin-tone modifiers based on the Fitzpatrick scale; "the exact shades may vary between implementations"; gender-neutral forms from Emoji 13.0 | full text |

**Tests.** Subject test: all five are about emoji semantics, rendering or
interpretation — the post's actual phenomenon. Swap test: none could sit unchanged in
another post in this batch, because no sibling is about emoji. Peer-reviewed and
open-access: Zhukova & Herring (CC BY-NC) and both ICWSM papers. Generic context
statistics used: **zero**. Wikipedia body links: **zero** (Emoji, Unicode Consortium and
Valentine's Day appear only as verified `sameAs` in `about`/`mentions`, QIDs Q1049294,
Q1572774, Q37587, checked against the Wikipedia API).

**Caps.** `capcheck.mjs` run before and after drafting. None of `ojs.aaai.org`,
`scholarworks.iu.edu`, `unicode.org` appears in any sibling; `firstmonday.org` appears in
exactly one sibling (`will-you-be-my-girlfriend-proposal-page-online`, article 1835 from
2007) — a different URL and a different paper, so this post makes it 2 of 3.
`europepmc.org` / `pmc.ncbi.nlm.nih.gov`, frontiersin.org, arxiv.org, journals.plos.org,
aclanthology.org, ecommons.cornell.edu and journals.sagepub.com were all at cap and were
avoided. No wave-1 banned URL is used. The Groggel *Symbolic Interaction* 2023 paper
claimed by a sibling is not used.

**Rejected candidates.** Franco & Fugate, *Emoji Face Renderings* (Journal of Nonverbal
Behavior, 2020) — Springer returned a JS shell, no abstract readable, so not cited.
Konrad, Herring & Choi, JCMC 2020 — academic.oup.com returned 403. Thangaraj et al.,
*Digital Colourism? Emoji Skin Tone Preferences Among Indian-Origin Users* (BCS HCI 2025)
— scienceopen.com is behind Cloudflare and returned 403; genuinely the most India-
relevant hit and the loss is real. Several Crossref hits were in pay-to-publish outlets
(IJEE, Skase) and were discarded on quality grounds, not availability.

## Phase 4–6 — Draft and audit

- Body **1,793 words** excluding FAQs (plain whitespace split, the band the verifier
  uses). 1 H1, 9 H2s, 9 H3s. **12 FAQs**, in `article.faqs` and the renderer-built
  FAQPage only, none byte-identical to a body H2.
- 20 original wishes across four recipient groups. Nothing copied from any page; no
  lyrics and no film dialogue.
- 5 outbound links, one per source, each at the sentence it supports. 3 internal links,
  all from `TEMPLATE_LINKS`, all relative, all placed after the section that earns them.
- First-party facts: 6 used, 3 of them in the first 150 words. Every one labelled in
  body prose as platform-wide or as sampled on `/love-gf`. No figure is attributed to
  proposal pages. No price, free-tier or paid-tier claim anywhere.
- Audit: **49 passed, 1 failed, sum 50, disjoint**. The single failure is the four-
  sentence opening paragraph, which page-structure.md's answer-block requirements force.
  Structural limitations are in `batchMeta.structuralLimitations`, never in `failed`.

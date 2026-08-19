# Research brief — raksha bandhan wishes for sister from sister

- Slug: `raksha-bandhan-wishes-for-sister-from-sister` (checked 2026-08-19 against
  `https://strapi.subhsandesh.in/api/articles?filters[slug][$eq]=…` → `[]`, free)
- Batch: `2026-08-19-rakhi-3` (third rakhi batch; 19 rakhi posts already exist)
- Phase 0 was run for the batch on 2026-08-18; `npm run facts` deliberately **not** re-run.
- Siblings on disk when I checked (2026-08-19): `celebrate-raksha-bandhan-siblings-different-cities`,
  `make-raksha-bandhan-card-online-with-name`, `raksha-bandhan-wishes-in-bengali`. Their source
  domains (all avoided here): demographic-research.org ×2, pib.gov.in ×2, newsonair.gov.in,
  hbs.edu, research.google.com, englelab.gatech.edu, wu.ac.at, ics.uci.edu, ccsenet.org,
  questjournals.org, banglapedia.org, w3.org, unicode.org. On a re-check just before writing the JSON a fifth
  sibling had appeared, `raksha-bandhan-message-for-step-siblings` (digitalcommons.unl.edu,
  mospace.umsystem.edu, digitalcommons.usu.edu). No URL or domain overlap with this post; every
  source domain in the batch is now used by exactly one post.

---

## Phase 1 — SERP analysis (2026-08-19)

Search: `raksha bandhan wishes for sister from sister`. No AI Overview surfaced; results are all
retailer/blog listicles. Every page below is a competitor (gifting retailer or wishes content
farm) — analysed only, never cited or linked. Marker counts come from a scripted fetch of the
live HTML, so they are countable rather than impressionistic.

| Page (competitor, not cited) | Words | Structure | Where the answer is | Sender's gender | Data cited | Format |
|---|---|---|---|---|---|---|
| floweraura.com/blog/…replies-to-sister | ~1,940 | H1 + one H2 ("Wrapping Up"), long undivided wish list | Not answered; list starts immediately | **Male.** Two instances of "my wrist" — the sender is the one wearing the rakhi | none | no table, thin FAQ |
| floweraura.com/quotes/…for-younger-sister | ~2,050 | H1 + 2 H2 + 4 H3 by tone (heartfelt / cute / emotional / social) | Wishes only | **Male** ("from a brother" ×1; product rails to "Rakhi for brother") | none | no table |
| kickyandperky.com/…50-happy-raksha-bandhan-wishes-for-sister | ~1,670 | H1 + 5 H2, one is a 2026 gift-trend section | Partial — "What should I write" H2 is second | Unmarked but framed around gifting *to* a sister | "gift trends 2026", unsourced | no table |
| giftlaya.com/blog/85-heartfelt-…-wishes-for-sister | ~3,330 | H1 + 8 H2 + 12 product H3, sections for elder / younger / long distance / **twins** | Buried under a definition paragraph | **Male by definition.** Opening states "sisters tie a sacred thread around their brothers' wrists… In return, brothers offer gifts and vows to safeguard their sisters" | none | no table |
| chocomanualart.com/…rakhi-messages-for-sister | ~3,585 | H1 + 7 H2, numbered blocks of 20 wishes | No | Male-leaning ("protect you" ×2) | none | no table; 2025 in a heading |
| goldentipstea.com/…bond-of-siblinghood | ~810 | H1 + 2 H2 split **by sender** | No | **Explicit.** The only two sender categories offered are "from Brother to Sister" and "from Sister to Brother" | none | no table, no FAQ |

Scripted counts across all six pages: `sister to sister` = **0**, `no brother` = **0**,
`tie rakhi to each other` = **0**. "Lumba" appears only as a product category (bhabhi rakhi).
So: **6 of 6 pages presuppose a brother somewhere in the ritual, and 3 of the 6 gender the
sender explicitly** — one by putting the rakhi on the sender's own wrist, one by section
heading, one by its opening definition. None addresses two sisters tying rakhi to each other.

Also read for cannibalisation: `content/batches/2026-08-13-rakhi/blogs/happy-raksha-bandhan-wishes-for-sister-from-brother.json`.
That post is a brother initiating or replying to a sister, organised by situation, and leans on
muhurat timing. This post shares none of its H2s, none of its sources, and inverts its premise:
there is no brother in the frame at all. Overlap risk noted as low but non-zero (both address a
sister as recipient) and recorded in the audit.

## Phase 2 — Gap analysis

**Table stakes** (must cover or the page looks incomplete): wishes for an elder sister, wishes
for a younger sister, twins, long-distance sisters, and short lines usable as a status or
caption.

**The gap:** the sender. Every ranking page treats "wishes for sister" as a thing brothers send.
Sister-to-sister rakhi — two sisters tying rakhi to each other, or a sister tying for a sister
because there is no brother, or because a brother is absent, estranged or dead — is unaddressed
on the entire first page. The practical consequence for the reader is concrete: the ready-made
lines she finds are load-bearing on a male sender ("the thread on my wrist", "I will always
protect you"), and copying them produces a wish that describes a relationship she is not in.

**Unanswered questions on the SERP:** who ties first when both sisters tie; whether a woman may
tie rakhi on a woman at all; what to say when the rakhi is being tied in place of a brother who
has died; whether a cousin or a friend counts.

**Fan-out sub-queries** → became H2s/H3s/FAQs: can sisters tie rakhi to each other · what to
write for an elder sister · for a younger sister · for a twin · for a cousin sister · for a
chosen/best-friend sister · what to say when a brother has died · how the ritual is performed
without a brother · which lines to delete · one-line versions for a status.

**Angle:** wins by being the only page on this SERP where the sender is a sister — naming which
brother-shaped lines to delete, how the ritual runs with two women's wrists, and what the
practice data on 2,718 SubhSandesh pages says about where a wish actually survives.

## Phase 3 — Sources (all fetched and verified; 4 total, 0 competitors, 0 Wikipedia, 0 government context stats)

The batch's one permitted generic context statistic was already spent by a sibling post
(pib.gov.in ×2 in `celebrate-raksha-bandhan-siblings-different-cities`), so this post carries
none by design. Raksha Bandhan 2026 = **Friday 28 August 2026** is used as a fact-check only; no
muhurat time is stated, so no panchang source appears in `sources` or `citation`.

1. **Öz Soysal, F. S. (2016).** *A Study on Sibling Relationships, Life Satisfaction and
   Loneliness Level of Adolescents.* Journal of Education and Training Studies 4(4), Redfame.
   Open access; full text read via the ERIC repository copy (the publisher's own site,
   `jets.redfame.com`, returned HTTP 522 on 2026-08-19, so the ERIC full-text URL is cited).
   Verified in text: 382 students (209 female, 173 male); **134 female sibling dyads, 124 male
   dyads, 124 mixed-gender dyads**; "Students who had siblings of the same gender were observed
   to have more positive attitudes toward sibling relationships than those who had siblings of
   the opposite gender"; "female students who had siblings of the same gender had lower levels
   of loneliness". Its review section states sister–sister dyads show the highest levels of
   warmth, intimacy and closeness (attributing Buhrmester & Furman 1990; Dunn et al. 1994;
   Riggio 2000) — cited as a review claim, not as this study's own result.
   Subject test: sister–sister dyads specifically. Swap test: unusable in the other three posts.

2. **Raheja, G. G., & Gold, A. G. (1994).** *Listen to the Heron's Words: Reimagining Gender and
   Kinship in North India.* University of California Press; full open-access text at
   publishing.cdlib.org. Verified in text: in Pahansu (Saharanpur district, UP) Raheja was
   placed as sister and daughter of the household and could not pay for her food or lodging —
   "one never takes anything from a sister or daughter", while a sister may give to her
   brothers' wives and children. Also verified: women singing as sisters and daughters "stress
   the importance of the brother-sister tie over and against the brother's tie to his own wife",
   and women's expressive genres contest North Indian gender and kinship ideology.
   Used for the claim that the giving in this relationship is one-directional *by kinship rule*,
   which is exactly the rule two sisters have no script for.

3. **Dahal, K. (2020).** *Celebrating Teej as a Festival of (Re)union and Enjoyment.* Molung
   Educational Frontier 10, via NepJOL. Open access; full PDF read. Verified in text: Teej's
   mythic frame is "the victory of a wife's love and devotion towards her husband", yet as
   practised it is "the (re)union of married women with their parents, brothers, and sisters in
   their maternal home", where women "express their feelings of pain and suffering which they
   have to bear at their inlaw's house in the form of singing and dancing".
   Used for the precedent: a women's festival whose stated script points at a man while the
   practice points at the women in the room.

4. **Minić, J., Keljanović, A., & Pavlović, D. (2025).** *The Quality of Relationships with
   Siblings in Adolescence and Adulthood.* Zbornik radova Filozofskog fakulteta u Prištini
   55(1), 315–331. Open access PDF (Serbian, with an English summary — the summary is what is
   cited). Verified in the English summary: n = 125 adolescents + 125 adults; **female
   adolescents scored higher than male adolescents on intimacy, love, admiration and emotional
   support**; adolescents scored higher than adults on intimacy, love, admiration and emotional
   support, i.e. the measured closeness is lower in the adult sample.
   Used for the claim that a yearly ritual is doing maintenance work on a bond whose measured
   closeness falls in adulthood.

**Searches that produced nothing usable** (recorded rather than padded): no peer-reviewed study
of Raksha Bandhan itself exists in DOAJ (`bibjson.title:("Raksha Bandhan" OR "rakhi")` → 1 hit,
a geology paper) or in OpenAlex OA (11 hits, none about the festival). Searches tried:
`sister-sister dyad closeness`, `raksha bandhan sibling ritual`, `brother sister relationship
India kinship ritual gender`, `Hindu women ritual fast vrat brother sister`, `fictive kinship /
chosen family / kinkeeping`, `sibling sex composition son preference India`, `bereaved siblings
role`. Two candidates were dropped for access reasons and are named for honesty: Leela Dube,
*Women and Kinship* (collections.unu.edu returned 0 bytes) and MDPI's *Prayers of Cow Dung*
(HTTP 403). Nothing was cited from a search snippet.

## Phase 5 — targeting

- `categorySlug`: `family-and-continuity` — verified live in the Strapi categories endpoint on
  2026-08-19. Chosen over `festive-beats` because the post is about a relationship, not the
  festival calendar.
- `templateUrls` / internal links, all from `TEMPLATE_LINKS`:
  `https://subhsandesh.in/happy-rakshabandhan-to-brother` (the only rakhi template, and it is
  written brother-first — the post says so plainly rather than implying a fit),
  `https://subhsandesh.in/missyou-bestfriend` (for the chosen-sister case),
  `https://subhsandesh.in/templates`.
- Entities verified against the Wikipedia API on 2026-08-19: Raksha Bandhan = Q10266,
  Sibling = Q31184, Fictive kinship = Q5446591, Teej = Q3630226.

## First-party facts used (verbatim from content/facts.md, generated 2026-08-18)

- 2,718 personalised pages created since 2026-03-12, across 13 page types — measured 2026-08-18
- 51.9% of shared pages are opened on a phone (16,952 of 32,683 views) — measured 2026-08-18
- Average views per created page: 12.0 — measured 2026-08-18
- 44.3% of creators password-protect their page before sharing it (1,205 of 2,718) — measured 2026-08-18

Limitation stated in the post and the audit: there is no rakhi-specific first-party number,
because rakhi is not one of the 13 page types measured, and the platform-wide figures would fit
any occasion. They are used only for what they prove — how a shared page behaves once sent.

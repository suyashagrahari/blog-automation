# Research brief — `can a girl propose to her boyfriend`

- Batch: `2026-09-17-propose-30` (wave 2 on propose/proposal)
- Slug: `can-a-girl-propose-to-her-boyfriend` — checked against Strapi on 2026-09-17, `filters[slug][$eq]` returned `total: 0`, free.
- Category: `modern-romance` (verified present in the live Strapi category list)
- Volume band: 300–1,000 EST, no tool data. Not printed on the page as a real volume.
- Research lane: gender norms in courtship initiation, and women-initiated proposals.

---

## Phase 0 — first-party data gate

Five facts used, all from `content/facts.md` (measured 2026-09-17). Two sit inside the
first 150 words.

| Fact | Where it appears | How the prose labels it |
|---|---|---|
| 39.9% password-protect before sharing (1,822 of 4,567) | answer paragraph, table, FAQ 10, key takeaway | "platform-wide across all 16 page types" |
| 92.7% of started pages finished and sent (4,234 of 4,567) | answer paragraph | "platform-wide across all 16 page types" |
| 48.9% of views on a phone (25,167 of 51,504) | "wrong way to ask" section | "Platform-wide" |
| Median first save → last edit 6.4 h, n=1,138 | H3 #4, table, FAQ 9 | "sampled on the /love-gf template … not on proposal pages" |
| 4,567 pages across 16 page types since 2026-03-12 | answer paragraph (denominators) | "across all 16 page types" |

**No number is attributed to proposal pages.** The `proposalpages` read was refused again
in this batch. The Raksha Bandhan lead-time block was not used — different festival, n=89.
The pricing block is empty, so the post makes no price, free-tier or paid-tier claim, and
the comparison table compares preparation time, audience and privacy rather than cost.

---

## Phase 1 — SERP

Searched `can a girl propose to her boyfriend`. The whole first page is US/UK commerce:

| Rank area | Page | Word count / shape | Where the answer lands | Data cited | Format | What it optimises for |
|---|---|---|---|---|---|---|
| 1 | doamore.com — "10 Creative Ways for a Girl to Propose to Her Boyfriend" | ~1,800, listicle | after an intro | none | numbered list, no schema visible | ring sales |
| 2 | withclarity.com — "Can a Woman Propose to a Man?" | ~1,500, Q&A | first paragraph | none dated | short H2s, FAQ | ring sales |
| 3 | theknot.com — "Here's Exactly How to Propose to a Man Like a Boss" | ~2,000, how-to | after an intro | vendor survey, undated | steps + quotes | registry/vendor funnel |
| 4 | withjoy.com — "The Woman's Guide to Proposing to a Man" | ~1,600, guide | first paragraph | none | list + tips | wedding-site funnel |
| 5 | modgents.com / hiholden.com — "Can a Woman Propose to a Man?" | ~1,200, reassurance | first paragraph | leap-year folklore, no source | short list | men's ring sales |

All five are competitors or competitor-adjacent under `references/competitors.md`
(engagement-ring retailers and wedding-planning platforms selling into the same
"make this moment special" buyer). **Nothing from them is linked, cited or mirrored.**
`bondlyfe.com` and the wave-1 competitor list did not appear for this query.

AI Overview behaviour: the query returns an encouraging "yes, absolutely" summary
synthesised from the above, with no numbers and no citations of research.

## Phase 2 — Gap

**Table stakes** (all five carry these, so the post must not omit them): the answer is
yes; know whether he is traditional; have the marriage conversation first; make it
personal; you do not have to buy a diamond.

**The gap** — none of the five:
1. Quantifies how rare it is. Four of over 1,800 @HowTheyAsked posts is a number no
   competitor prints.
2. Reports what the reaction actually was for women who did it. All five speculate; a
   peer-reviewed study interviewed 21 of them.
3. Names the family objection in the words families use — "why can't you wait for him?",
   "you're gonna make him feel less of a man".
4. Names the failure mode that is not a refusal: he says yes and then tells everyone he
   asked.
5. Touches India at all, or admits that the evidence base is white, Western and
   highly educated.

**Stale data**: the incumbents cite nothing datable, so there is no stale figure to
supersede — the win is citing anything at all.

**Fan-out sub-queries → H2s**
- what is a reverse proposal → H2 1
- how will he react / will he feel emasculated → H2 2
- what will my parents / his parents say → H2 3
- what do I give instead of a ring → H2 4 (four H3s → `ItemList`)
- how do the formats compare → H2 5 (table)
- when is this a bad idea → H2 6
- is this different in India → H2 7

**Angle:** the only post that answers the girl-proposing question with the three
reactions she is actually bracing for, quoted from the only peer-reviewed study of women
who have done it, paired with a platform-wide password-protection rate so she can
control who finds out first.

---

## Phase 3 — Sources

Cap check run before selecting (`node content/batches/2026-09-17-propose-30/capcheck.mjs`)
and again before finalising. None of the five URLs or domains below appears in the wave-1
banned list; none of the five domains was at or near the per-batch cap at either check.

1. **Hoelscher, Khanijou & Pirani, "Changing informal institutions via mimesis: Gender
   equality in marriage proposals", *Gender, Work & Organization*, 21 September 2022.**
   CC-BY, read in full from the Goldsmiths green open-access copy
   (`research.gold.ac.uk/id/eprint/32151/`; Wiley itself returns 403).
   Says: content analysis of @HowTheyAsked (renamed from @HowHeAsked in 2018) found
   "only four in over 1800 posts depict women proposing to men"; 21 in-depth interviews
   of 40–60 minutes with women who proposed, recruited via #sheaskedhesaidyes, plus a
   virtual ethnography of Instagram and Reddit; the central finding is a "double bind" —
   women are pushed towards marriage and chastised for initiating it. Verbatim
   participant quotes used in the post: Rosa's in-laws ("it's something that a man should
   do … you're gonna make him feel less of a man … They wanted us to be engaged, just not
   with me doing it"), Juliet's mother ("why can't you wait for him? … I want you to have
   that moment"), Margot's "marry me" pizza and silicone climbing ring, and the dog
   name-tag "pup-posal". The paper's own participant table shows the sample living in the
   US, UK, Germany, the Netherlands, Spain and Canada, and the authors state it is mostly
   white and highly educated — reported in the post as a limitation.
   Subject test: pass. Swap test: pass (unusable in any other keyword in this batch).

2. **Pirani, Khanijou & Hoelscher, "Why don't more women choose to propose to their male
   partners?", The Conversation, 19 December 2024.** Read in full.
   Says: of the 21 interviewees the majority had a positive experience; one was rejected;
   one found her partner — who had said yes — was telling everyone he had done the
   proposing, and the relationship fell apart. All of them experienced some form of
   rejection or negative judgement, including being told they were emasculating their
   partners or had spoiled the magic. Most knew no other woman who had proposed and
   leaned on online solidarity networks instead.
   The same research team's plain-language account; used for the outcome detail the
   journal article does not foreground. Not a competitor (academic news outlet).

3. **Antonio, Lucas & Brazal, "On Women Making the First Move: Has the Courting Script
   Changed?", *Intersections: Gender and Sexuality in Asia and the Pacific*, Issue 48,
   November 2022.** Open access, peer-reviewed, read in full.
   Says: N=119 college students (69.7% female) at a Catholic university in Pampanga,
   Philippines. "Men should take the first move in expressing their love interest in
   women" scored a mean of 3.84/5 ("agree"); "Women, in accord with their nature, should
   be passive in relationships" scored 2.95 ("neither agree nor disagree"). The item "my
   faith teaches that women should wait for the man to do the courting" accounted for
   18.23% of the variance in the first-move belief; "women who initiate courting are
   courageous (*lakas ng loob*)" correlated negatively with it (p=.007).
   The closest Asian evidence to the Indian reader's situation, and the paper itself
   notes a dearth of research on courting patterns outside the West.

4. **Allendorf, "Schemas of Marital Change: From Arranged Marriages to Eloping for Love",
   *Journal of Marriage and Family*, April 2013, via PMC.** Open access, read in full.
   Says: of ever-married women aged 25–49 in the India Human Development Survey 2005,
   fewer than 5% had the primary role in choosing their husband and only 22% knew their
   husband for more than one month before marrying; nearly two-thirds were consulted in
   the decision (Desai & Andrist 2010). The paper notes only women were asked, so total
   self-choice is underestimated.
   Used explicitly as evidence about *choosing*, not *asking* — the post says so.

5. **"Benevolent and Hostile Sexism in Endorsement of Heterosexist Marriage Traditions
   Among Adolescents and Adults", *Sex Roles*, 25 July 2023, CC-BY.**
   **Abstract only.** `link.springer.com` serves a JavaScript bot challenge; the abstract
   was read via the OpenAlex record for DOI `10.1007/s11199-023-01399-1`. Says: gendered
   proposal, surname and wedding traditions remain widely endorsed in most western
   countries; three studies, N=367, across adolescents and 30-year-olds; different
   combinations of ambivalent sexism predict traditional endorsement at different ages.
   Nothing beyond the abstract is claimed on the page.

**Rejected sources and why**
- `journals.sagepub.com/doi/10.1177/23780231221139119` (Cast & Schweingruber 2022, on
  conformity to engagement proposal scripts) and
  `davidschweingruber.com/.../Schweingruber&al(2008)-SR.pdf` — both spent in wave 1, banned.
- `link.springer.com/article/10.1007/s11199-023-01405-6` (women's endorsement of
  heteronormative dating scripts) — spent in wave 1, banned.
- `en.wikipedia.org/wiki/Bachelor's_Day_(tradition)` — spent in wave 1, banned. The
  leap-year custom is therefore mentioned only via the GWO/Conversation finding that the
  women in the study knew of it, and appears once as a verified `mentions` entity in
  JSON-LD (which does not count against the body Wikipedia budget).
- Parkin, "'Glittering Mockery': Twentieth-Century Leap Year Marriage Proposals",
  *Journal of Family History* 2012 — wanted it, could not read it. PubMed requires
  cookies, SAGE 403s, OpenAlex and Semantic Scholar have no abstract. Not cited.
- shaadi.com / matrimonial-site press surveys reported by Zee and Business Standard
  ("70.2% of women would not make the first move") — no published methodology, and a
  matchmaking service is competitor-adjacent. Not cited.
- The Knot's proposal survey — competitor. Not cited, not paraphrased.

**The Indian research gap, honestly.** No study of who proposes in an Indian relationship
was found. Terms tried: `marriage proposal gender India who proposes`;
`Indian study survey who proposes first in relationship India women proposing men research
journal`; `premarital romantic relationship initiation young adults India love marriage
proposal`; `India Human Development Survey women say in choosing husband`; plus OpenAlex
full-text search on the first three. The nearest hits were about spouse *selection*
(Allendorf, above) and about premarital sexual behaviour, not initiation. This is recorded
in `batchMeta.structuralLimitations` and stated in the body.

---

## Phase 5 — links and targeting

- Internal (3): `/proposal` (mandatory, placed in H3 #4 after the three research-derived
  alternatives establish why an object-with-a-story beats a ring), `/templates` (after the
  comparison table), `/court-of-love` (the genuine alternative, in the "wrong way to ask"
  section, with the two cases where it is the wrong choice named).
- `templateUrls`: `["/proposal", "/court-of-love"]`, relative paths.
- Outbound (5): one per source, inline at the sentence each supports.
- Wikipedia in body: 0.
- `structuredData`: `@id`-matched `BlogPosting` enrichment on `<canonicalURL>#post`
  carrying `about` (Marriage proposal, Q1057944), four `mentions` (Gender role Q2672163,
  Courtship Q376596, Engagement Q157512, Bachelor's Day Q16949919 — all verified against
  the Wikipedia API on 2026-09-17), and `citation` mirroring the five sources one-to-one;
  plus an `ItemList` mirroring the four H3s in order.

## Phase 6 — audit

50/50 accounted for: 48 passed, 2 failed, disjoint.

1. *Paragraphs 2–3 sentences throughout* — the four H3 blocks run four sentences each,
   because `page-structure.md` requires every H3 to carry the same four fields in the same
   order. Everything else in the body is two or three sentences.
2. *Slug short, hyphenated, lowercase, no stop words* — the assigned slug keeps "a", "to"
   and "her" because it is the question keyword verbatim; shortening it breaks the exact
   match with the query.

Neither is a structural limitation, so neither is in `structuralLimitations`; the four
genuine limitations (no proposal-specific data, empty pricing block, Springer bot wall,
no Indian who-proposes research) are recorded there and none of them is in `failed`.

## Date check

Propose Day 2027 = **Monday 8 February 2027**, computed rather than assumed; Rose Day
Sunday 7 February 2027, Valentine's Day Sunday 14 February 2027; Propose Day 2026 was a
Sunday. The post prints the Monday and the 2026 contrast once.

## What the post cannot overcome

subhsandesh.in has far less authority than The Knot or Joy on a wedding query, and this
is the first page in a 46-page live proposal corpus written to a woman, so there is no
internal cluster supporting it yet. Answer-engine citation for the "how will it be
received" sub-question is the realistic near-term win; ranking is a months-long question
and is not predicted here.

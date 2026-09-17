# Research brief — `how to propose girlfriend again`

- **Slug:** `how-to-propose-girlfriend-again-after-a-fight` (checked against Strapi on 2026-09-17: `filters[slug][$eq]` returned `total: 0`, so it is free)
- **Batch:** `2026-09-17-propose-30` · **categorySlug:** `modern-romance` (confirmed live in the Strapi categories list)
- **Secondary keyword:** `how to propose ex girlfriend again`, covered in its own H2 and deliberately not blurred with the after-a-fight case
- **Volume:** no tool data. Treated as a low-hundreds long-tail query and written accordingly; no volume figure is printed anywhere in the post.
- **Research lane:** relationship repair, forgiveness, post-conflict reconciliation, on/off relationship cycling. No first-disclosure-anxiety, marriage-readiness, CMC/text-message or long-distance literature was used.

---

## Phase 1 — SERP analysis

Searched `how to propose girlfriend again after a fight` and `how to propose ex girlfriend again after breakup`. The striking thing about this SERP is that **it is almost entirely user-generated**. There is no authored, sourced guide ranking for either query.

| # | Page | Type / length | Where the answer sits | Data cited | Format | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|
| 1 | Quora — "How do I convince my girlfriend after a fight" | UGC thread, variable | Never; each answer opens with an anecdote | None | Answer stack, no headings, no schema beyond Quora's own | First person, confessional, hedged | Quora's own engagement loop |
| 2 | Quora — "How do I propose to my girlfriend for the second time? We broke up recently…" | UGC thread | Buried | None | Same | Same | Same |
| 3 | Weddingbee — "He Proposed…after a fight" | Forum thread, long | Emergent, not stated | None | Chronological replies | Women reacting, mostly negatively, to being proposed to inside an argument | Community retention |
| 4 | Weddingbee — "Proposal tomorrow but big fight today?" | Forum thread | Emergent | None | Same | Same | Same |
| 5 | proposal007.com — "How to re-propose to your partner?" | Vendor blog, ~800–1,000 words | Paragraph 3 | **Zero sources** | H2s, CTA blocks, booking widget, NYC phone number | Third person, vendor-warm | Selling NYC proposal-planning packages |
| 6 | themodernman.com — "Will Proposing Marriage to Your Ex Make Her Get Back With You?" | Coaching blog, long | Sentence 1 ("only if you don't do it in a needy way") | **Zero sources**; embedded upsell videos | Long unbroken prose, imagined monologues | Second person, "reactivate her feelings of respect and attraction" | Selling an ex-back coaching product |
| — | JustAnswer relationship pages | Paid Q&A, thin | Behind a paywall gate | None | — | — | Lead capture |

No AI Overview surfaced on either query at the time of the search. No featured snippet either — consistent with a SERP where nothing is structured well enough to be lifted.

**Competitors touched in Phase 1 and never cited, linked or paraphrased:** proposal007.com, themodernman.com, the Quora/Weddingbee/JustAnswer UGC properties, and everything in `references/competitors.md` plus the wave-1 additions (bondlyfe.com, bemyval.co, yourlovepage, pixeryhub, momentocard, giftsqr, mewtrucard, greetingsisland, paperlesspost).

---

## Phase 2 — Gap analysis

**Table stakes** (present across the ranking pages, so the post must not omit them): apologise before you ask; do not do it in the heat of the argument; a ring does not repair a relationship; with an ex, go slowly and re-establish the relationship first.

**The gap — four things nobody in this SERP does:**

1. **Nobody separates the two situations.** "We fought and I still want to ask" and "we broke up and I want to ask" are treated as one blur. They need different answers, and the second one needs a smaller question first.
2. **Nobody cites anything.** Two of the five pages are commercial and neither carries a single source. The UGC pages carry lived experience, which is real, but it is not evidence and it is not extractable.
3. **Nobody tells the reader the unwelcome part.** There is a genuine literature on relationship cycling and its outcomes, and it says reconciliation is common *and* costly. No page in this SERP mentions it.
4. **Nobody writing from a product site admits its own product is the wrong one.** SubhSandesh sells a proposal template; for this reader the apology template is usually the correct page, and saying so plainly is the post's main asset.

**Stale data:** not applicable — there is no data on these pages to be stale.

**Unanswered questions raised and dropped:** how long to wait; what counts as "fixed"; what to do when she has said no once; whether to send anything at all when she has asked for space.

**Fan-out sub-queries → H2s:**

| Sub-query | Became |
|---|---|
| Can I propose the same day we fought? | `## Should you propose again the same day you fought?` |
| What does "asking again" even mean? | `## What "asking again" actually means here` |
| What is the right sequence? | `## The order that works: repair, space, then the question` (5 numbered H3s → `ItemList`) |
| What should I actually send her? | `## What to send, and when` (comparison table) |
| How do I propose to my ex-girlfriend again? | `## How to propose to an ex-girlfriend again after a breakup` |
| She already said no — now what? | `## If she has already said no` |
| When is a page the wrong move? | `## When a SubhSandesh page is the wrong thing to send` |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that separates asking again after a fight from asking again after a breakup, names the order with forgiveness-seeking and relationship-cycling research behind it, and says plainly that the apology dashboard — the platform's #2 page type at 1,118 pages, 24.5% of everything created platform-wide — is usually the page this reader should send instead of a proposal page.

---

## Phase 3 — Sources

Searched the phenomenon, not the keyword: `forgiveness romantic relationships study`, `relationship repair after conflict research`, `accommodation process romantic couples`, `apology effectiveness study`, `on-again off-again relationship cycling research`, `unwanted pursuit behaviour after breakup`.

All five URLs were checked against the 54 URLs spent in `content/batches/2026-09-17-propose-12` (extracted with the BRIEF's one-liner). **None appears there.** The one domain overlap is `frontiersin.org`, and the paper is different (wave 1 used fpsyg.2016.01684, fpsyg.2014.01355 and fpsyg.2025.1607274; this post uses fpsyg.2021.656689).

| Source | What it actually says | Subject test | Swap test | Access |
|---|---|---|---|---|
| Martinez-Diaz et al., *Frontiers in Psychology* 12, 21 Apr 2021 — [Victim's Perspective of Forgiveness Seeking Behaviors After Transgressions](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.656689/full) | 450 Spanish adults recalling a deep personal offence; offender was a romantic partner in 19.6% of cases. Separates forgiveness-seeking into four dimensions — apologies, restorative action, relational caring, diverting strategies (excuses, justification, avoidance). Argues apologies are what the initial stage needs, while caring behaviour and restorative action work later, once the emotional impact has dropped. Diverting strategies can placate a victim without restoring relationship quality. | Pass — it is about repair after a transgression | Pass — the sequencing claim is load-bearing only for a post about when to make the gesture | Open access, full text read |
| Lewicki, Polin & Lount, *Negotiation and Conflict Management Research* 9(2) 177–196, May 2016 — [An Exploration of the Structure of Effective Apologies](https://encompass.eku.edu/fs_research/92/) | Two studies of apology structure. Apologies containing more of six defined components were rated more effective than those with fewer, and the components were not weighted equally. | Pass — apology mechanics | Pass | **Abstract only.** The EKU repository record carries the abstract and links out to a paywalled Wiley full text. The widely-reported ranking of individual components is deliberately **not** claimed in the post, because the abstract does not state it. |
| Vennum, Lindstrom, Monk & Adams, *JSPR* 31(3) 410–430, 2014 — ["It's complicated": cycling in cohabiting and marital relationships](https://extension.usu.edu/hru/files/Vennum-et-al-2014-Relationship-cycling-and-outcomes.pdf) | Nationally representative US sample of 323 cohabiting and 752 married couples. Over one-third of cohabiters and one-fifth of spouses had experienced a breakup and renewal in their current relationship. Cyclers were at greater risk of further cycling, reported greater uncertainty about the relationship's future, lower satisfaction, and greater constraints to ending it permanently. Also notes prior work putting cycling at 30–50% of young adult daters. | Pass — this *is* the ex-girlfriend section | Pass | Green open-access PDF hosted by Utah State University Extension; full text read |
| University of Missouri, 18 Jan 2022 — [On again, off again relationships…](https://showme.missouri.edu/2022/on-again-off-again-relationships/) | Kale Monk's team surveyed 545 individuals; ~34% reported relationship cycling. Prior breaking up and getting back together was associated with more symptoms of depression and anxiety across a 15-month period. Monk also lists less satisfaction, poorer communication, less commitment and more intimate partner violence as correlates. | Pass | Pass | Open; university news item reporting its own faculty's peer-reviewed work (not itself peer-reviewed) |
| Rezaei, S., *Indian Journal of Mental Health* 8(2) 178–185, 2021 — [Of Persistence and Pursuit: Unwanted Pursuit Behavior in Indian Young Adults](https://indianmentalhealth.com/pdf/2021/vol-8-issue2/12.%20Original%20Research%20Article_Of%20Persistence%20and%20Pursuit.pdf) | 104 young adults aged 20–30 in Mumbai, all in ongoing relationships, asked what they would do if the relationship ended and they wanted to rekindle it. ~93% would engage in at least one unwanted pursuit behaviour. 71.2% exaggerated expressions of love, 70.2% unwanted messages, 68.3% monitoring her behaviour, 55.8% unwanted gifts, 52.9% covertly obtaining private information. Aggressive forms were rare (0% physically hurting). No significant male–female difference (t = .047, p > .05, df = 102). Anxious attachment a significant predictor. | Pass, and it is an Indian sample | Pass | Open access PDF, peer-reviewed (peer review completed 25 Jan 2021), full text read |

**Peer-reviewed and open-access:** Martinez-Diaz et al., Vennum et al. and Rezaei all qualify. **Generic context statistics used: zero.** No PIB, TRAI, Census or MEA figure appears. **Wikipedia links in the body: zero** (Wikipedia is used only for `sameAs` entity grounding in JSON-LD, which does not count against the body budget).

**Considered and dropped:** Witvliet et al., *Frontiers in Psychology* 11 (2020), "Apology and Restitution" — a good finding (restitution reduced unforgiveness more than apology alone, n = 61) but it would have put a second `frontiersin.org` URL in this post, and with 29 sibling agents drafting concurrently against a three-post domain cap that is an unnecessary risk. The `english2010information.pbworks.com` copy of Dailey's 2011 *Journal of Social Psychology* paper was also dropped: it is a course-wiki upload with no evidence of being an authorised green copy.

---

## Phase 0 — first-party facts used

All labelled **platform-wide** or **sampled on /love-gf** in the body prose, never attributed to proposal pages.

- 4,567 pages since 12 March 2026 across 16 page types (opening paragraph)
- `/apology-dashboard` #2 — 1,118 pages, 24.5% (opening paragraph, table, takeaways, FAQ)
- `/love-gf` #1 — 1,138 pages, 24.9%; 16,362 views, 31.8% of views (table, ex-girlfriend section)
- 48.9% of views on a phone, 25,167 of 51,504 (H3 5)
- 39.9% password-protect before sharing, 1,822 of 4,567 (objection section)
- Median first-save → last-edit 6.4 hours, sampled on /love-gf, n = 1,138 (timing section)

The Raksha Bandhan lead-time block was **not** used — out of bounds for this batch.

---

## Phase 5 — links and targeting

- **Internal (3):** `/proposal` (mandatory, placed after the five-step section establishes when it is appropriate), `/apology-dashboard` (the genuine alternative, and for this keyword the better product — stated plainly in the body, the table and an FAQ), `/love-gf` (for "will you be my girlfriend again", inside the ex-girlfriend section). All relative, all from `TEMPLATE_LINKS`, none in the opening paragraph.
- **Outbound:** five, one per source, each placed inline at the sentence stating the fact and repeated in the `## Sources` H2 with publication dates.
- **structuredData:** an `@id`-matched `BlogPosting` enrichment block on `…#post` carrying `about` (Marriage proposal, Q1057944), `mentions` (Forgiveness Q537963, Apology Q13197791, Breakup Q100926628, Conflict resolution Q1194317 — all verified against the Wikipedia API on 2026-09-17), and `citation` mirroring the five sources one-to-one; plus an `ItemList` mirroring the five H3s in order. No `AggregateRating`, `Review` or `HowTo`.

---

## Phase 6 — audit summary

50/50 checklist items accounted for, `passed ∩ failed = ∅`, 49 passed, 1 failed.

**The failure:** *metaTitle 50–60 characters, exact keyword in the first five words (hard cap 70)*. The metaTitle is 56 characters and opens "Propose to Your Girlfriend Again", but the byte-exact string `how to propose girlfriend again` is ungrammatical English and cannot sit verbatim in a title without reading as keyword stuffing to both a person and a machine. The exact string is present verbatim in the slug and in `article.keywords`.

**Structural limitations** (in `batchMeta.structuralLimitations`, never in `failed`): no proposal-specific data exists; the pricing block is empty so no price, free-tier or paid-tier claim appears anywhere; the batch source-cap count could only be verified partially because sibling files were still being written; and the Lewicki paper was read as an abstract only.

**On the "respect the no" requirement:** the post never advises persistence against a stated no. `## If she has already said no` tells the reader to stop, and the FAQ answers on re-asking, on proposing over a link, and on what to send when she has asked for space all resolve the same way. The Rezaei prevalence figure is used specifically to undercut the reader's sense of being the exception.

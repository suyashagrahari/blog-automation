# Research brief — raksha bandhan message for step brother or step sister

- **Slug:** `raksha-bandhan-message-for-step-siblings` (checked against Strapi 2026-08-19: `filters[slug][$eq]` returns `data: []`, so free)
- **Batch:** `2026-08-19-rakhi-3` · asset type: informational / blog · fresh keyword, not from the original sheet
- **Phases run here:** 1–7. Phase 0 was already done by the batch owner; `npm run facts` was **not** re-run (facts.md generated 2026-08-18).
- **Siblings on disk when I checked (2026-08-19, ~13:00):** `celebrate-raksha-bandhan-siblings-different-cities.json`, `make-raksha-bandhan-card-online-with-name.json`, `raksha-bandhan-wishes-in-bengali.json`. Their source domains — demographic-research.org, pib.gov.in, newsonair.gov.in, hbs.edu, research.google.com, englelab.gatech.edu, wu.ac.at, ics.uci.edu, ccsenet.org, questjournals.org, en.banglapedia.org, w3.org, unicode.org — are all avoided below, as is the batch ban list.

---

## Phase 1 — SERP analysis

Two searches were run on 2026-08-19: the keyword verbatim, and a Boolean variant forcing `"step brother" OR "step sister"` alongside `blended family`. Both returned the same set of generic sibling-wishes listicles. There was no AI Overview and no featured snippet on either query; the engine's own summary for the second search conceded that the results "don't contain specific content focused exclusively on step-siblings or blended family dynamics".

Top 5 organic results, each fetched in full and measured with a script (visible text, tags stripped):

| # | Page | Words | Heading structure | Where the answer sits | Data cited | Format | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | adobe.com/express/discover/wishes/raksha-bandhan | 3,505 | H1 + 10 H2s, all "wishes for every sibling bond" style | No direct answer; 120-word festival intro before the first wish | None dated; one line of festival history, no source | Long-form prose + wish lists, no table, no FAQ, no FAQPage schema | Third person, brand-warm, uniform sentence length | Adobe Express card/template signups |
| 2 | parenting.firstcry.com/articles/raksha-bandhan-messages-quotes-and-wishes/ | 4,329 | H1 + 7 H2s split by brother / sister / long-distance brother / long-distance sister | Wishes start immediately, but no answer to "what should I say" | None; "Updated 18/07/2026" byline only | Numbered wish lists, no table, no FAQ, no schema | Third person, generic, heavy ad interleaving | Ad impressions + FirstCry commerce |
| 3 | rakhibazaar.com/rakhi-messages-wishes-quotes.aspx | 1,666 | H1 + 4 H2s (wishes, quotes, greetings, memes) | Two-sentence festival definition, then lists | None | Bulleted lists, an FAQ block, no FAQPage schema | Third person, promotional, "shower his sister with gifts" | Rakhi hamper sales to NRIs |
| 4 | babyorgano.com/blogs/.../happy-raksha-bandhan-wishes-for-everyone | 2,675 | H1 + 11 H2s segmented by audience (brother, sister, Gen Z, uncle/aunty, kids 4–10, colleagues, Hindi) | Lists from the top | None | Lists + Hindi block with translations, FAQ section, no schema | Second person, casual, emoji-adjacent | Ayurveda product sales |
| 5 | skillmatics.in/blogs/blog/50-rakhi-wishes-quotes-for-your-siblings | 2,668 | H1 + 7 H2s (funny, brother, sister, captions, baby sibling, conclusion, FAQs) | Key-takeaways box, then lists | None | Lists + FAQ, no table, no schema | Second person, playful | Toy sales |

**The count that matters.** Across those five pages — 14,843 words of rakhi message copy in total — the strings `step-brother`, `step-sister`, `step-sibling` (in any spacing or hyphenation) appear **0 times**, and `half-sibling` appears **0 times**. So **0 of 5 top results address the query literally.** The nearest miss is BabyOrgano's "From Cousin Brother" block, whose line "we didn't grow up under one roof, but our bond never once felt like a lesser version of family" is the only sentence in the whole SERP that would survive contact with a step-sibling.

Every one of the five is on the batch competitor list, so none is cited or linked.

---

## Phase 2 — Gap analysis

**Table stakes (all five carry them):** ready-to-send message text the reader can copy; segmentation by who the recipient is; a short definition of Raksha Bandhan; the 2026 date; some acknowledgement of distance.

**The gap:** the entire step-relationship. Nobody writes a message for someone you did not grow up with and did not choose, which means the default line every page supplies — protection since childhood, "since forever", "from the day you were born" — is factually false for the reader's situation and is the main failure mode. Nobody grades messages by *how long you have been family and how old you both were when it happened*. Nobody treats the first Raksha Bandhan after a remarriage as a moment where the ritual can read as an imposition. Nobody separates step from half. Nobody handles the case where the relationship is warm but the remarriage is still contested by other relatives, or the case where there is no relationship and a short courteous note is the honest ceiling. Nobody says to ask before tying a rakhi.

**Stale data:** not applicable in the usual sense — none of the five cites a statistic of any kind, dated or otherwise. There is no stale number to supersede, only an absence of evidence to fill.

**Unanswered questions the pages raise:** they all extend rakhi to cousins, friends and colleagues but stop before step-siblings, and none says what to do when the extension is contested by the family.

**Fan-out sub-queries → H2 mapping:**

| Sub-query | H2 |
|---|---|
| What do I write to a step-brother/step-sister? | Six Raksha Bandhan messages, graded by how long you have been family |
| Why do normal rakhi messages feel wrong here? | What a step-sibling rakhi message has to do that a standard one does not |
| It's our first Raksha Bandhan — what now? | The first Raksha Bandhan after the merge: offer, do not assume |
| Should I tie a rakhi to a step-sibling / can I ask? | same H2 |
| Is a half-sibling the same as a step-sibling? | Step-sibling and half-sibling are not the same thing |
| How long should the message be for my situation? | What to send in four common step-sibling situations |
| What if we aren't close / are estranged? | When a message is the wrong move, and where SubhSandesh loses |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that grades rakhi messages by how long you have been family and how old you both were when the households merged — the axis stepfamily research actually uses (opportunity, and the first four years) and that 0 of 5 ranking pages mention even once — anchored on 2,718 SubhSandesh pages at 12.0 views each, which is why the message has an audience beyond its recipient.

---

## Phase 3 — Sources

Research lane held: **stepfamily and blended-family research — step-sibling relationship quality, the timeline over which stepfamily bonds form, and ritual in stepfamilies.** No material from other agents' lanes (chosen family, bereavement, migration, in-laws, Bengali festival history, caption brevity, IKEA effect, legibility, Army postings, sister-to-sister ritual) is used.

Search method: OpenAlex `title_and_abstract.search` with `is_oa:true` for `stepsibling`, `stepsiblings`, `stepfamily sibling`, `stepfamily ritual`; plus targeted repository searches. Deliberately avoided the banned aggregators (doi.org, PMC, EuropePMC, PLOS, Frontiers, Cambridge, arXiv) and cited each publisher's own URL.

| # | Source | Verified claim | Published | Access |
|---|---|---|---|---|
| 1 | digitalcommons.unl.edu/commstudiespapers/117 — Braithwaite, Baxter & Harper, *Communication Studies* 49(2) | In-depth interviews with **53 members of blended families**; rituals that were successfully enacted "pay homage to both old and new families", while imposing the new over the old stalls them | 1998 | Open, full text hosted by UNL. Abstract page read and quoted; full PDF not read |
| 2 | digitalcommons.unl.edu/commstudiespapers/100 — Braithwaite, Olson, Golish, Soukup & Turman, "Becoming a Family" | **980 pages** of stepparent/stepchild interview transcripts; studied the **first four years** of family development across **five developmental pathways** | 2001 | Open, full text hosted by UNL. Abstract page read; full PDF not read |
| 3 | mospace.umsystem.edu/xmlui/handle/10355/94339 — Landon, MS thesis, University of Missouri | Grounded theory; **25 stepchildren** reporting on **71 stepsiblings**; conflict required **opportunity (shared time, shared space, ability to interact)**, intimacy and similarity — and did not occur with every stepsibling | 2020-05-01 | Open access (CC BY-NC-ND; cited and linked only, nothing reproduced). Abstract read |
| 4 | digitalcommons.usu.edu/etd/2422 — Cannon, MS thesis, Utah State University | 139 sampled, 90 returned (65%), **N=75 usable**; **being informed about the parental remarriage was significantly related** to feelings towards stepsiblings at the time; post-marital residence and gender had **no discernible effect** on closeness; months in a single-parent family showed a positive but non-significant trend | 1986-05 | Open, full text hosted by USU. Abstract read |
| 5 | digitalcommons.usu.edu/extension_curall/1494 — Allgood, Higginbotham, Crook & Skogrand, USU Extension FR/Marriage/2007-01pr | "Changing too many rituals can increase stress and reduce the sense of belonging"; "a newly remarried couple will often plan things to promote closeness, but that sense of closeness may generate conflict with teenagers"; respect a child's no but "continue to invite them" | 2007-04 | Open. **Full PDF text extracted and read** |

- Subject test: all five are about stepfamilies, step-siblings or stepfamily ritual. **5/5 pass.**
- Peer-reviewed / scholarly: #1 and #2 are peer-reviewed journal articles; #3 and #4 are examined graduate theses. **Pass.**
- Swap test: none could sit in a Bengali-wishes post, a card-maker post or a different-cities post. **0 pass the swap test**, as required.
- Generic context statistics: **zero used.** No PIB, TRAI, Census or MEA figure appears (a sibling post has already taken PIB, so the batch brief allots this post none).
- Domain counts inside this batch: `digitalcommons.unl.edu` 2 URLs / 1 post, `digitalcommons.usu.edu` 2 URLs / 1 post, `mospace.umsystem.edu` 1 URL / 1 post. No URL or domain shared with any sibling post; none appears in the 19 earlier rakhi posts.
- Paywalled: none. Nothing was cited from a search snippet. Two paywalled candidates were **dropped** rather than cited: Ganong, Sanner, Landon & Coleman's *Patterns of Stepsibling Relationship Development* (2022, SAGE — six stepsibling types) and de Leeuw's *Does coresidence explain the stepgap?* (2024, Wiley), both of which returned **HTTP 403** to every fetch attempt including the OA-flagged PDF link. Their findings are not used anywhere in the post. Landon's own thesis (#3) covers the same research programme and is genuinely open.

**Honest research finding worth recording:** there appears to be no open-access study of Indian step-sibling relationships. OpenAlex searches for `stepfamily India` (8 results, none on Indian step-siblings), `remarriage India` (278 results, no OA study of step-siblings), `step-parent India` and `blended family India` returned nothing usable; the one close item, a 2026 qualitative study of remarried Thiyya women in Kerala, is not open access. The post states this limitation in the body rather than implying Indian calibration it does not have.

---

## Phase 4–7 notes

- **First-party facts used (verbatim from facts.md, generated 2026-08-18):** 2,718 pages across 13 page types; 12.0 average views per page; 51.9% phone opens; 44.3% password-protect; 99.4% published; median 6.9 hours between first save and last edit. Two of them (2,718 / 13 page types, and 12.0 views) sit inside the first 150 words.
- **Known limitation, stated in `honestAssessment`:** there is no rakhi-specific first-party number, because rakhi is not one of the 13 page types. The platform-wide figures are used only for what they prove — how a shared page behaves once written — and the 12.0-views figure is load-bearing for a genuinely step-specific argument (the message has an audience beyond its recipient).
- **Body:** 1,758 words by plain whitespace split, FAQs excluded. 7 H2s, 6 H3s, one 4-row comparison table with a first-party column.
- **Internal links:** `happy-rakshabandhan-to-brother` and `templates`, both from `TEMPLATE_LINKS`, both placed in the limits section — and the post says plainly that the rakhi template is written brother-first, which is a real problem for a reader writing to a step-sister.
- **Category:** `family-and-continuity` (verified live in Strapi), because the post is about the relationship rather than the festival.
- **Wikidata QIDs verified via the Wikipedia API on 2026-08-19:** Raksha Bandhan Q10266, Stepfamily Q927143, Sibling Q31184, Ritual Q189819. No redirects, no missing pages.
- **Audit:** 48 of 50 checklist items pass; 2 recorded as failures (metaTitle differentiator, and three H3 paragraphs running to four sentences because the quoted script inside them is itself two sentences). Both are recorded in `batchMeta.auditReport.failed` with reasons rather than fixed silently.

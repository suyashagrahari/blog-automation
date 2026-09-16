# Research brief — `how to surprise someone`

- **Slug:** `how-to-surprise-someone` (verified free in Strapi: `filters[slug][$eq]` returned `total: 0`, 2026-09-16)
- **Row:** 1 of `WAVE4-PLAN.json` · category `digital-gifts-romance` · templates `/templates`, `/catch`, `/hold-my-hand`
- **Secondaries claimed:** `how to surprise anyone`, `how to surprise a person`, `how to surprise someone online`
- **Market:** India. Evergreen.

---

## Phase 1 — SERP analysis

**Source: `SERPS-WAVE4.md`, section "how to surprise someone". Engine: Brave via `scripts/serp.mjs`.**

> **Caveat that governs every conclusion below.** This SERP is **US-served**. Brave
> accepts no region parameter, and DuckDuckGo's `kl=in-en` route (used for wave 3) was
> rate-limited. It is reliable evidence of **page type** — which is what Gate 2 needs —
> and **unreliable evidence of Indian ranking order**. Nothing here was measured on an
> India SERP. No extra SERP call was made for this row.

Blog-shaped results: **10 of 10**. Zero ecommerce, zero tool pages, zero competitor
landing pages.

| # | Result | Type | What it is optimising for |
|---|---|---|---|
| 1 | wikihow.com/Surprise-a-Friend | Editorial how-to | Generality. Illustrated step list, broad audience, no data, no region. |
| 2 | r/NoStupidQuestions — "how to surprise someone when they already know" | Forum thread | A sub-question no listicle answers: surprise when the element of surprise is gone. |
| 3 | r/Lollapalooza — "creative ideas on how to surprise someone with…" | Forum thread | A single concrete logistics problem (tickets/event reveal). |
| 4 | r/AskReddit — "good ways to surprise your…" | Forum thread | Crowd-sourced idea volume. |
| 5 | r/AskReddit — "creative ways to surprise your…" | Forum thread | Novelty for its own sake. |
| 6 | r/AskReddit — "craziest way to surprise someone" | Forum thread | Entertainment, not instruction. |
| 7 | r/IWantToLearn — "IWTL how to act surprised" | Forum thread | The **inverse** query: the recipient's side. |
| 8 | r/AskReddit — "what would you do to surprise a random person" | Forum thread | Strangers, not close relationships. |
| 9 | r/AskReddit — "small surprises that you could do" | Forum thread | Low-cost, low-effort gestures. |
| 10 | r/AskMenRelationships — "how can I surprise my boyfriend…" | Forum thread | A specific recipient. |

**What the shape of that page-one actually says.** One editorial page and nine forum
threads is not a competitive field — it is a documented absence. People are asking
strangers because the one article that ranks answers a different question than the one
they have. wikiHow owns *generality* and is better resourced than this domain will be
for years, so a second "20 ways to surprise someone" is the one thing guaranteed to lose.

**Format read:** answer-first prose written to the actual question, not to a keyword,
with a stated point of view. That is what the Reddit answers give readers and what the
listicle does not.

**Where the direct answer sits in the incumbents:** wikiHow puts a method up top but no
figure anywhere. Every Reddit result buries the useful answer in a comment, which is
exactly what an answer engine has to reconstruct — and what a structured page can win.

**Tone:** wikiHow third-person and hedged; Reddit first-person, specific, opinionated,
frequently disagreeing with itself. None of the ten is written for an Indian reader.

---

## Phase 2 — Gap analysis

**Table stakes (present across the field):** what makes a good surprise; ideas that cost
little; the reveal moment; how to keep it secret.

**The gap — four things none of the ten cover:**

1. **Screening the recipient.** Not one result asks whether the person *wants* to be
   surprised. Several Reddit commenters raise it and nobody resolves it.
2. **India specificity.** Every incumbent assumes a private room, a controllable front
   door and an unshared phone. A large share of Indian readers have none of the three,
   and the midnight-wish convention is a real workaround nobody writes about.
3. **What happens after the reveal.** The field stops at the moment of opening. The
   ten minutes after has actual research behind it (social capitalization) and appears
   nowhere.
4. **First-party behavioural data.** Nobody on page one has any. All ten are opinion.

**Stale data:** there is no data at all to supersede — none of the ten cites a number.

**Unanswered questions raised and dropped:** "what if they already know?" (#2), "what if
they hate it?" (raised in comments, never answered), "how do I act surprised?" (#7 — the
recipient side, which implies readers know surprises misfire).

**Fan-out sub-queries → became H2s/H3s/FAQs:**
what counts as a surprise · do they even like surprises · what is the surprise for ·
which day · how much do they see coming · the delivery moment · the ten minutes after ·
how to keep it secret in a shared house · which delivery route leaks least · when not
to surprise someone · surprising someone who already knows · midnight timing.

**Angle:** wins by being the only post that treats "how to surprise someone" as five
decisions about a person rather than a list of ideas — screening whether they enjoy
being surprised at all, and planning for an Indian home where nobody has a private
room — using SubhSandesh's 23.9% apology-dashboard share of 4,357 pages and the 40.6%
who password-protect a page before sending it.

**Anti-cannibalisation.** `blogs/` was grepped for the subject, not just the keyword (40
of 78 files mention "surprise"). Two published siblings were read in full:

- `how-to-surprise-girlfriend-online` — five *timed steps* for one recipient (a
  girlfriend) on one channel (online). Cross-linked.
- `online-surprise-ideas-for-boyfriend` — six *ideas ranked by what the reveal does*,
  plus the three ways a link spoils itself. Cross-linked.

**The split, in one sentence:** those two are recipient-and-channel specific and idea-led;
this post is the general case and decision-led — it is about whether and how to surprise
a person at all, and it is the only one of the three that tells a reader not to.
`WAVE4-PLAN.json` records `overlapWithWritten: 0` and `mustDifferentiate: false`.

---

## Phase 3 — Sources

**Route used:** Crossref → Unpaywall → OA landing page, exactly as `BRIEF-WAVE4.md` §2
directs. Searched the *phenomenon*, not the keyword.

**Terms tried:** `surprise positive affect intensity` · `expectancy violation positive
emotion` · `savoring anticipation positive events` · `ritual celebration relationship
satisfaction` · `capitalization sharing positive events responsiveness` · `preference for
predictability control uncertainty individual differences` · `surprise emotion appraisal
unexpectedness intensity` · `gift giving recipient appreciation givers overestimate` ·
`surprise unexpectedness amplifies emotional reaction` · `surprise party recipient
reaction preference` · `uncertainty about positive event prolongs pleasure` ·
`perceived partner responsiveness intimacy daily` · `joint family living arrangement
India household composition` · `household crowding one room dwelling India urban` ·
`smartphone sharing family members India privacy` · `underestimating positive impact
random acts of kindness recipients` · `active constructive responding partner positive
news`. DOAJ was also queried with short terms (`surprise emotion`, `savoring
anticipation`, `gift giving`, `family rituals`, `celebration ritual`, `positive event
sharing`, `need for predictability`) and returned almost entirely off-topic results.

**Findings that are themselves findings:**

- **There is no open-access research on Indian household privacy or shared living space
  that survived the search.** Every India-shaped query returned zero usable OA hits. The
  India-specific section of the post is therefore grounded in first-party data and stated
  observation, **not** in a cited statistic — deliberately, rather than padded with a
  Census or PIB figure. Zero generic context statistics are used in this post.
- Several ideal papers were unreachable: `10.1002/jcpy.1446` (late gifts) and
  `10.3390/psycholint7030069` (intolerance of uncertainty) are flagged OA by Unpaywall but
  their only locations are Wiley and DOAJ, both of which returned **HTTP 403** from this
  sandbox. `10.1002/jcpy.1169` (savoring vs dread), `10.1016/j.obhdp.2010.10.008`
  (interpersonal capitalization) and `10.1016/j.jbusres.2020.10.009` (givers overestimate)
  are closed access with no OA location at all.
- **No full text was parsed for any source.** All four were read as abstract and
  metadata from their repository landing pages. This is recorded in the post's own
  Sources section and in the audit.

**The four used — all fetched and verified before citing:**

| # | Source | Domain status | What it actually says |
|---|---|---|---|
| 1 | Skavronskaya, Moyle, Scott & Schaffer (2020), *Novelty, unexpectedness and surprise: a conceptual clarification*, Tourism Recreation Research — [research-repository.griffith.edu.au](https://research-repository.griffith.edu.au/items/e0f15417-335e-4913-abd9-50b25250edfd) | Fresh domain (0 prior uses) | Surprise = mismatch between expectations and actual experience; novelty is the appraisal dimension influencing emotion *intensity*; all three concepts carry **neutral valence**. Metadata-only record. |
| 2 | Schumacher, Goukens & Geyskens (2020), *Surprise labels increase indulgent food portion size choice*, Food Quality and Preference 83:103919 — [cris.maastrichtuniversity.nl](https://cris.maastrichtuniversity.nl/en/publications/surprise-labels-increase-indulgent-food-portion-size-choice/) | Fresh domain (0 prior uses) | Four experiments; a "surprise" label with no change to product information raised chosen portion size, driven by **increased anticipated enjoyment**. |
| 3 | Schwartz, Le & Cohen (2022), *Sharing positive events: EMA of emotion regulation via social capitalization in schizotypy*, Psychiatry Research — [repository.lsu.edu](https://repository.lsu.edu/psychology_pubs/1190) | **Was at 2 of 3 at commit time — this takes the final slot.** | Defines social capitalization as the upregulation of positive emotion when positive life events are shared with others; EMA, twice daily, N=73 students screened for schizotypy. The *definition* is used; the effect size is explicitly not generalised, in the body and here. |
| 4 | Kim & Bryant (2017), *The influence of gender and cultural values on savoring in Korean undergraduates*, International Journal of Wellbeing 7(2):43–63 — [ecommons.luc.edu](https://ecommons.luc.edu/psychology_facpubs/44/) | Fresh domain (0 prior uses) | In a culture historically shaped by Confucianism, **dampening of emotion is a culturally appropriate style of regulating positive emotion**. Sample is South Korean, not Indian — disclosed in the body. |

**Subject test:** all four are about surprise, anticipation, sharing a positive moment, or
reading a muted reaction. None is "about India" or "about the internet".
**Swap test:** none would sit unchanged in another post in this batch — each is bound to a
specific claim in a specific section of this post.
**Competitors:** zero cited, zero linked.

---

## Phase 0 — first-party data gate

`content/facts.md`, measured **2026-09-15** (`npm run facts` could not be re-run — the
production-DB read is denied in this environment).

Fact usage was measured across all 78 sibling posts before choosing the opening pair. The
two most-worn openers (40.6% password in 27 openings, 4,357 pages in 58) were avoided as
the lead. The pair used in the first 150 words is **23.9% apology dashboards** (5 prior
openings) and **49.2% touch-device views** (7 prior openings), because both carry the
post's actual argument: a quarter of what people build is repair rather than celebration,
and the reveal happens on a phone other people can see.

Nine facts are used in total. **Disclosure carried in the post:** the database records
which *template* was opened, not who received it — so `/apology-dashboard` and `/love-gf`
counts are template shares, and the post frames them that way ("what people build") rather
than as recipient claims.

**Pricing:** `## Pricing (fill in by hand)` is empty. The post states in its own body that
it will not print a cost figure and links `/templates`. No price is stated or implied.

---

## Phase 5 — links and targeting

- **Template links (3, all in `TEMPLATE_LINKS`):** `/catch` — a letter that falls from the
  sky one line at a time, caught with the recipient's own face, *nothing ever locked*, each
  catch adds a line (used to illustrate a gradual, ungated reveal). `/hold-my-hand` — hold
  the screen 60 seconds without letting go, let go and it drains, reach the end and the
  letter unlocks (used to illustrate a mechanic that forces presence). `/templates` — near
  the closing CTA. Both descriptions were read from `app/lib/prompt.ts`, not inferred from
  the slugs; the assigned set fits this keyword and no swap was needed.
- **Blog cross-links (2, excluded from the template count by `verify-batch.mjs`):**
  `/blog/how-to-surprise-girlfriend-online` and `/blog/online-surprise-ideas-for-boyfriend`.
- **Category:** `digital-gifts-romance` as assigned. Not a festival post.
- **Structured data:** `@id`-matched `BlogPosting` enrichment on `<canonicalURL>#post`
  carrying `citation` (one-to-one with `batchMeta.sources`), `about` (Surprise, Q333173) and
  `mentions` (Gift Q184303, Savoring Q17079410, WhatsApp Q1049511) — every `sameAs` verified
  against the Wikipedia API with its Wikidata QID paired. Plus one `ItemList` mirroring the
  five H3s in order. No renderer-built type emitted without an `@id`.

## Phase 6 — audit summary

50 checklist items, all copied byte-verbatim from `references/publish-checklist.md`
(bold markers kept, wrapped lines joined with single spaces). **49 passed, 1 failed,
`passed ∩ failed = ∅`.**

The single failure is *"Slug short, hyphenated, lowercase, no stop words"* — the assigned
slug keeps "how" and "to". It is structural: the slug comes from `WAVE4-PLAN.json` and is
an exact match for the primary keyword, and stripping the stop words would break exact
match across H1, metaTitle and slug. Left failed rather than silently changed.

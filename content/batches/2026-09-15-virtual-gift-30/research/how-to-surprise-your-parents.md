# Research brief — `how to surprise your parents`

Batch `2026-09-15-virtual-gift-30`, wave 5, row 4. Slug `how-to-surprise-your-parents`.
Market: India. Evergreen. Category `digital-gifts-romance` (as assigned by `WAVE5-PLAN.json`).

---

## Phase 0 — data gate

`npm run facts` is denied in this environment. `content/facts.md` on disk is stamped
**generated 2026-09-24** — newer than the 2026-09-15 measurement the earlier briefs cite,
and none of the 86 sibling posts uses these numbers (grep for `90.9%`, `48.3%`, `5,199`,
`38.5%`, `3,843` across `blogs/` returns 0 files each). The file is the authority, so this
post cites 2026-09-24 throughout and is the first in the batch on the fresh measurement.

Facts used, verbatim:

- 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) — measured 2026-09-24
- 90.9% of started pages are actually published and shared (4,724 of 5,199) — measured 2026-09-24
- 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) — measured 2026-09-24
- Average views per created page: 11.1 — measured 2026-09-24
- Most popular creation: apology dashboard (/apology-dashboard) — 1,396 pages, 26.9% of everything created — measured 2026-09-24
- 5,199 personalised pages created since 2026-03-12, across 21 page types — measured 2026-09-24

Two land inside the first 150 words (48.3% phone opens, 90.9% published-and-shared).
Gate passes: 6 relevant facts, 2 in the opening block.

**Pricing**: `## Pricing and cost` in `facts.md` is empty. No price is stated or implied
anywhere in the post; the body says current pricing cannot be confirmed and links
`/templates`.

**Mandatory disclosure**: the database records which *template* was opened, never who
received it. Disclosed in body prose under "What these numbers cannot tell you", against
the `/apology-dashboard` 26.9% figure specifically, plus the separate caveat that the 11.1
figure counts views and not people.

---

## Phase 1 — SERP analysis

Source: `SERPS-WAVE5.md`, `## how to surprise your parents`. Engine: DuckDuckGo
`kl=in-en` — a **genuine India SERP**, not the US-served Brave route wave 4 had to caveat.
Blog-shaped: 6/10. Zero ecommerce apart from one retailer blog (igp.com), zero tool pages.

| # | Page | Shape | What it actually covers | Where the answer sits | Data cited |
|---|---|---|---|---|---|
| 1 | wikihow.com/Surprise-Your-Mother | How-to, ~3.7k raw words | H3s: "Cheap and Free Surprises", "Big Surprises". Breakfast in bed, cleaning, flowers, a party | Step list, no direct answer block | None |
| 2 | wikihow.com/Do-Nice-Things-for-Your-Parents | How-to, ~3.8k raw words | H3s: gratitude & respect, small ways to help, Parents' Day ideas, nice things to say | Step list | None |
| 3 | thetechedvocate.org/how-to-surprise-your-mother-15-steps | 15-step listicle | Mother only; syndicated wikiHow shape | Numbered list | None |
| 4 | bookmyballoons.in/blog/how-to-plan-a-party-successfully-for-your-parents | Vendor blog | Party planning: venue, decor, cake | Buried after intro | None |
| 5 | loversify.com/…surprise-your-parents-with-a-trip… | Listicle, ~2.1k raw words | H2s: set the stage, affordable destination, cheap flights, budget stays, cost-saving activities, involve siblings | Buried | None |
| 6 | wikihow.life/Have-a-Surprise-Party-for-Your-Mom | How-to | Mother only, party logistics | Step list | None |
| 7 | stylesatlife.com/articles/gifts-for-parents | Product listicle | Physical gift ideas | Listicle | None |
| 8 | igp.com/blog/celebrate-special-moments-with-parents | Retailer blog | Retailer inventory framed as moments | Listicle | None |
| 9 | familius.com/how-to-throw-your-parents-an-unforgettable-surprise-party | Short blog, ~780 raw words | Surprise party logistics | Short | None |

**Tone across the set**: second person, imperative, US/UK domestic assumptions, no numbers
anywhere. Not one page cites a study, a statistic or a dated source. Competition is real
editorial (wikiHow holds 1, 2 and 6), but it is undifferentiated, un-sourced and
co-presence-assuming editorial.

---

## Phase 2 — gap analysis

**Table stakes** — present on nearly every page, so this post must acknowledge them:
a surprise needs planning; the gesture matters more than the spend; involve siblings;
pick a moment; do something they would not do for themselves.

**The gap — four things nobody on this SERP covers:**

1. **Every page assumes you are in the room.** Breakfast in bed, a cleaned kitchen, a
   surprise party, a booked trip. The searcher who has moved city for work — which is the
   ordinary Indian case — is not served at all.
2. **The recipient's phone fluency is never mentioned once.** No page asks whether the
   parent can open what you send. This is the single biggest cause of a digital gesture
   failing, and it is invisible to all ten results.
3. **Six of the ten pages are about a mother.** Nothing addresses two parents, with
   different tastes, different tech comfort and different relationships to the sender.
4. **Nobody covers the case where the parents are together when it opens** — one phone,
   two people, everything read aloud.

**Stale data**: none — there is no data to be stale. Every page is opinion.

**Unanswered questions the SERP raises and drops**: what if they do not reply; how to
thank a parent without it reading as an obligation being settled; what to do when one
parent is the "phone parent" and the other is not.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| will my parents be able to open the link I send | What actually opens on a five-year-old Android |
| should I surprise one parent or both | Send it to one parent, to both, or to the family group |
| how do I surprise both parents at once | When they are in the same room and one phone is between them |
| should I password-protect it | The one default to change before you send |
| what kind of online surprise works for parents | Which pages survive the move from a partner to two parents |
| how do I say thank you to my parents without it sounding forced | Warm without romance, grateful without an invoice |
| is a digital surprise better than a call or a parcel | What it compares to, by what your parents have to do |
| when is a surprise a bad idea for parents | When you should just call instead |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that treats a
surprise for parents as an *opening* problem rather than an idea problem — what survives
the WhatsApp in-app browser on an old Android, one parent or both, and what changes when
two people with different tech comfort share one screen — grounded in the 48.3% phone-open
rate and the 38.5% password default measured across 5,199 pages on 2026-09-24.

---

## Anti-cannibalisation

`WAVE5-PLAN.json` records `overlapWithWritten: 0`, `nearestWritten: null`,
`mustReadSibling: null`, `slugCollision: false`. Strapi returns `[]` for the slug, so it is free.

Grepped `blogs/` for the **subject**, not the keyword. Three files mattered:

- **`long-distance-gift-for-mom.json`** (published, secondaries include *long distance gift
  for parents*). This is the real adjacency and it was read in full. It covers: a distant
  mother, which templates survive partner→parent, the password step as a barrier for her,
  and a short "Dad, and both parents on one page" section. **The split:** that post is a
  *gift* post for one distant mother and organises itself around distance; this one is a
  *surprise* post about two parents and organises itself around the mechanics of opening —
  the in-app browser, one screen between two people, who to send it to, and when to call
  instead. It is cross-linked from the Rewind section, where it is also cited for the
  judgement this post agrees with (Rewind's couple-ending does not fit one parent).
- **`how-to-surprise-someone.json`** (nearest claimed keyword, stemmed similarity 0.50).
  Generic, five-decisions framing, no recipient. No overlap in H2s.
- **`how-to-surprise-mom-on-her-birthday`** — the in-flight wave-5 sibling. **Not on disk at
  drafting time** (checked twice). Handled by construction: no H2, H3, FAQ or secondary
  keyword in this post targets a mother alone or a birthday. Every section is written for
  two recipients, and the mother-only case is explicitly handed off to the mom post's
  territory rather than answered here.

---

## Phase 3 — sources

Route used: **Crossref → Unpaywall → OA landing page**, exactly as BRIEF-WAVE5 §4
prescribes. Search terms tried, phenomenon not keyword: `intergenerational family ritual
older parents`, `filial piety gift giving adult children`, `older adults smartphone
adoption barriers`, `migrant adult children parents communication technology`,
`grandparents video call family communication`, `digital literacy older adults India`,
`WhatsApp older adults family communication`, `family rituals celebration wellbeing`,
`ageing parents smartphone use India`, `intergenerational ambivalence gratitude parents`,
`gift giving obligation reciprocity family`, `expressing gratitude to parents wellbeing`,
`touchscreen usability older adults interface`, `elderly India ageing migration left behind
parents`, `older adults password authentication usability`, `warm experts older adults
digital help family`, plus DOAJ short queries (`older adults WhatsApp`, `digital divide
elderly`, `smartphone user interface older adults`, `intergenerational communication
technology`, `transnational family communication`).

**Four sources, all domains previously unused in this batch** (checked against
`SPENT-SOURCES.json` `domainsAtCap` and `domainsAtTwo`, and against sibling `sources`
arrays):

| # | Source | Domain | Published | What it supports | Verified how |
|---|---|---|---|---|---|
| 1 | Wong, Ibrahim, Hamid & Mansor, "Mismatch Between Older Adults' Expectation and Smartphone User Interface", *Malaysian Journal of Computing* | journal.uitm.edu.my | 2018-12-01 | 80 older adults; task success 83.44% voice call, 70.16% phonebook, 63.13% Play Store install, 60.42% WhatsApp; majority had never downloaded an app | Landing page fetched and abstract read on-page |
| 2 | Martinez, Olsson & Viscovi, "Family matters – warm experts, older adults and social support for learning", *Human Technology* | ht.csr-pub.eu | 2025-05-28 | n=22 interviews aged 70–94 + survey n=1,610 aged 65–90; children are mainly the "warm experts"; more frequent family contact → more and better learning support | Landing page fetched and abstract read on-page |
| 3 | Çakıcı, "WhatsApp Usage Practices of Older Adults in Istanbul: A Qualitative Study", *İletişim Çalışmaları Dergisi* | icd.yeniyuzyil.edu.tr | 2026-01-27 | n=40 aged 65+; predominantly preferred text messaging; limited status use over privacy; family members support learning | Landing page fetched (title/author/PDF only, **no abstract served**); abstract verified via publisher-deposited Crossref record for DOI 10.66009/0.2026.8 |
| 4 | Huangfu & Nobles, "Intergenerational support during the rise of mobile telecommunication in Indonesia", *Demographic Research* | demographic-research.org | 2022-06-14 | Indonesia 1997–2014, survey matched to mobile signal coverage: mobile arrival increased parent–child contact but had little effect on material transfers | Landing page fetched and structured abstract read on-page |

**Subject test**: all four are about older adults, their phones, or intergenerational
contact — the exact phenomena the post is about. None is "about India" or "about the
internet".

**Swap test**: none survives a swap. Task-success rates for 65+ users, the warm-expert
finding, a 65+ WhatsApp study and mobile-era intergenerational contact are meaningless in
a girlfriend, boyfriend or best-friend post, which is what the other 86 posts in this batch
are about.

**Generic context statistics**: zero. No PIB, TRAI, Census or MEA line appears.

**Reading depth**: **every source is an abstract-and-metadata read.** PDFs do not parse in
this environment and no full text was retrieved. Disclosed in body prose, not only here.

**Attempted and abandoned**, recorded so the next agent does not repeat them:
`aging.jmir.org` returns HTTP 202 with a zero-length body; `link.springer.com` serves a
client challenge; `scitepress.org` refused connection, which cost a very well-matched paper
("Password Authentication for Older People: Problems, Behaviours and Strategies",
10.5220/0013299800003938, 2025) that would have been the ideal citation for the password
section; `ejournal.uinsalatiga.ac.id` returns 403; Unpaywall returned HTTP 500 on
10.30598/baileofisipvol2iss1pp27-38. The password recommendation therefore rests on
first-party data and the in-app-browser argument alone, with no external citation.

---

## Phase 5 — links and targeting

- **Template links (3)**: `/watch` (Watch — a video given its own page: real player, channel
  row, clickable chapters, pinned comment), `/rewind` (Rewind — a year as a story you tap
  through, numbers worked from one date, ending on which couple the two people are),
  `/templates` (in the closing pricing-decline sentence). All three exist in
  `TEMPLATE_LINKS` in `app/lib/prompt.ts`; each description is taken from that file, not
  from the slug.
- **Rewind is used against the grain and honestly.** Its couple-ending is wrong for one
  parent — the mom post says so and this post agrees in print — and right for two, run from
  their wedding date. That is the clearest expression of this row's lane.
- **Blog cross-link (1)**: `/blog/long-distance-gift-for-mom`, placed in the Rewind section
  where it is earned. Per BRIEF-WAVE2 §3 this does not count against the 2–4 template-link
  item.
- **Category**: `digital-gifts-romance`, as assigned. Verified live against the Strapi
  categories endpoint. Noted for the record: `family-and-continuity` is arguably the better
  semantic home for a parents post, but the plan assigns `digital-gifts-romance` and the
  batch's stated aim is to concentrate this cluster there, so the assignment stands.
- **Slug**: `how-to-surprise-your-parents` — checked live, `data: []`, free.
- **Zero competitor links.** No page from `BRIEF.md` §1, `BRIEF-WAVE2.md` §0 or
  `BRIEF-WAVE3.md` §1 is cited, linked or paraphrased. The four SERP pages read in Phase 1
  informed the gap analysis only.

---

## Phase 6 — audit summary

50/50 checklist items accounted for, `passed ∩ failed = ∅`, 49 passed, 1 failed.

The single failure is *"3–6 outbound links, all fetched and verified to contain the cited
fact"*: four outbound links is in range, but only three landing pages served the cited fact
as HTML. `icd.yeniyuzyil.edu.tr` publishes title, author and a PDF link only, and PDFs do
not parse here, so that paper's abstract was verified through its publisher-deposited
Crossref record instead. It closes when a host serves that abstract as HTML, or when PDF
extraction becomes available in this environment.

Word count 1,789 (plain split, FAQs excluded — they live in `article.faqs` and the
renderer-built FAQPage only). 10 FAQs, none restating a body heading.

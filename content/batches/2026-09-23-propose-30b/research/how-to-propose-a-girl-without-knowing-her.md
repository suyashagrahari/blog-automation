# Research brief — `how to propose a girl without knowing her`

- Batch: `2026-09-23-propose-30b` (wave 3, propose/proposal territory)
- Slug: `how-to-propose-a-girl-without-knowing-her` — verified free in Strapi on 2026-09-23 (`filters[slug][$eq]` returned `[]`)
- Category: `modern-romance` (confirmed present in the live Strapi category list)
- Band: under-300 EST. Low volume.

---

## Phase 0 — first-party gate

Facts taken verbatim from `content/facts.md` (regenerated 2026-09-23). Four used:

| Fact | Where it sits |
|---|---|
| 5,061 personalised pages created since 2026-03-12, across 20 page types | First 150 words |
| Most popular creation: apology dashboard (/apology-dashboard) — 1,347 pages, 26.6% of everything created | First 150 words, and again in the objection block |
| 38.7% of creators password-protect their page before sharing it (1,961 of 5,061) | First 150 words, and the comparison table |
| 91.2% of started pages are actually published and shared (4,615 of 5,061) | Comparison table |

**Every one is labelled platform-wide across all 20 page types in body prose**, because no
proposal-specific breakdown exists. The `/love-gf` 1,138-page / 24.9% figure from waves 1–2 is
out of date and is not used anywhere. The Raksha Bandhan lead-time block is out of bounds for
this batch and is not used. The pricing block is empty, so the post states no price, no free
tier, no paid tier and makes no cost comparison.

---

## Phase 1 — SERP, measured 2026-09-23

One WebSearch call against the exact keyword. **WebSearch is US-served, so the India SERP may
differ.** Composition of the returned result set:

| # | Result | Type |
|---|---|---|
| 1 | PriceScope community thread ("get my girlfriend to the spot without her knowing") | Jewellery forum, wrong intent |
| 2–7, 10 | Seven separate Quora question threads | User-generated Q&A |
| 8 | Wikipedia, "Wedding traditions in Iraq" | Unrelated |
| 9 | HubPages relationships forum thread | User-generated forum |

**No page on the measured result set is a purpose-built article on this question.** The SERP is
also split by a second intent — surprise-proposing to an existing girlfriend "without her
knowing" — which is a different query wearing the same words.

**No ranking page was fetched.** Nothing in the post therefore describes what any competing page
says, claims or omits. The only claims made about the SERP are about its composition, which is
what was actually measured.

---

## Phase 2 — gap and angle

**Table stakes** (inferred from the query, not from fetched pages): what to say first, how to
tell if she is interested, whether to message or speak, what to do after a no.

**The gap.** The query contains its own answer and nobody says it. A proposal is a request for a
decision; a stranger has no basis to make it. Every result either sells a technique or answers a
different question. The useful page states the verdict in the first 150 words and then answers
the question actually underneath it — *how do I get to know her* — with a sequence and numbers.

**Fan-out sub-queries → H2s.**

| Sub-query | H2 |
|---|---|
| What am I actually asking her? | What a proposal to a near-stranger actually asks her to do |
| Can she tell anything about me? | How much anyone can actually tell about a stranger |
| What do I do instead? | Five steps from stranger to an ask that is fair to her |
| Where is the line? | The things that turn interest into something else |
| Message, page, or just talk? | How big an ask each route really is |
| Will a big gesture help? | Why an elaborate page reads as alarming rather than romantic |
| Should I send anything at all? | When SubhSandesh is the wrong choice, and when a page finally fits |

**Angle.** Wins by being the only post that answers this query with "don't, not yet" and then
answers the real question underneath it, pairing zero-acquaintance accuracy evidence with the
interaction evidence, grounded in a platform where the most-built of 20 templates is an apology.

---

## Cannibalisation — how this differs from the two named siblings

| | `propose-message-for-crush` (wave 2) | `proposal-website-for-crush` (wave 2) | **This post** |
|---|---|---|---|
| Reader | A crush you already know | Someone deciding what page to send | A stranger or near-stranger |
| Question answered | What to send, and when to send nothing | Which template is the right size of ask | Whether to ask at all, and what to do instead |
| Research lane | Unrequited love (Bringle; Bohns & DeVincent) | Privacy calculus, disclosure | **Zero-acquaintance judgement, familiarity and acquaintance formation** |
| Sources | scholarworks.indianapolis.iu.edu, ecommons.cornell.edu, mha.gov.in, journals.sagepub.com ×2 | cyberpsychology.eu ×2, nomos-elibrary.de, researchrepository.wvu.edu, ijoc.org | sas.rochester.edu, kar.kent.ac.uk, onlinelibrary.wiley.com, osf.io, ncrb.gov.in |
| Legal point | BNS s.78 via the MHA PDF | — | BNS s.78 stated in own words, cited to the **NCRB** bare act PDF, not the MHA URL |

**Zero source overlap with either sibling.** Both siblings explicitly exclude the stranger case;
this post does not re-cover the crush case or the template-choice case, and links them only
through the honest routing (`/date-invitation` for a real acquaintance, `/apology-dashboard`
for a repair).

---

## Phase 3 — sources

Search budget: 5 WebSearch calls used (1 SERP, 4 research). `findpapers.mjs` run for all five
lane queries in the task prompt. OpenAlex and Semantic Scholar search both returned 429 from
this machine, as the BRIEF predicts; DOAJ returned 403. Crossref worked throughout and OpenAlex
single-work lookup by DOI worked where search did not — that is how the Kent green copy was
found.

`capcheck.mjs` was run before choosing sources and again immediately before saving the JSON.
None of the five URLs or five domains appears in the 194 banned wave-1/2 URLs or in any cap
list. The four capped domains (`pmc.ncbi.nlm.nih.gov` / `europepmc.org`, `archive.org`,
`journals.plos.org`, `dsal.uchicago.edu`) are not cited, and neither is any crowded publisher
from the source-cap race list.

1. **Reis, Maniaci, Caprariello, Eastwick & Finkel (2011)**, *Familiarity Does Indeed Promote
   Attraction in Live Interaction*, JPSP — green OA copy at `sas.rochester.edu`, PDF fetched and
   read in full. Study 2: 110 dyads of previously unacquainted students randomly assigned to
   one, two, four, six or eight chats of 10–15 minutes. Dyads in which at least one person
   desired further contact: 17.6% / 41.2% / 52.4% / 51.6% / 62.5%. Attempted contact: 11.1% →
   31.3%. **Same-sex pairs, deliberately outside a dating context** — stated in the body.
2. **Horsham et al. (2025)**, *Does learning more about others impact liking them?*, Royal
   Society Open Science, CC BY — green copy at Kent Academic Repository, PDF fetched and read.
   N = 801; belief that knowledge predicts liking replicated (h = 0.57–0.76), but number of
   traits known did not influence liking (r = −0.05 to 0.06) or perceived similarity (d = 0.00).
3. **#Insta personality (2022)**, *Journal of Personality* — 102 Instagram users judged by 100
   unacquainted observers; averaged-observer accuracy r = .44 (extraversion) to r = .25
   (conscientiousness). **Publisher page returned HTTP 403 to every fetch attempt; the figures
   were verified against the publisher-deposited abstract via the Crossref API. Full text not
   read.**
4. **"Not what you were born with" (2026)**, PsyArXiv preprint, CC BY — abstract fetched from
   the OSF API. Three pre-registered studies, US and Chinese samples, N = 3,734; snap judgements
   use a small subset of cues, largely controllable ones (action, clothing) over facial
   structure. **Not peer reviewed** — disclosed in the body and the audit.
5. **The Bharatiya Nyaya Sanhita, 2023, s.78** — NCRB-hosted bare act PDF, fetched, 237 pages,
   s.78 text read at page 115 and the section numbering cross-checked against the arrangement of
   sections at page 6. Note: the **PRS bill** PDF numbers stalking as clause 77 and was rejected
   for that reason; the enacted act numbers it 78.

Subject test: sources 1–4 are all directly about acquaintance formation and what strangers can
infer — the post's actual subject. Peer-reviewed and open access: 1 and 2. Generic context
statistics: none. Wikipedia in the body: none (entities are grounded in `about`/`mentions` only,
all six verified against the Wikipedia API with paired Wikidata QIDs).

---

## Ethical constraints — what was refused

The page names, plainly and without lecturing, six things not to do: approaching someone who has
given no signal and persisting; following, waiting, or engineering repeated coincidences;
approaching her somewhere she cannot leave (moving bus, mid-lecture classroom, a workplace where
the reader is senior); sending a friend to make the case; monitoring her accounts; and
contacting her again after one clear no.

Nothing in the post supplies an opening line designed to overcome disinterest, a script for
persistence, a way to engineer proximity, or any technique for converting a no. The
`/apology-dashboard` link is bounded explicitly: one apology if something unwanted was already
sent, and zero further messages of any kind if she has asked the reader to stop.

`/proposal` is linked as required and stated to be the **wrong** template here, with the reason:
the growing YES button is funny between people who know how it ends and reads as a stranger
refusing a no when it is not.

---

## Audit

48 passed, 2 failed, disjoint, summing to 50.

- *Slug short, hyphenated, lowercase, no stop words* — the assigned slug is the exact keyword and
  keeps `to`, `a` and `without`; trimming them breaks exact match.
- *3–6 outbound links, all fetched and verified to contain the cited fact* — three PDFs read in
  full and one abstract fetched from the OSF API; the Wiley page 403s, so its two figures were
  verified from the Crossref-deposited abstract instead of the page.

Both are recorded with the blocker and the condition that would close them. Batch-level
limitations are in `batchMeta.structuralLimitations`, not in `failed`.

## Honest assessment

Under-300 EST. At this volume the page is not a traffic asset. Its job is to be the correct and
safe answer that an answer engine can quote when someone asks this question of an LLM rather
than a search box, and to be the trust anchor for the rest of the propose cluster — the page
that proves this site will tell a reader no. Quora carries domain authority far above ours and
ranking cannot be predicted.

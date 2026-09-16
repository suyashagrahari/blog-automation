# Research brief — `how to surprise husband with pregnancy news`

Batch `2026-09-15-virtual-gift-30`, wave 4, row 8. Market: India. Evergreen.
Category `digital-gifts-romance`. Templates `/capsule`, `/watch`, `/templates`.

---

## Phase 0 — Data gate

`content/facts.md`, measured **2026-09-15** (`npm run facts` could not be re-run;
the production-DB read is denied in this environment — per BRIEF-WAVE4 §6).

Facts used, and why each one earns its place in *this* post rather than any post:

| Fact | Why it is load-bearing here |
|---|---|
| 40.6% of creators password-protect their page before sharing (1,767 of 4,357) | This is a post about news you are not ready to make public. The lock is the point, not a feature note. |
| 3,377 registered creators, average 1.29 pages each | People build one of these, for one moment. That matches a once-in-a-lifetime telling better than it matches a birthday. |
| Average views per created page: 11.5 | A page read by about a dozen people is the structural opposite of an Instagram announcement. This is the number that separates "tell him" from "announce it". |
| 49.0% of shared pages are opened on a phone (24,493 of 49,968 views) | If he is away from home he opens it on a small screen, at a moment you did not choose. |
| Median first save → last edit: 6.2 hours (n=1,125, /love-gf) | People come back to these before they send them. Relevant to how long a reveal actually takes to prepare. |
| Occasion-dated pages are 144 of 3,894, 3.7%; the platform is 96.3% romantic and everyday | Supports the post's core position: this is a private moment, not a calendar event. |

**Disclosure carried in the body, not only here:** the database records which
*template* was opened, never who received it. No count on this page proves a
recipient was a husband.

**Pricing:** `facts.md` `## Pricing (fill in by hand)` is **empty**. The post
states no price, implies none, and links `/templates` instead.

Gate met: six relevant facts, two inside the first 150 words.

---

## Phase 1 — SERP analysis

Source: `SERPS-WAVE4.md`, `## how to surprise husband with pregnancy news`.
**Collected on Brave and US-served** — DuckDuckGo's `kl=in-en` India route was
rate-limited (HTTP 202 anomaly page) after ~150 queries. This is reliable evidence
of **page type** and unreliable evidence of **Indian ranking order**. Recorded in
`honestAssessment`.

blog-shaped results: **5/10**. Zero ecommerce, zero tool pages, zero SubhSandesh
competitors. The cleanest ground in four waves.

| # | Page | Shape | Where the answer is | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | pampers.com — "Pregnancy Announcements to Partners: 50 Ways to Share the Big News" | 50-item listicle, 9 min read, updated 2025-11-26, editor-reviewed byline | Key Takeaways box up top, then 50 numbered ideas | None. No study, no statistic, no dated source anywhere | Key-takeaways callout, 50 H3s, "FAQs at a glance", heavy internal rail to sibling announcement articles | Warm, brand-safe, second person, US | "pregnancy announcement" hub authority across a large cluster |
| 2 | focusonthefamily.com — "20 Cute Ways to Tell Your Husband You're Pregnant" | 20-item listicle, dated 2026-05-29 | After a three-paragraph bathroom-scene intro | None | 20 H3s, scripture links (biblegateway), internal parenting links | Narrative, faith-framed, US | "cute ways to tell husband" |
| 3–6 | Four Reddit threads (r/pregnant, r/BabyBumps ×2, r/BabyBumpsandBeyondAu) | Q&A | First reply | Anecdote | Thread | Peer, unedited | Nothing — this is demand leaking |
| 7 | momlovesbest.com — "ways to tell husband pregnancy" | Listicle | Mid-page | None | H3 list | US parenting | Same listicle intent |
| 8–10 | Three TikTok videos | Video reveals | n/a | n/a | Video | n/a | Reveal spectacle |

Two pages fetched in full (`pampers.com`, `focusonthefamily.com`) and read.
Reddit and TikTok read from the SERP record only.

**None of these is a SubhSandesh competitor** (they are US parenting publishers),
but none is cited or linked either — they carry no dated, verifiable claim worth
citing, which is itself the finding.

---

## Phase 2 — Gap analysis

**Table stakes** — every editorial result covers: a list of reveal ideas ordered
by "cuteness"; props (onesie, baby shoes, pets, T-shirts, scavenger hunts); the
assumption that the husband is in the same building; a reassurance that there is
no wrong way.

**The gap — four things not one of the ten results does:**

1. **None says "don't".** Every page assumes a reveal is wanted. Not one names the
   case where a quiet, immediate, private telling is the better choice, or the
   readers for whom a staged reveal is actively the wrong idea — a previous loss,
   real anxiety, an unclear reaction.
2. **None is written for a house with other people in it.** Every idea assumes a
   private kitchen and a closable door. In an Indian joint household, privacy is
   scarce and the news reaches the whole family within hours of anyone knowing.
   The *sequence* of telling — him, then his parents, then yours, or the reverse —
   is a real social question no page addresses.
3. **None is written for a husband who is not there.** Postings, shifts and travel
   are ordinary in India. The entire ten-result set is in-person.
4. **Nobody carries a number of any kind.** Ten results, zero statistics, zero
   dated sources, zero research. A page with verified research and first-party
   usage data has no direct competitor on this query.

**Stale data:** not applicable — there is none to supersede. That absence is the
opportunity.

**Fan-out sub-queries** (each became an H2 or an FAQ): should I surprise him at
all · what counts as a pregnancy surprise · ways to tell him · which way suits my
situation · how do I do this when we live with family · who do we tell after him ·
what do we keep afterwards · when is a page the wrong tool · what if his reaction
is not what I hoped.

**Angle:** wins by being the only page on this query that gives the reader
permission not to stage a reveal at all, writes for an Indian joint household and
an absent husband, and grounds the privacy question in 4,357 real shared pages of
which 40.6% are password-locked.

---

## Phase 3 — Sources

Route used: **Crossref → Unpaywall → open-access landing page**, per BRIEF-WAVE4
§2. Every blocked host was filtered before a fetch was spent. Europe PMC and
OpenAIRE were used for discovery only (both at or near the domain cap, or
metadata-only), DOAJ returned noise on every short query tried.

**Search terms tried, in order:**
`pregnancy announcement disclosure partner` ·
`transition to parenthood news sharing couples` ·
`capitalization sharing positive news relationships` ·
`keepsake memory object life transition` ·
`capitalization perceived partner responsiveness good news` ·
`pregnancy announcement social media disclosure timing` ·
`announcing pregnancy family communication qualitative` ·
`surprise gift anticipation savoring positive affect` ·
`joint family household privacy India couple` ·
`disclosing pregnancy loss miscarriage social support` ·
`expectant fathers transition to parenthood experiences qualitative` ·
`birth announcement ritual kinship` ·
`first pregnancy news reaction partner qualitative study` ·
`communication privacy management boundary turbulence family` ·
`media channel choice delivering important personal news` ·
`good news bad news channel selection interpersonal communication` ·
DOAJ: `pregnancy announcement`, `sharing good news`, `capitalization relationships`,
`pregnancy disclosure`, `couple rituals`.

**Real finding, recorded honestly:** there is **no open-access empirical research
on how a woman tells her husband she is pregnant.** The literature on pregnancy
disclosure is almost entirely clinical or public-health framed (antenatal care
initiation, HIV status, intimate partner violence) and therefore unusable for a
post that must give no medical framing of any kind. The nearest genuine
literature is **interpersonal capitalization** — the study of sharing positive
events with a close other — and that is what this post is built on. Hosts that
would have carried the closest matches were unusable: `pmc.ncbi.nlm.nih.gov` and
`europepmc.org` are at the domain cap of 3; `escholarship.org`, `biomedcentral`,
`nature.com`, `sagepub`, `springer`, `tandfonline` and `wiley` are 403 /
bot-challenged from this sandbox; `espace.library.uq.edu.au` returned 403 on the
one paper about men's experience of pregnancy.

**Four sources cited. All four are abstract-and-metadata reads — no full text or
PDF was parsed.** Every one was fetched and verified to state what the post
claims.

1. **Choi, Hyewon (2016). "Do Happy Events Love Company? Cultural Variations in
   Sharing Positive Events with Others." University of Virginia, MA thesis.**
   `https://libraetd.lib.virginia.edu/public_view/k0698750g` — issued 2016-10-12,
   CC BY. Verified from the abstract: four studies; East Asians less likely than
   European Americans to share positive events ("capitalization attempts"), and
   the abstract attributes this to greater concern about negatively affecting
   social relationships. **The study did not include India** — the post says so
   explicitly rather than borrowing the finding for Indian readers.
   *Subject test:* about sharing good news, culturally. *Swap test:* no sibling
   post concerns telling news at all.

2. **Morey, Jennifer N. (2011). "The Sharing of and Reactions to Positive Events
   in Romantic Relationships." West Virginia University, MS thesis.**
   `https://researchrepository.wvu.edu/etd/3289/` — Spring 2011. Verified from the
   abstract: 92 couples (89 men, 95 women, aged 18–25) kept online daily logs of
   positive events for one week; perceived partner responses predicted the
   participant's relationship satisfaction even controlling for support-seeking.
   This is the single most load-bearing citation in the post: it supports the
   claim that **his response matters more than your staging.**

3. **Hsu, Tsai-chen (2010). "To Tell or not to Tell? An Examination of
   Stepparents' Communication Privacy Management." University of North Texas, MA
   thesis.** `https://digital.library.unt.edu/ark:/67531/metadc30470/` — August
   2010. Verified from the description: Petronio's communication privacy
   management theory; 15 stepfathers and 15 stepmothers interviewed in depth; the
   study identifies a **confidant dilemma** and an **accidental dilemma** inside
   shared-household family systems. Used for the joint-family section — the
   accidental dilemma is precisely what happens when private news leaks in a house
   with six people in it. **Not an Indian study and not about pregnancy** — the
   post names the mechanism, not the population.

4. **Martin, Stephanie L. (2017). "Nurturing Self: Psychotherapeutic Implications
   of Women's Reflections on the Meaning of their Cherished Possessions." *The
   Qualitative Report* 22(6).** `https://nsuworks.nova.edu/tqr/vol22/iss6/6/` —
   2017. Verified from the abstract: interpretive phenomenological study, nine
   women, three semi-structured interviews each; cherished possessions nurture the
   self by connecting with others, affirming personal experience and supporting
   the self through change. Used for the keepsake section — "supporting self
   through change" is the exact function a saved page serves after a life event.

**No generic context statistic is used.** No PIB, TRAI, Census or MEA figure
appears, because none would pass the subject test here.

**Domain-cap position at time of writing** (checked against `SPENT-SOURCES.json`
and all 78 sibling `sources` arrays): `libraetd.lib.virginia.edu` 0,
`digital.library.unt.edu` 0, `nsuworks.nova.edu` 0, `researchrepository.wvu.edu`
2 → one slot, taken. No URL here appears in any sibling.

---

## Phase 4–5 — Draft, links, targeting

- Body 1,500–1,800 words excluding FAQs. Paragraphs 2–3 sentences throughout,
  including the opening answer block.
- **No medical content of any kind.** No test timing, no symptom interpretation,
  no trimester or "when to announce" health framing, no advice about what to do
  after a positive test. The post is entirely about communication and keepsakes,
  and says so on the page.
- Template links, all from `TEMPLATE_LINKS`, descriptions taken from
  `app/lib/prompt.ts` rather than the slug:
  - **`/watch`** — "gives a video you made a page of its own: a real player, a
    channel row, clickable chapters and a pinned comment." Placed in the fifth
    way of telling, the recorded one. Carries an explicit consent note.
  - **`/capsule`** — "you both write predictions about the next year, blind to
    each other; it seals, and a year later you open it together and score every
    one." Placed *after* he knows, in the keepsake section, with the honest
    framing that it is **not** a reveal mechanism — it is a joint activity, so he
    already knows by the time it is useful.
  - **`/templates`** — browse link, once, near the close, alongside the sentence
    declining to state a price.
- **No joke template is linked.** `/challan`, `/legal-notice`, `/nutrition` and
  `/court-of-love` are jokes by design and would be a serious misjudgement on this
  subject.
- No cross-link to a sibling post: `grep -ril "pregnan"` across all 78 sibling
  blog files returns nothing, `overlapWithWritten` is 0 and `mustDifferentiate` is
  false. There is no adjacent page to reinforce.
- `structuredData`: an `ItemList` mirroring the five H3s in order, plus an
  `@id`-matched `BlogPosting` enrichment on `<canonicalURL>#post` carrying
  `citation` (all four sources, with dates), `about` (Pregnancy, Q11995) and
  `mentions` (Extended family Q721790, Self-disclosure Q2892912). All three
  `sameAs` pairs verified against the Wikipedia API; "Joint family" redirects to
  "Extended family", which is the title used.

## Phase 6 — Audit

Recorded in `batchMeta.auditReport`. `passed ∩ failed = ∅` and
`|passed| + |failed| = 50`, asserted before the file was written.

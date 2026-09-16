# Research brief — `birthday website for crush`

Batch `2026-09-15-virtual-gift-30`, wave 3, row 8. Written 2026-09-16.

---

## Phase 0 — Data gate

`npm run facts` was **not** re-run (wave 3 brief §5: the production-DB read was
denied today). `content/facts.md` as measured **2026-09-15** was used, and every
figure carries that date.

Relevant facts found — gate passes with four:

| Fact | Why it matters to this keyword |
|---|---|
| `#5 page type: birthday page for a partner (/birthday-gf) — 352 created, 8.1% of all pages — measured 2026-09-15` | Establishes that the birthday page is a real, used format, and — crucially — carries the disclosure below |
| `Average views per created page: 11.5 — measured 2026-09-15` | Reframed as a **risk** number: a page does not get read once, it gets re-opened and shown around. Nobody else in the batch uses it this way |
| `40.6% of creators password-protect their page before sharing it (1,767 of 4,357) — measured 2026-09-15` | The control lever for the audience problem |
| `Occasion-dated pages, every festival plus every wedding type, are 144 of 3,894 pages, 3.7%; the platform is 96.3% romantic and everyday pages — measured 2026-09-09` | Supports the "you do not need the birthday" argument |

**Mandatory disclosure carried in the body:** the database records which
*template* was opened, not who received it. The 352 `/birthday-gf` pages do
**not** prove a partner was on the receiving end. For a crush post that
distinction is material and it is stated in the opening block, not buried.

**Pricing:** the `## Pricing` block in `facts.md` is empty. No price is stated,
inferred or implied anywhere in the post.

---

## Phase 1 — SERP

`SERPS-WAVE3.md`, section `## birthday website for crush` (ddg-html, `in-en`,
2026-09-16). **All ten organic results are competitor product pages.** Not one
informational article, not one forum thread, not one retailer:

| # | URL | What it is |
|---|---|---|
| 1 | thegreeter.in | competitor builder homepage |
| 2 | myheartcraft.com/blog/… | competitor blog listicle |
| 3 | blinkwish.in | competitor builder homepage |
| 4 | yourlovepage.com/birthday-website | competitor product page, "for your partner" |
| 5 | blink.new/p/crush-birthday-wish-website-… | a single generated demo page |
| 6 | 2-luv.com/en/event/birthday | competitor product page |
| 7 | gifft.me/create/happy-birthday | competitor builder |
| 8 | hbday.to | competitor builder homepage |
| 9 | wishcupid.in | competitor builder homepage |
| 10 | 2-luv.com/en/create/birthday | competitor product page (same domain as #6) |

None fetched or cited — all are on the banned list in `BRIEF-WAVE3.md` §1.
Read for gap analysis only.

**What the shape of that SERP means.** Ten builders and zero articles is a
retrieval vacuum: Google has nothing informational to rank for this phrase, and
an answer engine asked "is a birthday website too much for a crush?" currently
has only vendor copy to synthesise. Note also result #4 — the highest-intent
competitor page in the set is explicitly titled *"for your partner"*. The
searcher typed **crush**; every page answers for a **relationship**. That
mismatch is the gap, and it is not a small one.

---

## Phase 2 — Gap analysis

**Table stakes** — what a competent page must still cover: what a birthday
website actually is, that no code or domain is needed, that it opens in a phone
browser, what goes on it, how to send the link.

**The gap.** Nobody addresses the only question the word *crush* introduces:
**how much is too much when the other person has not signalled back.** Every page
in the SERP is written for a recipient who already reciprocates. The searcher's
real fear is not "will this look bad" — it is "will this make things weird".

**Stale data:** none to supersede. The competitor pages cite no data at all,
which is its own finding.

**Fan-out sub-queries** (each became an H2 or H3):

- Is a birthday website too much for a crush?
- How do I send something without forcing a reply?
- Who else is going to see this?
- Should I sign it?
- Which template is safe for someone I am not dating?
- What do I write on it?
- When is the answer "do not send a website"?
- What changes if it turns out to be mutual?

**Angle:** wins by being the only post that treats a birthday website for a
crush as a calibration problem rather than a build problem — how much is too
much, how to leave an easy out — grounded in SubhSandesh's 11.5 views per page,
the 40.6% password rate, and published work on plausible deniability and
affiliation suppression.

---

## Mandatory differentiation (`mustDifferentiate: true`)

`overlapWithWritten: 4`, `nearestWritten: birthday website for girlfriend`
(`blogs/birthday-website-for-girlfriend.json`, read in full before drafting).

**That post's H2s:** what a birthday website for a girlfriend is · do you have to
code it yourself · four routes compared · four things that break it on her phone ·
where the effort shows · when it is the wrong choice. It is a **build-and-ship**
article: routes, hosting, autoplay, deadline.

**The split, in one sentence:** the girlfriend post answers *how to build and
ship it*; this post answers *how much is too much to send someone who has not
said yes yet* — the relationship stage, not the build.

No heading, table column or claim is shared. The girlfriend post is linked with
descriptive anchor text in the closing section, positioned as the one to read if
you are actually together.

---

## Phase 3 — Sources

APIs were contended today. **OpenAlex returned 429 on every attempt** (it had
recovered per the wave-3 brief; it has regressed again). **Semantic Scholar 429'd
on 8 of 11 calls.** CORE 429'd intermittently. What worked: **Crossref** for
discovery, **DOAJ** for open-access discovery on short queries, and — the useful
find of this run — **Unpaywall** (`api.unpaywall.org/v2/<doi>?email=`) as the
fastest way to turn a DOI into a verified open-access landing page. Recommend it
to later waves.

Searched the phenomenon, not the keyword: `unrequited love`, `romantic interest
ambiguity flirting`, `self-disclosure rejection risk`, `face saving indirect
communication`, `politeness face threatening act indirectness`, `overperception
of sexual interest`. Confirmed non-open-access and therefore **not cited**:
Baumeister, Wotman & Stillwell 1993 (unrequited love), Bruk, Scholl & Bless 2018
(beautiful mess effect), the 2008 face-work model of unrequited-love
disengagement, Hall's Flirting Styles Inventory, Perilloux & Kurzban 2012.

Four sources, all peer-reviewed, all open access, all fetched and verified, all
on domains new to this batch:

1. **Pinker, Nowak & Lee 2008, "The logic of indirect speech", PNAS 105(3):833–838**
   — https://dash.harvard.edu/entities/publication/73120378-7e16-6bd4-e053-0100007fdf3b
   Abstract read in full on the DASH landing page. "Indirect requests allow for
   plausible deniability, in which a cooperative listener can accept the request,
   but an uncooperative one cannot react adversarially to it," and a mismatch in
   assumed relationship type carries emotional costs that select for indirectness
   "even when there are no tangible costs." Domain `dash.harvard.edu`.
   *(pnas.org itself returns 403 to this sandbox.)*
2. **Montoya & Sloat 2019, "People Do Not Always Act as Positively as They Feel:
   Evidence of Affiliation Suppression", International Review of Social
   Psychology 32(1):9** — https://www.rips-irsp.com/en/articles/10.5334/irsp.202
   Three studies; attraction felt is more positive than the behaviour shown, with
   perceived acceptance, social norms and shyness contributing. Domain
   `rips-irsp.com`.
3. **Boothby & Bohns 2020, "Why a Simple Act of Kindness Is Not as Simple as It
   Seems", Personality and Social Psychology Bulletin 47(5):826–840** —
   https://ecommons.cornell.edu/entities/publication/0698c45d-1d7b-474b-87d5-ed8c784e6172
   Five studies; givers underestimated how positively recipients would feel and
   overestimated how bothered and uncomfortable they would feel, "and did so even
   in hindsight". Domain `ecommons.cornell.edu`.
4. **Li, Zheng & Schroeder 2026, "The Pain of Ghosting? People Underestimate How
   Bad Their Conversation Partners Feel About Not Responding", Personality and
   Social Psychology Bulletin (accepted version, CC BY)** —
   https://www.repository.cam.ac.uk/handle/1810/406925
   Three studies, N = 195 / 601 / 350; the effect is "mitigated when communicators
   … send a short response (e.g., 'sorry, can't talk') instead of ghosting".
   Domain `repository.cam.ac.uk`.

Only abstracts were read for all four — the full texts are PDFs, which do not
parse to text in this sandbox. Every claim in the post is confined to what the
abstract states. This is recorded as a checklist pass, not hidden.

Zero competitor links. Zero Wikipedia body links. Zero generic context
statistics (no PIB/TRAI/Census/MEA). No source could sit unchanged in another
post in this batch — all four are about attraction signalling, deniability or
non-response, which no sibling row covers.

---

## Phase 5 — Links and targeting

- `categorySlug`: `digital-gifts-romance` (verified live in Strapi).
- `templateUrls`: `/flags`, `/searched`, `/birthday-gf` — as assigned. All three
  fit: the first two are jokes by design and therefore deniable, the third is the
  earnest option held back for the mutual case.
- Internal template links in body: 3. Plus one blog cross-link to
  `birthday-website-for-girlfriend` (excluded from the template-link count).
- Slug checked against Strapi — `birthday-website-for-crush` is free.

---

## Phase 6 — Honest note

The post cannot beat ten product pages on commercial intent, and it is not
trying to. It is aimed at the informational half of the query and at answer
engines, which currently have nothing but vendor copy to work from when asked
whether a birthday website is too much for a crush.

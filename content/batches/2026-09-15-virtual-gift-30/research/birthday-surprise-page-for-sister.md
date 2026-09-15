# Research brief — `birthday-surprise-page-for-sister`

- **Batch:** `2026-09-15-virtual-gift-30`, wave 2
- **Keyword:** `birthday surprise page for sister`
- **Secondaries:** `birthday surprise website for sister`, `online birthday surprise for sister`
- **Category:** `family-and-continuity`
- **Templates assigned:** `/capsule`, `/photo-puzzle`, `/streak` — all three used, none swapped
- **Row history:** replaces `long distance gift for sister`, killed at 7/10 ecommerce, the worst Gate 2 score in the wave
- **Written:** 2026-09-16

---

## Phase 0 — data gate

Three first-party facts required, two inside the first 150 words. Checked the
48 sibling files in `blogs/` first: the 49.0% phone line is used in 44 of them,
the 4,357 total in 42, the 94.1% publish rate in 42 and the 40.6% password
figure in 42. Those are the batch's tics, so the opening avoids all four.

**In the first 150 words:**

1. `#5 page type: birthday page for a partner (/birthday-gf) — 352 created, 8.1% of all pages` — used in only 12 of 48 siblings, and it is the single most relevant line on this axis. It also forces the mandatory disclosure from BRIEF-WAVE2 §4: the database records the template opened, not the recipient, so none of those 352 can be shown to have gone to a sister. That disclosure is *in the body*, not only here.
2. `49.2% of views are on a touch device (phone or tablet)` — used in 7 of 48.

**Later in the body:** `Most-viewed template: love-gf — 16,201 views, 32.4% of
all page views` (7 of 48) carries the central argument, that the library is
romantic by construction. `4,357 pages across 16 page types` anchors the
denominator. Two more (40.6% password, 6.2-hour edit gap) appear only inside
FAQs, and the 6.2-hour line carries its `/love-gf` sampling disclosure inline.

**Pricing:** the `facts.md` pricing block is empty. The post makes no price
claim and says so explicitly before linking `/templates`.

---

## Phase 1 — SERP analysis

India SERP from `SERPS-WAVE2.md` (`ddg-html`, `kl=in-en`), ten results:

| # | Result | Type |
|---|---|---|
| 1 | pinterest.com/ideas/birthday-surprise-sister | Pinterest board |
| 2 | toolswithfun.com — birthday surprise link tool | tool/generator |
| 3 | pinterest.com/ideas/birthday-surprise-ideas-for-sister | Pinterest board |
| 4 | bigballoon.in — 50+ sister birthday wishes & room surprise ideas | listicle, physical decor |
| 5 | wishprise.online | competitor page-builder |
| 6 | toolheritage.com — birthday surprise maker | tool/generator |
| 7 | surprisecreator.com | tool/generator |
| 8 | giftsqr.com/en/birthday | competitor (BRIEF §1) |
| 9 | birthdaycares.com — sister birthday surprises | listicle |
| 10 | amazon.in search shelf | ecommerce |

**Gate 2 read.** One ecommerce slot (Amazon), two Pinterest, two listicles. The
rest are link generators. The row's `gate2` note calls it "mixed but much
improved", and that is accurate: this is nothing like the 7/10 ecommerce row it
replaced.

**The real competitive shape, and it is the gap.** Four of the ten are
*generators* — toolswithfun, toolheritage, surprisecreator, plus wishprise and
giftsqr as builders. Every one of them answers "make me a surprise link" and
none of them answers "which of these actually suits a sister rather than a
girlfriend". Not one result on the page is written for a sibling as opposed to
a generic recipient. That is the content gap and it is unusually clean.

**Competitors seen and excluded from citation and linking:** `wishprise.online`,
`giftsqr.com`, `toolswithfun.com`, `toolheritage.com`, `surprisecreator.com`,
`bigballoon.in`, `birthdaycares.com`. None is cited, linked or paraphrased.

**Autocomplete fan-out** (`content/keywords/2026-09-15-virtual-gift-100/ac*/autocomplete.csv`,
grep on `sister` and `birthday surprise`):

- `which birthday gift is best for sister` → the "which templates transfer" H2
- `online gift for sister`, `digital gift for sister` → the "what it actually is" H2
- `send gifts to sister online`, `long distance sister gift ideas` → the distance framing in the opening and the "wrong gift" H2
- `birthday gift with sister` → the capsule / streak sections, both of which are two-person formats

No extra `serp-ddg.mjs` call was needed; the supplied SERP plus autocomplete
covered Phase 1. `WebSearch`, `WebFetch` and `scripts/serp.mjs` were not called.

---

## Phase 2 — gap analysis and angle

**Angle:** wins by being the only post that states which of SubhSandesh's
romantic-first templates actually transfer to a sister and which do not, and
backs each call with the platform's own page-type counts instead of pretending
the whole library fits.

This is the only sibling row in a sixty-post batch. Every other post is
romantic, and that asymmetry is the post's subject rather than an obstacle to
route around. The honest problem — there is no sibling birthday template on
SubhSandesh, only a partner one and a Raksha Bandhan page for the wrong
occasion — is stated in the body in plain words.

**Rakhi containment.** BRIEF.md §5 bans `indian-festivals` for the whole batch
and SubhSandesh already has a large live Raksha Bandhan cluster plus a separate
rakhi batch. Raksha Bandhan is mentioned in exactly one sentence, as the reason
the one sister-addressed page on the site is *not* usable here, and neither
rakhi template is linked. The category is `family-and-continuity`.

**Claim no top-5 page makes:** that three named templates transfer to a sibling
and a named set does not, with platform counts attached to the judgement.

---

## Phase 3 — sources

Discovery ran through the APIs in BRIEF-WAVE2 §1b, searching the *phenomenon*
(sibling closeness, sibling disclosure, familism in South Asia, birthday rites)
rather than the keyword.

**API behaviour measured 2026-09-16, for the next agent:**

- **Europe PMC — down.** `HTTP 503` on every call, including the bare
  `query=sibling relationship` smoke test. Not a query problem. It was also
  already at 5 uses in `blogs/`, so it was unusable regardless.
- **Crossref — worked every time.** Best for leads and for exact publication
  dates; `10.18778/1505-9057.54.02` gave the Gaj date, volume and pages.
- **DOAJ — worked, short queries only**, exactly as the brief describes.
  `sibling warmth`, `sibling bond`, `birthday gift` and `birthday ritual` each
  returned usable rows; anything longer returned noise.
- **OpenAIRE — worked but slow.** Two queries returned; a third timed out at
  30s. Usable as a third resort, not a primary.
- **OpenAlex — not attempted** (documented 429).

Domain check before citing: all five domains were grepped against the 48
existing `blogs/*.json` files and against `SPENT-SOURCES.json`. **All five are
unused anywhere in the batch.**

| # | Source | Domain | Date | What it supports |
|---|---|---|---|---|
| 1 | Martinez & Howe, *Canadian Early Adolescents' Self-Disclosure to Siblings and Best Friends*, IJCYFS 4(2) | `journals.uvic.ca` | 2013-04-10 | 93 children, Grades 4 and 6; disclosed peer/academic/shared-interest topics more to best friends than siblings; sibling disclosers reported higher warmth **and** higher rivalry and conflict |
| 2 | Fatima & Noor, *Familism, Sibling Relationship and Psychological Wellbeing in Young Adults*, PJPPRP 13(1) | `pjpprp.pu.edu.pk` | 2022-06-28 | n=120, ages 20–25; sibling relationship mediated between familism and wellbeing |
| 3 | Rodrigues, Relva & Monteiro Fernandes, *Parental Communication and the Sibling Relationship*, Rev. Interamericana de Psicología 56(2) | `journal.sipsych.org` | 2022-08-01 | n=209 adolescents with siblings; parental communication positively associated with empathy and similarity in the sibling relationship |
| 4 | Gaj, *Genethliacon for Barbara Bogołębska…*, Acta Univ. Lodziensis, Folia Litteraria Polonica 54, 37–50 | `czasopisma.uni.lodz.pl` | 2019-09-30 | The birthday poem is attested from Callimachus (3rd c. BCE) and its core features — wishes, gifts, purpose-written poetry — barely changed across the centuries |
| 5 | Fuentes Sánchez, *Canciones y ritos de cumpleaños en Europa*, Boletín de Literatura Oral | `revistaselectronicas.ujaen.es` | 2019-11-23 | The birthday treated as a rite of transition, with invitation, guests and gifts as constituent elements of the rite |

Every landing page was opened and read with `ctx_fetch_and_index` before
citing. **Language disclosure:** sources 4 and 5 are Polish and Spanish
respectively; only the abstract was read in each case, the body says so, and
neither claim goes beyond what the abstract states. Sources 1–3 are English
open-access with full abstracts.

**Subject test:** all five are about siblings or about birthday ritual. None is
a generic India or internet statistic — the post carries **zero** generic
context statistics (no PIB, TRAI, Census or MEA line at all).

**Swap test:** none could sit unchanged in another post in this batch. The other
59 rows are romantic-partner keywords; sibling disclosure, familism-mediated
sibling wellbeing and the genethliacon have no home in any of them.

**What was rejected and why.** `europepmc.org`, `arxiv.org`, `pmc.ncbi.nlm.nih.gov`,
`journals.plos.org`, `frontiersin.org` — at or over cap. Tandfonline hits on
sibling relational maintenance and on sibling teasing (Journal of Family
Communication; Journal of Research in Childhood Education) were the closest
topical matches found and are all on the blocked-host list; they were not
opened and not cited. `ideals.illinois.edu` (Indian siblings thesis) returned
403. `scielo.br` (birthday parties and gift exchange, two good hits) returned
502 then 404 on the canonical path and was dropped rather than cited unread.

**Search terms tried that returned nothing usable, per BRIEF.md §3:**
`sibling teasing humour family` and `sibling relationship Indian adolescents`
both returned zero open-access rows on OpenAIRE. There is real work on sibling
teasing, but every open route to it was blocked or capped, so the post does not
claim any teasing finding — it only uses the register.

---

## Phase 4–5 — draft, links, schema

- **1,574 words** in `contentMarkdown` (plain whitespace split), 1 H1, 5 H2s, 4 H3s, no skipped levels.
- **Outbound links: 5**, all inline at the sentence stating the fact, all verified.
- **Wikipedia body links: 0.** `en.wikipedia.org` is at 2 in this batch with one slot left, and no entity here needed disambiguating in prose.
- **Template links: 4** — `/photo-puzzle`, `/capsule`, `/streak` and `/templates`, the last near the closing CTA. All exist in `TEMPLATE_LINKS` and all returned HTTP 200.
- **Blog cross-link: 1** — `https://subhsandesh.in/blog/birthday-wishes-for-younger-sister` (HTTP 200). Per BRIEF-WAVE2 §3 this does **not** count against the 2–4 template-link budget and is **not** recorded as a checklist failure.
- **Comparison table:** 5 rows, with a first-party column (`Built here so far`) carrying 352 / 8.1%, 1,125 / 16,201 views / 32.4%, and the honest "outside the top five page types" for the three sibling-friendly templates — derived from facts.md naming only the top 5 of 16 page types.
- **structuredData:** one `@id`-matched `BlogPosting` enrichment block on `<canonicalURL>#post` with `about` (Sibling), four `mentions` (Birthday, Gift, Jigsaw puzzle, India) and `citation` mirroring `batchMeta.sources` one-to-one with dates; plus one `ItemList` of 4 items mirroring the 4 H3s in order. Every `sameAs` was verified against the Wikipedia API in one call: Sibling Q31184, Birthday Q47223, Gift Q184303, Jigsaw puzzle Q181008, India Q668 — no `missing` key on any title. No AggregateRating, Review or HowTo.
- **FAQs: 10**, in `article.faqs` only. Each was checked against the five H2s and four H3s; none restates a heading. The closest pair is FAQ "Is my sister too young for a page like this?" against the H2 "When a page is the wrong gift for your sister", which share one concept but no phrasing.

---

## Template judgement — the part the row was assigned for

All three assigned templates were used. None was swapped. Descriptions were read
from `app/lib/prompt.ts` before writing, not inferred from the slugs.

**Transfer cleanly:**

- `/photo-puzzle` (The Last Piece) — a jigsaw that reveals a letter line by line. The mechanic is a delivery system for a long message, with nothing romantic in it. Transfers with zero edits; the withheld final piece reads as sibling teasing rather than romantic suspense.
- `/capsule` — mutual blind predictions, sealed for a year. Structurally the best birthday gift in the library, because a birthday is already the annual marker a capsule needs. One edit required: the default prompts assume two people inside one shared life, and sibling prompts must assume two separate ones.

**Transfers conditionally, and the post says so:**

- `/streak` — a hundred days of daily taps. Two problems, both named in the body. It needs siblings who already talk daily, and it *obliges the recipient*, which is a contradiction in a surprise. Recommended only for a sister you already message every morning.

**Do NOT transfer, and the post names them rather than pretending:**

- `/love-gf`, `/bouquet-gf`, `/darling` — written in a partner's voice; a sister notices in three seconds.
- `/proposal`, `/flags`, `/date-invitation`, `/court-of-love` — courtship or trial-of-a-partner framings with no sibling reading at all.
- `/apology-dashboard` used as an affection gesture — it is an apology page, and sending one for a birthday says something unintended.
- `/birthday-gf` — the only birthday template on the site, and it is written for a romantic partner. This is the honest structural finding: **there is no sibling birthday template.**
- `/happy-rakshabandhan-to-sister` — the only page on the site addressed to a sister, and it is the wrong occasion. Named once as a limitation; not linked.

---

## Cannibalisation — BRIEF-WAVE2 §3

This row carries **no `nearestLive`** field in `WAVE2-PLAN.json`, so no
escalation gate applied. A check was run anyway.

The closest live page is `subhsandesh.in/blog/birthday-wishes-for-younger-sister`
(batch `2026-08-27-birthday-30`, category `milestone-birthdays`, HTTP 200). It
does not appear anywhere in this keyword's India SERP.

**Decision: differentiate.** The split is format versus text — that page
supplies the *words* for a younger sister's birthday message; this one supplies
the *artefact* the words go into, and judges which templates hold them. The
post links it explicitly, from the "when a page is the wrong gift" section,
with the instruction to paste the wishes into one of the three pages. Neither
page targets the other's keyword.

`birthday-wishes-for-sister-in-law` was also checked and is a different
relation entirely (nanad / jethani / devrani / bhabhi). No overlap.

No secondary here appears as another wave-2 row's `secondaryKeywords`.

---

## Phase 6 — audit summary

- `passed` = 50, `failed` = 0, `passed ∩ failed = ∅`, `|passed| + |failed| = 50`.
- All strings copied byte-verbatim from `references/publish-checklist.md`, `**bold**` markers retained, wrapped items joined with single spaces.
- `verify-batch.mjs` run at batch scope per §7. Only lines naming this slug were acted on. All source-cap findings ignored, per the standing instruction.

**Honest assessment (also in the JSON):** the ten India results are generators
and listicles that answer "make me a surprise link"; none answers "which of
these suits a sister rather than a girlfriend", and this is the only sibling row
in a sixty-post batch, so it is the only page that can say the birthday template
here is written for a partner and name what survives the move. What it cannot
overcome: the generators have far more topical history on this exact phrase,
and subhsandesh.in has no sibling-birthday page to inherit authority from. The
strongest asset — the template judgement — is first-party opinion that no
external source corroborates.

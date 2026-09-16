# Research brief — `what is a digital invitation`

- **Slug:** `what-is-a-digital-invitation` (checked against Strapi 2026-09-16: `filters[slug][$eq]` returned `total: 0` — free)
- **Batch:** `2026-09-15-virtual-gift-30`, wave 3, row 1
- **Category:** `digital-gifts-romance` (verified against the live Strapi category list, 2026-09-16)
- **Templates:** `/wedding-shaadi`, `/shaadi-card`, `/reception`, `/date-invitation`
- **mustDifferentiate:** false — `overlapWithWritten: 0`, `overlapWithNewRow: 0`

---

## Phase 0 — Data gate

`npm run facts` was **not** re-run (BRIEF-WAVE3 §5: the production-DB read was denied
today). `content/facts.md` as measured **2026-09-15** is the source, and every cited
line carries that date.

Relevant facts available, well above the 3-fact / 2-in-first-150-words gate:

| Fact | Used where |
|---|---|
| 4,357 pages since 2026-03-12, 16 page types | opening + §"File or page" |
| 49.0% of views on a phone (24,493 of 49,968) | opening (first 150 words) |
| 40.6% password-protect before sharing (1,767 of 4,357) | opening (first 150 words) + table + close |
| 94.1% of started pages published and shared (4,098 of 4,357) | table |
| 49,968 total views; 11.5 per created page | table + §"After you press send" |
| Median first-save-to-last-edit gap 6.2 hours (n=1,125, /love-gf) | table + close |
| Occasion-dated pages 3.7% (144 of 3,894), measured 2026-09-09 | §"After you press send" + FAQ |
| Raksha Bandhan lead time, n=89, median 0 days, measured 2026-09-09 | FAQ only, with both mandatory disclosures |

Deliberately **not** used: the 40.6%/6.2h pair as the *opening* combination, since
BRIEF-WAVE3 §5 flags it as a tic across 60 posts. The opening leads on 49.0% phone +
4,357 pages, and 40.6% appears as the third number.

Mandatory disclosures made **in body prose**, not only here:
- The database records which *template* was opened, not who received it (§"After you
  press send").
- The Raksha Bandhan lead-time figure is a different festival and n=89 is too small for
  any per-template rate (FAQ 4).
- The `## Pricing` block is empty, so no price is stated or inferred; the post says so
  and links `/templates` (§"Where a digital invitation is the wrong choice" + FAQ 8).

---

## Phase 1 — SERP analysis

India SERP, `ddg-html`, `kl=in-en`, collected 2026-09-16 (`SERPS-WAVE3.md`). This is
the **only** keyword of 112 screened whose SERP is genuinely blog-shaped — 7 of 10 are
editorial articles rather than invitation-maker product pages.

| # | Page | Shape | Where the answer lands | Data cited | Format |
|---|---|---|---|---|---|
| 1 | einvits.com/blog — *Complete Beginner Guide* | ~700 words, 3 min read, 77 views | After two scene-setting paragraphs | **None.** Two unattributed pull-quotes | H2/H3 list, no table, no schema visible, "Super Admin" byline, 18 Apr 2026 |
| 2 | invitedrop.com/blog — *What Are Digital Invitations?* | Long, well-structured | First paragraph — the best of the five | Own pricing only ($15.99–$74.99 Event Pass); "$300–$800" for a 150-guest print suite, unsourced | Numbered workflow, benefit H3s, heavy internal product linking |
| 3 | invitify.app/glossary | Glossary stub | Immediate, one line | None | Definition-only, no depth |
| 4 | blog.1invites.com | How-to, not definitional | Buried | None | Step list |
| 6 | studiocreativethings.com | ~1,800 words, e-commerce blog | After a personal Christmas-party anecdote (~250 words) | None; one infographic image | Anecdotal first person, "Inside:" summary box, store banner, 20% discount code |
| 9 | invitedrop.com — *Paper vs Digital* | Comparison | First paragraph | Same pricing figures | Table-led |

**Every domain above is a competitor and is banned from citation and linking**
(BRIEF.md §1, BRIEF-WAVE2 §0, BRIEF-WAVE3 §1). They were read for gap analysis only.
Zero competitor links appear in the post.

---

## Phase 2 — Gap analysis

**Table stakes** (all five cover): definition as "electronic version of a paper
invitation"; delivery channels (email / WhatsApp / SMS / link); benefits — cost, speed,
eco, editability, RSVP tracking; types (image, video, page); a paper-vs-digital
comparison.

**The gap — four things none of them do:**

1. **Nobody separates a digital invitation *file* from a digital invitation *page*.**
   All five treat "digital invitation" as one object. In India the dominant artefact is
   a JPEG or MP4 forwarded on WhatsApp — frozen, uncorrectable, unmeasurable — and it
   behaves nothing like a hosted URL. This is the post's spine.
2. **No page treats the invitation as a structured genre.** There is a mature
   linguistics literature that has *counted* the obligatory components of a wedding
   invitation (six to eight, depending on corpus). None of the five mention it, so none
   can tell a reader what a digital invitation must still contain to read as complete.
3. **Zero first-party evidence about what happens after sending.** No page states an
   open rate, a device split, an abandonment rate, or how often a sent invitation gets
   edited. All five assert "guests open it instantly" without a number.
4. **No India framing, no privacy framing, no honest downside.** No mention of
   password-locking an invitation link, of forwarding, of elders who cannot open a
   browser link, or of the keepsake the card does and the link does not.

**Stale / unsourced data:** the invitedrop "$300–$800 for a 150-guest print suite"
figure is unattributed and US-priced; both invitedrop pages quote their own product
pricing as if it were market data. Nothing on the SERP carries a dated third-party
citation at all.

**Fan-out sub-queries → H2s:**

| Sub-query | H2 |
|---|---|
| what is a digital invitation / what does it mean | H1 answer block |
| is it a file or a link | File or page: the two things people mean by a digital invitation |
| what must a digital invitation contain | The moves every invitation has to make, on card or on screen |
| digital vs paper vs image — what actually differs | Digital invitation, printed card, or image file — what actually differs |
| does anyone actually open it | What happens after you press send |
| when should I not use one | Where a digital invitation is the wrong choice |
| which format for an Indian wedding | Choosing a format for an Indian wedding |
| how do I make one | Making one people actually open |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that splits
"digital invitation" into *file* versus *hosted page* and settles the difference with
4,357 real shared pages — 49.0% opened on a phone, 40.6% password-locked, 94.1%
actually finished — while every competing page stops at cost, speed and paper waste.

---

## Phase 3 — Sources

Discovery: OpenAlex `works?search=…&filter=is_oa:true` (working today, HTTP 200) and
DOAJ short queries. Semantic Scholar returned **HTTP 429** on both attempts.
Phenomenon-first queries used: `wedding invitation ritual social obligation`,
`ceremonial invitation guest list kinship`, `wedding invitation card genre analysis`,
`RSVP commitment event attendance`, `digital wedding invitation India`,
`electronic invitation card adoption`, `wedding invitation sustainability paper waste`.
Publication dates confirmed via Crossref.

Every source below is a **new domain** — none appears in `SPENT-SOURCES.json`
(`domainsAtCap` or `domainsAtTwo`) or in any of the 60 sibling `blogs/*.json` source
arrays, checked 2026-09-16.

| # | URL | Domain | What it actually says (verified) | Published |
|---|---|---|---|---|
| 1 | `journals.umcs.pl/lsmll/article/view/4012` | journals.umcs.pl | Sample of **250** Iraqi wedding invitation cards; schematic organisation built around **seven component moves**; religion and socio-cultural system encoded in the texts | 2017-07-04 |
| 2 | `eprints.hud.ac.uk/id/eprint/28708/` | eprints.hud.ac.uk | Sawalmeh doctoral thesis; move analysis over a corpus of **500** wedding invitation cards; **eight communicative moves**, highly conventionalised structure | 2015 |
| 3 | `ccsenet.org/journal/index.php/ijel/article/view/0/43243` | ccsenet.org | Banikalef; **120 online** wedding invitation cards from Facebook, **March–June 2020**; **six obligatory and one optional move** | 2020-07-14 |
| 4 | `jurnal.ugm.ac.id/jurnal-humaniora/article/view/38222` | jurnal.ugm.ac.id | Kristina; **15** Javanese printed invitation texts **1980–2017**; card as social document of class/status/prestige; diaspora families adding parents' photographs | 2019-12-02 |
| 5 | `journal.ubpkarawang.ac.id/index.php/bit-cs/article/view/6276` | journal.ubpkarawang.ac.id | Priyatna et al.; qualitative interviews with printed-invitation and wedding-organiser providers in Karawang; digital invitation apps expand reach and give a more interactive, personalised experience | 2024-06-30 |

**Subject test:** all five are *about wedding invitations specifically* — not about
India, not about the internet. **Swap test:** none could sit in another post in this
batch; a move analysis of wedding invitation cards is useless in a long-distance-gift
or apology post. **Generic context statistics used: zero** (limit is 1).

**Abstract-only disclosure:** for sources 1–4 the landing-page abstract and metadata
were read; full texts and PDFs were not. Every claim in the post is confined to what
the abstract states. None of the five is paywalled — all are open access — this is a
reading-depth limit, not an access limit. Recorded in `auditReport.failed`.

Wikipedia is used **only** as `sameAs` inside `structuredData` (Wedding invitation
Q1192278, RSVP Q311679, both verified against the Wikipedia API on 2026-09-16). It is
deliberately kept out of `batchMeta.sources` and out of the body, because
`en.wikipedia.org` sits at 2 of its 3 domain slots.

---

## Phase 5 — Links and targeting

**Internal (5):** `/wedding-shaadi`, `/shaadi-card`, `/reception` and `/date-invitation`
each appear once, under their own H3, in the "Choosing a format for an Indian wedding"
section — i.e. *after* the sections that establish why a hosted page is worth having.
`/templates` appears twice: once in the honest "we cannot confirm pricing" sentence and
once in the closing CTA.

Descriptions were taken from `TEMPLATE_LINKS` in `app/lib/prompt.ts`, not guessed.
`/date-invitation` is described as what it actually is — "an invitation they must
answer; a yes turns into a countdown, and on the day the plan unlocks one stop at a
time while you are out" — and the post says plainly that it is a *date* invitation, not
a wedding one, so it is not mis-sold to a reader planning a shaadi.

This is 5 internal links against a checklist ceiling of 4. It is recorded as a failure
rather than resolved, because BRIEF-WAVE3 §4 explicitly assigns this row all four
wedding/invitation templates (`/wedding-shaadi` and `/shaadi-card` and `/reception` had
been linked once each in 60 posts) **and** requires `/templates` near the close.
Dropping one would defeat the reason this row exists.

**Outbound (5):** one per source, all in body prose, all fetched and verified.
**Competitor links: zero.**

`structuredData`: an `@id`-matched `BlogPosting` enrichment block on
`https://subhsandesh.in/blog/what-is-a-digital-invitation#post` carrying `citation`
(five entries mirroring `batchMeta.sources` one-to-one), `about` and `mentions`; plus
one `ItemList` mirroring the four H3s in the same order. No `AggregateRating`, `Review`
or `HowTo`. No renderer-built type without a matching `@id`.

---

## Phase 6 — Audit summary

`|passed| = 48`, `|failed| = 2`, `passed ∩ failed = ∅`, total = 50 = the checklist
length. Item strings are read programmatically out of `publish-checklist.md` by the
build script, so they are byte-verbatim including `**bold**` and wrapped-line joins.

Open failures, both deliberate:

1. *3–6 outbound links, all fetched and verified to contain the cited fact* — all five
   were fetched and verified, but only abstracts were read for four of them.
2. *2–4 internal links with descriptive anchor text, placed after value is established*
   — five internal links, one over the ceiling, for the reason given above.

Body: **1,529 words** (plain split, FAQs excluded). **11 FAQs**, in `article.faqs` and
the FAQPage JSON-LD only; none restates a body H2 or H3.

`scripts/verify-batch.mjs` run 2026-09-16. It initially raised a second finding against
this slug — a hard COST CLAIM on the phrase "paid tier" in the pricing-decline sentence,
plus "costs you nothing" in an FAQ. Both were rewritten to decline a price without using
a priced phrase; the verifier is now clean on cost. The only remaining ✗ against this
slug is the 5-internal-links ceiling, left open deliberately for the reason above. Every
other verifier line names a sibling slug and was not acted on, and all source-cap
findings were ignored per BRIEF-WAVE3 §7.

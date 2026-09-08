# Batch brief — 2026-09-09-ganesh-10

Ten posts, one per keyword cluster from `content/keywords/2026-09-09-ganesh-chaturthi/`.
Branch: `batch/2026-09-09-ganesh-10`. Category for **every** post: `indian-festivals`.

**Ganesh Chaturthi 2026 = Monday 14 September 2026. Anant Chaturdashi / visarjan = Friday
25 September 2026.** Verified against Drik Panchang and Outlook. Every post must state the
date correctly; a wrong festival date is the one error that discredits the whole batch.

---

## The first-party data problem — read before drafting

`content/facts.md` (regenerated 2026-09-08) has 17 facts. **None of them are Ganesh facts.**
The `/happy-ganesh-chaturthi` template shipped days ago and has created zero pages, so there
is no Ganesh-specific number to cite and there will not be one this cycle.

Every first-party number in these posts is therefore **platform-wide across 15 page types**,
and must be captioned that way in the sentence nearest the claim. Write "across all 3,860
pages SubhSandesh has created since March 2026, 49.6% are opened on a phone" — never
"49.6% of Ganesh pages are opened on a phone", which is a fact we do not have.

`audit-remediation.md` is explicit that the fix for a platform-wide number reading as
segment-specific is the caveat, not deletion. The number is still the moat: no competitor
in these SERPs can publish any of it.

The three that carry the most weight in a Ganesh post:

- 49.6% of shared pages are opened on a phone (22,667 of 45,656 views) — measured 2026-09-08
- 42.1% of creators password-protect their page before sharing it (1,625 of 3,860) — measured 2026-09-08
- 96.1% of started pages are actually published and shared (3,708 of 3,860) — measured 2026-09-08

Two must land inside the first 150 words. Use a third and a fourth further down.

---

## Every post links the new template

`/happy-ganesh-chaturthi` is live and **must appear in all ten posts** as one of the 2–4
internal links, with descriptive anchor text, placed after the section that establishes why
the reader would want it — never in the opening paragraph.

Its `what`, taken from the template's own `config.ts` (do not paraphrase from the slug):

> A Ganesh Chaturthi page the recipient performs themselves — they offer the durva, kumkum,
> flowers and modak, the aarti thali circles while Karpur Gauram plays, and they write their
> own prarthana back. Add your photo, your mandap, and a card for an Instagram story.

`batchMeta.templateUrls` must contain `/happy-ganesh-chaturthi` first. Pick 1–2 more from
`TEMPLATE_LINKS` in `app/lib/prompt.ts` only where genuinely relevant — `/templates` is the
safe second. **Never invent a slug.**

---

## The ten posts, one per cluster

One cluster = one page. The siblings listed under each are **secondary keywords for that same
post**, not separate posts — writing two of them is the self-cannibalisation Phase 8a exists to
prevent, and this repo already carries 43 such collisions from earlier batches.

| # | Slug | Primary keyword | Folds in | Research field (yours alone) |
|---|---|---|---|---|
| 1 | `happy-ganesh-chaturthi-wishes` | happy ganesh chaturthi wishes | ganesh chaturthi wishes · happy ganesh chaturthi · ganesh chaturthi quotes | computer-mediated communication — mediated intimacy, greeting/forwarding behaviour |
| 2 | `ganesh-chaturthi-2026-date` | ganesh chaturthi 2026 | ganesh chaturthi 2026 date · kab hai 2026 · start and end date · how many days to go | anthropology of ritual — calendrical rites, lunisolar reckoning |
| 3 | `ganesh-chaturthi-images` | ganesh chaturthi images | happy ganesh chaturthi images · ganpati bappa photos · images for whatsapp | visual culture / social media self-presentation |
| 4 | `happy-ganesh-chaturthi-status` | happy ganesh chaturthi status | whatsapp status · for status · video status download · stickers for whatsapp | social media studies — ephemeral status posting, audience awareness |
| 5 | `ganesh-chaturthi-wishes-in-marathi` | happy ganesh chaturthi wishes in marathi | ganesh chaturthi quotes in marathi | sociolinguistics — Marathi script choice, code-switching, regional identity |
| 6 | `ganesh-chaturthi-quotes-in-hindi` | ganesh chaturthi quotes in hindi | — | linguistics — Devanagari/Hinglish transliteration, script and identity |
| 7 | `ganesh-chaturthi-decoration-ideas` | ganesh chaturthi decoration ideas | ganpati decoration ideas · at home · rangoli designs | material culture / eco-friendly domestic ritual |
| 8 | `ganpati-aarti` | ganpati aarti | ganesh chaturthi songs | ethnomusicology — devotional music, congregational singing |
| 9 | `ganesh-chaturthi-essay` | ganesh chaturthi essay | why ganesh chaturthi is celebrated · essay in hindi 200 words | history — Tilak, the 1893 public Ganeshotsav, festival and nationalism |
| 10 | `ganpati-visarjan-2026` | ganpati visarjan 2026 | why ganpati visarjan is done in water · visarjan date | environmental science — idol immersion and water quality |

All ten slugs were confirmed free in Strapi on 2026-09-09.

---

## Source allocation — stay in your own field

`research-sources.md` caps a **URL at 2 posts and a domain at 3 across the batch**. With ten
posts that cap is easy to breach by accident, so the table above gives each post a field no
other post is searching. Stay in it.

Search the *phenomenon*, not the keyword — festivals are under-studied, the behaviours around
them are not. Post 4 should search `ephemeral social media status posting study`, not
`ganesh chaturthi status`.

**Before adding a source, read the sibling files already in `blogs/` and count.** Append every
source you use to `USED-SOURCES.md` in this directory, one line: `<slug> | <domain> | <url>`.

Two exceptions and one hard ban:

- **The date reference** (Drik Panchang or equivalent) may appear in every post. It is a
  fact-check, not a citation, and it only earns a place in `citation` where the post actually
  states a muhurat time.
- **At most 1 generic context statistic** per post (PIB / TRAI / Census / MEA). Post 10 is the
  one where a CPCB / government water-quality figure is genuinely topical rather than filler.
- **Zero competitor links.** FNP, IGP, Winni, Archies, Canva, Adobe Express, Greetings Island,
  DesiEvite, EasyInvite, MyNameArt, WriteNamePics, CreateCustomWishes, the Marathi quote farms
  and every "wishes" listicle site are competitors. They are what these posts are beating.
  Read `references/competitors.md`.

---

## Non-negotiables, per post

- 1,500–1,800 words in `contentMarkdown`, **FAQs excluded** — FAQs live in `article.faqs` and
  the FAQPage JSON-LD only, never in the body.
- Direct answer in the first 150 words, with **two platform-wide first-party numbers**, each
  captioned as platform-wide.
- 8–12 FAQs in natural spoken phrasing.
- One comparison table with real values, at least one column first-party.
- A section naming where SubhSandesh is the **wrong** choice. For a Ganesh post the honest one
  is easy: a page cannot replace being at the mandap, and it cannot hand anyone a modak.
- 4–6 sources, ≥2 passing the subject test, ≥1 peer-reviewed and open-access.
- `structuredData`: an `@id`-matched enrichment block on
  `https://subhsandesh.in/blog/<slug>#post` carrying `citation`/`about`/`mentions`, plus an
  `ItemList` if the body ranks or numbers things. **Never** a bare `BlogPosting` or `FAQPage` —
  the renderer discards those.
- Verify every `sameAs` against the Wikipedia API and pair the Wikidata QID.
- Scratch files must be named `<slug>-<purpose>.md`. The scratchpad is shared between
  concurrent subagents and three agents once overwrote each other's `body.md` in the rakhi batch.

## Tone

Indian audience, rupees, real Indian dates and norms. Specific over hedged. State opinions.
No "in today's fast-paced world", no rhetorical-question transitions, no tricolon padding.
The fix for thin writing is more facts, not more personality.

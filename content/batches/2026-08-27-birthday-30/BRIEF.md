# Batch brief — 2026-08-27-birthday-30

Market: **India**, evergreen (no event date, so no Gate 0 lead-time pressure).
Keyword source: `content/keywords/2026-08-26-birthday/final30.json` (30 pages).
This batch writes **the first 10**. The remaining 20 follow in a second wave.

---

## 1. Birthday-specific first-party data — READ THIS BEFORE DRAFTING

`content/facts.md` holds the site-wide numbers. The figures below are a **read-only
probe of the `birthdaygfpages` collection run on 2026-08-26**, and they are the only
birthday-specific first-party data that exists. Use these in preference to the
site-wide ones — a birthday post citing the birthday numbers is far more citable
than one citing the love-gf numbers.

**Scale (n = 198 birthday pages, all created since 2026-04):**

- 198 birthday pages created — **6.5% of all 3,024 pages**, the **#5 most-created page type**
- 2,224 recorded views of birthday pages — **6.0% of all 36,851 views**
- **11.2 views per birthday page**, against 12.2 site-wide
- 196 of 198 (99.0%) were actually published; 100% got a share link

**How people actually write (the most useful fact in this batch):**

- **Median personal message: 96 characters** (n=197). Longest: 1,437.
- **106 of 197 messages are under 100 characters.**
- 100% of pages include a written birthday wish; 99.5% add a personal message on top

> **This is the angle for every "wishes" post.** The pages ranking against you publish
> "200+", "500+", "750+" wish listicles. The measured reality is that people send about
> 96 characters — roughly 15–20 words, two lines. A post that says so, with the number,
> is saying something none of the competitors can. Lead with it.

**How fast they work:**

- **Median gap from first save to last edit: 0.9 hours** — against 6.9 hours for the
  "I love you" page. Birthday pages are made in one sitting.
- **50.5% (100 of 198) are finished inside the hour.**

**What they add, and what they skip:**

| Feature | Used on | Share |
|---|---|---|
| Cover photo | 198 | 100% |
| Music track (max 5 per page, 990 total) | 198 | 100% |
| Quiz questions (606 total, max 10) | 195 | 98.5% |
| Truth-or-dare questions (1,198 total, max 21) | 194 | 98.0% |
| Extra photos 1 and 2 | 166 | 83.8% |
| Gallery photos (763 total, max 8) | 147 | 74.2% |
| Surprise photo | 123 | 62.1% |
| **Surprise audio** | **53** | **26.8%** |

**The inconvenient number — use it, it buys credibility:**

- Of the 195 pages that added a quiz, **only 28 had it played — 14.4%**.
  Senders build interactive games; recipients mostly don't play them. Say so.
- 4 birthday pages (2.0%) were never opened at all.
- Only 2 of 198 (1.0%) passed 50 views. The most-viewed single birthday page got 67.

**Behaviour that differs from the site average:**

- **37.9% password-protect a birthday page**, against 43.9% site-wide — people gate a
  love letter more often than a birthday surprise.
- Birthday views split **1,081 mobile / 1,121 desktop / 22 tablet — 48.6% mobile**,
  where the site overall is 51.0% mobile. Birthday pages are the one thing people open
  on a laptop.

**Do not overclaim from this.** n=198 is small, the data starts 2026-04, and 118 of the
172 recorded birthday dates fall in August, which is an artefact of when the product
launched and when these pages were made — **not** evidence that Indians are born in
August. If a claim needs per-language or per-relationship birthday data, it does not
exist: record that as a structural audit failure rather than inventing it.

---

## 2. Hard constraints for this batch

**WebSearch is exhausted for this session (200/200).** Do not call it — it returns an
error, not results. Phase 1's "who ranks 1–5" is already answered: your assignment
carries the **live India-localised SERP** I harvested with a real browser at `gl=in`.
Use it as given.

For fetching competitor pages and sources: **`ctx_fetch_and_index`, never `WebFetch`**
(WebFetch is blocked). For any search, use `ctx_execute`. Never `curl` or `wget`.

**Scratch files must be named `<slug>-<purpose>.md`.** The scratchpad is shared across
concurrent agents. In the 2026-08-13 rakhi batch three agents each wrote
`scratchpad/body.md` and overwrote each other mid-draft.

**Never cite a competitor** (`references/competitors.md`). For this batch that
explicitly includes every domain named in your SERP block.

**Banned sources — over-cap across the existing corpus, do not cite:**
`drikpanchang.com`, `indiapost.gov.in`, `pib.gov.in`, `trai.gov.in`, `doi.org` (as a
bare resolver), `publicholidays.in`, `arxiv.org` (already in 4+ posts), `census.gov.in`.

**Source caps, corpus-wide:** a URL may appear in at most 2 posts, a domain in at most 3.
Check `content/batches/*/blogs/*.json` before adding a source.

**At most 1 generic context statistic per post.** Two government statistics in one post
is a fail. The subject test and the swap test both have to pass.

---

## 3. Pre-allocated source lanes

The rakhi batch tried a cooperative `SOURCES.md` ledger and four agents independently
picked arXiv, because each read the ledger before the others had appended. Lanes are
therefore assigned up front. **Stay in your lane** for the required scholarly source.
General sources outside your lane are fine if they pass both tests and the caps.

| Lane | Territory | Assigned to |
|---|---|---|
| **A** | Birthday/celebration ritual, life-transition markers, well-being at anniversaries | belated-birthday-wishes |
| **B** | Computer-mediated communication, messaging brevity, mobile text behaviour | 2-line-birthday-wishes, birthday-status-for-whatsapp |
| **C** | Multilingual communication, code-switching, script and transliteration in Indian digital text | birthday-wishes-in-hindi, birthday-wishes-in-tamil, birthday-wishes-in-gujarati, birthday-wishes-in-telugu |
| **D** | Gratitude, reciprocity, acknowledgement norms | thank-you-for-birthday-wishes |
| **E** | Extended kinship, aunt/uncle/nephew relationships, family networks | birthday-wishes-for-nephew |
| **F** | Food ritual, cake and shared eating, commensality | what-to-write-on-a-birthday-cake |

Lane C is shared by four posts, so **each must use a different journal or repository**
and a different language-specific angle. Coordinate through distinct subject matter:
Devanagari input behaviour, Tamil diglossia, Gujarati diaspora usage, Telugu script
digitisation. Do not all cite the same multilingual-internet survey.

---

## 4. Language posts — mandatory blocker

Four of these ten are language posts (Hindi, Tamil, Gujarati, Telugu). Any wish text
you compose in those scripts is **machine-composed and unverified**.

Record this in `auditReport.failed` as a **structural** failure, with a `why` naming the
condition that closes it: *"native-reader sign-off required; no agent can verify Tamil
idiom or diacritics."* Do not mark it fixable and do not quietly pass it. The rakhi
batch shipped six posts with this blocker and the user publishes them only after a
native reader signs off — same rule here.

Hindi (Devanagari) is the lowest risk of the four; Tamil and Telugu the highest.

---

## 5. Shared targeting

- `batchMeta.categorySlug`: **`milestone-birthdays`** for all ten. These are birthdays,
  not festivals, so `indian-festivals` does not apply. Live slug confirmed 2026-08-26.
- `batchMeta.templateUrls`: choose 1–3 from `TEMPLATE_LINKS` in `app/lib/prompt.ts`.
  The birthday-relevant ones are:
  - `https://subhsandesh.in/birthday-gf` — birthday page for a girlfriend/partner
  - `https://subhsandesh.in/birthday-bestfriend` — birthday page for a best friend
  - `https://subhsandesh.in/birthday-friend` — birthday page for a friend
  - `https://subhsandesh.in/birthday-parents` — birthday page for parents
  - `https://subhsandesh.in/templates` — all templates
  Pick by who the post is actually addressed to. A nephew post should not link
  `/birthday-gf`. **Never invent a slug.**
- All ten slugs were checked against live Strapi on 2026-08-26 and are **free**.

---

## 6. Known cannibalisation risk — check before you link

The site has **905 live articles, 181 birthday-related**, including 45
`birthday-wishes-for-<relation>` posts and 101 `*-template` pages. Notably live already:
`birthday-wishes-for-brother`, `-sister`, `-wife`, `-husband`, `-friend`,
`-best-friend`, `-teacher`, `-boss`, `-daughter`, `-son`, `-jiju`, `-bhabhi`,
plus `birthday-thank-you-card-template` and `free-birthday-wish-website-maker`.

Your post must not restate one of those. Two specific collisions to respect:

- **thank-you-for-birthday-wishes** vs the live `birthday-thank-you-card-template` —
  yours is about *what to say when replying*, not about a printable card. Stay on
  messages; do not drift into template territory.
- **2-line-birthday-wishes** vs the 45 live relation posts — yours is about *length*,
  not about a relationship. The organising principle is the 96-character finding.

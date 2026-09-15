# Research brief — `long-distance-gift-for-best-friend`

Batch `2026-09-15-virtual-gift-30`, wave 2. Keyword: **long distance gift for best friend**.
Secondaries: `online gift for best friend`, `what to gift online friend`.
Market: India. Evergreen. Written 2026-09-16.

---

## 1. SERP, hand-scored

Source: `SERPS-WAVE2.md`, `scripts/serp-ddg.mjs`, `kl=in-en`, collected 2026-09-15.

| # | URL | Shape |
|---|---|---|
| 1 | theatlasheart.com/gifts-for-long-distance-friends/ | affiliate listicle (37 items) |
| 2 | giftrabbit.com/long-distance-friendship-gifts/ | affiliate listicle (40 items) |
| 3 | thepioneerwoman.com/.../best-long-distance-gift-ideas/ | magazine listicle (25 items) |
| 4 | amazon.com/long-distance-best-friend-gifts/**s?k=** | **transactional** |
| 5 | mylongdistancelove.com/long-distance-friendship-gifts/ | affiliate listicle (30 items) |
| 6 | walkingtowardslove.com/long-distance-birthday-gifts-for-best-friend... | affiliate listicle (23 items) |
| 7 | guidespot.com/long-distance-friendship-gift/ | affiliate listicle (13 items) |
| 8 | etsy.com/in-en/**market**/unique_gifts_for_best_friend_long_distance | **transactional** |
| 9 | longdistance.net/gift-guides/gifts-long-distance-best-friend | gift guide |
| 10 | letscelebration.com/long-distance-friendship-gifts/ | affiliate listicle (40 items) |

**Hand-scored ecommerce: 2 of 10** by the page-shape test in the wave-2 instructions
(`/s?k=`, `/market/`). The automated screen let this row through, i.e. it scored it at or
below the 4/10 cut, so on this row the screen and the hand score agree — unlike the two
rows where agents found 5/10 against a screened 3/10. There were no unfamiliar Indian
storefronts to miss here, which is precisely why the screen did not undercount.

**The honest number that matters more is a different one: 10 of 10 results are about
physical objects.** Nine are affiliate roundups of things you post; one is a storefront.
There is no digital-gift page, no personalised-page startup, and no authoritative
non-commercial page anywhere in the ten. Gate 2 as written passes; Gate 2 in spirit is a
warning, and it is recorded in the post itself ("They dominate for a reason — a page does
not always beat an object").

**Second finding, not in the plan:** despite `kl=in-en`, this SERP is served almost
entirely US content — amazon.**com** not amazon.in, US lifestyle blogs, US magazine
brands. Only the Etsy result is India-localised (`/in-en/`). There is no Indian page
competing for this query at all. That is the opening, and it is why the post is written
around Indian intercity/overseas migration (PG rooms, hostel blocks, company flats)
rather than around a generic "long distance" framing.

### Fan-out sub-queries (India autocomplete, `content/keywords/.../autocomplete.csv`)

`long distance gift for best friend` appears at volume 600, difficulty 6, position 3.
Live completions on the stem: `long distance gift without`, `long distance gift free`,
`long distance gift online`, `long distance gift maker`, `long distance gift in`(dia),
`long distance gift delivery`, plus the sibling `digital gift for best friend` (650).
H2s were written against `without`, `online`, `delivery` and `india`.

---

## 2. Cannibalisation check against `virtual gift for best friend` (wave 1)

Required by the wave-2 brief. Ran `node scripts/serp-ddg.mjs "virtual gift for best friend"`
(one call; `scripts/serp.mjs` and WebSearch/WebFetch were not touched).

Wave-1 keyword's ten: giftfeels.com ×2, classpop.com, aiskyla.com, gifft.me,
surprises.gift, virtualgift.me, aiskyla.com/blog, Pinterest (excluded), etsy.com/market/.

**URL overlap: 0 of 10. Domain overlap: 1 (etsy.com, different URLs).**
Far below the 4-of-10 abort threshold, so this row is **DIFFERENTIATE, not abort**.

The zero is itself the evidence: Google reads `virtual gift for best friend` as a
software query (it returns personalised-page startups) and `long distance gift for best
friend` as a shopping query (it returns parcels). They are not the same SERP and there is
no self-competition to manage.

**The split, in one sentence:** the wave-1 post answers *which digital format to pick for
a friend*; this post answers *what to do when the parcel — the thing this searcher is
actually shopping for — cannot work*, and it is written for the specific case of a friend
who moved for work or study.

**Content-overlap risk was the real risk, and it was managed deliberately.** The wave-1
post is subtitled "What to Send From Another City", already runs seven formats including
prose descriptions of `/searched` and `/nutrition`, and already cites migration
(newsonair, students abroad) and friendship-turnover research (research.aalto.fi). So this
post takes none of that ground:

- No format listicle. Three formats only, each justified by one research finding.
- Different research entirely — friendship *dissolution* causes, not turnover rates.
- The wave-1 post asks "do these come across as romantic?" in an FAQ; this one makes the
  register problem a body section and names the specific templates that fail it.
- Different first-party opening pair (94.1% + 49.0% here; wave 1 opened on 40.6% + 6.2h).
- The wave-1 post is cross-linked from the closing section, as required.

---

## 3. Sources — how they were found and what each one is for

Europe PMC was not attempted beyond the status note: it is at 3/3 in `SPENT-SOURCES.json`
and therefore banned regardless of whether it had recovered from the 2026-09-16 503s.
OpenAlex was not attempted (documented 429). OpenAIRE was queried twice and returned zero
results for both queries — its response envelope appears to have changed; not retried.
Discovery was therefore **Crossref + DOAJ**, with landing pages verified by
`ctx_fetch_and_index` before citing. Every domain below was checked against
`SPENT-SOURCES.json` **and** against all 53 sibling JSONs in `blogs/`; all four are new to
the batch.

| Source | Used for | Cap status |
|---|---|---|
| researchrepository.wvu.edu/etd/1832/ (2003) | Pre-college friendships more susceptible to dissolution than college ones; lack of common experiences the cause most often named for a friendship that actually ended | new domain, 2 URLs by me only (≤3) |
| researchrepository.wvu.edu/etd/693/ (2001) | 200 early adolescents, mean age 12.45: problems and dissolution have different causes; dissolution most often a lack of common experiences | same domain, 2/3 |
| ijcer.net/index.php/pub/article/view/47 (2017-12-31) | International students: strong preference for co-national friendships, limited close bonds with host nationals — the friend who moved has not replaced you | new domain, CC BY-NC |
| jiecr.org/index.php/jiecr/article/view/1946 (2025) | 349 first-year migrant students, Yogyakarta: homesickness and culture shock negatively influence self-adjustment | new domain, open access |
| studia.reviste.ubbcluj.ro/.../9250 (2025) | Emerging adults: friendships lacking reciprocity track higher stress — the argument for a gift that does not demand a reply | new domain, open access |

All five were read as abstracts on their landing pages; that is stated in the body's
source list and in every `sources[].stat`. Nothing is claimed past the abstract.

**Rejected after checking:**
- `journalqd.org/article/view/3970` (Facebook Buy Nothing gifting groups) — genuinely
  relevant, but already cited by `long-distance-relationship-gifts-online-free.json`.
  Taking the second slot would have put two posts in this batch on one source and failed
  the swap test outright.
- `scirp.org` "Perceived Difficulty of Friendship Maintenance Online: Geographic Factors"
  — the single best-matched paper found anywhere in the search. SCIRP returns **403** from
  this sandbox on both the article page and the DOI redirect. Could not be opened, so not
  cited. Worth retrying from a different environment.
- Elsevier / Wiley / Taylor & Francis hits on gift-giving register (jbusres 2021, Psych &
  Marketing 2021/2024, Cogent Social Sciences 2022) — all on the documented blocked list.

**Generic context statistics used: zero.** The brief allows one. An Indian internal-migration
figure would have strengthened the migration framing, but `mospi.gov.in` PDFs 404,
`censusindia.gov.in` refused the connection, `indiabudget.gov.in` Economic Survey chapter
URLs 404 and `journals.lww.com` 403s. Rather than reach for an unrelated PIB release to
fill the slot, the migration claim is carried by the two student-migration papers, which
pass the subject test where a population statistic would not.

**Research gap, stated honestly:** no open-access study could be found on the *register*
question — whether a gift coded as romantic is received badly between platonic friends.
Terms tried: `gift giving platonic friends romantic partners difference`, `inappropriate
gift relationship signalling givers recipients`, `gift giving friendship reciprocity
norms`, `gift friendship adolescents`, `handmade gift effort`. The nearest hits were all
paywalled consumer-psychology work. The register section is therefore argued from the
platform's own template mix and from the templates' own configuration text, not from
research, and it says so.

---

## 4. First-party facts

Opening pair chosen to avoid the batch tic: **94.1% published-and-shared** and **49.0%
phone opens**, both inside the first 150 words. Checked against the three nearest
siblings — `virtual-gift-for-best-friend`, `birthday-surprise-page-for-sister` and
`long-distance-relationship-gifts-to-stay-connected` — none opens on this pair.

Also used: 3,377 creators at 1.29 pages each; the 25.8% / 24.6% / 23.9% template mix; and
occasion-dated pages at 3.7% (in an FAQ). **The mandated disclosure is in body prose,** not
only in this brief: the database records which template was opened, not who received it,
so the /love-gf share does not prove the recipient was a girlfriend.

**No pricing claim anywhere.** The `facts.md` pricing block is empty, so both the body and
the relevant FAQ say the current pricing could not be confirmed and point at `/templates`.

---

## 5. Templates — assigned, used, and the ones that do not transfer

Assigned: `/streak`, `/searched`, `/nutrition`. All three used, plus `/templates` at the
closing CTA. Descriptions were read in `app/lib/prompt.ts` first; `/searched` and
`/nutrition` are jokes by design and are described as jokes.

A parallel sibling (`birthday-wish-website-for-friend`) had not landed in `blogs/` at the
time of drafting, so the angles were chosen to be non-overlapping by construction rather
than by comparison. **It landed before the verifier run and was checked afterwards:** it
took `/photo-puzzle`, `/catch`, `/templates` and `milestone-birthdays`, so there is zero
template overlap and zero source overlap (it cites linguistics and greetings-behaviour
journals). Its "which templates transfer" section is adjacent to the register section
here, but it argues from `/birthday-gf` at 8.1% and `/love-gf` at 32.4% of views toward
*what to write on a birthday page*, where this post argues from the 25.8/24.6/23.9%
creation mix toward *which long-distance-coded templates are traps*. Different templates
named, different evidence, different question.

The three assigned templates are used as follows:

- **`/streak`** — framed as the direct answer to the *lack of common experiences* finding:
  it manufactures new shared experience daily rather than commemorating old experience.
- **`/searched`** — framed as the *register* solution: a joke cannot be misread, so nothing
  in a fake knowledge panel can be mistaken for a confession.
- **`/nutrition`** — framed as the *blank-page* solution: short label fields make it
  physically impossible to drift into a love letter.

**Templates that do not transfer to a friendship, and why** (named in the body):

- **`/train-ticket`** — its own description is "a long-distance love letter disguised as a
  train ticket… the running status of the relationship". It is the obvious pick for a
  long-distance keyword and the single worst choice for this one.
- **`/hold-my-hand`** — the gesture being imitated is touch.
- **`/court-of-love`** — a trial for romantic offences.
- **`/vending-machine`** — "pay with a confession" is a couple's mechanic.
- `/love-gf`, `/darling`, `/bouquet-gf`, `/proposal`, `/date-invitation`, `/loveflix`,
  `/flags` — all explicitly partner-addressed.

`/capsule` and `/photo-puzzle` do transfer (the sister post reached the same conclusion),
but the wave-1 sibling already links both, so they were left alone.

---

## 6. Deviations from the row, recorded

1. **`categorySlug` is `miss-you-across-miles`, not the row's `digital-gifts-romance`.**
   `BRIEF.md` §5 assigns `miss-you-across-miles` to the long-distance posts, and this
   keyword begins "long distance". Filing a post whose entire argument is *this is not
   romance* under a category named "romance" reproduces the mis-categorisation the post
   exists to correct. Both slugs are on the verified-live list.
2. **`templateUrls` has four entries** (`/streak`, `/searched`, `/nutrition`, `/templates`)
   because `/templates` is required at the CTA and exists in `TEMPLATE_LINKS`. The blog
   cross-link to `/blog/virtual-gift-for-best-friend` is a blog link, not a template link,
   and per BRIEF-WAVE2 §3 is excluded from the 2–4 count.
3. **No generic context statistic**, against an allowance of one — see §3.

---

## 7. Audit

50 passed, 0 failed. Strings copied byte-verbatim from `references/publish-checklist.md`
with `**bold**` markers kept and wrapped items joined with single spaces;
`passed ∩ failed = ∅` and `|passed| + |failed| = 50` asserted in the build script before
the file was written. Body is 1,791 words on a plain whitespace split.

`node scripts/verify-batch.mjs content/batches/2026-09-15-virtual-gift-30` was run and only
lines naming this slug were acted on. Source-cap findings were ignored per BRIEF-WAVE2 §7;
caps were instead checked by hand against `SPENT-SOURCES.json` and all 53 sibling JSONs
before any source was committed.

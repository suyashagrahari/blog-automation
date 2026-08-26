# Batch brief — 2026-08-25-rakhi-2027

47 Raksha Bandhan keywords. Source: `content/keywords/2026-08-25-raksha-bandhan/`.

## Volume data — TOOL, not EST

The user supplied real keyword-tool figures for the head terms. These are the only
`TOOL` numbers in this batch; everything else is `EST` and must stay labelled so.

| Keyword | Volume | KD |
|---|---|---|
| `raksha bandhan 2025` (→ 2026/2027 variants) | **40,500/mo** | 30% |
| `rakhi 2025` (→ 2026/2027 variants) | **22,200/mo** | 25% |

KD 30% / 25% is moderate. The earlier `EST` pass inferred an authority wall on
these from SERP composition; the tool data says the backlink barrier is lower than
that. Both readings can be true — KD measures links, the SERP showed page *type*
(panchang, calendar, YouTube). Treat the head terms as reachable only by a hub or
a genuinely better dated guide, not by a generic wishes post.

## Timing — read this before drafting

**Rakhi 2026 = Friday 28 August 2026, three days from this batch date.**
**Rakhi 2027 = Tuesday 17 August 2027.**

No post in this batch can rank for the 2026 festival. Every post is written for
the 2027 cycle and for the year-round long tail. Where a keyword carries a year,
prefer the **2027** framing and structure the page to be re-datable rather than
rewritten. The two `2026` head-term keywords are included at the user's explicit
request; write them as evergreen-with-a-date-block, not as news.

## The first-party data problem — every agent must read this

`content/facts.md` was refreshed 2026-08-25 against the live DB: 17 facts.

**There is no rakhi-specific first-party data.** Direct DB query:

- `rakshabandhanpages` — **3 documents**
- `rakshabandhansisterpages` — **3 documents**
- rakhi template views — **39** of 36,202 total (0.1%)

Compare `lovegfpages` at 931 pages / 13,581 views. n=3 supports no rate, no
percentage, no "most creators" claim. **Do not compute a statistic from it.** If
you want to reference rakhi template usage at all, say the honest thing: the
template is new and lightly used.

What *is* usable is platform-wide behaviour, which applies to a rakhi page as much
as any other:

| Fact | Assigned to |
|---|---|
| 36,202 recorded views · 12.2 avg views per shared page | send/share angles |
| 51.1% of shared pages are opened on a phone (18,497 of 36,202) | WhatsApp / mobile angles |
| 44.2% of creators password-protect before sharing (1,315 of 2,973) | privacy / personal-message angles |
| 99.4% of started pages are published and shared (2,956 of 2,973) | intent / completion angles |
| Median 6.9h between first save and last edit (n=931, love-gf) | effort / craft angles |
| 2,973 pages across 15 page types · 2,466 creators | scale / context angles |

**These are already heavily reused.** Across the existing 48 posts: the 6.9h median
appears in 25, mobile share in 37, password-protect in 32, total-pages in 44.
Each agent is assigned a **different primary fact** below to stop 47 posts opening
on the same number. Use your assigned fact as the lead number in the first 150
words; you may use others as support.

**Record the reuse honestly in `auditReport.failed`.** If your post's first-party
facts are platform-wide rather than keyword-specific, that is a real weakness and
it goes in `failed` with a `why` naming it — not in `passed`. Do not pretend a
generic number is a rakhi insight. The condition that would close it: rakhi
template usage above ~500 pages, re-query then.

## Source rules — tighter than usual because of batch size

Existing corpus already has **4 domains over the skill's 3-post cap**
(drikpanchang 5×, indiapost.gov.in 4×, doi.org 4×, pib.gov.in 4×) across 221
unique URLs. At 47 more posts the cap cannot hold globally.

Therefore, for this batch:

1. **Never use** drikpanchang.com, indiapost.gov.in, pib.gov.in, trai.gov.in,
   census-style generic statistics. They are exhausted.
2. **At most 1 government/context source per post**, and only if nothing better exists.
3. **Check `content/batches/2026-08-25-rakhi-2027/blogs/` before adding a source** —
   siblings written by other agents are visible. A URL may appear in at most 2
   posts in this batch, a domain in at most 3.
4. **Search the phenomenon, not the festival.** For a Gujarati-language keyword,
   search `code switching regional language digital greeting` or `Gujarati diaspora
   family communication`, not `raksha bandhan gujarati`.
5. If no topical research exists, **say so in the audit and name the terms you
   tried.** Do not pad with another government figure.

## Category and templates

- `batchMeta.categorySlug` = **`indian-festivals`** for every post in this batch.
- `batchMeta.templateUrls` — from `TEMPLATE_LINKS` in `app/lib/prompt.ts` only.

  **CORRECTION 2 (supersedes correction 1).** Correction 1 said
  `/happy-rakshabandhan-to-sister` did not exist. **That was wrong.** Both rakhi
  pages are live — verified by HTTP 200 from subhsandesh.in, titles "Happy Raksha
  Bandhan for Brother" and "Happy Raksha Bandhan for Sister" — and
  `app/components/SettingsPanel.tsx` names both in its search-alias table. The real
  problem was that `TEMPLATE_LINKS` in `app/lib/prompt.ts` was missing the sister
  entry. **That has now been fixed in the repo.** Both are valid:

  - `https://subhsandesh.in/happy-rakshabandhan-to-brother` — sister → brother
  - `https://subhsandesh.in/happy-rakshabandhan-to-sister` — brother → sister
  - `https://subhsandesh.in/templates` — browse-all, safe as an extra

  Pick the one whose RECIPIENT matches your keyword. A post about wishes *for a
  brother* links the brother page. Never link a template whose recipient
  contradicts the post. Never invent any other slug.

## Concurrency and file safety

10 agents run at once — above the skill's stated cap of 6. The cap exists because
in the 2026-08-13 batch three agents each wrote `scratchpad/body.md` and overwrote
one another mid-draft. The mitigation is mandatory here:

**Every temporary file you write must be named `<your-slug>-<purpose>.md`.**
Never write a bare `body.md`, `draft.md`, `notes.md` or `research.md`.

You own exactly two output paths and must not touch any other agent's:

```
content/batches/2026-08-25-rakhi-2027/blogs/<your-slug>.json
content/batches/2026-08-25-rakhi-2027/research/<your-slug>.md
```

Do not create or edit `batch.json` — the orchestrator writes it after all agents finish.


---

## Source ledger — CHECK AND APPEND BEFORE YOU CITE

Wave 1 showed the cap pressure is real: `arxiv.org` appeared in 4 briefs
simultaneously and `arXiv:2407.08172` hit the 2-post cap inside one wave, because
agents pick sources concurrently and cannot see each other's choices in time.

`SOURCES.md` in this batch directory is the shared ledger. Before you finalise a
source list:

1. **Read `SOURCES.md`.**
2. If your candidate URL already has 2 entries, or its domain already has 3, **pick
   something else.**
3. Append your rows to `SOURCES.md` as soon as your sources are settled — one line
   per source, `| url | domain | your-slug |`. Append only; never rewrite another
   agent's line.

Corpus-wide counts to respect on top of this batch (from the existing 48 posts):

| Domain | Already used in | Headroom in this batch |
|---|---|---|
| drikpanchang.com | 5 posts | **BANNED** |
| indiapost.gov.in | 4 | **BANNED** |
| doi.org | 4 | **BANNED** — cite the publisher's own URL instead |
| pib.gov.in | 4 | **BANNED** |
| pmc.ncbi.nlm.nih.gov | 3 | **0 — do not use** |
| en.wikipedia.org | 3 | 0 for research; entity disambiguation only, uncounted |
| journals.plos.org | 3 | 0 |
| digitalcommons.usu.edu | 3 | 0 |
| arxiv.org | **3 of 3 used in this batch — SATURATED** | **0 — do not use** |
| frontiersin.org | 2 in this batch | 1 |
| europepmc.org | 2 corpus + 1 batch | 0 |

**Live saturation as of wave 1 (3 posts done):** `arxiv.org` is FULL. `doi.org` was
used once before it was banned (`raksha-bandhan-wishes-in-gujarati`) and is now at 5
corpus-wide — that post is queued for source remediation. Do not add either.
Prefer publisher-native URLs: `frontiersin.org`, `europepmc.org` (0 left),
`journals.sagepub.com`, `link.springer.com`, `tandfonline.com`, university
`digitalcommons`/repository domains, `nature.com`, `sciencedirect.com` open-access.

**This is the binding constraint on batch size, not agent count.** If you genuinely
cannot find 4 compliant sources for your keyword, do not pad and do not break the
cap — write the post with fewer, and record in `auditReport.failed` that the source
count is short, naming every search term you tried. A short honest source list is a
better outcome than nine posts sharing one paper.

---

## Gate 2 cuts, made mid-batch (2026-08-25)

Five queued keywords were cut after SERP verification, and five reachable ones
substituted so the batch still totals 47. Recorded here because a silent
substitution reads as "we covered everything" when we did not.

| Cut | SERP that killed it |
|---|---|
| `raksha bandhan poster maker` | PosterMyWall ×2, Pollo AI, Pixazo AI, Appy Pie, Canva — AI poster generators |
| `raksha bandhan collage maker` | Apple App Store, Google Play, Pinterest ×2, CorelDraw — mobile apps |
| `raksha bandhan template photo` | same image/app cluster |
| `raksha bandhan template edit` | same image/app cluster |
| `raksha bandhan online photo editor` | same image/app cluster |

These are Gate 2 failures, not Gate 4 — the barrier is page *type*, not authority.
A blog post cannot occupy an App Store SERP. Note also that `Raksha Bandhan (film)`
(Wikipedia) ranks on both SERPs checked, which means Google has weak intent data for
these phrasings.

**They are also cannibalisation risks.** SubhSandesh already has seven posts aimed
at the make-a-rakhi-card-online cluster: `make-raksha-bandhan-card-online-with-name`,
`rakhi-2026-custom-photo-wishes-card-maker-online`,
`raksha-bandhan-video-maker-with-photo-and-music`,
`raksha-bandhan-wishes-with-name-and-photo`, `write-name-on-happy-raksha-bandhan-photo`,
plus this batch's `raksha-bandhan-wishes-maker` and
`raksha-bandhan-greetings-online-free`. Five more would have made thirteen posts
competing for one SERP.

| Substituted in | Why it is reachable |
|---|---|
| `what to write in raksha bandhan card` | pure content intent — an article IS the answer |
| `raksha bandhan wishes for elder brother` | pairs with the younger-brother post; blog SERP |
| `raksha bandhan wishes for sister in gujarati` | language × recipient; the sister template now exists |
| `raksha bandhan quotes without sister` | blog SERP, genuine unserved audience |
| `rakhi 2027 wishes for sister` | the 2027 year-gap play, sister-directed |

---

## Search instruments are unreliable after budget exhaustion (2026-08-26)

WebSearch hit 200/200 mid-batch. Agents fell back to Bing / DuckDuckGo / SearXNG.
The `raksha-bandhan-wishes-for-sister-in-kannada` agent ran **controls** on those
fallbacks and found them degenerate for this task:

| Instrument | Behaviour |
|---|---|
| **Bing** | Returns the **identical top-10** for `wishes in gujarati` and both Kannada queries — it discards the language token and serves a cached head-term SERP. A Kannada-script control returned French/German Amazon deals. |
| **SearXNG** | Returned Literotica, a RuneScape wiki and a porn aggregator for a rakhi greetings query. Gujarati control: 0 results. |
| DuckDuckGo | HTTP 202 |
| Mojeek, Yandex | captcha |
| Ecosia | 403 |
| Brave | 429 |

**Consequences, and they are not uniform:**

1. **Language-variant keywords cannot be SERP-verified at all** in this session. Bing
   collapses them onto the head term. Any clustering decision about a language pair is
   therefore unmeasurable, not merely approximate.
2. **English keywords appear to survive** — the `rakhi-2027-wishes-for-sister` agent got a
   coherent, checkable Bing set (ganeshaspeaks, firstcry, astroyogi, Britannica, oneindia,
   every one dated 2026) that matched what WebSearch had returned earlier for the same
   cluster. Treat English results as approximate-but-real; treat language-variant results
   as unusable.
3. Every post written after exhaustion must carry `Phase 1 SERP teardown not run via
   WebSearch — budget exhausted` in `auditReport.failed`, naming the instrument used.

## Cancelled: the language × recipient split

`raksha bandhan wishes for sister in kannada` — **not written.** The general Kannada
post already ships the ಅಕ್ಕ/ತಂಗಿ distinction as two H3 sections with wishes in script +
transliteration + gloss, a ಸಹೋದರಿ non-blood section, two sister-directed FAQs, and
`/happy-rakshabandhan-to-sister` in both `templateUrls` and body. There is no extension
left, and band-2 volume (300–1,000/mo EST) cannot carry a three-way split.

Same verdict applies without re-testing to:
- `raksha bandhan wishes for brother in kannada` — sections 1–2 of the general post cover ಅಣ್ಣ/ತಮ್ಮ in the same format
- `raksha bandhan wishes for brother in gujarati` — pending the sister-Gujarati stop-check, but the general Gujarati post is structured the same way
- `raksha bandhan letter for brother in gujarati` — "letter" vs "wishes" is not a SERP distinction at 300–1,000/mo

**Cheap alternative recommended instead of new URLs:** add 1–2 more ಅಕ್ಕ/ತಂಗಿ wishes to
the general Kannada post to balance depth against the brother half, plus one FAQ in
searcher phrasing ("What should I write for my sister in Kannada on Raksha Bandhan?").
Catches the long tail without splitting the cluster.

### Gujarati stop-check — and a correction to my own substitution reasoning

`raksha bandhan wishes for sister in gujarati` — **cancelled.** Brave Search (country=IN)
returned 3 shared URLs in the top 10 against the general Gujarati post: gujaratiwish.com
(pos 1 / 1), wishgujarati.com (4 / 2), joliecarte.com (5 / 9). Widening to 14 extracted
results adds a shared Pinterest pin — the verdict strengthens.

Corroborating, and more persuasive than the count:
1. The top two results for the *sister-qualified* query are the **general** Gujarati wishes
   pages. The engine's best answer for "for sister" is a page that is not sister-specific.
2. Five of ten are titled "for brother **and** sister in gujarati" (webdunia, gujaratijagran
   ×4). Gujarati-language publishers do not split the directions.
3. No result is sister-directed *and* Gujarati-specific. The only sister-exclusive results
   are *gift* pages — different intent. There is no SERP to enter.

**Bing was pulled and deliberately discarded** — it returned the identical 10 URLs in
identical order for both queries, having dropped both "wishes" and "gujarati". A 10/10
overlap there is modifier-stripping, not evidence.

**My substitution rationale was wrong.** I added this keyword to the batch on the grounds
that "the sister template now exists" — reasoning from SubhSandesh's template inventory
rather than from search demand. Product inventory is not evidence that anyone searches for
something. Recorded so the same error is not repeated in the next run.

`raksha bandhan wishes for brother in gujarati` — cancelled by inherited verdict; it sits
in the festival's default direction where publishers merge both, so the mechanism is
stronger, not weaker.

`raksha bandhan letter for brother in gujarati` — **un-cancelled.** It differs by *format*
(letter vs wishes), not by recipient, so the merge mechanism above may not apply. Needs its
own Brave IN stop-check before drafting.

### Gate 2 cut #6 — `raksha bandhan photo video maker with music`

Cancelled 2026-08-26 on two independent grounds, either sufficient. Brave `country=IN`,
HTTP 200, no 429, Bing deliberately not pulled.

**1. Page type.** 11 of 15 top results are app-store or APK-download pages — 4× Google
Play, 3× Softonic, 2× soft112, CNET download, a MemuPlay emulator how-to. **Zero
article pages in the top 15.** Position 1 is
`raksha-bandhan-photo-video-maker-with-music.soft112.com`, whose domain and title are
the keyword *verbatim*, because an Android app carries that name. The query is
navigational. This is a harder cut than the first five — those at least had Pinterest
and CorelDraw content pages on the SERP.

**2. Duplicate.** 14 of 15 URLs shared with the live post
`raksha-bandhan-video-maker-with-photo-and-music`, positions 1–8 identical in identical
order. Not the Bing modifier-stripping artefact — the two queries are the same token
set differing only in word order and *with*/*and*, so identical SERPs are the correct
response to one semantic query.

**3. The orchestrator's brief described a post that already exists.** I briefed the
"honest angle" as: SubhSandesh ships no MP4, so compare a video file against a page
that plays. The live post's `batchMeta.angle` already says that, its title is
*"…: MP4 or Link?"*, and it carries an H2 *"When an MP4 editor is the right choice and
SubhSandesh is the wrong one."* Recorded because this is the second time an assigned
angle turned out to be in use — the fix for the next run is to grep existing
`batchMeta.angle` values before writing a brief, not after.

**Cheap alternative instead of a URL:** add one FAQ to the live post — *"Is there a
Raksha Bandhan photo video maker with music app?"* — answered honestly, to catch the
residual informational sliver.

## Search instruments — corrected by later agents (2026-08-26)

Supersedes the earlier table. Measured, not assumed:

| Instrument | Verdict |
|---|---|
| **DuckDuckGo HTML POST endpoint** | **WORKS, and is the cheapest.** The earlier "HTTP 202" did not reproduce. Try this first. |
| **Brave, `country=IN`** | Works with UA rotation + backoff. 429s hard under concurrency — one agent got through on its seventh attempt. Keep concurrency ≤3. |
| **Bing** | **Discard.** Two independent failure modes now recorded: it strips modifiers (identical top-10 for Gujarati and Kannada queries; `"56 APO"` returned Samsung, Flipkart, Vedantu, LeetCode), and it has returned HTTP 200 with zero extractable URLs. |
| SearXNG | Returned Literotica and a RuneScape wiki for a rakhi query. Unusable. |
| Mojeek, Yandex | captcha · Ecosia 403 · Startpage Anubis PoW · Yep 403 |

**Always run an instrument control before trusting a count.** Two agents did: one confirmed Brave genuinely reacts to "in english" and to "lines" before resting a verdict on it; another proved Bing does not. A shared-URL count from a modifier-stripping engine reaches the right answer for the wrong reason, which is worse than no answer.

## Reusable sources found in this batch, for the next run

`docs.iza.org/dp<N>.pdf` (free text-extractable PDFs — time use, labour, holidays) ·
`ceur-ws.org` Vol-2130 (Emoji2018 workshop) · `dsal.uchicago.edu` (Platts, Molesworth) ·
`sanskrit-lexicon.uni-koeln.de` (Monier-Williams) · `gretil.sub.uni-goettingen.de`
(Sanskrit e-text corpus, greppable) · `aa.usno.navy.mil/api` (authoritative moon phases) ·
`eclipse.gsfc.nasa.gov` · `journal.sjdm.org` · `swarsindhu.pratibha-spandan.org` (UGC CARE) ·
`ijfmr.com`, `ijip.in`, `ijhssi.org` (Indian OA journals) · `prokerala.com` (location-aware
panchang — the answer to a national muhurat being wrong for most of the country).

**Verified-by-code instead of cited:** Python's bundled Unicode database (UCD 16.0.0) can
settle codepoint claims when `unicode.org` is capped — one agent iterated 0x0–0x10FFFF to
establish that of 148,853 named characters, none contains RAKSHA or BANDHAN.

## ⚠ INSTRUMENT TABLE — SUPERSEDED AGAIN (2026-08-26, later)

**The "try DuckDuckGo first" advice above is STALE. DuckDuckGo's HTML POST endpoint is
now serving a CAPTCHA** — HTTP 200, ~14 KB, **zero extractable URLs**, body reads
"Select all squares containing a duck" (code `aab3`). Verified across four queries.

**This is the most dangerous failure mode in the whole workflow, and it is not obvious:**
a broken instrument returning zero results produces a **0/0 overlap**, which reads as
*"no collision — write the post."* A false green. One agent nearly shipped on it and only
its own instrument control caught it.

**Therefore: run an instrument control before trusting ANY count, every time.**
Not once per batch — once per agent. The engines are changing under us within the hour.

Current standing (each verified by control, not assumed):

| Instrument | State |
|---|---|
| **Brave, `country=IN`** | **The only working instrument.** 3 attempts with UA rotation and 10s + 6s·n backoff; an earlier pass burned 4 on 429. May have no API key in some environments — one agent found none. |
| DuckDuckGo HTML POST | **BROKEN — CAPTCHA, returns 0 URLs with HTTP 200.** Produces false greens. |
| Bing | Discard — strips modifiers AND has returned 200 with 0 extractable URLs |
| Mojeek, SearXNG, Startpage, Marginalia, Yep, ddg-lite | captcha, PoW, or 501 |

**Parsing methodology that matters:** parse Brave's `data-type="web"` blocks, **not raw
hrefs**. Wikipedia alone contributes ~10 section-anchor rows to a single result and will
falsely inflate any overlap count.

### Cancellation #14 — `who celebrate raksha bandhan`

5 of 10 shared URLs with `why raksha bandhan is celebrated` (Wikipedia, fnp.com,
utsav.gov.in, bbc.co.uk/newsround, incredibleindia.gov.in). Stronger than the count:
**Brave expanded Wikipedia into the section anchors `#Traditional_regions_of_observance`
and `#Regional_variations_in_ritual` on the "who" query** — the engine's best answer to
"who" is a section of the page it serves for "why". No result in the set is
demographically framed; positions 1–2 are general "what is Raksha Bandhan" pages.

**Collision #4, mine again.** The differentiator I assigned — Narali Purnima, Avani
Avittam, Jhulan — is already published in `how-raksha-bandhan-is-celebrated` as a
five-row "same full moon, five distinct observances" table (Narali ×6, Upakarma ×11,
Avani ×2, Jhulan ×5). **Three of the five regional examples I named were already there.**
Sikh observance sits in two siblings, Muslim in `why-sister-ties-rakhi-to-brother`, the
nine-state gazette in four live posts. Genuinely unclaimed: **Jains (0 mentions) and
diaspora (0)** — two paragraphs, not a post.

**Where the demand actually lives:** control query `who does not celebrate raksha bandhan
south india` returned **0 of the cancelled keyword's top 10** and surfaced topic-correct
pages. If a new URL is wanted here, target **`is raksha bandhan celebrated in south
india`** — measured distinct SERP, weak incumbents, genuinely demographic intent.

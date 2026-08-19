# Research brief — `raksha bandhan wishes with name and photo`

- **Batch:** `2026-08-18-rakhi-2`
- **Slug:** `raksha-bandhan-wishes-with-name-and-photo` (Strapi check returned `total: 0` — free)
- **Intent cluster:** C02 · transactional · asset type `tool` · category `rakhi`
- **Volume / difficulty:** 1000–3000 EST · winnable, 9 weak in top 10 · priority P100
- **Researched:** 2026-08-18

---

## Phase 1 — SERP analysis

`WebSearch` for the exact keyword returns an almost pure field of name-on-image
generators. There is no AI Overview and no featured snippet for the phrase; the
SERP is a list of tool pages plus two Pinterest boards. Every result is a
competitor under `references/competitors.md`, so all five below were read and
none is cited or linked.

Word counts are visible-text extractions of the live HTML (scripts and styles
stripped), so they include navigation chrome — the real editorial prose on each
page is a good deal thinner than the number suggests.

| Page | Words (visible text) | Heading structure | Where the answer appears | Data cited (and date) | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|
| mynamepix.com/raksha-bandhan-wishes-with-name_116 | 353 | 1×H1, 2×H2, 1×H3, 5×H4 — all navigation except "About …" | Immediately, but the "answer" is a two-line pitch above an empty gallery ("0 images found" on fetch) | Festival date only: "Raksha Bandhan 2026 is on Friday, August 28" | Live "People Generating These Right Now" counter, social share row, category grid. No table, no FAQ | Third person, promotional, hedged ("best ever editor") | Image-gallery impressions; title tag is 48 chars with the keyword and a brand suffix |
| thefestivalwishes.com/wishes/raksha-bandhan-rakhi-wishes-with-name-edit | 1,993 | 6×H2 above the H1 (broken order), then 1×H1, 2×H3, 2×H4 | Buried — the H1 sits below six template promos | None | Per-template blurbs, `Article` JSON-LD, no FAQ, no table | Second person, warm, repetitive ("has never been easier") | Long-tail template pages ("AI … WhatsApp Status Frame With Name"); meta description truncated mid-sentence at 39 chars |
| mynameart.com/greeting-cards/raksha-bandhan | 712 | 1×H1, 16×H2 (mostly category nav) | First paragraph, one sentence | None | Category lists, no schema at all, no FAQ, no table | Third person, terse, typo in the intro ("Creaet") | Category-page crawl depth; H1 and title still stamped **2024** |
| createcustomwishes.com/…/raksha-bandhan-rakhi/ | 808 | 1×H1, 10×H2 (product cards), 7×H4 | First paragraph | Template counts only ("1.2k+", "680+", "532+") | WooCommerce grid with sort controls, `CollectionPage` + `BreadcrumbList` JSON-LD, no FAQ, no table | Third person, feature-listing | Volume of editable templates, plus a business/brand-logo angle nobody else covers |
| writenamepics.com/category/raksha-bandhan | 564 | 1×H1, 6×H2, 4×H3 | First paragraph, keyword-stuffed | None | Category lists, no schema, no FAQ, no table | Third person, keyword-dense, near-unreadable | Long-tail phrase coverage; live H2s still say **2024** and **2025** |

Two pages that also rank could not be read: `newmynamepix.com` returned HTTP 403
to every fetch, and `lifekafunda.com` was not fetched.

### What the SERP has in common

- All five are **image factories**. The output is a flat JPG or PNG. Not one of
  them produces anything the recipient can open as a page.
- **Zero third-party research.** No study, no survey, no dated statistic beyond
  template counts and the festival date.
- **Zero FAQ markup** and **zero comparison tables** across all five.
- **No downside anywhere.** Nobody names a case where their own format is the
  wrong one.
- **Stale on the page, not just in the index.** `mynameart` still says 2024 in
  its H1 and title; `writenamepics` has live H2s dated 2024 and 2025.
- The strongest page structurally (`thefestivalwishes`) puts six H2s **above**
  its H1, so its own answer is the last thing a retrieval system reaches.

---

## Phase 2 — Gap analysis

### Table stakes (must be present or the post looks incomplete)

- What "with name and photo" means in practice, stated plainly and early.
- A concrete step count for producing one.
- That it is free.
- The festival date (Friday, 28 August 2026).
- WhatsApp status and Instagram story as destinations, with their crop and their
  24-hour lifespan.
- Uploading your own photo versus using the template's stock artwork.

### The gap — what none of the five cover

1. **The format decision itself.** Every page assumes you want a JPG and sells
   you a JPG. None asks whether a downloadable image or a shareable page is the
   right artefact for *this* recipient. That question is the whole post.
2. **Whether the name does anything.** Five pages assert that personalisation is
   meaningful; none cites a single study, and the honest answer is "yes, a little,
   and inconsistently".
3. **What to write next to the name.** The generators hand over the image and
   leave the wording — the hardest part — entirely to the reader.
4. **Devanagari rendering.** A name typed into a fixed image slot clips its
   matras; a page reflows. Nobody mentions this despite selling Hindi templates.
5. **Privacy.** These sites accept an uploaded photo of your sibling and none
   discusses control of it afterwards. A password is a real differentiator here.
6. **Where the recommended format loses.** The image genuinely beats a link in a
   forty-person family group, on a feature phone, and when the sibling is in the
   next room. Saying so is the clearest E-E-A-T signal available on this query.

### Stale data to supersede

There is no statistic on any of the five pages to supersede — that is itself the
finding. What is stale is their *self-description*: 2024 and 2025 headings on
live 2026 pages. Superseding those costs nothing but a current date.

### Unanswered questions the pages raise

- "Share on WhatsApp status" — for how long, and to whom, exactly?
- "Upload your personal images" — what happens to that photo?
- "Add your name" — in which script, and what if it is long?

### Fan-out sub-queries (each became an H2, an H3 or an FAQ)

| Sub-query | Where it landed |
|---|---|
| What is a rakhi wish with name and photo? | H2 definition block |
| How do I make one? | H3 list of five formats |
| Does the name make a difference? | H2 research block |
| Image or link — which should I send? | H2 comparison table + H2 objection block |
| What do I write next to the name? | H2 |
| Is it free? | FAQ 2 |
| Will WhatsApp wreck the photo? | FAQ 3 |
| Can I write the name in Hindi? | FAQ 5 |
| How do I keep the photo private? | FAQ 6 |
| When is Raksha Bandhan 2026? | FAQ 7 |
| What size for status vs story? | FAQ 9 |
| He's abroad, on a laptop — does that change it? | FAQ 11 |

### Angle (recorded as `batchMeta.angle`)

> Wins by being the only post that treats "name and photo" as a **format
> decision** rather than a download — comparing a flat name-on-image JPG against
> a named, photo-bearing shareable page on measured behaviour (51.9% of
> SubhSandesh's 32,683 views open on a phone; 44.3% of 2,718 creators
> password-protect first) and naming the case where the JPG is genuinely the
> better artefact.

### Sibling-collision check

The nine posts in `2026-08-13-rakhi` are all *message-content* keywords (wishes
for a long-distance brother, shayari, Marathi, cousin, jiju, Instagram captions,
how to send on WhatsApp). This post is a *tool/format* keyword: it does not
supply wishes text as its payload, it decides which container the wish travels
in. The one adjacency worth watching is
`how-to-send-rakhi-wishes-on-whatsapp` — kept distinct here by never explaining
how to use WhatsApp, and instead comparing what a JPG and a link each do once
they arrive. No internal links to any unpublished sibling slug.

**Same-batch neighbour to watch.** Part-way through this draft a sibling brief
appeared at `research/personalised-raksha-bandhan-card-with-name.md` (still
empty at the time of writing). `personalised raksha bandhan card with name` is
the closest keyword in this batch to mine and the two could converge. The
separation this post relies on: it never presents itself as a card gallery and
never supplies card designs. Its payload is the **format comparison** — a flat
rendered JPG versus a live shareable page — plus the wording that goes next to
the name. A reviewer should check the two side by side before publishing; if the
card post also builds its spine around the JPG-versus-link tradeoff, one of the
two needs re-angling, and this one is the one carrying the transactional P100
keyword.

---

## Phase 3 — Third-party research

**Assigned lane:** personalisation effects on message reception, the
name-in-message effect, and image-versus-link sharing behaviour.

Searched the phenomenon, not the keyword. Query terms that produced the six
sources below: `personalization of text message recipient's own name effect on
message engagement randomized study`; `own name self-referential processing
attention capture study open access`; `study sharing behaviour images versus
links WhatsApp forwarded messages content type engagement peer-reviewed`;
`"image" versus "link" social media posts sharing engagement comparison study
open access visual content`.

| # | Source | What it establishes (verified) | Published | Subject test | Access |
|---|---|---|---|---|---|
| 1 | [Sahni, Wheeler & Chintagunta, *Personalization in Email Marketing*, Stanford GSB Research Paper 3409](https://ideas.repec.org/p/ecl/stabus/3409.html) | Randomised field experiments across millions of emails: the recipient's name in the subject line raised open probability **20%**, sales leads **31%**, and cut unsubscribes **17%** | 2016 (journal version *Marketing Science*, March 2018) | Pass — the name-in-message effect | Free abstract; full text not read |
| 2 | [PROMPTS SWAT, *Trials*](https://trialsjournal.biomedcentral.com/articles/10.1186/s13063-021-05452-w) | n=618 randomised 1:1. **60%** of the named-text group returned the initial postal questionnaire vs **52%** of the standard group; 8 pp absolute difference; overall response 87% (537/618) | 28 July 2021 | Pass — name in a real sent message | Open access CC BY; abstract + results read via NCBI efetch |
| 3 | [Personalised vs standard text prompts for telephone follow-up, *Trials*](https://pmc.ncbi.nlm.nih.gov/articles/PMC10848401/) | n=100 caregivers. **78%** vs **68%**, adjusted absolute risk difference **7.1%**, 95% CI **−10.2% to 24.4%** — i.e. not significant. The honest counterweight to source 1 | 7 February 2024 | Pass — same phenomenon, replication | Open access CC BY; abstract + results read via NCBI efetch |
| 4 | [*Specificity in the processing of a subject's own name*, *Social Cognitive and Affective Neuroscience*](https://doi.org/10.1093/scan/nsad066) | EEG passive-listening, 25 subjects: own name evoked a frontocentral own-name-related negativity at **210–350 ms** under all four probability conditions; a friend's name did not | 7 November 2023 (Crossref `published-online`) | Pass — why a name is processed differently | Gold OA (CC BY-NC-ND). **Publisher page returned 403; abstract verified via OpenAlex, dates via Crossref** |
| 5 | [Li & Xie, *Is a Picture Worth a Thousand Words?*, *Journal of Marketing Research*](https://doi.org/10.1177/0022243719881113) | Abstract: significant, robust positive **mere-presence effect** of image content on engagement on Twitter; high-quality/professionally shot pictures raise engagement on both platforms; **human face** and **image–text fit** raise engagement on Twitter but not Instagram | 18 November 2019 | Pass — the image side of the format tradeoff | **Paywalled — abstract only.** Verified via Semantic Scholar + OpenAlex; publisher page 403 |
| 6 | [Gabielkov, Ramachandran, Chaintreau & Legout, *Social Clicks: What and Who Gets Read on Twitter?*, ACM SIGMETRICS](https://inria.hal.science/hal-01281190v1) | Abstract: **2.8 million shares** carrying **75 billion potential views** produced only **9.6 million actual clicks** to 59,088 unique resources. Sharing is not opening | June 2016 | Pass — the link side of the format tradeoff | Green OA on HAL. **PDF fetch returned a 12 KB challenge page; abstract verified via the HAL API record.** The widely-quoted "59% never clicked" figure sits in the body, was not verifiable, and is therefore **not used** |

### Sourcing rules, checked

- **Total:** 6 (limit 4–6). ✔
- **Subject test:** all 6 pass. Every one is about either the name-in-message
  effect or image-versus-link reception — the two mechanics this keyword turns on.
- **Peer-reviewed and open-access:** sources 2, 3 and 4. ✔
- **Generic context statistics:** **zero**. No PIB, TRAI, Census or MEA figure
  appears anywhere in the post. ✔
- **Wikipedia:** zero body links. Four verified `sameAs` pairs appear in
  `structuredData` only (Raksha Bandhan Q10266, Personalization Q1000371,
  Greeting card Q915196, WhatsApp Q1049511 — all confirmed against the Wikipedia
  API, none `missing`). ✔
- **Banned domains avoided:** no `drikpanchang.com`, `en.wikipedia.org`,
  `europepmc.org`, `frontiersin.org`, `arxiv.org`, `aclanthology.org`,
  `blog.whatsapp.com` or `developers.facebook.com`. The 28 August 2026 date is
  stated as a fact-check and cited to nothing. ✔
- **Competitors:** zero cited, zero linked, zero paraphrased. ✔
- **Batch dedup:** could not be checked — `blogs/` was empty at write time. See
  `auditReport.failed`.

### Rejected sources, and why

- **Dijkstra, *The persuasive effects of personalization through name mentioning
  in a smoking cessation message*, UMUAI, 25 June 2014** — the most on-point
  nuance source available (name mentioning can *decrease* persuasion when
  personal relevance is high). Dropped because the publisher has elided the
  abstract from every aggregator and the Springer page is paywalled; the claimed
  finding could not be verified from a readable source, and citing it from a
  search snippet would be citing from memory.
- **ResearchGate copies of WhatsApp-forwarding papers** — the underlying work is
  real, but ResearchGate hosts author uploads of unclear provenance and the
  papers concern misinformation cascades, not the format question.
- **Buffer / INMA / agency benchmark posts on image-vs-link engagement** — the
  numbers are the right shape but these are commercial content marketers, not
  research, and several are one step from being competitors.
- **TRAI subscriber counts and PIB festival releases** — deliberately not used.
  They would pass the swap test in all ten posts of this batch, which is exactly
  why the brief caps them.

---

## First-party data used

`content/facts.md`, regenerated 2026-08-18. Eleven lines quoted verbatim into
`batchMeta.factsUsed`. Two land inside the first 150 words (51.9% of 32,683
views on a phone; 44.3% of 2,718 creators password-protecting).

**The limitation, stated in the post itself:** there is no rakhi-specific
first-party number. Rakhi is not among the top five of the 13 page types
(913 / 710 / 521 / 311 / 109 of 2,718), so every platform figure here describes
personalised pages in general, not rakhi pages. The post says so in the objection
section rather than dressing platform-wide data up as festival research.

## Strapi targeting

- **`categorySlug`: `festive-beats`.** The brief nudges toward
  `family-and-continuity` where a post is about the relationship rather than the
  festival — but this one genuinely is about the festival artefact and the tool
  that makes it, not about the sibling bond. Forcing it into
  `family-and-continuity` would misfile it to satisfy a distribution target.
- **`templateUrls`:** `https://subhsandesh.in/happy-rakshabandhan-to-brother`
  (the only rakhi template in `TEMPLATE_LINKS`) and
  `https://subhsandesh.in/templates`.
- Two internal links in the body, both from `TEMPLATE_LINKS`, both placed after
  the section that establishes why the reader would want them — the rakhi
  template after the five-format list, and the templates index in the closing
  objection section.

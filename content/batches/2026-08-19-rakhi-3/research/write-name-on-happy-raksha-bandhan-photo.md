# Research brief — `write name on happy raksha bandhan photo`

- **Batch:** `2026-08-19-rakhi-3`
- **Slug:** `write-name-on-happy-raksha-bandhan-photo` (verified free in Strapi before drafting)
- **Cluster:** C02 · transactional · tool · winnable (9 of 10 weak) · 1000–3000 EST
- **Research lane held:** text legibility and contrast — W3C/WCAG contrast guidance, typography
  legibility research, documented image re-compression behaviour on messaging platforms.
- **Phase 0:** skipped per instruction. `content/facts.md` read as generated 2026-08-18; `npm run facts` NOT run.

---

## Phase 1 — SERP analysis

`WebSearch` for the exact keyword returned a SERP composed almost entirely of name-on-image
generator farms plus Pinterest boards feeding them. Two of the top pages were fetched in full;
the rest were characterised from the SERP and from the two fetched siblings, which share an
identical template. **None is cited or linked anywhere in the post.**

| # | Page (competitor — analysed, never cited) | Shape | Where the answer is | Data cited | Format elements | Optimising for |
|---|---|---|---|---|---|---|
| 1 | `newmynamepix.com/category/happy-raksha-bandhan-wishes-greeting` | Template thumbnail grid, ~150 words of prose | No answer; the grid *is* the answer | None | Image grid, no table, no FAQ, no byline | "click a thumbnail, type a name, download" |
| 2 | `mynameart.com/greeting-cards/raksha-bandhan` (fetched, 22.4 KB) | Category grid + huge sidebar of 60+ other categories; ~120 words of body copy | None. One sentence: "You can create Raksha bandhan wishes image just in single click" | None | Grid, internal-link farm, no table, no FAQ | Internal-link volume across ~60 festival categories |
| 3 | `thefestivalwishes.com/p/create-name-on-happy-raksha-bandhan-photo` (fetched, 29.1 KB) | Grid + ~400 words of keyword-restated prose ("How to Generate & Download Rakhi Raksha Bandhan wishes with name?") | Buried under the grid; the "how to" is four steps of "select image, write name, download" | None | Facebook/Twitter/Pinterest share links, related-post rail, no table, no FAQ, no byline | The exact-match head phrase, restated ~9 times |
| 4 | `birthdayphotoframes.com/category/raksha-bandhan-cards-with-photos` | Frame grid | No prose answer | None | Grid only | "photoframe" long-tails |
| 5 | `writenamepics.com/category/raksha-bandhan` | Frame grid | No prose answer | None | Grid only | "write name" long-tails |

Tone across all five: third person, no author, no opinion, no tradeoff, no number of any kind.
No AI Overview was returned for this query; the SERP is tool-intent and Google appears to be
serving generators rather than an extracted answer.

## Phase 2 — Gap analysis

**Table stakes** (all five have them, so the post must acknowledge them): the phrase "write name
on Happy Raksha Bandhan photo"; that the output is an image; that you pick a background, type a
name, and get a file you can send on WhatsApp.

**The gap — total, and it is the whole angle.** Every one of the five pages hands the reader a
text tool and says nothing about whether the result will be legible. Not one of them mentions:

- where the name can sit without landing on a face;
- what contrast ratio the text needs against a busy festival background;
- that white or gold text on marigold orange is the classic failure;
- how large the name has to be to survive a phone screen;
- that the messaging platform will resize and re-encode the file after you make it;
- that a Devanagari name occupies different vertical space from a Latin one;
- the difference between text burned into the pixels and text kept live.

**Stale data:** none of the five cites any data at all, so there is nothing to supersede. That is
itself the finding — this SERP has zero citations across five pages.

**Unanswered questions raised and dropped:** "download or share?" is raised on page 3 and never
resolved. "Which image size?" is never raised.

**Fan-out sub-queries** (each became an H2):
1. What does writing a name on a photo actually mean — burned in or live text?
2. Where do you put the name so it does not cover a face?
3. What colour should the name be on a festival photo?
4. How big should the name be?
5. Why does a Hindi/Marathi name break the text box?
6. How do I make sure the spelling is right?
7. Can I fix it after sending?
8. What if my photo is low-resolution?
9. When is a plain image better than a link?

**Angle statement:** wins by being the only page on this query that treats the name as a
legibility problem — WCAG's 4.5:1 / 3:1 contrast thresholds, the positive-polarity advantage from
peer-reviewed glance-legibility work, ISO 15008's 20-arcmin floor, the documented re-encode on a
messaging platform, and Devanagari's above- and below-base mark positioning — instead of handing
over a template grid, grounded in the 51.9% mobile-open rate across 32,683 views that no
generator farm can publish.

## Cannibalisation check (the batch's stated primary risk)

Read before drafting:

- `2026-08-18-rakhi-2/blogs/raksha-bandhan-wishes-with-name-and-photo.json` — owns the **format
  decision** (JPG vs shareable link) and the *psychology* of a name (own-name effect, EEG,
  personalised-SMS response rates). Overlap: both posts contain a JPG-vs-page comparison table.
  Mine is scoped strictly to *what you can still fix* and carries five rows about re-encode and
  access control, not about reach or opening rates. **Recorded as a partial overlap in the audit.**
- `2026-08-19-rakhi-3/blogs/make-raksha-bandhan-card-online-with-name.json` — owns the **seven-step
  walkthrough**, form abandonment, the IKEA effect and the proofreading/self-generation study.
  My spelling section deliberately avoids proofreading research and covers script choice and
  paste-don't-type only, in ~110 words.
- `2026-08-19-rakhi-3/blogs/celebrate-raksha-bandhan-siblings-different-cities.json` — travel and
  migration. No overlap.
- `2026-08-19-rakhi-3/blogs/raksha-bandhan-wishes-in-bengali.json` — Bengali script rendering,
  Tagore, register. **Adjacent risk:** it covers "what breaks Bengali script on someone else's
  phone" (virama/hasant, ya-phala) via `w3.org/TR/beng-lreq` and `unicode.org`. Mine covers
  **Devanagari** via Microsoft's OpenType shaping spec — different script, different source,
  different failure (matra clipping and matra reordering versus cluster formation). Both posts use
  the `w3.org` domain, on different URLs; that puts `w3.org` at the batch cap of 2.

No draft-crossover marker check needed beyond this: the marker words unique to this post are
"positive polarity", "arcmin", "abvm", "blwm" and "cjct".

## Sibling `batchMeta.sources` present when I checked (2026-08-19, 3 sibling blogs on disk)

`make-raksha-bandhan-card-online-with-name`: hbs.edu · research.google.com · englelab.gatech.edu ·
wu.ac.at · ics.uci.edu
`celebrate-raksha-bandhan-siblings-different-cities`: demographic-research.org (×2) · pib.gov.in
(×2) · newsonair.gov.in
`raksha-bandhan-wishes-in-bengali`: ccsenet.org · questjournals.org · en.banglapedia.org ·
w3.org · unicode.org

Domain counts across all 29 rakhi posts were computed before choosing. My five domains: `w3.org`
(1 prior use, in this batch → now 2, at cap), `jdobr.es` (0 prior uses anywhere),
`ejournal.amikompurwokerto.ac.id` (0), `learn.microsoft.com` (1 prior use, in the
2026-08-13 batch, 0 in this batch). No URL repeats. Zero generic context statistics used.

## Phase 3 — Sources, all fetched and verified

1. **W3C WAI — Understanding Success Criterion 1.4.3: Contrast (Minimum)**
   `https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum` — fetched, verified verbatim:
   "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1",
   with "Large-scale text and images of text … at least 3:1", and "18 point text or 14 point bold
   text is judged to be large enough to require a lower contrast ratio". The page also notes 14pt
   and 18pt are approximately 18.5 px and 24 px. Continuously updated; publishes no single
   publication date, so `datePublished` is **omitted** from `citation`. Standards body, not a
   competitor. Subject test: passes (text legibility is the post's subject).
2. **Dobres, Chahine & Reimer — *Applied Ergonomics* 60 (2017) 68–73**
   `https://jdobr.es/pdf/Dobres-etal-2017-Ambient.pdf` — author's self-archived copy of the
   peer-reviewed paper; full text read and text-extracted. Verified: "positive polarity advantage,
   in which black-on-white text configurations are more legible than their negative polarity,
   white-on-black counterparts"; thresholds highest (worst) for negative polarity under dark
   ambient illumination; conditions were near 0 lux and ~4,750 lux; cap heights 3 mm and 4 mm
   (14.7 and 19.6 arcmin), "sizes chosen based on International Standards Organization guidance
   for in-vehicle devices"; conclusion: "larger text sizes should be employed whenever possible,
   particularly on negative polarity displays". Volume 60 of *Applied Ergonomics* is April 2017,
   so `publishedDate` is recorded as `2017-04-01`. Peer-reviewed, openly readable.
3. **Dobres, Wolfe, Chahine & Reimer — *Applied Ergonomics* (2018), visual crowding**
   `https://jdobr.es/pdf/Dobres-etal-2018-Crowding.pdf` — full text read. Verified: 37
   participants aged 35–75 from the MIT AgeLab pool; "larger text was more legible than smaller
   text"; "Wider leading significantly enhanced legibility as well, but … did not fully counteract
   decrements in legibility at smaller text sizes"; "Single-word stimuli presented with random
   positioning were more difficult to read than stationary counterparts from earlier studies";
   "crowded displays required much greater processing time compared to single-word" presentations;
   and that a 4 mm character height at 68.58 cm was chosen for consistency with "ISO standard
   15008 … which recommends character sizes > 20 arcmin". Peer-reviewed, openly readable.
   `publishedDate` recorded as `2018-04-01` (Applied Ergonomics, 2018).
4. **Anwar, Fadlil & Riadi — "Image Quality Analysis of PNG Images on WhatsApp Messenger Sending",
   *Telematika* 14(1), pp. 1–12**
   `https://ejournal.amikompurwokerto.ac.id/index.php/telematika/article/view/1114` — abstract
   fetched and verified verbatim; `citation_date` meta on the article page reads `2021/02/28`.
   Verified findings used: "Delivery with a gallery image attachment type using an image
   transparent background changes to a white image background. While those with a background other
   than transparent have good image quality because it has a PSNR value of more than 35 dB, and
   submissions with document attachment types do not experience changes in MD5 hash value and
   image quality." **Only the abstract was read** — the full-text PDF was not retrieved, and the
   post claims nothing beyond the abstract. Recorded in the audit. Open access, DOAJ-indexed,
   peer-reviewed. This is the closest available *published* source for messaging-platform
   re-encode behaviour, since `blog.whatsapp.com` and `developers.facebook.com` are banned for
   this batch.
5. **Microsoft Typography — "Developing OpenType Fonts for Devanagari Script"**
   `https://learn.microsoft.com/en-us/typography/script-development/devanagari` — fetched, 52
   sections indexed. Verified: the `abvm` feature positions "above-base marks (above-base
   consonant forms, matras, vowel modifiers or stress/tone marks)" and `blwm` positions below-base
   marks; the shaping engine "decomposes two- or three-part matras into their constituent parts
   before any repositioning" and reorders them relative to the consonants; the `cjct` feature
   substitutes conjunct forms; and "the sequence RA H ZWJ is used for the encoded representation
   for 'eyelash RA' used for the Marathi language". Continuously updated documentation with no
   publication date, so `datePublished` is **omitted**. Not a competitor (platform/typography
   documentation, sells nothing into this buyer).

### Sources sought and rejected

- `jov.arvojournals.org` (Legge & Bigelow 2011, critical print size, the ideal size source) —
  **HTTP 403**, not cited. `legge.psych.umn.edu` mirror also 403.
- `link.springer.com` and `jis-eurasipjournals.springeropen.com` (Shullani et al., VISION dataset,
  which documents WhatsApp re-compression on 34,427 images) — both served a Cloudflare "Client
  Challenge" page. The `d-nb.info` PDF mirror downloaded but its text layer extracted as
  unusable spaced glyph runs, so the specific figures could not be verified. **Not cited.**
- `tandfonline.com` (Dobres et al. 2016, Ergonomics, age/typeface/polarity) — HTTP 403.
- `faui1-files.informatik.uni-erlangen.de` (Lorch & Riess, chroma subsampling) — TLS certificate
  chain failure.
- All name-on-image generators, Canva, Adobe Express, FlexClip, CapCut — competitors per
  `references/competitors.md`.
- No PIB / TRAI / Census / MEA statistic was used at all; none was topically relevant and the
  batch's single allowance had already been taken by a sibling.

### Searches run that returned nothing citable

`WhatsApp image recompression JPEG quality factor resize forensics study open access`;
`"WhatsApp" images resized 1600 pixels recompressed quality factor 80 dataset paper springeropen`;
`social media platform image compression WhatsApp resizes recompresses study institutional
repository pdf`. The widely repeated "1600 px long edge, ~80 quality" figures appear only on tool
and SEO blogs, never in a primary or peer-reviewed source, so **the post does not state a pixel
dimension or a quality factor for the re-encode** — it says only that the file is resized and
re-encoded, which the *Telematika* paper supports.

## First-party data used

- `51.9% of shared pages are opened on a phone (16,952 of 32,683 views) — measured 2026-08-18`
- `2,718 personalised pages created since 2026-03-12, across 13 page types — measured 2026-08-18`
- `44.3% of creators password-protect their page before sharing it (1,205 of 2,718) — measured 2026-08-18`
- `32,683 recorded views of shared pages — measured 2026-08-18`

Limitation stated in the body itself, not only in the audit: there is no rakhi-specific
first-party fact, because rakhi is not one of the 13 page types. Every figure describes
personalised pages platform-wide.

## Phase 5 — targeting

- `categorySlug`: `festive-beats`. The post is about the festival artefact rather than the
  sibling relationship, so `family-and-continuity` would be the weaker fit here even though the
  batch is over-weighted to `festive-beats`.
- `templateUrls`: `https://subhsandesh.in/happy-rakshabandhan-to-brother` (the only rakhi
  template; the post states plainly that it is written brother-first) and
  `https://subhsandesh.in/templates`.
- Internal links: 2, both from `TEMPLATE_LINKS`, both placed in the final "wrong tool" section
  after the limitation is established. No links to any of the 19 unpublished rakhi slugs.
- `structuredData`: an `ItemList` mirroring the four placement H3s in order, plus one
  `@id`-matched enrichment block on `…#post` carrying `about`, `mentions` and a `citation` array
  mirroring `batchMeta.sources` one-to-one.
- Wikidata QIDs verified against the Wikipedia API in one call, none guessed:
  Raksha Bandhan `Q10266`, Devanagari `Q38592`, Web Content Accessibility Guidelines `Q5364439`,
  JPEG `Q2195`, WhatsApp `Q1049511`, Legibility `Q1820694`, World Wide Web Consortium `Q37033`.
  No Wikipedia link appears in the body — all are `sameAs` targets only.

## Body length

1,800 words by plain whitespace split, FAQs excluded (FAQs live only in `article.faqs` and the
renderer-built FAQPage). 9 content H2s plus a Sources H2, 4 H3s under the placement section, one
5-row comparison table with a first-party column.

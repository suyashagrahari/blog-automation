# Research brief — `ganpati-wallpaper-hd-4k`

Primary keyword: **ganpati wallpaper hd**
Secondaries folded in: ganpati 4k hd wallpaper · ganesh chaturthi dp · ganpati bappa wallpaper
Assigned research field: **display technology and visual perception** — screen resolution and
pixel density, aspect ratio and cropping, lossy compression artefacts.
Batch: `2026-09-09-ganesh-10b` (wave 3, post 15) · Category: `indian-festivals`
Date facts held constant: Ganesh Chaturthi 2026 = **Monday 14 September 2026**; Anant
Chaturdashi / visarjan = **Friday 25 September 2026** (per BRIEF). No muhurat time is stated
in the body, so Drik Panchang is a fact-check only and is **not** in `sources` or `citation`.

---

## Phase 8a — the collision check against `ganesh-chaturthi-images` (run FIRST)

Post 15 was flagged in the BRIEF as the highest collision risk in the batch. The rule applied
is Phase 8a from `blog-keyword-research`: *two keywords are the same keyword if their top 10
results share **3 or more identical URLs**.*

`content/batches/2026-09-09-ganesh-10/blogs/ganesh-chaturthi-images.json` claims:
`ganesh chaturthi images, happy ganesh chaturthi images, ganpati bappa photos, happy ganesh
chaturthi images for whatsapp, happy ganesh chaturthi banner, happy ganesh chaturthi poster`.

Three live SERPs were run on 2026-09-09.

| # | `ganesh chaturthi images` (the incumbent's SERP, re-run live) | `ganpati wallpaper hd` | `ganpati bappa 4k wallpaper` |
|---|---|---|---|
| 1 | istockphoto.com/photos/ganesha | pixabay.com/images/search/ganesh/ | in.pinterest.com/pin/606719381057644847 |
| 2 | gettyimages.in/photos/ganesh-chaturthi-mumbai | stock.adobe.com/search?k=ganpati+wallpaper | wallpaperbat.com/ganpati-wallpapers |
| 3 | stock.adobe.com/search?k=%22ganesha+chaturthi%22 | pexels.com/search/lord%20ganesha%208k%20wallpaper/ | pinterest.com/ideas/ganesha-4k-wallpaper/ |
| 4 | pixabay.com/images/search/ganesh%20chaturthi/ | in.pinterest.com/pin/13510867625614891 | play.google.com/store/apps/details?id=com.wallpapers4k.ganeshawallpaper |
| 5 | gettyimages.com/photos/ganesh-chaturthi-celebration | pramitgalary.com/lord-ganesha-images/ | pramitgalary.com/lord-ganesha-images/ |
| 6 | en.wikipedia.org/wiki/Ganesh_Chaturthi | pinterest.com/shaminisivakumara/lord-ganapathy/ | wallpaperaccess.com/ganpati-4k |
| 7 | magnific.com/free-photos-vectors/ganesha-chaturthi | in.pinterest.com/pin/470274386106748443 | wallpaperaccess.com/ganesh-4k |
| 8 | — | magnific.com/photos/ganesh-wallpaper | wallpaperflare.com/search?wallpaper=ganesha |
| 9 | — | walmart.com/c/kp/ganesh-background-hd | victorvictoriaart.gumroad.com/l/tejaganbari_yearofthepig |
| 10 | — | pixlelo.gumroad.com/l/wayzb | — |

**Identical URLs shared with `ganesh chaturthi images`: ZERO, on both wallpaper keywords.**
Threshold is 3. The keywords are distinct and the post is written.

Three *domains* recur (pixabay.com, stock.adobe.com, magnific.com) but every path differs —
`/images/search/ganesh/` is not `/images/search/ganesh%20chaturthi/`, and
`/photos/ganesh-wallpaper` is not `/free-photos-vectors/ganesha-chaturthi`. The gates file is
explicit that even three shared URLs should be treated as separate when the page types differ;
here there are none, and the page types differ anyway. The wallpaper SERPs are dominated by a
result class the images SERP does not contain at all: wallpaper farms (WallpaperBat,
WallpaperAccess, WallpaperFlare), Pinterest pins, a Google Play wallpaper app and two Gumroad
product pages. Conversely the images SERP's four paid stock libraries and its Wikipedia entry
are absent from `ganpati bappa 4k wallpaper` entirely.

Also checked against the incumbent's own recorded SERP in
`content/batches/2026-09-09-ganesh-10/research/ganesh-chaturthi-images.md`: it lists
iStock/Getty/Adobe Stock, Pixabay/Freepik, thefestivalwishes.com, createcustomwishes.com, a
Sunday Guardian listicle and FNP. **None of the six appears on either wallpaper SERP.**

The editorial line the BRIEF demanded is held in every section: a wallpaper is for the
viewer's own screen (lock screen, home screen, laptop desktop, profile picture); a greeting
image is sent to somebody else. The incumbent's H2s are about WhatsApp delivery, banners and
posters. This post's H2s are about panels, aspect ratios, crops and re-encoding. There is one
deliberate near-boundary — both posts touch JPEG re-encoding — and it is resolved by mechanism:
the images post covers what a messaging platform does to a photo you *send*; this post covers
the 8 × 8 block and chroma-subsampling behaviour of the JPEG standard itself when you *upload a
profile picture*, and cites entirely different sources.

---

## Phase 0 — data gate

`content/facts.md` (regenerated 2026-09-08) carries 17 facts, **none Ganesh-specific**. The
`/happy-ganesh-chaturthi` template shipped days ago with zero pages created, so no Ganesh
segment number exists this cycle. Per the BRIEF, every first-party number here is
**platform-wide across 15 page types** and is captioned that way in the sentence nearest the
claim. The gate passes on volume (5 facts, 2 inside the first 150 words) and fails on segment
relevance; that is recorded in `honestAssessment`, not hidden.

Facts used:

1. 49.6% of shared pages are opened on a phone (22,667 of 45,656 views) — measured 2026-09-08
2. 96.1% of started pages are actually published and shared (3,708 of 3,860) — measured 2026-09-08
3. 3,860 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-08
4. 49.9% of views are on a touch device (phone or tablet) — measured 2026-09-08
5. 42.1% of creators password-protect their page before sharing it (1,625 of 3,860) — measured 2026-09-08

(1) and (2) land inside the first 150 words, both captioned platform-wide in the same sentence.

---

## Phase 1 — SERP analysis

Two pages were fetched in full. Three returned bot walls (`wallpaperaccess.com` HTTP 403
Cloudflare, `wallpaperflare.com` and `pixabay.com` JS challenges) and were characterised from
the SERP and their landing content. **None is linked or cited — all are competitors** under
`references/competitors.md` (wallpaper farms, stock libraries and Pinterest all sell into the
same "I want a nice Ganpati picture" intent).

| Result | Type | Words of prose | Where the answer is | Data cited | Format elements | Optimising for |
|---|---|---|---|---|---|---|
| pramitgalary.com | Wallpaper blog, 126 `<img>` tags | 381, most of it nav and sidebar | No answer — one 60-word intro then a grid | None. No resolution stated anywhere despite the title claiming "HD & 4K" | H2s that are gallery labels; no table, no FAQ, no schema of substance | AdSense impressions; "Related Posts" to car and Vishnu wallpapers |
| wallpaperbat.com | Wallpaper farm, 61 `<img>` tags | 514, almost all repeated "Download wallpaper 1000x1597" strings | No answer | Per-file pixel dimensions only, e.g. 1000×1597, 736×1307 | Tag rail, download buttons, no prose, no FAQ | Downloads and signups |
| wallpaperaccess.com | Wallpaper farm (403 to fetcher) | ~0 | No answer — "Top 42 Ganpati 4K Backgrounds" grid | Asset count only | Grid, no prose | Downloads |
| wallpaperflare.com | Wallpaper farm (JS challenge) | ~0 | No answer — faceted "1080P, 2K, 4K, 5K" filter | Resolution facets as filters, never explained | Faceted grid | Downloads |
| Pinterest (3 of 10 on `ganpati wallpaper hd`, 2 of 9 on the 4K term) | Social pinboard | ~0 | No answer | None | Infinite pin grid | Session time |
| Google Play "Ganesha Wallpaper (4K)" | App listing | ~120 | Store description | States 4096×2160 / 3840×2160 | App store page | Installs |

Common shape: **a grid, a download button, and a resolution word used as a label rather than a
number.** Not one page tells the reader what resolution their own screen is, and not one
mentions cropping.

---

## Phase 2 — Gap analysis

**Table stakes** (all of them carry these, so the post must too): the words HD / Full HD / 4K;
phone, laptop and tablet as destinations; the DP / profile-picture use; Ganpati Bappa as the
subject; and some notion of "high quality".

**The gap.** Every competing page treats resolution as an adjective. None treats it as a
constraint of the reader's own hardware. Nobody states an Indian screen resolution, nobody
mentions the difference between CSS pixels and panel pixels, nobody does the crop arithmetic
that decides whether a landscape file can be a portrait wallpaper at all, and nobody says what a
square-then-circular avatar crop removes from a composition built around a centred murti. The
strongest unclaimed finding: **a 4K landscape file is not too sharp for a mid-range Indian
phone, it is not sharp enough** — after the portrait crop the surviving slice is 972 × 2160,
which is 19% below a 1080 × 2400 panel.

**Stale data.** There is none to supersede: not one competing page cites a third-party number.
The freshest figure on any of them is a per-file pixel dimension.

**Unanswered questions raised and dropped:** what resolution to actually export; why a wallpaper
looks zoomed in; why a DP looks worse than the file uploaded; whether 4K is worth the storage;
what "HD" means next to "1080p".

**Fan-out sub-queries → became H2s:** what a Ganpati wallpaper is versus a greeting image · what
resolution Indian screens actually are · which surface the file lands on and what each does to
it · whether 4K helps on a 1080p phone · what a DP crop costs a composition · what an upload
does to the file · when a page beats a wallpaper.

**Angle (→ `batchMeta.angle`):** wins by being the only page that treats a Ganpati wallpaper as
a file measured against the reader's actual panel — 1080 × 2400 behind 18.44% of Indian mobile
page views, a 74.7% width loss on the portrait crop, 35.3% of a portrait surviving a circular
DP — set against SubhSandesh's platform-wide 49.6% phone-open and 96.1% publish rates.

---

## Phase 3 — Sources

Search pattern was the phenomenon, not the keyword: `resolution limit of the human eye pixels
per degree`, `JPEG recompression artefacts perceived image quality subjective study`,
`screen resolution stats India mobile`, `face recognition minimum image resolution human
vision`, `OLED display power consumption dark mode smartphone`. OpenAlex-style open-access
filtering was applied by preferring Nature Communications, PMC and an author copy.

`USED-SOURCES.md` and `PRIOR-BATCH-SOURCES.md` were both read first. Applying the corrected
**per-batch** cap: `dsal.uchicago.edu` and `aclanthology.org` are at cap, `arxiv.org` and
`archive.org` have one slot each, `journals.plos.org` is at cap. **This post uses none of them
and every one of its six domains is new to both batches**, so it reduces no sibling's budget.
`jis-eurasipjournals.springeropen.com` (Pasquini's media-forensics survey) would have fitted the
recompression section perfectly and was deliberately **not** used — batch 1's
`ganesh-chaturthi-images` already spent it, and re-citing it would have made the two posts look
like one.

| # | Source | Subject test | Peer-reviewed | Open access | Verified how |
|---|---|---|---|---|---|
| 1 | Ashraf, Chapiro & Mantiuk, *Resolution limit of the eye — how many pixels can we see?*, Nat. Commun. 16:9086, 2025-10-27 | ✓ the eye's spatial resolution against display resolution | ✓ | ✓ CC BY 4.0 | Full article fetched and searched |
| 2 | Torralba, *How many pixels make an image?*, Visual Neuroscience 26(1), 2009 | ✓ minimum pixels for human recognition | ✓ (Cambridge UP) | ✓ free author copy at MIT CSAIL | Full PDF downloaded and read via `pdftotext` |
| 3 | Afnan et al., *Subjective Assessment of Objective Image Quality Metrics Range Guaranteeing Visually Lossless Compression*, Sensors 23(3):1297, 2023-01-23 | ✓ JPEG compression and perceived quality | ✓ | ✓ CC BY, read on PMC | Full article fetched and searched (PMC9918960) |
| 4 | ITU-T Recommendation T.81 (the JPEG standard), September 1992 | ✓ the encoder's own block and subsampling behaviour | Standards body | ✓ | 1.06 MB PDF downloaded, converted with `pdftotext`, Annex K read |
| 5 | Statcounter Global Stats, screen resolution stats for India, August 2026 | ✓ what Indian screens actually are | No | ✓ | CSV endpoint fetched for both mobile and desktop |
| 6 | Purdue University, *Dark mode may not save your phone's battery life as much as you think*, 2021-07-28 | ✓ OLED panel power against displayed content | University report of a MobiSys 2021 paper | ✓ | Full page fetched and searched |

Exact claims taken, and nothing beyond them:

- **Ashraf 2025:** population mean foveal resolution limit **94 ppd** achromatic, **89 ppd**
  red-green, 53 ppd yellow-violet; individual values as high as **120 ppd**; the 20/20 Snellen
  standard corresponds to **60 ppd**; the 13" iPad Pro (2024) is 65 ppd at **35 cm, "the shortest
  comfortable viewing distance"**; **18 observers** (6 F, 12 M), mean age 25.5, range 13–46.
- **Torralba 2009:** **81.8%** correct scene categorisation at **32 × 32** colour pixels; **96%**
  ceiling at 128 × 128; **chance 8.3%**; 4 × 4 colour 18.4%, grayscale 9%; grayscale 73% at
  32 × 32.
- **Afnan 2023:** 2AFC flicker test, quality factor lowered stepwise; visually lossless boundary
  at **FSIM 0.9997**, **MS-SSIM 0.9970**, **IW-SSIM 0.9970**.
- **ITU-T T.81:** the image is partitioned into **8 × 8 sample blocks**; Annex K supplies separate
  luminance and chrominance quantization tables "derived empirically using luminance and
  chrominance and **2:1 horizontal subsampling**".
- **Statcounter, India, Aug 2026 — mobile:** 360 × 800 **18.44%**, 393 × 873 8.43%, 360 × 804
  4.65%, 393 × 876 4.02%. **Desktop:** 1920 × 1080 **7.13%**, 1366 × 768 **6.70%**, 1536 × 864
  **6.15%**, 1280 × 720 2.95%. Stated in the body as CSS pixels, which is what the figures are.
- **Purdue 2021:** light→dark saves **3–9%** at 30–50% brightness, **39–47%** at 100% brightness.

**Arithmetic done in the post, not taken from a source** (all recomputed and checked):

- 360 × 800 CSS px × DPR 3 = **1080 × 2400** physical.
- 6.7" 20:9 panel at 1080 × 2400 = **392.8 ppi**; at 35 cm that is **94.5 ppd**, i.e. exactly the
  study's population mean. At 1440 × 3200 it is 523.7 ppi and **126.0 ppd**.
- 3840 × 2160 scaled to fill 2400 px of height becomes 4267 px wide; cropping to 1080 keeps
  **25.3%** of the width and discards **74.7%**. The surviving source region is 972 × 2160 =
  **2.10 MP** against a **2.59 MP** panel, i.e. **19% below native**.
- 4K on 1366 × 768 discards **87.4%** of its pixels; on 1536 × 864, 84.0%; on 1920 × 1080, 75.0%.
- Square crop of 1080 × 2400 keeps **45.0%**; the inscribed circle (π/4) keeps **35.3%**, so
  64.7% never reaches the viewer. Square crop of 3840 × 2160 cuts **43.8%** of the width.
- A 48 CSS px avatar at DPR 3 = **144 physical px**.

**One explicit inference, flagged as such in the body:** that 2:1 chroma subsampling costs more
on saffron/vermilion artwork because the measured red-green limit (89 ppd) is close to the
achromatic one (94 ppd). Neither source states this; the post says so in the sentence itself.

**Generic context statistics: zero.** No PIB, TRAI, Census or MEA figure appears.
**Wikipedia body links: zero.** Wikipedia appears only as `sameAs` inside `structuredData`.

**Swap test:** none of the six could sit unchanged in a sibling Ganesh post. Every one is about
pixels, panels, encoders or eyes.

**Not found, and worth recording:** no published figure for the stored pixel dimensions of a
WhatsApp or Instagram profile photo. The widely repeated "640 × 640" is not documented by either
platform, so the post states the mechanism (square crop, circular mask, small render) and does
the arithmetic in ratios instead of asserting a number it cannot verify. Also deliberately not
asserted: per-model specifications for named Indian handsets — the Statcounter distribution is
both more current and more honest than a spec-sheet roundup.

---

## Phase 4–5 notes

- Body: 1,798 words, FAQs excluded. One H1, eight H2s, five H3s, no skipped levels. Every
  paragraph is 2–3 sentences (checked programmatically).
- **No image is reproduced, embedded or hotlinked, and no wallpaper is offered for download.**
  The post says so explicitly in the objection section: SubhSandesh holds no rights to devotional
  artwork and hosts no library.
- Internal links, both after the value is established: `/happy-ganesh-chaturthi` (opening the
  objection section, after the whole technical case has been made) and `/templates` (closing it).
  Both are in `TEMPLATE_LINKS`; `/happy-ganesh-chaturthi` is first in `batchMeta.templateUrls`.
- Outbound links: 7 anchors across 6 sources (Statcounter carries two, mobile and desktop), each
  inline at the sentence it supports.
- Comparison table: 4 rows × 4 columns; the final column is entirely first-party with real
  values, and the sentence after it captions all four as platform-wide across 15 page types.
- Objection section names four cases where the wallpaper wins and states plainly that a page
  cannot replace the mandal queue or hand anyone a modak — and that SubhSandesh cannot supply a
  wallpaper at all.
- `structuredData`: an `@id`-matched `BlogPosting` enrichment block on
  `https://subhsandesh.in/blog/ganpati-wallpaper-hd-4k#post` carrying `about`, `mentions` and a
  `citation` array mirroring `batchMeta.sources` one-to-one, plus an `ItemList` mirroring the five
  H3s in order. Every `sameAs` was checked against the Wikipedia API with its Wikidata QID
  paired: Wallpaper (computing) Q1139104, Ganesh Chaturthi Q929250, Display resolution Q12538706,
  Pixel density Q904055, JPEG Q2195, Visual acuity Q555066, Ganesha Q1579.
- Slug checked free in Strapi on 2026-09-09 (`total: 0`); `indian-festivals` confirmed against the
  live category list.
- **Deploy warning, fourth confirmation:** `https://subhsandesh.in/happy-ganesh-chaturthi`
  returned HTTP 404 on 2026-09-09 while `/templates` returned 200. Recorded as the post's one
  audit failure.

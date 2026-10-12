# Research brief — navratri-wishes-with-name

Batch `2026-10-12-navratri-partner-b1` · keyword **navratri wishes with name** · also covers "navratri wishes with name and photo", "navratri wishes with name online free" · bodyLanguage `en` · cluster personalised · written 2026-10-12.

## Phase 0 — first-party data gate

`npm run facts` NOT run (BRIEF §3). Read `content/facts.md` (vintage 2026-09-24). Facts that genuinely bear on "add a name and photo to a greeting":

| Fact (verbatim in factsUsed) | Why it bears on this keyword |
|---|---|
| 38.5% of creators password-protect their page before sharing it (2,000 of 5,199) | Direct evidence that people putting names/photos into a shared greeting care who else can open it. The privacy section rests on it. |
| 48.3% of shared pages are opened on a phone (27,725 of 57,456 views) | Name placement (name first, short lines) and image size decisions. |
| 90.9% of started pages are actually published and shared (4,724 of 5,199) | Shows a personalised page is usually finished once started; used in the "same-day" timing paragraph. |
| Raksha Bandhan 2026 lead time, n = 89: 49.4% built on the festival day itself, median lead 0 days | Nearest-festival analogue for "people make these on the day". Labelled in prose as Raksha Bandhan, n = 89, not Navratri. |

Gate: 4 relevant facts, 2 in the first 150 words (38.5%, 48.3%). PASS. No dandiya-partner usage data exists and none is stated.
Template-spec facts (first-hand product fact, not counted toward the 3): nine lines, up to six photos, optional password, no app/no account for recipient, 1080×1920 Dandiya Pass, English UI, one-to-one only, page schema `isAccessibleForFree: true`, HowTo `PT5M`.

## Phase 1 — SERP (US-served (WebSearch), 2026-10-12, 1 call)

Query: `navratri wishes with name`. 9 results returned.

| # | URL (US-served (WebSearch)) | Type | Date signal | Name-insert tool? | Weak? |
|---|---|---|---|---|---|
| 1 | hindupad.com/navratri-wishes/ | generic wish list, ~40 lines, no H2 structure for names, comment form | undated; sidebar links 2026 | No | weak (no name intent served) |
| 2 | thestatesman.com/lifestyle/chaitra-navratra-2022 | 14 wishes, Chaitra 2022 | 2022 | No | weak (stale, wrong Navratri) — fetch 403 |
| 3 | hindutone.com/festivals/navratri-2026-wishes-... | day-wise/family/work wishes | 2026 | No; per search snippet advises "add a name" | not weak (fresh, broad) — fetch 502, snippet only |
| 4 | bootsnipp.com/snippets/n43VQ | spam snippet linking a 2021 wishes post | 2021 | No | weak |
| 5 | bhaktibharat.com/amp/en/wishes-quotes/navratri | downloadable day-wise images, Hindi mantras | 2022–2024 images | No (fixed images, no name field) | weak |
| 6 | ianslive.in (celebrity wishes 2023) | news | 2023 | No | weak (off intent) |
| 7 | ibtimes.co.in (navami 2018 slides) | slideshow | 2018 | No | weak |
| 8 | lutonhoo.oandg.co.uk (scraped mirror, Hindi wishes) | scraped | — | No | weak — DNS fail on fetch |
| 9 | smartpuja.com/blog/navratri-wishes | 14 wishes 2023 on a puja-booking site | 2023 | No | weak |

**Weak: 8 of 9** (only hindutone is fresh and on-intent). No result offers a name slot, a name-on-image tool, or any discussion of uploading someone's photo. Corroboration: `content/keywords/2026-10-12-navratri-garba-dandiya/serps.md` row "navratri wishes with name and photo online free" — 8 weak, quint 2021–24, dreamina, digit 2024. The prompt's framing ("8 weak of 10, no name-insert tool ranks") is consistent with what I measured for the head variant (8 of 9 weak). Gate 4 passes.

Pages fetched with ctx_fetch_and_index: hindupad (read), bootsnipp (read), bhaktibharat (read), smartpuja (read — mostly puja-booking chrome). Statesman 403, hindutone 502, lutonhoo ENOTFOUND — recorded, not retried with a browser (BRIEF §4).

Observed format: answer is never in the first paragraph (hindupad opens on a Navratri definition; bhaktibharat on a goddess list); no tables; no FAQ; no author; no data; tone is third-person listicle with no opinion. Data cited: none.

## Phase 2 — gap

- **Table stakes:** a list of wishes; nine goddesses / nine nights; a Jai Mata Di closer.
- **Gap:** nobody gives wishes with an actual blank for the name; nobody compares the *ways* to add a name/photo; nobody mentions what happens to the photo you upload (server, forwarding, Exif location, deletion lag).
- **Stale:** statesman 2022, ibtimes 2018, smartpuja 2023, bootsnipp 2021.
- **Fan-out sub-queries:** what does "with name" mean; templates with a blank; how to add name + photo free; is it safe to upload someone's photo; does WhatsApp keep location; which method suits family vs partner vs office; when does a name greeting backfire.
- **Angle:** Wins by being the only post that gives original Navratri wishes with a real name slot AND compares the four ways to add a name and photo on cost, upload and lock, using SubhSandesh's 38.5% password-protect rate and 48.3% phone-open rate.

Sibling split (no /blog/ links): navratri-wishes-in-hindi = Hindi lines; navratri-wishes-for-love = romantic night-by-night lines. This page = the personalisation mechanics + name-slot templates (only 2 light partner lines).

## Phase 3 — sources (all fetched)

| Source | Claim used | Read | Date |
|---|---|---|---|
| Duan et al., "Enhanced Neural Responses to Self-Name Stimuli…", Brain Sciences 16(6):608, MDPI, CC BY — https://doi.org/10.3390/brainsci16060608 | 38 healthy participants; own name P300 3.95 μV vs tone 1.77 μV; self-name engaged 12 clusters vs 7 (tone). AUDITORY stimuli — stated in prose as heard names, not written. | Full text via Europe PMC XML (mdpi.com 403 to fetcher) | 2026-06-02 |
| Such & Criado, "Multiparty Privacy in Social Media", Communications of the ACM 61(8):74–81 — https://kclpure.kcl.ac.uk/ws/files/82576549/multi_party_privacy_management.pdf | Privacy is also about what others disclose about you; untagging/flagging only works after publication; Lian et al. figures as reported: deleted photo URL stayed reachable 3 days Instagram, 7 Facebook, 14 Flickr, 30+ MySpace/Tumblr. | Full author-accepted manuscript (peer reviewed) | 2018 (CACM Aug 2018) |
| Soni, "Forensic Value of Exif Data…", Perspectives in Legal and Forensic Sciences, CC BY 4.0 — https://www.sciepublish.com/index/article/view_full_text/id/567 | WhatsApp/Instagram/Snapchat chat-mode transfers strip Exif incl. GPS; document modes (WhatsApp, Telegram, Signal), USB and email keep all fields. | Full PDF | 2025-06-18 (available online) |
| Digital Personal Data Protection Act, 2023, Gazette — https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf | s.2(t) "personal data" = any data about an identifiable individual; s.2(i) Data Fiduciary; s.3(c)(i) Act does not apply to personal data processed by an individual for any personal or domestic purpose; s.6(1) consent free, specific, informed… | Full PDF | 2023-08-11 |
| Drik Panchang, New Delhi, 2026 & 2027 Shardiya Navratri pages | 11–19 Oct 2026, Vijayadashami 20 Oct 2026; 30 Sep–8 Oct 2027, Vijayadashami 9 Oct 2027 | Fetched both | undated reference (cap-exempt fact-check) |

Searches run (findpapers + OpenAlex): "multi-party privacy conflicts photo sharing social media", "own name attention self-referential processing", "personalized greeting message recipient name effect" (nothing topical), "posting photos of others without consent", "EXIF metadata location privacy shared photos". Such et al. CHI 2017 (photo privacy conflicts, large-scale) is the better paper but ACM DL returned 403; used the CACM 2018 OA manuscript by the same first author instead.

Caps: kclpure.kcl.ac.uk, sciepublish.com, meity.gov.in unused by siblings; doi.org → MDPI (one sibling cites an MDPI journal via PMC — different journal); drikpanchang cap-exempt. No banned URL. aclanthology / ich.unesco not used.

Caveats for audit: SCIEPublish is a young OA publisher (not on the BRIEF's predatory list, but low-prestige); the self-name study is about heard names; the DPDP Act's commencement/rules status is not asserted.

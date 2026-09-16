# Research brief — how to propose a girl online long distance

- **Slug:** `how-to-propose-a-girl-online-long-distance`
- **Batch:** `2026-09-17-propose-12` · branch `batch/2026-09-17-propose-12`
- **Secondary keyword:** virtual proposal ideas for long distance relationship
- **Category:** `modern-romance` (verified against the live Strapi category list)
- **Slug availability:** verified free — `filters[slug][$eq]` returned `total: 0` on 2026-09-17

---

## Phase 1 — SERP analysis

Live `WebSearch` on both the primary and secondary keyword, 2026-09-17. The batch
BRIEF's prediction held: the romance half of the query is intact, and the SERP is
**not** the B2B proposal-software SERP that `online proposal website free` returns.

What actually occupies it:

| Rank band | Who | Type | Notes |
|---|---|---|---|
| Top | `diamondere.com`, `withclarity.com`, `inspereza.com` | Engagement-ring retailers | Inspiration listicles written to sell a ring. Competitors by the BRIEF's definition — never cited |
| Mid | `quora.com`, Reddit, YouTube, TikTok, Facebook | UGC / forum / video | 5 of 10 weak, as the keyword run recorded |
| 6 / 10 | `yourlovepage.online`, `giftsqr.com` | Direct-mechanic competitors | Proof a shareable-link product can hold this SERP. Never cited or paraphrased |
| Tail | `blacktulipflowers.com` | Flower retailer | Propose Day angle, 2024 copy |

Fetch results: `withclarity.com` and `blacktulipflowers.com` fetched in full;
`diamondere.com` returned HTTP 403, `inspereza.com` HTTP 402, `quora.com` HTTP 403.
The two that were readable are structurally identical and that is the finding.

### Comparison of the readable top pages

| | With Clarity | Black Tulip Flowers |
|---|---|---|
| Words | ~1,800 | ~1,500 |
| Direct answer | Buried — two paragraphs of Jane Eyre quotation first | Buried — Nicholas Sparks quotation first |
| Structure | "What to do before proposing" → "AFRL proposal ideas" → **ring catalogue** | "How to propose from a long distance" → ideas → **flower catalogue** |
| Data cited | None | None |
| Dates | Published Aug 2023, updated May 2024 | Nov 2024, still Propose Day 2025 framing |
| Format | ToC, H2/H3, no table, no FAQ schema, no author | H2s, no table, no FAQ, author = shop account |
| Tone | Third person, hedged, "unforgettable", "monumental" | Third person, translated-feeling, "Proposing from a distance is a villain" |
| Optimising for | Ring product pages | Flower delivery |

Both open on a literary quotation, both reach the actual advice around word 400, both
end in a product grid. Neither carries a number of any kind.

---

## Phase 2 — Gap analysis

**Table stakes** (covered by all of them, so the post must cover them): video-call
proposals, involving family or friends remotely, a memory montage or scrapbook,
choosing a ring at a distance, making it feel personal.

**The gap — the mechanics.** Not one of the ranking pages answers:

1. What clock time to send it, from her side of the map.
2. Whether the link or the call comes first.
3. Whether the video call is doing any actual work, or is just what everyone assumes.
4. What to do about the screenshot she will take within the minute.
5. Whether to lock the page at all.
6. When the right answer is to **not** propose online.

**Stale data.** Four incumbents across the keyword run still carry 2025 Propose Day
framing. Propose Day 2027 is **Monday 8 February 2027** — stated explicitly in the
body, including the fact that it is a working Monday, which is a scheduling problem
before it is a romantic one.

**Unanswered questions they raise and drop.** "Make sure the connection is good"
appears everywhere with no fallback plan. "Involve her family" appears with no word
about timezones.

**Fan-out sub-queries → H2/H3 map.**

| Sub-query | Where it lands |
|---|---|
| what is an online long-distance proposal | H2 definition block |
| what time to propose across time zones | H3 1 + FAQ 2 |
| send link or start call first | H3 2 + FAQ 3 |
| does a video call proposal work | H3 3 + dedicated H2 + FAQ 1 |
| how to stop her seeing it early | H3 4 + FAQ 5 |
| will she screenshot it | H3 5 + FAQ 7 |
| how long does it take to make | H3 6 + FAQ 11 |
| which format suits my situation | comparison table |
| should I wait for in person | objection H2 + FAQ 10 |
| when is Propose Day 2027 | definition block + FAQ 9 |

**Angle (recorded as `batchMeta.angle`):** wins by being the only post that gives the
actual order of operations for a long-distance online proposal — timezone handoff,
link-before-call, the locked page, the screenshot — using SubhSandesh's platform-wide
40.0% password-protection rate and 48.9% phone-open rate, and the only one that names
the peer-reviewed case for waiting until you are in the same room.

---

## Phase 3 — Sources

Research lane as assigned: long-distance romantic relationship maintenance —
idealisation, maintenance behaviours across distance, LDR vs geographically close
satisfaction and stability, mediated intimacy. No migration or diaspora population
statistics used. No generic context statistic used at all (budget was 1; spent 0).

| # | Source | Domain | Published | Access | What it supports |
|---|---|---|---|---|---|
| 1 | Holtzman, Kushlev, Wozny & Godard, "Long-distance texting", *Journal of Social and Personal Relationships* | journals.sagepub.com | 2021-11-14 | Hybrid OA; publisher 403s bots, abstract verified via OpenAlex + Crossref | n=647, 36.5% in LDRs. Texting frequency/responsiveness predicted satisfaction in LDRs but not GCRs; **video call use was not significantly related to satisfaction in either group** |
| 2 | Billedo, Kerkhof & Finkenauer, "Facebook intensity, social network support, stability and satisfaction in LDRR and GCRR", *Cyberpsychology* 14(2) art. 5 | cyberpsychology.eu | 2020-05-13 | Full OA, **full text read** | 456 participants, 142 in LDRR. Video calling positively associated with LDR satisfaction (β=.22, p=.004) and stability (β=.26, p<.001); negatively associated with satisfaction in GCRR (β=−.14, p=.01) |
| 3 | Stafford & Merolla, "Idealization, reunions, and stability in long-distance dating relationships", *JSPR* | journals.sagepub.com | 2007-02-01 | **Closed access — abstract only**, verified via OpenAlex/Crossref | Idealisation more pronounced in LDDRs; LDDRs more stable while separated but likely to terminate on becoming proximal; long absences + extreme idealisation predicted instability on reunion |
| 4 | Tashkeh, Lavasani, Farani, Tajrishi & Farahani, "An adaptive model of sustaining behaviors in long-distance relationships", *Acta Psychologica* | sciencedirect.com | 2024-10 | Gold OA; abstract verified via DOAJ API, full text not read | 366 LDR couples. **None of the online social support components significantly predicted marital intimacy or satisfaction** |

**Fetch honesty.** `journals.sagepub.com`, `tandfonline.com` and
`onlinelibrary.wiley.com` all return HTTP 403 to automated fetches (bot block, not
paywall — a human reader opens them fine). Claims for sources 1, 3 and 4 were verified
against publisher-deposited abstracts through the OpenAlex, Crossref and DOAJ APIs, and
this is recorded in `auditReport.failed`. Source 2 was read in full.

**Sources considered and rejected:** `tandfonline.com` "Interconnection of Multiple
Communication Modes in LDDRs" and `onlinelibrary.wiley.com` *Personal Relationships* —
both unverifiable through any fetch route available. PMC/NCBI and arXiv were at cap for
this batch and excluded by instruction; `journals.plos.org` was left alone so its single
remaining batch slot stays open. Terms searched: "long distance relationship maintenance
behaviours study", "idealization long distance romantic partners research",
"geographically close versus long distance relationship satisfaction peer reviewed",
"cyberpsychology long-distance mediated communication intimacy", plus DOAJ full-text
search on "long distance romantic relationship" and "long-distance relationship
maintenance".

### Batch source-cap tally contributed by this post

- `journals.sagepub.com` — **2 uses here**; one sibling (`how-to-propose-girlfriend-in-chat`) already used it, so the batch total is now **3 of 3 — AT CAP.**
- `cyberpsychology.eu` — 1 use here; sibling `how-to-propose-online` used it once. Batch total **2 of 3**.
- `www.sciencedirect.com` — 1 use here. Batch total **1 of 3**.
- No URL used by this post appears in any sibling file.

### The productive disagreement

Sources 1 and 2 contradict each other on video calls, and the post says so rather than
picking the flattering one. That is the single hardest thing for a ring-retailer
listicle to copy, because it requires having read both.

---

## Phase 4–5 — Draft decisions

- **First-party facts, with the mandated disclosure in body prose every time:**
  40.0% password protection is stated as *1,809 of all 4,524 pages, across every one of
  the 16 page types, not proposals specifically*; 48.9% phone views as *25,008 of 51,164
  recorded views, platform-wide*; the 6.3 h median edit gap as *sampled on the /love-gf
  template, n=1,136, not on proposal pages*. **No number anywhere in the post is
  attributed to proposal pages.**
- **Internal links (3), all from `TEMPLATE_LINKS`, all placed after the value is
  established:** `/proposal` (primary, in H3 6 after the build-lead-time argument),
  `/train-ticket` (after the comparison table, argued as *better* than /proposal for
  couples four weeks from a reunion), `/love-gf` (for "will you be my girlfriend"
  rather than marriage).
- **`templateUrls`:** `/proposal`, `/train-ticket`, `/love-gf`.
- **Wikipedia:** zero body links. Four entities used only in `sameAs`, each verified
  against the Wikipedia API with its Wikidata QID: Long-distance relationship Q1406917,
  Marriage proposal Q1057944, Videotelephony Q854954, Indian Standard Time Q604055.
- **`structuredData`:** an `@id`-matched enrichment block on `<canonical>#post` carrying
  `about`, `mentions` and a 4-entry `citation` mirroring `batchMeta.sources`
  one-to-one, plus an `ItemList` mirroring the six H3s in order. No renderer-built type,
  no `AggregateRating`/`Review`/`HowTo`.
- **Timezone arithmetic checked:** early February has no DST anywhere relevant.
  IST = UTC+5:30; New York EST = UTC−5 (gap 10:30); London GMT = UTC+0 (gap 5:30);
  Dubai = UTC+4 (gap 1:30). 8 February 2027 is a Monday.

---

## Phase 6 — Audit summary

- Publish checklist length **50**. `passed` = 48, `failed` (checklist items) = 2,
  `passed ∩ failed = ∅`, 48 + 2 = 50. Item strings copied verbatim.
- One additional `failed` entry is **not** a checklist item and is labelled as such: the
  BRIEF's honesty constraint, recorded as a structural limitation because no
  proposal-specific figure was obtainable for this batch.
- Body: **1,783 words** (plain whitespace split, FAQs excluded). **12 FAQs**, in
  `article.faqs` and the renderer-built FAQPage only.

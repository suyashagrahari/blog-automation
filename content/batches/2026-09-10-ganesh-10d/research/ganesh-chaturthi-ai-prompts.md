# Research brief — `ganesh chaturthi ai prompt`

- **Slug:** `ganesh-chaturthi-ai-prompts`
- **Batch:** `2026-09-10-ganesh-10d` (Ganesh Chaturthi wave 4)
- **Written:** 2026-09-10
- **Status:** GATE PASSED — blog JSON written.

---

## Phase 0 — first-party data gate

`content/facts.md` regenerated 2026-09-09; `npm run facts` deliberately **not**
re-run (blocked by the machine's command classifier, and re-dating the file would
invalidate 133 `factsUsed` entries across the 36 live Ganesh posts).

Relevant facts available, ≥3 required with ≥2 fitting the first 150 words:

1. `3,894 personalised pages created since 2026-03-12, across 15 page types — measured 2026-09-09` — **in first 150 words**
2. `49.6% of shared pages are opened on a phone (22,817 of 46,005 views) — measured 2026-09-09` — **in first 150 words**
3. `No Ganesh Chaturthi page-creation data exists at all: the /happy-ganesh-chaturthi template went live 2026-09-10, four days before the festival — measured 2026-09-10`
4. `Average views per created page: 11.8 — measured 2026-09-09`
5. `3,088 registered creators — measured 2026-09-09`
6. `Occasion-dated pages, every festival plus every wedding type, are 144 of 3,894 pages, 3.7%; the platform is 96.3% romantic and everyday pages — measured 2026-09-09`
7. `42.0% of creators password-protect their page before sharing it (1,636 of 3,894) — measured 2026-09-09`

**Gate: PASS.** These are platform-behaviour facts and they are load-bearing here
rather than decorative: the post's argument is that a generated image is an asset
with no provenance and no recipient, and the phone-open rate and the page counts
are what make the "what happens after you generate it" section checkable.

**Deliberate omission — the Raksha Bandhan lead-time dataset.** `facts.md` carries
it and it would fit ("people make festival images on the day"), but the gated
sibling `ganpati-bappa-photos` already devotes a whole H2 to it. BRIEF.md §3's
second abort condition is substantive duplication using *the same first-party
numbers*, so the lead-time block is left to the sibling and this post is built on
a different subset of `facts.md`. That is a differentiation choice, not an
oversight, and it also means the two §1 disclosures (Raksha Bandhan ≠ Ganesh
Chaturthi; n=89 is small) do not apply to this post because nothing from that
dataset is cited.

---

## Phase 3-adjacent, stated up front — DID I RUN A MODEL?

**No. No text-to-image model was run for this post, and no output is claimed.**

What was available in this environment: no image-generation tool of any kind. The
only generative-asset tools present were `mcp__blender__generate_hyper3d_model_via_text`
and `mcp__blender__generate_hunyuan3d_model` — **text-to-3D-mesh** generators, not
text-to-image diffusion models, requiring third-party API keys, and a mesh would
not evidence the two-dimensional iconography failures this post is about. Driving
the user's live Chrome to a hosted generator was rejected on two grounds: it would
submit prompts on the user's own logged-in account without confirmation, and the
sibling post recorded on 2026-09-10 that the shared browser tab was navigated out
from under it twice mid-call by concurrent agents in this same batch.

So the post is built the way the assignment's fallback specifies: **prompt
construction plus the published evaluation literature**, with the limitation
stated in the body (not only in the audit) and every failure mode attributed to
the paper that measured it. No prompt in this post is presented as tested, no
model output is described as observed, and no screenshot exists.

This is the honest version of the angle. The dishonest version — inventing "I ran
this and Ganesha came out with four hands" — would have been more citable and is
exactly what the assignment forbids.

---

## Phase 3 (cont.) — cannibalisation gate, BLOCKING

- **My keyword:** `ganesh chaturthi ai prompt`
- **Sibling gated against:** `content/batches/2026-09-09-ganesh-10c/blogs/ganpati-bappa-photos.json`, keyword `ganpati bappa photos`
- **Rule:** shared results counted on (domain **and** article identity); `pinterest.com` and `youtube.com` excluded; threshold 3.

### Capture 1 — Google via `WebSearch`, 2026-09-10

`ganesh chaturthi ai prompt`:

1. lightxeditor.com — `/blog/ganesha-ai-photo-prompts-ganesh-chaturthi/`
2. lightxeditor.com — `/blog/ganesha-ai-video-prompts-for-ganesh-chaturthi/`
3. dressingschool.com — `/prompts/ganesh-chaturthi-ai-photo-prompt/`
4. media.io — `/ai/explore/zone/prompt-seen-ganesh-chaturthi`
5. dayno.ai — `/prompt/ganesh-chaturthi-ai-prompt-tJeEyj`
6. dayno.ai — `/categories/ganesh-chaturthi-prompt`

`ganpati bappa photos` (sibling):

1. gettyimages.com — `/photos/ganpati-bappa-photo`
2. istockphoto.com — `/photos/ganpati-bappa-photos`
3. istockphoto.com — `/photos/ganpati-bappa`
4. gettyimages.com — `/photos/ganpati-bappa`
5. pexels.com — `/search/ganpati%20bappa/`

**Shared articles: 0. Shared domains: 0.** The two SERPs are not merely different
pages, they are different *classes* of page — mine is entirely AI-tool blogs and
prompt-library pages, the sibling's is entirely stock-photo libraries. There is no
plausible reading on which these are one keyword.

### Capture 2 — second-engine corroboration: UNAVAILABLE

Attempted and failed, recorded rather than hidden:

- `html.duckduckgo.com/html/?kl=in-en` — HTTP **202** anti-bot challenge, 0 results, both queries.
- `lite.duckduckgo.com/lite/` (POST, `kl=in-en`) — HTTP **202**, 14.3 KB challenge page, 0 organic hrefs.
- `mojeek.com/search?arc=in` — HTTP 200 but a 5.5 KB shell with no result anchors.
- `bing.com/search?cc=IN` — HTTP 200, 126 KB, 165 anchors, **all** internal to bing.com; no organic results served to a non-browser client.

Corroboration was **not** required here: BRIEF.md §3 makes a second engine
mandatory only at exactly 2 shared results, the judgment-call band. This capture
is 0, four below the threshold, so the verdict does not turn on the missing engine.

### Second abort condition — substantive duplication: PASS

The sibling's full JSON was read before drafting. It is an asset-delivery and
**licence** page: what the four uses of a Ganpati photo are, who may legally grant
a licence (Wikimedia Commons), darshan as mutual recognition (Elison), god posters
online (Bhatia), and the Raksha Bandhan lead-time block. Its entire treatment of
this post's subject is **one FAQ** — "Should I use AI-generated Ganpati images?",
answered in three sentences, none of which name a failure mode, a paper, or a
prompt.

Overlaps deliberately avoided in this post: the lead-time H2 (see Phase 0 above),
the licence-of-a-circulating-photograph argument (mine is the different question of
whether a *generated* image has a copyright holder at all), and all four of the
sibling's sources. Shared `factsUsed` lines are 2 of 7, both platform-wide
denominators that every post in the cluster uses.

**VERDICT: PASS — write the post.**

---

## Phase 1 — SERP analysis

`WebSearch` is **US-locale only** — there is no `gl=in` parameter. Every capture
below is therefore a US-locale approximation of an India-intent keyword, and the
real India SERP may differ. Recorded in the audit as well as here.

### Format findings

- **No AI Overview and no People Also Ask** were returned for the keyword.
- Page one is **100% commercial tool pages**. Four of the six results are owned by
  AI image editors (LightX ×2, Media.io, Dayno) whose page exists to route the
  reader into their own generator; the other two are prompt-library listings.
- **There is no independent page on this SERP.** Not one result is written by
  someone with no generator to sell, which is the entire opening.

### Competitor comparison table

| Page | Type | Structure | Where the answer is | Data cited | Failure modes named | Tone |
|---|---|---|---|---|---|---|
| lightxeditor.com — 10 Best Ganesha AI Photo Prompts | Vendor blog | Numbered prompt list, each with a copy button, product CTA between items | Immediate — the prompts are the page | None. No dates, no model versions, no evaluation | **None** | Second person, promotional, superlatives ("best", "stunning") |
| lightxeditor.com — AI Ganesha Video Prompts | Vendor blog | Same template, video prompts | Immediate | None | **None** | Identical to the above — same template, different asset |
| dressingschool.com — Ganesh Chaturthi AI Photo Prompt | Prompt-library page | One hero prompt + variants, "works in ChatGPT & Gemini" | Immediate | None | **None** | Instructional, thin, no author |
| media.io — Ganesh Chaturthi AI Prompts for Photos, DP & Posters | Vendor landing | Prompt cards by output type (DP / status / poster / wallpaper) | Immediate | None | **None** | Product copy |
| dayno.ai — Ganesh Chaturthi AI Prompt | Prompt-library entry | Single prompt, copy button, related prompts rail | Immediate | None | **None** | Almost no prose |

The one genuinely useful thing page one agrees on, and it is worth conceding
plainly: the dominant 2026 intent is **identity-preserving** — upload one selfie,
get yourself standing in a mandap under a monumental idol, 4:5, "Ganpati Bappa
Morya" title. That is table stakes and the post says so.

---

## Phase 2 — gap analysis

**Table stakes** (all five cover; the post must not omit):

- The identity-preservation pattern (one reference photo + scene + action).
- The three-part prompt anatomy: subject/identity, setting, action.
- Named target platforms — ChatGPT, Gemini, Midjourney.
- Output-shape awareness: DP, status, poster, wallpaper, and the 4:5 crop.

**The gap — and it is a large one.** Not one page-one result mentions that
text-to-image models fail *specifically and measurably* on religious and cultural
iconography. Zero of five name a single failure mode. Zero cite a single
evaluation. Zero say what to check before sending the image to a family group. The
literature on exactly this is substantial and none of it has reached this SERP.

**Stale data:** not applicable in the usual sense — the competitors cite no data at
all, so there is nothing to supersede. That is itself the finding.

**Unanswered questions raised and dropped:**

- Who owns a generated Ganesha image?
- Is it acceptable to put a generated deity image in a family group?
- What do you do when the model gets the iconography wrong — how do you even know?
- Why does the same prompt behave differently in ChatGPT and Midjourney?

**Fan-out sub-queries** → became H2s or FAQs: what a Ganesh Chaturthi AI prompt
actually is; how to structure one; what breaks and why; what to check before
sending; whether generated deity images are appropriate; who owns the output;
whether the prompt is transferable across models; what to do instead.

**Angle (`batchMeta.angle`):** wins by being the only page on this SERP that names
what text-to-image models measurably get wrong on Hindu iconography — with the
evaluations that measured it — and the only one written by someone with no
generator to sell, grounded in 3,894 pages across 15 page types and a 49.6%
phone-open rate; it also states plainly that no model was run here, which none of
the five vendor pages would ever disclose about their own.

---

## Phase 3 — sources

Searched the **phenomenon**, not the keyword. Terms tried:
`text-to-image cultural bias evaluation`, `diffusion model religious iconography`,
`prompt engineering evaluation study`, `text-to-image geo-cultural stereotypes
India`, `cultural competence text-to-image benchmark`, `text-to-image hands
anatomy failure evaluation`, `AI generated image copyright human authorship`.

Domain constraints from `USED-SOURCES.md` bit hard and shaped the selection:
**`arxiv.org` (5 posts), `aclanthology.org` (3), `pmc.ncbi.nlm.nih.gov` (7),
`nature.com` (4), `journals.plos.org` (3), `frontiersin.org` (3),
`en.wikipedia.org` (6) are all at or past cap.** Most of this literature lives on
arXiv, so the open-access *proceedings* hosts were used instead —
`openaccess.thecvf.com`, `proceedings.neurips.cc`, `dl.acm.org` (FAccT is open
access) — none of which appears anywhere in the 36-post ledger.

Final list — five sources, four domains, none of them anywhere in the 36-post
ledger. Per-source verification notes in `batchMeta.sources` record exactly what
was fetched and read and what was not.

| Source | Venue / date | Domain | Read | Load-bearing claim |
|---|---|---|---|---|
| Cho, Zala, Bansal — DALL-Eval | ICCV 2023, CVF open access | openaccess.thecvf.com | **Full text** (PDF downloaded, converted) | Stable Diffusion 37.8% object counting vs a 97.8% oracle; 48.0% on human eval; generates "more (5 instead of 3 dogs) or fewer (1 instead of 2 bicycles) objects"; accuracy falls as the count rises |
| Liu et al. — SCoFT | CVPR 2024, CVF open access | openaccess.thecvf.com | **Full text** (PDF downloaded, converted) | CCUB built by cultural insiders (≥5 years resident, China/Korea/India/Mexico/Nigeria) across categories including *religion and festival*; 51 participants, 10 Indian; baseline Stable Diffusion last of four on description match, representation, stereotype, offensiveness |
| Kannen et al. — CUBE | NeurIPS 2024 D&B | proceedings.neurips.cc | **Abstract only** — PDF hung past 120 s twice | 8 countries, cuisine/landmarks/art; "significant gaps in the cultural awareness of existing models across countries" |
| Oppenländer — prompt-modifier taxonomy | *Behaviour & Information Technology*, 28 Nov 2023, CC BY | jyx.jyu.fi | **Abstract only** — tandfonline 403, no file on the JYX record | Six types of prompt modifier, from a three-month ethnographic study |
| US Copyright Office registration guidance | *Federal Register*, 16 Mar 2023 | federalregister.gov | **Full text** | Prompts "function more like instructions to a commissioned artist"; machine-determined expressive elements are "not the product of human authorship", unprotected, and must be disclaimed |

Two notes on what was deliberately *not* cited. The arXiv preprints of both the
CUBE paper and the Oppenländer taxonomy carry the same claims in full text, but
**`arxiv.org` is at the batch domain cap of 3 posts**, so the journal and
proceedings hosts were cited and the abstract-only limitation was accepted and
recorded rather than dodged by citing the capped domain. And the copyright source
is **US law, not India's** — the post says so in the body, and it is the clearest
published regulator statement rather than the rule where the reader lives.

Source-test summary:

- **Subject test:** passed by the three evaluation papers — each is specifically
  about what text-to-image models do to cultural or religious subject matter, not
  about "AI" in general.
- **Peer-reviewed and open-access:** ICCV 2023 (CVF open access) and NeurIPS 2024
  Datasets & Benchmarks (open proceedings) both qualify; FAccT 2023 is ACM
  peer-reviewed and open access.
- **Swap test:** none of them could sit unchanged in another keyword's post in this
  batch. A cultural-competence benchmark for image generators is useless in a
  wishes post, an outfits post or a holiday-schedule post.
- **Generic context statistics:** zero used.
- **Wikipedia:** zero body links.

---

## Phase 5 — targeting

- `categorySlug`: `indian-festivals`
- `templateUrls`: `["/happy-ganesh-chaturthi"]` only
- Internal links, all absolute, all placed after the section that earns them:
  `https://subhsandesh.in/happy-ganesh-chaturthi` (mandatory),
  `https://subhsandesh.in/guides/happy-ganesh-chaturthi` (body reference).
- The §0 social block is pasted verbatim immediately before `## Sources`; its two
  URLs are **not** in `batchMeta.sources` and do not count toward the source quota.

## Phase 6 — audit result

**47 passed, 3 failed, 50 total.** `passed ∩ failed = ∅` and `|passed| + |failed|
== 50` are asserted in the builder script, and the item strings are extracted
programmatically from `references/publish-checklist.md` so they are verbatim by
construction rather than by retyping.

The three failures, all reported rather than papered over:

1. **"Every H2 section answerable standalone in 2–3 sentences"** — structural. The
   BRIEF §0 social block is a two-link block, not an answerable section, and is
   not this post's to reword.
2. **"Paragraphs 2–3 sentences throughout"** — four paragraphs run to five or six
   sentences, and all four are shapes `page-structure.md` itself prescribes (the
   Block 1 answer paragraph, and the three Block 3 H3s with their four fixed
   fields). Three other over-long paragraphs *were* split during drafting; these
   four are a genuine conflict between two rules in the skill.
3. **"structuredData contains no type the renderer already builds, except an
   @id-matched enrichment block on `<canonicalURL>#post`"** — deliberate. The
   assignment mandates a matching FAQPage block, so it is emitted `@id`-matched on
   `#faq`, which `app/lib/batches.ts`'s own validator treats as a surviving,
   merging id — but the checklist item as worded permits only `#post`. Flagged
   rather than silently chosen.

`WebSearch`'s **US-locale-only** limitation is recorded in
`batchMeta.cannibalisationGate.toolLimitation`.

`scripts/verify-batch.mjs` reports **✔ no problems** for this blog: 1,731 words,
11 FAQs, 47/3 audit, `indian-festivals`, `/happy-ganesh-chaturthi` and the guide
linked, 5 outbound URLs across 4 domains, 0 domains at the cap.

## Marker word

`iconography` — appears six times in this post's body and in none of the 36
siblings' bodies. H1, `article.slug`, the filename and `batchMeta.keyword` all
agree, so a crossed-over draft would be detectable.

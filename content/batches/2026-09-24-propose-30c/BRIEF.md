# BRIEF — batch `2026-09-24-propose-30c`

Binding for every agent. Where this and a general reference disagree, **this wins**.

**Wave 4.** Waves 1–3 (`2026-09-17-propose-12`, `2026-09-17-propose-30`,
`2026-09-23-propose-30b`) are committed and merged to `main` — **72 posts already live
in this territory**, plus 46 older proposal articles in the live corpus. You are not
rewriting any of them and **you must not duplicate them**.

---

## Where these keywords came from

The 100-keyword run is exhausted — all 72 primaries are built and the 20 stragglers are
secondaries already covered inside existing posts. These 30 were mined from the **4,788
raw autocomplete suggestions** the same run harvested but never selected (see
`selection.md`). They are real India-geo demand with a `prefix_hits` figure behind each,
and they open axes the original 100 never touched. **`prefix_hits` is ordinal demand, not
volume — never print it as a search figure.**

---

## The two link rules — non-negotiable, both

1. **`/proposal` is mandatory in every post.** "Will You Marry Me? — a proposal scrapbook
   of your story, ending in a YES button that grows every time they dodge it." Place it
   after the section that establishes why the reader would want it.
2. **Every post must offer a genuine ALTERNATIVE template with the reason it suits that
   reader better** — `/apology-dashboard`, `/love-gf`, `/date-invitation`,
   `/court-of-love`, `/bouquet-gf`, `/train-ticket`. **If none fits, say which is closest
   and why it still isn't right.** Only `TEMPLATE_LINKS` slugs exist; an invented one 404s.

**Established across three waves and still true:** in Indian usage *"propose"* usually
means asking someone to be your girlfriend or boyfriend, **not** asking them to marry
you. A wave-3 agent verified that Hindi has no native verb for the romantic ask —
McGregor glosses प्रस्ताव as a motion for discussion, and all 230 treebank instances are
parliamentary or commercial. So `/proposal` is the wrong template for most of this
traffic and `/love-gf` is usually right. Say so where it applies.

---

## Phase 0 — facts (regenerated 2026-09-24; a snapshot is pinned in this batch)

Use `content/facts.md`. **A copy is pinned at `facts-snapshot.md` in this batch folder**
so the batch stays auditable after the next regeneration. At least 3 facts per post, at
least 2 inside the first 150 words.

- 5,148 personalised pages created since 2026-03-12, across **21** page types
- **#1 is `/apology-dashboard` — 1,375 pages, 26.7%**
- #2 `/bouquet-gf` 1,178 (22.9%) and #3 `/love-gf` 1,178 (22.9%) — **tied on creation**;
  `/love-gf` remains the most-*viewed* at 16,998 views, 29.9%
- **38.5% password-protect before sharing (1,983 of 5,148)**
- **90.9% of started pages are published and shared (4,679 of 5,148)**
- 48.3% of views on a phone (27,499 of 56,886); 56,886 total views; 11.1 avg per page
- 3,808 registered creators; 1.35 pages per creator
- Median first-save → last-edit gap **2.2 hours — sampled on `/apology-dashboard`, n=1,375**

**Copy figures from `content/facts.md` verbatim**, never from a sibling post — `factsUsed`
is checked byte-for-byte. Earlier waves quote superseded numbers; ignore them.

### Honesty constraints on every figure

- **No proposal-specific data exists.** The `proposalpages` probe is still refused by this
  machine's production-read policy. **No figure may be attributed to proposal pages** —
  label each one platform-wide across 21 page types, or sampled on the named template,
  **in the body prose**, not only in the audit.
- **The pricing block in `content/facts.md` is empty for a fourth batch.** You may not
  state or imply a price, a free tier or a paid tier. The verifier hard-fails on "for
  free", "free tier", "costs you nothing", "₹", "pricing" and similar. A wave-3 post
  failed the whole batch on "costs you nothing"; another had to cut "length is free".
  **This matters most for the decoration and beach posts — do not price anything.**
- Record both in `batchMeta.structuralLimitations`.

---

## Cannibalisation — still the defining risk

**Read the sibling post named in your task prompt before writing a line**, and state in
your research brief how yours differs in intent, structure and sources. **If you cannot
name a real difference, say so in your handback rather than writing a duplicate.** Three
wave-3 agents did exactly that and it was the right call.

Distinctions this project runs on: *quote ≠ wish ≠ message ≠ shayari ≠ caption*;
*advice ≠ lines*; *language pages are not translations of each other*; *product pages
differ by the ask, not the synonym*. **Cross-link instead of competing** — but note that
sibling `/blog/` slugs are not `TEMPLATE_LINKS` entries and **404 until waves 1–3
publish**, so mention them in prose or link sparingly and record it.

---

## Verified 2027 dates

Rose Day **Sunday 7 Feb 2027** opens the week · **Propose Day Monday 8 Feb 2027**, the
second day · Valentine's Day **Sunday 14 Feb 2027** closes it. Valentine week is **eight**
dated days, not seven. Propose Day 2026 was a Sunday; 2027 is a working Monday.
**Verify the weekday yourself with `date` before printing it.**

---

## Do not claim what you did not measure

Wave 2's main defect class: posts asserting *"most ranking pages still say 2025"* or
*"no competitor covers X"* for SERPs **never measured**. The batch verifier cannot see it.

- Only 11 India-served SERPs were ever measured, on 2026-09-16
  (`content/keywords/2026-09-16-propose-100/serps.md`, `competitor-map.md`). **None of
  this batch's keywords is among them.**
- **If you did not fetch a page or see a SERP, do not describe what is on it.**
- Record inherited Phase 1 in `structuralLimitations`; never describe a position as current.

---

## Sources — 332 URLs already spent

```
node content/batches/2026-09-24-propose-30c/capcheck.mjs        # add --list for the URLs
```

Run it when choosing sources **and again immediately before you save** — a four-way race
in wave 3 put one domain over cap even though every agent's earlier check was clean. The
check is not a lock.

- 4–6 sources each · **≥2 pass the subject test** · **≥1 peer-reviewed open access**
- ≤1 generic context statistic · Wikipedia 0–2, entity disambiguation only
- A URL in ≤2 posts, a publisher domain in ≤3. `doi.org` is a resolver — count the
  **resolved** publisher. **`europepmc.org` and `pmc.ncbi.nlm.nih.gov` are the same
  publisher; count together.** So are `eric.ed.gov` and `files.eric.ed.gov`.
- **Avoid the publishers that fill first**: frontiersin.org, PMC/Europe PMC,
  journals.plos.org, arxiv.org, journals.sagepub.com, onlinelibrary.wiley.com,
  link.springer.com, nature.com, aclanthology.org, mdpi.com, archive.org,
  dsal.uchicago.edu, universaldependencies.org, osf.io. **Prefer university and
  institutional repositories, DOAJ-listed journals, society journals and green OA copies**
  — they are readable, which the paywalled ones are not.

**Search budget.** WebSearch is capped at **200 calls for the whole session, shared across
all 30 agents.** Budget **no more than 4**: SERP pass first, then research. When it is
gone it returns a budget error — do not retry, and do not scrape DuckDuckGo or Mojeek
(both challenge-blocked). Fall back to:

```
node content/batches/2026-09-24-propose-30c/findpapers.mjs "your phenomenon query"
```

Crossref + Europe PMC. **Crossref indexes predatory journals (IJSR, IJRASET and similar)
— indexing is not peer review, judge the venue.** A wave-3 agent also found and rejected
a **retracted** paper; check. OpenAlex and Semantic Scholar rate-limit (429) here.

**Search the phenomenon, not the keyword.** If no topical research exists, **say so and
name the terms you tried** — that is a real finding. Do not pad with a government figure.

**Publisher bot-blocking is expected** (SAGE, Wiley, Springer, ScienceDirect, MDPI,
tandfonline, nature.com). Use a green OA copy or an abstract, and **disclose in the audit
that the full text was not read**. Cite only what you read. `publishedDate` is when the
**source** was published, never when you fetched it.

---

## Audit arithmetic

`references/publish-checklist.md` has **50** items.

- `passed ∩ failed = ∅`, `|passed| + |failed| = 50`. Exactly. Strings **byte-verbatim** —
  items wrap across lines; an item runs from its `- [ ]` marker to the next marker, blank
  line or heading, whitespace-collapsed.
- **Non-checklist notes never go in `failed`** — they go in `batchMeta.structuralLimitations`.
- **Do not mark an item passed unless it genuinely passes.** A wave-2 post had an H2 with
  no number or named source sitting in `passed`.
- `page-structure.md` mandates **four fields in fixed order per H3, not one unbroken
  paragraph**, and the Block 1 answer fits in **three** sentences. "Paragraphs 2–3
  sentences throughout" is therefore achievable — split the blocks.

---

## Mechanics

- Write **only your own two files**: `blogs/<slug>.json` and `research/<slug>.md` under
  `content/batches/2026-09-24-propose-30c/`.
- **Scratch files named `<slug>-<purpose>.md`** — the scratchpad is shared.
- `templateUrls`: 1–3, **relative paths**, never absolute.
- `categorySlug`: `modern-romance` for advice / message / quotes / wishes / meaning posts;
  `digital-gifts-romance` for tool / card / link / website posts. Propose Day is Valentine
  week — **not** `indian-festivals`.
- **FAQs live in `article.faqs` + FAQPage JSON-LD only, never in `contentMarkdown`.** Body
  must reach **1,500–1,800 words without them** — the verifier hard-fails outside that
  range on a plain whitespace split. 8–12 FAQs.
- **No FAQ byte-identical or near-identical to a body H2** (the verifier flags ≥0.85).
- Check the slug is free:
  `https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=<slug>`

---

## Indian-language posts — the method that worked, now applied to six new scripts

Nine posts here target **Tamil, Punjabi, Gujarati, Urdu, Assamese, Odia, Kannada, Telugu
and Marathi**. Waves 2–3 proved the method; follow it exactly.

**CORRECTED 2026-09-24 — earlier briefs in this project were wrong about the corpus.**
They said the live corpus has "zero pages in any Indian language". **That is false.** An
Assamese agent checked and found `love-letter-for-girlfriend-in-assamese` live since
2026-09-02; a full audit finds **60 of the 905 live articles carry an Indian-language
token in the slug** — 16 shayari, 10 Marathi, 7 Hindi, 7 Tamil, 6 Telugu, 3 each Gujarati,
Punjabi, Bengali and Kannada, 2 Malayalam.

**The true claim is narrower and you must use the narrow one:** none of those 60 is in
**proposal territory** — they are miss-you, sorry, Raksha Bandhan and girlfriend-day pages.
So "no Indian-language *proposal* page exists" is supportable; "no Indian-language page
exists" is not. **Do not print the broad version**, and if you cite corpus coverage at
all, say what was actually measured.

Two consequences for you:
1. **Check the live corpus for your own language before claiming novelty** —
   `content/keywords/strapi-live-articles.json`. A sibling in your language may exist in a
   different territory, and it is a cross-link opportunity rather than a competitor.
2. This is the same defect class as wave 2's "most ranking pages still say 2025" — a claim
   nobody measured, repeated because it sounded right. It came from me this time.

- Write the lines in the **actual script**, each with **Roman transliteration** and an
  **English gloss**. Surrounding prose is ENGLISH — that is what the SERP shows.
- **Mark the register.** Every one of these languages distinguishes intimate from
  respectful address, and the wrong one is what a native reader spots instantly.
- **Verify every line against something you actually fetched** — a dictionary headword, a
  published grammar, a treebank or a corpus. Not intuition, not memory. This is not
  optional and it caught real errors in wave 3:
  - Kannada: **ಬಾಳು** cut — Kittel attests "a knife, a sword", not "life"; **ಮರೆ** cut — "a kind of deer", not "forget"
  - Hindi: **ख़ास** cut — the un-nukta'd headword means "a square-cut bag, a load"
  - Hindi: a treebank of newswire returns **zero** second-person familiar forms, so a conversational corpus had to be added
- **Cut anything you cannot verify** and report a ledger: drafted / published / cut, with a
  reason per cut. Wave 3 cut Marathi 30→12, Hindi 27→16, Bengali 25→14, Telugu 18→11,
  Kannada 19→12, Malayalam 15→10. **Target 8–12 published lines, verified hard.**
  **Fewer correct lines beats more shaky ones** — a wrong line in a proposal is worse than
  no page.
- **Record in `structuralLimitations` that the lines were not reviewed by a native speaker.**
- No competitor copy. **No copyrighted modern poetry or film lyrics** — original lines, or
  verified public-domain material with attribution.
- **Urdu is right-to-left** and uses the Nastaʿlīq style; check that the script, the
  transliteration and any mixed-direction punctuation render sanely in Markdown.
- These SERPs are an annual **February news cycle** owned by MensXP, Zee, Webdunia,
  Maharashtra Times, Loksatta, Times Now and Amar Ujala. **Target position 6–10, not 3,
  and say so in `honestAssessment`.**

---

## The copy-text posts — be honest about what they are

Several posts target `propose day quotes / wishes` variants. The keyword run is explicit:
these are **copy-text queries with near-zero conversion** — the searcher copies a line and
leaves. Write the genuinely best version — lines grouped by the situation they fit, each
group saying **when not to use it** — and say plainly in `honestAssessment` that the page
is a visibility asset judged on impressions, not a converting page. **Do not write a bait
page and do not claim it will convert.**

---

## The recipient side — new in this wave, and handle it with care

Three posts are written for the person **receiving** a proposal, which all 72 existing
posts ignore. That includes **how to say no**. Rules:

- **Never coach persistence after a refusal**, and never frame a refusal as unjust or as a
  problem to be solved. A refusal is information.
- A page about declining must be **genuinely useful to the person declining**, not a
  disguised persuasion guide for the asker.
- Where the honest answer is "accept it and step back", write that.
- Repeated unwanted contact is not romance. Waves 2–3 verified **BNS 2023 s.78** (stalking)
  against three bare-act sources — MHA, NCRB and the enacted PRS Act all agree on **s.78**;
  a PRS *Bill* PDF numbers it 77, so cite the **Act**, not the Bill. Reuse none of those
  three URLs — check the ban list and find your own if you need it.

---

## Exemption to the cross-wave URL ban — added mid-batch 2026-09-24

The 332-URL ban exists so that four waves in one topical cluster do not cite the same
research and read like a content farm. That rationale does not apply to **primary
reference material, where there is only one correct source.**

**Exempt from the ban — reuse freely, and say you did:**
- **Statute and case law.** A section of the Bharatiya Nyaya Sanhita has exactly one
  correct citation. An agent this wave could not cite BNS 2023 s.78 on stalking at all,
  because all three verified bare-act URLs were banned and `indiacode.nic.in` was
  unreachable. That is the rule defeating its own purpose on a **safety-relevant legal
  point**. Cite the Act (MHA, NCRB or the enacted PRS Act text — **not** the PRS *Bill*,
  which numbers stalking s.77).
- **Dictionaries, grammars, treebanks and corpora used as verification instruments** —
  McGregor, Kittel, Gwynn, Caldwell, Universal Dependencies, Tatoeba. A wave-3 agent
  correctly kept these out of `batchMeta.sources` and credited them in prose instead when
  the domain was at cap; **that remains the preferred handling** because it keeps the
  source slots for genuine research. Either way, using them is not a ban breach.
- **Standards documents** — Unicode UTS/TR, W3C, RFC.

Everything else stays banned. The ban is about **research** — studies, papers, surveys —
not about the reference shelf. If you reuse an exempt URL, note it in
`structuralLimitations` so the reuse is visible and deliberate rather than accidental.

---

## Treat the framing claims in your own task prompt as unverified

Your task prompt often hands you a hypothesis to build on — "X is the canonical case of Y",
"no incumbent does Z", "this language has property P". **Those are my claims, not
established fact, and three have already been wrong:**

- I told a wave-3 agent the paragraph-length checklist item conflicted with
  `page-structure.md`. It did not; the agent proved the item was achievable and closed it.
- I told a wave-4 agent that incumbents answer the proposal-length question with "from the
  heart". The agent measured the SERP: they do print durations, just unsourced.
- I told a wave-4 agent that **Tamil is a defining case in Ferguson's 1959 diglossia
  paper**. It is not — Ferguson's four are Arabic, Modern Greek, Swiss German and Haitian
  Creole. The agent checked and refused to print it.

**Verify any factual claim in your prompt before repeating it on the page.** If it does not
hold, say so in your handback and write what is actually true. An agent that corrects the
brief is doing the job right, not being awkward — and a claim I supplied is not a source.

---

## Raksha Bandhan lead-time data — the position for this batch, stated explicitly

Waves 2 and 3 banned the Raksha Bandhan lead-time block in `content/facts.md` outright.
**That prohibition was dropped from this brief — by omission, not by decision.** An agent
used the data before anyone noticed, and used it correctly, so here is the deliberate rule:

**Permitted in this batch, on one condition: both disclosures required by `facts.md` itself
must appear in BODY PROSE, not only in the audit.**

1. The measurement is **Raksha Bandhan 2026** — a different, one-day occasion, not Propose Day.
2. **n = 89 is small**, so no per-template, per-region or per-occasion rate may be derived
   from it.

It is the only first-party lead-time evidence that exists, and on a page about how far away
a date is, it is genuinely the most relevant thing we have. Used without both disclosures it
is a figure borrowed from another festival and presented as if it described this one — which
is the defect this whole project has been guarding against. Used with them, it is honest.

If your page has nothing to do with lead time, do not reach for it.

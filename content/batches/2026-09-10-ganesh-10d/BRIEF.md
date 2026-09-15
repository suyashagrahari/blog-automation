# BRIEF — 2026-09-10-ganesh-10d (Ganesh Chaturthi wave 4)

Ganesh Chaturthi 2026 is **Monday 14 September** — four days out. This is the
fourth wave on the same festival. **36 posts already exist** across
`2026-09-09-ganesh-10` (10), `-10b` (15) and `-10c` (11), and they cover 137
distinct keyword strings. That single fact governs everything below.

---

## 0. The two links that must appear in every post (user requirement)

The user has asked twice, and the second time as a hard requirement, that every
Ganesh post carry the guide's **YouTube walkthrough** and the **Instagram
profile**. Paste this block **verbatim**, immediately before `## Sources`:

```markdown
## Watch the page get built

Ninety seconds, start to finish — the aarti going round, the five offerings, and the box at the end where they write a line back to you: [Ganesh Chaturthi Wishes Online — Full Walkthrough](https://www.youtube.com/watch?v=mpWiv5T59QY). More page walkthroughs on Instagram: [@subhsandesh_official](https://www.instagram.com/subhsandesh_official).
```

Two things about it that matter:

- **It is not a research source and does not consume a source slot.**
  `FIRST_PARTY` in `scripts/verify-batch.mjs` (added 2026-09-10) exempts these
  two URLs from the URL and domain caps. Do not list them in
  `batchMeta.sources`, and do not count them toward your 4–6 sources.
- **The Instagram link is the brand profile, not a Ganesh reel.** All 25 wave-1/2
  captions and the profile's GraphQL payload were checked on 2026-09-09: no
  Ganesh reel exists. Describe it as the profile, which is what the wording above
  does. Do not promise a Ganesh video on Instagram.

**It costs 46 words by plain split. Budget for it — see §2.**

---

## 1. First-party data (Phase 0)

`content/facts.md` was regenerated **2026-09-09** and is one day old.
`npm run facts` is blocked by this machine's command classifier today, so it was
**not** re-run — which is also the safer outcome: regenerating it on 2026-09-09
re-dated every line and invalidated 133 `factsUsed` entries across the 25 posts
already written. Quote the file as it stands.

`batchMeta.factsUsed` entries must be **byte-verbatim** lines from `facts.md`.
The verifier string-matches them; a paraphrase, a prefix like "(not in
facts.md)", or a re-typed number all fail.

### The festival lead-time dataset — two disclosures are MANDATORY

`facts.md` carries a lead-time measurement under `## Festival lead time`. If you
cite any of it, **both** of these must appear in body prose (not only in the
audit report):

1. It measures **Raksha Bandhan, not Ganesh Chaturthi** — a different festival,
   and a one-day one against Ganesh Chaturthi's ten.
2. **n = 89 is small.** No per-template, per-region or per-language rate may be
   derived from it.

### Two traps

- **Do not use the Holi collection for lead time.** n=9 and 100% "after the
  festival" is a launch artefact: Holi 2026 fell before the platform had pages.
- **`pageviews` is not a page type** and belongs in no denominator. The real
  denominator is 3,894 pages across 15 page types.
- There is **no Ganesh Chaturthi page-creation data at all** — the template went
  live 2026-09-10, four days before the festival. Say so where relevant rather
  than implying a Ganesh number exists.

---

## 2. Word band — the plain split is authoritative

`scripts/verify-batch.mjs` measures the body with a **plain whitespace split**.
`wordCount()` in `app/lib/batches.ts` strips markdown punctuation and reads
**20–50 words higher**. Trusting `wordCount()` once already nearly cost three
posts real content.

Measure like this and nothing else:

```bash
python3 -c "import json,sys;print(len(json.load(open(sys.argv[1]))['article']['contentMarkdown'].split()))" <file>
```

**Target 1,650–1,760 by plain split, including the §0 social block.** The band is
1,500–1,800; do not write to the ceiling. Wave 3's posts all landed 1,769–1,800
with no headroom, and adding the social block afterwards pushed **24 of 25** over
the band. Leave the headroom this time.

FAQs live in `article.faqs` only — **never** in `contentMarkdown` — and do not
count toward the body band.

---

## 3. The cannibalisation gate (BLOCKING — read before drafting)

With 36 live siblings this is the highest risk in the batch. Three of wave 3's
fourteen keywords were correctly **aborted** here, and each abort produced a more
useful report than a forced post would have.

Your `ASSIGNMENTS.json` entry names the **sibling to gate against**. Before
drafting:

1. Pull the top 10 organic results for your keyword and for that sibling's
   keyword.
2. Count **shared results** — same domain *and* the same article identity.
   Exclude `pinterest.com` and `youtube.com`: a shared *publisher* ranking a
   different asset is a false merge (the "Spotify precedent").
3. **3 or more shared results = one keyword.** Abort, and write the research
   brief explaining it. Do not write a thinner second post on the same SERP.
4. At exactly 2, it is a judgment call — corroborate on a second engine and say
   in the brief which way you went and why.

**Second, independent abort condition — substantive duplication.** A clean SERP
gate is *not* sufficient. If a live sibling already owns the lane using the same
documents and the same first-party numbers, your post is a duplicate whatever
the SERP says. Read the sibling's JSON before you draft.

An abort is a **successful outcome**. Write
`research/<slug>.md` with the evidence and report it; write no blog JSON.

---

## 4. Sources — the space is saturated

Across the 36 existing posts: 178 distinct URLs, 97 domains. `USED-SOURCES.md`
in this directory is the ledger and the verifier reads its closed section.

**Domains already at or past the cap of 3 posts — treat as closed:**
`pmc.ncbi.nlm.nih.gov` (7), `en.wikipedia.org` (6), `arxiv.org` (5),
`nature.com` (4), `archive.org`, `pib.gov.in`, `aclanthology.org`,
`frontiersin.org`, `journals.plos.org`, `dsal.uchicago.edu` (3 each).

`drikpanchang.com` sits in 18 posts under the **date/festival-reference
exemption** — that is legal for the festival date and muhurat only, and you must
mark it as such in the source entry for the exemption to apply.

So: 4–6 sources, **at least 2 genuinely about your subject**, of which **at least
1 peer-reviewed and open-access**, at most 1 generic context statistic, Wikipedia
0–2 for disambiguation only and never counted as research. Search the
**phenomenon**, not the keyword. Fetch every source and verify it says what you
claim; if only the abstract is readable, cite only the abstract and record that
the full text was not read.

**Never cite a competitor** — see `references/competitors.md`.

### A recorded tool limitation

The `WebSearch` tool is **US-locale only** — there is no `gl=in`. Every wave-3
post records this in its audit. Do the same: an India-intent keyword's real SERP
may differ from what you measured, and that belongs in the audit, not hidden.

---

## 5. Internal links, category, templates

- **`/happy-ganesh-chaturthi` is mandatory in the body** (`verify.config.json`).
  It went live 2026-09-10 — it is a real page, not a 404.
- **Write internal links as absolute URLs**: `https://subhsandesh.in/...`. The
  verifier's relative-link regex is `\]\((\/[a-z0-9-]+)\)` and **cannot match a
  two-segment path**, so `](/guides/happy-ganesh-chaturthi)` is invisible to it.
  This already caused one silent miss.
- `https://subhsandesh.in/guides/happy-ganesh-chaturthi` is the written build
  guide — link it as a **body reference** where a reader wants the detail.
- `batchMeta.templateUrls`: **`/happy-ganesh-chaturthi` only.** Never
  `/templates` (the gallery index — it resolves to no Strapi Template row and was
  half of the studio's "⚠ 2 missing"), and never a `/guides/...` path (no
  template corresponds to a guide page).
- `batchMeta.categorySlug`: **`indian-festivals`**.
- Only use URLs that exist in `TEMPLATE_LINKS` in `app/lib/prompt.ts`.
- 2–4 internal links, descriptive anchor text, placed **after** the section that
  establishes why the reader would want them — never in the opening paragraph.

`structuredData` is **additive only**. The site already builds `BlogPosting`,
`FAQPage`, `BreadcrumbList`, `Organization`, `WebSite` and `Person` and silently
drops repeats — see `RENDERER_BUILT_TYPES` in `app/lib/pageGraph.ts:37-47`. Its
real job is an `ItemList` for a ranked body list plus an `@id`-matched enrichment
block carrying `citation`, which is the only route by which `batchMeta.sources`
reaches the published page.

---

## 6. Audit invariants

Copy checklist item strings **verbatim** from
`references/publish-checklist.md` (50 items). Then assert, in this order:

- `passed ∩ failed = ∅`
- `|passed| + |failed| == 50`

A file that lists the same item in both is untrustworthy and hides real failures
behind a green count. Flag failures; never silently fix or drop one.

---

## 7. Housekeeping

- Any temporary file **must** be named `<slug>-<purpose>.md`. The session
  scratchpad is *shared* across concurrent agents — three agents once wrote
  `scratchpad/body.md` and overwrote each other mid-draft.
- Write your files **early and incrementally**. A spend limit killed every agent
  mid-batch on 2026-09-09; the ones that had already written to disk survived.
- Your body must contain a marker word unique to your own keyword, so a
  crossed-over draft is detectable.
- Report when your files are final. Files are staged per-agent-report, not by
  directory sweep — staging the whole directory mid-flight swept intermediate
  states of in-flight files into an earlier commit.

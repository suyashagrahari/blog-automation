# Wave 5 notes — posts 87–95 of `2026-09-15-virtual-gift-30`

Final: **95 posts, 167,171 words, `verify-batch.mjs` → ✔ no problems, zero cap
violations.** Wave 5 added 9 posts and aborted none — the first wave since wave 2 with
no aborts, because the ground was genuinely unclaimed.

---

## 1. The ground: family and friends, on real India SERPs

Waves 3–4 established that `how to surprise <person>` is the only blog-shaped cluster on
this axis. Wave 5 extended it to **family and friend recipients** — sister, brother,
parents, mother, friends — which 86 partner-facing posts had barely touched. All 9 rows
passed Gate 2 with 4–8 of 10 editorial results, and **0 of 12 candidates were rejected**
by the dedupe/overlap rules.

**These are genuine India SERPs.** DuckDuckGo recovered (`kl=in-en`), so wave 5 did not
need wave 4's US-served Brave and carries no such caveat. Firecrawl was tried first and
returned HTTP 402 (no credits).

**The register problem was the craft problem.** Nearly every convention in the other 86
posts is wrong for a sibling or a parent: no midnight declarations, nothing that reads
as courtship. Two agents independently landed on the same insight — affection between
siblings usually travels **disguised as a joke**, which is why the long-under-used joke
templates (`/court-of-love`, `/legal-notice`, linked twice each in 86 posts) finally
found a right home here.

## 2. ORCHESTRATOR ERROR — the brief cited a stale `facts.md`

`content/facts.md` was regenerated **2026-09-24**. `BRIEF-WAVE5.md` §6 said 2026-09-15
and listed "under-used" figures that **no longer existed in the file**. Five agents were
drafting against it.

The numbers had moved materially:

| | superseded (09-15) | current (09-24) |
|---|---|---|
| pages created | 4,357 / 16 types | **5,199 / 21 types** |
| #1 page type | /love-gf 25.8% | **/apology-dashboard 26.9%** |
| creators | 3,377 @ 1.29 | **3,843 @ 1.35** |
| views | 49,968 @ 11.5 | **57,456 @ 11.1** |
| password-protected | 40.6% | **38.5%** |
| median first-save→last-edit | 6.2 h | **2.5 h** |

**Three agents caught it independently before my correction reached them**, by reading
`facts.md` directly rather than trusting the brief. §6 was rewritten with a vintage
table and all five in-flight agents were messaged.

**The correction changed the work, not just the citations.** The midnight agent had
written "build it the previous evening" on the 6.2-hour figure; on the 2.5-hour figure
it rewrote the heading to **"Start it by 21:00, not at 23:50"**. The husband-birthday
post's whole thesis rests on the corrected pair (apology dashboard 26.9% against
partner-birthday pages at 9.8%) — an argument unavailable on the old numbers.

**Lesson: a brief that restates `facts.md` will go stale. Tell agents to read the file
and cite its own dated lines, never to trust figures quoted in a brief.**

## 3. BATCH-WIDE — the regeneration broke the verifier on 86 honest posts

Discovered when an agent reported a verifier line against a wave-1 post.

`verify-batch.mjs` checks every `batchMeta.factsUsed` string **verbatim against the
current `facts.md`**. The 2026-09-24 regeneration overwrote the auto-generated block, so
**721 fact references across all 86 waves-1–4 posts** stopped resolving.

Those posts are **not wrong.** Each cites a measurement correctly labelled
"measured 2026-09-15". The data was true when measured; the file moved underneath it.

**Rewriting them would have been worse than the problem** — several arguments rest on
what was true then, most obviously that `/love-gf` was the most-created template, which
the new measurement contradicts. Rewriting would have destroyed correct, dated claims.

**Fix:** the 17 distinct superseded lines (underpinning all 721 references) are preserved
as a labelled archive in `facts.md` **below the manual marker**. Verified at the source:
`scripts/collect-facts.mjs` line 270 slices everything after that marker and re-emits it,
so **the archive survives future `npm run facts` runs**. All 721 findings cleared; no
post was edited.

**This will recur every time the facts are regenerated.** The archive pattern handles it
and the reasoning is documented inside `facts.md` itself.

## 4. ORCHESTRATOR ERROR — family rows filed under a romance category

`WAVE5-PLAN.json` assigned `digital-gifts-romance` to every row, including four whose
recipient is family. Filing a sibling or parent post under a romance hub is the exact
register error this wave exists to avoid — the same error the briefs spend paragraphs
warning against in the prose.

Two agents handled it **correctly and differently**: the sister agent swapped to
`family-and-continuity` and flagged it loudly; the parents agent reached the same
conclusion but **kept the assigned value and reported it** rather than deviating. Both
were right — one faced a clear violation, the other a judgement call.

All four family rows now carry `family-and-continuity` (an established live category —
wave 1 used it). The written parents post was corrected on disk. **Friend rows were left
under `digital-gifts-romance`**: eight published friend posts already sit there, and
splitting the cluster by halves mid-wave would be worse than the inconsistency. Worth
revisiting batch-wide.

## 5. Sibling reading caught what no metric could — again

- **Two posts written hours apart converged on the same joke.** The sister post shipped
  as *"…Without Making It Weird"*; the brother agent's draft H1 was that identical
  construction, plus a near-twin FAQ. It changed to *"…Without Him Screenshotting It"*.
  No overlap metric would ever have seen this.
- The friend-birthday agent proved its own lane with evidence: **8 of 9 editorial results
  carry "best friend" or "bestie" in the URL or H1**, leaving the ordinary-friend reader
  genuinely unserved.

That is now the fourth, fifth and sixth collision this run found by **reading siblings in
full**, never by URL-overlap screening. The standing rule holds: **grep `blogs/` for your
subject, not your keyword.**

## 6. Posts that argue against their own product

Three wave-5 posts do it, which is the strongest citation signal available:
- the friend-birthday post uses a **gift-gap meta-analysis (153 effects, 114 studies)**
  showing the giver/recipient gap is worst for sentimental between-friends gifts — and
  ranks an in-person option first, with two of four recommendations involving no page;
- the parents post says a link needing an account or a password is **a worse gift than a
  phone call**, and has a section headed "When you should just call instead";
- the mother post argues that **relieving her of a recurring task beats handing her an
  object**.

## 7. Negative findings recorded rather than padded around

- **Adult birthday celebration is essentially unstudied** — Crossref returns Festschrift
  volumes and Harold Pinter; `birthday ritual significance` surfaces Lister 1907 and
  Einstein 1929. The two usable ritual papers study *children*, and the bodies say so.
- **No scholarly literature on the Indian midnight-birthday convention** exists.
- **No Indian sibling-ritual source is reachable** — Crossref/OpenAlex/DOAJ return only
  blocked-publisher book chapters. India specificity there rests on first-party data and
  domestic detail, explicitly labelled as such, not on citation.
- One agent **dropped a source it could not verify** (J-STAGE 500, no Crossref abstract)
  rather than cite it blind.

**The Friendship Day date was verified four ways** — India's is the **first Sunday of
August** (2 Aug 2026, 1 Aug 2027, 6 Aug 2028), distinct from the UN's 30 July. The agent
caught a published error: nationaltoday.com states "August 3, 2026", which is a Monday.
The post is evergreen: the rule plus three worked years, no "this year".

## 8. Sources and caps

**401 distinct URLs across 319 domains, zero violations** at 95 posts. Wave 5 added ~35
new domains. **19 domains are now at the cap of 3.**

Five cap near-misses occurred mid-wave and **every one resolved itself**, because agents
reported rather than acted. The First Monday URL sat at exactly 2 with two different
findings cited from the same abstract — legal, and confirmed at quiescence. Enforcing
caps only when nothing is moving remains correct: the one time an orchestrator acted on
a mid-write count (wave 1) it stripped a legitimate source from a finished post.

**Route that works: Crossref → Unpaywall → OA landing page.** OpenAlex recovered but
rate-limits under load (33–40s backoff); Unpaywall timed out for one agent and was fine
for others. PDFs do not parse here — every wave-5 source is an abstract-and-metadata
read, recorded in each post.

## 9. Open

- **95 posts are drafts on disk. Nothing from any wave is published.** They reach Strapi
  only via the deployment → Batches tab → review → tick → publish.
- **`facts.md` `## Pricing` is still EMPTY.** ~30 of 95 posts now carry a sentence
  declining to quote a cost. A wave-4 agent confirmed no price string is in the served
  `/templates` HTML, so there is nothing to scrape — it needs a human. **Two lines closes
  ~30 posts' worth of hedging.**
- `apology website for girlfriend` still sits at **#7** — page exists, fix is a title and
  heading edit. Cheapest win in the run, untaken across five waves.
- The digital-invitation axis remains a **tool-page** opportunity (wave 3 §2), not a blog
  one.
- `how-to-surprise-someone-at-midnight`'s slug omits "birthday" though its keyword
  contains it — a real exact-match miss, recorded as structural. Renaming would break a
  sibling's cross-link; left deliberately.
- Friend-recipient posts sit under `digital-gifts-romance` (see §4) — a batch-wide
  category review is worth doing, but not by halves.
- No Search Console export — the eleventh run asking. Every volume figure remains `EST`.

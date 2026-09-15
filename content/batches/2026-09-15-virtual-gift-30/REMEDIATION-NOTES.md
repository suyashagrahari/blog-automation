# Batch-level notes — 2026-09-15-virtual-gift-30

Written by the orchestrator during the run. Final state: `verify-batch.mjs` reports
**no problems** across the 26 written posts. This file records what went wrong on the
way there, including two orchestrator errors, because the failure modes are structural
and will recur in the next batch.

---

## 1. Concurrent Phase 3 converges on the same source (STRUCTURAL — will recur)

Six wave-1 agents ran Phase 3 against an empty `blogs/` directory, so none could see
the others' sources. All six independently chose the same paper, **arXiv 2509.16932**.
Against a 2-post URL cap that is a 6-way breach.

Four agents detected it mid-draft by re-reading siblings and substituted different
sources. Final measured state: `arxiv.org` in 3 posts with 3 distinct URLs — at cap,
legal. No central reallocation was needed.

It resolved by luck of timing. Had those four finished closer together, none would
have seen it. **Parallel source selection has no shared state.** The fix is to
serialise Phase 3, give agents a shared claim file, or accept a central reallocation
pass at quiescence. Waves 2+ were launched with an explicit spent-source blocklist in
the prompt, which is a patch, not a fix.

## 2. ORCHESTRATOR ERROR — acting on a cap measurement taken mid-write

I measured `journals.plos.org` in 4 posts and "fixed" it by stripping the source from
`shareable-gift-link-for-couples`, rewriting a section and recording a failure.

**The measurement was wrong.** Two agents were concurrently swapping out of PLOS as I
read their files. It was in 2 posts, never in breach. I reverted: the source, the
cited paragraph, the Sources bullet and the source record are restored, and the false
audit entry is removed. One clause of one sentence is reconstructed (~6 words) because
I had not captured the original tail before overwriting it.

**Rule for next time: enforce caps only at quiescence, never against files that
in-flight agents may still be writing.**

## 3. ORCHESTRATOR ERROR — a bad parser written to 26 files without a dry run

The audit strings in 6 posts were not byte-verbatim against `publish-checklist.md`
(agents had stripped `**bold**` and truncated at line wraps). I wrote a repair script
whose regex greedily swallowed the *following markdown header* into each item, so it
replaced 200 strings with corrupted values like `…Slug is not already taken in Strapi
## Links`, across **all 26 files**. Problems went 27 → 211.

Caught on the re-verify. Rewrote the parser line-by-line, **verified it produced 50
clean items before touching a file**, then repaired all 182 corrupted strings
deterministically. Net result is better than the start: the defect is now fixed in
every post, not just the six originally flagged.

**Rule for next time: dry-run any script that writes to every file in the batch.**
Both errors above were cheap to recover from only because `verify-batch.mjs` exists.

## 4. Verifier default link policy was wrong for this batch

`verify-batch.mjs` defaults to the bouquet-wave rules (`/bouquet-gf` mandatory in
every post). That is wrong here — it would have forced a digital-bouquet link into
`virtual gift for best friend`. Corrected in `verify.config.json`, with the reasoning
recorded in the file.

## 5. Systematic defects patched in the BRIEF mid-run

Three classes were failing repeatedly in early posts. Each was written into `BRIEF.md`
so later agents avoided it rather than needing remediation:

- **§7** audit strings must be byte-verbatim *including* `**bold**` and wrapped lines
- **§8** FAQs must not restate a body heading (Strapi renders them separately, so the
  reader sees the question twice)
- **§9** paragraphs of 2–3 sentences, *including* the opening answer block
- **§10** a measured map of which academic hosts actually fetch from this sandbox

**The single highest-leverage instruction was telling each agent to run
`verify-batch.mjs` on its own slug before finishing.** Every post launched with that
instruction came back clean; the six that needed repair were all launched without it.
Put it in the skill.

## 6. Research tools exhausted mid-batch

WebSearch hit its session cap (200/200) and Firecrawl began returning HTTP 402. The
last several posts could not run Phase 1 as specified and built their gap analysis
from the batch-level SERP measurement in BRIEF §1 plus sibling posts instead. Every
affected post records this in its own audit and research brief rather than implying a
competitor read that did not happen.

**Four posts were therefore not written:** `online-gift-for-girlfriend-new-year`
(agent still running at the time of writing), `online-gift-for-husband-anniversary-free`,
`virtual-christmas-gift-for-girlfriend`, `long-distance-gift-ideas-no-money`.

## 7. Final measured state (26 posts)

| | |
|---|---|
| verifier | **no problems** |
| audit items passed | 1,258 / 1,300 |
| outbound | 119 URLs across **98 distinct domains** |
| domains at cap (3) | arxiv.org, pmc.ncbi.nlm.nih.gov, frontiersin.org, pewresearch.org, gsb.stanford.edu |
| domains over cap | none |

The 42 remaining audit failures are genuine and structural — slugs containing "for",
swap-test admissions, and abstract-only source disclosures. They are recorded, not
hidden, which is the intended outcome.

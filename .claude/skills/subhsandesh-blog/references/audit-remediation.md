# Audit remediation — the fix pass

Phase 6 produces an honest `auditReport`. This phase acts on it, so a post does
not get shipped with fixable weaknesses recorded as if they were facts of life.

**The distinction this whole phase rests on:** a failure is either *fixable* —
more work closes it — or *structural* — the data or the source does not exist
today. Fixable failures get fixed. Structural failures stay in `failed` with a
`why` that says what would close them and when to re-check. Neither category is
ever quietly deleted.

Run this after Phase 7 has written the files, so the remediator edits the real
artifacts rather than a draft in conversation.

---

## Who runs it

Spawn the **`blog-audit-remediator`** subagent, one per blog with a non-empty
`auditReport.failed`. Do not do this pass yourself in the orchestrating context:
the whole value is a reader who did not write the draft and has no attachment to
its phrasing.

Give the subagent only: the blog JSON path, the research brief path, and this
file. It re-reads `content/facts.md` and the checklist itself.

---

## Triage

For each entry in `auditReport.failed`, classify before touching anything:

| Class | Test | Action |
|---|---|---|
| **Fixable — content** | The fix is words the writer controls | Edit `contentMarkdown`, re-run the checklist item, move the string to `passed` |
| **Fixable — sourcing** | A verifiable source plausibly exists and was not found yet | Search, `WebFetch` to verify, cite, move to `passed` |
| **Fixable — data** | The number exists in the database but was not queried | Query it, add to `factsUsed` verbatim, move to `passed` |
| **Structural** | The data does not exist yet, or every source is paywalled | Keep in `failed`. Rewrite `why` to state the trigger that would close it |

A `why` that just restates the checklist item is not a `why`. It must name the
specific blocker and the condition that removes it — "n=106 is too small for a
per-template rate; re-query when the template passes ~500 pages".

---

## Common failures and their actual fixes

**Fewer than 3 first-party facts, or fewer than 2 in the opening.**
Re-read `content/facts.md` in full — the usual cause is a writer who used the
three most obvious lines and never scrolled. If the file genuinely lacks
keyword-relevant facts, this is structural, and Phase 0 should have blocked it.

**A first-party number is platform-wide but reads as segment-specific.**
Do not delete the number — it is the moat. Add the caveat in the body, in the
sentence nearest the claim, and say what sample size would let you drop it.

**Fewer than 3–6 verified outbound links.**
Widen the source hierarchy before giving up: government statistics, then
peer-reviewed work, then industry bodies, then non-competitor original research.
A paywalled study is not a dead end — the publishing university's news office
usually restates the finding in citable prose. If the abstract is elided
everywhere, drop the claim. **Never cite from memory to clear this item.**

**FAQs duplicated inside `contentMarkdown`.**
Delete the body section; keep `article.faqs` and the FAQPage JSON-LD. Then check
the word count against the 1,500 floor — removing ~400 words of FAQ usually
breaks it. Rebuild the length with substance, and the best source is the FAQ
list itself: promote the two or three questions that deserve a fuller answer into
proper H2 sections with numbers attached, and drop them from the FAQ array.

**Under the word floor.**
Never pad. Legitimate ways to add: a fan-out sub-query that has no H2 yet, a
verified source not yet used, a first-party fact left on the table, or a
genuine downside not yet named. If none of those exist, the keyword was too thin
and that belongs in `honestAssessment`.

**Schema or targeting mismatches.**
Re-fetch the live Strapi category list and `TEMPLATE_LINKS` rather than trusting
the draft. Re-check the slug is still free — another batch may have taken it.

---

## Definition of done

1. Every fixable failure is actually fixed in the file, not described as fixed.
2. Every remaining failure has a `why` naming the blocker and the re-check trigger.
3. The full `references/publish-checklist.md` has been re-run against the edited
   article — fixing one item frequently breaks another, and word count is the
   usual casualty.
4. `honestAssessment` is rewritten to reflect the post as it now stands,
   including what the fix pass could not close.
5. The batch JSON still validates against `references/article-json-schema.md`.

Report: what was fixed, what was left and why, and the before/after word count.

---

## What this pass must not do

- Delete a failed item without either fixing it or rewriting its `why`.
- Pad to reach the word floor.
- Cite a source it has not fetched.
- Soften `honestAssessment` because the fixes felt productive. If the post still
  will not outperform the top five, it must still say so.

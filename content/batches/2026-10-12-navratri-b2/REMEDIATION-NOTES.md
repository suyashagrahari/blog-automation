# Phase 8 — remediation policy (BINDING for every remediator) and cross-post notes

## Policy
1. **No WebSearch, no browser.** New sources ARE allowed via `findpapers.mjs` (Crossref + Europe PMC) and `ctx_fetch_and_index`; fetch and verify every one. A paper already cited in `2026-10-12-navratri-partner-b1` is BANNED (capcheck now matches by PMC id / DOI across europepmc and pmc hosts). Sourcing failures you cannot close stay in `failed` with a precise blocker and re-check trigger.
2. **Remove every sibling `/blog/<slug>` link from the body.** Batch policy changed mid-run: body internal links must be TEMPLATE_LINKS URLs only (2–4). Name the sibling topic in prose if the sentence needs it.
3. **Paragraph rule:** prose paragraphs must be 2–3 sentences. Copyable wish/caption/quote lines belong in a bulleted list or a blockquote list, not as one-line prose paragraphs. Merge or split prose paragraphs to fit. Read how `scripts/verify-batch.mjs` and publish-checklist.md define it before deciding.
4. Body stays 1,500–1,800 words (plain whitespace split, FAQs excluded). Fixes usually cost words; cut padding to stay under 1,800.
5. Do not change the slug, category, the /dandiya-partner link, or `factsUsed` strings (byte-verbatim).
6. After editing, re-run the WHOLE publish checklist, `node scripts/verify-batch.mjs content/batches/2026-10-12-navratri-b2` and `node content/batches/2026-10-12-navratri-b2/capcheck.mjs`, then rewrite `honestAssessment`. passed ∩ failed = ∅; |passed|+|failed| = checklist length; item strings verbatim.
8. **Scratch files MUST be named `<your-slug>-<purpose>.*`** (e.g. `navratri-status-in-hindi-body.md`). Never write a generic `body.md`/`draft.md`: the scratchpad is shared and another agent's body has already landed in a sibling's file once. Before writing your JSON, confirm the body's H1 matches your slug's keyword.
7. Edit only your own blog JSON (and its research brief if needed).

## Cross-post notes

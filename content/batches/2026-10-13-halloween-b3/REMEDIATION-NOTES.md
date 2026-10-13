# Phase 8 — remediation policy (BINDING for every remediator) and cross-post notes

## Policy
1. **No WebSearch, no browser.** New sources ARE allowed via `findpapers.mjs` (Crossref + Europe PMC) and `ctx_fetch_and_index`; fetch and verify every one. Papers are capped per batch by PMC id / DOI (capcheck). Sourcing failures you cannot close stay in `failed` with a precise blocker and re-check trigger.
2. **Remove every sibling `/blog/<slug>` link from the body.** Batch policy changed mid-run: body internal links must be TEMPLATE_LINKS URLs only (2–4). Name the sibling topic in prose if the sentence needs it.
3. **Paragraph rule:** prose paragraphs must be 2–3 sentences. Copyable wish/caption/quote lines belong in a bulleted list or a blockquote list, not as one-line prose paragraphs. Merge or split prose paragraphs to fit. Read how `scripts/verify-batch.mjs` and publish-checklist.md define it before deciding.
4. Body stays 1,500–1,800 words (plain whitespace split, FAQs excluded). Fixes usually cost words; cut padding to stay under 1,800.
5. Do not change the slug, category, the /dandiya-partner link, or `factsUsed` strings (byte-verbatim).
6. After editing, re-run the WHOLE publish checklist, `node scripts/verify-batch.mjs content/batches/2026-10-13-halloween-b3` and `node content/batches/2026-10-13-halloween-b3/capcheck.mjs`, then rewrite `honestAssessment`. passed ∩ failed = ∅; |passed|+|failed| = checklist length; item strings verbatim.
8. **Scratch files MUST be named `<your-slug>-<purpose>.*`** (e.g. `navratri-status-in-hindi-body.md`). Never write a generic `body.md`/`draft.md`: the scratchpad is shared and another agent's body has already landed in a sibling's file once. Before writing your JSON, confirm the body's H1 matches your slug's keyword.
7. Edit only your own blog JSON (and its research brief if needed).

## Cross-post notes
- halloween-wishes-for-daughter cites a paper from the journal *Cannabis* (only its parent–student texting counts). Accurate and disclosed, but may look odd to readers — human review.
- b3 couple posts (dress-ups, simple, dog, baby, scary, unique, movie) were written in parallel — run a pair-name overlap check across them before commit.
- JOURNAL-LEVEL CAP (BRIEF §5 "domain or journal ≤3") is NOT enforced by capcheck (it counts hosts; europepmc is exempt). Measured: b1 PLOS ONE 8 / MDPI 9 / Frontiers 4; b2 MDPI 7 / PLOS ONE 4 / BMC Psych 4; b3 so far PLOS ONE 5 / MDPI 4. All are distinct papers in megajournals, not repeated sources. Reported to user as a policy question rather than remediated.

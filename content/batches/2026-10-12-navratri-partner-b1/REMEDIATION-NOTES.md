# Phase 8 — remediation policy (BINDING for every remediator) and cross-post notes

## Policy
1. **No WebSearch, no browser.** The session's search budget is nearly spent. Do not add new sources unless already fetched and recorded in the post's research brief. Sourcing failures you cannot close stay in `failed` with a precise blocker and re-check trigger.
2. **Remove every sibling `/blog/<slug>` link from the body.** Batch policy changed mid-run: body internal links must be TEMPLATE_LINKS URLs only (2–4). Name the sibling topic in prose if the sentence needs it.
3. **Paragraph rule:** prose paragraphs must be 2–3 sentences. Copyable wish/caption/quote lines belong in a bulleted list or a blockquote list, not as one-line prose paragraphs. Merge or split prose paragraphs to fit. Read how `scripts/verify-batch.mjs` and publish-checklist.md define it before deciding.
4. Body stays 1,500–1,800 words (plain whitespace split, FAQs excluded). Fixes usually cost words; cut padding to stay under 1,800.
5. Do not change the slug, category, the /dandiya-partner link, or `factsUsed` strings (byte-verbatim).
6. After editing, re-run the WHOLE publish checklist, `node scripts/verify-batch.mjs content/batches/2026-10-12-navratri-partner-b1` and `node content/batches/2026-10-12-navratri-partner-b1/capcheck.mjs`, then rewrite `honestAssessment`. passed ∩ failed = ∅; |passed|+|failed| = checklist length; item strings verbatim.
8. **Scratch files MUST be named `<your-slug>-<purpose>.*`** (e.g. `navratri-status-in-hindi-body.md`). Never write a generic `body.md`/`draft.md`: the scratchpad is shared and another agent's body has already landed in a sibling's file once. Before writing your JSON, confirm the body's H1 matches your slug's keyword.
7. Edit only your own blog JSON (and its research brief if needed).

## Cross-post notes

- navratri-wishes-for-love: puts Mahagauri on 18 Oct 2026; Drik Panchang (New Delhi) gives Ashtami 19 Oct (shared with Navami). Fix the date or drop dates from the night list. (reported by husband writer)
- navratri-wishes-for-wife vs navratri-wishes-for-husband: near-identical six-situation layout; some table wording shared. Differentiate table wording.
- garba-partner-meaning: links 3 sibling /blog/ slugs; garba-captions-for-instagram links /blog/garba-partner-captions-for-instagram; navratri-wishes-for-love links 6 siblings. Policy changed mid-batch: remove sibling /blog/ links that are not TEMPLATE_LINKS (or keep only if sibling ships in the same publish).
- garba-partner-meaning-in-hindi links /blog/garba-partner-meaning (same).
- Taylor & Francis is in ~5 posts across tandfonline/taylorfrancis/doi 10.1080 hosts (Chavda 2019 twice via doi.org). Reduce to <=3 posts at remediation; Sage likewise check.
- why-is-dandiya-played-during-navratri cites Falcone 2016 (tandfonline, abstract only) — first candidate to drop when reducing Taylor & Francis to <=3 posts.
- Batch-wide: any post that prints 'Dussehra 20 Oct' as all-India needs the Bengal/Mysuru 21 Oct caveat (dussehra-wishes found it). Grep at remediation.
- garba-partner-app-finder names 3 real Play Store apps and states GarbaSathi data-label vs description contradiction. HUMAN REVIEW before publish (factual claim about a named third party); re-check listings on publish day — store data dates fast.
- navratri-invitation-message metaTitle "Time, Place and Reply 80 Omit" reads awkwardly — orchestrator rewords in final pass.

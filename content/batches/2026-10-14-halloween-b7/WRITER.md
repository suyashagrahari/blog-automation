# Writer instructions — Halloween Batch 7 (read fully before starting)

You write ONE SubhSandesh blog post for the keyword row given in your task prompt.

1. Read, in this order:
   - `.claude/skills/blog-optimisation/SKILL.md` and every reference file it names
   - `content/batches/2026-10-14-halloween-b7/BRIEF.md` (BINDING; overrides the skill where they conflict)
   - `content/batches/2026-10-14-halloween-b7/template-spec.md`
   - `content/facts.md`
   - your row in `content/batches/2026-10-14-halloween-b7/PLAN.json`
   - Use the slug exactly as PLAN.json gives it.
2. Run skill Phases 0–7 for your row only. Phase 8 is run later by the orchestrator. Do not spawn agents.
3. **BOTH template links are mandatory** in the body, with descriptive anchors, placed after the section that earns them:
   - https://subhsandesh.in/happy-halloween
   - https://subhsandesh.in/happy-halloween-premium

   Also add one `oneOfLinks` alternative. `batchMeta.templateUrls` = [happy-halloween, happy-halloween-premium].
4. Sibling posts are named in your task prompt.
   - Read their H2s and FAQs.
   - Reuse no line, no list item, and no idea from them.
   - Pick a different sub-intent if your SERP shares 4+ URLs with one of them, and record the overlap count.
5. Before finishing, run both from the repo root:
   - `node content/batches/2026-10-14-halloween-b7/capcheck.mjs`
   - `node scripts/verify-batch.mjs content/batches/2026-10-14-halloween-b7`

   Fix your own lines until both are clean. Ignore sibling slugs.
6. Report back in under 150 words, in the format of BRIEF §8.

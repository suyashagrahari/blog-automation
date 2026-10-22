# Writer instructions — Diwali 2027 Batch 1 (read fully before starting)

You write ONE SubhSandesh blog post for the keyword row given in your task prompt.

1. Read, in this order:
   - `.claude/skills/blog-optimisation/SKILL.md` and every reference file it names
   - `content/batches/2026-10-22-diwali-b1/BRIEF.md` (BINDING; overrides the skill where they conflict)
   - `content/batches/2026-10-22-diwali-b1/template-spec.md`
   - `content/facts.md`
   - your row in `content/batches/2026-10-22-diwali-b1/PLAN.json` (use the slug exactly as given)
2. Run skill Phases 0–7 for your row only. Phase 8 is run later by the orchestrator. Do not spawn agents.
3. **The Diwali template link is mandatory**, with a descriptive anchor, placed after the section that earns it:
   - https://subhsandesh.in/happy-diwali
   Mention SubhSandesh by name. Add exactly one `oneOfLinks` alternative (`verify.config.json`) that fits.
   `batchMeta.templateUrls` = [happy-diwali, your alternative]. `batchMeta.categorySlug` = `indian-festivals`.
4. Read your row's `siblings` and the 8 `oldDiwaliPosts` (H2s + FAQs). Reuse no line, no list item, no idea.
5. Before finishing, run both from the repo root and fix your own lines until clean (ignore sibling slugs):
   - `node content/batches/2026-10-22-diwali-b1/capcheck.mjs`
   - `node scripts/verify-batch.mjs content/batches/2026-10-22-diwali-b1`
6. Report back in under 150 words, in the format of BRIEF §8.

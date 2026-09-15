#!/usr/bin/env node
/**
 * rebuild-batch-json.mjs — regenerate a batch's batch.json from the blog files
 * actually on disk.
 *
 * Why this exists: `verify-batch.mjs` checks that batch.json's `blogs` list
 * matches the files in blogs/. When a batch is written in two waves — as
 * 2026-09-15-virtual-gift-30 was, 30 posts then 30 more into the same directory
 * — batch.json still lists only the first wave, and the verifier reports a
 * batch-wide failure that belongs to no individual post.
 *
 * Every one of the thirty wave-2 agents noticed this and every one correctly
 * refused to fix it, because batch.json is shared state and editing it while
 * other agents are writing is how you lose someone's entry. So it is the
 * orchestrator's job, run once, at quiescence.
 *
 *   node scripts/rebuild-batch-json.mjs content/batches/<id> [--dry-run]
 *
 * --dry-run prints what would change and writes nothing. Use it first: a script
 * that rewrites a shared manifest across sixty posts is exactly the kind that
 * went wrong in wave 1 when it was run without one.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const dir = process.argv[2];
const dry = process.argv.includes("--dry-run");
if (!dir) { console.error("usage: rebuild-batch-json.mjs content/batches/<id> [--dry-run]"); process.exit(2); }

const batchFile = path.join(dir, "batch.json");
if (!existsSync(batchFile)) { console.error(`no batch.json at ${batchFile}`); process.exit(2); }

const batch = JSON.parse(readFileSync(batchFile, "utf8"));
const blogDir = path.join(dir, "blogs");
const files = readdirSync(blogDir).filter((f) => f.endsWith(".json")).sort();

const entries = [];
const problems = [];
for (const f of files) {
  const slug = f.replace(/\.json$/, "");
  let j;
  try { j = JSON.parse(readFileSync(path.join(blogDir, f), "utf8")); }
  catch (e) { problems.push(`${f}: unparseable (${e.message})`); continue; }

  const a = j.article || {};
  const bm = j.batchMeta || {};
  if (a.slug && a.slug !== slug) problems.push(`${f}: article.slug "${a.slug}" != filename`);
  if (!bm.keyword) problems.push(`${f}: no batchMeta.keyword`);

  const words = String(a.contentMarkdown || "").split(/\s+/).filter(Boolean).length;
  // `blogs` MUST be an array of slug STRINGS, sorted. verify-batch.mjs does
  // `[...batch.blogs].sort()` and compares it to the sorted filenames on disk;
  // an array of objects stringifies to "[object Object]" and fails every time.
  // The richer per-post numbers below are only for the run report, never written.
  entries.push({
    slug,
    keyword: bm.keyword || null,
    words,
    faqs: (a.faqs || []).length,
    auditPassed: (bm.auditReport && bm.auditReport.passed || []).length,
    auditFailed: (bm.auditReport && bm.auditReport.failed || []).length,
  });
}

const before = (batch.blogs || []).length;
batch.blogs = entries.map((e) => e.slug).sort();
batch.keywords = entries.map((e) => e.keyword).filter(Boolean);
batch.updatedAt = new Date().toISOString();

console.log(`${dir}`);
console.log(`  blogs listed before: ${before}`);
console.log(`  blog files on disk : ${files.length}`);
console.log(`  blogs listed after : ${entries.length}`);
console.log(`  total words        : ${entries.reduce((s, e) => s + e.words, 0).toLocaleString()}`);
console.log(`  audit passed/failed: ${entries.reduce((s, e) => s + e.auditPassed, 0)} / ${entries.reduce((s, e) => s + e.auditFailed, 0)}`);
if (problems.length) { console.log(`\n  PROBLEMS (${problems.length}):`); problems.forEach((p) => console.log(`   - ${p}`)); }

if (dry) { console.log("\n  --dry-run: nothing written"); process.exit(problems.length ? 1 : 0); }
writeFileSync(batchFile, JSON.stringify(batch, null, 2) + "\n");
console.log("\n  batch.json rewritten");

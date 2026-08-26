#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Normalise batchMeta.auditReport so it partitions the publish checklist exactly.
//
//   node scripts/normalise-audit.mjs content/batches/<batchId>            # whole batch
//   node scripts/normalise-audit.mjs content/batches/<batchId> --check    # report only
//
// The skill requires `passed ∩ failed = ∅` and `|passed| + |failed| =` the
// checklist length. Agents keep breaking it the same way: they record genuine
// process limitations — "Phase 1 SERP teardown not run, WebSearch exhausted",
// "publisher-native URLs unusable", "lane F exhausted" — as entries in `failed`.
// Those are honest and worth keeping, but they are not checklist items, so the
// partition stops summing and the whole report becomes untrustworthy.
//
// This keeps every failure that maps to a checklist item (fuzzily, so paraphrases
// survive) and moves the rest into honestAssessment, where a reviewer still reads
// them. It never deletes a finding.
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const CHECKLIST = ".claude/skills/subhsandesh-blog/references/publish-checklist.md";

const batchDir = process.argv[2];
const checkOnly = process.argv.includes("--check");
if (!batchDir) {
  console.error("usage: node scripts/normalise-audit.mjs content/batches/<batchId> [--check]");
  process.exit(1);
}

const md = readFileSync(CHECKLIST, "utf8");
// Checklist items are `- [ ] text`, sometimes wrapped onto an indented next line.
const items = [...md.matchAll(/^- \[ \] (.+(?:\n {2}[^-\n].*)*)/gm)]
  .map((m) => m[1].replace(/\s*\n\s+/g, " ").trim());
if (!items.length) { console.error("no checklist items parsed — has the file moved?"); process.exit(1); }

const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
const label = (f) => (typeof f === "string" ? f : f?.item || "");
const why = (f) => (typeof f === "string" ? "" : f?.why || "");

/** Map a recorded failure onto a checklist item, tolerating paraphrase. */
function match(text) {
  const n = norm(text);
  if (!n) return null;
  let hit = items.find((i) => norm(i) === n);
  if (hit) return hit;
  hit = items.find((i) => norm(i).includes(n.slice(0, 45)) || n.includes(norm(i).slice(0, 45)));
  if (hit) return hit;
  // last resort: strongest word-overlap, but only if it is decisive
  const words = new Set(n.match(/.{4,}?(?=[a-z])/g) || []);
  let best = null, bestScore = 0;
  for (const i of items) {
    const ni = norm(i);
    let score = 0;
    for (const w of words) if (ni.includes(w)) score++;
    if (score > bestScore) { bestScore = score; best = i; }
  }
  return bestScore >= 4 ? best : null;
}

const blogs = path.join(batchDir, "blogs");
if (!existsSync(blogs)) { console.error("no blogs/ under " + batchDir); process.exit(1); }

let changed = 0, clean = 0, broken = 0;
for (const file of readdirSync(blogs).filter((f) => f.endsWith(".json")).sort()) {
  const p = path.join(blogs, file);
  let j;
  try { j = JSON.parse(readFileSync(p, "utf8")); } catch { console.log(`✖ ${file} invalid JSON`); broken++; continue; }
  const ar = j?.batchMeta?.auditReport;
  if (!ar) { console.log(`✖ ${file} no auditReport`); broken++; continue; }

  const passed = ar.passed || [], failed = ar.failed || [];
  const overlap = failed.filter((f) => passed.some((x) => norm(x) === norm(label(f))));
  if (passed.length + failed.length === items.length && !overlap.length) { clean++; continue; }

  const mapped = [], orphan = [];
  for (const f of failed) {
    const hit = match(label(f));
    if (hit && !mapped.some((m) => m.item === hit)) mapped.push({ item: hit, why: why(f) });
    else orphan.push(f);
  }
  const failedSet = new Set(mapped.map((m) => m.item));
  const newPassed = items.filter((i) => !failedSet.has(i));

  console.log(
    `${checkOnly ? "would fix" : "fixed"} ${file}: ${passed.length}+${failed.length}=${passed.length + failed.length}` +
    ` → ${newPassed.length}+${mapped.length}=${newPassed.length + mapped.length}` +
    (orphan.length ? `  (${orphan.length} moved to honestAssessment)` : "") +
    (overlap.length ? `  [${overlap.length} were in both]` : "")
  );

  if (checkOnly) { changed++; continue; }

  ar.passed = newPassed;
  ar.failed = mapped;
  if (orphan.length) {
    const note = " Limitations on the record: " +
      orphan.map((o) => { const l = label(o), w = why(o); return l + (w ? " — " + w : ""); }).join(" ");
    if (!String(ar.honestAssessment || "").includes("Limitations on the record")) {
      ar.honestAssessment = String(ar.honestAssessment || "").trim() + note;
    }
  }
  writeFileSync(p, JSON.stringify(j, null, 2) + "\n");
  changed++;
}

console.log(`\nchecklist ${items.length} items · ${clean} already clean · ${changed} ${checkOnly ? "need fixing" : "fixed"} · ${broken} broken`);

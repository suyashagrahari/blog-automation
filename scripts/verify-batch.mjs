#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Batch verifier — the orchestrator's Phase 7 gate.
//
//   node scripts/verify-batch.mjs content/batches/<id>
//
// Checks the things that have actually gone wrong in past batches, in the way
// they actually went wrong:
//
//   · word band measured by PLAIN WHITESPACE SPLIT (`wordCount()` in
//     app/lib/batches.ts strips markdown and reads 20-40 words HIGHER — trusting
//     it once nearly cost three posts real content)
//   · FAQ count, and FAQs present ONLY in article.faqs / FAQPage JSON-LD
//   · FAQ vs body-heading duplication on MEANING (token overlap), not on exact
//     string match — an exact check missed three of these in one wave, where a
//     heading differed from its FAQ by two words and read as the same question
//   · audit: |passed| + |failed| == 50, passed ∩ failed == ∅, and every item
//     string byte-verbatim against publish-checklist.md after collapsing
//     internal whitespace to single spaces (three strings in one wave kept raw
//     newlines from the source file)
//   · source caps counting DISTINCT POSTS, not URL occurrences, and counting
//     EVERY outbound URL in the body — not just the ones registered in
//     batchMeta.sources. A past check missed an unregistered wikipedia link that
//     put that domain in a 4th post.
//   · reuse against USED-SOURCES.md
//   · factsUsed quoted verbatim against content/facts.md
//   · internal links resolve to TEMPLATE_LINKS, and no link to a known-dead slug
//   · pricing claims, because facts.md ships an EMPTY Pricing block
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const dir = process.argv[2];
if (!dir) { console.error("usage: verify-batch.mjs content/batches/<id>"); process.exit(2); }

const ROOT = process.cwd();
const problems = [];
const notes = [];
const P = (slug, msg) => problems.push(`${slug}: ${msg}`);
const N = (slug, msg) => notes.push(`${slug}: ${msg}`);

// ── the checklist, byte-verbatim ─────────────────────────────────────────────
const collapse = (s) => String(s).replace(/\s+/g, " ").trim();
const checklistPath = ".claude/skills/subhsandesh-blog/references/publish-checklist.md";
const checklistRaw = readFileSync(path.join(ROOT, checklistPath), "utf8");
// Checklist items WRAP across lines in the source file, indented under the
// "- [ ]" marker. Parsing line-by-line truncates them and then reports a
// correctly-quoted audit string as "not byte-verbatim" — so accumulate each item
// until the next marker, blank line, or heading, then collapse its whitespace.
const CHECK = [];
{
  let cur = null;
  for (const line of checklistRaw.split("\n")) {
    const start = line.match(/^\s*[-*]\s*\[\s*\]\s*(.*)$/);
    if (start) { if (cur !== null) CHECK.push(collapse(cur)); cur = start[1]; continue; }
    if (cur === null) continue;
    if (/^\s*$/.test(line) || /^\s*#/.test(line) || /^\s*[-*]\s/.test(line)) { CHECK.push(collapse(cur)); cur = null; continue; }
    if (/^\s{2,}\S/.test(line)) { cur += " " + line.trim(); continue; }
    CHECK.push(collapse(cur)); cur = null;
  }
  if (cur !== null) CHECK.push(collapse(cur));
}
const CHECKSET = new Set(CHECK);
if (CHECK.length !== 50) N("batch", `publish-checklist.md parsed ${CHECK.length} items, expected 50`);

// ── facts ───────────────────────────────────────────────────────────────────
const factsRaw = readFileSync(path.join(ROOT, "content/facts.md"), "utf8");
const FACTS = new Set(
  [...factsRaw.matchAll(/^-\s+(.+?)\s*$/gm)].map((m) => collapse(m[1])).filter((s) => s.length > 15)
);

// ── template links ──────────────────────────────────────────────────────────
const promptRaw = readFileSync(path.join(ROOT, "app/lib/prompt.ts"), "utf8");
// NOTE: slice to the array's own closing "];", not to the next "// ─" — there is a
// banner comment INSIDE the array (the 2026-09-02 additions) and cutting there
// silently drops 20 valid templates, which reads as "link not in TEMPLATE_LINKS".
const linkStart = promptRaw.indexOf("export const TEMPLATE_LINKS");
const linkBlock = promptRaw.slice(linkStart, promptRaw.indexOf("\n];", linkStart));
const TEMPLATES = new Set(
  [...linkBlock.matchAll(/\$\{SITE_ROOT\}(\/[a-z0-9-]*)/g)].map((m) => "https://subhsandesh.in" + m[1])
);
// slugs removed on 2026-09-02 for being 307 redirects
const DEAD = ["/birthday-bestfriend", "/birthday-friend", "/birthday-parents", "/anniversary-gf",
  "/anniversary-parents", "/valentine-gf", "/valentine-bestfriend", "/missyou-bestfriend",
  "/sorry-gf", "/sorry-friend"];

// ── already-spent sources ───────────────────────────────────────────────────
const usedPath = path.join(dir, "USED-SOURCES.md");
const SPENT = new Set();
if (existsSync(usedPath)) {
  for (const m of readFileSync(usedPath, "utf8").matchAll(/^- (https?:\/\/[^\s(]+)/gm)) SPENT.add(m[1]);
}

// ── pricing language ────────────────────────────────────────────────────────
// Two tiers, because context decides and a blunt pattern is useless here. On a
// test run a blunt version flagged four posts and ALL FOUR were false positives:
// two were writers explicitly declining to state a price ("the site publishes no
// pricing data and this post will not invent any"), one was horticultural yield
// ("3.4 flowers per plant per month"), one was scheduling.
//
// HARD: an affirmative claim about what SubhSandesh costs. There is no innocent
// reading of these, so they fail.
const PRICE_HARD = /\b(free of charge|for free|totally free|completely free|absolutely free|100% free|no cost to (you|create)|zero cost|costs? you nothing|no delivery (charge|fee)|free (tier|plan|forever)|paid (tier|plan))\b/i;
// SOFT: might be a price claim, might be the post correctly refusing to make one,
// might be about a florist's prices or a yield figure. Reported for hand judgement.
const PRICE_SOFT = /(₹\s?\d|\brs\.?\s?\d|costs? nothing|subscription|\bpricing\b)/i;

const blogsDir = path.join(dir, "blogs");
const files = readdirSync(blogsDir).filter((f) => f.endsWith(".json")).sort();

// URL/domain -> set of slugs (post-counting, per the cap rule)
const urlPosts = new Map(), domainPosts = new Map();
const rows = [];

const tokens = (s) => new Set(String(s).toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((w) => w.length > 2));
// Jaccard, NOT intersection/min(): min() inflates any pair where one question is
// short, and flagged two genuinely different questions at 0.80 on a test run.
const overlap = (a, b) => { const i = [...a].filter((x) => b.has(x)).length; return i / (a.size + b.size - i) || 0; };

for (const f of files) {
  const slug = f.replace(/\.json$/, "");
  const j = JSON.parse(readFileSync(path.join(blogsDir, f), "utf8"));
  const a = j.article || j;
  const md = a.contentMarkdown || "";

  // ── words: plain whitespace split, FAQs excluded (they live in article.faqs) ─
  const words = md.split(/\s+/).filter(Boolean).length;
  if (words < 1500 || words > 1800) P(slug, `word count ${words} outside 1500-1800 (plain split)`);

  // ── FAQs ──────────────────────────────────────────────────────────────────
  const faqs = a.faqs || [];
  if (faqs.length < 8 || faqs.length > 12) P(slug, `${faqs.length} FAQs, need 8-12`);
  if (/^#{1,4}\s*(faq|frequently asked)/im.test(md)) P(slug, "FAQ section present in contentMarkdown — must live only in article.faqs");

  // ── FAQ vs heading, on meaning ────────────────────────────────────────────
  const headings = [...md.matchAll(/^#{1,4}\s+(.+?)\s*$/gm)].map((m) => m[1]);
  for (const q of faqs) {
    const qt = tokens(q.question || q.q || "");
    if (!qt.size) continue;
    for (const h of headings) {
      const o = overlap(qt, tokens(h));
      if (o >= 0.8) P(slug, `FAQ ~ heading ${o.toFixed(2)}: "${q.question || q.q}" vs "${h}"`);
      else if (o >= 0.6) N(slug, `FAQ~heading ${o.toFixed(2)} — judge by hand: "${q.question || q.q}" vs "${h}"`);
    }
  }

  // ── audit ─────────────────────────────────────────────────────────────────
  // the contract calls this batchMeta.auditReport; accept the older names too
  const audit = j.batchMeta?.auditReport || j.auditReport || j.audit || j.batchMeta?.audit || {};
  // entries are strings, or objects carrying the item plus a reason
  const itemOf = (x) => collapse(typeof x === "string" ? x : (x?.item ?? x?.name ?? x?.check ?? x?.text ?? JSON.stringify(x)));
  const passed = (audit.passed || []).map(itemOf);
  const failed = (audit.failed || []).map(itemOf);
  if (passed.length + failed.length !== 50) P(slug, `audit has ${passed.length}+${failed.length}=${passed.length + failed.length} items, need 50`);
  const inter = passed.filter((x) => failed.includes(x));
  if (inter.length) P(slug, `passed ∩ failed non-empty (${inter.length}): ${inter[0]}`);
  if (CHECK.length === 50) {
    for (const item of [...passed, ...failed]) if (!CHECKSET.has(item)) P(slug, `audit item not byte-verbatim in publish-checklist.md: "${item.slice(0, 70)}"`);
    const seen = new Set([...passed, ...failed]);
    const missing = CHECK.filter((c) => !seen.has(c));
    if (missing.length) P(slug, `${missing.length} checklist items absent from the audit, e.g. "${missing[0].slice(0, 60)}"`);
  }

  // ── facts verbatim ────────────────────────────────────────────────────────
  const factsUsed = (j.batchMeta?.factsUsed || j.factsUsed || a.factsUsed || []).map(collapse);
  if (factsUsed.length < 3) P(slug, `factsUsed has ${factsUsed.length}, need >= 3`);
  for (const fu of factsUsed) if (!FACTS.has(fu)) P(slug, `factsUsed not verbatim in facts.md: "${fu.slice(0, 70)}"`);

  // ── links ─────────────────────────────────────────────────────────────────
  const internal = [...new Set([...JSON.stringify(j).matchAll(/https:\/\/subhsandesh\.in(\/[a-z0-9-]*)/g)].map((m) => m[1]))]
    .filter((p) => !p.startsWith("/blog"));
  const bodyInternal = [...new Set([...md.matchAll(/https:\/\/subhsandesh\.in(\/[a-z0-9-]*)/g)].map((m) => m[1]))].filter((p) => !p.startsWith("/blog"));
  if (!bodyInternal.includes("/bouquet-gf")) P(slug, "mandatory /bouquet-gf link missing from body");
  if (!bodyInternal.includes("/love-gf") && !bodyInternal.includes("/darling")) P(slug, "needs at least one of /love-gf or /darling in body");
  if (bodyInternal.length < 2 || bodyInternal.length > 4) P(slug, `${bodyInternal.length} internal links in body, need 2-4: ${bodyInternal.join(" ")}`);
  for (const p of internal) {
    if (DEAD.includes(p)) P(slug, `links REMOVED redirect slug ${p}`);
    else if (!TEMPLATES.has("https://subhsandesh.in" + p)) P(slug, `link not in TEMPLATE_LINKS: ${p}`);
  }

  // ── outbound sources: every URL in the whole record, post-counted ──────────
  // Count registered sources PLUS every outbound URL in the body — a past check
  // looked only at batchMeta.sources and missed an unregistered body link that
  // put its domain in a 4th post.
  //
  // But do NOT scan structuredData: its `sameAs`/`@id` entity references point at
  // Wikipedia and Wikidata for disambiguation, are not citations, and counting
  // them reports en.wikipedia.org as breaching the cap in every post at once.
  const srcUrls = (j.batchMeta?.sources || j.sources || []).map((s) => (typeof s === "string" ? s : s.url)).filter(Boolean);
  const out = new Set();
  for (const text of [md, srcUrls.join(" ")]) {
    for (const m of String(text).matchAll(/https?:\/\/[^"\\)\s>\]]+/g)) {
      let u = m[0].replace(/[.,;:)\]]+$/, "");
      if (u.includes("subhsandesh.in") || u.includes("schema.org")) continue;
      out.add(u);
    }
  }
  for (const u of out) {
    if (SPENT.has(u)) P(slug, `re-cites an already-spent URL: ${u}`);
    if (!urlPosts.has(u)) urlPosts.set(u, new Set());
    urlPosts.get(u).add(slug);
    let h = ""; try { h = new URL(u).hostname.replace(/^www\./, ""); } catch { continue; }
    if (!domainPosts.has(h)) domainPosts.set(h, new Set());
    domainPosts.get(h).add(slug);
  }

  // ── pricing ───────────────────────────────────────────────────────────────
  const surfaces = [md, a.metaDescription, a.excerpt, ...faqs.map((q) => (q.question || "") + " " + (q.answer || q.a || ""))].join("\n");
  const hard = surfaces.match(PRICE_HARD);
  if (hard) P(slug, `COST CLAIM "${hard[0]}" — facts.md Pricing block is EMPTY, no post may price the product`);
  else {
    const soft = surfaces.match(PRICE_SOFT);
    if (soft) {
      const i = surfaces.indexOf(soft[0]);
      N(slug, `price-adjacent "${soft[0]}" — read it: …${surfaces.slice(Math.max(0, i - 70), i + 60).replace(/\s+/g, " ")}…`);
    }
  }

  rows.push({ slug, words, faqs: faqs.length, passed: passed.length, failed: failed.length,
    links: bodyInternal.join(" "), cat: (j.batchMeta?.categorySlug || j.categorySlug || "?"), sources: out.size });
}

// ── caps: DISTINCT POSTS, url <= 2, domain <= 3 ─────────────────────────────
for (const [u, s] of urlPosts) if (s.size > 2) problems.push(`CAP url in ${s.size} posts (max 2): ${u} — ${[...s].join(", ")}`);
for (const [h, s] of domainPosts) if (s.size > 3) problems.push(`CAP domain in ${s.size} posts (max 3): ${h} — ${[...s].join(", ")}`);
const at3 = [...domainPosts].filter(([, s]) => s.size === 3).map(([h]) => h);

// ── manifest ────────────────────────────────────────────────────────────────
const batch = JSON.parse(readFileSync(path.join(dir, "batch.json"), "utf8"));
const onDisk = files.map((f) => f.replace(/\.json$/, "")).sort();
const declared = [...batch.blogs].sort();
if (JSON.stringify(onDisk) !== JSON.stringify(declared)) problems.push(`batch.json blogs != files on disk\n  disk: ${onDisk.join(", ")}\n  json: ${declared.join(", ")}`);
const research = existsSync(path.join(dir, "research")) ? readdirSync(path.join(dir, "research")).filter((f) => f.endsWith(".md")).length : 0;

// ── report ──────────────────────────────────────────────────────────────────
console.log(`\n${dir} — ${files.length} blogs, ${research} research briefs\n`);
console.log("slug".padEnd(38) + "words  faq  audit    cat".padEnd(34) + "links");
for (const r of rows) {
  console.log(r.slug.padEnd(38) + String(r.words).padStart(5) + String(r.faqs).padStart(5) +
    `  ${r.passed}/${r.failed}`.padEnd(9) + r.cat.padEnd(24) + r.links);
}
console.log(`\ntotal audit passed: ${rows.reduce((a, r) => a + r.passed, 0)}/${rows.length * 50}`);
console.log(`outbound: ${urlPosts.size} URLs across ${domainPosts.size} domains; ${at3.length} domain(s) at the cap of 3${at3.length ? ": " + at3.join(", ") : ""}`);

if (notes.length) { console.log(`\n── ${notes.length} to judge by hand ──`); notes.forEach((n) => console.log("  ? " + n)); }
if (problems.length) { console.log(`\n── ${problems.length} PROBLEMS ──`); problems.forEach((p) => console.log("  ✗ " + p)); process.exit(1); }
console.log("\n✔ no problems");

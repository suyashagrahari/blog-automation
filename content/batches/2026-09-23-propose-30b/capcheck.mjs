// Source-cap checker for batch 2026-09-23-propose-30b.
// Counts POSTS per domain / per URL — NOT occurrences. Counting URLs overstates
// the tally and produced a false cap alarm in both earlier waves.
import fs from "node:fs";
const PRIOR = ["content/batches/2026-09-17-propose-12/blogs", "content/batches/2026-09-17-propose-30/blogs"];
const HERE = "content/batches/2026-09-23-propose-30b/blogs";
const banned = new Map();
for (const p of PRIOR) {
  if (!fs.existsSync(p)) continue;
  for (const f of fs.readdirSync(p))
    for (const s of (JSON.parse(fs.readFileSync(`${p}/${f}`, "utf8")).batchMeta?.sources || []))
      banned.set(s.url, p.split("/")[2]);
}
const dom = {}, url = {};
if (fs.existsSync(HERE)) for (const f of fs.readdirSync(HERE)) {
  const j = JSON.parse(fs.readFileSync(`${HERE}/${f}`, "utf8"));
  const seen = new Set();
  for (const s of (j.batchMeta?.sources || [])) {
    seen.add(new URL(s.url).hostname.replace(/^www\./, ""));
    (url[s.url] ||= new Set()).add(f);
  }
  for (const d of seen) (dom[d] ||= new Set()).add(f);
}
console.log(`BANNED — already spent in waves 1 and 2, never reuse (${banned.size} URLs):`);
for (const [u, b] of [...banned].sort()) console.log(`  ${u}   [${b}]`);
const reused = Object.keys(url).filter((u) => banned.has(u));
console.log(`\n!! BANNED URLS ALREADY USED IN THIS BATCH: ${reused.length ? reused.join("\n   ") : "none"}`);
console.log("\nDOMAINS AT CAP 3 — do not cite:");
const full = Object.entries(dom).filter(([, s]) => s.size >= 3);
console.log(full.length ? full.map(([d, s]) => `  ${d} (${s.size} posts)`).join("\n") : "  none");
console.log("\nDOMAINS WITH ONE SLOT LEFT (2 posts):");
const two = Object.entries(dom).filter(([, s]) => s.size === 2);
console.log(two.length ? two.map(([d]) => `  ${d}`).join("\n") : "  none");
console.log("\nURLS AT CAP 2 — do not cite:");
const u2 = Object.entries(url).filter(([, s]) => s.size >= 2);
console.log(u2.length ? u2.map(([u]) => `  ${u}`).join("\n") : "  none");

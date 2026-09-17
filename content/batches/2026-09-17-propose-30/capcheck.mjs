// Source-cap checker for batch 2026-09-17-propose-30.
// Counts POSTS per domain / per URL — NOT occurrences. Counting URLs overstates
// the tally and has produced false cap alarms twice now.
import fs from "node:fs";
const W1 = "content/batches/2026-09-17-propose-12/blogs";
const W2 = "content/batches/2026-09-17-propose-30/blogs";
const banned = new Set();
if (fs.existsSync(W1)) for (const f of fs.readdirSync(W1))
  for (const s of (JSON.parse(fs.readFileSync(`${W1}/${f}`, "utf8")).batchMeta?.sources || [])) banned.add(s.url);
const dom = {}, url = {};
if (fs.existsSync(W2)) for (const f of fs.readdirSync(W2)) {
  const j = JSON.parse(fs.readFileSync(`${W2}/${f}`, "utf8"));
  const seen = new Set();
  for (const s of (j.batchMeta?.sources || [])) {
    const h = new URL(s.url).hostname.replace(/^www\./, "");
    seen.add(h);
    (url[s.url] ||= new Set()).add(f);
  }
  for (const d of seen) (dom[d] ||= new Set()).add(f);
}
console.log(`BANNED — spent in wave 1, never reuse (${banned.size} URLs):`);
console.log([...banned].sort().join("\n"));
console.log("\nDOMAINS AT CAP 3 — do not cite:");
const full = Object.entries(dom).filter(([, s]) => s.size >= 3);
console.log(full.length ? full.map(([d, s]) => `  ${d} (${s.size} posts)`).join("\n") : "  none");
console.log("\nDOMAINS WITH ONE SLOT LEFT (2 posts):");
const two = Object.entries(dom).filter(([, s]) => s.size === 2);
console.log(two.length ? two.map(([d]) => `  ${d}`).join("\n") : "  none");
console.log("\nURLS AT CAP 2 — do not cite:");
const u2 = Object.entries(url).filter(([, s]) => s.size >= 2);
console.log(u2.length ? u2.map(([u]) => `  ${u}`).join("\n") : "  none");

// Source-cap checker for batch 2026-09-24-propose-30c.
// Counts POSTS per domain / per URL — NOT occurrences.
import fs from "node:fs";
const PRIOR = ["2026-09-17-propose-12", "2026-09-17-propose-30", "2026-09-23-propose-30b"]
  .map((d) => `content/batches/${d}/blogs`);
const HERE = "content/batches/2026-09-24-propose-30c/blogs";
// Primary-reference sources are EXEMPT from the cross-wave ban (BRIEF, 2026-09-24):
// statutes, dictionaries, grammars, treebanks, corpora and standards documents have
// exactly one correct citation, so reusing them across waves is not content-farming.
const EXEMPT = /^(www\.)?(mha\.gov\.in|ncrb\.gov\.in|indiacode\.nic\.in|prsindia\.org|dsal\.uchicago\.edu|universaldependencies\.org|tatoeba\.org|unicode\.org|en\.wiktionary\.org)$/;
const isExempt = (u) => { try { return EXEMPT.test(new URL(u).hostname); } catch { return false; } };
const banned = new Map();
for (const p of PRIOR) { if (!fs.existsSync(p)) continue;
  for (const f of fs.readdirSync(p))
    for (const s of (JSON.parse(fs.readFileSync(`${p}/${f}`, "utf8")).batchMeta?.sources || []))
      { if (!isExempt(s.url)) banned.set(s.url, p.split("/")[2]); } }
const dom = {}, url = {};
if (fs.existsSync(HERE)) for (const f of fs.readdirSync(HERE)) {
  const j = JSON.parse(fs.readFileSync(`${HERE}/${f}`, "utf8"));
  const seen = new Set();
  for (const s of (j.batchMeta?.sources || [])) {
    seen.add(new URL(s.url).hostname.replace(/^www\./, ""));
    (url[s.url] ||= new Set()).add(f); }
  for (const d of seen) (dom[d] ||= new Set()).add(f); }
console.log(`BANNED — spent in waves 1-3, never reuse (${banned.size} URLs).`);
console.log("Statutes, dictionaries, treebanks, corpora and standards are EXEMPT and excluded from this list — reuse them freely and note it in structuralLimitations.");
console.log("Run with --list to print them all.");
if (process.argv.includes("--list")) for (const [u, b] of [...banned].sort()) console.log(`  ${u}   [${b}]`);
const reused = Object.keys(url).filter((u) => banned.has(u));
console.log(`\n!! BANNED URLS USED IN THIS BATCH: ${reused.length ? reused.join("\n   ") : "none"}`);
const full = Object.entries(dom).filter(([, s]) => s.size >= 3);
console.log("\nDOMAINS AT CAP 3 — do not cite:");
console.log(full.length ? full.map(([d, s]) => `  ${d} (${s.size} posts)`).join("\n") : "  none");
const two = Object.entries(dom).filter(([, s]) => s.size === 2);
console.log("\nDOMAINS WITH ONE SLOT LEFT (2 posts):");
console.log(two.length ? two.map(([d]) => `  ${d}`).join("\n") : "  none");
const u2 = Object.entries(url).filter(([, s]) => s.size >= 2);
console.log("\nURLS AT CAP 2 — do not cite:");
console.log(u2.length ? u2.map(([u]) => `  ${u}`).join("\n") : "  none");

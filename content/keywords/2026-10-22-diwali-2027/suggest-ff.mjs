// Autocomplete harvest via client=firefox — same prefixes and same CSV as scripts/suggest.mjs.
// Why: on 2026-10-21 Google returned HTTP 403 to client=chrome (the only client with relevance
// scores) after a 4-way parallel run, while client=firefox kept returning 200. The build only uses
// prefix_hits, so relevance is written as 0 here. Stops after 15 consecutive errors rather than
// emitting a truncated set that looks complete.
//   node suggest-ff.mjs <outDir> <geo> "<seed>" ["<seed2>" …]
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const [outDir, geo, ...seeds] = process.argv.slice(2);
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36";
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
const QUESTIONS = ["how", "what", "when", "why", "which", "who", "can i", "is it"];
const MODIFIERS = ["best", "free", "online", "with", "for", "in", "without", "app", "maker", "template", "2026", "2027"];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const cell = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };

const found = new Map(); let calls = 0, fails = 0, streak = 0, last = null;
outer: for (const seed of seeds) {
  const s = seed.trim();
  for (const prefix of [s, `${s} `, ...ALPHABET.map((c) => `${s} ${c}`), ...MODIFIERS.map((m) => `${s} ${m}`), ...QUESTIONS.map((q) => `${q} ${s}`)]) {
    calls++;
    try {
      const r = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&gl=${geo}&hl=en&q=${encodeURIComponent(prefix)}`, { headers: { "User-Agent": UA } });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const j = JSON.parse(await r.text()); streak = 0;
      (j[1] || []).forEach((p, i) => { const k = String(p).trim().toLowerCase(); if (!k) return;
        const e = found.get(k) || { phrase: String(p).trim(), rank: i + 1, prefixes: new Set() };
        e.prefixes.add(prefix); e.rank = Math.min(e.rank, i + 1); found.set(k, e); });
    } catch (e) { fails++; streak++; last = e.message; if (streak >= 15) { console.error(`✖ ${streak} consecutive errors (${last}) — stopping`); break outer; } }
    await sleep(250);
  }
}
if (!found.size) { console.error(`✖ nothing returned in ${calls} calls (${last})`); process.exit(1); }
const rows = [...found.values()].sort((a, b) => b.prefixes.size - a.prefixes.size || a.rank - b.rank || a.phrase.localeCompare(b.phrase));
mkdirSync(outDir, { recursive: true });
writeFileSync(path.join(outDir, "autocomplete.csv"), ["suggestion,words,prefix_hits,relevance,best_rank,source_prefixes",
  ...rows.map((r) => [cell(r.phrase), r.phrase.split(/\s+/).length, r.prefixes.size, 0, r.rank, cell([...r.prefixes].join(" | "))].join(","))].join("\n") + "\n");
console.log(`✓ ${outDir}: ${rows.length} rows, ${calls} calls, ${fails} failed`);

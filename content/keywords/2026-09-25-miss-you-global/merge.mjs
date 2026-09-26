// Merge every per-market autocomplete harvest into one ranked, market-labelled set.
// Reads ac/<geo>-<hl>/autocomplete.csv, writes autocomplete-merged.csv.
// prefix_hits is per-market; markets_hit is how many markets returned the phrase.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const AC = "ac";
const rows = new Map(); // phrase -> {phrase, markets:Map(geo-hl -> {hits,rel,rank})}

function parseCsv(text) {
  const out = []; const lines = text.split("\n").slice(1);
  for (const line of lines) {
    if (!line.trim()) continue;
    const cells = []; let cur = "", q = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (q) { if (c === '"' && line[i+1] === '"') { cur += '"'; i++; } else if (c === '"') q = false; else cur += c; }
      else if (c === '"') q = true;
      else if (c === ",") { cells.push(cur); cur = ""; }
      else cur += c;
    }
    cells.push(cur);
    out.push({ suggestion: cells[0], words: +cells[1], prefix_hits: +cells[2], relevance: +cells[3], best_rank: +cells[4] });
  }
  return out;
}

for (const dir of readdirSync(AC)) {
  const f = path.join(AC, dir, "autocomplete.csv");
  if (!existsSync(f)) continue;
  for (const r of parseCsv(readFileSync(f, "utf8"))) {
    const key = r.suggestion.toLowerCase().trim();
    if (!key) continue;
    if (!rows.has(key)) rows.set(key, { phrase: r.suggestion, markets: new Map() });
    rows.get(key).markets.set(dir, { hits: r.prefix_hits, rel: r.relevance, rank: r.best_rank });
  }
}

const all = [...rows.values()].map((r) => {
  let hits = 0, rel = 0;
  for (const m of r.markets.values()) { hits += m.hits; rel = Math.max(rel, m.rel); }
  return {
    phrase: r.phrase,
    words: r.phrase.split(/\s+/).length,
    markets: [...r.markets.keys()].join(" "),
    markets_hit: r.markets.size,
    total_prefix_hits: hits,
    max_relevance: rel,
  };
}).sort((a, b) => b.total_prefix_hits - a.total_prefix_hits || b.max_relevance - a.max_relevance);

const csvCell = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
writeFileSync("autocomplete-merged.csv",
  ["suggestion,words,markets,markets_hit,total_prefix_hits,max_relevance",
   ...all.map((r) => [r.phrase, r.words, r.markets, r.markets_hit, r.total_prefix_hits, r.max_relevance].map(csvCell).join(","))].join("\n") + "\n");

console.log(`merged ${all.length} unique suggestions from ${readdirSync(AC).length} market harvests`);
for (const m of readdirSync(AC)) {
  const n = all.filter((r) => r.markets.includes(m)).length;
  console.log(`  ${m.padEnd(7)} ${String(n).padStart(5)} suggestions`);
}

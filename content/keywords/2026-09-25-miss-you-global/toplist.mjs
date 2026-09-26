import { readFileSync, readdirSync, existsSync } from "node:fs";
const NOISE = /(lyrics|letra|cancion|canción|song|mp3|netflix|filmaffinity|reparto|serie |pelicula|película|oliver tree|rolling stones|luis miguel|ricky martin|intocable|grupo firme|karaoke|chord|akor|şarkı|sözleri sözleri|drama|ep |episode|anime|manga|movie|film )/i;
const markets = process.argv[2] ? process.argv[2].split(",") : readdirSync("ac");
const n = Number(process.argv[3] || 18);
const parse = (t) => t.split("\n").slice(1).filter(Boolean).map((l) => {
  const c = []; let cur = "", q = false;
  for (let i = 0; i < l.length; i++) { const ch = l[i];
    if (q) { if (ch === '"' && l[i+1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true; else if (ch === ",") { c.push(cur); cur = ""; } else cur += ch; }
  c.push(cur); return { s: c[0], w: +c[1], ph: +c[2], rel: +c[3] };
});
for (const m of markets) {
  const f = `ac/${m}/autocomplete.csv`; if (!existsSync(f)) continue;
  const rows = parse(readFileSync(f, "utf8")).filter((r) => !NOISE.test(r.s));
  console.log(`\n### ${m}  (${rows.length} non-noise)`);
  for (const r of rows.slice(0, n)) console.log(`  ${String(r.ph).padStart(2)}× ${r.s}`);
}

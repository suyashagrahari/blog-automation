// Scores topics.txt (curated: 1 line = 1 post) -> keyword-inventory.csv (500 keywords,
// 400 pages, 8 batches of 50). Demand = live autocomplete prefix_hits across 5 markets.
// Weak counts come from serps.md archetypes (measured 2026-10-12). Bands/CTR/win-prob are the
// verbatim gates.md tables. Run from this directory: node score-topics.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const MID = { 5: 20000, 4: 6500, 3: 2000, 2: 650, 1: 150 };
const WINP = (w) => (w >= 5 ? 0.6 : w >= 3 ? 0.4 : w >= 1 ? 0.15 : 0);
const WINSC = (w) => (w >= 5 ? 5 : w >= 3 ? 4 : w >= 1 ? 2 : 1);
const BAND = { 5: "10,000+/mo", 4: "3,000-10,000/mo", 3: "1,000-3,000/mo", 2: "300-1,000/mo", 1: "under 300/mo" };
const minus = (iso, d) => { const x = new Date(iso + "T00:00:00Z"); x.setUTCDate(x.getUTCDate() - d); return x.toISOString().slice(0, 10); };
const ttr = (w) => (w >= 5 ? 56 : w >= 3 ? 84 : 182);

// demand index: normalised phrase -> {hits(max), markets}
const parse = (line) => { const c = []; let cur = "", q = false;
  for (let i = 0; i < line.length; i++) { const ch = line[i];
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true; else if (ch === ",") { c.push(cur); cur = ""; } else cur += ch; }
  c.push(cur); return c; };
const n = (s) => s.toLowerCase().replace(/\bpick up\b/g, "pickup").replace(/\bbf\b/g, "boyfriend").replace(/\bgf\b/g, "girlfriend").replace(/colours/g, "colors").replace(/favours/g, "favors").trim();
const IDX = new Map();
// ac-us2 = second US pass on seeds that do not start with "halloween" (boo basket, pumpkin carving…)
for (const [dir, m] of [["us", "us"], ["us2", "us"], ["gb", "gb"], ["ca", "ca"], ["au", "au"], ["in", "in"]]) {
  const f = `ac-${dir}/autocomplete.csv`; if (!existsSync(f)) continue;
  for (const line of readFileSync(f, "utf8").split("\n").slice(1)) { if (!line.trim()) continue;
    const c = parse(line); const k = n(c[0]); const e = IDX.get(k) || { hits: 0, markets: new Set() };
    e.hits = Math.max(e.hits, +c[2] || 0); e.markets.add(m); IDX.set(k, e); }
}
const STOPW = new Set("halloween for the a an to and of with in on my your our ideas idea best on what is how do".split(" "));
const toks = (s) => n(s).split(" ").filter((t) => !STOPW.has(t)).map((t) => t.replace(/s$/, ""));
const KEYS = [...IDX.keys()].map((k) => ({ k, t: new Set(toks(k)), len: k.split(" ").length }));
// exact (or with/without the "halloween" prefix) first; else NEAR: an autocomplete row containing every
// content word of the topic and at most 2 words longer. The matched phrasing is recorded in `via`.
const look = (k) => {
  const ex = IDX.get(n(k)) || IDX.get(n(k.replace(/^halloween /, ""))) || IDX.get(n("halloween " + k));
  if (ex) return { ...ex, via: "exact" };
  const want = toks(k); if (!want.length) return null; const L = k.split(" ").length;
  let best = null;
  for (const c of KEYS) { if (c.len > L + 2) continue; if (!want.every((t) => c.t.has(t))) continue;
    const e = IDX.get(c.k); if (!best || e.hits > best.hits) best = { ...e, via: "near: " + c.k }; }
  return best;
};

// theme defaults [weak, intentFit, pageType, evidence-note] + per-line overrides (measured SERPs)
const T = {
  couple: [7, 5, "blog listicle", "relationship modifier: 6-10 weak across every measured romance SERP"],
  pickup: [6, 5, "blog listicle", "pickup lines: rd/cosmo/parade + reddit/pinterest/scribd (6 weak)"],
  messages: [4, 4, "blog listicle", "generic wishes owned by card brands (3 weak); audience variants softer"],
  captions: [4, 3, "blog listicle", "caption head owned by adobe/today/T+L (4 weak); niche angles softer"],
  quotes: [3, 3, "blog listicle", "quotes head: today/southern living/rd (2 weak)"],
  puns: [3, 3, "blog listicle", "puns head: today/GH/rd (3 weak)"],
  jokes: [6, 2, "blog listicle", "jokes: fatherly + scraped copies"],
  friends: [7, 4, "blog listicle", "bff costumes 7 weak (pioneer woman titled 2025)"],
  work: [6, 3, "blog listicle", "coworker messages 6 weak (wordstream 2022)"],
  party: [5, 3, "blog listicle", "party ideas adults 5 weak; kids games 5"],
  costume: [4, 2, "blog listicle", "costume heads: retailers + GH/today; angle variants softer"],
  kids: [5, 2, "blog listicle", "family/education blogs"],
  global: [6, 3, "explainer", "UK 6 weak, India 6 weak, AI-Overview risk on why/what"],
  movies: [3, 2, "blog listicle", "imdb/variety/netflix own movie lists (3 weak)"],
  beauty: [3, 2, "blog listicle", "beauty majors + image intent"],
  decor: [4, 2, "blog listicle", "pumpkin carving 4 weak; decor retail-led"],
  food: [5, 1, "recipe", "recipe intent (foodnetwork/bbc) — content play only"],
};
const OVR = [
  [/boo basket/, 9, "boo basket SERPs 9-10 weak (pinterest/reddit/marketplaces) — MEASURED"],
  [/ask .*boo|be my boo|ask (a girl|a guy|someone|her|him) out/, 9, "no page answers it — MEASURED"],
  [/photoshoot|soft launch|couple poses|couple pictures/, 9, "photoshoot SERP 9 weak — MEASURED"],
  [/long distance|virtual halloween date/, 8, "LDR SERP 8 weak — MEASURED"],
  [/crush|flirty/, 8, "texts to crush 8 weak — MEASURED"],
  [/bucket list/, 8, "bucket list 8 weak — MEASURED"],
  [/date ideas|date night|activities for couples/, 6, "date ideas 6 weak — MEASURED"],
  [/propos|engagement/, 6, "proposal 6 weak — MEASURED"],
  [/couple.*costume|costume.*couple|couples? (dress|fancy)|matching .*costume/, 4, "couples costumes: retailer SERP (1 weak); angle variants ~4"],
  [/^halloween (quotes|captions for instagram|puns|wishes|greetings|nails|decorations ideas)$|^happy halloween wishes$|^halloween card messages$/, 3, "head term — big-media SERP"],
  [/last minute|without buying|no mask|from your closet/, 5, "last-minute: buzzfeed titled 2025 — MEASURED 5 weak"],
  [/glasses|short hair|curly hair|plus size|tall people|hot weather|cold weather|pregnant|red dress|black dress/, 7, "niche costume constraint — few dedicated pages"],
  [/halloween in (india|australia|canada|ireland|scotland|japan|germany|the philippines|mexico)|bhoot|celebrated in the uk/, 6, "country explainer — UK/India measured 6 weak"],
  [/2026 date|public holiday/, 3, "timeanddate/news own dates; expires after 31 Oct"],
  [/trivia/, 4, "trivia 4 weak — MEASURED"],
  [/coworker|colleague/, 6, "coworker messages 6 weak — MEASURED"],
  [/^halloween movies to watch$/, 3, "imdb/variety/netflix — MEASURED"],
];

const lines = readFileSync("topics.txt", "utf8").split("\n").filter((l) => l.trim() && !l.startsWith("#"));
const pages = lines.map((l, i) => {
  const [theme, primary, sec = ""] = l.split("|");
  const secs = sec.split(";").map((s) => s.trim()).filter(Boolean);
  const all = [primary, ...secs].map((k) => ({ k, d: look(k) }));
  const demand = Math.max(0, ...all.map((x) => x.d?.hits || 0));
  const markets = new Set(all.flatMap((x) => (x.d ? [...x.d.markets] : [])));
  let [w, iF, pt, note] = T[theme];
  const o = OVR.find(([re]) => re.test(primary)); if (o) { w = o[1]; note = o[2]; }
  const words = primary.split(" ").length;
  let band = demand >= 12 ? 5 : demand >= 7 ? 4 : demand >= 4 ? 3 : demand >= 2 ? 2 : 1;
  if (markets.size >= 3 && band < 5) band++;           // multi-market demand
  if (words <= 3 && band < 5) band++;                  // short head phrasing = broader demand
  if (demand === 0) band = Math.min(band, 2);          // unmeasured: never above band 2
  const winp = WINP(w);
  const clicks = Math.round(MID[band] * 0.11 * winp);
  return { i, theme, primary, secs, all, demand, markets, w, iF, pt, note, band, clicks, score: WINSC(w) * iF * band,
    ev: demand > 0 ? "AUTOCOMPLETE+SERP-ARCHETYPE" : "UNMEASURED-DEMAND" };
});

// duplicate-primary guard
const seen = new Set(); for (const p of pages) { if (seen.has(n(p.primary))) throw new Error("duplicate primary: " + p.primary); seen.add(n(p.primary)); }

// rank: expected clicks, then intent fit, then demand. Traffic is the stated goal (content play),
// so Gate 5 does not cut low-intent topics — it only orders them after equal-click romance ones.
pages.sort((a, b) => b.clicks - a.clicks || b.iF - a.iF || b.demand - a.demand);
const TOP = pages.slice(0, 400);
TOP.forEach((p, i) => { p.rank = i + 1; p.batch = Math.floor(i / 50) + 1; });

// 500 keywords = 400 primaries + 100 strongest secondaries (by measured demand)
const rows = TOP.map((p) => ({ p, k: p.primary, d: p.all[0].d, role: "primary" }));
const secPool = TOP.flatMap((p) => p.all.slice(1).map((x) => ({ p, k: x.k, d: x.d, role: "secondary" })))
  .sort((a, b) => (b.d?.hits || 0) - (a.d?.hits || 0));
rows.push(...secPool.slice(0, 500 - rows.length));
rows.sort((a, b) => a.p.rank - b.p.rank || (a.role === "primary" ? -1 : 1));

const cell = (v) => (/[",\n]/.test(String(v ?? "")) ? `"${String(v).replace(/"/g, '""')}"` : String(v ?? ""));
const HEAD = "keyword,cluster_id,source_url,source_domain,evidence_type,intent,page_type_required,est_volume,volume_source,weakness_count,gate_failed,bucket,priority_score,ranking_urls,category,action,own_url,own_position,expected_clicks,trend,peak_window,publish_by,demand_rank,requested_bucket,publish_rank,page_role,page_primary,markets,note";
const csv = rows.map(({ p, k, d, role }) => [
  k, `p${String(p.rank).padStart(3, "0")}-${p.theme}`,
  `https://www.google.com/search?q=${encodeURIComponent(k)}&gl=us`,
  d ? `google autocomplete (${[...d.markets].join("/")}) + serps.md archetype` : "no autocomplete row in 5 markets",
  d ? (d.via === "exact" ? "AUTOCOMPLETE+SERP-ARCHETYPE" : "AUTOCOMPLETE-NEAR+SERP-ARCHETYPE") : "UNMEASURED-DEMAND",
  p.iF >= 5 ? "transactional" : p.iF >= 4 ? "informational-commercial" : "informational",
  p.pt, BAND[p.band], "EST (Oct peak)", p.w, "", p.w <= 2 ? "hard-differentiator-only" : "next-cycle", p.score, "", p.theme,
  role === "primary" ? "new-page" : "merge-into-cluster-primary", "", "none",
  role === "primary" ? p.clicks : "", "seasonal", "2027-10-01..2027-10-31", minus("2027-10-31", ttr(p.w)),
  d?.hits ?? "", `B${p.batch}`, p.rank, role, p.primary, d ? [...d.markets].join("|") : "", (d && d.via !== "exact" ? `[demand ${d.via}] ` : "") + p.note,
].map(cell).join(","));
writeFileSync("keyword-inventory.csv", [HEAD, ...csv].join("\n") + "\n");

const by = (a, f) => a.reduce((m, x) => (m[f(x)] = (m[f(x)] || 0) + 1, m), {});
console.log(`topics: ${pages.length} · chosen pages: ${TOP.length} · keywords: ${rows.length} · unmeasured primaries in 400: ${TOP.filter((p) => p.demand === 0).length}`);
console.log("dropped (rank > 400):", pages.slice(400).map((p) => p.primary).join(" | "));
console.log("themes:", JSON.stringify(by(TOP, (p) => p.theme)));
for (let b = 1; b <= 8; b++) { const s = TOP.filter((p) => p.batch === b);
  console.log(`B${b}: ${s.reduce((a, p) => a + p.clicks, 0)} clicks/mo EST · ${JSON.stringify(by(s, (p) => p.theme))}`); }
console.log("TOTAL expected clicks/mo at Oct peak (EST):", TOP.reduce((a, p) => a + p.clicks, 0));

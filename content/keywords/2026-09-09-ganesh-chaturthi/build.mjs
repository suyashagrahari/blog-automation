// Builds keyword-inventory.csv for the 2026-09-09 Ganesh Chaturthi run.
// Band midpoints and CTR table are taken verbatim from gates.md Gate 6c / 6d.
import { writeFile, readFile } from "node:fs/promises";

const MID = { 5: 20000, 4: 6500, 3: 2000, 2: 650, 1: 150 };
const CTR = { 1: 0.28, 2: 0.15, 3: 0.11, 5: 0.07, 8: 0.03, 15: 0.005 };
const WINP = (w) => (w >= 5 ? 0.6 : w >= 3 ? 0.4 : w >= 1 ? 0.15 : 0.0);

// serp: "Y" = SERP actually run this session; "arch" = weakness inferred from a
// SERP run on a sibling query of the same archetype. Never presented as measured.
// g = group A (very high volume) or B (rankable mix)
const K = [
  // ── GROUP A — 25 very high volume ──────────────────────────────────────────
  ["ganesh chaturthi 2026",                       "C01", 5, 2, "Y"   ,    "informational", "blog",     "date/muhurat",   3, "new-page"],
  ["happy ganesh chaturthi",                      "C02", 5, 4, "arch", "informational", "blog",     "wishes",         3, "new-page"],
  ["happy ganesh chaturthi wishes",               "C02", 5, 5, "arch",    "informational", "listicle", "wishes",         3, "new-page"],
  ["ganesh chaturthi wishes",                     "C02", 5, 5, "arch", "informational", "listicle", "wishes",         3, "new-page"],
  ["happy ganesh chaturthi status",               "C03", 4, 5, "Y"   ,    "informational", "listicle", "status",         3, "new-page"],
  ["happy ganesh chaturthi whatsapp status",      "C03", 4, 5, "arch", "informational", "listicle", "status",         3, "new-page"],
  ["ganesh chaturthi images",                     "C04", 5, 3, "arch", "informational", "listicle", "images",         8, "new-page"],
  ["happy ganesh chaturthi images",               "C04", 4, 4, "arch", "informational", "listicle", "images",         3, "new-page"],
  ["ganesh chaturthi quotes",                     "C02", 4, 5, "arch", "informational", "listicle", "wishes",         3, "new-page"],
  ["ganesh chaturthi 2026 date",                  "C01", 4, 2, "arch",    "informational", "blog",     "date/muhurat",   3, "new-page"],
  ["ganesh chaturthi kab hai 2026",               "C01", 4, 3, "arch", "informational", "blog",     "date/muhurat",   3, "new-page"],
  ["ganpati bappa photos",                        "C04", 4, 3, "arch", "informational", "listicle", "images",         8, "new-page"],
  ["ganesh chaturthi decoration ideas",           "C05", 4, 2, "arch", "informational", "listicle", "decoration",     8, "new-page"],
  ["ganpati decoration ideas",                    "C05", 4, 2, "arch", "informational", "listicle", "decoration",     8, "new-page"],
  ["happy ganesh chaturthi wishes in marathi",    "C06", 4, 7, "Y"   ,    "informational", "listicle", "language",       3, "new-page"],
  ["ganesh chaturthi quotes in hindi",            "C07", 4, 6, "arch", "informational", "listicle", "language",       3, "new-page"],
  ["happy ganesh chaturthi banner",               "C08", 3, 5, "arch", "transactional", "tool",     "banner",         3, "new-page"],
  ["happy ganesh chaturthi poster",               "C08", 3, 5, "arch", "transactional", "tool",     "banner",         3, "new-page"],
  ["ganesh chaturthi songs",                      "C09", 3, 2, "arch", "informational", "listicle", "songs",          8, "new-page"],
  ["ganpati aarti",                               "C09", 4, 1, "arch", "informational", "blog",     "songs",          8, "new-page"],
  ["ganesh chaturthi essay",                      "C10", 4, 3, "arch", "informational", "blog",     "essay",          8, "new-page"],
  ["why ganesh chaturthi is celebrated",          "C10", 3, 3, "arch", "informational", "blog",     "essay",          8, "new-page"],
  ["ganesh chaturthi rangoli designs",            "C05", 3, 4, "arch", "informational", "listicle", "decoration",     8, "new-page"],
  ["ganpati invitation card",                     "C11", 3, 4, "arch",    "transactional", "tool",     "invitation",     3, "new-page"],
  ["ganpati visarjan 2026",                       "C12", 4, 3, "arch", "informational", "blog",     "date/muhurat",   3, "new-page"],

  // ── GROUP B — 25 rankable mix ──────────────────────────────────────────────
  ["ganesh chaturthi invitation card online",     "C11", 2, 4, "Y"   ,    "transactional", "tool",     "invitation",     3, "new-page"],
  ["free ganesh chaturthi invitation maker",      "C11", 2, 4, "arch",    "transactional", "tool",     "invitation",     3, "new-page"],
  ["ganesh chaturthi invitation maker",           "C11", 2, 4, "arch",    "transactional", "tool",     "invitation",     3, "new-page"],
  ["ganesh chaturthi card maker",                 "C11", 2, 4, "arch", "transactional", "tool",     "invitation",     3, "new-page"],
  ["ganpati invite template",                     "C11", 2, 4, "arch", "transactional", "tool",     "invitation",     3, "new-page"],
  ["ganpati template for invitation",             "C11", 1, 4, "arch", "transactional", "tool",     "invitation",     3, "new-page"],
  ["happy ganesh chaturthi with name",            "C13", 2, 6, "Y"   ,    "transactional", "tool",     "personalised",   3, "new-page"],
  ["happy ganesh chaturthi name style",           "C13", 2, 6, "arch", "transactional", "tool",     "personalised",   3, "new-page"],
  ["happy ganesh chaturthi photo editor online",  "C13", 2, 6, "arch", "transactional", "tool",     "personalised",   3, "new-page"],
  ["ganesh chaturthi greeting card",              "C13", 3, 6, "arch", "transactional", "tool",     "personalised",   3, "new-page"],
  ["happy ganesh chaturthi for status",           "C03", 3, 5, "arch", "informational", "listicle", "status",         3, "new-page"],
  ["happy ganesh chaturthi video status download","C03", 2, 5, "arch", "transactional", "listicle", "status",         3, "new-page"],
  ["happy ganesh chaturthi stickers for whatsapp","C03", 2, 5, "arch", "transactional", "tool",     "status",         3, "new-page"],
  ["happy ganesh chaturthi images for whatsapp",  "C04", 2, 5, "arch", "informational", "listicle", "images",         3, "new-page"],
  ["ganesh chaturthi quotes for instagram",       "C02", 2, 5, "arch", "informational", "listicle", "wishes",         3, "new-page"],
  ["happy ganesh chaturthi good morning wishes",  "C02", 2, 5, "arch", "informational", "listicle", "wishes",         3, "new-page"],
  ["happy ganesh chaturthi wishes in kannada",    "C06", 2, 7, "arch", "informational", "listicle", "language",       3, "new-page"],
  ["happy ganesh chaturthi wishes in telugu",     "C06", 2, 7, "arch", "informational", "listicle", "language",       3, "new-page"],
  ["happy ganesh chaturthi gujarati wishes",      "C06", 1, 7, "arch", "informational", "listicle", "language",       3, "new-page"],
  ["ganesh chaturthi quotes in marathi",          "C06", 3, 7, "arch",    "informational", "listicle", "language",       3, "new-page"],
  ["ganpati decoration ideas at home",            "C05", 3, 3, "arch", "informational", "listicle", "decoration",     3, "new-page"],
  ["ganesh chaturthi 2026 start and end date",    "C01", 2, 3, "arch", "informational", "blog",     "date/muhurat",   3, "new-page"],
  ["ganesh chaturthi 2026 how many days to go",   "C01", 2, 3, "arch", "informational", "blog",     "date/muhurat",   3, "new-page"],
  ["why ganpati visarjan is done in water",       "C12", 2, 4, "arch", "informational", "blog",     "essay",          3, "new-page"],
  ["ganesh chaturthi essay in hindi 200 words",   "C10", 2, 4, "arch", "informational", "blog",     "essay",          3, "new-page"],
];

const pool = new Map();
for (const line of (await readFile(new URL("pool.csv", import.meta.url), "utf8")).split("\n").slice(1)) {
  const m = line.match(/^"((?:[^"]|"")*)",(\d+),(\d+),/);
  if (m) pool.set(m[1].toLowerCase(), m[3]);
}

const HEAD = "keyword,cluster_id,source_url,source_domain,evidence_type,intent,page_type_required,est_volume,volume_source,weakness_count,gate_failed,bucket,priority_score,ranking_urls,category,action,own_url,own_position,expected_clicks,trend,peak_window,publish_by,demand_rank";
const BAND = { 5: "10000+", 4: "3000-10000", 3: "1000-3000", 2: "300-1000", 1: "0-300" };
const INTENT_FIT = { transactional: 5, commercial: 4, informational: 2, navigational: 1 };

const rows = [], report = [];
for (const [kw, cid, band, weak, serp, intent, ptype, cat, pos, action] of K) {
  const wp = WINP(weak);
  const clicks = MID[band] * CTR[pos] * wp;
  const two = clicks >= 100 ? Math.round(clicks / 10) * 10 : Math.round(clicks);
  const dr = pool.get(kw.toLowerCase()) ?? "";
  const ev = serp === "Y" ? "AUTOCOMPLETE+SERP_CHECKED" : dr ? "AUTOCOMPLETE" : "GENERATED";
  const group = K.indexOf(K.find((r) => r[0] === kw)) < 25 ? "A" : "B";
  rows.push([
    `"${kw}"`, cid, dr ? "AUTOCOMPLETE" : "GENERATED", "google-suggest", ev, intent, ptype,
    BAND[band], "EST", weak, "", weak >= 5 ? "winnable" : weak >= 3 ? "medium" : "do-not-attempt",
    weak >= 5 ? 5 : weak >= 3 ? 3 : 1, // winnability
    "", cat, action, "", "none", `${two} EST`, "seasonal", "2026-09-14..2026-09-25", "2026-09-10", dr,
  ].join(","));
  report.push({ kw, group, band, weak, clicks: two, serp, intent, ptype, cat, dr });
}

// priority_score = winnability × intent fit × volume band
const csv = [HEAD, ...rows.map((r, i) => {
  const p = report[i];
  const win = p.weak >= 5 ? 5 : p.weak >= 3 ? 3 : 1;
  return r.split(",").map((c, j) => (j === 12 ? win * INTENT_FIT[p.intent] * p.band : c)).join(",");
})].join("\n");

await writeFile(new URL("keyword-inventory.csv", import.meta.url), csv + "\n");

const fmt = (r, i) => `| ${i + 1} | ${r.kw} | ${BAND[r.band]} | ${r.weak}/10 | ${r.clicks} | ${r.ptype} | ${r.cat} | ${r.serp === "Y" ? "SERP run" : "archetype"} | ${r.dr || "—"} |`;
const A = report.filter((r) => r.group === "A"), B = report.filter((r) => r.group === "B");
console.log(`Group A (very high volume): ${A.length}   Group B (rankable mix): ${B.length}   Total: ${report.length}`);
console.log(`SERPs actually run: ${report.filter((r) => r.serp === "Y").length} | archetype-inferred: ${report.filter((r) => r.serp !== "Y").length}`);
console.log(`In autocomplete pool: ${report.filter((r) => r.dr).length}/50`);
await writeFile(new URL("table-a.md", import.meta.url), A.map(fmt).join("\n"));
await writeFile(new URL("table-b.md", import.meta.url), B.map(fmt).join("\n"));

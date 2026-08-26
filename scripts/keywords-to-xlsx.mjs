#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// keyword-inventory.csv  →  keywords.xlsx
//
// Turns the CSV the `keyword-harvest` skill writes into a workbook the studio's
// Generate tab can upload directly, and that `subhsandesh-blog` can read as a
// keyword batch.
//
//   npm run keywords:xlsx -- content/keywords/2026-08-13-rakhi/keyword-inventory.csv
//
// Two sheets:
//   "Keywords"      survivors only, expected_clicks descending  ← the studio reads
//                   ONLY this one (app/lib/excel.ts takes SheetNames[0])
//   "All Keywords"  everything: rows the gates cut, plus everything deferred to
//                   next-cycle by Gate 0, with Gate Failed and Publish By filled
//
// The first six columns are the headers app/lib/excel.ts maps onto KeywordRow.
// Everything after them lands in KeywordRow.extra and survives the studio's own
// export untouched, so provenance follows the keyword all the way to publish.
//
// CAUTION: that header matcher is a *substring* match (`n.includes(alias)`), so a
// column named e.g. "Volume Source" would be swallowed by the "volume" alias and
// would overwrite Search Volume Profile. Every extra header below is checked
// against ALIAS_SUBSTRINGS at startup — add a colliding one and this exits.
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import * as XLSX from "xlsx";

const TAG = "[keywords:xlsx]";

// Substrings app/lib/excel.ts matches on. A non-mapped header containing any of
// these gets hijacked into a mapped field.
const ALIAS_SUBSTRINGS = [
  "keyword", "keywords", "targetkeyword",
  "strategyintentcluster", "strategy", "intentcluster", "intent",
  "searchvolumeprofile", "searchvolume", "volume",
  "rankingdifficulty", "difficulty", "kd",
  "assettypeblueprint", "assettype", "asset",
  "functionalcorecategory", "category", "corecategory",
];

/** The six headers the studio maps, in order. Must match excel.ts aliases. */
const MAPPED = [
  "Keyword",
  "Strategy / Intent Cluster",
  "Search Volume Profile",
  "Ranking Difficulty",
  "Asset Type Blueprint",
  "Functional Core Category",
];

/** Harvest evidence. Preserved in `extra`; none may collide with an alias. */
const EXTRA = [
  // What to do about this keyword, and what it is worth. These lead the extras
  // because they are what a reviewer decides from; everything after them is the
  // evidence that justifies them.
  "Action",
  "Expected Clicks / mo",
  "Our Position",
  "Our URL",
  "Trend",
  "Peak Window",
  "Publish By",
  "Ranking URL 1",
  "Ranking URL 2",
  "Ranking URL 3",
  "Weak Results",
  "Evidence Type",
  "Source URL",
  "Source Domain",
  "Demand Rank",
  "Cluster ID",
  "Bucket",
  "Priority Score",
  "Gate Failed",
];

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Fail loudly at startup rather than silently corrupting a mapped column. */
function assertNoHeaderCollisions() {
  const bad = EXTRA.filter((h) => ALIAS_SUBSTRINGS.some((a) => norm(h).includes(a)));
  if (bad.length) {
    console.error(
      `${TAG} ✖ these extra columns collide with the studio's header matcher and ` +
        `would overwrite a mapped field: ${bad.join(", ")}`
    );
    process.exit(1);
  }
}

// ── CSV parsing ──────────────────────────────────────────────────────────────
// RFC-4180: double quotes, "" for a literal quote, newlines allowed inside
// quoted fields. Hand-rolled because the project has no CSV dependency and the
// inventory routinely contains commas inside `ranking_urls` and `est_volume`.

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  // Strip a BOM; Excel-authored CSVs carry one and it corrupts the first header.
  const src = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;

  for (let i = 0; i < src.length; i++) {
    const c = src[i];

    if (quoted) {
      if (c === '"') {
        if (src[i + 1] === '"') { field += '"'; i++; }
        else quoted = false;
      } else field += c;
      continue;
    }

    if (c === '"') { quoted = true; continue; }
    if (c === ",") { row.push(field); field = ""; continue; }
    if (c === "\r") continue;
    if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; continue; }
    field += c;
  }
  // Trailing field / row when the file doesn't end in a newline.
  if (field !== "" || row.length) { row.push(field); rows.push(row); }

  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

/** CSV rows → objects keyed by normalized header, so header casing is tolerated. */
function toRecords(rows) {
  if (!rows.length) return [];
  const headers = rows[0].map((h) => norm(h.trim()));
  return rows.slice(1).map((cells) => {
    const rec = {};
    headers.forEach((h, i) => { rec[h] = (cells[i] ?? "").trim(); });
    return rec;
  });
}

// ── Row shaping ──────────────────────────────────────────────────────────────

/** Top 3 live URLs. Pipe-separated in the CSV; query strings stripped. */
function rankingUrls(raw) {
  const urls = (raw || "")
    .split("|")
    .map((u) => u.trim().split("?")[0])
    .filter(Boolean);
  return [urls[0] || "", urls[1] || "", urls[2] || ""];
}

/** "200-600 EST" — band plus its provenance, never a bare invented number. */
function volumeProfile(rec) {
  const band = rec.estvolume || "";
  const src = (rec.volumesource || "EST").toUpperCase();
  if (!band) return src === "TOOL" ? "" : "unknown EST";
  return `${band} ${src}`;
}

/** "winnable · 4 weak in top 10" — the bucket plus the evidence behind it. */
function difficulty(rec) {
  const bucket = rec.bucket || "";
  const weak = rec.weaknesscount;
  if (!bucket && !weak) return "";
  if (!weak) return bucket;
  return `${bucket} · ${weak} weak in top 10`;
}

/**
 * Functional core category. Prefer the explicit column; otherwise fall back to
 * the cluster's primary keyword — the first row carrying that cluster_id, which
 * is the primary by the skill's own convention.
 */
function categoryFor(rec, clusterPrimary) {
  return rec.category || clusterPrimary.get(rec.clusterid) || "";
}

function buildRow(rec, clusterPrimary) {
  const [u1, u2, u3] = rankingUrls(rec.rankingurls);
  const cluster = rec.clusterid || "";
  const intent = rec.intent || "";
  return {
    Keyword: rec.keyword || "",
    "Strategy / Intent Cluster": [cluster, intent].filter(Boolean).join(" · "),
    "Search Volume Profile": volumeProfile(rec),
    "Ranking Difficulty": difficulty(rec),
    "Asset Type Blueprint": rec.pagetyperequired || "",
    "Functional Core Category": categoryFor(rec, clusterPrimary),
    Action: rec.action || "",
    "Expected Clicks / mo": rec.expectedclicks || "",
    "Our Position": rec.ownposition || "",
    "Our URL": rec.ownurl || "",
    Trend: rec.trend || "",
    "Peak Window": rec.peakwindow || "",
    "Publish By": rec.publishby || "",
    "Ranking URL 1": u1,
    "Ranking URL 2": u2,
    "Ranking URL 3": u3,
    "Weak Results": rec.weaknesscount ? `${rec.weaknesscount}/10` : "",
    "Evidence Type": rec.evidencetype || "",
    "Source URL": rec.sourceurl || "",
    "Source Domain": rec.sourcedomain || "",
    "Demand Rank": rec.demandrank || "",
    "Cluster ID": cluster,
    Bucket: rec.bucket || "",
    "Priority Score": rec.priorityscore || "",
    "Gate Failed": rec.gatefailed || "",
  };
}

/** Survivors: passed every gate and weren't bucketed out. */
const survived = (rec) => !rec.gatefailed && rec.bucket !== "do-not-attempt";

/**
 * Expected clicks descending, priority score as the tie-break and the fallback.
 *
 * Sorting by priority score alone re-ranks a keyword up for having a big volume
 * band even when nothing weak sits in its top 10 — the volume trap the gates
 * exist to catch. Expected clicks already carries win probability inside it, so
 * a band-5 keyword with zero weak results lands at 0 and sorts where it belongs.
 * Rows with no clicks figure (older inventories, or anything the run couldn't
 * band) fall back to priority score rather than dropping to the bottom.
 */
const byExpectedClicksDesc = (a, b) => {
  const ca = Number(a["Expected Clicks / mo"]);
  const cb = Number(b["Expected Clicks / mo"]);
  const ea = Number.isFinite(ca) && a["Expected Clicks / mo"] !== "";
  const eb = Number.isFinite(cb) && b["Expected Clicks / mo"] !== "";
  if (ea && eb && ca !== cb) return cb - ca;
  if (ea !== eb) return ea ? -1 : 1;
  return (Number(b["Priority Score"]) || 0) - (Number(a["Priority Score"]) || 0);
};

function sheetFrom(rows) {
  // Pin the header order — json_to_sheet otherwise derives it from the first
  // object, which drops columns that are empty in row 1.
  return XLSX.utils.json_to_sheet(rows, { header: [...MAPPED, ...EXTRA] });
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main() {
  assertNoHeaderCollisions();

  const input = process.argv[2];
  if (!input) {
    console.error(`${TAG} usage: npm run keywords:xlsx -- <path/to/keyword-inventory.csv>`);
    process.exit(1);
  }

  const csvPath = path.resolve(process.cwd(), input);
  if (!existsSync(csvPath)) {
    console.error(`${TAG} ✖ no such file: ${csvPath}`);
    process.exit(1);
  }

  const records = toRecords(parseCsv(readFileSync(csvPath, "utf8")));
  if (!records.length) {
    console.error(`${TAG} ✖ ${path.basename(csvPath)} has a header but no data rows`);
    process.exit(1);
  }
  if (!("keyword" in records[0])) {
    console.error(`${TAG} ✖ no "keyword" column found. Header must match references/output-templates.md`);
    process.exit(1);
  }

  // First row of each cluster is its primary keyword — used as the category
  // fallback so the studio's Functional Core Category is never blank.
  const clusterPrimary = new Map();
  for (const r of records) {
    if (r.clusterid && !clusterPrimary.has(r.clusterid)) clusterPrimary.set(r.clusterid, r.keyword);
  }

  const all = records.map((r) => buildRow(r, clusterPrimary));
  const keep = records.filter(survived).map((r) => buildRow(r, clusterPrimary)).sort(byExpectedClicksDesc);

  if (!keep.length) {
    console.error(
      `${TAG} ✖ every one of the ${records.length} rows failed a gate or was bucketed ` +
        `do-not-attempt — the studio would upload an empty sheet. Nothing written.`
    );
    process.exit(1);
  }

  const wb = XLSX.utils.book_new();
  // "Keywords" MUST be first: app/lib/excel.ts reads SheetNames[0] and nothing else.
  XLSX.utils.book_append_sheet(wb, sheetFrom(keep), "Keywords");
  XLSX.utils.book_append_sheet(wb, sheetFrom(all.sort(byExpectedClicksDesc)), "All Keywords");

  const out = path.join(path.dirname(csvPath), "keywords.xlsx");
  XLSX.writeFile(wb, out);

  const cut = records.length - keep.length;
  const clusters = new Set(records.filter(survived).map((r) => r.clusterid).filter(Boolean)).size;
  console.log(`${TAG} ✓ ${out}`);
  console.log(
    `${TAG}   ${keep.length} survivors (${clusters} clusters) on "Keywords" · ` +
      `${records.length} rows incl. ${cut} cut on "All Keywords"`
  );
}

main();

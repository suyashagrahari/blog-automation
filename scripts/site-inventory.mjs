#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// content/batches/**  +  content/keywords/**  →  content/keywords/site-inventory.csv
//
// What SubhSandesh has already written, and which keywords a past harvest run
// shortlisted but nobody ever drafted.
//
//   npm run keywords:inventory
//
// The `keyword-harvest` skill runs this in Phase 1, before it searches anything.
// Without it a run has no idea what the site already covers, so it recommends
// keywords that already have a page (the site competes with itself) and it
// cannot see the cheapest traffic on the board — a drafted page sitting at
// position 8 that needs an edit, not a new post.
//
// This reads only the repo. It cannot know whether a drafted post is LIVE — the
// batch JSON carries no publish state, that lives in Strapi — so `live_url` is
// the URL a published post WOULD have, and the skill confirms it with a
// site: search. Treated as fact it would be a lie; labelled, it is a shortlist
// of things to check.
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import path from "node:path";

const TAG = "[keywords:inventory]";
const ROOT = process.cwd();
const BATCHES = path.join(ROOT, "content", "batches");
const KEYWORDS = path.join(ROOT, "content", "keywords");
const OUT = path.join(KEYWORDS, "site-inventory.csv");
const SITE = "https://subhsandesh.in";

const HEADER = [
  "primary_keyword",
  "slug",
  "live_url",
  "batch",
  "drafted_at",
  "secondary_keywords",
  "shortlisted_in",
];

// ── helpers ──────────────────────────────────────────────────────────────────

const dirs = (p) =>
  existsSync(p) ? readdirSync(p).filter((d) => statSync(path.join(p, d)).isDirectory()) : [];

const readJson = (p) => {
  try {
    return JSON.parse(readFileSync(p, "utf8"));
  } catch {
    return null;
  }
};

/** Lowercase, strip punctuation, drop filler words — for duplicate detection. */
const STOP = new Set(["a", "an", "the", "for", "to", "of", "in", "on", "with", "and", "your", "you"]);
const tokens = (s) =>
  new Set(
    String(s || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((t) => t && !STOP.has(t))
  );

// Two keywords that differ only by language are NOT duplicates — they are
// separate SERPs with separate incumbents, and merging them destroys the single
// best opportunity a multilingual market offers. A 2026-08-25 rakhi run scored
// "…wishes for brother in gujarati" against "…in marathi" at 0.67 and would have
// merged them; the Gujarati SERP turned out to have no major brand on it at all.
const LANGUAGES = new Set([
  "hindi", "marathi", "gujarati", "bengali", "tamil", "telugu", "kannada",
  "punjabi", "malayalam", "urdu", "odia", "oriya", "assamese", "sanskrit",
  "english", "hinglish", "nepali", "bhojpuri", "konkani", "sindhi",
]);

const languagesIn = (s) => new Set([...tokens(s)].filter((t) => LANGUAGES.has(t)));

/**
 * Jaccard overlap of two keyword phrases. 1 = identical token sets.
 * Returns 0 when the two name different languages — whatever else they share,
 * they cannot be one page.
 */
function overlap(a, b) {
  const la = languagesIn(a);
  const lb = languagesIn(b);
  // Different named languages, or one names a language and the other doesn't:
  // separate pages either way.
  if (la.size || lb.size) {
    const same = la.size === lb.size && [...la].every((l) => lb.has(l));
    if (!same) return 0;
  }
  const A = tokens(a);
  const B = tokens(b);
  if (!A.size || !B.size) return 0;
  let hit = 0;
  for (const t of A) if (B.has(t)) hit++;
  return hit / (A.size + B.size - hit);
}

const csvCell = (v) => {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

// ── what we have drafted ─────────────────────────────────────────────────────

function draftedPosts() {
  const out = [];
  for (const batch of dirs(BATCHES).sort()) {
    const blogsDir = path.join(BATCHES, batch, "blogs");
    if (!existsSync(blogsDir)) continue;
    for (const file of readdirSync(blogsDir).filter((f) => f.endsWith(".json")).sort()) {
      const j = readJson(path.join(blogsDir, file));
      const article = j?.article;
      const meta = j?.batchMeta;
      // The fixture batch carries deliberately broken files; skip anything
      // without the two fields that make a row meaningful.
      if (!article?.slug || !meta?.keyword) continue;
      out.push({
        primary_keyword: meta.keyword,
        slug: article.slug,
        live_url: `${SITE}/blog/${article.slug}`,
        batch,
        drafted_at: (meta.generatedAt || "").slice(0, 10),
        // `keywords` is an array in some batches and a comma-joined string in
        // others — normalise to one pipe-separated cell either way.
        secondary_keywords: (Array.isArray(article.keywords)
          ? article.keywords
          : String(article.keywords || "").split(",")
        )
          .map((k) => k.trim())
          .filter(Boolean)
          .join(" | "),
      });
    }
  }
  return out;
}

// ── what past runs shortlisted ───────────────────────────────────────────────

/** Minimal CSV reader — enough for the inventory files this repo writes. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  const src = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quoted) {
      if (c === '"') {
        if (src[i + 1] === '"') { field += '"'; i++; } else quoted = false;
      } else field += c;
      continue;
    }
    if (c === '"') { quoted = true; continue; }
    if (c === ",") { row.push(field); field = ""; continue; }
    if (c === "\r") continue;
    if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; continue; }
    field += c;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((c) => c.trim() !== ""));
}

/** Survivors from every past run: keyword → { runs, bucket, score }. */
function shortlistedKeywords() {
  const map = new Map();
  for (const run of dirs(KEYWORDS).sort()) {
    const csv = path.join(KEYWORDS, run, "keyword-inventory.csv");
    if (!existsSync(csv)) continue;
    const rows = parseCsv(readFileSync(csv, "utf8"));
    if (rows.length < 2) continue;
    const head = rows[0].map((h) => h.trim().toLowerCase().replace(/[^a-z0-9]/g, ""));
    const col = (n) => head.indexOf(n);
    const [kw, gate, bucket, score] = [col("keyword"), col("gatefailed"), col("bucket"), col("priorityscore")];
    if (kw < 0) continue;
    for (const r of rows.slice(1)) {
      const keyword = (r[kw] || "").trim();
      if (!keyword) continue;
      const failed = gate >= 0 ? (r[gate] || "").trim() : "";
      const buck = bucket >= 0 ? (r[bucket] || "").trim() : "";
      if (failed || buck === "do-not-attempt") continue; // survivors only
      const prev = map.get(keyword.toLowerCase());
      if (prev) prev.runs.push(run);
      else map.set(keyword.toLowerCase(), { keyword, runs: [run], bucket: buck, score: score >= 0 ? r[score] : "" });
    }
  }
  return map;
}

// ── main ─────────────────────────────────────────────────────────────────────

function main() {
  const posts = draftedPosts();
  if (!posts.length) {
    console.error(`${TAG} ✖ no drafted posts found under content/batches/*/blogs/`);
    process.exit(1);
  }

  const shortlisted = shortlistedKeywords();
  const draftedKeys = new Set(posts.map((p) => p.primary_keyword.toLowerCase()));

  // Attribute each drafted post back to the run(s) that shortlisted its keyword.
  for (const p of posts) {
    const hit = shortlisted.get(p.primary_keyword.toLowerCase());
    p.shortlisted_in = hit ? hit.runs.join(" | ") : "";
  }

  if (!existsSync(KEYWORDS)) {
    console.error(`${TAG} ✖ ${KEYWORDS} does not exist`);
    process.exit(1);
  }
  writeFileSync(
    OUT,
    [HEADER.join(","), ...posts.map((p) => HEADER.map((h) => csvCell(p[h])).join(","))].join("\n") + "\n",
    "utf8"
  );

  // ── the three findings a harvest run needs before it searches anything ────

  // 1. Shortlisted, never drafted. The backlog nobody worked.
  const unbuilt = [...shortlisted.values()].filter((s) => !draftedKeys.has(s.keyword.toLowerCase()));

  // 2. Drafted without ever being shortlisted — written on instinct, so no SERP
  //    evidence exists for them and they are the likeliest to be underperforming.
  const unresearched = posts.filter((p) => !p.shortlisted_in);

  // 3. Near-duplicate primary keywords across batches. Two posts aimed at one
  //    SERP is the site competing with itself; Google picks one and buries the
  //    other. This is the check Phase 8 clustering cannot do, because it only
  //    ever sees the new list.
  const collisions = [];
  for (let i = 0; i < posts.length; i++) {
    for (let j = i + 1; j < posts.length; j++) {
      const score = overlap(posts[i].primary_keyword, posts[j].primary_keyword);
      if (score >= 0.6) collisions.push({ score, a: posts[i], b: posts[j] });
    }
  }
  collisions.sort((x, y) => y.score - x.score);

  const batchCount = new Set(posts.map((p) => p.batch)).size;
  console.log(`${TAG} ✓ ${OUT}`);
  console.log(`${TAG}   ${posts.length} drafted posts across ${batchCount} batches · ${shortlisted.size} keywords shortlisted by past runs`);
  console.log("");

  console.log(`── Shortlisted but never drafted (${unbuilt.length}) ─────────────────────`);
  for (const s of unbuilt.slice(0, 40)) console.log(`  · ${s.keyword}  [${s.runs.join(", ")}${s.bucket ? " · " + s.bucket : ""}]`);
  if (unbuilt.length > 40) console.log(`  … and ${unbuilt.length - 40} more — see the run CSVs`);
  console.log("");

  console.log(`── Drafted with no harvest evidence behind it (${unresearched.length}) ───`);
  for (const p of unresearched.slice(0, 40)) console.log(`  · ${p.primary_keyword}  [${p.batch}]`);
  if (unresearched.length > 40) console.log(`  … and ${unresearched.length - 40} more`);
  console.log("");

  console.log(`── Own-site keyword collisions, overlap ≥ 0.6 (${collisions.length}) ─────`);
  for (const c of collisions.slice(0, 25)) {
    console.log(`  ${c.score.toFixed(2)}  ${c.a.primary_keyword}  [${c.a.batch}]`);
    console.log(`        ↕  ${c.b.primary_keyword}  [${c.b.batch}]`);
  }
  if (collisions.length > 25) console.log(`  … and ${collisions.length - 25} more`);
  if (!collisions.length) console.log("  none");
  console.log("");
  console.log(`${TAG} live status is NOT in this repo — confirm each live_url with a site: search before acting.`);
}

main();

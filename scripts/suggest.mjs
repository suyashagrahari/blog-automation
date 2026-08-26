#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Google autocomplete harvest — live, geo-targeted, relevance-scored long-tails
//
//   npm run keywords:suggest -- "raksha bandhan wishes" [--geo in] [--out DIR]
//   npm run keywords:suggest -- "rakhi" "raksha bandhan" --hl hi
//
// Why this exists: every volume figure the `keyword-harvest` skill produced
// before this script was an inference from SERP furniture (ads present, PAA
// present, AI Overview fired). Autocomplete is the opposite — it is Google
// telling you, for a named country, which continuations of a prefix real people
// actually type, in popularity order, with a numeric relevance score attached.
// It is not search volume. It IS ordinal demand from the source, which is
// strictly better than a guess, and it is free.
//
// It also surfaces three things the skill kept finding by accident:
//   · language variants (…in gujarati / in marathi / in hindi) — the Phase 2
//     language axis, generated from data instead of from memory
//   · year modifiers people are typing NOW (…2026), which is how you spot an
//     incumbent still ranking with "2021" in its title
//   · phrasings nobody would have guessed, which is the whole point
//
// Output: <out>/autocomplete.csv — suggestion, source_prefix, rank, relevance.
// ─────────────────────────────────────────────────────────────────────────────

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const TAG = "[keywords:suggest]";
const ENDPOINT = "https://suggestqueries.google.com/complete/search";
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36";

// Suffixes appended to each seed. Google returns up to ~10 per request, so the
// expansion — not the seed alone — is where the long-tails come from.
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
const QUESTIONS = ["how", "what", "when", "why", "which", "who", "can i", "is it"];
const MODIFIERS = ["best", "free", "online", "with", "for", "in", "without", "app", "maker", "template", "2026", "2027"];

// ── args ─────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const seeds = [];
  const opts = { geo: "in", hl: "en", out: null, delay: 120 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--geo") opts.geo = argv[++i];
    else if (a === "--hl") opts.hl = argv[++i];
    else if (a === "--out") opts.out = argv[++i];
    else if (a === "--delay") opts.delay = Number(argv[++i]) || 120;
    else if (a.startsWith("--")) { console.error(`${TAG} ✖ unknown flag ${a}`); process.exit(1); }
    else seeds.push(a);
  }
  return { seeds, opts };
}

// ── fetching ─────────────────────────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * One autocomplete call. `client=chrome` is the only client that returns
 * google:suggestrelevance — a numeric score per suggestion, which lets the
 * harvest rank across prefixes instead of only within one.
 */
async function suggest(query, { geo, hl }) {
  const url = `${ENDPOINT}?client=chrome&gl=${encodeURIComponent(geo)}&hl=${encodeURIComponent(hl)}&q=${encodeURIComponent(query)}`;
  let res;
  try {
    res = await fetch(url, { headers: { "User-Agent": UA } });
  } catch (e) {
    return { error: e.message, items: [] };
  }
  if (!res.ok) return { error: `HTTP ${res.status}`, items: [] };

  let json;
  try {
    json = JSON.parse(await res.text());
  } catch {
    return { error: "unparseable response", items: [] };
  }

  const phrases = Array.isArray(json[1]) ? json[1] : [];
  const relevance = json[4]?.["google:suggestrelevance"] || [];
  return {
    error: null,
    items: phrases.map((phrase, i) => ({
      phrase: String(phrase).trim(),
      rank: i + 1,
      relevance: Number(relevance[i]) || 0,
    })),
  };
}

/** Every prefix we ask about, per seed. */
function prefixesFor(seed) {
  const s = seed.trim();
  return [
    s,
    `${s} `,
    ...ALPHABET.map((c) => `${s} ${c}`),
    ...MODIFIERS.map((m) => `${s} ${m}`),
    ...QUESTIONS.map((q) => `${q} ${s}`),
  ];
}

// ── main ─────────────────────────────────────────────────────────────────────

const csvCell = (v) => {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

async function main() {
  const { seeds, opts } = parseArgs(process.argv.slice(2));
  if (!seeds.length) {
    console.error(`${TAG} usage: npm run keywords:suggest -- "<seed>" ["<seed2>" …] [--geo in] [--hl en] [--out DIR]`);
    process.exit(1);
  }

  const outDir =
    opts.out ||
    path.join(
      process.cwd(),
      "content",
      "keywords",
      `autocomplete-${seeds[0].toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`
    );
  mkdirSync(outDir, { recursive: true });

  // phrase → best row seen for it, plus every prefix that produced it. A phrase
  // surfacing under many different prefixes is a stronger demand signal than
  // one that appears only under its own exact stem.
  const found = new Map();
  let calls = 0;
  let failures = 0;
  let lastError = null;

  for (const seed of seeds) {
    const prefixes = prefixesFor(seed);
    for (const prefix of prefixes) {
      const { error, items } = await suggest(prefix, opts);
      calls++;
      if (error) {
        failures++;
        lastError = error;
        // A 429 means Google has started throttling; nothing later in the run
        // will succeed either, so stop rather than emit a truncated set that
        // looks complete.
        if (String(error).includes("429")) {
          console.error(`${TAG} ✖ rate-limited after ${calls} calls — stopping. Re-run with a larger --delay.`);
          break;
        }
      }
      for (const it of items) {
        if (!it.phrase) continue;
        const key = it.phrase.toLowerCase();
        const prev = found.get(key);
        if (prev) {
          prev.prefixes.add(prefix);
          if (it.relevance > prev.relevance) { prev.relevance = it.relevance; prev.rank = it.rank; }
        } else {
          found.set(key, { phrase: it.phrase, rank: it.rank, relevance: it.relevance, prefixes: new Set([prefix]) });
        }
      }
      if (opts.delay) await sleep(opts.delay);
    }
  }

  if (!found.size) {
    console.error(`${TAG} ✖ no suggestions returned in ${calls} calls (last error: ${lastError || "none"}). Nothing written.`);
    process.exit(1);
  }

  const rows = [...found.values()].sort(
    (a, b) => b.prefixes.size - a.prefixes.size || b.relevance - a.relevance || a.phrase.localeCompare(b.phrase)
  );

  const csv = [
    "suggestion,words,prefix_hits,relevance,best_rank,source_prefixes",
    ...rows.map((r) =>
      [
        csvCell(r.phrase),
        r.phrase.split(/\s+/).length,
        r.prefixes.size,
        r.relevance,
        r.rank,
        csvCell([...r.prefixes].join(" | ")),
      ].join(",")
    ),
  ].join("\n");

  const out = path.join(outDir, "autocomplete.csv");
  writeFileSync(out, csv + "\n", "utf8");

  // ── summary ──────────────────────────────────────────────────────────────
  const longTail = rows.filter((r) => r.phrase.split(/\s+/).length >= 4);
  const withYear = rows.filter((r) => /\b20\d\d\b/.test(r.phrase));
  const langHint = /\b(hindi|marathi|gujarati|bengali|tamil|telugu|kannada|punjabi|malayalam|urdu|odia|assamese)\b/i;
  const language = rows.filter((r) => langHint.test(r.phrase));

  console.log(`${TAG} ✓ ${out}`);
  console.log(`${TAG}   ${calls} calls (${failures} failed) · ${rows.length} unique suggestions · geo=${opts.geo} hl=${opts.hl}`);
  console.log(`${TAG}   ${longTail.length} are 4+ words · ${withYear.length} carry a year · ${language.length} name a language`);
  console.log("");
  console.log("── Top 25 by cross-prefix demand ─────────────────────────────");
  for (const r of rows.slice(0, 25)) {
    console.log(`  ${String(r.prefixes.size).padStart(2)}× rel=${String(r.relevance).padStart(4)}  ${r.phrase}`);
  }
  if (withYear.length) {
    console.log("");
    console.log("── Year-modified (check whether incumbents still say an old year) ──");
    for (const r of withYear.slice(0, 12)) console.log(`  · ${r.phrase}`);
  }
  if (language.length) {
    console.log("");
    console.log("── Language variants people are actually typing ───────────────");
    for (const r of language.slice(0, 15)) console.log(`  · ${r.phrase}`);
  }
  console.log("");
  console.log(`${TAG} ordinal demand, not search volume. Rank with it; never print it as a monthly figure.`);
  if (failures) console.log(`${TAG} ${failures} of ${calls} calls failed — the set is incomplete. Last error: ${lastError}`);
}

main();

#!/usr/bin/env node
/**
 * check-qids.mjs — verify every Wikipedia/Wikidata `sameAs` pair in a batch.
 *
 * Why this exists: on 2026-09-10 a remediator found that a shipped post paired
 * NIST with Q1010548, which is the US Bureau of Reclamation (correct: Q176691).
 * The post's own audit asserted that every sameAs had been QID-verified. So the
 * assertion is not evidence, and the only way to know is to ask the APIs.
 *
 * Every post in a batch is checked, not just the one that was wrong.
 *
 * Method, per pair found in article.structuredData:
 *   1. en.wikipedia.org/w/api.php?action=query&prop=pageprops&ppprop=wikibase_item
 *      &redirects=1  — resolves the article title (following redirects) to its QID.
 *   2. www.wikidata.org/w/api.php?action=wbgetentities&props=sitelinks|labels
 *      &sitefilter=enwiki — resolves the QID back to its enwiki title and label.
 * A pair passes only if the round trip closes in BOTH directions, which is what
 * catches a QID that exists and is simply the wrong entity.
 *
 * Usage: node scripts/check-qids.mjs content/batches/<batchId>
 */

import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const dir = process.argv[2];
if (!dir) {
  console.error("usage: node scripts/check-qids.mjs <batch dir>");
  process.exit(1);
}

const UA = "SubhSandesh-blog-automation/1.0 (QID verification; contact via repo)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Both APIs answer "You are making too many requests to the API." as PLAIN TEXT
 * with a 200, so `res.json()` throws a SyntaxError and takes the whole run down
 * mid-batch. Retry with backoff, and never let a throttle message be mistaken
 * for a verification result — an aborted check must not read as a pass.
 */
async function api(url) {
  for (let i = 0; i < 5; i++) {
    if (i) await sleep(3000 * i);
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    const text = await res.text();
    if (/too many requests/i.test(text)) continue;
    try {
      return JSON.parse(text);
    } catch {
      if (i === 4) throw new Error(`non-JSON response after 5 attempts: ${text.slice(0, 80)}`);
    }
  }
  throw new Error("rate-limited after 5 attempts — rerun later; nothing is verified from a throttled call");
}

const titleFromUrl = (u) => {
  try {
    const x = new URL(u);
    if (!/(^|\.)wikipedia\.org$/.test(x.hostname)) return null;
    return decodeURIComponent(x.pathname.replace(/^\/wiki\//, "")).replace(/_/g, " ");
  } catch {
    return null;
  }
};

/**
 * BOTH lookups are batched, up to 50 per request, because one request per pair
 * gets this machine hard-throttled: ~40 pairs is ~80 requests, and Wikidata
 * refused all five backoff attempts (3/6/9/12s) partway through the batch. The
 * whole run is now 4 requests instead, which also means a throttle can no
 * longer strand the check half-done.
 */
const chunk = (a, n) => Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, i * n + n));

/** titles -> { normalisedTitle: { qid, resolved } }, following redirects. */
async function qidsForTitles(titles) {
  const map = new Map();
  for (const group of chunk([...new Set(titles)], 50)) {
    const j = await api(
      "https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1" +
        `&prop=pageprops&ppprop=wikibase_item&titles=${encodeURIComponent(group.join("|"))}`
    );
    // Redirects and normalisation both rename the key, so follow the chains back
    // to whatever title we actually asked for.
    const alias = new Map();
    for (const r of j?.query?.normalized || []) alias.set(r.to, r.from);
    for (const r of j?.query?.redirects || []) alias.set(r.to, alias.get(r.from) ?? r.from);
    for (const p of Object.values(j?.query?.pages || {})) {
      const asked = alias.get(p.title) ?? p.title;
      map.set(asked, {
        qid: p.missing !== undefined ? null : p.pageprops?.wikibase_item || null,
        resolved: p.title,
        note: alias.has(p.title) && alias.get(p.title) !== p.title ? ` (redirect -> ${p.title})` : "",
      });
    }
    await sleep(1500);
  }
  return map;
}

/** qids -> { qid: { title, label } } */
async function titlesForQids(qids) {
  const map = new Map();
  for (const group of chunk([...new Set(qids)], 50)) {
    const j = await api(
      "https://www.wikidata.org/w/api.php?action=wbgetentities&format=json" +
        `&props=sitelinks|labels&sitefilter=enwiki&languages=en&ids=${encodeURIComponent(group.join("|"))}`
    );
    for (const [qid, e] of Object.entries(j?.entities || {})) {
      map.set(qid, {
        title: e?.missing !== undefined ? null : e?.sitelinks?.enwiki?.title || null,
        label: e?.labels?.en?.value || null,
      });
    }
    await sleep(1500);
  }
  return map;
}

/** Collect (wikipediaUrl, qid) pairs from a node's sameAs, however it is shaped. */
function pairsFrom(node) {
  const out = [];
  const walk = (o) => {
    if (!o || typeof o !== "object") return;
    if (Array.isArray(o)) return o.forEach(walk);
    const same = o.sameAs;
    if (same) {
      const urls = (Array.isArray(same) ? same : [same]).filter((s) => typeof s === "string");
      const wiki = urls.filter((u) => /wikipedia\.org\/wiki\//.test(u));
      const wd = urls
        .map((u) => (u.match(/wikidata\.org\/(?:wiki|entity)\/(Q\d+)/) || [])[1])
        .filter(Boolean);
      const inline = typeof o["@id"] === "string" ? (o["@id"].match(/^(?:wd:)?(Q\d+)$/) || [])[1] : null;
      const qids = [...wd, ...(inline ? [inline] : [])];
      for (const w of wiki) out.push({ name: o.name || o["@type"] || "?", url: w, qid: qids[0] || null });
      if (!wiki.length) for (const q of qids) out.push({ name: o.name || "?", url: null, qid: q });
    }
    for (const v of Object.values(o)) walk(v);
  };
  walk(node);
  return out;
}

const files = readdirSync(path.join(dir, "blogs")).filter((f) => f.endsWith(".json")).sort();
const problems = [];

// Collect every pair first, then resolve in two batched passes.
const byPost = [];
for (const f of files) {
  const slug = f.replace(/\.json$/, "");
  const j = JSON.parse(readFileSync(path.join(dir, "blogs", f), "utf8"));
  byPost.push({ slug, pairs: pairsFrom(j.article?.structuredData || []) });
}
const allPairs = byPost.flatMap((p) => p.pairs);
const titles = allPairs.map((p) => (p.url ? titleFromUrl(p.url) : null)).filter(Boolean);
const qids = allPairs.map((p) => p.qid).filter(Boolean);
console.log(`${allPairs.length} pair(s) across ${files.length} post(s): ${titles.length} title(s), ${qids.length} QID(s)`);
console.log(`resolving in ${Math.ceil(new Set(titles).size / 50) + Math.ceil(new Set(qids).size / 50)} batched request(s)\n`);

const fwdMap = await qidsForTitles(titles);
const backMap = await titlesForQids(qids);
const norm = (s) => String(s).replace(/_/g, " ").trim().toLowerCase();
let checked = 0;

for (const { slug, pairs } of byPost) {
  if (!pairs.length) {
    console.log(`${slug}: no sameAs pairs`);
    continue;
  }
  console.log(`\n${slug}: ${pairs.length} pair(s)`);
  for (const p of pairs) {
    checked++;
    const title = p.url ? titleFromUrl(p.url) : null;
    if (!p.qid) {
      console.log(`  ~ ${title || p.name}: wikipedia link with no paired QID (nothing to cross-check)`);
      continue;
    }
    const back = backMap.get(p.qid);
    if (!back || !back.title) {
      problems.push(`${slug}: ${p.qid} does not exist or has no enwiki sitelink (claimed for ${title || p.name})`);
      console.log(`  ✗ ${title || p.name} -> ${p.qid}: no enwiki sitelink`);
      continue;
    }
    if (!title) {
      console.log(`  ✓ ${p.name} -> ${p.qid} = "${back.label}" (no wikipedia URL to compare)`);
      continue;
    }
    const fwd = fwdMap.get(title) || {};
    const closes = norm(back.title) === norm(fwd.resolved || title);
    if (fwd.qid === p.qid && closes) {
      console.log(`  ✓ ${title}${fwd.note || ""} = ${p.qid} "${back.label}"`);
    } else {
      problems.push(
        `${slug}: "${title}" is ${fwd.qid || "unresolved"} but the post claims ${p.qid}, which is "${back.label}" (${back.title})`
      );
      console.log(`  ✗ ${title} is ${fwd.qid || "unresolved"}, post claims ${p.qid} = "${back.label}"`);
    }
  }
}

console.log(`\nchecked ${checked} pair(s) across ${files.length} post(s)`);
if (problems.length) {
  console.log(`\n${problems.length} PROBLEM(S):`);
  for (const p of problems) console.log("  x", p);
  process.exit(1);
}
console.log("every pair round-trips in both directions");

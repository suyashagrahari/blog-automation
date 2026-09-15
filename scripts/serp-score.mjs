#!/usr/bin/env node
/**
 * serp-score.mjs — Gate 2 screening that measures COMMERCIAL INTENT and
 * SERP OVERLAP, the two things a hostname list cannot see.
 *
 * Why this exists. The 2026-09-15-virtual-gift-30 wave-2 screen matched a fixed
 * list of hostnames (amazon, flipkart, etsy, igp, winni, fnp). Agents who read
 * their own SERPs by hand scored them worse, every time:
 *
 *   romantic gift for husband birthday   screen 3/10   by hand 5 storefronts + 4 listicles
 *   online creative gift ideas for gf    screen 3/10   by hand 5/10
 *   long distance relationship gift website  screen 1/10   by hand 5/10
 *
 * The last one is the instructive case. Only one result was a storefront by
 * hostname. Four more were articles at editorial URLs whose every product link
 * is `amazon.com/s?k=...&tag=` — an affiliate storefront wearing a blog post.
 * The buy button was one hop downstream of the URL the screen inspected, so the
 * screen scored a 6/10-ecommerce SERP as 1/10 and a row got planned that had to
 * be aborted after the fact.
 *
 * So this script does two things the old screen did not:
 *   1. classifies by URL SHAPE, which catches a storefront you have never heard
 *      of, and optionally FETCHES each result to count outbound affiliate links
 *   2. computes URL overlap against keywords you have already claimed, which is
 *      a different failure from commercial intent and invisible to it
 *
 * Usage:
 *   node scripts/serp-score.mjs "<keyword>" [--against "kw1" "kw2" ...] [--deep]
 *
 * --deep fetches each organic result and counts affiliate/product links in it.
 *        Slower, and the only way to catch the case above.
 */
import { execFileSync } from "node:child_process";

const argv = process.argv.slice(2);
const deep = argv.includes("--deep");
const ai = argv.indexOf("--against");
const keyword = argv.filter((a) => !a.startsWith("--"))[0];
const against = ai >= 0 ? argv.slice(ai + 1).filter((a) => !a.startsWith("--")) : [];
if (!keyword) { console.error('usage: serp-score.mjs "<keyword>" [--against "kw" ...] [--deep]'); process.exit(2); }

// A URL is transactional if its PATH looks like a shop, regardless of host.
const TXN_PATH = /\/(product|products|collections|shop|store|category|catalogue|buy|gifts?)\/|\/s\?k=|\/q\/|\/market\/|\/dp\/|\/itm\//i;
// Outbound shapes that mean "this page exists to send you to a shop".
const AFFILIATE = /amazon\.[a-z.]+\/(s\?k=|dp\/|gp\/)|[?&]tag=[a-z0-9-]+-\d{2}|flipkart\.com\/.*[?&]affid=|shareasale|impact\.com|skimresources|go\.redirectingat/i;

// DDG occasionally returns an unparseable page under rapid successive calls.
// A failed comparison query must not abort the whole screen — it just means
// that one overlap number is unknown, and saying so beats crashing.
function serp(kw, tries = 3) {
  for (let i = 1; i <= tries; i++) {
    try {
      const out = execFileSync("node", ["scripts/serp-ddg.mjs", kw, "--n", "10"], { encoding: "utf8", timeout: 120000 });
      const urls = [...out.matchAll(/^\s*\d+\.\s+(?:\[excluded\]\s+)?(https?:\/\/\S+)/gm)].map((m) => m[1]);
      if (urls.length) return urls;
    } catch { /* fall through to retry */ }
    if (i < tries) execFileSync("node", ["-e", "setTimeout(()=>{}, 9000)"], { timeout: 15000 });
  }
  return null;
}
const norm = (u) => { try { const x = new URL(u); return (x.hostname.replace(/^www\./, "") + x.pathname).replace(/\/$/, ""); } catch { return u; } };

const urls = serp(keyword);
if (!urls) { console.error(`could not fetch a SERP for "${keyword}" after retries`); process.exit(3); }
console.log(`\nSERP: ${keyword}  (${urls.length} organic)\n`);

let txn = 0;
for (const u of urls) {
  const flags = [];
  if (TXN_PATH.test(u)) { flags.push("SHOP-URL"); }
  if (deep) {
    try {
      const html = execFileSync("node", ["-e", `fetch(${JSON.stringify(u)},{headers:{"User-Agent":"Mozilla/5.0"}}).then(r=>r.text()).then(t=>process.stdout.write(t.slice(0,400000))).catch(()=>{})`], { encoding: "utf8", timeout: 45000 });
      const hits = (html.match(new RegExp(AFFILIATE.source, "gi")) || []).length;
      if (hits >= 3) flags.push(`AFFILIATE:${hits}`);
    } catch { /* unreachable page - not evidence either way */ }
  }
  if (flags.length) txn++;
  console.log(`  ${flags.length ? "X" : " "} ${u.slice(0, 92)}${flags.length ? "   [" + flags.join(" ") + "]" : ""}`);
}
console.log(`\n  COMMERCIAL: ${txn}/${urls.length}${deep ? " (deep)" : " (shallow - run --deep to catch affiliate listicles)"}`);
console.log(`  VERDICT: ${txn >= 5 ? "FAIL - retailer-owned, do not plan this row" : txn >= 3 ? "WATCH - write for the residual intent and say so" : "PASS"}`);

if (against.length) {
  const mine = new Set(urls.map(norm));
  console.log(`\n  URL OVERLAP (4+ of 10 means self-cannibalisation):`);
  for (const other of against) {
    const raw = serp(other);
    if (!raw) { console.log(`   ??/10  vs "${other}"   (SERP unavailable - overlap UNKNOWN, do not treat as clear)`); continue; }
    const o = raw.map(norm);
    const shared = o.filter((u) => mine.has(u));
    console.log(`   ${String(shared.length).padStart(2)}/10  vs "${other}"${shared.length >= 4 ? "   <<< TOO CLOSE" : ""}`);
    shared.forEach((s) => console.log(`         ${s.slice(0, 80)}`));
  }
}

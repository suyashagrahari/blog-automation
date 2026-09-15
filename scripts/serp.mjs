#!/usr/bin/env node
/**
 * serp.mjs — fetch a ranked organic SERP without the WebSearch tool.
 *
 * Why this exists: on 2026-09-10 the session's WebSearch budget ran out
 * (200/200, shared across six concurrent agents) in the middle of the
 * 2026-09-10-ganesh-10d batch, with five posts still needing the Phase 1 SERP
 * analysis and — the part that actually matters — the BRIEF §3 cannibalisation
 * gate, which is the only thing standing between a 37th Ganesh post and a
 * duplicate of one of the 36 already written.
 *
 * Engines were measured the same day, same query, same headers:
 *
 *   brave       200   292 KB   23 off-site hosts   <- the only usable one
 *   bing        200   124 KB   10 off-site hosts   <- USELESS HERE, see below
 *   marginalia  200    37 KB    3 off-site hosts
 *   mojeek      200     5 KB    2 off-site hosts   <- a stub
 *   ddg html    202    14 KB    0                  <- bot challenge
 *   ddg lite    202    14 KB    0                  <- bot challenge
 *   startpage   200    22 KB    0                  <- bot challenge
 *   google      200    91 KB    0                  <- JS-walled, /goto? redirects
 *
 * Bing looked usable and is not. Asked for "ganesh chaturthi board decoration",
 * "ganesh chaturthi modak recipe" and "ganesh chaturthi wishes in odia", it
 * returned the SAME ten hosts every time — wikipedia, britannica, worldhistory,
 * artofliving — i.e. a generic "Ganesha" entity panel rather than the query's
 * SERP. Feeding that to the gate reports 10 shared results for every possible
 * pair of keywords and would abort an entire batch on an artefact. Its real
 * destinations are also base64-encoded in aHR0c-style redirect params with the
 * readable host only in <cite>, so a naive href parse silently yields nothing.
 *
 * Hence: Brave only, and NO automatic second engine. When a gate lands at
 * exactly 2 shared results, BRIEF §3's corroboration has to come from a
 * differently-phrased query on the same engine, and the writer must say that is
 * what they did.
 *
 * Usage:
 *   node scripts/serp.mjs "<query>"                 # ranked top 10, one per line
 *   node scripts/serp.mjs "<query>" --engine=bing
 *   node scripts/serp.mjs --gate "<keyword A>" "<keyword B>"
 *
 * `--gate` prints the shared-result count both ways the rule requires: shared
 * DOMAINS and shared article IDENTITY (host + normalised path), with
 * pinterest.com and youtube.com excluded per the Spotify precedent — a shared
 * publisher ranking a different asset is a false merge.
 *
 * It prints what it measured and never decides. 3+ shared results is the
 * blocking threshold; exactly 2 is a judgment call for the writer to record.
 */

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

// Excluded from every count. A shared publisher ranking a different asset is
// not a shared result: both of these host thousands of unrelated items per
// query and would merge keywords that do not compete.
const EXCLUDE = [/(^|\.)pinterest\.[a-z.]+$/, /(^|\.)youtube\.com$/, /(^|\.)youtu\.be$/];

const CHROME = new Set([
  "brave.com", "search.brave.com", "bing.com", "www.bing.com", "microsoft.com",
  "schemas.live.com", "go.microsoft.com", "w3.org", "schema.org", "gstatic.com",
  "googleapis.com", "duckduckgo.com", "creativecommons.org", "mozilla.org",
]);

const host = (u) => {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

/** host + path, trailing slash and query dropped — the "article identity". */
const identity = (u) => {
  try {
    const x = new URL(u);
    return x.hostname.replace(/^www\./, "") + x.pathname.replace(/\/+$/, "");
  } catch {
    return "";
  }
};

const isChrome = (h) => !h || CHROME.has(h) || [...CHROME].some((c) => h.endsWith("." + c));
const isExcluded = (h) => EXCLUDE.some((re) => re.test(h));

/** Minimum organic results before a measurement is allowed to count. Below
 *  this the script REFUSES rather than reporting a small or zero shared count:
 *  an empty list intersected with anything is empty, so a failed fetch would
 *  otherwise print "clear" and wave a duplicate straight through the gate.
 *  That happened on the first run of this script against Bing. */
const MIN_RESULTS = 6;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchSerp(query, engine = "brave", { attempts = 4 } = {}) {
  if (engine === "bing") {
    throw new Error(
      "bing is deliberately unsupported — it serves a generic entity panel, identical for every query on a topic. See the header of this file."
    );
  }
  const url = `https://search.brave.com/search?q=${encodeURIComponent(query)}`;

  let html = "";
  for (let i = 0; i < attempts; i++) {
    // Brave 429s aggressively — it rate-limited after a single probe on
    // 2026-09-10 — so back off rather than giving up or hammering it.
    if (i) await sleep(20000 * i);
    const res = await fetch(url, {
      headers: { "User-Agent": UA, "Accept-Language": "en-IN,en;q=0.9", Accept: "text/html" },
      redirect: "follow",
    });
    if (res.status === 429) {
      if (i === attempts - 1) throw new Error(`brave rate-limited (429) after ${attempts} attempts on: ${query}`);
      continue;
    }
    if (!res.ok) throw new Error(`brave returned HTTP ${res.status}`);
    html = await res.text();
    break;
  }
  if (html.length < 20000) throw new Error(`brave returned ${html.length} bytes — a bot challenge, not a SERP`);

  // Take hrefs in document order and de-duplicate by identity. Result order in
  // the markup tracks rank closely enough for a shared-count, which is all the
  // gate needs; it is NOT reliable enough to quote a position from.
  const seen = new Set();
  const out = [];
  for (const m of html.matchAll(/href="(https?:\/\/[^"#]+)"/g)) {
    const u = m[1].replace(/&amp;/g, "&");
    const h = host(u);
    if (isChrome(h)) continue;
    if (/\.(css|js|png|jpg|jpeg|svg|woff2?|ico)(\?|$)/i.test(u)) continue;
    const id = identity(u);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push({ rank: out.length + 1, url: u, host: h, identity: id, excluded: isExcluded(h) });
    if (out.length >= 25) break;
  }
  const countable = out.filter((x) => !x.excluded);
  if (countable.length < MIN_RESULTS) {
    throw new Error(
      `brave yielded only ${countable.length} countable result(s) for "${query}" (need ${MIN_RESULTS}). ` +
        `REFUSING to report a shared count from this — too few results makes every gate look clear. ` +
        `Treat the gate as NOT MEASURED.`
    );
  }
  return out;
}

const args = process.argv.slice(2);
const engine = (args.find((a) => a.startsWith("--engine=")) || "--engine=brave").split("=")[1];
const rest = args.filter((a) => !a.startsWith("--"));

if (args.includes("--gate")) {
  const [a, b] = rest;
  if (!a || !b) {
    console.error('usage: node scripts/serp.mjs --gate "<keyword A>" "<keyword B>" [--engine=bing]');
    process.exit(1);
  }
  const [A, B] = [await fetchSerp(a, engine), await fetchSerp(b, engine)];
  const top = (r) => r.filter((x) => !x.excluded).slice(0, 10);
  const [ta, tb] = [top(A), top(B)];

  const sharedId = ta.filter((x) => tb.some((y) => y.identity === x.identity));
  const sharedHost = [...new Set(ta.map((x) => x.host))].filter((h) => tb.some((y) => y.host === h));

  console.log(`engine: ${engine}`);
  console.log(`\nA: ${a}`);
  ta.forEach((x) => console.log(`  ${String(x.rank).padStart(2)}. ${x.identity}`));
  console.log(`\nB: ${b}`);
  tb.forEach((x) => console.log(`  ${String(x.rank).padStart(2)}. ${x.identity}`));

  console.log(`\nexcluded from counting (pinterest/youtube): ${A.filter((x) => x.excluded).length + B.filter((x) => x.excluded).length} result(s)`);
  console.log(`shared ARTICLE IDENTITY (the rule's measure): ${sharedId.length}`);
  sharedId.forEach((x) => console.log(`  = ${x.identity}`));
  console.log(`shared DOMAIN only (weaker signal, may be a false merge): ${sharedHost.length}`);
  sharedHost.forEach((h) => console.log(`  ~ ${h}`));
  console.log(
    `\nthreshold is 3+ shared article identities = one keyword. ` +
      `measured ${sharedId.length}. ` +
      (sharedId.length >= 3 ? "ABORT." : sharedId.length === 2 ? "JUDGMENT CALL — corroborate on --engine=bing and record which way you went and why." : "clear.")
  );
} else {
  const q = rest[0];
  if (!q) {
    console.error('usage: node scripts/serp.mjs "<query>" [--engine=bing]');
    process.exit(1);
  }
  const r = await fetchSerp(q, engine);
  console.log(`engine: ${engine}   query: ${q}`);
  for (const x of r.slice(0, 15)) console.log(`${String(x.rank).padStart(2)}. ${x.excluded ? "[excluded] " : ""}${x.url}`);
}

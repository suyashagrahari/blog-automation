#!/usr/bin/env node
/**
 * serp-ddg.mjs — ranked organic SERP from DuckDuckGo, India-localised.
 *
 * Why this exists: on 2026-09-15 the Brave key behind scripts/serp.mjs went to a
 * hard 429 for the whole session — not contention, it stayed 429 after every
 * agent was taken off it and the key sat quiet for 90 seconds. WebSearch was
 * already exhausted at 200/200. That left the 2026-09-15-virtual-gift-30 wave-2
 * batch with no SERP source at all, and six agents had already burned an hour of
 * wall-clock on retries that returned nothing.
 *
 * Measured the same day, same query, same headers:
 *
 *   ddg html POST    200   42 KB   10 off-site hosts   <- this
 *   ddg lite POST    200   29 KB   10 off-site hosts   <- same results, leaner
 *   marginalia       200   38 KB    3                  <- not a general index
 *   mojeek           200    5 KB    2                  <- a stub
 *   startpage        200   22 KB    0                  <- bot challenge
 *   brave            429    -       -                  <- hard-throttled
 *
 * The GET forms of html/lite return a bot challenge; the POST forms do not.
 * That is the whole trick.
 *
 * DDG also takes a region parameter, which Brave did not: `kl=in-en` returns the
 * India SERP. Every position this prints is therefore India-localised, which is
 * strictly better evidence than the us-served Brave positions it replaces.
 *
 * Usage:
 *   node scripts/serp-ddg.mjs "<query>" [--region in-en] [--n 10]
 */
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36";
const args = process.argv.slice(2);
const query = args.find((a) => !a.startsWith("--"));
if (!query) { console.error('usage: serp-ddg.mjs "<query>" [--region in-en] [--n 10]'); process.exit(2); }
const flag = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const region = flag("region", "in-en");
const want = Number(flag("n", 10));

// Results whose publisher is ranking a different asset each time; a shared
// appearance here is not evidence two keywords share a SERP.
const EXCLUDE = /^(youtube\.com|m\.youtube\.com|pinterest\.|tiktok\.com|facebook\.com|instagram\.com)/i;

function decode(href) {
  // Paid results come back as duckduckgo.com/y.js?ad_domain=…&ad_provider=bingv7aa
  // and they occupy ranks 1-2. They are ADS, not organic, and counting them
  // would overstate how contested a SERP is. Drop them before ranking.
  if (/\/y\.js|[?&]ad_domain=|[?&]ad_provider=/.test(href)) return null;
  // html.duckduckgo.com wraps destinations as //duckduckgo.com/l/?uddg=<encoded>
  const m = href.match(/[?&]uddg=([^&]+)/);
  if (m) { try { return decodeURIComponent(m[1]); } catch { return null; } }
  if (href.startsWith("http")) return href;
  return null;
}

async function fetchSerp(q) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    const r = await fetch("https://html.duckduckgo.com/html/", {
      method: "POST",
      headers: {
        "User-Agent": UA,
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "text/html,application/xhtml+xml",
        "Accept-Language": "en-IN,en;q=0.9",
      },
      body: `q=${encodeURIComponent(q)}&kl=${encodeURIComponent(region)}`,
    });
    const html = await r.text();
    if (r.ok && html.includes("result__a")) return html;
    if (attempt < 3) await new Promise((s) => setTimeout(s, 4000 * attempt));
    else return html;
  }
}

const html = await fetchSerp(query);
const out = [];
const seen = new Set();
for (const m of html.matchAll(/<a[^>]+class="[^"]*result__a[^"]*"[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
  const url = decode(m[1].replace(/&amp;/g, "&"));
  if (!url) continue;
  let host;
  try { host = new URL(url).hostname.replace(/^www\./, ""); } catch { continue; }
  if (seen.has(url)) continue;
  seen.add(url);
  const title = m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  out.push({ url, host, title, excluded: EXCLUDE.test(host) });
  if (out.length >= want + 6) break;
}

console.log(`engine: ddg-html   region: ${region}   query: ${query}`);
if (!out.length) { console.log("  (no results parsed — DDG markup may have changed)"); process.exit(1); }
let rank = 0;
for (const r of out) {
  if (rank >= want) break;
  rank++;
  console.log(`${String(rank).padStart(2)}. ${r.excluded ? "[excluded] " : ""}${r.url}`);
  if (r.title) console.log(`    ${r.title.slice(0, 110)}`);
}

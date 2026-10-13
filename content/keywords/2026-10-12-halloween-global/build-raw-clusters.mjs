// SUPERSEDED by score-topics.mjs (curated topics). Kept for the raw-autocomplete cut audit: writes raw-clusters.csv + cut-keywords.csv only.
// Inputs: ac-{us,gb,ca,au,in}/autocomplete.csv (live Google autocomplete per market),
//         the archetype table below (weak counts measured in serps.md).
// Output: 500 keywords -> 400 page clusters -> 8 batches of 50, ranked by expected clicks.
// Every volume band is EST (no tool volume available); bands use the gates.md Gate 6c
// table on the October PEAK monthly rate. Run from this directory: node build-inventory.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";

// ── verbatim gates.md tables ────────────────────────────────────────────────
const MID = { 5: 20000, 4: 6500, 3: 2000, 2: 650, 1: 150 };
const WINP = (w) => (w >= 5 ? 0.6 : w >= 3 ? 0.4 : w >= 1 ? 0.15 : 0);
const WINSC = (w) => (w >= 5 ? 5 : w >= 3 ? 4 : w >= 1 ? 2 : 1);
const CTR3 = 0.11;

// Halloween 2026 = Sat 31 Oct (today 12 Oct: Gate 0 fails for every new page this cycle).
// Halloween 2027 = Sun 31 Oct. time_to_rank per gates.md: 5+ weak 8 wk, 3-4 weak 12 wk, 1-2 weak 6 mo.
const H27 = "2027-10-31";
const minus = (iso, d) => { const x = new Date(iso + "T00:00:00Z"); x.setUTCDate(x.getUTCDate() - d); return x.toISOString().slice(0, 10); };
const ttr = (w) => (w >= 5 ? 56 : w >= 3 ? 84 : 182);

// ── load + merge autocomplete across markets ────────────────────────────────
const parse = (line) => { const c = []; let cur = "", q = false;
  for (let i = 0; i < line.length; i++) { const ch = line[i];
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true; else if (ch === ",") { c.push(cur); cur = ""; } else cur += ch; }
  c.push(cur); return c; };
const MARKETS = ["us", "gb", "ca", "au", "in"];
const RAW = new Map(); // normalised phrase -> {demand, markets:Set, raw}
const norm = (s) => s.toLowerCase().replace(/\bpick up\b/g, "pickup").replace(/\bbf\b/g, "boyfriend").replace(/\bgf\b/g, "girlfriend")
  .replace(/\s+/g, " ").trim();
for (const m of MARKETS) {
  const f = `ac-${m}/autocomplete.csv`; if (!existsSync(f)) continue;
  for (const line of readFileSync(f, "utf8").split("\n").slice(1)) {
    if (!line.trim()) continue; const c = parse(line); const k = norm(c[0]); const hits = +c[2] || 0;
    const e = RAW.get(k) || { demand: 0, markets: new Set(), total: 0 };
    e.demand = Math.max(e.demand, hits); e.total += hits; e.markets.add(m); RAW.set(k, e);
  }
}

// ── Gate 1/2 cuts: things a blog post cannot serve ──────────────────────────
const CUT = [
  [/near me|nearby|in store|open|hours|clearance|\bsale\b|coupon|promo|code\b/, "local/transactional"],
  [/home depot|walmart|amazon|target|hobby lobby|lowe'?s|dollar tree|spirit halloween|costco|michaels|party city|etsy|ebay|shein|temu|kohl|five below|joann|at home\b|wayfair|ikea|cvs|walgreens|kroger|aldi|tesco|asda|primark|kmart|big w|bunnings|myer|smiggle/, "retailer"],
  [/disney(land| world)?|universal|knott|six flags|busch|cedar point|hersheypark|halloween horror nights|hhn/, "venue"],
  [/ps5|ps4|steam|xbox|roblox|fortnite|minecraft|sims|animal crossing|genshin|pokemon go|game pass|dbd|phasmophobia|video game/, "video game"],
  [/michael myers|laurie strode|jamie lee|rob zombie|\bends\b|\bkills\b|in order|chronolog|release|1978|2007|2018|h20|resurrection|franchise|cast\b|box office|trailer|rotten tomatoes|imdb/, "film-franchise entity"],
  [/\b(2019|2020|2021|2022|2023|2024|2025)\b/, "stale year"],
  [/font|svg|png|clipart|clip art|wallpaper|gif\b|gifs|emoji|background|icon|drawing|coloring|colouring|printable|stencil|template download|logo|banner|vector/, "image/asset intent"],
  [/pinterest|tiktok|youtube|reddit|quora|instagram account|instagram page|twitter|\bx\b post/, "platform-navigational"],
  [/dirty|sexy|naughty|nsfw|spicy|kinky|18\+|adult only|hot\b/, "explicit"],
  [/new york|nyc|chicago|los angeles|\bla\b|houston|dallas|atlanta|utah|toronto|vancouver|sydney|melbourne|london|manchester|mumbai|delhi|bangalore|seattle|boston|miami|austin|denver|phoenix|philadelphia|san diego|orlando|las vegas|vegas|portland|calgary|brisbane|perth|dublin|edinburgh/, "city-local"],
  [/elite daily|buzzfeed|cosmo\b|zara|qvc|freeform|kohau|hallmark channel|spotify|apple music|canva|capcut|chatgpt|\bai\b|haunt captions|mickey|hocus pocus|nightmare before christmas|beetlejuice|wednesday|stranger things|barbie|harry potter|marvel|star wars|joker|harley|jason|freddy|chucky|ghostface|scream|zoey|it movie/, "brand/franchise-navigational"],
  [/winnipeg|qatar|zurich|queens|\bnz\b|dubai|singapore|texas|california|florida|ohio|ontario|alberta|quebec|victoria|kerala|winnipeg/, "place-local"],
  [/tickets?|\bstore\b|\bonline\b|rental|quality|\bxl\b|\bxxl\b|freebie|templates?|\bbuy\b|cheap costumes|wholesale|delivery|shipping|price/, "transactional"],
  [/\b(q|x|z|j|y|v|u|k)\b|\.|zumba|quilt|voicemail|chain|kitchen|owl|nurse|reading|kindness|zombie quotes|clown/, "thin/alphabet-tail"],
  [/\bkill\b|murder|death|dead body|weapon|gun|knife/, "violent"],
];

// ── archetypes: theme -> measured weak count & intent fit (serps.md) ────────
// [regex, cluster, weak, intentFit(1-5), pageType, evidence, note]
const A = [
  [/boo basket/, "boo-basket", 9, 5, "blog listicle", "SERP-MEASURED", "boo basket SERPs: 9-10 weak (pinterest/reddit/marketplaces)"],
  [/(ask|asking).*(be (my|your) boo|out)|be my boo|be your boo/, "ask-to-be-boo", 9, 5, "how-to guide", "SERP-MEASURED", "no page answers it; /happy-halloween is literally 'will you be my boo'"],
  [/pickup|rizz|flirt/, "pickup-flirt", 6, 5, "blog listicle", "SERP-MEASURED", "rd/cosmo/parade + reddit/pinterest/scribd"],
  [/crush/, "crush", 8, 5, "blog listicle", "SERP-MEASURED", "texts to crush: 8 weak"],
  [/nickname/, "nicknames", 8, 5, "blog listicle", "SERP-ARCHETYPE", "romantic long-tail, 19 prefixes in US"],
  [/long distance|\bldr\b/, "long-distance", 8, 5, "blog listicle", "SERP-MEASURED", "8 weak; maps to /missyou-gf + /happy-halloween"],
  [/propos|engag/, "proposal", 6, 5, "blog listicle", "SERP-MEASURED", "jewellery-shop blogs + adiamor 2014"],
  [/photo ?shoot|couple (photo|pic|picture)|soft launch|hard launch/, "couple-photos", 9, 4, "blog listicle", "SERP-MEASURED", "photoshoot SERP 9 weak"],
  [/date (night )?ideas|date night|dates? for couples|activities for couples|things to do .*couple|couple activities|games for couples|ideas for couples/, "date-ideas", 6, 5, "blog listicle", "SERP-MEASURED", "pioneer woman/classpop + reddit/pinterest/fb"],
  [/(gift|present|basket).*(boyfriend|girlfriend|husband|wife|him|her|partner|couple)|(boyfriend|girlfriend|husband|wife).*(gift|present)/, "partner-gifts", 8, 5, "blog listicle", "SERP-ARCHETYPE", "gift SERPs follow boo-basket pattern"],
  [/(message|text|wish|note|letter|card|poem|paragraph).*(boyfriend|girlfriend|husband|wife|him|her|partner|lover|love)|(boyfriend|girlfriend|husband|wife).*(message|text|wish)/, "partner-messages", 7, 5, "blog listicle", "SERP-MEASURED", "messages for boyfriend: 7 weak"],
  [/(quote|caption|pun|saying|line).*(boyfriend|girlfriend|husband|wife|couple|love|him|her|partner|romantic)|(couple|romantic|love).*(quote|caption|pun)/, "partner-captions", 7, 5, "blog listicle", "SERP-MEASURED", "romantic halloween quotes: pinterest-led"],
  [/(boyfriend|girlfriend|husband|wife|couple|partner|bae|lover)/, "partner-general", 7, 5, "blog listicle", "SERP-ARCHETYPE", "relationship modifier lowers competition across every measured SERP"],
  [/best friend|bff|bestie|duo|trio|friends?\b/, "friends", 6, 4, "blog listicle", "SERP-MEASURED", "bff costumes 7 weak (pioneer woman stale 2025)"],
  [/cowork|colleague|work|office|employee|boss|client|business|marketing|team/, "work", 6, 3, "blog listicle", "SERP-MEASURED", "coworker messages 6 weak (wordstream 2022)"],
  [/(message|wish|greeting|text|card|poem)/, "messages", 3, 4, "blog listicle", "SERP-MEASURED", "generic wishes: card brands (hallmark, americangreetings)"],
  [/caption|instagram|story|bio|post/, "captions", 4, 3, "blog listicle", "SERP-MEASURED", "big-media head (adobe/today/T+L)"],
  [/quote|saying/, "quotes", 2, 3, "blog listicle", "SERP-MEASURED", "today/southern living/rd — hard"],
  [/pun/, "puns", 3, 3, "blog listicle", "SERP-MEASURED", "today/GH/rd — hard"],
  [/joke|riddle|knock knock/, "jokes", 6, 2, "blog listicle", "SERP-MEASURED(WS)", "fatherly + scraped; kids intent"],
  [/trivia|quiz|facts?\b|questions/, "trivia", 4, 3, "blog listicle", "SERP-MEASURED", "today/rd/mentalfloss + brand blogs"],
  [/bucket list/, "bucket-list", 8, 4, "blog listicle", "SERP-MEASURED", "8 weak"],
  [/party|game|activit/, "party-games", 5, 3, "blog listicle", "SERP-MEASURED", "party ideas adults 5 weak; kids games 5"],
  [/last minute|easy|diy|homemade|cheap|budget|simple/, "easy-costume", 5, 3, "blog listicle", "SERP-MEASURED", "last-minute: buzzfeed titled 2025"],
  [/costume|outfit|dress up|fancy dress|dress/, "costume-ideas", 3, 2, "blog listicle", "SERP-ARCHETYPE", "costume SERPs are retailer + major-media; blog only via niche angle"],
  [/makeup|nail|hair/, "beauty", 3, 2, "blog listicle/image", "SERP-MEASURED(WS)", "beauty majors + image intent"],
  [/movie|film|watch|netflix|show|song|playlist|music/, "movies-music", 3, 2, "blog listicle", "SERP-MEASURED", "imdb/variety/netflix — hard"],
  [/food|recipe|snack|treat|cookie|cake|cupcake|drink|cocktail|punch|dessert|appetizer|dinner|breakfast/, "food", 5, 1, "recipe", "SERP-MEASURED", "recipe intent, off-brand"],
  [/decor|pumpkin|carv|craft|wreath|door/, "decor-crafts", 4, 2, "blog listicle", "SERP-MEASURED", "pumpkin carving 4 weak; decor retail-led"],
  [/india|uk|britain|england|australia|canada|ireland|japan|mexico|germany|philippines|countries|around the world|scotland/, "halloween-countries", 6, 3, "explainer", "SERP-MEASURED", "UK 6 weak, India 6 weak (Bhoot Chaturdashi angle)"],
  [/history|origin|why|meaning|samhain|celebrat|what is|tradition|all hallows|day of the dead|dia de/, "origin-explainer", 5, 3, "explainer", "SERP-ARCHETYPE", "explainer; AI-Overview risk"],
  [/\b2026\b|\bdate\b|when is|what day|\bday\b|calendar|countdown/, "date-2026", 4, 2, "explainer", "SERP-ARCHETYPE", "news/timeanddate own dates; expires after 31 Oct"],
  [/kid|toddler|baby|child|school|classroom|teen|student|family/, "kids-family", 5, 2, "blog listicle", "SERP-ARCHETYPE", "family/education blogs"],
];
const BAND = { 5: "10,000+/mo", 4: "3,000-10,000/mo", 3: "1,000-3,000/mo", 2: "300-1,000/mo", 1: "under 300/mo" };
const bandOf = (demand, words) => { let b = demand >= 10 ? 5 : demand >= 6 ? 4 : demand >= 4 ? 3 : demand >= 2 ? 2 : 1; if (words <= 3 && b < 5) b++; return b; };

// ── classify ────────────────────────────────────────────────────────────────
const cut = [], keep = [];
for (const [k, e] of RAW) {
  if (!k.includes("halloween") && !/boo basket|spooky|samhain|jack o|trick or treat/.test(k)) continue;
  const words = k.split(" ").length;
  const c = CUT.find(([re]) => re.test(k));
  if (c) { cut.push({ k, ...e, gate: `gate1/2-${c[1].replace(/\s+/g, "-")}` }); continue; }
  if (words < 3) { cut.push({ k, ...e, gate: "head-term-under-3-words" }); continue; }
  const a = A.find(([re]) => re.test(k)) || [null, "general", 4, 3, "blog listicle", "SERP-ARCHETYPE", "unclassified"];
  keep.push({ k, ...e, words, cl: a[1], w: a[2], iF: a[3], pt: a[4], ev: a[5], n: a[6] });
}

// ── Phase 8a: fold near-duplicates into one page cluster ────────────────────
const STOP = new Set("halloween for the a an to and of with in on my your our ideas idea best good some what are is how do 2026 2027 cute funny short".split(" "));
const SUBJ = { grandkid: "family", grandkids: "family", granddaughter: "family", grandson: "family", grandchildren: "family", niece: "family", nephew: "family", daughter: "family", son: "family", him: "boyfriend", her: "girlfriend", husband: "husband", wife: "wife", guys: "men", guy: "men", girls: "women", ladies: "women", female: "women", male: "men" };
const stem = (t) => (SUBJ[t] || t).replace(/(ies)$/, "y").replace(/([^s])s$/, "$1");
const key = (k) => [...new Set(k.split(" ").filter((t) => !STOP.has(t)).map(stem))].sort().join(" ") || k;
// distinctive modifiers that must NOT be folded away (angle words)
const ANGLE = /\b(cute|funny|short)\b/;
const clusters = new Map();
for (const r of keep) {
  const kk = key(r.k) + (ANGLE.test(r.k) ? "|" + r.k.match(ANGLE)[1] : "");
  const c = clusters.get(kk) || { members: [] }; c.members.push(r); clusters.set(kk, c);
}
const pages = [...clusters.values()].map((c) => {
  c.members.sort((a, b) => b.demand - a.demand || b.markets.size - a.markets.size || a.words - b.words);
  const p = c.members[0];
  const demand = c.members.reduce((s, m) => Math.max(s, m.demand), 0);
  const mk = new Set(c.members.flatMap((m) => [...m.markets]));
  const band = bandOf(demand + (mk.size >= 3 ? 2 : mk.size === 2 ? 1 : 0), p.words);
  const winp = WINP(p.w);
  const clicks = Math.round(MID[band] * CTR3 * winp);
  return { primary: p, members: c.members, demand, markets: mk, band, clicks, score: WINSC(p.w) * p.iF * band };
});
// conversion fit (Gate 5): intent 1 (recipes etc.) bucketed do-not-attempt; rank the rest
const ROMANCE = /partner|pickup|crush|nicknames|long-distance|proposal|couple|date-ideas|boo|friends/;
const eligible = pages.filter((p) => p.primary.iF >= 2 && p.demand >= (ROMANCE.test(p.primary.cl) ? 2 : 3));
eligible.sort((a, b) => b.clicks * b.primary.iF - a.clicks * a.primary.iF || b.score - a.score || b.demand - a.demand);
// cap any one theme at 45 pages so batches stay varied and no SERP family gets 80 near-twins
const CAP = { "decor-crafts": 14, "costume-ideas": 24, beauty: 12, "movies-music": 10, "date-2026": 6, quotes: 22, captions: 24, puns: 10, jokes: 12, messages: 30, general: 12, "kids-family": 14, "party-games": 22, "easy-costume": 14 };
const perTheme = {}; const chosen = [];
for (const p of eligible) { const t = p.primary.cl; if ((perTheme[t] || 0) >= (CAP[t] ?? 45)) continue; perTheme[t] = (perTheme[t] || 0) + 1; chosen.push(p); if (chosen.length === 400) break; }
chosen.forEach((p, i) => { p.rank = i + 1; p.batch = Math.floor(i / 50) + 1; });

// ── 500 keywords = 400 primaries + the strongest 100 secondaries (absorbed) ──
const rows = [];
for (const p of chosen) rows.push({ p, r: p.primary, role: "primary" });
const secondaries = chosen.flatMap((p) => p.members.slice(1).map((r) => ({ p, r, role: "secondary" })))
  .sort((a, b) => b.r.demand - a.r.demand).slice(0, 500 - rows.length);
rows.push(...secondaries);

const cell = (v) => (/[",\n]/.test(String(v ?? "")) ? `"${String(v).replace(/"/g, '""')}"` : String(v ?? ""));
const HEAD = "keyword,cluster_id,source_url,source_domain,evidence_type,intent,page_type_required,est_volume,volume_source,weakness_count,gate_failed,bucket,priority_score,ranking_urls,category,action,own_url,own_position,expected_clicks,trend,peak_window,publish_by,demand_rank,requested_bucket,publish_rank,page_role,page_primary,markets,note";
const out = rows.sort((a, b) => a.p.rank - b.p.rank || (a.role === "primary" ? -1 : 1)).map(({ p, r, role }) => [
  r.k, `p${String(p.rank).padStart(3, "0")}-${r.cl}`,
  `https://www.google.com/search?q=${encodeURIComponent(r.k)}&gl=us`,
  r.ev.startsWith("SERP-MEASURED") ? "Firecrawl/WebSearch US-served 2026-10-12 (theme archetype)" : "inferred from measured SERPs of this theme",
  r.ev, r.iF >= 5 ? "transactional" : r.iF >= 4 ? "informational-commercial" : "informational",
  r.pt, BAND[p.band], "EST (Oct peak)", r.w, "", r.w <= 2 ? "hard-differentiator-only" : "next-cycle", p.score, "", r.cl,
  role === "primary" ? "new-page" : "merge-into-cluster-primary", "", "none",
  role === "primary" ? p.clicks : "", "seasonal", "2027-10-01..2027-10-31", minus(H27, ttr(r.w)),
  r.demand, `B${p.batch}`, p.rank, role, p.primary.k, [...r.markets].join("|"), r.n,
].map(cell).join(","));
writeFileSync("raw-clusters.csv", [HEAD, ...out].join("\n") + "\n");

// all-keywords audit file (cuts included) for transparency
const cutRows = cut.sort((a, b) => b.demand - a.demand).map((c) => [c.k, c.demand, [...c.markets].join("|"), c.gate].map(cell).join(","));
writeFileSync("cut-keywords.csv", ["keyword,demand_rank,markets,gate_failed", ...cutRows].join("\n") + "\n");

const by = (arr, f) => arr.reduce((m, x) => (m[f(x)] = (m[f(x)] || 0) + 1, m), {});
console.log(`autocomplete unique (5 markets): ${RAW.size}`);
console.log(`cut: ${cut.length}  kept: ${keep.length}  page clusters: ${pages.length}  eligible: ${eligible.length}  chosen pages: ${chosen.length}  keywords out: ${rows.length}`);
console.log("cut reasons:", by(cut, (c) => c.gate));
console.log("themes in 400:", by(chosen, (p) => p.primary.cl));
for (let b = 1; b <= 8; b++) { const s = chosen.filter((p) => p.batch === b);
  console.log(`B${b}: ${s.length} pages · ${s.reduce((a, p) => a + p.clicks, 0)} clicks/mo peak EST · top: ${s.slice(0, 4).map((p) => p.primary.k).join(" | ")}`); }

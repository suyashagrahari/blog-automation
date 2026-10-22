// Diwali 2027: 200 keywords, 4 batches of 50, India market.
// Inputs: ac-in-en / ac-in-hi (live Google autocomplete, geo=in), archetype weak counts measured in
//         serps.md (8 SERPs, 2026-10-22), ../site-inventory.csv + ../strapi-live-articles.json (own site).
// Volume is EST (no tool data). Bands/CTR/win-prob are the gates.md tables, same as the Valentine run.
// Run from this directory: node build-inventory.mjs
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import * as XLSX from "xlsx";

const TODAY = "2026-10-22", EVENT = "2027-10-29";   // Lakshmi Puja, Fri 29 Oct 2027 (serps.md date check)
const MID = { 5: 20000, 4: 6500, 3: 2000, 2: 650, 1: 150 };
const BAND = { 5: "10,000+/mo", 4: "3,000-10,000/mo", 3: "1,000-3,000/mo", 2: "300-1,000/mo", 1: "under 300/mo" };
const WINP = (w) => (w >= 5 ? 0.6 : w >= 3 ? 0.4 : w >= 1 ? 0.15 : 0);
const WINSC = (w) => (w >= 5 ? 5 : w >= 3 ? 4 : w >= 1 ? 2 : 1);
const CTR3 = 0.11;
const ttr = (w) => (w >= 5 ? 56 : w >= 3 ? 84 : 182);
const KD = (w) => (w >= 7 ? "low (EST 10-25)" : w >= 5 ? "medium (EST 25-45)" : w >= 3 ? "medium-high (EST 45-60)" : "high (EST 60+)");
const minus = (iso, d) => { const x = new Date(iso + "T00:00:00Z"); x.setUTCDate(x.getUTCDate() - d); return x.toISOString().slice(0, 10); };
const TOTAL = 200, BATCH = 50, LONG_MIN = 70;

const KEEP = /diwali|deepavali|deepawali|dipawali|divali|dhanteras|lakshmi puja|laxmi puja|lakshmi pujan|laxmi pujan|govardhan|bhai dooj|bhai dhooj|bhaiya dooj|bhau beej|choti diwali|narak chaturdashi|kali puja|दिवाली|दीपावली|दीवाली|धनतेरस|लक्ष्मी|गोवर्धन|भाई दूज|भैया दूज|छोटी दिवाली/;
const CUT = [
  [/\b20(0\d|1\d|2[0-5]|2[89]|[3-9]\d)\b/, "stale/far year"],
  [/\bpng\b|\bsvg\b|clip ?art|vector|\bfont\b|\blogo\b|background|backdrop|banner|\bframe\b|sticker|\bgifs?\b|wallpaper|\bvideos?\b|\bsongs?\b|ringtone|\breels?\b|\bmp3\b|download|\bhd\b|\bppt\b|\bpdf\b|\bdp\b|\bemoji\b|\bmeme\b|\bjokes?\b|template download|editing|edit\b|\bcdr\b|\bpsd\b/, "image/asset/media"],
  [/pinterest|youtube|tiktok|reddit|quora|facebook|twitter|telegram|snapchat|instagram reel/, "platform-navigational"],
  [/near me|delivery|online order|\bbuy\b|\bprice\b|\bcheap\b|\bshop\b|store|\bsale\b|offer|discount|coupon|amazon|flipkart|myntra|meesho|blinkit|zepto|swiggy|bigbasket|fnp|igp|ferns|archies|tanishq|kalyan|reliance|dmart|croma|nykaa|ajio|haldiram|bikanervala|cadbury|ferrero|\bbonus\b|salary|stock|share market|muhurat trading|sensex|nifty|\bnse\b|\bbse\b/, "transactional/brand/finance"],
  [/delhi|mumbai|bangalore|bengaluru|hyderabad|chennai|kolkata|pune|jaipur|lucknow|noida|gurgaon|ahmedabad|surat|ayodhya|varanasi|london|new york|nyc|singapore|dubai|canada|toronto|usa|\buk\b|australia|malaysia/, "place-local"],
  [/\b(?![ai]\b)[a-z]\b/, "alphabet-tail junk"],
  [/movie|film|\bcast\b|bigg boss|serial|episode|lyrics|\bsong\b|\bad\b|advertisement|cracker ban|ban on crackers|pollution|aqi|accident|fire\b|news|\blive\b|rally|election/, "entity/news"],
  [/is it diwali|can i celebrate|\btoday\b|which diwali|what diwali date|\bjpg\b|bhuj|mandir|by google|free gift by|is this\b|when diwali will start/, "garbled/real-time/scam phrasing"],
  [/\bsexy|\bhot\b|\bnude|xxx|porn|dirty|non ?veg|18\+/, "explicit"],
  [/bank holiday|school holiday|holiday list|holidays list|stock market holiday|market holiday|\bsbi\b|\bpnb\b|\bhdfc\b|\bicici\b/, "holiday-list/bank (navigational)"],
];
// [regex, archetype, weak, intentFit(1-5), pageType, serp ref]
const ARCH = [
  [/\b2027\b/, "year-head", 7, 4, "blog listicle", "#1"],
  [/muhurat|मुहूर्त|\btime\b|timing|\bdate\b|\bwhen\b|kab hai|\bkab\b|कब|kitne|tithi|calendar|which day|kis din|\btoday\b|yet\b|already/, "date/muhurat", 6, 2, "blog explainer", "#1 #6"],
  [/card|ecard|e-card|online|virtual|digital|with name|with photo|link|website|maker|generator|creator|template/, "tool/virtual", 6, 5, "template page + blog", "#2 (adjacent)"],
  [/essay|speech|paragraph|\blines on\b|10 lines|anchoring|nibandh|निबंध|poem|kavita|कविता|story|stories|katha|कथा/, "essay/speech/story", 6, 1, "blog explainer", "#5"],
  [/gift|hamper|present|basket|\bbox\b/, "gift", 6, 3, "blog listicle", "#4"],
  [/rangoli|रंगोली|kolam|drawing|poster|painting|craft|diya decoration|diya painting|lantern|kandil|torana|toran|mehndi|nail art|images|image|pics|photos|photo\b|pictures|फोटो|छवि/, "images/designs", 8, 2, "blog listicle (image-led)", "#3"],
  [/decoration|decor|decorate|lights|lighting|sweets|recipes?|party|games|activities|names|outfit|dress|look/, "decor/party/food", 6, 2, "blog listicle", "#3 #4 (adjacent)"],
  [/captions?|status|स्टेटस|bio\b|hashtags?/, "captions/status", 8, 4, "blog listicle", "#7"],
  [/wishes|wish\b|quotes|messages|message|greetings|sms|text|sayings|thoughts|slogans|blessings|shubhkamnaye|shubhkamnayen|badhai|शुभकामनाएं|शुभकामनाएँ|संदेश|बधाई|shayari|sayari|शायरी/, "wishes/quotes/shayari", 8, 4, "blog listicle", "#2 #8"],
  [/puja vidhi|pooja vidhi|vidhi|विधि|procedure|samagri|aarti|आरती|mantra|why|significance|meaning|importance|what is|kyu|kyon|क्यों|kaise|how|history|origin/, "puja/explainer", 6, 2, "blog explainer", "#5 #6 (adjacent)"],
  [/hindi|marathi|gujarati|bengali|bangla|tamil|telugu|kannada|malayalam|punjabi|odia|urdu|sanskrit|nepali|[\u0900-\u097F]/, "language", 8, 3, "blog listicle", "#8"],
];
const DEFAULT = ["general", 6, 3, "blog guide", "median of #1-#8"];
const TOP3W = ["https://www.adobe.com/express/discover/wishes/diwali", "https://www.fnp.com/quotes/diwali", "https://www.livehindustan.com/astrology/diwali-wishes-in-hindi-latest-and-top-happy-diwali-wishes-photos-images-best-whatsapp-status-shayari-sms-201760901914924.html"];
const TOP3 = {
  "year-head": ["https://www.drikpanchang.com/diwali/diwali-puja-calendar.html?year=2027", "https://www.timeanddate.com/holidays/india/2027", "https://samvat.in/festivals/diwali-2027/"],
  "date/muhurat": ["https://www.drikpanchang.com/festivals/lakshmipuja/festivals-lakshmipuja-timings.html?year=2027", "https://drrpsharma.com/blog/diwali-2027.html", "https://sanatanhindu.co.in/festival-muhurat/diwali/2027"],
  "wishes/quotes/shayari": TOP3W, "language": ["https://www.rekhta.org/occasion/dipawali-shayari/couplets/?lang=hi", "https://www.livehindustan.com/astrology/diwali-wishes-in-hindi-latest-and-top-happy-diwali-wishes-photos-images-best-whatsapp-status-shayari-sms-201760901914924.html", "https://www.amarujala.com/kavya/kavya-charcha/diwali-hindi-shayari-of-famous-poets"],
  "tool/virtual": ["https://www.adobe.com/express/discover/wishes/diwali", "https://www.fnp.com/quotes/diwali", "https://www.ecraftindia.com/pages/diwali-wishes"],
  "images/designs": ["https://www.pinterest.com/divya0175/diwali/", "https://www.diwalifestival.org/diwali-rangoli.html", "https://www.drikpanchang.com/rangoli/diwali/rangoli-designs.html"],
  "essay/speech/story": ["https://www.planetspark.in/creative-writing/essay-on-diwali", "https://www.pw.live/curious-jr/exams/essay-on-diwali-in-english-for-kids", "https://www.talkdrill.com/blog/essay-on-diwali/"],
  gift: ["https://www.milton.in/collections/diwali-gifts", "https://nestasia.in/collections/diwali-gifts-for-family", "https://www.homemonde.in/blogs/news/diwali-gift-ideas-for-family"],
  "decor/party/food": ["https://nestasia.in/collections/diwali-gifts-for-family", "https://www.diwalifestival.org/diwali-rangoli.html", "https://www.homemonde.in/blogs/news/diwali-gift-ideas-for-family"],
  "captions/status": ["https://www.adobe.com/in/express/discover/captions/diwali", "https://nestasia.in/blogs/news/diwali-captions-quotes-for-instagram", "https://www.skillmatics.in/blogs/blog/diwali-captions-for-every-type-of-post-family-to-firework"],
  "wishes/quotes": ["https://www.adobe.com/express/discover/wishes/diwali", "https://www.fnp.com/quotes/diwali", "https://www.caratlane.com/blog/happy-diwali-wishes-quotes-and-greetings/"],
  "puja/explainer": ["https://en.wikipedia.org/wiki/Diwali", "https://www.drikpanchang.com/diwali/diwali-puja-calendar.html?year=2027", "https://www.planetspark.in/creative-writing/essay-on-diwali"],
  general: ["https://www.drikpanchang.com/diwali/diwali-puja-calendar.html?year=2027", "https://www.adobe.com/express/discover/wishes/diwali", "https://www.fnp.com/quotes/diwali"],
};
const HEADS = ["diwali", "happy diwali", "diwali 2027", "happy diwali 2027", "diwali 2027 date", "when is diwali 2027", "diwali 2027 kab hai",
  "diwali wishes", "happy diwali wishes", "diwali quotes", "diwali messages", "diwali greetings", "diwali images", "happy diwali images",
  "diwali rangoli", "diwali rangoli designs", "diwali captions", "diwali status", "diwali shayari", "diwali essay", "diwali decoration ideas",
  "diwali gift ideas", "lakshmi puja muhurat 2027", "dhanteras 2027", "bhai dooj 2027", "govardhan puja 2027", "choti diwali 2027",
  "diwali wishes in hindi", "diwali card", "diwali drawing", "diwali gift ideas for employees", "diwali party ideas", "diwali story", "diwali speech", "diwali wishes maker", "diwali wishes with name", "lakshmi puja vidhi", "govardhan puja", "dhanteras", "bhai dooj", "diwali sweets", "दिवाली", "दिवाली की शुभकामनाएं"];

const parse = (line) => { const c = []; let cur = "", q = false;
  for (let i = 0; i < line.length; i++) { const ch = line[i];
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true; else if (ch === ",") { c.push(cur); cur = ""; } else cur += ch; }
  c.push(cur); return c; };
const csvq = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
const norm = (s) => s.toLowerCase().replace(/[’']/g, "").replace(/\bdeepawali\b/g, "deepavali").replace(/\blaxmi\b/g, "lakshmi").replace(/\bpooja\b/g, "puja").replace(/\s+/g, " ").trim();
const STOP = new Set("in for the a an my your to of with and on par ke ki ka".split(" "));
const canon = (k) => k.split(" ").filter((t) => !STOP.has(t)).map((t) => t.replace(/s$/, "")).sort().join(" ");
const FILL = new Set("happy 2027 best top the a an for my your to on of in and with cute beautiful new latest special unique".split(" "));
const MSG = /^(quotes?|wishes|wish|messages?|greetings?|sms|texts?|lines|sayings|shubhkamnaye|shubhkamnayen)$/;
const clusterKey = (k) => norm(k).split(" ").filter((t) => !FILL.has(t)).map((t) => (MSG.test(t) ? "msg" : t.replace(/s$/, ""))).sort().join("-");
const mods = (k) => norm(k).replace(/\b(diwali|deepavali)\b/, " ").split(" ").filter((t) => t && !STOP.has(t) && t !== "happy").length;

// own site
const tset = (s) => new Set(norm(s).split(" ").filter((t) => !FILL.has(t)));
const OWN = [];
for (const l of readFileSync("../site-inventory.csv", "utf8").split("\n").slice(1)) { if (!l.trim()) continue; const c = parse(l); if (c[0] && c[2] && !/fixture/.test(c[0])) OWN.push({ k: norm(c[0]), url: c[2] }); }
for (const a of JSON.parse(readFileSync("../strapi-live-articles.json", "utf8"))) OWN.push({ k: norm(a.slug.replace(/-/g, " ")), url: `https://subhsandesh.in/blog/${a.slug}`, live: true });
const OWNT = OWN.filter((o) => KEEP.test(o.k)).map((o) => ({ ...o, t: tset(o.k) }));
const ownMatch = (k) => { const a = tset(k); if (a.size < 2) return null; let best = null;
  for (const o of OWNT) { let i = 0; for (const t of a) if (o.t.has(t)) i++; const j = i / (a.size + o.t.size - i);
    if (j >= 0.6 && (!best || j > best.j)) best = { ...o, j }; } return best; };

// load
const IDX = new Map(), CUTLOG = []; let raw = 0;
for (const [dir, lang] of [["ac-in-en", "en"], ["ac-in-hi", "hi"]]) {
  const f = `${dir}/autocomplete.csv`; if (!existsSync(f)) continue;
  for (const line of readFileSync(f, "utf8").split("\n").slice(1)) { if (!line.trim()) continue; raw++;
    const c = parse(line); let k = norm(c[0]); const hits = +c[2] || 0;
    const why = !KEEP.test(k) ? "off-topic" : CUT.find(([r]) => r.test(k.replace(/\b2026\b/, "2027")))?.[1];
    if (why) { CUTLOG.push([lang, c[0], why]); continue; }
    let shifted = false; if (/\b2026\b/.test(k)) { k = k.replace(/\b2026\b/g, "2027"); shifted = true; }
    const e = IDX.get(k) || { k, display: c[0].replace(/\b2026\b/g, "2027"), hits: {}, shifted: true };
    e.hits[lang] = Math.max(e.hits[lang] || 0, hits); e.shifted = e.shifted && shifted; IDX.set(k, e);
  }
}
for (const h of HEADS) if (!IDX.has(norm(h))) IDX.set(norm(h), { k: norm(h), display: h, hits: {}, shifted: false, seeded: true });

let rows = [...IDX.values()].map((e) => {
  const demand = (e.hits.en || 0) + (e.hits.hi || 0) + (e.hits.en && e.hits.hi ? 2 : 0);
  const a = ARCH.find((x) => x[0].test(e.k)); const [arch, weak, fit, pageType, ref] = a ? a.slice(1) : DEFAULT;
  return { ...e, demand, arch, weak, fit, pageType, ref, head: HEADS.map(norm).includes(e.k), w: e.k.split(" ").length };
});
const CAN = new Map();
for (const r of rows) { const c = canon(r.k), o = CAN.get(c); if (!o || (r.head && !o.head) || (r.head === o.head && r.demand > o.demand)) CAN.set(c, r); }
const dupesMerged = rows.length - CAN.size; rows = [...CAN.values()];
for (const r of rows) { const m = mods(r.k); r.tail = r.head || m <= 1 ? "head" : m === 2 ? "mid-tail" : "long-tail"; }
const byD = [...rows].sort((a, b) => b.demand - a.demand);
byD.forEach((r, i) => { const p = i / byD.length; r.band = r.head ? 5 : p < 0.04 ? 5 : p < 0.15 ? 4 : p < 0.4 ? 3 : p < 0.7 ? 2 : 1; });
for (const r of rows) {
  r.clicks = Math.round(MID[r.band] * CTR3 * WINP(r.weak));
  r.priority = WINSC(r.weak) * r.fit * r.band;
  r.publish_by = minus(EVENT, ttr(r.weak));
  r.bucket = r.weak === 0 ? "do-not-attempt" : r.publish_by < TODAY ? "next-cycle" : "winnable";
  // user ask = the most-searched keywords: rank by live demand first, intent fit + SERP softness as multipliers
  r.rankScore = r.demand * (0.7 + 0.06 * r.fit) * (r.weak >= 7 ? 1.1 : 1) + r.band;
}
const sorted = rows.filter((r) => r.bucket !== "do-not-attempt").sort((a, b) => b.rankScore - a.rankScore);
const pick = new Map(); const add = (r) => { if (pick.size < TOTAL && !pick.has(r.k)) pick.set(r.k, r); };
// theme caps so one archetype cannot flood the list (first build: 80 shayari/language + 56 year rows)
const CAP = { "year-head": 30, "date/muhurat": 22, "wishes/quotes/shayari": 40, language: 15, "images/designs": 24, "essay/speech/story": 24, gift: 24, "tool/virtual": 24, "decor/party/food": 24, "captions/status": 14, "puja/explainer": 20, general: 8 };
const used = {}; const addC = (r) => { if (pick.has(r.k) || pick.size >= TOTAL) return; if ((used[r.arch] || 0) >= (CAP[r.arch] ?? 10) && !r.head) return; used[r.arch] = (used[r.arch] || 0) + 1; add(r); };
sorted.filter((r) => r.head).forEach(addC);
sorted.filter((r) => r.tail === "long-tail").slice(0, 400).forEach((r) => { if (chosenLong() < LONG_MIN) addC(r); });
sorted.forEach(addC);
sorted.forEach(add);                                                                 // top-up only if caps left gaps
function chosenLong() { return [...pick.values()].filter((x) => x.tail === "long-tail").length; }
const chosen = [...pick.values()].sort((a, b) => (b.head - a.head) || (b.rankScore - a.rankScore));
const clusters = new Map();
chosen.forEach((r, i) => {
  r.rank = i + 1; r.batch = Math.floor(i / BATCH) + 1;
  const ck = clusterKey(r.k); if (!clusters.has(ck)) clusters.set(ck, { id: `diwali-c${String(clusters.size + 1).padStart(3, "0")}`, primary: r.k });
  r.cluster = clusters.get(ck); r.own = ownMatch(r.k);
  r.action = r.own ? "improve-existing" : r.cluster.primary === r.k ? "new-page" : "secondary-on-cluster-page";
  r.evidence = r.seeded ? "SEED-HEAD+SERP-ARCHETYPE" : r.shifted ? "AUTOCOMPLETE(2026→2027 YEAR-SHIFTED)+SERP-ARCHETYPE" : "AUTOCOMPLETE+SERP-ARCHETYPE";
  r.lang = /[ऀ-ॿ]/.test(r.k) ? "hi (Devanagari)" : r.hits.hi && !r.hits.en ? "hi-locale" : "en";
});

// outputs
const H = "keyword,cluster_id,source_url,source_domain,evidence_type,intent,page_type_required,est_volume,volume_source,weakness_count,gate_failed,bucket,priority_score,ranking_urls,category,action,own_url,own_position,expected_clicks,trend,peak_window,publish_by,demand_rank,batch,batch_rank,tail_type,language,difficulty_est,serp_ref";
writeFileSync("keyword-inventory.csv", [H, ...chosen.map((r) => [r.display, r.cluster.id, `https://www.google.com/search?q=${encodeURIComponent(r.display)}&gl=in`,
  `google autocomplete (in/${Object.keys(r.hits).join("+") || "seed"})`, r.evidence, r.arch, r.pageType, BAND[r.band], "EST (Oct peak)", r.weak, "", r.bucket, r.priority,
  (TOP3[r.arch] || TOP3.general).join(" | "), `Diwali 2027 · Batch ${r.batch}`, r.action, r.own?.url || "", r.own ? "unknown (run site: check)" : "none", r.clicks,
  "seasonal", "2027-10-15..2027-10-31", r.publish_by, r.demand, r.batch, r.rank, r.tail, r.lang, KD(r.weak), r.ref].map(csvq).join(","))].join("\n") + "\n");
writeFileSync("cut-keywords.csv", "lang,suggestion,reason\n" + CUTLOG.map((c) => c.map(csvq).join(",")).join("\n") + "\n");

mkdirSync("batches", { recursive: true });
const PLAN = {};
for (let b = 1; b <= TOTAL / BATCH; b++) {
  const br = chosen.filter((r) => r.batch === b);
  PLAN[`diwali-B${b}`] = br.map((r) => ({ rank: r.rank, keyword: r.display, tail: r.tail, theme: r.arch, language: r.lang, cluster: r.cluster.id,
    cluster_primary: r.cluster.primary, band: BAND[r.band], weak: r.weak, demand: r.demand, expected_clicks: r.clicks, publish_by: r.publish_by, action: r.action, own_url: r.own?.url || null }));
  let md = `# Diwali 2027 — Batch ${b} of 4 (50 keywords)\n\nDiwali (Lakshmi Puja) is **Friday 29 October 2027** (Dhanteras 27 Oct · Choti Diwali 28 · Govardhan 30 · Bhai Dooj 31). Ranks ${(b - 1) * 50 + 1}–${b * 50} of 200 · expected clicks at the October peak (EST): **${br.reduce((s, r) => s + r.clicks, 0).toLocaleString()}/mo**.\n\n`;
  md += "One row = one keyword. Rows with the same **page** share one post (same cluster). Volumes are `EST` bands from live India autocomplete (`prefix_hits`, English + Hindi), not tool data; weak/10 comes from SERPs measured in `../serps.md`. **HEAD** = high-volume head term. `improve-existing` = SubhSandesh already has a matching post.\n\n";
  md += "| # | keyword | type | theme | language | page (cluster primary) | est. peak volume | difficulty | weak/10 | demand | exp. clicks/mo | publish by | action |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|\n";
  for (const r of br) md += `| ${r.rank} | ${r.tail === "head" ? "**" + r.display + "** HEAD" : r.display} | ${r.tail} | ${r.arch} | ${r.lang} | ${r.cluster.primary === r.k ? "_this_" : r.cluster.primary} | ${BAND[r.band]} EST | ${KD(r.weak)} | ${r.weak} | ${r.demand}${r.seeded ? " (seed)" : ""} | ${r.clicks} | ${r.publish_by} | ${r.action}${r.own ? ` → ${r.own.url.replace("https://subhsandesh.in", "")}` : ""} |\n`;
  writeFileSync(`batches/diwali-batch-${b}.md`, md);
}
writeFileSync("batches/PLAN.json", JSON.stringify(PLAN, null, 1));

const wb = XLSX.utils.book_new();
const obj = (r) => ({ Batch: r.batch, Rank: r.rank, Keyword: r.display, Type: r.tail, Theme: r.arch, Language: r.lang, "Est. Peak Volume (EST)": BAND[r.band],
  "Difficulty (EST)": KD(r.weak), "Weak in Top 10": r.weak, "Demand (prefix hits)": r.demand, "Expected Clicks/mo": r.clicks, Priority: r.priority,
  Cluster: r.cluster.id, "Cluster Primary": r.cluster.primary, Action: r.action, "Our URL": r.own?.url || "", "Publish By": r.publish_by, Evidence: r.evidence,
  "Google URL": `https://www.google.com/search?q=${encodeURIComponent(r.display)}&gl=in` });
const summ = { "Raw autocomplete rows": raw, "Candidates after cuts": IDX.size, "Near-duplicates merged": dupesMerged, Keywords: chosen.length,
  Head: chosen.filter((r) => r.tail === "head").length, "Mid-tail": chosen.filter((r) => r.tail === "mid-tail").length, "Long-tail": chosen.filter((r) => r.tail === "long-tail").length,
  "Hindi/Devanagari": chosen.filter((r) => r.lang !== "en").length, "Pages (clusters)": clusters.size, "Overlap existing posts": chosen.filter((r) => r.own).length,
  "Exp. clicks/mo (EST)": chosen.reduce((s, r) => s + r.clicks, 0) };
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet([summ]), "Summary");
for (let b = 1; b <= 4; b++) XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(chosen.filter((r) => r.batch === b).map(obj)), `Batch ${b}`);
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(chosen.map(obj)), "All 200");
XLSX.writeFile(wb, "diwali-2027-keywords.xlsx");
console.log(JSON.stringify(summ));
const th = {}; chosen.forEach((r) => (th[r.arch] = (th[r.arch] || 0) + 1)); console.log("themes", JSON.stringify(th));

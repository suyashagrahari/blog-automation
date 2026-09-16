#!/usr/bin/env node
// Builds keyword-inventory.csv for the 2026-09-16 propose run.
// Bands, CTR and win_probability come verbatim from references/gates.md.
import { readFileSync, writeFileSync } from "node:fs";

const RUN = new URL(".", import.meta.url).pathname;
const REPO = RUN.replace(/content\/keywords\/.*$/, "");

// ── gates.md tables, verbatim ────────────────────────────────────────────────
const BAND = { 5: [20000, "10000+"], 4: [6500, "3000-10000"], 3: [2000, "1000-3000"], 2: [650, "300-1000"], 1: [150, "under-300"] };
const CTR = { 1: 0.28, 2: 0.15, 3: 0.11, 4: 0.07, 6: 0.03, 11: 0.005 };
const winProb = (w) => (w >= 5 ? 0.6 : w >= 3 ? 0.4 : w >= 1 ? 0.15 : 0);
const sig2 = (n) => (n === 0 ? "0" : String(+n.toPrecision(2)));

const EVENT = "2027-02-08";          // Propose Day 2027 — Monday 8 February
const PEAK = "2027-02-01..2027-02-14";
const TODAY = new Date("2026-09-16");
const publishBy = (weeks) => new Date(new Date(EVENT) - weeks * 7 * 864e5).toISOString().slice(0, 10);

// ── SERP archetypes measured live, India-served, 2026-09-16 ──────────────────
const A = {
  wishesEN:  { w: 6, urls: "https://www.giftalove.com/quotes/propose-day|https://www.pinterest.com/ideas/propose-day-messages/929827340719/|https://www.wineandchampagnegifts.com/blog/propose-day-wishes/", q: "propose day wishes for girlfriend" },
  wishesREG: { w: 5, urls: "https://www.mensxp.com/marathi/latest/trending/128772-happy-propose-day-wishes-messages-and-quotes-in-marathi.html|https://www.pinterest.com/ideas/propose-day-quotes-in-marathi/920430400406/|https://maharashtratimes.com/lifestyle-news/relationships/happy-propose-day-2026-wishes-in-marathi-quotes-shayri-shubhechcha-whatsapp-facebook-instagram-status-messages-for-girlfriend-boyfriend/articleshow/128029916.cms", q: "propose day quotes in marathi" },
  howto:     { w: 6, urls: "https://www.quora.com/How-do-I-propose-a-girl-on-WhatsApp|https://www.tiktok.com/@shallygrant/video/7477575745213058309|https://shararat.in/blogs/relationshipintimacy/how-to-propose-a-girlfriend-on-chat-10-best-lines-and-tips", q: "how to propose a girl on whatsapp chat" },
  ldr:       { w: 6, urls: "https://www.reddit.com/r/LongDistance/comments/116nrxx/any_ideas_for_a_long_distance_proposal/|https://www.withclarity.com/blogs/engagement-ring/long-distance-proposal-ideas|https://www.quora.com/How-proposal-can-be-in-a-long-distance-relationship", q: "virtual proposal ideas long distance relationship" },
  ldrOnline: { w: 5, urls: "https://www.reddit.com/r/LongDistance/comments/116nrxx/any_ideas_for_a_long_distance_proposal/|https://www.quora.com/How-can-you-propose-when-you-are-in-a-long-distance-relationship|https://www.withclarity.com/blogs/engagement-ring/long-distance-proposal-ideas", q: "how to propose a girl online long distance" },
  product:   { w: 8, urls: "https://bemyval.co/|https://www.yourlovepage.online/proposal-website|https://www.tiktok.com/discover/will-you-be-my-girlfriend-website-proposal", q: "will you be my girlfriend proposal page online" },
  maker:     { w: 9, urls: "https://bemyval.co/|https://www.canva.com/create/proposals/|https://pixeryhub.com/create", q: "online proposal maker free for girlfriend" },
  card:      { w: 6, urls: "https://www.greetingsisland.com/cards/thoughts-and-feelings/love-and-romance|https://www.paperlesspost.com/cards/category/love-and-romance-cards|https://greetings-online.com/postcards_cat/proposal-cards/", q: "digital proposal card for girlfriend online free" },
  message:   { w: 6, urls: "https://www.chococraft.in/blogs/quotes-wishes/proposal-messages-to-a-girl|https://www.weddingwire.in/wedding-tips/proposal-lines--c2419|https://www.pinterest.com/ideas/love-propose-in-english/930203093669/", q: "propose message for girlfriend in english" },
  gift:      { w: 6, urls: "https://www.fnp.com/gifts/propose-day-lp|https://www.oyegifts.com/blogs/occasion/what-are-good-propose-day-gifts-for-my-girlfriend|https://www.pinterest.com/ideas/propose-day-gift-ideas-for-him/912148244394/", q: "propose day gift for girlfriend" },
  b2b:       { w: 0, urls: "https://betterproposals.io/|https://www.canva.com/create/proposals/|https://venngage.com/ai-tools/proposal-generator", q: "online proposal website free" },
  ideasHome: { w: 3, urls: "https://www.hitched.co.uk/wedding-planning/organising-and-planning/proposal-ideas-at-home/|https://www.reddit.com/r/Proposal/comments/1mtssij/how_can_i_make_the_proposal_a_surprise_when_she/|https://www.theknot.com/content/romantic-ways-to-propose", q: "romantic ways to propose a girl at home surprise" },
};

// ── clusters ─────────────────────────────────────────────────────────────────
const C = {
  C01: "proposal page / link builder (product mechanic)",
  C02: "propose day wishes & quotes — English",
  C03: "propose day wishes & quotes — Indian languages",
  C04: "how to propose — advice",
  C05: "propose messages & lines",
  C06: "virtual / online / digital propose (our mechanic + occasion)",
  C07: "propose day gift — physical retail",
  C08: "proposal ideas — planning & venues",
  C09: "business proposal software (B2B contamination)",
};

// keyword, cluster, archetype, demand_rank, band, intent, tier, [overrides]
const K = [
  // ══ TIER 1 — 50 highest-demand ═════════════════════════════════════════════
  ["propose day quotes", "C02", "wishesEN", 14, 5, "informational", "T1"],
  ["propose day wishes", "C02", "wishesEN", 10, 5, "informational", "T1"],
  ["propose day wishes for girlfriend", "C02", "wishesEN", 6, 4, "informational", "T1", { measured: 1 }],
  ["propose day quotes for girlfriend", "C02", "wishesEN", 6, 4, "informational", "T1"],
  ["propose day wishes for boyfriend", "C02", "wishesEN", 7, 4, "informational", "T1"],
  ["propose day quotes for love", "C02", "wishesEN", 8, 4, "informational", "T1"],
  ["propose day special wishes", "C02", "wishesEN", 8, 3, "informational", "T1"],
  ["propose day wishes for wife", "C02", "wishesEN", 7, 3, "informational", "T1"],
  ["propose day quotes for wife", "C02", "wishesEN", 6, 3, "informational", "T1"],
  ["propose day quotes for husband", "C02", "wishesEN", 6, 3, "informational", "T1"],
  ["propose day wishes for husband", "C02", "wishesEN", 6, 3, "informational", "T1"],
  ["propose day wishes for love", "C02", "wishesEN", 6, 3, "informational", "T1"],
  ["propose day quotes for boyfriend", "C02", "wishesEN", 6, 3, "informational", "T1"],
  ["propose day wishes for friends", "C02", "wishesEN", 7, 3, "informational", "T1"],
  ["propose day wishes for best friend", "C02", "wishesEN", 6, 2, "informational", "T1"],
  ["propose day best wishes", "C02", "wishesEN", 5, 3, "informational", "T1"],
  ["propose day best quotes", "C02", "wishesEN", 5, 3, "informational", "T1"],
  ["propose day date", "C02", "wishesEN", 5, 4, "informational", "T1"],
  ["propose day 2027", "C02", "wishesEN", 7, 4, "informational", "T1"],
  ["propose day wishes with name", "C06", "product", 7, 3, "transactional", "T1"],
  ["propose day quotes with name", "C06", "product", 6, 3, "transactional", "T1"],
  ["propose day wishes with emoji", "C02", "wishesEN", 8, 3, "informational", "T1"],
  ["propose day quotes in hindi", "C03", "wishesREG", 7, 4, "informational", "T1"],
  ["propose day wishes in hindi", "C03", "wishesREG", 5, 4, "informational", "T1"],
  ["propose day quotes in marathi", "C03", "wishesREG", 8, 4, "informational", "T1", { measured: 1 }],
  ["propose day wishes in marathi", "C03", "wishesREG", 5, 3, "informational", "T1"],
  ["propose day quotes in bengali", "C03", "wishesREG", 8, 3, "informational", "T1"],
  ["propose day wishes for girlfriend bangla", "C03", "wishesREG", 8, 3, "informational", "T1"],
  ["propose day wishes bangla", "C03", "wishesREG", 5, 3, "informational", "T1"],
  ["propose day quotes in kannada", "C03", "wishesREG", 7, 3, "informational", "T1"],
  ["propose day quotes malayalam", "C03", "wishesREG", 6, 3, "informational", "T1"],
  ["propose day quotes telugu", "C03", "wishesREG", 5, 3, "informational", "T1"],
  ["propose girlfriend in hindi", "C03", "wishesREG", 11, 4, "informational", "T1"],
  ["propose message in hindi", "C03", "message", 6, 3, "informational", "T1"],
  ["propose girlfriend shayari", "C03", "wishesREG", 6, 3, "informational", "T1"],
  ["propose day quotes hindi english", "C03", "wishesREG", 4, 2, "informational", "T1"],
  ["how to propose girlfriend", "C04", "howto", 14, 4, "informational", "T1"],
  ["how to propose girlfriend first time", "C04", "howto", 12, 3, "informational", "T1"],
  ["how to propose girlfriend marriage", "C04", "howto", 10, 3, "informational", "T1"],
  ["how to propose girlfriend again", "C04", "howto", 9, 2, "informational", "T1"],
  ["how to propose girlfriend in chat", "C04", "howto", 8, 3, "transactional", "T1"],
  ["how to propose girlfriend on propose day", "C04", "howto", 8, 3, "transactional", "T1"],
  ["how to propose online", "C06", "product", 8, 3, "transactional", "T1"],
  ["how to propose girlfriend in hindi", "C04", "howto", 8, 3, "informational", "T1"],
  ["how to propose girlfriend in english", "C04", "howto", 8, 3, "informational", "T1"],
  ["how to propose girlfriend for marriage", "C04", "howto", 7, 3, "informational", "T1"],
  ["proposal ideas for girlfriend at home", "C08", "ideasHome", 36, 4, "informational", "T1"],
  ["proposal ideas for gf", "C08", "ideasHome", 27, 3, "informational", "T1"],
  ["will you be my girlfriend proposal ideas", "C01", "product", 18, 3, "commercial", "T1"],
  ["proposal ideas for girlfriend", "C08", "ideasHome", 17, 4, "informational", "T1"],

  // ══ TIER 2 — 20 medium-demand ══════════════════════════════════════════════
  ["online proposal maker free for girlfriend", "C01", "maker", 17, 3, "transactional", "T2", { measured: 1 }],
  ["virtual proposal card", "C06", "card", 17, 3, "transactional", "T2"],
  ["proposal website template", "C09", "b2b", 19, 4, "commercial", "T2"],
  ["online proposal ideas", "C06", "ldr", 21, 3, "informational", "T2"],
  ["propose ideas for girlfriend in chat", "C04", "howto", 17, 3, "transactional", "T2"],
  ["virtual propose day", "C06", "product", 11, 3, "transactional", "T2"],
  ["online proposal website", "C09", "b2b", 8, 3, "commercial", "T2"],
  ["online proposal link", "C01", "product", 7, 2, "transactional", "T2"],
  ["proposal website for girlfriend free", "C01", "product", 7, 2, "transactional", "T2"],
  ["love proposal website template", "C01", "product", 7, 2, "transactional", "T2"],
  ["proposal website for boyfriend", "C01", "product", 7, 2, "transactional", "T2"],
  ["online marriage proposal maker", "C01", "maker", 7, 2, "transactional", "T2"],
  ["proposal website for girlfriend", "C01", "product", 6, 2, "transactional", "T2"],
  ["proposal website for crush", "C01", "product", 6, 2, "transactional", "T2"],
  ["propose girlfriend website", "C01", "product", 6, 2, "transactional", "T2"],
  ["online love proposal maker", "C01", "maker", 5, 2, "transactional", "T2"],
  ["online proposal for girlfriend", "C01", "product", 6, 2, "transactional", "T2"],
  ["propose day greeting card online free", "C06", "card", 5, 2, "transactional", "T2"],
  ["virtual proposal website", "C01", "product", 4, 2, "transactional", "T2"],
  ["online proposal card", "C06", "card", 4, 2, "transactional", "T2"],

  // ══ TIER 3 — 30 long-tail ══════════════════════════════════════════════════
  ["how to propose a girl online long distance", "C06", "ldrOnline", 3, 2, "transactional", "T3", { measured: 1 }],
  ["virtual proposal ideas for long distance relationship", "C06", "ldr", 3, 2, "transactional", "T3", { measured: 1 }],
  ["how to propose a girl on whatsapp chat", "C04", "howto", 5, 3, "transactional", "T3", { measured: 1 }],
  ["will you be my girlfriend proposal page online", "C01", "product", 4, 2, "transactional", "T3", { measured: 1 }],
  ["digital proposal card for girlfriend online free", "C06", "card", 4, 2, "transactional", "T3", { measured: 1 }],
  ["propose message for girlfriend in english", "C05", "message", 6, 3, "informational", "T3", { measured: 1 }],
  ["propose day gift for girlfriend", "C07", "gift", 6, 4, "transactional", "T3", { measured: 1, own: "https://subhsandesh.in/blog/propose-day-gift-for-girlfriend" }],
  ["online propose day gift for girlfriend", "C07", "gift", 4, 3, "transactional", "T3", { measured: 1, own: "https://subhsandesh.in/blog/online-propose-day-gift-for-girlfriend" }],
  ["how to propose girl on chat", "C04", "howto", 5, 2, "transactional", "T3"],
  ["can you propose over text", "C04", "howto", 9, 2, "informational", "T3"],
  ["how to propose in message", "C04", "howto", 7, 2, "transactional", "T3"],
  ["propose message for crush", "C05", "message", 6, 2, "informational", "T3"],
  ["propose message for her", "C05", "message", 6, 2, "informational", "T3"],
  ["propose message for girl in hindi", "C03", "message", 5, 2, "informational", "T3"],
  ["propose day wishes for girlfriend in hindi", "C03", "wishesREG", 5, 3, "informational", "T3"],
  ["propose day quotes for wife in hindi", "C03", "wishesREG", 5, 2, "informational", "T3"],
  ["how to propose girl in different ways", "C04", "howto", 5, 2, "informational", "T3"],
  ["how to propose to a new girlfriend", "C04", "howto", 5, 2, "informational", "T3"],
  ["how to propose girlfriend online", "C06", "product", 3, 2, "transactional", "T3"],
  ["how to propose a girl without knowing her", "C04", "howto", 3, 1, "informational", "T3"],
  ["how to propose girl in unique way", "C04", "howto", 3, 2, "informational", "T3"],
  ["how to propose girl in marathi", "C03", "wishesREG", 3, 1, "informational", "T3"],
  ["how to propose ex girlfriend again", "C04", "howto", 3, 1, "informational", "T3"],
  ["love proposal lines in hindi", "C03", "wishesREG", 3, 2, "informational", "T3"],
  ["propose a girl in shayari", "C03", "wishesREG", 3, 2, "informational", "T3"],
  ["propose day jokes hindi", "C03", "wishesREG", 3, 1, "informational", "T3"],
  ["romantic proposal ideas in mumbai", "C08", "ideasHome", 15, 3, "commercial", "T3"],
  ["romantic proposal ideas in delhi", "C08", "ideasHome", 10, 3, "commercial", "T3"],
  ["can a girl propose to her boyfriend", "C04", "howto", 8, 2, "informational", "T3"],
  ["propose day meaning in hindi", "C03", "wishesREG", 3, 2, "informational", "T3"],
];

// ── Phase 8b: overlap against the 46 live proposal articles + drafted batches ─
const live = (() => {
  const a = JSON.parse(readFileSync(REPO + "content/keywords/strapi-live-articles.json", "utf8"));
  const arr = Array.isArray(a) ? a : a.data || a.articles || Object.values(a).find(Array.isArray);
  return arr.map((x) => (x.slug || x.Slug || x.attributes?.slug || "")).filter(Boolean);
})();
const STOP = new Set(["a", "an", "the", "for", "to", "in", "of", "on", "with", "my", "your", "and", "is", "how", "do", "i", "it"]);
const LANGS = ["hindi", "marathi", "bengali", "bangla", "kannada", "malayalam", "telugu", "tamil", "gujarati", "english", "shayari"];
// The occasion exception — same reasoning gates.md gives for languages. "propose day
// quotes" and "girlfriend day quotes" score 0.67 on raw tokens and are two completely
// separate SERPs with separate incumbents, because the occasion IS the query. Merging
// them would delete the page, not save a write.
const OCCASIONS = ["propose day", "girlfriend day", "boyfriend day", "rose day", "teddy day", "hug day",
  "kiss day", "promise day", "chocolate day", "valentine", "birthday", "anniversary", "sorry", "apology",
  "miss you", "rakhi", "raksha bandhan", "ganesh", "diwali", "holi", "prom", "wedding", "marriage"];
const toks = (s) => new Set(s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter((t) => t && !STOP.has(t)));
function overlap(a, b) {
  const la = LANGS.filter((l) => a.includes(l)), lb = LANGS.filter((l) => b.includes(l));
  if (la.join() !== lb.join()) return 0;             // language exception — never a duplicate
  const oa = OCCASIONS.filter((o) => a.includes(o)), ob = OCCASIONS.filter((o) => b.includes(o));
  if (oa.join() !== ob.join()) return 0;             // occasion exception — never a duplicate
  // Subject exception — same reasoning again. "online proposal for girlfriend" and
  // "bouquet for girlfriend online" share 0.67 of their tokens and sell different
  // things to different SERPs. The thing being sent is the query.
  const ASK = /propos|will you be my|marry me|be mine|promposal/;
  if (ASK.test(a) !== ASK.test(b)) return 0;
  const A = toks(a), B = toks(b);
  let n = 0; for (const t of A) if (B.has(t)) n++;
  return n / Math.max(A.size, B.size);
}

const q = (s) => (/[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s);
const HEAD = "keyword,cluster_id,source_url,source_domain,evidence_type,intent,page_type_required,est_volume,volume_source,weakness_count,gate_failed,bucket,priority_score,ranking_urls,category,action,own_url,own_position,expected_clicks,trend,peak_window,publish_by,demand_rank,requested_tier,conversion_fit,live_overlap,nearest_live";

const rows = K.map(([kw, cid, ak, dr, band, intent, tier, o = {}]) => {
  const arch = A[ak];
  let w = arch.w, gate = "", bucket, action = "new-page", conv, pos = 3;

  // Phase 8b — nearest live page
  let best = 0, nearest = "";
  for (const s of live) { const v = overlap(kw, s.replace(/-/g, " ")); if (v > best) { best = v; nearest = s; } }

  // Gate 1 — does a romance SERP even exist?
  if (ak === "b2b") { gate = "G1"; bucket = "do-not-attempt"; action = "skip"; conv = "none — B2B SERP"; w = 0; }
  // Gate 5 — conversion fit
  else if (cid === "C07") { gate = "G5"; bucket = "do-not-attempt"; action = "skip"; conv = "none — physical delivery"; }
  else if (cid === "C08" && /mumbai|delhi/.test(kw)) { gate = "G5"; bucket = "do-not-attempt"; action = "skip"; conv = "none — wants a local planner"; }
  // Gate 3 / 8b — the site already has this page
  else if (best >= 0.6) { bucket = "own-already"; action = "merge-into-existing"; conv = "high"; pos = 3; }
  else {
    conv = intent === "transactional" ? "high — the link IS the answer"
      : intent === "commercial" ? "medium — compares makers"
        : "low — job ends by copying text";
    if (w >= 5 && intent === "transactional") { bucket = "winnable"; }
    else if (w >= 5) { bucket = "medium"; pos = 6; }
    else if (w >= 3) { bucket = intent === "transactional" ? "winnable" : "medium"; if (intent !== "transactional") pos = 6; }
    else { gate = "G4"; bucket = "do-not-attempt"; action = "skip"; }
  }

  const [mid, vol] = BAND[band];
  const ctr = CTR[pos === 3 ? 3 : 6];
  const clicks = gate ? 0 : mid * ctr * winProb(w);
  const winScore = w >= 5 ? 5 : w >= 3 ? 3 : w >= 1 ? 2 : 0;
  const intentFit = intent === "transactional" ? 5 : intent === "commercial" ? 4 : 2;
  const seasonal = /propose day|valentine/.test(kw);

  return [
    kw, cid, o.measured ? `SERP:${arch.q}` : "AUTOCOMPLETE", o.measured ? "firecrawl-india-serp" : "google-suggest-in",
    o.measured ? "SERP-MEASURED" : "SERP-ARCHETYPE+AUTOCOMPLETE", intent,
    cid === "C01" || cid === "C06" ? "tool" : "blog",
    vol, "EST", w, gate, bucket, gate ? 0 : winScore * intentFit * band,
    arch.urls, C[cid], action, o.own || "", "none", sig2(clicks),
    seasonal ? "seasonal" : "stable", seasonal ? PEAK : "", seasonal ? publishBy(12) : "",
    dr, tier, conv, best.toFixed(2), nearest,
  ];
});

writeFileSync(RUN + "keyword-inventory.csv", HEAD + "\n" + rows.map((r) => r.map((c) => q(String(c))).join(",")).join("\n") + "\n");

const by = (f) => rows.reduce((m, r) => ((m[f(r)] = (m[f(r)] || 0) + 1), m), {});
console.log("rows:", rows.length);
console.log("buckets:", by((r) => r[11]));
console.log("gates failed:", by((r) => r[10] || "survived"));
console.log("actions:", by((r) => r[15]));
console.log("clusters:", by((r) => r[1]));
console.log("publish_by (seasonal):", publishBy(12), "· days from today:", Math.round((new Date(publishBy(12)) - TODAY) / 864e5));
console.log("\ntop 12 by expected clicks:");
rows.filter((r) => +r[18] > 0).sort((a, b) => b[18] - a[18]).slice(0, 12).forEach((r) => console.log(`  ${String(r[18]).padStart(5)}  ${r[0]}  [${r[11]}, ${r[9]} weak, dr${r[22]}]`));
console.log("\n8b merges (overlap >= 0.6 with a live page):");
rows.filter((r) => +r[25] >= 0.6).forEach((r) => console.log(`  ${r[25]}  ${r[0]}  ->  ${r[26]}`));

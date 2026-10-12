// Builds keyword-inventory.csv for the 2026-10-12 Navratri / garba / dandiya run.
// Every band is EST (no tool volume available). Bands use the gates.md Gate 6c table
// on the PEAK-WINDOW monthly rate (Navratri fortnight), not the annual average.
// Run from this directory: node build-inventory.mjs
import { readFileSync, writeFileSync } from "node:fs";

// ── the verbatim tables from references/gates.md ────────────────────────────
const MID   = { 5: 20000, 4: 6500, 3: 2000, 2: 650, 1: 150 };
const WINP  = (w) => (w >= 5 ? 0.60 : w >= 3 ? 0.40 : w >= 1 ? 0.15 : 0.00);
const WINSC = (w) => (w >= 5 ? 5 : w >= 3 ? 4 : w >= 1 ? 2 : 1);
const CTR3  = 0.11;

// Event calendar. Navratri 2026 = 11-19 Oct (today, 12 Oct, is day 2) — Gate 0 fails
// for every new page this cycle, so the dates below are the 2027 cycle.
// Navratri 2027 = 30 Sep - 8 Oct, Dussehra 2027 = 9 Oct (drikpanchang, dekhopanchang).
const EV = {
  nav:  { start: "2027-09-30", peak: "2027-09-20..2027-10-08" },
  dus:  { start: "2027-10-09", peak: "2027-10-01..2027-10-10" },
  pur:  { start: "2027-10-15", peak: "2027-10-10..2027-10-16" },
  dp:   { start: "2027-10-05", peak: "2027-09-28..2027-10-10" },
};
const minus = (iso, days) => { const d = new Date(iso + "T00:00:00Z"); d.setUTCDate(d.getUTCDate() - days); return d.toISOString().slice(0, 10); };
// time_to_rank per gates.md Gate 0: 5+ weak 6-8 wk (use 8), 3-4 weak 8-12 wk (use 12), 1-2 weak 4-6 mo (use 6 mo)
const ttr = (w) => (w >= 5 ? 56 : w >= 3 ? 84 : 182);

// k=keyword B=batch cl=cluster b=band w=weak-in-top-10 ev=evidence iF=intent fit(1-5)
// pt=page type  e=event  act=action override  n=note
const R = (B, k, cl, b, w, ev, iF, pt = "blog listicle", e = "nav", act = "", n = "") => ({ B, k, cl, b, w, ev, iF, pt, e, act, n });
const M = "SERP-MEASURED", A = "SERP-ARCHETYPE", U = "UNMEASURED-DEMAND";

const ROWS = [
// ═══ BATCH 1 · garba / dandiya PARTNER + romantic Navratri — the cluster autocomplete
//     ranks highest (prefix_hits 14-22) and the SERP gap SubhSandesh's romantic
//     templates fit. Measured SERPs: content farms, 2025-dated titles, off-topic.
R(1,"garba partner captions for instagram","c01-partner-captions",3,7,A,4,"blog listicle","nav","","flick.social / eduyush / content-farm mirrors; no partner-specific page exists"),
R(1,"dandiya partner captions for instagram","c01-partner-captions",3,7,M,4,"blog listicle","nav","","measured: flick.social generic 'dance partner' + eduyush 2025; nothing dandiya-partner specific"),
R(1,"garba partner meaning","c02-partner-meaning",3,6,A,3,"explainer","nav","","definition query; slang sense (date/companion) vs rotating-circle sense — an AEO answer target"),
R(1,"garba partner meaning in hindi","c02-partner-meaning",3,6,A,3,"explainer","nav","","prefix_hits 22 — top row of the whole harvest"),
R(1,"dandiya partner meaning","c02-partner-meaning",2,6,A,3,"explainer","nav"),
R(1,"garba partner on rent","c03-rent-a-partner",3,4,M,3,"news-explainer","nav","","measured: freepressjournal + news; 'rent a garba partner' Instagram trend + Gujarat police advisory (Sep 2026) — newsy, safety angle"),
R(1,"garba partner app","c03-rent-a-partner",2,6,A,4,"blog listicle","nav","","also 'garba partner finder' / 'garba partner website' in autocomplete"),
R(1,"garba partner vacancy meaning","c03-rent-a-partner",2,7,A,3,"explainer","nav","","Instagram meme phrasing ('garba partner vacancy open'); SERP is IG/YT reels"),
R(1,"garba partner quotes","c04-partner-quotes",2,7,A,4),
R(1,"garba partner shayari","c04-partner-quotes",2,8,A,4,"blog listicle","nav","","measured adjacent 'garba shayari hindi love': zero on-topic result"),
R(1,"garba partner captions for instagram in gujarati","c04-partner-quotes",2,8,A,4),
R(1,"garba partner captions for instagram in hindi","c04-partner-quotes",2,8,A,4),
R(1,"garba partner quotes in english","c04-partner-quotes",2,7,A,4),
R(1,"garba partner captions for instagram for girl","c04-partner-quotes",1,8,A,4),
R(1,"how to ask someone to be your garba partner","c05-ask-partner",1,9,M,5,"how-to guide","nav","","measured: 2008 mailing lists, azafashions etiquette, Oxford dance-society page — no answer exists; AEO opening"),
R(1,"dandiya partner steps","c06-partner-dance",3,4,A,2,"how-to guide","nav","","SERP is YouTube-heavy (video intent) — blog needs embedded step GIFs"),
R(1,"dandiya with partner","c06-partner-dance",2,5,A,3,"how-to guide"),
R(1,"garba poses with partner","c06-partner-dance",2,8,A,3,"blog listicle","nav","","Pinterest/IG image SERP — Gate 5 risk, keep as pose-guide listicle"),
R(1,"dandiya night couple poses","c06-partner-dance",2,8,A,3),
R(1,"garba night captions for couples","c07-couple-captions",2,8,M,4,"blog listicle","nav","","measured: nestasia, eduyush 2025, limey Halloween couples page — no couple+garba page"),
R(1,"navratri wishes for love","c08-romantic-wishes",3,8,A,5,"blog listicle","nav","","platform is 96.3% romantic pages (facts.md) — strongest template fit"),
R(1,"navratri wishes for girlfriend","c08-romantic-wishes",2,8,M,5,"blog listicle","nav","","measured: eduyush 2025, content-farm mirrors, Chaitra pages — none romantic"),
R(1,"navratri wishes for boyfriend","c08-romantic-wishes",2,8,A,5),
R(1,"navratri wishes for wife","c08-romantic-wishes",3,8,M,5,"blog listicle","nav","","measured (hindi variant): eduyush, tring, quint 2022, capcut — none for a wife"),
R(1,"navratri wishes for husband","c08-romantic-wishes",3,7,A,5),
R(1,"navratri wishes for love in hindi","c08-romantic-wishes",2,8,M,5,"blog listicle","nav","","measured: no Navratri romantic shayari page in results"),
R(1,"navratri wishes for wife in hindi","c08-romantic-wishes",2,8,M,5),
R(1,"navratri wishes for crush","c08-romantic-wishes",1,9,M,5,"blog listicle","nav","","measured: zero crush-specific result"),
R(1,"navratri wishes for long distance love","c08-romantic-wishes",1,9,M,5,"blog listicle","nav","","measured: zero; only New Year LDR pages — maps to /missyou-gf template"),
R(1,"navratri wishes with name","c09-personalised",3,8,M,5,"template page + blog","nav","","measured: quint 2021-2024, dreamina, digit — no name-insert tool; product-shaped (SubhSandesh mechanic)"),
R(1,"first garba with boyfriend date ideas","c10-garba-date",1,7,M,4,"blog listicle","nav","","measured: azafashions outfits, hindutone guides — no date-idea page"),
R(1,"forever garba partner quotes","c04-partner-quotes",1,8,A,4),

// ═══ BATCH 2 · INVITATIONS — the 'digital / virtual / online invitation' cluster.
//     Your phrasing 'garba partner invitation' / 'dandiya partner digital invitation'
//     has NO autocomplete demand; the real phrasings people type are these.
R(2,"dandiya invitation card in hindi","c11-invite-language",3,6,A,5,"blog + template page","nav","","prefix_hits 20 — top invitation row"),
R(2,"dandiya invitation message in hindi","c11-invite-language",2,7,A,5),
R(2,"garba invitation message in hindi","c11-invite-language",2,7,A,5),
R(2,"navratri invitation message in hindi","c11-invite-language",2,7,A,5),
R(2,"navratri garba invitation message in hindi","c11-invite-language",1,7,A,5),
R(2,"navratri invitation card format in hindi","c11-invite-language",2,6,A,5),
R(2,"dandiya invitation in marathi","c11-invite-language",2,8,A,5,"blog + template page","nav","","prefix_hits 13"),
R(2,"navratri invitation card in marathi","c11-invite-language",2,8,A,5),
R(2,"garba invitation card in gujarati","c11-invite-language",2,7,A,5),
R(2,"garba invitation in gujarati","c11-invite-language",1,7,A,5),
R(2,"garba invitation wording","c12-invite-wording",2,7,M,5,"blog listicle","nav","","measured adjacent: 1invites design posts, campus event pages — no wording page"),
R(2,"garba invitation message","c12-invite-wording",2,7,M,5),
R(2,"navratri invitation message","c12-invite-wording",3,6,M,5,"blog listicle","nav","","measured: tring 80+, desievite, boldsky 2025, bridgechronicle 2025 (stale)"),
R(2,"navratri invitation message for whatsapp","c12-invite-wording",2,6,M,5),
R(2,"dandiya night invitation message for whatsapp","c12-invite-wording",2,8,M,5,"blog listicle","nav","","measured: event listings only (insider, campus) — no message page"),
R(2,"dandiya night invitation message in english","c12-invite-wording",2,8,A,5),
R(2,"navratri invitation in english","c12-invite-wording",2,6,A,5),
R(2,"navratri invitation text","c12-invite-wording",2,6,A,5),
R(2,"navratri invitation for office","c12-invite-wording",2,6,A,5),
R(2,"dandiya night invitation wording for society","c12-invite-wording",1,7,M,5,"blog listicle","nav","","measured: k-state, glasgow, humanitix listings — structure only"),
R(2,"navratri invitation message for home puja","c13-home-invite",2,6,M,5,"blog listicle","nav","","measured: tring, desievite, hinduismtoday; 2025/2023 dated"),
R(2,"kanya pujan invitation message","c13-home-invite",2,8,M,5,"blog listicle","nav","","measured: news + governor pages, no message page"),
R(2,"navratri invitation online free","c14-digital-invite",2,4,A,5,"template page + blog","nav","","SERP = tools (Adobe Express, Canva, desievite) — a blog post cannot outrank tools; pair with a live template"),
R(2,"navratri invitation card online free with photo","c14-digital-invite",1,5,A,5,"template page + blog"),
R(2,"navratri invitation card online free with name","c14-digital-invite",1,5,A,5,"template page + blog"),
R(2,"dandiya invitation card online free","c14-digital-invite",3,4,M,5,"template page + blog","nav","","measured: adobe.com/in express, 1invites, kapwing, scraped .gov.br mirrors"),
R(2,"garba invitation card maker free","c14-digital-invite",3,4,M,5,"template page (tool)","nav","","tool SERP — only a working template page can rank; blog = supporting 'how to make' post"),
R(2,"dandiya invitation card maker online free","c14-digital-invite",3,4,A,5,"template page (tool)"),
R(2,"garba invitation video","c15-invite-video",2,5,A,4,"blog + video","nav","","YouTube/CapCut video SERP"),
R(2,"navratri invitation video maker online free","c15-invite-video",1,4,A,5,"template page (tool)"),
R(2,"dandiya night invitation template free","c14-digital-invite",2,5,M,5,"template page + blog"),
R(2,"virtual garba night invitation online","c14-digital-invite",1,7,U,5,"blog + template page","nav","","your requested phrasing — no autocomplete row; measured SERP for virtual garba = 2020 pandemic pages. Low demand, zero competition"),

// ═══ BATCH 3 · HIGH-VOLUME HEADS + bridges (Dussehra, Durga Puja, Sharad Purnima),
//     regional languages, outfits and party guides. Bigger volume, more contested.
R(3,"navratri wishes in hindi","c16-wishes-language",5,5,M,4,"blog listicle","nav","","measured: eduyush '2025', tring, successcds, lutonhoo mirror, quint 2022 — stale years everywhere"),
R(3,"navratri ki hardik shubhkamnaye","c16-wishes-language",4,5,A,4,"blog listicle (Devanagari)","nav","","hl=hi autocomplete top row ('navratri ki hardik badhai')"),
R(3,"navratri status in hindi","c16-wishes-language",4,5,A,3),
R(3,"navratri wishes in marathi","c16-wishes-language",3,6,A,4),
R(3,"navratri wishes in gujarati","c16-wishes-language",3,6,M,4,"blog listicle","nav","","measured: republicworld 2020/2021, tring, hindutone — stale"),
R(3,"navratri status in gujarati","c16-wishes-language",2,6,A,3),
R(3,"navratri wishes in sanskrit","c16-wishes-language",2,6,A,4),
R(3,"navratri wishes in english","c16-wishes-language",3,5,A,4),
R(3,"navratri wishes for best friend","c17-wishes-relation",2,6,A,4),
R(3,"navratri wishes for office","c17-wishes-relation",2,5,A,4),
R(3,"navratri status for instagram","c18-status-captions",2,6,A,3),
R(3,"navratri status shayari","c18-status-captions",2,7,A,3),
R(3,"garba captions for instagram","c18-status-captions",4,6,M,3,"blog listicle","nav","","measured: flick.social x3, eduyush 2025, nestasia, spun mirrors"),
R(3,"dandiya captions for instagram","c18-status-captions",3,6,M,3),
R(3,"garba night with friends captions","c18-status-captions",2,7,A,3),
R(3,"navratri 2027 wishes","c19-year",3,5,M,4,"blog listicle","nav","","2026 head owned by hindutone/republic(Chaitra); publish now titled 2027 to catch next cycle"),
R(3,"navratri day wise wishes","c19-year",2,6,M,4,"blog listicle","nav","","measured: no day-wise wish page, only puja guides"),
R(3,"navratri images today with quotes in hindi","c18-status-captions",3,6,A,2,"image gallery","nav","","image intent — Gate 5 risk, kept for volume"),
R(3,"dussehra wishes for girlfriend","c20-dussehra",2,7,M,5,"blog listicle","dus","","measured: swifdoo 'Oct 2024', giftstoindia, lutonhoo mirrors"),
R(3,"dussehra wishes for husband","c20-dussehra",2,7,A,5,"blog listicle","dus"),
R(3,"dussehra wishes 2027","c20-dussehra",4,4,M,4,"blog listicle","dus","","2026 head: hindutone x3 — hard this year; 2027 title for next cycle"),
R(3,"durga puja wishes for girlfriend","c21-durga-puja",2,7,M,5,"blog listicle","dp","","measured: giftstoindia, outlook essay — no wishes page"),
R(3,"sharad purnima wishes","c22-purnima",3,5,M,4,"blog listicle","pur","","measured: yatradham, hindutone, dekhopanchang; 2026 date = 25-26 Oct"),
R(3,"sharad purnima garba wishes","c22-purnima",1,8,M,4,"blog listicle","pur","","Sharad Purnima garba 25 Oct 2026 — the one Gujarat garba night still ahead this year"),
R(3,"garba night outfit ideas for couples","c23-outfits",2,3,M,3,"blog listicle","nav","","measured: azafashions, tasva, tatacliq, lashkaraa — retailer blogs (strong)"),
R(3,"dandiya night couple dress","c23-outfits",2,5,A,3),
R(3,"what to wear to garba","c23-outfits",3,3,A,3,"blog listicle","nav","","retailer SERP, hard"),
R(3,"how to host garba night at home","c24-host",2,4,M,4,"how-to guide","nav","","measured: venuelook x2, propertypistol, radhakrishnatemple 2025"),
R(3,"dandiya night theme party ideas","c24-host",2,4,M,4,"blog listicle"),
R(3,"why is dandiya played during navratri","c25-explainer",3,4,A,2,"explainer","nav","","prefix_hits 21; AEO/AI-Overview answer target"),
R(3,"garba vs dandiya difference","c25-explainer",2,4,A,2,"explainer"),
R(3,"navratri gift for girlfriend","c26-gift",2,6,M,5,"blog listicle","nav","improve-existing","collides with live /blog/navratri-gift-ideas — add a girlfriend section, do not write a new page"),
];

// ── derive ───────────────────────────────────────────────────────────────────
const parse = (line) => { const c = []; let cur = "", q = false;
  for (let i = 0; i < line.length; i++) { const ch = line[i];
    if (q) { if (ch === '"' && line[i+1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true; else if (ch === ",") { c.push(cur); cur = ""; } else cur += ch; }
  c.push(cur); return c; };
const DEMAND = new Map();
for (const f of ["ac-en", "ac-en2", "ac-hi"]) {
  const rows = readFileSync(`${f}/autocomplete.csv`, "utf8").split("\n").slice(1).filter(Boolean);
  for (const l of rows) { const c = parse(l); const k = c[0].toLowerCase().trim(); DEMAND.set(k, Math.max(+c[2] || 0, DEMAND.get(k) || 0)); }
}
const merged = ["suggestion,prefix_hits_max", ...[...DEMAND].sort((a, b) => b[1] - a[1]).map(([k, v]) => `"${k.replace(/"/g, '""')}",${v}`)];
writeFileSync("autocomplete.csv", merged.join("\n") + "\n");

const BAND = { 5: "10,000+/mo", 4: "3,000-10,000/mo", 3: "1,000-3,000/mo", 2: "300-1,000/mo", 1: "under 300/mo" };
const out = ROWS.map((r) => {
  const winp = WINP(r.w);
  const clicks = Math.round(MID[r.b] * CTR3 * winp);
  const ev = EV[r.e];
  const publishBy = minus(ev.start, ttr(r.w));
  const bucket = r.act === "improve-existing" ? "own-it-already" : r.w <= 2 ? "hard-differentiator-only" : "next-cycle";
  const own = r.act === "improve-existing" ? "https://subhsandesh.in/blog/navratri-gift-ideas" : "";
  const demand = DEMAND.get(r.k) ?? "";
  return { ...r, winp, clicks, publishBy, bucket, own, demand, score: WINSC(r.w) * r.iF * r.b };
});
// Batch = rank by expected clicks (tie-break: priority score, then autocomplete demand),
// so Batch 1 is the highest-value 32. The improve-existing row is an edit, not a post:
// it goes last. The hand-grouping above is kept as `theme`.
const THEME = { 1: "partner+romantic", 2: "invitations", 3: "heads+bridges" };
out.forEach((r) => (r.theme = THEME[r.B]));
const ranked = [...out].sort((a, b) =>
  (a.act === "improve-existing") - (b.act === "improve-existing") ||
  b.clicks - a.clicks || b.score - a.score || (+b.demand || 0) - (+a.demand || 0));
ranked.forEach((r, i) => { r.B = Math.min(3, Math.floor(i / 32) + 1); r.rank = i + 1; });

const cell = (v) => (/[",\n]/.test(String(v ?? "")) ? `"${String(v).replace(/"/g, '""')}"` : String(v ?? ""));
const HEAD = "keyword,cluster_id,source_url,source_domain,evidence_type,intent,page_type_required,est_volume,volume_source,weakness_count,gate_failed,bucket,priority_score,ranking_urls,category,action,own_url,own_position,expected_clicks,trend,peak_window,publish_by,demand_rank,requested_bucket,publish_rank,theme,note";
writeFileSync("keyword-inventory.csv", [HEAD, ...ranked.map((r) => [
  r.k, r.cl,
  `https://www.google.com/search?q=${encodeURIComponent(r.k)}&gl=in`,
  r.ev === M ? "WebSearch (US-served) 2026-10-12" : r.ev === A ? "inferred from the measured SERP of this cluster" : "no autocomplete demand recorded",
  r.ev, r.iF >= 5 ? "transactional" : r.iF >= 4 ? "informational-commercial" : "informational",
  r.pt, BAND[r.b], "EST (peak window)", r.w, "", r.bucket, r.score, "", r.cl.replace(/^c\d+-/, ""),
  r.act || "new-page", r.own, r.own ? "unmeasured-live-page" : "none", r.clicks,
  "seasonal", EV[r.e].peak, r.publishBy, r.demand, `B${r.B}`, r.rank, r.theme, r.n,
].map(cell).join(","))].join("\n") + "\n");

const by = (f) => out.reduce((m, r) => (m[f(r)] = (m[f(r)] || 0) + 1, m), {});
console.log(`rows: ${out.length} · autocomplete unique: ${DEMAND.size}`);
console.log("per batch:", by((r) => `B${r.B}`));
console.log("buckets:", by((r) => r.bucket));
console.log("evidence:", by((r) => r.ev));
for (const b of [1, 2, 3]) {
  const s = out.filter((r) => r.B === b);
  console.log(`B${b}: ${s.length} kw · ${new Set(s.map((r) => r.cl)).size} clusters · ${s.reduce((a, r) => a + r.clicks, 0)} clicks/mo peak (EST)`);
}
const dup = Object.entries(by((r) => r.k)).filter(([, n]) => n > 1);
if (dup.length) console.log("DUPLICATE KEYWORDS:", dup);

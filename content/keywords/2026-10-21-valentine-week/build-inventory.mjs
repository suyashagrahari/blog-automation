// Valentine's Week 2027: 8 days x 250 keywords = 2000, 5 batches of 50 per day.
// Inputs: ac-<day>-<market>/autocomplete.csv (live Google autocomplete, markets us/in/gb/ca/au),
//         archetype weak counts measured in serps.md (19 SERPs, 2026-10-21),
//         ../site-inventory.csv + ../strapi-live-articles.json (own-site overlap, Phase 1/8b).
// Volume is EST everywhere (no tool data). Bands/CTR/win-prob are the gates.md tables, the same
// ones the 2026-10-12 Halloween run used. Run from this directory: node build-inventory.mjs
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import * as XLSX from "xlsx";

const TODAY = "2026-10-21";
const MID = { 5: 20000, 4: 6500, 3: 2000, 2: 650, 1: 150 };
const BAND = { 5: "10,000+/mo", 4: "3,000-10,000/mo", 3: "1,000-3,000/mo", 2: "300-1,000/mo", 1: "under 300/mo" };
const WINP = (w) => (w >= 5 ? 0.6 : w >= 3 ? 0.4 : w >= 1 ? 0.15 : 0);
const WINSC = (w) => (w >= 5 ? 5 : w >= 3 ? 4 : w >= 1 ? 2 : 1);
const CTR3 = 0.11;
const ttr = (w) => (w >= 5 ? 56 : w >= 3 ? 84 : 182);
const KD = (w) => (w >= 7 ? "low (EST 10-25)" : w >= 5 ? "medium (EST 25-45)" : w >= 3 ? "medium-high (EST 45-60)" : "high (EST 60+)");
const minus = (iso, d) => { const x = new Date(iso + "T00:00:00Z"); x.setUTCDate(x.getUTCDate() - d); return x.toISOString().slice(0, 10); };
const plusY = (iso) => String(+iso.slice(0, 4) + 1) + iso.slice(4);
const MARKETS = ["us", "in", "gb", "ca", "au"];
const PER_DAY = 250, BATCH = 50, LONG_MIN = 125;

const DAYS = [
  { key: "rose", name: "Rose Day", date: "2027-02-07", d: "rose day",
    keep: /\brose day\b|\broses?\b.*\b(colou?rs?|meaning|mean)\b|\b(colou?rs?|meaning) of roses?\b|\bnumber of roses\b|\broses? for (valentine|girlfriend|boyfriend|her|him|wife|husband|crush)/,
    cut: /national|\bwine\b|rosé|rose parade|\bjune\b|\bbowl\b|rose gold|tournament|garden|bush|plant|grow|tattoo/ },
  { key: "propose", name: "Propose Day", date: "2027-02-08", d: "propose day",
    keep: /\bpropos(e|al|ing)\b/,
    cut: /business|research|project|grant|thesis|budget|sales|\bbid\b|rfp|essay|sample proposal|proposal (letter|writing|template|format)|dissertation|marketing|book proposal|thesis|consult|scope|funding|amendment|bill|law|ballot|\bprop\b|government|policy|engineering|software|web design|event proposal|sponsorship|partnership|price|quote form|cost|venue|rings?\b|diamond|jeweler|photographer|nyc|paris|hawaii|disney|vegas/ },
  { key: "chocolate", name: "Chocolate Day", date: "2027-02-09", d: "chocolate day",
    keep: /\bchocolate day\b|\bchocolates? (gift|box|bouquet|hamper|basket)|\bchocolates? for (valentine|girlfriend|boyfriend|her|him|wife|husband|crush|lover)/,
    cut: /national chocolate|world chocolate|international chocolate|\bjuly\b|\boctober\b|recipe|cake recipe|milk chocolate day|white chocolate day|dark chocolate day|chocolate cake day|chocolate chip|covered/ },
  { key: "teddy", name: "Teddy Day", date: "2027-02-10", d: "teddy day",
    keep: /\bteddy day\b|\bteddy (bear )?(gifts?|for (girlfriend|boyfriend|wife|husband|her|him|valentine|lover|crush|bestie))\b|\bteddy bear (quotes|messages|wishes|captions|love)\b/,
    cut: /roosevelt|swims|ruxpin|bridgewater|grahams|teddy fresh|coat|jacket|sherpa|\bdog\b|puppy|hamster|cholla|cactus|afro|riley|pendergrass|sunflower|\bpark\b|picnic|national teddy|teddy bear day|lingerie|bodysuit|\bbra\b|bodysuit|hair|teddy's|teddys|teddy bear museum|factory|vermont|build a bear|santos|\bkpop\b/ },
  { key: "promise", name: "Promise Day", date: "2027-02-11", d: "promise day",
    keep: /\bpromise day\b|\bpromises? (to|for) (my |your )?(girlfriend|boyfriend|wife|husband|her|him|partner|you|lover|bestie|best friend|crush)|\bpromise (quotes|lines|messages|letter) for\b|\bpromises (in a relationship|for relationship|to make)/,
    cut: /promise ring|land|keeper|kpop|song|lyrics|\bmovie\b|scholarship|bank|loan|church|bible|god|scripture|verse/ },
  { key: "hug", name: "Hug Day", date: "2027-02-12", d: "hug day",
    keep: /\bhug day\b|\b(types|kinds) of hugs?\b|\bvirtual hugs?\b|\bhugs? (for|to) (him|her|my |your |girlfriend|boyfriend|wife|husband|you|partner)|\bsending (you )?(a )?hugs?\b|\bhug quotes\b|\bhug meaning\b/,
    cut: /national hug|hugging day|\bjan(uary)?\b|emoji|gif|sticker|meme|\bdog\b|\bcat\b|tree|life ?hug|mug|toy|plush|pillow|bracelet|necklace|ring\b|lamp|sweatshirt|shirt|hoodie/ },
  { key: "kiss", name: "Kiss Day", date: "2027-02-13", d: "kiss day",
    keep: /\bkiss day\b|\b(types|kinds) of kiss(es)?\b|\bkiss(es)? (meaning|meanings|for (him|her|my|girlfriend|boyfriend))\b|\bkiss quotes\b|\bkiss messages\b/,
    cut: /national kiss|world kiss|international kiss|kissing day|kiss and make up|\bjuly\b|\bjune\b|\bhot\b|sexy|lip ?lock|nsfw|porn|xxx|\bbed\b|naked|18\+|dirty|nude|tongue|band|gene simmons|kpop|\bkiss fm\b|chocolate kiss|hershey|emoji|gif|sticker|meme|drama|cast|episode/ },
  { key: "valentine", name: "Valentine's Day", date: "2027-02-14", d: "valentines day",
    keep: /\bvalentines?\b|\bgalentines?\b|\bpalentines?\b/,
    cut: /rose day|propose day|chocolate day|teddy|promise day|hug day|kiss day|movie|\bcast\b|\bfilm\b|netflix|song|lyrics|\bne\b|nebraska|texas|arkansas|bobby|karen|valentino|hotel|near me|nearby|massacre|cafe|reservation|disney|starbucks|mcdonald|dunkin|krispy|chick|olive garden|red lobster|crumbl|sephora|lush|victoria|pandora|\bkay\b|zales|edible|1-?800|ftd|teleflora|proflowers|hallmark|cvs|walgreens|target|walmart|amazon|costco|trader|dollar|etsy|temu|shein|michaels|hobby lobby|kohl|macy|nordstrom|ulta|bath and body|lululemon|nike|stanley|coach|kate spade|apple|sale|deals?\b|coupon|promo|closed|open|holiday hours|post office|bank|school (closed|holiday)|stock|nail|nails|makeup|outfit|dress|shirt|sweater|pajamas|lingerie|tattoo|costume|crochet|cookie|cake|cupcake|recipe|food|dessert|charcuterie|brunch|dinner|cocktail|drink|candy|chocolate covered|strawberr|cereal|pizza|treats/ },
];

// Shared cuts (Gate 1/2): things a blog/template page cannot serve, or junk.
const SHARED_CUT = [
  /\b20(0\d|1\d|2[0-5]|2[89]|[3-9]\d)\b/,                                                    // stale year (2026 is year-shifted below)
  /\bpng\b|\bsvg\b|clip ?art|vector|\bfont\b|\blogo\b|background|backdrop|banner|\bframe\b|sticker|\bgifs?\b|wallpaper|colou?ring|printables?|\bvideos?\b|\bsongs?\b|ringtone|\breels?\b|\bmp3\b|download|\bhd\b|\bppt\b|\bpdf\b|\bdrawing\b|\bdp\b|\bemoji\b|\bmeme\b|\bcake\b|\bjokes?\b/,
  /pinterest|youtube|tiktok|reddit|quora|facebook|twitter|telegram|snapchat/,
  /\b(?![ai]\b)[a-z]\b/,                                                         // alphabet-tail junk ("rose day q")
  /\bxxx\b|porn|nude|naked|sexy|\bhot\b|nsfw|18\+|dirty|kinky|naughty|spicy/,
  /near me|delivery|same day|online order|\bbuy\b|\bprice\b|\bcheap\b|\bshop\b|store|\bsale\b|amazon|flipkart|fnp|igp|ferns|archies|myntra|meesho|blinkit|zepto|swiggy|instamart|winni|bigbasket/,
  /delhi|mumbai|bangalore|bengaluru|hyderabad|chennai|kolkata|pune|jaipur|lucknow|noida|gurgaon|london|new york|nyc|chicago|los angeles|houston|dallas|toronto|sydney|melbourne|dubai/,
  /super ?bowl|\bnfl\b|national proposal|chinese valentine|qixi|\bs\d+-?e\d+\b|episode|news\b|cricut|with toys|appetizer|under \d+|\b(atlanta|denver|dublin|san diego|richmond|\bdc\b|michigan|boston|seattle|austin|phoenix|miami|orlando|nashville|portland|charlotte|tampa|philly|philadelphia|baltimore|detroit|kansas city|columbus|pittsburgh|minneapolis|st louis|cleveland|cincinnati|indianapolis|sacramento|san antonio|san jose|san francisco|oklahoma|louisville|milwaukee|raleigh|calgary|ottawa|montreal|edmonton|perth|brisbane|adelaide|auckland|singapore|kuala lumpur)\b/,
  /^(what|when|why|which|who)( is| are)? (happy )?[a-z']+s? day (quotes|wishes|gifts?|messages|captions|images|shayari|status)$/,
  /teachers? day|teachers?\b|mothers? day|fathers? day|baby shower|non ?veg|wrapping|gift bag|\bjar\b|\bwholesale\b|\bbulk\b|\bjokes?\b|\bmemes?\b|\btroll\b|\bsingle\b.*\bmemes?\b|\bposter\b|\bflyer\b|\bcard design\b/,
];

// Measured SERP archetypes (serps.md #). weak = weak results in top 10; fit = Gate 5 intent fit 1-5.
// [regex, archetype, weakWeek, weakVday, fit, pageType, serpRef]
const ARCH = [
  [/\b2027\b/, "year-head", 8, 8, 4, "blog listicle", "#1 #11 #16"],
  [/\b(date|when is|when|kab hai|kab|list|calendar|schedule|which day|full list|all days)\b/, "date/list", 7, 7, 2, "blog explainer", "#1 #7 #11"],
  [/\b(hindi|marathi|bengali|bangla|gujarati|tamil|telugu|kannada|malayalam|punjabi|odia|urdu|nepali|shayari|sayari|hinglish)\b/, "language", 9, 8, 4, "blog listicle", "#19"],
  [/\b(card|cards|ecard|ecards|e-card|greeting|greetings card|virtual|online|digital|with name|with photo|link|website|page|maker|generator|surprise for|long distance|ldr)\b/, "tool/virtual", 6, 4, 5, "template page + blog", "#10 #13"],
  [/\b(types|kinds|meaning|meanings|mean|significance|history|why|what is|what does|importance|story|origin|facts|how many)\b/, "explainer", 6, 6, 2, "blog explainer", "#12 #15"],
  [/\b(pickup|pick up|rizz|chat up|flirty|lines)\b/, "pickup/lines", 7, 7, 4, "blog listicle", "#14"],
  [/\b(gift|gifts|hamper|basket|bouquet|box|present|presents)\b/, "gift", 6, 2, 4, "blog listicle", "#4 #9"],
  [/\b(ideas|idea|things to do|how to|what to|plan|plans|celebrate|activities|date night|surprise|way|ways)\b/, "ideas/how-to", 6, 6, 3, "blog guide", "#13 #18"],
  [/\b(quotes|quote|wishes|wish|messages|message|sms|text|texts|lines|greetings|status|captions|caption|poems|poem|poetry|letter|notes|note|paragraph|sayings|words)\b/, "quotes/wishes", 7, 3, 4, "blog listicle", "#2 #3 #5 #6 #8 #17"],
  [/\b(images|image|pics|pictures|photos|photo)\b/, "images", 6, 5, 2, "blog listicle (image-led)", "#6"],
];
const DEFAULT_ARCH = ["general", 6, 4, 3, "blog guide", "#1-#19 median"];

// Top-3 measured ranking URLs per archetype (week-day vs Valentine's Day), from serps.md.
const TOP3 = {
  week: {
    "year-head": ["https://www.timeanddate.com/holidays/fun/red-rose-day", "https://www.facebook.com/fb-answers/rose-day-2027-date/", "https://thursd.com/articles/valentine-week-rose-day-to-valentines-day"],
    "date/list": ["https://www.pinterest.com/quotescollectionupdateddaily/valentine-week-2027-list/", "https://www.lovlio.in/blog/valentine-week-2027-days-dates", "https://www.festivalsdatetime.co.in/2018/11/2027-valentine-week-list-calendar-2027.html"],
    language: ["https://www.rekhta.org/top-sher/aapki-baat-baat-phoolon-ki-on-rose-day?lang=hi", "https://www.pinterest.com/pin/642537071814551688/", "https://shayarii.com/rose-day-shayari/"],
    "tool/virtual": ["https://www.canva.com/create/cards/valentines-day-cards/", "https://www.americangreetings.com/ecards/valentines-day", "https://gifft.me/create/your-heart"],
    explainer: ["https://www.mindbodygreen.com/articles/types-of-hugs", "https://www.wikihow.com/Types-of-Hugs", "https://www.venusetfleur.com/blogs/news/the-meaning-of-rose-colors-for-valentines-day"],
    "pickup/lines": ["https://www.weddingwire.in/wedding-tips/proposal-lines--c2419", "https://www.caratlane.com/blog/heart-touching-love-proposal-quotes/", "https://www.fnp.com/quotes/propose-day"],
    gift: ["https://www.fnp.com/gifts/teddy-day-lp", "https://www.goodlifebean.com/blogs/news/teddy-bear-gifts-for-girlfriend", "https://snooplay.in/blogs/news/teddy-day-gift-ideas-to-surprise-your-partner"],
    "ideas/how-to": ["https://www.lovlio.in/blog/valentine-week-2027-days-dates", "https://thursd.com/articles/valentine-week-rose-day-to-valentines-day", "https://snooplay.in/blogs/news/teddy-day-gift-ideas-to-surprise-your-partner"],
    "quotes/wishes": ["https://www.giftalove.com/quotes/propose-day", "https://www.fnp.com/quotes/chocolate-day", "https://timesofindia.indiatimes.com/etimes/trending/happy-hug-day-2026-top-50-wishes-messages-greetings-images-photos-whatsapp-status-and-quotes-for-your-special-someone/articleshow/128172787.cms"],
    images: ["https://www.pinterest.com/ideas/happy-hug-day-images/906158356534/", "https://www.giftalove.com/quotes/hug-day", "https://www.ndtv.com/offbeat/happy-hug-day-2026-significance-wishes-greetings-and-images-for-your-special-one-10991684"],
    general: ["https://www.lovlio.in/blog/valentine-week-2027-days-dates", "https://www.fnp.com/quotes/propose-day", "https://thursd.com/articles/valentine-week-rose-day-to-valentines-day"],
  },
  vday: {
    "year-head": ["https://www.pinterest.com/quotescollectionupdateddaily/happy-valentines-day-2027-quotes-wishes-images/", "https://www.calendardate.com/valentines_day_2027.htm", "https://gift.rayxis.space/blog/happy-valentines-day-wishes-2027"],
    "date/list": ["https://www.timeanddate.com/holidays/us/valentine-day", "https://www.calendardate.com/valentines_day_2027.htm", "https://www.lovlio.in/blog/valentine-week-2027-days-dates"],
    language: ["https://www.pinterest.com/quotescollectionupdateddaily/happy-valentines-day-2027-quotes-wishes-images/", "https://www.adobe.com/express/discover/wishes/valentines", "https://www.countryliving.com/life/a30394033/valentines-day-wishes-messages/"],
    "tool/virtual": ["https://www.canva.com/create/cards/valentines-day-cards/", "https://www.americangreetings.com/ecards/valentines-day", "https://www.theknot.com/content/long-distance-valentines-day-ideas"],
    explainer: ["https://www.venusetfleur.com/blogs/news/the-meaning-of-rose-colors-for-valentines-day", "https://fiftyflowers.com/blogs/flowers/rose-color-meanings", "https://www.learningwithexperts.com/blogs/articles/the-meanings-of-different-coloured-roses-on-valentines-day"],
    "pickup/lines": ["https://www.rd.com/list/valentines-day-pickup-lines/", "https://www.goodhousekeeping.com/holidays/valentines-day-ideas/a63361913/valentines-day-pickup-lines/", "https://www.cosmopolitan.com/relationships/a35450288/valentines-day-pickup-lines/"],
    gift: ["https://www.nytimes.com/wirecutter/gifts/valentines-day-gifts-for-him/", "https://www.uncommongoods.com/gifts/valentines-day/valentines-day-gifts", "https://www.cnn.com/cnn-underscored/gifts/best-valentines-day-gifts-for-him"],
    "ideas/how-to": ["https://www.theknot.com/content/long-distance-valentines-day-ideas", "https://www.reddit.com/r/partyplanning/comments/1hpnrd5/galentines_day_activities/", "https://www.flowersofcharlotte.com/blog/ultimate-galentines-party"],
    "quotes/wishes": ["https://www.americangreetings.com/inspiration/what-to-write/valentines-day-messages-him", "https://www.goodhousekeeping.com/holidays/valentines-day-ideas/a30273635/what-to-write-in-valentines-day-card/", "https://www.countryliving.com/life/a30394033/valentines-day-wishes-messages/"],
    images: ["https://www.pinterest.com/quotescollectionupdateddaily/happy-valentines-day-2027-quotes-wishes-images/", "https://www.adobe.com/express/discover/wishes/valentines", "https://www.entheosweb.com/freebies/valentines-day-wishes/"],
    general: ["https://www.americangreetings.com/inspiration/what-to-write/valentines-day-messages-him", "https://www.theknot.com/content/long-distance-valentines-day-ideas", "https://www.goodhousekeeping.com/holidays/valentines-day-ideas/a30273635/what-to-write-in-valentines-day-card/"],
  },
};

// ── helpers ──────────────────────────────────────────────────────────────────
const parse = (line) => { const c = []; let cur = "", q = false;
  for (let i = 0; i < line.length; i++) { const ch = line[i];
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true; else if (ch === ",") { c.push(cur); cur = ""; } else cur += ch; }
  c.push(cur); return c; };
const csvq = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
// one key per searcher intent: apostrophes, gf/bf, "valentine day" vs "valentines day"
const norm = (s) => s.toLowerCase().replace(/[’']/g, "").replace(/\bgf\b/g, "girlfriend").replace(/\bbf\b/g, "boyfriend")
  .replace(/\bvalentine day\b/g, "valentines day").replace(/\bpick up\b/g, "pickup").replace(/\s+/g, " ").trim();
const words = (s) => s.split(" ").length;
// "rose day quotes in hindi" == "rose day quotes hindi" == "hindi rose day quotes": one keyword, keep the most-demanded phrasing
const STOP = new Set("in for the a an my your to of with and on".split(" "));
const canon = (k) => k.split(" ").filter((t) => !STOP.has(t)).map((t) => t.replace(/s$/, "")).sort().join(" ");
// modifiers beyond the day phrase decide head / mid-tail / long-tail (the day phrase itself is 2 words)
const mods = (k, d) => k.replace(d, " ").split(" ").filter((t) => t && !STOP.has(t) && t !== "happy").length;
const FILL = new Set("happy 2027 best top the a an for my your to on of in and with day cute romantic sweet lovely beautiful new latest special unique heart touching".split(" "));
const MSG = /^(quotes?|wishes|wish|messages?|greetings?|sms|texts?|lines|sayings|words)$/;
const clusterKey = (k) => norm(k).split(" ").filter((t) => !FILL.has(t)).map((t) => (MSG.test(t) ? "msg" : t.replace(/s$/, ""))).sort().join("-");

// own-site keyword set (Phase 1 / 8b)
const OWN = [];
const inv = readFileSync("../site-inventory.csv", "utf8").split("\n").slice(1);
for (const l of inv) { if (!l.trim()) continue; const c = parse(l); if (c[0] && c[2] && !/fixture/.test(c[0])) OWN.push({ k: norm(c[0]), url: c[2] }); }
for (const a of JSON.parse(readFileSync("../strapi-live-articles.json", "utf8")))
  OWN.push({ k: norm(a.slug.replace(/-/g, " ")), url: `https://subhsandesh.in/blog/${a.slug}`, live: true });
const tset = (s) => new Set(norm(s).split(" ").filter((t) => !FILL.has(t)));
const OWNT = OWN.map((o) => ({ ...o, t: tset(o.k) }));
const ownMatch = (k, D) => { const a = tset(k); if (a.size < 2) return null; let best = null;
  for (const o of OWNT) { if (!D.keep.test(o.k)) continue;   // same occasion only: "rose day quotes for girlfriend" is not "girlfriend day quotes"
    let inter = 0; for (const t of a) if (o.t.has(t)) inter++;
    const j = inter / (a.size + o.t.size - inter); if (j >= 0.6 && (!best || j > best.j || (j === best.j && o.live))) best = { ...o, j }; }
  return best; };

// ── build ────────────────────────────────────────────────────────────────────
const ALL = [], SUMMARY = [], CUTLOG = [];
for (const D of DAYS) {
  const IDX = new Map(); let raw = 0;
  for (const m of MARKETS) {
    // -ff = client=firefox re-harvest (chrome client drew HTTP 403 on 2026-10-21); merged by max prefix_hits
    for (const f of [`ac-${D.key}-${m}/autocomplete.csv`, `ac-${D.key}-${m}-ff/autocomplete.csv`]) { if (!existsSync(f)) continue;
    for (const line of readFileSync(f, "utf8").split("\n").slice(1)) { if (!line.trim()) continue; raw++;
      const c = parse(line); let k = norm(c[0]); const hits = +c[2] || 0; let shifted = false;
      const why = !D.keep.test(k) ? "off-day" : D.cut.test(k) ? "day-specific cut" : SHARED_CUT.find((r) => r.test(k.replace(/\b2026\b/, "2027"))) ? "shared cut" : null;
      if (why) { CUTLOG.push([D.key, m, c[0], why]); continue; }
      if (/\b2026\b/.test(k)) { k = k.replace(/\b2026\b/g, "2027"); shifted = true; }
      const e = IDX.get(k) || { k, display: c[0].replace(/\b2026\b/g, "2027").replace(/\bgf\b/g, "girlfriend").replace(/\bbf\b/g, "boyfriend"), hits: {}, shifted: true };
      e.hits[m] = Math.max(e.hits[m] || 0, hits); e.shifted = e.shifted && shifted; IDX.set(k, e);
    } }
  }
  // forced head terms (user ask: the very common high-volume phrasings, year = 2027)
  const D2 = D.key === "valentine" ? "valentines day" : D.d;
  const HEADS = D.key === "valentine"
    ? ["valentines day", "happy valentines day", "valentines day 2027", "happy valentines day 2027", "valentine week", "valentine week list 2027", "valentines day ideas", "valentines day gifts", "valentines day quotes", "valentines day messages", "valentines day cards", "valentines day wishes", "galentines day", "when is valentines day 2027"]
    : [D2, `happy ${D2}`, `${D2} 2027`, `happy ${D2} 2027`, `${D2} quotes`, `${D2} wishes`, `${D2} images`, `${D2} messages`, `when is ${D2} 2027`, `${D2} 2027 date`, `happy ${D2} wishes`, `${D2} quotes for girlfriend`, `${D2} quotes for boyfriend`, `${D2} shayari`];
  for (const h of HEADS) if (!IDX.has(h)) IDX.set(h, { k: h, display: h, hits: {}, shifted: false, seeded: true });

  const isV = D.key === "valentine";
  let rows = [...IDX.values()].map((e) => {
    const h = e.hits, other = Math.max(h.gb || 0, h.ca || 0, h.au || 0), mk = MARKETS.filter((m) => h[m]);
    const demand = 1.5 * (h.us || 0) + (h.in || 0) + 0.6 * other + 1.5 * Math.max(0, mk.length - 1);
    const a = ARCH.find((x) => x[0].test(e.k)); const [arch, wW, wV, fit, pageType, ref] = a ? a.slice(1) : DEFAULT_ARCH;
    const weak = isV ? wV : wW;
    return { ...e, demand, mk, arch, weak, fit, pageType, ref, head: HEADS.includes(e.k), w: words(e.k) };
  });
  const CAN = new Map();
  for (const r of rows) { const c = canon(r.k), o = CAN.get(c);
    if (!o || (r.head && !o.head) || (r.head === o.head && r.demand > o.demand)) CAN.set(c, r); }
  const dropped = rows.length - CAN.size; rows.length = 0; rows.push(...CAN.values());
  for (const r of rows) { const m = mods(r.k, D2); r.tail = r.head || m <= 1 ? "head" : m === 2 ? "mid-tail" : "long-tail"; }
  // band by demand percentile within the day; heads are always the top band
  const byDemand = [...rows].sort((a, b) => b.demand - a.demand);
  byDemand.forEach((r, i) => { const p = i / byDemand.length;
    r.band = r.head ? 5 : p < 0.04 ? 5 : p < 0.15 ? 4 : p < 0.4 ? 3 : p < 0.7 ? 2 : 1;
    if (isV && r.band < 5 && (r.h?.us || r.hits.us)) r.band += 1;                // US Valentine's Day demand runs a tier above the week-days
    if (!isV && r.band > 1 && !r.hits.in && !r.head) r.band -= 1;                // week-days with zero India demand are diaspora-only
  });
  for (const r of rows) {
    r.clicks = Math.round(MID[r.band] * CTR3 * WINP(r.weak));
    r.priority = WINSC(r.weak) * r.fit * r.band;
    r.publish_by = minus(D.date, ttr(r.weak));
    r.bucket = r.weak === 0 ? "do-not-attempt" : r.publish_by < TODAY ? "next-cycle" : "winnable";
    if (r.bucket === "next-cycle") r.publish_by = minus(plusY(D.date), ttr(r.weak));
    r.rankScore = r.clicks * 1000 + r.priority * 10 + r.demand;
  }
  // selection: heads first, then >= LONG_MIN long-tails (4+ words), then the best of the rest
  const sorted = rows.filter((r) => r.bucket !== "do-not-attempt").sort((a, b) => b.rankScore - a.rankScore);
  const pick = new Map(); const add = (r) => { if (pick.size < PER_DAY && !pick.has(r.k)) pick.set(r.k, r); };
  sorted.filter((r) => r.head).forEach(add);
  sorted.filter((r) => r.tail === "long-tail").slice(0, LONG_MIN).forEach(add);
  sorted.filter((r) => r.tail !== "long-tail").forEach(add);                    // the other 50%: head + mid-tail
  for (const r of sorted) add(r);                                                // top up if a pool ran dry
  const chosen = [...pick.values()].sort((a, b) => (b.head - a.head) || (b.rankScore - a.rankScore));
  const clusters = new Map();
  chosen.forEach((r, i) => {
    r.rank = i + 1; r.batch = Math.floor(i / BATCH) + 1;
    const ck = clusterKey(r.k); if (!clusters.has(ck)) clusters.set(ck, { id: `${D.key}-c${String(clusters.size + 1).padStart(3, "0")}`, primary: r.k });
    r.cluster = clusters.get(ck);
    r.own = ownMatch(r.k, D);
    r.action = r.own ? "improve-existing" : r.cluster.primary === r.k ? "new-page" : "secondary-on-cluster-page";
    r.evidence = r.seeded ? "SEED-HEAD+SERP-ARCHETYPE" : r.shifted ? "AUTOCOMPLETE(2026→2027 YEAR-SHIFTED)+SERP-ARCHETYPE" : "AUTOCOMPLETE+SERP-ARCHETYPE";
    ALL.push({ D, r });
  });
  SUMMARY.push({ day: D.name, date: D.date, raw, candidates: rows.length, chosen: chosen.length,
    long: chosen.filter((r) => r.tail === "long-tail").length, mid: chosen.filter((r) => r.tail === "mid-tail").length, dupesMerged: dropped, heads: chosen.filter((r) => r.tail === "head").length,
    pages: new Set(chosen.map((r) => r.cluster.id)).size, own: chosen.filter((r) => r.own).length,
    clicks: chosen.reduce((s, r) => s + r.clicks, 0), us: chosen.filter((r) => r.hits.us).length });
}

// ── write keyword-inventory.csv (skill header + extras) ──────────────────────
const H = "keyword,cluster_id,source_url,source_domain,evidence_type,intent,page_type_required,est_volume,volume_source,weakness_count,gate_failed,bucket,priority_score,ranking_urls,category,action,own_url,own_position,expected_clicks,trend,peak_window,publish_by,demand_rank,day,day_date,batch,batch_rank,tail_type,markets,difficulty_est,serp_ref";
const out = [H];
for (const { D, r } of ALL) {
  const top = TOP3[D.key === "valentine" ? "vday" : "week"][r.arch] || TOP3.week.general;
  const gl = r.hits.us || !r.hits.in ? "us" : "in";
  out.push([r.display, r.cluster.id, `https://www.google.com/search?q=${encodeURIComponent(r.display)}&gl=${gl}`, `google autocomplete (${r.mk.join("/") || "seed"})`,
    r.evidence, r.arch, r.pageType, BAND[r.band], "EST (Feb peak)", r.weak, "", r.bucket, r.priority, top.join(" | "),
    `${D.name} · Batch ${r.batch}`, r.action, r.own?.url || "", r.own ? "unknown (run site: check)" : "none", r.clicks, "seasonal",
    `${minus(D.date, 14)}..${D.date}`, r.publish_by, Math.round(r.demand), D.name, D.date, r.batch, r.rank, r.tail, r.mk.join("/"), KD(r.weak), r.ref].map(csvq).join(","));
}
writeFileSync("keyword-inventory.csv", out.join("\n") + "\n");
writeFileSync("cut-keywords.csv", "day,market,suggestion,reason\n" + CUTLOG.map((c) => c.map(csvq).join(",")).join("\n") + "\n");

// ── per-day batch files, Halloween layout: batches/<day>/batch-N.md + batches/PLAN.json ──
const PLAN = {};
for (const D of DAYS) {
  const rs = ALL.filter((x) => x.D === D).map((x) => x.r);
  mkdirSync("batches", { recursive: true });
  for (let b = 1; b <= 5; b++) {
    const br = rs.filter((r) => r.batch === b);
    PLAN[`${D.key}-B${b}`] = br.map((r) => ({ rank: r.rank, keyword: r.display, tail: r.tail, theme: r.arch, cluster: r.cluster.id,
      cluster_primary: r.cluster.primary, band: BAND[r.band], weak: r.weak, demand: Math.round(r.demand), expected_clicks: r.clicks,
      publish_by: r.publish_by, action: r.action, own_url: r.own?.url || null }));
    const clicks = br.reduce((s, r) => s + r.clicks, 0);
    let md = `# ${D.name} 2027 — Batch ${b} of 5 (50 keywords)\n\n`;
    md += `${D.name} is **${D.date}**. Ranks ${(b - 1) * 50 + 1}–${b * 50} of 250 · expected clicks at the February peak (EST): **${clicks.toLocaleString()}/mo**.\n\n`;
    md += `One row = one keyword. Rows with the same **page** share one post (same SERP cluster); the row whose keyword equals the page is that post's primary. `;
    md += `Weak counts: \`../serps.md\` archetypes; demand: autocomplete \`prefix_hits\` US/IN (weighted, US ×1.5). **HEAD** = high-volume head term. Action \`improve-existing\` = SubhSandesh already has a matching post; edit it, do not write a new one.\n\n`;
    md += `| # | keyword | type | theme | page (cluster primary) | est. peak volume | difficulty | weak/10 | demand | exp. clicks/mo | publish by | action |\n|---|---|---|---|---|---|---|---|---|---|---|---|\n`;
    for (const r of br) md += `| ${r.rank} | ${r.tail === "head" ? "**" + r.display + "** HEAD" : r.display} | ${r.tail} | ${r.arch} | ${r.cluster.primary === r.k ? "_this_" : r.cluster.primary} | ${BAND[r.band]} EST | ${KD(r.weak)} | ${r.weak} | ${Math.round(r.demand)}${r.seeded ? " (seed)" : ""} | ${r.clicks} | ${r.publish_by} | ${r.action}${r.own ? ` → ${r.own.url.replace("https://subhsandesh.in", "")}` : ""} |\n`;
    writeFileSync(`batches/${D.key}-batch-${b}.md`, md);
  }
}
writeFileSync("batches/PLAN.json", JSON.stringify(PLAN, null, 1));

// ── one workbook: Summary + a sheet per day + All 2000 ───────────────────────
const wb = XLSX.utils.book_new();
const rowObj = ({ D, r }) => ({ Day: D.name, Date: D.date, Batch: r.batch, Rank: r.rank, Keyword: r.display, Type: r.tail, Words: r.w,
  "Est. Peak Volume (EST)": BAND[r.band], "Difficulty (EST)": KD(r.weak), "Weak in Top 10": r.weak, Intent: r.arch, "Page Type": r.pageType,
  Markets: r.mk.join("/") || "seed", "US Demand": r.hits.us || 0, "India Demand": r.hits.in || 0, "Expected Clicks/mo": r.clicks, "Priority": r.priority,
  Cluster: r.cluster.id, "Cluster Primary": r.cluster.primary, Action: r.action, "Our URL": r.own?.url || "", Bucket: r.bucket, "Publish By": r.publish_by,
  Evidence: r.evidence, "Google URL": `https://www.google.com/search?q=${encodeURIComponent(r.display)}&gl=${r.hits.us || !r.hits.in ? "us" : "in"}` });
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(SUMMARY.map((s) => ({ Day: s.day, Date: s.date, "Raw autocomplete rows": s.raw, "Candidates after cuts": s.candidates,
  Keywords: s.chosen, "Head terms": s.heads, "Mid-tail": s.mid, "Long-tail": s.long, "Near-duplicates merged": s.dupesMerged, "With US demand": s.us, "Distinct pages (clusters)": s.pages, "Overlap existing posts": s.own, "Exp. clicks/mo (EST)": s.clicks }))), "Summary");
for (const D of DAYS) XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(ALL.filter((x) => x.D === D).map(rowObj)), D.name.replace(/'/g, ""));
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(ALL.map(rowObj)), "All 2000");
XLSX.writeFile(wb, "valentine-week-2027-keywords.xlsx");
console.table(SUMMARY);
console.log("total", ALL.length);

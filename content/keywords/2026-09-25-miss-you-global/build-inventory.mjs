// Builds keyword-inventory.csv for the 2026-09-25 global miss-you run.
// Every band is EST unless volume_source says otherwise. Bands are the gates.md
// Gate 6c table applied to EACH MARKET'S OWN volume, not to India volume — stated
// in shortlist.md as a disclosed deviation, not an invented mapping.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const SCRATCH = "/private/tmp/claude-501/-Users-admin-Desktop-Suyash-gifts-blog-automation/bc8266ff-c59c-4aa9-88e3-ec272ad80b12/scratchpad";
const priorKw = existsSync(`${SCRATCH}/prior-missyou-keywords.txt`)
  ? readFileSync(`${SCRATCH}/prior-missyou-keywords.txt`, "utf8").split("\n").filter(Boolean) : [];
const liveSlugs = existsSync(`${SCRATCH}/live-miss-slugs.txt`)
  ? readFileSync(`${SCRATCH}/live-miss-slugs.txt`, "utf8").split("\n").filter(Boolean) : [];

// ── the verbatim tables from references/gates.md ────────────────────────────
const MID   = { 5: 20000, 4: 6500, 3: 2000, 2: 650, 1: 150 };
const WINP  = (w) => (w >= 5 ? 0.60 : w >= 3 ? 0.40 : w >= 1 ? 0.15 : 0.00);
const WINSC = (w) => (w >= 5 ? 5 : w >= 3 ? 4 : w >= 1 ? 2 : 1);
const CTR   = { 1: 0.28, 2: 0.15, 3: 0.11, "4-5": 0.07, "6-10": 0.03, "11-20": 0.005 };

// k=keyword mk=market cl=cluster b=band w=weak-in-top-10 ev=evidence if=intent-fit(1-5)
// pt=page type  act=action override  n=note
const K = (k, mk, cl, b, w, ev, iF, pt = "blog listicle", act = "", n = "") => ({ k, mk, cl, b, w, ev, iF, pt, act, n });
const M = "SERP-MEASURED", A = "SERP-ARCHETYPE";

const ROWS = [
// ── c01 · English head terms. The user asked for the generics explicitly; they are
//    here with their real verdicts rather than gated out silently.
K("miss you","us/gb","c01-head-en",5,2,A,2,"blog listicle","","head term shared with Rolling Stones / Oliver Tree / blink-182 song entities — split intent"),
K("i miss you","us/gb","c01-head-en",5,2,A,2,"blog listicle","","blink-182 + Beyoncé song entities hold the SERP"),
K("missing you","us/gb","c01-head-en",5,2,A,2,"blog listicle","","song + John Waite entity"),
K("miss you quotes","us/gb","c01-head-en",5,4,M,3,"blog listicle","","rd.com, brainyquote, marriage.com; weak: pinterest, goodreads x2, ibme.utk.edu off-intent"),
K("i miss you quotes","us/gb","c01-head-en",5,4,A,3),
K("missing you quotes","us/gb","c01-head-en",4,4,A,3),
K("i miss you message","us/gb/in","c01-head-en",4,4,A,4,"blog listicle","improve-existing","live: /blog/i-miss-you-message"),
K("i miss you so much","us/gb","c01-head-en",4,3,A,3,"blog listicle","improve-existing","live: /blog/i-miss-you-so-much-message"),
K("miss you love you","us/gb","c01-head-en",3,1,A,2,"blog listicle","","film entity — cast/review queries dominate"),
K("i miss you meaning","us/gb","c01-head-en",3,4,A,2,"explainer"),
K("how i miss you meaning","us/gb","c01-head-en",2,5,A,2,"explainer","","grammar/inversion query, forum-held"),
K("miss you emoji meaning","us/gb","c01-head-en",3,4,A,2,"explainer"),
// ── c02 · the psychology axis — the strongest measured English opening in the run
K("how to say i miss you without sounding desperate","us/gb","c02-without-saying",3,5,M,4,"how-to guide","","weak: facebook, quora x2, wikipedia off-intent, substack comments"),
K("i miss you without saying it","us/gb","c02-without-saying",3,5,A,4,"how-to guide"),
K("how to say i miss you without actually saying it","us/gb","c02-without-saying",2,5,A,4,"how-to guide"),
K("ways to say i miss you without saying it","us/gb","c02-without-saying",2,5,A,4,"blog listicle"),
K("how to tell someone you miss them without being needy","us/gb","c02-without-saying",2,5,A,4,"how-to guide"),
K("subtle ways to say i miss you over text","us/gb","c02-without-saying",2,4,A,4,"blog listicle","","adjacent live page: cute-ways-to-say-i-miss-you-over-text — check before drafting"),
// ── c03 · the translation hub. The dominant cross-market pattern in the whole harvest.
K("i miss you in spanish","us/gb","c03-translate-en",5,4,A,3,"explainer + phrasebook"),
K("i miss you in french","us/gb","c03-translate-en",4,4,A,3,"explainer + phrasebook"),
K("i miss you in korean","us/gb","c03-translate-en",4,4,A,3,"explainer + phrasebook"),
K("i miss you in italian","us/gb","c03-translate-en",4,4,A,3,"explainer + phrasebook"),
K("i miss you in japanese","us/gb","c03-translate-en",4,4,A,3,"explainer + phrasebook"),
K("i miss you in german","us/gb","c03-translate-en",3,4,A,3,"explainer + phrasebook"),
K("i miss you in portuguese","us/gb","c03-translate-en",3,4,A,3,"explainer + phrasebook"),
K("i miss you in arabic","us/gb","c03-translate-en",3,4,A,3,"explainer + phrasebook"),
K("i miss you in russian","us/gb","c03-translate-en",3,4,A,3,"explainer + phrasebook"),
K("i miss you in different languages","us/gb/in","c03-translate-en",4,5,M,3,"pillar hub","improve-existing","live: /blog/i-miss-you-in-different-languages; weak: quora, medium, afar off-intent, imtranslator, indifferentlanguages"),
K("i miss you too in spanish","us","c03-translate-en",3,4,A,3,"explainer"),
K("i miss you so much in spanish","us","c03-translate-en",3,4,A,3,"explainer"),
// ── c04 · Spanish: Spain, Mexico, US-Hispanic
K("frases de te extraño","es/mx/us","c04-es",4,4,M,4,"blog listicle","","weak: norfipc, frasesconemocion, pensador, wikipedia off-intent"),
K("te extraño mucho frases para el","es/mx","c04-es",3,4,A,4),
K("frases de te extraño para mi novia","es/mx","c04-es",3,4,A,4),
K("carta para decir te extraño","es/mx","c04-es",2,4,A,5,"how-to guide"),
K("te echo de menos significado","es","c04-es",3,3,A,2,"explainer","","Netflix series 'Te echo de menos' owns the bare head term in Spain"),
K("diferencia entre te extraño y te echo de menos","es/mx","c04-es",2,5,A,3,"explainer","","regional split: extrañar (LatAm) vs echar de menos (Spain) — original angle"),
K("te extraño en ingles como se dice","es/mx","c04-es",3,4,A,3,"explainer"),
K("otra forma de decir te extraño","mx/es","c04-es",2,4,A,4,"blog listicle"),
K("mensajes de te extraño para whatsapp","es/mx","c04-es",3,4,A,5,"blog listicle"),
K("frases de te extraño para una amiga","es/mx","c04-es",2,4,A,4),
K("te extraño papa frases","mx/es","c04-es",2,4,A,4,"blog listicle","","grief-adjacent — needs tone care"),
K("como decir te extraño sin decirlo","es/mx","c04-es",2,5,A,4,"how-to guide","","Spanish twin of the c02 English winner"),
K("te echo de menos en catalan","es","c04-es",2,4,A,2,"explainer"),
K("te extraño en silencio significado","mx","c04-es",2,3,A,2,"explainer","","partly a Grupo Firme song query"),
K("imagenes de te extraño para enviar","es/mx","c04-es",3,3,A,3,"image gallery"),
K("pagina web para decir te extraño","es/mx","c04-es",1,5,A,5,"product landing","","product-shaped; almost no incumbent"),
// ── c05 · Portuguese / Brazil
K("mensagem de saudade para namorado","br/pt","c05-pt",4,5,M,4,"blog listicle","","weak: tiktok x2, pinterest, medium, coroasparavelorio off-intent"),
K("frases de saudade para namorada","br/pt","c05-pt",4,5,A,4),
K("saudade em ingles como se diz","br/pt","c05-pt",3,4,A,3,"explainer","","the untranslatable-word angle, genuinely researchable"),
K("sinto sua falta em ingles","br/pt","c05-pt",3,4,A,3,"explainer"),
K("mensagem de saudade para amiga","br/pt","c05-pt",3,5,A,4),
K("frases de saudades eternas","br/pt","c05-pt",3,4,A,3,"blog listicle","","memorial intent — tone care"),
K("mensagem de saudade para mae","br/pt","c05-pt",3,5,A,4),
K("saudade ou saudades qual o certo","br/pt","c05-pt",3,4,A,2,"explainer"),
K("cartao virtual de saudade","br/pt","c05-pt",1,5,A,5,"product landing"),
K("o que significa saudade","br/pt","c05-pt",3,3,A,2,"explainer"),
// ── c06 · French
K("message tu me manques","fr","c06-fr",4,3,M,4,"blog listicle","","incumbents are product blogs (Lovebox, Flexilivre) — the same play as ours"),
K("tu me manques tellement texte","fr","c06-fr",3,3,A,4),
K("tu me manques en anglais","fr","c06-fr",3,4,A,3,"explainer"),
K("sms tu me manques pour lui","fr","c06-fr",3,3,A,4),
K("tu me manques mon amour texte","fr","c06-fr",3,3,A,4),
K("comment dire tu me manques autrement","fr","c06-fr",2,5,A,4,"how-to guide"),
K("tu me manques signification grammaire","fr","c06-fr",1,5,A,2,"explainer","","'you are missing FROM me' — the dative construction, a real linguistics hook"),
K("poeme tu me manques","fr","c06-fr",2,4,A,3),
K("tu me manques en arabe","fr","c06-fr",2,4,A,3,"explainer"),
K("page personnalisee tu me manques","fr","c06-fr",1,5,A,5,"product landing"),
// ── c07 · German
K("ich vermisse dich spruche","de","c07-de",4,4,M,4,"blog listicle","","weak: studyflix off-intent, wikipedia off-intent, liebesromantik, infranken"),
K("ich vermisse dich bilder","de","c07-de",4,3,A,3,"image gallery"),
K("ich vermisse dich so sehr spruche","de","c07-de",3,4,A,4),
K("ich vermisse dich auf italienisch","de","c07-de",2,4,A,3,"explainer"),
K("ich vermisse dich auf turkisch","de","c07-de",2,4,A,3,"explainer","","Turkish is Germany's largest immigrant language — genuine demand"),
K("ich vermisse dich in zahlen","de","c07-de",2,5,A,3,"explainer","","number-code shorthand; no strong incumbent"),
K("wie sage ich ihm dass ich ihn vermisse","de","c07-de",2,5,A,4,"how-to guide"),
K("ich vermisse dich nachricht fur freundin","de","c07-de",2,4,A,4),
K("vermissen spruche fur freunde","de","c07-de",3,4,A,4),
K("ich vermisse dich seite erstellen","de","c07-de",1,5,A,5,"product landing"),
// ── c08 · Italian
K("frasi mi manchi amore","it","c08-it",4,4,M,4,"blog listicle","","weak: wikipedia off-intent, cartoline, dediche, frasiamorose"),
K("mi manchi in inglese","it","c08-it",3,4,A,3,"explainer"),
K("mi manchi tanto frasi","it","c08-it",3,4,A,4),
K("mi manchi frasi per lui","it","c08-it",3,4,A,4),
K("mi manchi in spagnolo","it","c08-it",2,4,A,3,"explainer"),
K("come dire mi manchi in modo originale","it","c08-it",2,5,A,4,"how-to guide"),
K("mi manchi immagini da inviare","it","c08-it",3,3,A,3,"image gallery"),
K("pagina personalizzata mi manchi","it","c08-it",1,5,A,5,"product landing"),
// ── c09 · Dutch
K("ik mis je quotes","nl","c09-nl",3,4,A,4,"blog listicle"),
K("ik mis je gedicht","nl","c09-nl",2,4,A,3),
K("ik mis je berichtje voor hem","nl","c09-nl",2,4,A,4),
K("ik mis je in het frans","nl","c09-nl",1,4,A,3,"explainer"),
K("ik mis je nu al betekenis","nl","c09-nl",1,4,A,2,"explainer"),
K("ik mis je kaartje online sturen","nl","c09-nl",1,5,A,5,"product landing"),
// ── c10 · Polish
K("tesknie za toba cytaty","pl","c10-pl",3,4,A,4,"blog listicle","","Harlan Coben Netflix series contaminates the bare head term"),
K("tesknie za toba wierszyk","pl","c10-pl",2,4,A,3),
K("tesknie za toba sms","pl","c10-pl",2,4,A,4),
K("tesknie za toba po angielsku","pl","c10-pl",2,4,A,3,"explainer"),
K("jak powiedziec tesknie inaczej","pl","c10-pl",1,5,A,4,"how-to guide"),
// ── c11 · Turkish — gift e-commerce blogs already own this SERP, which is our model
K("ozlem sozleri","tr","c11-tr",4,3,A,4,"blog listicle","","ciceksepeti / hediyesepeti / sosyopix — gift brands hold it"),
K("seni ozledim sozleri","tr","c11-tr",4,3,M,4,"blog listicle","","weak: last.fm lyrics x2 off-intent, 1000kitap"),
K("seni ozledim mesajina verilecek cevaplar","tr","c11-tr",3,9,M,4,"how-to guide","","weak: kizlarsoruyor x3, uludagsozluk x2, normalsozluk, exkutupsozluk, wikipedia, steamcommunity — no editorial page exists"),
K("seni ozledim diyen erkege ne cevap verilir","tr","c11-tr",2,9,A,4,"how-to guide"),
K("seni ozledim ingilizce nasil yazilir","tr","c11-tr",2,4,A,3,"explainer"),
K("seni ozledim kurtce nasil denir","tr","c11-tr",2,5,A,3,"explainer"),
K("uzaktaki sevgiliye ozlem mesajlari","tr","c11-tr",3,3,A,5,"blog listicle"),
K("ozledim demenin farkli yollari","tr","c11-tr",2,5,A,4,"how-to guide"),
// ── c12 · Indonesian — huge demand, national news portals own it
K("kata kata rindu untuk pacar jauh","id","c12-id",5,1,M,4,"blog listicle","","CNN Indonesia, Katadata, Kumparan, Liputan6, Merdeka, Sonora, Halodoc — only TikTok is weak"),
K("kata kata kangen buat pacar ldr","id","c12-id",4,1,A,4,"blog listicle"),
K("kangen kamu bahasa inggris","id","c12-id",3,4,A,3,"explainer"),
K("kangen kamu bahasa jawa","id","c12-id",3,4,A,3,"explainer"),
K("aku rindu kamu bahasa mandarin","id","c12-id",2,4,A,3,"explainer"),
K("cara bilang kangen tanpa bilang kangen","id","c12-id",2,5,A,4,"how-to guide"),
// ── c13 · Philippines — the weakest SERPs measured anywhere in this run
K("miss kita in bisaya","ph","c13-ph",3,8,M,3,"explainer + phrasebook","","weak: mymemory, tiktok x2, wordreference forum, wikipedia x3, wordhippo, medium"),
K("miss kita in ilocano","ph","c13-ph",2,8,A,3,"explainer + phrasebook"),
K("miss kita in waray","ph","c13-ph",2,8,A,3,"explainer + phrasebook"),
K("miss kita in bicol","ph","c13-ph",2,8,A,3,"explainer + phrasebook"),
K("miss na miss kita meaning","ph","c13-ph",3,8,A,3,"explainer"),
K("i miss you in tagalog translation","ph","c13-ph",3,6,A,3,"explainer + phrasebook"),
K("sweet miss you message tagalog for boyfriend","ph","c13-ph",3,5,A,5,"blog listicle"),
K("why is there no tagalog word for miss","ph","c13-ph",1,8,A,2,"explainer","","the loanword finding: 'miss' is English in every Philippine language"),
// ── c14 · Russian
K("skuchayu po tebe svoimi slovami","ru","c14-ru",3,4,A,4,"blog listicle","","romanised here for CSV safety; native form in shortlist.md"),
K("skuchayu po tebe sms lyubimomu","ru","c14-ru",3,4,A,4),
K("skuchayu po tebe ili za toboy kak pravilno","ru","c14-ru",2,5,A,2,"explainer","","the по/за case dispute — a real usage question"),
K("skuchayu po tebe na angliyskom","ru","c14-ru",2,4,A,3,"explainer"),
K("skuchayu po tebe v proze","ru","c14-ru",2,4,A,3),
// ── c15 · East Asia + Arabic
K("aitai in english how to say","jp","c15-asia",3,4,A,3,"explainer","","会いたい is 'I want to see you', not 'I miss you' — the language has no direct equivalent"),
K("aitai tte iwareta toki no kaeshikata","jp","c15-asia",2,5,A,4,"how-to guide","","reply intent, same shape as the Turkish winner"),
K("bogoshipda in english meaning","kr","c15-asia",3,4,A,3,"explainer"),
K("bogoshipda vs bogosipeo difference","kr","c15-asia",2,5,A,2,"explainer"),
K("ishtaqtu ilayka in english","sa","c15-asia",3,4,A,3,"explainer","","Arabic harvest is thin: the script's a-z prefixes do not expand Arabic stems"),
K("how to say i miss you in arabic to a woman","sa/us","c15-asia",2,5,A,3,"explainer","","Arabic marks the addressee's gender — اشتقت إليكِ vs إليكَ"),
K("wo xiang ni meaning in english","cn/us","c15-asia",2,4,A,3,"explainer"),
K("miss you in vietnamese anh nho em","vn/us","c15-asia",2,5,A,3,"explainer"),
// ── c16 · India, axes the two prior India runs and the 81 live pages do not hold
K("miss you appa quotes in tamil","in","c16-in",3,4,A,4,"blog listicle","","'appa' surfaced under 12 different prefixes — the strongest India signal not already built"),
K("miss you appa quotes in kannada","in","c16-in",3,4,A,4),
K("i miss you amma quotes in tamil","in","c16-in",2,4,A,4),
K("i miss you in sanskrit","in","c16-in",2,5,A,2,"explainer"),
K("miss you quotes in nepali","in/np","c16-in",2,5,A,3),
K("miss you status in bhojpuri","in","c16-in",1,5,A,3),
K("i miss you in sinhala","lk","c16-in",2,5,A,3,"explainer"),
K("i miss you in kurdish","tr/iq","c16-in",2,5,A,3,"explainer"),
K("miss you shayari with english translation","in","c16-in",2,4,A,3,"blog listicle"),
// ── c17 · format and code
K("i miss you gif for him","us/gb","c17-format",3,4,A,2,"image gallery","","copy-and-leave intent — low conversion by Gate 5"),
K("i miss you meme funny","us/gb","c17-format",3,3,A,1,"image gallery"),
K("miss you text art copy paste","us/gb","c17-format",2,4,A,2,"tool page"),
K("i miss you in morse code","us/gb","c17-format",1,5,A,2,"explainer"),
K("i miss you in sign language","us/gb","c17-format",3,4,A,2,"explainer"),
K("miss you number code meaning","us/gb","c17-format",2,5,A,2,"explainer"),
// ── c18 · product-shaped English — every one of these already has a live page
K("i miss you website for him","us/gb/in","c18-product",2,5,A,5,"product landing","improve-existing","live: /blog/how-to-make-an-i-miss-you-website"),
K("send i miss you card online free","us/gb/in","c18-product",2,4,A,5,"product landing","improve-existing","live: /blog/send-i-miss-you-card-online; SERP held by sendwishonline, groupgreeting"),
K("i miss you page maker with photo","us/gb/in","c18-product",1,5,A,5,"product landing","improve-existing","live: /blog/i-miss-you-page-maker-for-her"),
K("miss you video maker with music","us/gb/in","c18-product",2,4,A,5,"product landing","improve-existing","live: /blog/miss-you-video-maker-with-photos"),
K("we will miss you card template for colleague","us/gb","c18-product",4,0,M,3,"blog listicle","","greetpool, groupgreeting, groupcards.app, ecardforest, canva, adobe — zero weak results"),
];

// ── derive ───────────────────────────────────────────────────────────────────
const tokens = (s) => new Set(s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean));
const overlap = (a, b) => { const A = tokens(a), B = tokens(b); let n = 0; for (const t of A) if (B.has(t)) n++; return n / Math.max(A.size, B.size); };

// Phase 8b exception. A raw token-overlap test merges "i miss you in spanish" into the
// live "i-miss-you-in-marathi" at 0.8 — they differ by one token and are two entirely
// different pages. Three axes are never duplicates of each other: LANGUAGE, SUBJECT
// (who it is for), and OCCASION. If every token the two strings do not share sits on
// one of those axes, it is a distinct page, not a collision.
const LANG = new Set("hindi marathi tamil telugu punjabi gujarati urdu bengali kannada malayalam odia assamese english spanish french korean italian japanese german portuguese arabic russian sanskrit nepali bhojpuri sinhala kurdish tagalog bisaya ilocano waray bicol catalan mandarin jawa madura turkish dutch polish vietnamese chinese latin sign morse ingles ingilizce anglais anglais englisch inglese frances francese italiano italienisch turkisch espagnol spagnolo mandarin".split(" "));
const SUBJ = new Set("appa amma dad mom mum mother father papa mae brother sister friend friends amiga amigas best boyfriend girlfriend bf gf husband wife crush ex him her them someone special family colleague coworker namorado namorada pacar sevgiliye sevgili freundin freund freunde novia novio lui elle mae pai".split(" "));
// A fourth axis, found while testing this run: FORMAT. "i miss you gif" and
// "i miss you meme" are not the same page as a message listicle, and a raw overlap
// test merges them because they share three of four tokens.
const FORMAT = new Set("gif meme emoji video photo collage card letter page website site maker generator template link app code morse sign quotes quote status shayari poem poema gedicht wierszyk sms whatsapp instagram text paragraph song image images imagenes bilder immagini sozleri spruche frases frasi mensagem mensagens message messages cartao cartao carta kaartje pagina page seite reply cevaplar meaning significado significato significance grammar".split(" "));
const STOP = new Set("i you your me my the a an in to for of on is it how what when why do does say saying said tell without with and or de en el la los las le les il un una da da che da no not".split(" "));
const distinctAxis = (a, b) => {
  const A = tokens(a), B = tokens(b);
  const diff = [...A].filter((t) => !B.has(t)).concat([...B].filter((t) => !A.has(t))).filter((t) => !STOP.has(t));
  // ANY language token in the diff is enough: a language-marked page is inherently a
  // different page from an unmarked one, whatever else differs. Subject and format
  // are weaker signals, so those must account for the whole diff.
  if (diff.some((t) => LANG.has(t))) return true;
  return diff.length > 0 && diff.every((t) => SUBJ.has(t) || FORMAT.has(t));
};
// The live languages hub is a hub, not a competitor: a per-language page is a spoke
// under it, so it gets `new-page` plus a link obligation, never `merge`.
const HUB = "i-miss-you-in-different-languages";

const out = ROWS.map((r) => {
  const winp = WINP(r.w);
  let bucket, pos;
  if (r.w === 0) { bucket = "do-not-attempt"; pos = "6-10"; }
  else if (r.w <= 2) { bucket = "hard-differentiator-only"; pos = "6-10"; }
  else if (r.act === "improve-existing") { bucket = "own-it-already"; pos = 3; }
  else { bucket = r.w >= 5 ? "winnable-now" : "winnable-now"; pos = 3; }
  const ctr = CTR[pos] ?? CTR["6-10"];
  const clicks = Math.round(MID[r.b] * ctr * winp);
  const gate = r.w === 0 ? "gate4-zero-weak-results" : (r.iF <= 1 ? "gate5-copy-and-leave" : "");
  // cannibalisation
  let own = "", act = r.act || "new-page", coll = "";
  for (const s of liveSlugs) {
    const phrase = s.replace(/-/g, " ");
    if (overlap(r.k, phrase) >= 0.6 && !distinctAxis(r.k, phrase)) {
      own = `https://subhsandesh.in/blog/${s}`; coll = s;
      if (s === HUB) { if (!r.act) act = "new-page"; r.n = (r.n ? r.n + "; " : "") + `spoke under the live hub /blog/${HUB} — link both ways, do not restate its table`; }
      else if (!r.act) act = "merge-into-existing";
      break;
    }
  }
  if (r.act === "improve-existing") {
    const m = /live: \/blog\/([a-z0-9-]+)/.exec(r.n || "");
    if (m) { own = `https://subhsandesh.in/blog/${m[1]}`; coll = m[1]; }
  }
  let prior = "";
  for (const p of priorKw) { if (overlap(r.k, p) >= 0.7 && !distinctAxis(r.k, p)) { prior = p; break; } }
  if (gate === "gate4-zero-weak-results") act = "skip";
  return { ...r, winp, bucket, pos, clicks, gate, own, coll, prior, act,
    score: WINSC(r.w) * r.iF * r.b };
});

// ── Phase 8a · cluster the NEW list against itself ───────────────────────────
// Two rows that differ only by a stopword or an inflection are one page. The same
// language / subject / format exceptions apply, so "i miss you in french" and
// "i miss you in korean" stay two pages while "miss you quotes" and "i miss you
// quotes" collapse into one.
let merged = 0;
for (let i = 0; i < out.length; i++) {
  if (out[i].dup) continue;
  for (let j = i + 1; j < out.length; j++) {
    if (out[j].dup || out[j].cl !== out[i].cl) continue;
    if (overlap(out[i].k, out[j].k) >= 0.7 && !distinctAxis(out[i].k, out[j].k)) {
      out[j].dup = out[i].k;
      out[j].act = "merge-into-cluster-primary";
      merged++;
    }
  }
}
console.log(`phase 8a: ${out.length} keywords -> ${out.length - merged} pages (${merged} folded into a cluster primary)`);

// demand_rank = the Phase 2 cross-prefix hit count, summed across markets. Ordinal
// demand straight from Google. Blank where the exact string was not in the harvest
// (a generated phrasing, or a romanised form of a native-script suggestion).
const AC = existsSync("autocomplete-merged.csv") ? readFileSync("autocomplete-merged.csv", "utf8") : "";
const DEMAND = new Map();
for (const line of AC.split("\n").slice(1)) {
  if (!line.trim()) continue;
  const c = []; let cur = "", q = false;
  for (let i = 0; i < line.length; i++) { const ch = line[i];
    if (q) { if (ch === '"' && line[i+1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true; else if (ch === ",") { c.push(cur); cur = ""; } else cur += ch; }
  c.push(cur);
  DEMAND.set(c[0].toLowerCase().trim(), c[4]);
}
const strip = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const demandRank = (k) => DEMAND.get(k.toLowerCase()) ?? [...DEMAND.keys()].find((x) => strip(x) === strip(k.toLowerCase())) !== undefined
  ? (DEMAND.get(k.toLowerCase()) ?? DEMAND.get([...DEMAND.keys()].find((x) => strip(x) === strip(k.toLowerCase())))) : "";

const cell = (v) => (/[",\n]/.test(String(v ?? "")) ? `"${String(v).replace(/"/g, '""')}"` : String(v ?? ""));
const HEAD = "keyword,cluster_id,source_url,source_domain,evidence_type,intent,page_type_required,est_volume,volume_source,weakness_count,gate_failed,bucket,priority_score,ranking_urls,category,action,own_url,own_position,expected_clicks,trend,peak_window,publish_by,demand_rank,duplicate_of,market,collides_with_live_slug,prior_run_duplicate,note";
const BAND = { 5: "10,000+/mo", 4: "3,000-10,000/mo", 3: "1,000-3,000/mo", 2: "300-1,000/mo", 1: "under 300/mo" };

writeFileSync("keyword-inventory.csv", [HEAD, ...out.map((r) => [
  r.k, r.cl,
  r.ev === M ? `https://www.google.com/search?q=${encodeURIComponent(r.k)}` : "",
  r.ev === M ? "google.com (US-served, WebSearch 2026-09-25)" : "inferred from the measured SERP of this cluster",
  r.ev, r.iF >= 5 ? "transactional" : r.iF >= 4 ? "informational-commercial" : "informational",
  r.pt, BAND[r.b], "EST", r.w, r.gate, r.bucket, r.score, "", r.cl.replace(/^c\d+-/, ""),
  r.act, r.own, r.own ? "unmeasured-live-page" : "none", r.clicks, "evergreen", "year-round", "",
  demandRank(r.k), r.dup || "", r.mk, r.coll, r.prior, r.n,
].map(cell).join(",")), ].join("\n") + "\n");

const by = (f) => out.reduce((m, r) => (m[f(r)] = (m[f(r)] || 0) + 1, m), {});
console.log(`rows: ${out.length}`);
console.log("buckets:", by((r) => r.bucket));
console.log("actions:", by((r) => r.act));
console.log("markets:", Object.keys(by((r) => r.mk)).length, "market labels ·", Object.keys(by((r) => r.cl)).length, "clusters");
console.log("measured SERPs:", out.filter((r) => r.ev === M).length, "· archetype-inferred:", out.filter((r) => r.ev === A).length);
console.log("collides with a live page:", out.filter((r) => r.coll).length, "· duplicates a prior India run:", out.filter((r) => r.prior).length);
console.log("\ntop 20 by expected clicks:");
for (const r of [...out].sort((a, b) => b.clicks - a.clicks).slice(0, 20))
  console.log(`  ${String(r.clicks).padStart(4)}/mo  ${r.mk.padEnd(9)} ${r.k}`);

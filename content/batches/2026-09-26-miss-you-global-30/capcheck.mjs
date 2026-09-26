// Source-cap checker for batch 2026-09-26-miss-you-global-30.
// FIXED 2026-09-26: copied from 2026-09-25-miss-you-30 with BOTH path constants
// still pointing at that batch, so this checker counted the sibling batch's 54
// posts and reported doi.org / journals.plos.org / arxiv.org at cap 3 for a batch
// holding ZERO posts. It cost the seni-ozledim agent its best-fitting paper before
// it was caught. This is the SECOND time this exact copy-paste bug has shipped —
// see the note below from 2026-09-25. Check these constants first when you copy it.
// FIXED 2026-09-25: this file was copied from the propose-30c batch and its two
// path constants were left pointing at that batch, so it reported a clean cap for
// this batch no matter what was in it. Caught by the i-miss-you-in-spanish agent.
// Counts POSTS per domain / per URL — NOT occurrences.
import fs from "node:fs";
const PRIOR = ["2026-08-12-miss-you-ldr", "2026-09-25-miss-you-30"]
  .map((d) => `content/batches/${d}/blogs`);
const HERE = "content/batches/2026-09-26-miss-you-global-30/blogs";
// Primary-reference sources are EXEMPT from the cross-wave ban (BRIEF, 2026-09-24):
// statutes, dictionaries, grammars, treebanks, corpora and standards documents have
// exactly one correct citation, so reusing them across waves is not content-farming.
// Single source of truth: the batch's own verify.config.json, so the checker and the
// verifier can never disagree about what is exempt.
const CFG = JSON.parse(fs.readFileSync("content/batches/2026-09-26-miss-you-global-30/verify.config.json", "utf8"));
const EXEMPT_LIST = new Set([...(CFG.capExemptDomains || []), "dsal.uchicago.edu", "universaldependencies.org", "tatoeba.org", "unicode.org", "en.wiktionary.org"]);
const EXEMPT = { test: (h) => EXEMPT_LIST.has(String(h).replace(/^www\./, "")) };
const isExempt = (u) => { try { return EXEMPT.test(new URL(u).hostname); } catch { return false; } };

// FIXED 2026-09-25 (caught by the miss-na-miss-kita-meaning agent): the checker
// treated europepmc.org and pmc.ncbi.nlm.nih.gov as two domains, while BRIEF §4
// says they are one. Three posts already held that family while this reported a
// clean cap. Same for the two ERIC hosts. Mirrors are one publisher.
const FAMILY = [
  // BRIEF §4 names exactly one equivalence here: europepmc.org == pmc.ncbi.nlm.nih.gov
  // (Europe PMC mirrors PMC, so the same article under both hosts is one source).
  // pubmed.ncbi.nlm.nih.gov is deliberately NOT folded in: PubMed is an abstract
  // INDEX, not a full-text host, and the article behind it is published elsewhere.
  // Grouping it was my own over-strict reading and it wrongly showed this batch over
  // cap, which would have forced a rewrite that the rule does not require.
  [/^(europepmc\.org|pmc\.ncbi\.nlm\.nih\.gov)$/, "europepmc.org == pmc.ncbi.nlm.nih.gov"],
  [/^(eric\.ed\.gov|files\.eric\.ed\.gov)$/, "eric.ed.gov (incl. files.)"],
];
const canon = (h) => { h = String(h).replace(/^www\./, ""); for (const [re, name] of FAMILY) if (re.test(h)) return name; return h; };
const banned = new Map();
for (const p of PRIOR) { if (!fs.existsSync(p)) continue;
  for (const f of fs.readdirSync(p))
    for (const s of (JSON.parse(fs.readFileSync(`${p}/${f}`, "utf8")).batchMeta?.sources || []))
      { if (!isExempt(s.url)) banned.set(s.url, p.split("/")[2]); } }
const dom = {}, url = {};
if (fs.existsSync(HERE)) for (const f of fs.readdirSync(HERE)) {
  const j = JSON.parse(fs.readFileSync(`${HERE}/${f}`, "utf8"));
  const seen = new Set();
  for (const s of (j.batchMeta?.sources || [])) {
    if (isExempt(s.url)) continue;   // reference instruments are not publishers
    seen.add(canon(new URL(s.url).hostname));
    (url[s.url] ||= new Set()).add(f); }
  for (const d of seen) (dom[d] ||= new Set()).add(f); }
console.log(`BANNED — spent in waves 1-3, never reuse (${banned.size} URLs).`);
console.log("Statutes, dictionaries, treebanks, corpora and standards are EXEMPT and excluded from this list — reuse them freely and note it in structuralLimitations.");
console.log("Run with --list to print them all.");
if (process.argv.includes("--list")) for (const [u, b] of [...banned].sort()) console.log(`  ${u}   [${b}]`);
const reused = Object.keys(url).filter((u) => banned.has(u));
console.log(`\n!! BANNED URLS USED IN THIS BATCH: ${reused.length ? reused.join("\n   ") : "none"}`);
const full = Object.entries(dom).filter(([, s]) => s.size >= 3);
console.log("\nDOMAINS AT CAP 3 — do not cite:");
console.log(full.length ? full.map(([d, s]) => `  ${d} (${s.size} posts)`).join("\n") : "  none");
const two = Object.entries(dom).filter(([, s]) => s.size === 2);
console.log("\nDOMAINS WITH ONE SLOT LEFT (2 posts):");
console.log(two.length ? two.map(([d]) => `  ${d}`).join("\n") : "  none");
const u2 = Object.entries(url).filter(([, s]) => s.size >= 2);
const dois = [];
if (fs.existsSync(HERE)) for (const f of fs.readdirSync(HERE)) {
  const j = JSON.parse(fs.readFileSync(`${HERE}/${f}`, "utf8"));
  for (const s of (j.batchMeta?.sources || [])) { try { if (/^(www\.)?(dx\.)?doi\.org$/.test(new URL(s.url).hostname)) dois.push(`${f}  ${s.url}`); } catch {} }
}
console.log("\nNOTE: pubmed.ncbi.nlm.nih.gov is counted separately from the PMC family (index, not host), but a PubMed record and a PMC record OF THE SAME ARTICLE are one source — check by PMID/PMCID, not by hostname.");
console.log("\ndoi.org IS A RESOLVER — these must be counted against the PUBLISHER they resolve to, which this script cannot do offline. Resolve each by hand before citing that publisher again:");
console.log(dois.length ? dois.map((d) => `  ${d}`).join("\n") : "  none");
console.log(`\nEXEMPT (reference instruments, uncapped): ${[...EXEMPT_LIST].join(", ")}`);
console.log("\nURLS AT CAP 2 — do not cite:");
console.log(u2.length ? u2.map(([u]) => `  ${u}`).join("\n") : "  none");

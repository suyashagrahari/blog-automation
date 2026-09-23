// Paper discovery WITHOUT WebSearch — this session exhausted its 200-call allowance.
// Hits Crossref (bibliographic) + Europe PMC (open-access full text).
// Usage:  node content/batches/2026-09-23-propose-30b/findpapers.mjs "your phenomenon query"
// Then fetch the chosen paper's full text and VERIFY it says what you claim before citing.
//
// CAUTION: Crossref indexes predatory journals (IJSR, IJRASET and similar).
// Indexing is not peer review — judge the venue yourself.
const q = process.argv.slice(2).join(" ");
if (!q) { console.error('usage: node findpapers.mjs "query"'); process.exit(1); }
const UA = { "User-Agent": "SubhSandesh-research/1.0 (mailto:research@subhsandesh.in)", Accept: "application/json" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

try {
  const r = await fetch(`https://api.crossref.org/works?query=${encodeURIComponent(q)}&rows=8&select=title,DOI,issued,container-title,URL,abstract`, { headers: UA });
  console.log(`\n=== CROSSREF (${r.status}) — bibliographic, check OA separately ===`);
  const j = await r.json();
  for (const x of j.message?.items || []) {
    console.log(`- ${x.title?.[0]}`);
    console.log(`  ${x["container-title"]?.[0] || "?"} | ${x.issued?.["date-parts"]?.[0]?.[0] || "?"} | doi:${x.DOI}`);
  }
} catch (e) { console.log("Crossref failed:", e.message); }

await sleep(600);

try {
  const r = await fetch(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(q + " AND OPEN_ACCESS:Y")}&format=json&pageSize=8&resultType=core`, { headers: UA });
  console.log(`\n=== EUROPE PMC (${r.status}) — open access, full text reachable ===`);
  const j = await r.json();
  for (const x of j.resultList?.result || []) {
    console.log(`- ${x.title}`);
    console.log(`  ${x.journalInfo?.journal?.title || x.journalTitle || "?"} | ${x.pubYear || "?"} | doi:${x.doi || "-"}`);
    if (x.pmcid) console.log(`  full text: https://europepmc.org/article/PMC/${x.pmcid}`);
  }
} catch (e) { console.log("EuropePMC failed:", e.message); }

console.log(`
NOTE: these are CANDIDATES, not citations. Fetch the paper, read what it actually
says, and record { url, stat, publishedDate } only for what you read. publishedDate
is when the SOURCE was published. If only an abstract is readable, cite only the
abstract and disclose that in the audit. Run capcheck.mjs before committing to a domain.

Europe PMC and pmc.ncbi.nlm.nih.gov are the SAME publisher — count them together
against the 3-post domain cap.`);

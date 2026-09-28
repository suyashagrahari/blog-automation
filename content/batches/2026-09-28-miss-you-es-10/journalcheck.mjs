// journalcheck.mjs — the cap census that capcheck.mjs structurally cannot do.
//
// WHY THIS EXISTS. capcheck.mjs counts by HOSTNAME. Three of the hostnames in these
// batches are not publishers at all:
//   doi.org          — a resolver   (capcheck already warns about this, but cannot fix it)
//   web.archive.org  — a wrapper    (fixed 2026-09-28: capcheck now unwraps to the archived host)
//   europepmc.org    — a REPOSITORY (not fixed, and unfixable by hostname)
// The last one is the damaging case. Europe PMC / PMC mirror thousands of journals, so
// "europepmc.org" appearing in 29 of 54 posts says nothing about source concentration —
// the real question is how many posts cite BEHAVIORAL SCIENCES, and capcheck can never
// answer it. Grepping journal names out of the prose does not work either: agents name
// journals in running text, including inside negations ("NOT Frontiers in Psychology"),
// which over-counts. Resolving each PMCID against Europe PMC's own metadata is the only
// method that is both complete and honest.
//
//   node content/batches/<id>/journalcheck.mjs [--batch <id>] [--all]
//
// Cap rule (BRIEF §7): a URL in at most 2 posts, a publisher in at most 3. Three is AT
// cap and allowed; four is a breach.
import fs from "node:fs";
import path from "node:path";
// FIXED 2026-09-28: same cwd-dependence bug as capcheck.mjs — see the note there.
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "..", "..");

const argv = process.argv.slice(2);
// ADDED 2026-09-28: Europe PMC rate-limits. Re-running this census a few times in quick
// succession took it from 48/48 resolved to 40/56 to 0/56. A census that silently resolves
// nothing would report "none over cap" — the most dangerous possible false clean — so the
// script now paces itself, backs off on failure, and shouts about anything it could not
// resolve. Do not remove the sleeps to make it faster.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJSON(url, tries = 4) {
  for (let a = 0; a < tries; a++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": "subhsandesh-journalcheck/1.0 (cap census)" } });
      if (r.status === 429 || r.status >= 500) { await sleep(1500 * (a + 1)); continue; }
      const j = await r.json().catch(() => null);
      if (j) return j;
    } catch { /* fall through to backoff */ }
    await sleep(1500 * (a + 1));
  }
  return null;
}

const BATCHES = argv.includes("--all")
  ? ["2026-09-25-miss-you-30", "2026-09-26-miss-you-global-30", "2026-09-28-miss-you-es-10"]
  : [argv[argv.indexOf("--batch") + 1] || "2026-09-28-miss-you-es-10"];

for (const batch of BATCHES) {
  const dir = path.join(ROOT, `content/batches/${batch}/blogs`);
  if (!fs.existsSync(dir)) { console.log(`no such batch: ${batch}`); continue; }
  // ADDED 2026-09-28, after the Korean row found the gap: resolving ONLY PMCIDs misses
  // every journal article cited through a publisher or DOI URL. tu-me-manques-signification-grammaire
  // cites J. Psycholinguistic Research via a non-PMC URL, so the PMC-only census reported
  // that journal one post lighter than it is. Three passes now: PMCID -> Europe PMC,
  // DOI -> Crossref, and a residue list of known journal hosts that carry neither, which
  // the script reports rather than silently dropping.
  const cites = [], doiCites = [], residue = [];
  const JOURNAL_HOST = /(^|\.)(mdpi\.com|springer\.com|link\.springer\.com|wiley\.com|onlinelibrary\.wiley\.com|tandfonline\.com|sciencedirect\.com|jstor\.org|cambridge\.org|sagepub\.com|journals\.sagepub\.com|frontiersin\.org|journals\.plos\.org|nature\.com|apa\.org|degruyter\.com|benjamins\.com|euroslajournal\.org|bop\.unibe\.ch)$/i;
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith(".json"))) {
    const j = JSON.parse(fs.readFileSync(`${dir}/${f}`, "utf8"));
    for (const s of (j.batchMeta?.sources || [])) {
      const post = f.replace(/\.json$/, ""), u = String(s.url);
      const m = u.match(/(PMC\d{6,})/i);
      if (m) { cites.push({ post, id: m[1].toUpperCase() }); continue; }
      const d = u.match(/(?:doi\.org\/|\/doi\/(?:abs\/|full\/|pdf\/)?)(10\.\d{4,9}\/[^\s?#]+)/i);
      if (d) { doiCites.push({ post, doi: d[1].replace(/[.,;]$/, "") }); continue; }
      let h = ""; try { h = new URL(u).hostname.replace(/^www\./, ""); } catch {}
      if (JOURNAL_HOST.test(h)) residue.push({ post, host: h, url: u });
    }
  }
  const uniq = [...new Set(cites.map((c) => c.id))];
  const journal = {};
  for (let i = 0; i < uniq.length; i += 20) {
    const q = uniq.slice(i, i + 20).map((x) => `PMCID:${x}`).join(" OR ");
    const j = await getJSON(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(q)}&format=json&pageSize=100&resultType=core`);
    for (const res of (j?.resultList?.result || [])) if (res.pmcid) journal[res.pmcid] = res.journalInfo?.journal?.title || res.journalTitle || "(unknown)";
    await sleep(700);
  }
  // ADDED 2026-09-28: the batched OR-query silently under-resolves — one run returned 40
  // of 56. An unresolved PMCID is not a harmless gap: it is a citation whose journal is
  // invisible to the census, so it could be hiding a cap breach. Retry each miss on its
  // own, and if it still will not resolve, SAY SO loudly rather than quietly dropping it.
  const missing = uniq.filter((id) => !journal[id]);
  for (const id of missing) {
    try {
      const j = await getJSON(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=PMCID:${id}&format=json&pageSize=1&resultType=core`);
      const res = (j?.resultList?.result || [])[0];
      if (res) journal[id] = res.journalInfo?.journal?.title || res.journalTitle || "(unknown)";
      await sleep(400);
    } catch {}
  }
  const stillMissing = uniq.filter((id) => !journal[id]);
  // pass 2: DOIs via Crossref
  const byDoi = {};
  for (const c of doiCites) {
    try {
      const j = await getJSON(`https://api.crossref.org/works/${encodeURIComponent(c.doi)}`);
      byDoi[c.doi] = (j?.message?.["container-title"] || [])[0] || j?.message?.publisher || `(UNRESOLVED ${c.doi})`;
      await sleep(400);
    } catch { byDoi[c.doi] = `(UNRESOLVED ${c.doi})`; }
  }
  const per = {};
  for (const c of cites) ((per[journal[c.id] || `(UNRESOLVED ${c.id})`] ||= new Set())).add(c.post);
  for (const c of doiCites) ((per[byDoi[c.doi]] ||= new Set())).add(c.post);
  const rows = Object.entries(per).sort((a, b) => b[1].size - a[1].size);

  console.log(`\n=== ${batch} — ${cites.length} PMC citations, ${uniq.length} unique articles, ${Object.keys(journal).length} resolved`);
  const over = rows.filter(([, s]) => s.size > 3);
  console.log(`\nOVER CAP (>3 posts) — MUST be remediated:`);
  console.log(over.length ? over.map(([t, s]) => `  ${s.size}  ${t}\n       ${[...s].join(", ")}`).join("\n") : "  none");
  const at = rows.filter(([, s]) => s.size === 3);
  console.log(`\nAT CAP (3 posts) — full, do NOT cite again in this batch:`);
  console.log(at.length ? at.map(([t, s]) => `  ${t}  [${[...s].join(", ")}]`).join("\n") : "  none");
  const two = rows.filter(([, s]) => s.size === 2);
  console.log(`\nONE SLOT LEFT (2 posts):`);
  console.log(two.length ? two.map(([t]) => `  ${t}`).join("\n") : "  none");
  console.log(`\njournals cited exactly once: ${rows.filter(([, s]) => s.size === 1).length}`);
  console.log(`\nresolved via Europe PMC: ${cites.length} citation(s) · via Crossref DOI: ${doiCites.length}`);
  if (stillMissing.length) {
    console.log(`\n!! ${stillMissing.length} PMCID(s) WOULD NOT RESOLVE — their journals are INVISIBLE to this census and may hide a cap breach. Resolve by hand before trusting the counts above:`);
    for (const id of stillMissing) console.log(`   ${id}  (cited by ${[...new Set(cites.filter((c) => c.id === id).map((c) => c.post))].join(", ")})`);
  }
  console.log(`\nJOURNAL-HOST URLS CARRYING NEITHER A PMCID NOR A DOI — count these BY HAND, the script cannot:`);
  console.log(residue.length ? residue.map((r) => `  ${r.host.padEnd(24)} ${r.post}\n      ${r.url}`).join("\n") : "  none");
}

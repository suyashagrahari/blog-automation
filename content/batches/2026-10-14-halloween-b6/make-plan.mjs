// Builds PLAN.json (50 rows, slugs) + empty batch.json and checks every slug against Strapi.
import fs from "node:fs";
const R = process.cwd();
const B1 = JSON.parse(fs.readFileSync(R + '/content/keywords/2026-10-12-halloween-global/batches/PLAN.json')).B6;
const OV = { 'halloween 2026 date': 'when-is-halloween', 'how is halloween celebrated in the uk': 'halloween-in-the-uk', 'halloween ideas for your boyfriend': 'halloween-ideas-for-boyfriend', 'halloween ideas for your girlfriend': 'halloween-ideas-for-girlfriend', 'halloween quotes for whatsapp status': 'halloween-whatsapp-status' };
const rows = B1.map(x => ({ rank: x.rank, keyword: x.keyword, slug: OV[x.keyword] || x.keyword.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim().replace(/\s+/g, '-'), theme: x.theme, absorbs: x.absorbs, weak: x.weak, band: x.band, demand: x.demand }));
const taken = (await Promise.all(rows.map(r => fetch(`https://strapi.subhsandesh.in/api/articles?fields[0]=slug&filters[slug][$eq]=${r.slug}`).then(x => x.json()).then(j => (j.data || []).length ? r.slug : null)))).filter(Boolean);
fs.writeFileSync(R + '/content/batches/2026-10-14-halloween-b6/PLAN.json', JSON.stringify({ batchId: '2026-10-14-halloween-b6', created: '2026-10-14', source: 'content/keywords/2026-10-12-halloween-global/batches/batch-6.md', rows }, null, 1));
fs.writeFileSync(R + '/content/batches/2026-10-14-halloween-b6/batch.json', JSON.stringify({ kind: 'blog-automation/batch', id: '2026-10-14-halloween-b6', name: 'Halloween global — Batch 6 of 8 (50 posts)', branch: 'batch/2026-10-14-halloween-b6', createdAt: '2026-10-14', blogs: [], keywords: [] }, null, 2));
console.log('rows', rows.length, 'taken', taken, 'dup', rows.map(r => r.slug).filter((s, i, a) => a.indexOf(s) !== i));

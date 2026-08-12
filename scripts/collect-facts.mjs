#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// collect-facts.mjs — build content/facts.md from the live SubhSandesh database.
//
// These are the numbers no competitor can publish, and they are the whole reason
// an answer engine would cite a SubhSandesh post instead of the five pages that
// already rank. Phase 0 of the subhsandesh-blog skill blocks until at least
// three of them are relevant to the target keyword.
//
//   npm run facts
//
// Rules this script holds to:
//   • READ-ONLY. Aggregations and counts only — never a write.
//   • The Mongo URI is read from ../server/.env and is NEVER printed or logged.
//   • Every fact is computed in its own try/catch. A failure omits ONE fact
//     rather than killing the run, because a missing fact is better than a
//     wrong one.
//   • Facts are labelled for what they actually measure. `updatedAt` is the last
//     edit, not the moment of publishing, and is described that way.
//   • Anything below the MANUAL marker in facts.md is preserved on regeneration,
//     so hand-written facts (pricing, support themes) survive.
// ─────────────────────────────────────────────────────────────────────────────

import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(HERE, "..");
const SERVER_ENV = path.resolve(APP_ROOT, "..", "server", ".env");
const OUT = path.join(APP_ROOT, "content", "facts.md");
const DB_NAME = "gifts";

const MANUAL_MARKER = "<!-- MANUAL FACTS — everything below this line is preserved by `npm run facts` -->";

const today = () => new Date().toISOString().slice(0, 10);
const pct = (n, of) => (of ? ((n / of) * 100).toFixed(1) : "0.0");
const num = (n) => n.toLocaleString("en-US");

/** Human label for a Mongoose collection name: "lovegfpages" → "love-gf". */
const TEMPLATE_LABELS = {
  lovegfpages: '"I love you" page (/love-gf)',
  bouquetgfpages: "digital bouquet (/bouquet-gf)",
  apologydashboardpages: "apology dashboard (/apology-dashboard)",
  darlingpages: "Darling romantic page (/darling)",
  missyougfpages: '"I miss you" page (/missyou-gf)',
  birthdaygfpages: "birthday page for a partner (/birthday-gf)",
  weddingpages: "wedding invitation (/wedding-shaadi)",
  holipages: "Holi greeting (/holi)",
  shaadicardpages: "shaadi card (/shaadi-card)",
  christian_wedding_pages: "Christian wedding invitation (/christian-wedding)",
  eidpages: "Eid greeting (/eid-mubarak)",
  valentinepages: "Valentine's page (/valentine-gf)",
  proposalpages: "proposal page",
  receptionpages: "reception invitation (/reception)",
};
const label = (col) => TEMPLATE_LABELS[col] || col.replace(/pages?$/, "").replace(/_/g, "-");

/** Read one key out of an env file without exposing the rest. */
function envValue(text, key) {
  const line = text.split("\n").find((l) => l.trim().startsWith(`${key}=`));
  if (!line) return "";
  return line.slice(line.indexOf("=") + 1).trim().replace(/^["']|["']$/g, "");
}

/** Run `fn`, push its fact lines, and never let one failure end the run. */
async function safely(name, facts, fn) {
  try {
    const lines = await fn();
    for (const l of (Array.isArray(lines) ? lines : [lines]).filter(Boolean)) facts.push(l);
  } catch (err) {
    console.warn(`  ! skipped "${name}": ${err instanceof Error ? err.message : err}`);
  }
}

async function main() {
  let envText;
  try {
    envText = await readFile(SERVER_ENV, "utf8");
  } catch {
    console.error(`✖ Could not read ${SERVER_ENV}`);
    console.error("  The facts collector needs the gifts server's .env for its Mongo connection.");
    process.exit(1);
  }

  const uri = envValue(envText, "PROD_MONGODB_URI") || envValue(envText, "LOCAL_MONGODB_URI");
  if (!uri) {
    console.error("✖ Set PROD_MONGODB_URI (or LOCAL_MONGODB_URI) in ../server/.env");
    process.exit(1);
  }

  // The mongodb driver lives in the sibling server workspace — this app
  // deliberately adds no dependency of its own for a one-off script.
  let MongoClient;
  try {
    const req = createRequire(path.resolve(APP_ROOT, "..", "server", "package.json"));
    ({ MongoClient } = req("mongodb"));
  } catch (err) {
    console.error("✖ Could not load the mongodb driver from ../server/node_modules");
    console.error(`  ${err instanceof Error ? err.message : err}`);
    console.error("  Run `npm install` in ../server first.");
    process.exit(1);
  }

  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 20000 });
  const usage = [];
  const performance = [];
  const behaviour = [];

  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const names = (await db.listCollections().toArray()).map((c) => c.name);

    // A user-created shareable page lives in a collection whose name ends in
    // "pages". Empty ones (unreleased templates) are dropped so they can't
    // dilute a percentage.
    const pageCols = [];
    for (const n of names.filter((x) => /pages$/.test(x))) {
      const count = await db.collection(n).countDocuments();
      if (count > 0) pageCols.push({ name: n, count });
    }
    pageCols.sort((a, b) => b.count - a.count);
    const totalPages = pageCols.reduce((s, c) => s + c.count, 0);

    if (!totalPages) throw new Error("no page documents found — is this the right database?");

    // ── Product usage ────────────────────────────────────────────────────────
    await safely("pages created", usage, async () => {
      // Earliest createdAt across the page collections = the real "since" date.
      let earliest = null;
      for (const { name } of pageCols) {
        const [doc] = await db
          .collection(name)
          .find({ createdAt: { $ne: null } }, { projection: { createdAt: 1 } })
          .sort({ createdAt: 1 })
          .limit(1)
          .toArray();
        if (doc?.createdAt && (!earliest || doc.createdAt < earliest)) earliest = doc.createdAt;
      }
      const since = earliest ? new Date(earliest).toISOString().slice(0, 10) : "launch";
      return `- ${num(totalPages)} personalised pages created since ${since}, across ${pageCols.length} page types — measured ${today()}`;
    });

    await safely("most popular occasion", usage, () => {
      const top = pageCols[0];
      return `- Most popular creation: ${label(top.name)} — ${num(top.count)} pages, ${pct(top.count, totalPages)}% of everything created — measured ${today()}`;
    });

    await safely("top 5 page types", usage, () =>
      pageCols
        .slice(0, 5)
        .map((c, i) => `- #${i + 1} page type: ${label(c.name)} — ${num(c.count)} created, ${pct(c.count, totalPages)}% of all pages — measured ${today()}`)
    );

    await safely("registered users", usage, async () => {
      if (!names.includes("users")) return null;
      const users = await db.collection("users").countDocuments();
      return `- ${num(users)} registered creators — measured ${today()}`;
    });

    await safely("pages per creator", usage, async () => {
      if (!names.includes("users")) return null;
      const users = await db.collection("users").countDocuments();
      if (!users) return null;
      return `- Average pages per registered creator: ${(totalPages / users).toFixed(2)} — measured ${today()}`;
    });

    // ── Performance / reach ──────────────────────────────────────────────────
    await safely("page views", performance, async () => {
      if (!names.includes("pageviews")) return null;
      const views = await db.collection("pageviews").countDocuments();
      const out = [`- ${num(views)} recorded views of shared pages — measured ${today()}`];
      if (totalPages) {
        out.push(`- Average views per created page: ${(views / totalPages).toFixed(1)} — measured ${today()}`);
      }
      return out;
    });

    await safely("most-viewed template", performance, async () => {
      if (!names.includes("pageviews")) return null;
      const rows = await db
        .collection("pageviews")
        .aggregate([{ $group: { _id: "$templateType", n: { $sum: 1 } } }, { $sort: { n: -1 } }, { $limit: 1 }])
        .toArray();
      const total = await db.collection("pageviews").countDocuments();
      const top = rows[0];
      if (!top?._id) return null;
      return `- Most-viewed template: ${top._id} — ${num(top.n)} views, ${pct(top.n, total)}% of all page views — measured ${today()}`;
    });

    // ── Customer behaviour ───────────────────────────────────────────────────
    await safely("mobile share", behaviour, async () => {
      if (!names.includes("pageviews")) return null;
      const rows = await db
        .collection("pageviews")
        .aggregate([{ $group: { _id: "$device", n: { $sum: 1 } } }])
        .toArray();
      const total = rows.reduce((s, r) => s + r.n, 0);
      const mobile = rows.find((r) => r._id === "mobile")?.n || 0;
      const tablet = rows.find((r) => r._id === "tablet")?.n || 0;
      if (!total) return null;
      return [
        `- ${pct(mobile, total)}% of shared pages are opened on a phone (${num(mobile)} of ${num(total)} views) — measured ${today()}`,
        `- ${pct(mobile + tablet, total)}% of views are on a touch device (phone or tablet) — measured ${today()}`,
      ];
    });

    await safely("password protection", behaviour, async () => {
      let withPw = 0;
      let checked = 0;
      for (const { name } of pageCols) {
        const col = db.collection(name);
        const sample = await col.findOne({});
        if (!sample || !("passwordRaw" in sample || "password" in sample)) continue;
        const field = "passwordRaw" in sample ? "passwordRaw" : "password";
        withPw += await col.countDocuments({ [field]: { $nin: [null, ""] } });
        checked += await col.countDocuments();
      }
      if (!checked) return null;
      return `- ${pct(withPw, checked)}% of creators password-protect their page before sharing it (${num(withPw)} of ${num(checked)}) — measured ${today()}`;
    });

    await safely("publish rate", behaviour, async () => {
      let published = 0;
      let checked = 0;
      for (const { name } of pageCols) {
        const col = db.collection(name);
        const sample = await col.findOne({});
        if (!sample || !("isPublished" in sample)) continue;
        published += await col.countDocuments({ isPublished: true });
        checked += await col.countDocuments();
      }
      if (!checked) return null;
      return `- ${pct(published, checked)}% of started pages are actually published and shared (${num(published)} of ${num(checked)}) — measured ${today()}`;
    });

    await safely("edit window", behaviour, async () => {
      // Deliberately labelled as first-save-to-last-edit. updatedAt is the last
      // write of any kind, NOT the moment of publishing — calling it
      // "time to publish" would be a fabrication.
      const { name } = pageCols[0];
      const deltas = await db
        .collection(name)
        .aggregate([
          { $match: { createdAt: { $ne: null }, updatedAt: { $ne: null } } },
          { $project: { m: { $divide: [{ $subtract: ["$updatedAt", "$createdAt"] }, 60000] } } },
          { $sort: { m: 1 } },
          { $limit: 5000 },
        ])
        .toArray();
      if (!deltas.length) return null;
      const median = deltas[Math.floor(deltas.length / 2)].m;
      const shown = median < 60 ? `${median.toFixed(0)} minutes` : `${(median / 60).toFixed(1)} hours`;
      // label() already contains parentheses, so keep this out of a paren group.
      return `- Median gap between a page's first save and its last edit: ${shown} — sampled on ${label(name)}, n=${num(deltas.length)} — measured ${today()}`;
    });
  } finally {
    await client.close();
  }

  const facts = [...usage, ...performance, ...behaviour];

  // Preserve anything the user hand-wrote below the marker.
  let manual = "";
  try {
    const existing = await readFile(OUT, "utf8");
    const at = existing.indexOf(MANUAL_MARKER);
    if (at !== -1) manual = existing.slice(at + MANUAL_MARKER.length).trim();
  } catch {
    /* first run */
  }

  const doc = `# facts.md — SubhSandesh first-party data

> Generated by \`npm run facts\` on ${today()}. Do not edit above the manual
> marker — regenerating overwrites it. Numbers come straight from the \`${DB_NAME}\`
> database; each line states what it measures and when it was measured.
>
> **Every post must cite at least 3 of these, with at least 2 inside the first
> 150 words.** These are the only facts no competitor can publish, which is what
> makes a post citable rather than a sixth copy of what already ranks.

## Product usage

${usage.join("\n") || "- (none collected)"}

## Performance and reach

${performance.join("\n") || "- (none collected)"}

## Customer behaviour

${behaviour.join("\n") || "- (none collected)"}

## Pricing and cost

<!-- Not derivable from the database — keep this current by hand below the marker. -->

${MANUAL_MARKER}

${
  manual ||
  `## Pricing (fill in by hand)

- Free tier includes:
- Paid tier price:

## First-hand experience

<!-- Counts as original even without numbers. Be specific about what broke. -->
-`
}
`;

  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, doc, "utf8");

  console.log(`✔ Wrote ${path.relative(APP_ROOT, OUT)}`);
  console.log(`  ${facts.length} facts collected (${usage.length} usage, ${performance.length} performance, ${behaviour.length} behaviour)`);
  if (facts.length < 3) {
    console.error("✖ Fewer than 3 facts — the skill's Phase 0 gate will block drafting.");
    process.exit(1);
  }
}

await main();

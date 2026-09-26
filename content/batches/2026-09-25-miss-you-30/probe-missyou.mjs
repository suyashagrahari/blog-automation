#!/usr/bin/env node
// READ-ONLY probe of the miss-you segment. Counts and aggregations only, never a
// write. Reuses collect-facts.mjs's env handling; the URI is never printed.
// Run:  node content/batches/2026-09-25-miss-you-30/probe-missyou.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(HERE, "..", "..", "..");
const SERVER_ENV = path.resolve(APP_ROOT, "..", "server", ".env");
const env = (t, k) => { const l = t.split("\n").find((x) => x.trim().startsWith(`${k}=`)); return l ? l.slice(l.indexOf("=") + 1).trim().replace(/^["']|["']$/g, "") : ""; };

const txt = await readFile(SERVER_ENV, "utf8");
const uri = env(txt, "PROD_MONGODB_URI") || env(txt, "LOCAL_MONGODB_URI");
const req = createRequire(path.resolve(APP_ROOT, "..", "server", "package.json"));
const { MongoClient } = req("mongodb");
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 20000 });

const pct = (n, d) => (d ? ((n / d) * 100).toFixed(1) : "0.0");
try {
  await client.connect();
  const db = client.db("gifts");
  const names = (await db.listCollections().toArray()).map((c) => c.name).filter((n) => /pages$/.test(n));
  let total = 0; const counts = {};
  for (const n of names) { const c = await db.collection(n).countDocuments(); counts[n] = c; total += c; }
  const COL = "missyougfpages";
  if (!names.includes(COL)) { console.log(`no ${COL} collection; collections: ${names.join(", ")}`); process.exit(0); }
  const col = db.collection(COL);
  const n = counts[COL];
  console.log(`total pages across ${names.length} collections: ${total}`);
  console.log(`${COL}: ${n} (${pct(n, total)}% of all pages)`);
  if (!n) process.exit(0);

  const sample = await col.findOne({});
  console.log("fields:", Object.keys(sample || {}).join(", "));

  for (const [label, q] of [
    ["password-protected", { $or: [{ password: { $exists: true, $nin: [null, ""] } }, { isPasswordProtected: true }] }],
    ["published/shared", { $or: [{ isPublished: true }, { published: true }, { status: "published" }] }],
  ]) {
    try { console.log(`  ${label}: ${await col.countDocuments(q)} of ${n} (${pct(await col.countDocuments(q), n)}%)`); }
    catch (e) { console.log(`  ${label}: n/a (${e.message})`); }
  }
  const views = await col.aggregate([{ $group: { _id: null, v: { $sum: { $ifNull: ["$views", 0] } }, max: { $max: "$views" } } }]).toArray();
  console.log("  views:", JSON.stringify(views[0] || {}));
  const gap = await col.aggregate([
    { $match: { createdAt: { $exists: true }, updatedAt: { $exists: true } } },
    { $project: { h: { $divide: [{ $subtract: ["$updatedAt", "$createdAt"] }, 3600000] } } },
    { $sort: { h: 1 } }, { $group: { _id: null, all: { $push: "$h" } } },
  ]).toArray();
  if (gap[0]?.all?.length) { const a = gap[0].all; console.log(`  median first-save→last-edit gap: ${a[Math.floor(a.length / 2)].toFixed(1)}h (n=${a.length})`); }
  const first = await col.find({}, { projection: { createdAt: 1 } }).sort({ createdAt: 1 }).limit(1).toArray();
  console.log("  earliest page:", first[0]?.createdAt);
} finally { await client.close(); }

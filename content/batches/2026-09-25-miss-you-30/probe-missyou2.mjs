#!/usr/bin/env node
// READ-ONLY probe v2 — the miss-you template's own mechanics.
import { readFile } from "node:fs/promises";
import path from "node:path"; import { createRequire } from "node:module"; import { fileURLToPath } from "node:url";
const HERE = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(HERE, "..", "..", "..");
const env = (t, k) => { const l = t.split("\n").find((x) => x.trim().startsWith(`${k}=`)); return l ? l.slice(l.indexOf("=") + 1).trim().replace(/^["']|["']$/g, "") : ""; };
const txt = await readFile(path.resolve(APP_ROOT, "..", "server", ".env"), "utf8");
const req = createRequire(path.resolve(APP_ROOT, "..", "server", "package.json"));
const { MongoClient } = req("mongodb");
const client = new MongoClient(env(txt, "PROD_MONGODB_URI") || env(txt, "LOCAL_MONGODB_URI"), { serverSelectionTimeoutMS: 20000 });
const pct = (n, d) => (d ? ((n / d) * 100).toFixed(1) : "0.0");
try {
  await client.connect();
  const col = client.db("gifts").collection("missyougfpages");
  const n = await col.countDocuments();
  const has = async (label, q) => { const c = await col.countDocuments(q); console.log(`  ${label.padEnd(34)} ${String(c).padStart(4)} of ${n}  ${pct(c, n)}%`); return c; };
  console.log(`missyougfpages: n=${n}\n── what senders actually fill in ──`);
  await has("set a reunion date (countdown)", { reunionDate: { $exists: true, $nin: [null, ""] } });
  await has("set a 'together since' date", { sinceDate: { $exists: true, $nin: [null, ""] } });
  await has("recorded a voice note", { voiceUrl: { $exists: true, $nin: [null, ""] } });
  await has("added background music", { backgroundMusic: { $exists: true, $nin: [null, ""] } });
  await has("added a photo", { sharePhoto: { $exists: true, $nin: [null, ""] } });
  await has("wrote a secret", { secret: { $exists: true, $nin: [null, ""] } });
  await has("used a pet name", { petName: { $exists: true, $nin: [null, ""] } });
  await has("filled both cities (distance)", { yourCity: { $nin: [null, ""] }, theirCity: { $nin: [null, ""] } });
  await has("added 'open when' letters", { openWhen: { $exists: true, $ne: [], $ne: null } });
  await has("added memories", { memories: { $exists: true, $ne: [], $ne: null } });
  await has("added a quiz", { quiz: { $exists: true, $ne: [], $ne: null } });
  const agg = async (label, pipeline) => { const r = await col.aggregate(pipeline).toArray(); console.log(`  ${label}:`, JSON.stringify(r[0] ?? {})); return r[0]; };
  console.log("── engagement ──");
  await agg("viewCount", [{ $group: { _id: null, total: { $sum: { $ifNull: ["$viewCount", 0] } }, max: { $max: "$viewCount" }, avg: { $avg: { $ifNull: ["$viewCount", 0] } } } }]);
  await agg("hugCount", [{ $group: { _id: null, total: { $sum: { $ifNull: ["$hugCount", 0] } }, max: { $max: "$hugCount" }, withAny: { $sum: { $cond: [{ $gt: ["$hugCount", 0] }, 1, 0] } } } }]);
  const lens = await col.aggregate([{ $match: { letterBody: { $type: "string" } } }, { $project: { w: { $size: { $split: [{ $trim: { input: "$letterBody" } }, " "] } } } }, { $sort: { w: 1 } }, { $group: { _id: null, all: { $push: "$w" } } }]).toArray();
  if (lens[0]?.all?.length) { const a = lens[0].all; console.log(`  letter length: median ${a[Math.floor(a.length/2)]} words, max ${a[a.length-1]}, n=${a.length}`); }
  const ow = await col.aggregate([{ $match: { openWhen: { $type: "array" } } }, { $project: { c: { $size: "$openWhen" } } }, { $group: { _id: null, avg: { $avg: "$c" }, max: { $max: "$c" }, withAny: { $sum: { $cond: [{ $gt: ["$c", 0] }, 1, 0] } } } }]).toArray();
  console.log("  openWhen letters:", JSON.stringify(ow[0] ?? {}));
  const mem = await col.aggregate([{ $match: { memories: { $type: "array" } } }, { $project: { c: { $size: "$memories" } } }, { $group: { _id: null, avg: { $avg: "$c" }, max: { $max: "$c" }, withAny: { $sum: { $cond: [{ $gt: ["$c", 0] }, 1, 0] } } } }]).toArray();
  console.log("  memories:", JSON.stringify(mem[0] ?? {}));
  const rd = await col.aggregate([{ $match: { reunionDate: { $type: "date" } } }, { $project: { d: { $divide: [{ $subtract: ["$reunionDate", "$createdAt"] }, 86400000] } } }, { $sort: { d: 1 } }, { $group: { _id: null, all: { $push: "$d" } } }]).toArray();
  if (rd[0]?.all?.length) { const a = rd[0].all.filter((x) => x > -3650 && x < 3650); console.log(`  days from page creation to reunion date: median ${a[Math.floor(a.length/2)]?.toFixed(0)}, min ${a[0]?.toFixed(0)}, max ${a[a.length-1]?.toFixed(0)}, n=${a.length}`); }
} finally { await client.close(); }

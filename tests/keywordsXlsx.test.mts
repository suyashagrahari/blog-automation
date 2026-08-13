import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { copyFileSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { parseWorkbook } from "../app/lib/excel.ts";

// The whole point of scripts/keywords-to-xlsx.mjs is that the studio can upload
// its output. So the test asserts the round-trip through the studio's OWN parser
// rather than re-reading the workbook with xlsx directly — that's what would
// actually break if either side's column names drifted.

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const FIXTURE = path.join(HERE, "fixtures", "keywords", "keyword-inventory.csv");

/** Run the script over a copy of the fixture in a temp dir; return the rows. */
function generate() {
  const dir = mkdtempSync(path.join(tmpdir(), "kw-xlsx-"));
  const csv = path.join(dir, "keyword-inventory.csv");
  copyFileSync(FIXTURE, csv);

  execFileSync("node", [path.join(ROOT, "scripts", "keywords-to-xlsx.mjs"), csv], {
    cwd: ROOT,
    stdio: "pipe",
  });

  const buf = readFileSync(path.join(dir, "keywords.xlsx"));
  const parsed = parseWorkbook(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
  rmSync(dir, { recursive: true, force: true });
  return parsed;
}

test("the generated sheet parses with the studio's own uploader", () => {
  const { rows } = generate();

  // 3 survivors; the G5 and G1 rows stay off sheet 1.
  assert.equal(rows.length, 3);
  assert.ok(!rows.some((r) => r.keyword === "happy rakhi images download hd"));
  assert.ok(!rows.some((r) => r.keyword === "rakhi"));
});

test("survivors are ordered by priority score, highest first", () => {
  const { rows } = generate();
  assert.deepEqual(
    rows.map((r) => r.keyword),
    [
      "online rakhi card maker with photo", // 100
      "rakhi wishes for brother in hindi", //  80
      "raksha bandhan wishes, messages", //    60
    ]
  );
});

test("every mapped column lands in its KeywordRow field, not in extra", () => {
  const { rows } = generate();
  const top = rows[0];

  assert.equal(top.keyword, "online rakhi card maker with photo");
  assert.equal(top.strategy, "C02 · transactional");
  assert.equal(top.searchVolume, "200-600 EST");
  assert.equal(top.difficulty, "winnable · 6 weak in top 10");
  assert.equal(top.assetType, "tool");
  assert.equal(top.category, "rakhi");
});

test("ranking URLs survive as extra columns, query strings stripped", () => {
  const { rows } = generate();
  const wishes = rows.find((r) => r.keyword === "rakhi wishes for brother in hindi")!;

  // The utm_source must be gone — it is tracking noise, not part of the URL.
  assert.equal(wishes.extra["Ranking URL 1"], "https://a.example/rakhi");
  assert.equal(wishes.extra["Ranking URL 2"], "https://b.example/wishes");
  assert.equal(wishes.extra["Ranking URL 3"], "https://reddit.com/r/india/x");
  assert.equal(wishes.extra["Weak Results"], "5/10");
  assert.equal(wishes.extra["Evidence Type"], "TARGETED+CONFIRMED");
  assert.equal(wishes.extra["Source URL"], "https://example.com/rakhi-wishes");
});

test("a quoted keyword containing a comma is parsed as one field", () => {
  const { rows } = generate();
  const row = rows.find((r) => r.keyword === "raksha bandhan wishes, messages");
  assert.ok(row, "the comma-bearing keyword should survive CSV parsing intact");
  assert.equal(row!.extra["Cluster ID"], "C01");
});

test("no extra column is swallowed by the studio's substring header matcher", () => {
  const { rows } = generate();
  // If e.g. a "Volume Source" column existed, searchVolume would hold "EST"
  // instead of the band. Assert each mapped field still holds its own value.
  for (const r of rows) {
    assert.match(r.searchVolume, /\d+-\d+ (EST|TOOL)$/);
    assert.ok(!r.category.includes("http"), "category must not absorb a URL column");
  }
});

import * as XLSX from "xlsx";
import type { KeywordRow, RowResult } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Excel parsing + export. The uploaded sheet uses these headers (case/space
// tolerant): Keyword | Strategy / Intent Cluster | Search Volume Profile |
// Ranking Difficulty | Asset Type Blueprint | Functional Core Category.
// Any other columns are preserved in `extra` and re-exported.
// ─────────────────────────────────────────────────────────────────────────────

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

// Map known header -> our field. Matching is on the normalized header.
const HEADER_MAP: { field: keyof KeywordRow; aliases: string[] }[] = [
  { field: "keyword", aliases: ["keyword", "keywords", "targetkeyword"] },
  { field: "strategy", aliases: ["strategyintentcluster", "strategy", "intentcluster", "intent"] },
  { field: "searchVolume", aliases: ["searchvolumeprofile", "searchvolume", "volume"] },
  { field: "difficulty", aliases: ["rankingdifficulty", "difficulty", "kd"] },
  { field: "assetType", aliases: ["assettypeblueprint", "assettype", "asset"] },
  { field: "category", aliases: ["functionalcorecategory", "category", "corecategory"] },
];

const KNOWN_FIELDS = new Set(HEADER_MAP.map((h) => h.field));

function fieldForHeader(header: string): keyof KeywordRow | null {
  const n = norm(header);
  for (const { field, aliases } of HEADER_MAP) {
    if (aliases.some((a) => n === a || n.includes(a))) return field;
  }
  return null;
}

export interface ParseResult {
  rows: KeywordRow[];
  /** original header strings, in order, for faithful re-export */
  headers: string[];
}

/** Parse an uploaded .xlsx/.csv ArrayBuffer into keyword rows. */
export function parseWorkbook(buf: ArrayBuffer): ParseResult {
  const wb = XLSX.read(buf, { type: "array" });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: "" });
  if (!json.length) return { rows: [], headers: [] };

  const headers = Object.keys(json[0]);

  const rows: KeywordRow[] = json
    .map((raw, i) => {
      const row: KeywordRow = {
        id: "",
        keyword: "",
        strategy: "",
        searchVolume: "",
        difficulty: "",
        assetType: "",
        category: "",
        extra: {},
      };
      for (const header of headers) {
        const value = String(raw[header] ?? "").trim();
        const field = fieldForHeader(header);
        if (field && KNOWN_FIELDS.has(field as keyof KeywordRow)) {
          (row as unknown as Record<string, string>)[field as string] = value;
        } else {
          if (value) row.extra[header] = value;
        }
      }
      row.id = `${i}-${norm(row.keyword).slice(0, 40) || "row"}`;
      return row;
    })
    .filter((r) => r.keyword); // drop empty rows

  return { rows, headers };
}

/**
 * Export rows + their generation results to an .xlsx and trigger a download.
 * Adds Status / Slug / Cover Image Query / Meta Title / Canonical columns so the
 * editor can copy them straight into Strapi.
 */
export function exportToExcel(
  rows: KeywordRow[],
  results: Record<string, RowResult>,
  siteUrl: string,
  blogPathPrefix: string,
  fileName = "blog-automation-export.xlsx"
) {
  const base = `${siteUrl.replace(/\/+$/, "")}${blogPathPrefix.startsWith("/") ? blogPathPrefix : "/" + blogPathPrefix}`.replace(/\/+$/, "");

  const aoa = rows.map((r) => {
    const res = results[r.id] || { status: "pending" as const };
    const row: Record<string, string> = {
      Keyword: r.keyword,
      "Strategy / Intent Cluster": r.strategy,
      "Search Volume Profile": r.searchVolume,
      "Ranking Difficulty": r.difficulty,
      "Asset Type Blueprint": r.assetType,
      "Functional Core Category": r.category,
    };
    // preserve extra columns
    for (const [k, v] of Object.entries(r.extra)) row[k] = v;
    // appended automation columns
    row["Status"] = res.status;
    row["Publish State"] = res.publishState || "";
    row["Slug"] = res.slug || "";
    row["Article URL"] = res.slug ? `${base}/${res.slug}` : "";
    row["Cover Image Query"] = res.coverImageQuery || "";
    row["Meta Title"] = res.metaTitle || "";
    row["Error"] = res.error || "";
    return row;
  });

  const ws = XLSX.utils.json_to_sheet(aoa);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Keywords");
  XLSX.writeFile(wb, fileName);
}

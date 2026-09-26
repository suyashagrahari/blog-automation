#!/usr/bin/env node
// pricecheck-intl.mjs — the price guard for a NON-ENGLISH batch.
//
// Why this exists: scripts/verify-batch.mjs guards cost claims with an English-only
// regex (PRICE_HARD / PRICE_SOFT). Every post in this batch is written in Portuguese,
// Spanish, French, Italian, German, Dutch, Polish, Turkish, Indonesian or Russian, so
// that guard sees nothing. content/facts.md's Pricing block is EMPTY, which means any
// price claim in any language is unsourced.
//
// usage: node pricecheck-intl.mjs [slug]
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const blogs = join(here, "blogs");
const only = process.argv[2];

// Word-boundary-safe per language. Kept deliberately broad: a false positive costs a
// glance, a false negative ships an unsourced price claim.
const TERMS = [
  ["en", /\b(free of charge|for free|totally free|completely free|100% free|no cost|zero cost|costs? you nothing|free (tier|plan|forever))\b/i],
  ["pt", /\b(gr[áa]tis|gratuito|gratuita|sem custo|de gra[çc]a|n[ãa]o paga nada|plano gratuito)\b/i],
  ["es", /\b(gratis|gratuito|gratuita|sin costo|sin coste|no cuesta nada|plan gratuito)\b/i],
  ["fr", /\b(gratuit|gratuite|gratuitement|sans frais|ne co[ûu]te rien|offre gratuite)\b/i],
  ["it", /\b(gratis|gratuito|gratuita|gratuitamente|senza costi|non costa nulla)\b/i],
  ["de", /\b(kostenlos|kostenfrei|gratis|umsonst|ohne Kosten|kostet nichts)\b/i],
  ["nl", /\b(gratis|kosteloos|zonder kosten|kost niets)\b/i],
  ["pl", /\b(darmow[ayie]\w*|bezp[łl]atn\w+|za darmo|nic nie kosztuje)\b/i],
  ["tr", /\b([üu]cretsiz|bedava|para[ -]?s[ıi]z|hi[çc]bir [üu]cret)\b/i],
  ["id", /\b(gratis|cuma-cuma|tanpa biaya|tidak dipungut biaya)\b/i],
  ["ru", /(бесплатн\w+|без оплаты|ничего не стоит|даром)/i],
  ["ja", /(無料|タダ)/],
  ["ko", /(무료|공짜)/],
  // currency and explicit pricing, any language
  ["cur", /(₹\s?\d|\brs\.?\s?\d|[$€£₺₽]\s?\d|\d+\s?(USD|EUR|BRL|TRY|RUB|PLN|IDR)\b)/i],
  ["sub", /\b(subscription|assinatura|suscripci[óo]n|abonnement|abbonamento|abonelik|berlangganan|подписка|pricing|pre[çc]o|precio|prix|prezzo|Preis|fiyat|harga|цена)\b/i],
];

const files = existsSync(blogs)
  ? readdirSync(blogs).filter((f) => f.endsWith(".json")).filter((f) => !only || f === `${only}.json`)
  : [];
if (!files.length) { console.log("no blog files yet"); process.exit(0); }

let hits = 0;
for (const f of files) {
  const slug = f.replace(/\.json$/, "");
  let j;
  try { j = JSON.parse(readFileSync(join(blogs, f), "utf8")); }
  catch (e) { console.log(`✗ ${slug}: JSON PARSE FAIL — ${e.message}`); hits++; continue; }
  const parts = [j.article?.contentMarkdown || "", j.article?.title || "",
    j.article?.metaTitle || "", j.article?.metaDescription || "",
    ...(j.article?.faqs || []).flatMap((q) => [q.question || "", q.answer || ""])];
  const body = parts.join("\n");
  for (const [lang, re] of TERMS) {
    const m = body.match(re);
    if (m) {
      const i = Math.max(0, body.indexOf(m[0]) - 60);
      console.log(`✗ ${slug}  [${lang}]  "${m[0]}"\n    …${body.slice(i, i + 160).replace(/\s+/g, " ")}…`);
      hits++;
    }
  }
}
console.log(hits ? `\n${hits} possible cost claim(s) across ${files.length} file(s) — each needs a human read` : `✔ ${files.length} file(s), no cost claim in any guarded language`);

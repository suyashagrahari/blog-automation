#!/usr/bin/env node
/**
 * Create (or update) a Strapi `Template` entry — the rows that populate the
 * relatedTemplates picker on an article, and the blog's "Create a surprise" card.
 *
 * The Template content type is a COLLECTION TYPE, so making a new template
 * selectable is a data change, not a schema change. Nothing in cms/ needs
 * editing; this script writes the row.
 *
 * The studio keeps its Strapi token in the browser's localStorage per origin
 * (see README), so there is no token on disk. Pass one in:
 *
 *   STRAPI_TOKEN=<token> node scripts/add-template.mjs ganesh
 *   STRAPI_TOKEN=<token> node scripts/add-template.mjs ganesh --dry-run
 *
 * The token needs create + update on api::template.template. Generate one at
 * Strapi admin → Settings → API Tokens.
 *
 * Idempotent: it looks the template up by `url` first and PUTs if it already
 * exists, so re-running never creates a duplicate row.
 */

const STRAPI = process.env.STRAPI_URL || "https://strapi.subhsandesh.in";
const TOKEN = process.env.STRAPI_TOKEN || "";

/**
 * Every field below is copied from the template's own `config.ts`
 * (`client/app/(templates)/happy-ganesh-chaturthi/config.ts`) rather than
 * paraphrased from the slug, so the picker card says what the page actually does.
 *
 * `order: 22` is deliberate. The live rows leave 22 free between eid-mubarak (21)
 * and bouquet-gf (23), with the two rakhi pages at 24 and 25 — so 22 drops this
 * into the existing Festival block instead of stranding it at the end of the list.
 */
const TEMPLATES = {
  ganesh: {
    title: "Happy Ganesh Chaturthi",
    url: "/happy-ganesh-chaturthi",
    category: "Festival",
    emoji: "🪔",
    order: 22,
    featured: false,
    // Strapi caps this field at 220 characters.
    description:
      "A Ganesh Chaturthi page they perform themselves — offer the durva, kumkum, flowers and modak, circle the aarti thali, and write a prarthana back. Add your photo and a card for their story.",
  },
};

const name = process.argv[2];
const dryRun = process.argv.includes("--dry-run");
const tpl = TEMPLATES[name];

if (!tpl) {
  console.error(`usage: node scripts/add-template.mjs <${Object.keys(TEMPLATES).join("|")}> [--dry-run]`);
  process.exit(1);
}
if (tpl.description.length > 220) {
  console.error(`✖ description is ${tpl.description.length} chars, Strapi caps it at 220`);
  process.exit(1);
}
if (!TOKEN && !dryRun) {
  console.error("✖ STRAPI_TOKEN is not set. Generate one at Strapi admin → Settings → API Tokens");
  console.error("  (it needs create + update on api::template.template), then re-run:");
  console.error(`  STRAPI_TOKEN=<token> node scripts/add-template.mjs ${name}`);
  process.exit(1);
}

const headers = { "Content-Type": "application/json", ...(TOKEN && { Authorization: `Bearer ${TOKEN}` }) };

// Look it up by url so a re-run updates instead of duplicating.
const lookup = await fetch(
  `${STRAPI}/api/templates?filters[url][$eq]=${encodeURIComponent(tpl.url)}&fields[0]=title&fields[1]=url`,
  { headers },
);
if (!lookup.ok) {
  console.error(`✖ lookup failed: ${lookup.status} ${await lookup.text()}`);
  process.exit(1);
}
const existing = (await lookup.json()).data ?? [];
const found = existing[0];

if (dryRun) {
  console.log(`[dry-run] ${found ? "would UPDATE" : "would CREATE"} ${tpl.url}`);
  console.log(JSON.stringify(tpl, null, 2));
  process.exit(0);
}

const res = found
  ? await fetch(`${STRAPI}/api/templates/${found.documentId ?? found.id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ data: tpl }),
    })
  : await fetch(`${STRAPI}/api/templates`, {
      method: "POST",
      headers,
      body: JSON.stringify({ data: tpl }),
    });

if (!res.ok) {
  console.error(`✖ ${found ? "update" : "create"} failed: ${res.status}`);
  console.error(await res.text());
  process.exit(1);
}

const saved = (await res.json()).data;
console.log(`✔ ${found ? "updated" : "created"} template ${tpl.url} (id ${saved?.documentId ?? saved?.id})`);
console.log(`  It is now selectable in the article editor's relatedTemplates picker.`);
console.log(`  If draftAndPublish leaves it in Draft, hit Publish on the entry in Strapi admin.`);

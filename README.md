# Blog Automation Studio

A local Next.js studio that turns a **keyword Excel sheet** into fully
**SEO + GEO + AEO–optimized** blog articles using **any** LLM (OpenAI / Gemini /
Claude), then **auto-publishes** them to the Strapi blog CMS — one click at a
time or the whole sheet at once.

```
gifts/
├── cms/              Strapi v5 blog CMS (:1337)
└── blog-automation/  THIS — the automation studio (:3000 by default)
```

## Quick start

```bash
cd blog-automation
npm install      # already includes `xlsx`
npm run dev      # open http://localhost:3000
```

> Run the CMS too (`cd ../cms && npm run develop`) so publishing has a target.

## Layout

A left **sidebar** switches between three views:

- **Generate** — upload your keyword sheet, pick rows, write & publish.
- **Library** — every blog you've generated, stored locally in **IndexedDB**.
  Click a card to read the full article (rendered Markdown), its FAQs, the
  **JSON-LD structured data**, and SEO meta. Delete one, or **Delete all**.
- **Settings** — API keys + model per provider, and your Strapi connection.

## How to use

1. **Settings** (sidebar → Settings; opens automatically the first time)
   - Paste an API key for **OpenAI**, **Gemini**, and/or **Claude**.
   - Pick a model per provider (or type a custom model id), then click
     **Set active** on the provider you want to write with.
   - Fill in **Strapi URL** + **API Token** (full-access), the **Site URL**
     (for canonical links) and the **blog path prefix** (`/blog`).
   - Toggle **Auto-publish** on to publish straight to Strapi.
   - Everything is saved in your browser's `localStorage` — keys never go
     anywhere except this app's own server routes.

2. **Upload** your keyword `.xlsx` / `.csv`. Expected headers (case/spacing
   tolerant): `Keyword`, `Strategy / Intent Cluster`, `Search Volume Profile`,
   `Ranking Difficulty`, `Asset Type Blueprint`, `Functional Core Category`.
   Extra columns are preserved and re-exported.

3. The sheet renders as a **table**. Tick the keywords you want (or
   **Select all**).

4. Click **Generate Selected** or **Generate All**. Articles are written **one
   by one**; each row shows a live status (`Writing… → Publishing… → Done`).
   On success the row fills in the **slug** and a **cover-image search query**
   you can copy into Strapi / Unsplash.

5. **Export Excel** to download the sheet back with appended columns: `Status`,
   `Publish State`, `Slug`, `Article URL`, `Cover Image Query`, `Meta Title`,
   `Error`.

## What each article gets (mapped 1:1 to the Strapi Article schema)

`title`, `slug`, `excerpt`, `contentMarkdown` (1500–2500 words, answer-first,
with a comparison table), `tags[]`, `keyTakeaways[]` (GEO TL;DR), a full **SEO**
component (`metaTitle ≤70`, `metaDescription ≤170`, `keywords`, `canonicalURL`,
`ogType`, **`structuredData`** JSON-LD) and **≥10 FAQs** (powering FAQPage schema
for AEO). `coverImage`, `author` and `category` are left for you to set in Strapi
(the cover query helps).

### Structured data (JSON-LD) for GEO/AEO

Every article ships a `structuredData` array of schema.org JSON-LD that lands in
the CMS `seo.structuredData` field (no CMS change needed — that field already
exists). It always contains an **Article** block and a **FAQPage** block, and for
how-to intents the model also emits a full **HowTo** block (ordered `HowToStep`s,
`totalTime`, etc.). If the model omits Article/FAQPage, the studio injects them
automatically. View/copy the JSON-LD from the **Library → blog → Structured Data**
tab.

## Auto-publish endpoint (one-time CMS setup)

The studio publishes via a custom CMS endpoint so posts go **live instantly**
(the default Strapi REST create only makes a *draft*). Two files were added to
the CMS:

- `cms/src/api/article/controllers/article.ts` → `createAndPublish` action
- `cms/src/api/article/routes/01-automation.ts` → `POST /api/articles/automation`

**Restart Strapi** once after pulling these (`npm run develop`). Then create a
**full-access API token** in *Strapi → Settings → API Tokens* and paste it into
the studio's Settings.

If the endpoint is missing (CMS not restarted), the studio gracefully falls back
to creating a **draft** — the row is marked `saved as draft` so you can publish
it manually in Strapi.

## Notes

- LLM + Strapi calls are proxied through this app's own route handlers
  (`/api/generate`, `/api/strapi`) to avoid browser CORS (Anthropic blocks
  direct browser calls) and keep provider quirks server-side.
- Duplicate slugs are handled automatically (a numeric suffix is appended).

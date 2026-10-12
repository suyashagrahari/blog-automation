# Site baseline — Halloween global run (2026-10-12)

- `npm run keywords:inventory`: **0** Halloween keywords ever drafted; `strapi-live-articles.json` has **0** Halloween posts. Nothing to improve or merge — every row is `new-page`.
- No Search Console export (asked every run). Own positions are `none` = unmeasured, not confirmed absent.
- `content/facts.md` has **no Halloween data**. Live templates exist: `/happy-halloween` ("The Little Haunted House — carve a pumpkin, read your letter by flashlight, brew a love potion, ask 'Will you be my boo?'") and `/happy-halloween-premium`. Both are seeded into the CMS template picker (dilse-cms `4541cf0`) but are **not yet in `TEMPLATE_LINKS`** in `app/lib/prompt.ts` — add them before the blog skill writes Halloween posts, or no post can link them.

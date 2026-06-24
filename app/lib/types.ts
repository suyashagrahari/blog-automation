// ─────────────────────────────────────────────────────────────────────────────
// Core shared types for the Blog Automation studio.
// ─────────────────────────────────────────────────────────────────────────────

export type Provider = "openai" | "gemini" | "anthropic";

/** A single row parsed from the uploaded keyword Excel sheet. */
export interface KeywordRow {
  /** Stable id (derived from keyword + index) so React keys + status survive re-renders. */
  id: string;
  keyword: string;
  strategy: string; // "Strategy / Intent Cluster"
  searchVolume: string; // "Search Volume Profile"
  difficulty: string; // "Ranking Difficulty"
  assetType: string; // "Asset Type Blueprint"
  category: string; // "Functional Core Category"
  /** Any extra columns we didn't explicitly map, preserved for re-export. */
  extra: Record<string, string>;
}

export type RowStatus = "pending" | "queued" | "generating" | "publishing" | "done" | "error";

/** Generation result + status stored per keyword, keyed by row id. */
export interface RowResult {
  status: RowStatus;
  /** Human-readable error if status === "error". */
  error?: string;
  /** Final slug of the generated article. */
  slug?: string;
  /** Search query the user can paste into Unsplash / an image search to find a cover image. */
  coverImageQuery?: string;
  /** Meta title produced for the article (handy in the exported sheet). */
  metaTitle?: string;
  /** When publishing succeeded, "published" | "draft" (draft = CMS endpoint missing). */
  publishState?: "published" | "draft";
  /** Strapi documentId of the created entry (for reference / dedupe). */
  documentId?: string;
  /** ISO timestamp of completion. */
  finishedAt?: string;
}

/** The structured JSON the LLM is instructed to return. Mirrors the Strapi Article schema. */
export interface GeneratedArticle {
  title: string;
  slug: string;
  excerpt: string; // ≤ 300 chars
  metaTitle: string; // ≤ 70 chars
  metaDescription: string; // ≤ 170 chars
  keywords: string; // comma-separated focus keywords
  canonicalURL?: string;
  ogType?: string;
  tags: string[];
  keyTakeaways: string[];
  faqs: { question: string; answer: string }[]; // ≥ 10
  coverImageQuery: string; // short 3-7 word search query (table / Excel / stock search)
  coverImagePrompt: string; // rich 3-4 sentence prompt for an AI image generator
  /** Public S3/CDN URL of an uploaded + compressed cover image (set in the viewer). */
  coverImageUrl?: string;
  contentMarkdown: string; // full article body in Markdown
  readingTime?: number;
  /** JSON-LD blocks (Article, FAQPage, HowTo, …) injected into seo.structuredData for GEO/AEO. */
  structuredData?: Record<string, unknown>[];
}

/** A Strapi taxonomy entry (category or author) the user can connect an article to. */
export interface TaxonomyItem {
  /** Strapi v5 documentId — used to connect the relation. */
  documentId: string;
  name: string;
  slug?: string;
}

/** A fully generated blog persisted in IndexedDB so the user can browse / view / delete it later. */
export interface StoredBlog {
  /** Same id as the source KeywordRow (stable, dedupes re-generation). */
  id: string;
  keyword: string;
  article: GeneratedArticle;
  provider: Provider;
  model: string;
  publishState?: "published" | "draft";
  documentId?: string;
  /** Public S3/CDN URL of the uploaded cover image (also pushed to Strapi coverImageUrl). */
  coverImageUrl?: string;
  /** Connected Strapi category (documentId + name for display). */
  categoryId?: string;
  categoryName?: string;
  /** Connected Strapi author (documentId + name for display). */
  authorId?: string;
  authorName?: string;
  /** ISO timestamp. */
  createdAt: string;
}

/** Persisted settings (localStorage). API keys never leave the browser except to our own /api routes. */
export interface Settings {
  // API keys per provider
  keys: Record<Provider, string>;
  // selected model per provider
  models: Record<Provider, string>;
  // currently active provider used for generation
  activeProvider: Provider;
  // Strapi connection
  strapiUrl: string;
  strapiToken: string;
  // default site origin used to build canonical URLs, e.g. https://subhsandesh.in
  siteUrl: string;
  // blog path prefix for canonical, e.g. /blog
  blogPathPrefix: string;
  // auto-publish to strapi after each generation
  autoPublish: boolean;
  // default Strapi category/author every generated article is connected to (documentId + name)
  defaultCategoryId?: string;
  defaultCategoryName?: string;
  defaultAuthorId?: string;
  defaultAuthorName?: string;
}

export interface GenerateRequestBody {
  provider: Provider;
  model: string;
  apiKey: string;
  systemPrompt: string;
  userPrompt: string;
}

export interface StrapiPublishBody {
  strapiUrl: string;
  strapiToken: string;
  autoPublish: boolean;
  article: GeneratedArticle;
  /** Strapi documentIds to connect the category / author relations. */
  categoryId?: string;
  authorId?: string;
}

export interface StrapiConnectBody {
  strapiUrl: string;
  strapiToken: string;
  documentId: string;
  categoryId?: string;
  authorId?: string;
  /** Set the article's external cover image URL (S3/CDN). */
  coverImageUrl?: string;
  /** Set the SEO component's external OG image URL (S3/CDN). */
  metaImageUrl?: string;
}

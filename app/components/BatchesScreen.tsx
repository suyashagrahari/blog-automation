"use client";

import type { Settings, TaxonomyItem, TemplateItem } from "@/app/lib/types";

// Placeholder — the real batch list, review table and publish flow land in the
// next commits. Kept minimal so the nav wiring can be verified on its own.
export default function BatchesScreen({
  settings,
}: {
  settings: Settings;
  categories: TaxonomyItem[];
  authors: TaxonomyItem[];
  templates: TemplateItem[];
  onPublished?: () => void;
}) {
  return (
    <div className="card p-6">
      <p className="text-sm text-[var(--muted)]">
        Batches load from <code>content/batches/</code>. Strapi: {settings.strapiUrl || "not configured"}.
      </p>
    </div>
  );
}

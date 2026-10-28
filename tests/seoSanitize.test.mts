import { test } from "node:test";
import assert from "node:assert/strict";
import { selfCanonical, unwrapMarkdownUrls } from "../app/lib/seoSanitize.ts";

test("selfCanonical unwraps a markdown-wrapped canonical", () => {
  assert.equal(
    selfCanonical("[https://subhsandesh.in/blog/x](https://subhsandesh.in/blog/x)", "x"),
    "https://subhsandesh.in/blog/x",
  );
});

test("selfCanonical rebuilds the URL on the slug actually published", () => {
  // The model cut the slug at 60 characters but kept the full one in the canonical.
  assert.equal(
    selfCanonical("https://subhsandesh.in/blog/how-to-secure-your-private-couple-memory-website-with-pin-lock", "how-to-secure-your-private-couple-memory-website-with-pin-lo"),
    "https://subhsandesh.in/blog/how-to-secure-your-private-couple-memory-website-with-pin-lo",
  );
});

test("selfCanonical keeps the site's blog prefix and drops a trailing slash", () => {
  assert.equal(selfCanonical("https://subhsandesh.in/blog/old/", "new"), "https://subhsandesh.in/blog/new");
});

test("selfCanonical returns undefined for anything that is not a URL", () => {
  assert.equal(selfCanonical("", "x"), undefined);
  assert.equal(selfCanonical(undefined, "x"), undefined);
  assert.equal(selfCanonical("see the post", "x"), undefined);
});

test("unwrapMarkdownUrls fixes [url](url) strings anywhere in structured data", () => {
  const out = unwrapMarkdownUrls([
    {
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "HowTo",
      step: [{ url: "[https://subhsandesh.in/a](https://subhsandesh.in/a)", text: "Open [the page](https://subhsandesh.in/a) first." }],
    },
  ]);
  assert.deepEqual(out, [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      // A whole-string link is unwrapped; prose that merely contains a link is left alone.
      step: [{ url: "https://subhsandesh.in/a", text: "Open [the page](https://subhsandesh.in/a) first." }],
    },
  ]);
});

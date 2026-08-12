# Page structure

The block order below is deliberate. Answer engines weight opening content
heavily, so the sequence is not cosmetic.

## Contents

- Block 1: Title, H1, answer paragraph
- Block 2: Definition H2
- Block 3: Main body H2 with H3 items
- Block 4: Comparison table
- Block 5: Objection or nuance H2
- Block 6: FAQ
- Block 7: Author and sources
- Heading rules
- Schema

---

## Block 1 — Title tag, H1, answer paragraph (~150 words)

Title tag and H1 may differ. The title tag optimises the SERP click; the H1
states the page's promise.

```
metaTitle: Primary Keyword (Qualifier) — Concrete Benefit
H1:        Primary Keyword Phrased As The User Would Say It
```

- `metaTitle` **under 60 characters**, keyword early. Hard cap is 70 (Strapi
  rejects longer).
- H1 50–65 characters, exactly one per page. The H1 is the first line of
  `contentMarkdown`.
- `metaDescription` 150–160 characters. Hard cap 170. Affects click-through, not
  ranking.

Then answer immediately. No "in today's world", no throat-clearing.

**Shape of the answer paragraph:**

1. Direct answer in sentence one.
2. Two to four specific numbers, **at least two of them first-party** from
   `content/facts.md`.
3. One sentence stating what the rest of the page covers.

If a reader gets only this paragraph, they should have their answer. That is also
the paragraph an answer engine is most likely to lift.

---

## Block 2 — Definition H2 (~100 words)

```markdown
## What is [thing]?
```

The first two sentences must be a self-contained definition — extractable without
surrounding context. Then expand.

This block targets featured snippets and the "what is X" sub-query answer engines
run when decomposing a larger question.

---

## Block 3 — Main body H2 with H3 items (~600 words)

```markdown
## [Number] [things] for [specific audience]

### 1. [Specific item name]
### 2. [Specific item name]
```

Each H3 gets 60–90 words covering **the same four fields in the same order**
every time — for example: what it is, who it suits, cost, time required.
Consistent structure is what makes a list machine-extractable.

Outbound research links go here, inline, attached to the fact they support.

---

## Block 4 — Comparison table (~150 words)

| Option | Metric A | Metric B | Metric C |
|---|---|---|---|
| Option 1 | Real value | Real value | Real value |

Tables are extracted into AI answers more reliably than any other format. Rules:

- **Real values only** — "2–5 days", "₹899", "44.8%". Never "fast", "affordable",
  "high".
- 3–5 rows, 3–4 columns. Larger tables get truncated.
- **At least one column must use first-party data.**
- One sentence before the table saying what it compares; one after stating the
  takeaway.

---

## Block 5 — Objection or nuance H2 (~150 words)

```markdown
## When [the recommended thing] is the wrong choice
```

Name the case where SubhSandesh itself loses.

This block does disproportionate work: it's the clearest E-E-A-T signal
available, it's what competitor pages almost never include, and answer engines
favour sources that present tradeoffs over sources that only advocate. It also
converts better, because readers trust a page that admits limits.

Real examples worth using: a printed photo album beats a web page when the
recipient has no smartphone; a physical gift beats a link for someone in the same
room; 52.7% of pages are opened on a phone, so a desktop-only recipient is a
worse fit.

---

## Block 6 — FAQ (~200 words) — **never inside `contentMarkdown`**

The FAQs live in **exactly two places**: the `faqs` array of the batch JSON, and
the FAQPage JSON-LD in `structuredData`. They must match each other exactly.

**Do not write an FAQ section into `contentMarkdown`.** Strapi renders the `faqs`
component as its own section on the published page. A `## Frequently asked
questions` heading in the body means the reader sees every question twice, and
the duplicated text competes with itself for the same snippet.

- **8–12 questions.**
- Phrase them as a person would type or speak them, not as keyword strings.
- Answer in 2–3 sentences, answer-first.
- Pull questions from the Phase 2 fan-out analysis and People Also Ask.

If a question is important enough to deserve real estate in the body, it is
important enough to be a proper H2 with a fuller answer — promote it and drop it
from the FAQ list. Do not do both.

Because the FAQs no longer count toward the body, **write the body to length on
its own**: 1,500–1,800 words in `contentMarkdown`, excluding FAQs.

---

## Block 7 — Author and sources

- A sources list with links and publication dates, as a final H2.
- The author is attached in Strapi at publish time (set per batch), so don't
  hand-write a byline into the Markdown.
- `keyTakeaways` in the batch JSON serves as the visible TL;DR callout — 3–5
  bullets, each a complete standalone claim with a number where possible.

Anonymous content is cited less, which is why the Strapi author relation matters.

---

## Heading rules

- Exactly one H1 (the first line of `contentMarkdown`).
- Never skip levels (H1 → H3 is broken markup).
- H2s should read as standalone questions or clear noun phrases — each is a
  retrieval target.
- Every H2 section must be answerable on its own in 2–3 sentences.
- 5–8 H2s per post.
- Never use headings for visual styling, and never fake a heading with bold text.

---

## Schema

`structuredData` in the batch JSON is an **array** of JSON-LD objects. It must
contain both:

- **Article** — `headline`, `author`, `datePublished`, `dateModified`, `image`.
- **FAQPage** — must match the visible FAQ text exactly. Mismatched schema risks
  a manual action.

Optional where genuinely applicable: `HowTo`, `BreadcrumbList`. Never mark up
content that isn't on the page.

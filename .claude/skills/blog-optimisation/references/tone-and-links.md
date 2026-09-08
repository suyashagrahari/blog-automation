# Tone and links

## Tone

The goal is not to make AI-written text pass as human. It's to write something
that has a point of view, because that is what both readers and retrieval systems
reward. Search guidance is about originality and usefulness, not about who or what
typed the words.

### What actually reads as human

- **Specific claims over hedged ones.** "52.7% of shared pages are opened on a
  phone" beats "most people view on mobile".
- **Stated opinions.** "A printed card is the wrong choice for a long-distance
  couple, and here's the number that proves it."
- **Admitted downsides.** Naming where SubhSandesh loses is the strongest trust
  signal available and costs almost nothing.
- **Concrete nouns.** Name the tool, the city, the price, the date.
- **Natural sentence variation.** Some short. Some carrying a subordinate clause
  that extends the thought before it lands.
- **First person where there's real experience.** "When we built the apology
  dashboard, the thing that broke was X."

### What reads as generated

Avoid these regardless of how human they're meant to sound:

- Openers that delay the answer: "In today's fast-paced world", "Let's dive in",
  "Picture this".
- Rhetorical questions used as transitions: "But what does this mean for you?"
- Tricolon padding: "faster, cheaper, and more efficient".
- Hedged non-claims: "can be a great option for many people".
- Section-closing summaries that restate the section.
- Forced casualness — contractions and slang bolted onto content with nothing to
  say.
- Em-dash-heavy rhythm applied uniformly across every paragraph.

The pattern: generated text pads because it has no specific content. **The fix is
more facts, not more personality.**

### Regional and audience fit

SubhSandesh's audience is primarily Indian. Match that context: rupees not
dollars, Indian festivals and their real dates, Indian delivery norms, phrasing
and examples that land locally. Generic global framing is a common tell and
reduces relevance for a geographically specific query.

---

## Links

### Outbound research links — include

They make the page verifiable, which raises both quality signals and citation
likelihood.

- 3–6 per post.
- Placed inline at the exact sentence stating the fact.
- Anchor text describes the source or the finding — never "click here" or a bare
  URL.
- Every link must have been `WebFetch`ed and verified to contain the claimed fact.
- Include the publication date in the visible text where recency matters.

Test before including: **would this fact stay in the post if the link were
removed?** If no, the link is decoration. Cut it.

### Competitor links — never

See `competitors.md`. Reading them in Phase 1 is research. Reproducing them is how
a page becomes the sixth identical result.

If a competitor published original data that genuinely matters, find the primary
source they used and cite that instead. If they *are* the primary source, state
the fact without attribution only if it's common industry knowledge — otherwise
leave it out and find a different fact.

### Wikipedia — sparing

1–2 per post maximum, and only for genuine named entities: festivals, places,
concepts, organisations. Its function is entity disambiguation — signalling which
"Rakhi" or which "Diwali" is meant — not authority transfer. Wikipedia links do
not improve rankings. Linking common words looks like padding.

### Internal links — 2–4

- Descriptive anchor text naming the destination.
- Placed after the section that establishes why the reader would want it, never in
  the opening.
- **Only URLs from `TEMPLATE_LINKS` in `app/lib/prompt.ts`.** An invented slug
  404s.
- Related posts should be genuinely related; a "you might also like" block of
  unrelated links dilutes crawl signals.

### Backlinks — the thing that actually moves rankings

Not controlled from inside the post, but worth naming in the output notes:

- Community answers on forums where the question is genuinely being asked. LLMs
  weight community content heavily.
- Roundup and directory inclusion.
- Original data published as a standalone asset — the most reliable long-term
  link magnet, and it comes free with the Phase 0 first-party data requirement.

Never buy links, never participate in link exchanges, never use private blog
networks. These carry real penalty risk and the downside is asymmetric.

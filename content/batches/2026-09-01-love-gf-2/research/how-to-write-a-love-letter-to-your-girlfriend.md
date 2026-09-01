# Research brief — "how to write a love letter to your girlfriend"

- **Slug:** `how-to-write-a-love-letter-to-your-girlfriend`
- **Batch:** `2026-09-01-love-gf-2` · **Category:** `modern-romance`
- **Volume estimate:** 1,000–3,000/mo (EST, India market)
- **Intent:** informational / how-to, with a strong latent transactional tail ("where do I put it")

---

## Phase 1 — SERP analysis

Ten results reviewed; three are weak (a Goodreads author-blog post, a Goodreads
book-notes page, and a scraped spam page on `cybercourse.isi.jhu.edu`, a Johns
Hopkins subdomain). The remaining SERP has real authority in it. **This is a
contested query, not a soft one.**

| Rank / page | Words | Structure | Where the answer lands | Data cited | Format elements | Tone | Actually optimising for |
|---|---|---|---|---|---|---|---|
| Art of Manliness — "How to Write a Love Letter" | ~2,600 | Historical framing → why men struggle → structure → full reproduced historical letters (Sullivan Ballou, 1861) | Buried after ~600 words of essay about men and emotional expression | None statistical; primary-source historical letters, undated in-body | Long blockquotes, no table, no FAQ, author byline, established brand | First person, essayistic, confident, long sentences | Brand/authority on "how to be a romantic man"; the incumbent on this query and by a wide margin |
| MomJunction — "70+ Romantic Love Letters For Girlfriend" | ~5,500 | 70+ finished letters by scenario, then "Practical Tips For Writing A Love Letter" (5 numbered tips), then an infographic, then FAQ | Never — the page is a library; tips appear after the letters | None | Infographic image, on-page FAQ (5 Q), reviewer byline, heavy internal linking | Second person, warm, generic | Copy-paste letter volume; long-tail scenario coverage |
| StyleCraze — "How To Write A Love Letter For Your Girlfriend Or Boyfriend" | ~3,000 | Format (6 numbered parts: Greetings / Reasons / Memories / …) → sample letters → "Mistakes To Avoid When Writing A Love Letter" | ~300 words in, as a 6-step format list | None | Numbered format list, sample letters, mistakes list, no table | Second person, encouraging, hedged | The "format" query plus samples; the closest structural rival to a method post |
| Parade — "75 Romantic Love Letters That Will Make Her Swoon" | ~4,000 (403 to fetcher; assessed from SERP + snippet) | 75 finished letters grouped by mood | Never — a library | None | Listicle, magazine styling | Editorial, breezy | Volume of copyable letters |
| Goodreads author blog — "Open letter to my girlfriend" | ~700 | A single personal letter | N/A | None | None | Personal | Nothing; it ranks on exact-phrase luck |

### Table stakes (all five cover; the post must not omit)
Structure of a letter · what to say about her · using a shared memory · avoiding
clichés · length guidance · reassurance that you do not need to be a good writer.

### The gap
Every ranking page gives *encouragement* — "speak from the heart", "be honest",
"don't worry about your writing skills" — and then hands over 70 or 75 finished
letters to copy. That is self-contradictory advice, and readers notice: a copied
letter is the exact opposite of speaking from your heart.

Nobody gives a **method** whose output is *her* letter rather than a template, and
**nobody tells the truth about how long it takes.** Every page implies a single
sitting.

### Stale / absent data
No page on the SERP cites a single statistic — not one number about letters, not
one piece of research about why specific language works. The "concrete beats
abstract" claim is asserted everywhere and tested nowhere on this SERP.

### Unanswered questions the pages raise and drop
How do you find a memory when nothing dramatic has happened? · What replaces a
cliché, concretely? · How long is too long? · When is a letter the wrong move? ·
Where does the finished letter physically go?

### Fan-out sub-queries → H2 mapping
| Sub-query | H2 that answers it |
|---|---|
| what makes a love letter good / sincere | What actually makes a love letter land |
| how to write a love letter step by step | The six steps, in order |
| what to write instead of "you are amazing" | The abstraction trap: why "you are amazing" fails |
| love letter example / sample for girlfriend | One letter, built by the method |
| handwritten vs digital love letter | Where the finished letter goes |
| love letter clichés to avoid | Clichés that are dead on arrival |
| when not to write a love letter | When a love letter is the wrong move |

---

## Phase 2 — Angle

> Wins by being the only post that gives a repeatable method for producing *her*
> letter instead of handing over copyable templates, and the only one with a real
> number for how long it takes — a median **6.9 hours** between first save and last
> edit across **975** real `/love-gf` pages, which contradicts the "just write from
> the heart in five minutes" premise of every page ranking today.

**Editorial position taken in the post:** supplying finished letters is what the
whole SERP does, and it is precisely why none of those pages actually helps.
Therefore the post includes exactly **one** worked example — built visibly by the
method — and no library. Supplying a library would undercut the argument.

---

## Phase 3 — Sources

**Reserved vein worked:** linguistic concreteness versus abstraction, and
specificity in interpersonal language. Searches run: `linguistic concreteness
abstraction interpersonal study` · `linguistic category model Semin Fiedler` ·
`concrete versus abstract language persuasion research` · `specificity perceived
sincerity language study` · `concrete language perceived sincerity trustworthiness
experiment psychology` · `concreteness romantic relationship messages perceived
effort` · `linguistic concreteness sincerity perception`. Discovery via OpenAlex,
Crossref and Europe PMC APIs.

| # | Source | Claim used | Published | Verification |
|---|---|---|---|---|
| 1 | Brysbaert, Warriner & Kuperman, *Behavior Research Methods* — [concreteness ratings](https://pubmed.ncbi.nlm.nih.gov/24142837/) | Concreteness ratings for 37,058 English words and 2,896 two-word expressions, from over 4,000 participants | 2013-10-19 | **Abstract only.** Verified against the publisher abstract via Europe PMC (`isOpenAccess: N`); `link.springer.com` PDF returned a bot wall |
| 2 | Snefjella & Kuperman, *Psychological Science* — [concreteness and psychological distance](https://pubmed.ncbi.nlm.nih.gov/26239108/) | More abstract language is used for more geographically, temporally and **socially** distant referents, across millions of social-media productions | 2015-08-03 | **Abstract only.** Verified against the Europe PMC abstract (`isOpenAccess: N`); `pmc.ncbi.nlm.nih.gov` served a captcha |
| 3 | Packard & Berger, *Journal of Consumer Research* — [how concrete language shapes customer satisfaction](https://academic.oup.com/jcr/article/47/5/787/5873524) | Five studies incl. text analysis of over 1,000 real consumer–employee interactions: concrete language leads listeners to infer the speaker is **listening** — attending to and understanding them | 2020-07-18 | Publisher abstract verified via Crossref; licence CC BY-NC (cited and linked, nothing reproduced); OUP landing page returned HTTP 403 to the fetcher |
| 4 | Henderson, Vallée-Tourangeau & Simons, *Collabra: Psychology* — [preregistered replication](https://doi.org/10.1525/collabra.192) | **Failed** to reproduce the linguistic truth effect: Cohen's dz = 0.08 (95% CI −0.03 to 0.18) and dz = 0.11 (95% CI −0.01 to 0.22); "inconsistent with the original study" | 2019-04-30 | Publisher abstract verified via Crossref; licence CC BY; `online.ucpress.edu` returned HTTP 403 to the fetcher |

- **Subject test:** all four are *about* concreteness/abstraction in language — the
  post's actual mechanism. Passes with 4, not 2.
- **Peer-reviewed + open access:** #4 (CC BY, fully open) and #3 (CC BY-NC, OA PDF).
- **Generic context statistics:** zero used. No PIB/TRAI/Census/MEA figure appears.
- **Wikipedia:** zero body links. Wikipedia/Wikidata appear only as verified
  `sameAs` targets in `structuredData`, which does not count against the 0–2 budget.
- **Swap test:** none of the four could sit unchanged in a sibling post (LDR
  surprise, LDR message, birthday letter, Tamil, Bengali, truth-or-dare, no-code
  comparison) — each is load-bearing for the abstract-vs-specific argument only.
- **Batch caps:** checked against all sibling files in
  `content/batches/2026-09-01-love-gf-2/blogs/`. No URL of mine appears in any
  sibling; max domain count in the batch is 2. None of the four URLs appears in
  `content/batches/2026-09-01-love-gf/`.
- **Competitors:** zero cited or linked. `artofmanliness.com`, `momjunction.com`,
  `stylecraze.com` and `parade.com` were read for Phase 1 only.

### Why the failed replication is in the post rather than hidden
It is the honest limit on the argument. Concreteness does **not** reliably make a
statement seem truer, so the post does not claim it does. Specificity works in a
love letter for the narrower and stronger reason that only the writer could have
produced those sentences — and, per Packard & Berger, because specificity reads as
evidence of attention. Every page on this SERP asserts the stronger claim without
testing it.

---

## Phase 5 — Internal links and targeting

| Link | Anchor | Placement |
|---|---|---|
| `https://subhsandesh.in/love-gf` | "romantic \"I love you\" page for a girlfriend" | Inside *Where the finished letter goes*, after the format comparison table has established why a page beats a chat thread |
| `https://subhsandesh.in/darling` | "dark, dramatic romantic page for a partner" | Same section, immediately after, as the heavier register |
| `https://subhsandesh.in/templates` | "full SubhSandesh template gallery" | Close of *When a love letter is the wrong move* |

Three internal links, none in the opening paragraph, all from `TEMPLATE_LINKS`.
Category `modern-romance` confirmed live in Strapi. Slug confirmed free
(`filters[slug][$eq]` returned `total: 0`).

**No pricing claim appears anywhere in the post.** The pricing block in
`content/facts.md` is empty, so the post says nothing about cost — not even "free".

---

## Phase 6 — Audit summary

50 checklist items: 49 passed, 1 failed, disjoint. The single failure is
"3–6 outbound links, all fetched and verified to contain the cited fact" — four
links are present and every cited fact was verified word-for-word against the
publisher-deposited abstract via the Crossref and Europe PMC APIs, but all four
landing pages refused the fetcher (two bot walls, two HTTP 403), so the fact is
verified from publisher metadata rather than from the linked page as rendered.
Closes when the landing pages can be fetched directly.

**Honest note carried into `honestAssessment`:** Art of Manliness genuinely owns
this query and nothing in this draft changes that. Also disclosed: StyleCraze
already runs a "mistakes to avoid" section naming "you complete me" and "to the
moon and back", so the cliché list is not novel — only the mechanical replacement
rule attached to it is.

Body: **1,800 words** by plain whitespace split, FAQs excluded. 12 FAQs live in
`article.faqs` only.

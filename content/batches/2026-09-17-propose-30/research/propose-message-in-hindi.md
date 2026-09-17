# Research brief — `propose message in hindi`

Batch `2026-09-17-propose-30` · slug `propose-message-in-hindi` · category `modern-romance`
Secondary keywords on the same page: `propose message for girl in hindi`, `love proposal lines in hindi`.
Volume band: 1,000–3,000 EST — no tool data; never printed on the page as a real volume.

## Phase 0 — first-party gate

`content/facts.md`, regenerated 2026-09-17. Six facts used, all labelled in the body prose as
platform-wide across all 16 page types or as sampled on `/love-gf`. No figure is attributed to
proposal pages, because no proposal-specific data exists (see structural limitations).

Two land inside the first 150 words: the 48.9% phone-open rate (25,167 of 51,504 views,
platform-wide) and the 6.4-hour median first-save-to-last-edit gap (n=1,138, sampled on `/love-gf`).
Both do real work for the angle — the first justifies the notification-preview section, the second
justifies the closing advice to stop rewriting and send.

## Phase 1 — SERP

**Method disclosure:** this session's WebSearch budget was exhausted before Phase 1. The result set
was captured with a direct DuckDuckGo HTML query for `propose message in hindi` and the pages
fetched individually. Treat the ordering as indicative of the query's shape, not as a verified
Google top-5.

| Page | Words | Devanagari chars | Headings | Transliteration | FAQ schema | Sources |
|---|---|---|---|---|---|---|
| shayariloop.com/propose-shayari-in-hindi | ~508 (server-rendered shell) | 0 | none | no | no | 0 |
| saysorry.in/propose-day-messages-in-hindi | ~467 | 490 | girlfriend / boyfriend / crush buckets | no | yes | 6 (own pages) |
| a1shayaris.com/propose-shayari | ~1,493 | 2,608 | "Propose Shayari New 2026" | no | no | 0 |
| hindi.astroyogi.com/blog/propose-day-wishes-in-hindi | ~1,760 | 5,874 | wishes / quotes / shayari | no | no | 0 |
| thebridalbox.com (hindi propose lines) | — | — | — | — | — | 404 on fetch |

Shape of the SERP: fragment inventories, advertised by count — "100+", "150+", "360+", "700+".
Almost all Devanagari-only. **Not one of them carries a Roman transliteration, an English gloss, a
word count, or a single third-party citation.** `saysorry.in` sells proposal cards and is treated as
a competitor: read in Phase 1, never cited, linked or mirrored.

## Phase 2 — gap

**Table stakes:** lines for a girlfriend, lines for a crush, lines for a first confession, a
Propose Day framing, Devanagari text.

**The gap.** Every ranking page answers "what are some lines?". None answers "what do I type into
this chat box, right now, to this one person?" Specifically, none of them deals with:

- **Script choice.** Devanagari or Roman — the single decision every one of these readers makes
  before typing a character, and no incumbent mentions it exists.
- **Length.** No page states a target. Ours says 25–40 words, one message.
- **The notification preview.** Roughly 40–50 characters of first line is all she sees before she
  decides to open it.
- **One message or three.** Three messages are three notifications, and the preview only ever shows
  the first.
- **The ending.** A declaration with no question leaves her inventing a reply format.
- **Register.** तुम / आप / तू, and the fact that film-dialogue vocabulary (वजूद, इबादत, मुक़द्दर, हसीन)
  reads as quotation rather than as the sender.

**Sibling boundaries.** `propose day quotes in hindi` owns quotable lines, `propose day wishes in
hindi` owns addressed greetings, `propose girlfriend shayari` owns the poetic form. This post owns
the practical one: the message that gets sent.

**Angle:** wins by being the only post that treats a Hindi proposal as one message to one named
person today — script, length, first line, ending — with every line in Devanagari, Roman and English.

## Phase 3 — sources

Research lane: **script choice and romanisation in South Asian digital writing.** There is a real
computational-linguistics literature here, and it says something specific and true that no lifestyle
page on this SERP can say. Five sources, all subject-test passes, four peer-reviewed and
open-access. Zero generic context statistics. `capcheck.mjs` re-run before finalising:
`aclanthology.org` and `doaj.org` are at neither the URL nor the domain cap, and no URL here appears
in the 54 banned wave-1 citations.

1. **Bali, Sharma, Choudhury, Vyas (Oct 2014)** — <https://aclanthology.org/W14-3914/>. Full PDF
   read. Table 2(a)/(b): Amitabh Bachchan's Facebook page, 3,168 posts in Roman script to 73 in
   Devanagari; BBC Hindi News, 5,225 Devanagari words to 4,265 Roman. Data collected 2013 — dated in
   the body. The BBC contrast is the load-bearing detail: institutional writing stays Devanagari,
   personal writing goes Roman.
2. **Rudra, Rijhwani, Begum, Bali, Choudhury, Ganguly (Nov 2016, EMNLP)** —
   <https://aclanthology.org/D16-1121/>. Full PDF read. 430,000 Hindi-English tweets. States
   directly that on social media Hindi is seldom written in Devanagari and appears instead as loose
   Roman transliteration. Its headline finding — native language preferred for negative opinion and
   swearing — is not claimed in the post, because it is about negative affect and would be an
   overreach here.
3. **Madhani et al., Aksharantar (Dec 2023, Findings of EMNLP)** —
   <https://aclanthology.org/2023.findings-emnlp.4/>. Full PDF read. मैं alone romanises as *main*,
   *mai*, *mein*, *mei*, overlapping with में. 26M pairs, 21 languages. This is the concrete
   justification for "Roman is safe in a sentence, risky in a single word".
4. **Benton, Gutkin, Kirov, Roark (Nov 2025, EMNLP)** —
   <https://aclanthology.org/2025.emnlp-main.117/>. Full PDF read. Language ID near 99% on
   native-script Indian languages, just over 80% on romanised text, because informal romanisation
   has no conventional spelling.
5. **Kirov, Johny, Katanova, Gutkin, Roark (Jul 2024, *Computational Linguistics*)** —
   <https://doaj.org/article/96736b6a07b7433bad2c256c600f4856>. **Abstract only.**
   `direct.mit.edu` and the DOAJ landing page both refused the fetch; the abstract was retrieved via
   the DOAJ and OpenAlex API records. The post says so in the sources list.

Search terms tried inside the lane: `romanized Hindi script choice social media`,
`Hinglish code-mixing computational study`, `transliteration Devanagari Roman script choice South
Asia`, `script choice identity digital communication romanization`, `romanized Hindi spelling
variation normalization user generated text`, `keyboard input method Indic language typing adoption
users`, `Roman script Urdu Hindi attitudes users survey`, `code-mixing emotion expression bilingual
social media Hindi English preference`.

Lanes deliberately avoided (other agents own them): first-disclosure anxiety, marriage readiness,
novelty, escalation, WhatsApp mechanics, CMC channel, post-conflict, bilingual emotion,
perceived effort / quotation, greeting obligation, ghazal poetics.

## The Hindi content

Five complete messages shipped, each in Devanagari with Roman transliteration and an English gloss:
plain / memory-anchored / direct question / आप register / Hinglish-native.

**Six drafted lines were cut** rather than shipped:

1. `क्या तुम मेरी होगी?` — grammatical, but pure film-dialogue register; fails the everyday-speech
   test this post itself sets.
2. `क्या तुम मुझे अपना बनाओगी?` — same problem.
3. `तुम मेरी ज़िंदगी की सबसे हसीन ग़लती हो` — a line that circulates widely as shayari; could not be
   verified as not lifted from a competitor page, and the brief forbids reproduction.
4. `तुम्हारे बिना मेरा वजूद अधूरा है` — high-Urdu register (वजूद) in a WhatsApp message reads as a
   film poster.
5. `मैं तुम्हारी कितनी आदत हो चुका हूँ` — possession reversed; the speaker cannot be the addressee's
   habit in this construction. Rewritten as `तुम मेरी कितनी आदत बन चुकी हो` rather than shipped as
   drafted.
6. A `प्रिये`-opener variant — Sanskritised vocative, wrong register for a chat box entirely.

A sixth complete message (the one that risks a friendship) was drafted and cut for word budget, not
for correctness; it may be worth a separate keyword.

**Verification limit, stated plainly:** these lines were checked by the drafting model against
ordinary spoken usage, not by a native-speaker reviewer or a corpus lookup. That is recorded in
`batchMeta.structuralLimitations`.

## Phase 5 — links and targeting

- `categorySlug` `modern-romance` — verified live against the Strapi categories endpoint.
- `templateUrls` `["/proposal", "/love-gf"]`, both in `TEMPLATE_LINKS`.
- Body internal links (3): `/proposal` (mandatory, placed after the comparison table establishes
  when extra length is worth it), `/love-gf` (the genuine alternative — this is "will you be my
  girlfriend", not marriage), `/apology-dashboard` (asking again after a fight or a no).
- The objection H2 says outright that for a short message to someone you already know, a plain chat
  message beats any page, including ours.
- Slug checked free: the Strapi articles endpoint returns `total: 0` for `propose-message-in-hindi`.

## Phase 6 — audit

50 checklist items. 49 passed, 1 failed, disjoint.

**Failed:** *Slug short, hyphenated, lowercase, no stop words* — the slug keeps the stop word "in"
because the assigned keyword is the exact phrase. Closing it would break the H1/metaTitle/slug match
item 13 requires, so it is a keyword decision, not a file fix.

Structural limitations (not failures, recorded in `batchMeta.structuralLimitations`): no
proposal-specific data exists; the pricing block is empty so no price or tier claim is made; the
SERP was captured without WebSearch; one source is abstract-only; the Hindi was not native-reviewed.

**Honest assessment.** The page is the only one on this query that answers what to type rather than
listing fragments, and the script-choice argument is backed by four papers no incumbent cites.
MensXP, Zee, Webdunia and the shayari networks refresh every February and outrank this domain
heavily — position 6–10 is the realistic target, not 3.

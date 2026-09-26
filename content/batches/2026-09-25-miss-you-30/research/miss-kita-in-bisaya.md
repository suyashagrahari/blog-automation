# Research brief — `miss kita in bisaya`

Batch: `2026-09-25-miss-you-30` · Slug: `miss-kita-in-bisaya` · Written 2026-09-25

---

## Phase 1 — SERP

**The SERP was NOT re-run for this post.** It was inherited verbatim from the
keyword run for this batch, measured **US-served on 2026-09-25**. No India-served
SERP exists for this keyword, and nothing below may be read as a claim about what
ranks in India.

Results as measured (US-served, 2026-09-25):

| # | Domain | What it is | Answers the query? |
|---|---|---|---|
| 1 | mymemory.translated.net | Translation-memory dump, machine pairs, no editorial | No — unverified MT strings |
| 2 | tiktok.com | Short video | No — no grammar, no source |
| 3 | tiktok.com | Short video | No |
| 4 | forum.wordreference.com | Forum thread, unmoderated | Partially — anecdotal |
| 5 | en.wikipedia.org — Waray language | Off-intent | No |
| 6 | en.wikipedia.org — Bisayan languages | Off-intent (language family) | No |
| 7 | en.wikipedia.org — Manang Biday | Off-intent (an Ilocano folk song) | No |
| 8 | wordhippo.com | Translation aggregator | No — no grammar, no citation |
| 9 | medium.com | Personal blog | No |

Weakness count **8/10**. Three of the ten results are Wikipedia articles about
something else entirely, which is what a SERP looks like when no publisher has
built a real page for the query. There is no featured snippet worth beating and no
page on the SERP that cites a dictionary.

Because the SERP was inherited rather than re-run, **no claim in the post asserts
what any competitor covers or omits** beyond what is visible in the result list
above. The one structural claim made — that none of these results explains the
grammar — is supported by the page types themselves (a translation-memory dump, two
videos, a forum thread and three off-topic encyclopedia entries).

## Phase 1b — the closest live SubhSandesh pages

Fetched `https://subhsandesh.in/blog/i-miss-you-in-different-languages` on
2026-09-25. It carries a single Philippine line, inside its "East & Southeast Asia"
list:

> Tagalog (Filipino): Miss na kita / Nami-miss kita

There is **no Bisaya or Cebuano line anywhere on the hub**, no grammar, and no
dictionary citation for any of its 50+ translations. `i-miss-you-in-tamil-words` is
the sibling depth page for a different language on the language axis.

Per the BRIEF, language is one of the three axes that are never duplicates. This
post is a language spoke, links up to the hub, and does not restate its table.

## Phase 2 — Gap and angle

**Table stakes:** give the phrase, give a usable line back, give pronunciation-free
plain spelling, say who to send it to.

**The gap — and it is the whole post:** every result treats `miss kita` as a Bisaya
string to be translated. It is not Bisaya. It is **Tagalog** grammar, and the person
typing it into Google is usually asking for the Bisaya equivalent without knowing
that is what they are asking.

**Fan-out sub-queries:** is miss kita Tagalog or Bisaya · what is kita in Cebuano ·
how do you say I miss you in Bisaya · what does gimingaw mean · does Bisaya have a
word for missing someone · gi-miss tika meaning · Bisaya vs Cebuano vs Visayan.

**Angle:** wins by being the only page that shows `miss kita` is Tagalog grammar
rather than Bisaya, gives the Cebuano lines from fetched dictionary entries and one
attested corpus sentence, and sets both against 214 first-party "I miss you" pages.

## Phase 3 — THE LEAD, VERIFIED AND REFUTED

The task prompt carried this lead:

> "There is no native Tagalog, Bisaya or Ilocano verb for 'to miss' — the English
> loanword is used across all of them, which is why 'miss kita' is the phrase people
> actually type."

**For Cebuano/Bisaya this is wrong.** Checked against fetched lexicography on
2026-09-25:

- `en.wiktionary.org/wiki/hidlaw` — **Cebuano, part of speech: verb.** Senses: "to
  yearn; to long, have a strong desire (for something)"; "to long for something in
  the past with melancholy, nostalgically"; "to have strong feelings of love,
  sympathy, affection, etc. (toward someone)". Derived: `kahidlaw`. That is a native
  Cebuano **verb** covering exactly the semantic field the lead says is empty.
- `en.wiktionary.org/wiki/mingaw` — Cebuano adjective: "deserted", "lonely",
  "lonesome". Derived terms: `gimingaw`, `makamingaw`, `mingawon`.
- `en.wiktionary.org/wiki/gimingaw` — Cebuano adjective, from `gi-` + `mingaw`:
  "homesick", "lonely".
- `tatoeba.org` — attested Cebuano sentence: *"Samot pa kong gimingaw nimo ron."*
  glossed "I'm missing you more than ever." The feeling is expressed with the native
  root, not the loanword, in an actual corpus sentence.

So the loanword `miss` **coexists** with native Cebuano vocabulary; it does not fill
a lexical gap. The post says this in prose, names the entry, and does not soften it.

**The second framing claim in the prompt is also wrong.** The prompt stated that
`kita` in `miss kita` is "Cebuano/Bisaya grammar … the first-person-singular-acting-
on-second-person portmanteau pronoun." Checked:

- `en.wiktionary.org/wiki/kita#Cebuano` lists **three** senses: inclusive "we / us";
  the hortative "let us / let's" (*Adto ta* — "Let's go"); and a colloquial,
  self-deprecating first-person singular "I / me". **There is no I-acting-on-you
  sense in the Cebuano entry.**
- `en.wiktionary.org/wiki/kita#Tagalog` **is** that pronoun: "Replaces *ko ka* or
  *ko ikaw* (I or my and you)", with `mahal kita` and `gusto kita` as derived terms,
  and it sits in the Tagalog pronoun table as the first-person dual direct form.

`miss kita` therefore parses as **Tagalog**, and the post is built on that
correction rather than on the prompt's framing.

**What I could not verify, and cut:**

- `namingaw` — English Wiktionary returned **HTTP 404** on 2026-09-25. No entry, so
  the line was cut rather than printed from memory.
- Wolff's *A Dictionary of Cebuano Visayan* — no open, fetchable full text was
  reachable. `dsal.uchicago.edu` hosts South Asian dictionaries and carries no
  Philippine lexicon. Every Cebuano gloss in the post therefore rests on Wiktionary
  entries plus one Tatoeba sentence, and the post says so.
- **Ilocano and Tagalog were not tested.** The lead is refuted for Cebuano only.
  Nothing in the post claims anything about whether Tagalog or Ilocano has a native
  verb for "to miss".

## Phase 3 — Sources selected

| # | Source | Why it passes | Cap position (capcheck, 2026-09-25) |
|---|---|---|---|
| 1 | `en.wiktionary.org/wiki/kita` | The grammar the whole post turns on | `en.wiktionary.org` is in `capExemptDomains` |
| 2 | `en.wiktionary.org/wiki/hidlaw` | The native Cebuano verb that refutes the lead | cap-exempt |
| 3 | `en.wiktionary.org/wiki/gimingaw` | The form people actually use | cap-exempt |
| 4 | `tatoeba.org/en/sentences/search?query=gimingaw&from=ceb` | Attested usage, not a dictionary gloss | `tatoeba.org` is in `capExemptDomains` |
| 5 | IIARI, *Overseeing From Overseas* (2021) | **Subject test: pass.** Peer-reviewed, open access, CC BY 4.0. OFW families and how they keep contact | `iiari.org` — 0 posts before this one |
| 6 | RMRJ, *The Yapian Classification …* (2022) | **Subject test: pass.** Peer-reviewed, open access. Cebuano-Visayan vocabulary and the English grammar frame imposed on it | `rmrj.usjr.edu.ph` — 0 posts before this one |

Peer-reviewed and open-access: sources 5 and 6, both full text read. Generic context
statistics: **zero**. Wikipedia in the body: **zero** (`Cebuano_language` appears
only as a `sameAs` in `structuredData`, which the reference explicitly excludes from
the body budget).

Searches run that found nothing usable: DOAJ for `overseas Filipino workers
transnational family communication` (0), `Philippine languages English borrowing
code-switching` (0), `Bisaya Cebuano emotion lexicon` (0). `findpapers.mjs` returned
strong Europe PMC candidates, but `pmc.ncbi.nlm.nih.gov` is **at the 3-post cap**
and the BRIEF counts `europepmc.org` as the same domain, so none was usable. One
promising DOAJ hit, REiLA's *Linguistic Borrowing of English Words … in Cebuano
Visayan* (2022), returned **HTTP 403** and was dropped rather than cited unread.

## Phase 5 — Targeting

- `categorySlug`: `miss-you-across-miles` (verified live in the Strapi categories API)
- `templateUrls`: `/missyou-gf` (mandatory for this batch), `/dedication`
- Alternative named with its reason: **`/dedication`** — the Bisaya line is easier to
  get right spoken than spelled, and only 13.6% of miss-you senders record a voice
  note today, so the reader who is nervous about pronunciation is better served by a
  page built around their own recorded voice than by one built around typed text.
- Third body link: `/templates`, in the section naming where the page is the wrong
  choice.
- Slug checked against Strapi on 2026-09-25: `miss-kita-in-bisaya` returns
  `total: 0`. Free.

## Phase 6 — What this post cannot do

It cannot show that the Bisaya lines are what a specific region says — Cebuano,
Boholano, Davaoeño and Surigaonon differ, and nothing fetched measures that. It
cannot speak for Waray or Hiligaynon, which are also called "Bisaya" by their
speakers. And the 214-page segment is two months of data from a template that went
live 2026-07-28, so it carries no seasonal signal at all.

# Research brief — `birthday-wishes-reply-in-hindi`

Batch `2026-08-27-birthday-30`, wave 2, rank 22. Lane **D** (gratitude and acknowledgement
norms). Category `milestone-birthdays`. Written 2026-08-27.

---

## Phase 0 — data gate

Satisfied by `BRIEF.md`'s read-only probe of the `birthdaygfpages` collection
(n = 198 pages, 2026-08-26), plus `content/facts.md`. Facts carried into the post:

| Fact | Where used |
|---|---|
| Median personal message: 96 characters (n=197); longest 1,437 | answer paragraph, table column, H3 lengths |
| 106 of 197 messages are under 100 characters | answer paragraph |
| Median first-save-to-last-edit gap 0.9 hours; 50.5% (100/198) finished inside the hour | "why most replies are English" H2 |
| 198 birthday pages, 6.5% of 3,024, #5 page type | definition H2 |
| Of the 195 pages with a quiz, only 28 had it played (14.4%) | objection H2 |
| Birthday views 48.6% mobile (1,081/1,121/22) vs 51.0% site-wide | objection H2 |
| 11.2 views per birthday page vs 12.2 site-wide | objection H2 |
| 37.9% password-protect a birthday page vs 43.9% site-wide | elder H2 |

Two first-party numbers sit inside the first 150 words (96-character median, and
106 of 197 under 100 characters).

---

## Phase 1 — SERP (supplied, India-localised `gl=in`, no WebSearch call made)

Four results total. Two are not articles at all.

| # | Result | What it is | Word count / structure | Where the answer sits | Data cited | Format | Tone | Optimising for |
|---|---|---|---|---|---|---|---|---|
| 1 | `facebook.com` — "आभार एवं धन्यवाद 🙏🏻 मेरे जन्मदिन के अवसर पर आप सभी के …" | A single user post, not a page | ~40 words, no headings | It *is* an example reply, not an answer | none | plain post, no schema, no byline structure | first person, devotional register, `आभार एवं धन्यवाद` doubled | nothing — it ranks on exact-phrase match |
| 2 | `livehindustan.com` — "बर्थडे पर मिली हैं खूब शुभकामनाएं, तो थैंक यू मैसेज …" | News-vertical lifestyle listicle | ~500–700 words, H2-light, message blocks | after a short news-style intro | none | list of message strings, no table, no FAQ | third person, newsroom voice, headline in mixed register (`थैंक यू` in Devanagari) | pageviews on a trending lifestyle query |
| 3 | `pinterest.com` — "Thanku Msgs for Birthday Wishes in Hindi" | Image board | no prose | no answer | none | pinned images | none | image discovery |
| 4 | `hindiwishez.com` — "250+ जन्मदिन शुभकामनाओं का जवाब हिंदी में" | Purpose-built wishes farm | very long, count-led ("250+") | buried under the count | none | long ungrouped message list, no table | second person, promotional | volume of message strings |

**Not fetched, and deliberately.** Every one of these four is either a competitor
(`hindiwishez.com` is a wishes content farm; `livehindustan.com` competes for the same
long-tail query) or a platform page with no extractable content. `references/competitors.md`
forbids citing, linking or paraphrasing them, and the batch brief extends that to every
domain in this SERP block. The structural read above is from the SERP titles and result
types supplied in `ASSIGNMENTS-WAVE2.json`; no page body was reproduced.

---

## Phase 2 — gap analysis

**Table stakes.** Actual reply strings in Devanagari; a Roman spelling; something for a
group reply; something for a late reply; something for elders.

**The gap — and it is the whole post.** Not one of the four results makes a *register*
decision. `हिंदीविशेज़` publishes 250+ strings with no guidance on which one fits whom.
The `livehindustan.com` headline itself writes `थैंक यू` in Devanagari while the Facebook
post at #1 opens `आभार एवं धन्यवाद` — two results, two completely different registers for
the same act, and neither says why. Nobody measures how common those words actually are,
and nobody prices a reply against how long people really write.

**Stale data.** None of the four cites any data at all, so there is nothing to supersede —
the win here is being first to cite anything.

**Unanswered questions.** Is `धन्यवाद` rude to a friend? Is `आभार` too much for a
colleague? Is replying "thanks" in English disrespectful to an older relative? Does
gender agreement change the reply?

**Fan-out sub-queries → H2 map.**

| Sub-query | H2 |
|---|---|
| what does dhanyavaad mean / dhanyavaad vs aabhaar | What धन्यवाद and आभार actually signal |
| is it okay to reply in English | Why most Hindi speakers answer in English |
| hindi reply messages for birthday wishes | Eight replies to birthday wishes in Hindi, by register |
| dhanyavaad vs shukriya vs thank you | The four thank-you words, compared |
| how to thank elders in hindi | The elder problem |
| when does the wording not matter | Where the register choice stops mattering |

**Angle.** Wins by being the only post that decides *which* Hindi thank-you word to use —
measuring धन्यवाद, शुक्रिया, आभार and थैंक्यू against each other in a 19.2-million-token
Hindi news corpus — and prices every reply against SubhSandesh's measured 96-character
median birthday message across 197 pages.

**Cannibalisation.** Checked against the two in-batch siblings and two live posts:

- `thank-you-for-birthday-wishes` (same batch) owns reply etiquette in English **and the
  individual-versus-group threshold of about 70 wishes**. This post does not re-derive,
  restate or link that threshold. It never discusses how many wishes justify a group reply.
- `birthday-wishes-in-hindi` (same batch) owns romanisation, Devanagari input and the
  आप/तुम pronoun choice. This post touches pronouns only where the *thank-you word* forces
  a choice, and cites none of that post's sources.
- Live `raksha-bandhan-reply-to-brother-wishes` — festival-specific, single relationship.
- Live `birthday-thank-you-card-template` — printable cards. This post stays on messages.

---

## Phase 3 — sources

Lane D, excluding wave 1's lane-D domains (`jbe-platform.com`, `jle.hse.ru`,
`jstage.jst.go.jp`, `onlinelibrary.wiley.com/doi/10.1111/weng.12517`,
`link.springer.com`) — all five checked against `thank-you-for-birthday-wishes`'s
`batchMeta.sources` before searching. In-batch domain counts re-measured with the
BRIEF-WAVE2 snippet: all four domains below are at **0 of 3**, and no URL is reused.

WebSearch was not called (budget exhausted 200/200). Discovery ran through the OpenAlex
and Semantic Scholar APIs from `ctx_execute`; every source was fetched and read as **full
text**, not abstract.

### 1. Dąbrowska 2012, "Happy b'day bhaiya". Characteristics of Facebook Indian English

`ruj.uj.edu.pl` · *Studia Linguistica Universitatis Iagellonicae Cracoviensis* 129 (2012),
DOI 10.4467/20834624SL.12.004.0593 · peer-reviewed, open access · **full text read**
(15,003 words).

Verified from the paper itself:
- 210 Facebook posts collected **April 2011**; 102 from two Hindi film stars' fan pages,
  the remaining 108 from the walls of 20 Hindi-speaking friends aged 20–50.
- **57 honorific and address-form tokens**; `sir` recorded **12 times**; the doubled
  `sir ji` combines an English formal term with the Hindi deference marker `ji`.
- `बधाई`-adjacent politeness: `best of luck` recorded **9 times** against `good luck`
  once; `awesome` in 12 posts.
- The thanking examples the paper records are **all English**: "thanks for the wishes! u
  r back in bbay too?" (ex. 52), "Thank u very muc Hi Sir, many many happy returns of the
  day." (ex. 94), "Thank u so much aunty.. :)" (ex. 103). The Hindi element attached to
  the thanks is the **address term** (`aunty`, `sir`, `bhaiya`), not the gratitude word.
- Grepped the full text for `dhanyav`, `shukriya`, `धन्यवाद`: **no occurrence anywhere**.

Why it survives the swap test: it is specifically about how Hindi speakers word birthday
wishes and their replies, with address-form counts. A sibling post about wish *length* or
*script* could not use the 57-token address-form finding as its spine.

### 2. Dąbrowska 2013, Functions of code-switching in Polish and Hindi Facebook users' posts

`ruj.uj.edu.pl` · *Studia Linguistica UIC* 130 (2013): 63–84, DOI
10.4467/20834624SL.13.004.1135 · peer-reviewed, open access · **full text read**
(11,700 words).

Verified:
- 300 posts (150 Hindi-speaker, 150 Polish-speaker) from the profiles of 10 speakers of
  each language, collected **April 2012**; core group 6 Hindi-speaking men and 4 women,
  ages 25–55.
- **95 of the 150 Hindi-speakers' posts (63%) were written entirely in English**, against
  36 of 150 (24%) for the Polish speakers.
- 44 of 150 (29%) Hindi posts carried code-switching, against 20 of 150 (13%) Polish.
- Under "showing respect" and "wishes", the English clause carries the message and the
  **Hindi word is the address term**: `wish u same bhaiya`, `Happy Holi to u too bhai. :)`,
  `happy journey sirjii hav a great time`.
- The English greeting `hi` is described as neutral and free of the religious connotation
  carried by `namaste`/`namaskar` or `salaam`.

Same domain as source 1 (one post, so the domain-in-3-posts cap is untouched), different
paper, different dataset, different year.

### 3. Floyd, Rossi, Baranova, Blythe, Dingemanse, Kendrick, Zinken & Enfield 2018, Universals and cultural diversity in the expression of gratitude

`eprints.whiterose.ac.uk` (published version of *Royal Society Open Science* 5: 180391,
published **2018-05-01**) · peer-reviewed, CC BY, open access · **full text read** (5,714
words). Fetched from the White Rose deposit because the publisher's own PDF is behind
Cloudflare; the deposit is marked "Version: Published Version".

Verified from the Results section, not the abstract:
- 1,057 completed request-response sequences across **eight languages** on five continents,
  from over ninety hours of video-recorded informal interaction.
- Of the **928 successful requests**, an overt expression of gratitude followed just
  **5.5% of the time (n = 51/928)**.
- Per language: Cha'palaa 0% (0/97), Siwu 0.8% (1/125), Lao 2% (2/99), Polish 2.2% (3/139),
  Russian 3.1% (4/129), Murrinhpatha 4.5% (3/67), Italian 13.5% (20/148), English 14.5%
  (18/124).
- English and Italian differ significantly from the Siwu baseline (English OR 21.06,
  p < 0.01); Lao, Polish, Russian and Murrinhpatha do not.

**Honest limitation, stated in the post:** no South Asian language is in the sample, so
this bounds how strongly an explicit thank-you can be treated as the default anywhere,
Hindi included — it does not measure Hindi.

### 4. Leipzig Corpora Collection, Hindi news corpus `hin_news_2011_1M`

`wortschatz-leipzig.de` (queried through `api.wortschatz-leipzig.de`) · corpus resource,
Universität Leipzig · corpus material dated **2011**, no article publication date, so
`publishedDate` is omitted from `citation` per `structured-data.md`.

Corpus metadata read from `/ws/corpora/availableCorpora`: 1,000,000 sentences, **19,177,172
tokens**, 230,831 types. Absolute frequencies read one word at a time from
`/ws/words/hin_news_2011_1M/word/<word>`:

| Word | Frequency |
|---|---|
| मुबारक | 1,922 |
| बधाई | 739 |
| जन्मदिन | 698 |
| धन्यवाद | 394 |
| शुक्रिया | 246 |
| शुभकामनाएं | 214 |
| आभार | 198 |
| आभारी | 79 |
| थैंक्यू | 52 |
| कृतज्ञता | 16 |
| कृतज्ञ | 15 |
| थैंक्स | 6 |

This is the post's central novel measurement: `धन्यवाद` is roughly **twice** as frequent as
`आभार` (394 vs 198), `शुक्रिया` sits between them at 246, and the Devanagari
transliterations of English thanks barely register (52 and 6).

**Stated limitation, in the post:** a 2011 news corpus is formal written prose. It measures
which word an editor picks, not which word a cousin types on WhatsApp — which is exactly
why `थैंक्यू` at 52 is a floor, not an estimate.

### 5. Priya, Singh, Firdaus, Agarwal & Ekbal 2024, On the Way to Gentle AI Counselor: Politeness Cause Elicitation and Intensity Tagging in Code-mixed Hinglish Conversations for Social Good

`aclanthology.org` · Findings of NAACL 2024 · peer-reviewed, open access · **full text
read** (13,021 words).

Verified: the translators building the Hinglish dataset — all native Hindi speakers with
English-medium education — were instructed to "use Roman script irrespective of whether
the word being used belongs to English or Hindi" and to "not attempt to convert the entire
utterance into Hindi, instead switch to English whenever they feel it is appropriate, just
as they would in their daily conversations." The resulting corpus scores a Code-Mixing
Index of **0.82**.

**Stated limitation, in the post:** the dialogues were generated by prompting BLOOMZ and
then human-post-edited, so this evidences the annotation protocol's model of everyday
Hindi–English switching, not spontaneously recorded speech.

### Sources considered and rejected

- `royalsocietypublishing.org` direct PDF, `tandfonline.com` (Cogent Arts & Humanities,
  Pakistani Facebook congratulation patterns) and `shs-conferences.org` — all three
  returned Cloudflare / DataDome challenges to `ctx_fetch_and_index` and could not be
  read. Nothing unread was cited.
- `journals.phil.muni.cz` (Bhatt on Hindi honorifics), `r12a.github.io`, `research.google`,
  `github.com/google-research-datasets/dakshina`, `google.com/inputtools` — all already
  cited by the sibling `birthday-wishes-in-hindi`, and all about script or pronouns rather
  than gratitude register.
- Leech's Politeness Maxims in Hindi and Persian (Zenodo 7457674) — read the record; it
  analyses the **request** act, not gratitude. Off-subject.
- No government or generic-context statistic was used. The count is **zero**, not one.

---

## Phase 4–5 — build notes

- Body measured with the `wordCount()` snippet in `BRIEF-WAVE2.md`, not a plain split.
- Internal links: `https://subhsandesh.in/birthday-parents`,
  `https://subhsandesh.in/birthday-friend`, `https://subhsandesh.in/templates` — all three
  present in `TEMPLATE_LINKS` in `app/lib/prompt.ts`.
- Slug checked live 2026-08-27: `filters[slug][$eq]=birthday-wishes-reply-in-hindi` returns
  `total: 0`. Free.
- `milestone-birthdays` confirmed present in the live Strapi category list (10 categories).
- `structuredData`: one `@id`-matched `BlogPosting` enrichment block on
  `…/birthday-wishes-reply-in-hindi#post` carrying `about`, `mentions` and five
  `citation` entries mirroring `batchMeta.sources` one-to-one, plus one `ItemList` of the
  eight H3s in body order. Every `sameAs` verified through the Wikipedia API with its
  Wikidata QID paired: Hindi Q1568, Devanagari Q38592, Register (sociolinguistics) Q286576,
  Code-switching Q255615, Gratitude Q2728730.

## Phase 6 — the blocking failure

Every Devanagari string in the post is composed by an agent and **unverified**. Per
`BRIEF-WAVE2.md` correction 3 it is recorded in `auditReport.failed` against
"The post contains at least one claim none of the top 5 pages make", as **structural**:
the differentiating claim in this post *is* the register guidance attached to those
strings, so if the strings are unverified the claim is not established. No citation can
close it — only a native reader's sign-off on the eight replies, the register labels, the
honorific agreement and the masculine/feminine verb forms in reply 8.

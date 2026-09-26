# Research brief — `i miss you in japanese`

Batch `2026-09-25-miss-you-30` · slug `i-miss-you-in-japanese` · run 2026-09-25
Romanisation throughout: **Hepburn**.

---

## Phase 1 — SERP

**One WebSearch run**, exact English keyword `i miss you in japanese`, US-served,
2026-09-25. Nine results returned. Probed for structure and intent only — per
`references/competitors.md` none is cited, linked or paraphrased.

| # | Result | Type | What it is optimising for |
|---|---|---|---|
| 1 | fluentu.com | language-learning blog | "ways to say X in different contexts" listicle; course funnel |
| 2 | italki.com | forum thread ("How to say I missed you?") | UGC Q&A, tutor marketplace funnel |
| 3 | en.wikipedia.org — *I Miss You (Toki o Koete)* | entity page | a song, not the query |
| 4 | en.wikipedia.org — *I Miss You (Boyfriend song)* | entity page | a song, not the query |
| 5 | nihongoshark.com | language-learning blog | phrase list, JLPT/course funnel |
| 6 | facebook.com group post | UGC | none |
| 7 | facebook.com group post | UGC | none |
| 8 | en.wikipedia.org — *Miss You (Yuna Ito song)* | entity page | a song, not the query |
| 9 | linguajunkie.com | language-learning blog | "12 ways" listicle |

**No AI Overview was observed** because the search tool does not expose one. No
claim is made about it either way.

### SERP findings that change the post

1. **Three of nine results are Wikipedia pages about songs titled "I Miss You".**
   Independently of the batch's Japan-geo autocomplete harvest (which I did not
   run and therefore do not assert as my own measurement), the English SERP is
   also partly music noise. Combined with the fact that four of the remaining six
   are language-learning funnels and forum threads, the reader behind this query
   is overwhelmingly a **learner or a drama/anime viewer outside Japan**, not a
   Japanese speaker. That is who the post is written for.
2. **PROMPT CLAIM CORRECTED.** The task prompt predicted "tofugu /
   japanesepod101 / wanikani / Quora / Reddit". **None** of those five appeared in
   the nine results. The actual content pages were fluentu.com, nihongoshark.com,
   linguajunkie.com and an italki forum thread. The prediction was wrong and is
   recorded as such rather than repeated.
3. The pages that do rank hand over a phrase list. Not one of them, on the
   evidence of the search-result summaries, states **what each candidate takes as
   its grammatical subject** or **which register the written form belongs to**.
   That is the gap.

---

## Phase 2 — Gap analysis

**Table stakes** (must be covered or the post looks incomplete): 会いたい as the
usual rendering; 寂しい as the loneliness option; a note that there is no direct
translation; romanisation; some politeness mention; "I missed you" past form.

**The gap.** A semantic map — for each candidate, *what sits in the subject slot*
and *what register the form is in* — checked against a dictionary and an attested
corpus, with the number of corpus hits printed. Nobody on this SERP prints a
sentence id.

**Fan-out sub-queries** → H2s / H3s:
- "does Japanese have a word for miss?" → H2 2
- "what does aitai literally mean" → H3 1
- "sabishii vs koishii" → H3 2, H3 3
- "is natsukashii I miss you" → H3 4
- "aitai vs aitai desu" / "how to say I miss you politely in Japanese" → H2 5
- "how to say I missed you in Japanese" → H2 5
- "can I say aitai to my boss / boyfriend's mum" → H2 5

**Angle (batchMeta.angle).** Wins by being the only post on this query that maps
the four candidates by what each takes as its grammatical subject and which
register it is in — grounded in JMdict entries, 21 Tatoeba 懐かしい pairs in which
not one describes an absent living person, and Wiktionary dating 懐かしい's
person-directed sense as archaic — beside 214 measured miss-you pages whose
median letter is 88 words.

---

## Phase 3 — Verification log (every line checked, nothing from memory)

### The prompt's lead: "会いたい means 'I want to see you' rather than 'I miss you'"

**Verified, and it is more interesting than the prompt says.**

- `jisho.org/api/v1/search/words?keyword=会いたい` returns **no JMdict lexeme**.
  The single result is a Wikipedia title, 会いたいロンリークリスマス. 会いたい is not a
  word in the dictionary.
- `en.wiktionary.org` has **no Japanese entry** for 会いたい (API returns
  `missingtitle`).
- Jisho resolves both 会いたい and 会いたいです to the lemma **会う (au)** — "to meet;
  to encounter; to see", godan verb with 'u' ending, intransitive, JLPT N5 and N2.
- So 会いたい = 会う ren'yōkei + the desiderative suffix -たい. Wiktionary's たい
  entry: "Used to form the desiderative of verbs: want (to do); hope (to do)",
  "Attaches to the 連用形 (ren'yōkei)", "The result is conjugated like an adjective
  (形容詞)", classified as 助動詞 (jodōshi) in traditional grammar, from たし, a shift
  from Old Japanese いたし "painful" (modern 痛い), "Appears as a verbal suffix from
  at least *The Tale of the Heike*, completed before 1330", replacing まほし.
- **But the corpus refuses the clean split.** Tatoeba jpn→eng, 1,000 hits for
  会いたい: sentence **13182095** 会いたい！ is paired with **"I miss you!"**
  (6055899), and sentence **157454** 会いたい。 is paired with **"I want to see
  you."** (257078). Both glosses, same corpus, same word. So the honest statement
  is *not* "it doesn't mean I miss you" — it is that 会いたい is morphologically a
  want-to-meet form and is used idiomatically where English says "I miss you".
- **Extra constraint found, printed in the post:** Wiktionary usage note —
  "Outside of questions, the suffix -たい is used mainly to talk about the
  speaker's own wants. When describing the wants of someone else, the suffix
  -たがる is used instead." So 会いたい cannot carry "he misses you."

### 寂しい (sabishii)

- JMdict via Jisho: i-adjective, JLPT N4, readings さびしい and さみしい, also written
  淋しい. Senses: "lonely (e.g. person, feeling); lonesome; forlorn" / "desolate;
  deserted; lonely (e.g. place); isolated; solitary" / "sad" / "lacking; wanting;
  insufficient".
- Tatoeba: 52 hits for 寂しい. 148723 寂しいわ。→ "I'm lonely." (255250) *and* "I just
  miss him." (265836).
- **The construction the prompt guessed is attested.** `いなくて寂しい` returns 17
  hits. **179195** 君がいなくて寂しいよ。→ **"I miss you."** (1308). Also 9162485
  トムがいなくて寂しいな。→ "I miss Tom.", 1142250 大好きなおばあちゃんがいなくて寂しい。→
  "We miss our dear grandmother."
- Future departure: 179194 君がいなくなったら、本当に寂しくなるな。→ "I'll miss you after
  you've gone." (1422004). 寂しくなる returns 10 hits.

### 恋しい (koishii)

- JMdict via Jisho: i-adjective, JLPT N2, common. Sense: "yearned for; longed for;
  missed".
- Wiktionary: "loved, dear, darling, sweet, sweetheart" / "missed, longed for,
  felt **homesick** for". Inherited from Old Japanese 恋し.
- Tatoeba: 158 hits. **Every** relevant one marks the missed thing with が and puts
  it in the subject slot: 234163 あなたがとても恋しい。→ "I miss you very much";
  12207083 故郷が恋しいな。→ "I miss my hometown"; 10742827 日本食が恋しいなぁ。→ "I miss
  Japanese food"; 11619925 もう、夏の暑さが恋しいの？ → "Do you already miss the summer
  heat?"; 9966338 ボストンが恋しい？ → "Do you miss Boston?".
- **Places, food and seasons confirmed** — the prompt's claim holds.
- For a *person* the corpus prefers 〜のことが: `君が恋しい` returns only 4 hits, of
  which 2095030 is トムは君の**こと**が恋しいんだ。→ "Tom misses you." 1431691
  彼女は彼が恋しい。→ "She misses him." shows the plain が form is also attested.

### 懐かしい (natsukashii) — the prompt's "classic error"

**Verified with one correction to the prompt's framing.**

- JMdict via Jisho **does** gloss it "dear (old); fondly remembered; beloved;
  **missed**; nostalgic". So it is wrong to say the dictionary never renders it
  "missed". The prompt's blunt "NOT for an absent person" needs the evidence
  underneath it, which is:
- Wiktionary dates the senses. Sense 1 — "nostalgic, reminiscent of good memories,
  missed, longed for, yearned after" — is marked **{{defdate|from 1548}}**. Sense
  2 — "dear, beloved, cherished, sweet" — is marked **archaic**, from 759 (first
  attested in the *Man'yōshū*). Its own usage example is **ふるさとが懐かしい** "I miss
  my hometown" — a place. Synonym given: 恋しい. Etymology: from 懐く (natsuku), "to
  get used to and keep close", originally describing wanting to keep something
  close, "over time … used more to describe reminiscences".
- Tatoeba: **21** hits for 懐かしい, all read. **Five** are the kanji 懐 inside
  unrelated words — 懐中電灯 "flashlight" (191304, 176354, 4670038), 懐から (106832),
  本懐 (8261811). Of the remaining sixteen, the thing described as 懐かしい is a song
  (10087569), a board game (10087591), a video game, a shopping street at dusk
  (13179928), whipped cream (6850812), a hometown returned to (12179643), 昔 the
  old days (1135929, glossed "I miss the good old days"), school memories
  (225559, 142427). **In none is it a person who is simply somewhere else.** Where
  a person appears at all it is a remembered one — 2757400, a first love recalled
  years later. 1650084 is a translation of Romeo and Juliet in which 懐かしい
  describes 別れ, the parting, not the departing person.
- Independent corroboration from outside language teaching: European Psychiatry
  65 (1 September 2022), the conference abstract titled *Natsukashii*
  (PMC9565932, CC BY), glosses it as "Japanese word that means happy nostalgia, it
  is the moment in which memory transports you to a beautiful memory". Memory, not
  absence. **Read at abstract level only; it is a conference abstract, not a full
  peer-reviewed article, and the post says so.**

### Politeness — the part that burns readers

- Wiktionary です entry: verb form, "**(polite)** form of だ", plus a second sense,
  "(included even when a copula is not necessary) **indicates politeness**",
  illustrated with **私も行きたいです** "I want to go too" — the same -たい + です shape
  as 会いたいです.
- Tatoeba: **220** hits for 会いたいです.
- **The finding the prompt did not have.** For a genuinely senior addressee the
  corpus does not use 会いたいです at all — it uses the humble **お会いしたいです**
  (お〜する form of 会う): 161785 お会いしたいです。"I want to see you."; 10387211
  またお会いしたいです。; 1167597 来週またお会いしたいですね。; 179924 近いうちにお会いしたいですね。;
  11904982 いつかまたお会いしたいですね。 Plain 会いたいです appears where the person met is
  a third party rather than the addressee — 8723797 お姉さんに会いたいです。"I want to
  meet your older sister." So adding です is **not** the same move as switching to
  the humble verb, and the post says so.
- **Learner error, sourced.** Wiktionary です usage notes: "For the past tense of an
  *-i* adjective, the adjective + でした is nonstandard and generally considered a
  common grammatical mistake made by non-native speakers. The standard form is
  instead to use the past form of the *-i* adjective + です." So the past is
  **会いたかったです**, never 会いたいでした. Attested past: 178633 君に会いたかったよ。→ "How
  I've missed you!" (17486). 会いたかった returns 538 hits.

### Scripts and codepoints (unicode.org, fetched)

From `unicode.org/Public/UNIDATA/UnicodeData.txt` and `Blocks.txt`:
`3042 HIRAGANA LETTER A`, `3044 HIRAGANA LETTER I`, `305F HIRAGANA LETTER TA`,
block `3040..309F; Hiragana`; 会 is U+4F1A inside `4E00..9FFF; CJK Unified
Ideographs`. (CJK ideographs appear in UnicodeData.txt as a range header, not as
individual rows, so the per-character name is not quotable — only the block is.)

---

## Phase 3 — sources chosen (6, after one drop)

| # | URL | Why it earns a place | Subject test | Cap status |
|---|---|---|---|---|
| 1 | `jisho.org/word/会う` | JMdict lemma; proves 会いたい is an inflection, not a word | pass (the language) | jisho.org: 1st post in batch |
| 2 | `jisho.org/word/恋しい` | JMdict gloss + part of speech for the subject argument | pass | same domain, same post |
| 3 | `en.wiktionary.org/wiki/たい` | the desiderative suffix, its attachment, its -たがる restriction | pass | cap-EXEMPT |
| 4 | `en.wiktionary.org/wiki/懐かしい` | sense dating (1548 vs archaic 759) — the load-bearing fact | pass | cap-EXEMPT |
| 5 | `europepmc.org/article/PMC/PMC10165400` | Heliyon 2023, n=27, masu/**tai** form processing — peer-reviewed, open access | pass (the language, learners) | europepmc.org: 2nd post of 3 |


| 6 | `en.wiktionary.org/wiki/です` | です as the polite copula; i-adjective + でした marked a non-native error | pass | cap-EXEMPT |

**Dropped to stay inside the 4–6 rule:** `europepmc.org/article/PMC/PMC9565932`, the
European Psychiatry 65 (2022-09-01, CC BY) conference abstract *Natsukashii*. It was
fetched and it corroborates the 懐かしい finding from outside language teaching, but it
is a conference abstract, not a full article, and it would have made seven sources.

Also linked in the body and fetched, both **cap-exempt reference instruments**:
`tatoeba.org` (every Japanese line above) and `unicode.org` (codepoints).

`capcheck.mjs` run before writing: no banned URLs, no domain at cap 3, no URL at
cap 2. Re-run immediately before saving.

**Generic context statistics used: zero.** No PIB/TRAI/Census/MEA figure appears.

---

## Phase 4–5 — build decisions

- **Category** `miss-you-across-miles` (confirmed live in the Strapi categories
  list).
- **Slug** `i-miss-you-in-japanese` — Strapi returns `total: 0`. Free.
- **Live siblings**: a `$containsi=japan` query against Strapi returns **0**
  articles. There is no Japanese post live. `site-baseline.md` says the same:
  "Russian, Filipino, Japanese or Korean" is the named gap. Language is one of the
  three never-duplicate axes in the BRIEF.
- **Hub**: `/blog/i-miss-you-in-different-languages` is live (7,683 chars) and
  gives Japanese exactly one line inside its Asia list — "Japanese: 会いたい (aitai —
  ai-tie) or あなたが恋しいです (anata ga koishii desu)". Fetched 2026-09-25. It names no
  dictionary, no register, no subject marking, and its "ai-tie" is a respelling,
  not a romanisation system. This post links up to the hub and supplies the layer
  underneath that one row; it does not restate the table.
- **Templates**: `/missyou-gf` (mandatory). Alternative on merit: **`/watch`** —
  the semantic finding of this post is that Japanese routes missing through
  *seeing*, so a page that gives a video you made a player, chapters and a pinned
  comment is the coherent gesture for someone sending 会いたい, "I want to see you".
  Second: **`/capsule`**, which matches 懐かしい specifically — the missing is about
  a shared past rather than a distance. Both are in `verify.config.json`
  `oneOfLinks`. `/dedication`, `/train-ticket`, `/streak` and `/catch` are already
  spent in this batch and none of them maps to the seeing/nostalgia split.

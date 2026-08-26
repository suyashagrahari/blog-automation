# CANCELLED — `raksha bandhan photo video maker with music`

**Verdict: Gate 2 failure, plus a cluster duplicate of a live post. Not written.**
Date: 2026-08-26. Assigned slug `raksha-bandhan-photo-video-maker-with-music` (free in
Strapi — 0 entries — but the slug being free is not a reason to use it).

Two independent, mutually reinforcing cancellation reasons. Either alone is sufficient.

---

## 1. Instrument note

WebSearch was exhausted (200/200) before this keyword was reached — one call attempted,
refused, no retries. **Brave Search, `country=in`, 2026-08-26** was the fallback, HTTP 200
on both queries, no 429. Extraction parsed Brave's `snippet` card blocks in document
order and de-duplicated by href, so positions are indicative rather than exact visual
rank. The verdict does not depend on ordering — it depends on **page type**, which is
robust to it, and on **set membership**, likewise.

Bing was not pulled. The batch brief records a control proving Bing strips modifiers and
serves a cached head-term SERP; it cannot answer a page-type question.

---

## 2. Gate 2 — the SERP is app-store and app-download pages

`raksha bandhan photo video maker with music` — Brave IN, top 15:

| ~Pos | URL | Page type |
|---|---|---|
| 1 | https://raksha-bandhan-photo-video-maker-with-music.soft112.com/ | **APK download listing** |
| 2 | https://www.flexclip.com/create/raksha-bandhan-video.html | tool landing page |
| 3 | https://www.youtube.com/watch?v=O62wjoFzlXQ | video |
| 4 | https://www.selfanimate.com/categories/child/raksha-bandan-video-greeting | product template gallery |
| 5 | https://play.google.com/store/apps/details?id=com.dwaraka.raksha.bandhan.video.maker | **Google Play** |
| 6 | https://play.google.com/store/apps/details?id=com.pixainfotech.rakshabandhanvideomaker | **Google Play** |
| 7 | https://download.cnet.com/rakshabandhan-video-maker-with-song/3000-13632_4-77673439.html | **download portal** |
| 8 | https://raksha-bandhan-video-maker-hua.en.softonic.com/android | **APK portal** |
| 9 | https://www.memuplay.com/how-to-use-raksha-bandhan-video-maker-on-pc.html | Android-emulator how-to |
| 10 | https://raksha-bandhan-video-maker-jub.en.softonic.com/android | **APK portal** |
| 11 | https://raksha-bandhan-video-maker-npi.en.softonic.com/android | **APK portal** |
| 12 | https://play.google.com/store/apps/details?id=com.rakshabandhan_photoframe.rakshabandhan_videomaker | **Google Play** |
| 13 | https://www.adbanao.com/rakshabandhan-banners-greetings | product page |
| 14 | https://raksha-bandhan-photo-slideshow-video-maker.soft112.com/ | **APK download listing** |
| 15 | translate.google.com proxy of #4 | proxy |

**11 of 15 are app-store or app-download pages. Zero are articles.** Not one editorial,
listicle, guide or blog result appears anywhere in the top 15.

Page types were verified by fetch, not inferred from the URL:

- Position 1 title: `Raksha Bandhan Photo Video Maker with... Free Download`. The page body
  carries "Install" ×6, "Google Play" ×2, "apk" ×2, "Version 1". **The domain and the page
  title are the assigned keyword verbatim** — because an Android app is literally named
  *Raksha Bandhan Photo Video Maker With Music*.
- Position 2 title: `Free Online Raksha Bandhan Video Maker | FlexClip` — a product landing
  page.
- Position 4 title: `Online Raksha bandan video greeting Templates | Selfanimate` — a
  product template gallery.

**This is a harder Gate 2 failure than any of the five cuts already recorded in BRIEF.md.**
Those SERPs (poster maker, collage maker, template photo, template edit, online photo
editor) at least contained Pinterest pins, Canva pages and CorelDraw content. This one
contains no content page at all.

The mechanism: the keyword is not a question, it is **an app's name**. The query is
navigational — a person typing it wants that APK, or one like it. An article cannot serve
that intent and cannot occupy that SERP, regardless of how well written or how well
sourced it is. No amount of first-party data changes a navigational app query into an
informational one.

---

## 3. Clustering — it is the same SERP as a live SubhSandesh post

SubhSandesh already has live: **`raksha-bandhan-video-maker-with-photo-and-music`**
(confirmed live, Strapi returns 1 entry for that slug).

Brave IN was pulled for that post's keyword too. The two result sets:

- **14 of 15 URLs shared.**
- **Positions 1–8 identical, in identical order.**
- The single non-shared slot is a Google-translate proxy of a URL that appears in both.

Overlap threshold for cancellation was 3 shared URLs. This is 14.

**This is not the Bing modifier-stripping artefact.** The two queries carry the *same
token set* — "raksha bandhan / photo / video maker / music" — differing only in word order
and the stopwords *with* / *and*. An identical SERP is the correct and expected response to
what is, semantically, one query. The identity is evidence, not degeneracy. The keyword
came off the 2026-08-13 backlog; it was already written, under the other word order.

---

## 4. The prescribed angle is already published, near verbatim

The brief for this keyword prescribed the honest angle: SubhSandesh makes no video, its
artifact is a page that plays, and the genuine content is the comparison — file versus
page, WhatsApp compression, updatable after sending, app install, repeat views.

The live post's own `batchMeta.angle` reads:

> *"Wins by being the only post that admits SubhSandesh produces no MP4 and ships no audio
> track on its rakhi template, then uses its own 32,683 recorded views and 51.9% phone-open
> rate to say precisely which job a link wins and which job an MP4 editor wins."*

Its title is *"Raksha Bandhan Video Maker With Photo and Music: MP4 or Link?"*. It runs
1,775 words and 12 FAQs, sits in `indian-festivals`, links
`/happy-rakshabandhan-to-brother`, uses "MP4" 16 times, and has an H2 explicitly titled
*"When an MP4 editor is the right choice and SubhSandesh is the wrong one"*.

So the assigned angle is not merely adjacent to the live post — **it is that post.** Writing
it again would produce a second URL making the same argument from the same platform facts
against the same SERP. That is textbook cannibalisation, and BRIEF.md already flags this
cluster as carrying seven competing posts.

The assigned primary fact (99.4% published-and-shared, 2,956 of 2,973) speaks to
*completion*, not to video, as the brief itself conceded. It would not have rescued the page.

---

## 5. Recommendation

**Cancel. Do not queue under another phrasing.**

No blog JSON written. No `SOURCES.md` rows appended — source selection was never reached,
so lane D/F headroom is untouched and remains available to other agents.

Cheaper alternative, if the long tail is wanted: add one FAQ to the existing live post in
searcher phrasing — *"Is there a Raksha Bandhan photo video maker with music app?"* —
answered honestly (yes, several Android apps; here is what a link does instead and when the
app is the better choice). That catches the residual informational sliver of this query
without spending a URL on a SERP an article cannot enter.

## 6. Search terms and checks run

- Brave IN: `raksha bandhan photo video maker with music`
- Brave IN: `raksha bandhan video maker with photo and music` (clustering control)
- WebSearch: 1 attempt, refused, budget exhausted
- Page-type fetch verification: soft112.com pos 1, flexclip pos 2, selfanimate pos 4
- Strapi slug check, both slugs

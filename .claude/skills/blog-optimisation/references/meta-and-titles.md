# Titles, meta titles and meta descriptions

Three different strings do three different jobs. Writing one and copying it into
the other two is the most common way a good post gets a bad click-through rate.

| Field | Job | Where it shows | Length |
|---|---|---|---|
| `title` / H1 | State the page's promise | On the page | 50–65 chars |
| `metaTitle` | Win the click in the SERP | Google result, browser tab | 50–60 chars, cap 70 |
| `metaDescription` | Win the click once the title has the eye | Google snippet | 150–160 chars, cap 170 |
| `excerpt` | Describe the post on-site | Blog cards, related-post rails | ≤ 300 chars |

`metaTitle` and H1 **should differ.** The H1 can be longer and warmer because the
reader has already arrived. The title tag is competing against nine other blue
links, so it needs the keyword and the differentiator and nothing else.

---

## `metaTitle`

**Length.** Target 50–60 characters. Google truncates on pixel width near 580px,
which is roughly 60 characters, and a cut title loses exactly the differentiator
you put at the end. Strapi's hard cap is 70; treat 60 as the real limit.

**Keyword placement.** The exact target keyword in the first five words, ideally
at the very start. Position matters more here than anywhere else on the page.

**One differentiator, after one separator.** A colon, em dash or parentheses —
never two of them. The differentiator must be something a competitor's title
cannot honestly claim: a count, a constraint, a named data source, a specific
promise.

**Banned openers and boosters.** "Best", "Top", "Ultimate", "Complete Guide",
"Everything You Need to Know", "A Comprehensive Guide". Every competing result
already uses these, so they differentiate nothing and spend 15 characters doing
it. If the title still reads fine with the booster deleted, it was noise.

**A leading number is allowed** and usually earns the click on a list post —
"8 Miss You Ideas for…". Keep the keyword immediately after the number.

**Do not year-stamp an evergreen post.** "(2026)" creates an annual maintenance
debt and reads stale by Q2. Year-stamp only genuinely time-bound queries:
festival dates, pricing, "in 2026" searches, anything where last year's answer is
wrong rather than merely older.

**No brand suffix.** " | SubhSandesh" costs 15 characters and buys nothing until
people search the brand by name.

**One keyword, not two.** A second keyword crammed in reads as spam to a person
and dilutes the first for a machine.

---

## `metaDescription`

**It does not affect ranking, and Google rewrites it most of the time.** Both
facts are reasons to write it well rather than reasons not to bother: when it
survives, it is the whole sales pitch, and when Google rewrites it, it pulls from
the body — so the body's opening needs to be snippet-shaped too.

**Length.** 150–160 characters. Under 160 survives desktop; the first ~120 survive
mobile, so front-load. Strapi caps at 170.

**Lead with the answer or the differentiator.** Never with setup. The reader is
scanning, and "In this post we look at…" has already lost them.

**Keyword once, near the start**, phrased naturally. Google bolds the words that
match the query, which is a visual advantage worth having early in the line.

**At least one concrete number.** A number in a snippet is the cheapest
credibility signal available, and it is the thing the surrounding results usually
lack. Prefer a first-party number — it is the one nobody else can print.

**No CTA clichés.** "Read on to find out", "Discover", "Learn more", "Click here",
and any trailing ellipsis. They spend characters saying nothing.

**Be true to the page.** A snippet that promises something the article does not
deliver buys a click and loses the visit. A high bounce rate is a worse outcome
than a lower click-through rate.

---

## Worked example

Target keyword: *miss you ideas for long distance relationship*

```
title:           Miss You Ideas for a Long Distance Relationship That Get Opened
metaTitle:       8 Miss You Ideas for a Long Distance Relationship, Ranked
metaDescription: Miss you ideas for a long distance relationship, ranked by what
                 actually gets reopened: 8 options with real India Post delivery
                 windows and data from 2,627 shared pages.
```

Why it works: the number leads, the exact keyword follows immediately, and
"Ranked" is a promise no competing quote-list can make. The description opens on
the keyword, states the ranking basis in four words, and closes on two numbers a
competitor cannot publish — one of them first-party.

What was rejected: "Best Miss You Ideas for Long Distance Relationships (2026)" —
a banned booster, a maintenance debt, and no differentiator.

---

## Check before emitting

- [ ] `metaTitle` 50–60 chars, keyword in the first five words, one separator, no banned booster
- [ ] `metaTitle` differs from the H1
- [ ] No year in an evergreen title; no brand suffix; one keyword only
- [ ] `metaDescription` 150–160 chars, keyword near the start, at least one number, no CTA cliché
- [ ] Both are true to what the page actually delivers

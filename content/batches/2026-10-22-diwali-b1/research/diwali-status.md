# Research brief: diwali status (row 11, slug `diwali-status`)

Measured 2026-10-22. Secondaries: diwali whatsapp status, diwali status in english, diwali status in hindi.
Siblings (PLAN.json): diwali-captions, diwali-quotes. The task prompt also named diwali-shayari; lines were checked against all three.

## Phase 0: first-party data

No Diwali or WhatsApp-status usage data exists (/happy-diwali is new). Relevant facts.md lines used:

- Raksha Bandhan 2026 lead time (n = 89), labelled in the body as the nearest festival analogue: 49.4% built on the day, 27.0% the day before, 6.7% four or more days ahead. Supports the "write your line the day before" advice.
- 48.3% of shared pages opened on a phone (platform-wide).
- 38.5% of creators password-protect (platform-wide), used in the table's link row.
- 11.1 average views per page (platform-wide), used in the table's link row and labelled platform-wide in the limits section.

Two of these (49.4%/27.0% and 48.3%) sit inside the first 150 words. The gate passes on four facts. None of them is a status measurement, so the comparison table carries first-party values in one row only (recorded as a failure).

## Phase 1: SERP (Firecrawl search, location India, 1 search)

| # | URL | Type | Words | Direct answer | Data / dates | Format | Optimising for |
|---|---|---|---|---|---|---|---|
| 1 | in.pinterest.com/shamala26/deepavali-cards-n-quotes | Pin board | ~70 | none | none | images | image saves |
| 2 | fnp.com/quotes/diwali | Gift retailer (competitor) | ~2,200 | Wishes list up top. "Status" is one paragraph telling you to "update a Diwali status" | none | lists, FAQ, no tables | gift upsell |
| 3 | canva.com/hi_in/whatsapp-status/templates/diwali | Template gallery (competitor) | 403, judged from the snippet | template grid | none | images/video | template use |
| 4 | sharechat.com tag page | UGC video feed | ~95 | none | none | video | app installs |
| 5 | apnastatus.in/festivals/diwali | Wishes aggregator (competitor) | ~4,500 | 210 lines in 7 tabs (Heartfelt, Short Status, Quotes & Shayari, Friends, Formal, Hindi, Hinglish) | dated to Diwali 2026 (8 Nov) | copy/WhatsApp buttons, FAQ (2 Qs), JSON-LD | copy-paste volume |
| 6–10 | facebook page; magnific stock images; livehindustan (Hindi wishes, Oct 2025); facebook boldsky video (2025); bigsmall.in (gift retailer, 75 quotes, Oct 2026) | | | | | | |

Weak in the top 10: 6 (pinterest, canva gallery, sharechat, two facebook, magnific). The SERP is mostly image and video intent.

Tone: third-person or none, no byline, no numbers. None of the top 10 states WhatsApp's 24-hour expiry, the 90-second video cap, the audience settings or any character count. Measured on the five pages fetched above (fnp and apnastatus searched for "24 hours", "seconds" and "character": no hits).

## Phase 2: gap

- **Table stakes:** many short lines; English plus Hindi/Hinglish; tone groups (short, family, friends, formal).
- **Gap:** how a status actually behaves. That covers expiry, length limits, who sees it, when to post for Diwali 2027, and the fact that WhatsApp publishes no text-status character limit. Also missing: any length guidance per line, and any case where a status is the wrong tool.
- **Stale data:** none cited anywhere. apnastatus and livehindustan are dated to Diwali 2026 or 2025.
- **Fan-out:** what is a Diwali status / how long does it last; status lines in English and Hindi; who can see it; when to post in 2027; video and voice limits; mentions and Instagram sharing; reading receipts; status vs a personal greeting.
- **Angle:** see `batchMeta.angle`.
- **Structure note:** the tone grouping partly overlaps apnastatus's tabs. This post adds character counts, an away-from-home group and a mixed-list group, and copies no line.

## Phase 3: sources (all fetched 2026-10-22)

| Source | Type | Subject test | What it supports |
|---|---|---|---|
| faq.whatsapp.com/454876960047011 About status | Official help, undated | yes (platform behaviour) | 24 h; 90 s; 3GP/MPEG-4; cannot be turned off |
| faq.whatsapp.com/643144237275579 Create and share a status | Official help, undated | yes | 2–6 photo layout; HD not supported; 5 private mentions; no mentions in text/voice |
| faq.whatsapp.com/502161774931737 Manage status privacy | Official help, undated | yes | default all contacts; except / only share with; changes not retroactive; mentions; FB/IG story toggles; read receipts |
| blog.whatsapp.com new-ways-to-enjoy-whatsapp-status | Official blog, 7 Feb 2023 | yes | per-status audience; voice status 30 s |
| atlantis-press.com icomacs-18/25900630, Faizin et al. | Peer-reviewed conference paper, OA CC BY-NC, Oct 2018, full PDF read | yes | 86 statuses / 23 people; assertive 43.02%, expressive 29.07%, directive 17.44% |
| europepmc.org PMC6169781, Xu et al., CSCW 2016 | Peer-reviewed, open author manuscript | yes (ephemeral sharing) | 25 interviews; default deletion → mundane talk, less self-consciousness, playful interaction (abstract claims only) |

The help pages render client-side. Their text was read from the server-rendered `json_cms_content` (plain HTTP GET). Firecrawl refuses whatsapp.com.

findpapers.mjs queries tried: "WhatsApp status ephemeral sharing", "ephemeral social media stories self-presentation", "WhatsApp status updates motivations", "Snapchat ephemerality sharing behaviour", "Instagram Stories ephemeral content sharing", "ephemeral messaging self-disclosure audience", "festival greetings WhatsApp India". Rejected: SAGE/T&F/Frontiers hits (banned), closed ACM CHI 2019 paper, and SSRN/IJSR items.

Generic context statistics: 0. Wikipedia body links: 0. The date was checked on drikpanchang.com/diwali/diwali-puja-calendar.html?year=2027 (Lakshmi Puja Fri 29 Oct; Govardhan Puja and Gujarati New Year Sat 30 Oct; Bhai Dooj Sun 31 Oct, New Delhi). Drik Panchang is named in the body but not linked or cited.

## Sibling and old-post check

- The eight old Diwali posts' H2s and FAQs were reviewed. None covers status mechanics.
- Lines swapped after reading siblings at finalisation:
  - Crooked-rangoli idea (diwali-quotes): replaced in the English and Hindi lines.
  - Cleaning-for-Lakshmi line, "house smells of" line and food-indulgence joke (diwali-quotes): replaced.
  - Kurta-for-the-photo, bad-photos, aunties-inspect-rangoli and grandmother-rangoli lines (diwali-captions): replaced.
  - Papa-puts-up-the-lights line (diwali-shayari): replaced.
  - Far-away-diya Hindi line (quotes/shayari theme): replaced.
- Internal links: /happy-diwali (mandatory) and /dedication. Dedication was picked because the voice-status cap is 30 s and Dedication carries a real voice for one listener.

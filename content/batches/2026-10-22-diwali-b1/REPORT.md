# Report — 2026-10-22-diwali-b1 (Diwali 2027, Batch 1)

Source: `content/keywords/2026-10-22-diwali-2027/batches/diwali-batch-1.md` (50 keywords). Same-SERP rows were merged as secondaries → **25 new posts**; 2 existing unpublished drafts upgraded (`happy-diwali-wishes-in-hindi`, `diwali-wishes-with-name-and-photo` in `2026-08-19-diwali`). Every post links **/happy-diwali** (added to TEMPLATE_LINKS this batch) plus one honest alternative, and names SubhSandesh.

`verify-batch.mjs`: ✔ no problems · audit 1,223/1,250 · capcheck: nothing banned, no domain at cap · crossover (slug/keyword/H1) clean · FAQs never in body.

| slug | primary keyword | words | FAQs | audit | links |
|---|---|---|---|---|---|
| diwali-2027-date | diwali 2027 date | 1758 | 10 | 49/1 | /happy-diwali /missyou-gf |
| diwali-2027-kab-hai | diwali 2027 kab hai | 1779 | 11 | 48/2 | /happy-diwali /missyou-gf |
| lakshmi-puja-muhurat-2027 | lakshmi puja muhurat 2027 | 1790 | 10 | 49/1 | /happy-diwali /missyou-gf |
| lakshmi-puja-vidhi | lakshmi puja vidhi | 1783 | 11 | 49/1 | /happy-diwali /missyou-gf |
| dhanteras-2027 | dhanteras 2027 | 1788 | 11 | 49/1 | /happy-diwali /templates |
| choti-diwali-2027 | choti diwali 2027 | 1769 | 11 | 48/2 | /happy-diwali /missyou-gf /train-ticket |
| govardhan-puja-2027 | govardhan puja 2027 | 1796 | 11 | 49/1 | /happy-diwali /templates |
| bhai-dooj-2027 | bhai dooj 2027 | 1776 | 11 | 50/0 | /happy-diwali /happy-rakshabandhan-to-brother |
| diwali-quotes | diwali quotes | 1793 | 10 | 49/1 | /happy-diwali /missyou-gf |
| diwali-shayari | diwali shayari | 1793 | 11 | 50/0 | /happy-diwali /missyou-gf |
| diwali-status | diwali status | 1773 | 11 | 49/1 | /dedication /happy-diwali |
| diwali-captions | diwali captions | 1796 | 11 | 49/1 | /happy-diwali /missyou-gf |
| diwali-wishes-maker | diwali wishes maker | 1791 | 12 | 49/1 | /happy-diwali /photo-puzzle |
| diwali-card | diwali card | 1688 | 9 | 50/0 | /happy-diwali /dedication |
| happy-diwali-images | happy diwali images | 1795 | 11 | 49/1 | /happy-diwali /photo-puzzle |
| diwali-rangoli-designs | diwali rangoli designs | 1787 | 11 | 48/2 | /happy-diwali /photo-puzzle |
| diwali-drawing | diwali drawing | 1778 | 10 | 49/1 | /happy-diwali /photo-puzzle |
| diwali-gift-ideas | diwali gift ideas | 1794 | 10 | 49/1 | /happy-diwali /photo-puzzle |
| diwali-gift-ideas-for-employees | diwali gift ideas for employees | 1744 | 11 | 49/1 | /happy-diwali /templates |
| diwali-decoration-ideas | diwali decoration ideas | 1778 | 11 | 49/1 | /happy-diwali /missyou-gf |
| diwali-party-ideas | diwali party ideas | 1791 | 10 | 49/1 | /happy-diwali /missyou-gf |
| diwali-sweets | diwali sweets | 1778 | 11 | 48/2 | /happy-diwali /missyou-gf |
| diwali-essay | diwali essay | 1793 | 11 | 48/2 | /happy-diwali /templates |
| diwali-speech | diwali speech | 1797 | 10 | 49/1 | /happy-diwali /dedication |
| diwali-story | diwali story | 1800 | 11 | 49/1 | /happy-diwali /photo-puzzle |

## Corrections the writers found (verified at primary sources)
- Employer-gift tax limit is **₹15,000** per tax year from 1 Apr 2026 (Income-tax Rules 2026, Rule 15), not ₹5,000. ₹50,000 gift rule continues under s.92 of the Income-tax Act 2025; cash and jewellery limits are separate.
- National Ayurveda Day is fixed on **23 September** since 2025 (Gazette 23 Mar 2025), no longer on Dhanteras.
- FSSAI withdrew the mandatory best-before date for loose sweets on 7 Nov 2023.
- Instagram allows 5 hashtags per post (help centre, 22 Oct 2026).
- Old drafts had Bhai Dooj 2026 as 10 Nov; it is **Wed 11 Nov 2026** (fixed in what-to-write-in-a-diwali-card, first-diwali-after-marriage, wishes drafts).
- Diwali 2027 tithi: Amavasya ends ~19:06 IST 29 Oct (USNO); London/New York observe Thu 28 Oct; Tamil Nadu 28 vs 29 Oct conflict stated, not resolved.
- NDMA publishes no Diwali/decorative-lighting guidance (state fire services + BIS used).

## Open (structural) failures
Most remaining failures are the first-party table column / Diwali usage data — /happy-diwali is new and facts.md has no Diwali data. Close them with a read-only /happy-diwali usage probe after Diwali 2026 (8 Nov). Swap-test failures remain where only generic date instruments exist.

## Notes
- drikpanchang.com is used only as a marked date reference (verifier-exempt), never as a cited source, even where it ranks.
- verify-batch FAQ-vs-heading check strips non-Latin text, so Hindi FAQs read as duplicates of headings (diwali-2027-kab-hai worked around it).
- /happy-diwali is not yet in the Strapi template picker: run scripts/add-template.mjs (needs STRAPI_TOKEN) or relatedTemplates shows an amber warning.

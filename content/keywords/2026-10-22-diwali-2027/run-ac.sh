#!/bin/zsh
# Diwali 2027 autocomplete harvest — India geo, serial (a 4-way parallel run drew HTTP 403 on 2026-10-21).
cd /Users/admin/Desktop/Suyash/gifts/blog-automation
R=content/keywords/2026-10-22-diwali-2027
npm run keywords:suggest -- "diwali" "happy diwali" "diwali 2027" "diwali wishes" "diwali quotes" "diwali messages" "diwali greetings" "diwali captions" "diwali status" "diwali shayari" "diwali images" "diwali card" "diwali rangoli" "diwali decoration" "diwali gift" "diwali gift ideas" "diwali essay" "diwali puja" "lakshmi puja" "diwali muhurat" "diwali kab hai" "dhanteras" "choti diwali" "govardhan puja" "bhai dooj" "diwali wishes for" "diwali party" "diwali sweets" "diwali drawing" "diwali poster" "diwali speech" "diwali holidays" "deepavali" "diwali story" "diwali celebration" --geo in --hl en --delay 150 --out $R/ac-in-en > $R/ac-in-en.log 2>&1
echo "en: $(grep -E '✓|✖' $R/ac-in-en.log | head -1)"
npm run keywords:suggest -- "दिवाली" "दीपावली" "दिवाली की शुभकामनाएं" "हैप्पी दिवाली" "दिवाली 2027" "धनतेरस" "लक्ष्मी पूजा" "दिवाली शायरी" "दिवाली रंगोली" "दिवाली पर निबंध" --geo in --hl hi --delay 150 --out $R/ac-in-hi > $R/ac-in-hi.log 2>&1
echo "hi: $(grep -E '✓|✖' $R/ac-in-hi.log | head -1)"
echo ALLDONE

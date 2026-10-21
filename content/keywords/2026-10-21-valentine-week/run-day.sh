#!/bin/zsh
# Valentine's Week 2027 autocomplete harvest — one out dir per day per market.
cd /Users/admin/Desktop/Suyash/gifts/blog-automation
R=content/keywords/2026-10-21-valentine-week
typeset -A SEEDS
SEEDS[rose]="rose day|happy rose day|rose day 2027|rose day quotes|rose day wishes|rose day gift|rose day messages|rose day captions|rose day status|rose day images|rose day for girlfriend|rose day for boyfriend|rose day shayari|rose colors meaning|rose day ideas"
SEEDS[propose]="propose day|happy propose day|propose day 2027|propose day quotes|propose day wishes|propose day gift|propose day messages|propose day captions|propose day ideas|how to propose|proposal ideas|propose day shayari|propose day images|proposal lines"
SEEDS[chocolate]="chocolate day|happy chocolate day|chocolate day 2027|chocolate day quotes|chocolate day wishes|chocolate day gift|chocolate day messages|chocolate day captions|chocolate day ideas|chocolate day shayari|chocolate day images|chocolate gift ideas"
SEEDS[teddy]="teddy day|happy teddy day|teddy day 2027|teddy day quotes|teddy day wishes|teddy day gift|teddy day messages|teddy day captions|teddy day ideas|teddy day shayari|teddy day images|teddy bear gift"
SEEDS[promise]="promise day|happy promise day|promise day 2027|promise day quotes|promise day wishes|promise day gift|promise day messages|promise day captions|promise day ideas|promise day shayari|promises to girlfriend|promises to boyfriend|promise day images"
SEEDS[hug]="hug day|happy hug day|hug day 2027|hug day quotes|hug day wishes|hug day gift|hug day messages|hug day captions|hug day ideas|hug day shayari|types of hugs|virtual hug|hug day images"
SEEDS[kiss]="kiss day|happy kiss day|kiss day 2027|kiss day quotes|kiss day wishes|kiss day gift|kiss day messages|kiss day captions|kiss day ideas|kiss day shayari|types of kisses|kiss day images"
SEEDS[valentine]="valentines day|happy valentines day|valentines day 2027|valentines day ideas|valentines day gifts|valentines day gifts for him|valentines day gifts for her|valentines day quotes|valentines day messages|valentines day cards|valentines day date ideas|valentines day captions|valentines day wishes|valentine week|valentine week list|valentines day for boyfriend|valentines day for girlfriend|valentines day poems|valentines day pickup lines|galentines day|valentines day for husband|valentines day for wife|valentines day puns|valentines day surprise"
day=$1
S=("${(@s:|:)SEEDS[$day]}")
for g in us in gb ca au; do
  [ -s $R/ac-$day-$g/autocomplete.csv ] && continue
  if [ $g = us ] || [ $g = in ]; then SS=("${S[@]}"); else SS=("${S[@]:0:6}"); fi
  npm run keywords:suggest -- "${SS[@]}" --geo $g --hl en --delay 200 --out $R/ac-$day-$g > $R/ac-$day-$g.log 2>&1
done
echo "$day done"

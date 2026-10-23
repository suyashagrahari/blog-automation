#!/bin/zsh
# Serial client=firefox harvest for the sets the chrome-client 403 left empty or partial.
cd /Users/admin/Desktop/Suyash/gifts/blog-automation/content/keywords/2026-10-21-valentine-week
eval "$(sed -n '/^typeset/,/^SEEDS\[valentine\]/p' run-day.sh)"
for pair in promise:us promise:in kiss:us kiss:in valentine:us valentine:in hug:us propose:in teddy:in chocolate:in; do
  day=${pair%%:*}; g=${pair##*:}; out=ac-$day-$g-ff
  [ -s $out/autocomplete.csv ] && continue
  S=("${(@s:|:)SEEDS[$day]}")
  node suggest-ff.mjs $out $g "${S[@]}" > $out.log 2>&1
  echo "$pair $(tail -1 $out.log)"
done
echo ALLDONE

#!/usr/bin/env bash
# Downloads self-hosted woff2 files for the three site fonts into public/fonts/.
# Run from the project root: bash scripts/fetch-fonts.sh
set -euo pipefail

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
OUT="public/fonts"
mkdir -p "$OUT"

# family <query> <prefix> <latin-key>
FAMILIES=(
  "Manrope|wght@400;500;600;700;800|manrope|variable"
  "Barlow+Condensed|wght@400;500;600;700|barlow|static"
  "IBM+Plex+Mono|wght@400;500;600|ibm|static"
)

for entry in "${FAMILIES[@]}"; do
  IFS='|' read -r fam q prefix mode <<< "$entry"
  css=$(curl -s --max-time 30 "https://fonts.googleapis.com/css2?family=${fam}:${q}&display=swap" -A "$UA")
  printf '%s' "$css" | PREFIX="$prefix" OUT="$OUT" MODE="$mode" python3 -c "
import re, sys, os
prefix = os.environ['PREFIX']
out = os.environ['OUT']
mode = os.environ['MODE']
css = sys.stdin.read()
blocks = re.findall(r'@font-face\s*{(.*?)}', css, re.S)
by_weight = {}
for block in blocks:
    wm = re.search(r'font-weight:\s*([0-9]+)', block)
    if not wm:
        continue
    ur = re.search(r'unicode-range:\s*([^;]*)', block)
    ur_text = ur.group(1) if ur else ''
    is_latin = 'latin' in ur_text and 'latin-ext' not in ur_text
    um = re.search(r'url\((https://[^)]*\.woff2)\)', block)
    if not um:
        continue
    weight = wm.group(1)
    key = (weight, is_latin)
    if key not in by_weight:
        by_weight[key] = um.group(1)
if mode == 'variable':
    # Single variable font file covers all weights; pick any latin url.
    url = next((u for (w, latin), u in by_weight.items() if latin), None) or next(iter(by_weight.values()))
    if url:
        print(url, f'{out}/{prefix}-var.woff2')
else:
    for weight in sorted({int(w) for (w, _) in by_weight}):
        url = by_weight.get((str(weight), True)) or by_weight.get((str(weight), False))
        if url:
            print(url, f'{out}/{prefix}-{weight}.woff2')
"
done | sort -u > /tmp/font-urls.txt

echo "Downloading $(wc -l < /tmp/font-urls.txt) font files..."
while read -r url file; do
  if [ -f "$file" ]; then
    cp "$file" "$file" 2>/dev/null || true # no-op to keep loop simple
    echo "OK   $file (exists)"
    continue
  fi
  curl -s --max-time 60 -o "$file" "$url"
  if [ -s "$file" ]; then
    echo "OK   $file ($(stat -c%s "$file") bytes)"
  else
    echo "FAIL $file"; rm -f "$file"
  fi
done < /tmp/font-urls.txt
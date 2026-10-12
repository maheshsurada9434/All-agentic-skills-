#!/usr/bin/env bash
# All Agentic Skills installer.
#
#   curl -fsSL https://raw.githubusercontent.com/maheshsurada9434/All-agentic-skills-/main/install.sh | bash -s -- frontend-design superpowers/systematic-debugging
#
# Options
#   <skill> ...          skill names or ids (source/name) from the catalog
#   --list [word]        list skills, optionally filtered by a word
#   --source <id>        install every skill from one collection (e.g. --source superpowers)
#   --project            install into ./.claude/skills (this project only)
#   --dir <path>         install into any folder (other agents: Codex, Cursor, Gemini CLI ...)
#   default target       ~/.claude/skills
set -euo pipefail
REPO="maheshsurada9434/All-agentic-skills-"
RAW="https://raw.githubusercontent.com/$REPO/main"
DEST="${HOME}/.claude/skills"
LIST=""; SOURCE=""; WANT=()
while [ $# -gt 0 ]; do
  case "$1" in
    --project) DEST="$(pwd)/.claude/skills" ;;
    --dir) DEST="$2"; shift ;;
    --list) LIST="${2:-*}"; [ $# -gt 1 ] && shift ;;
    --source) SOURCE="$2"; shift ;;
    -h|--help) sed -n '2,14p' "$0" 2>/dev/null || true; exit 0 ;;
    *) WANT+=("$1") ;;
  esac
  shift
done
command -v git >/dev/null || { echo "git is required"; exit 1; }
command -v python3 >/dev/null || { echo "python3 is required"; exit 1; }
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
if [ -n "${AAS_CATALOG:-}" ]; then cp "$AAS_CATALOG" "$TMP/skills.json"; else curl -fsSL "$RAW/catalog/skills.json" -o "$TMP/skills.json"; fi

if [ -n "$LIST" ]; then
  python3 - "$TMP/skills.json" "$LIST" <<'PY'
import json, sys
c = json.load(open(sys.argv[1])); q = sys.argv[2].lower()
rows = [s for s in c['skills'] if q == '*' or q in (s['id'] + ' ' + s['description'] + ' ' + s['category']).lower()]
for s in rows: print(f"{s['id']:<55} {s['category']:<22} {'' if s['vendored'] else '(from original repo)'}")
print(f"\n{len(rows)} of {c['total']} skills")
PY
  exit 0
fi
[ ${#WANT[@]} -eq 0 ] && [ -z "$SOURCE" ] && { echo "Name at least one skill, or use --list / --source. See --help."; exit 1; }

# Resolve names to catalog entries: prints "local|repo|path|name" per skill.
python3 - "$TMP/skills.json" "$SOURCE" "${WANT[@]}" > "$TMP/plan.txt" <<'PY'
import json, sys
c = json.load(open(sys.argv[1])); src = sys.argv[2]; want = sys.argv[3:]
order = ['mahesh-surada', 'anthropic', 'superpowers', 'ui-ux-pro-max']
rank = lambda s: order.index(s['source']) if s['source'] in order else 99
picked = [s for s in c['skills'] if src and s['source'] == src]
for w in want:
    m = [s for s in c['skills'] if s['id'] == w] or sorted([s for s in c['skills'] if s['name'] == w], key=rank)
    if not m:
        near = [s['id'] for s in c['skills'] if w.lower() in s['id'].lower()][:8]
        print(f"ERR|{w}|{', '.join(near)}"); continue
    picked.append(m[0])
for s in picked: print(f"{s.get('local','')}|{s['repo']}|{s['path']}|{s['name']}")
PY
if grep -q '^ERR|' "$TMP/plan.txt"; then
  grep '^ERR|' "$TMP/plan.txt" | while IFS='|' read -r _ w near; do echo "Not found: $w${near:+  (did you mean: $near)}"; done
  exit 1
fi

mkdir -p "$DEST"
fetch() { # repo path -> folder
  local repo="$1" p="$2" out="$TMP/$(echo "$repo" | tr / _)"
  if [ ! -d "$out" ]; then git clone -q --depth 1 --filter=blob:none --sparse "https://github.com/$repo" "$out"; fi
  git -C "$out" sparse-checkout add "$p" >/dev/null 2>&1
  echo "$out/$p"
}
n=0
while IFS='|' read -r local repo path name; do
  if [ -n "$local" ]; then from="$(fetch "$REPO" "$local")"; else from="$(fetch "$repo" "$path")"; fi
  rm -rf "${DEST:?}/$name"; cp -R "$from" "$DEST/$name"
  echo "✓ $name  →  $DEST/$name"; n=$((n+1))
done < "$TMP/plan.txt"
echo "Installed $n skill(s). Restart your agent session to load them."

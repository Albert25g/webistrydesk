#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: run-bfg-scrub.sh <git-remote-url> <path-to-bfg-jar> [replacements-file] [--apply]

This script performs a BFG history scrub on a MIRROR clone. It will not force-push
unless you provide the --apply flag. Default replacements-file: bfg-replacements.txt

Examples:
  # dry-run (no force-push):
  ./scripts/run-bfg-scrub.sh git@github.com:OWNER/REPO.git /path/to/bfg.jar ../bfg-replacements.txt

  # apply changes and force-push (requires explicit confirmation):
  ./scripts/run-bfg-scrub.sh git@github.com:OWNER/REPO.git /path/to/bfg.jar ../bfg-replacements.txt --apply

IMPORTANT: rotate exposed keys BEFORE running this script. Do NOT commit replacements file.
EOF
}

if [ "$#" -lt 2 ]; then
  usage
  exit 2
fi

GIT_REMOTE_URL="$1"
BFG_JAR_PATH="$2"
REPLACEMENTS_FILE="${3:-bfg-replacements.txt}"
APPLY_FLAG=false
if [ "${4:-}" = "--apply" ]; then
  APPLY_FLAG=true
fi

if [ ! -f "$BFG_JAR_PATH" ]; then
  echo "ERROR: BFG jar not found at: $BFG_JAR_PATH" >&2
  exit 3
fi

if [ ! -f "$REPLACEMENTS_FILE" ]; then
  echo "ERROR: replacements file not found: $REPLACEMENTS_FILE" >&2
  echo "Create it locally by copying bfg-replacements.template.txt and filling values." >&2
  exit 4
fi

echo "You are about to run BFG on a MIRROR clone of: $GIT_REMOTE_URL"
echo "Replacements file: $REPLACEMENTS_FILE"
echo "BFG jar: $BFG_JAR_PATH"
echo
read -r -p "Type 'YES' to continue (this will create a mirror clone and run BFG locally): " CONFIRM
if [ "$CONFIRM" != "YES" ]; then
  echo "Aborted by user." >&2
  exit 5
fi

TMPDIR=$(mktemp -d)
MIRROR_DIR="$TMPDIR/repo.git"
echo "Creating mirror clone in $MIRROR_DIR"
git clone --mirror "$GIT_REMOTE_URL" "$MIRROR_DIR"

echo "Running BFG (this will modify the mirror). Review output carefully."
java -jar "$BFG_JAR_PATH" --replace-text "$REPLACEMENTS_FILE" "$MIRROR_DIR"

echo "BFG finished. You should inspect the output above for replacements summary."

if [ "$APPLY_FLAG" = true ]; then
  echo "Preparing to apply changes and force-push. This will rewrite remote history."
  read -r -p "Type 'APPLY' to perform reflog expire, gc, and force-push: " FINAL
  if [ "$FINAL" != "APPLY" ]; then
    echo "Aborted final apply step. Mirror left at: $MIRROR_DIR" >&2
    exit 6
  fi

  echo "Expiring reflog and running aggressive GC in mirror..."
  git -C "$MIRROR_DIR" reflog expire --expire=now --all
  git -C "$MIRROR_DIR" gc --prune=now --aggressive

  echo "Force-pushing cleaned refs to origin (remote: $GIT_REMOTE_URL)"
  git -C "$MIRROR_DIR" push --force

  echo "Force-push complete. Mirror located at: $MIRROR_DIR (remove when satisfied)"
else
  echo "Dry-run mode: BFG has run but no force-push was made."
  echo "Inspect the mirror at: $MIRROR_DIR"
  echo "When ready to apply, re-run this script with --apply."
fi

echo "Done."

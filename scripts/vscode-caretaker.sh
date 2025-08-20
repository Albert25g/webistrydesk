#!/usr/bin/env bash
# Lightweight VS Code caretaker
# Usage: ./vscode-caretaker.sh pause|resume|status
# - pause: sends SIGSTOP to configured process names (pauses them)
# - resume: sends SIGCONT to previously paused (by name) processes
# - status: shows matched processes and their state

set -euo pipefail

MODE=${1:-status}
# Edit this list to match apps you want to pause while coding.
# Keep names short; this matches against `pgrep -f`.
PROC_NAMES=(
  "chrome"        # Google Chrome
  "chromium"      # Chromium
  "firefox"       # Firefox
  "brave"         # Brave browser
  "spotify"       # Spotify
  "dropbox"       # Dropbox
  "discord"       # Discord
  "slack"         # Slack
  "zoom"          # Zoom
  "teams"         # Microsoft Teams
)

# Don't touch these processes even if the names match.
# Add 'node' or others if you must, but be careful.
SAFE_PGREP_EXCLUDE=("code" "Code" "vscode" "org.gnome." "gnome-shell")

# Helper: check if PID matches any safe exclude patterns
is_safe_pid() {
  local pid=$1
  local cmd
  cmd=$(ps -o args= -p "$pid" 2>/dev/null || echo "")
  for ex in "${SAFE_PGREP_EXCLUDE[@]}"; do
    if echo "$cmd" | grep -q -- "$ex"; then
      return 0
    fi
  done
  return 1
}

# Build list of matched PIDs (unique)
matched_pids() {
  local name=$1
  # pgrep -f may match many; use ps for exact filtering
  pgrep -af -- "$name" | awk '{print $1}' || true
}

case "$MODE" in
  pause)
    echo "Pausing configured background processes..."
    for name in "${PROC_NAMES[@]}"; do
      for pid in $(matched_pids "$name"); do
        if [ -z "$pid" ]; then continue; fi
        if is_safe_pid "$pid"; then
          echo "  skipping safe PID $pid ($(ps -p $pid -o args= --no-headers))"
          continue
        fi
        # only pause processes not already stopped
        state=$(ps -o state= -p "$pid" 2>/dev/null || echo "")
        if echo "$state" | grep -q "T"; then
          echo "  PID $pid already stopped"
        else
          echo "  stopping PID $pid ($(ps -p $pid -o args= --no-headers))"
          kill -STOP "$pid" 2>/dev/null || true
        fi
      done
    done
    echo "Done. Use './scripts/vscode-caretaker.sh status' to verify, and './scripts/vscode-caretaker.sh resume' to continue them." ;;
  resume)
    echo "Resuming previously paused background processes (matching configured names)..."
    for name in "${PROC_NAMES[@]}"; do
      for pid in $(matched_pids "$name"); do
        if [ -z "$pid" ]; then continue; fi
        if is_safe_pid "$pid"; then
          echo "  skipping safe PID $pid ($(ps -p $pid -o args= --no-headers))"
          continue
        fi
        state=$(ps -o state= -p "$pid" 2>/dev/null || echo "")
        if echo "$state" | grep -q "T"; then
          echo "  continuing PID $pid ($(ps -p $pid -o args= --no-headers))"
          kill -CONT "$pid" 2>/dev/null || true
        else
          echo "  PID $pid not stopped (state=$state)"
        fi
      done
    done
    echo "Done." ;;
  status)
    echo "Status for configured names:"
    for name in "${PROC_NAMES[@]}"; do
      echo "--- $name ---"
      pgrep -af -- "$name" || echo "  (no match)"
    done ;;
  *)
    echo "Usage: $0 pause|resume|status" ; exit 2 ;;
esac

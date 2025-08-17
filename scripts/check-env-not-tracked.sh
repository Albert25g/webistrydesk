#!/usr/bin/env bash
# Exit non-zero if .env.local is tracked
if git ls-files --error-unmatch .env.local > /dev/null 2>&1; then
  echo "Error: .env.local is tracked. Remove it with: git rm --cached .env.local"
  exit 1
fi
# Optional: ensure required keys appear in .env.example
required=(NEXT_PUBLIC_FIREBASE_API_KEY NEXT_PUBLIC_FIREBASE_PROJECT_ID)
missing=0
for k in "${required[@]}"; do
  if ! grep -q "^${k}=" .env.example; then
    echo "Missing ${k} in .env.example"
    missing=1
  fi
done
if [ $missing -ne 0 ]; then
  echo "Please populate .env.example with required keys (copy values into .env.local locally)."
  exit 1
fi
exit 0

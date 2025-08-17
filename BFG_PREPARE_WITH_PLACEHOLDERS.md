BFG run plan (with placeholders)

This file contains exact BFG commands you can run later. It intentionally does NOT contain actual secret values — replace the placeholder tokens locally before running.

Workflow summary
----------------
1. Rotate exposed keys in your provider (Firebase) first.
2. On a machine that will run the scrub, create a mirror clone.
3. Prepare a replacements file (`bfg-replacements.txt`) by copying `bfg-replacements.template.txt` and filling in the actual keys locally (do NOT commit the filled file).
4. Run BFG using `--replace-text` to replace exact strings, or `--delete-files` to remove known files.
5. Inspect output, run `git reflog expire` + `git gc`, then `git push --force`.
6. Notify collaborators to re-clone.

Exact commands (run after filling `bfg-replacements.txt` locally)
-----------------------------------------------------------------
# 1. Mirror clone (work in a separate folder)

git clone --mirror git@github.com:OWNER/REPO.git
cd REPO.git

# 2. Copy the template to a working file and fill in the real key strings locally (do NOT commit)
cp ../bfg-replacements.template.txt ./bfg-replacements.txt
# edit bfg-replacements.txt to substitute placeholder tokens with the actual key strings

# 3. Run BFG with replace-text (this will replace exact string occurrences across history)
java -jar /path/to/bfg.jar --replace-text bfg-replacements.txt .

# Alternative: remove files by filename (if .env.local files were committed as files)
java -jar /path/to/bfg.jar --delete-files ".env.local" --delete-files "*.env.local.bak*" .

# 4. Cleanup and aggressive GC
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# 5. Force-push cleaned refs back to origin
git push --force

# 6. After push: Notify collaborators and have them re-clone

Notes and safety
----------------
- Replace-text is exact-match; provide the exact strings. If the string appears as part of larger data or has punctuation, include the full value.
- Do NOT add your filled `bfg-replacements.txt` to the repository. Keep it local and destroy it after use.
- Rotate the replaced keys immediately so the tokens you replaced are no longer valid.

If you want, I can generate a one-shot shell script template that performs these steps (it will still require you to edit and insert secrets locally before running). I will not run BFG or include actual keys in the repo.

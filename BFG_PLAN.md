Repository history-scrub plan using BFG (review before running)

Purpose
-------
This document contains a safe, repeatable plan to remove committed `.env.local` files or other secrets from repository history using the BFG Repo-Cleaner. This is destructive to history and requires a force-push; rotate secrets before doing this.

Prerequisites
-------------
- Local machine with `git`, `java` (BFG requires Java 8+), and `bfg.jar` installed.
- Have rotated any exposed keys already. Keep records of rotation.
- Confirm you will notify collaborators to re-clone the repository after the force-push.

Steps
-----
1. Create a mirror clone of the repo (work outside your working copy):

```bash
git clone --mirror git@github.com:OWNER/REPO.git
cd REPO.git
```

2. Run BFG: (example removes named files and file patterns)

```bash
# Delete files named .env.local and backups
java -jar /path/to/bfg.jar --delete-files ".env.local" --delete-files "*.env.local.bak*" .
```

3. Review BFG output. If it looks correct, expire reflogs and GC:

```bash
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

4. Force-push the cleaned refs back to origin:

```bash
git push --force
```

5. Instruct all collaborators to re-clone the repository (old clones still contain the secrets).

Notes
-----
- BFG is much faster and simpler than `git filter-branch`. It operates on a bare/mirror repo.
- If you need to remove specific secret strings (like API keys), use `--replace-text` with a file listing the exact strings — but exercise caution: pattern matches may cause unintended removals.
- After force-push, GitHub actions and other external integrations using existing checks may need reconfiguration.

I can walk through these steps interactively, prepare an exact `bfg` command for the key values in your environment (if you provide them), and produce a collaborator message. I will not run BFG or force-push without explicit confirmation.

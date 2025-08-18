Security notes and remediation steps for accidentally committed environment files

## Summary

Recent local `.env.local` files were present in the working tree and have been removed locally.
An `.env.example` with placeholder values was added and committed so contributors have a template.

## Recommendation (required)

1. Rotate any secrets that may have been exposed. For this project that means:

   - Rotate the Firebase API key / app credentials in the Firebase Console if they were linked to production resources you care about.
   - Revoke any service account keys or tokens that may have been included in other env files.

2. If secrets were pushed to any remote repository and you need to permanently remove them from history, follow the "History scrub" plan below. This is disruptive and requires a coordinated force-push—only perform it after rotating keys and notifying collaborators.

## Quick developer hygiene

- Do not commit `.env.local` or other secret files. This repo's `.gitignore` already ignores `*.env` and `.env.local`.
- Use deployment platform secrets (Vercel, Netlify, Cloud Run, etc.) or a secret manager for production secrets.
- Keep `.env.example` committed with placeholders only.

## History scrub (optional, destructive)

If you decide history must be purged, these are the high-level steps (BFG + force-push):

1. Rotate the exposed secrets immediately (do this first). Keep proof of rotation.
2. Make a fresh clone of the repository (mirror) on a safe machine:
   - git clone --mirror git@github.com:OWNER/REPO.git
3. Use the BFG repo-cleaner to remove the secret values or file paths. Example to remove files named `.env.local`:
   - bfg --delete-files ".env.local" repo.git
   - bfg --delete-files "_.env.local.bak_" repo.git
4. Review the BFG report, run `git reflog expire --expire=now --all && git gc --prune=now --aggressive` inside the mirrored repo, then force-push:
   - cd repo.git
   - git push --force
5. After force-push, notify all collaborators to re-clone the repository (old clones will still contain the secret data).

If you want, I can prepare the exact BFG commands for this repository and a short collaborator notification template before you run them.

## Contact and follow-up

If you'd like me to:

- prepare the full BFG script and collaborator instructions, say "prepare BFG";
- or only push the `SECURITY.md` commit (I will push it by default as requested), say "done" or "push".

Collaborator notification template for repository history scrub

Subject: Important: repository cleanup + required re-clone

Hi team,

We've identified that a local `.env.local` file containing development Firebase configuration was present in the repository working tree. We removed the local file and added an `.env.example` template.

If you have not yet rotated any keys, we've recommended rotating the Firebase keys as a precaution. If you have already rotated keys, thank you.

Planned action (if authorized):

- Optionally run a history scrub (BFG) to permanently remove `.env.local` and its backups from git history.
- This requires a force-push to `main` and will change commit history.

What you must do if we do this:

1. Back up any local changes you may have in your clones (stash them or create a topic branch).
2. After we complete the cleanup and force-push, delete your local clone and re-clone from the remote:
   - rm -rf your-local-repo
   - git clone git@github.com:OWNER/REPO.git
3. Re-apply or rebase any work if needed.

We will only proceed after rotating keys and with explicit approval.

If you have questions or concerns, reply here and we'll coordinate timing.

# Checklist before running BFG history-scrub

Complete every item below before running any destructive history-cleaning operation.

- [ ] Rotate all exposed keys (Firebase API keys, service accounts). Record rotation timestamps.
- [ ] Create and locally store a copy of `bfg-replacements.txt` from `bfg-replacements.template.txt`. Do NOT commit it.
- [ ] Notify collaborators and schedule a time window for the force-push. Ensure everyone can re-clone.
- [ ] Backup repository (mirror clone or other) and store it in a safe location.
- [ ] Verify `java -version` on the machine performing the scrub (Java 8+).
- [ ] Download `bfg.jar` from the official source and verify checksum.
- [ ] Run the BFG in dry-run mode first and inspect output carefully.
- [ ] After BFG run, run `git reflog expire --expire=now --all && git gc --prune=now --aggressive` and inspect repo size.
- [ ] Force-push cleaned refs only when confident, then notify collaborators to re-clone.

If you want, I can produce the exact one-shot commands for your environment or help coordinate rotation and a collaborator notification.

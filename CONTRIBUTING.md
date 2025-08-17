# Contributing

## Prereqs
- Node 20 LTS (`nvm use`)
- VS Code with Tailwind, ESLint, Prettier (recommended)

## Setup
```bash
cp .env.example .env.local   # fill the Firebase public values
nvm use
npm ci
npm run build && npm run start
```

## Workflow
- Create a branch: `feat/...`, `fix/...`, or `chore/...`
- Commit small and often, push, open a PR to `main`
- Keep branch fresh: `git fetch origin && git rebase origin/main`
- **Important**: While direct pushes to `main` are currently possible, they should be avoided. See `BRANCH_PROTECTION_SETUP.md` for enabling branch protection.

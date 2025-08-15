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
- No direct pushes to `main` (branch protection is on)

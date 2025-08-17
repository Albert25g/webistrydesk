## How to contribute

- Branch from `main` for fixes or `dev` for features.
- Open a PR and wait for the CI "CI" status check to pass before merging.
- PRs should have at least one approving review.
- Use `npm ci` locally and run `npm run dev` to test.

Merging
- Use the GitHub UI to merge; require the "CI" check to pass and at least one approval.
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

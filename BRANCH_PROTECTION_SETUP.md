# Branch Protection Setup Guide

## Current Status ⚠️

**The main branch is currently NOT protected.** Despite documentation claims, the GitHub API shows `"protected": false` for the main branch.

## Why Branch Protection Matters

Branch protection prevents:
- Direct pushes to main (bypassing code review)
- Broken code reaching production
- Accidental deletion of the main branch
- Deployment of unreviewed changes

## Required GitHub Settings

To enable branch protection for the `main` branch, a repository admin must configure these settings in GitHub:

### Navigate to Settings
1. Go to repository → Settings → Branches
2. Click "Add rule" or edit existing rule for `main`

### Required Protection Rules

```yaml
Branch name pattern: main
```

#### ✅ Required Status Checks
- [x] Require status checks to pass before merging
- [x] Require branches to be up to date before merging
- Status checks to require: `build-and-lint`
  - This matches the job name in `.github/workflows/ci.yml`

#### ✅ Require Pull Request Reviews
- [x] Require a pull request before merging
- [x] Require approvals: `1` (minimum)
- [x] Dismiss stale pull request approvals when new commits are pushed
- [x] Require review from CODEOWNERS (optional but recommended)

#### ✅ Additional Restrictions
- [x] Restrict pushes that create files in specified paths (optional)
- [x] Include administrators (recommended for consistency)
- [ ] Allow force pushes (should be unchecked)
- [ ] Allow deletions (should be unchecked)

## Verification

After enabling branch protection, verify with:

```bash
# This should return protection rules, not a 404
curl -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/Albert25g/webistrydesk/branches/main/protection
```

Or check that `"protected": true` appears in:
```bash
curl -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/Albert25g/webistrydesk/branches/main
```

## Supporting Configuration (Already in Place ✅)

This repository already has the required supporting infrastructure:

### GitHub Actions CI
- `.github/workflows/ci.yml` runs on PRs to main
- Includes build, lint, and environment checks
- Job name: `build-and-lint` (matches required status check)

### CODEOWNERS
- `.github/CODEOWNERS` designates @Albert25g as owner
- Enables automatic review requests

### Pre-push Hooks
- Husky hooks prevent pushing `.env.local` 
- Runs `npm run lint` before push

### Environment Configuration
- `.env.example` contains required Firebase keys
- CI validates environment configuration

## Workflow After Protection is Enabled

1. **Feature Development**:
   ```bash
   git checkout -b feat/my-feature
   # make changes
   git push origin feat/my-feature
   ```

2. **Pull Request Process**:
   - Open PR to `main`
   - CI automatically runs (`build-and-lint`)
   - Code owner (@Albert25g) reviews
   - PR can only merge after CI passes and approval

3. **Direct Push Prevention**:
   ```bash
   git push origin main  # ❌ This will be blocked
   ```

## Emergency Override (Admin Only)

If protection needs to be bypassed in an emergency:
1. Repository admin can temporarily disable protection
2. Make necessary changes
3. Re-enable protection immediately
4. Document the override in commit messages

---

**Note**: This document should be reviewed and updated when branch protection is actually enabled.
# Global Engineering Rules

## Git discipline
- Run `git status` before any file work
- Never force-push to any branch
- Never skip hooks with --no-verify
- Never use `git add .` or `git add -A` — stage files by name
- Never create a commit unless explicitly instructed by the user

## Branch and PR discipline
- Never push directly to main — all changes via pull request
- Confirm the correct base branch before opening a PR

## Deployment discipline
- Never deploy via CLI directly — all deployments through git push → CI/CD only
- Never modify environment variables without recording in repo env docs

## Secrets and credentials
- Never commit .env files, API keys, tokens, or credentials
- If a secret is found in staged files, remove it and warn the user

## Destructive operations
- Always confirm before: rm -rf, git reset --hard, dropping database tables

## Content approval
- Social media posts require human approval before publishing
- Email campaigns ALWAYS require human approval before sending — non-negotiable
- Translated content must be human-reviewed before publishing
- Financial commitments always require human approval

## Continuous improvement
- When a solution is confirmed working, invoke the /capture-learning skill

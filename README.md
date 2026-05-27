# LiteFeed

LiteFeed is a minimal Twitter/Threads-like social feed app focused on authentication, user profiles, follows, posts, likes, comments, and a personalized home feed. The project is built to practice full-stack architecture, social graph modeling, clean API design, and cursor-based pagination.

Minimal Yarn workspaces monorepo using Nx for task orchestration.

## Apps

- `apps/api` - NestJS backend
- `apps/web` - Next.js frontend

## Packages

- `packages/shared` - shared TypeScript package

## Getting started

```bash
corepack prepare yarn@4.9.2 --activate
yarn install
```

## Common commands

```bash
yarn dev:api
yarn dev:web
yarn build
yarn test
yarn lint
yarn typecheck
```

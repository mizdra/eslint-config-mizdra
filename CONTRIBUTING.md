# Contributing

This is a guide for contributors.

## How to dev

- `pnpm run lint`: Try static-checking

## How to release

- Wait for passing CI...
- ```bash
  git switch main && git pull
  ```
- ```bash
  pnpm version
  ```
- ```bash
  pnpm publish
  ```
- ```bash
  git push --follow-tags
  ```

# Contributing

This is a guide for contributors.

## How to dev

- `npm run lint`: Try static-checking

## How to release

- Wait for passing CI...
- ```bash
  git switch main && git pull
  ```
- ```bash
  npm version <major|minor|patch>
  ```
- ```bash
  npm publish
  ```
- ```bash
  git push --follow-tags
  ```

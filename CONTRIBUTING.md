# Contributing

This is a guide for contributors.

## How to dev

- `yarn run lint`: Try static-checking

## How to release

- Wait for passing CI...
- ```bash
  git switch main && git pull
  ```
- ```bash
  yarn version
  ```
- ```bash
  npm publish
  ```
- ```bash
  git push --follow-tags
  ```

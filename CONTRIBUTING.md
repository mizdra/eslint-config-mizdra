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

  - If you want to release a pre-release version, use the following command instead:
    ```bash
    npm version <premajor|preminor|prepatch> --preid=<alpha|beta>
    ```
  - If you want to update the pre-release version, use the following command instead:
    ```bash
    npm version prerelease
    ```

- ```bash
  git push --follow-tags
  ```

  - Release workflow will run automatically and publish to npmjs.com

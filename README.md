# eslint-config-mizdra

ESLint config for @mizdra

## Install

```bash
npm i -D @mizdra/eslint-config-mizdra eslint
```

## Usage

### With legacy config

```javascript
module.exports = {
  root: true,
  extends: ['@mizdra/mizdra', '@mizdra/mizdra/+react', '@mizdra/mizdra/+prettier'],
  parserOptions: { ecmaVersion: 2021 },
  env: { es2021: true, node: true, browser: true, jest: true },
  rules: {
    // Write your favorite rules
  },
  overrides: [
    // For TypeScript
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      extends: ['@mizdra/mizdra/+typescript', '@mizdra/mizdra/+prettier'],
      rules: {
        // Write your favorite rules for TypeScript
      },
    },
  ],
};
```

### With flat config

```javascript
// @ts-check

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';

const __dirname = new URL('.', import.meta.url).pathname;

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { ignores: ['**/dist'] },
  ...compat.extends('@mizdra/mizdra', '@mizdra/mizdra/+react'),
  {
    languageOptions: {
      ecmaVersion: 2021,
      globals: { ...globals.node, ...globals.browser, ...globals.jest },
    },
    rules: {
      // Write your favorite rules
    },
  },
  ...compat.config({
    overrides: [
      {
        // For TypeScript
        files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
        extends: ['../src/+typescript.js'],
        rules: {
          // Write your favorite rules for TypeScript
        },
      },
    ],
  }),
  ...compat.extends('@mizdra/mizdra/+prettier'),
];
```

## Built-in 3rd-party packages

When `eslint-config-mizdra` is installed the following packages are installed as its [`dependencies`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies) for usability. The installed version is always the latest.

- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)
- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## FAQ

### How can we upgrade built-in 3rd-party packages?

Uninstall `eslint-config-mizdra` and then reinstall it. It will then switch to the latest built-in 3rd-party packages.

```bash
npm un @mizdra/eslint-config-mizdra
npm i -D @mizdra/eslint-config-mizdra
```

### How do we pin built-in 3rd-party packages to a specific version?

Use the `overrides` field for [npm](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides) and [pnpm](https://pnpm.io/ja/package_json#pnpmoverrides), or the `resolutions` field for [yarn](https://yarnpkg.com/configuration/manifest/#resolutions).

```json
// package.json
{
  "overrides": {
    "@typescript-eslint/parser": "^4.0.0"
  }
}
```

In npm and pnpm, you can also match the version written in `dependencies`.

```json
// package.json
{
  "dependencies": {
    "@typescript-eslint/parser": "^4.0.0"
  },
  "overrides": {
    "@typescript-eslint/parser": "$@typescript-eslint/parser"
  }
}
```

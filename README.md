# eslint-config-mizdra

ESLint config for @mizdra

## Install

Install along with all compatible peerDeps:

```bash
# for npm
npx install-peerdeps @mizdra/eslint-config-mizdra --dev
# for pnpm
npx install-peerdeps @mizdra/eslint-config-mizdra --dev --pnpm
# for yarn
npx install-peerdeps @mizdra/eslint-config-mizdra --dev --yarn
```

If you don't need all the peerDeps, you can install them manually:

```bash
# basic
pnpm add -D @mizdra/eslint-config-mizdra eslint eslint-plugin-import

# for +typescript
pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript

# for +react
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks

# for +prettier
pnpm add -D eslint-config-prettier prettier
```

## Usage

### Legacy config

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

### Flat config

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
    // For TypeScript
    files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
    extends: ['@mizdra/mizdra/+typescript'],
    rules: {
      // Write your favorite rules for TypeScript
    },
  }),
  ...compat.extends('@mizdra/mizdra/+prettier'),
];
```

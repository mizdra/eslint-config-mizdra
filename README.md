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

```javascript
module.exports = {
  root: true,
  extends: ['@mizdra/mizdra', '@mizdra/mizdra/+typescript', '@mizdra/mizdra/+react', '@mizdra/mizdra/+prettier'],
  parserOptions: {
    ecmaVersion: 2019,
  },
  env: {
    es2019: true,
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    // your favorite rules
  },
};
```

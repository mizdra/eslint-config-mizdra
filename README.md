# eslint-config-mizdra

ESLint config for @mizdra

## Install

Install along with all compatible peerDeps:

```bash
npx install-peerdeps @mizdra/eslint-config-mizdra --dev --yarn
```

If you don't need all the peerDeps, you can install them manually:

```bash
# basic
yarn add -D @mizdra/eslint-config-mizdra eslint eslint-plugin-import

# for +typescript
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript

# for +react
yarn add -D eslint-plugin-react eslint-plugin-react-hooks

# for +prettier
yarn add -D eslint-config-prettier eslint-plugin-prettier prettier
```

## Usage

<!-- prettier-ignore-start -->

```javascript
module.exports = {
  root: true,
  extends: [
    '@mizdra/mizdra',
    '@mizdra/mizdra/+typescript',
    '@mizdra/mizdra/+react',
    '@mizdra/mizdra/+prettier',
  ],
  env: {
    node: true, // for jest
    jest: true, // for jest
  },
  rules: {
    // your favorite rules
  },
};
```

<!-- prettier-ignore-end -->

## Release

```console
$ git switch develop
$ git pull
$ yarn version --no-git-tag-version
$ git commit -am "vX.X.X"
$ gh pr create --web --base master --title "Release vX.X.X"
## When you merge PR, the package will be published automatically
```

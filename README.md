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

## Extra: Shared prettier configuration

`eslint-config-mizdra` also provides a [shared prettier configuration](https://prettier.io/docs/en/configuration.html#sharing-configurations). The shared prettier configuration is exported in `@mizdra/mizdra/.prettierrc.js`. It is available as follows.

If you have written the prettier configuration in `package.json`:

```json
{
  "name": "your-app",
  "version": "0.0.1",
  "prettier": "@mizdra/mizdra/.prettierrc.js"
}
```

If you have written the prettier configuration in `.prettierrc.json`:

```json
"@mizdra/mizdra/.prettierrc.js"
```

If you have written the prettier configuration in `.prettierrc.js`:

```js
module.exports = {
  ...require('@mizdra/mizdra/.prettierrc.js'),
  // You can override the options of a shared prettier
  // configuration in `.prettierrc.js`
  semi: false,
};
```

## Release

```console
$ git switch develop
$ git pull
$ yarn version --no-git-tag-version
$ git commit -am "vX.X.X"
$ gh pr create --web --base master --title "Release vX.X.X"
## When you merge PR, the package will be published automatically
```

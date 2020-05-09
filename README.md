# eslint-config-mizdra

ESLint config for @mizdra

## Usage

```console
$ yarn add -D @mizdra/eslint-config-mizdra
```

```javascript
module.exports = {
  root: true,
  extends: [
    // basic
    'mizdra',
    'mizdra/+typescript',
    'mizdra/+react',
    'mizdra/+prettier',
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

## Release

```console
$ git switch develop
$ yarn version
$ git push --tags
$ gh pr create --web --base master --title "Release vX.X.X"
## When you merge PR, the package will be published automatically
```

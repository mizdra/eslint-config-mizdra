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

    // prettier
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
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

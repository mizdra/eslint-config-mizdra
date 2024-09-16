# eslint-config-mizdra

ESLint config for @mizdra

## インストール

```bash
npm i -D @mizdra/eslint-config-mizdra eslint
```

## 使い方

### flat config から使う場合

```javascript
// @ts-check
import mizdra from '@mizdra/eslint-config-mizdra/flat';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['**/dist'] },
  ...mizdra.baseConfigs,
  ...mizdra.typescriptConfigs,
  ...mizdra.nodeConfigs,
  ...mizdra.reactConfigs,
  {
    files: ['**/*.{js,jsx,mjs,cjs}', '**/*.{ts,tsx,cts,mts}'],
    rules: {
      // Write your favorite rules
    },
  },
  mizdra.prettierConfig,
];
```

### legacy config から使う場合

```javascript
// @ts-check

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: ['@mizdra/mizdra', '@mizdra/mizdra/+react', '@mizdra/mizdra/+prettier'],
  parserOptions: { ecmaVersion: 2021 },
  env: { es2021: true, node: true, browser: true, jest: true },
  rules: {
    // プロジェクト固有のルールをここに書く
  },
  overrides: [
    // For TypeScript
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      extends: ['@mizdra/mizdra/+typescript', '@mizdra/mizdra/+prettier'],
      rules: {
        // TypeScript 向けのプロジェクト固有のルールをここに書く
      },
    },
  ],
};
```

## 組み込みの 3rd-party packages

利便性のため、`eslint-config-mizdra` は以下のパッケージを [`dependencies`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies) としてインストールします。そのため、これらのパッケージを `eslint-config-mizdra` を利用するプロジェクトの `devDependencies` としてインストールする必要はありません。

- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)
- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)
- [`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [`eslint-plugin-simple-import-sort`](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)

インストールされるバージョンは、`eslint-config-mizdra` をインストールした時点で最も最新のものです。一度インストールされると、package-lock.json などによりバージョンが固定されます。最新のバージョンにアップデートする方法や、好きなバージョンに固定する方法は、「[よくある質問](#よくある質問)」を参照してください。

## 利用可能な config

### `@mizdra/mizdra`

基本的な rule をまとめた config です。利用するには、`parserOptions.ecmaVersion` と `env.es20XX` を指定する必要があります。

```js
module.exports = {
  root: true,
  extends: ['@mizdra/mizdra'],
  parserOptions: { ecmaVersion: 2019 }, // required
  env: { es2019: true }, // required
};
```

### `@mizdra/mizdra/+node`

Node.js で実行されるコード向けの config です。利用するには、[`eslint-plugin-n` のドキュメントに従って Node.js のバージョンを指定しておく](https://github.com/eslint-community/eslint-plugin-n#configured-nodejs-version-range)必要があります。

```js
module.exports = {
  root: true,
  extends: ['@mizdra/mizdra', '@mizdra/mizdra/+node'],
  parserOptions: { ecmaVersion: 2019 },
  env: { es2019: true },
};
```

```json
// package.json
{
  "name": "your-module",
  "version": "1.0.0",
  "engines": {
    "node": ">=16.0.0" // required
  }
}
```

### `@mizdra/mizdra/+typescript`

TypeScript 向けの config です。利用するには、`overrides` オプションを使用し、TypeScript のコードだけに config が適用されるようにしてください。

```js
module.exports = {
  root: true,
  extends: ['@mizdra/mizdra'],
  parserOptions: { ecmaVersion: 2019 },
  env: { es2019: true },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      // NOTE: prettier を利用する場合は @mizdra/mizdra/+typescript の後に
      // @mizdra/mizdra/+prettier の extends も必要です。
      extends: ['@mizdra/mizdra/+typescript'],
      rules: {
        // TypeScript 向けのプロジェクト固有のルールをここに書く
      },
    },
  ],
};
```

### `@mizdra/mizdra/+react`

React を使っているコード向けの config です。`env.browser` を `true` にして利用することを推奨しています。

```js
module.exports = {
  root: true,
  extends: ['@mizdra/mizdra', '@mizdra/mizdra/+react'],
  parserOptions: { ecmaVersion: 2019 },
  env: {
    es2019: true,
    browser: true, // recommended
  },
};
```

### `@mizdra/mizdra/+prettier`

Prettier を使っているコード向けの config です。全ての config の最後に extends することを想定しています。

```js
module.exports = {
  root: true,
  extends: ['@mizdra/mizdra', '@mizdra/mizdra/+prettier'],
  parserOptions: { ecmaVersion: 2019 },
  env: { es2019: true },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      extends: ['@mizdra/mizdra/+typescript', '@mizdra/mizdra/+prettier'],
    },
  ],
};
```

## よくある質問

### 組み込みの 3rd-party packages をアップデートするには?

一度 `eslint-config-mizdra` をアンインストールしてから再度インストールしてください。組み込みの 3rd-party packages が最新のバージョンに切り替わります。

```bash
npm un @mizdra/eslint-config-mizdra
npm i -D @mizdra/eslint-config-mizdra
```

### 組み込みの 3rd-party packages を好きなバージョンに固定するには?

npm と pnpm では、`package.json` の `overrides` フィールドを使って、組み込みの 3rd-party packages を好きなバージョンにできます。yarn では、`package.json` の `resolutions` フィールドを使って、組み込みの 3rd-party packages のバージョンを固定できます。

- https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides
- https://yarnpkg.com/configuration/manifest/#resolutions
- https://pnpm.io/ja/package_json#pnpmoverrides

```json
// package.json
{
  "overrides": {
    "@typescript-eslint/parser": "^4.0.0"
  }
}
```

## Special Thanks

このパッケージは [teppeis/eslint-config-teppeis](https://github.com/teppeis/eslint-config-teppeis) を参考に設計されました。

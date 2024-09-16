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
import mizdra from '@mizdra/eslint-config-mizdra';

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

`@mizdra/eslint-config-mizdra@5.0.0` から Legacy Config サポートが削除されました。Legacy Config を使いたい場合は、`@mizdra/eslint-config-mizdra@^4.0.0` を使ってください。

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

### `baseConfigs`

基本的な rule をまとめた config です。

```js
// @ts-check
import mizdra from '@mizdra/eslint-config-mizdra';

/** @type {import('eslint').Linter.Config[]} */
export default [...mizdra.baseConfigs];
```

### `nodeConfigs`

Node.js で実行されるコード向けの config です。利用するには、[`eslint-plugin-n` のドキュメントに従って Node.js のバージョンを指定しておく](https://github.com/eslint-community/eslint-plugin-n#configured-nodejs-version-range)必要があります。

```js
// @ts-check
import mizdra from '@mizdra/eslint-config-mizdra';

/** @type {import('eslint').Linter.Config[]} */
export default [...mizdra.baseConfigs, ...mizdra.nodeConfigs];
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

### `typescriptConfigs`

TypeScript 向けの config です。

```js
// @ts-check
import mizdra from '@mizdra/eslint-config-mizdra';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...mizdra.baseConfigs,
  ...mizdra.typescriptConfigs,
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    rules: {
      // TypeScript 向けのプロジェクト固有のルールをここに書く
    },
  },
];
```

### `@mizdra/mizdra/+react`

React を使っているコード向けの config です。

```js
// @ts-check
import mizdra from '@mizdra/eslint-config-mizdra';

/** @type {import('eslint').Linter.Config[]} */
export default [...mizdra.baseConfigs, ...mizdra.reactConfigs];
```

### `@mizdra/mizdra/+prettier`

Prettier を使っているコード向けの config です。config list の最後に設定することを想定しています。

```js
// @ts-check
import mizdra from '@mizdra/eslint-config-mizdra';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['**/dist'] },
  ...mizdra.baseConfigs,
  ...mizdra.typescriptConfigs,
  {
    // Write your favorite configs
  },
  mizdra.prettierConfig,
];
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
    "typescript-eslint": "^8.5.0"
  }
}
```

## Special Thanks

このパッケージは [teppeis/eslint-config-teppeis](https://github.com/teppeis/eslint-config-teppeis) を参考に設計されました。

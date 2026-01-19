# eslint-config-mizdra

ESLint config for @mizdra

## インストール

```bash
npm i -D @mizdra/eslint-config-mizdra eslint
```

## 使い方

```javascript
import { defineConfig, globalIgnores } from 'eslint/config';
import mizdra from '@mizdra/eslint-config-mizdra';

export default defineConfig([
  globalIgnores(['**/dist']),
  ...mizdra.baseConfigs,
  ...mizdra.typescriptConfigs,
  ...mizdra.nodeConfigs,
  ...mizdra.reactConfigs,
  {
    rules: {
      // Write your favorite rules
    },
  },
  mizdra.prettierConfig,
]);
```

## 組み込みの 3rd-party packages について

利便性のため、`eslint-config-mizdra` は以下の ESLint Plugins を [`dependencies`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies) としてインストールします。そのため、`eslint-config-mizdra` を利用するプロジェクトの `devDependencies` にこれらを追加する必要はありません。

- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [`eslint-plugin-simple-import-sort`](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)

その他にもいくつかのパッケージを `dependencies` としてインストールしています。詳しくは [package.json](./package.json) の `dependencies` フィールドを参照してください。

インストールされるバージョンは、`eslint-config-mizdra` をインストールした時点で最も最新のものです。一度インストールされると、package-lock.json などによりバージョンが固定されます。最新のバージョンにアップデートする方法や、好きなバージョンに固定する方法は、「[よくある質問](#よくある質問)」を参照してください。

## 利用可能な config

### `baseConfigs`

基本的な rule をまとめた config です。

### `typescriptConfigs`

TypeScript 向けの config です。

### `nodeConfigs`

Node.js で実行されるコード向けの config です。利用するには、[`eslint-plugin-n` のドキュメントに従って Node.js のバージョンを指定しておく](https://github.com/eslint-community/eslint-plugin-n#configured-nodejs-version-range)必要があります。

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

### `reactConfigs`

React を使っているコード向けの config です。

### `prettierConfig`

Prettier を使っているコード向けの config です。必ず config list の最後に設定してください。

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

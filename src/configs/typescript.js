import tseslint from 'typescript-eslint';

import { tsPattern } from '../util.js';

// https://github.com/typescript-eslint/typescript-eslint/issues/9724 回避のためにキャストする
const recommendedTypeChecked = /** @type {import('eslint').Linter.Config[]} */ (
  tseslint.configs.recommendedTypeChecked
);

/** @type {import('eslint').Linter.Config[]} */
export const typescriptConfigs = [
  ...recommendedTypeChecked,
  {
    name: '@mizdra/eslint-config-mizdra/typescript',
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: /** @satisfies {import('eslint').Linter.RulesRecord} */ ({
      // ***** eslint *****

      // ***** @typescript-eslint *****
      // ** Supported Rules **
      // コーディングスタイル統一のため、`Array<T>` 形式を禁止して `T[]` の使用を推奨する
      '@typescript-eslint/array-type': 2,
      // ts-ignore は覚悟のある時にしか使わないので、いちいち lint error にする必要もない
      '@typescript-eslint/ban-ts-comment': 0,
      // コーディングスタイル統一のため、`<T> expr` 形式の型アサーションを禁止して `expr as T` の使用を推奨する
      '@typescript-eslint/consistent-type-assertions': 2,
      // コーディングスタイル統一のため、命名規則を設ける
      'camelcase': 0,
      '@typescript-eslint/naming-convention': [
        1,
        {
          selector: ['variable', 'default'],
          // `const CounterComponent = () => { ... }` や `const CONSTANT = 1;` のような変数が記述できるよう、
          // PascalCase や UPPER_CASE も許可する
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          // 末尾のアンダースコアは基本的に使われないのでデフォルトで禁止しておく。
          // 必要に応じて allow に上書きすることを想定している。
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'function',
          // React Component の宣言のために PascalCase も許可する
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'memberLike',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'property',
          // オブジェクトのプロパティには様々な命名規則の識別子が書かれるので、緩めにしておく
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'method',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        {
          // プロパティがクオートで囲われている場合は、どんなパターンも許可する
          // https://typescript-eslint.io/rules/naming-convention/#ignore-properties-that-require-quotes
          selector: 'property',
          modifiers: ['requiresQuotes'],
          format: null,
        },
      ],
      // 非推奨の API の仕様を極力避けてほしいので、非推奨の API の使用を禁止する
      '@typescript-eslint/no-deprecated': 2,
      // 可読性及びコードリーディングスタイルの統一のため、promise を返す関数では async を付けることを強制する
      // require type information
      '@typescript-eslint/promise-function-async': 2,
      // `Array#sort` はデフォルトで辞書順にソートされたりといくつか罠があるため、明示的に比較関数を渡すよう強制する
      // require type information
      '@typescript-eslint/require-array-sort-compare': 2,

      // ** Extension Rules **
      // 不要な constructor は定義しないように
      'no-useless-constructor': 0,
      '@typescript-eslint/no-useless-constructor': 2,
      // tsc の `noUnusedLocals`/`noUnusedParameters` を使うように
      'no-unused-vars': 0,
      '@typescript-eslint/no-unused-vars': 0,
      // 煩すぎるので off
      '@typescript-eslint/no-unsafe-argument': 0,
      // error だと未定義関数を呼び出した際に、実引数の部分まで赤く線が引かれて煩すぎる。
      // callee だけ赤く染まれば十分なので、このルールは off にしておく。
      '@typescript-eslint/no-unsafe-assignment': 0,
      // 今の所有用な場面に遭遇したことがないので off にしておく。
      '@typescript-eslint/no-unsafe-call': 0,
      // @typescript-eslint/no-explicit-any さえあれば十分なので off にしておく。
      '@typescript-eslint/no-unsafe-member-access': 0,
      // 煩すぎるので off
      '@typescript-eslint/no-unsafe-return': 0,
    }),
  },
].map((config) => ({ ...config, files: [tsPattern] }));

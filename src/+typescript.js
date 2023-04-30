// @ts-check
'use strict';

/** @satisfies {import('ts-essentials').DeepReadonly<import('eslint').Linter.BaseConfig>} */
module.exports = /** @type {const} */ ({
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],
  parserOptions: {
    // lint 対象のファイルに最も近い tsconfig.json を利用する。tsserver の挙動と同じなのでトラブルも少ないはず。
    // ref: https://typescript-eslint.io/architecture/parser#project
    project: true,
  },
  rules: {
    // ***** eslint *****
    // tsc が 'use strict' を付与してくれるので、tsc に任せる
    'strict': 0,
    // 存在しない item の import は tsc が検知してくれるので、tsc に任せる
    // ref: https://github.com/benmosher/eslint-plugin-import/issues/1341
    'import/named': 0,

    // ***** @typescript-eslint *****
    // ** Supported Rules **
    // コーディングスタイル統一のため、`Array<T>` 形式を禁止して `T[]` の使用を推奨する
    '@typescript-eslint/array-type': 2,
    // ts-ignore は覚悟のある時にしか使わないので、いちいち lint error にする必要もない
    '@typescript-eslint/ban-ts-comment': 0,
    // コーディングスタイル統一のため、`<T> expr` 形式の型アサーションを禁止して `expr as T` の使用を推奨する
    '@typescript-eslint/consistent-type-assertions': 2,
    // 強力すぎるため off に。プロジェクトごとに個別に ON にすることを想定している。
    '@typescript-eslint/explicit-module-boundary-types': 0,
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
    // `require` は静的解析と相性が悪いため禁止する。
    // 代わりに ES Modules の使用を推奨する。
    '@typescript-eslint/no-require-imports': 2,
    // 可読性及びコードリーディングスタイルの統一のため、promise を返す関数では async を付けることを強制する
    // require type information
    '@typescript-eslint/promise-function-async': 2,
    // `Array#sort` はデフォルトで辞書順にソートされたりといくつか罠があるため、明示的に比較関数を渡すよう強制する
    // require type information
    '@typescript-eslint/require-array-sort-compare': 2,

    // ** Extension Rules **
    // 型安全のため、`Array` コンストラクタを使って配列を生成する時は必ず型パラメーターを渡すよう強制する
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    '@typescript-eslint/no-array-constructor': 2,
    // `string | string` のような重複した型を定義するのはミスの可能性が高いので禁止する
    '@typescript-eslint/no-duplicate-type-constituents': 2,
    // コードを書いている途中によく怒られて煩すぎるので off
    '@typescript-eslint/no-empty-function': 0,
    // eval 及び eval 相当の API はセキュリティとパフォーマンスのリスクがあるので使用を禁止する
    // require type information
    'no-implied-eval': 0,
    '@typescript-eslint/no-implied-eval': 2,
    // リテラル値を throw するコードはミスのはずなので禁止
    'no-throw-literal': 0,
    '@typescript-eslint/no-throw-literal': 2,
    // 不要な constructor は定義しないように
    'no-useless-constructor': 0,
    '@typescript-eslint/no-useless-constructor': 2,
    // tsc の `noUnusedLocals` や `noUnusedParameters` よりも `_` で無視できるパターンが多くて便利なので有効
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
        caughtErrors: 'all',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
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
    // 一貫性のために `return await p` を `return p` に強制する
    'no-return-await': 0,
    '@typescript-eslint/return-await': 2,
  },
});

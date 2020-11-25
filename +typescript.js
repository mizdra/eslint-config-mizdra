// @ts-check

/** @type import('eslint').Linter.ConfigOverride */
const configOverrideForTS = {
  // *.js などではこれらのルールが適用されないようにする
  files: ['*.ts', '*.tsx'],
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // import
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    // eslint
    'strict': 0,

    // import
    // eslint ではモジュールの解決に失敗することがあるので, TypeScriptに任せる
    // ref: https://github.com/benmosher/eslint-plugin-import/issues/1341
    'import/named': 0,

    // @typescript-eslint
    // 可読性のため、オーバーロードされるメンバーを定義する場合は連続して定義するよう強制する
    '@typescript-eslint/adjacent-overload-signatures': 2,
    // コーディングスタイル統一のため、`Array<T>` 形式を禁止して `T[]` の使用を推奨する
    '@typescript-eslint/array-type': 2,
    // thenable な値の await は仕様上許可されているものの、大抵コーディングミスなので禁止する
    // require type information
    '@typescript-eslint/await-thenable': 2,
    // opinionated
    // コーディングスタイル統一のため、`<T> expr` 形式の型アサーションを禁止して `expr as T` の使用を推奨する
    '@typescript-eslint/consistent-type-assertions': 2,
    // 配列の for-in はハマりやすいので禁止する
    // require type information
    '@typescript-eslint/no-for-in-array': 2,
    // eval 及び eval 相当の API はセキュリティとパフォーマンスのリスクがあるので使用を禁止する
    // require type information
    '@typescript-eslint/no-implied-eval': 2,
    // 不適切な場所での不適切な promise の使用を禁止する。
    // 意図的に no-misused-promises に警告されるような使い方をしたい場合は、適時ルールを off にすることを想定。
    // require type information
    '@typescript-eslint/no-misused-promises': 2,
    // namespace は ES Modules 登場以前の古い書き方であるため、namespace を使った型宣言を禁止する。
    // 代わりに `declare module 'foo' {}` の使用を推奨する。
    // ただし third-party ライブラリの型定義ファイルを書く際に、namespace を使わないと上手く型付けできない場合がある。
    // そうした時は適時ルールを off にすることを想定。
    '@typescript-eslint/no-namespace': [2, { allowDeclarations: true }],
    // `require` は静的解析と相性が悪いため禁止する。
    // 代わりに ES Modules の使用を推奨する。
    '@typescript-eslint/no-require-imports': 2,
    // @typescript-eslint の no-unused-vars-experimental は正確ではないので, tsc の noUnused* オプションで代用する
    // ref: https://github.com/typescript-eslint/typescript-eslint/issues/1856
    '@typescript-eslint/no-unused-vars-experimental': 0,
    // `String#match` より `RegExp#exec` のほうがパフォーマンスが良いため、そちらを推奨する
    // require type information
    '@typescript-eslint/prefer-regexp-exec': 2,
    // 可読性及びコードリーディングスタイルの統一のため、promise を返す関数では async を付けることを強制する
    // require type information
    '@typescript-eslint/promise-function-async': 2,
    // `Array#sort` はデフォルトで辞書順にソートされたりといくつか罠があるため、明示的に比較関数を渡すよう強制する
    // require type information
    '@typescript-eslint/require-array-sort-compare': 2,
    // triple slash directives は型定義を読み込む古い方式なため、禁止する。
    // 代わりに `import { ... } from '...'` や `import type { ... } from '...'` による読み込みを推奨する。
    // 使用しているフレームワークが triple slash directives を使ったコーディングを要求してくる場合などは、適時ルールを off にすることを想定。
    '@typescript-eslint/triple-slash-reference': 2,
    // bound されていないメソッドを単体で呼び出すのは大抵コーディングミスであるため、禁止する
    // require type information
    '@typescript-eslint/unbound-method': 2,
    // 型安全のため、`Array` コンストラクタを使って配列を生成する時は必ず型パラメーターを渡すよう強制する
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 0,
    '@typescript-eslint/no-array-constructor': 2,
  },
};

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  overrides: [configOverrideForTS],
};

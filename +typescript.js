// @ts-check

/** @type import('eslint').Linter.ConfigOverride */
const configOverrideForTS = {
  // *.js などではこれらのルールが適用されないようにする
  files: ['*.ts', '*.tsx'],
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
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

    // @typescript-eslint (Basic Rules)
    // コーディングスタイル統一のため、`Array<T>` 形式を禁止して `T[]` の使用を推奨する
    '@typescript-eslint/array-type': 2,
    // opinionated
    // コーディングスタイル統一のため、`<T> expr` 形式の型アサーションを禁止して `expr as T` の使用を推奨する
    '@typescript-eslint/consistent-type-assertions': 2,
    // 強力すぎるため off に
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // 強力すぎるため off に
    '@typescript-eslint/no-explicit-any': 0,
    // 強力すぎるため off に
    // require type information
    '@typescript-eslint/no-floating-promises': 0,
    // `require` は静的解析と相性が悪いため禁止する。
    // 代わりに ES Modules の使用を推奨する。
    '@typescript-eslint/no-require-imports': 2,
    // 可読性及びコードリーディングスタイルの統一のため、promise を返す関数では async を付けることを強制する
    // require type information
    '@typescript-eslint/promise-function-async': 2,
    // `Array#sort` はデフォルトで辞書順にソートされたりといくつか罠があるため、明示的に比較関数を渡すよう強制する
    // require type information
    '@typescript-eslint/require-array-sort-compare': 2,

    // @typescript-eslint (Extension Rules)
    // 型安全のため、`Array` コンストラクタを使って配列を生成する時は必ず型パラメーターを渡すよう強制する
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    '@typescript-eslint/no-array-constructor': 2,
    // eval 及び eval 相当の API はセキュリティとパフォーマンスのリスクがあるので使用を禁止する
    // require type information
    '@typescript-eslint/no-implied-eval': 2,
    // @typescript-eslint の no-unused-vars-experimental は正確ではないので, tsc の noUnused* オプションで代用する
    // ref: https://github.com/typescript-eslint/typescript-eslint/issues/1856
    '@typescript-eslint/no-unused-vars-experimental': 0,
  },
};

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  overrides: [configOverrideForTS],
};

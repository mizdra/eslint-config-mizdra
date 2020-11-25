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

    // typescript
    '@typescript-eslint/adjacent-overload-signatures': 2,
    // opinionated
    '@typescript-eslint/array-type': 2,
    // require type information
    '@typescript-eslint/await-thenable': 2,
    // opinionated
    '@typescript-eslint/consistent-type-assertions': 2,
    // require type information
    '@typescript-eslint/no-for-in-array': 2,
    // require type information
    '@typescript-eslint/no-implied-eval': 2,
    // require type information
    '@typescript-eslint/no-misused-promises': 2,
    '@typescript-eslint/no-namespace': [2, { allowDeclarations: true }],
    '@typescript-eslint/no-require-imports': 2,
    // @typescript-eslint の no-unused-vars-experimental は正確ではないので, tsc の noUnused* オプションで代用する
    // ref: https://github.com/typescript-eslint/typescript-eslint/issues/1856
    '@typescript-eslint/no-unused-vars-experimental': 0,
    // opinionated, require type information
    '@typescript-eslint/prefer-regexp-exec': 2,
    // opinionated, require type information
    '@typescript-eslint/promise-function-async': 2,
    // require type information
    '@typescript-eslint/require-array-sort-compare': 2,
    // opinionated, require type information
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/triple-slash-reference': 2,
    // require type information
    '@typescript-eslint/unbound-method': 2,
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 0,
    '@typescript-eslint/no-array-constructor': 2,
  },
};

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  overrides: [configOverrideForTS],
};

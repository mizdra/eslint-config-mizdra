// @ts-check

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  plugins: ['import'],
  env: {
    es6: true,
  },
  extends: [
    // eslint
    'eslint:recommended',

    // import
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // eslint
    'no-var': 2,
    // コーディングスタイル統一のため、`const fn = function() { ... }` 形式の関数定義を禁止する。
    // 代わりに `function fn() { ... }` か `const fn = () => { ... }` 形式の関数定義を推奨する。
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],
    // `_` 始まりの変数は未使用であっても警告しないように
    'no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    // 可読性のため、`let` でなくて良い場面では `const` を使うよう強制する
    'prefer-const': 2,
    // ASI による複雑怪奇な挙動に付き合わなくて済むよう、セミコロンを必須とする
    'semi': [2, 'always'],
    // 生の *.js では `'use strict';` を必須とする
    'strict': [2, 'global'],

    // import
    // default export は tsserver と相性が悪いので禁止する。
    // `React.lazy` を使いたいなど、どうしても default export したい場合は適時 disable してもらうことを想定。
    // ref: https://typescript-jp.gitbook.io/deep-dive/main-1/defaultisbad
    'import/no-default-export': 2,
    // import 文の並びについて思考するのに時間を費やすのは勿体ないので、一律でソートしてしまう
    'import/order': [2, { alphabetize: { order: 'asc' } }],
  },
};

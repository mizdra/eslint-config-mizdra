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
    // eslint や @typescript-eslint の no-unused-vars は正確ではない & 未使用変数の解析は非常にコストの掛かる作業のため tsc に任せ、eslint ではやらないようにする。
    // *.ts なら tsc の noUnused* オプションで代用する。*.js の場合は *.ts のように tsc を使って CI で未使用変数の使用を弾くことはできないが、
    // tsserver がヒントを出してくれるので、それで妥協してもらう。
    // ref: https://github.com/typescript-eslint/typescript-eslint/issues/1856
    'no-unused-vars': 0,
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
    // `@material-ui/{core,icons}` を直接 import するとビルドや tsserver の応答が遅くなるので,
    // `@material-ui/{core,icons}` の import を禁止する
    // ref: https://material-ui.com/guides/minimizing-bundle-size/#how-to-reduce-the-bundle-size
    'no-restricted-imports': ['error', { paths: ['@material-ui/core', '@material-ui/icons'] }],
  },
};

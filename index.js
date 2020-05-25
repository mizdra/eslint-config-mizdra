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
    'no-console': 0,
    'no-var': 2,
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],
    'prefer-const': 2,
    semi: [2, 'always'],
    strict: [2, 'global'],

    // import
    // default export は tsserver と相性が悪いので禁止する
    // ref: https://typescript-jp.gitbook.io/deep-dive/main-1/defaultisbad
    'import/no-default-export': 2,
    // `@material-ui/{core,icons}` を直接 import するとビルドや tsserver の応答が遅くなるので,
    // `@material-ui/{core,icons}` の import を禁止する
    // ref: https://material-ui.com/guides/minimizing-bundle-size/#how-to-reduce-the-bundle-size
    'no-restricted-imports': ['error', { paths: ['@material-ui/core', '@material-ui/icons'] }],
  },
};

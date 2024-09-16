// @ts-check

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: ['../src/index.cjs'],
  parserOptions: { ecmaVersion: 2021 },
  env: { es2021: true },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['+typescript.ts'],
      extends: ['../src/+typescript.cjs'],
    },
    {
      files: ['+node.cjs'],
      extends: ['../src/+node.cjs'],
    },
    // TODO: ESLint v9 + Legacy Config では eslint-plugin-react-hooks が動かないので、一旦コメントアウト
    // {
    //   files: ['+react.tsx'],
    //   extends: ['../src/+react.cjs'],
    // },
    {
      files: ['+prettier.cjs'],
      extends: ['../src/+prettier.cjs'],
    },
  ],
};

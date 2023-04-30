// @ts-check

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: ['../src/index.js'],
  parserOptions: { ecmaVersion: 2021 },
  env: { es2021: true },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['+typescript.ts'],
      extends: ['../src/+typescript.js'],
    },
    {
      files: ['+node.js'],
      extends: ['../src/+node.js'],
    },
    {
      files: ['+react.ts'],
      extends: ['../src/+react.js'],
    },
    {
      files: ['+prettier.js'],
      extends: ['../src/+prettier.js'],
    },
  ],
};

// @ts-check

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  root: true,
  extends: ['../src/index.js', '../src/+react.js', '../src/+prettier.js'],
  parserOptions: { ecmaVersion: 2021 },
  env: { es2021: true },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      extends: ['../src/+typescript.js', '../src/+prettier.js'],
    },
  ],
};

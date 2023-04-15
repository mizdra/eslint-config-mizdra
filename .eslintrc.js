// @ts-check

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  root: true,
  extends: ['./index.js', './+prettier.js'],
  parserOptions: { ecmaVersion: 2021 },
  env: { es2021: true, node: true },
};

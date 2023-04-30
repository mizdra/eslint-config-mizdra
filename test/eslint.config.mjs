// @ts-check
/* eslint-disable */

// @ts-expect-error
import { FlatCompat } from '@eslint/eslintrc';
// @ts-expect-error
import js from '@eslint/js';

const __dirname = new URL('.', import.meta.url).pathname;

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['.eslintrc.js', 'eslint.config.mjs'],
  },
  ...compat.extends('../src/index.js'),
  {
    languageOptions: { ecmaVersion: 2021 },
    linterOptions: { reportUnusedDisableDirectives: true },
  },
  ...compat.config({
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
        files: ['+react.js'],
        extends: ['../src/+react.js'],
      },
      {
        files: ['+prettier.js'],
        extends: ['../src/+prettier.js'],
      },
    ],
  }),
  ...compat.extends('../src/+prettier.js'),
];

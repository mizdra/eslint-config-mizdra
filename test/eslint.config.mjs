// @ts-check
/* eslint-disable */

import { FlatCompat } from '@eslint/eslintrc';
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
  ...compat.extends('../src/index.js', '../src/+react.js'),
  {
    languageOptions: { ecmaVersion: 2021 },
    linterOptions: { reportUnusedDisableDirectives: true },
  },
  ...compat.config({
    overrides: [
      {
        // For TypeScript
        files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
        extends: ['../src/+typescript.js'],
      },
    ],
  }),
  ...compat.extends('../src/+prettier.js'),
];

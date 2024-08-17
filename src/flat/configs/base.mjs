import js from '@eslint/js';

import legacyBase from '../../index.js';
import { commonjsPattern, compat, jsPattern, tsPattern } from '../util.mjs';

export const baseConfigs = /** @satisfies {import('eslint').Linter.Config[]} */ ([
  { ...js.configs.recommended, files: [jsPattern, tsPattern] },
  ...compat.extends('plugin:import-x/recommended').map((config) => ({ ...config, files: [jsPattern, tsPattern] })),
  {
    name: '@mizdra/eslint-config-mizdra/base',
    files: [jsPattern, tsPattern],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    languageOptions: {
      sourceType: 'module',
      // languageOptions.parserOptions.ecmaVersion を 2015 以上にしないと、
      // sourceType: 'module' が使えないので、'latest' にする。
      // MEMO: languageOptions.ecmaVersion は 'latest' がデフォルトだが、
      // languageOptions.parserOptions.ecmaVersion は何故か 'latest' がデフォルトではない。
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: legacyBase.rules,
  },
  {
    name: '@mizdra/eslint-config-mizdra/base/commonjs',
    files: [commonjsPattern],
    languageOptions: {
      sourceType: 'commonjs',
      parserOptions: {
        sourceType: 'commonjs',
      },
    },
  },
]);

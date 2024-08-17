import js from '@eslint/js';

import legacyBase from '../../index.js';
import { compat, jsPattern, tsPattern } from '../util.mjs';

export const baseConfigs = /** @satisfies {import('eslint').Linter.Config[]} */ ([
  js.configs.recommended,
  ...compat.extends('plugin:import-x/recommended'),
  {
    name: '@mizdra/eslint-config-mizdra/base',
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
      },
    },
    rules: legacyBase.rules,
  },
]).map((config) => ({ ...config, files: [jsPattern, tsPattern] }));

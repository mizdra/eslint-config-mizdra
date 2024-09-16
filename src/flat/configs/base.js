import js from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import legacyBase from '../../index.cjs';
import { commonjsPattern, jsPattern, tsPattern } from '../util.js';

export const baseConfigs = /** @satisfies {import('eslint').Linter.Config[]} */ ([
  { ...js.configs.recommended, files: [jsPattern, tsPattern] },
  { plugins: { 'simple-import-sort': simpleImportSort } },
  {
    name: '@mizdra/eslint-config-mizdra/base',
    files: [jsPattern, tsPattern],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    languageOptions: {
      sourceType: 'module',
      parserOptions: {
        // Flat Config では `parserOptions` に `ecmaVersion`/`sourceType` は存在しないことになっているが、
        // Legacy Config 時代に作られた custom rule では以前として `parserOptions.ecmaVersion` などを参照している。
        // そのため、`parserOptions` に `ecmaVersion`/`sourceType` を設定しておく。
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

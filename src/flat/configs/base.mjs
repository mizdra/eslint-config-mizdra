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
    },
    rules: legacyBase.rules,
  },
]).map((config) => ({ ...config, files: [jsPattern, tsPattern] }));

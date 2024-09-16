import { fixupConfigRules } from '@eslint/compat';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

import legacyReact from '../../+react.js';
import { compat, jsPattern, tsPattern } from '../util.mjs';

export const reactConfigs = /** @satisfies {import('eslint').Linter.Config[]} */ ([
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  ...fixupConfigRules(compat.extends('plugin:react-hooks/recommended')),
  {
    name: '@mizdra/eslint-config-mizdra/react',
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: legacyReact.rules,
  },
]).map((config) => ({ ...config, files: [jsPattern, tsPattern] }));

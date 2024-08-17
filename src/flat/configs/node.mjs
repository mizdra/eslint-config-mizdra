import eslintPluginUnicorn from 'eslint-plugin-unicorn';

import globals from 'globals';
import legacyNode from '../../+node.js';
import { compat, jsPattern, tsPattern } from '../util.mjs';

export const nodeConfigs = /** @satisfies {import('eslint').Linter.Config[]} */ ([
  ...compat.extends('plugin:n/recommended'),
  {
    name: '@mizdra/eslint-config-mizdra/node',
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: legacyNode.rules,
  },
]).map((config) => ({ ...config, files: [jsPattern, tsPattern] }));

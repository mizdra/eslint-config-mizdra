import globals from 'globals';

import legacyNode from '../../+node.cjs';
import { compat, jsPattern, tsPattern } from '../util.js';

export const nodeConfigs = /** @satisfies {import('eslint').Linter.Config[]} */ ([
  ...compat.extends('plugin:n/recommended'),
  {
    name: '@mizdra/eslint-config-mizdra/node',
    languageOptions: {
      globals: globals.node,
    },
    rules: legacyNode.rules,
  },
]).map((config) => ({ ...config, files: [jsPattern, tsPattern] }));

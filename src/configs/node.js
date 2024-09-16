import globals from 'globals';

import { compat, jsPattern, tsPattern } from '../util.js';

export const nodeConfigs = /** @satisfies {import('eslint').Linter.Config[]} */ ([
  ...compat.extends('plugin:n/recommended'),
  {
    name: '@mizdra/eslint-config-mizdra/node',
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      // tsc で検知できるので off
      'n/no-missing-import': 0,
      // tsc で検知できるので off
      'n/no-missing-require': 0,
      // `import fs from 'fs'` ではなく `import fs from 'node:fs'` と書くように
      'n/prefer-node-protocol': 2,
    },
  },
]).map((config) => ({ ...config, files: [jsPattern, tsPattern] }));

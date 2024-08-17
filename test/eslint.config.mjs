// @ts-check
/* eslint-disable */

import mizdra from '../src/flat/index.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['.eslintrc.js', 'eslint.config.mjs'] },
  ...mizdra.baseConfigs,
  ...mizdra.typescriptConfigs,
  ...mizdra.nodeConfigs,
  ...mizdra.reactConfigs,
  mizdra.prettierConfig,
];

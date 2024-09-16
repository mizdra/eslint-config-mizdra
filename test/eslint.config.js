// @ts-check

import mizdra from '../src/flat/index.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['.eslintrc.cjs', 'eslint.config.js'] },
  ...mizdra.baseConfigs,
  ...mizdra.typescriptConfigs,
  ...mizdra.nodeConfigs,
  ...mizdra.reactConfigs,
  mizdra.prettierConfig,
];

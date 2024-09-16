// @ts-check

import mizdra from '../src/index.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['eslint.config.js'] },
  ...mizdra.baseConfigs,
  ...mizdra.typescriptConfigs,
  ...mizdra.nodeConfigs,
  ...mizdra.reactConfigs,
  mizdra.prettierConfig,
];

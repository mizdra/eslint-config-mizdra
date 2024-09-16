// @ts-check
import mizdra from './src/flat/index.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['test'] },
  ...mizdra.baseConfigs,
  ...mizdra.typescriptConfigs,
  ...mizdra.nodeConfigs,
  mizdra.prettierConfig,
];

// @ts-check
import mizdra from './src/index.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['test'] },
  ...mizdra.baseConfigs,
  ...mizdra.typescriptConfigs,
  ...mizdra.nodeConfigs,
  mizdra.prettierConfig,
];

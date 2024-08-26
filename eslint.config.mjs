// @ts-check
import mizdra from './src/flat/index.mjs';

/** @type {import('eslint').Linter.Config[]} */
// eslint-disable-next-line import-x/no-default-export
export default [
  { ignores: ['test'] },
  ...mizdra.baseConfigs,
  ...mizdra.typescriptConfigs,
  ...mizdra.nodeConfigs,
  mizdra.prettierConfig,
];

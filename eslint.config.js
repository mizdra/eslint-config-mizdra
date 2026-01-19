// @ts-check
import { defineConfig, globalIgnores } from 'eslint/config';
import mizdra from './src/index.js';

export default defineConfig([
  globalIgnores(['test']),
  ...mizdra.baseConfigs,
  ...mizdra.typescriptConfigs,
  ...mizdra.nodeConfigs,
  mizdra.prettierConfig,
]);

import eslintConfigPrettier from 'eslint-config-prettier';
import { jsPattern, tsPattern } from '../util.js';

/** @type {import('eslint').Linter.Config} */
export const prettierConfig = {
  ...eslintConfigPrettier,
  name: '@mizdra/eslint-config-mizdra/prettier',
  files: [jsPattern, tsPattern],
};

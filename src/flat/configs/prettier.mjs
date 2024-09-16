import eslintConfigPrettier from 'eslint-config-prettier';

import { jsPattern, tsPattern } from '../util.mjs';

export const prettierConfig = /** @satisfies {import('eslint').Linter.Config} */ ({
  ...eslintConfigPrettier,
  name: '@mizdra/eslint-config-mizdra/prettier',
  files: [jsPattern, tsPattern],
});

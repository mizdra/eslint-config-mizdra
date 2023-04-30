// @ts-check
'use strict';

/** @satisfies {import('ts-essentials').DeepReadonly<import('eslint').Linter.BaseConfig>} */
module.exports = /** @type {const} */ ({
  extends: ['plugin:n/recommended'],
  plugins: ['unicorn'],
  rules: {
    // import/no-extraneous-dependencies と重複するので off
    'n/no-extraneous-import': 0,
    // tsc で検知できるので off
    'n/no-missing-import': 0,
    // tsc で検知できるので off
    'n/no-missing-require': 0,
    // `import fs from 'fs'` ではなく `import fs from 'node:fs'` と書くように
    'unicorn/prefer-node-protocol': 2,
  },
});

// @ts-check
'use strict';

/** @satisfies {import('eslint').Linter.BaseConfig} */
module.exports = /** @type {const} */ ({
  extends: ['plugin:n/recommended'],
  rules: {
    // tsc で検知できるので off
    'n/no-missing-import': 0,
    // tsc で検知できるので off
    'n/no-missing-require': 0,
    // `import fs from 'fs'` ではなく `import fs from 'node:fs'` と書くように
    'n/prefer-node-protocol': 2,
  },
});

// @ts-check
'use strict';

const { builtinModules } = require('node:module');

const noRestrictedConfig = {
  paths: builtinModules.map((builtinModule) => ({
    name: builtinModule,
    message: `Use \`node:${builtinModule}\` instead of \`${builtinModule}\`.`,
  })),
};

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['plugin:n/recommended'],
  rules: {
    // import/no-extraneous-dependencies と重複するので off
    'n/no-extraneous-import': 0,
    // `import fs from 'fs'` ではなく `import fs from 'node:fs'` と書くように
    'no-restricted-imports': [2, noRestrictedConfig],
    // no-restricted-imports の require 版
    'no-restricted-modules': [2, noRestrictedConfig],
  },
};

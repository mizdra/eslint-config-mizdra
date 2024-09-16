import tseslint from 'typescript-eslint';

import legacyTypeScriptConfig from '../../+typescript.cjs';
import { tsPattern } from '../util.js';

// https://github.com/typescript-eslint/typescript-eslint/issues/9724 回避のためにキャストする
const recommendedTypeChecked = /** @type {import('eslint').Linter.Config[]} */ (
  tseslint.configs.recommendedTypeChecked
);

export const typescriptConfigs = /** @satisfies {import('eslint').Linter.Config[]} */ ([
  ...recommendedTypeChecked,
  {
    name: '@mizdra/eslint-config-mizdra/typescript',
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: legacyTypeScriptConfig.rules,
  },
]).map((config) => ({ ...config, files: [tsPattern] }));

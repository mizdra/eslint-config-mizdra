import { fixupConfigRules } from '@eslint/compat';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

import { compat, jsPattern, tsPattern } from '../util.js';

export const reactConfigs = /** @satisfies {import('eslint').Linter.Config[]} */ ([
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  ...fixupConfigRules(compat.extends('plugin:react-hooks/recommended')),
  {
    name: '@mizdra/eslint-config-mizdra/react',
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // react
      // button タグの type 属性は省略すると文脈によってデフォルト値が変わってややこしいので、指定を必須にする
      'react/button-has-type': 2,
      // セキュリティ上の理由から、iframe には sandbox 属性を付与すべき
      'react/iframe-missing-sandbox': 2,
      // `disabled={true}` を `disabled` と書くように
      'react/jsx-boolean-value': 2,
      // `foo={'bar'}` を `foo="bar"` と書くように
      'react/jsx-curly-brace-presence': ['error', 'never'],
      // Tabnabbing 対策悪のため、target="_blank" な a タグには rel="noopener" を付与するように。
      // IE11 もサポートする場合は noreferrer も必要だが、現代では IE11 はサポートしないので noopener のみで十分。
      // ref: https://www.mizdra.net/entry/2020/10/28/234533
      'react/jsx-no-target-blank': [2, { allowReferrer: true }],
      // コーディングスタイル統一のため、`<Component />` の形式で記述できる場合はそのように記述する
      'react/self-closing-comp': 2,
      // 現代では TypeScript で型を制限することが多いので、propTypes は使わない
      'react/prop-types': 0,
    },
  },
]).map((config) => ({ ...config, files: [jsPattern, tsPattern] }));

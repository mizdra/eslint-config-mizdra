// @ts-check

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: [
    // react
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // React 17 で追加された新しい JSX Transform を利用するための設定
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
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
};

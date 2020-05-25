module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: [
    // react
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // react
    'react/self-closing-comp': 2,
    // propTypes は使わないので off にする
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
};

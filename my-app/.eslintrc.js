module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-indent': ['error', 2],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'import/no-unresolved': [2, { ignore: [ 'react-router-dom', 'lodash.get' ] }],
    'comma-dangle': ['error', 'never'],
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "./src/setupTests.js"]}],
    "react/forbid-prop-types": 'off',
    "react/require-default-props": 'off',
    "react/jsx-props-no-spreading": 'off'
  },

};

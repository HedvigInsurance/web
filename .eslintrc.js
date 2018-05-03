const OFF = 'off';
const ERROR = 'error';
const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  // Stop ESLint from looking for a configuration file in parent folders
  root: true,
  extends: ['airbnb', 'plugin:jsx-a11y/strict', 'prettier', 'prettier/react'],
  plugins: ['jest', 'react', 'jsx-a11y'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': OFF,
    'import/default': ERROR,
    'import/prefer-default-export': OFF,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js'] }],
    'jsx-a11y/anchor-is-valid': [
      ERROR,
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/*.js'],
      rules: {
        // https://github.com/jest-community/eslint-plugin-jest
        'jest/no-focused-tests': ERROR,
      },
    },
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              src: path.resolve(__dirname, 'src/'),
              assets: path.resolve(__dirname, 'static/assets/'),
            },
          },
        },
      },
    },
  },
  globals: {
    graphql: false,
  },
};

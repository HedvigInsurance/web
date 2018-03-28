const OFF = 'off';
const ERROR = 'error';

module.exports = {
  parser: 'babel-eslint',
  // Stop ESLint from looking for a configuration file in parent folders
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['jest', 'react'],
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
    'jsx-a11y/href-no-hash': OFF,
    'no-console': OFF,
    'import/default': ERROR,
    'import/extensions': OFF, // fix me
    'import/no-unresolved': OFF, // fix me (support wepack alias)
    'react/no-unescaped-entities': OFF,
    'import/prefer-default-export': OFF,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js', '.jsx'] }],
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
      jest: {
        jestConfigFile: './jest.config.js',
      },
    },
  },
};

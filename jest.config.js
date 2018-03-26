module.exports = {
  globals: {},
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.js',
  testMatch: ['**/__tests__/**/*.{js,jsx}', '**/?(*.)(spec|test).{js,jsx}'],
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.cache/'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
  },
};

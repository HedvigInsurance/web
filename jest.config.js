module.exports = {
  globals: {},
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,tsx}'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.js',
  testMatch: [
    '**/__tests__/**/*.{js,jsx,ts,tsx}',
    '**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  snapshotSerializers: ['jest-emotion/serializer', 'enzyme-to-json/serializer'],
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.cache/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^assets(.*)$': '<rootDir>/static/assets$1',
  },
};

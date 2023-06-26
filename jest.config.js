module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@_lib(.*)': '<rootDir>/app/_lib/$1',
    '@_types(.*)': '<rootDir>/app/_types/$1',
    '@_ui(.*)': '<rootDir>/app/_ui/$1',
  },
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', './next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)', 'pages/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}

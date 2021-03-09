module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    bail: 1,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['pages/**/*.ts[x]'],
    coverageReporters: ['lcov', 'text'],
  };
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/pages/*.{ts,js,tsx,jsx}"],
  coverageDirectory: "<rootDir>/src/pages/__tests__/coverage",
  testPathIgnorePatterns: [
    "<rootDir>/src/pages/__tests__/exclude",
    "<rootDir>/src/pages/__tests__/coverage",
  ],
};

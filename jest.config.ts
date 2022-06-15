module.exports = {
  setupFilesAfterEnv: ["src/setupTests.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["src/pages/*.{ts,js,tsx,jsx}"],
  coverageDirectory: "src/pages/__tests__/coverage",
  testPathIgnorePatterns: [
    "src/pages/__tests__/exclude",
    "src/pages/__tests__/coverage",
  ],
};

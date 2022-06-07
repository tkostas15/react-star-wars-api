module.exports = {
  setupFilesAfterEnv: ["./src/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src//mocks/cssMocks.js",
    "\\.(png|jpg|jpeg)$": "<rootDir>/src//mocks/imagesMocks.js",
  },
};

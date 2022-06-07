const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3003",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: "*ignore.js",
    defaultCommandTimeout: 10000,
    setupFilesAfterEnv: ["./cypress.setup.js"],
  },
});

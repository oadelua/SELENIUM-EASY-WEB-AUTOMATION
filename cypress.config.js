const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.seleniumeasy.com/',
    "defaultCommandTimeout": 8000,
      "pageLoadTimeout": 80000,
      "viewportWidth": 1800
  },
});

const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    "specPattern": "**/*.feature",
    baseUrl: 'https://advantageonlineshopping.com/#',
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});

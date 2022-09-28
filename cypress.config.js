/* eslint-disable no-unused-vars */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  video: true,
  screenshots: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots"
});

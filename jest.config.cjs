const { defaults } = require("jest-config");

/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts", "cts"],
  verbose: true,
};

module.exports = config;

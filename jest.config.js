module.exports = {
  setupFilesAfterEnv: ["./src/setupTests.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.jsx$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};

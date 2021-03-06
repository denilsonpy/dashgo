module.exports = {
  testIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFileAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: 'jsdom'
}
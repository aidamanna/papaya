module.exports = {
  testMatch: ["**/test/*.(spec|test).ts"],
  transform: {
    "\\.[jt]sx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
}
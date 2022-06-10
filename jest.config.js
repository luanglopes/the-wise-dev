export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  testEnvironment: 'node',
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  transform: {
    "^.+\\.(t|j)s$": ["@swc/jest"],
  },
};

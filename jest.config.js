/** @type {import('jest').Config} */

module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    preset: 'ts-jest',
    collectCoverage: false,
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts",
        "!src/index.tsx",
        "!src/serviceWorker.ts",
        "!src/reportWebVitals.ts"
    ],
    coveragePathIgnorePatterns: [
        "./src/*/*.types.{ts,tsx}",
        "./src/index.tsx",
        "./src/serviceWorker.ts"
    ],
    coverageReporters: [
        "json",
        "lcov",
        "text-summary",
        "clover"
    ],
    coverageThreshold: {
        global: {
            "statements": 95,
            "branches": 95,
            "lines": 95,
            "functions": 95
        }
    },
    coverageDirectory: "<rootDir>/coverage-jest",
    transform: {
        '^.+\\.(ts|tsx)?$': [
            'ts-jest', {
                diagnostics: true,
            }
        ],
        "\\.(js|jsx)?$": "babel-jest",
        '\\.(jpg|jpeg|png|gif)$':
            '<rootDir>/src/mocks/jestImageTransformer.js',
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
    ],
    moduleNameMapper: {
        '^.+\\.(css|less|sass|scss)$': "identity-obj-proxy",
        '\\.svg$':
            '<rootDir>/src/mocks/jestSvgTransformer.js',
    },
    testPathIgnorePatterns: ['exclude']
};
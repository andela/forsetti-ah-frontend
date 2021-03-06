module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFiles: [
      '<rootDir>/enzyme.config.js',
      '<rootDir>/src/__mocks__/document.js',
    ],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\',
    '<rootDir>/cypress',
  ],
    testURL: 'http://localhost',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: true,
    transform: {
        '.+\\.(css|styl|less|sass|scss)$':
          '<rootDir>/node_modules/jest-css-modules-transform',
        '^.+\\.js?$': 'babel-jest',
        '^.+\\.jsx?$': 'babel-jest',
      },
      moduleNameMapper: {
        '^.+\\.(jpg|png|svg)$': 'babel-jest'
      },
      modulePathIgnorePatterns: [ 'store/', 'src/index.jsx', 'src/reducers/index.js', 'src/components/index.js']
  };

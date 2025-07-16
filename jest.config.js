export default {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^@components/molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '^@components/organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    '^@radix-styles/atoms/(.*)$': '<rootDir>/src/radix/atoms/$1',
    '^@radix-styles/molecules/(.*)$': '<rootDir>/src/radix/molecules/$1',
    '^@radix-styles/organisms/(.*)$': '<rootDir>/src/radix/organisms/$1',
    '^@internal/types/(.*)$': '<rootDir>/src/types/$1',
    '^@radix-ui/themes/src/helpers/extract-props$':
      '<rootDir>/__mocks__/extractProps.js',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/index.{js,ts}',
    '!src/types/**/*',
    '!src/setupTests.{js,ts}',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};

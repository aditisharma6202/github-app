/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.d.ts'],
  clearMocks: true,
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'], // Add 'src' to the module directories
};


export default config;

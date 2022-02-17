import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^fixtures/(.*)$': '<rootDir>/__fixtures__/$1',
    '^consts/(.*)$': '<rootDir>/src/consts/$1',
  },
};
export default config;

import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^fixtures/(.*)$': '<rootDir>/__fixtures__/$1',
    '^consts/(.*)$': '<rootDir>/src/consts/$1',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'js',
    'tsx',
    'json',
  ],

};
export default config;

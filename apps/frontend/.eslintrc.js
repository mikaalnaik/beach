module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
  ],
  ignorePatterns: [
    '.next',
    '.now',
    'node_modules',
    'out',
    'public',
    '/**/*.d.ts',
  ],
  env: {
    jest: true,
  },
  rules: {
    // 'no-multi-spaces': 'error',
    semi: 'error',
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    quotes: ['error', 'single', { avoidEscape: true }],
    'arrow-parens': ['error', 'as-needed'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false, arraysInObjects: false }],
    'quote-props': ['error', 'as-needed'],
    'keyword-spacing': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'no-unused-vars': 'off',
  },
  globals: {
    window: true,
    console: true,
    Promise: true,
    require: true,
    process: true,
    module: true,
    CustomEvent: true,
    state: true,
    document: true,
    alert: true,
    localStorage: true,
    jest: true,
  },
};

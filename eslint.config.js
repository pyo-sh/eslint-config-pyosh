const baseConfig = require('./index.js');

module.exports = [
  ...baseConfig,
  {
    ignores: [
      'node_modules/**',
      'coverage/**',
      'dist/**',
      'build/**',
      // Ignore TypeScript config file to avoid import/no-unresolved errors
      'typescript/**',
    ],
  },
];

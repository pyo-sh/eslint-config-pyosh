const importPlugin = require('eslint-plugin-import');
const globals = require('globals');
const bestPractices = require('./rules/best-practices');
const errors = require('./rules/errors');
const es6 = require('./rules/es6');
const imports = require('./rules/imports');
const node = require('./rules/node');
const style = require('./rules/style');
const variables = require('./rules/variables');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 12,
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.json'],
        },
      },
      'import/extensions': ['.js', '.mjs', '.jsx'],
      'import/ignore': [
        'node_modules',
        '\\.(coffee|scss|css|less|hbs|svg|json)$',
      ],
    },
    rules: {
      ...bestPractices.rules,
      ...errors.rules,
      ...node.rules,
      ...style.rules,
      ...variables.rules,
      ...es6.rules,
      ...imports.rules,
    },
  },
];

# eslint-config-pyosh

[![npm version](https://img.shields.io/npm/v/eslint-config-pyosh.svg)](https://www.npmjs.com/package/eslint-config-pyosh)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

pyo-sh's ESLint shareable config for TypeScript projects.

Referenced by [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) (not based on).

## ⚠️ Version 4.0 Breaking Changes

Version 4.0 introduces **breaking changes** to support ESLint 9 and @typescript-eslint v8:

- **Requires ESLint 9.x** (Flat Config format)
- **Requires @typescript-eslint v8.x**
- **Removed `.eslintrc` format support**
- See [Migration Guide](#migration-from-v3-to-v4) below

If you need the old `.eslintrc` format, use version 3.x:
```bash
npm install --save-dev eslint-config-pyosh@3
```

## Requirements

- **Node.js**: 18.x or higher
- **ESLint**: 9.x
- **TypeScript**: 5.x (if using TypeScript configs)

## Installation

Install the package and its peer dependencies:

```bash
npm install --save-dev eslint-config-pyosh \
  @eslint/js \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-prettier \
  eslint-import-resolver-typescript \
  eslint-plugin-import \
  eslint-plugin-prettier \
  globals \
  prettier
```

Or check peer dependencies:
```bash
npm info "eslint-config-pyosh@latest" peerDependencies
```

## Usage

### Basic JavaScript Config

For JavaScript projects with import rules:

**`eslint.config.js`:**
```javascript
const pyoshConfig = require('eslint-config-pyosh');

module.exports = [
  ...pyoshConfig,
];
```

### TypeScript Config

For TypeScript projects:

**`eslint.config.js`:**
```javascript
const pyoshConfig = require('eslint-config-pyosh');
const pyoshTsConfig = require('eslint-config-pyosh/typescript');

module.exports = [
  ...pyoshConfig,
  ...pyoshTsConfig,
];
```

**Note:** Make sure you have a `tsconfig.json` in your project root.

### With Prettier

For projects using Prettier:

**`eslint.config.js`:**
```javascript
const pyoshConfig = require('eslint-config-pyosh');
const pyoshTsConfig = require('eslint-config-pyosh/typescript');
const pyoshPrettierConfig = require('eslint-config-pyosh/prettier');

module.exports = [
  ...pyoshConfig,
  ...pyoshTsConfig,
  ...pyoshPrettierConfig,
];
```

### Full Example

Complete configuration with custom settings:

**`eslint.config.js`:**
```javascript
const js = require('@eslint/js');
const globals = require('globals');
const pyoshConfig = require('eslint-config-pyosh');
const pyoshTsConfig = require('eslint-config-pyosh/typescript');
const pyoshPrettierConfig = require('eslint-config-pyosh/prettier');

module.exports = [
  // Add ESLint recommended rules
  js.configs.recommended,

  // Add pyosh configs
  ...pyoshConfig,
  ...pyoshTsConfig,
  ...pyoshPrettierConfig,

  // Custom overrides
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    ignores: ['dist/**', 'build/**', 'node_modules/**'],
  },
];
```

## Exported Configs

This package exports three configurations:

### `eslint-config-pyosh` (default)

Base JavaScript rules with import plugin configured.

**Includes:**
- Core ESLint rules
- Import/export rules
- ES6+ features
- Style and formatting rules

### `eslint-config-pyosh/typescript`

TypeScript-specific rules and parser configuration.

**Requires:**
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-import-resolver-typescript`

**Features:**
- TypeScript parser and plugin
- Type-aware linting rules
- Import resolver for TypeScript
- Member ordering rules
- Naming conventions

### `eslint-config-pyosh/prettier`

Prettier integration with ESLint.

**Requires:**
- `eslint-config-prettier`
- `eslint-plugin-prettier`

**Features:**
- Disables conflicting ESLint rules
- Runs Prettier as an ESLint rule
- JSX support

## Migration from v3 to v4

### What Changed?

1. **Configuration Format**: `.eslintrc.*` → `eslint.config.js` (Flat Config)
2. **ESLint Version**: 8.x → 9.x
3. **@typescript-eslint Version**: 6.x → 8.x
4. **Removed Rules**: Some deprecated rules were replaced

### Deprecated Rules Replaced

| Old Rule (v3) | New Rule (v4) |
|---------------|---------------|
| `@typescript-eslint/ban-types` | `@typescript-eslint/no-empty-object-type`<br>`@typescript-eslint/no-unsafe-function-type`<br>`@typescript-eslint/no-wrapper-object-types` |
| `@typescript-eslint/no-empty-interface` | `@typescript-eslint/no-empty-object-type` |
| `@typescript-eslint/no-var-requires` | `@typescript-eslint/no-require-imports` |

### Migration Steps

1. **Update dependencies:**
   ```bash
   npm install --save-dev \
     eslint@^9.0.0 \
     @typescript-eslint/eslint-plugin@^8.0.0 \
     @typescript-eslint/parser@^8.0.0 \
     globals@^15.0.0 \
     @eslint/js@^9.0.0
   ```

2. **Delete old config:**
   ```bash
   rm .eslintrc.js .eslintrc.json .eslintrc.yml .eslintrc
   ```

3. **Create new Flat Config:**

   **Old `.eslintrc.js`:**
   ```javascript
   module.exports = {
     extends: [
       'eslint-config-pyosh',
       'eslint-config-pyosh/typescript',
       'eslint-config-pyosh/prettier',
     ],
   };
   ```

   **New `eslint.config.js`:**
   ```javascript
   const pyoshConfig = require('eslint-config-pyosh');
   const pyoshTsConfig = require('eslint-config-pyosh/typescript');
   const pyoshPrettierConfig = require('eslint-config-pyosh/prettier');

   module.exports = [
     ...pyoshConfig,
     ...pyoshTsConfig,
     ...pyoshPrettierConfig,
   ];
   ```

4. **Update npm scripts** (if needed):
   ```json
   {
     "scripts": {
       "lint": "eslint .",
       "lint:fix": "eslint . --fix"
     }
   }
   ```

5. **Test your configuration:**
   ```bash
   npm run lint
   ```

## Troubleshooting

### Import Plugin Not Found

If you see `Could not find plugin "import"`:

Make sure all peer dependencies are installed:
```bash
npm install --save-dev eslint-plugin-import
```

### TypeScript Parser Issues

If you see parser errors with TypeScript files:

1. Ensure `tsconfig.json` exists in your project root
2. Check that TypeScript files are matched by the config
3. Verify `@typescript-eslint/parser` is installed

### Prettier Conflicts

If you see style conflicts between ESLint and Prettier:

1. Make sure `eslint-config-prettier` is the **last** config in your array
2. Update your Prettier config to match your style preferences

## Contributing

Issues and pull requests are welcome! Please visit the [GitHub repository](https://github.com/pyo-sh/eslint-config-pyosh).

## License

MIT © [pyo-sh](https://github.com/pyo-sh)

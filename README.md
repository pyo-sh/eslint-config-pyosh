# eslint-config-pyosh

pyo-sh's ESLint rule set.
Referenced by [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), (not based on).

## Installation

Install `eslint-config-pyosh` package:

1. Install the correct versions of each package, which are listed by the command:

```
npm info "eslint-config-pyosh" peerDependencies
```

if using **npm 5+**, use this shortcut

```
npx install-peerdeps --dev eslint-config-pyosh
```

if using **yarn**, use this command

```
yarn add --peer --dev eslint-config-pyosh
```

2. Install via package manager:

```
npm install --save-dev eslint-config-pyosh
```

or

```
yarn --dev eslint-config-pyosh
```

## Usage

### eslint-config-pyosh

Rule about javascript, but it does not have babel setting.
if you want only javascript rule setting, should set eslint babel

> - eslint
> - eslint-plugin-import

```javascript
module.exports = {
  extends: ["eslint-config-pyosh"],
};
```

### eslint-config-pyosh/typescript

> - @typescript-eslint/eslint-plugin
> - @typescript-eslint/parser
> - eslint-import-resolver-typescript

```javascript
module.exports = {
  extends: ["eslint-config-pyosh", "eslint-config-pyosh/typescript"],
};
```

### eslint-config-pyosh/prettier

> - eslint-config-prettier
> - eslint-plugin-prettier

```javascript
module.exports = {
  extends: [
    "eslint-config-pyosh",
    "eslint-config-pyosh/typescript",
    "eslint-config-pyosh/prettier",
  ],
};
```

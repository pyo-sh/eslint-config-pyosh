module.exports = {
  "env": {
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json"],
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "files": ["**/*.ts?(x)"],
  "plugins": ["@typescript-eslint"],
  "extends": ["plugin:@typescript-eslint/recommended"],

  "rules": {
    // For more information
    // see : https://typescript-eslint.io/rules/

    // https://typescript-eslint.io/rules/indent/
    "@typescript-eslint/indent": "off",

    // https://typescript-eslint.io/rules/no-non-null-assertion/
    "@typescript-eslint/no-non-null-assertion": "off",

    // https://typescript-eslint.io/rules/no-explicit-any/
    "@typescript-eslint/no-explicit-any": "warn",

    // https://typescript-eslint.io/rules/explicit-function-return-type/
    "@typescript-eslint/explicit-function-return-type": "off",

    // https://typescript-eslint.io/rules/no-use-before-define
    "@typescript-eslint/no-use-before-define": "off",
    
    // https://typescript-eslint.io/rules/no-empty-interface
    "@typescript-eslint/no-empty-interface": "off",
    
    // https://typescript-eslint.io/rules/prefer-as-const
    "@typescript-eslint/prefer-as-const": "warn",
    
    // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    
    // https://typescript-eslint.io/rules/ban-types
    "@typescript-eslint/ban-types": "warn",
    
    // https://typescript-eslint.io/rules/no-inferrable-types
    "@typescript-eslint/no-inferrable-types": "warn",
    
    // https://typescript-eslint.io/rules/no-empty-function
    "@typescript-eslint/no-empty-function": "off",
    
    // https://typescript-eslint.io/rules/no-var-requires
    "@typescript-eslint/no-var-requires": "warn",
    
    // https://typescript-eslint.io/rules/naming-convention
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "format": ["camelCase", "UPPER_CASE", "PascalCase"],
        "selector": "variable",
        "leadingUnderscore": "allow"
      },
      { "format": ["camelCase", "PascalCase"], "selector": "function" },
      { "format": ["PascalCase"], "selector": "interface" },
      { "format": ["PascalCase"], "selector": "typeAlias" }
    ],
    
    // https://typescript-eslint.io/rules/explicit-module-boundary-types
    "@typescript-eslint/explicit-module-boundary-types": "off",
    
    // https://typescript-eslint.io/rules/array-type
    "@typescript-eslint/array-type": [
      "error",
      { "default": "array-simple" }
    ],
    
    // https://typescript-eslint.io/rules/no-unused-vars
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { "ignoreRestSiblings": true }
    ],
    
    // https://typescript-eslint.io/rules/member-ordering
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": [
          "public-static-field",
          "private-static-field",
          "public-instance-field",
          "private-instance-field",
          "public-constructor",
          "private-constructor",
          "public-instance-method",
          "private-instance-method"
        ]
      }
    ],
  }
}
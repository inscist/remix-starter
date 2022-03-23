/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "baseui",
    "unicorn"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      extends: ["plugin:@nrwl/nx/typescript"],
      rules: {
        "brace-style": [
          "warn",
          "allman",
          {
            "allowSingleLine": true
          }
        ],
        "comma-dangle": ["warn", {
          "arrays": "always-multiline",
          "objects": "always-multiline",
          "imports": "always-multiline",
          "exports": "always-multiline",
          "functions": "never"
        }],
        "indent": [
          "off",
          4,
          {
            "SwitchCase": 1
          }
        ],
        "lines-around-comment": [
          "off",
          {
            "beforeBlockComment": true,
            "afterBlockComment": false
          }
        ],
        "lines-between-class-members": ["error", "always"],
        "max-len": [
          "off",
          {
            "max": 140,
            "skipComments": true
          }
        ],
        "multiline-ternary": ["error", "always-multiline"],
        "newline-per-chained-call": [
          "warn",
          {
            "ignoreChainWithDepth": 2
          }
        ],
        "no-console": "warn",
        "object-curly-newline": [
          "warn",
          {
            "ObjectExpression": {
              "consistent": true
            },
            "ObjectPattern": {
              "consistent": true
            },
            "ImportDeclaration": "never",
            "ExportDeclaration": {
              "multiline": true,
              "minProperties": 3,
              "consistent": true
            }
          }
        ],
        "object-property-newline": [
          "error",
          {
            "allowAllPropertiesOnSameLine": true
          }
        ],
        "one-var-declaration-per-line": ["error", "always"],
        "operator-linebreak": ["error", "before"],
        "padding-line-between-statements": [
          "warn",
          {
            "blankLine": "always",
            "prev": "*",
            "next": "return"
          }
        ],
        "prefer-arrow-callback": "error",
        "quotes": [
          "warn",
          "double",
          {
            "allowTemplateLiterals": true
          }
        ],
        "semi-style": ["error", "last"],
        "space-before-function-paren": [
          "error",
          {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
          }
        ],
        "space-in-parens": ["error", "never"],
        "@nrwl/nx/enforce-module-boundaries": [
          "error",
          {
            "enforceBuildableLibDependency": true,
            "allow": [],
            "depConstraints": [
              {
                "sourceTag": "*",
                "onlyDependOnLibsWithTags": ["*"]
              }
            ]
          }
        ]
      }
    },
    {
      files: ["*.spec.*", "*.test.*"],
      extends: ["plugin:@nrwl/nx/typescript"],
      rules: {
        "brace-style": [
          "warn",
          "allman",
          {
            "allowSingleLine": true
          }
        ],
        "indent": ["warn", 4]
      }
    },
    {
      files: ["*.config.ts"],
      extends: ["plugin:@nrwl/nx/typescript"],
      rules: {
        "indent": ["warn", 2]
      }
    },
    {
      files: ["*.json", "*.jsonc"],
      extends: ["plugin:@nrwl/nx/typescript"],
      rules: {
        "indent": ["warn", 2]
      }
    }
  ],
  // we're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but we have to explicitly
  // set the jest version.
  settings: {
    jest: {
      version: 27,
    },
  },
};

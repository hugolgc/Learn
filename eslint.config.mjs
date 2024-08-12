// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  { ignores: ["eslint.config.mjs"] },
  { languageOptions: { parserOptions: { project: true } } },
  {
    rules: {
      "@typescript-eslint/typedef": [
        "error",
        {
          arrayDestructuring: true,
          objectDestructuring: true,
          propertyDeclaration: true,
          variableDeclaration: true,
          memberVariableDeclaration: true,
          variableDeclarationIgnoreFunction: true,
        },
      ],
      "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "@typescript-eslint/no-unsafe-function-type": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
    },
  }
);

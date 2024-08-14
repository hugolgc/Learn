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
                    parameter: true,
                    arrayDestructuring: true,
                    objectDestructuring: true,
                    propertyDeclaration: true,
                    variableDeclaration: true,
                    memberVariableDeclaration: true,
                },
            ],

            "@typescript-eslint/prefer-find": "error",
            "@typescript-eslint/unbound-method": "off",
            "@typescript-eslint/prefer-readonly": "error",
            "@typescript-eslint/member-ordering": "error",
            "@typescript-eslint/no-require-imports": "error",
            "@typescript-eslint/no-extraneous-class": "off",
            "@typescript-eslint/no-empty-object-type": "error",
            "@typescript-eslint/method-signature-style": ["error", "method"],
            "@typescript-eslint/no-wrapper-object-types": "error",
            "@typescript-eslint/no-unsafe-function-type": "error",
            "@typescript-eslint/consistent-type-exports": "error",
            "@typescript-eslint/no-useless-empty-export": "error",
            "@typescript-eslint/prefer-enum-initializers": "error",
            "@typescript-eslint/no-unnecessary-qualifier": "error",
            "@typescript-eslint/strict-boolean-expressions": "error",
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/explicit-member-accessibility": "error",
            "@typescript-eslint/explicit-module-boundary-types": "error",
            "@typescript-eslint/no-unnecessary-type-parameters": "error",
            "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",

            // Disable
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/prefer-readonly-parameter-types": "off",

            //  Default NestJS
            //  "@typescript-eslint/no-explicit-any': "off",
            //  "@typescript-eslint/interface-name-prefix': "off",
            //  "@typescript-eslint/explicit-function-return-type': "off",
            //  "@typescript-eslint/explicit-module-boundary-types': "off",
        },
    },
);

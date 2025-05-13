// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(eslint.configs.all, tseslint.configs.all, {
    ignores: ["dist/"],
    languageOptions: {
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    rules: {
        "new-cap": "off",
        "one-var": "off",
        "id-length": "off",
        "sort-keys": "off",
        "no-console": "off",
        "no-ternary": "off",
        "no-undefined": "off",
        "sort-imports": "off",
        "max-statements": "off",
        "arrow-body-style": "off",
        "no-warning-comments": "off",
        "no-restricted-syntax": ["error", { selector: "Literal[value=null]" }],
        "@typescript-eslint/typedef": [
            "error",
            {
                parameter: true,
                arrowParameter: false,
                arrayDestructuring: true,
                objectDestructuring: true,
                propertyDeclaration: true,
                variableDeclaration: true,
                memberVariableDeclaration: true,
                variableDeclarationIgnoreFunction: true,
            },
        ],
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/max-params": "off",
        "@typescript-eslint/no-magic-numbers": [
            "error",
            {
                ignoreEnums: false,
                ignoreTypeIndexes: false,
                ignoreNumericLiteralTypes: false,
                ignoreReadonlyClassProperties: true,
            },
        ],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/init-declarations": "off",
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-restricted-types": ["error", { types: { null: "Use `undefined` instead." } }],
        "@typescript-eslint/parameter-properties": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/class-methods-use-this": "off",
        "@typescript-eslint/method-signature-style": ["error", "method"],
        "@typescript-eslint/consistent-type-imports": ["error", { prefer: "no-type-imports" }],
        "@typescript-eslint/strict-boolean-expressions": [
            "error",
            {
                allowAny: false,
                allowNumber: false,
                allowString: false,
                allowNullableEnum: false,
                allowNullableObject: false,
                allowNullableNumber: false,
                allowNullableString: false,
                allowNullableBoolean: false,
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            },
        ],
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
    },
});

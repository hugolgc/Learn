// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(eslint.configs.all, tseslint.configs.all, {
    languageOptions: {
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    rules: {
        "one-var": "off",
        "no-console": "off",
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
        "@typescript-eslint/no-magic-numbers": ["error", { ignoreReadonlyClassProperties: true }],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/parameter-properties": "off",
    },
});

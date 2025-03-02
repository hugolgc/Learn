// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    { ignores: ["eslint.config.mjs", "dist/"] },
    { languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } } },
    {
        rules: {
            eqeqeq: "error",
            "no-shadow": "error",
            "no-loop-func": "error",
            "no-magic-numbers": "error",
            "no-implicit-coercion": "error",
            "prefer-destructuring": "error",
            "no-restricted-syntax": [
                "error",
                {
                    message: "Usage of `null` is not allowed. Use `undefined` instead.",
                    selector: "Literal[value=null]",
                },
            ],
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
            "@typescript-eslint/array-type": ["error", { default: "array" }],
            "@typescript-eslint/member-ordering": "error",
            "@typescript-eslint/prefer-readonly": "error",
            "@typescript-eslint/naming-convention": [
                "error",
                { selector: "class", format: ["PascalCase"] },
                { selector: "variable", format: ["camelCase"] },
                { selector: "variable", format: ["camelCase", "UPPER_CASE"], modifiers: ["const"] },
                { selector: "interface", format: ["PascalCase"] },
                { selector: "typeAlias", format: ["PascalCase"] },
                { selector: "enumMember", format: ["UPPER_CASE"] },
            ],
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-extraneous-class": "off",
            "@typescript-eslint/no-restricted-types": [
                "error",
                { types: { null: "Usage of `null` is not allowed. Use `undefined` instead." } },
            ],
            "@typescript-eslint/method-signature-style": ["error", "method"],
            "@typescript-eslint/no-useless-empty-export": "error",
            "@typescript-eslint/no-unsafe-type-assertion": "error",
            "@typescript-eslint/no-unnecessary-qualifier": "error",
            "@typescript-eslint/prefer-enum-initializers": "error",
            "@typescript-eslint/require-array-sort-compare": "error",
            "@typescript-eslint/strict-boolean-expressions": ["error", { allowNumber: false, allowString: false }],
            "@typescript-eslint/switch-exhaustiveness-check": "error",
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/explicit-member-accessibility": "error",
            "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
        },
    },
);

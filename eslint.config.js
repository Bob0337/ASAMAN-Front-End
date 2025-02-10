import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import typescript from "@typescript-eslint/parser"; 

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescript, 
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      prettier,
      "@typescript-eslint": ["typescript"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
      "no-debugger": "off",
    },
    ignores: ["node_modules", "build", "dist"],
  },
];

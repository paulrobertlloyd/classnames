import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";

export default [
  js.configs.recommended,
  unicorn.configs["flat/recommended"],
  {
    ignores: ["_site/"],
  },
  {
    files: ["**/*.js"],
    languageOptions: { globals: { ...globals.node } },
  },
  prettier,
];

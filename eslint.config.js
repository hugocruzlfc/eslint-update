import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      pluginReactConfig,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
  {
    ignores: ["node_modules", "dist", "public"],
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
];

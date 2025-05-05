import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      ...pluginReact.configs.recommended.rules,
      // Si necesitas sobrescribir alguna regla del plugin de React
      // por ejemplo, si aún quisieras desactivar específicamente
      "react/react-in-jsx-scope": "off", // Esto generalmente no es necesario con "detect"
      "react/jsx-uses-react": "off", // Esto tampoco es necesario con "detect"
    },
  },
]);
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
// Asegúrate de que el plugin de Next.js esté instalado:
// npm install @next/eslint-plugin-next --save-dev
import nextPlugin from "@next/eslint-plugin-next";

import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    // javascript basics
    ...js.configs.recommended,
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      // define global env browser
      globals: globals.browser,
    },
  },
  // Configuraciones recomendadas de TypeScript
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    // Configuración del plugin de React
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        // Indica al plugin que detecte automáticamente la versión de React
        version: "detect",
      },
    },
    rules: {
      // Incluye las reglas recomendadas de React
      ...pluginReact.configs.recommended.rules,
      // Sobrescribe o desactiva reglas si es necesario
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    // Configuración del plugin de Next.js
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      // Incluye las reglas recomendadas de Next.js
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      // Agrega otras reglas de Next.js si lo necesitas
      // Ejemplo: si quisieras desactivar alguna regla específica de Next.js
      // "@next/next/no-img-element": "off",
    },
  },
]);

import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jest-fixed-jsdom",
  //configuracion de archhivos a ejecutar antes de cada prueba
  setupFilesAfterEnv: ["<rootDir>/app/setupTests.ts"],
  collectCoverageFrom: [
    "<rootDir>/components/**/*.{ts,tsx}",
    "<rootDir>/lib/**/*.{ts,tsx}",
    "<rootDir>/app/**/*.{ts,tsx}", // Incluye todos los archivos js, jsx, ts y tsx dentro de la carpeta app
    "!<rootDir>/app/types/**/*", // Excluye la carpeta app/types
    // "!<rootDir>/app/[locale]/layout.tsx",
    "!<rootDir>/components/ui/**/*",
    "!<rootDir>/components/ThemeProvider.tsx",
  ],
  testPathIgnorePatterns: ["<rootDir>/ui-tests/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // Configura el alias @ para que apunte a la raíz del proyecto
  },
};

module.exports = async () => ({
  ...(await createJestConfig(config)()),
  // https://github.com/vercel/next.js/issues/40183
  transformIgnorePatterns: ["node_modules/(?!next-intl)/"],
});

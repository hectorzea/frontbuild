import nextJest from "next/jest.js";
import type { Config } from 'jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jest-fixed-jsdom",
  //configuracion de archhivos a ejecutar antes de cada prueba
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts",
    "<rootDir>/mocks/matchMedia.mock",
  ],
  collectCoverageFrom: [
    "<rootDir>/components/**/*.{ts,tsx}",
    "<rootDir>/lib/**/*.{ts,tsx}",
    "<rootDir>/app/**/*.{ts,tsx}", // Incluye todos los archivos js, jsx, ts y tsx dentro de la carpeta app
    "!<rootDir>/app/types/**/*", // Excluye la carpeta app/types
    "!<rootDir>/components/ui/**/*",
    "!<rootDir>/components/ThemeProvider.tsx",
    "!<rootDir>/app/[(]payload[)]/**",
  ],
  testPathIgnorePatterns: ["<rootDir>/ui-tests/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // Configura el alias @ para que apunte a la raíz del proyecto
  },
};

const exportJest = async () => {
  const nextJestConfig = await createJestConfig(config)();
  return {
    ...nextJestConfig,
    transformIgnorePatterns: ["node_modules/(?!next-intl)/"],
  };
};

export default exportJest;

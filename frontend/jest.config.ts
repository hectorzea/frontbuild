import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-fixed-jsdom',
  //configuracion de archhivos a ejecutar antes de cada prueba
  setupFilesAfterEnv: ['<rootDir>/app/setupTests.ts'],
  testPathIgnorePatterns: ["<rootDir>/ui-tests/"],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)